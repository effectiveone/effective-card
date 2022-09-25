const defaultConfig = require('@wordpress/scripts/config/webpack.config');
module.exports = {
	...defaultConfig,
	entry: {
		// 'effective-page-builder': './includes/block-editor/blocks/effective-page-builder',
		// 'effective-page-builder-counter': './includes/block-editor/blocks/effective-page-builder-counter',
		// 'effective-page-builder-cards': './includes/block-editor/blocks/effective-page-builder-cards',
		// 'effective-page-builder-card': './includes/block-editor/blocks/effective-page-builder-card',
		'effective-card-one': './includes/block-editor/blocks/effective-card-one',

	},
};
