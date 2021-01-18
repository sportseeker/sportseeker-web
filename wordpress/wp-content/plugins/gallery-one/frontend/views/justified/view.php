<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

$full_size =  array(
    'wp' => 'full',
    'facebook' => '1,2,3,0,4',
    'flickr' => 'b,c,z,m',
);
$thumb_size =  array(
    'wp' => 'thumbnail',
    'facebook' => '480,540,600',
    'flickr' => 'n,t,s',
);

?>
<div class="gallery-one s-<?php echo esc_attr( $shortcode->view ); ?>-view" <?php echo $shortcode->settings_attrs(); ?>>
    <?php
    /**
     * @param object $this GalleryOne_Shortcode
     */
    foreach ( $this->media->get_data() as $k => $item ){
        $src = $this->media->get_item( $k )->get_image_url( $full_size );
        $thumb = $this->media->get_item( $k )->get_image_url( $thumb_size );
        if ( ! $thumb ) {
            $thumb =  $src;
        }
        ?>
        <div class="media-item">
            <div class="thumb">
                <a href="<?php echo esc_url( $src ); ?>"><img src="<?php echo esc_url( $thumb ); ?>" alt=""></a>
            </div>
        </div>
        <?php
    }
    ?>
</div>