import axios from 'axios';

const debug = process.env.NODE_ENV !== 'production';
const INDEX_ITEM_URL_BUILD = 'https://kuangpf.github.io/FE-blog/dist/static/data/index.json';
const VUE_ITEM_URL_BUILD = 'https://kuangpf.github.io/FE-blog/dist/static/data/vue.json';
const INDEX_ITEM_URL_DEV = '../../static/data/index.json';
const VUE_ITEM_URL_DEV = '../../static/data/vue.json';

const indexItemUrl = debug ? INDEX_ITEM_URL_DEV : INDEX_ITEM_URL_BUILD;
const vueItemUlr = debug ? VUE_ITEM_URL_DEV : VUE_ITEM_URL_BUILD;
export function getIndexItemLists() {
	return axios.request(indexItemUrl, {
		method: 'get',
		params: ''
	});
};
export function getVueItemLists() {
	return axios.request(vueItemUlr, {
		method: 'get',
		params: ''
	});
}
