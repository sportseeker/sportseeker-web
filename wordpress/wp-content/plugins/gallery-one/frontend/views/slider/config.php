<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

$config = array(
    'name' => __( 'Slider', 'gallery-one' ),
    //'css' => 'css/css.css',
    'js' => array(
        'lightslider' => GALLERY_ONE_URL.'assets/lightslider/js/lightslider.js',
        'js' => 'js/js.js'
    ),
    'view_settings' => array(
        array(
            'id'    => 'pause',
            'default' => '2000',
            'label' => __( 'Pause', 'gallery-one' ),
            'desc' => __( 'The time (in ms) between each auto transition.', 'gallery-one' ),
            'type' => 'text',
        ),
         array(
            'id'    => 'speed',
            'default' => '400',
            'label' => __( 'Speed', 'gallery-one' ),
            'desc' => __( 'Transition duration (in ms)', 'gallery-one' ),
            'type' => 'text',
        ),
        // gallery
        array(
            'id' => 'gallery',
            'default' => '1',
            'label' => __( 'Gallery', 'gallery-one' ),
            'desc' => __( 'Enable thumbnails gallery.', 'gallery-one' ),
            'type' => 'checkbox',
        ),
        array(
            'id' => 'loop',
            'default' => '1',
            'label' => __( 'Loop', 'gallery-one' ),
            'type' => 'checkbox',
        ),

        array(
            'id' => 'auto',
            'default' => '1',
            'label' => __( 'Auto', 'gallery-one' ),
            'desc' => __( 'Slider will automatically start to play.', 'gallery-one' ),
            'type' => 'checkbox',
        ),

        array(
            'id' => 'pager',
            'default' => '1',
            'label' => __( 'Pager', 'gallery-one' ),
            'desc' => __( 'Enable pager option.', 'gallery-one' ),
            'type' => 'checkbox',
        ),

        array(
            'id' => 'thumbItem',
            'default' => '6',
            'label' => __( 'ThumbItem', 'gallery-one' ),
            'desc' => __( 'Number of gallery thumbnail to show at a time.', 'gallery-one' ),
            'type' => 'text',
        ),


        // lightbox
        array(
            'id' => 'lightbox',
            'default' => '1',
            'label' => __( 'LightBox', 'gallery-one' ),
            'desc' => __( 'Enable LightBox.', 'gallery-one' ),
            'type' => 'checkbox',
        ),


    ),
);
