<template>
  <div class="navbar-shop__bottom">
    <div class="container__nav navbar-shop__range">
      <div class="navbar-shop__search--wrapper">
        <a href="#/" class="navbar-shop__logo">
          <i class="fa fa-shopping-bag" aria-hidden="true"></i>
          <span>Shoppe</span>
        </a>
        <HeaderSearch />
        <div class="navbar-shop__cart">
          <div class="navbar-shop__cart--position">
            <div class="navbar-shop__cart--icon">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </div>
          </div>
          <div class="navbar-shop__cart--position isdisplay">
            <div class="navbar-shop__cart--icon">
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
    HeaderSearch: HeaderSearch
  }
};
</script>

<style lang="scss"></style>
