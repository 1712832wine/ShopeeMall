<template>
  <div class="wrap">
    <div class="text">
      <a :href="href">{{ root }}</a
      >{{ text }}
    </div>
    <div class="content">
      <list-category-item />
      <category-pagination />
    </div>
  </div>
</template>

<script>
//component
import ListCategoryItem from "./ListCategoryItem.vue";
import CategoryPagination from "./CategoryPagination.vue";
export default {
  components: {
    "list-category-item": ListCategoryItem,
    "category-pagination": CategoryPagination,
  },
  data: function () {
    return {
      root: "Dạo",
      href: "/",
      text: "   >   Tất cả danh mục",
    };
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  background-color: #f5f5f5;
  width: 100%;
}
.content {
  width: 1200px;
  margin: auto;
  margin-bottom: 34px;
  background-color: #fff;
}
.text {
  width: 1200px;
  margin: auto;
  color: rgba(0, 0, 0, 0.87);
  margin-top: 30px;
  margin-bottom: 30px;
  line-height: 2.5rem;
  font-size: 0.85rem;
}
a {
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none;
  font-size: 0.85rem;
}
/deep/.navbar-shop__sticky {
  position: relative;
}
</style>
