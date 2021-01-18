<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

$config = array(
    'name' => __( 'Masonry', 'gallery-one' ),
    'css' => 'css/css.css',
    'js' => array(
        'masonry' => 'js/isotope.js',
        'js' => 'js/js.js'
    ),
    'view_settings' => array(
        array(
            'id' => 'gutter',
            'default' => '10',
            'label' => __( 'Gutter', 'gallery-one' ),
            'type' => 'text'
        ),
        array(
            'id'        => 'columns',
            'default'   => '4',
            'label'     => __( 'Desktop columns', 'gallery-one' ),
            'type'      => 'select',
            'options'   => array(
                '0' => __( '-', 'gallery-one' ),
                '1' => 1,
                '2' => 2,
                '3' => 3,
                '4' => 4,
                '5' => 5,
                '6' => 6,
                '7' => 7,
                '8' => 8,
            )
        ),
        array(
            'id'        => 'm-columns',
            'default'   => '4',
            'label'     => __( 'Tablet columns', 'gallery-one' ),
            'type'      => 'select',
            'options'   => array(
                '0' => __( '-', 'gallery-one' ),
                '1' => 1,
                '2' => 2,
                '3' => 3,
                '4' => 4,
                '5' => 5,
                '6' => 6,
                '7' => 7,
                '8' => 8,
            )
        ),
        array(
            'id'        => 's-columns',
            'default'   => '2',
            'label'     => __( 'Phone columns', 'gallery-one' ),
            'type'      => 'select',
            'options'   => array(
                '0' => __( '-', 'gallery-one' ),
                '1' => 1,
                '2' => 2,
                '3' => 3,
                '4' => 4,
                '5' => 5,
                '6' => 6,
                '7' => 7,
                '8' => 8,
            )
        ),

        array(
            'id'        => 'lightbox',
            'default'   => '1',
            'label'     => __( 'Show Lightbox', 'gallery-one' ),
            'type'      => 'checkbox'
        ),
    ),
);
