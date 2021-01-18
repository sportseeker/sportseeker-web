<?php
/**
 * @var $widget \NextcodeGallery\Controllers\Widgets\GalleryWidgetController
 * @var $title
 * @var $formInstance
 *
 */
?>
<p>

<p>
    <label for="<?php echo $widget->get_field_id('title'); ?>"><?php _e('Title:'); ?></label>
    <input class="widefat" id="<?php echo $widget->get_field_id('title'); ?>"
           name="<?php echo $widget->get_field_name('title'); ?>" type="text"
           value="<?php echo esc_attr($title); ?>"/>
</p>
<label for="<?php echo $widget->get_field_id('nextcode_gallery_id'); ?>"><?php _e('Select Gallery:', NEXTCODEGALLERY_TEXT_DOMAIN); ?></label>
<select id="<?php echo $widget->get_field_id('nextcode_gallery_id'); ?>"
        name="<?php echo $widget->get_field_name('nextcode_gallery_id'); ?>">
    <?php
    $galleries = \NextcodeGallery\Models\Gallery::get();

    if ($galleries) {
        foreach ($galleries as $gallery) {
            ?>
            <option <?php echo selected($galleryInstance, $gallery->getId()); ?>
                    value="<?php echo $gallery->getId(); ?>">
                <?php echo $gallery->getName(); ?>
            </option>
            <?php
        }
    }
    ?>
</select>

</p>
