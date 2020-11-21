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
      required: true
    }
  },

  components: {
    "right-slide": Slide
  },

  methods: {
    prev() {
      this.$refs.myCarousel.prev();
    },
    next() {
      this.$refs.myCarousel.next();
    }
  }
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
  background-color: black;
  background-size: 50% 50%;
}
/deep/ .carousel-control-next-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: translateX(60px);
  background-color: black;
  background-size: 50% 50%;
}
</style>
