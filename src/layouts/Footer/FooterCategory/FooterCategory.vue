<template>
  <div class="mycontainer footercategory">
    <div class="flex-between ">

      <ListData :data="customer" class="flex-item20"></ListData>

      <ListData :data="about" class="flex-item20"></ListData>
     
      <div class="flex-column flex-item20">
        <ListImg :data="payment"></ListImg>
        <ListImg :data="transport"></ListImg>
      </div>

      <ListIconText :data="network" class="flex-item20"></ListIconText>
      <QR :data="download" class="flex-item20"> </QR>
     
    </div>
     <hr />

     <br>
      <div class="flex-between" style="font-size: .875rem">
        <p>{{ categorybot.paragraphleft }}</p>
        <div class="flex-between" >
          <p>{{categorybot.title}}</p>
          <List :data="categorybot.nations" class="no-hover"></List>
        </div>
       
      </div>
  </div>
</template>

<script>
import FooterCategoryData from "../../../Data/footercategoryData.json";
import List from "../FooterList.vue";

import ListData from "./CategoryData.vue";
import ListImg from "./CategoryImg.vue";
import ListIconText from "./CategoryIconText.vue";
import QR from "./CategoryQR.vue";
export default {
  components: {
    List,
    ListData,
    ListImg,
    ListIconText,
    QR,
  },
  data: function () {
    return {
      customer: FooterCategoryData.customer,
      about: FooterCategoryData.about,
      payment: FooterCategoryData.payment,
      transport: FooterCategoryData.transport,
      network: FooterCategoryData.network,
       download: FooterCategoryData.download,
      categorybot: FooterCategoryData.categorybot,
    };
  },
};
</script>

<style lang="scss" scoped src="../Footer.scss"></style>
