<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

$is_thumb = isset( $this->settings['thumbnail'] ) && $this->settings['thumbnail']  ? true : false;
$thumb_slider = array();
$full_size =  array(
    'wp' => 'large',
    'facebook' => '1,0,2',
    'flickr' => 'b,c,z,m',
);

$thumb_size =  array(
    'wp' => 'thumbnail',
    'facebook' => '480,540,600',
    'flickr' => 'n,t,s',
);

?>
<div class="go-ls-carousel" data-settings="<?php echo esc_attr( json_encode( $this->settings ) ); ?>">
    <!-- Place somewhere in the <body> of your page -->
    <ul class="go-ls-carousel-slides">
        <?php
        foreach ( $this->media->get_data() as $k => $item ){
            $link =  $this->media->get_item( $k )->get( 'link' );
            $src = $this->media->get_item( $k )->get_image_url( $full_size );
            $thumb = $this->media->get_item( $k )->get_image_url( $thumb_size );
            if ( ! $thumb ) {
                $thumb =  $src;
            }
            ?>
            <li data-thumb="<?php echo esc_url( $thumb ); ?>" data-src="<?php echo esc_url( $src ); ?>">
                <img src="<?php echo esc_url( $thumb ); ?>" alt="" />
            </li>
            <?php
        }
        ?>
    </ul>
</div>
