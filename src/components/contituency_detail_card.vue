<template>
  <div class="mb-5 border rounded-lg bg-white mx-auto text-center shadow-lg py-8">
    <div v-if="chartItem.uncontestedConstituency">
      <div class="flex justify-center">
        <div class="w-full lg:w-1/2 px-5">
          <div class="">
            選舉結果
          </div>

          <div
            v-for="candidate in chartItem.candidates" :key="candidate.candidateNumber"
            class="flex bg-blue-400 py-1 text-white"
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

        <div class="w-full lg:w-1/2 px-3">
          <div class="flex border bg-gray-200">
            <div class="w-1/4 text-right pr-3 border-r-2">
              候選人
            </div>
            <div class="w-1/4 text-left pl-3">
              職業
            </div>
            <div class="w-2/4 text-left pl-3">
              政治聯繫
            </div>
          </div>

          <div
            v-for="candidate in allCandidates()"
            v-bind:key="candidate.nameEn"
            class="flex border">
            <div class="w-1/4 text-right pr-3 border-r-2">
              {{ candidateDisplayName(candidate) }}
            </div>
            <div class="w-1/4 text-left pl-3 border-r-2" v-html="candidateDisplayOccupation(candidate)">
            </div>
            <div class="w-2/4 text-left pl-3">
              {{ candidateDisplayPolicticalAffiliation(candidate) }}
            </div>
          </div>
        </div>
      </div>


      <div class="flex justify-center my-5 border-t-2 pt-5">
        <div class="w-full lg:w-1/3 px-5">
          <div class="flex py-1 bg-gray-200">
            <div class="w-1/2">
              選民數目：
            </div>
            <div class="w-1/2">
              {{ chartItem.potentialAvailableVotes }} *
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center py-1 italic text-sm">
        <div class="w-full px-5">
          * 自動當選區域的已登記選民數目，沒有在選舉報告書公布。以上數字用年度選民登記冊做參考。<br/>
          參考來源：https://www.voterregistration.gov.hk
        </div>
      </div>
    </div>

    <div v-if="!chartItem.uncontestedConstituency">
      <VoteStatisticsChart :statisticsData="chartItem"></VoteStatisticsChart>

      <hr/>

      <div class="flex flex-col lg:flex-row items-center">
        <div class="w-full lg:w-1/2 p-8">
          <div class="">
            選舉結果
          </div>

          <div>
            <apexchart width="100%" height="350" type="bar" :options="voteByCandidatesChartOptions" :series="voteByCandidatesChartDataSeries"></apexchart>
          </div>
        </div>

        <div class="w-full lg:w-1/2 px-3">
          <div class="flex border bg-gray-200">
            <div class="w-1/4 text-right pr-3 border-r-2">
              候選人
            </div>
            <div class="w-1/4 text-left pl-3">
              職業
            </div>
            <div class="w-2/4 text-left pl-3">
              政治聯繫
            </div>
          </div>

          <div
            v-for="candidate in allCandidates()"
            v-bind:key="candidate.nameEn"
            class="flex border">
            <div class="w-1/4 text-right pr-3 border-r-2">
              {{ candidateDisplayName(candidate) }}
            </div>
            <div class="w-1/4 text-left pl-3 border-r-2" v-html="candidateDisplayOccupation(candidate)">
            </div>
            <div class="w-2/4 text-left pl-3">
              {{ candidateDisplayPolicticalAffiliation(candidate) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./contituency_detail_card.ts"></script>