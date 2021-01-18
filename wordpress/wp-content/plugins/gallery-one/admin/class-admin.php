<?php
/**
 * User: truongsa
 * Date: 4/7/16
 * Time: 18:48
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

require_once dirname( __FILE__ ).'/editor.php';

class GalleryOne_Admin{
    function __construct(){
        add_action( 'admin_enqueue_scripts',array( $this, 'scripts' ) );
        add_action( 'save_post',array( $this, 'save_metabox' ), 37, 2 );
        add_action( 'edit_form_after_editor', array ( $this, 'metabox' ) );


        add_filter( 'manage_go_album_posts_columns', array( $this, 'set_custom_edit_gallery_columns' ) );
        add_action( 'manage_go_album_posts_custom_column' , array( $this, 'custom_gallery_column' ), 10, 2 );
        // gallery_one_get_editor_preview_thumbs
        add_action( 'wp_ajax_gallery_one_get_editor_preview_thumbs', array( $this, 'gallery_one_get_editor_preview_thumbs' ) );

    }
    function gallery_one_get_editor_preview_thumbs(){
        $id = isset(  $_REQUEST['album_id'] ) ? absint( $_REQUEST['album_id'] ) : 0;
        if ( $id ) {
            $media = new Gallery_One_Media_Data( $id );
            $size = array(
                'wp' => 'thumbnail',
                'facebook' => '6,5,4,3,2',
                'flickr' => 'q',
            );
            $show = 3;
            $c = 0;
            if ( $media->count > 0 ) {
                foreach ($media->get_data() as $k => $item) {
                    ?>
                    <div class="media-item">
                        <img src="<?php echo esc_url($media->get_item($k)->get_image_url($size)); ?>" alt="">
                    </div>
                    <?php
                    $c++;
                    if ($c >= $show) {
                        break;
                    }
                }
                if ($c < $media->count && 0 < $media->count - $c) {
                    ?>
                    <div class="media-item more-images">
                        <span><?php
                        printf(_n('+%s', '+%s', $media->count - $c, 'gallery-one'), $media->count - $c);
                        ?></span>
                    </div>
                    <?php
                }
            } else {
                ?>
                <div class="media-item more-images no-images">
                    <span><?php _e( 'No images', 'gallery-one' ); ?></span>
                </div>
                <?php
            }
        }

        die( '' );
    }

    function set_custom_edit_gallery_columns($columns) {

        $cb = $columns['cb'];
        unset( $columns['cb'] );
        $title = $columns['title'];
        unset( $columns['title'] );
        $columns = array_merge(
            array(
                'cb'        => $cb,
                'title'     => $title,
                's_images'  => __( 'Images', 'gallery-one' ),
            ),
            $columns
        );

        return $columns;
    }

    function custom_gallery_column( $column, $post_id ) {
        switch ( $column ) {
            case 's_images' :
                $media = new Gallery_One_Media_Data( $post_id );
                $size =  array(
                    'wp' => 'thumbnail',
                    'facebook' => '6,5,4,3,2',
                    'flickr' => 'q',
                );
                $show =3;
                $c = 0;
                foreach ( $media->get_data() as $k => $item ){
                    ?>
                    <div class="media-item">
                        <div class="thumb">
                            <img src="<?php echo esc_url( $media->get_item( $k )->get_image_url( $size ) ); ?>" alt="">
                        </div>
                    </div>
                    <?php
                    $c++;
                    if ( $c >= $show ) {
                        break;
                    }
                }

                if ( $c < $media->count && 0 < $media->count - $c ) {
                    ?>
                    <div class="media-item more-images">
                        <span><?php
                            printf( _n( '+%s', '+%s', $media->count - $c , 'gallery-one' ), $media->count - $c );
                            ?></span>
                    </div>
                    <?php
                }
                break;

        }
    }

    function metabox(){
        if ( get_post_type() == 'go_album' ) {
            include GALLERY_ONE_PATH.'admin/edit.php';
        }
    }

    function save_metabox( $post_id, $post ){

        // Add nonce for security and authentication.
        $nonce_name   = isset( $_POST['gallery_one_edit'] ) ? $_POST['gallery_one_edit'] : '';
        $nonce_action = 'gallery_one_edit';

        // Check if nonce is set.
        if ( ! isset( $nonce_name ) ) {
            return;
        }

        // Check if nonce is valid.
        if ( ! wp_verify_nonce( $nonce_name, $nonce_action ) ) {
            return;
        }

        // Check if user has permissions to save data.
        if ( ! current_user_can( 'edit_post', $post_id ) ) {
            return;
        }

        // Check if not an autosave.
        if ( wp_is_post_autosave( $post_id ) ) {
           // return;
        }

        // Check if not a revision.
        if ( wp_is_post_revision( $post_id ) ) {
           // return;
        }

        $album_data = isset( $_REQUEST['album_data'] ) ? $_REQUEST['album_data'] : '{}';
        if ( is_string( $album_data ) ) {
            $album_data = json_decode( stripslashes_deep( $album_data ) , true );
        }

        $tags = array();

        foreach ( ( array ) $album_data as $k => $item ) {
            $album_data[ $k ]['tag-classes'] = '';
            if ( is_array( $item ) && isset( $item['tags'] ) ) {
                $ts = explode( ',', $item['tags'] );
                $ts = array_filter( $ts );
                $tag_classes = array();
                foreach ( $ts as $t ) {
                    $tags[ sanitize_title( $t ) ] = $t;
                    $tag_classes[] = sanitize_title( $t );
                }
                $album_data[ $k ]['tag-classes'] = join( ' ', $tag_classes );
            }
        }

        update_post_meta( $post_id, '_album_data', $album_data );
        update_post_meta( $post_id, '_album_items_tags', $tags );
        
    }


    function scripts( $hook ){
        global $post;
        if (
            (  $hook === 'toplevel_page_social-gallery'
                || $hook == 'post.php'
                || $hook == 'post-new.php'
            )
            &&
            get_post_type() == 'go_album'

        ) {

            wp_enqueue_script( 'jquery' );
            wp_enqueue_script( 'jquery-ui-core' );
            wp_enqueue_script( 'jquery-ui-sortable' );
            wp_enqueue_script( 'backbone' );
            wp_enqueue_media();

            // JS
            wp_enqueue_script( 'jquery.justifiedGallery', GALLERY_ONE_URL.'assets/justified-gallery/jquery.justifiedGallery.min.js',  array( 'jquery' ) );
            wp_enqueue_style( 'jquery.justifiedGallery', GALLERY_ONE_URL.'assets/justified-gallery/justifiedGallery.min.css' );
            wp_enqueue_script( 'sg-admin', GALLERY_ONE_URL.'assets/admin/admin.js',  array( 'jquery' ) );
            // Css
            wp_enqueue_style( 'media-views' );
            wp_enqueue_style( 'sg-icon', GALLERY_ONE_URL.'assets/fontello/css/sg.css' );
            wp_enqueue_style( 'sg-admin', GALLERY_ONE_URL.'assets/admin/admin.css' );

            $js_settings = array(
                'page_url'          => admin_url('admin.php?page=social-gallery&delete=1'),
                'delete_album_url'  => admin_url('admin.php?page=social-gallery&gallery_one_delete_albums='),
                'edit_album_url'    => admin_url('admin.php?page=social-gallery&edit_album='),
                'bulk_select'       => __( 'Bulk Select', 'gallery-one' ),
                'cancel_select'     => __( 'Cancel Select', 'gallery-one' ),
                'confirm_delete'    => __( 'Are you sure want to delete selected ?', 'gallery-one' ),
                'api'               => GalleryOne::get_social_api()
            );

            wp_localize_script( 'jquery', 'S_GALLERY', apply_filters( 'gallery_one_admin_js_settings', $js_settings ) );

        }
    }
    
}

new GalleryOne_Admin();