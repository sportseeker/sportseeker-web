var mejs = mejs || {};
mejs.version = "2.18.1", mejs.meIndex = 0, mejs.plugins = {
    silverlight: [{
        version: [3, 0],
        types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
    }],
    flash: [{
        version: [9, 0, 124],
        types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/youtube", "video/x-youtube", "video/dailymotion", "video/x-dailymotion", "application/x-mpegURL"]
    }],
    youtube: [{version: null, types: ["video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube"]}],
    vimeo: [{version: null, types: ["video/vimeo", "video/x-vimeo"]}]
}, mejs.Utility = {
    encodeUrl: function (a) {
        return encodeURIComponent(a)
    }, escapeHTML: function (a) {
        return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
    }, absolutizeUrl: function (a) {
        var b = document.createElement("div");
        return b.innerHTML = '<a href="' + this.escapeHTML(a) + '">x</a>', b.firstChild.href
    }, getScriptPath: function (a) {
        for (var b, c, d, e, f, g, h = 0, i = "", j = "", k = document.getElementsByTagName("script"), l = k.length, m = a.length; l > h; h++) {
            for (e = k[h].src, c = e.lastIndexOf("/"), c > -1 ? (g = e.substring(c + 1), f = e.substring(0, c + 1)) : (g = e, f = ""), b = 0; m > b; b++) if (j = a[b], d = g.indexOf(j), d > -1) {
                i = f;
                break
            }
            if ("" !== i) break
        }
        return i
    }, calculateTimeFormat: function (a, b, c) {
        0 > a && (a = 0), "undefined" == typeof c && (c = 25);
        var d = b.timeFormat, e = d[0], f = d[1] == d[0], g = f ? 2 : 1, h = ":", i = Math.floor(a / 3600) % 24,
            j = Math.floor(a / 60) % 60, k = Math.floor(a % 60), l = Math.floor((a % 1 * c).toFixed(3)),
            m = [[l, "f"], [k, "s"], [j, "m"], [i, "h"]];
        d.length < g && (h = d[g]);
        for (var n = !1, o = 0, p = m.length; p > o; o++) if (-1 !== d.indexOf(m[o][1])) n = !0; else if (n) {
            for (var q = !1, r = o; p > r; r++) if (m[r][0] > 0) {
                q = !0;
                break
            }
            if (!q) break;
            f || (d = e + d), d = m[o][1] + h + d, f && (d = m[o][1] + d), e = m[o][1]
        }
        b.currentTimeFormat = d
    }, twoDigitsString: function (a) {
        return 10 > a ? "0" + a : String(a)
    }, secondsToTimeCode: function (a, b) {
        0 > a && (a = 0);
        var c = b.framesPerSecond;
        "undefined" == typeof c && (c = 25);
        var d = b.currentTimeFormat, e = Math.floor(a / 3600) % 24, f = Math.floor(a / 60) % 60, g = Math.floor(a % 60),
            h = Math.floor((a % 1 * c).toFixed(3));
        lis = [[h, "f"], [g, "s"], [f, "m"], [e, "h"]];
        var j = d;
        for (i = 0, len = lis.length; i < len; i++) j = j.replace(lis[i][1] + lis[i][1], this.twoDigitsString(lis[i][0])), j = j.replace(lis[i][1], lis[i][0]);
        return j
    }, timeCodeToSeconds: function (a, b, c, d) {
        "undefined" == typeof c ? c = !1 : "undefined" == typeof d && (d = 25);
        var e = a.split(":"), f = parseInt(e[0], 10), g = parseInt(e[1], 10), h = parseInt(e[2], 10), i = 0, j = 0;
        return c && (i = parseInt(e[3]) / d), j = 3600 * f + 60 * g + h + i
    }, convertSMPTEtoSeconds: function (a) {
        if ("string" != typeof a) return !1;
        a = a.replace(",", ".");
        var b = 0, c = -1 != a.indexOf(".") ? a.split(".")[1].length : 0, d = 1;
        a = a.split(":").reverse();
        for (var e = 0; e < a.length; e++) d = 1, e > 0 && (d = Math.pow(60, e)), b += Number(a[e]) * d;
        return Number(b.toFixed(c))
    }, removeSwf: function (a) {
        var b = document.getElementById(a);
        b && /object|embed/i.test(b.nodeName) && (mejs.MediaFeatures.isIE ? (b.style.display = "none", function () {
            4 == b.readyState ? mejs.Utility.removeObjectInIE(a) : setTimeout(arguments.callee, 10)
        }()) : b.parentNode.removeChild(b))
    }, removeObjectInIE: function (a) {
        var b = document.getElementById(a);
        if (b) {
            for (var c in b) "function" == typeof b[c] && (b[c] = null);
            b.parentNode.removeChild(b)
        }
    }
}, mejs.PluginDetector = {
    hasPluginVersion: function (a, b) {
        var c = this.plugins[a];
        return b[1] = b[1] || 0, b[2] = b[2] || 0, c[0] > b[0] || c[0] == b[0] && c[1] > b[1] || c[0] == b[0] && c[1] == b[1] && c[2] >= b[2] ? !0 : !1
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function (a, b, c, d, e) {
        this.plugins[a] = this.detectPlugin(b, c, d, e)
    },
    detectPlugin: function (a, b, c, d) {
        var e, f, g, h = [0, 0, 0];
        if ("undefined" != typeof this.nav.plugins && "object" == typeof this.nav.plugins[a]) {
            if (e = this.nav.plugins[a].description, e && ("undefined" == typeof this.nav.mimeTypes || !this.nav.mimeTypes[b] || this.nav.mimeTypes[b].enabledPlugin)) for (h = e.replace(a, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split("."), f = 0; f < h.length; f++) h[f] = parseInt(h[f].match(/\d+/), 10)
        } else if ("undefined" != typeof window.ActiveXObject) try {
            g = new ActiveXObject(c), g && (h = d(g))
        } catch (i) {
        }
        return h
    }
}, mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function (a) {
    var b = [], c = a.GetVariable("$version");
    return c && (c = c.split(" ")[1].split(","), b = [parseInt(c[0], 10), parseInt(c[1], 10), parseInt(c[2], 10)]), b
}), mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function (a) {
    var b = [0, 0, 0, 0], c = function (a, b, c, d) {
        for (; a.isVersionSupported(b[0] + "." + b[1] + "." + b[2] + "." + b[3]);) b[c] += d;
        b[c] -= d
    };
    return c(a, b, 0, 1), c(a, b, 1, 1), c(a, b, 2, 1e4), c(a, b, 2, 1e3), c(a, b, 2, 100), c(a, b, 2, 10), c(a, b, 2, 1), c(a, b, 3, 1), b
}), mejs.MediaFeatures = {
    init: function () {
        var a, b, c = this, d = document, e = mejs.PluginDetector.nav, f = mejs.PluginDetector.ua.toLowerCase(),
            g = ["source", "track", "audio", "video"];
        c.isiPad = null !== f.match(/ipad/i), c.isiPhone = null !== f.match(/iphone/i), c.isiOS = c.isiPhone || c.isiPad, c.isAndroid = null !== f.match(/android/i), c.isBustedAndroid = null !== f.match(/android 2\.[12]/), c.isBustedNativeHTTPS = "https:" === location.protocol && (null !== f.match(/android [12]\./) || null !== f.match(/macintosh.* version.* safari/)), c.isIE = -1 != e.appName.toLowerCase().indexOf("microsoft") || null !== e.appName.toLowerCase().match(/trident/gi), c.isChrome = null !== f.match(/chrome/gi), c.isChromium = null !== f.match(/chromium/gi), c.isFirefox = null !== f.match(/firefox/gi), c.isWebkit = null !== f.match(/webkit/gi), c.isGecko = null !== f.match(/gecko/gi) && !c.isWebkit && !c.isIE, c.isOpera = null !== f.match(/opera/gi), c.hasTouch = "ontouchstart" in window, c.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
        for (a = 0; a < g.length; a++) b = document.createElement(g[a]);
        c.supportsMediaTag = "undefined" != typeof b.canPlayType || c.isBustedAndroid;
        try {
            b.canPlayType("video/mp4")
        } catch (h) {
            c.supportsMediaTag = !1
        }
        c.hasSemiNativeFullScreen = "undefined" != typeof b.webkitEnterFullscreen, c.hasNativeFullscreen = "undefined" != typeof b.requestFullscreen, c.hasWebkitNativeFullScreen = "undefined" != typeof b.webkitRequestFullScreen, c.hasMozNativeFullScreen = "undefined" != typeof b.mozRequestFullScreen, c.hasMsNativeFullScreen = "undefined" != typeof b.msRequestFullscreen, c.hasTrueNativeFullScreen = c.hasWebkitNativeFullScreen || c.hasMozNativeFullScreen || c.hasMsNativeFullScreen, c.nativeFullScreenEnabled = c.hasTrueNativeFullScreen, c.hasMozNativeFullScreen ? c.nativeFullScreenEnabled = document.mozFullScreenEnabled : c.hasMsNativeFullScreen && (c.nativeFullScreenEnabled = document.msFullscreenEnabled), c.isChrome && (c.hasSemiNativeFullScreen = !1), c.hasTrueNativeFullScreen && (c.fullScreenEventName = "", c.hasWebkitNativeFullScreen ? c.fullScreenEventName = "webkitfullscreenchange" : c.hasMozNativeFullScreen ? c.fullScreenEventName = "mozfullscreenchange" : c.hasMsNativeFullScreen && (c.fullScreenEventName = "MSFullscreenChange"), c.isFullScreen = function () {
            return c.hasMozNativeFullScreen ? d.mozFullScreen : c.hasWebkitNativeFullScreen ? d.webkitIsFullScreen : c.hasMsNativeFullScreen ? null !== d.msFullscreenElement : void 0
        }, c.requestFullScreen = function (a) {
            c.hasWebkitNativeFullScreen ? a.webkitRequestFullScreen() : c.hasMozNativeFullScreen ? a.mozRequestFullScreen() : c.hasMsNativeFullScreen && a.msRequestFullscreen()
        }, c.cancelFullScreen = function () {
            c.hasWebkitNativeFullScreen ? document.webkitCancelFullScreen() : c.hasMozNativeFullScreen ? document.mozCancelFullScreen() : c.hasMsNativeFullScreen && document.msExitFullscreen()
        }), c.hasSemiNativeFullScreen && f.match(/mac os x 10_5/i) && (c.hasNativeFullScreen = !1, c.hasSemiNativeFullScreen = !1)
    }
}, mejs.MediaFeatures.init(), mejs.HtmlMediaElement = {
    pluginType: "native",
    isFullScreen: !1,
    setCurrentTime: function (a) {
        this.currentTime = a
    },
    setMuted: function (a) {
        this.muted = a
    },
    setVolume: function (a) {
        this.volume = a
    },
    stop: function () {
        this.pause()
    },
    setSrc: function (a) {
        for (var b = this.getElementsByTagName("source"); b.length > 0;) this.removeChild(b[0]);
        if ("string" == typeof a) this.src = a; else {
            var c, d;
            for (c = 0; c < a.length; c++) if (d = a[c], this.canPlayType(d.type)) {
                this.src = d.src;
                break
            }
        }
    },
    setVideoSize: function (a, b) {
        this.width = a, this.height = b
    }
}, mejs.PluginMediaElement = function (a, b, c) {
    this.id = a, this.pluginType = b, this.src = c, this.events = {}, this.attributes = {}
}, mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: !1,
    playbackRate: -1,
    defaultPlaybackRate: -1,
    seekable: [],
    played: [],
    paused: !0,
    ended: !1,
    seeking: !1,
    duration: 0,
    error: null,
    tagName: "",
    muted: !1,
    volume: 1,
    currentTime: 0,
    play: function () {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.playVideo() : this.pluginApi.playMedia(), this.paused = !1)
    },
    load: function () {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType || this.pluginApi.loadMedia(), this.paused = !1)
    },
    pause: function () {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia(), this.paused = !0)
    },
    stop: function () {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia(), this.paused = !0)
    },
    canPlayType: function (a) {
        var b, c, d, e = mejs.plugins[this.pluginType];
        for (b = 0; b < e.length; b++) if (d = e[b], mejs.PluginDetector.hasPluginVersion(this.pluginType, d.version)) for (c = 0; c < d.types.length; c++) if (a == d.types[c]) return "probably";
        return ""
    },
    positionFullscreenButton: function (a, b, c) {
        null != this.pluginApi && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(a), Math.floor(b), c)
    },
    hideFullscreenButton: function () {
        null != this.pluginApi && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
    },
    setSrc: function (a) {
        if ("string" == typeof a) this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a)), this.src = mejs.Utility.absolutizeUrl(a); else {
            var b, c;
            for (b = 0; b < a.length; b++) if (c = a[b], this.canPlayType(c.type)) {
                this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src)), this.src = mejs.Utility.absolutizeUrl(c.src);
                break
            }
        }
    },
    setCurrentTime: function (a) {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.seekTo(a) : this.pluginApi.setCurrentTime(a), this.currentTime = a)
    },
    setVolume: function (a) {
        null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.setVolume(100 * a) : this.pluginApi.setVolume(a), this.volume = a)
    },
    setMuted: function (a) {
        null != this.pluginApi && ("youtube" == this.pluginType ? (a ? this.pluginApi.mute() : this.pluginApi.unMute(), this.muted = a, this.dispatchEvent({type: "volumechange"})) : this.pluginApi.setMuted(a), this.muted = a)
    },
    setVideoSize: function (a, b) {
        this.pluginElement && this.pluginElement.style && (this.pluginElement.style.width = a + "px", this.pluginElement.style.height = b + "px"), null != this.pluginApi && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(a, b)
    },
    setFullscreen: function (a) {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(a)
    },
    enterFullScreen: function () {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!0)
    },
    exitFullScreen: function () {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!1)
    },
    addEventListener: function (a, b, c) {
        this.events[a] = this.events[a] || [], this.events[a].push(b)
    },
    removeEventListener: function (a, b) {
        if (!a) return this.events = {}, !0;
        var c = this.events[a];
        if (!c) return !0;
        if (!b) return this.events[a] = [], !0;
        for (var d = 0; d < c.length; d++) if (c[d] === b) return this.events[a].splice(d, 1), !0;
        return !1
    },
    dispatchEvent: function (a) {
        var b, c = this.events[a.type];
        if (c) for (b = 0; b < c.length; b++) c[b].apply(this, [a])
    },
    hasAttribute: function (a) {
        return a in this.attributes
    },
    removeAttribute: function (a) {
        delete this.attributes[a]
    },
    getAttribute: function (a) {
        return this.hasAttribute(a) ? this.attributes[a] : ""
    },
    setAttribute: function (a, b) {
        this.attributes[a] = b
    },
    remove: function () {
        mejs.Utility.removeSwf(this.pluginElement.id), mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)
    }
}, mejs.MediaPluginBridge = {
    pluginMediaElements: {}, htmlMediaElements: {}, registerPluginElement: function (a, b, c) {
        this.pluginMediaElements[a] = b, this.htmlMediaElements[a] = c
    }, unregisterPluginElement: function (a) {
        delete this.pluginMediaElements[a], delete this.htmlMediaElements[a]
    }, initPlugin: function (a) {
        var b = this.pluginMediaElements[a], c = this.htmlMediaElements[a];
        if (b) {
            switch (b.pluginType) {
                case"flash":
                    b.pluginElement = b.pluginApi = document.getElementById(a);
                    break;
                case"silverlight":
                    b.pluginElement = document.getElementById(b.id), b.pluginApi = b.pluginElement.Content.MediaElementJS
            }
            null != b.pluginApi && b.success && b.success(b, c)
        }
    }, fireEvent: function (a, b, c) {
        var d, e, f, g = this.pluginMediaElements[a];
        if (g) {
            d = {type: b, target: g};
            for (e in c) g[e] = c[e], d[e] = c[e];
            f = c.bufferedTime || 0, d.target.buffered = d.buffered = {
                start: function (a) {
                    return 0
                }, end: function (a) {
                    return f
                }, length: 1
            }, g.dispatchEvent(d)
        }
    }
}, mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: ["flash", "silverlight", "youtube", "vimeo"],
    enablePluginDebug: !1,
    httpsBasicAuthSite: !1,
    type: "",
    pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
    flashName: "flashmediaelement.swf",
    flashStreamer: "",
    flashScriptAccess: "sameDomain",
    enablePluginSmoothing: !1,
    enablePseudoStreaming: !1,
    pseudoStreamingStartQueryParam: "start",
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: -1,
    pluginHeight: -1,
    pluginVars: [],
    timerRate: 250,
    startVolume: .8,
    success: function () {
    },
    error: function () {
    }
}, mejs.MediaElement = function (a, b) {
    return mejs.HtmlMediaElementShim.create(a, b)
}, mejs.HtmlMediaElementShim = {
    create: function (a, b) {
        var c, d, e = mejs.MediaElementDefaults, f = "string" == typeof a ? document.getElementById(a) : a,
            g = f.tagName.toLowerCase(), h = "audio" === g || "video" === g,
            i = h ? f.getAttribute("src") : f.getAttribute("href"), j = f.getAttribute("poster"),
            k = f.getAttribute("autoplay"), l = f.getAttribute("preload"), m = f.getAttribute("controls");
        for (d in b) e[d] = b[d];
        return i = "undefined" == typeof i || null === i || "" == i ? null : i, j = "undefined" == typeof j || null === j ? "" : j, l = "undefined" == typeof l || null === l || "false" === l ? "none" : l, k = !("undefined" == typeof k || null === k || "false" === k), m = !("undefined" == typeof m || null === m || "false" === m), c = this.determinePlayback(f, e, mejs.MediaFeatures.supportsMediaTag, h, i), c.url = null !== c.url ? mejs.Utility.absolutizeUrl(c.url) : "", "native" == c.method ? (mejs.MediaFeatures.isBustedAndroid && (f.src = c.url, f.addEventListener("click", function () {
            f.play()
        }, !1)), this.updateNative(c, e, k, l)) : "" !== c.method ? this.createPlugin(c, e, j, k, l, m) : (this.createErrorMessage(c, e, j), this)
    }, determinePlayback: function (a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, n, o, p, q = [],
            r = {method: "", url: "", htmlMediaElement: a, isVideo: "audio" != a.tagName.toLowerCase()};
        if ("undefined" != typeof b.type && "" !== b.type) if ("string" == typeof b.type) q.push({
            type: b.type,
            url: e
        }); else for (f = 0; f < b.type.length; f++) q.push({
            type: b.type[f],
            url: e
        }); else if (null !== e) k = this.formatType(e, a.getAttribute("type")), q.push({
            type: k,
            url: e
        }); else for (f = 0; f < a.childNodes.length; f++) j = a.childNodes[f], 1 == j.nodeType && "source" == j.tagName.toLowerCase() && (e = j.getAttribute("src"), k = this.formatType(e, j.getAttribute("type")), p = j.getAttribute("media"), (!p || !window.matchMedia || window.matchMedia && window.matchMedia(p).matches) && q.push({
            type: k,
            url: e
        }));
        if (!d && q.length > 0 && null !== q[0].url && this.getTypeFromFile(q[0].url).indexOf("audio") > -1 && (r.isVideo = !1), mejs.MediaFeatures.isBustedAndroid && (a.canPlayType = function (a) {
            return null !== a.match(/video\/(mp4|m4v)/gi) ? "maybe" : ""
        }), mejs.MediaFeatures.isChromium && (a.canPlayType = function (a) {
            return null !== a.match(/video\/(webm|ogv|ogg)/gi) ? "maybe" : ""
        }), c && ("auto" === b.mode || "auto_plugin" === b.mode || "native" === b.mode) && (!mejs.MediaFeatures.isBustedNativeHTTPS || b.httpsBasicAuthSite !== !0)) {
            for (d || (o = document.createElement(r.isVideo ? "video" : "audio"), a.parentNode.insertBefore(o, a), a.style.display = "none", r.htmlMediaElement = a = o), f = 0; f < q.length; f++) if ("video/m3u8" == q[f].type || "" !== a.canPlayType(q[f].type).replace(/no/, "") || "" !== a.canPlayType(q[f].type.replace(/mp3/, "mpeg")).replace(/no/, "") || "" !== a.canPlayType(q[f].type.replace(/m4a/, "mp4")).replace(/no/, "")) {
                r.method = "native", r.url = q[f].url;
                break
            }
            if ("native" === r.method && (null !== r.url && (a.src = r.url), "auto_plugin" !== b.mode)) return r
        }
        if ("auto" === b.mode || "auto_plugin" === b.mode || "shim" === b.mode) for (f = 0; f < q.length; f++) for (k = q[f].type, g = 0; g < b.plugins.length; g++) for (l = b.plugins[g], m = mejs.plugins[l], h = 0; h < m.length; h++) if (n = m[h], null == n.version || mejs.PluginDetector.hasPluginVersion(l, n.version)) for (i = 0; i < n.types.length; i++) if (k.toLowerCase() == n.types[i].toLowerCase()) return r.method = l, r.url = q[f].url, r;
        return "auto_plugin" === b.mode && "native" === r.method ? r : ("" === r.method && q.length > 0 && (r.url = q[0].url), r)
    }, formatType: function (a, b) {
        return a && !b ? this.getTypeFromFile(a) : b && ~b.indexOf(";") ? b.substr(0, b.indexOf(";")) : b
    }, getTypeFromFile: function (a) {
        a = a.split("?")[0];
        var b = a.substring(a.lastIndexOf(".") + 1).toLowerCase(),
            c = /(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(b) ? "video/" : "audio/";
        return this.getTypeFromExtension(b, c)
    }, getTypeFromExtension: function (a, b) {
        switch (b = b || "", a) {
            case"mp4":
            case"m4v":
            case"m4a":
            case"f4v":
            case"f4a":
                return b + "mp4";
            case"flv":
                return b + "x-flv";
            case"webm":
            case"webma":
            case"webmv":
                return b + "webm";
            case"ogg":
            case"oga":
            case"ogv":
                return b + "ogg";
            case"m3u8":
                return "application/x-mpegurl";
            case"ts":
                return b + "mp2t";
            default:
                return b + a
        }
    }, createErrorMessage: function (a, b, c) {
        var d = a.htmlMediaElement, e = document.createElement("div"), f = b.customError;
        e.className = "me-cannotplay";
        try {
            e.style.width = d.width + "px", e.style.height = d.height + "px"
        } catch (g) {
        }
        f || (f = '<a href="' + a.url + '">', "" !== c && (f += '<img src="' + c + '" width="100%" height="100%" alt="" />'), f += "<span>" + mejs.i18n.t("Download File") + "</span></a>"), e.innerHTML = f, d.parentNode.insertBefore(e, d), d.style.display = "none", b.error(d)
    }, createPlugin: function (a, b, c, d, e, f) {
        var g, h, i, j = a.htmlMediaElement, k = 1, l = 1, m = "me_" + a.method + "_" + mejs.meIndex++,
            n = new mejs.PluginMediaElement(m, a.method, a.url), o = document.createElement("div");
        n.tagName = j.tagName;
        for (var p = 0; p < j.attributes.length; p++) {
            var q = j.attributes[p];
            q.specified && n.setAttribute(q.name, q.value)
        }
        for (h = j.parentNode; null !== h && null != h.tagName && "body" !== h.tagName.toLowerCase() && null != h.parentNode && null != h.parentNode.tagName && null != h.parentNode.constructor && "ShadowRoot" === h.parentNode.constructor.name;) {
            if ("p" === h.parentNode.tagName.toLowerCase()) {
                h.parentNode.parentNode.insertBefore(h, h.parentNode);
                break
            }
            h = h.parentNode
        }
        switch (a.isVideo ? (k = b.pluginWidth > 0 ? b.pluginWidth : b.videoWidth > 0 ? b.videoWidth : null !== j.getAttribute("width") ? j.getAttribute("width") : b.defaultVideoWidth, l = b.pluginHeight > 0 ? b.pluginHeight : b.videoHeight > 0 ? b.videoHeight : null !== j.getAttribute("height") ? j.getAttribute("height") : b.defaultVideoHeight, k = mejs.Utility.encodeUrl(k), l = mejs.Utility.encodeUrl(l)) : b.enablePluginDebug && (k = 320, l = 240), n.success = b.success, mejs.MediaPluginBridge.registerPluginElement(m, n, j), o.className = "me-plugin", o.id = m + "_container", a.isVideo ? j.parentNode.insertBefore(o, j) : document.body.insertBefore(o, document.body.childNodes[0]), i = ["id=" + m, "jsinitfunction=mejs.MediaPluginBridge.initPlugin", "jscallbackfunction=mejs.MediaPluginBridge.fireEvent", "isvideo=" + (a.isVideo ? "true" : "false"), "autoplay=" + (d ? "true" : "false"), "preload=" + e, "width=" + k, "startvolume=" + b.startVolume, "timerrate=" + b.timerRate, "flashstreamer=" + b.flashStreamer, "height=" + l, "pseudostreamstart=" + b.pseudoStreamingStartQueryParam], null !== a.url && ("flash" == a.method ? i.push("file=" + mejs.Utility.encodeUrl(a.url)) : i.push("file=" + a.url)), b.enablePluginDebug && i.push("debug=true"), b.enablePluginSmoothing && i.push("smoothing=true"), b.enablePseudoStreaming && i.push("pseudostreaming=true"), f && i.push("controls=true"), b.pluginVars && (i = i.concat(b.pluginVars)), a.method) {
            case"silverlight":
                o.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + m + '" name="' + m + '" width="' + k + '" height="' + l + '" class="mejs-shim"><param name="initParams" value="' + i.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + b.pluginPath + b.silverlightName + '" /></object>';
                break;
            case"flash":
                mejs.MediaFeatures.isIE ? (g = document.createElement("div"), o.appendChild(g), g.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + m + '" width="' + k + '" height="' + l + '" class="mejs-shim"><param name="movie" value="' + b.pluginPath + b.flashName + "?x=" + new Date + '" /><param name="flashvars" value="' + i.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + b.flashScriptAccess + '" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>') : o.innerHTML = '<embed id="' + m + '" name="' + m + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="' + b.flashScriptAccess + '" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + b.pluginPath + b.flashName + '" flashvars="' + i.join("&") + '" width="' + k + '" height="' + l + '" scale="default"class="mejs-shim"></embed>';
                break;
            case"youtube":
                var r;
                -1 != a.url.lastIndexOf("youtu.be") ? (r = a.url.substr(a.url.lastIndexOf("/") + 1), -1 != r.indexOf("?") && (r = r.substr(0, r.indexOf("?")))) : r = a.url.substr(a.url.lastIndexOf("=") + 1), youtubeSettings = {
                    container: o,
                    containerId: o.id,
                    pluginMediaElement: n,
                    pluginId: m,
                    videoId: r,
                    height: l,
                    width: k
                }, mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) ? mejs.YouTubeApi.createFlash(youtubeSettings, b) : mejs.YouTubeApi.enqueueIframe(youtubeSettings);
                break;
            case"vimeo":
                var s = m + "_player";
                if (n.vimeoid = a.url.substr(a.url.lastIndexOf("/") + 1), o.innerHTML = '<iframe src="//player.vimeo.com/video/' + n.vimeoid + "?api=1&portrait=0&byline=0&title=0&player_id=" + s + '" width="' + k + '" height="' + l + '" frameborder="0" class="mejs-shim" id="' + s + '" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>', "function" == typeof $f) {
                    var t = $f(o.childNodes[0]);
                    t.addEvent("ready", function () {
                        function a(a, b, c, d) {
                            var e = {type: c, target: b};
                            "timeupdate" == c && (b.currentTime = e.currentTime = d.seconds, b.duration = e.duration = d.duration), b.dispatchEvent(e)
                        }

                        t.playVideo = function () {
                            t.api("play")
                        }, t.stopVideo = function () {
                            t.api("unload")
                        }, t.pauseVideo = function () {
                            t.api("pause")
                        }, t.seekTo = function (a) {
                            t.api("seekTo", a)
                        }, t.setVolume = function (a) {
                            t.api("setVolume", a)
                        }, t.setMuted = function (a) {
                            a ? (t.lastVolume = t.api("getVolume"), t.api("setVolume", 0)) : (t.api("setVolume", t.lastVolume), delete t.lastVolume)
                        }, t.addEvent("play", function () {
                            a(t, n, "play"), a(t, n, "playing")
                        }), t.addEvent("pause", function () {
                            a(t, n, "pause")
                        }), t.addEvent("finish", function () {
                            a(t, n, "ended")
                        }), t.addEvent("playProgress", function (b) {
                            a(t, n, "timeupdate", b)
                        }), n.pluginElement = o, n.pluginApi = t, mejs.MediaPluginBridge.initPlugin(m)
                    })
                } else console.warn("You need to include froogaloop for vimeo to work")
        }
        return j.style.display = "none", j.removeAttribute("autoplay"), n
    }, updateNative: function (a, b, c, d) {
        var e, f = a.htmlMediaElement;
        for (e in mejs.HtmlMediaElement) f[e] = mejs.HtmlMediaElement[e];
        return b.success(f, f), f
    }
}, mejs.YouTubeApi = {
    isIframeStarted: !1, isIframeLoaded: !1, loadIframeApi: function () {
        if (!this.isIframeStarted) {
            var a = document.createElement("script");
            a.src = "//www.youtube.com/player_api";
            var b = document.getElementsByTagName("script")[0];
            b.parentNode.insertBefore(a, b), this.isIframeStarted = !0
        }
    }, iframeQueue: [], enqueueIframe: function (a) {
        this.isLoaded ? this.createIframe(a) : (this.loadIframeApi(), this.iframeQueue.push(a))
    }, createIframe: function (a) {
        var b = a.pluginMediaElement, c = new YT.Player(a.containerId, {
            height: a.height,
            width: a.width,
            videoId: a.videoId,
            playerVars: {controls: 0},
            events: {
                onReady: function () {
                    a.pluginMediaElement.pluginApi = c, mejs.MediaPluginBridge.initPlugin(a.pluginId), setInterval(function () {
                        mejs.YouTubeApi.createEvent(c, b, "timeupdate")
                    }, 250)
                }, onStateChange: function (a) {
                    mejs.YouTubeApi.handleStateChange(a.data, c, b)
                }
            }
        })
    }, createEvent: function (a, b, c) {
        var d = {type: c, target: b};
        if (a && a.getDuration) {
            b.currentTime = d.currentTime = a.getCurrentTime(), b.duration = d.duration = a.getDuration(), d.paused = b.paused, d.ended = b.ended, d.muted = a.isMuted(), d.volume = a.getVolume() / 100, d.bytesTotal = a.getVideoBytesTotal(), d.bufferedBytes = a.getVideoBytesLoaded();
            var e = d.bufferedBytes / d.bytesTotal * d.duration;
            d.target.buffered = d.buffered = {
                start: function (a) {
                    return 0
                }, end: function (a) {
                    return e
                }, length: 1
            }
        }
        b.dispatchEvent(d)
    }, iFrameReady: function () {
        for (this.isLoaded = !0, this.isIframeLoaded = !0; this.iframeQueue.length > 0;) {
            var a = this.iframeQueue.pop();
            this.createIframe(a)
        }
    }, flashPlayers: {}, createFlash: function (a) {
        this.flashPlayers[a.pluginId] = a;
        var b,
            c = "//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + a.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
        mejs.MediaFeatures.isIE ? (b = document.createElement("div"), a.container.appendChild(b), b.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + a.pluginId + '" width="' + a.width + '" height="' + a.height + '" class="mejs-shim"><param name="movie" value="' + c + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + options.flashScriptAccess + '" /><param name="allowFullScreen" value="true" /></object>') : a.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + a.pluginId + '" data="' + c + '" width="' + a.width + '" height="' + a.height + '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="' + options.flashScriptAccess + '"><param name="wmode" value="transparent"></object>'
    }, flashReady: function (a) {
        var b = this.flashPlayers[a], c = document.getElementById(a), d = b.pluginMediaElement;
        d.pluginApi = d.pluginElement = c, mejs.MediaPluginBridge.initPlugin(a), c.cueVideoById(b.videoId);
        var e = b.containerId + "_callback";
        window[e] = function (a) {
            mejs.YouTubeApi.handleStateChange(a, c, d)
        }, c.addEventListener("onStateChange", e), setInterval(function () {
            mejs.YouTubeApi.createEvent(c, d, "timeupdate")
        }, 250), mejs.YouTubeApi.createEvent(c, d, "canplay")
    }, handleStateChange: function (a, b, c) {
        switch (a) {
            case-1:
                c.paused = !0, c.ended = !0, mejs.YouTubeApi.createEvent(b, c, "loadedmetadata");
                break;
            case 0:
                c.paused = !1, c.ended = !0, mejs.YouTubeApi.createEvent(b, c, "ended");
                break;
            case 1:
                c.paused = !1, c.ended = !1, mejs.YouTubeApi.createEvent(b, c, "play"), mejs.YouTubeApi.createEvent(b, c, "playing");
                break;
            case 2:
                c.paused = !0, c.ended = !1, mejs.YouTubeApi.createEvent(b, c, "pause");
                break;
            case 3:
                mejs.YouTubeApi.createEvent(b, c, "progress");
                break;
            case 5:
        }
    }
}, window.onYouTubePlayerAPIReady = function () {
    mejs.YouTubeApi.iFrameReady()
}, window.onYouTubePlayerReady = function (a) {
    mejs.YouTubeApi.flashReady(a)
}, window.mejs = mejs, window.MediaElement = mejs.MediaElement, function (a, b, c) {
    "use strict";
    var d = {
        locale: {language: b.i18n && b.i18n.locale.language || "", strings: b.i18n && b.i18n.locale.strings || {}},
        ietf_lang_regex: /^(x\-)?[a-z]{2,}(\-\w{2,})?(\-\w{2,})?$/,
        methods: {}
    };
    d.getLanguage = function () {
        var a = d.locale.language || window.navigator.userLanguage || window.navigator.language;
        return d.ietf_lang_regex.exec(a) ? a : null
    }, "undefined" != typeof mejsL10n && (d.locale.language = mejsL10n.language), d.methods.checkPlain = function (a) {
        var b, c, d = {"&": "&amp;", '"': "&quot;", "<": "&lt;", ">": "&gt;"};
        a = String(a);
        for (b in d) d.hasOwnProperty(b) && (c = new RegExp(b, "g"), a = a.replace(c, d[b]));
        return a
    }, d.methods.t = function (a, b) {
        return d.locale.strings && d.locale.strings[b.context] && d.locale.strings[b.context][a] && (a = d.locale.strings[b.context][a]), d.methods.checkPlain(a)
    }, d.t = function (a, b) {
        if ("string" == typeof a && a.length > 0) {
            var c = d.getLanguage();
            return b = b || {context: c}, d.methods.t(a, b)
        }
        throw{name: "InvalidArgumentException", message: "First argument is either not a string or empty."}
    }, b.i18n = d
}(document, mejs), function (a, b) {
    "use strict";
    "undefined" != typeof mejsL10n && (a[mejsL10n.language] = mejsL10n.strings)
}(mejs.i18n.locale.strings);
