import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index';
import PageTransition from '@/components/PageTransition';
import VueIndex from '@/components/vue/VueIndex';
import JsIndex from '@/components/js/JsIndex';
import HtmlIndex from '@/components/html/HtmlIndex';
import CssIndex from '@/components/css/CssIndex';
import UiIndex from '@/components/ui/UiIndex';
import ComponentsBus from '@/components/vue/ComponentsBus';
/* javascript */
import Promise from '@/components/js/Promise';
import LetAndConst from '@/components/js/LetAndConst';
/* css */
import ClearFloat from '@/components/css/ClearFloat';

Vue.use(Router);
Router.prototype.goBack = function () {
	this.isBack = true;
	window.history.go(-1);
};

export default new Router({
	routes: [{
		path: '/',
		name: '',
		component: PageTransition,
		children: [{
			path: '',
			name: '',
			component: index
		}, {
			path: '/vue',
			component: PageTransition,
			children: [{
				path: '',
				component: VueIndex
			}, {
				path: '/vue/componentsBus',
				component: ComponentsBus
			}]
		}, {
			path: '/javascript',
			component: PageTransition,
			children: [{
				path: '',
				component: JsIndex
			}, {
				path: '/javascript/es6-promise',
				component: Promise
			}, {
				path: '/javascript/let-const',
				component: LetAndConst
			}]
		}, {
			path: '/h5',
			component: HtmlIndex
		}, {
			path: '/css',
			component: PageTransition,
			children: [{
				path: '',
				component: CssIndex
			}, {
				path: '/css/clear-float',
				component: ClearFloat
			}]
		}, {
			path: '/ui',
			name: 'UiIndex',
			component: UiIndex
		}]
	}]
});
