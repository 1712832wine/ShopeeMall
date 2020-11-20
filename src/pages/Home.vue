<template>
  <div class="container-shop">
    <header-home />
    <div class="container-wrap">
      <banner-home />
      <div class="large-banner"></div>
      <list-flash-sale />
      <shopee-mall />
      <list-product />
    </div>
    <footer-home />
  </div>
</template>

<script>
import HeaderHome from "../layouts/Header/HeaderHome";
import BannerHome from "../components/Banner/BannerHome";
import ListFlashSale from "../components/FlashSale/ListFlashSale";
import ListProduct from "../components/Product/ListProduct";
import FooterHome from "../layouts/Footer/FooterHome.vue";
import ShopeeMall from "../components/ShopeeMall/ShopeeMall.vue";
export default {
  components: {
    "header-home": HeaderHome,
    "banner-home": BannerHome,
    "list-flash-sale": ListFlashSale,
    "list-product": ListProduct,
    "shopee-mall": ShopeeMall,
    "footer-home": FooterHome
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
  transform: translateY(106px);
}
</style>
