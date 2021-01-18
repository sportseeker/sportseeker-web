/*
 CryptoJS v3.1.2
 code.google.com/p/crypto-js
 (c) 2009-2013 by Jeff Mott. All rights reserved.
 code.google.com/p/crypto-js/wiki/License
 */
var CryptoJS=CryptoJS||function(s,p){var m={},l=m.lib={},n=function(){},r=l.Base={extend:function(b){n.prototype=this;var h=new n;b&&h.mixIn(b);h.hasOwnProperty("init")||(h.init=function(){h.$super.init.apply(this,arguments)});h.init.prototype=h;h.$super=this;return h},create:function(){var b=this.extend();b.init.apply(b,arguments);return b},init:function(){},mixIn:function(b){for(var h in b)b.hasOwnProperty(h)&&(this[h]=b[h]);b.hasOwnProperty("toString")&&(this.toString=b.toString)},clone:function(){return this.init.prototype.extend(this)}},
        q=l.WordArray=r.extend({init:function(b,h){b=this.words=b||[];this.sigBytes=h!=p?h:4*b.length},toString:function(b){return(b||t).stringify(this)},concat:function(b){var h=this.words,a=b.words,j=this.sigBytes;b=b.sigBytes;this.clamp();if(j%4)for(var g=0;g<b;g++)h[j+g>>>2]|=(a[g>>>2]>>>24-8*(g%4)&255)<<24-8*((j+g)%4);else if(65535<a.length)for(g=0;g<b;g+=4)h[j+g>>>2]=a[g>>>2];else h.push.apply(h,a);this.sigBytes+=b;return this},clamp:function(){var b=this.words,h=this.sigBytes;b[h>>>2]&=4294967295<<
            32-8*(h%4);b.length=s.ceil(h/4)},clone:function(){var b=r.clone.call(this);b.words=this.words.slice(0);return b},random:function(b){for(var h=[],a=0;a<b;a+=4)h.push(4294967296*s.random()|0);return new q.init(h,b)}}),v=m.enc={},t=v.Hex={stringify:function(b){var a=b.words;b=b.sigBytes;for(var g=[],j=0;j<b;j++){var k=a[j>>>2]>>>24-8*(j%4)&255;g.push((k>>>4).toString(16));g.push((k&15).toString(16))}return g.join("")},parse:function(b){for(var a=b.length,g=[],j=0;j<a;j+=2)g[j>>>3]|=parseInt(b.substr(j,
                2),16)<<24-4*(j%8);return new q.init(g,a/2)}},a=v.Latin1={stringify:function(b){var a=b.words;b=b.sigBytes;for(var g=[],j=0;j<b;j++)g.push(String.fromCharCode(a[j>>>2]>>>24-8*(j%4)&255));return g.join("")},parse:function(b){for(var a=b.length,g=[],j=0;j<a;j++)g[j>>>2]|=(b.charCodeAt(j)&255)<<24-8*(j%4);return new q.init(g,a)}},u=v.Utf8={stringify:function(b){try{return decodeURIComponent(escape(a.stringify(b)))}catch(g){throw Error("Malformed UTF-8 data");}},parse:function(b){return a.parse(unescape(encodeURIComponent(b)))}},
        g=l.BufferedBlockAlgorithm=r.extend({reset:function(){this._data=new q.init;this._nDataBytes=0},_append:function(b){"string"==typeof b&&(b=u.parse(b));this._data.concat(b);this._nDataBytes+=b.sigBytes},_process:function(b){var a=this._data,g=a.words,j=a.sigBytes,k=this.blockSize,m=j/(4*k),m=b?s.ceil(m):s.max((m|0)-this._minBufferSize,0);b=m*k;j=s.min(4*b,j);if(b){for(var l=0;l<b;l+=k)this._doProcessBlock(g,l);l=g.splice(0,b);a.sigBytes-=j}return new q.init(l,j)},clone:function(){var b=r.clone.call(this);
            b._data=this._data.clone();return b},_minBufferSize:0});l.Hasher=g.extend({cfg:r.extend(),init:function(b){this.cfg=this.cfg.extend(b);this.reset()},reset:function(){g.reset.call(this);this._doReset()},update:function(b){this._append(b);this._process();return this},finalize:function(b){b&&this._append(b);return this._doFinalize()},blockSize:16,_createHelper:function(b){return function(a,g){return(new b.init(g)).finalize(a)}},_createHmacHelper:function(b){return function(a,g){return(new k.HMAC.init(b,
        g)).finalize(a)}}});var k=m.algo={};return m}(Math);
(function(s){function p(a,k,b,h,l,j,m){a=a+(k&b|~k&h)+l+m;return(a<<j|a>>>32-j)+k}function m(a,k,b,h,l,j,m){a=a+(k&h|b&~h)+l+m;return(a<<j|a>>>32-j)+k}function l(a,k,b,h,l,j,m){a=a+(k^b^h)+l+m;return(a<<j|a>>>32-j)+k}function n(a,k,b,h,l,j,m){a=a+(b^(k|~h))+l+m;return(a<<j|a>>>32-j)+k}for(var r=CryptoJS,q=r.lib,v=q.WordArray,t=q.Hasher,q=r.algo,a=[],u=0;64>u;u++)a[u]=4294967296*s.abs(s.sin(u+1))|0;q=q.MD5=t.extend({_doReset:function(){this._hash=new v.init([1732584193,4023233417,2562383102,271733878])},
    _doProcessBlock:function(g,k){for(var b=0;16>b;b++){var h=k+b,w=g[h];g[h]=(w<<8|w>>>24)&16711935|(w<<24|w>>>8)&4278255360}var b=this._hash.words,h=g[k+0],w=g[k+1],j=g[k+2],q=g[k+3],r=g[k+4],s=g[k+5],t=g[k+6],u=g[k+7],v=g[k+8],x=g[k+9],y=g[k+10],z=g[k+11],A=g[k+12],B=g[k+13],C=g[k+14],D=g[k+15],c=b[0],d=b[1],e=b[2],f=b[3],c=p(c,d,e,f,h,7,a[0]),f=p(f,c,d,e,w,12,a[1]),e=p(e,f,c,d,j,17,a[2]),d=p(d,e,f,c,q,22,a[3]),c=p(c,d,e,f,r,7,a[4]),f=p(f,c,d,e,s,12,a[5]),e=p(e,f,c,d,t,17,a[6]),d=p(d,e,f,c,u,22,a[7]),
        c=p(c,d,e,f,v,7,a[8]),f=p(f,c,d,e,x,12,a[9]),e=p(e,f,c,d,y,17,a[10]),d=p(d,e,f,c,z,22,a[11]),c=p(c,d,e,f,A,7,a[12]),f=p(f,c,d,e,B,12,a[13]),e=p(e,f,c,d,C,17,a[14]),d=p(d,e,f,c,D,22,a[15]),c=m(c,d,e,f,w,5,a[16]),f=m(f,c,d,e,t,9,a[17]),e=m(e,f,c,d,z,14,a[18]),d=m(d,e,f,c,h,20,a[19]),c=m(c,d,e,f,s,5,a[20]),f=m(f,c,d,e,y,9,a[21]),e=m(e,f,c,d,D,14,a[22]),d=m(d,e,f,c,r,20,a[23]),c=m(c,d,e,f,x,5,a[24]),f=m(f,c,d,e,C,9,a[25]),e=m(e,f,c,d,q,14,a[26]),d=m(d,e,f,c,v,20,a[27]),c=m(c,d,e,f,B,5,a[28]),f=m(f,c,
            d,e,j,9,a[29]),e=m(e,f,c,d,u,14,a[30]),d=m(d,e,f,c,A,20,a[31]),c=l(c,d,e,f,s,4,a[32]),f=l(f,c,d,e,v,11,a[33]),e=l(e,f,c,d,z,16,a[34]),d=l(d,e,f,c,C,23,a[35]),c=l(c,d,e,f,w,4,a[36]),f=l(f,c,d,e,r,11,a[37]),e=l(e,f,c,d,u,16,a[38]),d=l(d,e,f,c,y,23,a[39]),c=l(c,d,e,f,B,4,a[40]),f=l(f,c,d,e,h,11,a[41]),e=l(e,f,c,d,q,16,a[42]),d=l(d,e,f,c,t,23,a[43]),c=l(c,d,e,f,x,4,a[44]),f=l(f,c,d,e,A,11,a[45]),e=l(e,f,c,d,D,16,a[46]),d=l(d,e,f,c,j,23,a[47]),c=n(c,d,e,f,h,6,a[48]),f=n(f,c,d,e,u,10,a[49]),e=n(e,f,c,d,
            C,15,a[50]),d=n(d,e,f,c,s,21,a[51]),c=n(c,d,e,f,A,6,a[52]),f=n(f,c,d,e,q,10,a[53]),e=n(e,f,c,d,y,15,a[54]),d=n(d,e,f,c,w,21,a[55]),c=n(c,d,e,f,v,6,a[56]),f=n(f,c,d,e,D,10,a[57]),e=n(e,f,c,d,t,15,a[58]),d=n(d,e,f,c,B,21,a[59]),c=n(c,d,e,f,r,6,a[60]),f=n(f,c,d,e,z,10,a[61]),e=n(e,f,c,d,j,15,a[62]),d=n(d,e,f,c,x,21,a[63]);b[0]=b[0]+c|0;b[1]=b[1]+d|0;b[2]=b[2]+e|0;b[3]=b[3]+f|0},_doFinalize:function(){var a=this._data,k=a.words,b=8*this._nDataBytes,h=8*a.sigBytes;k[h>>>5]|=128<<24-h%32;var l=s.floor(b/
        4294967296);k[(h+64>>>9<<4)+15]=(l<<8|l>>>24)&16711935|(l<<24|l>>>8)&4278255360;k[(h+64>>>9<<4)+14]=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360;a.sigBytes=4*(k.length+1);this._process();a=this._hash;k=a.words;for(b=0;4>b;b++)h=k[b],k[b]=(h<<8|h>>>24)&16711935|(h<<24|h>>>8)&4278255360;return a},clone:function(){var a=t.clone.call(this);a._hash=this._hash.clone();return a}});r.MD5=t._createHelper(q);r.HmacMD5=t._createHmacHelper(q)})(Math);


var md5 = function(value) {
    return CryptoJS.MD5(value).toString();
};

var social_album_images = {};
var editing_media_id = false;

function getHostName(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
        return match[2];
    }
    else {
        return null;
    }
}

function getDomain(url) {
    var hostName = getHostName(url);
    var domain = hostName;

    if (hostName != null) {
        var parts = hostName.split('.').reverse();

        if (parts != null && parts.length > 1) {
            domain = parts[1] + '.' + parts[0];

            if (hostName.toLowerCase().indexOf('.co.uk') != -1 && parts.length > 2) {
                domain = parts[2] + '.' + domain;
            }
        }
    }
    return domain;
}



jQuery( document ).ready( function($){
    jQuery.ajaxSetup({ cache: false });

    $( window ).resize( function(){
        var w =  $( window).width();
        var min_width = 180;
        min_width += 20; // padding

        var c = w / min_width ;
        c = Math.round( c );
        if ( c >= 12 ) {
            c = 12;
        }
        $( 'ul.attachments').attr( 'data-columns', c );
    } );

    $( window).resize();

    //-----------------------------


    var sGallery = {
        xhr: false,

        get_facebook_album_id: function( url ){
            //url = 'https://www.facebook.com/media/set/?set=a.584256218419365.1073741864.207970342714623&type=3';
            if ( ! url || url == '' ) {
                return false;
            }
            var arr = url.match(/a\.(.*?)\.(.*?)/);
            if (arr) {
                return arr[1];
            }
            return false;
        },
        render_item: function(){
            var html ='';
        },

        _template: function(){
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
                    compiled = _.template( jQuery( '#gallery-one-item-tpl').html(), null, options);
                    return compiled( data );
                };
            });

            return this.template = repeaterTemplate();
        },

        _modal: function(){
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
                    compiled = _.template( jQuery( '#gallery-one-item-edit-info-tpl').html(), null, options);
                    return compiled( data );
                };
            });

            return this.modal = repeaterTemplate();
        },

        update_edit_alumb_items: function (){
           // $( '#s-album-items' )

            var items = {};

            $( '#s-album-items li').each( function(){
                var id = $( this).attr( 'data-id' ) || '';
                if ( id && typeof social_album_images[ 'id-'+ id ] !== "undefined" ){
                    items[ 'id-'+id ] = social_album_images[ 'id-'+ id ];
                }
            } );

           // console.log( JSON.stringify( items ) );

            social_album_images = items;
            $( '#album_data').val( JSON.stringify( items ) );


        },

        get_flickr_album_id: function( url ){
            if ( ! url || url == '' ) {
                return false;
            }
            /// https://www.flickr.com/photos/78942874@N06/17825679861/in/album-72157651609884000/
            /// https://www.flickr.com/photos/{user-id}/{photo-id}/in/album-{album-id}/
            // https://www.flickr.com/photos/soulsofsanfrancisco/albums/72157632763603380
            // https://www.flickr.com/photos/soulsofsanfrancisco/albums/72157632763603380
            //url = 'https://www.flickr.com/photos/78942874@N06/17825679861/in/album-72157651609884000/';
            // url ='https://www.flickr.com/photos/soulsofsanfrancisco/albums/72157632763603380';
            // https://www.flickr.com/photos/75487768@N04/sets/72157660117082147
            var arr;
            if ( arr = url.match(/album-(\d*)[\/?.*]/) ) {
                return arr[1];
            }

            if (  arr = url.match(/album-(\d*)/ ) ) {
                return arr[1];
            }

            if (  arr = url.match(/albums\/(\d*)/ ) ) {
                return arr[1];
            }

            if ( arr = url.match(/albums\/(\d*)[\/?.*]/) ) {
                return arr[1];
            }

            if (  arr = url.match(/sets\/(\d*)/ ) ) {
                return arr[1];
            }

            if ( arr = url.match(/sets\/(\d*)[\/?.*]/) ) {
                return arr[1];
            }

            if (arr) {
                return arr[1];
            }
            return false;
        },

        get_facebook_images: function( album_url ){
            var g = this;
            if ( g.xhr ){
                g.xhr.abort();
            }

            var album_id = g.get_facebook_album_id( album_url );
            if ( album_id ) {
                g.xhr = $.getJSON(
                    'https://graph.facebook.com/v2.5/' + album_id,
                    {
                        fields: "photos.limit(100){images,link,name,picture,width}",
                        access_token: S_GALLERY.api.facebook //'202670940102926|bb14cd826cee5490f19051e6bd0bd77c' // app ID|secret key
                    },
                    function (response) {
                        // Reset album url
                        $( '.sg-social-url input').val( '' );

                        var album_data = {};
                        $.each(response.photos.data, function (key, photo) {

                            var item = g.render_facebook_item( photo );
                            var item_data = {
                                id: photo.id,
                                title: photo.name ?  photo.name: '',
                                images: photo.images,
                                thumb: g.get_fabook_thumb( photo ),
                                url:  photo.images[0].source,
                                social: 'facebook',
                            };

                            album_data[ 'id-'+ photo.id ] = item_data;
                            // Do not duplicate item
                            if ( jQuery('.gallery-one-gird li[data-social="facebook"][data-id="'+photo.id+'"]').length <= 0 ) {
                                jQuery('.gallery-one-gird').append(item);
                            }
                        });

                        social_album_images = $.extend( {}, social_album_images, album_data );
                        $( '#album_data').val( JSON.stringify( social_album_images ) );
                        $( '#album_social_id').val( album_id );

                        g.xhr = false;

                    }
                );
            } else {
                g.xhr = false;
                $( '.sg-social-url').addClass( 'input-error' );
            }
        },

        get_flickr_images: function( album_url ){
            var g = this;
            if ( g.xhr ){
                g.xhr.abort();
            }

            var album_id = g.get_flickr_album_id( album_url );
            if ( album_id ) {

                g.xhr = $.get(
                    'https://api.flickr.com/services/rest/',
                    {
                        method: 'flickr.photosets.getPhotos',
                        api_key: S_GALLERY.api.flickr,
                        photoset_id: album_id,
                        format: 'json',
                        nojsoncallback: 1,

                    },
                    function ( response ) {
                        // Reset album url
                        $( '.sg-social-url input').val( '' );
                        if ( response.stat == 'fail' ) {
                            return ;
                        }

                        if ( ! $( '.album-title').val() ) {
                            $( '.album-title').val( response.photoset.title );
                        }
                        // https://www.flickr.com/services/api/misc.urls.html
                        // https://www.flickr.com/photos/78942874@N06/17825679861/in/album-72157651609884000/
                        // https://www.flickr.com/photos/{user-id}/{photo-id}/in/album-{album-id}/
                        // https://www.flickr.com/services/api/explore/flickr.photos.getSizes
                        $( '#album_social_id').val( album_id );

                        var album_data = {};

                        jQuery('.fetch-results').html( '' );
                        $.each( response.photoset.photo, function ( key, photo ) {


                            //---------------------------------------------------
                            g.xhr = $.get(
                                'https://api.flickr.com/services/rest/',
                                {
                                    method: 'flickr.photos.getSizes',
                                    api_key: S_GALLERY.api.flickr,
                                    photo_id: photo.id ,
                                    format: 'json',
                                    nojsoncallback: 1,
                                },
                                function ( image_data ) {
                                    if ( image_data.stat == 'ok' ) {
                                        var _sizes = {};
                                        var _w = 0, _url = '';

                                        $.each( image_data.sizes.size, function( key, size ){
                                            arr = size.url.match(/sizes\/(\w+)/);
                                            var _s;
                                            if ( arr ) {
                                                _s = arr[1];
                                                _sizes[ _s ] = size;
                                                if ( size.width > _w ) {
                                                    _w = size.width;
                                                    _url = size.source;
                                                }

                                            }
                                        } );

                                        photo.images = _sizes;
                                        photo.url = _url;
                                        var item = g.render_flickr_item( photo );

                                        photo.social = 'flickr';
                                        album_data[ 'id-'+ photo.id ] = photo;
                                        // Do not duplicate item
                                        if ( jQuery('.gallery-one-gird li[data-social="flickr"][data-id="'+photo.id+'"]').length <= 0 ) {
                                            jQuery('.gallery-one-gird').append( item );
                                        }
                                        social_album_images = $.extend( {}, social_album_images, album_data );
                                        $( '#album_data').val( JSON.stringify( social_album_images ) );

                                    }
                                }
                            );
                            //---------------------------------------------------


                        });


                    }
                );

            } else {
                g.xhr = false;
                $( '.sg-social-url').addClass( 'input-error' );
            }
        },

        get_fabook_thumb: function( photo ){
            var src = '';
            if ( photo.images[5] ){
                src =  photo.images[5].source;
            } else if ( photo.images[5] ){
                src =  photo.images[5].source;
            } else if ( photo.images[4] ) {
                src =  photo.images[4].source;
            } else if ( photo.images[3] ) {
                src =  photo.images[3].source;
            } else if ( photo.images[2] ) {
                src =  photo.images[2].source;
            } else if ( photo.images[1] ) {
                src =  photo.images[1].source;
            } else if ( photo.images[0] ) {
                src =  photo.images[0].source;
            }
            return src;
        },

        render_facebook_item: function( photo ){
            var g = this;
            return  g.template( {
                src: g.get_fabook_thumb( photo ),
                id: photo.id,
                social: photo.social
            } );

        },
        render_flickr_item: function( photo ){
            var g = this;
            var src = photo.images.q.source;
            return g.template( {
                src:  src,
                id: photo.id,
                social: photo.social
            } );
        },

        render_wp_item: function( photo ){
            var g = this;
            var src = '';
            if ( typeof photo.sizes !== "undefined" && typeof photo.sizes['medium'] !== "undefined"  ){
                src = photo.sizes['medium'].url;
            } else {
                src = photo.url;
            }
            return g.template( {
                src:  src,
                id: photo.id,
                social: photo.social
            } );
        },


        wp_select_images: function(){
            var g = this;
           // var _media = _.clone( wp.media );
            var frame = wp.media({
                title : wp.media.view.l10n.addMedia,
                //multiple : true,
                multiple: 'add',
                library : { type : 'image' },
                button : { text : 'Insert' }
            });

            frame.on('close',function() {
                // get selections and save to hidden input plus other AJAX stuff etc.
                var selection = frame.state().get('selection');
                 //console.log(selection);
            });
            
            frame.on( 'select', function(){
                // Grab our attachment selection and construct a JSON representation of the model.
                var media_attachments = frame.state().get('selection').toJSON();
                var album_data = {};
                $.each( media_attachments , function (key, photo) {
                    var item = g.render_wp_item( photo );
                    photo.social = 'wp';
                    album_data[ 'id-'+photo.id ] = photo;
                    // Do not duplicate item
                    if ( jQuery('.gallery-one-gird li[data-social="wp"][data-id="'+photo.id+'"]').length <= 0 ) {
                        jQuery('.gallery-one-gird').append( item );
                    }
                });

                social_album_images = $.extend( {}, social_album_images, album_data );
                $( '#album_data').val( JSON.stringify( social_album_images ) );

            });

            frame.on('open',function() {

            });
            frame.open();
        },

        load_image_url: function ( url ) {
            var g = this;
            g.imageExists ( url, function( exists ) {
                if (exists) {
                    $( '.social-media-url' ).remove( 'error' );
                    var album_data = {};
                    // Do not duplicate item
                    var id = md5( url );
                    var photo = {
                        id: id,
                        title: '',
                        images: '',
                        thumb: '',
                        url: url,
                        social: 'url',
                    };

                    var item = g.template( {
                        src:  url,
                        id: photo.id,
                        social: photo.social
                    } );
                    album_data[ 'id-'+id ] = photo;
                    if ( jQuery('.gallery-one-gird li[data-social="url"][data-id="'+photo.id+'"]').length <= 0 ) {
                        jQuery('.gallery-one-gird').append( item );
                    }
                    social_album_images = $.extend( {}, social_album_images, album_data );
                    //Update data
                    $( '#album_data').val( JSON.stringify( social_album_images ) );
                }
            });
        },

        imageExists: function( url, callback ) {
            var img = new Image();
            img.onload = function() { callback( true ); };
            img.onerror = function() { callback( false ); };
            img.src = url;
        },

        render_media_items: function( album_data ){
            var g = this;
            $.each( album_data, function (key, photo) {
                var item;
                switch ( photo.social ) {
                    case 'facebook':
                        item =  g.render_facebook_item( photo );
                        break;
                    case 'flickr':
                        item = g.render_flickr_item( photo );
                        break;
                    case 'wp':
                        item = g.render_wp_item( photo );
                        break;
                    default:
                        item = g.template( {
                            src:  photo.url,
                            id: photo.id,
                            social: photo.social
                        } );

                }
                item =  $( item );
                item.addClass( 'save-ready' );
                jQuery('.gallery-one-gird').append( item );
            });
        },


        init: function(){
            var g = this;
            g._template();
            g._modal();

            $( '.sg-social-url input').on( 'focus', function(){
                $( this).parent().removeClass( 'input-error' );
            } );

            $( '.flickr_album_url').on( 'change keyup blur', function(){
                var url = $( this ).val();
                g.get_flickr_images( url );
            });

            $( '.facebook_album_url').on( 'change keyup blur', function(){
                var url = $( this ).val();
                g.get_facebook_images( url );
            });

            $( '.album_wp_add_images'). on( 'click', function(){
                g.wp_select_images();
            } );

            // Load social media
            $( '.social-media-url' ).on( 'focus', function(){
                $( this ).removeClass( 'error');
            });
            $( '.social-media-load' ).on( 'click', function( e ){
                console.log( 'load click'  );
                e.preventDefault();
                var input = $( '.social-media-url' );
                var url = input.val();
                // reset value
                input.val( '' );
                input.addClass( 'error' );
                if ( url == '' ) {

                } else {
                    var domain = getDomain( url );
                    if ( domain ) {
                        domain.toLowerCase();
                        input.removeClass( 'error' );
                        if (domain == 'facebook.com') {
                            g.get_facebook_images( url );
                        } else if (domain == 'flickr.com') {
                            g.get_flickr_images( url );
                        } else {
                            g.load_image_url( url );
                        }
                    } else {

                    }
                }
            } );

            // Select item
            $( 'body').on( 'click', '#s-album-items li', function( e ){
                e.preventDefault();
                if ( $( this ).parent().hasClass( 'select-mod' ) ) {
                    $( this).toggleClass( 'selected' );
                    $( this).toggleClass( 'details' );
                } else {

                    //remove old modal
                    $( '.sg-modal').remove( );
                    $( '.media-modal-backdrop').hide();

                    // open edit modal
                    if ( $( '.media-modal-backdrop').length > 0 ) {
                        $( '.media-modal-backdrop').show();
                    } else {
                        $( 'body').append( '<div class="media-modal-backdrop"></div>');
                        $( '.media-modal-backdrop').show();
                    }

                    var id =  $( this).attr( 'data-id' ) || '';
                    var data = {};


                    if (  typeof social_album_images[ 'id-'+id ] !== "undefined" ){
                        editing_media_id = id;
                        data = social_album_images[ 'id-'+id ];
                    } else {
                        editing_media_id = false;
                    }


                    var modal = g.modal( data );
                    modal =  $( modal );
                    $( modal).show();
                    $( 'body').append( modal );

                }

                if ( $('#s-album-items li.selected').length > 0 ) {
                    $( '.delete-selected-button').removeAttr( 'disabled' );
                } else {
                    $( '.delete-selected-button').attr( 'disabled', 'disabled' );
                }
            } );


            // Delete selected items
            $( '.s-form-edit-media').on( 'click', '.delete-selected-button', function( e ) {
                e.preventDefault();
                var c = confirm( S_GALLERY.confirm_delete );
                if ( c ) {
                    $('#s-album-items li.selected').remove();
                    $('#s-album-items').removeClass('select-mod');
                    $('#s-album-items').sortable('enable');
                    g.update_edit_alumb_items();
                    $(this).hide();
                    $('.s-form-edit-media .select-mode-toggle-button').text( S_GALLERY.bulk_select );
                    $('.save-btn, .album_add_social').show();
                }

            } );

            $( '.s-form-edit-media .select-mode-toggle-button').on( 'click', function ( e ){
                e.preventDefault();
                if ( !  $('#s-album-items').hasClass( 'select-mod' ) ) {
                    $('#s-album-items').addClass( 'select-mod' );
                    $('#s-album-items').sortable( 'disable' );
                    $( this).text( S_GALLERY.cancel_select );
                    $( '.s-form-edit-media .delete-selected-button').attr( 'disabled', 'disabled' );
                    $( '.save-btn, .album_add_social').hide();
                    $( '.s-form-edit-media .delete-selected-button').show();
                } else {
                    $('#s-album-items').removeClass( 'select-mod' );
                    // $( '#gallery-one-albums').sortable( 'enable' );
                    $( '#s-album-items li').removeClass( 'selected details' );
                    $( this).text( S_GALLERY.bulk_select );
                    $( '.s-form-edit-media .delete-selected-button').hide();
                    $( '.save-btn, .album_add_social').show();
                }
            } );

            $( '.album_add_social').on( 'click', function( e ){
                e.preventDefault();
                $( '.sg-social-url').toggle();
            } );

            // When page load
            var album_type =  $( '#album_type').val();
            var album_data =  $( 'input#album_data').val();
            if ( album_data != '' ) {
                album_data = JSON.parse( album_data );
            }
            if (  typeof album_data === "undefined" || album_data === '' ) {
                album_data = {};
            }

            if ( ! jQuery.isEmptyObject( album_data ) ) {
                social_album_images = album_data;
                g.render_media_items( album_data );
            }

            // Sortable item
            $( '#s-album-items').sortable( {
                update: function( event, ui ) {
                    g.update_edit_alumb_items();
                }
            });

            //-- Modal setup
            // Remove Modal
            $( document).on( 'keydown', function(e ) {
                if ( e.which === 27 ) {
                    $( '.sg-modal').remove( );
                    $( '.media-modal-backdrop').hide();
                    editing_media_id = false;
                }
            } );

            $( 'body').on( 'click', '.media-modal-close, .media-modal-backdrop', function( e ){
                $( '.sg-modal, .s-shortcode-modal').remove( );
                $( '.media-modal-backdrop').hide();
                editing_media_id = false;
            } ) ;

            // Update modal settings
            $( 'body').on( 'keyup change', '.sg-modal .settings input, .sg-modal .settings select, .sg-modal .settings textarea', function(){

                if ( editing_media_id ){
                    var e = $( this );
                    var k = e.attr( 'data-setting' ) || '';
                    if ( k ) {
                        social_album_images[ 'id-' + editing_media_id ][ k ] = e.val();
                        $( '#album_data').val( JSON.stringify( social_album_images ) );

                    }
                }
            } );
            //

            $( 'body').on( 'click', '.sg-modal .edit-media-header .left', function( e ){
                e.preventDefault();
                if ( editing_media_id ){
                    var li = $( '#s-album-items li[data-id="'+editing_media_id+'"]' );
                    if ( li.prev().length ) {
                        li.prev().trigger( 'click' );
                    }
                }
            });

            $( 'body' ).on( 'click', '.sg-modal .edit-media-header .right', function( e ){
                e.preventDefault();
                if ( editing_media_id ){
                    var li = $( '#s-album-items li[data-id="'+editing_media_id+'"]' );
                    if ( li.next().length ) {
                        li.next().trigger( 'click' );
                    }
                }
            });


        } // end init

    };

    if ( $( 'input#album_data').length ) {
        sGallery.init();
    }







} );