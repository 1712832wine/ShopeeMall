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
      <div class="list-shoppeMall-rowChange">
        <i
          class="fa fa-chevron-circle-left"
          @click="Back()"
          aria-hidden="true"
        ></i>
        <i
          class="fa fa-chevron-circle-right"
          @click="Next()"
          aria-hidden="true"
        ></i>
      </div>
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
  methods: {
    Next: function() {
      var chuyen = 0;
      var chuyenSlide = document.getElementsByClassName(
        "list-shoppeMall-row"
      )[0];
      var kichThuoc = document.getElementsByClassName("shoppeMallContent")[0]
        .clientWidth;
      chuyen += kichThuoc;
      chuyenSlide.style.marginLeft = "-" + chuyen + "px";
      chuyenSlide.style.li.display = "block";
    },
    Back: function() {
      var chuyen = 0;
      var chuyenSlide = document.getElementsByClassName(
        "list-shoppeMall-row"
      )[0];
      var kichThuoc = document.getElementsByClassName("shoppeMallContent")[0]
        .clientWidth;
      chuyen -= kichThuoc;
      chuyenSlide.style.marginLeft = "-" + chuyen + "px";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Style/style-ShoppeMall.scss";
</style>
