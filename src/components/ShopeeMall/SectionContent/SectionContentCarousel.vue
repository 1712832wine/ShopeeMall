<template>
  <div class="carousel">
    <!-- <b-carousel
      v-model="slide"
      :interval="4000"
      background="#ababab"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    > -->
    <!-- Text slides with image -->
    <!-- <b-carousel-slide
        v-for="item in carousel"
        :key="item.id"
        :caption="item.caption"
        :img-src="item.src"
      ></b-carousel-slide> -->
    <!-- </b-carousel> -->
    <img :src="carousel[0].src" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    carousel: {
      type: Array,
      required: true
    }
  },
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

<style lang="scss" scoped></style>
