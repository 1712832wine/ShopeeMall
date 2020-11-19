<template>
  <b-carousel
    id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      indicators
      background="#ababab"
      color="blue"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
  >
    <b-carousel-slide class="slide">
      <section-content-right
        :list_content="list_content"
      
      />
    </b-carousel-slide>
    <b-carousel-slide class="slide">
      <section-content-right
        :list_content="list_content"
      
      />
    </b-carousel-slide>
    <b-carousel-slide class="slide">
      <section-content-right
        :list_content="list_content"
      
      />
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
//  controls
    // indicators
import SectionContentRight from "./SectionContentRight.vue";
export default {
  props: {
    list_content: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  components: {
    "section-content-right": SectionContentRight,
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
<style lang="scss" scoped>
$carousel-control-icon-width: 20px !default;
$carousel-control-icon-color: black !default;
.slide {
  // width: i !important;
  height: 472px;
  border:1px solid red;
}
#carousel-1 {
  width: 100% ;
}
</style>