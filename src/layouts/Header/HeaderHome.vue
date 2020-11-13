<template>
  <div class="navbar-shop navbar-shop__sticky">
    <HeaderTop />
    <HeaderBottom />
  </div>
</template>

<script>
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
export default {
  components: {
    HeaderTop: HeaderTop,
    HeaderBottom: HeaderBottom
  }
};
</script>

<style lang="scss" scope src="./style-Header.scss">
</style>
