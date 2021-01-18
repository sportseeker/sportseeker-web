<?php 

/*
Plugin Name: Simple Responsive Image Slider
Author: Md. Mahfuzur Rahman
Author Uri: http://www.jeweltheme.com
Description:This is a very simple responsive image Slider plugin.Usage of this plugin is very simple. 
Version:1.0
*/

function sris_files(){
          wp_enqueue_style('slider-css',PLUGINS_URL('assets/css/slider.css',__FILE__));
          
          wp_enqueue_script('slider-js',PLUGINS_URL('assets/js/slider.js',__FILE__),array('jquery'));
          wp_enqueue_script('custom-js',PLUGINS_URL('assets/js/custom.js',__FILE__),array('jquery'));

        }
    add_action('wp_enqueue_scripts','sris_files');

   function sris_slider() {
      $labels = array(
          'name'                  =>   __( 'Responsive Slider' ),
          'singular_name'         =>   __( 'Responsive Slider' ),
          'add_new_item'          =>   __( 'Add New Slider' ),
          'all_items'             =>   __( 'All Sliders' ),
          'edit_item'             =>   __( 'Edit Slider'),
          'new_item'              =>   __( 'New Slider' ),
          'view_item'             =>   __( 'View Slider'),
          'not_found'             =>   __( 'No Slider Found' ),
          'not_found_in_trash'    =>   __( 'No Slider Found in Trash' )
      );

      $supports = array(
          'title',
          'thumbnail'
      );

      $args = array(
          'label'         =>   __( 'Responsive Slider'),
          'labels'        =>   $labels,
          'description'   =>   __( 'A list of upcoming Sliders' ),
          'public'        =>   true,
          'show_in_menu'  =>   true,
          'show_in_nav_menus' =>true,
          'menu_icon'     =>   'dashicons-format-gallery',
          'has_archive'   =>   true,
         // 'rewrite'       =>   true,
          'supports'      =>   $supports,
          'has_archive' => true
         //'taxonomies' => array('category', 'post_tag') 


      );

      register_post_type( 'slider', $args );
      }
      add_action( 'init', 'sris_slider' );

  
      
        


        // Add Shortcode
        function sris_slider_shortcode() {
                  global $post;
                  $slider = new wp_Query(array(
                  'post_type'=>'slider'
                )); ?>
                  <ul class="res_slider">
                 <?php while( $slider->have_posts() ) : $slider->the_post(); ?>
                    
                      <li><?php the_post_thumbnail('large'); ?></li>
                    
                  <?php
                  endwhile; ?>
                </ul>
       <?php }
        add_shortcode( 'responsive-slider', 'sris_slider_shortcode' );
        

?>


 

