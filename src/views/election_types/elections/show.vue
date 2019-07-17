<template>
  <div class="container mx-auto py-10 px-5">
    <div v-if="summaryItem">
      <ElectionSummaryCard :summaryItem="summaryItem"></ElectionSummaryCard>
    </div>

    <div v-if="chartItems && chartItems.length">
      <div class="flex flex-wrap">
        <div v-for="(chartItem, index) in chartItems" :key="index" class="w-full lg:w-1/3 px-3 mb-3">
          <ContituencySummaryCard
            :chartItem="chartItem"
            :detailPageRoutePrefix="detailPageRoutePrefix"></ContituencySummaryCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./show.ts"></script>