<template>
  <div class="container mx-auto py-10 md:mt-16 lg:mt-0 px-5">
    <div class="flex">
      <div class="w-full lg:w-1/3 px-5">
        <div class="card text-left">
          <div class="card-header">
            即將進行的選舉
          </div>
          <div class="card-body">
            <ul>
              <li>
                <router-link to="/election_types/distco/elections/2019_dc" class="result--ready">
                  2019區議會一般選舉
                  <span class="inline-block bg-blue-200 rounded-full px-2 py-0 text-sm font-semibold text-gray-700 mr-2">2019/11/24</span>
                </router-link>
              </li>
              <li>
                <router-link to="#" class="result--not-ready">
                  2020立法會選舉
                  <span class="inline-block bg-blue-200 rounded-full px-2 py-0 text-sm font-semibold text-gray-700 mr-2">2020</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="w-full lg:w-1/3 px-5">
        <div class="card text-left">
          <div class="card-header">
            其他有用連結
          </div>
          <div class="card-body">
            <ul>
              <li>
                <a href="https://www.eac.hk/ch/legco/lce.htm">
                  <span class="align-middle">
                    選舉管理委員會 立法會選舉 網頁
                  </span>
                  <img src="/images/link-symbol.svg" class="inline-block align-middle">
                </a>
              </li>
              <li>
                <a href="https://www.eac.hk/ch/distco/lce.htm">
                  <span class="align-middle">
                    選舉管理委員會 區議會選舉 網頁
                  </span>
                  <img src="/images/link-symbol.svg" class="inline-block align-middle">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="w-full lg:w-1/3 px-5">
        <div class="card text-left">
          <div class="card-header">
            選民年齡及性別分佈
          </div>
          <div class="card-body">
            <ul>
              <li>
                <a href="https://www.voterregistration.gov.hk/chi/statistic2018.html">
                  <span class="align-middle">
                    2018年
                  </span>
                  <img src="/images/link-symbol.svg" class="inline-block align-middle">
                </a>
              </li>
              <li>
                <a href="https://www.voterregistration.gov.hk/chi/statistic2017.html">
                  <span class="align-middle">
                    2017年
                  </span>
                  <img src="/images/link-symbol.svg" class="inline-block align-middle">
                </a>
              </li>
              <li>
                <a href="https://www.voterregistration.gov.hk/chi/statistic2016.html">
                  <span class="align-middle">
                    2016年
                  </span>
                  <img src="/images/link-symbol.svg" class="inline-block align-middle">
                </a>
              </li>
              <li>
                <a href="https://www.voterregistration.gov.hk/chi/statistic2015.html">
                  <span class="align-middle">
                    2015年
                  </span>
                  <img src="/images/link-symbol.svg" class="inline-block align-middle">
                </a>
              </li>
              <li>
                <a href="https://www.voterregistration.gov.hk/chi/statistic2014.html">
                  <span class="align-middle">
                    2014年
                  </span>
                  <img src="/images/link-symbol.svg" class="inline-block align-middle">
                </a>
              </li>
              <li>
                <a href="https://www.voterregistration.gov.hk/chi/statistic2013.html">
                  <span class="align-middle">
                    2013年
                  </span>
                  <img src="/images/link-symbol.svg" class="inline-block align-middle">
                </a>
              </li>
              <li>
                <a href="https://www.voterregistration.gov.hk/chi/statistic2012.html">
                  <span class="align-middle">
                    2012年
                  </span>
                  <img src="/images/link-symbol.svg" class="inline-block align-middle">
                </a>
              </li>
              <li>
                <a href="https://www.voterregistration.gov.hk/chi/statistic2011.html">
                  <span class="align-middle">
                    2011年
                  </span>
                  <img src="/images/link-symbol.svg" class="inline-block align-middle">
                </a>
              </li>
              <li>
                <a href="https://www.voterregistration.gov.hk/chi/statistic2010.html">
                  <span class="align-middle">
                    2010年
                  </span>
                  <img src="/images/link-symbol.svg" class="inline-block align-middle">
                </a>
              </li>
              <li>
                <a href="https://www.voterregistration.gov.hk/chi/statistic2009.html">
                  <span class="align-middle">
                    2009年
                  </span>
                  <img src="/images/link-symbol.svg" class="inline-block align-middle">
                </a>
              </li>
              <li>
                <a href="https://www.voterregistration.gov.hk/chi/statistic2008.html">
                  <span class="align-middle">
                    2008年
                  </span>
                  <img src="/images/link-symbol.svg" class="inline-block align-middle">
                </a>
              </li>
              <li>
                <a href="https://www.voterregistration.gov.hk/chi/statistic2007.html">
                  <span class="align-middle">
                    2007年
                  </span>
                  <img src="/images/link-symbol.svg" class="inline-block align-middle">
                </a>
              </li>
              <li>
                <a href="https://www.voterregistration.gov.hk/chi/statistic2006.html">
                  <span class="align-middle">
                    2006年
                  </span>
                  <img src="/images/link-symbol.svg" class="inline-block align-middle">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {}
</script>
