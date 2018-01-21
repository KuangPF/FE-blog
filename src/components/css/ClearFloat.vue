<template>
    <div class="clear-float">
        <div class="float-left"></div>
        <div class="float-right"></div>
        <div class="clear-float" :class='{clear:isClear}'></div>
        <div class="btn" @click="clearFloat">{{clearTxt}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isClear: false,
            clearTxt: '清除浮动'
        };
    },
    methods: {
        clearFloat() {
            this.isClear = !this.isClear;
            this.isClear === true ? this.clearTxt = '恢复' : this.clearTxt = '清除浮动';
        }
    }
};
</script>

<style lang='scss' scoped>
.clear-float {
  .float-left {
    float: left;
    width: 40%;
    height: 200px;
    background: #ffbb33;
  }
  .float-right {
    float: right;
    width: 40%;
    height: 200px;
    background: #1ccc7a;
  }
  .clear-float {
    height: 400px;
    width: 100%;
    background-color: #0a7f12;
  }
  .clear {
    display: inline-block;
    &::after {
      content: "";
      display: block;
      clear: both;
      height: 0;
      line-height: 0;
      visibility:hidden;
    }
  }
  .btn {
    width: 80px;
    height: 30px;
    margin-top: 30px;
    background: #43c088;
    line-height: 30px;
    font-size: 15px;
    color: #fff;
    text-align: center;
    border-radius: 5px;
  }
}
</style>
