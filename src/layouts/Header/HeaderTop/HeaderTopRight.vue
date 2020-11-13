<template>
  <ul class="navbar-shop__top--right">
    <li class="navbar-shop__link">
      <div class="navbar-shop__link--notification">
        <a href="#/">
          <i class="fa fa-bell-o" aria-hidden="true"></i>
          <span>Thông báo</span>
        </a>
        <div class="navbar-shop__notification">
          <div class="navbar-shop__notification--content">
            <div class="noti__wrap">
              <img src="../../../assets/images/icons/icon-noti.png" alt="" />
              <p>Đăng nhập để xem Thông báo</p>
            </div>
            <div class="navbar-shop__notification--button">
              <button>Đăng ký</button>
              <button>Đăng nhập</button>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li class="navbar-shop__link">
      <div class="navbar-shop__link--tappable">
        <a href="#/">
          <i class="fa fa-question-circle-o" aria-hidden="true"></i>
          <span>Trợ giúp</span></a
        >
      </div>
    </li>
    <a href="#/" class="navbar-shop__link--register">Đăng Ký</a>
    <a href="#/" class="navbar-shop__link--login">Đăng Nhập</a>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scope src="../style-Header.scss"></style>
