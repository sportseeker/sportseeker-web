/**
 * Created by truongsa on 5/6/16.
 */

jQuery( document ).ready( function( $ ){
    $(".s-justified-view").each( function(){
        var j = $( this );
        var rh = j.data( 'rowheight' ) || 120;
        if ( rh <= 0 || rh == '' ) {
            rh = 120;
        }
        j.justifiedGallery( {
            margins: j.data( 'margins' ) || 0,
            rowHeight: rh,
            lastRow: 'justify'
        } );
    } );

} );