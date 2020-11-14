<template>
	<div class="wrapper_container">
		<div class="container">
			<div
				class="singleProduct"
				v-for="item in listProduct"
				v-bind:key="item.tittleItem"
			>
				<div class="imageSingleProduct">
					<ul style="padding-left:0px">
						<li style="list-style:none">
							<a href="#">
								<img :src="item.src" />
								{{ item.tittleItem }}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>	
</div>
</template>

<script>
export default {
	props: {
		listProduct: {
			type: Array
		},
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss">
@import "./style-categoryProductList.css";
</style>
