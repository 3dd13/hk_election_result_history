<template>
  <div class="container mx-auto py-10 md:mt-16 lg:mt-0 px-3" v-if="chartItem">
    <div class="mb-2 text-xl">
      {{ chartItem.nameZh }} ({{ chartItem.constituencyCode }})
    </div>

    <div class="mb-5">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{{ constituencyTypeDisplayName(chartItem.constituencyType) }}</span>
    </div>

    <ContituencyDetailCard :chartItem="chartItem"></ContituencyDetailCard>
  </div>
</template>

<script lang="ts" src="./show.ts"></script>