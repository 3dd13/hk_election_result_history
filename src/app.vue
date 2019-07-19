<template>
  <div id="app">
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6 w-full md:fixed z-20">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <router-link to="/">
          <span class="font-semibold text-xl tracking-tight">香港選舉投票數據</span>
        </router-link>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-left lg:text-right">
        <div class="text-sm lg:flex-grow">
          <router-link to="/en" class="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4">
            English [TODO]
          </router-link>
          <a
            href="https://github.com/3dd13/govhk_election_reports"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>
    </nav>

    <div class="flex flex-col md:flex-row bg-teal-800">
      <div class="h-16 bottom-0 md:relative md:h-screen z-10 w-full md:w-48 bg-teal-800">
        <Sidebar></Sidebar>
      </div>

      <div class="main-content flex-1 bg-gray-100 md:mt-16 pb-24 md:pb-5">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { map } from 'lodash';

import Sidebar from './components/sidebar.vue';

@Component({
  components: {
    Sidebar,
  },
})
export default class App extends Vue {
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>
