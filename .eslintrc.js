// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true,
	},
	// https://github.com/standard/standard/blob/master/docs/RULES-en.md
	extends: 'standard',
	// required to lint *.vue files
	plugins: [
		'html'
	],
	// add your custom rules here
	rules: {
		"indent": 0,
		"no-func-assign": [
			"off"
		],
		// don"t require  extension when importing
		"import/extensions": ["error", "always", {
			"js": "never"
		}],
		// allow optionalDependencies
		// "import/no-extraneous-dependencies": ["error", {
		// 	"optionalDependencies": ["test/unit/index.js"]
		// }],
		// allow debugger during development
		"no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
		"object-shorthand": 0, //强制对象字面量缩写语法
		"no-tabs": "off",
		"quotes": [
			"error",
			"single",
			{
				"avoidEscape": true,
				"allowTemplateLiterals": true
			}
		],
		"no-unused-vars": [
			"error",
			{
				"vars": "all",
				"args": "after-used"
			}
		],
		"brace-style": [
			"error",
			"1tbs",
		],
		"semi": [
			"error",
			"always"
		],
		"import/extensions": 0,
		"newline-per-chained-call": 0,
		"no-console": 0,
		"prefer-const": 0,
		"prefer-template": 0,
		"no-param-reassign": 0,
		"comma-dangle": [
			1,
			"never"
		],
		"spaced-comment": [
			0,
			"always"
		],
		"space-before-function-paren": 0,
		"prefer-arrow-callback": 0,
		"func-names": 0,
		"no-underscore-dangle": 0,
		"import/prefer-default-export": 1,
		"class-methods-use-this": 0,
		"no-prototype-builtins": 0,
		"import/no-extraneous-dependencies": 0,
		"radix": 0,
		"eol-last": "off",
		"linebreak-style": "off",
		"max-len": ["error", 150, {
			"ignoreComments": true,
			"ignoreUrls": true
		}]
	}
}
