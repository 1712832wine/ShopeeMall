<template>
  <div class="wrapper_container">
    <div class="container" >
      <div
        class="singleProduct"
        v-for="item in ListProduct"
        v-bind:key="item.tittleItem"
      >
        <div class="imageSingleProduct">
          <ul >
            <li >
              <router-link
			      	class="nav-link"
			      	tag="a"
            	to="/HomeCatalog"
              >
                 <img :src="item.src" /> {{ item.tittleItem }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data/ListCategoryProductData.json'
export default {
  props: {
      ListProduct: {
      type: Array,
    },
  },
  data:function() {
    return {
      listProduct: data.ListProduct
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./Style-CategoryProductList/Style-CategoryItem.scss";
</style>
