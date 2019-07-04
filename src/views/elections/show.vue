<template>
  <div class="container mx-auto py-10">
    <div v-if="summaryItem" class="w-full px-3">
      <div class="mb-5 rounded-lg bg-white mx-auto text-center shadow-lg py-8 border-l-8 border-green-800">
        <div>
          <div class="text-xl mb-1">
            {{ summaryItem.nameZh }}
          </div>
          <div class="mb-5">
            <span>
              資料來源:
            </span>
            <span>
              <a v-bind:href="summaryItem.dataSource" class="text-green-600">
                {{ summaryItem.dataSource }}
              </a>
            </span>
          </div>
        </div>

        <div class="flex border-b-2 border-gray-100 my-1">
          <div class="w-1/6 text-right bg-gray-400 px-1">
            投票時段
          </div>
          <div class="w-2/6">
            {{ summaryItem.electionPeriod.startedAt }} 至
            {{ summaryItem.electionPeriod.endedAt }}
          </div>
        </div>

        <div class="flex border-b-2 border-gray-100 my-1">
          <div class="w-1/6 text-right bg-gray-400 px-1">
            候選人遞交申請時間
          </div>
          <div class="w-2/6">
            {{ summaryItem.candidateApplicationPeriod.startedAt }} 至
            {{ summaryItem.candidateApplicationPeriod.endedAt }}
          </div>

          <div class="w-1/6 text-right bg-gray-400 px-1">
            有效候選人申請
          </div>
          <div class="w-2/6">
            {{ summaryItem.overallStatistics.candidateApplications.approvedApplications }} /
            {{ summaryItem.overallStatistics.candidateApplications.receivedApplications }}
          </div>
        </div>

        <div class="flex border-b-2 border-gray-100 my-1">
          <div class="w-1/6 text-right bg-gray-400 px-1">
            投訴遞交時間
          </div>
          <div class="w-2/6">
            {{ summaryItem.complaintsHandlingPeriod.startedAt }} 至
            {{ summaryItem.complaintsHandlingPeriod.endedAt }}
          </div>

          <div class="w-1/6 text-right bg-gray-400 px-1">
            投訴數目
          </div>
          <div class="w-2/6">
            <div class="flex border-b border-gray-100">
              <div class="w-1/2 text-right">
                EAC 選管會
              </div>
              <div class="w-1/2">
                {{ summaryItem.overallStatistics.receivedComplaints.againstEac }}
              </div>
            </div>
            <div class="flex border-b border-gray-100">
              <div class="w-1/2 text-right">
                RO 選舉主任
              </div>
              <div class="w-1/2">
                {{ summaryItem.overallStatistics.receivedComplaints.againstRo }}
              </div>
            </div>
            <div class="flex border-b border-gray-100">
              <div class="w-1/2 text-right">
                Police
              </div>
              <div class="w-1/2">
                {{ summaryItem.overallStatistics.receivedComplaints.againstPolice }}
              </div>
            </div>
            <div class="flex border-b border-gray-100">
              <div class="w-1/2 text-right">
                ICAC 廉政公署
              </div>
              <div class="w-1/2">
                {{ summaryItem.overallStatistics.receivedComplaints.againstIcac }}
              </div>
            </div>
            <div class="flex">
              <div class="w-1/2 text-right">
                PROs 投票站主任
              </div>
              <div class="w-1/2">
                {{ summaryItem.overallStatistics.receivedComplaints.againstPros }}
              </div>
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="w-1/6 text-right bg-gray-400 px-1">
            投票率
          </div>
          <div class="w-2/6">
            <div>
              {{ summaryItem.overallStatistics.voteSubmissionPercentage }} %
              (
                {{ summaryItem.overallStatistics.submittedVotes }} /
                {{ summaryItem.overallStatistics.availableVotes }}
              )
            </div>
            <div>
              Voided: {{ summaryItem.overallStatistics.voidedVotes }}
            </div>
          </div>
          <div class="w-1/6 text-right bg-gray-400 px-1">
            每小時投票人數統計
          </div>
          <div class="w-2/6">
            <div
              v-for="accumulatedVotesByHourItem in summaryItem.overallStatistics.accumulatedVotesByHour"
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

    <div v-if="chartItems && chartItems.length" class="w-full px-3">
      <div v-for="(chartItem, index) in chartItems" :key="index" class="mb-5 border rounded-lg bg-white mx-auto text-center shadow-lg py-8">
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
    </div>
  </div>
</template>

<script type="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { GChart } from 'vue-google-charts';
import axios from 'axios';
import { map, forEach, merge, round, pick } from 'lodash';


@Component({
  components: {
    GChart,
  },
})
export default class ElectionsShow extends Vue {
  @Prop(String) code;
  @Prop(String) electionType;

  data() {
    return {
      summaryItem: null,
      chartItems: null,
      chartsLib: null,
      electionResultJson: null,
      defaultChartOptions: {
        legend: {
          position: 'none',
        },
        bars: 'horizontal',
        height: 450,
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
  onCodeChanged() {
    this.fetchElectionResult();
  }

  @Watch('$route.params.electionType')
  onElectionTypeChanged() {
    this.fetchElectionResult();
  }

  fetchElectionResult() {
    if (this.chartItems) {
      this.chartItems = [];
    }

    const url = `https://raw.githubusercontent.com/3dd13/govhk_election_reports/master/data/election_result/${this.electionType}/${this.code}.json`;
    axios.get(url).then((response) => {
      this.electionResultJson = response.data;
      this.setChartData();
    }).catch((error) => {
      console.error(error);
    });
  }

  setChartData() {
    this.summaryItem = pick(this.electionResultJson, ['nameZh', 'dataSource', 'electionPeriod', 'candidateApplicationPeriod', 'complaintsHandlingPeriod', 'overallStatistics']);
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

  constituencyTypeDisplayName(constituencyType) {
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