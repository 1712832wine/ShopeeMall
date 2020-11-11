<template>
  <div class="navbar__top">
    <div class="container navbar__range navbar__display">
      <HeaderTopLeft />
      <div class="navbar__space"></div>
      <HeaderTopRight />
    </div>
  </div>
</template>

<script>
import HeaderTopLeft from "./HeaderTopLeft";
import HeaderTopRight from "./HeaderTopRight";

export default {
  components: {
    HeaderTopLeft: HeaderTopLeft,
    HeaderTopRight: HeaderTopRight,
  },
};
</script>

<style lang="scss">
</style>
