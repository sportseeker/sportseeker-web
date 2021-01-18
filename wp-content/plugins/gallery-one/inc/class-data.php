<?php
/**
 * User: truongsa
 * Date: 4/21/16
 * Time: 18:04
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class Gallery_One_Media_Data {
    public $type = '';
    public $album_data = array();
    public $id = 0;
    public $count = 0;
    public $tags = array();
    /**
     * @var current item data
     */
    public $data;
    protected $current_item = false;
    function __construct( $album_id ){
        $this->id =  $album_id;
        $this->album_data = get_post_meta( $this->id, '_album_data', true );
        $this->type = get_post_meta( $this->id, '_album_type', true );
        $this->tags = get_post_meta( $this->id, '_album_items_tags', true );

        if ( ! is_array( $this->album_data ) ) {
            $this->album_data = array();
        }

        foreach ( $this->album_data as $k => $item ) {
            $tpl = $this->setup_data( $item );
            if ( $tpl && $tpl['url'] ) {
                $this->album_data[ $k ] = $tpl;
            } else {
                unset( $this->album_data[ $k ] );
            }
        }
        $this->count = count( $this->album_data );
    }

    function has_data( ){
        return count( $this->album_data ) ? true: false;
    }

    function get_data( ){
        return $this->album_data;
    }

    function setup_data( $data ){

        $data = wp_parse_args( $data, array(
            'id' => '',
            'title' => '',
            'description' => '',
            'caption' => '',
            'url' => '',
            'link' => '',
            'tags' => '',
            'social' => '', // where source
            'import' => '', // id of attachment
        ) );

        switch ( $this->type ){
            case 'wp':
                $data = wp_parse_args( $data, $this->default_wp_data() );
                $data['url'] = wp_get_attachment_url( $data['id'] );
                break;
            case 'facebook':
                $data = wp_parse_args( $data, $this->default_flickr_data() );
                if ( ! is_array( $this->data['images'] ) ) {

                }
                break;
            case 'flickr':
                $data = wp_parse_args( $data, $this->default_flickr_data() );
                break;
            default:
                return $data;
        }

        return apply_filters( 's_media_data_defaultdata', $data, $this );
    }

    protected function default_wp_data(){
        return array(
            'id' => '',
            'title' => '',
            'description' => '',
            'thumb' => '',
        ) ;
    }

    protected function default_facebook_data(){
        return array(
            'id' => '',
            'images' => array(),
            'title' => '',
            'description' => '',
            'thumb' => '',

        ) ;
    }

    protected function default_flickr_data(){
        return array(
            'id' => '',
            'secret' => '',
            'server' => '',
            'farm' => '',
            'title' => '',
            'description' => '',
            'isprimary' => '',
            'ispublic' => '',
            'isfriend' => '',
            'isfamily' => '',
        );
    }

    /**
     * Get item by index
     *
     * @param int $index
     * @return $this
     */
    function get_item( $index = 0 ){
        if ( isset( $this->album_data[ $index ] ) ) {
            $this->data = $this->album_data[ $index ];
        } else {
            $this->data = false;
        }
        return $this;
    }

    function get_first_item(){
        reset( $this->album_data );
        $this->data = current( $this->album_data );
        return $this;
    }

    function get( $key, $default = false ){
        if ( ! $this->data ) {
            return $default;
        }

        if ( isset( $this->data[ $key ] ) ) {
            return $this->data[ $key ];
        }

        return $default;
    }

    /**
     * @param string|array $size WP thumbnail size | fb image index ( from 0 - n ) | flickr size fuffixes ( s|q|t|m|n|-|z|c|b|h|k|o )
     * @return string
     */
    function get_image_url( $size = '' ){

        if ( ! is_array( $size ) ){
            $size = array(
                'wp'       => $size,
                'facebook' => $size,
                'flickr'   => $size,
            );
        }

        /**
         * The size if you dont know what type of albumb
         */
        $size = wp_parse_args( ( array )  $size, array(
            'wp'        => 'medium',
            'facebook'  => 3,
            'flickr'    => 'm'
        ) );
        if ( $size['flickr'] == '' ){
            $size['flickr'] = 'm'; // zmstzbo
        }
        if ( $size['facebook'] == '' ){
            $size['facebook'] = '0';
        }

        if ( $size['wp'] == '' ){
            $size['wp'] = 'medium';
        }

        $url = '';

        switch ( $this->data['social'] ){
            case 'wp':
                    $image = wp_get_attachment_image_src( $this->data['id'], $size['wp'], false );
                    if ( $image ) {
                        return $image[ 0 ];
                    }
                break;
            case 'facebook':
                $_size =  $size['facebook'];
                if ( ! $_size ) {
                    $_size = 0;
                }
                $_size = explode( ',', $_size );
                if ( $this->data ){
                    if ( isset( $this->data['images'] ) ) {
                        foreach ( $_size as $k ) {
                            $k = trim( $k );

                            if ( $k < 10 ) { // get by image ID from 0-8
                                if ( isset( $this->data['images'] [$k])) {
                                     return $this->data['images'] [$k]['source'];
                                    break;
                                }
                            } else {
                                foreach ( $this->data['images'] as $image ) {
                                    if ( isset( $image['width'] ) && $image['width'] == $k ) {
                                        return $image['source'];
                                    }
                                }
                            }

                        }
                    }
                }
                break;
            case 'flickr':
                $_size = $size['flickr'];
                $_size = explode( ',', $_size );
                if ( isset( $this->data['images'] ) ) {
                    foreach ( $_size as $k ) {
                        $k = trim( $k );
                        if ( isset( $this->data['images'] [ $k ] ) ) {
                            return  $this->data['images'] [ $k ]['source'];
                            break;
                        }
                    }
                }

                break;
            default:
                return $this->data['url'];
        }

        return $url;
    }


}