import { Vue, Component, Prop } from 'vue-property-decorator';
import { map } from 'lodash';

@Component({})
export default class ComplainChart extends Vue {
  @Prop() private complainData!: any;

  get complainChartOptions() {
    const categories = [
      '選管會',
      '選舉主任',
      'Police',
      '廉政公署',
      '投票站主任',
    ];

    return {
      xaxis: {
        categories,
      },
    };
  }

  get complainChartDataSeries() {
    return [{
      name: '投訴個案',
      data: [
        this.complainData.againstEac,
        this.complainData.againstRo,
        this.complainData.againstPolice,
        this.complainData.againstIcac,
        this.complainData.againstPros,
      ],
    }];
  }
}
