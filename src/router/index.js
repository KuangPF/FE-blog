import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index';
import PageTransition from '@/components/PageTransition';
import VueIndex from '@/components/vue/VueIndex';
import JsIndex from '@/components/js/JsIndex';
import ComponentsBus from '@/components/vue/ComponentsBus';

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
			name: 'vue',
			component: VueIndex,
			children: [{
				path: '/componentsBus',
				name: 'componentsBus',
				component: ComponentsBus
			}]
		}, {
			path: '/javascript',
			name: 'javascript',
			component: JsIndex
		}]
	}]
});
