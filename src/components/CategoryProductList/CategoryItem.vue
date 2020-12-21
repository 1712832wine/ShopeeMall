<template>
  <div class="imageSingleProduct">
    <router-link class="nav-link" tag="a" to="/product_of_category">
      <img :src="item.src" /> {{ item.tittleItem }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: { item: { type: Object, required: true } },
};
</script>

<style lang="scss" scoped>
.nav-link {
  color: rgba(0, 0, 0, 0.8);
  font-size: 0.875rem;
  text-decoration: none;
  line-height: 1.25rem;
  max-width: 90%;
  margin: 0 auto;
}
@import "./Style-CategoryProductList/Style-CategoryItem.scss";
</style>
