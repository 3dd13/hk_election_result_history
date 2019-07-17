import { Vue, Component, Prop } from 'vue-property-decorator';
import { map } from 'lodash';

import VoteStatisticsChart from './vote_statistics_chart';
import ComplainChart from './complain_chart';

@Component({
  components: {
    VoteStatisticsChart,
    ComplainChart,
  },
})
export default class ElectionSummaryCard extends Vue {
  @Prop() private summaryItem!: any;

  get electionDate() {
    return this.summaryItem.electionPeriod.startedAt.substring(0, 10);
  }
}
