/* global tinymce */
(function() {
    tinymce.PluginManager.add('galleryone', function (editor) {

        window.gallery_one_shortcode_editing = false;

        function replaceGalleryShortcodes( content ) {
            return content.replace(/(?:<p(?: [^>]+)?>)*\[gallery_one([^\]]*)\](?:<\/p>)*/ig, function (match) {
                return html('gallery_one', match);
            });
        }

        function html( cls, data ) {
            data = data.replace(/<br[^>]*>/g, '').replace(/^<p>/, '').replace(/<\/p>$/, '');
            data = window.encodeURIComponent(data);
            return '<div contenteditable="false" class="gallery-one mceItem mceNonEditable ' + cls + '" ' +
                'data-gallery-one="' + data + '" data-mce-resize="false" data-mce-placeholder="1">' +
                '  <div class="gallery-one-tinymce-toolbar">' +
                '    <div class="dashicons dashicons-edit gallery-one-edit">&nbsp;</div>' +
                '    <div class="dashicons dashicons-no-alt gallery-one-delete">&nbsp;</div>' +
                '  </div>' +
                '  <div class="gallery-one-preview"><div class="dashicons dashicons-images-alt">&nbsp;</div>' +
                '  </div>' +
                '</div>';
        }

        function editMedia(node) {
            var data;

            data = window.decodeURIComponent( node.attr('data-gallery-one') || '' );
            var shortcode = wp.shortcode.next('gallery_one', data);
            if (shortcode) {
                window.gallery_one_shortcode_editing = shortcode.shortcode.attrs;
            } else {
                window.gallery_one_shortcode_editing = false;
            }

            // open settings
            jQuery('.insert-gallery-one').trigger('click');
        }

        // Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('...');
        editor.addCommand('gallery_one', function () {
            //editMedia(editor.selection.getNode());
        });

        editor.on('mouseup', function ( event ) {
            var dom = editor.dom,
                node = event.target;

            var t = jQuery( event.target ), p;
            if ( t.is( 'div.gallery-one' ) ) {
                p = t;
            } else {
                p = t.closest( 'div.gallery-one' );
            }
            var body = jQuery( dom.doc.activeElement );

            function unselect() {
                body.find( 'div.gallery-one' ).removeClass( 'gallery-one-selected' );
            }
            if ( p.length > 0 ) {
                if ( t.is( '.gallery-one-delete' ) ) {
                    p.remove();
                } else if ( t.is( '.gallery-one-edit' ) ) {
                    editMedia( p );
                } else {
                    if ( ! p.hasClass( 'gallery-one-selected' ) ) {
                        unselect();
                        p.addClass( 'gallery-one-selected' );
                    }
                }
            } else {
                unselect();
            }

        });

        // Display gallery, audio or video instead of img in the element path
        editor.on('ResolveName', function (event) {
            var dom = editor.dom,
                node = event.target;

            if (node.nodeName === 'DIV' && dom.getAttrib(node, 'data-gallery-one')) {
                if (dom.hasClass(node, 'gallery-one')) {
                    event.name = 'gallery_one';
                }
            }
        });




        editor.on( 'PreProcess', function( event ) {
            var dom = editor.dom;
            // Replace the gallery one node with the shortcode
            tinymce.each( dom.select( 'div[data-gallery-one]', event.node ), function( node ) {
                // Empty the wrap node
                if ( 'textContent' in node ) {
                    node.textContent = '\u00a0';
                } else {
                    node.innerText = '\u00a0';
                }
            });
        });

        editor.on('PostProcess', function (event) {

            if ( event.content ) {
                event.content = event.content.replace( /<div [^>]*?data-gallery-one="([^"]*)"[^>]*>[\s\S]*?<\/div>/g, function( match, shortcode ) {
                    if ( shortcode ) {
                        return '<p>' + window.decodeURIComponent( shortcode ) + '</p>';
                    }
                    return ''; // If error, remove the view
                });
            }
        });

        function load_preview( id, node ){
            node.attr( 'preview-loaded', 'true' );
            jQuery.ajax({
                type: "POST",
                url: ajaxurl,
                data: {
                    action: 'gallery_one_get_editor_preview_thumbs',
                    album_id: id
                },
                dataType: 'html',
                success: function ( html ) {
                    node.find( '.gallery-one-preview' ).html( html );
                }
            });
        }

        function load_previews(){
            var dom = editor.dom;
            var body = jQuery( dom.doc.activeElement );
            body.find( 'div.gallery-one' ).each( function(){
                var node = jQuery( this );
                var loaded = node.attr( 'preview-loaded' );
                if ( loaded !== 'true' ) {
                    var  data = window.decodeURIComponent(node.attr('data-gallery-one') || '');
                    var shortcode = wp.shortcode.next('gallery_one', data);
                    try {
                        if ( shortcode.shortcode.attrs.named.id ) {
                            load_preview( shortcode.shortcode.attrs.named.id, node );
                        }
                    } catch (e) {

                    }
                }
            } );
        }

        editor.on( 'LoadContent', function( event ) {
            //if ( ! event.content ) {
            //    return;
           // }
           // load_previews();
        });

        editor.on('SetContent', function (event) {
            load_previews();
        });

        editor.on('BeforeSetContent', function (event) {
            event.content = replaceGalleryShortcodes(event.content);
           // setTimeout( function () {
             //   load_previews();
            //}, 2000 );
        });


    });


})();

