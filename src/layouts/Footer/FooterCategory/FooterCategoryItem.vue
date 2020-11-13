<template>
  <div>
    <ul>
      <li v-for="item in data" :key="item.id">
        <h3>
          {{ item.name }}
        </h3>
        <List :list="item.items"></List>
      </li>
    </ul>
  </div>
</template>

<script>
import List from "./FooterCategoryList.vue";
export default {
  components: {
    List
  },
  props: ["data"]
};
</script>

<style lang="scss" scoped src="../Footer.scss"></style>
