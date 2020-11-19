<template>
<div>
 <div class="section_content">
   <left-image :carousel="bottom.carousel" class="size__img"/>
   <right-carousel :carou="bottom.carou" class="size__content"/>
  </div>

</div>
 
</template>

<script>
import LeftImage from "./LeftImage.vue";
import  RightCarousel from "./RightCarousel.vue"
export default {
  props: {
    bottom: {
      type: Object,
      required: true,
    },
  },
  components: {
    "left-image": LeftImage,
    "right-carousel": RightCarousel
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
  &__img {
    width: 25rem;
    padding:10px 2px 10px 10px; 
  }
  &__content{
    height: inherit;
  }
}
</style>