import { r as w, _ as G, j as m, c as Ma, u as za, a as N, g as ql, b as $l, G as Fa, B as lt, A as Vl, C as Ul, d as at, T as La, e as Ba, P as Wl, K as Xl, E as Kl, f as Ha, h as qa, i as ct, k as $n, S as Gl, s as Yl, l as Mn, m as wt, n as $a, o as Va, p as Ua, t as Ql, q as Jl, v as Wa, R as Ne, z as zn, N as fe, L as Zl, M as es, w as ts, x as Wi, y as ns, D as is, F as rs, H as as, I as os, J as ls, O as ss, Q as cs, __tla as __tla_0 } from "./index-CqQlUG9d.js";
let Ug;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const Oe = {
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
  };
  var Xa = [
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
  ], Cn = Xa.join(","), Ka = typeof Element > "u", bt = Ka ? function() {
  } : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, On = !Ka && Element.prototype.getRootNode ? function(e) {
    var t;
    return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
  } : function(e) {
    return e == null ? void 0 : e.ownerDocument;
  }, Sn = function e(t, n) {
    var i;
    n === void 0 && (n = true);
    var r = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), a = r === "" || r === "true", o = a || n && t && e(t.parentNode);
    return o;
  }, us = function(t) {
    var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
    return i === "" || i === "true";
  }, Ga = function(t, n, i) {
    if (Sn(t)) return [];
    var r = Array.prototype.slice.apply(t.querySelectorAll(Cn));
    return n && bt.call(t, Cn) && r.unshift(t), r = r.filter(i), r;
  }, Ya = function e(t, n, i) {
    for (var r = [], a = Array.from(t); a.length; ) {
      var o = a.shift();
      if (!Sn(o, false)) if (o.tagName === "SLOT") {
        var l = o.assignedElements(), c = l.length ? l : o.children, s = e(c, true, i);
        i.flatten ? r.push.apply(r, s) : r.push({
          scopeParent: o,
          candidates: s
        });
      } else {
        var u = bt.call(o, Cn);
        u && i.filter(o) && (n || !t.includes(o)) && r.push(o);
        var p = o.shadowRoot || typeof i.getShadowRoot == "function" && i.getShadowRoot(o), f = !Sn(p, false) && (!i.shadowRootFilter || i.shadowRootFilter(o));
        if (p && f) {
          var d = e(p === true ? o.children : p.children, true, i);
          i.flatten ? r.push.apply(r, d) : r.push({
            scopeParent: o,
            candidates: d
          });
        } else a.unshift.apply(a, o.children);
      }
    }
    return r;
  }, Qa = function(t) {
    return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
  }, gt = function(t) {
    if (!t) throw new Error("No node provided");
    return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || us(t)) && !Qa(t) ? 0 : t.tabIndex;
  }, ps = function(t, n) {
    var i = gt(t);
    return i < 0 && n && !Qa(t) ? 0 : i;
  }, ds = function(t, n) {
    return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
  }, Ja = function(t) {
    return t.tagName === "INPUT";
  }, fs = function(t) {
    return Ja(t) && t.type === "hidden";
  }, ms = function(t) {
    var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
      return i.tagName === "SUMMARY";
    });
    return n;
  }, hs = function(t, n) {
    for (var i = 0; i < t.length; i++) if (t[i].checked && t[i].form === n) return t[i];
  }, gs = function(t) {
    if (!t.name) return true;
    var n = t.form || On(t), i = function(l) {
      return n.querySelectorAll('input[type="radio"][name="' + l + '"]');
    }, r;
    if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function") r = i(window.CSS.escape(t.name));
    else try {
      r = i(t.name);
    } catch (o) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", o.message), false;
    }
    var a = hs(r, t.form);
    return !a || a === t;
  }, xs = function(t) {
    return Ja(t) && t.type === "radio";
  }, vs = function(t) {
    return xs(t) && !gs(t);
  }, ys = function(t) {
    var n, i = t && On(t), r = (n = i) === null || n === void 0 ? void 0 : n.host, a = false;
    if (i && i !== t) {
      var o, l, c;
      for (a = !!((o = r) !== null && o !== void 0 && (l = o.ownerDocument) !== null && l !== void 0 && l.contains(r) || t != null && (c = t.ownerDocument) !== null && c !== void 0 && c.contains(t)); !a && r; ) {
        var s, u, p;
        i = On(r), r = (s = i) === null || s === void 0 ? void 0 : s.host, a = !!((u = r) !== null && u !== void 0 && (p = u.ownerDocument) !== null && p !== void 0 && p.contains(r));
      }
    }
    return a;
  }, gr = function(t) {
    var n = t.getBoundingClientRect(), i = n.width, r = n.height;
    return i === 0 && r === 0;
  }, bs = function(t, n) {
    var i = n.displayCheck, r = n.getShadowRoot;
    if (getComputedStyle(t).visibility === "hidden") return true;
    var a = bt.call(t, "details>summary:first-of-type"), o = a ? t.parentElement : t;
    if (bt.call(o, "details:not([open]) *")) return true;
    if (!i || i === "full" || i === "legacy-full") {
      if (typeof r == "function") {
        for (var l = t; t; ) {
          var c = t.parentElement, s = On(t);
          if (c && !c.shadowRoot && r(c) === true) return gr(t);
          t.assignedSlot ? t = t.assignedSlot : !c && s !== t.ownerDocument ? t = s.host : t = c;
        }
        t = l;
      }
      if (ys(t)) return !t.getClientRects().length;
      if (i !== "legacy-full") return true;
    } else if (i === "non-zero-area") return gr(t);
    return false;
  }, ws = function(t) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName)) for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var i = 0; i < n.children.length; i++) {
          var r = n.children.item(i);
          if (r.tagName === "LEGEND") return bt.call(n, "fieldset[disabled] *") ? true : !r.contains(t);
        }
        return true;
      }
      n = n.parentElement;
    }
    return false;
  }, En = function(t, n) {
    return !(n.disabled || Sn(n) || fs(n) || bs(n, t) || ms(n) || ws(n));
  }, wi = function(t, n) {
    return !(vs(n) || gt(n) < 0 || !En(t, n));
  }, ks = function(t) {
    var n = parseInt(t.getAttribute("tabindex"), 10);
    return !!(isNaN(n) || n >= 0);
  }, Cs = function e(t) {
    var n = [], i = [];
    return t.forEach(function(r, a) {
      var o = !!r.scopeParent, l = o ? r.scopeParent : r, c = ps(l, o), s = o ? e(r.candidates) : l;
      c === 0 ? o ? n.push.apply(n, s) : n.push(l) : i.push({
        documentOrder: a,
        tabIndex: c,
        item: r,
        isScope: o,
        content: s
      });
    }), i.sort(ds).reduce(function(r, a) {
      return a.isScope ? r.push.apply(r, a.content) : r.push(a.content), r;
    }, []).concat(n);
  }, Os = function(t, n) {
    n = n || {};
    var i;
    return n.getShadowRoot ? i = Ya([
      t
    ], n.includeContainer, {
      filter: wi.bind(null, n),
      flatten: false,
      getShadowRoot: n.getShadowRoot,
      shadowRootFilter: ks
    }) : i = Ga(t, n.includeContainer, wi.bind(null, n)), Cs(i);
  }, Ss = function(t, n) {
    n = n || {};
    var i;
    return n.getShadowRoot ? i = Ya([
      t
    ], n.includeContainer, {
      filter: En.bind(null, n),
      flatten: true,
      getShadowRoot: n.getShadowRoot
    }) : i = Ga(t, n.includeContainer, En.bind(null, n)), i;
  }, Ct = function(t, n) {
    if (n = n || {}, !t) throw new Error("No node provided");
    return bt.call(t, Cn) === false ? false : wi(n, t);
  }, Es = Xa.concat("iframe").join(","), Vn = function(t, n) {
    if (n = n || {}, !t) throw new Error("No node provided");
    return bt.call(t, Es) === false ? false : En(n, t);
  };
  function ki(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
  }
  function _s(e) {
    if (Array.isArray(e)) return ki(e);
  }
  function js(e, t, n) {
    return (t = Rs(t)) in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[t] = n, e;
  }
  function Ts(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
  }
  function Is() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function xr(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t && (i = i.filter(function(r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), n.push.apply(n, i);
    }
    return n;
  }
  function vr(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2 ? xr(Object(n), true).forEach(function(i) {
        js(e, i, n[i]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xr(Object(n)).forEach(function(i) {
        Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
      });
    }
    return e;
  }
  function Ps(e) {
    return _s(e) || Ts(e) || As(e) || Is();
  }
  function Ns(e, t) {
    if (typeof e != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
      var i = n.call(e, t);
      if (typeof i != "object") return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }
  function Rs(e) {
    var t = Ns(e, "string");
    return typeof t == "symbol" ? t : t + "";
  }
  function As(e, t) {
    if (e) {
      if (typeof e == "string") return ki(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ki(e, t) : void 0;
    }
  }
  var yr = {
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
  }, Ds = function(t) {
    return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
  }, Ms = function(t) {
    return (t == null ? void 0 : t.key) === "Escape" || (t == null ? void 0 : t.key) === "Esc" || (t == null ? void 0 : t.keyCode) === 27;
  }, Ut = function(t) {
    return (t == null ? void 0 : t.key) === "Tab" || (t == null ? void 0 : t.keyCode) === 9;
  }, zs = function(t) {
    return Ut(t) && !t.shiftKey;
  }, Fs = function(t) {
    return Ut(t) && t.shiftKey;
  }, br = function(t) {
    return setTimeout(t, 0);
  }, Mt = function(t) {
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
    return typeof t == "function" ? t.apply(void 0, i) : t;
  }, un = function(t) {
    return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
  }, Ls = [], Bs = function(t, n) {
    var i = (n == null ? void 0 : n.document) || document, r = (n == null ? void 0 : n.trapStack) || Ls, a = vr({
      returnFocusOnDeactivate: true,
      escapeDeactivates: true,
      delayInitialFocus: true,
      isKeyForward: zs,
      isKeyBackward: Fs
    }, n), o = {
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
    }, l, c = function(x, v, S) {
      return x && x[v] !== void 0 ? x[v] : a[S || v];
    }, s = function(x, v) {
      var S = typeof (v == null ? void 0 : v.composedPath) == "function" ? v.composedPath() : void 0;
      return o.containerGroups.findIndex(function(z) {
        var $ = z.container, X = z.tabbableNodes;
        return $.contains(x) || (S == null ? void 0 : S.includes($)) || X.find(function(H) {
          return H === x;
        });
      });
    }, u = function(x) {
      var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, S = v.hasFallback, z = S === void 0 ? false : S, $ = v.params, X = $ === void 0 ? [] : $, H = a[x];
      if (typeof H == "function" && (H = H.apply(void 0, Ps(X))), H === true && (H = void 0), !H) {
        if (H === void 0 || H === false) return H;
        throw new Error("`".concat(x, "` was specified but was not a node, or did not return a node"));
      }
      var h = H;
      if (typeof H == "string") {
        try {
          h = i.querySelector(H);
        } catch (W) {
          throw new Error("`".concat(x, '` appears to be an invalid selector; error="').concat(W.message, '"'));
        }
        if (!h && !z) throw new Error("`".concat(x, "` as selector refers to no known node"));
      }
      return h;
    }, p = function() {
      var x = u("initialFocus", {
        hasFallback: true
      });
      if (x === false) return false;
      if (x === void 0 || x && !Vn(x, a.tabbableOptions)) if (s(i.activeElement) >= 0) x = i.activeElement;
      else {
        var v = o.tabbableGroups[0], S = v && v.firstTabbableNode;
        x = S || u("fallbackFocus");
      }
      else x === null && (x = u("fallbackFocus"));
      if (!x) throw new Error("Your focus-trap needs to have at least one focusable element");
      return x;
    }, f = function() {
      if (o.containerGroups = o.containers.map(function(x) {
        var v = Os(x, a.tabbableOptions), S = Ss(x, a.tabbableOptions), z = v.length > 0 ? v[0] : void 0, $ = v.length > 0 ? v[v.length - 1] : void 0, X = S.find(function(W) {
          return Ct(W);
        }), H = S.slice().reverse().find(function(W) {
          return Ct(W);
        }), h = !!v.find(function(W) {
          return gt(W) > 0;
        });
        return {
          container: x,
          tabbableNodes: v,
          focusableNodes: S,
          posTabIndexesFound: h,
          firstTabbableNode: z,
          lastTabbableNode: $,
          firstDomTabbableNode: X,
          lastDomTabbableNode: H,
          nextTabbableNode: function(J) {
            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, Y = v.indexOf(J);
            return Y < 0 ? g ? S.slice(S.indexOf(J) + 1).find(function(ce) {
              return Ct(ce);
            }) : S.slice(0, S.indexOf(J)).reverse().find(function(ce) {
              return Ct(ce);
            }) : v[Y + (g ? 1 : -1)];
          }
        };
      }), o.tabbableGroups = o.containerGroups.filter(function(x) {
        return x.tabbableNodes.length > 0;
      }), o.tabbableGroups.length <= 0 && !u("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
      if (o.containerGroups.find(function(x) {
        return x.posTabIndexesFound;
      }) && o.containerGroups.length > 1) throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
    }, d = function(x) {
      var v = x.activeElement;
      if (v) return v.shadowRoot && v.shadowRoot.activeElement !== null ? d(v.shadowRoot) : v;
    }, y = function(x) {
      if (x !== false && x !== d(document)) {
        if (!x || !x.focus) {
          y(p());
          return;
        }
        x.focus({
          preventScroll: !!a.preventScroll
        }), o.mostRecentlyFocusedNode = x, Ds(x) && x.select();
      }
    }, k = function(x) {
      var v = u("setReturnFocus", {
        params: [
          x
        ]
      });
      return v || (v === false ? false : x);
    }, E = function(x) {
      var v = x.target, S = x.event, z = x.isBackward, $ = z === void 0 ? false : z;
      v = v || un(S), f();
      var X = null;
      if (o.tabbableGroups.length > 0) {
        var H = s(v, S), h = H >= 0 ? o.containerGroups[H] : void 0;
        if (H < 0) $ ? X = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : X = o.tabbableGroups[0].firstTabbableNode;
        else if ($) {
          var W = o.tabbableGroups.findIndex(function(Ee) {
            var xe = Ee.firstTabbableNode;
            return v === xe;
          });
          if (W < 0 && (h.container === v || Vn(v, a.tabbableOptions) && !Ct(v, a.tabbableOptions) && !h.nextTabbableNode(v, false)) && (W = H), W >= 0) {
            var J = W === 0 ? o.tabbableGroups.length - 1 : W - 1, g = o.tabbableGroups[J];
            X = gt(v) >= 0 ? g.lastTabbableNode : g.lastDomTabbableNode;
          } else Ut(S) || (X = h.nextTabbableNode(v, false));
        } else {
          var Y = o.tabbableGroups.findIndex(function(Ee) {
            var xe = Ee.lastTabbableNode;
            return v === xe;
          });
          if (Y < 0 && (h.container === v || Vn(v, a.tabbableOptions) && !Ct(v, a.tabbableOptions) && !h.nextTabbableNode(v)) && (Y = H), Y >= 0) {
            var ce = Y === o.tabbableGroups.length - 1 ? 0 : Y + 1, ne = o.tabbableGroups[ce];
            X = gt(v) >= 0 ? ne.firstTabbableNode : ne.firstDomTabbableNode;
          } else Ut(S) || (X = h.nextTabbableNode(v));
        }
      } else X = u("fallbackFocus");
      return X;
    }, C = function(x) {
      var v = un(x);
      if (!(s(v, x) >= 0)) {
        if (Mt(a.clickOutsideDeactivates, x)) {
          l.deactivate({
            returnFocus: a.returnFocusOnDeactivate
          });
          return;
        }
        Mt(a.allowOutsideClick, x) || x.preventDefault();
      }
    }, _ = function(x) {
      var v = un(x), S = s(v, x) >= 0;
      if (S || v instanceof Document) S && (o.mostRecentlyFocusedNode = v);
      else {
        x.stopImmediatePropagation();
        var z, $ = true;
        if (o.mostRecentlyFocusedNode) if (gt(o.mostRecentlyFocusedNode) > 0) {
          var X = s(o.mostRecentlyFocusedNode), H = o.containerGroups[X].tabbableNodes;
          if (H.length > 0) {
            var h = H.findIndex(function(W) {
              return W === o.mostRecentlyFocusedNode;
            });
            h >= 0 && (a.isKeyForward(o.recentNavEvent) ? h + 1 < H.length && (z = H[h + 1], $ = false) : h - 1 >= 0 && (z = H[h - 1], $ = false));
          }
        } else o.containerGroups.some(function(W) {
          return W.tabbableNodes.some(function(J) {
            return gt(J) > 0;
          });
        }) || ($ = false);
        else $ = false;
        $ && (z = E({
          target: o.mostRecentlyFocusedNode,
          isBackward: a.isKeyBackward(o.recentNavEvent)
        })), y(z || o.mostRecentlyFocusedNode || p());
      }
      o.recentNavEvent = void 0;
    }, T = function(x) {
      var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      o.recentNavEvent = x;
      var S = E({
        event: x,
        isBackward: v
      });
      S && (Ut(x) && x.preventDefault(), y(S));
    }, A = function(x) {
      (a.isKeyForward(x) || a.isKeyBackward(x)) && T(x, a.isKeyBackward(x));
    }, q = function(x) {
      Ms(x) && Mt(a.escapeDeactivates, x) !== false && (x.preventDefault(), l.deactivate());
    }, O = function(x) {
      var v = un(x);
      s(v, x) >= 0 || Mt(a.clickOutsideDeactivates, x) || Mt(a.allowOutsideClick, x) || (x.preventDefault(), x.stopImmediatePropagation());
    }, L = function() {
      if (o.active) return yr.activateTrap(r, l), o.delayInitialFocusTimer = a.delayInitialFocus ? br(function() {
        y(p());
      }) : y(p()), i.addEventListener("focusin", _, true), i.addEventListener("mousedown", C, {
        capture: true,
        passive: false
      }), i.addEventListener("touchstart", C, {
        capture: true,
        passive: false
      }), i.addEventListener("click", O, {
        capture: true,
        passive: false
      }), i.addEventListener("keydown", A, {
        capture: true,
        passive: false
      }), i.addEventListener("keydown", q), l;
    }, V = function() {
      if (o.active) return i.removeEventListener("focusin", _, true), i.removeEventListener("mousedown", C, true), i.removeEventListener("touchstart", C, true), i.removeEventListener("click", O, true), i.removeEventListener("keydown", A, true), i.removeEventListener("keydown", q), l;
    }, D = function(x) {
      var v = x.some(function(S) {
        var z = Array.from(S.removedNodes);
        return z.some(function($) {
          return $ === o.mostRecentlyFocusedNode;
        });
      });
      v && y(p());
    }, M = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(D) : void 0, F = function() {
      M && (M.disconnect(), o.active && !o.paused && o.containers.map(function(x) {
        M.observe(x, {
          subtree: true,
          childList: true
        });
      }));
    };
    return l = {
      get active() {
        return o.active;
      },
      get paused() {
        return o.paused;
      },
      activate: function(x) {
        if (o.active) return this;
        var v = c(x, "onActivate"), S = c(x, "onPostActivate"), z = c(x, "checkCanFocusTrap");
        z || f(), o.active = true, o.paused = false, o.nodeFocusedBeforeActivation = i.activeElement, v == null ? void 0 : v();
        var $ = function() {
          z && f(), L(), F(), S == null ? void 0 : S();
        };
        return z ? (z(o.containers.concat()).then($, $), this) : ($(), this);
      },
      deactivate: function(x) {
        if (!o.active) return this;
        var v = vr({
          onDeactivate: a.onDeactivate,
          onPostDeactivate: a.onPostDeactivate,
          checkCanReturnFocus: a.checkCanReturnFocus
        }, x);
        clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, V(), o.active = false, o.paused = false, F(), yr.deactivateTrap(r, l);
        var S = c(v, "onDeactivate"), z = c(v, "onPostDeactivate"), $ = c(v, "checkCanReturnFocus"), X = c(v, "returnFocus", "returnFocusOnDeactivate");
        S == null ? void 0 : S();
        var H = function() {
          br(function() {
            X && y(k(o.nodeFocusedBeforeActivation)), z == null ? void 0 : z();
          });
        };
        return X && $ ? ($(k(o.nodeFocusedBeforeActivation)).then(H, H), this) : (H(), this);
      },
      pause: function(x) {
        return o.active ? (o.manuallyPaused = true, this._setPausedState(true, x)) : this;
      },
      unpause: function(x) {
        return o.active ? (o.manuallyPaused = false, r[r.length - 1] !== this ? this : this._setPausedState(false, x)) : this;
      },
      updateContainerElements: function(x) {
        var v = [].concat(x).filter(Boolean);
        return o.containers = v.map(function(S) {
          return typeof S == "string" ? i.querySelector(S) : S;
        }), o.active && f(), F(), this;
      }
    }, Object.defineProperties(l, {
      _isManuallyPaused: {
        value: function() {
          return o.manuallyPaused;
        }
      },
      _setPausedState: {
        value: function(x, v) {
          if (o.paused === x) return this;
          if (o.paused = x, x) {
            var S = c(v, "onPause"), z = c(v, "onPostPause");
            S == null ? void 0 : S(), V(), F(), z == null ? void 0 : z();
          } else {
            var $ = c(v, "onUnpause"), X = c(v, "onPostUnpause");
            $ == null ? void 0 : $(), f(), L(), F(), X == null ? void 0 : X();
          }
          return this;
        }
      }
    }), l.updateContainerElements(t), l;
  };
  function Hs(e) {
    const t = w.useRef(e);
    t.current = e, w.useEffect(() => () => {
      t.current();
    }, []);
  }
  const Xi = w.forwardRef(function(t, n) {
    var { active: i = true, paused: r = false, focusTrapOptions: a = {}, preventScrollOnDeactivate: o = false } = t, l = G(t, [
      "active",
      "paused",
      "focusTrapOptions",
      "preventScrollOnDeactivate"
    ]);
    const c = w.useRef(null);
    w.useImperativeHandle(n, () => c.current);
    const s = w.useRef(null);
    w.useEffect(() => {
      const p = Bs(c.current, Object.assign(Object.assign({}, a), {
        returnFocusOnDeactivate: false
      }));
      return s.current = p, () => {
        p.deactivate();
      };
    }, []), w.useEffect(() => {
      const p = s.current;
      i ? p == null ? void 0 : p.activate() : p == null ? void 0 : p.deactivate();
    }, [
      i
    ]), w.useEffect(() => {
      const p = s.current;
      r ? p == null ? void 0 : p.pause() : p == null ? void 0 : p.unpause();
    }, [
      r
    ]);
    const u = w.useRef(typeof document < "u" ? document.activeElement : null);
    return Hs(() => {
      a.returnFocusOnDeactivate !== false && u.current instanceof HTMLElement && u.current.focus({
        preventScroll: o
      });
    }), m.jsx("div", Object.assign({
      ref: c
    }, l));
  });
  Xi.displayName = "FocusTrap";
  const Za = (e, t, n) => {
    let i;
    if (Ma) {
      const { ResizeObserver: r } = window;
      if (e && r) {
        const a = new r((o) => {
          n ? window.requestAnimationFrame(() => {
            Array.isArray(o) && o.length > 0;
          }) : Array.isArray(o) && o.length > 0 && t();
        });
        a.observe(e), i = () => a.unobserve(e);
      } else window.addEventListener("resize", t), i = () => window.removeEventListener("resize", t);
    }
    return () => {
      i && i();
    };
  }, pe = {
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
  }, Ki = w.createContext({
    cardId: "",
    isExpanded: false,
    isClickable: false,
    isSelectable: false,
    isSelected: false,
    isClicked: false,
    isDisabled: false
  }), Gi = (e) => {
    var { children: t, id: n = "", className: i, component: r = "div", isCompact: a = false, isSelectable: o = false, isClickable: l = false, isDisabled: c = false, isSelected: s = false, isClicked: u = false, isExpanded: p = false, isLarge: f = false, isFullHeight: d = false, isPlain: y = false, variant: k = "default", ouiaId: E, ouiaSafe: C = true } = e, _ = G(e, [
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
    const T = r, A = za(Gi.displayName, E, C);
    a && f && (console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"), f = false);
    const q = () => o && l ? N(pe.modifiers.selectable, pe.modifiers.clickable, (s || u) && pe.modifiers.current) : o ? N(pe.modifiers.selectable, s && pe.modifiers.selected) : l ? N(pe.modifiers.clickable, u && pe.modifiers.current) : "";
    return m.jsx(Ki.Provider, {
      value: {
        cardId: n,
        isExpanded: p,
        isClickable: l,
        isSelectable: o,
        isSelected: s,
        isClicked: u,
        isDisabled: c
      },
      children: m.jsx(T, Object.assign({
        id: n,
        className: N(pe.card, a && pe.modifiers.compact, p && pe.modifiers.expanded, f && pe.modifiers.displayLg, d && pe.modifiers.fullHeight, y && pe.modifiers.plain, k === "secondary" && pe.modifiers.secondary, q(), c && pe.modifiers.disabled, i)
      }, _, A, {
        children: t
      }))
    });
  };
  Gi.displayName = "Card";
  const eo = (e) => {
    var { children: t, className: n, component: i = "div", isFilled: r = true } = e, a = G(e, [
      "children",
      "className",
      "component",
      "isFilled"
    ]);
    const o = i;
    return m.jsx(o, Object.assign({
      className: N(pe.cardBody, !r && pe.modifiers.noFill, n)
    }, a, {
      children: t
    }));
  };
  eo.displayName = "CardBody";
  const to = (e) => {
    var { children: t, className: n, component: i = "div" } = e, r = G(e, [
      "children",
      "className",
      "component"
    ]);
    const { cardId: a } = w.useContext(Ki), o = i, l = a ? `${a}-title` : "";
    return m.jsx("div", {
      className: N(pe.cardTitle),
      children: m.jsx(o, Object.assign({
        className: N(pe.cardTitleText, n),
        id: l || void 0
      }, r, {
        children: t
      }))
    });
  };
  to.displayName = "CardTitle";
  const no = (e) => {
    var { children: t, className: n } = e, i = G(e, [
      "children",
      "className"
    ]);
    return m.jsx("div", Object.assign({
      className: N(pe.cardHeaderMain, n)
    }, i, {
      children: t
    }));
  };
  no.displayName = "CardHeaderMain";
  const io = (e) => {
    var { children: t, className: n, hasNoOffset: i = false } = e, r = G(e, [
      "children",
      "className",
      "hasNoOffset"
    ]);
    return m.jsx("div", Object.assign({
      className: N(pe.cardActions, i && pe.modifiers.noOffset, n)
    }, r, {
      children: t
    }));
  };
  io.displayName = "CardActions";
  const ro = (e) => {
    var { children: t, className: n } = e, i = G(e, [
      "children",
      "className"
    ]);
    return m.jsx("div", Object.assign({
      className: N(pe.cardSelectableActions, n)
    }, i, {
      children: t
    }));
  };
  ro.displayName = "CardSelectableActions";
  const ht = {
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
  class It extends w.Component {
    constructor(t) {
      super(t), this.handleChange = (n) => {
        this.props.onChange(n, n.currentTarget.checked);
      }, !t.label && !t["aria-label"] && console.error("Radio:", "Radio requires an aria-label to be specified"), this.state = {
        ouiaStateId: ql(It.displayName)
      };
    }
    render() {
      const t = this.props, { "aria-label": n, checked: i, className: r, inputClassName: a, defaultChecked: o, isLabelWrapped: l, labelPosition: c = "end", isChecked: s, isDisabled: u, isValid: p, label: f, onChange: d, description: y, body: k, ouiaId: E, ouiaSafe: C = true, component: _ } = t, T = G(t, [
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
      T.id || console.error("Radio:", "id is required to make input accessible");
      const A = m.jsx("input", Object.assign({}, T, {
        className: N(ht.radioInput, a),
        type: "radio",
        onChange: this.handleChange,
        "aria-invalid": !p,
        disabled: u,
        checked: i || s
      }, i === void 0 && {
        defaultChecked: o
      }, !f && {
        "aria-label": n
      }, $l(It.displayName, E !== void 0 ? E : this.state.ouiaStateId, C))), q = l && !_ || _ === "label", O = q ? "span" : "label", L = f ? m.jsx(O, {
        className: N(ht.radioLabel, u && ht.modifiers.disabled),
        htmlFor: q ? void 0 : T.id,
        children: f
      }) : null, V = _ ?? (q ? "label" : "div");
      return m.jsxs(V, {
        className: N(ht.radio, !f && ht.modifiers.standalone, r),
        htmlFor: q ? T.id : void 0,
        children: [
          c === "start" ? m.jsxs(m.Fragment, {
            children: [
              L,
              A
            ]
          }) : m.jsxs(m.Fragment, {
            children: [
              A,
              L
            ]
          }),
          y && m.jsx("span", {
            className: N(ht.radioDescription),
            children: y
          }),
          k && m.jsx("span", {
            className: N(ht.radioBody),
            children: k
          })
        ]
      });
    }
  }
  It.displayName = "Radio";
  It.defaultProps = {
    className: "",
    isDisabled: false,
    isValid: true,
    onChange: () => {
    }
  };
  const ao = (e) => {
    var { children: t, className: n, actions: i, selectableActions: r, id: a, onExpand: o, toggleButtonProps: l, isToggleRightAligned: c, hasWrap: s } = e, u = G(e, [
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
    return m.jsx(Fa, {
      children: (p) => m.jsx(Ki.Consumer, {
        children: ({ cardId: f, isClickable: d, isSelectable: y, isSelected: k, isDisabled: E }) => {
          const C = m.jsx("div", {
            className: N(pe.cardHeaderToggle),
            children: m.jsx(lt, Object.assign({
              variant: "plain",
              type: "button",
              onClick: (D) => {
                o(D, f);
              }
            }, l, {
              icon: m.jsx("span", {
                className: N(pe.cardHeaderToggleIcon),
                children: m.jsx(Vl, {})
              })
            }))
          }), _ = d && !y || y && !d;
          (i == null ? void 0 : i.actions) && _ && console.error(`Card: ${d ? "Clickable" : "Selectable"} only cards should not contain any other actions. If you wish to include additional actions, use a clickable and selectable card.`);
          const T = d && !y;
          (T || y) && !(r == null ? void 0 : r.selectableActionAriaLabel) && !(r == null ? void 0 : r.selectableActionAriaLabelledby) && console.error(`Card: ${T ? "Clickable-only cards" : "Cards with a selectable input"} must have either the selectableActions.selectableActionAriaLabel or selectableActions.selectableActionAriaLabelledby prop passed in order to provide an accessible name to the clickable element.`);
          const A = (r == null ? void 0 : r.variant) === "single" ? It : Ul, q = () => {
            var D, M;
            return Object.assign({
              className: N("pf-m-standalone"),
              inputClassName: N((r == null ? void 0 : r.isHidden) && "pf-v6-screen-reader"),
              label: m.jsx(m.Fragment, {}),
              "aria-label": r.selectableActionAriaLabel,
              "aria-labelledby": r.selectableActionAriaLabelledby,
              id: (D = r.selectableActionId) !== null && D !== void 0 ? D : `card-selectable-${p}`,
              name: r.name,
              isDisabled: E,
              onChange: r.onChange,
              isChecked: (M = r.isChecked) !== null && M !== void 0 ? M : k
            }, r.selectableActionProps);
          }, O = (r == null ? void 0 : r.to) !== void 0, L = O ? "a" : "button", V = () => {
            const M = Object.assign({
              className: N("pf-v6-c-card__clickable-action", E && O && pe.modifiers.disabled, (r == null ? void 0 : r.isHidden) && "pf-v6-screen-reader"),
              id: r.selectableActionId,
              "aria-label": r.selectableActionAriaLabel,
              "aria-labelledby": r.selectableActionAriaLabelledby
            }, r.selectableActionProps);
            return O ? Object.assign(Object.assign(Object.assign(Object.assign({}, M), {
              href: r.to
            }), E && {
              tabIndex: -1,
              "aria-disabled": true
            }), r.isExternalLink && {
              target: "_blank"
            }) : Object.assign(Object.assign({}, M), {
              type: "button",
              disabled: E,
              onClick: r.onClickAction
            });
          };
          return m.jsxs("div", Object.assign({
            className: N(pe.cardHeader, c && pe.modifiers.toggleRight, s && pe.modifiers.wrap, n),
            id: a
          }, u, {
            children: [
              o && !c && C,
              (i || r && (d || y)) && m.jsxs(io, {
                className: i == null ? void 0 : i.className,
                hasNoOffset: (i == null ? void 0 : i.hasNoOffset) || (r == null ? void 0 : r.hasNoOffset),
                children: [
                  i == null ? void 0 : i.actions,
                  r && (d || y) && m.jsxs(ro, {
                    className: r == null ? void 0 : r.className,
                    children: [
                      y && m.jsx(A, Object.assign({}, q())),
                      T && m.jsx(L, Object.assign({}, V()))
                    ]
                  })
                ]
              }),
              t && m.jsx(no, {
                children: t
              }),
              o && c && C
            ]
          }));
        }
      })
    });
  };
  ao.displayName = "CardHeader";
  const qs = {
    name: "CopyIcon",
    height: 512,
    width: 448,
    svgPath: "M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z",
    yOffset: 0,
    xOffset: 0
  }, $s = at(qs);
  var wr;
  (function(e) {
    e.h1 = "h1", e.h2 = "h2", e.h3 = "h3", e.h4 = "h4", e.h5 = "h5", e.h6 = "h6", e.p = "p", e.a = "a", e.small = "small", e.blockquote = "blockquote", e.pre = "pre", e.hr = "hr", e.ul = "ul", e.ol = "ol", e.dl = "dl", e.li = "li", e.dt = "dt", e.dd = "dd";
  })(wr || (wr = {}));
  const Vs = {
    div: Oe.content,
    h1: Oe.contentH1,
    h2: Oe.contentH2,
    h3: Oe.contentH3,
    h4: Oe.contentH4,
    h5: Oe.contentH5,
    h6: Oe.contentH6,
    p: Oe.contentP,
    a: Oe.contentA,
    small: Oe.contentSmall,
    blockquote: Oe.contentBlockquote,
    pre: Oe.contentPre,
    hr: Oe.contentHr,
    ul: Oe.contentUl,
    ol: Oe.contentOl,
    dl: Oe.contentDl,
    li: Oe.contentLi,
    dt: Oe.contentDt,
    dd: Oe.contentDd
  }, Yi = (e) => {
    var { children: t, className: n = "", component: i, isPlainList: r = false, isVisitedLink: a = false, ouiaId: o, ouiaSafe: l = true, isEditorial: c = false } = e, s = G(e, [
      "children",
      "className",
      "component",
      "isPlainList",
      "isVisitedLink",
      "ouiaId",
      "ouiaSafe",
      "isEditorial"
    ]);
    const u = i ?? "div", p = u, f = za(Yi.displayName, o, l), d = [
      "ul",
      "ol",
      "dl"
    ].includes(u);
    return m.jsx(p, Object.assign({}, f, s, {
      "data-pf-content": true,
      className: N(Vs[u], d && r && Oe.modifiers.plain, a && Oe.modifiers.visited, c && Oe.modifiers.editorial, n),
      children: t
    }));
  };
  Yi.displayName = "Content";
  const de = {
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
  }, Us = w.createContext({}), oo = (e) => {
    var { className: t = null, children: n } = e, i = G(e, [
      "className",
      "children"
    ]);
    return m.jsx("div", Object.assign({
      className: N(de.popoverContent, t)
    }, i, {
      children: n
    }));
  };
  oo.displayName = "PopoverContent";
  const lo = (e) => {
    var { children: t, id: n, className: i } = e, r = G(e, [
      "children",
      "id",
      "className"
    ]);
    return m.jsx("div", Object.assign({
      className: N(de.popoverBody, i),
      id: n
    }, r, {
      children: t
    }));
  };
  lo.displayName = "PopoverBody";
  const so = (e) => {
    var { children: t, className: n } = e, i = G(e, [
      "children",
      "className"
    ]);
    return m.jsx("span", Object.assign({
      className: N(de.popoverTitleIcon, n)
    }, i, {
      children: t
    }));
  };
  so.displayName = "PopoverHeaderIcon";
  const co = (e) => {
    var { children: t, className: n, headingLevel: i } = e, r = G(e, [
      "children",
      "className",
      "headingLevel"
    ]);
    const a = i;
    return m.jsx(a, Object.assign({
      className: N(de.popoverTitleText, n)
    }, r, {
      children: t
    }));
  };
  co.displayName = "PopoverHeaderText";
  const uo = (e) => {
    var { children: t, icon: n, className: i, titleHeadingLevel: r = "h6", alertSeverityVariant: a, id: o, alertSeverityScreenReaderText: l } = e, c = G(e, [
      "children",
      "icon",
      "className",
      "titleHeadingLevel",
      "alertSeverityVariant",
      "id",
      "alertSeverityScreenReaderText"
    ]);
    return m.jsx("header", Object.assign({
      className: N(de.popoverHeader, i)
    }, c, {
      children: m.jsxs("div", {
        className: N(de.popoverTitle),
        id: o,
        children: [
          n && m.jsx(so, {
            children: n
          }),
          m.jsxs(co, {
            headingLevel: r,
            children: [
              a && l && m.jsx("span", {
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
  uo.displayName = "PopoverHeader";
  const po = (e) => {
    var { children: t, className: n = "" } = e, i = G(e, [
      "children",
      "className"
    ]);
    return m.jsx("footer", Object.assign({
      className: N(de.popoverFooter, n)
    }, i, {
      children: t
    }));
  };
  po.displayName = "PopoverFooter";
  const fo = (e) => {
    var { onClose: t = () => {
    } } = e, n = G(e, [
      "onClose"
    ]);
    return m.jsx("div", {
      className: N(de.popoverClose),
      children: m.jsx(lt, Object.assign({
        onClick: t,
        variant: "plain",
        "aria-label": true
      }, n, {
        style: {
          pointerEvents: "auto"
        },
        icon: m.jsx(La, {})
      }))
    });
  };
  fo.displayName = "PopoverCloseButton";
  const mo = (e) => {
    var { className: t = "" } = e, n = G(e, [
      "className"
    ]);
    return m.jsx("div", Object.assign({
      className: N(de.popoverArrow, t)
    }, n));
  };
  mo.displayName = "PopoverArrow";
  const Un = {
    name: "--pf-v6-c-popover--MaxWidth",
    value: "none",
    var: "var(--pf-v6-c-popover--MaxWidth)"
  }, Wn = {
    name: "--pf-v6-c-popover--MinWidth",
    value: "auto",
    var: "var(--pf-v6-c-popover--MinWidth)"
  };
  var kr;
  (function(e) {
    e.auto = "auto", e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e.topStart = "top-start", e.topEnd = "top-end", e.bottomStart = "bottom-start", e.bottomEnd = "bottom-end", e.leftStart = "left-start", e.leftEnd = "left-end", e.rightStart = "right-start", e.rightEnd = "right-end";
  })(kr || (kr = {}));
  const Ws = {
    custom: de.modifiers.custom,
    info: de.modifiers.info,
    success: de.modifiers.success,
    warning: de.modifiers.warning,
    danger: de.modifiers.danger
  }, ho = (e) => {
    var { children: t, position: n = "top", enableFlip: i = true, className: r = "", isVisible: a = null, shouldClose: o = () => null, shouldOpen: l = () => null, "aria-label": c = "", bodyContent: s, headerContent: u = null, headerComponent: p = "h6", headerIcon: f = null, alertSeverityVariant: d, alertSeverityScreenReaderText: y, footerContent: k = null, appendTo: E = () => document.body, hideOnOutsideClick: C = true, onHide: _ = () => null, onHidden: T = () => null, onShow: A = () => null, onShown: q = () => null, onMount: O = () => null, zIndex: L = 9999, triggerAction: V = "click", minWidth: D = Wn && Wn.value, maxWidth: M = Un && Un.value, closeBtnAriaLabel: F = "Close", showClose: I = true, distance: x = 25, flipBehavior: v = [
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
    ], animationDuration: S = 300, id: z, withFocusTrap: $, triggerRef: X, hasNoPadding: H = false, hasAutoWidth: h = false, elementToFocus: W } = e, J = G(e, [
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
    const g = z || Ba(), Y = a !== null, [ce, ne] = w.useState(false), [Ee, xe] = w.useState(!!$), ve = w.useRef(null);
    w.useEffect(() => {
      O();
    }, []), w.useEffect(() => {
      Y && (a ? me(void 0, true) : le());
    }, [
      a,
      Y
    ]);
    const me = (P, b) => {
      P && A(P), ne(true), $ !== false && b && xe(true);
    }, le = (P) => {
      P && _(P), ne(false);
    }, Te = {
      top: de.modifiers.top,
      bottom: de.modifiers.bottom,
      left: de.modifiers.left,
      right: de.modifiers.right,
      "top-start": de.modifiers.topLeft,
      "top-end": de.modifiers.topRight,
      "bottom-start": de.modifiers.bottomLeft,
      "bottom-end": de.modifiers.bottomRight,
      "left-start": de.modifiers.leftTop,
      "left-end": de.modifiers.leftBottom,
      "right-start": de.modifiers.rightTop,
      "right-end": de.modifiers.rightBottom
    }, ze = D !== Wn.value, qe = M !== Un.value, Ge = (P) => {
      P.key === Xl.Escape && ce && (Y ? o(P, le) : le(P));
    }, Ae = (P, b, j) => {
      if (C && ce) {
        const U = j && j.contains(P.target), Z = b && b.contains(P.target);
        if (U || Z) return;
        Y ? o(P, le) : le(P);
      }
    }, we = (P) => {
      Y ? ce ? o(P, le) : l(P, me) : ce ? le(P) : me(P, true);
    }, $e = () => {
      Ee && xe(false);
    }, K = (P) => {
      Y ? l(P, me) : me(P, false);
    }, ae = (P) => {
      Y ? o(P, le) : le(P);
    }, oe = (P) => {
      Y ? l(P, me) : me(P, false);
    }, _e = (P) => {
      Y ? o(P, le) : le(P);
    }, Ce = (P) => {
      P.stopPropagation(), Y ? o(P, le) : le(P);
    }, B = m.jsxs(Xi, Object.assign({
      ref: ve,
      active: Ee,
      focusTrapOptions: {
        returnFocusOnDeactivate: $ !== false,
        clickOutsideDeactivates: true,
        initialFocus: W || void 0,
        checkCanFocusTrap: (P) => new Promise((b) => {
          const j = setInterval(() => {
            P.every((U) => getComputedStyle(U).visibility !== "hidden") && (b(), clearInterval(j));
          }, 10);
        }),
        tabbableOptions: {
          displayCheck: "none"
        },
        fallbackFocus: () => {
          let P = null;
          return document && document.activeElement && (P = document.activeElement), P;
        }
      },
      preventScrollOnDeactivate: true,
      className: N(de.popover, d && Ws[d], H && de.modifiers.noPadding, h && de.modifiers.widthAuto, r),
      role: "dialog",
      "aria-modal": "true",
      "aria-label": u ? void 0 : c,
      "aria-labelledby": u ? `popover-${g}-header` : void 0,
      "aria-describedby": `popover-${g}-body`,
      onMouseDown: $e,
      style: {
        minWidth: ze ? D : null,
        maxWidth: qe ? M : null
      }
    }, J, {
      children: [
        m.jsx(mo, {}),
        m.jsxs(oo, {
          children: [
            I && V === "click" && m.jsx(fo, {
              onClose: Ce,
              "aria-label": F
            }),
            u && m.jsx(uo, {
              id: `popover-${g}-header`,
              icon: f,
              alertSeverityVariant: d,
              alertSeverityScreenReaderText: y || `${d} alert:`,
              titleHeadingLevel: p,
              children: typeof u == "function" ? u(le) : u
            }),
            m.jsx(lo, {
              id: `popover-${g}-body`,
              children: typeof s == "function" ? s(le) : s
            }),
            k && m.jsx(po, {
              id: `popover-${g}-footer`,
              children: typeof k == "function" ? k(le) : k
            })
          ]
        })
      ]
    }));
    return m.jsx(Us.Provider, {
      value: {
        headerComponent: p
      },
      children: m.jsx(Wl, {
        trigger: t,
        triggerRef: X,
        popper: B,
        popperRef: ve,
        minWidth: D,
        appendTo: E,
        isVisible: ce,
        onMouseEnter: V === "hover" && K,
        onMouseLeave: V === "hover" && ae,
        onPopperMouseEnter: V === "hover" && K,
        onPopperMouseLeave: V === "hover" && ae,
        onFocus: V === "hover" && oe,
        onBlur: V === "hover" && _e,
        positionModifiers: Te,
        distance: x,
        placement: n,
        onTriggerClick: V === "click" && we,
        onDocumentClick: Ae,
        onDocumentKeyDown: Ge,
        enableFlip: i,
        zIndex: L,
        flipBehavior: v,
        animationDuration: S,
        onHidden: T,
        onShown: q,
        onHide: () => xe(false)
      })
    });
  };
  ho.displayName = "Popover";
  const qt = {
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
  }, go = (e) => {
    var { children: t, className: n, component: i = "div", id: r, isLiveRegion: a = false, "aria-label": o } = e, l = G(e, [
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
      className: N(qt.helperText, n)
    }, a && {
      "aria-live": "polite"
    }, i === "ul" && {
      role: "list",
      "aria-label": o
    }, l, {
      children: t
    }));
  };
  go.displayName = "HelperText";
  const Xs = {
    name: "MinusIcon",
    height: 512,
    width: 448,
    svgPath: "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",
    yOffset: 0,
    xOffset: 0
  }, Ks = at(Xs);
  var Cr;
  (function(e) {
    e.default = "default", e.warning = "warning", e.error = "error", e.success = "success";
  })(Cr || (Cr = {}));
  const Gs = {
    indeterminate: m.jsx(Ks, {}),
    warning: m.jsx(qa, {}),
    success: m.jsx(Ha, {}),
    error: m.jsx(Kl, {})
  }, Ci = (e) => {
    var { children: t, className: n, component: i = "div", variant: r = "default", icon: a, id: o, screenReaderText: l = `${r} status` } = e, c = G(e, [
      "children",
      "className",
      "component",
      "variant",
      "icon",
      "id",
      "screenReaderText"
    ]);
    const s = i, u = r !== "default", p = u && Gs[r], f = u && l && l !== "";
    return m.jsxs(s, Object.assign({
      className: N(qt.helperTextItem, u && qt.modifiers[r], n),
      id: o
    }, c, {
      children: [
        (p || a) && m.jsx("span", {
          className: N(qt.helperTextItemIcon),
          children: a || p
        }),
        m.jsxs("span", {
          className: N(qt.helperTextItemText),
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
  Ci.displayName = "HelperTextItem";
  const Xn = {
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
  var Oi;
  (function(e) {
    e.hr = "hr", e.li = "li", e.div = "div";
  })(Oi || (Oi = {}));
  const xo = (e) => {
    var { className: t, component: n = Oi.hr, inset: i, orientation: r } = e, a = G(e, [
      "className",
      "component",
      "inset",
      "orientation"
    ]);
    const o = n;
    return m.jsx(o, Object.assign({
      className: N(Xn.divider, ct(i, Xn), ct(r, Xn), t)
    }, n !== "hr" && {
      role: "separator"
    }, a));
  };
  xo.displayName = "Divider";
  const Se = {
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
  var Wt;
  (function(e) {
    e.default = "default", e.secondary = "secondary", e.noBackground = "no-background";
  })(Wt || (Wt = {}));
  const Qi = w.createContext({
    isExpanded: false,
    isStatic: false,
    onExpand: () => {
    },
    position: "end",
    drawerRef: null,
    drawerContentRef: null,
    isInline: false
  }), vo = (e) => {
    var { className: t = "", children: n, isExpanded: i = false, isInline: r = false, isStatic: a = false, position: o = "end", onExpand: l = () => {
    } } = e, c = G(e, [
      "className",
      "children",
      "isExpanded",
      "isInline",
      "isStatic",
      "position",
      "onExpand"
    ]);
    const s = w.useRef(void 0), u = w.useRef(void 0);
    return m.jsx(Qi.Provider, {
      value: {
        isExpanded: i,
        isStatic: a,
        onExpand: l,
        position: o,
        drawerRef: s,
        drawerContentRef: u,
        isInline: r
      },
      children: m.jsx("div", Object.assign({
        className: N(Se.drawer, i && Se.modifiers.expanded, r && Se.modifiers.inline, a && Se.modifiers.static, (o === "left" || o === "start") && Se.modifiers.panelLeft, o === "bottom" && Se.modifiers.panelBottom, t),
        ref: s
      }, c, {
        children: n
      }))
    });
  };
  vo.displayName = "Drawer";
  const yo = (e) => {
    var { className: t = "", children: n } = e, i = G(e, [
      "className",
      "children"
    ]);
    return m.jsx("div", Object.assign({
      className: N(Se.drawerMain, t)
    }, i, {
      children: n
    }));
  };
  yo.displayName = "DrawerMain";
  var Xt;
  (function(e) {
    e.default = "default", e.primary = "primary", e.secondary = "secondary";
  })(Xt || (Xt = {}));
  const bo = (e) => {
    var { className: t, children: n, panelContent: i, colorVariant: r = Xt.default } = e, a = G(e, [
      "className",
      "children",
      "panelContent",
      "colorVariant"
    ]);
    const { drawerContentRef: o } = w.useContext(Qi);
    return m.jsxs(yo, {
      children: [
        m.jsx("div", Object.assign({
          className: N(Se.drawerContent, r === Xt.primary && Se.modifiers.primary, r === Xt.secondary && Se.modifiers.secondary, t),
          ref: o
        }, a, {
          children: n
        })),
        i
      ]
    });
  };
  bo.displayName = "DrawerContent";
  const Kn = {
    name: "--pf-v6-c-drawer__panel--md--FlexBasis"
  }, Ys = {
    name: "--pf-v6-c-drawer__panel--md--FlexBasis--min"
  }, Qs = {
    name: "--pf-v6-c-drawer__panel--md--FlexBasis--max"
  };
  let ut = null, zt = 0;
  const wo = (e) => {
    var { className: t, id: n, children: i, hasNoBorder: r = false, isResizable: a = false, onResize: o, minSize: l, defaultSize: c, maxSize: s, increment: u = 5, resizeAriaLabel: p = "Resize", widths: f, colorVariant: d = Wt.default, focusTrap: y } = e, k = G(e, [
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
    const E = w.useRef(void 0), C = w.useRef(void 0), [_, T] = w.useState(0), { position: A, isExpanded: q, isStatic: O, onExpand: L, drawerRef: V, drawerContentRef: D, isInline: M } = w.useContext(Qi), F = O ? false : !q, [I, x] = w.useState(!F), [v, S] = w.useState(false), z = w.useRef(null);
    let $ = 0, X, H, h, W, J = true;
    O && (y == null ? void 0 : y.enabled) && console.warn("DrawerPanelContent: The focusTrap.enabled prop cannot be true if the Drawer's isStatic prop is true. This will cause a permanent focus trap."), w.useEffect(() => {
      !O && q && x(q);
    }, [
      O,
      q
    ]);
    const g = () => {
      let K, ae;
      const oe = $n(E.current) === "rtl";
      M && (A === "end" || A === "right") ? oe ? (K = E.current.getBoundingClientRect().left - C.current.getBoundingClientRect().right, ae = V.current.getBoundingClientRect().left - V.current.getBoundingClientRect().right) : (K = E.current.getBoundingClientRect().right - C.current.getBoundingClientRect().left, ae = V.current.getBoundingClientRect().right - V.current.getBoundingClientRect().left) : M && (A === "start" || A === "left") ? oe ? (K = C.current.getBoundingClientRect().left - E.current.getBoundingClientRect().right, ae = V.current.getBoundingClientRect().left - V.current.getBoundingClientRect().right) : (K = C.current.getBoundingClientRect().right - E.current.getBoundingClientRect().left, ae = V.current.getBoundingClientRect().right - V.current.getBoundingClientRect().left) : A === "end" || A === "right" ? oe ? (K = D.current.getBoundingClientRect().left - C.current.getBoundingClientRect().right, ae = D.current.getBoundingClientRect().left - D.current.getBoundingClientRect().right) : (K = D.current.getBoundingClientRect().right - C.current.getBoundingClientRect().left, ae = D.current.getBoundingClientRect().right - D.current.getBoundingClientRect().left) : A === "start" || A === "left" ? oe ? (K = C.current.getBoundingClientRect().left - D.current.getBoundingClientRect().right, ae = D.current.getBoundingClientRect().left - D.current.getBoundingClientRect().right) : (K = C.current.getBoundingClientRect().right - D.current.getBoundingClientRect().left, ae = D.current.getBoundingClientRect().right - D.current.getBoundingClientRect().left) : A === "bottom" && (K = D.current.getBoundingClientRect().bottom - C.current.getBoundingClientRect().top, ae = D.current.getBoundingClientRect().bottom - D.current.getBoundingClientRect().top);
      const _e = K / ae * 100;
      return Math.round((_e + Number.EPSILON) * 100) / 100;
    }, Y = (K) => {
      K.stopPropagation(), document.addEventListener("touchmove", ze, {
        passive: false
      }), document.addEventListener("touchend", Te), ut = true;
    }, ce = (K) => {
      K.stopPropagation(), K.preventDefault(), document.addEventListener("mousemove", le), document.addEventListener("mouseup", qe), V.current.classList.add(N(Se.modifiers.resizing)), ut = true, J = true;
    }, ne = (K) => {
      const ae = A === "bottom" ? K.clientY : K.clientX;
      xe(K, ae);
    }, Ee = (K) => {
      K.preventDefault(), K.stopImmediatePropagation();
      const ae = A === "bottom" ? K.touches[0].clientY : K.touches[0].clientX;
      xe(K, ae);
    }, xe = (K, ae) => {
      const oe = $n(E.current) === "rtl";
      if (K.stopPropagation(), !ut) return;
      J && (X = E.current.getBoundingClientRect(), oe ? (h = X.right, H = X.left) : (H = X.right, h = X.left), W = X.bottom, J = false);
      const _e = ae;
      let Ce = 0;
      A === "end" || A === "right" ? Ce = oe ? _e - H : H - _e : A === "start" || A === "left" ? Ce = oe ? h - _e : _e - h : Ce = W - _e, A === "bottom" && (E.current.style.overflowAnchor = "none"), E.current.style.setProperty(Kn.name, Ce + "px"), $ = Ce, T(g());
    }, ve = (K) => {
      ut && (V.current.classList.remove(N(Se.modifiers.resizing)), ut = false, o && o(K, $, n), J = true, document.removeEventListener("mousemove", le), document.removeEventListener("mouseup", qe));
    }, me = (K) => {
      K.stopPropagation(), ut && (ut = false, o && o(K, $, n), document.removeEventListener("touchmove", ze), document.removeEventListener("touchend", Te));
    }, le = w.useCallback(ne, []), Te = w.useCallback(me, []), ze = w.useCallback(Ee, []), qe = w.useCallback(ve, []), Ge = (K) => {
      const ae = $n(E.current) === "rtl", oe = K.key;
      if (oe !== "Escape" && oe !== "Enter" && oe !== "ArrowUp" && oe !== "ArrowDown" && oe !== "ArrowLeft" && oe !== "ArrowRight") {
        ut && K.preventDefault();
        return;
      }
      K.preventDefault(), (oe === "Escape" || oe === "Enter") && o && o(K, $, n);
      const _e = E.current.getBoundingClientRect();
      zt = A === "bottom" ? _e.height : _e.width;
      let Ce = 0;
      oe === "ArrowRight" ? ae ? Ce = A === "left" || A === "start" ? -u : u : Ce = A === "left" || A === "start" ? u : -u : oe === "ArrowLeft" ? ae ? Ce = A === "left" || A === "start" ? u : -u : Ce = A === "left" || A === "start" ? -u : u : oe === "ArrowUp" ? Ce = u : oe === "ArrowDown" && (Ce = -u), zt = zt + Ce, A === "bottom" && (E.current.style.overflowAnchor = "none"), E.current.style.setProperty(Kn.name, zt + "px"), $ = zt, T(g());
    }, Ae = {};
    c && (Ae[Kn.name] = c), l && (Ae[Ys.name] = l), s && (Ae[Qs.name] = s);
    const we = (y == null ? void 0 : y.enabled) && !O, $e = we ? Xi : "div";
    return m.jsx(Fa, {
      prefix: "pf-drawer-panel-",
      children: (K) => {
        const ae = {
          tabIndex: -1,
          "aria-modal": true,
          role: "dialog",
          active: v,
          "aria-labelledby": (y == null ? void 0 : y["aria-labelledby"]) || n || K,
          focusTrapOptions: {
            fallbackFocus: () => E.current,
            onActivate: () => {
              z.current !== document.activeElement && (z.current = document.activeElement);
            },
            onDeactivate: () => {
              z.current && z.current.focus && z.current.focus();
            },
            clickOutsideDeactivates: true,
            returnFocusOnDeactivate: false,
            initialFocus: (y == null ? void 0 : y.elementToFocusOnExpand) || void 0,
            escapeDeactivates: false
          }
        };
        return m.jsx($e, Object.assign({}, we && ae, {
          id: n || K,
          className: N(Se.drawerPanel, a && Se.modifiers.resizable, r && Se.modifiers.noBorder, ct(f, Se), d === Wt.noBackground && Se.modifiers.noBackground, d === Wt.secondary && Se.modifiers.secondary, t),
          onTransitionEnd: (oe) => {
            oe.target === E.current && (!F && oe.nativeEvent.propertyName === "transform" && L(oe), x(!F), we && oe.nativeEvent.propertyName === "transform" && S((_e) => !_e));
          },
          hidden: F
        }, (c || l || s) && {
          style: Ae
        }, k, {
          ref: E,
          children: I && m.jsxs(w.Fragment, {
            children: [
              a && m.jsxs(w.Fragment, {
                children: [
                  m.jsx("div", {
                    className: N(Se.drawerSplitter, A !== "bottom" && Se.modifiers.vertical),
                    role: "separator",
                    tabIndex: 0,
                    "aria-orientation": A === "bottom" ? "horizontal" : "vertical",
                    "aria-label": p,
                    "aria-valuenow": _,
                    "aria-valuemin": 0,
                    "aria-valuemax": 100,
                    "aria-controls": n || K,
                    onMouseDown: ce,
                    onKeyDown: Ge,
                    onTouchStart: Y,
                    ref: C,
                    children: m.jsx("div", {
                      className: N(Se.drawerSplitterHandle),
                      "aria-hidden": true
                    })
                  }),
                  m.jsx("div", {
                    className: N(Se.drawerPanelMain),
                    children: i
                  })
                ]
              }),
              !a && i
            ]
          })
        }));
      }
    });
  };
  wo.displayName = "DrawerPanelContent";
  const Je = {
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
  }, Js = (e) => e.type === Gl, ko = (e) => {
    var { className: t, icon: n } = e, i = G(e, [
      "className",
      "icon"
    ]);
    const r = Js(m.jsx(n, {}));
    return m.jsx("div", {
      className: N(Je.emptyStateIcon),
      children: m.jsx(n, Object.assign({
        className: t,
        "aria-hidden": !r
      }, i))
    });
  };
  ko.displayName = "EmptyStateIcon";
  var Si;
  (function(e) {
    e.h1 = "h1", e.h2 = "h2", e.h3 = "h3", e.h4 = "h4", e.h5 = "h5", e.h6 = "h6";
  })(Si || (Si = {}));
  const Co = (e) => {
    var { className: t, titleClassName: n, titleText: i, headingLevel: r = Si.h1, icon: a } = e, o = G(e, [
      "className",
      "titleClassName",
      "titleText",
      "headingLevel",
      "icon"
    ]);
    return m.jsxs("div", Object.assign({
      className: N(`${Je.emptyState}__header`, t)
    }, o, {
      children: [
        a && m.jsx(ko, {
          icon: a
        }),
        i && m.jsx("div", {
          className: N(`${Je.emptyState}__title`),
          children: m.jsx(r, {
            className: N(Je.emptyStateTitleText, n),
            children: i
          })
        })
      ]
    }));
  };
  Co.displayName = "EmptyStateHeader";
  var Zt;
  (function(e) {
    e.xs = "xs", e.sm = "sm", e.lg = "lg", e.xl = "xl", e.full = "full";
  })(Zt || (Zt = {}));
  var Or;
  (function(e) {
    e.danger = "danger", e.warning = "warning", e.success = "success", e.info = "info", e.custom = "custom";
  })(Or || (Or = {}));
  const Ei = (e) => {
    var { children: t, className: n, variant: i = Zt.full, isFullHeight: r, status: a, icon: o, titleText: l, titleClassName: c, headerClassName: s, headingLevel: u } = e, p = G(e, [
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
    const f = a && Yl[a], d = o || f;
    return m.jsx("div", Object.assign({
      className: N(Je.emptyState, i !== "full" && Je.modifiers[i], r && Je.modifiers.fullHeight, a && Je.modifiers[a], n)
    }, p, {
      children: m.jsxs("div", {
        className: N(Je.emptyStateContent),
        children: [
          m.jsx(Co, {
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
  Ei.displayName = "EmptyState";
  const Oo = (e) => {
    var { children: t, className: n } = e, i = G(e, [
      "children",
      "className"
    ]);
    return m.jsx("div", Object.assign({
      className: N(Je.emptyStateBody, n)
    }, i, {
      children: t
    }));
  };
  Oo.displayName = "EmptyStateBody";
  const _i = (e) => {
    var { children: t, className: n } = e, i = G(e, [
      "children",
      "className"
    ]);
    return m.jsx("div", Object.assign({
      className: N(Je.emptyStateFooter, n)
    }, i, {
      children: t
    }));
  };
  _i.displayName = "EmptyStateFooter";
  const vn = (e) => {
    var { children: t, className: n } = e, i = G(e, [
      "children",
      "className"
    ]);
    return m.jsx("div", Object.assign({
      className: N(Je.emptyStateActions, n)
    }, i, {
      children: t
    }));
  };
  vn.displayName = "EmptyStateActions";
  const Zs = {
    modifiers: {
      loading: "pf-m-loading"
    }
  };
  var Gn = {
    exports: {}
  }, Yn, Sr;
  function ec() {
    if (Sr) return Yn;
    Sr = 1;
    var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    return Yn = e, Yn;
  }
  var Qn, Er;
  function tc() {
    if (Er) return Qn;
    Er = 1;
    var e = ec();
    function t() {
    }
    function n() {
    }
    return n.resetWarningCache = t, Qn = function() {
      function i(o, l, c, s, u, p) {
        if (p !== e) {
          var f = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw f.name = "Invariant Violation", f;
        }
      }
      i.isRequired = i;
      function r() {
        return i;
      }
      var a = {
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
      return a.PropTypes = a, a;
    }, Qn;
  }
  var _r;
  function nc() {
    return _r || (_r = 1, Gn.exports = tc()()), Gn.exports;
  }
  var ic = nc();
  const ge = Mn(ic), rc = /* @__PURE__ */ new Map([
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
  function Pt(e, t, n) {
    const i = ac(e), { webkitRelativePath: r } = e, a = typeof t == "string" ? t : typeof r == "string" && r.length > 0 ? r : `./${e.name}`;
    return typeof i.path != "string" && jr(i, "path", a), jr(i, "relativePath", a), i;
  }
  function ac(e) {
    const { name: t } = e;
    if (t && t.lastIndexOf(".") !== -1 && !e.type) {
      const i = t.split(".").pop().toLowerCase(), r = rc.get(i);
      r && Object.defineProperty(e, "type", {
        value: r,
        writable: false,
        configurable: false,
        enumerable: true
      });
    }
    return e;
  }
  function jr(e, t, n) {
    Object.defineProperty(e, t, {
      value: n,
      writable: false,
      configurable: false,
      enumerable: true
    });
  }
  const oc = [
    ".DS_Store",
    "Thumbs.db"
  ];
  function lc(e) {
    return wt(this, void 0, void 0, function* () {
      return _n(e) && sc(e.dataTransfer) ? dc(e.dataTransfer, e.type) : cc(e) ? uc(e) : Array.isArray(e) && e.every((t) => "getFile" in t && typeof t.getFile == "function") ? pc(e) : [];
    });
  }
  function sc(e) {
    return _n(e);
  }
  function cc(e) {
    return _n(e) && _n(e.target);
  }
  function _n(e) {
    return typeof e == "object" && e !== null;
  }
  function uc(e) {
    return ji(e.target.files).map((t) => Pt(t));
  }
  function pc(e) {
    return wt(this, void 0, void 0, function* () {
      return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => Pt(n));
    });
  }
  function dc(e, t) {
    return wt(this, void 0, void 0, function* () {
      if (e.items) {
        const n = ji(e.items).filter((r) => r.kind === "file");
        if (t !== "drop") return n;
        const i = yield Promise.all(n.map(fc));
        return Tr(So(i));
      }
      return Tr(ji(e.files).map((n) => Pt(n)));
    });
  }
  function Tr(e) {
    return e.filter((t) => oc.indexOf(t.name) === -1);
  }
  function ji(e) {
    if (e === null) return [];
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const i = e[n];
      t.push(i);
    }
    return t;
  }
  function fc(e) {
    if (typeof e.webkitGetAsEntry != "function") return Ir(e);
    const t = e.webkitGetAsEntry();
    return t && t.isDirectory ? Eo(t) : Ir(e, t);
  }
  function So(e) {
    return e.reduce((t, n) => [
      ...t,
      ...Array.isArray(n) ? So(n) : [
        n
      ]
    ], []);
  }
  function Ir(e, t) {
    return wt(this, void 0, void 0, function* () {
      var n;
      if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
        const a = yield e.getAsFileSystemHandle();
        if (a === null) throw new Error(`${e} is not a File`);
        if (a !== void 0) {
          const o = yield a.getFile();
          return o.handle = a, Pt(o);
        }
      }
      const i = e.getAsFile();
      if (!i) throw new Error(`${e} is not a File`);
      return Pt(i, (n = t == null ? void 0 : t.fullPath) !== null && n !== void 0 ? n : void 0);
    });
  }
  function mc(e) {
    return wt(this, void 0, void 0, function* () {
      return e.isDirectory ? Eo(e) : hc(e);
    });
  }
  function Eo(e) {
    const t = e.createReader();
    return new Promise((n, i) => {
      const r = [];
      function a() {
        t.readEntries((o) => wt(this, void 0, void 0, function* () {
          if (o.length) {
            const l = Promise.all(o.map(mc));
            r.push(l), a();
          } else try {
            const l = yield Promise.all(r);
            n(l);
          } catch (l) {
            i(l);
          }
        }), (o) => {
          i(o);
        });
      }
      a();
    });
  }
  function hc(e) {
    return wt(this, void 0, void 0, function* () {
      return new Promise((t, n) => {
        e.file((i) => {
          const r = Pt(i, e.fullPath);
          t(r);
        }, (i) => {
          n(i);
        });
      });
    });
  }
  var pn = {}, Pr;
  function gc() {
    return Pr || (Pr = 1, pn.__esModule = true, pn.default = function(e, t) {
      if (e && t) {
        var n = Array.isArray(t) ? t : t.split(",");
        if (n.length === 0) return true;
        var i = e.name || "", r = (e.type || "").toLowerCase(), a = r.replace(/\/.*$/, "");
        return n.some(function(o) {
          var l = o.trim().toLowerCase();
          return l.charAt(0) === "." ? i.toLowerCase().endsWith(l) : l.endsWith("/*") ? a === l.replace(/\/.*$/, "") : r === l;
        });
      }
      return true;
    }), pn;
  }
  var xc = gc();
  const Jn = Mn(xc), vc = {
    name: "TimesCircleIcon",
    height: 512,
    width: 512,
    svgPath: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z",
    yOffset: 0,
    xOffset: 0
  }, yc = at(vc), vt = {
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
  }, bc = {
    isManagedSidebar: false,
    isSidebarOpen: false,
    onSidebarToggle: () => null,
    width: null,
    height: null,
    getBreakpoint: Va,
    getVerticalBreakpoint: $a
  }, Nt = w.createContext(bc), wc = Nt.Provider;
  Nt.Consumer;
  const _o = (e) => {
    var { children: t, className: n, display: i = {
      md: "inline"
    }, inset: r } = e, a = G(e, [
      "children",
      "className",
      "display",
      "inset"
    ]);
    const { width: o, getBreakpoint: l } = w.useContext(Nt);
    return m.jsx("header", Object.assign({
      className: N(vt.masthead, ct(i, vt, "display-", l(o)), ct(r, vt, "", l(o)), n)
    }, a, {
      children: t
    }));
  };
  _o.displayName = "Masthead";
  const jo = (e) => {
    var { children: t, className: n } = e, i = G(e, [
      "children",
      "className"
    ]);
    return m.jsx("div", Object.assign({
      className: N(vt.mastheadBrand, n)
    }, i, {
      children: t
    }));
  };
  jo.displayName = "MastheadBrand";
  const To = (e) => {
    var { children: t, className: n } = e, i = G(e, [
      "children",
      "className"
    ]);
    return m.jsx("div", Object.assign({
      className: N(vt.mastheadContent, n)
    }, i, {
      children: t
    }));
  };
  To.displayName = "MastheadContent";
  const Io = (e) => {
    var { children: t, className: n, component: i } = e, r = G(e, [
      "children",
      "className",
      "component"
    ]);
    let a = i;
    return i || ((r == null ? void 0 : r.href) !== void 0 ? a = "a" : a = "span"), m.jsx(a, Object.assign({
      className: N(vt.mastheadLogo, n)
    }, a === "a" && {
      tabIndex: 0
    }, r, {
      children: t
    }));
  };
  Io.displayName = "MastheadLogo";
  const Po = (e) => {
    var { children: t, className: n } = e, i = G(e, [
      "children",
      "className"
    ]);
    return m.jsx("div", Object.assign({
      className: N(vt.mastheadMain, n)
    }, i, {
      children: t
    }));
  };
  Po.displayName = "MastheadMain";
  const Me = {
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
  }, No = (e) => {
    var { progressBarAriaProps: t, className: n = "", children: i = null, value: r } = e, a = G(e, [
      "progressBarAriaProps",
      "className",
      "children",
      "value"
    ]);
    return m.jsx("div", Object.assign({}, a, {
      className: N(Me.progressBar, n)
    }, t, {
      children: m.jsx("div", {
        className: N(Me.progressIndicator),
        style: {
          width: `${r}%`
        },
        children: m.jsx("span", {
          className: N(Me.progressMeasure),
          children: i
        })
      })
    }));
  };
  No.displayName = "ProgressBar";
  const Ro = (e) => {
    var { children: t } = e, n = G(e, [
      "children"
    ]);
    return m.jsx("div", Object.assign({
      className: Me.progressHelperText
    }, n, {
      children: t
    }));
  };
  Ro.displayName = "ProgressHelperText";
  var dt;
  (function(e) {
    e.outside = "outside", e.inside = "inside", e.top = "top", e.none = "none";
  })(dt || (dt = {}));
  var Nr;
  (function(e) {
    e.danger = "danger", e.success = "success", e.warning = "warning";
  })(Nr || (Nr = {}));
  const Rr = {
    danger: yc,
    success: Ha,
    warning: qa
  }, Ao = ({ progressBarAriaProps: e, value: t, title: n = "", parentId: i, label: r = null, variant: a = null, measureLocation: o = dt.top, isTitleTruncated: l = false, tooltipPosition: c, helperText: s }) => {
    const u = Rr.hasOwnProperty(a) && Rr[a], [p, f] = w.useState(""), d = (k) => {
      k.target.offsetWidth < k.target.scrollWidth ? f(n || k.target.innerHTML) : f("");
    }, y = m.jsx("div", {
      className: N(Me.progressDescription, l && typeof n == "string" && Me.modifiers.truncate),
      id: `${i}-description`,
      "aria-hidden": "true",
      onMouseEnter: l && typeof n == "string" ? d : null,
      children: n
    });
    return m.jsxs(w.Fragment, {
      children: [
        n && (p ? m.jsx(Ua, {
          position: c,
          content: p,
          isVisible: true,
          children: y
        }) : y),
        (o !== dt.none || u) && m.jsxs("div", {
          className: N(Me.progressStatus),
          "aria-hidden": "true",
          children: [
            (o === dt.top || o === dt.outside) && m.jsx("span", {
              className: N(Me.progressMeasure),
              children: r || `${t}%`
            }),
            u && m.jsx("span", {
              className: N(Me.progressStatusIcon),
              children: m.jsx(u, {})
            })
          ]
        }),
        m.jsx(No, {
          role: "progressbar",
          progressBarAriaProps: e,
          value: t,
          children: o === dt.inside && `${t}%`
        }),
        s && m.jsx(Ro, {
          children: s
        })
      ]
    });
  };
  Ao.displayName = "ProgressContainer";
  var Ti;
  (function(e) {
    e.sm = "sm", e.md = "md", e.lg = "lg";
  })(Ti || (Ti = {}));
  class Kt extends w.Component {
    constructor() {
      super(...arguments), this.id = this.props.id || Ba();
    }
    render() {
      const t = this.props, { id: n, size: i, className: r, value: a, title: o, label: l, variant: c, measureLocation: s, min: u, max: p, valueText: f, isTitleTruncated: d, tooltipPosition: y, "aria-label": k, "aria-labelledby": E, helperText: C } = t, _ = G(t, [
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
      ]), T = {
        "aria-valuemin": u,
        "aria-valuenow": a,
        "aria-valuemax": p
      };
      (o || E) && (T["aria-labelledby"] = o ? `${this.id}-description` : E), k && (T["aria-label"] = k), f && (T["aria-valuetext"] = f), !o && !E && !k && console.warn("One of aria-label or aria-labelledby properties should be passed when using the progress component without a title.");
      const A = Math.min(100, Math.max(0, Math.floor((a - u) / (p - u) * 100))) || 0;
      return m.jsx("div", Object.assign({}, _, {
        className: N(Me.progress, Me.modifiers[c], [
          "inside",
          "outside"
        ].includes(s) && Me.modifiers[s], s === "inside" ? Me.modifiers[Ti.lg] : Me.modifiers[i], !o && Me.modifiers.singleline, r),
        id: this.id,
        children: m.jsx(Ao, {
          parentId: this.id,
          value: A,
          title: o,
          label: l,
          variant: c,
          measureLocation: s,
          progressBarAriaProps: T,
          isTitleTruncated: d,
          tooltipPosition: y,
          helperText: C
        })
      }));
    }
  }
  Kt.displayName = "Progress";
  Kt.defaultProps = {
    className: "",
    measureLocation: dt.top,
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
  const ie = {
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
  }, en = (e) => {
    var { className: t, children: n } = e, i = G(e, [
      "className",
      "children"
    ]);
    return m.jsx("div", Object.assign({}, i, {
      className: N(ie.pageMainBody, t),
      children: n
    }));
  };
  en.displayName = "PageBody";
  const Do = (e) => {
    var { className: t = "", children: n, isWidthLimited: i, stickyOnBreakpoint: r, hasShadowTop: a = false, hasShadowBottom: o = false, hasOverflowScroll: l = false, "aria-label": c, hasBodyWrapper: s = true } = e, u = G(e, [
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
    const { height: p, getVerticalBreakpoint: f } = w.useContext(Nt);
    return w.useEffect(() => {
      l && !c && console.warn("PageBreadcrumb: An accessible aria-label is required when hasOverflowScroll is set to true.");
    }, [
      l,
      c
    ]), m.jsx("section", Object.assign({
      className: N(ie.pageMainBreadcrumb, ct(r, ie, "sticky-", f(p), true), i && ie.modifiers.limitWidth, a && ie.modifiers.shadowTop, o && ie.modifiers.shadowBottom, l && ie.modifiers.overflowScroll, t)
    }, l && {
      tabIndex: 0
    }, {
      "aria-label": c
    }, u, {
      children: s ? m.jsx(en, {
        children: n
      }) : n
    }));
  };
  Do.displayName = "PageBreadcrumb";
  const Mo = (e) => {
    var { className: t = "", children: n, stickyOnBreakpoint: i, isFilled: r, hasShadowTop: a = false, hasShadowBottom: o = false, hasOverflowScroll: l = false, "aria-label": c } = e, s = G(e, [
      "className",
      "children",
      "stickyOnBreakpoint",
      "isFilled",
      "hasShadowTop",
      "hasShadowBottom",
      "hasOverflowScroll",
      "aria-label"
    ]);
    const { height: u, getVerticalBreakpoint: p } = w.useContext(Nt);
    return w.useEffect(() => {
      l && !c && console.warn("PageGroup: An accessible aria-label is required when hasOverflowScroll is set to true.");
    }, [
      l,
      c
    ]), m.jsx("div", Object.assign({}, s, {
      className: N(ie.pageMainGroup, ct(i, ie, "sticky-", p(u), true), r === false && ie.modifiers.noFill, r === true && ie.modifiers.fill, a && ie.modifiers.shadowTop, o && ie.modifiers.shadowBottom, l && ie.modifiers.overflowScroll, t)
    }, l && {
      tabIndex: 0,
      role: "region",
      "aria-label": c
    }, {
      children: n
    }));
  };
  Mo.displayName = "PageGroup";
  var Ar;
  (function(e) {
    e.vertical = "vertical", e.horizontal = "horizontal";
  })(Ar || (Ar = {}));
  class Ji extends w.Component {
    constructor(t) {
      super(t), this.mainRef = w.createRef(), this.pageRef = w.createRef(), this.observer = () => {
      }, this.getWindowWidth = () => Ma ? this.pageRef.current ? this.pageRef.current.clientWidth : window.innerWidth : 1200, this.isMobile = () => this.getWindowWidth() < Number.parseInt(Ql.value, 10) * 16, this.resize = (a) => {
        var o;
        const { onPageResize: l } = this.props, c = this.isMobile();
        if (l && l(a, {
          mobileView: c,
          windowSize: this.getWindowWidth()
        }), c !== this.state.mobileView && this.setState({
          mobileView: c
        }), !((o = this.pageRef) === null || o === void 0) && o.current) {
          const s = this.pageRef.current.clientWidth, u = this.pageRef.current.clientHeight;
          this.state.width !== s && this.setState({
            width: s
          }), this.state.height !== u && this.setState({
            height: u
          });
        }
      }, this.handleResize = Jl(this.resize, 250), this.handleMainClick = () => {
        this.isMobile() && this.state.mobileIsSidebarOpen && this.mainRef.current && this.setState({
          mobileIsSidebarOpen: false
        });
      }, this.onSidebarToggleMobile = () => {
        this.setState((a) => ({
          mobileIsSidebarOpen: !a.mobileIsSidebarOpen
        }));
      }, this.onSidebarToggleDesktop = () => {
        this.setState((a) => ({
          desktopIsSidebarOpen: !a.desktopIsSidebarOpen
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
        this.observer = Za(this.pageRef.current, this.handleResize);
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
      const t = this.props, { banner: n, breadcrumb: i, isBreadcrumbWidthLimited: r, className: a, children: o, masthead: l, sidebar: c, notificationDrawer: s, isNotificationDrawerExpanded: u, onNotificationDrawerExpand: p, drawerDefaultSize: f, drawerMinSize: d, drawerMaxSize: y, isHorizontalSubnavWidthLimited: k, skipToContent: E, role: C, mainContainerId: _, isManagedSidebar: T, defaultManagedSidebarIsOpen: A, onPageResize: q, getBreakpoint: O, getVerticalBreakpoint: L, mainAriaLabel: V, mainTabIndex: D, mainComponent: M, horizontalSubnav: F, isHorizontalSubnavGrouped: I, isBreadcrumbGrouped: x, additionalGroupedContent: v, groupProps: S, breadcrumbProps: z, isContentFilled: $ } = t, X = G(t, [
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
      ]), { mobileView: H, mobileIsSidebarOpen: h, desktopIsSidebarOpen: W, width: J, height: g } = this.state, Y = {
        isManagedSidebar: T,
        onSidebarToggle: H ? this.onSidebarToggleMobile : this.onSidebarToggleDesktop,
        isSidebarOpen: H ? h : W,
        width: J,
        height: g,
        getBreakpoint: O,
        getVerticalBreakpoint: L
      };
      let ce = null;
      F && (ce = m.jsx("div", {
        className: N(ie.pageMainSubnav, k && ie.modifiers.limitWidth),
        children: m.jsx(en, {
          children: F
        })
      }));
      const ne = i ? m.jsx(Do, {
        stickyOnBreakpoint: z == null ? void 0 : z.stickyOnBreakpoint,
        isWidthLimited: r,
        children: m.jsx(en, {
          children: i
        })
      }) : null, xe = I || x || v ? m.jsxs(Mo, Object.assign({}, S, {
        children: [
          I && ce,
          n,
          x && ne,
          v
        ]
      })) : null, ve = M, me = m.jsx("div", {
        className: N(ie.pageMainContainer, $ && ie.modifiers.fill),
        children: m.jsxs(ve, {
          ref: this.mainRef,
          role: C,
          id: _,
          className: N(ie.pageMain),
          tabIndex: D,
          "aria-label": V,
          children: [
            xe,
            !I && ce,
            n,
            !x && ne,
            o
          ]
        })
      }), le = m.jsx(wo, {
        defaultSize: f,
        minSize: d,
        maxSize: y,
        children: s
      });
      return m.jsx(wc, {
        value: Y,
        children: m.jsxs("div", Object.assign({
          ref: this.pageRef
        }, X, {
          className: N(ie.page, J !== null && g !== null && "pf-m-resize-observer", J !== null && `pf-m-breakpoint-${O(J)}`, g !== null && `pf-m-height-breakpoint-${L(g)}`, c === null && ie.modifiers.noSidebar, a),
          children: [
            E,
            l,
            c,
            s && m.jsx("div", {
              className: N(ie.pageDrawer),
              children: m.jsx(vo, {
                isExpanded: u,
                onExpand: (Te) => p(Te),
                children: m.jsx(bo, {
                  panelContent: le,
                  children: me
                })
              })
            }),
            !s && me
          ]
        }))
      });
    }
  }
  Ji.displayName = "Page";
  Ji.defaultProps = {
    isManagedSidebar: false,
    isBreadcrumbWidthLimited: false,
    defaultManagedSidebarIsOpen: true,
    mainTabIndex: -1,
    isNotificationDrawerExpanded: false,
    onNotificationDrawerExpand: () => null,
    mainComponent: "main",
    getBreakpoint: Va,
    getVerticalBreakpoint: $a
  };
  var jn;
  (function(e) {
    e.default = "default", e.secondary = "secondary";
  })(jn || (jn = {}));
  var ot;
  (function(e) {
    e.default = "default", e.subNav = "subnav", e.breadcrumb = "breadcrumb", e.tabs = "tabs", e.wizard = "wizard";
  })(ot || (ot = {}));
  const kc = {
    [ot.default]: ie.pageMainSection,
    [ot.subNav]: ie.pageMainSubnav,
    [ot.breadcrumb]: ie.pageMainBreadcrumb,
    [ot.tabs]: ie.pageMainTabs,
    [ot.wizard]: ie.pageMainWizard
  }, Cc = {
    [jn.default]: "",
    [jn.secondary]: ie.modifiers.secondary
  }, zo = (e) => {
    var { className: t = "", children: n, variant: i = "default", type: r = "default", padding: a, isFilled: o, isWidthLimited: l = false, isCenterAligned: c = false, stickyOnBreakpoint: s, hasShadowTop: u = false, hasShadowBottom: p = false, hasOverflowScroll: f = false, "aria-label": d, component: y = "section", hasBodyWrapper: k = true } = e, E = G(e, [
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
    const { height: C, getVerticalBreakpoint: _ } = w.useContext(Nt);
    w.useEffect(() => {
      f && !d && console.warn("PageSection: An accessible aria-label is required when hasOverflowScroll is set to true.");
    }, [
      f,
      d
    ]);
    const T = y;
    return m.jsx(T, Object.assign({}, E, {
      className: N(kc[r], ct(a, ie), ct(s, ie, "sticky-", _(C), true), r === ot.default && Cc[i], o === false && ie.modifiers.noFill, o === true && ie.modifiers.fill, l && ie.modifiers.limitWidth, l && c && r !== ot.subNav && ie.modifiers.alignCenter, u && ie.modifiers.shadowTop, p && ie.modifiers.shadowBottom, f && ie.modifiers.overflowScroll, t)
    }, f && {
      tabIndex: 0
    }, {
      "aria-label": d,
      children: k ? m.jsx(en, {
        children: n
      }) : n
    }));
  };
  zo.displayName = "PageSection";
  const et = {
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
  var Dr;
  (function(e) {
    e.xs = "xs", e.sm = "sm", e.md = "md", e.lg = "lg", e.xl = "xl", e["2xl"] = "2xl", e["3xl"] = "3xl", e["4xl"] = "4xl";
  })(Dr || (Dr = {}));
  var Tn;
  (function(e) {
    e.sm = "Sm", e.md = "Md", e.lg = "Lg", e.xl = "Xl", e.xl2 = "_2xl";
  })(Tn || (Tn = {}));
  const Fo = {
    name: "--pf-v6-l-grid--item--Order"
  }, Lo = (e) => {
    var { children: t = null, className: n = "", component: i = "div", hasGutter: r, span: a = null, order: o, style: l } = e, c = G(e, [
      "children",
      "className",
      "component",
      "hasGutter",
      "span",
      "order",
      "style"
    ]);
    const s = [
      et.grid,
      a && et.modifiers[`all_${a}Col`]
    ], u = i;
    return Object.entries(Tn).forEach(([p, f]) => {
      const d = p, y = c[d];
      y && s.push(et.modifiers[`all_${y}ColOn${f}`]), delete c[d];
    }), m.jsx(u, Object.assign({
      className: N(...s, r && et.modifiers.gutter, n),
      style: l || o ? Object.assign(Object.assign({}, l), Wa(o, Fo.name)) : void 0
    }, c, {
      children: t
    }));
  };
  Lo.displayName = "Grid";
  const Ii = (e) => {
    var { children: t = null, className: n = "", component: i = "div", span: r = null, rowSpan: a = null, offset: o = null, order: l, style: c } = e, s = G(e, [
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
      et.gridItem,
      r && et.modifiers[`${r}Col`],
      a && et.modifiers[`${a}Row`],
      o && et.modifiers[`offset_${o}Col`]
    ], p = i;
    return Object.entries(Tn).forEach(([f, d]) => {
      const y = f, k = `${y}RowSpan`, E = `${y}Offset`, C = s[y], _ = s[k], T = s[E];
      C && u.push(et.modifiers[`${C}ColOn${d}`]), _ && u.push(et.modifiers[`${_}RowOn${d}`]), T && u.push(et.modifiers[`offset_${T}ColOn${d}`]), delete s[y], delete s[k], delete s[E];
    }), m.jsx(p, Object.assign({
      className: N(...u, n),
      style: c || l ? Object.assign(Object.assign({}, c), Wa(l, Fo.name)) : void 0
    }, s, {
      children: t
    }));
  };
  Ii.displayName = "GridItem";
  const Mr = {
    modifiers: {
      gutter: "pf-m-gutter"
    },
    stack: "pf-v6-l-stack"
  }, In = (e) => {
    var { hasGutter: t = false, className: n = "", children: i = null, component: r = "div" } = e, a = G(e, [
      "hasGutter",
      "className",
      "children",
      "component"
    ]);
    const o = r;
    return m.jsx(o, Object.assign({}, a, {
      className: N(Mr.stack, t && Mr.modifiers.gutter, n),
      children: i
    }));
  };
  In.displayName = "Stack";
  function st() {
    return st = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) ({}).hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
      return e;
    }, st.apply(null, arguments);
  }
  function Oc(e) {
    var t = 0, n = e.children, i = n && n.length;
    if (!i) t = 1;
    else for (; --i >= 0; ) t += n[i].value;
    e.value = t;
  }
  function Sc() {
    return this.eachAfter(Oc);
  }
  function Ec(e, t) {
    let n = -1;
    for (const i of this) e.call(t, i, ++n, this);
    return this;
  }
  function _c(e, t) {
    for (var n = this, i = [
      n
    ], r, a, o = -1; n = i.pop(); ) if (e.call(t, n, ++o, this), r = n.children) for (a = r.length - 1; a >= 0; --a) i.push(r[a]);
    return this;
  }
  function jc(e, t) {
    for (var n = this, i = [
      n
    ], r = [], a, o, l, c = -1; n = i.pop(); ) if (r.push(n), a = n.children) for (o = 0, l = a.length; o < l; ++o) i.push(a[o]);
    for (; n = r.pop(); ) e.call(t, n, ++c, this);
    return this;
  }
  function Tc(e, t) {
    let n = -1;
    for (const i of this) if (e.call(t, i, ++n, this)) return i;
  }
  function Ic(e) {
    return this.eachAfter(function(t) {
      for (var n = +e(t.data) || 0, i = t.children, r = i && i.length; --r >= 0; ) n += i[r].value;
      t.value = n;
    });
  }
  function Pc(e) {
    return this.eachBefore(function(t) {
      t.children && t.children.sort(e);
    });
  }
  function Nc(e) {
    for (var t = this, n = Rc(t, e), i = [
      t
    ]; t !== n; ) t = t.parent, i.push(t);
    for (var r = i.length; e !== n; ) i.splice(r, 0, e), e = e.parent;
    return i;
  }
  function Rc(e, t) {
    if (e === t) return e;
    var n = e.ancestors(), i = t.ancestors(), r = null;
    for (e = n.pop(), t = i.pop(); e === t; ) r = e, e = n.pop(), t = i.pop();
    return r;
  }
  function Ac() {
    for (var e = this, t = [
      e
    ]; e = e.parent; ) t.push(e);
    return t;
  }
  function Dc() {
    return Array.from(this);
  }
  function Mc() {
    var e = [];
    return this.eachBefore(function(t) {
      t.children || e.push(t);
    }), e;
  }
  function zc() {
    var e = this, t = [];
    return e.each(function(n) {
      n !== e && t.push({
        source: n.parent,
        target: n
      });
    }), t;
  }
  function* Fc() {
    var e = this, t, n = [
      e
    ], i, r, a;
    do
      for (t = n.reverse(), n = []; e = t.pop(); ) if (yield e, i = e.children) for (r = 0, a = i.length; r < a; ++r) n.push(i[r]);
    while (n.length);
  }
  function Zi(e, t) {
    e instanceof Map ? (e = [
      void 0,
      e
    ], t === void 0 && (t = Hc)) : t === void 0 && (t = Bc);
    for (var n = new tn(e), i, r = [
      n
    ], a, o, l, c; i = r.pop(); ) if ((o = t(i.data)) && (c = (o = Array.from(o)).length)) for (i.children = o, l = c - 1; l >= 0; --l) r.push(a = o[l] = new tn(o[l])), a.parent = i, a.depth = i.depth + 1;
    return n.eachBefore($c);
  }
  function Lc() {
    return Zi(this).eachBefore(qc);
  }
  function Bc(e) {
    return e.children;
  }
  function Hc(e) {
    return Array.isArray(e) ? e[1] : null;
  }
  function qc(e) {
    e.data.value !== void 0 && (e.value = e.data.value), e.data = e.data.data;
  }
  function $c(e) {
    var t = 0;
    do
      e.height = t;
    while ((e = e.parent) && e.height < ++t);
  }
  function tn(e) {
    this.data = e, this.depth = this.height = 0, this.parent = null;
  }
  tn.prototype = Zi.prototype = {
    constructor: tn,
    count: Sc,
    each: Ec,
    eachAfter: jc,
    eachBefore: _c,
    find: Tc,
    sum: Ic,
    sort: Pc,
    path: Nc,
    ancestors: Ac,
    descendants: Dc,
    leaves: Mc,
    links: zc,
    copy: Lc,
    [Symbol.iterator]: Fc
  };
  function Vc(e, t) {
    return e.parent === t.parent ? 1 : 2;
  }
  function Zn(e) {
    var t = e.children;
    return t ? t[0] : e.t;
  }
  function ei(e) {
    var t = e.children;
    return t ? t[t.length - 1] : e.t;
  }
  function Uc(e, t, n) {
    var i = n / (t.i - e.i);
    t.c -= i, t.s += n, e.c += i, t.z += n, t.m += n;
  }
  function Wc(e) {
    for (var t = 0, n = 0, i = e.children, r = i.length, a; --r >= 0; ) a = i[r], a.z += t, a.m += t, t += a.s + (n += a.c);
  }
  function Xc(e, t, n) {
    return e.a.parent === t.parent ? e.a : n;
  }
  function yn(e, t) {
    this._ = e, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = t;
  }
  yn.prototype = Object.create(tn.prototype);
  function Kc(e) {
    for (var t = new yn(e, 0), n, i = [
      t
    ], r, a, o, l; n = i.pop(); ) if (a = n._.children) for (n.children = new Array(l = a.length), o = l - 1; o >= 0; --o) i.push(r = n.children[o] = new yn(a[o], o)), r.parent = n;
    return (t.parent = new yn(null, 0)).children = [
      t
    ], t;
  }
  function Gc() {
    var e = Vc, t = 1, n = 1, i = null;
    function r(s) {
      var u = Kc(s);
      if (u.eachAfter(a), u.parent.m = -u.z, u.eachBefore(o), i) s.eachBefore(c);
      else {
        var p = s, f = s, d = s;
        s.eachBefore(function(_) {
          _.x < p.x && (p = _), _.x > f.x && (f = _), _.depth > d.depth && (d = _);
        });
        var y = p === f ? 1 : e(p, f) / 2, k = y - p.x, E = t / (f.x + y + k), C = n / (d.depth || 1);
        s.eachBefore(function(_) {
          _.x = (_.x + k) * E, _.y = _.depth * C;
        });
      }
      return s;
    }
    function a(s) {
      var u = s.children, p = s.parent.children, f = s.i ? p[s.i - 1] : null;
      if (u) {
        Wc(s);
        var d = (u[0].z + u[u.length - 1].z) / 2;
        f ? (s.z = f.z + e(s._, f._), s.m = s.z - d) : s.z = d;
      } else f && (s.z = f.z + e(s._, f._));
      s.parent.A = l(s, f, s.parent.A || p[0]);
    }
    function o(s) {
      s._.x = s.z + s.parent.m, s.m += s.parent.m;
    }
    function l(s, u, p) {
      if (u) {
        for (var f = s, d = s, y = u, k = f.parent.children[0], E = f.m, C = d.m, _ = y.m, T = k.m, A; y = ei(y), f = Zn(f), y && f; ) k = Zn(k), d = ei(d), d.a = s, A = y.z + _ - f.z - E + e(y._, f._), A > 0 && (Uc(Xc(y, s, p), s, A), E += A, C += A), _ += y.m, E += f.m, T += k.m, C += d.m;
        y && !ei(d) && (d.t = y, d.m += _ - C), f && !Zn(k) && (k.t = f, k.m += E - T, p = s);
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
  function Yc(e) {
    const t = e.margins || {
      bottom: 10,
      left: e.direction !== "rtl" ? 20 : 150,
      right: e.direction !== "rtl" ? 150 : 20,
      top: 10
    }, n = e.width - t.left - t.right, i = e.height - t.top - t.bottom, r = Zi(e.data, e.getChildren), a = Gc().size([
      i,
      n
    ])(r), o = a.links().map((c) => ({
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
    })), l = a.descendants().map((c) => ({
      ...c,
      x: e.direction !== "rtl" ? c.y : n - c.y,
      y: c.x
    }));
    return {
      links: o,
      margins: t,
      nodes: l
    };
  }
  const Qc = /on[A-Z]/;
  function Jc(e, t) {
    return (n) => e(n, ...t);
  }
  function bn(e, ...t) {
    const i = Object.keys(e).filter((r) => Qc.test(r) && typeof e[r] == "function").reduce((r, a) => (r[a] = Jc(e[a], t), r), {});
    return {
      ...e,
      ...i
    };
  }
  function Zc(e, t, n, i) {
    return `M${e},${t}C${(e + n) / 2},${t} ${(e + n) / 2},${i} ${n},${i}`;
  }
  function eu(e) {
    const t = bn(e.pathProps, e.source.data[e.keyProp], e.target.data[e.keyProp]), i = (e.pathFunc || Zc)(e.x1, e.y1, e.x2, e.y2);
    return Ne.createElement("path", st({}, t, {
      d: i
    }));
  }
  function tu(e) {
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
    const r = bn(i, e[e.keyProp]), a = bn(e.gProps, e[e.keyProp]), o = bn(e.textProps, e[e.keyProp]), l = typeof e[e.labelProp] == "string" ? Ne.createElement("text", st({
      dx: n,
      dy: 5
    }, o), e[e.labelProp]) : Ne.createElement("g", st({
      transform: `translate(${n}, 5)`
    }, o), e[e.labelProp]);
    return Ne.createElement("g", st({}, a, {
      transform: t(),
      direction: e.direction === "rtl" ? "rtl" : null
    }), Ne.createElement(e.shape, r), l);
  }
  function nu(e) {
    return Ne.createElement("svg", st({}, e.svgProps, {
      height: e.height,
      width: e.width
    }), e.children, Ne.createElement("g", {
      transform: `translate(${e.margins.left}, ${e.margins.top})`
    }, e.links.map((t) => Ne.createElement(eu, {
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
    })), e.nodes.map((t) => Ne.createElement(tu, st({
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
  function iu(e) {
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
    return Ne.createElement(nu, st({
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
    }, Yc(t)), t.children);
  }
  const nn = 18;
  function Ot(e, t, n = []) {
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
  function $t(e, t = "root") {
    return zn(e).with({
      user: fe.array(fe.string)
    }, () => [
      Ot(t, "U")
    ]).with({
      assistant: fe.array(fe.string)
    }, () => [
      Ot(t, "A")
    ]).with({
      system: fe.array(fe.string)
    }, () => [
      Ot(t, "S")
    ]).with({
      g: fe.array()
    }, ({ g: n }) => [
      Ot(t, "G", $t(n[1], t + ".G"))
    ]).with({
      print: fe._
    }, () => []).with({
      repeat: fe.array()
    }, ({ repeat: n }) => Array(n[0]).fill(0).flatMap((i, r) => $t(n[1], t + "." + r))).with({
      cross: fe.array()
    }, ({ cross: n }) => [
      Ot(t, "X", n.flatMap((i, r) => $t(i, t + ".X+" + r)))
    ]).with({
      plus: fe.array()
    }, ({ plus: n }) => [
      Ot(t, "+", n.flatMap((i, r) => $t(i, t + ".+" + r)))
    ]).exhaustive();
  }
  const ru = {
    width: nn,
    height: nn
  }, au = {
    dx: -18 / 4 + 0.25,
    dy: nn / 4 + 0.25
  };
  function ou(e) {
    const t = w.useMemo(() => e.unit ? $t(e.unit)[0] : null, [
      e.unit
    ]);
    return t ? m.jsx(iu, {
      data: t,
      margins: {
        bottom: 0,
        left: nn,
        top: 0,
        right: nn
      },
      height: 800,
      width: 400,
      nodeShape: "rect",
      nodeProps: ru,
      textProps: au
    }, JSON.stringify(t)) : m.jsx(m.Fragment, {});
  }
  function lu({ unit: e }) {
    const t = w.useMemo(() => ({
      actions: m.jsx(Zl, {
        to: "/",
        search: {
          qv: false
        },
        children: m.jsx(lt, {
          variant: "plain",
          icon: m.jsx(La, {})
        })
      })
    }), []);
    return m.jsxs(Gi, {
      isPlain: true,
      isLarge: true,
      children: [
        m.jsx(ao, {
          actions: t,
          children: m.jsx(to, {
            children: "Query Viewer"
          })
        }),
        m.jsx(xo, {}),
        m.jsx(eo, {
          children: e && m.jsx(ou, {
            unit: e
          })
        })
      ]
    });
  }
  const su = {
    name: "TerminalIcon",
    height: 512,
    width: 640,
    svgPath: "M257.981 272.971L63.638 467.314c-9.373 9.373-24.569 9.373-33.941 0L7.029 444.647c-9.357-9.357-9.375-24.522-.04-33.901L161.011 256 6.99 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L257.981 239.03c9.373 9.372 9.373 24.568 0 33.941zM640 456v-32c0-13.255-10.745-24-24-24H312c-13.255 0-24 10.745-24 24v32c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24z",
    yOffset: 0,
    xOffset: 0
  }, cu = at(su);
  function uu(e) {
    return m.jsx("div", {
      className: "pf-v6-c-code-editor__header",
      children: m.jsxs("div", {
        className: "pf-v6-c-code-editor__header-content",
        children: [
          m.jsx("div", {
            className: "pf-v6-c-code-editor__controls",
            children: m.jsx(lt, {
              icon: m.jsx(cu, {}),
              variant: "plain"
            })
          }),
          m.jsx("div", {
            className: "pf-v6-c-code-editor__header-main",
            children: e.title
          }),
          m.jsx(es, {})
        ]
      })
    });
  }
  function pu() {
    return m.jsxs(_o, {
      children: [
        m.jsx(Po, {
          children: m.jsx(jo, {
            children: m.jsx(Io, {
              children: "Span Query Playground"
            })
          })
        }),
        m.jsx(To, {})
      ]
    });
  }
  const Ie = {
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
  function du(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[t] = n, e;
  }
  function zr(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t && (i = i.filter(function(r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), n.push.apply(n, i);
    }
    return n;
  }
  function Fr(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2 ? zr(Object(n), true).forEach(function(i) {
        du(e, i, n[i]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zr(Object(n)).forEach(function(i) {
        Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
      });
    }
    return e;
  }
  function fu(e, t) {
    if (e == null) return {};
    var n = {}, i = Object.keys(e), r, a;
    for (a = 0; a < i.length; a++) r = i[a], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
    return n;
  }
  function mu(e, t) {
    if (e == null) return {};
    var n = fu(e, t), i, r;
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (r = 0; r < a.length; r++) i = a[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i]);
    }
    return n;
  }
  function hu(e, t) {
    return gu(e) || xu(e, t) || vu(e, t) || yu();
  }
  function gu(e) {
    if (Array.isArray(e)) return e;
  }
  function xu(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
      var n = [], i = true, r = false, a = void 0;
      try {
        for (var o = e[Symbol.iterator](), l; !(i = (l = o.next()).done) && (n.push(l.value), !(t && n.length === t)); i = true) ;
      } catch (c) {
        r = true, a = c;
      } finally {
        try {
          !i && o.return != null && o.return();
        } finally {
          if (r) throw a;
        }
      }
      return n;
    }
  }
  function vu(e, t) {
    if (e) {
      if (typeof e == "string") return Lr(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Lr(e, t);
    }
  }
  function Lr(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i;
  }
  function yu() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function bu(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[t] = n, e;
  }
  function Br(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t && (i = i.filter(function(r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), n.push.apply(n, i);
    }
    return n;
  }
  function Hr(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2 ? Br(Object(n), true).forEach(function(i) {
        bu(e, i, n[i]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Br(Object(n)).forEach(function(i) {
        Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
      });
    }
    return e;
  }
  function wu() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function(i) {
      return t.reduceRight(function(r, a) {
        return a(r);
      }, i);
    };
  }
  function Vt(e) {
    return function t() {
      for (var n = this, i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a];
      return r.length >= e.length ? e.apply(this, r) : function() {
        for (var o = arguments.length, l = new Array(o), c = 0; c < o; c++) l[c] = arguments[c];
        return t.apply(n, [].concat(r, l));
      };
    };
  }
  function Pn(e) {
    return {}.toString.call(e).includes("Object");
  }
  function ku(e) {
    return !Object.keys(e).length;
  }
  function rn(e) {
    return typeof e == "function";
  }
  function Cu(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function Ou(e, t) {
    return Pn(t) || ft("changeType"), Object.keys(t).some(function(n) {
      return !Cu(e, n);
    }) && ft("changeField"), t;
  }
  function Su(e) {
    rn(e) || ft("selectorType");
  }
  function Eu(e) {
    rn(e) || Pn(e) || ft("handlerType"), Pn(e) && Object.values(e).some(function(t) {
      return !rn(t);
    }) && ft("handlersType");
  }
  function _u(e) {
    e || ft("initialIsRequired"), Pn(e) || ft("initialType"), ku(e) && ft("initialContent");
  }
  function ju(e, t) {
    throw new Error(e[t] || e.default);
  }
  var Tu = {
    initialIsRequired: "initial state is required",
    initialType: "initial state should be an object",
    initialContent: "initial state shouldn't be an empty object",
    handlerType: "handler should be an object or a function",
    handlersType: "all handlers should be a functions",
    selectorType: "selector should be a function",
    changeType: "provided value of changes should be an object",
    changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
    default: "an unknown error accured in `state-local` package"
  }, ft = Vt(ju)(Tu), dn = {
    changes: Ou,
    selector: Su,
    handler: Eu,
    initial: _u
  };
  function Iu(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    dn.initial(e), dn.handler(t);
    var n = {
      current: e
    }, i = Vt(Ru)(n, t), r = Vt(Nu)(n), a = Vt(dn.changes)(e), o = Vt(Pu)(n);
    function l() {
      var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(u) {
        return u;
      };
      return dn.selector(s), s(n.current);
    }
    function c(s) {
      wu(i, r, a, o)(s);
    }
    return [
      l,
      c
    ];
  }
  function Pu(e, t) {
    return rn(t) ? t(e.current) : t;
  }
  function Nu(e, t) {
    return e.current = Hr(Hr({}, e.current), t), t;
  }
  function Ru(e, t, n) {
    return rn(t) ? t(e.current) : Object.keys(n).forEach(function(i) {
      var r;
      return (r = t[i]) === null || r === void 0 ? void 0 : r.call(t, e.current[i]);
    }), n;
  }
  var Au = {
    create: Iu
  }, Du = {
    paths: {
      vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"
    }
  };
  function Mu(e) {
    return function t() {
      for (var n = this, i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a];
      return r.length >= e.length ? e.apply(this, r) : function() {
        for (var o = arguments.length, l = new Array(o), c = 0; c < o; c++) l[c] = arguments[c];
        return t.apply(n, [].concat(r, l));
      };
    };
  }
  function zu(e) {
    return {}.toString.call(e).includes("Object");
  }
  function Fu(e) {
    return e || qr("configIsRequired"), zu(e) || qr("configType"), e.urls ? (Lu(), {
      paths: {
        vs: e.urls.monacoBase
      }
    }) : e;
  }
  function Lu() {
    console.warn(Bo.deprecation);
  }
  function Bu(e, t) {
    throw new Error(e[t] || e.default);
  }
  var Bo = {
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
  }, qr = Mu(Bu)(Bo), Hu = {
    config: Fu
  }, qu = function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
    return function(r) {
      return n.reduceRight(function(a, o) {
        return o(a);
      }, r);
    };
  };
  function Ho(e, t) {
    return Object.keys(t).forEach(function(n) {
      t[n] instanceof Object && e[n] && Object.assign(t[n], Ho(e[n], t[n]));
    }), Fr(Fr({}, e), t);
  }
  var $u = {
    type: "cancelation",
    msg: "operation is manually canceled"
  };
  function ti(e) {
    var t = false, n = new Promise(function(i, r) {
      e.then(function(a) {
        return t ? r($u) : i(a);
      }), e.catch(r);
    });
    return n.cancel = function() {
      return t = true;
    }, n;
  }
  var Vu = Au.create({
    config: Du,
    isInitialized: false,
    resolve: null,
    reject: null,
    monaco: null
  }), qo = hu(Vu, 2), ln = qo[0], Fn = qo[1];
  function Uu(e) {
    var t = Hu.config(e), n = t.monaco, i = mu(t, [
      "monaco"
    ]);
    Fn(function(r) {
      return {
        config: Ho(r.config, i),
        monaco: n
      };
    });
  }
  function Wu() {
    var e = ln(function(t) {
      var n = t.monaco, i = t.isInitialized, r = t.resolve;
      return {
        monaco: n,
        isInitialized: i,
        resolve: r
      };
    });
    if (!e.isInitialized) {
      if (Fn({
        isInitialized: true
      }), e.monaco) return e.resolve(e.monaco), ti(ni);
      if (window.monaco && window.monaco.editor) return $o(window.monaco), e.resolve(window.monaco), ti(ni);
      qu(Xu, Gu)(Yu);
    }
    return ti(ni);
  }
  function Xu(e) {
    return document.body.appendChild(e);
  }
  function Ku(e) {
    var t = document.createElement("script");
    return e && (t.src = e), t;
  }
  function Gu(e) {
    var t = ln(function(i) {
      var r = i.config, a = i.reject;
      return {
        config: r,
        reject: a
      };
    }), n = Ku("".concat(t.config.paths.vs, "/loader.js"));
    return n.onload = function() {
      return e();
    }, n.onerror = t.reject, n;
  }
  function Yu() {
    var e = ln(function(n) {
      var i = n.config, r = n.resolve, a = n.reject;
      return {
        config: i,
        resolve: r,
        reject: a
      };
    }), t = window.require;
    t.config(e.config), t([
      "vs/editor/editor.main"
    ], function(n) {
      $o(n), e.resolve(n);
    }, function(n) {
      e.reject(n);
    });
  }
  function $o(e) {
    ln().monaco || Fn({
      monaco: e
    });
  }
  function Qu() {
    return ln(function(e) {
      var t = e.monaco;
      return t;
    });
  }
  var ni = new Promise(function(e, t) {
    return Fn({
      resolve: e,
      reject: t
    });
  }), Vo = {
    config: Uu,
    init: Wu,
    __getMonacoInstance: Qu
  }, Ju = {
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
  }, ii = Ju, Zu = {
    container: {
      display: "flex",
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center"
    }
  }, ep = Zu;
  function tp({ children: e }) {
    return Ne.createElement("div", {
      style: ep.container
    }, e);
  }
  var np = tp, ip = np;
  function rp({ width: e, height: t, isEditorReady: n, loading: i, _ref: r, className: a, wrapperProps: o }) {
    return Ne.createElement("section", {
      style: {
        ...ii.wrapper,
        width: e,
        height: t
      },
      ...o
    }, !n && Ne.createElement(ip, null, i), Ne.createElement("div", {
      ref: r,
      style: {
        ...ii.fullWidth,
        ...!n && ii.hide
      },
      className: a
    }));
  }
  var ap = rp, Uo = w.memo(ap);
  function op(e) {
    w.useEffect(e, []);
  }
  var Wo = op;
  function lp(e, t, n = true) {
    let i = w.useRef(true);
    w.useEffect(i.current || !n ? () => {
      i.current = false;
    } : e, t);
  }
  var Xe = lp;
  function Gt() {
  }
  function _t(e, t, n, i) {
    return sp(e, i) || cp(e, t, n, i);
  }
  function sp(e, t) {
    return e.editor.getModel(Xo(e, t));
  }
  function cp(e, t, n, i) {
    return e.editor.createModel(t, n, i ? Xo(e, i) : void 0);
  }
  function Xo(e, t) {
    return e.Uri.parse(t);
  }
  function up({ original: e, modified: t, language: n, originalLanguage: i, modifiedLanguage: r, originalModelPath: a, modifiedModelPath: o, keepCurrentOriginalModel: l = false, keepCurrentModifiedModel: c = false, theme: s = "light", loading: u = "Loading...", options: p = {}, height: f = "100%", width: d = "100%", className: y, wrapperProps: k = {}, beforeMount: E = Gt, onMount: C = Gt }) {
    let [_, T] = w.useState(false), [A, q] = w.useState(true), O = w.useRef(null), L = w.useRef(null), V = w.useRef(null), D = w.useRef(C), M = w.useRef(E), F = w.useRef(false);
    Wo(() => {
      let S = Vo.init();
      return S.then((z) => (L.current = z) && q(false)).catch((z) => (z == null ? void 0 : z.type) !== "cancelation" && console.error("Monaco initialization: error:", z)), () => O.current ? v() : S.cancel();
    }), Xe(() => {
      if (O.current && L.current) {
        let S = O.current.getOriginalEditor(), z = _t(L.current, e || "", i || n || "text", a || "");
        z !== S.getModel() && S.setModel(z);
      }
    }, [
      a
    ], _), Xe(() => {
      if (O.current && L.current) {
        let S = O.current.getModifiedEditor(), z = _t(L.current, t || "", r || n || "text", o || "");
        z !== S.getModel() && S.setModel(z);
      }
    }, [
      o
    ], _), Xe(() => {
      let S = O.current.getModifiedEditor();
      S.getOption(L.current.editor.EditorOption.readOnly) ? S.setValue(t || "") : t !== S.getValue() && (S.executeEdits("", [
        {
          range: S.getModel().getFullModelRange(),
          text: t || "",
          forceMoveMarkers: true
        }
      ]), S.pushUndoStop());
    }, [
      t
    ], _), Xe(() => {
      var _a2, _b;
      (_b = (_a2 = O.current) == null ? void 0 : _a2.getModel()) == null ? void 0 : _b.original.setValue(e || "");
    }, [
      e
    ], _), Xe(() => {
      let { original: S, modified: z } = O.current.getModel();
      L.current.editor.setModelLanguage(S, i || n || "text"), L.current.editor.setModelLanguage(z, r || n || "text");
    }, [
      n,
      i,
      r
    ], _), Xe(() => {
      var _a2;
      (_a2 = L.current) == null ? void 0 : _a2.editor.setTheme(s);
    }, [
      s
    ], _), Xe(() => {
      var _a2;
      (_a2 = O.current) == null ? void 0 : _a2.updateOptions(p);
    }, [
      p
    ], _);
    let I = w.useCallback(() => {
      var _a2;
      if (!L.current) return;
      M.current(L.current);
      let S = _t(L.current, e || "", i || n || "text", a || ""), z = _t(L.current, t || "", r || n || "text", o || "");
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
      a,
      o
    ]), x = w.useCallback(() => {
      var _a2;
      !F.current && V.current && (O.current = L.current.editor.createDiffEditor(V.current, {
        automaticLayout: true,
        ...p
      }), I(), (_a2 = L.current) == null ? void 0 : _a2.editor.setTheme(s), T(true), F.current = true);
    }, [
      p,
      s,
      I
    ]);
    w.useEffect(() => {
      _ && D.current(O.current, L.current);
    }, [
      _
    ]), w.useEffect(() => {
      !A && !_ && x();
    }, [
      A,
      _,
      x
    ]);
    function v() {
      var _a2, _b, _c2, _d2;
      let S = (_a2 = O.current) == null ? void 0 : _a2.getModel();
      l || ((_b = S == null ? void 0 : S.original) == null ? void 0 : _b.dispose()), c || ((_c2 = S == null ? void 0 : S.modified) == null ? void 0 : _c2.dispose()), (_d2 = O.current) == null ? void 0 : _d2.dispose();
    }
    return Ne.createElement(Uo, {
      width: d,
      height: f,
      isEditorReady: _,
      loading: u,
      _ref: V,
      className: y,
      wrapperProps: k
    });
  }
  var pp = up;
  w.memo(pp);
  function dp(e) {
    let t = w.useRef();
    return w.useEffect(() => {
      t.current = e;
    }, [
      e
    ]), t.current;
  }
  var fp = dp, fn = /* @__PURE__ */ new Map();
  function mp({ defaultValue: e, defaultLanguage: t, defaultPath: n, value: i, language: r, path: a, theme: o = "light", line: l, loading: c = "Loading...", options: s = {}, overrideServices: u = {}, saveViewState: p = true, keepCurrentModel: f = false, width: d = "100%", height: y = "100%", className: k, wrapperProps: E = {}, beforeMount: C = Gt, onMount: _ = Gt, onChange: T, onValidate: A = Gt }) {
    let [q, O] = w.useState(false), [L, V] = w.useState(true), D = w.useRef(null), M = w.useRef(null), F = w.useRef(null), I = w.useRef(_), x = w.useRef(C), v = w.useRef(), S = w.useRef(i), z = fp(a), $ = w.useRef(false), X = w.useRef(false);
    Wo(() => {
      let W = Vo.init();
      return W.then((J) => (D.current = J) && V(false)).catch((J) => (J == null ? void 0 : J.type) !== "cancelation" && console.error("Monaco initialization: error:", J)), () => M.current ? h() : W.cancel();
    }), Xe(() => {
      var _a2, _b, _c2, _d2;
      let W = _t(D.current, e || i || "", t || r || "", a || n || "");
      W !== ((_a2 = M.current) == null ? void 0 : _a2.getModel()) && (p && fn.set(z, (_b = M.current) == null ? void 0 : _b.saveViewState()), (_c2 = M.current) == null ? void 0 : _c2.setModel(W), p && ((_d2 = M.current) == null ? void 0 : _d2.restoreViewState(fn.get(a))));
    }, [
      a
    ], q), Xe(() => {
      var _a2;
      (_a2 = M.current) == null ? void 0 : _a2.updateOptions(s);
    }, [
      s
    ], q), Xe(() => {
      !M.current || i === void 0 || (M.current.getOption(D.current.editor.EditorOption.readOnly) ? M.current.setValue(i) : i !== M.current.getValue() && (X.current = true, M.current.executeEdits("", [
        {
          range: M.current.getModel().getFullModelRange(),
          text: i,
          forceMoveMarkers: true
        }
      ]), M.current.pushUndoStop(), X.current = false));
    }, [
      i
    ], q), Xe(() => {
      var _a2, _b;
      let W = (_a2 = M.current) == null ? void 0 : _a2.getModel();
      W && r && ((_b = D.current) == null ? void 0 : _b.editor.setModelLanguage(W, r));
    }, [
      r
    ], q), Xe(() => {
      var _a2;
      l !== void 0 && ((_a2 = M.current) == null ? void 0 : _a2.revealLine(l));
    }, [
      l
    ], q), Xe(() => {
      var _a2;
      (_a2 = D.current) == null ? void 0 : _a2.editor.setTheme(o);
    }, [
      o
    ], q);
    let H = w.useCallback(() => {
      var _a2;
      if (!(!F.current || !D.current) && !$.current) {
        x.current(D.current);
        let W = a || n, J = _t(D.current, i || e || "", t || r || "", W || "");
        M.current = (_a2 = D.current) == null ? void 0 : _a2.editor.create(F.current, {
          model: J,
          automaticLayout: true,
          ...s
        }, u), p && M.current.restoreViewState(fn.get(W)), D.current.editor.setTheme(o), l !== void 0 && M.current.revealLine(l), O(true), $.current = true;
      }
    }, [
      e,
      t,
      n,
      i,
      r,
      a,
      s,
      u,
      p,
      o,
      l
    ]);
    w.useEffect(() => {
      q && I.current(M.current, D.current);
    }, [
      q
    ]), w.useEffect(() => {
      !L && !q && H();
    }, [
      L,
      q,
      H
    ]), S.current = i, w.useEffect(() => {
      var _a2, _b;
      q && T && ((_a2 = v.current) == null ? void 0 : _a2.dispose(), v.current = (_b = M.current) == null ? void 0 : _b.onDidChangeModelContent((W) => {
        X.current || T(M.current.getValue(), W);
      }));
    }, [
      q,
      T
    ]), w.useEffect(() => {
      if (q) {
        let W = D.current.editor.onDidChangeMarkers((J) => {
          var _a2;
          let g = (_a2 = M.current.getModel()) == null ? void 0 : _a2.uri;
          if (g && J.find((Y) => Y.path === g.path)) {
            let Y = D.current.editor.getModelMarkers({
              resource: g
            });
            A == null ? void 0 : A(Y);
          }
        });
        return () => {
          W == null ? void 0 : W.dispose();
        };
      }
      return () => {
      };
    }, [
      q,
      A
    ]);
    function h() {
      var _a2, _b;
      (_a2 = v.current) == null ? void 0 : _a2.dispose(), f ? p && fn.set(a, M.current.saveViewState()) : (_b = M.current.getModel()) == null ? void 0 : _b.dispose(), M.current.dispose();
    }
    return Ne.createElement(Uo, {
      width: d,
      height: y,
      isEditorReady: q,
      loading: c,
      _ref: F,
      className: k,
      wrapperProps: E
    });
  }
  var hp = mp, gp = w.memo(hp), xp = gp;
  const vp = {
    name: "UploadIcon",
    height: 512,
    width: 512,
    svgPath: "M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z",
    yOffset: 0,
    xOffset: 0
  }, yp = at(vp), bp = {
    name: "DownloadIcon",
    height: 512,
    width: 512,
    svgPath: "M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z",
    yOffset: 0,
    xOffset: 0
  }, wp = at(bp), kp = {
    name: "CodeIcon",
    height: 512,
    width: 640,
    svgPath: "M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z",
    yOffset: 0,
    xOffset: 0
  }, ri = at(kp), Cp = {
    name: "HelpIcon",
    height: 1024,
    width: 1024,
    svgPath: "M521.3,576 C627.5,576 713.7,502 713.7,413.7 C713.7,325.4 627.6,253.6 521.3,253.6 C366,253.6 334.5,337.7 329.2,407.2 C329.2,414.3 335.2,416 343.5,416 L445,416 C450.5,416 458,415.5 460.8,406.5 C460.8,362.6 582.9,357.1 582.9,413.6 C582.9,441.9 556.2,470.9 521.3,473 C486.4,475.1 447.3,479.8 447.3,521.7 L447.3,553.8 C447.3,570.8 456.1,576 472,576 C487.9,576 521.3,576 521.3,576 M575.3,751.3 L575.3,655.3 C575.313862,651.055109 573.620137,646.982962 570.6,644 C567.638831,640.947672 563.552355,639.247987 559.3,639.29884 L463.3,639.29884 C459.055109,639.286138 454.982962,640.979863 452,644 C448.947672,646.961169 447.247987,651.047645 447.29884,655.3 L447.29884,751.3 C447.286138,755.544891 448.979863,759.617038 452,762.6 C454.961169,765.652328 459.047645,767.352013 463.3,767.30116 L559.3,767.30116 C563.544891,767.313862 567.617038,765.620137 570.6,762.6 C573.659349,759.643612 575.360354,755.553963 575.3,751.3 M512,896 C300.2,896 128,723.9 128,512 C128,300.3 300.2,128 512,128 C723.8,128 896,300.2 896,512 C896,723.8 723.7,896 512,896 M512.1,0 C229.7,0 0,229.8 0,512 C0,794.2 229.8,1024 512.1,1024 C794.4,1024 1024,794.3 1024,512 C1024,229.7 794.4,0 512.1,0",
    yOffset: 0,
    xOffset: 0
  }, Op = at(Cp);
  function $r(e) {
    return _p(e) || Ep(e) || Go(e) || Sp();
  }
  function Sp() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Ep(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
  }
  function _p(e) {
    if (Array.isArray(e)) return Pi(e);
  }
  function Vr(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t && (i = i.filter(function(r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), n.push.apply(n, i);
    }
    return n;
  }
  function Ur(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2 ? Vr(Object(n), true).forEach(function(i) {
        Ko(e, i, n[i]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vr(Object(n)).forEach(function(i) {
        Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
      });
    }
    return e;
  }
  function Ko(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[t] = n, e;
  }
  function an(e, t) {
    return Ip(e) || Tp(e, t) || Go(e, t) || jp();
  }
  function jp() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Go(e, t) {
    if (e) {
      if (typeof e == "string") return Pi(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Pi(e, t);
    }
  }
  function Pi(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i;
  }
  function Tp(e, t) {
    var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (n != null) {
      var i = [], r = true, a = false, o, l;
      try {
        for (n = n.call(e); !(r = (o = n.next()).done) && (i.push(o.value), !(t && i.length === t)); r = true) ;
      } catch (c) {
        a = true, l = c;
      } finally {
        try {
          !r && n.return != null && n.return();
        } finally {
          if (a) throw l;
        }
      }
      return i;
    }
  }
  function Ip(e) {
    if (Array.isArray(e)) return e;
  }
  var Pp = typeof Jn == "function" ? Jn : Jn.default, Np = "file-invalid-type", Rp = "file-too-large", Ap = "file-too-small", Dp = "too-many-files", Mp = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = t.split(","), i = n.length > 1 ? "one of ".concat(n.join(", ")) : n[0];
    return {
      code: Np,
      message: "File type must be ".concat(i)
    };
  }, Wr = function(t) {
    return {
      code: Rp,
      message: "File is larger than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
    };
  }, Xr = function(t) {
    return {
      code: Ap,
      message: "File is smaller than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
    };
  }, zp = {
    code: Dp,
    message: "Too many files"
  };
  function Yo(e, t) {
    var n = e.type === "application/x-moz-file" || Pp(e, t);
    return [
      n,
      n ? null : Mp(t)
    ];
  }
  function Qo(e, t, n) {
    if (xt(e.size)) if (xt(t) && xt(n)) {
      if (e.size > n) return [
        false,
        Wr(n)
      ];
      if (e.size < t) return [
        false,
        Xr(t)
      ];
    } else {
      if (xt(t) && e.size < t) return [
        false,
        Xr(t)
      ];
      if (xt(n) && e.size > n) return [
        false,
        Wr(n)
      ];
    }
    return [
      true,
      null
    ];
  }
  function xt(e) {
    return e != null;
  }
  function Fp(e) {
    var t = e.files, n = e.accept, i = e.minSize, r = e.maxSize, a = e.multiple, o = e.maxFiles, l = e.validator;
    return !a && t.length > 1 || a && o >= 1 && t.length > o ? false : t.every(function(c) {
      var s = Yo(c, n), u = an(s, 1), p = u[0], f = Qo(c, i, r), d = an(f, 1), y = d[0], k = l ? l(c) : null;
      return p && y && !k;
    });
  }
  function Nn(e) {
    return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : false;
  }
  function mn(e) {
    return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
      return t === "Files" || t === "application/x-moz-file";
    }) : !!e.target && !!e.target.files;
  }
  function Kr(e) {
    e.preventDefault();
  }
  function Lp(e) {
    return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
  }
  function Bp(e) {
    return e.indexOf("Edge/") !== -1;
  }
  function Hp() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
    return Lp(e) || Bp(e);
  }
  function tt() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function(i) {
      for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) a[o - 1] = arguments[o];
      return t.some(function(l) {
        return !Nn(i) && l && l.apply(void 0, [
          i
        ].concat(a)), Nn(i);
      });
    };
  }
  function qp() {
    return "showOpenFilePicker" in window;
  }
  function $p(e) {
    if (xt(e)) {
      var t = Object.entries(e).filter(function(n) {
        var i = an(n, 2), r = i[0], a = i[1], o = true;
        return Jo(r) || (console.warn('Skipped "'.concat(r, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), o = false), (!Array.isArray(a) || !a.every(Zo)) && (console.warn('Skipped "'.concat(r, '" because an invalid file extension was provided.')), o = false), o;
      }).reduce(function(n, i) {
        var r = an(i, 2), a = r[0], o = r[1];
        return Ur(Ur({}, n), {}, Ko({}, a, o));
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
  function Vp(e) {
    if (xt(e)) return Object.entries(e).reduce(function(t, n) {
      var i = an(n, 2), r = i[0], a = i[1];
      return [].concat($r(t), [
        r
      ], $r(a));
    }, []).filter(function(t) {
      return Jo(t) || Zo(t);
    }).join(",");
  }
  function Up(e) {
    return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
  }
  function Wp(e) {
    return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
  }
  function Jo(e) {
    return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
  }
  function Zo(e) {
    return /^.*\.[\w]+$/.test(e);
  }
  var Xp = [
    "children"
  ], Kp = [
    "open"
  ], Gp = [
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
  ], Yp = [
    "refKey",
    "onChange",
    "onClick"
  ];
  function Qp(e) {
    return ed(e) || Zp(e) || el(e) || Jp();
  }
  function Jp() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Zp(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
  }
  function ed(e) {
    if (Array.isArray(e)) return Ni(e);
  }
  function ai(e, t) {
    return id(e) || nd(e, t) || el(e, t) || td();
  }
  function td() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function el(e, t) {
    if (e) {
      if (typeof e == "string") return Ni(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ni(e, t);
    }
  }
  function Ni(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i;
  }
  function nd(e, t) {
    var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (n != null) {
      var i = [], r = true, a = false, o, l;
      try {
        for (n = n.call(e); !(r = (o = n.next()).done) && (i.push(o.value), !(t && i.length === t)); r = true) ;
      } catch (c) {
        a = true, l = c;
      } finally {
        try {
          !r && n.return != null && n.return();
        } finally {
          if (a) throw l;
        }
      }
      return i;
    }
  }
  function id(e) {
    if (Array.isArray(e)) return e;
  }
  function Gr(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t && (i = i.filter(function(r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), n.push.apply(n, i);
    }
    return n;
  }
  function ke(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2 ? Gr(Object(n), true).forEach(function(i) {
        Ri(e, i, n[i]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gr(Object(n)).forEach(function(i) {
        Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
      });
    }
    return e;
  }
  function Ri(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[t] = n, e;
  }
  function Rn(e, t) {
    if (e == null) return {};
    var n = rd(e, t), i, r;
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (r = 0; r < a.length; r++) i = a[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i]);
    }
    return n;
  }
  function rd(e, t) {
    if (e == null) return {};
    var n = {}, i = Object.keys(e), r, a;
    for (a = 0; a < i.length; a++) r = i[a], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
    return n;
  }
  var Ln = w.forwardRef(function(e, t) {
    var n = e.children, i = Rn(e, Xp), r = ad(i), a = r.open, o = Rn(r, Kp);
    return w.useImperativeHandle(t, function() {
      return {
        open: a
      };
    }, [
      a
    ]), Ne.createElement(w.Fragment, null, n(ke(ke({}, o), {}, {
      open: a
    })));
  });
  Ln.displayName = "Dropzone";
  var tl = {
    disabled: false,
    getFilesFromEvent: lc,
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
  Ln.defaultProps = tl;
  Ln.propTypes = {
    children: ge.func,
    accept: ge.objectOf(ge.arrayOf(ge.string)),
    multiple: ge.bool,
    preventDropOnDocument: ge.bool,
    noClick: ge.bool,
    noKeyboard: ge.bool,
    noDrag: ge.bool,
    noDragEventsBubbling: ge.bool,
    minSize: ge.number,
    maxSize: ge.number,
    maxFiles: ge.number,
    disabled: ge.bool,
    getFilesFromEvent: ge.func,
    onFileDialogCancel: ge.func,
    onFileDialogOpen: ge.func,
    useFsAccessApi: ge.bool,
    autoFocus: ge.bool,
    onDragEnter: ge.func,
    onDragLeave: ge.func,
    onDragOver: ge.func,
    onDrop: ge.func,
    onDropAccepted: ge.func,
    onDropRejected: ge.func,
    onError: ge.func,
    validator: ge.func
  };
  var Ai = {
    isFocused: false,
    isFileDialogActive: false,
    isDragActive: false,
    isDragAccept: false,
    isDragReject: false,
    acceptedFiles: [],
    fileRejections: []
  };
  function ad() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = ke(ke({}, tl), e), n = t.accept, i = t.disabled, r = t.getFilesFromEvent, a = t.maxSize, o = t.minSize, l = t.multiple, c = t.maxFiles, s = t.onDragEnter, u = t.onDragLeave, p = t.onDragOver, f = t.onDrop, d = t.onDropAccepted, y = t.onDropRejected, k = t.onFileDialogCancel, E = t.onFileDialogOpen, C = t.useFsAccessApi, _ = t.autoFocus, T = t.preventDropOnDocument, A = t.noClick, q = t.noKeyboard, O = t.noDrag, L = t.noDragEventsBubbling, V = t.onError, D = t.validator, M = w.useMemo(function() {
      return Vp(n);
    }, [
      n
    ]), F = w.useMemo(function() {
      return $p(n);
    }, [
      n
    ]), I = w.useMemo(function() {
      return typeof E == "function" ? E : Yr;
    }, [
      E
    ]), x = w.useMemo(function() {
      return typeof k == "function" ? k : Yr;
    }, [
      k
    ]), v = w.useRef(null), S = w.useRef(null), z = w.useReducer(od, Ai), $ = ai(z, 2), X = $[0], H = $[1], h = X.isFocused, W = X.isFileDialogActive, J = w.useRef(typeof window < "u" && window.isSecureContext && C && qp()), g = function() {
      !J.current && W && setTimeout(function() {
        if (S.current) {
          var P = S.current.files;
          P.length || (H({
            type: "closeDialog"
          }), x());
        }
      }, 300);
    };
    w.useEffect(function() {
      return window.addEventListener("focus", g, false), function() {
        window.removeEventListener("focus", g, false);
      };
    }, [
      S,
      W,
      x,
      J
    ]);
    var Y = w.useRef([]), ce = function(P) {
      v.current && v.current.contains(P.target) || (P.preventDefault(), Y.current = []);
    };
    w.useEffect(function() {
      return T && (document.addEventListener("dragover", Kr, false), document.addEventListener("drop", ce, false)), function() {
        T && (document.removeEventListener("dragover", Kr), document.removeEventListener("drop", ce));
      };
    }, [
      v,
      T
    ]), w.useEffect(function() {
      return !i && _ && v.current && v.current.focus(), function() {
      };
    }, [
      v,
      _,
      i
    ]);
    var ne = w.useCallback(function(B) {
      V ? V(B) : console.error(B);
    }, [
      V
    ]), Ee = w.useCallback(function(B) {
      B.preventDefault(), B.persist(), ae(B), Y.current = [].concat(Qp(Y.current), [
        B.target
      ]), mn(B) && Promise.resolve(r(B)).then(function(P) {
        if (!(Nn(B) && !L)) {
          var b = P.length, j = b > 0 && Fp({
            files: P,
            accept: M,
            minSize: o,
            maxSize: a,
            multiple: l,
            maxFiles: c,
            validator: D
          }), U = b > 0 && !j;
          H({
            isDragAccept: j,
            isDragReject: U,
            isDragActive: true,
            type: "setDraggedFiles"
          }), s && s(B);
        }
      }).catch(function(P) {
        return ne(P);
      });
    }, [
      r,
      s,
      ne,
      L,
      M,
      o,
      a,
      l,
      c,
      D
    ]), xe = w.useCallback(function(B) {
      B.preventDefault(), B.persist(), ae(B);
      var P = mn(B);
      if (P && B.dataTransfer) try {
        B.dataTransfer.dropEffect = "copy";
      } catch {
      }
      return P && p && p(B), false;
    }, [
      p,
      L
    ]), ve = w.useCallback(function(B) {
      B.preventDefault(), B.persist(), ae(B);
      var P = Y.current.filter(function(j) {
        return v.current && v.current.contains(j);
      }), b = P.indexOf(B.target);
      b !== -1 && P.splice(b, 1), Y.current = P, !(P.length > 0) && (H({
        type: "setDraggedFiles",
        isDragActive: false,
        isDragAccept: false,
        isDragReject: false
      }), mn(B) && u && u(B));
    }, [
      v,
      u,
      L
    ]), me = w.useCallback(function(B, P) {
      var b = [], j = [];
      B.forEach(function(U) {
        var Z = Yo(U, M), re = ai(Z, 2), Pe = re[0], Ve = re[1], De = Qo(U, o, a), Fe = ai(De, 2), Ze = Fe[0], ee = Fe[1], ue = D ? D(U) : null;
        if (Pe && Ze && !ue) b.push(U);
        else {
          var he = [
            Ve,
            ee
          ];
          ue && (he = he.concat(ue)), j.push({
            file: U,
            errors: he.filter(function(Ye) {
              return Ye;
            })
          });
        }
      }), (!l && b.length > 1 || l && c >= 1 && b.length > c) && (b.forEach(function(U) {
        j.push({
          file: U,
          errors: [
            zp
          ]
        });
      }), b.splice(0)), H({
        acceptedFiles: b,
        fileRejections: j,
        isDragReject: j.length > 0,
        type: "setFiles"
      }), f && f(b, j, P), j.length > 0 && y && y(j, P), b.length > 0 && d && d(b, P);
    }, [
      H,
      l,
      M,
      o,
      a,
      c,
      f,
      d,
      y,
      D
    ]), le = w.useCallback(function(B) {
      B.preventDefault(), B.persist(), ae(B), Y.current = [], mn(B) && Promise.resolve(r(B)).then(function(P) {
        Nn(B) && !L || me(P, B);
      }).catch(function(P) {
        return ne(P);
      }), H({
        type: "reset"
      });
    }, [
      r,
      me,
      ne,
      L
    ]), Te = w.useCallback(function() {
      if (J.current) {
        H({
          type: "openDialog"
        }), I();
        var B = {
          multiple: l,
          types: F
        };
        window.showOpenFilePicker(B).then(function(P) {
          return r(P);
        }).then(function(P) {
          me(P, null), H({
            type: "closeDialog"
          });
        }).catch(function(P) {
          Up(P) ? (x(P), H({
            type: "closeDialog"
          })) : Wp(P) ? (J.current = false, S.current ? (S.current.value = null, S.current.click()) : ne(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : ne(P);
        });
        return;
      }
      S.current && (H({
        type: "openDialog"
      }), I(), S.current.value = null, S.current.click());
    }, [
      H,
      I,
      x,
      C,
      me,
      ne,
      F,
      l
    ]), ze = w.useCallback(function(B) {
      !v.current || !v.current.isEqualNode(B.target) || (B.key === " " || B.key === "Enter" || B.keyCode === 32 || B.keyCode === 13) && (B.preventDefault(), Te());
    }, [
      v,
      Te
    ]), qe = w.useCallback(function() {
      H({
        type: "focus"
      });
    }, []), Ge = w.useCallback(function() {
      H({
        type: "blur"
      });
    }, []), Ae = w.useCallback(function() {
      A || (Hp() ? setTimeout(Te, 0) : Te());
    }, [
      A,
      Te
    ]), we = function(P) {
      return i ? null : P;
    }, $e = function(P) {
      return q ? null : we(P);
    }, K = function(P) {
      return O ? null : we(P);
    }, ae = function(P) {
      L && P.stopPropagation();
    }, oe = w.useMemo(function() {
      return function() {
        var B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, P = B.refKey, b = P === void 0 ? "ref" : P, j = B.role, U = B.onKeyDown, Z = B.onFocus, re = B.onBlur, Pe = B.onClick, Ve = B.onDragEnter, De = B.onDragOver, Fe = B.onDragLeave, Ze = B.onDrop, ee = Rn(B, Gp);
        return ke(ke(Ri({
          onKeyDown: $e(tt(U, ze)),
          onFocus: $e(tt(Z, qe)),
          onBlur: $e(tt(re, Ge)),
          onClick: we(tt(Pe, Ae)),
          onDragEnter: K(tt(Ve, Ee)),
          onDragOver: K(tt(De, xe)),
          onDragLeave: K(tt(Fe, ve)),
          onDrop: K(tt(Ze, le)),
          role: typeof j == "string" && j !== "" ? j : "presentation"
        }, b, v), !i && !q ? {
          tabIndex: 0
        } : {}), ee);
      };
    }, [
      v,
      ze,
      qe,
      Ge,
      Ae,
      Ee,
      xe,
      ve,
      le,
      q,
      O,
      i
    ]), _e = w.useCallback(function(B) {
      B.stopPropagation();
    }, []), Ce = w.useMemo(function() {
      return function() {
        var B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, P = B.refKey, b = P === void 0 ? "ref" : P, j = B.onChange, U = B.onClick, Z = Rn(B, Yp), re = Ri({
          accept: M,
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
          onChange: we(tt(j, le)),
          onClick: we(tt(U, _e)),
          tabIndex: -1
        }, b, S);
        return ke(ke({}, re), Z);
      };
    }, [
      S,
      n,
      l,
      le,
      i
    ]);
    return ke(ke({}, X), {}, {
      isFocused: h && !i,
      getRootProps: oe,
      getInputProps: Ce,
      rootRef: v,
      inputRef: S,
      open: we(Te)
    });
  }
  function od(e, t) {
    switch (t.type) {
      case "focus":
        return ke(ke({}, e), {}, {
          isFocused: true
        });
      case "blur":
        return ke(ke({}, e), {}, {
          isFocused: false
        });
      case "openDialog":
        return ke(ke({}, Ai), {}, {
          isFileDialogActive: true
        });
      case "closeDialog":
        return ke(ke({}, e), {}, {
          isFileDialogActive: false
        });
      case "setDraggedFiles":
        return ke(ke({}, e), {}, {
          isDragActive: t.isDragActive,
          isDragAccept: t.isDragAccept,
          isDragReject: t.isDragReject
        });
      case "setFiles":
        return ke(ke({}, e), {}, {
          acceptedFiles: t.acceptedFiles,
          fileRejections: t.fileRejections,
          isDragReject: t.isDragReject
        });
      case "reset":
        return ke({}, Ai);
      default:
        return e;
    }
  }
  function Yr() {
  }
  const nl = w.createContext(null), yt = (e) => {
    var { icon: t, className: n, "aria-label": i, onClick: r = () => {
    }, isVisible: a = true, tooltipProps: o = {} } = e, l = G(e, [
      "icon",
      "className",
      "aria-label",
      "onClick",
      "isVisible",
      "tooltipProps"
    ]);
    const c = w.useContext(nl), s = (u) => {
      r(c.code, u);
    };
    return a ? m.jsx(Ua, Object.assign({}, o, {
      children: m.jsx(lt, Object.assign({
        className: n,
        onClick: s,
        variant: "plain",
        "aria-label": i
      }, l, {
        icon: t
      }))
    })) : null;
  };
  yt.displayName = "CodeEditorControl";
  var We;
  (function(e) {
    e.abap = "abap", e.aes = "aes", e.apex = "apex", e.azcli = "azcli", e.bat = "bat", e.bicep = "bicep", e.c = "c", e.cameligo = "cameligo", e.clojure = "clojure", e.coffeescript = "coffeescript", e.cpp = "cpp", e.csharp = "csharp", e.csp = "csp", e.css = "css", e.dart = "dart", e.dockerfile = "dockerfile", e.ecl = "ecl", e.elixir = "elixir", e.fsharp = "fsharp", e.go = "go", e.graphql = "graphql", e.handlebars = "handlebars", e.hcl = "hcl", e.html = "html", e.ini = "ini", e.java = "java", e.javascript = "javascript", e.json = "json", e.julia = "julia", e.kotlin = "kotlin", e.less = "less", e.lexon = "lexon", e.liquid = "liquid", e.lua = "lua", e.m3 = "m3", e.markdown = "markdown", e.mips = "mips", e.msdax = "msdax", e.mysql = "mysql", e["objective-c"] = "objective-c", e.pascal = "pascal", e.pascaligo = "pascaligo", e.perl = "perl", e.pgsql = "pgsql", e.php = "php", e.plaintext = "plaintext", e.postiats = "postiats", e.powerquery = "powerquery", e.powershell = "powershell", e.pug = "pug", e.python = "python", e.r = "r", e.razor = "razor", e.redis = "redis", e.redshift = "redshift", e.restructuredtext = "restructuredtext", e.ruby = "ruby", e.rust = "rust", e.sb = "sb", e.scala = "scala", e.scheme = "scheme", e.scss = "scss", e.shell = "shell", e.sol = "sol", e.sql = "sql", e.st = "st", e.swift = "swift", e.systemverilog = "systemverilog", e.tcl = "tcl", e.twig = "twig", e.typescript = "typescript", e.vb = "vb", e.verilog = "verilog", e.xml = "xml", e.yaml = "yaml";
  })(We || (We = {}));
  const ld = (e) => {
    switch (e) {
      case We.shell:
        return "sh";
      case We.ruby:
        return "rb";
      case We.perl:
        return "pl";
      case We.python:
        return "py";
      case We.mysql:
        return "sql";
      case We.javascript:
        return "js";
      case We.typescript:
        return "ts";
      case We.markdown:
        return "md";
      case We.plaintext:
        return "txt";
      default:
        return e.toString();
    }
  }, sd = (e, t) => {
    const n = document.createElement("a");
    n.href = URL.createObjectURL(new Blob([
      e
    ], {
      type: "text"
    })), n.download = t, n.click();
  }, il = ({ className: e = "", code: t = "", copyButtonAriaLabel: n = "Copy code to clipboard", copyButtonSuccessTooltipText: i = "Content added to clipboard", copyButtonToolTipText: r = "Copy to clipboard", customControls: a = null, downloadButtonAriaLabel: o = "Download code", downloadButtonToolTipText: l = "Download", downloadFileName: c = Date.now().toString(), editorProps: s, emptyState: u = "", emptyStateBody: p = "Drag and drop a file or upload one.", emptyStateButton: f = "Browse", emptyStateLink: d = "Start from scratch", emptyStateTitle: y = "Start editing", headerMainContent: k = "", height: E, isCopyEnabled: C = false, isDarkTheme: _ = false, isDownloadEnabled: T = false, isFullHeight: A = false, isHeaderPlain: q = false, isLanguageLabelVisible: O = false, isLineNumbersVisible: L = true, isMinimapVisible: V = false, isReadOnly: D = false, isUploadEnabled: M = false, language: F = We.plaintext, loading: I = "", onChange: x = () => {
  }, onCodeChange: v = () => {
  }, onDownload: S = sd, onEditorDidMount: z = () => {
  }, options: $ = {}, overrideServices: X = {}, shortcutsPopoverButtonText: H = "View Shortcuts", shortcutsPopoverProps: h = {
    bodyContent: "",
    "aria-label": "Keyboard Shortcuts"
  }, showEditor: W = true, toolTipCopyExitDelay: J = 1600, toolTipDelay: g = 300, toolTipMaxWidth: Y = "100px", toolTipPosition: ce = "top", uploadButtonAriaLabel: ne = "Upload code", uploadButtonToolTipText: Ee = "Upload", width: xe = "" }) => {
    const [ve, me] = w.useState(t), [le, Te] = w.useState(false), [ze, qe] = w.useState(true), [Ge, Ae] = w.useState(false), we = w.useRef(null), $e = w.useRef(null), K = w.useRef(null), ae = w.useRef(() => {
    }), oe = () => {
      var ee, ue, he;
      const Ye = (ee = we.current) === null || ee === void 0 ? void 0 : ee.getContentHeight(), Dt = (ue = we.current) === null || ue === void 0 ? void 0 : ue.getLayoutInfo();
      (he = we.current) === null || he === void 0 || he.layout({
        width: Dt.width,
        height: Ye
      });
    }, _e = (ee, ue) => {
      E === "sizeToFit" && oe(), x && x(ee, ue), me(ee), v(ee);
    }, Ce = () => {
      we.current && (we.current.layout({
        width: 0,
        height: 0
      }), we.current.layout());
    }, B = (ee) => {
      var ue;
      $e.current === document.activeElement && (ee.key === "ArrowDown" || ee.key === " ") && ((ue = we.current) === null || ue === void 0 || ue.focus(), ee.preventDefault());
    };
    w.useEffect(() => me(t), [
      t
    ]), w.useEffect(() => (document.addEventListener("keydown", B), ae.current = Za(K.current, Ce, true), Ce(), () => {
      document.removeEventListener("keydown", B), ae.current();
    }), []);
    const P = (ee, ue) => {
      ee.addCommand(ue.KeyMod.Shift | ue.KeyCode.Tab, () => $e.current.focus()), Array.from(document.getElementsByClassName("monaco-editor")).forEach((he) => he.removeAttribute("role")), z(ee, ue), we.current = ee, E === "sizeToFit" && oe();
    }, b = (ee) => {
      me(ee), v(ee);
    }, j = () => Te(true), U = () => Te(false), Z = (ee) => new Promise((ue, he) => {
      const Ye = new FileReader();
      Ye.onload = () => ue(Ye.result), Ye.onerror = () => he(Ye.error), Ye.readAsText(ee);
    }), re = (ee) => {
      if (ee.length > 0) {
        const ue = ee[0];
        b(""), j(), Z(ue).then((he) => {
          U(), qe(false), b(he);
        }).catch((he) => {
          console.error("error", he), U(), b("");
        });
      }
    }, Pe = (ee) => {
      ee.length > 0 && console.error("There was an error accepting that dropped file");
    }, Ve = () => {
      navigator.clipboard.writeText(ve), Ae(true);
    }, De = Object.assign({
      scrollBeyondLastLine: E !== "sizeToFit",
      readOnly: D,
      cursorStyle: "line",
      lineNumbers: L ? "on" : "off",
      tabIndex: -1,
      minimap: {
        enabled: V
      }
    }, $), Fe = {
      position: ce,
      exitDelay: g,
      entryDelay: g,
      maxWidth: Y,
      trigger: "mouseenter focus"
    }, Ze = (C || T) && (!ze || !!ve) || M || a || k || !!h.bodyContent;
    return m.jsx(Ln, {
      multiple: false,
      onDropAccepted: re,
      onDropRejected: Pe,
      children: ({ getRootProps: ee, getInputProps: ue, isDragActive: he, open: Ye }) => {
        const Dt = m.jsx("input", Object.assign({}, ue(), {
          hidden: true
        })), Ll = u || (M ? m.jsxs(Ei, {
          variant: Zt.sm,
          titleText: y,
          icon: ri,
          headingLevel: "h4",
          children: [
            m.jsx(Oo, {
              children: p
            }),
            !D && m.jsxs(_i, {
              children: [
                m.jsx(vn, {
                  children: m.jsx(lt, {
                    variant: "primary",
                    onClick: Ye,
                    children: f
                  })
                }),
                m.jsx(vn, {
                  children: m.jsx(lt, {
                    variant: "link",
                    onClick: () => qe(false),
                    children: d
                  })
                })
              ]
            })
          ]
        }) : m.jsx(Ei, {
          variant: Zt.sm,
          titleText: y,
          icon: ri,
          headingLevel: "h4",
          children: !D && m.jsx(_i, {
            children: m.jsx(vn, {
              children: m.jsx(lt, {
                variant: "primary",
                onClick: () => qe(false),
                children: d
              })
            })
          })
        })), Bl = m.jsxs(m.Fragment, {
          children: [
            m.jsx("div", {
              className: N(Ie.codeEditorControls),
              children: m.jsxs(nl.Provider, {
                value: {
                  code: ve
                },
                children: [
                  C && (!ze || !!ve) && m.jsx(yt, {
                    icon: m.jsx($s, {}),
                    "aria-label": n,
                    tooltipProps: Object.assign(Object.assign({}, Fe), {
                      "aria-live": "polite",
                      content: m.jsx("div", {
                        children: Ge ? i : r
                      }),
                      exitDelay: Ge ? J : g,
                      onTooltipHidden: () => Ae(false)
                    }),
                    onClick: Ve
                  }),
                  M && m.jsx(yt, {
                    icon: m.jsx(yp, {}),
                    "aria-label": ne,
                    tooltipProps: Object.assign({
                      content: m.jsx("div", {
                        children: Ee
                      })
                    }, Fe),
                    onClick: Ye
                  }),
                  T && (!ze || !!ve) && m.jsx(yt, {
                    icon: m.jsx(wp, {}),
                    "aria-label": o,
                    tooltipProps: Object.assign({
                      content: m.jsx("div", {
                        children: l
                      })
                    }, Fe),
                    onClick: () => {
                      S(ve, `${c}.${ld(F)}`);
                    }
                  }),
                  a && a
                ]
              })
            }),
            k && m.jsx("div", {
              className: N(Ie.codeEditorHeaderMain),
              children: k
            }),
            !!h.bodyContent && m.jsx("div", {
              className: `${Ie.codeEditor}__keyboard-shortcuts`,
              children: m.jsx(ho, Object.assign({}, h, {
                children: m.jsx(lt, {
                  variant: ts.link,
                  icon: m.jsx(Op, {}),
                  children: H
                })
              }))
            })
          ]
        }), mr = m.jsxs("div", {
          className: N(Ie.codeEditorHeader, q && Ie.modifiers.plain),
          children: [
            Ze && m.jsx("div", {
              className: N(Ie.codeEditorHeaderContent),
              children: Bl
            }),
            O && m.jsxs("div", {
              className: N(Ie.codeEditorTab),
              children: [
                m.jsx("span", {
                  className: N(Ie.codeEditorTabIcon),
                  children: m.jsx(ri, {})
                }),
                m.jsx("span", {
                  className: N(Ie.codeEditorTabText),
                  children: F.toUpperCase()
                })
              ]
            })
          ]
        }), hr = m.jsx("div", {
          className: N(Ie.codeEditorCode),
          ref: $e,
          tabIndex: 0,
          dir: "ltr",
          children: m.jsx(xp, Object.assign({
            height: E === "100%" ? void 0 : E,
            width: xe,
            language: F,
            value: ve,
            options: De,
            overrideServices: X,
            onChange: _e,
            onMount: P,
            loading: I,
            theme: _ ? "vs-dark" : "vs-light"
          }, s))
        });
        return m.jsx("div", {
          className: N(Ie.codeEditor, D && Ie.modifiers.readOnly, (E === "100%" ? true : A) && Ie.modifiers.fullHeight, e),
          ref: K,
          children: (M || u) && !ve ? m.jsxs("div", Object.assign({}, ee({
            onClick: (Hl) => Hl.stopPropagation()
          }), {
            className: N(Ie.codeEditorContainer, le && Zs.modifiers.loading),
            children: [
              mr,
              m.jsx("div", {
                className: N(Ie.codeEditorMain, he && Ie.modifiers.dragHover),
                children: (ze || u) && !ve ? m.jsxs("div", {
                  className: N(Ie.codeEditorUpload),
                  children: [
                    Dt,
                    Ll
                  ]
                }) : m.jsxs(m.Fragment, {
                  children: [
                    Dt,
                    hr
                  ]
                })
              })
            ]
          })) : m.jsxs(m.Fragment, {
            children: [
              mr,
              W && m.jsxs("div", {
                className: N(Ie.codeEditorMain),
                children: [
                  Dt,
                  hr
                ]
              })
            ]
          })
        });
      }
    });
  };
  il.displayName = "CodeEditor";
  const oi = [
    {
      label: "Email Judge/Generator",
      description: "This demo is the simplest query, but does not generate great output",
      value: `(g "ollama/granite3.2:2b"
   (cross
    (system "You compute an evaluation score from 0 to 100 that ranks given candidate introductory emails. Better emails are ones that mention specifics, such as names of people and companies. You present a list of the top 3 ordered by their rank showing the score and full content of each.")

    (print "Generate 4 candidate emails in parallel")
    (plus
     (repeat 4
             (g "ollama/granite3.2:2b"
                (user "write an introductory email for a job application, limited to at most 100 characters.")
                100 0.3)))

    (print "Done generating candidate emails. Now asking the model to select the best option from the candidates")
    (user "My name is Shiloh. I am a data scientist with 10 years of experience and need an introductory email to apply for a position at IBM in their research department"))
0 0.0)`
    },
    {
      label: "Improved Email Judge/Generator",
      description: "This demo generates better output, at the expense of a more complicated query",
      value: `(g "ollama/granite3.2:2b"
   (cross
    (system "You compute an evaluation score from 0 to 100 that ranks given candidate introductory emails. Better emails are ones that mention specifics, such as names of people and companies. You present a list of the top 3 ordered by their rank showing the score and full content of each.")

    (print "Generate 4 candidate emails in parallel")
    (plus
     (repeat 4
             (g "ollama/granite3.2:2b"
                (cross
                 (system "You compute an evaluation score from 0 to 100 that ranks given candidate introductory emails. Better emails are ones that mention specifics, such as names of people and companies. You present a list of the top 3 ordered by their rank showing the score and full content of each.")
                 (user "write an introductory email for a job application, limited to at most 100 characters.")

                 (user "My name is Shiloh. I am a data scientist with 10 years of experience and need an introductory email to apply for a position at IBM in their research department")
                 )

                100 0.2
                )
             )
     )
    )
   0 0.0
   )`
    }
  ];
  function cd() {
    const [e, t] = w.useState(false), [n, i] = Wi("spnl.demo.select", {
      defaultValue: oi[0].value
    }), r = () => {
      t(!e);
    }, a = (l, c) => {
      console.log("selected", c), i(c), t(false);
    }, o = (l) => m.jsx(as, {
      ref: l,
      onClick: r,
      isExpanded: e,
      style: {
        width: "300px"
      },
      children: (oi.find((c) => c.value === n) || {}).label
    });
    return m.jsx(ns, {
      id: "single-select",
      isOpen: e,
      selected: n,
      onSelect: a,
      onOpenChange: (l) => t(l),
      toggle: o,
      shouldFocusToggleOnSelect: true,
      children: m.jsx(is, {
        children: oi.map((l) => m.jsx(rs, {
          value: l.value,
          description: l.description,
          children: l.label
        }, l.value))
      })
    });
  }
  const ud = {
    name: "PlayIcon",
    height: 512,
    width: 448,
    svgPath: "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z",
    yOffset: 0,
    xOffset: 0
  }, pd = at(ud), dd = {
    name: "ProjectDiagramIcon",
    height: 512,
    width: 640,
    svgPath: "M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z",
    yOffset: 0,
    xOffset: 0
  }, fd = at(dd);
  function md(e) {
    const t = os(), [n] = Wi("spnl.demo.select"), i = [
      m.jsx(yt, {
        icon: m.jsx(pd, {}),
        "aria-label": "Execute query",
        tooltipProps: {
          content: "Execute query"
        },
        onClick: e.onExecuteQuery
      }, "play"),
      m.jsx(yt, {
        icon: m.jsx(fd, {}),
        "aria-label": "Toggle Query Viewer",
        tooltipProps: {
          content: "Toggle Query Viewer"
        },
        onClick: () => t({
          to: "/",
          search: {
            qv: !e.isDrawerOpen
          }
        })
      }, "topology"),
      m.jsx(yt, {
        icon: m.jsx(cd, {}),
        "aria-label": "Demo Select",
        tooltipProps: {
          content: "Select a demo"
        },
        onClick: () => {
        }
      }, "demo")
    ], { setQuery: r } = e;
    return w.useEffect(() => {
      n && r(n);
    }, [
      r,
      n
    ]), m.jsx(il, {
      isCopyEnabled: true,
      isDarkTheme: true,
      isLineNumbersVisible: false,
      isMinimapVisible: false,
      code: n || "",
      headerMainContent: "SPNL Query Editor",
      customControls: i,
      options: {
        fontSize: 14,
        wordWrap: "on"
      },
      onChange: e.setQuery,
      language: We.clojure,
      onEditorDidMount: (a) => {
        a.layout();
      },
      height: "800px"
    });
  }
  function hd(e, t) {
    const n = {};
    return (e[e.length - 1] === "" ? [
      ...e,
      ""
    ] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === false ? "" : " ")).trim();
  }
  const gd = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, xd = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, vd = {};
  function Qr(e, t) {
    return (vd.jsx ? xd : gd).test(e);
  }
  const yd = /[ \t\n\f\r]/g;
  function bd(e) {
    return typeof e == "object" ? e.type === "text" ? Jr(e.value) : false : Jr(e);
  }
  function Jr(e) {
    return e.replace(yd, "") === "";
  }
  class sn {
    constructor(t, n, i) {
      this.normal = n, this.property = t, i && (this.space = i);
    }
  }
  sn.prototype.normal = {};
  sn.prototype.property = {};
  sn.prototype.space = void 0;
  function rl(e, t) {
    const n = {}, i = {};
    for (const r of e) Object.assign(n, r.property), Object.assign(i, r.normal);
    return new sn(n, i, t);
  }
  function Di(e) {
    return e.toLowerCase();
  }
  class He {
    constructor(t, n) {
      this.attribute = n, this.property = t;
    }
  }
  He.prototype.attribute = "";
  He.prototype.booleanish = false;
  He.prototype.boolean = false;
  He.prototype.commaOrSpaceSeparated = false;
  He.prototype.commaSeparated = false;
  He.prototype.defined = false;
  He.prototype.mustUseProperty = false;
  He.prototype.number = false;
  He.prototype.overloadedBoolean = false;
  He.prototype.property = "";
  He.prototype.spaceSeparated = false;
  He.prototype.space = void 0;
  let wd = 0;
  const te = kt(), je = kt(), Mi = kt(), R = kt(), ye = kt(), jt = kt(), Ue = kt();
  function kt() {
    return 2 ** ++wd;
  }
  const zi = Object.freeze(Object.defineProperty({
    __proto__: null,
    boolean: te,
    booleanish: je,
    commaOrSpaceSeparated: Ue,
    commaSeparated: jt,
    number: R,
    overloadedBoolean: Mi,
    spaceSeparated: ye
  }, Symbol.toStringTag, {
    value: "Module"
  })), li = Object.keys(zi);
  class er extends He {
    constructor(t, n, i, r) {
      let a = -1;
      if (super(t, n), Zr(this, "space", r), typeof i == "number") for (; ++a < li.length; ) {
        const o = li[a];
        Zr(this, li[a], (i & zi[o]) === zi[o]);
      }
    }
  }
  er.prototype.defined = true;
  function Zr(e, t, n) {
    n && (e[t] = n);
  }
  function Rt(e) {
    const t = {}, n = {};
    for (const [i, r] of Object.entries(e.properties)) {
      const a = new er(i, e.transform(e.attributes || {}, i), r, e.space);
      e.mustUseProperty && e.mustUseProperty.includes(i) && (a.mustUseProperty = true), t[i] = a, n[Di(i)] = i, n[Di(a.attribute)] = i;
    }
    return new sn(t, n, e.space);
  }
  const al = Rt({
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: je,
      ariaAutoComplete: null,
      ariaBusy: je,
      ariaChecked: je,
      ariaColCount: R,
      ariaColIndex: R,
      ariaColSpan: R,
      ariaControls: ye,
      ariaCurrent: null,
      ariaDescribedBy: ye,
      ariaDetails: null,
      ariaDisabled: je,
      ariaDropEffect: ye,
      ariaErrorMessage: null,
      ariaExpanded: je,
      ariaFlowTo: ye,
      ariaGrabbed: je,
      ariaHasPopup: null,
      ariaHidden: je,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: ye,
      ariaLevel: R,
      ariaLive: null,
      ariaModal: je,
      ariaMultiLine: je,
      ariaMultiSelectable: je,
      ariaOrientation: null,
      ariaOwns: ye,
      ariaPlaceholder: null,
      ariaPosInSet: R,
      ariaPressed: je,
      ariaReadOnly: je,
      ariaRelevant: null,
      ariaRequired: je,
      ariaRoleDescription: ye,
      ariaRowCount: R,
      ariaRowIndex: R,
      ariaRowSpan: R,
      ariaSelected: je,
      ariaSetSize: R,
      ariaSort: null,
      ariaValueMax: R,
      ariaValueMin: R,
      ariaValueNow: R,
      ariaValueText: null,
      role: null
    },
    transform(e, t) {
      return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
    }
  });
  function ol(e, t) {
    return t in e ? e[t] : t;
  }
  function ll(e, t) {
    return ol(e, t.toLowerCase());
  }
  const kd = Rt({
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
      accept: jt,
      acceptCharset: ye,
      accessKey: ye,
      action: null,
      allow: null,
      allowFullScreen: te,
      allowPaymentRequest: te,
      allowUserMedia: te,
      alt: null,
      as: null,
      async: te,
      autoCapitalize: null,
      autoComplete: ye,
      autoFocus: te,
      autoPlay: te,
      blocking: ye,
      capture: null,
      charSet: null,
      checked: te,
      cite: null,
      className: ye,
      cols: R,
      colSpan: null,
      content: null,
      contentEditable: je,
      controls: te,
      controlsList: ye,
      coords: R | jt,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: te,
      defer: te,
      dir: null,
      dirName: null,
      disabled: te,
      download: Mi,
      draggable: je,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: te,
      formTarget: null,
      headers: ye,
      height: R,
      hidden: Mi,
      high: R,
      href: null,
      hrefLang: null,
      htmlFor: ye,
      httpEquiv: ye,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: te,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: te,
      itemId: null,
      itemProp: ye,
      itemRef: ye,
      itemScope: te,
      itemType: ye,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: te,
      low: R,
      manifest: null,
      max: null,
      maxLength: R,
      media: null,
      method: null,
      min: null,
      minLength: R,
      multiple: te,
      muted: te,
      name: null,
      nonce: null,
      noModule: te,
      noValidate: te,
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
      open: te,
      optimum: R,
      pattern: null,
      ping: ye,
      placeholder: null,
      playsInline: te,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: te,
      referrerPolicy: null,
      rel: ye,
      required: te,
      reversed: te,
      rows: R,
      rowSpan: R,
      sandbox: ye,
      scope: null,
      scoped: te,
      seamless: te,
      selected: te,
      shadowRootClonable: te,
      shadowRootDelegatesFocus: te,
      shadowRootMode: null,
      shape: null,
      size: R,
      sizes: null,
      slot: null,
      span: R,
      spellCheck: je,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: R,
      step: null,
      style: null,
      tabIndex: R,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: te,
      useMap: null,
      value: je,
      width: R,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: ye,
      axis: null,
      background: null,
      bgColor: null,
      border: R,
      borderColor: null,
      bottomMargin: R,
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
      compact: te,
      declare: te,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: R,
      leftMargin: R,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: R,
      marginWidth: R,
      noResize: te,
      noHref: te,
      noShade: te,
      noWrap: te,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: R,
      rules: null,
      scheme: null,
      scrolling: je,
      standby: null,
      summary: null,
      text: null,
      topMargin: R,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: R,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: te,
      disableRemotePlayback: te,
      prefix: null,
      property: null,
      results: R,
      security: null,
      unselectable: null
    },
    space: "html",
    transform: ll
  }), Cd = Rt({
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
      about: Ue,
      accentHeight: R,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: R,
      amplitude: R,
      arabicForm: null,
      ascent: R,
      attributeName: null,
      attributeType: null,
      azimuth: R,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: R,
      by: null,
      calcMode: null,
      capHeight: R,
      className: ye,
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
      descent: R,
      diffuseConstant: R,
      direction: null,
      display: null,
      dur: null,
      divisor: R,
      dominantBaseline: null,
      download: te,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: R,
      enableBackground: null,
      end: null,
      event: null,
      exponent: R,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: R,
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
      g1: jt,
      g2: jt,
      glyphName: jt,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: R,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: R,
      horizOriginX: R,
      horizOriginY: R,
      id: null,
      ideographic: R,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: R,
      k: R,
      k1: R,
      k2: R,
      k3: R,
      k4: R,
      kernelMatrix: Ue,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: R,
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
      mediaSize: R,
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
      overlinePosition: R,
      overlineThickness: R,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: R,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: ye,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: R,
      pointsAtY: R,
      pointsAtZ: R,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: Ue,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: Ue,
      rev: Ue,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: Ue,
      requiredFeatures: Ue,
      requiredFonts: Ue,
      requiredFormats: Ue,
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
      specularConstant: R,
      specularExponent: R,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: R,
      strikethroughThickness: R,
      string: null,
      stroke: null,
      strokeDashArray: Ue,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: R,
      strokeOpacity: R,
      strokeWidth: null,
      style: null,
      surfaceScale: R,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: Ue,
      tabIndex: R,
      tableValues: null,
      target: null,
      targetX: R,
      targetY: R,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: Ue,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: R,
      underlineThickness: R,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: R,
      values: null,
      vAlphabetic: R,
      vMathematical: R,
      vectorEffect: null,
      vHanging: R,
      vIdeographic: R,
      version: null,
      vertAdvY: R,
      vertOriginX: R,
      vertOriginY: R,
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
      xHeight: R,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null
    },
    space: "svg",
    transform: ol
  }), sl = Rt({
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
  }), cl = Rt({
    attributes: {
      xmlnsxlink: "xmlns:xlink"
    },
    properties: {
      xmlnsXLink: null,
      xmlns: null
    },
    space: "xmlns",
    transform: ll
  }), ul = Rt({
    properties: {
      xmlBase: null,
      xmlLang: null,
      xmlSpace: null
    },
    space: "xml",
    transform(e, t) {
      return "xml:" + t.slice(3).toLowerCase();
    }
  }), Od = {
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
  }, Sd = /[A-Z]/g, ea = /-[a-z]/g, Ed = /^data[-\w.:]+$/i;
  function _d(e, t) {
    const n = Di(t);
    let i = t, r = He;
    if (n in e.normal) return e.property[e.normal[n]];
    if (n.length > 4 && n.slice(0, 4) === "data" && Ed.test(t)) {
      if (t.charAt(4) === "-") {
        const a = t.slice(5).replace(ea, Td);
        i = "data" + a.charAt(0).toUpperCase() + a.slice(1);
      } else {
        const a = t.slice(4);
        if (!ea.test(a)) {
          let o = a.replace(Sd, jd);
          o.charAt(0) !== "-" && (o = "-" + o), t = "data" + o;
        }
      }
      r = er;
    }
    return new r(i, t);
  }
  function jd(e) {
    return "-" + e.toLowerCase();
  }
  function Td(e) {
    return e.charAt(1).toUpperCase();
  }
  const Id = rl([
    al,
    kd,
    sl,
    cl,
    ul
  ], "html"), tr = rl([
    al,
    Cd,
    sl,
    cl,
    ul
  ], "svg");
  function Pd(e) {
    return e.join(" ").trim();
  }
  var St = {}, si, ta;
  function Nd() {
    if (ta) return si;
    ta = 1;
    var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, n = /^\s*/, i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, r = /^:\s*/, a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, o = /^[;\s]*/, l = /^\s+|\s+$/g, c = `
`, s = "/", u = "*", p = "", f = "comment", d = "declaration";
    si = function(k, E) {
      if (typeof k != "string") throw new TypeError("First argument must be a string");
      if (!k) return [];
      E = E || {};
      var C = 1, _ = 1;
      function T(x) {
        var v = x.match(t);
        v && (C += v.length);
        var S = x.lastIndexOf(c);
        _ = ~S ? x.length - S : _ + x.length;
      }
      function A() {
        var x = {
          line: C,
          column: _
        };
        return function(v) {
          return v.position = new q(x), V(), v;
        };
      }
      function q(x) {
        this.start = x, this.end = {
          line: C,
          column: _
        }, this.source = E.source;
      }
      q.prototype.content = k;
      function O(x) {
        var v = new Error(E.source + ":" + C + ":" + _ + ": " + x);
        if (v.reason = x, v.filename = E.source, v.line = C, v.column = _, v.source = k, !E.silent) throw v;
      }
      function L(x) {
        var v = x.exec(k);
        if (v) {
          var S = v[0];
          return T(S), k = k.slice(S.length), v;
        }
      }
      function V() {
        L(n);
      }
      function D(x) {
        var v;
        for (x = x || []; v = M(); ) v !== false && x.push(v);
        return x;
      }
      function M() {
        var x = A();
        if (!(s != k.charAt(0) || u != k.charAt(1))) {
          for (var v = 2; p != k.charAt(v) && (u != k.charAt(v) || s != k.charAt(v + 1)); ) ++v;
          if (v += 2, p === k.charAt(v - 1)) return O("End of comment missing");
          var S = k.slice(2, v - 2);
          return _ += 2, T(S), k = k.slice(v), _ += 2, x({
            type: f,
            comment: S
          });
        }
      }
      function F() {
        var x = A(), v = L(i);
        if (v) {
          if (M(), !L(r)) return O("property missing ':'");
          var S = L(a), z = x({
            type: d,
            property: y(v[0].replace(e, p)),
            value: S ? y(S[0].replace(e, p)) : p
          });
          return L(o), z;
        }
      }
      function I() {
        var x = [];
        D(x);
        for (var v; v = F(); ) v !== false && (x.push(v), D(x));
        return x;
      }
      return V(), I();
    };
    function y(k) {
      return k ? k.replace(l, p) : p;
    }
    return si;
  }
  var na;
  function Rd() {
    if (na) return St;
    na = 1;
    var e = St && St.__importDefault || function(i) {
      return i && i.__esModule ? i : {
        default: i
      };
    };
    Object.defineProperty(St, "__esModule", {
      value: true
    }), St.default = n;
    var t = e(Nd());
    function n(i, r) {
      var a = null;
      if (!i || typeof i != "string") return a;
      var o = (0, t.default)(i), l = typeof r == "function";
      return o.forEach(function(c) {
        if (c.type === "declaration") {
          var s = c.property, u = c.value;
          l ? r(s, u, c) : u && (a = a || {}, a[s] = u);
        }
      }), a;
    }
    return St;
  }
  var Ft = {}, ia;
  function Ad() {
    if (ia) return Ft;
    ia = 1, Object.defineProperty(Ft, "__esModule", {
      value: true
    }), Ft.camelCase = void 0;
    var e = /^--[a-zA-Z0-9_-]+$/, t = /-([a-z])/g, n = /^[^-]+$/, i = /^-(webkit|moz|ms|o|khtml)-/, r = /^-(ms)-/, a = function(s) {
      return !s || n.test(s) || e.test(s);
    }, o = function(s, u) {
      return u.toUpperCase();
    }, l = function(s, u) {
      return "".concat(u, "-");
    }, c = function(s, u) {
      return u === void 0 && (u = {}), a(s) ? s : (s = s.toLowerCase(), u.reactCompat ? s = s.replace(r, l) : s = s.replace(i, l), s.replace(t, o));
    };
    return Ft.camelCase = c, Ft;
  }
  var Lt, ra;
  function Dd() {
    if (ra) return Lt;
    ra = 1;
    var e = Lt && Lt.__importDefault || function(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }, t = e(Rd()), n = Ad();
    function i(r, a) {
      var o = {};
      return !r || typeof r != "string" || (0, t.default)(r, function(l, c) {
        l && c && (o[(0, n.camelCase)(l, a)] = c);
      }), o;
    }
    return i.default = i, Lt = i, Lt;
  }
  var Md = Dd();
  const zd = Mn(Md), pl = dl("end"), nr = dl("start");
  function dl(e) {
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
  function Fd(e) {
    const t = nr(e), n = pl(e);
    if (t && n) return {
      start: t,
      end: n
    };
  }
  function Yt(e) {
    return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? aa(e.position) : "start" in e || "end" in e ? aa(e) : "line" in e || "column" in e ? Fi(e) : "";
  }
  function Fi(e) {
    return oa(e && e.line) + ":" + oa(e && e.column);
  }
  function aa(e) {
    return Fi(e && e.start) + "-" + Fi(e && e.end);
  }
  function oa(e) {
    return e && typeof e == "number" ? e : 1;
  }
  class Re extends Error {
    constructor(t, n, i) {
      super(), typeof n == "string" && (i = n, n = void 0);
      let r = "", a = {}, o = false;
      if (n && ("line" in n && "column" in n ? a = {
        place: n
      } : "start" in n && "end" in n ? a = {
        place: n
      } : "type" in n ? a = {
        ancestors: [
          n
        ],
        place: n.position
      } : a = {
        ...n
      }), typeof t == "string" ? r = t : !a.cause && t && (o = true, r = t.message, a.cause = t), !a.ruleId && !a.source && typeof i == "string") {
        const c = i.indexOf(":");
        c === -1 ? a.ruleId = i : (a.source = i.slice(0, c), a.ruleId = i.slice(c + 1));
      }
      if (!a.place && a.ancestors && a.ancestors) {
        const c = a.ancestors[a.ancestors.length - 1];
        c && (a.place = c.position);
      }
      const l = a.place && "start" in a.place ? a.place.start : a.place;
      this.ancestors = a.ancestors || void 0, this.cause = a.cause || void 0, this.column = l ? l.column : void 0, this.fatal = void 0, this.file, this.message = r, this.line = l ? l.line : void 0, this.name = Yt(a.place) || "1:1", this.place = a.place || void 0, this.reason = this.message, this.ruleId = a.ruleId || void 0, this.source = a.source || void 0, this.stack = o && a.cause && typeof a.cause.stack == "string" ? a.cause.stack : "", this.actual, this.expected, this.note, this.url;
    }
  }
  Re.prototype.file = "";
  Re.prototype.name = "";
  Re.prototype.reason = "";
  Re.prototype.message = "";
  Re.prototype.stack = "";
  Re.prototype.column = void 0;
  Re.prototype.line = void 0;
  Re.prototype.ancestors = void 0;
  Re.prototype.cause = void 0;
  Re.prototype.fatal = void 0;
  Re.prototype.place = void 0;
  Re.prototype.ruleId = void 0;
  Re.prototype.source = void 0;
  const ir = {}.hasOwnProperty, Ld = /* @__PURE__ */ new Map(), Bd = /[A-Z]/g, Hd = /* @__PURE__ */ new Set([
    "table",
    "tbody",
    "thead",
    "tfoot",
    "tr"
  ]), qd = /* @__PURE__ */ new Set([
    "td",
    "th"
  ]), fl = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
  function $d(e, t) {
    if (!t || t.Fragment === void 0) throw new TypeError("Expected `Fragment` in options");
    const n = t.filePath || void 0;
    let i;
    if (t.development) {
      if (typeof t.jsxDEV != "function") throw new TypeError("Expected `jsxDEV` in options when `development: true`");
      i = Qd(n, t.jsxDEV);
    } else {
      if (typeof t.jsx != "function") throw new TypeError("Expected `jsx` in production options");
      if (typeof t.jsxs != "function") throw new TypeError("Expected `jsxs` in production options");
      i = Yd(n, t.jsx, t.jsxs);
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
      schema: t.space === "svg" ? tr : Id,
      stylePropertyNameCase: t.stylePropertyNameCase || "dom",
      tableCellAlignToStyle: t.tableCellAlignToStyle !== false
    }, a = ml(r, e, void 0);
    return a && typeof a != "string" ? a : r.create(e, r.Fragment, {
      children: a || void 0
    }, void 0);
  }
  function ml(e, t, n) {
    if (t.type === "element") return Vd(e, t, n);
    if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") return Ud(e, t);
    if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") return Xd(e, t, n);
    if (t.type === "mdxjsEsm") return Wd(e, t);
    if (t.type === "root") return Kd(e, t, n);
    if (t.type === "text") return Gd(e, t);
  }
  function Vd(e, t, n) {
    const i = e.schema;
    let r = i;
    t.tagName.toLowerCase() === "svg" && i.space === "html" && (r = tr, e.schema = r), e.ancestors.push(t);
    const a = gl(e, t.tagName, false), o = Jd(e, t);
    let l = ar(e, t);
    return Hd.has(t.tagName) && (l = l.filter(function(c) {
      return typeof c == "string" ? !bd(c) : true;
    })), hl(e, o, a, t), rr(o, l), e.ancestors.pop(), e.schema = i, e.create(t, a, o, n);
  }
  function Ud(e, t) {
    if (t.data && t.data.estree && e.evaluater) {
      const i = t.data.estree.body[0];
      return i.type, e.evaluater.evaluateExpression(i.expression);
    }
    on(e, t.position);
  }
  function Wd(e, t) {
    if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
    on(e, t.position);
  }
  function Xd(e, t, n) {
    const i = e.schema;
    let r = i;
    t.name === "svg" && i.space === "html" && (r = tr, e.schema = r), e.ancestors.push(t);
    const a = t.name === null ? e.Fragment : gl(e, t.name, true), o = Zd(e, t), l = ar(e, t);
    return hl(e, o, a, t), rr(o, l), e.ancestors.pop(), e.schema = i, e.create(t, a, o, n);
  }
  function Kd(e, t, n) {
    const i = {};
    return rr(i, ar(e, t)), e.create(t, e.Fragment, i, n);
  }
  function Gd(e, t) {
    return t.value;
  }
  function hl(e, t, n, i) {
    typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = i);
  }
  function rr(e, t) {
    if (t.length > 0) {
      const n = t.length > 1 ? t : t[0];
      n && (e.children = n);
    }
  }
  function Yd(e, t, n) {
    return i;
    function i(r, a, o, l) {
      const s = Array.isArray(o.children) ? n : t;
      return l ? s(a, o, l) : s(a, o);
    }
  }
  function Qd(e, t) {
    return n;
    function n(i, r, a, o) {
      const l = Array.isArray(a.children), c = nr(i);
      return t(r, a, o, l, {
        columnNumber: c ? c.column - 1 : void 0,
        fileName: e,
        lineNumber: c ? c.line : void 0
      }, void 0);
    }
  }
  function Jd(e, t) {
    const n = {};
    let i, r;
    for (r in t.properties) if (r !== "children" && ir.call(t.properties, r)) {
      const a = ef(e, r, t.properties[r]);
      if (a) {
        const [o, l] = a;
        e.tableCellAlignToStyle && o === "align" && typeof l == "string" && qd.has(t.tagName) ? i = l : n[o] = l;
      }
    }
    if (i) {
      const a = n.style || (n.style = {});
      a[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = i;
    }
    return n;
  }
  function Zd(e, t) {
    const n = {};
    for (const i of t.attributes) if (i.type === "mdxJsxExpressionAttribute") if (i.data && i.data.estree && e.evaluater) {
      const a = i.data.estree.body[0];
      a.type;
      const o = a.expression;
      o.type;
      const l = o.properties[0];
      l.type, Object.assign(n, e.evaluater.evaluateExpression(l.argument));
    } else on(e, t.position);
    else {
      const r = i.name;
      let a;
      if (i.value && typeof i.value == "object") if (i.value.data && i.value.data.estree && e.evaluater) {
        const l = i.value.data.estree.body[0];
        l.type, a = e.evaluater.evaluateExpression(l.expression);
      } else on(e, t.position);
      else a = i.value === null ? true : i.value;
      n[r] = a;
    }
    return n;
  }
  function ar(e, t) {
    const n = [];
    let i = -1;
    const r = e.passKeys ? /* @__PURE__ */ new Map() : Ld;
    for (; ++i < t.children.length; ) {
      const a = t.children[i];
      let o;
      if (e.passKeys) {
        const c = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
        if (c) {
          const s = r.get(c) || 0;
          o = c + "-" + s, r.set(c, s + 1);
        }
      }
      const l = ml(e, a, o);
      l !== void 0 && n.push(l);
    }
    return n;
  }
  function ef(e, t, n) {
    const i = _d(e.schema, t);
    if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
      if (Array.isArray(n) && (n = i.commaSeparated ? hd(n) : Pd(n)), i.property === "style") {
        let r = typeof n == "object" ? n : tf(e, String(n));
        return e.stylePropertyNameCase === "css" && (r = nf(r)), [
          "style",
          r
        ];
      }
      return [
        e.elementAttributeNameCase === "react" && i.space ? Od[i.property] || i.property : i.attribute,
        n
      ];
    }
  }
  function tf(e, t) {
    try {
      return zd(t, {
        reactCompat: true
      });
    } catch (n) {
      if (e.ignoreInvalidStyle) return {};
      const i = n, r = new Re("Cannot parse `style` attribute", {
        ancestors: e.ancestors,
        cause: i,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime"
      });
      throw r.file = e.filePath || void 0, r.url = fl + "#cannot-parse-style-attribute", r;
    }
  }
  function gl(e, t, n) {
    let i;
    if (!n) i = {
      type: "Literal",
      value: t
    };
    else if (t.includes(".")) {
      const r = t.split(".");
      let a = -1, o;
      for (; ++a < r.length; ) {
        const l = Qr(r[a]) ? {
          type: "Identifier",
          name: r[a]
        } : {
          type: "Literal",
          value: r[a]
        };
        o = o ? {
          type: "MemberExpression",
          object: o,
          property: l,
          computed: !!(a && l.type === "Literal"),
          optional: false
        } : l;
      }
      i = o;
    } else i = Qr(t) && !/^[a-z]/.test(t) ? {
      type: "Identifier",
      name: t
    } : {
      type: "Literal",
      value: t
    };
    if (i.type === "Literal") {
      const r = i.value;
      return ir.call(e.components, r) ? e.components[r] : r;
    }
    if (e.evaluater) return e.evaluater.evaluateExpression(i);
    on(e);
  }
  function on(e, t) {
    const n = new Re("Cannot handle MDX estrees without `createEvaluater`", {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    });
    throw n.file = e.filePath || void 0, n.url = fl + "#cannot-handle-mdx-estrees-without-createevaluater", n;
  }
  function nf(e) {
    const t = {};
    let n;
    for (n in e) ir.call(e, n) && (t[rf(n)] = e[n]);
    return t;
  }
  function rf(e) {
    let t = e.replace(Bd, af);
    return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
  }
  function af(e) {
    return "-" + e.toLowerCase();
  }
  const ci = {
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
  }, of = {};
  function lf(e, t) {
    const n = of, i = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : true, r = typeof n.includeHtml == "boolean" ? n.includeHtml : true;
    return xl(e, i, r);
  }
  function xl(e, t, n) {
    if (sf(e)) {
      if ("value" in e) return e.type === "html" && !n ? "" : e.value;
      if (t && "alt" in e && e.alt) return e.alt;
      if ("children" in e) return la(e.children, t, n);
    }
    return Array.isArray(e) ? la(e, t, n) : "";
  }
  function la(e, t, n) {
    const i = [];
    let r = -1;
    for (; ++r < e.length; ) i[r] = xl(e[r], t, n);
    return i.join("");
  }
  function sf(e) {
    return !!(e && typeof e == "object");
  }
  const sa = document.createElement("i");
  function or(e) {
    const t = "&" + e + ";";
    sa.innerHTML = t;
    const n = sa.textContent;
    return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? false : n;
  }
  function rt(e, t, n, i) {
    const r = e.length;
    let a = 0, o;
    if (t < 0 ? t = -t > r ? 0 : r + t : t = t > r ? r : t, n = n > 0 ? n : 0, i.length < 1e4) o = Array.from(i), o.unshift(t, n), e.splice(...o);
    else for (n && e.splice(t, n); a < i.length; ) o = i.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
  }
  function Qe(e, t) {
    return e.length > 0 ? (rt(e, e.length, 0, t), e) : t;
  }
  const ca = {}.hasOwnProperty;
  function cf(e) {
    const t = {};
    let n = -1;
    for (; ++n < e.length; ) uf(t, e[n]);
    return t;
  }
  function uf(e, t) {
    let n;
    for (n in t) {
      const r = (ca.call(e, n) ? e[n] : void 0) || (e[n] = {}), a = t[n];
      let o;
      if (a) for (o in a) {
        ca.call(r, o) || (r[o] = []);
        const l = a[o];
        pf(r[o], Array.isArray(l) ? l : l ? [
          l
        ] : []);
      }
    }
  }
  function pf(e, t) {
    let n = -1;
    const i = [];
    for (; ++n < t.length; ) (t[n].add === "after" ? e : i).push(t[n]);
    rt(e, 0, 0, i);
  }
  function vl(e, t) {
    const n = Number.parseInt(e, t);
    return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || n > 1114111 ? "\uFFFD" : String.fromCodePoint(n);
  }
  function Tt(e) {
    return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
  }
  const it = mt(/[A-Za-z]/), Ke = mt(/[\dA-Za-z]/), df = mt(/[#-'*+\--9=?A-Z^-~]/);
  function Li(e) {
    return e !== null && (e < 32 || e === 127);
  }
  const Bi = mt(/\d/), ff = mt(/[\dA-Fa-f]/), mf = mt(/[!-/:-@[-`{-~]/);
  function Q(e) {
    return e !== null && e < -2;
  }
  function Be(e) {
    return e !== null && (e < 0 || e === 32);
  }
  function se(e) {
    return e === -2 || e === -1 || e === 32;
  }
  const hf = mt(new RegExp("\\p{P}|\\p{S}", "u")), gf = mt(/\s/);
  function mt(e) {
    return t;
    function t(n) {
      return n !== null && n > -1 && e.test(String.fromCharCode(n));
    }
  }
  function At(e) {
    const t = [];
    let n = -1, i = 0, r = 0;
    for (; ++n < e.length; ) {
      const a = e.charCodeAt(n);
      let o = "";
      if (a === 37 && Ke(e.charCodeAt(n + 1)) && Ke(e.charCodeAt(n + 2))) r = 2;
      else if (a < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
      else if (a > 55295 && a < 57344) {
        const l = e.charCodeAt(n + 1);
        a < 56320 && l > 56319 && l < 57344 ? (o = String.fromCharCode(a, l), r = 1) : o = "\uFFFD";
      } else o = String.fromCharCode(a);
      o && (t.push(e.slice(i, n), encodeURIComponent(o)), i = n + r + 1, o = ""), r && (n += r, r = 0);
    }
    return t.join("") + e.slice(i);
  }
  function be(e, t, n, i) {
    const r = i ? i - 1 : Number.POSITIVE_INFINITY;
    let a = 0;
    return o;
    function o(c) {
      return se(c) ? (e.enter(n), l(c)) : t(c);
    }
    function l(c) {
      return se(c) && a++ < r ? (e.consume(c), l) : (e.exit(n), t(c));
    }
  }
  const xf = {
    tokenize: vf
  };
  function vf(e) {
    const t = e.attempt(this.parser.constructs.contentInitial, i, r);
    let n;
    return t;
    function i(l) {
      if (l === null) {
        e.consume(l);
        return;
      }
      return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), be(e, t, "linePrefix");
    }
    function r(l) {
      return e.enter("paragraph"), a(l);
    }
    function a(l) {
      const c = e.enter("chunkText", {
        contentType: "text",
        previous: n
      });
      return n && (n.next = c), n = c, o(l);
    }
    function o(l) {
      if (l === null) {
        e.exit("chunkText"), e.exit("paragraph"), e.consume(l);
        return;
      }
      return Q(l) ? (e.consume(l), e.exit("chunkText"), a) : (e.consume(l), o);
    }
  }
  const yf = {
    tokenize: bf
  }, ua = {
    tokenize: wf
  };
  function bf(e) {
    const t = this, n = [];
    let i = 0, r, a, o;
    return l;
    function l(T) {
      if (i < n.length) {
        const A = n[i];
        return t.containerState = A[1], e.attempt(A[0].continuation, c, s)(T);
      }
      return s(T);
    }
    function c(T) {
      if (i++, t.containerState._closeFlow) {
        t.containerState._closeFlow = void 0, r && _();
        const A = t.events.length;
        let q = A, O;
        for (; q--; ) if (t.events[q][0] === "exit" && t.events[q][1].type === "chunkFlow") {
          O = t.events[q][1].end;
          break;
        }
        C(i);
        let L = A;
        for (; L < t.events.length; ) t.events[L][1].end = {
          ...O
        }, L++;
        return rt(t.events, q + 1, 0, t.events.slice(A)), t.events.length = L, s(T);
      }
      return l(T);
    }
    function s(T) {
      if (i === n.length) {
        if (!r) return f(T);
        if (r.currentConstruct && r.currentConstruct.concrete) return y(T);
        t.interrupt = !!(r.currentConstruct && !r._gfmTableDynamicInterruptHack);
      }
      return t.containerState = {}, e.check(ua, u, p)(T);
    }
    function u(T) {
      return r && _(), C(i), f(T);
    }
    function p(T) {
      return t.parser.lazy[t.now().line] = i !== n.length, o = t.now().offset, y(T);
    }
    function f(T) {
      return t.containerState = {}, e.attempt(ua, d, y)(T);
    }
    function d(T) {
      return i++, n.push([
        t.currentConstruct,
        t.containerState
      ]), f(T);
    }
    function y(T) {
      if (T === null) {
        r && _(), C(0), e.consume(T);
        return;
      }
      return r = r || t.parser.flow(t.now()), e.enter("chunkFlow", {
        _tokenizer: r,
        contentType: "flow",
        previous: a
      }), k(T);
    }
    function k(T) {
      if (T === null) {
        E(e.exit("chunkFlow"), true), C(0), e.consume(T);
        return;
      }
      return Q(T) ? (e.consume(T), E(e.exit("chunkFlow")), i = 0, t.interrupt = void 0, l) : (e.consume(T), k);
    }
    function E(T, A) {
      const q = t.sliceStream(T);
      if (A && q.push(null), T.previous = a, a && (a.next = T), a = T, r.defineSkip(T.start), r.write(q), t.parser.lazy[T.start.line]) {
        let O = r.events.length;
        for (; O--; ) if (r.events[O][1].start.offset < o && (!r.events[O][1].end || r.events[O][1].end.offset > o)) return;
        const L = t.events.length;
        let V = L, D, M;
        for (; V--; ) if (t.events[V][0] === "exit" && t.events[V][1].type === "chunkFlow") {
          if (D) {
            M = t.events[V][1].end;
            break;
          }
          D = true;
        }
        for (C(i), O = L; O < t.events.length; ) t.events[O][1].end = {
          ...M
        }, O++;
        rt(t.events, V + 1, 0, t.events.slice(L)), t.events.length = O;
      }
    }
    function C(T) {
      let A = n.length;
      for (; A-- > T; ) {
        const q = n[A];
        t.containerState = q[1], q[0].exit.call(t, e);
      }
      n.length = T;
    }
    function _() {
      r.write([
        null
      ]), a = void 0, r = void 0, t.containerState._closeFlow = void 0;
    }
  }
  function wf(e, t, n) {
    return be(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
  }
  function pa(e) {
    if (e === null || Be(e) || gf(e)) return 1;
    if (hf(e)) return 2;
  }
  function lr(e, t, n) {
    const i = [];
    let r = -1;
    for (; ++r < e.length; ) {
      const a = e[r].resolveAll;
      a && !i.includes(a) && (t = a(t, n), i.push(a));
    }
    return t;
  }
  const Hi = {
    name: "attention",
    resolveAll: kf,
    tokenize: Cf
  };
  function kf(e, t) {
    let n = -1, i, r, a, o, l, c, s, u;
    for (; ++n < e.length; ) if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (i = n; i--; ) if (e[i][0] === "exit" && e[i][1].type === "attentionSequence" && e[i][1]._open && t.sliceSerialize(e[i][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
        if ((e[i][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[i][1].end.offset - e[i][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
        c = e[i][1].end.offset - e[i][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
        const p = {
          ...e[i][1].end
        }, f = {
          ...e[n][1].start
        };
        da(p, -c), da(f, c), o = {
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
        }, a = {
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
            ...o.start
          },
          end: {
            ...l.end
          }
        }, e[i][1].end = {
          ...o.start
        }, e[n][1].start = {
          ...l.end
        }, s = [], e[i][1].end.offset - e[i][1].start.offset && (s = Qe(s, [
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
        ])), s = Qe(s, [
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
            "enter",
            a,
            t
          ]
        ]), s = Qe(s, lr(t.parser.constructs.insideSpan.null, e.slice(i + 1, n), t)), s = Qe(s, [
          [
            "exit",
            a,
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
        ]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, s = Qe(s, [
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
        ])) : u = 0, rt(e, i - 1, n - i + 3, s), n = i + s.length - u - 2;
        break;
      }
    }
    for (n = -1; ++n < e.length; ) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
    return e;
  }
  function Cf(e, t) {
    const n = this.parser.constructs.attentionMarkers.null, i = this.previous, r = pa(i);
    let a;
    return o;
    function o(c) {
      return a = c, e.enter("attentionSequence"), l(c);
    }
    function l(c) {
      if (c === a) return e.consume(c), l;
      const s = e.exit("attentionSequence"), u = pa(c), p = !u || u === 2 && r || n.includes(c), f = !r || r === 2 && u || n.includes(i);
      return s._open = !!(a === 42 ? p : p && (r || !f)), s._close = !!(a === 42 ? f : f && (u || !p)), t(c);
    }
  }
  function da(e, t) {
    e.column += t, e.offset += t, e._bufferIndex += t;
  }
  const Of = {
    name: "autolink",
    tokenize: Sf
  };
  function Sf(e, t, n) {
    let i = 0;
    return r;
    function r(d) {
      return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
    }
    function a(d) {
      return it(d) ? (e.consume(d), o) : d === 64 ? n(d) : s(d);
    }
    function o(d) {
      return d === 43 || d === 45 || d === 46 || Ke(d) ? (i = 1, l(d)) : s(d);
    }
    function l(d) {
      return d === 58 ? (e.consume(d), i = 0, c) : (d === 43 || d === 45 || d === 46 || Ke(d)) && i++ < 32 ? (e.consume(d), l) : (i = 0, s(d));
    }
    function c(d) {
      return d === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.exit("autolink"), t) : d === null || d === 32 || d === 60 || Li(d) ? n(d) : (e.consume(d), c);
    }
    function s(d) {
      return d === 64 ? (e.consume(d), u) : df(d) ? (e.consume(d), s) : n(d);
    }
    function u(d) {
      return Ke(d) ? p(d) : n(d);
    }
    function p(d) {
      return d === 46 ? (e.consume(d), i = 0, u) : d === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.exit("autolink"), t) : f(d);
    }
    function f(d) {
      if ((d === 45 || Ke(d)) && i++ < 63) {
        const y = d === 45 ? f : p;
        return e.consume(d), y;
      }
      return n(d);
    }
  }
  const Bn = {
    partial: true,
    tokenize: Ef
  };
  function Ef(e, t, n) {
    return i;
    function i(a) {
      return se(a) ? be(e, r, "linePrefix")(a) : r(a);
    }
    function r(a) {
      return a === null || Q(a) ? t(a) : n(a);
    }
  }
  const yl = {
    continuation: {
      tokenize: jf
    },
    exit: Tf,
    name: "blockQuote",
    tokenize: _f
  };
  function _f(e, t, n) {
    const i = this;
    return r;
    function r(o) {
      if (o === 62) {
        const l = i.containerState;
        return l.open || (e.enter("blockQuote", {
          _container: true
        }), l.open = true), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(o), e.exit("blockQuoteMarker"), a;
      }
      return n(o);
    }
    function a(o) {
      return se(o) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(o), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(o));
    }
  }
  function jf(e, t, n) {
    const i = this;
    return r;
    function r(o) {
      return se(o) ? be(e, a, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o) : a(o);
    }
    function a(o) {
      return e.attempt(yl, t, n)(o);
    }
  }
  function Tf(e) {
    e.exit("blockQuote");
  }
  const bl = {
    name: "characterEscape",
    tokenize: If
  };
  function If(e, t, n) {
    return i;
    function i(a) {
      return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(a), e.exit("escapeMarker"), r;
    }
    function r(a) {
      return mf(a) ? (e.enter("characterEscapeValue"), e.consume(a), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(a);
    }
  }
  const wl = {
    name: "characterReference",
    tokenize: Pf
  };
  function Pf(e, t, n) {
    const i = this;
    let r = 0, a, o;
    return l;
    function l(p) {
      return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(p), e.exit("characterReferenceMarker"), c;
    }
    function c(p) {
      return p === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(p), e.exit("characterReferenceMarkerNumeric"), s) : (e.enter("characterReferenceValue"), a = 31, o = Ke, u(p));
    }
    function s(p) {
      return p === 88 || p === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(p), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = ff, u) : (e.enter("characterReferenceValue"), a = 7, o = Bi, u(p));
    }
    function u(p) {
      if (p === 59 && r) {
        const f = e.exit("characterReferenceValue");
        return o === Ke && !or(i.sliceSerialize(f)) ? n(p) : (e.enter("characterReferenceMarker"), e.consume(p), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
      }
      return o(p) && r++ < a ? (e.consume(p), u) : n(p);
    }
  }
  const fa = {
    partial: true,
    tokenize: Rf
  }, ma = {
    concrete: true,
    name: "codeFenced",
    tokenize: Nf
  };
  function Nf(e, t, n) {
    const i = this, r = {
      partial: true,
      tokenize: q
    };
    let a = 0, o = 0, l;
    return c;
    function c(O) {
      return s(O);
    }
    function s(O) {
      const L = i.events[i.events.length - 1];
      return a = L && L[1].type === "linePrefix" ? L[2].sliceSerialize(L[1], true).length : 0, l = O, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u(O);
    }
    function u(O) {
      return O === l ? (o++, e.consume(O), u) : o < 3 ? n(O) : (e.exit("codeFencedFenceSequence"), se(O) ? be(e, p, "whitespace")(O) : p(O));
    }
    function p(O) {
      return O === null || Q(O) ? (e.exit("codeFencedFence"), i.interrupt ? t(O) : e.check(fa, k, A)(O)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
        contentType: "string"
      }), f(O));
    }
    function f(O) {
      return O === null || Q(O) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), p(O)) : se(O) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), be(e, d, "whitespace")(O)) : O === 96 && O === l ? n(O) : (e.consume(O), f);
    }
    function d(O) {
      return O === null || Q(O) ? p(O) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
        contentType: "string"
      }), y(O));
    }
    function y(O) {
      return O === null || Q(O) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), p(O)) : O === 96 && O === l ? n(O) : (e.consume(O), y);
    }
    function k(O) {
      return e.attempt(r, A, E)(O);
    }
    function E(O) {
      return e.enter("lineEnding"), e.consume(O), e.exit("lineEnding"), C;
    }
    function C(O) {
      return a > 0 && se(O) ? be(e, _, "linePrefix", a + 1)(O) : _(O);
    }
    function _(O) {
      return O === null || Q(O) ? e.check(fa, k, A)(O) : (e.enter("codeFlowValue"), T(O));
    }
    function T(O) {
      return O === null || Q(O) ? (e.exit("codeFlowValue"), _(O)) : (e.consume(O), T);
    }
    function A(O) {
      return e.exit("codeFenced"), t(O);
    }
    function q(O, L, V) {
      let D = 0;
      return M;
      function M(S) {
        return O.enter("lineEnding"), O.consume(S), O.exit("lineEnding"), F;
      }
      function F(S) {
        return O.enter("codeFencedFence"), se(S) ? be(O, I, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(S) : I(S);
      }
      function I(S) {
        return S === l ? (O.enter("codeFencedFenceSequence"), x(S)) : V(S);
      }
      function x(S) {
        return S === l ? (D++, O.consume(S), x) : D >= o ? (O.exit("codeFencedFenceSequence"), se(S) ? be(O, v, "whitespace")(S) : v(S)) : V(S);
      }
      function v(S) {
        return S === null || Q(S) ? (O.exit("codeFencedFence"), L(S)) : V(S);
      }
    }
  }
  function Rf(e, t, n) {
    const i = this;
    return r;
    function r(o) {
      return o === null ? n(o) : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), a);
    }
    function a(o) {
      return i.parser.lazy[i.now().line] ? n(o) : t(o);
    }
  }
  const ui = {
    name: "codeIndented",
    tokenize: Df
  }, Af = {
    partial: true,
    tokenize: Mf
  };
  function Df(e, t, n) {
    const i = this;
    return r;
    function r(s) {
      return e.enter("codeIndented"), be(e, a, "linePrefix", 5)(s);
    }
    function a(s) {
      const u = i.events[i.events.length - 1];
      return u && u[1].type === "linePrefix" && u[2].sliceSerialize(u[1], true).length >= 4 ? o(s) : n(s);
    }
    function o(s) {
      return s === null ? c(s) : Q(s) ? e.attempt(Af, o, c)(s) : (e.enter("codeFlowValue"), l(s));
    }
    function l(s) {
      return s === null || Q(s) ? (e.exit("codeFlowValue"), o(s)) : (e.consume(s), l);
    }
    function c(s) {
      return e.exit("codeIndented"), t(s);
    }
  }
  function Mf(e, t, n) {
    const i = this;
    return r;
    function r(o) {
      return i.parser.lazy[i.now().line] ? n(o) : Q(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), r) : be(e, a, "linePrefix", 5)(o);
    }
    function a(o) {
      const l = i.events[i.events.length - 1];
      return l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], true).length >= 4 ? t(o) : Q(o) ? r(o) : n(o);
    }
  }
  const zf = {
    name: "codeText",
    previous: Lf,
    resolve: Ff,
    tokenize: Bf
  };
  function Ff(e) {
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
  function Lf(e) {
    return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
  }
  function Bf(e, t, n) {
    let i = 0, r, a;
    return o;
    function o(p) {
      return e.enter("codeText"), e.enter("codeTextSequence"), l(p);
    }
    function l(p) {
      return p === 96 ? (e.consume(p), i++, l) : (e.exit("codeTextSequence"), c(p));
    }
    function c(p) {
      return p === null ? n(p) : p === 32 ? (e.enter("space"), e.consume(p), e.exit("space"), c) : p === 96 ? (a = e.enter("codeTextSequence"), r = 0, u(p)) : Q(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), c) : (e.enter("codeTextData"), s(p));
    }
    function s(p) {
      return p === null || p === 32 || p === 96 || Q(p) ? (e.exit("codeTextData"), c(p)) : (e.consume(p), s);
    }
    function u(p) {
      return p === 96 ? (e.consume(p), r++, u) : r === i ? (e.exit("codeTextSequence"), e.exit("codeText"), t(p)) : (a.type = "codeTextData", s(p));
    }
  }
  class Hf {
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
      const a = this.right.splice(this.right.length - r, Number.POSITIVE_INFINITY);
      return i && Bt(this.left, i), a.reverse();
    }
    pop() {
      return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
    }
    push(t) {
      this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
    }
    pushMany(t) {
      this.setCursor(Number.POSITIVE_INFINITY), Bt(this.left, t);
    }
    unshift(t) {
      this.setCursor(0), this.right.push(t);
    }
    unshiftMany(t) {
      this.setCursor(0), Bt(this.right, t.reverse());
    }
    setCursor(t) {
      if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0)) if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        Bt(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        Bt(this.left, n.reverse());
      }
    }
  }
  function Bt(e, t) {
    let n = 0;
    if (t.length < 1e4) e.push(...t);
    else for (; n < t.length; ) e.push(...t.slice(n, n + 1e4)), n += 1e4;
  }
  function kl(e) {
    const t = {};
    let n = -1, i, r, a, o, l, c, s;
    const u = new Hf(e);
    for (; ++n < u.length; ) {
      for (; n in t; ) n = t[n];
      if (i = u.get(n), n && i[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (c = i[1]._tokenizer.events, a = 0, a < c.length && c[a][1].type === "lineEndingBlank" && (a += 2), a < c.length && c[a][1].type === "content")) for (; ++a < c.length && c[a][1].type !== "content"; ) c[a][1].type === "chunkText" && (c[a][1]._isInFirstContentOfListItem = true, a++);
      if (i[0] === "enter") i[1].contentType && (Object.assign(t, qf(u, n)), n = t[n], s = true);
      else if (i[1]._container) {
        for (a = n, r = void 0; a--; ) if (o = u.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank") o[0] === "enter" && (r && (u.get(r)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", r = a);
        else if (!(o[1].type === "linePrefix" || o[1].type === "listItemIndent")) break;
        r && (i[1].end = {
          ...u.get(r)[1].start
        }, l = u.slice(r, n), l.unshift(i), u.splice(r, n - r + 1, l));
      }
    }
    return rt(e, 0, Number.POSITIVE_INFINITY, u.slice(0)), !s;
  }
  function qf(e, t) {
    const n = e.get(t)[1], i = e.get(t)[2];
    let r = t - 1;
    const a = [];
    let o = n._tokenizer;
    o || (o = i.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = true));
    const l = o.events, c = [], s = {};
    let u, p, f = -1, d = n, y = 0, k = 0;
    const E = [
      k
    ];
    for (; d; ) {
      for (; e.get(++r)[1] !== d; ) ;
      a.push(r), d._tokenizer || (u = i.sliceStream(d), d.next || u.push(null), p && o.defineSkip(d.start), d._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = true), o.write(u), d._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), p = d, d = d.next;
    }
    for (d = n; ++f < l.length; ) l[f][0] === "exit" && l[f - 1][0] === "enter" && l[f][1].type === l[f - 1][1].type && l[f][1].start.line !== l[f][1].end.line && (k = f + 1, E.push(k), d._tokenizer = void 0, d.previous = void 0, d = d.next);
    for (o.events = [], d ? (d._tokenizer = void 0, d.previous = void 0) : E.pop(), f = E.length; f--; ) {
      const C = l.slice(E[f], E[f + 1]), _ = a.pop();
      c.push([
        _,
        _ + C.length - 1
      ]), e.splice(_, 2, C);
    }
    for (c.reverse(), f = -1; ++f < c.length; ) s[y + c[f][0]] = y + c[f][1], y += c[f][1] - c[f][0] - 1;
    return s;
  }
  const $f = {
    resolve: Uf,
    tokenize: Wf
  }, Vf = {
    partial: true,
    tokenize: Xf
  };
  function Uf(e) {
    return kl(e), e;
  }
  function Wf(e, t) {
    let n;
    return i;
    function i(l) {
      return e.enter("content"), n = e.enter("chunkContent", {
        contentType: "content"
      }), r(l);
    }
    function r(l) {
      return l === null ? a(l) : Q(l) ? e.check(Vf, o, a)(l) : (e.consume(l), r);
    }
    function a(l) {
      return e.exit("chunkContent"), e.exit("content"), t(l);
    }
    function o(l) {
      return e.consume(l), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
        contentType: "content",
        previous: n
      }), n = n.next, r;
    }
  }
  function Xf(e, t, n) {
    const i = this;
    return r;
    function r(o) {
      return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), be(e, a, "linePrefix");
    }
    function a(o) {
      if (o === null || Q(o)) return n(o);
      const l = i.events[i.events.length - 1];
      return !i.parser.constructs.disable.null.includes("codeIndented") && l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], true).length >= 4 ? t(o) : e.interrupt(i.parser.constructs.flow, n, t)(o);
    }
  }
  function Cl(e, t, n, i, r, a, o, l, c) {
    const s = c || Number.POSITIVE_INFINITY;
    let u = 0;
    return p;
    function p(C) {
      return C === 60 ? (e.enter(i), e.enter(r), e.enter(a), e.consume(C), e.exit(a), f) : C === null || C === 32 || C === 41 || Li(C) ? n(C) : (e.enter(i), e.enter(o), e.enter(l), e.enter("chunkString", {
        contentType: "string"
      }), k(C));
    }
    function f(C) {
      return C === 62 ? (e.enter(a), e.consume(C), e.exit(a), e.exit(r), e.exit(i), t) : (e.enter(l), e.enter("chunkString", {
        contentType: "string"
      }), d(C));
    }
    function d(C) {
      return C === 62 ? (e.exit("chunkString"), e.exit(l), f(C)) : C === null || C === 60 || Q(C) ? n(C) : (e.consume(C), C === 92 ? y : d);
    }
    function y(C) {
      return C === 60 || C === 62 || C === 92 ? (e.consume(C), d) : d(C);
    }
    function k(C) {
      return !u && (C === null || C === 41 || Be(C)) ? (e.exit("chunkString"), e.exit(l), e.exit(o), e.exit(i), t(C)) : u < s && C === 40 ? (e.consume(C), u++, k) : C === 41 ? (e.consume(C), u--, k) : C === null || C === 32 || C === 40 || Li(C) ? n(C) : (e.consume(C), C === 92 ? E : k);
    }
    function E(C) {
      return C === 40 || C === 41 || C === 92 ? (e.consume(C), k) : k(C);
    }
  }
  function Ol(e, t, n, i, r, a) {
    const o = this;
    let l = 0, c;
    return s;
    function s(d) {
      return e.enter(i), e.enter(r), e.consume(d), e.exit(r), e.enter(a), u;
    }
    function u(d) {
      return l > 999 || d === null || d === 91 || d === 93 && !c || d === 94 && !l && "_hiddenFootnoteSupport" in o.parser.constructs ? n(d) : d === 93 ? (e.exit(a), e.enter(r), e.consume(d), e.exit(r), e.exit(i), t) : Q(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), u) : (e.enter("chunkString", {
        contentType: "string"
      }), p(d));
    }
    function p(d) {
      return d === null || d === 91 || d === 93 || Q(d) || l++ > 999 ? (e.exit("chunkString"), u(d)) : (e.consume(d), c || (c = !se(d)), d === 92 ? f : p);
    }
    function f(d) {
      return d === 91 || d === 92 || d === 93 ? (e.consume(d), l++, p) : p(d);
    }
  }
  function Sl(e, t, n, i, r, a) {
    let o;
    return l;
    function l(f) {
      return f === 34 || f === 39 || f === 40 ? (e.enter(i), e.enter(r), e.consume(f), e.exit(r), o = f === 40 ? 41 : f, c) : n(f);
    }
    function c(f) {
      return f === o ? (e.enter(r), e.consume(f), e.exit(r), e.exit(i), t) : (e.enter(a), s(f));
    }
    function s(f) {
      return f === o ? (e.exit(a), c(o)) : f === null ? n(f) : Q(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), be(e, s, "linePrefix")) : (e.enter("chunkString", {
        contentType: "string"
      }), u(f));
    }
    function u(f) {
      return f === o || f === null || Q(f) ? (e.exit("chunkString"), s(f)) : (e.consume(f), f === 92 ? p : u);
    }
    function p(f) {
      return f === o || f === 92 ? (e.consume(f), u) : u(f);
    }
  }
  function Qt(e, t) {
    let n;
    return i;
    function i(r) {
      return Q(r) ? (e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), n = true, i) : se(r) ? be(e, i, n ? "linePrefix" : "lineSuffix")(r) : t(r);
    }
  }
  const Kf = {
    name: "definition",
    tokenize: Yf
  }, Gf = {
    partial: true,
    tokenize: Qf
  };
  function Yf(e, t, n) {
    const i = this;
    let r;
    return a;
    function a(d) {
      return e.enter("definition"), o(d);
    }
    function o(d) {
      return Ol.call(i, e, l, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(d);
    }
    function l(d) {
      return r = Tt(i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1)), d === 58 ? (e.enter("definitionMarker"), e.consume(d), e.exit("definitionMarker"), c) : n(d);
    }
    function c(d) {
      return Be(d) ? Qt(e, s)(d) : s(d);
    }
    function s(d) {
      return Cl(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(d);
    }
    function u(d) {
      return e.attempt(Gf, p, p)(d);
    }
    function p(d) {
      return se(d) ? be(e, f, "whitespace")(d) : f(d);
    }
    function f(d) {
      return d === null || Q(d) ? (e.exit("definition"), i.parser.defined.push(r), t(d)) : n(d);
    }
  }
  function Qf(e, t, n) {
    return i;
    function i(l) {
      return Be(l) ? Qt(e, r)(l) : n(l);
    }
    function r(l) {
      return Sl(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(l);
    }
    function a(l) {
      return se(l) ? be(e, o, "whitespace")(l) : o(l);
    }
    function o(l) {
      return l === null || Q(l) ? t(l) : n(l);
    }
  }
  const Jf = {
    name: "hardBreakEscape",
    tokenize: Zf
  };
  function Zf(e, t, n) {
    return i;
    function i(a) {
      return e.enter("hardBreakEscape"), e.consume(a), r;
    }
    function r(a) {
      return Q(a) ? (e.exit("hardBreakEscape"), t(a)) : n(a);
    }
  }
  const em = {
    name: "headingAtx",
    resolve: tm,
    tokenize: nm
  };
  function tm(e, t) {
    let n = e.length - 2, i = 3, r, a;
    return e[i][1].type === "whitespace" && (i += 2), n - 2 > i && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (i === n - 1 || n - 4 > i && e[n - 2][1].type === "whitespace") && (n -= i + 1 === n ? 2 : 4), n > i && (r = {
      type: "atxHeadingText",
      start: e[i][1].start,
      end: e[n][1].end
    }, a = {
      type: "chunkText",
      start: e[i][1].start,
      end: e[n][1].end,
      contentType: "text"
    }, rt(e, i, n - i + 1, [
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
        "exit",
        r,
        t
      ]
    ])), e;
  }
  function nm(e, t, n) {
    let i = 0;
    return r;
    function r(u) {
      return e.enter("atxHeading"), a(u);
    }
    function a(u) {
      return e.enter("atxHeadingSequence"), o(u);
    }
    function o(u) {
      return u === 35 && i++ < 6 ? (e.consume(u), o) : u === null || Be(u) ? (e.exit("atxHeadingSequence"), l(u)) : n(u);
    }
    function l(u) {
      return u === 35 ? (e.enter("atxHeadingSequence"), c(u)) : u === null || Q(u) ? (e.exit("atxHeading"), t(u)) : se(u) ? be(e, l, "whitespace")(u) : (e.enter("atxHeadingText"), s(u));
    }
    function c(u) {
      return u === 35 ? (e.consume(u), c) : (e.exit("atxHeadingSequence"), l(u));
    }
    function s(u) {
      return u === null || u === 35 || Be(u) ? (e.exit("atxHeadingText"), l(u)) : (e.consume(u), s);
    }
  }
  const im = [
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
  ], ha = [
    "pre",
    "script",
    "style",
    "textarea"
  ], rm = {
    concrete: true,
    name: "htmlFlow",
    resolveTo: lm,
    tokenize: sm
  }, am = {
    partial: true,
    tokenize: um
  }, om = {
    partial: true,
    tokenize: cm
  };
  function lm(e) {
    let t = e.length;
    for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); ) ;
    return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
  }
  function sm(e, t, n) {
    const i = this;
    let r, a, o, l, c;
    return s;
    function s(g) {
      return u(g);
    }
    function u(g) {
      return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(g), p;
    }
    function p(g) {
      return g === 33 ? (e.consume(g), f) : g === 47 ? (e.consume(g), a = true, k) : g === 63 ? (e.consume(g), r = 3, i.interrupt ? t : h) : it(g) ? (e.consume(g), o = String.fromCharCode(g), E) : n(g);
    }
    function f(g) {
      return g === 45 ? (e.consume(g), r = 2, d) : g === 91 ? (e.consume(g), r = 5, l = 0, y) : it(g) ? (e.consume(g), r = 4, i.interrupt ? t : h) : n(g);
    }
    function d(g) {
      return g === 45 ? (e.consume(g), i.interrupt ? t : h) : n(g);
    }
    function y(g) {
      const Y = "CDATA[";
      return g === Y.charCodeAt(l++) ? (e.consume(g), l === Y.length ? i.interrupt ? t : I : y) : n(g);
    }
    function k(g) {
      return it(g) ? (e.consume(g), o = String.fromCharCode(g), E) : n(g);
    }
    function E(g) {
      if (g === null || g === 47 || g === 62 || Be(g)) {
        const Y = g === 47, ce = o.toLowerCase();
        return !Y && !a && ha.includes(ce) ? (r = 1, i.interrupt ? t(g) : I(g)) : im.includes(o.toLowerCase()) ? (r = 6, Y ? (e.consume(g), C) : i.interrupt ? t(g) : I(g)) : (r = 7, i.interrupt && !i.parser.lazy[i.now().line] ? n(g) : a ? _(g) : T(g));
      }
      return g === 45 || Ke(g) ? (e.consume(g), o += String.fromCharCode(g), E) : n(g);
    }
    function C(g) {
      return g === 62 ? (e.consume(g), i.interrupt ? t : I) : n(g);
    }
    function _(g) {
      return se(g) ? (e.consume(g), _) : M(g);
    }
    function T(g) {
      return g === 47 ? (e.consume(g), M) : g === 58 || g === 95 || it(g) ? (e.consume(g), A) : se(g) ? (e.consume(g), T) : M(g);
    }
    function A(g) {
      return g === 45 || g === 46 || g === 58 || g === 95 || Ke(g) ? (e.consume(g), A) : q(g);
    }
    function q(g) {
      return g === 61 ? (e.consume(g), O) : se(g) ? (e.consume(g), q) : T(g);
    }
    function O(g) {
      return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? n(g) : g === 34 || g === 39 ? (e.consume(g), c = g, L) : se(g) ? (e.consume(g), O) : V(g);
    }
    function L(g) {
      return g === c ? (e.consume(g), c = null, D) : g === null || Q(g) ? n(g) : (e.consume(g), L);
    }
    function V(g) {
      return g === null || g === 34 || g === 39 || g === 47 || g === 60 || g === 61 || g === 62 || g === 96 || Be(g) ? q(g) : (e.consume(g), V);
    }
    function D(g) {
      return g === 47 || g === 62 || se(g) ? T(g) : n(g);
    }
    function M(g) {
      return g === 62 ? (e.consume(g), F) : n(g);
    }
    function F(g) {
      return g === null || Q(g) ? I(g) : se(g) ? (e.consume(g), F) : n(g);
    }
    function I(g) {
      return g === 45 && r === 2 ? (e.consume(g), z) : g === 60 && r === 1 ? (e.consume(g), $) : g === 62 && r === 4 ? (e.consume(g), W) : g === 63 && r === 3 ? (e.consume(g), h) : g === 93 && r === 5 ? (e.consume(g), H) : Q(g) && (r === 6 || r === 7) ? (e.exit("htmlFlowData"), e.check(am, J, x)(g)) : g === null || Q(g) ? (e.exit("htmlFlowData"), x(g)) : (e.consume(g), I);
    }
    function x(g) {
      return e.check(om, v, J)(g);
    }
    function v(g) {
      return e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), S;
    }
    function S(g) {
      return g === null || Q(g) ? x(g) : (e.enter("htmlFlowData"), I(g));
    }
    function z(g) {
      return g === 45 ? (e.consume(g), h) : I(g);
    }
    function $(g) {
      return g === 47 ? (e.consume(g), o = "", X) : I(g);
    }
    function X(g) {
      if (g === 62) {
        const Y = o.toLowerCase();
        return ha.includes(Y) ? (e.consume(g), W) : I(g);
      }
      return it(g) && o.length < 8 ? (e.consume(g), o += String.fromCharCode(g), X) : I(g);
    }
    function H(g) {
      return g === 93 ? (e.consume(g), h) : I(g);
    }
    function h(g) {
      return g === 62 ? (e.consume(g), W) : g === 45 && r === 2 ? (e.consume(g), h) : I(g);
    }
    function W(g) {
      return g === null || Q(g) ? (e.exit("htmlFlowData"), J(g)) : (e.consume(g), W);
    }
    function J(g) {
      return e.exit("htmlFlow"), t(g);
    }
  }
  function cm(e, t, n) {
    const i = this;
    return r;
    function r(o) {
      return Q(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), a) : n(o);
    }
    function a(o) {
      return i.parser.lazy[i.now().line] ? n(o) : t(o);
    }
  }
  function um(e, t, n) {
    return i;
    function i(r) {
      return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(Bn, t, n);
    }
  }
  const pm = {
    name: "htmlText",
    tokenize: dm
  };
  function dm(e, t, n) {
    const i = this;
    let r, a, o;
    return l;
    function l(h) {
      return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(h), c;
    }
    function c(h) {
      return h === 33 ? (e.consume(h), s) : h === 47 ? (e.consume(h), q) : h === 63 ? (e.consume(h), T) : it(h) ? (e.consume(h), V) : n(h);
    }
    function s(h) {
      return h === 45 ? (e.consume(h), u) : h === 91 ? (e.consume(h), a = 0, y) : it(h) ? (e.consume(h), _) : n(h);
    }
    function u(h) {
      return h === 45 ? (e.consume(h), d) : n(h);
    }
    function p(h) {
      return h === null ? n(h) : h === 45 ? (e.consume(h), f) : Q(h) ? (o = p, $(h)) : (e.consume(h), p);
    }
    function f(h) {
      return h === 45 ? (e.consume(h), d) : p(h);
    }
    function d(h) {
      return h === 62 ? z(h) : h === 45 ? f(h) : p(h);
    }
    function y(h) {
      const W = "CDATA[";
      return h === W.charCodeAt(a++) ? (e.consume(h), a === W.length ? k : y) : n(h);
    }
    function k(h) {
      return h === null ? n(h) : h === 93 ? (e.consume(h), E) : Q(h) ? (o = k, $(h)) : (e.consume(h), k);
    }
    function E(h) {
      return h === 93 ? (e.consume(h), C) : k(h);
    }
    function C(h) {
      return h === 62 ? z(h) : h === 93 ? (e.consume(h), C) : k(h);
    }
    function _(h) {
      return h === null || h === 62 ? z(h) : Q(h) ? (o = _, $(h)) : (e.consume(h), _);
    }
    function T(h) {
      return h === null ? n(h) : h === 63 ? (e.consume(h), A) : Q(h) ? (o = T, $(h)) : (e.consume(h), T);
    }
    function A(h) {
      return h === 62 ? z(h) : T(h);
    }
    function q(h) {
      return it(h) ? (e.consume(h), O) : n(h);
    }
    function O(h) {
      return h === 45 || Ke(h) ? (e.consume(h), O) : L(h);
    }
    function L(h) {
      return Q(h) ? (o = L, $(h)) : se(h) ? (e.consume(h), L) : z(h);
    }
    function V(h) {
      return h === 45 || Ke(h) ? (e.consume(h), V) : h === 47 || h === 62 || Be(h) ? D(h) : n(h);
    }
    function D(h) {
      return h === 47 ? (e.consume(h), z) : h === 58 || h === 95 || it(h) ? (e.consume(h), M) : Q(h) ? (o = D, $(h)) : se(h) ? (e.consume(h), D) : z(h);
    }
    function M(h) {
      return h === 45 || h === 46 || h === 58 || h === 95 || Ke(h) ? (e.consume(h), M) : F(h);
    }
    function F(h) {
      return h === 61 ? (e.consume(h), I) : Q(h) ? (o = F, $(h)) : se(h) ? (e.consume(h), F) : D(h);
    }
    function I(h) {
      return h === null || h === 60 || h === 61 || h === 62 || h === 96 ? n(h) : h === 34 || h === 39 ? (e.consume(h), r = h, x) : Q(h) ? (o = I, $(h)) : se(h) ? (e.consume(h), I) : (e.consume(h), v);
    }
    function x(h) {
      return h === r ? (e.consume(h), r = void 0, S) : h === null ? n(h) : Q(h) ? (o = x, $(h)) : (e.consume(h), x);
    }
    function v(h) {
      return h === null || h === 34 || h === 39 || h === 60 || h === 61 || h === 96 ? n(h) : h === 47 || h === 62 || Be(h) ? D(h) : (e.consume(h), v);
    }
    function S(h) {
      return h === 47 || h === 62 || Be(h) ? D(h) : n(h);
    }
    function z(h) {
      return h === 62 ? (e.consume(h), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(h);
    }
    function $(h) {
      return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), X;
    }
    function X(h) {
      return se(h) ? be(e, H, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(h) : H(h);
    }
    function H(h) {
      return e.enter("htmlTextData"), o(h);
    }
  }
  const sr = {
    name: "labelEnd",
    resolveAll: gm,
    resolveTo: xm,
    tokenize: vm
  }, fm = {
    tokenize: ym
  }, mm = {
    tokenize: bm
  }, hm = {
    tokenize: wm
  };
  function gm(e) {
    let t = -1;
    const n = [];
    for (; ++t < e.length; ) {
      const i = e[t][1];
      if (n.push(e[t]), i.type === "labelImage" || i.type === "labelLink" || i.type === "labelEnd") {
        const r = i.type === "labelImage" ? 4 : 2;
        i.type = "data", t += r;
      }
    }
    return e.length !== n.length && rt(e, 0, e.length, n), e;
  }
  function xm(e, t) {
    let n = e.length, i = 0, r, a, o, l;
    for (; n--; ) if (r = e[n][1], a) {
      if (r.type === "link" || r.type === "labelLink" && r._inactive) break;
      e[n][0] === "enter" && r.type === "labelLink" && (r._inactive = true);
    } else if (o) {
      if (e[n][0] === "enter" && (r.type === "labelImage" || r.type === "labelLink") && !r._balanced && (a = n, r.type !== "labelLink")) {
        i = 2;
        break;
      }
    } else r.type === "labelEnd" && (o = n);
    const c = {
      type: e[a][1].type === "labelLink" ? "link" : "image",
      start: {
        ...e[a][1].start
      },
      end: {
        ...e[e.length - 1][1].end
      }
    }, s = {
      type: "label",
      start: {
        ...e[a][1].start
      },
      end: {
        ...e[o][1].end
      }
    }, u = {
      type: "labelText",
      start: {
        ...e[a + i + 2][1].end
      },
      end: {
        ...e[o - 2][1].start
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
    ], l = Qe(l, e.slice(a + 1, a + i + 3)), l = Qe(l, [
      [
        "enter",
        u,
        t
      ]
    ]), l = Qe(l, lr(t.parser.constructs.insideSpan.null, e.slice(a + i + 4, o - 3), t)), l = Qe(l, [
      [
        "exit",
        u,
        t
      ],
      e[o - 2],
      e[o - 1],
      [
        "exit",
        s,
        t
      ]
    ]), l = Qe(l, e.slice(o + 1)), l = Qe(l, [
      [
        "exit",
        c,
        t
      ]
    ]), rt(e, a, e.length, l), e;
  }
  function vm(e, t, n) {
    const i = this;
    let r = i.events.length, a, o;
    for (; r--; ) if ((i.events[r][1].type === "labelImage" || i.events[r][1].type === "labelLink") && !i.events[r][1]._balanced) {
      a = i.events[r][1];
      break;
    }
    return l;
    function l(f) {
      return a ? a._inactive ? p(f) : (o = i.parser.defined.includes(Tt(i.sliceSerialize({
        start: a.end,
        end: i.now()
      }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(f), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(f);
    }
    function c(f) {
      return f === 40 ? e.attempt(fm, u, o ? u : p)(f) : f === 91 ? e.attempt(mm, u, o ? s : p)(f) : o ? u(f) : p(f);
    }
    function s(f) {
      return e.attempt(hm, u, p)(f);
    }
    function u(f) {
      return t(f);
    }
    function p(f) {
      return a._balanced = true, n(f);
    }
  }
  function ym(e, t, n) {
    return i;
    function i(p) {
      return e.enter("resource"), e.enter("resourceMarker"), e.consume(p), e.exit("resourceMarker"), r;
    }
    function r(p) {
      return Be(p) ? Qt(e, a)(p) : a(p);
    }
    function a(p) {
      return p === 41 ? u(p) : Cl(e, o, l, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(p);
    }
    function o(p) {
      return Be(p) ? Qt(e, c)(p) : u(p);
    }
    function l(p) {
      return n(p);
    }
    function c(p) {
      return p === 34 || p === 39 || p === 40 ? Sl(e, s, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(p) : u(p);
    }
    function s(p) {
      return Be(p) ? Qt(e, u)(p) : u(p);
    }
    function u(p) {
      return p === 41 ? (e.enter("resourceMarker"), e.consume(p), e.exit("resourceMarker"), e.exit("resource"), t) : n(p);
    }
  }
  function bm(e, t, n) {
    const i = this;
    return r;
    function r(l) {
      return Ol.call(i, e, a, o, "reference", "referenceMarker", "referenceString")(l);
    }
    function a(l) {
      return i.parser.defined.includes(Tt(i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1))) ? t(l) : n(l);
    }
    function o(l) {
      return n(l);
    }
  }
  function wm(e, t, n) {
    return i;
    function i(a) {
      return e.enter("reference"), e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), r;
    }
    function r(a) {
      return a === 93 ? (e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), e.exit("reference"), t) : n(a);
    }
  }
  const km = {
    name: "labelStartImage",
    resolveAll: sr.resolveAll,
    tokenize: Cm
  };
  function Cm(e, t, n) {
    const i = this;
    return r;
    function r(l) {
      return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(l), e.exit("labelImageMarker"), a;
    }
    function a(l) {
      return l === 91 ? (e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelImage"), o) : n(l);
    }
    function o(l) {
      return l === 94 && "_hiddenFootnoteSupport" in i.parser.constructs ? n(l) : t(l);
    }
  }
  const Om = {
    name: "labelStartLink",
    resolveAll: sr.resolveAll,
    tokenize: Sm
  };
  function Sm(e, t, n) {
    const i = this;
    return r;
    function r(o) {
      return e.enter("labelLink"), e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelLink"), a;
    }
    function a(o) {
      return o === 94 && "_hiddenFootnoteSupport" in i.parser.constructs ? n(o) : t(o);
    }
  }
  const pi = {
    name: "lineEnding",
    tokenize: Em
  };
  function Em(e, t) {
    return n;
    function n(i) {
      return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), be(e, t, "linePrefix");
    }
  }
  const wn = {
    name: "thematicBreak",
    tokenize: _m
  };
  function _m(e, t, n) {
    let i = 0, r;
    return a;
    function a(s) {
      return e.enter("thematicBreak"), o(s);
    }
    function o(s) {
      return r = s, l(s);
    }
    function l(s) {
      return s === r ? (e.enter("thematicBreakSequence"), c(s)) : i >= 3 && (s === null || Q(s)) ? (e.exit("thematicBreak"), t(s)) : n(s);
    }
    function c(s) {
      return s === r ? (e.consume(s), i++, c) : (e.exit("thematicBreakSequence"), se(s) ? be(e, l, "whitespace")(s) : l(s));
    }
  }
  const Le = {
    continuation: {
      tokenize: Pm
    },
    exit: Rm,
    name: "list",
    tokenize: Im
  }, jm = {
    partial: true,
    tokenize: Am
  }, Tm = {
    partial: true,
    tokenize: Nm
  };
  function Im(e, t, n) {
    const i = this, r = i.events[i.events.length - 1];
    let a = r && r[1].type === "linePrefix" ? r[2].sliceSerialize(r[1], true).length : 0, o = 0;
    return l;
    function l(d) {
      const y = i.containerState.type || (d === 42 || d === 43 || d === 45 ? "listUnordered" : "listOrdered");
      if (y === "listUnordered" ? !i.containerState.marker || d === i.containerState.marker : Bi(d)) {
        if (i.containerState.type || (i.containerState.type = y, e.enter(y, {
          _container: true
        })), y === "listUnordered") return e.enter("listItemPrefix"), d === 42 || d === 45 ? e.check(wn, n, s)(d) : s(d);
        if (!i.interrupt || d === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), c(d);
      }
      return n(d);
    }
    function c(d) {
      return Bi(d) && ++o < 10 ? (e.consume(d), c) : (!i.interrupt || o < 2) && (i.containerState.marker ? d === i.containerState.marker : d === 41 || d === 46) ? (e.exit("listItemValue"), s(d)) : n(d);
    }
    function s(d) {
      return e.enter("listItemMarker"), e.consume(d), e.exit("listItemMarker"), i.containerState.marker = i.containerState.marker || d, e.check(Bn, i.interrupt ? n : u, e.attempt(jm, f, p));
    }
    function u(d) {
      return i.containerState.initialBlankLine = true, a++, f(d);
    }
    function p(d) {
      return se(d) ? (e.enter("listItemPrefixWhitespace"), e.consume(d), e.exit("listItemPrefixWhitespace"), f) : n(d);
    }
    function f(d) {
      return i.containerState.size = a + i.sliceSerialize(e.exit("listItemPrefix"), true).length, t(d);
    }
  }
  function Pm(e, t, n) {
    const i = this;
    return i.containerState._closeFlow = void 0, e.check(Bn, r, a);
    function r(l) {
      return i.containerState.furtherBlankLines = i.containerState.furtherBlankLines || i.containerState.initialBlankLine, be(e, t, "listItemIndent", i.containerState.size + 1)(l);
    }
    function a(l) {
      return i.containerState.furtherBlankLines || !se(l) ? (i.containerState.furtherBlankLines = void 0, i.containerState.initialBlankLine = void 0, o(l)) : (i.containerState.furtherBlankLines = void 0, i.containerState.initialBlankLine = void 0, e.attempt(Tm, t, o)(l));
    }
    function o(l) {
      return i.containerState._closeFlow = true, i.interrupt = void 0, be(e, e.attempt(Le, t, n), "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l);
    }
  }
  function Nm(e, t, n) {
    const i = this;
    return be(e, r, "listItemIndent", i.containerState.size + 1);
    function r(a) {
      const o = i.events[i.events.length - 1];
      return o && o[1].type === "listItemIndent" && o[2].sliceSerialize(o[1], true).length === i.containerState.size ? t(a) : n(a);
    }
  }
  function Rm(e) {
    e.exit(this.containerState.type);
  }
  function Am(e, t, n) {
    const i = this;
    return be(e, r, "listItemPrefixWhitespace", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
    function r(a) {
      const o = i.events[i.events.length - 1];
      return !se(a) && o && o[1].type === "listItemPrefixWhitespace" ? t(a) : n(a);
    }
  }
  const ga = {
    name: "setextUnderline",
    resolveTo: Dm,
    tokenize: Mm
  };
  function Dm(e, t) {
    let n = e.length, i, r, a;
    for (; n--; ) if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        i = n;
        break;
      }
      e[n][1].type === "paragraph" && (r = n);
    } else e[n][1].type === "content" && e.splice(n, 1), !a && e[n][1].type === "definition" && (a = n);
    const o = {
      type: "setextHeading",
      start: {
        ...e[i][1].start
      },
      end: {
        ...e[e.length - 1][1].end
      }
    };
    return e[r][1].type = "setextHeadingText", a ? (e.splice(r, 0, [
      "enter",
      o,
      t
    ]), e.splice(a + 1, 0, [
      "exit",
      e[i][1],
      t
    ]), e[i][1].end = {
      ...e[a][1].end
    }) : e[i][1] = o, e.push([
      "exit",
      o,
      t
    ]), e;
  }
  function Mm(e, t, n) {
    const i = this;
    let r;
    return a;
    function a(s) {
      let u = i.events.length, p;
      for (; u--; ) if (i.events[u][1].type !== "lineEnding" && i.events[u][1].type !== "linePrefix" && i.events[u][1].type !== "content") {
        p = i.events[u][1].type === "paragraph";
        break;
      }
      return !i.parser.lazy[i.now().line] && (i.interrupt || p) ? (e.enter("setextHeadingLine"), r = s, o(s)) : n(s);
    }
    function o(s) {
      return e.enter("setextHeadingLineSequence"), l(s);
    }
    function l(s) {
      return s === r ? (e.consume(s), l) : (e.exit("setextHeadingLineSequence"), se(s) ? be(e, c, "lineSuffix")(s) : c(s));
    }
    function c(s) {
      return s === null || Q(s) ? (e.exit("setextHeadingLine"), t(s)) : n(s);
    }
  }
  const zm = {
    tokenize: Fm
  };
  function Fm(e) {
    const t = this, n = e.attempt(Bn, i, e.attempt(this.parser.constructs.flowInitial, r, be(e, e.attempt(this.parser.constructs.flow, r, e.attempt($f, r)), "linePrefix")));
    return n;
    function i(a) {
      if (a === null) {
        e.consume(a);
        return;
      }
      return e.enter("lineEndingBlank"), e.consume(a), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
    }
    function r(a) {
      if (a === null) {
        e.consume(a);
        return;
      }
      return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), t.currentConstruct = void 0, n;
    }
  }
  const Lm = {
    resolveAll: _l()
  }, Bm = El("string"), Hm = El("text");
  function El(e) {
    return {
      resolveAll: _l(e === "text" ? qm : void 0),
      tokenize: t
    };
    function t(n) {
      const i = this, r = this.parser.constructs[e], a = n.attempt(r, o, l);
      return o;
      function o(u) {
        return s(u) ? a(u) : l(u);
      }
      function l(u) {
        if (u === null) {
          n.consume(u);
          return;
        }
        return n.enter("data"), n.consume(u), c;
      }
      function c(u) {
        return s(u) ? (n.exit("data"), a(u)) : (n.consume(u), c);
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
  function _l(e) {
    return t;
    function t(n, i) {
      let r = -1, a;
      for (; ++r <= n.length; ) a === void 0 ? n[r] && n[r][1].type === "data" && (a = r, r++) : (!n[r] || n[r][1].type !== "data") && (r !== a + 2 && (n[a][1].end = n[r - 1][1].end, n.splice(a + 2, r - a - 2), r = a + 2), a = void 0);
      return e ? e(n, i) : n;
    }
  }
  function qm(e, t) {
    let n = 0;
    for (; ++n <= e.length; ) if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const i = e[n - 1][1], r = t.sliceStream(i);
      let a = r.length, o = -1, l = 0, c;
      for (; a--; ) {
        const s = r[a];
        if (typeof s == "string") {
          for (o = s.length; s.charCodeAt(o - 1) === 32; ) l++, o--;
          if (o) break;
          o = -1;
        } else if (s === -2) c = true, l++;
        else if (s !== -1) {
          a++;
          break;
        }
      }
      if (t._contentTypeTextTrailing && n === e.length && (l = 0), l) {
        const s = {
          type: n === e.length || c || l < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: a ? o : i.start._bufferIndex + o,
            _index: i.start._index + a,
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
  const $m = {
    42: Le,
    43: Le,
    45: Le,
    48: Le,
    49: Le,
    50: Le,
    51: Le,
    52: Le,
    53: Le,
    54: Le,
    55: Le,
    56: Le,
    57: Le,
    62: yl
  }, Vm = {
    91: Kf
  }, Um = {
    [-2]: ui,
    [-1]: ui,
    32: ui
  }, Wm = {
    35: em,
    42: wn,
    45: [
      ga,
      wn
    ],
    60: rm,
    61: ga,
    95: wn,
    96: ma,
    126: ma
  }, Xm = {
    38: wl,
    92: bl
  }, Km = {
    [-5]: pi,
    [-4]: pi,
    [-3]: pi,
    33: km,
    38: wl,
    42: Hi,
    60: [
      Of,
      pm
    ],
    91: Om,
    92: [
      Jf,
      bl
    ],
    93: sr,
    95: Hi,
    96: zf
  }, Gm = {
    null: [
      Hi,
      Lm
    ]
  }, Ym = {
    null: [
      42,
      95
    ]
  }, Qm = {
    null: []
  }, Jm = Object.freeze(Object.defineProperty({
    __proto__: null,
    attentionMarkers: Ym,
    contentInitial: Vm,
    disable: Qm,
    document: $m,
    flow: Wm,
    flowInitial: Um,
    insideSpan: Gm,
    string: Xm,
    text: Km
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  function Zm(e, t, n) {
    let i = {
      _bufferIndex: -1,
      _index: 0,
      line: n && n.line || 1,
      column: n && n.column || 1,
      offset: n && n.offset || 0
    };
    const r = {}, a = [];
    let o = [], l = [];
    const c = {
      attempt: L(q),
      check: L(O),
      consume: _,
      enter: T,
      exit: A,
      interrupt: L(O, {
        interrupt: true
      })
    }, s = {
      code: null,
      containerState: {},
      defineSkip: k,
      events: [],
      now: y,
      parser: e,
      previous: null,
      sliceSerialize: f,
      sliceStream: d,
      write: p
    };
    let u = t.tokenize.call(s, c);
    return t.resolveAll && a.push(t), s;
    function p(F) {
      return o = Qe(o, F), E(), o[o.length - 1] !== null ? [] : (V(t, 0), s.events = lr(a, s.events, s), s.events);
    }
    function f(F, I) {
      return th(d(F), I);
    }
    function d(F) {
      return eh(o, F);
    }
    function y() {
      const { _bufferIndex: F, _index: I, line: x, column: v, offset: S } = i;
      return {
        _bufferIndex: F,
        _index: I,
        line: x,
        column: v,
        offset: S
      };
    }
    function k(F) {
      r[F.line] = F.column, M();
    }
    function E() {
      let F;
      for (; i._index < o.length; ) {
        const I = o[i._index];
        if (typeof I == "string") for (F = i._index, i._bufferIndex < 0 && (i._bufferIndex = 0); i._index === F && i._bufferIndex < I.length; ) C(I.charCodeAt(i._bufferIndex));
        else C(I);
      }
    }
    function C(F) {
      u = u(F);
    }
    function _(F) {
      Q(F) ? (i.line++, i.column = 1, i.offset += F === -3 ? 2 : 1, M()) : F !== -1 && (i.column++, i.offset++), i._bufferIndex < 0 ? i._index++ : (i._bufferIndex++, i._bufferIndex === o[i._index].length && (i._bufferIndex = -1, i._index++)), s.previous = F;
    }
    function T(F, I) {
      const x = I || {};
      return x.type = F, x.start = y(), s.events.push([
        "enter",
        x,
        s
      ]), l.push(x), x;
    }
    function A(F) {
      const I = l.pop();
      return I.end = y(), s.events.push([
        "exit",
        I,
        s
      ]), I;
    }
    function q(F, I) {
      V(F, I.from);
    }
    function O(F, I) {
      I.restore();
    }
    function L(F, I) {
      return x;
      function x(v, S, z) {
        let $, X, H, h;
        return Array.isArray(v) ? J(v) : "tokenize" in v ? J([
          v
        ]) : W(v);
        function W(ne) {
          return Ee;
          function Ee(xe) {
            const ve = xe !== null && ne[xe], me = xe !== null && ne.null, le = [
              ...Array.isArray(ve) ? ve : ve ? [
                ve
              ] : [],
              ...Array.isArray(me) ? me : me ? [
                me
              ] : []
            ];
            return J(le)(xe);
          }
        }
        function J(ne) {
          return $ = ne, X = 0, ne.length === 0 ? z : g(ne[X]);
        }
        function g(ne) {
          return Ee;
          function Ee(xe) {
            return h = D(), H = ne, ne.partial || (s.currentConstruct = ne), ne.name && s.parser.constructs.disable.null.includes(ne.name) ? ce() : ne.tokenize.call(I ? Object.assign(Object.create(s), I) : s, c, Y, ce)(xe);
          }
        }
        function Y(ne) {
          return F(H, h), S;
        }
        function ce(ne) {
          return h.restore(), ++X < $.length ? g($[X]) : z;
        }
      }
    }
    function V(F, I) {
      F.resolveAll && !a.includes(F) && a.push(F), F.resolve && rt(s.events, I, s.events.length - I, F.resolve(s.events.slice(I), s)), F.resolveTo && (s.events = F.resolveTo(s.events, s));
    }
    function D() {
      const F = y(), I = s.previous, x = s.currentConstruct, v = s.events.length, S = Array.from(l);
      return {
        from: v,
        restore: z
      };
      function z() {
        i = F, s.previous = I, s.currentConstruct = x, s.events.length = v, l = S, M();
      }
    }
    function M() {
      i.line in r && i.column < 2 && (i.column = r[i.line], i.offset += r[i.line] - 1);
    }
  }
  function eh(e, t) {
    const n = t.start._index, i = t.start._bufferIndex, r = t.end._index, a = t.end._bufferIndex;
    let o;
    if (n === r) o = [
      e[n].slice(i, a)
    ];
    else {
      if (o = e.slice(n, r), i > -1) {
        const l = o[0];
        typeof l == "string" ? o[0] = l.slice(i) : o.shift();
      }
      a > 0 && o.push(e[r].slice(0, a));
    }
    return o;
  }
  function th(e, t) {
    let n = -1;
    const i = [];
    let r;
    for (; ++n < e.length; ) {
      const a = e[n];
      let o;
      if (typeof a == "string") o = a;
      else switch (a) {
        case -5: {
          o = "\r";
          break;
        }
        case -4: {
          o = `
`;
          break;
        }
        case -3: {
          o = `\r
`;
          break;
        }
        case -2: {
          o = t ? " " : "	";
          break;
        }
        case -1: {
          if (!t && r) continue;
          o = " ";
          break;
        }
        default:
          o = String.fromCharCode(a);
      }
      r = a === -2, i.push(o);
    }
    return i.join("");
  }
  function nh(e) {
    const i = {
      constructs: cf([
        Jm,
        ...(e || {}).extensions || []
      ]),
      content: r(xf),
      defined: [],
      document: r(yf),
      flow: r(zm),
      lazy: {},
      string: r(Bm),
      text: r(Hm)
    };
    return i;
    function r(a) {
      return o;
      function o(l) {
        return Zm(i, a, l);
      }
    }
  }
  function ih(e) {
    for (; !kl(e); ) ;
    return e;
  }
  const xa = /[\0\t\n\r]/g;
  function rh() {
    let e = 1, t = "", n = true, i;
    return r;
    function r(a, o, l) {
      const c = [];
      let s, u, p, f, d;
      for (a = t + (typeof a == "string" ? a.toString() : new TextDecoder(o || void 0).decode(a)), p = 0, t = "", n && (a.charCodeAt(0) === 65279 && p++, n = void 0); p < a.length; ) {
        if (xa.lastIndex = p, s = xa.exec(a), f = s && s.index !== void 0 ? s.index : a.length, d = a.charCodeAt(f), !s) {
          t = a.slice(p);
          break;
        }
        if (d === 10 && p === f && i) c.push(-3), i = void 0;
        else switch (i && (c.push(-5), i = void 0), p < f && (c.push(a.slice(p, f)), e += f - p), d) {
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
  const ah = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
  function oh(e) {
    return e.replace(ah, lh);
  }
  function lh(e, t, n) {
    if (t) return t;
    if (n.charCodeAt(0) === 35) {
      const r = n.charCodeAt(1), a = r === 120 || r === 88;
      return vl(n.slice(a ? 2 : 1), a ? 16 : 10);
    }
    return or(n) || e;
  }
  const jl = {}.hasOwnProperty;
  function sh(e, t, n) {
    return typeof t != "string" && (n = t, t = void 0), ch(n)(ih(nh(n).document().write(rh()(e, t, true))));
  }
  function ch(e) {
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
        autolink: a(K),
        autolinkProtocol: D,
        autolinkEmail: D,
        atxHeading: a(Ge),
        blockQuote: a(me),
        characterEscape: D,
        characterReference: D,
        codeFenced: a(le),
        codeFencedFenceInfo: o,
        codeFencedFenceMeta: o,
        codeIndented: a(le, o),
        codeText: a(Te, o),
        codeTextData: D,
        data: D,
        codeFlowValue: D,
        definition: a(ze),
        definitionDestinationString: o,
        definitionLabelString: o,
        definitionTitleString: o,
        emphasis: a(qe),
        hardBreakEscape: a(Ae),
        hardBreakTrailing: a(Ae),
        htmlFlow: a(we, o),
        htmlFlowData: D,
        htmlText: a(we, o),
        htmlTextData: D,
        image: a($e),
        label: o,
        link: a(K),
        listItem: a(oe),
        listItemValue: f,
        listOrdered: a(ae, p),
        listUnordered: a(ae),
        paragraph: a(_e),
        reference: g,
        referenceString: o,
        resourceDestinationString: o,
        resourceTitleString: o,
        setextHeading: a(Ge),
        strong: a(Ce),
        thematicBreak: a(P)
      },
      exit: {
        atxHeading: c(),
        atxHeadingSequence: q,
        autolink: c(),
        autolinkEmail: ve,
        autolinkProtocol: xe,
        blockQuote: c(),
        characterEscapeValue: M,
        characterReferenceMarkerHexadecimal: ce,
        characterReferenceMarkerNumeric: ce,
        characterReferenceValue: ne,
        characterReference: Ee,
        codeFenced: c(E),
        codeFencedFence: k,
        codeFencedFenceInfo: d,
        codeFencedFenceMeta: y,
        codeFlowValue: M,
        codeIndented: c(C),
        codeText: c(S),
        codeTextData: M,
        data: M,
        definition: c(),
        definitionDestinationString: A,
        definitionLabelString: _,
        definitionTitleString: T,
        emphasis: c(),
        hardBreakEscape: c(I),
        hardBreakTrailing: c(I),
        htmlFlow: c(x),
        htmlFlowData: M,
        htmlText: c(v),
        htmlTextData: M,
        image: c($),
        label: H,
        labelText: X,
        lineEnding: F,
        link: c(z),
        listItem: c(),
        listOrdered: c(),
        listUnordered: c(),
        paragraph: c(),
        referenceString: Y,
        resourceDestinationString: h,
        resourceTitleString: W,
        resource: J,
        setextHeading: c(V),
        setextHeadingLineSequence: L,
        setextHeadingText: O,
        strong: c(),
        thematicBreak: c()
      }
    };
    Tl(t, (e || {}).mdastExtensions || []);
    const n = {};
    return i;
    function i(b) {
      let j = {
        type: "root",
        children: []
      };
      const U = {
        stack: [
          j
        ],
        tokenStack: [],
        config: t,
        enter: l,
        exit: s,
        buffer: o,
        resume: u,
        data: n
      }, Z = [];
      let re = -1;
      for (; ++re < b.length; ) if (b[re][1].type === "listOrdered" || b[re][1].type === "listUnordered") if (b[re][0] === "enter") Z.push(re);
      else {
        const Pe = Z.pop();
        re = r(b, Pe, re);
      }
      for (re = -1; ++re < b.length; ) {
        const Pe = t[b[re][0]];
        jl.call(Pe, b[re][1].type) && Pe[b[re][1].type].call(Object.assign({
          sliceSerialize: b[re][2].sliceSerialize
        }, U), b[re][1]);
      }
      if (U.tokenStack.length > 0) {
        const Pe = U.tokenStack[U.tokenStack.length - 1];
        (Pe[1] || va).call(U, void 0, Pe[0]);
      }
      for (j.position = {
        start: pt(b.length > 0 ? b[0][1].start : {
          line: 1,
          column: 1,
          offset: 0
        }),
        end: pt(b.length > 0 ? b[b.length - 2][1].end : {
          line: 1,
          column: 1,
          offset: 0
        })
      }, re = -1; ++re < t.transforms.length; ) j = t.transforms[re](j) || j;
      return j;
    }
    function r(b, j, U) {
      let Z = j - 1, re = -1, Pe = false, Ve, De, Fe, Ze;
      for (; ++Z <= U; ) {
        const ee = b[Z];
        switch (ee[1].type) {
          case "listUnordered":
          case "listOrdered":
          case "blockQuote": {
            ee[0] === "enter" ? re++ : re--, Ze = void 0;
            break;
          }
          case "lineEndingBlank": {
            ee[0] === "enter" && (Ve && !Ze && !re && !Fe && (Fe = Z), Ze = void 0);
            break;
          }
          case "linePrefix":
          case "listItemValue":
          case "listItemMarker":
          case "listItemPrefix":
          case "listItemPrefixWhitespace":
            break;
          default:
            Ze = void 0;
        }
        if (!re && ee[0] === "enter" && ee[1].type === "listItemPrefix" || re === -1 && ee[0] === "exit" && (ee[1].type === "listUnordered" || ee[1].type === "listOrdered")) {
          if (Ve) {
            let ue = Z;
            for (De = void 0; ue--; ) {
              const he = b[ue];
              if (he[1].type === "lineEnding" || he[1].type === "lineEndingBlank") {
                if (he[0] === "exit") continue;
                De && (b[De][1].type = "lineEndingBlank", Pe = true), he[1].type = "lineEnding", De = ue;
              } else if (!(he[1].type === "linePrefix" || he[1].type === "blockQuotePrefix" || he[1].type === "blockQuotePrefixWhitespace" || he[1].type === "blockQuoteMarker" || he[1].type === "listItemIndent")) break;
            }
            Fe && (!De || Fe < De) && (Ve._spread = true), Ve.end = Object.assign({}, De ? b[De][1].start : ee[1].end), b.splice(De || Z, 0, [
              "exit",
              Ve,
              ee[2]
            ]), Z++, U++;
          }
          if (ee[1].type === "listItemPrefix") {
            const ue = {
              type: "listItem",
              _spread: false,
              start: Object.assign({}, ee[1].start),
              end: void 0
            };
            Ve = ue, b.splice(Z, 0, [
              "enter",
              ue,
              ee[2]
            ]), Z++, U++, Fe = void 0, Ze = true;
          }
        }
      }
      return b[j][1]._spread = Pe, U;
    }
    function a(b, j) {
      return U;
      function U(Z) {
        l.call(this, b(Z), Z), j && j.call(this, Z);
      }
    }
    function o() {
      this.stack.push({
        type: "fragment",
        children: []
      });
    }
    function l(b, j, U) {
      this.stack[this.stack.length - 1].children.push(b), this.stack.push(b), this.tokenStack.push([
        j,
        U || void 0
      ]), b.position = {
        start: pt(j.start),
        end: void 0
      };
    }
    function c(b) {
      return j;
      function j(U) {
        b && b.call(this, U), s.call(this, U);
      }
    }
    function s(b, j) {
      const U = this.stack.pop(), Z = this.tokenStack.pop();
      if (Z) Z[0].type !== b.type && (j ? j.call(this, b, Z[0]) : (Z[1] || va).call(this, b, Z[0]));
      else throw new Error("Cannot close `" + b.type + "` (" + Yt({
        start: b.start,
        end: b.end
      }) + "): it\u2019s not open");
      U.position.end = pt(b.end);
    }
    function u() {
      return lf(this.stack.pop());
    }
    function p() {
      this.data.expectingFirstListItemValue = true;
    }
    function f(b) {
      if (this.data.expectingFirstListItemValue) {
        const j = this.stack[this.stack.length - 2];
        j.start = Number.parseInt(this.sliceSerialize(b), 10), this.data.expectingFirstListItemValue = void 0;
      }
    }
    function d() {
      const b = this.resume(), j = this.stack[this.stack.length - 1];
      j.lang = b;
    }
    function y() {
      const b = this.resume(), j = this.stack[this.stack.length - 1];
      j.meta = b;
    }
    function k() {
      this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = true);
    }
    function E() {
      const b = this.resume(), j = this.stack[this.stack.length - 1];
      j.value = b.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
    }
    function C() {
      const b = this.resume(), j = this.stack[this.stack.length - 1];
      j.value = b.replace(/(\r?\n|\r)$/g, "");
    }
    function _(b) {
      const j = this.resume(), U = this.stack[this.stack.length - 1];
      U.label = j, U.identifier = Tt(this.sliceSerialize(b)).toLowerCase();
    }
    function T() {
      const b = this.resume(), j = this.stack[this.stack.length - 1];
      j.title = b;
    }
    function A() {
      const b = this.resume(), j = this.stack[this.stack.length - 1];
      j.url = b;
    }
    function q(b) {
      const j = this.stack[this.stack.length - 1];
      if (!j.depth) {
        const U = this.sliceSerialize(b).length;
        j.depth = U;
      }
    }
    function O() {
      this.data.setextHeadingSlurpLineEnding = true;
    }
    function L(b) {
      const j = this.stack[this.stack.length - 1];
      j.depth = this.sliceSerialize(b).codePointAt(0) === 61 ? 1 : 2;
    }
    function V() {
      this.data.setextHeadingSlurpLineEnding = void 0;
    }
    function D(b) {
      const U = this.stack[this.stack.length - 1].children;
      let Z = U[U.length - 1];
      (!Z || Z.type !== "text") && (Z = B(), Z.position = {
        start: pt(b.start),
        end: void 0
      }, U.push(Z)), this.stack.push(Z);
    }
    function M(b) {
      const j = this.stack.pop();
      j.value += this.sliceSerialize(b), j.position.end = pt(b.end);
    }
    function F(b) {
      const j = this.stack[this.stack.length - 1];
      if (this.data.atHardBreak) {
        const U = j.children[j.children.length - 1];
        U.position.end = pt(b.end), this.data.atHardBreak = void 0;
        return;
      }
      !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(j.type) && (D.call(this, b), M.call(this, b));
    }
    function I() {
      this.data.atHardBreak = true;
    }
    function x() {
      const b = this.resume(), j = this.stack[this.stack.length - 1];
      j.value = b;
    }
    function v() {
      const b = this.resume(), j = this.stack[this.stack.length - 1];
      j.value = b;
    }
    function S() {
      const b = this.resume(), j = this.stack[this.stack.length - 1];
      j.value = b;
    }
    function z() {
      const b = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        const j = this.data.referenceType || "shortcut";
        b.type += "Reference", b.referenceType = j, delete b.url, delete b.title;
      } else delete b.identifier, delete b.label;
      this.data.referenceType = void 0;
    }
    function $() {
      const b = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        const j = this.data.referenceType || "shortcut";
        b.type += "Reference", b.referenceType = j, delete b.url, delete b.title;
      } else delete b.identifier, delete b.label;
      this.data.referenceType = void 0;
    }
    function X(b) {
      const j = this.sliceSerialize(b), U = this.stack[this.stack.length - 2];
      U.label = oh(j), U.identifier = Tt(j).toLowerCase();
    }
    function H() {
      const b = this.stack[this.stack.length - 1], j = this.resume(), U = this.stack[this.stack.length - 1];
      if (this.data.inReference = true, U.type === "link") {
        const Z = b.children;
        U.children = Z;
      } else U.alt = j;
    }
    function h() {
      const b = this.resume(), j = this.stack[this.stack.length - 1];
      j.url = b;
    }
    function W() {
      const b = this.resume(), j = this.stack[this.stack.length - 1];
      j.title = b;
    }
    function J() {
      this.data.inReference = void 0;
    }
    function g() {
      this.data.referenceType = "collapsed";
    }
    function Y(b) {
      const j = this.resume(), U = this.stack[this.stack.length - 1];
      U.label = j, U.identifier = Tt(this.sliceSerialize(b)).toLowerCase(), this.data.referenceType = "full";
    }
    function ce(b) {
      this.data.characterReferenceType = b.type;
    }
    function ne(b) {
      const j = this.sliceSerialize(b), U = this.data.characterReferenceType;
      let Z;
      U ? (Z = vl(j, U === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : Z = or(j);
      const re = this.stack[this.stack.length - 1];
      re.value += Z;
    }
    function Ee(b) {
      const j = this.stack.pop();
      j.position.end = pt(b.end);
    }
    function xe(b) {
      M.call(this, b);
      const j = this.stack[this.stack.length - 1];
      j.url = this.sliceSerialize(b);
    }
    function ve(b) {
      M.call(this, b);
      const j = this.stack[this.stack.length - 1];
      j.url = "mailto:" + this.sliceSerialize(b);
    }
    function me() {
      return {
        type: "blockquote",
        children: []
      };
    }
    function le() {
      return {
        type: "code",
        lang: null,
        meta: null,
        value: ""
      };
    }
    function Te() {
      return {
        type: "inlineCode",
        value: ""
      };
    }
    function ze() {
      return {
        type: "definition",
        identifier: "",
        label: null,
        title: null,
        url: ""
      };
    }
    function qe() {
      return {
        type: "emphasis",
        children: []
      };
    }
    function Ge() {
      return {
        type: "heading",
        depth: 0,
        children: []
      };
    }
    function Ae() {
      return {
        type: "break"
      };
    }
    function we() {
      return {
        type: "html",
        value: ""
      };
    }
    function $e() {
      return {
        type: "image",
        title: null,
        url: "",
        alt: null
      };
    }
    function K() {
      return {
        type: "link",
        title: null,
        url: "",
        children: []
      };
    }
    function ae(b) {
      return {
        type: "list",
        ordered: b.type === "listOrdered",
        start: null,
        spread: b._spread,
        children: []
      };
    }
    function oe(b) {
      return {
        type: "listItem",
        spread: b._spread,
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
    function B() {
      return {
        type: "text",
        value: ""
      };
    }
    function P() {
      return {
        type: "thematicBreak"
      };
    }
  }
  function pt(e) {
    return {
      line: e.line,
      column: e.column,
      offset: e.offset
    };
  }
  function Tl(e, t) {
    let n = -1;
    for (; ++n < t.length; ) {
      const i = t[n];
      Array.isArray(i) ? Tl(e, i) : uh(e, i);
    }
  }
  function uh(e, t) {
    let n;
    for (n in t) if (jl.call(t, n)) switch (n) {
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
  function va(e, t) {
    throw e ? new Error("Cannot close `" + e.type + "` (" + Yt({
      start: e.start,
      end: e.end
    }) + "): a different token (`" + t.type + "`, " + Yt({
      start: t.start,
      end: t.end
    }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + Yt({
      start: t.start,
      end: t.end
    }) + ") is still open");
  }
  function ph(e) {
    const t = this;
    t.parser = n;
    function n(i) {
      return sh(i, {
        ...t.data("settings"),
        ...e,
        extensions: t.data("micromarkExtensions") || [],
        mdastExtensions: t.data("fromMarkdownExtensions") || []
      });
    }
  }
  function dh(e, t) {
    const n = {
      type: "element",
      tagName: "blockquote",
      properties: {},
      children: e.wrap(e.all(t), true)
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  function fh(e, t) {
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
  function mh(e, t) {
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
  function hh(e, t) {
    const n = {
      type: "element",
      tagName: "del",
      properties: {},
      children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  function gh(e, t) {
    const n = {
      type: "element",
      tagName: "em",
      properties: {},
      children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  function xh(e, t) {
    const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", i = String(t.identifier).toUpperCase(), r = At(i.toLowerCase()), a = e.footnoteOrder.indexOf(i);
    let o, l = e.footnoteCounts.get(i);
    l === void 0 ? (l = 0, e.footnoteOrder.push(i), o = e.footnoteOrder.length) : o = a + 1, l += 1, e.footnoteCounts.set(i, l);
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
          value: String(o)
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
  function vh(e, t) {
    const n = {
      type: "element",
      tagName: "h" + t.depth,
      properties: {},
      children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  function yh(e, t) {
    if (e.options.allowDangerousHtml) {
      const n = {
        type: "raw",
        value: t.value
      };
      return e.patch(t, n), e.applyData(t, n);
    }
  }
  function Il(e, t) {
    const n = t.referenceType;
    let i = "]";
    if (n === "collapsed" ? i += "[]" : n === "full" && (i += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return [
      {
        type: "text",
        value: "![" + t.alt + i
      }
    ];
    const r = e.all(t), a = r[0];
    a && a.type === "text" ? a.value = "[" + a.value : r.unshift({
      type: "text",
      value: "["
    });
    const o = r[r.length - 1];
    return o && o.type === "text" ? o.value += i : r.push({
      type: "text",
      value: i
    }), r;
  }
  function bh(e, t) {
    const n = String(t.identifier).toUpperCase(), i = e.definitionById.get(n);
    if (!i) return Il(e, t);
    const r = {
      src: At(i.url || ""),
      alt: t.alt
    };
    i.title !== null && i.title !== void 0 && (r.title = i.title);
    const a = {
      type: "element",
      tagName: "img",
      properties: r,
      children: []
    };
    return e.patch(t, a), e.applyData(t, a);
  }
  function wh(e, t) {
    const n = {
      src: At(t.url)
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
  function kh(e, t) {
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
  function Ch(e, t) {
    const n = String(t.identifier).toUpperCase(), i = e.definitionById.get(n);
    if (!i) return Il(e, t);
    const r = {
      href: At(i.url || "")
    };
    i.title !== null && i.title !== void 0 && (r.title = i.title);
    const a = {
      type: "element",
      tagName: "a",
      properties: r,
      children: e.all(t)
    };
    return e.patch(t, a), e.applyData(t, a);
  }
  function Oh(e, t) {
    const n = {
      href: At(t.url)
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
  function Sh(e, t, n) {
    const i = e.all(t), r = n ? Eh(n) : Pl(t), a = {}, o = [];
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
      }), a.className = [
        "task-list-item"
      ];
    }
    let l = -1;
    for (; ++l < i.length; ) {
      const u = i[l];
      (r || l !== 0 || u.type !== "element" || u.tagName !== "p") && o.push({
        type: "text",
        value: `
`
      }), u.type === "element" && u.tagName === "p" && !r ? o.push(...u.children) : o.push(u);
    }
    const c = i[i.length - 1];
    c && (r || c.type !== "element" || c.tagName !== "p") && o.push({
      type: "text",
      value: `
`
    });
    const s = {
      type: "element",
      tagName: "li",
      properties: a,
      children: o
    };
    return e.patch(t, s), e.applyData(t, s);
  }
  function Eh(e) {
    let t = false;
    if (e.type === "list") {
      t = e.spread || false;
      const n = e.children;
      let i = -1;
      for (; !t && ++i < n.length; ) t = Pl(n[i]);
    }
    return t;
  }
  function Pl(e) {
    const t = e.spread;
    return t ?? e.children.length > 1;
  }
  function _h(e, t) {
    const n = {}, i = e.all(t);
    let r = -1;
    for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++r < i.length; ) {
      const o = i[r];
      if (o.type === "element" && o.tagName === "li" && o.properties && Array.isArray(o.properties.className) && o.properties.className.includes("task-list-item")) {
        n.className = [
          "contains-task-list"
        ];
        break;
      }
    }
    const a = {
      type: "element",
      tagName: t.ordered ? "ol" : "ul",
      properties: n,
      children: e.wrap(i, true)
    };
    return e.patch(t, a), e.applyData(t, a);
  }
  function jh(e, t) {
    const n = {
      type: "element",
      tagName: "p",
      properties: {},
      children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  function Th(e, t) {
    const n = {
      type: "root",
      children: e.wrap(e.all(t))
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  function Ih(e, t) {
    const n = {
      type: "element",
      tagName: "strong",
      properties: {},
      children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  function Ph(e, t) {
    const n = e.all(t), i = n.shift(), r = [];
    if (i) {
      const o = {
        type: "element",
        tagName: "thead",
        properties: {},
        children: e.wrap([
          i
        ], true)
      };
      e.patch(t.children[0], o), r.push(o);
    }
    if (n.length > 0) {
      const o = {
        type: "element",
        tagName: "tbody",
        properties: {},
        children: e.wrap(n, true)
      }, l = nr(t.children[1]), c = pl(t.children[t.children.length - 1]);
      l && c && (o.position = {
        start: l,
        end: c
      }), r.push(o);
    }
    const a = {
      type: "element",
      tagName: "table",
      properties: {},
      children: e.wrap(r, true)
    };
    return e.patch(t, a), e.applyData(t, a);
  }
  function Nh(e, t, n) {
    const i = n ? n.children : void 0, a = (i ? i.indexOf(t) : 1) === 0 ? "th" : "td", o = n && n.type === "table" ? n.align : void 0, l = o ? o.length : t.children.length;
    let c = -1;
    const s = [];
    for (; ++c < l; ) {
      const p = t.children[c], f = {}, d = o ? o[c] : void 0;
      d && (f.align = d);
      let y = {
        type: "element",
        tagName: a,
        properties: f,
        children: []
      };
      p && (y.children = e.all(p), e.patch(p, y), y = e.applyData(p, y)), s.push(y);
    }
    const u = {
      type: "element",
      tagName: "tr",
      properties: {},
      children: e.wrap(s, true)
    };
    return e.patch(t, u), e.applyData(t, u);
  }
  function Rh(e, t) {
    const n = {
      type: "element",
      tagName: "td",
      properties: {},
      children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  const ya = 9, ba = 32;
  function Ah(e) {
    const t = String(e), n = /\r?\n|\r/g;
    let i = n.exec(t), r = 0;
    const a = [];
    for (; i; ) a.push(wa(t.slice(r, i.index), r > 0, true), i[0]), r = i.index + i[0].length, i = n.exec(t);
    return a.push(wa(t.slice(r), r > 0, false)), a.join("");
  }
  function wa(e, t, n) {
    let i = 0, r = e.length;
    if (t) {
      let a = e.codePointAt(i);
      for (; a === ya || a === ba; ) i++, a = e.codePointAt(i);
    }
    if (n) {
      let a = e.codePointAt(r - 1);
      for (; a === ya || a === ba; ) r--, a = e.codePointAt(r - 1);
    }
    return r > i ? e.slice(i, r) : "";
  }
  function Dh(e, t) {
    const n = {
      type: "text",
      value: Ah(String(t.value))
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  function Mh(e, t) {
    const n = {
      type: "element",
      tagName: "hr",
      properties: {},
      children: []
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  const zh = {
    blockquote: dh,
    break: fh,
    code: mh,
    delete: hh,
    emphasis: gh,
    footnoteReference: xh,
    heading: vh,
    html: yh,
    imageReference: bh,
    image: wh,
    inlineCode: kh,
    linkReference: Ch,
    link: Oh,
    listItem: Sh,
    list: _h,
    paragraph: jh,
    root: Th,
    strong: Ih,
    table: Ph,
    tableCell: Rh,
    tableRow: Nh,
    text: Dh,
    thematicBreak: Mh,
    toml: hn,
    yaml: hn,
    definition: hn,
    footnoteDefinition: hn
  };
  function hn() {
  }
  const Nl = -1, Hn = 0, Jt = 1, An = 2, cr = 3, ur = 4, pr = 5, dr = 6, Rl = 7, Al = 8, ka = typeof self == "object" ? self : globalThis, Fh = (e, t) => {
    const n = (r, a) => (e.set(a, r), r), i = (r) => {
      if (e.has(r)) return e.get(r);
      const [a, o] = t[r];
      switch (a) {
        case Hn:
        case Nl:
          return n(o, r);
        case Jt: {
          const l = n([], r);
          for (const c of o) l.push(i(c));
          return l;
        }
        case An: {
          const l = n({}, r);
          for (const [c, s] of o) l[i(c)] = i(s);
          return l;
        }
        case cr:
          return n(new Date(o), r);
        case ur: {
          const { source: l, flags: c } = o;
          return n(new RegExp(l, c), r);
        }
        case pr: {
          const l = n(/* @__PURE__ */ new Map(), r);
          for (const [c, s] of o) l.set(i(c), i(s));
          return l;
        }
        case dr: {
          const l = n(/* @__PURE__ */ new Set(), r);
          for (const c of o) l.add(i(c));
          return l;
        }
        case Rl: {
          const { name: l, message: c } = o;
          return n(new ka[l](c), r);
        }
        case Al:
          return n(BigInt(o), r);
        case "BigInt":
          return n(Object(BigInt(o)), r);
        case "ArrayBuffer":
          return n(new Uint8Array(o).buffer, o);
        case "DataView": {
          const { buffer: l } = new Uint8Array(o);
          return n(new DataView(l), o);
        }
      }
      return n(new ka[a](o), r);
    };
    return i;
  }, Ca = (e) => Fh(/* @__PURE__ */ new Map(), e)(0), Et = "", { toString: Lh } = {}, { keys: Bh } = Object, Ht = (e) => {
    const t = typeof e;
    if (t !== "object" || !e) return [
      Hn,
      t
    ];
    const n = Lh.call(e).slice(8, -1);
    switch (n) {
      case "Array":
        return [
          Jt,
          Et
        ];
      case "Object":
        return [
          An,
          Et
        ];
      case "Date":
        return [
          cr,
          Et
        ];
      case "RegExp":
        return [
          ur,
          Et
        ];
      case "Map":
        return [
          pr,
          Et
        ];
      case "Set":
        return [
          dr,
          Et
        ];
      case "DataView":
        return [
          Jt,
          n
        ];
    }
    return n.includes("Array") ? [
      Jt,
      n
    ] : n.includes("Error") ? [
      Rl,
      n
    ] : [
      An,
      n
    ];
  }, gn = ([e, t]) => e === Hn && (t === "function" || t === "symbol"), Hh = (e, t, n, i) => {
    const r = (o, l) => {
      const c = i.push(o) - 1;
      return n.set(l, c), c;
    }, a = (o) => {
      if (n.has(o)) return n.get(o);
      let [l, c] = Ht(o);
      switch (l) {
        case Hn: {
          let u = o;
          switch (c) {
            case "bigint":
              l = Al, u = o.toString();
              break;
            case "function":
            case "symbol":
              if (e) throw new TypeError("unable to serialize " + c);
              u = null;
              break;
            case "undefined":
              return r([
                Nl
              ], o);
          }
          return r([
            l,
            u
          ], o);
        }
        case Jt: {
          if (c) {
            let f = o;
            return c === "DataView" ? f = new Uint8Array(o.buffer) : c === "ArrayBuffer" && (f = new Uint8Array(o)), r([
              c,
              [
                ...f
              ]
            ], o);
          }
          const u = [], p = r([
            l,
            u
          ], o);
          for (const f of o) u.push(a(f));
          return p;
        }
        case An: {
          if (c) switch (c) {
            case "BigInt":
              return r([
                c,
                o.toString()
              ], o);
            case "Boolean":
            case "Number":
            case "String":
              return r([
                c,
                o.valueOf()
              ], o);
          }
          if (t && "toJSON" in o) return a(o.toJSON());
          const u = [], p = r([
            l,
            u
          ], o);
          for (const f of Bh(o)) (e || !gn(Ht(o[f]))) && u.push([
            a(f),
            a(o[f])
          ]);
          return p;
        }
        case cr:
          return r([
            l,
            o.toISOString()
          ], o);
        case ur: {
          const { source: u, flags: p } = o;
          return r([
            l,
            {
              source: u,
              flags: p
            }
          ], o);
        }
        case pr: {
          const u = [], p = r([
            l,
            u
          ], o);
          for (const [f, d] of o) (e || !(gn(Ht(f)) || gn(Ht(d)))) && u.push([
            a(f),
            a(d)
          ]);
          return p;
        }
        case dr: {
          const u = [], p = r([
            l,
            u
          ], o);
          for (const f of o) (e || !gn(Ht(f))) && u.push(a(f));
          return p;
        }
      }
      const { message: s } = o;
      return r([
        l,
        {
          name: c,
          message: s
        }
      ], o);
    };
    return a;
  }, Oa = (e, { json: t, lossy: n } = {}) => {
    const i = [];
    return Hh(!(t || n), !!t, /* @__PURE__ */ new Map(), i)(e), i;
  }, Dn = typeof structuredClone == "function" ? (e, t) => t && ("json" in t || "lossy" in t) ? Ca(Oa(e, t)) : structuredClone(e) : (e, t) => Ca(Oa(e, t));
  function qh(e, t) {
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
  function $h(e, t) {
    return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
  }
  function Vh(e) {
    const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || qh, i = e.options.footnoteBackLabel || $h, r = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || {
      className: [
        "sr-only"
      ]
    }, l = [];
    let c = -1;
    for (; ++c < e.footnoteOrder.length; ) {
      const s = e.footnoteById.get(e.footnoteOrder[c]);
      if (!s) continue;
      const u = e.all(s), p = String(s.identifier).toUpperCase(), f = At(p.toLowerCase());
      let d = 0;
      const y = [], k = e.footnoteCounts.get(p);
      for (; k !== void 0 && ++d <= k; ) {
        y.length > 0 && y.push({
          type: "text",
          value: " "
        });
        let _ = typeof n == "string" ? n : n(c, d);
        typeof _ == "string" && (_ = {
          type: "text",
          value: _
        }), y.push({
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
          children: Array.isArray(_) ? _ : [
            _
          ]
        });
      }
      const E = u[u.length - 1];
      if (E && E.type === "element" && E.tagName === "p") {
        const _ = E.children[E.children.length - 1];
        _ && _.type === "text" ? _.value += " " : E.children.push({
          type: "text",
          value: " "
        }), E.children.push(...y);
      } else u.push(...y);
      const C = {
        type: "element",
        tagName: "li",
        properties: {
          id: t + "fn-" + f
        },
        children: e.wrap(u, true)
      };
      e.patch(s, C), l.push(C);
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
          tagName: a,
          properties: {
            ...Dn(o),
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
  const Dl = function(e) {
    if (e == null) return Kh;
    if (typeof e == "function") return qn(e);
    if (typeof e == "object") return Array.isArray(e) ? Uh(e) : Wh(e);
    if (typeof e == "string") return Xh(e);
    throw new Error("Expected function, string, or object as test");
  };
  function Uh(e) {
    const t = [];
    let n = -1;
    for (; ++n < e.length; ) t[n] = Dl(e[n]);
    return qn(i);
    function i(...r) {
      let a = -1;
      for (; ++a < t.length; ) if (t[a].apply(this, r)) return true;
      return false;
    }
  }
  function Wh(e) {
    const t = e;
    return qn(n);
    function n(i) {
      const r = i;
      let a;
      for (a in e) if (r[a] !== t[a]) return false;
      return true;
    }
  }
  function Xh(e) {
    return qn(t);
    function t(n) {
      return n && n.type === e;
    }
  }
  function qn(e) {
    return t;
    function t(n, i, r) {
      return !!(Gh(n) && e.call(this, n, typeof i == "number" ? i : void 0, r || void 0));
    }
  }
  function Kh() {
    return true;
  }
  function Gh(e) {
    return e !== null && typeof e == "object" && "type" in e;
  }
  const Ml = [], Yh = true, Sa = false, Qh = "skip";
  function Jh(e, t, n, i) {
    let r;
    typeof t == "function" && typeof n != "function" ? (i = n, n = t) : r = t;
    const a = Dl(r), o = i ? -1 : 1;
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
        let d = Ml, y, k, E;
        if ((!t || a(c, s, u[u.length - 1] || void 0)) && (d = Zh(n(c, u)), d[0] === Sa)) return d;
        if ("children" in c && c.children) {
          const C = c;
          if (C.children && d[0] !== Qh) for (k = (i ? C.children.length : -1) + o, E = u.concat(C); k > -1 && k < C.children.length; ) {
            const _ = C.children[k];
            if (y = l(_, k, E)(), y[0] === Sa) return y;
            k = typeof y[1] == "number" ? y[1] : k + o;
          }
        }
        return d;
      }
    }
  }
  function Zh(e) {
    return Array.isArray(e) ? e : typeof e == "number" ? [
      Yh,
      e
    ] : e == null ? Ml : [
      e
    ];
  }
  function zl(e, t, n, i) {
    let r, a, o;
    typeof t == "function" ? (a = void 0, o = t, r = n) : (a = t, o = n, r = i), Jh(e, a, l, r);
    function l(c, s) {
      const u = s[s.length - 1], p = u ? u.children.indexOf(c) : void 0;
      return o(c, p, u);
    }
  }
  const qi = {}.hasOwnProperty, eg = {};
  function tg(e, t) {
    const n = t || eg, i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = {
      ...zh,
      ...n.handlers
    }, l = {
      all: s,
      applyData: ig,
      definitionById: i,
      footnoteById: r,
      footnoteCounts: a,
      footnoteOrder: [],
      handlers: o,
      one: c,
      options: n,
      patch: ng,
      wrap: ag
    };
    return zl(e, function(u) {
      if (u.type === "definition" || u.type === "footnoteDefinition") {
        const p = u.type === "definition" ? i : r, f = String(u.identifier).toUpperCase();
        p.has(f) || p.set(f, u);
      }
    }), l;
    function c(u, p) {
      const f = u.type, d = l.handlers[f];
      if (qi.call(l.handlers, f) && d) return d(l, u, p);
      if (l.options.passThrough && l.options.passThrough.includes(f)) {
        if ("children" in u) {
          const { children: k, ...E } = u, C = Dn(E);
          return C.children = l.all(u), C;
        }
        return Dn(u);
      }
      return (l.options.unknownHandler || rg)(l, u, p);
    }
    function s(u) {
      const p = [];
      if ("children" in u) {
        const f = u.children;
        let d = -1;
        for (; ++d < f.length; ) {
          const y = l.one(f[d], u);
          if (y) {
            if (d && f[d - 1].type === "break" && (!Array.isArray(y) && y.type === "text" && (y.value = Ea(y.value)), !Array.isArray(y) && y.type === "element")) {
              const k = y.children[0];
              k && k.type === "text" && (k.value = Ea(k.value));
            }
            Array.isArray(y) ? p.push(...y) : p.push(y);
          }
        }
      }
      return p;
    }
  }
  function ng(e, t) {
    e.position && (t.position = Fd(e));
  }
  function ig(e, t) {
    let n = t;
    if (e && e.data) {
      const i = e.data.hName, r = e.data.hChildren, a = e.data.hProperties;
      if (typeof i == "string") if (n.type === "element") n.tagName = i;
      else {
        const o = "children" in n ? n.children : [
          n
        ];
        n = {
          type: "element",
          tagName: i,
          properties: {},
          children: o
        };
      }
      n.type === "element" && a && Object.assign(n.properties, Dn(a)), "children" in n && n.children && r !== null && r !== void 0 && (n.children = r);
    }
    return n;
  }
  function rg(e, t) {
    const n = t.data || {}, i = "value" in t && !(qi.call(n, "hProperties") || qi.call(n, "hChildren")) ? {
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
  function ag(e, t) {
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
  function Ea(e) {
    let t = 0, n = e.charCodeAt(t);
    for (; n === 9 || n === 32; ) t++, n = e.charCodeAt(t);
    return e.slice(t);
  }
  function _a(e, t) {
    const n = tg(e, t), i = n.one(e, void 0), r = Vh(n), a = Array.isArray(i) ? {
      type: "root",
      children: i
    } : i || {
      type: "root",
      children: []
    };
    return r && a.children.push({
      type: "text",
      value: `
`
    }, r), a;
  }
  function og(e, t) {
    return e && "run" in e ? async function(n, i) {
      const r = _a(n, {
        file: i,
        ...t
      });
      await e.run(r, i);
    } : function(n, i) {
      return _a(n, {
        file: i,
        ...e || t
      });
    };
  }
  function ja(e) {
    if (e) throw e;
  }
  var di, Ta;
  function lg() {
    if (Ta) return di;
    Ta = 1;
    var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = Object.defineProperty, i = Object.getOwnPropertyDescriptor, r = function(s) {
      return typeof Array.isArray == "function" ? Array.isArray(s) : t.call(s) === "[object Array]";
    }, a = function(s) {
      if (!s || t.call(s) !== "[object Object]") return false;
      var u = e.call(s, "constructor"), p = s.constructor && s.constructor.prototype && e.call(s.constructor.prototype, "isPrototypeOf");
      if (s.constructor && !u && !p) return false;
      var f;
      for (f in s) ;
      return typeof f > "u" || e.call(s, f);
    }, o = function(s, u) {
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
    return di = function c() {
      var s, u, p, f, d, y, k = arguments[0], E = 1, C = arguments.length, _ = false;
      for (typeof k == "boolean" && (_ = k, k = arguments[1] || {}, E = 2), (k == null || typeof k != "object" && typeof k != "function") && (k = {}); E < C; ++E) if (s = arguments[E], s != null) for (u in s) p = l(k, u), f = l(s, u), k !== f && (_ && f && (a(f) || (d = r(f))) ? (d ? (d = false, y = p && r(p) ? p : []) : y = p && a(p) ? p : {}, o(k, {
        name: u,
        newValue: c(_, y, f)
      })) : typeof f < "u" && o(k, {
        name: u,
        newValue: f
      }));
      return k;
    }, di;
  }
  var sg = lg();
  const fi = Mn(sg);
  function $i(e) {
    if (typeof e != "object" || e === null) return false;
    const t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
  }
  function cg() {
    const e = [], t = {
      run: n,
      use: i
    };
    return t;
    function n(...r) {
      let a = -1;
      const o = r.pop();
      if (typeof o != "function") throw new TypeError("Expected function as last argument, not " + o);
      l(null, ...r);
      function l(c, ...s) {
        const u = e[++a];
        let p = -1;
        if (c) {
          o(c);
          return;
        }
        for (; ++p < r.length; ) (s[p] === null || s[p] === void 0) && (s[p] = r[p]);
        r = s, u ? ug(u, l)(...s) : o(null, ...s);
      }
    }
    function i(r) {
      if (typeof r != "function") throw new TypeError("Expected `middelware` to be a function, not " + r);
      return e.push(r), t;
    }
  }
  function ug(e, t) {
    let n;
    return i;
    function i(...o) {
      const l = e.length > o.length;
      let c;
      l && o.push(r);
      try {
        c = e.apply(this, o);
      } catch (s) {
        const u = s;
        if (l && n) throw u;
        return r(u);
      }
      l || (c && c.then && typeof c.then == "function" ? c.then(a, r) : c instanceof Error ? r(c) : a(c));
    }
    function r(o, ...l) {
      n || (n = true, t(o, ...l));
    }
    function a(o) {
      r(null, o);
    }
  }
  const nt = {
    basename: pg,
    dirname: dg,
    extname: fg,
    join: mg,
    sep: "/"
  };
  function pg(e, t) {
    if (t !== void 0 && typeof t != "string") throw new TypeError('"ext" argument must be a string');
    cn(e);
    let n = 0, i = -1, r = e.length, a;
    if (t === void 0 || t.length === 0 || t.length > e.length) {
      for (; r--; ) if (e.codePointAt(r) === 47) {
        if (a) {
          n = r + 1;
          break;
        }
      } else i < 0 && (a = true, i = r + 1);
      return i < 0 ? "" : e.slice(n, i);
    }
    if (t === e) return "";
    let o = -1, l = t.length - 1;
    for (; r--; ) if (e.codePointAt(r) === 47) {
      if (a) {
        n = r + 1;
        break;
      }
    } else o < 0 && (a = true, o = r + 1), l > -1 && (e.codePointAt(r) === t.codePointAt(l--) ? l < 0 && (i = r) : (l = -1, i = o));
    return n === i ? i = o : i < 0 && (i = e.length), e.slice(n, i);
  }
  function dg(e) {
    if (cn(e), e.length === 0) return ".";
    let t = -1, n = e.length, i;
    for (; --n; ) if (e.codePointAt(n) === 47) {
      if (i) {
        t = n;
        break;
      }
    } else i || (i = true);
    return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
  }
  function fg(e) {
    cn(e);
    let t = e.length, n = -1, i = 0, r = -1, a = 0, o;
    for (; t--; ) {
      const l = e.codePointAt(t);
      if (l === 47) {
        if (o) {
          i = t + 1;
          break;
        }
        continue;
      }
      n < 0 && (o = true, n = t + 1), l === 46 ? r < 0 ? r = t : a !== 1 && (a = 1) : r > -1 && (a = -1);
    }
    return r < 0 || n < 0 || a === 0 || a === 1 && r === n - 1 && r === i + 1 ? "" : e.slice(r, n);
  }
  function mg(...e) {
    let t = -1, n;
    for (; ++t < e.length; ) cn(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
    return n === void 0 ? "." : hg(n);
  }
  function hg(e) {
    cn(e);
    const t = e.codePointAt(0) === 47;
    let n = gg(e, !t);
    return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
  }
  function gg(e, t) {
    let n = "", i = 0, r = -1, a = 0, o = -1, l, c;
    for (; ++o <= e.length; ) {
      if (o < e.length) l = e.codePointAt(o);
      else {
        if (l === 47) break;
        l = 47;
      }
      if (l === 47) {
        if (!(r === o - 1 || a === 1)) if (r !== o - 1 && a === 2) {
          if (n.length < 2 || i !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
            if (n.length > 2) {
              if (c = n.lastIndexOf("/"), c !== n.length - 1) {
                c < 0 ? (n = "", i = 0) : (n = n.slice(0, c), i = n.length - 1 - n.lastIndexOf("/")), r = o, a = 0;
                continue;
              }
            } else if (n.length > 0) {
              n = "", i = 0, r = o, a = 0;
              continue;
            }
          }
          t && (n = n.length > 0 ? n + "/.." : "..", i = 2);
        } else n.length > 0 ? n += "/" + e.slice(r + 1, o) : n = e.slice(r + 1, o), i = o - r - 1;
        r = o, a = 0;
      } else l === 46 && a > -1 ? a++ : a = -1;
    }
    return n;
  }
  function cn(e) {
    if (typeof e != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
  }
  const xg = {
    cwd: vg
  };
  function vg() {
    return "/";
  }
  function Vi(e) {
    return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0);
  }
  function yg(e) {
    if (typeof e == "string") e = new URL(e);
    else if (!Vi(e)) {
      const t = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
      throw t.code = "ERR_INVALID_ARG_TYPE", t;
    }
    if (e.protocol !== "file:") {
      const t = new TypeError("The URL must be of scheme file");
      throw t.code = "ERR_INVALID_URL_SCHEME", t;
    }
    return bg(e);
  }
  function bg(e) {
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
  const mi = [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ];
  class Fl {
    constructor(t) {
      let n;
      t ? Vi(t) ? n = {
        path: t
      } : typeof t == "string" || wg(t) ? n = {
        value: t
      } : n = t : n = {}, this.cwd = "cwd" in n ? "" : xg.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
      let i = -1;
      for (; ++i < mi.length; ) {
        const a = mi[i];
        a in n && n[a] !== void 0 && n[a] !== null && (this[a] = a === "history" ? [
          ...n[a]
        ] : n[a]);
      }
      let r;
      for (r in n) mi.includes(r) || (this[r] = n[r]);
    }
    get basename() {
      return typeof this.path == "string" ? nt.basename(this.path) : void 0;
    }
    set basename(t) {
      gi(t, "basename"), hi(t, "basename"), this.path = nt.join(this.dirname || "", t);
    }
    get dirname() {
      return typeof this.path == "string" ? nt.dirname(this.path) : void 0;
    }
    set dirname(t) {
      Ia(this.basename, "dirname"), this.path = nt.join(t || "", this.basename);
    }
    get extname() {
      return typeof this.path == "string" ? nt.extname(this.path) : void 0;
    }
    set extname(t) {
      if (hi(t, "extname"), Ia(this.dirname, "extname"), t) {
        if (t.codePointAt(0) !== 46) throw new Error("`extname` must start with `.`");
        if (t.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots");
      }
      this.path = nt.join(this.dirname, this.stem + (t || ""));
    }
    get path() {
      return this.history[this.history.length - 1];
    }
    set path(t) {
      Vi(t) && (t = yg(t)), gi(t, "path"), this.path !== t && this.history.push(t);
    }
    get stem() {
      return typeof this.path == "string" ? nt.basename(this.path, this.extname) : void 0;
    }
    set stem(t) {
      gi(t, "stem"), hi(t, "stem"), this.path = nt.join(this.dirname || "", t + (this.extname || ""));
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
      const r = new Re(t, n, i);
      return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = false, this.messages.push(r), r;
    }
    toString(t) {
      return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value);
    }
  }
  function hi(e, t) {
    if (e && e.includes(nt.sep)) throw new Error("`" + t + "` cannot be a path: did not expect `" + nt.sep + "`");
  }
  function gi(e, t) {
    if (!e) throw new Error("`" + t + "` cannot be empty");
  }
  function Ia(e, t) {
    if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too");
  }
  function wg(e) {
    return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
  }
  const kg = function(e) {
    const i = this.constructor.prototype, r = i[e], a = function() {
      return r.apply(a, arguments);
    };
    return Object.setPrototypeOf(a, i), a;
  }, Cg = {}.hasOwnProperty;
  class fr extends kg {
    constructor() {
      super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = cg();
    }
    copy() {
      const t = new fr();
      let n = -1;
      for (; ++n < this.attachers.length; ) {
        const i = this.attachers[n];
        t.use(...i);
      }
      return t.data(fi(true, {}, this.namespace)), t;
    }
    data(t, n) {
      return typeof t == "string" ? arguments.length === 2 ? (yi("data", this.frozen), this.namespace[t] = n, this) : Cg.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (yi("data", this.frozen), this.namespace = t, this) : this.namespace;
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
      const n = xn(t), i = this.parser || this.Parser;
      return xi("parse", i), i(String(n), n);
    }
    process(t, n) {
      const i = this;
      return this.freeze(), xi("process", this.parser || this.Parser), vi("process", this.compiler || this.Compiler), n ? r(void 0, n) : new Promise(r);
      function r(a, o) {
        const l = xn(t), c = i.parse(l);
        i.run(c, l, function(u, p, f) {
          if (u || !p || !f) return s(u);
          const d = p, y = i.stringify(d, f);
          Eg(y) ? f.value = y : f.result = y, s(u, f);
        });
        function s(u, p) {
          u || !p ? o(u) : a ? a(p) : n(void 0, p);
        }
      }
    }
    processSync(t) {
      let n = false, i;
      return this.freeze(), xi("processSync", this.parser || this.Parser), vi("processSync", this.compiler || this.Compiler), this.process(t, r), Na("processSync", "process", n), i;
      function r(a, o) {
        n = true, ja(a), i = o;
      }
    }
    run(t, n, i) {
      Pa(t), this.freeze();
      const r = this.transformers;
      return !i && typeof n == "function" && (i = n, n = void 0), i ? a(void 0, i) : new Promise(a);
      function a(o, l) {
        const c = xn(n);
        r.run(t, c, s);
        function s(u, p, f) {
          const d = p || t;
          u ? l(u) : o ? o(d) : i(void 0, d, f);
        }
      }
    }
    runSync(t, n) {
      let i = false, r;
      return this.run(t, n, a), Na("runSync", "run", i), r;
      function a(o, l) {
        ja(o), r = l, i = true;
      }
    }
    stringify(t, n) {
      this.freeze();
      const i = xn(n), r = this.compiler || this.Compiler;
      return vi("stringify", r), Pa(t), r(t, i);
    }
    use(t, ...n) {
      const i = this.attachers, r = this.namespace;
      if (yi("use", this.frozen), t != null) if (typeof t == "function") c(t, n);
      else if (typeof t == "object") Array.isArray(t) ? l(t) : o(t);
      else throw new TypeError("Expected usable value, not `" + t + "`");
      return this;
      function a(s) {
        if (typeof s == "function") c(s, []);
        else if (typeof s == "object") if (Array.isArray(s)) {
          const [u, ...p] = s;
          c(u, p);
        } else o(s);
        else throw new TypeError("Expected usable value, not `" + s + "`");
      }
      function o(s) {
        if (!("plugins" in s) && !("settings" in s)) throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
        l(s.plugins), s.settings && (r.settings = fi(true, r.settings, s.settings));
      }
      function l(s) {
        let u = -1;
        if (s != null) if (Array.isArray(s)) for (; ++u < s.length; ) {
          const p = s[u];
          a(p);
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
          let [d, ...y] = u;
          const k = i[f][1];
          $i(k) && $i(d) && (d = fi(true, k, d)), i[f] = [
            s,
            d,
            ...y
          ];
        }
      }
    }
  }
  const Og = new fr().freeze();
  function xi(e, t) {
    if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `parser`");
  }
  function vi(e, t) {
    if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `compiler`");
  }
  function yi(e, t) {
    if (t) throw new Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
  }
  function Pa(e) {
    if (!$i(e) || typeof e.type != "string") throw new TypeError("Expected node, got `" + e + "`");
  }
  function Na(e, t, n) {
    if (!n) throw new Error("`" + e + "` finished async. Use `" + t + "` instead");
  }
  function xn(e) {
    return Sg(e) ? e : new Fl(e);
  }
  function Sg(e) {
    return !!(e && typeof e == "object" && "message" in e && "messages" in e);
  }
  function Eg(e) {
    return typeof e == "string" || _g(e);
  }
  function _g(e) {
    return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
  }
  const jg = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Ra = [], Aa = {
    allowDangerousHtml: true
  }, Tg = /^(https?|ircs?|mailto|xmpp)$/i, Ig = [
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
  function Pg(e) {
    const t = Ng(e), n = Rg(e);
    return Ag(t.runSync(t.parse(n), n), e);
  }
  function Ng(e) {
    const t = e.rehypePlugins || Ra, n = e.remarkPlugins || Ra, i = e.remarkRehypeOptions ? {
      ...e.remarkRehypeOptions,
      ...Aa
    } : Aa;
    return Og().use(ph).use(n).use(og, i).use(t);
  }
  function Rg(e) {
    const t = e.children || "", n = new Fl();
    return typeof t == "string" && (n.value = t), n;
  }
  function Ag(e, t) {
    const n = t.allowedElements, i = t.allowElement, r = t.components, a = t.disallowedElements, o = t.skipHtml, l = t.unwrapDisallowed, c = t.urlTransform || Dg;
    for (const u of Ig) Object.hasOwn(t, u.from) && ("" + u.from + (u.to ? "use `" + u.to + "` instead" : "remove it") + jg + u.id, void 0);
    return zl(e, s), $d(e, {
      Fragment: m.Fragment,
      components: r,
      ignoreInvalidStyle: true,
      jsx: m.jsx,
      jsxs: m.jsxs,
      passKeys: true,
      passNode: true
    });
    function s(u, p, f) {
      if (u.type === "raw" && f && typeof p == "number") return o ? f.children.splice(p, 1) : f.children[p] = {
        type: "text",
        value: u.value
      }, p;
      if (u.type === "element") {
        let d;
        for (d in ci) if (Object.hasOwn(ci, d) && Object.hasOwn(u.properties, d)) {
          const y = u.properties[d], k = ci[d];
          (k === null || k.includes(u.tagName)) && (u.properties[d] = c(String(y || ""), d, u));
        }
      }
      if (u.type === "element") {
        let d = n ? !n.includes(u.tagName) : a ? a.includes(u.tagName) : false;
        if (!d && i && typeof p == "number" && (d = !i(u, p, f)), d && f && typeof p == "number") return l && u.children ? f.children.splice(p, 1, ...u.children) : f.children.splice(p, 1), p;
      }
    }
  }
  function Dg(e) {
    const t = e.indexOf(":"), n = e.indexOf("?"), i = e.indexOf("#"), r = e.indexOf("/");
    return t === -1 || r !== -1 && t > r || n !== -1 && t > n || i !== -1 && t > i || Tg.test(e.slice(0, t)) ? e : "";
  }
  function Da(e) {
    return zn(e).with({
      g: fe.array()
    }, () => true).otherwise(() => false);
  }
  function Mg({ init: e, download: t, dopar: n }) {
    const i = e && e.value < e.max, r = t >= 0 && t < 1, a = n ? n.filter((l) => l && l.value < l.max) : [], o = a.length > 0;
    return (i || r || o) && m.jsxs(In, {
      hasGutter: true,
      children: [
        e && i && m.jsx(Kt, {
          ...e,
          title: "Model Initialization",
          size: "sm"
        }),
        r && m.jsx(Kt, {
          value: t,
          title: "Model Download",
          size: "sm"
        }),
        o && m.jsx(In, {
          children: a.map((l, c) => m.jsx(Kt, {
            ...l,
            size: "sm",
            "aria-label": "dopar"
          }, c))
        })
      ]
    });
  }
  const bi = {};
  function Ui(e) {
    return zn(e).with({
      cross: fe.array()
    }, ({ cross: t }) => t.flatMap(Ui)).with({
      plus: fe.array()
    }, ({ plus: t }) => t.flatMap(Ui)).with({
      assistant: fe.array(fe.string)
    }, ({ assistant: [t] }) => [
      {
        role: "assistant",
        content: t
      }
    ]).with({
      user: fe.array(fe.string)
    }, ({ user: [t] }) => [
      {
        role: "user",
        content: t
      }
    ]).with({
      system: fe.array(fe.string)
    }, ({ system: [t] }) => [
      {
        role: "system",
        content: t
      }
    ]).otherwise(() => []);
  }
  function zg(e, t) {
    return (n) => {
      const i = n.text.match(/Loading model from cache\[(\d+)\/(\d+)\]/);
      i && e({
        min: 0,
        value: parseInt(i[1]),
        max: parseInt(i[2])
      }), t(n.progress * 100);
    };
  }
  async function Fg(e, t, n, i) {
    try {
      const r = await e.chat.completions.create({
        stream: true,
        messages: t
      });
      for await (const a of r) {
        const o = a.choices[0].delta.content;
        o && (n(o), i && i(o.length));
      }
      return e.getMessage();
    } catch (r) {
      return console.error(r), "";
    }
  }
  async function Lg(e, t, n, i) {
    return await ls(new Worker(new URL("/cloud-computer/spnl/assets/generate-worker-C-8I7YPm.js", import.meta.url), {
      type: "module"
    }), [
      e
    ], {
      initProgressCallback: zg(n, i)
    }, {
      temperature: t
    });
  }
  async function Bg(e, t, n, i, r, a, o, l, c) {
    const s = Ui(e);
    console.log("gen messages", s);
    const u = t, p = `${u}.${i}.${c}`;
    p in bi || (console.log("Initializing engine", p), bi[p] = Lg(u, i, a, o));
    const f = await bi[p];
    return Fg(f, s, r, l);
  }
  function Hg() {
  }
  async function kn(e, t, n = -1) {
    return console.log("Execute query", e, n), zn(e).with({
      user: fe._
    }, (i) => (n < 0 && t.emit(`> **User**
${i.user[0].split(`
`).map((r) => `> ${r}`).join(`
`)}

`), i)).with({
      system: fe._
    }, (i) => (n < 0 && t.emit(`> **System**
${i.system[0].split(`
`).map((r) => `> ${r}`).join(`
`)}

`), i)).with({
      assistant: fe._
    }, (i) => i).with({
      g: fe.array()
    }, async ({ g: [, i, r, a] }) => {
      const o = await kn(i, t, n), l = n < 0 ? null : (s) => t.setProgressDoPar((u) => {
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
      }), c = await Bg(o, t.defaultModel, r, a, n >= 0 ? Hg : t.emit, t.setProgressInit, t.setProgressDownload, l, n);
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
        user: [
          c
        ]
      } : {
        assistant: [
          c
        ]
      };
    }).with({
      print: fe.array(fe.string)
    }, (i) => (t.emit("*" + i.print[0] + `*

`), i)).with({
      repeat: fe.array()
    }, (i) => i).with({
      cross: fe.array()
    }, async ({ cross: i }) => {
      const r = [];
      for (const a of i) r.push(await kn(a, t, n));
      return {
        cross: r
      };
    }).with({
      plus: fe.array()
    }, async ({ plus: i }) => {
      i.filter(Da).length > 0 && t.setProgressDoPar(() => []);
      let a = 0;
      return {
        plus: await Promise.all(i.map((o) => {
          const l = Da(o) ? a++ : -1;
          return kn(o, t, l);
        }))
      };
    }).exhaustive();
  }
  function qg({ runState: e, query: t, onComplete: n }) {
    const [i] = Wi("spnl.model.default", {
      defaultValue: ""
    }), [r, a] = w.useState(null), [o, l] = w.useState(-1), [c, s] = w.useState(null), [u, p] = w.useState(""), f = w.useCallback((d) => (p((y) => y + d), d), [
      p
    ]);
    return w.useEffect(() => {
      e === "running" && t !== null && (async (y) => {
        if (!i) {
          p("**Error**: please select a model"), n(false);
          return;
        }
        a(null), l(-1), s(null), p("");
        try {
          await kn(y, {
            defaultModel: i,
            emit: f,
            setProgressInit: a,
            setProgressDownload: l,
            setProgressDoPar: s
          }), n(true);
        } catch (k) {
          console.error(k), n(false);
        }
      })(t);
    }, [
      f,
      t,
      e,
      a,
      l,
      s,
      p,
      n
    ]), m.jsxs(In, {
      hasGutter: true,
      children: [
        m.jsx(Yi, {
          children: m.jsx(Pg, {
            children: u || "*Awaiting query execution*"
          })
        }),
        m.jsx(Mg, {
          init: r,
          download: o,
          dopar: c
        })
      ]
    });
  }
  function $g(e) {
    const [t, n] = w.useState(null), [i, r] = w.useState(null), [a, o] = w.useState(null), [l, c] = w.useState("idle"), s = w.useCallback((p) => c(p ? "success" : "error"), [
      c
    ]);
    w.useEffect(() => {
      if (!i) n(null);
      else try {
        o(null), n(JSON.parse(ss(i)));
      } catch (p) {
        console.error(p), o(p);
      }
    }, [
      i,
      n
    ]);
    const u = w.useCallback(() => c("running"), [
      c
    ]);
    return m.jsx(Ji, {
      masthead: m.jsx(pu, {}),
      isNotificationDrawerExpanded: !!t && e.qv,
      notificationDrawer: m.jsx(lu, {
        unit: t
      }),
      children: m.jsxs(zo, {
        children: [
          m.jsxs(go, {
            component: "ul",
            style: {
              marginBottom: "1em"
            },
            children: [
              m.jsx(Ci, {
                children: "Welcome to the SPNL Playground. Edit your query on the left, then click Run to execute it."
              }),
              a && m.jsxs(Ci, {
                component: "li",
                variant: "error",
                children: [
                  "Compilation error: ",
                  a.message
                ]
              })
            ]
          }),
          m.jsxs(Lo, {
            hasGutter: true,
            children: [
              m.jsx(Ii, {
                span: 7,
                children: m.jsx(md, {
                  isDrawerOpen: e.qv,
                  setQuery: r,
                  onExecuteQuery: u
                })
              }),
              m.jsx(Ii, {
                span: 5,
                children: m.jsxs("div", {
                  className: "pf-v6-c-code-editor",
                  children: [
                    m.jsx(uu, {
                      title: "Console"
                    }),
                    m.jsx("div", {
                      className: "pf-v6-c-code-editor__main",
                      children: m.jsx("div", {
                        className: "pf-v6-c-code-editor__code",
                        children: m.jsx(qg, {
                          runState: l,
                          query: t,
                          onComplete: s
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
  Ug = function() {
    const t = cs.useSearch();
    return m.jsx($g, {
      ...t
    });
  };
});
export {
  __tla,
  Ug as component
};
