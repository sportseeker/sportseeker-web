<?php

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class GalleryOne_Editor {

    function __construct() {
        add_action( 'media_buttons', array( $this, 'button' ), 25 );
        add_action( 'after_wp_tiny_mce', array( $this, 'popup' ), 25 );
        add_action( 'admin_enqueue_scripts', array( $this, 'add_tinymce' ), 25, 2 );
        add_action( 'admin_enqueue_scripts',array( $this, 'scripts' ) );
        add_action( 'admin_init', array( $this, 'editor_style' ) );
    }

    function editor_style() {
        add_editor_style( GALLERY_ONE_URL.'assets/admin/editor.css' );
    }

    function scripts(){
        wp_enqueue_script( 'jquery' );
        wp_enqueue_media();
        wp_enqueue_style( 's_admin_shortcode',  GALLERY_ONE_URL.'assets/admin/admin.css', true );
        wp_enqueue_script( 's_admin_shortcode',  GALLERY_ONE_URL.'assets/admin/shortcode.js', array( 'jquery' ), '', true );
        wp_localize_script( 'jquery', 'GalleryOne_Editor', array(
            'placeholder' => GALLERY_ONE_URL.'assets/images/gallery.png',
            'views'       => GalleryOne::load_configs(),
        ) );
    }

    function add_tinymce( $a = null, $b = null ){
        global $typenow;
        add_filter( 'mce_external_plugins', array( $this, 'add_tinymce_plugin' ), 25, 1 );
    }

    function add_tinymce_plugin( $plugin_array ) {
        $plugin_array['gallery-one'] = GALLERY_ONE_URL.'assets/admin/editor.js';
        return $plugin_array;
    }

    function button( $editor_id = '' ){
        $output = '';
        $output .= '<a href="#" title="'.esc_attr__( 'Insert Gallery', 'gallery-one' ).'" data-editor="'.esc_attr( $editor_id ).'" class="button insert-gallery-one" type="button"><span class="dashicons dashicons-images-alt"></span>'.esc_html( 'Add Gallery', 'gallery-one' ).'</a>';
        echo $output;
    }

    function popup(){
        global $pagenow, $typenow;
        // Only run in post/page creation and edit screens

        $args = array(
            'post_status' => 'publish',
            'post_type' => 'go_album',
            'posts_per_page' => -1

        );
        $query = new WP_Query( $args );
        $posts = $query->get_posts();

        ?>
        <script id="gallery-one-shortcode-view-tpl" type="text/html">
            <# _.map( data , function( view, key ) { #>
                <label title="{{ view.desc }}" data-setting="caption" class="setting setting-{view.type}">
                    <span class="name">{{ view.label }}</span>
                    <# if ( view.type === 'textarea' ) { #>
                    <textarea name="{{ view.id }}">{{ view.value }}</textarea>
                    <# } else if ( view.type === 'checkbox' ) { #>
                        <input type="checkbox" <# if ( view.value == 1 ) { #> checked="checked" <# } #> value="1" name="{{ view.id }}" />
                    <# } else if ( view.type === 'select' ) { #>
                        <select name="{{ view.id }}" >
                            <# _.map( view.options , function( option, k ) { #>
                            <option <# if ( view.value == k ) { #> selected="selected" <# } #> value="{{ k }}">{{ option }}</option>
                            <# } ) #>
                        </select>
                    <# } else { #>
                        <input type="text" value="{{ view.value }}" name="{{ view.id }}" />
                    <# } #>
                </label>
            <# } ); #>
        </script>

        <script id="gallery-one-album-info-tpl" type="text/html">
            <div class="album-cover">
                <# if ( data.thumb ){  #>
                <img src="{{ data.thumb }}" alt="">
                <# } #>
            </div>
            <div class="details">
                <# if ( data.thumb ){  #>
                <div class="filename">{{ data.title }}</div>
                <# } #>
                <# if ( data.date ){  #>
                <div class="uploaded">{{ data.date }}</div>
                <# } #>
                <# if ( data.count_text ){  #>
                <div class="file-size">{{ data.count_text }}</div>
                <# } #>

                <a target="_blank" href="{{ data.edit_url }}" class="edit-attachment"><?php esc_attr_e( 'Edit album', 'gallery-one' ); ?></a>
                <?php /*
                <button data-id="{{ data.id }}" class="button-link delete-attachment" type="button"><?php _e( 'Delete', 'gallery-one' ); ?></button>
                */ ?>
                <div class="compat-meta">
                </div>
            </div>
        </script>

        <script id="gallery-one-shortcode-tpl" type="text/html">
            <div class="s-shortcode-modal media-modal wp-core-ui">
                <button class="button-link media-modal-close" type="button"><span class="media-modal-icon"><span class="screen-reader-text">Close media panel</span></span></button>
                <div class="media-modal-content">
                    <div class="media-frame mode-select wp-core-ui hide-menu">
                        <div class="media-frame-title">
                            <h1><?php esc_attr_e( 'Insert Album', 'gallery-one' ); ?><span class="dashicons dashicons-arrow-down"></span></h1>
                        </div>
                        <div class="media-frame-content" data-columns="2">

                            <div class="attachments-browser">
                               
                                <ul tabindex="-1" class="attachments" data-columns="2">
                                    <?php foreach ( $posts as $post ){

                                        $media = new Gallery_One_Media_Data( $post->ID );
                                        $url = $media->get_first_item()->get_image_url( array(
                                            'wp' => 'medium',
                                            'facebook' => 3,
                                            'flickr' => 'z'
                                        ) );

                                        if( $post->post_title == '' ){
                                            $post->post_title = __( '[Untitled]', 'gallery-one' );
                                        }

                                        $album_info = array(
                                            'title' => $post->post_title,
                                            'type' => $media->type,
                                            'id'    => $post->ID,
                                            'date'  => get_the_date( get_option('date_format' ), $post ),
                                            'edit_url' =>  get_edit_post_link( $post->ID ),
                                            'thumb' => $url,
                                            'count' => $media->count,
                                            'count_text' => sprintf( _n( '%s Image', '%s Images', $media->count, 'gallery-one' ), $media->count ),
                                        );

                                        ?>
                                        <li data-info="<?php echo esc_attr( json_encode( $album_info ) ); ?>" tabindex="0" title="<?php echo esc_attr( $post->post_title ); ?>" data-type="<?php echo esc_attr( $media->type ); ?>" data-id="<?php echo esc_attr( $post->ID ); ?>" class="attachment">
                                            <div class="attachment-preview landscape">
                                                <div class="thumbnail">
                                                    <div class="centered">
                                                        <img alt="" src="<?php echo esc_url( $url ); ?>">
                                                    </div>
                                                </div>
                                                <div class="attachment-count">
                                                    <?php
                                                    if ( $media->count > 0 ) {
                                                        $n = $media->count - 1;
                                                        if ( $n > 0 ) {
                                                            echo '<span>';
                                                            printf( _n( '+%s Images', '+%s Images', $n, 'gallery-one' ), $n );
                                                            echo '</span>';
                                                        }
                                                    } else {
                                                        echo '<span>';
                                                        printf( _n( '%s Images', '%s Images', 0, 'gallery-one' ), 0 );
                                                        echo '</span>';
                                                    }
                                                    ?>
                                                </div>
                                                <div class="attach-title"><?php echo esc_html( $post->post_title ); ?></div>
                                            </div>

                                            <button tabindex="0" class="button-link check" type="button"><span class="media-modal-icon"></span><span class="screen-reader-text"><?php  _e( 'Deselect', 'gallery-one' ); ?></span></button>
                                        </li>
                                    <?php } ?>
                                </ul>

                                <div class="media-sidebar">
                                    <div tabindex="0" class="attachment-details save-ready">

                                        <div class="details-no-select-info">
                                            <h2><?php esc_attr_e( 'Please select album', 'gallery-one' ); ?></h2>
                                        </div>

                                        <div class="details-selected-info">
                                            <h2><?php esc_attr_e( 'Details', 'gallery-one' ); ?></h2>
                                            <div class="attachment-info"></div>
                                            <h2><?php esc_attr_e( 'Display settings', 'gallery-one' ); ?></h2>
                                            <label class="setting">
                                                <span class="name"><?php esc_attr_e( 'View', 'gallery-one' ); ?></span>
                                                <select name="view" class="gallery-view-type">
                                                    <option value=""><?php esc_attr_e( 'Select view', 'gallery-one' ) ?></option>
                                                    <# _.map( GalleryOne_Editor.views , function( view, key ) { #>
                                                        <option <# if ( key == data.view ) { #> selected="selected" <# } #> value="{{ key }}">{{ view.config.name }}</option>
                                                    <# } ); #>
                                                </select>
                                            </label>
                                            <form class="shortcode-settings">
                                                <div class="view-configs"></div>
                                            </form>
                                            <br/>
                                        </div>


                                    </div>
                                    <form class="compat-item"></form>
                                </div>
                            </div>
                        </div>
                        <div class="media-frame-toolbar">
                            <div class="media-toolbar">
                                <div class="media-toolbar-secondary"></div>
                                <div class="media-toolbar-primary search-form"><button type="button" class="btn-insert-gallery-shortcode button media-button button-primary button-large"><?php echo esc_html( 'Insert', 'gallery-one' ); ?></button></div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </script>
        <?php

    }
}

new GalleryOne_Editor();