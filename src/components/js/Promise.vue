<template>
	<div class="promise-content">
		<div class="promise-demo">
			<div class="btn btn-success" @click="promiseClick(true)">点击成功</div>
			<div class="btn btn-danger" @click="promiseClick(false)">点击失败</div>
		</div>
		<div class="promise-then">
			<div class="btn btn-primary" @click="promiseThenClick(true)">点击查看 then 的 demo</div>
		</div>
		<div class="promise-all">
			<div class="btn btn-primary" @click="promiseAllClick()">点击查看 promise.all</div>
		</div>
		<div class="promise-race">
			<div class="btn btn-primary" @click="promiseRaceClick()">点击查看 promise.race</div>
		</div>
		<div class="show-msg text">{{msg}}</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: ''
		};
	},
	mounted() {

	},
	methods: {
		promise(ready) {
			return new Promise((resolve, reject) => {
				if (ready) {
					resolve('promise is done');
				} else {
					reject('promise is error'); // eslint-disable-line
				}
			});
		},
		promiseClick(ready) {
			this.promise(ready).then((res) => {
				this.msg = res;
			}, (err) => {
				this.msg = err;
			});
		},
		promiseThenOne() {
			this.msg += '+promiseThenOne';
		},
		promiseThenTwo() {
			this.msg += '+promiseThenTwo';
		},
		promiseThenThree() {
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve('promiseThenThree');
				}, 1000);
			});
		},
		promiseThenFour() {
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve('promiseThenFour');
				}, 3000);
			});
		},
		promiseThenClick(ready) {
			this.promise(ready).then((res) => {
				this.msg = res;
			}).then(this.promiseThenOne).then(this.promiseThenTwo);
		},
		promiseAllClick() {
			Promise.all([this.promiseThenThree(), this.promiseThenFour()]).then((res) => {
				this.msg = res;
			});
		},
		promiseRaceClick() {
			Promise.race([this.promiseThenThree(), this.promiseThenFour()]).then((res) => {
				this.msg = res;
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.promise-content {
  .promise-demo,
  .promise-then,
  .promise-all,
  .promise-race {
    margin: 20px 0 0 10px;
  }
  .show-msg {
    margin: 20px 0 0 10px;
  }
}
</style>
