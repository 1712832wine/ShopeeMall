<template>
  <div class="topsales__content">
    <top-sales-item v-for="item in content" :key="item.id" :item="item" />
  </div>
</template>

<script>
import TopSalesItem from "./TopSalesItem.vue";
export default {
  components: {
    "top-sales-item": TopSalesItem,
  },
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.topsales__content {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
</style>
