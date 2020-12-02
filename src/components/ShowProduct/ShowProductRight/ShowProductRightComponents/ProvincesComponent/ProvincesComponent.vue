<template>
  <div class="flex-col absolute provinces" name="provinces">
    <div class="find">
      <input type="text" placeholder="Tìm" class="search" />
    </div>
    <div v-if="IsClicked.isClicked != 0" class="previous" @click="Prev()">
      <i :class="previous_icon" aria-hidden="true"></i>
      {{ Previous_Name.previous_name }}
    </div>
    <list-location
      v-if="IsClicked.isClicked == 0"
      :location="provinces"
      @mid="Next($event)"
    />
    <list-location
      v-else
      :location="provinces[Id.id].wards"
      @mid="Next($event)"
    />
  </div>
</template>

<script>
import Locations from "./ListLocation.vue";
export default {
  props: {
    provinces: { type: Array, required: true },
    previous_icon: {
      type: String,
      required: false,
      default: "fa fa-angle-left",
    },
  },
  data: function() {
    return {
      IsClicked: { isClicked: 0 },
      Id: { id: -1 },
      Previous_Name: { previous_name: "" },
      Name: {
        province_name: "",
        ward_name: "",
      },
    };
  },
  methods: {
    Next: function(myid) {
      // nếu ở trang huyện bấm next thì thoát ra
      if (this.IsClicked.isClicked == 1) {
        console.log("Exit: ", this.IsClicked.isClicked);
        this.Name.province_name = this.Previous_Name.previous_name;
        this.Name.ward_name = this.provinces[this.Id.id].wards[myid].title;
        // console.log(this.Previous_Name);
        // console.log(this.Previous_Name.previous_name);
        console.log(this.Name);
        this.$emit("Name", this.Name);
      } else {
        //ngược lại chuyển đến trang huyện
        // tăng số lần bấm nút
        this.$set(this.IsClicked, "isClicked", 1);
        console.log("Next", this.IsClicked.isClicked);
        // gán id dể tìm tên tỉnh
        this.$set(this.Id, "id", myid);
        this.$set(
          this.Previous_Name,
          "previous_name",
          this.provinces[this.Id.id].title
        );
      }

      // console.log("isClicked", this.IsClicked.isClicked);
    },
    Prev: function() {
      console.log("prev");
      this.$set(this.IsClicked, "isClicked", 0);
      this.$set(this.Id, "id", -1);
      this.$set(this.Previous_Name, "previous_name", "");
      // console.log("isClicked", this.IsClicked.isClicked);
    },
  },
  components: { "list-location": Locations },
};
</script>

<style lang="scss" scoped>
.previous {
  align-items: center;
  color: #ee4d2d;
  background-color: #f5f5f5;
  cursor: pointer;
  user-select: none;
  padding: 0.625rem;
}
.provinces {
  margin-top: 1px;
  top: 100%;
  left: 0;
  width: 20rem;
  max-height: 20rem;
  border: 1px solid rgba(0, 0, 0, 0.09);
  background-color: #fff;
  z-index: 1;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  border-radius: 0.125rem;
  overflow-y: scroll;
  overflow-x: hidden;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.pointer {
  cursor: pointer;
}
.absolute {
  position: absolute;
}
.find {
  padding: 0.3125rem 0.625rem;
  cursor: pointer;
}
.search {
  outline: none;
  border: none;
  background-color: #f5f5f5;
  box-sizing: border-box;
  width: 100%;
  height: 1.875rem;
  line-height: 1.875rem;
  padding: 0 0.625rem;
  border-radius: 2px;
}
</style>
