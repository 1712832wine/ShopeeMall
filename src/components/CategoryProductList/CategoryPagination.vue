<template>
<div>
    <div > 
		<ul class="anphabetical-wrap">
				<li class="anphabetical__letter-wrapp"
                v-for="letter in ListAnphabetical"
                 v-bind:key="letter.id"
                >
					<span class="anphabetical__letter"> {{letter.anphabetical__letter}} </span>
				</li>
		</ul>
    </div>		

<div class="alphabetical-list-of-category">
    <div class="list-of-category-in-letter"
        v-for="letter in ListAnphabetical"
                 v-bind:key="letter.id"
    >
        <h1> {{letter.anphabetical__letter}} </h1>
        <hr/>
        <a href="#" style="color:red">{{letter.categoryName}} </a>
        
    </div>
</div>
</div>
</template>

<script>
export default {
	props: {
		ListAnphabetical: {
			type: Array
        },

	},
	data() {
		return {};
	}
};
</script>>

<style lang="scss">
@import "./style-categoryProductList.css";
</style>
