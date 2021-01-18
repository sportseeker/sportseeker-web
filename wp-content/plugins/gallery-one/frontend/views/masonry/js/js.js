/**
 * Created by truongsa on 5/6/16.
 */

jQuery( document ).ready( function( $ ){

    function _init (){
        $(".s-masonry-view").each( function(){
            var m = $( this );
            var gutter = m.data( 'gutter' ) || 10;
            var columns = m.data( 'columns' ) ||  4;
            var m_columns = m.data( 'm-columns' ) ||  4;
            var s_columns = m.data( 's-columns' ) ||  1;
            gutter = s_to_number( gutter );
            columns = s_to_number( columns );
            m_columns = s_to_number( m_columns );
            s_columns = s_to_number( s_columns );
            if ( m_columns > columns ) {
                m_columns = columns;
            }

            var w = $( window ).width();

            if ( s_columns > m_columns ) {
                s_columns = m_columns;
            }

            if ( w <= GalleryOne_Settings.tablet ) {
                columns = m_columns;
            }

            if ( w <= GalleryOne_Settings.phone ) {
                columns = s_columns;
            }

            //gutter = gutter / 2;

            m.parent( ).css( { 'margin-left': - gutter, 'margin-right':  - gutter } );
            m.find( '.media-item' ).css( { 'width': ( 100 / columns  )+'%', 'float': 'left', 'padding': 0 } );
            m.find( '.media-item .thumb' ).css( { 'padding': gutter / 2 } );
            m.isotope({
                // options
                itemSelector: '.media-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.media-item'
                }
            });

        } );
    }

    _init();
    $( window ).resize( function(){
        _init();
    } )

} );