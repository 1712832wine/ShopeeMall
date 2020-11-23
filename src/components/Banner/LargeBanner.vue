<template>
  <div class="slide-category-banner">
    <div class="container-fluid">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
          img-src="https://cf.shopee.vn/file/ff17fcb43c8a06394e2003e5c2436c12"
        ></b-carousel-slide>

        <b-carousel-slide
          img-src="https://cf.shopee.vn/file/71123dac84ea50086b111c37a28690c0"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://cf.shopee.vn/file/3efa42dd7219343e617b7c7053871b47"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://cf.shopee.vn/file/c3cab1ecfa5e071991753c8b4529be7e"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://cf.shopee.vn/file/bd8af457d5ddff41eb228b4fdab9bca9"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://cf.shopee.vn/file/bdde76f1960c674fc0508e4ba2cd08d1"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://cf.shopee.vn/file/cee5d3efffa59a1f7627e4111ff9f138"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://cf.shopee.vn/file/f159991433941f704267d9e6393ef61b"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://cf.shopee.vn/file/452c46b5622e4c4c679adb09c11aa05b"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://cf.shopee.vn/file/4f45f3fedfb848614fe0ec3a017b7c4a"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://cf.shopee.vn/file/fba1b97c159846745c6b888524ece4e2"
        ></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>

<style lang="scss">
@import "./Styles/Style-LargeBanner.scss";
</style>
