<template>
  <div class="shoppe-mall">
    <div class="header">
      <a class="header-left" href="#"> SHOPEE MALL</a>
      <div class="header-right">
        <a> Xem tất cả </a>
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </div>
    </div>
    <div class="shoppeMallContent">
      <ul class="list-shoppeMall-row">
        <li
          class="list-shoppeMall-column"
          v-for="item in ListShoppeMall"
          v-bind:key="item.id"
        >
          <div class="branch-icon-top">
            <a href="#">
              <div
                class="icon-image"
                v-bind:style="{
                  'background-image': 'url(' + item.url_top + ')'
                }"
              ></div>
            </a>
          </div>
          <div class="branch-icon-bottom">
            <a href="#">
              <div
                class="icon-image"
                v-bind:style="{
                  'background-image': 'url(' + item.url_bottom + ')'
                }"
              ></div>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ListShoppeMall: {
      type: Array
    }
  },
  data: function() {
    return {};
  }
  // data:function() {
  //     return{
  //                 url:"https://cf.shopee.vn/file/03b216ad2dfbb3d09c1776cdb88c01cd"
  //     }
  // }
};
</script>

<style lang="scss" scoped>
@import "./Style/style-ShoppeMall.scss";
</style>
