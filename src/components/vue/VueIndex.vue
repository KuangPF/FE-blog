<template>
	<div class="vue-index">
		<div class="header">
			<div class="logo"><img :src="vueItemHeader.headerImg"></div>
			<div class="content-detail">
				<div class="line1 font1">
					<div class="articel-title">随笔:</div>
					<div class="article-desc">该模块一共{{vueItemHeader.articeNum}}篇随笔</div>
				</div>
				<div class="line2 font1">
					<div class="articel-title">更新文章:</div>
					<div class="article-desc">{{vueItemHeader.articleTitle}}</div>
				</div>
				<div class="line3 font1">
					<div class="articel-title">更新时间:</div>
					<div class="article-desc">{{vueItemHeader.articleDate}}</div>
				</div>
			</div>
		</div>
		<div class="main-content">
			<div class="wrap">
				<div class="item-list" v-for="(item,index) in articleList" @click="viewDetail(item.pathUrl)">
					<div class="item-index font1">{{index+1}}</div>
					<div class="item-right">
						<div class="item-title">{{item.title}}</div>
						<div class="item-foot">
							<div class="item-label tagcloud">
								<a :class="item.labelColor">{{item.label}}</a>
							</div>
							<div class="item-date">{{item.date}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getVueItemLists } from '../../api/api';
export default {
	data() {
		return {
			vueItemHeader: [],
			articleList: []
		};
	},
	mounted() {
		getVueItemLists().then(res => {
			let vueItemHeader = res.data.headerInfo;
			let articleList = res.data.articleList;
			this.vueItemHeader = vueItemHeader;
			this.articleList = articleList;
		});
	},
	methods: {
		viewDetail(pathUrl) {
			this.$router.push({ path: pathUrl, query: '' });
		}
	}
};
</script>

<style>

</style>
