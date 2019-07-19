<template>
  <div class="mt-4 sm:mt-20 md:mt-40 lg:mt-20 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
    <ul class="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
      <li class="mr-3 flex-1">
        <router-link
          to="/election_types/legco"
          class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-green-600"
          active-class="text-white border-green-600"
        >
          <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-300 block md:inline-block">
            立法會選舉
          </span>
        </router-link>
      </li>
      <li class="mr-3 flex-1">
        <router-link
          to="/election_types/distco"
          class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-green-600"
          active-class="text-white border-green-600"
        >
          <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-300 block md:inline-block">
            區議會選舉
          </span>
        </router-link>
      </li>
      <li class="mr-3 flex-1">
        <router-link
          to="/election_types/rural"
          class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-green-600"
          active-class="text-white border-green-600"
        >
          <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-300 block md:inline-block">
            鄉郊代表選舉 [TODO]
          </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Sidebar extends Vue {
}
</script>
