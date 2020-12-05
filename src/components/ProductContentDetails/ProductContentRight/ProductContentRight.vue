<template>
  <div class="page-product__content--right">
    <top-selling />
  </div>
</template>

<script>
import TopSellingProduct from "./TopSellingProduct/TopSellingProduct.vue";
export default {
  components: {
    "top-selling": TopSellingProduct
  }
};
</script>

<style lang="scss" scoped>
@import "./Styles/Style-ProductContentRight.scss";
</style>
