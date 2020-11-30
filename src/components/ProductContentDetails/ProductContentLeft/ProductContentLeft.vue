<template>
  <div class="page-product__content--left">
    <div class="product-detail page-product__detail">
      <!-- Render product details -->
      <product-details :data="listDetail" />
      <product-description :data="listDescription" />
    </div>
    <!-- Render product Assessment -->
    <product-assessment />
  </div>
</template>

<script>
import ProductDetailsData from "../../../data/ProductDetailsData.json";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductDescription from "./ProductDetails/ProductDescription";
import ProductAssessment from "./ProductAssessment/ProductAssessment";
export default {
  components: {
    "product-details": ProductDetails,
    "product-description": ProductDescription,
    "product-assessment": ProductAssessment
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
