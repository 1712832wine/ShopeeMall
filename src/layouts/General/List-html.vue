<template>
  <ul id="menu">
    <li v-for="item in list" v-bind:key="item.id">
      <span v-html="item.title"></span>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["list"]
};
</script>

<style></style>
