<template>
  <div>
    <div class="flex-between mycontainer">
      <FooterCategoryItem :data="lists[0].data" class="flex-item20"></FooterCategoryItem>
      <FooterCategoryItem :data="lists[1].data" class="flex-item20"></FooterCategoryItem>

     <div class="flex-item20"></div>

      <!-- <FooterCategoryItem4 :data="lists[3].data" class="flex-item20"></FooterCategoryItem4> -->
      <!-- <FooterCategoryItem5 :data="lists[4].data" class="flex-item20"></FooterCategoryItem5> -->
    </div>
  </div>
</template>

<script>
import FooterCategoryData from "../../../Data/footercategoryData.json"
import FooterCategoryItem from "./FooterCategoryItem.vue";
export default {
  components: {
    FooterCategoryItem
  },
  data: function() {
    return FooterCategoryData
  }
};
</script>

<style lang="scss" scoped src="../Footer.scss"></style>
