<template>
  <div>
    <h3>{{ data.title }}</h3>
    <!-- <li class="_14m_66"><div class="footer-vn-background footer-vn-visa-png" ></div></li> -->
    <div class="flex-between flex-wrap">
      <div v-for="item in data.items" :key="item.id" class="footer-vn-background footer-vn-size" :class="item.png" ></div>
    </div>
   
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="scss" scoped src="../Footer.scss">
</style>
