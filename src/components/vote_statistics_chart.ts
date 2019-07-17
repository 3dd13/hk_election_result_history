import { Vue, Component, Prop } from 'vue-property-decorator';
import { map } from 'lodash';

@Component({})
export default class VoteStatisticsChart extends Vue {
  @Prop() private statisticsData!: any;

  get voteByHoursChartOptions() {
    const categories = map(this.statisticsData.accumulatedVotesByHour, (accumulatedVotesByHourItem) => accumulatedVotesByHourItem.countedAt);

    return {
      chart: {
        id: `chart-${this.statisticsData.nameEn}-accumulatedVotesByHour`,
        height: 350,
      },
      grid: {
        padding: {
          right: 30,
          left: 30,
        },
      },
      xaxis: {
        categories,
      },
      yaxis: {
        tickAmount: 5,
        labels: {
          formatter: (value) => {
            return value.toLocaleString(undefined, { maximumFractionDigits: 0 });
          },
        },
        min: 0,
        max: this.statisticsData.availableVotes,
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
        data: map(this.statisticsData.accumulatedVotesByHour, (accumulatedVotesByHourItem) => accumulatedVotesByHourItem.numberOfVotes),
      },
    ];
  }
}
