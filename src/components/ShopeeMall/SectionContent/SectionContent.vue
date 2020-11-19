<template>
<div>
 <div class="section_content">
    <carousel :carousel="bottom.carousel" class="size__carousel"/>
    <!-- <content-right :list_content="bottom.list_content" class="size__content"/> -->
   <carousel-content-right :list_content="bottom.list_content" class="size__content"/>
  </div>
   
   <!-- <content-right :list_content="bottom.list_content"/> -->
</div>
 
</template>

<script>
import Carousel from "./SectionContentCarousel.vue";

import  CarouselContentRight from "./CarouselContentRight.vue"
// import ContentRight from "./SectionContentRight.vue";
export default {
  props: {
    bottom: {
      type: Object,
      required: true,
    },
  },
  components: {
    "carousel": Carousel,
    // "content-right": ContentRight,
    "carousel-content-right": CarouselContentRight
  },
};
</script>

<style lang="scss" scoped>
$height: 452px;
.section_content{

  display: flex;
  flex-direction: row;
}
// item
.size{
  width: auto;
  &__carousel {
    width: 25rem;
    padding:10px 2px 10px 10px; 
  }
  &__content{
    height: inherit;
    border: 1px solid #000;
  }
}
</style>