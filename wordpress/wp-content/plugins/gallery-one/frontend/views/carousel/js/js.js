jQuery( document ).ready( function( $ ){

    $( '.go-ls-carousel' ).each( function( index ){
        var s = $( this );
        var data = s.data( 'settings' ) || {};
        data = $.extend( {}, {
            pause:  "",
            speed:  '',
            loop: '',
            auto: '',
            enableDrag: '',
            pager: '',
            lightbox: '',
        }, data );

        s.find( '.go-ls-carousel-slides' ).lightSlider({
            pause: s_to_number( data.pause ),
            speed: s_to_number( data.speed ),
            loop: s_to_bool( data.loop ),
            auto: s_to_bool( data.auto ),
            enableDrag: s_to_bool( data.enableDrag ),
            pager: s_to_bool( data.pager ),
            slideMargin: 10,
            item: 4,

            pauseOnHover: true,
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