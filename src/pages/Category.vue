<template>
  <div>
    <category-product-list />
  </div>
</template>

<script>
import CategoryProductListVue from "../components/CategoryProductList/CategoryProductList.vue";
export default {
  components: {
    "category-product-list": CategoryProductListVue
  }
};
</script>

<style lang="scss" scoped>
.text {
  margin-top: 200px;
}
// .container-wrapper {
//   position: static;
// }
</style>
