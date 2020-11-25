<template>
  <div class="wrapper">
    <shoppe-mall v-bind:ListShoppeMall="listShoppeMall" />
    <sale-from-restaurant />
    <div class="contain">
      <category-left
        v-bind:ListCategory="listCategory"
        v-bind:ListLocation="listLocation"
        v-bind:ListUnitTransport="listUnitTransport"
        v-bind:ListTypeShop="listTypeShop"
        v-bind:ListActiveProduct="listActiveProduct"
        v-bind:ListService="listService"
      />
      <div class="contain-product-right">
        <list-product-category />
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../data/ProductSingleCategory.json";
import ShoppeMall from "./ShoppeMall";
import CategoryLeft from "./CategoryLeft";
import SaleFromRestaurant from "../SaleFromRestaurant/SaleFromRestaurant";
import ListProductCategory from "../../components/Product/Category/ListProductCategory";
export default {
  components: {
    "shoppe-mall": ShoppeMall,
    "category-left": CategoryLeft,
    "sale-from-restaurant": SaleFromRestaurant,
    "list-product-category": ListProductCategory
  },
  data() {
    return {
      listShoppeMall: data.ListShoppeMall,
      listCategory: data.ListCategory,
      listLocation: data.ListLocation,
      listUnitTransport: data.ListUnitTransport,
      listTypeShop: data.ListTypeShop,
      listActiveProduct: data.ListActiveProduct,
      listService: data.ListService
    };
  }
};
</script>

<style lang="scss">
.wrapper {
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin: auto;
}
.contain {
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
}

.contain-product-right {
  width: 80%;
  height: 1000px;
}
</style>
