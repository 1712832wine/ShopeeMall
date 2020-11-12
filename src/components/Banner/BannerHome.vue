<template>
  <div class="banner">
    <div class="container">
      <div class="section-banner">
        <div class="section-banner--full">
          <div class="container">
            <div class="section-banner__wrapper">
              <BannerSlide />
              <div class="home-banner__left">
                <a href="#">
                  <img
                    src="../../assets/images/banners/banner-left-1.jpg"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    src="../../assets/images/banners/banner-left-2.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <!-- campaign -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerSlide from "./BannerSlide";
export default {
  components: {
    BannerSlide: BannerSlide
  }
};
</script>

<style lang="scss">
@import "./Style-Banner.scss";
</style>
