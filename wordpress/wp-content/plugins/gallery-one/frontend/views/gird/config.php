<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

$config = array(
    'name' => __( 'Gird', 'gallery-one' ),
    'css' => 'css/style.css',
    'js' => array(
        'arr' => 'js/test.js',
    ),

    'view_settings' => array(
        array(
            'id' => 'columns',
            'default' => 4,
            'label' => __( 'Desktop columns', 'gallery-one' ),
            'type'      => 'select',
            'options'   => array(
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