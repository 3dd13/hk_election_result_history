<template>
  <div class="flex flex-col lg:flex-row items-center">
    <div class="w-full lg:w-2/3 p-8">
      <div class="">
        <apexchart width="100%" height="350" type="line" :options="voteByHoursChartOptions" :series="voteByHoursChartDataSeries"></apexchart>
      </div>
    </div>

    <div class="w-full lg:w-1/3 p-8">
      <div class="flex mb-4">
        <div class="w-1/3 bg-gray-400 h-8 flex items-center justify-center">
          投票率
        </div>
        <div class="w-2/3 h-8 flex items-center justify-center">
          {{ statisticsData.voteSubmissionPercentage }} %
          (
            {{ statisticsData.submittedVotes.toLocaleString() }} /
            {{ statisticsData.availableVotes.toLocaleString() }}
          )
        </div>
      </div>

      <div class="flex mb-4">
        <div class="w-1/3 bg-gray-400 h-8 flex items-center justify-center">
          廢票
        </div>
        <div class="w-2/3 h-8 flex items-center justify-center">
          {{ Math.round(1000 * statisticsData.voidedVotes / statisticsData.availableVotes) / 10 }} %
          (
            {{ statisticsData.voidedVotes.toLocaleString() }} /
            {{ statisticsData.availableVotes.toLocaleString() }}
          )
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./vote_statistics_chart.ts"></script>