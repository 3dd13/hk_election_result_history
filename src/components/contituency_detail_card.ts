import { Component, Prop, Vue } from 'vue-property-decorator';
import { map } from 'lodash';

import VoteStatisticsChart from './vote_statistics_chart';

@Component({
  components: {
    VoteStatisticsChart,
  },
})
export default class ContituencyCard extends Vue {
  @Prop() private chartItem: any;

  get voteByHoursChartOptions() {
    const categories = map(this.chartItem.accumulatedVotesByHour, (accumulatedVotesByHourItem) => accumulatedVotesByHourItem.countedAt);

    return {
      chart: {
        id: `chart-${this.chartItem.nameEn}-accumulatedVotesByHour`,
        height: 350,
      },
      xaxis: {
        categories,
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '16px',
          },
        },
        min: 0,
        max: this.chartItem.availableVotes,
      },
      markers: {
        size: 1,
      },
      dataLabels: {
        enabled: true,
        offsetY: -30,
      },
    };
  }

  get voteByHoursChartDataSeries() {
    return [
      {
        name: '每小時投票人數',
        data: map(this.chartItem.accumulatedVotesByHour, (accumulatedVotesByHourItem) => accumulatedVotesByHourItem.numberOfVotes),
      },
    ];
  }

  get voteByCandidatesChartOptions() {
    const allCandidates = this.allCandidates();
    const categories = map(allCandidates, (candidate) => this.candidateDisplayName(candidate));
    const yaxisColors = map(allCandidates, (candidate) => this.candidateDisplayNameStyle(candidate));

    return {
      chart: {
        id: `chart-${this.chartItem.nameEn}`,
        stacked: true,
        height: 350,
      },
      xaxis: {
        categories,
      },
      yaxis: {
        labels: {
          minWidth: 50,
          maxWidth: 150,
          style: {
            colors: yaxisColors,
            fontSize: '16px',
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          endingShape: 'flat',
          columnWidth: '80%',
          barHeight: '70%',
          dataLabels: {
            position: 'top',
            maxItems: 100,
            hideOverflowingLabels: true,
          },
        },
      },
    };
  }

  get voteByCandidatesChartDataSeries() {
    const allCandidates = this.allCandidates();
    return [
      {
        name: '落選',
        data: map(allCandidates, (candidate) => {
          return candidate.elected ? 0 : candidate.receivedVotes;
        }),
      },
      {
        name: '獲選',
        data: map(allCandidates, (candidate) => {
          return candidate.elected ? candidate.receivedVotes : 0;
        }),
      },
      {
        name: '提名無效',
        data: map(allCandidates, (otherNomination) => {
          return 0;
        }),
      },
    ];
  }

  allCandidates() {
    return this.chartItem.candidates.concat(this.chartItem.otherNominations);
  }

  candidateDisplayName(candidate: any) {
    if (candidate.reasonOfNotValidlyNominated) {
      return `${candidate.nameZh} **${candidate.reasonOfNotValidlyNominated}`;
    } else {
      return `${candidate.nameZh}`;
    }
  }

  candidateDisplayNameStyle(candidate: any) {
    if (candidate.reasonOfNotValidlyNominated) {
      return '#963';
    } else if (candidate.elected) {
      return '#396';
    } else {
      return '#369';
    }
  }

  candidateDisplayOccupation(candidate) {
    return candidate.occupationZh.replace('，', '<br/>');
  }

  candidateDisplayPolicticalAffiliation(candidate) {
    return candidate.policticalAffiliationZh.replace('，', '，\n');
  }
}
