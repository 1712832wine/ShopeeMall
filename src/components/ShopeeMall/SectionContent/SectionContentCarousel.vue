<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <!-- indicator -->
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <!-- innerx -->
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img class="d-block w-100" src="https://cf.shopee.vn/file/1dc78cde60b2d5c08ecb2393b83bf2bb" alt="First slide">
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src="https://cf.shopee.vn/file/3a8218fb536ad09aa128596702d2a07a" alt="Second slide">
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src="https://cf.shopee.vn/file/68fcf2751b4f12a5ecc41925ef4262dc" alt="Third slide">
            </div>
        </div>
        
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#carouselExampleIndicators{
 width:390px;
 height: auto;   
}

</style>