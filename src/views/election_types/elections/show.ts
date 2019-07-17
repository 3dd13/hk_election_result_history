import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import axios from 'axios';
import { pick, groupBy, sortBy } from 'lodash';

import ElectionSummaryCard from '../../../components/election_summary_card.vue';
import ContituencySummaryCard from '../../../components/contituency_summary_card.vue';

@Component({
  components: {
    ElectionSummaryCard,
    ContituencySummaryCard,
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

  get chartItemGroups() {
    if (this.electionResultJson) {
      const sortedByDistricts = sortBy(this.electionResultJson.constituencyStatistics, 'constituencyCode');
      const groupedByDistrict = groupBy(sortedByDistricts, 'districtNameZh');
      return groupedByDistrict;
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

  get detailPageRoutePrefix() {
    return `/election_types/${ this.electionType }/elections/${ this.code }`;
  }
}
