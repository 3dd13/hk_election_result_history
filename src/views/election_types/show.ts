import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class ElectionTypesShow extends Vue {
  @Prop(String) electionType: any;
}
