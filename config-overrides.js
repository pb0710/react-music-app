const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require('path');

function resolve(dir) {
	return path.join(__dirname, '.', dir)
}

module.exports = override(
	// alias
	addWebpackAlias({
		'@': resolve('src/components'),
		'#': resolve('src/pages')
	}),
	// antd按需加载
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: 'css'
	})
)