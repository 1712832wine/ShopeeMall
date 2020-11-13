<template>
  <div>
    <ul>
      <li v-for="item in data" :key="item.id">
        <h3>
          <a :href="item.link">{{ item.name }}</a>
        </h3>
        <List :list="item.items"></List>
      </li>
    </ul>
  </div>
</template>

<script>
import List from "../FooterList.vue";
export default {
  components: {
    List
  },
  props: ["data"]
};
</script>

<style scoped src="../Footer.css"></style>
