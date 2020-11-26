<template>
       <div class="contain-product-right">
        <div class="filter-sort">
        <span>Sắp xếp theo</span>
        <div class="filter-sort-options">
          <div class="filter-sort-options__option filter-sort-options__option--selected">Phổ biến </div>
          <div class="filter-sort-options__option">Mới nhất </div>
          <div class="filter-sort-options__option">Bán chạy </div>
          <div class="filter-sort-options__option ">
            <div class="select-with-price">

       
                 <span>
                  Giá
                </span>
                <span><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
                <div class="select-with-price-dropdown">
                  <span>Thấp đến cao</span>
                  <span>Cao đến thấp</span>
                </div>


            </div>
          </div>
        </div>
        <div class="filter-sort-page-controller">ok</div>
        </div>

      </div>
</template>

<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    @import "./Style/style-CategoryRight.scss"
</style>