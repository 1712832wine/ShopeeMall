<template>
  <section class="container-shop">
    <banner-home />
    <div class="container-wrap">
      <div class="large-banner"></div>
      <list-flash-sale />
      <shopee-mall />
      <list-search-trend />
      <list-product />
    </div>
  </section>
</template>

<script>
import BannerHome from "../components/Banner/BannerHome";
import ListFlashSale from "../components/FlashSale/ListFlashSale";
import ShopeeMall from "../components/ShopeeMall/ShopeeMall.vue";
import ListSearchTrend from "../components/SearchTrends/ListSearchTrend";
import ListProduct from "../components/Product/ListProduct";
export default {
  components: {
    "banner-home": BannerHome,
    "list-flash-sale": ListFlashSale,
    "shopee-mall": ShopeeMall,
    "list-search-trend": ListSearchTrend,
    "list-product": ListProduct
  }
};
</script>

<style lang="scss" scoped>
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

.container-wrap {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.large-banner {
  background-image: url("/assets/images/banners/large-banner.jpg");
  margin-top: 20px;
  height: 110px;
  width: 1200px;
  background-size: cover;
  background-position: 50%;
  overflow: hidden;
  cursor: pointer;
}
</style>
