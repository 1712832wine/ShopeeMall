<template>
  <div class="wrapper">
    <show-product />
    <list-buy-more />
    <div>
      <shop-info />
    </div>
  </div>
</template>

<script>
import BuyMore from "../components/BuyMore/ListBuyMore";
import ShowProduct from "../components/ShowProduct/ShowProduct.vue";
import ShopInfo from "../components/ShopInfo/ShopInfo";
export default {
  components: {
    "show-product": ShowProduct,
    "list-buy-more": BuyMore,
    "shop-info": ShopInfo,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 1200px;
  margin: auto;
  margin-top: 140px;
  margin-bottom: 15px;
}
</style>
