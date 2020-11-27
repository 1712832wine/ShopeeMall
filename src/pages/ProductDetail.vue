<template>
  <div class="wrapper">
    <list-buy-more />
  </div>
</template>

<script>
import BuyMore from "../components/BuyMore/ListBuyMore";
export default {
  components: {
    "list-buy-more": BuyMore
  }
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
