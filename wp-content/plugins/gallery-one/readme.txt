=== Plugin Name ===
Contributors: shrimp2t
Donate link: http://shrimp2t.com/gallery-one/
Tags: image, images, gallery, galleries, facebook, flickr, image gallery, photo, photos, photo gallery, photogallery, responsive, responsive gallery, responsive image gallery, album, albums, photo album, photo albums
Requires at least: 4.5
Tested up to: 4.5
Stable tag: 4.5
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A cool responsive gallery plugin with beautifully views.

== Description ==

See demo: http://shrimp2t.com/gallery-one/

https://www.youtube.com/watch?v=MpicnbcGsUo

= Features =

*   Fully responsive, Touch enabled
*   **Unlimited albums**
*   **Unlimited images**
*   Carousel
*   Gird
*   Justified
*   Masonry
*   Slideshow
*   Blog style (comming soon )
*   JustifiedGallery Light box
*   Load Facebook album images
*   Load Flickr album images
*   Add image from url
*   Shortcode creator

= Load Facebook Album =
Just paste your album url, example:

`
https://www.facebook.com/BillGates/photos/?tab=album&album_id=10153110017351961

`
Note: Your album status must be public to load.


= Load Flickr Album =
Just paste your album url, example:

`
https://www.flickr.com/photos/gianstefanofontana/albums/72157649693279051

`
Note: Your album status must be public to load.


= Adding your own view in your theme =

* Create a folder `gallery-one` on your theme.
* Inside folder which created add a file and name `view.php`
* [Optional] Inside folder which created add a file and name `config.php`

Example file `view.php`:

`
<div class="my-view">
<?php
 var_dump( $this->settings ); /* You config data in file config.php
 var_dump( $this->media->get_data() ); // Gallery items data
 ?>
</div>
`

Example file `config.php`:

`$config = array(
    'name' => __( 'Justified', 'gallery-one' ), // view name
    'js' => 'js/js.js',
    'css' => 'css/css.css',
    'view_settings' => array(
        array(
            'id' => 'margins',
            'default' => '10',
            'label' => __( 'Margins', 'gallery-one' ),
            'type' => 'text'
        ),
        array(
            'id'        => 'lightbox',
            'default'   => '1',
            'label'     => __( 'Lightbox', 'gallery-one' ),
            'type'      => 'checkbox'
        ),

    ),
);
`


= Adding your own view in your plugin =

* Create new folder in your plugin, example: `my-cool-views`.
* Add add new view folder example: `my-cool-views/full-screen`.
* Add `view.php` file for you view `my-cool-views/full-screen/view.php`.
* [Optional] Add `config.php` file for you view `my-cool-views/full-screen/config.php`.
* Add your your views folder to view loader:
`
 add_filter( 'gallery_one_get_template_folders', 'my_cool_views_path');

 function my_cool_views_path( $view_paths ){
    $view_paths['my_cool_view'] = PATH_TO_MY_PLUGIN.'/my-cool-views';
    return $view_paths;
 }
`

= Config Parameters =
name: (string) Name of your view.

css: (string/array) CSS files will enqueue when this view load.

js: (string/array) JS files will enqueue when this view load.

view_settings: (array) list field settings for your view.

**view_settings** Parameters:

* id: Id of setting field.
* label: Label of setting files.
* default: Default value.
* type: Field type: text|select|checkbox|textarea.
* option: For field type select (array).
* desc: Field description.



== Installation ==

1. Upload `gallery-one` folder to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3.  Use the Galleries Name screen to add gallery

== Screenshots ==
1. Justified
2. Slider
3. Masonry
4. Carousel
5. Slider
6. Lightbox
7. Admin galleries
8. Editing gallery
8. Editing image info
10. Shortcode creator



== Changelog ==

= 1.0.0 =
* Release

