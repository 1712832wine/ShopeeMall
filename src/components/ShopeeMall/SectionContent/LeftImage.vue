<template>
  <div class="carousel">
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
