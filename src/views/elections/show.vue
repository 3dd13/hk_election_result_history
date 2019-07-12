<template>
  <div>
    <div class="container mx-auto py-10">
      <div v-if="summaryItem">
        <SummaryCard :summaryItem="summaryItem"></SummaryCard>
      </div>

      <div v-if="chartItems && chartItems.length" class="w-full px-3">
        <div v-for="(chartItem, index) in chartItems" :key="index">
          <ContituencyCard :chartItem="chartItem"></ContituencyCard>
        </div>
      </div>
    </div>

    <div class="fixed pin z-50 overflow-auto bg-smoke-light flex">
    </div>
  </div>
</template>

<script lang="ts" src="./show.ts"></script>