<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

$new = 'wp';
if ( isset( $_REQUEST['new']  ) ){
    $new = sanitize_title( $_REQUEST['new']  );
}

if ( ! in_array( $new,  array( 'wp', 'facebook', 'flickr', 'instagram' ) ) ){
    $new = 'wp';
}

$album_data  = '';
$type = $new;
$edit_album =  get_the_ID();
if ( ! isset( $edit_album ) ) {
    $edit_album = 0;
}

$title = '';

if ( $edit_album ) {
    $media = new Gallery_One_Media_Data( $edit_album );
    $album_data =  $media->get_data();
    if ( ! is_array( $album_data ) ) {
        $album_data  = '';
    } else {
        $album_data =  json_encode( $album_data );
    }
    $type = get_post_meta( $edit_album, '_album_type', true );

    $title = get_the_title( $edit_album );
}
?>
<div class="s-form-edit-media postbox ">
    <input type="hidden" autocomplete="off" id="album_social_id"  name="album_social_id" value="<?php echo esc_attr( $new ); ?>">
    <input type="hidden" autocomplete="off" id="album_data" name="album_data" value="<?php echo esc_attr( $album_data ); ?>">
    <?php wp_nonce_field( 'gallery_one_edit', 'gallery_one_edit' ); ?>
    <div class="s-edit-form-bar">
        <button type="button" class="button media-button select-mode-toggle-button"><?php esc_html_e( 'Bulk Select', 'gallery-one' ); ?></button>
        <button type="button" class="button media-button button-primary button-large hidden delete-selected-button" disabled="disabled"><?php esc_html_e( 'Delete Selected', 'gallery-one' ); ?></button>

        <span class="sg-wp-add-media">
            <input type="button" value="<?php  esc_attr_e( 'Insert images', 'gallery-one' ); ?>" class="album_wp_add_images button button-secondary">
        </span>

        <div class="media-toolbar-primary search-form">
            <input  type="search" title="<?php esc_attr_e( 'Facebook, Flickr album or Image url here', 'gallery-one' ); ?>" placeholder="<?php esc_attr_e( 'Load your ablumb, image...', 'gallery-one' ); ?>" class="social-media-url">
            <input type="button" class="social-media-load button button-secondary" value="<?php esc_attr_e( 'Load', 'gallery-one' ); ?>">
        </div>

    </div>

    <ul id="s-album-items" class="gallery-one-gird attachments clearafter" data-columns="6"></ul>
</div>



<script type="text/html" id="gallery-one-item-tpl">
    <li tabindex="0" data-id="{{ data.id }}" data-social="{{ data.social }}" class="attachment">
        <div class="attachment-preview landscape">
            <div class="thumbnail">
                <div class="centered">
                    <img alt="" src="{{ data.src }}">
                </div>
            </div>
        </div>
        <button tabindex="0" class="button-link check" type="button"><span class="media-modal-icon"></span><span class="screen-reader-text"><?php esc_html_e( 'Deselect', 'textmomain' ); ?></span></button>
    </li>
</script>

<!-- EDIT MODAL -->
<script type="text/html" id="gallery-one-item-edit-info-tpl">
    <div class="sg-modal media-modal wp-core-ui">
        <button class="button-link media-modal-close" type="button"><span class="media-modal-icon"><span class="screen-reader-text">Close media panel</span></span></button>
        <div class="media-modal-content">
            <div class="edit-attachment-frame mode-select hide-menu hide-router">
                <div class="edit-media-header">
                    <button class="left dashicons"><span class="screen-reader-text"><?php esc_html_e( 'Edit previous media item', 'gallery-one' ); ?></span></button>
                    <button class="right dashicons"><span class="screen-reader-text"><?php echo esc_html_e( 'Edit next media item', 'gallery-one' ); ?></span></button>
                </div>
                <div class="media-frame-title">
                    <h1><?php esc_html_e( 'Media Details', 'gallery-one' ); ?></h1></div>
                <div class="media-frame-content">
                    <div tabindex="0" data-id="235" class="attachment-details save-ready">
                        <div class="attachment-media-view landscape">
                            <div class="thumbnail thumbnail-image">
                                <img alt="" draggable="false" src="{{ data.url }}" class="details-image">

                                <!--
                                <div class="attachment-actions">
                                    <button class="button edit-attachment" type="button"><?php esc_html_e( 'Import' ,'gallery-one' ); ?></button>
                                </div>
                                -->
                            </div>
                        </div>
                        <div class="attachment-info">

                            <span class="settings-save-status">
                                 <span class="spinner"></span>
                                <span class="saved"><?php esc_html_e( 'Saved.' ,'gallery-one' ); ?></span>
                             </span>

                            <div class="settings">
                                <label  class="setting">
                                    <span class="name"><?php esc_html_e( 'URL' ,'gallery-one' ); ?></span>
                                    <input type="text" readonly="" value="{{ data.url }}">
                                </label>

                                <label  class="setting">
                                    <span class="name"><?php esc_html_e( 'Title' ,'gallery-one' ); ?></span>
                                    <input data-setting="title" type="text" value="{{ data.title }}">
                                </label>

                                <label class="setting">
                                    <span  class="name"><?php esc_html_e( 'Caption' ,'gallery-one' ); ?></span>
                                    <textarea data-setting="caption">{{ data.caption }}</textarea>
                                </label>

                                <label class="setting">
                                    <span class="name"><?php esc_html_e( 'Description' ,'gallery-one' ); ?></span>
                                    <textarea data-setting="description" >{{ data.description }}</textarea>
                                </label>

                                <label  class="setting">
                                    <span class="name"><?php esc_html_e( 'Link' ,'gallery-one' ); ?></span>
                                    <input data-setting="link" type="text" value="{{ data.link }}">
                                </label>

                                <label  class="setting">
                                    <span class="name"><?php esc_html_e( 'Tags' ,'gallery-one' ); ?></span>
                                    <input data-setting="tags" type="text" value="{{ data.tags }}">
                                </label>

                                <?php do_action( 'more_edit_media_fields' ); ?>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</script>

