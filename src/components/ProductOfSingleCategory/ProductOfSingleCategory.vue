<template>
  <div class="wrapper">
    <shoppe-mall v-bind:ListShoppeMall="listShoppeMall" />
    <top-sales />
    <sale-from-restaurant />
    <brand-recommended />
    <one-day-one-style />
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
        <div class="shop-item-result">
          <list-product-category />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// data
import data from "../../data/ProductSingleCategory.json";
//component
import TopSales from "../TopSales/TopSales.vue";
import ShoppeMall from "./ShoppeMall";
import CategoryLeft from "./CategoryLeft";
import SaleFromRestaurant from "../SaleFromRestaurant/SaleFromRestaurant";
import ListProductCategory from "../../components/Product/Category/ListProductCategory";
import BrandRecommended from "../BrandRecommended/BrandRecommended.vue";
import OneDayOneStyle from "../OneDayOneStyle/OneDayOneStyle.vue";
export default {
  components: {
    "shoppe-mall": ShoppeMall,
    "category-left": CategoryLeft,
    "sale-from-restaurant": SaleFromRestaurant,
    "list-product-category": ListProductCategory,
    "top-sales": TopSales,
    "brand-recommended": BrandRecommended,
    "one-day-one-style": OneDayOneStyle,
  },
  data() {
    return {
      listShoppeMall: data.ListShoppeMall,
      listCategory: data.ListCategory,
      listLocation: data.ListLocation,
      listUnitTransport: data.ListUnitTransport,
      listTypeShop: data.ListTypeShop,
      listActiveProduct: data.ListActiveProduct,
      listService: data.ListService,
    };
  },
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
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 1.875rem;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.contain-product-right {
  width: 100%;
  height: 1000px;
}
</style>
