<template>
  <div class="mywrap">
    <div class="anphabetical-wrap">
      <a
        :href="item.href"
        class="anphabetical__letter"
        v-for="item in letters"
        v-bind:key="item.id"
        :class="CheckActive(item.categoryitems.length)"
      >
        {{ item.letter }}
      </a>
    </div>

    <div class="alphabetical-list-of-category">
      <letter-item
        class="list-of-category-in-letter"
        v-for="letter in letters"
        v-bind:key="letter.id"
        :content="letter"
      >
      </letter-item>
    </div>
  </div>
</template>

<script>
//data
import LetterData from "@/data/categoryletteritemData.json";
//component
import LetterItem from "./LetterItem.vue";
export default {
  components: {
    "letter-item": LetterItem
  },
  data: function() {
    return {
      letters: LetterData.letters
    };
  },
  methods: {
    CheckActive(length) {
      if (length !== 0) return "active";
      else return "disable";
    }
  }
};
</script>
>

<style lang="scss" scoped>
.mywrap {
  padding-top: 2.5rem;
  width: 1200px;
  margin: auto;
  background: white;
}

@import "./Style-CategoryProductList/Style-CategoryPagination.scss";
</style>
