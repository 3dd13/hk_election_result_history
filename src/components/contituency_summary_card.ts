import { Component, Prop, Vue } from 'vue-property-decorator';
import { filter } from 'lodash';

import VoteStatisticsChart from './vote_statistics_chart';

@Component({
  components: {
    VoteStatisticsChart,
  },
})
export default class ContituencySummaryCard extends Vue {
  @Prop() private chartItem: any;
  @Prop() private detailPageRoutePrefix: any;

  get detailPageRoute() {
    return `${ this.detailPageRoutePrefix }/constituencies/${this.chartItem.constituencyCode}`;
  }

  get allCandidates() {
    return this.chartItem.candidates.concat(this.chartItem.otherNominations);
  }

  candidateDisplayName(candidate: any) {
    if (candidate.reasonOfNotValidlyNominated) {
      return `${candidate.nameZh} **${candidate.reasonOfNotValidlyNominated}`;
    } else {
      return `${candidate.nameZh}`;
    }
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
