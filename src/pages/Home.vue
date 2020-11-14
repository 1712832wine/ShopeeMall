<template>
  <div>
    <header-home />
    <banner-home />
    <div class="large-banner"></div>
  </div>
</template>

<script>
import HeaderHome from "../layouts/Header/HeaderHome";
import BannerHome from "../components/Banner/BannerHome";
export default {
  components: {
    "header-home": HeaderHome,
    "banner-home": BannerHome
  }
};
</script>

<style lang="scss" scoped></style>
