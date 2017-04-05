<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

body {
    line-height: 1.6;
    font-family: @weuiFontDefault;
}

* {
    margin: 0;
    padding: 0;
}

a img {
    border: 0;
}

a {
    text-decoration: none;
}
body {
  background-color: #fbf9fe;
}
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
#app {
  height:100%;
}
</style>
