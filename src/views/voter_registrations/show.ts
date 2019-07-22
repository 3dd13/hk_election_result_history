import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import axios from 'axios';
import _ from 'lodash';

@Component({})
export default class VoterRegistrationsShow extends Vue {
  @Prop(String) year: any;
  private voterRegistrationsJson!: any;

  data() {
    return {
      voterRegistrationsJson: this.voterRegistrationsJson,
    };
  }

  mounted() {
    this.fetchVoterRegistrations();
  }

  @Watch('$route.params.year')
  onYearChanged() {
    this.fetchVoterRegistrations();
  }

  fetchVoterRegistrations() {
    const url = `https://raw.githubusercontent.com/3dd13/govhk_election_reports/master/data/voter_registrations/${this.year}.json`;
    axios.get(url).then((response) => {
      this.voterRegistrationsJson = response.data;
    }).catch((error) => {
      console.error(error);
    });
  }

  get overallData() {
    if (this.voterRegistrationsJson) {
      return this.voterRegistrationsJson.overall;
    } else {
      return null;
    }
  }

  get genderPieChartOptions() {
    return {
      chart: {
        id: `chart-gender-${this.year}`,
        height: 350,
      },
      labels: ['男', '女'],
      colors: ['#3C6', '#C63'],
      markers: {
        size: 1,
      },
      dataLabels: {
        enabled: true,
        // offsetY: -30,
      },
    };
  }

  get genderPieChartDataSeries() {
    return [this.voterRegistrationsJson.overall.maleOnly, this.voterRegistrationsJson.overall.femaleOnly];
  }

  get legcoGeographicPieChartOptions() {
    return {
      chart: {
        id: `chart-legco-geographic-pie-${this.year}`,
        height: 350,
      },
      labels: ['香港島', '九龍西', '九龍東', '新界西', '新界東'],
      markers: {
        size: 1,
      },
      dataLabels: {
        enabled: true,
        // offsetY: -30,
      },
    };
  }

  get legcoGeographicPieChartDataSeries() {
    return _.map(this.voterRegistrationsJson.byLegcoGeographic, 'count');
  }

  get legcoFunctionalBarChartOptions() {
    const categories = _.map(this.voterRegistrationsJson.byLegcoFunctional, 'nameZh');

    return {
      chart: {
        id: `chart-legco-functional-bar-${this.year}`,
        stacked: true,
        height: 1024,
      },
      xaxis: {
        categories,
      },
      yaxis: {
        labels: {
          minWidth: 50,
          maxWidth: 150,
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

  get legcoFunctionalBarChartDataSeries() {
    return [
      {
        name: '團體票',
        data: _.map(this.voterRegistrationsJson.byLegcoFunctional, 'groupCount'),
      },
      {
        name: '個人票',
        data: _.map(this.voterRegistrationsJson.byLegcoFunctional, 'individualCount'),
      },
    ];
  }
}
