<template>
	<div>
		<div class="container">
			<CategoryItem v-bind:listProduct="listProduct" />
			<CategoryPagination v-bind:ListAnphabetical="ListAnphabetical" />
		</div>
	</div>
</template>

<script>
import CategoryItem from "./CategoryItem";
import CategoryPagination from "./CategoryPagination";

export default {
	data() {
		return {
			listProduct: [
				{
					src: "/assets/images/bach-hoa-online.png",
					tittleItem: "Bách hóa online "
				},
				{
					src: "/assets/images/cham-soc-thu-cung.png",
					tittleItem: "Chăm sóc thú cưng"
				},
				{
					src: "/assets/images/giay-dep-nam.png",
					tittleItem: "Giày dép nam"
				},
				{
					src: "/assets/images/giay-dep-nu.png",
					tittleItem: "Giày dép nữ"
				},
				{
					src: "/assets/images/giat-du-va-cham-soc-nha-cua.png",
					tittleItem: "Giặt dũ và chăm sóc nhà cửa"
				},
				{
					src: "/assets/images/may-tinh-va-lap-top.png",
					tittleItem: "Máy tính và laptop"
				},
				{
					src: "/assets/images/may-anh.png",
					tittleItem: "Máy ảnh- máy quay phim"
				},
				{
					src: "/assets/images/me-va-be.png",
					tittleItem: "Mẹ và bé"
				},
				{
					src: "/assets/images/nha-cua-va-doi-song.png",
					tittleItem: "Nhà cửa và đời sống"
				},
				{
					src: "/assets/images/nha-sach-online.png",
					tittleItem: "Nhà sách online"
				},
				{
					src: "/assets/images/phu-kien-thoi-trang.png",
					tittleItem: "Phụ kiện thời trang"
				},
				{
					src: "/assets/images/san-pham-khac.png",
					tittleItem: "Sản phẩm khác"
				},
				{
					src: "/assets/images/suc-khoe-va-sac-dep.png",
					tittleItem: "Sức khỏe và sắc đẹp"
				},
				{
					src: "/assets/images/thiet-bi-da-dung.png",
					tittleItem: "Thiết bị điện gia dụng"
				},
				{
					src: "/assets/images/thiet-bi-dien-tu.png",
					tittleItem: "Thiết bị điện tử "
				},
				{
					src: "/assets/images/the-thao-va-du-lich.png",
					tittleItem: "Thể thao và du lịch"
				},
				{
					src: "/assets/images/thoi-trang-nam.png",
					tittleItem: "Thời trang nam"
				},
				{
					src: "/assets/images/thoi-trang-nu.png",
					tittleItem: "Thời trang nữ"
				},
				{
					src: "/assets/images/thoi-trang-tre-em.png",
					tittleItem: "Thời trang trẻ em"
				},
				{
					src: "/assets/images/tui-vi.png",
					tittleItem: "Túi ví"
				},
				{
					src: "/assets/images/voucher-va-dich-vu.png",
					tittleItem: "Voucher và dịch vụ"
				},
				{
					src: "/assets/images/oto-xe-may-xe-dap.png",
					tittleItem: "Ô tô- xe máy- xe đạp"
				},
				{
					src: "/assets/images/dien-thoai-va-phu-kien.png",
					tittleItem: "Điện thoại và phụ kiện"
				},
				{
					src: "/assets/images/do-choi.png",
					tittleItem: "Đồ chơi"
				},
				{
					src: "/assets/images/dong-ho.png",
					tittleItem: "Đồng hồ"
				}
			],


			ListAnphabetical: [
				{ id: 1, anphabetical__letter: "A" },
				{
					id: 2,
					anphabetical__letter: "B",
					categoryName: "Bách hóa Online",
					subCategoryName: [
						{ subCategoryDisplayName: "Ăn vặt và bánh kẹo" },
						{ subCategoryDisplayName: "Đồ uống" },
						{ subCategoryDisplayName: "Đồ hộp và đóng gói" },
						{ subCategoryDisplayName: "Đậu và hạt" },
						{ subCategoryDisplayName: "Đặc sản Việt" },
						{ subCategoryDisplayName: "Quà biếu" },
						{ subCategoryDisplayName: "Đồ uống có cồn" }
					]
				},
				{ id: 3, anphabetical__letter: "C" },
				{ id: 4, anphabetical__letter: "D" },
				{ id: 5, anphabetical__letter: "E" },
				{ id: 6, anphabetical__letter: "F" },
				{ id: 7, anphabetical__letter: "G" },
				{ id: 8, anphabetical__letter: "H" },
				{ id: 9, anphabetical__letter: "I" },
				{ id: 10, anphabetical__letter: "J" },
				{ id: 11, anphabetical__letter: "K" },
				{ id: 12, anphabetical__letter: "L" },
				{ id: 13, anphabetical__letter: "M" },
				{ id: 14, anphabetical__letter: "N" },
				{ id: 15, anphabetical__letter: "O" },
				{ id: 16, anphabetical__letter: "P" },
				{ id: 17, anphabetical__letter: "Q" },
				{ id: 18, anphabetical__letter: "R" },
				{ id: 19, anphabetical__letter: "S" },
				{ id: 20, anphabetical__letter: "T" },
				{ id: 21, anphabetical__letter: "U" },
				{ id: 22, anphabetical__letter: "V" },
				{ id: 23, anphabetical__letter: "W" },
				{ id: 24, anphabetical__letter: "X" },
				{ id: 25, anphabetical__letter: "Y" },
				{ id: 26, anphabetical__letter: "Z" }
			]
		};
	},
	components: {
		CategoryItem: CategoryItem,
		CategoryPagination: CategoryPagination
	},
	methods: {}
};
</script>

<style lang="scss">
@import "./style-categoryProductList.css";
</style>
