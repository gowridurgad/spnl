import { r as b, j as m, a as $c, g as Ri, W as Ke, z as Ai, N as Ne, L as qc, u as so, m as pi, C as Vc, c as Wc, R as Uc, __tla as __tla_0 } from "./index-CkqUs_ci.js";
let Fy;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function K(e, t) {
    var n = {};
    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]]);
    return n;
  }
  function Vt(e, t, n, i) {
    function r(o) {
      return o instanceof n ? o : new n(function(a) {
        a(o);
      });
    }
    return new (n || (n = Promise))(function(o, a) {
      function l(u) {
        try {
          s(i.next(u));
        } catch (p) {
          a(p);
        }
      }
      function c(u) {
        try {
          s(i.throw(u));
        } catch (p) {
          a(p);
        }
      }
      function s(u) {
        u.done ? o(u.value) : r(u.value).then(l, c);
      }
      s((i = i.apply(e, t || [])).next());
    });
  }
  function E(...e) {
    const t = [], n = {}.hasOwnProperty;
    return e.filter(Boolean).forEach((i) => {
      const r = typeof i;
      if (r === "string" || r === "number") t.push(i);
      else if (Array.isArray(i) && i.length) {
        const o = E(...i);
        o && t.push(o);
      } else if (r === "object") for (const o in i) n.call(i, o) && i[o] && t.push(o);
    }), t.join(" ");
  }
  const De = {
    content: "pf-v6-c-content",
    contentA: "pf-v6-c-content--a",
    contentBlockquote: "pf-v6-c-content--blockquote",
    contentDd: "pf-v6-c-content--dd",
    contentDl: "pf-v6-c-content--dl",
    contentDt: "pf-v6-c-content--dt",
    contentH1: "pf-v6-c-content--h1",
    contentH2: "pf-v6-c-content--h2",
    contentH3: "pf-v6-c-content--h3",
    contentH4: "pf-v6-c-content--h4",
    contentH5: "pf-v6-c-content--h5",
    contentH6: "pf-v6-c-content--h6",
    contentHr: "pf-v6-c-content--hr",
    contentLi: "pf-v6-c-content--li",
    contentOl: "pf-v6-c-content--ol",
    contentP: "pf-v6-c-content--p",
    contentPre: "pf-v6-c-content--pre",
    contentSmall: "pf-v6-c-content--small",
    contentUl: "pf-v6-c-content--ul",
    modifiers: {
      editorial: "pf-m-editorial",
      visited: "pf-m-visited",
      plain: "pf-m-plain"
    }
  }, Xc = {
    value: "36rem"
  }, Kc = {
    value: "48rem"
  }, Gc = {
    value: "62rem"
  }, _l = {
    value: "75rem"
  }, Yc = {
    value: "90.625rem"
  }, Qc = {
    value: "0rem"
  }, Jc = {
    value: "40rem"
  }, Zc = {
    value: "48rem"
  }, eu = {
    value: "60rem"
  }, tu = {
    value: "80rem"
  };
  let nu = 0;
  function Fe({ name: e, xOffset: t = 0, yOffset: n = 0, width: i, height: r, svgPath: o }) {
    var a;
    return a = class extends b.Component {
      constructor() {
        super(...arguments), this.id = `icon-title-${nu++}`;
      }
      render() {
        const c = this.props, { title: s, className: u } = c, p = K(c, [
          "title",
          "className"
        ]), f = u ? `pf-v6-svg ${u}` : "pf-v6-svg", d = !!s, x = [
          t,
          n,
          i,
          r
        ].join(" ");
        return m.jsxs("svg", Object.assign({
          className: f,
          viewBox: x,
          fill: "currentColor",
          "aria-labelledby": d ? this.id : null,
          "aria-hidden": d ? null : true,
          role: "img",
          width: "1em",
          height: "1em"
        }, p, {
          children: [
            d && m.jsx("title", {
              id: this.id,
              children: s
            }),
            m.jsx("path", {
              d: o
            })
          ]
        }));
      }
    }, a.displayName = e, a;
  }
  const iu = {
    name: "CheckCircleIcon",
    height: 512,
    width: 512,
    svgPath: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",
    yOffset: 0,
    xOffset: 0
  }, Di = Fe(iu), ru = {
    name: "ExclamationCircleIcon",
    height: 512,
    width: 512,
    svgPath: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",
    yOffset: 0,
    xOffset: 0
  }, co = Fe(ru), ou = {
    name: "ExclamationTriangleIcon",
    height: 512,
    width: 576,
    svgPath: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",
    yOffset: 0,
    xOffset: 0
  }, Li = Fe(ou), au = {
    name: "InfoCircleIcon",
    height: 512,
    width: 512,
    svgPath: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",
    yOffset: 0,
    xOffset: 0
  }, lu = Fe(au), su = {
    name: "BellIcon",
    height: 1024,
    width: 896,
    svgPath: "M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",
    yOffset: 0,
    xOffset: 0
  }, cu = Fe(su);
  var Wo;
  (function(e) {
    e.success = "success", e.error = "error", e.warning = "warning", e.default = "default";
  })(Wo || (Wo = {}));
  const Pr = {
    Escape: "Escape",
    Enter: "Enter"
  }, cn = {
    sm: parseInt(Xc.value) * 16,
    md: parseInt(Kc.value) * 16,
    lg: parseInt(Gc.value) * 16,
    xl: parseInt(_l.value) * 16,
    "2xl": parseInt(Yc.value) * 16
  }, un = {
    sm: parseInt(Qc.value) * 16,
    md: parseInt(Jc.value) * 16,
    lg: parseInt(Zc.value) * 16,
    xl: parseInt(eu.value) * 16,
    "2xl": parseInt(tu.value) * 16
  }, uu = {
    success: Di,
    danger: co,
    warning: Li,
    info: lu,
    custom: cu
  };
  var jl = [
    "input:not([inert])",
    "select:not([inert])",
    "textarea:not([inert])",
    "a[href]:not([inert])",
    "button:not([inert])",
    "[tabindex]:not(slot):not([inert])",
    "audio[controls]:not([inert])",
    "video[controls]:not([inert])",
    '[contenteditable]:not([contenteditable="false"]):not([inert])',
    "details>summary:first-of-type:not([inert])",
    "details:not([inert])"
  ], yi = jl.join(","), El = typeof Element > "u", Ht = El ? function() {
  } : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, wi = !El && Element.prototype.getRootNode ? function(e) {
    var t;
    return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
  } : function(e) {
    return e == null ? void 0 : e.ownerDocument;
  }, ki = function e(t, n) {
    var i;
    n === void 0 && (n = true);
    var r = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), o = r === "" || r === "true", a = o || n && t && e(t.parentNode);
    return a;
  }, pu = function(t) {
    var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
    return i === "" || i === "true";
  }, Il = function(t, n, i) {
    if (ki(t)) return [];
    var r = Array.prototype.slice.apply(t.querySelectorAll(yi));
    return n && Ht.call(t, yi) && r.unshift(t), r = r.filter(i), r;
  }, Pl = function e(t, n, i) {
    for (var r = [], o = Array.from(t); o.length; ) {
      var a = o.shift();
      if (!ki(a, false)) if (a.tagName === "SLOT") {
        var l = a.assignedElements(), c = l.length ? l : a.children, s = e(c, true, i);
        i.flatten ? r.push.apply(r, s) : r.push({
          scopeParent: a,
          candidates: s
        });
      } else {
        var u = Ht.call(a, yi);
        u && i.filter(a) && (n || !t.includes(a)) && r.push(a);
        var p = a.shadowRoot || typeof i.getShadowRoot == "function" && i.getShadowRoot(a), f = !ki(p, false) && (!i.shadowRootFilter || i.shadowRootFilter(a));
        if (p && f) {
          var d = e(p === true ? a.children : p.children, true, i);
          i.flatten ? r.push.apply(r, d) : r.push({
            scopeParent: a,
            candidates: d
          });
        } else o.unshift.apply(o, a.children);
      }
    }
    return r;
  }, Tl = function(t) {
    return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
  }, Ft = function(t) {
    if (!t) throw new Error("No node provided");
    return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || pu(t)) && !Tl(t) ? 0 : t.tabIndex;
  }, du = function(t, n) {
    var i = Ft(t);
    return i < 0 && n && !Tl(t) ? 0 : i;
  }, fu = function(t, n) {
    return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
  }, Nl = function(t) {
    return t.tagName === "INPUT";
  }, mu = function(t) {
    return Nl(t) && t.type === "hidden";
  }, hu = function(t) {
    var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
      return i.tagName === "SUMMARY";
    });
    return n;
  }, gu = function(t, n) {
    for (var i = 0; i < t.length; i++) if (t[i].checked && t[i].form === n) return t[i];
  }, xu = function(t) {
    if (!t.name) return true;
    var n = t.form || wi(t), i = function(l) {
      return n.querySelectorAll('input[type="radio"][name="' + l + '"]');
    }, r;
    if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function") r = i(window.CSS.escape(t.name));
    else try {
      r = i(t.name);
    } catch (a) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", a.message), false;
    }
    var o = gu(r, t.form);
    return !o || o === t;
  }, vu = function(t) {
    return Nl(t) && t.type === "radio";
  }, bu = function(t) {
    return vu(t) && !xu(t);
  }, yu = function(t) {
    var n, i = t && wi(t), r = (n = i) === null || n === void 0 ? void 0 : n.host, o = false;
    if (i && i !== t) {
      var a, l, c;
      for (o = !!((a = r) !== null && a !== void 0 && (l = a.ownerDocument) !== null && l !== void 0 && l.contains(r) || t != null && (c = t.ownerDocument) !== null && c !== void 0 && c.contains(t)); !o && r; ) {
        var s, u, p;
        i = wi(r), r = (s = i) === null || s === void 0 ? void 0 : s.host, o = !!((u = r) !== null && u !== void 0 && (p = u.ownerDocument) !== null && p !== void 0 && p.contains(r));
      }
    }
    return o;
  }, Uo = function(t) {
    var n = t.getBoundingClientRect(), i = n.width, r = n.height;
    return i === 0 && r === 0;
  }, wu = function(t, n) {
    var i = n.displayCheck, r = n.getShadowRoot;
    if (getComputedStyle(t).visibility === "hidden") return true;
    var o = Ht.call(t, "details>summary:first-of-type"), a = o ? t.parentElement : t;
    if (Ht.call(a, "details:not([open]) *")) return true;
    if (!i || i === "full" || i === "legacy-full") {
      if (typeof r == "function") {
        for (var l = t; t; ) {
          var c = t.parentElement, s = wi(t);
          if (c && !c.shadowRoot && r(c) === true) return Uo(t);
          t.assignedSlot ? t = t.assignedSlot : !c && s !== t.ownerDocument ? t = s.host : t = c;
        }
        t = l;
      }
      if (yu(t)) return !t.getClientRects().length;
      if (i !== "legacy-full") return true;
    } else if (i === "non-zero-area") return Uo(t);
    return false;
  }, ku = function(t) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName)) for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var i = 0; i < n.children.length; i++) {
          var r = n.children.item(i);
          if (r.tagName === "LEGEND") return Ht.call(n, "fieldset[disabled] *") ? true : !r.contains(t);
        }
        return true;
      }
      n = n.parentElement;
    }
    return false;
  }, Ci = function(t, n) {
    return !(n.disabled || ki(n) || mu(n) || wu(n, t) || hu(n) || ku(n));
  }, Tr = function(t, n) {
    return !(bu(n) || Ft(n) < 0 || !Ci(t, n));
  }, Cu = function(t) {
    var n = parseInt(t.getAttribute("tabindex"), 10);
    return !!(isNaN(n) || n >= 0);
  }, Ou = function e(t) {
    var n = [], i = [];
    return t.forEach(function(r, o) {
      var a = !!r.scopeParent, l = a ? r.scopeParent : r, c = du(l, a), s = a ? e(r.candidates) : l;
      c === 0 ? a ? n.push.apply(n, s) : n.push(l) : i.push({
        documentOrder: o,
        tabIndex: c,
        item: r,
        isScope: a,
        content: s
      });
    }), i.sort(fu).reduce(function(r, o) {
      return o.isScope ? r.push.apply(r, o.content) : r.push(o.content), r;
    }, []).concat(n);
  }, Su = function(t, n) {
    n = n || {};
    var i;
    return n.getShadowRoot ? i = Pl([
      t
    ], n.includeContainer, {
      filter: Tr.bind(null, n),
      flatten: false,
      getShadowRoot: n.getShadowRoot,
      shadowRootFilter: Cu
    }) : i = Il(t, n.includeContainer, Tr.bind(null, n)), Ou(i);
  }, _u = function(t, n) {
    n = n || {};
    var i;
    return n.getShadowRoot ? i = Pl([
      t
    ], n.includeContainer, {
      filter: Ci.bind(null, n),
      flatten: true,
      getShadowRoot: n.getShadowRoot
    }) : i = Il(t, n.includeContainer, Ci.bind(null, n)), i;
  }, Ut = function(t, n) {
    if (n = n || {}, !t) throw new Error("No node provided");
    return Ht.call(t, yi) === false ? false : Tr(n, t);
  }, ju = jl.concat("iframe").join(","), Qi = function(t, n) {
    if (n = n || {}, !t) throw new Error("No node provided");
    return Ht.call(t, ju) === false ? false : Ci(n, t);
  };
  function Nr(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
  }
  function Eu(e) {
    if (Array.isArray(e)) return Nr(e);
  }
  function Iu(e, t, n) {
    return (t = Ru(t)) in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[t] = n, e;
  }
  function Pu(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
  }
  function Tu() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Xo(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t && (i = i.filter(function(r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), n.push.apply(n, i);
    }
    return n;
  }
  function Ko(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2 ? Xo(Object(n), true).forEach(function(i) {
        Iu(e, i, n[i]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xo(Object(n)).forEach(function(i) {
        Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
      });
    }
    return e;
  }
  function Nu(e) {
    return Eu(e) || Pu(e) || Au(e) || Tu();
  }
  function Mu(e, t) {
    if (typeof e != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
      var i = n.call(e, t);
      if (typeof i != "object") return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }
  function Ru(e) {
    var t = Mu(e, "string");
    return typeof t == "symbol" ? t : t + "";
  }
  function Au(e, t) {
    if (e) {
      if (typeof e == "string") return Nr(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Nr(e, t) : void 0;
    }
  }
  var Go = {
    activateTrap: function(t, n) {
      if (t.length > 0) {
        var i = t[t.length - 1];
        i !== n && i._setPausedState(true);
      }
      var r = t.indexOf(n);
      r === -1 || t.splice(r, 1), t.push(n);
    },
    deactivateTrap: function(t, n) {
      var i = t.indexOf(n);
      i !== -1 && t.splice(i, 1), t.length > 0 && !t[t.length - 1]._isManuallyPaused() && t[t.length - 1]._setPausedState(false);
    }
  }, Du = function(t) {
    return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
  }, Lu = function(t) {
    return (t == null ? void 0 : t.key) === "Escape" || (t == null ? void 0 : t.key) === "Esc" || (t == null ? void 0 : t.keyCode) === 27;
  }, wn = function(t) {
    return (t == null ? void 0 : t.key) === "Tab" || (t == null ? void 0 : t.keyCode) === 9;
  }, Fu = function(t) {
    return wn(t) && !t.shiftKey;
  }, zu = function(t) {
    return wn(t) && t.shiftKey;
  }, Yo = function(t) {
    return setTimeout(t, 0);
  }, pn = function(t) {
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
    return typeof t == "function" ? t.apply(void 0, i) : t;
  }, Zn = function(t) {
    return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
  }, Bu = [], Hu = function(t, n) {
    var i = (n == null ? void 0 : n.document) || document, r = (n == null ? void 0 : n.trapStack) || Bu, o = Ko({
      returnFocusOnDeactivate: true,
      escapeDeactivates: true,
      delayInitialFocus: true,
      isKeyForward: Fu,
      isKeyBackward: zu
    }, n), a = {
      containers: [],
      containerGroups: [],
      tabbableGroups: [],
      nodeFocusedBeforeActivation: null,
      mostRecentlyFocusedNode: null,
      active: false,
      paused: false,
      manuallyPaused: false,
      delayInitialFocusTimer: void 0,
      recentNavEvent: void 0
    }, l, c = function(y, w, S) {
      return y && y[w] !== void 0 ? y[w] : o[S || w];
    }, s = function(y, w) {
      var S = typeof (w == null ? void 0 : w.composedPath) == "function" ? w.composedPath() : void 0;
      return a.containerGroups.findIndex(function(z) {
        var H = z.container, W = z.tabbableNodes;
        return H.contains(y) || (S == null ? void 0 : S.includes(H)) || W.find(function(q) {
          return q === y;
        });
      });
    }, u = function(y) {
      var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, S = w.hasFallback, z = S === void 0 ? false : S, H = w.params, W = H === void 0 ? [] : H, q = o[y];
      if (typeof q == "function" && (q = q.apply(void 0, Nu(W))), q === true && (q = void 0), !q) {
        if (q === void 0 || q === false) return q;
        throw new Error("`".concat(y, "` was specified but was not a node, or did not return a node"));
      }
      var h = q;
      if (typeof q == "string") {
        try {
          h = i.querySelector(q);
        } catch (U) {
          throw new Error("`".concat(y, '` appears to be an invalid selector; error="').concat(U.message, '"'));
        }
        if (!h && !z) throw new Error("`".concat(y, "` as selector refers to no known node"));
      }
      return h;
    }, p = function() {
      var y = u("initialFocus", {
        hasFallback: true
      });
      if (y === false) return false;
      if (y === void 0 || y && !Qi(y, o.tabbableOptions)) if (s(i.activeElement) >= 0) y = i.activeElement;
      else {
        var w = a.tabbableGroups[0], S = w && w.firstTabbableNode;
        y = S || u("fallbackFocus");
      }
      else y === null && (y = u("fallbackFocus"));
      if (!y) throw new Error("Your focus-trap needs to have at least one focusable element");
      return y;
    }, f = function() {
      if (a.containerGroups = a.containers.map(function(y) {
        var w = Su(y, o.tabbableOptions), S = _u(y, o.tabbableOptions), z = w.length > 0 ? w[0] : void 0, H = w.length > 0 ? w[w.length - 1] : void 0, W = S.find(function(U) {
          return Ut(U);
        }), q = S.slice().reverse().find(function(U) {
          return Ut(U);
        }), h = !!w.find(function(U) {
          return Ft(U) > 0;
        });
        return {
          container: y,
          tabbableNodes: w,
          focusableNodes: S,
          posTabIndexesFound: h,
          firstTabbableNode: z,
          lastTabbableNode: H,
          firstDomTabbableNode: W,
          lastDomTabbableNode: q,
          nextTabbableNode: function(Q) {
            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, G = w.indexOf(Q);
            return G < 0 ? g ? S.slice(S.indexOf(Q) + 1).find(function(le) {
              return Ut(le);
            }) : S.slice(0, S.indexOf(Q)).reverse().find(function(le) {
              return Ut(le);
            }) : w[G + (g ? 1 : -1)];
          }
        };
      }), a.tabbableGroups = a.containerGroups.filter(function(y) {
        return y.tabbableNodes.length > 0;
      }), a.tabbableGroups.length <= 0 && !u("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
      if (a.containerGroups.find(function(y) {
        return y.posTabIndexesFound;
      }) && a.containerGroups.length > 1) throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
    }, d = function(y) {
      var w = y.activeElement;
      if (w) return w.shadowRoot && w.shadowRoot.activeElement !== null ? d(w.shadowRoot) : w;
    }, x = function(y) {
      if (y !== false && y !== d(document)) {
        if (!y || !y.focus) {
          x(p());
          return;
        }
        y.focus({
          preventScroll: !!o.preventScroll
        }), a.mostRecentlyFocusedNode = y, Du(y) && y.select();
      }
    }, v = function(y) {
      var w = u("setReturnFocus", {
        params: [
          y
        ]
      });
      return w || (w === false ? false : y);
    }, C = function(y) {
      var w = y.target, S = y.event, z = y.isBackward, H = z === void 0 ? false : z;
      w = w || Zn(S), f();
      var W = null;
      if (a.tabbableGroups.length > 0) {
        var q = s(w, S), h = q >= 0 ? a.containerGroups[q] : void 0;
        if (q < 0) H ? W = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : W = a.tabbableGroups[0].firstTabbableNode;
        else if (H) {
          var U = a.tabbableGroups.findIndex(function(ke) {
            var me = ke.firstTabbableNode;
            return w === me;
          });
          if (U < 0 && (h.container === w || Qi(w, o.tabbableOptions) && !Ut(w, o.tabbableOptions) && !h.nextTabbableNode(w, false)) && (U = q), U >= 0) {
            var Q = U === 0 ? a.tabbableGroups.length - 1 : U - 1, g = a.tabbableGroups[Q];
            W = Ft(w) >= 0 ? g.lastTabbableNode : g.lastDomTabbableNode;
          } else wn(S) || (W = h.nextTabbableNode(w, false));
        } else {
          var G = a.tabbableGroups.findIndex(function(ke) {
            var me = ke.lastTabbableNode;
            return w === me;
          });
          if (G < 0 && (h.container === w || Qi(w, o.tabbableOptions) && !Ut(w, o.tabbableOptions) && !h.nextTabbableNode(w)) && (G = q), G >= 0) {
            var le = G === a.tabbableGroups.length - 1 ? 0 : G + 1, ee = a.tabbableGroups[le];
            W = Ft(w) >= 0 ? ee.firstTabbableNode : ee.firstDomTabbableNode;
          } else wn(S) || (W = h.nextTabbableNode(w));
        }
      } else W = u("fallbackFocus");
      return W;
    }, k = function(y) {
      var w = Zn(y);
      if (!(s(w, y) >= 0)) {
        if (pn(o.clickOutsideDeactivates, y)) {
          l.deactivate({
            returnFocus: o.returnFocusOnDeactivate
          });
          return;
        }
        pn(o.allowOutsideClick, y) || y.preventDefault();
      }
    }, j = function(y) {
      var w = Zn(y), S = s(w, y) >= 0;
      if (S || w instanceof Document) S && (a.mostRecentlyFocusedNode = w);
      else {
        y.stopImmediatePropagation();
        var z, H = true;
        if (a.mostRecentlyFocusedNode) if (Ft(a.mostRecentlyFocusedNode) > 0) {
          var W = s(a.mostRecentlyFocusedNode), q = a.containerGroups[W].tabbableNodes;
          if (q.length > 0) {
            var h = q.findIndex(function(U) {
              return U === a.mostRecentlyFocusedNode;
            });
            h >= 0 && (o.isKeyForward(a.recentNavEvent) ? h + 1 < q.length && (z = q[h + 1], H = false) : h - 1 >= 0 && (z = q[h - 1], H = false));
          }
        } else a.containerGroups.some(function(U) {
          return U.tabbableNodes.some(function(Q) {
            return Ft(Q) > 0;
          });
        }) || (H = false);
        else H = false;
        H && (z = C({
          target: a.mostRecentlyFocusedNode,
          isBackward: o.isKeyBackward(a.recentNavEvent)
        })), x(z || a.mostRecentlyFocusedNode || p());
      }
      a.recentNavEvent = void 0;
    }, I = function(y) {
      var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      a.recentNavEvent = y;
      var S = C({
        event: y,
        isBackward: w
      });
      S && (wn(y) && y.preventDefault(), x(S));
    }, R = function(y) {
      (o.isKeyForward(y) || o.isKeyBackward(y)) && I(y, o.isKeyBackward(y));
    }, L = function(y) {
      Lu(y) && pn(o.escapeDeactivates, y) !== false && (y.preventDefault(), l.deactivate());
    }, O = function(y) {
      var w = Zn(y);
      s(w, y) >= 0 || pn(o.clickOutsideDeactivates, y) || pn(o.allowOutsideClick, y) || (y.preventDefault(), y.stopImmediatePropagation());
    }, M = function() {
      if (a.active) return Go.activateTrap(r, l), a.delayInitialFocusTimer = o.delayInitialFocus ? Yo(function() {
        x(p());
      }) : x(p()), i.addEventListener("focusin", j, true), i.addEventListener("mousedown", k, {
        capture: true,
        passive: false
      }), i.addEventListener("touchstart", k, {
        capture: true,
        passive: false
      }), i.addEventListener("click", O, {
        capture: true,
        passive: false
      }), i.addEventListener("keydown", R, {
        capture: true,
        passive: false
      }), i.addEventListener("keydown", L), l;
    }, F = function() {
      if (a.active) return i.removeEventListener("focusin", j, true), i.removeEventListener("mousedown", k, true), i.removeEventListener("touchstart", k, true), i.removeEventListener("click", O, true), i.removeEventListener("keydown", R, true), i.removeEventListener("keydown", L), l;
    }, D = function(y) {
      var w = y.some(function(S) {
        var z = Array.from(S.removedNodes);
        return z.some(function(H) {
          return H === a.mostRecentlyFocusedNode;
        });
      });
      w && x(p());
    }, P = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(D) : void 0, N = function() {
      P && (P.disconnect(), a.active && !a.paused && a.containers.map(function(y) {
        P.observe(y, {
          subtree: true,
          childList: true
        });
      }));
    };
    return l = {
      get active() {
        return a.active;
      },
      get paused() {
        return a.paused;
      },
      activate: function(y) {
        if (a.active) return this;
        var w = c(y, "onActivate"), S = c(y, "onPostActivate"), z = c(y, "checkCanFocusTrap");
        z || f(), a.active = true, a.paused = false, a.nodeFocusedBeforeActivation = i.activeElement, w == null ? void 0 : w();
        var H = function() {
          z && f(), M(), N(), S == null ? void 0 : S();
        };
        return z ? (z(a.containers.concat()).then(H, H), this) : (H(), this);
      },
      deactivate: function(y) {
        if (!a.active) return this;
        var w = Ko({
          onDeactivate: o.onDeactivate,
          onPostDeactivate: o.onPostDeactivate,
          checkCanReturnFocus: o.checkCanReturnFocus
        }, y);
        clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, F(), a.active = false, a.paused = false, N(), Go.deactivateTrap(r, l);
        var S = c(w, "onDeactivate"), z = c(w, "onPostDeactivate"), H = c(w, "checkCanReturnFocus"), W = c(w, "returnFocus", "returnFocusOnDeactivate");
        S == null ? void 0 : S();
        var q = function() {
          Yo(function() {
            W && x(v(a.nodeFocusedBeforeActivation)), z == null ? void 0 : z();
          });
        };
        return W && H ? (H(v(a.nodeFocusedBeforeActivation)).then(q, q), this) : (q(), this);
      },
      pause: function(y) {
        return a.active ? (a.manuallyPaused = true, this._setPausedState(true, y)) : this;
      },
      unpause: function(y) {
        return a.active ? (a.manuallyPaused = false, r[r.length - 1] !== this ? this : this._setPausedState(false, y)) : this;
      },
      updateContainerElements: function(y) {
        var w = [].concat(y).filter(Boolean);
        return a.containers = w.map(function(S) {
          return typeof S == "string" ? i.querySelector(S) : S;
        }), a.active && f(), N(), this;
      }
    }, Object.defineProperties(l, {
      _isManuallyPaused: {
        value: function() {
          return a.manuallyPaused;
        }
      },
      _setPausedState: {
        value: function(y, w) {
          if (a.paused === y) return this;
          if (a.paused = y, y) {
            var S = c(w, "onPause"), z = c(w, "onPostPause");
            S == null ? void 0 : S(), F(), N(), z == null ? void 0 : z();
          } else {
            var H = c(w, "onUnpause"), W = c(w, "onPostUnpause");
            H == null ? void 0 : H(), f(), M(), N(), W == null ? void 0 : W();
          }
          return this;
        }
      }
    }), l.updateContainerElements(t), l;
  };
  function $u(e) {
    const t = b.useRef(e);
    t.current = e, b.useEffect(() => () => {
      t.current();
    }, []);
  }
  const uo = b.forwardRef(function(t, n) {
    var { active: i = true, paused: r = false, focusTrapOptions: o = {}, preventScrollOnDeactivate: a = false } = t, l = K(t, [
      "active",
      "paused",
      "focusTrapOptions",
      "preventScrollOnDeactivate"
    ]);
    const c = b.useRef(null);
    b.useImperativeHandle(n, () => c.current);
    const s = b.useRef(null);
    b.useEffect(() => {
      const p = Hu(c.current, Object.assign(Object.assign({}, o), {
        returnFocusOnDeactivate: false
      }));
      return s.current = p, () => {
        p.deactivate();
      };
    }, []), b.useEffect(() => {
      const p = s.current;
      i ? p == null ? void 0 : p.activate() : p == null ? void 0 : p.deactivate();
    }, [
      i
    ]), b.useEffect(() => {
      const p = s.current;
      r ? p == null ? void 0 : p.pause() : p == null ? void 0 : p.unpause();
    }, [
      r
    ]);
    const u = b.useRef(typeof document < "u" ? document.activeElement : null);
    return $u(() => {
      o.returnFocusOnDeactivate !== false && u.current instanceof HTMLElement && u.current.focus({
        preventScroll: a
      });
    }), m.jsx("div", Object.assign({
      ref: c
    }, l));
  });
  uo.displayName = "FocusTrap";
  function po(e = "pf") {
    const t = (/* @__PURE__ */ new Date()).getTime() + Math.random().toString(36).slice(2);
    return `${e}-${t}`;
  }
  function qu(e, t) {
    let n;
    return (...i) => {
      clearTimeout(n), n = setTimeout(() => e.apply(this, i), t);
    };
  }
  const Ml = (e, t) => Object.entries(e || {}).reduce((n, [i, r]) => i === "default" ? Object.assign(Object.assign({}, n), {
    [t]: r
  }) : Object.assign(Object.assign({}, n), {
    [`${t}-on-${i}`]: r
  }), {}), Et = (e, t, n = "", i, r) => {
    if (!e) return "";
    if (i && !r) {
      if (i in e) return t.modifiers[Ji(`${n}${e[i]}`)];
      const o = [
        "2xl",
        "xl",
        "lg",
        "md",
        "sm",
        "default"
      ], a = o.indexOf(i);
      for (let l = a; l < o.length; l++) if (o[l] in e) return t.modifiers[Ji(`${n}${e[o[l]]}`)];
      return "";
    }
    return Object.entries(e || {}).map(([o, a]) => `${n}${a}${o !== "default" ? `-on-${o}` : ""}${r && o !== "default" ? "-height" : ""}`).map(Ji).map((o) => o.replace(/-?(\dxl)/gi, (a, l) => `_${l}`)).map((o) => t.modifiers[o]).filter(Boolean).join(" ");
  }, Rl = (e) => e === null ? null : e >= un["2xl"] ? "2xl" : e >= un.xl ? "xl" : e >= un.lg ? "lg" : e >= un.md ? "md" : e >= un.sm ? "sm" : "default", Al = (e) => e === null ? null : e >= cn["2xl"] ? "2xl" : e >= cn.xl ? "xl" : e >= cn.lg ? "lg" : e >= cn.md ? "md" : e >= cn.sm ? "sm" : "default", Vu = (e) => e.toUpperCase().replace("-", "").replace("_", ""), Ji = (e) => e.replace(/([-_][a-z])/gi, Vu), At = !!(typeof window < "u" && window.document && window.document.createElement), ei = (e) => {
    e.forEach((t) => {
      t.current && clearTimeout(t.current);
    });
  }, di = (e, t = "ltr") => {
    if (!e) return t;
    const n = getComputedStyle(e).getPropertyValue("direction");
    return [
      "ltr",
      "rtl"
    ].includes(n) ? n : t;
  };
  let Wu = 0;
  function Uu() {
    return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : po();
  }
  class Wn extends b.Component {
    constructor() {
      super(...arguments), this.uniqueElement = this.props.isRandom ? Uu() : Wu++, this.id = `${this.props.prefix}${this.uniqueElement}`;
    }
    render() {
      return this.props.children(this.id);
    }
  }
  Wn.displayName = "GenerateId";
  Wn.defaultProps = {
    prefix: "pf-random-id-",
    isRandom: false
  };
  const Xu = "*";
  let Ku = 0;
  const Qo = "OUIA-Generated-", Zi = {};
  function Un(e, t, n = true) {
    return {
      "data-ouia-component-type": `PF6/${e}`,
      "data-ouia-safe": n,
      "data-ouia-component-id": t
    };
  }
  const fo = (e, t, n = true, i) => ({
    "data-ouia-component-type": `PF6/${e}`,
    "data-ouia-safe": n,
    "data-ouia-component-id": Gu(e, t, i)
  }), Gu = (e, t, n) => {
    const i = b.useMemo(() => on(e, n), [
      e,
      n
    ]);
    return t ?? i;
  };
  function on(e, t) {
    try {
      let n;
      return typeof window < "u" ? n = `${window.location.href}-${e}-${t || ""}` : n = `${e}-${t || ""}`, Zi[n] || (Zi[n] = 0), `${Qo}${e}-${t ? `${t}-` : ""}${++Zi[n]}`;
    } catch {
      return `${Qo}${e}-${t ? `${t}-` : ""}${++Ku}`;
    }
  }
  function Mn(e) {
    const t = e.getBoundingClientRect();
    return {
      width: t.width,
      height: t.height,
      top: t.top,
      right: t.right,
      bottom: t.bottom,
      left: t.left,
      x: t.left,
      y: t.top
    };
  }
  function Ct(e) {
    if (e.toString() !== "[object Window]") {
      const t = e.ownerDocument;
      return t ? t.defaultView : window;
    }
    return e;
  }
  function mo(e) {
    const t = Ct(e), n = t.pageXOffset, i = t.pageYOffset;
    return {
      scrollLeft: n,
      scrollTop: i
    };
  }
  function Rn(e) {
    const t = Ct(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function wt(e) {
    const t = Ct(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function Yu(e) {
    return {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    };
  }
  function Qu(e) {
    return e === Ct(e) || !wt(e) ? mo(e) : Yu(e);
  }
  function mt(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function It(e) {
    return (Rn(e) ? e.ownerDocument : e.document).documentElement;
  }
  function ho(e) {
    return Mn(It(e)).left + mo(e).scrollLeft;
  }
  function _t(e) {
    return Ct(e).getComputedStyle(e);
  }
  function go(e) {
    const { overflow: t, overflowX: n, overflowY: i } = _t(e);
    return /auto|scroll|overlay|hidden/.test(t + i + n);
  }
  function Ju(e, t, n = false) {
    const i = It(t), r = Mn(e), o = wt(t);
    let a = {
      scrollLeft: 0,
      scrollTop: 0
    }, l = {
      x: 0,
      y: 0
    };
    return (o || !o && !n) && ((mt(t) !== "body" || go(i)) && (a = Qu(t)), wt(t) ? (l = Mn(t), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = ho(i))), {
      x: r.left + a.scrollLeft - l.x,
      y: r.top + a.scrollTop - l.y,
      width: r.width,
      height: r.height
    };
  }
  function xo(e) {
    return {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: e.offsetWidth,
      height: e.offsetHeight
    };
  }
  function Fi(e) {
    return mt(e) === "html" ? e : e.assignedSlot || e.parentNode || e.host || It(e);
  }
  function Dl(e) {
    return [
      "html",
      "body",
      "#document"
    ].indexOf(mt(e)) >= 0 ? e.ownerDocument.body : wt(e) && go(e) ? e : Dl(Fi(e));
  }
  function kn(e, t = []) {
    const n = Dl(e), i = mt(n) === "body", r = Ct(n), o = i ? [
      r
    ].concat(r.visualViewport || [], go(n) ? n : []) : n, a = t.concat(o);
    return i ? a : a.concat(kn(Fi(o)));
  }
  function Zu(e) {
    return [
      "table",
      "td",
      "th"
    ].indexOf(mt(e)) >= 0;
  }
  function Jo(e) {
    if (!wt(e) || _t(e).position === "fixed") return null;
    const t = e.offsetParent;
    if (t) {
      const n = It(t);
      if (mt(t) === "body" && _t(t).position === "static" && _t(n).position !== "static") return n;
    }
    return t;
  }
  function ep(e) {
    let t = Fi(e);
    for (; wt(t) && [
      "html",
      "body"
    ].indexOf(mt(t)) < 0; ) {
      const n = _t(t);
      if (n.transform !== "none" || n.perspective !== "none" || n.willChange && n.willChange !== "auto") return t;
      t = t.parentNode;
    }
    return null;
  }
  function Xn(e) {
    const t = Ct(e);
    let n = Jo(e);
    for (; n && Zu(n) && _t(n).position === "static"; ) n = Jo(n);
    return n && mt(n) === "body" && _t(n).position === "static" ? t : n || ep(e) || t;
  }
  const ct = "top", dt = "bottom", ft = "right", ut = "left", vo = "auto", Kn = [
    ct,
    dt,
    ft,
    ut
  ], en = "start", bo = "end", tp = "clippingParents", Ll = "viewport", dn = "popper", np = "reference", Zo = Kn.reduce((e, t) => e.concat([
    `${t}-${en}`,
    `${t}-${bo}`
  ]), []), Fl = [
    ...Kn,
    vo
  ].reduce((e, t) => e.concat([
    t,
    `${t}-${en}`,
    `${t}-${bo}`
  ]), []), ip = "beforeRead", rp = "read", op = "afterRead", ap = "beforeMain", lp = "main", sp = "afterMain", cp = "beforeWrite", up = "write", pp = "afterWrite", dp = [
    ip,
    rp,
    op,
    ap,
    lp,
    sp,
    cp,
    up,
    pp
  ];
  function fp(e) {
    const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), i = [];
    e.forEach((o) => {
      t.set(o.name, o);
    });
    function r(o) {
      n.add(o.name), [
        ...o.requires || [],
        ...o.requiresIfExists || []
      ].forEach((l) => {
        if (!n.has(l)) {
          const c = t.get(l);
          c && r(c);
        }
      }), i.push(o);
    }
    return e.forEach((o) => {
      n.has(o.name) || r(o);
    }), i;
  }
  function mp(e) {
    const t = fp(e);
    return dp.reduce((n, i) => n.concat(t.filter((r) => r.phase === i)), []);
  }
  function hp(e) {
    let t;
    return () => (t || (t = new Promise((n) => {
      Promise.resolve().then(() => {
        t = void 0, n(e());
      });
    })), t);
  }
  function yt(e) {
    return e.split("-")[0];
  }
  function gp(e) {
    const t = e.reduce((n, i) => {
      const r = n[i.name];
      return n[i.name] = r ? Object.assign(Object.assign(Object.assign({}, r), i), {
        options: Object.assign(Object.assign({}, r.options), i.options),
        data: Object.assign(Object.assign({}, r.data), i.data)
      }) : i, n;
    }, {});
    return Object.keys(t).map((n) => t[n]);
  }
  function xp(e) {
    const t = Ct(e), n = It(e), i = t.visualViewport;
    let r = n.clientWidth, o = n.clientHeight, a = 0, l = 0;
    return i && (r = i.width, o = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = i.offsetLeft, l = i.offsetTop)), {
      width: r,
      height: o,
      x: a + ho(e),
      y: l
    };
  }
  function vp(e) {
    const t = It(e), n = mo(e), i = e.ownerDocument.body, r = Math.max(t.scrollWidth, t.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = Math.max(t.scrollHeight, t.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
    let a = -n.scrollLeft + ho(e);
    const l = -n.scrollTop;
    return _t(i || t).direction === "rtl" && (a += Math.max(t.clientWidth, i ? i.clientWidth : 0) - r), {
      width: r,
      height: o,
      x: a,
      y: l
    };
  }
  function zl(e, t) {
    const n = !!(t.getRootNode && t.getRootNode().host);
    if (e.contains(t)) return true;
    if (n) {
      let i = t;
      do {
        if (i && e.isSameNode(i)) return true;
        i = i.parentNode || i.host;
      } while (i);
    }
    return false;
  }
  function Mr(e) {
    return Object.assign(Object.assign({}, e), {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function bp(e) {
    const t = Mn(e);
    return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
  }
  function ea(e, t) {
    return t === Ll ? Mr(xp(e)) : wt(t) ? bp(t) : Mr(vp(It(e)));
  }
  function yp(e) {
    const t = kn(Fi(e)), i = [
      "absolute",
      "fixed"
    ].indexOf(_t(e).position) >= 0 && wt(e) ? Xn(e) : e;
    return Rn(i) ? t.filter((r) => Rn(r) && zl(r, i) && mt(r) !== "body") : [];
  }
  function wp(e, t, n) {
    const r = [
      ...t === "clippingParents" ? yp(e) : [].concat(t),
      n
    ], o = r[0], a = r.reduce((l, c) => {
      const s = ea(e, c);
      return l.top = Math.max(s.top, l.top), l.right = Math.min(s.right, l.right), l.bottom = Math.min(s.bottom, l.bottom), l.left = Math.max(s.left, l.left), l;
    }, ea(e, o));
    return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
  }
  function An(e) {
    return e.split("-")[1];
  }
  function yo(e) {
    return [
      "top",
      "bottom"
    ].indexOf(e) >= 0 ? "x" : "y";
  }
  function Bl({ reference: e, element: t, placement: n }) {
    const i = n ? yt(n) : null, r = n ? An(n) : null, o = e.x + e.width / 2 - t.width / 2, a = e.y + e.height / 2 - t.height / 2;
    let l;
    switch (i) {
      case ct:
        l = {
          x: o,
          y: e.y - t.height
        };
        break;
      case dt:
        l = {
          x: o,
          y: e.y + e.height
        };
        break;
      case ft:
        l = {
          x: e.x + e.width,
          y: a
        };
        break;
      case ut:
        l = {
          x: e.x - t.width,
          y: a
        };
        break;
      default:
        l = {
          x: e.x,
          y: e.y
        };
    }
    const c = i ? yo(i) : null;
    if (c != null) {
      const s = c === "y" ? "height" : "width";
      switch (r) {
        case en:
          l[c] = Math.floor(l[c]) - Math.floor(e[s] / 2 - t[s] / 2);
          break;
        case bo:
          l[c] = Math.floor(l[c]) + Math.ceil(e[s] / 2 - t[s] / 2);
          break;
      }
    }
    return l;
  }
  function Hl() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function $l(e) {
    return Object.assign(Object.assign({}, Hl()), e);
  }
  function ql(e, t) {
    return t.reduce((n, i) => (n[i] = e, n), {});
  }
  function Dn(e, t = {}) {
    const { placement: n = e.placement, boundary: i = tp, rootBoundary: r = Ll, elementContext: o = dn, altBoundary: a = false, padding: l = 0 } = t, c = $l(typeof l != "number" ? l : ql(l, Kn)), s = o === dn ? np : dn, u = e.elements.reference, p = e.rects.popper, f = e.elements[a ? s : o], d = wp(Rn(f) ? f : f.contextElement || It(e.elements.popper), i, r), x = Mn(u), v = Bl({
      reference: x,
      element: p,
      placement: n
    }), C = Mr(Object.assign(Object.assign({}, p), v)), k = o === dn ? C : x, j = {
      top: d.top - k.top + c.top,
      bottom: k.bottom - d.bottom + c.bottom,
      left: d.left - k.left + c.left,
      right: k.right - d.right + c.right
    }, I = e.modifiersData.offset;
    if (o === dn && I) {
      const R = I[n];
      Object.keys(j).forEach((L) => {
        const O = [
          ft,
          dt
        ].indexOf(L) >= 0 ? 1 : -1, M = [
          ct,
          dt
        ].indexOf(L) >= 0 ? "y" : "x";
        j[L] += R[M] * O;
      });
    }
    return j;
  }
  const ta = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function na(...e) {
    return !e.some((t) => !(t && typeof t.getBoundingClientRect == "function"));
  }
  function Vl(e = {}) {
    const { defaultModifiers: t = [], defaultOptions: n = ta } = e;
    return function(r, o, a = n) {
      let l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign(Object.assign({}, ta), n),
        modifiersData: {},
        elements: {
          reference: r,
          popper: o
        },
        attributes: {},
        styles: {}
      }, c = [], s = false;
      const u = {
        state: l,
        setOptions(d) {
          f(), l.options = Object.assign(Object.assign(Object.assign({}, n), l.options), d), l.scrollParents = {
            reference: Rn(r) ? kn(r) : r.contextElement ? kn(r.contextElement) : [],
            popper: kn(o)
          };
          const x = mp(gp([
            ...t,
            ...l.options.modifiers
          ]));
          return l.orderedModifiers = x.filter((v) => v.enabled), p(), u.update();
        },
        forceUpdate() {
          if (s) return;
          const { reference: d, popper: x } = l.elements;
          if (na(d, x)) {
            l.rects = {
              reference: Ju(d, Xn(x), l.options.strategy === "fixed"),
              popper: xo(x)
            }, l.reset = false, l.placement = l.options.placement, l.orderedModifiers.forEach((v) => l.modifiersData[v.name] = Object.assign({}, v.data));
            for (let v = 0; v < l.orderedModifiers.length; v++) {
              if (l.reset === true) {
                l.reset = false, v = -1;
                continue;
              }
              const { fn: C, options: k = {}, name: j } = l.orderedModifiers[v];
              typeof C == "function" && (l = C({
                state: l,
                options: k,
                name: j,
                instance: u
              }) || l);
            }
          }
        },
        update: hp(() => new Promise((d) => {
          u.forceUpdate(), d(l);
        })),
        destroy() {
          f(), s = true;
        }
      };
      if (!na(r, o)) return u;
      u.setOptions(a).then((d) => {
        !s && a.onFirstUpdate && a.onFirstUpdate(d);
      });
      function p() {
        l.orderedModifiers.forEach(({ name: d, options: x = {}, effect: v }) => {
          if (typeof v == "function") {
            const C = v({
              state: l,
              name: d,
              instance: u,
              options: x
            }), k = () => {
            };
            c.push(C || k);
          }
        });
      }
      function f() {
        c.forEach((d) => d()), c = [];
      }
      return u;
    };
  }
  Vl();
  const ti = {
    passive: true
  };
  function kp({ state: e, instance: t, options: n }) {
    const { scroll: i = true, resize: r = true } = n, o = Ct(e.elements.popper), a = [
      ...e.scrollParents.reference,
      ...e.scrollParents.popper
    ];
    return i && a.forEach((l) => {
      l.addEventListener("scroll", t.update, ti);
    }), r && o.addEventListener("resize", t.update, ti), () => {
      i && a.forEach((l) => {
        l.removeEventListener("scroll", t.update, ti);
      }), r && o.removeEventListener("resize", t.update, ti);
    };
  }
  const Cp = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: () => {
    },
    effect: kp,
    data: {}
  };
  function Op({ state: e, name: t }) {
    e.modifiersData[t] = Bl({
      reference: e.rects.reference,
      element: e.rects.popper,
      placement: e.placement
    });
  }
  const Sp = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: Op,
    data: {}
  }, _p = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function jp({ x: e, y: t }) {
    const i = window.devicePixelRatio || 1;
    return {
      x: Math.round(e * i) / i || 0,
      y: Math.round(t * i) / i || 0
    };
  }
  function ia({ popper: e, popperRect: t, placement: n, offsets: i, position: r, gpuAcceleration: o, adaptive: a }) {
    let { x: l, y: c } = jp(i);
    const s = i.hasOwnProperty("x"), u = i.hasOwnProperty("y");
    let p = ut, f = ct;
    const d = window;
    if (a) {
      let v = Xn(e);
      v === Ct(e) && (v = It(e)), n === ct && (f = dt, c -= v.clientHeight - t.height, c *= o ? 1 : -1), n === ut && (p = ft, l -= v.clientWidth - t.width, l *= o ? 1 : -1);
    }
    const x = Object.assign({
      position: r
    }, a && _p);
    return o ? Object.assign(Object.assign({}, x), {
      [f]: u ? "0" : "",
      [p]: s ? "0" : "",
      transform: (d.devicePixelRatio || 1) < 2 ? `translate(${l}px, ${c}px)` : `translate3d(${l}px, ${c}px, 0)`
    }) : Object.assign(Object.assign({}, x), {
      [f]: u ? `${c}px` : "",
      [p]: s ? `${l}px` : "",
      transform: ""
    });
  }
  function Ep({ state: e, options: t }) {
    const { gpuAcceleration: n = true, adaptive: i = true } = t, r = {
      placement: yt(e.placement),
      popper: e.elements.popper,
      popperRect: e.rects.popper,
      gpuAcceleration: n
    };
    e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign(Object.assign({}, e.styles.popper), ia(Object.assign(Object.assign({}, r), {
      offsets: e.modifiersData.popperOffsets,
      position: e.options.strategy,
      adaptive: i
    })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign(Object.assign({}, e.styles.arrow), ia(Object.assign(Object.assign({}, r), {
      offsets: e.modifiersData.arrow,
      position: "absolute",
      adaptive: false
    })))), e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {
      "data-popper-placement": e.placement
    });
  }
  const Ip = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: Ep,
    data: {}
  };
  function Pp({ state: e }) {
    Object.keys(e.elements).forEach((t) => {
      const n = e.styles[t] || {}, i = e.attributes[t] || {}, r = e.elements[t];
      !wt(r) || !mt(r) || (Object.assign(r.style, n), Object.keys(i).forEach((o) => {
        const a = i[o];
        a === false ? r.removeAttribute(o) : r.setAttribute(o, a === true ? "" : a);
      }));
    });
  }
  function Tp({ state: e }) {
    const t = {
      popper: {
        position: e.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    return Object.assign(e.elements.popper.style, t.popper), e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), () => {
      Object.keys(e.elements).forEach((n) => {
        const i = e.elements[n], r = e.attributes[n] || {}, a = Object.keys(e.styles.hasOwnProperty(n) ? e.styles[n] : t[n]).reduce((l, c) => (l[c] = "", l), {});
        !wt(i) || !mt(i) || (Object.assign(i.style, a), Object.keys(r).forEach((l) => {
          i.removeAttribute(l);
        }));
      });
    };
  }
  const Np = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: Pp,
    effect: Tp,
    requires: [
      "computeStyles"
    ]
  };
  function Mp(e, t, n) {
    const i = yt(e), r = [
      ut,
      ct
    ].indexOf(i) >= 0 ? -1 : 1;
    let [o, a] = typeof n == "function" ? n(Object.assign(Object.assign({}, t), {
      placement: e
    })) : n;
    return o = o || 0, a = (a || 0) * r, [
      ut,
      ft
    ].indexOf(i) >= 0 ? {
      x: a,
      y: o
    } : {
      x: o,
      y: a
    };
  }
  function Rp({ state: e, options: t, name: n }) {
    const { offset: i = [
      0,
      0
    ] } = t, r = Fl.reduce((l, c) => (l[c] = Mp(c, e.rects, i), l), {}), { x: o, y: a } = r[e.placement];
    e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += o, e.modifiersData.popperOffsets.y += a), e.modifiersData[n] = r;
  }
  const Ap = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
      "popperOffsets"
    ],
    fn: Rp
  }, Dp = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function fi(e) {
    return e.replace(/left|right|bottom|top/g, (t) => Dp[t]);
  }
  const Lp = {
    start: "end",
    end: "start"
  };
  function ra(e) {
    return e.replace(/start|end/g, (t) => Lp[t]);
  }
  function Fp(e, t = {}) {
    const { placement: n, boundary: i, rootBoundary: r, padding: o, flipVariations: a, allowedAutoPlacements: l = Fl } = t, c = An(n), s = c ? a ? Zo : Zo.filter((f) => An(f) === c) : Kn;
    let u = s.filter((f) => l.indexOf(f) >= 0);
    u.length === 0 && (u = s);
    const p = u.reduce((f, d) => (f[d] = Dn(e, {
      placement: d,
      boundary: i,
      rootBoundary: r,
      padding: o
    })[yt(d)], f), {});
    return Object.keys(p).sort((f, d) => p[f] - p[d]);
  }
  function zp(e) {
    if (yt(e) === vo) return [];
    const t = fi(e);
    return [
      ra(e),
      t,
      ra(t)
    ];
  }
  function Bp({ state: e, options: t, name: n }) {
    if (e.modifiersData[n]._skip) return;
    const { mainAxis: i = true, altAxis: r = true, fallbackPlacements: o, padding: a, boundary: l, rootBoundary: c, altBoundary: s, flipVariations: u = true, allowedAutoPlacements: p } = t, f = e.options.placement, x = yt(f) === f, v = o || (x || !u ? [
      fi(f)
    ] : zp(f)), C = [
      f,
      ...v
    ].reduce((O, M) => O.concat(yt(M) === vo ? Fp(e, {
      placement: M,
      boundary: l,
      rootBoundary: c,
      padding: a,
      flipVariations: u,
      allowedAutoPlacements: p
    }) : M), []), k = e.rects.reference, j = e.rects.popper, I = /* @__PURE__ */ new Map();
    let R = true, L = C[0];
    for (let O = 0; O < C.length; O++) {
      const M = C[O], F = yt(M), D = An(M) === en, P = [
        ct,
        dt
      ].indexOf(F) >= 0, N = P ? "width" : "height", T = Dn(e, {
        placement: M,
        boundary: l,
        rootBoundary: c,
        altBoundary: s,
        padding: a
      });
      let y = P ? D ? ft : ut : D ? dt : ct;
      k[N] > j[N] && (y = fi(y));
      const w = fi(y), S = [];
      if (i && S.push(T[F] <= 0), r && S.push(T[y] <= 0, T[w] <= 0), S.every((z) => z)) {
        L = M, R = false;
        break;
      }
      I.set(M, S);
    }
    if (R) {
      const O = u ? 3 : 1;
      for (let M = O; M > 0; M--) {
        const F = C.find((D) => {
          const P = I.get(D);
          if (P) return P.slice(0, M).every((N) => N);
        });
        if (F) {
          L = F;
          break;
        }
      }
    }
    e.placement !== L && (e.modifiersData[n]._skip = true, e.placement = L, e.reset = true);
  }
  const Hp = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: Bp,
    requiresIfExists: [
      "offset"
    ],
    data: {
      _skip: false
    }
  };
  function $p(e) {
    return e === "x" ? "y" : "x";
  }
  function mi(e, t, n) {
    return Math.max(e, Math.min(t, n));
  }
  function qp({ state: e, options: t, name: n }) {
    const { mainAxis: i = true, altAxis: r = false, boundary: o, rootBoundary: a, altBoundary: l, padding: c, tether: s = true, tetherOffset: u = 0 } = t, p = Dn(e, {
      boundary: o,
      rootBoundary: a,
      padding: c,
      altBoundary: l
    }), f = yt(e.placement), d = An(e.placement), x = !d, v = yo(f), C = $p(v), k = e.modifiersData.popperOffsets, j = e.rects.reference, I = e.rects.popper, R = typeof u == "function" ? u(Object.assign(Object.assign({}, e.rects), {
      placement: e.placement
    })) : u, L = {
      x: 0,
      y: 0
    };
    if (k) {
      if (i) {
        const O = v === "y" ? ct : ut, M = v === "y" ? dt : ft, F = v === "y" ? "height" : "width", D = k[v], P = k[v] + p[O], N = k[v] - p[M], T = s ? -I[F] / 2 : 0, y = d === en ? j[F] : I[F], w = d === en ? -I[F] : -j[F], S = e.elements.arrow, z = s && S ? xo(S) : {
          width: 0,
          height: 0
        }, H = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : Hl(), W = H[O], q = H[M], h = mi(0, j[F], z[F]), U = x ? j[F] / 2 - T - h - W - R : y - h - W - R, Q = x ? -j[F] / 2 + T + h + q + R : w + h + q + R, g = e.elements.arrow && Xn(e.elements.arrow), G = g ? v === "y" ? g.clientTop || 0 : g.clientLeft || 0 : 0, le = e.modifiersData.offset ? e.modifiersData.offset[e.placement][v] : 0, ee = k[v] + U - le - G, ke = k[v] + Q - le, me = mi(s ? Math.min(P, ee) : P, D, s ? Math.max(N, ke) : N);
        k[v] = me, L[v] = me - D;
      }
      if (r) {
        const O = v === "x" ? ct : ut, M = v === "x" ? dt : ft, F = k[C], D = F + p[O], P = F - p[M], N = mi(D, F, P);
        k[C] = N, L[C] = N - F;
      }
      e.modifiersData[n] = L;
    }
  }
  const Vp = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: qp,
    requiresIfExists: [
      "offset"
    ]
  };
  function Wp({ state: e, name: t }) {
    const n = e.elements.arrow, i = e.modifiersData.popperOffsets, r = yt(e.placement), o = yo(r), l = [
      ut,
      ft
    ].indexOf(r) >= 0 ? "height" : "width";
    if (!n || !i) return;
    const c = e.modifiersData[`${t}#persistent`].padding, s = xo(n), u = o === "y" ? ct : ut, p = o === "y" ? dt : ft, f = e.rects.reference[l] + e.rects.reference[o] - i[o] - e.rects.popper[l], d = i[o] - e.rects.reference[o], x = Xn(n), v = x ? o === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0, C = f / 2 - d / 2, k = c[u], j = v - s[l] - c[p], I = v / 2 - s[l] / 2 + C, R = mi(k, I, j), L = o;
    e.modifiersData[t] = {
      [L]: R,
      centerOffset: R - I
    };
  }
  function Up({ state: e, options: t, name: n }) {
    let { element: i = "[data-popper-arrow]", padding: r = 0 } = t;
    i != null && (typeof i == "string" && (i = e.elements.popper.querySelector(i), !i) || zl(e.elements.popper, i) && (e.elements.arrow = i, e.modifiersData[`${n}#persistent`] = {
      padding: $l(typeof r != "number" ? r : ql(r, Kn))
    }));
  }
  const Xp = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: Wp,
    effect: Up,
    requires: [
      "popperOffsets"
    ],
    requiresIfExists: [
      "preventOverflow"
    ]
  };
  function oa(e, t, n = {
    x: 0,
    y: 0
  }) {
    return {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x
    };
  }
  function aa(e) {
    return [
      ct,
      ft,
      dt,
      ut
    ].some((t) => e[t] >= 0);
  }
  function Kp({ state: e, name: t }) {
    const n = e.rects.reference, i = e.rects.popper, r = e.modifiersData.preventOverflow, o = Dn(e, {
      elementContext: "reference"
    }), a = Dn(e, {
      altBoundary: true
    }), l = oa(o, n), c = oa(a, i, r), s = aa(l), u = aa(c);
    e.modifiersData[t] = {
      referenceClippingOffsets: l,
      popperEscapeOffsets: c,
      isReferenceHidden: s,
      hasPopperEscaped: u
    }, e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {
      "data-popper-reference-hidden": s,
      "data-popper-escaped": u
    });
  }
  const Gp = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
      "preventOverflow"
    ],
    fn: Kp
  }, Yp = [
    Cp,
    Sp,
    Ip,
    Np,
    Ap,
    Hp,
    Vp,
    Xp,
    Gp
  ], Qp = Vl({
    defaultModifiers: Yp
  }), Rr = At ? b.useLayoutEffect : b.useEffect, Jp = (e, t) => JSON.stringify(e) === JSON.stringify(t), la = (e) => e.reduce((t, [n, i]) => (t[n] = i, t), {}), Zp = [], ed = (e, t, n = {}) => {
    const i = b.useRef(null), r = {
      onFirstUpdate: n.onFirstUpdate,
      placement: n.placement || "bottom",
      strategy: n.strategy || "absolute",
      modifiers: n.modifiers || Zp
    }, [o, a] = b.useState({
      styles: {
        popper: {
          position: r.strategy,
          left: "0",
          top: "0"
        }
      },
      attributes: {}
    }), l = b.useMemo(() => ({
      name: "updateState",
      enabled: true,
      phase: "write",
      fn: ({ state: u }) => {
        const p = Object.keys(u.elements);
        a({
          styles: la(p.map((f) => [
            f,
            u.styles[f] || {}
          ])),
          attributes: la(p.map((f) => [
            f,
            u.attributes[f]
          ]))
        });
      },
      requires: [
        "computeStyles"
      ]
    }), []), c = b.useMemo(() => {
      const u = {
        onFirstUpdate: r.onFirstUpdate,
        placement: r.placement,
        strategy: r.strategy,
        modifiers: [
          ...r.modifiers,
          l,
          {
            name: "applyStyles",
            enabled: false
          }
        ]
      };
      return Jp(i.current, u) ? i.current || u : (i.current = u, u);
    }, [
      r.onFirstUpdate,
      r.placement,
      r.strategy,
      r.modifiers,
      l
    ]), s = b.useRef(void 0);
    return Rr(() => {
      s && s.current && s.current.setOptions(c);
    }, [
      c
    ]), Rr(() => {
      if (e == null || t == null) return;
      const p = (n.createPopper || Qp)(e, t, c);
      return s.current = p, () => {
        p.destroy(), s.current = null;
      };
    }, [
      e,
      t,
      n.createPopper
    ]), {
      state: s.current ? s.current.state : null,
      styles: o.styles,
      attributes: o.attributes,
      update: s.current ? s.current.update : null,
      forceUpdate: s.current ? s.current.forceUpdate : null
    };
  }, td = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom",
    "top-start": "bottom-end",
    "top-end": "bottom-start",
    "bottom-start": "top-end",
    "bottom-end": "top-start",
    "left-start": "right-end",
    "left-end": "right-start",
    "right-start": "left-end",
    "right-end": "left-start"
  }, nd = (e) => e.replace(/left|right|bottom|top|top-start|top-end|bottom-start|bottom-end|right-start|right-end|left-start|left-end/g, (t) => td[t]), id = (e) => `opacity ${e}ms cubic-bezier(.54, 1.5, .38, 1.11)`, zi = ({ trigger: e, popper: t, direction: n = "down", position: i = "start", placement: r, width: o, minWidth: a = "trigger", maxWidth: l, appendTo: c = () => document.body, zIndex: s = 9999, isVisible: u = true, positionModifiers: p, distance: f = 0, onMouseEnter: d, onMouseLeave: x, onFocus: v, onBlur: C, onDocumentClick: k, onTriggerClick: j, onTriggerEnter: I, onPopperClick: R, onPopperMouseEnter: L, onPopperMouseLeave: O, onDocumentKeyDown: M, enableFlip: F = true, flipBehavior: D = "flip", triggerRef: P, popperRef: N, animationDuration: T = 0, entryDelay: y = 0, exitDelay: w = 0, onHidden: S = () => {
  }, onHide: z = () => {
  }, onMount: H = () => {
  }, onShow: W = () => {
  }, onShown: q = () => {
  }, preventOverflow: h = false }) => {
    var U;
    const [Q, g] = b.useState(null), [G, le] = b.useState(null), [ee, ke] = b.useState(null), [me, ve] = b.useState(null), [xe, ue] = b.useState(false), [Ie, He] = b.useState(0), [$e, qe] = b.useState(u), Pe = b.useRef(null), de = b.useRef(null), ze = b.useRef(null), Y = b.useRef(void 0), J = G || Q, se = u || $e, _e = (U = (P == null ? void 0 : P.current) || Q) === null || U === void 0 ? void 0 : U.parentElement, Ce = di(_e), V = b.useMemo(() => {
      const oe = {
        left: "left",
        right: "right",
        center: "center"
      };
      return {
        ltr: Object.assign({
          start: "left",
          end: "right"
        }, oe),
        rtl: Object.assign({
          start: "right",
          end: "left"
        }, oe)
      }[Ce][i];
    }, [
      i,
      Ce
    ]), B = b.useCallback((oe) => k(oe, J, ee), [
      se,
      Q,
      G,
      ee,
      k
    ]);
    b.useEffect(() => {
      ue(true), H();
    }, []), b.useEffect(() => () => {
      ei([
        Pe,
        ze,
        de
      ]);
    }, []), b.useEffect(() => {
      P && (P.current ? le(P.current) : typeof P == "function" && le(P()));
    }, [
      P,
      e
    ]), b.useEffect(() => {
      N && (N.current ? ke(N.current) : typeof N == "function" && ke(N()));
    }, [
      se,
      N
    ]), b.useEffect(() => {
      const oe = new MutationObserver(() => {
        re && re();
      });
      return ee && oe.observe(ee, {
        attributes: true,
        childList: true,
        subtree: true
      }), () => {
        oe.disconnect();
      };
    }, [
      ee
    ]);
    const _ = (oe, Te, ht, Ot = false) => {
      oe && Te && Te.addEventListener(ht, oe, {
        capture: Ot
      });
    }, A = (oe, Te, ht, Ot = false) => {
      oe && Te && Te.removeEventListener(ht, oe, {
        capture: Ot
      });
    };
    b.useEffect(() => (_(d, J, "mouseenter"), _(x, J, "mouseleave"), _(v, J, "focus"), _(C, J, "blur"), _(j, J, "click"), _(I, J, "keydown"), _(R, ee, "click"), _(L, ee, "mouseenter"), _(O, ee, "mouseleave"), k && _(B, document, "click", true), _(M, document, "keydown", true), () => {
      A(d, J, "mouseenter"), A(x, J, "mouseleave"), A(v, J, "focus"), A(C, J, "blur"), A(j, J, "click"), A(I, J, "keydown"), A(R, ee, "click"), A(L, ee, "mouseenter"), A(O, ee, "mouseleave"), k && A(B, document, "click", true), A(M, document, "keydown", true);
    }), [
      Q,
      ee,
      d,
      x,
      v,
      C,
      j,
      I,
      R,
      L,
      O,
      k,
      M,
      G
    ]);
    const X = () => {
      if (r) return r;
      let oe = n === "up" ? "top" : "bottom";
      return V !== "center" && (oe = `${oe}-${V === "right" ? "end" : "start"}`), oe;
    }, ne = b.useMemo(X, [
      n,
      V,
      r
    ]), pe = b.useMemo(() => nd(X()), [
      n,
      V,
      r
    ]), Ae = b.useMemo(() => ({
      name: "widthMods",
      enabled: o !== void 0 || a !== void 0 || l !== void 0,
      phase: "beforeWrite",
      requires: [
        "computeStyles"
      ],
      fn: ({ state: oe }) => {
        const Te = oe.rects.reference.width;
        o && (oe.styles.popper.width = o === "trigger" ? `${Te}px` : o), a && (oe.styles.popper.minWidth = a === "trigger" ? `${Te}px` : a), l && (oe.styles.popper.maxWidth = l === "trigger" ? `${Te}px` : l);
      },
      effect: ({ state: oe }) => {
        const Te = oe.elements.reference.offsetWidth;
        return o && (oe.elements.popper.style.width = o === "trigger" ? `${Te}px` : o), a && (oe.elements.popper.style.minWidth = a === "trigger" ? `${Te}px` : a), l && (oe.elements.popper.style.maxWidth = l === "trigger" ? `${Te}px` : l), () => {
        };
      }
    }), [
      o,
      a,
      l
    ]), { styles: Xe, attributes: Z, update: re, forceUpdate: Oe } = ed(J, ee, {
      placement: ne,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [
              0,
              f
            ]
          }
        },
        {
          name: "preventOverflow",
          enabled: h
        },
        {
          name: "hide",
          enabled: true
        },
        {
          name: "flip",
          enabled: ne.startsWith("auto") || F,
          options: {
            fallbackPlacements: D === "flip" ? [
              pe
            ] : D
          }
        },
        Ae
      ]
    });
    b.useEffect(() => {
      var oe, Te, ht, Ot, Xi, Ki, Gi;
      const Yi = ((Ot = (ht = (Te = (oe = t == null ? void 0 : t.props) === null || oe === void 0 ? void 0 : oe.children) === null || Te === void 0 ? void 0 : Te[1]) === null || ht === void 0 ? void 0 : ht.props) === null || Ot === void 0 ? void 0 : Ot.children) || ((Gi = (Ki = (Xi = t == null ? void 0 : t.props) === null || Xi === void 0 ? void 0 : Xi.children) === null || Ki === void 0 ? void 0 : Ki.props) === null || Gi === void 0 ? void 0 : Gi.children);
      ve(Yi), Yi && me && Yi !== me && Oe && Oe();
    }, [
      t
    ]), b.useEffect(() => {
      Y.current < w && (ei([
        Pe,
        ze
      ]), ze.current = setTimeout(() => {
        Pe.current = setTimeout(() => {
          qe(false);
        }, T);
      }, w)), Y.current = w;
    }, [
      w
    ]);
    const te = () => {
      W(), ei([
        Pe,
        ze
      ]), de.current = setTimeout(() => {
        qe(true), He(1), q();
      }, y);
    }, he = () => {
      z(), ei([
        de
      ]), ze.current = setTimeout(() => {
        He(0), Pe.current = setTimeout(() => {
          qe(false), S();
        }, T);
      }, w);
    };
    b.useEffect(() => {
      u ? te() : he();
    }, [
      u
    ]);
    const ge = () => {
      if (Z && Z.popper && Z.popper["data-popper-placement"]) {
        const oe = Z.popper["data-popper-placement"];
        return p[oe];
      }
      return p.top;
    }, Ve = Object.assign({
      className: E(t.props && t.props.className, p && ge()),
      style: Object.assign(Object.assign(Object.assign({}, t.props && t.props.style || {}), Xe.popper), {
        zIndex: s,
        opacity: Ie,
        transition: id(T)
      })
    }, Z.popper), ot = () => {
      const oe = b.cloneElement(t, Ve);
      return N ? oe : m.jsx("div", {
        style: {
          display: "contents"
        },
        ref: (Te) => {
          ke(Te == null ? void 0 : Te.firstElementChild);
        },
        children: oe
      });
    }, Jn = () => {
      if (c === "inline") return ot();
      {
        const oe = typeof c == "function" ? c() : c;
        return $c.createPortal(ot(), oe);
      }
    };
    return m.jsxs(m.Fragment, {
      children: [
        !P && e && b.isValidElement(e) && m.jsx("div", {
          style: {
            display: "contents"
          },
          ref: (oe) => {
            g(oe == null ? void 0 : oe.firstElementChild);
          },
          children: e
        }),
        P && e && b.isValidElement(e) && e,
        xe && se && Jn()
      ]
    });
  };
  zi.displayName = "Popper";
  const rd = (e, t, n = (s) => document.activeElement.contains(s), i = (s) => s, r = [
    "A",
    "BUTTON",
    "INPUT"
  ], o = false, a = false, l = true, c = true) => {
    const s = document.activeElement, u = e.key;
    let p = null;
    if (!o && [
      "ArrowUp",
      "ArrowDown"
    ].includes(u)) {
      e.preventDefault(), e.stopImmediatePropagation();
      let f = -1;
      t.forEach((d, x) => {
        if (n(d)) {
          let v = 0;
          for (; !p && v < t.length && v * -1 < t.length; ) u === "ArrowUp" ? v-- : v++, f = x + v, f >= t.length && (f = 0), f < 0 && (f = t.length - 1), p = i(t[f]);
        }
      });
    }
    if (!a && [
      "ArrowLeft",
      "ArrowRight"
    ].includes(u)) {
      e.preventDefault(), e.stopImmediatePropagation();
      let f = -1;
      t.forEach((d, x) => {
        if (n(d)) {
          const v = t[x].querySelectorAll(r.join(","));
          if (!v.length || c) {
            let C = s;
            for (; C; ) {
              const j = C.parentElement === d ? C : C.parentElement;
              if (C = u === "ArrowLeft" ? j.previousElementSibling : j.nextElementSibling, C) {
                if (r.includes(C.tagName)) {
                  p = C;
                  break;
                }
                if (r.includes(C.children[0].tagName)) {
                  p = C.children[0];
                  break;
                }
              }
            }
          } else v.forEach((C, k) => {
            e.target === C && (f = k + (u === "ArrowLeft" ? -1 : 1), f >= v.length && (f = 0), f < 0 && (f = v.length - 1), p = v[f]);
          });
        }
      });
    }
    p && (l && (s.tabIndex = -1, p.tabIndex = 0), p.focus());
  }, od = (e, t) => {
    var n;
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const r = Array.from((n = t.current) === null || n === void 0 ? void 0 : n.querySelectorAll("li")).map((a) => a.querySelector('button:not(:disabled),input:not(:disabled),a:not([aria-disabled="true"])')).filter((a) => a !== null);
    let o;
    e.key === "ArrowDown" ? o = r[0] : o = r[r.length - 1], o && o.focus();
  };
  class wo extends b.Component {
    constructor() {
      super(...arguments), this.keyHandler = (t) => {
        const { isEventFromContainer: n } = this.props;
        if (n ? !n(t) : !this._isEventFromContainer(t)) return;
        const { isActiveElement: i, getFocusableElement: r, noVerticalArrowHandling: o, noHorizontalArrowHandling: a, noEnterHandling: l, noSpaceHandling: c, updateTabIndex: s, validSiblingTags: u, additionalKeyHandler: p, createNavigableElements: f, onlyTraverseSiblings: d } = this.props;
        p && p(t);
        const x = f();
        if (!x) {
          console.warn("No navigable elements have been passed to the KeyboardHandler. Keyboard navigation provided by this component will be ignored.");
          return;
        }
        const v = t.key;
        l || v === "Enter" && (t.preventDefault(), t.stopImmediatePropagation(), document.activeElement.click()), c || v === " " && (t.preventDefault(), t.stopImmediatePropagation(), document.activeElement.click()), rd(t, x, i, r, u, o, a, s, d);
      }, this._isEventFromContainer = (t) => {
        const { containerRef: n } = this.props;
        return n.current && n.current.contains(t.target);
      };
    }
    componentDidMount() {
      At && window.addEventListener("keydown", this.keyHandler);
    }
    componentWillUnmount() {
      At && window.removeEventListener("keydown", this.keyHandler);
    }
    render() {
      return null;
    }
  }
  wo.displayName = "KeyboardHandler";
  wo.defaultProps = {
    containerRef: null,
    createNavigableElements: () => null,
    isActiveElement: (e) => document.activeElement === e,
    getFocusableElement: (e) => e,
    validSiblingTags: [
      "BUTTON",
      "A"
    ],
    onlyTraverseSiblings: true,
    updateTabIndex: true,
    noHorizontalArrowHandling: false,
    noVerticalArrowHandling: false,
    noEnterHandling: false,
    noSpaceHandling: false
  };
  const Wl = (e, t, n) => {
    let i;
    if (At) {
      const { ResizeObserver: r } = window;
      if (e && r) {
        const o = new r((a) => {
          n ? window.requestAnimationFrame(() => {
            Array.isArray(a) && a.length > 0;
          }) : Array.isArray(a) && a.length > 0 && t();
        });
        o.observe(e), i = () => o.unobserve(e);
      } else window.addEventListener("resize", t), i = () => window.removeEventListener("resize", t);
    }
    return () => {
      i && i();
    };
  }, We = {
    button: "pf-v6-c-button",
    buttonCount: "pf-v6-c-button__count",
    buttonIcon: "pf-v6-c-button__icon",
    buttonProgress: "pf-v6-c-button__progress",
    modifiers: {
      primary: "pf-m-primary",
      unread: "pf-m-unread",
      secondary: "pf-m-secondary",
      danger: "pf-m-danger",
      tertiary: "pf-m-tertiary",
      link: "pf-m-link",
      inline: "pf-m-inline",
      displayLg: "pf-m-display-lg",
      warning: "pf-m-warning",
      control: "pf-m-control",
      stateful: "pf-m-stateful",
      read: "pf-m-read",
      attention: "pf-m-attention",
      plain: "pf-m-plain",
      noPadding: "pf-m-no-padding",
      block: "pf-m-block",
      small: "pf-m-small",
      favorite: "pf-m-favorite",
      favorited: "pf-m-favorited",
      clicked: "pf-m-clicked",
      disabled: "pf-m-disabled",
      ariaDisabled: "pf-m-aria-disabled",
      progress: "pf-m-progress",
      inProgress: "pf-m-in-progress",
      notify: "pf-m-notify",
      start: "pf-m-start",
      end: "pf-m-end"
    }
  }, ni = {
    modifiers: {
      inline: "pf-m-inline",
      sm: "pf-m-sm",
      md: "pf-m-md",
      lg: "pf-m-lg",
      xl: "pf-m-xl"
    },
    spinner: "pf-v6-c-spinner",
    spinnerPath: "pf-v6-c-spinner__path"
  }, ad = {
    name: "--pf-v6-c-spinner--diameter"
  };
  var Ar;
  (function(e) {
    e.sm = "sm", e.md = "md", e.lg = "lg", e.xl = "xl";
  })(Ar || (Ar = {}));
  const ko = (e) => {
    var { className: t = "", size: n = "xl", "aria-valuetext": i = "Loading...", diameter: r, isInline: o = false, "aria-label": a, "aria-labelledBy": l } = e, c = K(e, [
      "className",
      "size",
      "aria-valuetext",
      "diameter",
      "isInline",
      "aria-label",
      "aria-labelledBy"
    ]);
    return m.jsx("svg", Object.assign({
      className: E(ni.spinner, o ? ni.modifiers.inline : ni.modifiers[n], t),
      role: "progressbar",
      "aria-valuetext": i,
      viewBox: "0 0 100 100"
    }, r && {
      style: {
        [ad.name]: r
      }
    }, a && {
      "aria-label": a
    }, l && {
      "aria-labelledBy": l
    }, !a && !l && {
      "aria-label": "Contents"
    }, c, {
      children: m.jsx("circle", {
        className: ni.spinnerPath,
        cx: "50",
        cy: "50",
        r: "45",
        fill: "none"
      })
    }));
  };
  ko.displayName = "Spinner";
  const ii = {
    badge: "pf-v6-c-badge",
    modifiers: {
      read: "pf-m-read",
      unread: "pf-m-unread",
      disabled: "pf-m-disabled"
    }
  }, Ul = (e) => {
    var { isRead: t = false, isDisabled: n = false, className: i = "", children: r = "", screenReaderText: o } = e, a = K(e, [
      "isRead",
      "isDisabled",
      "className",
      "children",
      "screenReaderText"
    ]);
    return m.jsxs("span", Object.assign({}, a, {
      className: E(ii.badge, t ? ii.modifiers.read : ii.modifiers.unread, n && ii.modifiers.disabled, i),
      children: [
        r,
        o && m.jsx("span", {
          className: "pf-v6-screen-reader",
          children: o
        })
      ]
    }));
  };
  Ul.displayName = "Badge";
  var vt;
  (function(e) {
    e.primary = "primary", e.secondary = "secondary", e.tertiary = "tertiary", e.danger = "danger", e.warning = "warning", e.link = "link", e.plain = "plain", e.control = "control", e.stateful = "stateful";
  })(vt || (vt = {}));
  var Dr;
  (function(e) {
    e.button = "button", e.submit = "submit", e.reset = "reset";
  })(Dr || (Dr = {}));
  var Cn;
  (function(e) {
    e.default = "default", e.sm = "sm", e.lg = "lg";
  })(Cn || (Cn = {}));
  var Lr;
  (function(e) {
    e.read = "read", e.unread = "unread", e.attention = "attention";
  })(Lr || (Lr = {}));
  const ld = (e) => {
    var { children: t = null, className: n = "", component: i = "button", isClicked: r = false, isBlock: o = false, isDisabled: a = false, isAriaDisabled: l = false, isLoading: c = null, isDanger: s = false, spinnerAriaValueText: u, spinnerAriaLabelledBy: p, spinnerAriaLabel: f, size: d = Cn.default, inoperableEvents: x = [
      "onClick",
      "onKeyPress"
    ], isInline: v = false, type: C = Dr.button, variant: k = vt.primary, state: j = Lr.unread, hasNoPadding: I = false, iconPosition: R = "start", "aria-label": L = null, icon: O = null, role: M, ouiaId: F, ouiaSafe: D = true, tabIndex: P = null, innerRef: N, countOptions: T } = e, y = K(e, [
      "children",
      "className",
      "component",
      "isClicked",
      "isBlock",
      "isDisabled",
      "isAriaDisabled",
      "isLoading",
      "isDanger",
      "spinnerAriaValueText",
      "spinnerAriaLabelledBy",
      "spinnerAriaLabel",
      "size",
      "inoperableEvents",
      "isInline",
      "type",
      "variant",
      "state",
      "hasNoPadding",
      "iconPosition",
      "aria-label",
      "icon",
      "role",
      "ouiaId",
      "ouiaSafe",
      "tabIndex",
      "innerRef",
      "countOptions"
    ]);
    const w = fo(st.displayName, F, D, k), S = i, z = S === "button", H = v && S === "span", W = R === "end" || R === "right", q = x.reduce((G, le) => Object.assign(Object.assign({}, G), {
      [le]: (ee) => {
        ee.preventDefault();
      }
    }), {}), h = () => {
      if (a) return z ? null : -1;
      if (l) return null;
      if (H) return 0;
    }, U = O && m.jsx("span", {
      className: E(We.buttonIcon, t && We.modifiers[W ? "end" : "start"]),
      children: O
    }), Q = t && m.jsx("span", {
      className: E("pf-v6-c-button__text"),
      children: t
    }), g = l || !z && a;
    return m.jsxs(S, Object.assign({}, y, l ? q : null, g && {
      "aria-disabled": true
    }, {
      "aria-label": L,
      className: E(We.button, We.modifiers[k], o && We.modifiers.block, a && !z && We.modifiers.disabled, l && We.modifiers.ariaDisabled, r && We.modifiers.clicked, v && k === vt.link && We.modifiers.inline, s && (k === vt.secondary || k === vt.link) && We.modifiers.danger, c !== null && k !== vt.plain && We.modifiers.progress, c && We.modifiers.inProgress, I && k === vt.plain && We.modifiers.noPadding, k === vt.stateful && We.modifiers[j], d === Cn.sm && We.modifiers.small, d === Cn.lg && We.modifiers.displayLg, n),
      disabled: z ? a : null,
      tabIndex: P !== null ? P : h(),
      type: z || H ? C : null,
      role: H ? "button" : M,
      ref: N
    }, w, {
      children: [
        c && m.jsx("span", {
          className: E(We.buttonProgress),
          children: m.jsx(ko, {
            size: Ar.md,
            isInline: v,
            "aria-valuetext": u,
            "aria-label": f,
            "aria-labelledby": p
          })
        }),
        W ? m.jsxs(m.Fragment, {
          children: [
            Q,
            U
          ]
        }) : m.jsxs(m.Fragment, {
          children: [
            U,
            Q
          ]
        }),
        T && m.jsx("span", {
          className: E(We.buttonCount, T.className),
          children: m.jsx(Ul, {
            isRead: T.isRead,
            isDisabled: a,
            children: T.count
          })
        })
      ]
    }));
  }, st = b.forwardRef((e, t) => m.jsx(ld, Object.assign({
    innerRef: t
  }, e)));
  st.displayName = "Button";
  const sd = {
    name: "TimesIcon",
    height: 512,
    width: 352,
    svgPath: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
    yOffset: 0,
    xOffset: 0
  }, Xl = Fe(sd), Ge = {
    modifiers: {
      top: "pf-m-top",
      topLeft: "pf-m-top-left",
      topRight: "pf-m-top-right",
      bottom: "pf-m-bottom",
      bottomLeft: "pf-m-bottom-left",
      bottomRight: "pf-m-bottom-right",
      left: "pf-m-left",
      leftTop: "pf-m-left-top",
      leftBottom: "pf-m-left-bottom",
      right: "pf-m-right",
      rightTop: "pf-m-right-top",
      rightBottom: "pf-m-right-bottom",
      textAlignLeft: "pf-m-text-align-left"
    },
    tooltip: "pf-v6-c-tooltip",
    tooltipArrow: "pf-v6-c-tooltip__arrow",
    tooltipContent: "pf-v6-c-tooltip__content"
  }, Kl = (e) => {
    var { className: t, children: n, isLeftAligned: i } = e, r = K(e, [
      "className",
      "children",
      "isLeftAligned"
    ]);
    return m.jsx("div", Object.assign({
      className: E(Ge.tooltipContent, i && Ge.modifiers.textAlignLeft, t)
    }, r, {
      children: n
    }));
  };
  Kl.displayName = "TooltipContent";
  const Gl = (e) => {
    var { className: t } = e, n = K(e, [
      "className"
    ]);
    return m.jsx("div", Object.assign({
      className: E(Ge.tooltipArrow, t)
    }, n));
  };
  Gl.displayName = "TooltipArrow";
  const sa = {
    value: "18.75rem"
  };
  var ca;
  (function(e) {
    e.auto = "auto", e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e.topStart = "top-start", e.topEnd = "top-end", e.bottomStart = "bottom-start", e.bottomEnd = "bottom-end", e.leftStart = "left-start", e.leftEnd = "left-end", e.rightStart = "right-start", e.rightEnd = "right-end";
  })(ca || (ca = {}));
  let cd = 1;
  const Bi = (e) => {
    var { content: t, position: n = "top", trigger: i = "mouseenter focus", isVisible: r = false, isContentLeftAligned: o = false, enableFlip: a = true, className: l = "", entryDelay: c = 300, exitDelay: s = 300, appendTo: u = () => document.body, zIndex: p = 9999, minWidth: f, maxWidth: d = sa.value, distance: x = 15, aria: v = "describedby", flipBehavior: C = [
      "top",
      "right",
      "bottom",
      "left",
      "top",
      "right",
      "bottom"
    ], id: k = `pf-tooltip-${cd++}`, children: j, animationDuration: I = 300, triggerRef: R, "aria-live": L = R ? "polite" : "off", onTooltipHidden: O = () => {
    } } = e, M = K(e, [
      "content",
      "position",
      "trigger",
      "isVisible",
      "isContentLeftAligned",
      "enableFlip",
      "className",
      "entryDelay",
      "exitDelay",
      "appendTo",
      "zIndex",
      "minWidth",
      "maxWidth",
      "distance",
      "aria",
      "flipBehavior",
      "id",
      "children",
      "animationDuration",
      "triggerRef",
      "aria-live",
      "onTooltipHidden"
    ]);
    const F = i.includes("mouseenter"), D = i.includes("focus"), P = i.includes("click"), N = i === "manual", [T, y] = b.useState(false), w = b.createRef(), S = (G) => {
      N || G.key === Pr.Escape && T && W();
    }, z = (G) => {
      G.key === Pr.Enter && (T ? W() : H());
    };
    b.useEffect(() => {
      r ? H() : W();
    }, [
      r
    ]);
    const H = () => {
      y(true);
    }, W = () => {
      y(false);
    }, q = {
      top: Ge.modifiers.top,
      bottom: Ge.modifiers.bottom,
      left: Ge.modifiers.left,
      right: Ge.modifiers.right,
      "top-start": Ge.modifiers.topLeft,
      "top-end": Ge.modifiers.topRight,
      "bottom-start": Ge.modifiers.bottomLeft,
      "bottom-end": Ge.modifiers.bottomRight,
      "left-start": Ge.modifiers.leftTop,
      "left-end": Ge.modifiers.leftBottom,
      "right-start": Ge.modifiers.rightTop,
      "right-end": Ge.modifiers.rightBottom
    }, h = d !== sa.value, U = m.jsxs("div", Object.assign({
      "aria-live": L,
      className: E(Ge.tooltip, l),
      role: "tooltip",
      id: k,
      style: {
        maxWidth: h ? d : null
      },
      ref: w
    }, M, {
      children: [
        m.jsx(Gl, {}),
        m.jsx(Kl, {
          isLeftAligned: o,
          children: t
        })
      ]
    })), Q = (G, le) => {
      T ? W() : G.target === le && H();
    }, g = () => v === "describedby" && j && j.props && !j.props["aria-describedby"] ? b.cloneElement(j, {
      "aria-describedby": k
    }) : v === "labelledby" && j.props && !j.props["aria-labelledby"] ? b.cloneElement(j, {
      "aria-labelledby": k
    }) : j;
    return m.jsx(zi, {
      trigger: v !== "none" && T ? g() : j,
      triggerRef: R,
      popper: U,
      popperRef: w,
      minWidth: f !== void 0 ? f : "revert",
      appendTo: u,
      isVisible: T,
      positionModifiers: q,
      distance: x,
      placement: n,
      onMouseEnter: F && H,
      onMouseLeave: F && W,
      onPopperMouseEnter: F && H,
      onPopperMouseLeave: F && W,
      onFocus: D && H,
      onBlur: D && W,
      onDocumentClick: P && Q,
      onDocumentKeyDown: N ? null : S,
      onTriggerEnter: N ? null : z,
      enableFlip: a,
      zIndex: p,
      flipBehavior: C,
      animationDuration: I,
      entryDelay: c,
      exitDelay: s,
      onHidden: O
    });
  };
  Bi.displayName = "Tooltip";
  const ud = {
    name: "AngleRightIcon",
    height: 512,
    width: 256,
    svgPath: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
    yOffset: 0,
    xOffset: 0
  }, Yl = Fe(ud), er = {
    breadcrumbLink: "pf-v6-c-breadcrumb__link"
  }, ae = {
    divider: "pf-v6-c-divider",
    menu: "pf-v6-c-menu",
    menuContent: "pf-v6-c-menu__content",
    menuItem: "pf-v6-c-menu__item",
    menuItemAction: "pf-v6-c-menu__item-action",
    menuItemCheck: "pf-v6-c-menu__item-check",
    menuItemDescription: "pf-v6-c-menu__item-description",
    menuItemExternalIcon: "pf-v6-c-menu__item-external-icon",
    menuItemIcon: "pf-v6-c-menu__item-icon",
    menuItemMain: "pf-v6-c-menu__item-main",
    menuItemSelectIcon: "pf-v6-c-menu__item-select-icon",
    menuItemText: "pf-v6-c-menu__item-text",
    menuItemToggleIcon: "pf-v6-c-menu__item-toggle-icon",
    menuList: "pf-v6-c-menu__list",
    menuListItem: "pf-v6-c-menu__list-item",
    menuSearch: "pf-v6-c-menu__search",
    modifiers: {
      disabled: "pf-m-disabled",
      ariaDisabled: "pf-m-aria-disabled",
      flyout: "pf-m-flyout",
      left: "pf-m-left",
      drilldown: "pf-m-drilldown",
      drilledIn: "pf-m-drilled-in",
      currentPath: "pf-m-current-path",
      plain: "pf-m-plain",
      scrollable: "pf-m-scrollable",
      load: "pf-m-load",
      loading: "pf-m-loading",
      danger: "pf-m-danger",
      selected: "pf-m-selected",
      favorited: "pf-m-favorited"
    }
  }, $t = b.createContext({
    menuId: null,
    parentMenu: null,
    onActionClick: () => null,
    onSelect: () => null,
    activeItemId: null,
    selected: null,
    drilledInMenus: [],
    drilldownItemPath: [],
    onDrillIn: null,
    onDrillOut: null,
    onGetMenuHeight: () => null,
    flyoutRef: null,
    setFlyoutRef: () => null,
    disableHover: false,
    role: "menu"
  }), Ql = b.createContext({
    itemId: null,
    isDisabled: false
  });
  class Hi extends b.Component {
    constructor(t) {
      super(t), this.menuRef = b.createRef(), this.activeMenu = null, this.state = {
        ouiaStateId: on(Oi.displayName),
        transitionMoveTarget: null,
        flyoutRef: null,
        disableHover: false,
        currentDrilldownMenuId: this.props.id
      }, this.handleDrilldownTransition = (n) => {
        const i = this.menuRef.current;
        if (!(!i || i !== n.target.closest(`.${ae.menu}`) && !Array.from(i.getElementsByClassName(ae.menu)).includes(n.target.closest(`.${ae.menu}`)))) if (this.state.transitionMoveTarget) this.state.transitionMoveTarget.focus(), this.setState({
          transitionMoveTarget: null
        });
        else {
          const r = i.querySelector("#" + this.props.activeMenu) || i || null, o = r.getElementsByTagName("UL");
          if (o.length === 0) return;
          const a = Array.from(o[0].children);
          if (!this.state.currentDrilldownMenuId || r.id !== this.state.currentDrilldownMenuId) this.setState({
            currentDrilldownMenuId: r.id
          });
          else return;
          const l = a.filter((c) => !(c.classList.contains("pf-m-disabled") || c.classList.contains(ae.divider)))[0].firstChild;
          l.focus(), l.tabIndex = 0;
        }
      }, this.handleExtraKeys = (n) => {
        const i = this.props.containsDrilldown, r = document.activeElement;
        if (n.target.closest(`.${ae.menu}`) !== this.activeMenu && !n.target.classList.contains(er.breadcrumbLink) && (this.activeMenu = n.target.closest(`.${ae.menu}`), this.setState({
          disableHover: true
        })), n.target.tagName === "INPUT") return;
        const o = this.activeMenu, a = n.key, l = r.classList.contains(er.breadcrumbLink);
        if (a === " " || a === "Enter") {
          if (n.preventDefault(), i && !l) {
            if (r.closest("li").classList.contains("pf-m-current-path") && o.parentElement.tagName === "LI") r.tabIndex = -1, o.parentElement.firstChild.tabIndex = 0, this.setState({
              transitionMoveTarget: o.parentElement.firstChild
            });
            else if (r.nextElementSibling && r.nextElementSibling.classList.contains(ae.menu)) {
              const s = Array.from(r.nextElementSibling.getElementsByTagName("UL")[0].children).filter((u) => !(u.classList.contains("pf-m-disabled") || u.classList.contains(ae.divider)));
              r.tabIndex = -1, s[0].firstChild.tabIndex = 0, this.setState({
                transitionMoveTarget: s[0].firstChild
              });
            }
          }
          document.activeElement.click();
        }
      }, this.createNavigableElements = () => this.props.containsDrilldown ? this.activeMenu ? Array.from(this.activeMenu.getElementsByTagName("UL")[0].children).filter((i) => !(i.classList.contains("pf-m-disabled") || i.classList.contains(ae.divider))) : [] : this.menuRef.current ? Array.from(this.menuRef.current.getElementsByTagName("LI")).filter((i) => !(i.classList.contains("pf-m-disabled") || i.classList.contains(ae.divider))) : [], t.innerRef && (this.menuRef = t.innerRef);
    }
    allowTabFirstItem() {
      const t = this.menuRef.current;
      if (t) {
        const n = t.querySelector("ul button:not(:disabled), ul a:not(:disabled)");
        n && (n.tabIndex = 0);
      }
    }
    componentDidMount() {
      this.context && this.setState({
        disableHover: this.context.disableHover
      }), At && this.props.containsDrilldown && window.addEventListener("transitionend", this.props.isRootMenu ? this.handleDrilldownTransition : null), this.allowTabFirstItem();
    }
    componentWillUnmount() {
      At && this.props.containsDrilldown && window.removeEventListener("transitionend", this.handleDrilldownTransition);
    }
    componentDidUpdate(t) {
      t.children !== this.props.children && this.allowTabFirstItem();
    }
    render() {
      const t = this.props, { id: n, children: i, className: r, onSelect: o, selected: a = null, onActionClick: l, ouiaId: c, ouiaSafe: s, containsFlyout: u, containsDrilldown: p, isMenuDrilledIn: f, isPlain: d, isScrollable: x, drilldownItemPath: v, drilledInMenus: C, onDrillIn: k, onDrillOut: j, onGetMenuHeight: I, parentMenu: R = null, activeItemId: L = null, innerRef: O, isRootMenu: M, activeMenu: F, role: D, isNavFlyout: P } = t, N = K(t, [
        "id",
        "children",
        "className",
        "onSelect",
        "selected",
        "onActionClick",
        "ouiaId",
        "ouiaSafe",
        "containsFlyout",
        "containsDrilldown",
        "isMenuDrilledIn",
        "isPlain",
        "isScrollable",
        "drilldownItemPath",
        "drilledInMenus",
        "onDrillIn",
        "onDrillOut",
        "onGetMenuHeight",
        "parentMenu",
        "activeItemId",
        "innerRef",
        "isRootMenu",
        "activeMenu",
        "role",
        "isNavFlyout"
      ]), T = f || C && C.includes(n) || false;
      return m.jsxs($t.Provider, {
        value: {
          menuId: n,
          parentMenu: R || n,
          onSelect: o,
          onActionClick: l,
          activeItemId: L,
          selected: a,
          drilledInMenus: C,
          drilldownItemPath: v,
          onDrillIn: k,
          onDrillOut: j,
          onGetMenuHeight: I,
          flyoutRef: this.state.flyoutRef,
          setFlyoutRef: (y) => this.setState({
            flyoutRef: y
          }),
          disableHover: this.state.disableHover,
          role: D
        },
        children: [
          M && m.jsx(wo, {
            containerRef: this.menuRef || null,
            additionalKeyHandler: this.handleExtraKeys,
            createNavigableElements: this.createNavigableElements,
            isActiveElement: (y) => document.activeElement.closest("li") === y || document.activeElement.parentElement === y || document.activeElement.closest(`.${ae.menuSearch}`) === y || document.activeElement.closest("ol") && document.activeElement.closest("ol").firstChild === y,
            getFocusableElement: (y) => {
              var w, S;
              return (y == null ? void 0 : y.tagName) === "DIV" && y.querySelector("input") || ((w = y.firstChild) === null || w === void 0 ? void 0 : w.tagName) === "LABEL" && y.querySelector("input") || ((S = y.firstChild) === null || S === void 0 ? void 0 : S.tagName) === "DIV" && y.querySelector("a, button, input") || y.firstChild;
            },
            noHorizontalArrowHandling: document.activeElement && (document.activeElement.classList.contains(er.breadcrumbLink) || document.activeElement.tagName === "INPUT"),
            noEnterHandling: true,
            noSpaceHandling: true
          }),
          m.jsx("div", Object.assign({
            id: n,
            className: E(ae.menu, d && ae.modifiers.plain, x && ae.modifiers.scrollable, u && ae.modifiers.flyout, P && "pf-m-nav", p && ae.modifiers.drilldown, T && ae.modifiers.drilledIn, r),
            ref: this.menuRef
          }, Un(Oi.displayName, c !== void 0 ? c : this.state.ouiaStateId, s), N, {
            children: i
          }))
        ]
      });
    }
  }
  Hi.displayName = "Menu";
  Hi.contextType = $t;
  Hi.defaultProps = {
    ouiaSafe: true,
    isRootMenu: true,
    isPlain: false,
    isScrollable: false,
    role: "menu"
  };
  const Oi = b.forwardRef((e, t) => m.jsx(Hi, Object.assign({}, e, {
    innerRef: t
  })));
  Oi.displayName = "Menu";
  const pd = {
    name: "--pf-v6-c-menu__content--Height"
  }, dd = {
    name: "--pf-v6-c-menu__content--MaxHeight"
  }, Jl = b.forwardRef((e, t) => {
    const { getHeight: n, children: i, menuHeight: r, maxMenuHeight: o } = e, a = K(e, [
      "getHeight",
      "children",
      "menuHeight",
      "maxMenuHeight"
    ]), l = b.createRef(), c = (s, u, p) => {
      if (s) {
        let f = s.clientHeight, d = null, x = s.closest(`.${ae.menuList}`);
        for (; x !== null && x.nodeType === 1; ) x.classList.contains(ae.menuList) && (d = x), x = x.parentElement;
        if (d) {
          const v = getComputedStyle(d), C = parseFloat(v.getPropertyValue("padding-top").replace(/px/g, "")) + parseFloat(v.getPropertyValue("padding-bottom").replace(/px/g, "")) + parseFloat(getComputedStyle(d.parentElement).getPropertyValue("border-bottom-width").replace(/px/g, ""));
          f = f + C;
        }
        p && p(u, f), n && n(f.toString());
      }
      return t || l;
    };
    return m.jsx($t.Consumer, {
      children: ({ menuId: s, onGetMenuHeight: u }) => m.jsx("div", Object.assign({}, a, {
        className: E(ae.menuContent, e.className),
        ref: (p) => {
          c(p, s, u);
        },
        style: Object.assign(Object.assign({}, r && {
          [pd.name]: r
        }), o && {
          [dd.name]: o
        }),
        children: i
      }))
    });
  });
  Jl.displayName = "MenuContent";
  const fd = {
    name: "--pf-v6-c-menu--m-flyout__menu--top-offset"
  }, md = {
    name: "--pf-v6-c-menu--m-flyout__menu--m-left--right-offset"
  }, hd = {
    name: "--pf-v6-c-menu--m-flyout__menu--left-offset"
  }, gd = {
    name: "ExternalLinkAltIcon",
    height: 512,
    width: 512,
    svgPath: "M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",
    yOffset: 0,
    xOffset: 0
  }, xd = Fe(gd), vd = {
    name: "AngleLeftIcon",
    height: 512,
    width: 256,
    svgPath: "M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",
    yOffset: 0,
    xOffset: 0
  }, bd = Fe(vd), yd = {
    name: "CheckIcon",
    height: 512,
    width: 512,
    svgPath: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",
    yOffset: 0,
    xOffset: 0
  }, wd = Fe(yd), Pt = {
    check: "pf-v6-c-check",
    checkBody: "pf-v6-c-check__body",
    checkDescription: "pf-v6-c-check__description",
    checkInput: "pf-v6-c-check__input",
    checkLabel: "pf-v6-c-check__label",
    checkLabelRequired: "pf-v6-c-check__label-required",
    modifiers: {
      standalone: "pf-m-standalone",
      disabled: "pf-m-disabled"
    }
  }, Zl = () => {
  };
  class qt extends b.Component {
    constructor(t) {
      super(t), this.handleChange = (n) => {
        this.props.onChange(n, n.currentTarget.checked);
      }, this.state = {
        ouiaStateId: on(qt.displayName)
      };
    }
    render() {
      const t = this.props, { "aria-label": n, className: i, inputClassName: r, onChange: o, isLabelWrapped: a, labelPosition: l = "end", isValid: c, isDisabled: s, isRequired: u, isChecked: p, label: f, checked: d, defaultChecked: x, description: v, body: C, ouiaId: k, ouiaSafe: j, component: I } = t, R = K(t, [
        "aria-label",
        "className",
        "inputClassName",
        "onChange",
        "isLabelWrapped",
        "labelPosition",
        "isValid",
        "isDisabled",
        "isRequired",
        "isChecked",
        "label",
        "checked",
        "defaultChecked",
        "description",
        "body",
        "ouiaId",
        "ouiaSafe",
        "component"
      ]);
      R.id || console.error("Checkbox:", "id is required to make input accessible");
      const L = {};
      ([
        true,
        false
      ].includes(d) || p === true) && (L.checked = d || p), o !== Zl && (L.checked = p), [
        false,
        true
      ].includes(x) && (L.defaultChecked = x);
      const O = m.jsx("input", Object.assign({}, R, {
        className: E(Pt.checkInput, r),
        type: "checkbox",
        onChange: this.handleChange,
        "aria-invalid": !c,
        "aria-label": n,
        disabled: s,
        required: u,
        ref: (N) => {
          N && (N.indeterminate = p === null);
        }
      }, L, Un(qt.displayName, k !== void 0 ? k : this.state.ouiaStateId, j))), M = a && !I || I === "label", F = M ? "span" : "label", D = f ? m.jsxs(F, {
        className: E(Pt.checkLabel, s && Pt.modifiers.disabled),
        htmlFor: M ? void 0 : R.id,
        children: [
          f,
          u && m.jsx("span", {
            className: E(Pt.checkLabelRequired),
            "aria-hidden": "true",
            children: Xu
          })
        ]
      }) : null, P = I ?? (M ? "label" : "div");
      return L.checked = L.checked === null ? false : L.checked, m.jsxs(P, {
        className: E(Pt.check, !f && Pt.modifiers.standalone, i),
        htmlFor: M ? R.id : void 0,
        children: [
          l === "start" ? m.jsxs(m.Fragment, {
            children: [
              D,
              O
            ]
          }) : m.jsxs(m.Fragment, {
            children: [
              O,
              D
            ]
          }),
          v && m.jsx("span", {
            className: E(Pt.checkDescription),
            children: v
          }),
          C && m.jsx("span", {
            className: E(Pt.checkBody),
            children: C
          })
        ]
      });
    }
  }
  qt.displayName = "Checkbox";
  qt.defaultProps = {
    className: "",
    isLabelWrapped: false,
    isValid: true,
    isDisabled: false,
    isRequired: false,
    isChecked: false,
    onChange: Zl,
    ouiaSafe: true
  };
  const kd = {
    name: "StarIcon",
    height: 512,
    width: 576,
    svgPath: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z",
    yOffset: 0,
    xOffset: 0
  }, Cd = Fe(kd), Od = (e) => {
    var { className: t, icon: n, onClick: i, "aria-label": r, isFavorited: o = null, isDisabled: a, actionId: l, innerRef: c } = e, s = K(e, [
      "className",
      "icon",
      "onClick",
      "aria-label",
      "isFavorited",
      "isDisabled",
      "actionId",
      "innerRef"
    ]);
    return m.jsx($t.Consumer, {
      children: ({ onActionClick: u }) => m.jsx(Ql.Consumer, {
        children: ({ itemId: p, isDisabled: f }) => {
          const d = (x) => {
            i && i(x), u && u(x, p, l);
          };
          return m.jsx("div", Object.assign({
            className: E(ae.menuItemAction, o !== null && "pf-m-favorite", o && ae.modifiers.favorited, t)
          }, s, {
            children: m.jsx(st, {
              "aria-label": r,
              onClick: d,
              ref: c,
              role: "menuitem",
              variant: "plain",
              tabIndex: -1,
              isDisabled: a || f,
              icon: n === "favorites" || o !== null ? m.jsx(Cd, {}) : n
            })
          }));
        }
      })
    });
  }, es = b.forwardRef((e, t) => m.jsx(Od, Object.assign({}, e, {
    innerRef: t
  })));
  es.displayName = "MenuItemAction";
  const ua = b.createContext({
    direction: "right"
  }), Sd = (e) => {
    var { children: t, className: n, itemId: i = null, to: r, hasCheckbox: o = false, isActive: a = null, isFavorited: l = null, isLoadButton: c = false, isLoading: s = false, flyoutMenu: u, direction: p, description: f = null, onClick: d = () => {
    }, component: x = "button", isDisabled: v = false, isAriaDisabled: C = false, isExternalLink: k = false, isSelected: j = null, isFocused: I, isDanger: R = false, icon: L, actions: O, onShowFlyout: M, drilldownMenu: F, isOnPath: D, innerRef: P, id: N, "aria-label": T, tooltipProps: y, rel: w, target: S, download: z } = e, H = K(e, [
      "children",
      "className",
      "itemId",
      "to",
      "hasCheckbox",
      "isActive",
      "isFavorited",
      "isLoadButton",
      "isLoading",
      "flyoutMenu",
      "direction",
      "description",
      "onClick",
      "component",
      "isDisabled",
      "isAriaDisabled",
      "isExternalLink",
      "isSelected",
      "isFocused",
      "isDanger",
      "icon",
      "actions",
      "onShowFlyout",
      "drilldownMenu",
      "isOnPath",
      "innerRef",
      "id",
      "aria-label",
      "tooltipProps",
      "rel",
      "target",
      "download"
    ]);
    const { menuId: W, parentMenu: q, onSelect: h, onActionClick: U, activeItemId: Q, selected: g, drilldownItemPath: G, onDrillIn: le, onDrillOut: ee, flyoutRef: ke, setFlyoutRef: me, disableHover: ve, role: xe } = b.useContext($t);
    let ue = r ? "a" : x;
    o && !r && (ue = "label");
    const [Ie, He] = b.useState(null), $e = b.useContext(ua), [qe, Pe] = b.useState($e.direction), de = b.useRef(void 0), ze = b.useRef(void 0), Y = P || ze, J = de === ke, se = u !== void 0, _e = (Z) => {
      !J && Z ? me(de) : J && !Z && me(null), M && Z && M();
    };
    Rr(() => {
      if (se && de.current && At) {
        const Z = de.current.lastElementChild;
        if (Z && Z.classList.contains(ae.menu)) {
          const re = de.current.getClientRects()[0], Oe = Z.getClientRects()[0];
          if (re && Oe) {
            const te = re.x - Oe.width, he = window.innerWidth - re.x - re.width - Oe.width;
            let ge = qe;
            he < 0 && ge !== "left" ? (Pe("left"), ge = "left") : te < 0 && ge !== "right" && (Pe("right"), ge = "right");
            let Ve = 0;
            te < 0 && he < 0 && (Ve = ge === "right" ? -he : -te), ge === "left" ? (Z.classList.add(ae.modifiers.left), Z.style.setProperty(md.name, `-${Ve}px`)) : Z.style.setProperty(hd.name, `-${Ve}px`);
            const ot = window.innerHeight - re.y - Oe.height;
            window.innerHeight - Oe.height < 0 && ot < 0 || ot < 0 && Z.style.setProperty(fd.name, `${ot}px`);
          }
        }
      }
    }, [
      J,
      u
    ]), b.useEffect(() => {
      Pe($e.direction);
    }, [
      $e
    ]), b.useEffect(() => {
      if (Ie) if (J) {
        const Z = Ie.nextElementSibling;
        Array.from(Z.getElementsByTagName("UL")[0].children).filter((Oe) => !(Oe.classList.contains("pf-m-disabled") || Oe.classList.contains(ae.divider)))[0].firstChild.focus();
      } else Ie.focus();
    }, [
      J,
      Ie
    ]);
    const Ce = (Z) => {
      const re = Z.key, Oe = Z.target, te = Z.type;
      (re === " " || re === "Enter" || re === "ArrowRight" || te === "click") && (Z.stopPropagation(), Z.preventDefault(), J || (_e(true), He(Oe))), (re === "Escape" || re === "ArrowLeft") && J && (Z.stopPropagation(), _e(false));
    }, V = (Z, re) => {
      C || (re && re(Z, i), d && d(Z));
    }, B = D && D || G && G.includes(i) || false;
    let _;
    p && (p === "down" ? _ = (Z) => le && le(Z, W, typeof F == "function" ? F().props.id : F.props.id, i) : _ = (Z) => ee && ee(Z, q, i));
    let A = {};
    ue === "a" ? A = {
      href: r,
      "aria-disabled": v || C ? true : null,
      disabled: null,
      target: k ? "_blank" : S,
      rel: w,
      download: z
    } : ue === "button" && (A = {
      type: "button",
      "aria-disabled": C ? true : null
    }), D ? A["aria-expanded"] = true : se && (A["aria-haspopup"] = "menu", A["aria-expanded"] = J);
    const X = () => a !== null ? a ? "page" : null : i !== null && Q !== null ? i === Q : null, ne = () => j !== null ? j : g !== null && i !== null ? Array.isArray(g) && g.includes(i) || i === g : false, pe = () => {
      ve || (se ? _e(true) : me(null));
    };
    b.useEffect(() => {
      if (I && de.current) {
        const Z = de.current, re = Z.parentElement;
        if (re) {
          const Oe = Z.offsetTop - re.offsetTop < re.scrollTop, te = Z.offsetTop - re.offsetTop + Z.clientHeight;
          (Oe || te) && Z.scrollIntoView({
            behavior: "auto",
            block: "nearest"
          });
        }
      }
    }, [
      I
    ]);
    const Ae = xe === "listbox", Xe = m.jsxs(m.Fragment, {
      children: [
        m.jsx(Wn, {
          children: (Z) => m.jsxs(ue, Object.assign({
            id: N,
            tabIndex: -1,
            className: E(ae.menuItem, ne() && !o && ae.modifiers.selected, n),
            "aria-current": X()
          }, !o && {
            disabled: v,
            "aria-label": T
          }, !o && !u && {
            role: Ae ? "option" : "menuitem"
          }, !o && !u && Ae && {
            "aria-selected": ne()
          }, {
            ref: Y
          }, !o && {
            onClick: (re) => {
              C ? re.preventDefault() : (V(re, h), _ && _(re), u && Ce(re));
            }
          }, o && {
            htmlFor: Z
          }, A, {
            children: [
              m.jsxs("span", {
                className: E(ae.menuItemMain),
                children: [
                  p === "up" && m.jsx("span", {
                    className: E(ae.menuItemToggleIcon),
                    children: m.jsx(bd, {})
                  }),
                  L && m.jsx("span", {
                    className: E(ae.menuItemIcon),
                    children: L
                  }),
                  o && m.jsx("span", {
                    className: E(ae.menuItemCheck),
                    children: m.jsx(qt, {
                      id: Z,
                      component: "span",
                      isChecked: j || false,
                      onChange: (re) => V(re, h),
                      isDisabled: v,
                      "aria-disabled": C
                    })
                  }),
                  m.jsx("span", {
                    className: E(ae.menuItemText),
                    children: t
                  }),
                  k && m.jsx("span", {
                    className: E(ae.menuItemExternalIcon),
                    children: m.jsx(xd, {})
                  }),
                  (u || p === "down") && m.jsx("span", {
                    className: E(ae.menuItemToggleIcon),
                    children: m.jsx(Yl, {})
                  }),
                  ne() && m.jsx("span", {
                    className: E(ae.menuItemSelectIcon),
                    children: m.jsx(wd, {})
                  })
                ]
              }),
              f && p !== "up" && m.jsx("span", {
                className: E(ae.menuItemDescription),
                children: m.jsx("span", {
                  children: f
                })
              })
            ]
          }))
        }),
        J && m.jsx($t.Provider, {
          value: {
            disableHover: ve
          },
          children: m.jsx(ua.Provider, {
            value: {
              direction: qe
            },
            children: u
          })
        }),
        typeof F == "function" ? F() : F,
        m.jsxs(Ql.Provider, {
          value: {
            itemId: i,
            isDisabled: v
          },
          children: [
            O,
            l !== null && m.jsx(es, {
              icon: "favorites",
              isFavorited: l,
              "aria-label": l ? "starred" : "not starred",
              onClick: (Z) => U(Z, i),
              tabIndex: -1,
              actionId: "fav"
            })
          ]
        })
      ]
    });
    return m.jsxs(m.Fragment, {
      children: [
        m.jsx("li", Object.assign({
          className: E(ae.menuListItem, v && ae.modifiers.disabled, C && ae.modifiers.ariaDisabled, B && ae.modifiers.currentPath, c && ae.modifiers.load, s && ae.modifiers.loading, I && "pf-m-focus", R && ae.modifiers.danger, n),
          onMouseOver: () => {
            C || pe();
          }
        }, u && !C && {
          onKeyDown: Ce
        }, {
          ref: de,
          role: o ? "menuitem" : "none"
        }, o && {
          "aria-label": T
        }, H, {
          children: Xe
        })),
        y && m.jsx(Bi, Object.assign({}, y, {
          triggerRef: Y
        }))
      ]
    });
  }, ts = b.forwardRef((e, t) => m.jsx(Sd, Object.assign({}, e, {
    innerRef: t
  })));
  ts.displayName = "MenuItem";
  const ns = (e) => {
    var { children: t = null, className: n, isAriaMultiselectable: i = false, "aria-label": r } = e, o = K(e, [
      "children",
      "className",
      "isAriaMultiselectable",
      "aria-label"
    ]);
    const { role: a } = b.useContext($t);
    return m.jsx("ul", Object.assign({
      role: a
    }, a === "listbox" && {
      "aria-multiselectable": i
    }, {
      className: E(ae.menuList, n),
      "aria-label": r
    }, o, {
      children: t
    }));
  };
  ns.displayName = "MenuList";
  const _d = (e) => {
    var { children: t, className: n, onSelect: i, isOpen: r, selected: o, toggle: a, shouldFocusToggleOnSelect: l = false, shouldFocusFirstItemOnOpen: c = false, onOpenChange: s, onOpenChangeKeys: u = [
      "Escape",
      "Tab"
    ], onToggleKeydown: p, variant: f, isPlain: d, innerRef: x, zIndex: v = 9999, role: C = "listbox", popperProps: k, menuHeight: j, maxMenuHeight: I, isScrollable: R, shouldPreventScrollOnItemFocus: L = true, focusTimeoutDelay: O = 0 } = e, M = K(e, [
      "children",
      "className",
      "onSelect",
      "isOpen",
      "selected",
      "toggle",
      "shouldFocusToggleOnSelect",
      "shouldFocusFirstItemOnOpen",
      "onOpenChange",
      "onOpenChangeKeys",
      "onToggleKeydown",
      "variant",
      "isPlain",
      "innerRef",
      "zIndex",
      "role",
      "popperProps",
      "menuHeight",
      "maxMenuHeight",
      "isScrollable",
      "shouldPreventScrollOnItemFocus",
      "focusTimeoutDelay"
    ]);
    const F = b.useRef(void 0), D = b.useRef(void 0), P = x || F, N = typeof a == "function" || typeof a != "function" && !a.toggleRef ? D : a == null ? void 0 : a.toggleRef, T = b.useRef(r);
    b.useEffect(() => {
      T.current === false && r === true && c && setTimeout(() => {
        var w;
        const S = (w = P == null ? void 0 : P.current) === null || w === void 0 ? void 0 : w.querySelector("li button:not(:disabled),li input:not(:disabled)");
        S && S.focus({
          preventScroll: L
        });
      }, O), T.current = r;
    }, [
      r
    ]), b.useEffect(() => {
      const w = (z) => {
        var H, W, q, h;
        r && s && (!((H = P.current) === null || H === void 0) && H.contains(z.target) || !((W = N.current) === null || W === void 0) && W.contains(z.target)) && u.includes(z.key) && (z.preventDefault(), s(false), (q = N.current) === null || q === void 0 || q.focus()), !((h = N.current) === null || h === void 0) && h.contains(z.target) && (p ? p(z) : r && f !== "typeahead" && od(z, P));
      }, S = (z) => {
        var H, W;
        r && s && !(!((H = N == null ? void 0 : N.current) === null || H === void 0) && H.contains(z.target)) && r && !(!((W = P.current) === null || W === void 0) && W.contains(z.target)) && s(false);
      };
      return window.addEventListener("keydown", w), window.addEventListener("click", S), () => {
        window.removeEventListener("keydown", w), window.removeEventListener("click", S);
      };
    }, [
      r,
      P,
      N,
      s,
      u,
      p,
      L,
      c,
      O
    ]);
    const y = m.jsx(Oi, Object.assign({
      role: C,
      className: E(n),
      ref: P,
      onSelect: (w, S) => {
        i && i(w, S), l && N.current.focus();
      },
      isPlain: d,
      selected: o,
      isScrollable: R ?? (j !== void 0 || I !== void 0)
    }, Un(Ln.displayName, M.ouiaId !== void 0 ? M.ouiaId : on(Ln.displayName), M.ouiaSafe !== void 0 ? M.ouiaSafe : true), M, {
      children: m.jsx(Jl, {
        menuHeight: j,
        maxMenuHeight: I,
        children: t
      })
    }));
    return m.jsx(zi, Object.assign({
      trigger: typeof a == "function" ? a(N) : a.toggleNode,
      triggerRef: N,
      popper: y,
      popperRef: P,
      isVisible: r,
      zIndex: v
    }, k));
  }, Ln = b.forwardRef((e, t) => m.jsx(_d, Object.assign({
    innerRef: t
  }, e)));
  Ln.displayName = "Select";
  const Co = (e) => {
    var { children: t, className: n, isAriaMultiselectable: i = false } = e, r = K(e, [
      "children",
      "className",
      "isAriaMultiselectable"
    ]);
    return m.jsx(ns, Object.assign({
      isAriaMultiselectable: i,
      className: E(n)
    }, r, {
      children: t
    }));
  };
  Co.displayName = "SelectList";
  const jd = (e) => {
    var { children: t, className: n, innerRef: i, value: r } = e, o = K(e, [
      "children",
      "className",
      "innerRef",
      "value"
    ]);
    return m.jsx(ts, Object.assign({
      itemId: r,
      ref: i,
      className: E(n)
    }, o, {
      children: t
    }));
  }, Oo = b.forwardRef((e, t) => m.jsx(jd, Object.assign({}, e, {
    innerRef: t
  })));
  Oo.displayName = "SelectOption";
  const Me = {
    menuToggle: "pf-v6-c-menu-toggle",
    menuToggleButton: "pf-v6-c-menu-toggle__button",
    menuToggleControls: "pf-v6-c-menu-toggle__controls",
    menuToggleCount: "pf-v6-c-menu-toggle__count",
    menuToggleIcon: "pf-v6-c-menu-toggle__icon",
    menuToggleStatusIcon: "pf-v6-c-menu-toggle__status-icon",
    menuToggleText: "pf-v6-c-menu-toggle__text",
    menuToggleToggleIcon: "pf-v6-c-menu-toggle__toggle-icon",
    modifiers: {
      primary: "pf-m-primary",
      secondary: "pf-m-secondary",
      fullHeight: "pf-m-full-height",
      fullWidth: "pf-m-full-width",
      plain: "pf-m-plain",
      expanded: "pf-m-expanded",
      disabled: "pf-m-disabled",
      small: "pf-m-small",
      success: "pf-m-success",
      warning: "pf-m-warning",
      danger: "pf-m-danger",
      placeholder: "pf-m-placeholder",
      splitButton: "pf-m-split-button",
      standalone: "pf-m-standalone",
      typeahead: "pf-m-typeahead",
      text: "pf-m-text",
      avatar: "pf-m-avatar"
    }
  }, Ed = {
    name: "CaretDownIcon",
    height: 512,
    width: 320,
    svgPath: "M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",
    yOffset: 0,
    xOffset: 0
  }, Id = Fe(Ed);
  var On;
  (function(e) {
    e.success = "success", e.danger = "danger", e.warning = "warning";
  })(On || (On = {}));
  var Fr;
  (function(e) {
    e.default = "default", e.sm = "sm";
  })(Fr || (Fr = {}));
  class is extends b.Component {
    constructor() {
      super(...arguments), this.displayName = "MenuToggleBase", this.state = {
        ouiaStateId: on(Fn.displayName, this.props.variant)
      };
    }
    render() {
      const t = this.props, { children: n, className: i, icon: r, badge: o, isExpanded: a, isDisabled: l, isFullHeight: c, isFullWidth: s, isPlaceholder: u, splitButtonItems: p, variant: f, status: d, statusIcon: x, innerRef: v, onClick: C, "aria-label": k, ouiaId: j, ouiaSafe: I, size: R } = t, L = K(t, [
        "children",
        "className",
        "icon",
        "badge",
        "isExpanded",
        "isDisabled",
        "isFullHeight",
        "isFullWidth",
        "isPlaceholder",
        "splitButtonItems",
        "variant",
        "status",
        "statusIcon",
        "innerRef",
        "onClick",
        "aria-label",
        "ouiaId",
        "ouiaSafe",
        "size"
      ]), O = f === "plain", M = f === "plainText", F = f === "typeahead", D = Un(Fn.displayName, j ?? this.state.ouiaStateId, I);
      let P = x;
      if (!x) switch (d) {
        case On.success:
          P = m.jsx(Di, {});
          break;
        case On.warning:
          P = m.jsx(Li, {});
          break;
        case On.danger:
          P = m.jsx(co, {});
          break;
      }
      const N = m.jsxs("span", {
        className: E(Me.menuToggleControls),
        children: [
          d !== void 0 && m.jsx("span", {
            className: E(Me.menuToggleStatusIcon),
            children: P
          }),
          m.jsx("span", {
            className: E(Me.menuToggleToggleIcon),
            children: m.jsx(Id, {})
          })
        ]
      }), T = m.jsxs(m.Fragment, {
        children: [
          r && m.jsx("span", {
            className: E(Me.menuToggleIcon),
            children: r
          }),
          F ? n : n && m.jsx("span", {
            className: E(Me.menuToggleText),
            children: n
          }),
          b.isValidElement(o) && m.jsx("span", {
            className: E(Me.menuToggleCount),
            children: o
          }),
          F ? m.jsx("button", Object.assign({
            type: "button",
            className: E(Me.menuToggleButton),
            "aria-expanded": a,
            onClick: C,
            "aria-label": k || "Menu toggle",
            tabIndex: -1
          }, D, {
            children: N
          })) : !O && N
        ]
      }), y = E(Me.menuToggle, a && Me.modifiers.expanded, f === "primary" && Me.modifiers.primary, f === "secondary" && Me.modifiers.secondary, d && Me.modifiers[d], (O || M) && Me.modifiers.plain, M && "pf-m-text", c && Me.modifiers.fullHeight, s && Me.modifiers.fullWidth, l && Me.modifiers.disabled, u && Me.modifiers.placeholder, R === Fr.sm && Me.modifiers.small, i), w = Object.assign(Object.assign({
        children: T
      }, l && {
        disabled: true
      }), L);
      return F ? m.jsx("div", Object.assign({
        ref: v,
        className: E(y, Me.modifiers.typeahead)
      }, w)) : p ? m.jsxs("div", {
        ref: v,
        className: E(y, Me.modifiers.splitButton),
        children: [
          p,
          m.jsxs("button", Object.assign({
            className: E(Me.menuToggleButton, n && Me.modifiers.text),
            type: "button",
            "aria-expanded": a,
            "aria-label": k,
            disabled: l,
            onClick: C
          }, L, D, {
            children: [
              n && m.jsx("span", {
                className: E(Me.menuToggleText),
                children: n
              }),
              N
            ]
          }))
        ]
      }) : m.jsx("button", Object.assign({
        className: E(y),
        type: "button",
        "aria-label": k,
        "aria-expanded": a,
        ref: v,
        disabled: l,
        onClick: C
      }, w, D));
    }
  }
  is.defaultProps = {
    className: "",
    isExpanded: false,
    isDisabled: false,
    isFullWidth: false,
    isFullHeight: false,
    isPlaceholder: false,
    size: "default",
    ouiaSafe: true
  };
  const Fn = b.forwardRef((e, t) => m.jsx(is, Object.assign({
    innerRef: t
  }, e)));
  Fn.displayName = "MenuToggle";
  const ye = {
    card: "pf-v6-c-card",
    cardActions: "pf-v6-c-card__actions",
    cardBody: "pf-v6-c-card__body",
    cardHeader: "pf-v6-c-card__header",
    cardHeaderMain: "pf-v6-c-card__header-main",
    cardHeaderToggle: "pf-v6-c-card__header-toggle",
    cardHeaderToggleIcon: "pf-v6-c-card__header-toggle-icon",
    cardSelectableActions: "pf-v6-c-card__selectable-actions",
    cardTitle: "pf-v6-c-card__title",
    cardTitleText: "pf-v6-c-card__title-text",
    modifiers: {
      selectable: "pf-m-selectable",
      clickable: "pf-m-clickable",
      current: "pf-m-current",
      selected: "pf-m-selected",
      disabled: "pf-m-disabled",
      compact: "pf-m-compact",
      displayLg: "pf-m-display-lg",
      secondary: "pf-m-secondary",
      plain: "pf-m-plain",
      expanded: "pf-m-expanded",
      fullHeight: "pf-m-full-height",
      toggleRight: "pf-m-toggle-right",
      wrap: "pf-m-wrap",
      noOffset: "pf-m-no-offset",
      noFill: "pf-m-no-fill"
    }
  }, So = b.createContext({
    cardId: "",
    isExpanded: false,
    isClickable: false,
    isSelectable: false,
    isSelected: false,
    isClicked: false,
    isDisabled: false
  }), _o = (e) => {
    var { children: t, id: n = "", className: i, component: r = "div", isCompact: o = false, isSelectable: a = false, isClickable: l = false, isDisabled: c = false, isSelected: s = false, isClicked: u = false, isExpanded: p = false, isLarge: f = false, isFullHeight: d = false, isPlain: x = false, variant: v = "default", ouiaId: C, ouiaSafe: k = true } = e, j = K(e, [
      "children",
      "id",
      "className",
      "component",
      "isCompact",
      "isSelectable",
      "isClickable",
      "isDisabled",
      "isSelected",
      "isClicked",
      "isExpanded",
      "isLarge",
      "isFullHeight",
      "isPlain",
      "variant",
      "ouiaId",
      "ouiaSafe"
    ]);
    const I = r, R = fo(_o.displayName, C, k);
    o && f && (console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"), f = false);
    const L = () => a && l ? E(ye.modifiers.selectable, ye.modifiers.clickable, (s || u) && ye.modifiers.current) : a ? E(ye.modifiers.selectable, s && ye.modifiers.selected) : l ? E(ye.modifiers.clickable, u && ye.modifiers.current) : "";
    return m.jsx(So.Provider, {
      value: {
        cardId: n,
        isExpanded: p,
        isClickable: l,
        isSelectable: a,
        isSelected: s,
        isClicked: u,
        isDisabled: c
      },
      children: m.jsx(I, Object.assign({
        id: n,
        className: E(ye.card, o && ye.modifiers.compact, p && ye.modifiers.expanded, f && ye.modifiers.displayLg, d && ye.modifiers.fullHeight, x && ye.modifiers.plain, v === "secondary" && ye.modifiers.secondary, L(), c && ye.modifiers.disabled, i)
      }, j, R, {
        children: t
      }))
    });
  };
  _o.displayName = "Card";
  const rs = (e) => {
    var { children: t, className: n, component: i = "div", isFilled: r = true } = e, o = K(e, [
      "children",
      "className",
      "component",
      "isFilled"
    ]);
    const a = i;
    return m.jsx(a, Object.assign({
      className: E(ye.cardBody, !r && ye.modifiers.noFill, n)
    }, o, {
      children: t
    }));
  };
  rs.displayName = "CardBody";
  const os = (e) => {
    var { children: t, className: n, component: i = "div" } = e, r = K(e, [
      "children",
      "className",
      "component"
    ]);
    const { cardId: o } = b.useContext(So), a = i, l = o ? `${o}-title` : "";
    return m.jsx("div", {
      className: E(ye.cardTitle),
      children: m.jsx(a, Object.assign({
        className: E(ye.cardTitleText, n),
        id: l || void 0
      }, r, {
        children: t
      }))
    });
  };
  os.displayName = "CardTitle";
  const as = (e) => {
    var { children: t, className: n } = e, i = K(e, [
      "children",
      "className"
    ]);
    return m.jsx("div", Object.assign({
      className: E(ye.cardHeaderMain, n)
    }, i, {
      children: t
    }));
  };
  as.displayName = "CardHeaderMain";
  const ls = (e) => {
    var { children: t, className: n, hasNoOffset: i = false } = e, r = K(e, [
      "children",
      "className",
      "hasNoOffset"
    ]);
    return m.jsx("div", Object.assign({
      className: E(ye.cardActions, i && ye.modifiers.noOffset, n)
    }, r, {
      children: t
    }));
  };
  ls.displayName = "CardActions";
  const ss = (e) => {
    var { children: t, className: n } = e, i = K(e, [
      "children",
      "className"
    ]);
    return m.jsx("div", Object.assign({
      className: E(ye.cardSelectableActions, n)
    }, i, {
      children: t
    }));
  };
  ss.displayName = "CardSelectableActions";
  const Lt = {
    modifiers: {
      standalone: "pf-m-standalone",
      disabled: "pf-m-disabled"
    },
    radio: "pf-v6-c-radio",
    radioBody: "pf-v6-c-radio__body",
    radioDescription: "pf-v6-c-radio__description",
    radioInput: "pf-v6-c-radio__input",
    radioLabel: "pf-v6-c-radio__label"
  };
  class tn extends b.Component {
    constructor(t) {
      super(t), this.handleChange = (n) => {
        this.props.onChange(n, n.currentTarget.checked);
      }, !t.label && !t["aria-label"] && console.error("Radio:", "Radio requires an aria-label to be specified"), this.state = {
        ouiaStateId: on(tn.displayName)
      };
    }
    render() {
      const t = this.props, { "aria-label": n, checked: i, className: r, inputClassName: o, defaultChecked: a, isLabelWrapped: l, labelPosition: c = "end", isChecked: s, isDisabled: u, isValid: p, label: f, onChange: d, description: x, body: v, ouiaId: C, ouiaSafe: k = true, component: j } = t, I = K(t, [
        "aria-label",
        "checked",
        "className",
        "inputClassName",
        "defaultChecked",
        "isLabelWrapped",
        "labelPosition",
        "isChecked",
        "isDisabled",
        "isValid",
        "label",
        "onChange",
        "description",
        "body",
        "ouiaId",
        "ouiaSafe",
        "component"
      ]);
      I.id || console.error("Radio:", "id is required to make input accessible");
      const R = m.jsx("input", Object.assign({}, I, {
        className: E(Lt.radioInput, o),
        type: "radio",
        onChange: this.handleChange,
        "aria-invalid": !p,
        disabled: u,
        checked: i || s
      }, i === void 0 && {
        defaultChecked: a
      }, !f && {
        "aria-label": n
      }, Un(tn.displayName, C !== void 0 ? C : this.state.ouiaStateId, k))), L = l && !j || j === "label", O = L ? "span" : "label", M = f ? m.jsx(O, {
        className: E(Lt.radioLabel, u && Lt.modifiers.disabled),
        htmlFor: L ? void 0 : I.id,
        children: f
      }) : null, F = j ?? (L ? "label" : "div");
      return m.jsxs(F, {
        className: E(Lt.radio, !f && Lt.modifiers.standalone, r),
        htmlFor: L ? I.id : void 0,
        children: [
          c === "start" ? m.jsxs(m.Fragment, {
            children: [
              M,
              R
            ]
          }) : m.jsxs(m.Fragment, {
            children: [
              R,
              M
            ]
          }),
          x && m.jsx("span", {
            className: E(Lt.radioDescription),
            children: x
          }),
          v && m.jsx("span", {
            className: E(Lt.radioBody),
            children: v
          })
        ]
      });
    }
  }
  tn.displayName = "Radio";
  tn.defaultProps = {
    className: "",
    isDisabled: false,
    isValid: true,
    onChange: () => {
    }
  };
  const cs = (e) => {
    var { children: t, className: n, actions: i, selectableActions: r, id: o, onExpand: a, toggleButtonProps: l, isToggleRightAligned: c, hasWrap: s } = e, u = K(e, [
      "children",
      "className",
      "actions",
      "selectableActions",
      "id",
      "onExpand",
      "toggleButtonProps",
      "isToggleRightAligned",
      "hasWrap"
    ]);
    return m.jsx(Wn, {
      children: (p) => m.jsx(So.Consumer, {
        children: ({ cardId: f, isClickable: d, isSelectable: x, isSelected: v, isDisabled: C }) => {
          const k = m.jsx("div", {
            className: E(ye.cardHeaderToggle),
            children: m.jsx(st, Object.assign({
              variant: "plain",
              type: "button",
              onClick: (D) => {
                a(D, f);
              }
            }, l, {
              icon: m.jsx("span", {
                className: E(ye.cardHeaderToggleIcon),
                children: m.jsx(Yl, {})
              })
            }))
          }), j = d && !x || x && !d;
          (i == null ? void 0 : i.actions) && j && console.error(`Card: ${d ? "Clickable" : "Selectable"} only cards should not contain any other actions. If you wish to include additional actions, use a clickable and selectable card.`);
          const I = d && !x;
          (I || x) && !(r == null ? void 0 : r.selectableActionAriaLabel) && !(r == null ? void 0 : r.selectableActionAriaLabelledby) && console.error(`Card: ${I ? "Clickable-only cards" : "Cards with a selectable input"} must have either the selectableActions.selectableActionAriaLabel or selectableActions.selectableActionAriaLabelledby prop passed in order to provide an accessible name to the clickable element.`);
          const R = (r == null ? void 0 : r.variant) === "single" ? tn : qt, L = () => {
            var D, P;
            return Object.assign({
              className: E("pf-m-standalone"),
              inputClassName: E((r == null ? void 0 : r.isHidden) && "pf-v6-screen-reader"),
              label: m.jsx(m.Fragment, {}),
              "aria-label": r.selectableActionAriaLabel,
              "aria-labelledby": r.selectableActionAriaLabelledby,
              id: (D = r.selectableActionId) !== null && D !== void 0 ? D : `card-selectable-${p}`,
              name: r.name,
              isDisabled: C,
              onChange: r.onChange,
              isChecked: (P = r.isChecked) !== null && P !== void 0 ? P : v
            }, r.selectableActionProps);
          }, O = (r == null ? void 0 : r.to) !== void 0, M = O ? "a" : "button", F = () => {
            const P = Object.assign({
              className: E("pf-v6-c-card__clickable-action", C && O && ye.modifiers.disabled, (r == null ? void 0 : r.isHidden) && "pf-v6-screen-reader"),
              id: r.selectableActionId,
              "aria-label": r.selectableActionAriaLabel,
              "aria-labelledby": r.selectableActionAriaLabelledby
            }, r.selectableActionProps);
            return O ? Object.assign(Object.assign(Object.assign(Object.assign({}, P), {
              href: r.to
            }), C && {
              tabIndex: -1,
              "aria-disabled": true
            }), r.isExternalLink && {
              target: "_blank"
            }) : Object.assign(Object.assign({}, P), {
              type: "button",
              disabled: C,
              onClick: r.onClickAction
            });
          };
          return m.jsxs("div", Object.assign({
            className: E(ye.cardHeader, c && ye.modifiers.toggleRight, s && ye.modifiers.wrap, n),
            id: o
          }, u, {
            children: [
              a && !c && k,
              (i || r && (d || x)) && m.jsxs(ls, {
                className: i == null ? void 0 : i.className,
                hasNoOffset: (i == null ? void 0 : i.hasNoOffset) || (r == null ? void 0 : r.hasNoOffset),
                children: [
                  i == null ? void 0 : i.actions,
                  r && (d || x) && m.jsxs(ss, {
                    className: r == null ? void 0 : r.className,
                    children: [
                      x && m.jsx(R, Object.assign({}, L())),
                      I && m.jsx(M, Object.assign({}, F()))
                    ]
                  })
                ]
              }),
              t && m.jsx(as, {
                children: t
              }),
              a && c && k
            ]
          }));
        }
      })
    });
  };
  cs.displayName = "CardHeader";
  const Pd = {
    name: "CopyIcon",
    height: 512,
    width: 448,
    svgPath: "M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z",
    yOffset: 0,
    xOffset: 0
  }, Td = Fe(Pd);
  var pa;
  (function(e) {
    e.h1 = "h1", e.h2 = "h2", e.h3 = "h3", e.h4 = "h4", e.h5 = "h5", e.h6 = "h6", e.p = "p", e.a = "a", e.small = "small", e.blockquote = "blockquote", e.pre = "pre", e.hr = "hr", e.ul = "ul", e.ol = "ol", e.dl = "dl", e.li = "li", e.dt = "dt", e.dd = "dd";
  })(pa || (pa = {}));
  const Nd = {
    div: De.content,
    h1: De.contentH1,
    h2: De.contentH2,
    h3: De.contentH3,
    h4: De.contentH4,
    h5: De.contentH5,
    h6: De.contentH6,
    p: De.contentP,
    a: De.contentA,
    small: De.contentSmall,
    blockquote: De.contentBlockquote,
    pre: De.contentPre,
    hr: De.contentHr,
    ul: De.contentUl,
    ol: De.contentOl,
    dl: De.contentDl,
    li: De.contentLi,
    dt: De.contentDt,
    dd: De.contentDd
  }, jo = (e) => {
    var { children: t, className: n = "", component: i, isPlainList: r = false, isVisitedLink: o = false, ouiaId: a, ouiaSafe: l = true, isEditorial: c = false } = e, s = K(e, [
      "children",
      "className",
      "component",
      "isPlainList",
      "isVisitedLink",
      "ouiaId",
      "ouiaSafe",
      "isEditorial"
    ]);
    const u = i ?? "div", p = u, f = fo(jo.displayName, a, l), d = [
      "ul",
      "ol",
      "dl"
    ].includes(u);
    return m.jsx(p, Object.assign({}, f, s, {
      "data-pf-content": true,
      className: E(Nd[u], d && r && De.modifiers.plain, o && De.modifiers.visited, c && De.modifiers.editorial, n),
      children: t
    }));
  };
  jo.displayName = "Content";
  const we = {
    modifiers: {
      noPadding: "pf-m-no-padding",
      widthAuto: "pf-m-width-auto",
      top: "pf-m-top",
      topLeft: "pf-m-top-left",
      topRight: "pf-m-top-right",
      bottom: "pf-m-bottom",
      bottomLeft: "pf-m-bottom-left",
      bottomRight: "pf-m-bottom-right",
      left: "pf-m-left",
      leftTop: "pf-m-left-top",
      leftBottom: "pf-m-left-bottom",
      right: "pf-m-right",
      rightTop: "pf-m-right-top",
      rightBottom: "pf-m-right-bottom",
      danger: "pf-m-danger",
      warning: "pf-m-warning",
      success: "pf-m-success",
      custom: "pf-m-custom",
      info: "pf-m-info"
    },
    popover: "pf-v6-c-popover",
    popoverArrow: "pf-v6-c-popover__arrow",
    popoverBody: "pf-v6-c-popover__body",
    popoverClose: "pf-v6-c-popover__close",
    popoverContent: "pf-v6-c-popover__content",
    popoverFooter: "pf-v6-c-popover__footer",
    popoverHeader: "pf-v6-c-popover__header",
    popoverTitle: "pf-v6-c-popover__title",
    popoverTitleIcon: "pf-v6-c-popover__title-icon",
    popoverTitleText: "pf-v6-c-popover__title-text"
  }, Md = b.createContext({}), us = (e) => {
    var { className: t = null, children: n } = e, i = K(e, [
      "className",
      "children"
    ]);
    return m.jsx("div", Object.assign({
      className: E(we.popoverContent, t)
    }, i, {
      children: n
    }));
  };
  us.displayName = "PopoverContent";
  const ps = (e) => {
    var { children: t, id: n, className: i } = e, r = K(e, [
      "children",
      "id",
      "className"
    ]);
    return m.jsx("div", Object.assign({
      className: E(we.popoverBody, i),
      id: n
    }, r, {
      children: t
    }));
  };
  ps.displayName = "PopoverBody";
  const ds = (e) => {
    var { children: t, className: n } = e, i = K(e, [
      "children",
      "className"
    ]);
    return m.jsx("span", Object.assign({
      className: E(we.popoverTitleIcon, n)
    }, i, {
      children: t
    }));
  };
  ds.displayName = "PopoverHeaderIcon";
  const fs = (e) => {
    var { children: t, className: n, headingLevel: i } = e, r = K(e, [
      "children",
      "className",
      "headingLevel"
    ]);
    const o = i;
    return m.jsx(o, Object.assign({
      className: E(we.popoverTitleText, n)
    }, r, {
      children: t
    }));
  };
  fs.displayName = "PopoverHeaderText";
  const ms = (e) => {
    var { children: t, icon: n, className: i, titleHeadingLevel: r = "h6", alertSeverityVariant: o, id: a, alertSeverityScreenReaderText: l } = e, c = K(e, [
      "children",
      "icon",
      "className",
      "titleHeadingLevel",
      "alertSeverityVariant",
      "id",
      "alertSeverityScreenReaderText"
    ]);
    return m.jsx("header", Object.assign({
      className: E(we.popoverHeader, i)
    }, c, {
      children: m.jsxs("div", {
        className: E(we.popoverTitle),
        id: a,
        children: [
          n && m.jsx(ds, {
            children: n
          }),
          m.jsxs(fs, {
            headingLevel: r,
            children: [
              o && l && m.jsx("span", {
                className: "pf-v6-screen-reader",
                children: l
              }),
              t
            ]
          })
        ]
      })
    }));
  };
  ms.displayName = "PopoverHeader";
  const hs = (e) => {
    var { children: t, className: n = "" } = e, i = K(e, [
      "children",
      "className"
    ]);
    return m.jsx("footer", Object.assign({
      className: E(we.popoverFooter, n)
    }, i, {
      children: t
    }));
  };
  hs.displayName = "PopoverFooter";
  const gs = (e) => {
    var { onClose: t = () => {
    } } = e, n = K(e, [
      "onClose"
    ]);
    return m.jsx("div", {
      className: E(we.popoverClose),
      children: m.jsx(st, Object.assign({
        onClick: t,
        variant: "plain",
        "aria-label": true
      }, n, {
        style: {
          pointerEvents: "auto"
        },
        icon: m.jsx(Xl, {})
      }))
    });
  };
  gs.displayName = "PopoverCloseButton";
  const xs = (e) => {
    var { className: t = "" } = e, n = K(e, [
      "className"
    ]);
    return m.jsx("div", Object.assign({
      className: E(we.popoverArrow, t)
    }, n));
  };
  xs.displayName = "PopoverArrow";
  const tr = {
    name: "--pf-v6-c-popover--MaxWidth",
    value: "none",
    var: "var(--pf-v6-c-popover--MaxWidth)"
  }, nr = {
    name: "--pf-v6-c-popover--MinWidth",
    value: "auto",
    var: "var(--pf-v6-c-popover--MinWidth)"
  };
  var da;
  (function(e) {
    e.auto = "auto", e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e.topStart = "top-start", e.topEnd = "top-end", e.bottomStart = "bottom-start", e.bottomEnd = "bottom-end", e.leftStart = "left-start", e.leftEnd = "left-end", e.rightStart = "right-start", e.rightEnd = "right-end";
  })(da || (da = {}));
  const Rd = {
    custom: we.modifiers.custom,
    info: we.modifiers.info,
    success: we.modifiers.success,
    warning: we.modifiers.warning,
    danger: we.modifiers.danger
  }, vs = (e) => {
    var { children: t, position: n = "top", enableFlip: i = true, className: r = "", isVisible: o = null, shouldClose: a = () => null, shouldOpen: l = () => null, "aria-label": c = "", bodyContent: s, headerContent: u = null, headerComponent: p = "h6", headerIcon: f = null, alertSeverityVariant: d, alertSeverityScreenReaderText: x, footerContent: v = null, appendTo: C = () => document.body, hideOnOutsideClick: k = true, onHide: j = () => null, onHidden: I = () => null, onShow: R = () => null, onShown: L = () => null, onMount: O = () => null, zIndex: M = 9999, triggerAction: F = "click", minWidth: D = nr && nr.value, maxWidth: P = tr && tr.value, closeBtnAriaLabel: N = "Close", showClose: T = true, distance: y = 25, flipBehavior: w = [
      "top",
      "bottom",
      "left",
      "right",
      "top-start",
      "top-end",
      "bottom-start",
      "bottom-end",
      "left-start",
      "left-end",
      "right-start",
      "right-end"
    ], animationDuration: S = 300, id: z, withFocusTrap: H, triggerRef: W, hasNoPadding: q = false, hasAutoWidth: h = false, elementToFocus: U } = e, Q = K(e, [
      "children",
      "position",
      "enableFlip",
      "className",
      "isVisible",
      "shouldClose",
      "shouldOpen",
      "aria-label",
      "bodyContent",
      "headerContent",
      "headerComponent",
      "headerIcon",
      "alertSeverityVariant",
      "alertSeverityScreenReaderText",
      "footerContent",
      "appendTo",
      "hideOnOutsideClick",
      "onHide",
      "onHidden",
      "onShow",
      "onShown",
      "onMount",
      "zIndex",
      "triggerAction",
      "minWidth",
      "maxWidth",
      "closeBtnAriaLabel",
      "showClose",
      "distance",
      "flipBehavior",
      "animationDuration",
      "id",
      "withFocusTrap",
      "triggerRef",
      "hasNoPadding",
      "hasAutoWidth",
      "elementToFocus"
    ]);
    const g = z || po(), G = o !== null, [le, ee] = b.useState(false), [ke, me] = b.useState(!!H), ve = b.useRef(null);
    b.useEffect(() => {
      O();
    }, []), b.useEffect(() => {
      G && (o ? xe(void 0, true) : ue());
    }, [
      o,
      G
    ]);
    const xe = (B, _) => {
      B && R(B), ee(true), H !== false && _ && me(true);
    }, ue = (B) => {
      B && j(B), ee(false);
    }, Ie = {
      top: we.modifiers.top,
      bottom: we.modifiers.bottom,
      left: we.modifiers.left,
      right: we.modifiers.right,
      "top-start": we.modifiers.topLeft,
      "top-end": we.modifiers.topRight,
      "bottom-start": we.modifiers.bottomLeft,
      "bottom-end": we.modifiers.bottomRight,
      "left-start": we.modifiers.leftTop,
      "left-end": we.modifiers.leftBottom,
      "right-start": we.modifiers.rightTop,
      "right-end": we.modifiers.rightBottom
    }, He = D !== nr.value, $e = P !== tr.value, qe = (B) => {
      B.key === Pr.Escape && le && (G ? a(B, ue) : ue(B));
    }, Pe = (B, _, A) => {
      if (k && le) {
        const X = A && A.contains(B.target), ne = _ && _.contains(B.target);
        if (X || ne) return;
        G ? a(B, ue) : ue(B);
      }
    }, de = (B) => {
      G ? le ? a(B, ue) : l(B, xe) : le ? ue(B) : xe(B, true);
    }, ze = () => {
      ke && me(false);
    }, Y = (B) => {
      G ? l(B, xe) : xe(B, false);
    }, J = (B) => {
      G ? a(B, ue) : ue(B);
    }, se = (B) => {
      G ? l(B, xe) : xe(B, false);
    }, _e = (B) => {
      G ? a(B, ue) : ue(B);
    }, Ce = (B) => {
      B.stopPropagation(), G ? a(B, ue) : ue(B);
    }, V = m.jsxs(uo, Object.assign({
      ref: ve,
      active: ke,
      focusTrapOptions: {
        returnFocusOnDeactivate: H !== false,
        clickOutsideDeactivates: true,
        initialFocus: U || void 0,
        checkCanFocusTrap: (B) => new Promise((_) => {
          const A = setInterval(() => {
            B.every((X) => getComputedStyle(X).visibility !== "hidden") && (_(), clearInterval(A));
          }, 10);
        }),
        tabbableOptions: {
          displayCheck: "none"
        },
        fallbackFocus: () => {
          let B = null;
          return document && document.activeElement && (B = document.activeElement), B;
        }
      },
      preventScrollOnDeactivate: true,
      className: E(we.popover, d && Rd[d], q && we.modifiers.noPadding, h && we.modifiers.widthAuto, r),
      role: "dialog",
      "aria-modal": "true",
      "aria-label": u ? void 0 : c,
      "aria-labelledby": u ? `popover-${g}-header` : void 0,
      "aria-describedby": `popover-${g}-body`,
      onMouseDown: ze,
      style: {
        minWidth: He ? D : null,
        maxWidth: $e ? P : null
      }
    }, Q, {
      children: [
        m.jsx(xs, {}),
        m.jsxs(us, {
          children: [
            T && F === "click" && m.jsx(gs, {
              onClose: Ce,
              "aria-label": N
            }),
            u && m.jsx(ms, {
              id: `popover-${g}-header`,
              icon: f,
              alertSeverityVariant: d,
              alertSeverityScreenReaderText: x || `${d} alert:`,
              titleHeadingLevel: p,
              children: typeof u == "function" ? u(ue) : u
            }),
            m.jsx(ps, {
              id: `popover-${g}-body`,
              children: typeof s == "function" ? s(ue) : s
            }),
            v && m.jsx(hs, {
              id: `popover-${g}-footer`,
              children: typeof v == "function" ? v(ue) : v
            })
          ]
        })
      ]
    }));
    return m.jsx(Md.Provider, {
      value: {
        headerComponent: p
      },
      children: m.jsx(zi, {
        trigger: t,
        triggerRef: W,
        popper: V,
        popperRef: ve,
        minWidth: D,
        appendTo: C,
        isVisible: le,
        onMouseEnter: F === "hover" && Y,
        onMouseLeave: F === "hover" && J,
        onPopperMouseEnter: F === "hover" && Y,
        onPopperMouseLeave: F === "hover" && J,
        onFocus: F === "hover" && se,
        onBlur: F === "hover" && _e,
        positionModifiers: Ie,
        distance: y,
        placement: n,
        onTriggerClick: F === "click" && de,
        onDocumentClick: Pe,
        onDocumentKeyDown: qe,
        enableFlip: i,
        zIndex: M,
        flipBehavior: w,
        animationDuration: S,
        onHidden: I,
        onShown: L,
        onHide: () => me(false)
      })
    });
  };
  vs.displayName = "Popover";
  const vn = {
    helperText: "pf-v6-c-helper-text",
    helperTextItem: "pf-v6-c-helper-text__item",
    helperTextItemIcon: "pf-v6-c-helper-text__item-icon",
    helperTextItemText: "pf-v6-c-helper-text__item-text",
    modifiers: {
      hidden: "pf-m-hidden",
      indeterminate: "pf-m-indeterminate",
      warning: "pf-m-warning",
      success: "pf-m-success",
      error: "pf-m-error",
      dynamic: "pf-m-dynamic"
    }
  }, bs = (e) => {
    var { children: t, className: n, component: i = "div", id: r, isLiveRegion: o = false, "aria-label": a } = e, l = K(e, [
      "children",
      "className",
      "component",
      "id",
      "isLiveRegion",
      "aria-label"
    ]);
    const c = i;
    return m.jsx(c, Object.assign({
      id: r,
      className: E(vn.helperText, n)
    }, o && {
      "aria-live": "polite"
    }, i === "ul" && {
      role: "list",
      "aria-label": a
    }, l, {
      children: t
    }));
  };
  bs.displayName = "HelperText";
  const Ad = {
    name: "MinusIcon",
    height: 512,
    width: 448,
    svgPath: "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",
    yOffset: 0,
    xOffset: 0
  }, Dd = Fe(Ad);
  var fa;
  (function(e) {
    e.default = "default", e.warning = "warning", e.error = "error", e.success = "success";
  })(fa || (fa = {}));
  const Ld = {
    indeterminate: m.jsx(Dd, {}),
    warning: m.jsx(Li, {}),
    success: m.jsx(Di, {}),
    error: m.jsx(co, {})
  }, zr = (e) => {
    var { children: t, className: n, component: i = "div", variant: r = "default", icon: o, id: a, screenReaderText: l = `${r} status` } = e, c = K(e, [
      "children",
      "className",
      "component",
      "variant",
      "icon",
      "id",
      "screenReaderText"
    ]);
    const s = i, u = r !== "default", p = u && Ld[r], f = u && l && l !== "";
    return m.jsxs(s, Object.assign({
      className: E(vn.helperTextItem, u && vn.modifiers[r], n),
      id: a
    }, c, {
      children: [
        (p || o) && m.jsx("span", {
          className: E(vn.helperTextItemIcon),
          children: o || p
        }),
        m.jsxs("span", {
          className: E(vn.helperTextItemText),
          children: [
            t,
            f && m.jsxs("span", {
              className: "pf-v6-screen-reader",
              children: [
                ": ",
                l,
                ";"
              ]
            })
          ]
        })
      ]
    }));
  };
  zr.displayName = "HelperTextItem";
  const ir = {
    divider: "pf-v6-c-divider",
    modifiers: {
      hidden: "pf-m-hidden",
      hiddenOnSm: "pf-m-hidden-on-sm",
      visibleOnSm: "pf-m-visible-on-sm",
      hiddenOnMd: "pf-m-hidden-on-md",
      visibleOnMd: "pf-m-visible-on-md",
      hiddenOnLg: "pf-m-hidden-on-lg",
      visibleOnLg: "pf-m-visible-on-lg",
      hiddenOnXl: "pf-m-hidden-on-xl",
      visibleOnXl: "pf-m-visible-on-xl",
      hiddenOn_2xl: "pf-m-hidden-on-2xl",
      visibleOn_2xl: "pf-m-visible-on-2xl",
      horizontal: "pf-m-horizontal",
      vertical: "pf-m-vertical",
      insetNone: "pf-m-inset-none",
      insetXs: "pf-m-inset-xs",
      insetSm: "pf-m-inset-sm",
      insetMd: "pf-m-inset-md",
      insetLg: "pf-m-inset-lg",
      insetXl: "pf-m-inset-xl",
      inset_2xl: "pf-m-inset-2xl",
      inset_3xl: "pf-m-inset-3xl",
      horizontalOnSm: "pf-m-horizontal-on-sm",
      verticalOnSm: "pf-m-vertical-on-sm",
      insetNoneOnSm: "pf-m-inset-none-on-sm",
      insetXsOnSm: "pf-m-inset-xs-on-sm",
      insetSmOnSm: "pf-m-inset-sm-on-sm",
      insetMdOnSm: "pf-m-inset-md-on-sm",
      insetLgOnSm: "pf-m-inset-lg-on-sm",
      insetXlOnSm: "pf-m-inset-xl-on-sm",
      inset_2xlOnSm: "pf-m-inset-2xl-on-sm",
      inset_3xlOnSm: "pf-m-inset-3xl-on-sm",
      horizontalOnMd: "pf-m-horizontal-on-md",
      verticalOnMd: "pf-m-vertical-on-md",
      insetNoneOnMd: "pf-m-inset-none-on-md",
      insetXsOnMd: "pf-m-inset-xs-on-md",
      insetSmOnMd: "pf-m-inset-sm-on-md",
      insetMdOnMd: "pf-m-inset-md-on-md",
      insetLgOnMd: "pf-m-inset-lg-on-md",
      insetXlOnMd: "pf-m-inset-xl-on-md",
      inset_2xlOnMd: "pf-m-inset-2xl-on-md",
      inset_3xlOnMd: "pf-m-inset-3xl-on-md",
      horizontalOnLg: "pf-m-horizontal-on-lg",
      verticalOnLg: "pf-m-vertical-on-lg",
      insetNoneOnLg: "pf-m-inset-none-on-lg",
      insetXsOnLg: "pf-m-inset-xs-on-lg",
      insetSmOnLg: "pf-m-inset-sm-on-lg",
      insetMdOnLg: "pf-m-inset-md-on-lg",
      insetLgOnLg: "pf-m-inset-lg-on-lg",
      insetXlOnLg: "pf-m-inset-xl-on-lg",
      inset_2xlOnLg: "pf-m-inset-2xl-on-lg",
      inset_3xlOnLg: "pf-m-inset-3xl-on-lg",
      horizontalOnXl: "pf-m-horizontal-on-xl",
      verticalOnXl: "pf-m-vertical-on-xl",
      insetNoneOnXl: "pf-m-inset-none-on-xl",
      insetXsOnXl: "pf-m-inset-xs-on-xl",
      insetSmOnXl: "pf-m-inset-sm-on-xl",
      insetMdOnXl: "pf-m-inset-md-on-xl",
      insetLgOnXl: "pf-m-inset-lg-on-xl",
      insetXlOnXl: "pf-m-inset-xl-on-xl",
      inset_2xlOnXl: "pf-m-inset-2xl-on-xl",
      inset_3xlOnXl: "pf-m-inset-3xl-on-xl",
      horizontalOn_2xl: "pf-m-horizontal-on-2xl",
      verticalOn_2xl: "pf-m-vertical-on-2xl",
      insetNoneOn_2xl: "pf-m-inset-none-on-2xl",
      insetXsOn_2xl: "pf-m-inset-xs-on-2xl",
      insetSmOn_2xl: "pf-m-inset-sm-on-2xl",
      insetMdOn_2xl: "pf-m-inset-md-on-2xl",
      insetLgOn_2xl: "pf-m-inset-lg-on-2xl",
      insetXlOn_2xl: "pf-m-inset-xl-on-2xl",
      inset_2xlOn_2xl: "pf-m-inset-2xl-on-2xl",
      inset_3xlOn_2xl: "pf-m-inset-3xl-on-2xl"
    }
  };
  var Br;
  (function(e) {
    e.hr = "hr", e.li = "li", e.div = "div";
  })(Br || (Br = {}));
  const ys = (e) => {
    var { className: t, component: n = Br.hr, inset: i, orientation: r } = e, o = K(e, [
      "className",
      "component",
      "inset",
      "orientation"
    ]);
    const a = n;
    return m.jsx(a, Object.assign({
      className: E(ir.divider, Et(i, ir), Et(r, ir), t)
    }, n !== "hr" && {
      role: "separator"
    }, o));
  };
  ys.displayName = "Divider";
  const Le = {
    drawer: "pf-v6-c-drawer",
    drawerContent: "pf-v6-c-drawer__content",
    drawerMain: "pf-v6-c-drawer__main",
    drawerPanel: "pf-v6-c-drawer__panel",
    drawerPanelMain: "pf-v6-c-drawer__panel-main",
    drawerSplitter: "pf-v6-c-drawer__splitter",
    drawerSplitterHandle: "pf-v6-c-drawer__splitter-handle",
    modifiers: {
      panelBottom: "pf-m-panel-bottom",
      inline: "pf-m-inline",
      static: "pf-m-static",
      noBorder: "pf-m-no-border",
      resizable: "pf-m-resizable",
      panelLeft: "pf-m-panel-left",
      expanded: "pf-m-expanded",
      resizing: "pf-m-resizing",
      secondary: "pf-m-secondary",
      noBackground: "pf-m-no-background",
      primary: "pf-m-primary",
      noPadding: "pf-m-no-padding",
      padding: "pf-m-padding",
      vertical: "pf-m-vertical",
      width_25: "pf-m-width-25",
      width_33: "pf-m-width-33",
      width_50: "pf-m-width-50",
      width_66: "pf-m-width-66",
      width_75: "pf-m-width-75",
      width_100: "pf-m-width-100",
      width_25OnLg: "pf-m-width-25-on-lg",
      width_33OnLg: "pf-m-width-33-on-lg",
      width_50OnLg: "pf-m-width-50-on-lg",
      width_66OnLg: "pf-m-width-66-on-lg",
      width_75OnLg: "pf-m-width-75-on-lg",
      width_100OnLg: "pf-m-width-100-on-lg",
      width_25OnXl: "pf-m-width-25-on-xl",
      width_33OnXl: "pf-m-width-33-on-xl",
      width_50OnXl: "pf-m-width-50-on-xl",
      width_66OnXl: "pf-m-width-66-on-xl",
      width_75OnXl: "pf-m-width-75-on-xl",
      width_100OnXl: "pf-m-width-100-on-xl",
      width_25On_2xl: "pf-m-width-25-on-2xl",
      width_33On_2xl: "pf-m-width-33-on-2xl",
      width_50On_2xl: "pf-m-width-50-on-2xl",
      width_66On_2xl: "pf-m-width-66-on-2xl",
      width_75On_2xl: "pf-m-width-75-on-2xl",
      width_100On_2xl: "pf-m-width-100-on-2xl",
      inlineOnLg: "pf-m-inline-on-lg",
      staticOnLg: "pf-m-static-on-lg",
      inlineOnXl: "pf-m-inline-on-xl",
      staticOnXl: "pf-m-static-on-xl",
      inlineOn_2xl: "pf-m-inline-on-2xl",
      staticOn_2xl: "pf-m-static-on-2xl"
    }
  };
  var Sn;
  (function(e) {
    e.default = "default", e.secondary = "secondary", e.noBackground = "no-background";
  })(Sn || (Sn = {}));
  const Eo = b.createContext({
    isExpanded: false,
    isStatic: false,
    onExpand: () => {
    },
    position: "end",
    drawerRef: null,
    drawerContentRef: null,
    isInline: false
  }), ws = (e) => {
    var { className: t = "", children: n, isExpanded: i = false, isInline: r = false, isStatic: o = false, position: a = "end", onExpand: l = () => {
    } } = e, c = K(e, [
      "className",
      "children",
      "isExpanded",
      "isInline",
      "isStatic",
      "position",
      "onExpand"
    ]);
    const s = b.useRef(void 0), u = b.useRef(void 0);
    return m.jsx(Eo.Provider, {
      value: {
        isExpanded: i,
        isStatic: o,
        onExpand: l,
        position: a,
        drawerRef: s,
        drawerContentRef: u,
        isInline: r
      },
      children: m.jsx("div", Object.assign({
        className: E(Le.drawer, i && Le.modifiers.expanded, r && Le.modifiers.inline, o && Le.modifiers.static, (a === "left" || a === "start") && Le.modifiers.panelLeft, a === "bottom" && Le.modifiers.panelBottom, t),
        ref: s
      }, c, {
        children: n
      }))
    });
  };
  ws.displayName = "Drawer";
  const ks = (e) => {
    var { className: t = "", children: n } = e, i = K(e, [
      "className",
      "children"
    ]);
    return m.jsx("div", Object.assign({
      className: E(Le.drawerMain, t)
    }, i, {
      children: n
    }));
  };
  ks.displayName = "DrawerMain";
  var _n;
  (function(e) {
    e.default = "default", e.primary = "primary", e.secondary = "secondary";
  })(_n || (_n = {}));
  const Cs = (e) => {
    var { className: t, children: n, panelContent: i, colorVariant: r = _n.default } = e, o = K(e, [
      "className",
      "children",
      "panelContent",
      "colorVariant"
    ]);
    const { drawerContentRef: a } = b.useContext(Eo);
    return m.jsxs(ks, {
      children: [
        m.jsx("div", Object.assign({
          className: E(Le.drawerContent, r === _n.primary && Le.modifiers.primary, r === _n.secondary && Le.modifiers.secondary, t),
          ref: a
        }, o, {
          children: n
        })),
        i
      ]
    });
  };
  Cs.displayName = "DrawerContent";
  const rr = {
    name: "--pf-v6-c-drawer__panel--md--FlexBasis"
  }, Fd = {
    name: "--pf-v6-c-drawer__panel--md--FlexBasis--min"
  }, zd = {
    name: "--pf-v6-c-drawer__panel--md--FlexBasis--max"
  };
  let Tt = null, fn = 0;
  const Os = (e) => {
    var { className: t, id: n, children: i, hasNoBorder: r = false, isResizable: o = false, onResize: a, minSize: l, defaultSize: c, maxSize: s, increment: u = 5, resizeAriaLabel: p = "Resize", widths: f, colorVariant: d = Sn.default, focusTrap: x } = e, v = K(e, [
      "className",
      "id",
      "children",
      "hasNoBorder",
      "isResizable",
      "onResize",
      "minSize",
      "defaultSize",
      "maxSize",
      "increment",
      "resizeAriaLabel",
      "widths",
      "colorVariant",
      "focusTrap"
    ]);
    const C = b.useRef(void 0), k = b.useRef(void 0), [j, I] = b.useState(0), { position: R, isExpanded: L, isStatic: O, onExpand: M, drawerRef: F, drawerContentRef: D, isInline: P } = b.useContext(Eo), N = O ? false : !L, [T, y] = b.useState(!N), [w, S] = b.useState(false), z = b.useRef(null);
    let H = 0, W, q, h, U, Q = true;
    O && (x == null ? void 0 : x.enabled) && console.warn("DrawerPanelContent: The focusTrap.enabled prop cannot be true if the Drawer's isStatic prop is true. This will cause a permanent focus trap."), b.useEffect(() => {
      !O && L && y(L);
    }, [
      O,
      L
    ]);
    const g = () => {
      let Y, J;
      const se = di(C.current) === "rtl";
      P && (R === "end" || R === "right") ? se ? (Y = C.current.getBoundingClientRect().left - k.current.getBoundingClientRect().right, J = F.current.getBoundingClientRect().left - F.current.getBoundingClientRect().right) : (Y = C.current.getBoundingClientRect().right - k.current.getBoundingClientRect().left, J = F.current.getBoundingClientRect().right - F.current.getBoundingClientRect().left) : P && (R === "start" || R === "left") ? se ? (Y = k.current.getBoundingClientRect().left - C.current.getBoundingClientRect().right, J = F.current.getBoundingClientRect().left - F.current.getBoundingClientRect().right) : (Y = k.current.getBoundingClientRect().right - C.current.getBoundingClientRect().left, J = F.current.getBoundingClientRect().right - F.current.getBoundingClientRect().left) : R === "end" || R === "right" ? se ? (Y = D.current.getBoundingClientRect().left - k.current.getBoundingClientRect().right, J = D.current.getBoundingClientRect().left - D.current.getBoundingClientRect().right) : (Y = D.current.getBoundingClientRect().right - k.current.getBoundingClientRect().left, J = D.current.getBoundingClientRect().right - D.current.getBoundingClientRect().left) : R === "start" || R === "left" ? se ? (Y = k.current.getBoundingClientRect().left - D.current.getBoundingClientRect().right, J = D.current.getBoundingClientRect().left - D.current.getBoundingClientRect().right) : (Y = k.current.getBoundingClientRect().right - D.current.getBoundingClientRect().left, J = D.current.getBoundingClientRect().right - D.current.getBoundingClientRect().left) : R === "bottom" && (Y = D.current.getBoundingClientRect().bottom - k.current.getBoundingClientRect().top, J = D.current.getBoundingClientRect().bottom - D.current.getBoundingClientRect().top);
      const _e = Y / J * 100;
      return Math.round((_e + Number.EPSILON) * 100) / 100;
    }, G = (Y) => {
      Y.stopPropagation(), document.addEventListener("touchmove", He, {
        passive: false
      }), document.addEventListener("touchend", Ie), Tt = true;
    }, le = (Y) => {
      Y.stopPropagation(), Y.preventDefault(), document.addEventListener("mousemove", ue), document.addEventListener("mouseup", $e), F.current.classList.add(E(Le.modifiers.resizing)), Tt = true, Q = true;
    }, ee = (Y) => {
      const J = R === "bottom" ? Y.clientY : Y.clientX;
      me(Y, J);
    }, ke = (Y) => {
      Y.preventDefault(), Y.stopImmediatePropagation();
      const J = R === "bottom" ? Y.touches[0].clientY : Y.touches[0].clientX;
      me(Y, J);
    }, me = (Y, J) => {
      const se = di(C.current) === "rtl";
      if (Y.stopPropagation(), !Tt) return;
      Q && (W = C.current.getBoundingClientRect(), se ? (h = W.right, q = W.left) : (q = W.right, h = W.left), U = W.bottom, Q = false);
      const _e = J;
      let Ce = 0;
      R === "end" || R === "right" ? Ce = se ? _e - q : q - _e : R === "start" || R === "left" ? Ce = se ? h - _e : _e - h : Ce = U - _e, R === "bottom" && (C.current.style.overflowAnchor = "none"), C.current.style.setProperty(rr.name, Ce + "px"), H = Ce, I(g());
    }, ve = (Y) => {
      Tt && (F.current.classList.remove(E(Le.modifiers.resizing)), Tt = false, a && a(Y, H, n), Q = true, document.removeEventListener("mousemove", ue), document.removeEventListener("mouseup", $e));
    }, xe = (Y) => {
      Y.stopPropagation(), Tt && (Tt = false, a && a(Y, H, n), document.removeEventListener("touchmove", He), document.removeEventListener("touchend", Ie));
    }, ue = b.useCallback(ee, []), Ie = b.useCallback(xe, []), He = b.useCallback(ke, []), $e = b.useCallback(ve, []), qe = (Y) => {
      const J = di(C.current) === "rtl", se = Y.key;
      if (se !== "Escape" && se !== "Enter" && se !== "ArrowUp" && se !== "ArrowDown" && se !== "ArrowLeft" && se !== "ArrowRight") {
        Tt && Y.preventDefault();
        return;
      }
      Y.preventDefault(), (se === "Escape" || se === "Enter") && a && a(Y, H, n);
      const _e = C.current.getBoundingClientRect();
      fn = R === "bottom" ? _e.height : _e.width;
      let Ce = 0;
      se === "ArrowRight" ? J ? Ce = R === "left" || R === "start" ? -u : u : Ce = R === "left" || R === "start" ? u : -u : se === "ArrowLeft" ? J ? Ce = R === "left" || R === "start" ? u : -u : Ce = R === "left" || R === "start" ? -u : u : se === "ArrowUp" ? Ce = u : se === "ArrowDown" && (Ce = -u), fn = fn + Ce, R === "bottom" && (C.current.style.overflowAnchor = "none"), C.current.style.setProperty(rr.name, fn + "px"), H = fn, I(g());
    }, Pe = {};
    c && (Pe[rr.name] = c), l && (Pe[Fd.name] = l), s && (Pe[zd.name] = s);
    const de = (x == null ? void 0 : x.enabled) && !O, ze = de ? uo : "div";
    return m.jsx(Wn, {
      prefix: "pf-drawer-panel-",
      children: (Y) => {
        const J = {
          tabIndex: -1,
          "aria-modal": true,
          role: "dialog",
          active: w,
          "aria-labelledby": (x == null ? void 0 : x["aria-labelledby"]) || n || Y,
          focusTrapOptions: {
            fallbackFocus: () => C.current,
            onActivate: () => {
              z.current !== document.activeElement && (z.current = document.activeElement);
            },
            onDeactivate: () => {
              z.current && z.current.focus && z.current.focus();
            },
            clickOutsideDeactivates: true,
            returnFocusOnDeactivate: false,
            initialFocus: (x == null ? void 0 : x.elementToFocusOnExpand) || void 0,
            escapeDeactivates: false
          }
        };
        return m.jsx(ze, Object.assign({}, de && J, {
          id: n || Y,
          className: E(Le.drawerPanel, o && Le.modifiers.resizable, r && Le.modifiers.noBorder, Et(f, Le), d === Sn.noBackground && Le.modifiers.noBackground, d === Sn.secondary && Le.modifiers.secondary, t),
          onTransitionEnd: (se) => {
            se.target === C.current && (!N && se.nativeEvent.propertyName === "transform" && M(se), y(!N), de && se.nativeEvent.propertyName === "transform" && S((_e) => !_e));
          },
          hidden: N
        }, (c || l || s) && {
          style: Pe
        }, v, {
          ref: C,
          children: T && m.jsxs(b.Fragment, {
            children: [
              o && m.jsxs(b.Fragment, {
                children: [
                  m.jsx("div", {
                    className: E(Le.drawerSplitter, R !== "bottom" && Le.modifiers.vertical),
                    role: "separator",
                    tabIndex: 0,
                    "aria-orientation": R === "bottom" ? "horizontal" : "vertical",
                    "aria-label": p,
                    "aria-valuenow": j,
                    "aria-valuemin": 0,
                    "aria-valuemax": 100,
                    "aria-controls": n || Y,
                    onMouseDown: le,
                    onKeyDown: qe,
                    onTouchStart: G,
                    ref: k,
                    children: m.jsx("div", {
                      className: E(Le.drawerSplitterHandle),
                      "aria-hidden": true
                    })
                  }),
                  m.jsx("div", {
                    className: E(Le.drawerPanelMain),
                    children: i
                  })
                ]
              }),
              !o && i
            ]
          })
        }));
      }
    });
  };
  Os.displayName = "DrawerPanelContent";
  const lt = {
    emptyState: "pf-v6-c-empty-state",
    emptyStateActions: "pf-v6-c-empty-state__actions",
    emptyStateBody: "pf-v6-c-empty-state__body",
    emptyStateContent: "pf-v6-c-empty-state__content",
    emptyStateFooter: "pf-v6-c-empty-state__footer",
    emptyStateIcon: "pf-v6-c-empty-state__icon",
    emptyStateTitleText: "pf-v6-c-empty-state__title-text",
    modifiers: {
      xs: "pf-m-xs",
      sm: "pf-m-sm",
      lg: "pf-m-lg",
      xl: "pf-m-xl",
      fullHeight: "pf-m-full-height",
      danger: "pf-m-danger",
      warning: "pf-m-warning",
      success: "pf-m-success",
      info: "pf-m-info",
      custom: "pf-m-custom"
    }
  }, Bd = (e) => e.type === ko, Ss = (e) => {
    var { className: t, icon: n } = e, i = K(e, [
      "className",
      "icon"
    ]);
    const r = Bd(m.jsx(n, {}));
    return m.jsx("div", {
      className: E(lt.emptyStateIcon),
      children: m.jsx(n, Object.assign({
        className: t,
        "aria-hidden": !r
      }, i))
    });
  };
  Ss.displayName = "EmptyStateIcon";
  var Hr;
  (function(e) {
    e.h1 = "h1", e.h2 = "h2", e.h3 = "h3", e.h4 = "h4", e.h5 = "h5", e.h6 = "h6";
  })(Hr || (Hr = {}));
  const _s = (e) => {
    var { className: t, titleClassName: n, titleText: i, headingLevel: r = Hr.h1, icon: o } = e, a = K(e, [
      "className",
      "titleClassName",
      "titleText",
      "headingLevel",
      "icon"
    ]);
    return m.jsxs("div", Object.assign({
      className: E(`${lt.emptyState}__header`, t)
    }, a, {
      children: [
        o && m.jsx(Ss, {
          icon: o
        }),
        i && m.jsx("div", {
          className: E(`${lt.emptyState}__title`),
          children: m.jsx(r, {
            className: E(lt.emptyStateTitleText, n),
            children: i
          })
        })
      ]
    }));
  };
  _s.displayName = "EmptyStateHeader";
  var zn;
  (function(e) {
    e.xs = "xs", e.sm = "sm", e.lg = "lg", e.xl = "xl", e.full = "full";
  })(zn || (zn = {}));
  var ma;
  (function(e) {
    e.danger = "danger", e.warning = "warning", e.success = "success", e.info = "info", e.custom = "custom";
  })(ma || (ma = {}));
  const $r = (e) => {
    var { children: t, className: n, variant: i = zn.full, isFullHeight: r, status: o, icon: a, titleText: l, titleClassName: c, headerClassName: s, headingLevel: u } = e, p = K(e, [
      "children",
      "className",
      "variant",
      "isFullHeight",
      "status",
      "icon",
      "titleText",
      "titleClassName",
      "headerClassName",
      "headingLevel"
    ]);
    const f = o && uu[o], d = a || f;
    return m.jsx("div", Object.assign({
      className: E(lt.emptyState, i !== "full" && lt.modifiers[i], r && lt.modifiers.fullHeight, o && lt.modifiers[o], n)
    }, p, {
      children: m.jsxs("div", {
        className: E(lt.emptyStateContent),
        children: [
          m.jsx(_s, {
            icon: d,
            titleText: l,
            titleClassName: c,
            className: s,
            headingLevel: u
          }),
          t
        ]
      })
    }));
  };
  $r.displayName = "EmptyState";
  const js = (e) => {
    var { children: t, className: n } = e, i = K(e, [
      "children",
      "className"
    ]);
    return m.jsx("div", Object.assign({
      className: E(lt.emptyStateBody, n)
    }, i, {
      children: t
    }));
  };
  js.displayName = "EmptyStateBody";
  const qr = (e) => {
    var { children: t, className: n } = e, i = K(e, [
      "children",
      "className"
    ]);
    return m.jsx("div", Object.assign({
      className: E(lt.emptyStateFooter, n)
    }, i, {
      children: t
    }));
  };
  qr.displayName = "EmptyStateFooter";
  const hi = (e) => {
    var { children: t, className: n } = e, i = K(e, [
      "children",
      "className"
    ]);
    return m.jsx("div", Object.assign({
      className: E(lt.emptyStateActions, n)
    }, i, {
      children: t
    }));
  };
  hi.displayName = "EmptyStateActions";
  const Hd = {
    modifiers: {
      loading: "pf-m-loading"
    }
  };
  var or = {
    exports: {}
  }, ar, ha;
  function $d() {
    if (ha) return ar;
    ha = 1;
    var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    return ar = e, ar;
  }
  var lr, ga;
  function qd() {
    if (ga) return lr;
    ga = 1;
    var e = $d();
    function t() {
    }
    function n() {
    }
    return n.resetWarningCache = t, lr = function() {
      function i(a, l, c, s, u, p) {
        if (p !== e) {
          var f = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw f.name = "Invariant Violation", f;
        }
      }
      i.isRequired = i;
      function r() {
        return i;
      }
      var o = {
        array: i,
        bigint: i,
        bool: i,
        func: i,
        number: i,
        object: i,
        string: i,
        symbol: i,
        any: i,
        arrayOf: r,
        element: i,
        elementType: i,
        instanceOf: r,
        node: i,
        objectOf: r,
        oneOf: r,
        oneOfType: r,
        shape: r,
        exact: r,
        checkPropTypes: n,
        resetWarningCache: t
      };
      return o.PropTypes = o, o;
    }, lr;
  }
  var xa;
  function Vd() {
    return xa || (xa = 1, or.exports = qd()()), or.exports;
  }
  var Wd = Vd();
  const Se = Ri(Wd), Ud = /* @__PURE__ */ new Map([
    [
      "1km",
      "application/vnd.1000minds.decision-model+xml"
    ],
    [
      "3dml",
      "text/vnd.in3d.3dml"
    ],
    [
      "3ds",
      "image/x-3ds"
    ],
    [
      "3g2",
      "video/3gpp2"
    ],
    [
      "3gp",
      "video/3gp"
    ],
    [
      "3gpp",
      "video/3gpp"
    ],
    [
      "3mf",
      "model/3mf"
    ],
    [
      "7z",
      "application/x-7z-compressed"
    ],
    [
      "7zip",
      "application/x-7z-compressed"
    ],
    [
      "123",
      "application/vnd.lotus-1-2-3"
    ],
    [
      "aab",
      "application/x-authorware-bin"
    ],
    [
      "aac",
      "audio/x-acc"
    ],
    [
      "aam",
      "application/x-authorware-map"
    ],
    [
      "aas",
      "application/x-authorware-seg"
    ],
    [
      "abw",
      "application/x-abiword"
    ],
    [
      "ac",
      "application/vnd.nokia.n-gage.ac+xml"
    ],
    [
      "ac3",
      "audio/ac3"
    ],
    [
      "acc",
      "application/vnd.americandynamics.acc"
    ],
    [
      "ace",
      "application/x-ace-compressed"
    ],
    [
      "acu",
      "application/vnd.acucobol"
    ],
    [
      "acutc",
      "application/vnd.acucorp"
    ],
    [
      "adp",
      "audio/adpcm"
    ],
    [
      "aep",
      "application/vnd.audiograph"
    ],
    [
      "afm",
      "application/x-font-type1"
    ],
    [
      "afp",
      "application/vnd.ibm.modcap"
    ],
    [
      "ahead",
      "application/vnd.ahead.space"
    ],
    [
      "ai",
      "application/pdf"
    ],
    [
      "aif",
      "audio/x-aiff"
    ],
    [
      "aifc",
      "audio/x-aiff"
    ],
    [
      "aiff",
      "audio/x-aiff"
    ],
    [
      "air",
      "application/vnd.adobe.air-application-installer-package+zip"
    ],
    [
      "ait",
      "application/vnd.dvb.ait"
    ],
    [
      "ami",
      "application/vnd.amiga.ami"
    ],
    [
      "amr",
      "audio/amr"
    ],
    [
      "apk",
      "application/vnd.android.package-archive"
    ],
    [
      "apng",
      "image/apng"
    ],
    [
      "appcache",
      "text/cache-manifest"
    ],
    [
      "application",
      "application/x-ms-application"
    ],
    [
      "apr",
      "application/vnd.lotus-approach"
    ],
    [
      "arc",
      "application/x-freearc"
    ],
    [
      "arj",
      "application/x-arj"
    ],
    [
      "asc",
      "application/pgp-signature"
    ],
    [
      "asf",
      "video/x-ms-asf"
    ],
    [
      "asm",
      "text/x-asm"
    ],
    [
      "aso",
      "application/vnd.accpac.simply.aso"
    ],
    [
      "asx",
      "video/x-ms-asf"
    ],
    [
      "atc",
      "application/vnd.acucorp"
    ],
    [
      "atom",
      "application/atom+xml"
    ],
    [
      "atomcat",
      "application/atomcat+xml"
    ],
    [
      "atomdeleted",
      "application/atomdeleted+xml"
    ],
    [
      "atomsvc",
      "application/atomsvc+xml"
    ],
    [
      "atx",
      "application/vnd.antix.game-component"
    ],
    [
      "au",
      "audio/x-au"
    ],
    [
      "avi",
      "video/x-msvideo"
    ],
    [
      "avif",
      "image/avif"
    ],
    [
      "aw",
      "application/applixware"
    ],
    [
      "azf",
      "application/vnd.airzip.filesecure.azf"
    ],
    [
      "azs",
      "application/vnd.airzip.filesecure.azs"
    ],
    [
      "azv",
      "image/vnd.airzip.accelerator.azv"
    ],
    [
      "azw",
      "application/vnd.amazon.ebook"
    ],
    [
      "b16",
      "image/vnd.pco.b16"
    ],
    [
      "bat",
      "application/x-msdownload"
    ],
    [
      "bcpio",
      "application/x-bcpio"
    ],
    [
      "bdf",
      "application/x-font-bdf"
    ],
    [
      "bdm",
      "application/vnd.syncml.dm+wbxml"
    ],
    [
      "bdoc",
      "application/x-bdoc"
    ],
    [
      "bed",
      "application/vnd.realvnc.bed"
    ],
    [
      "bh2",
      "application/vnd.fujitsu.oasysprs"
    ],
    [
      "bin",
      "application/octet-stream"
    ],
    [
      "blb",
      "application/x-blorb"
    ],
    [
      "blorb",
      "application/x-blorb"
    ],
    [
      "bmi",
      "application/vnd.bmi"
    ],
    [
      "bmml",
      "application/vnd.balsamiq.bmml+xml"
    ],
    [
      "bmp",
      "image/bmp"
    ],
    [
      "book",
      "application/vnd.framemaker"
    ],
    [
      "box",
      "application/vnd.previewsystems.box"
    ],
    [
      "boz",
      "application/x-bzip2"
    ],
    [
      "bpk",
      "application/octet-stream"
    ],
    [
      "bpmn",
      "application/octet-stream"
    ],
    [
      "bsp",
      "model/vnd.valve.source.compiled-map"
    ],
    [
      "btif",
      "image/prs.btif"
    ],
    [
      "buffer",
      "application/octet-stream"
    ],
    [
      "bz",
      "application/x-bzip"
    ],
    [
      "bz2",
      "application/x-bzip2"
    ],
    [
      "c",
      "text/x-c"
    ],
    [
      "c4d",
      "application/vnd.clonk.c4group"
    ],
    [
      "c4f",
      "application/vnd.clonk.c4group"
    ],
    [
      "c4g",
      "application/vnd.clonk.c4group"
    ],
    [
      "c4p",
      "application/vnd.clonk.c4group"
    ],
    [
      "c4u",
      "application/vnd.clonk.c4group"
    ],
    [
      "c11amc",
      "application/vnd.cluetrust.cartomobile-config"
    ],
    [
      "c11amz",
      "application/vnd.cluetrust.cartomobile-config-pkg"
    ],
    [
      "cab",
      "application/vnd.ms-cab-compressed"
    ],
    [
      "caf",
      "audio/x-caf"
    ],
    [
      "cap",
      "application/vnd.tcpdump.pcap"
    ],
    [
      "car",
      "application/vnd.curl.car"
    ],
    [
      "cat",
      "application/vnd.ms-pki.seccat"
    ],
    [
      "cb7",
      "application/x-cbr"
    ],
    [
      "cba",
      "application/x-cbr"
    ],
    [
      "cbr",
      "application/x-cbr"
    ],
    [
      "cbt",
      "application/x-cbr"
    ],
    [
      "cbz",
      "application/x-cbr"
    ],
    [
      "cc",
      "text/x-c"
    ],
    [
      "cco",
      "application/x-cocoa"
    ],
    [
      "cct",
      "application/x-director"
    ],
    [
      "ccxml",
      "application/ccxml+xml"
    ],
    [
      "cdbcmsg",
      "application/vnd.contact.cmsg"
    ],
    [
      "cda",
      "application/x-cdf"
    ],
    [
      "cdf",
      "application/x-netcdf"
    ],
    [
      "cdfx",
      "application/cdfx+xml"
    ],
    [
      "cdkey",
      "application/vnd.mediastation.cdkey"
    ],
    [
      "cdmia",
      "application/cdmi-capability"
    ],
    [
      "cdmic",
      "application/cdmi-container"
    ],
    [
      "cdmid",
      "application/cdmi-domain"
    ],
    [
      "cdmio",
      "application/cdmi-object"
    ],
    [
      "cdmiq",
      "application/cdmi-queue"
    ],
    [
      "cdr",
      "application/cdr"
    ],
    [
      "cdx",
      "chemical/x-cdx"
    ],
    [
      "cdxml",
      "application/vnd.chemdraw+xml"
    ],
    [
      "cdy",
      "application/vnd.cinderella"
    ],
    [
      "cer",
      "application/pkix-cert"
    ],
    [
      "cfs",
      "application/x-cfs-compressed"
    ],
    [
      "cgm",
      "image/cgm"
    ],
    [
      "chat",
      "application/x-chat"
    ],
    [
      "chm",
      "application/vnd.ms-htmlhelp"
    ],
    [
      "chrt",
      "application/vnd.kde.kchart"
    ],
    [
      "cif",
      "chemical/x-cif"
    ],
    [
      "cii",
      "application/vnd.anser-web-certificate-issue-initiation"
    ],
    [
      "cil",
      "application/vnd.ms-artgalry"
    ],
    [
      "cjs",
      "application/node"
    ],
    [
      "cla",
      "application/vnd.claymore"
    ],
    [
      "class",
      "application/octet-stream"
    ],
    [
      "clkk",
      "application/vnd.crick.clicker.keyboard"
    ],
    [
      "clkp",
      "application/vnd.crick.clicker.palette"
    ],
    [
      "clkt",
      "application/vnd.crick.clicker.template"
    ],
    [
      "clkw",
      "application/vnd.crick.clicker.wordbank"
    ],
    [
      "clkx",
      "application/vnd.crick.clicker"
    ],
    [
      "clp",
      "application/x-msclip"
    ],
    [
      "cmc",
      "application/vnd.cosmocaller"
    ],
    [
      "cmdf",
      "chemical/x-cmdf"
    ],
    [
      "cml",
      "chemical/x-cml"
    ],
    [
      "cmp",
      "application/vnd.yellowriver-custom-menu"
    ],
    [
      "cmx",
      "image/x-cmx"
    ],
    [
      "cod",
      "application/vnd.rim.cod"
    ],
    [
      "coffee",
      "text/coffeescript"
    ],
    [
      "com",
      "application/x-msdownload"
    ],
    [
      "conf",
      "text/plain"
    ],
    [
      "cpio",
      "application/x-cpio"
    ],
    [
      "cpp",
      "text/x-c"
    ],
    [
      "cpt",
      "application/mac-compactpro"
    ],
    [
      "crd",
      "application/x-mscardfile"
    ],
    [
      "crl",
      "application/pkix-crl"
    ],
    [
      "crt",
      "application/x-x509-ca-cert"
    ],
    [
      "crx",
      "application/x-chrome-extension"
    ],
    [
      "cryptonote",
      "application/vnd.rig.cryptonote"
    ],
    [
      "csh",
      "application/x-csh"
    ],
    [
      "csl",
      "application/vnd.citationstyles.style+xml"
    ],
    [
      "csml",
      "chemical/x-csml"
    ],
    [
      "csp",
      "application/vnd.commonspace"
    ],
    [
      "csr",
      "application/octet-stream"
    ],
    [
      "css",
      "text/css"
    ],
    [
      "cst",
      "application/x-director"
    ],
    [
      "csv",
      "text/csv"
    ],
    [
      "cu",
      "application/cu-seeme"
    ],
    [
      "curl",
      "text/vnd.curl"
    ],
    [
      "cww",
      "application/prs.cww"
    ],
    [
      "cxt",
      "application/x-director"
    ],
    [
      "cxx",
      "text/x-c"
    ],
    [
      "dae",
      "model/vnd.collada+xml"
    ],
    [
      "daf",
      "application/vnd.mobius.daf"
    ],
    [
      "dart",
      "application/vnd.dart"
    ],
    [
      "dataless",
      "application/vnd.fdsn.seed"
    ],
    [
      "davmount",
      "application/davmount+xml"
    ],
    [
      "dbf",
      "application/vnd.dbf"
    ],
    [
      "dbk",
      "application/docbook+xml"
    ],
    [
      "dcr",
      "application/x-director"
    ],
    [
      "dcurl",
      "text/vnd.curl.dcurl"
    ],
    [
      "dd2",
      "application/vnd.oma.dd2+xml"
    ],
    [
      "ddd",
      "application/vnd.fujixerox.ddd"
    ],
    [
      "ddf",
      "application/vnd.syncml.dmddf+xml"
    ],
    [
      "dds",
      "image/vnd.ms-dds"
    ],
    [
      "deb",
      "application/x-debian-package"
    ],
    [
      "def",
      "text/plain"
    ],
    [
      "deploy",
      "application/octet-stream"
    ],
    [
      "der",
      "application/x-x509-ca-cert"
    ],
    [
      "dfac",
      "application/vnd.dreamfactory"
    ],
    [
      "dgc",
      "application/x-dgc-compressed"
    ],
    [
      "dic",
      "text/x-c"
    ],
    [
      "dir",
      "application/x-director"
    ],
    [
      "dis",
      "application/vnd.mobius.dis"
    ],
    [
      "disposition-notification",
      "message/disposition-notification"
    ],
    [
      "dist",
      "application/octet-stream"
    ],
    [
      "distz",
      "application/octet-stream"
    ],
    [
      "djv",
      "image/vnd.djvu"
    ],
    [
      "djvu",
      "image/vnd.djvu"
    ],
    [
      "dll",
      "application/octet-stream"
    ],
    [
      "dmg",
      "application/x-apple-diskimage"
    ],
    [
      "dmn",
      "application/octet-stream"
    ],
    [
      "dmp",
      "application/vnd.tcpdump.pcap"
    ],
    [
      "dms",
      "application/octet-stream"
    ],
    [
      "dna",
      "application/vnd.dna"
    ],
    [
      "doc",
      "application/msword"
    ],
    [
      "docm",
      "application/vnd.ms-word.template.macroEnabled.12"
    ],
    [
      "docx",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ],
    [
      "dot",
      "application/msword"
    ],
    [
      "dotm",
      "application/vnd.ms-word.template.macroEnabled.12"
    ],
    [
      "dotx",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.template"
    ],
    [
      "dp",
      "application/vnd.osgi.dp"
    ],
    [
      "dpg",
      "application/vnd.dpgraph"
    ],
    [
      "dra",
      "audio/vnd.dra"
    ],
    [
      "drle",
      "image/dicom-rle"
    ],
    [
      "dsc",
      "text/prs.lines.tag"
    ],
    [
      "dssc",
      "application/dssc+der"
    ],
    [
      "dtb",
      "application/x-dtbook+xml"
    ],
    [
      "dtd",
      "application/xml-dtd"
    ],
    [
      "dts",
      "audio/vnd.dts"
    ],
    [
      "dtshd",
      "audio/vnd.dts.hd"
    ],
    [
      "dump",
      "application/octet-stream"
    ],
    [
      "dvb",
      "video/vnd.dvb.file"
    ],
    [
      "dvi",
      "application/x-dvi"
    ],
    [
      "dwd",
      "application/atsc-dwd+xml"
    ],
    [
      "dwf",
      "model/vnd.dwf"
    ],
    [
      "dwg",
      "image/vnd.dwg"
    ],
    [
      "dxf",
      "image/vnd.dxf"
    ],
    [
      "dxp",
      "application/vnd.spotfire.dxp"
    ],
    [
      "dxr",
      "application/x-director"
    ],
    [
      "ear",
      "application/java-archive"
    ],
    [
      "ecelp4800",
      "audio/vnd.nuera.ecelp4800"
    ],
    [
      "ecelp7470",
      "audio/vnd.nuera.ecelp7470"
    ],
    [
      "ecelp9600",
      "audio/vnd.nuera.ecelp9600"
    ],
    [
      "ecma",
      "application/ecmascript"
    ],
    [
      "edm",
      "application/vnd.novadigm.edm"
    ],
    [
      "edx",
      "application/vnd.novadigm.edx"
    ],
    [
      "efif",
      "application/vnd.picsel"
    ],
    [
      "ei6",
      "application/vnd.pg.osasli"
    ],
    [
      "elc",
      "application/octet-stream"
    ],
    [
      "emf",
      "image/emf"
    ],
    [
      "eml",
      "message/rfc822"
    ],
    [
      "emma",
      "application/emma+xml"
    ],
    [
      "emotionml",
      "application/emotionml+xml"
    ],
    [
      "emz",
      "application/x-msmetafile"
    ],
    [
      "eol",
      "audio/vnd.digital-winds"
    ],
    [
      "eot",
      "application/vnd.ms-fontobject"
    ],
    [
      "eps",
      "application/postscript"
    ],
    [
      "epub",
      "application/epub+zip"
    ],
    [
      "es",
      "application/ecmascript"
    ],
    [
      "es3",
      "application/vnd.eszigno3+xml"
    ],
    [
      "esa",
      "application/vnd.osgi.subsystem"
    ],
    [
      "esf",
      "application/vnd.epson.esf"
    ],
    [
      "et3",
      "application/vnd.eszigno3+xml"
    ],
    [
      "etx",
      "text/x-setext"
    ],
    [
      "eva",
      "application/x-eva"
    ],
    [
      "evy",
      "application/x-envoy"
    ],
    [
      "exe",
      "application/octet-stream"
    ],
    [
      "exi",
      "application/exi"
    ],
    [
      "exp",
      "application/express"
    ],
    [
      "exr",
      "image/aces"
    ],
    [
      "ext",
      "application/vnd.novadigm.ext"
    ],
    [
      "ez",
      "application/andrew-inset"
    ],
    [
      "ez2",
      "application/vnd.ezpix-album"
    ],
    [
      "ez3",
      "application/vnd.ezpix-package"
    ],
    [
      "f",
      "text/x-fortran"
    ],
    [
      "f4v",
      "video/mp4"
    ],
    [
      "f77",
      "text/x-fortran"
    ],
    [
      "f90",
      "text/x-fortran"
    ],
    [
      "fbs",
      "image/vnd.fastbidsheet"
    ],
    [
      "fcdt",
      "application/vnd.adobe.formscentral.fcdt"
    ],
    [
      "fcs",
      "application/vnd.isac.fcs"
    ],
    [
      "fdf",
      "application/vnd.fdf"
    ],
    [
      "fdt",
      "application/fdt+xml"
    ],
    [
      "fe_launch",
      "application/vnd.denovo.fcselayout-link"
    ],
    [
      "fg5",
      "application/vnd.fujitsu.oasysgp"
    ],
    [
      "fgd",
      "application/x-director"
    ],
    [
      "fh",
      "image/x-freehand"
    ],
    [
      "fh4",
      "image/x-freehand"
    ],
    [
      "fh5",
      "image/x-freehand"
    ],
    [
      "fh7",
      "image/x-freehand"
    ],
    [
      "fhc",
      "image/x-freehand"
    ],
    [
      "fig",
      "application/x-xfig"
    ],
    [
      "fits",
      "image/fits"
    ],
    [
      "flac",
      "audio/x-flac"
    ],
    [
      "fli",
      "video/x-fli"
    ],
    [
      "flo",
      "application/vnd.micrografx.flo"
    ],
    [
      "flv",
      "video/x-flv"
    ],
    [
      "flw",
      "application/vnd.kde.kivio"
    ],
    [
      "flx",
      "text/vnd.fmi.flexstor"
    ],
    [
      "fly",
      "text/vnd.fly"
    ],
    [
      "fm",
      "application/vnd.framemaker"
    ],
    [
      "fnc",
      "application/vnd.frogans.fnc"
    ],
    [
      "fo",
      "application/vnd.software602.filler.form+xml"
    ],
    [
      "for",
      "text/x-fortran"
    ],
    [
      "fpx",
      "image/vnd.fpx"
    ],
    [
      "frame",
      "application/vnd.framemaker"
    ],
    [
      "fsc",
      "application/vnd.fsc.weblaunch"
    ],
    [
      "fst",
      "image/vnd.fst"
    ],
    [
      "ftc",
      "application/vnd.fluxtime.clip"
    ],
    [
      "fti",
      "application/vnd.anser-web-funds-transfer-initiation"
    ],
    [
      "fvt",
      "video/vnd.fvt"
    ],
    [
      "fxp",
      "application/vnd.adobe.fxp"
    ],
    [
      "fxpl",
      "application/vnd.adobe.fxp"
    ],
    [
      "fzs",
      "application/vnd.fuzzysheet"
    ],
    [
      "g2w",
      "application/vnd.geoplan"
    ],
    [
      "g3",
      "image/g3fax"
    ],
    [
      "g3w",
      "application/vnd.geospace"
    ],
    [
      "gac",
      "application/vnd.groove-account"
    ],
    [
      "gam",
      "application/x-tads"
    ],
    [
      "gbr",
      "application/rpki-ghostbusters"
    ],
    [
      "gca",
      "application/x-gca-compressed"
    ],
    [
      "gdl",
      "model/vnd.gdl"
    ],
    [
      "gdoc",
      "application/vnd.google-apps.document"
    ],
    [
      "geo",
      "application/vnd.dynageo"
    ],
    [
      "geojson",
      "application/geo+json"
    ],
    [
      "gex",
      "application/vnd.geometry-explorer"
    ],
    [
      "ggb",
      "application/vnd.geogebra.file"
    ],
    [
      "ggt",
      "application/vnd.geogebra.tool"
    ],
    [
      "ghf",
      "application/vnd.groove-help"
    ],
    [
      "gif",
      "image/gif"
    ],
    [
      "gim",
      "application/vnd.groove-identity-message"
    ],
    [
      "glb",
      "model/gltf-binary"
    ],
    [
      "gltf",
      "model/gltf+json"
    ],
    [
      "gml",
      "application/gml+xml"
    ],
    [
      "gmx",
      "application/vnd.gmx"
    ],
    [
      "gnumeric",
      "application/x-gnumeric"
    ],
    [
      "gpg",
      "application/gpg-keys"
    ],
    [
      "gph",
      "application/vnd.flographit"
    ],
    [
      "gpx",
      "application/gpx+xml"
    ],
    [
      "gqf",
      "application/vnd.grafeq"
    ],
    [
      "gqs",
      "application/vnd.grafeq"
    ],
    [
      "gram",
      "application/srgs"
    ],
    [
      "gramps",
      "application/x-gramps-xml"
    ],
    [
      "gre",
      "application/vnd.geometry-explorer"
    ],
    [
      "grv",
      "application/vnd.groove-injector"
    ],
    [
      "grxml",
      "application/srgs+xml"
    ],
    [
      "gsf",
      "application/x-font-ghostscript"
    ],
    [
      "gsheet",
      "application/vnd.google-apps.spreadsheet"
    ],
    [
      "gslides",
      "application/vnd.google-apps.presentation"
    ],
    [
      "gtar",
      "application/x-gtar"
    ],
    [
      "gtm",
      "application/vnd.groove-tool-message"
    ],
    [
      "gtw",
      "model/vnd.gtw"
    ],
    [
      "gv",
      "text/vnd.graphviz"
    ],
    [
      "gxf",
      "application/gxf"
    ],
    [
      "gxt",
      "application/vnd.geonext"
    ],
    [
      "gz",
      "application/gzip"
    ],
    [
      "gzip",
      "application/gzip"
    ],
    [
      "h",
      "text/x-c"
    ],
    [
      "h261",
      "video/h261"
    ],
    [
      "h263",
      "video/h263"
    ],
    [
      "h264",
      "video/h264"
    ],
    [
      "hal",
      "application/vnd.hal+xml"
    ],
    [
      "hbci",
      "application/vnd.hbci"
    ],
    [
      "hbs",
      "text/x-handlebars-template"
    ],
    [
      "hdd",
      "application/x-virtualbox-hdd"
    ],
    [
      "hdf",
      "application/x-hdf"
    ],
    [
      "heic",
      "image/heic"
    ],
    [
      "heics",
      "image/heic-sequence"
    ],
    [
      "heif",
      "image/heif"
    ],
    [
      "heifs",
      "image/heif-sequence"
    ],
    [
      "hej2",
      "image/hej2k"
    ],
    [
      "held",
      "application/atsc-held+xml"
    ],
    [
      "hh",
      "text/x-c"
    ],
    [
      "hjson",
      "application/hjson"
    ],
    [
      "hlp",
      "application/winhlp"
    ],
    [
      "hpgl",
      "application/vnd.hp-hpgl"
    ],
    [
      "hpid",
      "application/vnd.hp-hpid"
    ],
    [
      "hps",
      "application/vnd.hp-hps"
    ],
    [
      "hqx",
      "application/mac-binhex40"
    ],
    [
      "hsj2",
      "image/hsj2"
    ],
    [
      "htc",
      "text/x-component"
    ],
    [
      "htke",
      "application/vnd.kenameaapp"
    ],
    [
      "htm",
      "text/html"
    ],
    [
      "html",
      "text/html"
    ],
    [
      "hvd",
      "application/vnd.yamaha.hv-dic"
    ],
    [
      "hvp",
      "application/vnd.yamaha.hv-voice"
    ],
    [
      "hvs",
      "application/vnd.yamaha.hv-script"
    ],
    [
      "i2g",
      "application/vnd.intergeo"
    ],
    [
      "icc",
      "application/vnd.iccprofile"
    ],
    [
      "ice",
      "x-conference/x-cooltalk"
    ],
    [
      "icm",
      "application/vnd.iccprofile"
    ],
    [
      "ico",
      "image/x-icon"
    ],
    [
      "ics",
      "text/calendar"
    ],
    [
      "ief",
      "image/ief"
    ],
    [
      "ifb",
      "text/calendar"
    ],
    [
      "ifm",
      "application/vnd.shana.informed.formdata"
    ],
    [
      "iges",
      "model/iges"
    ],
    [
      "igl",
      "application/vnd.igloader"
    ],
    [
      "igm",
      "application/vnd.insors.igm"
    ],
    [
      "igs",
      "model/iges"
    ],
    [
      "igx",
      "application/vnd.micrografx.igx"
    ],
    [
      "iif",
      "application/vnd.shana.informed.interchange"
    ],
    [
      "img",
      "application/octet-stream"
    ],
    [
      "imp",
      "application/vnd.accpac.simply.imp"
    ],
    [
      "ims",
      "application/vnd.ms-ims"
    ],
    [
      "in",
      "text/plain"
    ],
    [
      "ini",
      "text/plain"
    ],
    [
      "ink",
      "application/inkml+xml"
    ],
    [
      "inkml",
      "application/inkml+xml"
    ],
    [
      "install",
      "application/x-install-instructions"
    ],
    [
      "iota",
      "application/vnd.astraea-software.iota"
    ],
    [
      "ipfix",
      "application/ipfix"
    ],
    [
      "ipk",
      "application/vnd.shana.informed.package"
    ],
    [
      "irm",
      "application/vnd.ibm.rights-management"
    ],
    [
      "irp",
      "application/vnd.irepository.package+xml"
    ],
    [
      "iso",
      "application/x-iso9660-image"
    ],
    [
      "itp",
      "application/vnd.shana.informed.formtemplate"
    ],
    [
      "its",
      "application/its+xml"
    ],
    [
      "ivp",
      "application/vnd.immervision-ivp"
    ],
    [
      "ivu",
      "application/vnd.immervision-ivu"
    ],
    [
      "jad",
      "text/vnd.sun.j2me.app-descriptor"
    ],
    [
      "jade",
      "text/jade"
    ],
    [
      "jam",
      "application/vnd.jam"
    ],
    [
      "jar",
      "application/java-archive"
    ],
    [
      "jardiff",
      "application/x-java-archive-diff"
    ],
    [
      "java",
      "text/x-java-source"
    ],
    [
      "jhc",
      "image/jphc"
    ],
    [
      "jisp",
      "application/vnd.jisp"
    ],
    [
      "jls",
      "image/jls"
    ],
    [
      "jlt",
      "application/vnd.hp-jlyt"
    ],
    [
      "jng",
      "image/x-jng"
    ],
    [
      "jnlp",
      "application/x-java-jnlp-file"
    ],
    [
      "joda",
      "application/vnd.joost.joda-archive"
    ],
    [
      "jp2",
      "image/jp2"
    ],
    [
      "jpe",
      "image/jpeg"
    ],
    [
      "jpeg",
      "image/jpeg"
    ],
    [
      "jpf",
      "image/jpx"
    ],
    [
      "jpg",
      "image/jpeg"
    ],
    [
      "jpg2",
      "image/jp2"
    ],
    [
      "jpgm",
      "video/jpm"
    ],
    [
      "jpgv",
      "video/jpeg"
    ],
    [
      "jph",
      "image/jph"
    ],
    [
      "jpm",
      "video/jpm"
    ],
    [
      "jpx",
      "image/jpx"
    ],
    [
      "js",
      "application/javascript"
    ],
    [
      "json",
      "application/json"
    ],
    [
      "json5",
      "application/json5"
    ],
    [
      "jsonld",
      "application/ld+json"
    ],
    [
      "jsonl",
      "application/jsonl"
    ],
    [
      "jsonml",
      "application/jsonml+json"
    ],
    [
      "jsx",
      "text/jsx"
    ],
    [
      "jxr",
      "image/jxr"
    ],
    [
      "jxra",
      "image/jxra"
    ],
    [
      "jxrs",
      "image/jxrs"
    ],
    [
      "jxs",
      "image/jxs"
    ],
    [
      "jxsc",
      "image/jxsc"
    ],
    [
      "jxsi",
      "image/jxsi"
    ],
    [
      "jxss",
      "image/jxss"
    ],
    [
      "kar",
      "audio/midi"
    ],
    [
      "karbon",
      "application/vnd.kde.karbon"
    ],
    [
      "kdb",
      "application/octet-stream"
    ],
    [
      "kdbx",
      "application/x-keepass2"
    ],
    [
      "key",
      "application/x-iwork-keynote-sffkey"
    ],
    [
      "kfo",
      "application/vnd.kde.kformula"
    ],
    [
      "kia",
      "application/vnd.kidspiration"
    ],
    [
      "kml",
      "application/vnd.google-earth.kml+xml"
    ],
    [
      "kmz",
      "application/vnd.google-earth.kmz"
    ],
    [
      "kne",
      "application/vnd.kinar"
    ],
    [
      "knp",
      "application/vnd.kinar"
    ],
    [
      "kon",
      "application/vnd.kde.kontour"
    ],
    [
      "kpr",
      "application/vnd.kde.kpresenter"
    ],
    [
      "kpt",
      "application/vnd.kde.kpresenter"
    ],
    [
      "kpxx",
      "application/vnd.ds-keypoint"
    ],
    [
      "ksp",
      "application/vnd.kde.kspread"
    ],
    [
      "ktr",
      "application/vnd.kahootz"
    ],
    [
      "ktx",
      "image/ktx"
    ],
    [
      "ktx2",
      "image/ktx2"
    ],
    [
      "ktz",
      "application/vnd.kahootz"
    ],
    [
      "kwd",
      "application/vnd.kde.kword"
    ],
    [
      "kwt",
      "application/vnd.kde.kword"
    ],
    [
      "lasxml",
      "application/vnd.las.las+xml"
    ],
    [
      "latex",
      "application/x-latex"
    ],
    [
      "lbd",
      "application/vnd.llamagraphics.life-balance.desktop"
    ],
    [
      "lbe",
      "application/vnd.llamagraphics.life-balance.exchange+xml"
    ],
    [
      "les",
      "application/vnd.hhe.lesson-player"
    ],
    [
      "less",
      "text/less"
    ],
    [
      "lgr",
      "application/lgr+xml"
    ],
    [
      "lha",
      "application/octet-stream"
    ],
    [
      "link66",
      "application/vnd.route66.link66+xml"
    ],
    [
      "list",
      "text/plain"
    ],
    [
      "list3820",
      "application/vnd.ibm.modcap"
    ],
    [
      "listafp",
      "application/vnd.ibm.modcap"
    ],
    [
      "litcoffee",
      "text/coffeescript"
    ],
    [
      "lnk",
      "application/x-ms-shortcut"
    ],
    [
      "log",
      "text/plain"
    ],
    [
      "lostxml",
      "application/lost+xml"
    ],
    [
      "lrf",
      "application/octet-stream"
    ],
    [
      "lrm",
      "application/vnd.ms-lrm"
    ],
    [
      "ltf",
      "application/vnd.frogans.ltf"
    ],
    [
      "lua",
      "text/x-lua"
    ],
    [
      "luac",
      "application/x-lua-bytecode"
    ],
    [
      "lvp",
      "audio/vnd.lucent.voice"
    ],
    [
      "lwp",
      "application/vnd.lotus-wordpro"
    ],
    [
      "lzh",
      "application/octet-stream"
    ],
    [
      "m1v",
      "video/mpeg"
    ],
    [
      "m2a",
      "audio/mpeg"
    ],
    [
      "m2v",
      "video/mpeg"
    ],
    [
      "m3a",
      "audio/mpeg"
    ],
    [
      "m3u",
      "text/plain"
    ],
    [
      "m3u8",
      "application/vnd.apple.mpegurl"
    ],
    [
      "m4a",
      "audio/x-m4a"
    ],
    [
      "m4p",
      "application/mp4"
    ],
    [
      "m4s",
      "video/iso.segment"
    ],
    [
      "m4u",
      "application/vnd.mpegurl"
    ],
    [
      "m4v",
      "video/x-m4v"
    ],
    [
      "m13",
      "application/x-msmediaview"
    ],
    [
      "m14",
      "application/x-msmediaview"
    ],
    [
      "m21",
      "application/mp21"
    ],
    [
      "ma",
      "application/mathematica"
    ],
    [
      "mads",
      "application/mads+xml"
    ],
    [
      "maei",
      "application/mmt-aei+xml"
    ],
    [
      "mag",
      "application/vnd.ecowin.chart"
    ],
    [
      "maker",
      "application/vnd.framemaker"
    ],
    [
      "man",
      "text/troff"
    ],
    [
      "manifest",
      "text/cache-manifest"
    ],
    [
      "map",
      "application/json"
    ],
    [
      "mar",
      "application/octet-stream"
    ],
    [
      "markdown",
      "text/markdown"
    ],
    [
      "mathml",
      "application/mathml+xml"
    ],
    [
      "mb",
      "application/mathematica"
    ],
    [
      "mbk",
      "application/vnd.mobius.mbk"
    ],
    [
      "mbox",
      "application/mbox"
    ],
    [
      "mc1",
      "application/vnd.medcalcdata"
    ],
    [
      "mcd",
      "application/vnd.mcd"
    ],
    [
      "mcurl",
      "text/vnd.curl.mcurl"
    ],
    [
      "md",
      "text/markdown"
    ],
    [
      "mdb",
      "application/x-msaccess"
    ],
    [
      "mdi",
      "image/vnd.ms-modi"
    ],
    [
      "mdx",
      "text/mdx"
    ],
    [
      "me",
      "text/troff"
    ],
    [
      "mesh",
      "model/mesh"
    ],
    [
      "meta4",
      "application/metalink4+xml"
    ],
    [
      "metalink",
      "application/metalink+xml"
    ],
    [
      "mets",
      "application/mets+xml"
    ],
    [
      "mfm",
      "application/vnd.mfmp"
    ],
    [
      "mft",
      "application/rpki-manifest"
    ],
    [
      "mgp",
      "application/vnd.osgeo.mapguide.package"
    ],
    [
      "mgz",
      "application/vnd.proteus.magazine"
    ],
    [
      "mid",
      "audio/midi"
    ],
    [
      "midi",
      "audio/midi"
    ],
    [
      "mie",
      "application/x-mie"
    ],
    [
      "mif",
      "application/vnd.mif"
    ],
    [
      "mime",
      "message/rfc822"
    ],
    [
      "mj2",
      "video/mj2"
    ],
    [
      "mjp2",
      "video/mj2"
    ],
    [
      "mjs",
      "application/javascript"
    ],
    [
      "mk3d",
      "video/x-matroska"
    ],
    [
      "mka",
      "audio/x-matroska"
    ],
    [
      "mkd",
      "text/x-markdown"
    ],
    [
      "mks",
      "video/x-matroska"
    ],
    [
      "mkv",
      "video/x-matroska"
    ],
    [
      "mlp",
      "application/vnd.dolby.mlp"
    ],
    [
      "mmd",
      "application/vnd.chipnuts.karaoke-mmd"
    ],
    [
      "mmf",
      "application/vnd.smaf"
    ],
    [
      "mml",
      "text/mathml"
    ],
    [
      "mmr",
      "image/vnd.fujixerox.edmics-mmr"
    ],
    [
      "mng",
      "video/x-mng"
    ],
    [
      "mny",
      "application/x-msmoney"
    ],
    [
      "mobi",
      "application/x-mobipocket-ebook"
    ],
    [
      "mods",
      "application/mods+xml"
    ],
    [
      "mov",
      "video/quicktime"
    ],
    [
      "movie",
      "video/x-sgi-movie"
    ],
    [
      "mp2",
      "audio/mpeg"
    ],
    [
      "mp2a",
      "audio/mpeg"
    ],
    [
      "mp3",
      "audio/mpeg"
    ],
    [
      "mp4",
      "video/mp4"
    ],
    [
      "mp4a",
      "audio/mp4"
    ],
    [
      "mp4s",
      "application/mp4"
    ],
    [
      "mp4v",
      "video/mp4"
    ],
    [
      "mp21",
      "application/mp21"
    ],
    [
      "mpc",
      "application/vnd.mophun.certificate"
    ],
    [
      "mpd",
      "application/dash+xml"
    ],
    [
      "mpe",
      "video/mpeg"
    ],
    [
      "mpeg",
      "video/mpeg"
    ],
    [
      "mpg",
      "video/mpeg"
    ],
    [
      "mpg4",
      "video/mp4"
    ],
    [
      "mpga",
      "audio/mpeg"
    ],
    [
      "mpkg",
      "application/vnd.apple.installer+xml"
    ],
    [
      "mpm",
      "application/vnd.blueice.multipass"
    ],
    [
      "mpn",
      "application/vnd.mophun.application"
    ],
    [
      "mpp",
      "application/vnd.ms-project"
    ],
    [
      "mpt",
      "application/vnd.ms-project"
    ],
    [
      "mpy",
      "application/vnd.ibm.minipay"
    ],
    [
      "mqy",
      "application/vnd.mobius.mqy"
    ],
    [
      "mrc",
      "application/marc"
    ],
    [
      "mrcx",
      "application/marcxml+xml"
    ],
    [
      "ms",
      "text/troff"
    ],
    [
      "mscml",
      "application/mediaservercontrol+xml"
    ],
    [
      "mseed",
      "application/vnd.fdsn.mseed"
    ],
    [
      "mseq",
      "application/vnd.mseq"
    ],
    [
      "msf",
      "application/vnd.epson.msf"
    ],
    [
      "msg",
      "application/vnd.ms-outlook"
    ],
    [
      "msh",
      "model/mesh"
    ],
    [
      "msi",
      "application/x-msdownload"
    ],
    [
      "msl",
      "application/vnd.mobius.msl"
    ],
    [
      "msm",
      "application/octet-stream"
    ],
    [
      "msp",
      "application/octet-stream"
    ],
    [
      "msty",
      "application/vnd.muvee.style"
    ],
    [
      "mtl",
      "model/mtl"
    ],
    [
      "mts",
      "model/vnd.mts"
    ],
    [
      "mus",
      "application/vnd.musician"
    ],
    [
      "musd",
      "application/mmt-usd+xml"
    ],
    [
      "musicxml",
      "application/vnd.recordare.musicxml+xml"
    ],
    [
      "mvb",
      "application/x-msmediaview"
    ],
    [
      "mvt",
      "application/vnd.mapbox-vector-tile"
    ],
    [
      "mwf",
      "application/vnd.mfer"
    ],
    [
      "mxf",
      "application/mxf"
    ],
    [
      "mxl",
      "application/vnd.recordare.musicxml"
    ],
    [
      "mxmf",
      "audio/mobile-xmf"
    ],
    [
      "mxml",
      "application/xv+xml"
    ],
    [
      "mxs",
      "application/vnd.triscape.mxs"
    ],
    [
      "mxu",
      "video/vnd.mpegurl"
    ],
    [
      "n-gage",
      "application/vnd.nokia.n-gage.symbian.install"
    ],
    [
      "n3",
      "text/n3"
    ],
    [
      "nb",
      "application/mathematica"
    ],
    [
      "nbp",
      "application/vnd.wolfram.player"
    ],
    [
      "nc",
      "application/x-netcdf"
    ],
    [
      "ncx",
      "application/x-dtbncx+xml"
    ],
    [
      "nfo",
      "text/x-nfo"
    ],
    [
      "ngdat",
      "application/vnd.nokia.n-gage.data"
    ],
    [
      "nitf",
      "application/vnd.nitf"
    ],
    [
      "nlu",
      "application/vnd.neurolanguage.nlu"
    ],
    [
      "nml",
      "application/vnd.enliven"
    ],
    [
      "nnd",
      "application/vnd.noblenet-directory"
    ],
    [
      "nns",
      "application/vnd.noblenet-sealer"
    ],
    [
      "nnw",
      "application/vnd.noblenet-web"
    ],
    [
      "npx",
      "image/vnd.net-fpx"
    ],
    [
      "nq",
      "application/n-quads"
    ],
    [
      "nsc",
      "application/x-conference"
    ],
    [
      "nsf",
      "application/vnd.lotus-notes"
    ],
    [
      "nt",
      "application/n-triples"
    ],
    [
      "ntf",
      "application/vnd.nitf"
    ],
    [
      "numbers",
      "application/x-iwork-numbers-sffnumbers"
    ],
    [
      "nzb",
      "application/x-nzb"
    ],
    [
      "oa2",
      "application/vnd.fujitsu.oasys2"
    ],
    [
      "oa3",
      "application/vnd.fujitsu.oasys3"
    ],
    [
      "oas",
      "application/vnd.fujitsu.oasys"
    ],
    [
      "obd",
      "application/x-msbinder"
    ],
    [
      "obgx",
      "application/vnd.openblox.game+xml"
    ],
    [
      "obj",
      "model/obj"
    ],
    [
      "oda",
      "application/oda"
    ],
    [
      "odb",
      "application/vnd.oasis.opendocument.database"
    ],
    [
      "odc",
      "application/vnd.oasis.opendocument.chart"
    ],
    [
      "odf",
      "application/vnd.oasis.opendocument.formula"
    ],
    [
      "odft",
      "application/vnd.oasis.opendocument.formula-template"
    ],
    [
      "odg",
      "application/vnd.oasis.opendocument.graphics"
    ],
    [
      "odi",
      "application/vnd.oasis.opendocument.image"
    ],
    [
      "odm",
      "application/vnd.oasis.opendocument.text-master"
    ],
    [
      "odp",
      "application/vnd.oasis.opendocument.presentation"
    ],
    [
      "ods",
      "application/vnd.oasis.opendocument.spreadsheet"
    ],
    [
      "odt",
      "application/vnd.oasis.opendocument.text"
    ],
    [
      "oga",
      "audio/ogg"
    ],
    [
      "ogex",
      "model/vnd.opengex"
    ],
    [
      "ogg",
      "audio/ogg"
    ],
    [
      "ogv",
      "video/ogg"
    ],
    [
      "ogx",
      "application/ogg"
    ],
    [
      "omdoc",
      "application/omdoc+xml"
    ],
    [
      "onepkg",
      "application/onenote"
    ],
    [
      "onetmp",
      "application/onenote"
    ],
    [
      "onetoc",
      "application/onenote"
    ],
    [
      "onetoc2",
      "application/onenote"
    ],
    [
      "opf",
      "application/oebps-package+xml"
    ],
    [
      "opml",
      "text/x-opml"
    ],
    [
      "oprc",
      "application/vnd.palm"
    ],
    [
      "opus",
      "audio/ogg"
    ],
    [
      "org",
      "text/x-org"
    ],
    [
      "osf",
      "application/vnd.yamaha.openscoreformat"
    ],
    [
      "osfpvg",
      "application/vnd.yamaha.openscoreformat.osfpvg+xml"
    ],
    [
      "osm",
      "application/vnd.openstreetmap.data+xml"
    ],
    [
      "otc",
      "application/vnd.oasis.opendocument.chart-template"
    ],
    [
      "otf",
      "font/otf"
    ],
    [
      "otg",
      "application/vnd.oasis.opendocument.graphics-template"
    ],
    [
      "oth",
      "application/vnd.oasis.opendocument.text-web"
    ],
    [
      "oti",
      "application/vnd.oasis.opendocument.image-template"
    ],
    [
      "otp",
      "application/vnd.oasis.opendocument.presentation-template"
    ],
    [
      "ots",
      "application/vnd.oasis.opendocument.spreadsheet-template"
    ],
    [
      "ott",
      "application/vnd.oasis.opendocument.text-template"
    ],
    [
      "ova",
      "application/x-virtualbox-ova"
    ],
    [
      "ovf",
      "application/x-virtualbox-ovf"
    ],
    [
      "owl",
      "application/rdf+xml"
    ],
    [
      "oxps",
      "application/oxps"
    ],
    [
      "oxt",
      "application/vnd.openofficeorg.extension"
    ],
    [
      "p",
      "text/x-pascal"
    ],
    [
      "p7a",
      "application/x-pkcs7-signature"
    ],
    [
      "p7b",
      "application/x-pkcs7-certificates"
    ],
    [
      "p7c",
      "application/pkcs7-mime"
    ],
    [
      "p7m",
      "application/pkcs7-mime"
    ],
    [
      "p7r",
      "application/x-pkcs7-certreqresp"
    ],
    [
      "p7s",
      "application/pkcs7-signature"
    ],
    [
      "p8",
      "application/pkcs8"
    ],
    [
      "p10",
      "application/x-pkcs10"
    ],
    [
      "p12",
      "application/x-pkcs12"
    ],
    [
      "pac",
      "application/x-ns-proxy-autoconfig"
    ],
    [
      "pages",
      "application/x-iwork-pages-sffpages"
    ],
    [
      "pas",
      "text/x-pascal"
    ],
    [
      "paw",
      "application/vnd.pawaafile"
    ],
    [
      "pbd",
      "application/vnd.powerbuilder6"
    ],
    [
      "pbm",
      "image/x-portable-bitmap"
    ],
    [
      "pcap",
      "application/vnd.tcpdump.pcap"
    ],
    [
      "pcf",
      "application/x-font-pcf"
    ],
    [
      "pcl",
      "application/vnd.hp-pcl"
    ],
    [
      "pclxl",
      "application/vnd.hp-pclxl"
    ],
    [
      "pct",
      "image/x-pict"
    ],
    [
      "pcurl",
      "application/vnd.curl.pcurl"
    ],
    [
      "pcx",
      "image/x-pcx"
    ],
    [
      "pdb",
      "application/x-pilot"
    ],
    [
      "pde",
      "text/x-processing"
    ],
    [
      "pdf",
      "application/pdf"
    ],
    [
      "pem",
      "application/x-x509-user-cert"
    ],
    [
      "pfa",
      "application/x-font-type1"
    ],
    [
      "pfb",
      "application/x-font-type1"
    ],
    [
      "pfm",
      "application/x-font-type1"
    ],
    [
      "pfr",
      "application/font-tdpfr"
    ],
    [
      "pfx",
      "application/x-pkcs12"
    ],
    [
      "pgm",
      "image/x-portable-graymap"
    ],
    [
      "pgn",
      "application/x-chess-pgn"
    ],
    [
      "pgp",
      "application/pgp"
    ],
    [
      "php",
      "application/x-httpd-php"
    ],
    [
      "php3",
      "application/x-httpd-php"
    ],
    [
      "php4",
      "application/x-httpd-php"
    ],
    [
      "phps",
      "application/x-httpd-php-source"
    ],
    [
      "phtml",
      "application/x-httpd-php"
    ],
    [
      "pic",
      "image/x-pict"
    ],
    [
      "pkg",
      "application/octet-stream"
    ],
    [
      "pki",
      "application/pkixcmp"
    ],
    [
      "pkipath",
      "application/pkix-pkipath"
    ],
    [
      "pkpass",
      "application/vnd.apple.pkpass"
    ],
    [
      "pl",
      "application/x-perl"
    ],
    [
      "plb",
      "application/vnd.3gpp.pic-bw-large"
    ],
    [
      "plc",
      "application/vnd.mobius.plc"
    ],
    [
      "plf",
      "application/vnd.pocketlearn"
    ],
    [
      "pls",
      "application/pls+xml"
    ],
    [
      "pm",
      "application/x-perl"
    ],
    [
      "pml",
      "application/vnd.ctc-posml"
    ],
    [
      "png",
      "image/png"
    ],
    [
      "pnm",
      "image/x-portable-anymap"
    ],
    [
      "portpkg",
      "application/vnd.macports.portpkg"
    ],
    [
      "pot",
      "application/vnd.ms-powerpoint"
    ],
    [
      "potm",
      "application/vnd.ms-powerpoint.presentation.macroEnabled.12"
    ],
    [
      "potx",
      "application/vnd.openxmlformats-officedocument.presentationml.template"
    ],
    [
      "ppa",
      "application/vnd.ms-powerpoint"
    ],
    [
      "ppam",
      "application/vnd.ms-powerpoint.addin.macroEnabled.12"
    ],
    [
      "ppd",
      "application/vnd.cups-ppd"
    ],
    [
      "ppm",
      "image/x-portable-pixmap"
    ],
    [
      "pps",
      "application/vnd.ms-powerpoint"
    ],
    [
      "ppsm",
      "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"
    ],
    [
      "ppsx",
      "application/vnd.openxmlformats-officedocument.presentationml.slideshow"
    ],
    [
      "ppt",
      "application/powerpoint"
    ],
    [
      "pptm",
      "application/vnd.ms-powerpoint.presentation.macroEnabled.12"
    ],
    [
      "pptx",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    ],
    [
      "pqa",
      "application/vnd.palm"
    ],
    [
      "prc",
      "application/x-pilot"
    ],
    [
      "pre",
      "application/vnd.lotus-freelance"
    ],
    [
      "prf",
      "application/pics-rules"
    ],
    [
      "provx",
      "application/provenance+xml"
    ],
    [
      "ps",
      "application/postscript"
    ],
    [
      "psb",
      "application/vnd.3gpp.pic-bw-small"
    ],
    [
      "psd",
      "application/x-photoshop"
    ],
    [
      "psf",
      "application/x-font-linux-psf"
    ],
    [
      "pskcxml",
      "application/pskc+xml"
    ],
    [
      "pti",
      "image/prs.pti"
    ],
    [
      "ptid",
      "application/vnd.pvi.ptid1"
    ],
    [
      "pub",
      "application/x-mspublisher"
    ],
    [
      "pvb",
      "application/vnd.3gpp.pic-bw-var"
    ],
    [
      "pwn",
      "application/vnd.3m.post-it-notes"
    ],
    [
      "pya",
      "audio/vnd.ms-playready.media.pya"
    ],
    [
      "pyv",
      "video/vnd.ms-playready.media.pyv"
    ],
    [
      "qam",
      "application/vnd.epson.quickanime"
    ],
    [
      "qbo",
      "application/vnd.intu.qbo"
    ],
    [
      "qfx",
      "application/vnd.intu.qfx"
    ],
    [
      "qps",
      "application/vnd.publishare-delta-tree"
    ],
    [
      "qt",
      "video/quicktime"
    ],
    [
      "qwd",
      "application/vnd.quark.quarkxpress"
    ],
    [
      "qwt",
      "application/vnd.quark.quarkxpress"
    ],
    [
      "qxb",
      "application/vnd.quark.quarkxpress"
    ],
    [
      "qxd",
      "application/vnd.quark.quarkxpress"
    ],
    [
      "qxl",
      "application/vnd.quark.quarkxpress"
    ],
    [
      "qxt",
      "application/vnd.quark.quarkxpress"
    ],
    [
      "ra",
      "audio/x-realaudio"
    ],
    [
      "ram",
      "audio/x-pn-realaudio"
    ],
    [
      "raml",
      "application/raml+yaml"
    ],
    [
      "rapd",
      "application/route-apd+xml"
    ],
    [
      "rar",
      "application/x-rar"
    ],
    [
      "ras",
      "image/x-cmu-raster"
    ],
    [
      "rcprofile",
      "application/vnd.ipunplugged.rcprofile"
    ],
    [
      "rdf",
      "application/rdf+xml"
    ],
    [
      "rdz",
      "application/vnd.data-vision.rdz"
    ],
    [
      "relo",
      "application/p2p-overlay+xml"
    ],
    [
      "rep",
      "application/vnd.businessobjects"
    ],
    [
      "res",
      "application/x-dtbresource+xml"
    ],
    [
      "rgb",
      "image/x-rgb"
    ],
    [
      "rif",
      "application/reginfo+xml"
    ],
    [
      "rip",
      "audio/vnd.rip"
    ],
    [
      "ris",
      "application/x-research-info-systems"
    ],
    [
      "rl",
      "application/resource-lists+xml"
    ],
    [
      "rlc",
      "image/vnd.fujixerox.edmics-rlc"
    ],
    [
      "rld",
      "application/resource-lists-diff+xml"
    ],
    [
      "rm",
      "audio/x-pn-realaudio"
    ],
    [
      "rmi",
      "audio/midi"
    ],
    [
      "rmp",
      "audio/x-pn-realaudio-plugin"
    ],
    [
      "rms",
      "application/vnd.jcp.javame.midlet-rms"
    ],
    [
      "rmvb",
      "application/vnd.rn-realmedia-vbr"
    ],
    [
      "rnc",
      "application/relax-ng-compact-syntax"
    ],
    [
      "rng",
      "application/xml"
    ],
    [
      "roa",
      "application/rpki-roa"
    ],
    [
      "roff",
      "text/troff"
    ],
    [
      "rp9",
      "application/vnd.cloanto.rp9"
    ],
    [
      "rpm",
      "audio/x-pn-realaudio-plugin"
    ],
    [
      "rpss",
      "application/vnd.nokia.radio-presets"
    ],
    [
      "rpst",
      "application/vnd.nokia.radio-preset"
    ],
    [
      "rq",
      "application/sparql-query"
    ],
    [
      "rs",
      "application/rls-services+xml"
    ],
    [
      "rsa",
      "application/x-pkcs7"
    ],
    [
      "rsat",
      "application/atsc-rsat+xml"
    ],
    [
      "rsd",
      "application/rsd+xml"
    ],
    [
      "rsheet",
      "application/urc-ressheet+xml"
    ],
    [
      "rss",
      "application/rss+xml"
    ],
    [
      "rtf",
      "text/rtf"
    ],
    [
      "rtx",
      "text/richtext"
    ],
    [
      "run",
      "application/x-makeself"
    ],
    [
      "rusd",
      "application/route-usd+xml"
    ],
    [
      "rv",
      "video/vnd.rn-realvideo"
    ],
    [
      "s",
      "text/x-asm"
    ],
    [
      "s3m",
      "audio/s3m"
    ],
    [
      "saf",
      "application/vnd.yamaha.smaf-audio"
    ],
    [
      "sass",
      "text/x-sass"
    ],
    [
      "sbml",
      "application/sbml+xml"
    ],
    [
      "sc",
      "application/vnd.ibm.secure-container"
    ],
    [
      "scd",
      "application/x-msschedule"
    ],
    [
      "scm",
      "application/vnd.lotus-screencam"
    ],
    [
      "scq",
      "application/scvp-cv-request"
    ],
    [
      "scs",
      "application/scvp-cv-response"
    ],
    [
      "scss",
      "text/x-scss"
    ],
    [
      "scurl",
      "text/vnd.curl.scurl"
    ],
    [
      "sda",
      "application/vnd.stardivision.draw"
    ],
    [
      "sdc",
      "application/vnd.stardivision.calc"
    ],
    [
      "sdd",
      "application/vnd.stardivision.impress"
    ],
    [
      "sdkd",
      "application/vnd.solent.sdkm+xml"
    ],
    [
      "sdkm",
      "application/vnd.solent.sdkm+xml"
    ],
    [
      "sdp",
      "application/sdp"
    ],
    [
      "sdw",
      "application/vnd.stardivision.writer"
    ],
    [
      "sea",
      "application/octet-stream"
    ],
    [
      "see",
      "application/vnd.seemail"
    ],
    [
      "seed",
      "application/vnd.fdsn.seed"
    ],
    [
      "sema",
      "application/vnd.sema"
    ],
    [
      "semd",
      "application/vnd.semd"
    ],
    [
      "semf",
      "application/vnd.semf"
    ],
    [
      "senmlx",
      "application/senml+xml"
    ],
    [
      "sensmlx",
      "application/sensml+xml"
    ],
    [
      "ser",
      "application/java-serialized-object"
    ],
    [
      "setpay",
      "application/set-payment-initiation"
    ],
    [
      "setreg",
      "application/set-registration-initiation"
    ],
    [
      "sfd-hdstx",
      "application/vnd.hydrostatix.sof-data"
    ],
    [
      "sfs",
      "application/vnd.spotfire.sfs"
    ],
    [
      "sfv",
      "text/x-sfv"
    ],
    [
      "sgi",
      "image/sgi"
    ],
    [
      "sgl",
      "application/vnd.stardivision.writer-global"
    ],
    [
      "sgm",
      "text/sgml"
    ],
    [
      "sgml",
      "text/sgml"
    ],
    [
      "sh",
      "application/x-sh"
    ],
    [
      "shar",
      "application/x-shar"
    ],
    [
      "shex",
      "text/shex"
    ],
    [
      "shf",
      "application/shf+xml"
    ],
    [
      "shtml",
      "text/html"
    ],
    [
      "sid",
      "image/x-mrsid-image"
    ],
    [
      "sieve",
      "application/sieve"
    ],
    [
      "sig",
      "application/pgp-signature"
    ],
    [
      "sil",
      "audio/silk"
    ],
    [
      "silo",
      "model/mesh"
    ],
    [
      "sis",
      "application/vnd.symbian.install"
    ],
    [
      "sisx",
      "application/vnd.symbian.install"
    ],
    [
      "sit",
      "application/x-stuffit"
    ],
    [
      "sitx",
      "application/x-stuffitx"
    ],
    [
      "siv",
      "application/sieve"
    ],
    [
      "skd",
      "application/vnd.koan"
    ],
    [
      "skm",
      "application/vnd.koan"
    ],
    [
      "skp",
      "application/vnd.koan"
    ],
    [
      "skt",
      "application/vnd.koan"
    ],
    [
      "sldm",
      "application/vnd.ms-powerpoint.slide.macroenabled.12"
    ],
    [
      "sldx",
      "application/vnd.openxmlformats-officedocument.presentationml.slide"
    ],
    [
      "slim",
      "text/slim"
    ],
    [
      "slm",
      "text/slim"
    ],
    [
      "sls",
      "application/route-s-tsid+xml"
    ],
    [
      "slt",
      "application/vnd.epson.salt"
    ],
    [
      "sm",
      "application/vnd.stepmania.stepchart"
    ],
    [
      "smf",
      "application/vnd.stardivision.math"
    ],
    [
      "smi",
      "application/smil"
    ],
    [
      "smil",
      "application/smil"
    ],
    [
      "smv",
      "video/x-smv"
    ],
    [
      "smzip",
      "application/vnd.stepmania.package"
    ],
    [
      "snd",
      "audio/basic"
    ],
    [
      "snf",
      "application/x-font-snf"
    ],
    [
      "so",
      "application/octet-stream"
    ],
    [
      "spc",
      "application/x-pkcs7-certificates"
    ],
    [
      "spdx",
      "text/spdx"
    ],
    [
      "spf",
      "application/vnd.yamaha.smaf-phrase"
    ],
    [
      "spl",
      "application/x-futuresplash"
    ],
    [
      "spot",
      "text/vnd.in3d.spot"
    ],
    [
      "spp",
      "application/scvp-vp-response"
    ],
    [
      "spq",
      "application/scvp-vp-request"
    ],
    [
      "spx",
      "audio/ogg"
    ],
    [
      "sql",
      "application/x-sql"
    ],
    [
      "src",
      "application/x-wais-source"
    ],
    [
      "srt",
      "application/x-subrip"
    ],
    [
      "sru",
      "application/sru+xml"
    ],
    [
      "srx",
      "application/sparql-results+xml"
    ],
    [
      "ssdl",
      "application/ssdl+xml"
    ],
    [
      "sse",
      "application/vnd.kodak-descriptor"
    ],
    [
      "ssf",
      "application/vnd.epson.ssf"
    ],
    [
      "ssml",
      "application/ssml+xml"
    ],
    [
      "sst",
      "application/octet-stream"
    ],
    [
      "st",
      "application/vnd.sailingtracker.track"
    ],
    [
      "stc",
      "application/vnd.sun.xml.calc.template"
    ],
    [
      "std",
      "application/vnd.sun.xml.draw.template"
    ],
    [
      "stf",
      "application/vnd.wt.stf"
    ],
    [
      "sti",
      "application/vnd.sun.xml.impress.template"
    ],
    [
      "stk",
      "application/hyperstudio"
    ],
    [
      "stl",
      "model/stl"
    ],
    [
      "stpx",
      "model/step+xml"
    ],
    [
      "stpxz",
      "model/step-xml+zip"
    ],
    [
      "stpz",
      "model/step+zip"
    ],
    [
      "str",
      "application/vnd.pg.format"
    ],
    [
      "stw",
      "application/vnd.sun.xml.writer.template"
    ],
    [
      "styl",
      "text/stylus"
    ],
    [
      "stylus",
      "text/stylus"
    ],
    [
      "sub",
      "text/vnd.dvb.subtitle"
    ],
    [
      "sus",
      "application/vnd.sus-calendar"
    ],
    [
      "susp",
      "application/vnd.sus-calendar"
    ],
    [
      "sv4cpio",
      "application/x-sv4cpio"
    ],
    [
      "sv4crc",
      "application/x-sv4crc"
    ],
    [
      "svc",
      "application/vnd.dvb.service"
    ],
    [
      "svd",
      "application/vnd.svd"
    ],
    [
      "svg",
      "image/svg+xml"
    ],
    [
      "svgz",
      "image/svg+xml"
    ],
    [
      "swa",
      "application/x-director"
    ],
    [
      "swf",
      "application/x-shockwave-flash"
    ],
    [
      "swi",
      "application/vnd.aristanetworks.swi"
    ],
    [
      "swidtag",
      "application/swid+xml"
    ],
    [
      "sxc",
      "application/vnd.sun.xml.calc"
    ],
    [
      "sxd",
      "application/vnd.sun.xml.draw"
    ],
    [
      "sxg",
      "application/vnd.sun.xml.writer.global"
    ],
    [
      "sxi",
      "application/vnd.sun.xml.impress"
    ],
    [
      "sxm",
      "application/vnd.sun.xml.math"
    ],
    [
      "sxw",
      "application/vnd.sun.xml.writer"
    ],
    [
      "t",
      "text/troff"
    ],
    [
      "t3",
      "application/x-t3vm-image"
    ],
    [
      "t38",
      "image/t38"
    ],
    [
      "taglet",
      "application/vnd.mynfc"
    ],
    [
      "tao",
      "application/vnd.tao.intent-module-archive"
    ],
    [
      "tap",
      "image/vnd.tencent.tap"
    ],
    [
      "tar",
      "application/x-tar"
    ],
    [
      "tcap",
      "application/vnd.3gpp2.tcap"
    ],
    [
      "tcl",
      "application/x-tcl"
    ],
    [
      "td",
      "application/urc-targetdesc+xml"
    ],
    [
      "teacher",
      "application/vnd.smart.teacher"
    ],
    [
      "tei",
      "application/tei+xml"
    ],
    [
      "teicorpus",
      "application/tei+xml"
    ],
    [
      "tex",
      "application/x-tex"
    ],
    [
      "texi",
      "application/x-texinfo"
    ],
    [
      "texinfo",
      "application/x-texinfo"
    ],
    [
      "text",
      "text/plain"
    ],
    [
      "tfi",
      "application/thraud+xml"
    ],
    [
      "tfm",
      "application/x-tex-tfm"
    ],
    [
      "tfx",
      "image/tiff-fx"
    ],
    [
      "tga",
      "image/x-tga"
    ],
    [
      "tgz",
      "application/x-tar"
    ],
    [
      "thmx",
      "application/vnd.ms-officetheme"
    ],
    [
      "tif",
      "image/tiff"
    ],
    [
      "tiff",
      "image/tiff"
    ],
    [
      "tk",
      "application/x-tcl"
    ],
    [
      "tmo",
      "application/vnd.tmobile-livetv"
    ],
    [
      "toml",
      "application/toml"
    ],
    [
      "torrent",
      "application/x-bittorrent"
    ],
    [
      "tpl",
      "application/vnd.groove-tool-template"
    ],
    [
      "tpt",
      "application/vnd.trid.tpt"
    ],
    [
      "tr",
      "text/troff"
    ],
    [
      "tra",
      "application/vnd.trueapp"
    ],
    [
      "trig",
      "application/trig"
    ],
    [
      "trm",
      "application/x-msterminal"
    ],
    [
      "ts",
      "video/mp2t"
    ],
    [
      "tsd",
      "application/timestamped-data"
    ],
    [
      "tsv",
      "text/tab-separated-values"
    ],
    [
      "ttc",
      "font/collection"
    ],
    [
      "ttf",
      "font/ttf"
    ],
    [
      "ttl",
      "text/turtle"
    ],
    [
      "ttml",
      "application/ttml+xml"
    ],
    [
      "twd",
      "application/vnd.simtech-mindmapper"
    ],
    [
      "twds",
      "application/vnd.simtech-mindmapper"
    ],
    [
      "txd",
      "application/vnd.genomatix.tuxedo"
    ],
    [
      "txf",
      "application/vnd.mobius.txf"
    ],
    [
      "txt",
      "text/plain"
    ],
    [
      "u8dsn",
      "message/global-delivery-status"
    ],
    [
      "u8hdr",
      "message/global-headers"
    ],
    [
      "u8mdn",
      "message/global-disposition-notification"
    ],
    [
      "u8msg",
      "message/global"
    ],
    [
      "u32",
      "application/x-authorware-bin"
    ],
    [
      "ubj",
      "application/ubjson"
    ],
    [
      "udeb",
      "application/x-debian-package"
    ],
    [
      "ufd",
      "application/vnd.ufdl"
    ],
    [
      "ufdl",
      "application/vnd.ufdl"
    ],
    [
      "ulx",
      "application/x-glulx"
    ],
    [
      "umj",
      "application/vnd.umajin"
    ],
    [
      "unityweb",
      "application/vnd.unity"
    ],
    [
      "uoml",
      "application/vnd.uoml+xml"
    ],
    [
      "uri",
      "text/uri-list"
    ],
    [
      "uris",
      "text/uri-list"
    ],
    [
      "urls",
      "text/uri-list"
    ],
    [
      "usdz",
      "model/vnd.usdz+zip"
    ],
    [
      "ustar",
      "application/x-ustar"
    ],
    [
      "utz",
      "application/vnd.uiq.theme"
    ],
    [
      "uu",
      "text/x-uuencode"
    ],
    [
      "uva",
      "audio/vnd.dece.audio"
    ],
    [
      "uvd",
      "application/vnd.dece.data"
    ],
    [
      "uvf",
      "application/vnd.dece.data"
    ],
    [
      "uvg",
      "image/vnd.dece.graphic"
    ],
    [
      "uvh",
      "video/vnd.dece.hd"
    ],
    [
      "uvi",
      "image/vnd.dece.graphic"
    ],
    [
      "uvm",
      "video/vnd.dece.mobile"
    ],
    [
      "uvp",
      "video/vnd.dece.pd"
    ],
    [
      "uvs",
      "video/vnd.dece.sd"
    ],
    [
      "uvt",
      "application/vnd.dece.ttml+xml"
    ],
    [
      "uvu",
      "video/vnd.uvvu.mp4"
    ],
    [
      "uvv",
      "video/vnd.dece.video"
    ],
    [
      "uvva",
      "audio/vnd.dece.audio"
    ],
    [
      "uvvd",
      "application/vnd.dece.data"
    ],
    [
      "uvvf",
      "application/vnd.dece.data"
    ],
    [
      "uvvg",
      "image/vnd.dece.graphic"
    ],
    [
      "uvvh",
      "video/vnd.dece.hd"
    ],
    [
      "uvvi",
      "image/vnd.dece.graphic"
    ],
    [
      "uvvm",
      "video/vnd.dece.mobile"
    ],
    [
      "uvvp",
      "video/vnd.dece.pd"
    ],
    [
      "uvvs",
      "video/vnd.dece.sd"
    ],
    [
      "uvvt",
      "application/vnd.dece.ttml+xml"
    ],
    [
      "uvvu",
      "video/vnd.uvvu.mp4"
    ],
    [
      "uvvv",
      "video/vnd.dece.video"
    ],
    [
      "uvvx",
      "application/vnd.dece.unspecified"
    ],
    [
      "uvvz",
      "application/vnd.dece.zip"
    ],
    [
      "uvx",
      "application/vnd.dece.unspecified"
    ],
    [
      "uvz",
      "application/vnd.dece.zip"
    ],
    [
      "vbox",
      "application/x-virtualbox-vbox"
    ],
    [
      "vbox-extpack",
      "application/x-virtualbox-vbox-extpack"
    ],
    [
      "vcard",
      "text/vcard"
    ],
    [
      "vcd",
      "application/x-cdlink"
    ],
    [
      "vcf",
      "text/x-vcard"
    ],
    [
      "vcg",
      "application/vnd.groove-vcard"
    ],
    [
      "vcs",
      "text/x-vcalendar"
    ],
    [
      "vcx",
      "application/vnd.vcx"
    ],
    [
      "vdi",
      "application/x-virtualbox-vdi"
    ],
    [
      "vds",
      "model/vnd.sap.vds"
    ],
    [
      "vhd",
      "application/x-virtualbox-vhd"
    ],
    [
      "vis",
      "application/vnd.visionary"
    ],
    [
      "viv",
      "video/vnd.vivo"
    ],
    [
      "vlc",
      "application/videolan"
    ],
    [
      "vmdk",
      "application/x-virtualbox-vmdk"
    ],
    [
      "vob",
      "video/x-ms-vob"
    ],
    [
      "vor",
      "application/vnd.stardivision.writer"
    ],
    [
      "vox",
      "application/x-authorware-bin"
    ],
    [
      "vrml",
      "model/vrml"
    ],
    [
      "vsd",
      "application/vnd.visio"
    ],
    [
      "vsf",
      "application/vnd.vsf"
    ],
    [
      "vss",
      "application/vnd.visio"
    ],
    [
      "vst",
      "application/vnd.visio"
    ],
    [
      "vsw",
      "application/vnd.visio"
    ],
    [
      "vtf",
      "image/vnd.valve.source.texture"
    ],
    [
      "vtt",
      "text/vtt"
    ],
    [
      "vtu",
      "model/vnd.vtu"
    ],
    [
      "vxml",
      "application/voicexml+xml"
    ],
    [
      "w3d",
      "application/x-director"
    ],
    [
      "wad",
      "application/x-doom"
    ],
    [
      "wadl",
      "application/vnd.sun.wadl+xml"
    ],
    [
      "war",
      "application/java-archive"
    ],
    [
      "wasm",
      "application/wasm"
    ],
    [
      "wav",
      "audio/x-wav"
    ],
    [
      "wax",
      "audio/x-ms-wax"
    ],
    [
      "wbmp",
      "image/vnd.wap.wbmp"
    ],
    [
      "wbs",
      "application/vnd.criticaltools.wbs+xml"
    ],
    [
      "wbxml",
      "application/wbxml"
    ],
    [
      "wcm",
      "application/vnd.ms-works"
    ],
    [
      "wdb",
      "application/vnd.ms-works"
    ],
    [
      "wdp",
      "image/vnd.ms-photo"
    ],
    [
      "weba",
      "audio/webm"
    ],
    [
      "webapp",
      "application/x-web-app-manifest+json"
    ],
    [
      "webm",
      "video/webm"
    ],
    [
      "webmanifest",
      "application/manifest+json"
    ],
    [
      "webp",
      "image/webp"
    ],
    [
      "wg",
      "application/vnd.pmi.widget"
    ],
    [
      "wgt",
      "application/widget"
    ],
    [
      "wks",
      "application/vnd.ms-works"
    ],
    [
      "wm",
      "video/x-ms-wm"
    ],
    [
      "wma",
      "audio/x-ms-wma"
    ],
    [
      "wmd",
      "application/x-ms-wmd"
    ],
    [
      "wmf",
      "image/wmf"
    ],
    [
      "wml",
      "text/vnd.wap.wml"
    ],
    [
      "wmlc",
      "application/wmlc"
    ],
    [
      "wmls",
      "text/vnd.wap.wmlscript"
    ],
    [
      "wmlsc",
      "application/vnd.wap.wmlscriptc"
    ],
    [
      "wmv",
      "video/x-ms-wmv"
    ],
    [
      "wmx",
      "video/x-ms-wmx"
    ],
    [
      "wmz",
      "application/x-msmetafile"
    ],
    [
      "woff",
      "font/woff"
    ],
    [
      "woff2",
      "font/woff2"
    ],
    [
      "word",
      "application/msword"
    ],
    [
      "wpd",
      "application/vnd.wordperfect"
    ],
    [
      "wpl",
      "application/vnd.ms-wpl"
    ],
    [
      "wps",
      "application/vnd.ms-works"
    ],
    [
      "wqd",
      "application/vnd.wqd"
    ],
    [
      "wri",
      "application/x-mswrite"
    ],
    [
      "wrl",
      "model/vrml"
    ],
    [
      "wsc",
      "message/vnd.wfa.wsc"
    ],
    [
      "wsdl",
      "application/wsdl+xml"
    ],
    [
      "wspolicy",
      "application/wspolicy+xml"
    ],
    [
      "wtb",
      "application/vnd.webturbo"
    ],
    [
      "wvx",
      "video/x-ms-wvx"
    ],
    [
      "x3d",
      "model/x3d+xml"
    ],
    [
      "x3db",
      "model/x3d+fastinfoset"
    ],
    [
      "x3dbz",
      "model/x3d+binary"
    ],
    [
      "x3dv",
      "model/x3d-vrml"
    ],
    [
      "x3dvz",
      "model/x3d+vrml"
    ],
    [
      "x3dz",
      "model/x3d+xml"
    ],
    [
      "x32",
      "application/x-authorware-bin"
    ],
    [
      "x_b",
      "model/vnd.parasolid.transmit.binary"
    ],
    [
      "x_t",
      "model/vnd.parasolid.transmit.text"
    ],
    [
      "xaml",
      "application/xaml+xml"
    ],
    [
      "xap",
      "application/x-silverlight-app"
    ],
    [
      "xar",
      "application/vnd.xara"
    ],
    [
      "xav",
      "application/xcap-att+xml"
    ],
    [
      "xbap",
      "application/x-ms-xbap"
    ],
    [
      "xbd",
      "application/vnd.fujixerox.docuworks.binder"
    ],
    [
      "xbm",
      "image/x-xbitmap"
    ],
    [
      "xca",
      "application/xcap-caps+xml"
    ],
    [
      "xcs",
      "application/calendar+xml"
    ],
    [
      "xdf",
      "application/xcap-diff+xml"
    ],
    [
      "xdm",
      "application/vnd.syncml.dm+xml"
    ],
    [
      "xdp",
      "application/vnd.adobe.xdp+xml"
    ],
    [
      "xdssc",
      "application/dssc+xml"
    ],
    [
      "xdw",
      "application/vnd.fujixerox.docuworks"
    ],
    [
      "xel",
      "application/xcap-el+xml"
    ],
    [
      "xenc",
      "application/xenc+xml"
    ],
    [
      "xer",
      "application/patch-ops-error+xml"
    ],
    [
      "xfdf",
      "application/vnd.adobe.xfdf"
    ],
    [
      "xfdl",
      "application/vnd.xfdl"
    ],
    [
      "xht",
      "application/xhtml+xml"
    ],
    [
      "xhtml",
      "application/xhtml+xml"
    ],
    [
      "xhvml",
      "application/xv+xml"
    ],
    [
      "xif",
      "image/vnd.xiff"
    ],
    [
      "xl",
      "application/excel"
    ],
    [
      "xla",
      "application/vnd.ms-excel"
    ],
    [
      "xlam",
      "application/vnd.ms-excel.addin.macroEnabled.12"
    ],
    [
      "xlc",
      "application/vnd.ms-excel"
    ],
    [
      "xlf",
      "application/xliff+xml"
    ],
    [
      "xlm",
      "application/vnd.ms-excel"
    ],
    [
      "xls",
      "application/vnd.ms-excel"
    ],
    [
      "xlsb",
      "application/vnd.ms-excel.sheet.binary.macroEnabled.12"
    ],
    [
      "xlsm",
      "application/vnd.ms-excel.sheet.macroEnabled.12"
    ],
    [
      "xlsx",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ],
    [
      "xlt",
      "application/vnd.ms-excel"
    ],
    [
      "xltm",
      "application/vnd.ms-excel.template.macroEnabled.12"
    ],
    [
      "xltx",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.template"
    ],
    [
      "xlw",
      "application/vnd.ms-excel"
    ],
    [
      "xm",
      "audio/xm"
    ],
    [
      "xml",
      "application/xml"
    ],
    [
      "xns",
      "application/xcap-ns+xml"
    ],
    [
      "xo",
      "application/vnd.olpc-sugar"
    ],
    [
      "xop",
      "application/xop+xml"
    ],
    [
      "xpi",
      "application/x-xpinstall"
    ],
    [
      "xpl",
      "application/xproc+xml"
    ],
    [
      "xpm",
      "image/x-xpixmap"
    ],
    [
      "xpr",
      "application/vnd.is-xpr"
    ],
    [
      "xps",
      "application/vnd.ms-xpsdocument"
    ],
    [
      "xpw",
      "application/vnd.intercon.formnet"
    ],
    [
      "xpx",
      "application/vnd.intercon.formnet"
    ],
    [
      "xsd",
      "application/xml"
    ],
    [
      "xsl",
      "application/xml"
    ],
    [
      "xslt",
      "application/xslt+xml"
    ],
    [
      "xsm",
      "application/vnd.syncml+xml"
    ],
    [
      "xspf",
      "application/xspf+xml"
    ],
    [
      "xul",
      "application/vnd.mozilla.xul+xml"
    ],
    [
      "xvm",
      "application/xv+xml"
    ],
    [
      "xvml",
      "application/xv+xml"
    ],
    [
      "xwd",
      "image/x-xwindowdump"
    ],
    [
      "xyz",
      "chemical/x-xyz"
    ],
    [
      "xz",
      "application/x-xz"
    ],
    [
      "yaml",
      "text/yaml"
    ],
    [
      "yang",
      "application/yang"
    ],
    [
      "yin",
      "application/yin+xml"
    ],
    [
      "yml",
      "text/yaml"
    ],
    [
      "ymp",
      "text/x-suse-ymp"
    ],
    [
      "z",
      "application/x-compress"
    ],
    [
      "z1",
      "application/x-zmachine"
    ],
    [
      "z2",
      "application/x-zmachine"
    ],
    [
      "z3",
      "application/x-zmachine"
    ],
    [
      "z4",
      "application/x-zmachine"
    ],
    [
      "z5",
      "application/x-zmachine"
    ],
    [
      "z6",
      "application/x-zmachine"
    ],
    [
      "z7",
      "application/x-zmachine"
    ],
    [
      "z8",
      "application/x-zmachine"
    ],
    [
      "zaz",
      "application/vnd.zzazz.deck+xml"
    ],
    [
      "zip",
      "application/zip"
    ],
    [
      "zir",
      "application/vnd.zul"
    ],
    [
      "zirz",
      "application/vnd.zul"
    ],
    [
      "zmm",
      "application/vnd.handheld-entertainment+xml"
    ],
    [
      "zsh",
      "text/x-scriptzsh"
    ]
  ]);
  function nn(e, t, n) {
    const i = Xd(e), { webkitRelativePath: r } = e, o = typeof t == "string" ? t : typeof r == "string" && r.length > 0 ? r : `./${e.name}`;
    return typeof i.path != "string" && va(i, "path", o), va(i, "relativePath", o), i;
  }
  function Xd(e) {
    const { name: t } = e;
    if (t && t.lastIndexOf(".") !== -1 && !e.type) {
      const i = t.split(".").pop().toLowerCase(), r = Ud.get(i);
      r && Object.defineProperty(e, "type", {
        value: r,
        writable: false,
        configurable: false,
        enumerable: true
      });
    }
    return e;
  }
  function va(e, t, n) {
    Object.defineProperty(e, t, {
      value: n,
      writable: false,
      configurable: false,
      enumerable: true
    });
  }
  const Kd = [
    ".DS_Store",
    "Thumbs.db"
  ];
  function Gd(e) {
    return Vt(this, void 0, void 0, function* () {
      return Si(e) && Yd(e.dataTransfer) ? ef(e.dataTransfer, e.type) : Qd(e) ? Jd(e) : Array.isArray(e) && e.every((t) => "getFile" in t && typeof t.getFile == "function") ? Zd(e) : [];
    });
  }
  function Yd(e) {
    return Si(e);
  }
  function Qd(e) {
    return Si(e) && Si(e.target);
  }
  function Si(e) {
    return typeof e == "object" && e !== null;
  }
  function Jd(e) {
    return Vr(e.target.files).map((t) => nn(t));
  }
  function Zd(e) {
    return Vt(this, void 0, void 0, function* () {
      return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => nn(n));
    });
  }
  function ef(e, t) {
    return Vt(this, void 0, void 0, function* () {
      if (e.items) {
        const n = Vr(e.items).filter((r) => r.kind === "file");
        if (t !== "drop") return n;
        const i = yield Promise.all(n.map(tf));
        return ba(Es(i));
      }
      return ba(Vr(e.files).map((n) => nn(n)));
    });
  }
  function ba(e) {
    return e.filter((t) => Kd.indexOf(t.name) === -1);
  }
  function Vr(e) {
    if (e === null) return [];
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const i = e[n];
      t.push(i);
    }
    return t;
  }
  function tf(e) {
    if (typeof e.webkitGetAsEntry != "function") return ya(e);
    const t = e.webkitGetAsEntry();
    return t && t.isDirectory ? Is(t) : ya(e, t);
  }
  function Es(e) {
    return e.reduce((t, n) => [
      ...t,
      ...Array.isArray(n) ? Es(n) : [
        n
      ]
    ], []);
  }
  function ya(e, t) {
    return Vt(this, void 0, void 0, function* () {
      var n;
      if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
        const o = yield e.getAsFileSystemHandle();
        if (o === null) throw new Error(`${e} is not a File`);
        if (o !== void 0) {
          const a = yield o.getFile();
          return a.handle = o, nn(a);
        }
      }
      const i = e.getAsFile();
      if (!i) throw new Error(`${e} is not a File`);
      return nn(i, (n = t == null ? void 0 : t.fullPath) !== null && n !== void 0 ? n : void 0);
    });
  }
  function nf(e) {
    return Vt(this, void 0, void 0, function* () {
      return e.isDirectory ? Is(e) : rf(e);
    });
  }
  function Is(e) {
    const t = e.createReader();
    return new Promise((n, i) => {
      const r = [];
      function o() {
        t.readEntries((a) => Vt(this, void 0, void 0, function* () {
          if (a.length) {
            const l = Promise.all(a.map(nf));
            r.push(l), o();
          } else try {
            const l = yield Promise.all(r);
            n(l);
          } catch (l) {
            i(l);
          }
        }), (a) => {
          i(a);
        });
      }
      o();
    });
  }
  function rf(e) {
    return Vt(this, void 0, void 0, function* () {
      return new Promise((t, n) => {
        e.file((i) => {
          const r = nn(i, e.fullPath);
          t(r);
        }, (i) => {
          n(i);
        });
      });
    });
  }
  var ri = {}, wa;
  function of() {
    return wa || (wa = 1, ri.__esModule = true, ri.default = function(e, t) {
      if (e && t) {
        var n = Array.isArray(t) ? t : t.split(",");
        if (n.length === 0) return true;
        var i = e.name || "", r = (e.type || "").toLowerCase(), o = r.replace(/\/.*$/, "");
        return n.some(function(a) {
          var l = a.trim().toLowerCase();
          return l.charAt(0) === "." ? i.toLowerCase().endsWith(l) : l.endsWith("/*") ? o === l.replace(/\/.*$/, "") : r === l;
        });
      }
      return true;
    }), ri;
  }
  var af = of();
  const sr = Ri(af);
  function ka(e) {
    return cf(e) || sf(e) || Ts(e) || lf();
  }
  function lf() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function sf(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
  }
  function cf(e) {
    if (Array.isArray(e)) return Wr(e);
  }
  function Ca(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t && (i = i.filter(function(r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), n.push.apply(n, i);
    }
    return n;
  }
  function Oa(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2 ? Ca(Object(n), true).forEach(function(i) {
        Ps(e, i, n[i]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ca(Object(n)).forEach(function(i) {
        Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
      });
    }
    return e;
  }
  function Ps(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[t] = n, e;
  }
  function Bn(e, t) {
    return df(e) || pf(e, t) || Ts(e, t) || uf();
  }
  function uf() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Ts(e, t) {
    if (e) {
      if (typeof e == "string") return Wr(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Wr(e, t);
    }
  }
  function Wr(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i;
  }
  function pf(e, t) {
    var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (n != null) {
      var i = [], r = true, o = false, a, l;
      try {
        for (n = n.call(e); !(r = (a = n.next()).done) && (i.push(a.value), !(t && i.length === t)); r = true) ;
      } catch (c) {
        o = true, l = c;
      } finally {
        try {
          !r && n.return != null && n.return();
        } finally {
          if (o) throw l;
        }
      }
      return i;
    }
  }
  function df(e) {
    if (Array.isArray(e)) return e;
  }
  var ff = typeof sr == "function" ? sr : sr.default, mf = "file-invalid-type", hf = "file-too-large", gf = "file-too-small", xf = "too-many-files", vf = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = t.split(","), i = n.length > 1 ? "one of ".concat(n.join(", ")) : n[0];
    return {
      code: mf,
      message: "File type must be ".concat(i)
    };
  }, Sa = function(t) {
    return {
      code: hf,
      message: "File is larger than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
    };
  }, _a = function(t) {
    return {
      code: gf,
      message: "File is smaller than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
    };
  }, bf = {
    code: xf,
    message: "Too many files"
  };
  function Ns(e, t) {
    var n = e.type === "application/x-moz-file" || ff(e, t);
    return [
      n,
      n ? null : vf(t)
    ];
  }
  function Ms(e, t, n) {
    if (zt(e.size)) if (zt(t) && zt(n)) {
      if (e.size > n) return [
        false,
        Sa(n)
      ];
      if (e.size < t) return [
        false,
        _a(t)
      ];
    } else {
      if (zt(t) && e.size < t) return [
        false,
        _a(t)
      ];
      if (zt(n) && e.size > n) return [
        false,
        Sa(n)
      ];
    }
    return [
      true,
      null
    ];
  }
  function zt(e) {
    return e != null;
  }
  function yf(e) {
    var t = e.files, n = e.accept, i = e.minSize, r = e.maxSize, o = e.multiple, a = e.maxFiles, l = e.validator;
    return !o && t.length > 1 || o && a >= 1 && t.length > a ? false : t.every(function(c) {
      var s = Ns(c, n), u = Bn(s, 1), p = u[0], f = Ms(c, i, r), d = Bn(f, 1), x = d[0], v = l ? l(c) : null;
      return p && x && !v;
    });
  }
  function _i(e) {
    return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : false;
  }
  function oi(e) {
    return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
      return t === "Files" || t === "application/x-moz-file";
    }) : !!e.target && !!e.target.files;
  }
  function ja(e) {
    e.preventDefault();
  }
  function wf(e) {
    return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
  }
  function kf(e) {
    return e.indexOf("Edge/") !== -1;
  }
  function Cf() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
    return wf(e) || kf(e);
  }
  function gt() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function(i) {
      for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) o[a - 1] = arguments[a];
      return t.some(function(l) {
        return !_i(i) && l && l.apply(void 0, [
          i
        ].concat(o)), _i(i);
      });
    };
  }
  function Of() {
    return "showOpenFilePicker" in window;
  }
  function Sf(e) {
    if (zt(e)) {
      var t = Object.entries(e).filter(function(n) {
        var i = Bn(n, 2), r = i[0], o = i[1], a = true;
        return Rs(r) || (console.warn('Skipped "'.concat(r, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), a = false), (!Array.isArray(o) || !o.every(As)) && (console.warn('Skipped "'.concat(r, '" because an invalid file extension was provided.')), a = false), a;
      }).reduce(function(n, i) {
        var r = Bn(i, 2), o = r[0], a = r[1];
        return Oa(Oa({}, n), {}, Ps({}, o, a));
      }, {});
      return [
        {
          description: "Files",
          accept: t
        }
      ];
    }
    return e;
  }
  function _f(e) {
    if (zt(e)) return Object.entries(e).reduce(function(t, n) {
      var i = Bn(n, 2), r = i[0], o = i[1];
      return [].concat(ka(t), [
        r
      ], ka(o));
    }, []).filter(function(t) {
      return Rs(t) || As(t);
    }).join(",");
  }
  function jf(e) {
    return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
  }
  function Ef(e) {
    return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
  }
  function Rs(e) {
    return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
  }
  function As(e) {
    return /^.*\.[\w]+$/.test(e);
  }
  var If = [
    "children"
  ], Pf = [
    "open"
  ], Tf = [
    "refKey",
    "role",
    "onKeyDown",
    "onFocus",
    "onBlur",
    "onClick",
    "onDragEnter",
    "onDragOver",
    "onDragLeave",
    "onDrop"
  ], Nf = [
    "refKey",
    "onChange",
    "onClick"
  ];
  function Mf(e) {
    return Df(e) || Af(e) || Ds(e) || Rf();
  }
  function Rf() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Af(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
  }
  function Df(e) {
    if (Array.isArray(e)) return Ur(e);
  }
  function cr(e, t) {
    return zf(e) || Ff(e, t) || Ds(e, t) || Lf();
  }
  function Lf() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Ds(e, t) {
    if (e) {
      if (typeof e == "string") return Ur(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ur(e, t);
    }
  }
  function Ur(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i;
  }
  function Ff(e, t) {
    var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (n != null) {
      var i = [], r = true, o = false, a, l;
      try {
        for (n = n.call(e); !(r = (a = n.next()).done) && (i.push(a.value), !(t && i.length === t)); r = true) ;
      } catch (c) {
        o = true, l = c;
      } finally {
        try {
          !r && n.return != null && n.return();
        } finally {
          if (o) throw l;
        }
      }
      return i;
    }
  }
  function zf(e) {
    if (Array.isArray(e)) return e;
  }
  function Ea(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t && (i = i.filter(function(r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), n.push.apply(n, i);
    }
    return n;
  }
  function Re(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2 ? Ea(Object(n), true).forEach(function(i) {
        Xr(e, i, n[i]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ea(Object(n)).forEach(function(i) {
        Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
      });
    }
    return e;
  }
  function Xr(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[t] = n, e;
  }
  function ji(e, t) {
    if (e == null) return {};
    var n = Bf(e, t), i, r;
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (r = 0; r < o.length; r++) i = o[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i]);
    }
    return n;
  }
  function Bf(e, t) {
    if (e == null) return {};
    var n = {}, i = Object.keys(e), r, o;
    for (o = 0; o < i.length; o++) r = i[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
    return n;
  }
  var $i = b.forwardRef(function(e, t) {
    var n = e.children, i = ji(e, If), r = Hf(i), o = r.open, a = ji(r, Pf);
    return b.useImperativeHandle(t, function() {
      return {
        open: o
      };
    }, [
      o
    ]), Ke.createElement(b.Fragment, null, n(Re(Re({}, a), {}, {
      open: o
    })));
  });
  $i.displayName = "Dropzone";
  var Ls = {
    disabled: false,
    getFilesFromEvent: Gd,
    maxSize: 1 / 0,
    minSize: 0,
    multiple: true,
    maxFiles: 0,
    preventDropOnDocument: true,
    noClick: false,
    noKeyboard: false,
    noDrag: false,
    noDragEventsBubbling: false,
    validator: null,
    useFsAccessApi: false,
    autoFocus: false
  };
  $i.defaultProps = Ls;
  $i.propTypes = {
    children: Se.func,
    accept: Se.objectOf(Se.arrayOf(Se.string)),
    multiple: Se.bool,
    preventDropOnDocument: Se.bool,
    noClick: Se.bool,
    noKeyboard: Se.bool,
    noDrag: Se.bool,
    noDragEventsBubbling: Se.bool,
    minSize: Se.number,
    maxSize: Se.number,
    maxFiles: Se.number,
    disabled: Se.bool,
    getFilesFromEvent: Se.func,
    onFileDialogCancel: Se.func,
    onFileDialogOpen: Se.func,
    useFsAccessApi: Se.bool,
    autoFocus: Se.bool,
    onDragEnter: Se.func,
    onDragLeave: Se.func,
    onDragOver: Se.func,
    onDrop: Se.func,
    onDropAccepted: Se.func,
    onDropRejected: Se.func,
    onError: Se.func,
    validator: Se.func
  };
  var Kr = {
    isFocused: false,
    isFileDialogActive: false,
    isDragActive: false,
    isDragAccept: false,
    isDragReject: false,
    acceptedFiles: [],
    fileRejections: []
  };
  function Hf() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = Re(Re({}, Ls), e), n = t.accept, i = t.disabled, r = t.getFilesFromEvent, o = t.maxSize, a = t.minSize, l = t.multiple, c = t.maxFiles, s = t.onDragEnter, u = t.onDragLeave, p = t.onDragOver, f = t.onDrop, d = t.onDropAccepted, x = t.onDropRejected, v = t.onFileDialogCancel, C = t.onFileDialogOpen, k = t.useFsAccessApi, j = t.autoFocus, I = t.preventDropOnDocument, R = t.noClick, L = t.noKeyboard, O = t.noDrag, M = t.noDragEventsBubbling, F = t.onError, D = t.validator, P = b.useMemo(function() {
      return _f(n);
    }, [
      n
    ]), N = b.useMemo(function() {
      return Sf(n);
    }, [
      n
    ]), T = b.useMemo(function() {
      return typeof C == "function" ? C : Ia;
    }, [
      C
    ]), y = b.useMemo(function() {
      return typeof v == "function" ? v : Ia;
    }, [
      v
    ]), w = b.useRef(null), S = b.useRef(null), z = b.useReducer($f, Kr), H = cr(z, 2), W = H[0], q = H[1], h = W.isFocused, U = W.isFileDialogActive, Q = b.useRef(typeof window < "u" && window.isSecureContext && k && Of()), g = function() {
      !Q.current && U && setTimeout(function() {
        if (S.current) {
          var B = S.current.files;
          B.length || (q({
            type: "closeDialog"
          }), y());
        }
      }, 300);
    };
    b.useEffect(function() {
      return window.addEventListener("focus", g, false), function() {
        window.removeEventListener("focus", g, false);
      };
    }, [
      S,
      U,
      y,
      Q
    ]);
    var G = b.useRef([]), le = function(B) {
      w.current && w.current.contains(B.target) || (B.preventDefault(), G.current = []);
    };
    b.useEffect(function() {
      return I && (document.addEventListener("dragover", ja, false), document.addEventListener("drop", le, false)), function() {
        I && (document.removeEventListener("dragover", ja), document.removeEventListener("drop", le));
      };
    }, [
      w,
      I
    ]), b.useEffect(function() {
      return !i && j && w.current && w.current.focus(), function() {
      };
    }, [
      w,
      j,
      i
    ]);
    var ee = b.useCallback(function(V) {
      F ? F(V) : console.error(V);
    }, [
      F
    ]), ke = b.useCallback(function(V) {
      V.preventDefault(), V.persist(), J(V), G.current = [].concat(Mf(G.current), [
        V.target
      ]), oi(V) && Promise.resolve(r(V)).then(function(B) {
        if (!(_i(V) && !M)) {
          var _ = B.length, A = _ > 0 && yf({
            files: B,
            accept: P,
            minSize: a,
            maxSize: o,
            multiple: l,
            maxFiles: c,
            validator: D
          }), X = _ > 0 && !A;
          q({
            isDragAccept: A,
            isDragReject: X,
            isDragActive: true,
            type: "setDraggedFiles"
          }), s && s(V);
        }
      }).catch(function(B) {
        return ee(B);
      });
    }, [
      r,
      s,
      ee,
      M,
      P,
      a,
      o,
      l,
      c,
      D
    ]), me = b.useCallback(function(V) {
      V.preventDefault(), V.persist(), J(V);
      var B = oi(V);
      if (B && V.dataTransfer) try {
        V.dataTransfer.dropEffect = "copy";
      } catch {
      }
      return B && p && p(V), false;
    }, [
      p,
      M
    ]), ve = b.useCallback(function(V) {
      V.preventDefault(), V.persist(), J(V);
      var B = G.current.filter(function(A) {
        return w.current && w.current.contains(A);
      }), _ = B.indexOf(V.target);
      _ !== -1 && B.splice(_, 1), G.current = B, !(B.length > 0) && (q({
        type: "setDraggedFiles",
        isDragActive: false,
        isDragAccept: false,
        isDragReject: false
      }), oi(V) && u && u(V));
    }, [
      w,
      u,
      M
    ]), xe = b.useCallback(function(V, B) {
      var _ = [], A = [];
      V.forEach(function(X) {
        var ne = Ns(X, P), pe = cr(ne, 2), Ae = pe[0], Xe = pe[1], Z = Ms(X, a, o), re = cr(Z, 2), Oe = re[0], te = re[1], he = D ? D(X) : null;
        if (Ae && Oe && !he) _.push(X);
        else {
          var ge = [
            Xe,
            te
          ];
          he && (ge = ge.concat(he)), A.push({
            file: X,
            errors: ge.filter(function(Ve) {
              return Ve;
            })
          });
        }
      }), (!l && _.length > 1 || l && c >= 1 && _.length > c) && (_.forEach(function(X) {
        A.push({
          file: X,
          errors: [
            bf
          ]
        });
      }), _.splice(0)), q({
        acceptedFiles: _,
        fileRejections: A,
        isDragReject: A.length > 0,
        type: "setFiles"
      }), f && f(_, A, B), A.length > 0 && x && x(A, B), _.length > 0 && d && d(_, B);
    }, [
      q,
      l,
      P,
      a,
      o,
      c,
      f,
      d,
      x,
      D
    ]), ue = b.useCallback(function(V) {
      V.preventDefault(), V.persist(), J(V), G.current = [], oi(V) && Promise.resolve(r(V)).then(function(B) {
        _i(V) && !M || xe(B, V);
      }).catch(function(B) {
        return ee(B);
      }), q({
        type: "reset"
      });
    }, [
      r,
      xe,
      ee,
      M
    ]), Ie = b.useCallback(function() {
      if (Q.current) {
        q({
          type: "openDialog"
        }), T();
        var V = {
          multiple: l,
          types: N
        };
        window.showOpenFilePicker(V).then(function(B) {
          return r(B);
        }).then(function(B) {
          xe(B, null), q({
            type: "closeDialog"
          });
        }).catch(function(B) {
          jf(B) ? (y(B), q({
            type: "closeDialog"
          })) : Ef(B) ? (Q.current = false, S.current ? (S.current.value = null, S.current.click()) : ee(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : ee(B);
        });
        return;
      }
      S.current && (q({
        type: "openDialog"
      }), T(), S.current.value = null, S.current.click());
    }, [
      q,
      T,
      y,
      k,
      xe,
      ee,
      N,
      l
    ]), He = b.useCallback(function(V) {
      !w.current || !w.current.isEqualNode(V.target) || (V.key === " " || V.key === "Enter" || V.keyCode === 32 || V.keyCode === 13) && (V.preventDefault(), Ie());
    }, [
      w,
      Ie
    ]), $e = b.useCallback(function() {
      q({
        type: "focus"
      });
    }, []), qe = b.useCallback(function() {
      q({
        type: "blur"
      });
    }, []), Pe = b.useCallback(function() {
      R || (Cf() ? setTimeout(Ie, 0) : Ie());
    }, [
      R,
      Ie
    ]), de = function(B) {
      return i ? null : B;
    }, ze = function(B) {
      return L ? null : de(B);
    }, Y = function(B) {
      return O ? null : de(B);
    }, J = function(B) {
      M && B.stopPropagation();
    }, se = b.useMemo(function() {
      return function() {
        var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, B = V.refKey, _ = B === void 0 ? "ref" : B, A = V.role, X = V.onKeyDown, ne = V.onFocus, pe = V.onBlur, Ae = V.onClick, Xe = V.onDragEnter, Z = V.onDragOver, re = V.onDragLeave, Oe = V.onDrop, te = ji(V, Tf);
        return Re(Re(Xr({
          onKeyDown: ze(gt(X, He)),
          onFocus: ze(gt(ne, $e)),
          onBlur: ze(gt(pe, qe)),
          onClick: de(gt(Ae, Pe)),
          onDragEnter: Y(gt(Xe, ke)),
          onDragOver: Y(gt(Z, me)),
          onDragLeave: Y(gt(re, ve)),
          onDrop: Y(gt(Oe, ue)),
          role: typeof A == "string" && A !== "" ? A : "presentation"
        }, _, w), !i && !L ? {
          tabIndex: 0
        } : {}), te);
      };
    }, [
      w,
      He,
      $e,
      qe,
      Pe,
      ke,
      me,
      ve,
      ue,
      L,
      O,
      i
    ]), _e = b.useCallback(function(V) {
      V.stopPropagation();
    }, []), Ce = b.useMemo(function() {
      return function() {
        var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, B = V.refKey, _ = B === void 0 ? "ref" : B, A = V.onChange, X = V.onClick, ne = ji(V, Nf), pe = Xr({
          accept: P,
          multiple: l,
          type: "file",
          style: {
            border: 0,
            clip: "rect(0, 0, 0, 0)",
            clipPath: "inset(50%)",
            height: "1px",
            margin: "0 -1px -1px 0",
            overflow: "hidden",
            padding: 0,
            position: "absolute",
            width: "1px",
            whiteSpace: "nowrap"
          },
          onChange: de(gt(A, ue)),
          onClick: de(gt(X, _e)),
          tabIndex: -1
        }, _, S);
        return Re(Re({}, pe), ne);
      };
    }, [
      S,
      n,
      l,
      ue,
      i
    ]);
    return Re(Re({}, W), {}, {
      isFocused: h && !i,
      getRootProps: se,
      getInputProps: Ce,
      rootRef: w,
      inputRef: S,
      open: de(Ie)
    });
  }
  function $f(e, t) {
    switch (t.type) {
      case "focus":
        return Re(Re({}, e), {}, {
          isFocused: true
        });
      case "blur":
        return Re(Re({}, e), {}, {
          isFocused: false
        });
      case "openDialog":
        return Re(Re({}, Kr), {}, {
          isFileDialogActive: true
        });
      case "closeDialog":
        return Re(Re({}, e), {}, {
          isFileDialogActive: false
        });
      case "setDraggedFiles":
        return Re(Re({}, e), {}, {
          isDragActive: t.isDragActive,
          isDragAccept: t.isDragAccept,
          isDragReject: t.isDragReject
        });
      case "setFiles":
        return Re(Re({}, e), {}, {
          acceptedFiles: t.acceptedFiles,
          fileRejections: t.fileRejections,
          isDragReject: t.isDragReject
        });
      case "reset":
        return Re({}, Kr);
      default:
        return e;
    }
  }
  function Ia() {
  }
  const qf = {
    name: "TimesCircleIcon",
    height: 512,
    width: 512,
    svgPath: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z",
    yOffset: 0,
    xOffset: 0
  }, Vf = Fe(qf), Bt = {
    masthead: "pf-v6-c-masthead",
    mastheadBrand: "pf-v6-c-masthead__brand",
    mastheadContent: "pf-v6-c-masthead__content",
    mastheadLogo: "pf-v6-c-masthead__logo",
    mastheadMain: "pf-v6-c-masthead__main",
    modifiers: {
      resizeObserver: "pf-m-resize-observer",
      displayStack: "pf-m-display-stack",
      displayInline: "pf-m-display-inline",
      insetNone: "pf-m-inset-none",
      insetSm: "pf-m-inset-sm",
      insetMd: "pf-m-inset-md",
      insetLg: "pf-m-inset-lg",
      insetXl: "pf-m-inset-xl",
      inset_2xl: "pf-m-inset-2xl",
      displayStackOnSm: "pf-m-display-stack-on-sm",
      displayInlineOnSm: "pf-m-display-inline-on-sm",
      displayStackOnMd: "pf-m-display-stack-on-md",
      displayInlineOnMd: "pf-m-display-inline-on-md",
      displayStackOnLg: "pf-m-display-stack-on-lg",
      displayInlineOnLg: "pf-m-display-inline-on-lg",
      displayStackOnXl: "pf-m-display-stack-on-xl",
      displayInlineOnXl: "pf-m-display-inline-on-xl",
      displayStackOn_2xl: "pf-m-display-stack-on-2xl",
      displayInlineOn_2xl: "pf-m-display-inline-on-2xl"
    }
  }, Wf = {
    isManagedSidebar: false,
    isSidebarOpen: false,
    onSidebarToggle: () => null,
    width: null,
    height: null,
    getBreakpoint: Al,
    getVerticalBreakpoint: Rl
  }, an = b.createContext(Wf), Uf = an.Provider;
  an.Consumer;
  const Fs = (e) => {
    var { children: t, className: n, display: i = {
      md: "inline"
    }, inset: r } = e, o = K(e, [
      "children",
      "className",
      "display",
      "inset"
    ]);
    const { width: a, getBreakpoint: l } = b.useContext(an);
    return m.jsx("header", Object.assign({
      className: E(Bt.masthead, Et(i, Bt, "display-", l(a)), Et(r, Bt, "", l(a)), n)
    }, o, {
      children: t
    }));
  };
  Fs.displayName = "Masthead";
  const zs = (e) => {
    var { children: t, className: n } = e, i = K(e, [
      "children",
      "className"
    ]);
    return m.jsx("div", Object.assign({
      className: E(Bt.mastheadBrand, n)
    }, i, {
      children: t
    }));
  };
  zs.displayName = "MastheadBrand";
  const Bs = (e) => {
    var { children: t, className: n } = e, i = K(e, [
      "children",
      "className"
    ]);
    return m.jsx("div", Object.assign({
      className: E(Bt.mastheadContent, n)
    }, i, {
      children: t
    }));
  };
  Bs.displayName = "MastheadContent";
  const Hs = (e) => {
    var { children: t, className: n, component: i } = e, r = K(e, [
      "children",
      "className",
      "component"
    ]);
    let o = i;
    return i || ((r == null ? void 0 : r.href) !== void 0 ? o = "a" : o = "span"), m.jsx(o, Object.assign({
      className: E(Bt.mastheadLogo, n)
    }, o === "a" && {
      tabIndex: 0
    }, r, {
      children: t
    }));
  };
  Hs.displayName = "MastheadLogo";
  const $s = (e) => {
    var { children: t, className: n } = e, i = K(e, [
      "children",
      "className"
    ]);
    return m.jsx("div", Object.assign({
      className: E(Bt.mastheadMain, n)
    }, i, {
      children: t
    }));
  };
  $s.displayName = "MastheadMain";
  const Qe = {
    modifiers: {
      sm: "pf-m-sm",
      lg: "pf-m-lg",
      inside: "pf-m-inside",
      outside: "pf-m-outside",
      staticWidth: "pf-m-static-width",
      singleline: "pf-m-singleline",
      success: "pf-m-success",
      warning: "pf-m-warning",
      danger: "pf-m-danger",
      truncate: "pf-m-truncate"
    },
    progress: "pf-v6-c-progress",
    progressBar: "pf-v6-c-progress__bar",
    progressDescription: "pf-v6-c-progress__description",
    progressHelperText: "pf-v6-c-progress__helper-text",
    progressIndicator: "pf-v6-c-progress__indicator",
    progressMeasure: "pf-v6-c-progress__measure",
    progressStatus: "pf-v6-c-progress__status",
    progressStatusIcon: "pf-v6-c-progress__status-icon"
  }, qs = (e) => {
    var { progressBarAriaProps: t, className: n = "", children: i = null, value: r } = e, o = K(e, [
      "progressBarAriaProps",
      "className",
      "children",
      "value"
    ]);
    return m.jsx("div", Object.assign({}, o, {
      className: E(Qe.progressBar, n)
    }, t, {
      children: m.jsx("div", {
        className: E(Qe.progressIndicator),
        style: {
          width: `${r}%`
        },
        children: m.jsx("span", {
          className: E(Qe.progressMeasure),
          children: i
        })
      })
    }));
  };
  qs.displayName = "ProgressBar";
  const Vs = (e) => {
    var { children: t } = e, n = K(e, [
      "children"
    ]);
    return m.jsx("div", Object.assign({
      className: Qe.progressHelperText
    }, n, {
      children: t
    }));
  };
  Vs.displayName = "ProgressHelperText";
  var Mt;
  (function(e) {
    e.outside = "outside", e.inside = "inside", e.top = "top", e.none = "none";
  })(Mt || (Mt = {}));
  var Pa;
  (function(e) {
    e.danger = "danger", e.success = "success", e.warning = "warning";
  })(Pa || (Pa = {}));
  const Ta = {
    danger: Vf,
    success: Di,
    warning: Li
  }, Ws = ({ progressBarAriaProps: e, value: t, title: n = "", parentId: i, label: r = null, variant: o = null, measureLocation: a = Mt.top, isTitleTruncated: l = false, tooltipPosition: c, helperText: s }) => {
    const u = Ta.hasOwnProperty(o) && Ta[o], [p, f] = b.useState(""), d = (v) => {
      v.target.offsetWidth < v.target.scrollWidth ? f(n || v.target.innerHTML) : f("");
    }, x = m.jsx("div", {
      className: E(Qe.progressDescription, l && typeof n == "string" && Qe.modifiers.truncate),
      id: `${i}-description`,
      "aria-hidden": "true",
      onMouseEnter: l && typeof n == "string" ? d : null,
      children: n
    });
    return m.jsxs(b.Fragment, {
      children: [
        n && (p ? m.jsx(Bi, {
          position: c,
          content: p,
          isVisible: true,
          children: x
        }) : x),
        (a !== Mt.none || u) && m.jsxs("div", {
          className: E(Qe.progressStatus),
          "aria-hidden": "true",
          children: [
            (a === Mt.top || a === Mt.outside) && m.jsx("span", {
              className: E(Qe.progressMeasure),
              children: r || `${t}%`
            }),
            u && m.jsx("span", {
              className: E(Qe.progressStatusIcon),
              children: m.jsx(u, {})
            })
          ]
        }),
        m.jsx(qs, {
          role: "progressbar",
          progressBarAriaProps: e,
          value: t,
          children: a === Mt.inside && `${t}%`
        }),
        s && m.jsx(Vs, {
          children: s
        })
      ]
    });
  };
  Ws.displayName = "ProgressContainer";
  var Gr;
  (function(e) {
    e.sm = "sm", e.md = "md", e.lg = "lg";
  })(Gr || (Gr = {}));
  class jn extends b.Component {
    constructor() {
      super(...arguments), this.id = this.props.id || po();
    }
    render() {
      const t = this.props, { id: n, size: i, className: r, value: o, title: a, label: l, variant: c, measureLocation: s, min: u, max: p, valueText: f, isTitleTruncated: d, tooltipPosition: x, "aria-label": v, "aria-labelledby": C, helperText: k } = t, j = K(t, [
        "id",
        "size",
        "className",
        "value",
        "title",
        "label",
        "variant",
        "measureLocation",
        "min",
        "max",
        "valueText",
        "isTitleTruncated",
        "tooltipPosition",
        "aria-label",
        "aria-labelledby",
        "helperText"
      ]), I = {
        "aria-valuemin": u,
        "aria-valuenow": o,
        "aria-valuemax": p
      };
      (a || C) && (I["aria-labelledby"] = a ? `${this.id}-description` : C), v && (I["aria-label"] = v), f && (I["aria-valuetext"] = f), !a && !C && !v && console.warn("One of aria-label or aria-labelledby properties should be passed when using the progress component without a title.");
      const R = Math.min(100, Math.max(0, Math.floor((o - u) / (p - u) * 100))) || 0;
      return m.jsx("div", Object.assign({}, j, {
        className: E(Qe.progress, Qe.modifiers[c], [
          "inside",
          "outside"
        ].includes(s) && Qe.modifiers[s], s === "inside" ? Qe.modifiers[Gr.lg] : Qe.modifiers[i], !a && Qe.modifiers.singleline, r),
        id: this.id,
        children: m.jsx(Ws, {
          parentId: this.id,
          value: R,
          title: a,
          label: l,
          variant: c,
          measureLocation: s,
          progressBarAriaProps: I,
          isTitleTruncated: d,
          tooltipPosition: x,
          helperText: k
        })
      }));
    }
  }
  jn.displayName = "Progress";
  jn.defaultProps = {
    className: "",
    measureLocation: Mt.top,
    variant: null,
    id: "",
    title: "",
    min: 0,
    max: 100,
    size: null,
    label: null,
    value: 0,
    valueText: null,
    isTitleTruncated: false,
    tooltipPosition: "top",
    "aria-label": null,
    "aria-labelledby": null
  };
  const fe = {
    modifiers: {
      expanded: "pf-m-expanded",
      collapsed: "pf-m-collapsed",
      pageInsets: "pf-m-page-insets",
      contextSelector: "pf-m-context-selector",
      insetNone: "pf-m-inset-none",
      fill: "pf-m-fill",
      noFill: "pf-m-no-fill",
      limitWidth: "pf-m-limit-width",
      alignCenter: "pf-m-align-center",
      overflowScroll: "pf-m-overflow-scroll",
      shadowBottom: "pf-m-shadow-bottom",
      shadowTop: "pf-m-shadow-top",
      stickyTop: "pf-m-sticky-top",
      stickyBottom: "pf-m-sticky-bottom",
      stickyTopOnSmHeight: "pf-m-sticky-top-on-sm-height",
      stickyBottomOnSmHeight: "pf-m-sticky-bottom-on-sm-height",
      stickyTopOnMdHeight: "pf-m-sticky-top-on-md-height",
      stickyBottomOnMdHeight: "pf-m-sticky-bottom-on-md-height",
      stickyTopOnLgHeight: "pf-m-sticky-top-on-lg-height",
      stickyBottomOnLgHeight: "pf-m-sticky-bottom-on-lg-height",
      stickyTopOnXlHeight: "pf-m-sticky-top-on-xl-height",
      stickyBottomOnXlHeight: "pf-m-sticky-bottom-on-xl-height",
      stickyTopOn_2xlHeight: "pf-m-sticky-top-on-2xl-height",
      stickyBottomOn_2xlHeight: "pf-m-sticky-bottom-on-2xl-height",
      noSidebar: "pf-m-no-sidebar",
      secondary: "pf-m-secondary",
      padding: "pf-m-padding",
      noPadding: "pf-m-no-padding",
      paddingOnSm: "pf-m-padding-on-sm",
      noPaddingOnSm: "pf-m-no-padding-on-sm",
      paddingOnMd: "pf-m-padding-on-md",
      noPaddingOnMd: "pf-m-no-padding-on-md",
      paddingOnLg: "pf-m-padding-on-lg",
      noPaddingOnLg: "pf-m-no-padding-on-lg",
      paddingOnXl: "pf-m-padding-on-xl",
      noPaddingOnXl: "pf-m-no-padding-on-xl",
      paddingOn_2xl: "pf-m-padding-on-2xl",
      noPaddingOn_2xl: "pf-m-no-padding-on-2xl"
    },
    page: "pf-v6-c-page",
    pageDrawer: "pf-v6-c-page__drawer",
    pageMain: "pf-v6-c-page__main",
    pageMainBody: "pf-v6-c-page__main-body",
    pageMainBreadcrumb: "pf-v6-c-page__main-breadcrumb",
    pageMainContainer: "pf-v6-c-page__main-container",
    pageMainGroup: "pf-v6-c-page__main-group",
    pageMainSection: "pf-v6-c-page__main-section",
    pageMainSubnav: "pf-v6-c-page__main-subnav",
    pageMainTabs: "pf-v6-c-page__main-tabs",
    pageMainWizard: "pf-v6-c-page__main-wizard"
  }, Hn = (e) => {
    var { className: t, children: n } = e, i = K(e, [
      "className",
      "children"
    ]);
    return m.jsx("div", Object.assign({}, i, {
      className: E(fe.pageMainBody, t),
      children: n
    }));
  };
  Hn.displayName = "PageBody";
  const Us = (e) => {
    var { className: t = "", children: n, isWidthLimited: i, stickyOnBreakpoint: r, hasShadowTop: o = false, hasShadowBottom: a = false, hasOverflowScroll: l = false, "aria-label": c, hasBodyWrapper: s = true } = e, u = K(e, [
      "className",
      "children",
      "isWidthLimited",
      "stickyOnBreakpoint",
      "hasShadowTop",
      "hasShadowBottom",
      "hasOverflowScroll",
      "aria-label",
      "hasBodyWrapper"
    ]);
    const { height: p, getVerticalBreakpoint: f } = b.useContext(an);
    return b.useEffect(() => {
      l && !c && console.warn("PageBreadcrumb: An accessible aria-label is required when hasOverflowScroll is set to true.");
    }, [
      l,
      c
    ]), m.jsx("section", Object.assign({
      className: E(fe.pageMainBreadcrumb, Et(r, fe, "sticky-", f(p), true), i && fe.modifiers.limitWidth, o && fe.modifiers.shadowTop, a && fe.modifiers.shadowBottom, l && fe.modifiers.overflowScroll, t)
    }, l && {
      tabIndex: 0
    }, {
      "aria-label": c
    }, u, {
      children: s ? m.jsx(Hn, {
        children: n
      }) : n
    }));
  };
  Us.displayName = "PageBreadcrumb";
  const Xs = (e) => {
    var { className: t = "", children: n, stickyOnBreakpoint: i, isFilled: r, hasShadowTop: o = false, hasShadowBottom: a = false, hasOverflowScroll: l = false, "aria-label": c } = e, s = K(e, [
      "className",
      "children",
      "stickyOnBreakpoint",
      "isFilled",
      "hasShadowTop",
      "hasShadowBottom",
      "hasOverflowScroll",
      "aria-label"
    ]);
    const { height: u, getVerticalBreakpoint: p } = b.useContext(an);
    return b.useEffect(() => {
      l && !c && console.warn("PageGroup: An accessible aria-label is required when hasOverflowScroll is set to true.");
    }, [
      l,
      c
    ]), m.jsx("div", Object.assign({}, s, {
      className: E(fe.pageMainGroup, Et(i, fe, "sticky-", p(u), true), r === false && fe.modifiers.noFill, r === true && fe.modifiers.fill, o && fe.modifiers.shadowTop, a && fe.modifiers.shadowBottom, l && fe.modifiers.overflowScroll, t)
    }, l && {
      tabIndex: 0,
      role: "region",
      "aria-label": c
    }, {
      children: n
    }));
  };
  Xs.displayName = "PageGroup";
  var Na;
  (function(e) {
    e.vertical = "vertical", e.horizontal = "horizontal";
  })(Na || (Na = {}));
  class Io extends b.Component {
    constructor(t) {
      super(t), this.mainRef = b.createRef(), this.pageRef = b.createRef(), this.observer = () => {
      }, this.getWindowWidth = () => At ? this.pageRef.current ? this.pageRef.current.clientWidth : window.innerWidth : 1200, this.isMobile = () => this.getWindowWidth() < Number.parseInt(_l.value, 10) * 16, this.resize = (o) => {
        var a;
        const { onPageResize: l } = this.props, c = this.isMobile();
        if (l && l(o, {
          mobileView: c,
          windowSize: this.getWindowWidth()
        }), c !== this.state.mobileView && this.setState({
          mobileView: c
        }), !((a = this.pageRef) === null || a === void 0) && a.current) {
          const s = this.pageRef.current.clientWidth, u = this.pageRef.current.clientHeight;
          this.state.width !== s && this.setState({
            width: s
          }), this.state.height !== u && this.setState({
            height: u
          });
        }
      }, this.handleResize = qu(this.resize, 250), this.handleMainClick = () => {
        this.isMobile() && this.state.mobileIsSidebarOpen && this.mainRef.current && this.setState({
          mobileIsSidebarOpen: false
        });
      }, this.onSidebarToggleMobile = () => {
        this.setState((o) => ({
          mobileIsSidebarOpen: !o.mobileIsSidebarOpen
        }));
      }, this.onSidebarToggleDesktop = () => {
        this.setState((o) => ({
          desktopIsSidebarOpen: !o.desktopIsSidebarOpen
        }));
      };
      const { isManagedSidebar: n, defaultManagedSidebarIsOpen: i } = t, r = n ? i : true;
      this.state = {
        desktopIsSidebarOpen: r,
        mobileIsSidebarOpen: false,
        mobileView: false,
        width: null,
        height: null
      };
    }
    componentDidMount() {
      const { isManagedSidebar: t, onPageResize: n } = this.props;
      if (t || n) {
        this.observer = Wl(this.pageRef.current, this.handleResize);
        const i = this.mainRef.current;
        i && (i.addEventListener("mousedown", this.handleMainClick), i.addEventListener("touchstart", this.handleMainClick)), this.resize();
      }
    }
    componentWillUnmount() {
      const { isManagedSidebar: t, onPageResize: n } = this.props;
      if (t || n) {
        this.observer();
        const i = this.mainRef.current;
        i && (i.removeEventListener("mousedown", this.handleMainClick), i.removeEventListener("touchstart", this.handleMainClick));
      }
    }
    render() {
      const t = this.props, { banner: n, breadcrumb: i, isBreadcrumbWidthLimited: r, className: o, children: a, masthead: l, sidebar: c, notificationDrawer: s, isNotificationDrawerExpanded: u, onNotificationDrawerExpand: p, drawerDefaultSize: f, drawerMinSize: d, drawerMaxSize: x, isHorizontalSubnavWidthLimited: v, skipToContent: C, role: k, mainContainerId: j, isManagedSidebar: I, defaultManagedSidebarIsOpen: R, onPageResize: L, getBreakpoint: O, getVerticalBreakpoint: M, mainAriaLabel: F, mainTabIndex: D, mainComponent: P, horizontalSubnav: N, isHorizontalSubnavGrouped: T, isBreadcrumbGrouped: y, additionalGroupedContent: w, groupProps: S, breadcrumbProps: z, isContentFilled: H } = t, W = K(t, [
        "banner",
        "breadcrumb",
        "isBreadcrumbWidthLimited",
        "className",
        "children",
        "masthead",
        "sidebar",
        "notificationDrawer",
        "isNotificationDrawerExpanded",
        "onNotificationDrawerExpand",
        "drawerDefaultSize",
        "drawerMinSize",
        "drawerMaxSize",
        "isHorizontalSubnavWidthLimited",
        "skipToContent",
        "role",
        "mainContainerId",
        "isManagedSidebar",
        "defaultManagedSidebarIsOpen",
        "onPageResize",
        "getBreakpoint",
        "getVerticalBreakpoint",
        "mainAriaLabel",
        "mainTabIndex",
        "mainComponent",
        "horizontalSubnav",
        "isHorizontalSubnavGrouped",
        "isBreadcrumbGrouped",
        "additionalGroupedContent",
        "groupProps",
        "breadcrumbProps",
        "isContentFilled"
      ]), { mobileView: q, mobileIsSidebarOpen: h, desktopIsSidebarOpen: U, width: Q, height: g } = this.state, G = {
        isManagedSidebar: I,
        onSidebarToggle: q ? this.onSidebarToggleMobile : this.onSidebarToggleDesktop,
        isSidebarOpen: q ? h : U,
        width: Q,
        height: g,
        getBreakpoint: O,
        getVerticalBreakpoint: M
      };
      let le = null;
      N && (le = m.jsx("div", {
        className: E(fe.pageMainSubnav, v && fe.modifiers.limitWidth),
        children: m.jsx(Hn, {
          children: N
        })
      }));
      const ee = i ? m.jsx(Us, {
        stickyOnBreakpoint: z == null ? void 0 : z.stickyOnBreakpoint,
        isWidthLimited: r,
        children: m.jsx(Hn, {
          children: i
        })
      }) : null, me = T || y || w ? m.jsxs(Xs, Object.assign({}, S, {
        children: [
          T && le,
          n,
          y && ee,
          w
        ]
      })) : null, ve = P, xe = m.jsx("div", {
        className: E(fe.pageMainContainer, H && fe.modifiers.fill),
        children: m.jsxs(ve, {
          ref: this.mainRef,
          role: k,
          id: j,
          className: E(fe.pageMain),
          tabIndex: D,
          "aria-label": F,
          children: [
            me,
            !T && le,
            n,
            !y && ee,
            a
          ]
        })
      }), ue = m.jsx(Os, {
        defaultSize: f,
        minSize: d,
        maxSize: x,
        children: s
      });
      return m.jsx(Uf, {
        value: G,
        children: m.jsxs("div", Object.assign({
          ref: this.pageRef
        }, W, {
          className: E(fe.page, Q !== null && g !== null && "pf-m-resize-observer", Q !== null && `pf-m-breakpoint-${O(Q)}`, g !== null && `pf-m-height-breakpoint-${M(g)}`, c === null && fe.modifiers.noSidebar, o),
          children: [
            C,
            l,
            c,
            s && m.jsx("div", {
              className: E(fe.pageDrawer),
              children: m.jsx(ws, {
                isExpanded: u,
                onExpand: (Ie) => p(Ie),
                children: m.jsx(Cs, {
                  panelContent: ue,
                  children: xe
                })
              })
            }),
            !s && xe
          ]
        }))
      });
    }
  }
  Io.displayName = "Page";
  Io.defaultProps = {
    isManagedSidebar: false,
    isBreadcrumbWidthLimited: false,
    defaultManagedSidebarIsOpen: true,
    mainTabIndex: -1,
    isNotificationDrawerExpanded: false,
    onNotificationDrawerExpand: () => null,
    mainComponent: "main",
    getBreakpoint: Al,
    getVerticalBreakpoint: Rl
  };
  var Ei;
  (function(e) {
    e.default = "default", e.secondary = "secondary";
  })(Ei || (Ei = {}));
  var St;
  (function(e) {
    e.default = "default", e.subNav = "subnav", e.breadcrumb = "breadcrumb", e.tabs = "tabs", e.wizard = "wizard";
  })(St || (St = {}));
  const Xf = {
    [St.default]: fe.pageMainSection,
    [St.subNav]: fe.pageMainSubnav,
    [St.breadcrumb]: fe.pageMainBreadcrumb,
    [St.tabs]: fe.pageMainTabs,
    [St.wizard]: fe.pageMainWizard
  }, Kf = {
    [Ei.default]: "",
    [Ei.secondary]: fe.modifiers.secondary
  }, Ks = (e) => {
    var { className: t = "", children: n, variant: i = "default", type: r = "default", padding: o, isFilled: a, isWidthLimited: l = false, isCenterAligned: c = false, stickyOnBreakpoint: s, hasShadowTop: u = false, hasShadowBottom: p = false, hasOverflowScroll: f = false, "aria-label": d, component: x = "section", hasBodyWrapper: v = true } = e, C = K(e, [
      "className",
      "children",
      "variant",
      "type",
      "padding",
      "isFilled",
      "isWidthLimited",
      "isCenterAligned",
      "stickyOnBreakpoint",
      "hasShadowTop",
      "hasShadowBottom",
      "hasOverflowScroll",
      "aria-label",
      "component",
      "hasBodyWrapper"
    ]);
    const { height: k, getVerticalBreakpoint: j } = b.useContext(an);
    b.useEffect(() => {
      f && !d && console.warn("PageSection: An accessible aria-label is required when hasOverflowScroll is set to true.");
    }, [
      f,
      d
    ]);
    const I = x;
    return m.jsx(I, Object.assign({}, C, {
      className: E(Xf[r], Et(o, fe), Et(s, fe, "sticky-", j(k), true), r === St.default && Kf[i], a === false && fe.modifiers.noFill, a === true && fe.modifiers.fill, l && fe.modifiers.limitWidth, l && c && r !== St.subNav && fe.modifiers.alignCenter, u && fe.modifiers.shadowTop, p && fe.modifiers.shadowBottom, f && fe.modifiers.overflowScroll, t)
    }, f && {
      tabIndex: 0
    }, {
      "aria-label": d,
      children: v ? m.jsx(Hn, {
        children: n
      }) : n
    }));
  };
  Ks.displayName = "PageSection";
  const pt = {
    grid: "pf-v6-l-grid",
    gridItem: "pf-v6-l-grid__item",
    modifiers: {
      all_1Col: "pf-m-all-1-col",
      all_2Col: "pf-m-all-2-col",
      all_3Col: "pf-m-all-3-col",
      all_4Col: "pf-m-all-4-col",
      all_5Col: "pf-m-all-5-col",
      all_6Col: "pf-m-all-6-col",
      all_7Col: "pf-m-all-7-col",
      all_8Col: "pf-m-all-8-col",
      all_9Col: "pf-m-all-9-col",
      all_10Col: "pf-m-all-10-col",
      all_11Col: "pf-m-all-11-col",
      all_12Col: "pf-m-all-12-col",
      all_1ColOnSm: "pf-m-all-1-col-on-sm",
      all_2ColOnSm: "pf-m-all-2-col-on-sm",
      all_3ColOnSm: "pf-m-all-3-col-on-sm",
      all_4ColOnSm: "pf-m-all-4-col-on-sm",
      all_5ColOnSm: "pf-m-all-5-col-on-sm",
      all_6ColOnSm: "pf-m-all-6-col-on-sm",
      all_7ColOnSm: "pf-m-all-7-col-on-sm",
      all_8ColOnSm: "pf-m-all-8-col-on-sm",
      all_9ColOnSm: "pf-m-all-9-col-on-sm",
      all_10ColOnSm: "pf-m-all-10-col-on-sm",
      all_11ColOnSm: "pf-m-all-11-col-on-sm",
      all_12ColOnSm: "pf-m-all-12-col-on-sm",
      all_1ColOnMd: "pf-m-all-1-col-on-md",
      all_2ColOnMd: "pf-m-all-2-col-on-md",
      all_3ColOnMd: "pf-m-all-3-col-on-md",
      all_4ColOnMd: "pf-m-all-4-col-on-md",
      all_5ColOnMd: "pf-m-all-5-col-on-md",
      all_6ColOnMd: "pf-m-all-6-col-on-md",
      all_7ColOnMd: "pf-m-all-7-col-on-md",
      all_8ColOnMd: "pf-m-all-8-col-on-md",
      all_9ColOnMd: "pf-m-all-9-col-on-md",
      all_10ColOnMd: "pf-m-all-10-col-on-md",
      all_11ColOnMd: "pf-m-all-11-col-on-md",
      all_12ColOnMd: "pf-m-all-12-col-on-md",
      all_1ColOnLg: "pf-m-all-1-col-on-lg",
      all_2ColOnLg: "pf-m-all-2-col-on-lg",
      all_3ColOnLg: "pf-m-all-3-col-on-lg",
      all_4ColOnLg: "pf-m-all-4-col-on-lg",
      all_5ColOnLg: "pf-m-all-5-col-on-lg",
      all_6ColOnLg: "pf-m-all-6-col-on-lg",
      all_7ColOnLg: "pf-m-all-7-col-on-lg",
      all_8ColOnLg: "pf-m-all-8-col-on-lg",
      all_9ColOnLg: "pf-m-all-9-col-on-lg",
      all_10ColOnLg: "pf-m-all-10-col-on-lg",
      all_11ColOnLg: "pf-m-all-11-col-on-lg",
      all_12ColOnLg: "pf-m-all-12-col-on-lg",
      all_1ColOnXl: "pf-m-all-1-col-on-xl",
      all_2ColOnXl: "pf-m-all-2-col-on-xl",
      all_3ColOnXl: "pf-m-all-3-col-on-xl",
      all_4ColOnXl: "pf-m-all-4-col-on-xl",
      all_5ColOnXl: "pf-m-all-5-col-on-xl",
      all_6ColOnXl: "pf-m-all-6-col-on-xl",
      all_7ColOnXl: "pf-m-all-7-col-on-xl",
      all_8ColOnXl: "pf-m-all-8-col-on-xl",
      all_9ColOnXl: "pf-m-all-9-col-on-xl",
      all_10ColOnXl: "pf-m-all-10-col-on-xl",
      all_11ColOnXl: "pf-m-all-11-col-on-xl",
      all_12ColOnXl: "pf-m-all-12-col-on-xl",
      all_1ColOn_2xl: "pf-m-all-1-col-on-2xl",
      all_2ColOn_2xl: "pf-m-all-2-col-on-2xl",
      all_3ColOn_2xl: "pf-m-all-3-col-on-2xl",
      all_4ColOn_2xl: "pf-m-all-4-col-on-2xl",
      all_5ColOn_2xl: "pf-m-all-5-col-on-2xl",
      all_6ColOn_2xl: "pf-m-all-6-col-on-2xl",
      all_7ColOn_2xl: "pf-m-all-7-col-on-2xl",
      all_8ColOn_2xl: "pf-m-all-8-col-on-2xl",
      all_9ColOn_2xl: "pf-m-all-9-col-on-2xl",
      all_10ColOn_2xl: "pf-m-all-10-col-on-2xl",
      all_11ColOn_2xl: "pf-m-all-11-col-on-2xl",
      all_12ColOn_2xl: "pf-m-all-12-col-on-2xl",
      "1Col": "pf-m-1-col",
      "2Col": "pf-m-2-col",
      "3Col": "pf-m-3-col",
      "4Col": "pf-m-4-col",
      "5Col": "pf-m-5-col",
      "6Col": "pf-m-6-col",
      "7Col": "pf-m-7-col",
      "8Col": "pf-m-8-col",
      "9Col": "pf-m-9-col",
      "10Col": "pf-m-10-col",
      "11Col": "pf-m-11-col",
      "12Col": "pf-m-12-col",
      offset_1Col: "pf-m-offset-1-col",
      offset_2Col: "pf-m-offset-2-col",
      offset_3Col: "pf-m-offset-3-col",
      offset_4Col: "pf-m-offset-4-col",
      offset_5Col: "pf-m-offset-5-col",
      offset_6Col: "pf-m-offset-6-col",
      offset_7Col: "pf-m-offset-7-col",
      offset_8Col: "pf-m-offset-8-col",
      offset_9Col: "pf-m-offset-9-col",
      offset_10Col: "pf-m-offset-10-col",
      offset_11Col: "pf-m-offset-11-col",
      offset_12Col: "pf-m-offset-12-col",
      "1Row": "pf-m-1-row",
      "2Row": "pf-m-2-row",
      "3Row": "pf-m-3-row",
      "4Row": "pf-m-4-row",
      "5Row": "pf-m-5-row",
      "6Row": "pf-m-6-row",
      "7Row": "pf-m-7-row",
      "8Row": "pf-m-8-row",
      "9Row": "pf-m-9-row",
      "10Row": "pf-m-10-row",
      "11Row": "pf-m-11-row",
      "12Row": "pf-m-12-row",
      "1ColOnSm": "pf-m-1-col-on-sm",
      "2ColOnSm": "pf-m-2-col-on-sm",
      "3ColOnSm": "pf-m-3-col-on-sm",
      "4ColOnSm": "pf-m-4-col-on-sm",
      "5ColOnSm": "pf-m-5-col-on-sm",
      "6ColOnSm": "pf-m-6-col-on-sm",
      "7ColOnSm": "pf-m-7-col-on-sm",
      "8ColOnSm": "pf-m-8-col-on-sm",
      "9ColOnSm": "pf-m-9-col-on-sm",
      "10ColOnSm": "pf-m-10-col-on-sm",
      "11ColOnSm": "pf-m-11-col-on-sm",
      "12ColOnSm": "pf-m-12-col-on-sm",
      offset_1ColOnSm: "pf-m-offset-1-col-on-sm",
      offset_2ColOnSm: "pf-m-offset-2-col-on-sm",
      offset_3ColOnSm: "pf-m-offset-3-col-on-sm",
      offset_4ColOnSm: "pf-m-offset-4-col-on-sm",
      offset_5ColOnSm: "pf-m-offset-5-col-on-sm",
      offset_6ColOnSm: "pf-m-offset-6-col-on-sm",
      offset_7ColOnSm: "pf-m-offset-7-col-on-sm",
      offset_8ColOnSm: "pf-m-offset-8-col-on-sm",
      offset_9ColOnSm: "pf-m-offset-9-col-on-sm",
      offset_10ColOnSm: "pf-m-offset-10-col-on-sm",
      offset_11ColOnSm: "pf-m-offset-11-col-on-sm",
      offset_12ColOnSm: "pf-m-offset-12-col-on-sm",
      "1RowOnSm": "pf-m-1-row-on-sm",
      "2RowOnSm": "pf-m-2-row-on-sm",
      "3RowOnSm": "pf-m-3-row-on-sm",
      "4RowOnSm": "pf-m-4-row-on-sm",
      "5RowOnSm": "pf-m-5-row-on-sm",
      "6RowOnSm": "pf-m-6-row-on-sm",
      "7RowOnSm": "pf-m-7-row-on-sm",
      "8RowOnSm": "pf-m-8-row-on-sm",
      "9RowOnSm": "pf-m-9-row-on-sm",
      "10RowOnSm": "pf-m-10-row-on-sm",
      "11RowOnSm": "pf-m-11-row-on-sm",
      "12RowOnSm": "pf-m-12-row-on-sm",
      "1ColOnMd": "pf-m-1-col-on-md",
      "2ColOnMd": "pf-m-2-col-on-md",
      "3ColOnMd": "pf-m-3-col-on-md",
      "4ColOnMd": "pf-m-4-col-on-md",
      "5ColOnMd": "pf-m-5-col-on-md",
      "6ColOnMd": "pf-m-6-col-on-md",
      "7ColOnMd": "pf-m-7-col-on-md",
      "8ColOnMd": "pf-m-8-col-on-md",
      "9ColOnMd": "pf-m-9-col-on-md",
      "10ColOnMd": "pf-m-10-col-on-md",
      "11ColOnMd": "pf-m-11-col-on-md",
      "12ColOnMd": "pf-m-12-col-on-md",
      offset_1ColOnMd: "pf-m-offset-1-col-on-md",
      offset_2ColOnMd: "pf-m-offset-2-col-on-md",
      offset_3ColOnMd: "pf-m-offset-3-col-on-md",
      offset_4ColOnMd: "pf-m-offset-4-col-on-md",
      offset_5ColOnMd: "pf-m-offset-5-col-on-md",
      offset_6ColOnMd: "pf-m-offset-6-col-on-md",
      offset_7ColOnMd: "pf-m-offset-7-col-on-md",
      offset_8ColOnMd: "pf-m-offset-8-col-on-md",
      offset_9ColOnMd: "pf-m-offset-9-col-on-md",
      offset_10ColOnMd: "pf-m-offset-10-col-on-md",
      offset_11ColOnMd: "pf-m-offset-11-col-on-md",
      offset_12ColOnMd: "pf-m-offset-12-col-on-md",
      "1RowOnMd": "pf-m-1-row-on-md",
      "2RowOnMd": "pf-m-2-row-on-md",
      "3RowOnMd": "pf-m-3-row-on-md",
      "4RowOnMd": "pf-m-4-row-on-md",
      "5RowOnMd": "pf-m-5-row-on-md",
      "6RowOnMd": "pf-m-6-row-on-md",
      "7RowOnMd": "pf-m-7-row-on-md",
      "8RowOnMd": "pf-m-8-row-on-md",
      "9RowOnMd": "pf-m-9-row-on-md",
      "10RowOnMd": "pf-m-10-row-on-md",
      "11RowOnMd": "pf-m-11-row-on-md",
      "12RowOnMd": "pf-m-12-row-on-md",
      "1ColOnLg": "pf-m-1-col-on-lg",
      "2ColOnLg": "pf-m-2-col-on-lg",
      "3ColOnLg": "pf-m-3-col-on-lg",
      "4ColOnLg": "pf-m-4-col-on-lg",
      "5ColOnLg": "pf-m-5-col-on-lg",
      "6ColOnLg": "pf-m-6-col-on-lg",
      "7ColOnLg": "pf-m-7-col-on-lg",
      "8ColOnLg": "pf-m-8-col-on-lg",
      "9ColOnLg": "pf-m-9-col-on-lg",
      "10ColOnLg": "pf-m-10-col-on-lg",
      "11ColOnLg": "pf-m-11-col-on-lg",
      "12ColOnLg": "pf-m-12-col-on-lg",
      offset_1ColOnLg: "pf-m-offset-1-col-on-lg",
      offset_2ColOnLg: "pf-m-offset-2-col-on-lg",
      offset_3ColOnLg: "pf-m-offset-3-col-on-lg",
      offset_4ColOnLg: "pf-m-offset-4-col-on-lg",
      offset_5ColOnLg: "pf-m-offset-5-col-on-lg",
      offset_6ColOnLg: "pf-m-offset-6-col-on-lg",
      offset_7ColOnLg: "pf-m-offset-7-col-on-lg",
      offset_8ColOnLg: "pf-m-offset-8-col-on-lg",
      offset_9ColOnLg: "pf-m-offset-9-col-on-lg",
      offset_10ColOnLg: "pf-m-offset-10-col-on-lg",
      offset_11ColOnLg: "pf-m-offset-11-col-on-lg",
      offset_12ColOnLg: "pf-m-offset-12-col-on-lg",
      "1RowOnLg": "pf-m-1-row-on-lg",
      "2RowOnLg": "pf-m-2-row-on-lg",
      "3RowOnLg": "pf-m-3-row-on-lg",
      "4RowOnLg": "pf-m-4-row-on-lg",
      "5RowOnLg": "pf-m-5-row-on-lg",
      "6RowOnLg": "pf-m-6-row-on-lg",
      "7RowOnLg": "pf-m-7-row-on-lg",
      "8RowOnLg": "pf-m-8-row-on-lg",
      "9RowOnLg": "pf-m-9-row-on-lg",
      "10RowOnLg": "pf-m-10-row-on-lg",
      "11RowOnLg": "pf-m-11-row-on-lg",
      "12RowOnLg": "pf-m-12-row-on-lg",
      "1ColOnXl": "pf-m-1-col-on-xl",
      "2ColOnXl": "pf-m-2-col-on-xl",
      "3ColOnXl": "pf-m-3-col-on-xl",
      "4ColOnXl": "pf-m-4-col-on-xl",
      "5ColOnXl": "pf-m-5-col-on-xl",
      "6ColOnXl": "pf-m-6-col-on-xl",
      "7ColOnXl": "pf-m-7-col-on-xl",
      "8ColOnXl": "pf-m-8-col-on-xl",
      "9ColOnXl": "pf-m-9-col-on-xl",
      "10ColOnXl": "pf-m-10-col-on-xl",
      "11ColOnXl": "pf-m-11-col-on-xl",
      "12ColOnXl": "pf-m-12-col-on-xl",
      offset_1ColOnXl: "pf-m-offset-1-col-on-xl",
      offset_2ColOnXl: "pf-m-offset-2-col-on-xl",
      offset_3ColOnXl: "pf-m-offset-3-col-on-xl",
      offset_4ColOnXl: "pf-m-offset-4-col-on-xl",
      offset_5ColOnXl: "pf-m-offset-5-col-on-xl",
      offset_6ColOnXl: "pf-m-offset-6-col-on-xl",
      offset_7ColOnXl: "pf-m-offset-7-col-on-xl",
      offset_8ColOnXl: "pf-m-offset-8-col-on-xl",
      offset_9ColOnXl: "pf-m-offset-9-col-on-xl",
      offset_10ColOnXl: "pf-m-offset-10-col-on-xl",
      offset_11ColOnXl: "pf-m-offset-11-col-on-xl",
      offset_12ColOnXl: "pf-m-offset-12-col-on-xl",
      "1RowOnXl": "pf-m-1-row-on-xl",
      "2RowOnXl": "pf-m-2-row-on-xl",
      "3RowOnXl": "pf-m-3-row-on-xl",
      "4RowOnXl": "pf-m-4-row-on-xl",
      "5RowOnXl": "pf-m-5-row-on-xl",
      "6RowOnXl": "pf-m-6-row-on-xl",
      "7RowOnXl": "pf-m-7-row-on-xl",
      "8RowOnXl": "pf-m-8-row-on-xl",
      "9RowOnXl": "pf-m-9-row-on-xl",
      "10RowOnXl": "pf-m-10-row-on-xl",
      "11RowOnXl": "pf-m-11-row-on-xl",
      "12RowOnXl": "pf-m-12-row-on-xl",
      "1ColOn_2xl": "pf-m-1-col-on-2xl",
      "2ColOn_2xl": "pf-m-2-col-on-2xl",
      "3ColOn_2xl": "pf-m-3-col-on-2xl",
      "4ColOn_2xl": "pf-m-4-col-on-2xl",
      "5ColOn_2xl": "pf-m-5-col-on-2xl",
      "6ColOn_2xl": "pf-m-6-col-on-2xl",
      "7ColOn_2xl": "pf-m-7-col-on-2xl",
      "8ColOn_2xl": "pf-m-8-col-on-2xl",
      "9ColOn_2xl": "pf-m-9-col-on-2xl",
      "10ColOn_2xl": "pf-m-10-col-on-2xl",
      "11ColOn_2xl": "pf-m-11-col-on-2xl",
      "12ColOn_2xl": "pf-m-12-col-on-2xl",
      offset_1ColOn_2xl: "pf-m-offset-1-col-on-2xl",
      offset_2ColOn_2xl: "pf-m-offset-2-col-on-2xl",
      offset_3ColOn_2xl: "pf-m-offset-3-col-on-2xl",
      offset_4ColOn_2xl: "pf-m-offset-4-col-on-2xl",
      offset_5ColOn_2xl: "pf-m-offset-5-col-on-2xl",
      offset_6ColOn_2xl: "pf-m-offset-6-col-on-2xl",
      offset_7ColOn_2xl: "pf-m-offset-7-col-on-2xl",
      offset_8ColOn_2xl: "pf-m-offset-8-col-on-2xl",
      offset_9ColOn_2xl: "pf-m-offset-9-col-on-2xl",
      offset_10ColOn_2xl: "pf-m-offset-10-col-on-2xl",
      offset_11ColOn_2xl: "pf-m-offset-11-col-on-2xl",
      offset_12ColOn_2xl: "pf-m-offset-12-col-on-2xl",
      "1RowOn_2xl": "pf-m-1-row-on-2xl",
      "2RowOn_2xl": "pf-m-2-row-on-2xl",
      "3RowOn_2xl": "pf-m-3-row-on-2xl",
      "4RowOn_2xl": "pf-m-4-row-on-2xl",
      "5RowOn_2xl": "pf-m-5-row-on-2xl",
      "6RowOn_2xl": "pf-m-6-row-on-2xl",
      "7RowOn_2xl": "pf-m-7-row-on-2xl",
      "8RowOn_2xl": "pf-m-8-row-on-2xl",
      "9RowOn_2xl": "pf-m-9-row-on-2xl",
      "10RowOn_2xl": "pf-m-10-row-on-2xl",
      "11RowOn_2xl": "pf-m-11-row-on-2xl",
      "12RowOn_2xl": "pf-m-12-row-on-2xl",
      gutter: "pf-m-gutter"
    }
  };
  var Ma;
  (function(e) {
    e.xs = "xs", e.sm = "sm", e.md = "md", e.lg = "lg", e.xl = "xl", e["2xl"] = "2xl", e["3xl"] = "3xl", e["4xl"] = "4xl";
  })(Ma || (Ma = {}));
  var Ii;
  (function(e) {
    e.sm = "Sm", e.md = "Md", e.lg = "Lg", e.xl = "Xl", e.xl2 = "_2xl";
  })(Ii || (Ii = {}));
  const Gs = {
    name: "--pf-v6-l-grid--item--Order"
  }, Ys = (e) => {
    var { children: t = null, className: n = "", component: i = "div", hasGutter: r, span: o = null, order: a, style: l } = e, c = K(e, [
      "children",
      "className",
      "component",
      "hasGutter",
      "span",
      "order",
      "style"
    ]);
    const s = [
      pt.grid,
      o && pt.modifiers[`all_${o}Col`]
    ], u = i;
    return Object.entries(Ii).forEach(([p, f]) => {
      const d = p, x = c[d];
      x && s.push(pt.modifiers[`all_${x}ColOn${f}`]), delete c[d];
    }), m.jsx(u, Object.assign({
      className: E(...s, r && pt.modifiers.gutter, n),
      style: l || a ? Object.assign(Object.assign({}, l), Ml(a, Gs.name)) : void 0
    }, c, {
      children: t
    }));
  };
  Ys.displayName = "Grid";
  const Yr = (e) => {
    var { children: t = null, className: n = "", component: i = "div", span: r = null, rowSpan: o = null, offset: a = null, order: l, style: c } = e, s = K(e, [
      "children",
      "className",
      "component",
      "span",
      "rowSpan",
      "offset",
      "order",
      "style"
    ]);
    const u = [
      pt.gridItem,
      r && pt.modifiers[`${r}Col`],
      o && pt.modifiers[`${o}Row`],
      a && pt.modifiers[`offset_${a}Col`]
    ], p = i;
    return Object.entries(Ii).forEach(([f, d]) => {
      const x = f, v = `${x}RowSpan`, C = `${x}Offset`, k = s[x], j = s[v], I = s[C];
      k && u.push(pt.modifiers[`${k}ColOn${d}`]), j && u.push(pt.modifiers[`${j}RowOn${d}`]), I && u.push(pt.modifiers[`offset_${I}ColOn${d}`]), delete s[x], delete s[v], delete s[C];
    }), m.jsx(p, Object.assign({
      className: E(...u, n),
      style: c || l ? Object.assign(Object.assign({}, c), Ml(l, Gs.name)) : void 0
    }, s, {
      children: t
    }));
  };
  Yr.displayName = "GridItem";
  const Ra = {
    modifiers: {
      gutter: "pf-m-gutter"
    },
    stack: "pf-v6-l-stack"
  }, Pi = (e) => {
    var { hasGutter: t = false, className: n = "", children: i = null, component: r = "div" } = e, o = K(e, [
      "hasGutter",
      "className",
      "children",
      "component"
    ]);
    const a = r;
    return m.jsx(a, Object.assign({}, o, {
      className: E(Ra.stack, t && Ra.modifiers.gutter, n),
      children: i
    }));
  };
  Pi.displayName = "Stack";
  function jt() {
    return jt = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) ({}).hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
      return e;
    }, jt.apply(null, arguments);
  }
  function Gf(e) {
    var t = 0, n = e.children, i = n && n.length;
    if (!i) t = 1;
    else for (; --i >= 0; ) t += n[i].value;
    e.value = t;
  }
  function Yf() {
    return this.eachAfter(Gf);
  }
  function Qf(e, t) {
    let n = -1;
    for (const i of this) e.call(t, i, ++n, this);
    return this;
  }
  function Jf(e, t) {
    for (var n = this, i = [
      n
    ], r, o, a = -1; n = i.pop(); ) if (e.call(t, n, ++a, this), r = n.children) for (o = r.length - 1; o >= 0; --o) i.push(r[o]);
    return this;
  }
  function Zf(e, t) {
    for (var n = this, i = [
      n
    ], r = [], o, a, l, c = -1; n = i.pop(); ) if (r.push(n), o = n.children) for (a = 0, l = o.length; a < l; ++a) i.push(o[a]);
    for (; n = r.pop(); ) e.call(t, n, ++c, this);
    return this;
  }
  function em(e, t) {
    let n = -1;
    for (const i of this) if (e.call(t, i, ++n, this)) return i;
  }
  function tm(e) {
    return this.eachAfter(function(t) {
      for (var n = +e(t.data) || 0, i = t.children, r = i && i.length; --r >= 0; ) n += i[r].value;
      t.value = n;
    });
  }
  function nm(e) {
    return this.eachBefore(function(t) {
      t.children && t.children.sort(e);
    });
  }
  function im(e) {
    for (var t = this, n = rm(t, e), i = [
      t
    ]; t !== n; ) t = t.parent, i.push(t);
    for (var r = i.length; e !== n; ) i.splice(r, 0, e), e = e.parent;
    return i;
  }
  function rm(e, t) {
    if (e === t) return e;
    var n = e.ancestors(), i = t.ancestors(), r = null;
    for (e = n.pop(), t = i.pop(); e === t; ) r = e, e = n.pop(), t = i.pop();
    return r;
  }
  function om() {
    for (var e = this, t = [
      e
    ]; e = e.parent; ) t.push(e);
    return t;
  }
  function am() {
    return Array.from(this);
  }
  function lm() {
    var e = [];
    return this.eachBefore(function(t) {
      t.children || e.push(t);
    }), e;
  }
  function sm() {
    var e = this, t = [];
    return e.each(function(n) {
      n !== e && t.push({
        source: n.parent,
        target: n
      });
    }), t;
  }
  function* cm() {
    var e = this, t, n = [
      e
    ], i, r, o;
    do
      for (t = n.reverse(), n = []; e = t.pop(); ) if (yield e, i = e.children) for (r = 0, o = i.length; r < o; ++r) n.push(i[r]);
    while (n.length);
  }
  function Po(e, t) {
    e instanceof Map ? (e = [
      void 0,
      e
    ], t === void 0 && (t = dm)) : t === void 0 && (t = pm);
    for (var n = new $n(e), i, r = [
      n
    ], o, a, l, c; i = r.pop(); ) if ((a = t(i.data)) && (c = (a = Array.from(a)).length)) for (i.children = a, l = c - 1; l >= 0; --l) r.push(o = a[l] = new $n(a[l])), o.parent = i, o.depth = i.depth + 1;
    return n.eachBefore(mm);
  }
  function um() {
    return Po(this).eachBefore(fm);
  }
  function pm(e) {
    return e.children;
  }
  function dm(e) {
    return Array.isArray(e) ? e[1] : null;
  }
  function fm(e) {
    e.data.value !== void 0 && (e.value = e.data.value), e.data = e.data.data;
  }
  function mm(e) {
    var t = 0;
    do
      e.height = t;
    while ((e = e.parent) && e.height < ++t);
  }
  function $n(e) {
    this.data = e, this.depth = this.height = 0, this.parent = null;
  }
  $n.prototype = Po.prototype = {
    constructor: $n,
    count: Yf,
    each: Qf,
    eachAfter: Zf,
    eachBefore: Jf,
    find: em,
    sum: tm,
    sort: nm,
    path: im,
    ancestors: om,
    descendants: am,
    leaves: lm,
    links: sm,
    copy: um,
    [Symbol.iterator]: cm
  };
  function hm(e, t) {
    return e.parent === t.parent ? 1 : 2;
  }
  function ur(e) {
    var t = e.children;
    return t ? t[0] : e.t;
  }
  function pr(e) {
    var t = e.children;
    return t ? t[t.length - 1] : e.t;
  }
  function gm(e, t, n) {
    var i = n / (t.i - e.i);
    t.c -= i, t.s += n, e.c += i, t.z += n, t.m += n;
  }
  function xm(e) {
    for (var t = 0, n = 0, i = e.children, r = i.length, o; --r >= 0; ) o = i[r], o.z += t, o.m += t, t += o.s + (n += o.c);
  }
  function vm(e, t, n) {
    return e.a.parent === t.parent ? e.a : n;
  }
  function gi(e, t) {
    this._ = e, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = t;
  }
  gi.prototype = Object.create($n.prototype);
  function bm(e) {
    for (var t = new gi(e, 0), n, i = [
      t
    ], r, o, a, l; n = i.pop(); ) if (o = n._.children) for (n.children = new Array(l = o.length), a = l - 1; a >= 0; --a) i.push(r = n.children[a] = new gi(o[a], a)), r.parent = n;
    return (t.parent = new gi(null, 0)).children = [
      t
    ], t;
  }
  function ym() {
    var e = hm, t = 1, n = 1, i = null;
    function r(s) {
      var u = bm(s);
      if (u.eachAfter(o), u.parent.m = -u.z, u.eachBefore(a), i) s.eachBefore(c);
      else {
        var p = s, f = s, d = s;
        s.eachBefore(function(j) {
          j.x < p.x && (p = j), j.x > f.x && (f = j), j.depth > d.depth && (d = j);
        });
        var x = p === f ? 1 : e(p, f) / 2, v = x - p.x, C = t / (f.x + x + v), k = n / (d.depth || 1);
        s.eachBefore(function(j) {
          j.x = (j.x + v) * C, j.y = j.depth * k;
        });
      }
      return s;
    }
    function o(s) {
      var u = s.children, p = s.parent.children, f = s.i ? p[s.i - 1] : null;
      if (u) {
        xm(s);
        var d = (u[0].z + u[u.length - 1].z) / 2;
        f ? (s.z = f.z + e(s._, f._), s.m = s.z - d) : s.z = d;
      } else f && (s.z = f.z + e(s._, f._));
      s.parent.A = l(s, f, s.parent.A || p[0]);
    }
    function a(s) {
      s._.x = s.z + s.parent.m, s.m += s.parent.m;
    }
    function l(s, u, p) {
      if (u) {
        for (var f = s, d = s, x = u, v = f.parent.children[0], C = f.m, k = d.m, j = x.m, I = v.m, R; x = pr(x), f = ur(f), x && f; ) v = ur(v), d = pr(d), d.a = s, R = x.z + j - f.z - C + e(x._, f._), R > 0 && (gm(vm(x, s, p), s, R), C += R, k += R), j += x.m, C += f.m, I += v.m, k += d.m;
        x && !pr(d) && (d.t = x, d.m += j - k), f && !ur(v) && (v.t = f, v.m += C - I, p = s);
      }
      return p;
    }
    function c(s) {
      s.x *= t, s.y = s.depth * n;
    }
    return r.separation = function(s) {
      return arguments.length ? (e = s, r) : e;
    }, r.size = function(s) {
      return arguments.length ? (i = false, t = +s[0], n = +s[1], r) : i ? null : [
        t,
        n
      ];
    }, r.nodeSize = function(s) {
      return arguments.length ? (i = true, t = +s[0], n = +s[1], r) : i ? [
        t,
        n
      ] : null;
    }, r;
  }
  function wm(e) {
    const t = e.margins || {
      bottom: 10,
      left: e.direction !== "rtl" ? 20 : 150,
      right: e.direction !== "rtl" ? 150 : 20,
      top: 10
    }, n = e.width - t.left - t.right, i = e.height - t.top - t.bottom, r = Po(e.data, e.getChildren), o = ym().size([
      i,
      n
    ])(r), a = o.links().map((c) => ({
      ...c,
      source: {
        ...c.source,
        x: e.direction !== "rtl" ? c.source.y : n - c.source.y,
        y: c.source.x
      },
      target: {
        ...c.target,
        x: e.direction !== "rtl" ? c.target.y : n - c.target.y,
        y: c.target.x
      }
    })), l = o.descendants().map((c) => ({
      ...c,
      x: e.direction !== "rtl" ? c.y : n - c.y,
      y: c.x
    }));
    return {
      links: a,
      margins: t,
      nodes: l
    };
  }
  const km = /on[A-Z]/;
  function Cm(e, t) {
    return (n) => e(n, ...t);
  }
  function xi(e, ...t) {
    const i = Object.keys(e).filter((r) => km.test(r) && typeof e[r] == "function").reduce((r, o) => (r[o] = Cm(e[o], t), r), {});
    return {
      ...e,
      ...i
    };
  }
  function Om(e, t, n, i) {
    return `M${e},${t}C${(e + n) / 2},${t} ${(e + n) / 2},${i} ${n},${i}`;
  }
  function Sm(e) {
    const t = xi(e.pathProps, e.source.data[e.keyProp], e.target.data[e.keyProp]), i = (e.pathFunc || Om)(e.x1, e.y1, e.x2, e.y2);
    return Ke.createElement("path", jt({}, t, {
      d: i
    }));
  }
  function _m(e) {
    function t() {
      return `translate(${e.x}, ${e.y})`;
    }
    let n = 0.5, i = e.nodeProps;
    switch (e.shape) {
      case "circle":
        i = {
          r: 5,
          ...i
        }, n += i.r;
        break;
      case "image":
      case "rect":
        i = {
          height: 10,
          width: 10,
          ...i
        }, i = {
          x: -i.width / 2,
          y: -i.height / 2,
          ...i
        }, n += i.width / 2;
        break;
    }
    e.direction === "rtl" && (n = -n);
    const r = xi(i, e[e.keyProp]), o = xi(e.gProps, e[e.keyProp]), a = xi(e.textProps, e[e.keyProp]), l = typeof e[e.labelProp] == "string" ? Ke.createElement("text", jt({
      dx: n,
      dy: 5
    }, a), e[e.labelProp]) : Ke.createElement("g", jt({
      transform: `translate(${n}, 5)`
    }, a), e[e.labelProp]);
    return Ke.createElement("g", jt({}, o, {
      transform: t(),
      direction: e.direction === "rtl" ? "rtl" : null
    }), Ke.createElement(e.shape, r), l);
  }
  function jm(e) {
    return Ke.createElement("svg", jt({}, e.svgProps, {
      height: e.height,
      width: e.width
    }), e.children, Ke.createElement("g", {
      transform: `translate(${e.margins.left}, ${e.margins.top})`
    }, e.links.map((t) => Ke.createElement(Sm, {
      key: t.target.data[e.keyProp],
      keyProp: e.keyProp,
      pathFunc: e.pathFunc,
      source: t.source,
      target: t.target,
      x1: t.source.x,
      x2: t.target.x,
      y1: t.source.y,
      y2: t.target.y,
      pathProps: {
        ...e.pathProps,
        ...t.target.data.pathProps
      }
    })), e.nodes.map((t) => Ke.createElement(_m, jt({
      key: t.data[e.keyProp],
      keyProp: e.keyProp,
      labelProp: e.labelProp,
      direction: e.direction,
      shape: e.nodeShape,
      x: t.x,
      y: t.y
    }, t.data, {
      nodeProps: {
        ...e.nodeProps,
        ...t.data.nodeProps
      },
      gProps: {
        ...e.gProps,
        ...t.data.gProps
      },
      textProps: {
        ...e.textProps,
        ...t.data.textProps
      }
    })))));
  }
  function Em(e) {
    const t = {
      direction: "ltr",
      getChildren: (n) => n.children,
      keyProp: "name",
      labelProp: "name",
      nodeShape: "circle",
      nodeProps: {},
      gProps: {},
      pathProps: {},
      svgProps: {},
      textProps: {},
      ...e
    };
    return Ke.createElement(jm, jt({
      getChildren: t.getChildren,
      direction: t.direction,
      height: t.height,
      keyProp: t.keyProp,
      labelProp: t.labelProp,
      nodeShape: t.nodeShape,
      nodeProps: t.nodeProps,
      pathFunc: t.pathFunc,
      width: t.width,
      gProps: {
        className: "node",
        ...t.gProps
      },
      pathProps: {
        className: "link",
        ...t.pathProps
      },
      svgProps: t.svgProps,
      textProps: t.textProps
    }, wm(t)), t.children);
  }
  const rn = 18;
  function Xt(e, t, n = []) {
    return {
      label: t,
      name: e + "." + t,
      labelProp: "label",
      children: n,
      gProps: {
        className: "node spnl-node spnl-node-" + (t === "+" ? "plus" : t)
      }
    };
  }
  function bn(e, t = "root") {
    return Ai(e).with({
      user: Ne.string
    }, () => [
      Xt(t, "U")
    ]).with({
      assistant: Ne.string
    }, () => [
      Xt(t, "A")
    ]).with({
      system: Ne.string
    }, () => [
      Xt(t, "S")
    ]).with({
      g: {
        input: Ne._
      }
    }, ({ g: { input: n } }) => [
      Xt(t, "G", bn(n, t + ".G"))
    ]).with({
      print: Ne._
    }, () => []).with({
      repeat: {
        n: Ne.number,
        query: Ne._
      }
    }, ({ repeat: n }) => Array(n.n).fill(0).flatMap((i, r) => bn(n.query, t + "." + r))).with({
      cross: Ne.array()
    }, ({ cross: n }) => [
      Xt(t, "X", n.flatMap((i, r) => bn(i, t + ".X+" + r)))
    ]).with({
      plus: Ne.array()
    }, ({ plus: n }) => [
      Xt(t, "+", n.flatMap((i, r) => bn(i, t + ".+" + r)))
    ]).exhaustive();
  }
  const Im = {
    width: rn,
    height: rn
  }, Pm = {
    dx: -rn / 4 + 0.25,
    dy: rn / 4 + 0.25
  };
  function Tm(e) {
    const t = b.useMemo(() => e.unit ? bn(e.unit)[0] : null, [
      e.unit
    ]);
    return t ? m.jsx(Em, {
      data: t,
      margins: {
        bottom: 0,
        left: rn,
        top: 0,
        right: rn
      },
      height: 800,
      width: 400,
      nodeShape: "rect",
      nodeProps: Im,
      textProps: Pm
    }, JSON.stringify(t)) : m.jsx(m.Fragment, {});
  }
  function Nm({ unit: e }) {
    const t = b.useMemo(() => ({
      actions: m.jsx(qc, {
        to: "/",
        search: {
          qv: false
        },
        children: m.jsx(st, {
          variant: "plain",
          icon: m.jsx(Xl, {})
        })
      })
    }), []);
    return m.jsxs(_o, {
      isPlain: true,
      isLarge: true,
      children: [
        m.jsx(cs, {
          actions: t,
          children: m.jsx(os, {
            children: "Query Viewer"
          })
        }),
        m.jsx(ys, {}),
        m.jsx(rs, {
          children: e && m.jsx(Tm, {
            unit: e
          })
        })
      ]
    });
  }
  const Mm = {
    name: "TerminalIcon",
    height: 512,
    width: 640,
    svgPath: "M257.981 272.971L63.638 467.314c-9.373 9.373-24.569 9.373-33.941 0L7.029 444.647c-9.357-9.357-9.375-24.522-.04-33.901L161.011 256 6.99 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L257.981 239.03c9.373 9.372 9.373 24.568 0 33.941zM640 456v-32c0-13.255-10.745-24-24-24H312c-13.255 0-24 10.745-24 24v32c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24z",
    yOffset: 0,
    xOffset: 0
  }, Rm = Fe(Mm);
  function Am(e) {
    return m.jsx("div", {
      className: "pf-v6-c-code-editor__header",
      children: m.jsxs("div", {
        className: "pf-v6-c-code-editor__header-content",
        children: [
          m.jsx("div", {
            className: "pf-v6-c-code-editor__controls",
            children: m.jsx(st, {
              icon: m.jsx(Rm, {}),
              variant: "plain"
            })
          }),
          m.jsx("div", {
            className: "pf-v6-c-code-editor__header-main",
            children: e.title
          })
        ]
      })
    });
  }
  const Dm = `{
  "g": {
    "model": "{model}",
    "input": {
      "cross": [
        {
          "system": "You compute an evaluation score from 0 to 100 that ranks given candidate introductory emails. Better emails are ones that mention specifics, such as names of people and companies. You present a list of the top 3 ordered by their rank showing the score and full content of each."
        },
        {
          "print": "Generate {n} candidate emails in parallel"
        },
        {
          "plus": [
            {
              "repeat": {
                "n": "{n}",
                "query": {
                  "g": {
                    "model": "{model}",
                    "input": {
                      "user": "write an introductory email for a job application, limited to at most {max_tokens} characters."
                    },
                    "max_tokens": "{max_tokens}",
                    "temperature": "{temperature}"
                  }
                }
              }
            }
          ]
        },
        {
          "print": "Ask the model to select the best option from the candidates"
        },
        {
          "user": "My name is Shiloh. I am a data scientist with 10 years of experience and need an introductory email to apply for a position at IBM in their research department"
        }
      ]
    }
  }
}
`, Lm = `{
  "g": {
    "model": "{model}",
    "input": {
      "cross": [
        {
          "system": "You compute an evaluation score from 0 to 100 that ranks given candidate introductory emails. Better emails are ones that mention specifics, such as names of people and companies. You present a list of the top 3 ordered by their rank showing the score and full content of each."
        },
        {
          "print": "Generate {n} candidate emails in parallel"
        },
        {
          "plus": [
            {
              "repeat": {
                "n": "{n}",
                "query": {
                  "g": {
                    "model": "{model}",
                    "input": {
                      "cross": [
                        {
                          "system": "You compute an evaluation score from 0 to 100 that ranks given candidate introductory emails. Better emails are ones that mention specifics, such as names of people and companies. You present a list of the top 3 ordered by their rank showing the score and full content of each."
                        },
                        {
                          "user": "write an introductory email for a job application, limited to at most 100 characters."
                        },
                        {
                          "user": "My name is Shiloh. I am a data scientist with 10 years of experience and need an introductory email to apply for a position at IBM in their research department"
                        }
                      ]
                    },
                    "max_tokens": "{max_tokens}",
                    "temperature": "{temperature}"
                  }
                }
              }
            }
          ]
        }
      ]
    }
  }
}
`, Fm = `{
  "g": {
    "model": "{model}",
    "input": {
      "cross": [
        {
          "system": "You are an email coach presented with a set of candidate emails. Your job is to think carefully and assign a single score to each email from 0 to 100 based on whether an email conforms to a list of policies. Your only output should be a list of the top 3 ordered by the computed score. The list should show the score and always present full content of each.\\n\\nFor any policies related to counting and numbers, manually do the counting, listing each item as part of your reasoning. Also, if the policy is about subject line, greetings, or email body, then only focus on that part of the email.\\n\\nHere are the policies, in YAML format:\\n\\n\`\`\`yaml\\npolicies:\\n  - policy_statement: |\\n      In the subject line do not use ? or Commas or numbers or You or Your\\n    policy_id: subject_restricted_words\\n  - policy_statement: |\\n      Subject line: Avoid influence and persuasion i.e. exclusive, urgency words like limited, Hyperbole 'fantastics'\\n    policy_id: subject_no_influence\\n  - policy_statement: |\\n      Subject line: Asteriks, exclamation points are OK\\n    policy_id: subject_asterisks\\n  - policy_statement: |\\n      Subject line: Use neutral tones\\n    policy_id: subject_neutral\\n  - policy_statement: |\\n      Subject line: Better to mention our company to recipients\\n    policy_id: subject_company\\n  - policy_statement: |\\n      Subject line: Should be 1 to 4 words\\n    policy_id: subject_length\\n\\n  - policy_statement: |\\n      Greeting: Salutations - 'Hello','Hi' or 'Hey' works\\n    policy_id: greeting_salutations\\n  - policy_statement: |\\n      Greeting: After Salutations, include firstname only if the user provides, else use '[First Name]'\\n    policy_id: greeting_name\\n  - policy_statement: |\\n      Greeting: Flattery remains effective, use 'Congrats' or 'Congratulations' if applicable\\n    policy_id: greeting_flattery\\n  - policy_statement: |\\n      Email body: Do not use emojis or bullets or dashes\\n    policy_id: body_restricted_words\\n  - policy_statement: |\\n      Email body: Always include the data user asked for to the maximum extent, if it is present in the context\\n    policy_id: body_user_data\\n  - policy_statement: |\\n      Email body: Always Include relevant statistics or numbers in the email body, providing clear and concise context for their significance.\\n    policy_id: body_stats\\n  - policy_statement: |\\n      Email body: Minimize hyperlinks and long paragraphs\\n    policy_id: body_short\\n\\n  - policy_statement: |\\n      Signature: Best way to sign-off is 'Best, \\n [Your Signature]'\\n    policy_id: signature_best\\n  - policy_statement: |\\n      Signature: Skip P.S.\\n    policy_id: signature_no_ps\\n\`\`\`"
        },
        {
          "print": "Generate candidate emails in parallel"
        },
        {
          "plus": [
            {
              "repeat": {
                "n": "{n}",
                "query": {
                  "g": {
                    "model": "{model}",
                    "input": {
                      "cross": [
                        {
                          "system": "You are IBM Sales Assistant, an expert in writing emails for IBM sellers to help in prospecting.\\n\\nYou MUST strictly adhere to the following guidelines. Pay attention to each of the following guideline attributes. You must include all these guideline attributes in the email if mentioned below (subject, greeting, signatures, etc.) and the guideline attributes also should adhere to its list of requirements mentioned. But allow the user to override the guidelines in your response if they explicitly ask in their query. Be professional and don't use asterisks, emojis, links, or any other symbols in the email.\\n\\nThe guidelines are:\\n{guidelines}\\n\\nEmail should start with a Subject: ....\\n\\nJust give me the email text. Add a new line between each of these segments. Don't include any other words, text, or comments."
                        },
                        {
                          "user": "I am Shiloh, and am applying to IBM research for a data scientist position."
                        }
                      ]
                    },
                    "max_tokens": "{max_tokens}",
                    "temperature": "{temperature}"
                  }
                }
              }
            }
          ]
        }
      ]
    }
  }
}
`, En = [
    {
      value: "email",
      label: "Email Judge/Generator",
      description: "This demo is the simplest query, but does not generate great output",
      query: Dm.replace(/"\{n\}"/g, "4").replace(/\{n\}/g, "4").replace(/\{model\}/g, "model").replace(/\"{temperature\}"/g, "0.2").replace(/"\{max_tokens\}"/g, "100").replace(/\{max_tokens\}/g, "100")
    },
    {
      value: "email2",
      label: "Improved Email Judge/Generator",
      description: "This demo generates better output, at the expense of a more complicated query",
      query: Lm.replace(/"\{n\}"/g, "4").replace(/\{n\}/g, "4").replace(/\{model\}/g, "model").replace(/\"{temperature\}"/g, "0.2").replace(/"\{max_tokens\}"/g, "100").replace(/\{max_tokens\}/g, "100")
    },
    {
      value: "email3",
      label: "Policy-driven Email Generation",
      description: "This demonstrates using policies to guide email generation",
      query: Fm.replace(/"\{n\}"/g, "4").replace(/\{n\}/g, "4").replace(/\{model\}/g, "model").replace(/\"{temperature\}"/g, "0.2").replace(/"\{max_tokens\}"/g, "100").replace(/\{max_tokens\}/g, "100")
    }
  ];
  function zm(e) {
    const t = e.demo ?? En[0].value, n = so(), [i, r] = b.useState(false), o = () => {
      r(!i);
    }, a = (c, s) => {
      typeof s == "string" && (r(false), n({
        to: "/",
        search: {
          demo: s
        }
      }));
    }, l = (c) => m.jsx(Fn, {
      size: "sm",
      ref: c,
      onClick: o,
      isExpanded: i,
      children: (En.find((s) => s.value === t) || {}).label
    });
    return m.jsx(Ln, {
      isOpen: i,
      selected: t,
      onSelect: a,
      onOpenChange: (c) => r(c),
      toggle: l,
      shouldFocusToggleOnSelect: true,
      children: m.jsx(Co, {
        children: En.map((c) => m.jsx(Oo, {
          value: c.value,
          description: c.description,
          children: c.label
        }, c.value))
      })
    });
  }
  function Bm(e) {
    const t = e.model, n = so(), [i, r] = b.useState(false), o = () => {
      r(!i);
    }, a = (c, s) => {
      console.log("selected", s), r(false), n({
        to: "/",
        search: {
          model: s === pi[0].value ? void 0 : String(s)
        }
      });
    }, l = (c) => m.jsx(Fn, {
      size: "sm",
      ref: c,
      onClick: o,
      isExpanded: i,
      children: (pi.find((s) => s.value === t) || {}).label
    });
    return m.jsx(Ln, {
      isScrollable: true,
      isOpen: i,
      selected: t,
      onSelect: a,
      onOpenChange: (c) => r(c),
      toggle: l,
      shouldFocusToggleOnSelect: true,
      children: m.jsx(Co, {
        children: pi.map((c) => m.jsx(Oo, {
          value: c.value,
          description: c.description,
          children: c.label
        }, c.value))
      })
    });
  }
  function Hm(e) {
    return m.jsxs(Fs, {
      children: [
        m.jsx($s, {
          children: m.jsx(zs, {
            children: m.jsx(Hs, {
              children: "Span Query Playground"
            })
          })
        }),
        m.jsxs(Bs, {
          children: [
            m.jsx(zm, {
              demo: e.demo
            }),
            m.jsx(Bm, {
              demo: e.demo,
              model: e.model
            })
          ]
        })
      ]
    });
  }
  const Ue = {
    codeEditor: "pf-v6-c-code-editor",
    codeEditorCode: "pf-v6-c-code-editor__code",
    codeEditorContainer: "pf-v6-c-code-editor__container",
    codeEditorControls: "pf-v6-c-code-editor__controls",
    codeEditorHeader: "pf-v6-c-code-editor__header",
    codeEditorHeaderContent: "pf-v6-c-code-editor__header-content",
    codeEditorHeaderMain: "pf-v6-c-code-editor__header-main",
    codeEditorMain: "pf-v6-c-code-editor__main",
    codeEditorTab: "pf-v6-c-code-editor__tab",
    codeEditorTabIcon: "pf-v6-c-code-editor__tab-icon",
    codeEditorTabText: "pf-v6-c-code-editor__tab-text",
    codeEditorUpload: "pf-v6-c-code-editor__upload",
    modifiers: {
      readOnly: "pf-m-read-only",
      fullHeight: "pf-m-full-height",
      plain: "pf-m-plain",
      dragHover: "pf-m-drag-hover"
    }
  };
  function $m(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[t] = n, e;
  }
  function Aa(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t && (i = i.filter(function(r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), n.push.apply(n, i);
    }
    return n;
  }
  function Da(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2 ? Aa(Object(n), true).forEach(function(i) {
        $m(e, i, n[i]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Aa(Object(n)).forEach(function(i) {
        Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
      });
    }
    return e;
  }
  function qm(e, t) {
    if (e == null) return {};
    var n = {}, i = Object.keys(e), r, o;
    for (o = 0; o < i.length; o++) r = i[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
    return n;
  }
  function Vm(e, t) {
    if (e == null) return {};
    var n = qm(e, t), i, r;
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (r = 0; r < o.length; r++) i = o[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i]);
    }
    return n;
  }
  function Wm(e, t) {
    return Um(e) || Xm(e, t) || Km(e, t) || Gm();
  }
  function Um(e) {
    if (Array.isArray(e)) return e;
  }
  function Xm(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
      var n = [], i = true, r = false, o = void 0;
      try {
        for (var a = e[Symbol.iterator](), l; !(i = (l = a.next()).done) && (n.push(l.value), !(t && n.length === t)); i = true) ;
      } catch (c) {
        r = true, o = c;
      } finally {
        try {
          !i && a.return != null && a.return();
        } finally {
          if (r) throw o;
        }
      }
      return n;
    }
  }
  function Km(e, t) {
    if (e) {
      if (typeof e == "string") return La(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return La(e, t);
    }
  }
  function La(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i;
  }
  function Gm() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Ym(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[t] = n, e;
  }
  function Fa(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t && (i = i.filter(function(r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), n.push.apply(n, i);
    }
    return n;
  }
  function za(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2 ? Fa(Object(n), true).forEach(function(i) {
        Ym(e, i, n[i]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fa(Object(n)).forEach(function(i) {
        Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
      });
    }
    return e;
  }
  function Qm() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function(i) {
      return t.reduceRight(function(r, o) {
        return o(r);
      }, i);
    };
  }
  function yn(e) {
    return function t() {
      for (var n = this, i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
      return r.length >= e.length ? e.apply(this, r) : function() {
        for (var a = arguments.length, l = new Array(a), c = 0; c < a; c++) l[c] = arguments[c];
        return t.apply(n, [].concat(r, l));
      };
    };
  }
  function Ti(e) {
    return {}.toString.call(e).includes("Object");
  }
  function Jm(e) {
    return !Object.keys(e).length;
  }
  function qn(e) {
    return typeof e == "function";
  }
  function Zm(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function eh(e, t) {
    return Ti(t) || Rt("changeType"), Object.keys(t).some(function(n) {
      return !Zm(e, n);
    }) && Rt("changeField"), t;
  }
  function th(e) {
    qn(e) || Rt("selectorType");
  }
  function nh(e) {
    qn(e) || Ti(e) || Rt("handlerType"), Ti(e) && Object.values(e).some(function(t) {
      return !qn(t);
    }) && Rt("handlersType");
  }
  function ih(e) {
    e || Rt("initialIsRequired"), Ti(e) || Rt("initialType"), Jm(e) && Rt("initialContent");
  }
  function rh(e, t) {
    throw new Error(e[t] || e.default);
  }
  var oh = {
    initialIsRequired: "initial state is required",
    initialType: "initial state should be an object",
    initialContent: "initial state shouldn't be an empty object",
    handlerType: "handler should be an object or a function",
    handlersType: "all handlers should be a functions",
    selectorType: "selector should be a function",
    changeType: "provided value of changes should be an object",
    changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
    default: "an unknown error accured in `state-local` package"
  }, Rt = yn(rh)(oh), ai = {
    changes: eh,
    selector: th,
    handler: nh,
    initial: ih
  };
  function ah(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ai.initial(e), ai.handler(t);
    var n = {
      current: e
    }, i = yn(ch)(n, t), r = yn(sh)(n), o = yn(ai.changes)(e), a = yn(lh)(n);
    function l() {
      var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(u) {
        return u;
      };
      return ai.selector(s), s(n.current);
    }
    function c(s) {
      Qm(i, r, o, a)(s);
    }
    return [
      l,
      c
    ];
  }
  function lh(e, t) {
    return qn(t) ? t(e.current) : t;
  }
  function sh(e, t) {
    return e.current = za(za({}, e.current), t), t;
  }
  function ch(e, t, n) {
    return qn(t) ? t(e.current) : Object.keys(n).forEach(function(i) {
      var r;
      return (r = t[i]) === null || r === void 0 ? void 0 : r.call(t, e.current[i]);
    }), n;
  }
  var uh = {
    create: ah
  }, ph = {
    paths: {
      vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"
    }
  };
  function dh(e) {
    return function t() {
      for (var n = this, i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
      return r.length >= e.length ? e.apply(this, r) : function() {
        for (var a = arguments.length, l = new Array(a), c = 0; c < a; c++) l[c] = arguments[c];
        return t.apply(n, [].concat(r, l));
      };
    };
  }
  function fh(e) {
    return {}.toString.call(e).includes("Object");
  }
  function mh(e) {
    return e || Ba("configIsRequired"), fh(e) || Ba("configType"), e.urls ? (hh(), {
      paths: {
        vs: e.urls.monacoBase
      }
    }) : e;
  }
  function hh() {
    console.warn(Qs.deprecation);
  }
  function gh(e, t) {
    throw new Error(e[t] || e.default);
  }
  var Qs = {
    configIsRequired: "the configuration object is required",
    configType: "the configuration object should be an object",
    default: "an unknown error accured in `@monaco-editor/loader` package",
    deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `
  }, Ba = dh(gh)(Qs), xh = {
    config: mh
  }, vh = function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
    return function(r) {
      return n.reduceRight(function(o, a) {
        return a(o);
      }, r);
    };
  };
  function Js(e, t) {
    return Object.keys(t).forEach(function(n) {
      t[n] instanceof Object && e[n] && Object.assign(t[n], Js(e[n], t[n]));
    }), Da(Da({}, e), t);
  }
  var bh = {
    type: "cancelation",
    msg: "operation is manually canceled"
  };
  function dr(e) {
    var t = false, n = new Promise(function(i, r) {
      e.then(function(o) {
        return t ? r(bh) : i(o);
      }), e.catch(r);
    });
    return n.cancel = function() {
      return t = true;
    }, n;
  }
  var yh = uh.create({
    config: ph,
    isInitialized: false,
    resolve: null,
    reject: null,
    monaco: null
  }), Zs = Wm(yh, 2), Gn = Zs[0], qi = Zs[1];
  function wh(e) {
    var t = xh.config(e), n = t.monaco, i = Vm(t, [
      "monaco"
    ]);
    qi(function(r) {
      return {
        config: Js(r.config, i),
        monaco: n
      };
    });
  }
  function kh() {
    var e = Gn(function(t) {
      var n = t.monaco, i = t.isInitialized, r = t.resolve;
      return {
        monaco: n,
        isInitialized: i,
        resolve: r
      };
    });
    if (!e.isInitialized) {
      if (qi({
        isInitialized: true
      }), e.monaco) return e.resolve(e.monaco), dr(fr);
      if (window.monaco && window.monaco.editor) return ec(window.monaco), e.resolve(window.monaco), dr(fr);
      vh(Ch, Sh)(_h);
    }
    return dr(fr);
  }
  function Ch(e) {
    return document.body.appendChild(e);
  }
  function Oh(e) {
    var t = document.createElement("script");
    return e && (t.src = e), t;
  }
  function Sh(e) {
    var t = Gn(function(i) {
      var r = i.config, o = i.reject;
      return {
        config: r,
        reject: o
      };
    }), n = Oh("".concat(t.config.paths.vs, "/loader.js"));
    return n.onload = function() {
      return e();
    }, n.onerror = t.reject, n;
  }
  function _h() {
    var e = Gn(function(n) {
      var i = n.config, r = n.resolve, o = n.reject;
      return {
        config: i,
        resolve: r,
        reject: o
      };
    }), t = window.require;
    t.config(e.config), t([
      "vs/editor/editor.main"
    ], function(n) {
      ec(n), e.resolve(n);
    }, function(n) {
      e.reject(n);
    });
  }
  function ec(e) {
    Gn().monaco || qi({
      monaco: e
    });
  }
  function jh() {
    return Gn(function(e) {
      var t = e.monaco;
      return t;
    });
  }
  var fr = new Promise(function(e, t) {
    return qi({
      resolve: e,
      reject: t
    });
  }), tc = {
    config: wh,
    init: kh,
    __getMonacoInstance: jh
  }, Eh = {
    wrapper: {
      display: "flex",
      position: "relative",
      textAlign: "initial"
    },
    fullWidth: {
      width: "100%"
    },
    hide: {
      display: "none"
    }
  }, mr = Eh, Ih = {
    container: {
      display: "flex",
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center"
    }
  }, Ph = Ih;
  function Th({ children: e }) {
    return Ke.createElement("div", {
      style: Ph.container
    }, e);
  }
  var Nh = Th, Mh = Nh;
  function Rh({ width: e, height: t, isEditorReady: n, loading: i, _ref: r, className: o, wrapperProps: a }) {
    return Ke.createElement("section", {
      style: {
        ...mr.wrapper,
        width: e,
        height: t
      },
      ...a
    }, !n && Ke.createElement(Mh, null, i), Ke.createElement("div", {
      ref: r,
      style: {
        ...mr.fullWidth,
        ...!n && mr.hide
      },
      className: o
    }));
  }
  var Ah = Rh, nc = b.memo(Ah);
  function Dh(e) {
    b.useEffect(e, []);
  }
  var ic = Dh;
  function Lh(e, t, n = true) {
    let i = b.useRef(true);
    b.useEffect(i.current || !n ? () => {
      i.current = false;
    } : e, t);
  }
  var it = Lh;
  function In() {
  }
  function Yt(e, t, n, i) {
    return Fh(e, i) || zh(e, t, n, i);
  }
  function Fh(e, t) {
    return e.editor.getModel(rc(e, t));
  }
  function zh(e, t, n, i) {
    return e.editor.createModel(t, n, i ? rc(e, i) : void 0);
  }
  function rc(e, t) {
    return e.Uri.parse(t);
  }
  function Bh({ original: e, modified: t, language: n, originalLanguage: i, modifiedLanguage: r, originalModelPath: o, modifiedModelPath: a, keepCurrentOriginalModel: l = false, keepCurrentModifiedModel: c = false, theme: s = "light", loading: u = "Loading...", options: p = {}, height: f = "100%", width: d = "100%", className: x, wrapperProps: v = {}, beforeMount: C = In, onMount: k = In }) {
    let [j, I] = b.useState(false), [R, L] = b.useState(true), O = b.useRef(null), M = b.useRef(null), F = b.useRef(null), D = b.useRef(k), P = b.useRef(C), N = b.useRef(false);
    ic(() => {
      let S = tc.init();
      return S.then((z) => (M.current = z) && L(false)).catch((z) => (z == null ? void 0 : z.type) !== "cancelation" && console.error("Monaco initialization: error:", z)), () => O.current ? w() : S.cancel();
    }), it(() => {
      if (O.current && M.current) {
        let S = O.current.getOriginalEditor(), z = Yt(M.current, e || "", i || n || "text", o || "");
        z !== S.getModel() && S.setModel(z);
      }
    }, [
      o
    ], j), it(() => {
      if (O.current && M.current) {
        let S = O.current.getModifiedEditor(), z = Yt(M.current, t || "", r || n || "text", a || "");
        z !== S.getModel() && S.setModel(z);
      }
    }, [
      a
    ], j), it(() => {
      let S = O.current.getModifiedEditor();
      S.getOption(M.current.editor.EditorOption.readOnly) ? S.setValue(t || "") : t !== S.getValue() && (S.executeEdits("", [
        {
          range: S.getModel().getFullModelRange(),
          text: t || "",
          forceMoveMarkers: true
        }
      ]), S.pushUndoStop());
    }, [
      t
    ], j), it(() => {
      var _a2, _b2;
      (_b2 = (_a2 = O.current) == null ? void 0 : _a2.getModel()) == null ? void 0 : _b2.original.setValue(e || "");
    }, [
      e
    ], j), it(() => {
      let { original: S, modified: z } = O.current.getModel();
      M.current.editor.setModelLanguage(S, i || n || "text"), M.current.editor.setModelLanguage(z, r || n || "text");
    }, [
      n,
      i,
      r
    ], j), it(() => {
      var _a2;
      (_a2 = M.current) == null ? void 0 : _a2.editor.setTheme(s);
    }, [
      s
    ], j), it(() => {
      var _a2;
      (_a2 = O.current) == null ? void 0 : _a2.updateOptions(p);
    }, [
      p
    ], j);
    let T = b.useCallback(() => {
      var _a2;
      if (!M.current) return;
      P.current(M.current);
      let S = Yt(M.current, e || "", i || n || "text", o || ""), z = Yt(M.current, t || "", r || n || "text", a || "");
      (_a2 = O.current) == null ? void 0 : _a2.setModel({
        original: S,
        modified: z
      });
    }, [
      n,
      t,
      r,
      e,
      i,
      o,
      a
    ]), y = b.useCallback(() => {
      var _a2;
      !N.current && F.current && (O.current = M.current.editor.createDiffEditor(F.current, {
        automaticLayout: true,
        ...p
      }), T(), (_a2 = M.current) == null ? void 0 : _a2.editor.setTheme(s), I(true), N.current = true);
    }, [
      p,
      s,
      T
    ]);
    b.useEffect(() => {
      j && D.current(O.current, M.current);
    }, [
      j
    ]), b.useEffect(() => {
      !R && !j && y();
    }, [
      R,
      j,
      y
    ]);
    function w() {
      var _a2, _b2, _c2, _d2;
      let S = (_a2 = O.current) == null ? void 0 : _a2.getModel();
      l || ((_b2 = S == null ? void 0 : S.original) == null ? void 0 : _b2.dispose()), c || ((_c2 = S == null ? void 0 : S.modified) == null ? void 0 : _c2.dispose()), (_d2 = O.current) == null ? void 0 : _d2.dispose();
    }
    return Ke.createElement(nc, {
      width: d,
      height: f,
      isEditorReady: j,
      loading: u,
      _ref: F,
      className: x,
      wrapperProps: v
    });
  }
  var Hh = Bh;
  b.memo(Hh);
  function $h(e) {
    let t = b.useRef();
    return b.useEffect(() => {
      t.current = e;
    }, [
      e
    ]), t.current;
  }
  var qh = $h, li = /* @__PURE__ */ new Map();
  function Vh({ defaultValue: e, defaultLanguage: t, defaultPath: n, value: i, language: r, path: o, theme: a = "light", line: l, loading: c = "Loading...", options: s = {}, overrideServices: u = {}, saveViewState: p = true, keepCurrentModel: f = false, width: d = "100%", height: x = "100%", className: v, wrapperProps: C = {}, beforeMount: k = In, onMount: j = In, onChange: I, onValidate: R = In }) {
    let [L, O] = b.useState(false), [M, F] = b.useState(true), D = b.useRef(null), P = b.useRef(null), N = b.useRef(null), T = b.useRef(j), y = b.useRef(k), w = b.useRef(), S = b.useRef(i), z = qh(o), H = b.useRef(false), W = b.useRef(false);
    ic(() => {
      let U = tc.init();
      return U.then((Q) => (D.current = Q) && F(false)).catch((Q) => (Q == null ? void 0 : Q.type) !== "cancelation" && console.error("Monaco initialization: error:", Q)), () => P.current ? h() : U.cancel();
    }), it(() => {
      var _a2, _b2, _c2, _d2;
      let U = Yt(D.current, e || i || "", t || r || "", o || n || "");
      U !== ((_a2 = P.current) == null ? void 0 : _a2.getModel()) && (p && li.set(z, (_b2 = P.current) == null ? void 0 : _b2.saveViewState()), (_c2 = P.current) == null ? void 0 : _c2.setModel(U), p && ((_d2 = P.current) == null ? void 0 : _d2.restoreViewState(li.get(o))));
    }, [
      o
    ], L), it(() => {
      var _a2;
      (_a2 = P.current) == null ? void 0 : _a2.updateOptions(s);
    }, [
      s
    ], L), it(() => {
      !P.current || i === void 0 || (P.current.getOption(D.current.editor.EditorOption.readOnly) ? P.current.setValue(i) : i !== P.current.getValue() && (W.current = true, P.current.executeEdits("", [
        {
          range: P.current.getModel().getFullModelRange(),
          text: i,
          forceMoveMarkers: true
        }
      ]), P.current.pushUndoStop(), W.current = false));
    }, [
      i
    ], L), it(() => {
      var _a2, _b2;
      let U = (_a2 = P.current) == null ? void 0 : _a2.getModel();
      U && r && ((_b2 = D.current) == null ? void 0 : _b2.editor.setModelLanguage(U, r));
    }, [
      r
    ], L), it(() => {
      var _a2;
      l !== void 0 && ((_a2 = P.current) == null ? void 0 : _a2.revealLine(l));
    }, [
      l
    ], L), it(() => {
      var _a2;
      (_a2 = D.current) == null ? void 0 : _a2.editor.setTheme(a);
    }, [
      a
    ], L);
    let q = b.useCallback(() => {
      var _a2;
      if (!(!N.current || !D.current) && !H.current) {
        y.current(D.current);
        let U = o || n, Q = Yt(D.current, i || e || "", t || r || "", U || "");
        P.current = (_a2 = D.current) == null ? void 0 : _a2.editor.create(N.current, {
          model: Q,
          automaticLayout: true,
          ...s
        }, u), p && P.current.restoreViewState(li.get(U)), D.current.editor.setTheme(a), l !== void 0 && P.current.revealLine(l), O(true), H.current = true;
      }
    }, [
      e,
      t,
      n,
      i,
      r,
      o,
      s,
      u,
      p,
      a,
      l
    ]);
    b.useEffect(() => {
      L && T.current(P.current, D.current);
    }, [
      L
    ]), b.useEffect(() => {
      !M && !L && q();
    }, [
      M,
      L,
      q
    ]), S.current = i, b.useEffect(() => {
      var _a2, _b2;
      L && I && ((_a2 = w.current) == null ? void 0 : _a2.dispose(), w.current = (_b2 = P.current) == null ? void 0 : _b2.onDidChangeModelContent((U) => {
        W.current || I(P.current.getValue(), U);
      }));
    }, [
      L,
      I
    ]), b.useEffect(() => {
      if (L) {
        let U = D.current.editor.onDidChangeMarkers((Q) => {
          var _a2;
          let g = (_a2 = P.current.getModel()) == null ? void 0 : _a2.uri;
          if (g && Q.find((G) => G.path === g.path)) {
            let G = D.current.editor.getModelMarkers({
              resource: g
            });
            R == null ? void 0 : R(G);
          }
        });
        return () => {
          U == null ? void 0 : U.dispose();
        };
      }
      return () => {
      };
    }, [
      L,
      R
    ]);
    function h() {
      var _a2, _b2;
      (_a2 = w.current) == null ? void 0 : _a2.dispose(), f ? p && li.set(o, P.current.saveViewState()) : (_b2 = P.current.getModel()) == null ? void 0 : _b2.dispose(), P.current.dispose();
    }
    return Ke.createElement(nc, {
      width: d,
      height: x,
      isEditorReady: L,
      loading: c,
      _ref: N,
      className: v,
      wrapperProps: C
    });
  }
  var Wh = Vh, Uh = b.memo(Wh), Xh = Uh;
  const Kh = {
    name: "UploadIcon",
    height: 512,
    width: 512,
    svgPath: "M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z",
    yOffset: 0,
    xOffset: 0
  }, Gh = Fe(Kh), Yh = {
    name: "DownloadIcon",
    height: 512,
    width: 512,
    svgPath: "M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z",
    yOffset: 0,
    xOffset: 0
  }, Qh = Fe(Yh), Jh = {
    name: "CodeIcon",
    height: 512,
    width: 640,
    svgPath: "M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z",
    yOffset: 0,
    xOffset: 0
  }, hr = Fe(Jh), Zh = {
    name: "HelpIcon",
    height: 1024,
    width: 1024,
    svgPath: "M521.3,576 C627.5,576 713.7,502 713.7,413.7 C713.7,325.4 627.6,253.6 521.3,253.6 C366,253.6 334.5,337.7 329.2,407.2 C329.2,414.3 335.2,416 343.5,416 L445,416 C450.5,416 458,415.5 460.8,406.5 C460.8,362.6 582.9,357.1 582.9,413.6 C582.9,441.9 556.2,470.9 521.3,473 C486.4,475.1 447.3,479.8 447.3,521.7 L447.3,553.8 C447.3,570.8 456.1,576 472,576 C487.9,576 521.3,576 521.3,576 M575.3,751.3 L575.3,655.3 C575.313862,651.055109 573.620137,646.982962 570.6,644 C567.638831,640.947672 563.552355,639.247987 559.3,639.29884 L463.3,639.29884 C459.055109,639.286138 454.982962,640.979863 452,644 C448.947672,646.961169 447.247987,651.047645 447.29884,655.3 L447.29884,751.3 C447.286138,755.544891 448.979863,759.617038 452,762.6 C454.961169,765.652328 459.047645,767.352013 463.3,767.30116 L559.3,767.30116 C563.544891,767.313862 567.617038,765.620137 570.6,762.6 C573.659349,759.643612 575.360354,755.553963 575.3,751.3 M512,896 C300.2,896 128,723.9 128,512 C128,300.3 300.2,128 512,128 C723.8,128 896,300.2 896,512 C896,723.8 723.7,896 512,896 M512.1,0 C229.7,0 0,229.8 0,512 C0,794.2 229.8,1024 512.1,1024 C794.4,1024 1024,794.3 1024,512 C1024,229.7 794.4,0 512.1,0",
    yOffset: 0,
    xOffset: 0
  }, eg = Fe(Zh), oc = b.createContext(null), Qt = (e) => {
    var { icon: t, className: n, "aria-label": i, onClick: r = () => {
    }, isVisible: o = true, tooltipProps: a = {} } = e, l = K(e, [
      "icon",
      "className",
      "aria-label",
      "onClick",
      "isVisible",
      "tooltipProps"
    ]);
    const c = b.useContext(oc), s = (u) => {
      r(c.code, u);
    };
    return o ? m.jsx(Bi, Object.assign({}, a, {
      children: m.jsx(st, Object.assign({
        className: n,
        onClick: s,
        variant: "plain",
        "aria-label": i
      }, l, {
        icon: t
      }))
    })) : null;
  };
  Qt.displayName = "CodeEditorControl";
  var nt;
  (function(e) {
    e.abap = "abap", e.aes = "aes", e.apex = "apex", e.azcli = "azcli", e.bat = "bat", e.bicep = "bicep", e.c = "c", e.cameligo = "cameligo", e.clojure = "clojure", e.coffeescript = "coffeescript", e.cpp = "cpp", e.csharp = "csharp", e.csp = "csp", e.css = "css", e.dart = "dart", e.dockerfile = "dockerfile", e.ecl = "ecl", e.elixir = "elixir", e.fsharp = "fsharp", e.go = "go", e.graphql = "graphql", e.handlebars = "handlebars", e.hcl = "hcl", e.html = "html", e.ini = "ini", e.java = "java", e.javascript = "javascript", e.json = "json", e.julia = "julia", e.kotlin = "kotlin", e.less = "less", e.lexon = "lexon", e.liquid = "liquid", e.lua = "lua", e.m3 = "m3", e.markdown = "markdown", e.mips = "mips", e.msdax = "msdax", e.mysql = "mysql", e["objective-c"] = "objective-c", e.pascal = "pascal", e.pascaligo = "pascaligo", e.perl = "perl", e.pgsql = "pgsql", e.php = "php", e.plaintext = "plaintext", e.postiats = "postiats", e.powerquery = "powerquery", e.powershell = "powershell", e.pug = "pug", e.python = "python", e.r = "r", e.razor = "razor", e.redis = "redis", e.redshift = "redshift", e.restructuredtext = "restructuredtext", e.ruby = "ruby", e.rust = "rust", e.sb = "sb", e.scala = "scala", e.scheme = "scheme", e.scss = "scss", e.shell = "shell", e.sol = "sol", e.sql = "sql", e.st = "st", e.swift = "swift", e.systemverilog = "systemverilog", e.tcl = "tcl", e.twig = "twig", e.typescript = "typescript", e.vb = "vb", e.verilog = "verilog", e.xml = "xml", e.yaml = "yaml";
  })(nt || (nt = {}));
  const tg = (e) => {
    switch (e) {
      case nt.shell:
        return "sh";
      case nt.ruby:
        return "rb";
      case nt.perl:
        return "pl";
      case nt.python:
        return "py";
      case nt.mysql:
        return "sql";
      case nt.javascript:
        return "js";
      case nt.typescript:
        return "ts";
      case nt.markdown:
        return "md";
      case nt.plaintext:
        return "txt";
      default:
        return e.toString();
    }
  }, ng = (e, t) => {
    const n = document.createElement("a");
    n.href = URL.createObjectURL(new Blob([
      e
    ], {
      type: "text"
    })), n.download = t, n.click();
  }, ac = ({ className: e = "", code: t = "", copyButtonAriaLabel: n = "Copy code to clipboard", copyButtonSuccessTooltipText: i = "Content added to clipboard", copyButtonToolTipText: r = "Copy to clipboard", customControls: o = null, downloadButtonAriaLabel: a = "Download code", downloadButtonToolTipText: l = "Download", downloadFileName: c = Date.now().toString(), editorProps: s, emptyState: u = "", emptyStateBody: p = "Drag and drop a file or upload one.", emptyStateButton: f = "Browse", emptyStateLink: d = "Start from scratch", emptyStateTitle: x = "Start editing", headerMainContent: v = "", height: C, isCopyEnabled: k = false, isDarkTheme: j = false, isDownloadEnabled: I = false, isFullHeight: R = false, isHeaderPlain: L = false, isLanguageLabelVisible: O = false, isLineNumbersVisible: M = true, isMinimapVisible: F = false, isReadOnly: D = false, isUploadEnabled: P = false, language: N = nt.plaintext, loading: T = "", onChange: y = () => {
  }, onCodeChange: w = () => {
  }, onDownload: S = ng, onEditorDidMount: z = () => {
  }, options: H = {}, overrideServices: W = {}, shortcutsPopoverButtonText: q = "View Shortcuts", shortcutsPopoverProps: h = {
    bodyContent: "",
    "aria-label": "Keyboard Shortcuts"
  }, showEditor: U = true, toolTipCopyExitDelay: Q = 1600, toolTipDelay: g = 300, toolTipMaxWidth: G = "100px", toolTipPosition: le = "top", uploadButtonAriaLabel: ee = "Upload code", uploadButtonToolTipText: ke = "Upload", width: me = "" }) => {
    const [ve, xe] = b.useState(t), [ue, Ie] = b.useState(false), [He, $e] = b.useState(true), [qe, Pe] = b.useState(false), de = b.useRef(null), ze = b.useRef(null), Y = b.useRef(null), J = b.useRef(() => {
    }), se = () => {
      var te, he, ge;
      const Ve = (te = de.current) === null || te === void 0 ? void 0 : te.getContentHeight(), ot = (he = de.current) === null || he === void 0 ? void 0 : he.getLayoutInfo();
      (ge = de.current) === null || ge === void 0 || ge.layout({
        width: ot.width,
        height: Ve
      });
    }, _e = (te, he) => {
      C === "sizeToFit" && se(), y && y(te, he), xe(te), w(te);
    }, Ce = () => {
      de.current && (de.current.layout({
        width: 0,
        height: 0
      }), de.current.layout());
    }, V = (te) => {
      var he;
      ze.current === document.activeElement && (te.key === "ArrowDown" || te.key === " ") && ((he = de.current) === null || he === void 0 || he.focus(), te.preventDefault());
    };
    b.useEffect(() => xe(t), [
      t
    ]), b.useEffect(() => (document.addEventListener("keydown", V), J.current = Wl(Y.current, Ce, true), Ce(), () => {
      document.removeEventListener("keydown", V), J.current();
    }), []);
    const B = (te, he) => {
      te.addCommand(he.KeyMod.Shift | he.KeyCode.Tab, () => ze.current.focus()), Array.from(document.getElementsByClassName("monaco-editor")).forEach((ge) => ge.removeAttribute("role")), z(te, he), de.current = te, C === "sizeToFit" && se();
    }, _ = (te) => {
      xe(te), w(te);
    }, A = () => Ie(true), X = () => Ie(false), ne = (te) => new Promise((he, ge) => {
      const Ve = new FileReader();
      Ve.onload = () => he(Ve.result), Ve.onerror = () => ge(Ve.error), Ve.readAsText(te);
    }), pe = (te) => {
      if (te.length > 0) {
        const he = te[0];
        _(""), A(), ne(he).then((ge) => {
          X(), $e(false), _(ge);
        }).catch((ge) => {
          console.error("error", ge), X(), _("");
        });
      }
    }, Ae = (te) => {
      te.length > 0 && console.error("There was an error accepting that dropped file");
    }, Xe = () => {
      navigator.clipboard.writeText(ve), Pe(true);
    }, Z = Object.assign({
      scrollBeyondLastLine: C !== "sizeToFit",
      readOnly: D,
      cursorStyle: "line",
      lineNumbers: M ? "on" : "off",
      tabIndex: -1,
      minimap: {
        enabled: F
      }
    }, H), re = {
      position: le,
      exitDelay: g,
      entryDelay: g,
      maxWidth: G,
      trigger: "mouseenter focus"
    }, Oe = (k || I) && (!He || !!ve) || P || o || v || !!h.bodyContent;
    return m.jsx($i, {
      multiple: false,
      onDropAccepted: pe,
      onDropRejected: Ae,
      children: ({ getRootProps: te, getInputProps: he, isDragActive: ge, open: Ve }) => {
        const ot = m.jsx("input", Object.assign({}, he(), {
          hidden: true
        })), Jn = u || (P ? m.jsxs($r, {
          variant: zn.sm,
          titleText: x,
          icon: hr,
          headingLevel: "h4",
          children: [
            m.jsx(js, {
              children: p
            }),
            !D && m.jsxs(qr, {
              children: [
                m.jsx(hi, {
                  children: m.jsx(st, {
                    variant: "primary",
                    onClick: Ve,
                    children: f
                  })
                }),
                m.jsx(hi, {
                  children: m.jsx(st, {
                    variant: "link",
                    onClick: () => $e(false),
                    children: d
                  })
                })
              ]
            })
          ]
        }) : m.jsx($r, {
          variant: zn.sm,
          titleText: x,
          icon: hr,
          headingLevel: "h4",
          children: !D && m.jsx(qr, {
            children: m.jsx(hi, {
              children: m.jsx(st, {
                variant: "primary",
                onClick: () => $e(false),
                children: d
              })
            })
          })
        })), oe = m.jsxs(m.Fragment, {
          children: [
            m.jsx("div", {
              className: E(Ue.codeEditorControls),
              children: m.jsxs(oc.Provider, {
                value: {
                  code: ve
                },
                children: [
                  k && (!He || !!ve) && m.jsx(Qt, {
                    icon: m.jsx(Td, {}),
                    "aria-label": n,
                    tooltipProps: Object.assign(Object.assign({}, re), {
                      "aria-live": "polite",
                      content: m.jsx("div", {
                        children: qe ? i : r
                      }),
                      exitDelay: qe ? Q : g,
                      onTooltipHidden: () => Pe(false)
                    }),
                    onClick: Xe
                  }),
                  P && m.jsx(Qt, {
                    icon: m.jsx(Gh, {}),
                    "aria-label": ee,
                    tooltipProps: Object.assign({
                      content: m.jsx("div", {
                        children: ke
                      })
                    }, re),
                    onClick: Ve
                  }),
                  I && (!He || !!ve) && m.jsx(Qt, {
                    icon: m.jsx(Qh, {}),
                    "aria-label": a,
                    tooltipProps: Object.assign({
                      content: m.jsx("div", {
                        children: l
                      })
                    }, re),
                    onClick: () => {
                      S(ve, `${c}.${tg(N)}`);
                    }
                  }),
                  o && o
                ]
              })
            }),
            v && m.jsx("div", {
              className: E(Ue.codeEditorHeaderMain),
              children: v
            }),
            !!h.bodyContent && m.jsx("div", {
              className: `${Ue.codeEditor}__keyboard-shortcuts`,
              children: m.jsx(vs, Object.assign({}, h, {
                children: m.jsx(st, {
                  variant: vt.link,
                  icon: m.jsx(eg, {}),
                  children: q
                })
              }))
            })
          ]
        }), Te = m.jsxs("div", {
          className: E(Ue.codeEditorHeader, L && Ue.modifiers.plain),
          children: [
            Oe && m.jsx("div", {
              className: E(Ue.codeEditorHeaderContent),
              children: oe
            }),
            O && m.jsxs("div", {
              className: E(Ue.codeEditorTab),
              children: [
                m.jsx("span", {
                  className: E(Ue.codeEditorTabIcon),
                  children: m.jsx(hr, {})
                }),
                m.jsx("span", {
                  className: E(Ue.codeEditorTabText),
                  children: N.toUpperCase()
                })
              ]
            })
          ]
        }), ht = m.jsx("div", {
          className: E(Ue.codeEditorCode),
          ref: ze,
          tabIndex: 0,
          dir: "ltr",
          children: m.jsx(Xh, Object.assign({
            height: C === "100%" ? void 0 : C,
            width: me,
            language: N,
            value: ve,
            options: Z,
            overrideServices: W,
            onChange: _e,
            onMount: B,
            loading: T,
            theme: j ? "vs-dark" : "vs-light"
          }, s))
        });
        return m.jsx("div", {
          className: E(Ue.codeEditor, D && Ue.modifiers.readOnly, (C === "100%" ? true : R) && Ue.modifiers.fullHeight, e),
          ref: Y,
          children: (P || u) && !ve ? m.jsxs("div", Object.assign({}, te({
            onClick: (Ot) => Ot.stopPropagation()
          }), {
            className: E(Ue.codeEditorContainer, ue && Hd.modifiers.loading),
            children: [
              Te,
              m.jsx("div", {
                className: E(Ue.codeEditorMain, ge && Ue.modifiers.dragHover),
                children: (He || u) && !ve ? m.jsxs("div", {
                  className: E(Ue.codeEditorUpload),
                  children: [
                    ot,
                    Jn
                  ]
                }) : m.jsxs(m.Fragment, {
                  children: [
                    ot,
                    ht
                  ]
                })
              })
            ]
          })) : m.jsxs(m.Fragment, {
            children: [
              Te,
              U && m.jsxs("div", {
                className: E(Ue.codeEditorMain),
                children: [
                  ot,
                  ht
                ]
              })
            ]
          })
        });
      }
    });
  };
  ac.displayName = "CodeEditor";
  const ig = {
    name: "PlayIcon",
    height: 512,
    width: 448,
    svgPath: "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z",
    yOffset: 0,
    xOffset: 0
  }, rg = Fe(ig), og = {
    name: "ProjectDiagramIcon",
    height: 512,
    width: 640,
    svgPath: "M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z",
    yOffset: 0,
    xOffset: 0
  }, ag = Fe(og);
  function lg(e) {
    const t = so(), n = [
      m.jsx(Qt, {
        icon: m.jsx(rg, {}),
        "aria-label": "Execute query",
        tooltipProps: {
          content: "Execute query"
        },
        onClick: e.onExecuteQuery
      }, "play"),
      m.jsx(Qt, {
        icon: m.jsx(ag, {}),
        "aria-label": "Toggle Query Viewer",
        tooltipProps: {
          content: "Toggle Query Viewer"
        },
        onClick: () => t({
          to: "/",
          search: {
            demo: e.demo,
            qv: !e.isDrawerOpen
          }
        })
      }, "topology")
    ];
    return m.jsx(ac, {
      isCopyEnabled: true,
      isDarkTheme: true,
      isLineNumbersVisible: false,
      isMinimapVisible: false,
      code: e.initialQuery || "",
      headerMainContent: "Query Editor",
      customControls: n,
      options: {
        fontSize: 14,
        wordWrap: "on"
      },
      onChange: e.setQuery,
      language: nt.json,
      onEditorDidMount: (i) => {
        i.layout();
      },
      height: "800px"
    });
  }
  function sg(e, t) {
    const n = {};
    return (e[e.length - 1] === "" ? [
      ...e,
      ""
    ] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === false ? "" : " ")).trim();
  }
  const cg = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, ug = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, pg = {};
  function Ha(e, t) {
    return (pg.jsx ? ug : cg).test(e);
  }
  const dg = /[ \t\n\f\r]/g;
  function fg(e) {
    return typeof e == "object" ? e.type === "text" ? $a(e.value) : false : $a(e);
  }
  function $a(e) {
    return e.replace(dg, "") === "";
  }
  class Yn {
    constructor(t, n, i) {
      this.normal = n, this.property = t, i && (this.space = i);
    }
  }
  Yn.prototype.normal = {};
  Yn.prototype.property = {};
  Yn.prototype.space = void 0;
  function lc(e, t) {
    const n = {}, i = {};
    for (const r of e) Object.assign(n, r.property), Object.assign(i, r.normal);
    return new Yn(n, i, t);
  }
  function Qr(e) {
    return e.toLowerCase();
  }
  class et {
    constructor(t, n) {
      this.attribute = n, this.property = t;
    }
  }
  et.prototype.attribute = "";
  et.prototype.booleanish = false;
  et.prototype.boolean = false;
  et.prototype.commaOrSpaceSeparated = false;
  et.prototype.commaSeparated = false;
  et.prototype.defined = false;
  et.prototype.mustUseProperty = false;
  et.prototype.number = false;
  et.prototype.overloadedBoolean = false;
  et.prototype.property = "";
  et.prototype.spaceSeparated = false;
  et.prototype.space = void 0;
  let mg = 0;
  const ce = Wt(), Be = Wt(), Jr = Wt(), $ = Wt(), je = Wt(), Jt = Wt(), tt = Wt();
  function Wt() {
    return 2 ** ++mg;
  }
  const Zr = Object.freeze(Object.defineProperty({
    __proto__: null,
    boolean: ce,
    booleanish: Be,
    commaOrSpaceSeparated: tt,
    commaSeparated: Jt,
    number: $,
    overloadedBoolean: Jr,
    spaceSeparated: je
  }, Symbol.toStringTag, {
    value: "Module"
  })), gr = Object.keys(Zr);
  class To extends et {
    constructor(t, n, i, r) {
      let o = -1;
      if (super(t, n), qa(this, "space", r), typeof i == "number") for (; ++o < gr.length; ) {
        const a = gr[o];
        qa(this, gr[o], (i & Zr[a]) === Zr[a]);
      }
    }
  }
  To.prototype.defined = true;
  function qa(e, t, n) {
    n && (e[t] = n);
  }
  function ln(e) {
    const t = {}, n = {};
    for (const [i, r] of Object.entries(e.properties)) {
      const o = new To(i, e.transform(e.attributes || {}, i), r, e.space);
      e.mustUseProperty && e.mustUseProperty.includes(i) && (o.mustUseProperty = true), t[i] = o, n[Qr(i)] = i, n[Qr(o.attribute)] = i;
    }
    return new Yn(t, n, e.space);
  }
  const sc = ln({
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: Be,
      ariaAutoComplete: null,
      ariaBusy: Be,
      ariaChecked: Be,
      ariaColCount: $,
      ariaColIndex: $,
      ariaColSpan: $,
      ariaControls: je,
      ariaCurrent: null,
      ariaDescribedBy: je,
      ariaDetails: null,
      ariaDisabled: Be,
      ariaDropEffect: je,
      ariaErrorMessage: null,
      ariaExpanded: Be,
      ariaFlowTo: je,
      ariaGrabbed: Be,
      ariaHasPopup: null,
      ariaHidden: Be,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: je,
      ariaLevel: $,
      ariaLive: null,
      ariaModal: Be,
      ariaMultiLine: Be,
      ariaMultiSelectable: Be,
      ariaOrientation: null,
      ariaOwns: je,
      ariaPlaceholder: null,
      ariaPosInSet: $,
      ariaPressed: Be,
      ariaReadOnly: Be,
      ariaRelevant: null,
      ariaRequired: Be,
      ariaRoleDescription: je,
      ariaRowCount: $,
      ariaRowIndex: $,
      ariaRowSpan: $,
      ariaSelected: Be,
      ariaSetSize: $,
      ariaSort: null,
      ariaValueMax: $,
      ariaValueMin: $,
      ariaValueNow: $,
      ariaValueText: null,
      role: null
    },
    transform(e, t) {
      return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
    }
  });
  function cc(e, t) {
    return t in e ? e[t] : t;
  }
  function uc(e, t) {
    return cc(e, t.toLowerCase());
  }
  const hg = ln({
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv"
    },
    mustUseProperty: [
      "checked",
      "multiple",
      "muted",
      "selected"
    ],
    properties: {
      abbr: null,
      accept: Jt,
      acceptCharset: je,
      accessKey: je,
      action: null,
      allow: null,
      allowFullScreen: ce,
      allowPaymentRequest: ce,
      allowUserMedia: ce,
      alt: null,
      as: null,
      async: ce,
      autoCapitalize: null,
      autoComplete: je,
      autoFocus: ce,
      autoPlay: ce,
      blocking: je,
      capture: null,
      charSet: null,
      checked: ce,
      cite: null,
      className: je,
      cols: $,
      colSpan: null,
      content: null,
      contentEditable: Be,
      controls: ce,
      controlsList: je,
      coords: $ | Jt,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: ce,
      defer: ce,
      dir: null,
      dirName: null,
      disabled: ce,
      download: Jr,
      draggable: Be,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: ce,
      formTarget: null,
      headers: je,
      height: $,
      hidden: Jr,
      high: $,
      href: null,
      hrefLang: null,
      htmlFor: je,
      httpEquiv: je,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: ce,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: ce,
      itemId: null,
      itemProp: je,
      itemRef: je,
      itemScope: ce,
      itemType: je,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: ce,
      low: $,
      manifest: null,
      max: null,
      maxLength: $,
      media: null,
      method: null,
      min: null,
      minLength: $,
      multiple: ce,
      muted: ce,
      name: null,
      nonce: null,
      noModule: ce,
      noValidate: ce,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: ce,
      optimum: $,
      pattern: null,
      ping: je,
      placeholder: null,
      playsInline: ce,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: ce,
      referrerPolicy: null,
      rel: je,
      required: ce,
      reversed: ce,
      rows: $,
      rowSpan: $,
      sandbox: je,
      scope: null,
      scoped: ce,
      seamless: ce,
      selected: ce,
      shadowRootClonable: ce,
      shadowRootDelegatesFocus: ce,
      shadowRootMode: null,
      shape: null,
      size: $,
      sizes: null,
      slot: null,
      span: $,
      spellCheck: Be,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: $,
      step: null,
      style: null,
      tabIndex: $,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: ce,
      useMap: null,
      value: Be,
      width: $,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: je,
      axis: null,
      background: null,
      bgColor: null,
      border: $,
      borderColor: null,
      bottomMargin: $,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: ce,
      declare: ce,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: $,
      leftMargin: $,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: $,
      marginWidth: $,
      noResize: ce,
      noHref: ce,
      noShade: ce,
      noWrap: ce,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: $,
      rules: null,
      scheme: null,
      scrolling: Be,
      standby: null,
      summary: null,
      text: null,
      topMargin: $,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: $,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: ce,
      disableRemotePlayback: ce,
      prefix: null,
      property: null,
      results: $,
      security: null,
      unselectable: null
    },
    space: "html",
    transform: uc
  }), gg = ln({
    attributes: {
      accentHeight: "accent-height",
      alignmentBaseline: "alignment-baseline",
      arabicForm: "arabic-form",
      baselineShift: "baseline-shift",
      capHeight: "cap-height",
      className: "class",
      clipPath: "clip-path",
      clipRule: "clip-rule",
      colorInterpolation: "color-interpolation",
      colorInterpolationFilters: "color-interpolation-filters",
      colorProfile: "color-profile",
      colorRendering: "color-rendering",
      crossOrigin: "crossorigin",
      dataType: "datatype",
      dominantBaseline: "dominant-baseline",
      enableBackground: "enable-background",
      fillOpacity: "fill-opacity",
      fillRule: "fill-rule",
      floodColor: "flood-color",
      floodOpacity: "flood-opacity",
      fontFamily: "font-family",
      fontSize: "font-size",
      fontSizeAdjust: "font-size-adjust",
      fontStretch: "font-stretch",
      fontStyle: "font-style",
      fontVariant: "font-variant",
      fontWeight: "font-weight",
      glyphName: "glyph-name",
      glyphOrientationHorizontal: "glyph-orientation-horizontal",
      glyphOrientationVertical: "glyph-orientation-vertical",
      hrefLang: "hreflang",
      horizAdvX: "horiz-adv-x",
      horizOriginX: "horiz-origin-x",
      horizOriginY: "horiz-origin-y",
      imageRendering: "image-rendering",
      letterSpacing: "letter-spacing",
      lightingColor: "lighting-color",
      markerEnd: "marker-end",
      markerMid: "marker-mid",
      markerStart: "marker-start",
      navDown: "nav-down",
      navDownLeft: "nav-down-left",
      navDownRight: "nav-down-right",
      navLeft: "nav-left",
      navNext: "nav-next",
      navPrev: "nav-prev",
      navRight: "nav-right",
      navUp: "nav-up",
      navUpLeft: "nav-up-left",
      navUpRight: "nav-up-right",
      onAbort: "onabort",
      onActivate: "onactivate",
      onAfterPrint: "onafterprint",
      onBeforePrint: "onbeforeprint",
      onBegin: "onbegin",
      onCancel: "oncancel",
      onCanPlay: "oncanplay",
      onCanPlayThrough: "oncanplaythrough",
      onChange: "onchange",
      onClick: "onclick",
      onClose: "onclose",
      onCopy: "oncopy",
      onCueChange: "oncuechange",
      onCut: "oncut",
      onDblClick: "ondblclick",
      onDrag: "ondrag",
      onDragEnd: "ondragend",
      onDragEnter: "ondragenter",
      onDragExit: "ondragexit",
      onDragLeave: "ondragleave",
      onDragOver: "ondragover",
      onDragStart: "ondragstart",
      onDrop: "ondrop",
      onDurationChange: "ondurationchange",
      onEmptied: "onemptied",
      onEnd: "onend",
      onEnded: "onended",
      onError: "onerror",
      onFocus: "onfocus",
      onFocusIn: "onfocusin",
      onFocusOut: "onfocusout",
      onHashChange: "onhashchange",
      onInput: "oninput",
      onInvalid: "oninvalid",
      onKeyDown: "onkeydown",
      onKeyPress: "onkeypress",
      onKeyUp: "onkeyup",
      onLoad: "onload",
      onLoadedData: "onloadeddata",
      onLoadedMetadata: "onloadedmetadata",
      onLoadStart: "onloadstart",
      onMessage: "onmessage",
      onMouseDown: "onmousedown",
      onMouseEnter: "onmouseenter",
      onMouseLeave: "onmouseleave",
      onMouseMove: "onmousemove",
      onMouseOut: "onmouseout",
      onMouseOver: "onmouseover",
      onMouseUp: "onmouseup",
      onMouseWheel: "onmousewheel",
      onOffline: "onoffline",
      onOnline: "ononline",
      onPageHide: "onpagehide",
      onPageShow: "onpageshow",
      onPaste: "onpaste",
      onPause: "onpause",
      onPlay: "onplay",
      onPlaying: "onplaying",
      onPopState: "onpopstate",
      onProgress: "onprogress",
      onRateChange: "onratechange",
      onRepeat: "onrepeat",
      onReset: "onreset",
      onResize: "onresize",
      onScroll: "onscroll",
      onSeeked: "onseeked",
      onSeeking: "onseeking",
      onSelect: "onselect",
      onShow: "onshow",
      onStalled: "onstalled",
      onStorage: "onstorage",
      onSubmit: "onsubmit",
      onSuspend: "onsuspend",
      onTimeUpdate: "ontimeupdate",
      onToggle: "ontoggle",
      onUnload: "onunload",
      onVolumeChange: "onvolumechange",
      onWaiting: "onwaiting",
      onZoom: "onzoom",
      overlinePosition: "overline-position",
      overlineThickness: "overline-thickness",
      paintOrder: "paint-order",
      panose1: "panose-1",
      pointerEvents: "pointer-events",
      referrerPolicy: "referrerpolicy",
      renderingIntent: "rendering-intent",
      shapeRendering: "shape-rendering",
      stopColor: "stop-color",
      stopOpacity: "stop-opacity",
      strikethroughPosition: "strikethrough-position",
      strikethroughThickness: "strikethrough-thickness",
      strokeDashArray: "stroke-dasharray",
      strokeDashOffset: "stroke-dashoffset",
      strokeLineCap: "stroke-linecap",
      strokeLineJoin: "stroke-linejoin",
      strokeMiterLimit: "stroke-miterlimit",
      strokeOpacity: "stroke-opacity",
      strokeWidth: "stroke-width",
      tabIndex: "tabindex",
      textAnchor: "text-anchor",
      textDecoration: "text-decoration",
      textRendering: "text-rendering",
      transformOrigin: "transform-origin",
      typeOf: "typeof",
      underlinePosition: "underline-position",
      underlineThickness: "underline-thickness",
      unicodeBidi: "unicode-bidi",
      unicodeRange: "unicode-range",
      unitsPerEm: "units-per-em",
      vAlphabetic: "v-alphabetic",
      vHanging: "v-hanging",
      vIdeographic: "v-ideographic",
      vMathematical: "v-mathematical",
      vectorEffect: "vector-effect",
      vertAdvY: "vert-adv-y",
      vertOriginX: "vert-origin-x",
      vertOriginY: "vert-origin-y",
      wordSpacing: "word-spacing",
      writingMode: "writing-mode",
      xHeight: "x-height",
      playbackOrder: "playbackorder",
      timelineBegin: "timelinebegin"
    },
    properties: {
      about: tt,
      accentHeight: $,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: $,
      amplitude: $,
      arabicForm: null,
      ascent: $,
      attributeName: null,
      attributeType: null,
      azimuth: $,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: $,
      by: null,
      calcMode: null,
      capHeight: $,
      className: je,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: $,
      diffuseConstant: $,
      direction: null,
      display: null,
      dur: null,
      divisor: $,
      dominantBaseline: null,
      download: ce,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: $,
      enableBackground: null,
      end: null,
      event: null,
      exponent: $,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: $,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: Jt,
      g2: Jt,
      glyphName: Jt,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: $,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: $,
      horizOriginX: $,
      horizOriginY: $,
      id: null,
      ideographic: $,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: $,
      k: $,
      k1: $,
      k2: $,
      k3: $,
      k4: $,
      kernelMatrix: tt,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: $,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: $,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: $,
      overlineThickness: $,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: $,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: je,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: $,
      pointsAtY: $,
      pointsAtZ: $,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: tt,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: tt,
      rev: tt,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: tt,
      requiredFeatures: tt,
      requiredFonts: tt,
      requiredFormats: tt,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: $,
      specularExponent: $,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: $,
      strikethroughThickness: $,
      string: null,
      stroke: null,
      strokeDashArray: tt,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: $,
      strokeOpacity: $,
      strokeWidth: null,
      style: null,
      surfaceScale: $,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: tt,
      tabIndex: $,
      tableValues: null,
      target: null,
      targetX: $,
      targetY: $,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: tt,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: $,
      underlineThickness: $,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: $,
      values: null,
      vAlphabetic: $,
      vMathematical: $,
      vectorEffect: null,
      vHanging: $,
      vIdeographic: $,
      version: null,
      vertAdvY: $,
      vertOriginX: $,
      vertOriginY: $,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: $,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null
    },
    space: "svg",
    transform: cc
  }), pc = ln({
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null
    },
    space: "xlink",
    transform(e, t) {
      return "xlink:" + t.slice(5).toLowerCase();
    }
  }), dc = ln({
    attributes: {
      xmlnsxlink: "xmlns:xlink"
    },
    properties: {
      xmlnsXLink: null,
      xmlns: null
    },
    space: "xmlns",
    transform: uc
  }), fc = ln({
    properties: {
      xmlBase: null,
      xmlLang: null,
      xmlSpace: null
    },
    space: "xml",
    transform(e, t) {
      return "xml:" + t.slice(3).toLowerCase();
    }
  }), xg = {
    classId: "classID",
    dataType: "datatype",
    itemId: "itemID",
    strokeDashArray: "strokeDasharray",
    strokeDashOffset: "strokeDashoffset",
    strokeLineCap: "strokeLinecap",
    strokeLineJoin: "strokeLinejoin",
    strokeMiterLimit: "strokeMiterlimit",
    typeOf: "typeof",
    xLinkActuate: "xlinkActuate",
    xLinkArcRole: "xlinkArcrole",
    xLinkHref: "xlinkHref",
    xLinkRole: "xlinkRole",
    xLinkShow: "xlinkShow",
    xLinkTitle: "xlinkTitle",
    xLinkType: "xlinkType",
    xmlnsXLink: "xmlnsXlink"
  }, vg = /[A-Z]/g, Va = /-[a-z]/g, bg = /^data[-\w.:]+$/i;
  function yg(e, t) {
    const n = Qr(t);
    let i = t, r = et;
    if (n in e.normal) return e.property[e.normal[n]];
    if (n.length > 4 && n.slice(0, 4) === "data" && bg.test(t)) {
      if (t.charAt(4) === "-") {
        const o = t.slice(5).replace(Va, kg);
        i = "data" + o.charAt(0).toUpperCase() + o.slice(1);
      } else {
        const o = t.slice(4);
        if (!Va.test(o)) {
          let a = o.replace(vg, wg);
          a.charAt(0) !== "-" && (a = "-" + a), t = "data" + a;
        }
      }
      r = To;
    }
    return new r(i, t);
  }
  function wg(e) {
    return "-" + e.toLowerCase();
  }
  function kg(e) {
    return e.charAt(1).toUpperCase();
  }
  const Cg = lc([
    sc,
    hg,
    pc,
    dc,
    fc
  ], "html"), No = lc([
    sc,
    gg,
    pc,
    dc,
    fc
  ], "svg");
  function Og(e) {
    return e.join(" ").trim();
  }
  var Kt = {}, xr, Wa;
  function Sg() {
    if (Wa) return xr;
    Wa = 1;
    var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, n = /^\s*/, i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, r = /^:\s*/, o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, a = /^[;\s]*/, l = /^\s+|\s+$/g, c = `
`, s = "/", u = "*", p = "", f = "comment", d = "declaration";
    xr = function(v, C) {
      if (typeof v != "string") throw new TypeError("First argument must be a string");
      if (!v) return [];
      C = C || {};
      var k = 1, j = 1;
      function I(y) {
        var w = y.match(t);
        w && (k += w.length);
        var S = y.lastIndexOf(c);
        j = ~S ? y.length - S : j + y.length;
      }
      function R() {
        var y = {
          line: k,
          column: j
        };
        return function(w) {
          return w.position = new L(y), F(), w;
        };
      }
      function L(y) {
        this.start = y, this.end = {
          line: k,
          column: j
        }, this.source = C.source;
      }
      L.prototype.content = v;
      function O(y) {
        var w = new Error(C.source + ":" + k + ":" + j + ": " + y);
        if (w.reason = y, w.filename = C.source, w.line = k, w.column = j, w.source = v, !C.silent) throw w;
      }
      function M(y) {
        var w = y.exec(v);
        if (w) {
          var S = w[0];
          return I(S), v = v.slice(S.length), w;
        }
      }
      function F() {
        M(n);
      }
      function D(y) {
        var w;
        for (y = y || []; w = P(); ) w !== false && y.push(w);
        return y;
      }
      function P() {
        var y = R();
        if (!(s != v.charAt(0) || u != v.charAt(1))) {
          for (var w = 2; p != v.charAt(w) && (u != v.charAt(w) || s != v.charAt(w + 1)); ) ++w;
          if (w += 2, p === v.charAt(w - 1)) return O("End of comment missing");
          var S = v.slice(2, w - 2);
          return j += 2, I(S), v = v.slice(w), j += 2, y({
            type: f,
            comment: S
          });
        }
      }
      function N() {
        var y = R(), w = M(i);
        if (w) {
          if (P(), !M(r)) return O("property missing ':'");
          var S = M(o), z = y({
            type: d,
            property: x(w[0].replace(e, p)),
            value: S ? x(S[0].replace(e, p)) : p
          });
          return M(a), z;
        }
      }
      function T() {
        var y = [];
        D(y);
        for (var w; w = N(); ) w !== false && (y.push(w), D(y));
        return y;
      }
      return F(), T();
    };
    function x(v) {
      return v ? v.replace(l, p) : p;
    }
    return xr;
  }
  var Ua;
  function _g() {
    if (Ua) return Kt;
    Ua = 1;
    var e = Kt && Kt.__importDefault || function(i) {
      return i && i.__esModule ? i : {
        default: i
      };
    };
    Object.defineProperty(Kt, "__esModule", {
      value: true
    }), Kt.default = n;
    var t = e(Sg());
    function n(i, r) {
      var o = null;
      if (!i || typeof i != "string") return o;
      var a = (0, t.default)(i), l = typeof r == "function";
      return a.forEach(function(c) {
        if (c.type === "declaration") {
          var s = c.property, u = c.value;
          l ? r(s, u, c) : u && (o = o || {}, o[s] = u);
        }
      }), o;
    }
    return Kt;
  }
  var mn = {}, Xa;
  function jg() {
    if (Xa) return mn;
    Xa = 1, Object.defineProperty(mn, "__esModule", {
      value: true
    }), mn.camelCase = void 0;
    var e = /^--[a-zA-Z0-9_-]+$/, t = /-([a-z])/g, n = /^[^-]+$/, i = /^-(webkit|moz|ms|o|khtml)-/, r = /^-(ms)-/, o = function(s) {
      return !s || n.test(s) || e.test(s);
    }, a = function(s, u) {
      return u.toUpperCase();
    }, l = function(s, u) {
      return "".concat(u, "-");
    }, c = function(s, u) {
      return u === void 0 && (u = {}), o(s) ? s : (s = s.toLowerCase(), u.reactCompat ? s = s.replace(r, l) : s = s.replace(i, l), s.replace(t, a));
    };
    return mn.camelCase = c, mn;
  }
  var hn, Ka;
  function Eg() {
    if (Ka) return hn;
    Ka = 1;
    var e = hn && hn.__importDefault || function(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }, t = e(_g()), n = jg();
    function i(r, o) {
      var a = {};
      return !r || typeof r != "string" || (0, t.default)(r, function(l, c) {
        l && c && (a[(0, n.camelCase)(l, o)] = c);
      }), a;
    }
    return i.default = i, hn = i, hn;
  }
  var Ig = Eg();
  const Pg = Ri(Ig), mc = hc("end"), Mo = hc("start");
  function hc(e) {
    return t;
    function t(n) {
      const i = n && n.position && n.position[e] || {};
      if (typeof i.line == "number" && i.line > 0 && typeof i.column == "number" && i.column > 0) return {
        line: i.line,
        column: i.column,
        offset: typeof i.offset == "number" && i.offset > -1 ? i.offset : void 0
      };
    }
  }
  function Tg(e) {
    const t = Mo(e), n = mc(e);
    if (t && n) return {
      start: t,
      end: n
    };
  }
  function Pn(e) {
    return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Ga(e.position) : "start" in e || "end" in e ? Ga(e) : "line" in e || "column" in e ? eo(e) : "";
  }
  function eo(e) {
    return Ya(e && e.line) + ":" + Ya(e && e.column);
  }
  function Ga(e) {
    return eo(e && e.start) + "-" + eo(e && e.end);
  }
  function Ya(e) {
    return e && typeof e == "number" ? e : 1;
  }
  class Ye extends Error {
    constructor(t, n, i) {
      super(), typeof n == "string" && (i = n, n = void 0);
      let r = "", o = {}, a = false;
      if (n && ("line" in n && "column" in n ? o = {
        place: n
      } : "start" in n && "end" in n ? o = {
        place: n
      } : "type" in n ? o = {
        ancestors: [
          n
        ],
        place: n.position
      } : o = {
        ...n
      }), typeof t == "string" ? r = t : !o.cause && t && (a = true, r = t.message, o.cause = t), !o.ruleId && !o.source && typeof i == "string") {
        const c = i.indexOf(":");
        c === -1 ? o.ruleId = i : (o.source = i.slice(0, c), o.ruleId = i.slice(c + 1));
      }
      if (!o.place && o.ancestors && o.ancestors) {
        const c = o.ancestors[o.ancestors.length - 1];
        c && (o.place = c.position);
      }
      const l = o.place && "start" in o.place ? o.place.start : o.place;
      this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = l ? l.column : void 0, this.fatal = void 0, this.file, this.message = r, this.line = l ? l.line : void 0, this.name = Pn(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = a && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual, this.expected, this.note, this.url;
    }
  }
  Ye.prototype.file = "";
  Ye.prototype.name = "";
  Ye.prototype.reason = "";
  Ye.prototype.message = "";
  Ye.prototype.stack = "";
  Ye.prototype.column = void 0;
  Ye.prototype.line = void 0;
  Ye.prototype.ancestors = void 0;
  Ye.prototype.cause = void 0;
  Ye.prototype.fatal = void 0;
  Ye.prototype.place = void 0;
  Ye.prototype.ruleId = void 0;
  Ye.prototype.source = void 0;
  const Ro = {}.hasOwnProperty, Ng = /* @__PURE__ */ new Map(), Mg = /[A-Z]/g, Rg = /* @__PURE__ */ new Set([
    "table",
    "tbody",
    "thead",
    "tfoot",
    "tr"
  ]), Ag = /* @__PURE__ */ new Set([
    "td",
    "th"
  ]), gc = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
  function Dg(e, t) {
    if (!t || t.Fragment === void 0) throw new TypeError("Expected `Fragment` in options");
    const n = t.filePath || void 0;
    let i;
    if (t.development) {
      if (typeof t.jsxDEV != "function") throw new TypeError("Expected `jsxDEV` in options when `development: true`");
      i = Vg(n, t.jsxDEV);
    } else {
      if (typeof t.jsx != "function") throw new TypeError("Expected `jsx` in production options");
      if (typeof t.jsxs != "function") throw new TypeError("Expected `jsxs` in production options");
      i = qg(n, t.jsx, t.jsxs);
    }
    const r = {
      Fragment: t.Fragment,
      ancestors: [],
      components: t.components || {},
      create: i,
      elementAttributeNameCase: t.elementAttributeNameCase || "react",
      evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
      filePath: n,
      ignoreInvalidStyle: t.ignoreInvalidStyle || false,
      passKeys: t.passKeys !== false,
      passNode: t.passNode || false,
      schema: t.space === "svg" ? No : Cg,
      stylePropertyNameCase: t.stylePropertyNameCase || "dom",
      tableCellAlignToStyle: t.tableCellAlignToStyle !== false
    }, o = xc(r, e, void 0);
    return o && typeof o != "string" ? o : r.create(e, r.Fragment, {
      children: o || void 0
    }, void 0);
  }
  function xc(e, t, n) {
    if (t.type === "element") return Lg(e, t, n);
    if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") return Fg(e, t);
    if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") return Bg(e, t, n);
    if (t.type === "mdxjsEsm") return zg(e, t);
    if (t.type === "root") return Hg(e, t, n);
    if (t.type === "text") return $g(e, t);
  }
  function Lg(e, t, n) {
    const i = e.schema;
    let r = i;
    t.tagName.toLowerCase() === "svg" && i.space === "html" && (r = No, e.schema = r), e.ancestors.push(t);
    const o = bc(e, t.tagName, false), a = Wg(e, t);
    let l = Do(e, t);
    return Rg.has(t.tagName) && (l = l.filter(function(c) {
      return typeof c == "string" ? !fg(c) : true;
    })), vc(e, a, o, t), Ao(a, l), e.ancestors.pop(), e.schema = i, e.create(t, o, a, n);
  }
  function Fg(e, t) {
    if (t.data && t.data.estree && e.evaluater) {
      const i = t.data.estree.body[0];
      return i.type, e.evaluater.evaluateExpression(i.expression);
    }
    Vn(e, t.position);
  }
  function zg(e, t) {
    if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
    Vn(e, t.position);
  }
  function Bg(e, t, n) {
    const i = e.schema;
    let r = i;
    t.name === "svg" && i.space === "html" && (r = No, e.schema = r), e.ancestors.push(t);
    const o = t.name === null ? e.Fragment : bc(e, t.name, true), a = Ug(e, t), l = Do(e, t);
    return vc(e, a, o, t), Ao(a, l), e.ancestors.pop(), e.schema = i, e.create(t, o, a, n);
  }
  function Hg(e, t, n) {
    const i = {};
    return Ao(i, Do(e, t)), e.create(t, e.Fragment, i, n);
  }
  function $g(e, t) {
    return t.value;
  }
  function vc(e, t, n, i) {
    typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = i);
  }
  function Ao(e, t) {
    if (t.length > 0) {
      const n = t.length > 1 ? t : t[0];
      n && (e.children = n);
    }
  }
  function qg(e, t, n) {
    return i;
    function i(r, o, a, l) {
      const s = Array.isArray(a.children) ? n : t;
      return l ? s(o, a, l) : s(o, a);
    }
  }
  function Vg(e, t) {
    return n;
    function n(i, r, o, a) {
      const l = Array.isArray(o.children), c = Mo(i);
      return t(r, o, a, l, {
        columnNumber: c ? c.column - 1 : void 0,
        fileName: e,
        lineNumber: c ? c.line : void 0
      }, void 0);
    }
  }
  function Wg(e, t) {
    const n = {};
    let i, r;
    for (r in t.properties) if (r !== "children" && Ro.call(t.properties, r)) {
      const o = Xg(e, r, t.properties[r]);
      if (o) {
        const [a, l] = o;
        e.tableCellAlignToStyle && a === "align" && typeof l == "string" && Ag.has(t.tagName) ? i = l : n[a] = l;
      }
    }
    if (i) {
      const o = n.style || (n.style = {});
      o[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = i;
    }
    return n;
  }
  function Ug(e, t) {
    const n = {};
    for (const i of t.attributes) if (i.type === "mdxJsxExpressionAttribute") if (i.data && i.data.estree && e.evaluater) {
      const o = i.data.estree.body[0];
      o.type;
      const a = o.expression;
      a.type;
      const l = a.properties[0];
      l.type, Object.assign(n, e.evaluater.evaluateExpression(l.argument));
    } else Vn(e, t.position);
    else {
      const r = i.name;
      let o;
      if (i.value && typeof i.value == "object") if (i.value.data && i.value.data.estree && e.evaluater) {
        const l = i.value.data.estree.body[0];
        l.type, o = e.evaluater.evaluateExpression(l.expression);
      } else Vn(e, t.position);
      else o = i.value === null ? true : i.value;
      n[r] = o;
    }
    return n;
  }
  function Do(e, t) {
    const n = [];
    let i = -1;
    const r = e.passKeys ? /* @__PURE__ */ new Map() : Ng;
    for (; ++i < t.children.length; ) {
      const o = t.children[i];
      let a;
      if (e.passKeys) {
        const c = o.type === "element" ? o.tagName : o.type === "mdxJsxFlowElement" || o.type === "mdxJsxTextElement" ? o.name : void 0;
        if (c) {
          const s = r.get(c) || 0;
          a = c + "-" + s, r.set(c, s + 1);
        }
      }
      const l = xc(e, o, a);
      l !== void 0 && n.push(l);
    }
    return n;
  }
  function Xg(e, t, n) {
    const i = yg(e.schema, t);
    if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
      if (Array.isArray(n) && (n = i.commaSeparated ? sg(n) : Og(n)), i.property === "style") {
        let r = typeof n == "object" ? n : Kg(e, String(n));
        return e.stylePropertyNameCase === "css" && (r = Gg(r)), [
          "style",
          r
        ];
      }
      return [
        e.elementAttributeNameCase === "react" && i.space ? xg[i.property] || i.property : i.attribute,
        n
      ];
    }
  }
  function Kg(e, t) {
    try {
      return Pg(t, {
        reactCompat: true
      });
    } catch (n) {
      if (e.ignoreInvalidStyle) return {};
      const i = n, r = new Ye("Cannot parse `style` attribute", {
        ancestors: e.ancestors,
        cause: i,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime"
      });
      throw r.file = e.filePath || void 0, r.url = gc + "#cannot-parse-style-attribute", r;
    }
  }
  function bc(e, t, n) {
    let i;
    if (!n) i = {
      type: "Literal",
      value: t
    };
    else if (t.includes(".")) {
      const r = t.split(".");
      let o = -1, a;
      for (; ++o < r.length; ) {
        const l = Ha(r[o]) ? {
          type: "Identifier",
          name: r[o]
        } : {
          type: "Literal",
          value: r[o]
        };
        a = a ? {
          type: "MemberExpression",
          object: a,
          property: l,
          computed: !!(o && l.type === "Literal"),
          optional: false
        } : l;
      }
      i = a;
    } else i = Ha(t) && !/^[a-z]/.test(t) ? {
      type: "Identifier",
      name: t
    } : {
      type: "Literal",
      value: t
    };
    if (i.type === "Literal") {
      const r = i.value;
      return Ro.call(e.components, r) ? e.components[r] : r;
    }
    if (e.evaluater) return e.evaluater.evaluateExpression(i);
    Vn(e);
  }
  function Vn(e, t) {
    const n = new Ye("Cannot handle MDX estrees without `createEvaluater`", {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    });
    throw n.file = e.filePath || void 0, n.url = gc + "#cannot-handle-mdx-estrees-without-createevaluater", n;
  }
  function Gg(e) {
    const t = {};
    let n;
    for (n in e) Ro.call(e, n) && (t[Yg(n)] = e[n]);
    return t;
  }
  function Yg(e) {
    let t = e.replace(Mg, Qg);
    return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
  }
  function Qg(e) {
    return "-" + e.toLowerCase();
  }
  const vr = {
    action: [
      "form"
    ],
    cite: [
      "blockquote",
      "del",
      "ins",
      "q"
    ],
    data: [
      "object"
    ],
    formAction: [
      "button",
      "input"
    ],
    href: [
      "a",
      "area",
      "base",
      "link"
    ],
    icon: [
      "menuitem"
    ],
    itemId: null,
    manifest: [
      "html"
    ],
    ping: [
      "a",
      "area"
    ],
    poster: [
      "video"
    ],
    src: [
      "audio",
      "embed",
      "iframe",
      "img",
      "input",
      "script",
      "source",
      "track",
      "video"
    ]
  }, Jg = {};
  function Zg(e, t) {
    const n = Jg, i = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : true, r = typeof n.includeHtml == "boolean" ? n.includeHtml : true;
    return yc(e, i, r);
  }
  function yc(e, t, n) {
    if (ex(e)) {
      if ("value" in e) return e.type === "html" && !n ? "" : e.value;
      if (t && "alt" in e && e.alt) return e.alt;
      if ("children" in e) return Qa(e.children, t, n);
    }
    return Array.isArray(e) ? Qa(e, t, n) : "";
  }
  function Qa(e, t, n) {
    const i = [];
    let r = -1;
    for (; ++r < e.length; ) i[r] = yc(e[r], t, n);
    return i.join("");
  }
  function ex(e) {
    return !!(e && typeof e == "object");
  }
  const Ja = document.createElement("i");
  function Lo(e) {
    const t = "&" + e + ";";
    Ja.innerHTML = t;
    const n = Ja.textContent;
    return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? false : n;
  }
  function kt(e, t, n, i) {
    const r = e.length;
    let o = 0, a;
    if (t < 0 ? t = -t > r ? 0 : r + t : t = t > r ? r : t, n = n > 0 ? n : 0, i.length < 1e4) a = Array.from(i), a.unshift(t, n), e.splice(...a);
    else for (n && e.splice(t, n); o < i.length; ) a = i.slice(o, o + 1e4), a.unshift(t, 0), e.splice(...a), o += 1e4, t += 1e4;
  }
  function at(e, t) {
    return e.length > 0 ? (kt(e, e.length, 0, t), e) : t;
  }
  const Za = {}.hasOwnProperty;
  function tx(e) {
    const t = {};
    let n = -1;
    for (; ++n < e.length; ) nx(t, e[n]);
    return t;
  }
  function nx(e, t) {
    let n;
    for (n in t) {
      const r = (Za.call(e, n) ? e[n] : void 0) || (e[n] = {}), o = t[n];
      let a;
      if (o) for (a in o) {
        Za.call(r, a) || (r[a] = []);
        const l = o[a];
        ix(r[a], Array.isArray(l) ? l : l ? [
          l
        ] : []);
      }
    }
  }
  function ix(e, t) {
    let n = -1;
    const i = [];
    for (; ++n < t.length; ) (t[n].add === "after" ? e : i).push(t[n]);
    kt(e, 0, 0, i);
  }
  function wc(e, t) {
    const n = Number.parseInt(e, t);
    return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || n > 1114111 ? "\uFFFD" : String.fromCodePoint(n);
  }
  function Zt(e) {
    return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
  }
  const bt = Dt(/[A-Za-z]/), rt = Dt(/[\dA-Za-z]/), rx = Dt(/[#-'*+\--9=?A-Z^-~]/);
  function to(e) {
    return e !== null && (e < 32 || e === 127);
  }
  const no = Dt(/\d/), ox = Dt(/[\dA-Fa-f]/), ax = Dt(/[!-/:-@[-`{-~]/);
  function ie(e) {
    return e !== null && e < -2;
  }
  function Ze(e) {
    return e !== null && (e < 0 || e === 32);
  }
  function be(e) {
    return e === -2 || e === -1 || e === 32;
  }
  const lx = Dt(new RegExp("\\p{P}|\\p{S}", "u")), sx = Dt(/\s/);
  function Dt(e) {
    return t;
    function t(n) {
      return n !== null && n > -1 && e.test(String.fromCharCode(n));
    }
  }
  function sn(e) {
    const t = [];
    let n = -1, i = 0, r = 0;
    for (; ++n < e.length; ) {
      const o = e.charCodeAt(n);
      let a = "";
      if (o === 37 && rt(e.charCodeAt(n + 1)) && rt(e.charCodeAt(n + 2))) r = 2;
      else if (o < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (a = String.fromCharCode(o));
      else if (o > 55295 && o < 57344) {
        const l = e.charCodeAt(n + 1);
        o < 56320 && l > 56319 && l < 57344 ? (a = String.fromCharCode(o, l), r = 1) : a = "\uFFFD";
      } else a = String.fromCharCode(o);
      a && (t.push(e.slice(i, n), encodeURIComponent(a)), i = n + r + 1, a = ""), r && (n += r, r = 0);
    }
    return t.join("") + e.slice(i);
  }
  function Ee(e, t, n, i) {
    const r = i ? i - 1 : Number.POSITIVE_INFINITY;
    let o = 0;
    return a;
    function a(c) {
      return be(c) ? (e.enter(n), l(c)) : t(c);
    }
    function l(c) {
      return be(c) && o++ < r ? (e.consume(c), l) : (e.exit(n), t(c));
    }
  }
  const cx = {
    tokenize: ux
  };
  function ux(e) {
    const t = e.attempt(this.parser.constructs.contentInitial, i, r);
    let n;
    return t;
    function i(l) {
      if (l === null) {
        e.consume(l);
        return;
      }
      return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), Ee(e, t, "linePrefix");
    }
    function r(l) {
      return e.enter("paragraph"), o(l);
    }
    function o(l) {
      const c = e.enter("chunkText", {
        contentType: "text",
        previous: n
      });
      return n && (n.next = c), n = c, a(l);
    }
    function a(l) {
      if (l === null) {
        e.exit("chunkText"), e.exit("paragraph"), e.consume(l);
        return;
      }
      return ie(l) ? (e.consume(l), e.exit("chunkText"), o) : (e.consume(l), a);
    }
  }
  const px = {
    tokenize: dx
  }, el = {
    tokenize: fx
  };
  function dx(e) {
    const t = this, n = [];
    let i = 0, r, o, a;
    return l;
    function l(I) {
      if (i < n.length) {
        const R = n[i];
        return t.containerState = R[1], e.attempt(R[0].continuation, c, s)(I);
      }
      return s(I);
    }
    function c(I) {
      if (i++, t.containerState._closeFlow) {
        t.containerState._closeFlow = void 0, r && j();
        const R = t.events.length;
        let L = R, O;
        for (; L--; ) if (t.events[L][0] === "exit" && t.events[L][1].type === "chunkFlow") {
          O = t.events[L][1].end;
          break;
        }
        k(i);
        let M = R;
        for (; M < t.events.length; ) t.events[M][1].end = {
          ...O
        }, M++;
        return kt(t.events, L + 1, 0, t.events.slice(R)), t.events.length = M, s(I);
      }
      return l(I);
    }
    function s(I) {
      if (i === n.length) {
        if (!r) return f(I);
        if (r.currentConstruct && r.currentConstruct.concrete) return x(I);
        t.interrupt = !!(r.currentConstruct && !r._gfmTableDynamicInterruptHack);
      }
      return t.containerState = {}, e.check(el, u, p)(I);
    }
    function u(I) {
      return r && j(), k(i), f(I);
    }
    function p(I) {
      return t.parser.lazy[t.now().line] = i !== n.length, a = t.now().offset, x(I);
    }
    function f(I) {
      return t.containerState = {}, e.attempt(el, d, x)(I);
    }
    function d(I) {
      return i++, n.push([
        t.currentConstruct,
        t.containerState
      ]), f(I);
    }
    function x(I) {
      if (I === null) {
        r && j(), k(0), e.consume(I);
        return;
      }
      return r = r || t.parser.flow(t.now()), e.enter("chunkFlow", {
        _tokenizer: r,
        contentType: "flow",
        previous: o
      }), v(I);
    }
    function v(I) {
      if (I === null) {
        C(e.exit("chunkFlow"), true), k(0), e.consume(I);
        return;
      }
      return ie(I) ? (e.consume(I), C(e.exit("chunkFlow")), i = 0, t.interrupt = void 0, l) : (e.consume(I), v);
    }
    function C(I, R) {
      const L = t.sliceStream(I);
      if (R && L.push(null), I.previous = o, o && (o.next = I), o = I, r.defineSkip(I.start), r.write(L), t.parser.lazy[I.start.line]) {
        let O = r.events.length;
        for (; O--; ) if (r.events[O][1].start.offset < a && (!r.events[O][1].end || r.events[O][1].end.offset > a)) return;
        const M = t.events.length;
        let F = M, D, P;
        for (; F--; ) if (t.events[F][0] === "exit" && t.events[F][1].type === "chunkFlow") {
          if (D) {
            P = t.events[F][1].end;
            break;
          }
          D = true;
        }
        for (k(i), O = M; O < t.events.length; ) t.events[O][1].end = {
          ...P
        }, O++;
        kt(t.events, F + 1, 0, t.events.slice(M)), t.events.length = O;
      }
    }
    function k(I) {
      let R = n.length;
      for (; R-- > I; ) {
        const L = n[R];
        t.containerState = L[1], L[0].exit.call(t, e);
      }
      n.length = I;
    }
    function j() {
      r.write([
        null
      ]), o = void 0, r = void 0, t.containerState._closeFlow = void 0;
    }
  }
  function fx(e, t, n) {
    return Ee(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
  }
  function tl(e) {
    if (e === null || Ze(e) || sx(e)) return 1;
    if (lx(e)) return 2;
  }
  function Fo(e, t, n) {
    const i = [];
    let r = -1;
    for (; ++r < e.length; ) {
      const o = e[r].resolveAll;
      o && !i.includes(o) && (t = o(t, n), i.push(o));
    }
    return t;
  }
  const io = {
    name: "attention",
    resolveAll: mx,
    tokenize: hx
  };
  function mx(e, t) {
    let n = -1, i, r, o, a, l, c, s, u;
    for (; ++n < e.length; ) if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (i = n; i--; ) if (e[i][0] === "exit" && e[i][1].type === "attentionSequence" && e[i][1]._open && t.sliceSerialize(e[i][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
        if ((e[i][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[i][1].end.offset - e[i][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
        c = e[i][1].end.offset - e[i][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
        const p = {
          ...e[i][1].end
        }, f = {
          ...e[n][1].start
        };
        nl(p, -c), nl(f, c), a = {
          type: c > 1 ? "strongSequence" : "emphasisSequence",
          start: p,
          end: {
            ...e[i][1].end
          }
        }, l = {
          type: c > 1 ? "strongSequence" : "emphasisSequence",
          start: {
            ...e[n][1].start
          },
          end: f
        }, o = {
          type: c > 1 ? "strongText" : "emphasisText",
          start: {
            ...e[i][1].end
          },
          end: {
            ...e[n][1].start
          }
        }, r = {
          type: c > 1 ? "strong" : "emphasis",
          start: {
            ...a.start
          },
          end: {
            ...l.end
          }
        }, e[i][1].end = {
          ...a.start
        }, e[n][1].start = {
          ...l.end
        }, s = [], e[i][1].end.offset - e[i][1].start.offset && (s = at(s, [
          [
            "enter",
            e[i][1],
            t
          ],
          [
            "exit",
            e[i][1],
            t
          ]
        ])), s = at(s, [
          [
            "enter",
            r,
            t
          ],
          [
            "enter",
            a,
            t
          ],
          [
            "exit",
            a,
            t
          ],
          [
            "enter",
            o,
            t
          ]
        ]), s = at(s, Fo(t.parser.constructs.insideSpan.null, e.slice(i + 1, n), t)), s = at(s, [
          [
            "exit",
            o,
            t
          ],
          [
            "enter",
            l,
            t
          ],
          [
            "exit",
            l,
            t
          ],
          [
            "exit",
            r,
            t
          ]
        ]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, s = at(s, [
          [
            "enter",
            e[n][1],
            t
          ],
          [
            "exit",
            e[n][1],
            t
          ]
        ])) : u = 0, kt(e, i - 1, n - i + 3, s), n = i + s.length - u - 2;
        break;
      }
    }
    for (n = -1; ++n < e.length; ) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
    return e;
  }
  function hx(e, t) {
    const n = this.parser.constructs.attentionMarkers.null, i = this.previous, r = tl(i);
    let o;
    return a;
    function a(c) {
      return o = c, e.enter("attentionSequence"), l(c);
    }
    function l(c) {
      if (c === o) return e.consume(c), l;
      const s = e.exit("attentionSequence"), u = tl(c), p = !u || u === 2 && r || n.includes(c), f = !r || r === 2 && u || n.includes(i);
      return s._open = !!(o === 42 ? p : p && (r || !f)), s._close = !!(o === 42 ? f : f && (u || !p)), t(c);
    }
  }
  function nl(e, t) {
    e.column += t, e.offset += t, e._bufferIndex += t;
  }
  const gx = {
    name: "autolink",
    tokenize: xx
  };
  function xx(e, t, n) {
    let i = 0;
    return r;
    function r(d) {
      return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
    }
    function o(d) {
      return bt(d) ? (e.consume(d), a) : d === 64 ? n(d) : s(d);
    }
    function a(d) {
      return d === 43 || d === 45 || d === 46 || rt(d) ? (i = 1, l(d)) : s(d);
    }
    function l(d) {
      return d === 58 ? (e.consume(d), i = 0, c) : (d === 43 || d === 45 || d === 46 || rt(d)) && i++ < 32 ? (e.consume(d), l) : (i = 0, s(d));
    }
    function c(d) {
      return d === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.exit("autolink"), t) : d === null || d === 32 || d === 60 || to(d) ? n(d) : (e.consume(d), c);
    }
    function s(d) {
      return d === 64 ? (e.consume(d), u) : rx(d) ? (e.consume(d), s) : n(d);
    }
    function u(d) {
      return rt(d) ? p(d) : n(d);
    }
    function p(d) {
      return d === 46 ? (e.consume(d), i = 0, u) : d === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.exit("autolink"), t) : f(d);
    }
    function f(d) {
      if ((d === 45 || rt(d)) && i++ < 63) {
        const x = d === 45 ? f : p;
        return e.consume(d), x;
      }
      return n(d);
    }
  }
  const Vi = {
    partial: true,
    tokenize: vx
  };
  function vx(e, t, n) {
    return i;
    function i(o) {
      return be(o) ? Ee(e, r, "linePrefix")(o) : r(o);
    }
    function r(o) {
      return o === null || ie(o) ? t(o) : n(o);
    }
  }
  const kc = {
    continuation: {
      tokenize: yx
    },
    exit: wx,
    name: "blockQuote",
    tokenize: bx
  };
  function bx(e, t, n) {
    const i = this;
    return r;
    function r(a) {
      if (a === 62) {
        const l = i.containerState;
        return l.open || (e.enter("blockQuote", {
          _container: true
        }), l.open = true), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(a), e.exit("blockQuoteMarker"), o;
      }
      return n(a);
    }
    function o(a) {
      return be(a) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(a), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(a));
    }
  }
  function yx(e, t, n) {
    const i = this;
    return r;
    function r(a) {
      return be(a) ? Ee(e, o, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a) : o(a);
    }
    function o(a) {
      return e.attempt(kc, t, n)(a);
    }
  }
  function wx(e) {
    e.exit("blockQuote");
  }
  const Cc = {
    name: "characterEscape",
    tokenize: kx
  };
  function kx(e, t, n) {
    return i;
    function i(o) {
      return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), r;
    }
    function r(o) {
      return ax(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o);
    }
  }
  const Oc = {
    name: "characterReference",
    tokenize: Cx
  };
  function Cx(e, t, n) {
    const i = this;
    let r = 0, o, a;
    return l;
    function l(p) {
      return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(p), e.exit("characterReferenceMarker"), c;
    }
    function c(p) {
      return p === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(p), e.exit("characterReferenceMarkerNumeric"), s) : (e.enter("characterReferenceValue"), o = 31, a = rt, u(p));
    }
    function s(p) {
      return p === 88 || p === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(p), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, a = ox, u) : (e.enter("characterReferenceValue"), o = 7, a = no, u(p));
    }
    function u(p) {
      if (p === 59 && r) {
        const f = e.exit("characterReferenceValue");
        return a === rt && !Lo(i.sliceSerialize(f)) ? n(p) : (e.enter("characterReferenceMarker"), e.consume(p), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
      }
      return a(p) && r++ < o ? (e.consume(p), u) : n(p);
    }
  }
  const il = {
    partial: true,
    tokenize: Sx
  }, rl = {
    concrete: true,
    name: "codeFenced",
    tokenize: Ox
  };
  function Ox(e, t, n) {
    const i = this, r = {
      partial: true,
      tokenize: L
    };
    let o = 0, a = 0, l;
    return c;
    function c(O) {
      return s(O);
    }
    function s(O) {
      const M = i.events[i.events.length - 1];
      return o = M && M[1].type === "linePrefix" ? M[2].sliceSerialize(M[1], true).length : 0, l = O, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u(O);
    }
    function u(O) {
      return O === l ? (a++, e.consume(O), u) : a < 3 ? n(O) : (e.exit("codeFencedFenceSequence"), be(O) ? Ee(e, p, "whitespace")(O) : p(O));
    }
    function p(O) {
      return O === null || ie(O) ? (e.exit("codeFencedFence"), i.interrupt ? t(O) : e.check(il, v, R)(O)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
        contentType: "string"
      }), f(O));
    }
    function f(O) {
      return O === null || ie(O) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), p(O)) : be(O) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), Ee(e, d, "whitespace")(O)) : O === 96 && O === l ? n(O) : (e.consume(O), f);
    }
    function d(O) {
      return O === null || ie(O) ? p(O) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
        contentType: "string"
      }), x(O));
    }
    function x(O) {
      return O === null || ie(O) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), p(O)) : O === 96 && O === l ? n(O) : (e.consume(O), x);
    }
    function v(O) {
      return e.attempt(r, R, C)(O);
    }
    function C(O) {
      return e.enter("lineEnding"), e.consume(O), e.exit("lineEnding"), k;
    }
    function k(O) {
      return o > 0 && be(O) ? Ee(e, j, "linePrefix", o + 1)(O) : j(O);
    }
    function j(O) {
      return O === null || ie(O) ? e.check(il, v, R)(O) : (e.enter("codeFlowValue"), I(O));
    }
    function I(O) {
      return O === null || ie(O) ? (e.exit("codeFlowValue"), j(O)) : (e.consume(O), I);
    }
    function R(O) {
      return e.exit("codeFenced"), t(O);
    }
    function L(O, M, F) {
      let D = 0;
      return P;
      function P(S) {
        return O.enter("lineEnding"), O.consume(S), O.exit("lineEnding"), N;
      }
      function N(S) {
        return O.enter("codeFencedFence"), be(S) ? Ee(O, T, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(S) : T(S);
      }
      function T(S) {
        return S === l ? (O.enter("codeFencedFenceSequence"), y(S)) : F(S);
      }
      function y(S) {
        return S === l ? (D++, O.consume(S), y) : D >= a ? (O.exit("codeFencedFenceSequence"), be(S) ? Ee(O, w, "whitespace")(S) : w(S)) : F(S);
      }
      function w(S) {
        return S === null || ie(S) ? (O.exit("codeFencedFence"), M(S)) : F(S);
      }
    }
  }
  function Sx(e, t, n) {
    const i = this;
    return r;
    function r(a) {
      return a === null ? n(a) : (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), o);
    }
    function o(a) {
      return i.parser.lazy[i.now().line] ? n(a) : t(a);
    }
  }
  const br = {
    name: "codeIndented",
    tokenize: jx
  }, _x = {
    partial: true,
    tokenize: Ex
  };
  function jx(e, t, n) {
    const i = this;
    return r;
    function r(s) {
      return e.enter("codeIndented"), Ee(e, o, "linePrefix", 5)(s);
    }
    function o(s) {
      const u = i.events[i.events.length - 1];
      return u && u[1].type === "linePrefix" && u[2].sliceSerialize(u[1], true).length >= 4 ? a(s) : n(s);
    }
    function a(s) {
      return s === null ? c(s) : ie(s) ? e.attempt(_x, a, c)(s) : (e.enter("codeFlowValue"), l(s));
    }
    function l(s) {
      return s === null || ie(s) ? (e.exit("codeFlowValue"), a(s)) : (e.consume(s), l);
    }
    function c(s) {
      return e.exit("codeIndented"), t(s);
    }
  }
  function Ex(e, t, n) {
    const i = this;
    return r;
    function r(a) {
      return i.parser.lazy[i.now().line] ? n(a) : ie(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), r) : Ee(e, o, "linePrefix", 5)(a);
    }
    function o(a) {
      const l = i.events[i.events.length - 1];
      return l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], true).length >= 4 ? t(a) : ie(a) ? r(a) : n(a);
    }
  }
  const Ix = {
    name: "codeText",
    previous: Tx,
    resolve: Px,
    tokenize: Nx
  };
  function Px(e) {
    let t = e.length - 4, n = 3, i, r;
    if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
      for (i = n; ++i < t; ) if (e[i][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
        break;
      }
    }
    for (i = n - 1, t++; ++i <= t; ) r === void 0 ? i !== t && e[i][1].type !== "lineEnding" && (r = i) : (i === t || e[i][1].type === "lineEnding") && (e[r][1].type = "codeTextData", i !== r + 2 && (e[r][1].end = e[i - 1][1].end, e.splice(r + 2, i - r - 2), t -= i - r - 2, i = r + 2), r = void 0);
    return e;
  }
  function Tx(e) {
    return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
  }
  function Nx(e, t, n) {
    let i = 0, r, o;
    return a;
    function a(p) {
      return e.enter("codeText"), e.enter("codeTextSequence"), l(p);
    }
    function l(p) {
      return p === 96 ? (e.consume(p), i++, l) : (e.exit("codeTextSequence"), c(p));
    }
    function c(p) {
      return p === null ? n(p) : p === 32 ? (e.enter("space"), e.consume(p), e.exit("space"), c) : p === 96 ? (o = e.enter("codeTextSequence"), r = 0, u(p)) : ie(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), c) : (e.enter("codeTextData"), s(p));
    }
    function s(p) {
      return p === null || p === 32 || p === 96 || ie(p) ? (e.exit("codeTextData"), c(p)) : (e.consume(p), s);
    }
    function u(p) {
      return p === 96 ? (e.consume(p), r++, u) : r === i ? (e.exit("codeTextSequence"), e.exit("codeText"), t(p)) : (o.type = "codeTextData", s(p));
    }
  }
  class Mx {
    constructor(t) {
      this.left = t ? [
        ...t
      ] : [], this.right = [];
    }
    get(t) {
      if (t < 0 || t >= this.left.length + this.right.length) throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
      return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1];
    }
    get length() {
      return this.left.length + this.right.length;
    }
    shift() {
      return this.setCursor(0), this.right.pop();
    }
    slice(t, n) {
      const i = n ?? Number.POSITIVE_INFINITY;
      return i < this.left.length ? this.left.slice(t, i) : t > this.left.length ? this.right.slice(this.right.length - i + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - i + this.left.length).reverse());
    }
    splice(t, n, i) {
      const r = n || 0;
      this.setCursor(Math.trunc(t));
      const o = this.right.splice(this.right.length - r, Number.POSITIVE_INFINITY);
      return i && gn(this.left, i), o.reverse();
    }
    pop() {
      return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
    }
    push(t) {
      this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
    }
    pushMany(t) {
      this.setCursor(Number.POSITIVE_INFINITY), gn(this.left, t);
    }
    unshift(t) {
      this.setCursor(0), this.right.push(t);
    }
    unshiftMany(t) {
      this.setCursor(0), gn(this.right, t.reverse());
    }
    setCursor(t) {
      if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0)) if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        gn(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        gn(this.left, n.reverse());
      }
    }
  }
  function gn(e, t) {
    let n = 0;
    if (t.length < 1e4) e.push(...t);
    else for (; n < t.length; ) e.push(...t.slice(n, n + 1e4)), n += 1e4;
  }
  function Sc(e) {
    const t = {};
    let n = -1, i, r, o, a, l, c, s;
    const u = new Mx(e);
    for (; ++n < u.length; ) {
      for (; n in t; ) n = t[n];
      if (i = u.get(n), n && i[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (c = i[1]._tokenizer.events, o = 0, o < c.length && c[o][1].type === "lineEndingBlank" && (o += 2), o < c.length && c[o][1].type === "content")) for (; ++o < c.length && c[o][1].type !== "content"; ) c[o][1].type === "chunkText" && (c[o][1]._isInFirstContentOfListItem = true, o++);
      if (i[0] === "enter") i[1].contentType && (Object.assign(t, Rx(u, n)), n = t[n], s = true);
      else if (i[1]._container) {
        for (o = n, r = void 0; o--; ) if (a = u.get(o), a[1].type === "lineEnding" || a[1].type === "lineEndingBlank") a[0] === "enter" && (r && (u.get(r)[1].type = "lineEndingBlank"), a[1].type = "lineEnding", r = o);
        else if (!(a[1].type === "linePrefix" || a[1].type === "listItemIndent")) break;
        r && (i[1].end = {
          ...u.get(r)[1].start
        }, l = u.slice(r, n), l.unshift(i), u.splice(r, n - r + 1, l));
      }
    }
    return kt(e, 0, Number.POSITIVE_INFINITY, u.slice(0)), !s;
  }
  function Rx(e, t) {
    const n = e.get(t)[1], i = e.get(t)[2];
    let r = t - 1;
    const o = [];
    let a = n._tokenizer;
    a || (a = i.parser[n.contentType](n.start), n._contentTypeTextTrailing && (a._contentTypeTextTrailing = true));
    const l = a.events, c = [], s = {};
    let u, p, f = -1, d = n, x = 0, v = 0;
    const C = [
      v
    ];
    for (; d; ) {
      for (; e.get(++r)[1] !== d; ) ;
      o.push(r), d._tokenizer || (u = i.sliceStream(d), d.next || u.push(null), p && a.defineSkip(d.start), d._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = true), a.write(u), d._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = void 0)), p = d, d = d.next;
    }
    for (d = n; ++f < l.length; ) l[f][0] === "exit" && l[f - 1][0] === "enter" && l[f][1].type === l[f - 1][1].type && l[f][1].start.line !== l[f][1].end.line && (v = f + 1, C.push(v), d._tokenizer = void 0, d.previous = void 0, d = d.next);
    for (a.events = [], d ? (d._tokenizer = void 0, d.previous = void 0) : C.pop(), f = C.length; f--; ) {
      const k = l.slice(C[f], C[f + 1]), j = o.pop();
      c.push([
        j,
        j + k.length - 1
      ]), e.splice(j, 2, k);
    }
    for (c.reverse(), f = -1; ++f < c.length; ) s[x + c[f][0]] = x + c[f][1], x += c[f][1] - c[f][0] - 1;
    return s;
  }
  const Ax = {
    resolve: Lx,
    tokenize: Fx
  }, Dx = {
    partial: true,
    tokenize: zx
  };
  function Lx(e) {
    return Sc(e), e;
  }
  function Fx(e, t) {
    let n;
    return i;
    function i(l) {
      return e.enter("content"), n = e.enter("chunkContent", {
        contentType: "content"
      }), r(l);
    }
    function r(l) {
      return l === null ? o(l) : ie(l) ? e.check(Dx, a, o)(l) : (e.consume(l), r);
    }
    function o(l) {
      return e.exit("chunkContent"), e.exit("content"), t(l);
    }
    function a(l) {
      return e.consume(l), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
        contentType: "content",
        previous: n
      }), n = n.next, r;
    }
  }
  function zx(e, t, n) {
    const i = this;
    return r;
    function r(a) {
      return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), Ee(e, o, "linePrefix");
    }
    function o(a) {
      if (a === null || ie(a)) return n(a);
      const l = i.events[i.events.length - 1];
      return !i.parser.constructs.disable.null.includes("codeIndented") && l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], true).length >= 4 ? t(a) : e.interrupt(i.parser.constructs.flow, n, t)(a);
    }
  }
  function _c(e, t, n, i, r, o, a, l, c) {
    const s = c || Number.POSITIVE_INFINITY;
    let u = 0;
    return p;
    function p(k) {
      return k === 60 ? (e.enter(i), e.enter(r), e.enter(o), e.consume(k), e.exit(o), f) : k === null || k === 32 || k === 41 || to(k) ? n(k) : (e.enter(i), e.enter(a), e.enter(l), e.enter("chunkString", {
        contentType: "string"
      }), v(k));
    }
    function f(k) {
      return k === 62 ? (e.enter(o), e.consume(k), e.exit(o), e.exit(r), e.exit(i), t) : (e.enter(l), e.enter("chunkString", {
        contentType: "string"
      }), d(k));
    }
    function d(k) {
      return k === 62 ? (e.exit("chunkString"), e.exit(l), f(k)) : k === null || k === 60 || ie(k) ? n(k) : (e.consume(k), k === 92 ? x : d);
    }
    function x(k) {
      return k === 60 || k === 62 || k === 92 ? (e.consume(k), d) : d(k);
    }
    function v(k) {
      return !u && (k === null || k === 41 || Ze(k)) ? (e.exit("chunkString"), e.exit(l), e.exit(a), e.exit(i), t(k)) : u < s && k === 40 ? (e.consume(k), u++, v) : k === 41 ? (e.consume(k), u--, v) : k === null || k === 32 || k === 40 || to(k) ? n(k) : (e.consume(k), k === 92 ? C : v);
    }
    function C(k) {
      return k === 40 || k === 41 || k === 92 ? (e.consume(k), v) : v(k);
    }
  }
  function jc(e, t, n, i, r, o) {
    const a = this;
    let l = 0, c;
    return s;
    function s(d) {
      return e.enter(i), e.enter(r), e.consume(d), e.exit(r), e.enter(o), u;
    }
    function u(d) {
      return l > 999 || d === null || d === 91 || d === 93 && !c || d === 94 && !l && "_hiddenFootnoteSupport" in a.parser.constructs ? n(d) : d === 93 ? (e.exit(o), e.enter(r), e.consume(d), e.exit(r), e.exit(i), t) : ie(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), u) : (e.enter("chunkString", {
        contentType: "string"
      }), p(d));
    }
    function p(d) {
      return d === null || d === 91 || d === 93 || ie(d) || l++ > 999 ? (e.exit("chunkString"), u(d)) : (e.consume(d), c || (c = !be(d)), d === 92 ? f : p);
    }
    function f(d) {
      return d === 91 || d === 92 || d === 93 ? (e.consume(d), l++, p) : p(d);
    }
  }
  function Ec(e, t, n, i, r, o) {
    let a;
    return l;
    function l(f) {
      return f === 34 || f === 39 || f === 40 ? (e.enter(i), e.enter(r), e.consume(f), e.exit(r), a = f === 40 ? 41 : f, c) : n(f);
    }
    function c(f) {
      return f === a ? (e.enter(r), e.consume(f), e.exit(r), e.exit(i), t) : (e.enter(o), s(f));
    }
    function s(f) {
      return f === a ? (e.exit(o), c(a)) : f === null ? n(f) : ie(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), Ee(e, s, "linePrefix")) : (e.enter("chunkString", {
        contentType: "string"
      }), u(f));
    }
    function u(f) {
      return f === a || f === null || ie(f) ? (e.exit("chunkString"), s(f)) : (e.consume(f), f === 92 ? p : u);
    }
    function p(f) {
      return f === a || f === 92 ? (e.consume(f), u) : u(f);
    }
  }
  function Tn(e, t) {
    let n;
    return i;
    function i(r) {
      return ie(r) ? (e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), n = true, i) : be(r) ? Ee(e, i, n ? "linePrefix" : "lineSuffix")(r) : t(r);
    }
  }
  const Bx = {
    name: "definition",
    tokenize: $x
  }, Hx = {
    partial: true,
    tokenize: qx
  };
  function $x(e, t, n) {
    const i = this;
    let r;
    return o;
    function o(d) {
      return e.enter("definition"), a(d);
    }
    function a(d) {
      return jc.call(i, e, l, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(d);
    }
    function l(d) {
      return r = Zt(i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1)), d === 58 ? (e.enter("definitionMarker"), e.consume(d), e.exit("definitionMarker"), c) : n(d);
    }
    function c(d) {
      return Ze(d) ? Tn(e, s)(d) : s(d);
    }
    function s(d) {
      return _c(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(d);
    }
    function u(d) {
      return e.attempt(Hx, p, p)(d);
    }
    function p(d) {
      return be(d) ? Ee(e, f, "whitespace")(d) : f(d);
    }
    function f(d) {
      return d === null || ie(d) ? (e.exit("definition"), i.parser.defined.push(r), t(d)) : n(d);
    }
  }
  function qx(e, t, n) {
    return i;
    function i(l) {
      return Ze(l) ? Tn(e, r)(l) : n(l);
    }
    function r(l) {
      return Ec(e, o, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(l);
    }
    function o(l) {
      return be(l) ? Ee(e, a, "whitespace")(l) : a(l);
    }
    function a(l) {
      return l === null || ie(l) ? t(l) : n(l);
    }
  }
  const Vx = {
    name: "hardBreakEscape",
    tokenize: Wx
  };
  function Wx(e, t, n) {
    return i;
    function i(o) {
      return e.enter("hardBreakEscape"), e.consume(o), r;
    }
    function r(o) {
      return ie(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o);
    }
  }
  const Ux = {
    name: "headingAtx",
    resolve: Xx,
    tokenize: Kx
  };
  function Xx(e, t) {
    let n = e.length - 2, i = 3, r, o;
    return e[i][1].type === "whitespace" && (i += 2), n - 2 > i && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (i === n - 1 || n - 4 > i && e[n - 2][1].type === "whitespace") && (n -= i + 1 === n ? 2 : 4), n > i && (r = {
      type: "atxHeadingText",
      start: e[i][1].start,
      end: e[n][1].end
    }, o = {
      type: "chunkText",
      start: e[i][1].start,
      end: e[n][1].end,
      contentType: "text"
    }, kt(e, i, n - i + 1, [
      [
        "enter",
        r,
        t
      ],
      [
        "enter",
        o,
        t
      ],
      [
        "exit",
        o,
        t
      ],
      [
        "exit",
        r,
        t
      ]
    ])), e;
  }
  function Kx(e, t, n) {
    let i = 0;
    return r;
    function r(u) {
      return e.enter("atxHeading"), o(u);
    }
    function o(u) {
      return e.enter("atxHeadingSequence"), a(u);
    }
    function a(u) {
      return u === 35 && i++ < 6 ? (e.consume(u), a) : u === null || Ze(u) ? (e.exit("atxHeadingSequence"), l(u)) : n(u);
    }
    function l(u) {
      return u === 35 ? (e.enter("atxHeadingSequence"), c(u)) : u === null || ie(u) ? (e.exit("atxHeading"), t(u)) : be(u) ? Ee(e, l, "whitespace")(u) : (e.enter("atxHeadingText"), s(u));
    }
    function c(u) {
      return u === 35 ? (e.consume(u), c) : (e.exit("atxHeadingSequence"), l(u));
    }
    function s(u) {
      return u === null || u === 35 || Ze(u) ? (e.exit("atxHeadingText"), l(u)) : (e.consume(u), s);
    }
  }
  const Gx = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "search",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul"
  ], ol = [
    "pre",
    "script",
    "style",
    "textarea"
  ], Yx = {
    concrete: true,
    name: "htmlFlow",
    resolveTo: Zx,
    tokenize: ev
  }, Qx = {
    partial: true,
    tokenize: nv
  }, Jx = {
    partial: true,
    tokenize: tv
  };
  function Zx(e) {
    let t = e.length;
    for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); ) ;
    return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
  }
  function ev(e, t, n) {
    const i = this;
    let r, o, a, l, c;
    return s;
    function s(g) {
      return u(g);
    }
    function u(g) {
      return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(g), p;
    }
    function p(g) {
      return g === 33 ? (e.consume(g), f) : g === 47 ? (e.consume(g), o = true, v) : g === 63 ? (e.consume(g), r = 3, i.interrupt ? t : h) : bt(g) ? (e.consume(g), a = String.fromCharCode(g), C) : n(g);
    }
    function f(g) {
      return g === 45 ? (e.consume(g), r = 2, d) : g === 91 ? (e.consume(g), r = 5, l = 0, x) : bt(g) ? (e.consume(g), r = 4, i.interrupt ? t : h) : n(g);
    }
    function d(g) {
      return g === 45 ? (e.consume(g), i.interrupt ? t : h) : n(g);
    }
    function x(g) {
      const G = "CDATA[";
      return g === G.charCodeAt(l++) ? (e.consume(g), l === G.length ? i.interrupt ? t : T : x) : n(g);
    }
    function v(g) {
      return bt(g) ? (e.consume(g), a = String.fromCharCode(g), C) : n(g);
    }
    function C(g) {
      if (g === null || g === 47 || g === 62 || Ze(g)) {
        const G = g === 47, le = a.toLowerCase();
        return !G && !o && ol.includes(le) ? (r = 1, i.interrupt ? t(g) : T(g)) : Gx.includes(a.toLowerCase()) ? (r = 6, G ? (e.consume(g), k) : i.interrupt ? t(g) : T(g)) : (r = 7, i.interrupt && !i.parser.lazy[i.now().line] ? n(g) : o ? j(g) : I(g));
      }
      return g === 45 || rt(g) ? (e.consume(g), a += String.fromCharCode(g), C) : n(g);
    }
    function k(g) {
      return g === 62 ? (e.consume(g), i.interrupt ? t : T) : n(g);
    }
    function j(g) {
      return be(g) ? (e.consume(g), j) : P(g);
    }
    function I(g) {
      return g === 47 ? (e.consume(g), P) : g === 58 || g === 95 || bt(g) ? (e.consume(g), R) : be(g) ? (e.consume(g), I) : P(g);
    }
    function R(g) {
      return g === 45 || g === 46 || g === 58 || g === 95 || rt(g) ? (e.consume(g), R) : L(g);
    }
    function L(g) {
      return g === 61 ? (e.consume(g), O) : be(g) ? (e.consume(g), L) : I(g);
    }
    function O(g) {
      return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? n(g) : g === 34 || g === 39 ? (e.consume(g), c = g, M) : be(g) ? (e.consume(g), O) : F(g);
    }
    function M(g) {
      return g === c ? (e.consume(g), c = null, D) : g === null || ie(g) ? n(g) : (e.consume(g), M);
    }
    function F(g) {
      return g === null || g === 34 || g === 39 || g === 47 || g === 60 || g === 61 || g === 62 || g === 96 || Ze(g) ? L(g) : (e.consume(g), F);
    }
    function D(g) {
      return g === 47 || g === 62 || be(g) ? I(g) : n(g);
    }
    function P(g) {
      return g === 62 ? (e.consume(g), N) : n(g);
    }
    function N(g) {
      return g === null || ie(g) ? T(g) : be(g) ? (e.consume(g), N) : n(g);
    }
    function T(g) {
      return g === 45 && r === 2 ? (e.consume(g), z) : g === 60 && r === 1 ? (e.consume(g), H) : g === 62 && r === 4 ? (e.consume(g), U) : g === 63 && r === 3 ? (e.consume(g), h) : g === 93 && r === 5 ? (e.consume(g), q) : ie(g) && (r === 6 || r === 7) ? (e.exit("htmlFlowData"), e.check(Qx, Q, y)(g)) : g === null || ie(g) ? (e.exit("htmlFlowData"), y(g)) : (e.consume(g), T);
    }
    function y(g) {
      return e.check(Jx, w, Q)(g);
    }
    function w(g) {
      return e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), S;
    }
    function S(g) {
      return g === null || ie(g) ? y(g) : (e.enter("htmlFlowData"), T(g));
    }
    function z(g) {
      return g === 45 ? (e.consume(g), h) : T(g);
    }
    function H(g) {
      return g === 47 ? (e.consume(g), a = "", W) : T(g);
    }
    function W(g) {
      if (g === 62) {
        const G = a.toLowerCase();
        return ol.includes(G) ? (e.consume(g), U) : T(g);
      }
      return bt(g) && a.length < 8 ? (e.consume(g), a += String.fromCharCode(g), W) : T(g);
    }
    function q(g) {
      return g === 93 ? (e.consume(g), h) : T(g);
    }
    function h(g) {
      return g === 62 ? (e.consume(g), U) : g === 45 && r === 2 ? (e.consume(g), h) : T(g);
    }
    function U(g) {
      return g === null || ie(g) ? (e.exit("htmlFlowData"), Q(g)) : (e.consume(g), U);
    }
    function Q(g) {
      return e.exit("htmlFlow"), t(g);
    }
  }
  function tv(e, t, n) {
    const i = this;
    return r;
    function r(a) {
      return ie(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), o) : n(a);
    }
    function o(a) {
      return i.parser.lazy[i.now().line] ? n(a) : t(a);
    }
  }
  function nv(e, t, n) {
    return i;
    function i(r) {
      return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(Vi, t, n);
    }
  }
  const iv = {
    name: "htmlText",
    tokenize: rv
  };
  function rv(e, t, n) {
    const i = this;
    let r, o, a;
    return l;
    function l(h) {
      return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(h), c;
    }
    function c(h) {
      return h === 33 ? (e.consume(h), s) : h === 47 ? (e.consume(h), L) : h === 63 ? (e.consume(h), I) : bt(h) ? (e.consume(h), F) : n(h);
    }
    function s(h) {
      return h === 45 ? (e.consume(h), u) : h === 91 ? (e.consume(h), o = 0, x) : bt(h) ? (e.consume(h), j) : n(h);
    }
    function u(h) {
      return h === 45 ? (e.consume(h), d) : n(h);
    }
    function p(h) {
      return h === null ? n(h) : h === 45 ? (e.consume(h), f) : ie(h) ? (a = p, H(h)) : (e.consume(h), p);
    }
    function f(h) {
      return h === 45 ? (e.consume(h), d) : p(h);
    }
    function d(h) {
      return h === 62 ? z(h) : h === 45 ? f(h) : p(h);
    }
    function x(h) {
      const U = "CDATA[";
      return h === U.charCodeAt(o++) ? (e.consume(h), o === U.length ? v : x) : n(h);
    }
    function v(h) {
      return h === null ? n(h) : h === 93 ? (e.consume(h), C) : ie(h) ? (a = v, H(h)) : (e.consume(h), v);
    }
    function C(h) {
      return h === 93 ? (e.consume(h), k) : v(h);
    }
    function k(h) {
      return h === 62 ? z(h) : h === 93 ? (e.consume(h), k) : v(h);
    }
    function j(h) {
      return h === null || h === 62 ? z(h) : ie(h) ? (a = j, H(h)) : (e.consume(h), j);
    }
    function I(h) {
      return h === null ? n(h) : h === 63 ? (e.consume(h), R) : ie(h) ? (a = I, H(h)) : (e.consume(h), I);
    }
    function R(h) {
      return h === 62 ? z(h) : I(h);
    }
    function L(h) {
      return bt(h) ? (e.consume(h), O) : n(h);
    }
    function O(h) {
      return h === 45 || rt(h) ? (e.consume(h), O) : M(h);
    }
    function M(h) {
      return ie(h) ? (a = M, H(h)) : be(h) ? (e.consume(h), M) : z(h);
    }
    function F(h) {
      return h === 45 || rt(h) ? (e.consume(h), F) : h === 47 || h === 62 || Ze(h) ? D(h) : n(h);
    }
    function D(h) {
      return h === 47 ? (e.consume(h), z) : h === 58 || h === 95 || bt(h) ? (e.consume(h), P) : ie(h) ? (a = D, H(h)) : be(h) ? (e.consume(h), D) : z(h);
    }
    function P(h) {
      return h === 45 || h === 46 || h === 58 || h === 95 || rt(h) ? (e.consume(h), P) : N(h);
    }
    function N(h) {
      return h === 61 ? (e.consume(h), T) : ie(h) ? (a = N, H(h)) : be(h) ? (e.consume(h), N) : D(h);
    }
    function T(h) {
      return h === null || h === 60 || h === 61 || h === 62 || h === 96 ? n(h) : h === 34 || h === 39 ? (e.consume(h), r = h, y) : ie(h) ? (a = T, H(h)) : be(h) ? (e.consume(h), T) : (e.consume(h), w);
    }
    function y(h) {
      return h === r ? (e.consume(h), r = void 0, S) : h === null ? n(h) : ie(h) ? (a = y, H(h)) : (e.consume(h), y);
    }
    function w(h) {
      return h === null || h === 34 || h === 39 || h === 60 || h === 61 || h === 96 ? n(h) : h === 47 || h === 62 || Ze(h) ? D(h) : (e.consume(h), w);
    }
    function S(h) {
      return h === 47 || h === 62 || Ze(h) ? D(h) : n(h);
    }
    function z(h) {
      return h === 62 ? (e.consume(h), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(h);
    }
    function H(h) {
      return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), W;
    }
    function W(h) {
      return be(h) ? Ee(e, q, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(h) : q(h);
    }
    function q(h) {
      return e.enter("htmlTextData"), a(h);
    }
  }
  const zo = {
    name: "labelEnd",
    resolveAll: sv,
    resolveTo: cv,
    tokenize: uv
  }, ov = {
    tokenize: pv
  }, av = {
    tokenize: dv
  }, lv = {
    tokenize: fv
  };
  function sv(e) {
    let t = -1;
    const n = [];
    for (; ++t < e.length; ) {
      const i = e[t][1];
      if (n.push(e[t]), i.type === "labelImage" || i.type === "labelLink" || i.type === "labelEnd") {
        const r = i.type === "labelImage" ? 4 : 2;
        i.type = "data", t += r;
      }
    }
    return e.length !== n.length && kt(e, 0, e.length, n), e;
  }
  function cv(e, t) {
    let n = e.length, i = 0, r, o, a, l;
    for (; n--; ) if (r = e[n][1], o) {
      if (r.type === "link" || r.type === "labelLink" && r._inactive) break;
      e[n][0] === "enter" && r.type === "labelLink" && (r._inactive = true);
    } else if (a) {
      if (e[n][0] === "enter" && (r.type === "labelImage" || r.type === "labelLink") && !r._balanced && (o = n, r.type !== "labelLink")) {
        i = 2;
        break;
      }
    } else r.type === "labelEnd" && (a = n);
    const c = {
      type: e[o][1].type === "labelLink" ? "link" : "image",
      start: {
        ...e[o][1].start
      },
      end: {
        ...e[e.length - 1][1].end
      }
    }, s = {
      type: "label",
      start: {
        ...e[o][1].start
      },
      end: {
        ...e[a][1].end
      }
    }, u = {
      type: "labelText",
      start: {
        ...e[o + i + 2][1].end
      },
      end: {
        ...e[a - 2][1].start
      }
    };
    return l = [
      [
        "enter",
        c,
        t
      ],
      [
        "enter",
        s,
        t
      ]
    ], l = at(l, e.slice(o + 1, o + i + 3)), l = at(l, [
      [
        "enter",
        u,
        t
      ]
    ]), l = at(l, Fo(t.parser.constructs.insideSpan.null, e.slice(o + i + 4, a - 3), t)), l = at(l, [
      [
        "exit",
        u,
        t
      ],
      e[a - 2],
      e[a - 1],
      [
        "exit",
        s,
        t
      ]
    ]), l = at(l, e.slice(a + 1)), l = at(l, [
      [
        "exit",
        c,
        t
      ]
    ]), kt(e, o, e.length, l), e;
  }
  function uv(e, t, n) {
    const i = this;
    let r = i.events.length, o, a;
    for (; r--; ) if ((i.events[r][1].type === "labelImage" || i.events[r][1].type === "labelLink") && !i.events[r][1]._balanced) {
      o = i.events[r][1];
      break;
    }
    return l;
    function l(f) {
      return o ? o._inactive ? p(f) : (a = i.parser.defined.includes(Zt(i.sliceSerialize({
        start: o.end,
        end: i.now()
      }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(f), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(f);
    }
    function c(f) {
      return f === 40 ? e.attempt(ov, u, a ? u : p)(f) : f === 91 ? e.attempt(av, u, a ? s : p)(f) : a ? u(f) : p(f);
    }
    function s(f) {
      return e.attempt(lv, u, p)(f);
    }
    function u(f) {
      return t(f);
    }
    function p(f) {
      return o._balanced = true, n(f);
    }
  }
  function pv(e, t, n) {
    return i;
    function i(p) {
      return e.enter("resource"), e.enter("resourceMarker"), e.consume(p), e.exit("resourceMarker"), r;
    }
    function r(p) {
      return Ze(p) ? Tn(e, o)(p) : o(p);
    }
    function o(p) {
      return p === 41 ? u(p) : _c(e, a, l, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(p);
    }
    function a(p) {
      return Ze(p) ? Tn(e, c)(p) : u(p);
    }
    function l(p) {
      return n(p);
    }
    function c(p) {
      return p === 34 || p === 39 || p === 40 ? Ec(e, s, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(p) : u(p);
    }
    function s(p) {
      return Ze(p) ? Tn(e, u)(p) : u(p);
    }
    function u(p) {
      return p === 41 ? (e.enter("resourceMarker"), e.consume(p), e.exit("resourceMarker"), e.exit("resource"), t) : n(p);
    }
  }
  function dv(e, t, n) {
    const i = this;
    return r;
    function r(l) {
      return jc.call(i, e, o, a, "reference", "referenceMarker", "referenceString")(l);
    }
    function o(l) {
      return i.parser.defined.includes(Zt(i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1))) ? t(l) : n(l);
    }
    function a(l) {
      return n(l);
    }
  }
  function fv(e, t, n) {
    return i;
    function i(o) {
      return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), r;
    }
    function r(o) {
      return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o);
    }
  }
  const mv = {
    name: "labelStartImage",
    resolveAll: zo.resolveAll,
    tokenize: hv
  };
  function hv(e, t, n) {
    const i = this;
    return r;
    function r(l) {
      return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(l), e.exit("labelImageMarker"), o;
    }
    function o(l) {
      return l === 91 ? (e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelImage"), a) : n(l);
    }
    function a(l) {
      return l === 94 && "_hiddenFootnoteSupport" in i.parser.constructs ? n(l) : t(l);
    }
  }
  const gv = {
    name: "labelStartLink",
    resolveAll: zo.resolveAll,
    tokenize: xv
  };
  function xv(e, t, n) {
    const i = this;
    return r;
    function r(a) {
      return e.enter("labelLink"), e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelLink"), o;
    }
    function o(a) {
      return a === 94 && "_hiddenFootnoteSupport" in i.parser.constructs ? n(a) : t(a);
    }
  }
  const yr = {
    name: "lineEnding",
    tokenize: vv
  };
  function vv(e, t) {
    return n;
    function n(i) {
      return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), Ee(e, t, "linePrefix");
    }
  }
  const vi = {
    name: "thematicBreak",
    tokenize: bv
  };
  function bv(e, t, n) {
    let i = 0, r;
    return o;
    function o(s) {
      return e.enter("thematicBreak"), a(s);
    }
    function a(s) {
      return r = s, l(s);
    }
    function l(s) {
      return s === r ? (e.enter("thematicBreakSequence"), c(s)) : i >= 3 && (s === null || ie(s)) ? (e.exit("thematicBreak"), t(s)) : n(s);
    }
    function c(s) {
      return s === r ? (e.consume(s), i++, c) : (e.exit("thematicBreakSequence"), be(s) ? Ee(e, l, "whitespace")(s) : l(s));
    }
  }
  const Je = {
    continuation: {
      tokenize: Cv
    },
    exit: Sv,
    name: "list",
    tokenize: kv
  }, yv = {
    partial: true,
    tokenize: _v
  }, wv = {
    partial: true,
    tokenize: Ov
  };
  function kv(e, t, n) {
    const i = this, r = i.events[i.events.length - 1];
    let o = r && r[1].type === "linePrefix" ? r[2].sliceSerialize(r[1], true).length : 0, a = 0;
    return l;
    function l(d) {
      const x = i.containerState.type || (d === 42 || d === 43 || d === 45 ? "listUnordered" : "listOrdered");
      if (x === "listUnordered" ? !i.containerState.marker || d === i.containerState.marker : no(d)) {
        if (i.containerState.type || (i.containerState.type = x, e.enter(x, {
          _container: true
        })), x === "listUnordered") return e.enter("listItemPrefix"), d === 42 || d === 45 ? e.check(vi, n, s)(d) : s(d);
        if (!i.interrupt || d === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), c(d);
      }
      return n(d);
    }
    function c(d) {
      return no(d) && ++a < 10 ? (e.consume(d), c) : (!i.interrupt || a < 2) && (i.containerState.marker ? d === i.containerState.marker : d === 41 || d === 46) ? (e.exit("listItemValue"), s(d)) : n(d);
    }
    function s(d) {
      return e.enter("listItemMarker"), e.consume(d), e.exit("listItemMarker"), i.containerState.marker = i.containerState.marker || d, e.check(Vi, i.interrupt ? n : u, e.attempt(yv, f, p));
    }
    function u(d) {
      return i.containerState.initialBlankLine = true, o++, f(d);
    }
    function p(d) {
      return be(d) ? (e.enter("listItemPrefixWhitespace"), e.consume(d), e.exit("listItemPrefixWhitespace"), f) : n(d);
    }
    function f(d) {
      return i.containerState.size = o + i.sliceSerialize(e.exit("listItemPrefix"), true).length, t(d);
    }
  }
  function Cv(e, t, n) {
    const i = this;
    return i.containerState._closeFlow = void 0, e.check(Vi, r, o);
    function r(l) {
      return i.containerState.furtherBlankLines = i.containerState.furtherBlankLines || i.containerState.initialBlankLine, Ee(e, t, "listItemIndent", i.containerState.size + 1)(l);
    }
    function o(l) {
      return i.containerState.furtherBlankLines || !be(l) ? (i.containerState.furtherBlankLines = void 0, i.containerState.initialBlankLine = void 0, a(l)) : (i.containerState.furtherBlankLines = void 0, i.containerState.initialBlankLine = void 0, e.attempt(wv, t, a)(l));
    }
    function a(l) {
      return i.containerState._closeFlow = true, i.interrupt = void 0, Ee(e, e.attempt(Je, t, n), "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l);
    }
  }
  function Ov(e, t, n) {
    const i = this;
    return Ee(e, r, "listItemIndent", i.containerState.size + 1);
    function r(o) {
      const a = i.events[i.events.length - 1];
      return a && a[1].type === "listItemIndent" && a[2].sliceSerialize(a[1], true).length === i.containerState.size ? t(o) : n(o);
    }
  }
  function Sv(e) {
    e.exit(this.containerState.type);
  }
  function _v(e, t, n) {
    const i = this;
    return Ee(e, r, "listItemPrefixWhitespace", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
    function r(o) {
      const a = i.events[i.events.length - 1];
      return !be(o) && a && a[1].type === "listItemPrefixWhitespace" ? t(o) : n(o);
    }
  }
  const al = {
    name: "setextUnderline",
    resolveTo: jv,
    tokenize: Ev
  };
  function jv(e, t) {
    let n = e.length, i, r, o;
    for (; n--; ) if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        i = n;
        break;
      }
      e[n][1].type === "paragraph" && (r = n);
    } else e[n][1].type === "content" && e.splice(n, 1), !o && e[n][1].type === "definition" && (o = n);
    const a = {
      type: "setextHeading",
      start: {
        ...e[i][1].start
      },
      end: {
        ...e[e.length - 1][1].end
      }
    };
    return e[r][1].type = "setextHeadingText", o ? (e.splice(r, 0, [
      "enter",
      a,
      t
    ]), e.splice(o + 1, 0, [
      "exit",
      e[i][1],
      t
    ]), e[i][1].end = {
      ...e[o][1].end
    }) : e[i][1] = a, e.push([
      "exit",
      a,
      t
    ]), e;
  }
  function Ev(e, t, n) {
    const i = this;
    let r;
    return o;
    function o(s) {
      let u = i.events.length, p;
      for (; u--; ) if (i.events[u][1].type !== "lineEnding" && i.events[u][1].type !== "linePrefix" && i.events[u][1].type !== "content") {
        p = i.events[u][1].type === "paragraph";
        break;
      }
      return !i.parser.lazy[i.now().line] && (i.interrupt || p) ? (e.enter("setextHeadingLine"), r = s, a(s)) : n(s);
    }
    function a(s) {
      return e.enter("setextHeadingLineSequence"), l(s);
    }
    function l(s) {
      return s === r ? (e.consume(s), l) : (e.exit("setextHeadingLineSequence"), be(s) ? Ee(e, c, "lineSuffix")(s) : c(s));
    }
    function c(s) {
      return s === null || ie(s) ? (e.exit("setextHeadingLine"), t(s)) : n(s);
    }
  }
  const Iv = {
    tokenize: Pv
  };
  function Pv(e) {
    const t = this, n = e.attempt(Vi, i, e.attempt(this.parser.constructs.flowInitial, r, Ee(e, e.attempt(this.parser.constructs.flow, r, e.attempt(Ax, r)), "linePrefix")));
    return n;
    function i(o) {
      if (o === null) {
        e.consume(o);
        return;
      }
      return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
    }
    function r(o) {
      if (o === null) {
        e.consume(o);
        return;
      }
      return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), t.currentConstruct = void 0, n;
    }
  }
  const Tv = {
    resolveAll: Pc()
  }, Nv = Ic("string"), Mv = Ic("text");
  function Ic(e) {
    return {
      resolveAll: Pc(e === "text" ? Rv : void 0),
      tokenize: t
    };
    function t(n) {
      const i = this, r = this.parser.constructs[e], o = n.attempt(r, a, l);
      return a;
      function a(u) {
        return s(u) ? o(u) : l(u);
      }
      function l(u) {
        if (u === null) {
          n.consume(u);
          return;
        }
        return n.enter("data"), n.consume(u), c;
      }
      function c(u) {
        return s(u) ? (n.exit("data"), o(u)) : (n.consume(u), c);
      }
      function s(u) {
        if (u === null) return true;
        const p = r[u];
        let f = -1;
        if (p) for (; ++f < p.length; ) {
          const d = p[f];
          if (!d.previous || d.previous.call(i, i.previous)) return true;
        }
        return false;
      }
    }
  }
  function Pc(e) {
    return t;
    function t(n, i) {
      let r = -1, o;
      for (; ++r <= n.length; ) o === void 0 ? n[r] && n[r][1].type === "data" && (o = r, r++) : (!n[r] || n[r][1].type !== "data") && (r !== o + 2 && (n[o][1].end = n[r - 1][1].end, n.splice(o + 2, r - o - 2), r = o + 2), o = void 0);
      return e ? e(n, i) : n;
    }
  }
  function Rv(e, t) {
    let n = 0;
    for (; ++n <= e.length; ) if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const i = e[n - 1][1], r = t.sliceStream(i);
      let o = r.length, a = -1, l = 0, c;
      for (; o--; ) {
        const s = r[o];
        if (typeof s == "string") {
          for (a = s.length; s.charCodeAt(a - 1) === 32; ) l++, a--;
          if (a) break;
          a = -1;
        } else if (s === -2) c = true, l++;
        else if (s !== -1) {
          o++;
          break;
        }
      }
      if (t._contentTypeTextTrailing && n === e.length && (l = 0), l) {
        const s = {
          type: n === e.length || c || l < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: o ? a : i.start._bufferIndex + a,
            _index: i.start._index + o,
            line: i.end.line,
            column: i.end.column - l,
            offset: i.end.offset - l
          },
          end: {
            ...i.end
          }
        };
        i.end = {
          ...s.start
        }, i.start.offset === i.end.offset ? Object.assign(i, s) : (e.splice(n, 0, [
          "enter",
          s,
          t
        ], [
          "exit",
          s,
          t
        ]), n += 2);
      }
      n++;
    }
    return e;
  }
  const Av = {
    42: Je,
    43: Je,
    45: Je,
    48: Je,
    49: Je,
    50: Je,
    51: Je,
    52: Je,
    53: Je,
    54: Je,
    55: Je,
    56: Je,
    57: Je,
    62: kc
  }, Dv = {
    91: Bx
  }, Lv = {
    [-2]: br,
    [-1]: br,
    32: br
  }, Fv = {
    35: Ux,
    42: vi,
    45: [
      al,
      vi
    ],
    60: Yx,
    61: al,
    95: vi,
    96: rl,
    126: rl
  }, zv = {
    38: Oc,
    92: Cc
  }, Bv = {
    [-5]: yr,
    [-4]: yr,
    [-3]: yr,
    33: mv,
    38: Oc,
    42: io,
    60: [
      gx,
      iv
    ],
    91: gv,
    92: [
      Vx,
      Cc
    ],
    93: zo,
    95: io,
    96: Ix
  }, Hv = {
    null: [
      io,
      Tv
    ]
  }, $v = {
    null: [
      42,
      95
    ]
  }, qv = {
    null: []
  }, Vv = Object.freeze(Object.defineProperty({
    __proto__: null,
    attentionMarkers: $v,
    contentInitial: Dv,
    disable: qv,
    document: Av,
    flow: Fv,
    flowInitial: Lv,
    insideSpan: Hv,
    string: zv,
    text: Bv
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  function Wv(e, t, n) {
    let i = {
      _bufferIndex: -1,
      _index: 0,
      line: n && n.line || 1,
      column: n && n.column || 1,
      offset: n && n.offset || 0
    };
    const r = {}, o = [];
    let a = [], l = [];
    const c = {
      attempt: M(L),
      check: M(O),
      consume: j,
      enter: I,
      exit: R,
      interrupt: M(O, {
        interrupt: true
      })
    }, s = {
      code: null,
      containerState: {},
      defineSkip: v,
      events: [],
      now: x,
      parser: e,
      previous: null,
      sliceSerialize: f,
      sliceStream: d,
      write: p
    };
    let u = t.tokenize.call(s, c);
    return t.resolveAll && o.push(t), s;
    function p(N) {
      return a = at(a, N), C(), a[a.length - 1] !== null ? [] : (F(t, 0), s.events = Fo(o, s.events, s), s.events);
    }
    function f(N, T) {
      return Xv(d(N), T);
    }
    function d(N) {
      return Uv(a, N);
    }
    function x() {
      const { _bufferIndex: N, _index: T, line: y, column: w, offset: S } = i;
      return {
        _bufferIndex: N,
        _index: T,
        line: y,
        column: w,
        offset: S
      };
    }
    function v(N) {
      r[N.line] = N.column, P();
    }
    function C() {
      let N;
      for (; i._index < a.length; ) {
        const T = a[i._index];
        if (typeof T == "string") for (N = i._index, i._bufferIndex < 0 && (i._bufferIndex = 0); i._index === N && i._bufferIndex < T.length; ) k(T.charCodeAt(i._bufferIndex));
        else k(T);
      }
    }
    function k(N) {
      u = u(N);
    }
    function j(N) {
      ie(N) ? (i.line++, i.column = 1, i.offset += N === -3 ? 2 : 1, P()) : N !== -1 && (i.column++, i.offset++), i._bufferIndex < 0 ? i._index++ : (i._bufferIndex++, i._bufferIndex === a[i._index].length && (i._bufferIndex = -1, i._index++)), s.previous = N;
    }
    function I(N, T) {
      const y = T || {};
      return y.type = N, y.start = x(), s.events.push([
        "enter",
        y,
        s
      ]), l.push(y), y;
    }
    function R(N) {
      const T = l.pop();
      return T.end = x(), s.events.push([
        "exit",
        T,
        s
      ]), T;
    }
    function L(N, T) {
      F(N, T.from);
    }
    function O(N, T) {
      T.restore();
    }
    function M(N, T) {
      return y;
      function y(w, S, z) {
        let H, W, q, h;
        return Array.isArray(w) ? Q(w) : "tokenize" in w ? Q([
          w
        ]) : U(w);
        function U(ee) {
          return ke;
          function ke(me) {
            const ve = me !== null && ee[me], xe = me !== null && ee.null, ue = [
              ...Array.isArray(ve) ? ve : ve ? [
                ve
              ] : [],
              ...Array.isArray(xe) ? xe : xe ? [
                xe
              ] : []
            ];
            return Q(ue)(me);
          }
        }
        function Q(ee) {
          return H = ee, W = 0, ee.length === 0 ? z : g(ee[W]);
        }
        function g(ee) {
          return ke;
          function ke(me) {
            return h = D(), q = ee, ee.partial || (s.currentConstruct = ee), ee.name && s.parser.constructs.disable.null.includes(ee.name) ? le() : ee.tokenize.call(T ? Object.assign(Object.create(s), T) : s, c, G, le)(me);
          }
        }
        function G(ee) {
          return N(q, h), S;
        }
        function le(ee) {
          return h.restore(), ++W < H.length ? g(H[W]) : z;
        }
      }
    }
    function F(N, T) {
      N.resolveAll && !o.includes(N) && o.push(N), N.resolve && kt(s.events, T, s.events.length - T, N.resolve(s.events.slice(T), s)), N.resolveTo && (s.events = N.resolveTo(s.events, s));
    }
    function D() {
      const N = x(), T = s.previous, y = s.currentConstruct, w = s.events.length, S = Array.from(l);
      return {
        from: w,
        restore: z
      };
      function z() {
        i = N, s.previous = T, s.currentConstruct = y, s.events.length = w, l = S, P();
      }
    }
    function P() {
      i.line in r && i.column < 2 && (i.column = r[i.line], i.offset += r[i.line] - 1);
    }
  }
  function Uv(e, t) {
    const n = t.start._index, i = t.start._bufferIndex, r = t.end._index, o = t.end._bufferIndex;
    let a;
    if (n === r) a = [
      e[n].slice(i, o)
    ];
    else {
      if (a = e.slice(n, r), i > -1) {
        const l = a[0];
        typeof l == "string" ? a[0] = l.slice(i) : a.shift();
      }
      o > 0 && a.push(e[r].slice(0, o));
    }
    return a;
  }
  function Xv(e, t) {
    let n = -1;
    const i = [];
    let r;
    for (; ++n < e.length; ) {
      const o = e[n];
      let a;
      if (typeof o == "string") a = o;
      else switch (o) {
        case -5: {
          a = "\r";
          break;
        }
        case -4: {
          a = `
`;
          break;
        }
        case -3: {
          a = `\r
`;
          break;
        }
        case -2: {
          a = t ? " " : "	";
          break;
        }
        case -1: {
          if (!t && r) continue;
          a = " ";
          break;
        }
        default:
          a = String.fromCharCode(o);
      }
      r = o === -2, i.push(a);
    }
    return i.join("");
  }
  function Kv(e) {
    const i = {
      constructs: tx([
        Vv,
        ...(e || {}).extensions || []
      ]),
      content: r(cx),
      defined: [],
      document: r(px),
      flow: r(Iv),
      lazy: {},
      string: r(Nv),
      text: r(Mv)
    };
    return i;
    function r(o) {
      return a;
      function a(l) {
        return Wv(i, o, l);
      }
    }
  }
  function Gv(e) {
    for (; !Sc(e); ) ;
    return e;
  }
  const ll = /[\0\t\n\r]/g;
  function Yv() {
    let e = 1, t = "", n = true, i;
    return r;
    function r(o, a, l) {
      const c = [];
      let s, u, p, f, d;
      for (o = t + (typeof o == "string" ? o.toString() : new TextDecoder(a || void 0).decode(o)), p = 0, t = "", n && (o.charCodeAt(0) === 65279 && p++, n = void 0); p < o.length; ) {
        if (ll.lastIndex = p, s = ll.exec(o), f = s && s.index !== void 0 ? s.index : o.length, d = o.charCodeAt(f), !s) {
          t = o.slice(p);
          break;
        }
        if (d === 10 && p === f && i) c.push(-3), i = void 0;
        else switch (i && (c.push(-5), i = void 0), p < f && (c.push(o.slice(p, f)), e += f - p), d) {
          case 0: {
            c.push(65533), e++;
            break;
          }
          case 9: {
            for (u = Math.ceil(e / 4) * 4, c.push(-2); e++ < u; ) c.push(-1);
            break;
          }
          case 10: {
            c.push(-4), e = 1;
            break;
          }
          default:
            i = true, e = 1;
        }
        p = f + 1;
      }
      return l && (i && c.push(-5), t && c.push(t), c.push(null)), c;
    }
  }
  const Qv = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
  function Jv(e) {
    return e.replace(Qv, Zv);
  }
  function Zv(e, t, n) {
    if (t) return t;
    if (n.charCodeAt(0) === 35) {
      const r = n.charCodeAt(1), o = r === 120 || r === 88;
      return wc(n.slice(o ? 2 : 1), o ? 16 : 10);
    }
    return Lo(n) || e;
  }
  const Tc = {}.hasOwnProperty;
  function eb(e, t, n) {
    return typeof t != "string" && (n = t, t = void 0), tb(n)(Gv(Kv(n).document().write(Yv()(e, t, true))));
  }
  function tb(e) {
    const t = {
      transforms: [],
      canContainEols: [
        "emphasis",
        "fragment",
        "heading",
        "paragraph",
        "strong"
      ],
      enter: {
        autolink: o(Y),
        autolinkProtocol: D,
        autolinkEmail: D,
        atxHeading: o(qe),
        blockQuote: o(xe),
        characterEscape: D,
        characterReference: D,
        codeFenced: o(ue),
        codeFencedFenceInfo: a,
        codeFencedFenceMeta: a,
        codeIndented: o(ue, a),
        codeText: o(Ie, a),
        codeTextData: D,
        data: D,
        codeFlowValue: D,
        definition: o(He),
        definitionDestinationString: a,
        definitionLabelString: a,
        definitionTitleString: a,
        emphasis: o($e),
        hardBreakEscape: o(Pe),
        hardBreakTrailing: o(Pe),
        htmlFlow: o(de, a),
        htmlFlowData: D,
        htmlText: o(de, a),
        htmlTextData: D,
        image: o(ze),
        label: a,
        link: o(Y),
        listItem: o(se),
        listItemValue: f,
        listOrdered: o(J, p),
        listUnordered: o(J),
        paragraph: o(_e),
        reference: g,
        referenceString: a,
        resourceDestinationString: a,
        resourceTitleString: a,
        setextHeading: o(qe),
        strong: o(Ce),
        thematicBreak: o(B)
      },
      exit: {
        atxHeading: c(),
        atxHeadingSequence: L,
        autolink: c(),
        autolinkEmail: ve,
        autolinkProtocol: me,
        blockQuote: c(),
        characterEscapeValue: P,
        characterReferenceMarkerHexadecimal: le,
        characterReferenceMarkerNumeric: le,
        characterReferenceValue: ee,
        characterReference: ke,
        codeFenced: c(C),
        codeFencedFence: v,
        codeFencedFenceInfo: d,
        codeFencedFenceMeta: x,
        codeFlowValue: P,
        codeIndented: c(k),
        codeText: c(S),
        codeTextData: P,
        data: P,
        definition: c(),
        definitionDestinationString: R,
        definitionLabelString: j,
        definitionTitleString: I,
        emphasis: c(),
        hardBreakEscape: c(T),
        hardBreakTrailing: c(T),
        htmlFlow: c(y),
        htmlFlowData: P,
        htmlText: c(w),
        htmlTextData: P,
        image: c(H),
        label: q,
        labelText: W,
        lineEnding: N,
        link: c(z),
        listItem: c(),
        listOrdered: c(),
        listUnordered: c(),
        paragraph: c(),
        referenceString: G,
        resourceDestinationString: h,
        resourceTitleString: U,
        resource: Q,
        setextHeading: c(F),
        setextHeadingLineSequence: M,
        setextHeadingText: O,
        strong: c(),
        thematicBreak: c()
      }
    };
    Nc(t, (e || {}).mdastExtensions || []);
    const n = {};
    return i;
    function i(_) {
      let A = {
        type: "root",
        children: []
      };
      const X = {
        stack: [
          A
        ],
        tokenStack: [],
        config: t,
        enter: l,
        exit: s,
        buffer: a,
        resume: u,
        data: n
      }, ne = [];
      let pe = -1;
      for (; ++pe < _.length; ) if (_[pe][1].type === "listOrdered" || _[pe][1].type === "listUnordered") if (_[pe][0] === "enter") ne.push(pe);
      else {
        const Ae = ne.pop();
        pe = r(_, Ae, pe);
      }
      for (pe = -1; ++pe < _.length; ) {
        const Ae = t[_[pe][0]];
        Tc.call(Ae, _[pe][1].type) && Ae[_[pe][1].type].call(Object.assign({
          sliceSerialize: _[pe][2].sliceSerialize
        }, X), _[pe][1]);
      }
      if (X.tokenStack.length > 0) {
        const Ae = X.tokenStack[X.tokenStack.length - 1];
        (Ae[1] || sl).call(X, void 0, Ae[0]);
      }
      for (A.position = {
        start: Nt(_.length > 0 ? _[0][1].start : {
          line: 1,
          column: 1,
          offset: 0
        }),
        end: Nt(_.length > 0 ? _[_.length - 2][1].end : {
          line: 1,
          column: 1,
          offset: 0
        })
      }, pe = -1; ++pe < t.transforms.length; ) A = t.transforms[pe](A) || A;
      return A;
    }
    function r(_, A, X) {
      let ne = A - 1, pe = -1, Ae = false, Xe, Z, re, Oe;
      for (; ++ne <= X; ) {
        const te = _[ne];
        switch (te[1].type) {
          case "listUnordered":
          case "listOrdered":
          case "blockQuote": {
            te[0] === "enter" ? pe++ : pe--, Oe = void 0;
            break;
          }
          case "lineEndingBlank": {
            te[0] === "enter" && (Xe && !Oe && !pe && !re && (re = ne), Oe = void 0);
            break;
          }
          case "linePrefix":
          case "listItemValue":
          case "listItemMarker":
          case "listItemPrefix":
          case "listItemPrefixWhitespace":
            break;
          default:
            Oe = void 0;
        }
        if (!pe && te[0] === "enter" && te[1].type === "listItemPrefix" || pe === -1 && te[0] === "exit" && (te[1].type === "listUnordered" || te[1].type === "listOrdered")) {
          if (Xe) {
            let he = ne;
            for (Z = void 0; he--; ) {
              const ge = _[he];
              if (ge[1].type === "lineEnding" || ge[1].type === "lineEndingBlank") {
                if (ge[0] === "exit") continue;
                Z && (_[Z][1].type = "lineEndingBlank", Ae = true), ge[1].type = "lineEnding", Z = he;
              } else if (!(ge[1].type === "linePrefix" || ge[1].type === "blockQuotePrefix" || ge[1].type === "blockQuotePrefixWhitespace" || ge[1].type === "blockQuoteMarker" || ge[1].type === "listItemIndent")) break;
            }
            re && (!Z || re < Z) && (Xe._spread = true), Xe.end = Object.assign({}, Z ? _[Z][1].start : te[1].end), _.splice(Z || ne, 0, [
              "exit",
              Xe,
              te[2]
            ]), ne++, X++;
          }
          if (te[1].type === "listItemPrefix") {
            const he = {
              type: "listItem",
              _spread: false,
              start: Object.assign({}, te[1].start),
              end: void 0
            };
            Xe = he, _.splice(ne, 0, [
              "enter",
              he,
              te[2]
            ]), ne++, X++, re = void 0, Oe = true;
          }
        }
      }
      return _[A][1]._spread = Ae, X;
    }
    function o(_, A) {
      return X;
      function X(ne) {
        l.call(this, _(ne), ne), A && A.call(this, ne);
      }
    }
    function a() {
      this.stack.push({
        type: "fragment",
        children: []
      });
    }
    function l(_, A, X) {
      this.stack[this.stack.length - 1].children.push(_), this.stack.push(_), this.tokenStack.push([
        A,
        X || void 0
      ]), _.position = {
        start: Nt(A.start),
        end: void 0
      };
    }
    function c(_) {
      return A;
      function A(X) {
        _ && _.call(this, X), s.call(this, X);
      }
    }
    function s(_, A) {
      const X = this.stack.pop(), ne = this.tokenStack.pop();
      if (ne) ne[0].type !== _.type && (A ? A.call(this, _, ne[0]) : (ne[1] || sl).call(this, _, ne[0]));
      else throw new Error("Cannot close `" + _.type + "` (" + Pn({
        start: _.start,
        end: _.end
      }) + "): it\u2019s not open");
      X.position.end = Nt(_.end);
    }
    function u() {
      return Zg(this.stack.pop());
    }
    function p() {
      this.data.expectingFirstListItemValue = true;
    }
    function f(_) {
      if (this.data.expectingFirstListItemValue) {
        const A = this.stack[this.stack.length - 2];
        A.start = Number.parseInt(this.sliceSerialize(_), 10), this.data.expectingFirstListItemValue = void 0;
      }
    }
    function d() {
      const _ = this.resume(), A = this.stack[this.stack.length - 1];
      A.lang = _;
    }
    function x() {
      const _ = this.resume(), A = this.stack[this.stack.length - 1];
      A.meta = _;
    }
    function v() {
      this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = true);
    }
    function C() {
      const _ = this.resume(), A = this.stack[this.stack.length - 1];
      A.value = _.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
    }
    function k() {
      const _ = this.resume(), A = this.stack[this.stack.length - 1];
      A.value = _.replace(/(\r?\n|\r)$/g, "");
    }
    function j(_) {
      const A = this.resume(), X = this.stack[this.stack.length - 1];
      X.label = A, X.identifier = Zt(this.sliceSerialize(_)).toLowerCase();
    }
    function I() {
      const _ = this.resume(), A = this.stack[this.stack.length - 1];
      A.title = _;
    }
    function R() {
      const _ = this.resume(), A = this.stack[this.stack.length - 1];
      A.url = _;
    }
    function L(_) {
      const A = this.stack[this.stack.length - 1];
      if (!A.depth) {
        const X = this.sliceSerialize(_).length;
        A.depth = X;
      }
    }
    function O() {
      this.data.setextHeadingSlurpLineEnding = true;
    }
    function M(_) {
      const A = this.stack[this.stack.length - 1];
      A.depth = this.sliceSerialize(_).codePointAt(0) === 61 ? 1 : 2;
    }
    function F() {
      this.data.setextHeadingSlurpLineEnding = void 0;
    }
    function D(_) {
      const X = this.stack[this.stack.length - 1].children;
      let ne = X[X.length - 1];
      (!ne || ne.type !== "text") && (ne = V(), ne.position = {
        start: Nt(_.start),
        end: void 0
      }, X.push(ne)), this.stack.push(ne);
    }
    function P(_) {
      const A = this.stack.pop();
      A.value += this.sliceSerialize(_), A.position.end = Nt(_.end);
    }
    function N(_) {
      const A = this.stack[this.stack.length - 1];
      if (this.data.atHardBreak) {
        const X = A.children[A.children.length - 1];
        X.position.end = Nt(_.end), this.data.atHardBreak = void 0;
        return;
      }
      !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(A.type) && (D.call(this, _), P.call(this, _));
    }
    function T() {
      this.data.atHardBreak = true;
    }
    function y() {
      const _ = this.resume(), A = this.stack[this.stack.length - 1];
      A.value = _;
    }
    function w() {
      const _ = this.resume(), A = this.stack[this.stack.length - 1];
      A.value = _;
    }
    function S() {
      const _ = this.resume(), A = this.stack[this.stack.length - 1];
      A.value = _;
    }
    function z() {
      const _ = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        const A = this.data.referenceType || "shortcut";
        _.type += "Reference", _.referenceType = A, delete _.url, delete _.title;
      } else delete _.identifier, delete _.label;
      this.data.referenceType = void 0;
    }
    function H() {
      const _ = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        const A = this.data.referenceType || "shortcut";
        _.type += "Reference", _.referenceType = A, delete _.url, delete _.title;
      } else delete _.identifier, delete _.label;
      this.data.referenceType = void 0;
    }
    function W(_) {
      const A = this.sliceSerialize(_), X = this.stack[this.stack.length - 2];
      X.label = Jv(A), X.identifier = Zt(A).toLowerCase();
    }
    function q() {
      const _ = this.stack[this.stack.length - 1], A = this.resume(), X = this.stack[this.stack.length - 1];
      if (this.data.inReference = true, X.type === "link") {
        const ne = _.children;
        X.children = ne;
      } else X.alt = A;
    }
    function h() {
      const _ = this.resume(), A = this.stack[this.stack.length - 1];
      A.url = _;
    }
    function U() {
      const _ = this.resume(), A = this.stack[this.stack.length - 1];
      A.title = _;
    }
    function Q() {
      this.data.inReference = void 0;
    }
    function g() {
      this.data.referenceType = "collapsed";
    }
    function G(_) {
      const A = this.resume(), X = this.stack[this.stack.length - 1];
      X.label = A, X.identifier = Zt(this.sliceSerialize(_)).toLowerCase(), this.data.referenceType = "full";
    }
    function le(_) {
      this.data.characterReferenceType = _.type;
    }
    function ee(_) {
      const A = this.sliceSerialize(_), X = this.data.characterReferenceType;
      let ne;
      X ? (ne = wc(A, X === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : ne = Lo(A);
      const pe = this.stack[this.stack.length - 1];
      pe.value += ne;
    }
    function ke(_) {
      const A = this.stack.pop();
      A.position.end = Nt(_.end);
    }
    function me(_) {
      P.call(this, _);
      const A = this.stack[this.stack.length - 1];
      A.url = this.sliceSerialize(_);
    }
    function ve(_) {
      P.call(this, _);
      const A = this.stack[this.stack.length - 1];
      A.url = "mailto:" + this.sliceSerialize(_);
    }
    function xe() {
      return {
        type: "blockquote",
        children: []
      };
    }
    function ue() {
      return {
        type: "code",
        lang: null,
        meta: null,
        value: ""
      };
    }
    function Ie() {
      return {
        type: "inlineCode",
        value: ""
      };
    }
    function He() {
      return {
        type: "definition",
        identifier: "",
        label: null,
        title: null,
        url: ""
      };
    }
    function $e() {
      return {
        type: "emphasis",
        children: []
      };
    }
    function qe() {
      return {
        type: "heading",
        depth: 0,
        children: []
      };
    }
    function Pe() {
      return {
        type: "break"
      };
    }
    function de() {
      return {
        type: "html",
        value: ""
      };
    }
    function ze() {
      return {
        type: "image",
        title: null,
        url: "",
        alt: null
      };
    }
    function Y() {
      return {
        type: "link",
        title: null,
        url: "",
        children: []
      };
    }
    function J(_) {
      return {
        type: "list",
        ordered: _.type === "listOrdered",
        start: null,
        spread: _._spread,
        children: []
      };
    }
    function se(_) {
      return {
        type: "listItem",
        spread: _._spread,
        checked: null,
        children: []
      };
    }
    function _e() {
      return {
        type: "paragraph",
        children: []
      };
    }
    function Ce() {
      return {
        type: "strong",
        children: []
      };
    }
    function V() {
      return {
        type: "text",
        value: ""
      };
    }
    function B() {
      return {
        type: "thematicBreak"
      };
    }
  }
  function Nt(e) {
    return {
      line: e.line,
      column: e.column,
      offset: e.offset
    };
  }
  function Nc(e, t) {
    let n = -1;
    for (; ++n < t.length; ) {
      const i = t[n];
      Array.isArray(i) ? Nc(e, i) : nb(e, i);
    }
  }
  function nb(e, t) {
    let n;
    for (n in t) if (Tc.call(t, n)) switch (n) {
      case "canContainEols": {
        const i = t[n];
        i && e[n].push(...i);
        break;
      }
      case "transforms": {
        const i = t[n];
        i && e[n].push(...i);
        break;
      }
      case "enter":
      case "exit": {
        const i = t[n];
        i && Object.assign(e[n], i);
        break;
      }
    }
  }
  function sl(e, t) {
    throw e ? new Error("Cannot close `" + e.type + "` (" + Pn({
      start: e.start,
      end: e.end
    }) + "): a different token (`" + t.type + "`, " + Pn({
      start: t.start,
      end: t.end
    }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + Pn({
      start: t.start,
      end: t.end
    }) + ") is still open");
  }
  function ib(e) {
    const t = this;
    t.parser = n;
    function n(i) {
      return eb(i, {
        ...t.data("settings"),
        ...e,
        extensions: t.data("micromarkExtensions") || [],
        mdastExtensions: t.data("fromMarkdownExtensions") || []
      });
    }
  }
  function rb(e, t) {
    const n = {
      type: "element",
      tagName: "blockquote",
      properties: {},
      children: e.wrap(e.all(t), true)
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  function ob(e, t) {
    const n = {
      type: "element",
      tagName: "br",
      properties: {},
      children: []
    };
    return e.patch(t, n), [
      e.applyData(t, n),
      {
        type: "text",
        value: `
`
      }
    ];
  }
  function ab(e, t) {
    const n = t.value ? t.value + `
` : "", i = {};
    t.lang && (i.className = [
      "language-" + t.lang
    ]);
    let r = {
      type: "element",
      tagName: "code",
      properties: i,
      children: [
        {
          type: "text",
          value: n
        }
      ]
    };
    return t.meta && (r.data = {
      meta: t.meta
    }), e.patch(t, r), r = e.applyData(t, r), r = {
      type: "element",
      tagName: "pre",
      properties: {},
      children: [
        r
      ]
    }, e.patch(t, r), r;
  }
  function lb(e, t) {
    const n = {
      type: "element",
      tagName: "del",
      properties: {},
      children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  function sb(e, t) {
    const n = {
      type: "element",
      tagName: "em",
      properties: {},
      children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  function cb(e, t) {
    const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", i = String(t.identifier).toUpperCase(), r = sn(i.toLowerCase()), o = e.footnoteOrder.indexOf(i);
    let a, l = e.footnoteCounts.get(i);
    l === void 0 ? (l = 0, e.footnoteOrder.push(i), a = e.footnoteOrder.length) : a = o + 1, l += 1, e.footnoteCounts.set(i, l);
    const c = {
      type: "element",
      tagName: "a",
      properties: {
        href: "#" + n + "fn-" + r,
        id: n + "fnref-" + r + (l > 1 ? "-" + l : ""),
        dataFootnoteRef: true,
        ariaDescribedBy: [
          "footnote-label"
        ]
      },
      children: [
        {
          type: "text",
          value: String(a)
        }
      ]
    };
    e.patch(t, c);
    const s = {
      type: "element",
      tagName: "sup",
      properties: {},
      children: [
        c
      ]
    };
    return e.patch(t, s), e.applyData(t, s);
  }
  function ub(e, t) {
    const n = {
      type: "element",
      tagName: "h" + t.depth,
      properties: {},
      children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  function pb(e, t) {
    if (e.options.allowDangerousHtml) {
      const n = {
        type: "raw",
        value: t.value
      };
      return e.patch(t, n), e.applyData(t, n);
    }
  }
  function Mc(e, t) {
    const n = t.referenceType;
    let i = "]";
    if (n === "collapsed" ? i += "[]" : n === "full" && (i += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return [
      {
        type: "text",
        value: "![" + t.alt + i
      }
    ];
    const r = e.all(t), o = r[0];
    o && o.type === "text" ? o.value = "[" + o.value : r.unshift({
      type: "text",
      value: "["
    });
    const a = r[r.length - 1];
    return a && a.type === "text" ? a.value += i : r.push({
      type: "text",
      value: i
    }), r;
  }
  function db(e, t) {
    const n = String(t.identifier).toUpperCase(), i = e.definitionById.get(n);
    if (!i) return Mc(e, t);
    const r = {
      src: sn(i.url || ""),
      alt: t.alt
    };
    i.title !== null && i.title !== void 0 && (r.title = i.title);
    const o = {
      type: "element",
      tagName: "img",
      properties: r,
      children: []
    };
    return e.patch(t, o), e.applyData(t, o);
  }
  function fb(e, t) {
    const n = {
      src: sn(t.url)
    };
    t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
    const i = {
      type: "element",
      tagName: "img",
      properties: n,
      children: []
    };
    return e.patch(t, i), e.applyData(t, i);
  }
  function mb(e, t) {
    const n = {
      type: "text",
      value: t.value.replace(/\r?\n|\r/g, " ")
    };
    e.patch(t, n);
    const i = {
      type: "element",
      tagName: "code",
      properties: {},
      children: [
        n
      ]
    };
    return e.patch(t, i), e.applyData(t, i);
  }
  function hb(e, t) {
    const n = String(t.identifier).toUpperCase(), i = e.definitionById.get(n);
    if (!i) return Mc(e, t);
    const r = {
      href: sn(i.url || "")
    };
    i.title !== null && i.title !== void 0 && (r.title = i.title);
    const o = {
      type: "element",
      tagName: "a",
      properties: r,
      children: e.all(t)
    };
    return e.patch(t, o), e.applyData(t, o);
  }
  function gb(e, t) {
    const n = {
      href: sn(t.url)
    };
    t.title !== null && t.title !== void 0 && (n.title = t.title);
    const i = {
      type: "element",
      tagName: "a",
      properties: n,
      children: e.all(t)
    };
    return e.patch(t, i), e.applyData(t, i);
  }
  function xb(e, t, n) {
    const i = e.all(t), r = n ? vb(n) : Rc(t), o = {}, a = [];
    if (typeof t.checked == "boolean") {
      const u = i[0];
      let p;
      u && u.type === "element" && u.tagName === "p" ? p = u : (p = {
        type: "element",
        tagName: "p",
        properties: {},
        children: []
      }, i.unshift(p)), p.children.length > 0 && p.children.unshift({
        type: "text",
        value: " "
      }), p.children.unshift({
        type: "element",
        tagName: "input",
        properties: {
          type: "checkbox",
          checked: t.checked,
          disabled: true
        },
        children: []
      }), o.className = [
        "task-list-item"
      ];
    }
    let l = -1;
    for (; ++l < i.length; ) {
      const u = i[l];
      (r || l !== 0 || u.type !== "element" || u.tagName !== "p") && a.push({
        type: "text",
        value: `
`
      }), u.type === "element" && u.tagName === "p" && !r ? a.push(...u.children) : a.push(u);
    }
    const c = i[i.length - 1];
    c && (r || c.type !== "element" || c.tagName !== "p") && a.push({
      type: "text",
      value: `
`
    });
    const s = {
      type: "element",
      tagName: "li",
      properties: o,
      children: a
    };
    return e.patch(t, s), e.applyData(t, s);
  }
  function vb(e) {
    let t = false;
    if (e.type === "list") {
      t = e.spread || false;
      const n = e.children;
      let i = -1;
      for (; !t && ++i < n.length; ) t = Rc(n[i]);
    }
    return t;
  }
  function Rc(e) {
    const t = e.spread;
    return t ?? e.children.length > 1;
  }
  function bb(e, t) {
    const n = {}, i = e.all(t);
    let r = -1;
    for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++r < i.length; ) {
      const a = i[r];
      if (a.type === "element" && a.tagName === "li" && a.properties && Array.isArray(a.properties.className) && a.properties.className.includes("task-list-item")) {
        n.className = [
          "contains-task-list"
        ];
        break;
      }
    }
    const o = {
      type: "element",
      tagName: t.ordered ? "ol" : "ul",
      properties: n,
      children: e.wrap(i, true)
    };
    return e.patch(t, o), e.applyData(t, o);
  }
  function yb(e, t) {
    const n = {
      type: "element",
      tagName: "p",
      properties: {},
      children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  function wb(e, t) {
    const n = {
      type: "root",
      children: e.wrap(e.all(t))
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  function kb(e, t) {
    const n = {
      type: "element",
      tagName: "strong",
      properties: {},
      children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  function Cb(e, t) {
    const n = e.all(t), i = n.shift(), r = [];
    if (i) {
      const a = {
        type: "element",
        tagName: "thead",
        properties: {},
        children: e.wrap([
          i
        ], true)
      };
      e.patch(t.children[0], a), r.push(a);
    }
    if (n.length > 0) {
      const a = {
        type: "element",
        tagName: "tbody",
        properties: {},
        children: e.wrap(n, true)
      }, l = Mo(t.children[1]), c = mc(t.children[t.children.length - 1]);
      l && c && (a.position = {
        start: l,
        end: c
      }), r.push(a);
    }
    const o = {
      type: "element",
      tagName: "table",
      properties: {},
      children: e.wrap(r, true)
    };
    return e.patch(t, o), e.applyData(t, o);
  }
  function Ob(e, t, n) {
    const i = n ? n.children : void 0, o = (i ? i.indexOf(t) : 1) === 0 ? "th" : "td", a = n && n.type === "table" ? n.align : void 0, l = a ? a.length : t.children.length;
    let c = -1;
    const s = [];
    for (; ++c < l; ) {
      const p = t.children[c], f = {}, d = a ? a[c] : void 0;
      d && (f.align = d);
      let x = {
        type: "element",
        tagName: o,
        properties: f,
        children: []
      };
      p && (x.children = e.all(p), e.patch(p, x), x = e.applyData(p, x)), s.push(x);
    }
    const u = {
      type: "element",
      tagName: "tr",
      properties: {},
      children: e.wrap(s, true)
    };
    return e.patch(t, u), e.applyData(t, u);
  }
  function Sb(e, t) {
    const n = {
      type: "element",
      tagName: "td",
      properties: {},
      children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  const cl = 9, ul = 32;
  function _b(e) {
    const t = String(e), n = /\r?\n|\r/g;
    let i = n.exec(t), r = 0;
    const o = [];
    for (; i; ) o.push(pl(t.slice(r, i.index), r > 0, true), i[0]), r = i.index + i[0].length, i = n.exec(t);
    return o.push(pl(t.slice(r), r > 0, false)), o.join("");
  }
  function pl(e, t, n) {
    let i = 0, r = e.length;
    if (t) {
      let o = e.codePointAt(i);
      for (; o === cl || o === ul; ) i++, o = e.codePointAt(i);
    }
    if (n) {
      let o = e.codePointAt(r - 1);
      for (; o === cl || o === ul; ) r--, o = e.codePointAt(r - 1);
    }
    return r > i ? e.slice(i, r) : "";
  }
  function jb(e, t) {
    const n = {
      type: "text",
      value: _b(String(t.value))
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  function Eb(e, t) {
    const n = {
      type: "element",
      tagName: "hr",
      properties: {},
      children: []
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  const Ib = {
    blockquote: rb,
    break: ob,
    code: ab,
    delete: lb,
    emphasis: sb,
    footnoteReference: cb,
    heading: ub,
    html: pb,
    imageReference: db,
    image: fb,
    inlineCode: mb,
    linkReference: hb,
    link: gb,
    listItem: xb,
    list: bb,
    paragraph: yb,
    root: wb,
    strong: kb,
    table: Cb,
    tableCell: Sb,
    tableRow: Ob,
    text: jb,
    thematicBreak: Eb,
    toml: si,
    yaml: si,
    definition: si,
    footnoteDefinition: si
  };
  function si() {
  }
  const Ac = -1, Wi = 0, Nn = 1, Ni = 2, Bo = 3, Ho = 4, $o = 5, qo = 6, Dc = 7, Lc = 8, dl = typeof self == "object" ? self : globalThis, Pb = (e, t) => {
    const n = (r, o) => (e.set(o, r), r), i = (r) => {
      if (e.has(r)) return e.get(r);
      const [o, a] = t[r];
      switch (o) {
        case Wi:
        case Ac:
          return n(a, r);
        case Nn: {
          const l = n([], r);
          for (const c of a) l.push(i(c));
          return l;
        }
        case Ni: {
          const l = n({}, r);
          for (const [c, s] of a) l[i(c)] = i(s);
          return l;
        }
        case Bo:
          return n(new Date(a), r);
        case Ho: {
          const { source: l, flags: c } = a;
          return n(new RegExp(l, c), r);
        }
        case $o: {
          const l = n(/* @__PURE__ */ new Map(), r);
          for (const [c, s] of a) l.set(i(c), i(s));
          return l;
        }
        case qo: {
          const l = n(/* @__PURE__ */ new Set(), r);
          for (const c of a) l.add(i(c));
          return l;
        }
        case Dc: {
          const { name: l, message: c } = a;
          return n(new dl[l](c), r);
        }
        case Lc:
          return n(BigInt(a), r);
        case "BigInt":
          return n(Object(BigInt(a)), r);
        case "ArrayBuffer":
          return n(new Uint8Array(a).buffer, a);
        case "DataView": {
          const { buffer: l } = new Uint8Array(a);
          return n(new DataView(l), a);
        }
      }
      return n(new dl[o](a), r);
    };
    return i;
  }, fl = (e) => Pb(/* @__PURE__ */ new Map(), e)(0), Gt = "", { toString: Tb } = {}, { keys: Nb } = Object, xn = (e) => {
    const t = typeof e;
    if (t !== "object" || !e) return [
      Wi,
      t
    ];
    const n = Tb.call(e).slice(8, -1);
    switch (n) {
      case "Array":
        return [
          Nn,
          Gt
        ];
      case "Object":
        return [
          Ni,
          Gt
        ];
      case "Date":
        return [
          Bo,
          Gt
        ];
      case "RegExp":
        return [
          Ho,
          Gt
        ];
      case "Map":
        return [
          $o,
          Gt
        ];
      case "Set":
        return [
          qo,
          Gt
        ];
      case "DataView":
        return [
          Nn,
          n
        ];
    }
    return n.includes("Array") ? [
      Nn,
      n
    ] : n.includes("Error") ? [
      Dc,
      n
    ] : [
      Ni,
      n
    ];
  }, ci = ([e, t]) => e === Wi && (t === "function" || t === "symbol"), Mb = (e, t, n, i) => {
    const r = (a, l) => {
      const c = i.push(a) - 1;
      return n.set(l, c), c;
    }, o = (a) => {
      if (n.has(a)) return n.get(a);
      let [l, c] = xn(a);
      switch (l) {
        case Wi: {
          let u = a;
          switch (c) {
            case "bigint":
              l = Lc, u = a.toString();
              break;
            case "function":
            case "symbol":
              if (e) throw new TypeError("unable to serialize " + c);
              u = null;
              break;
            case "undefined":
              return r([
                Ac
              ], a);
          }
          return r([
            l,
            u
          ], a);
        }
        case Nn: {
          if (c) {
            let f = a;
            return c === "DataView" ? f = new Uint8Array(a.buffer) : c === "ArrayBuffer" && (f = new Uint8Array(a)), r([
              c,
              [
                ...f
              ]
            ], a);
          }
          const u = [], p = r([
            l,
            u
          ], a);
          for (const f of a) u.push(o(f));
          return p;
        }
        case Ni: {
          if (c) switch (c) {
            case "BigInt":
              return r([
                c,
                a.toString()
              ], a);
            case "Boolean":
            case "Number":
            case "String":
              return r([
                c,
                a.valueOf()
              ], a);
          }
          if (t && "toJSON" in a) return o(a.toJSON());
          const u = [], p = r([
            l,
            u
          ], a);
          for (const f of Nb(a)) (e || !ci(xn(a[f]))) && u.push([
            o(f),
            o(a[f])
          ]);
          return p;
        }
        case Bo:
          return r([
            l,
            a.toISOString()
          ], a);
        case Ho: {
          const { source: u, flags: p } = a;
          return r([
            l,
            {
              source: u,
              flags: p
            }
          ], a);
        }
        case $o: {
          const u = [], p = r([
            l,
            u
          ], a);
          for (const [f, d] of a) (e || !(ci(xn(f)) || ci(xn(d)))) && u.push([
            o(f),
            o(d)
          ]);
          return p;
        }
        case qo: {
          const u = [], p = r([
            l,
            u
          ], a);
          for (const f of a) (e || !ci(xn(f))) && u.push(o(f));
          return p;
        }
      }
      const { message: s } = a;
      return r([
        l,
        {
          name: c,
          message: s
        }
      ], a);
    };
    return o;
  }, ml = (e, { json: t, lossy: n } = {}) => {
    const i = [];
    return Mb(!(t || n), !!t, /* @__PURE__ */ new Map(), i)(e), i;
  }, Mi = typeof structuredClone == "function" ? (e, t) => t && ("json" in t || "lossy" in t) ? fl(ml(e, t)) : structuredClone(e) : (e, t) => fl(ml(e, t));
  function Rb(e, t) {
    const n = [
      {
        type: "text",
        value: "\u21A9"
      }
    ];
    return t > 1 && n.push({
      type: "element",
      tagName: "sup",
      properties: {},
      children: [
        {
          type: "text",
          value: String(t)
        }
      ]
    }), n;
  }
  function Ab(e, t) {
    return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
  }
  function Db(e) {
    const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Rb, i = e.options.footnoteBackLabel || Ab, r = e.options.footnoteLabel || "Footnotes", o = e.options.footnoteLabelTagName || "h2", a = e.options.footnoteLabelProperties || {
      className: [
        "sr-only"
      ]
    }, l = [];
    let c = -1;
    for (; ++c < e.footnoteOrder.length; ) {
      const s = e.footnoteById.get(e.footnoteOrder[c]);
      if (!s) continue;
      const u = e.all(s), p = String(s.identifier).toUpperCase(), f = sn(p.toLowerCase());
      let d = 0;
      const x = [], v = e.footnoteCounts.get(p);
      for (; v !== void 0 && ++d <= v; ) {
        x.length > 0 && x.push({
          type: "text",
          value: " "
        });
        let j = typeof n == "string" ? n : n(c, d);
        typeof j == "string" && (j = {
          type: "text",
          value: j
        }), x.push({
          type: "element",
          tagName: "a",
          properties: {
            href: "#" + t + "fnref-" + f + (d > 1 ? "-" + d : ""),
            dataFootnoteBackref: "",
            ariaLabel: typeof i == "string" ? i : i(c, d),
            className: [
              "data-footnote-backref"
            ]
          },
          children: Array.isArray(j) ? j : [
            j
          ]
        });
      }
      const C = u[u.length - 1];
      if (C && C.type === "element" && C.tagName === "p") {
        const j = C.children[C.children.length - 1];
        j && j.type === "text" ? j.value += " " : C.children.push({
          type: "text",
          value: " "
        }), C.children.push(...x);
      } else u.push(...x);
      const k = {
        type: "element",
        tagName: "li",
        properties: {
          id: t + "fn-" + f
        },
        children: e.wrap(u, true)
      };
      e.patch(s, k), l.push(k);
    }
    if (l.length !== 0) return {
      type: "element",
      tagName: "section",
      properties: {
        dataFootnotes: true,
        className: [
          "footnotes"
        ]
      },
      children: [
        {
          type: "element",
          tagName: o,
          properties: {
            ...Mi(a),
            id: "footnote-label"
          },
          children: [
            {
              type: "text",
              value: r
            }
          ]
        },
        {
          type: "text",
          value: `
`
        },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(l, true)
        },
        {
          type: "text",
          value: `
`
        }
      ]
    };
  }
  const Fc = function(e) {
    if (e == null) return Bb;
    if (typeof e == "function") return Ui(e);
    if (typeof e == "object") return Array.isArray(e) ? Lb(e) : Fb(e);
    if (typeof e == "string") return zb(e);
    throw new Error("Expected function, string, or object as test");
  };
  function Lb(e) {
    const t = [];
    let n = -1;
    for (; ++n < e.length; ) t[n] = Fc(e[n]);
    return Ui(i);
    function i(...r) {
      let o = -1;
      for (; ++o < t.length; ) if (t[o].apply(this, r)) return true;
      return false;
    }
  }
  function Fb(e) {
    const t = e;
    return Ui(n);
    function n(i) {
      const r = i;
      let o;
      for (o in e) if (r[o] !== t[o]) return false;
      return true;
    }
  }
  function zb(e) {
    return Ui(t);
    function t(n) {
      return n && n.type === e;
    }
  }
  function Ui(e) {
    return t;
    function t(n, i, r) {
      return !!(Hb(n) && e.call(this, n, typeof i == "number" ? i : void 0, r || void 0));
    }
  }
  function Bb() {
    return true;
  }
  function Hb(e) {
    return e !== null && typeof e == "object" && "type" in e;
  }
  const zc = [], $b = true, hl = false, qb = "skip";
  function Vb(e, t, n, i) {
    let r;
    typeof t == "function" && typeof n != "function" ? (i = n, n = t) : r = t;
    const o = Fc(r), a = i ? -1 : 1;
    l(e, void 0, [])();
    function l(c, s, u) {
      const p = c && typeof c == "object" ? c : {};
      if (typeof p.type == "string") {
        const d = typeof p.tagName == "string" ? p.tagName : typeof p.name == "string" ? p.name : void 0;
        Object.defineProperty(f, "name", {
          value: "node (" + (c.type + (d ? "<" + d + ">" : "")) + ")"
        });
      }
      return f;
      function f() {
        let d = zc, x, v, C;
        if ((!t || o(c, s, u[u.length - 1] || void 0)) && (d = Wb(n(c, u)), d[0] === hl)) return d;
        if ("children" in c && c.children) {
          const k = c;
          if (k.children && d[0] !== qb) for (v = (i ? k.children.length : -1) + a, C = u.concat(k); v > -1 && v < k.children.length; ) {
            const j = k.children[v];
            if (x = l(j, v, C)(), x[0] === hl) return x;
            v = typeof x[1] == "number" ? x[1] : v + a;
          }
        }
        return d;
      }
    }
  }
  function Wb(e) {
    return Array.isArray(e) ? e : typeof e == "number" ? [
      $b,
      e
    ] : e == null ? zc : [
      e
    ];
  }
  function Bc(e, t, n, i) {
    let r, o, a;
    typeof t == "function" && typeof n != "function" ? (o = void 0, a = t, r = n) : (o = t, a = n, r = i), Vb(e, o, l, r);
    function l(c, s) {
      const u = s[s.length - 1], p = u ? u.children.indexOf(c) : void 0;
      return a(c, p, u);
    }
  }
  const ro = {}.hasOwnProperty, Ub = {};
  function Xb(e, t) {
    const n = t || Ub, i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = {
      ...Ib,
      ...n.handlers
    }, l = {
      all: s,
      applyData: Gb,
      definitionById: i,
      footnoteById: r,
      footnoteCounts: o,
      footnoteOrder: [],
      handlers: a,
      one: c,
      options: n,
      patch: Kb,
      wrap: Qb
    };
    return Bc(e, function(u) {
      if (u.type === "definition" || u.type === "footnoteDefinition") {
        const p = u.type === "definition" ? i : r, f = String(u.identifier).toUpperCase();
        p.has(f) || p.set(f, u);
      }
    }), l;
    function c(u, p) {
      const f = u.type, d = l.handlers[f];
      if (ro.call(l.handlers, f) && d) return d(l, u, p);
      if (l.options.passThrough && l.options.passThrough.includes(f)) {
        if ("children" in u) {
          const { children: v, ...C } = u, k = Mi(C);
          return k.children = l.all(u), k;
        }
        return Mi(u);
      }
      return (l.options.unknownHandler || Yb)(l, u, p);
    }
    function s(u) {
      const p = [];
      if ("children" in u) {
        const f = u.children;
        let d = -1;
        for (; ++d < f.length; ) {
          const x = l.one(f[d], u);
          if (x) {
            if (d && f[d - 1].type === "break" && (!Array.isArray(x) && x.type === "text" && (x.value = gl(x.value)), !Array.isArray(x) && x.type === "element")) {
              const v = x.children[0];
              v && v.type === "text" && (v.value = gl(v.value));
            }
            Array.isArray(x) ? p.push(...x) : p.push(x);
          }
        }
      }
      return p;
    }
  }
  function Kb(e, t) {
    e.position && (t.position = Tg(e));
  }
  function Gb(e, t) {
    let n = t;
    if (e && e.data) {
      const i = e.data.hName, r = e.data.hChildren, o = e.data.hProperties;
      if (typeof i == "string") if (n.type === "element") n.tagName = i;
      else {
        const a = "children" in n ? n.children : [
          n
        ];
        n = {
          type: "element",
          tagName: i,
          properties: {},
          children: a
        };
      }
      n.type === "element" && o && Object.assign(n.properties, Mi(o)), "children" in n && n.children && r !== null && r !== void 0 && (n.children = r);
    }
    return n;
  }
  function Yb(e, t) {
    const n = t.data || {}, i = "value" in t && !(ro.call(n, "hProperties") || ro.call(n, "hChildren")) ? {
      type: "text",
      value: t.value
    } : {
      type: "element",
      tagName: "div",
      properties: {},
      children: e.all(t)
    };
    return e.patch(t, i), e.applyData(t, i);
  }
  function Qb(e, t) {
    const n = [];
    let i = -1;
    for (t && n.push({
      type: "text",
      value: `
`
    }); ++i < e.length; ) i && n.push({
      type: "text",
      value: `
`
    }), n.push(e[i]);
    return t && e.length > 0 && n.push({
      type: "text",
      value: `
`
    }), n;
  }
  function gl(e) {
    let t = 0, n = e.charCodeAt(t);
    for (; n === 9 || n === 32; ) t++, n = e.charCodeAt(t);
    return e.slice(t);
  }
  function xl(e, t) {
    const n = Xb(e, t), i = n.one(e, void 0), r = Db(n), o = Array.isArray(i) ? {
      type: "root",
      children: i
    } : i || {
      type: "root",
      children: []
    };
    return r && o.children.push({
      type: "text",
      value: `
`
    }, r), o;
  }
  function Jb(e, t) {
    return e && "run" in e ? async function(n, i) {
      const r = xl(n, {
        file: i,
        ...t
      });
      await e.run(r, i);
    } : function(n, i) {
      return xl(n, {
        file: i,
        ...e || t
      });
    };
  }
  function vl(e) {
    if (e) throw e;
  }
  var wr, bl;
  function Zb() {
    if (bl) return wr;
    bl = 1;
    var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = Object.defineProperty, i = Object.getOwnPropertyDescriptor, r = function(s) {
      return typeof Array.isArray == "function" ? Array.isArray(s) : t.call(s) === "[object Array]";
    }, o = function(s) {
      if (!s || t.call(s) !== "[object Object]") return false;
      var u = e.call(s, "constructor"), p = s.constructor && s.constructor.prototype && e.call(s.constructor.prototype, "isPrototypeOf");
      if (s.constructor && !u && !p) return false;
      var f;
      for (f in s) ;
      return typeof f > "u" || e.call(s, f);
    }, a = function(s, u) {
      n && u.name === "__proto__" ? n(s, u.name, {
        enumerable: true,
        configurable: true,
        value: u.newValue,
        writable: true
      }) : s[u.name] = u.newValue;
    }, l = function(s, u) {
      if (u === "__proto__") if (e.call(s, u)) {
        if (i) return i(s, u).value;
      } else return;
      return s[u];
    };
    return wr = function c() {
      var s, u, p, f, d, x, v = arguments[0], C = 1, k = arguments.length, j = false;
      for (typeof v == "boolean" && (j = v, v = arguments[1] || {}, C = 2), (v == null || typeof v != "object" && typeof v != "function") && (v = {}); C < k; ++C) if (s = arguments[C], s != null) for (u in s) p = l(v, u), f = l(s, u), v !== f && (j && f && (o(f) || (d = r(f))) ? (d ? (d = false, x = p && r(p) ? p : []) : x = p && o(p) ? p : {}, a(v, {
        name: u,
        newValue: c(j, x, f)
      })) : typeof f < "u" && a(v, {
        name: u,
        newValue: f
      }));
      return v;
    }, wr;
  }
  var ey = Zb();
  const kr = Ri(ey);
  function oo(e) {
    if (typeof e != "object" || e === null) return false;
    const t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
  }
  function ty() {
    const e = [], t = {
      run: n,
      use: i
    };
    return t;
    function n(...r) {
      let o = -1;
      const a = r.pop();
      if (typeof a != "function") throw new TypeError("Expected function as last argument, not " + a);
      l(null, ...r);
      function l(c, ...s) {
        const u = e[++o];
        let p = -1;
        if (c) {
          a(c);
          return;
        }
        for (; ++p < r.length; ) (s[p] === null || s[p] === void 0) && (s[p] = r[p]);
        r = s, u ? ny(u, l)(...s) : a(null, ...s);
      }
    }
    function i(r) {
      if (typeof r != "function") throw new TypeError("Expected `middelware` to be a function, not " + r);
      return e.push(r), t;
    }
  }
  function ny(e, t) {
    let n;
    return i;
    function i(...a) {
      const l = e.length > a.length;
      let c;
      l && a.push(r);
      try {
        c = e.apply(this, a);
      } catch (s) {
        const u = s;
        if (l && n) throw u;
        return r(u);
      }
      l || (c && c.then && typeof c.then == "function" ? c.then(o, r) : c instanceof Error ? r(c) : o(c));
    }
    function r(a, ...l) {
      n || (n = true, t(a, ...l));
    }
    function o(a) {
      r(null, a);
    }
  }
  const xt = {
    basename: iy,
    dirname: ry,
    extname: oy,
    join: ay,
    sep: "/"
  };
  function iy(e, t) {
    if (t !== void 0 && typeof t != "string") throw new TypeError('"ext" argument must be a string');
    Qn(e);
    let n = 0, i = -1, r = e.length, o;
    if (t === void 0 || t.length === 0 || t.length > e.length) {
      for (; r--; ) if (e.codePointAt(r) === 47) {
        if (o) {
          n = r + 1;
          break;
        }
      } else i < 0 && (o = true, i = r + 1);
      return i < 0 ? "" : e.slice(n, i);
    }
    if (t === e) return "";
    let a = -1, l = t.length - 1;
    for (; r--; ) if (e.codePointAt(r) === 47) {
      if (o) {
        n = r + 1;
        break;
      }
    } else a < 0 && (o = true, a = r + 1), l > -1 && (e.codePointAt(r) === t.codePointAt(l--) ? l < 0 && (i = r) : (l = -1, i = a));
    return n === i ? i = a : i < 0 && (i = e.length), e.slice(n, i);
  }
  function ry(e) {
    if (Qn(e), e.length === 0) return ".";
    let t = -1, n = e.length, i;
    for (; --n; ) if (e.codePointAt(n) === 47) {
      if (i) {
        t = n;
        break;
      }
    } else i || (i = true);
    return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
  }
  function oy(e) {
    Qn(e);
    let t = e.length, n = -1, i = 0, r = -1, o = 0, a;
    for (; t--; ) {
      const l = e.codePointAt(t);
      if (l === 47) {
        if (a) {
          i = t + 1;
          break;
        }
        continue;
      }
      n < 0 && (a = true, n = t + 1), l === 46 ? r < 0 ? r = t : o !== 1 && (o = 1) : r > -1 && (o = -1);
    }
    return r < 0 || n < 0 || o === 0 || o === 1 && r === n - 1 && r === i + 1 ? "" : e.slice(r, n);
  }
  function ay(...e) {
    let t = -1, n;
    for (; ++t < e.length; ) Qn(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
    return n === void 0 ? "." : ly(n);
  }
  function ly(e) {
    Qn(e);
    const t = e.codePointAt(0) === 47;
    let n = sy(e, !t);
    return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
  }
  function sy(e, t) {
    let n = "", i = 0, r = -1, o = 0, a = -1, l, c;
    for (; ++a <= e.length; ) {
      if (a < e.length) l = e.codePointAt(a);
      else {
        if (l === 47) break;
        l = 47;
      }
      if (l === 47) {
        if (!(r === a - 1 || o === 1)) if (r !== a - 1 && o === 2) {
          if (n.length < 2 || i !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
            if (n.length > 2) {
              if (c = n.lastIndexOf("/"), c !== n.length - 1) {
                c < 0 ? (n = "", i = 0) : (n = n.slice(0, c), i = n.length - 1 - n.lastIndexOf("/")), r = a, o = 0;
                continue;
              }
            } else if (n.length > 0) {
              n = "", i = 0, r = a, o = 0;
              continue;
            }
          }
          t && (n = n.length > 0 ? n + "/.." : "..", i = 2);
        } else n.length > 0 ? n += "/" + e.slice(r + 1, a) : n = e.slice(r + 1, a), i = a - r - 1;
        r = a, o = 0;
      } else l === 46 && o > -1 ? o++ : o = -1;
    }
    return n;
  }
  function Qn(e) {
    if (typeof e != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
  }
  const cy = {
    cwd: uy
  };
  function uy() {
    return "/";
  }
  function ao(e) {
    return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0);
  }
  function py(e) {
    if (typeof e == "string") e = new URL(e);
    else if (!ao(e)) {
      const t = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
      throw t.code = "ERR_INVALID_ARG_TYPE", t;
    }
    if (e.protocol !== "file:") {
      const t = new TypeError("The URL must be of scheme file");
      throw t.code = "ERR_INVALID_URL_SCHEME", t;
    }
    return dy(e);
  }
  function dy(e) {
    if (e.hostname !== "") {
      const i = new TypeError('File URL host must be "localhost" or empty on darwin');
      throw i.code = "ERR_INVALID_FILE_URL_HOST", i;
    }
    const t = e.pathname;
    let n = -1;
    for (; ++n < t.length; ) if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const i = t.codePointAt(n + 2);
      if (i === 70 || i === 102) {
        const r = new TypeError("File URL path must not include encoded / characters");
        throw r.code = "ERR_INVALID_FILE_URL_PATH", r;
      }
    }
    return decodeURIComponent(t);
  }
  const Cr = [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ];
  class Hc {
    constructor(t) {
      let n;
      t ? ao(t) ? n = {
        path: t
      } : typeof t == "string" || fy(t) ? n = {
        value: t
      } : n = t : n = {}, this.cwd = "cwd" in n ? "" : cy.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
      let i = -1;
      for (; ++i < Cr.length; ) {
        const o = Cr[i];
        o in n && n[o] !== void 0 && n[o] !== null && (this[o] = o === "history" ? [
          ...n[o]
        ] : n[o]);
      }
      let r;
      for (r in n) Cr.includes(r) || (this[r] = n[r]);
    }
    get basename() {
      return typeof this.path == "string" ? xt.basename(this.path) : void 0;
    }
    set basename(t) {
      Sr(t, "basename"), Or(t, "basename"), this.path = xt.join(this.dirname || "", t);
    }
    get dirname() {
      return typeof this.path == "string" ? xt.dirname(this.path) : void 0;
    }
    set dirname(t) {
      yl(this.basename, "dirname"), this.path = xt.join(t || "", this.basename);
    }
    get extname() {
      return typeof this.path == "string" ? xt.extname(this.path) : void 0;
    }
    set extname(t) {
      if (Or(t, "extname"), yl(this.dirname, "extname"), t) {
        if (t.codePointAt(0) !== 46) throw new Error("`extname` must start with `.`");
        if (t.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots");
      }
      this.path = xt.join(this.dirname, this.stem + (t || ""));
    }
    get path() {
      return this.history[this.history.length - 1];
    }
    set path(t) {
      ao(t) && (t = py(t)), Sr(t, "path"), this.path !== t && this.history.push(t);
    }
    get stem() {
      return typeof this.path == "string" ? xt.basename(this.path, this.extname) : void 0;
    }
    set stem(t) {
      Sr(t, "stem"), Or(t, "stem"), this.path = xt.join(this.dirname || "", t + (this.extname || ""));
    }
    fail(t, n, i) {
      const r = this.message(t, n, i);
      throw r.fatal = true, r;
    }
    info(t, n, i) {
      const r = this.message(t, n, i);
      return r.fatal = void 0, r;
    }
    message(t, n, i) {
      const r = new Ye(t, n, i);
      return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = false, this.messages.push(r), r;
    }
    toString(t) {
      return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value);
    }
  }
  function Or(e, t) {
    if (e && e.includes(xt.sep)) throw new Error("`" + t + "` cannot be a path: did not expect `" + xt.sep + "`");
  }
  function Sr(e, t) {
    if (!e) throw new Error("`" + t + "` cannot be empty");
  }
  function yl(e, t) {
    if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too");
  }
  function fy(e) {
    return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
  }
  const my = function(e) {
    const i = this.constructor.prototype, r = i[e], o = function() {
      return r.apply(o, arguments);
    };
    return Object.setPrototypeOf(o, i), o;
  }, hy = {}.hasOwnProperty;
  class Vo extends my {
    constructor() {
      super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = ty();
    }
    copy() {
      const t = new Vo();
      let n = -1;
      for (; ++n < this.attachers.length; ) {
        const i = this.attachers[n];
        t.use(...i);
      }
      return t.data(kr(true, {}, this.namespace)), t;
    }
    data(t, n) {
      return typeof t == "string" ? arguments.length === 2 ? (Er("data", this.frozen), this.namespace[t] = n, this) : hy.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (Er("data", this.frozen), this.namespace = t, this) : this.namespace;
    }
    freeze() {
      if (this.frozen) return this;
      const t = this;
      for (; ++this.freezeIndex < this.attachers.length; ) {
        const [n, ...i] = this.attachers[this.freezeIndex];
        if (i[0] === false) continue;
        i[0] === true && (i[0] = void 0);
        const r = n.call(t, ...i);
        typeof r == "function" && this.transformers.use(r);
      }
      return this.frozen = true, this.freezeIndex = Number.POSITIVE_INFINITY, this;
    }
    parse(t) {
      this.freeze();
      const n = ui(t), i = this.parser || this.Parser;
      return _r("parse", i), i(String(n), n);
    }
    process(t, n) {
      const i = this;
      return this.freeze(), _r("process", this.parser || this.Parser), jr("process", this.compiler || this.Compiler), n ? r(void 0, n) : new Promise(r);
      function r(o, a) {
        const l = ui(t), c = i.parse(l);
        i.run(c, l, function(u, p, f) {
          if (u || !p || !f) return s(u);
          const d = p, x = i.stringify(d, f);
          vy(x) ? f.value = x : f.result = x, s(u, f);
        });
        function s(u, p) {
          u || !p ? a(u) : o ? o(p) : n(void 0, p);
        }
      }
    }
    processSync(t) {
      let n = false, i;
      return this.freeze(), _r("processSync", this.parser || this.Parser), jr("processSync", this.compiler || this.Compiler), this.process(t, r), kl("processSync", "process", n), i;
      function r(o, a) {
        n = true, vl(o), i = a;
      }
    }
    run(t, n, i) {
      wl(t), this.freeze();
      const r = this.transformers;
      return !i && typeof n == "function" && (i = n, n = void 0), i ? o(void 0, i) : new Promise(o);
      function o(a, l) {
        const c = ui(n);
        r.run(t, c, s);
        function s(u, p, f) {
          const d = p || t;
          u ? l(u) : a ? a(d) : i(void 0, d, f);
        }
      }
    }
    runSync(t, n) {
      let i = false, r;
      return this.run(t, n, o), kl("runSync", "run", i), r;
      function o(a, l) {
        vl(a), r = l, i = true;
      }
    }
    stringify(t, n) {
      this.freeze();
      const i = ui(n), r = this.compiler || this.Compiler;
      return jr("stringify", r), wl(t), r(t, i);
    }
    use(t, ...n) {
      const i = this.attachers, r = this.namespace;
      if (Er("use", this.frozen), t != null) if (typeof t == "function") c(t, n);
      else if (typeof t == "object") Array.isArray(t) ? l(t) : a(t);
      else throw new TypeError("Expected usable value, not `" + t + "`");
      return this;
      function o(s) {
        if (typeof s == "function") c(s, []);
        else if (typeof s == "object") if (Array.isArray(s)) {
          const [u, ...p] = s;
          c(u, p);
        } else a(s);
        else throw new TypeError("Expected usable value, not `" + s + "`");
      }
      function a(s) {
        if (!("plugins" in s) && !("settings" in s)) throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
        l(s.plugins), s.settings && (r.settings = kr(true, r.settings, s.settings));
      }
      function l(s) {
        let u = -1;
        if (s != null) if (Array.isArray(s)) for (; ++u < s.length; ) {
          const p = s[u];
          o(p);
        }
        else throw new TypeError("Expected a list of plugins, not `" + s + "`");
      }
      function c(s, u) {
        let p = -1, f = -1;
        for (; ++p < i.length; ) if (i[p][0] === s) {
          f = p;
          break;
        }
        if (f === -1) i.push([
          s,
          ...u
        ]);
        else if (u.length > 0) {
          let [d, ...x] = u;
          const v = i[f][1];
          oo(v) && oo(d) && (d = kr(true, v, d)), i[f] = [
            s,
            d,
            ...x
          ];
        }
      }
    }
  }
  const gy = new Vo().freeze();
  function _r(e, t) {
    if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `parser`");
  }
  function jr(e, t) {
    if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `compiler`");
  }
  function Er(e, t) {
    if (t) throw new Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
  }
  function wl(e) {
    if (!oo(e) || typeof e.type != "string") throw new TypeError("Expected node, got `" + e + "`");
  }
  function kl(e, t, n) {
    if (!n) throw new Error("`" + e + "` finished async. Use `" + t + "` instead");
  }
  function ui(e) {
    return xy(e) ? e : new Hc(e);
  }
  function xy(e) {
    return !!(e && typeof e == "object" && "message" in e && "messages" in e);
  }
  function vy(e) {
    return typeof e == "string" || by(e);
  }
  function by(e) {
    return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
  }
  const yy = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Cl = [], Ol = {
    allowDangerousHtml: true
  }, wy = /^(https?|ircs?|mailto|xmpp)$/i, ky = [
    {
      from: "astPlugins",
      id: "remove-buggy-html-in-markdown-parser"
    },
    {
      from: "allowDangerousHtml",
      id: "remove-buggy-html-in-markdown-parser"
    },
    {
      from: "allowNode",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowElement"
    },
    {
      from: "allowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowedElements"
    },
    {
      from: "className",
      id: "remove-classname"
    },
    {
      from: "disallowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "disallowedElements"
    },
    {
      from: "escapeHtml",
      id: "remove-buggy-html-in-markdown-parser"
    },
    {
      from: "includeElementIndex",
      id: "#remove-includeelementindex"
    },
    {
      from: "includeNodeIndex",
      id: "change-includenodeindex-to-includeelementindex"
    },
    {
      from: "linkTarget",
      id: "remove-linktarget"
    },
    {
      from: "plugins",
      id: "change-plugins-to-remarkplugins",
      to: "remarkPlugins"
    },
    {
      from: "rawSourcePos",
      id: "#remove-rawsourcepos"
    },
    {
      from: "renderers",
      id: "change-renderers-to-components",
      to: "components"
    },
    {
      from: "source",
      id: "change-source-to-children",
      to: "children"
    },
    {
      from: "sourcePos",
      id: "#remove-sourcepos"
    },
    {
      from: "transformImageUri",
      id: "#add-urltransform",
      to: "urlTransform"
    },
    {
      from: "transformLinkUri",
      id: "#add-urltransform",
      to: "urlTransform"
    }
  ];
  function Cy(e) {
    const t = Oy(e), n = Sy(e);
    return _y(t.runSync(t.parse(n), n), e);
  }
  function Oy(e) {
    const t = e.rehypePlugins || Cl, n = e.remarkPlugins || Cl, i = e.remarkRehypeOptions ? {
      ...e.remarkRehypeOptions,
      ...Ol
    } : Ol;
    return gy().use(ib).use(n).use(Jb, i).use(t);
  }
  function Sy(e) {
    const t = e.children || "", n = new Hc();
    return typeof t == "string" && (n.value = t), n;
  }
  function _y(e, t) {
    const n = t.allowedElements, i = t.allowElement, r = t.components, o = t.disallowedElements, a = t.skipHtml, l = t.unwrapDisallowed, c = t.urlTransform || jy;
    for (const u of ky) Object.hasOwn(t, u.from) && ("" + u.from + (u.to ? "use `" + u.to + "` instead" : "remove it") + yy + u.id, void 0);
    return Bc(e, s), Dg(e, {
      Fragment: m.Fragment,
      components: r,
      ignoreInvalidStyle: true,
      jsx: m.jsx,
      jsxs: m.jsxs,
      passKeys: true,
      passNode: true
    });
    function s(u, p, f) {
      if (u.type === "raw" && f && typeof p == "number") return a ? f.children.splice(p, 1) : f.children[p] = {
        type: "text",
        value: u.value
      }, p;
      if (u.type === "element") {
        let d;
        for (d in vr) if (Object.hasOwn(vr, d) && Object.hasOwn(u.properties, d)) {
          const x = u.properties[d], v = vr[d];
          (v === null || v.includes(u.tagName)) && (u.properties[d] = c(String(x || ""), d, u));
        }
      }
      if (u.type === "element") {
        let d = n ? !n.includes(u.tagName) : o ? o.includes(u.tagName) : false;
        if (!d && i && typeof p == "number" && (d = !i(u, p, f)), d && f && typeof p == "number") return l && u.children ? f.children.splice(p, 1, ...u.children) : f.children.splice(p, 1), p;
      }
    }
  }
  function jy(e) {
    const t = e.indexOf(":"), n = e.indexOf("?"), i = e.indexOf("#"), r = e.indexOf("/");
    return t === -1 || r !== -1 && t > r || n !== -1 && t > n || i !== -1 && t > i || wy.test(e.slice(0, t)) ? e : "";
  }
  function Sl(e) {
    return Ai(e).with({
      g: Ne._
    }, () => true).otherwise(() => false);
  }
  function Ey({ init: e, download: t, dopar: n }) {
    const i = e && e.value < e.max, r = t >= 0 && t < 1, o = n ? n.filter((l) => l && l.value < l.max) : [], a = o.length > 0;
    return (i || r || a) && m.jsxs(Pi, {
      hasGutter: true,
      children: [
        e && i && m.jsx(jn, {
          ...e,
          title: "Model Initialization",
          size: "sm"
        }),
        r && m.jsx(jn, {
          value: t,
          title: "Model Download",
          size: "sm"
        }),
        a && m.jsx(Pi, {
          children: o.map((l, c) => m.jsx(jn, {
            ...l,
            size: "sm",
            "aria-label": "dopar"
          }, c))
        })
      ]
    });
  }
  const Ir = {};
  function lo(e) {
    return Ai(e).with({
      cross: Ne.array()
    }, ({ cross: t }) => t.flatMap(lo)).with({
      plus: Ne.array()
    }, ({ plus: t }) => t.flatMap(lo)).with({
      assistant: Ne.string
    }, ({ assistant: t }) => [
      {
        role: "assistant",
        content: t
      }
    ]).with({
      user: Ne.string
    }, ({ user: t }) => [
      {
        role: "user",
        content: t
      }
    ]).with({
      system: Ne.string
    }, ({ system: t }) => [
      {
        role: "system",
        content: t
      }
    ]).otherwise(() => []);
  }
  function Iy(e, t) {
    return (n) => {
      console.log("initialize", n);
      const i = n.text.match(/cache\[(\d+)\/(\d+)\]/);
      i && e({
        min: 0,
        value: parseInt(i[1]),
        max: parseInt(i[2])
      }), t(n.progress * 100);
    };
  }
  async function Py(e, t, n, i, r, o) {
    try {
      const a = {
        stream: true,
        messages: t,
        temperature: o
      };
      r > 0 && (a.max_tokens = r);
      const l = await e.chat.completions.create(a);
      for await (const c of l) {
        const s = c.choices[0].delta.content;
        s && (n(s), i && i(s.length));
      }
      return e.getMessage();
    } catch (a) {
      return console.error(a), "";
    }
  }
  async function Ty(e, t, n) {
    return await Vc(new Worker(new URL("/cloud-computer/spnl/assets/generate-worker-C-8I7YPm.js", import.meta.url), {
      type: "module"
    }), [
      e
    ], {
      initProgressCallback: Iy(t, n)
    });
  }
  async function Ny(e, t, n, i, r, o, a, l, c) {
    const s = lo(e);
    console.log("gen messages", s);
    const u = t, p = `${u}.${c}`;
    p in Ir || (console.log("Initializing engine", p), Ir[p] = Ty(u, o, a));
    const f = await Ir[p];
    return Py(f, s, r, l, n, i);
  }
  function My() {
  }
  async function bi(e, t, n = -1) {
    return console.log("Execute query", e, n), Ai(e).with({
      user: Ne.string
    }, (i) => (n < 0 && t.emit(`> **User**
${i.user.split(`
`).map((r) => `> ${r}`).join(`
`)}

`), i)).with({
      system: Ne.string
    }, (i) => (n < 0 && t.emit(`> **System**
${i.system.split(`
`).map((r) => `> ${r}`).join(`
`)}

`), i)).with({
      assistant: Ne._
    }, (i) => i).with({
      g: {
        model: Ne.string,
        input: Ne._
      }
    }, async ({ g: { input: i, max_tokens: r = 100, temperature: o = 0.2 } }) => {
      const a = await bi(i, t, n), l = n < 0 ? null : (s) => t.setProgressDoPar((u) => {
        var _a2;
        const p = {
          min: 0,
          max: r * 10,
          value: s + (u ? ((_a2 = u[n]) == null ? void 0 : _a2.value) ?? 0 : 0)
        };
        return u ? [
          ...u.slice(0, n),
          p,
          ...u.slice(n + 1)
        ] : [
          p
        ];
      }), c = await Ny(a, t.defaultModel, r, o, n >= 0 ? My : t.emit, t.setProgressInit, t.setProgressDownload, l, n);
      return n >= 0 && t.setProgressDoPar((s) => {
        const u = {
          min: 0,
          max: r * 10,
          value: r * 10
        };
        return s ? [
          ...s.slice(0, n),
          u,
          ...s.slice(n + 1)
        ] : [
          u
        ];
      }), n >= 0 ? {
        user: c
      } : {
        assistant: c
      };
    }).with({
      print: Ne.string
    }, (i) => (t.emit("*" + i.print + `*

`), i)).with({
      repeat: {
        n: Ne.number,
        query: Ne._
      }
    }, (i) => i).with({
      cross: Ne.array()
    }, async ({ cross: i }) => {
      const r = [];
      for (const o of i) r.push(await bi(o, t, n));
      return {
        cross: r
      };
    }).with({
      plus: Ne.array()
    }, async ({ plus: i }) => {
      i.filter(Sl).length > 0 && t.setProgressDoPar(() => []);
      let o = 0;
      return {
        plus: await Promise.all(i.map((a) => {
          const l = Sl(a) ? o++ : -1;
          return bi(a, t, l);
        }))
      };
    }).exhaustive();
  }
  function Ry({ model: e, runState: t, query: n, onComplete: i }) {
    const [r, o] = b.useState(null), [a, l] = b.useState(-1), [c, s] = b.useState(null), [u, p] = b.useState(""), f = b.useCallback((d) => (p((x) => x + d), d), [
      p
    ]);
    return b.useEffect(() => {
      t === "running" && n !== null && (async (x) => {
        if (!e) {
          p("**Error**: please select a model"), i(false);
          return;
        }
        o(null), l(-1), s(null), p("");
        try {
          await bi(x, {
            defaultModel: e,
            emit: f,
            setProgressInit: o,
            setProgressDownload: l,
            setProgressDoPar: s
          }), i(true);
        } catch (v) {
          const C = String(v);
          /WebGPUNotAvailableError/.test(C) ? p("**Error**: this browser does not support WebGPU. Consult [this page](https://caniuse.com/webgpu) to find a supported browser. Chrome is a good bet right now.") : (console.error(v), p("**Error**: " + C)), i(false);
        }
      })(n);
    }, [
      f,
      n,
      t,
      o,
      l,
      s,
      p,
      i
    ]), m.jsxs(Pi, {
      hasGutter: true,
      children: [
        m.jsx(jo, {
          children: m.jsx(Cy, {
            children: u || "*Awaiting query execution*"
          })
        }),
        m.jsx(Ey, {
          init: r,
          download: a,
          dopar: c
        })
      ]
    });
  }
  function Ay(e) {
    const t = En.find((x) => x.value === e.demo) ?? En[0], n = t.query, i = e.model || pi[0].value, [r, o] = b.useState(null), [a, l] = b.useState(n), [c, s] = b.useState(null), [u, p] = b.useState("idle"), f = b.useCallback((x) => p(x ? "success" : "error"), [
      p
    ]);
    b.useEffect(() => l(n), [
      n,
      l
    ]), b.useEffect(() => {
      try {
        s(null), o(JSON.parse(Wc(a)));
      } catch (x) {
        console.error(x), s(x);
      }
    }, [
      a,
      o
    ]);
    const d = b.useCallback(() => p("running"), [
      p
    ]);
    return m.jsx(Io, {
      masthead: m.jsx(Hm, {
        demo: t.value,
        model: i
      }),
      isNotificationDrawerExpanded: !!r && e.qv,
      notificationDrawer: m.jsx(Nm, {
        unit: r
      }),
      drawerMinSize: "600px",
      children: m.jsxs(Ks, {
        children: [
          m.jsxs(bs, {
            component: "ul",
            style: {
              marginBottom: "1em"
            },
            children: [
              m.jsx(zr, {
                children: "Welcome to the Span Query Playground. Edit your query on the left, then click Run to execute it."
              }),
              c && m.jsxs(zr, {
                component: "li",
                variant: "error",
                children: [
                  "Compilation error: ",
                  c.message
                ]
              })
            ]
          }),
          m.jsxs(Ys, {
            hasGutter: true,
            children: [
              m.jsx(Yr, {
                span: 7,
                children: m.jsx(lg, {
                  demo: t.value,
                  isDrawerOpen: e.qv ?? false,
                  setQuery: l,
                  initialQuery: n,
                  onExecuteQuery: d
                })
              }),
              m.jsx(Yr, {
                span: 5,
                children: m.jsxs("div", {
                  className: "pf-v6-c-code-editor",
                  children: [
                    m.jsx(Am, {
                      title: "Console"
                    }),
                    m.jsx("div", {
                      className: "pf-v6-c-code-editor__main",
                      children: m.jsx("div", {
                        className: "pf-v6-c-code-editor__code",
                        children: m.jsx(Ry, {
                          model: i,
                          runState: u,
                          query: r,
                          onComplete: f
                        })
                      })
                    })
                  ]
                })
              })
            ]
          })
        ]
      })
    });
  }
  Fy = function() {
    const t = Uc.useSearch();
    return m.jsx(Ay, {
      ...t
    });
  };
});
export {
  __tla,
  Fy as component
};
