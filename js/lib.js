! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e) {
        var t = !!e && "length" in e && e.length,
            i = oe.type(e);
        return "function" !== i && !oe.isWindow(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function n(e, t, i) {
        if (oe.isFunction(t)) return oe.grep(e, function(e, n) {
            return !!t.call(e, n, e) !== i
        });
        if (t.nodeType) return oe.grep(e, function(e) {
            return e === t !== i
        });
        if ("string" == typeof t) {
            if (he.test(t)) return oe.filter(t, e, i);
            t = oe.filter(t, e)
        }
        return oe.grep(e, function(e) {
            return J.call(t, e) > -1 !== i
        })
    }

    function o(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function r(e) {
        var t = {};
        return oe.each(e.match(we) || [], function(e, i) {
            t[i] = !0
        }), t
    }

    function s() {
        G.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s), oe.ready()
    }

    function a() {
        this.expando = oe.expando + a.uid++
    }

    function l(e, t, i) {
        var n;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(Ee, "-$&").toLowerCase(), "string" == typeof(i = e.getAttribute(n))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : Se.test(i) ? oe.parseJSON(i) : i)
                } catch (e) {}
                Ce.set(e, t, i)
            } else i = void 0;
        return i
    }

    function c(e, t, i, n) {
        var o, r = 1,
            s = 20,
            a = n ? function() {
                return n.cur()
            } : function() {
                return oe.css(e, t, "")
            },
            l = a(),
            c = i && i[3] || (oe.cssNumber[t] ? "" : "px"),
            u = (oe.cssNumber[t] || "px" !== c && +l) && Ae.exec(oe.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3], i = i || [], u = +l || 1;
            do {
                r = r || ".5", u /= r, oe.style(e, t, u + c)
            } while (r !== (r = a() / l) && 1 !== r && --s)
        }
        return i && (u = +u || +l || 0, o = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = o)), o
    }

    function u(e, t) {
        var i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], i) : i
    }

    function d(e, t) {
        for (var i = 0, n = e.length; n > i; i++) ke.set(e[i], "globalEval", !t || ke.get(t[i], "globalEval"))
    }

    function p(e, t, i, n, o) {
        for (var r, s, a, l, c, p, f = t.createDocumentFragment(), h = [], m = 0, v = e.length; v > m; m++)
            if ((r = e[m]) || 0 === r)
                if ("object" === oe.type(r)) oe.merge(h, r.nodeType ? [r] : r);
                else if (Le.test(r)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (De.exec(r) || ["", ""])[1].toLowerCase(), l = He[a] || He._default, s.innerHTML = l[1] + oe.htmlPrefilter(r) + l[2], p = l[0]; p--;) s = s.lastChild;
            oe.merge(h, s.childNodes), s = f.firstChild, s.textContent = ""
        } else h.push(t.createTextNode(r));
        for (f.textContent = "", m = 0; r = h[m++];)
            if (n && oe.inArray(r, n) > -1) o && o.push(r);
            else if (c = oe.contains(r.ownerDocument, r), s = u(f.appendChild(r), "script"), c && d(s), i)
            for (p = 0; r = s[p++];) Ne.test(r.type || "") && i.push(r);
        return f
    }

    function f() {
        return !0
    }

    function h() {
        return !1
    }

    function m() {
        try {
            return G.activeElement
        } catch (e) {}
    }

    function v(e, t, i, n, o, r) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof i && (n = n || i, i = void 0);
            for (a in t) v(e, a, i, n, t[a], r);
            return e
        }
        if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = h;
        else if (!o) return e;
        return 1 === r && (s = o, o = function(e) {
            return oe().off(e), s.apply(this, arguments)
        }, o.guid = s.guid || (s.guid = oe.guid++)), e.each(function() {
            oe.event.add(this, t, o, n, i)
        })
    }

    function g(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function w(e) {
        var t = Re.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function b(e, t) {
        var i, n, o, r, s, a, l, c;
        if (1 === t.nodeType) {
            if (ke.hasData(e) && (r = ke.access(e), s = ke.set(t, r), c = r.events)) {
                delete s.handle, s.events = {};
                for (o in c)
                    for (i = 0, n = c[o].length; n > i; i++) oe.event.add(t, o, c[o][i])
            }
            Ce.hasData(e) && (a = Ce.access(e), l = oe.extend({}, a), Ce.set(t, l))
        }
    }

    function T(e, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && Ie.test(e.type) ? t.checked = e.checked : ("input" === i || "textarea" === i) && (t.defaultValue = e.defaultValue)
    }

    function x(e, t, i, n) {
        t = K.apply([], t);
        var o, r, s, a, l, c, d = 0,
            f = e.length,
            h = f - 1,
            m = t[0],
            v = oe.isFunction(m);
        if (v || f > 1 && "string" == typeof m && !ne.checkClone && Fe.test(m)) return e.each(function(o) {
            var r = e.eq(o);
            v && (t[0] = m.call(this, o, r.html())), x(r, t, i, n)
        });
        if (f && (o = p(t, e[0].ownerDocument, !1, e, n), r = o.firstChild, 1 === o.childNodes.length && (o = r), r || n)) {
            for (s = oe.map(u(o, "script"), y), a = s.length; f > d; d++) l = o, d !== h && (l = oe.clone(l, !0, !0), a && oe.merge(s, u(l, "script"))), i.call(e[d], l, d);
            if (a)
                for (c = s[s.length - 1].ownerDocument, oe.map(s, w), d = 0; a > d; d++) l = s[d], Ne.test(l.type || "") && !ke.access(l, "globalEval") && oe.contains(c, l) && (l.src ? oe._evalUrl && oe._evalUrl(l.src) : oe.globalEval(l.textContent.replace(We, "")))
        }
        return e
    }

    function k(e, t, i) {
        for (var n, o = t ? oe.filter(t, e) : e, r = 0; null != (n = o[r]); r++) i || 1 !== n.nodeType || oe.cleanData(u(n)), n.parentNode && (i && oe.contains(n.ownerDocument, n) && d(u(n, "script")), n.parentNode.removeChild(n));
        return e
    }

    function C(e, t) {
        var i = oe(t.createElement(e)).appendTo(t.body),
            n = oe.css(i[0], "display");
        return i.detach(), n
    }

    function S(e) {
        var t = G,
            i = Xe[e];
        return i || (i = C(e, t), "none" !== i && i || (Be = (Be || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Be[0].contentDocument, t.write(), t.close(), i = C(e, t), Be.detach()), Xe[e] = i), i
    }

    function E(e, t, i) {
        var n, o, r, s, a = e.style;
        return i = i || Ve(e), s = i ? i.getPropertyValue(t) || i[t] : void 0, "" !== s && void 0 !== s || oe.contains(e.ownerDocument, e) || (s = oe.style(e, t)), i && !ne.pixelMarginRight() && Ue.test(s) && Ye.test(t) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r), void 0 !== s ? s + "" : s
    }

    function $(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function A(e) {
        if (e in tt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), i = et.length; i--;)
            if ((e = et[i] + t) in tt) return e
    }

    function O(e, t, i) {
        var n = Ae.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }

    function P(e, t, i, n, o) {
        for (var r = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === i && (s += oe.css(e, i + Oe[r], !0, o)), n ? ("content" === i && (s -= oe.css(e, "padding" + Oe[r], !0, o)), "margin" !== i && (s -= oe.css(e, "border" + Oe[r] + "Width", !0, o))) : (s += oe.css(e, "padding" + Oe[r], !0, o), "padding" !== i && (s += oe.css(e, "border" + Oe[r] + "Width", !0, o)));
        return s
    }

    function I(t, i, n) {
        var o = !0,
            r = "width" === i ? t.offsetWidth : t.offsetHeight,
            s = Ve(t),
            a = "border-box" === oe.css(t, "boxSizing", !1, s);
        if (G.msFullscreenElement && e.top !== e && t.getClientRects().length && (r = Math.round(100 * t.getBoundingClientRect()[i])), 0 >= r || null == r) {
            if (r = E(t, i, s), (0 > r || null == r) && (r = t.style[i]), Ue.test(r)) return r;
            o = a && (ne.boxSizingReliable() || r === t.style[i]), r = parseFloat(r) || 0
        }
        return r + P(t, i, n || (a ? "border" : "content"), o, s) + "px"
    }

    function D(e, t) {
        for (var i, n, o, r = [], s = 0, a = e.length; a > s; s++) n = e[s], n.style && (r[s] = ke.get(n, "olddisplay"), i = n.style.display, t ? (r[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && Pe(n) && (r[s] = ke.access(n, "olddisplay", S(n.nodeName)))) : (o = Pe(n), "none" === i && o || ke.set(n, "olddisplay", o ? i : oe.css(n, "display"))));
        for (s = 0; a > s; s++) n = e[s], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[s] || "" : "none"));
        return e
    }

    function N(e, t, i, n, o) {
        return new N.prototype.init(e, t, i, n, o)
    }

    function H() {
        return e.setTimeout(function() {
            it = void 0
        }), it = oe.now()
    }

    function L(e, t) {
        var i, n = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > n; n += 2 - t) i = Oe[n], o["margin" + i] = o["padding" + i] = e;
        return t && (o.opacity = o.width = e), o
    }

    function j(e, t, i) {
        for (var n, o = (q.tweeners[t] || []).concat(q.tweeners["*"]), r = 0, s = o.length; s > r; r++)
            if (n = o[r].call(i, t, e)) return n
    }

    function M(e, t, i) {
        var n, o, r, s, a, l, c, u = this,
            d = {},
            p = e.style,
            f = e.nodeType && Pe(e),
            h = ke.get(e, "fxshow");
        i.queue || (a = oe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, u.always(function() {
            u.always(function() {
                a.unqueued--, oe.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], c = oe.css(e, "display"), "inline" === ("none" === c ? ke.get(e, "olddisplay") || S(e.nodeName) : c) && "none" === oe.css(e, "float") && (p.display = "inline-block")), i.overflow && (p.overflow = "hidden", u.always(function() {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in t)
            if (o = t[n], ot.exec(o)) {
                if (delete t[n], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                    if ("show" !== o || !h || void 0 === h[n]) continue;
                    f = !0
                }
                d[n] = h && h[n] || oe.style(e, n)
            } else c = void 0;
        if (oe.isEmptyObject(d)) "inline" === ("none" === c ? S(e.nodeName) : c) && (p.display = c);
        else {
            h ? "hidden" in h && (f = h.hidden) : h = ke.access(e, "fxshow", {}), r && (h.hidden = !f), f ? oe(e).show() : u.done(function() {
                oe(e).hide()
            }), u.done(function() {
                var t;
                ke.remove(e, "fxshow");
                for (t in d) oe.style(e, t, d[t])
            });
            for (n in d) s = j(f ? h[n] : 0, n, u), n in h || (h[n] = s.start, f && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function z(e, t) {
        var i, n, o, r, s;
        for (i in e)
            if (n = oe.camelCase(i), o = t[n], r = e[i], oe.isArray(r) && (o = r[1], r = e[i] = r[0]), i !== n && (e[n] = r, delete e[i]), (s = oe.cssHooks[n]) && "expand" in s) {
                r = s.expand(r), delete e[n];
                for (i in r) i in e || (e[i] = r[i], t[i] = o)
            } else t[n] = o
    }

    function q(e, t, i) {
        var n, o, r = 0,
            s = q.prefilters.length,
            a = oe.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = it || H(), i = Math.max(0, c.startTime + c.duration - t), n = i / c.duration || 0, r = 1 - n, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(r);
                return a.notifyWith(e, [c, r, i]), 1 > r && l ? i : (a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: oe.extend({}, t),
                opts: oe.extend(!0, {
                    specialEasing: {},
                    easing: oe.easing._default
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: it || H(),
                duration: i.duration,
                tweens: [],
                createTween: function(t, i) {
                    var n = oe.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(t) {
                    var i = 0,
                        n = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n > i; i++) c.tweens[i].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (z(u, c.opts.specialEasing); s > r; r++)
            if (n = q.prefilters[r].call(c, e, u, c.opts)) return oe.isFunction(n.stop) && (oe._queueHooks(c.elem, c.opts.queue).stop = oe.proxy(n.stop, n)), n;
        return oe.map(u, j, c), oe.isFunction(c.opts.start) && c.opts.start.call(e, c), oe.fx.timer(oe.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function _(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function F(e) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, o = 0,
                r = t.toLowerCase().match(we) || [];
            if (oe.isFunction(i))
                for (; n = r[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function R(e, t, i, n) {
        function o(a) {
            var l;
            return r[a] = !0, oe.each(e[a] || [], function(e, a) {
                var c = a(t, i, n);
                return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var r = {},
            s = e === kt;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function W(e, t) {
        var i, n, o = oe.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && oe.extend(!0, e, n), e
    }

    function B(e, t, i) {
        for (var n, o, r, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
        if (n)
            for (o in a)
                if (a[o] && a[o].test(n)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in i) r = l[0];
        else {
            for (o in i) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        return r ? (r !== l[0] && l.unshift(r), i[r]) : void 0
    }

    function X(e, t, i, n) {
        var o, r, s, a, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        for (r = u.shift(); r;)
            if (e.responseFields[r] && (i[e.responseFields[r]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (!(s = c[l + " " + r] || c["* " + r]))
                for (o in c)
                    if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                        !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                        break
                    }
            if (!0 !== s)
                if (s && e.throws) t = s(t);
                else try {
                    t = s(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: s ? e : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function Y(e, t, i, n) {
        var o;
        if (oe.isArray(t)) oe.each(t, function(t, o) {
            i || $t.test(e) ? n(e, o) : Y(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, i, n)
        });
        else if (i || "object" !== oe.type(t)) n(e, t);
        else
            for (o in t) Y(e + "[" + o + "]", t[o], i, n)
    }

    function U(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var V = [],
        G = e.document,
        Z = V.slice,
        K = V.concat,
        Q = V.push,
        J = V.indexOf,
        ee = {},
        te = ee.toString,
        ie = ee.hasOwnProperty,
        ne = {},
        oe = function(e, t) {
            return new oe.fn.init(e, t)
        },
        re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        se = /^-ms-/,
        ae = /-([\da-z])/gi,
        le = function(e, t) {
            return t.toUpperCase()
        };
    oe.fn = oe.prototype = {
        jquery: "2.2.1",
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function() {
            return Z.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Z.call(this)
        },
        pushStack: function(e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return oe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(oe.map(this, function(t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(Z.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                i = +e + (0 > e ? t : 0);
            return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: Q,
        sort: V.sort,
        splice: V.splice
    }, oe.extend = oe.fn.extend = function() {
        var e, t, i, n, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || oe.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (e = arguments[a]))
                for (t in e) i = s[t], n = e[t], s !== n && (c && n && (oe.isPlainObject(n) || (o = oe.isArray(n))) ? (o ? (o = !1, r = i && oe.isArray(i) ? i : []) : r = i && oe.isPlainObject(i) ? i : {}, s[t] = oe.extend(c, r, n)) : void 0 !== n && (s[t] = n));
        return s
    }, oe.extend({
        expando: "jQuery" + ("2.2.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === oe.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            return !("object" !== oe.type(e) || e.nodeType || oe.isWindow(e) || e.constructor && !ie.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, i = eval;
            (e = oe.trim(e)) && (1 === e.indexOf("use strict") ? (t = G.createElement("script"), t.text = e, G.head.appendChild(t).parentNode.removeChild(t)) : i(e))
        },
        camelCase: function(e) {
            return e.replace(se, "ms-").replace(ae, le)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, o = 0;
            if (i(e))
                for (n = e.length; n > o && !1 !== t.call(e[o], o, e[o]); o++);
            else
                for (o in e)
                    if (!1 === t.call(e[o], o, e[o])) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(re, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? oe.merge(n, "string" == typeof e ? [e] : e) : Q.call(n, e)), n
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : J.call(t, e, i)
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, o = e.length; i > n; n++) e[o++] = t[n];
            return e.length = o, e
        },
        grep: function(e, t, i) {
            for (var n = [], o = 0, r = e.length, s = !i; r > o; o++) !t(e[o], o) !== s && n.push(e[o]);
            return n
        },
        map: function(e, t, n) {
            var o, r, s = 0,
                a = [];
            if (i(e))
                for (o = e.length; o > s; s++) null != (r = t(e[s], s, n)) && a.push(r);
            else
                for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
            return K.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var i, n, o;
            return "string" == typeof t && (i = e[t], t = e, e = i), oe.isFunction(e) ? (n = Z.call(arguments, 2), o = function() {
                return e.apply(t || this, n.concat(Z.call(arguments)))
            }, o.guid = e.guid = e.guid || oe.guid++, o) : void 0
        },
        now: Date.now,
        support: ne
    }), "function" == typeof Symbol && (oe.fn[Symbol.iterator] = V[Symbol.iterator]), oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    });
    var ce = function(e) {
        function t(e, t, i, n) {
            var o, r, s, a, c, d, p, f, h = t && t.ownerDocument,
                m = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return i;
            if (!n && ((t ? t.ownerDocument || t : z) !== P && O(t), t = t || P, D)) {
                if (11 !== m && (d = me.exec(e)))
                    if (o = d[1]) {
                        if (9 === m) {
                            if (!(s = t.getElementById(o))) return i;
                            if (s.id === o) return i.push(s), i
                        } else if (h && (s = h.getElementById(o)) && j(t, s) && s.id === o) return i.push(s), i
                    } else {
                        if (d[2]) return Z.apply(i, t.getElementsByTagName(e)), i;
                        if ((o = d[3]) && w.getElementsByClassName && t.getElementsByClassName) return Z.apply(i, t.getElementsByClassName(o)), i
                    }
                if (w.qsa && !W[e + " "] && (!N || !N.test(e))) {
                    if (1 !== m) h = t, f = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(ge, "\\$&") : t.setAttribute("id", a = M), p = k(e), r = p.length, c = ue.test(a) ? "#" + a : "[id='" + a + "']"; r--;) p[r] = c + " " + u(p[r]);
                        f = p.join(","), h = ve.test(e) && l(t.parentNode) || t
                    }
                    if (f) try {
                        return Z.apply(i, h.querySelectorAll(f)), i
                    } catch (e) {} finally {
                        a === M && t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(re, "$1"), t, i, n)
        }

        function i() {
            function e(i, n) {
                return t.push(i + " ") > b.cacheLength && delete e[t.shift()], e[i + " "] = n
            }
            var t = [];
            return e
        }

        function n(e) {
            return e[M] = !0, e
        }

        function o(e) {
            var t = P.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t) {
            for (var i = e.split("|"), n = i.length; n--;) b.attrHandle[i[n]] = t
        }

        function s(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return n(function(t) {
                return t = +t, n(function(i, n) {
                    for (var o, r = e([], i.length, t), s = r.length; s--;) i[o = r[s]] && (i[o] = !(n[o] = i[o]))
                })
            })
        }

        function l(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function c() {}

        function u(e) {
            for (var t = 0, i = e.length, n = ""; i > t; t++) n += e[t].value;
            return n
        }

        function d(e, t, i) {
            var n = t.dir,
                o = i && "parentNode" === n,
                r = _++;
            return t.first ? function(t, i, r) {
                for (; t = t[n];)
                    if (1 === t.nodeType || o) return e(t, i, r)
            } : function(t, i, s) {
                var a, l, c, u = [q, r];
                if (s) {
                    for (; t = t[n];)
                        if ((1 === t.nodeType || o) && e(t, i, s)) return !0
                } else
                    for (; t = t[n];)
                        if (1 === t.nodeType || o) {
                            if (c = t[M] || (t[M] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), (a = l[n]) && a[0] === q && a[1] === r) return u[2] = a[2];
                            if (l[n] = u, u[2] = e(t, i, s)) return !0
                        }
            }
        }

        function p(e) {
            return e.length > 1 ? function(t, i, n) {
                for (var o = e.length; o--;)
                    if (!e[o](t, i, n)) return !1;
                return !0
            } : e[0]
        }

        function f(e, i, n) {
            for (var o = 0, r = i.length; r > o; o++) t(e, i[o], n);
            return n
        }

        function h(e, t, i, n, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; l > a; a++)(r = e[a]) && (!i || i(r, n, o)) && (s.push(r), c && t.push(a));
            return s
        }

        function m(e, t, i, o, r, s) {
            return o && !o[M] && (o = m(o)), r && !r[M] && (r = m(r, s)), n(function(n, s, a, l) {
                var c, u, d, p = [],
                    m = [],
                    v = s.length,
                    g = n || f(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !n && t ? g : h(g, p, e, a, l),
                    w = i ? r || (n ? e : v || o) ? [] : s : y;
                if (i && i(y, w, a, l), o)
                    for (c = h(w, m), o(c, [], a, l), u = c.length; u--;)(d = c[u]) && (w[m[u]] = !(y[m[u]] = d));
                if (n) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = w.length; u--;)(d = w[u]) && c.push(y[u] = d);
                            r(null, w = [], c, l)
                        }
                        for (u = w.length; u--;)(d = w[u]) && (c = r ? Q(n, d) : p[u]) > -1 && (n[c] = !(s[c] = d))
                    }
                } else w = h(w === s ? w.splice(v, w.length) : w), r ? r(null, s, w, l) : Z.apply(s, w)
            })
        }

        function v(e) {
            for (var t, i, n, o = e.length, r = b.relative[e[0].type], s = r || b.relative[" "], a = r ? 1 : 0, l = d(function(e) {
                    return e === t
                }, s, !0), c = d(function(e) {
                    return Q(t, e) > -1
                }, s, !0), f = [function(e, i, n) {
                    var o = !r && (n || i !== E) || ((t = i).nodeType ? l(e, i, n) : c(e, i, n));
                    return t = null, o
                }]; o > a; a++)
                if (i = b.relative[e[a].type]) f = [d(p(f), i)];
                else {
                    if (i = b.filter[e[a].type].apply(null, e[a].matches), i[M]) {
                        for (n = ++a; o > n && !b.relative[e[n].type]; n++);
                        return m(a > 1 && p(f), a > 1 && u(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(re, "$1"), i, n > a && v(e.slice(a, n)), o > n && v(e = e.slice(n)), o > n && u(e))
                    }
                    f.push(i)
                }
            return p(f)
        }

        function g(e, i) {
            var o = i.length > 0,
                r = e.length > 0,
                s = function(n, s, a, l, c) {
                    var u, d, p, f = 0,
                        m = "0",
                        v = n && [],
                        g = [],
                        y = E,
                        w = n || r && b.find.TAG("*", c),
                        T = q += null == y ? 1 : Math.random() || .1,
                        x = w.length;
                    for (c && (E = s === P || s || c); m !== x && null != (u = w[m]); m++) {
                        if (r && u) {
                            for (d = 0, s || u.ownerDocument === P || (O(u), a = !D); p = e[d++];)
                                if (p(u, s || P, a)) {
                                    l.push(u);
                                    break
                                }
                            c && (q = T)
                        }
                        o && ((u = !p && u) && f--, n && v.push(u))
                    }
                    if (f += m, o && m !== f) {
                        for (d = 0; p = i[d++];) p(v, g, s, a);
                        if (n) {
                            if (f > 0)
                                for (; m--;) v[m] || g[m] || (g[m] = V.call(l));
                            g = h(g)
                        }
                        Z.apply(l, g), c && !n && g.length > 0 && f + i.length > 1 && t.uniqueSort(l)
                    }
                    return c && (q = T, E = y), v
                };
            return o ? n(s) : s
        }
        var y, w, b, T, x, k, C, S, E, $, A, O, P, I, D, N, H, L, j, M = "sizzle" + 1 * new Date,
            z = e.document,
            q = 0,
            _ = 0,
            F = i(),
            R = i(),
            W = i(),
            B = function(e, t) {
                return e === t && (A = !0), 0
            },
            X = 1 << 31,
            Y = {}.hasOwnProperty,
            U = [],
            V = U.pop,
            G = U.push,
            Z = U.push,
            K = U.slice,
            Q = function(e, t) {
                for (var i = 0, n = e.length; n > i; i++)
                    if (e[i] === t) return i;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ie = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            ne = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
            oe = new RegExp(ee + "+", "g"),
            re = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            se = new RegExp("^" + ee + "*," + ee + "*"),
            ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            ce = new RegExp(ne),
            ue = new RegExp("^" + te + "$"),
            de = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + ne),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            },
            pe = /^(?:input|select|textarea|button)$/i,
            fe = /^h\d$/i,
            he = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ve = /[+~]/,
            ge = /'|\\/g,
            ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            we = function(e, t, i) {
                var n = "0x" + t - 65536;
                return n !== n || i ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            be = function() {
                O()
            };
        try {
            Z.apply(U = K.call(z.childNodes), z.childNodes), U[z.childNodes.length].nodeType
        } catch (e) {
            Z = {
                apply: U.length ? function(e, t) {
                    G.apply(e, K.call(t))
                } : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }
        w = t.support = {}, x = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, O = t.setDocument = function(e) {
            var t, i, n = e ? e.ownerDocument || e : z;
            return n !== P && 9 === n.nodeType && n.documentElement ? (P = n, I = P.documentElement, D = !x(P), (i = P.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", be, !1) : i.attachEvent && i.attachEvent("onunload", be)), w.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = o(function(e) {
                return e.appendChild(P.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = he.test(P.getElementsByClassName), w.getById = o(function(e) {
                return I.appendChild(e).id = M, !P.getElementsByName || !P.getElementsByName(M).length
            }), w.getById ? (b.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && D) {
                    var i = t.getElementById(e);
                    return i ? [i] : []
                }
            }, b.filter.ID = function(e) {
                var t = e.replace(ye, we);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete b.find.ID, b.filter.ID = function(e) {
                var t = e.replace(ye, we);
                return function(e) {
                    var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return i && i.value === t
                }
            }), b.find.TAG = w.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var i, n = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; i = r[o++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return r
            }, b.find.CLASS = w.getElementsByClassName && function(e, t) {
                return void 0 !== t.getElementsByClassName && D ? t.getElementsByClassName(e) : void 0
            }, H = [], N = [], (w.qsa = he.test(P.querySelectorAll)) && (o(function(e) {
                I.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || N.push("\\[" + ee + "*(?:value|" + J + ")"), e.querySelectorAll("[id~=" + M + "-]").length || N.push("~="), e.querySelectorAll(":checked").length || N.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || N.push(".#.+[+~]")
            }), o(function(e) {
                var t = P.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && N.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), N.push(",.*:")
            })), (w.matchesSelector = he.test(L = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && o(function(e) {
                w.disconnectedMatch = L.call(e, "div"), L.call(e, "[s!='']:x"), H.push("!=", ne)
            }), N = N.length && new RegExp(N.join("|")), H = H.length && new RegExp(H.join("|")), t = he.test(I.compareDocumentPosition), j = t || he.test(I.contains) ? function(e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e,
                    n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, B = t ? function(e, t) {
                if (e === t) return A = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !w.sortDetached && t.compareDocumentPosition(e) === i ? e === P || e.ownerDocument === z && j(z, e) ? -1 : t === P || t.ownerDocument === z && j(z, t) ? 1 : $ ? Q($, e) - Q($, t) : 0 : 4 & i ? -1 : 1)
            } : function(e, t) {
                if (e === t) return A = !0, 0;
                var i, n = 0,
                    o = e.parentNode,
                    r = t.parentNode,
                    a = [e],
                    l = [t];
                if (!o || !r) return e === P ? -1 : t === P ? 1 : o ? -1 : r ? 1 : $ ? Q($, e) - Q($, t) : 0;
                if (o === r) return s(e, t);
                for (i = e; i = i.parentNode;) a.unshift(i);
                for (i = t; i = i.parentNode;) l.unshift(i);
                for (; a[n] === l[n];) n++;
                return n ? s(a[n], l[n]) : a[n] === z ? -1 : l[n] === z ? 1 : 0
            }, P) : P
        }, t.matches = function(e, i) {
            return t(e, null, null, i)
        }, t.matchesSelector = function(e, i) {
            if ((e.ownerDocument || e) !== P && O(e), i = i.replace(le, "='$1']"), w.matchesSelector && D && !W[i + " "] && (!H || !H.test(i)) && (!N || !N.test(i))) try {
                var n = L.call(e, i);
                if (n || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {}
            return t(i, P, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== P && O(e), j(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== P && O(e);
            var i = b.attrHandle[t.toLowerCase()],
                n = i && Y.call(b.attrHandle, t.toLowerCase()) ? i(e, t, !D) : void 0;
            return void 0 !== n ? n : w.attributes || !D ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, i = [],
                n = 0,
                o = 0;
            if (A = !w.detectDuplicates, $ = !w.sortStable && e.slice(0), e.sort(B), A) {
                for (; t = e[o++];) t === e[o] && (n = i.push(o));
                for (; n--;) e.splice(i[n], 1)
            }
            return $ = null, e
        }, T = t.getText = function(e) {
            var t, i = "",
                n = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += T(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[n++];) i += T(t);
            return i
        }, b = t.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: de,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ye, we), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, i = !e[6] && e[2];
                    return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && ce.test(i) && (t = k(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ye, we).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = F[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && F(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, i, n) {
                    return function(o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === i : !i || (r += "", "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r.replace(oe, " ") + " ").indexOf(n) > -1 : "|=" === i && (r === n || r.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, i, n, o) {
                    var r = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === n && 0 === o ? function(e) {
                        return !!e.parentNode
                    } : function(t, i, l) {
                        var c, u, d, p, f, h, m = r !== s ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            g = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            w = !1;
                        if (v) {
                            if (r) {
                                for (; m;) {
                                    for (p = t; p = p[m];)
                                        if (a ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? v.firstChild : v.lastChild], s && y) {
                                for (p = v, d = p[M] || (p[M] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === q && c[1], w = f && c[2], p = f && v.childNodes[f]; p = ++f && p && p[m] || (w = f = 0) || h.pop();)
                                    if (1 === p.nodeType && ++w && p === t) {
                                        u[e] = [q, f, w];
                                        break
                                    }
                            } else if (y && (p = t, d = p[M] || (p[M] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === q && c[1], w = f), !1 === w)
                                for (;
                                    (p = ++f && p && p[m] || (w = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++w || (y && (d = p[M] || (p[M] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), u[e] = [q, w]), p !== t)););
                            return (w -= o) === n || w % n == 0 && w / n >= 0
                        }
                    }
                },
                PSEUDO: function(e, i) {
                    var o, r = b.pseudos[e] || b.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[M] ? r(i) : r.length > 1 ? (o = [e, e, "", i], b.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {
                        for (var n, o = r(e, i), s = o.length; s--;) n = Q(e, o[s]), e[n] = !(t[n] = o[s])
                    }) : function(e) {
                        return r(e, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: n(function(e) {
                    var t = [],
                        i = [],
                        o = C(e.replace(re, "$1"));
                    return o[M] ? n(function(e, t, i, n) {
                        for (var r, s = o(e, null, n, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                    }) : function(e, n, r) {
                        return t[0] = e, o(t, null, r, i), t[0] = null, !i.pop()
                    }
                }),
                has: n(function(e) {
                    return function(i) {
                        return t(e, i).length > 0
                    }
                }),
                contains: n(function(e) {
                    return e = e.replace(ye, we),
                        function(t) {
                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                        }
                }),
                lang: n(function(e) {
                    return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, we).toLowerCase(),
                        function(t) {
                            var i;
                            do {
                                if (i = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(e) {
                    return e === I
                },
                focus: function(e) {
                    return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return fe.test(e.nodeName)
                },
                input: function(e) {
                    return pe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: a(function() {
                    return [0]
                }),
                last: a(function(e, t) {
                    return [t - 1]
                }),
                eq: a(function(e, t, i) {
                    return [0 > i ? i + t : i]
                }),
                even: a(function(e, t) {
                    for (var i = 0; t > i; i += 2) e.push(i);
                    return e
                }),
                odd: a(function(e, t) {
                    for (var i = 1; t > i; i += 2) e.push(i);
                    return e
                }),
                lt: a(function(e, t, i) {
                    for (var n = 0 > i ? i + t : i; --n >= 0;) e.push(n);
                    return e
                }),
                gt: a(function(e, t, i) {
                    for (var n = 0 > i ? i + t : i; ++n < t;) e.push(n);
                    return e
                })
            }
        }, b.pseudos.nth = b.pseudos.eq;
        for (y in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[y] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(y);
        for (y in {
                submit: !0,
                reset: !0
            }) b.pseudos[y] = function(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }(y);
        return c.prototype = b.filters = b.pseudos, b.setFilters = new c, k = t.tokenize = function(e, i) {
            var n, o, r, s, a, l, c, u = R[e + " "];
            if (u) return i ? 0 : u.slice(0);
            for (a = e, l = [], c = b.preFilter; a;) {
                (!n || (o = se.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = ae.exec(a)) && (n = o.shift(), r.push({
                    value: n,
                    type: o[0].replace(re, " ")
                }), a = a.slice(n.length));
                for (s in b.filter) !(o = de[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({
                    value: n,
                    type: s,
                    matches: o
                }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length : a ? t.error(e) : R(e, l).slice(0)
        }, C = t.compile = function(e, t) {
            var i, n = [],
                o = [],
                r = W[e + " "];
            if (!r) {
                for (t || (t = k(e)), i = t.length; i--;) r = v(t[i]), r[M] ? n.push(r) : o.push(r);
                r = W(e, g(o, n)), r.selector = e
            }
            return r
        }, S = t.select = function(e, t, i, n) {
            var o, r, s, a, c, d = "function" == typeof e && e,
                p = !n && k(e = d.selector || e);
            if (i = i || [], 1 === p.length) {
                if (r = p[0] = p[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && w.getById && 9 === t.nodeType && D && b.relative[r[1].type]) {
                    if (!(t = (b.find.ID(s.matches[0].replace(ye, we), t) || [])[0])) return i;
                    d && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = de.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !b.relative[a = s.type]);)
                    if ((c = b.find[a]) && (n = c(s.matches[0].replace(ye, we), ve.test(r[0].type) && l(t.parentNode) || t))) {
                        if (r.splice(o, 1), !(e = n.length && u(r))) return Z.apply(i, n), i;
                        break
                    }
            }
            return (d || C(e, p))(n, t, !D, i, !t || ve.test(e) && l(t.parentNode) || t), i
        }, w.sortStable = M.split("").sort(B).join("") === M, w.detectDuplicates = !!A, O(), w.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(P.createElement("div"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(e, t, i) {
            return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || r("value", function(e, t, i) {
            return i || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || r(J, function(e, t, i) {
            var n;
            return i ? void 0 : !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), t
    }(e);
    oe.find = ce, oe.expr = ce.selectors, oe.expr[":"] = oe.expr.pseudos, oe.uniqueSort = oe.unique = ce.uniqueSort, oe.text = ce.getText, oe.isXMLDoc = ce.isXML, oe.contains = ce.contains;
    var ue = function(e, t, i) {
            for (var n = [], o = void 0 !== i;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && oe(e).is(i)) break;
                    n.push(e)
                }
            return n
        },
        de = function(e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        },
        pe = oe.expr.match.needsContext,
        fe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        he = /^.[^:#\[\.,]*$/;
    oe.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? oe.find.matchesSelector(n, e) ? [n] : [] : oe.find.matches(e, oe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, oe.fn.extend({
        find: function(e) {
            var t, i = this.length,
                n = [],
                o = this;
            if ("string" != typeof e) return this.pushStack(oe(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (oe.contains(o[t], this)) return !0
            }));
            for (t = 0; i > t; t++) oe.find(e, o[t], n);
            return n = this.pushStack(i > 1 ? oe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(n(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(n(this, e || [], !0))
        },
        is: function(e) {
            return !!n(this, "string" == typeof e && pe.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var me, ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (oe.fn.init = function(e, t, i) {
        var n, o;
        if (!e) return this;
        if (i = i || me, "string" == typeof e) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ve.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : G, !0)), fe.test(n[1]) && oe.isPlainObject(t))
                    for (n in t) oe.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return o = G.getElementById(n[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = G, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? void 0 !== i.ready ? i.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
    }).prototype = oe.fn, me = oe(G);
    var ge = /^(?:parents|prev(?:Until|All))/,
        ye = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    oe.fn.extend({
        has: function(e) {
            var t = oe(e, this),
                i = t.length;
            return this.filter(function() {
                for (var e = 0; i > e; e++)
                    if (oe.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var i, n = 0, o = this.length, r = [], s = pe.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; o > n; n++)
                for (i = this[n]; i && i !== t; i = i.parentNode)
                    if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && oe.find.matchesSelector(i, e))) {
                        r.push(i);
                        break
                    }
            return this.pushStack(r.length > 1 ? oe.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? J.call(oe(e), this[0]) : J.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), oe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ue(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return ue(e, "parentNode", i)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return ue(e, "nextSibling")
        },
        prevAll: function(e) {
            return ue(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return ue(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return ue(e, "previousSibling", i)
        },
        siblings: function(e) {
            return de((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return de(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || oe.merge([], e.childNodes)
        }
    }, function(e, t) {
        oe.fn[e] = function(i, n) {
            var o = oe.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (o = oe.filter(n, o)), this.length > 1 && (ye[e] || oe.uniqueSort(o), ge.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var we = /\S+/g;
    oe.Callbacks = function(e) {
        e = "string" == typeof e ? r(e) : oe.extend({}, e);
        var t, i, n, o, s = [],
            a = [],
            l = -1,
            c = function() {
                for (o = e.once, n = t = !0; a.length; l = -1)
                    for (i = a.shift(); ++l < s.length;) !1 === s[l].apply(i[0], i[1]) && e.stopOnFalse && (l = s.length, i = !1);
                e.memory || (i = !1), t = !1, o && (s = i ? [] : "")
            },
            u = {
                add: function() {
                    return s && (i && !t && (l = s.length - 1, a.push(i)), function t(i) {
                        oe.each(i, function(i, n) {
                            oe.isFunction(n) ? e.unique && u.has(n) || s.push(n) : n && n.length && "string" !== oe.type(n) && t(n)
                        })
                    }(arguments), i && !t && c()), this
                },
                remove: function() {
                    return oe.each(arguments, function(e, t) {
                        for (var i;
                            (i = oe.inArray(t, s, i)) > -1;) s.splice(i, 1), l >= i && l--
                    }), this
                },
                has: function(e) {
                    return e ? oe.inArray(e, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return o = a = [], s = i = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return o = a = [], i || (s = i = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, i) {
                    return o || (i = i || [], i = [e, i.slice ? i.slice() : i], a.push(i), t || c()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return u
    }, oe.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", oe.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return oe.Deferred(function(i) {
                            oe.each(t, function(t, r) {
                                var s = oe.isFunction(e[t]) && e[t];
                                o[r[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && oe.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[r[0] + "With"](this === n ? i.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? oe.extend(e, n) : n
                    }
                },
                o = {};
            return n.pipe = n.then, oe.each(t, function(e, r) {
                var s = r[2],
                    a = r[3];
                n[r[1]] = s.add, a && s.add(function() {
                    i = a
                }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? n : this, arguments), this
                }, o[r[0] + "With"] = s.fireWith
            }), n.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t, i, n, o = 0,
                r = Z.call(arguments),
                s = r.length,
                a = 1 !== s || e && oe.isFunction(e.promise) ? s : 0,
                l = 1 === a ? e : oe.Deferred(),
                c = function(e, i, n) {
                    return function(o) {
                        i[e] = this, n[e] = arguments.length > 1 ? Z.call(arguments) : o, n === t ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (s > 1)
                for (t = new Array(s), i = new Array(s), n = new Array(s); s > o; o++) r[o] && oe.isFunction(r[o].promise) ? r[o].promise().progress(c(o, i, t)).done(c(o, n, r)).fail(l.reject) : --a;
            return a || l.resolveWith(n, r), l.promise()
        }
    });
    var be;
    oe.fn.ready = function(e) {
        return oe.ready.promise().done(e), this
    }, oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --oe.readyWait : oe.isReady) || (oe.isReady = !0, !0 !== e && --oe.readyWait > 0 || (be.resolveWith(G, [oe]), oe.fn.triggerHandler && (oe(G).triggerHandler("ready"), oe(G).off("ready"))))
        }
    }), oe.ready.promise = function(t) {
        return be || (be = oe.Deferred(), "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? e.setTimeout(oe.ready) : (G.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s))), be.promise(t)
    }, oe.ready.promise();
    var Te = function(e, t, i, n, o, r, s) {
            var a = 0,
                l = e.length,
                c = null == i;
            if ("object" === oe.type(i)) {
                o = !0;
                for (a in i) Te(e, t, a, i[a], !0, r, s)
            } else if (void 0 !== n && (o = !0, oe.isFunction(n) || (s = !0), c && (s ? (t.call(e, n), t = null) : (c = t, t = function(e, t, i) {
                    return c.call(oe(e), i)
                })), t))
                for (; l > a; a++) t(e[a], i, s ? n : n.call(e[a], a, t(e[a], i)));
            return o ? e : c ? t.call(e) : l ? t(e[0], i) : r
        },
        xe = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    a.uid = 1, a.prototype = {
        register: function(e, t) {
            var i = t || {};
            return e.nodeType ? e[this.expando] = i : Object.defineProperty(e, this.expando, {
                value: i,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function(e) {
            if (!xe(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, xe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, i) {
            var n, o = this.cache(e);
            if ("string" == typeof t) o[t] = i;
            else
                for (n in t) o[n] = t[n];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, i) {
            var n;
            return void 0 === t || t && "string" == typeof t && void 0 === i ? (n = this.get(e, t), void 0 !== n ? n : this.get(e, oe.camelCase(t))) : (this.set(e, t, i), void 0 !== i ? i : t)
        },
        remove: function(e, t) {
            var i, n, o, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 === t) this.register(e);
                else {
                    oe.isArray(t) ? n = t.concat(t.map(oe.camelCase)) : (o = oe.camelCase(t), t in r ? n = [t, o] : (n = o, n = n in r ? [n] : n.match(we) || [])), i = n.length;
                    for (; i--;) delete r[n[i]]
                }(void 0 === t || oe.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !oe.isEmptyObject(t)
        }
    };
    var ke = new a,
        Ce = new a,
        Se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ee = /[A-Z]/g;
    oe.extend({
        hasData: function(e) {
            return Ce.hasData(e) || ke.hasData(e)
        },
        data: function(e, t, i) {
            return Ce.access(e, t, i)
        },
        removeData: function(e, t) {
            Ce.remove(e, t)
        },
        _data: function(e, t, i) {
            return ke.access(e, t, i)
        },
        _removeData: function(e, t) {
            ke.remove(e, t)
        }
    }), oe.fn.extend({
        data: function(e, t) {
            var i, n, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = Ce.get(r), 1 === r.nodeType && !ke.get(r, "hasDataAttrs"))) {
                    for (i = s.length; i--;) s[i] && (n = s[i].name, 0 === n.indexOf("data-") && (n = oe.camelCase(n.slice(5)), l(r, n, o[n])));
                    ke.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                Ce.set(this, e)
            }) : Te(this, function(t) {
                var i, n;
                if (r && void 0 === t) {
                    if (void 0 !== (i = Ce.get(r, e) || Ce.get(r, e.replace(Ee, "-$&").toLowerCase()))) return i;
                    if (n = oe.camelCase(e), void 0 !== (i = Ce.get(r, n))) return i;
                    if (void 0 !== (i = l(r, n, void 0))) return i
                } else n = oe.camelCase(e), this.each(function() {
                    var i = Ce.get(this, n);
                    Ce.set(this, n, t), e.indexOf("-") > -1 && void 0 !== i && Ce.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Ce.remove(this, e)
            })
        }
    }), oe.extend({
        queue: function(e, t, i) {
            var n;
            return e ? (t = (t || "fx") + "queue", n = ke.get(e, t), i && (!n || oe.isArray(i) ? n = ke.access(e, t, oe.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = oe.queue(e, t),
                n = i.length,
                o = i.shift(),
                r = oe._queueHooks(e, t),
                s = function() {
                    oe.dequeue(e, t)
                };
            "inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !n && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return ke.get(e, i) || ke.access(e, i, {
                empty: oe.Callbacks("once memory").add(function() {
                    ke.remove(e, [t + "queue", i])
                })
            })
        }
    }), oe.fn.extend({
        queue: function(e, t) {
            var i = 2;
            return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var i = oe.queue(this, e, t);
                oe._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && oe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                oe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1,
                o = oe.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --n || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(i = ke.get(r[s], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var $e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ae = new RegExp("^(?:([+-])=|)(" + $e + ")([a-z%]*)$", "i"),
        Oe = ["Top", "Right", "Bottom", "Left"],
        Pe = function(e, t) {
            return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
        },
        Ie = /^(?:checkbox|radio)$/i,
        De = /<([\w:-]+)/,
        Ne = /^$|\/(?:java|ecma)script/i,
        He = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    He.optgroup = He.option, He.tbody = He.tfoot = He.colgroup = He.caption = He.thead, He.th = He.td;
    var Le = /<|&#?\w+;/;
    ! function() {
        var e = G.createDocumentFragment(),
            t = e.appendChild(G.createElement("div")),
            i = G.createElement("input");
        i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), t.appendChild(i), ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var je = /^key/,
        Me = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ze = /^([^.]*)(?:\.(.+)|)/;
    oe.event = {
        global: {},
        add: function(e, t, i, n, o) {
            var r, s, a, l, c, u, d, p, f, h, m, v = ke.get(e);
            if (v)
                for (i.handler && (r = i, i = r.handler, o = r.selector), i.guid || (i.guid = oe.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function(t) {
                        return void 0 !== oe && oe.event.triggered !== t.type ? oe.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(we) || [""], c = t.length; c--;) a = ze.exec(t[c]) || [], f = m = a[1], h = (a[2] || "").split(".").sort(), f && (d = oe.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = oe.event.special[f] || {}, u = oe.extend({
                    type: f,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && oe.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, r), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, d.setup && !1 !== d.setup.call(e, n, h, s) || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), oe.event.global[f] = !0)
        },
        remove: function(e, t, i, n, o) {
            var r, s, a, l, c, u, d, p, f, h, m, v = ke.hasData(e) && ke.get(e);
            if (v && (l = v.events)) {
                for (t = (t || "").match(we) || [""], c = t.length; c--;)
                    if (a = ze.exec(t[c]) || [], f = m = a[1], h = (a[2] || "").split(".").sort(), f) {
                        for (d = oe.event.special[f] || {}, f = (n ? d.delegateType : d.bindType) || f, p = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) u = p[r], !o && m !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                        s && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, v.handle) || oe.removeEvent(e, f, v.handle), delete l[f])
                    } else
                        for (f in l) oe.event.remove(e, f + t[c], i, n, !0);
                oe.isEmptyObject(l) && ke.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = oe.event.fix(e);
            var t, i, n, o, r, s = [],
                a = Z.call(arguments),
                l = (ke.get(this, "events") || {})[e.type] || [],
                c = oe.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (s = oe.event.handlers.call(this, e, l), t = 0;
                    (o = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, i = 0;
                        (r = o.handlers[i++]) && !e.isImmediatePropagationStopped();)(!e.rnamespace || e.rnamespace.test(r.namespace)) && (e.handleObj = r, e.data = r.data, void 0 !== (n = ((oe.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var i, n, o, r, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (n = [], i = 0; a > i; i++) r = t[i], o = r.selector + " ", void 0 === n[o] && (n[o] = r.needsContext ? oe(o, this).index(l) > -1 : oe.find(o, this, null, [l]).length), n[o] && n.push(r);
                        n.length && s.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var i, n, o, r = t.button;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || G, n = i.documentElement, o = i.body, e.pageX = t.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[oe.expando]) return e;
            var t, i, n, o = e.type,
                r = e,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = Me.test(o) ? this.mouseHooks : je.test(o) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, e = new oe.Event(r), t = n.length; t--;) i = n[t], e[i] = r[i];
            return e.target || (e.target = G), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, r) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== m() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === m() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && oe.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return oe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, oe.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }, oe.Event = function(e, t) {
        return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? f : h) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
    }, oe.Event.prototype = {
        constructor: oe.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        oe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var i, n = this,
                    o = e.relatedTarget,
                    r = e.handleObj;
                return (!o || o !== n && !oe.contains(n, o)) && (e.type = r.origType, i = r.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), oe.fn.extend({
        on: function(e, t, i, n) {
            return v(this, e, t, i, n)
        },
        one: function(e, t, i, n) {
            return v(this, e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, o;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, oe(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return (!1 === t || "function" == typeof t) && (i = t, t = void 0), !1 === i && (i = h), this.each(function() {
                oe.event.remove(this, e, i, t)
            })
        }
    });
    var qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        _e = /<script|<style|<link/i,
        Fe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Re = /^true\/(.*)/,
        We = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    oe.extend({
        htmlPrefilter: function(e) {
            return e.replace(qe, "<$1></$2>")
        },
        clone: function(e, t, i) {
            var n, o, r, s, a = e.cloneNode(!0),
                l = oe.contains(e.ownerDocument, e);
            if (!(ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                for (s = u(a), r = u(e), n = 0, o = r.length; o > n; n++) T(r[n], s[n]);
            if (t)
                if (i)
                    for (r = r || u(e), s = s || u(a), n = 0, o = r.length; o > n; n++) b(r[n], s[n]);
                else b(e, a);
            return s = u(a, "script"), s.length > 0 && d(s, !l && u(e, "script")), a
        },
        cleanData: function(e) {
            for (var t, i, n, o = oe.event.special, r = 0; void 0 !== (i = e[r]); r++)
                if (xe(i)) {
                    if (t = i[ke.expando]) {
                        if (t.events)
                            for (n in t.events) o[n] ? oe.event.remove(i, n) : oe.removeEvent(i, n, t.handle);
                        i[ke.expando] = void 0
                    }
                    i[Ce.expando] && (i[Ce.expando] = void 0)
                }
        }
    }), oe.fn.extend({
        domManip: x,
        detach: function(e) {
            return k(this, e, !0)
        },
        remove: function(e) {
            return k(this, e)
        },
        text: function(e) {
            return Te(this, function(e) {
                return void 0 === e ? oe.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return x(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || g(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return x(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = g(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return x(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return x(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (oe.cleanData(u(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return oe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Te(this, function(e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !_e.test(e) && !He[(De.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = oe.htmlPrefilter(e);
                    try {
                        for (; n > i; i++) t = this[i] || {}, 1 === t.nodeType && (oe.cleanData(u(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return x(this, arguments, function(t) {
                var i = this.parentNode;
                oe.inArray(this, e) < 0 && (oe.cleanData(u(this)), i && i.replaceChild(t, this))
            }, e)
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        oe.fn[e] = function(e) {
            for (var i, n = [], o = oe(e), r = o.length - 1, s = 0; r >= s; s++) i = s === r ? this : this.clone(!0), oe(o[s])[t](i), Q.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var Be, Xe = {
            HTML: "block",
            BODY: "block"
        },
        Ye = /^margin/,
        Ue = new RegExp("^(" + $e + ")(?!px)[a-z%]+$", "i"),
        Ve = function(t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = e), i.getComputedStyle(t)
        },
        Ge = function(e, t, i, n) {
            var o, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            o = i.apply(e, n || []);
            for (r in t) e.style[r] = s[r];
            return o
        },
        Ze = G.documentElement;
    ! function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ze.appendChild(s);
            var t = e.getComputedStyle(a);
            i = "1%" !== t.top, r = "2px" === t.marginLeft, n = "4px" === t.width, a.style.marginRight = "50%", o = "4px" === t.marginRight, Ze.removeChild(s)
        }
        var i, n, o, r, s = G.createElement("div"),
            a = G.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), oe.extend(ne, {
            pixelPosition: function() {
                return t(), i
            },
            boxSizingReliable: function() {
                return null == n && t(), n
            },
            pixelMarginRight: function() {
                return null == n && t(), o
            },
            reliableMarginLeft: function() {
                return null == n && t(), r
            },
            reliableMarginRight: function() {
                var t, i = a.appendChild(G.createElement("div"));
                return i.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", a.style.width = "1px", Ze.appendChild(s), t = !parseFloat(e.getComputedStyle(i).marginRight), Ze.removeChild(s), a.removeChild(i), t
            }
        }))
    }();
    var Ke = /^(none|table(?!-c[ea]).+)/,
        Qe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Je = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        et = ["Webkit", "O", "Moz", "ms"],
        tt = G.createElement("div").style;
    oe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = E(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = oe.camelCase(t),
                    l = e.style;
                return t = oe.cssProps[a] || (oe.cssProps[a] = A(a) || a), s = oe.cssHooks[t] || oe.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (o = s.get(e, !1, n)) ? o : l[t] : (r = typeof i, "string" === r && (o = Ae.exec(i)) && o[1] && (i = c(e, t, o), r = "number"), void(null != i && i === i && ("number" === r && (i += o && o[3] || (oe.cssNumber[a] ? "" : "px")), ne.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (i = s.set(e, i, n)) || (l[t] = i))))
            }
        },
        css: function(e, t, i, n) {
            var o, r, s, a = oe.camelCase(t);
            return t = oe.cssProps[a] || (oe.cssProps[a] = A(a) || a), s = oe.cssHooks[t] || oe.cssHooks[a], s && "get" in s && (o = s.get(e, !0, i)), void 0 === o && (o = E(e, t, n)), "normal" === o && t in Je && (o = Je[t]), "" === i || i ? (r = parseFloat(o), !0 === i || isFinite(r) ? r || 0 : o) : o
        }
    }), oe.each(["height", "width"], function(e, t) {
        oe.cssHooks[t] = {
            get: function(e, i, n) {
                return i ? Ke.test(oe.css(e, "display")) && 0 === e.offsetWidth ? Ge(e, Qe, function() {
                    return I(e, t, n)
                }) : I(e, t, n) : void 0
            },
            set: function(e, i, n) {
                var o, r = n && Ve(e),
                    s = n && P(e, t, n, "border-box" === oe.css(e, "boxSizing", !1, r), r);
                return s && (o = Ae.exec(i)) && "px" !== (o[3] || "px") && (e.style[t] = i, i = oe.css(e, t)), O(e, i, s)
            }
        }
    }), oe.cssHooks.marginLeft = $(ne.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(E(e, "marginLeft")) || e.getBoundingClientRect().left - Ge(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }), oe.cssHooks.marginRight = $(ne.reliableMarginRight, function(e, t) {
        return t ? Ge(e, {
            display: "inline-block"
        }, E, [e, "marginRight"]) : void 0
    }), oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        oe.cssHooks[e + t] = {
            expand: function(i) {
                for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[e + Oe[n] + t] = r[n] || r[n - 2] || r[0];
                return o
            }
        }, Ye.test(e) || (oe.cssHooks[e + t].set = O)
    }), oe.fn.extend({
        css: function(e, t) {
            return Te(this, function(e, t, i) {
                var n, o, r = {},
                    s = 0;
                if (oe.isArray(t)) {
                    for (n = Ve(e), o = t.length; o > s; s++) r[t[s]] = oe.css(e, t[s], !1, n);
                    return r
                }
                return void 0 !== i ? oe.style(e, t, i) : oe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return D(this, !0)
        },
        hide: function() {
            return D(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Pe(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), oe.Tween = N, N.prototype = {
        constructor: N,
        init: function(e, t, i, n, o, r) {
            this.elem = e, this.prop = i, this.easing = o || oe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = r || (oe.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = N.propHooks[this.prop];
            return e && e.get ? e.get(this) : N.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = N.propHooks[this.prop];
            return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : N.propHooks._default.set(this), this
        }
    }, N.prototype.init.prototype = N.prototype, N.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : oe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, N.propHooks.scrollTop = N.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, oe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, oe.fx = N.prototype.init, oe.fx.step = {};
    var it, nt, ot = /^(?:toggle|show|hide)$/,
        rt = /queueHooks$/;
    oe.Animation = oe.extend(q, {
            tweeners: {
                "*": [function(e, t) {
                    var i = this.createTween(e, t);
                    return c(i.elem, e, Ae.exec(t), i), i
                }]
            },
            tweener: function(e, t) {
                oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(we);
                for (var i, n = 0, o = e.length; o > n; n++) i = e[n], q.tweeners[i] = q.tweeners[i] || [], q.tweeners[i].unshift(t)
            },
            prefilters: [M],
            prefilter: function(e, t) {
                t ? q.prefilters.unshift(e) : q.prefilters.push(e)
            }
        }), oe.speed = function(e, t, i) {
            var n = e && "object" == typeof e ? oe.extend({}, e) : {
                complete: i || !i && t || oe.isFunction(e) && e,
                duration: e,
                easing: i && t || t && !oe.isFunction(t) && t
            };
            return n.duration = oe.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in oe.fx.speeds ? oe.fx.speeds[n.duration] : oe.fx.speeds._default, (null == n.queue || !0 === n.queue) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                oe.isFunction(n.old) && n.old.call(this), n.queue && oe.dequeue(this, n.queue)
            }, n
        }, oe.fn.extend({
            fadeTo: function(e, t, i, n) {
                return this.filter(Pe).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, i, n)
            },
            animate: function(e, t, i, n) {
                var o = oe.isEmptyObject(e),
                    r = oe.speed(t, i, n),
                    s = function() {
                        var t = q(this, oe.extend({}, e), r);
                        (o || ke.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(e, t, i) {
                var n = function(e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        r = oe.timers,
                        s = ke.get(this);
                    if (o) s[o] && s[o].stop && n(s[o]);
                    else
                        for (o in s) s[o] && s[o].stop && rt.test(o) && n(s[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(i), t = !1, r.splice(o, 1));
                    (t || !i) && oe.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, i = ke.get(this),
                        n = i[e + "queue"],
                        o = i[e + "queueHooks"],
                        r = oe.timers,
                        s = n ? n.length : 0;
                    for (i.finish = !0, oe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; s > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
                    delete i.finish
                })
            }
        }), oe.each(["toggle", "show", "hide"], function(e, t) {
            var i = oe.fn[t];
            oe.fn[t] = function(e, n, o) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(L(t, !0), e, n, o)
            }
        }), oe.each({
            slideDown: L("show"),
            slideUp: L("hide"),
            slideToggle: L("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            oe.fn[e] = function(e, i, n) {
                return this.animate(t, e, i, n)
            }
        }), oe.timers = [], oe.fx.tick = function() {
            var e, t = 0,
                i = oe.timers;
            for (it = oe.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
            i.length || oe.fx.stop(), it = void 0
        }, oe.fx.timer = function(e) {
            oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
        }, oe.fx.interval = 13, oe.fx.start = function() {
            nt || (nt = e.setInterval(oe.fx.tick, oe.fx.interval))
        }, oe.fx.stop = function() {
            e.clearInterval(nt), nt = null
        }, oe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, oe.fn.delay = function(t, i) {
            return t = oe.fx ? oe.fx.speeds[t] || t : t, i = i || "fx", this.queue(i, function(i, n) {
                var o = e.setTimeout(i, t);
                n.stop = function() {
                    e.clearTimeout(o)
                }
            })
        },
        function() {
            var e = G.createElement("input"),
                t = G.createElement("select"),
                i = t.appendChild(G.createElement("option"));
            e.type = "checkbox", ne.checkOn = "" !== e.value, ne.optSelected = i.selected, t.disabled = !0, ne.optDisabled = !i.disabled, e = G.createElement("input"), e.value = "t", e.type = "radio", ne.radioValue = "t" === e.value
        }();
    var st, at = oe.expr.attrHandle;
    oe.fn.extend({
        attr: function(e, t) {
            return Te(this, oe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                oe.removeAttr(this, e)
            })
        }
    }), oe.extend({
        attr: function(e, t, i) {
            var n, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? oe.prop(e, t, i) : (1 === r && oe.isXMLDoc(e) || (t = t.toLowerCase(), o = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? st : void 0)), void 0 !== i ? null === i ? void oe.removeAttr(e, t) : o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : o && "get" in o && null !== (n = o.get(e, t)) ? n : (n = oe.find.attr(e, t), null == n ? void 0 : n))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ne.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var i, n, o = 0,
                r = t && t.match(we);
            if (r && 1 === e.nodeType)
                for (; i = r[o++];) n = oe.propFix[i] || i, oe.expr.match.bool.test(i) && (e[n] = !1), e.removeAttribute(i)
        }
    }), st = {
        set: function(e, t, i) {
            return !1 === t ? oe.removeAttr(e, i) : e.setAttribute(i, i), i
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var i = at[t] || oe.find.attr;
        at[t] = function(e, t, n) {
            var o, r;
            return n || (r = at[t], at[t] = o, o = null != i(e, t, n) ? t.toLowerCase() : null, at[t] = r), o
        }
    });
    var lt = /^(?:input|select|textarea|button)$/i,
        ct = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function(e, t) {
            return Te(this, oe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[oe.propFix[e] || e]
            })
        }
    }), oe.extend({
        prop: function(e, t, i) {
            var n, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && oe.isXMLDoc(e) || (t = oe.propFix[t] || t, o = oe.propHooks[t]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : lt.test(e.nodeName) || ct.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), ne.optSelected || (oe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        oe.propFix[this.toLowerCase()] = this
    });
    var ut = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function(e) {
            var t, i, n, o, r, s, a, l = 0;
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).addClass(e.call(this, t, _(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(we) || []; i = this[l++];)
                    if (o = _(i), n = 1 === i.nodeType && (" " + o + " ").replace(ut, " ")) {
                        for (s = 0; r = t[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                        a = oe.trim(n), o !== a && i.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, i, n, o, r, s, a, l = 0;
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).removeClass(e.call(this, t, _(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(we) || []; i = this[l++];)
                    if (o = _(i), n = 1 === i.nodeType && (" " + o + " ").replace(ut, " ")) {
                        for (s = 0; r = t[s++];)
                            for (; n.indexOf(" " + r + " ") > -1;) n = n.replace(" " + r + " ", " ");
                        a = oe.trim(n), o !== a && i.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var i = typeof e;
            return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function(i) {
                oe(this).toggleClass(e.call(this, i, _(this), t), t)
            }) : this.each(function() {
                var t, n, o, r;
                if ("string" === i)
                    for (n = 0, o = oe(this), r = e.match(we) || []; t = r[n++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else(void 0 === e || "boolean" === i) && (t = _(this), t && ke.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : ke.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++];)
                if (1 === i.nodeType && (" " + _(i) + " ").replace(ut, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var dt = /\r/g;
    oe.fn.extend({
        val: function(e) {
            var t, i, n, o = this[0];
            return arguments.length ? (n = oe.isFunction(e), this.each(function(i) {
                var o;
                1 === this.nodeType && (o = n ? e.call(this, i, oe(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : oe.isArray(o) && (o = oe.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), (t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = oe.valHooks[o.type] || oe.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (i = t.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(dt, "") : null == i ? "" : i)) : void 0
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    return oe.trim(e.value)
                }
            },
            select: {
                get: function(e) {
                    for (var t, i, n = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, s = r ? null : [], a = r ? o + 1 : n.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                        if (i = n[l], (i.selected || l === o) && (ne.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !oe.nodeName(i.parentNode, "optgroup"))) {
                            if (t = oe(i).val(), r) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var i, n, o = e.options, r = oe.makeArray(t), s = o.length; s--;) n = o[s], (n.selected = oe.inArray(oe.valHooks.option.get(n), r) > -1) && (i = !0);
                    return i || (e.selectedIndex = -1), r
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function() {
        oe.valHooks[this] = {
            set: function(e, t) {
                return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) > -1 : void 0
            }
        }, ne.checkOn || (oe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var pt = /^(?:focusinfocus|focusoutblur)$/;
    oe.extend(oe.event, {
        trigger: function(t, i, n, o) {
            var r, s, a, l, c, u, d, p = [n || G],
                f = ie.call(t, "type") ? t.type : t,
                h = ie.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = n = n || G, 3 !== n.nodeType && 8 !== n.nodeType && !pt.test(f + oe.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), c = f.indexOf(":") < 0 && "on" + f, t = t[oe.expando] ? t : new oe.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : oe.makeArray(i, [t]), d = oe.event.special[f] || {}, o || !d.trigger || !1 !== d.trigger.apply(n, i))) {
                if (!o && !d.noBubble && !oe.isWindow(n)) {
                    for (l = d.delegateType || f, pt.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (n.ownerDocument || G) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (r = 0;
                    (s = p[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : d.bindType || f, u = (ke.get(s, "events") || {})[t.type] && ke.get(s, "handle"), u && u.apply(s, i), (u = c && s[c]) && u.apply && xe(s) && (t.result = u.apply(s, i), !1 === t.result && t.preventDefault());
                return t.type = f, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), i) || !xe(n) || c && oe.isFunction(n[f]) && !oe.isWindow(n) && (a = n[c], a && (n[c] = null), oe.event.triggered = f, n[f](), oe.event.triggered = void 0, a && (n[c] = a)), t.result
            }
        },
        simulate: function(e, t, i) {
            var n = oe.extend(new oe.Event, i, {
                type: e,
                isSimulated: !0
            });
            oe.event.trigger(n, null, t), n.isDefaultPrevented() && i.preventDefault()
        }
    }), oe.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                oe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            return i ? oe.event.trigger(e, t, i, !0) : void 0
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        oe.fn[t] = function(e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), oe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), ne.focusin = "onfocusin" in e, ne.focusin || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var i = function(e) {
            oe.event.simulate(t, e.target, oe.event.fix(e))
        };
        oe.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    o = ke.access(n, t);
                o || n.addEventListener(e, i, !0), ke.access(n, t, (o || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    o = ke.access(n, t) - 1;
                o ? ke.access(n, t, o) : (n.removeEventListener(e, i, !0), ke.remove(n, t))
            }
        }
    });
    var ft = e.location,
        ht = oe.now(),
        mt = /\?/;
    oe.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, oe.parseXML = function(t) {
        var i;
        if (!t || "string" != typeof t) return null;
        try {
            i = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            i = void 0
        }
        return (!i || i.getElementsByTagName("parsererror").length) && oe.error("Invalid XML: " + t), i
    };
    var vt = /#.*$/,
        gt = /([?&])_=[^&]*/,
        yt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        wt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        bt = /^(?:GET|HEAD)$/,
        Tt = /^\/\//,
        xt = {},
        kt = {},
        Ct = "*/".concat("*"),
        St = G.createElement("a");
    St.href = ft.href, oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ft.href,
            type: "GET",
            isLocal: wt.test(ft.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ct,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? W(W(e, oe.ajaxSettings), t) : W(oe.ajaxSettings, e)
        },
        ajaxPrefilter: F(xt),
        ajaxTransport: F(kt),
        ajax: function(t, i) {
            function n(t, i, n, a) {
                var c, d, y, w, T, k = i;
                2 !== b && (b = 2, l && e.clearTimeout(l), o = void 0, s = a || "", x.readyState = t > 0 ? 4 : 0, c = t >= 200 && 300 > t || 304 === t, n && (w = B(p, x, n)), w = X(p, w, x, c), c ? (p.ifModified && (T = x.getResponseHeader("Last-Modified"), T && (oe.lastModified[r] = T), (T = x.getResponseHeader("etag")) && (oe.etag[r] = T)), 204 === t || "HEAD" === p.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = w.state, d = w.data, y = w.error, c = !y)) : (y = k, (t || !k) && (k = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (i || k) + "", c ? m.resolveWith(f, [d, k, x]) : m.rejectWith(f, [x, k, y]), x.statusCode(g), g = void 0, u && h.trigger(c ? "ajaxSuccess" : "ajaxError", [x, p, c ? d : y]), v.fireWith(f, [x, k]), u && (h.trigger("ajaxComplete", [x, p]), --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (i = t, t = void 0), i = i || {};
            var o, r, s, a, l, c, u, d, p = oe.ajaxSetup({}, i),
                f = p.context || p,
                h = p.context && (f.nodeType || f.jquery) ? oe(f) : oe.event,
                m = oe.Deferred(),
                v = oe.Callbacks("once memory"),
                g = p.statusCode || {},
                y = {},
                w = {},
                b = 0,
                T = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!a)
                                for (a = {}; t = yt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var i = e.toLowerCase();
                        return b || (e = w[i] = w[i] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) g[t] = [g[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return o && o.abort(t), n(0, t), this
                    }
                };
            if (m.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, p.url = ((t || p.url || ft.href) + "").replace(vt, "").replace(Tt, ft.protocol + "//"), p.type = i.method || i.type || p.method || p.type, p.dataTypes = oe.trim(p.dataType || "*").toLowerCase().match(we) || [""], null == p.crossDomain) {
                c = G.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = St.protocol + "//" + St.host != c.protocol + "//" + c.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = oe.param(p.data, p.traditional)), R(xt, p, i, x), 2 === b) return x;
            u = oe.event && p.global, u && 0 == oe.active++ && oe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !bt.test(p.type), r = p.url, p.hasContent || (p.data && (r = p.url += (mt.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = gt.test(r) ? r.replace(gt, "$1_=" + ht++) : r + (mt.test(r) ? "&" : "?") + "_=" + ht++)), p.ifModified && (oe.lastModified[r] && x.setRequestHeader("If-Modified-Since", oe.lastModified[r]), oe.etag[r] && x.setRequestHeader("If-None-Match", oe.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || i.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ct + "; q=0.01" : "") : p.accepts["*"]);
            for (d in p.headers) x.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (!1 === p.beforeSend.call(f, x, p) || 2 === b)) return x.abort();
            T = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[d](p[d]);
            if (o = R(kt, p, i, x)) {
                if (x.readyState = 1, u && h.trigger("ajaxSend", [x, p]), 2 === b) return x;
                p.async && p.timeout > 0 && (l = e.setTimeout(function() {
                    x.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, o.send(y, n)
                } catch (e) {
                    if (!(2 > b)) throw e;
                    n(-1, e)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function(e, t, i) {
            return oe.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }), oe.each(["get", "post"], function(e, t) {
        oe[t] = function(e, i, n, o) {
            return oe.isFunction(i) && (o = o || n, n = i, i = void 0), oe.ajax(oe.extend({
                url: e,
                type: t,
                dataType: o,
                data: i,
                success: n
            }, oe.isPlainObject(e) && e))
        }
    }), oe._evalUrl = function(e) {
        return oe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, oe.fn.extend({
        wrapAll: function(e) {
            var t;
            return oe.isFunction(e) ? this.each(function(t) {
                oe(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = oe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return oe.isFunction(e) ? this.each(function(t) {
                oe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = oe(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = oe.isFunction(e);
            return this.each(function(i) {
                oe(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function(e) {
        return !oe.expr.filters.visible(e)
    }, oe.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var Et = /%20/g,
        $t = /\[\]$/,
        At = /\r?\n/g,
        Ot = /^(?:submit|button|image|reset|file)$/i,
        Pt = /^(?:input|select|textarea|keygen)/i;
    oe.param = function(e, t) {
        var i, n = [],
            o = function(e, t) {
                t = oe.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (i in e) Y(i, e[i], t, o);
        return n.join("&").replace(Et, "+")
    }, oe.fn.extend({
        serialize: function() {
            return oe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && Pt.test(this.nodeName) && !Ot.test(e) && (this.checked || !Ie.test(e))
            }).map(function(e, t) {
                var i = oe(this).val();
                return null == i ? null : oe.isArray(i) ? oe.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(At, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(At, "\r\n")
                }
            }).get()
        }
    }), oe.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var It = {
            0: 200,
            1223: 204
        },
        Dt = oe.ajaxSettings.xhr();
    ne.cors = !!Dt && "withCredentials" in Dt, ne.ajax = Dt = !!Dt, oe.ajaxTransport(function(t) {
        var i, n;
        return ne.cors || Dt && !t.crossDomain ? {
            send: function(o, r) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (s in o) a.setRequestHeader(s, o[s]);
                i = function(e) {
                    return function() {
                        i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(It[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        i && n()
                    })
                }, i = i("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (i) throw e
                }
            },
            abort: function() {
                i && i()
            }
        } : void 0
    }), oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return oe.globalEval(e), e
            }
        }
    }), oe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), oe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, i;
            return {
                send: function(n, o) {
                    t = oe("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", i = function(e) {
                        t.remove(), i = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), G.head.appendChild(t[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }
    });
    var Nt = [],
        Ht = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Nt.pop() || oe.expando + "_" + ht++;
            return this[e] = !0, e
        }
    }), oe.ajaxPrefilter("json jsonp", function(t, i, n) {
        var o, r, s, a = !1 !== t.jsonp && (Ht.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ht.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ht, "$1" + o) : !1 !== t.jsonp && (t.url += (mt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return s || oe.error(o + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
            s = arguments
        }, n.always(function() {
            void 0 === r ? oe(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = i.jsonpCallback, Nt.push(o)), s && oe.isFunction(r) && r(s[0]), s = r = void 0
        }), "script") : void 0
    }), ne.createHTMLDocument = function() {
        var e = G.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), oe.parseHTML = function(e, t, i) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (i = t, t = !1), t = t || (ne.createHTMLDocument ? G.implementation.createHTMLDocument("") : G);
        var n = fe.exec(e),
            o = !i && [];
        return n ? [t.createElement(n[1])] : (n = p([e], t, o), o && o.length && oe(o).remove(), oe.merge([], n.childNodes))
    };
    var Lt = oe.fn.load;
    oe.fn.load = function(e, t, i) {
        if ("string" != typeof e && Lt) return Lt.apply(this, arguments);
        var n, o, r, s = this,
            a = e.indexOf(" ");
        return a > -1 && (n = oe.trim(e.slice(a)), e = e.slice(0, a)), oe.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && oe.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, s.html(n ? oe("<div>").append(oe.parseHTML(e)).find(n) : e)
        }).always(i && function(e, t) {
            s.each(function() {
                i.apply(s, r || [e.responseText, t, e])
            })
        }), this
    }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        oe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), oe.expr.filters.animated = function(e) {
        return oe.grep(oe.timers, function(t) {
            return e === t.elem
        }).length
    }, oe.offset = {
        setOffset: function(e, t, i) {
            var n, o, r, s, a, l, c, u = oe.css(e, "position"),
                d = oe(e),
                p = {};
            "static" === u && (e.style.position = "relative"), a = d.offset(), r = oe.css(e, "top"), l = oe.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (n = d.position(), s = n.top, o = n.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), oe.isFunction(t) && (t = t.call(e, i, oe.extend({}, a))), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + o), "using" in t ? t.using.call(e, p) : d.css(p)
        }
    }, oe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                oe.offset.setOffset(this, e, t)
            });
            var t, i, n = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                r = n && n.ownerDocument;
            return r ? (t = r.documentElement, oe.contains(t, n) ? (o = n.getBoundingClientRect(), i = U(r), {
                top: o.top + i.pageYOffset - t.clientTop,
                left: o.left + i.pageXOffset - t.clientLeft
            }) : o) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === oe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (n = e.offset()), n.top += oe.css(e[0], "borderTopWidth", !0), n.left += oe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - oe.css(i, "marginTop", !0),
                    left: t.left - n.left - oe.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === oe.css(e, "position");) e = e.offsetParent;
                return e || Ze
            })
        }
    }), oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var i = "pageYOffset" === t;
        oe.fn[e] = function(n) {
            return Te(this, function(e, n, o) {
                var r = U(e);
                return void 0 === o ? r ? r[t] : e[n] : void(r ? r.scrollTo(i ? r.pageXOffset : o, i ? o : r.pageYOffset) : e[n] = o)
            }, e, n, arguments.length)
        }
    }), oe.each(["top", "left"], function(e, t) {
        oe.cssHooks[t] = $(ne.pixelPosition, function(e, i) {
            return i ? (i = E(e, t), Ue.test(i) ? oe(e).position()[t] + "px" : i) : void 0
        })
    }), oe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        oe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(i, n) {
            oe.fn[n] = function(n, o) {
                var r = arguments.length && (i || "boolean" != typeof n),
                    s = i || (!0 === n || !0 === o ? "margin" : "border");
                return Te(this, function(t, i, n) {
                    var o;
                    return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === n ? oe.css(t, i, s) : oe.style(t, i, n, s)
                }, t, r ? n : void 0, r, null)
            }
        })
    }), oe.fn.extend({
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        },
        size: function() {
            return this.length
        }
    }), oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return oe
    });
    var jt = e.jQuery,
        Mt = e.$;
    return oe.noConflict = function(t) {
        return e.$ === oe && (e.$ = Mt), t && e.jQuery === oe && (e.jQuery = jt), oe
    }, t || (e.jQuery = e.$ = oe), oe
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";
    var t = window.Slick || {};
    t = function() {
        function t(t, n) {
            var o, r = this;
            r.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(t),
                appendDots: e(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(t, i) {
                    return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, r.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(t), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(t).data("slick") || {}, r.options = e.extend({}, r.defaults, n, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = i++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
        }
        var i = 0;
        return t
    }(), t.prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
        var o = this;
        if ("boolean" == typeof i) n = i, i = null;
        else if (i < 0 || i >= o.slideCount) return !1;
        o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : n ? e(t).insertBefore(o.$slides.eq(i)) : e(t).insertAfter(o.$slides.eq(i)) : !0 === n ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(t, i) {
            e(i).attr("data-slick-index", t)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, t.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }, t.prototype.animateSlide = function(t, i) {
        var n = {},
            o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: t
        }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
            top: t
        }, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
            animStart: o.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(e) {
                e = Math.ceil(e), !1 === o.options.vertical ? (n[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(n))
            },
            complete: function() {
                i && i.call()
            }
        })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? n[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function() {
            o.disableTransition(), i.call()
        }, o.options.speed))
    }, t.prototype.getNavTarget = function() {
        var t = this,
            i = t.options.asNavFor;
        return i && null !== i && (i = e(i).not(t.$slider)), i
    }, t.prototype.asNavFor = function(t) {
        var i = this,
            n = i.getNavTarget();
        null !== n && "object" == typeof n && n.each(function() {
            var i = e(this).slick("getSlick");
            i.unslicked || i.slideHandler(t, !0)
        })
    }, t.prototype.applyTransition = function(e) {
        var t = this,
            i = {};
        !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, t.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function() {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, t.prototype.buildArrows = function() {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, t.prototype.buildDots = function() {
        var t, i, n = this;
        if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
            for (n.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(n.options.dotsClass), t = 0; t <= n.getDotCount(); t += 1) i.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
            n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
            e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
        }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function() {
        var e, t, i, n, o, r, s, a = this;
        if (n = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
            for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var c = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var u = e * s + (t * a.options.slidesPerRow + i);
                        r.get(u) && c.appendChild(r.get(u))
                    }
                    l.appendChild(c)
                }
                n.appendChild(l)
            }
            a.$slider.empty().append(n), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, t.prototype.checkResponsive = function(t, i) {
        var n, o, r, s = this,
            a = !1,
            l = s.$slider.width(),
            c = window.innerWidth || e(window).width();
        if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            o = null;
            for (n in s.breakpoints) s.breakpoints.hasOwnProperty(n) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[n] && (o = s.breakpoints[n]) : r > s.breakpoints[n] && (o = s.breakpoints[n]));
            null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || i) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
        }
    }, t.prototype.changeSlide = function(t, i) {
        var n, o, r, s = this,
            a = e(t.currentTarget);
        switch (a.is("a") && t.preventDefault(),
            a.is("li") || (a = a.closest("li")), r = s.slideCount % s.options.slidesToScroll != 0, n = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
            case "previous":
                o = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, i);
                break;
            case "next":
                o = 0 === n ? s.options.slidesToScroll : n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, i);
                break;
            case "index":
                var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
                s.slideHandler(s.checkNavigable(l), !1, i), a.children().trigger("focus");
                break;
            default:
                return
        }
    }, t.prototype.checkNavigable = function(e) {
        var t, i;
        if (t = this.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length - 1];
        else
            for (var n in t) {
                if (e < t[n]) {
                    e = i;
                    break
                }
                i = t[n]
            }
        return e
    }, t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.cleanUpRows = function() {
        var e, t = this;
        t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.empty().append(e))
    }, t.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, t.prototype.destroy = function(t) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            e(this).attr("style", e(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
    }, t.prototype.disableTransition = function(e) {
        var t = this,
            i = {};
        i[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, t.prototype.fadeSlide = function(e, t) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(e).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(e).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), t && setTimeout(function() {
            i.disableTransition(e), t.call()
        }, i.options.speed))
    }, t.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, t.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
            i.stopImmediatePropagation();
            var n = e(this);
            setTimeout(function() {
                t.options.pauseOnFocus && (t.focussed = n.is(":focus"), t.autoPlay())
            }, 0)
        })
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, t.prototype.getDotCount = function() {
        var e = this,
            t = 0,
            i = 0,
            n = 0;
        if (!0 === e.options.infinite)
            for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode) n = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return n - 1
    }, t.prototype.getLeft = function(e) {
        var t, i, n, o = this,
            r = 0;
        return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, r = (o.options.slidesToShow - (e - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, r = o.slideCount % o.options.slidesToScroll * i * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (e + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, r = 0), !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * i * -1 + r, !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === o.options.centerMode && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (o.$list.width() - n.outerWidth()) / 2)), t
    }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
        return this.options[e]
    }, t.prototype.getNavigableIndexes = function() {
        var e, t = this,
            i = 0,
            n = 0,
            o = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) o.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }, t.prototype.getSlick = function() {
        return this
    }, t.prototype.getSlideCount = function() {
        var t, i, n = this;
        return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(o, r) {
            if (r.offsetLeft - i + e(r).outerWidth() / 2 > -1 * n.swipeLeft) return t = r, !1
        }), Math.abs(e(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, t.prototype.init = function(t) {
        var i = this;
        e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, t.prototype.initADA = function() {
        var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
            e(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + t.instanceUid + i
            })
        }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(i) {
            e(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + t.instanceUid + i,
                id: "slick-slide" + t.instanceUid + i
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
    }, t.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide))
    }, t.prototype.initDotEvents = function() {
        var t = this;
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.initSlideEvents = function() {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }, t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, t.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    }, t.prototype.lazyLoad = function() {
        function t(t) {
            e("img[data-lazy]", t).each(function() {
                var t = e(this),
                    i = e(this).attr("data-lazy"),
                    n = document.createElement("img");
                n.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, function() {
                        t.attr("src", i).animate({
                            opacity: 1
                        }, 200, function() {
                            t.removeAttr("data-lazy").removeClass("slick-loading")
                        }), s.$slider.trigger("lazyLoaded", [s, t, i])
                    })
                }, n.onerror = function() {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, i])
                }, n.src = i
            })
        }
        var i, n, o, r, s = this;
        !0 === s.options.centerMode ? !0 === s.options.infinite ? (o = s.currentSlide + (s.options.slidesToShow / 2 + 1), r = o + s.options.slidesToShow + 2) : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), r = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, r = Math.ceil(o + s.options.slidesToShow), !0 === s.options.fade && (o > 0 && o--, r <= s.slideCount && r++)), i = s.$slider.find(".slick-slide").slice(o, r), t(i), s.slideCount <= s.options.slidesToShow ? (n = s.$slider.find(".slick-slide"), t(n)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (n = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), t(n)) : 0 === s.currentSlide && (n = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow), t(n))
    }, t.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, t.prototype.orientationChange = function() {
        var e = this;
        e.checkResponsive(), e.setPosition()
    }, t.prototype.pause = t.prototype.slickPause = function() {
        var e = this;
        e.autoPlayClear(), e.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, t.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && t.initADA())
    }, t.prototype.prev = t.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, t.prototype.preventDefault = function(e) {
        e.preventDefault()
    }, t.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var i, n, o, r = this,
            s = e("img[data-lazy]", r.$slider);
        s.length ? (i = s.first(), n = i.attr("data-lazy"), o = document.createElement("img"), o.onload = function() {
            i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, i, n]), r.progressiveLazyLoad()
        }, o.onerror = function() {
            t < 3 ? setTimeout(function() {
                r.progressiveLazyLoad(t + 1)
            }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, i, n]), r.progressiveLazyLoad())
        }, o.src = n) : r.$slider.trigger("allImagesLoaded", [r])
    }, t.prototype.refresh = function(t) {
        var i, n, o = this;
        n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
            currentSlide: i
        }), o.init(), t || o.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }, t.prototype.registerBreakpoints = function() {
        var t, i, n, o = this,
            r = o.options.responsive || null;
        if ("array" === e.type(r) && r.length) {
            o.respondTo = o.options.respondTo || "window";
            for (t in r)
                if (n = o.breakpoints.length - 1, i = r[t].breakpoint, r.hasOwnProperty(t)) {
                    for (; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                    o.breakpoints.push(i), o.breakpointSettings[i] = r[t].settings
                }
            o.breakpoints.sort(function(e, t) {
                return o.options.mobileFirst ? e - t : t - e
            })
        }
    }, t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
    }, t.prototype.resize = function() {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
            t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
        }, 50))
    }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
        var n = this;
        if ("boolean" == typeof e ? (t = e, e = !0 === t ? 0 : n.slideCount - 1) : e = !0 === t ? --e : e, n.slideCount < 1 || e < 0 || e > n.slideCount - 1) return !1;
        n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
    }, t.prototype.setCSS = function(e) {
        var t, i, n = this,
            o = {};
        !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", o[n.positionProp] = e, !1 === n.transformsEnabled ? n.$slideTrack.css(o) : (o = {}, !1 === n.cssTransitions ? (o[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(o)))
    }, t.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, t.prototype.setFade = function() {
        var t, i = this;
        i.$slides.each(function(n, o) {
            t = i.slideWidth * n * -1, !0 === i.options.rtl ? e(o).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : e(o).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }), i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }, t.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, t.prototype.setOption = t.prototype.slickSetOption = function() {
        var t, i, n, o, r, s = this,
            a = !1;
        if ("object" === e.type(arguments[0]) ? (n = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) s.options[n] = o;
        else if ("multiple" === r) e.each(n, function(e, t) {
            s.options[e] = t
        });
        else if ("responsive" === r)
            for (i in o)
                if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[i]];
                else {
                    for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === o[i].breakpoint && s.options.responsive.splice(t, 1), t--;
                    s.options.responsive.push(o[i])
                }
        a && (s.unload(), s.reinit())
    }, t.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, t.prototype.setProps = function() {
        var e = this,
            t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, t.prototype.setSlideClasses = function(e) {
        var t, i, n, o, r = this;
        i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode ? (t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = r.options.slidesToShow + e, i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, n = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === r.options.lazyLoad && r.lazyLoad()
    }, t.prototype.setupInfinite = function() {
        var t, i, n, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null, o.slideCount > o.options.slidesToShow)) {
            for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - n; t -= 1) i = t - 1, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (t = 0; t < n; t += 1) i = t, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                e(this).attr("id", "")
            })
        }
    }, t.prototype.interrupt = function(e) {
        var t = this;
        e || t.autoPlay(), t.interrupted = e
    }, t.prototype.selectHandler = function(t) {
        var i = this,
            n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
            o = parseInt(n.attr("data-slick-index"));
        if (o || (o = 0), i.slideCount <= i.options.slidesToShow) return i.setSlideClasses(o), void i.asNavFor(o);
        i.slideHandler(o)
    }, t.prototype.slideHandler = function(e, t, i) {
        var n, o, r, s, a, l = null,
            c = this;
        if (t = t || !1, (!0 !== c.animating || !0 !== c.options.waitForAnimate) && !(!0 === c.options.fade && c.currentSlide === e || c.slideCount <= c.options.slidesToShow)) {
            if (!1 === t && c.asNavFor(e), n = e, l = c.getLeft(n), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) return void(!1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(s, function() {
                c.postSlide(n)
            }) : c.postSlide(n)));
            if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) return void(!1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(s, function() {
                c.postSlide(n)
            }) : c.postSlide(n)));
            if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(r), c.fadeSlide(o, function() {
                c.postSlide(o)
            })) : c.postSlide(o), void c.animateHeight();
            !0 !== i ? c.animateSlide(l, function() {
                c.postSlide(o)
            }) : c.postSlide(o)
        }
    }, t.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, t.prototype.swipeDirection = function() {
        var e, t, i, n, o = this;
        return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(t, e), n = Math.round(180 * i / Math.PI), n < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? !1 === o.options.rtl ? "left" : "right" : n <= 360 && n >= 315 ? !1 === o.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
    }, t.prototype.swipeEnd = function(e) {
        var t, i, n = this;
        if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
        if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (i = n.swipeDirection()) {
                case "left":
                case "down":
                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
            }
            "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, t.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, t.prototype.swipeMove = function(e) {
        var t, i, n, o, r, s = this;
        return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!s.dragging || r && 1 !== r.length) && (t = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, s.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), !0 === s.options.verticalSwiping && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))), "vertical" !== (i = s.swipeDirection()) ? (void 0 !== e.originalEvent && s.touchObject.swipeLength > 4 && e.preventDefault(), o = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), !0 === s.options.verticalSwiping && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1), n = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, !1 === s.options.infinite && (0 === s.currentSlide && "right" === i || s.currentSlide >= s.getDotCount() && "left" === i) && (n = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), !1 === s.options.vertical ? s.swipeLeft = t + n * o : s.swipeLeft = t + n * (s.$list.height() / s.listWidth) * o, !0 === s.options.verticalSwiping && (s.swipeLeft = t + n * o), !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))) : void 0)
    }, t.prototype.swipeStart = function(e) {
        var t, i = this;
        if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, t.prototype.unload = function() {
        var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, t.prototype.unslick = function(e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy()
    }, t.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, t.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, t.prototype.visibility = function() {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
    }, e.fn.slick = function() {
        var e, i, n = this,
            o = arguments[0],
            r = Array.prototype.slice.call(arguments, 1),
            s = n.length;
        for (e = 0; e < s; e++)
            if ("object" == typeof o || void 0 === o ? n[e].slick = new t(n[e], o) : i = n[e].slick[o].apply(n[e].slick, r), void 0 !== i) return i;
        return n
    }
}),
function(e) {
    "use strict";

    function t(t, i) {
        this.$target = e(t), this.opts = e.extend({}, l, i, this.$target.data()), void 0 === this.isOpen && this._init()
    }
    var i, n, o, r, s, a, l = {
        loadingNotice: "???????????????? ????????...",
        errorNotice: "???????? ???? ?????????????? ??????????????????",
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
}(jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(e) {
    var t, i, n, o, r, s, a = function() {},
        l = !!window.jQuery,
        c = e(window),
        u = function(e, i) {
            t.ev.on("mfp" + e + ".mfp", i)
        },
        d = function(t, i, n, o) {
            var r = document.createElement("div");
            return r.className = "mfp-" + t, n && (r.innerHTML = n), o ? i && i.appendChild(r) : (r = e(r), i && r.appendTo(i)), r
        },
        p = function(i, n) {
            t.ev.triggerHandler("mfp" + i, n), t.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), t.st.callbacks[i] && t.st.callbacks[i].apply(t, e.isArray(n) ? n : [n]))
        },
        f = function(i) {
            return i === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = i), t.currTemplate.closeBtn
        },
        h = function() {
            e.magnificPopup.instance || (t = new a, t.init(), e.magnificPopup.instance = t)
        },
        m = function() {
            var e = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== e.transition) return !0;
            for (; t.length;)
                if (t.pop() + "Transition" in e) return !0;
            return !1
        };
    a.prototype = {
        constructor: a,
        init: function() {
            var i = navigator.appVersion;
            t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(i), t.isIOS = /iphone|ipad|ipod/gi.test(i), t.supportsTransition = m(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = e(document), t.popupsCache = {}
        },
        open: function(i) {
            var o;
            if (!1 === i.isObj) {
                t.items = i.items.toArray(), t.index = 0;
                var s, a = i.items;
                for (o = 0; o < a.length; o++)
                    if (s = a[o], s.parsed && (s = s.el[0]), s === i.el[0]) {
                        t.index = o;
                        break
                    }
            } else t.items = e.isArray(i.items) ? i.items : [i.items], t.index = i.index || 0;
            if (t.isOpen) return void t.updateItemHTML();
            t.types = [], r = "", i.mainEl && i.mainEl.length ? t.ev = i.mainEl.eq(0) : t.ev = n, i.key ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}), t.currTemplate = t.popupsCache[i.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, i), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = d("bg").on("click.mfp", function() {
                t.close()
            }), t.wrap = d("wrap").attr("tabindex", -1).on("click.mfp", function(e) {
                t._checkIfClose(e.target) && t.close()
            }), t.container = d("container", t.wrap)), t.contentContainer = d("content"), t.st.preloader && (t.preloader = d("preloader", t.container, t.st.tLoading));
            var l = e.magnificPopup.modules;
            for (o = 0; o < l.length; o++) {
                var h = l[o];
                h = h.charAt(0).toUpperCase() + h.slice(1), t["init" + h].call(t)
            }
            p("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (u("MarkupParse", function(e, t, i, n) {
                i.close_replaceWith = f(n.type)
            }), r += " mfp-close-btn-in") : t.wrap.append(f())), t.st.alignTop && (r += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: c.scrollTop(),
                position: "absolute"
            }), (!1 === t.st.fixedBgPos || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: n.height(),
                position: "absolute"
            }), t.st.enableEscapeKey && n.on("keyup.mfp", function(e) {
                27 === e.keyCode && t.close()
            }), c.on("resize.mfp", function() {
                t.updateSize()
            }), t.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && t.wrap.addClass(r);
            var m = t.wH = c.height(),
                v = {};
            if (t.fixedContentPos && t._hasScrollBar(m)) {
                var g = t._getScrollbarSize();
                g && (v.marginRight = g)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : v.overflow = "hidden");
            var y = t.st.mainClass;
            return t.isIE7 && (y += " mfp-ie7"), y && t._addClassToMFP(y), t.updateItemHTML(), p("BuildControls"), e("html").css(v), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function() {
                t.content ? (t._addClassToMFP("mfp-ready"), t._setFocus()) : t.bgOverlay.addClass("mfp-ready"), n.on("focusin.mfp", t._onFocusIn)
            }, 16), t.isOpen = !0, t.updateSize(m), p("Open"), i
        },
        close: function() {
            t.isOpen && (p("BeforeClose"), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP("mfp-removing"), setTimeout(function() {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function() {
            p("Close");
            var i = "mfp-removing mfp-ready ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (i += t.st.mainClass + " "), t._removeClassFromMFP(i), t.fixedContentPos) {
                var o = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "", e("html").css(o)
            }
            n.off("keyup.mfp focusin.mfp"), t.ev.off(".mfp"), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, p("AfterClose")
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var i = document.documentElement.clientWidth / window.innerWidth,
                    n = window.innerHeight * i;
                t.wrap.css("height", n), t.wH = n
            } else t.wH = e || c.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), p("Resize")
        },
        updateItemHTML: function() {
            var i = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), i.parsed || (i = t.parseEl(t.index));
            var n = i.type;
            if (p("BeforeChange", [t.currItem ? t.currItem.type : "", n]), t.currItem = i, !t.currTemplate[n]) {
                var r = !!t.st[n] && t.st[n].markup;
                p("FirstMarkupParse", r), t.currTemplate[n] = !r || e(r)
            }
            o && o !== i.type && t.container.removeClass("mfp-" + o + "-holder");
            var s = t["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, t.currTemplate[n]);
            t.appendContent(s, n), i.preloaded = !0, p("Change", i), o = i.type, t.container.prepend(t.contentContainer), p("AfterChange")
        },
        appendContent: function(e, i) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[i] ? t.content.find(".mfp-close").length || t.content.append(f()) : t.content = e : t.content = "", p("BeforeAppend"), t.container.addClass("mfp-" + i + "-holder"), t.contentContainer.append(t.content)
        },
        parseEl: function(i) {
            var n, o = t.items[i];
            if (o.tagName ? o = {
                    el: e(o)
                } : (n = o.type, o = {
                    data: o,
                    src: o.src
                }), o.el) {
                for (var r = t.types, s = 0; s < r.length; s++)
                    if (o.el.hasClass("mfp-" + r[s])) {
                        n = r[s];
                        break
                    }
                o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
            }
            return o.type = n || t.st.type || "inline", o.index = i, o.parsed = !0, t.items[i] = o, p("ElementParse", o), t.items[i]
        },
        addGroup: function(e, i) {
            var n = function(n) {
                n.mfpEl = this, t._openClick(n, e, i)
            };
            i || (i = {});
            var o = "click.magnificPopup";
            i.mainEl = e, i.items ? (i.isObj = !0, e.off(o).on(o, n)) : (i.isObj = !1, i.delegate ? e.off(o).on(o, i.delegate, n) : (i.items = e, e.off(o).on(o, n)))
        },
        _openClick: function(i, n, o) {
            if ((void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                var r = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (r)
                    if (e.isFunction(r)) {
                        if (!r.call(t)) return !0
                    } else if (c.width() < r) return !0;
                i.type && (i.preventDefault(), t.isOpen && i.stopPropagation()), o.el = e(i.mfpEl), o.delegate && (o.items = n.find(o.delegate)), t.open(o)
            }
        },
        updateStatus: function(e, n) {
            if (t.preloader) {
                i !== e && t.container.removeClass("mfp-s-" + i), n || "loading" !== e || (n = t.st.tLoading);
                var o = {
                    status: e,
                    text: n
                };
                p("UpdateStatus", o), e = o.status, n = o.text, t.preloader.html(n), t.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }), t.container.addClass("mfp-s-" + e), i = e
            }
        },
        _checkIfClose: function(i) {
            if (!e(i).hasClass("mfp-prevent-close")) {
                var n = t.st.closeOnContentClick,
                    o = t.st.closeOnBgClick;
                if (n && o) return !0;
                if (!t.content || e(i).hasClass("mfp-close") || t.preloader && i === t.preloader[0]) return !0;
                if (i === t.content[0] || e.contains(t.content[0], i)) {
                    if (n) return !0
                } else if (o && e.contains(document, i)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (t.isIE7 ? n.height() : document.body.scrollHeight) > (e || c.height())
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(i) {
            if (i.target !== t.wrap[0] && !e.contains(t.wrap[0], i.target)) return t._setFocus(), !1
        },
        _parseMarkup: function(t, i, n) {
            var o;
            n.data && (i = e.extend(n.data, i)), p("MarkupParse", [t, i, n]), e.each(i, function(i, n) {
                if (void 0 === n || !1 === n) return !0;
                if (o = i.split("_"), o.length > 1) {
                    var r = t.find(".mfp-" + o[0]);
                    if (r.length > 0) {
                        var s = o[1];
                        "replaceWith" === s ? r[0] !== n[0] && r.replaceWith(n) : "img" === s ? r.is("img") ? r.attr("src", n) : r.replaceWith(e("<img>").attr("src", n).attr("class", r.attr("class"))) : r.attr(o[1], n)
                    }
                } else t.find(".mfp-" + i).html(n)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: a.prototype,
        modules: [],
        open: function(t, i) {
            return h(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = i || 0, this.instance.open(t)
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function(t, i) {
            i.options && (e.magnificPopup.defaults[t] = i.options), e.extend(this.proto, i.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, e.fn.magnificPopup = function(i) {
        h();
        var n = e(this);
        if ("string" == typeof i)
            if ("open" === i) {
                var o, r = l ? n.data("magnificPopup") : n[0].magnificPopup,
                    s = parseInt(arguments[1], 10) || 0;
                r.items ? o = r.items[s] : (o = n, r.delegate && (o = o.find(r.delegate)), o = o.eq(s)), t._openClick({
                    mfpEl: o
                }, n, r)
            } else t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1));
        else i = e.extend(!0, {}, i), l ? n.data("magnificPopup", i) : n[0].magnificPopup = i, t.addGroup(n, i);
        return n
    };
    var v, g, y, w = function() {
        y && (g.after(y.addClass(v)).detach(), y = null)
    };
    e.magnificPopup.registerModule("inline", {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push("inline"), u("Close.inline", function() {
                    w()
                })
            },
            getInline: function(i, n) {
                if (w(), i.src) {
                    var o = t.st.inline,
                        r = e(i.src);
                    if (r.length) {
                        var s = r[0].parentNode;
                        s && s.tagName && (g || (v = o.hiddenClass, g = d(v), v = "mfp-" + v), y = r.after(g).detach().removeClass(v)), t.updateStatus("ready")
                    } else t.updateStatus("error", o.tNotFound), r = e("<div>");
                    return i.inlineElement = r, r
                }
                return t.updateStatus("ready"), t._parseMarkup(n, {}, i), n
            }
        }
    });
    var b, T = function() {
            b && e(document.body).removeClass(b)
        },
        x = function() {
            T(), t.req && t.req.abort()
        };
    e.magnificPopup.registerModule("ajax", {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push("ajax"), b = t.st.ajax.cursor, u("Close.ajax", x), u("BeforeChange.ajax", x)
            },
            getAjax: function(i) {
                b && e(document.body).addClass(b), t.updateStatus("loading");
                var n = e.extend({
                    url: i.src,
                    success: function(n, o, r) {
                        var s = {
                            data: n,
                            xhr: r
                        };
                        p("ParseAjax", s), t.appendContent(e(s.data), "ajax"), i.finished = !0, T(), t._setFocus(), setTimeout(function() {
                            t.wrap.addClass("mfp-ready")
                        }, 16), t.updateStatus("ready"), p("AjaxContentAdded")
                    },
                    error: function() {
                        T(), i.finished = i.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", i.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(n), ""
            }
        }
    });
    var k, C = function(i) {
        if (i.data && void 0 !== i.data.title) return i.data.title;
        var n = t.st.image.titleSrc;
        if (n) {
            if (e.isFunction(n)) return n.call(t, i);
            if (i.el) return i.el.attr(n) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var i = t.st.image,
                    n = ".image";
                t.types.push("image"), u("Open" + n, function() {
                    "image" === t.currItem.type && i.cursor && e(document.body).addClass(i.cursor)
                }), u("Close" + n, function() {
                    i.cursor && e(document.body).removeClass(i.cursor), c.off("resize.mfp")
                }), u("Resize" + n, t.resizeImage), t.isLowIE && u("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var i = 0;
                    t.isLowIE && (i = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - i)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0, k && clearInterval(k), e.isCheckingImgSize = !1, p("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function(e) {
                var i = 0,
                    n = e.img[0],
                    o = function(r) {
                        k && clearInterval(k), k = setInterval(function() {
                            if (n.naturalWidth > 0) return void t._onImageHasSize(e);
                            i > 200 && clearInterval(k), i++, 3 === i ? o(10) : 40 === i ? o(50) : 100 === i && o(500)
                        }, r)
                    };
                o(1)
            },
            getImage: function(i, n) {
                var o = 0,
                    r = function() {
                        i && (i.img[0].complete ? (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, p("ImageLoadComplete")) : (o++, o < 200 ? setTimeout(r, 100) : s()))
                    },
                    s = function() {
                        i && (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                    },
                    a = t.st.image,
                    l = n.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")), i.img = e(c).on("load.mfploader", r).on("error.mfploader", s), c.src = i.src, l.is("img") && (i.img = i.img.clone()), c = i.img[0], c.naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
                }
                return t._parseMarkup(n, {
                    title: C(i),
                    img_replaceWith: i.img
                }, i), t.resizeImage(), i.hasSize ? (k && clearInterval(k), i.loadError ? (n.addClass("mfp-loading"), t.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), t.updateStatus("ready")), n) : (t.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), t.findImageSize(i)), n)
            }
        }
    });
    var S, E = function() {
        return void 0 === S && (S = void 0 !== document.createElement("p").style.MozTransform), S
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, i = t.st.zoom,
                    n = ".zoom";
                if (i.enabled && t.supportsTransition) {
                    var o, r, s = i.duration,
                        a = function(e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                n = "all " + i.duration / 1e3 + "s " + i.easing,
                                o = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                r = "transition";
                            return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = n, t.css(o), t
                        },
                        l = function() {
                            t.content.css("visibility", "visible")
                        };
                    u("BuildControls" + n, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.content.css("visibility", "hidden"), !(e = t._getItemToZoom())) return void l();
                            r = a(e), r.css(t._getOffset()), t.wrap.append(r), o = setTimeout(function() {
                                r.css(t._getOffset(!0)), o = setTimeout(function() {
                                    l(), setTimeout(function() {
                                        r.remove(), e = r = null, p("ZoomAnimationEnded")
                                    }, 16)
                                }, s)
                            }, 16)
                        }
                    }), u("BeforeClose" + n, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.st.removalDelay = s, !e) {
                                if (!(e = t._getItemToZoom())) return;
                                r = a(e)
                            }
                            r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function() {
                                r.css(t._getOffset())
                            }, 16)
                        }
                    }), u("Close" + n, function() {
                        t._allowZoom() && (l(), r && r.remove(), e = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function() {
                return !!t.currItem.hasSize && t.currItem.img
            },
            _getOffset: function(i) {
                var n;
                n = i ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var o = n.offset(),
                    r = parseInt(n.css("padding-top"), 10),
                    s = parseInt(n.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - r;
                var a = {
                    width: n.width(),
                    height: (l ? n.innerHeight() : n[0].offsetHeight) - s - r
                };
                return E() ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a
            }
        }
    });
    var $ = function(e) {
        if (t.currTemplate.iframe) {
            var i = t.currTemplate.iframe.find("iframe");
            i.length && (e || (i[0].src = "//about:blank"), t.isIE8 && i.css("display", e ? "block" : "none"))
        }
    };
    e.magnificPopup.registerModule("iframe", {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push("iframe"), u("BeforeChange", function(e, t, i) {
                    t !== i && ("iframe" === t ? $() : "iframe" === i && $(!0))
                }), u("Close.iframe", function() {
                    $()
                })
            },
            getIframe: function(i, n) {
                var o = i.src,
                    r = t.st.iframe;
                e.each(r.patterns, function() {
                    if (o.indexOf(this.index) > -1) return this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1
                });
                var s = {};
                return r.srcAction && (s[r.srcAction] = o), t._parseMarkup(n, s, i), t.updateStatus("ready"), n
            }
        }
    });
    var A = function(e) {
            var i = t.items.length;
            return e > i - 1 ? e - i : e < 0 ? i + e : e
        },
        O = function(e, t, i) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i)
        };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var i = t.st.gallery,
                    o = ".mfp-gallery";
                if (t.direction = !0, !i || !i.enabled) return !1;
                r += " mfp-gallery", u("Open" + o, function() {
                    i.navigateByImgClick && t.wrap.on("click" + o, ".mfp-img", function() {
                        if (t.items.length > 1) return t.next(), !1
                    }), n.on("keydown" + o, function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }), u("UpdateStatus" + o, function(e, i) {
                    i.text && (i.text = O(i.text, t.currItem.index, t.items.length))
                }), u("MarkupParse" + o, function(e, n, o, r) {
                    var s = t.items.length;
                    o.counter = s > 1 ? O(i.tCounter, r.index, s) : ""
                }), u("BuildControls" + o, function() {
                    if (t.items.length > 1 && i.arrows && !t.arrowLeft) {
                        var n = i.arrowMarkup,
                            o = t.arrowLeft = e(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass("mfp-prevent-close"),
                            r = t.arrowRight = e(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass("mfp-prevent-close");
                        o.click(function() {
                            t.prev()
                        }), r.click(function() {
                            t.next()
                        }), t.container.append(o.add(r))
                    }
                }), u("Change" + o, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages(), t._preloadTimeout = null
                    }, 16)
                }), u("Close" + o, function() {
                    n.off(o), t.wrap.off("click" + o), t.arrowRight = t.arrowLeft = null
                })
            },
            next: function() {
                t.direction = !0, t.index = A(t.index + 1), t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1, t.index = A(t.index - 1), t.updateItemHTML()
            },
            goTo: function(e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, i = t.st.gallery.preload,
                    n = Math.min(i[0], t.items.length),
                    o = Math.min(i[1], t.items.length);
                for (e = 1; e <= (t.direction ? o : n); e++) t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? n : o); e++) t._preloadItem(t.index - e)
            },
            _preloadItem: function(i) {
                if (i = A(i), !t.items[i].preloaded) {
                    var n = t.items[i];
                    n.parsed || (n = t.parseEl(i)), p("LazyLoad", n), "image" === n.type && (n.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                        n.hasSize = !0
                    }).on("error.mfploader", function() {
                        n.hasSize = !0, n.loadError = !0, p("LazyLoadError", n)
                    }).attr("src", n.src)), n.preloaded = !0
                }
            }
        }
    }), e.magnificPopup.registerModule("retina", {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina,
                        i = e.ratio;
                    (i = isNaN(i) ? i() : i) > 1 && (u("ImageHasSize.retina", function(e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / i,
                            width: "100%"
                        })
                    }), u("ElementParse.retina", function(t, n) {
                        n.src = e.replaceSrc(n, i)
                    }))
                }
            }
        }
    }), h()
}),
function(e, t) {
    "function" == typeof define && define.amd ? define([], function() {
        return e.svg4everybody = t()
    }) : "object" == typeof module && module.exports ? module.exports = t() : e.svg4everybody = t()
}(this, function() {
    function e(e, t, i) {
        if (i) {
            var n = document.createDocumentFragment(),
                o = !t.hasAttribute("viewBox") && i.getAttribute("viewBox");
            o && t.setAttribute("viewBox", o);
            for (var r = i.cloneNode(!0); r.childNodes.length;) n.appendChild(r.firstChild);
            e.appendChild(n)
        }
    }

    function t(t) {
        t.onreadystatechange = function() {
            if (4 === t.readyState) {
                var i = t._cachedDocument;
                i || (i = t._cachedDocument = document.implementation.createHTMLDocument(""), i.body.innerHTML = t.responseText, t._cachedTarget = {}), t._embeds.splice(0).map(function(n) {
                    var o = t._cachedTarget[n.id];
                    o || (o = t._cachedTarget[n.id] = i.getElementById(n.id)), e(n.parent, n.svg, o)
                })
            }
        }, t.onreadystatechange()
    }

    function i(i) {
        function o() {
            for (var i = 0; i < p.length;) {
                var a = p[i],
                    l = a.parentNode,
                    c = n(l);
                if (c) {
                    var f = a.getAttribute("xlink:href") || a.getAttribute("href");
                    if (r && (!s.validate || s.validate(f, c, a))) {
                        l.removeChild(a);
                        var h = f.split("#"),
                            m = h.shift(),
                            v = h.join("#");
                        if (m.length) {
                            var g = u[m];
                            g || (g = u[m] = new XMLHttpRequest, g.open("GET", m), g.send(), g._embeds = []), g._embeds.push({
                                parent: l,
                                svg: c,
                                id: v
                            }), t(g)
                        } else e(l, document.getElementById(v))
                    }
                } else ++i
            }
            d(o, 67)
        }
        var r, s = Object(i),
            a = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,
            l = /\bAppleWebKit\/(\d+)\b/,
            c = /\bEdge\/12\.(\d+)\b/;
        r = "polyfill" in s ? s.polyfill : a.test(navigator.userAgent) || (navigator.userAgent.match(c) || [])[1] < 10547 || (navigator.userAgent.match(l) || [])[1] < 537;
        var u = {},
            d = window.requestAnimationFrame || setTimeout,
            p = document.getElementsByTagName("use");
        r && o()
    }

    function n(e) {
        for (var t = e;
            "svg" !== t.nodeName.toLowerCase() && (t = t.parentNode););
        return t
    }
    return i
}),
function(e, t, i, n) {
    "use strict";

    function o(e, t, i) {
        return setTimeout(c(e, i), t)
    }

    function r(e, t, i) {
        return !!Array.isArray(e) && (s(e, i[t], i), !0)
    }

    function s(e, t, i) {
        var o;
        if (e)
            if (e.forEach) e.forEach(t, i);
            else if (e.length !== n)
            for (o = 0; o < e.length;) t.call(i, e[o], o, e), o++;
        else
            for (o in e) e.hasOwnProperty(o) && t.call(i, e[o], o, e)
    }

    function a(t, i, n) {
        var o = "DEPRECATED METHOD: " + i + "\n" + n + " AT \n";
        return function() {
            var i = new Error("get-stack-trace"),
                n = i && i.stack ? i.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                r = e.console && (e.console.warn || e.console.log);
            return r && r.call(e.console, o, n), t.apply(this, arguments)
        }
    }

    function l(e, t, i) {
        var n, o = t.prototype;
        n = e.prototype = Object.create(o), n.constructor = e, n._super = o, i && ue(n, i)
    }

    function c(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function u(e, t) {
        return typeof e == fe ? e.apply(t ? t[0] || n : n, t) : e
    }

    function d(e, t) {
        return e === n ? t : e
    }

    function p(e, t, i) {
        s(v(t), function(t) {
            e.addEventListener(t, i, !1)
        })
    }

    function f(e, t, i) {
        s(v(t), function(t) {
            e.removeEventListener(t, i, !1)
        })
    }

    function h(e, t) {
        for (; e;) {
            if (e == t) return !0;
            e = e.parentNode
        }
        return !1
    }

    function m(e, t) {
        return e.indexOf(t) > -1
    }

    function v(e) {
        return e.trim().split(/\s+/g)
    }

    function g(e, t, i) {
        if (e.indexOf && !i) return e.indexOf(t);
        for (var n = 0; n < e.length;) {
            if (i && e[n][i] == t || !i && e[n] === t) return n;
            n++
        }
        return -1
    }

    function y(e) {
        return Array.prototype.slice.call(e, 0)
    }

    function w(e, t, i) {
        for (var n = [], o = [], r = 0; r < e.length;) {
            var s = t ? e[r][t] : e[r];
            g(o, s) < 0 && n.push(e[r]), o[r] = s, r++
        }
        return i && (n = t ? n.sort(function(e, i) {
            return e[t] > i[t]
        }) : n.sort()), n
    }

    function b(e, t) {
        for (var i, o, r = t[0].toUpperCase() + t.slice(1), s = 0; s < de.length;) {
            if (i = de[s], (o = i ? i + r : t) in e) return o;
            s++
        }
        return n
    }

    function T() {
        return we++
    }

    function x(t) {
        var i = t.ownerDocument || t;
        return i.defaultView || i.parentWindow || e
    }

    function k(e, t) {
        var i = this;
        this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(t) {
            u(e.options.enable, [e]) && i.handler(t)
        }, this.init()
    }

    function C(e) {
        return new(e.options.inputClass || (xe ? z : ke ? F : Te ? W : M))(e, S)
    }

    function S(e, t, i) {
        var n = i.pointers.length,
            o = i.changedPointers.length,
            r = t & $e && n - o == 0,
            s = t & (Oe | Pe) && n - o == 0;
        i.isFirst = !!r, i.isFinal = !!s, r && (e.session = {}), i.eventType = t, E(e, i), e.emit("hammer.input", i), e.recognize(i), e.session.prevInput = i
    }

    function E(e, t) {
        var i = e.session,
            n = t.pointers,
            o = n.length;
        i.firstInput || (i.firstInput = O(t)), o > 1 && !i.firstMultiple ? i.firstMultiple = O(t) : 1 === o && (i.firstMultiple = !1);
        var r = i.firstInput,
            s = i.firstMultiple,
            a = s ? s.center : r.center,
            l = t.center = P(n);
        t.timeStamp = ve(), t.deltaTime = t.timeStamp - r.timeStamp, t.angle = H(a, l), t.distance = N(a, l), $(i, t), t.offsetDirection = D(t.deltaX, t.deltaY);
        var c = I(t.deltaTime, t.deltaX, t.deltaY);
        t.overallVelocityX = c.x, t.overallVelocityY = c.y, t.overallVelocity = me(c.x) > me(c.y) ? c.x : c.y, t.scale = s ? j(s.pointers, n) : 1, t.rotation = s ? L(s.pointers, n) : 0, t.maxPointers = i.prevInput ? t.pointers.length > i.prevInput.maxPointers ? t.pointers.length : i.prevInput.maxPointers : t.pointers.length, A(i, t);
        var u = e.element;
        h(t.srcEvent.target, u) && (u = t.srcEvent.target), t.target = u
    }

    function $(e, t) {
        var i = t.center,
            n = e.offsetDelta || {},
            o = e.prevDelta || {},
            r = e.prevInput || {};
        t.eventType !== $e && r.eventType !== Oe || (o = e.prevDelta = {
            x: r.deltaX || 0,
            y: r.deltaY || 0
        }, n = e.offsetDelta = {
            x: i.x,
            y: i.y
        }), t.deltaX = o.x + (i.x - n.x), t.deltaY = o.y + (i.y - n.y)
    }

    function A(e, t) {
        var i, o, r, s, a = e.lastInterval || t,
            l = t.timeStamp - a.timeStamp;
        if (t.eventType != Pe && (l > Ee || a.velocity === n)) {
            var c = t.deltaX - a.deltaX,
                u = t.deltaY - a.deltaY,
                d = I(l, c, u);
            o = d.x, r = d.y, i = me(d.x) > me(d.y) ? d.x : d.y, s = D(c, u), e.lastInterval = t
        } else i = a.velocity, o = a.velocityX, r = a.velocityY, s = a.direction;
        t.velocity = i, t.velocityX = o, t.velocityY = r, t.direction = s
    }

    function O(e) {
        for (var t = [], i = 0; i < e.pointers.length;) t[i] = {
            clientX: he(e.pointers[i].clientX),
            clientY: he(e.pointers[i].clientY)
        }, i++;
        return {
            timeStamp: ve(),
            pointers: t,
            center: P(t),
            deltaX: e.deltaX,
            deltaY: e.deltaY
        }
    }

    function P(e) {
        var t = e.length;
        if (1 === t) return {
            x: he(e[0].clientX),
            y: he(e[0].clientY)
        };
        for (var i = 0, n = 0, o = 0; t > o;) i += e[o].clientX, n += e[o].clientY, o++;
        return {
            x: he(i / t),
            y: he(n / t)
        }
    }

    function I(e, t, i) {
        return {
            x: t / e || 0,
            y: i / e || 0
        }
    }

    function D(e, t) {
        return e === t ? Ie : me(e) >= me(t) ? 0 > e ? De : Ne : 0 > t ? He : Le
    }

    function N(e, t, i) {
        i || (i = qe);
        var n = t[i[0]] - e[i[0]],
            o = t[i[1]] - e[i[1]];
        return Math.sqrt(n * n + o * o)
    }

    function H(e, t, i) {
        i || (i = qe);
        var n = t[i[0]] - e[i[0]],
            o = t[i[1]] - e[i[1]];
        return 180 * Math.atan2(o, n) / Math.PI
    }

    function L(e, t) {
        return H(t[1], t[0], _e) + H(e[1], e[0], _e)
    }

    function j(e, t) {
        return N(t[0], t[1], _e) / N(e[0], e[1], _e)
    }

    function M() {
        this.evEl = Re, this.evWin = We, this.pressed = !1, k.apply(this, arguments)
    }

    function z() {
        this.evEl = Ye, this.evWin = Ue, k.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function q() {
        this.evTarget = Ge, this.evWin = Ze, this.started = !1, k.apply(this, arguments)
    }

    function _(e, t) {
        var i = y(e.touches),
            n = y(e.changedTouches);
        return t & (Oe | Pe) && (i = w(i.concat(n), "identifier", !0)), [i, n]
    }

    function F() {
        this.evTarget = Qe, this.targetIds = {}, k.apply(this, arguments)
    }

    function R(e, t) {
        var i = y(e.touches),
            n = this.targetIds;
        if (t & ($e | Ae) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
        var o, r, s = y(e.changedTouches),
            a = [],
            l = this.target;
        if (r = i.filter(function(e) {
                return h(e.target, l)
            }), t === $e)
            for (o = 0; o < r.length;) n[r[o].identifier] = !0, o++;
        for (o = 0; o < s.length;) n[s[o].identifier] && a.push(s[o]), t & (Oe | Pe) && delete n[s[o].identifier], o++;
        return a.length ? [w(r.concat(a), "identifier", !0), a] : void 0
    }

    function W() {
        k.apply(this, arguments);
        var e = c(this.handler, this);
        this.touch = new F(this.manager, e), this.mouse = new M(this.manager, e), this.primaryTouch = null, this.lastTouches = []
    }

    function B(e, t) {
        e & $e ? (this.primaryTouch = t.changedPointers[0].identifier, X.call(this, t)) : e & (Oe | Pe) && X.call(this, t)
    }

    function X(e) {
        var t = e.changedPointers[0];
        if (t.identifier === this.primaryTouch) {
            var i = {
                x: t.clientX,
                y: t.clientY
            };
            this.lastTouches.push(i);
            var n = this.lastTouches,
                o = function() {
                    var e = n.indexOf(i);
                    e > -1 && n.splice(e, 1)
                };
            setTimeout(o, Je)
        }
    }

    function Y(e) {
        for (var t = e.srcEvent.clientX, i = e.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
            var o = this.lastTouches[n],
                r = Math.abs(t - o.x),
                s = Math.abs(i - o.y);
            if (et >= r && et >= s) return !0
        }
        return !1
    }

    function U(e, t) {
        this.manager = e, this.set(t)
    }

    function V(e) {
        if (m(e, st)) return st;
        var t = m(e, at),
            i = m(e, lt);
        return t && i ? st : t || i ? t ? at : lt : m(e, rt) ? rt : ot
    }

    function G(e) {
        this.options = ue({}, this.defaults, e || {}), this.id = T(), this.manager = null, this.options.enable = d(this.options.enable, !0), this.state = ut, this.simultaneous = {}, this.requireFail = []
    }

    function Z(e) {
        return e & mt ? "cancel" : e & ft ? "end" : e & pt ? "move" : e & dt ? "start" : ""
    }

    function K(e) {
        return e == Le ? "down" : e == He ? "up" : e == De ? "left" : e == Ne ? "right" : ""
    }

    function Q(e, t) {
        var i = t.manager;
        return i ? i.get(e) : e
    }

    function J() {
        G.apply(this, arguments)
    }

    function ee() {
        J.apply(this, arguments), this.pX = null, this.pY = null
    }

    function te() {
        J.apply(this, arguments)
    }

    function ie() {
        G.apply(this, arguments), this._timer = null, this._input = null
    }

    function ne() {
        J.apply(this, arguments)
    }

    function oe() {
        J.apply(this, arguments)
    }

    function re() {
        G.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function se(e, t) {
        return t = t || {}, t.recognizers = d(t.recognizers, se.defaults.preset), new ae(e, t)
    }

    function ae(e, t) {
        this.options = ue({}, se.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = C(this), this.touchAction = new U(this, this.options.touchAction), le(this, !0), s(this.options.recognizers, function(e) {
            var t = this.add(new e[0](e[1]));
            e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
        }, this)
    }

    function le(e, t) {
        var i = e.element;
        if (i.style) {
            var n;
            s(e.options.cssProps, function(o, r) {
                n = b(i.style, r), t ? (e.oldCssProps[n] = i.style[n], i.style[n] = o) : i.style[n] = e.oldCssProps[n] || ""
            }), t || (e.oldCssProps = {})
        }
    }

    function ce(e, i) {
        var n = t.createEvent("Event");
        n.initEvent(e, !0, !0), n.gesture = i, i.target.dispatchEvent(n)
    }
    var ue, de = ["", "webkit", "Moz", "MS", "ms", "o"],
        pe = t.createElement("div"),
        fe = "function",
        he = Math.round,
        me = Math.abs,
        ve = Date.now;
    ue = "function" != typeof Object.assign ? function(e) {
        if (e === n || null === e) throw new TypeError("Cannot convert undefined or null to object");
        for (var t = Object(e), i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            if (o !== n && null !== o)
                for (var r in o) o.hasOwnProperty(r) && (t[r] = o[r])
        }
        return t
    } : Object.assign;
    var ge = a(function(e, t, i) {
            for (var o = Object.keys(t), r = 0; r < o.length;)(!i || i && e[o[r]] === n) && (e[o[r]] = t[o[r]]), r++;
            return e
        }, "extend", "Use `assign`."),
        ye = a(function(e, t) {
            return ge(e, t, !0)
        }, "merge", "Use `assign`."),
        we = 1,
        be = /mobile|tablet|ip(ad|hone|od)|android/i,
        Te = "ontouchstart" in e,
        xe = b(e, "PointerEvent") !== n,
        ke = Te && be.test(navigator.userAgent),
        Ce = "touch",
        Se = "mouse",
        Ee = 25,
        $e = 1,
        Ae = 2,
        Oe = 4,
        Pe = 8,
        Ie = 1,
        De = 2,
        Ne = 4,
        He = 8,
        Le = 16,
        je = De | Ne,
        Me = He | Le,
        ze = je | Me,
        qe = ["x", "y"],
        _e = ["clientX", "clientY"];
    k.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(x(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(x(this.element), this.evWin, this.domHandler)
        }
    };
    var Fe = {
            mousedown: $e,
            mousemove: Ae,
            mouseup: Oe
        },
        Re = "mousedown",
        We = "mousemove mouseup";
    l(M, k, {
        handler: function(e) {
            var t = Fe[e.type];
            t & $e && 0 === e.button && (this.pressed = !0), t & Ae && 1 !== e.which && (t = Oe), this.pressed && (t & Oe && (this.pressed = !1), this.callback(this.manager, t, {
                pointers: [e],
                changedPointers: [e],
                pointerType: Se,
                srcEvent: e
            }))
        }
    });
    var Be = {
            pointerdown: $e,
            pointermove: Ae,
            pointerup: Oe,
            pointercancel: Pe,
            pointerout: Pe
        },
        Xe = {
            2: Ce,
            3: "pen",
            4: Se,
            5: "kinect"
        },
        Ye = "pointerdown",
        Ue = "pointermove pointerup pointercancel";
    e.MSPointerEvent && !e.PointerEvent && (Ye = "MSPointerDown", Ue = "MSPointerMove MSPointerUp MSPointerCancel"), l(z, k, {
        handler: function(e) {
            var t = this.store,
                i = !1,
                n = e.type.toLowerCase().replace("ms", ""),
                o = Be[n],
                r = Xe[e.pointerType] || e.pointerType,
                s = r == Ce,
                a = g(t, e.pointerId, "pointerId");
            o & $e && (0 === e.button || s) ? 0 > a && (t.push(e), a = t.length - 1) : o & (Oe | Pe) && (i = !0), 0 > a || (t[a] = e, this.callback(this.manager, o, {
                pointers: t,
                changedPointers: [e],
                pointerType: r,
                srcEvent: e
            }), i && t.splice(a, 1))
        }
    });
    var Ve = {
            touchstart: $e,
            touchmove: Ae,
            touchend: Oe,
            touchcancel: Pe
        },
        Ge = "touchstart",
        Ze = "touchstart touchmove touchend touchcancel";
    l(q, k, {
        handler: function(e) {
            var t = Ve[e.type];
            if (t === $e && (this.started = !0), this.started) {
                var i = _.call(this, e, t);
                t & (Oe | Pe) && i[0].length - i[1].length == 0 && (this.started = !1), this.callback(this.manager, t, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: Ce,
                    srcEvent: e
                })
            }
        }
    });
    var Ke = {
            touchstart: $e,
            touchmove: Ae,
            touchend: Oe,
            touchcancel: Pe
        },
        Qe = "touchstart touchmove touchend touchcancel";
    l(F, k, {
        handler: function(e) {
            var t = Ke[e.type],
                i = R.call(this, e, t);
            i && this.callback(this.manager, t, {
                pointers: i[0],
                changedPointers: i[1],
                pointerType: Ce,
                srcEvent: e
            })
        }
    });
    var Je = 2500,
        et = 25;
    l(W, k, {
        handler: function(e, t, i) {
            var n = i.pointerType == Ce,
                o = i.pointerType == Se;
            if (!(o && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                if (n) B.call(this, t, i);
                else if (o && Y.call(this, i)) return;
                this.callback(e, t, i)
            }
        },
        destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var tt = b(pe.style, "touchAction"),
        it = tt !== n,
        nt = "compute",
        ot = "auto",
        rt = "manipulation",
        st = "none",
        at = "pan-x",
        lt = "pan-y",
        ct = function() {
            if (!it) return !1;
            var t = {},
                i = e.CSS && e.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(n) {
                t[n] = !i || e.CSS.supports("touch-action", n)
            }), t
        }();
    U.prototype = {
        set: function(e) {
            e == nt && (e = this.compute()), it && this.manager.element.style && ct[e] && (this.manager.element.style[tt] = e), this.actions = e.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var e = [];
            return s(this.manager.recognizers, function(t) {
                u(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
            }), V(e.join(" "))
        },
        preventDefaults: function(e) {
            var t = e.srcEvent,
                i = e.offsetDirection;
            if (this.manager.session.prevented) return void t.preventDefault();
            var n = this.actions,
                o = m(n, st) && !ct[st],
                r = m(n, lt) && !ct[lt],
                s = m(n, at) && !ct[at];
            if (o) {
                var a = 1 === e.pointers.length,
                    l = e.distance < 2,
                    c = e.deltaTime < 250;
                if (a && l && c) return
            }
            return s && r ? void 0 : o || r && i & je || s && i & Me ? this.preventSrc(t) : void 0
        },
        preventSrc: function(e) {
            this.manager.session.prevented = !0, e.preventDefault()
        }
    };
    var ut = 1,
        dt = 2,
        pt = 4,
        ft = 8,
        ht = ft,
        mt = 16;
    G.prototype = {
        defaults: {},
        set: function(e) {
            return ue(this.options, e), this.manager && this.manager.touchAction.update(), this
        },
        recognizeWith: function(e) {
            if (r(e, "recognizeWith", this)) return this;
            var t = this.simultaneous;
            return e = Q(e, this), t[e.id] || (t[e.id] = e, e.recognizeWith(this)), this
        },
        dropRecognizeWith: function(e) {
            return r(e, "dropRecognizeWith", this) ? this : (e = Q(e, this), delete this.simultaneous[e.id], this)
        },
        requireFailure: function(e) {
            if (r(e, "requireFailure", this)) return this;
            var t = this.requireFail;
            return e = Q(e, this), -1 === g(t, e) && (t.push(e), e.requireFailure(this)), this
        },
        dropRequireFailure: function(e) {
            if (r(e, "dropRequireFailure", this)) return this;
            e = Q(e, this);
            var t = g(this.requireFail, e);
            return t > -1 && this.requireFail.splice(t, 1), this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(e) {
            return !!this.simultaneous[e.id]
        },
        emit: function(e) {
            function t(t) {
                i.manager.emit(t, e)
            }
            var i = this,
                n = this.state;
            ft > n && t(i.options.event + Z(n)), t(i.options.event), e.additionalEvent && t(e.additionalEvent), n >= ft && t(i.options.event + Z(n))
        },
        tryEmit: function(e) {
            return this.canEmit() ? this.emit(e) : void(this.state = 32)
        },
        canEmit: function() {
            for (var e = 0; e < this.requireFail.length;) {
                if (!(this.requireFail[e].state & (32 | ut))) return !1;
                e++
            }
            return !0
        },
        recognize: function(e) {
            var t = ue({}, e);
            return u(this.options.enable, [this, t]) ? (this.state & (ht | mt | 32) && (this.state = ut), this.state = this.process(t), void(this.state & (dt | pt | ft | mt) && this.tryEmit(t))) : (this.reset(), void(this.state = 32))
        },
        process: function(e) {},
        getTouchAction: function() {},
        reset: function() {}
    }, l(J, G, {
        defaults: {
            pointers: 1
        },
        attrTest: function(e) {
            var t = this.options.pointers;
            return 0 === t || e.pointers.length === t
        },
        process: function(e) {
            var t = this.state,
                i = e.eventType,
                n = t & (dt | pt),
                o = this.attrTest(e);
            return n && (i & Pe || !o) ? t | mt : n || o ? i & Oe ? t | ft : t & dt ? t | pt : dt : 32
        }
    }), l(ee, J, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: ze
        },
        getTouchAction: function() {
            var e = this.options.direction,
                t = [];
            return e & je && t.push(lt), e & Me && t.push(at), t
        },
        directionTest: function(e) {
            var t = this.options,
                i = !0,
                n = e.distance,
                o = e.direction,
                r = e.deltaX,
                s = e.deltaY;
            return o & t.direction || (t.direction & je ? (o = 0 === r ? Ie : 0 > r ? De : Ne, i = r != this.pX, n = Math.abs(e.deltaX)) : (o = 0 === s ? Ie : 0 > s ? He : Le, i = s != this.pY, n = Math.abs(e.deltaY))), e.direction = o, i && n > t.threshold && o & t.direction
        },
        attrTest: function(e) {
            return J.prototype.attrTest.call(this, e) && (this.state & dt || !(this.state & dt) && this.directionTest(e))
        },
        emit: function(e) {
            this.pX = e.deltaX, this.pY = e.deltaY;
            var t = K(e.direction);
            t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
        }
    }), l(te, J, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [st]
        },
        attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & dt)
        },
        emit: function(e) {
            if (1 !== e.scale) {
                var t = e.scale < 1 ? "in" : "out";
                e.additionalEvent = this.options.event + t
            }
            this._super.emit.call(this, e)
        }
    }), l(ie, G, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function() {
            return [ot]
        },
        process: function(e) {
            var t = this.options,
                i = e.pointers.length === t.pointers,
                n = e.distance < t.threshold,
                r = e.deltaTime > t.time;
            if (this._input = e, !n || !i || e.eventType & (Oe | Pe) && !r) this.reset();
            else if (e.eventType & $e) this.reset(), this._timer = o(function() {
                this.state = ht, this.tryEmit()
            }, t.time, this);
            else if (e.eventType & Oe) return ht;
            return 32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(e) {
            this.state === ht && (e && e.eventType & Oe ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = ve(), this.manager.emit(this.options.event, this._input)))
        }
    }), l(ne, J, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [st]
        },
        attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & dt)
        }
    }), l(oe, J, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: je | Me,
            pointers: 1
        },
        getTouchAction: function() {
            return ee.prototype.getTouchAction.call(this)
        },
        attrTest: function(e) {
            var t, i = this.options.direction;
            return i & (je | Me) ? t = e.overallVelocity : i & je ? t = e.overallVelocityX : i & Me && (t = e.overallVelocityY), this._super.attrTest.call(this, e) && i & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && me(t) > this.options.velocity && e.eventType & Oe
        },
        emit: function(e) {
            var t = K(e.offsetDirection);
            t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
        }
    }), l(re, G, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [rt]
        },
        process: function(e) {
            var t = this.options,
                i = e.pointers.length === t.pointers,
                n = e.distance < t.threshold,
                r = e.deltaTime < t.time;
            if (this.reset(), e.eventType & $e && 0 === this.count) return this.failTimeout();
            if (n && r && i) {
                if (e.eventType != Oe) return this.failTimeout();
                var s = !this.pTime || e.timeStamp - this.pTime < t.interval,
                    a = !this.pCenter || N(this.pCenter, e.center) < t.posThreshold;
                if (this.pTime = e.timeStamp, this.pCenter = e.center, a && s ? this.count += 1 : this.count = 1, this._input = e, 0 == this.count % t.taps) return this.hasRequireFailures() ? (this._timer = o(function() {
                    this.state = ht, this.tryEmit()
                }, t.interval, this), dt) : ht
            }
            return 32
        },
        failTimeout: function() {
            return this._timer = o(function() {
                this.state = 32
            }, this.options.interval, this), 32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == ht && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), se.VERSION = "2.0.8", se.defaults = {
        domEvents: !1,
        touchAction: nt,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
            [ne, {
                enable: !1
            }],
            [te, {
                    enable: !1
                },
                ["rotate"]
            ],
            [oe, {
                direction: je
            }],
            [ee, {
                    direction: je
                },
                ["swipe"]
            ],
            [re],
            [re, {
                    event: "doubletap",
                    taps: 2
                },
                ["tap"]
            ],
            [ie]
        ],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    }, ae.prototype = {
        set: function(e) {
            return ue(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
        },
        stop: function(e) {
            this.session.stopped = e ? 2 : 1
        },
        recognize: function(e) {
            var t = this.session;
            if (!t.stopped) {
                this.touchAction.preventDefaults(e);
                var i, n = this.recognizers,
                    o = t.curRecognizer;
                (!o || o && o.state & ht) && (o = t.curRecognizer = null);
                for (var r = 0; r < n.length;) i = n[r], 2 === t.stopped || o && i != o && !i.canRecognizeWith(o) ? i.reset() : i.recognize(e), !o && i.state & (dt | pt | ft) && (o = t.curRecognizer = i), r++
            }
        },
        get: function(e) {
            if (e instanceof G) return e;
            for (var t = this.recognizers, i = 0; i < t.length; i++)
                if (t[i].options.event == e) return t[i];
            return null
        },
        add: function(e) {
            if (r(e, "add", this)) return this;
            var t = this.get(e.options.event);
            return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
        },
        remove: function(e) {
            if (r(e, "remove", this)) return this;
            if (e = this.get(e)) {
                var t = this.recognizers,
                    i = g(t, e); - 1 !== i && (t.splice(i, 1), this.touchAction.update())
            }
            return this
        },
        on: function(e, t) {
            if (e !== n && t !== n) {
                var i = this.handlers;
                return s(v(e), function(e) {
                    i[e] = i[e] || [], i[e].push(t)
                }), this
            }
        },
        off: function(e, t) {
            if (e !== n) {
                var i = this.handlers;
                return s(v(e), function(e) {
                    t ? i[e] && i[e].splice(g(i[e], t), 1) : delete i[e]
                }), this
            }
        },
        emit: function(e, t) {
            this.options.domEvents && ce(e, t);
            var i = this.handlers[e] && this.handlers[e].slice();
            if (i && i.length) {
                t.type = e, t.preventDefault = function() {
                    t.srcEvent.preventDefault()
                };
                for (var n = 0; n < i.length;) i[n](t), n++
            }
        },
        destroy: function() {
            this.element && le(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, ue(se, {
        INPUT_START: $e,
        INPUT_MOVE: Ae,
        INPUT_END: Oe,
        INPUT_CANCEL: Pe,
        STATE_POSSIBLE: ut,
        STATE_BEGAN: dt,
        STATE_CHANGED: pt,
        STATE_ENDED: ft,
        STATE_RECOGNIZED: ht,
        STATE_CANCELLED: mt,
        STATE_FAILED: 32,
        DIRECTION_NONE: Ie,
        DIRECTION_LEFT: De,
        DIRECTION_RIGHT: Ne,
        DIRECTION_UP: He,
        DIRECTION_DOWN: Le,
        DIRECTION_HORIZONTAL: je,
        DIRECTION_VERTICAL: Me,
        DIRECTION_ALL: ze,
        Manager: ae,
        Input: k,
        TouchAction: U,
        TouchInput: F,
        MouseInput: M,
        PointerEventInput: z,
        TouchMouseInput: W,
        SingleTouchInput: q,
        Recognizer: G,
        AttrRecognizer: J,
        Tap: re,
        Pan: ee,
        Swipe: oe,
        Pinch: te,
        Rotate: ne,
        Press: ie,
        on: p,
        off: f,
        each: s,
        merge: ye,
        extend: ge,
        assign: ue,
        inherit: l,
        bindFn: c,
        prefixed: b
    }), (void 0 !== e ? e : "undefined" != typeof self ? self : {}).Hammer = se, "function" == typeof define && define.amd ? define(function() {
        return se
    }) : "undefined" != typeof module && module.exports ? module.exports = se : e.Hammer = se
}(window, document);