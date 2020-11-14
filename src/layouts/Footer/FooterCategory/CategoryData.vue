<template>
  <div>
    <h3>
      {{ data.title }}
    </h3>
    <List :list="data.items"></List>
  </div>
</template>

<script>
import List from "./FooterCategoryList.vue";
export default {
  components: {
    List,
  },
  props: ["data"],
};
</script>

<style lang="scss" scoped src="../Footer.scss"></style>
