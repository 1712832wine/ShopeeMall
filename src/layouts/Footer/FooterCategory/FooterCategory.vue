<template>
  <div>
    <div class="flex-between mycontainer">
      <FooterCategoryItem :data="customer" class="flex-item20"></FooterCategoryItem>
      <FooterCategoryItem :data="about"  class="flex-item20"></FooterCategoryItem>
      <div class="flex-column flex-item20">
        <FooterCategoryItem2 :data="payment"></FooterCategoryItem2>
        <FooterCategoryItem2 :data="transport"></FooterCategoryItem2>
      </div>

      <FooterCategoryItem3 :data="network" class="flex-item20"></FooterCategoryItem3>

      
      <div class="flex-item20">
        <div class="bg-qr"></div>
        <div class="bg-appstore"></div>
        <div class="bg-googleplay"></div>
      </div>
    </div>
  </div>
</template>

<script>
import FooterCategoryData from "../../../Data/footercategoryData.json";
import FooterCategoryItem from "./FooterCategoryItem.vue";
import FooterCategoryItem2 from "./FooterCategoryItem2.vue";
import FooterCategoryItem3 from "./FooterCategoryItem3.vue";
export default {
  components: {
    FooterCategoryItem,
    FooterCategoryItem2,
    FooterCategoryItem3,
  },
  data: function () {
    return {
      customer: FooterCategoryData.customer,
      about: FooterCategoryData.about,
      payment: FooterCategoryData.payment,
      transport: FooterCategoryData.transport,
      network: FooterCategoryData.network,
    };
  },
};
</script>

<style lang="scss" scoped src="../Footer.scss"></style>
