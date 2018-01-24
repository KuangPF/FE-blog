<template>
    <div class="components-bus-container" v-title="'vue 组件通信'">
        <div class="components-bus">
            <div class="title" @listenTwo='getCompomentTwo'>父组件:</div>
            <div @click="changeChildrenOne" class="btn">将消息传递给childrenOne</div>
            <div @click="changeChildrenTwo" class="btn">将消息传递给childrenTwo</div>
            <div class="data-info">{{dataFromOne}}</div>
            <div class="data-info">{{dataFromTwo}}</div>
            <children-one :fatherDataOne="fatherDataOne" @listenOne='getCompomentOne' ref="childrenOne"></children-one>
            <children-two :fatherDataTwo="fatherDataTwo" @listenTwo='getCompomentTwo' ref="childrenTwo"></children-two>
        </div>
        <div class="foot-btn" @click="clearData">清除数据</div>
    </div>
</template>

<script>
import childrenOne from './staticComponents/childrenOne';
import childrenTwo from './staticComponents/childrenTwo';
export default {
    data() {
        return {
            fatherDataOne: '',
            fatherDataTwo: '',
            dataFromOne: '',
            dataFromTwo: ''
        };
    },
    components: {
        childrenOne,
        childrenTwo
    },
    mounted() {

    },
    methods: {
        changeChildrenOne() {
            this.fatherDataOne = '发给子组件1的msg已发出~';
        },
        changeChildrenTwo() {
            this.fatherDataTwo = '发给子组件2的msg已发出~';
        },
        getCompomentOne(param) {
            this.dataFromOne = param;
        },
        getCompomentTwo(param) {
            this.dataFromTwo = param;
        },
        clearData() {
            this.dataFromOne = '';
            this.dataFromTwo = '';
            this.fatherDataTwo = '';
            this.fatherDataOne = '';
            this.$refs.childrenOne.clearData();
            this.$refs.childrenTwo.clearData();
        }
    }
};
</script>

<style lang="scss" scoped>
.components-bus-container {
  .components-bus {
    padding: 10px;
    border: 2px solid #384d65;
    font-size: 20px;
    box-sizing: border-box;
    .title {
      padding-bottom: 10px;
    }
    .btn {
      height: 50px;
      margin-bottom: 10px;
      border-radius: 15px;
      background-color: #43c088;
      line-height: 50px;
      color: #fff;
      text-align: center;
    }
    .data-info {
      margin-top: 10px;
    }
  }
  .foot-btn {
    height: 30px;
    width: 80px;
    margin: 20px 0 0 10px;
    border-radius: 5px;
    background-color: #ce0808;
    line-height: 30px;
    color: #fff;
    text-align: center;
  }
}
</style>

