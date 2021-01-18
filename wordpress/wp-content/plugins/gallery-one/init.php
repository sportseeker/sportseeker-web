<?php
/*
Plugin Name: Gallery One
Plugin URI: http://shrimp2t.com/gallery-one/
Description: A cool responsive gallery plugin with beautifully views.
Author: shrimp2t
Author URI: http://wordpress.org/
Version: 1.0.2
Text Domain: gallery-one
License: GPL version 2 or later - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
*/

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

if ( ! class_exists( 'GalleryOne' ) ) {

    define('GALLERY_ONE_URL', trailingslashit(plugins_url('', __FILE__)));
    define('GALLERY_ONE_PATH', trailingslashit(plugin_dir_path(__FILE__)));


    class GalleryOne
    {

        function __construct()
        {
            $this->includes();
            $this->admin_includes();
            add_action('init', array($this, 'post_type_init'));

            add_action('wp_enqueue_scripts', array($this, 'enqueue'));

            load_plugin_textdomain('gallery-one', false, plugin_basename(dirname(__FILE__)) . '/languages');
        }

        /**
         * Register a book post type.
         *
         * @link http://codex.wordpress.org/Function_Reference/register_post_type
         */
        function post_type_init()
        {
            $labels = array(
                'name' => _x('Galleries', 'post type general name', 'gallery-one'),
                'singular_name' => _x('Gallery', 'post type singular name', 'gallery-one'),
                'menu_name' => _x('Galleries', 'admin menu', 'gallery-one'),
                'name_admin_bar' => _x('Gallery', 'add new on admin bar', 'gallery-one'),
                'add_new' => _x('Add New', 'gallery', 'gallery-one'),
                'add_new_item' => __('Add New Gallery', 'gallery-one'),
                'new_item' => __('New Gallery', 'gallery-one'),
                'edit_item' => __('Edit Gallery', 'gallery-one'),
                'view_item' => __('View Gallery', 'gallery-one'),
                'all_items' => __('All Galleries', 'gallery-one'),
                'search_items' => __('Search Galleries', 'gallery-one'),
                'parent_item_colon' => __('Parent Galleries:', 'gallery-one'),
                'not_found' => __('No Galleries found.', 'gallery-one'),
                'not_found_in_trash' => __('No Galleries found in Trash.', 'gallery-one')
            );

            $args = array(
                'labels' => $labels,
                'description' => __('Description.', 'gallery-one'),
                'public' => false,
                'publicly_queryable' => true,
                'show_ui' => true,
                'show_in_menu' => true,
                'query_var' => true,
                'rewrite' => array('slug' => 'gallery'),
                'capability_type' => 'post',
                'has_archive' => true,
                'hierarchical' => false,
                'menu_position' => null,
                'supports' => array('title', 'excerpt', 'comments'),
                'menu_icon' => 'dashicons-images-alt'
            );

            register_post_type('go_album', $args);
        }

        static function get_social_api()
        {
            $api_settings = array(
                'facebook' => '202670940102926|bb14cd826cee5490f19051e6bd0bd77c', // app ID|secret key
                'flickr' => 'a68c0befe246035b74a8f67943da7edc'
            );
            return apply_filters('s_get_social_api', $api_settings);
        }

        static function load_configs()
        {
            $folders = GalleryOne::get_template_folders();
            $all_views = array();
            foreach (( array )$folders as $folder) {
                $views = list_files($folder, 1);
                foreach ($views as $view) {
                    if (file_exists($view . 'view.php')) {
                        $view_name = basename($view);
                    } else {
                        $view_name = '';
                    }

                    $config = array(
                        'name' => $view_name,
                    );
                    if (!isset($all_views[$view_name])) {
                        $all_views[$view_name] = array();
                    }

                    if (file_exists($view . 'config.php')) {
                        include $view . 'config.php';
                    } else {
                        $config = array(
                            'name' => $view,
                        );
                    }
                    $all_views[$view_name]['config'] = $config;

                    if (file_exists($view . 'view.php')) {
                        $all_views[$view_name]['tpl'] = $config;
                    }
                }
            }

            foreach ($all_views as $k => $view) {
                if (!$k) {
                    unset($all_views[$k]);
                } else {
                    if (!$view['config']['name']) {
                        unset($all_views[$k]);
                    }
                }

            }

            return $all_views;
        }

        /**
         * Get url of any dir
         *
         * @param string $file full path of current file in that dir
         * @return string
         */
        static function get_url($file = '')
        {
            if (!$file) {
                return $file;
            }
            if ('WIN' === strtoupper(substr(PHP_OS, 0, 3))) {
                // Windows
                $content_dir = str_replace('/', DIRECTORY_SEPARATOR, WP_CONTENT_DIR);
                $content_url = str_replace($content_dir, WP_CONTENT_URL, trailingslashit(dirname($file)));
                $url = str_replace(DIRECTORY_SEPARATOR, '/', $content_url);
            } else {
                $url = str_replace(
                    array(WP_CONTENT_DIR, WP_PLUGIN_DIR),
                    array(WP_CONTENT_URL, WP_PLUGIN_URL),
                    trailingslashit(dirname($file))
                );
            }
            return set_url_scheme($url);
        }

        static function get_template_folders()
        {
            $folders = array(
                'child-templates' => STYLESHEETPATH . '/gallery-one',
                'plugin-templates' => GALLERY_ONE_PATH . 'frontend/views',
                'theme-templates' => TEMPLATEPATH . '/gallery-one'
            );

            return apply_filters('gallery_one_get_template_folders', $folders);
        }

        static function load_view($view = 'gird', $file = 'view.php')
        {
            $template_name = "/{$view}/{$file}";
            $located = false;
            foreach (( array )self::get_template_folders() as $folder) {
                if (!$folder)
                    continue;

                if (file_exists($folder . $template_name)) {  // Child them
                    $located = $folder . $template_name;
                    break;
                }
            }

            $located = apply_filters('gallery_one_load_view', $located, $view, $file);

            if ($located) {
                return $located;
            }

            return false;
        }

        function admin_includes()
        {
            if (is_admin()) {
                require_once GALLERY_ONE_PATH . 'admin/class-admin.php';
            }
        }

        function includes()
        {
            require_once GALLERY_ONE_PATH . 'inc/class-data.php';
            require_once GALLERY_ONE_PATH . 'inc/class-shortcode.php';
        }

        function enqueue()
        {
            wp_enqueue_style('justified-gallery', GALLERY_ONE_URL . 'assets/justified-gallery/justifiedGallery.min.css');
            wp_enqueue_style('lightgallery', GALLERY_ONE_URL . 'assets/lightgallery/css/lightgallery.css');
            wp_enqueue_style('gallery-one', GALLERY_ONE_URL . 'assets/css/frontend.css');

            wp_enqueue_style('flexslider', GALLERY_ONE_URL . 'assets/flexslider/flexslider.css');

            wp_enqueue_style('lightslider', GALLERY_ONE_URL . 'assets/lightslider/css/lightslider.css');
        }

    }

    function gallery_one_loader()
    {
        $GLOBALS['GalleryOne'] = new GalleryOne();
    }

    add_action('plugins_loaded', 'gallery_one_loader');
}

