<?php

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

$config = array(
    'name' => __( 'Justified', 'gallery-one' ),
    'js' => 'js/js.js',
    'view_settings' => array(
        array(
            'id' => 'margins',
            'default' => '10',
            'label' => __( 'Margins', 'gallery-one' ),
            'type' => 'text'
        ),
        array(
            'id' => 'rowHeight',
            'default' => 'rowHeight',
            'label' => __( 'Row Height', 'gallery-one' ),
            'type' => 'text'
        ),
        array(
            'id'        => 'lightbox',
            'default'   => '1',
            'label'     => __( 'Lightbox', 'gallery-one' ),
            'type'      => 'checkbox'
        ),

    ),
);