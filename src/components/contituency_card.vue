<template>
  <div class="mb-5 border rounded-lg bg-white mx-auto text-center shadow-lg py-8">
    <div class="mb-2 text-xl">
      {{ chartItem.nameZh }} ({{ chartItem.constituencyCode }})
    </div>

    <div class="mb-5">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{{ constituencyTypeDisplayName(chartItem.constituencyType) }}</span>
    </div>

    <div v-if="chartItem.autoDulyElected">
      <div class="flex flex-col-reverse lg:flex-row">
        <div class="w-full lg:w-1/2 px-5">
          <div class="flex flex-col content-center h-full justify-center">
            <div class="flex mb-4">
              <div class="w-1/3 bg-gray-400 h-8 flex items-center justify-center">
                投票率
              </div>
              <div class="w-2/3 h-8 flex items-center justify-center">
                {{ chartItem.voteSubmissionPercentage }} %
                (
                  {{ chartItem.submittedVotes }} /
                  {{ chartItem.availableVotes }}
                )
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-5">
          <div
            v-for="candidate in chartItem.candidates" :key="candidate.candidateNumber"
            class="flex bg-green-400 py-1 text-white"
          >
            <div class="w-1/2">
              {{ candidate.nameZh }}
            </div>
            <div class="w-1/2">
              <div>
                自動當選
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!chartItem.autoDulyElected">
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
              {{ chartItem.voteSubmissionPercentage }} %
              (
                {{ chartItem.submittedVotes }} /
                {{ chartItem.availableVotes }}
              )
            </div>
          </div>

          <div class="flex mb-4">
            <div class="w-1/3 bg-gray-400 h-8 flex items-center justify-center">
              廢票
            </div>
            <div class="w-2/3 h-8 flex items-center justify-center">
              {{ Math.round(1000 * chartItem.voidedVotes / chartItem.availableVotes) / 10 }} %
              (
                {{ chartItem.voidedVotes }} /
                {{ chartItem.availableVotes }}
              )
            </div>
          </div>
        </div>
      </div>

      <hr/>

      <div class="flex flex-col lg:flex-row items-center">
        <div class="w-full lg:w-2/3 p-8">
          <div class="p-8">
            <apexchart width="100%" height="350" type="bar" :options="voteByCandidatesChartOptions" :series="voteByCandidatesChartDataSeries"></apexchart>
          </div>
        </div>

        <div class="w-full lg:w-1/3 px-3">
          <div
            v-for="candidate in allCandidates()"
            v-bind:key="candidate.nameEn"
            class="flex border">
            <div class="w-1/3 text-right pr-3 border-r-2">
              {{ candidateDisplayName(candidate) }}
            </div>
            <div class="w-2/3 text-left pl-3">
              {{ candidate.occupationZh }}<br/>
              {{ candidateDisplayPolicticalAffiliation(candidate) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./contituency_card.ts"></script>