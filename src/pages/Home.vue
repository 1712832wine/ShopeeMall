<template>
  <div class="container-shop">
    <header-home />
    <banner-home />
    <div class="large-banner"></div>
    <category-item v-bind:ListProduct="listProduct"/>
    <list-product />
    <footer-home />
  </div>
</template>

<script>
import data from '../data/ListCategoryProductData.json'
import HeaderHome from "../layouts/Header/HeaderHome";
import BannerHome from "../components/Banner/BannerHome";
import ListProduct from "../components/Product/ListProduct";
import CategoryItem   from "../components/CategoryProductList/CategoryItem"
import FooterHome from "../layouts/Footer/FooterHome.vue"; 
export default {
  components: {
    "header-home": HeaderHome,
    "banner-home": BannerHome,
    "list-product": ListProduct,
    "category-item":CategoryItem,
    "footer-home": FooterHome,
  },
  data:function() {
    return {
       listProduct: data.ListProduct
    }
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

.large-banner {
  background-image: url("/assets/images/banners/large-banner.jpg");
  margin-top: 20px;
  height: 110px;
  width: 1200px;
  background-size: cover;
  background-position: 50%;
  overflow: hidden;
  cursor: pointer;
  transform: translate(74px, 106px);
}
.container{
    margin-top: 9rem !important;
  }
.container .singleProduct{
         width:10% !important;
        height: 9rem !important;
}
</style>
