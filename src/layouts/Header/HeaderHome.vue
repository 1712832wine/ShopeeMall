<template>
  <div class="navbar navbar__sticky">
    <HeaderTop />
    <HeaderBottom />
  </div>
</template>

<script>
import HeaderTop from "./HederTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
export default {
  components: {
    HeaderTop: HeaderTop,
    HeaderBottom: HeaderBottom,
  },
};
</script>

<style lang="scss">
@import "./style-Header.scss";
</style>
