<template>
  <div>
    <div class="">
      投訴個案分項數字
    </div>

    <div class="">
      <apexchart width="100%" height="350" type="bar" :options="complainChartOptions" :series="complainChartDataSeries"></apexchart>
    </div>
  </div>
</template>

<script lang="ts" src="./complain_chart.ts"></script>