<template>
  <div class="discount-code">
    <div class="title">{{ title }}</div>
    <div>
      <discount-item v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import DiscountItem from "./DiscountItem.vue";
import Data from "../../../../data/discountcodeData.json";
export default {
  data: function() {
    return Data.discount_code;
  },
  components: {
    "discount-item": DiscountItem,
  },
};
</script>

<style lang="scss" scoped>
@import "./Style/Style__DiscountCode.scss";
</style>
