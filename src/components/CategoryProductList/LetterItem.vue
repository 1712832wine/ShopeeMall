<template>
  <div class="letter-item" v-if="content.categoryitems.length != 0">
    <h1 class="h1" :id="content.letter">{{ content.letter }}</h1>
    <!-- content -->
    <div class="content">
      <div
        v-for="categoryitem in content.categoryitems"
        :key="categoryitem.id"
        class="category-item"
      >
        <a :href="categoryitem.href" class="letter-categoryname"
          >{{ categoryitem.title }}
        </a>
        <div class="category-wrap">
          <a
            class="category-sub"
            :href="item.href"
            v-for="(item, index) in categoryitem.list_item"
            :key="index"
            >{{ item.item_title }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.h1 {
  padding: 0.625rem 1.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  margin: 0.67em 0;
  font-size: 2.25rem;
  font-weight: 500;
}
.content {
  padding: 0 1.25rem;
}
.category-item:not(:last-child) {
  margin-bottom: 1.25rem;
}
@import "./Style-CategoryProductList/Style-CategoryPagination.scss";
</style>
