<template>
  <div>
    <ul>
      <li v-for="item in data.items" :key="item.id">
        <i :class="item.icon" ></i>
        <p>{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="scss" scoped src="../Footer.scss"></style>