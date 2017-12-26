<template>
	<div class="index" v-title="'index'">
		<div class="header">
			<div class="menu"><img src="../../static/index/menu.svg"></div>
			<div class="title">Front-End Blog</div>
		</div>
		<div class="main-content">
			<div class="wrap">
				<div class="content-item" v-for="item in indexItemList">
					<div class="item-icon"><img :src="item.headerImg"></div>
					<div class="item-detail">
						<div class="item-label">
							<span class="label-title">标签:</span>
							<a v-for="item in item.label" :class="item.colorClass">{{item.labelText}}</a>
						</div>
						<div class="recently-update">
							<span>最近更新:</span>
							<span class="font-color1">{{item.updateDesc}}</span>
						</div>
						<div class="update-date">
							<span >更新时间:</span>
							<span class="font-color1">{{item.updateDate}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getIndexItemLists } from '../api/api';
export default {
	data() {
		return {
			'indexItemList': []
		};
	},
	mounted() {
		getIndexItemLists().then(res => {
			let indexItemList = res.data.indexItemList;
			console.log(indexItemList);
			this.indexItemList = indexItemList;
		});
	}
};
</script>

<style>

</style>
