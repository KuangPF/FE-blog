<template>
	<div class="index" v-title="'index'">
		<div class="header">
			<div class="menu" @click="menuShow"><img src="../../static/index/menu.svg"></div>
			<div class="title">Front-End Blog</div>
		</div>
		<div class="menu-content font2" :class="{'menu-content-show':isMenuShow}">
			<div class="view-wrap">
				<span class="view-title">关于我</span>
				<div class="view-div">{{menuItemList.aboutMe}}</div>
				<span class="view-title">标签</span>
				<div class="view-div tagcloud view-div-label">
					<a :href="item.src" v-for="item in menuItemList.label" :class="item.colorClass">{{item.desc}}</a>
				</div>
			</div>
		</div>
		<div class="main-content" ref="mainContent">
			<div class="wrap">
				<div class="content-item" v-for="item in indexItemList">
					<div class="item-icon"><img :src="item.headerImg"></div>
					<div class="item-detail">
						<div class="item-label tagcloud">
							<span class="label-title">标签:</span>
							<a v-for="item in item.label" :class="item.colorClass">{{item.labelText}}</a>
						</div>
						<div class="recently-update">
							<span>最近更新:</span>
							<span class="font-color1">{{item.updateDesc}}</span>
						</div>
						<div class="update-date">
							<span>更新时间:</span>
							<span class="font-color1">{{item.updateDate}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="mask" v-if="isMaskShow" @click="hideMenu"></div>
	</div>
</template>

<script>
import { getIndexItemLists } from '../api/api';
import BScroll from 'better-scroll';
export default {
	data() {
		return {
			indexItemList: [],
			menuItemList: [],
			isMenuShow: false,
			isMaskShow: false
		};
	},
	mounted() {
		getIndexItemLists().then(res => {
			let indexItemList = res.data.indexItemList;
			let menuItemList = res.data.menuItemList;
			console.log(indexItemList);
			this.indexItemList = indexItemList;
			this.menuItemList = menuItemList;
		});
		this._initScroll();
	},
	methods: {
		_initScroll() {
			this.mainContent = new BScroll(this.$refs.mainContent, {
				click: true
			});
		},
		menuShow() {
			this.isMaskShow = true;
			this.isMenuShow = true;
		},
		hideMenu() {
			this.isMaskShow = false;
			this.isMenuShow = false;
		}
	}
};
</script>

<style>

</style>
