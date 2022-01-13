function(e) {
    "use strict";

    function t(t, i) {
        this.$target = e(t), this.opts = e.extend({}, l, i, this.$target.data()), void 0 === this.isOpen && this._init()
    }
    var i, n, o, r, s, a, l = {
        loadingNotice: "Загрузка фото...",
        errorNotice: "Фото не удалось загрузить",
        errorDuration: 2500,
        linkAttribute: "href",
        preventClicks: !0,
        beforeShow: e.noop,
        beforeHide: e.noop,
        onShow: e.noop,
        onHide: e.noop,
        onMove: e.noop
    };
    t.prototype._init = function() {
        this.$link = this.$target.find("a"), this.$image = this.$target.find("img"), this.$flyout = e('<div class="easyzoom-flyout" />'), this.$notice = e('<div class="easyzoom-notice" />'), this.$target.on({
            "mousemove.easyzoom touchmove.easyzoom": e.proxy(this._onMove, this),
            "mouseleave.easyzoom touchend.easyzoom": e.proxy(this._onLeave, this),
            "click.easyzoom touchstart.easyzoom": e.proxy(this._onEnter, this)
        }), this.opts.preventClicks && this.$target.on("click.easyzoom", function(e) {
            e.preventDefault()
        })
    }, t.prototype.show = function(e, t) {
        var s, a, l, c, u = this;
        if (!1 !== this.opts.beforeShow.call(this)) {
            if (!this.isReady) return this._loadImage(this.$link.attr(this.opts.linkAttribute), function() {
                (u.isMouseOver || !t) && u.show(e)
            });
            this.$target.append(this.$flyout), s = this.$target.width(), a = this.$target.height(), l = this.$flyout.width(), c = this.$flyout.height(), i = this.$zoom.width() - l, n = this.$zoom.height() - c, 0 > i && (i = 0), 0 > n && (n = 0), o = i / s, r = n / a, this.isOpen = !0, this.opts.onShow.call(this), e && this._move(e)
        }
    }, t.prototype._onEnter = function(e) {
        var t = e.originalEvent.touches;
        this.isMouseOver = !0, t && 1 != t.length || (e.preventDefault(), this.show(e, !0))
    }, t.prototype._onMove = function(e) {
        this.isOpen && (e.preventDefault(), this._move(e))
    }, t.prototype._onLeave = function() {
        this.isMouseOver = !1, this.isOpen && this.hide()
    }, t.prototype._onLoad = function(e) {
        e.currentTarget.width && (this.isReady = !0, this.$notice.detach(), this.$flyout.html(this.$zoom), this.$target.removeClass("is-loading").addClass("is-ready"), e.data.call && e.data())
    }, t.prototype._onError = function() {
        var e = this;
        this.$notice.text(this.opts.errorNotice), this.$target.removeClass("is-loading").addClass("is-error"), this.detachNotice = setTimeout(function() {
            e.$notice.detach(), e.detachNotice = null
        }, this.opts.errorDuration)
    }, t.prototype._loadImage = function(t, i) {
        var n = new Image;
        this.$target.addClass("is-loading").append(this.$notice.text(this.opts.loadingNotice)), this.$zoom = e(n).on("error", e.proxy(this._onError, this)).on("load", i, e.proxy(this._onLoad, this)), n.style.position = "absolute", n.src = t
    }, t.prototype._move = function(e) {
        if (0 === e.type.indexOf("touch")) {
            var t = e.touches || e.originalEvent.touches;
            s = t[0].pageX, a = t[0].pageY
        } else s = e.pageX || s, a = e.pageY || a;
        var l = this.$target.offset(),
            c = a - l.top,
            u = s - l.left,
            d = Math.ceil(c * r),
            p = Math.ceil(u * o);
        if (0 > p || 0 > d || p > i || d > n) this.hide();
        else {
            var f = -1 * d,
                h = -1 * p;
            this.$zoom.css({
                top: f,
                left: h
            }), this.opts.onMove.call(this, f, h)
        }
    }, t.prototype.hide = function() {
        this.isOpen && !1 !== this.opts.beforeHide.call(this) && (this.$flyout.detach(), this.isOpen = !1, this.opts.onHide.call(this))
    }, t.prototype.swap = function(t, i, n) {
        this.hide(), this.isReady = !1, this.detachNotice && clearTimeout(this.detachNotice), this.$notice.parent().length && this.$notice.detach(), this.$target.removeClass("is-loading is-ready is-error"), this.$image.attr({
            src: t,
            srcset: e.isArray(n) ? n.join() : n
        }), this.$link.attr(this.opts.linkAttribute, i)
    }, t.prototype.teardown = function() {
        this.hide(), this.$target.off(".easyzoom").removeClass("is-loading is-ready is-error"), this.detachNotice && clearTimeout(this.detachNotice), delete this.$link, delete this.$zoom, delete this.$image, delete this.$notice, delete this.$flyout, delete this.isOpen, delete this.isReady
    }, e.fn.easyZoom = function(i) {
        return this.each(function() {
            var n = e.data(this, "easyZoom");
            n ? void 0 === n.isOpen && n._init() : e.data(this, "easyZoom", new t(this, i))
        })
    }, "function" == typeof define && define.amd ? define(function() {
        return t
    }) : "undefined" != typeof module && module.exports && (module.exports = t)
}(jQuery);