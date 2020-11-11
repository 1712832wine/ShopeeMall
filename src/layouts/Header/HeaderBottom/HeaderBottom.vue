<template>
  <div class="navbar__bottom">
    <div class="container navbar__range">
      <div class="navbar__search--wrapper">
        <a href="#/" class="navbar__logo">
          <i class="fa fa-shopping-bag" aria-hidden="true"></i>
          <span>Shoppe</span>
        </a>
        <HeaderSearch />
        <div class="navbar__cart">
          <div class="navbar__cart--position">
            <div class="navbar__cart--icon">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </div>
          </div>
          <div class="navbar__cart--position isdisplay">
            <div class="navbar__cart--icon">
              <i class="fa fa-user-o" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSearch from "./HeaderSearch";
export default {
  components: {
    HeaderSearch: HeaderSearch,
  },
};
</script>

<style lang="scss">
</style>
