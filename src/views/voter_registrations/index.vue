<template>
  <div class="container mx-auto py-10 md:mt-16 lg:mt-0 px-5">
    <div class="flex">
      <div class="w-full lg:w-1/3 px-5 mb-3">
        <div class="card text-left">
          <div class="card-header">
            選民年齡及性別分佈圖表
          </div>
          <div class="card-body">
            <ul>
              <li>
                <router-link to="/voter_registrations/2018" class="result--ready">
                  <span class="align-middle">
                    2018年
                  </span>
                </router-link>
              </li>
              <li>
                <router-link to="/voter_registrations/2017" class="result--ready">
                  <span class="align-middle">
                    2017年
                  </span>
                </router-link>
              </li>
              <li>
                <router-link to="/voter_registrations/2016" class="result--ready">
                  <span class="align-middle">
                    2016年
                  </span>
                </router-link>
              </li>
              <li>
                <router-link to="/voter_registrations/2015" class="result--ready">
                  <span class="align-middle">
                    2015年
                  </span>
                </router-link>
              </li>
              <li>
                <router-link to="/voter_registrations/2014" class="result--ready">
                  <span class="align-middle">
                    2014年
                  </span>
                </router-link>
              </li>
              <li>
                <router-link to="/voter_registrations/2013" class="result--ready">
                  <span class="align-middle">
                    2013年
                  </span>
                </router-link>
              </li>
              <li>
                <router-link to="/voter_registrations/2012" class="result--ready">
                  <span class="align-middle">
                    2012年
                  </span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="w-full lg:w-1/3 px-5 mb-3">
        <div class="card text-left">
          <div class="card-header">
            年度改變圖表
          </div>
          <div class="card-body">
            <ul>
              <li>
                <router-link to="#" class="result--ready">
                  <span class="align-middle">
                    TODO
                  </span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>