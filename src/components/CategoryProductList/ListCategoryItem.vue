<template>
  <div class="wrapper_container">
    <div class="mycontainer">
      <div
        class="singleProduct"
        v-for="(item, index) in ListProduct"
        v-bind:key="index"
      >
        <category-item :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
//data
//component
import CategoryItem from "./CategoryItem.vue";
import ListProduct from "@/data/ListCategoryProductData.json";
export default {
  components: {
    "category-item": CategoryItem
  },
  data: function() {
    return {
      ListProduct: ListProduct.ListProduct
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./Style-CategoryProductList/Style-CategoryItem.scss";
</style>
