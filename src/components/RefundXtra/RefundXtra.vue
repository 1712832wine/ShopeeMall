<template>
  <div class="mycontainer" id ="refundxtra">
      <img src="../../assets/images/banners/refund-xtra.jpg" alt="" style="width: 100%; height:100%;">
        <div class="flex-between refund">
            <span>{{top.title }}</span>
            <a :href="top.url">{{top.more}}}</a>
        </div>
        <Card/>
         <img src="../../assets/images/banners/refund-xtra__bot.jpg" alt="" style="width: 100%; height:100%;">
  </div>
</template>

<script>
import refund from "../../Data/refundxtraData.json"
import Card from "./Card.vue"
export default {
    components: {
        Card,
    },
    data: function() {
        return refund
    }
}
</script>

<style lang="scss" scoped>
#refundxtra{
    background-color:#fff;
}
.mycontainer{
    width: 75rem;
    padding-top:8rem;
    height: auto;
    margin: auto;
}

.flex-between{
    display:flex;
    justify-content:space-between;
}
.refund{
    background-color: #ee4e2e;
    width:100%;
    height:100%;
}
</style>