import { Component, Prop, Vue } from 'vue-property-decorator';
import { GChart } from 'vue-google-charts';

@Component({
  components: {
    GChart,
  },
})
export default class ContituencyCard extends Vue {
  @Prop() private chartItem: any;

  onChartReady(chart: any, google: any, chartItem: any) {
    const data = google.visualization.arrayToDataTable(chartItem.rawDataRows);
    const options = chartItem.chartOptions;
    chart.draw(data, google.charts.Bar.convertOptions(options));
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
