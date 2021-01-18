<?php
/**
 * User: truongsa
 * Date: 4/22/16
 * Time: 22:58
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

global $gallery_one_shortcode_style;

class GalleryOne_Shortcode {
    public $view = 'gird';
    public $id ;
    public $lightbox ;
    public $atts = array();
    public $media;
    public $settings;
    public $config = array();

    function __construct( $atts = array(), $content = '' ) {
        $atts = shortcode_atts( array(
            'id'        => '', // ablum id
            'view'      => '', // View type
            'settings'  => '', // View type
        ), $atts );
        if ( ! $atts['view'] ) {
            $atts['view'] = 'gird'; // gird
        }

        $this->id   = $atts['id'];
        $this->view = $atts['view'];
        $this->settings = urldecode_deep( $atts['settings'] );
        $this->settings = json_decode( $this->settings , true );

        $this->load_settings_args();
        $this->atts = $atts;

        if ( $this->id ) {
            $this->media = new Gallery_One_Media_Data( $this->id );
        }
        $this->load_style();
        $this->enqueue();
    }

    function load_settings_args(){
        $file = GalleryOne::load_view( $this->view, 'config.php' );
        if ( $file ) {
            include $file;
        }
        $has_data = empty( $this->settings ) ? true : false ;
        $args = array();
        if ( isset( $config ) ) {
            $this->config = $config;
            if (  isset( $config['view_settings'] ) && is_array( $config['view_settings'] ) ) {
                foreach ( $config['view_settings'] as $setting ) {
                    $setting = wp_parse_args( $setting, array(
                        'id' => '',
                        'default' => '',
                        'type' => '',
                    ) );

                    if ( $setting['id'] ) {
                        if ( $setting['type'] == 'checkbox' ) {
                            if ( ! $has_data ) {
                                $args[ $setting['id'] ] = $setting['default'];
                            } else {
                                $args[ $setting['id'] ] = '';
                            }
                        }  else {
                            $args[ $setting['id'] ] = $setting['default'];
                        }

                    }
                }
            }
        }

        $this->settings =  wp_parse_args( $this->settings, $args );
    }

    /**
     * Dynamic load css of view
     */
    function load_style(){
        global $gallery_one_shortcode_style;
        if ( ! is_array( $gallery_one_shortcode_style ) ) {
            $gallery_one_shortcode_style =  array();
        }

        // just run one time
        if ( ! isset( $gallery_one_shortcode_style[ $this->view ] ) ) {
            // find the root of view
            $files = isset( $this->config['css'] ) ? $this->config['css'] : false;
            if ( ! $files ) {
                $files = 'css/style.css';
            }
            $gallery_one_shortcode_style[ $this->view ] = array();
            foreach ( ( array ) $files as $k => $file ) {
                if ( ! $file ) {
                    continue;
                }
                if( filter_var( $file , FILTER_VALIDATE_URL ) ) {
                    $gallery_one_shortcode_style[ $this->view ][ $k ] = $file;
                } else {
                    $style = GalleryOne::load_view( $this->view,  $file );
                    if ( $style ) {
                        $url = GalleryOne::get_url($style) . basename($style);
                        $gallery_one_shortcode_style[$this->view][$k] = $url;
                    }
                }
            }

        }
    }

    function enqueue(){
        wp_enqueue_script( 'jquery' );
        wp_enqueue_script( 'justified-gallery', GALLERY_ONE_URL.'assets/justified-gallery/jquery.justifiedGallery.min.js',  array( 'jquery' ), '', true );
        wp_enqueue_script( 'lightgallery', GALLERY_ONE_URL.'assets/lightgallery/js/lightgallery.js',  array( 'jquery' ), '', true );
        wp_enqueue_script( 'thumbnail', GALLERY_ONE_URL.'assets/lightgallery/js/lg-thumbnail.js',  array( 'jquery' ), '', true );
        wp_enqueue_script( 'go-frontend', GALLERY_ONE_URL.'assets/js/frontend.js',  array( 'jquery' ), '1.0', true );

        $files = isset( $this->config['js'] ) ? $this->config['js'] : false;
        if ( $files ) {
            foreach (( array ) $files as $k => $file) {
                if ( ! $file ) {
                    continue;
                }
                if (filter_var($file, FILTER_VALIDATE_URL)) {
                    wp_enqueue_script("gallery-one-js-{$this->view}-" . $k, $file, array('jquery'), '', true);
                } else {
                    $style = GalleryOne::load_view( $this->view, $file );
                    if ( $style ) {
                        $url = GalleryOne::get_url($style) . basename($style);
                        wp_enqueue_script("gallery-one-js-{$this->view}-" . $k, $url, array('jquery'), '', true);
                    }
                }
            }
        }

        wp_localize_script( 'go-frontend', 'GalleryOne_Settings', apply_filters( 'gallery_one_shortcode_settings' , array(
            'desktop' => 1140,
            'tablet' => 940,
            'phone' => 576,
        ) ) );

    }

    function layout_classes(){
        $classes = array();
        if ( isset( $this->settings['columns'] ) ) {
            $classes['columns'] = 'sg-l-'.$this->settings['columns'];
        }
        if ( isset( $this->settings['m-columns'] ) ) {
            $classes['m-columns'] = 'sg-m-'.$this->settings['m-columns'];
        }
        if ( isset( $this->settings['s-columns'] ) ) {
            $classes['s-columns'] = 'sg-s-'.$this->settings['s-columns'];
        }
        return join( ' ', $classes );

    }

    function settings_attrs(){
        $atts = array();
        foreach ( ( array ) $this->settings as $k => $v ) {
            if ( is_array( $v ) ) {
                $v =  json_decode( $v );
            }
            $atts[] = "data-{$k}=\"".esc_attr( $v )."\"";
        }
        return join( " ", $atts );
    }

    function render(){
        $shortcode = $this;
        if ( is_object( $this->media ) && $this->media->count ) {
            ob_start();
            $tpl_file = GalleryOne::load_view( $this->view );
            if ( $tpl_file ) {
                include $tpl_file;
            }
            return shortcode_unautop( ob_get_clean() );
        }
        return '';
    }
}


function gallery_one_shortcode( $atts, $content ){
    $shortcode =  new GalleryOne_Shortcode( $atts, $content );
    return $shortcode->render();
}
add_shortcode( 'gallery_one', 'gallery_one_shortcode' );


function gallery_one_shortcode_load_style(){
    global $gallery_one_shortcode_style;
    echo '<script type="text/javascript">';
    echo  "var gallery_one_load_style = " . wp_json_encode( ( array ) $gallery_one_shortcode_style ) . ';';
    echo '</script>';
}
add_action( 'wp_footer', 'gallery_one_shortcode_load_style' );