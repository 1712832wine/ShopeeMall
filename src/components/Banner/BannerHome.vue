<template>
  <div class="banner banner-background">
    <div class="container-banner">
      <div class="section-banner">
        <div class="section-banner--full">
          <div class="container-banner">
            <div class="section-banner__wrapper">
              <banner-slide />
              <div class="home-banner__left">
                <a v-for="i in 2" :key="`banner-left${i}`" href="#">
                  <img
                    :src="`/assets/images/banners/banner-left-${i}.jpg`"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <!-- campaign -->
          <campaign-list />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerSlide from "./BannerSlide";
import CampaignList from "../campaign/CampaignList";
export default {
  components: {
    "banner-slide": BannerSlide,
    "campaign-list": CampaignList
  }
};
</script>

<style lang="scss" scoped>
@import "./Styles/Style-Banner.scss";
</style>
