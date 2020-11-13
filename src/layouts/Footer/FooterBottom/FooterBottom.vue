<template>
  <div class="footerbottom">
    <p>
      <List :list="list"></List>
    </p>

    <br />
    <div class="flex">
      <a :href="links[0].link">
        <div class="img1-cut img-url img12-size flex-item"></div
      ></a>
      <a :href="links[1].link">
        <div class="img1-cut img-url img12-size flex-item"></div
      ></a>
      <a :href="links[2].link">
        <div class="img3-cut img-url img3-size flex-item"></div
      ></a>
    </div>

    <p>Công ty TNHH Shopee</p>
    <br />
    <p>
      Địa chỉ: Tầng 28, Tòa nhà trung tâm Lotte Hà Nội, 54 Liễu Giai, phường
      Cống Vị, Quận Ba Đình, Hà Nội. Tổng đài hỗ trợ: 19001221 - Email:
      cskh@hotro.shopee.vn Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch Đầu tư
      TP Hà Nội cấp lần đầu ngày 10/02/2015 © 2015 - Bản quyền thuộc về Công ty
      TNHH Shopee
    </p>
  </div>
</template>

<script>
import List from "../FooterList.vue";
export default {
  components: {
    List
  },
  data: function() {
    return {
      list: [
        { id: 1, name: "CHÍNH SÁCH BẢO MẬT", link: "#" },
        { id: 2, name: "QUY CHẾ HOẠT ĐỘNG", link: "#" },
        { id: 3, name: "CHÍNH SÁCH VẬN CHUYỂN", link: "#" },
        { id: 4, name: "CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN", link: "#" }
      ],
      links: [
        { id: 0, link: "https://www.youtube.com/" },
        { id: 1, link: "https://www.google.com.vn/?hl=vi" },
        { id: 2, link: "https://www.facebook.com/" }
      ]
    };
  }
};
</script>

<style scoped>
.footerbottom {
  background: rgb(245, 245, 245);
  padding: 2.625rem 0px 2.3125rem;
}
p {
  text-align: center;
}

ul >>> a:hover {
  color: rgba(0, 0, 0, 0.54) !important;
}

/* Cut img */

.img1-cut {
  background-size: 630.8333333333334% 408.8888888888889%;
  background-position: 100% 7.194244604316546%;
}
.img-url {
  background-image: url(../../../assets/images/logos/logos.png);
}
.img12-size {
  width: 7.5rem;
  height: 2.8125rem;
}

.img3-size {
  width: 3rem;
  height: 3rem;
}
.img3-cut {
  background-size: 1577.0833333333333% 383.3333333333333%;
  background-position: 80.25387870239774% 33.8235294117647%;
}

/* flex */
.flex {
  display: flex;
  justify-content: center;
}
.flex-item {
  margin: 1rem;
}
</style>
