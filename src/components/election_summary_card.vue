<template>
  <div>
    <div class="mb-5">
      <div class="text-xl mb-1">
        {{ summaryItem.nameZh }}
      </div>
      <div class="text-xl mb-1">
        <span class="inline-block bg-blue-200 rounded-full px-2 py-0 font-semibold text-gray-700 mr-2">{{ electionDate }}</span>
      </div>
    </div>

    <div class="mb-5 rounded-lg bg-white mx-auto text-center shadow-lg py-8 border-l-8 border-green-800">
      <div class="mb-5 pb-5 border-b-2">
        <div class="text-xl mb-1">
          總覽
        </div>
      </div>

      <div>
        <VoteStatisticsChart :statisticsData="summaryItem.overallStatistics"></VoteStatisticsChart>
      </div>

      <div class="flex flex-col lg:flex-row items-center">
        <div class="w-full lg:w-1/2 p-8">
          <ComplainChart :complainData="summaryItem.overallStatistics.receivedComplaints"></ComplainChart>
        </div>
      </div>

      <div class="mr-5 text-right text-sm">
        <span>
          資料來源:
        </span>
        <span>
          <a v-bind:href="summaryItem.dataSource" class="text-green-600 underline">
            {{ summaryItem.dataSource }}
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./election_summary_card.ts"></script>
