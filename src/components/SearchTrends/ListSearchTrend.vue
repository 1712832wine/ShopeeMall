<template>
  <div class="search-trend__list">
    <div class="search-trend__wrapper">
      <div class="search-trend__header">
        <div class="search-trend__header--title">
          <span>xu hướng tìm kiếm</span>
        </div>
        <div class="search-trend__header--link">
          <button class="btn-outline">
            <i class="fa fa-refresh" aria-hidden="true"></i>Xem thêm
          </button>
        </div>
      </div>
    </div>
    <div class="search-trend__content">
      <search-trend-item
        v-for="item in listSearch"
        :key="item.index"
        :data="item"
      />
    </div>
  </div>
</template>

<script>
import SearchTrendItem from "./SearchTrendItem";
import SearchTrendData from "../../data/SearchTrendData.json";
export default {
  data() {
    return {
      listSearch: SearchTrendData.listSearch
    };
  },
  components: {
    "search-trend-item": SearchTrendItem
  }
};
</script>

<style lang="scss" scoped>
@import "./Style/Style-ListSearchTrend.scss";
</style>
