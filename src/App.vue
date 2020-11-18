<template>
  <div id="app">
    <router-view />
  </div>
  
</template>

<script>
export default {};
</script>

<style lang="scss">
body {
  background-color: #f5f5f5f5 !important;
  font-size: 0.875rem !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 12px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.large-banner {
  background-image: url("./assets/images/banners/large-banner.jpg");
  margin-top: 20px;

  height: 110px;
  width: 1200px;
  background-size: cover;
  background-position: 50%;
  overflow: hidden;
  cursor: pointer;
  transform: translate(74px, 106px);
}
.paddingtop{
  padding-top: 8rem;  
}
</style>
