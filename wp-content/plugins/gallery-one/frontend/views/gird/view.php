<?php
/**
 * @param GalleryOne_Shortcode object $shortcode
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

?>
<div class="gallery-one-wrapper s-<?php echo esc_attr( $shortcode->view ); ?>-view-wrapper"">
    <div class="gallery-one s-<?php echo esc_attr( $shortcode->view ); ?>-view <?php echo esc_attr_e( $shortcode->layout_classes() ) ?>" <?php echo $shortcode->settings_attrs(); ?>>
        <?php
        $full_size =  array(
            'wp' => 'full',
            'facebook' => '0,1,2,3,4',
            'flickr' => 'b,c,z,m',
        );
        foreach ( $shortcode->media->get_data() as $k => $item ){
            ?>
            <div class="media-item">
                <div class="thumb">
                    <a href="<?php echo esc_url( $shortcode->media->get_item( $k )->get_image_url( $full_size ) ); ?>"><img src="<?php echo esc_url( $shortcode->media->get_item( $k )->get_image_url() ); ?>" alt=""></a>
                </div>
            </div>
            <?php
        }
        ?>
    </div>
</div>