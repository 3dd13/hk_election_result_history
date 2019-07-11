<template>
  <div class="mb-5 border rounded-lg bg-white mx-auto text-center shadow-lg py-8">
    <div class="mb-2 text-xl">
      {{ chartItem.contitituencyStatisticsItem.nameZh }} ({{ chartItem.contitituencyStatisticsItem.constituencyCode }})
    </div>

    <div class="mb-5">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{{ constituencyTypeDisplayName(chartItem.contitituencyStatisticsItem.constituencyType) }}</span>
    </div>

    <div v-if="chartItem.contitituencyStatisticsItem.autoDulyElected">
      <div class="flex flex-col-reverse lg:flex-row">
        <div class="w-full lg:w-1/2 px-5">
          <div class="flex flex-col content-center h-full justify-center">
            <div class="flex mb-4">
              <div class="w-1/3 bg-gray-400 h-8 flex items-center justify-center">
                投票率
              </div>
              <div class="w-2/3 h-8 flex items-center justify-center">
                {{ chartItem.contitituencyStatisticsItem.voteSubmissionPercentage }} %
                (
                  {{ chartItem.contitituencyStatisticsItem.submittedVotes }} /
                  {{ chartItem.contitituencyStatisticsItem.availableVotes }}
                )
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-5">
          <div
            v-for="candidate in chartItem.contitituencyStatisticsItem.candidates" :key="candidate.candidateNumber"
            class="flex bg-green-400 py-1 text-white"
          >
            <div class="w-1/2">
              {{ candidate.nameZh }}
            </div>
            <div class="w-1/2">
              <div>
                自動當選
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!chartItem.contitituencyStatisticsItem.autoDulyElected">
      <div class="flex flex-col-reverse lg:flex-row">
        <div class="w-full lg:w-1/3 px-5">
          <div class="flex flex-col content-center h-full justify-center">
            <div class="flex mb-4">
              <div class="w-1/3 bg-gray-400 h-8 flex items-center justify-center">
                投票率
              </div>
              <div class="w-2/3 h-8 flex items-center justify-center">
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
              <div class="w-2/3 h-8 flex items-center justify-center">
                {{ Math.round(1000 * chartItem.contitituencyStatisticsItem.voidedVotes / chartItem.contitituencyStatisticsItem.availableVotes) / 10 }} %
                (
                  {{ chartItem.contitituencyStatisticsItem.voidedVotes }} /
                  {{ chartItem.contitituencyStatisticsItem.availableVotes }}
                )
              </div>
            </div>

            <div class="flex mb-4">
              <div class="w-1/3 text-right bg-gray-400 px-1">
                每小時投票人數統計
              </div>
              <div class="w-2/3">
                <div
                  v-for="accumulatedVotesByHourItem in chartItem.contitituencyStatisticsItem.accumulatedVotesByHour"
                  v-bind:key="accumulatedVotesByHourItem.countedAt"
                  class="flex border-b border-gray-100">
                  <div class="w-1/2 text-right">
                    {{ accumulatedVotesByHourItem.countedAt }}
                  </div>
                  <div class="w-1/2">
                    {{ accumulatedVotesByHourItem.numberOfVotes }}
                  </div>
                </div>
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
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { GChart } from 'vue-google-charts';

@Component({
  components: {
    GChart,
  },
})
export default class ElectionContituencyCard extends Vue {
  @Prop() private chartItem: any;

  onChartReady(chart: any, google: any, chartItem: any) {
    const data = google.visualization.arrayToDataTable(chartItem.rawDataRows);
    const options = chartItem.chartOptions;
    chart.draw(data, google.charts.Bar.convertOptions(options));
  }

  constituencyTypeDisplayName(constituencyType: string) {
    switch (constituencyType) {
      case 'geographical':
        return '地方選區';
        break;
      case 'functional':
        return '功能組別';
        break;
      case 'district':
        return '區議會';
        break;
      default:
        // code block
    }
  }
}
</script>