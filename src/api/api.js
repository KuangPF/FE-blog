import axios from 'axios';

const debug = process.env.NODE_ENV !== 'production';
const INDEX_ITEM_URL_BUILD = 'https://kuangpf.github.io/FE-blog/dist/static/data/index.json';
const VUE_ITEM_URL_BUILD = 'https://kuangpf.github.io/FE-blog/dist/static/data/vue.json';
const JAVASCRIPT_ITEM_URL_BUILD = 'https://kuangpf.github.io/FE-blog/dist/static/data/javascript.json';
const HTML_ITEM_URL_BUILD = 'https://kuangpf.github.io/FE-blog/dist/static/data/html.json';
const CSS_ITEM_URL_BUILD = 'https://kuangpf.github.io/FE-blog/dist/static/data/css.json';
const UI_ITEM_URL_BUILD = 'https://kuangpf.github.io/FE-blog/dist/static/data/ui.json';

const INDEX_ITEM_URL_DEV = '../../static/data/index.json';
const VUE_ITEM_URL_DEV = '../../static/data/vue.json';
const JAVASCRIPT_ITEM_URL_DEV = '../../static/data/javascript.json';
const HTML_ITEM_URL_DEV = '../../static/data/html.json';
const CSS_ITEM_URL_DEV = '../../static/data/css.json';
const UI_ITEM_URL_DEV = '../../static/data/ui.json';

const indexItemUrl = debug ? INDEX_ITEM_URL_DEV : INDEX_ITEM_URL_BUILD;
const vueItemUlr = debug ? VUE_ITEM_URL_DEV : VUE_ITEM_URL_BUILD;
const javascriptItemUrl = debug ? JAVASCRIPT_ITEM_URL_DEV : JAVASCRIPT_ITEM_URL_BUILD;
const htmlItemUlr = debug ? HTML_ITEM_URL_DEV : HTML_ITEM_URL_BUILD;
const cssItemUrl = debug ? CSS_ITEM_URL_DEV : CSS_ITEM_URL_BUILD;
const uiItemUlr = debug ? UI_ITEM_URL_DEV : UI_ITEM_URL_BUILD;

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
export function getJavascriptItemLists() {
	return axios.request(javascriptItemUrl, {
		method: 'get',
		params: ''
	});
};
export function getHtmlItemLists() {
	return axios.request(htmlItemUlr, {
		method: 'get',
		params: ''
	});
};
export function getCssItemLists() {
	return axios.request(cssItemUrl, {
		method: 'get',
		params: ''
	});
}
export function getUiItemLists() {
	return axios.request(uiItemUlr, {
		method: 'get',
		params: ''
	});
}
