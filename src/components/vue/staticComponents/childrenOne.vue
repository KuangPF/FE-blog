<template>
	<div class="children-one">
		<div class="title">子组件1</div>
		<div class="btn" @click="tellParent">将消息传递给父组件</div>
		<div class="btn" @click="sendMsgToTwo">将消息传递给子组件2</div>
		<div class="data-info">{{fatherDataOne}}</div>
		<div class="data-info">{{dataFromTwo}}</div>
	</div>
</template>

<script>
import bus from '../staticJs/event';
export default {
	data() {
		return {
			parentTxt: '这是来着子组件1的txt~',
			dataFromTwo: '',
			brotherOneTxt: '这是来自组件1传给组件2的txt~'
		};
	},
	props: ['fatherDataOne'],
	mounted() {
		this.getMsgFromTwo();
	},
	methods: {
		tellParent() {
			this.$emit('listenOne', this.parentTxt);
		},
		getMsgFromTwo() {
			bus.$on('dataFromTwo', data => {
				this.dataFromTwo = data;
			});
		},
		sendMsgToTwo() {
			bus.$emit('dataFromOne', this.brotherOneTxt);
		},
        clearData() {
            this.dataFromTwo = '';
        }
	}
};
</script>

<style lang="scss" scoped>
.children-one {
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
