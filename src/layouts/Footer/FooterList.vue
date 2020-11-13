<template>
  <ul class="menu">
    <li v-for="item in list" :key="item.id">
      <a :href="item.link" class="fontsize">{{ item.name }}</a>
      <span class="fontsize">|</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["list"]
};
</script>

<style scoped>
/*==Style cho menu===*/

.menu {
  list-style-type: none;
  margin-bottom: 0px;
  display: block;
}

.menu ul {
  margin-left: 0;
  display: inline-block;
  vertical-align: middle;
}

.menu li {
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
  margin-right: 5px;
}

.menu a {
  color: rgba(0, 0, 0, 0.54);
  text-decoration: none;
}
.fontsize {
  font-size: 0.75rem;
}

.menu a:hover {
  text-decoration: none;
  color: orangered;
}
</style>
