import { Vue, Component, Prop } from 'vue-property-decorator';
import { map } from 'lodash';

import VoteStatisticsChart from './vote_statistics_chart';

@Component({
  components: {
    VoteStatisticsChart,
  },
})
export default class SummaryCard extends Vue {
  @Prop() private summaryItem!: any;
}
