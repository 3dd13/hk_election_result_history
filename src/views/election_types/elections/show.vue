<template>
  <div class="container mx-auto py-10 md:mt-16 lg:mt-2 px-5">
    <div v-if="summaryItem">
      <ElectionSummaryCard :summaryItem="summaryItem"></ElectionSummaryCard>
    </div>

    <div v-if="electionType == 'distco'">
      <div v-for="(chartItemsByDistract, distractName) in chartItemGroups" :key="distractName" class="bg-yellow-200 mb-5">
        <div class="text-2xl py-3 mb-3 font-bold">
          {{ distractName }} ( {{ chartItemsByDistract.length }})
        </div>
        <div class="flex flex-wrap">
          <div v-for="chartItem in chartItemsByDistract" :key="chartItem.constituencyCode" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3 mb-3">
            <ContituencySummaryCard
              :chartItem="chartItem"
              :detailPageRoutePrefix="detailPageRoutePrefix"></ContituencySummaryCard>
          </div>
        </div>
      </div>
    </div>

    <div v-if="electionType != 'distco'">
      <div v-if="chartItems && chartItems.length">
        <div class="flex flex-wrap">
          <div v-for="(chartItem, index) in chartItems" :key="index" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3 mb-3">
            <ContituencySummaryCard
              :chartItem="chartItem"
              :detailPageRoutePrefix="detailPageRoutePrefix"></ContituencySummaryCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./show.ts"></script>