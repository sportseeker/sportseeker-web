jQuery( document ).ready( function( $ ){


    $( '.go-ls-slider' ).each( function( index ){
        var s = $( this );
        var data = s.data( 'settings' ) || {};
        data = $.extend( {}, {
            pause:  "",
            speed:  '',
            gallery:'',
            loop: '',
            auto: '',
            enableDrag: '',
            pager: '',
            thumbItem: '',
            lightbox: '',
        }, data );

        s.find( '.go-ls-slides' ).lightSlider({
            pause: s_to_number( data.pause ),
            speed: s_to_number( data.speed ),
            gallery: s_to_bool( data.gallery ),
            thumbItem: s_to_number( data.thumbItem ),
            loop: s_to_bool( data.loop ),
            auto: s_to_bool( data.auto ),
            enableDrag: s_to_bool( data.enableDrag ),
            pager: s_to_bool( data.pager ),

            item: 1,
            pauseOnHover: true,
            slideMargin: 0,
            //vThumbWidth: 80,
            //vertical: false,
            //currentPagerPosition:'middle',
            //verticalHeight:295,
            onSliderLoad: function(el) {
                if ( s_to_bool( data.lightbox ) ) {
                    el.lightGallery({
                        selector: '.lslide'
                    });
                }
            }
        });

        
    } );

    
} );