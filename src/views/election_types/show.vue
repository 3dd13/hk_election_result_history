<template>
  <div class="container mx-auto py-10">
    <div class="px-8">
      <ul class="election-list text-left" v-if="code === 'legco'">
        <li>
          2018年
          <ul class="ml-3 mb-3">
            <li><router-link to="/elections/legco/2018_lcbe_kw" class="result-ready">立法會補選(九龍西地方選區)</router-link></li>
            <li><router-link to="/elections/legco/2018_lcbe" class="result-ready">立法會補選</router-link></li>
          </ul>
        </li>

        <li>
          2016年
          <ul class="ml-3 mb-3">
            <li><router-link to="/elections/legco/2016_lce">立法會換屆選舉 [TODO]</router-link></li>
            <li><router-link to="/elections/legco/2016_lcbe_nte">立法會補選(新界東地方選區) [TODO]</router-link></li>
          </ul>
        </li>

        <li>
          2012年
          <ul class="ml-3 mb-3">
            <li><router-link to="/elections/legco/2012_lce">立法會選舉 [TODO]</router-link></li>
          </ul>
        </li>

        <li>
          2010年
          <ul class="ml-3 mb-3">
            <li><router-link to="/elections/legco/2010_lcbe">立法會補選 [TODO]</router-link></li>
          </ul>
        </li>

        <li>
          2008年
          <ul class="ml-3 mb-3">
            <li><router-link to="/elections/legco/2008_lce">立法會選舉 [TODO]</router-link></li>
          </ul>
        </li>

        <li>
          2007年
          <ul class="ml-3 mb-3">
            <li><router-link to="/elections/legco/2007_lcbe_hki">補選(香港島地方選區) [TODO]</router-link></li>
          </ul>
        </li>

        <li>
          2004年
          <ul class="ml-3 mb-3">
            <li><router-link to="/elections/legco/2004_lce">立法會選舉 [TODO]</router-link></li>
          </ul>
        </li>

        <li>
          2001年
          <ul class="ml-3 mb-3">
            <li><router-link to="/elections/legco/2001">立法會補選(選舉委員會) [TODO]</router-link></li>
          </ul>
        </li>

        <li>
          2000年
          <ul class="ml-3 mb-3">
            <li><router-link to="/elections/legco/2000_lcbe_hknd">立法會補選(香港島地方選區) [TODO]</router-link></li>
            <li><router-link to="/elections/legco/2000_lce">立法會選舉 [TODO]</router-link></li>
          </ul>
        </li>

        <li>
          1998年
          <ul class="ml-3 mb-3">
            <li><router-link to="/elections/legco/1998_lce">立法會選舉 [TODO]</router-link></li>
          </ul>
        </li>
      </ul>

      <div class="flex" v-if="code === 'distco'">
        <div class="w-1/2 border-r-2">
          <ul class="election-list text-left">
            <li>
              2019年
              <ul class="ml-3 mb-3">
                <li>
                  <router-link to="/elections/distco/2019_dc" class="result-ready">
                    一般選舉
                    <span class="inline-block bg-red-200 rounded-full px-2 py-0 text-sm font-semibold text-gray-700 mr-2">2019/11/24</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/elections/distco/2019_yld" class="result-ready">
                    元朗區 補選
                    <span class="inline-block bg-red-200 rounded-full px-2 py-0 text-sm font-semibold text-gray-700 mr-2">2019/07/14</span>
                  </router-link>
                </li>
                <li><router-link to="/elections/distco/2019_ytmd_tn" class="result-ready">油尖旺區 大南選區補選</router-link></li>
              </ul>
            </li>

            <li>
              2018年
              <ul class="ml-3 mb-3">
                <li><router-link to="/elections/distco/2018_ed_kh" class="result-ready">東區 佳曉選區補選</router-link></li>
              </ul>
            </li>

            <li>
              2017年
              <ul class="ml-3 mb-3">
                <li><router-link to="/elections/distco/2017_cwd" class="result-ready">中西區 補選</router-link></li>
              </ul>
            </li>

            <li>
              2015年
              <ul class="ml-3 mb-3">
                <li><router-link to="/elections/distco/2019_distco">一般選舉</router-link></li>
                <li><router-link to="/elections/distco/2019_distco">大埔區 新富選區補選</router-link></li>
              </ul>
            </li>

            <li>
              2014年
              <ul class="ml-3 mb-3">
                <li><router-link to="/elections/distco/2019_distco">離島區 坪洲及喜靈洲選區補選</router-link></li>
                <li><router-link to="/elections/distco/2019_distco">東區 南豐選區補選</router-link></li>
                <li><router-link to="/elections/distco/2019_distco">離島區 東涌北選區補選</router-link></li>
                <li><router-link to="/elections/distco/2019_distco">南區 海怡西選區補選</router-link></li>
              </ul>
            </li>

            <li>
              2013年
              <ul class="ml-3 mb-3">
                <li><router-link to="/elections/distco/2019_distco">油尖旺區 京士柏選區補選</router-link></li>
                <li><router-link to="/elections/distco/2019_distco">觀塘區 坪石選區補選</router-link></li>
                <li><router-link to="/elections/distco/2019_distco">沙田區 田心選區補選</router-link></li>
              </ul>
            </li>

            <li>
              2012年
              <ul class="ml-3 mb-3">
                <li><router-link to="/elections/distco/2019_distco">沙田區 鞍泰選區補選</router-link></li>
              </ul>
            </li>

            <li>
              2011年
              <ul class="ml-3 mb-3">
                <li><router-link to="/elections/distco/2019_distco">區議會選舉</router-link></li>
                <li><router-link to="/elections/distco/2019_distco">荃灣區 福來選區補選</router-link></li>
                <li><router-link to="/elections/distco/2019_distco">元朗區 十八鄉北選區補選</router-link></li>
              </ul>
            </li>

            <li>
              2010年
              <ul class="ml-3 mb-3">
                <li><router-link to="/elections/distco/2019_distco">南區 薄扶林選區補選</router-link></li>
              </ul>
            </li>

            <li>
              2009年
              <ul class="ml-3 mb-3">
                <li><router-link to="/elections/distco/2019_distco">葵青區 葵盛東邨選區補選</router-link></li>
                <li><router-link to="/elections/distco/2019_distco">灣仔區 鵝頸選區補選</router-link></li>
                <li><router-link to="/elections/distco/2019_distco">沙田區 大圍選區補選</router-link></li>
              </ul>
            </li>

            <li>
              2008年
              <ul class="ml-3 mb-3">
                <li><router-link to="/elections/distco/2019_distco">黃大仙區 慈雲西選區補選</router-link></li>
                <li><router-link to="/elections/distco/2019_distco">油尖旺區 佐敦東選區補選</router-link></li>
              </ul>
            </li>

            <li>
              2007年
              <ul class="ml-3 mb-3">
                <li><router-link to="/elections/distco/2019_distco">區議會選舉</router-link></li>
                <li><router-link to="/elections/distco/2019_distco">九龍城區 紅磡灣選區補選</router-link></li>
                <li><router-link to="/elections/distco/2019_distco">大埔區 康樂園選區補選</router-link></li>
                <li><router-link to="/elections/distco/2019_distco">觀塘區 啓業選區補選</router-link></li>
                <li><router-link to="/elections/distco/2019_distco">沙田區 錦英選區補選</router-link></li>
              </ul>
            </li>

            <li>
              2006年
              <ul class="ml-3 mb-3">
                <li><router-link to="/elections/distco/2019_distco">東區 翠灣選區補選</router-link></li>
                <li><router-link to="/elections/distco/2019_distco">中西區 正街選區補選</router-link></li>
              </ul>
            </li>

            <li>
              2005年
              <ul class="ml-3 mb-3">
                <li><router-link to="/elections/distco/2019_distco">觀塘區 景田選區補選</router-link></li>
                <li><router-link to="/elections/distco/2019_distco">南區 鴨脷洲北選區補選</router-link></li>
                <li><router-link to="/elections/distco/2019_distco">深水埗區 南昌中選區補選</router-link></li>
                <li><router-link to="/elections/distco/2019_distco">東區 堡壘選區補選</router-link></li>
              </ul>
            </li>

            <li>
              2004年
              <ul class="ml-3 mb-3">
                <li><router-link to="/elections/distco/2019_distco">南區 田灣選區補選</router-link></li>
              </ul>
            </li>

            <li>
              2003年
              <ul class="ml-3 mb-3">
                <li><router-link to="/elections/distco/2019_distco">區議會選舉</router-link></li>
                <li><router-link to="/elections/distco/2019_distco">深水埗區 麗閣選區補選</router-link></li>
                <li><router-link to="/elections/distco/2019_distco">深水埗區 美孚選區補選</router-link></li>
                <li><router-link to="/elections/distco/2019_distco">九龍城區 海心選區補選</router-link></li>
              </ul>
            </li>

            <li>
              2002年
              <ul class="ml-3 mb-3">
                <li><router-link to="/elections/distco/2019_distco">九龍城區 啟德選區補選</router-link></li>
              </ul>
            </li>

            <li>
              2000年
              <ul class="ml-3 mb-3">
                <li><router-link to="/elections/distco/2019_distco">北區 鳳翠選區補選</router-link></li>
              </ul>
            </li>

            <li>
              1999年
              <ul class="ml-3 mb-3">
                <li><router-link to="/elections/distco/2019_distco">區議會選舉</router-link></li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="w-1/2 pl-3">
          <ul class="election-list text-left">
            <li>
              區議會選舉選區分界
              <ul class="ml-3 mb-3">
                <li>
                  <a
                    href="https://www.eac.hk/ch/distco/2019dc_elect_map.htm"
                    target="_blank"
                    class="result-ready"
                  >
                    2019年
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.eac.hk/ch/distco/2015dc_boundary.htm"
                    target="_blank"
                    class="result-ready"
                  >
                    2015年
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.eac.hk/ch/distco/2011dc_boundary.htm"
                    target="_blank"
                    class="result-ready"
                  >
                    2011年
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.eac.hk/ch/distco/2007dc_boundary.htm"
                    target="_blank"
                    class="result-ready"
                  >
                    2007年
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.eac.hk/ch/distco/2003dc_boundary.htm"
                    target="_blank"
                    class="result-ready"
                  >
                    2003年
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.eac.hk/ch/distco/boundary.htm"
                    target="_blank"
                    class="result-ready"
                  >
                    1999年
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <ul class="election-list text-left" v-if="code === 'rural'">
        <li><router-link to="/elections/rural/2019_rural">鄉郊補選(2019年6月16日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">2019年鄉郊一般選舉</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">鄉郊補選(2018年10月7日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">鄉郊補選(2018年5月20日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">鄉郊補選(2017年12月10日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">鄉郊補選(2017年4月30日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">鄉郊補選(2016年11月27日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">鄉郊補選(2016年5月29日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">鄉郊補選(2015年12月6日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">鄉郊補選(2015年6月14日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">2015年鄉郊一般選舉</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">鄉村補選(2014年10月5日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">鄉村補選(2014年5月25日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">鄉村補選(2013年12月15日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">鄉村補選(2013年5月26日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">鄉村補選(2012年12月2日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">鄉村補選(2012年4月22日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">鄉村補選(2011年11月27日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">鄉村補選(2011年6月12日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">2011年村代表選舉</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">村代表補選(2010年10月3日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">村代表補選(2010年6月6日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">村代表補選(2010年1月17日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">村代表補選(2009年5月31日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">村代表補選(2008年11月23日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">村代表補選(2008年5月25日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">村代表補選(2008年1月6日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">村代表補選(2007年5月27日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">2007年村代表選舉</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">村代表補選(2006年10月15日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">村代表補選(2006年5月21日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">村代表補選(2006年1月8日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">村代表補選(2005年5月8日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">村代表補選(2004年11月28日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">村代表補選(2004年3月28日)</router-link></li>
        <li><router-link to="/elections/rural/2019_rural">2003年村代表選舉</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" src="./show.ts"></script>

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