<?php
/**
 * Plugin Name:       effective-cards
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       effective-cards
 *
 * @package           create-block
 */

function create_block_effective_cards_init () {

	$effectives = array(
		// 'effective-page-builder/',
		// 'effective-page-builder-counter/',
		// 'effective-page-builder-cards/',
		// 'effective-page-builder-card/',
		'effective-card-one',
	);

	foreach ( $effectives as $effective ) {
		register_block_type( plugin_dir_path( __FILE__ ) . 'includes/block-editor/blocks/' . $effective);
	}
}
add_action( 'init', 'create_block_effective_cards_init' );
