<template>
  <div class="home-banner">
    <div class="slider">
      <div class="slides">
        <!--radio buttons start-->
        <input
          v-for="i in 14"
          :key="i"
          type="radio"
          name="radio-btn"
          :id="`radio${i}`"
        />
        <!--radio buttons end-->
        <!--slide images start-->
        <div
          v-for="i in 14"
          :key="`a${i}`"
          class="slide"
          :class="{ first: i == 1 }"
        >
          <img
            :src="`/assets/images/banners/banner-${i}.jpg`"
            alt="`banner-${i}`"
          />
        </div>
        <!--slide images end-->
        <!--automatic navigation start-->
        <div class="navigation-auto">
          <div class="auto-btn1"></div>
          <div class="auto-btn2"></div>
          <div class="auto-btn3"></div>
          <div class="auto-btn4"></div>
          <div class="auto-btn5"></div>
          <div class="auto-btn6"></div>
          <div class="auto-btn7"></div>
          <div class="auto-btn8"></div>
          <div class="auto-btn9"></div>
          <div class="auto-btn10"></div>
          <div class="auto-btn11"></div>
          <div class="auto-btn12"></div>
          <div class="auto-btn13"></div>
          <div class="auto-btn14"></div>
        </div>
        <div class="slider__arrow">
          <div @click="handlePrev" class="slider__arrow--prev">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </div>
          <div @click="handleNext" class="slider__arrow--next">
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </div>
        </div>
        <!--automatic navigation end-->
      </div>
      <!--manual navigation start-->
      <!-- <div class="navigation-manual">
        <label for="radio1" class="manual-btn"></label>
        <label for="radio2" class="manual-btn"></label>
        <label for="radio3" class="manual-btn"></label>
        <label for="radio4" class="manual-btn"></label>
        <label for="radio5" class="manual-btn"></label>
        <label for="radio6" class="manual-btn"></label>
        <label for="radio7" class="manual-btn"></label>
        <label for="radio8" class="manual-btn"></label>
        <label for="radio9" class="manual-btn"></label>
        <label for="radio10" class="manual-btn"></label>
        <label for="radio11" class="manual-btn"></label>
        <label for="radio12" class="manual-btn"></label>
        <label for="radio13" class="manual-btn"></label>
        <label for="radio14" class="manual-btn"></label>
      </div> -->
      <!--manual navigation end-->
    </div>
    <!--image slider end-->
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      count: 1
    };
  },
  mounted: function() {
    this.setTimeSlide(this.count);
  },
  destroyed: function() {
    this.setTimeSlide();
  },
  methods: {
    handleNext: function() {
      if (this.count < 14) {
        this.count++;
        document.getElementById("radio" + this.count).checked = true;
      }
    },
    handlePrev: function() {
      if (this.count > 1) {
        this.count--;
        document.getElementById("radio" + this.count).checked = true;
      }
    },
    setTimeSlide: function(counter) {
      setInterval(function() {
        document.getElementById("radio" + counter).checked = true;
        counter++;
        if (counter > 14) {
          counter = 1;
        }
      }, 5000);
      return (this.count = counter);
    }
  }
};
</script>

<style lang="scss">
@import "./Style-Banner.scss";
</style>
