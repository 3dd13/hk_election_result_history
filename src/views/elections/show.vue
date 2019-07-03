<template>
  <div class="container mx-auto py-10">
    <div v-if="chartItems && chartItems.length" class="w-full px-3">
      <div v-for="(chartItem, index) in chartItems" :key="index" class="mb-5 border rounded-lg bg-white mx-auto text-center shadow-lg py-8">
        <div class="mb-2 text-xl">
          {{ chartItem.contitituencyStatisticsItem.nameZh }} ({{ chartItem.contitituencyStatisticsItem.constituencyCode }})
        </div>

        <div class="mb-5">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{{ chartItem.contitituencyStatisticsItem.constituencyType }}</span>
        </div>

        <div class="flex flex-col-reverse lg:flex-row">
          <div class="w-full lg:w-1/3 px-5">
            <div class="flex flex-col content-center h-full justify-center">
              <div class="flex mb-4">
                <div class="w-1/3 bg-gray-400 h-8 flex items-center justify-center">
                  投票率
                </div>
                <div class="w-2/3 bg-gray-500 h-8 flex items-center justify-center">
                  {{ chartItem.contitituencyStatisticsItem.voteSubmissionPercentage }} %
                  (
                    {{ chartItem.contitituencyStatisticsItem.submittedVotes }} /
                    {{ chartItem.contitituencyStatisticsItem.availableVotes }}
                  )
                </div>
              </div>

              <div class="flex mb-4">
                <div class="w-1/3 bg-gray-400 h-8 flex items-center justify-center">
                  廢票
                </div>
                <div class="w-2/3 bg-gray-500 h-8 flex items-center justify-center">
                  {{ Math.round(1000 * chartItem.contitituencyStatisticsItem.voidedVotes / chartItem.contitituencyStatisticsItem.availableVotes) / 10 }} %
                  (
                    {{ chartItem.contitituencyStatisticsItem.voidedVotes }} /
                    {{ chartItem.contitituencyStatisticsItem.availableVotes }}
                  )
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-2/3">
            <GChart
              type="ColumnChart"
              :settings="{ packages: ['corechart', 'bar'] }"
              :createChart="(el, google) => new google.visualization.BarChart(el)"
              :data="null"
              @ready="(chart, google) => onChartReady(chart, google, chartItem)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { GChart } from 'vue-google-charts';
import axios from 'axios';
import { map, forEach, merge, round } from 'lodash';


@Component({
  components: {
    GChart,
  },
})
export default class ElectionsShow extends Vue {
  @Prop(String) code;

  data() {
    return {
      chartItems: null,
      chartsLib: null,
      electionResultJson: null,
      defaultChartOptions: {
        legend: {
          position: 'none',
        },
        bars: 'horizontal',
        height: 250,
        vAxis: {
          title: '',
        },
        chartArea: {
          width: '60%',
        },
      },
    };
  }

  mounted() {
    this.fetchElectionResult();
  }

  @Watch('$route.params.code')
  fetchElectionResult() {
    if (this.chartItems) {
      this.chartItems = [];
    }

    const url = `https://raw.githubusercontent.com/3dd13/govhk_election_reports/master/data/election_result/${this.code}.json`;
    axios.get(url).then((response) => {
      this.electionResultJson = response.data;
      this.setChartData();
    });
  }

  setChartData() {
    this.chartItems = map(this.electionResultJson.constituencyStatistics, (contitituencyStatisticsItem) => {
      const headerRow = [
        ['Candidates', 'Votes', { role: 'style' }],
      ];
      const dataRows = map(contitituencyStatisticsItem.candidates, (candidate) => [
        candidate.nameZh,
        candidate.receivedVotes,
        candidate.elected ? '#4C6' : '#789',
      ]);
      const rawDataRows = headerRow.concat(dataRows);

      return {
        chartOptions: this.defaultChartOptions,
        contitituencyStatisticsItem,
        rawDataRows,
      };
    });
  }

  onChartReady(chart, google, chartItem) {
    const data = google.visualization.arrayToDataTable(chartItem.rawDataRows);
    const options = chartItem.chartOptions;
    chart.draw(data, google.charts.Bar.convertOptions(options));
  }
}
</script>