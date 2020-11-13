<template>
  <div>
    <div class="flex-between container">
      <FooterCategoryItem :data="lists[0].data"></FooterCategoryItem>
      <FooterCategoryItem :data="lists[1].data"></FooterCategoryItem>
      <FooterCategoryItem :data="lists[2].data"></FooterCategoryItem>
      <FooterCategoryItem :data="lists[3].data"></FooterCategoryItem>
    </div>
  </div>
</template>

<script>
import FooterCategoryItem from "./FooterCategoryItem.vue";
export default {
  components: {
    FooterCategoryItem
  },
  data: function() {
    return {
      lists: [
        {
          id: 1,
          data: [
            {
              id: 1,
              name: "CHĂM SÓC KHÁCH HÀNG",
              items: [
                { id: 1, name: "Trung tâm trợ giúp", link: "#" },
                { id: 2, name: "Shopee blog", link: "#" },
                { id: 3, name: "Shopee mall", link: "#" },
                { id: 4, name: "Hướng dẫn mua hàng", link: "#" },
                { id: 5, name: "Hướng dẫn bán hàng", link: "#" },
                { id: 6, name: "Thanh toán", link: "#" },
                { id: 7, name: "Shopee xu", link: "#" },
                { id: 8, name: "Vận chuyển", link: "#" },
                { id: 9, name: "Trả hàng & Hoàn tiền", link: "#" },
                { id: 10, name: "Chăm sóc khách hàng", link: "#" },
                { id: 11, name: "Chính sách bảo hành", link: "#" }
              ]
            }
          ]
        },
        {
          id: 2,
          data: [
            {
              id: 1,
              name: "VỀ SHOPEE",
              items: [
                { id: 1, name: "Giới thiệu về shopee Việt Nam", link: "#" },
                { id: 2, name: "Tuyển dụng", link: "#" },
                { id: 3, name: "Điều khoản shopee", link: "#" },
                { id: 4, name: "Chính sách bảo mật", link: "#" },
                { id: 5, name: "Chính hãng", link: "#" },
                { id: 6, name: "Kênh người bán", link: "#" },
                { id: 7, name: "FlashSale", link: "#" },
                {
                  id: 8,
                  name: "Chương trình tiếp thị liên kết shopee",
                  link: "#"
                },
                { id: 9, name: "Liên hệ với truyền thông", link: "#" }
              ]
            }
          ]
        },
        {
          id: 4,
          data: [
            {
              id: 1,
              name: "THEO DÕI CHÚNG TÔI TRÊN",
              items: [
                { id: 1, name: "facebook", link: "#" },
                { id: 2, name: "Instagram", link: "#" },
                { id: 3, name: "Linkedln", link: "#" }
              ]
            }
          ]
        },
        {
          id: 5,
          data: [
            {
              id: 1,
              name: "TẢI ỨNG DỤNG SHOPEE NGAY THÔI",

              items: [
                { id: 1, name: "Áo thun", link: "#" },
                { id: 2, name: "Áo sơ mi", link: "#" },
                { id: 3, name: "Áo khoác & Áo vest", link: "#" },
                { id: 4, name: "Áo nỉ/ Áo len", link: "#" },
                { id: 5, name: "Đồ bộ/ Đồ mặc nhà", link: "#" },
                { id: 6, name: "Đồ đôi", link: "#" },
                { id: 7, name: "Quần", link: "#" },
                { id: 8, name: "Balo/ Túi/ Ví", link: "#" },
                { id: 9, name: "Mắt kính", link: "#" },
                { id: 10, name: "Phụ kiện nam", link: "#" },
                { id: 11, name: "Đồ Trung Niên", link: "#" },
                { id: 12, name: "Trang Sức Nam", link: "#" },
                { id: 13, name: "Thắt Lưng", link: "#" },
                { id: 14, name: "Đồ lót", link: "#" }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped src="../Footer.scss"></style>
