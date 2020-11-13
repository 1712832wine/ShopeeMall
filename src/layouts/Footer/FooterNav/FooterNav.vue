<template>
  <div>
    <h2>Danh mục</h2>

    <div class="flex-between footer-nav">
      <FooterNavColumn
        :data="column.data"
        v-for="column in columns"
        :key="column.id"
        class="flex-item25"
      >
      </FooterNavColumn>
    </div>
  </div>
</template>

<script>
import Data from "../../../Data/footernavData.json";
import FooterNavColumn from "./FooterNavColumn.vue";
export default {
  components: {
    FooterNavColumn
  },
  data: function() {
    return Data;
  }
};
</script>

<style lang="scss" scoped src="../Footer.scss"></style>
