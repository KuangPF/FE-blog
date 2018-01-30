/* eslint-disable */
let ua = window.navigator.userAgent;
let browser = {
	isAndroid: () => {
		return ua.match(/Android/i) ? true : false;
	},
	isIOS: () => {
		return ua.match(/iPhone|iPad|iPod/i) ? true : false;
	},
	isWx: () => {
		return ua.match(/micromessenger/i) ? true : false;
	},
	isWp: () => {
		return ua.toLowerCase().indexOf('windows phone') > -1;
	},
	isMobile: () => {
		return ua.match(/(iPhone|iPod|Android|ios)/i) ? true : false;
	},
	isPC: () => {
		return ua.match(/(iPhone|iPod|Android|ios)/i) ? false : true;
	}
};

/* android */
if (browser.isAndroid()) {
	console.log('android');
}
/* ios */
if (browser.isIOS()) {
	console.log('ios');
}
/* windows phone */
if (browser.isWp()) {
	console.log('windows phone');
}
/* weixin */
if (browser.isWx()) {
	console.log('weixin');
}
/* mobile */
if (browser.isMobile()) {
	console.log('Mobile');
}
/* pc */
if (browser.isPC()) {
	console.log('PC')
}
