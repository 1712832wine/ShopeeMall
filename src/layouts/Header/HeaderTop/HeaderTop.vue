<template>
  <div class="navbar-shop__top">
    <div class="container__nav navbar-shop__range navbar-shop__display">
      <HeaderTopLeft />
      <div class="navbar-shop__space"></div>
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
    HeaderTopRight: HeaderTopRight
  }
};
</script>

<style lang="scss"></style>
