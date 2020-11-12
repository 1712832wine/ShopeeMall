<template>
  <div class="banner banner-background">
    <div class="container-banner">
      <div class="section-banner">
        <div class="section-banner--full">
          <div class="container-banner">
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
          <CampaignList />
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
    BannerSlide: BannerSlide,
    CampaignList: CampaignList
  }
};
</script>

<style lang="scss">
@import "./Style-Banner.scss";
</style>
