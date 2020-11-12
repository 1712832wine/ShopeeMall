<template>
  <div id="app">
    <HeaderHome />
    <BannerHome />
  </div>
</template>

<script>
import HeaderHome from "./layouts/Header/HeaderHome";
import BannerHome from "./components/Banner/BannerHome";
export default {
  components: {
    HeaderHome: HeaderHome,
    BannerHome: BannerHome
  }
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
