<template>
  <div class="wrapper">
    <show-product />
  </div>
</template>

<script>
import ShowProduct from "../components/ShowProduct/ShowProduct.vue";
export default {
  components: {
    "show-product": ShowProduct,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 1200px;
  margin: auto;
  margin-top: 140px;
}
</style>
