<template>
  <div class="mycontainer">
    <shoppe-mall v-bind:ListShoppeMall="listShoppeMall" />
    <div class="contain">
      <category-left v-bind:ListCategory="listCategory"
                    v-bind:ListLocation="listLocation"
                    v-bind:ListUnitTransport="listUnitTransport"
                    v-bind:ListTypeShop="listTypeShop"
                    v-bind:ListActiveProduct="listActiveProduct"
                    v-bind:ListService="listService"
      />
    <category-right/>
    </div>
  </div>
</template>

<script>
import data from "../../data/ProductSingleCategory.json";
import ShoppeMall from "./ShoppeMall";
import CategoryLeft from "./CategoryLeft";
import CategoryRight from "./CategoryRight";
export default {
  components: {
    "shoppe-mall": ShoppeMall,
    "category-left":CategoryLeft,
    "category-right":CategoryRight,
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
.mycontainer {
  width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top:10rem;
}
.contain {
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
}

</style>
