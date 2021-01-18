/**
 * Created by truongsa on 4/27/16.
 */
function insertDownload() {
    // Send the shortcode to the editor
    window.send_to_editor('[gallery_one id="447" view="gird" settings="a,b,c"]');
    window.gallery_one_shortcode_editing = false;
}


(function($,undefined){
    '$:nomunge'; // Used by YUI compressor.

    $.fn.serializeObject = function(){
        var obj = {};

        $.each( this.serializeArray(), function(i,o){
            var n = o.name,
                v = o.value;

            obj[n] = obj[n] === undefined ? v
                : $.isArray( obj[n] ) ? obj[n].concat( v )
                : [ obj[n], v ];
        });

        return obj;
    };

})(jQuery);

// console.log( GalleryOne_Editor );

jQuery( document ).ready( function( $ ){
    var go_album_selected_id = 0;

    var shortcode_modal_template =  function(){
        /**
         * Function that loads the Mustache template
         */
        var repeaterTemplate = _.memoize(function () {
            var compiled,
            /*
             * Underscore's default ERB-style templates are incompatible with PHP
             * when asp_tags is enabled, so WordPress uses Mustache-inspired templating syntax.
             *
             * @see trac ticket #22344.
             */
                options = {
                    evaluate: /<#([\s\S]+?)#>/g,
                    interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
                    escape: /\{\{([^\}]+?)\}\}(?!\})/g,
                    variable: 'data'
                };

            return function ( data ) {
                compiled = _.template( jQuery( '#gallery-one-shortcode-tpl').html(), null, options);
                return compiled( data );
            };
        });

       return repeaterTemplate();
    };


    var shortcode_view_template =  function(){
        /**
         * Function that loads the Mustache template
         */
        var repeaterTemplate = _.memoize(function () {
            var compiled,
            /*
             * Underscore's default ERB-style templates are incompatible with PHP
             * when asp_tags is enabled, so WordPress uses Mustache-inspired templating syntax.
             *
             * @see trac ticket #22344.
             */
                options = {
                    evaluate: /<#([\s\S]+?)#>/g,
                    interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
                    escape: /\{\{([^\}]+?)\}\}(?!\})/g,
                    variable: 'data'
                };

            return function ( data ) {
                compiled = _.template( jQuery( '#gallery-one-shortcode-view-tpl').html(), null, options);
                return compiled( data );
            };
        });

        return repeaterTemplate();
    };


    var shortcode_album_info_template =  function(){
        /**
         * Function that loads the Mustache template
         */
        var repeaterTemplate = _.memoize(function () {
            var compiled,
            /*
             * Underscore's default ERB-style templates are incompatible with PHP
             * when asp_tags is enabled, so WordPress uses Mustache-inspired templating syntax.
             *
             * @see trac ticket #22344.
             */
                options = {
                    evaluate: /<#([\s\S]+?)#>/g,
                    interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
                    escape: /\{\{([^\}]+?)\}\}(?!\})/g,
                    variable: 'data'
                };

            return function ( data ) {
                compiled = _.template( jQuery( '#gallery-one-album-info-tpl').html(), null, options);
                return compiled( data );
            };
        });

        return repeaterTemplate();
    };

    var shortcode_modal = shortcode_modal_template();
    var shortcode_view  = shortcode_view_template();
    var shortcode_info  = shortcode_album_info_template();

    $( 'body').on( 'click', '.insert-gallery-one', function( e ){
        e.preventDefault();
        var id = $( this).attr( 'data-editor' ) || '';
        if ( id ) {
            window.wpActiveEditor = id;
        }

        $( '.sg-modal, .s-shortcode-modal').remove( );
        $( '.media-modal-backdrop').remove();
        $( 'body').append( '<div class="media-modal-backdrop"></div>');
        $( '.media-modal-backdrop').show();

        var settings = {};

        if ( window.gallery_one_shortcode_editing ) {
            if ( window.gallery_one_shortcode_editing.named ) {
                settings = window.gallery_one_shortcode_editing.named;
            }

            if ( window.gallery_one_shortcode_editing.named.id ) {
                go_album_selected_id = window.gallery_one_shortcode_editing.named.id;
            }
        }

        settings = $.extend( {}, {
            id: '',
            view: '',
            settings: ''
        }, settings );

        var modal_tpl =  shortcode_modal( settings );
        modal_tpl = $( modal_tpl );

        // Open modal
        $( 'body').append( modal_tpl );
        // set modal width
        $( window ).resize( function(){
            var w = $( window ).width();

            var max_width = 700, pos;
            if (  w <= max_width + 20 ) {
                max_width = w - 20;
            }
            modal_tpl.width( max_width );
            pos = ( w - max_width ) / 2;
            modal_tpl.css( { 'left': pos+'px', 'right': pos+'px' } );

            modal_tpl.focus();
            modal_tpl.find( 'select.gallery-view-type').trigger( 'change' );
        } );
        $( window ).trigger( 'resize' );

        if ( go_album_selected_id > 0 ) {

            var info_data =  modal_tpl.find( '.attachments li[data-id="'+go_album_selected_id+'"]' ).attr( 'data-info' ) || {};
            try {
                info_data = JSON.parse(info_data);
                var info = shortcode_info(info_data);
                modal_tpl.find('.attachment-info').html(info);

                modal_tpl.find('.details-no-select-info').hide();
                modal_tpl.find('.details-selected-info').show();
                modal_tpl.find('.btn-insert-gallery-shortcode').show();
            } catch ( e ) {
                
            }
        } else {
            modal_tpl.find( '.details-no-select-info').show();
            modal_tpl.find( '.details-selected-info').hide();
            modal_tpl.find( '.btn-insert-gallery-shortcode').hide();
        }

    } );

    // Remove Modal
    var close_shortcode_modal = function(){
        $( '.sg-modal, .s-shortcode-modal').remove( );
        $( '.media-modal-backdrop').hide();
        window.gallery_one_shortcode_editing = false;
        go_album_selected_id = 0;
    };

    $( window ).on( 'keydown', function( e ) {
        if ( e.which === 27 ) {
            close_shortcode_modal();
        }
    } );

    $( 'body' ).on( 'click', '.media-modal-close, .media-modal-backdrop', function( e ){
        close_shortcode_modal();
    } ) ;

    // select item
    $( 'body' ).on( 'click', '.s-shortcode-modal .attachments li', function( e ){
        e.preventDefault();
        var modal = $( this ).closest( '.s-shortcode-modal');
        $( this ).closest( '.attachments').find( 'li').removeClass( 'selected details' );
        modal.find( '.album-cover').html( '' );
        go_album_selected_id = 0;

        modal.find( '.details-no-select-info').show();
        modal.find( '.details-selected-info').hide();

        if ( $( this).hasClass( 'selected' ) ) {
            $( this ).removeClass( 'selected details' );
        } else {
            $( this ).addClass( 'selected details' );
            var img = $( this ).find( '.thumbnail .centered').html( );
            modal.find( '.album-cover').html( img );
            go_album_selected_id = $( this).attr( 'data-id' ) || 0;
            var info_data =  $( this).attr( 'data-info' ) || {};
            info_data = JSON.parse( info_data );
            var info = shortcode_info( info_data );
            modal.find( '.attachment-info').html( info );
        }


        if ( go_album_selected_id > 0 ) {
            modal.find( '.details-no-select-info').hide();
            modal.find( '.details-selected-info').show();
            modal.find( '.btn-insert-gallery-shortcode').show();
        } else {
            modal.find( '.btn-insert-gallery-shortcode').hide();
        }


    } );

    function generate_gallery_shortcode(){
        var view = $( '.gallery-view-type').val() || '';
        var id = go_album_selected_id;
        var settings = $( 'form.shortcode-settings' ).serializeObject();
        var config = {};
        if ( typeof GalleryOne_Editor.views[ view ] !== "undefined" ) {
            config = GalleryOne_Editor.views[ view ].config.view_settings;
        }

        $.each( config, function( k, item ) {
            if ( typeof settings[ item.id ] === "undefined" ) {
                settings[ item.id ] = '';
            }
        } );

        var _s = '[gallery_one';
        if ( id ) {
            _s += ' id="'+window.encodeURIComponent( id )+'"';
        }
        if ( view ) {
            _s += ' view="'+window.encodeURIComponent( view )+'"';
        }

        if ( settings ) {
            _s += ' settings="'+window.encodeURIComponent( JSON.stringify( settings ) )+'"';
        }

        _s += ']';
        return _s;
    }


    $( 'body' ).on( 'change', 'select.gallery-view-type', function(){
        var v = $( this).val();
        var settings = {};
        $( '.shortcode-settings .view-configs').html ( '' );

        if ( v !== '' ) {
            if ( typeof GalleryOne_Editor.views[v] !== "undefined" ) {
                settings = GalleryOne_Editor.views[v].config.view_settings;
                var settings_value = {};

                if ( window.gallery_one_shortcode_editing ) {
                    if ( window.gallery_one_shortcode_editing.named.settings ) {
                        settings_value = JSON.parse( window.decodeURIComponent( window.gallery_one_shortcode_editing.named.settings ) );
                    }
                }

                if ( typeof settings === 'object' ) {
                    _.map( settings, function( _item, _key ) {
                        if ( typeof settings_value[ _item.id ]  ) {
                            settings[ _key ].value = settings_value[ _item.id ];
                        } else {
                            if ( typeof _item.default !== 'undefined' ) {
                                settings[ _key ].value = _item.default;
                            } else {
                                settings[ _key ].value = '';
                            }
                        }
                    } );
                }

                var html = shortcode_view( settings );
                $( '.shortcode-settings .view-configs').html ( html );
            }
        }
    } );

    $( 'body' ).on( 'change', '.shortcode-settings .view-configs input, .shortcode-settings .view-configs select, .shortcode-settings .view-configs textarea', function(){

    } );

    $( 'body').on( 'click', '.btn-insert-gallery-shortcode', function( e ){
        e.preventDefault();
        var s = generate_gallery_shortcode();
        window.send_to_editor( s );
        close_shortcode_modal();
        window.gallery_one_shortcode_editing = false;
    } );


} );