<?php

namespace NextcodeGallery\Controllers\Admin;

use NextcodeGallery\Helpers\View;

class ShortcodeController
{

    public static function showInlinePopup()
    {
        View::render('admin/inline-popup.php');
    }

    public static function showEditorMediaButton($context)
    {
        $img = untrailingslashit(\NextcodeGallery()->pluginUrl()) . "/resources/assets/images/icons/logo.png";
        $container_id = 'nextcodegallery';
        $title = __('Select NextCode Gallery to insert into post', NEXTCODEGALLERY_TEXT_DOMAIN);
        $button_text = __('NextCode Gallery', NEXTCODEGALLERY_TEXT_DOMAIN);
        $context .= '<a class="button thickbox" title="' . $title . '"    href="#TB_inline&inlineId=' . $container_id . '&width=800&height=640">
		<span class="wp-media-buttons-icon" style="background: url(' . $img . '); background-repeat: no-repeat; background-position: left bottom;background-size: 18px 18px;"></span>' . $button_text . '</a>';

        return $context;
    }

}
