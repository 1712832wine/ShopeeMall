<template>
  <b-carousel
    id="shopeemall__carousel-right"
    ref="myCarousel"
    :interval="0"
    controls
    style="text-shadow: 1px 1px 2px #fff"
    no-wrap
  >
    <b-carousel-slide
      class="slide"
      v-for="item in carousel_right"
      :key="item.id"
    >
      <right-slide :list_content="item.data" />
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
import Slide from "./RightSlide.vue";
export default {
  props: {
    carousel_right: {
      type: Array,
      required: true,
    },
  },

  components: {
    "right-slide": Slide,
  },

  methods: {
    prev() {
      this.$refs.myCarousel.prev();
    },
    next() {
      this.$refs.myCarousel.next();
    },
  },
};
</script>
<style lang="scss" scoped>
.slide {
  height: 474px;
}
#shopeemall {
  &__carousel-right {
    width: 100%;
  }
}
#shopeemall__carousel-right {
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
  transform: translateX(-60px);
  background-color: #fff;
  background-size: 50% 50%;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
}
/deep/ .carousel-control-next-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: translateX(60px);
  background-color: #fff;
  background-size: 50% 50%;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
}
</style>
