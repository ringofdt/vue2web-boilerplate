<template>
  <div id="app">
    <app-header />
    <router-view></router-view>
    <app-footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  metaInfo: {
    titleTemplate: (titleChunk) => {
      // If undefined or blank then we don't need the hyphen
      return titleChunk
        ? `${titleChunk} | ${process.env.VUE_APP_TITLE}`
        : `${process.env.VUE_APP_TITLE}`;
    },
  },
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
