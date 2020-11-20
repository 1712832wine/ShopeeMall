<template>
  <div class="product">
    <div class="product__wrapper">
      <a :href="data.url">
        <div class="product__content hover-content">
          <div class="product__content--image">
            <img :src="data.image" alt="" />
            <div class="overlay">
              <div class="overlay__image">
                <img :src="data.overlay" alt="" />
              </div>
            </div>
          </div>
          <div class="product__content--text">
            <div class="product__content--title">
              <div class="text-title">
                {{ data.name_product }}
              </div>
            </div>
            <div class="product__content--info">
              <div class="product__content--price">
                <span class="product__content--currency-unit">{{
                  data.currency_unit
                }}</span>
                <span class="product__content--number-price">{{
                  currencyFormatting(this.data.price)
                }}</span>
              </div>
              <div class="product__content--sold">
                Đã bán {{ historicalSold }}
              </div>
            </div>
          </div>
          <div class="product__card-hover">Tìm sản phẩm tương tự</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import helpFunction from "../../helpers/helpFunction";
export default {
  mixins: [helpFunction],
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    historicalSold: function() {
      let sold = this.data.historical_sold;
      let h_n;
      if (sold >= 1000) {
        h_n = sold / 1000;
        return Math.round(h_n * 100) / 100 + "K";
      }
      return sold;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Style-Product.scss";
</style>
