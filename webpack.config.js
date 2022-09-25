const defaultConfig = require('@wordpress/scripts/config/webpack.config');
module.exports = {
	...defaultConfig,
	entry: {

		'effective-card-three': './includes/block-editor/blocks/effective-card-three',
		'effective-card-two': './includes/block-editor/blocks/effective-card-two',
		'effective-card-one': './includes/block-editor/blocks/effective-card-one',

	},
};
