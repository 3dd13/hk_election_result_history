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
          <a href="https://github.com/3dd13/govhk_election_reports" class="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4">Github</a>
        </div>
      </div>
    </nav>

    <div class="flex flex-col md:flex-row bg-teal-800">
      <div class="h-16 bottom-0 md:relative md:h-screen z-10 w-full md:w-48 bg-teal-800">
        <div class="mt-4 md:mt-20 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
          <ul class="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
            <li class="mr-3 flex-1">
              <router-link to="/election_types/legco" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-green-600">
                <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-300 block md:inline-block">
                  立法會選舉
                </span>
              </router-link>
            </li>
            <li class="mr-3 flex-1">
              <router-link to="/election_types/distco" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-green-600">
                <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-300 block md:inline-block">
                  區議會選舉 [TODO]
                </span>
              </router-link>
            </li>
            <li class="mr-3 flex-1">
              <router-link to="/election_types/rural" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-green-600">
                <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-300 block md:inline-block">
                  鄉郊代表選舉 [TODO]
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="main-content flex-1 bg-gray-100 md:mt-16 pb-24 md:pb-5">
        <router-view/>
      </div>
    </div>
  </div>
</template>

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
