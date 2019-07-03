<template>
  <div id="app">
    <div class="header-nav">
      <div class="header-nav__row">
        <router-link to="/">Home</router-link> |
        <a href="https://github.com/3dd13/govhk_election_reports">Github</a> |
        <router-link to="/zh-TW">繁體中文</router-link>
      </div>
      <div class="header-nav__row">
        <router-link to="/elections/2018_lcbe_kw">2018年立法會九龍西地方選區補選</router-link> |
        <router-link to="/elections/2018_lcbe">2018年立法會補選</router-link>
      </div>
    </div>

    <div class="main-content">
      <router-view/>
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
.header-nav {
  padding: 15px;
}

.header-nav a {
  font-weight: bold;
  color: #9cAeC0;
  text-decoration: none;
}

.header-nav a:hover {
  text-decoration: underline;
}

.header-nav a.router-link-exact-active {
  color: #42b983;
}

.header-nav__row {
  padding: 5px;
}
</style>
