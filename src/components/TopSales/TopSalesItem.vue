<template>
  <div class="topsales__item">
    <a :href="item.href">
      <div class="img">
        <div :style="style(item)"></div>
      </div>

      <div class="title">{{ item.title }}</div>
      <div class="price">{{ item.price }}</div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data: function() {
    return {
      style: function(item) {
        return {
          backgroundImage: "url(" + item.url_img + ")",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
        };
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.topsales__item {
  width: fit-content;
}
a {
  color: rgba(0, 0, 0, 0.8);
  &:hover {
    text-decoration: none;
  }
}
.img {
  width: 198px;
  height: 198px;
}
.title {
  text-transform: uppercase;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  padding: 0 0.9375rem;
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
  line-height: 1.25rem;
  height: 1.25rem;
  font-size: 1.125rem;
}
</style>
