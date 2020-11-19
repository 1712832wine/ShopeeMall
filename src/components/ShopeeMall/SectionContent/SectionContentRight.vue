<template>
  <div class="section_content_right">
    <div v-for="item in list_content" :key="item.id">
      <b-card
        :title="item.title"
        :img-src="item.img_src"
        img-alt="Image"
        class="item"
      >
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list_content: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.section_content_right {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: 5rem 5rem;
}
</style>