<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

$config = array(
    'name' => __( 'Carousel', 'gallery-one' ),
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
