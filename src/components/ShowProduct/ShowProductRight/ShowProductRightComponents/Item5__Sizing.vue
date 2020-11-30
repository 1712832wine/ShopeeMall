<template>
  <div class="mp-container flex center">
    <span class="title">{{ sizing.title }}</span>
    <button v-for="item in sizing.sizes" :key="item" class="button">
      {{ item }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    sizing: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../Style/Style__ShowProductRight.scss";
.button {
  cursor: pointer;
  min-width: 5rem;
  min-height: 2.125rem;
  box-sizing: border-box;
  padding: 0.25rem 0.75rem;
  margin: 0 8px 0 0;
  color: rgba(0, 0, 0, 0.8);
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.29);
  position: relative;
  background: #fff;
  outline: 0;
  word-break: break-word;
  align-items: center;
  &:hover {
    color: #ee4d2d;
    border-color: #ee4d2d;
  }
}
</style>
