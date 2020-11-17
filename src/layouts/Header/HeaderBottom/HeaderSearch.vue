<template>
  <div class="navbar-shop__search--box">
    <div class="navbar-shop__searchbar">
      <div class="navbar-shop__searchbar--main">
        <form class="navbar-shop__searchbar--input">
          <input
            type="text"
            :placeholder="data.placeholder"
            size="70"
            maxlength="128"
          />
        </form>
      </div>
      <button
        type="button"
        class="button button-solid-primary button-size button-inline"
      >
        <i class="fa fa-search" aria-hidden="true"></i>
      </button>
    </div>
    <div class="navbar-shop__searchbar--suggest">
      <div class="suggest-wrap">
        <a v-for="item in data.suggest" :key="item.id" href="#/">
          {{ item.keyword }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style lang="scss" scoped></style>
