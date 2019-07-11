<template>
  <div class="px-3">
    <div class="mb-5 rounded-lg bg-white mx-auto text-center shadow-lg py-8 border-l-8 border-green-800">
      <div>
        <div class="text-xl mb-1">
          {{ summaryItem.nameZh }}
        </div>
        <div class="mb-5">
          <span>
            資料來源:
          </span>
          <span>
            <a v-bind:href="summaryItem.dataSource" class="text-green-600">
              {{ summaryItem.dataSource }}
            </a>
          </span>
        </div>
      </div>

      <div class="flex border-b-2 border-gray-100 my-1">
        <div class="w-1/6 text-right bg-gray-400 px-1">
          投票時段
        </div>
        <div class="w-2/6">
          {{ summaryItem.electionPeriod.startedAt }} 至
          {{ summaryItem.electionPeriod.endedAt }}
        </div>
      </div>

      <div class="flex border-b-2 border-gray-100 my-1">
        <div class="w-1/6 text-right bg-gray-400 px-1">
          候選人遞交申請時間
        </div>
        <div class="w-2/6">
          {{ summaryItem.candidateApplicationPeriod.startedAt }} 至
          {{ summaryItem.candidateApplicationPeriod.endedAt }}
        </div>

        <div class="w-1/6 text-right bg-gray-400 px-1">
          有效候選人申請
        </div>
        <div class="w-2/6">
          {{ summaryItem.overallStatistics.candidateApplications.approvedApplications }} /
          {{ summaryItem.overallStatistics.candidateApplications.receivedApplications }}
        </div>
      </div>

      <div class="flex border-b-2 border-gray-100 my-1">
        <div class="w-1/6 text-right bg-gray-400 px-1">
          投訴遞交時間
        </div>
        <div class="w-2/6">
          {{ summaryItem.complaintsHandlingPeriod.startedAt }} 至
          {{ summaryItem.complaintsHandlingPeriod.endedAt }}
        </div>

        <div class="w-1/6 text-right bg-gray-400 px-1">
          投訴數目
        </div>
        <div class="w-2/6">
          <div class="flex border-b border-gray-100">
            <div class="w-1/2 text-right">
              EAC 選管會
            </div>
            <div class="w-1/2">
              {{ summaryItem.overallStatistics.receivedComplaints.againstEac }}
            </div>
          </div>
          <div class="flex border-b border-gray-100">
            <div class="w-1/2 text-right">
              RO 選舉主任
            </div>
            <div class="w-1/2">
              {{ summaryItem.overallStatistics.receivedComplaints.againstRo }}
            </div>
          </div>
          <div class="flex border-b border-gray-100">
            <div class="w-1/2 text-right">
              Police
            </div>
            <div class="w-1/2">
              {{ summaryItem.overallStatistics.receivedComplaints.againstPolice }}
            </div>
          </div>
          <div class="flex border-b border-gray-100">
            <div class="w-1/2 text-right">
              ICAC 廉政公署
            </div>
            <div class="w-1/2">
              {{ summaryItem.overallStatistics.receivedComplaints.againstIcac }}
            </div>
          </div>
          <div class="flex">
            <div class="w-1/2 text-right">
              PROs 投票站主任
            </div>
            <div class="w-1/2">
              {{ summaryItem.overallStatistics.receivedComplaints.againstPros }}
            </div>
          </div>
        </div>
      </div>

      <div class="flex">
        <div class="w-1/6 text-right bg-gray-400 px-1">
          投票率
        </div>
        <div class="w-2/6">
          <div>
            {{ summaryItem.overallStatistics.voteSubmissionPercentage }} %
            (
              {{ summaryItem.overallStatistics.submittedVotes }} /
              {{ summaryItem.overallStatistics.availableVotes }}
            )
          </div>
          <div>
            Voided: {{ summaryItem.overallStatistics.voidedVotes }}
          </div>
        </div>
        <div class="w-1/6 text-right bg-gray-400 px-1">
          每小時投票人數統計
        </div>
        <div class="w-2/6">
          <div
            v-for="accumulatedVotesByHourItem in summaryItem.overallStatistics.accumulatedVotesByHour"
            v-bind:key="accumulatedVotesByHourItem.countedAt"
            class="flex border-b border-gray-100">
            <div class="w-1/2 text-right">
              {{ accumulatedVotesByHourItem.countedAt }}
            </div>
            <div class="w-1/2">
              {{ accumulatedVotesByHourItem.numberOfVotes }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ElectionSummaryCard extends Vue {
  @Prop() private summaryItem: any;
}
</script>