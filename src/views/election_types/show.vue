<template>
  <div class="container mx-auto py-10">
    <div class="w-full px-8">
      <ul class="election-list text-left" v-if="code === 'legco'">
        <li><router-link to="/elections/2018_lcbe_kw" class="result-ready">2018年立法會補選(九龍西地方選區)</router-link></li>
        <li><router-link to="/elections/2018_lcbe" class="result-ready">2018年立法會補選</router-link></li>
        <li><router-link to="/elections/2016_lce">2016年立法會換屆選舉 [TODO]</router-link></li>
        <li><router-link to="/elections/2016_lcbe_nte">2016年立法會補選(新界東地方選區) [TODO]</router-link></li>
        <li><router-link to="/elections/2012_lce">2012年立法會選舉 [TODO]</router-link></li>
        <li><router-link to="/elections/2010_lcbe">2010年立法會補選 [TODO]</router-link></li>
        <li><router-link to="/elections/2008_lce">2008年立法會選舉 [TODO]</router-link></li>
        <li><router-link to="/elections/2007_lcbe_hki">2007年立法會補選(香港島地方選區) [TODO]</router-link></li>
        <li><router-link to="/elections/2004_lce">2004年立法會選舉 [TODO]</router-link></li>
        <li><router-link to="/elections/2001">2001年立法會補選(選舉委員會) [TODO]</router-link></li>
        <li><router-link to="/elections/2000_lcbe_hknd">2000年立法會補選(香港島地方選區) [TODO]</router-link></li>
        <li><router-link to="/elections/2000_lce">2000年立法會選舉 [TODO]</router-link></li>
        <li><router-link to="/elections/1998_lce">1998年立法會選舉 [TODO]</router-link></li>
      </ul>

      <ul class="election-list text-left" v-if="code === 'distco'">
        <li><router-link to="/elections/2019_distco">2019年元朗區議會補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2019年油尖旺區議會大南選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2018年東區區議會佳曉選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2017年中西區區議會補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2015年區議會一般選舉</router-link></li>
        <li><router-link to="/elections/2019_distco">2015年大埔區議會新富選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2014年離島區議會坪洲及喜靈洲選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2014年東區區議會南豐選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2014年離島區議會東涌北選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2014年南區區議會海怡西選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2013年油尖旺區議會京士柏選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2013年觀塘區議會坪石選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2013年沙田區議會田心選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2012年沙田區議會鞍泰選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2011年區議會選舉</router-link></li>
        <li><router-link to="/elections/2019_distco">2011年荃灣區議會福來選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2011年元朗區議會十八鄉北選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2010年南區區議會薄扶林選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2009年葵青區議會葵盛東邨選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2009年灣仔區議會鵝頸選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2009年沙田區議會大圍選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2008年黃大仙區議會慈雲西選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2008年油尖旺區議會佐敦東選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2007年區議會選舉</router-link></li>
        <li><router-link to="/elections/2019_distco">2007年九龍城區議會紅磡灣選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2007年大埔區議會康樂園選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2007年觀塘區議會啓業選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2007年沙田區議會錦英選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2006年東區區議會翠灣選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2006年中西區區議會正街選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2005年觀塘區議會景田選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2005年南區區議會鴨脷洲北選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2005年深水埗區議會南昌中選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2005年東區區議會堡壘選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2004年南區區議會田灣選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2003年區議會選舉</router-link></li>
        <li><router-link to="/elections/2019_distco">2003年深水埗區議會麗閣選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2003年深水埗區議會美孚選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2003年九龍城區議會海心選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2002年九龍城區議會啟德選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">2000年北區區議會鳳翠選區補選</router-link></li>
        <li><router-link to="/elections/2019_distco">1999年區議會選舉</router-link></li>
      </ul>

      <ul class="election-list text-left" v-if="code === 'rural'">
        <li><router-link to="/elections/2019_rural">鄉郊補選(2019年6月16日)</router-link></li>
        <li><router-link to="/elections/2019_rural">2019年鄉郊一般選舉</router-link></li>
        <li><router-link to="/elections/2019_rural">鄉郊補選(2018年10月7日)</router-link></li>
        <li><router-link to="/elections/2019_rural">鄉郊補選(2018年5月20日)</router-link></li>
        <li><router-link to="/elections/2019_rural">鄉郊補選(2017年12月10日)</router-link></li>
        <li><router-link to="/elections/2019_rural">鄉郊補選(2017年4月30日)</router-link></li>
        <li><router-link to="/elections/2019_rural">鄉郊補選(2016年11月27日)</router-link></li>
        <li><router-link to="/elections/2019_rural">鄉郊補選(2016年5月29日)</router-link></li>
        <li><router-link to="/elections/2019_rural">鄉郊補選(2015年12月6日)</router-link></li>
        <li><router-link to="/elections/2019_rural">鄉郊補選(2015年6月14日)</router-link></li>
        <li><router-link to="/elections/2019_rural">2015年鄉郊一般選舉</router-link></li>
        <li><router-link to="/elections/2019_rural">鄉村補選(2014年10月5日)</router-link></li>
        <li><router-link to="/elections/2019_rural">鄉村補選(2014年5月25日)</router-link></li>
        <li><router-link to="/elections/2019_rural">鄉村補選(2013年12月15日)</router-link></li>
        <li><router-link to="/elections/2019_rural">鄉村補選(2013年5月26日)</router-link></li>
        <li><router-link to="/elections/2019_rural">鄉村補選(2012年12月2日)</router-link></li>
        <li><router-link to="/elections/2019_rural">鄉村補選(2012年4月22日)</router-link></li>
        <li><router-link to="/elections/2019_rural">鄉村補選(2011年11月27日)</router-link></li>
        <li><router-link to="/elections/2019_rural">鄉村補選(2011年6月12日)</router-link></li>
        <li><router-link to="/elections/2019_rural">2011年村代表選舉</router-link></li>
        <li><router-link to="/elections/2019_rural">村代表補選(2010年10月3日)</router-link></li>
        <li><router-link to="/elections/2019_rural">村代表補選(2010年6月6日)</router-link></li>
        <li><router-link to="/elections/2019_rural">村代表補選(2010年1月17日)</router-link></li>
        <li><router-link to="/elections/2019_rural">村代表補選(2009年5月31日)</router-link></li>
        <li><router-link to="/elections/2019_rural">村代表補選(2008年11月23日)</router-link></li>
        <li><router-link to="/elections/2019_rural">村代表補選(2008年5月25日)</router-link></li>
        <li><router-link to="/elections/2019_rural">村代表補選(2008年1月6日)</router-link></li>
        <li><router-link to="/elections/2019_rural">村代表補選(2007年5月27日)</router-link></li>
        <li><router-link to="/elections/2019_rural">2007年村代表選舉</router-link></li>
        <li><router-link to="/elections/2019_rural">村代表補選(2006年10月15日)</router-link></li>
        <li><router-link to="/elections/2019_rural">村代表補選(2006年5月21日)</router-link></li>
        <li><router-link to="/elections/2019_rural">村代表補選(2006年1月8日)</router-link></li>
        <li><router-link to="/elections/2019_rural">村代表補選(2005年5月8日)</router-link></li>
        <li><router-link to="/elections/2019_rural">村代表補選(2004年11月28日)</router-link></li>
        <li><router-link to="/elections/2019_rural">村代表補選(2004年3月28日)</router-link></li>
        <li><router-link to="/elections/2019_rural">2003年村代表選舉</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script type="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class ElectionTypesShow extends Vue {
  @Prop(String) code;
}
</script>

<style>
.election-list a {
  @apply text-red-200;
}

.election-list a.result-ready {
  font-weight: bold;
  text-decoration: none;
  @apply text-green-600;
}

.election-list a.result-ready:hover {
  text-decoration: underline;
}

.election-list a.result-ready.router-link-exact-active {
  color: #42b983;
}
</style>