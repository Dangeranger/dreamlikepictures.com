! function(e, t) {
 "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
  if (!e.document) throw new Error("jQuery requires a window with a document");
  return t(e)
 } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
 function i(e) {
  var t = !!e && "length" in e && e.length,
   i = se.type(e);
  return "function" !== i && !se.isWindow(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
 }

 function n(e, t, i) {
  if (se.isFunction(t)) return se.grep(e, function(e, n) {
   return !!t.call(e, n, e) !== i
  });
  if (t.nodeType) return se.grep(e, function(e) {
   return e === t !== i
  });
  if ("string" == typeof t) {
   if (me.test(t)) return se.filter(t, e, i);
   t = se.filter(t, e)
  }
  return se.grep(e, function(e) {
   return Z.call(t, e) > -1 !== i
  })
 }

 function o(e, t) {
  for (;
   (e = e[t]) && 1 !== e.nodeType;);
  return e
 }

 function s(e) {
  var t = {};
  return se.each(e.match(xe) || [], function(e, i) {
   t[i] = !0
  }), t
 }

 function r() {
  Q.removeEventListener("DOMContentLoaded", r), e.removeEventListener("load", r), se.ready()
 }

 function a() {
  this.expando = se.expando + a.uid++
 }

 function l(e, t, i) {
  var n;
  if (void 0 === i && 1 === e.nodeType)
   if (n = "data-" + t.replace(Ae, "-$&").toLowerCase(), i = e.getAttribute(n), "string" == typeof i) {
    try {
     i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : $e.test(i) ? se.parseJSON(i) : i)
    } catch (e) {}
    Ee.set(e, t, i)
   } else i = void 0;
  return i
 }

 function c(e, t, i, n) {
  var o, s = 1,
   r = 20,
   a = n ? function() {
    return n.cur()
   } : function() {
    return se.css(e, t, "")
   },
   l = a(),
   c = i && i[3] || (se.cssNumber[t] ? "" : "px"),
   d = (se.cssNumber[t] || "px" !== c && +l) && Le.exec(se.css(e, t));
  if (d && d[3] !== c) {
   c = c || d[3], i = i || [], d = +l || 1;
   do s = s || ".5", d /= s, se.style(e, t, d + c); while (s !== (s = a() / l) && 1 !== s && --r)
  }
  return i && (d = +d || +l || 0, o = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = d, n.end = o)), o
 }

 function d(e, t) {
  var i = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
  return void 0 === t || t && se.nodeName(e, t) ? se.merge([e], i) : i
 }

 function u(e, t) {
  for (var i = 0, n = e.length; i < n; i++) Ce.set(e[i], "globalEval", !t || Ce.get(t[i], "globalEval"))
 }

 function h(e, t, i, n, o) {
  for (var s, r, a, l, c, h, p = t.createDocumentFragment(), f = [], m = 0, v = e.length; m < v; m++)
   if (s = e[m], s || 0 === s)
    if ("object" === se.type(s)) se.merge(f, s.nodeType ? [s] : s);
    else if (Ie.test(s)) {
   for (r = r || p.appendChild(t.createElement("div")), a = (Me.exec(s) || ["", ""])[1].toLowerCase(), l = je[a] || je._default, r.innerHTML = l[1] + se.htmlPrefilter(s) + l[2], h = l[0]; h--;) r = r.lastChild;
   se.merge(f, r.childNodes), r = p.firstChild, r.textContent = ""
  } else f.push(t.createTextNode(s));
  for (p.textContent = "", m = 0; s = f[m++];)
   if (n && se.inArray(s, n) > -1) o && o.push(s);
   else if (c = se.contains(s.ownerDocument, s), r = d(p.appendChild(s), "script"), c && u(r), i)
   for (h = 0; s = r[h++];) Ne.test(s.type || "") && i.push(s);
  return p
 }

 function p() {
  return !0
 }

 function f() {
  return !1
 }

 function m() {
  try {
   return Q.activeElement
  } catch (e) {}
 }

 function v(e, t, i, n, o, s) {
  var r, a;
  if ("object" == typeof t) {
   "string" != typeof i && (n = n || i, i = void 0);
   for (a in t) v(e, a, i, n, t[a], s);
   return e
  }
  if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), o === !1) o = f;
  else if (!o) return e;
  return 1 === s && (r = o, o = function(e) {
   return se().off(e), r.apply(this, arguments)
  }, o.guid = r.guid || (r.guid = se.guid++)), e.each(function() {
   se.event.add(this, t, o, n, i)
  })
 }

 function g(e, t) {
  return se.nodeName(e, "table") && se.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
 }

 function y(e) {
  return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
 }

 function w(e) {
  var t = Ye.exec(e.type);
  return t ? e.type = t[1] : e.removeAttribute("type"), e
 }

 function b(e, t) {
  var i, n, o, s, r, a, l, c;
  if (1 === t.nodeType) {
   if (Ce.hasData(e) && (s = Ce.access(e), r = Ce.set(t, s), c = s.events)) {
    delete r.handle, r.events = {};
    for (o in c)
     for (i = 0, n = c[o].length; i < n; i++) se.event.add(t, o, c[o][i])
   }
   Ee.hasData(e) && (a = Ee.access(e), l = se.extend({}, a), Ee.set(t, l))
  }
 }

 function x(e, t) {
  var i = t.nodeName.toLowerCase();
  "input" === i && De.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
 }

 function T(e, t, i, n) {
  t = G.apply([], t);
  var o, s, r, a, l, c, u = 0,
   p = e.length,
   f = p - 1,
   m = t[0],
   v = se.isFunction(m);
  if (v || p > 1 && "string" == typeof m && !ne.checkClone && Re.test(m)) return e.each(function(o) {
   var s = e.eq(o);
   v && (t[0] = m.call(this, o, s.html())), T(s, t, i, n)
  });
  if (p && (o = h(t, e[0].ownerDocument, !1, e, n), s = o.firstChild, 1 === o.childNodes.length && (o = s), s || n)) {
   for (r = se.map(d(o, "script"), y), a = r.length; u < p; u++) l = o, u !== f && (l = se.clone(l, !0, !0), a && se.merge(r, d(l, "script"))), i.call(e[u], l, u);
   if (a)
    for (c = r[r.length - 1].ownerDocument, se.map(r, w), u = 0; u < a; u++) l = r[u], Ne.test(l.type || "") && !Ce.access(l, "globalEval") && se.contains(c, l) && (l.src ? se._evalUrl && se._evalUrl(l.src) : se.globalEval(l.textContent.replace(Be, "")))
  }
  return e
 }

 function S(e, t, i) {
  for (var n, o = t ? se.filter(t, e) : e, s = 0; null != (n = o[s]); s++) i || 1 !== n.nodeType || se.cleanData(d(n)), n.parentNode && (i && se.contains(n.ownerDocument, n) && u(d(n, "script")), n.parentNode.removeChild(n));
  return e
 }

 function k(e, t) {
  var i = se(t.createElement(e)).appendTo(t.body),
   n = se.css(i[0], "display");
  return i.detach(), n
 }

 function C(e) {
  var t = Q,
   i = Ue[e];
  return i || (i = k(e, t), "none" !== i && i || (Fe = (Fe || se("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Fe[0].contentDocument, t.write(), t.close(), i = k(e, t), Fe.detach()), Ue[e] = i), i
 }

 function E(e, t, i) {
  var n, o, s, r, a = e.style;
  return i = i || Ke(e), r = i ? i.getPropertyValue(t) || i[t] : void 0, "" !== r && void 0 !== r || se.contains(e.ownerDocument, e) || (r = se.style(e, t)), i && !ne.pixelMarginRight() && Qe.test(r) && Ve.test(t) && (n = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = o, a.maxWidth = s), void 0 !== r ? r + "" : r
 }

 function $(e, t) {
  return {
   get: function() {
    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
   }
  }
 }

 function A(e) {
  if (e in nt) return e;
  for (var t = e[0].toUpperCase() + e.slice(1), i = it.length; i--;)
   if (e = it[i] + t, e in nt) return e
 }

 function P(e, t, i) {
  var n = Le.exec(t);
  return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
 }

 function L(e, t, i, n, o) {
  for (var s = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; s < 4; s += 2) "margin" === i && (r += se.css(e, i + Oe[s], !0, o)), n ? ("content" === i && (r -= se.css(e, "padding" + Oe[s], !0, o)), "margin" !== i && (r -= se.css(e, "border" + Oe[s] + "Width", !0, o))) : (r += se.css(e, "padding" + Oe[s], !0, o), "padding" !== i && (r += se.css(e, "border" + Oe[s] + "Width", !0, o)));
  return r
 }

 function O(t, i, n) {
  var o = !0,
   s = "width" === i ? t.offsetWidth : t.offsetHeight,
   r = Ke(t),
   a = "border-box" === se.css(t, "boxSizing", !1, r);
  if (Q.msFullscreenElement && e.top !== e && t.getClientRects().length && (s = Math.round(100 * t.getBoundingClientRect()[i])), s <= 0 || null == s) {
   if (s = E(t, i, r), (s < 0 || null == s) && (s = t.style[i]), Qe.test(s)) return s;
   o = a && (ne.boxSizingReliable() || s === t.style[i]), s = parseFloat(s) || 0
  }
  return s + L(t, i, n || (a ? "border" : "content"), o, r) + "px"
 }

 function H(e, t) {
  for (var i, n, o, s = [], r = 0, a = e.length; r < a; r++) n = e[r], n.style && (s[r] = Ce.get(n, "olddisplay"), i = n.style.display, t ? (s[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && He(n) && (s[r] = Ce.access(n, "olddisplay", C(n.nodeName)))) : (o = He(n), "none" === i && o || Ce.set(n, "olddisplay", o ? i : se.css(n, "display"))));
  for (r = 0; r < a; r++) n = e[r], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? s[r] || "" : "none"));
  return e
 }

 function D(e, t, i, n, o) {
  return new D.prototype.init(e, t, i, n, o)
 }

 function M() {
  return e.setTimeout(function() {
   ot = void 0
  }), ot = se.now()
 }

 function N(e, t) {
  var i, n = 0,
   o = {
    height: e
   };
  for (t = t ? 1 : 0; n < 4; n += 2 - t) i = Oe[n], o["margin" + i] = o["padding" + i] = e;
  return t && (o.opacity = o.width = e), o
 }

 function j(e, t, i) {
  for (var n, o = (q.tweeners[t] || []).concat(q.tweeners["*"]), s = 0, r = o.length; s < r; s++)
   if (n = o[s].call(i, t, e)) return n
 }

 function I(e, t, i) {
  var n, o, s, r, a, l, c, d, u = this,
   h = {},
   p = e.style,
   f = e.nodeType && He(e),
   m = Ce.get(e, "fxshow");
  i.queue || (a = se._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
   a.unqueued || l()
  }), a.unqueued++, u.always(function() {
   u.always(function() {
    a.unqueued--, se.queue(e, "fx").length || a.empty.fire()
   })
  })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], c = se.css(e, "display"), d = "none" === c ? Ce.get(e, "olddisplay") || C(e.nodeName) : c, "inline" === d && "none" === se.css(e, "float") && (p.display = "inline-block")), i.overflow && (p.overflow = "hidden", u.always(function() {
   p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
  }));
  for (n in t)
   if (o = t[n], rt.exec(o)) {
    if (delete t[n], s = s || "toggle" === o, o === (f ? "hide" : "show")) {
     if ("show" !== o || !m || void 0 === m[n]) continue;
     f = !0
    }
    h[n] = m && m[n] || se.style(e, n)
   } else c = void 0;
  if (se.isEmptyObject(h)) "inline" === ("none" === c ? C(e.nodeName) : c) && (p.display = c);
  else {
   m ? "hidden" in m && (f = m.hidden) : m = Ce.access(e, "fxshow", {}), s && (m.hidden = !f), f ? se(e).show() : u.done(function() {
    se(e).hide()
   }), u.done(function() {
    var t;
    Ce.remove(e, "fxshow");
    for (t in h) se.style(e, t, h[t])
   });
   for (n in h) r = j(f ? m[n] : 0, n, u), n in m || (m[n] = r.start, f && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
  }
 }

 function z(e, t) {
  var i, n, o, s, r;
  for (i in e)
   if (n = se.camelCase(i), o = t[n], s = e[i], se.isArray(s) && (o = s[1], s = e[i] = s[0]), i !== n && (e[n] = s, delete e[i]), r = se.cssHooks[n], r && "expand" in r) {
    s = r.expand(s), delete e[n];
    for (i in s) i in e || (e[i] = s[i], t[i] = o)
   } else t[n] = o
 }

 function q(e, t, i) {
  var n, o, s = 0,
   r = q.prefilters.length,
   a = se.Deferred().always(function() {
    delete l.elem
   }),
   l = function() {
    if (o) return !1;
    for (var t = ot || M(), i = Math.max(0, c.startTime + c.duration - t), n = i / c.duration || 0, s = 1 - n, r = 0, l = c.tweens.length; r < l; r++) c.tweens[r].run(s);
    return a.notifyWith(e, [c, s, i]), s < 1 && l ? i : (a.resolveWith(e, [c]), !1)
   },
   c = a.promise({
    elem: e,
    props: se.extend({}, t),
    opts: se.extend(!0, {
     specialEasing: {},
     easing: se.easing._default
    }, i),
    originalProperties: t,
    originalOptions: i,
    startTime: ot || M(),
    duration: i.duration,
    tweens: [],
    createTween: function(t, i) {
     var n = se.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
     return c.tweens.push(n), n
    },
    stop: function(t) {
     var i = 0,
      n = t ? c.tweens.length : 0;
     if (o) return this;
     for (o = !0; i < n; i++) c.tweens[i].run(1);
     return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
    }
   }),
   d = c.props;
  for (z(d, c.opts.specialEasing); s < r; s++)
   if (n = q.prefilters[s].call(c, e, d, c.opts)) return se.isFunction(n.stop) && (se._queueHooks(c.elem, c.opts.queue).stop = se.proxy(n.stop, n)), n;
  return se.map(d, j, c), se.isFunction(c.opts.start) && c.opts.start.call(e, c), se.fx.timer(se.extend(l, {
   elem: e,
   anim: c,
   queue: c.opts.queue
  })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
 }

 function _(e) {
  return e.getAttribute && e.getAttribute("class") || ""
 }

 function W(e) {
  return function(t, i) {
   "string" != typeof t && (i = t, t = "*");
   var n, o = 0,
    s = t.toLowerCase().match(xe) || [];
   if (se.isFunction(i))
    for (; n = s[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
  }
 }

 function X(e, t, i, n) {
  function o(a) {
   var l;
   return s[a] = !0, se.each(e[a] || [], function(e, a) {
    var c = a(t, i, n);
    return "string" != typeof c || r || s[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
   }), l
  }
  var s = {},
   r = e === Et;
  return o(t.dataTypes[0]) || !s["*"] && o("*")
 }

 function R(e, t) {
  var i, n, o = se.ajaxSettings.flatOptions || {};
  for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
  return n && se.extend(!0, e, n), e
 }

 function Y(e, t, i) {
  for (var n, o, s, r, a = e.contents, l = e.dataTypes;
   "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
  if (n)
   for (o in a)
    if (a[o] && a[o].test(n)) {
     l.unshift(o);
     break
    }
  if (l[0] in i) s = l[0];
  else {
   for (o in i) {
    if (!l[0] || e.converters[o + " " + l[0]]) {
     s = o;
     break
    }
    r || (r = o)
   }
   s = s || r
  }
  if (s) return s !== l[0] && l.unshift(s), i[s]
 }

 function B(e, t, i, n) {
  var o, s, r, a, l, c = {},
   d = e.dataTypes.slice();
  if (d[1])
   for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
  for (s = d.shift(); s;)
   if (e.responseFields[s] && (i[e.responseFields[s]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = d.shift())
    if ("*" === s) s = l;
    else if ("*" !== l && l !== s) {
   if (r = c[l + " " + s] || c["* " + s], !r)
    for (o in c)
     if (a = o.split(" "), a[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
      r === !0 ? r = c[o] : c[o] !== !0 && (s = a[0], d.unshift(a[1]));
      break
     }
   if (r !== !0)
    if (r && e.throws) t = r(t);
    else try {
     t = r(t)
    } catch (e) {
     return {
      state: "parsererror",
      error: r ? e : "No conversion from " + l + " to " + s
     }
    }
  }
  return {
   state: "success",
   data: t
  }
 }

 function F(e, t, i, n) {
  var o;
  if (se.isArray(t)) se.each(t, function(t, o) {
   i || Lt.test(e) ? n(e, o) : F(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, i, n)
  });
  else if (i || "object" !== se.type(t)) n(e, t);
  else
   for (o in t) F(e + "[" + o + "]", t[o], i, n)
 }

 function U(e) {
  return se.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
 }
 var V = [],
  Q = e.document,
  K = V.slice,
  G = V.concat,
  J = V.push,
  Z = V.indexOf,
  ee = {},
  te = ee.toString,
  ie = ee.hasOwnProperty,
  ne = {},
  oe = "2.2.3",
  se = function(e, t) {
   return new se.fn.init(e, t)
  },
  re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
  ae = /^-ms-/,
  le = /-([\da-z])/gi,
  ce = function(e, t) {
   return t.toUpperCase()
  };
 se.fn = se.prototype = {
  jquery: oe,
  constructor: se,
  selector: "",
  length: 0,
  toArray: function() {
   return K.call(this)
  },
  get: function(e) {
   return null != e ? e < 0 ? this[e + this.length] : this[e] : K.call(this)
  },
  pushStack: function(e) {
   var t = se.merge(this.constructor(), e);
   return t.prevObject = this, t.context = this.context, t
  },
  each: function(e) {
   return se.each(this, e)
  },
  map: function(e) {
   return this.pushStack(se.map(this, function(t, i) {
    return e.call(t, i, t)
   }))
  },
  slice: function() {
   return this.pushStack(K.apply(this, arguments))
  },
  first: function() {
   return this.eq(0)
  },
  last: function() {
   return this.eq(-1)
  },
  eq: function(e) {
   var t = this.length,
    i = +e + (e < 0 ? t : 0);
   return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
  },
  end: function() {
   return this.prevObject || this.constructor()
  },
  push: J,
  sort: V.sort,
  splice: V.splice
 }, se.extend = se.fn.extend = function() {
  var e, t, i, n, o, s, r = arguments[0] || {},
   a = 1,
   l = arguments.length,
   c = !1;
  for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || se.isFunction(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
   if (null != (e = arguments[a]))
    for (t in e) i = r[t], n = e[t], r !== n && (c && n && (se.isPlainObject(n) || (o = se.isArray(n))) ? (o ? (o = !1, s = i && se.isArray(i) ? i : []) : s = i && se.isPlainObject(i) ? i : {}, r[t] = se.extend(c, s, n)) : void 0 !== n && (r[t] = n));
  return r
 }, se.extend({
  expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""),
  isReady: !0,
  error: function(e) {
   throw new Error(e)
  },
  noop: function() {},
  isFunction: function(e) {
   return "function" === se.type(e)
  },
  isArray: Array.isArray,
  isWindow: function(e) {
   return null != e && e === e.window
  },
  isNumeric: function(e) {
   var t = e && e.toString();
   return !se.isArray(e) && t - parseFloat(t) + 1 >= 0
  },
  isPlainObject: function(e) {
   var t;
   if ("object" !== se.type(e) || e.nodeType || se.isWindow(e)) return !1;
   if (e.constructor && !ie.call(e, "constructor") && !ie.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
   for (t in e);
   return void 0 === t || ie.call(e, t)
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
   e = se.trim(e), e && (1 === e.indexOf("use strict") ? (t = Q.createElement("script"), t.text = e, Q.head.appendChild(t).parentNode.removeChild(t)) : i(e))
  },
  camelCase: function(e) {
   return e.replace(ae, "ms-").replace(le, ce)
  },
  nodeName: function(e, t) {
   return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  },
  each: function(e, t) {
   var n, o = 0;
   if (i(e))
    for (n = e.length; o < n && t.call(e[o], o, e[o]) !== !1; o++);
   else
    for (o in e)
     if (t.call(e[o], o, e[o]) === !1) break; return e
  },
  trim: function(e) {
   return null == e ? "" : (e + "").replace(re, "")
  },
  makeArray: function(e, t) {
   var n = t || [];
   return null != e && (i(Object(e)) ? se.merge(n, "string" == typeof e ? [e] : e) : J.call(n, e)), n
  },
  inArray: function(e, t, i) {
   return null == t ? -1 : Z.call(t, e, i)
  },
  merge: function(e, t) {
   for (var i = +t.length, n = 0, o = e.length; n < i; n++) e[o++] = t[n];
   return e.length = o, e
  },
  grep: function(e, t, i) {
   for (var n, o = [], s = 0, r = e.length, a = !i; s < r; s++) n = !t(e[s], s), n !== a && o.push(e[s]);
   return o
  },
  map: function(e, t, n) {
   var o, s, r = 0,
    a = [];
   if (i(e))
    for (o = e.length; r < o; r++) s = t(e[r], r, n), null != s && a.push(s);
   else
    for (r in e) s = t(e[r], r, n), null != s && a.push(s);
   return G.apply([], a)
  },
  guid: 1,
  proxy: function(e, t) {
   var i, n, o;
   if ("string" == typeof t && (i = e[t], t = e, e = i), se.isFunction(e)) return n = K.call(arguments, 2), o = function() {
    return e.apply(t || this, n.concat(K.call(arguments)))
   }, o.guid = e.guid = e.guid || se.guid++, o
  },
  now: Date.now,
  support: ne
 }), "function" == typeof Symbol && (se.fn[Symbol.iterator] = V[Symbol.iterator]), se.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
  ee["[object " + t + "]"] = t.toLowerCase()
 });
 var de = function(e) {
  function t(e, t, i, n) {
   var o, s, r, a, l, c, u, p, f = t && t.ownerDocument,
    m = t ? t.nodeType : 9;
   if (i = i || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return i;
   if (!n && ((t ? t.ownerDocument || t : _) !== H && O(t), t = t || H, M)) {
    if (11 !== m && (c = ge.exec(e)))
     if (o = c[1]) {
      if (9 === m) {
       if (!(r = t.getElementById(o))) return i;
       if (r.id === o) return i.push(r), i
      } else if (f && (r = f.getElementById(o)) && z(t, r) && r.id === o) return i.push(r), i
     } else {
      if (c[2]) return J.apply(i, t.getElementsByTagName(e)), i;
      if ((o = c[3]) && x.getElementsByClassName && t.getElementsByClassName) return J.apply(i, t.getElementsByClassName(o)), i
     }
    if (x.qsa && !B[e + " "] && (!N || !N.test(e))) {
     if (1 !== m) f = t, p = e;
     else if ("object" !== t.nodeName.toLowerCase()) {
      for ((a = t.getAttribute("id")) ? a = a.replace(we, "\\$&") : t.setAttribute("id", a = q), u = C(e), s = u.length, l = he.test(a) ? "#" + a : "[id='" + a + "']"; s--;) u[s] = l + " " + h(u[s]);
      p = u.join(","), f = ye.test(e) && d(t.parentNode) || t
     }
     if (p) try {
      return J.apply(i, f.querySelectorAll(p)), i
     } catch (e) {} finally {
      a === q && t.removeAttribute("id")
     }
    }
   }
   return $(e.replace(ae, "$1"), t, i, n)
  }

  function i() {
   function e(i, n) {
    return t.push(i + " ") > T.cacheLength && delete e[t.shift()], e[i + " "] = n
   }
   var t = [];
   return e
  }

  function n(e) {
   return e[q] = !0, e
  }

  function o(e) {
   var t = H.createElement("div");
   try {
    return !!e(t)
   } catch (e) {
    return !1
   } finally {
    t.parentNode && t.parentNode.removeChild(t), t = null
   }
  }

  function s(e, t) {
   for (var i = e.split("|"), n = i.length; n--;) T.attrHandle[i[n]] = t
  }

  function r(e, t) {
   var i = t && e,
    n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
   if (n) return n;
   if (i)
    for (; i = i.nextSibling;)
     if (i === t) return -1;
   return e ? 1 : -1
  }

  function a(e) {
   return function(t) {
    var i = t.nodeName.toLowerCase();
    return "input" === i && t.type === e
   }
  }

  function l(e) {
   return function(t) {
    var i = t.nodeName.toLowerCase();
    return ("input" === i || "button" === i) && t.type === e
   }
  }

  function c(e) {
   return n(function(t) {
    return t = +t, n(function(i, n) {
     for (var o, s = e([], i.length, t), r = s.length; r--;) i[o = s[r]] && (i[o] = !(n[o] = i[o]))
    })
   })
  }

  function d(e) {
   return e && "undefined" != typeof e.getElementsByTagName && e
  }

  function u() {}

  function h(e) {
   for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
   return n
  }

  function p(e, t, i) {
   var n = t.dir,
    o = i && "parentNode" === n,
    s = X++;
   return t.first ? function(t, i, s) {
    for (; t = t[n];)
     if (1 === t.nodeType || o) return e(t, i, s)
   } : function(t, i, r) {
    var a, l, c, d = [W, s];
    if (r) {
     for (; t = t[n];)
      if ((1 === t.nodeType || o) && e(t, i, r)) return !0
    } else
     for (; t = t[n];)
      if (1 === t.nodeType || o) {
       if (c = t[q] || (t[q] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), (a = l[n]) && a[0] === W && a[1] === s) return d[2] = a[2];
       if (l[n] = d, d[2] = e(t, i, r)) return !0
      }
   }
  }

  function f(e) {
   return e.length > 1 ? function(t, i, n) {
    for (var o = e.length; o--;)
     if (!e[o](t, i, n)) return !1;
    return !0
   } : e[0]
  }

  function m(e, i, n) {
   for (var o = 0, s = i.length; o < s; o++) t(e, i[o], n);
   return n
  }

  function v(e, t, i, n, o) {
   for (var s, r = [], a = 0, l = e.length, c = null != t; a < l; a++)(s = e[a]) && (i && !i(s, n, o) || (r.push(s), c && t.push(a)));
   return r
  }

  function g(e, t, i, o, s, r) {
   return o && !o[q] && (o = g(o)), s && !s[q] && (s = g(s, r)), n(function(n, r, a, l) {
    var c, d, u, h = [],
     p = [],
     f = r.length,
     g = n || m(t || "*", a.nodeType ? [a] : a, []),
     y = !e || !n && t ? g : v(g, h, e, a, l),
     w = i ? s || (n ? e : f || o) ? [] : r : y;
    if (i && i(y, w, a, l), o)
     for (c = v(w, p), o(c, [], a, l), d = c.length; d--;)(u = c[d]) && (w[p[d]] = !(y[p[d]] = u));
    if (n) {
     if (s || e) {
      if (s) {
       for (c = [], d = w.length; d--;)(u = w[d]) && c.push(y[d] = u);
       s(null, w = [], c, l)
      }
      for (d = w.length; d--;)(u = w[d]) && (c = s ? ee(n, u) : h[d]) > -1 && (n[c] = !(r[c] = u))
     }
    } else w = v(w === r ? w.splice(f, w.length) : w), s ? s(null, r, w, l) : J.apply(r, w)
   })
  }

  function y(e) {
   for (var t, i, n, o = e.length, s = T.relative[e[0].type], r = s || T.relative[" "], a = s ? 1 : 0, l = p(function(e) {
     return e === t
    }, r, !0), c = p(function(e) {
     return ee(t, e) > -1
    }, r, !0), d = [function(e, i, n) {
     var o = !s && (n || i !== A) || ((t = i).nodeType ? l(e, i, n) : c(e, i, n));
     return t = null, o
    }]; a < o; a++)
    if (i = T.relative[e[a].type]) d = [p(f(d), i)];
    else {
     if (i = T.filter[e[a].type].apply(null, e[a].matches), i[q]) {
      for (n = ++a; n < o && !T.relative[e[n].type]; n++);
      return g(a > 1 && f(d), a > 1 && h(e.slice(0, a - 1).concat({
       value: " " === e[a - 2].type ? "*" : ""
      })).replace(ae, "$1"), i, a < n && y(e.slice(a, n)), n < o && y(e = e.slice(n)), n < o && h(e))
     }
     d.push(i)
    }
   return f(d)
  }

  function w(e, i) {
   var o = i.length > 0,
    s = e.length > 0,
    r = function(n, r, a, l, c) {
     var d, u, h, p = 0,
      f = "0",
      m = n && [],
      g = [],
      y = A,
      w = n || s && T.find.TAG("*", c),
      b = W += null == y ? 1 : Math.random() || .1,
      x = w.length;
     for (c && (A = r === H || r || c); f !== x && null != (d = w[f]); f++) {
      if (s && d) {
       for (u = 0, r || d.ownerDocument === H || (O(d), a = !M); h = e[u++];)
        if (h(d, r || H, a)) {
         l.push(d);
         break
        }
       c && (W = b)
      }
      o && ((d = !h && d) && p--, n && m.push(d))
     }
     if (p += f, o && f !== p) {
      for (u = 0; h = i[u++];) h(m, g, r, a);
      if (n) {
       if (p > 0)
        for (; f--;) m[f] || g[f] || (g[f] = K.call(l));
       g = v(g)
      }
      J.apply(l, g), c && !n && g.length > 0 && p + i.length > 1 && t.uniqueSort(l)
     }
     return c && (W = b, A = y), m
    };
   return o ? n(r) : r
  }
  var b, x, T, S, k, C, E, $, A, P, L, O, H, D, M, N, j, I, z, q = "sizzle" + 1 * new Date,
   _ = e.document,
   W = 0,
   X = 0,
   R = i(),
   Y = i(),
   B = i(),
   F = function(e, t) {
    return e === t && (L = !0), 0
   },
   U = 1 << 31,
   V = {}.hasOwnProperty,
   Q = [],
   K = Q.pop,
   G = Q.push,
   J = Q.push,
   Z = Q.slice,
   ee = function(e, t) {
    for (var i = 0, n = e.length; i < n; i++)
     if (e[i] === t) return i;
    return -1
   },
   te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
   ie = "[\\x20\\t\\r\\n\\f]",
   ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
   oe = "\\[" + ie + "*(" + ne + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + ie + "*\\]",
   se = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
   re = new RegExp(ie + "+", "g"),
   ae = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
   le = new RegExp("^" + ie + "*," + ie + "*"),
   ce = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
   de = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
   ue = new RegExp(se),
   he = new RegExp("^" + ne + "$"),
   pe = {
    ID: new RegExp("^#(" + ne + ")"),
    CLASS: new RegExp("^\\.(" + ne + ")"),
    TAG: new RegExp("^(" + ne + "|[*])"),
    ATTR: new RegExp("^" + oe),
    PSEUDO: new RegExp("^" + se),
    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
    bool: new RegExp("^(?:" + te + ")$", "i"),
    needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
   },
   fe = /^(?:input|select|textarea|button)$/i,
   me = /^h\d$/i,
   ve = /^[^{]+\{\s*\[native \w/,
   ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
   ye = /[+~]/,
   we = /'|\\/g,
   be = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
   xe = function(e, t, i) {
    var n = "0x" + t - 65536;
    return n !== n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
   },
   Te = function() {
    O()
   };
  try {
   J.apply(Q = Z.call(_.childNodes), _.childNodes), Q[_.childNodes.length].nodeType
  } catch (e) {
   J = {
    apply: Q.length ? function(e, t) {
     G.apply(e, Z.call(t))
    } : function(e, t) {
     for (var i = e.length, n = 0; e[i++] = t[n++];);
     e.length = i - 1
    }
   }
  }
  x = t.support = {}, k = t.isXML = function(e) {
   var t = e && (e.ownerDocument || e).documentElement;
   return !!t && "HTML" !== t.nodeName
  }, O = t.setDocument = function(e) {
   var t, i, n = e ? e.ownerDocument || e : _;
   return n !== H && 9 === n.nodeType && n.documentElement ? (H = n, D = H.documentElement, M = !k(H), (i = H.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", Te, !1) : i.attachEvent && i.attachEvent("onunload", Te)), x.attributes = o(function(e) {
    return e.className = "i", !e.getAttribute("className")
   }), x.getElementsByTagName = o(function(e) {
    return e.appendChild(H.createComment("")), !e.getElementsByTagName("*").length
   }), x.getElementsByClassName = ve.test(H.getElementsByClassName), x.getById = o(function(e) {
    return D.appendChild(e).id = q, !H.getElementsByName || !H.getElementsByName(q).length
   }), x.getById ? (T.find.ID = function(e, t) {
    if ("undefined" != typeof t.getElementById && M) {
     var i = t.getElementById(e);
     return i ? [i] : []
    }
   }, T.filter.ID = function(e) {
    var t = e.replace(be, xe);
    return function(e) {
     return e.getAttribute("id") === t
    }
   }) : (delete T.find.ID, T.filter.ID = function(e) {
    var t = e.replace(be, xe);
    return function(e) {
     var i = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
     return i && i.value === t
    }
   }), T.find.TAG = x.getElementsByTagName ? function(e, t) {
    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
   } : function(e, t) {
    var i, n = [],
     o = 0,
     s = t.getElementsByTagName(e);
    if ("*" === e) {
     for (; i = s[o++];) 1 === i.nodeType && n.push(i);
     return n
    }
    return s
   }, T.find.CLASS = x.getElementsByClassName && function(e, t) {
    if ("undefined" != typeof t.getElementsByClassName && M) return t.getElementsByClassName(e)
   }, j = [], N = [], (x.qsa = ve.test(H.querySelectorAll)) && (o(function(e) {
    D.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || N.push("\\[" + ie + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + q + "-]").length || N.push("~="), e.querySelectorAll(":checked").length || N.push(":checked"), e.querySelectorAll("a#" + q + "+*").length || N.push(".#.+[+~]")
   }), o(function(e) {
    var t = H.createElement("input");
    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && N.push("name" + ie + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), N.push(",.*:")
   })), (x.matchesSelector = ve.test(I = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(function(e) {
    x.disconnectedMatch = I.call(e, "div"), I.call(e, "[s!='']:x"), j.push("!=", se)
   }), N = N.length && new RegExp(N.join("|")), j = j.length && new RegExp(j.join("|")), t = ve.test(D.compareDocumentPosition), z = t || ve.test(D.contains) ? function(e, t) {
    var i = 9 === e.nodeType ? e.documentElement : e,
     n = t && t.parentNode;
    return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
   } : function(e, t) {
    if (t)
     for (; t = t.parentNode;)
      if (t === e) return !0;
    return !1
   }, F = t ? function(e, t) {
    if (e === t) return L = !0, 0;
    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
    return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !x.sortDetached && t.compareDocumentPosition(e) === i ? e === H || e.ownerDocument === _ && z(_, e) ? -1 : t === H || t.ownerDocument === _ && z(_, t) ? 1 : P ? ee(P, e) - ee(P, t) : 0 : 4 & i ? -1 : 1)
   } : function(e, t) {
    if (e === t) return L = !0, 0;
    var i, n = 0,
     o = e.parentNode,
     s = t.parentNode,
     a = [e],
     l = [t];
    if (!o || !s) return e === H ? -1 : t === H ? 1 : o ? -1 : s ? 1 : P ? ee(P, e) - ee(P, t) : 0;
    if (o === s) return r(e, t);
    for (i = e; i = i.parentNode;) a.unshift(i);
    for (i = t; i = i.parentNode;) l.unshift(i);
    for (; a[n] === l[n];) n++;
    return n ? r(a[n], l[n]) : a[n] === _ ? -1 : l[n] === _ ? 1 : 0
   }, H) : H
  }, t.matches = function(e, i) {
   return t(e, null, null, i)
  }, t.matchesSelector = function(e, i) {
   if ((e.ownerDocument || e) !== H && O(e), i = i.replace(de, "='$1']"), x.matchesSelector && M && !B[i + " "] && (!j || !j.test(i)) && (!N || !N.test(i))) try {
    var n = I.call(e, i);
    if (n || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
   } catch (e) {}
   return t(i, H, null, [e]).length > 0
  }, t.contains = function(e, t) {
   return (e.ownerDocument || e) !== H && O(e), z(e, t)
  }, t.attr = function(e, t) {
   (e.ownerDocument || e) !== H && O(e);
   var i = T.attrHandle[t.toLowerCase()],
    n = i && V.call(T.attrHandle, t.toLowerCase()) ? i(e, t, !M) : void 0;
   return void 0 !== n ? n : x.attributes || !M ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
  }, t.error = function(e) {
   throw new Error("Syntax error, unrecognized expression: " + e)
  }, t.uniqueSort = function(e) {
   var t, i = [],
    n = 0,
    o = 0;
   if (L = !x.detectDuplicates, P = !x.sortStable && e.slice(0), e.sort(F), L) {
    for (; t = e[o++];) t === e[o] && (n = i.push(o));
    for (; n--;) e.splice(i[n], 1)
   }
   return P = null, e
  }, S = t.getText = function(e) {
   var t, i = "",
    n = 0,
    o = e.nodeType;
   if (o) {
    if (1 === o || 9 === o || 11 === o) {
     if ("string" == typeof e.textContent) return e.textContent;
     for (e = e.firstChild; e; e = e.nextSibling) i += S(e)
    } else if (3 === o || 4 === o) return e.nodeValue
   } else
    for (; t = e[n++];) i += S(t);
   return i
  }, T = t.selectors = {
   cacheLength: 50,
   createPseudo: n,
   match: pe,
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
     return e[1] = e[1].replace(be, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
    },
    CHILD: function(e) {
     return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
    },
    PSEUDO: function(e) {
     var t, i = !e[6] && e[2];
     return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && ue.test(i) && (t = C(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
    }
   },
   filter: {
    TAG: function(e) {
     var t = e.replace(be, xe).toLowerCase();
     return "*" === e ? function() {
      return !0
     } : function(e) {
      return e.nodeName && e.nodeName.toLowerCase() === t
     }
    },
    CLASS: function(e) {
     var t = R[e + " "];
     return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && R(e, function(e) {
      return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
     })
    },
    ATTR: function(e, i, n) {
     return function(o) {
      var s = t.attr(o, e);
      return null == s ? "!=" === i : !i || (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(re, " ") + " ").indexOf(n) > -1 : "|=" === i && (s === n || s.slice(0, n.length + 1) === n + "-"))
     }
    },
    CHILD: function(e, t, i, n, o) {
     var s = "nth" !== e.slice(0, 3),
      r = "last" !== e.slice(-4),
      a = "of-type" === t;
     return 1 === n && 0 === o ? function(e) {
      return !!e.parentNode
     } : function(t, i, l) {
      var c, d, u, h, p, f, m = s !== r ? "nextSibling" : "previousSibling",
       v = t.parentNode,
       g = a && t.nodeName.toLowerCase(),
       y = !l && !a,
       w = !1;
      if (v) {
       if (s) {
        for (; m;) {
         for (h = t; h = h[m];)
          if (a ? h.nodeName.toLowerCase() === g : 1 === h.nodeType) return !1;
         f = m = "only" === e && !f && "nextSibling"
        }
        return !0
       }
       if (f = [r ? v.firstChild : v.lastChild], r && y) {
        for (h = v, u = h[q] || (h[q] = {}), d = u[h.uniqueID] || (u[h.uniqueID] = {}), c = d[e] || [], p = c[0] === W && c[1], w = p && c[2], h = p && v.childNodes[p]; h = ++p && h && h[m] || (w = p = 0) || f.pop();)
         if (1 === h.nodeType && ++w && h === t) {
          d[e] = [W, p, w];
          break
         }
       } else if (y && (h = t, u = h[q] || (h[q] = {}), d = u[h.uniqueID] || (u[h.uniqueID] = {}), c = d[e] || [], p = c[0] === W && c[1], w = p), w === !1)
        for (;
         (h = ++p && h && h[m] || (w = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== g : 1 !== h.nodeType) || !++w || (y && (u = h[q] || (h[q] = {}), d = u[h.uniqueID] || (u[h.uniqueID] = {}), d[e] = [W, w]), h !== t)););
       return w -= o, w === n || w % n === 0 && w / n >= 0
      }
     }
    },
    PSEUDO: function(e, i) {
     var o, s = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
     return s[q] ? s(i) : s.length > 1 ? (o = [e, e, "", i], T.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {
      for (var n, o = s(e, i), r = o.length; r--;) n = ee(e, o[r]), e[n] = !(t[n] = o[r])
     }) : function(e) {
      return s(e, 0, o)
     }) : s
    }
   },
   pseudos: {
    not: n(function(e) {
     var t = [],
      i = [],
      o = E(e.replace(ae, "$1"));
     return o[q] ? n(function(e, t, i, n) {
      for (var s, r = o(e, null, n, []), a = e.length; a--;)(s = r[a]) && (e[a] = !(t[a] = s))
     }) : function(e, n, s) {
      return t[0] = e, o(t, null, s, i), t[0] = null, !i.pop()
     }
    }),
    has: n(function(e) {
     return function(i) {
      return t(e, i).length > 0
     }
    }),
    contains: n(function(e) {
     return e = e.replace(be, xe),
      function(t) {
       return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
      }
    }),
    lang: n(function(e) {
     return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, xe).toLowerCase(),
      function(t) {
       var i;
       do
        if (i = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === e || 0 === i.indexOf(e + "-");
       while ((t = t.parentNode) && 1 === t.nodeType);
       return !1
      }
    }),
    target: function(t) {
     var i = e.location && e.location.hash;
     return i && i.slice(1) === t.id
    },
    root: function(e) {
     return e === D
    },
    focus: function(e) {
     return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
    },
    enabled: function(e) {
     return e.disabled === !1
    },
    disabled: function(e) {
     return e.disabled === !0
    },
    checked: function(e) {
     var t = e.nodeName.toLowerCase();
     return "input" === t && !!e.checked || "option" === t && !!e.selected
    },
    selected: function(e) {
     return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
    },
    empty: function(e) {
     for (e = e.firstChild; e; e = e.nextSibling)
      if (e.nodeType < 6) return !1;
     return !0
    },
    parent: function(e) {
     return !T.pseudos.empty(e)
    },
    header: function(e) {
     return me.test(e.nodeName)
    },
    input: function(e) {
     return fe.test(e.nodeName)
    },
    button: function(e) {
     var t = e.nodeName.toLowerCase();
     return "input" === t && "button" === e.type || "button" === t
    },
    text: function(e) {
     var t;
     return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
    },
    first: c(function() {
     return [0]
    }),
    last: c(function(e, t) {
     return [t - 1]
    }),
    eq: c(function(e, t, i) {
     return [i < 0 ? i + t : i];
    }),
    even: c(function(e, t) {
     for (var i = 0; i < t; i += 2) e.push(i);
     return e
    }),
    odd: c(function(e, t) {
     for (var i = 1; i < t; i += 2) e.push(i);
     return e
    }),
    lt: c(function(e, t, i) {
     for (var n = i < 0 ? i + t : i; --n >= 0;) e.push(n);
     return e
    }),
    gt: c(function(e, t, i) {
     for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
     return e
    })
   }
  }, T.pseudos.nth = T.pseudos.eq;
  for (b in {
    radio: !0,
    checkbox: !0,
    file: !0,
    password: !0,
    image: !0
   }) T.pseudos[b] = a(b);
  for (b in {
    submit: !0,
    reset: !0
   }) T.pseudos[b] = l(b);
  return u.prototype = T.filters = T.pseudos, T.setFilters = new u, C = t.tokenize = function(e, i) {
   var n, o, s, r, a, l, c, d = Y[e + " "];
   if (d) return i ? 0 : d.slice(0);
   for (a = e, l = [], c = T.preFilter; a;) {
    n && !(o = le.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(s = [])), n = !1, (o = ce.exec(a)) && (n = o.shift(), s.push({
     value: n,
     type: o[0].replace(ae, " ")
    }), a = a.slice(n.length));
    for (r in T.filter) !(o = pe[r].exec(a)) || c[r] && !(o = c[r](o)) || (n = o.shift(), s.push({
     value: n,
     type: r,
     matches: o
    }), a = a.slice(n.length));
    if (!n) break
   }
   return i ? a.length : a ? t.error(e) : Y(e, l).slice(0)
  }, E = t.compile = function(e, t) {
   var i, n = [],
    o = [],
    s = B[e + " "];
   if (!s) {
    for (t || (t = C(e)), i = t.length; i--;) s = y(t[i]), s[q] ? n.push(s) : o.push(s);
    s = B(e, w(o, n)), s.selector = e
   }
   return s
  }, $ = t.select = function(e, t, i, n) {
   var o, s, r, a, l, c = "function" == typeof e && e,
    u = !n && C(e = c.selector || e);
   if (i = i || [], 1 === u.length) {
    if (s = u[0] = u[0].slice(0), s.length > 2 && "ID" === (r = s[0]).type && x.getById && 9 === t.nodeType && M && T.relative[s[1].type]) {
     if (t = (T.find.ID(r.matches[0].replace(be, xe), t) || [])[0], !t) return i;
     c && (t = t.parentNode), e = e.slice(s.shift().value.length)
    }
    for (o = pe.needsContext.test(e) ? 0 : s.length; o-- && (r = s[o], !T.relative[a = r.type]);)
     if ((l = T.find[a]) && (n = l(r.matches[0].replace(be, xe), ye.test(s[0].type) && d(t.parentNode) || t))) {
      if (s.splice(o, 1), e = n.length && h(s), !e) return J.apply(i, n), i;
      break
     }
   }
   return (c || E(e, u))(n, t, !M, i, !t || ye.test(e) && d(t.parentNode) || t), i
  }, x.sortStable = q.split("").sort(F).join("") === q, x.detectDuplicates = !!L, O(), x.sortDetached = o(function(e) {
   return 1 & e.compareDocumentPosition(H.createElement("div"))
  }), o(function(e) {
   return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
  }) || s("type|href|height|width", function(e, t, i) {
   if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
  }), x.attributes && o(function(e) {
   return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
  }) || s("value", function(e, t, i) {
   if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
  }), o(function(e) {
   return null == e.getAttribute("disabled")
  }) || s(te, function(e, t, i) {
   var n;
   if (!i) return e[t] === !0 ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
  }), t
 }(e);
 se.find = de, se.expr = de.selectors, se.expr[":"] = se.expr.pseudos, se.uniqueSort = se.unique = de.uniqueSort, se.text = de.getText, se.isXMLDoc = de.isXML, se.contains = de.contains;
 var ue = function(e, t, i) {
   for (var n = [], o = void 0 !== i;
    (e = e[t]) && 9 !== e.nodeType;)
    if (1 === e.nodeType) {
     if (o && se(e).is(i)) break;
     n.push(e)
    }
   return n
  },
  he = function(e, t) {
   for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
   return i
  },
  pe = se.expr.match.needsContext,
  fe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
  me = /^.[^:#\[\.,]*$/;
 se.filter = function(e, t, i) {
  var n = t[0];
  return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? se.find.matchesSelector(n, e) ? [n] : [] : se.find.matches(e, se.grep(t, function(e) {
   return 1 === e.nodeType
  }))
 }, se.fn.extend({
  find: function(e) {
   var t, i = this.length,
    n = [],
    o = this;
   if ("string" != typeof e) return this.pushStack(se(e).filter(function() {
    for (t = 0; t < i; t++)
     if (se.contains(o[t], this)) return !0
   }));
   for (t = 0; t < i; t++) se.find(e, o[t], n);
   return n = this.pushStack(i > 1 ? se.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
  },
  filter: function(e) {
   return this.pushStack(n(this, e || [], !1))
  },
  not: function(e) {
   return this.pushStack(n(this, e || [], !0))
  },
  is: function(e) {
   return !!n(this, "string" == typeof e && pe.test(e) ? se(e) : e || [], !1).length
  }
 });
 var ve, ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
  ye = se.fn.init = function(e, t, i) {
   var n, o;
   if (!e) return this;
   if (i = i || ve, "string" == typeof e) {
    if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ge.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
    if (n[1]) {
     if (t = t instanceof se ? t[0] : t, se.merge(this, se.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Q, !0)), fe.test(n[1]) && se.isPlainObject(t))
      for (n in t) se.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
     return this
    }
    return o = Q.getElementById(n[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = Q, this.selector = e, this
   }
   return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : se.isFunction(e) ? void 0 !== i.ready ? i.ready(e) : e(se) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), se.makeArray(e, this))
  };
 ye.prototype = se.fn, ve = se(Q);
 var we = /^(?:parents|prev(?:Until|All))/,
  be = {
   children: !0,
   contents: !0,
   next: !0,
   prev: !0
  };
 se.fn.extend({
  has: function(e) {
   var t = se(e, this),
    i = t.length;
   return this.filter(function() {
    for (var e = 0; e < i; e++)
     if (se.contains(this, t[e])) return !0
   })
  },
  closest: function(e, t) {
   for (var i, n = 0, o = this.length, s = [], r = pe.test(e) || "string" != typeof e ? se(e, t || this.context) : 0; n < o; n++)
    for (i = this[n]; i && i !== t; i = i.parentNode)
     if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && se.find.matchesSelector(i, e))) {
      s.push(i);
      break
     }
   return this.pushStack(s.length > 1 ? se.uniqueSort(s) : s)
  },
  index: function(e) {
   return e ? "string" == typeof e ? Z.call(se(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
  },
  add: function(e, t) {
   return this.pushStack(se.uniqueSort(se.merge(this.get(), se(e, t))))
  },
  addBack: function(e) {
   return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
  }
 }), se.each({
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
   return he((e.parentNode || {}).firstChild, e)
  },
  children: function(e) {
   return he(e.firstChild)
  },
  contents: function(e) {
   return e.contentDocument || se.merge([], e.childNodes)
  }
 }, function(e, t) {
  se.fn[e] = function(i, n) {
   var o = se.map(this, t, i);
   return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (o = se.filter(n, o)), this.length > 1 && (be[e] || se.uniqueSort(o), we.test(e) && o.reverse()), this.pushStack(o)
  }
 });
 var xe = /\S+/g;
 se.Callbacks = function(e) {
  e = "string" == typeof e ? s(e) : se.extend({}, e);
  var t, i, n, o, r = [],
   a = [],
   l = -1,
   c = function() {
    for (o = e.once, n = t = !0; a.length; l = -1)
     for (i = a.shift(); ++l < r.length;) r[l].apply(i[0], i[1]) === !1 && e.stopOnFalse && (l = r.length, i = !1);
    e.memory || (i = !1), t = !1, o && (r = i ? [] : "")
   },
   d = {
    add: function() {
     return r && (i && !t && (l = r.length - 1, a.push(i)), function t(i) {
      se.each(i, function(i, n) {
       se.isFunction(n) ? e.unique && d.has(n) || r.push(n) : n && n.length && "string" !== se.type(n) && t(n)
      })
     }(arguments), i && !t && c()), this
    },
    remove: function() {
     return se.each(arguments, function(e, t) {
      for (var i;
       (i = se.inArray(t, r, i)) > -1;) r.splice(i, 1), i <= l && l--
     }), this
    },
    has: function(e) {
     return e ? se.inArray(e, r) > -1 : r.length > 0
    },
    empty: function() {
     return r && (r = []), this
    },
    disable: function() {
     return o = a = [], r = i = "", this
    },
    disabled: function() {
     return !r
    },
    lock: function() {
     return o = a = [], i || (r = i = ""), this
    },
    locked: function() {
     return !!o
    },
    fireWith: function(e, i) {
     return o || (i = i || [], i = [e, i.slice ? i.slice() : i], a.push(i), t || c()), this
    },
    fire: function() {
     return d.fireWith(this, arguments), this
    },
    fired: function() {
     return !!n
    }
   };
  return d
 }, se.extend({
  Deferred: function(e) {
   var t = [
     ["resolve", "done", se.Callbacks("once memory"), "resolved"],
     ["reject", "fail", se.Callbacks("once memory"), "rejected"],
     ["notify", "progress", se.Callbacks("memory")]
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
      return se.Deferred(function(i) {
       se.each(t, function(t, s) {
        var r = se.isFunction(e[t]) && e[t];
        o[s[1]](function() {
         var e = r && r.apply(this, arguments);
         e && se.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[s[0] + "With"](this === n ? i.promise() : this, r ? [e] : arguments)
        })
       }), e = null
      }).promise()
     },
     promise: function(e) {
      return null != e ? se.extend(e, n) : n
     }
    },
    o = {};
   return n.pipe = n.then, se.each(t, function(e, s) {
    var r = s[2],
     a = s[3];
    n[s[1]] = r.add, a && r.add(function() {
     i = a
    }, t[1 ^ e][2].disable, t[2][2].lock), o[s[0]] = function() {
     return o[s[0] + "With"](this === o ? n : this, arguments), this
    }, o[s[0] + "With"] = r.fireWith
   }), n.promise(o), e && e.call(o, o), o
  },
  when: function(e) {
   var t, i, n, o = 0,
    s = K.call(arguments),
    r = s.length,
    a = 1 !== r || e && se.isFunction(e.promise) ? r : 0,
    l = 1 === a ? e : se.Deferred(),
    c = function(e, i, n) {
     return function(o) {
      i[e] = this, n[e] = arguments.length > 1 ? K.call(arguments) : o, n === t ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
     }
    };
   if (r > 1)
    for (t = new Array(r), i = new Array(r), n = new Array(r); o < r; o++) s[o] && se.isFunction(s[o].promise) ? s[o].promise().progress(c(o, i, t)).done(c(o, n, s)).fail(l.reject) : --a;
   return a || l.resolveWith(n, s), l.promise()
  }
 });
 var Te;
 se.fn.ready = function(e) {
  return se.ready.promise().done(e), this
 }, se.extend({
  isReady: !1,
  readyWait: 1,
  holdReady: function(e) {
   e ? se.readyWait++ : se.ready(!0)
  },
  ready: function(e) {
   (e === !0 ? --se.readyWait : se.isReady) || (se.isReady = !0, e !== !0 && --se.readyWait > 0 || (Te.resolveWith(Q, [se]), se.fn.triggerHandler && (se(Q).triggerHandler("ready"), se(Q).off("ready"))))
  }
 }), se.ready.promise = function(t) {
  return Te || (Te = se.Deferred(), "complete" === Q.readyState || "loading" !== Q.readyState && !Q.documentElement.doScroll ? e.setTimeout(se.ready) : (Q.addEventListener("DOMContentLoaded", r), e.addEventListener("load", r))), Te.promise(t)
 }, se.ready.promise();
 var Se = function(e, t, i, n, o, s, r) {
   var a = 0,
    l = e.length,
    c = null == i;
   if ("object" === se.type(i)) {
    o = !0;
    for (a in i) Se(e, t, a, i[a], !0, s, r)
   } else if (void 0 !== n && (o = !0, se.isFunction(n) || (r = !0), c && (r ? (t.call(e, n), t = null) : (c = t, t = function(e, t, i) {
     return c.call(se(e), i)
    })), t))
    for (; a < l; a++) t(e[a], i, r ? n : n.call(e[a], a, t(e[a], i)));
   return o ? e : c ? t.call(e) : l ? t(e[0], i) : s
  },
  ke = function(e) {
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
   if (!ke(e)) return {};
   var t = e[this.expando];
   return t || (t = {}, ke(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
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
   return void 0 === t || t && "string" == typeof t && void 0 === i ? (n = this.get(e, t), void 0 !== n ? n : this.get(e, se.camelCase(t))) : (this.set(e, t, i), void 0 !== i ? i : t)
  },
  remove: function(e, t) {
   var i, n, o, s = e[this.expando];
   if (void 0 !== s) {
    if (void 0 === t) this.register(e);
    else {
     se.isArray(t) ? n = t.concat(t.map(se.camelCase)) : (o = se.camelCase(t), t in s ? n = [t, o] : (n = o, n = n in s ? [n] : n.match(xe) || [])), i = n.length;
     for (; i--;) delete s[n[i]]
    }(void 0 === t || se.isEmptyObject(s)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
   }
  },
  hasData: function(e) {
   var t = e[this.expando];
   return void 0 !== t && !se.isEmptyObject(t)
  }
 };
 var Ce = new a,
  Ee = new a,
  $e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
  Ae = /[A-Z]/g;
 se.extend({
  hasData: function(e) {
   return Ee.hasData(e) || Ce.hasData(e)
  },
  data: function(e, t, i) {
   return Ee.access(e, t, i)
  },
  removeData: function(e, t) {
   Ee.remove(e, t)
  },
  _data: function(e, t, i) {
   return Ce.access(e, t, i)
  },
  _removeData: function(e, t) {
   Ce.remove(e, t)
  }
 }), se.fn.extend({
  data: function(e, t) {
   var i, n, o, s = this[0],
    r = s && s.attributes;
   if (void 0 === e) {
    if (this.length && (o = Ee.get(s), 1 === s.nodeType && !Ce.get(s, "hasDataAttrs"))) {
     for (i = r.length; i--;) r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = se.camelCase(n.slice(5)), l(s, n, o[n])));
     Ce.set(s, "hasDataAttrs", !0)
    }
    return o
   }
   return "object" == typeof e ? this.each(function() {
    Ee.set(this, e)
   }) : Se(this, function(t) {
    var i, n;
    if (s && void 0 === t) {
     if (i = Ee.get(s, e) || Ee.get(s, e.replace(Ae, "-$&").toLowerCase()), void 0 !== i) return i;
     if (n = se.camelCase(e), i = Ee.get(s, n), void 0 !== i) return i;
     if (i = l(s, n, void 0), void 0 !== i) return i
    } else n = se.camelCase(e), this.each(function() {
     var i = Ee.get(this, n);
     Ee.set(this, n, t), e.indexOf("-") > -1 && void 0 !== i && Ee.set(this, e, t)
    })
   }, null, t, arguments.length > 1, null, !0)
  },
  removeData: function(e) {
   return this.each(function() {
    Ee.remove(this, e)
   })
  }
 }), se.extend({
  queue: function(e, t, i) {
   var n;
   if (e) return t = (t || "fx") + "queue", n = Ce.get(e, t), i && (!n || se.isArray(i) ? n = Ce.access(e, t, se.makeArray(i)) : n.push(i)), n || []
  },
  dequeue: function(e, t) {
   t = t || "fx";
   var i = se.queue(e, t),
    n = i.length,
    o = i.shift(),
    s = se._queueHooks(e, t),
    r = function() {
     se.dequeue(e, t)
    };
   "inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete s.stop, o.call(e, r, s)), !n && s && s.empty.fire()
  },
  _queueHooks: function(e, t) {
   var i = t + "queueHooks";
   return Ce.get(e, i) || Ce.access(e, i, {
    empty: se.Callbacks("once memory").add(function() {
     Ce.remove(e, [t + "queue", i])
    })
   })
  }
 }), se.fn.extend({
  queue: function(e, t) {
   var i = 2;
   return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? se.queue(this[0], e) : void 0 === t ? this : this.each(function() {
    var i = se.queue(this, e, t);
    se._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && se.dequeue(this, e)
   })
  },
  dequeue: function(e) {
   return this.each(function() {
    se.dequeue(this, e)
   })
  },
  clearQueue: function(e) {
   return this.queue(e || "fx", [])
  },
  promise: function(e, t) {
   var i, n = 1,
    o = se.Deferred(),
    s = this,
    r = this.length,
    a = function() {
     --n || o.resolveWith(s, [s])
    };
   for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;) i = Ce.get(s[r], e + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
   return a(), o.promise(t)
  }
 });
 var Pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
  Le = new RegExp("^(?:([+-])=|)(" + Pe + ")([a-z%]*)$", "i"),
  Oe = ["Top", "Right", "Bottom", "Left"],
  He = function(e, t) {
   return e = t || e, "none" === se.css(e, "display") || !se.contains(e.ownerDocument, e)
  },
  De = /^(?:checkbox|radio)$/i,
  Me = /<([\w:-]+)/,
  Ne = /^$|\/(?:java|ecma)script/i,
  je = {
   option: [1, "<select multiple='multiple'>", "</select>"],
   thead: [1, "<table>", "</table>"],
   col: [2, "<table><colgroup>", "</colgroup></table>"],
   tr: [2, "<table><tbody>", "</tbody></table>"],
   td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
   _default: [0, "", ""]
  };
 je.optgroup = je.option, je.tbody = je.tfoot = je.colgroup = je.caption = je.thead, je.th = je.td;
 var Ie = /<|&#?\w+;/;
 ! function() {
  var e = Q.createDocumentFragment(),
   t = e.appendChild(Q.createElement("div")),
   i = Q.createElement("input");
  i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), t.appendChild(i), ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
 }();
 var ze = /^key/,
  qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
  _e = /^([^.]*)(?:\.(.+)|)/;
 se.event = {
  global: {},
  add: function(e, t, i, n, o) {
   var s, r, a, l, c, d, u, h, p, f, m, v = Ce.get(e);
   if (v)
    for (i.handler && (s = i, i = s.handler, o = s.selector), i.guid || (i.guid = se.guid++), (l = v.events) || (l = v.events = {}), (r = v.handle) || (r = v.handle = function(t) {
      return "undefined" != typeof se && se.event.triggered !== t.type ? se.event.dispatch.apply(e, arguments) : void 0
     }), t = (t || "").match(xe) || [""], c = t.length; c--;) a = _e.exec(t[c]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p && (u = se.event.special[p] || {}, p = (o ? u.delegateType : u.bindType) || p, u = se.event.special[p] || {}, d = se.extend({
     type: p,
     origType: m,
     data: n,
     handler: i,
     guid: i.guid,
     selector: o,
     needsContext: o && se.expr.match.needsContext.test(o),
     namespace: f.join(".")
    }, s), (h = l[p]) || (h = l[p] = [], h.delegateCount = 0, u.setup && u.setup.call(e, n, f, r) !== !1 || e.addEventListener && e.addEventListener(p, r)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = i.guid)), o ? h.splice(h.delegateCount++, 0, d) : h.push(d), se.event.global[p] = !0)
  },
  remove: function(e, t, i, n, o) {
   var s, r, a, l, c, d, u, h, p, f, m, v = Ce.hasData(e) && Ce.get(e);
   if (v && (l = v.events)) {
    for (t = (t || "").match(xe) || [""], c = t.length; c--;)
     if (a = _e.exec(t[c]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
      for (u = se.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, h = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = h.length; s--;) d = h[s], !o && m !== d.origType || i && i.guid !== d.guid || a && !a.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (h.splice(s, 1), d.selector && h.delegateCount--, u.remove && u.remove.call(e, d));
      r && !h.length && (u.teardown && u.teardown.call(e, f, v.handle) !== !1 || se.removeEvent(e, p, v.handle), delete l[p])
     } else
      for (p in l) se.event.remove(e, p + t[c], i, n, !0);
    se.isEmptyObject(l) && Ce.remove(e, "handle events")
   }
  },
  dispatch: function(e) {
   e = se.event.fix(e);
   var t, i, n, o, s, r = [],
    a = K.call(arguments),
    l = (Ce.get(this, "events") || {})[e.type] || [],
    c = se.event.special[e.type] || {};
   if (a[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
    for (r = se.event.handlers.call(this, e, l), t = 0;
     (o = r[t++]) && !e.isPropagationStopped();)
     for (e.currentTarget = o.elem, i = 0;
      (s = o.handlers[i++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(s.namespace) || (e.handleObj = s, e.data = s.data, n = ((se.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, a), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
    return c.postDispatch && c.postDispatch.call(this, e), e.result
   }
  },
  handlers: function(e, t) {
   var i, n, o, s, r = [],
    a = t.delegateCount,
    l = e.target;
   if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
    for (; l !== this; l = l.parentNode || this)
     if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
      for (n = [], i = 0; i < a; i++) s = t[i], o = s.selector + " ", void 0 === n[o] && (n[o] = s.needsContext ? se(o, this).index(l) > -1 : se.find(o, this, null, [l]).length), n[o] && n.push(s);
      n.length && r.push({
       elem: l,
       handlers: n
      })
     }
   return a < t.length && r.push({
    elem: this,
    handlers: t.slice(a)
   }), r
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
    var i, n, o, s = t.button;
    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || Q, n = i.documentElement, o = i.body, e.pageX = t.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
   }
  },
  fix: function(e) {
   if (e[se.expando]) return e;
   var t, i, n, o = e.type,
    s = e,
    r = this.fixHooks[o];
   for (r || (this.fixHooks[o] = r = qe.test(o) ? this.mouseHooks : ze.test(o) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, e = new se.Event(s), t = n.length; t--;) i = n[t], e[i] = s[i];
   return e.target || (e.target = Q), 3 === e.target.nodeType && (e.target = e.target.parentNode), r.filter ? r.filter(e, s) : e
  },
  special: {
   load: {
    noBubble: !0
   },
   focus: {
    trigger: function() {
     if (this !== m() && this.focus) return this.focus(), !1
    },
    delegateType: "focusin"
   },
   blur: {
    trigger: function() {
     if (this === m() && this.blur) return this.blur(), !1
    },
    delegateType: "focusout"
   },
   click: {
    trigger: function() {
     if ("checkbox" === this.type && this.click && se.nodeName(this, "input")) return this.click(), !1
    },
    _default: function(e) {
     return se.nodeName(e.target, "a")
    }
   },
   beforeunload: {
    postDispatch: function(e) {
     void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
    }
   }
  }
 }, se.removeEvent = function(e, t, i) {
  e.removeEventListener && e.removeEventListener(t, i)
 }, se.Event = function(e, t) {
  return this instanceof se.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : f) : this.type = e, t && se.extend(this, t), this.timeStamp = e && e.timeStamp || se.now(), void(this[se.expando] = !0)) : new se.Event(e, t)
 }, se.Event.prototype = {
  constructor: se.Event,
  isDefaultPrevented: f,
  isPropagationStopped: f,
  isImmediatePropagationStopped: f,
  preventDefault: function() {
   var e = this.originalEvent;
   this.isDefaultPrevented = p, e && e.preventDefault()
  },
  stopPropagation: function() {
   var e = this.originalEvent;
   this.isPropagationStopped = p, e && e.stopPropagation()
  },
  stopImmediatePropagation: function() {
   var e = this.originalEvent;
   this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation(), this.stopPropagation()
  }
 }, se.each({
  mouseenter: "mouseover",
  mouseleave: "mouseout",
  pointerenter: "pointerover",
  pointerleave: "pointerout"
 }, function(e, t) {
  se.event.special[e] = {
   delegateType: t,
   bindType: t,
   handle: function(e) {
    var i, n = this,
     o = e.relatedTarget,
     s = e.handleObj;
    return o && (o === n || se.contains(n, o)) || (e.type = s.origType, i = s.handler.apply(this, arguments), e.type = t), i
   }
  }
 }), se.fn.extend({
  on: function(e, t, i, n) {
   return v(this, e, t, i, n)
  },
  one: function(e, t, i, n) {
   return v(this, e, t, i, n, 1)
  },
  off: function(e, t, i) {
   var n, o;
   if (e && e.preventDefault && e.handleObj) return n = e.handleObj, se(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
   if ("object" == typeof e) {
    for (o in e) this.off(o, t, e[o]);
    return this
   }
   return t !== !1 && "function" != typeof t || (i = t, t = void 0), i === !1 && (i = f), this.each(function() {
    se.event.remove(this, e, i, t)
   })
  }
 });
 var We = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
  Xe = /<script|<style|<link/i,
  Re = /checked\s*(?:[^=]|=\s*.checked.)/i,
  Ye = /^true\/(.*)/,
  Be = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
 se.extend({
  htmlPrefilter: function(e) {
   return e.replace(We, "<$1></$2>")
  },
  clone: function(e, t, i) {
   var n, o, s, r, a = e.cloneNode(!0),
    l = se.contains(e.ownerDocument, e);
   if (!(ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || se.isXMLDoc(e)))
    for (r = d(a), s = d(e), n = 0, o = s.length; n < o; n++) x(s[n], r[n]);
   if (t)
    if (i)
     for (s = s || d(e), r = r || d(a), n = 0, o = s.length; n < o; n++) b(s[n], r[n]);
    else b(e, a);
   return r = d(a, "script"), r.length > 0 && u(r, !l && d(e, "script")), a
  },
  cleanData: function(e) {
   for (var t, i, n, o = se.event.special, s = 0; void 0 !== (i = e[s]); s++)
    if (ke(i)) {
     if (t = i[Ce.expando]) {
      if (t.events)
       for (n in t.events) o[n] ? se.event.remove(i, n) : se.removeEvent(i, n, t.handle);
      i[Ce.expando] = void 0
     }
     i[Ee.expando] && (i[Ee.expando] = void 0)
    }
  }
 }), se.fn.extend({
  domManip: T,
  detach: function(e) {
   return S(this, e, !0)
  },
  remove: function(e) {
   return S(this, e)
  },
  text: function(e) {
   return Se(this, function(e) {
    return void 0 === e ? se.text(this) : this.empty().each(function() {
     1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
    })
   }, null, e, arguments.length)
  },
  append: function() {
   return T(this, arguments, function(e) {
    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
     var t = g(this, e);
     t.appendChild(e)
    }
   })
  },
  prepend: function() {
   return T(this, arguments, function(e) {
    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
     var t = g(this, e);
     t.insertBefore(e, t.firstChild)
    }
   })
  },
  before: function() {
   return T(this, arguments, function(e) {
    this.parentNode && this.parentNode.insertBefore(e, this)
   })
  },
  after: function() {
   return T(this, arguments, function(e) {
    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
   })
  },
  empty: function() {
   for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (se.cleanData(d(e, !1)), e.textContent = "");
   return this
  },
  clone: function(e, t) {
   return e = null != e && e, t = null == t ? e : t, this.map(function() {
    return se.clone(this, e, t)
   })
  },
  html: function(e) {
   return Se(this, function(e) {
    var t = this[0] || {},
     i = 0,
     n = this.length;
    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
    if ("string" == typeof e && !Xe.test(e) && !je[(Me.exec(e) || ["", ""])[1].toLowerCase()]) {
     e = se.htmlPrefilter(e);
     try {
      for (; i < n; i++) t = this[i] || {}, 1 === t.nodeType && (se.cleanData(d(t, !1)), t.innerHTML = e);
      t = 0
     } catch (e) {}
    }
    t && this.empty().append(e)
   }, null, e, arguments.length)
  },
  replaceWith: function() {
   var e = [];
   return T(this, arguments, function(t) {
    var i = this.parentNode;
    se.inArray(this, e) < 0 && (se.cleanData(d(this)), i && i.replaceChild(t, this))
   }, e)
  }
 }), se.each({
  appendTo: "append",
  prependTo: "prepend",
  insertBefore: "before",
  insertAfter: "after",
  replaceAll: "replaceWith"
 }, function(e, t) {
  se.fn[e] = function(e) {
   for (var i, n = [], o = se(e), s = o.length - 1, r = 0; r <= s; r++) i = r === s ? this : this.clone(!0), se(o[r])[t](i), J.apply(n, i.get());
   return this.pushStack(n)
  }
 });
 var Fe, Ue = {
   HTML: "block",
   BODY: "block"
  },
  Ve = /^margin/,
  Qe = new RegExp("^(" + Pe + ")(?!px)[a-z%]+$", "i"),
  Ke = function(t) {
   var i = t.ownerDocument.defaultView;
   return i && i.opener || (i = e), i.getComputedStyle(t)
  },
  Ge = function(e, t, i, n) {
   var o, s, r = {};
   for (s in t) r[s] = e.style[s], e.style[s] = t[s];
   o = i.apply(e, n || []);
   for (s in t) e.style[s] = r[s];
   return o
  },
  Je = Q.documentElement;
 ! function() {
  function t() {
   a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Je.appendChild(r);
   var t = e.getComputedStyle(a);
   i = "1%" !== t.top, s = "2px" === t.marginLeft, n = "4px" === t.width, a.style.marginRight = "50%", o = "4px" === t.marginRight, Je.removeChild(r)
  }
  var i, n, o, s, r = Q.createElement("div"),
   a = Q.createElement("div");
  a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", r.appendChild(a), se.extend(ne, {
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
    return null == n && t(), s
   },
   reliableMarginRight: function() {
    var t, i = a.appendChild(Q.createElement("div"));
    return i.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", a.style.width = "1px", Je.appendChild(r), t = !parseFloat(e.getComputedStyle(i).marginRight), Je.removeChild(r), a.removeChild(i), t
   }
  }))
 }();
 var Ze = /^(none|table(?!-c[ea]).+)/,
  et = {
   position: "absolute",
   visibility: "hidden",
   display: "block"
  },
  tt = {
   letterSpacing: "0",
   fontWeight: "400"
  },
  it = ["Webkit", "O", "Moz", "ms"],
  nt = Q.createElement("div").style;
 se.extend({
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
    var o, s, r, a = se.camelCase(t),
     l = e.style;
    return t = se.cssProps[a] || (se.cssProps[a] = A(a) || a), r = se.cssHooks[t] || se.cssHooks[a], void 0 === i ? r && "get" in r && void 0 !== (o = r.get(e, !1, n)) ? o : l[t] : (s = typeof i, "string" === s && (o = Le.exec(i)) && o[1] && (i = c(e, t, o), s = "number"), null != i && i === i && ("number" === s && (i += o && o[3] || (se.cssNumber[a] ? "" : "px")), ne.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), r && "set" in r && void 0 === (i = r.set(e, i, n)) || (l[t] = i)), void 0)
   }
  },
  css: function(e, t, i, n) {
   var o, s, r, a = se.camelCase(t);
   return t = se.cssProps[a] || (se.cssProps[a] = A(a) || a), r = se.cssHooks[t] || se.cssHooks[a], r && "get" in r && (o = r.get(e, !0, i)), void 0 === o && (o = E(e, t, n)), "normal" === o && t in tt && (o = tt[t]), "" === i || i ? (s = parseFloat(o), i === !0 || isFinite(s) ? s || 0 : o) : o
  }
 }), se.each(["height", "width"], function(e, t) {
  se.cssHooks[t] = {
   get: function(e, i, n) {
    if (i) return Ze.test(se.css(e, "display")) && 0 === e.offsetWidth ? Ge(e, et, function() {
     return O(e, t, n)
    }) : O(e, t, n)
   },
   set: function(e, i, n) {
    var o, s = n && Ke(e),
     r = n && L(e, t, n, "border-box" === se.css(e, "boxSizing", !1, s), s);
    return r && (o = Le.exec(i)) && "px" !== (o[3] || "px") && (e.style[t] = i, i = se.css(e, t)), P(e, i, r)
   }
  }
 }), se.cssHooks.marginLeft = $(ne.reliableMarginLeft, function(e, t) {
  if (t) return (parseFloat(E(e, "marginLeft")) || e.getBoundingClientRect().left - Ge(e, {
   marginLeft: 0
  }, function() {
   return e.getBoundingClientRect().left
  })) + "px"
 }), se.cssHooks.marginRight = $(ne.reliableMarginRight, function(e, t) {
  if (t) return Ge(e, {
   display: "inline-block"
  }, E, [e, "marginRight"])
 }), se.each({
  margin: "",
  padding: "",
  border: "Width"
 }, function(e, t) {
  se.cssHooks[e + t] = {
   expand: function(i) {
    for (var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) o[e + Oe[n] + t] = s[n] || s[n - 2] || s[0];
    return o
   }
  }, Ve.test(e) || (se.cssHooks[e + t].set = P)
 }), se.fn.extend({
  css: function(e, t) {
   return Se(this, function(e, t, i) {
    var n, o, s = {},
     r = 0;
    if (se.isArray(t)) {
     for (n = Ke(e), o = t.length; r < o; r++) s[t[r]] = se.css(e, t[r], !1, n);
     return s
    }
    return void 0 !== i ? se.style(e, t, i) : se.css(e, t)
   }, e, t, arguments.length > 1)
  },
  show: function() {
   return H(this, !0)
  },
  hide: function() {
   return H(this)
  },
  toggle: function(e) {
   return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
    He(this) ? se(this).show() : se(this).hide()
   })
  }
 }), se.Tween = D, D.prototype = {
  constructor: D,
  init: function(e, t, i, n, o, s) {
   this.elem = e, this.prop = i, this.easing = o || se.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = s || (se.cssNumber[i] ? "" : "px")
  },
  cur: function() {
   var e = D.propHooks[this.prop];
   return e && e.get ? e.get(this) : D.propHooks._default.get(this)
  },
  run: function(e) {
   var t, i = D.propHooks[this.prop];
   return this.options.duration ? this.pos = t = se.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : D.propHooks._default.set(this), this
  }
 }, D.prototype.init.prototype = D.prototype, D.propHooks = {
  _default: {
   get: function(e) {
    var t;
    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = se.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
   },
   set: function(e) {
    se.fx.step[e.prop] ? se.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[se.cssProps[e.prop]] && !se.cssHooks[e.prop] ? e.elem[e.prop] = e.now : se.style(e.elem, e.prop, e.now + e.unit)
   }
  }
 }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
  set: function(e) {
   e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
  }
 }, se.easing = {
  linear: function(e) {
   return e
  },
  swing: function(e) {
   return .5 - Math.cos(e * Math.PI) / 2
  },
  _default: "swing"
 }, se.fx = D.prototype.init, se.fx.step = {};
 var ot, st, rt = /^(?:toggle|show|hide)$/,
  at = /queueHooks$/;
 se.Animation = se.extend(q, {
   tweeners: {
    "*": [function(e, t) {
     var i = this.createTween(e, t);
     return c(i.elem, e, Le.exec(t), i), i
    }]
   },
   tweener: function(e, t) {
    se.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(xe);
    for (var i, n = 0, o = e.length; n < o; n++) i = e[n], q.tweeners[i] = q.tweeners[i] || [], q.tweeners[i].unshift(t)
   },
   prefilters: [I],
   prefilter: function(e, t) {
    t ? q.prefilters.unshift(e) : q.prefilters.push(e)
   }
  }), se.speed = function(e, t, i) {
   var n = e && "object" == typeof e ? se.extend({}, e) : {
    complete: i || !i && t || se.isFunction(e) && e,
    duration: e,
    easing: i && t || t && !se.isFunction(t) && t
   };
   return n.duration = se.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in se.fx.speeds ? se.fx.speeds[n.duration] : se.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
    se.isFunction(n.old) && n.old.call(this), n.queue && se.dequeue(this, n.queue)
   }, n
  }, se.fn.extend({
   fadeTo: function(e, t, i, n) {
    return this.filter(He).css("opacity", 0).show().end().animate({
     opacity: t
    }, e, i, n)
   },
   animate: function(e, t, i, n) {
    var o = se.isEmptyObject(e),
     s = se.speed(t, i, n),
     r = function() {
      var t = q(this, se.extend({}, e), s);
      (o || Ce.get(this, "finish")) && t.stop(!0)
     };
    return r.finish = r, o || s.queue === !1 ? this.each(r) : this.queue(s.queue, r)
   },
   stop: function(e, t, i) {
    var n = function(e) {
     var t = e.stop;
     delete e.stop, t(i)
    };
    return "string" != typeof e && (i = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
     var t = !0,
      o = null != e && e + "queueHooks",
      s = se.timers,
      r = Ce.get(this);
     if (o) r[o] && r[o].stop && n(r[o]);
     else
      for (o in r) r[o] && r[o].stop && at.test(o) && n(r[o]);
     for (o = s.length; o--;) s[o].elem !== this || null != e && s[o].queue !== e || (s[o].anim.stop(i), t = !1, s.splice(o, 1));
     !t && i || se.dequeue(this, e)
    })
   },
   finish: function(e) {
    return e !== !1 && (e = e || "fx"), this.each(function() {
     var t, i = Ce.get(this),
      n = i[e + "queue"],
      o = i[e + "queueHooks"],
      s = se.timers,
      r = n ? n.length : 0;
     for (i.finish = !0, se.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
     for (t = 0; t < r; t++) n[t] && n[t].finish && n[t].finish.call(this);
     delete i.finish
    })
   }
  }), se.each(["toggle", "show", "hide"], function(e, t) {
   var i = se.fn[t];
   se.fn[t] = function(e, n, o) {
    return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(N(t, !0), e, n, o)
   }
  }), se.each({
   slideDown: N("show"),
   slideUp: N("hide"),
   slideToggle: N("toggle"),
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
   se.fn[e] = function(e, i, n) {
    return this.animate(t, e, i, n)
   }
  }), se.timers = [], se.fx.tick = function() {
   var e, t = 0,
    i = se.timers;
   for (ot = se.now(); t < i.length; t++) e = i[t], e() || i[t] !== e || i.splice(t--, 1);
   i.length || se.fx.stop(),
    ot = void 0
  }, se.fx.timer = function(e) {
   se.timers.push(e), e() ? se.fx.start() : se.timers.pop()
  }, se.fx.interval = 13, se.fx.start = function() {
   st || (st = e.setInterval(se.fx.tick, se.fx.interval))
  }, se.fx.stop = function() {
   e.clearInterval(st), st = null
  }, se.fx.speeds = {
   slow: 600,
   fast: 200,
   _default: 400
  }, se.fn.delay = function(t, i) {
   return t = se.fx ? se.fx.speeds[t] || t : t, i = i || "fx", this.queue(i, function(i, n) {
    var o = e.setTimeout(i, t);
    n.stop = function() {
     e.clearTimeout(o)
    }
   })
  },
  function() {
   var e = Q.createElement("input"),
    t = Q.createElement("select"),
    i = t.appendChild(Q.createElement("option"));
   e.type = "checkbox", ne.checkOn = "" !== e.value, ne.optSelected = i.selected, t.disabled = !0, ne.optDisabled = !i.disabled, e = Q.createElement("input"), e.value = "t", e.type = "radio", ne.radioValue = "t" === e.value
  }();
 var lt, ct = se.expr.attrHandle;
 se.fn.extend({
  attr: function(e, t) {
   return Se(this, se.attr, e, t, arguments.length > 1)
  },
  removeAttr: function(e) {
   return this.each(function() {
    se.removeAttr(this, e)
   })
  }
 }), se.extend({
  attr: function(e, t, i) {
   var n, o, s = e.nodeType;
   if (3 !== s && 8 !== s && 2 !== s) return "undefined" == typeof e.getAttribute ? se.prop(e, t, i) : (1 === s && se.isXMLDoc(e) || (t = t.toLowerCase(), o = se.attrHooks[t] || (se.expr.match.bool.test(t) ? lt : void 0)), void 0 !== i ? null === i ? void se.removeAttr(e, t) : o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : o && "get" in o && null !== (n = o.get(e, t)) ? n : (n = se.find.attr(e, t), null == n ? void 0 : n))
  },
  attrHooks: {
   type: {
    set: function(e, t) {
     if (!ne.radioValue && "radio" === t && se.nodeName(e, "input")) {
      var i = e.value;
      return e.setAttribute("type", t), i && (e.value = i), t
     }
    }
   }
  },
  removeAttr: function(e, t) {
   var i, n, o = 0,
    s = t && t.match(xe);
   if (s && 1 === e.nodeType)
    for (; i = s[o++];) n = se.propFix[i] || i, se.expr.match.bool.test(i) && (e[n] = !1), e.removeAttribute(i)
  }
 }), lt = {
  set: function(e, t, i) {
   return t === !1 ? se.removeAttr(e, i) : e.setAttribute(i, i), i
  }
 }, se.each(se.expr.match.bool.source.match(/\w+/g), function(e, t) {
  var i = ct[t] || se.find.attr;
  ct[t] = function(e, t, n) {
   var o, s;
   return n || (s = ct[t], ct[t] = o, o = null != i(e, t, n) ? t.toLowerCase() : null, ct[t] = s), o
  }
 });
 var dt = /^(?:input|select|textarea|button)$/i,
  ut = /^(?:a|area)$/i;
 se.fn.extend({
  prop: function(e, t) {
   return Se(this, se.prop, e, t, arguments.length > 1)
  },
  removeProp: function(e) {
   return this.each(function() {
    delete this[se.propFix[e] || e]
   })
  }
 }), se.extend({
  prop: function(e, t, i) {
   var n, o, s = e.nodeType;
   if (3 !== s && 8 !== s && 2 !== s) return 1 === s && se.isXMLDoc(e) || (t = se.propFix[t] || t, o = se.propHooks[t]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]
  },
  propHooks: {
   tabIndex: {
    get: function(e) {
     var t = se.find.attr(e, "tabindex");
     return t ? parseInt(t, 10) : dt.test(e.nodeName) || ut.test(e.nodeName) && e.href ? 0 : -1
    }
   }
  },
  propFix: {
   for: "htmlFor",
   class: "className"
  }
 }), ne.optSelected || (se.propHooks.selected = {
  get: function(e) {
   var t = e.parentNode;
   return t && t.parentNode && t.parentNode.selectedIndex, null
  },
  set: function(e) {
   var t = e.parentNode;
   t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
  }
 }), se.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
  se.propFix[this.toLowerCase()] = this
 });
 var ht = /[\t\r\n\f]/g;
 se.fn.extend({
  addClass: function(e) {
   var t, i, n, o, s, r, a, l = 0;
   if (se.isFunction(e)) return this.each(function(t) {
    se(this).addClass(e.call(this, t, _(this)))
   });
   if ("string" == typeof e && e)
    for (t = e.match(xe) || []; i = this[l++];)
     if (o = _(i), n = 1 === i.nodeType && (" " + o + " ").replace(ht, " ")) {
      for (r = 0; s = t[r++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
      a = se.trim(n), o !== a && i.setAttribute("class", a)
     }
   return this
  },
  removeClass: function(e) {
   var t, i, n, o, s, r, a, l = 0;
   if (se.isFunction(e)) return this.each(function(t) {
    se(this).removeClass(e.call(this, t, _(this)))
   });
   if (!arguments.length) return this.attr("class", "");
   if ("string" == typeof e && e)
    for (t = e.match(xe) || []; i = this[l++];)
     if (o = _(i), n = 1 === i.nodeType && (" " + o + " ").replace(ht, " ")) {
      for (r = 0; s = t[r++];)
       for (; n.indexOf(" " + s + " ") > -1;) n = n.replace(" " + s + " ", " ");
      a = se.trim(n), o !== a && i.setAttribute("class", a)
     }
   return this
  },
  toggleClass: function(e, t) {
   var i = typeof e;
   return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : se.isFunction(e) ? this.each(function(i) {
    se(this).toggleClass(e.call(this, i, _(this), t), t)
   }) : this.each(function() {
    var t, n, o, s;
    if ("string" === i)
     for (n = 0, o = se(this), s = e.match(xe) || []; t = s[n++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
    else void 0 !== e && "boolean" !== i || (t = _(this), t && Ce.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Ce.get(this, "__className__") || ""))
   })
  },
  hasClass: function(e) {
   var t, i, n = 0;
   for (t = " " + e + " "; i = this[n++];)
    if (1 === i.nodeType && (" " + _(i) + " ").replace(ht, " ").indexOf(t) > -1) return !0;
   return !1
  }
 });
 var pt = /\r/g,
  ft = /[\x20\t\r\n\f]+/g;
 se.fn.extend({
  val: function(e) {
   var t, i, n, o = this[0]; {
    if (arguments.length) return n = se.isFunction(e), this.each(function(i) {
     var o;
     1 === this.nodeType && (o = n ? e.call(this, i, se(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : se.isArray(o) && (o = se.map(o, function(e) {
      return null == e ? "" : e + ""
     })), t = se.valHooks[this.type] || se.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
    });
    if (o) return t = se.valHooks[o.type] || se.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (i = t.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(pt, "") : null == i ? "" : i)
   }
  }
 }), se.extend({
  valHooks: {
   option: {
    get: function(e) {
     var t = se.find.attr(e, "value");
     return null != t ? t : se.trim(se.text(e)).replace(ft, " ")
    }
   },
   select: {
    get: function(e) {
     for (var t, i, n = e.options, o = e.selectedIndex, s = "select-one" === e.type || o < 0, r = s ? null : [], a = s ? o + 1 : n.length, l = o < 0 ? a : s ? o : 0; l < a; l++)
      if (i = n[l], (i.selected || l === o) && (ne.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !se.nodeName(i.parentNode, "optgroup"))) {
       if (t = se(i).val(), s) return t;
       r.push(t)
      }
     return r
    },
    set: function(e, t) {
     for (var i, n, o = e.options, s = se.makeArray(t), r = o.length; r--;) n = o[r], (n.selected = se.inArray(se.valHooks.option.get(n), s) > -1) && (i = !0);
     return i || (e.selectedIndex = -1), s
    }
   }
  }
 }), se.each(["radio", "checkbox"], function() {
  se.valHooks[this] = {
   set: function(e, t) {
    if (se.isArray(t)) return e.checked = se.inArray(se(e).val(), t) > -1
   }
  }, ne.checkOn || (se.valHooks[this].get = function(e) {
   return null === e.getAttribute("value") ? "on" : e.value
  })
 });
 var mt = /^(?:focusinfocus|focusoutblur)$/;
 se.extend(se.event, {
  trigger: function(t, i, n, o) {
   var s, r, a, l, c, d, u, h = [n || Q],
    p = ie.call(t, "type") ? t.type : t,
    f = ie.call(t, "namespace") ? t.namespace.split(".") : [];
   if (r = a = n = n || Q, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(p + se.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), c = p.indexOf(":") < 0 && "on" + p, t = t[se.expando] ? t : new se.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : se.makeArray(i, [t]), u = se.event.special[p] || {}, o || !u.trigger || u.trigger.apply(n, i) !== !1)) {
    if (!o && !u.noBubble && !se.isWindow(n)) {
     for (l = u.delegateType || p, mt.test(l + p) || (r = r.parentNode); r; r = r.parentNode) h.push(r), a = r;
     a === (n.ownerDocument || Q) && h.push(a.defaultView || a.parentWindow || e)
    }
    for (s = 0;
     (r = h[s++]) && !t.isPropagationStopped();) t.type = s > 1 ? l : u.bindType || p, d = (Ce.get(r, "events") || {})[t.type] && Ce.get(r, "handle"), d && d.apply(r, i), d = c && r[c], d && d.apply && ke(r) && (t.result = d.apply(r, i), t.result === !1 && t.preventDefault());
    return t.type = p, o || t.isDefaultPrevented() || u._default && u._default.apply(h.pop(), i) !== !1 || !ke(n) || c && se.isFunction(n[p]) && !se.isWindow(n) && (a = n[c], a && (n[c] = null), se.event.triggered = p, n[p](), se.event.triggered = void 0, a && (n[c] = a)), t.result
   }
  },
  simulate: function(e, t, i) {
   var n = se.extend(new se.Event, i, {
    type: e,
    isSimulated: !0
   });
   se.event.trigger(n, null, t), n.isDefaultPrevented() && i.preventDefault()
  }
 }), se.fn.extend({
  trigger: function(e, t) {
   return this.each(function() {
    se.event.trigger(e, t, this)
   })
  },
  triggerHandler: function(e, t) {
   var i = this[0];
   if (i) return se.event.trigger(e, t, i, !0)
  }
 }), se.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
  se.fn[t] = function(e, i) {
   return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
  }
 }), se.fn.extend({
  hover: function(e, t) {
   return this.mouseenter(e).mouseleave(t || e)
  }
 }), ne.focusin = "onfocusin" in e, ne.focusin || se.each({
  focus: "focusin",
  blur: "focusout"
 }, function(e, t) {
  var i = function(e) {
   se.event.simulate(t, e.target, se.event.fix(e))
  };
  se.event.special[t] = {
   setup: function() {
    var n = this.ownerDocument || this,
     o = Ce.access(n, t);
    o || n.addEventListener(e, i, !0), Ce.access(n, t, (o || 0) + 1)
   },
   teardown: function() {
    var n = this.ownerDocument || this,
     o = Ce.access(n, t) - 1;
    o ? Ce.access(n, t, o) : (n.removeEventListener(e, i, !0), Ce.remove(n, t))
   }
  }
 });
 var vt = e.location,
  gt = se.now(),
  yt = /\?/;
 se.parseJSON = function(e) {
  return JSON.parse(e + "")
 }, se.parseXML = function(t) {
  var i;
  if (!t || "string" != typeof t) return null;
  try {
   i = (new e.DOMParser).parseFromString(t, "text/xml")
  } catch (e) {
   i = void 0
  }
  return i && !i.getElementsByTagName("parsererror").length || se.error("Invalid XML: " + t), i
 };
 var wt = /#.*$/,
  bt = /([?&])_=[^&]*/,
  xt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
  Tt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
  St = /^(?:GET|HEAD)$/,
  kt = /^\/\//,
  Ct = {},
  Et = {},
  $t = "*/".concat("*"),
  At = Q.createElement("a");
 At.href = vt.href, se.extend({
  active: 0,
  lastModified: {},
  etag: {},
  ajaxSettings: {
   url: vt.href,
   type: "GET",
   isLocal: Tt.test(vt.protocol),
   global: !0,
   processData: !0,
   async: !0,
   contentType: "application/x-www-form-urlencoded; charset=UTF-8",
   accepts: {
    "*": $t,
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
    "text json": se.parseJSON,
    "text xml": se.parseXML
   },
   flatOptions: {
    url: !0,
    context: !0
   }
  },
  ajaxSetup: function(e, t) {
   return t ? R(R(e, se.ajaxSettings), t) : R(se.ajaxSettings, e)
  },
  ajaxPrefilter: W(Ct),
  ajaxTransport: W(Et),
  ajax: function(t, i) {
   function n(t, i, n, a) {
    var c, u, y, w, x, S = i;
    2 !== b && (b = 2, l && e.clearTimeout(l), o = void 0, r = a || "", T.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, n && (w = Y(h, T, n)), w = B(h, w, T, c), c ? (h.ifModified && (x = T.getResponseHeader("Last-Modified"), x && (se.lastModified[s] = x), x = T.getResponseHeader("etag"), x && (se.etag[s] = x)), 204 === t || "HEAD" === h.type ? S = "nocontent" : 304 === t ? S = "notmodified" : (S = w.state, u = w.data, y = w.error, c = !y)) : (y = S, !t && S || (S = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (i || S) + "", c ? m.resolveWith(p, [u, S, T]) : m.rejectWith(p, [T, S, y]), T.statusCode(g), g = void 0, d && f.trigger(c ? "ajaxSuccess" : "ajaxError", [T, h, c ? u : y]), v.fireWith(p, [T, S]), d && (f.trigger("ajaxComplete", [T, h]), --se.active || se.event.trigger("ajaxStop")))
   }
   "object" == typeof t && (i = t, t = void 0), i = i || {};
   var o, s, r, a, l, c, d, u, h = se.ajaxSetup({}, i),
    p = h.context || h,
    f = h.context && (p.nodeType || p.jquery) ? se(p) : se.event,
    m = se.Deferred(),
    v = se.Callbacks("once memory"),
    g = h.statusCode || {},
    y = {},
    w = {},
    b = 0,
    x = "canceled",
    T = {
     readyState: 0,
     getResponseHeader: function(e) {
      var t;
      if (2 === b) {
       if (!a)
        for (a = {}; t = xt.exec(r);) a[t[1].toLowerCase()] = t[2];
       t = a[e.toLowerCase()]
      }
      return null == t ? null : t
     },
     getAllResponseHeaders: function() {
      return 2 === b ? r : null
     },
     setRequestHeader: function(e, t) {
      var i = e.toLowerCase();
      return b || (e = w[i] = w[i] || e, y[e] = t), this
     },
     overrideMimeType: function(e) {
      return b || (h.mimeType = e), this
     },
     statusCode: function(e) {
      var t;
      if (e)
       if (b < 2)
        for (t in e) g[t] = [g[t], e[t]];
       else T.always(e[T.status]);
      return this
     },
     abort: function(e) {
      var t = e || x;
      return o && o.abort(t), n(0, t), this
     }
    };
   if (m.promise(T).complete = v.add, T.success = T.done, T.error = T.fail, h.url = ((t || h.url || vt.href) + "").replace(wt, "").replace(kt, vt.protocol + "//"), h.type = i.method || i.type || h.method || h.type, h.dataTypes = se.trim(h.dataType || "*").toLowerCase().match(xe) || [""], null == h.crossDomain) {
    c = Q.createElement("a");
    try {
     c.href = h.url, c.href = c.href, h.crossDomain = At.protocol + "//" + At.host != c.protocol + "//" + c.host
    } catch (e) {
     h.crossDomain = !0
    }
   }
   if (h.data && h.processData && "string" != typeof h.data && (h.data = se.param(h.data, h.traditional)), X(Ct, h, i, T), 2 === b) return T;
   d = se.event && h.global, d && 0 === se.active++ && se.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !St.test(h.type), s = h.url, h.hasContent || (h.data && (s = h.url += (yt.test(s) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = bt.test(s) ? s.replace(bt, "$1_=" + gt++) : s + (yt.test(s) ? "&" : "?") + "_=" + gt++)), h.ifModified && (se.lastModified[s] && T.setRequestHeader("If-Modified-Since", se.lastModified[s]), se.etag[s] && T.setRequestHeader("If-None-Match", se.etag[s])), (h.data && h.hasContent && h.contentType !== !1 || i.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
   for (u in h.headers) T.setRequestHeader(u, h.headers[u]);
   if (h.beforeSend && (h.beforeSend.call(p, T, h) === !1 || 2 === b)) return T.abort();
   x = "abort";
   for (u in {
     success: 1,
     error: 1,
     complete: 1
    }) T[u](h[u]);
   if (o = X(Et, h, i, T)) {
    if (T.readyState = 1, d && f.trigger("ajaxSend", [T, h]), 2 === b) return T;
    h.async && h.timeout > 0 && (l = e.setTimeout(function() {
     T.abort("timeout")
    }, h.timeout));
    try {
     b = 1, o.send(y, n)
    } catch (e) {
     if (!(b < 2)) throw e;
     n(-1, e)
    }
   } else n(-1, "No Transport");
   return T
  },
  getJSON: function(e, t, i) {
   return se.get(e, t, i, "json")
  },
  getScript: function(e, t) {
   return se.get(e, void 0, t, "script")
  }
 }), se.each(["get", "post"], function(e, t) {
  se[t] = function(e, i, n, o) {
   return se.isFunction(i) && (o = o || n, n = i, i = void 0), se.ajax(se.extend({
    url: e,
    type: t,
    dataType: o,
    data: i,
    success: n
   }, se.isPlainObject(e) && e))
  }
 }), se._evalUrl = function(e) {
  return se.ajax({
   url: e,
   type: "GET",
   dataType: "script",
   async: !1,
   global: !1,
   throws: !0
  })
 }, se.fn.extend({
  wrapAll: function(e) {
   var t;
   return se.isFunction(e) ? this.each(function(t) {
    se(this).wrapAll(e.call(this, t))
   }) : (this[0] && (t = se(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
    return e
   }).append(this)), this)
  },
  wrapInner: function(e) {
   return se.isFunction(e) ? this.each(function(t) {
    se(this).wrapInner(e.call(this, t))
   }) : this.each(function() {
    var t = se(this),
     i = t.contents();
    i.length ? i.wrapAll(e) : t.append(e)
   })
  },
  wrap: function(e) {
   var t = se.isFunction(e);
   return this.each(function(i) {
    se(this).wrapAll(t ? e.call(this, i) : e)
   })
  },
  unwrap: function() {
   return this.parent().each(function() {
    se.nodeName(this, "body") || se(this).replaceWith(this.childNodes)
   }).end()
  }
 }), se.expr.filters.hidden = function(e) {
  return !se.expr.filters.visible(e)
 }, se.expr.filters.visible = function(e) {
  return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
 };
 var Pt = /%20/g,
  Lt = /\[\]$/,
  Ot = /\r?\n/g,
  Ht = /^(?:submit|button|image|reset|file)$/i,
  Dt = /^(?:input|select|textarea|keygen)/i;
 se.param = function(e, t) {
  var i, n = [],
   o = function(e, t) {
    t = se.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
   };
  if (void 0 === t && (t = se.ajaxSettings && se.ajaxSettings.traditional), se.isArray(e) || e.jquery && !se.isPlainObject(e)) se.each(e, function() {
   o(this.name, this.value)
  });
  else
   for (i in e) F(i, e[i], t, o);
  return n.join("&").replace(Pt, "+")
 }, se.fn.extend({
  serialize: function() {
   return se.param(this.serializeArray())
  },
  serializeArray: function() {
   return this.map(function() {
    var e = se.prop(this, "elements");
    return e ? se.makeArray(e) : this
   }).filter(function() {
    var e = this.type;
    return this.name && !se(this).is(":disabled") && Dt.test(this.nodeName) && !Ht.test(e) && (this.checked || !De.test(e))
   }).map(function(e, t) {
    var i = se(this).val();
    return null == i ? null : se.isArray(i) ? se.map(i, function(e) {
     return {
      name: t.name,
      value: e.replace(Ot, "\r\n")
     }
    }) : {
     name: t.name,
     value: i.replace(Ot, "\r\n")
    }
   }).get()
  }
 }), se.ajaxSettings.xhr = function() {
  try {
   return new e.XMLHttpRequest
  } catch (e) {}
 };
 var Mt = {
   0: 200,
   1223: 204
  },
  Nt = se.ajaxSettings.xhr();
 ne.cors = !!Nt && "withCredentials" in Nt, ne.ajax = Nt = !!Nt, se.ajaxTransport(function(t) {
  var i, n;
  if (ne.cors || Nt && !t.crossDomain) return {
   send: function(o, s) {
    var r, a = t.xhr();
    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
     for (r in t.xhrFields) a[r] = t.xhrFields[r];
    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
    for (r in o) a.setRequestHeader(r, o[r]);
    i = function(e) {
     return function() {
      i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Mt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
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
  }
 }), se.ajaxSetup({
  accepts: {
   script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
  },
  contents: {
   script: /\b(?:java|ecma)script\b/
  },
  converters: {
   "text script": function(e) {
    return se.globalEval(e), e
   }
  }
 }), se.ajaxPrefilter("script", function(e) {
  void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
 }), se.ajaxTransport("script", function(e) {
  if (e.crossDomain) {
   var t, i;
   return {
    send: function(n, o) {
     t = se("<script>").prop({
      charset: e.scriptCharset,
      src: e.url
     }).on("load error", i = function(e) {
      t.remove(), i = null, e && o("error" === e.type ? 404 : 200, e.type)
     }), Q.head.appendChild(t[0])
    },
    abort: function() {
     i && i()
    }
   }
  }
 });
 var jt = [],
  It = /(=)\?(?=&|$)|\?\?/;
 se.ajaxSetup({
  jsonp: "callback",
  jsonpCallback: function() {
   var e = jt.pop() || se.expando + "_" + gt++;
   return this[e] = !0, e
  }
 }), se.ajaxPrefilter("json jsonp", function(t, i, n) {
  var o, s, r, a = t.jsonp !== !1 && (It.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && It.test(t.data) && "data");
  if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = se.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(It, "$1" + o) : t.jsonp !== !1 && (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
   return r || se.error(o + " was not called"), r[0]
  }, t.dataTypes[0] = "json", s = e[o], e[o] = function() {
   r = arguments
  }, n.always(function() {
   void 0 === s ? se(e).removeProp(o) : e[o] = s, t[o] && (t.jsonpCallback = i.jsonpCallback, jt.push(o)), r && se.isFunction(s) && s(r[0]), r = s = void 0
  }), "script"
 }), se.parseHTML = function(e, t, i) {
  if (!e || "string" != typeof e) return null;
  "boolean" == typeof t && (i = t, t = !1), t = t || Q;
  var n = fe.exec(e),
   o = !i && [];
  return n ? [t.createElement(n[1])] : (n = h([e], t, o), o && o.length && se(o).remove(), se.merge([], n.childNodes))
 };
 var zt = se.fn.load;
 se.fn.load = function(e, t, i) {
  if ("string" != typeof e && zt) return zt.apply(this, arguments);
  var n, o, s, r = this,
   a = e.indexOf(" ");
  return a > -1 && (n = se.trim(e.slice(a)), e = e.slice(0, a)), se.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (o = "POST"), r.length > 0 && se.ajax({
   url: e,
   type: o || "GET",
   dataType: "html",
   data: t
  }).done(function(e) {
   s = arguments, r.html(n ? se("<div>").append(se.parseHTML(e)).find(n) : e)
  }).always(i && function(e, t) {
   r.each(function() {
    i.apply(this, s || [e.responseText, t, e])
   })
  }), this
 }, se.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
  se.fn[t] = function(e) {
   return this.on(t, e)
  }
 }), se.expr.filters.animated = function(e) {
  return se.grep(se.timers, function(t) {
   return e === t.elem
  }).length
 }, se.offset = {
  setOffset: function(e, t, i) {
   var n, o, s, r, a, l, c, d = se.css(e, "position"),
    u = se(e),
    h = {};
   "static" === d && (e.style.position = "relative"), a = u.offset(), s = se.css(e, "top"), l = se.css(e, "left"), c = ("absolute" === d || "fixed" === d) && (s + l).indexOf("auto") > -1, c ? (n = u.position(), r = n.top, o = n.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), se.isFunction(t) && (t = t.call(e, i, se.extend({}, a))), null != t.top && (h.top = t.top - a.top + r), null != t.left && (h.left = t.left - a.left + o), "using" in t ? t.using.call(e, h) : u.css(h)
  }
 }, se.fn.extend({
  offset: function(e) {
   if (arguments.length) return void 0 === e ? this : this.each(function(t) {
    se.offset.setOffset(this, e, t)
   });
   var t, i, n = this[0],
    o = {
     top: 0,
     left: 0
    },
    s = n && n.ownerDocument;
   if (s) return t = s.documentElement, se.contains(t, n) ? (o = n.getBoundingClientRect(), i = U(s), {
    top: o.top + i.pageYOffset - t.clientTop,
    left: o.left + i.pageXOffset - t.clientLeft
   }) : o
  },
  position: function() {
   if (this[0]) {
    var e, t, i = this[0],
     n = {
      top: 0,
      left: 0
     };
    return "fixed" === se.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), se.nodeName(e[0], "html") || (n = e.offset()), n.top += se.css(e[0], "borderTopWidth", !0), n.left += se.css(e[0], "borderLeftWidth", !0)), {
     top: t.top - n.top - se.css(i, "marginTop", !0),
     left: t.left - n.left - se.css(i, "marginLeft", !0)
    }
   }
  },
  offsetParent: function() {
   return this.map(function() {
    for (var e = this.offsetParent; e && "static" === se.css(e, "position");) e = e.offsetParent;
    return e || Je
   })
  }
 }), se.each({
  scrollLeft: "pageXOffset",
  scrollTop: "pageYOffset"
 }, function(e, t) {
  var i = "pageYOffset" === t;
  se.fn[e] = function(n) {
   return Se(this, function(e, n, o) {
    var s = U(e);
    return void 0 === o ? s ? s[t] : e[n] : void(s ? s.scrollTo(i ? s.pageXOffset : o, i ? o : s.pageYOffset) : e[n] = o)
   }, e, n, arguments.length)
  }
 }), se.each(["top", "left"], function(e, t) {
  se.cssHooks[t] = $(ne.pixelPosition, function(e, i) {
   if (i) return i = E(e, t), Qe.test(i) ? se(e).position()[t] + "px" : i
  })
 }), se.each({
  Height: "height",
  Width: "width"
 }, function(e, t) {
  se.each({
   padding: "inner" + e,
   content: t,
   "": "outer" + e
  }, function(i, n) {
   se.fn[n] = function(n, o) {
    var s = arguments.length && (i || "boolean" != typeof n),
     r = i || (n === !0 || o === !0 ? "margin" : "border");
    return Se(this, function(t, i, n) {
     var o;
     return se.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === n ? se.css(t, i, r) : se.style(t, i, n, r)
    }, t, s ? n : void 0, s, null)
   }
  })
 }), se.fn.extend({
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
 }), se.fn.andSelf = se.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
  return se
 });
 var qt = e.jQuery,
  _t = e.$;
 return se.noConflict = function(t) {
  return e.$ === se && (e.$ = _t), t && e.jQuery === se && (e.jQuery = qt), se
 }, t || (e.jQuery = e.$ = se), se
}),
function() {
 for (var e, t = function() {}, i = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], n = i.length, o = window.console = window.console || {}; n--;) e = i[n], o[e] || (o[e] = t)
}(),
function(e, t, i) {
 function n(i, n) {
  this.wrapper = "string" == typeof i ? t.querySelector(i) : i, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
   resizeScrollbars: !0,
   mouseWheelSpeed: 20,
   snapThreshold: .334,
   disablePointer: !a.hasPointer,
   disableTouch: a.hasPointer || !a.hasTouch,
   disableMouse: a.hasPointer || a.hasTouch,
   startX: 0,
   startY: 0,
   scrollY: !0,
   directionLockThreshold: 5,
   momentum: !0,
   bounce: !0,
   bounceTime: 600,
   bounceEasing: "",
   preventDefault: !0,
   preventDefaultException: {
    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
   },
   HWCompositing: !0,
   useTransition: !0,
   useTransform: !0,
   bindToWrapper: "undefined" == typeof e.onmousedown
  };
  for (var o in n) this.options[o] = n[o];
  this.translateZ = this.options.HWCompositing && a.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = a.hasTransition && this.options.useTransition, this.options.useTransform = a.hasTransform && this.options.useTransform, this.options.eventPassthrough = !0 === this.options.eventPassthrough ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY, this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? a.ease[this.options.bounceEasing] || a.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, !0 === this.options.tap && (this.options.tap = "tap"), this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.directionY = this.directionX = this.y = this.x = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
 }

 function o(e, i, n) {
  var o = t.createElement("div"),
   s = t.createElement("div");
  return !0 === n && (o.style.cssText = "position:absolute;z-index:9999", s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), s.className = "iScrollIndicator", "h" == e ? (!0 === n && (o.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", s.style.height = "100%"), o.className = "iScrollHorizontalScrollbar") : (!0 === n && (o.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", s.style.width = "100%"), o.className = "iScrollVerticalScrollbar"), o.style.cssText += ";overflow:hidden", i || (o.style.pointerEvents = "none"), o.appendChild(s), o
 }

 function s(i, n) {
  this.wrapper = "string" == typeof n.el ? t.querySelector(n.el) : n.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = i, this.options = {
   listenX: !0,
   listenY: !0,
   interactive: !1,
   resize: !0,
   defaultScrollbars: !1,
   shrink: !1,
   fade: !1,
   speedRatioX: 0,
   speedRatioY: 0
  };
  for (var o in n) this.options[o] = n[o];
  if (this.sizeRatioY = this.sizeRatioX = 1, this.maxPosY = this.maxPosX = 0, this.options.interactive && (this.options.disableTouch || (a.addEvent(this.indicator, "touchstart", this), a.addEvent(e, "touchend", this)), this.options.disablePointer || (a.addEvent(this.indicator, a.prefixPointerEvent("pointerdown"), this), a.addEvent(e, a.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (a.addEvent(this.indicator, "mousedown", this), a.addEvent(e, "mouseup", this))), this.options.fade) {
   this.wrapperStyle[a.style.transform] = this.scroller.translateZ;
   var s = a.style.transitionDuration;
   if (s) {
    this.wrapperStyle[s] = a.isBadAndroid ? "0.0001ms" : "0ms";
    var l = this;
    a.isBadAndroid && r(function() {
     "0.0001ms" === l.wrapperStyle[s] && (l.wrapperStyle[s] = "0s")
    }), this.wrapperStyle.opacity = "0"
   }
  }
 }
 var r = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
   e.setTimeout(t, 1e3 / 60)
  },
  a = function() {
   function n(e) {
    return !1 !== r && ("" === r ? e : r + e.charAt(0).toUpperCase() + e.substr(1))
   }
   var o = {},
    s = t.createElement("div").style,
    r = function() {
     for (var e, t = ["t", "webkitT", "MozT", "msT", "OT"], i = 0, n = t.length; i < n; i++)
      if (e = t[i] + "ransform", e in s) return t[i].substr(0, t[i].length - 1);
     return !1
    }();
   o.getTime = Date.now || function() {
    return (new Date).getTime()
   }, o.extend = function(e, t) {
    for (var i in t) e[i] = t[i]
   }, o.addEvent = function(e, t, i, n) {
    e.addEventListener(t, i, !!n)
   }, o.removeEvent = function(e, t, i, n) {
    e.removeEventListener(t, i, !!n)
   }, o.prefixPointerEvent = function(t) {
    return e.MSPointerEvent ? "MSPointer" + t.charAt(7).toUpperCase() + t.substr(8) : t
   }, o.momentum = function(e, t, n, o, s, r) {
    t = e - t, n = i.abs(t) / n;
    var a;
    return r = void 0 === r ? 6e-4 : r, a = e + n * n / (2 * r) * (0 > t ? -1 : 1), r = n / r, a < o ? (a = s ? o - s / 2.5 * (n / 8) : o, t = i.abs(a - e), r = t / n) : 0 < a && (a = s ? s / 2.5 * (n / 8) : 0, t = i.abs(e) + a, r = t / n), {
     destination: i.round(a),
     duration: r
    }
   };
   var a = n("transform");
   return o.extend(o, {
    hasTransform: !1 !== a,
    hasPerspective: n("perspective") in s,
    hasTouch: "ontouchstart" in e,
    hasPointer: !(!e.PointerEvent && !e.MSPointerEvent),
    hasTransition: n("transition") in s
   }), o.isBadAndroid = function() {
    var t = e.navigator.appVersion;
    return !(!/Android/.test(t) || /Chrome\/\d/.test(t)) && (!((t = t.match(/Safari\/(\d+.\d)/)) && "object" == typeof t && 2 <= t.length) || 535.19 > parseFloat(t[1]))
   }(), o.extend(o.style = {}, {
    transform: a,
    transitionTimingFunction: n("transitionTimingFunction"),
    transitionDuration: n("transitionDuration"),
    transitionDelay: n("transitionDelay"),
    transformOrigin: n("transformOrigin")
   }), o.hasClass = function(e, t) {
    return new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
   }, o.addClass = function(e, t) {
    if (!o.hasClass(e, t)) {
     var i = e.className.split(" ");
     i.push(t), e.className = i.join(" ")
    }
   }, o.removeClass = function(e, t) {
    o.hasClass(e, t) && (e.className = e.className.replace(new RegExp("(^|\\s)" + t + "(\\s|$)", "g"), " "))
   }, o.offset = function(e) {
    for (var t = -e.offsetLeft, i = -e.offsetTop; e = e.offsetParent;) t -= e.offsetLeft, i -= e.offsetTop;
    return {
     left: t,
     top: i
    }
   }, o.preventDefaultException = function(e, t) {
    for (var i in t)
     if (t[i].test(e[i])) return !0;
    return !1
   }, o.extend(o.eventType = {}, {
    touchstart: 1,
    touchmove: 1,
    touchend: 1,
    mousedown: 2,
    mousemove: 2,
    mouseup: 2,
    pointerdown: 3,
    pointermove: 3,
    pointerup: 3,
    MSPointerDown: 3,
    MSPointerMove: 3,
    MSPointerUp: 3
   }), o.extend(o.ease = {}, {
    quadratic: {
     style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
     fn: function(e) {
      return e * (2 - e)
     }
    },
    circular: {
     style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
     fn: function(e) {
      return i.sqrt(1 - --e * e)
     }
    },
    back: {
     style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
     fn: function(e) {
      return --e * e * (5 * e + 4) + 1
     }
    },
    bounce: {
     style: "",
     fn: function(e) {
      return (e /= 1) < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
     }
    },
    elastic: {
     style: "",
     fn: function(e) {
      return 0 === e ? 0 : 1 == e ? 1 : .4 * i.pow(2, -10 * e) * i.sin(2 * (e - .055) * i.PI / .22) + 1
     }
    }
   }), o.tap = function(e, i) {
    var n = t.createEvent("Event");
    n.initEvent(i, !0, !0), n.pageX = e.pageX, n.pageY = e.pageY, e.target.dispatchEvent(n)
   }, o.click = function(i) {
    var n, o = i.target;
    /(SELECT|INPUT|TEXTAREA)/i.test(o.tagName) || (n = t.createEvent(e.MouseEvent ? "MouseEvents" : "Event"), n.initEvent("click", !0, !0), n.view = i.view || e, n.detail = 1, n.screenX = o.screenX || 0, n.screenY = o.screenY || 0, n.clientX = o.clientX || 0, n.clientY = o.clientY || 0, n.ctrlKey = !!i.ctrlKey, n.altKey = !!i.altKey, n.shiftKey = !!i.shiftKey, n.metaKey = !!i.metaKey, n.button = 0, n.relatedTarget = null, n._constructed = !0, o.dispatchEvent(n))
   }, o
  }();
 n.prototype = {
  version: "5.2.0",
  _init: function() {
   this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys()
  },
  destroy: function() {
   this._initEvents(!0), clearTimeout(this.resizeTimeout), this.resizeTimeout = null, this._execEvent("destroy")
  },
  _transitionEnd: function(e) {
   e.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
  },
  _start: function(e) {
   if (!(1 != a.eventType[e.type] && 0 !== (e.which ? e.button : 2 > e.button ? 0 : 4 == e.button ? 1 : 2) || !this.enabled || this.initiated && a.eventType[e.type] !== this.initiated)) {
    !this.options.preventDefault || a.isBadAndroid || a.preventDefaultException(e.target, this.options.preventDefaultException) || e.preventDefault();
    var t = e.touches ? e.touches[0] : e;
    this.initiated = a.eventType[e.type], this.moved = !1, this.directionLocked = this.directionY = this.directionX = this.distY = this.distX = 0, this.startTime = a.getTime(), this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, e = this.getComputedPosition(), this._translate(i.round(e.x), i.round(e.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = t.pageX, this.pointY = t.pageY, this._execEvent("beforeScrollStart")
   }
  },
  _move: function(e) {
   if (this.enabled && a.eventType[e.type] === this.initiated) {
    this.options.preventDefault && e.preventDefault();
    var t, n = e.touches ? e.touches[0] : e,
     o = n.pageX - this.pointX,
     s = n.pageY - this.pointY,
     r = a.getTime();
    if (this.pointX = n.pageX, this.pointY = n.pageY, this.distX += o, this.distY += s, n = i.abs(this.distX), t = i.abs(this.distY), !(300 < r - this.endTime && 10 > n && 10 > t)) {
     if (this.directionLocked || this.options.freeScroll || (this.directionLocked = n > t + this.options.directionLockThreshold ? "h" : t >= n + this.options.directionLockThreshold ? "v" : "n"),
      "h" == this.directionLocked) {
      if ("vertical" == this.options.eventPassthrough) e.preventDefault();
      else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
      s = 0
     } else if ("v" == this.directionLocked) {
      if ("horizontal" == this.options.eventPassthrough) e.preventDefault();
      else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
      o = 0
     }
     o = this.hasHorizontalScroll ? o : 0, s = this.hasVerticalScroll ? s : 0, e = this.x + o, n = this.y + s, (0 < e || e < this.maxScrollX) && (e = this.options.bounce ? this.x + o / 3 : 0 < e ? 0 : this.maxScrollX), (0 < n || n < this.maxScrollY) && (n = this.options.bounce ? this.y + s / 3 : 0 < n ? 0 : this.maxScrollY), this.directionX = 0 < o ? -1 : 0 > o ? 1 : 0, this.directionY = 0 < s ? -1 : 0 > s ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(e, n), 300 < r - this.startTime && (this.startTime = r, this.startX = this.x, this.startY = this.y)
    }
   }
  },
  _end: function(e) {
   if (this.enabled && a.eventType[e.type] === this.initiated) {
    this.options.preventDefault && !a.preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault();
    var t, n;
    n = a.getTime() - this.startTime;
    var o = i.round(this.x),
     s = i.round(this.y),
     r = i.abs(o - this.startX),
     l = i.abs(s - this.startY);
    t = 0;
    var c = "";
    this.initiated = this.isInTransition = 0, this.endTime = a.getTime(), this.resetPosition(this.options.bounceTime) || (this.scrollTo(o, s), this.moved ? this._events.flick && 200 > n && 100 > r && 100 > l ? this._execEvent("flick") : (this.options.momentum && 300 > n && (t = this.hasHorizontalScroll ? a.momentum(this.x, this.startX, n, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
     destination: o,
     duration: 0
    }, n = this.hasVerticalScroll ? a.momentum(this.y, this.startY, n, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
     destination: s,
     duration: 0
    }, o = t.destination, s = n.destination, t = i.max(t.duration, n.duration), this.isInTransition = 1), this.options.snap && (this.currentPage = c = this._nearestSnap(o, s), t = this.options.snapSpeed || i.max(i.max(i.min(i.abs(o - c.x), 1e3), i.min(i.abs(s - c.y), 1e3)), 300), o = c.x, s = c.y, this.directionY = this.directionX = 0, c = this.options.bounceEasing), o != this.x || s != this.y ? ((0 < o || o < this.maxScrollX || 0 < s || s < this.maxScrollY) && (c = a.ease.quadratic), this.scrollTo(o, s, t, c)) : this._execEvent("scrollEnd")) : (this.options.tap && a.tap(e, this.options.tap), this.options.click && a.click(e), this._execEvent("scrollCancel")))
   }
  },
  _resize: function() {
   var e = this;
   clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
    e.refresh()
   }, this.options.resizePolling)
  },
  resetPosition: function(e) {
   var t = this.x,
    i = this.y;
   return !this.hasHorizontalScroll || 0 < this.x ? t = 0 : this.x < this.maxScrollX && (t = this.maxScrollX), !this.hasVerticalScroll || 0 < this.y ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY), (t != this.x || i != this.y) && (this.scrollTo(t, i, e || 0, this.options.bounceEasing), !0)
  },
  disable: function() {
   this.enabled = !1
  },
  enable: function() {
   this.enabled = !0
  },
  refresh: function() {
   this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && 0 > this.maxScrollX, this.hasVerticalScroll = this.options.scrollY && 0 > this.maxScrollY, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.directionY = this.directionX = this.endTime = 0, this.wrapperOffset = a.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
  },
  on: function(e, t) {
   this._events[e] || (this._events[e] = []), this._events[e].push(t)
  },
  off: function(e, t) {
   if (this._events[e]) {
    var i = this._events[e].indexOf(t); - 1 < i && this._events[e].splice(i, 1)
   }
  },
  _execEvent: function(e) {
   if (this._events[e]) {
    var t = 0,
     i = this._events[e].length;
    if (i)
     for (; t < i; t++) this._events[e][t].apply(this, [].slice.call(arguments, 1))
   }
  },
  scrollBy: function(e, t, i, n) {
   e = this.x + e, t = this.y + t, this.scrollTo(e, t, i || 0, n)
  },
  scrollTo: function(e, t, i, n) {
   n = n || a.ease.circular, this.isInTransition = this.options.useTransition && 0 < i;
   var o = this.options.useTransition && n.style;
   !i || o ? (o && (this._transitionTimingFunction(n.style), this._transitionTime(i)), this._translate(e, t)) : this._animate(e, t, i, n.fn)
  },
  scrollToElement: function(e, t, n, o, s) {
   if (e = e.nodeType ? e : this.scroller.querySelector(e)) {
    var r = a.offset(e);
    r.left -= this.wrapperOffset.left, r.top -= this.wrapperOffset.top, !0 === n && (n = i.round(e.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), !0 === o && (o = i.round(e.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), r.left -= n || 0, r.top -= o || 0, r.left = 0 < r.left ? 0 : r.left < this.maxScrollX ? this.maxScrollX : r.left, r.top = 0 < r.top ? 0 : r.top < this.maxScrollY ? this.maxScrollY : r.top, t = void 0 === t || null === t || "auto" === t ? i.max(i.abs(this.x - r.left), i.abs(this.y - r.top)) : t, this.scrollTo(r.left, r.top, t, s)
   }
  },
  _transitionTime: function(e) {
   if (this.options.useTransition) {
    e = e || 0;
    var t = a.style.transitionDuration;
    if (t) {
     if (this.scrollerStyle[t] = e + "ms", !e && a.isBadAndroid) {
      this.scrollerStyle[t] = "0.0001ms";
      var i = this;
      r(function() {
       "0.0001ms" === i.scrollerStyle[t] && (i.scrollerStyle[t] = "0s")
      })
     }
     if (this.indicators)
      for (var n = this.indicators.length; n--;) this.indicators[n].transitionTime(e)
    }
   }
  },
  _transitionTimingFunction: function(e) {
   if (this.scrollerStyle[a.style.transitionTimingFunction] = e, this.indicators)
    for (var t = this.indicators.length; t--;) this.indicators[t].transitionTimingFunction(e)
  },
  _translate: function(e, t) {
   if (this.options.useTransform ? this.scrollerStyle[a.style.transform] = "translate(" + e + "px," + t + "px)" + this.translateZ : (e = i.round(e), t = i.round(t), this.scrollerStyle.left = e + "px", this.scrollerStyle.top = t + "px"), this.x = e, this.y = t, this.indicators)
    for (var n = this.indicators.length; n--;) this.indicators[n].updatePosition()
  },
  _initEvents: function(t) {
   t = t ? a.removeEvent : a.addEvent;
   var i = this.options.bindToWrapper ? this.wrapper : e;
   t(e, "orientationchange", this), t(e, "resize", this), this.options.click && t(this.wrapper, "click", this, !0), this.options.disableMouse || (t(this.wrapper, "mousedown", this), t(i, "mousemove", this), t(i, "mousecancel", this), t(i, "mouseup", this)), a.hasPointer && !this.options.disablePointer && (t(this.wrapper, a.prefixPointerEvent("pointerdown"), this), t(i, a.prefixPointerEvent("pointermove"), this), t(i, a.prefixPointerEvent("pointercancel"), this), t(i, a.prefixPointerEvent("pointerup"), this)), a.hasTouch && !this.options.disableTouch && (t(this.wrapper, "touchstart", this), t(i, "touchmove", this), t(i, "touchcancel", this), t(i, "touchend", this)), t(this.scroller, "transitionend", this), t(this.scroller, "webkitTransitionEnd", this), t(this.scroller, "oTransitionEnd", this), t(this.scroller, "MSTransitionEnd", this)
  },
  getComputedPosition: function() {
   var t, i = e.getComputedStyle(this.scroller, null);
   return this.options.useTransform ? (i = i[a.style.transform].split(")")[0].split(", "), t = +(i[12] || i[4]), i = +(i[13] || i[5])) : (t = +i.left.replace(/[^-\d.]/g, ""), i = +i.top.replace(/[^-\d.]/g, "")), {
    x: t,
    y: i
   }
  },
  _initIndicators: function() {
   function e(e) {
    if (a.indicators)
     for (var t = a.indicators.length; t--;) e.call(a.indicators[t])
   }
   var t, i = this.options.interactiveScrollbars,
    n = "string" != typeof this.options.scrollbars,
    r = [],
    a = this;
   for (this.indicators = [], this.options.scrollbars && (this.options.scrollY && (t = {
     el: o("v", i, this.options.scrollbars),
     interactive: i,
     defaultScrollbars: !0,
     customStyle: n,
     resize: this.options.resizeScrollbars,
     shrink: this.options.shrinkScrollbars,
     fade: this.options.fadeScrollbars,
     listenX: !1
    }, this.wrapper.appendChild(t.el), r.push(t)), this.options.scrollX && (t = {
     el: o("h", i, this.options.scrollbars),
     interactive: i,
     defaultScrollbars: !0,
     customStyle: n,
     resize: this.options.resizeScrollbars,
     shrink: this.options.shrinkScrollbars,
     fade: this.options.fadeScrollbars,
     listenY: !1
    }, this.wrapper.appendChild(t.el), r.push(t))), this.options.indicators && (r = r.concat(this.options.indicators)), i = r.length; i--;) this.indicators.push(new s(this, r[i]));
   this.options.fadeScrollbars && (this.on("scrollEnd", function() {
    e(function() {
     this.fade()
    })
   }), this.on("scrollCancel", function() {
    e(function() {
     this.fade()
    })
   }), this.on("scrollStart", function() {
    e(function() {
     this.fade(1)
    })
   }), this.on("beforeScrollStart", function() {
    e(function() {
     this.fade(1, !0)
    })
   })), this.on("refresh", function() {
    e(function() {
     this.refresh()
    })
   }), this.on("destroy", function() {
    e(function() {
     this.destroy()
    }), delete this.indicators
   })
  },
  _initWheel: function() {
   a.addEvent(this.wrapper, "wheel", this), a.addEvent(this.wrapper, "mousewheel", this), a.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function() {
    clearTimeout(this.wheelTimeout), this.wheelTimeout = null, a.removeEvent(this.wrapper, "wheel", this), a.removeEvent(this.wrapper, "mousewheel", this), a.removeEvent(this.wrapper, "DOMMouseScroll", this)
   })
  },
  _wheel: function(e) {
   if (this.enabled) {
    var t, n, o, s = this;
    if (void 0 === this.wheelTimeout && s._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() {
      s.options.snap || s._execEvent("scrollEnd"), s.wheelTimeout = void 0
     }, 400), "deltaX" in e) 1 === e.deltaMode ? (t = -e.deltaX * this.options.mouseWheelSpeed, e = -e.deltaY * this.options.mouseWheelSpeed) : (t = -e.deltaX, e = -e.deltaY);
    else if ("wheelDeltaX" in e) t = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed, e = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
    else if ("wheelDelta" in e) t = e = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
    else {
     if (!("detail" in e)) return;
     t = e = -e.detail / 3 * this.options.mouseWheelSpeed
    }
    t *= this.options.invertWheelDirection, e *= this.options.invertWheelDirection, this.hasVerticalScroll || (t = e, e = 0), this.options.snap ? (n = this.currentPage.pageX, o = this.currentPage.pageY, 0 < t ? n-- : 0 > t && n++, 0 < e ? o-- : 0 > e && o++, this.goToPage(n, o)) : (n = this.x + i.round(this.hasHorizontalScroll ? t : 0), o = this.y + i.round(this.hasVerticalScroll ? e : 0), this.directionX = 0 < t ? -1 : 0 > t ? 1 : 0, this.directionY = 0 < e ? -1 : 0 > e ? 1 : 0, 0 < n ? n = 0 : n < this.maxScrollX && (n = this.maxScrollX), 0 < o ? o = 0 : o < this.maxScrollY && (o = this.maxScrollY), this.scrollTo(n, o, 0))
   }
  },
  _initSnap: function() {
   this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function() {
    var e, t, n, o, s, r = 0,
     a = 0,
     l = 0;
    t = this.options.snapStepX || this.wrapperWidth;
    var c = this.options.snapStepY || this.wrapperHeight;
    if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
     if (!0 === this.options.snap)
      for (n = i.round(t / 2), o = i.round(c / 2); l > -this.scrollerWidth;) {
       for (this.pages[r] = [], s = e = 0; s > -this.scrollerHeight;) this.pages[r][e] = {
        x: i.max(l, this.maxScrollX),
        y: i.max(s, this.maxScrollY),
        width: t,
        height: c,
        cx: l - n,
        cy: s - o
       }, s -= c, e++;
       l -= t, r++
      } else
       for (c = this.options.snap, e = c.length, t = -1; r < e; r++)(0 === r || c[r].offsetLeft <= c[r - 1].offsetLeft) && (a = 0, t++), this.pages[a] || (this.pages[a] = []), l = i.max(-c[r].offsetLeft, this.maxScrollX), s = i.max(-c[r].offsetTop, this.maxScrollY), n = l - i.round(c[r].offsetWidth / 2), o = s - i.round(c[r].offsetHeight / 2), this.pages[a][t] = {
        x: l,
        y: s,
        width: c[r].offsetWidth,
        height: c[r].offsetHeight,
        cx: n,
        cy: o
       }, l > this.maxScrollX && a++;
     this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), 0 === this.options.snapThreshold % 1 ? this.snapThresholdY = this.snapThresholdX = this.options.snapThreshold : (this.snapThresholdX = i.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = i.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
    }
   }), this.on("flick", function() {
    var e = this.options.snapSpeed || i.max(i.max(i.min(i.abs(this.x - this.startX), 1e3), i.min(i.abs(this.y - this.startY), 1e3)), 300);
    this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, e)
   })
  },
  _nearestSnap: function(e, t) {
   if (!this.pages.length) return {
    x: 0,
    y: 0,
    pageX: 0,
    pageY: 0
   };
   var n = 0,
    o = this.pages.length,
    s = 0;
   if (i.abs(e - this.absStartX) < this.snapThresholdX && i.abs(t - this.absStartY) < this.snapThresholdY) return this.currentPage;
   for (0 < e ? e = 0 : e < this.maxScrollX && (e = this.maxScrollX), 0 < t ? t = 0 : t < this.maxScrollY && (t = this.maxScrollY); n < o; n++)
    if (e >= this.pages[n][0].cx) {
     e = this.pages[n][0].x;
     break
    }
   for (o = this.pages[n].length; s < o; s++)
    if (t >= this.pages[0][s].cy) {
     t = this.pages[0][s].y;
     break
    }
   return n == this.currentPage.pageX && (n += this.directionX, 0 > n ? n = 0 : n >= this.pages.length && (n = this.pages.length - 1), e = this.pages[n][0].x), s == this.currentPage.pageY && (s += this.directionY, 0 > s ? s = 0 : s >= this.pages[0].length && (s = this.pages[0].length - 1), t = this.pages[0][s].y), {
    x: e,
    y: t,
    pageX: n,
    pageY: s
   }
  },
  goToPage: function(e, t, n, o) {
   o = o || this.options.bounceEasing, e >= this.pages.length ? e = this.pages.length - 1 : 0 > e && (e = 0), t >= this.pages[e].length ? t = this.pages[e].length - 1 : 0 > t && (t = 0);
   var s = this.pages[e][t].x,
    r = this.pages[e][t].y;
   n = void 0 === n ? this.options.snapSpeed || i.max(i.max(i.min(i.abs(s - this.x), 1e3), i.min(i.abs(r - this.y), 1e3)), 300) : n, this.currentPage = {
    x: s,
    y: r,
    pageX: e,
    pageY: t
   }, this.scrollTo(s, r, n, o)
  },
  next: function(e, t) {
   var i = this.currentPage.pageX,
    n = this.currentPage.pageY;
   i++, i >= this.pages.length && this.hasVerticalScroll && (i = 0, n++), this.goToPage(i, n, e, t)
  },
  prev: function(e, t) {
   var i = this.currentPage.pageX,
    n = this.currentPage.pageY;
   i--, 0 > i && this.hasVerticalScroll && (i = 0, n--), this.goToPage(i, n, e, t)
  },
  _initKeys: function(t) {
   t = {
    pageUp: 33,
    pageDown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40
   };
   var i;
   if ("object" == typeof this.options.keyBindings)
    for (i in this.options.keyBindings) "string" == typeof this.options.keyBindings[i] && (this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0));
   else this.options.keyBindings = {};
   for (i in t) this.options.keyBindings[i] = this.options.keyBindings[i] || t[i];
   a.addEvent(e, "keydown", this), this.on("destroy", function() {
    a.removeEvent(e, "keydown", this)
   })
  },
  _key: function(e) {
   if (this.enabled) {
    var t, n = this.options.snap,
     o = n ? this.currentPage.pageX : this.x,
     s = n ? this.currentPage.pageY : this.y,
     r = a.getTime(),
     l = this.keyTime || 0;
    switch (this.options.useTransition && this.isInTransition && (t = this.getComputedPosition(), this._translate(i.round(t.x), i.round(t.y)), this.isInTransition = !1), this.keyAcceleration = 200 > r - l ? i.min(this.keyAcceleration + .25, 50) : 0, e.keyCode) {
     case this.options.keyBindings.pageUp:
      this.hasHorizontalScroll && !this.hasVerticalScroll ? o += n ? 1 : this.wrapperWidth : s += n ? 1 : this.wrapperHeight;
      break;
     case this.options.keyBindings.pageDown:
      this.hasHorizontalScroll && !this.hasVerticalScroll ? o -= n ? 1 : this.wrapperWidth : s -= n ? 1 : this.wrapperHeight;
      break;
     case this.options.keyBindings.end:
      o = n ? this.pages.length - 1 : this.maxScrollX, s = n ? this.pages[0].length - 1 : this.maxScrollY;
      break;
     case this.options.keyBindings.home:
      s = o = 0;
      break;
     case this.options.keyBindings.left:
      o += n ? -1 : 5 + this.keyAcceleration >> 0;
      break;
     case this.options.keyBindings.up:
      s += n ? 1 : 5 + this.keyAcceleration >> 0;
      break;
     case this.options.keyBindings.right:
      o -= n ? -1 : 5 + this.keyAcceleration >> 0;
      break;
     case this.options.keyBindings.down:
      s -= n ? 1 : 5 + this.keyAcceleration >> 0;
      break;
     default:
      return
    }
    n ? this.goToPage(o, s) : (0 < o ? this.keyAcceleration = o = 0 : o < this.maxScrollX && (o = this.maxScrollX, this.keyAcceleration = 0), 0 < s ? this.keyAcceleration = s = 0 : s < this.maxScrollY && (s = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(o, s, 0), this.keyTime = r)
   }
  },
  _animate: function(e, t, i, n) {
   function o() {
    var h, p = a.getTime();
    p >= u ? (s.isAnimating = !1, s._translate(e, t), s.resetPosition(s.options.bounceTime) || s._execEvent("scrollEnd")) : (p = (p - d) / i, h = n(p), p = (e - l) * h + l, h = (t - c) * h + c, s._translate(p, h), s.isAnimating && r(o))
   }
   var s = this,
    l = this.x,
    c = this.y,
    d = a.getTime(),
    u = d + i;
   this.isAnimating = !0, o()
  },
  handleEvent: function(e) {
   switch (e.type) {
    case "touchstart":
    case "pointerdown":
    case "MSPointerDown":
    case "mousedown":
     this._start(e);
     break;
    case "touchmove":
    case "pointermove":
    case "MSPointerMove":
    case "mousemove":
     this._move(e);
     break;
    case "touchend":
    case "pointerup":
    case "MSPointerUp":
    case "mouseup":
    case "touchcancel":
    case "pointercancel":
    case "MSPointerCancel":
    case "mousecancel":
     this._end(e);
     break;
    case "orientationchange":
    case "resize":
     this._resize();
     break;
    case "transitionend":
    case "webkitTransitionEnd":
    case "oTransitionEnd":
    case "MSTransitionEnd":
     this._transitionEnd(e);
     break;
    case "wheel":
    case "DOMMouseScroll":
    case "mousewheel":
     this._wheel(e);
     break;
    case "keydown":
     this._key(e);
     break;
    case "click":
     this.enabled && !e._constructed && (e.preventDefault(), e.stopPropagation())
   }
  }
 }, s.prototype = {
  handleEvent: function(e) {
   switch (e.type) {
    case "touchstart":
    case "pointerdown":
    case "MSPointerDown":
    case "mousedown":
     this._start(e);
     break;
    case "touchmove":
    case "pointermove":
    case "MSPointerMove":
    case "mousemove":
     this._move(e);
     break;
    case "touchend":
    case "pointerup":
    case "MSPointerUp":
    case "mouseup":
    case "touchcancel":
    case "pointercancel":
    case "MSPointerCancel":
    case "mousecancel":
     this._end(e)
   }
  },
  destroy: function() {
   this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null), this.options.interactive && (a.removeEvent(this.indicator, "touchstart", this), a.removeEvent(this.indicator, a.prefixPointerEvent("pointerdown"), this), a.removeEvent(this.indicator, "mousedown", this), a.removeEvent(e, "touchmove", this), a.removeEvent(e, a.prefixPointerEvent("pointermove"), this), a.removeEvent(e, "mousemove", this), a.removeEvent(e, "touchend", this), a.removeEvent(e, a.prefixPointerEvent("pointerup"), this), a.removeEvent(e, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
  },
  _start: function(t) {
   var i = t.touches ? t.touches[0] : t;
   t.preventDefault(), t.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = i.pageX, this.lastPointY = i.pageY, this.startTime = a.getTime(), this.options.disableTouch || a.addEvent(e, "touchmove", this), this.options.disablePointer || a.addEvent(e, a.prefixPointerEvent("pointermove"), this), this.options.disableMouse || a.addEvent(e, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
  },
  _move: function(e) {
   var t, i, n = e.touches ? e.touches[0] : e;
   a.getTime(), this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, t = n.pageX - this.lastPointX, this.lastPointX = n.pageX, i = n.pageY - this.lastPointY, this.lastPointY = n.pageY, this._pos(this.x + t, this.y + i), e.preventDefault(), e.stopPropagation()
  },
  _end: function(t) {
   if (this.initiated) {
    if (this.initiated = !1, t.preventDefault(), t.stopPropagation(), a.removeEvent(e, "touchmove", this), a.removeEvent(e, a.prefixPointerEvent("pointermove"), this), a.removeEvent(e, "mousemove", this), this.scroller.options.snap) {
     t = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);
     var n = this.options.snapSpeed || i.max(i.max(i.min(i.abs(this.scroller.x - t.x), 1e3), i.min(i.abs(this.scroller.y - t.y), 1e3)), 300);
     this.scroller.x == t.x && this.scroller.y == t.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = t, this.scroller.scrollTo(t.x, t.y, n, this.scroller.options.bounceEasing))
    }
    this.moved && this.scroller._execEvent("scrollEnd")
   }
  },
  transitionTime: function(e) {
   e = e || 0;
   var t = a.style.transitionDuration;
   if (t && (this.indicatorStyle[t] = e + "ms", !e && a.isBadAndroid)) {
    this.indicatorStyle[t] = "0.0001ms";
    var i = this;
    r(function() {
     "0.0001ms" === i.indicatorStyle[t] && (i.indicatorStyle[t] = "0s")
    })
   }
  },
  transitionTimingFunction: function(e) {
   this.indicatorStyle[a.style.transitionTimingFunction] = e
  },
  refresh: function() {
   this.transitionTime(), this.indicatorStyle.display = this.options.listenX && !this.options.listenY ? this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.scroller.hasVerticalScroll ? "block" : "none" : this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (a.addClass(this.wrapper, "iScrollBothScrollbars"), a.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (a.removeClass(this.wrapper, "iScrollBothScrollbars"), a.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px")), this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = i.max(i.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = i.max(i.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
  },
  updatePosition: function() {
   var e = this.options.listenX && i.round(this.sizeRatioX * this.scroller.x) || 0,
    t = this.options.listenY && i.round(this.sizeRatioY * this.scroller.y) || 0;
   this.options.ignoreBoundaries || (e < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = i.max(this.indicatorWidth + e, 8), this.indicatorStyle.width = this.width + "px"), e = this.minBoundaryX) : e > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = i.max(this.indicatorWidth - (e - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", e = this.maxPosX + this.indicatorWidth - this.width) : e = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), t < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = i.max(this.indicatorHeight + 3 * t, 8), this.indicatorStyle.height = this.height + "px"), t = this.minBoundaryY) : t > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = i.max(this.indicatorHeight - 3 * (t - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", t = this.maxPosY + this.indicatorHeight - this.height) : t = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = e, this.y = t, this.scroller.options.useTransform ? this.indicatorStyle[a.style.transform] = "translate(" + e + "px," + t + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = e + "px", this.indicatorStyle.top = t + "px")
  },
  _pos: function(e, t) {
   0 > e ? e = 0 : e > this.maxPosX && (e = this.maxPosX), 0 > t ? t = 0 : t > this.maxPosY && (t = this.maxPosY), e = this.options.listenX ? i.round(e / this.sizeRatioX) : this.scroller.x, t = this.options.listenY ? i.round(t / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(e, t)
  },
  fade: function(e, t) {
   if (!t || this.visible) {
    clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
    var i = e ? 0 : 300;
    this.wrapperStyle[a.style.transitionDuration] = (e ? 250 : 500) + "ms", this.fadeTimeout = setTimeout(function(e) {
     this.wrapperStyle.opacity = e, this.visible = +e
    }.bind(this, e ? "1" : "0"), i)
   }
  }
 }, n.utils = a, "undefined" != typeof module && module.exports ? module.exports = n : "function" == typeof define && define.amd ? define(function() {
  return n
 }) : e.IScroll = n
}(window, document, Math),
function() {
 "use strict";

 function e(t, n) {
  function o(e, t) {
   return function() {
    return e.apply(t, arguments)
   }
  }
  var s;
  if (n = n || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = n.touchBoundary || 10, this.layer = t, this.tapDelay = n.tapDelay || 200, this.tapTimeout = n.tapTimeout || 700, !e.notNeeded(t)) {
   for (var r = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, l = 0, c = r.length; l < c; l++) a[r[l]] = o(a[r[l]], a);
   i && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, i, n) {
    var o = Node.prototype.removeEventListener;
    "click" === e ? o.call(t, e, i.hijacked || i, n) : o.call(t, e, i, n)
   }, t.addEventListener = function(e, i, n) {
    var o = Node.prototype.addEventListener;
    "click" === e ? o.call(t, e, i.hijacked || (i.hijacked = function(e) {
     e.propagationStopped || i(e)
    }), n) : o.call(t, e, i, n)
   }), "function" == typeof t.onclick && (s = t.onclick, t.addEventListener("click", function(e) {
    s(e)
   }, !1), t.onclick = null)
  }
 }
 var t = navigator.userAgent.indexOf("Windows Phone") >= 0,
  i = navigator.userAgent.indexOf("Android") > 0 && !t,
  n = /iP(ad|hone|od)/.test(navigator.userAgent) && !t,
  o = n && /OS 4_\d(_\d)?/.test(navigator.userAgent),
  s = n && /OS [6-7]_\d/.test(navigator.userAgent),
  r = navigator.userAgent.indexOf("BB10") > 0;
 e.prototype.needsClick = function(e) {
  switch (e.nodeName.toLowerCase()) {
   case "button":
   case "select":
   case "textarea":
    if (e.disabled) return !0;
    break;
   case "input":
    if (n && "file" === e.type || e.disabled) return !0;
    break;
   case "label":
   case "iframe":
   case "video":
    return !0
  }
  return /\bneedsclick\b/.test(e.className)
 }, e.prototype.needsFocus = function(e) {
  switch (e.nodeName.toLowerCase()) {
   case "textarea":
    return !0;
   case "select":
    return !i;
   case "input":
    switch (e.type) {
     case "button":
     case "checkbox":
     case "file":
     case "image":
     case "radio":
     case "submit":
      return !1
    }
    return !e.disabled && !e.readOnly;
   default:
    return /\bneedsfocus\b/.test(e.className)
  }
 }, e.prototype.sendClick = function(e, t) {
  var i, n;
  document.activeElement && document.activeElement !== e && document.activeElement.blur(), n = t.changedTouches[0], i = document.createEvent("MouseEvents"), i.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), i.forwardedTouchEvent = !0, e.dispatchEvent(i)
 }, e.prototype.determineEventType = function(e) {
  return i && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
 }, e.prototype.focus = function(e) {
  var t;
  n && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
 }, e.prototype.updateScrollParent = function(e) {
  var t, i;
  if (t = e.fastClickScrollParent, !t || !t.contains(e)) {
   i = e;
   do {
    if (i.scrollHeight > i.offsetHeight) {
     t = i, e.fastClickScrollParent = i;
     break
    }
    i = i.parentElement
   } while (i)
  }
  t && (t.fastClickLastScrollTop = t.scrollTop)
 }, e.prototype.getTargetElementFromEventTarget = function(e) {
  return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
 }, e.prototype.onTouchStart = function(e) {
  var t, i, s;
  if (e.targetTouches.length > 1) return !0;
  if (t = this.getTargetElementFromEventTarget(e.target), i = e.targetTouches[0], n) {
   if (s = window.getSelection(), s.rangeCount && !s.isCollapsed) return !0;
   if (!o) {
    if (i.identifier && i.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
    this.lastTouchIdentifier = i.identifier, this.updateScrollParent(t)
   }
  }
  return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = i.pageX, this.touchStartY = i.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
 }, e.prototype.touchHasMoved = function(e) {
  var t = e.changedTouches[0],
   i = this.touchBoundary;
  return Math.abs(t.pageX - this.touchStartX) > i || Math.abs(t.pageY - this.touchStartY) > i
 }, e.prototype.onTouchMove = function(e) {
  return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0)
 }, e.prototype.findControl = function(e) {
  return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
 }, e.prototype.onTouchEnd = function(e) {
  var t, r, a, l, c, d = this.targetElement;
  if (!this.trackingClick) return !0;
  if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
  if (e.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
  if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, r = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, s && (c = e.changedTouches[0], d = document.elementFromPoint(c.pageX - window.pageXOffset, c.pageY - window.pageYOffset) || d, d.fastClickScrollParent = this.targetElement.fastClickScrollParent), a = d.tagName.toLowerCase(), "label" === a) {
   if (t = this.findControl(d)) {
    if (this.focus(d), i) return !1;
    d = t
   }
  } else if (this.needsFocus(d)) return e.timeStamp - r > 100 || n && window.top !== window && "input" === a ? (this.targetElement = null, !1) : (this.focus(d), this.sendClick(d, e), n && "select" === a || (this.targetElement = null, e.preventDefault()), !1);
  return !(!n || o || (l = d.fastClickScrollParent, !l || l.fastClickLastScrollTop === l.scrollTop)) || (this.needsClick(d) || (e.preventDefault(), this.sendClick(d, e)), !1)
 }, e.prototype.onTouchCancel = function() {
  this.trackingClick = !1, this.targetElement = null
 }, e.prototype.onMouse = function(e) {
  return !this.targetElement || (!!e.forwardedTouchEvent || (!e.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1))))
 }, e.prototype.onClick = function(e) {
  var t;
  return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail || (t = this.onMouse(e), t || (this.targetElement = null), t)
 }, e.prototype.destroy = function() {
  var e = this.layer;
  i && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
 }, e.notNeeded = function(e) {
  var t, n, o, s;
  if ("undefined" == typeof window.ontouchstart) return !0;
  if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
   if (!i) return !0;
   if (t = document.querySelector("meta[name=viewport]")) {
    if (t.content.indexOf("user-scalable=no") !== -1) return !0;
    if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
   }
  }
  if (r && (o = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), o[1] >= 10 && o[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) {
   if (t.content.indexOf("user-scalable=no") !== -1) return !0;
   if (document.documentElement.scrollWidth <= window.outerWidth) return !0
  }
  return "none" === e.style.msTouchAction || "manipulation" === e.style.touchAction || (s = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], !!(s >= 27 && (t = document.querySelector("meta[name=viewport]"), t && (t.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth))) || ("none" === e.style.touchAction || "manipulation" === e.style.touchAction))
 }, e.attach = function(t, i) {
  return new e(t, i)
 }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
  return e
 }) : "undefined" != typeof module && module.exports ? (module.exports = e.attach, module.exports.FastClick = e) : window.FastClick = e
}(),
function() {
 var e;
 e = function() {
   function e(e, t) {
    var i, n;
    if (this.options = {
      target: "instafeed",
      get: "popular",
      resolution: "thumbnail",
      sortBy: "none",
      links: !0,
      mock: !1,
      useHttp: !1
     }, "object" == typeof e)
     for (i in e) n = e[i], this.options[i] = n;
    this.context = null != t ? t : this, this.unique = this._genKey()
   }
   return e.prototype.hasNext = function() {
    return "string" == typeof this.context.nextUrl && this.context.nextUrl.length > 0
   }, e.prototype.next = function() {
    return !!this.hasNext() && this.run(this.context.nextUrl)
   }, e.prototype.run = function(t) {
    var i, n, o;
    if ("string" != typeof this.options.clientId && "string" != typeof this.options.accessToken) throw new Error("Missing clientId or accessToken.");
    if ("string" != typeof this.options.accessToken && "string" != typeof this.options.clientId) throw new Error("Missing clientId or accessToken.");
    return null != this.options.before && "function" == typeof this.options.before && this.options.before.call(this), "undefined" != typeof document && null !== document && (o = document.createElement("script"), o.id = "instafeed-fetcher", o.src = t || this._buildUrl(), i = document.getElementsByTagName("head"),
     i[0].appendChild(o), n = "instafeedCache" + this.unique, window[n] = new e(this.options, this), window[n].unique = this.unique), !0
   }, e.prototype.parse = function(e) {
    var t, i, n, o, s, r, a, l, c, d, u, h, p, f, m, v, g, y, w, b, x, T, S, k, C, E, $, A, P, L, O, H, D;
    if ("object" != typeof e) {
     if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "Invalid JSON data"), !1;
     throw new Error("Invalid JSON response")
    }
    if (200 !== e.meta.code) {
     if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, e.meta.error_message), !1;
     /*throw new Error("Error from Instagram: " + e.meta.error_message)*/
    }
    if (0 === e.data.length) {
     if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "No images were returned from Instagram"), !1;
     throw new Error("No images were returned from Instagram")
    }
    if (null != this.options.success && "function" == typeof this.options.success && this.options.success.call(this, e), this.context.nextUrl = "", null != e.pagination && (this.context.nextUrl = e.pagination.next_url), "none" !== this.options.sortBy) switch (O = "random" === this.options.sortBy ? ["", "random"] : this.options.sortBy.split("-"), L = "least" === O[0], O[1]) {
     case "random":
      e.data.sort(function() {
       return .5 - Math.random()
      });
      break;
     case "recent":
      e.data = this._sortBy(e.data, "created_time", L);
      break;
     case "liked":
      e.data = this._sortBy(e.data, "likes.count", L);
      break;
     case "commented":
      e.data = this._sortBy(e.data, "comments.count", L);
      break;
     default:
      throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.")
    }
    if ("undefined" != typeof document && null !== document && this.options.mock === !1) {
     if (v = e.data, P = parseInt(this.options.limit, 10), null != this.options.limit && v.length > P && (v = v.slice(0, P)), a = document.createDocumentFragment(), null != this.options.filter && "function" == typeof this.options.filter && (v = this._filter(v, this.options.filter)), null != this.options.template && "string" == typeof this.options.template) {
      for (c = "", f = "", b = "", D = document.createElement("div"), u = 0, C = v.length; u < C; u++) {
       if (h = v[u], p = h.images[this.options.resolution], "object" != typeof p) throw r = "No image found for resolution: " + this.options.resolution + ".", new Error(r);
       x = p.width, y = p.height, w = "square", x > y && (w = "landscape"), x < y && (w = "portrait"), m = p.url, d = window.location.protocol.indexOf("http") >= 0, d && !this.options.useHttp && (m = m.replace(/https?:\/\//, "//")), f = this._makeTemplate(this.options.template, {
        model: h,
        id: h.id,
        link: h.link,
        type: h.type,
        image: m,
        width: x,
        height: y,
        orientation: w,
        caption: this._getObjectProperty(h, "caption.text"),
        likes: h.likes.count,
        comments: h.comments.count,
        location: this._getObjectProperty(h, "location.name")
       }), c += f
      }
      for (D.innerHTML = c, o = [], n = 0, i = D.childNodes.length; n < i;) o.push(D.childNodes[n]), n += 1;
      for (S = 0, E = o.length; S < E; S++) A = o[S], a.appendChild(A)
     } else
      for (k = 0, $ = v.length; k < $; k++) {
       if (h = v[k], g = document.createElement("img"), p = h.images[this.options.resolution], "object" != typeof p) throw r = "No image found for resolution: " + this.options.resolution + ".", new Error(r);
       m = p.url, d = window.location.protocol.indexOf("http") >= 0, d && !this.options.useHttp && (m = m.replace(/https?:\/\//, "//")), g.src = m, this.options.links === !0 ? (t = document.createElement("a"), t.href = h.link, t.appendChild(g), a.appendChild(t)) : a.appendChild(g)
      }
     if (H = this.options.target, "string" == typeof H && (H = document.getElementById(H)), null == H) throw r = 'No element with id="' + this.options.target + '" on page.', new Error(r);
     H.appendChild(a), l = document.getElementsByTagName("head")[0], l.removeChild(document.getElementById("instafeed-fetcher")), T = "instafeedCache" + this.unique, window[T] = void 0;
     try {
      delete window[T]
     } catch (e) {
      s = e
     }
    }
    return null != this.options.after && "function" == typeof this.options.after && this.options.after.call(this), !0
   }, e.prototype._buildUrl = function() {
    var e, t, i;
    switch (e = "https://api.instagram.com/v1", this.options.get) {
     case "popular":
      t = "media/popular";
      break;
     case "tagged":
      if (!this.options.tagName) throw new Error("No tag name specified. Use the 'tagName' option.");
      t = "tags/" + this.options.tagName + "/media/recent";
      break;
     case "location":
      if (!this.options.locationId) throw new Error("No location specified. Use the 'locationId' option.");
      t = "locations/" + this.options.locationId + "/media/recent";
      break;
     case "user":
      if (!this.options.userId) throw new Error("No user specified. Use the 'userId' option.");
      t = "users/" + this.options.userId + "/media/recent";
      break;
     default:
      throw new Error("Invalid option for get: '" + this.options.get + "'.")
    }
    return i = e + "/" + t, i += null != this.options.accessToken ? "?access_token=" + this.options.accessToken : "?client_id=" + this.options.clientId, null != this.options.limit && (i += "&count=" + this.options.limit), i += "&callback=instafeedCache" + this.unique + ".parse"
   }, e.prototype._genKey = function() {
    var e;
    return e = function() {
     return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
    }, "" + e() + e() + e() + e()
   }, e.prototype._makeTemplate = function(e, t) {
    var i, n, o, s, r;
    for (n = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, i = e; n.test(i);) s = i.match(n)[1], r = null != (o = this._getObjectProperty(t, s)) ? o : "", i = i.replace(n, function() {
     return "" + r
    });
    return i
   }, e.prototype._getObjectProperty = function(e, t) {
    var i, n;
    for (t = t.replace(/\[(\w+)\]/g, ".$1"), n = t.split("."); n.length;) {
     if (i = n.shift(), !(null != e && i in e)) return null;
     e = e[i]
    }
    return e
   }, e.prototype._sortBy = function(e, t, i) {
    var n;
    return n = function(e, n) {
     var o, s;
     return o = this._getObjectProperty(e, t), s = this._getObjectProperty(n, t), i ? o > s ? 1 : -1 : o < s ? 1 : -1
    }, e.sort(n.bind(this)), e
   }, e.prototype._filter = function(e, t) {
    var i, n, o, s, r;
    for (i = [], n = function(e) {
      if (t(e)) return i.push(e)
     }, o = 0, r = e.length; o < r; o++) s = e[o], n(s);
    return i
   }, e
  }(),
  function(e, t) {
   return "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.Instafeed = t()
  }(this, function() {
   return e
  })
}.call(this),
 function(e) {
  "use strict";
  e.fn.fitVids = function(t) {
   var i = {
    customSelector: null,
    ignore: null
   };
   if (!document.getElementById("fit-vids-style")) {
    var n = document.head || document.getElementsByTagName("head")[0],
     o = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
     s = document.createElement("div");
    s.innerHTML = '<p>x</p><style id="fit-vids-style">' + o + "</style>", n.appendChild(s.childNodes[1])
   }
   return t && e.extend(i, t), this.each(function() {
    var t = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
    i.customSelector && t.push(i.customSelector);
    var n = ".fitvidsignore";
    i.ignore && (n = n + ", " + i.ignore);
    var o = e(this).find(t.join(","));
    o = o.not("object object"), o = o.not(n), o.each(function() {
     var t = e(this);
     if (!(t.parents(n).length > 0 || "embed" === this.tagName.toLowerCase() && t.parent("object").length || t.parent(".fluid-width-video-wrapper").length)) {
      t.css("height") || t.css("width") || !isNaN(t.attr("height")) && !isNaN(t.attr("width")) || (t.attr("height", 9), t.attr("width", 16));
      var i = "object" === this.tagName.toLowerCase() || t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)) ? parseInt(t.attr("height"), 10) : t.height(),
       o = isNaN(parseInt(t.attr("width"), 10)) ? t.width() : parseInt(t.attr("width"), 10),
       s = i / o;
      if (!t.attr("name")) {
       var r = "fitvid" + e.fn.fitVids._count;
       t.attr("name", r), e.fn.fitVids._count++
      }
      t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * s + "%"), t.removeAttr("height").removeAttr("width")
     }
    })
   })
  }, e.fn.fitVids._count = 0
 }(window.jQuery || window.Zepto), ! function(e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], function(i) {
   return t(i, e, e.document, e.Math)
  }) : "object" == typeof exports && exports ? module.exports = t(require("jquery"), e, e.document, e.Math) : t(jQuery, e, e.document, e.Math)
 }("undefined" != typeof window ? window : this, function(e, t, i, n, o) {
  "use strict";
  var s = "fullpage-wrapper",
   r = "." + s,
   a = "fp-scrollable",
   l = "." + a,
   c = "fp-responsive",
   d = "fp-notransition",
   u = "fp-destroyed",
   h = "fp-enabled",
   p = "fp-viewing",
   f = "active",
   m = "." + f,
   v = "fp-completely",
   g = "." + v,
   y = ".section",
   w = "fp-section",
   b = "." + w,
   x = b + m,
   T = b + ":first",
   S = b + ":last",
   k = "fp-tableCell",
   C = "." + k,
   E = "fp-auto-height",
   $ = "fp-normal-scroll",
   A = "fp-nav",
   P = "#" + A,
   L = "fp-tooltip",
   O = "." + L,
   H = "fp-show-active",
   D = ".slide",
   M = "fp-slide",
   N = "." + M,
   j = N + m,
   I = "fp-slides",
   z = "." + I,
   q = "fp-slidesContainer",
   _ = "." + q,
   W = "fp-table",
   X = "fp-slidesNav",
   R = "." + X,
   Y = R + " a",
   B = "fp-controlArrow",
   F = "." + B,
   U = "fp-prev",
   V = "." + U,
   Q = B + " " + U,
   K = F + V,
   G = "fp-next",
   J = "." + G,
   Z = B + " " + G,
   ee = F + J,
   te = e(t),
   ie = e(i),
   ne = {
    scrollbars: !0,
    mouseWheel: !0,
    hideScrollbars: !1,
    fadeScrollbars: !1,
    disableMouse: !0,
    interactiveScrollbars: !0
   };
  e.fn.fullpage = function(a) {
   function l(t, i) {
    t || Gt(0), ii("autoScrolling", t, i);
    var n = e(x);
    a.autoScrolling && !a.scrollBar ? (si.css({
     overflow: "hidden",
     height: "100%"
    }), B($i.recordHistory, "internal"), fi.css({
     "-ms-touch-action": "none",
     "touch-action": "none"
    }), n.length && Gt(n.position().top)) : (si.css({
     overflow: "visible",
     height: "initial"
    }), B(!1, "internal"), fi.css({
     "-ms-touch-action": "",
     "touch-action": ""
    }), n.length && si.scrollTop(n.position().top))
   }

   function B(e, t) {
    ii("recordHistory", e, t)
   }

   function V(e, t) {
    ii("scrollingSpeed", e, t)
   }

   function G(e, t) {
    ii("fitToSection", e, t)
   }

   function J(e) {
    a.lockAnchors = e
   }

   function se(e) {
    e ? (Rt(), Yt()) : (Xt(), Bt())
   }

   function re(t, i) {
    "undefined" != typeof i ? (i = i.replace(/ /g, "").split(","), e.each(i, function(e, i) {
     Zt(t, i, "m")
    })) : t ? (se(!0), Ft()) : (se(!1), Ut())
   }

   function ae(t, i) {
    "undefined" != typeof i ? (i = i.replace(/ /g, "").split(","), e.each(i, function(e, i) {
     Zt(t, i, "k")
    })) : a.keyboardScrolling = t
   }

   function le() {
    var t = e(x).prev(b);
    t.length || !a.loopTop && !a.continuousVertical || (t = e(b).last()), t.length && Be(t, null, !0)
   }

   function ce() {
    var t = e(x).next(b);
    t.length || !a.loopBottom && !a.continuousVertical || (t = e(b).first()), t.length && Be(t, null, !1)
   }

   function de(e, t) {
    V(0, "internal"), ue(e, t), V($i.scrollingSpeed, "internal")
   }

   function ue(e, t) {
    var i = Ht(e);
    "undefined" != typeof t ? Mt(e, t) : i.length > 0 && Be(i)
   }

   function he(e) {
    Xe("right", e)
   }

   function pe(e) {
    Xe("left", e)
   }

   function fe(t) {
    if (!fi.hasClass(u)) {
     vi = !0, mi = te.height(), e(b).each(function() {
      var t = e(this).find(z),
       i = e(this).find(N);
      a.verticalCentered && e(this).find(C).css("height", Lt(e(this)) + "px"), e(this).css("height", mi + "px"), a.scrollOverflow && (i.length ? i.each(function() {
       At(e(this))
      }) : At(e(this))), i.length > 1 && mt(t, t.find(j))
     });
     var i = e(x),
      n = i.index(b);
     n && de(n + 1), vi = !1, e.isFunction(a.afterResize) && t && a.afterResize.call(fi), e.isFunction(a.afterReBuild) && !t && a.afterReBuild.call(fi)
    }
   }

   function me(t) {
    var i = ri.hasClass(c);
    t ? i || (l(!1, "internal"), G(!1, "internal"), e(P).hide(), ri.addClass(c), e.isFunction(a.afterResponsive) && a.afterResponsive.call(fi, t)) : i && (l($i.autoScrolling, "internal"), G($i.autoScrolling, "internal"), e(P).show(), ri.removeClass(c), e.isFunction(a.afterResponsive) && a.afterResponsive.call(fi, t))
   }

   function ve() {
    a.css3 && (a.css3 = Wt()), a.scrollBar = a.scrollBar || a.hybrid, ye(), we(), re(!0), l(a.autoScrolling, "internal");
    var t = e(x).find(j);
    t.length && (0 !== e(x).index(b) || 0 === e(x).index(b) && 0 !== t.index()) && Kt(t), bt(), _t(), "complete" === i.readyState && it(), te.on("load", it)
   }

   function ge() {
    te.on("scroll", Oe).on("hashchange", nt).blur(dt).resize(wt), ie.keydown(ot).keyup(rt).on("click touchstart", P + " a", ut).on("click touchstart", Y, ht).on("click", O, st), e(b).on("click touchstart", F, ct), a.normalScrollElements && (ie.on("mouseenter", a.normalScrollElements, function() {
     se(!1)
    }), ie.on("mouseleave", a.normalScrollElements, function() {
     se(!0)
    }))
   }

   function ye() {
    var t = fi.find(a.sectionSelector);
    a.anchors.length || (a.anchors = t.filter("[data-anchor]").map(function() {
     return e(this).data("anchor").toString()
    }).get()), a.navigationTooltips.length || (a.navigationTooltips = t.filter("[data-tooltip]").map(function() {
     return e(this).data("tooltip").toString()
    }).get())
   }

   function we() {
    fi.css({
     height: "100%",
     position: "relative"
    }), fi.addClass(s), e("html").addClass(h), mi = te.height(), fi.removeClass(u), Se(), e(b).each(function(t) {
     var i = e(this),
      n = i.find(N),
      o = n.length;
     xe(i, t), Te(i, t), o > 0 ? be(i, n, o) : a.verticalCentered && Pt(i)
    }), a.fixedElements && a.css3 && e(a.fixedElements).appendTo(ri), a.navigation && Ce(), $e(), a.scrollOverflow ? ("complete" === i.readyState && Ee(), te.on("load", Ee)) : Le()
   }

   function be(t, i, n) {
    var o = 100 * n,
     s = 100 / n;
    i.wrapAll('<div class="' + q + '" />'), i.parent().wrap('<div class="' + I + '" />'), t.find(_).css("width", o + "%"), n > 1 && (a.controlArrows && ke(t), a.slidesNavigation && jt(t, n)), i.each(function(t) {
     e(this).css("width", s + "%"), a.verticalCentered && Pt(e(this))
    });
    var r = t.find(j);
    r.length && (0 !== e(x).index(b) || 0 === e(x).index(b) && 0 !== r.index()) ? Kt(r) : i.eq(0).addClass(f)
   }

   function xe(t, i) {
    i || 0 !== e(x).length || t.addClass(f), t.css("height", mi + "px"), a.paddingTop && t.css("padding-top", a.paddingTop), a.paddingBottom && t.css("padding-bottom", a.paddingBottom), "undefined" != typeof a.sectionsColor[i] && t.css("background-color", a.sectionsColor[i]), "undefined" != typeof a.anchors[i] && t.attr("data-anchor", a.anchors[i])
   }

   function Te(t, i) {
    "undefined" != typeof a.anchors[i] && t.hasClass(f) && Ct(a.anchors[i], i), a.menu && a.css3 && e(a.menu).closest(r).length && e(a.menu).appendTo(ri)
   }

   function Se() {
    fi.find(a.sectionSelector).addClass(w), fi.find(a.slideSelector).addClass(M)
   }

   function ke(e) {
    e.find(z).after('<div class="' + Q + '"></div><div class="' + Z + '"></div>'), "#fff" != a.controlArrowColor && (e.find(ee).css("border-color", "transparent transparent transparent " + a.controlArrowColor), e.find(K).css("border-color", "transparent " + a.controlArrowColor + " transparent transparent")), a.loopHorizontal || e.find(K).hide()
   }

   function Ce() {
    ri.append('<div id="' + A + '"><ul></ul></div>');
    var t = e(P);
    t.addClass(function() {
     return a.showActiveTooltip ? H + " " + a.navigationPosition : a.navigationPosition
    });
    for (var i = 0; i < e(b).length; i++) {
     var n = "";
     a.anchors.length && (n = a.anchors[i]);
     var o = '<li><a href="#' + n + '"><span></span></a>',
      s = a.navigationTooltips[i];
     "undefined" != typeof s && "" !== s && (o += '<div class="' + L + " " + a.navigationPosition + '">' + s + "</div>"), o += "</li>", t.find("ul").append(o)
    }
    e(P).css("margin-top", "-" + e(P).height() / 2 + "px"), e(P).find("li").eq(e(x).index(b)).find("a").addClass(f)
   }

   function Ee() {
    e(b).each(function() {
     var t = e(this).find(N);
     t.length ? t.each(function() {
      At(e(this))
     }) : At(e(this))
    }), Le()
   }

   function $e() {
    fi.find('iframe[src*="youtube.com/embed/"]').each(function() {
     Ae(e(this), "enablejsapi=1")
    })
   }

   function Ae(e, t) {
    var i = e.attr("src");
    e.attr("src", i + Pe(i) + t)
   }

   function Pe(e) {
    return /\?/.test(e) ? "&" : "?"
   }

   function Le() {
    var t = e(x);
    t.addClass(v), a.scrollOverflowHandler.afterRender && a.scrollOverflowHandler.afterRender(t), Ge(t), Je(t), a.scrollOverflowHandler.afterLoad(), e.isFunction(a.afterLoad) && a.afterLoad.call(t, t.data("anchor"), t.index(b) + 1), e.isFunction(a.afterRender) && a.afterRender.call(fi)
   }

   function Oe() {
    var t;
    if (!a.autoScrolling || a.scrollBar) {
     var n = te.scrollTop(),
      o = De(n),
      s = 0,
      r = n + te.height() / 2,
      l = ri.height() - te.height() === n,
      c = i.querySelectorAll(b);
     if (l) s = c.length - 1;
     else if (n)
      for (var d = 0; d < c.length; ++d) {
       var u = c[d];
       u.offsetTop <= r && (s = d)
      } else s = 0;
     if (He(o) && (e(x).hasClass(v) || e(x).addClass(v).siblings().removeClass(v)), t = e(c).eq(s), !t.hasClass(f)) {
      Ai = !0;
      var h, p, m = e(x),
       g = m.index(b) + 1,
       y = Et(t),
       w = t.data("anchor"),
       T = t.index(b) + 1,
       S = t.find(j);
      S.length && (p = S.data("anchor"), h = S.index()), yi && (t.addClass(f).siblings().removeClass(f), e.isFunction(a.onLeave) && a.onLeave.call(m, g, T, y), e.isFunction(a.afterLoad) && a.afterLoad.call(t, w, T), et(m), Ge(t), Je(t), Ct(w, T - 1), a.anchors.length && (li = w), It(h, p, w, T)), clearTimeout(ki), ki = setTimeout(function() {
       Ai = !1
      }, 100)
     }
     a.fitToSection && (clearTimeout(Ci), Ci = setTimeout(function() {
      yi && a.fitToSection && (e(x).is(t) && (vi = !0), Be(e(x)), vi = !1)
     }, a.fitToSectionDelay))
    }
   }

   function He(t) {
    var i = e(x).position().top,
     n = i + te.height();
    return "up" == t ? n >= te.scrollTop() + te.height() : i <= te.scrollTop()
   }

   function De(e) {
    var t = e > Pi ? "down" : "up";
    return Pi = e, Ni = e, t
   }

   function Me(e, t) {
    if (bi.m[e]) {
     var i = "down" === e ? "bottom" : "top",
      n = "down" === e ? ce : le;
     if (t.length > 0) {
      if (!a.scrollOverflowHandler.isScrolled(i, t)) return !0;
      n()
     } else n()
    }
   }

   function Ne(e) {
    var t = e.originalEvent;
    !Ie(e.target) && a.autoScrolling && ze(t) && e.preventDefault()
   }

   function je(t) {
    var i = t.originalEvent,
     o = e(i.target).closest(b);
    if (!Ie(t.target) && ze(i)) {
     a.autoScrolling && t.preventDefault();
     var s = a.scrollOverflowHandler.scrollable(o),
      r = Qt(i);
     Hi = r.y, Di = r.x, o.find(z).length && n.abs(Oi - Di) > n.abs(Li - Hi) ? !ui && n.abs(Oi - Di) > te.outerWidth() / 100 * a.touchSensitivity && (Oi > Di ? bi.m.right && he(o) : bi.m.left && pe(o)) : a.autoScrolling && yi && n.abs(Li - Hi) > te.height() / 100 * a.touchSensitivity && (Li > Hi ? Me("down", s) : Hi > Li && Me("up", s))
    }
   }

   function Ie(t, i) {
    i = i || 0;
    var n = e(t).parent();
    return !!(i < a.normalScrollElementTouchThreshold && n.is(a.normalScrollElements)) || i != a.normalScrollElementTouchThreshold && Ie(n, ++i)
   }

   function ze(e) {
    return "undefined" == typeof e.pointerType || "mouse" != e.pointerType
   }

   function qe(e) {
    var t = e.originalEvent;
    if (a.fitToSection && si.stop(), ze(t)) {
     var i = Qt(t);
     Li = i.y, Oi = i.x
    }
   }

   function _e(e, t) {
    for (var i = 0, o = e.slice(n.max(e.length - t, 1)), s = 0; s < o.length; s++) i += o[s];
    return n.ceil(i / t)
   }

   function We(i) {
    var o = (new Date).getTime(),
     s = e(g).hasClass($);
    if (a.autoScrolling && !di && !s) {
     i = i || t.event;
     var r = i.wheelDelta || -i.deltaY || -i.detail,
      l = n.max(-1, n.min(1, r)),
      c = "undefined" != typeof i.wheelDeltaX || "undefined" != typeof i.deltaX,
      d = n.abs(i.wheelDeltaX) < n.abs(i.wheelDelta) || n.abs(i.deltaX) < n.abs(i.deltaY) || !c;
     wi.length > 149 && wi.shift(), wi.push(n.abs(r)), a.scrollBar && (i.preventDefault ? i.preventDefault() : i.returnValue = !1);
     var u = e(x),
      h = a.scrollOverflowHandler.scrollable(u),
      p = o - Mi;
     if (Mi = o, p > 200 && (wi = []), yi) {
      var f = _e(wi, 10),
       m = _e(wi, 70),
       v = f >= m;
      v && d && (0 > l ? Me("down", h) : Me("up", h))
     }
     return !1
    }
    a.fitToSection && si.stop()
   }

   function Xe(t, i) {
    var n = "undefined" == typeof i ? e(x) : i,
     o = n.find(z),
     s = o.find(N).length;
    if (!(!o.length || ui || 2 > s)) {
     var r = o.find(j),
      l = null;
     if (l = "left" === t ? r.prev(N) : r.next(N), !l.length) {
      if (!a.loopHorizontal) return;
      l = "left" === t ? r.siblings(":last") : r.siblings(":first")
     }
     ui = !0, mt(o, l, t)
    }
   }

   function Re() {
    e(j).each(function() {
     Kt(e(this), "internal")
    })
   }

   function Ye(e) {
    var t = e.position(),
     i = t.top,
     n = t.top > Ni,
     o = i - mi + e.outerHeight(),
     s = a.bigSectionsDestination;
    return e.outerHeight() > mi ? (!n && !s || "bottom" === s) && (i = o) : (n || vi && e.is(":last-child")) && (i = o), Ni = i, i
   }

   function Be(t, i, n) {
    if ("undefined" != typeof t) {
     var o, s, r = Ye(t),
      l = {
       element: t,
       callback: i,
       isMovementUp: n,
       dtop: r,
       yMovement: Et(t),
       anchorLink: t.data("anchor"),
       sectionIndex: t.index(b),
       activeSlide: t.find(j),
       activeSection: e(x),
       leavingSection: e(x).index(b) + 1,
       localIsResizing: vi
      };
     l.activeSection.is(t) && !vi || a.scrollBar && te.scrollTop() === l.dtop && !t.hasClass(E) || (l.activeSlide.length && (o = l.activeSlide.data("anchor"), s = l.activeSlide.index()), a.autoScrolling && a.continuousVertical && "undefined" != typeof l.isMovementUp && (!l.isMovementUp && "up" == l.yMovement || l.isMovementUp && "down" == l.yMovement) && (l = Ve(l)), (!e.isFunction(a.onLeave) || l.localIsResizing || a.onLeave.call(l.activeSection, l.leavingSection, l.sectionIndex + 1, l.yMovement) !== !1) && (et(l.activeSection), a.scrollOverflowHandler.beforeLeave(), t.addClass(f).siblings().removeClass(f), Ge(t), a.scrollOverflowHandler.onLeave(), yi = !1, It(s, o, l.anchorLink, l.sectionIndex), Fe(l), li = l.anchorLink, Ct(l.anchorLink, l.sectionIndex)))
    }
   }

   function Fe(t) {
    if (a.css3 && a.autoScrolling && !a.scrollBar) {
     var i = "translate3d(0px, -" + n.round(t.dtop) + "px, 0px)";
     Ot(i, !0), a.scrollingSpeed ? (clearTimeout(Ti), Ti = setTimeout(function() {
      Ke(t)
     }, a.scrollingSpeed)) : Ke(t)
    } else {
     var o = Ue(t);
     e(o.element).animate(o.options, a.scrollingSpeed, a.easing).promise().done(function() {
      a.scrollBar ? setTimeout(function() {
       Ke(t)
      }, 30) : Ke(t)
     })
    }
   }

   function Ue(e) {
    var t = {};
    return a.autoScrolling && !a.scrollBar ? (t.options = {
     top: -e.dtop
    }, t.element = r) : (t.options = {
     scrollTop: e.dtop
    }, t.element = "html, body"), t
   }

   function Ve(t) {
    return t.isMovementUp ? e(x).before(t.activeSection.nextAll(b)) : e(x).after(t.activeSection.prevAll(b).get().reverse()), Gt(e(x).position().top), Re(), t.wrapAroundElements = t.activeSection, t.dtop = t.element.position().top, t.yMovement = Et(t.element), t
   }

   function Qe(t) {
    t.wrapAroundElements && t.wrapAroundElements.length && (t.isMovementUp ? e(T).before(t.wrapAroundElements) : e(S).after(t.wrapAroundElements), Gt(e(x).position().top), Re())
   }

   function Ke(t) {
    Qe(t), e.isFunction(a.afterLoad) && !t.localIsResizing && a.afterLoad.call(t.element, t.anchorLink, t.sectionIndex + 1), a.scrollOverflowHandler.afterLoad(), t.localIsResizing || Je(t.element), t.element.addClass(v).siblings().removeClass(v), yi = !0, e.isFunction(t.callback) && t.callback.call(this)
   }

   function Ge(t) {
    if (a.lazyLoading) {
     var i, n = tt(t);
     n.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
      i = e(this), i.attr("src", i.data("src")), i.removeAttr("data-src"), i.is("source") && i.closest("video").get(0).load()
     })
    }
   }

   function Je(t) {
    var i = tt(t);
    i.find("video, audio").each(function() {
     var t = e(this).get(0);
     t.hasAttribute("data-autoplay") && "function" == typeof t.play && t.play()
    }), i.find('iframe[src*="youtube.com/embed/"]').each(function() {
     var t = e(this).get(0);
     t.hasAttribute("data-autoplay") && Ze(t), t.onload = function() {
      t.hasAttribute("data-autoplay") && Ze(t)
     }
    })
   }

   function Ze(e) {
    e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
   }

   function et(t) {
    var i = tt(t);
    i.find("video, audio").each(function() {
     var t = e(this).get(0);
     t.hasAttribute("data-keepplaying") || "function" != typeof t.pause || t.pause()
    }), i.find('iframe[src*="youtube.com/embed/"]').each(function() {
     var t = e(this).get(0);
     /youtube\.com\/embed\//.test(e(this).attr("src")) && !t.hasAttribute("data-keepplaying") && e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
    })
   }

   function tt(t) {
    var i = t.find(j);
    return i.length && (t = e(i)), t
   }

   function it() {
    var e = t.location.hash.replace("#", "").split("/"),
     i = decodeURIComponent(e[0]),
     n = decodeURIComponent(e[1]);
    i && (a.animateAnchor ? Mt(i, n) : de(i, n))
   }

   function nt() {
    if (!Ai && !a.lockAnchors) {
     var e = t.location.hash.replace("#", "").split("/"),
      i = decodeURIComponent(e[0]),
      n = decodeURIComponent(e[1]),
      o = "undefined" == typeof li,
      s = "undefined" == typeof li && "undefined" == typeof n && !ui;
     i.length && (i && i !== li && !o || s || !ui && ci != n) && Mt(i, n)
    }
   }

   function ot(t) {
    clearTimeout(Ei);
    var i = e(":focus");
    if (!i.is("textarea") && !i.is("input") && !i.is("select") && "true" !== i.attr("contentEditable") && "" !== i.attr("contentEditable") && a.keyboardScrolling && a.autoScrolling) {
     var n = t.which,
      o = [40, 38, 32, 33, 34];
     e.inArray(n, o) > -1 && t.preventDefault(), di = t.ctrlKey, Ei = setTimeout(function() {
      pt(t)
     }, 150)
    }
   }

   function st() {
    e(this).prev().trigger("click")
   }

   function rt(e) {
    gi && (di = e.ctrlKey)
   }

   function at(e) {
    2 == e.which && (ji = e.pageY, fi.on("mousemove", ft))
   }

   function lt(e) {
    2 == e.which && fi.off("mousemove")
   }

   function ct() {
    var t = e(this).closest(b);
    e(this).hasClass(U) ? bi.m.left && pe(t) : bi.m.right && he(t)
   }

   function dt() {
    gi = !1, di = !1
   }

   function ut(t) {
    t.preventDefault();
    var i = e(this).parent().index();
    Be(e(b).eq(i))
   }

   function ht(t) {
    t.preventDefault();
    var i = e(this).closest(b).find(z),
     n = i.find(N).eq(e(this).closest("li").index());
    mt(i, n)
   }

   function pt(t) {
    var i = t.shiftKey;
    if (yi || !([37, 39].indexOf(t.which) < 0)) switch (t.which) {
     case 38:
     case 33:
      bi.k.up && le();
      break;
     case 32:
      if (i && bi.k.up) {
       le();
       break
      }
     case 40:
     case 34:
      bi.k.down && ce();
      break;
     case 36:
      bi.k.up && ue(1);
      break;
     case 35:
      bi.k.down && ue(e(b).length);
      break;
     case 37:
      bi.k.left && pe();
      break;
     case 39:
      bi.k.right && he();
      break;
     default:
      return
    }
   }

   function ft(e) {
    yi && (e.pageY < ji && bi.m.up ? le() : e.pageY > ji && bi.m.down && ce()), ji = e.pageY
   }

   function mt(t, i, n) {
    var o = t.closest(b),
     s = {
      slides: t,
      destiny: i,
      direction: n,
      destinyPos: i.position(),
      slideIndex: i.index(),
      section: o,
      sectionIndex: o.index(b),
      anchorLink: o.data("anchor"),
      slidesNav: o.find(R),
      slideAnchor: qt(i),
      prevSlide: o.find(j),
      prevSlideIndex: o.find(j).index(),
      localIsResizing: vi
     };
    return s.xMovement = $t(s.prevSlideIndex, s.slideIndex), s.localIsResizing || (yi = !1), a.onSlideLeave && !s.localIsResizing && "none" !== s.xMovement && e.isFunction(a.onSlideLeave) && a.onSlideLeave.call(s.prevSlide, s.anchorLink, s.sectionIndex + 1, s.prevSlideIndex, s.xMovement, s.slideIndex) === !1 ? void(ui = !1) : (i.addClass(f).siblings().removeClass(f), s.localIsResizing || (et(s.prevSlide), Ge(i)), !a.loopHorizontal && a.controlArrows && (o.find(K).toggle(0 !== s.slideIndex), o.find(ee).toggle(!i.is(":last-child"))), o.hasClass(f) && It(s.slideIndex, s.slideAnchor, s.anchorLink, s.sectionIndex), void gt(t, s, !0))
   }

   function vt(t) {
    yt(t.slidesNav, t.slideIndex), t.localIsResizing || (e.isFunction(a.afterSlideLoad) && a.afterSlideLoad.call(t.destiny, t.anchorLink, t.sectionIndex + 1, t.slideAnchor, t.slideIndex), yi = !0, Je(t.destiny)), ui = !1
   }

   function gt(e, t, i) {
    var o = t.destinyPos;
    if (a.css3) {
     var s = "translate3d(-" + n.round(o.left) + "px, 0px, 0px)";
     xt(e.find(_)).css(Jt(s)), Si = setTimeout(function() {
      i && vt(t)
     }, a.scrollingSpeed, a.easing)
    } else e.animate({
     scrollLeft: n.round(o.left)
    }, a.scrollingSpeed, a.easing, function() {
     i && vt(t)
    })
   }

   function yt(e, t) {
    e.find(m).removeClass(f), e.find("li").eq(t).find("a").addClass(f)
   }

   function wt() {
    if (bt(), hi) {
     var t = e(i.activeElement);
     if (!t.is("textarea") && !t.is("input") && !t.is("select")) {
      var o = te.height();
      n.abs(o - Ii) > 20 * n.max(Ii, o) / 100 && (fe(!0), Ii = o)
     }
    } else clearTimeout(xi), xi = setTimeout(function() {
     fe(!0)
    }, 350)
   }

   function bt() {
    var e = a.responsive || a.responsiveWidth,
     t = a.responsiveHeight,
     i = e && te.outerWidth() < e,
     n = t && te.height() < t;
    e && t ? me(i || n) : e ? me(i) : t && me(n)
   }

   function xt(e) {
    var t = "all " + a.scrollingSpeed + "ms " + a.easingcss3;
    return e.removeClass(d), e.css({
     "-webkit-transition": t,
     transition: t
    })
   }

   function Tt(e) {
    return e.addClass(d)
   }

   function St(t, i) {
    a.navigation && (e(P).find(m).removeClass(f), t ? e(P).find('a[href="#' + t + '"]').addClass(f) : e(P).find("li").eq(i).find("a").addClass(f))
   }

   function kt(t) {
    a.menu && (e(a.menu).find(m).removeClass(f), e(a.menu).find('[data-menuanchor="' + t + '"]').addClass(f))
   }

   function Ct(e, t) {
    kt(e), St(e, t)
   }

   function Et(t) {
    var i = e(x).index(b),
     n = t.index(b);
    return i == n ? "none" : i > n ? "up" : "down"
   }

   function $t(e, t) {
    return e == t ? "none" : e > t ? "left" : "right"
   }

   function At(e) {
    if (!e.hasClass("fp-noscroll")) {
     e.css("overflow", "hidden");
     var t, i = a.scrollOverflowHandler,
      n = i.wrapContent(),
      o = e.closest(b),
      s = i.scrollable(e);
     s.length ? t = i.scrollHeight(e) : (t = e.get(0).scrollHeight, a.verticalCentered && (t = e.find(C).get(0).scrollHeight));
     var r = mi - parseInt(o.css("padding-bottom")) - parseInt(o.css("padding-top"));
     t > r ? s.length ? i.update(e, r) : (a.verticalCentered ? e.find(C).wrapInner(n) : e.wrapInner(n), i.create(e, r)) : i.remove(e), e.css("overflow", "")
    }
   }

   function Pt(e) {
    e.hasClass(W) || e.addClass(W).wrapInner('<div class="' + k + '" style="height:' + Lt(e) + 'px;" />')
   }

   function Lt(e) {
    var t = mi;
    if (a.paddingTop || a.paddingBottom) {
     var i = e;
     i.hasClass(w) || (i = e.closest(b));
     var n = parseInt(i.css("padding-top")) + parseInt(i.css("padding-bottom"));
     t = mi - n
    }
    return t
   }

   function Ot(e, t) {
    t ? xt(fi) : Tt(fi), fi.css(Jt(e)), setTimeout(function() {
     fi.removeClass(d)
    }, 10)
   }

   function Ht(t) {
    var i = fi.find(b + '[data-anchor="' + t + '"]');
    return i.length || (i = e(b).eq(t - 1)), i
   }

   function Dt(e, t) {
    var i = t.find(z),
     n = i.find(N + '[data-anchor="' + e + '"]');
    return n.length || (n = i.find(N).eq(e)), n
   }

   function Mt(e, t) {
    var i = Ht(e);
    i.length && ("undefined" == typeof t && (t = 0), e === li || i.hasClass(f) ? Nt(i, t) : Be(i, function() {
     Nt(i, t)
    }))
   }

   function Nt(e, t) {
    if ("undefined" != typeof t) {
     var i = e.find(z),
      n = Dt(t, e);
     n.length && mt(i, n)
    }
   }

   function jt(e, t) {
    e.append('<div class="' + X + '"><ul></ul></div>');
    var i = e.find(R);
    i.addClass(a.slidesNavPosition);
    for (var n = 0; t > n; n++) i.find("ul").append('<li><a href="#"><span></span></a></li>');
    i.css("margin-left", "-" + i.width() / 2 + "px"), i.find("li").first().find("a").addClass(f)
   }

   function It(e, t, i, n) {
    var o = "";
    a.anchors.length && !a.lockAnchors && (e ? ("undefined" != typeof i && (o = i), "undefined" == typeof t && (t = e), ci = t, zt(o + "/" + t)) : "undefined" != typeof e ? (ci = t, zt(i)) : zt(i)), _t()
   }

   function zt(e) {
    if (a.recordHistory) location.hash = e;
    else if (hi || pi) t.history.replaceState(o, o, "#" + e);
    else {
     var i = t.location.href.split("#")[0];
     t.location.replace(i + "#" + e)
    }
   }

   function qt(e) {
    var t = e.data("anchor"),
     i = e.index();
    return "undefined" == typeof t && (t = i), t
   }

   function _t() {
    var t = e(x),
     i = t.find(j),
     n = qt(t),
     o = qt(i),
     s = String(n);
    i.length && (s = s + "-" + o), s = s.replace("/", "-").replace("#", "");
    var r = new RegExp("\\b\\s?" + p + "-[^\\s]+\\b", "g");
    ri[0].className = ri[0].className.replace(r, ""), ri.addClass(p + "-" + s)
   }

   function Wt() {
    var e, n = i.createElement("p"),
     s = {
      webkitTransform: "-webkit-transform",
      OTransform: "-o-transform",
      msTransform: "-ms-transform",
      MozTransform: "-moz-transform",
      transform: "transform"
     };
    i.body.insertBefore(n, null);
    for (var r in s) n.style[r] !== o && (n.style[r] = "translate3d(1px,1px,1px)", e = t.getComputedStyle(n).getPropertyValue(s[r]));
    return i.body.removeChild(n), e !== o && e.length > 0 && "none" !== e
   }

   function Xt() {
    i.addEventListener ? (i.removeEventListener("mousewheel", We, !1), i.removeEventListener("wheel", We, !1), i.removeEventListener("MozMousePixelScroll", We, !1)) : i.detachEvent("onmousewheel", We)
   }

   function Rt() {
    var e, n = "";
    t.addEventListener ? e = "addEventListener" : (e = "attachEvent", n = "on");
    var s = "onwheel" in i.createElement("div") ? "wheel" : i.onmousewheel !== o ? "mousewheel" : "DOMMouseScroll";
    "DOMMouseScroll" == s ? i[e](n + "MozMousePixelScroll", We, !1) : i[e](n + s, We, !1)
   }

   function Yt() {
    fi.on("mousedown", at).on("mouseup", lt)
   }

   function Bt() {
    fi.off("mousedown", at).off("mouseup", lt)
   }

   function Ft() {
    if (hi || pi) {
     var t = Vt();
     a.autoScrolling && ri.off("touchmove " + t.move).on("touchmove " + t.move, Ne), e(r).off("touchstart " + t.down).on("touchstart " + t.down, qe).off("touchmove " + t.move).on("touchmove " + t.move, je)
    }
   }

   function Ut() {
    if (hi || pi) {
     var t = Vt();
     e(r).off("touchstart " + t.down).off("touchmove " + t.move)
    }
   }

   function Vt() {
    var e;
    return e = t.PointerEvent ? {
     down: "pointerdown",
     move: "pointermove"
    } : {
     down: "MSPointerDown",
     move: "MSPointerMove"
    }
   }

   function Qt(e) {
    var t = [];
    return t.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, pi && ze(e) && a.scrollBar && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t
   }

   function Kt(e, t) {
    V(0, "internal"), "undefined" != typeof t && (vi = !0), mt(e.closest(z), e), "undefined" != typeof t && (vi = !1), V($i.scrollingSpeed, "internal")
   }

   function Gt(e) {
    var t = n.round(e);
    if (a.css3 && a.autoScrolling && !a.scrollBar) {
     var i = "translate3d(0px, -" + t + "px, 0px)";
     Ot(i, !1)
    } else a.autoScrolling && !a.scrollBar ? fi.css("top", -t) : si.scrollTop(t)
   }

   function Jt(e) {
    return {
     "-webkit-transform": e,
     "-moz-transform": e,
     "-ms-transform": e,
     transform: e
    }
   }

   function Zt(e, t, i) {
    switch (t) {
     case "up":
      bi[i].up = e;
      break;
     case "down":
      bi[i].down = e;
      break;
     case "left":
      bi[i].left = e;
      break;
     case "right":
      bi[i].right = e;
      break;
     case "all":
      "m" == i ? re(e) : ae(e)
    }
   }

   function ei(t) {
    l(!1, "internal"), re(!1), ae(!1), fi.addClass(u), clearTimeout(Si), clearTimeout(Ti), clearTimeout(xi), clearTimeout(ki), clearTimeout(Ci), te.off("scroll", Oe).off("hashchange", nt).off("resize", wt), ie.off("click touchstart", P + " a").off("mouseenter", P + " li").off("mouseleave", P + " li").off("click touchstart", Y).off("mouseover", a.normalScrollElements).off("mouseout", a.normalScrollElements), e(b).off("click touchstart", F), clearTimeout(Si), clearTimeout(Ti), t && ti()
   }

   function ti() {
    Gt(0), fi.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
     e(this).attr("src", e(this).data("src")), e(this).removeAttr("data-src")
    }), e(P + ", " + R + ", " + F).remove(), e(b).css({
     height: "",
     "background-color": "",
     padding: ""
    }), e(N).css({
     width: ""
    }), fi.css({
     height: "",
     position: "",
     "-ms-touch-action": "",
     "touch-action": ""
    }), si.css({
     overflow: "",
     height: ""
    }), e("html").removeClass(h), ri.removeClass(c), e.each(ri.get(0).className.split(/\s+/), function(e, t) {
     0 === t.indexOf(p) && ri.removeClass(t)
    }), e(b + ", " + N).each(function() {
     a.scrollOverflowHandler.remove(e(this)), e(this).removeClass(W + " " + f)
    }), Tt(fi), fi.find(C + ", " + _ + ", " + z).each(function() {
     e(this).replaceWith(this.childNodes)
    }), si.scrollTop(0);
    var t = [w, M, q];
    e.each(t, function(t, i) {
     e("." + i).removeClass(i)
    })
   }

   function ii(e, t, i) {
    a[e] = t, "internal" !== i && ($i[e] = t)
   }

   function ni() {
    var t = ["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset"];
    return e("html").hasClass(h) ? void oi("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (a.continuousVertical && (a.loopTop || a.loopBottom) && (a.continuousVertical = !1, oi("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), a.scrollBar && a.scrollOverflow && oi("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !a.continuousVertical || !a.scrollBar && a.autoScrolling || (a.continuousVertical = !1, oi("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
     e.each(t, function(e, t) {
      a[t] && oi("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + t)
     }), void e.each(a.anchors, function(t, i) {
      var n = ie.find("[name]").filter(function() {
        return e(this).attr("name") && e(this).attr("name").toLowerCase() == i.toLowerCase()
       }),
       o = ie.find("[id]").filter(function() {
        return e(this).attr("id") && e(this).attr("id").toLowerCase() == i.toLowerCase()
       });
      (o.length || n.length) && (oi("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), o.length && oi("error", '"' + i + '" is is being used by another element `id` property'), n.length && oi("error", '"' + i + '" is is being used by another element `name` property'))
     }))
   }

   function oi(e, t) {
    console && console[e] && console[e]("fullPage: " + t)
   }
   if (e("html").hasClass(h)) return void ni();
   var si = e("html, body"),
    ri = e("body"),
    ai = e.fn.fullpage;
   a = e.extend({
    menu: !1,
    anchors: [],
    lockAnchors: !1,
    navigation: !1,
    navigationPosition: "right",
    navigationTooltips: [],
    showActiveTooltip: !1,
    slidesNavigation: !1,
    slidesNavPosition: "bottom",
    scrollBar: !1,
    hybrid: !1,
    css3: !0,
    scrollingSpeed: 700,
    autoScrolling: !0,
    fitToSection: !0,
    fitToSectionDelay: 1e3,
    easing: "easeInOutCubic",
    easingcss3: "ease",
    loopBottom: !1,
    loopTop: !1,
    loopHorizontal: !0,
    continuousVertical: !1,
    continuousHorizontal: !1,
    scrollHorizontally: !1,
    interlockedSlides: !1,
    dragAndMove: !1,
    offsetSections: !1,
    resetSliders: !1,
    fadingEffect: !1,
    normalScrollElements: null,
    scrollOverflow: !1,
    scrollOverflowReset: !1,
    scrollOverflowHandler: oe,
    scrollOverflowOptions: null,
    touchSensitivity: 5,
    normalScrollElementTouchThreshold: 5,
    bigSectionsDestination: null,
    keyboardScrolling: !0,
    animateAnchor: !0,
    recordHistory: !0,
    controlArrows: !0,
    controlArrowColor: "#fff",
    verticalCentered: !0,
    sectionsColor: [],
    paddingTop: 0,
    paddingBottom: 0,
    fixedElements: null,
    responsive: 0,
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: !1,
    sectionSelector: y,
    slideSelector: D,
    afterLoad: null,
    onLeave: null,
    afterRender: null,
    afterResize: null,
    afterReBuild: null,
    afterSlideLoad: null,
    onSlideLeave: null,
    afterResponsive: null,
    lazyLoading: !0
   }, a);
   var li, ci, di, ui = !1,
    hi = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
    pi = "ontouchstart" in t || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
    fi = e(this),
    mi = te.height(),
    vi = !1,
    gi = !0,
    yi = !0,
    wi = [],
    bi = {};
   bi.m = {
    up: !0,
    down: !0,
    left: !0,
    right: !0
   }, bi.k = e.extend(!0, {}, bi.m);
   var xi, Ti, Si, ki, Ci, Ei, $i = e.extend(!0, {}, a);
   ni(), ne.click = pi, ne = e.extend(ne, a.scrollOverflowOptions), e.extend(e.easing, {
    easeInOutCubic: function(e, t, i, n, o) {
     return (t /= o / 2) < 1 ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i
    }
   }), e(this).length && (ai.setAutoScrolling = l, ai.setRecordHistory = B, ai.setScrollingSpeed = V, ai.setFitToSection = G, ai.setLockAnchors = J, ai.setMouseWheelScrolling = se, ai.setAllowScrolling = re, ai.setKeyboardScrolling = ae, ai.moveSectionUp = le, ai.moveSectionDown = ce, ai.silentMoveTo = de, ai.moveTo = ue, ai.moveSlideRight = he, ai.moveSlideLeft = pe, ai.reBuild = fe, ai.setResponsive = me, ai.destroy = ei, ve(), ge());
   var Ai = !1,
    Pi = 0,
    Li = 0,
    Oi = 0,
    Hi = 0,
    Di = 0,
    Mi = (new Date).getTime(),
    Ni = 0,
    ji = 0,
    Ii = mi
  }, "undefined" != typeof IScroll && (IScroll.prototype.wheelOn = function() {
   this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this)
  }, IScroll.prototype.wheelOff = function() {
   this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this)
  });
  var oe = {
   refreshId: null,
   iScrollInstances: [],
   toggleWheel: function(t) {
    var i = e(x).find(l);
    i.each(function() {
     var i = e(this).data("iscrollInstance");
     "undefined" != typeof i && i && (t ? i.wheelOn() : i.wheelOff())
    })
   },
   onLeave: function() {
    oe.toggleWheel(!1)
   },
   beforeLeave: function() {
    oe.onLeave()
   },
   afterLoad: function() {
    oe.toggleWheel(!0)
   },
   create: function(t, i) {
    var n = t.find(l);
    n.height(i), n.each(function() {
     var t = e(this),
      i = t.data("iscrollInstance");
     i && e.each(oe.iScrollInstances, function() {
      e(this).destroy()
     }), i = new IScroll(t.get(0), ne), oe.iScrollInstances.push(i), i.wheelOff(), t.data("iscrollInstance", i)
    })
   },
   isScrolled: function(e, t) {
    var i = t.data("iscrollInstance");
    return !i || ("top" === e ? i.y >= 0 && !t.scrollTop() : "bottom" === e ? 0 - i.y + t.scrollTop() + 1 + t.innerHeight() >= t[0].scrollHeight : void 0)
   },
   scrollable: function(e) {
    return e.find(z).length ? e.find(j).find(l) : e.find(l)
   },
   scrollHeight: function(e) {
    return e.find(l).children().first().get(0).scrollHeight
   },
   remove: function(e) {
    var t = e.find(l);
    if (t.length) {
     var i = t.data("iscrollInstance");
     i.destroy(), t.data("iscrollInstance", null)
    }
    e.find(l).children().first().children().first().unwrap().unwrap()
   },
   update: function(t, i) {
    clearTimeout(oe.refreshId), oe.refreshId = setTimeout(function() {
     e.each(oe.iScrollInstances, function() {
      e(this).get(0).refresh()
     })
    }, 150), t.find(l).css("height", i + "px").parent().css("height", i + "px")
   },
   wrapContent: function() {
    return '<div class="' + a + '"><div class="fp-scroller"></div></div>'
   }
  }
 }), ! function(e) {
  "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e("undefined" != typeof module && module.exports ? require("jquery") : jQuery)
 }(function(e) {
  "use strict";

  function t(t) {
   return !t || void 0 !== t.allowPageScroll || void 0 === t.swipe && void 0 === t.swipeStatus || (t.allowPageScroll = d), void 0 !== t.click && void 0 === t.tap && (t.tap = t.click), t || (t = {}), t = e.extend({}, e.fn.swipe.defaults, t), this.each(function() {
    var n = e(this),
     o = n.data(A);
    o || (o = new i(this, t), n.data(A, o))
   })
  }

  function i(t, i) {
   function n(t) {
    if (!(ce() || e(t.target).closest(i.excludedElements, Be).length > 0)) {
     var n = t.originalEvent ? t.originalEvent : t;
     if (!n.pointerType || "mouse" != n.pointerType || 0 != i.fallbackToMouseEvents) {
      var o, s = n.touches,
       r = s ? s[0] : n;
      return Fe = x, s ? Ue = s.length : i.preventDefaultEvents !== !1 && t.preventDefault(), Ne = 0, je = null, Ie = null, Re = null, ze = 0, qe = 0, _e = 0, We = 1, Xe = 0, Ye = ve(), ae(), ue(0, r), !s || Ue === i.fingers || i.fingers === w || R() ? (Qe = Ce(), 2 == Ue && (ue(1, s[1]), qe = _e = we(Ve[0].start, Ve[1].start)), (i.swipeStatus || i.pinchStatus) && (o = N(n, Fe))) : o = !1, o === !1 ? (Fe = k, N(n, Fe), o) : (i.hold && (tt = setTimeout(e.proxy(function() {
       Be.trigger("hold", [n.target]), i.hold && (o = i.hold.call(Be, n, n.target))
      }, this), i.longTapThreshold)), de(!0), null)
     }
    }
   }

   function P(e) {
    var t = e.originalEvent ? e.originalEvent : e;
    if (Fe !== S && Fe !== k && !le()) {
     var n, o = t.touches,
      s = o ? o[0] : t,
      r = he(s);
     if (Ke = Ce(), o && (Ue = o.length), i.hold && clearTimeout(tt), Fe = T, 2 == Ue && (0 == qe ? (ue(1, o[1]), qe = _e = we(Ve[0].start, Ve[1].start)) : (he(o[1]), _e = we(Ve[0].end, Ve[1].end), Re = xe(Ve[0].end, Ve[1].end)), We = be(qe, _e), Xe = Math.abs(qe - _e)), Ue === i.fingers || i.fingers === w || !o || R()) {
      if (je = ke(r.start, r.end), Ie = ke(r.last, r.end), W(e, Ie), Ne = Te(r.start, r.end), ze = ye(), fe(je, Ne), n = N(t, Fe), !i.triggerOnTouchEnd || i.triggerOnTouchLeave) {
       var a = !0;
       if (i.triggerOnTouchLeave) {
        var l = Ee(this);
        a = $e(r.end, l)
       }!i.triggerOnTouchEnd && a ? Fe = M(T) : i.triggerOnTouchLeave && !a && (Fe = M(S)), Fe != k && Fe != S || N(t, Fe)
      }
     } else Fe = k, N(t, Fe);
     n === !1 && (Fe = k, N(t, Fe))
    }
   }

   function L(e) {
    var t = e.originalEvent ? e.originalEvent : e,
     n = t.touches;
    if (n) {
     if (n.length && !le()) return re(t), !0;
     if (n.length && le()) return !0
    }
    return le() && (Ue = Je), Ke = Ce(), ze = ye(), z() || !I() ? (Fe = k, N(t, Fe)) : i.triggerOnTouchEnd || i.triggerOnTouchEnd === !1 && Fe === T ? (i.preventDefaultEvents !== !1 && e.cancelable !== !1 && e.preventDefault(), Fe = S, N(t, Fe)) : !i.triggerOnTouchEnd && K() ? (Fe = S, j(t, Fe, f)) : Fe === T && (Fe = k, N(t, Fe)), de(!1), null
   }

   function O() {
    Ue = 0, Ke = 0, Qe = 0, qe = 0, _e = 0, We = 1, ae(), de(!1)
   }

   function H(e) {
    var t = e.originalEvent ? e.originalEvent : e;
    i.triggerOnTouchLeave && (Fe = M(S), N(t, Fe))
   }

   function D() {
    Be.unbind(Le, n), Be.unbind(Me, O), Be.unbind(Oe, P), Be.unbind(He, L), De && Be.unbind(De, H), de(!1)
   }

   function M(e) {
    var t = e,
     n = _(),
     o = I(),
     s = z();
    return !n || s ? t = k : !o || e != T || i.triggerOnTouchEnd && !i.triggerOnTouchLeave ? !o && e == S && i.triggerOnTouchLeave && (t = k) : t = S, t
   }

   function N(e, t) {
    var i, n = e.touches;
    return (U() || F()) && (i = j(e, t, h)), (Y() || R()) && i !== !1 && (i = j(e, t, p)), oe() && i !== !1 ? i = j(e, t, m) : se() && i !== !1 ? i = j(e, t, v) : ne() && i !== !1 && (i = j(e, t, f)), t === k && O(e), t === S && (n ? n.length || O(e) : O(e)), i
   }

   function j(t, n, d) {
    var u;
    if (d == h) {
     if (Be.trigger("swipeStatus", [n, je || null, Ne || 0, ze || 0, Ue, Ve, Ie]), i.swipeStatus && (u = i.swipeStatus.call(Be, t, n, je || null, Ne || 0, ze || 0, Ue, Ve, Ie), u === !1)) return !1;
     if (n == S && B()) {
      if (clearTimeout(et), clearTimeout(tt), Be.trigger("swipe", [je, Ne, ze, Ue, Ve, Ie]), i.swipe && (u = i.swipe.call(Be, t, je, Ne, ze, Ue, Ve, Ie), u === !1)) return !1;
      switch (je) {
       case o:
        Be.trigger("swipeLeft", [je, Ne, ze, Ue, Ve, Ie]), i.swipeLeft && (u = i.swipeLeft.call(Be, t, je, Ne, ze, Ue, Ve, Ie));
        break;
       case s:
        Be.trigger("swipeRight", [je, Ne, ze, Ue, Ve, Ie]), i.swipeRight && (u = i.swipeRight.call(Be, t, je, Ne, ze, Ue, Ve, Ie));
        break;
       case r:
        Be.trigger("swipeUp", [je, Ne, ze, Ue, Ve, Ie]), i.swipeUp && (u = i.swipeUp.call(Be, t, je, Ne, ze, Ue, Ve, Ie));
        break;
       case a:
        Be.trigger("swipeDown", [je, Ne, ze, Ue, Ve, Ie]), i.swipeDown && (u = i.swipeDown.call(Be, t, je, Ne, ze, Ue, Ve, Ie))
      }
     }
    }
    if (d == p) {
     if (Be.trigger("pinchStatus", [n, Re || null, Xe || 0, ze || 0, Ue, We, Ve]), i.pinchStatus && (u = i.pinchStatus.call(Be, t, n, Re || null, Xe || 0, ze || 0, Ue, We, Ve), u === !1)) return !1;
     if (n == S && X()) switch (Re) {
      case l:
       Be.trigger("pinchIn", [Re || null, Xe || 0, ze || 0, Ue, We, Ve]), i.pinchIn && (u = i.pinchIn.call(Be, t, Re || null, Xe || 0, ze || 0, Ue, We, Ve));
       break;
      case c:
       Be.trigger("pinchOut", [Re || null, Xe || 0, ze || 0, Ue, We, Ve]), i.pinchOut && (u = i.pinchOut.call(Be, t, Re || null, Xe || 0, ze || 0, Ue, We, Ve))
     }
    }
    return d == f ? n !== k && n !== S || (clearTimeout(et), clearTimeout(tt), G() && !ee() ? (Ze = Ce(), et = setTimeout(e.proxy(function() {
     Ze = null, Be.trigger("tap", [t.target]), i.tap && (u = i.tap.call(Be, t, t.target))
    }, this), i.doubleTapThreshold)) : (Ze = null, Be.trigger("tap", [t.target]), i.tap && (u = i.tap.call(Be, t, t.target)))) : d == m ? n !== k && n !== S || (clearTimeout(et), clearTimeout(tt), Ze = null, Be.trigger("doubletap", [t.target]), i.doubleTap && (u = i.doubleTap.call(Be, t, t.target))) : d == v && (n !== k && n !== S || (clearTimeout(et), Ze = null, Be.trigger("longtap", [t.target]), i.longTap && (u = i.longTap.call(Be, t, t.target)))), u
   }

   function I() {
    var e = !0;
    return null !== i.threshold && (e = Ne >= i.threshold), e
   }

   function z() {
    var e = !1;
    return null !== i.cancelThreshold && null !== je && (e = me(je) - Ne >= i.cancelThreshold), e
   }

   function q() {
    return null === i.pinchThreshold || Xe >= i.pinchThreshold
   }

   function _() {
    var e;
    return e = !(i.maxTimeThreshold && ze >= i.maxTimeThreshold)
   }

   function W(e, t) {
    if (i.preventDefaultEvents !== !1)
     if (i.allowPageScroll === d) e.preventDefault();
     else {
      var n = i.allowPageScroll === u;
      switch (t) {
       case o:
        (i.swipeLeft && n || !n && i.allowPageScroll != g) && e.preventDefault();
        break;
       case s:
        (i.swipeRight && n || !n && i.allowPageScroll != g) && e.preventDefault();
        break;
       case r:
        (i.swipeUp && n || !n && i.allowPageScroll != y) && e.preventDefault();
        break;
       case a:
        (i.swipeDown && n || !n && i.allowPageScroll != y) && e.preventDefault();
        break;
       case d:
      }
     }
   }

   function X() {
    var e = V(),
     t = Q(),
     i = q();
    return e && t && i
   }

   function R() {
    return !!(i.pinchStatus || i.pinchIn || i.pinchOut)
   }

   function Y() {
    return !(!X() || !R())
   }

   function B() {
    var e = _(),
     t = I(),
     i = V(),
     n = Q(),
     o = z(),
     s = !o && n && i && t && e;
    return s
   }

   function F() {
    return !!(i.swipe || i.swipeStatus || i.swipeLeft || i.swipeRight || i.swipeUp || i.swipeDown)
   }

   function U() {
    return !(!B() || !F())
   }

   function V() {
    return Ue === i.fingers || i.fingers === w || !C
   }

   function Q() {
    return 0 !== Ve[0].end.x
   }

   function K() {
    return !!i.tap
   }

   function G() {
    return !!i.doubleTap
   }

   function J() {
    return !!i.longTap
   }

   function Z() {
    if (null == Ze) return !1;
    var e = Ce();
    return G() && e - Ze <= i.doubleTapThreshold
   }

   function ee() {
    return Z()
   }

   function te() {
    return (1 === Ue || !C) && (isNaN(Ne) || Ne < i.threshold)
   }

   function ie() {
    return ze > i.longTapThreshold && Ne < b
   }

   function ne() {
    return !(!te() || !K())
   }

   function oe() {
    return !(!Z() || !G())
   }

   function se() {
    return !(!ie() || !J())
   }

   function re(e) {
    Ge = Ce(), Je = e.touches.length + 1
   }

   function ae() {
    Ge = 0, Je = 0
   }

   function le() {
    var e = !1;
    if (Ge) {
     var t = Ce() - Ge;
     t <= i.fingerReleaseThreshold && (e = !0)
    }
    return e
   }

   function ce() {
    return !(Be.data(A + "_intouch") !== !0)
   }

   function de(e) {
    Be && (e === !0 ? (Be.bind(Oe, P), Be.bind(He, L), De && Be.bind(De, H)) : (Be.unbind(Oe, P, !1), Be.unbind(He, L, !1), De && Be.unbind(De, H, !1)), Be.data(A + "_intouch", e === !0))
   }

   function ue(e, t) {
    var i = {
     start: {
      x: 0,
      y: 0
     },
     last: {
      x: 0,
      y: 0
     },
     end: {
      x: 0,
      y: 0
     }
    };
    return i.start.x = i.last.x = i.end.x = t.pageX || t.clientX, i.start.y = i.last.y = i.end.y = t.pageY || t.clientY, Ve[e] = i, i
   }

   function he(e) {
    var t = void 0 !== e.identifier ? e.identifier : 0,
     i = pe(t);
    return null === i && (i = ue(t, e)), i.last.x = i.end.x, i.last.y = i.end.y, i.end.x = e.pageX || e.clientX, i.end.y = e.pageY || e.clientY, i
   }

   function pe(e) {
    return Ve[e] || null
   }

   function fe(e, t) {
    e != d && (t = Math.max(t, me(e)), Ye[e].distance = t)
   }

   function me(e) {
    if (Ye[e]) return Ye[e].distance
   }

   function ve() {
    var e = {};
    return e[o] = ge(o), e[s] = ge(s), e[r] = ge(r), e[a] = ge(a), e
   }

   function ge(e) {
    return {
     direction: e,
     distance: 0
    }
   }

   function ye() {
    return Ke - Qe
   }

   function we(e, t) {
    var i = Math.abs(e.x - t.x),
     n = Math.abs(e.y - t.y);
    return Math.round(Math.sqrt(i * i + n * n))
   }

   function be(e, t) {
    var i = t / e * 1;
    return i.toFixed(2)
   }

   function xe() {
    return We < 1 ? c : l
   }

   function Te(e, t) {
    return Math.round(Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)))
   }

   function Se(e, t) {
    var i = e.x - t.x,
     n = t.y - e.y,
     o = Math.atan2(n, i),
     s = Math.round(180 * o / Math.PI);
    return s < 0 && (s = 360 - Math.abs(s)), s
   }

   function ke(e, t) {
    if (Ae(e, t)) return d;
    var i = Se(e, t);
    return i <= 45 && i >= 0 ? o : i <= 360 && i >= 315 ? o : i >= 135 && i <= 225 ? s : i > 45 && i < 135 ? a : r
   }

   function Ce() {
    var e = new Date;
    return e.getTime()
   }

   function Ee(t) {
    t = e(t);
    var i = t.offset(),
     n = {
      left: i.left,
      right: i.left + t.outerWidth(),
      top: i.top,
      bottom: i.top + t.outerHeight()
     };
    return n
   }

   function $e(e, t) {
    return e.x > t.left && e.x < t.right && e.y > t.top && e.y < t.bottom
   }

   function Ae(e, t) {
    return e.x == t.x && e.y == t.y
   }
   var i = e.extend({}, i),
    Pe = C || $ || !i.fallbackToMouseEvents,
    Le = Pe ? $ ? E ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
    Oe = Pe ? $ ? E ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
    He = Pe ? $ ? E ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
    De = Pe ? $ ? "mouseleave" : null : "mouseleave",
    Me = $ ? E ? "MSPointerCancel" : "pointercancel" : "touchcancel",
    Ne = 0,
    je = null,
    Ie = null,
    ze = 0,
    qe = 0,
    _e = 0,
    We = 1,
    Xe = 0,
    Re = 0,
    Ye = null,
    Be = e(t),
    Fe = "start",
    Ue = 0,
    Ve = {},
    Qe = 0,
    Ke = 0,
    Ge = 0,
    Je = 0,
    Ze = 0,
    et = null,
    tt = null;
   try {
    Be.bind(Le, n), Be.bind(Me, O)
   } catch (t) {
    e.error("events not supported " + Le + "," + Me + " on jQuery.swipe")
   }
   this.enable = function() {
    return this.disable(), Be.bind(Le, n), Be.bind(Me, O), Be
   }, this.disable = function() {
    return D(), Be
   }, this.destroy = function() {
    D(), Be.data(A, null), Be = null
   }, this.option = function(t, n) {
    if ("object" == typeof t) i = e.extend(i, t);
    else if (void 0 !== i[t]) {
     if (void 0 === n) return i[t];
     i[t] = n
    } else {
     if (!t) return i;
     e.error("Option " + t + " does not exist on jQuery.swipe.options")
    }
    return null
   }
  }
  var n = "1.6.18",
   o = "left",
   s = "right",
   r = "up",
   a = "down",
   l = "in",
   c = "out",
   d = "none",
   u = "auto",
   h = "swipe",
   p = "pinch",
   f = "tap",
   m = "doubletap",
   v = "longtap",
   g = "horizontal",
   y = "vertical",
   w = "all",
   b = 10,
   x = "start",
   T = "move",
   S = "end",
   k = "cancel",
   C = "ontouchstart" in window,
   E = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !C,
   $ = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !C,
   A = "TouchSwipe",
   P = {
    fingers: 1,
    threshold: 75,
    cancelThreshold: null,
    pinchThreshold: 20,
    maxTimeThreshold: null,
    fingerReleaseThreshold: 250,
    longTapThreshold: 500,
    doubleTapThreshold: 200,
    swipe: null,
    swipeLeft: null,
    swipeRight: null,
    swipeUp: null,
    swipeDown: null,
    swipeStatus: null,
    pinchIn: null,
    pinchOut: null,
    pinchStatus: null,
    click: null,
    tap: null,
    doubleTap: null,
    longTap: null,
    hold: null,
    triggerOnTouchEnd: !0,
    triggerOnTouchLeave: !1,
    allowPageScroll: "auto",
    fallbackToMouseEvents: !0,
    excludedElements: ".noSwipe",
    preventDefaultEvents: !0
   };
  e.fn.swipe = function(i) {
   var n = e(this),
    o = n.data(A);
   if (o && "string" == typeof i) {
    if (o[i]) return o[i].apply(o, Array.prototype.slice.call(arguments, 1));
    e.error("Method " + i + " does not exist on jQuery.swipe")
   } else if (o && "object" == typeof i) o.option.apply(o, arguments);
   else if (!(o || "object" != typeof i && i)) return t.apply(this, arguments);
   return n
  }, e.fn.swipe.version = n, e.fn.swipe.defaults = P, e.fn.swipe.phases = {
   PHASE_START: x,
   PHASE_MOVE: T,
   PHASE_END: S,
   PHASE_CANCEL: k
  }, e.fn.swipe.directions = {
   LEFT: o,
   RIGHT: s,
   UP: r,
   DOWN: a,
   IN: l,
   OUT: c
  }, e.fn.swipe.pageScroll = {
   NONE: d,
   HORIZONTAL: g,
   VERTICAL: y,
   AUTO: u
  }, e.fn.swipe.fingers = {
   ONE: 1,
   TWO: 2,
   THREE: 3,
   FOUR: 4,
   FIVE: 5,
   ALL: w
  }
 }),
 function() {
  var e = [].indexOf || function(e) {
    for (var t = 0, i = this.length; t < i; t++)
     if (t in this && this[t] === e) return t;
    return -1
   },
   t = [].slice;
  ! function(e, t) {
   return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(i) {
    return t(i, e)
   }) : t(e.jQuery, e)
  }(window, function(i, n) {
   var o, s, r, a, l, c, d, u, h, p, f, m, v, g, y, w;
   return o = i(n), u = e.call(n, "ontouchstart") >= 0, a = {
    horizontal: {},
    vertical: {}
   }, l = 1, d = {}, c = "waypoints-context-id", f = "resize.waypoints", m = "scroll.waypoints", v = 1, g = "waypoints-waypoint-ids", y = "waypoint", w = "waypoints", s = function() {
    function e(e) {
     var t = this;
     this.$element = e, this.element = e[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + l++, this.oldScroll = {
      x: e.scrollLeft(),
      y: e.scrollTop()
     }, this.waypoints = {
      horizontal: {},
      vertical: {}
     }, this.element[c] = this.id, d[this.id] = this, e.bind(m, function() {
      var e;
      if (!t.didScroll && !u) return t.didScroll = !0, e = function() {
       return t.doScroll(), t.didScroll = !1
      }, n.setTimeout(e, i[w].settings.scrollThrottle)
     }), e.bind(f, function() {
      var e;
      if (!t.didResize) return t.didResize = !0, e = function() {
       return i[w]("refresh"), t.didResize = !1
      }, n.setTimeout(e, i[w].settings.resizeThrottle)
     })
    }
    return e.prototype.doScroll = function() {
     var e, t = this;
     return e = {
      horizontal: {
       newScroll: this.$element.scrollLeft(),
       oldScroll: this.oldScroll.x,
       forward: "right",
       backward: "left"
      },
      vertical: {
       newScroll: this.$element.scrollTop(),
       oldScroll: this.oldScroll.y,
       forward: "down",
       backward: "up"
      }
     }, !u || e.vertical.oldScroll && e.vertical.newScroll || i[w]("refresh"), i.each(e, function(e, n) {
      var o, s, r;
      return r = [], s = n.newScroll > n.oldScroll, o = s ? n.forward : n.backward, i.each(t.waypoints[e], function(e, t) {
       var i, o;
       return n.oldScroll < (i = t.offset) && i <= n.newScroll ? r.push(t) : n.newScroll < (o = t.offset) && o <= n.oldScroll ? r.push(t) : void 0
      }), r.sort(function(e, t) {
       return e.offset - t.offset
      }), s || r.reverse(), i.each(r, function(e, t) {
       if (t.options.continuous || e === r.length - 1) return t.trigger([o])
      })
     }), this.oldScroll = {
      x: e.horizontal.newScroll,
      y: e.vertical.newScroll
     }
    }, e.prototype.refresh = function() {
     var e, t, n, o = this;
     return n = i.isWindow(this.element), t = this.$element.offset(), this.doScroll(), e = {
      horizontal: {
       contextOffset: n ? 0 : t.left,
       contextScroll: n ? 0 : this.oldScroll.x,
       contextDimension: this.$element.width(),
       oldScroll: this.oldScroll.x,
       forward: "right",
       backward: "left",
       offsetProp: "left"
      },
      vertical: {
       contextOffset: n ? 0 : t.top,
       contextScroll: n ? 0 : this.oldScroll.y,
       contextDimension: n ? i[w]("viewportHeight") : this.$element.height(),
       oldScroll: this.oldScroll.y,
       forward: "down",
       backward: "up",
       offsetProp: "top"
      }
     }, i.each(e, function(e, t) {
      return i.each(o.waypoints[e], function(e, n) {
       var o, s, r, a, l;
       if (o = n.options.offset, r = n.offset, s = i.isWindow(n.element) ? 0 : n.$element.offset()[t.offsetProp], i.isFunction(o) ? o = o.apply(n.element) : "string" == typeof o && (o = parseFloat(o), n.options.offset.indexOf("%") > -1 && (o = Math.ceil(t.contextDimension * o / 100))), n.offset = s - t.contextOffset + t.contextScroll - o, (!n.options.onlyOnScroll || null == r) && n.enabled) return null !== r && r < (a = t.oldScroll) && a <= n.offset ? n.trigger([t.backward]) : null !== r && r > (l = t.oldScroll) && l >= n.offset ? n.trigger([t.forward]) : null === r && t.oldScroll >= n.offset ? n.trigger([t.forward]) : void 0
      })
     })
    }, e.prototype.checkEmpty = function() {
     if (i.isEmptyObject(this.waypoints.horizontal) && i.isEmptyObject(this.waypoints.vertical)) return this.$element.unbind([f, m].join(" ")), delete d[this.id]
    }, e
   }(), r = function() {
    function e(e, t, n) {
     var o, s;
     "bottom-in-view" === n.offset && (n.offset = function() {
      var e;
      return e = i[w]("viewportHeight"), i.isWindow(t.element) || (e = t.$element.height()), e - i(this).outerHeight()
     }), this.$element = e, this.element = e[0], this.axis = n.horizontal ? "horizontal" : "vertical", this.callback = n.handler, this.context = t, this.enabled = n.enabled, this.id = "waypoints" + v++, this.offset = null, this.options = n, t.waypoints[this.axis][this.id] = this, a[this.axis][this.id] = this, o = null != (s = this.element[g]) ? s : [], o.push(this.id), this.element[g] = o
    }
    return e.prototype.trigger = function(e) {
     if (this.enabled) return null != this.callback && this.callback.apply(this.element, e), this.options.triggerOnce ? this.destroy() : void 0
    }, e.prototype.disable = function() {
     return this.enabled = !1
    }, e.prototype.enable = function() {
     return this.context.refresh(), this.enabled = !0
    }, e.prototype.destroy = function() {
     return delete a[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
    }, e.getWaypointsByElement = function(e) {
     var t, n;
     return (n = e[g]) ? (t = i.extend({}, a.horizontal, a.vertical), i.map(n, function(e) {
      return t[e]
     })) : []
    }, e
   }(), p = {
    init: function(e, t) {
     var n;
     return t = i.extend({}, i.fn[y].defaults, t), null == (n = t.handler) && (t.handler = e), this.each(function() {
      var e, n, o, a;
      return e = i(this), o = null != (a = t.context) ? a : i.fn[y].defaults.context, i.isWindow(o) || (o = e.closest(o)), o = i(o), n = d[o[0][c]], n || (n = new s(o)), new r(e, n, t)
     }), i[w]("refresh"), this
    },
    disable: function() {
     return p._invoke.call(this, "disable")
    },
    enable: function() {
     return p._invoke.call(this, "enable")
    },
    destroy: function() {
     return p._invoke.call(this, "destroy")
    },
    prev: function(e, t) {
     return p._traverse.call(this, e, t, function(e, t, i) {
      if (t > 0) return e.push(i[t - 1])
     })
    },
    next: function(e, t) {
     return p._traverse.call(this, e, t, function(e, t, i) {
      if (t < i.length - 1) return e.push(i[t + 1])
     })
    },
    _traverse: function(e, t, o) {
     var s, r;
     return null == e && (e = "vertical"), null == t && (t = n), r = h.aggregate(t), s = [], this.each(function() {
      var t;
      return t = i.inArray(this, r[e]), o(s, t, r[e])
     }), this.pushStack(s)
    },
    _invoke: function(e) {
     return this.each(function() {
      var t;
      return t = r.getWaypointsByElement(this), i.each(t, function(t, i) {
       return i[e](), !0
      })
     }), this
    }
   }, i.fn[y] = function() {
    var e, n;
    return n = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], p[n] ? p[n].apply(this, e) : i.isFunction(n) ? p.init.apply(this, arguments) : i.isPlainObject(n) ? p.init.apply(this, [null, n]) : n ? i.error("The " + n + " method does not exist in jQuery Waypoints.") : i.error("jQuery Waypoints needs a callback function or handler option.")
   }, i.fn[y].defaults = {
    context: n,
    continuous: !0,
    enabled: !0,
    horizontal: !1,
    offset: 0,
    triggerOnce: !1
   }, h = {
    refresh: function() {
     return i.each(d, function(e, t) {
      return t.refresh()
     })
    },
    viewportHeight: function() {
     var e;
     return null != (e = n.innerHeight) ? e : o.height()
    },
    aggregate: function(e) {
     var t, n, o;
     return t = a, e && (t = null != (o = d[i(e)[0][c]]) ? o.waypoints : void 0), t ? (n = {
      horizontal: [],
      vertical: []
     }, i.each(n, function(e, o) {
      return i.each(t[e], function(e, t) {
       return o.push(t)
      }), o.sort(function(e, t) {
       return e.offset - t.offset
      }), n[e] = i.map(o, function(e) {
       return e.element
      }), n[e] = i.unique(n[e])
     }), n) : []
    },
    above: function(e) {
     return null == e && (e = n), h._filter(e, "vertical", function(e, t) {
      return t.offset <= e.oldScroll.y
     })
    },
    below: function(e) {
     return null == e && (e = n), h._filter(e, "vertical", function(e, t) {
      return t.offset > e.oldScroll.y
     })
    },
    left: function(e) {
     return null == e && (e = n), h._filter(e, "horizontal", function(e, t) {
      return t.offset <= e.oldScroll.x
     })
    },
    right: function(e) {
     return null == e && (e = n), h._filter(e, "horizontal", function(e, t) {
      return t.offset > e.oldScroll.x
     })
    },
    enable: function() {
     return h._invoke("enable")
    },
    disable: function() {
     return h._invoke("disable")
    },
    destroy: function() {
     return h._invoke("destroy")
    },
    extendFn: function(e, t) {
     return p[e] = t
    },
    _invoke: function(e) {
     var t;
     return t = i.extend({}, a.vertical, a.horizontal), i.each(t, function(t, i) {
      return i[e](), !0
     })
    },
    _filter: function(e, t, n) {
     var o, s;
     return (o = d[i(e)[0][c]]) ? (s = [], i.each(o.waypoints[t], function(e, t) {
      if (n(o, t)) return s.push(t)
     }), s.sort(function(e, t) {
      return e.offset - t.offset
     }), i.map(s, function(e) {
      return e.element
     })) : []
    }
   }, i[w] = function() {
    var e, i;
    return i = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], h[i] ? h[i].apply(null, e) : h.aggregate.call(null, i)
   }, i[w].settings = {
    resizeThrottle: 100,
    scrollThrottle: 30
   }, o.on("load.waypoints", function() {
    return i[w]("refresh")
   })
  })
 }.call(this),
 function(e, t, i, n) {
  function o(t, i) {
   var s = this;
   "object" == typeof i && (delete i.refresh, delete i.render, e.extend(this, i)), this.$element = e(t), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
   var r = (this.position + "").toLowerCase().match(/\S+/g) || [];
   if (r.length < 1 && r.push("center"), 1 == r.length && r.push(r[0]), "top" != r[0] && "bottom" != r[0] && "left" != r[1] && "right" != r[1] || (r = [r[1], r[0]]), this.positionX != n && (r[0] = this.positionX.toLowerCase()), this.positionY != n && (r[1] = this.positionY.toLowerCase()), s.positionX = r[0], s.positionY = r[1], "left" != this.positionX && "right" != this.positionX && (isNaN(parseInt(this.positionX)) ? this.positionX = "center" : this.positionX = parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (isNaN(parseInt(this.positionY)) ? this.positionY = "center" : this.positionY = parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({
    backgroundImage: "url(" + this.imageSrc + ")",
    backgroundSize: "cover",
    backgroundPosition: this.position
   }), this;
   if (navigator.userAgent.match(/(Android)/)) return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({
    backgroundImage: "url(" + this.imageSrc + ")",
    backgroundSize: "cover",
    backgroundPosition: this.position
   }), this;
   this.$mirror = e("<div />").prependTo("body");
   var a = this.$element.find(">.parallax-slider"),
    l = !1;
   0 == a.length ? this.$slider = e("<img />").prependTo(this.$mirror) : (this.$slider = a.prependTo(this.$mirror), l = !0), this.$mirror.addClass("parallax-mirror").css({
    visibility: "hidden",
    zIndex: this.zIndex,
    position: "fixed",
    top: 0,
    left: 0,
    overflow: "hidden"
   }), this.$slider.addClass("parallax-slider").one("load", function() {
    s.naturalHeight && s.naturalWidth || (s.naturalHeight = this.naturalHeight || this.height || 1, s.naturalWidth = this.naturalWidth || this.width || 1), s.aspectRatio = s.naturalWidth / s.naturalHeight, o.isSetup || o.setup(), o.sliders.push(s), o.isFresh = !1, o.requestRender()
   }), l || (this.$slider[0].src = this.imageSrc), (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || a.length > 0) && this.$slider.trigger("load")
  }

  function s(n) {
   return this.each(function() {
    var s = e(this),
     r = "object" == typeof n && n;
    this == t || this == i || s.is("body") ? o.configure(r) : s.data("px.parallax") ? "object" == typeof n && e.extend(s.data("px.parallax"), r) : (r = e.extend({}, s.data(), r), s.data("px.parallax", new o(this, r))), "string" == typeof n && ("destroy" == n ? o.destroy(this) : o[n]())
   })
  }! function() {
   for (var e = 0, i = ["ms", "moz", "webkit", "o"], n = 0; n < i.length && !t.requestAnimationFrame; ++n) t.requestAnimationFrame = t[i[n] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[i[n] + "CancelAnimationFrame"] || t[i[n] + "CancelRequestAnimationFrame"];
   t.requestAnimationFrame || (t.requestAnimationFrame = function(i) {
    var n = (new Date).getTime(),
     o = Math.max(0, 16 - (n - e)),
     s = t.setTimeout(function() {
      i(n + o)
     }, o);
    return e = n + o, s
   }), t.cancelAnimationFrame || (t.cancelAnimationFrame = function(e) {
    clearTimeout(e)
   })
  }(), e.extend(o.prototype, {
   speed: .2,
   bleed: 0,
   zIndex: -100,
   iosFix: !0,
   androidFix: !0,
   position: "center",
   overScrollFix: !1,
   refresh: function() {
    this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
    var e = o.winHeight,
     t = o.docHeight,
     i = Math.min(this.boxOffsetTop, t - e),
     n = Math.max(this.boxOffsetTop + this.boxHeight - e, 0),
     s = this.boxHeight + (i - n) * (1 - this.speed) | 0,
     r = (this.boxOffsetTop - i) * (1 - this.speed) | 0;
    if (s * this.aspectRatio >= this.boxWidth) {
     this.imageWidth = s * this.aspectRatio | 0, this.imageHeight = s, this.offsetBaseTop = r;
     var a = this.imageWidth - this.boxWidth;
     "left" == this.positionX ? this.offsetLeft = 0 : "right" == this.positionX ? this.offsetLeft = -a : isNaN(this.positionX) ? this.offsetLeft = -a / 2 | 0 : this.offsetLeft = Math.max(this.positionX, -a)
    } else {
     this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0;
     var a = this.imageHeight - s;
     "top" == this.positionY ? this.offsetBaseTop = r : "bottom" == this.positionY ? this.offsetBaseTop = r - a : isNaN(this.positionY) ? this.offsetBaseTop = r - a / 2 | 0 : this.offsetBaseTop = r + Math.max(this.positionY, -a)
    }
   },
   render: function() {
    var e = o.scrollTop,
     t = o.scrollLeft,
     i = this.overScrollFix ? o.overScroll : 0,
     n = e + o.winHeight;
    this.boxOffsetBottom > e && this.boxOffsetTop <= n ? (this.visibility = "visible", this.mirrorTop = this.boxOffsetTop - e, this.mirrorLeft = this.boxOffsetLeft - t, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden", this.$mirror.css({
     transform: "translate3d(0px, 0px, 0px)",
     visibility: this.visibility,
     top: this.mirrorTop - i,
     left: this.mirrorLeft,
     height: this.boxHeight,
     width: this.boxWidth
    }), this.$slider.css({
     transform: "translate3d(0px, 0px, 0px)",
     position: "absolute",
     top: this.offsetTop,
     left: this.offsetLeft,
     height: this.imageHeight,
     width: this.imageWidth,
     maxWidth: "none"
    })
   }
  }), e.extend(o, {
   scrollTop: 0,
   scrollLeft: 0,
   winHeight: 0,
   winWidth: 0,
   docHeight: 1 << 30,
   docWidth: 1 << 30,
   sliders: [],
   isReady: !1,
   isFresh: !1,
   isBusy: !1,
   setup: function() {
    if (!this.isReady) {
     var n = e(i),
      s = e(t),
      r = function() {
       o.winHeight = s.height(), o.winWidth = s.width(), o.docHeight = n.height(), o.docWidth = n.width()
      },
      a = function() {
       var e = s.scrollTop(),
        t = o.docHeight - o.winHeight,
        i = o.docWidth - o.winWidth;
       o.scrollTop = Math.max(0, Math.min(t, e)), o.scrollLeft = Math.max(0, Math.min(i, s.scrollLeft())), o.overScroll = Math.max(e - t, Math.min(e, 0))
      };
     s.on("resize.px.parallax load.px.parallax", function() {
      r(), o.isFresh = !1, o.requestRender()
     }).on("scroll.px.parallax load.px.parallax", function() {
      a(), o.requestRender()
     }), r(), a(), this.isReady = !0
    }
   },
   configure: function(t) {
    "object" == typeof t && (delete t.refresh, delete t.render, e.extend(this.prototype, t))
   },
   refresh: function() {
    e.each(this.sliders, function() {
     this.refresh()
    }), this.isFresh = !0
   },
   render: function() {
    this.isFresh || this.refresh(), e.each(this.sliders, function() {
     this.render()
    })
   },
   requestRender: function() {
    var e = this;
    this.isBusy || (this.isBusy = !0, t.requestAnimationFrame(function() {
     e.render(), e.isBusy = !1
    }))
   },
   destroy: function(i) {
    var n, s = e(i).data("px.parallax");
    for (s.$mirror.remove(), n = 0; n < this.sliders.length; n += 1) this.sliders[n] == s && this.sliders.splice(n, 1);
    e(i).data("px.parallax", !1), 0 === this.sliders.length && (e(t).off("scroll.px.parallax resize.px.parallax load.px.parallax"), this.isReady = !1, o.isSetup = !1)
   }
  });
  var r = e.fn.parallax;
  e.fn.parallax = s, e.fn.parallax.Constructor = o, e.fn.parallax.noConflict = function() {
   return e.fn.parallax = r, this
  }, e(i).on("ready.px.parallax.data-api", function() {
   e('[data-parallax="scroll"]').parallax()
  })
 }(jQuery, window, document), ! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e.Vimeo = e.Vimeo || {}, e.Vimeo.Player = t())
 }(this, function() {
  "use strict";

  function e(e, t) {
   return t = {
    exports: {}
   }, e(t, t.exports), t.exports
  }

  function t(e, t, i) {
   var n = S.get(e.element) || {};
   t in n || (n[t] = []), n[t].push(i), S.set(e.element, n)
  }

  function i(e, t) {
   var i = S.get(e.element) || {};
   return i[t] || []
  }

  function n(e, t, i) {
   var n = S.get(e.element) || {};
   if (!n[t]) return !0;
   if (!i) return n[t] = [], S.set(e.element, n), !0;
   var o = n[t].indexOf(i);
   return o !== -1 && n[t].splice(o, 1), S.set(e.element, n), n[t] && 0 === n[t].length
  }

  function o(e, t) {
   var o = i(e, t);
   if (o.length < 1) return !1;
   var s = o.shift();
   return n(e, t, s), s
  }

  function s(e, t) {
   var i = S.get(e);
   S.set(t, i), S.delete(e)
  }

  function r(e, t) {
   return 0 === e.indexOf(t.toLowerCase()) ? e : "" + t.toLowerCase() + e.substr(0, 1).toUpperCase() + e.substr(1)
  }

  function a(e) {
   return e instanceof window.HTMLElement
  }

  function l(e) {
   return !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e
  }

  function c(e) {
   return /^(https?:)?\/\/(player.)?vimeo.com(?=$|\/)/.test(e)
  }

  function d() {
   var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    t = e.id,
    i = e.url,
    n = t || i;
   if (!n) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
   if (l(n)) return "https://vimeo.com/" + n;
   if (c(n)) return n.replace("http:", "https:");
   if (t) throw new TypeError("â€œ" + t + "â€ is not a valid video id.");
   throw new TypeError("â€œ" + n + "â€ is not a vimeo.com url.")
  }

  function u(e) {
   var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
   return k.reduce(function(t, i) {
    var n = e.getAttribute("data-vimeo-" + i);
    return (n || "" === n) && (t[i] = "" === n ? 1 : n), t
   }, t)
  }

  function h(e) {
   var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
   return new Promise(function(i, n) {
    if (!c(e)) throw new TypeError("â€œ" + e + "â€ is not a vimeo.com url.");
    var o = "https://vimeo.com/api/oembed.json?url=" + encodeURIComponent(e);
    for (var s in t) t.hasOwnProperty(s) && (o += "&" + s + "=" + encodeURIComponent(t[s]));
    var r = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
    r.open("GET", o, !0), r.onload = function() {
     if (404 === r.status) return void n(new Error("â€œ" + e + "â€ was not found."));
     if (403 === r.status) return void n(new Error("â€œ" + e + "â€ is not embeddable."));
     try {
      var t = JSON.parse(r.responseText);
      i(t)
     } catch (e) {
      n(e)
     }
    }, r.onerror = function() {
     var e = r.status ? " (" + r.status + ")" : "";
     n(new Error("There was an error fetching the embed code from Vimeo" + e + "."))
    }, r.send()
   })
  }

  function p(e, t) {
   var i = e.html;
   if (!t) throw new TypeError("An element must be provided");
   if (null !== t.getAttribute("data-vimeo-initialized")) return t.querySelector("iframe");
   var n = document.createElement("div");
   return n.innerHTML = i, t.appendChild(n.firstChild), t.setAttribute("data-vimeo-initialized", "true"), t.querySelector("iframe")
  }

  function f() {
   var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
    t = [].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
    i = function(e) {
     "console" in window && console.error && console.error("There was an error creating an embed: " + e)
    };
   t.forEach(function(e) {
    try {
     if (null !== e.getAttribute("data-vimeo-defer")) return;
     var t = u(e),
      n = d(t);
     h(n, t).then(function(t) {
      return p(t, e)
     }).catch(i)
    } catch (e) {
     i(e)
    }
   })
  }

  function m(e) {
   return "string" == typeof e && (e = JSON.parse(e)), e
  }

  function v(e, t, i) {
   if (e.element.contentWindow.postMessage) {
    var n = {
     method: t
    };
    void 0 !== i && (n.value = i);
    var o = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
    o >= 8 && o < 10 && (n = JSON.stringify(n)), e.element.contentWindow.postMessage(n, e.origin)
   }
  }

  function g(e, t) {
   t = m(t);
   var s = [],
    r = void 0;
   if (t.event) {
    if ("error" === t.event) {
     var a = i(e, t.data.method);
     a.forEach(function(i) {
      var o = new Error(t.data.message);
      o.name = t.data.name, i.reject(o), n(e, t.data.method, i)
     })
    }
    s = i(e, "event:" + t.event), r = t.data
   } else if (t.method) {
    var l = o(e, t.method);
    l && (s.push(l), r = t.value)
   }
   s.forEach(function(t) {
    try {
     if ("function" == typeof t) return void t.call(e, r);
     t.resolve(r)
    } catch (e) {}
   })
  }

  function y(e, t) {
   if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  var w = "undefined" != typeof Array.prototype.indexOf,
   b = "undefined" != typeof window.postMessage;
  if (!w || !b) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
  var x = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
   T = (e(function(e, t) {
    ! function(e) {
     function t(e, t) {
      function n(e) {
       return this && this.constructor === n ? (this._keys = [], this._values = [], this._itp = [], this.objectOnly = t, void(e && i.call(this, e))) : new n(e)
      }
      return t || w(e, "size", {
       get: v
      }), e.constructor = n, n.prototype = e, n
     }

     function i(e) {
      this.add ? e.forEach(this.add, this) : e.forEach(function(e) {
       this.set(e[0], e[1])
      }, this)
     }

     function n(e) {
      return this.has(e) && (this._keys.splice(y, 1), this._values.splice(y, 1), this._itp.forEach(function(e) {
       y < e[0] && e[0]--
      })), -1 < y
     }

     function o(e) {
      return this.has(e) ? this._values[y] : void 0
     }

     function s(e, t) {
      if (this.objectOnly && t !== Object(t)) throw new TypeError("Invalid value used as weak collection key");
      if (t != t || 0 === t)
       for (y = e.length; y-- && !b(e[y], t););
      else y = e.indexOf(t);
      return -1 < y
     }

     function r(e) {
      return s.call(this, this._values, e)
     }

     function a(e) {
      return s.call(this, this._keys, e)
     }

     function l(e, t) {
      return this.has(e) ? this._values[y] = t : this._values[this._keys.push(e) - 1] = t, this
     }

     function c(e) {
      return this.has(e) || this._values.push(e), this
     }

     function d() {
      (this._keys || 0).length = this._values.length = 0
     }

     function u() {
      return m(this._itp, this._keys)
     }

     function h() {
      return m(this._itp, this._values)
     }

     function p() {
      return m(this._itp, this._keys, this._values)
     }

     function f() {
      return m(this._itp, this._values, this._values)
     }

     function m(e, t, i) {
      var n = [0],
       o = !1;
      return e.push(n), {
       next: function() {
        var s, r = n[0];
        return !o && r < t.length ? (s = i ? [t[r], i[r]] : t[r], n[0]++) : (o = !0, e.splice(e.indexOf(n), 1)), {
         done: o,
         value: s
        }
       }
      }
     }

     function v() {
      return this._values.length
     }

     function g(e, t) {
      for (var i = this.entries();;) {
       var n = i.next();
       if (n.done) break;
       e.call(t, n.value[1], n.value[0], this)
      }
     }
     var y, w = Object.defineProperty,
      b = function(e, t) {
       return e === t || e !== e && t !== t
      };
     "undefined" == typeof WeakMap && (e.WeakMap = t({
      delete: n,
      clear: d,
      get: o,
      has: a,
      set: l
     }, !0)), "undefined" != typeof Map && "function" == typeof(new Map).values && (new Map).values().next || (e.Map = t({
      delete: n,
      has: a,
      get: o,
      set: l,
      keys: u,
      values: h,
      entries: p,
      forEach: g,
      clear: d
     })), "undefined" != typeof Set && "function" == typeof(new Set).values && (new Set).values().next || (e.Set = t({
      has: r,
      add: c,
      delete: n,
      clear: d,
      keys: h,
      values: h,
      entries: f,
      forEach: g
     })), "undefined" == typeof WeakSet && (e.WeakSet = t({
      delete: n,
      add: c,
      clear: d,
      has: r
     }, !0))
    }("undefined" != typeof t && "undefined" != typeof x ? x : window)
   }), e(function(e) {
    var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
     return typeof e
    } : function(e) {
     return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    ! function(t, i, n) {
     i[t] = i[t] || n(), "undefined" != typeof e && e.exports ? e.exports = i[t] : "function" == typeof define && define.amd && define(function() {
      return i[t]
     })
    }("Promise", "undefined" != typeof x ? x : x, function() {
     function e(e, t) {
      p.add(e, t), h || (h = m(p.drain))
     }

     function i(e) {
      var i, n = "undefined" == typeof e ? "undefined" : t(e);
      return null == e || "object" != n && "function" != n || (i = e.then), "function" == typeof i && i
     }

     function n() {
      for (var e = 0; e < this.chain.length; e++) o(this, 1 === this.state ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
      this.chain.length = 0
     }

     function o(e, t, n) {
      var o, s;
      try {
       t === !1 ? n.reject(e.msg) : (o = t === !0 ? e.msg : t.call(void 0, e.msg), o === n.promise ? n.reject(TypeError("Promise-chain cycle")) : (s = i(o)) ? s.call(o, n.resolve, n.reject) : n.resolve(o))
      } catch (e) {
       n.reject(e)
      }
     }

     function s(t) {
      var o, a = this;
      if (!a.triggered) {
       a.triggered = !0, a.def && (a = a.def);
       try {
        (o = i(t)) ? e(function() {
         var e = new l(a);
         try {
          o.call(t, function() {
           s.apply(e, arguments)
          }, function() {
           r.apply(e, arguments)
          })
         } catch (t) {
          r.call(e, t)
         }
        }): (a.msg = t, a.state = 1, a.chain.length > 0 && e(n, a))
       } catch (e) {
        r.call(new l(a), e)
       }
      }
     }

     function r(t) {
      var i = this;
      i.triggered || (i.triggered = !0, i.def && (i = i.def), i.msg = t, i.state = 2, i.chain.length > 0 && e(n, i))
     }

     function a(e, t, i, n) {
      for (var o = 0; o < t.length; o++) ! function(o) {
       e.resolve(t[o]).then(function(e) {
        i(o, e)
       }, n)
      }(o)
     }

     function l(e) {
      this.def = e, this.triggered = !1
     }

     function c(e) {
      this.promise = e, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0
     }

     function d(t) {
      if ("function" != typeof t) throw TypeError("Not a function");
      if (0 !== this.__NPO__) throw TypeError("Not a promise");
      this.__NPO__ = 1;
      var i = new c(this);
      this.then = function(t, o) {
       var s = {
        success: "function" != typeof t || t,
        failure: "function" == typeof o && o
       };
       return s.promise = new this.constructor(function(e, t) {
        if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
        s.resolve = e, s.reject = t
       }), i.chain.push(s), 0 !== i.state && e(n, i), s.promise
      }, this.catch = function(e) {
       return this.then(void 0, e)
      };
      try {
       t.call(void 0, function(e) {
        s.call(i, e)
       }, function(e) {
        r.call(i, e)
       })
      } catch (e) {
       r.call(i, e)
      }
     }
     var u, h, p, f = Object.prototype.toString,
      m = "undefined" != typeof setImmediate ? function(e) {
       return setImmediate(e)
      } : setTimeout;
     try {
      Object.defineProperty({}, "x", {}), u = function(e, t, i, n) {
       return Object.defineProperty(e, t, {
        value: i,
        writable: !0,
        configurable: n !== !1
       })
      }
     } catch (e) {
      u = function(e, t, i) {
       return e[t] = i, e
      }
     }
     p = function() {
      function e(e, t) {
       this.fn = e, this.self = t, this.next = void 0
      }
      var t, i, n;
      return {
       add: function(o, s) {
        n = new e(o, s), i ? i.next = n : t = n, i = n, n = void 0
       },
       drain: function() {
        var e = t;
        for (t = i = h = void 0; e;) e.fn.call(e.self), e = e.next
       }
      }
     }();
     var v = u({}, "constructor", d, !1);
     return d.prototype = v, u(v, "__NPO__", 0, !1), u(d, "resolve", function(e) {
      var i = this;
      return e && "object" == ("undefined" == typeof e ? "undefined" : t(e)) && 1 === e.__NPO__ ? e : new i(function(t, i) {
       if ("function" != typeof t || "function" != typeof i) throw TypeError("Not a function");
       t(e)
      })
     }), u(d, "reject", function(e) {
      return new this(function(t, i) {
       if ("function" != typeof t || "function" != typeof i) throw TypeError("Not a function");
       i(e)
      })
     }), u(d, "all", function(e) {
      var t = this;
      return "[object Array]" != f.call(e) ? t.reject(TypeError("Not an array")) : 0 === e.length ? t.resolve([]) : new t(function(i, n) {
       if ("function" != typeof i || "function" != typeof n) throw TypeError("Not a function");
       var o = e.length,
        s = Array(o),
        r = 0;
       a(t, e, function(e, t) {
        s[e] = t, ++r === o && i(s)
       }, n)
      })
     }), u(d, "race", function(e) {
      var t = this;
      return "[object Array]" != f.call(e) ? t.reject(TypeError("Not an array")) : new t(function(i, n) {
       if ("function" != typeof i || "function" != typeof n) throw TypeError("Not a function");
       a(t, e, function(e, t) {
        i(t)
       }, n)
      })
     }), d
    })
   })),
   S = new WeakMap,
   k = ["id", "url", "width", "maxwidth", "height", "maxheight", "portrait", "title", "byline", "color", "autoplay", "autopause", "loop", "responsive"],
   C = function() {
    function e(e, t) {
     for (var i = 0; i < t.length; i++) {
      var n = t[i];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
     }
    }
    return function(t, i, n) {
     return i && e(t.prototype, i), n && e(t, n), t
    }
   }(),
   E = new WeakMap,
   $ = new WeakMap,
   A = function() {
    function e(t) {
     var i = this,
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
     if (y(this, e), window.jQuery && t instanceof jQuery && (t.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), t = t[0]), "string" == typeof t && (t = document.getElementById(t)), !a(t)) throw new TypeError("You must pass either a valid element or a valid id.");
     if ("IFRAME" !== t.nodeName) {
      var o = t.querySelector("iframe");
      o && (t = o)
     }
     if ("IFRAME" === t.nodeName && !c(t.getAttribute("src") || "")) throw new Error("The player element passed isnâ€™t a Vimeo embed.");
     if (E.has(t)) return E.get(t);
     this.element = t, this.origin = "*";
     var r = new T(function(e, o) {
      var r = function(t) {
       if (c(t.origin) && i.element.contentWindow === t.source) {
        "*" === i.origin && (i.origin = t.origin);
        var n = m(t.data),
         o = "event" in n && "ready" === n.event,
         s = "method" in n && "ping" === n.method;
        return o || s ? (i.element.setAttribute("data-ready", "true"), void e()) : void g(i, n)
       }
      };
      if (window.addEventListener ? window.addEventListener("message", r, !1) : window.attachEvent && window.attachEvent("onmessage", r), "IFRAME" !== i.element.nodeName) {
       var a = u(t, n),
        l = d(a);
       h(l, a).then(function(e) {
        var n = p(e, t);
        return i.element = n, s(t, n), e
       }).catch(function(e) {
        return o(e)
       })
      }
     });
     return $.set(this, r), E.set(this.element, this), "IFRAME" === this.element.nodeName && v(this, "ping"), this
    }
    return C(e, [{
     key: "callMethod",
     value: function(e) {
      var i = this,
       n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return new T(function(o, s) {
       return i.ready().then(function() {
        t(i, e, {
         resolve: o,
         reject: s
        }), v(i, e, n)
       })
      })
     }
    }, {
     key: "get",
     value: function(e) {
      var i = this;
      return new T(function(n, o) {
       return e = r(e, "get"), i.ready().then(function() {
        t(i, e, {
         resolve: n,
         reject: o
        }), v(i, e)
       })
      })
     }
    }, {
     key: "set",
     value: function(e, i) {
      var n = this;
      return T.resolve(i).then(function(i) {
       if (e = r(e, "set"), void 0 === i || null === i) throw new TypeError("There must be a value to set.");
       return n.ready().then(function() {
        return new T(function(o, s) {
         t(n, e, {
          resolve: o,
          reject: s
         }), v(n, e, i)
        })
       })
      })
     }
    }, {
     key: "on",
     value: function(e, n) {
      if (!e) throw new TypeError("You must pass an event name.");
      if (!n) throw new TypeError("You must pass a callback function.");
      if ("function" != typeof n) throw new TypeError("The callback must be a function.");
      var o = i(this, "event:" + e);
      0 === o.length && this.callMethod("addEventListener", e).catch(function() {}), t(this, "event:" + e, n)
     }
    }, {
     key: "off",
     value: function(e, t) {
      if (!e) throw new TypeError("You must pass an event name.");
      if (t && "function" != typeof t) throw new TypeError("The callback must be a function.");
      var i = n(this, "event:" + e, t);
      i && this.callMethod("removeEventListener", e).catch(function(e) {})
     }
    }, {
     key: "loadVideo",
     value: function(e) {
      return this.callMethod("loadVideo", e)
     }
    }, {
     key: "ready",
     value: function() {
      var e = $.get(this);
      return T.resolve(e)
     }
    }, {
     key: "addCuePoint",
     value: function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return this.callMethod("addCuePoint", {
       time: e,
       data: t
      })
     }
    }, {
     key: "removeCuePoint",
     value: function(e) {
      return this.callMethod("removeCuePoint", e)
     }
    }, {
     key: "enableTextTrack",
     value: function(e, t) {
      if (!e) throw new TypeError("You must pass a language.");
      return this.callMethod("enableTextTrack", {
       language: e,
       kind: t
      })
     }
    }, {
     key: "disableTextTrack",
     value: function() {
      return this.callMethod("disableTextTrack")
     }
    }, {
     key: "pause",
     value: function() {
      return this.callMethod("pause")
     }
    }, {
     key: "play",
     value: function() {
      return this.callMethod("play")
     }
    }, {
     key: "unload",
     value: function() {
      return this.callMethod("unload")
     }
    }, {
     key: "getAutopause",
     value: function() {
      return this.get("autopause")
     }
    }, {
     key: "setAutopause",
     value: function(e) {
      return this.set("autopause", e)
     }
    }, {
     key: "getColor",
     value: function() {
      return this.get("color")
     }
    }, {
     key: "setColor",
     value: function(e) {
      return this.set("color", e)
     }
    }, {
     key: "getCuePoints",
     value: function() {
      return this.get("cuePoints")
     }
    }, {
     key: "getCurrentTime",
     value: function() {
      return this.get("currentTime")
     }
    }, {
     key: "setCurrentTime",
     value: function(e) {
      return this.set("currentTime", e)
     }
    }, {
     key: "getDuration",
     value: function() {
      return this.get("duration")
     }
    }, {
     key: "getEnded",
     value: function() {
      return this.get("ended")
     }
    }, {
     key: "getLoop",
     value: function() {
      return this.get("loop")
     }
    }, {
     key: "setLoop",
     value: function(e) {
      return this.set("loop", e)
     }
    }, {
     key: "getPaused",
     value: function() {
      return this.get("paused")
     }
    }, {
     key: "getTextTracks",
     value: function() {
      return this.get("textTracks")
     }
    }, {
     key: "getVideoEmbedCode",
     value: function() {
      return this.get("videoEmbedCode")
     }
    }, {
     key: "getVideoId",
     value: function() {
      return this.get("videoId")
     }
    }, {
     key: "getVideoTitle",
     value: function() {
      return this.get("videoTitle")
     }
    }, {
     key: "getVideoWidth",
     value: function() {
      return this.get("videoWidth")
     }
    }, {
     key: "getVideoHeight",
     value: function() {
      return this.get("videoHeight")
     }
    }, {
     key: "getVideoUrl",
     value: function() {
      return this.get("videoUrl")
     }
    }, {
     key: "getVolume",
     value: function() {
      return this.get("volume")
     }
    }, {
     key: "setVolume",
     value: function(e) {
      return this.set("volume", e)
     }
    }]), e
   }();
  return f(), A
 }), ! function(e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
 }(function(e) {
  "use strict";
  var t = window.Slick || {};
  t = function() {
   function t(t, n) {
    var o, s = this;
    s.defaults = {
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
    }, s.initials = {
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
    }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = e(t), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = e(t).data("slick") || {}, s.options = e.extend({}, s.defaults, n, o), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, "undefined" != typeof document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.instanceUid = i++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
   }
   var i = 0;
   return t
  }(), t.prototype.activateADA = function() {
   var e = this;
   e.$slideTrack.find(".slick-active").attr({
    "aria-hidden": "false"
   }).find("a, input, button, select").attr({
    tabindex: "0"
   })
  }, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
   var o = this;
   if ("boolean" == typeof i) n = i, i = null;
   else if (0 > i || i >= o.slideCount) return !1;
   o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : n ? e(t).insertBefore(o.$slides.eq(i)) : e(t).insertAfter(o.$slides.eq(i)) : n === !0 ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(t, i) {
    e(i).attr("data-slick-index", t)
   }), o.$slidesCache = o.$slides, o.reinit()
  }, t.prototype.animateHeight = function() {
   var e = this;
   if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
    e.$list.animate({
     height: t
    }, e.options.speed)
   }
  }, t.prototype.animateSlide = function(t, i) {
   var n = {},
    o = this;
   o.animateHeight(), o.options.rtl === !0 && o.options.vertical === !1 && (t = -t), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
    left: t
   }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
    top: t
   }, o.options.speed, o.options.easing, i) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), e({
    animStart: o.currentLeft
   }).animate({
    animStart: t
   }, {
    duration: o.options.speed,
    easing: o.options.easing,
    step: function(e) {
     e = Math.ceil(e), o.options.vertical === !1 ? (n[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(n))
    },
    complete: function() {
     i && i.call()
    }
   })) : (o.applyTransition(), t = Math.ceil(t), o.options.vertical === !1 ? n[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function() {
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
   t.options.fade === !1 ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
  }, t.prototype.autoPlay = function() {
   var e = this;
   e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
  }, t.prototype.autoPlayClear = function() {
   var e = this;
   e.autoPlayTimer && clearInterval(e.autoPlayTimer)
  }, t.prototype.autoPlayIterator = function() {
   var e = this,
    t = e.currentSlide + e.options.slidesToScroll;
   e.paused || e.interrupted || e.focussed || (e.options.infinite === !1 && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 === 0 && (e.direction = 1))), e.slideHandler(t))
  }, t.prototype.buildArrows = function() {
   var t = this;
   t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
    "aria-disabled": "true",
    tabindex: "-1"
   }))
  }, t.prototype.buildDots = function() {
   var t, i, n = this;
   if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
    for (n.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(n.options.dotsClass), t = 0; t <= n.getDotCount(); t += 1) i.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
    n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
   }
  }, t.prototype.buildOut = function() {
   var t = this;
   t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
    e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
   }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
  }, t.prototype.buildRows = function() {
   var e, t, i, n, o, s, r, a = this;
   if (n = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
    for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), e = 0; o > e; e++) {
     var l = document.createElement("div");
     for (t = 0; t < a.options.rows; t++) {
      var c = document.createElement("div");
      for (i = 0; i < a.options.slidesPerRow; i++) {
       var d = e * r + (t * a.options.slidesPerRow + i);
       s.get(d) && c.appendChild(s.get(d))
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
   var n, o, s, r = this,
    a = !1,
    l = r.$slider.width(),
    c = window.innerWidth || e(window).width();
   if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
    o = null;
    for (n in r.breakpoints) r.breakpoints.hasOwnProperty(n) && (r.originalSettings.mobileFirst === !1 ? s < r.breakpoints[n] && (o = r.breakpoints[n]) : s > r.breakpoints[n] && (o = r.breakpoints[n]));
    null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || i) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t), a = o), t || a === !1 || r.$slider.trigger("breakpoint", [r, a])
   }
  }, t.prototype.changeSlide = function(t, i) {
   var n, o, s, r = this,
    a = e(t.currentTarget);
   switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), s = r.slideCount % r.options.slidesToScroll !== 0, n = s ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
    case "previous":
     o = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
     break;
    case "next":
     o = 0 === n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
     break;
    case "index":
     var l = 0 === t.data.index ? 0 : t.data.index || a.index() * r.options.slidesToScroll;
     r.slideHandler(r.checkNavigable(l), !1, i), a.children().trigger("focus");
     break;
    default:
     return
   }
  }, t.prototype.checkNavigable = function(e) {
   var t, i, n = this;
   if (t = n.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length - 1];
   else
    for (var o in t) {
     if (e < t[o]) {
      e = i;
      break
     }
     i = t[o]
    }
   return e
  }, t.prototype.cleanUpEvents = function() {
   var t = this;
   t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), t.$slider.off("focus.slick blur.slick"), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
  }, t.prototype.cleanUpSlideEvents = function() {
   var t = this;
   t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
  }, t.prototype.cleanUpRows = function() {
   var e, t = this;
   t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.empty().append(e))
  }, t.prototype.clickHandler = function(e) {
   var t = this;
   t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
  }, t.prototype.destroy = function(t) {
   var i = this;
   i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
    e(this).attr("style", e(this).data("originalStyling"))
   }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
  }, t.prototype.disableTransition = function(e) {
   var t = this,
    i = {};
   i[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
  }, t.prototype.fadeSlide = function(e, t) {
   var i = this;
   i.cssTransitions === !1 ? (i.$slides.eq(e).css({
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
   t.cssTransitions === !1 ? t.$slides.eq(e).animate({
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
   var e = this;
   return e.currentSlide
  }, t.prototype.getDotCount = function() {
   var e = this,
    t = 0,
    i = 0,
    n = 0;
   if (e.options.infinite === !0)
    for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
   else if (e.options.centerMode === !0) n = e.slideCount;
   else if (e.options.asNavFor)
    for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
   else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
   return n - 1
  }, t.prototype.getLeft = function(e) {
   var t, i, n, o = this,
    s = 0;
   return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, s = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll !== 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, s = (o.options.slidesToShow - (e - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, s = o.slideCount % o.options.slidesToScroll * i * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (e + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, s = 0), o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = o.options.vertical === !1 ? e * o.slideWidth * -1 + o.slideOffset : e * i * -1 + s, o.options.variableWidth === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = o.options.rtl === !0 ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, o.options.centerMode === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = o.options.rtl === !0 ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (o.$list.width() - n.outerWidth()) / 2)), t
  }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
   var t = this;
   return t.options[e]
  }, t.prototype.getNavigableIndexes = function() {
   var e, t = this,
    i = 0,
    n = 0,
    o = [];
   for (t.options.infinite === !1 ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); e > i;) o.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
   return o
  }, t.prototype.getSlick = function() {
   return this
  }, t.prototype.getSlideCount = function() {
   var t, i, n, o = this;
   return n = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function(t, s) {
    return s.offsetLeft - n + e(s).outerWidth() / 2 > -1 * o.swipeLeft ? (i = s, !1) : void 0
   }), t = Math.abs(e(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
  }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
   var i = this;
   i.changeSlide({
    data: {
     message: "index",
     index: parseInt(e)
    }
   }, t)
  }, t.prototype.init = function(t) {
   var i = this;
   e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(),
    i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
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
   e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
    message: "previous"
   }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
    message: "next"
   }, e.changeSlide))
  }, t.prototype.initDotEvents = function() {
   var t = this;
   t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
    message: "index"
   }, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
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
   }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
  }, t.prototype.initUI = function() {
   var e = this;
   e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show()
  }, t.prototype.keyHandler = function(e) {
   var t = this;
   e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
    data: {
     message: t.options.rtl === !0 ? "next" : "previous"
    }
   }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
    data: {
     message: t.options.rtl === !0 ? "previous" : "next"
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
       }), r.$slider.trigger("lazyLoaded", [r, t, i])
      })
     }, n.onerror = function() {
      t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, i])
     }, n.src = i
    })
   }
   var i, n, o, s, r = this;
   r.options.centerMode === !0 ? r.options.infinite === !0 ? (o = r.currentSlide + (r.options.slidesToShow / 2 + 1), s = o + r.options.slidesToShow + 2) : (o = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), s = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (o = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, s = Math.ceil(o + r.options.slidesToShow), r.options.fade === !0 && (o > 0 && o--, s <= r.slideCount && s++)), i = r.$slider.find(".slick-slide").slice(o, s), t(i), r.slideCount <= r.options.slidesToShow ? (n = r.$slider.find(".slick-slide"), t(n)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (n = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), t(n)) : 0 === r.currentSlide && (n = r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow), t(n))
  }, t.prototype.loadSlider = function() {
   var e = this;
   e.setPosition(), e.$slideTrack.css({
    opacity: 1
   }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
  }, t.prototype.next = t.prototype.slickNext = function() {
   var e = this;
   e.changeSlide({
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
   t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), t.options.accessibility === !0 && t.initADA())
  }, t.prototype.prev = t.prototype.slickPrev = function() {
   var e = this;
   e.changeSlide({
    data: {
     message: "previous"
    }
   })
  }, t.prototype.preventDefault = function(e) {
   e.preventDefault()
  }, t.prototype.progressiveLazyLoad = function(t) {
   t = t || 1;
   var i, n, o, s = this,
    r = e("img[data-lazy]", s.$slider);
   r.length ? (i = r.first(), n = i.attr("data-lazy"), o = document.createElement("img"), o.onload = function() {
    i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), s.options.adaptiveHeight === !0 && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, i, n]), s.progressiveLazyLoad()
   }, o.onerror = function() {
    3 > t ? setTimeout(function() {
     s.progressiveLazyLoad(t + 1)
    }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, i, n]), s.progressiveLazyLoad())
   }, o.src = n) : s.$slider.trigger("allImagesLoaded", [s])
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
    s = o.options.responsive || null;
   if ("array" === e.type(s) && s.length) {
    o.respondTo = o.options.respondTo || "window";
    for (t in s)
     if (n = o.breakpoints.length - 1, i = s[t].breakpoint, s.hasOwnProperty(t)) {
      for (; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
      o.breakpoints.push(i), o.breakpointSettings[i] = s[t].settings
     }
    o.breakpoints.sort(function(e, t) {
     return o.options.mobileFirst ? e - t : t - e
    })
   }
  }, t.prototype.reinit = function() {
   var t = this;
   t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
  }, t.prototype.resize = function() {
   var t = this;
   e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
    t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
   }, 50))
  }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
   var n = this;
   return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : n.slideCount - 1) : e = t === !0 ? --e : e, !(n.slideCount < 1 || 0 > e || e > n.slideCount - 1) && (n.unload(), i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
  }, t.prototype.setCSS = function(e) {
   var t, i, n = this,
    o = {};
   n.options.rtl === !0 && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", o[n.positionProp] = e, n.transformsEnabled === !1 ? n.$slideTrack.css(o) : (o = {}, n.cssTransitions === !1 ? (o[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(o)))
  }, t.prototype.setDimensions = function() {
   var e = this;
   e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
    padding: "0px " + e.options.centerPadding
   }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
    padding: e.options.centerPadding + " 0px"
   })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
   var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
   e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
  }, t.prototype.setFade = function() {
   var t, i = this;
   i.$slides.each(function(n, o) {
    t = i.slideWidth * n * -1, i.options.rtl === !0 ? e(o).css({
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
   if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
    e.$list.css("height", t)
   }
  }, t.prototype.setOption = t.prototype.slickSetOption = function() {
   var t, i, n, o, s, r = this,
    a = !1;
   if ("object" === e.type(arguments[0]) ? (n = arguments[0], a = arguments[1], s = "multiple") : "string" === e.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? s = "responsive" : "undefined" != typeof arguments[1] && (s = "single")), "single" === s) r.options[n] = o;
   else if ("multiple" === s) e.each(n, function(e, t) {
    r.options[e] = t
   });
   else if ("responsive" === s)
    for (i in o)
     if ("array" !== e.type(r.options.responsive)) r.options.responsive = [o[i]];
     else {
      for (t = r.options.responsive.length - 1; t >= 0;) r.options.responsive[t].breakpoint === o[i].breakpoint && r.options.responsive.splice(t, 1), t--;
      r.options.responsive.push(o[i])
     }
   a && (r.unload(), r.reinit())
  }, t.prototype.setPosition = function() {
   var e = this;
   e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
  }, t.prototype.setProps = function() {
   var e = this,
    t = document.body.style;
   e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && e.animType !== !1
  }, t.prototype.setSlideClasses = function(e) {
   var t, i, n, o, s = this;
   i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), s.options.centerMode === !0 ? (t = Math.floor(s.options.slidesToShow / 2), s.options.infinite === !0 && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + e, i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = s.options.infinite === !0 ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
  }, t.prototype.setupInfinite = function() {
   var t, i, n, o = this;
   if (o.options.fade === !0 && (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (i = null, o.slideCount > o.options.slidesToShow)) {
    for (n = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - n; t -= 1) i = t - 1, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
    for (t = 0; n > t; t += 1) i = t, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
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
   return o || (o = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(o), void i.asNavFor(o)) : void i.slideHandler(o)
  }, t.prototype.slideHandler = function(e, t, i) {
   var n, o, s, r, a, l = null,
    c = this;
   return t = t || !1, c.animating === !0 && c.options.waitForAnimate === !0 || c.options.fade === !0 && c.currentSlide === e || c.slideCount <= c.options.slidesToShow ? void 0 : (t === !1 && c.asNavFor(e), n = e, l = c.getLeft(n), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, c.options.infinite === !1 && c.options.centerMode === !1 && (0 > e || e > c.getDotCount() * c.options.slidesToScroll) ? void(c.options.fade === !1 && (n = c.currentSlide, i !== !0 ? c.animateSlide(r, function() {
    c.postSlide(n)
   }) : c.postSlide(n))) : c.options.infinite === !1 && c.options.centerMode === !0 && (0 > e || e > c.slideCount - c.options.slidesToScroll) ? void(c.options.fade === !1 && (n = c.currentSlide, i !== !0 ? c.animateSlide(r, function() {
    c.postSlide(n)
   }) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), o = 0 > n ? c.slideCount % c.options.slidesToScroll !== 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll !== 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), s = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), c.options.fade === !0 ? (i !== !0 ? (c.fadeSlideOut(s), c.fadeSlide(o, function() {
    c.postSlide(o)
   })) : c.postSlide(o), void c.animateHeight()) : void(i !== !0 ? c.animateSlide(l, function() {
    c.postSlide(o)
   }) : c.postSlide(o))))
  }, t.prototype.startLoad = function() {
   var e = this;
   e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
  }, t.prototype.swipeDirection = function() {
   var e, t, i, n, o = this;
   return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(t, e), n = Math.round(180 * i / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? o.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? o.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? n >= 35 && 135 >= n ? "down" : "up" : "vertical"
  }, t.prototype.swipeEnd = function(e) {
   var t, i, n = this;
   if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
   if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
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
   if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
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
   var t, i, n, o, s, r = this;
   return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!r.dragging || s && 1 !== s.length) && (t = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, r.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), r.options.verticalSwiping === !0 && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), i = r.swipeDirection(), "vertical" !== i ? (void 0 !== e.originalEvent && r.touchObject.swipeLength > 4 && e.preventDefault(), o = (r.options.rtl === !1 ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), r.options.verticalSwiping === !0 && (o = r.touchObject.curY > r.touchObject.startY ? 1 : -1), n = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, r.options.infinite === !1 && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (n = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), r.options.vertical === !1 ? r.swipeLeft = t + n * o : r.swipeLeft = t + n * (r.$list.height() / r.listWidth) * o, r.options.verticalSwiping === !0 && (r.swipeLeft = t + n * o), r.options.fade !== !0 && r.options.touchMove !== !1 && (r.animating === !0 ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))) : void 0)
  }, t.prototype.swipeStart = function(e) {
   var t, i = this;
   return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(i.dragging = !0))
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
   var e, t = this;
   e = Math.floor(t.options.slidesToShow / 2), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
  }, t.prototype.updateDots = function() {
   var e = this;
   null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
  }, t.prototype.visibility = function() {
   var e = this;
   e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
  }, e.fn.slick = function() {
   var e, i, n = this,
    o = arguments[0],
    s = Array.prototype.slice.call(arguments, 1),
    r = n.length;
   for (e = 0; r > e; e++)
    if ("object" == typeof o || "undefined" == typeof o ? n[e].slick = new t(n[e], o) : i = n[e].slick[o].apply(n[e].slick, s), "undefined" != typeof i) return i;
   return n
  }
 }), ! function(e, t, i) {
  "use strict";
  var n = function(e, t) {
   var n = this;
   this.el = e, this.options = {}, Object.keys(o).forEach(function(e) {
    n.options[e] = o[e]
   }), Object.keys(t).forEach(function(e) {
    n.options[e] = t[e]
   }), this.isInput = "input" === this.el.tagName.toLowerCase(), this.attr = this.options.attr, this.showCursor = !this.isInput && this.options.showCursor, this.elContent = this.attr ? this.el.getAttribute(this.attr) : this.el.textContent, this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, i && this.options.stringsElement instanceof i ? this.stringsElement = this.options.stringsElement[0] : this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
  };
  n.prototype = {
   constructor: n,
   init: function() {
    var e = this;
    e.timeout = setTimeout(function() {
     for (var t = 0; t < e.strings.length; ++t) e.sequence[t] = t;
     e.shuffle && (e.sequence = e.shuffleArray(e.sequence)), e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos)
    }, e.startDelay)
   },
   build: function() {
    var e = this;
    if (this.showCursor === !0 && (this.cursor = t.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)), this.stringsElement) {
     this.strings = [], this.stringsElement.style.display = "none";
     var i = Array.prototype.slice.apply(this.stringsElement.children);
     i.forEach(function(t) {
      e.strings.push(t.innerHTML)
     })
    }
    this.init()
   },
   typewrite: function(e, t) {
    if (this.stop !== !0) {
     var i = Math.round(70 * Math.random()) + this.typeSpeed,
      n = this;
     n.timeout = setTimeout(function() {
      var i = 0,
       o = e.substr(t);
      if ("^" === o.charAt(0)) {
       var s = 1;
       /^\^\d+/.test(o) && (o = /\d+/.exec(o)[0], s += o.length, i = parseInt(o)), e = e.substring(0, t) + e.substring(t + s)
      }
      if ("html" === n.contentType) {
       var r = e.substr(t).charAt(0);
       if ("<" === r || "&" === r) {
        var a = "",
         l = "";
        for (l = "<" === r ? ">" : ";"; e.substr(t + 1).charAt(0) !== l && (a += e.substr(t).charAt(0), t++, !(t + 1 > e.length)););
        t++, a += l
       }
      }
      n.timeout = setTimeout(function() {
       if (t === e.length) {
        if (n.options.onStringTyped(n.arrayPos), n.arrayPos === n.strings.length - 1 && (n.options.callback(), n.curLoop++, n.loop === !1 || n.curLoop === n.loopCount)) return;
        n.timeout = setTimeout(function() {
         n.backspace(e, t)
        }, n.backDelay)
       } else {
        0 === t && n.options.preStringTyped(n.arrayPos);
        var i = e.substr(0, t + 1);
        n.attr ? n.el.setAttribute(n.attr, i) : n.isInput ? n.el.value = i : "html" === n.contentType ? n.el.innerHTML = i : n.el.textContent = i, t++, n.typewrite(e, t)
       }
      }, i)
     }, i)
    }
   },
   backspace: function(e, t) {
    if (this.stop !== !0) {
     var i = Math.round(70 * Math.random()) + this.backSpeed,
      n = this;
     n.timeout = setTimeout(function() {
      if ("html" === n.contentType && ">" === e.substr(t).charAt(0)) {
       for (var i = "";
        "<" !== e.substr(t - 1).charAt(0) && (i -= e.substr(t).charAt(0), t--, !(t < 0)););
       t--, i += "<"
      }
      var o = e.substr(0, t);
      n.attr ? n.el.setAttribute(n.attr, o) : n.isInput ? n.el.value = o : "html" === n.contentType ? n.el.innerHTML = o : n.el.textContent = o, t > n.stopNum ? (t--, n.backspace(e, t)) : t <= n.stopNum && (n.arrayPos++, n.arrayPos === n.strings.length ? (n.arrayPos = 0, n.shuffle && (n.sequence = n.shuffleArray(n.sequence)), n.init()) : n.typewrite(n.strings[n.sequence[n.arrayPos]], t))
     }, i)
    }
   },
   shuffleArray: function(e) {
    var t, i, n = e.length;
    if (n)
     for (; --n;) i = Math.floor(Math.random() * (n + 1)), t = e[i], e[i] = e[n], e[n] = t;
    return e
   },
   reset: function() {
    var e = this;
    clearInterval(e.timeout);
    this.el.getAttribute("id");
    this.el.textContent = "", "undefined" != typeof this.cursor && "undefined" != typeof this.cursor.parentNode && this.cursor.parentNode.removeChild(this.cursor), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, this.options.resetCallback()
   }
  }, n.new = function(e, i) {
   var o = Array.prototype.slice.apply(t.querySelectorAll(e));
   o.forEach(function(e) {
    var t = e._typed,
     o = "object" == typeof i && i;
    t && t.reset(), e._typed = t = new n(e, o), "string" == typeof i && t[i]()
   })
  }, i && (i.fn.typed = function(e) {
   return this.each(function() {
    var t = i(this),
     o = t.data("typed"),
     s = "object" == typeof e && e;
    o && o.reset(), t.data("typed", o = new n(this, s)), "string" == typeof e && o[e]()
   })
  }), e.Typed = n;
  var o = {
   strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
   stringsElement: null,
   typeSpeed: 0,
   startDelay: 0,
   backSpeed: 0,
   shuffle: !1,
   backDelay: 500,
   loop: !1,
   loopCount: !1,
   showCursor: !0,
   cursorChar: "|",
   attr: null,
   contentType: "html",
   callback: function() {},
   preStringTyped: function() {},
   onStringTyped: function() {},
   resetCallback: function() {}
  }
 }(window, document, window.jQuery), $(function() {
  var e = $(".buzz-slider");
  e.slick({
   speed: 750,
   autoplay: !0,
   autoplaySpeed: 4e3,
   pauseOnHover: !1,
   pauseOnFocus: !1,
   slidesToShow: 1,
   dots: !0,
   responsive: [{
    breakpoint: 768,
    settings: {
     speed: 400
    }
   }]
  }), e.on("setPosition", function() {
   $(this).find(".slick-slide").height("auto");
   var e = $(this).find(".slick-track"),
    t = $(e).height();
   $(this).find(".slick-slide").css("height", t + "px")
  }), e.on("beforeChange", function(e, t, i, n) {
   var o = $(".buzz-item").eq(n + 1).attr("data-color");
   $(".buzz").css({
    "background-color": "" + o
   })
  })
 }), $(function() {
  if ($(".wpcf7-form").length) {
   $('select[name="your-state"] option:eq(0)').attr("disabled", "disabled").text("State");
   var e = document.querySelector(".wpcf7");
   e.addEventListener("wpcf7mailsent", function(e) {
    $(".wpcf7-form").addClass("hide"), $(".contact-form-success").addClass("show")
   }, !1)
  }
 }), $(function() {
  function e() {
   m.find(".bg").removeClass("down down-s"), m.find(".content").removeClass("down down-s"), $(".wines-hero-main").addClass("animate"), x.addClass("animate"), m.find(".can").addClass("animate"), m.find(".overflow-container").addClass("animate"), m.find(".content").addClass("animate"), m.css({
    "z-index": "1"
   }), $(".wines-hero-main").find(T).removeClass("animate"), S.addClass("animate")
  }

  function t() {
   m.find(".bg").addClass("up"), m.find(".content").addClass("down"), v.find(".bg").removeClass("up"), v.find(".content").removeClass("down"), m.find(".content").addClass("up-s"), m.find(".bg").addClass("up-s"), v.find(".content").removeClass("down-s"), v.find(".bg").removeClass("down-s"), m.find(".can").removeClass("animate"), v.find(".can").addClass("animate"), m.find(".overflow-container").removeClass("animate"), v.find(".overflow-container").addClass("animate"), m.find(".content").removeClass("animate"), v.find(".content").addClass("animate"), v.css({
    "z-index": "1"
   })
  }

  function i() {
   v.find(".bg").addClass("down"), v.find(".content").addClass("up"), g.find(".bg").removeClass("down"), g.find(".content").removeClass("up"), v.find(".content").addClass("up-s"), v.find(".bg").addClass("up-s"), g.find(".content").removeClass("down-s"), g.find(".bg").removeClass("down-s"), v.find(".can").removeClass("animate"), g.find(".can").addClass("animate"), v.find(".overflow-container").removeClass("animate"), g.find(".overflow-container").addClass("animate"), v.find(".content").removeClass("animate"), g.find(".content").addClass("animate"), g.css({
    "z-index": "1"
   })
  }

  function n() {
   g.find(".bg").addClass("up"), g.find(".content").addClass("down"), y.find(".bg").removeClass("up"), y.find(".content").removeClass("down"), g.find(".content").addClass("up-s"), g.find(".bg").addClass("up-s"), y.find(".content").removeClass("down-s"), y.find(".bg").removeClass("down-s"), g.find(".can").removeClass("animate"), y.find(".can").addClass("animate"), g.find(".overflow-container").removeClass("animate"), y.find(".overflow-container").addClass("animate"), g.find(".content").removeClass("animate"), y.find(".content").addClass("animate"), y.css({
    "z-index": "1"
   })
  }

  function o() {
   y.find(".bg").addClass("down"), y.find(".content").addClass("up"), w.find(".bg").removeClass("down"), w.find(".content").removeClass("up"), y.find(".content").addClass("up-s"), y.find(".bg").addClass("up-s"), w.find(".content").removeClass("down-s"), w.find(".bg").removeClass("down-s"), y.find(".can").removeClass("animate"), w.find(".can").addClass("animate"), y.find(".overflow-container").removeClass("animate"), w.find(".overflow-container").addClass("animate"), y.find(".content").removeClass("animate"), w.find(".content").addClass("animate"), w.css({
    "z-index": "1"
   }), f.addClass("animate-up-easing")
  }

  function s() {
   $("#wines").addClass("show"), $(".wines").addClass("animate-up"), w.find(".can").removeClass("animate"), w.find(".overflow-container").removeClass("animate"), w.find(".content").removeClass("animate"), w.find(".content").addClass("last-down"), b.find(".ethos-hero-items").addClass("animate-in"), b.find(T).addClass("animate")
  }

  function r() {
   b.find(".ethos-hero-items").addClass("animate-out"), b.find(T).removeClass("animate")
  }

  function a() {
   m.find(".bg").addClass("down down-s"), m.find(".content").addClass("down down-s"), $(".wines").removeClass("animate"), $(".wines-hero-main").removeClass("animate"), m.find(".can").removeClass("animate"), m.find(".content").removeClass("animate"), m.find(".overflow-container").removeClass("animate"), x.removeClass("animate"), $(".wines-hero-main").find(T).addClass("animate"), S.removeClass("animate"), m.css({
    "z-index": "1"
   })
  }

  function l() {
   m.find(".bg").removeClass("up"), m.find(".content").removeClass("down"), v.find(".bg").addClass("up"), v.find(".content").addClass("down"),
    m.find(".content").removeClass("up-s"), m.find(".bg").removeClass("up-s"), v.find(".content").addClass("down-s"), v.find(".bg").addClass("down-s"), m.find(".can").addClass("animate"), v.find(".can").removeClass("animate"), m.find(".overflow-container").addClass("animate"), v.find(".overflow-container").removeClass("animate"), m.find(".content").addClass("animate"), v.find(".content").removeClass("animate"), m.css({
     "z-index": "1"
    })
  }

  function c() {
   v.find(".bg").removeClass("down"), v.find(".content").removeClass("up"), g.find(".bg").addClass("down"), g.find(".content").addClass("up"), v.find(".content").removeClass("up-s"), v.find(".bg").removeClass("up-s"), g.find(".content").addClass("down-s"), g.find(".bg").addClass("down-s"), v.find(".can").addClass("animate"), g.find(".can").removeClass("animate"), v.find(".overflow-container").addClass("animate"), g.find(".overflow-container").removeClass("animate"), v.find(".content").addClass("animate"), g.find(".content").removeClass("animate"), v.css({
    "z-index": "1"
   })
  }

  function d() {
   g.find(".bg").removeClass("up"), g.find(".content").removeClass("down"), y.find(".bg").addClass("up"), y.find(".content").addClass("down"), g.find(".content").removeClass("up-s"), g.find(".bg").removeClass("up-s"), y.find(".content").addClass("down-s"), y.find(".bg").addClass("down-s"), g.find(".can").addClass("animate"), y.find(".can").removeClass("animate"), g.find(".overflow-container").addClass("animate"), y.find(".overflow-container").removeClass("animate"), g.find(".content").addClass("animate"), y.find(".content").removeClass("animate"), g.css({
    "z-index": "1"
   })
  }

  function u() {
   y.find(".bg").removeClass("down"), y.find(".content").removeClass("up"), w.find(".bg").addClass("down"), w.find(".content").addClass("up"), y.find(".content").removeClass("up-s"), y.find(".bg").removeClass("up-s"), w.find(".content").addClass("down-s"), w.find(".bg").addClass("down-s"), y.find(".can").addClass("animate"), w.find(".can").removeClass("animate"), y.find(".overflow-container").addClass("animate"), w.find(".overflow-container").removeClass("animate"), y.find(".content").addClass("animate"), w.find(".content").removeClass("animate"), y.css({
    "z-index": "1"
   }), f.removeClass("animate-up-easing")
  }

  function h() {
   $(".wines").removeClass("animate-up"), w.find(".can").addClass("animate"), w.find(".overflow-container").addClass("animate"), w.find(".content").addClass("animate"), w.find(".content").removeClass("last-down"), b.find(".ethos-hero-items").removeClass("animate-in"), b.find(T).removeClass("animate"), setTimeout(function() {
    $("#wines").removeClass("show")
   }, 999)
  }

  function p() {
   b.find(".ethos-hero-items").removeClass("animate-out"), b.find(T).addClass("animate")
  }
  var f = $(".wines"),
   m = $(".wines-section").eq(0),
   v = $(".wines-section").eq(1),
   g = $(".wines-section").eq(2),
   y = $(".wines-section").eq(3),
   w = $(".wines-section").eq(4),
   b = $(".ethos-hero"),
   x = $(".hero-arrow"),
   T = $(".overflow-container"),
   S = $(".header-logo");
  m.css({
   "z-index": "4"
  });
  var k = {
   scrollingSpeed: 1100,
   onLeave: function(f, m, v) {
    var g = ($(this), $(this).height(), m - 2);
    $(".hero-arrow-small").addClass("hide"), $(".wines-section").css({
     "z-index": "0"
    }), "down" === v && (0 === g && e(), 1 === g && t(), 2 === g && i(), 3 === g && n(), 4 === g && o(), 5 === g && s(), 6 === g && r()), "up" === v && (g === -1 && a(), 0 === g && l(), 1 === g && c(), 2 === g && d(), 3 === g && u(), 4 === g && h(), 5 === g && p())
   },
   afterRender: function(e, t) {
    $(".wines-hero-main").find(T).addClass("animate");
    var i = $(".section").height();
    f.height(i)
   },
   afterResize: function() {
    var e = $(".section").height();
    f.height(e)
   },
   afterLoad: function(e, t) {
    $(this).find(".hero-arrow-small").removeClass("hide");
    var i = t - 2;
    $(".wines-section:eq(" + i + ")").find(".hero-arrow-small").removeClass("hide")
   }
  };
  $("#wines").length && ($("#wines").fullpage(k), navigator.userAgent.indexOf("FBAV") !== -1 || navigator.userAgent.indexOf("Instagram") !== -1 ? ($.fn.fullpage.setResponsive(!0), $(".hero.parallax").addClass("no-parallax"), $(".wines").addClass("static"), $(".hero-arrow").remove()) : ($(".hero-arrow-small").addClass("hide"), $(".wines-hero-main, .wines").swipe({
   swipe: function(e, t, i, n, o, s) {
    "up" === t && $.fn.fullpage.moveSectionDown(), "down" === t && $.fn.fullpage.moveSectionUp()
   }
  })));
  var C = window.location.hash;
  $(document).ready(function() {
   C && ("#chardonnay" === C && setTimeout(function() {
    $.fn.fullpage.moveTo(2)
   }, 1200), "#red-wine" === C && (m.hide(), setTimeout(function() {
    $.fn.fullpage.moveTo(3)
   }, 1200), setTimeout(function() {
    m.show(), e()
   }, 2e3)), "#rose" === C && (m.hide(), v.hide(), setTimeout(function() {
    $.fn.fullpage.moveTo(4)
   }, 1200), setTimeout(function() {
    m.show(), v.show(), e(), t()
   }, 2e3)), "#sauvignon-blanc" === C && (m.hide(), v.hide(), g.hide(), setTimeout(function() {
    $.fn.fullpage.moveTo(5)
   }, 1200), setTimeout(function() {
    m.show(), v.show(), g.show(), e(), t(), i()
   }, 2e3)), "#bubbles" === C && (m.hide(), v.hide(), g.hide(), y.hide(), setTimeout(function() {
    $.fn.fullpage.moveTo(6)
   }, 1200), setTimeout(function() {
    m.show(), v.show(), g.show(), y.show(), e(), t(), i(), n()
   }, 2e3)))
  })
 }), $(function() {
  function e() {
   var e = $(".ethos-values-s-only").clone();
   $("#ethos-values").after(e)
  }

  function t() {
   $("#ethos .ethos-values-s-only").remove()
  }
  var i = $(".header-logo"),
   n = 1024,
   o = {
    scrollingSpeed: 1e3,
    afterResize: function() {
     var i = ($(".overflow-container, .hero-line-texture"), $(".ethos-video")),
      s = ($(this), $(window).width()),
      r = $("#ethos .ethos-values-s-only");
     s < n ? r.length || (e(), $.fn.fullpage.destroy("all"), $("#ethos").fullpage(o), i.removeClass("animate-in, animate-out"), $(".ethos-hero-main").removeClass("animate")) : r.length && (t(), $.fn.fullpage.destroy("all"), $("#ethos").fullpage(o), i.removeClass("animate-in, animate-out"), $(".ethos-hero-main").removeClass("animate"))
    },
    onLeave: function(e, t, n) {
     var o = $(this),
      s = $(".overflow-container, .hero-line-texture"),
      r = $(".ethos-video");
     o.find(s).removeClass("animate"), $(".hero-arrow-small").addClass("hide"), "down" === n && (o.next().find(s).addClass("animate"), o.next().find(r).addClass("animate-in"), o.find(r).addClass("animate-out"), 1 == e && ($(".hero-arrow").addClass("animate"), $(".ethos-hero-main").addClass("animate"), $(".ethos-hero-main").find(s).removeClass("animate"), i.addClass("animate"))), "up" === n && (o.prev().find(s).addClass("animate"), o.prev().find(r).removeClass("animate-out"), o.find(r).removeClass("animate-in"), 2 == e && ($(".hero-arrow").removeClass("animate"), $(".ethos-hero-main").removeClass("animate"), $(".ethos-hero-main").find(s).addClass("animate"), i.removeClass("animate")))
    },
    afterRender: function() {
     var e = $(".overflow-container");
     $(".ethos-hero-main").find(e).addClass("animate")/*, $(".ethos-video video").get(0).play(), $(".ethos-video video").get(1).play(), $(".ethos-video video").get(2).play(), $(".ethos-video video").get(3).play()*/
    },
    afterLoad: function(e, t) {
     $(this).find(".hero-arrow-small").removeClass("hide"), 1 == t && setTimeout(function() {
      $(".hero-arrow-small.main").removeClass("hidden")
     }, 1e3)
    }
   };
  $("#ethos").length && ($(window).width() < n && e(), $("#ethos").fullpage(o), navigator.userAgent.indexOf("FBAV") === -1 && navigator.userAgent.indexOf("Instagram") === -1 || ($.fn.fullpage.setResponsive(!0), $(".hero.parallax").addClass("no-parallax"), $(".ethos-values-s-only").addClass("hide"), $(".hero-arrow").addClass("hero-arrow-small main").removeClass("hero-arrow")))
 }), $(function() {
  var e = $(".overflow-container, .bg, .hero-line-texture, .home-icon"),
   t = $(".hero-arrow"),
   i = $(".home-hero-main"),
   n = $(".ethos-hero-items"),
   o = $(".header-logo"),
   s = {
    scrollingSpeed: 1e3,
    scrollBar: !0,
    onLeave: function(s, r, a) {
     var l = $(this);
     l.removeClass("animate"), l.find(e).removeClass("animate"), $(".hero-arrow-small").addClass("hide"), console.log(s), "down" === a && (l.next().find(e).addClass("animate"), 1 == s && (t.addClass("animate"), i.addClass("animate"), i.find(".overflow-container, #play-button").removeClass("animate"), o.addClass("animate"), $(".hero-video").get(0).pause(), $(".hero-video").get(1).pause()), 7 == s && n.addClass("animate-in"), 8 == s && n.addClass("animate-out")), "up" === a && (l.prev().find(e).addClass("animate"), 2 == s && (t.removeClass("animate"), i.removeClass("animate"), i.find(".overflow-container, #play-button").addClass("animate"), o.removeClass("animate"), $(".hero-video").get(0).play(), $(".hero-video").get(1).play()), 8 == s && n.removeClass("animate-in"), 9 == s && n.removeClass("animate-out"))
    },
    afterLoad: function(t, n) {
     1 == n ? ($(".hero-video").get(0).play(), $(".hero-video").get(1).play(), setTimeout(function() {
      i.find(".overflow-container, #play-button").addClass("animate"), $(".hero-arrow-small.main").removeClass("hidden")
     }, 1e3)) : 8 == n ? ($(this).find(e).addClass("animate"), $(".ethos-hero-items").addClass("animate-in")) : n > 8 ? $(".ethos-hero-items").addClass("animate-in animate-out") : (e.removeClass("animate"), $(this).find(e).addClass("animate")), $(this).find(".hero-arrow-small").removeClass("hide")
    }
   };
  $("#home").length && ($("#home").fullpage(s), navigator.userAgent.indexOf("FBAV") !== -1 || navigator.userAgent.indexOf("Instagram") !== -1 ? ($.fn.fullpage.setResponsive(!0), $(".hero.parallax").addClass("no-parallax"), $(".hero-arrow").addClass("hero-arrow-small main").removeClass("hero-arrow")) : $(".home-hero-main").swipe({
   swipe: function(e, t, i, n, o, s) {
    "up" === t && $.fn.fullpage.moveSectionDown()
   }
  }))
 }), $(function() {
  var e = $(".overflow-container, .screw-corks-icon-svg, .hero-line-texture"),
   t = $(".header-logo"),
   i = {
    scrollingSpeed: 1e3,
    navigation: !0,
    onLeave: function(i, n, o) {
     var s = $(this);
     s.find(e).removeClass("animate");
     var r = $("#fp-nav");
     if ($(".screw-corks-hero-arrow").removeClass("show"), "down" === o) {
      var a = s.next().attr("data-bg");
      $("body").css({
       "background-color": "" + a
      }), s.next().find(e).addClass("animate"), 1 === i && (r.addClass("show"), $(".hero-arrow").addClass("animate"), $(".screw-corks-hero-main").addClass("animate"), $(".first-section").addClass("animate"), $(".screw-corks-hero-main").find(e).removeClass("animate"), t.addClass("animate"), setTimeout(function() {
       $(".screw-corks-hero-main").addClass("hide")
      }, 900)), 6 === i && r.removeClass("show")
     }
     if ("up" === o) {
      var l = s.prev().attr("data-bg");
      $("body").css({
       "background-color": "" + l
      }), s.prev().find(e).addClass("animate"), 2 === i && (r.removeClass("show"), $(".hero-arrow").removeClass("animate"), $(".screw-corks-hero-main").removeClass("animate"), $(".first-section").removeClass("animate"), $(".screw-corks-hero-main").removeClass("hide"), $(".screw-corks-hero-main").find(e).addClass("animate"), t.removeClass("animate")), 7 === i && r.addClass("show")
     }
    },
    afterLoad: function(e, t) {
     $(this).find(".screw-corks-hero-arrow").addClass("show"), 1 == t && setTimeout(function() {
      $(".hero-arrow-small.main").removeClass("hidden")
     }, 1e3)
    },
    afterRender: function() {
     var e = $(".overflow-container");
     $(".screw-corks-hero-main").find(e).addClass("animate"), $(".hero-video").get(0).play()
    }
   };
  $("#screw-corks").length && ($("#screw-corks").fullpage(i), navigator.userAgent.indexOf("FBAV") === -1 && navigator.userAgent.indexOf("Instagram") === -1 || ($.fn.fullpage.setResponsive(!0), $(".hero.parallax").addClass("no-parallax"), $(".hero-arrow").addClass("hero-arrow-small main").removeClass("hero-arrow")));
  var n = $("#screw-corks .section:eq(1)").attr("data-bg");
  $("body").css({
   "background-color": "" + n
  }), $("#fp-nav ul li a").click(function() {
   return !1
  }), $(".screw-corks-hero-arrow").click(function() {
   $.fn.fullpage.moveSectionDown()
  })
 }), $(function() {
  var e = $(".overflow-container"),
   t = $(".hero-arrow"),
   i = $(".header-logo"),
   n = {
    scrollingSpeed: 1e3,
    onLeave: function(n, o, s) {
     var r = $(this);
     r.find(e).removeClass("animate"), $("#map circle").addClass("default-state"), $(".hero-arrow-small").addClass("hide"), "down" === s && (r.next().find(e).addClass("animate"), 1 == n && (t.addClass("animate"), $(".buy-hero").addClass("animate"), $(".buy-hero").find(e).removeClass("animate"), i.addClass("animate"))), "up" === s && (r.prev().find(e).addClass("animate"), 2 == n && (t.removeClass("animate"), $(".buy-hero").removeClass("animate"), $(".buy-hero").find(e).addClass("animate"), i.removeClass("animate")))
    },
    afterLoad: function(e, t) {
     if (1 == t) {
      setTimeout(function() {
       $(".buy-hero").find(".overflow-container").addClass("animate"), $(".hero-arrow-small.main").removeClass("hidden")
      }, 1);
      var i = navigator.userAgent.search("Firefox");
      i > -1 ? $(".default-state").removeClass("default-state") : ! function e() {
       var t = $(".default-state"),
        i = Math.floor(Math.random() * t.length),
        n = t.eq(i).removeClass("default-state"),
        o = t.filter(".default-state").length;
       t.eq(i).removeClass("default-state"), $(".section1").hasClass("active") && (o < t.length && setTimeout(e, n ? 0 : 1e3), o < t.length && setTimeout(e, n ? 0 : 1e3))
      }()
     }
     2 == t && $("#map circle").addClass("default-state"), $(this).find(".hero-arrow-small").removeClass("hide")
    }
   };
  $("#buy").length && ($("#buy").fullpage(n), navigator.userAgent.indexOf("FBAV") === -1 && navigator.userAgent.indexOf("Instagram") === -1 || ($.fn.fullpage.setResponsive(!0), $(".hero.parallax").addClass("no-parallax"), $(".hero-arrow").addClass("hero-arrow-small dark main").removeClass("hero-arrow"), $(".buy-hero-more").addClass("bottom-spacing")))
 }), $(function() {
  function e() {
   $(".landscape-popup").addClass("bg2"), setTimeout(function() {
    $(".landscape-popup").removeClass("bg2")
   }, 1500)
  }
  FastClick.attach(document.body), $(".hero.full-height, .ethos-statement").waypoint(function(e) {
   $(this).find(".overflow-container").addClass("animate"), $(this).find(".hero-line-texture").addClass("animate")
  }, {
   offset: "90%",
   triggerOnce: !0
  });
  var t = $(".hero-arrow"),
   i = $(".header-logo"),
   n = $(".hero.full-height:eq(0)"),
   o = $(".default-hero"),
   s = $(".trade-media-section");
  t.click(function() {
   var e = $(this);
   if ($("html").hasClass("fp-enabled")) $.fn.fullpage.moveSectionDown();
   else {
    var t = e.parent(".hero").height();
    $("html, body").animate({
     scrollTop: t
    }, 750), e.addClass("animate")
   }
  }), $("html").hasClass("fp-enabled") === !1 && (n.waypoint(function(e) {
   "down" === e && (i.addClass("animate"), t.addClass("animate"))
  }, {
   offset: "-70%"
  }), n.waypoint(function(e) {
   "up" === e && (i.removeClass("animate"), t.removeClass("animate"))
  }, {
   offset: "-69%"
  }), o.waypoint(function(e) {
   "down" === e && i.addClass("animate")
  }, {
   offset: "-200px"
  }), o.waypoint(function(e) {
   "up" === e && i.removeClass("animate")
  }, {
   offset: "-199px"
  }), s.waypoint(function(e) {
   thisTmSection = $(this), "down" === e && thisTmSection.find(".overflow-container").addClass("animate")
  }, {
   offset: "90%"
  })), $(".hero-arrow-small").click(function() {
   $.fn.fullpage.moveSectionDown()
  });
  setInterval(function() {
   e()
  }, 3e3);
  navigator.userAgent.indexOf("FBAV") === -1 && navigator.userAgent.indexOf("Instagram") === -1 || ($(".contact-popup").addClass("in-app"), $(".hero.full-height .hero-arrow").addClass("hero-arrow-small main").removeClass("hero-arrow"), $(".landscape-popup").addClass("in-app"))
 }), $(function() {
  function e() {
   $(".header-nav").addClass("open"), $(".wrapper").addClass("nav-in"), $(".header-button.open").addClass("hidden")
  }

  function t() {
   $(".header-nav").removeClass("open"), $(".wrapper").removeClass("nav-in"), $(".header-button.open").removeClass("hidden")
  }

  function i() {
   $(".contact-popup").addClass("animate"), setTimeout(function() {
    $(".contact-popup").find(".overflow-container").addClass("animate")
   }, 550)
  }

  function n() {
   $(".contact-popup").removeClass("animate"), $(".contact-popup").find(".overflow-container").removeClass("animate")
  }
  $(".header-button.open").click(function() {
   e()
  }), $(".header-button.close, .wrapper").click(function() {
   t()
  }), $(".header-nav-item-contact").click(function() {
   return t(), i(), !1
  }), $(".contact-popup-close").click(function() {
   n()
  })
 }), $(function() {
  $(".hero-type").typed({
   strings: ["Mother Nature", "Breaking the Rules", "Environmental Stewardship", "Bringing People Together"],
   startDelay: 1e3,
   typeSpeed: 50,
   backSpeed: 10,
   backDelay: 2e3,
   loop: !0
  })
 }), $(function() {
  var e = new Instafeed({
   get: "user",
   userId: "4059266272",
   limit: 6,
   resolution: "standard_resolution",
   accessToken: "4059266272.1677ed0.d5c375f1d8ea40fd9eb0b04081263cf9",
   template: '<a target="_blank" href="{{link}}" style="background-image: url({{image}});"></a>'
  });
  e.run()
 }), $(function() {}), $(window).scroll(function() {
  var e = $(this).scrollTop(),
   t = $(window).height(),
   i = e / t * 25;
  $(".parallax-standard-scroll").css({
   transform: "translate3d(0, " + i + "%, 0)"
  })
 }), $(function() {
  $(".scroll-to-anchor").click(function() {
   var e = $(this).attr("href").replace("#", ""),
    t = $('[rel="' + e + '"]').position().top;
   return $("html, body").animate({
    scrollTop: t
   }, 700), !1
  })
 }), $(function() {
  if ($(".video-overlay-inner").fitVids(), $('iframe[src*="vimeo"]').length) {
   var e = document.querySelector("iframe"),
    t = new Vimeo.Player(e);
   $(".hero-play").click(function() {
    t.play(), $(".video-overlay").addClass("open"), $(".hero-arrow").addClass("animate"), setTimeout(function() {
     $(".hero-arrow").hide()
    }, 500)
   }), $(".video-overlay-close").click(function() {
    t.unload(function() {
     $.fn.fullpage.reBuild(), console.log("derp")
    }), $(".video-overlay").removeClass("open"), $(".hero-arrow").show(), setTimeout(function() {
     $(".hero-arrow").removeClass("animate")
    }, 50)
   }), t.on("timeupdate", function(e) {
    e.percent > .99 && (t.pause(), t.unload())
   })
  }
 });