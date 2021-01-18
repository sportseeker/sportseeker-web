/**
 * Created by truongsa on 4/23/16.
 */

 function s_to_number( string ) {
    if ( typeof string === 'number' ) {
        return string;
    }
    var n  = string.match(/\d+$/);
    if ( n ) {
        return parseFloat( n[0] );
    } else {
        return 0;
    }
}

function s_to_bool( v ) {
    if (  typeof v === 'boolean' ){
        return v;
    }

    if (  typeof v === 'number' ){
        return v === 0  ? false : true;
    }

    if (  typeof v === 'string' ){
        if ( v === 'true' || v === '1' ) {
            return true;
        } else {
            return false;
        }
    }

    return false;
}



jQuery( document ).ready( function( $ ){

    // Loaf view style
    if (  typeof window.gallery_one_load_style !== "undefined" ) {
        $.each( window.gallery_one_load_style, function( key, $files ) {
            $.each( $files, function( _k, _f ){
                $('<link>')
                    .appendTo('head')
                    .attr({type : 'text/css', rel : 'stylesheet'})
                    .attr('id', 'gallery-one-view-'+key+'-'+  _k )
                    .attr('href', _f );
            } ) ;

        });

        $( 'body' ).trigger( 'gallery_one_style_loaded' );
    }

    //$(".s-justified-view").justifiedGallery();
    $(".gallery-one[data-lightbox='1']").lightGallery( {
        selector: 'a',
    } );


} );