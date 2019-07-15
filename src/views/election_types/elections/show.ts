import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import axios from 'axios';
import { map, pick } from 'lodash';

import SummaryCard from '../../../components/summary_card.vue';
import ContituencyCard from '../../../components/contituency_card.vue';

@Component({
  components: {
    SummaryCard,
    ContituencyCard,
  },
})
export default class ElectionsShow extends Vue {
  @Prop() private code!: string;
  @Prop() private electionType!: string;

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

  get chartItems() {
    if (this.electionResultJson) {
      return this.electionResultJson.constituencyStatistics;
    } else {
      return [];
    }
  }

  get summaryItem() {
    if (this.electionResultJson) {
      return pick(this.electionResultJson, [
        'nameZh',
        'dataSource',
        'electionPeriod',
        'candidateApplicationPeriod',
        'complaintsHandlingPeriod',
        'overallStatistics',
      ]);
    } else {
      return null;
    }
  }
}
