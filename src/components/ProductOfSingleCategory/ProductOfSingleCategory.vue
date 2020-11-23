<template>
  <div class="container">
    <shoppe-mall v-bind:ListShoppeMall="listShoppeMall" />
    <div class="contain">
      <category-left v-bind:ListCategory="listCategory"
                    v-bind:ListLocation="listLocation"
                    v-bind:ListUnitTransport="listUnitTransport"
                    v-bind:ListTypeShop="listTypeShop"
                    v-bind:ListActiveProduct="listActiveProduct"
                    v-bind:ListService="listService"
      />
      <div class="contain-product-right">
      Đây là right
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../data/ProductSingleCategory.json";
import ShoppeMall from "./ShoppeMall";
import CategoryLeft from "./CategoryLeft"
export default {
  components: {
    "shoppe-mall": ShoppeMall,
    "category-left":CategoryLeft,
  },
  data() {
    return {
      listShoppeMall: data.ListShoppeMall,
      listCategory: data.ListCategory,
      listLocation:data.ListLocation,
      listUnitTransport:data.ListUnitTransport,
      listTypeShop:data.ListTypeShop,
      listActiveProduct:data.ListActiveProduct,
      listService:data.ListService,
    };
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
}
.contain {
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
}


.contain-product-right {
  width: 80%;
  height: 1000px;
  border: 1px solid black;
}
</style>
