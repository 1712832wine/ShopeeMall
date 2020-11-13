<template>
  <div>
    <div class="flex-between container">
      <FooterCategoryItem :data="lists[0].data"></FooterCategoryItem>
      <FooterCategoryItem :data="lists[1].data"></FooterCategoryItem>
      
      <FooterCategoryItem3 :data="lists[2].data"></FooterCategoryItem3>
      <FooterCategoryItem4 :data="lists[3].data"></FooterCategoryItem4>
      <FooterCategoryItem5 :data="lists[3].data"></FooterCategoryItem5>
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
