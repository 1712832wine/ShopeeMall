<template>
  <div>
    <div id="topsearch">
      <topsearch-header :top="top" />
      <topsearch-content :slides="slides" />
    </div>
  </div>
</template>

<script>
// DATA
import topsearch_Data from "@/data/topsearch.json";
//COMPONENTS
import TopSearchHeader from "./TopSearchHeader.vue";
import TopSearchContent from "./TopSearchContent.vue";
export default {
  components: {
    "topsearch-header": TopSearchHeader,
    "topsearch-content": TopSearchContent,
  },
  data: function() {
    return topsearch_Data;
  },
};
</script>

<style lang="scss" scoped>
#topsearch {
  display: block;
  width: 75rem;
  height: auto;
  background-color: #fff;

  margin: auto;
  transform: translateY(140px);
}
</style>
