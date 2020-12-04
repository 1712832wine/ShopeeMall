<template>
  <div class="page-product__content--right">
    <discount-code />
    <topselling />
  </div>
</template>

<script>
import TopSellingProduct from "./TopSellingProduct/TopSellingProduct.vue";
import DiscountCode from "./DiscountCode/DiscountCode.vue";
export default {
  components: { topselling: TopSellingProduct, "discount-code": DiscountCode },
};
</script>

<style lang="scss" scoped>
@import "./Styles/Style-ProductContentRight.scss";
</style>
