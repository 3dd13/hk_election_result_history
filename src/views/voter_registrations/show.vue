<template>
  <div class="container mx-auto py-10 md:mt-16 lg:mt-2 px-5">
    <div class="mb-5">
      <div class="text-xl mb-1">
        {{ year }}年 選民年齡性別分佈
      </div>
    </div>

    <div class="mb-5 rounded-lg bg-white mx-auto text-center shadow-lg py-8">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/2 px-5 mb-3">
          <div class="flex flex-col lg:flex-row items-center ">
            <div class="">
              總登記選民人數
            </div>

            <div class="text-2xl" v-if="overallData">
              {{ overallData.total.toLocaleString(undefined, { maximumFractionDigits: 0 }) }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-5 rounded-lg bg-white mx-auto text-center shadow-lg py-8">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/2 px-5 mb-3">
          <div class="flex flex-col lg:flex-row items-center ">
            <div class="">
              性別
            </div>

            <div class="" v-if="overallData">
              <apexchart width="100%" height="350" type="pie" :options="genderPieChartOptions" :series="genderPieChartDataSeries"></apexchart>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-5 rounded-lg bg-white mx-auto text-center shadow-lg py-8">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/2 px-5 mb-3">
          <div class="flex flex-col lg:flex-row items-center ">
            <div class="">
              立法會地區界別
            </div>

            <div class="" v-if="overallData">
              <apexchart width="100%" height="350" type="pie" :options="legcoGeographicPieChartOptions" :series="legcoGeographicPieChartDataSeries"></apexchart>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-5 rounded-lg bg-white mx-auto text-center shadow-lg py-8">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/2 px-5 mb-3">
          <div class="flex flex-col lg:flex-row items-center ">
            <div class="">
              立法會功能界別
            </div>

            <div class="" v-if="overallData">
              <apexchart width="100%" height="840" type="bar" :options="legcoFunctionalBarChartOptions" :series="legcoFunctionalBarChartDataSeries"></apexchart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./show.ts"></script>