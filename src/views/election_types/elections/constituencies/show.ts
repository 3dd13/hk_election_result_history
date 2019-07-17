import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import axios from 'axios';
import { find, pick } from 'lodash';

import ContituencyDetailCard from '../../../../components/contituency_detail_card.vue';

@Component({
  components: {
    ContituencyDetailCard,
  },
})
export default class ConstituenciesShow extends Vue {
  @Prop() private code!: string;
  @Prop() private electionType!: string;
  @Prop() private constituencyCode!: string;

  private electionResultJson!: any;

  data() {
    return {
      electionResultJson: this.electionResultJson,
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
    const url = `https://raw.githubusercontent.com/3dd13/govhk_election_reports/master/data/election_result/${this.electionType}/${this.code}.json`;
    axios.get(url).then((response) => {
      this.electionResultJson = response.data;
    }).catch((error) => {
      console.error(error);
    });
  }

  get chartItem() {
    if (this.electionResultJson) {
      return find(this.electionResultJson.constituencyStatistics, { constituencyCode: this.constituencyCode });
    } else {
      return null;
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
