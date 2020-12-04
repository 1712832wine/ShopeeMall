<template>
  <div class="page-product__content--right">
    <topselling />
  </div>
</template>

<script>
import TopSellingProduct from "./TopSellingProduct/TopSellingProduct.vue";
export default { components: { topselling: TopSellingProduct } };
</script>

<style lang="scss" scoped>
@import "./Styles/Style-ProductContentRight.scss";
</style>
