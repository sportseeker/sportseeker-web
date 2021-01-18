<?php if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly ?>
<?php
/**
 * Moove_Radioselect_View File Doc Comment
 *
 * @category Moove_Radioselect_View
 * @package   moove-radio-select
 * @author    Gaspar Nemes
 */

/**
 * Moove_Radioselect_View Class Doc Comment
 *
 * @category Class
 * @package  Moove_Radioselect_View
 * @author   Gaspar Nemes
 */
class Moove_Radioselect_View {
	/**
	 * Load and update view
	 *
	 * Parameters:
	 *
	 * @param string $view // the view to load, dot used as directory separator, no file extension given.
	 * @param mixed  $data // The data to display in the view (could be anything, even an object).
	 */
	public static function load( $view, $data ) {
		$view_file_origin = dirname( __FILE__ ) . DIRECTORY_SEPARATOR . 'views';
		$view_name = str_replace( '.' , DIRECTORY_SEPARATOR , $view ) . '.php';
		if ( locate_template( 'moove-externals' . DIRECTORY_SEPARATOR . $view_name ) ) :
			$view_file_origin = get_template_directory() . DIRECTORY_SEPARATOR . 'moove-externals';
		endif;
		ob_start();
		include $view_file_origin . DIRECTORY_SEPARATOR . $view_name;
		return ob_get_clean();
	}
}
