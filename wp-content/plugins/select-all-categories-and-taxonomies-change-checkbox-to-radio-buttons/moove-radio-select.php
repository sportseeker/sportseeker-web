<?php if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly ?>
<?php
/**
 * 	Contributors: mooveagency
 *  Plugin Name: Change Taxonomy Buttons
 *  Plugin URI: http://www.mooveagency.com
 *  Description: Allows to change taxonomy metabox buttons type to Radio, Checkbox, Checkbox with Select All button.
 *  Version: 1.3.1
 *  Author: Moove Agency
 *  Author URI: http://www.mooveagency.com
 *  License: GPLv2
 *  Text Domain: moove
 */
define( 'MOOVE_RADIOSELECT_VERSION', '1.3.0' );

include_once( dirname( __FILE__ ).DIRECTORY_SEPARATOR.'moove-view.php' );
include_once( dirname( __FILE__ ).DIRECTORY_SEPARATOR.'moove-options.php' );
include_once( dirname( __FILE__ ).DIRECTORY_SEPARATOR.'moove-controller.php' );
include_once( dirname( __FILE__ ).DIRECTORY_SEPARATOR.'moove-actions.php' );
include_once( dirname( __FILE__ ).DIRECTORY_SEPARATOR.'moove-functions.php' );

