<template>
  <div class="Footer">
    <div class="container">
      <FooterTop></FooterTop>
      <FooterNav></FooterNav>
    </div>
    <div class="bg-footercategory">
      <FooterCategory></FooterCategory>
    </div>
    <FooterBottom></FooterBottom>
  </div>
</template>

<script>
import FooterTop from "./FooterTop/FooterTop.vue";
import FooterNav from "./FooterNav/FooterNav.vue";
import FooterCategory from "./FooterCategory/FooterCategory.vue";
import FooterBottom from "./FooterBottom/FooterBottom.vue";
export default {
  components: {
    FooterTop,
    FooterNav,
    FooterCategory,
    FooterBottom,
  }
};
</script>

<style scoped src="./Footer.css"></style>
