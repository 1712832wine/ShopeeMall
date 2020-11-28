<template>
  <div class="page-product__content--left">
    <div class="product-detail page-product__detail">
      <!-- Render product details -->
      <product-details :data="listDetail" />
      <product-description :data="listDescription" />
    </div>
  </div>
</template>

<script>
import ProductDetailsData from "../../../data/ProductDetailsData.json";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductDescription from "./ProductDetails/ProductDescription";
export default {
  components: {
    "product-details": ProductDetails,
    "product-description": ProductDescription
  },
  data() {
    return {
      listDetail: ProductDetailsData.item.productDetails,
      listDescription: ProductDetailsData.item.productDescription
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./Styles/Style-ProductContentLeft.scss";
</style>
