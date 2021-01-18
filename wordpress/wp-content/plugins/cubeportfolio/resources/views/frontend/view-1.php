<?php
/**
 * @var gallery_data string
 * @var images array
 */

$page_options = array(
	"nav_type" => $options["pagination_nav_type_tiles"],
	"nav_text" => $options["pagination_nav_text_tiles"],
	"nearby" => $options["pagination_nearby_pages_tiles"]
);

$gallery_options = array();
$gallery_options = NextcodeGallery()->settings->getOptionsByView("tiles");
$json = json_encode($gallery_options);


wp_enqueue_script("nextcodegallerytiles", \NextcodeGallery()->pluginUrl() . "/resources/assets/js/frontend/ug-theme-tiles.js", array('jquery'), false, true);
?>

<div id="nextcode_gallerycontainer_<?= $gallery_data->id_gallery ?>" style="display:none;" data-view="tiles">
	<?php foreach ($images as $key => $val):
		$video_id = ($val->type == "image") ? "" : "data-videoid = '" . $val->video_id . "'";
		?>
        <a href="<?= $val->link ?>">
            <img alt="<?= $val->name ?>"
                 data-type="<?= $val->type ?>"
                 src="<?= $val->url ?>"
                 data-image="<?= $val->url ?>"
                 data-description="<?= $val->description ?>"
				<?= $video_id ?>
                 style="display:block">
        </a>
	<?php endforeach; ?>
</div>
<?php
if ($gallery_data->display_type == 2) {
	\NextcodeGallery\Helpers\View::render('frontend/pagination.php', compact('gallery_data', 'images', 'page_options'));
} elseif ($gallery_data->display_type == 1) {
	?>
    <div class="nextcode_galleryload_more_space">
        <button data-id="<?= $gallery_data->id_gallery ?>" data-count="<?= $gallery_data->items_per_page ?>"
                class="nextcode_galleryload_more"><?= $options["load_more_text_tiles"] ?>
        </button>
		<?php if ($options["load_more_loader_tiles"] == 1): ?>
            <ul class="nextcode_galleryloading nextcode_galleryreversed" style="display: none;">
                <li></li>
                <li></li>
                <li></li>
            </ul>
		<?php endif; ?>
    </div>
	<?php
} ?>

<script type="text/javascript">
    document.addEventListener("DOMContentLoaded",function () {
        var container = jQuery("#nextcode_gallerycontainer_<?= $gallery_data->id_gallery ?>");
        container.unitegallery(<?= $json ?>);
    });
</script>
