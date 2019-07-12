import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class SummaryCard extends Vue {
  @Prop() private summaryItem!: any;
}
