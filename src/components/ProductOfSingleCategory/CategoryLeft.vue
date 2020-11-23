<template>
  <div class="contain-category-left">
    <div class="list-category">
      <a class="list-category-header">
        <i class="fa fa-list" aria-hidden="true"></i>
        Tất Cả Danh Mục
      </a>
      <hr />
      <div
        class="list-category-body"
        v-for="itemName in ListCategory"
        v-bind:key="itemName.nameCategory"
      >
        <a href="#" class="list-category-body-tittle">
          <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
          {{ itemName.nameCategory }}
        </a>
        <ul>
          <li
            v-for="(item, index) in itemName.listNameCategory"
            v-bind:key="index"
          >
            <a href="#"> {{ item.nameSingleCategory }}</a>
          </li>
          <h6></h6>
        </ul>
        <div class="list-category-dropdown">
          <div class="list-category-dropdown-header">
            Thêm
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
          </div>
          <div class="list-category-dropdown-body"></div>
        </div>
      </div>
    </div>

    <div class="search-fillter">
      <div class="search-fillter-header">
        <i class="fa fa-filter" aria-hidden="true"> </i>&emsp;
        <b>BỘ LỌC TÌM KIẾM</b>
      </div>
      <!-- ======================================================= -->
      <div class="search-fillter-location">
        <div class="search-fillter-location-header">Nơi bán</div>
        <div class="search-fillter-location-body">
          <div
            class="checkbox-location"
            v-for="(item, index) in ListLocation"
            v-bind:key="index"
          >
            <input type="checkbox" />
            <span>{{ item.nameLocation }}</span>
          </div>
          <div class="search-fillter-location-dropdown">
            <div class="search-fillter-location-dropdown-header">
              Thêm
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
            <div class="list-location-dropdown-body"></div>
          </div>
        </div>
      </div>
      <hr />
      <!-- ======================================================= -->
      <div class="unit-tranport">
        <div class="unit-tranport-header">Đơn vị vận chuyển</div>
        <div class="unit-tranport-body">
          <div
            class="checkbox-unit-tranport"
            v-for="(item, index) in ListUnitTransport"
            v-bind:key="index"
          >
            <input type="checkbox" />
            <span>{{ item.nameUnitTransport }}</span>
          </div>
          <div class="unit-tranport-dropdown">
            <div class="sunit-tranport-dropdown-header">
              Thêm
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
            <div class="list-unit-tranport-dropdown-body"></div>
          </div>
        </div>
      </div>
      <hr />
      <!-- ======================================================= -->
      <div class="price-distance">
        <div class="price-distance-header">
          Khoảng giá
        </div>
        <div class="price-distance-body">
          <input type="text" class="price-distance-input" placeholder="đ TỪ" />
          <span class="character">-</span>
          <input type="text" class="price-distance-input" placeholder="đ ĐẾN" />
        </div>
        <button class="price-distance-submit">ÁP DỤNG</button>
      </div>
      <hr />
      <!-- ======================================================= -->
      <div class="typeShop">
        <div class="typeShop-header">
          Loại Shop
        </div>
        <div class="typeShop-body">
          <div
            class="checkbox-typeShop"
            v-for="(item, index) in ListTypeShop"
            v-bind:key="index"
          >
            <input type="checkbox" />
            <span>{{ item.nameTypeShop }}</span>
          </div>
        </div>
      </div>
      <hr />
      <!-- ======================================================= -->
      <div class="activeProduct">
        <div class="activeProduct-header">
          Tình trạng
        </div>
        <div class="typeShop-body">
          <div
            class="checkbox-activeProduct"
            v-for="(item, index) in ListActiveProduct"
            v-bind:key="index"
          >
            <input type="checkbox" />
            <span>{{ item.nameActiveProduct }}</span>
          </div>
        </div>
      </div>
      <hr />
      <!-- ======================================================= -->
      <div class="rate">
        <div class="rate-header">
          Đánh giá
        </div>
      </div>
      <hr />
      <!-- ============================================================ -->
      <div class="servicePromotion">
        <div class="servicePromotion-header">Dịch Vụ & Khuyến Mãi</div>
        <div class="servicePromotion-body">
          <div
            class="checkbox-servicePromotion"
            v-for="(item, index) in ListService"
            v-bind:key="index"
          >
            <input type="checkbox" />

            <span>{{ item.nameService }}</span>
          </div>
          <div class="servicePromotion-dropdown">
            <div class="sservicePromotion-dropdown-header">
              Thêm
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
            <div class="list-servicePromotion-dropdown-body"></div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ListCategory: {
      type: Array
    },
    ListLocation: {
      type: Array
    },
    ListUnitTransport: {
      type: Array
    },
    ListTypeShop: {
      type: Array
    },
    ListActiveProduct: {
      type: Array
    },
    ListService: {
      type: Array
    }
  },
  data: function() {
    return {};
  }
};
</script>
>

<style lang="scss" scoped>
@import "./Style/style-CategoryLeft.scss";
</style>
