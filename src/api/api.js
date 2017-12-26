import axios from 'axios';

export function getIndexItemLists() {
	return axios.request('../../static/data/data.json', {
		method: 'get',
		params: ''
	});
}
