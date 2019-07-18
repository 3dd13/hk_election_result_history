<template>
  <div class="mb-5 border rounded-lg bg-white mx-auto text-center shadow-lg py-8 h-full">
    <div class="mb-3 pb-2 border-b-2">
      <div class="mb-2 text-xl">
        {{ chartItem.nameZh }} ({{ chartItem.constituencyCode }})
      </div>

      <div class="mb-5">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{{ constituencyTypeDisplayName(chartItem.constituencyType) }}</span>
      </div>
    </div>

    <div v-if="chartItem.uncontestedConstituency">
      <div class="flex justify-center px-5 mb-5">
        <div class="w-full px-5">
          <div
            v-for="candidate in allCandidates" :key="candidate.candidateNumber"
            class="flex px-5 border-b"
          >
            <div class="w-1/2 py-1">
              {{ candidate.nameZh }}
            </div>
            <div class="w-1/2 font-bold py-1">
              <div v-if="candidate.elected" class="text-blue-400">
                自動當選
              </div>
              <div v-if="!candidate.elected" class="text-gray-400">
                {{ candidate.reasonOfNotValidlyNominated }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mr-5 text-right text-sm">
        <router-link :to="detailPageRoute" class="text-green-600 underline">
          <span class="">詳細數據 &gt;</span>
        </router-link>
      </div>
    </div>

    <div v-if="!chartItem.uncontestedConstituency">
      <div class="flex flex-wrap justify-center px-5 mb-5">
        <div
          v-for="candidate in allCandidates" :key="candidate.candidateNumber"
          class="w-full flex px-5 border-b"
        >
          <div class="w-1/2 py-1">
            {{ candidate.nameZh }}
          </div>
          <div v-if="candidate.elected" class="w-1/2 text-green-400 font-bold py-1">
            當選
          </div>
          <div v-if="!candidate.elected && !candidate.reasonOfNotValidlyNominated" class="w-1/2 text-red-400 font-bold py-1">
            落選
          </div>
          <div v-if="!candidate.elected && candidate.reasonOfNotValidlyNominated" class="w-1/2 text-gray-400 font-bold py-1">
            {{ candidate.reasonOfNotValidlyNominated }}
          </div>
        </div>
      </div>

      <div class="mr-5 text-right text-sm">
        <router-link :to="detailPageRoute" class="text-green-600 underline">
          <span class="">詳細數據 &gt;</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./contituency_summary_card.ts"></script>