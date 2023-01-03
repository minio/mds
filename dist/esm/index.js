import e, { Fragment as t } from "react";
import a, {
  ThemeProvider as n,
  createGlobalStyle as r,
} from "styled-components";
var o = "#fff",
  l = "#2781B0",
  c = "#5B5C5C",
  i = "#E7EAEB",
  s = "#07193E",
  m = "#0D2453",
  h = "#05132F",
  f = "#C51B3F",
  d = "#D5D7D7",
  u = "#B4B4B4",
  v = "#181F2A",
  p = "#A2ADC0",
  g = "#707988",
  b = "#E6ECEC",
  Z = "#B5BCBD",
  V = "#EFEDED",
  E = "#C3CBCB",
  A = "#FF3958",
  x = "#616A7C",
  H = "#3A3F4A",
  y = "#A3B7D9",
  w = {
    bgColor: o,
    fontColor: "#000",
    borderColor: "#E2E2E2",
    bulletColor: l,
    logoColor: f,
    logoLabelColor: "#000000",
    logoLabelInverse: "#fff",
    buttons: {
      regular: {
        enabled: { border: c, text: c, background: o, iconColor: c },
        disabled: { border: u, text: u, background: d, iconColor: u },
        hover: { border: c, text: c, background: "#E6EAEB", iconColor: c },
        pressed: { border: c, text: c, background: "#D5D7D8", iconColor: c },
      },
      callAction: {
        enabled: { border: s, text: o, background: s, iconColor: o },
        disabled: { border: i, text: c, background: i, iconColor: c },
        hover: { border: m, text: o, background: m, iconColor: o },
        pressed: { border: h, text: o, background: h, iconColor: o },
      },
      secondary: {
        enabled: { border: f, text: f, background: o, iconColor: f },
        disabled: { border: u, text: u, background: d, iconColor: u },
        hover: {
          border: "#C83B51",
          text: f,
          background: "#FCF2F4",
          iconColor: f,
        },
        pressed: { border: f, text: o, background: f, iconColor: o },
      },
    },
    login: {
      formBG: "#fff",
      bgFilter: "none",
      promoBG: "#000110",
      promoHeader: o,
      promoText: "#A6DFEF",
      footerElements: l,
      footerDivider: "#F2F2F2",
    },
  },
  M = {
    bgColor: v,
    fontColor: "#8E98A9",
    borderColor: "#8E98A9",
    bulletColor: "#4B586A",
    logoColor: A,
    logoLabelColor: y,
    logoLabelInverse: "#fff",
    buttons: {
      regular: {
        enabled: { border: p, text: p, background: v, iconColor: p },
        disabled: { border: H, text: H, background: x, iconColor: H },
        hover: { border: p, text: p, background: "#4B586A", iconColor: p },
        pressed: { border: g, text: g, background: "#333D4B", iconColor: g },
      },
      callAction: {
        enabled: { border: b, text: v, background: b, iconColor: v },
        disabled: { border: Z, text: v, background: Z, iconColor: v },
        hover: { border: V, text: v, background: V, iconColor: v },
        pressed: { border: E, text: v, background: E, iconColor: v },
      },
      secondary: {
        enabled: { border: A, text: A, background: v, iconColor: A },
        disabled: { border: H, text: H, background: x, iconColor: H },
        hover: { border: A, text: A, background: "#4B586A", iconColor: A },
        pressed: { border: A, text: v, background: A, iconColor: v },
      },
    },
    login: {
      formBG: "#283140",
      promoBG: "#000106",
      bgFilter: "grayscale(50%)",
      promoHeader: y,
      promoText: y,
      footerElements: "#85B3EE",
      footerDivider: "#545D6A",
    },
  },
  C = function (t) {
    var a = t.darkMode,
      r = void 0 !== a && a,
      o = t.children;
    return e.createElement(n, { theme: r ? M : w }, o);
  },
  S = function () {
    return (
      (S =
        Object.assign ||
        function (e) {
          for (var t, a = 1, n = arguments.length; a < n; a++)
            for (var r in (t = arguments[a]))
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e;
        }),
      S.apply(this, arguments)
    );
  };
var N =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {},
  I = Array.isArray,
  _ = "object" == typeof N && N && N.Object === Object && N,
  L = "object" == typeof self && self && self.Object === Object && self,
  k = _ || L || Function("return this")(),
  B = k.Symbol,
  j = B,
  O = Object.prototype,
  z = O.hasOwnProperty,
  q = O.toString,
  F = j ? j.toStringTag : void 0;
var D = function (e) {
    var t = z.call(e, F),
      a = e[F];
    try {
      e[F] = void 0;
      var n = !0;
    } catch (e) {}
    var r = q.call(e);
    return n && (t ? (e[F] = a) : delete e[F]), r;
  },
  P = Object.prototype.toString;
var G = D,
  W = function (e) {
    return P.call(e);
  },
  T = B ? B.toStringTag : void 0;
var $ = function (e) {
  return null == e
    ? void 0 === e
      ? "[object Undefined]"
      : "[object Null]"
    : T && T in Object(e)
    ? G(e)
    : W(e);
};
var R = $,
  U = function (e) {
    return null != e && "object" == typeof e;
  };
var X = function (e) {
    return "symbol" == typeof e || (U(e) && "[object Symbol]" == R(e));
  },
  J = I,
  K = X,
  Q = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  Y = /^\w*$/;
var ee = function (e, t) {
  if (J(e)) return !1;
  var a = typeof e;
  return (
    !("number" != a && "symbol" != a && "boolean" != a && null != e && !K(e)) ||
    Y.test(e) ||
    !Q.test(e) ||
    (null != t && e in Object(t))
  );
};
var te = function (e) {
    var t = typeof e;
    return null != e && ("object" == t || "function" == t);
  },
  ae = $,
  ne = te;
var re,
  oe = function (e) {
    if (!ne(e)) return !1;
    var t = ae(e);
    return (
      "[object Function]" == t ||
      "[object GeneratorFunction]" == t ||
      "[object AsyncFunction]" == t ||
      "[object Proxy]" == t
    );
  },
  le = k["__core-js_shared__"],
  ce = (re = /[^.]+$/.exec((le && le.keys && le.keys.IE_PROTO) || ""))
    ? "Symbol(src)_1." + re
    : "";
var ie = function (e) {
    return !!ce && ce in e;
  },
  se = Function.prototype.toString;
var me = oe,
  he = ie,
  fe = te,
  de = function (e) {
    if (null != e) {
      try {
        return se.call(e);
      } catch (e) {}
      try {
        return e + "";
      } catch (e) {}
    }
    return "";
  },
  ue = /^\[object .+?Constructor\]$/,
  ve = Function.prototype,
  pe = Object.prototype,
  ge = ve.toString,
  be = pe.hasOwnProperty,
  Ze = RegExp(
    "^" +
      ge
        .call(be)
        .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
var Ve = function (e) {
    return !(!fe(e) || he(e)) && (me(e) ? Ze : ue).test(de(e));
  },
  Ee = function (e, t) {
    return null == e ? void 0 : e[t];
  };
var Ae = function (e, t) {
    var a = Ee(e, t);
    return Ve(a) ? a : void 0;
  },
  xe = Ae(Object, "create"),
  He = xe;
var ye = function () {
  (this.__data__ = He ? He(null) : {}), (this.size = 0);
};
var we = function (e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  },
  Me = xe,
  Ce = Object.prototype.hasOwnProperty;
var Se = function (e) {
    var t = this.__data__;
    if (Me) {
      var a = t[e];
      return "__lodash_hash_undefined__" === a ? void 0 : a;
    }
    return Ce.call(t, e) ? t[e] : void 0;
  },
  Ne = xe,
  Ie = Object.prototype.hasOwnProperty;
var _e = xe;
var Le = ye,
  ke = we,
  Be = Se,
  je = function (e) {
    var t = this.__data__;
    return Ne ? void 0 !== t[e] : Ie.call(t, e);
  },
  Oe = function (e, t) {
    var a = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (a[e] = _e && void 0 === t ? "__lodash_hash_undefined__" : t),
      this
    );
  };
function ze(e) {
  var t = -1,
    a = null == e ? 0 : e.length;
  for (this.clear(); ++t < a; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
(ze.prototype.clear = Le),
  (ze.prototype.delete = ke),
  (ze.prototype.get = Be),
  (ze.prototype.has = je),
  (ze.prototype.set = Oe);
var qe = ze;
var Fe = function () {
  (this.__data__ = []), (this.size = 0);
};
var De = function (e, t) {
  return e === t || (e != e && t != t);
};
var Pe = function (e, t) {
    for (var a = e.length; a--; ) if (De(e[a][0], t)) return a;
    return -1;
  },
  Ge = Pe,
  We = Array.prototype.splice;
var Te = Pe;
var $e = Pe;
var Re = Pe;
var Ue = Fe,
  Xe = function (e) {
    var t = this.__data__,
      a = Ge(t, e);
    return (
      !(a < 0) &&
      (a == t.length - 1 ? t.pop() : We.call(t, a, 1), --this.size, !0)
    );
  },
  Je = function (e) {
    var t = this.__data__,
      a = Te(t, e);
    return a < 0 ? void 0 : t[a][1];
  },
  Ke = function (e) {
    return $e(this.__data__, e) > -1;
  },
  Qe = function (e, t) {
    var a = this.__data__,
      n = Re(a, e);
    return n < 0 ? (++this.size, a.push([e, t])) : (a[n][1] = t), this;
  };
function Ye(e) {
  var t = -1,
    a = null == e ? 0 : e.length;
  for (this.clear(); ++t < a; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
(Ye.prototype.clear = Ue),
  (Ye.prototype.delete = Xe),
  (Ye.prototype.get = Je),
  (Ye.prototype.has = Ke),
  (Ye.prototype.set = Qe);
var et = Ye,
  tt = Ae(k, "Map"),
  at = qe,
  nt = et,
  rt = tt;
var ot = function (e) {
  var t = typeof e;
  return "string" == t || "number" == t || "symbol" == t || "boolean" == t
    ? "__proto__" !== e
    : null === e;
};
var lt = function (e, t) {
    var a = e.__data__;
    return ot(t) ? a["string" == typeof t ? "string" : "hash"] : a.map;
  },
  ct = lt;
var it = lt;
var st = lt;
var mt = lt;
var ht = function () {
    (this.size = 0),
      (this.__data__ = {
        hash: new at(),
        map: new (rt || nt)(),
        string: new at(),
      });
  },
  ft = function (e) {
    var t = ct(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  },
  dt = function (e) {
    return it(this, e).get(e);
  },
  ut = function (e) {
    return st(this, e).has(e);
  },
  vt = function (e, t) {
    var a = mt(this, e),
      n = a.size;
    return a.set(e, t), (this.size += a.size == n ? 0 : 1), this;
  };
function pt(e) {
  var t = -1,
    a = null == e ? 0 : e.length;
  for (this.clear(); ++t < a; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
(pt.prototype.clear = ht),
  (pt.prototype.delete = ft),
  (pt.prototype.get = dt),
  (pt.prototype.has = ut),
  (pt.prototype.set = vt);
var gt = pt;
function bt(e, t) {
  if ("function" != typeof e || (null != t && "function" != typeof t))
    throw new TypeError("Expected a function");
  var a = function () {
    var n = arguments,
      r = t ? t.apply(this, n) : n[0],
      o = a.cache;
    if (o.has(r)) return o.get(r);
    var l = e.apply(this, n);
    return (a.cache = o.set(r, l) || o), l;
  };
  return (a.cache = new (bt.Cache || gt)()), a;
}
bt.Cache = gt;
var Zt = bt;
var Vt =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  Et = /\\(\\)?/g,
  At = (function (e) {
    var t = Zt(e, function (e) {
        return 500 === a.size && a.clear(), e;
      }),
      a = t.cache;
    return t;
  })(function (e) {
    var t = [];
    return (
      46 === e.charCodeAt(0) && t.push(""),
      e.replace(Vt, function (e, a, n, r) {
        t.push(n ? r.replace(Et, "$1") : a || e);
      }),
      t
    );
  });
var xt = function (e, t) {
    for (var a = -1, n = null == e ? 0 : e.length, r = Array(n); ++a < n; )
      r[a] = t(e[a], a, e);
    return r;
  },
  Ht = I,
  yt = X,
  wt = B ? B.prototype : void 0,
  Mt = wt ? wt.toString : void 0;
var Ct = function e(t) {
    if ("string" == typeof t) return t;
    if (Ht(t)) return xt(t, e) + "";
    if (yt(t)) return Mt ? Mt.call(t) : "";
    var a = t + "";
    return "0" == a && 1 / t == -Infinity ? "-0" : a;
  },
  St = Ct;
var Nt = I,
  It = ee,
  _t = At,
  Lt = function (e) {
    return null == e ? "" : St(e);
  };
var kt = X;
var Bt = function (e, t) {
    return Nt(e) ? e : It(e, t) ? [e] : _t(Lt(e));
  },
  jt = function (e) {
    if ("string" == typeof e || kt(e)) return e;
    var t = e + "";
    return "0" == t && 1 / e == -Infinity ? "-0" : t;
  };
var Ot = function (e, t) {
  for (var a = 0, n = (t = Bt(t, e)).length; null != e && a < n; )
    e = e[jt(t[a++])];
  return a && a == n ? e : void 0;
};
var zt,
  qt,
  Ft,
  Dt = function (e, t, a) {
    var n = null == e ? void 0 : Ot(e, t);
    return void 0 === n ? a : n;
  },
  Pt = require("../assets/fonts/Inter/Inter-Black.woff"),
  Gt = require("../assets/fonts/Inter/Inter-BlackItalic.woff"),
  Wt = require("../assets/fonts/Inter/Inter-Bold.woff"),
  Tt = require("../assets/fonts/Inter/Inter-BoldItalic.woff"),
  $t = require("../assets/fonts/Inter/Inter-Italic.woff"),
  Rt = require("../assets/fonts/Inter/Inter-Light.woff"),
  Ut = require("../assets/fonts/Inter/Inter-LightItalic.woff"),
  Xt = require("../assets/fonts/Inter/Inter-Regular.woff"),
  Jt = require("../assets/fonts/Inter/Inter-Thin.woff"),
  Kt = require("../assets/fonts/Inter/Inter-Black.woff2"),
  Qt = require("../assets/fonts/Inter/Inter-BlackItalic.woff2"),
  Yt = require("../assets/fonts/Inter/Inter-Bold.woff2"),
  ea = require("../assets/fonts/Inter/Inter-BoldItalic.woff2"),
  ta = require("../assets/fonts/Inter/Inter-Italic.woff2"),
  aa = require("../assets/fonts/Inter/Inter-Light.woff2"),
  na = require("../assets/fonts/Inter/Inter-LightItalic.woff2"),
  ra = require("../assets/fonts/Inter/Inter-Regular.woff2"),
  oa = require("../assets/fonts/Inter/Inter-Thin.woff2"),
  la = r(
    Ft ||
      ((zt = ["\n    ", "\n"]),
      (qt = ["\n    ", "\n"]),
      Object.defineProperty
        ? Object.defineProperty(zt, "raw", { value: qt })
        : (zt.raw = qt),
      (Ft = zt)),
    function (e) {
      var t = e.theme;
      return '\n    /* Fonts */\n    @font-face {\n      font-family: "Inter";\n      src: url('
        .concat(Qt, ') format("woff2"),\n        url(')
        .concat(
          Gt,
          ') format("woff");\n      font-weight: 900;\n      font-style: italic;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Inter";\n      src: url('
        )
        .concat(Yt, ') format("woff2"),\n        url(')
        .concat(
          Wt,
          ') format("woff");\n      font-weight: bold;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Inter";\n      src: url('
        )
        .concat(ea, ') format("woff2"),\n        url(')
        .concat(
          Tt,
          ') format("woff");\n      font-weight: bold;\n      font-style: italic;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Inter";\n      src: url('
        )
        .concat(aa, ') format("woff2"),\n        url(')
        .concat(
          Rt,
          ') format("woff");\n      font-weight: 300;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Inter";\n      src: url('
        )
        .concat(Kt, ') format("woff2"),\n        url(')
        .concat(
          Pt,
          ') format("woff");\n      font-weight: 900;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Inter";\n      src: url('
        )
        .concat(ta, ') format("woff2"),\n        url(')
        .concat(
          $t,
          ') format("woff");\n      font-weight: normal;\n      font-style: italic;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Inter";\n      src: url('
        )
        .concat(ra, ') format("woff2"),\n        url(')
        .concat(
          Xt,
          ') format("woff");\n      font-weight: normal;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Inter";\n      src: url('
        )
        .concat(na, ') format("woff2"),\n        url(')
        .concat(
          Ut,
          ') format("woff");\n      font-weight: 300;\n      font-style: italic;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Inter";\n      src: url('
        )
        .concat(oa, ') format("woff2"),\n        url(')
        .concat(
          Jt,
          ') format("woff");\n      font-weight: 100;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    /* Main Page styling */\n    \n    *, *::before, *::after {\n       box-sizing: inherit;\n       outline:0;\n    }\n    \n    html {\n        box-sizing: border-box;\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n    \n    body {\n        background-color: '
        )
        .concat(Dt(t, "bgColor", "#fff"), ";\n        color: ")
        .concat(
          Dt(t, "fontColor", "#000"),
          ";\n        height: 100vh;\n        width: 100vw;\n        font-family: 'Inter', sans-serif;\n        margin: 0;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        font-weight: 400;\n        font-size: 14px;\n        line-height: 1.5;\n        transition: background-color 0s\n    }\n    \n    fieldset, section {\n        border: 1px solid "
        )
        .concat(
          Dt(t, "borderColor", "#E2E2E2"),
          ";\n        border-radius: 3px;\n        background-color: transparent;\n        padding: 25px;\n    }\n    \n    hr {\n        border-top: 0;\n        border-left: 0;\n        borderR-right: 0;\n        border-color: "
        )
        .concat(
          Dt(t, "borderColor", "#E2E2E2"),
          ";\n        background-color: transparent;\n    }\n    \n    ul {\n        padding-left: 20px;\n        list-style: none;\n        \n        li:not([class*=\"Mui\"])::before {\n          content: '￭';\n          color: "
        )
        .concat(
          Dt(t, "bulletColor", "#2781B0"),
          ';\n          font-size: 20px;\n          display: inline-block;\n          width: 1em;\n          margin-left: -1em;\n        }\n        \n        ul {\n          list-style: none;\n          li:not([class*="Mui"])::before {\n            content: "￮";\n            color: '
        )
        .concat(
          Dt(t, "bulletColor", "#2781B0"),
          ",\n            font-size: 20px;\n            display: inline-block;\n            width: 1em;\n            margin-left: -1em;\n          }\n        }\n      }\n      \n    button:active, button:focus, input: active, input:focus {\n        outline: 0;\n    }\n    \n    .min-icon {\n        width: 26px;\n    }\n    \n    #root: {\n        height: 100%;\n        width: 100%;\n        display: flex;\n        flex-flow: column;\n        align-items: stretch;\n      }\n    \n    #preload {\n      display: none;\n    }\n    \n    #loader-block {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      height: 100vh;\n      justify-content: center;\n      align-items: center;\n    }\n    "
        );
    }
  ),
  ca = a.button(function (e) {
    var t = e.theme,
      a = e.fullWidth,
      n = e.variant,
      r = e.iconLocation,
      o = e.icon,
      l = e.label,
      c = e.collapseOnSmall,
      i = e.parentChildren,
      s = n || "regular",
      m =
        (l || i) && o
          ? {
              marginLeft: "end" === r ? "0" : "10px",
              marginRight: "start" === r ? "0" : "10px",
            }
          : { marginRight: 0, marginLeft: 0 },
      h = {};
    return (
      c &&
        o &&
        ((l && "" !== l.trim()) || i) &&
        (h = {
          "@media (max-width: 768px)": {
            padding: "0 14px",
            "& .button-label": { display: "none" },
          },
        }),
      S(
        {
          borderRadius: "3px",
          cursor: "pointer",
          width: a ? "100%" : "initial",
          height: "39px",
          fontFamily: "'Inter', sans-serif",
          fontWeight: "400",
          fontSize: "14px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
          padding: (l && "" !== l.trim()) || i ? "0 25px" : "0 14px",
          transition: "all 0.2s linear",
          backgroundColor: Dt(
            t,
            "buttons.".concat(s, ".enabled.background"),
            "#fff"
          ),
          borderColor: Dt(t, "buttons.".concat(s, ".enabled.border"), "#000"),
          borderWidth: "1px",
          borderStyle: "solid",
          color: Dt(t, "buttons.".concat(s, ".enabled.text"), "#000"),
          "& .button-label": S({ whiteSpace: a ? "normal" : "nowrap" }, m),
          "& .buttonIcon": {
            display: "block",
            height: "14px",
            "& > svg": {
              fill: Dt(t, "buttons.".concat(s, ".enabled.text"), "#000"),
              color: Dt(t, "buttons.".concat(s, ".enabled.text"), "#000"),
              width: "14px",
              height: "14px",
            },
          },
          "&:disabled": {
            cursor: "not-allowed",
            backgroundColor: Dt(
              t,
              "buttons.".concat(s, ".disabled.background"),
              "#fff"
            ),
            borderColor: Dt(
              t,
              "buttons.".concat(s, ".disabled.border"),
              "#000"
            ),
            borderWeight: "1px",
            borderStyle: "solid",
            color: Dt(t, "buttons.".concat(s, ".disabled.text"), "#000"),
            "& .buttonIcon > svg": {
              fill: Dt(t, "buttons.".concat(s, ".disabled.text"), "#000"),
              color: Dt(t, "buttons.".concat(s, ".disabled.text"), "#000"),
            },
          },
          "&:hover:not(:disabled)": {
            backgroundColor: Dt(
              t,
              "buttons.".concat(s, ".hover.background"),
              "#fff"
            ),
            borderColor: Dt(t, "buttons.".concat(s, ".hover.border"), "#000"),
            borderWeight: "1px",
            borderStyle: "solid",
            color: Dt(t, "buttons.".concat(s, ".hover.text"), "#000"),
            "& .buttonIcon > svg": {
              fill: Dt(t, "buttons.".concat(s, ".hover.text"), "#000"),
              color: Dt(t, "buttons.".concat(s, ".hover.text"), "#000"),
            },
          },
          "&:active:not(:disabled)": {
            backgroundColor: Dt(
              t,
              "buttons.".concat(s, ".pressed.background"),
              "#fff"
            ),
            border: Dt(t, "buttons.".concat(s, ".pressed.border"), "#000"),
            borderWeight: "1px",
            borderStyle: "solid",
            color: Dt(t, "buttons.".concat(s, ".pressed.text"), "#000"),
            "& .buttonIcon > svg": {
              fill: Dt(t, "buttons.".concat(s, ".pressed.text"), "#000"),
              color: Dt(t, "buttons.".concat(s, ".pressed.text"), "#000"),
            },
          },
        },
        h
      )
    );
  }),
  ia = function (a) {
    var n = a.label,
      r = a.variant,
      o = void 0 === r ? "regular" : r,
      l = a.icon,
      c = a.iconLocation,
      i = void 0 === c ? "end" : c,
      s = a.onClick,
      m = a.disabled,
      h = a.fullWidth,
      f = a.collapseOnSmall,
      d = void 0 === f || f,
      u = a.children,
      v = (function (e, t) {
        var a = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (a[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (a[n[r]] = e[n[r]]);
        }
        return a;
      })(a, [
        "label",
        "variant",
        "icon",
        "iconLocation",
        "onClick",
        "disabled",
        "fullWidth",
        "collapseOnSmall",
        "children",
      ]),
      p = null;
    return (
      l && (p = e.createElement("span", { className: "buttonIcon" }, l)),
      e.createElement(
        ca,
        S(
          {
            onClick: s,
            disabled: m || !1,
            variant: o || "regular",
            iconLocation: i || "end",
            label: n || "",
            fullWidth: h || !1,
            collapseOnSmall: !!d,
            icon: p,
            parentChildren: u || null,
          },
          v
        ),
        e.createElement(
          t,
          null,
          l && "start" === i && p,
          e.createElement(
            "span",
            { className: "button-label" },
            u,
            u && n ? " " : "",
            n
          ),
          l && "end" === i && p
        )
      )
    );
  },
  sa = a.svg(function (e) {
    var t = Dt(e, "theme.logoLabelColor", "#000");
    return (
      e.inverse && (t = Dt(e, "theme.logoLabelInverse", "#fff")),
      {
        "& .minioSection": { fill: Dt(e, "theme.logoColor", "#C51C3F") },
        "& .minioApplicationName": { fill: t },
      }
    );
  }),
  ma = function (t) {
    var a = t.inverse;
    return e.createElement(
      sa,
      { viewBox: "0 0 184.538 50.008", inverse: a },
      e.createElement(
        "g",
        { transform: "translate(-31.65 -18.133)" },
        e.createElement(
          "g",
          { transform: "translate(-995 -63.754)" },
          e.createElement(
            "g",
            { transform: "translate(1025.5 81.887)" },
            e.createElement(
              "g",
              { transform: "translate(0 0)" },
              e.createElement(
                "g",
                { transform: "translate(0 0)" },
                e.createElement("path", {
                  d: "M10.338-17.825A8.815,8.815,0,0,0,1.15-8.75,8.815,8.815,0,0,0,10.338.325a8.825,8.825,0,0,0,9.2-9.075A8.825,8.825,0,0,0,10.338-17.825Zm0,3.35a5.4,5.4,0,0,1,5.55,5.725,5.4,5.4,0,0,1-5.55,5.725A5.41,5.41,0,0,1,4.788-8.75,5.41,5.41,0,0,1,10.338-14.475ZM22.05-17.5V0h7.575c4.2,0,6.588-1.65,6.588-5.013A4.2,4.2,0,0,0,33.3-8.938a3.9,3.9,0,0,0,2.537-3.713c0-3.337-2.562-4.85-6.638-4.85Zm7.4,10.225c1.925,0,3.138.45,3.138,2.088,0,1.675-1.212,2.125-3.138,2.125l-3.913-.013v-4.2Zm-.35-7.15c1.725,0,3.1.375,3.1,2.025,0,1.7-1.35,2.063-3.087,2.063H25.538v-4.088ZM48.788-17.5H45.3V-6.7c0,2.525-1.1,3.675-2.95,3.675a4.214,4.214,0,0,1-3.4-1.625L36.925-2.113A6.9,6.9,0,0,0,42.513.313c3.65,0,6.275-2.3,6.275-6.688ZM65.113-3.2H55.525V-7.225h9.05v-3.2h-9.05V-14.3h9.487v-3.2H52.037V0H65.113ZM76.3-17.825A8.794,8.794,0,0,0,67.113-8.75,8.794,8.794,0,0,0,76.3.325a8.713,8.713,0,0,0,7.387-3.7l-2.85-2.05a5.355,5.355,0,0,1-4.562,2.4A5.4,5.4,0,0,1,70.75-8.75a5.411,5.411,0,0,1,5.525-5.725A5.237,5.237,0,0,1,80.8-12.063l3-1.838A8.5,8.5,0,0,0,76.3-17.825Zm22.9.325H84.863v3.262h5.425V0h3.487V-14.238H99.2Zm19.787,1.738a10.5,10.5,0,0,0-6.25-1.925c-3.6,0-6.475,1.812-6.475,5.037,0,2.688,1.938,4.125,5.138,4.488l1.987.225c2.913.325,4.438,1.25,4.438,3.15,0,2.363-2.337,3.525-5.3,3.525a10.115,10.115,0,0,1-5.925-1.95L105.762-2A11.524,11.524,0,0,0,112.537.188c3.775,0,6.875-1.7,6.875-5.1,0-2.913-2.262-4.138-5.375-4.488l-1.912-.212c-2.988-.338-4.275-1.4-4.275-3.138,0-2.187,2.063-3.488,4.875-3.488a9.323,9.323,0,0,1,5.475,1.713ZM135.025-17.5H120.888v1.45h6.3V0h1.525V-16.05h6.313Zm9.875-.2a8.672,8.672,0,0,0-8.963,8.95A8.672,8.672,0,0,0,144.9.2a8.672,8.672,0,0,0,8.962-8.95A8.672,8.672,0,0,0,144.9-17.7Zm0,1.475a7.174,7.174,0,0,1,7.363,7.475A7.174,7.174,0,0,1,144.9-1.275a7.177,7.177,0,0,1-7.375-7.475A7.177,7.177,0,0,1,144.9-16.225ZM157.413-17.5V0h1.525V-7.763h2.675L168.138,0h1.9l-6.625-7.763h.688c3.725,0,6.025-1.862,6.025-4.875,0-3.1-2.175-4.863-6.037-4.863Zm6.663,1.438c2.875,0,4.475,1.188,4.475,3.425s-1.575,3.488-4.475,3.488h-5.138v-6.913ZM185.6-1.438H175.075V-8.1h10.138V-9.525H175.075v-6.538h10.438V-17.5H173.55V0H185.6Z",
                  transform: "translate(0 32.612)",
                  className: "minioApplicationName",
                }),
                e.createElement(
                  "g",
                  { transform: "translate(2.003)" },
                  e.createElement(
                    "g",
                    { transform: "translate(0 0.129)" },
                    e.createElement("rect", {
                      width: "2.49",
                      height: "7.352",
                      transform: "translate(14.42)",
                      className: "minioSection",
                    }),
                    e.createElement("path", {
                      d: "M237.8,365.332l-5.053,3.086a.226.226,0,0,1-.235,0l-5.053-3.086a.694.694,0,0,0-.362-.1H227.1a.693.693,0,0,0-.693.693v6.65h2.489v-3.165a.249.249,0,0,1,.379-.212l2.832,1.733a.886.886,0,0,0,.912.009L236,369.184a.249.249,0,0,1,.374.215v3.174h2.488v-6.65a.693.693,0,0,0-.692-.693h-.006A.694.694,0,0,0,237.8,365.332Z",
                      transform: "translate(-226.403 -365.23)",
                      className: "minioSection",
                    }),
                    e.createElement("path", {
                      d: "M257.822,365.23H255.3v3.346a.249.249,0,0,1-.366.22l-6.543-3.485a.7.7,0,0,0-.326-.081h0a.693.693,0,0,0-.693.693v6.651h2.5v-3.343a.249.249,0,0,1,.365-.22L256.8,372.5a.692.692,0,0,0,.325.081h0a.693.693,0,0,0,.693-.693Z",
                      transform: "translate(-228.498 -365.23)",
                      className: "minioSection",
                    })
                  ),
                  e.createElement("path", {
                    d: "M261.159,372.582V365.23H262.3v7.352Z",
                    transform: "translate(-229.877 -365.101)",
                    className: "minioSection",
                  }),
                  e.createElement("path", {
                    d: "M269.337,372.7c-3.082,0-5.268-1.462-5.268-3.805s2.2-3.806,5.268-3.806,5.281,1.462,5.281,3.806S272.458,372.7,269.337,372.7Zm0-6.637c-2.292,0-4.056,1-4.056,2.832s1.765,2.831,4.056,2.831,4.07-.988,4.07-2.831S271.628,366.062,269.337,366.062Z",
                    transform: "translate(-230.168 -365.087)",
                    className: "minioSection",
                  })
                )
              )
            )
          )
        ),
        e.createElement("path", {
          d: "M5.344-6a1.226,1.226,0,0,0-.57-.922A2.188,2.188,0,0,0,3.547-7.25a2.317,2.317,0,0,0-.928.172A1.468,1.468,0,0,0,2-6.605a1.126,1.126,0,0,0-.221.684.957.957,0,0,0,.154.549,1.3,1.3,0,0,0,.4.379,2.686,2.686,0,0,0,.508.246q.266.1.488.154l.813.219a7.221,7.221,0,0,1,.7.227,3.309,3.309,0,0,1,.738.393,2.04,2.04,0,0,1,.584.635,1.824,1.824,0,0,1,.23.949A2.115,2.115,0,0,1,6.053-1a2.329,2.329,0,0,1-.984.832A3.618,3.618,0,0,1,3.5.141,3.653,3.653,0,0,1,2.014-.137,2.355,2.355,0,0,1,1.029-.91a2.2,2.2,0,0,1-.4-1.152h1a1.236,1.236,0,0,0,.307.748,1.608,1.608,0,0,0,.68.438A2.7,2.7,0,0,0,3.5-.734a2.6,2.6,0,0,0,1-.182,1.687,1.687,0,0,0,.7-.508,1.2,1.2,0,0,0,.258-.764.938.938,0,0,0-.223-.648,1.634,1.634,0,0,0-.586-.406,6.157,6.157,0,0,0-.785-.273L2.875-3.8a3.666,3.666,0,0,1-1.484-.77A1.69,1.69,0,0,1,.844-5.875a1.942,1.942,0,0,1,.365-1.174,2.417,2.417,0,0,1,.984-.781,3.331,3.331,0,0,1,1.385-.279,3.269,3.269,0,0,1,1.375.275,2.409,2.409,0,0,1,.955.752A1.875,1.875,0,0,1,6.281-6Zm3.3-1.141V-8h6v.859H12.131V0h-.969V-7.141ZM16.638,0H15.622l2.938-8h1L22.5,0H21.481L19.091-6.734h-.062Zm.375-3.125h4.094v.859H17.013ZM31.191-8V0h-.937L25.894-6.281h-.078V0h-.969V-8h.938l4.375,6.3h.078V-8ZM36.7,0H34.228V-8h2.578a3.918,3.918,0,0,1,1.992.479,3.16,3.16,0,0,1,1.27,1.371,4.771,4.771,0,0,1,.441,2.135,4.8,4.8,0,0,1-.445,2.15,3.159,3.159,0,0,1-1.3,1.383A4.14,4.14,0,0,1,36.7,0ZM35.2-.859h1.438a3.209,3.209,0,0,0,1.645-.383,2.359,2.359,0,0,0,.973-1.09,4.054,4.054,0,0,0,.32-1.684,4.035,4.035,0,0,0-.316-1.67,2.347,2.347,0,0,0-.945-1.078,3,3,0,0,0-1.566-.377H35.2ZM43.188,0H42.172l2.938-8h1l2.938,8H48.031L45.641-6.734h-.062Zm.375-3.125h4.094v.859H43.563ZM51.4,0V-8h2.7a3.277,3.277,0,0,1,1.539.318,2.054,2.054,0,0,1,.891.873,2.69,2.69,0,0,1,.289,1.262,2.643,2.643,0,0,1-.289,1.254,2.026,2.026,0,0,1-.887.857,3.3,3.3,0,0,1-1.527.311H51.928V-4h2.156a2.415,2.415,0,0,0,1.033-.187,1.194,1.194,0,0,0,.57-.533,1.787,1.787,0,0,0,.178-.826,1.856,1.856,0,0,0-.18-.84,1.235,1.235,0,0,0-.574-.557,2.345,2.345,0,0,0-1.043-.2h-1.7V0Zm3.766-3.594L57.131,0H56.006L54.069-3.594ZM62,0H59.528V-8h2.578a3.918,3.918,0,0,1,1.992.479,3.16,3.16,0,0,1,1.27,1.371,4.771,4.771,0,0,1,.441,2.135,4.8,4.8,0,0,1-.445,2.15,3.159,3.159,0,0,1-1.3,1.383A4.14,4.14,0,0,1,62,0ZM60.5-.859h1.438a3.209,3.209,0,0,0,1.645-.383,2.359,2.359,0,0,0,.973-1.09,4.055,4.055,0,0,0,.32-1.684,4.035,4.035,0,0,0-.316-1.67,2.347,2.347,0,0,0-.945-1.078,3,3,0,0,0-1.566-.377H60.5ZM72.728,0V-8H73.7V-.859h3.719V0Zm8.256-8V0h-.969V-8Zm9.475,2.5h-.969a2.034,2.034,0,0,0-.3-.734,2.072,2.072,0,0,0-.516-.533,2.24,2.24,0,0,0-.67-.326,2.668,2.668,0,0,0-.766-.109,2.431,2.431,0,0,0-1.314.367,2.536,2.536,0,0,0-.934,1.082A4.007,4.007,0,0,0,84.647-4a4.007,4.007,0,0,0,.346,1.754,2.536,2.536,0,0,0,.934,1.082A2.431,2.431,0,0,0,87.241-.8a2.668,2.668,0,0,0,.766-.109,2.24,2.24,0,0,0,.67-.326,2.06,2.06,0,0,0,.516-.535,2.053,2.053,0,0,0,.3-.732h.969a3.227,3.227,0,0,1-.4,1.1,2.973,2.973,0,0,1-.719.822,3.129,3.129,0,0,1-.963.514,3.614,3.614,0,0,1-1.139.176,3.353,3.353,0,0,1-1.82-.5,3.431,3.431,0,0,1-1.254-1.422A4.874,4.874,0,0,1,83.709-4a4.874,4.874,0,0,1,.457-2.187A3.431,3.431,0,0,1,85.42-7.609a3.353,3.353,0,0,1,1.82-.5,3.614,3.614,0,0,1,1.139.176,3.129,3.129,0,0,1,.963.514,2.984,2.984,0,0,1,.719.82A3.208,3.208,0,0,1,90.459-5.5ZM93.122,0V-8H97.95v.859H94.091v2.7H97.7v.859H94.091V-.859h3.922V0Zm14.022-8V0h-.937l-4.359-6.281h-.078V0H100.8V-8h.938l4.375,6.3h.078V-8Zm7.412,2a1.226,1.226,0,0,0-.57-.922,2.188,2.188,0,0,0-1.227-.328,2.317,2.317,0,0,0-.928.172,1.468,1.468,0,0,0-.617.473,1.126,1.126,0,0,0-.221.684.957.957,0,0,0,.154.549,1.3,1.3,0,0,0,.4.379,2.686,2.686,0,0,0,.508.246q.266.1.488.154l.813.219a7.22,7.22,0,0,1,.7.227,3.309,3.309,0,0,1,.738.393,2.04,2.04,0,0,1,.584.635,1.824,1.824,0,0,1,.23.949A2.115,2.115,0,0,1,115.265-1a2.329,2.329,0,0,1-.984.832,3.618,3.618,0,0,1-1.568.309,3.653,3.653,0,0,1-1.486-.277,2.355,2.355,0,0,1-.984-.773,2.2,2.2,0,0,1-.4-1.152h1a1.236,1.236,0,0,0,.307.748,1.608,1.608,0,0,0,.68.438,2.7,2.7,0,0,0,.889.143,2.6,2.6,0,0,0,1-.182,1.687,1.687,0,0,0,.7-.508,1.2,1.2,0,0,0,.258-.764.938.938,0,0,0-.223-.648,1.634,1.634,0,0,0-.586-.406,6.157,6.157,0,0,0-.785-.273l-.984-.281a3.666,3.666,0,0,1-1.484-.77,1.69,1.69,0,0,1-.547-1.309,1.942,1.942,0,0,1,.365-1.174,2.417,2.417,0,0,1,.984-.781,3.331,3.331,0,0,1,1.385-.279,3.269,3.269,0,0,1,1.375.275,2.409,2.409,0,0,1,.955.752A1.875,1.875,0,0,1,115.494-6ZM118.3,0V-8h4.828v.859h-3.859v2.7h3.609v.859h-3.609V-.859h3.922V0Z",
          transform: "translate(93 68)",
          className: "minioApplicationName",
        })
      )
    );
  },
  ha = function (t) {
    var a = t.inverse;
    return e.createElement(
      sa,
      { viewBox: "0 0 184.45 54.229", inverse: a },
      e.createElement(
        "g",
        { transform: "translate(-31.65 -18.133)" },
        e.createElement(
          "g",
          { transform: "translate(-995 -63.754)" },
          e.createElement(
            "g",
            { transform: "translate(1025.5 81.887)" },
            e.createElement(
              "g",
              { transform: "translate(0 0)" },
              e.createElement(
                "g",
                { transform: "translate(0 0)" },
                e.createElement("path", {
                  d: "M10.338-17.825A8.815,8.815,0,0,0,1.15-8.75,8.815,8.815,0,0,0,10.338.325a8.825,8.825,0,0,0,9.2-9.075A8.825,8.825,0,0,0,10.338-17.825Zm0,3.35a5.4,5.4,0,0,1,5.55,5.725,5.4,5.4,0,0,1-5.55,5.725A5.41,5.41,0,0,1,4.788-8.75,5.41,5.41,0,0,1,10.338-14.475ZM22.05-17.5V0h7.575c4.2,0,6.588-1.65,6.588-5.013A4.2,4.2,0,0,0,33.3-8.938a3.9,3.9,0,0,0,2.537-3.713c0-3.337-2.562-4.85-6.638-4.85Zm7.4,10.225c1.925,0,3.138.45,3.138,2.088,0,1.675-1.212,2.125-3.138,2.125l-3.913-.013v-4.2Zm-.35-7.15c1.725,0,3.1.375,3.1,2.025,0,1.7-1.35,2.063-3.087,2.063H25.538v-4.088ZM48.788-17.5H45.3V-6.7c0,2.525-1.1,3.675-2.95,3.675a4.214,4.214,0,0,1-3.4-1.625L36.925-2.113A6.9,6.9,0,0,0,42.513.313c3.65,0,6.275-2.3,6.275-6.688ZM65.113-3.2H55.525V-7.225h9.05v-3.2h-9.05V-14.3h9.487v-3.2H52.037V0H65.113ZM76.3-17.825A8.794,8.794,0,0,0,67.113-8.75,8.794,8.794,0,0,0,76.3.325a8.713,8.713,0,0,0,7.387-3.7l-2.85-2.05a5.355,5.355,0,0,1-4.562,2.4A5.4,5.4,0,0,1,70.75-8.75a5.411,5.411,0,0,1,5.525-5.725A5.237,5.237,0,0,1,80.8-12.063l3-1.838A8.5,8.5,0,0,0,76.3-17.825Zm22.9.325H84.863v3.262h5.425V0h3.487V-14.238H99.2Zm19.787,1.738a10.5,10.5,0,0,0-6.25-1.925c-3.6,0-6.475,1.812-6.475,5.037,0,2.688,1.938,4.125,5.138,4.488l1.987.225c2.913.325,4.438,1.25,4.438,3.15,0,2.363-2.337,3.525-5.3,3.525a10.115,10.115,0,0,1-5.925-1.95L105.762-2A11.524,11.524,0,0,0,112.537.188c3.775,0,6.875-1.7,6.875-5.1,0-2.913-2.262-4.138-5.375-4.488l-1.912-.212c-2.988-.338-4.275-1.4-4.275-3.138,0-2.187,2.063-3.488,4.875-3.488a9.323,9.323,0,0,1,5.475,1.713ZM135.025-17.5H120.888v1.45h6.3V0h1.525V-16.05h6.313Zm9.875-.2a8.672,8.672,0,0,0-8.963,8.95A8.672,8.672,0,0,0,144.9.2a8.672,8.672,0,0,0,8.962-8.95A8.672,8.672,0,0,0,144.9-17.7Zm0,1.475a7.174,7.174,0,0,1,7.363,7.475A7.174,7.174,0,0,1,144.9-1.275a7.177,7.177,0,0,1-7.375-7.475A7.177,7.177,0,0,1,144.9-16.225ZM157.413-17.5V0h1.525V-7.763h2.675L168.138,0h1.9l-6.625-7.763h.688c3.725,0,6.025-1.862,6.025-4.875,0-3.1-2.175-4.863-6.037-4.863Zm6.663,1.438c2.875,0,4.475,1.188,4.475,3.425s-1.575,3.488-4.475,3.488h-5.138v-6.913ZM185.6-1.438H175.075V-8.1h10.138V-9.525H175.075v-6.538h10.438V-17.5H173.55V0H185.6Z",
                  transform: "translate(0 32.612)",
                  className: "minioApplicationName",
                }),
                e.createElement(
                  "g",
                  { transform: "translate(2.003)" },
                  e.createElement(
                    "g",
                    { transform: "translate(0 0.129)" },
                    e.createElement("rect", {
                      width: "2.49",
                      height: "7.352",
                      transform: "translate(14.42)",
                      className: "minioSection",
                    }),
                    e.createElement("path", {
                      d: "M237.8,365.332l-5.053,3.086a.226.226,0,0,1-.235,0l-5.053-3.086a.694.694,0,0,0-.362-.1H227.1a.693.693,0,0,0-.693.693v6.65h2.489v-3.165a.249.249,0,0,1,.379-.212l2.832,1.733a.886.886,0,0,0,.912.009L236,369.184a.249.249,0,0,1,.374.215v3.174h2.488v-6.65a.693.693,0,0,0-.692-.693h-.006A.694.694,0,0,0,237.8,365.332Z",
                      transform: "translate(-226.403 -365.23)",
                      className: "minioSection",
                    }),
                    e.createElement("path", {
                      d: "M257.822,365.23H255.3v3.346a.249.249,0,0,1-.366.22l-6.543-3.485a.7.7,0,0,0-.326-.081h0a.693.693,0,0,0-.693.693v6.651h2.5v-3.343a.249.249,0,0,1,.365-.22L256.8,372.5a.692.692,0,0,0,.325.081h0a.693.693,0,0,0,.693-.693Z",
                      transform: "translate(-228.498 -365.23)",
                      className: "minioSection",
                    })
                  ),
                  e.createElement("path", {
                    d: "M261.159,372.582V365.23H262.3v7.352Z",
                    transform: "translate(-229.877 -365.101)",
                    className: "minioSection",
                  }),
                  e.createElement("path", {
                    d: "M269.337,372.7c-3.082,0-5.268-1.462-5.268-3.805s2.2-3.806,5.268-3.806,5.281,1.462,5.281,3.806S272.458,372.7,269.337,372.7Zm0-6.637c-2.292,0-4.056,1-4.056,2.832s1.765,2.831,4.056,2.831,4.07-.988,4.07-2.831S271.628,366.062,269.337,366.062Z",
                    transform: "translate(-230.168 -365.087)",
                    className: "minioSection",
                  })
                )
              )
            )
          ),
          e.createElement(
            "g",
            { transform: "translate(1168.671 120.754)" },
            e.createElement(
              "g",
              { transform: "translate(-65 0)" },
              e.createElement("path", {
                d: "M106.959,1769.479l-3.274,14.286h31.641a2.814,2.814,0,0,1-2.121-1.012,2.15,2.15,0,0,1-.209-.356c-.038-.092-.073-.185-.109-.28a2.832,2.832,0,0,1-.115-.985,7.182,7.182,0,0,1,1.312-3.389,18.271,18.271,0,0,1,3.616-3.945c.343-.284.7-.566,1.068-.839.458-.337.92-.648,1.383-.938a17.592,17.592,0,0,1,4.907-2.2,18.957,18.957,0,0,0-4.651,2.351l-.171.118a20.8,20.8,0,0,0-2.389,1.924c-2.254,2.119-3.445,4.315-2.9,5.6a1.6,1.6,0,0,0,.138.253c.582.856,2.024,1,3.851.544.124-.031.249-.067.377-.1a14.878,14.878,0,0,0,1.842-.677c.153-.068.309-.137.465-.212l.047-.023c2.015-1,3.563-2.153,3.9-2.845a.43.43,0,0,0,.041-.379c-.239-.485-1.912-.157-3.939.72-.163.07-.328.143-.494.221.136-.125.277-.252.421-.377.23-.2.468-.391.721-.582a14.277,14.277,0,0,1,1.191-.812c1.847-1.394,2.781-2.712,2.586-3.2a.343.343,0,0,0-.235-.194,3.4,3.4,0,0,0-1.942.374,14.514,14.514,0,0,0-2.333,1.25l-.112.073-.021.012-.394.262.226-.415a7.126,7.126,0,0,1,1.565-1.853,11.116,11.116,0,0,1,1.686-1.206c.233-.136.465-.262.7-.376s.476-.22.709-.312a8.2,8.2,0,0,1,1.98-.649c-.051,0-1.677.175-1.677.175H106.959Zm25.5.021a19.123,19.123,0,0,0,.8,5.76q.165.612.362,1.242.123.388.253.765c-.051.075-.1.149-.15.224a7.909,7.909,0,0,0-1.339,3.277,20.169,20.169,0,0,1-.712-3.562q-.059-.546-.091-1.08a15.688,15.688,0,0,1,.877-6.625Zm-15.424,1.833h3.533a1.217,1.217,0,0,1,.691.168.394.394,0,0,1,.185.435l-.415,1.874h-1.227l.4-1.824h-3.071L116.03,1777l-.4,1.815H118.7l0-.011.615-2.778h-1.442l.138-.626h2.668l-.765,3.466a.488.488,0,0,1-.053.138.765.765,0,0,1-.327.294,1.621,1.621,0,0,1-.765.168h-3.477a1.214,1.214,0,0,1-.691-.168.388.388,0,0,1-.185-.432l1.533-6.928a.664.664,0,0,1,.377-.435c.008,0,.016,0,.024-.009a1.6,1.6,0,0,1,.688-.159Zm5.454,0h4.38a1.215,1.215,0,0,1,.688.168.392.392,0,0,1,.188.435l-.818,3.695a.663.663,0,0,1-.38.433,1.612,1.612,0,0,1-.762.171h-3.183l-.615,2.774-.1.456h-1.2l.091-.412Zm6.051,0h1.2l-1.359,6.14-.3,1.341h2.871c.03.22.065.437.1.65h-4.319l.341-1.542Zm-5,.653-.8,3.6h2.992l.794-3.6Zm-6.38,8.485h.035a.85.85,0,0,1,.359.07.428.428,0,0,1,.221.218.532.532,0,0,1,.029.315l-.009.044h-.344l0-.041a.271.271,0,0,0-.032-.188l-.015-.018a.2.2,0,0,0-.029-.024.426.426,0,0,0-.221-.047.511.511,0,0,0-.291.068.258.258,0,0,0-.118.153.113.113,0,0,0,.024.109l0,0a.81.81,0,0,0,.291.1,2,2,0,0,1,.38.12.448.448,0,0,1,.218.209.458.458,0,0,1,.024.291.665.665,0,0,1-.156.291.789.789,0,0,1-.3.212,1,1,0,0,1-.382.076.955.955,0,0,1-.412-.076.473.473,0,0,1-.238-.244.6.6,0,0,1-.029-.356l.009-.041h.338l0,.041a.373.373,0,0,0,.021.189.23.23,0,0,0,.118.112.543.543,0,0,0,.235.047.649.649,0,0,0,.224-.038.4.4,0,0,0,.156-.094.261.261,0,0,0,.068-.126.138.138,0,0,0-.009-.1.214.214,0,0,0-.109-.08l-.288-.085a1.274,1.274,0,0,1-.332-.118.411.411,0,0,1-.18-.194.418.418,0,0,1-.015-.256.622.622,0,0,1,.144-.28.72.72,0,0,1,.288-.2A1.01,1.01,0,0,1,117.169,1780.47Zm3.089.006c.019,0,.036,0,.056,0l.212.023.071.006-.1.262-.021.041-.162-.015a.186.186,0,0,0-.106.023l-.006.006-.012.012a.279.279,0,0,0-.044.112l-.012.047h.253l-.065.292h-.247l-.25,1.121h-.341s.222-1,.25-1.121h-.2l.065-.292h.194c.009-.04.024-.091.024-.091a.717.717,0,0,1,.071-.209.441.441,0,0,1,.162-.159.491.491,0,0,1,.209-.059Zm.815.015-.112.5h.221l-.065.292H120.9c-.018.081-.159.709-.159.709s-.012.076-.012.1c0,0,0,0,0,0s0,0,0,0h0l.035,0,.162-.012-.018.262,0,.047-.232.026a.375.375,0,0,1-.209-.047.209.209,0,0,1-.094-.135.221.221,0,0,1-.006-.047,1.206,1.206,0,0,1,.035-.239s.124-.554.15-.671h-.162l.065-.292h.162c.015-.068.068-.3.068-.3l.274-.144.112-.059Zm-10.841.011h1.324l-.074.329h-.968l-.1.436h.838l-.074.329h-.838c-.018.082-.179.809-.179.809h-.356Zm1.774.465a.331.331,0,0,1,.041,0,.4.4,0,0,1,.238.079l.047.032-.182.3-.05-.035a.214.214,0,0,0-.118-.036.185.185,0,0,0-.1.036.258.258,0,0,0-.088.1.93.93,0,0,0-.088.241l-.159.724H111.2l.315-1.413h.318s-.011.043-.015.059c.015-.012.031-.027.044-.035A.358.358,0,0,1,112.006,1780.968Zm1.012,0c.021,0,.041,0,.062,0a.5.5,0,0,1,.432.2.545.545,0,0,1,.091.317,1.064,1.064,0,0,1-.026.227l-.026.1h-.959c0,.02,0,.041,0,.059a.28.28,0,0,0,.047.173.216.216,0,0,0,.053.053.261.261,0,0,0,.144.038.339.339,0,0,0,.188-.056.5.5,0,0,0,.153-.167h.365l-.032.07a.806.806,0,0,1-.288.329.779.779,0,0,1-.427.121.531.531,0,0,1-.459-.2.644.644,0,0,1-.065-.536.975.975,0,0,1,.3-.541.76.76,0,0,1,.45-.191Zm1.533,0c.021,0,.041,0,.062,0a.5.5,0,0,1,.432.2.545.545,0,0,1,.091.317,1.04,1.04,0,0,1-.026.224l-.026.106h-.959l0,.038s0,.012,0,.018v0c0,.013,0,.028,0,.041a.254.254,0,0,0,.044.132.227.227,0,0,0,.015.021.239.239,0,0,0,.182.071.336.336,0,0,0,.188-.056.5.5,0,0,0,.153-.167h.368l-.035.07a.806.806,0,0,1-.288.329.779.779,0,0,1-.427.121.49.49,0,0,1-.55-.52c0-.02,0-.041,0-.062a1.067,1.067,0,0,1,.024-.153.975.975,0,0,1,.3-.541A.768.768,0,0,1,114.551,1780.968Zm4.175,0c.021,0,.04,0,.062,0a.523.523,0,0,1,.444.2.627.627,0,0,1,.071.529,1.086,1.086,0,0,1-.171.415.811.811,0,0,1-.644.326.516.516,0,0,1-.444-.2.528.528,0,0,1-.094-.321,1.011,1.011,0,0,1,.026-.227.925.925,0,0,1,.341-.568.794.794,0,0,1,.409-.153Zm5.169,0c.025,0,.048,0,.074,0a.748.748,0,0,1,.282.041.31.31,0,0,1,.159.124.337.337,0,0,1,.044.179l-.035.215-.065.291a3.187,3.187,0,0,0-.071.377.377.377,0,0,0,.015.135l.024.077h-.347l-.015-.045a.417.417,0,0,1-.006-.07,1.03,1.03,0,0,1-.191.1.83.83,0,0,1-.271.047.446.446,0,0,1-.35-.123.313.313,0,0,1-.079-.218.474.474,0,0,1,.012-.1.492.492,0,0,1,.091-.2.55.55,0,0,1,.159-.141.71.71,0,0,1,.191-.077l.209-.035a2.331,2.331,0,0,0,.368-.068.185.185,0,0,1,.006-.021.188.188,0,0,0,0-.129l-.006-.006-.012-.012a.29.29,0,0,0-.177-.041.391.391,0,0,0-.206.044.382.382,0,0,0-.127.159h-.356l.032-.071a.75.75,0,0,1,.156-.241.648.648,0,0,1,.247-.144A.974.974,0,0,1,123.895,1780.968Zm1.492,0a.331.331,0,0,1,.041,0,.4.4,0,0,1,.241.079l.044.032-.182.3-.05-.035a.207.207,0,0,0-.115-.036.2.2,0,0,0-.106.036.259.259,0,0,0-.085.1.965.965,0,0,0-.088.241l-.162.724h-.341l.315-1.413h.318s-.008.043-.012.059a.536.536,0,0,1,.044-.035A.342.342,0,0,1,125.386,1780.968Zm1.009,0c.02,0,.041,0,.062,0a.5.5,0,0,1,.432.2.538.538,0,0,1,.091.317,1.077,1.077,0,0,1-.029.227l-.024.1h-.959c0,.02-.006.041-.006.059a.286.286,0,0,0,.047.173.251.251,0,0,0,.018.021l.012.012a.246.246,0,0,0,.171.059.339.339,0,0,0,.188-.056.508.508,0,0,0,.153-.167h.368l-.035.07a.813.813,0,0,1-.288.329.779.779,0,0,1-.427.121.525.525,0,0,1-.456-.2.647.647,0,0,1-.068-.536.972.972,0,0,1,.3-.541A.77.77,0,0,1,126.4,1780.968Zm-5.151.026h.35s.043.838.044.85c.014-.03.025-.055.026-.059l.385-.792h.321s.029.828.029.833l.438-.833h.347l-.765,1.413h-.315s-.03-.766-.032-.809l-.394.809h-.324Zm-8.22.268a.374.374,0,0,0-.224.088.433.433,0,0,0-.121.167h.58c0-.01,0-.023,0-.032a.244.244,0,0,0-.026-.123.207.207,0,0,0-.194-.1Zm1.533,0a.374.374,0,0,0-.224.088.443.443,0,0,0-.121.167h.58c0-.01,0-.023,0-.032a.234.234,0,0,0-.026-.123.244.244,0,0,0-.029-.038.219.219,0,0,0-.165-.062Zm11.856,0a.381.381,0,0,0-.232.088.454.454,0,0,0-.121.167h.577c0-.01,0-.023,0-.032a.234.234,0,0,0-.027-.123.21.21,0,0,0-.194-.1Zm-7.708.006a.39.39,0,0,0-.218.106.637.637,0,0,0-.174.341.779.779,0,0,0-.021.168.289.289,0,0,0,.038.159.316.316,0,0,0,.024.03.229.229,0,0,0,.174.068.372.372,0,0,0,.259-.109.654.654,0,0,0,.174-.347.419.419,0,0,0-.018-.317.213.213,0,0,0-.194-.1C118.734,1781.267,118.72,1781.266,118.705,1781.267Zm5.316.515a2.16,2.16,0,0,1-.288.056.968.968,0,0,0-.188.042.208.208,0,0,0-.079.056.173.173,0,0,0-.041.077.2.2,0,0,0,0,.032s0,0,0,0,0,.007,0,.009a.113.113,0,0,0,0,.015l0,.006a.087.087,0,0,0,0,.009l.006.009.009.012a.185.185,0,0,0,.138.038.465.465,0,0,0,.212-.047.409.409,0,0,0,.156-.135A.545.545,0,0,0,124.021,1781.782Zm-17.969-2.359,7.9-8.152h1.289l-1.906,8.152H112.27l.541-2.347H109.5l-2.249,2.347h-1.2m4.254-3.186h2.707l.5-2.047q.3-1.217.582-2.029-.559.7-1.479,1.662l-2.309,2.413",
                transform: "translate(-103.684 -1768.875)",
                className: "minioApplicationName",
              }),
              e.createElement("path", {
                d: "M627.829,1776.9a3.183,3.183,0,0,1-2.4-1.149,2.464,2.464,0,0,1-.241-.411c-.045-.107-.084-.207-.123-.307l.439-.17c.038.1.075.193.114.287a2,2,0,0,0,.19.323,2.685,2.685,0,0,0,2.04.958h1.032a9.027,9.027,0,0,0,1-.141,12.945,12.945,0,0,0,1.935-.55c.524-.191,1.054-.415,1.575-.666a22.265,22.265,0,0,0,3.559-2.154c.377-.278.756-.574,1.124-.881q.494-.411.947-.834a9.057,9.057,0,0,0,1.807-2.317c.348-.7.407-1.259.167-1.576a.989.989,0,0,0-.749-.326l-.622-.048.5-.375c1.786-1.34,2.8-2.927,2.457-3.858a1,1,0,0,0-.638-.59,2.032,2.032,0,0,0-.516-.106h-.549a8.415,8.415,0,0,0-2.824.8l-.207-.423a8.932,8.932,0,0,1,3.014-.845h.585a2.509,2.509,0,0,1,.656.133,1.455,1.455,0,0,1,.921.871c.387,1.063-.5,2.665-2.216,4.081a1.2,1.2,0,0,1,.564.4,1.959,1.959,0,0,1-.121,2.07,9.408,9.408,0,0,1-1.9,2.449q-.466.435-.97.854c-.376.313-.761.615-1.146.9a22.77,22.77,0,0,1-3.635,2.2c-.535.257-1.079.487-1.617.683a13.4,13.4,0,0,1-2.006.569,9.406,9.406,0,0,1-1.07.148Z",
                transform: "translate(-596.283 -1761.542)",
                className: "minioApplicationName",
              })
            )
          )
        ),
        e.createElement("path", {
          d: "M.969,0V-8h.969V-.859H5.656V0ZM9.225-8V0H8.256V-8ZM18.7-5.5h-.969a2.034,2.034,0,0,0-.3-.734,2.072,2.072,0,0,0-.516-.533,2.24,2.24,0,0,0-.67-.326,2.668,2.668,0,0,0-.766-.109,2.431,2.431,0,0,0-1.314.367,2.536,2.536,0,0,0-.934,1.082A4.007,4.007,0,0,0,12.887-4a4.007,4.007,0,0,0,.346,1.754,2.536,2.536,0,0,0,.934,1.082A2.431,2.431,0,0,0,15.481-.8a2.668,2.668,0,0,0,.766-.109,2.24,2.24,0,0,0,.67-.326,2.06,2.06,0,0,0,.516-.535,2.053,2.053,0,0,0,.3-.732H18.7a3.227,3.227,0,0,1-.4,1.1,2.973,2.973,0,0,1-.719.822,3.129,3.129,0,0,1-.963.514,3.614,3.614,0,0,1-1.139.176,3.353,3.353,0,0,1-1.82-.5,3.431,3.431,0,0,1-1.254-1.422A4.874,4.874,0,0,1,11.95-4a4.874,4.874,0,0,1,.457-2.187,3.431,3.431,0,0,1,1.254-1.422,3.353,3.353,0,0,1,1.82-.5,3.614,3.614,0,0,1,1.139.176,3.129,3.129,0,0,1,.963.514,2.984,2.984,0,0,1,.719.82A3.208,3.208,0,0,1,18.7-5.5ZM21.362,0V-8h4.828v.859H22.331v2.7h3.609v.859H22.331V-.859h3.922V0ZM35.384-8V0h-.937L30.087-6.281h-.078V0h-.969V-8h.938l4.375,6.3h.078V-8ZM42.8-6a1.226,1.226,0,0,0-.57-.922A2.188,2.188,0,0,0,41-7.25a2.317,2.317,0,0,0-.928.172,1.468,1.468,0,0,0-.617.473,1.126,1.126,0,0,0-.221.684.957.957,0,0,0,.154.549,1.3,1.3,0,0,0,.4.379,2.686,2.686,0,0,0,.508.246q.266.1.488.154l.813.219a7.221,7.221,0,0,1,.7.227,3.309,3.309,0,0,1,.738.393,2.04,2.04,0,0,1,.584.635,1.824,1.824,0,0,1,.23.949A2.115,2.115,0,0,1,43.506-1a2.329,2.329,0,0,1-.984.832,3.618,3.618,0,0,1-1.568.309,3.653,3.653,0,0,1-1.486-.277,2.355,2.355,0,0,1-.984-.773,2.2,2.2,0,0,1-.4-1.152h1a1.236,1.236,0,0,0,.307.748,1.608,1.608,0,0,0,.68.438,2.7,2.7,0,0,0,.889.143,2.6,2.6,0,0,0,1-.182,1.687,1.687,0,0,0,.7-.508,1.2,1.2,0,0,0,.258-.764.938.938,0,0,0-.223-.648,1.634,1.634,0,0,0-.586-.406,6.157,6.157,0,0,0-.785-.273L40.328-3.8a3.666,3.666,0,0,1-1.484-.77A1.69,1.69,0,0,1,38.3-5.875a1.942,1.942,0,0,1,.365-1.174,2.417,2.417,0,0,1,.984-.781,3.331,3.331,0,0,1,1.385-.279,3.269,3.269,0,0,1,1.375.275,2.409,2.409,0,0,1,.955.752A1.875,1.875,0,0,1,43.734-6Zm3.741,6V-8h4.828v.859H47.506v2.7h3.609v.859H47.506V-.859h3.922V0Z",
          transform: "translate(164 68)",
          className: "minioApplicationName",
        })
      )
    );
  },
  fa = function (t) {
    var a = t.inverse;
    return e.createElement(
      sa,
      { viewBox: "0 0 184.45 50.008", inverse: a },
      e.createElement(
        "g",
        { transform: "translate(-31.65 -18.133)" },
        e.createElement(
          "g",
          { transform: "translate(-995 -63.754)" },
          e.createElement(
            "g",
            { transform: "translate(1025.5 81.887)" },
            e.createElement(
              "g",
              { transform: "translate(0 0)" },
              e.createElement(
                "g",
                { transform: "translate(0 0)" },
                e.createElement("path", {
                  d: "M10.338-17.825A8.815,8.815,0,0,0,1.15-8.75,8.815,8.815,0,0,0,10.338.325a8.825,8.825,0,0,0,9.2-9.075A8.825,8.825,0,0,0,10.338-17.825Zm0,3.35a5.4,5.4,0,0,1,5.55,5.725,5.4,5.4,0,0,1-5.55,5.725A5.41,5.41,0,0,1,4.788-8.75,5.41,5.41,0,0,1,10.338-14.475ZM22.05-17.5V0h7.575c4.2,0,6.588-1.65,6.588-5.013A4.2,4.2,0,0,0,33.3-8.938a3.9,3.9,0,0,0,2.537-3.713c0-3.337-2.562-4.85-6.638-4.85Zm7.4,10.225c1.925,0,3.138.45,3.138,2.088,0,1.675-1.212,2.125-3.138,2.125l-3.913-.013v-4.2Zm-.35-7.15c1.725,0,3.1.375,3.1,2.025,0,1.7-1.35,2.063-3.087,2.063H25.538v-4.088ZM48.788-17.5H45.3V-6.7c0,2.525-1.1,3.675-2.95,3.675a4.214,4.214,0,0,1-3.4-1.625L36.925-2.113A6.9,6.9,0,0,0,42.513.313c3.65,0,6.275-2.3,6.275-6.688ZM65.113-3.2H55.525V-7.225h9.05v-3.2h-9.05V-14.3h9.487v-3.2H52.037V0H65.113ZM76.3-17.825A8.794,8.794,0,0,0,67.113-8.75,8.794,8.794,0,0,0,76.3.325a8.713,8.713,0,0,0,7.387-3.7l-2.85-2.05a5.355,5.355,0,0,1-4.562,2.4A5.4,5.4,0,0,1,70.75-8.75a5.411,5.411,0,0,1,5.525-5.725A5.237,5.237,0,0,1,80.8-12.063l3-1.838A8.5,8.5,0,0,0,76.3-17.825Zm22.9.325H84.863v3.262h5.425V0h3.487V-14.238H99.2Zm19.787,1.738a10.5,10.5,0,0,0-6.25-1.925c-3.6,0-6.475,1.812-6.475,5.037,0,2.688,1.938,4.125,5.138,4.488l1.987.225c2.913.325,4.438,1.25,4.438,3.15,0,2.363-2.337,3.525-5.3,3.525a10.115,10.115,0,0,1-5.925-1.95L105.762-2A11.524,11.524,0,0,0,112.537.188c3.775,0,6.875-1.7,6.875-5.1,0-2.913-2.262-4.138-5.375-4.488l-1.912-.212c-2.988-.338-4.275-1.4-4.275-3.138,0-2.187,2.063-3.488,4.875-3.488a9.323,9.323,0,0,1,5.475,1.713ZM135.025-17.5H120.888v1.45h6.3V0h1.525V-16.05h6.313Zm9.875-.2a8.672,8.672,0,0,0-8.963,8.95A8.672,8.672,0,0,0,144.9.2a8.672,8.672,0,0,0,8.962-8.95A8.672,8.672,0,0,0,144.9-17.7Zm0,1.475a7.174,7.174,0,0,1,7.363,7.475A7.174,7.174,0,0,1,144.9-1.275a7.177,7.177,0,0,1-7.375-7.475A7.177,7.177,0,0,1,144.9-16.225ZM157.413-17.5V0h1.525V-7.763h2.675L168.138,0h1.9l-6.625-7.763h.688c3.725,0,6.025-1.862,6.025-4.875,0-3.1-2.175-4.863-6.037-4.863Zm6.663,1.438c2.875,0,4.475,1.188,4.475,3.425s-1.575,3.488-4.475,3.488h-5.138v-6.913ZM185.6-1.438H175.075V-8.1h10.138V-9.525H175.075v-6.538h10.438V-17.5H173.55V0H185.6Z",
                  transform: "translate(0 32.612)",
                  className: "minioApplicationName",
                }),
                e.createElement(
                  "g",
                  { transform: "translate(2.003)" },
                  e.createElement(
                    "g",
                    { transform: "translate(0 0.129)" },
                    e.createElement("rect", {
                      width: "2.49",
                      height: "7.352",
                      transform: "translate(14.42)",
                      className: "minioSection",
                    }),
                    e.createElement("path", {
                      d: "M237.8,365.332l-5.053,3.086a.226.226,0,0,1-.235,0l-5.053-3.086a.694.694,0,0,0-.362-.1H227.1a.693.693,0,0,0-.693.693v6.65h2.489v-3.165a.249.249,0,0,1,.379-.212l2.832,1.733a.886.886,0,0,0,.912.009L236,369.184a.249.249,0,0,1,.374.215v3.174h2.488v-6.65a.693.693,0,0,0-.692-.693h-.006A.694.694,0,0,0,237.8,365.332Z",
                      transform: "translate(-226.403 -365.23)",
                      className: "minioSection",
                    }),
                    e.createElement("path", {
                      d: "M257.822,365.23H255.3v3.346a.249.249,0,0,1-.366.22l-6.543-3.485a.7.7,0,0,0-.326-.081h0a.693.693,0,0,0-.693.693v6.651h2.5v-3.343a.249.249,0,0,1,.365-.22L256.8,372.5a.692.692,0,0,0,.325.081h0a.693.693,0,0,0,.693-.693Z",
                      transform: "translate(-228.498 -365.23)",
                      className: "minioSection",
                    })
                  ),
                  e.createElement("path", {
                    d: "M261.159,372.582V365.23H262.3v7.352Z",
                    transform: "translate(-229.877 -365.101)",
                    className: "minioSection",
                  }),
                  e.createElement("path", {
                    d: "M269.337,372.7c-3.082,0-5.268-1.462-5.268-3.805s2.2-3.806,5.268-3.806,5.281,1.462,5.281,3.806S272.458,372.7,269.337,372.7Zm0-6.637c-2.292,0-4.056,1-4.056,2.832s1.765,2.831,4.056,2.831,4.07-.988,4.07-2.831S271.628,366.062,269.337,366.062Z",
                    transform: "translate(-230.168 -365.087)",
                    className: "minioSection",
                  })
                )
              )
            )
          )
        ),
        e.createElement("path", {
          d: "M.969,0V-8H5.8v.859H1.938v2.7H5.547v.859H1.938V-.859H5.859V0ZM14.991-8V0h-.937L9.694-6.281H9.616V0H8.647V-8h.938l4.375,6.3h.078V-8Zm2.6.859V-8h6v.859H21.075V0h-.969V-7.141ZM26.191,0V-8h4.828v.859H27.159v2.7h3.609v.859H27.159V-.859h3.922V0Zm7.678,0V-8h2.7a3.277,3.277,0,0,1,1.539.318A2.054,2.054,0,0,1,39-6.809a2.69,2.69,0,0,1,.289,1.262A2.643,2.643,0,0,1,39-4.293a2.026,2.026,0,0,1-.887.857,3.3,3.3,0,0,1-1.527.311H34.4V-4h2.156a2.415,2.415,0,0,0,1.033-.187,1.194,1.194,0,0,0,.57-.533,1.787,1.787,0,0,0,.178-.826,1.856,1.856,0,0,0-.18-.84,1.235,1.235,0,0,0-.574-.557,2.345,2.345,0,0,0-1.043-.2h-1.7V0Zm3.766-3.594L39.6,0H38.478L36.541-3.594ZM42,0V-8h2.7a3.116,3.116,0,0,1,1.541.338,2.141,2.141,0,0,1,.889.912,2.809,2.809,0,0,1,.289,1.281,2.849,2.849,0,0,1-.287,1.285,2.149,2.149,0,0,1-.885.92,3.057,3.057,0,0,1-1.531.342H42.781v-.859h1.906A2.084,2.084,0,0,0,45.723-4a1.337,1.337,0,0,0,.568-.6,2.013,2.013,0,0,0,.178-.861,2,2,0,0,0-.178-.859,1.3,1.3,0,0,0-.572-.6,2.173,2.173,0,0,0-1.047-.217h-1.7V0Zm8.084,0V-8h2.7a3.277,3.277,0,0,1,1.539.318,2.054,2.054,0,0,1,.891.873,2.69,2.69,0,0,1,.289,1.262,2.643,2.643,0,0,1-.289,1.254,2.026,2.026,0,0,1-.887.857,3.3,3.3,0,0,1-1.527.311H50.616V-4h2.156a2.415,2.415,0,0,0,1.033-.187,1.194,1.194,0,0,0,.57-.533,1.787,1.787,0,0,0,.178-.826,1.856,1.856,0,0,0-.18-.84,1.235,1.235,0,0,0-.574-.557,2.345,2.345,0,0,0-1.043-.2h-1.7V0ZM53.85-3.594,55.819,0H54.694L52.756-3.594ZM59.184-8V0h-.969V-8ZM66.6-6a1.226,1.226,0,0,0-.57-.922A2.188,2.188,0,0,0,64.8-7.25a2.318,2.318,0,0,0-.928.172,1.468,1.468,0,0,0-.617.473,1.126,1.126,0,0,0-.221.684.957.957,0,0,0,.154.549,1.3,1.3,0,0,0,.4.379,2.686,2.686,0,0,0,.508.246q.266.1.488.154l.813.219a7.22,7.22,0,0,1,.7.227,3.308,3.308,0,0,1,.738.393,2.04,2.04,0,0,1,.584.635,1.824,1.824,0,0,1,.23.949A2.115,2.115,0,0,1,67.306-1a2.329,2.329,0,0,1-.984.832,3.618,3.618,0,0,1-1.568.309,3.653,3.653,0,0,1-1.486-.277,2.355,2.355,0,0,1-.984-.773,2.2,2.2,0,0,1-.4-1.152h1a1.236,1.236,0,0,0,.307.748,1.608,1.608,0,0,0,.68.438,2.7,2.7,0,0,0,.889.143,2.6,2.6,0,0,0,1-.182,1.687,1.687,0,0,0,.7-.508,1.2,1.2,0,0,0,.258-.764.938.938,0,0,0-.223-.648,1.634,1.634,0,0,0-.586-.406,6.157,6.157,0,0,0-.785-.273L64.128-3.8a3.666,3.666,0,0,1-1.484-.77A1.69,1.69,0,0,1,62.1-5.875a1.942,1.942,0,0,1,.365-1.174,2.417,2.417,0,0,1,.984-.781,3.331,3.331,0,0,1,1.385-.279,3.269,3.269,0,0,1,1.375.275,2.409,2.409,0,0,1,.955.752A1.875,1.875,0,0,1,67.534-6Zm3.741,6V-8h4.828v.859H71.306v2.7h3.609v.859H71.306V-.859h3.922V0ZM82.209,0V-8h.969V-.859H86.9V0Zm8.256-8V0H89.5V-8Zm9.475,2.5h-.969a2.034,2.034,0,0,0-.3-.734,2.072,2.072,0,0,0-.516-.533,2.24,2.24,0,0,0-.67-.326,2.668,2.668,0,0,0-.766-.109,2.431,2.431,0,0,0-1.314.367,2.536,2.536,0,0,0-.934,1.082A4.007,4.007,0,0,0,94.128-4a4.007,4.007,0,0,0,.346,1.754,2.536,2.536,0,0,0,.934,1.082A2.431,2.431,0,0,0,96.722-.8a2.668,2.668,0,0,0,.766-.109,2.24,2.24,0,0,0,.67-.326,2.06,2.06,0,0,0,.516-.535,2.053,2.053,0,0,0,.3-.732h.969a3.227,3.227,0,0,1-.4,1.1,2.973,2.973,0,0,1-.719.822,3.129,3.129,0,0,1-.963.514,3.614,3.614,0,0,1-1.139.176,3.353,3.353,0,0,1-1.82-.5,3.431,3.431,0,0,1-1.254-1.422A4.874,4.874,0,0,1,93.191-4a4.874,4.874,0,0,1,.457-2.187A3.431,3.431,0,0,1,94.9-7.609a3.353,3.353,0,0,1,1.82-.5,3.614,3.614,0,0,1,1.139.176,3.129,3.129,0,0,1,.963.514,2.984,2.984,0,0,1,.719.82A3.208,3.208,0,0,1,99.941-5.5ZM102.6,0V-8h4.828v.859h-3.859v2.7h3.609v.859h-3.609V-.859h3.922V0Zm14.022-8V0h-.937l-4.359-6.281h-.078V0h-.969V-8h.938l4.375,6.3h.078V-8Zm7.412,2a1.226,1.226,0,0,0-.57-.922,2.188,2.188,0,0,0-1.227-.328,2.317,2.317,0,0,0-.928.172,1.468,1.468,0,0,0-.617.473,1.126,1.126,0,0,0-.221.684.957.957,0,0,0,.154.549,1.3,1.3,0,0,0,.4.379,2.686,2.686,0,0,0,.508.246q.266.1.488.154l.813.219a7.22,7.22,0,0,1,.7.227,3.309,3.309,0,0,1,.738.393,2.04,2.04,0,0,1,.584.635,1.824,1.824,0,0,1,.23.949A2.115,2.115,0,0,1,124.746-1a2.329,2.329,0,0,1-.984.832,3.618,3.618,0,0,1-1.568.309,3.653,3.653,0,0,1-1.486-.277,2.355,2.355,0,0,1-.984-.773,2.2,2.2,0,0,1-.4-1.152h1a1.236,1.236,0,0,0,.307.748,1.608,1.608,0,0,0,.68.438,2.7,2.7,0,0,0,.889.143,2.6,2.6,0,0,0,1-.182,1.687,1.687,0,0,0,.7-.508,1.2,1.2,0,0,0,.258-.764.938.938,0,0,0-.223-.648,1.634,1.634,0,0,0-.586-.406,6.157,6.157,0,0,0-.785-.273l-.984-.281a3.666,3.666,0,0,1-1.484-.77,1.69,1.69,0,0,1-.547-1.309,1.942,1.942,0,0,1,.365-1.174,2.417,2.417,0,0,1,.984-.781,3.331,3.331,0,0,1,1.385-.279,3.269,3.269,0,0,1,1.375.275,2.409,2.409,0,0,1,.955.752A1.875,1.875,0,0,1,124.975-6Zm3.741,6V-8h4.828v.859h-3.859v2.7h3.609v.859h-3.609V-.859h3.922V0Z",
          transform: "translate(83 68)",
          className: "minioApplicationName",
        })
      )
    );
  },
  da = function (t) {
    var a = t.inverse;
    return e.createElement(
      sa,
      { viewBox: "0 0 154.498 50.008", inverse: a },
      e.createElement(
        "g",
        { transform: "translate(27.666 -11)" },
        e.createElement(
          "g",
          { transform: "translate(-29 11)" },
          e.createElement(
            "g",
            { transform: "translate(0 0)" },
            e.createElement("path", {
              d: "M11.992-20.677A10.225,10.225,0,0,0,1.334-10.15,10.225,10.225,0,0,0,11.992.377,10.237,10.237,0,0,0,22.664-10.15,10.237,10.237,0,0,0,11.992-20.677Zm0,3.886A6.268,6.268,0,0,1,18.43-10.15a6.268,6.268,0,0,1-6.438,6.641A6.276,6.276,0,0,1,5.554-10.15,6.276,6.276,0,0,1,11.992-16.791ZM33.887-7.424c4.814,0,7.4-2.523,7.4-6.424,0-3.929-2.581-6.453-7.424-6.453h-8.28V0h4.046V-7.424Zm-.1-9.15c2.2,0,3.35.914,3.35,2.726s-1.146,2.726-3.35,2.726H29.624v-5.452ZM59.174-3.712H48.053V-8.381h10.5v-3.712h-10.5v-4.5H59.059V-20.3H44.007V0H59.174ZM62.6-20.3V0h4.045V-8.077h1.189L73.747,0h4.9L72.4-8.135c3.9-.377,6.221-2.654,6.221-5.989,0-3.886-2.6-6.177-7.438-6.177Zm8.512,3.726c2.146,0,3.35.769,3.35,2.451,0,1.711-1.146,2.523-3.35,2.523H66.642v-4.974ZM92.278-20.3h-4.93L79.445,0h4.22l1.769-4.727H94.09L95.86,0h4.321Zm-2.508,4L92.7-8.454H86.826Zm25.288-4H98.426v3.785h6.293V0h4.045V-16.516h6.293Zm11.136-.377A10.225,10.225,0,0,0,115.536-10.15,10.225,10.225,0,0,0,126.194.377,10.237,10.237,0,0,0,136.866-10.15,10.237,10.237,0,0,0,126.194-20.677Zm0,3.886a6.268,6.268,0,0,1,6.438,6.641,6.268,6.268,0,0,1-6.438,6.641,6.276,6.276,0,0,1-6.438-6.641A6.276,6.276,0,0,1,126.194-16.791ZM139.78-20.3V0h4.046V-8.077h1.189L150.931,0h4.9l-6.25-8.135c3.9-.377,6.221-2.654,6.221-5.989,0-3.886-2.6-6.177-7.439-6.177Zm8.512,3.726c2.146,0,3.35.769,3.35,2.451,0,1.711-1.146,2.523-3.35,2.523h-4.466v-4.974Z",
              transform: "translate(0 37.951)",
              className: "minioApplicationName",
            }),
            e.createElement(
              "g",
              { transform: "translate(2.356 0)" },
              e.createElement(
                "g",
                { transform: "translate(0 0.151)" },
                e.createElement("rect", {
                  width: "2.928",
                  height: "8.645",
                  transform: "translate(16.956)",
                  className: "minioSection",
                }),
                e.createElement("path", {
                  d: "M239.81,365.349l-5.942,3.629a.265.265,0,0,1-.276,0l-5.942-3.629a.816.816,0,0,0-.425-.119h-.007a.815.815,0,0,0-.815.815v7.82h2.926v-3.722a.293.293,0,0,1,.446-.25l3.33,2.037a1.042,1.042,0,0,0,1.072.011l3.515-2.062a.293.293,0,0,1,.44.253v3.733h2.925v-7.82a.814.814,0,0,0-.814-.815h-.007A.816.816,0,0,0,239.81,365.349Z",
                  transform: "translate(-226.403 -365.23)",
                  className: "minioSection",
                }),
                e.createElement("path", {
                  d: "M259.662,365.23h-2.969v3.935a.293.293,0,0,1-.431.258l-7.694-4.1a.818.818,0,0,0-.383-.1h-.005a.815.815,0,0,0-.815.815v7.821h2.945v-3.931a.293.293,0,0,1,.43-.258l7.725,4.1a.814.814,0,0,0,.382.1h0a.815.815,0,0,0,.815-.815Z",
                  transform: "translate(-225.18 -365.23)",
                  className: "minioSection",
                })
              ),
              e.createElement("path", {
                d: "M261.159,373.875V365.23h1.347v8.646Z",
                transform: "translate(-224.375 -365.079)",
                className: "minioSection",
              }),
              e.createElement("path", {
                d: "M270.264,374.038c-3.624,0-6.195-1.719-6.195-4.475s2.587-4.476,6.195-4.476,6.21,1.719,6.21,4.476S273.934,374.038,270.264,374.038Zm0-7.8c-2.695,0-4.77,1.177-4.77,3.33s2.075,3.329,4.77,3.329,4.786-1.162,4.786-3.329S272.958,366.233,270.264,366.233Z",
                transform: "translate(-224.205 -365.087)",
                className: "minioSection",
              })
            )
          )
        )
      )
    );
  },
  ua = function (t) {
    var a = t.inverse;
    return e.createElement(
      sa,
      { viewBox: "0 0 184.538 50.008", inverse: a },
      e.createElement(
        "g",
        { transform: "translate(26.456 -11)" },
        e.createElement(
          "g",
          { transform: "translate(-29 11)" },
          e.createElement(
            "g",
            { transform: "translate(0 0)" },
            e.createElement("path", {
              d: "M2.544-22.4V0h9.232c7.008,0,11.632-4.448,11.632-11.2S18.784-22.4,11.776-22.4Zm9.184,4.176c4.72,0,7.008,2.912,7.008,7.024,0,4.064-2.288,7.024-7.008,7.024H7.008V-18.224ZM31.088-22.4H26.624V0h4.464Zm4.288,0V0H39.84V-8.912h1.312L47.68,0h5.408l-6.9-8.976c4.3-.416,6.864-2.928,6.864-6.608,0-4.288-2.864-6.816-8.208-6.816Zm9.392,4.112c2.368,0,3.7.848,3.7,2.7,0,1.888-1.264,2.784-3.7,2.784H39.84v-5.488ZM73.072-4.1H60.8V-9.248H72.384v-4.1H60.8V-18.3H72.944v-4.1H56.336V0H73.072Zm14.32-18.72c-6.9,0-11.76,4.88-11.76,11.616S80.5.416,87.392.416A11.153,11.153,0,0,0,96.848-4.32L93.2-6.944a6.855,6.855,0,0,1-5.84,3.072c-3.952,0-7.056-2.832-7.072-7.328,0-4.352,3.008-7.328,7.072-7.328a6.7,6.7,0,0,1,5.792,3.088l3.84-2.352A10.88,10.88,0,0,0,87.392-22.816ZM116.7-22.4H98.352v4.176H105.3V0h4.464V-18.224H116.7ZM128.08-9.12c4.944,0,7.92-2.448,7.92-6.64s-2.976-6.64-7.92-6.64h-8.32V0h1.952V-9.12Zm-.048-11.44c3.744,0,5.936,1.632,5.936,4.8s-2.192,4.784-5.936,4.784h-6.32V-20.56Zm30.4-1.84h-2.016l-8.4,20.464L139.632-22.4h-2.08L146.784,0H149.2Z",
              transform: "translate(0 42.065)",
              className: "minioApplicationName",
            }),
            e.createElement(
              "g",
              { transform: "translate(2.649 0)" },
              e.createElement(
                "g",
                { transform: "translate(0 0.17)" },
                e.createElement("rect", {
                  width: "3.292",
                  height: "9.721",
                  transform: "translate(19.066)",
                  className: "minioSection",
                }),
                e.createElement("path", {
                  d: "M241.479,365.364l-6.681,4.081a.3.3,0,0,1-.311,0l-6.681-4.081a.917.917,0,0,0-.478-.134h-.008a.917.917,0,0,0-.916.916v8.793h3.29v-4.185a.329.329,0,0,1,.5-.281l3.744,2.291a1.172,1.172,0,0,0,1.206.012l3.952-2.318a.329.329,0,0,1,.5.284v4.2h3.289v-8.793a.916.916,0,0,0-.915-.916h-.008A.917.917,0,0,0,241.479,365.364Z",
                  transform: "translate(-226.403 -365.23)",
                  className: "minioSection",
                }),
                e.createElement("path", {
                  d: "M261.192,365.23h-3.338v4.425a.329.329,0,0,1-.484.29l-8.652-4.608a.919.919,0,0,0-.431-.107h-.006a.917.917,0,0,0-.916.916v8.795h3.312v-4.42a.329.329,0,0,1,.483-.29l8.686,4.607a.916.916,0,0,0,.43.107h0a.917.917,0,0,0,.916-.916Z",
                  transform: "translate(-222.419 -365.23)",
                  className: "minioSection",
                })
              ),
              e.createElement("path", {
                d: "M261.159,374.952V365.23h1.515v9.722Z",
                transform: "translate(-219.797 -365.06)",
                className: "minioSection",
              }),
              e.createElement("path", {
                d: "M271.034,375.151c-4.075,0-6.965-1.933-6.965-5.032,0-3.082,2.908-5.033,6.965-5.033s6.983,1.933,6.983,5.033S275.162,375.151,271.034,375.151Zm0-8.776c-3.03,0-5.364,1.323-5.364,3.744,0,2.437,2.334,3.744,5.364,3.744s5.382-1.307,5.382-3.744C276.416,367.7,274.064,366.376,271.034,366.376Z",
                transform: "translate(-219.244 -365.087)",
                className: "minioSection",
              })
            )
          )
        )
      )
    );
  },
  va = function (t) {
    var a = t.inverse;
    return e.createElement(
      sa,
      { viewBox: "0 0 184.538 50.008", inverse: a },
      e.createElement(
        "g",
        { transform: "translate(26.059 -11)" },
        e.createElement(
          "g",
          { transform: "translate(-29 11)" },
          e.createElement(
            "g",
            { transform: "translate(0 0)" },
            e.createElement("path", {
              d: "M19.7,0h6.7L14.726-13.265,25.586-25.9H19.111l-8.566,10.49H8.1V-25.9H2.942V0H8.1V-10.656H10.49ZM47.712-4.736H33.522v-5.957H46.916v-4.736H33.522v-5.735H47.564V-25.9h-19.2V0H47.712ZM72.039-23.588a18.223,18.223,0,0,0-9.9-2.757c-5.513,0-10.323,2.812-10.323,8.214,0,4.681,3.33,6.7,7.9,7.419l1.646.259c3.607.574,5.495,1.24,5.495,3.034,0,2-2.22,3.127-5.088,3.127a13.674,13.674,0,0,1-8.251-2.794L50.838-2.923C53.613-.685,57.831.463,61.753.463c5.568,0,10.6-2.72,10.6-8.436,0-4.514-3.626-6.494-8.251-7.252l-1.462-.241c-3.108-.518-5.347-1.092-5.347-3,0-1.961,2.054-3.108,4.958-3.108a13.919,13.919,0,0,1,7.345,2.2Z",
              transform: "translate(0 49.495)",
              className: "minioApplicationName",
            }),
            e.createElement(
              "g",
              { transform: "translate(3.025 0)" },
              e.createElement(
                "g",
                { transform: "translate(0 0.194)" },
                e.createElement("rect", {
                  width: "3.76",
                  height: "11.103",
                  transform: "translate(21.776)",
                  className: "minioSection",
                }),
                e.createElement("path", {
                  d: "M243.621,365.383l-7.631,4.661a.34.34,0,0,1-.355,0l-7.631-4.661a1.048,1.048,0,0,0-.546-.153h-.009a1.047,1.047,0,0,0-1.047,1.046V376.32h3.758v-4.78a.376.376,0,0,1,.572-.321l4.276,2.616a1.338,1.338,0,0,0,1.377.014L240.9,371.2a.376.376,0,0,1,.565.325v4.794h3.757V366.276a1.046,1.046,0,0,0-1.045-1.046h-.01A1.047,1.047,0,0,0,243.621,365.383Z",
                  transform: "translate(-226.403 -365.23)",
                  className: "minioSection",
                }),
                e.createElement("path", {
                  d: "M263.158,365.23h-3.813v5.053a.376.376,0,0,1-.553.332l-9.881-5.263a1.051,1.051,0,0,0-.492-.122h-.007a1.047,1.047,0,0,0-1.047,1.046v10.045h3.783v-5.048a.376.376,0,0,1,.552-.332l9.921,5.262a1.046,1.046,0,0,0,.491.122h0a1.047,1.047,0,0,0,1.047-1.047Z",
                  transform: "translate(-218.873 -365.23)",
                  className: "minioSection",
                })
              ),
              e.createElement("path", {
                d: "M261.159,376.333v-11.1h1.73v11.1Z",
                transform: "translate(-213.918 -365.036)",
                className: "minioSection",
              }),
              e.createElement("path", {
                d: "M272.024,376.582c-4.654,0-7.955-2.207-7.955-5.747,0-3.52,3.322-5.748,7.955-5.748S280,367.294,280,370.835,276.738,376.582,272.024,376.582Zm0-10.023c-3.461,0-6.126,1.511-6.126,4.276,0,2.784,2.665,4.276,6.126,4.276s6.146-1.492,6.146-4.276C278.171,368.07,275.485,366.559,272.024,366.559Z",
                transform: "translate(-212.873 -365.087)",
                className: "minioSection",
              })
            )
          )
        )
      )
    );
  },
  pa = function (t) {
    var a = t.inverse;
    return e.createElement(
      sa,
      { viewBox: "0 0 184.538 50.008", inverse: a },
      e.createElement(
        "g",
        { transform: "translate(27.622 -11)" },
        e.createElement(
          "g",
          { transform: "translate(-29 11)" },
          e.createElement(
            "g",
            { transform: "translate(0 0)" },
            e.createElement("path", {
              d: "M17.995-18.488a14.283,14.283,0,0,0-7.758-2.161c-4.321,0-8.091,2.2-8.091,6.438,0,3.668,2.61,5.249,6.192,5.814l1.29.2c2.828.45,4.307.972,4.307,2.378,0,1.566-1.74,2.451-3.988,2.451A10.718,10.718,0,0,1,3.48-5.554l-2.1,3.263A14.124,14.124,0,0,0,9.933.363c4.365,0,8.309-2.132,8.309-6.612,0-3.538-2.842-5.09-6.467-5.684l-1.146-.188c-2.436-.406-4.191-.856-4.191-2.349,0-1.537,1.609-2.436,3.886-2.436a10.91,10.91,0,0,1,5.757,1.726ZM38.353-20.3h-4.06V-8.309c0,3.335-1.885,4.8-4.684,4.8s-4.684-1.465-4.684-4.8V-20.3h-4.06V-8.106c0,5.612,3.582,8.468,8.744,8.468s8.743-2.857,8.743-8.468Zm3.654,0V0h8.787c4.872,0,7.642-1.914,7.642-5.815a4.874,4.874,0,0,0-3.379-4.553A4.528,4.528,0,0,0,58-14.674c0-3.871-2.972-5.626-7.7-5.626ZM50.59-8.439c2.233,0,3.64.522,3.64,2.421,0,1.943-1.407,2.465-3.64,2.465l-4.538-.015V-8.439Zm-.406-8.294c2,0,3.6.435,3.6,2.349,0,1.972-1.566,2.393-3.582,2.393H46.052v-4.741ZM79.5-20.3h-4.06V-6.743L65.134-20.3H61.349V0h4.045l.015-13.558L75.7,0h3.8ZM98.557-3.712H87.435V-8.381h10.5v-3.712h-10.5v-4.5H98.441V-20.3H83.39V0H98.557ZM116.769-20.3H100.137v3.785h6.293V0h4.045V-16.516h6.293Z",
              transform: "translate(0 38.028)",
              className: "minioApplicationName",
            }),
            e.createElement(
              "g",
              { transform: "translate(2.376 0)" },
              e.createElement(
                "g",
                { transform: "translate(0 0.153)" },
                e.createElement("rect", {
                  width: "2.953",
                  height: "8.72",
                  transform: "translate(17.103)",
                  className: "minioSection",
                }),
                e.createElement("path", {
                  d: "M239.926,365.35l-5.993,3.661a.267.267,0,0,1-.279,0l-5.993-3.661a.823.823,0,0,0-.429-.12h-.007a.822.822,0,0,0-.822.822v7.888h2.952v-3.754a.3.3,0,0,1,.449-.252l3.358,2.055a1.051,1.051,0,0,0,1.081.011l3.545-2.08a.3.3,0,0,1,.444.255v3.765h2.951v-7.888a.821.821,0,0,0-.821-.822h-.007A.823.823,0,0,0,239.926,365.35Z",
                  transform: "translate(-226.403 -365.23)",
                  className: "minioSection",
                }),
                e.createElement("path", {
                  d: "M259.769,365.23h-2.994V369.2a.3.3,0,0,1-.434.26l-7.761-4.133a.825.825,0,0,0-.386-.1h-.005a.822.822,0,0,0-.822.822v7.889h2.971v-3.965a.3.3,0,0,1,.433-.26l7.792,4.132a.822.822,0,0,0,.385.1h0a.822.822,0,0,0,.822-.822Z",
                  transform: "translate(-224.988 -365.23)",
                  className: "minioSection",
                })
              ),
              e.createElement("path", {
                d: "M261.159,373.95v-8.72h1.359v8.72Z",
                transform: "translate(-224.056 -365.077)",
                className: "minioSection",
              }),
              e.createElement("path", {
                d: "M270.317,374.115c-3.655,0-6.248-1.734-6.248-4.513s2.609-4.515,6.248-4.515,6.264,1.734,6.264,4.515S274.019,374.115,270.317,374.115Zm0-7.872c-2.718,0-4.811,1.187-4.811,3.358s2.093,3.358,4.811,3.358,4.827-1.172,4.827-3.358S273.035,366.243,270.317,366.243Z",
                transform: "translate(-223.86 -365.087)",
                className: "minioSection",
              })
            )
          )
        )
      )
    );
  },
  ga = function (t) {
    var a = t.inverse;
    return e.createElement(
      sa,
      { viewBox: "0 0 184.45 54.229", inverse: a },
      e.createElement(
        "g",
        { transform: "translate(-31.65 -18.133)" },
        e.createElement(
          "g",
          { transform: "translate(-995 -63.754)" },
          e.createElement(
            "g",
            { transform: "translate(1025.5 81.887)" },
            e.createElement(
              "g",
              { transform: "translate(0 0)" },
              e.createElement(
                "g",
                { transform: "translate(0 0)" },
                e.createElement("path", {
                  d: "M10.338-17.825A8.815,8.815,0,0,0,1.15-8.75,8.815,8.815,0,0,0,10.338.325a8.825,8.825,0,0,0,9.2-9.075A8.825,8.825,0,0,0,10.338-17.825Zm0,3.35a5.4,5.4,0,0,1,5.55,5.725,5.4,5.4,0,0,1-5.55,5.725A5.41,5.41,0,0,1,4.788-8.75,5.41,5.41,0,0,1,10.338-14.475ZM22.05-17.5V0h7.575c4.2,0,6.588-1.65,6.588-5.013A4.2,4.2,0,0,0,33.3-8.938a3.9,3.9,0,0,0,2.537-3.713c0-3.337-2.562-4.85-6.638-4.85Zm7.4,10.225c1.925,0,3.138.45,3.138,2.088,0,1.675-1.212,2.125-3.138,2.125l-3.913-.013v-4.2Zm-.35-7.15c1.725,0,3.1.375,3.1,2.025,0,1.7-1.35,2.063-3.087,2.063H25.538v-4.088ZM48.788-17.5H45.3V-6.7c0,2.525-1.1,3.675-2.95,3.675a4.214,4.214,0,0,1-3.4-1.625L36.925-2.113A6.9,6.9,0,0,0,42.513.313c3.65,0,6.275-2.3,6.275-6.688ZM65.113-3.2H55.525V-7.225h9.05v-3.2h-9.05V-14.3h9.487v-3.2H52.037V0H65.113ZM76.3-17.825A8.794,8.794,0,0,0,67.113-8.75,8.794,8.794,0,0,0,76.3.325a8.713,8.713,0,0,0,7.387-3.7l-2.85-2.05a5.355,5.355,0,0,1-4.562,2.4A5.4,5.4,0,0,1,70.75-8.75a5.411,5.411,0,0,1,5.525-5.725A5.237,5.237,0,0,1,80.8-12.063l3-1.838A8.5,8.5,0,0,0,76.3-17.825Zm22.9.325H84.863v3.262h5.425V0h3.487V-14.238H99.2Zm19.787,1.738a10.5,10.5,0,0,0-6.25-1.925c-3.6,0-6.475,1.812-6.475,5.037,0,2.688,1.938,4.125,5.138,4.488l1.987.225c2.913.325,4.438,1.25,4.438,3.15,0,2.363-2.337,3.525-5.3,3.525a10.115,10.115,0,0,1-5.925-1.95L105.762-2A11.524,11.524,0,0,0,112.537.188c3.775,0,6.875-1.7,6.875-5.1,0-2.913-2.262-4.138-5.375-4.488l-1.912-.212c-2.988-.338-4.275-1.4-4.275-3.138,0-2.187,2.063-3.488,4.875-3.488a9.323,9.323,0,0,1,5.475,1.713ZM135.025-17.5H120.888v1.45h6.3V0h1.525V-16.05h6.313Zm9.875-.2a8.672,8.672,0,0,0-8.963,8.95A8.672,8.672,0,0,0,144.9.2a8.672,8.672,0,0,0,8.962-8.95A8.672,8.672,0,0,0,144.9-17.7Zm0,1.475a7.174,7.174,0,0,1,7.363,7.475A7.174,7.174,0,0,1,144.9-1.275a7.177,7.177,0,0,1-7.375-7.475A7.177,7.177,0,0,1,144.9-16.225ZM157.413-17.5V0h1.525V-7.763h2.675L168.138,0h1.9l-6.625-7.763h.688c3.725,0,6.025-1.862,6.025-4.875,0-3.1-2.175-4.863-6.037-4.863Zm6.663,1.438c2.875,0,4.475,1.188,4.475,3.425s-1.575,3.488-4.475,3.488h-5.138v-6.913ZM185.6-1.438H175.075V-8.1h10.138V-9.525H175.075v-6.538h10.438V-17.5H173.55V0H185.6Z",
                  transform: "translate(0 32.612)",
                  className: "minioApplicationName",
                }),
                e.createElement(
                  "g",
                  { transform: "translate(2.003)" },
                  e.createElement(
                    "g",
                    { transform: "translate(0 0.129)" },
                    e.createElement("rect", {
                      width: "2.49",
                      height: "7.352",
                      transform: "translate(14.42)",
                      className: "minioSection",
                    }),
                    e.createElement("path", {
                      d: "M237.8,365.332l-5.053,3.086a.226.226,0,0,1-.235,0l-5.053-3.086a.694.694,0,0,0-.362-.1H227.1a.693.693,0,0,0-.693.693v6.65h2.489v-3.165a.249.249,0,0,1,.379-.212l2.832,1.733a.886.886,0,0,0,.912.009L236,369.184a.249.249,0,0,1,.374.215v3.174h2.488v-6.65a.693.693,0,0,0-.692-.693h-.006A.694.694,0,0,0,237.8,365.332Z",
                      transform: "translate(-226.403 -365.23)",
                      className: "minioSection",
                    }),
                    e.createElement("path", {
                      d: "M257.822,365.23H255.3v3.346a.249.249,0,0,1-.366.22l-6.543-3.485a.7.7,0,0,0-.326-.081h0a.693.693,0,0,0-.693.693v6.651h2.5v-3.343a.249.249,0,0,1,.365-.22L256.8,372.5a.692.692,0,0,0,.325.081h0a.693.693,0,0,0,.693-.693Z",
                      transform: "translate(-228.498 -365.23)",
                      className: "minioSection",
                    })
                  ),
                  e.createElement("path", {
                    d: "M261.159,372.582V365.23H262.3v7.352Z",
                    transform: "translate(-229.877 -365.101)",
                    className: "minioSection",
                  }),
                  e.createElement("path", {
                    d: "M269.337,372.7c-3.082,0-5.268-1.462-5.268-3.805s2.2-3.806,5.268-3.806,5.281,1.462,5.281,3.806S272.458,372.7,269.337,372.7Zm0-6.637c-2.292,0-4.056,1-4.056,2.832s1.765,2.831,4.056,2.831,4.07-.988,4.07-2.831S271.628,366.062,269.337,366.062Z",
                    transform: "translate(-230.168 -365.087)",
                    className: "minioSection",
                  })
                )
              )
            )
          )
        )
      )
    );
  },
  ba = function (t) {
    var a = t.applicationName,
      n = t.subVariant,
      r = void 0 === n ? "simple" : n,
      o = t.inverse;
    switch (a) {
      case "console":
        switch (r) {
          case "standard":
            return e.createElement(ma, { inverse: !!o });
          case "enterprise":
            return e.createElement(fa, { inverse: !!o });
          case "AGPL":
            return e.createElement(ha, { inverse: !!o });
          default:
            return e.createElement(ga, { inverse: !!o });
        }
      case "directpv":
        return e.createElement(ua, { inverse: !!o });
      case "subnet":
        return e.createElement(pa, { inverse: !!o });
      case "kes":
        return e.createElement(va, { inverse: !!o });
      case "operator":
        return e.createElement(da, { inverse: !!o });
    }
  },
  Za = a.svg(function (e) {
    return { fill: Dt(e, "theme.logoColor", "#C51C3F") };
  }),
  Va = function (t) {
    var a = t.width;
    return e.createElement(
      Za,
      { viewBox: "0 0 162.612 24.465", width: a },
      e.createElement("path", {
        d: "M52.751.414h9.108v23.63h-9.108zM41.711.74l-18.488 9.92a.919.919 0 0 1-.856 0L3.879.74A2.808 2.808 0 0 0 2.558.414h-.023A2.4 2.4 0 0 0 0 2.641v21.376h9.1V13.842a.918.918 0 0 1 1.385-.682l10.361 5.568a3.634 3.634 0 0 0 3.336.028l10.933-5.634a.917.917 0 0 1 1.371.69v10.205h9.1V2.641A2.4 2.4 0 0 0 43.055.414h-.023a2.808 2.808 0 0 0-1.321.326zm65.564-.326h-9.237v10.755a.913.913 0 0 1-1.338.706L72.762.675a2.824 2.824 0 0 0-1.191-.261h-.016a2.4 2.4 0 0 0-2.535 2.227v21.377h9.163V13.275a.914.914 0 0 1 1.337-.707l24.032 11.2a2.813 2.813 0 0 0 1.188.26 2.4 2.4 0 0 0 2.535-2.227zm7.161 23.63V.414h4.191v23.63zm28.856.421c-11.274 0-19.272-4.7-19.272-12.232C124.02 4.741 132.066 0 143.292 0s19.32 4.7 19.32 12.233-7.902 12.232-19.32 12.232zm0-21.333c-8.383 0-14.84 3.217-14.84 9.1 0 5.926 6.457 9.1 14.84 9.1s14.887-3.174 14.887-9.1c0-5.883-6.504-9.1-14.887-9.1z",
      })
    );
  },
  Ea = { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 },
  Aa = function (e) {
    if ("auto" === e || ("boolean" == typeof e && e)) return "100%";
    if (!1 === e) return "initial";
    var t = Math.floor(e);
    return (
      t > 12
        ? ((t = 12), console.warn("Grid fraction cannot be greater than 12"))
        : t < 1 &&
          ((t = 1), console.warn("Grid fraction cannot be smaller than 1")),
      "".concat((100 * t) / 12, "%")
    );
  },
  xa = a.div(function (e) {
    var t = { boxSizing: "border-box" };
    if (e.container)
      t = {
        display: "flex",
        flexWrap: e.wrap || "wrap",
        flexDirection: e.direction || "row",
        columnGap: "".concat(e.columnSpacing, "px") || 0,
        rowGap: "".concat(e.rowSpacing, "px") || 0,
        boxSizing: "content-box",
      };
    else if (e.item) {
      var a = Object.keys(Ea);
      a.forEach(function (n, r) {
        var o,
          l,
          c = Dt(e, n, !1);
        if (!!c) {
          var i = {};
          if (
            ("number" == typeof c &&
              (i = { flexBasis: Aa(Dt(e, n, 12)), width: Aa(Dt(e, n, 12)) }),
            "hidden" === c)
          ) {
            var s = "";
            a[r + 1] &&
              (s = "and (max-width:  ".concat(Dt(Ea, a[r + 1], 0), "px)")),
              (t = S(
                S({}, t),
                (((o = {})[
                  "@media (min-width: ".concat(Dt(Ea, n, 0), "px) ").concat(s)
                ] = { display: "none" }),
                o)
              ));
          }
          t = S(
            S({}, t),
            (((l = {})["@media (min-width: ".concat(Dt(Ea, n, 0), "px)")] = S(
              { flexGrow: "1" },
              i
            )),
            l)
          );
        }
      });
    }
    return S(S({}, t), e.sx);
  }),
  Ha = function (t) {
    return e.createElement(xa, S({}, t), t.children);
  },
  ya = require("../assets/video/videoBG.mp4"),
  wa = require("../assets/background/loginAnimationPoster.png"),
  Ma = a.div(function (e) {
    var t,
      a = e.theme;
    return {
      "& .mainContainer": { height: "100vh" },
      "& .decorationPanel": {
        position: "relative",
        backgroundColor: Dt(a, "login.promoBG", "#000110"),
        "& .videoContainer": {
          width: "100%",
          height: "auto",
          minHeight: 200,
          position: "absolute",
          bottom: "0",
          right: 0,
          filter: Dt(a, "login.bgFilter", "none"),
          "&:before": {
            position: "absolute",
            width: "100%",
            height: 60,
            display: "block",
            content: "' '",
            background:
              "linear-gradient(to bottom, rgba(0,1,16,1) 0%,rgba(0,0,0,0.02) 100%)",
            top: 0,
          },
          "&:after": {
            position: "absolute",
            width: 120,
            height: "100%",
            display: "block",
            content: "' '",
            background:
              "linear-gradient(to right, rgba(0,1,16,1) 0%,rgba(0,0,0,0.02) 100%)",
            top: 0,
          },
          "& .videoBG": { width: "100%" },
        },
        "& .bgExtend": {
          backgroundImage:
            "linear-gradient(45deg,rgba(172,223,234,0) 0,#7fc0e4 100%)",
          position: "absolute",
          width: 500,
          left: 0,
        },
        "& .promoContainer": {
          zIndex: 100,
          width: "80%",
          maxWidth: "687px",
          position: "absolute",
          top: "190px",
          left: "50%",
          transform: "translateX(-50%)",
          "& .promoHeader": {
            color: Dt(a, "login.promoHeader", "#fff"),
            fontSize: "46px",
            textAlign: "left",
            fontWeight: "900",
            lineHeight: "60px",
          },
          "& .promoInfo": {
            marginTop: "31px",
            maxWidth: "542px",
            color: Dt(a, "login.promoText", "#fff"),
            fontSize: "18px",
            textAlign: "left",
            fontWeight: "300",
            lineHeight: "30px",
            textShadow: "0 0 5ppx #000",
            "& a": {
              color: Dt(a, "login.promoText", "#fff"),
              textDecoration: "none",
              fontWeight: "bold",
              "&:hover": { textDecoration: "underline" },
            },
          },
        },
      },
      "& .formPanel":
        ((t = {
          maxWidth: "520px",
          backgroundColor: Dt(a, "login.formBG", "#fff"),
        }),
        (t[
          "@media (min-width: "
            .concat(Dt(Ea, "xs", 0), "px) and (max-width: ")
            .concat(Dt(Ea, "md", 0), "px)")
        ] = { maxWidth: "100%" }),
        (t["& .logoContainer"] = {
          display: "flex",
          height: "215px",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 3px 10px 2px #00000010",
          "& svg": { width: "325px" },
        }),
        (t["& .formContainer"] = {
          paddingTop: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "calc(100vh - 215px)",
          "& .form": { width: "328px", flexGrow: "1", height: "100%" },
          "& .footer": {
            display: "flex",
            width: "328px",
            borderTop: "".concat(
              Dt(a, "login.footerDivider", "#f2f2f2"),
              " 1px solid"
            ),
            padding: "35px 0",
            textAlign: "center",
            alignItems: "flex-end",
            justifyContent: "center",
          },
          "& .footer, & .footer a": {
            color: Dt(a, "login.footerElements", "#000"),
            fontSize: "14px",
            textDecoration: "none",
          },
        }),
        t),
    };
  }),
  Ca = function (t) {
    var a = t.logoProps,
      n = t.form,
      r = t.formFooter,
      o = t.promoInfo,
      l = t.promoHeader;
    return e.createElement(
      Ma,
      null,
      e.createElement(
        Ha,
        { container: !0, className: "mainContainer", wrap: "nowrap" },
        e.createElement(
          Ha,
          {
            item: !0,
            xs: "hidden",
            sm: "hidden",
            md: !0,
            className: "decorationPanel",
          },
          (o || l) &&
            e.createElement(
              Ha,
              { container: !0 },
              e.createElement(
                Ha,
                { item: !0, className: "promoContainer" },
                e.createElement(Ha, { item: !0, className: "promoHeader" }, l),
                e.createElement(Ha, { item: !0, className: "promoInfo" }, o)
              )
            ),
          e.createElement(
            Ha,
            { item: !0, className: "videoContainer" },
            e.createElement(
              "video",
              {
                autoPlay: !0,
                playsInline: !0,
                muted: !0,
                loop: !0,
                disablePictureInPicture: !0,
                poster: wa,
                className: "videoBG",
              },
              e.createElement("source", { src: ya, type: "video/mp4" })
            )
          )
        ),
        e.createElement(
          Ha,
          { item: !0, xs: 12, className: "formPanel" },
          e.createElement(
            Ha,
            { container: !0 },
            e.createElement(
              Ha,
              { item: !0, xs: 12, className: "logoContainer" },
              e.createElement(ba, S({}, a))
            ),
            e.createElement(
              Ha,
              { item: !0, xs: 12, className: "formContainer" },
              e.createElement(Ha, { item: !0, xs: !0, className: "form" }, n),
              r &&
                e.createElement(
                  Ha,
                  { item: !0, xs: !0, className: "footer" },
                  r
                )
            )
          )
        )
      )
    );
  };
export {
  ba as ApplicationLogo,
  ia as Button,
  la as GlobalStyles,
  Ha as Grid,
  Ca as LoginWrapper,
  C as ThemeHandler,
  Va as ThemedLogo,
};
//# sourceMappingURL=index.js.map
