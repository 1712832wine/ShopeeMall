<template>
  <b-carousel id="topsearch__content" ref="myCarousel" controls no-wrap>
    <b-carousel-slide v-for="slide in slides" :key="slide.id" class="slide">
      <topsearch-content-slide :slide="slide" />
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
import TopSearchContentSlide from "./TopSearchContentSlide.vue";
export default {
  components: {
    "topsearch-content-slide": TopSearchContentSlide
  },
  props: { slides: { type: Array, required: true } }
};
</script>

<style lang="scss" scoped>
/deep/ .carousel-caption {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  padding-top: 0;
  padding-bottom: 0;
  color: #fff;
  text-align: center;
}

.slide {
  height: inherit;
  height: 324px;
}
#topsearch__content {
  &:hover {
    /deep/ .carousel-caption {
      z-index: 0;
    }
    /deep/ .carousel-control-prev-icon {
      width: 50px;
      height: 50px;
    }
    /deep/ .carousel-control-next-icon {
      width: 50px;
      height: 50px;
    }
  }
}

//control carousel
/deep/ .carousel-caption {
  z-index: 0;
}
/deep/ .carousel-control-prev-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: translateX(-90px);
  background-color: #fff;
  background-size: 50% 50%;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
}
/deep/ .carousel-control-next-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: translateX(90px);
  background-color: #fff;
  background-size: 50% 50%;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
}
</style>
