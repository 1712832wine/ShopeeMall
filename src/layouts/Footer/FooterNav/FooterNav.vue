<template>
  <div>
    <h2>Danh mục</h2>

    <div class="flex-between footer-nav">
      <FooterNavItem
        :data="list.data"
        v-for="list in lists"
        :key="list.id"
      ></FooterNavItem>
    </div>
  </div>
</template>

<script>
import FooterNavItem from "./FooterNavItem.vue";
export default {
  components: {
    FooterNavItem
  },
  data: function() {
    return {
      lists: [
        {
          id: 1,
          data: [
            {
              id: 1,
              name: "THỜI TRANG NAM",
              link: "#",
              items: [
                {
                  id: 1,
                  name: "Áo thun",
                  link: "https://vuejs.org/v2/guide/list.html"
                },
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
            },
            {
              id: 2,
              name: "NHÀ CỬA & ĐỜI SỐNG",
              link: "#",
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
            },
            {
              id: 3,
              name: "THỜI TRANG NAM",
              link: "#",
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
            },
            {
              id: 4,
              name: "NHÀ CỬA & ĐỜI SỐNG",
              link: "#",
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
        },
        {
          id: 2,
          data: [
            {
              id: 1,
              name: "THỜI TRANG NAM",
              link: "#",
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
            },
            {
              id: 2,
              name: "NHÀ CỬA & ĐỜI SỐNG",
              link: "#",
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
            },
            {
              id: 3,
              name: "THỜI TRANG NAM",
              link: "#",
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
            },
            {
              id: 4,
              name: "NHÀ CỬA & ĐỜI SỐNG",
              link: "#",
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
        },
        {
          id: 3,
          data: [
            {
              id: 1,
              name: "THỜI TRANG NAM",
              link: "#",
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
            },
            {
              id: 2,
              name: "NHÀ CỬA & ĐỜI SỐNG",
              link: "#",
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
            },
            {
              id: 3,
              name: "THỜI TRANG NAM",
              link: "#",
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
            },
            {
              id: 4,
              name: "NHÀ CỬA & ĐỜI SỐNG",
              link: "#",
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
        },
        {
          id: 4,
          data: [
            {
              id: 1,
              name: "THỜI TRANG NAM",
              link: "#",
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
            },
            {
              id: 2,
              name: "NHÀ CỬA & ĐỜI SỐNG",
              link: "#",
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
            },
            {
              id: 3,
              name: "THỜI TRANG NAM",
              link: "#",
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
            },
            {
              id: 4,
              name: "NHÀ CỬA & ĐỜI SỐNG",
              link: "#",
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
        },
        {
          id: 5,
          data: [
            {
              id: 1,
              name: "THỜI TRANG NAM",
              link: "#",
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
            },
            {
              id: 2,
              name: "NHÀ CỬA & ĐỜI SỐNG",
              link: "#",
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
            },
            {
              id: 3,
              name: "THỜI TRANG NAM",
              link: "#",
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
            },
            {
              id: 5,
              name: "NHÀ CỬA & ĐỜI SỐNG",
              link: "#",
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
