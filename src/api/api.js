import axios from 'axios';

export function getIndexItemLists() {
	return axios.request('../../static/data/data.json', {
		method: 'get',
		params: ''
	});
};
export function getVueItemLists() {
	return axios.request('../../static/data/vue.json', {
		method: 'get',
		params: ''
	});
}
