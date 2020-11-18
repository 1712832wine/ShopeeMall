<template>
  <div id="app">
    <HeaderHome />
    <BannerHome />

    <div class="large-banner"></div>

     <CategoryProductList/>
  </div>
</template>

<script>
import HeaderHome from "./layouts/Header/HeaderHome";
import BannerHome from "./components/Banner/BannerHome";
import CategoryProductList from './components/CategoryProductList/CategoryProductList'
export default {
  components: {
    HeaderHome: HeaderHome,
    BannerHome: BannerHome,
    CategoryProductList:CategoryProductList,
  }
};
</script>

<style lang="scss">
body {
  background-color: #f5f5f5;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

.large-banner {
  background-image: url("./assets/images/banners/large-banner.jpg");
  margin-top: 20px;
  height: 110px;
  width: 1200px;
  background-size: cover;
  background-position: 50%;
  overflow: hidden;
  cursor: pointer;
  transform: translate(74px, 106px);
}
</style>
