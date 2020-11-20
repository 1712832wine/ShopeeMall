<template>
  <div>
    <div id="topsearch">
      <topsearch-header :top="top" />
      <topsearch-content :bottom="bottom" />
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

  border: 1px solid #000;
  margin: auto;
  transform: translateY(120px);
}
</style>
