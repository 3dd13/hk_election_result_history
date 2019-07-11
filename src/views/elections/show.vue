<template>
  <div>
    <div class="container mx-auto py-10">
      <ElectionSummaryCard :summaryItem="summaryItem" v-if="summaryItem"></ElectionSummaryCard>

      <div v-if="chartItems && chartItems.length" class="w-full px-3">
        <div v-for="(chartItem, index) in chartItems" :key="index">
          <ElectionContituencyCard :chartItem="chartItem"></ElectionContituencyCard>
        </div>
      </div>
    </div>

    <div class="fixed pin z-50 overflow-auto bg-smoke-light flex">
    </div>
  </div>
</template>

<script type="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import axios from 'axios';
import { map, forEach, merge, round, pick } from 'lodash';

import ElectionSummaryCard from './ElectionSummaryCard';
import ElectionContituencyCard from './ElectionContituencyCard';

@Component({
  components: {
    ElectionSummaryCard,
    ElectionContituencyCard,
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
        height: 500,
        vAxis: {
          title: '',
        },
        chartArea: {
          width: '50%',
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
        this.candidateDisplayName(candidate),
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

  candidateDisplayName(candidate) {
    return `${candidate.nameZh}\n[${candidate.policticalAffiliationZh.replace('，', '，\n')}]`;
  }
}
</script>