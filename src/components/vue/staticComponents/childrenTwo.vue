<template>
	<div class="children-two">
		<div class="title">子组件2</div>
		<div class="btn" @click="tellParent">将消息传递给父组件</div>
		<div class="btn" @click="sendMsgToOne">将消息传递给子组件1</div>
		<div class="data-info">{{fatherDataTwo}}</div>
		<div class="data-info">{{dataFromOne}}</div>
	</div>
</template>

<script>
import bus from '../staticJs/event';
export default {
	data() {
		return {
			parentTxt: '这是来着子组件2的txt~',
			brotherTwoTxt: '这是来自组件2传给组件1的txt~',
			dataFromOne: ''
		};
	},
	props: ['fatherDataTwo'],
	mounted () {
		this.getMsgFromOne();
	},
	methods: {
		tellParent() {
			this.$emit('listenTwo', this.parentTxt);
		},
		sendMsgToOne() {
			bus.$emit('dataFromTwo', this.brotherTwoTxt);
		},
		getMsgFromOne() {
			bus.$on('dataFromOne', data => {
				this.dataFromOne = data;
			});
		},
        clearData() {
            this.dataFromOne = '';
        }
	}
};
</script>

<style lang="scss" scoped>
.children-two {
  margin-top: 15px;
  padding: 10px;
  border: 2px solid #384d65;
  font-size: 16px;
  .title {
    padding: 10px 0 10px 0;
  }
  .btn {
    height: 30px;
    width: 200px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: #43c088;
    line-height: 30px;
    color: #fff;
    text-align: center;
  }
  .data-info {
    margin-top: 10px;
  }
}
</style>
