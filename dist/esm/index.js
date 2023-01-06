import * as e from "react";
import a, { Fragment as t } from "react";
import n, {
  ThemeProvider as l,
  createGlobalStyle as r,
} from "styled-components";
var c = "#fff",
  m = "#2781B0",
  o = "#5B5C5C",
  i = "#E7EAEB",
  h = "#07193E",
  d = "#0D2453",
  s = "#05132F",
  p = "#C51B3F",
  v = "#D5D7D7",
  f = "#B4B4B4",
  E = "#181F2A",
  u = "#A2ADC0",
  g = "#707988",
  w = "#E6ECEC",
  Z = "#B5BCBD",
  M = "#EFEDED",
  x = "#C3CBCB",
  _ = "#FF3958",
  H = "#616A7C",
  z = "#3A3F4A",
  V = "#A3B7D9",
  A = {
    bgColor: c,
    fontColor: "#000",
    borderColor: "#E2E2E2",
    bulletColor: m,
    logoColor: p,
    logoLabelColor: "#000000",
    logoLabelInverse: "#fff",
    buttons: {
      regular: {
        enabled: { border: o, text: o, background: c, iconColor: o },
        disabled: { border: f, text: f, background: v, iconColor: f },
        hover: { border: o, text: o, background: "#E6EAEB", iconColor: o },
        pressed: { border: o, text: o, background: "#D5D7D8", iconColor: o },
      },
      callAction: {
        enabled: { border: h, text: c, background: h, iconColor: c },
        disabled: { border: i, text: o, background: i, iconColor: o },
        hover: { border: d, text: c, background: d, iconColor: c },
        pressed: { border: s, text: c, background: s, iconColor: c },
      },
      secondary: {
        enabled: { border: p, text: p, background: c, iconColor: p },
        disabled: { border: f, text: f, background: v, iconColor: f },
        hover: {
          border: "#C83B51",
          text: p,
          background: "#FCF2F4",
          iconColor: p,
        },
        pressed: { border: p, text: c, background: p, iconColor: c },
      },
    },
    login: {
      formBG: "#fff",
      bgFilter: "none",
      promoBG: "#000110",
      promoHeader: c,
      promoText: "#A6DFEF",
      footerElements: m,
      footerDivider: "#F2F2F2",
    },
  },
  C = {
    bgColor: E,
    fontColor: "#8E98A9",
    borderColor: "#8E98A9",
    bulletColor: "#4B586A",
    logoColor: _,
    logoLabelColor: V,
    logoLabelInverse: "#fff",
    buttons: {
      regular: {
        enabled: { border: u, text: u, background: E, iconColor: u },
        disabled: { border: z, text: z, background: H, iconColor: z },
        hover: { border: u, text: u, background: "#4B586A", iconColor: u },
        pressed: { border: g, text: g, background: "#333D4B", iconColor: g },
      },
      callAction: {
        enabled: { border: w, text: E, background: w, iconColor: E },
        disabled: { border: Z, text: E, background: Z, iconColor: E },
        hover: { border: M, text: E, background: M, iconColor: E },
        pressed: { border: x, text: E, background: x, iconColor: E },
      },
      secondary: {
        enabled: { border: _, text: _, background: E, iconColor: _ },
        disabled: { border: z, text: z, background: H, iconColor: z },
        hover: { border: _, text: _, background: "#4B586A", iconColor: _ },
        pressed: { border: _, text: E, background: _, iconColor: E },
      },
    },
    login: {
      formBG: "#283140",
      promoBG: "#000106",
      bgFilter: "grayscale(50%)",
      promoHeader: V,
      promoText: V,
      footerElements: "#85B3EE",
      footerDivider: "#545D6A",
    },
  },
  L = function (e) {
    var t = e.darkMode,
      n = void 0 !== t && t,
      r = e.children;
    return a.createElement(l, { theme: n ? C : A }, r);
  },
  T = function () {
    return (
      (T =
        Object.assign ||
        function (e) {
          for (var a, t = 1, n = arguments.length; t < n; t++)
            for (var l in (a = arguments[t]))
              Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
          return e;
        }),
      T.apply(this, arguments)
    );
  };
var b =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {},
  P = Array.isArray,
  N = "object" == typeof b && b && b.Object === Object && b,
  B = "object" == typeof self && self && self.Object === Object && self,
  R = N || B || Function("return this")(),
  y = R.Symbol,
  G = y,
  S = Object.prototype,
  k = S.hasOwnProperty,
  I = S.toString,
  q = G ? G.toStringTag : void 0;
var F = function (e) {
    var a = k.call(e, q),
      t = e[q];
    try {
      e[q] = void 0;
      var n = !0;
    } catch (e) {}
    var l = I.call(e);
    return n && (a ? (e[q] = t) : delete e[q]), l;
  },
  O = Object.prototype.toString;
var j = F,
  D = function (e) {
    return O.call(e);
  },
  U = y ? y.toStringTag : void 0;
var W = function (e) {
  return null == e
    ? void 0 === e
      ? "[object Undefined]"
      : "[object Null]"
    : U && U in Object(e)
    ? j(e)
    : D(e);
};
var $ = W,
  Q = function (e) {
    return null != e && "object" == typeof e;
  };
var Y = function (e) {
    return "symbol" == typeof e || (Q(e) && "[object Symbol]" == $(e));
  },
  K = P,
  X = Y,
  J = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  ee = /^\w*$/;
var ae = function (e, a) {
  if (K(e)) return !1;
  var t = typeof e;
  return (
    !("number" != t && "symbol" != t && "boolean" != t && null != e && !X(e)) ||
    ee.test(e) ||
    !J.test(e) ||
    (null != a && e in Object(a))
  );
};
var te = function (e) {
    var a = typeof e;
    return null != e && ("object" == a || "function" == a);
  },
  ne = W,
  le = te;
var re,
  ce = function (e) {
    if (!le(e)) return !1;
    var a = ne(e);
    return (
      "[object Function]" == a ||
      "[object GeneratorFunction]" == a ||
      "[object AsyncFunction]" == a ||
      "[object Proxy]" == a
    );
  },
  me = R["__core-js_shared__"],
  oe = (re = /[^.]+$/.exec((me && me.keys && me.keys.IE_PROTO) || ""))
    ? "Symbol(src)_1." + re
    : "";
var ie = function (e) {
    return !!oe && oe in e;
  },
  he = Function.prototype.toString;
var de = ce,
  se = ie,
  pe = te,
  ve = function (e) {
    if (null != e) {
      try {
        return he.call(e);
      } catch (e) {}
      try {
        return e + "";
      } catch (e) {}
    }
    return "";
  },
  fe = /^\[object .+?Constructor\]$/,
  Ee = Function.prototype,
  ue = Object.prototype,
  ge = Ee.toString,
  we = ue.hasOwnProperty,
  Ze = RegExp(
    "^" +
      ge
        .call(we)
        .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
var Me = function (e) {
    return !(!pe(e) || se(e)) && (de(e) ? Ze : fe).test(ve(e));
  },
  xe = function (e, a) {
    return null == e ? void 0 : e[a];
  };
var _e = function (e, a) {
    var t = xe(e, a);
    return Me(t) ? t : void 0;
  },
  He = _e(Object, "create"),
  ze = He;
var Ve = function () {
  (this.__data__ = ze ? ze(null) : {}), (this.size = 0);
};
var Ae = function (e) {
    var a = this.has(e) && delete this.__data__[e];
    return (this.size -= a ? 1 : 0), a;
  },
  Ce = He,
  Le = Object.prototype.hasOwnProperty;
var Te = function (e) {
    var a = this.__data__;
    if (Ce) {
      var t = a[e];
      return "__lodash_hash_undefined__" === t ? void 0 : t;
    }
    return Le.call(a, e) ? a[e] : void 0;
  },
  be = He,
  Pe = Object.prototype.hasOwnProperty;
var Ne = He;
var Be = Ve,
  Re = Ae,
  ye = Te,
  Ge = function (e) {
    var a = this.__data__;
    return be ? void 0 !== a[e] : Pe.call(a, e);
  },
  Se = function (e, a) {
    var t = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (t[e] = Ne && void 0 === a ? "__lodash_hash_undefined__" : a),
      this
    );
  };
function ke(e) {
  var a = -1,
    t = null == e ? 0 : e.length;
  for (this.clear(); ++a < t; ) {
    var n = e[a];
    this.set(n[0], n[1]);
  }
}
(ke.prototype.clear = Be),
  (ke.prototype.delete = Re),
  (ke.prototype.get = ye),
  (ke.prototype.has = Ge),
  (ke.prototype.set = Se);
var Ie = ke;
var qe = function () {
  (this.__data__ = []), (this.size = 0);
};
var Fe = function (e, a) {
  return e === a || (e != e && a != a);
};
var Oe = function (e, a) {
    for (var t = e.length; t--; ) if (Fe(e[t][0], a)) return t;
    return -1;
  },
  je = Oe,
  De = Array.prototype.splice;
var Ue = Oe;
var We = Oe;
var $e = Oe;
var Qe = qe,
  Ye = function (e) {
    var a = this.__data__,
      t = je(a, e);
    return (
      !(t < 0) &&
      (t == a.length - 1 ? a.pop() : De.call(a, t, 1), --this.size, !0)
    );
  },
  Ke = function (e) {
    var a = this.__data__,
      t = Ue(a, e);
    return t < 0 ? void 0 : a[t][1];
  },
  Xe = function (e) {
    return We(this.__data__, e) > -1;
  },
  Je = function (e, a) {
    var t = this.__data__,
      n = $e(t, e);
    return n < 0 ? (++this.size, t.push([e, a])) : (t[n][1] = a), this;
  };
function ea(e) {
  var a = -1,
    t = null == e ? 0 : e.length;
  for (this.clear(); ++a < t; ) {
    var n = e[a];
    this.set(n[0], n[1]);
  }
}
(ea.prototype.clear = Qe),
  (ea.prototype.delete = Ye),
  (ea.prototype.get = Ke),
  (ea.prototype.has = Xe),
  (ea.prototype.set = Je);
var aa = ea,
  ta = _e(R, "Map"),
  na = Ie,
  la = aa,
  ra = ta;
var ca = function (e) {
  var a = typeof e;
  return "string" == a || "number" == a || "symbol" == a || "boolean" == a
    ? "__proto__" !== e
    : null === e;
};
var ma = function (e, a) {
    var t = e.__data__;
    return ca(a) ? t["string" == typeof a ? "string" : "hash"] : t.map;
  },
  oa = ma;
var ia = ma;
var ha = ma;
var da = ma;
var sa = function () {
    (this.size = 0),
      (this.__data__ = {
        hash: new na(),
        map: new (ra || la)(),
        string: new na(),
      });
  },
  pa = function (e) {
    var a = oa(this, e).delete(e);
    return (this.size -= a ? 1 : 0), a;
  },
  va = function (e) {
    return ia(this, e).get(e);
  },
  fa = function (e) {
    return ha(this, e).has(e);
  },
  Ea = function (e, a) {
    var t = da(this, e),
      n = t.size;
    return t.set(e, a), (this.size += t.size == n ? 0 : 1), this;
  };
function ua(e) {
  var a = -1,
    t = null == e ? 0 : e.length;
  for (this.clear(); ++a < t; ) {
    var n = e[a];
    this.set(n[0], n[1]);
  }
}
(ua.prototype.clear = sa),
  (ua.prototype.delete = pa),
  (ua.prototype.get = va),
  (ua.prototype.has = fa),
  (ua.prototype.set = Ea);
var ga = ua;
function wa(e, a) {
  if ("function" != typeof e || (null != a && "function" != typeof a))
    throw new TypeError("Expected a function");
  var t = function () {
    var n = arguments,
      l = a ? a.apply(this, n) : n[0],
      r = t.cache;
    if (r.has(l)) return r.get(l);
    var c = e.apply(this, n);
    return (t.cache = r.set(l, c) || r), c;
  };
  return (t.cache = new (wa.Cache || ga)()), t;
}
wa.Cache = ga;
var Za = wa;
var Ma =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  xa = /\\(\\)?/g,
  _a = (function (e) {
    var a = Za(e, function (e) {
        return 500 === t.size && t.clear(), e;
      }),
      t = a.cache;
    return a;
  })(function (e) {
    var a = [];
    return (
      46 === e.charCodeAt(0) && a.push(""),
      e.replace(Ma, function (e, t, n, l) {
        a.push(n ? l.replace(xa, "$1") : t || e);
      }),
      a
    );
  });
var Ha = function (e, a) {
    for (var t = -1, n = null == e ? 0 : e.length, l = Array(n); ++t < n; )
      l[t] = a(e[t], t, e);
    return l;
  },
  za = P,
  Va = Y,
  Aa = y ? y.prototype : void 0,
  Ca = Aa ? Aa.toString : void 0;
var La = function e(a) {
    if ("string" == typeof a) return a;
    if (za(a)) return Ha(a, e) + "";
    if (Va(a)) return Ca ? Ca.call(a) : "";
    var t = a + "";
    return "0" == t && 1 / a == -Infinity ? "-0" : t;
  },
  Ta = La;
var ba = P,
  Pa = ae,
  Na = _a,
  Ba = function (e) {
    return null == e ? "" : Ta(e);
  };
var Ra = Y;
var ya = function (e, a) {
    return ba(e) ? e : Pa(e, a) ? [e] : Na(Ba(e));
  },
  Ga = function (e) {
    if ("string" == typeof e || Ra(e)) return e;
    var a = e + "";
    return "0" == a && 1 / e == -Infinity ? "-0" : a;
  };
var Sa = function (e, a) {
  for (var t = 0, n = (a = ya(a, e)).length; null != e && t < n; )
    e = e[Ga(a[t++])];
  return t && t == n ? e : void 0;
};
var ka,
  Ia,
  qa,
  Fa = function (e, a, t) {
    var n = null == e ? void 0 : Sa(e, a);
    return void 0 === n ? t : n;
  },
  Oa = require("../assets/fonts/Inter/Inter-Black.woff"),
  ja = require("../assets/fonts/Inter/Inter-BlackItalic.woff"),
  Da = require("../assets/fonts/Inter/Inter-Bold.woff"),
  Ua = require("../assets/fonts/Inter/Inter-BoldItalic.woff"),
  Wa = require("../assets/fonts/Inter/Inter-Italic.woff"),
  $a = require("../assets/fonts/Inter/Inter-Light.woff"),
  Qa = require("../assets/fonts/Inter/Inter-LightItalic.woff"),
  Ya = require("../assets/fonts/Inter/Inter-Regular.woff"),
  Ka = require("../assets/fonts/Inter/Inter-Thin.woff"),
  Xa = require("../assets/fonts/Inter/Inter-Black.woff2"),
  Ja = require("../assets/fonts/Inter/Inter-BlackItalic.woff2"),
  et = require("../assets/fonts/Inter/Inter-Bold.woff2"),
  at = require("../assets/fonts/Inter/Inter-BoldItalic.woff2"),
  tt = require("../assets/fonts/Inter/Inter-Italic.woff2"),
  nt = require("../assets/fonts/Inter/Inter-Light.woff2"),
  lt = require("../assets/fonts/Inter/Inter-LightItalic.woff2"),
  rt = require("../assets/fonts/Inter/Inter-Regular.woff2"),
  ct = require("../assets/fonts/Inter/Inter-Thin.woff2"),
  mt = r(
    qa ||
      ((ka = ["\n    ", "\n"]),
      (Ia = ["\n    ", "\n"]),
      Object.defineProperty
        ? Object.defineProperty(ka, "raw", { value: Ia })
        : (ka.raw = Ia),
      (qa = ka)),
    function (e) {
      var a = e.theme;
      return '\n    /* Fonts */\n    @font-face {\n      font-family: "Inter";\n      src: url('
        .concat(Ja, ') format("woff2"),\n        url(')
        .concat(
          ja,
          ') format("woff");\n      font-weight: 900;\n      font-style: italic;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Inter";\n      src: url('
        )
        .concat(et, ') format("woff2"),\n        url(')
        .concat(
          Da,
          ') format("woff");\n      font-weight: bold;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Inter";\n      src: url('
        )
        .concat(at, ') format("woff2"),\n        url(')
        .concat(
          Ua,
          ') format("woff");\n      font-weight: bold;\n      font-style: italic;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Inter";\n      src: url('
        )
        .concat(nt, ') format("woff2"),\n        url(')
        .concat(
          $a,
          ') format("woff");\n      font-weight: 300;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Inter";\n      src: url('
        )
        .concat(Xa, ') format("woff2"),\n        url(')
        .concat(
          Oa,
          ') format("woff");\n      font-weight: 900;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Inter";\n      src: url('
        )
        .concat(tt, ') format("woff2"),\n        url(')
        .concat(
          Wa,
          ') format("woff");\n      font-weight: normal;\n      font-style: italic;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Inter";\n      src: url('
        )
        .concat(rt, ') format("woff2"),\n        url(')
        .concat(
          Ya,
          ') format("woff");\n      font-weight: normal;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Inter";\n      src: url('
        )
        .concat(lt, ') format("woff2"),\n        url(')
        .concat(
          Qa,
          ') format("woff");\n      font-weight: 300;\n      font-style: italic;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Inter";\n      src: url('
        )
        .concat(ct, ') format("woff2"),\n        url(')
        .concat(
          Ka,
          ') format("woff");\n      font-weight: 100;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    /* Main Page styling */\n    \n    *, *::before, *::after {\n       box-sizing: inherit;\n       outline:0;\n    }\n    \n    html {\n        box-sizing: border-box;\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n    \n    body {\n        background-color: '
        )
        .concat(Fa(a, "bgColor", "#fff"), ";\n        color: ")
        .concat(
          Fa(a, "fontColor", "#000"),
          ";\n        height: 100vh;\n        width: 100vw;\n        font-family: 'Inter', sans-serif;\n        margin: 0;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        font-weight: 400;\n        font-size: 14px;\n        line-height: 1.5;\n        transition: background-color 0s\n    }\n    \n    fieldset, section {\n        border: 1px solid "
        )
        .concat(
          Fa(a, "borderColor", "#E2E2E2"),
          ";\n        border-radius: 3px;\n        background-color: transparent;\n        padding: 25px;\n    }\n    \n    hr {\n        border-top: 0;\n        border-left: 0;\n        borderR-right: 0;\n        border-color: "
        )
        .concat(
          Fa(a, "borderColor", "#E2E2E2"),
          ";\n        background-color: transparent;\n    }\n    \n    ul {\n        padding-left: 20px;\n        list-style: none;\n        \n        li:not([class*=\"Mui\"])::before {\n          content: '￭';\n          color: "
        )
        .concat(
          Fa(a, "bulletColor", "#2781B0"),
          ';\n          font-size: 20px;\n          display: inline-block;\n          width: 1em;\n          margin-left: -1em;\n        }\n        \n        ul {\n          list-style: none;\n          li:not([class*="Mui"])::before {\n            content: "￮";\n            color: '
        )
        .concat(
          Fa(a, "bulletColor", "#2781B0"),
          ",\n            font-size: 20px;\n            display: inline-block;\n            width: 1em;\n            margin-left: -1em;\n          }\n        }\n      }\n      \n    button:active, button:focus, input: active, input:focus {\n        outline: 0;\n    }\n    \n    .min-icon {\n        width: 26px;\n    }\n    \n    #root: {\n        height: 100%;\n        width: 100%;\n        display: flex;\n        flex-flow: column;\n        align-items: stretch;\n      }\n    \n    #preload {\n      display: none;\n    }\n    \n    #loader-block {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      height: 100vh;\n      justify-content: center;\n      align-items: center;\n    }\n    "
        );
    }
  ),
  ot = n.button(function (e) {
    var a = e.theme,
      t = e.fullWidth,
      n = e.variant,
      l = e.iconLocation,
      r = e.icon,
      c = e.label,
      m = e.collapseOnSmall,
      o = e.parentChildren,
      i = n || "regular",
      h =
        (c || o) && r
          ? {
              marginLeft: "end" === l ? "0" : "10px",
              marginRight: "start" === l ? "0" : "10px",
            }
          : { marginRight: 0, marginLeft: 0 },
      d = {};
    return (
      m &&
        r &&
        ((c && "" !== c.trim()) || o) &&
        (d = {
          "@media (max-width: 768px)": {
            padding: "0 14px",
            "& .button-label": { display: "none" },
          },
        }),
      T(
        {
          borderRadius: "3px",
          cursor: "pointer",
          width: t ? "100%" : "initial",
          height: "39px",
          fontFamily: "'Inter', sans-serif",
          fontWeight: "400",
          fontSize: "14px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
          padding: (c && "" !== c.trim()) || o ? "0 25px" : "0 14px",
          transition: "all 0.2s linear",
          backgroundColor: Fa(
            a,
            "buttons.".concat(i, ".enabled.background"),
            "#fff"
          ),
          borderColor: Fa(a, "buttons.".concat(i, ".enabled.border"), "#000"),
          borderWidth: "1px",
          borderStyle: "solid",
          color: Fa(a, "buttons.".concat(i, ".enabled.text"), "#000"),
          "& .button-label": T({ whiteSpace: t ? "normal" : "nowrap" }, h),
          "& .buttonIcon": {
            display: "block",
            height: "14px",
            "& > svg": {
              fill: Fa(a, "buttons.".concat(i, ".enabled.text"), "#000"),
              color: Fa(a, "buttons.".concat(i, ".enabled.text"), "#000"),
              width: "14px",
              height: "14px",
            },
          },
          "&:disabled": {
            cursor: "not-allowed",
            backgroundColor: Fa(
              a,
              "buttons.".concat(i, ".disabled.background"),
              "#fff"
            ),
            borderColor: Fa(
              a,
              "buttons.".concat(i, ".disabled.border"),
              "#000"
            ),
            borderWeight: "1px",
            borderStyle: "solid",
            color: Fa(a, "buttons.".concat(i, ".disabled.text"), "#000"),
            "& .buttonIcon > svg": {
              fill: Fa(a, "buttons.".concat(i, ".disabled.text"), "#000"),
              color: Fa(a, "buttons.".concat(i, ".disabled.text"), "#000"),
            },
          },
          "&:hover:not(:disabled)": {
            backgroundColor: Fa(
              a,
              "buttons.".concat(i, ".hover.background"),
              "#fff"
            ),
            borderColor: Fa(a, "buttons.".concat(i, ".hover.border"), "#000"),
            borderWeight: "1px",
            borderStyle: "solid",
            color: Fa(a, "buttons.".concat(i, ".hover.text"), "#000"),
            "& .buttonIcon > svg": {
              fill: Fa(a, "buttons.".concat(i, ".hover.text"), "#000"),
              color: Fa(a, "buttons.".concat(i, ".hover.text"), "#000"),
            },
          },
          "&:active:not(:disabled)": {
            backgroundColor: Fa(
              a,
              "buttons.".concat(i, ".pressed.background"),
              "#fff"
            ),
            border: Fa(a, "buttons.".concat(i, ".pressed.border"), "#000"),
            borderWeight: "1px",
            borderStyle: "solid",
            color: Fa(a, "buttons.".concat(i, ".pressed.text"), "#000"),
            "& .buttonIcon > svg": {
              fill: Fa(a, "buttons.".concat(i, ".pressed.text"), "#000"),
              color: Fa(a, "buttons.".concat(i, ".pressed.text"), "#000"),
            },
          },
        },
        d
      )
    );
  }),
  it = function (e) {
    var n = e.label,
      l = e.variant,
      r = void 0 === l ? "regular" : l,
      c = e.icon,
      m = e.iconLocation,
      o = void 0 === m ? "end" : m,
      i = e.onClick,
      h = e.disabled,
      d = e.fullWidth,
      s = e.collapseOnSmall,
      p = void 0 === s || s,
      v = e.children,
      f = (function (e, a) {
        var t = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            a.indexOf(n) < 0 &&
            (t[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var l = 0;
          for (n = Object.getOwnPropertySymbols(e); l < n.length; l++)
            a.indexOf(n[l]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[l]) &&
              (t[n[l]] = e[n[l]]);
        }
        return t;
      })(e, [
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
      E = null;
    return (
      c && (E = a.createElement("span", { className: "buttonIcon" }, c)),
      a.createElement(
        ot,
        T(
          {
            onClick: i,
            disabled: h || !1,
            variant: r || "regular",
            iconLocation: o || "end",
            label: n || "",
            fullWidth: d || !1,
            collapseOnSmall: !!p,
            icon: E,
            parentChildren: v || null,
          },
          f
        ),
        a.createElement(
          t,
          null,
          c && "start" === o && E,
          a.createElement(
            "span",
            { className: "button-label" },
            v,
            v && n ? " " : "",
            n
          ),
          c && "end" === o && E
        )
      )
    );
  },
  ht = n.svg(function (e) {
    var a = Fa(e, "theme.logoLabelColor", "#000");
    return (
      e.inverse && (a = Fa(e, "theme.logoLabelInverse", "#fff")),
      {
        "& .minioSection": { fill: Fa(e, "theme.logoColor", "#C51C3F") },
        "& .minioApplicationName": { fill: a },
      }
    );
  }),
  dt = function (e) {
    var t = e.inverse;
    return a.createElement(
      ht,
      { viewBox: "0 0 184.538 50.008", inverse: t },
      a.createElement(
        "g",
        { transform: "translate(-31.65 -18.133)" },
        a.createElement(
          "g",
          { transform: "translate(-995 -63.754)" },
          a.createElement(
            "g",
            { transform: "translate(1025.5 81.887)" },
            a.createElement(
              "g",
              { transform: "translate(0 0)" },
              a.createElement(
                "g",
                { transform: "translate(0 0)" },
                a.createElement("path", {
                  d: "M10.338-17.825A8.815,8.815,0,0,0,1.15-8.75,8.815,8.815,0,0,0,10.338.325a8.825,8.825,0,0,0,9.2-9.075A8.825,8.825,0,0,0,10.338-17.825Zm0,3.35a5.4,5.4,0,0,1,5.55,5.725,5.4,5.4,0,0,1-5.55,5.725A5.41,5.41,0,0,1,4.788-8.75,5.41,5.41,0,0,1,10.338-14.475ZM22.05-17.5V0h7.575c4.2,0,6.588-1.65,6.588-5.013A4.2,4.2,0,0,0,33.3-8.938a3.9,3.9,0,0,0,2.537-3.713c0-3.337-2.562-4.85-6.638-4.85Zm7.4,10.225c1.925,0,3.138.45,3.138,2.088,0,1.675-1.212,2.125-3.138,2.125l-3.913-.013v-4.2Zm-.35-7.15c1.725,0,3.1.375,3.1,2.025,0,1.7-1.35,2.063-3.087,2.063H25.538v-4.088ZM48.788-17.5H45.3V-6.7c0,2.525-1.1,3.675-2.95,3.675a4.214,4.214,0,0,1-3.4-1.625L36.925-2.113A6.9,6.9,0,0,0,42.513.313c3.65,0,6.275-2.3,6.275-6.688ZM65.113-3.2H55.525V-7.225h9.05v-3.2h-9.05V-14.3h9.487v-3.2H52.037V0H65.113ZM76.3-17.825A8.794,8.794,0,0,0,67.113-8.75,8.794,8.794,0,0,0,76.3.325a8.713,8.713,0,0,0,7.387-3.7l-2.85-2.05a5.355,5.355,0,0,1-4.562,2.4A5.4,5.4,0,0,1,70.75-8.75a5.411,5.411,0,0,1,5.525-5.725A5.237,5.237,0,0,1,80.8-12.063l3-1.838A8.5,8.5,0,0,0,76.3-17.825Zm22.9.325H84.863v3.262h5.425V0h3.487V-14.238H99.2Zm19.787,1.738a10.5,10.5,0,0,0-6.25-1.925c-3.6,0-6.475,1.812-6.475,5.037,0,2.688,1.938,4.125,5.138,4.488l1.987.225c2.913.325,4.438,1.25,4.438,3.15,0,2.363-2.337,3.525-5.3,3.525a10.115,10.115,0,0,1-5.925-1.95L105.762-2A11.524,11.524,0,0,0,112.537.188c3.775,0,6.875-1.7,6.875-5.1,0-2.913-2.262-4.138-5.375-4.488l-1.912-.212c-2.988-.338-4.275-1.4-4.275-3.138,0-2.187,2.063-3.488,4.875-3.488a9.323,9.323,0,0,1,5.475,1.713ZM135.025-17.5H120.888v1.45h6.3V0h1.525V-16.05h6.313Zm9.875-.2a8.672,8.672,0,0,0-8.963,8.95A8.672,8.672,0,0,0,144.9.2a8.672,8.672,0,0,0,8.962-8.95A8.672,8.672,0,0,0,144.9-17.7Zm0,1.475a7.174,7.174,0,0,1,7.363,7.475A7.174,7.174,0,0,1,144.9-1.275a7.177,7.177,0,0,1-7.375-7.475A7.177,7.177,0,0,1,144.9-16.225ZM157.413-17.5V0h1.525V-7.763h2.675L168.138,0h1.9l-6.625-7.763h.688c3.725,0,6.025-1.862,6.025-4.875,0-3.1-2.175-4.863-6.037-4.863Zm6.663,1.438c2.875,0,4.475,1.188,4.475,3.425s-1.575,3.488-4.475,3.488h-5.138v-6.913ZM185.6-1.438H175.075V-8.1h10.138V-9.525H175.075v-6.538h10.438V-17.5H173.55V0H185.6Z",
                  transform: "translate(0 32.612)",
                  className: "minioApplicationName",
                }),
                a.createElement(
                  "g",
                  { transform: "translate(2.003)" },
                  a.createElement(
                    "g",
                    { transform: "translate(0 0.129)" },
                    a.createElement("rect", {
                      width: "2.49",
                      height: "7.352",
                      transform: "translate(14.42)",
                      className: "minioSection",
                    }),
                    a.createElement("path", {
                      d: "M237.8,365.332l-5.053,3.086a.226.226,0,0,1-.235,0l-5.053-3.086a.694.694,0,0,0-.362-.1H227.1a.693.693,0,0,0-.693.693v6.65h2.489v-3.165a.249.249,0,0,1,.379-.212l2.832,1.733a.886.886,0,0,0,.912.009L236,369.184a.249.249,0,0,1,.374.215v3.174h2.488v-6.65a.693.693,0,0,0-.692-.693h-.006A.694.694,0,0,0,237.8,365.332Z",
                      transform: "translate(-226.403 -365.23)",
                      className: "minioSection",
                    }),
                    a.createElement("path", {
                      d: "M257.822,365.23H255.3v3.346a.249.249,0,0,1-.366.22l-6.543-3.485a.7.7,0,0,0-.326-.081h0a.693.693,0,0,0-.693.693v6.651h2.5v-3.343a.249.249,0,0,1,.365-.22L256.8,372.5a.692.692,0,0,0,.325.081h0a.693.693,0,0,0,.693-.693Z",
                      transform: "translate(-228.498 -365.23)",
                      className: "minioSection",
                    })
                  ),
                  a.createElement("path", {
                    d: "M261.159,372.582V365.23H262.3v7.352Z",
                    transform: "translate(-229.877 -365.101)",
                    className: "minioSection",
                  }),
                  a.createElement("path", {
                    d: "M269.337,372.7c-3.082,0-5.268-1.462-5.268-3.805s2.2-3.806,5.268-3.806,5.281,1.462,5.281,3.806S272.458,372.7,269.337,372.7Zm0-6.637c-2.292,0-4.056,1-4.056,2.832s1.765,2.831,4.056,2.831,4.07-.988,4.07-2.831S271.628,366.062,269.337,366.062Z",
                    transform: "translate(-230.168 -365.087)",
                    className: "minioSection",
                  })
                )
              )
            )
          )
        ),
        a.createElement("path", {
          d: "M5.344-6a1.226,1.226,0,0,0-.57-.922A2.188,2.188,0,0,0,3.547-7.25a2.317,2.317,0,0,0-.928.172A1.468,1.468,0,0,0,2-6.605a1.126,1.126,0,0,0-.221.684.957.957,0,0,0,.154.549,1.3,1.3,0,0,0,.4.379,2.686,2.686,0,0,0,.508.246q.266.1.488.154l.813.219a7.221,7.221,0,0,1,.7.227,3.309,3.309,0,0,1,.738.393,2.04,2.04,0,0,1,.584.635,1.824,1.824,0,0,1,.23.949A2.115,2.115,0,0,1,6.053-1a2.329,2.329,0,0,1-.984.832A3.618,3.618,0,0,1,3.5.141,3.653,3.653,0,0,1,2.014-.137,2.355,2.355,0,0,1,1.029-.91a2.2,2.2,0,0,1-.4-1.152h1a1.236,1.236,0,0,0,.307.748,1.608,1.608,0,0,0,.68.438A2.7,2.7,0,0,0,3.5-.734a2.6,2.6,0,0,0,1-.182,1.687,1.687,0,0,0,.7-.508,1.2,1.2,0,0,0,.258-.764.938.938,0,0,0-.223-.648,1.634,1.634,0,0,0-.586-.406,6.157,6.157,0,0,0-.785-.273L2.875-3.8a3.666,3.666,0,0,1-1.484-.77A1.69,1.69,0,0,1,.844-5.875a1.942,1.942,0,0,1,.365-1.174,2.417,2.417,0,0,1,.984-.781,3.331,3.331,0,0,1,1.385-.279,3.269,3.269,0,0,1,1.375.275,2.409,2.409,0,0,1,.955.752A1.875,1.875,0,0,1,6.281-6Zm3.3-1.141V-8h6v.859H12.131V0h-.969V-7.141ZM16.638,0H15.622l2.938-8h1L22.5,0H21.481L19.091-6.734h-.062Zm.375-3.125h4.094v.859H17.013ZM31.191-8V0h-.937L25.894-6.281h-.078V0h-.969V-8h.938l4.375,6.3h.078V-8ZM36.7,0H34.228V-8h2.578a3.918,3.918,0,0,1,1.992.479,3.16,3.16,0,0,1,1.27,1.371,4.771,4.771,0,0,1,.441,2.135,4.8,4.8,0,0,1-.445,2.15,3.159,3.159,0,0,1-1.3,1.383A4.14,4.14,0,0,1,36.7,0ZM35.2-.859h1.438a3.209,3.209,0,0,0,1.645-.383,2.359,2.359,0,0,0,.973-1.09,4.054,4.054,0,0,0,.32-1.684,4.035,4.035,0,0,0-.316-1.67,2.347,2.347,0,0,0-.945-1.078,3,3,0,0,0-1.566-.377H35.2ZM43.188,0H42.172l2.938-8h1l2.938,8H48.031L45.641-6.734h-.062Zm.375-3.125h4.094v.859H43.563ZM51.4,0V-8h2.7a3.277,3.277,0,0,1,1.539.318,2.054,2.054,0,0,1,.891.873,2.69,2.69,0,0,1,.289,1.262,2.643,2.643,0,0,1-.289,1.254,2.026,2.026,0,0,1-.887.857,3.3,3.3,0,0,1-1.527.311H51.928V-4h2.156a2.415,2.415,0,0,0,1.033-.187,1.194,1.194,0,0,0,.57-.533,1.787,1.787,0,0,0,.178-.826,1.856,1.856,0,0,0-.18-.84,1.235,1.235,0,0,0-.574-.557,2.345,2.345,0,0,0-1.043-.2h-1.7V0Zm3.766-3.594L57.131,0H56.006L54.069-3.594ZM62,0H59.528V-8h2.578a3.918,3.918,0,0,1,1.992.479,3.16,3.16,0,0,1,1.27,1.371,4.771,4.771,0,0,1,.441,2.135,4.8,4.8,0,0,1-.445,2.15,3.159,3.159,0,0,1-1.3,1.383A4.14,4.14,0,0,1,62,0ZM60.5-.859h1.438a3.209,3.209,0,0,0,1.645-.383,2.359,2.359,0,0,0,.973-1.09,4.055,4.055,0,0,0,.32-1.684,4.035,4.035,0,0,0-.316-1.67,2.347,2.347,0,0,0-.945-1.078,3,3,0,0,0-1.566-.377H60.5ZM72.728,0V-8H73.7V-.859h3.719V0Zm8.256-8V0h-.969V-8Zm9.475,2.5h-.969a2.034,2.034,0,0,0-.3-.734,2.072,2.072,0,0,0-.516-.533,2.24,2.24,0,0,0-.67-.326,2.668,2.668,0,0,0-.766-.109,2.431,2.431,0,0,0-1.314.367,2.536,2.536,0,0,0-.934,1.082A4.007,4.007,0,0,0,84.647-4a4.007,4.007,0,0,0,.346,1.754,2.536,2.536,0,0,0,.934,1.082A2.431,2.431,0,0,0,87.241-.8a2.668,2.668,0,0,0,.766-.109,2.24,2.24,0,0,0,.67-.326,2.06,2.06,0,0,0,.516-.535,2.053,2.053,0,0,0,.3-.732h.969a3.227,3.227,0,0,1-.4,1.1,2.973,2.973,0,0,1-.719.822,3.129,3.129,0,0,1-.963.514,3.614,3.614,0,0,1-1.139.176,3.353,3.353,0,0,1-1.82-.5,3.431,3.431,0,0,1-1.254-1.422A4.874,4.874,0,0,1,83.709-4a4.874,4.874,0,0,1,.457-2.187A3.431,3.431,0,0,1,85.42-7.609a3.353,3.353,0,0,1,1.82-.5,3.614,3.614,0,0,1,1.139.176,3.129,3.129,0,0,1,.963.514,2.984,2.984,0,0,1,.719.82A3.208,3.208,0,0,1,90.459-5.5ZM93.122,0V-8H97.95v.859H94.091v2.7H97.7v.859H94.091V-.859h3.922V0Zm14.022-8V0h-.937l-4.359-6.281h-.078V0H100.8V-8h.938l4.375,6.3h.078V-8Zm7.412,2a1.226,1.226,0,0,0-.57-.922,2.188,2.188,0,0,0-1.227-.328,2.317,2.317,0,0,0-.928.172,1.468,1.468,0,0,0-.617.473,1.126,1.126,0,0,0-.221.684.957.957,0,0,0,.154.549,1.3,1.3,0,0,0,.4.379,2.686,2.686,0,0,0,.508.246q.266.1.488.154l.813.219a7.22,7.22,0,0,1,.7.227,3.309,3.309,0,0,1,.738.393,2.04,2.04,0,0,1,.584.635,1.824,1.824,0,0,1,.23.949A2.115,2.115,0,0,1,115.265-1a2.329,2.329,0,0,1-.984.832,3.618,3.618,0,0,1-1.568.309,3.653,3.653,0,0,1-1.486-.277,2.355,2.355,0,0,1-.984-.773,2.2,2.2,0,0,1-.4-1.152h1a1.236,1.236,0,0,0,.307.748,1.608,1.608,0,0,0,.68.438,2.7,2.7,0,0,0,.889.143,2.6,2.6,0,0,0,1-.182,1.687,1.687,0,0,0,.7-.508,1.2,1.2,0,0,0,.258-.764.938.938,0,0,0-.223-.648,1.634,1.634,0,0,0-.586-.406,6.157,6.157,0,0,0-.785-.273l-.984-.281a3.666,3.666,0,0,1-1.484-.77,1.69,1.69,0,0,1-.547-1.309,1.942,1.942,0,0,1,.365-1.174,2.417,2.417,0,0,1,.984-.781,3.331,3.331,0,0,1,1.385-.279,3.269,3.269,0,0,1,1.375.275,2.409,2.409,0,0,1,.955.752A1.875,1.875,0,0,1,115.494-6ZM118.3,0V-8h4.828v.859h-3.859v2.7h3.609v.859h-3.609V-.859h3.922V0Z",
          transform: "translate(93 68)",
          className: "minioApplicationName",
        })
      )
    );
  },
  st = function (e) {
    var t = e.inverse;
    return a.createElement(
      ht,
      { viewBox: "0 0 184.45 54.229", inverse: t },
      a.createElement(
        "g",
        { transform: "translate(-31.65 -18.133)" },
        a.createElement(
          "g",
          { transform: "translate(-995 -63.754)" },
          a.createElement(
            "g",
            { transform: "translate(1025.5 81.887)" },
            a.createElement(
              "g",
              { transform: "translate(0 0)" },
              a.createElement(
                "g",
                { transform: "translate(0 0)" },
                a.createElement("path", {
                  d: "M10.338-17.825A8.815,8.815,0,0,0,1.15-8.75,8.815,8.815,0,0,0,10.338.325a8.825,8.825,0,0,0,9.2-9.075A8.825,8.825,0,0,0,10.338-17.825Zm0,3.35a5.4,5.4,0,0,1,5.55,5.725,5.4,5.4,0,0,1-5.55,5.725A5.41,5.41,0,0,1,4.788-8.75,5.41,5.41,0,0,1,10.338-14.475ZM22.05-17.5V0h7.575c4.2,0,6.588-1.65,6.588-5.013A4.2,4.2,0,0,0,33.3-8.938a3.9,3.9,0,0,0,2.537-3.713c0-3.337-2.562-4.85-6.638-4.85Zm7.4,10.225c1.925,0,3.138.45,3.138,2.088,0,1.675-1.212,2.125-3.138,2.125l-3.913-.013v-4.2Zm-.35-7.15c1.725,0,3.1.375,3.1,2.025,0,1.7-1.35,2.063-3.087,2.063H25.538v-4.088ZM48.788-17.5H45.3V-6.7c0,2.525-1.1,3.675-2.95,3.675a4.214,4.214,0,0,1-3.4-1.625L36.925-2.113A6.9,6.9,0,0,0,42.513.313c3.65,0,6.275-2.3,6.275-6.688ZM65.113-3.2H55.525V-7.225h9.05v-3.2h-9.05V-14.3h9.487v-3.2H52.037V0H65.113ZM76.3-17.825A8.794,8.794,0,0,0,67.113-8.75,8.794,8.794,0,0,0,76.3.325a8.713,8.713,0,0,0,7.387-3.7l-2.85-2.05a5.355,5.355,0,0,1-4.562,2.4A5.4,5.4,0,0,1,70.75-8.75a5.411,5.411,0,0,1,5.525-5.725A5.237,5.237,0,0,1,80.8-12.063l3-1.838A8.5,8.5,0,0,0,76.3-17.825Zm22.9.325H84.863v3.262h5.425V0h3.487V-14.238H99.2Zm19.787,1.738a10.5,10.5,0,0,0-6.25-1.925c-3.6,0-6.475,1.812-6.475,5.037,0,2.688,1.938,4.125,5.138,4.488l1.987.225c2.913.325,4.438,1.25,4.438,3.15,0,2.363-2.337,3.525-5.3,3.525a10.115,10.115,0,0,1-5.925-1.95L105.762-2A11.524,11.524,0,0,0,112.537.188c3.775,0,6.875-1.7,6.875-5.1,0-2.913-2.262-4.138-5.375-4.488l-1.912-.212c-2.988-.338-4.275-1.4-4.275-3.138,0-2.187,2.063-3.488,4.875-3.488a9.323,9.323,0,0,1,5.475,1.713ZM135.025-17.5H120.888v1.45h6.3V0h1.525V-16.05h6.313Zm9.875-.2a8.672,8.672,0,0,0-8.963,8.95A8.672,8.672,0,0,0,144.9.2a8.672,8.672,0,0,0,8.962-8.95A8.672,8.672,0,0,0,144.9-17.7Zm0,1.475a7.174,7.174,0,0,1,7.363,7.475A7.174,7.174,0,0,1,144.9-1.275a7.177,7.177,0,0,1-7.375-7.475A7.177,7.177,0,0,1,144.9-16.225ZM157.413-17.5V0h1.525V-7.763h2.675L168.138,0h1.9l-6.625-7.763h.688c3.725,0,6.025-1.862,6.025-4.875,0-3.1-2.175-4.863-6.037-4.863Zm6.663,1.438c2.875,0,4.475,1.188,4.475,3.425s-1.575,3.488-4.475,3.488h-5.138v-6.913ZM185.6-1.438H175.075V-8.1h10.138V-9.525H175.075v-6.538h10.438V-17.5H173.55V0H185.6Z",
                  transform: "translate(0 32.612)",
                  className: "minioApplicationName",
                }),
                a.createElement(
                  "g",
                  { transform: "translate(2.003)" },
                  a.createElement(
                    "g",
                    { transform: "translate(0 0.129)" },
                    a.createElement("rect", {
                      width: "2.49",
                      height: "7.352",
                      transform: "translate(14.42)",
                      className: "minioSection",
                    }),
                    a.createElement("path", {
                      d: "M237.8,365.332l-5.053,3.086a.226.226,0,0,1-.235,0l-5.053-3.086a.694.694,0,0,0-.362-.1H227.1a.693.693,0,0,0-.693.693v6.65h2.489v-3.165a.249.249,0,0,1,.379-.212l2.832,1.733a.886.886,0,0,0,.912.009L236,369.184a.249.249,0,0,1,.374.215v3.174h2.488v-6.65a.693.693,0,0,0-.692-.693h-.006A.694.694,0,0,0,237.8,365.332Z",
                      transform: "translate(-226.403 -365.23)",
                      className: "minioSection",
                    }),
                    a.createElement("path", {
                      d: "M257.822,365.23H255.3v3.346a.249.249,0,0,1-.366.22l-6.543-3.485a.7.7,0,0,0-.326-.081h0a.693.693,0,0,0-.693.693v6.651h2.5v-3.343a.249.249,0,0,1,.365-.22L256.8,372.5a.692.692,0,0,0,.325.081h0a.693.693,0,0,0,.693-.693Z",
                      transform: "translate(-228.498 -365.23)",
                      className: "minioSection",
                    })
                  ),
                  a.createElement("path", {
                    d: "M261.159,372.582V365.23H262.3v7.352Z",
                    transform: "translate(-229.877 -365.101)",
                    className: "minioSection",
                  }),
                  a.createElement("path", {
                    d: "M269.337,372.7c-3.082,0-5.268-1.462-5.268-3.805s2.2-3.806,5.268-3.806,5.281,1.462,5.281,3.806S272.458,372.7,269.337,372.7Zm0-6.637c-2.292,0-4.056,1-4.056,2.832s1.765,2.831,4.056,2.831,4.07-.988,4.07-2.831S271.628,366.062,269.337,366.062Z",
                    transform: "translate(-230.168 -365.087)",
                    className: "minioSection",
                  })
                )
              )
            )
          ),
          a.createElement(
            "g",
            { transform: "translate(1168.671 120.754)" },
            a.createElement(
              "g",
              { transform: "translate(-65 0)" },
              a.createElement("path", {
                d: "M106.959,1769.479l-3.274,14.286h31.641a2.814,2.814,0,0,1-2.121-1.012,2.15,2.15,0,0,1-.209-.356c-.038-.092-.073-.185-.109-.28a2.832,2.832,0,0,1-.115-.985,7.182,7.182,0,0,1,1.312-3.389,18.271,18.271,0,0,1,3.616-3.945c.343-.284.7-.566,1.068-.839.458-.337.92-.648,1.383-.938a17.592,17.592,0,0,1,4.907-2.2,18.957,18.957,0,0,0-4.651,2.351l-.171.118a20.8,20.8,0,0,0-2.389,1.924c-2.254,2.119-3.445,4.315-2.9,5.6a1.6,1.6,0,0,0,.138.253c.582.856,2.024,1,3.851.544.124-.031.249-.067.377-.1a14.878,14.878,0,0,0,1.842-.677c.153-.068.309-.137.465-.212l.047-.023c2.015-1,3.563-2.153,3.9-2.845a.43.43,0,0,0,.041-.379c-.239-.485-1.912-.157-3.939.72-.163.07-.328.143-.494.221.136-.125.277-.252.421-.377.23-.2.468-.391.721-.582a14.277,14.277,0,0,1,1.191-.812c1.847-1.394,2.781-2.712,2.586-3.2a.343.343,0,0,0-.235-.194,3.4,3.4,0,0,0-1.942.374,14.514,14.514,0,0,0-2.333,1.25l-.112.073-.021.012-.394.262.226-.415a7.126,7.126,0,0,1,1.565-1.853,11.116,11.116,0,0,1,1.686-1.206c.233-.136.465-.262.7-.376s.476-.22.709-.312a8.2,8.2,0,0,1,1.98-.649c-.051,0-1.677.175-1.677.175H106.959Zm25.5.021a19.123,19.123,0,0,0,.8,5.76q.165.612.362,1.242.123.388.253.765c-.051.075-.1.149-.15.224a7.909,7.909,0,0,0-1.339,3.277,20.169,20.169,0,0,1-.712-3.562q-.059-.546-.091-1.08a15.688,15.688,0,0,1,.877-6.625Zm-15.424,1.833h3.533a1.217,1.217,0,0,1,.691.168.394.394,0,0,1,.185.435l-.415,1.874h-1.227l.4-1.824h-3.071L116.03,1777l-.4,1.815H118.7l0-.011.615-2.778h-1.442l.138-.626h2.668l-.765,3.466a.488.488,0,0,1-.053.138.765.765,0,0,1-.327.294,1.621,1.621,0,0,1-.765.168h-3.477a1.214,1.214,0,0,1-.691-.168.388.388,0,0,1-.185-.432l1.533-6.928a.664.664,0,0,1,.377-.435c.008,0,.016,0,.024-.009a1.6,1.6,0,0,1,.688-.159Zm5.454,0h4.38a1.215,1.215,0,0,1,.688.168.392.392,0,0,1,.188.435l-.818,3.695a.663.663,0,0,1-.38.433,1.612,1.612,0,0,1-.762.171h-3.183l-.615,2.774-.1.456h-1.2l.091-.412Zm6.051,0h1.2l-1.359,6.14-.3,1.341h2.871c.03.22.065.437.1.65h-4.319l.341-1.542Zm-5,.653-.8,3.6h2.992l.794-3.6Zm-6.38,8.485h.035a.85.85,0,0,1,.359.07.428.428,0,0,1,.221.218.532.532,0,0,1,.029.315l-.009.044h-.344l0-.041a.271.271,0,0,0-.032-.188l-.015-.018a.2.2,0,0,0-.029-.024.426.426,0,0,0-.221-.047.511.511,0,0,0-.291.068.258.258,0,0,0-.118.153.113.113,0,0,0,.024.109l0,0a.81.81,0,0,0,.291.1,2,2,0,0,1,.38.12.448.448,0,0,1,.218.209.458.458,0,0,1,.024.291.665.665,0,0,1-.156.291.789.789,0,0,1-.3.212,1,1,0,0,1-.382.076.955.955,0,0,1-.412-.076.473.473,0,0,1-.238-.244.6.6,0,0,1-.029-.356l.009-.041h.338l0,.041a.373.373,0,0,0,.021.189.23.23,0,0,0,.118.112.543.543,0,0,0,.235.047.649.649,0,0,0,.224-.038.4.4,0,0,0,.156-.094.261.261,0,0,0,.068-.126.138.138,0,0,0-.009-.1.214.214,0,0,0-.109-.08l-.288-.085a1.274,1.274,0,0,1-.332-.118.411.411,0,0,1-.18-.194.418.418,0,0,1-.015-.256.622.622,0,0,1,.144-.28.72.72,0,0,1,.288-.2A1.01,1.01,0,0,1,117.169,1780.47Zm3.089.006c.019,0,.036,0,.056,0l.212.023.071.006-.1.262-.021.041-.162-.015a.186.186,0,0,0-.106.023l-.006.006-.012.012a.279.279,0,0,0-.044.112l-.012.047h.253l-.065.292h-.247l-.25,1.121h-.341s.222-1,.25-1.121h-.2l.065-.292h.194c.009-.04.024-.091.024-.091a.717.717,0,0,1,.071-.209.441.441,0,0,1,.162-.159.491.491,0,0,1,.209-.059Zm.815.015-.112.5h.221l-.065.292H120.9c-.018.081-.159.709-.159.709s-.012.076-.012.1c0,0,0,0,0,0s0,0,0,0h0l.035,0,.162-.012-.018.262,0,.047-.232.026a.375.375,0,0,1-.209-.047.209.209,0,0,1-.094-.135.221.221,0,0,1-.006-.047,1.206,1.206,0,0,1,.035-.239s.124-.554.15-.671h-.162l.065-.292h.162c.015-.068.068-.3.068-.3l.274-.144.112-.059Zm-10.841.011h1.324l-.074.329h-.968l-.1.436h.838l-.074.329h-.838c-.018.082-.179.809-.179.809h-.356Zm1.774.465a.331.331,0,0,1,.041,0,.4.4,0,0,1,.238.079l.047.032-.182.3-.05-.035a.214.214,0,0,0-.118-.036.185.185,0,0,0-.1.036.258.258,0,0,0-.088.1.93.93,0,0,0-.088.241l-.159.724H111.2l.315-1.413h.318s-.011.043-.015.059c.015-.012.031-.027.044-.035A.358.358,0,0,1,112.006,1780.968Zm1.012,0c.021,0,.041,0,.062,0a.5.5,0,0,1,.432.2.545.545,0,0,1,.091.317,1.064,1.064,0,0,1-.026.227l-.026.1h-.959c0,.02,0,.041,0,.059a.28.28,0,0,0,.047.173.216.216,0,0,0,.053.053.261.261,0,0,0,.144.038.339.339,0,0,0,.188-.056.5.5,0,0,0,.153-.167h.365l-.032.07a.806.806,0,0,1-.288.329.779.779,0,0,1-.427.121.531.531,0,0,1-.459-.2.644.644,0,0,1-.065-.536.975.975,0,0,1,.3-.541.76.76,0,0,1,.45-.191Zm1.533,0c.021,0,.041,0,.062,0a.5.5,0,0,1,.432.2.545.545,0,0,1,.091.317,1.04,1.04,0,0,1-.026.224l-.026.106h-.959l0,.038s0,.012,0,.018v0c0,.013,0,.028,0,.041a.254.254,0,0,0,.044.132.227.227,0,0,0,.015.021.239.239,0,0,0,.182.071.336.336,0,0,0,.188-.056.5.5,0,0,0,.153-.167h.368l-.035.07a.806.806,0,0,1-.288.329.779.779,0,0,1-.427.121.49.49,0,0,1-.55-.52c0-.02,0-.041,0-.062a1.067,1.067,0,0,1,.024-.153.975.975,0,0,1,.3-.541A.768.768,0,0,1,114.551,1780.968Zm4.175,0c.021,0,.04,0,.062,0a.523.523,0,0,1,.444.2.627.627,0,0,1,.071.529,1.086,1.086,0,0,1-.171.415.811.811,0,0,1-.644.326.516.516,0,0,1-.444-.2.528.528,0,0,1-.094-.321,1.011,1.011,0,0,1,.026-.227.925.925,0,0,1,.341-.568.794.794,0,0,1,.409-.153Zm5.169,0c.025,0,.048,0,.074,0a.748.748,0,0,1,.282.041.31.31,0,0,1,.159.124.337.337,0,0,1,.044.179l-.035.215-.065.291a3.187,3.187,0,0,0-.071.377.377.377,0,0,0,.015.135l.024.077h-.347l-.015-.045a.417.417,0,0,1-.006-.07,1.03,1.03,0,0,1-.191.1.83.83,0,0,1-.271.047.446.446,0,0,1-.35-.123.313.313,0,0,1-.079-.218.474.474,0,0,1,.012-.1.492.492,0,0,1,.091-.2.55.55,0,0,1,.159-.141.71.71,0,0,1,.191-.077l.209-.035a2.331,2.331,0,0,0,.368-.068.185.185,0,0,1,.006-.021.188.188,0,0,0,0-.129l-.006-.006-.012-.012a.29.29,0,0,0-.177-.041.391.391,0,0,0-.206.044.382.382,0,0,0-.127.159h-.356l.032-.071a.75.75,0,0,1,.156-.241.648.648,0,0,1,.247-.144A.974.974,0,0,1,123.895,1780.968Zm1.492,0a.331.331,0,0,1,.041,0,.4.4,0,0,1,.241.079l.044.032-.182.3-.05-.035a.207.207,0,0,0-.115-.036.2.2,0,0,0-.106.036.259.259,0,0,0-.085.1.965.965,0,0,0-.088.241l-.162.724h-.341l.315-1.413h.318s-.008.043-.012.059a.536.536,0,0,1,.044-.035A.342.342,0,0,1,125.386,1780.968Zm1.009,0c.02,0,.041,0,.062,0a.5.5,0,0,1,.432.2.538.538,0,0,1,.091.317,1.077,1.077,0,0,1-.029.227l-.024.1h-.959c0,.02-.006.041-.006.059a.286.286,0,0,0,.047.173.251.251,0,0,0,.018.021l.012.012a.246.246,0,0,0,.171.059.339.339,0,0,0,.188-.056.508.508,0,0,0,.153-.167h.368l-.035.07a.813.813,0,0,1-.288.329.779.779,0,0,1-.427.121.525.525,0,0,1-.456-.2.647.647,0,0,1-.068-.536.972.972,0,0,1,.3-.541A.77.77,0,0,1,126.4,1780.968Zm-5.151.026h.35s.043.838.044.85c.014-.03.025-.055.026-.059l.385-.792h.321s.029.828.029.833l.438-.833h.347l-.765,1.413h-.315s-.03-.766-.032-.809l-.394.809h-.324Zm-8.22.268a.374.374,0,0,0-.224.088.433.433,0,0,0-.121.167h.58c0-.01,0-.023,0-.032a.244.244,0,0,0-.026-.123.207.207,0,0,0-.194-.1Zm1.533,0a.374.374,0,0,0-.224.088.443.443,0,0,0-.121.167h.58c0-.01,0-.023,0-.032a.234.234,0,0,0-.026-.123.244.244,0,0,0-.029-.038.219.219,0,0,0-.165-.062Zm11.856,0a.381.381,0,0,0-.232.088.454.454,0,0,0-.121.167h.577c0-.01,0-.023,0-.032a.234.234,0,0,0-.027-.123.21.21,0,0,0-.194-.1Zm-7.708.006a.39.39,0,0,0-.218.106.637.637,0,0,0-.174.341.779.779,0,0,0-.021.168.289.289,0,0,0,.038.159.316.316,0,0,0,.024.03.229.229,0,0,0,.174.068.372.372,0,0,0,.259-.109.654.654,0,0,0,.174-.347.419.419,0,0,0-.018-.317.213.213,0,0,0-.194-.1C118.734,1781.267,118.72,1781.266,118.705,1781.267Zm5.316.515a2.16,2.16,0,0,1-.288.056.968.968,0,0,0-.188.042.208.208,0,0,0-.079.056.173.173,0,0,0-.041.077.2.2,0,0,0,0,.032s0,0,0,0,0,.007,0,.009a.113.113,0,0,0,0,.015l0,.006a.087.087,0,0,0,0,.009l.006.009.009.012a.185.185,0,0,0,.138.038.465.465,0,0,0,.212-.047.409.409,0,0,0,.156-.135A.545.545,0,0,0,124.021,1781.782Zm-17.969-2.359,7.9-8.152h1.289l-1.906,8.152H112.27l.541-2.347H109.5l-2.249,2.347h-1.2m4.254-3.186h2.707l.5-2.047q.3-1.217.582-2.029-.559.7-1.479,1.662l-2.309,2.413",
                transform: "translate(-103.684 -1768.875)",
                className: "minioApplicationName",
              }),
              a.createElement("path", {
                d: "M627.829,1776.9a3.183,3.183,0,0,1-2.4-1.149,2.464,2.464,0,0,1-.241-.411c-.045-.107-.084-.207-.123-.307l.439-.17c.038.1.075.193.114.287a2,2,0,0,0,.19.323,2.685,2.685,0,0,0,2.04.958h1.032a9.027,9.027,0,0,0,1-.141,12.945,12.945,0,0,0,1.935-.55c.524-.191,1.054-.415,1.575-.666a22.265,22.265,0,0,0,3.559-2.154c.377-.278.756-.574,1.124-.881q.494-.411.947-.834a9.057,9.057,0,0,0,1.807-2.317c.348-.7.407-1.259.167-1.576a.989.989,0,0,0-.749-.326l-.622-.048.5-.375c1.786-1.34,2.8-2.927,2.457-3.858a1,1,0,0,0-.638-.59,2.032,2.032,0,0,0-.516-.106h-.549a8.415,8.415,0,0,0-2.824.8l-.207-.423a8.932,8.932,0,0,1,3.014-.845h.585a2.509,2.509,0,0,1,.656.133,1.455,1.455,0,0,1,.921.871c.387,1.063-.5,2.665-2.216,4.081a1.2,1.2,0,0,1,.564.4,1.959,1.959,0,0,1-.121,2.07,9.408,9.408,0,0,1-1.9,2.449q-.466.435-.97.854c-.376.313-.761.615-1.146.9a22.77,22.77,0,0,1-3.635,2.2c-.535.257-1.079.487-1.617.683a13.4,13.4,0,0,1-2.006.569,9.406,9.406,0,0,1-1.07.148Z",
                transform: "translate(-596.283 -1761.542)",
                className: "minioApplicationName",
              })
            )
          )
        ),
        a.createElement("path", {
          d: "M.969,0V-8h.969V-.859H5.656V0ZM9.225-8V0H8.256V-8ZM18.7-5.5h-.969a2.034,2.034,0,0,0-.3-.734,2.072,2.072,0,0,0-.516-.533,2.24,2.24,0,0,0-.67-.326,2.668,2.668,0,0,0-.766-.109,2.431,2.431,0,0,0-1.314.367,2.536,2.536,0,0,0-.934,1.082A4.007,4.007,0,0,0,12.887-4a4.007,4.007,0,0,0,.346,1.754,2.536,2.536,0,0,0,.934,1.082A2.431,2.431,0,0,0,15.481-.8a2.668,2.668,0,0,0,.766-.109,2.24,2.24,0,0,0,.67-.326,2.06,2.06,0,0,0,.516-.535,2.053,2.053,0,0,0,.3-.732H18.7a3.227,3.227,0,0,1-.4,1.1,2.973,2.973,0,0,1-.719.822,3.129,3.129,0,0,1-.963.514,3.614,3.614,0,0,1-1.139.176,3.353,3.353,0,0,1-1.82-.5,3.431,3.431,0,0,1-1.254-1.422A4.874,4.874,0,0,1,11.95-4a4.874,4.874,0,0,1,.457-2.187,3.431,3.431,0,0,1,1.254-1.422,3.353,3.353,0,0,1,1.82-.5,3.614,3.614,0,0,1,1.139.176,3.129,3.129,0,0,1,.963.514,2.984,2.984,0,0,1,.719.82A3.208,3.208,0,0,1,18.7-5.5ZM21.362,0V-8h4.828v.859H22.331v2.7h3.609v.859H22.331V-.859h3.922V0ZM35.384-8V0h-.937L30.087-6.281h-.078V0h-.969V-8h.938l4.375,6.3h.078V-8ZM42.8-6a1.226,1.226,0,0,0-.57-.922A2.188,2.188,0,0,0,41-7.25a2.317,2.317,0,0,0-.928.172,1.468,1.468,0,0,0-.617.473,1.126,1.126,0,0,0-.221.684.957.957,0,0,0,.154.549,1.3,1.3,0,0,0,.4.379,2.686,2.686,0,0,0,.508.246q.266.1.488.154l.813.219a7.221,7.221,0,0,1,.7.227,3.309,3.309,0,0,1,.738.393,2.04,2.04,0,0,1,.584.635,1.824,1.824,0,0,1,.23.949A2.115,2.115,0,0,1,43.506-1a2.329,2.329,0,0,1-.984.832,3.618,3.618,0,0,1-1.568.309,3.653,3.653,0,0,1-1.486-.277,2.355,2.355,0,0,1-.984-.773,2.2,2.2,0,0,1-.4-1.152h1a1.236,1.236,0,0,0,.307.748,1.608,1.608,0,0,0,.68.438,2.7,2.7,0,0,0,.889.143,2.6,2.6,0,0,0,1-.182,1.687,1.687,0,0,0,.7-.508,1.2,1.2,0,0,0,.258-.764.938.938,0,0,0-.223-.648,1.634,1.634,0,0,0-.586-.406,6.157,6.157,0,0,0-.785-.273L40.328-3.8a3.666,3.666,0,0,1-1.484-.77A1.69,1.69,0,0,1,38.3-5.875a1.942,1.942,0,0,1,.365-1.174,2.417,2.417,0,0,1,.984-.781,3.331,3.331,0,0,1,1.385-.279,3.269,3.269,0,0,1,1.375.275,2.409,2.409,0,0,1,.955.752A1.875,1.875,0,0,1,43.734-6Zm3.741,6V-8h4.828v.859H47.506v2.7h3.609v.859H47.506V-.859h3.922V0Z",
          transform: "translate(164 68)",
          className: "minioApplicationName",
        })
      )
    );
  },
  pt = function (e) {
    var t = e.inverse;
    return a.createElement(
      ht,
      { viewBox: "0 0 184.45 50.008", inverse: t },
      a.createElement(
        "g",
        { transform: "translate(-31.65 -18.133)" },
        a.createElement(
          "g",
          { transform: "translate(-995 -63.754)" },
          a.createElement(
            "g",
            { transform: "translate(1025.5 81.887)" },
            a.createElement(
              "g",
              { transform: "translate(0 0)" },
              a.createElement(
                "g",
                { transform: "translate(0 0)" },
                a.createElement("path", {
                  d: "M10.338-17.825A8.815,8.815,0,0,0,1.15-8.75,8.815,8.815,0,0,0,10.338.325a8.825,8.825,0,0,0,9.2-9.075A8.825,8.825,0,0,0,10.338-17.825Zm0,3.35a5.4,5.4,0,0,1,5.55,5.725,5.4,5.4,0,0,1-5.55,5.725A5.41,5.41,0,0,1,4.788-8.75,5.41,5.41,0,0,1,10.338-14.475ZM22.05-17.5V0h7.575c4.2,0,6.588-1.65,6.588-5.013A4.2,4.2,0,0,0,33.3-8.938a3.9,3.9,0,0,0,2.537-3.713c0-3.337-2.562-4.85-6.638-4.85Zm7.4,10.225c1.925,0,3.138.45,3.138,2.088,0,1.675-1.212,2.125-3.138,2.125l-3.913-.013v-4.2Zm-.35-7.15c1.725,0,3.1.375,3.1,2.025,0,1.7-1.35,2.063-3.087,2.063H25.538v-4.088ZM48.788-17.5H45.3V-6.7c0,2.525-1.1,3.675-2.95,3.675a4.214,4.214,0,0,1-3.4-1.625L36.925-2.113A6.9,6.9,0,0,0,42.513.313c3.65,0,6.275-2.3,6.275-6.688ZM65.113-3.2H55.525V-7.225h9.05v-3.2h-9.05V-14.3h9.487v-3.2H52.037V0H65.113ZM76.3-17.825A8.794,8.794,0,0,0,67.113-8.75,8.794,8.794,0,0,0,76.3.325a8.713,8.713,0,0,0,7.387-3.7l-2.85-2.05a5.355,5.355,0,0,1-4.562,2.4A5.4,5.4,0,0,1,70.75-8.75a5.411,5.411,0,0,1,5.525-5.725A5.237,5.237,0,0,1,80.8-12.063l3-1.838A8.5,8.5,0,0,0,76.3-17.825Zm22.9.325H84.863v3.262h5.425V0h3.487V-14.238H99.2Zm19.787,1.738a10.5,10.5,0,0,0-6.25-1.925c-3.6,0-6.475,1.812-6.475,5.037,0,2.688,1.938,4.125,5.138,4.488l1.987.225c2.913.325,4.438,1.25,4.438,3.15,0,2.363-2.337,3.525-5.3,3.525a10.115,10.115,0,0,1-5.925-1.95L105.762-2A11.524,11.524,0,0,0,112.537.188c3.775,0,6.875-1.7,6.875-5.1,0-2.913-2.262-4.138-5.375-4.488l-1.912-.212c-2.988-.338-4.275-1.4-4.275-3.138,0-2.187,2.063-3.488,4.875-3.488a9.323,9.323,0,0,1,5.475,1.713ZM135.025-17.5H120.888v1.45h6.3V0h1.525V-16.05h6.313Zm9.875-.2a8.672,8.672,0,0,0-8.963,8.95A8.672,8.672,0,0,0,144.9.2a8.672,8.672,0,0,0,8.962-8.95A8.672,8.672,0,0,0,144.9-17.7Zm0,1.475a7.174,7.174,0,0,1,7.363,7.475A7.174,7.174,0,0,1,144.9-1.275a7.177,7.177,0,0,1-7.375-7.475A7.177,7.177,0,0,1,144.9-16.225ZM157.413-17.5V0h1.525V-7.763h2.675L168.138,0h1.9l-6.625-7.763h.688c3.725,0,6.025-1.862,6.025-4.875,0-3.1-2.175-4.863-6.037-4.863Zm6.663,1.438c2.875,0,4.475,1.188,4.475,3.425s-1.575,3.488-4.475,3.488h-5.138v-6.913ZM185.6-1.438H175.075V-8.1h10.138V-9.525H175.075v-6.538h10.438V-17.5H173.55V0H185.6Z",
                  transform: "translate(0 32.612)",
                  className: "minioApplicationName",
                }),
                a.createElement(
                  "g",
                  { transform: "translate(2.003)" },
                  a.createElement(
                    "g",
                    { transform: "translate(0 0.129)" },
                    a.createElement("rect", {
                      width: "2.49",
                      height: "7.352",
                      transform: "translate(14.42)",
                      className: "minioSection",
                    }),
                    a.createElement("path", {
                      d: "M237.8,365.332l-5.053,3.086a.226.226,0,0,1-.235,0l-5.053-3.086a.694.694,0,0,0-.362-.1H227.1a.693.693,0,0,0-.693.693v6.65h2.489v-3.165a.249.249,0,0,1,.379-.212l2.832,1.733a.886.886,0,0,0,.912.009L236,369.184a.249.249,0,0,1,.374.215v3.174h2.488v-6.65a.693.693,0,0,0-.692-.693h-.006A.694.694,0,0,0,237.8,365.332Z",
                      transform: "translate(-226.403 -365.23)",
                      className: "minioSection",
                    }),
                    a.createElement("path", {
                      d: "M257.822,365.23H255.3v3.346a.249.249,0,0,1-.366.22l-6.543-3.485a.7.7,0,0,0-.326-.081h0a.693.693,0,0,0-.693.693v6.651h2.5v-3.343a.249.249,0,0,1,.365-.22L256.8,372.5a.692.692,0,0,0,.325.081h0a.693.693,0,0,0,.693-.693Z",
                      transform: "translate(-228.498 -365.23)",
                      className: "minioSection",
                    })
                  ),
                  a.createElement("path", {
                    d: "M261.159,372.582V365.23H262.3v7.352Z",
                    transform: "translate(-229.877 -365.101)",
                    className: "minioSection",
                  }),
                  a.createElement("path", {
                    d: "M269.337,372.7c-3.082,0-5.268-1.462-5.268-3.805s2.2-3.806,5.268-3.806,5.281,1.462,5.281,3.806S272.458,372.7,269.337,372.7Zm0-6.637c-2.292,0-4.056,1-4.056,2.832s1.765,2.831,4.056,2.831,4.07-.988,4.07-2.831S271.628,366.062,269.337,366.062Z",
                    transform: "translate(-230.168 -365.087)",
                    className: "minioSection",
                  })
                )
              )
            )
          )
        ),
        a.createElement("path", {
          d: "M.969,0V-8H5.8v.859H1.938v2.7H5.547v.859H1.938V-.859H5.859V0ZM14.991-8V0h-.937L9.694-6.281H9.616V0H8.647V-8h.938l4.375,6.3h.078V-8Zm2.6.859V-8h6v.859H21.075V0h-.969V-7.141ZM26.191,0V-8h4.828v.859H27.159v2.7h3.609v.859H27.159V-.859h3.922V0Zm7.678,0V-8h2.7a3.277,3.277,0,0,1,1.539.318A2.054,2.054,0,0,1,39-6.809a2.69,2.69,0,0,1,.289,1.262A2.643,2.643,0,0,1,39-4.293a2.026,2.026,0,0,1-.887.857,3.3,3.3,0,0,1-1.527.311H34.4V-4h2.156a2.415,2.415,0,0,0,1.033-.187,1.194,1.194,0,0,0,.57-.533,1.787,1.787,0,0,0,.178-.826,1.856,1.856,0,0,0-.18-.84,1.235,1.235,0,0,0-.574-.557,2.345,2.345,0,0,0-1.043-.2h-1.7V0Zm3.766-3.594L39.6,0H38.478L36.541-3.594ZM42,0V-8h2.7a3.116,3.116,0,0,1,1.541.338,2.141,2.141,0,0,1,.889.912,2.809,2.809,0,0,1,.289,1.281,2.849,2.849,0,0,1-.287,1.285,2.149,2.149,0,0,1-.885.92,3.057,3.057,0,0,1-1.531.342H42.781v-.859h1.906A2.084,2.084,0,0,0,45.723-4a1.337,1.337,0,0,0,.568-.6,2.013,2.013,0,0,0,.178-.861,2,2,0,0,0-.178-.859,1.3,1.3,0,0,0-.572-.6,2.173,2.173,0,0,0-1.047-.217h-1.7V0Zm8.084,0V-8h2.7a3.277,3.277,0,0,1,1.539.318,2.054,2.054,0,0,1,.891.873,2.69,2.69,0,0,1,.289,1.262,2.643,2.643,0,0,1-.289,1.254,2.026,2.026,0,0,1-.887.857,3.3,3.3,0,0,1-1.527.311H50.616V-4h2.156a2.415,2.415,0,0,0,1.033-.187,1.194,1.194,0,0,0,.57-.533,1.787,1.787,0,0,0,.178-.826,1.856,1.856,0,0,0-.18-.84,1.235,1.235,0,0,0-.574-.557,2.345,2.345,0,0,0-1.043-.2h-1.7V0ZM53.85-3.594,55.819,0H54.694L52.756-3.594ZM59.184-8V0h-.969V-8ZM66.6-6a1.226,1.226,0,0,0-.57-.922A2.188,2.188,0,0,0,64.8-7.25a2.318,2.318,0,0,0-.928.172,1.468,1.468,0,0,0-.617.473,1.126,1.126,0,0,0-.221.684.957.957,0,0,0,.154.549,1.3,1.3,0,0,0,.4.379,2.686,2.686,0,0,0,.508.246q.266.1.488.154l.813.219a7.22,7.22,0,0,1,.7.227,3.308,3.308,0,0,1,.738.393,2.04,2.04,0,0,1,.584.635,1.824,1.824,0,0,1,.23.949A2.115,2.115,0,0,1,67.306-1a2.329,2.329,0,0,1-.984.832,3.618,3.618,0,0,1-1.568.309,3.653,3.653,0,0,1-1.486-.277,2.355,2.355,0,0,1-.984-.773,2.2,2.2,0,0,1-.4-1.152h1a1.236,1.236,0,0,0,.307.748,1.608,1.608,0,0,0,.68.438,2.7,2.7,0,0,0,.889.143,2.6,2.6,0,0,0,1-.182,1.687,1.687,0,0,0,.7-.508,1.2,1.2,0,0,0,.258-.764.938.938,0,0,0-.223-.648,1.634,1.634,0,0,0-.586-.406,6.157,6.157,0,0,0-.785-.273L64.128-3.8a3.666,3.666,0,0,1-1.484-.77A1.69,1.69,0,0,1,62.1-5.875a1.942,1.942,0,0,1,.365-1.174,2.417,2.417,0,0,1,.984-.781,3.331,3.331,0,0,1,1.385-.279,3.269,3.269,0,0,1,1.375.275,2.409,2.409,0,0,1,.955.752A1.875,1.875,0,0,1,67.534-6Zm3.741,6V-8h4.828v.859H71.306v2.7h3.609v.859H71.306V-.859h3.922V0ZM82.209,0V-8h.969V-.859H86.9V0Zm8.256-8V0H89.5V-8Zm9.475,2.5h-.969a2.034,2.034,0,0,0-.3-.734,2.072,2.072,0,0,0-.516-.533,2.24,2.24,0,0,0-.67-.326,2.668,2.668,0,0,0-.766-.109,2.431,2.431,0,0,0-1.314.367,2.536,2.536,0,0,0-.934,1.082A4.007,4.007,0,0,0,94.128-4a4.007,4.007,0,0,0,.346,1.754,2.536,2.536,0,0,0,.934,1.082A2.431,2.431,0,0,0,96.722-.8a2.668,2.668,0,0,0,.766-.109,2.24,2.24,0,0,0,.67-.326,2.06,2.06,0,0,0,.516-.535,2.053,2.053,0,0,0,.3-.732h.969a3.227,3.227,0,0,1-.4,1.1,2.973,2.973,0,0,1-.719.822,3.129,3.129,0,0,1-.963.514,3.614,3.614,0,0,1-1.139.176,3.353,3.353,0,0,1-1.82-.5,3.431,3.431,0,0,1-1.254-1.422A4.874,4.874,0,0,1,93.191-4a4.874,4.874,0,0,1,.457-2.187A3.431,3.431,0,0,1,94.9-7.609a3.353,3.353,0,0,1,1.82-.5,3.614,3.614,0,0,1,1.139.176,3.129,3.129,0,0,1,.963.514,2.984,2.984,0,0,1,.719.82A3.208,3.208,0,0,1,99.941-5.5ZM102.6,0V-8h4.828v.859h-3.859v2.7h3.609v.859h-3.609V-.859h3.922V0Zm14.022-8V0h-.937l-4.359-6.281h-.078V0h-.969V-8h.938l4.375,6.3h.078V-8Zm7.412,2a1.226,1.226,0,0,0-.57-.922,2.188,2.188,0,0,0-1.227-.328,2.317,2.317,0,0,0-.928.172,1.468,1.468,0,0,0-.617.473,1.126,1.126,0,0,0-.221.684.957.957,0,0,0,.154.549,1.3,1.3,0,0,0,.4.379,2.686,2.686,0,0,0,.508.246q.266.1.488.154l.813.219a7.22,7.22,0,0,1,.7.227,3.309,3.309,0,0,1,.738.393,2.04,2.04,0,0,1,.584.635,1.824,1.824,0,0,1,.23.949A2.115,2.115,0,0,1,124.746-1a2.329,2.329,0,0,1-.984.832,3.618,3.618,0,0,1-1.568.309,3.653,3.653,0,0,1-1.486-.277,2.355,2.355,0,0,1-.984-.773,2.2,2.2,0,0,1-.4-1.152h1a1.236,1.236,0,0,0,.307.748,1.608,1.608,0,0,0,.68.438,2.7,2.7,0,0,0,.889.143,2.6,2.6,0,0,0,1-.182,1.687,1.687,0,0,0,.7-.508,1.2,1.2,0,0,0,.258-.764.938.938,0,0,0-.223-.648,1.634,1.634,0,0,0-.586-.406,6.157,6.157,0,0,0-.785-.273l-.984-.281a3.666,3.666,0,0,1-1.484-.77,1.69,1.69,0,0,1-.547-1.309,1.942,1.942,0,0,1,.365-1.174,2.417,2.417,0,0,1,.984-.781,3.331,3.331,0,0,1,1.385-.279,3.269,3.269,0,0,1,1.375.275,2.409,2.409,0,0,1,.955.752A1.875,1.875,0,0,1,124.975-6Zm3.741,6V-8h4.828v.859h-3.859v2.7h3.609v.859h-3.609V-.859h3.922V0Z",
          transform: "translate(83 68)",
          className: "minioApplicationName",
        })
      )
    );
  },
  vt = function (e) {
    var t = e.inverse;
    return a.createElement(
      ht,
      { viewBox: "0 0 154.498 50.008", inverse: t },
      a.createElement(
        "g",
        { transform: "translate(27.666 -11)" },
        a.createElement(
          "g",
          { transform: "translate(-29 11)" },
          a.createElement(
            "g",
            { transform: "translate(0 0)" },
            a.createElement("path", {
              d: "M11.992-20.677A10.225,10.225,0,0,0,1.334-10.15,10.225,10.225,0,0,0,11.992.377,10.237,10.237,0,0,0,22.664-10.15,10.237,10.237,0,0,0,11.992-20.677Zm0,3.886A6.268,6.268,0,0,1,18.43-10.15a6.268,6.268,0,0,1-6.438,6.641A6.276,6.276,0,0,1,5.554-10.15,6.276,6.276,0,0,1,11.992-16.791ZM33.887-7.424c4.814,0,7.4-2.523,7.4-6.424,0-3.929-2.581-6.453-7.424-6.453h-8.28V0h4.046V-7.424Zm-.1-9.15c2.2,0,3.35.914,3.35,2.726s-1.146,2.726-3.35,2.726H29.624v-5.452ZM59.174-3.712H48.053V-8.381h10.5v-3.712h-10.5v-4.5H59.059V-20.3H44.007V0H59.174ZM62.6-20.3V0h4.045V-8.077h1.189L73.747,0h4.9L72.4-8.135c3.9-.377,6.221-2.654,6.221-5.989,0-3.886-2.6-6.177-7.438-6.177Zm8.512,3.726c2.146,0,3.35.769,3.35,2.451,0,1.711-1.146,2.523-3.35,2.523H66.642v-4.974ZM92.278-20.3h-4.93L79.445,0h4.22l1.769-4.727H94.09L95.86,0h4.321Zm-2.508,4L92.7-8.454H86.826Zm25.288-4H98.426v3.785h6.293V0h4.045V-16.516h6.293Zm11.136-.377A10.225,10.225,0,0,0,115.536-10.15,10.225,10.225,0,0,0,126.194.377,10.237,10.237,0,0,0,136.866-10.15,10.237,10.237,0,0,0,126.194-20.677Zm0,3.886a6.268,6.268,0,0,1,6.438,6.641,6.268,6.268,0,0,1-6.438,6.641,6.276,6.276,0,0,1-6.438-6.641A6.276,6.276,0,0,1,126.194-16.791ZM139.78-20.3V0h4.046V-8.077h1.189L150.931,0h4.9l-6.25-8.135c3.9-.377,6.221-2.654,6.221-5.989,0-3.886-2.6-6.177-7.439-6.177Zm8.512,3.726c2.146,0,3.35.769,3.35,2.451,0,1.711-1.146,2.523-3.35,2.523h-4.466v-4.974Z",
              transform: "translate(0 37.951)",
              className: "minioApplicationName",
            }),
            a.createElement(
              "g",
              { transform: "translate(2.356 0)" },
              a.createElement(
                "g",
                { transform: "translate(0 0.151)" },
                a.createElement("rect", {
                  width: "2.928",
                  height: "8.645",
                  transform: "translate(16.956)",
                  className: "minioSection",
                }),
                a.createElement("path", {
                  d: "M239.81,365.349l-5.942,3.629a.265.265,0,0,1-.276,0l-5.942-3.629a.816.816,0,0,0-.425-.119h-.007a.815.815,0,0,0-.815.815v7.82h2.926v-3.722a.293.293,0,0,1,.446-.25l3.33,2.037a1.042,1.042,0,0,0,1.072.011l3.515-2.062a.293.293,0,0,1,.44.253v3.733h2.925v-7.82a.814.814,0,0,0-.814-.815h-.007A.816.816,0,0,0,239.81,365.349Z",
                  transform: "translate(-226.403 -365.23)",
                  className: "minioSection",
                }),
                a.createElement("path", {
                  d: "M259.662,365.23h-2.969v3.935a.293.293,0,0,1-.431.258l-7.694-4.1a.818.818,0,0,0-.383-.1h-.005a.815.815,0,0,0-.815.815v7.821h2.945v-3.931a.293.293,0,0,1,.43-.258l7.725,4.1a.814.814,0,0,0,.382.1h0a.815.815,0,0,0,.815-.815Z",
                  transform: "translate(-225.18 -365.23)",
                  className: "minioSection",
                })
              ),
              a.createElement("path", {
                d: "M261.159,373.875V365.23h1.347v8.646Z",
                transform: "translate(-224.375 -365.079)",
                className: "minioSection",
              }),
              a.createElement("path", {
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
  ft = function (e) {
    var t = e.inverse;
    return a.createElement(
      ht,
      { viewBox: "0 0 184.538 50.008", inverse: t },
      a.createElement(
        "g",
        { transform: "translate(26.456 -11)" },
        a.createElement(
          "g",
          { transform: "translate(-29 11)" },
          a.createElement(
            "g",
            { transform: "translate(0 0)" },
            a.createElement("path", {
              d: "M2.544-22.4V0h9.232c7.008,0,11.632-4.448,11.632-11.2S18.784-22.4,11.776-22.4Zm9.184,4.176c4.72,0,7.008,2.912,7.008,7.024,0,4.064-2.288,7.024-7.008,7.024H7.008V-18.224ZM31.088-22.4H26.624V0h4.464Zm4.288,0V0H39.84V-8.912h1.312L47.68,0h5.408l-6.9-8.976c4.3-.416,6.864-2.928,6.864-6.608,0-4.288-2.864-6.816-8.208-6.816Zm9.392,4.112c2.368,0,3.7.848,3.7,2.7,0,1.888-1.264,2.784-3.7,2.784H39.84v-5.488ZM73.072-4.1H60.8V-9.248H72.384v-4.1H60.8V-18.3H72.944v-4.1H56.336V0H73.072Zm14.32-18.72c-6.9,0-11.76,4.88-11.76,11.616S80.5.416,87.392.416A11.153,11.153,0,0,0,96.848-4.32L93.2-6.944a6.855,6.855,0,0,1-5.84,3.072c-3.952,0-7.056-2.832-7.072-7.328,0-4.352,3.008-7.328,7.072-7.328a6.7,6.7,0,0,1,5.792,3.088l3.84-2.352A10.88,10.88,0,0,0,87.392-22.816ZM116.7-22.4H98.352v4.176H105.3V0h4.464V-18.224H116.7ZM128.08-9.12c4.944,0,7.92-2.448,7.92-6.64s-2.976-6.64-7.92-6.64h-8.32V0h1.952V-9.12Zm-.048-11.44c3.744,0,5.936,1.632,5.936,4.8s-2.192,4.784-5.936,4.784h-6.32V-20.56Zm30.4-1.84h-2.016l-8.4,20.464L139.632-22.4h-2.08L146.784,0H149.2Z",
              transform: "translate(0 42.065)",
              className: "minioApplicationName",
            }),
            a.createElement(
              "g",
              { transform: "translate(2.649 0)" },
              a.createElement(
                "g",
                { transform: "translate(0 0.17)" },
                a.createElement("rect", {
                  width: "3.292",
                  height: "9.721",
                  transform: "translate(19.066)",
                  className: "minioSection",
                }),
                a.createElement("path", {
                  d: "M241.479,365.364l-6.681,4.081a.3.3,0,0,1-.311,0l-6.681-4.081a.917.917,0,0,0-.478-.134h-.008a.917.917,0,0,0-.916.916v8.793h3.29v-4.185a.329.329,0,0,1,.5-.281l3.744,2.291a1.172,1.172,0,0,0,1.206.012l3.952-2.318a.329.329,0,0,1,.5.284v4.2h3.289v-8.793a.916.916,0,0,0-.915-.916h-.008A.917.917,0,0,0,241.479,365.364Z",
                  transform: "translate(-226.403 -365.23)",
                  className: "minioSection",
                }),
                a.createElement("path", {
                  d: "M261.192,365.23h-3.338v4.425a.329.329,0,0,1-.484.29l-8.652-4.608a.919.919,0,0,0-.431-.107h-.006a.917.917,0,0,0-.916.916v8.795h3.312v-4.42a.329.329,0,0,1,.483-.29l8.686,4.607a.916.916,0,0,0,.43.107h0a.917.917,0,0,0,.916-.916Z",
                  transform: "translate(-222.419 -365.23)",
                  className: "minioSection",
                })
              ),
              a.createElement("path", {
                d: "M261.159,374.952V365.23h1.515v9.722Z",
                transform: "translate(-219.797 -365.06)",
                className: "minioSection",
              }),
              a.createElement("path", {
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
  Et = function (e) {
    var t = e.inverse;
    return a.createElement(
      ht,
      { viewBox: "0 0 184.538 50.008", inverse: t },
      a.createElement(
        "g",
        { transform: "translate(26.059 -11)" },
        a.createElement(
          "g",
          { transform: "translate(-29 11)" },
          a.createElement(
            "g",
            { transform: "translate(0 0)" },
            a.createElement("path", {
              d: "M19.7,0h6.7L14.726-13.265,25.586-25.9H19.111l-8.566,10.49H8.1V-25.9H2.942V0H8.1V-10.656H10.49ZM47.712-4.736H33.522v-5.957H46.916v-4.736H33.522v-5.735H47.564V-25.9h-19.2V0H47.712ZM72.039-23.588a18.223,18.223,0,0,0-9.9-2.757c-5.513,0-10.323,2.812-10.323,8.214,0,4.681,3.33,6.7,7.9,7.419l1.646.259c3.607.574,5.495,1.24,5.495,3.034,0,2-2.22,3.127-5.088,3.127a13.674,13.674,0,0,1-8.251-2.794L50.838-2.923C53.613-.685,57.831.463,61.753.463c5.568,0,10.6-2.72,10.6-8.436,0-4.514-3.626-6.494-8.251-7.252l-1.462-.241c-3.108-.518-5.347-1.092-5.347-3,0-1.961,2.054-3.108,4.958-3.108a13.919,13.919,0,0,1,7.345,2.2Z",
              transform: "translate(0 49.495)",
              className: "minioApplicationName",
            }),
            a.createElement(
              "g",
              { transform: "translate(3.025 0)" },
              a.createElement(
                "g",
                { transform: "translate(0 0.194)" },
                a.createElement("rect", {
                  width: "3.76",
                  height: "11.103",
                  transform: "translate(21.776)",
                  className: "minioSection",
                }),
                a.createElement("path", {
                  d: "M243.621,365.383l-7.631,4.661a.34.34,0,0,1-.355,0l-7.631-4.661a1.048,1.048,0,0,0-.546-.153h-.009a1.047,1.047,0,0,0-1.047,1.046V376.32h3.758v-4.78a.376.376,0,0,1,.572-.321l4.276,2.616a1.338,1.338,0,0,0,1.377.014L240.9,371.2a.376.376,0,0,1,.565.325v4.794h3.757V366.276a1.046,1.046,0,0,0-1.045-1.046h-.01A1.047,1.047,0,0,0,243.621,365.383Z",
                  transform: "translate(-226.403 -365.23)",
                  className: "minioSection",
                }),
                a.createElement("path", {
                  d: "M263.158,365.23h-3.813v5.053a.376.376,0,0,1-.553.332l-9.881-5.263a1.051,1.051,0,0,0-.492-.122h-.007a1.047,1.047,0,0,0-1.047,1.046v10.045h3.783v-5.048a.376.376,0,0,1,.552-.332l9.921,5.262a1.046,1.046,0,0,0,.491.122h0a1.047,1.047,0,0,0,1.047-1.047Z",
                  transform: "translate(-218.873 -365.23)",
                  className: "minioSection",
                })
              ),
              a.createElement("path", {
                d: "M261.159,376.333v-11.1h1.73v11.1Z",
                transform: "translate(-213.918 -365.036)",
                className: "minioSection",
              }),
              a.createElement("path", {
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
  ut = function (e) {
    var t = e.inverse;
    return a.createElement(
      ht,
      { viewBox: "0 0 184.538 50.008", inverse: t },
      a.createElement(
        "g",
        { transform: "translate(27.622 -11)" },
        a.createElement(
          "g",
          { transform: "translate(-29 11)" },
          a.createElement(
            "g",
            { transform: "translate(0 0)" },
            a.createElement("path", {
              d: "M17.995-18.488a14.283,14.283,0,0,0-7.758-2.161c-4.321,0-8.091,2.2-8.091,6.438,0,3.668,2.61,5.249,6.192,5.814l1.29.2c2.828.45,4.307.972,4.307,2.378,0,1.566-1.74,2.451-3.988,2.451A10.718,10.718,0,0,1,3.48-5.554l-2.1,3.263A14.124,14.124,0,0,0,9.933.363c4.365,0,8.309-2.132,8.309-6.612,0-3.538-2.842-5.09-6.467-5.684l-1.146-.188c-2.436-.406-4.191-.856-4.191-2.349,0-1.537,1.609-2.436,3.886-2.436a10.91,10.91,0,0,1,5.757,1.726ZM38.353-20.3h-4.06V-8.309c0,3.335-1.885,4.8-4.684,4.8s-4.684-1.465-4.684-4.8V-20.3h-4.06V-8.106c0,5.612,3.582,8.468,8.744,8.468s8.743-2.857,8.743-8.468Zm3.654,0V0h8.787c4.872,0,7.642-1.914,7.642-5.815a4.874,4.874,0,0,0-3.379-4.553A4.528,4.528,0,0,0,58-14.674c0-3.871-2.972-5.626-7.7-5.626ZM50.59-8.439c2.233,0,3.64.522,3.64,2.421,0,1.943-1.407,2.465-3.64,2.465l-4.538-.015V-8.439Zm-.406-8.294c2,0,3.6.435,3.6,2.349,0,1.972-1.566,2.393-3.582,2.393H46.052v-4.741ZM79.5-20.3h-4.06V-6.743L65.134-20.3H61.349V0h4.045l.015-13.558L75.7,0h3.8ZM98.557-3.712H87.435V-8.381h10.5v-3.712h-10.5v-4.5H98.441V-20.3H83.39V0H98.557ZM116.769-20.3H100.137v3.785h6.293V0h4.045V-16.516h6.293Z",
              transform: "translate(0 38.028)",
              className: "minioApplicationName",
            }),
            a.createElement(
              "g",
              { transform: "translate(2.376 0)" },
              a.createElement(
                "g",
                { transform: "translate(0 0.153)" },
                a.createElement("rect", {
                  width: "2.953",
                  height: "8.72",
                  transform: "translate(17.103)",
                  className: "minioSection",
                }),
                a.createElement("path", {
                  d: "M239.926,365.35l-5.993,3.661a.267.267,0,0,1-.279,0l-5.993-3.661a.823.823,0,0,0-.429-.12h-.007a.822.822,0,0,0-.822.822v7.888h2.952v-3.754a.3.3,0,0,1,.449-.252l3.358,2.055a1.051,1.051,0,0,0,1.081.011l3.545-2.08a.3.3,0,0,1,.444.255v3.765h2.951v-7.888a.821.821,0,0,0-.821-.822h-.007A.823.823,0,0,0,239.926,365.35Z",
                  transform: "translate(-226.403 -365.23)",
                  className: "minioSection",
                }),
                a.createElement("path", {
                  d: "M259.769,365.23h-2.994V369.2a.3.3,0,0,1-.434.26l-7.761-4.133a.825.825,0,0,0-.386-.1h-.005a.822.822,0,0,0-.822.822v7.889h2.971v-3.965a.3.3,0,0,1,.433-.26l7.792,4.132a.822.822,0,0,0,.385.1h0a.822.822,0,0,0,.822-.822Z",
                  transform: "translate(-224.988 -365.23)",
                  className: "minioSection",
                })
              ),
              a.createElement("path", {
                d: "M261.159,373.95v-8.72h1.359v8.72Z",
                transform: "translate(-224.056 -365.077)",
                className: "minioSection",
              }),
              a.createElement("path", {
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
  gt = function (e) {
    var t = e.inverse;
    return a.createElement(
      ht,
      { viewBox: "0 0 184.45 54.229", inverse: t },
      a.createElement(
        "g",
        { transform: "translate(-31.65 -18.133)" },
        a.createElement(
          "g",
          { transform: "translate(-995 -63.754)" },
          a.createElement(
            "g",
            { transform: "translate(1025.5 81.887)" },
            a.createElement(
              "g",
              { transform: "translate(0 0)" },
              a.createElement(
                "g",
                { transform: "translate(0 0)" },
                a.createElement("path", {
                  d: "M10.338-17.825A8.815,8.815,0,0,0,1.15-8.75,8.815,8.815,0,0,0,10.338.325a8.825,8.825,0,0,0,9.2-9.075A8.825,8.825,0,0,0,10.338-17.825Zm0,3.35a5.4,5.4,0,0,1,5.55,5.725,5.4,5.4,0,0,1-5.55,5.725A5.41,5.41,0,0,1,4.788-8.75,5.41,5.41,0,0,1,10.338-14.475ZM22.05-17.5V0h7.575c4.2,0,6.588-1.65,6.588-5.013A4.2,4.2,0,0,0,33.3-8.938a3.9,3.9,0,0,0,2.537-3.713c0-3.337-2.562-4.85-6.638-4.85Zm7.4,10.225c1.925,0,3.138.45,3.138,2.088,0,1.675-1.212,2.125-3.138,2.125l-3.913-.013v-4.2Zm-.35-7.15c1.725,0,3.1.375,3.1,2.025,0,1.7-1.35,2.063-3.087,2.063H25.538v-4.088ZM48.788-17.5H45.3V-6.7c0,2.525-1.1,3.675-2.95,3.675a4.214,4.214,0,0,1-3.4-1.625L36.925-2.113A6.9,6.9,0,0,0,42.513.313c3.65,0,6.275-2.3,6.275-6.688ZM65.113-3.2H55.525V-7.225h9.05v-3.2h-9.05V-14.3h9.487v-3.2H52.037V0H65.113ZM76.3-17.825A8.794,8.794,0,0,0,67.113-8.75,8.794,8.794,0,0,0,76.3.325a8.713,8.713,0,0,0,7.387-3.7l-2.85-2.05a5.355,5.355,0,0,1-4.562,2.4A5.4,5.4,0,0,1,70.75-8.75a5.411,5.411,0,0,1,5.525-5.725A5.237,5.237,0,0,1,80.8-12.063l3-1.838A8.5,8.5,0,0,0,76.3-17.825Zm22.9.325H84.863v3.262h5.425V0h3.487V-14.238H99.2Zm19.787,1.738a10.5,10.5,0,0,0-6.25-1.925c-3.6,0-6.475,1.812-6.475,5.037,0,2.688,1.938,4.125,5.138,4.488l1.987.225c2.913.325,4.438,1.25,4.438,3.15,0,2.363-2.337,3.525-5.3,3.525a10.115,10.115,0,0,1-5.925-1.95L105.762-2A11.524,11.524,0,0,0,112.537.188c3.775,0,6.875-1.7,6.875-5.1,0-2.913-2.262-4.138-5.375-4.488l-1.912-.212c-2.988-.338-4.275-1.4-4.275-3.138,0-2.187,2.063-3.488,4.875-3.488a9.323,9.323,0,0,1,5.475,1.713ZM135.025-17.5H120.888v1.45h6.3V0h1.525V-16.05h6.313Zm9.875-.2a8.672,8.672,0,0,0-8.963,8.95A8.672,8.672,0,0,0,144.9.2a8.672,8.672,0,0,0,8.962-8.95A8.672,8.672,0,0,0,144.9-17.7Zm0,1.475a7.174,7.174,0,0,1,7.363,7.475A7.174,7.174,0,0,1,144.9-1.275a7.177,7.177,0,0,1-7.375-7.475A7.177,7.177,0,0,1,144.9-16.225ZM157.413-17.5V0h1.525V-7.763h2.675L168.138,0h1.9l-6.625-7.763h.688c3.725,0,6.025-1.862,6.025-4.875,0-3.1-2.175-4.863-6.037-4.863Zm6.663,1.438c2.875,0,4.475,1.188,4.475,3.425s-1.575,3.488-4.475,3.488h-5.138v-6.913ZM185.6-1.438H175.075V-8.1h10.138V-9.525H175.075v-6.538h10.438V-17.5H173.55V0H185.6Z",
                  transform: "translate(0 32.612)",
                  className: "minioApplicationName",
                }),
                a.createElement(
                  "g",
                  { transform: "translate(2.003)" },
                  a.createElement(
                    "g",
                    { transform: "translate(0 0.129)" },
                    a.createElement("rect", {
                      width: "2.49",
                      height: "7.352",
                      transform: "translate(14.42)",
                      className: "minioSection",
                    }),
                    a.createElement("path", {
                      d: "M237.8,365.332l-5.053,3.086a.226.226,0,0,1-.235,0l-5.053-3.086a.694.694,0,0,0-.362-.1H227.1a.693.693,0,0,0-.693.693v6.65h2.489v-3.165a.249.249,0,0,1,.379-.212l2.832,1.733a.886.886,0,0,0,.912.009L236,369.184a.249.249,0,0,1,.374.215v3.174h2.488v-6.65a.693.693,0,0,0-.692-.693h-.006A.694.694,0,0,0,237.8,365.332Z",
                      transform: "translate(-226.403 -365.23)",
                      className: "minioSection",
                    }),
                    a.createElement("path", {
                      d: "M257.822,365.23H255.3v3.346a.249.249,0,0,1-.366.22l-6.543-3.485a.7.7,0,0,0-.326-.081h0a.693.693,0,0,0-.693.693v6.651h2.5v-3.343a.249.249,0,0,1,.365-.22L256.8,372.5a.692.692,0,0,0,.325.081h0a.693.693,0,0,0,.693-.693Z",
                      transform: "translate(-228.498 -365.23)",
                      className: "minioSection",
                    })
                  ),
                  a.createElement("path", {
                    d: "M261.159,372.582V365.23H262.3v7.352Z",
                    transform: "translate(-229.877 -365.101)",
                    className: "minioSection",
                  }),
                  a.createElement("path", {
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
  wt = function (e) {
    var t = e.applicationName,
      n = e.subVariant,
      l = void 0 === n ? "simple" : n,
      r = e.inverse;
    switch (t) {
      case "console":
        switch (l) {
          case "standard":
            return a.createElement(dt, { inverse: !!r });
          case "enterprise":
            return a.createElement(pt, { inverse: !!r });
          case "AGPL":
            return a.createElement(st, { inverse: !!r });
          default:
            return a.createElement(gt, { inverse: !!r });
        }
      case "directpv":
        return a.createElement(ft, { inverse: !!r });
      case "subnet":
        return a.createElement(ut, { inverse: !!r });
      case "kes":
        return a.createElement(Et, { inverse: !!r });
      case "operator":
        return a.createElement(vt, { inverse: !!r });
    }
  },
  Zt = n.svg(function (e) {
    return { fill: Fa(e, "theme.logoColor", "#C51C3F") };
  }),
  Mt = function (e) {
    var t = e.width;
    return a.createElement(
      Zt,
      { viewBox: "0 0 162.612 24.465", width: t },
      a.createElement("path", {
        d: "M52.751.414h9.108v23.63h-9.108zM41.711.74l-18.488 9.92a.919.919 0 0 1-.856 0L3.879.74A2.808 2.808 0 0 0 2.558.414h-.023A2.4 2.4 0 0 0 0 2.641v21.376h9.1V13.842a.918.918 0 0 1 1.385-.682l10.361 5.568a3.634 3.634 0 0 0 3.336.028l10.933-5.634a.917.917 0 0 1 1.371.69v10.205h9.1V2.641A2.4 2.4 0 0 0 43.055.414h-.023a2.808 2.808 0 0 0-1.321.326zm65.564-.326h-9.237v10.755a.913.913 0 0 1-1.338.706L72.762.675a2.824 2.824 0 0 0-1.191-.261h-.016a2.4 2.4 0 0 0-2.535 2.227v21.377h9.163V13.275a.914.914 0 0 1 1.337-.707l24.032 11.2a2.813 2.813 0 0 0 1.188.26 2.4 2.4 0 0 0 2.535-2.227zm7.161 23.63V.414h4.191v23.63zm28.856.421c-11.274 0-19.272-4.7-19.272-12.232C124.02 4.741 132.066 0 143.292 0s19.32 4.7 19.32 12.233-7.902 12.232-19.32 12.232zm0-21.333c-8.383 0-14.84 3.217-14.84 9.1 0 5.926 6.457 9.1 14.84 9.1s14.887-3.174 14.887-9.1c0-5.883-6.504-9.1-14.887-9.1z",
      })
    );
  },
  xt = { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 },
  _t = function (e) {
    if ("auto" === e || ("boolean" == typeof e && e)) return "100%";
    if (!1 === e) return "initial";
    var a = Math.floor(e);
    return (
      a > 12
        ? ((a = 12), console.warn("Grid fraction cannot be greater than 12"))
        : a < 1 &&
          ((a = 1), console.warn("Grid fraction cannot be smaller than 1")),
      "".concat((100 * a) / 12, "%")
    );
  },
  Ht = n.div(function (e) {
    var a = { boxSizing: "border-box" };
    if (e.container)
      a = {
        display: "flex",
        flexWrap: e.wrap || "wrap",
        flexDirection: e.direction || "row",
        columnGap: "".concat(e.columnSpacing, "px") || 0,
        rowGap: "".concat(e.rowSpacing, "px") || 0,
        boxSizing: "content-box",
      };
    else if (e.item) {
      var t = Object.keys(xt);
      t.forEach(function (n, l) {
        var r,
          c,
          m = Fa(e, n, !1);
        if (!!m) {
          var o = {};
          if (
            ("number" == typeof m &&
              (o = { flexBasis: _t(Fa(e, n, 12)), width: _t(Fa(e, n, 12)) }),
            "hidden" === m)
          ) {
            var i = "";
            t[l + 1] &&
              (i = "and (max-width:  ".concat(Fa(xt, t[l + 1], 0), "px)")),
              (a = T(
                T({}, a),
                (((r = {})[
                  "@media (min-width: ".concat(Fa(xt, n, 0), "px) ").concat(i)
                ] = { display: "none" }),
                r)
              ));
          }
          a = T(
            T({}, a),
            (((c = {})["@media (min-width: ".concat(Fa(xt, n, 0), "px)")] = T(
              { flexGrow: "1" },
              o
            )),
            c)
          );
        }
      });
    }
    return T(T({}, a), e.sx);
  }),
  zt = function (e) {
    return a.createElement(Ht, T({}, e), e.children);
  },
  Vt = require("../assets/video/videoBG.mp4"),
  At = require("../assets/background/loginAnimationPoster.png"),
  Ct = n.div(function (e) {
    var a,
      t = e.theme;
    return {
      "& .mainContainer": { height: "100vh" },
      "& .decorationPanel": {
        position: "relative",
        backgroundColor: Fa(t, "login.promoBG", "#000110"),
        "& .videoContainer": {
          width: "100%",
          height: "auto",
          minHeight: 200,
          position: "absolute",
          bottom: "0",
          right: 0,
          filter: Fa(t, "login.bgFilter", "none"),
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
            color: Fa(t, "login.promoHeader", "#fff"),
            fontSize: "46px",
            textAlign: "left",
            fontWeight: "900",
            lineHeight: "60px",
          },
          "& .promoInfo": {
            marginTop: "31px",
            maxWidth: "542px",
            color: Fa(t, "login.promoText", "#fff"),
            fontSize: "18px",
            textAlign: "left",
            fontWeight: "300",
            lineHeight: "30px",
            textShadow: "0 0 5ppx #000",
            "& a": {
              color: Fa(t, "login.promoText", "#fff"),
              textDecoration: "none",
              fontWeight: "bold",
              "&:hover": { textDecoration: "underline" },
            },
          },
        },
      },
      "& .formPanel":
        ((a = {
          maxWidth: "520px",
          backgroundColor: Fa(t, "login.formBG", "#fff"),
        }),
        (a[
          "@media (min-width: "
            .concat(Fa(xt, "xs", 0), "px) and (max-width: ")
            .concat(Fa(xt, "md", 0), "px)")
        ] = { maxWidth: "100%" }),
        (a["& .logoContainer"] = {
          display: "flex",
          height: "215px",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 3px 10px 2px #00000010",
          "& svg": { width: "325px" },
        }),
        (a["& .formContainer"] = {
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
              Fa(t, "login.footerDivider", "#f2f2f2"),
              " 1px solid"
            ),
            padding: "35px 0",
            textAlign: "center",
            alignItems: "flex-end",
            justifyContent: "center",
          },
          "& .footer, & .footer a": {
            color: Fa(t, "login.footerElements", "#000"),
            fontSize: "14px",
            textDecoration: "none",
          },
        }),
        a),
    };
  }),
  Lt = function (e) {
    var t = e.logoProps,
      n = e.form,
      l = e.formFooter,
      r = e.promoInfo,
      c = e.promoHeader;
    return a.createElement(
      Ct,
      null,
      a.createElement(
        zt,
        { container: !0, className: "mainContainer", wrap: "nowrap" },
        a.createElement(
          zt,
          {
            item: !0,
            xs: "hidden",
            sm: "hidden",
            md: !0,
            className: "decorationPanel",
          },
          (r || c) &&
            a.createElement(
              zt,
              { container: !0 },
              a.createElement(
                zt,
                { item: !0, className: "promoContainer" },
                a.createElement(zt, { item: !0, className: "promoHeader" }, c),
                a.createElement(zt, { item: !0, className: "promoInfo" }, r)
              )
            ),
          a.createElement(
            zt,
            { item: !0, className: "videoContainer" },
            a.createElement(
              "video",
              {
                autoPlay: !0,
                playsInline: !0,
                muted: !0,
                loop: !0,
                disablePictureInPicture: !0,
                poster: At,
                className: "videoBG",
              },
              a.createElement("source", { src: Vt, type: "video/mp4" })
            )
          )
        ),
        a.createElement(
          zt,
          { item: !0, xs: 12, className: "formPanel" },
          a.createElement(
            zt,
            { container: !0 },
            a.createElement(
              zt,
              { item: !0, xs: 12, className: "logoContainer" },
              a.createElement(wt, T({}, t))
            ),
            a.createElement(
              zt,
              { item: !0, xs: 12, className: "formContainer" },
              a.createElement(zt, { item: !0, xs: !0, className: "form" }, n),
              l &&
                a.createElement(
                  zt,
                  { item: !0, xs: !0, className: "footer" },
                  l
                )
            )
          )
        )
      )
    );
  },
  Tt = function (e) {
    return a.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 10.906 10.906",
        },
        e
      ),
      a.createElement("path", {
        id: "Trazado_7002",
        "data-name": "Trazado 7002",
        d: "M8.577,3a5.447,5.447,0,1,0,5.144,4.037,8.109,8.109,0,0,1-.951.783,6.211,6.211,0,0,1-2.174,1,2.252,2.252,0,0,1-2.143-.373,2.252,2.252,0,0,1-.373-2.143,6.234,6.234,0,0,1,1-2.174,8.085,8.085,0,0,1,.783-.951A5.483,5.483,0,0,0,8.577,3Zm2.961,8.536a4.343,4.343,0,0,0,1.228-2.42c-1.934,1.115-3.964,1.225-5.083.106s-1.009-3.149.106-5.083a4.362,4.362,0,1,0,3.75,7.4Z",
        transform: "translate(-3.001 -3.001)",
        fill: "#969fa8",
      })
    );
  },
  bt = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Trazado 467",
          d: "M235.995 77.198c.388-15.753.958-32.241-.5-47.941-1.094-11.756-6.192-21.735-17.831-25.916a42.81 42.81 0 0 0-5.016-1.447c-6.551-1.479-13.433-1.6-20.09-1.8-11.727-.343-23.449.364-35.176.313-23.494-.1-46.986.324-70.48.415q-4.226.015-8.455.017H36.241a17.26 17.26 0 0 0-17.24 17.241v220.678a17.26 17.26 0 0 0 17.24 17.241h182.541a17.26 17.26 0 0 0 17.241-17.241V128.816c-.001-17.183-.447-34.459-.028-51.618Zm-20.921 145.989a14.888 14.888 0 0 1-14.887 14.887H51.817a14.888 14.888 0 0 1-14.888-14.887V33.662a14.888 14.888 0 0 1 14.888-14.888h99.548v25.458a37.8 37.8 0 0 0 37.757 37.76h25.952Zm0-157.657h-25.952a21.321 21.321 0 0 1-21.3-21.3V18.772h32.358a14.889 14.889 0 0 1 14.888 14.887Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 468",
          d: "M167.462 106.737h-11.678V94.561a28.113 28.113 0 0 0-28.066-27.984h-.044a28.117 28.117 0 0 0-28.069 27.99v12.17H87.924a23.834 23.834 0 0 0-23.776 23.767v45.491a23.675 23.675 0 0 0 22.986 23.75l40.558 7.889 40.559-7.889a23.675 23.675 0 0 0 22.986-23.753V130.5a23.832 23.832 0 0 0-23.776-23.764Zm-52.872-12.17a13.109 13.109 0 0 1 13.091-13.042h.023a13.106 13.106 0 0 1 13.087 13.042v12.17h-26.2Zm61.656 81.424a8.831 8.831 0 0 1-8.788 8.821h-.725l-39.043 7.592-38.843-7.553-.4-.039h-.515a8.833 8.833 0 0 1-8.794-8.822V130.5a8.831 8.831 0 0 1 8.789-8.82h79.529a8.831 8.831 0 0 1 8.794 8.821Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 469",
          d: "M127.556 141.528a12.366 12.366 0 0 0-12.353 12.351 12.322 12.322 0 0 0 4.507 9.544v7.2a7.547 7.547 0 0 0 7.517 7.512h.659a7.547 7.547 0 0 0 7.511-7.517v-7.191a12.324 12.324 0 0 0 4.507-9.542 12.367 12.367 0 0 0-12.349-12.357Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 904",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  Pt = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Trazado 461",
          d: "M235.995 77.198c.386-15.753.957-32.242-.5-47.942-1.094-11.755-6.193-21.735-17.832-25.914a42.537 42.537 0 0 0-5.017-1.448c-6.549-1.479-13.432-1.6-20.09-1.8-11.726-.343-23.448.366-35.176.314-23.494-.1-46.985.324-70.479.415Q82.673.84 78.445.84H36.239a17.26 17.26 0 0 0-17.24 17.243v220.678a17.26 17.26 0 0 0 17.24 17.24h182.539a17.258 17.258 0 0 0 17.24-17.24V128.815c.002-17.183-.44-34.458-.023-51.617Zm-20.922 145.988a14.888 14.888 0 0 1-14.888 14.888H51.817a14.888 14.888 0 0 1-14.888-14.888V33.661a14.889 14.889 0 0 1 14.889-14.889h99.546v25.459a37.8 37.8 0 0 0 37.757 37.758h25.952Zm0-157.657h-25.952a21.32 21.32 0 0 1-21.294-21.3V18.771h32.359a14.889 14.889 0 0 1 14.889 14.889Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 462",
          d: "M192.898 109.951H62.537a8.455 8.455 0 0 0-8.455 8.455v99.762a8.456 8.456 0 0 0 8.456 8.457h130.36a8.456 8.456 0 0 0 8.455-8.455v-99.763a8.455 8.455 0 0 0-8.456-8.456ZM70.992 160.115h26.543v16.346H70.992Zm43.453 0h26.544v16.346h-26.544Zm43.454 0h26.544v16.346h-26.544Zm26.544-16.91h-26.544v-16.344h26.544Zm-43.454 0h-26.544v-16.344h26.544Zm-70-16.344h26.543v16.346H70.989Zm0 66.51h26.543v16.343H70.989Zm43.453 0h26.544v16.343h-26.544Zm70 16.343h-26.544v-16.343h26.544Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 911",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  Nt = function (e) {
    return a.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 16 16",
        },
        e
      ),
      a.createElement(
        "g",
        null,
        a.createElement("path", {
          id: "Trazado_7232",
          "data-name": "Trazado 7232",
          d: "M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0m3.235,5.4L8.965,8.174,10.949,10.6a.857.857,0,0,1-1.327,1.086h0L7.857,9.528,6.092,11.686A.857.857,0,0,1,4.765,10.6L6.749,8.174,4.479,5.4A.857.857,0,0,1,5.806,4.314L7.857,6.821l2.05-2.506A.857.857,0,1,1,11.235,5.4",
        })
      )
    );
  },
  Bt = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          viewBox: "0 0 256 256",
          fill: "currentcolor",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path" },
          e.createElement("rect", {
            id: "Rectángulo_1043",
            "data-name": "Rectángulo 1043",
            width: "255.479",
            height: "241.736",
            fill: "none",
          })
        ),
        e.createElement(
          "clipPath",
          { id: "clip-Format_Drives" },
          e.createElement("rect", { width: "256", height: "256" })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Format_Drives",
          "data-name": "Format Drives",
          clipPath: "url(#clip-Format_Drives)",
        },
        e.createElement("rect", { width: "256", height: "256", fill: "#fff" }),
        e.createElement(
          "g",
          { id: "Format_Drives_Icon", "data-name": "Format Drives Icon" },
          e.createElement(
            "g",
            {
              id: "Format_Drives_Icon-2",
              "data-name": "Format Drives Icon",
              transform: "translate(0 -3)",
            },
            e.createElement(
              "g",
              {
                id: "Grupo_2430",
                "data-name": "Grupo 2430",
                transform: "translate(0 10)",
              },
              e.createElement("path", {
                id: "Trazado_7192",
                "data-name": "Trazado 7192",
                d: "M0,256.464v65.03c0,9.7,41.2,28.6,116.725,28.6s116.722-18.726,116.722-28.6v-65.13c-26.62,13.381-71.916,20.19-116.722,20.19S26.621,269.674,0,256.464M40.1,318.11A17.441,17.441,0,1,1,45.765,294.1,17.442,17.442,0,0,1,40.1,318.11",
                transform: "translate(0 -108.359)",
              }),
              e.createElement("path", {
                id: "Trazado_7193",
                "data-name": "Trazado 7193",
                d: "M223.775,18.83C207.485,9.744,170.954,0,116.724,0,41.2,0,0,18.9,0,28.6S41.2,57.2,116.724,57.2l0,0a393.878,393.878,0,0,0,42.7-2.213,48.4,48.4,0,0,0,.4,20.494,428.272,428.272,0,0,1-43.1,2.145c-44.807,0-90.1-6.877-116.724-20.19v61.728c0,9.7,41.2,28.6,116.724,28.6s116.722-18.9,116.722-28.6V104.95a48.484,48.484,0,0,0-9.672-86.12M40.1,121.058a17.441,17.441,0,1,1,5.666-24.006A17.441,17.441,0,0,1,40.1,121.058m167.186-18.426a38.3,38.3,0,1,1,38.3-38.3,38.3,38.3,0,0,1-38.3,38.3",
                transform: "translate(0)",
              }),
              e.createElement("path", {
                id: "Trazado_7194",
                "data-name": "Trazado 7194",
                d: "M352.322,69.425,344.043,77.7l-.913-.912a9.594,9.594,0,0,0-13.553,0L316.939,89.432a.185.185,0,0,0-.014.017.823.823,0,0,0-.054.065h0a1.109,1.109,0,0,0-.091.125c-.006.009-.013.016-.018.025l-4.4,7.751a1.091,1.091,0,0,0,.177,1.309l2.98,2.979v0l0,0,3.79,3.79,0,0,0,0,3.79,3.79v0h0l3.789,3.789,0,0,0,0,3.79,3.79v0h0l3.79,3.79,0,0,0,0,2.981,2.98a1.09,1.09,0,0,0,1.719-.233l4.327-7.623,12.534-12.534a9.6,9.6,0,0,0,0-13.553l-.912-.913,8.279-8.28a7.844,7.844,0,0,0-11.093-11.093M338,121.1l-1.383-1.385,2.27-4a1.091,1.091,0,0,0-1.9-1.077l-1.973,3.477-2.193-2.193,2.27-4a1.09,1.09,0,0,0-1.9-1.076l-1.973,3.477-2.194-2.195,2.27-4a1.09,1.09,0,0,0-1.9-1.077l-1.973,3.477-2.193-2.193,2.27-4a1.09,1.09,0,0,0-1.9-1.076l-1.973,3.477-2.194-2.194,2.27-4a1.09,1.09,0,0,0-1.9-1.077l-1.973,3.477-2.194-2.194,2.271-4a1.091,1.091,0,0,0-1.9-1.077l-1.973,3.477-1.382-1.382,3.283-5.784,23.33,23.33Z",
                transform: "translate(-131.967 -28.375)",
              })
            )
          ),
          e.createElement("rect", {
            id: "Rectángulo_1044",
            "data-name": "Rectángulo 1044",
            width: "256",
            height: "256",
            fill: "none",
          })
        )
      )
    );
  },
  Rt = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          { "data-name": "SpeedTestIcon" },
          e.createElement("path", {
            "data-name": "Rect\\xE1ngulo 850",
            fill: "none",
            d: "M0 0h256v256H0z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 426",
            d: "m63.413 63.057-.1.084a5.326 5.326 0 0 0 3.505 9.344l-.011.063a5.319 5.319 0 0 0 3.516-1.371l.1-.084q.167-.135.322-.281a5.337 5.337 0 1 0-7.333-7.756Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 427",
            d: "M48.827 88.433a4.336 4.336 0 0 0-5.884 1.729v.095a4.336 4.336 0 0 0 3.817 6.344l-.011.01a4.361 4.361 0 0 0 2.078-8.178Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 428",
            d: "M127.29 52.816h.293a7.816 7.816 0 1 0-.046-15.631h-.247a7.816 7.816 0 0 0 0 15.631Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 429",
            d: "M37.263 119.721h-.028a2.958 2.958 0 0 0-3.324 2.541v.08a2.973 2.973 0 0 0 2.559 3.336 3.173 3.173 0 0 0 .379 0l-.021.007a2.972 2.972 0 0 0 2.959-2.558v-.056a2.966 2.966 0 0 0-2.524-3.35Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 430",
            d: "m91.954 44.052-.209.078a7.07 7.07 0 0 0 2.5 13.688l-.022.065a7.009 7.009 0 0 0 2.537-.529l.165-.066.1-.039a7.071 7.071 0 1 0-5.076-13.2Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 431",
            d: "M192.48 73.763a9.817 9.817 0 0 0-.929-13.852l-.268-.235a9.817 9.817 0 0 0-12.881 14.8l.246.212a9.806 9.806 0 0 0 6.452 2.426 9.815 9.815 0 0 0 7.38-3.351Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 432",
            d: "M205.131 108.033Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 433",
            d: "m227.69 121.128-.067-.495a12.786 12.786 0 0 0-12.612-11.007 12.761 12.761 0 0 0-12.638 14.485v.428a12.786 12.786 0 0 0 12.612 11.047 13.068 13.068 0 0 0 1.778-.12 12.76 12.76 0 0 0 10.927-14.338Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 434",
            d: "M210.416 102.215a11.283 11.283 0 0 0 4.537-15.3l-.2-.361a16.398 16.398 0 0 0-.27-.5 11.283 11.283 0 1 0-19.545 11.281l.187.336a11.278 11.278 0 0 0 15.289 4.538Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 435",
            d: "m160.575 42.633-.289-.111a8.657 8.657 0 1 0-6.052 16.222l.255.1a8.643 8.643 0 0 0 3.048.556l-.01.066a8.7 8.7 0 0 0 3.048-16.833Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 436",
            d: "m148.433 112.148-13.839 11.867a.333.333 0 0 1-.331 0 17.171 17.171 0 1 0 10.435 12.167.333.333 0 0 1 0-.316l13.9-11.866a7.807 7.807 0 0 0-10.165-11.851Zm-12.039 27.588a8.26 8.26 0 1 1-8.26-8.26 8.26 8.26 0 0 1 8.26 8.259Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 437",
            d: "M138.134 194.756h-20.3a3.765 3.765 0 0 0 0 7.53h20.33a3.764 3.764 0 0 0 3.764-3.765v-.03a3.765 3.765 0 0 0-3.794-3.735Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 438",
            d: "M127.999 0a128 128 0 1 0 128 128 128.15 128.15 0 0 0-128-128Zm0 233.412A105.412 105.412 0 1 1 233.414 128a105.412 105.412 0 0 1-105.415 105.412Z",
          })
        )
      )
    );
  },
  yt = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 864",
          fill: "none",
          d: "M0 0h256v255.259H0z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 396",
          d: "M241.464 0H14.521A14.433 14.433 0 0 0 .001 14.3v51.963a14.433 14.433 0 0 0 14.52 14.3h226.943A14.437 14.437 0 0 0 256 66.263V14.3A14.437 14.437 0 0 0 241.464 0Zm.285 66.263a.283.283 0 0 1-.285.28l-227.224-.28.281-52.241 227.229.278Z",
          stroke: "#000",
        }),
        e.createElement("path", {
          "data-name": "Trazado 397",
          d: "M241.464 87.715H14.521a14.431 14.431 0 0 0-14.52 14.3v51.959a14.432 14.432 0 0 0 14.52 14.3h226.943a14.436 14.436 0 0 0 14.536-14.3v-51.959a14.435 14.435 0 0 0-14.536-14.3Zm.285 66.259a.281.281 0 0 1-.285.28l-227.224-.28.281-52.241 227.229.282Z",
          stroke: "#000",
        }),
        e.createElement("path", {
          "data-name": "Trazado 398",
          d: "M241.464 175.427H14.521a14.441 14.441 0 0 0-14.52 14.31v51.959a14.434 14.434 0 0 0 14.52 14.3h226.943a14.437 14.437 0 0 0 14.536-14.3v-51.959a14.445 14.445 0 0 0-14.536-14.31Zm.285 66.269a.279.279 0 0 1-.285.281l-227.224-.281.281-52.245 227.229.286Z",
          stroke: "#000",
        }),
        e.createElement("rect", {
          "data-name": "Rect\\xE1ngulo 813",
          width: 23.651,
          height: 15.695,
          rx: 0.643,
          transform: "translate(20.301 21.991)",
          stroke: "#000",
          strokeWidth: 0.5,
        }),
        e.createElement("rect", {
          "data-name": "Rect\\xE1ngulo 814",
          width: 23.651,
          height: 15.695,
          rx: 0.643,
          transform: "translate(20.301 111.056)",
          stroke: "#000",
          strokeWidth: 0.5,
        }),
        e.createElement("rect", {
          "data-name": "Rect\\xE1ngulo 815",
          width: 23.651,
          height: 15.695,
          rx: 0.643,
          transform: "translate(20.301 200.016)",
          stroke: "#000",
          strokeWidth: 0.5,
        })
      )
    );
  },
  Gt = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Trazado 373",
          d: "M18 145.888A110.2 110.2 0 0 1 126.767 35.85L113.78 22.869c-12.378-12.378 6.448-31.2 18.822-18.824l37.722 37.72a13.32 13.32 0 0 1 0 18.979l-37.722 37.714c-12.374 12.374-31.2-6.442-18.822-18.82l14.085-14.085a80.434 80.434 0 0 0-80.1 80.335 80.443 80.443 0 0 0 80.349 80.35 80.441 80.441 0 0 0 80.349-80.35 14.878 14.878 0 0 1 14.879-14.877 14.879 14.879 0 0 1 14.882 14.877A110.234 110.234 0 0 1 128.114 256 110.232 110.232 0 0 1 18 145.888Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 871",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  St = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          d: "m144.506 255.256-14.883-15.1a2.5 2.5 0 0 1-.721-1.758v-88.02c-4.229 2.145-8.4 4.255-12.479 6.313-5.391 2.731-10.971 5.553-16.449 8.336l-20.359 10.364-11.967 6.092a2.514 2.514 0 0 1-2.635-.217 2.508 2.508 0 0 1-.973-2.458 120.437 120.437 0 0 1 4.3-16.642 154.087 154.087 0 0 1 7.375-18.167 160.659 160.659 0 0 1 10.453-18.526 148.6 148.6 0 0 1 13.559-17.688 161.263 161.263 0 0 1 21-19.616 157.34 157.34 0 0 1 24.42-15.569 2.512 2.512 0 0 1 2.455.086 2.512 2.512 0 0 1 1.205 2.145v43.791a27.491 27.491 0 0 0 8.039-6.747 27.647 27.647 0 0 0 5.527-11.558 27.41 27.41 0 0 0-.295-12.7 27.57 27.57 0 0 0-6.549-11.788c-5.266-5.679-10.748-11.349-16.051-16.837-4.262-4.407-8.676-8.97-12.955-13.52-.342-.365-.689-.729-1.039-1.1-2.916-3.07-5.934-6.248-7.914-10.09a22.79 22.79 0 0 1-1.416-17.614 23.808 23.808 0 0 1 4.559-8.124 24.373 24.373 0 0 1 7.617-5.952A23.519 23.519 0 0 1 138.992 0a25.109 25.109 0 0 1 12.957 3.756 30.3 30.3 0 0 1 9.525 9.222l1.318 1.945c.018.026.035.056.053.082l1.033 1.663c2.971 4.767 6.035 9.7 9.018 14.584a9375.397 9375.397 0 0 1 19.088 31.434 7.057 7.057 0 0 1 .754 1.962c.049.183.1.352.141.486a2.514 2.514 0 0 1-1.117 2.948l-.582.343a2.514 2.514 0 0 1-2.895-.251 27.192 27.192 0 0 0-.447-.369 13.275 13.275 0 0 1-1.291-1.137l-2.756-2.875c-8.3-8.649-16.881-17.593-25.3-26.415a2847.157 2847.157 0 0 1-5.229-5.5c-4.15-4.372-9.322-9.816-10.338-10.841a5.772 5.772 0 0 0-4-1.88 4.533 4.533 0 0 0-3.152 1.333 4.7 4.7 0 0 0-1.594 3.269 5.364 5.364 0 0 0 1.693 3.791 7287.52 7287.52 0 0 0 18.535 19.351c4.8 5.01 9.777 10.19 14.656 15.292a47.4 47.4 0 0 1 6.354 8.306 46.309 46.309 0 0 1 4.229 9.152 46.6 46.6 0 0 1 2.131 9.648 46.826 46.826 0 0 1 .061 9.786 46.84 46.84 0 0 1-1.953 9.539 46.211 46.211 0 0 1-3.947 9 46.028 46.028 0 0 1-5.895 8.114 46.986 46.986 0 0 1-7.812 6.874 79.956 79.956 0 0 1-9.746 5.548 192.77 192.77 0 0 0-3.555 1.833c-.039.021-.084.047-.121.065v113.437a2.517 2.517 0 0 1-1.561 2.323 2.529 2.529 0 0 1-.951.186 2.513 2.513 0 0 1-1.79-.748Zm-23.9-141.771a136 136 0 0 0-10.672 11.727 137.8 137.8 0 0 0-9.287 12.973q-2.262 3.589-4.359 7.394c.139-.074.277-.143.416-.217 4.941-2.527 9.605-4.915 14.33-7.342l1.783-.916c5.258-2.7 10.693-5.5 16-8.306.018-.014.039-.035.061-.053.061-7.372.053-15.174.039-22.768a139.007 139.007 0 0 0-8.312 7.508Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 861",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  kt = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          d: "m127.996 255.998-48-64H42.252a31.385 31.385 0 0 1-14.189-3.563 54.7 54.7 0 0 1-14.061-10.69 55.543 55.543 0 0 1-10.5-14.313 32.835 32.835 0 0 1-3.5-14.434v-106a32.839 32.839 0 0 1 3.5-14.438 55.538 55.538 0 0 1 10.5-14.312A54.623 54.623 0 0 1 28.063 3.561 31.4 31.4 0 0 1 42.252 0h171.494a31.389 31.389 0 0 1 14.188 3.561 54.7 54.7 0 0 1 14.068 10.687 55.531 55.531 0 0 1 10.5 14.313 32.839 32.839 0 0 1 3.5 14.437v106a32.835 32.835 0 0 1-3.5 14.438 55.532 55.532 0 0 1-10.5 14.313 54.676 54.676 0 0 1-14.064 10.69 31.371 31.371 0 0 1-14.187 3.563h-37.758l-47.994 64Zm2.3-164.808c3.25 6.531 8.105 16.287 12.771 25.671l2.207 4.436c4.8 9.657 8.277 16.634 8.4 16.856a28.061 28.061 0 0 0 11.422 12.328 33.352 33.352 0 0 0 16.873 4.511 34.058 34.058 0 0 0 9.076-1.229 7.893 7.893 0 0 0 4.939-3.831 6.445 6.445 0 0 0 .395-5.167 7.229 7.229 0 0 0-2.971-3.688 8.874 8.874 0 0 0-4.754-1.376 9.005 9.005 0 0 0-2.395.324 16.147 16.147 0 0 1-4.268.574 15.731 15.731 0 0 1-8.162-2.244 13.156 13.156 0 0 1-5.385-6.093l-.385-.771-2.3-4.636-.037-.073c-8.051-16.214-29.434-59.283-32.84-65.75l-.711-1.376-.127-.241v-.007c-2.111-3.99-5.3-10.021-10.895-15.062a34.192 34.192 0 0 0-10.361-6.44 40.584 40.584 0 0 0-14.949-2.656c-4.457 0-8.082 3.223-8.082 7.185s3.625 7.19 8.082 7.19h.014c12.277 0 16.834 6.963 21.516 16.065l.779 1.469c.379.724 1 1.938 1.85 3.617l.105.211 1.953 3.842-44.129 69.447a6.471 6.471 0 0 0-.658 5.161 7.3 7.3 0 0 0 3.842 4.43 8.881 8.881 0 0 0 3.973.933 8.922 8.922 0 0 0 3.906-.893 7.746 7.746 0 0 0 3-2.558l38.313-60.161Z",
        })
      )
    );
  },
  It = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          { transform: "translate(3486.336 -3812.001)" },
          e.createElement("path", {
            "data-name": "Trazado 436",
            d: "M-3395.774 3897.42a17.685 17.685 0 0 0-5.245-10.691c-2.691-2.615-7.129-5.479-11.512-5.676-10-.465-18.68 6.74-19.754 16.366l-2.853 25.542a21.788 21.788 0 0 0-.126 2.327 21.263 21.263 0 0 0 21.193 21.28h.043a20.635 20.635 0 0 0 18.294-11.19 27.971 27.971 0 0 0 2.932-12.257c.2-5.784-.8-11.752-1.756-17.522-.475-2.872-.926-5.585-1.216-8.179Zm-18.24-3.68a4.229 4.229 0 0 1 4.224 4.224 4.23 4.23 0 0 1-4.224 4.225 4.231 4.231 0 0 1-4.225-4.225 4.23 4.23 0 0 1 4.226-4.224Zm0 40.129a10.573 10.573 0 0 1-10.561-10.561 10.572 10.572 0 0 1 10.561-10.56 10.573 10.573 0 0 1 10.561 10.56 10.574 10.574 0 0 1-10.56 10.561Z",
          }),
          e.createElement("circle", {
            "data-name": "Elipse 63",
            cx: 2.111,
            cy: 2.111,
            r: 2.111,
            transform: "translate(-3416.125 3921.197)",
          }),
          e.createElement("path", {
            "data-name": "Trazado 437",
            d: "M-3250.337 3889.2c.387-15.754.958-32.242-.5-47.942-1.093-11.755-6.192-21.735-17.832-25.915a42.461 42.461 0 0 0-5.016-1.447c-6.549-1.479-13.432-1.6-20.09-1.8-11.727-.344-23.449.364-35.176.314-23.494-.1-46.986.322-70.479.414q-4.228.016-8.456.017h-42.206a17.26 17.26 0 0 0-17.241 17.24v220.68a17.26 17.26 0 0 0 17.241 17.24h182.54a17.26 17.26 0 0 0 17.241-17.24v-109.942c-.001-17.184-.448-34.459-.026-51.619Zm-20.922 145.987a14.888 14.888 0 0 1-14.886 14.887h-118.622v-21.342c.206.015.412.032.621.032h16.262a8.456 8.456 0 0 0 8.455-8.454 8.455 8.455 0 0 0-8.456-8.456h-16.261c-.209 0-.415.016-.621.031v-23.6c.206.015.412.032.621.032h16.262a8.455 8.455 0 0 0 8.455-8.455 8.455 8.455 0 0 0-8.455-8.455h-16.262c-.209 0-.415.017-.621.031v-20.75a20.4 20.4 0 0 1-9.259 2.222h-.043a21.069 21.069 0 0 1-7.607-1.45l-.567-.029h-16.257a8.454 8.454 0 0 0-8.455 8.456 8.454 8.454 0 0 0 8.455 8.454h16.261c.192 0 .379-.016.567-.028v23.187a8.726 8.726 0 0 0-.8-.04h-16.261a8.455 8.455 0 0 0-8.455 8.455 8.455 8.455 0 0 0 8.455 8.455h16.261c.269 0 .535-.016.8-.041v41.751h-12.839a14.89 14.89 0 0 1-14.889-14.886v-189.529a14.889 14.889 0 0 1 14.888-14.888h99.549v25.458a37.8 37.8 0 0 0 37.757 37.76h25.952Zm0-157.657h-25.952a21.319 21.319 0 0 1-21.3-21.3v-25.458h32.359a14.888 14.888 0 0 1 14.888 14.888Z",
          })
        ),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 912",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  qt = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 21 21",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path-help-icon" },
          e.createElement("rect", {
            id: "Rectángulo_961",
            "data-name": "Rectángulo 961",
            width: "21",
            height: "21",
            transform: "translate(0 -0.159)",
            fill: "currentcolor",
          })
        )
      ),
      e.createElement(
        "g",
        { id: "HelpIcon-Full", transform: "translate(0 0.159)" },
        e.createElement(
          "g",
          {
            id: "Grupo_2320",
            "data-name": "Grupo 2320",
            clipPath: "url(#clip-path-help-icon)",
          },
          e.createElement("path", {
            id: "Trazado_7048",
            "data-name": "Trazado 7048",
            d: "M10.42,0A10.42,10.42,0,1,0,20.84,10.42,10.42,10.42,0,0,0,10.42,0M9.534,18.477a2,2,0,0,1-1.953-1.953h0a1.943,1.943,0,1,1,1.953,1.953m1.309-6.32-.082,1.176H8.3V9.856h.982c1.974,0,3.037-.624,3.037-1.82,0-1.1-1.053-1.7-3.007-1.7-.552,0-1.125.041-1.554.081L7.561,3.73A15.939,15.939,0,0,1,9.626,3.6c3.569,0,5.635,1.647,5.635,4.234,0,2.362-1.575,3.876-4.418,4.326",
            fill: "currentcolor",
          })
        )
      )
    );
  },
  Ft = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 860",
          fill: "none",
          d: "M0 0h256v256H0z",
        }),
        e.createElement(
          "g",
          { "data-name": "share-icn" },
          e.createElement("path", {
            "data-name": "Trazado 410",
            d: "M251.315 67.671 207.79 25.459c-14.279-13.851-35.342 7.862-21.063 21.716l12.959 12.567a156.689 156.689 0 0 0-82.95 23.182 156.774 156.774 0 0 0-71.051 97.677 15.547 15.547 0 0 0 11.474 18.755 15.62 15.62 0 0 0 3.655.438 15.555 15.555 0 0 0 15.1-11.909c14.6-60.586 70.74-100.461 130.9-96.758l-3.335 4.317-15.767 16.248c-13.849 14.285 7.867 35.345 21.719 21.063l42.214-43.518a15.131 15.131 0 0 0-.33-21.566Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 411",
            d: "M229.501 156.071c-7.927 0-14.351 6.747-14.351 15.066v54.731H28.703V30.133h126.71c7.925 0 14.351-6.744 14.351-15.066S163.337.001 155.413.001h-130.1C11.356.001.002 11.921.002 26.575v202.854c0 14.652 11.354 26.572 25.311 26.572h193.23c13.957 0 25.311-11.92 25.311-26.572v-58.291c-.001-8.32-6.428-15.067-14.353-15.067Z",
          })
        )
      )
    );
  },
  Ot = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "g",
        null,
        e.createElement("path", {
          d: "M235.3,72.5c-0.2-15.5-12.8-27.9-28.3-27.9h-78l-1.1-1.5c-5.1-9.3-14.5-15.5-25.1-16.6h-50c-15.6,0-28.3,12.6-28.3,28.3\n\t\t\tc0,1,0.1,2,0.2,3v12.9c-11.6,3.9-19.4,14.8-19.4,27c0,0.6,0,1.2,0.1,1.7L14.8,202c0.6,15.4,13.2,27.5,28.6,27.5h168.9\n\t\t\tc15.4,0,28-12.1,28.6-27.5l9.5-102.5c0-0.6,0.1-1.2,0.1-1.8C250.6,87.1,244.7,77.4,235.3,72.5z M32.5,88.4c11.7-3.3,12-11,12-11\n\t\t\th172c0.2,4.6,2.9,8.8,6.9,11H32.5z",
        })
      )
    );
  },
  jt = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "edit-icn",
          d: "M201.683 0a56.44 56.44 0 0 0-38.86 15.85L18.897 159.94a13.219 13.219 0 0 0-3.838 7.2L.187 239.67a13.355 13.355 0 0 0 3.838 12.488A14.56 14.56 0 0 0 14.1 256a6.078 6.078 0 0 0 2.879-.48l71.962-13.932a13.2 13.2 0 0 0 7.2-3.842L240.063 93.658c21.109-21.133 21.109-56.2 0-77.328A52.948 52.948 0 0 0 201.683 0ZM51.521 220.938a29.883 29.883 0 0 0-6.717-9.126 40.622 40.622 0 0 0-9.115-6.724l5.277-24.976a46.056 46.056 0 0 1 23.508 12.008 42.7 42.7 0 0 1 11.994 23.535ZM220.393 73.966 92.299 201.726a56.271 56.271 0 0 0-14.872-23.054 65.573 65.573 0 0 0-23.028-14.89l128.094-128.24a26.406 26.406 0 0 1 19.19-7.685 28.509 28.509 0 0 1 19.19 7.685 27.729 27.729 0 0 1-.48 38.424Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 867",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  Dt = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          { "data-name": "JSONIcon" },
          e.createElement(
            "g",
            { "data-name": "Grupo 2269" },
            e.createElement("path", {
              "data-name": "Uni\\xF3n 21",
              d: "M190.07 233.208a8.967 8.967 0 0 1-2.645-6.377 8.974 8.974 0 0 1 2.645-6.389 8.949 8.949 0 0 1 6.375-2.633 24.023 24.023 0 0 0 9.363-1.895 23.98 23.98 0 0 0 7.656-5.163 24.228 24.228 0 0 0 5.152-7.648 23.763 23.763 0 0 0 1.895-9.361v-47.057a26.541 26.541 0 0 1 7.129-18.122 26.567 26.567 0 0 1-7.129-18.133V63.373a23.707 23.707 0 0 0-1.895-9.351 23.978 23.978 0 0 0-5.152-7.648 23.977 23.977 0 0 0-7.656-5.162 23.815 23.815 0 0 0-9.363-1.9 8.959 8.959 0 0 1-6.375-2.644 8.95 8.95 0 0 1-2.645-6.378 8.949 8.949 0 0 1 2.645-6.377 8.959 8.959 0 0 1 6.375-2.644 42.145 42.145 0 0 1 42.109 42.1v47.057a8.636 8.636 0 0 0 8.625 8.624 8.959 8.959 0 0 1 6.375 2.644 8.967 8.967 0 0 1 2.645 6.377c0 .148 0 .307-.012.488.012.17.012.329.012.477a8.974 8.974 0 0 1-2.645 6.389 8.949 8.949 0 0 1-6.375 2.633 8.636 8.636 0 0 0-8.625 8.624v47.057a42.154 42.154 0 0 1-42.109 42.109 8.959 8.959 0 0 1-6.375-2.64ZM17.465 193.742v-47.057a8.641 8.641 0 0 0-8.625-8.624 8.981 8.981 0 0 1-6.387-2.645 8.936 8.936 0 0 1-2.633-6.377c0-.147 0-.307.012-.477-.012-.182-.012-.34-.012-.488a8.956 8.956 0 0 1 2.633-6.377 8.98 8.98 0 0 1 6.387-2.644 8.641 8.641 0 0 0 8.625-8.624V63.372a42.142 42.142 0 0 1 42.1-42.1 8.972 8.972 0 0 1 6.391 2.633 8.963 8.963 0 0 1 2.633 6.388 8.957 8.957 0 0 1-2.633 6.378 8.982 8.982 0 0 1-6.391 2.644 23.8 23.8 0 0 0-9.359 1.9 24.22 24.22 0 0 0-7.648 5.151 23.985 23.985 0 0 0-5.164 7.659 23.975 23.975 0 0 0-1.883 9.351v47.057a26.56 26.56 0 0 1-7.137 18.133 26.512 26.512 0 0 1 7.137 18.122v47.057a24.07 24.07 0 0 0 1.883 9.361 24.068 24.068 0 0 0 5.164 7.648 24.076 24.076 0 0 0 7.648 5.163 23.994 23.994 0 0 0 9.359 1.884 8.982 8.982 0 0 1 6.391 2.644 8.963 8.963 0 0 1 2.633 6.389 8.956 8.956 0 0 1-2.633 6.377 8.982 8.982 0 0 1-6.391 2.644 42.151 42.151 0 0 1-42.1-42.115ZM160 128.008a16 16 0 0 1 16-16 16.006 16.006 0 0 1 16.012 16 16.012 16.012 0 0 1-16.012 16 16.007 16.007 0 0 1-16-16Zm-48 0a16 16 0 0 1 16-16 16 16 0 0 1 16 16 16 16 0 0 1-16 16 16.01 16.01 0 0 1-16-16Zm-47 0a15.758 15.758 0 0 1 15.5-16 15.758 15.758 0 0 1 15.5 16 15.764 15.764 0 0 1-15.5 16 15.764 15.764 0 0 1-15.5-16Z",
            })
          ),
          e.createElement("path", {
            "data-name": "Rect\\xE1ngulo 891",
            fill: "none",
            d: "M0 0h256v256H0z",
          })
        )
      )
    );
  },
  Ut = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          { "data-name": "search-icn" },
          e.createElement("path", {
            "data-name": "Trazado 399",
            d: "M200.076 179.436a109.04 109.04 0 0 0 24.225-68.582C224.301 49.663 174.057 0 112.151 0S.001 49.663.001 110.854s50.243 110.855 112.15 110.855a111.975 111.975 0 0 0 66.393-21.58l52.037 51.437A15.108 15.108 0 0 0 241.048 256a14.929 14.929 0 0 0 10.467-25.423ZM29.908 110.854c0-44.933 36.785-81.293 82.243-81.293s82.243 36.36 82.243 81.293-37.084 81.293-82.243 81.293-82.243-36.36-82.243-81.293Z",
          })
        ),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 866",
          fill: "none",
          d: "M0 0h256v255.7H0z",
        })
      )
    );
  },
  Wt = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          id: "WarnIcon",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 256 256",
        },
        a,
        { className: "min-icon", fill: "currentcolor" }
      ),
      e.createElement(
        "g",
        { id: "download-icn", transform: "translate(0 0.087)" },
        e.createElement("path", {
          id: "Unión_24",
          "data-name": "Unión 24",
          d: "M19388-6740.606a107.642,107.642,0,0,0-107.52,107.52,107.642,107.642,0,0,0,107.52,107.52,107.642,107.642,0,0,0,107.52-107.52,107.642,107.642,0,0,0-107.52-107.52m0-20.48a128,128,0,0,1,128,128,128,128,0,0,1-128,128,128,128,0,0,1-128-128A128,128,0,0,1,19388-6761.087Z",
          transform: "translate(-19260 6761)",
        })
      ),
      e.createElement("rect", {
        id: "Rectángulo_893",
        "data-name": "Rectángulo 893",
        width: "256",
        height: "256",
        fill: "none",
      }),
      e.createElement("path", {
        id: "Trazado_7001",
        "data-name": "Trazado 7001",
        d: "M43.3-140H12.1l3.6,91.9h24ZM27.8-35.5c-10.2,0-19.1,8.7-19.1,18.9A19.565,19.565,0,0,0,27.8,2.5c10.1,0,18.9-8.9,18.9-19.1A19.282,19.282,0,0,0,27.8-35.5Z",
        transform: "translate(101 201)",
      })
    );
  },
  $t = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("circle", {
          "data-name": "circle-icn",
          cx: 128,
          cy: 128,
          r: 128,
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 852",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  Qt = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Trazado 456",
          d: "M235.996 77.198c.388-15.754.958-32.242-.5-47.942-1.093-11.755-6.192-21.735-17.831-25.915a42.548 42.548 0 0 0-5.016-1.447c-6.55-1.479-13.433-1.6-20.09-1.8-11.727-.343-23.45.365-35.176.314-23.494-.1-46.986.322-70.479.414q-4.228.016-8.456.017H36.242a17.26 17.26 0 0 0-17.241 17.24v220.679a17.26 17.26 0 0 0 17.241 17.24h182.54a17.26 17.26 0 0 0 17.241-17.24V128.816c-.002-17.184-.45-34.46-.027-51.618Zm-20.923 145.983a14.889 14.889 0 0 1-14.889 14.889H51.815a14.889 14.889 0 0 1-14.888-14.888V33.662a14.887 14.887 0 0 1 14.889-14.888h99.548v25.458a37.8 37.8 0 0 0 37.756 37.76h25.952Zm0-157.656h-25.952a21.32 21.32 0 0 1-21.3-21.3V18.767h32.358a14.888 14.888 0 0 1 14.889 14.889Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 457",
          d: "M139.565 84.765a46.768 46.768 0 0 0-42.22 26.113 42.762 42.762 0 0 0-5.095-.3 42.914 42.914 0 0 0-42.866 42.867 42.916 42.916 0 0 0 42.866 42.866h73.123a38.608 38.608 0 0 0 38.566-38.565 38.754 38.754 0 0 0-17.656-32.377 46.973 46.973 0 0 0-46.718-40.6Zm25.809 94.632H92.251a25.986 25.986 0 0 1-25.957-25.957 25.987 25.987 0 0 1 25.957-25.957 25.525 25.525 0 0 1 7.753 1.2 8.459 8.459 0 0 0 6.505-.577 8.446 8.446 0 0 0 4.154-5.039 29.968 29.968 0 0 1 28.9-21.39 30.142 30.142 0 0 1 30.24 29.173 8.453 8.453 0 0 0 4.83 7.341 21.744 21.744 0 0 1 12.4 19.553 21.68 21.68 0 0 1-21.654 21.652Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 898",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  Yt = function (a) {
    return e.createElement(
      "svg",
      T({}, a, {
        className: "min-icon",
        fill: "currentcolor",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
      }),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { "data-name": "Object Browser", clipPath: "url(#prefix__a)" },
        e.createElement(
          "g",
          { "data-name": "Grupo 1541", transform: "translate(87.918 103.898)" },
          e.createElement("circle", {
            "data-name": "Elipse 57",
            cx: 11.515,
            cy: 11.515,
            r: 11.515,
            transform: "rotate(-10.901 280.738 -178.561)",
          }),
          e.createElement("rect", {
            "data-name": "Rect\\xE1ngulo 805",
            width: 24.592,
            height: 20.853,
            rx: 1.35,
            transform: "translate(14.546 25.545)",
          }),
          e.createElement("path", {
            "data-name": "Trazado 365",
            d: "M28.151 60.295a2.427 2.427 0 00-4.2 0l-9.1 15.761a2.425 2.425 0 002.1 3.64h18.2a2.43 2.43 0 002.105-3.64z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 366",
            d: "M79.273 28.199a151.334 151.334 0 00-.187-17.51c-.395-4.294-2.262-7.942-6.512-9.468a15.5 15.5 0 00-1.836-.529 38.335 38.335 0 00-7.332-.658c-4.289-.125-8.57.136-12.855.116-8.582-.036-17.16.116-25.746.152H6.301a6.308 6.308 0 00-6.3 6.3v80.617a6.307 6.307 0 006.3 6.3h66.684a6.3 6.3 0 006.3-6.3V47.054c-.004-6.273-.168-12.584-.012-18.855zm-7.648 53.334a5.435 5.435 0 01-5.434 5.439h-54.2a5.442 5.442 0 01-5.441-5.439V12.3a5.441 5.441 0 015.441-5.442h36.367v9.3a13.809 13.809 0 0013.789 13.794h9.48zm0-57.6h-9.48a7.781 7.781 0 01-7.773-7.777v-9.3h11.82a5.435 5.435 0 015.434 5.442z",
          })
        ),
        e.createElement("path", {
          "data-name": "Trazado 367",
          d: "M101.585 42.067c6.6 0 13.672 18.858 20.742 18.858h87.934a9.453 9.453 0 019.426 9.429v4.715H40.292V51.496h-.234a9.455 9.455 0 019.426-9.429h52.1m124.219 44.5a9.8 9.8 0 019.773 9.772L225.56 204.095a9.8 9.8 0 01-9.773 9.771H39.615a9.8 9.8 0 01-9.773-9.771L20.065 96.339a9.806 9.806 0 019.777-9.772h195.961M101.584 21.999h-52.1a29.528 29.528 0 00-29.492 29.5 20.028 20.028 0 00.234 3.081v13.513A29.9 29.9 0 00-.001 96.344c0 .605.031 1.208.086 1.814l9.711 107.089a29.874 29.874 0 0029.82 28.691h176.172a29.873 29.873 0 0029.813-28.663l9.961-107.074c.051-.617.082-1.239.082-1.857a29.875 29.875 0 00-15.887-26.376 29.534 29.534 0 00-29.5-29.106H128.87c-.4-.532-.785-1.059-1.121-1.517-5.094-6.906-12.785-17.342-26.168-17.342z",
        })
      )
    );
  },
  Kt = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Trazado 373",
          d: "M18 145.888A110.2 110.2 0 0 1 126.767 35.85L113.78 22.869c-12.378-12.378 6.448-31.2 18.822-18.824l37.722 37.72a13.32 13.32 0 0 1 0 18.979l-37.722 37.714c-12.374 12.374-31.2-6.442-18.822-18.82l14.085-14.085a80.434 80.434 0 0 0-80.1 80.335 80.443 80.443 0 0 0 80.349 80.35 80.441 80.441 0 0 0 80.349-80.35 14.878 14.878 0 0 1 14.879-14.877 14.879 14.879 0 0 1 14.882 14.877A110.234 110.234 0 0 1 128.114 256 110.232 110.232 0 0 1 18 145.888Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 871",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  Xt = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          viewBox: "0 0 256 256",
          fill: "currentcolor",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path" },
          e.createElement("rect", {
            id: "Rectángulo_1045",
            "data-name": "Rectángulo 1045",
            width: "256",
            height: "230.638",
            fill: "none",
          })
        ),
        e.createElement(
          "clipPath",
          { id: "clip-Change_Access_Policy" },
          e.createElement("rect", { width: "256", height: "256" })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Change_Access_Policy",
          "data-name": "Change Access Policy",
          clipPath: "url(#clip-Change_Access_Policy)",
        },
        e.createElement("rect", { width: "256", height: "256", fill: "#fff" }),
        e.createElement(
          "g",
          {
            id: "Change_Access_Policy_Icon",
            "data-name": "Change Access Policy Icon",
          },
          e.createElement(
            "g",
            {
              id: "Grupo_2432",
              "data-name": "Grupo 2432",
              transform: "translate(0 13)",
            },
            e.createElement(
              "g",
              { id: "Grupo_2431", "data-name": "Grupo 2431" },
              e.createElement("path", {
                id: "Trazado_7195",
                "data-name": "Trazado 7195",
                d: "M230.943,74.7A72.225,72.225,0,0,0,217.05,30.786,74.4,74.4,0,0,0,82.376,74.139a73.1,73.1,0,0,0,3.216,21.5L0,181.212v49.426H49.426l2.217-2.22L38.01,214.786l17.257-17.257L68.9,211.161l14.776-14.778L70.043,182.753,87.3,165.5l13.629,13.63L135,145.045a73.794,73.794,0,0,0,41.481.594A45.523,45.523,0,1,0,230.943,74.7m15.771,40.663a35.971,35.971,0,1,1-35.971-35.971,35.971,35.971,0,0,1,35.971,35.971M228.838,99.516A8.172,8.172,0,0,0,222.913,97a8.71,8.71,0,0,0-6,2.447l-22.22,22.245a2.041,2.041,0,0,0-.593,1.112L191.8,134a2.062,2.062,0,0,0,.593,1.928,2.246,2.246,0,0,0,1.555.593.938.938,0,0,0,.444-.074l11.11-2.152a2.036,2.036,0,0,0,1.111-.593l22.219-22.245a8.511,8.511,0,0,0,0-11.938M148.261,65.9a16.475,16.475,0,1,1,16.475,16.475A16.475,16.475,0,0,1,148.261,65.9",
                transform: "translate(0 0)",
              })
            )
          ),
          e.createElement("rect", {
            id: "Rectángulo_1046",
            "data-name": "Rectángulo 1046",
            width: "256",
            height: "256",
            fill: "none",
          })
        )
      )
    );
  },
  Jt = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          { "data-name": "Grupo 1552" },
          e.createElement("path", {
            "data-name": "Trazado 470",
            d: "M235.996 77.198c.387-15.753.958-32.242-.5-47.941-1.093-11.756-6.193-21.735-17.832-25.915a42.412 42.412 0 0 0-5.016-1.447c-6.549-1.479-13.431-1.6-20.09-1.8-11.726-.345-23.448.365-35.176.314-23.494-.1-46.986.322-70.479.414q-4.228.016-8.456.017H36.241A17.26 17.26 0 0 0 19 18.082v220.679a17.26 17.26 0 0 0 17.241 17.24h182.54a17.26 17.26 0 0 0 17.241-17.24V128.816c-.002-17.184-.448-34.459-.026-51.618Zm-20.921 145.986a14.889 14.889 0 0 1-14.888 14.889H51.818a14.89 14.89 0 0 1-14.889-14.888V33.662a14.888 14.888 0 0 1 14.889-14.888h99.548v25.458a37.8 37.8 0 0 0 37.756 37.759h25.952Zm0-157.657h-25.952a21.32 21.32 0 0 1-21.295-21.3V18.769h32.359a14.887 14.887 0 0 1 14.888 14.889Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 471",
            d: "m170.219 93.84-67.656 9.02-.128.016a13.3 13.3 0 0 0-12.025 13.473v55.664a22.934 22.934 0 0 0-7.98-1.435 23.085 23.085 0 0 0-23.061 23.061 23.085 23.085 0 0 0 23.06 23.059 23.084 23.084 0 0 0 23.059-23.058v-43.227c.361-4.418 1.57-5.6 2.015-5.89l58.69-7.827a1.443 1.443 0 0 1 .764.238 1.855 1.855 0 0 1 .25 1.174v23.663a23 23 0 0 0-7.981-1.434 23.086 23.086 0 0 0-23.059 23.06 23.085 23.085 0 0 0 23.059 23.058 23.085 23.085 0 0 0 23.059-23.058v-77.608c0-4.089-1.2-7.245-3.565-9.382a11.106 11.106 0 0 0-8.5-2.568ZM82.43 201.614a7.989 7.989 0 0 1-7.979-7.979 7.989 7.989 0 0 1 7.979-7.98 7.99 7.99 0 0 1 7.98 7.98 7.988 7.988 0 0 1-7.984 7.98Zm84.776-82.429c-.23 1.876-1.1 2.3-1.539 2.369l-57.957 7.728-.134.018a6.169 6.169 0 0 1-2.088 0v-8.793c0-2.208.833-2.8 1.762-3.063l58.3-7.776a2.29 2.29 0 0 1 1.444.261 1.972 1.972 0 0 1 .215 1.139Zm-7.979 72.19a7.991 7.991 0 0 1-7.98-7.981 7.991 7.991 0 0 1 7.98-7.981 7.991 7.991 0 0 1 7.981 7.979 7.993 7.993 0 0 1-7.989 7.984Z",
          })
        ),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 914",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  en = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          { "data-name": "servers-icn" },
          e.createElement("path", {
            "data-name": "Trazado 404",
            d: "M128 0C64.408 0 0 15.267 0 44.414v167.17c0 29.147 64.408 44.415 128 44.415s128-15.268 128-44.415V44.414C256 15.267 191.592 0 128 0Zm105.743 211.584c0 8.945-37.324 25.909-105.739 25.909s-105.74-17.118-105.74-25.909v-58.911c24.116 11.967 65.15 18.2 105.74 18.2s81.623-6.169 105.739-18.29Zm0-85.128c0 8.791-37.324 25.908-105.739 25.908s-105.74-17.118-105.74-25.908V70.537c24.116 12.06 65.15 18.29 105.74 18.29s81.623-6.168 105.739-18.29ZM128.004 70.321c-68.416 0-105.74-17.118-105.74-25.908s37.324-25.908 105.74-25.908 105.739 17.119 105.739 25.909S196.415 70.323 128 70.323Z",
          }),
          e.createElement("circle", {
            "data-name": "Elipse 59",
            cx: 15.793,
            cy: 15.793,
            r: 15.793,
            transform: "rotate(-31.72 348.405 44.732)",
          }),
          e.createElement("circle", {
            "data-name": "Elipse 60",
            cx: 15.793,
            cy: 15.793,
            r: 15.793,
            transform: "rotate(-31.72 207.061 4.576)",
          })
        ),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 854",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  an = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "g",
        { transform: "translate(14.827 15.767) rotate(180)" },
        e.createElement("path", {
          fill: "currentcolor",
          d: "M-147.9-183c-4.1-4.1-10.8-4.1-14.9,0c0,0,0,0,0,0l-63.3,63.3c-4.1,4.1-4.1,10.8,0,14.9\n\t\tc0,0,0,0,0,0l63.3,63.3c4.1,4.1,10.8,4.1,14.9,0c4.1-4.1,4.1-10.8,0-14.9l-55.9-55.9l55.9-55.9C-143.7-172.2-143.7-178.9-147.9-183\n\t\tC-147.9-183-147.9-183-147.9-183L-147.9-183z",
        }),
        e.createElement("path", {
          fill: "currentcolor",
          d: "M-60.4-112.2c0-5.8-4.7-10.5-10.5-10.5h-137.1c-5.8,0-10.6,4.7-10.6,10.6\n\t\tc0,5.8,4.7,10.6,10.6,10.6h137.1C-65.1-101.7-60.4-106.4-60.4-112.2C-60.4-112.2-60.4-112.2-60.4-112.2z M-7.6,14.4\n\t\tc-5.8,0-10.5-4.7-10.5-10.5v-232.2c0-5.8,4.7-10.6,10.6-10.6c5.8,0,10.6,4.7,10.6,10.6V3.9C2.9,9.7-1.8,14.4-7.6,14.4L-7.6,14.4z",
        })
      )
    );
  },
  tn = function (e) {
    return a.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 10.868 22",
        },
        e
      ),
      a.createElement("path", {
        id: "minio-logo-color",
        d: "M36.179,13.541q-.834-1.379-1.673-2.755c-.29-.476-.585-.949-.88-1.422l-.116-.172a2.047,2.047,0,0,0-2.624-.836,1.84,1.84,0,0,0-.846,2.481,4.385,4.385,0,0,0,.749.931c.841.894,1.709,1.762,2.544,2.662a2.626,2.626,0,0,1-.915,4.225l-.056.023V14.492a13.556,13.556,0,0,0-3.918,3.036,13.227,13.227,0,0,0-3.075,6.117L28.2,22.2c.942-.479,1.878-.95,2.856-1.446V28.83l1.3,1.323V20.076s.03-.014.127-.067a10.787,10.787,0,0,0,1.143-.633,3.862,3.862,0,0,0,.567-5.84c-.969-1.013-1.942-2.022-2.91-3.037a.623.623,0,0,1,0-.93.643.643,0,0,1,.935.053c.135.136,1.043,1.1,1.367,1.435q1.228,1.286,2.459,2.567a1.752,1.752,0,0,0,.136.116l.051-.03A.815.815,0,0,0,36.179,13.541Zm-5.124,5.715a.235.235,0,0,1-.119.159c-.519.275-1.042.543-1.564.811l-1.9.976a12.318,12.318,0,0,1,3.568-4.421l.023-.019C31.06,17.572,31.063,18.448,31.055,19.257Z",
        transform: "translate(-25.369 -8.153)",
      })
    );
  },
  nn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Uni\\xF3n 18",
          d: "M17.271 255.95a17.247 17.247 0 0 1-12.236-5.086 17.291 17.291 0 0 1-5.086-12.239V17.274A17.25 17.25 0 0 1 5.035 5.035 17.245 17.245 0 0 1 17.271-.051h221.354a17.237 17.237 0 0 1 12.244 5.091 17.238 17.238 0 0 1 5.08 12.253v221.332a17.256 17.256 0 0 1-5.084 12.239 17.256 17.256 0 0 1-12.24 5.086Zm5.121-233.556a14.786 14.786 0 0 0-4.357 10.526v190.083a14.784 14.784 0 0 0 4.357 10.521 14.782 14.782 0 0 0 10.52 4.362h190.09a14.788 14.788 0 0 0 10.518-4.362 14.778 14.778 0 0 0 4.359-10.521l-.016-190.083a14.758 14.758 0 0 0-4.357-10.521 14.758 14.758 0 0 0-10.514-4.362H32.912a14.777 14.777 0 0 0-10.52 4.356Zm133.525 194.628a15.4 15.4 0 0 1-10.963-4.539 15.409 15.409 0 0 1-4.545-10.969V178.65a15.406 15.406 0 0 1 4.545-10.964 15.4 15.4 0 0 1 10.957-4.539h48.84a15.4 15.4 0 0 1 10.959 4.539 15.409 15.409 0 0 1 4.539 10.964v22.873a15.4 15.4 0 0 1-4.539 10.959 15.385 15.385 0 0 1-10.959 4.539Zm-99.047-.02c-8.545 0-15.5-6.375-15.5-14.213v-74.217c0-7.838 6.957-14.218 15.5-14.218h48.834c8.547 0 15.5 6.38 15.5 14.218v74.217c0 7.837-6.949 14.213-15.5 14.213Zm99.047-75.462c-8.545 0-15.5-6.375-15.5-14.213V53.11c0-7.838 6.957-14.218 15.5-14.218h48.824c8.553 0 15.508 6.38 15.508 14.218v74.217c0 7.838-6.955 14.213-15.508 14.213ZM56.87 92.781a15.4 15.4 0 0 1-10.957-4.539 15.407 15.407 0 0 1-4.545-10.964V54.395a15.406 15.406 0 0 1 4.545-10.964 15.4 15.4 0 0 1 10.957-4.539h48.824a15.408 15.408 0 0 1 10.969 4.544A15.4 15.4 0 0 1 121.2 54.4v22.873a15.4 15.4 0 0 1-4.537 10.964 15.408 15.408 0 0 1-10.969 4.544Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 881",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  ln = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Uni\\xF3n 41",
          d: "M175.369 255.999a41.227 41.227 0 0 1-40.01-31.491h-14.736a41.3 41.3 0 0 1-39.988 31.491h-.006a41.192 41.192 0 0 1-41.152-41.145 41.068 41.068 0 0 1 14.268-31.134l-8.084-14.819a41.386 41.386 0 0 1-4.5.251A41.2 41.2 0 0 1 .007 128.003a41.2 41.2 0 0 1 41.154-41.154 41.31 41.31 0 0 1 6.041.443l7.676-14.071a41.09 41.09 0 0 1-15.393-32.069A41.194 41.194 0 0 1 80.637-.002a41.211 41.211 0 0 1 40.893 36.5h12.957a41.207 41.207 0 0 1 40.891-36.5 41.194 41.194 0 0 1 41.152 41.154 41.115 41.115 0 0 1-14.035 30.886l8.193 15.021a41.42 41.42 0 0 1 4.172-.21 41.2 41.2 0 0 1 41.148 41.154 41.273 41.273 0 0 1-41.148 41.149q-1.31 0-2.6-.082l-8.652 15.861a41.05 41.05 0 0 1 12.926 29.922 41.263 41.263 0 0 1-41.148 41.145Zm-15.461-41.145a15.479 15.479 0 0 0 15.461 15.462 15.485 15.485 0 0 0 15.471-15.462 15.515 15.515 0 0 0-15.471-15.471 15.485 15.485 0 0 0-15.461 15.473Zm-94.744 0a15.484 15.484 0 0 0 15.465 15.462 15.484 15.484 0 0 0 15.467-15.462 15.512 15.512 0 0 0-15.471-15.471 15.485 15.485 0 0 0-15.461 15.473Zm69.055-.351a41.147 41.147 0 0 1 18.393-33.922l-8.525-14.725a40.926 40.926 0 0 1-16.082 3.3 40.981 40.981 0 0 1-12.812-2.042l-8.984 15.522a41.109 41.109 0 0 1 15.578 31.87Zm61.25-35.552 6.477-11.871a41.28 41.28 0 0 1-27.734-32.58h-5.58a41.235 41.235 0 0 1-14.312 25.076l9.186 15.868a41.037 41.037 0 0 1 11.865-1.744 40.9 40.9 0 0 1 20.098 5.253Zm-133.391-.828a40.919 40.919 0 0 1 18.551-4.423 40.934 40.934 0 0 1 15.193 2.907l8.617-14.884A41.216 41.216 0 0 1 87.363 134.5h-5.582a41.378 41.378 0 0 1-26.059 31.969Zm137.309-50.119a15.477 15.477 0 0 0 15.465 15.462 15.477 15.477 0 0 0 15.461-15.462 15.5 15.5 0 0 0-15.471-15.471 15.483 15.483 0 0 0-15.455 15.472ZM128 143.467a15.477 15.477 0 0 0 15.465-15.462A15.5 15.5 0 0 0 128 112.534a15.4 15.4 0 0 0-5.734 1.1l-3.818 2.21A15.452 15.452 0 0 0 112.54 128a15.441 15.441 0 0 0 5.914 12.155l3.789 2.2a15.379 15.379 0 0 0 5.757 1.112ZM25.686 128.005a15.482 15.482 0 0 0 15.467 15.462 15.481 15.481 0 0 0 15.465-15.462 15.507 15.507 0 0 0-15.465-15.471 15.49 15.49 0 0 0-15.467 15.471Zm148.379-5.5a41.276 41.276 0 0 1 26.506-33.1l-6.379-11.693a40.928 40.928 0 0 1-18.818 4.591 41.039 41.039 0 0 1-11.865-1.743l-9.17 15.843a41.135 41.135 0 0 1 14.451 26.1Zm-86.848 0a41.2 41.2 0 0 1 17.221-28.223l-8.627-14.9a40.952 40.952 0 0 1-15.176 2.925h-.006a40.908 40.908 0 0 1-17.254-3.794l-6.3 11.548a41.266 41.266 0 0 1 24.863 32.448Zm56.881-32.375 8.514-14.707a41.2 41.2 0 0 1-18.049-28.922h-13.135a41.238 41.238 0 0 1-15.242 26.844l9 15.549A41 41 0 0 1 128 86.852a40.932 40.932 0 0 1 16.1 3.278Zm15.811-48.976a15.476 15.476 0 0 0 15.461 15.461 15.482 15.482 0 0 0 15.471-15.461 15.515 15.515 0 0 0-15.471-15.471 15.484 15.484 0 0 0-15.462 15.471Zm-94.744 0A15.481 15.481 0 0 0 80.63 56.615a15.481 15.481 0 0 0 15.467-15.461 15.512 15.512 0 0 0-15.471-15.471 15.484 15.484 0 0 0-15.462 15.471Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 924",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  rn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Uni\\xF3n 39",
          d: "M119.5 246.769v-19a9 9 0 0 1 9-9 9 9 0 0 1 9 9v19a9 9 0 0 1-9 9 9.006 9.006 0 0 1-9-9Zm0-43.852v-19a9.006 9.006 0 0 1 9-9 9 9 0 0 1 9 9v19a9 9 0 0 1-9 9 9.006 9.006 0 0 1-9-9Zm117.967-22.283-71.154-41.4a12.875 12.875 0 0 1-6.463-11.237 12.889 12.889 0 0 1 6.463-11.237l71.154-41.394A13 13 0 0 1 257 86.6v82.794a13.018 13.018 0 0 1-13.021 13.02 12.877 12.877 0 0 1-6.514-1.78Zm-54.674-52.636 56.211 32.7v-65.4ZM0 169.4V86.6a13 13 0 0 1 19.535-11.237l71.15 41.394a12.879 12.879 0 0 1 6.461 11.237 12.865 12.865 0 0 1-6.461 11.237l-71.15 41.4a12.9 12.9 0 0 1-6.518 1.783A13.015 13.015 0 0 1 0 169.4Zm18-8.7L74.205 128 18 95.3Zm101.5-1.636v-19a9 9 0 0 1 9-9 9 9 0 0 1 9 9v19a9 9 0 0 1-9 9 9 9 0 0 1-9-8.998Zm0-43.857v-19a9.006 9.006 0 0 1 9-9 9 9 0 0 1 9 9v19a9 9 0 0 1-9 9 9.006 9.006 0 0 1-9-8.999Zm0-43.852v-19a9 9 0 0 1 9-9 9 9 0 0 1 9 9v19a9 9 0 0 1-9 9 9 9 0 0 1-9-8.998Zm0-43.857v-19a9.006 9.006 0 0 1 9-9 9 9 0 0 1 9 9v19a9 9 0 0 1-9 9 9.006 9.006 0 0 1-9-8.998Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 923",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  cn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          { "data-name": "ToolsIcon" },
          e.createElement("path", {
            "data-name": "Rect\\xE1ngulo 846",
            fill: "none",
            d: "M0 0h255.535v255.516H0z",
          }),
          e.createElement(
            "g",
            { "data-name": "Grupo 1552" },
            e.createElement("path", {
              "data-name": "Uni\\xF3n 12",
              d: "M187.377 246.393 68.398 127.416q-2.3.164-4.6.164a63.373 63.373 0 0 1-45.111-18.629A64.284 64.284 0 0 1 2.218 47.216a19.958 19.958 0 0 1 33.414-9.02l12.7 12.695 3.006-3-12.7-12.7a19.962 19.962 0 0 1 9.02-33.412A65.038 65.038 0 0 1 64.283-.384a63.344 63.344 0 0 1 45.113 18.635 64.122 64.122 0 0 1 18.461 49.688l.59.59c.146-.153.291-.3.441-.453l23.5-23.312-.055-3.286a19.965 19.965 0 0 1 10.5-17.912l40.215-21.659a19.949 19.949 0 0 1 23.523 3.4l23.526 23.33a19.973 19.973 0 0 1 3.266 24.089l-22.524 39.362a19.955 19.955 0 0 1-17.4 10.049l-2.51-.009-24.086 23.888c-.15.151-.3.3-.461.443l60.469 60.463a31.038 31.038 0 0 1 0 43.848l-15.619 15.622a31.015 31.015 0 0 1-43.855 0Zm14.119-14.117a11.039 11.039 0 0 0 15.617 0l15.619-15.617a11.033 11.033 0 0 0 0-15.617L106.566 74.884a43.813 43.813 0 0 0-53.811-53.81L79.57 47.886l-31.239 31.23-26.812-26.8a43.815 43.815 0 0 0 53.809 53.8Zm-29.2-191.135.2 11.8-29.549 29.307 29.838 29.6 29.951-29.712 10.777.041 22.524-39.368-23.52-23.331Z",
            }),
            e.createElement(
              "g",
              { "data-name": "Grupo 1551" },
              e.createElement("path", {
                "data-name": "Trazado 444",
                d: "m80.891 143.919-57.656 57.656a10.859 10.859 0 0 0 0 15.357l15.357 15.359a10.861 10.861 0 0 0 15.359 0l57.652-57.655-30.712-30.717m0-20a20 20 0 0 1 14.142 5.858l30.716 30.717a20 20 0 0 1 0 28.284l-57.656 57.656a30.661 30.661 0 0 1-21.822 9.039 30.658 30.658 0 0 1-21.821-9.039l-15.358-15.36a30.657 30.657 0 0 1-9.038-21.82 30.656 30.656 0 0 1 9.04-21.822l57.654-57.655a20 20 0 0 1 14.143-5.858Z",
              })
            )
          )
        )
      )
    );
  },
  mn = function (e) {
    return a.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        e
      ),
      a.createElement(
        "defs",
        null,
        a.createElement(
          "clipPath",
          { id: "prefix__a" },
          a.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      a.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        a.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        a.createElement("path", {
          "data-name": "arrow-icn",
          d: "M19.795 108.063c-26.394 0-26.394 40.032 0 40.032h167.688l-22.739 22.669c-18.656 18.622 9.725 46.922 28.382 28.316l56.877-56.732a19.991 19.991 0 000-28.548l-56.877-56.716c-18.656-18.6-47.038 9.684-28.382 28.3l22.739 22.68H19.795z",
        }),
        a.createElement("path", {
          "data-name": "Rect\\xE1ngulo 863",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  on = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Trazado 463",
          d: "M32.291 232.53a32.336 32.336 0 0 1-32.289-32.3V76.935a32.33 32.33 0 0 1 32.289-32.3 8.837 8.837 0 0 1 8.832 8.822 8.845 8.845 0 0 1-8.832 8.831 14.663 14.663 0 0 0-14.648 14.648v123.295a14.661 14.661 0 0 0 14.648 14.64h191.4a14.66 14.66 0 0 0 14.641-14.64V76.936a14.661 14.661 0 0 0-14.641-14.648h-54.07a8.845 8.845 0 0 1-8.832-8.831 8.762 8.762 0 0 1 2.586-6.236 8.735 8.735 0 0 1 6.246-2.586h54.07a32.345 32.345 0 0 1 32.313 32.3V200.23a32.351 32.351 0 0 1-32.312 32.3Zm140.445-33.006a3.078 3.078 0 0 1-3.082-3.07V179.02a3.08 3.08 0 0 1 3.082-3.08h47.18a3.077 3.077 0 0 1 3.07 3.08v17.434a3.075 3.075 0 0 1-3.07 3.07Zm-113.141 0a22.643 22.643 0 0 1-20.648-12.767 26.835 26.835 0 0 1 1.891-26.579l.02-.019c.094-.143.2-.285.3-.428.273-.409.559-.827.871-1.245a70.651 70.651 0 0 1 52.277-28.5 62.967 62.967 0 0 1 3.543-.095 67.043 67.043 0 0 1 15.211 1.777 71.594 71.594 0 0 1 14.734 5.219 71.248 71.248 0 0 1 26.73 22.149 27.371 27.371 0 0 1 2.672 27.53 22.363 22.363 0 0 1-20.629 12.956Zm-3.719-30.372v.01l-.047.058c-.191.256-.371.5-.531.741v.028l-.258.371a8.365 8.365 0 0 0-.715 8.261 5.526 5.526 0 0 0 5.27 3.1h76.969a6.062 6.062 0 0 0 3.156-.761 4.988 4.988 0 0 0 1.949-2.243 8.485 8.485 0 0 0 .715-4.524 9.18 9.18 0 0 0-1.7-4.468 54.088 54.088 0 0 0-42.969-22.007c-.93 0-1.75.019-2.508.066h-.012a53.055 53.055 0 0 0-39.318 21.368Zm116.859-5.01a3.08 3.08 0 0 1-3.082-3.079v-17.425a3.08 3.08 0 0 1 3.082-3.08h47.18a3.077 3.077 0 0 1 3.07 3.08v17.425a3.077 3.077 0 0 1-3.07 3.079Zm-.59-38.7a2.5 2.5 0 0 1-2.492-2.5V82.066a2.5 2.5 0 0 1 2.492-2.5h48.348a2.5 2.5 0 0 1 2.492 2.5v40.876a2.5 2.5 0 0 1-2.492 2.5ZM50.981 74.213c0-28.233 22.09-51.209 49.242-51.209s49.258 22.976 49.258 51.209a52.579 52.579 0 0 1-3.867 19.906 51.257 51.257 0 0 1-10.551 16.274 49.07 49.07 0 0 1-15.656 11 47.257 47.257 0 0 1-19.184 4.041c-27.151 0-49.241-22.976-49.241-51.22Zm17.977 0c0 18.033 14.031 32.711 31.266 32.711 17.262 0 31.3-14.678 31.3-32.711s-14.039-32.7-31.3-32.7c-17.234 0-31.265 14.668-31.265 32.701Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 883",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  hn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "online-registration-back_svg__a" },
          e.createElement("path", {
            "data-name": "Rect\\xE1ngulo 1600",
            fill: "#2781b0",
            d: "M0 0h256v199.269H0z",
          })
        )
      ),
      e.createElement("path", {
        "data-name": "Rect\\xE1ngulo 1602",
        fill: "none",
        d: "M0 0h256v256H0z",
      }),
      e.createElement(
        "g",
        { "data-name": "Grupo 2521" },
        e.createElement(
          "g",
          {
            "data-name": "Grupo 2520",
            clipPath: "url(#online-registration-back_svg__a)",
            fill: "#2781b0",
            transform: "translate(0 22.634)",
          },
          e.createElement("path", {
            "data-name": "Trazado 7245",
            d: "M110.325 123.433a78.259 78.259 0 0 0 .768 10.936h13.5v-21.871h-13.5a78.271 78.271 0 0 0-.768 10.936Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 7246",
            d: "M112.411 105.696h12.187V85.56c-4.871 2.382-9.583 9.676-12.187 20.141",
          }),
          e.createElement("path", {
            "data-name": "Trazado 7247",
            d: "M124.599 161.316v-20.141h-12.188c2.6 10.464 7.316 17.761 12.187 20.141",
          }),
          e.createElement("path", {
            "data-name": "Trazado 7248",
            d: "M162.4 105.7a38.951 38.951 0 0 0-18.91-17.748 52.941 52.941 0 0 1 7.113 17.748Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 7249",
            d: "M103.53 123.433a85.92 85.92 0 0 1 .711-10.937H90.854a38.2 38.2 0 0 0 0 21.873h13.384a86.293 86.293 0 0 1-.711-10.936",
          }),
          e.createElement("path", {
            "data-name": "Trazado 7250",
            d: "M112.5 87.95a38.954 38.954 0 0 0-18.909 17.748h11.8a53.038 53.038 0 0 1 7.113-17.748",
          }),
          e.createElement("path", {
            "data-name": "Trazado 7251",
            d: "M93.597 141.173a38.956 38.956 0 0 0 18.909 17.748 52.942 52.942 0 0 1-7.113-17.748Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 7252",
            d: "M151.757 112.499a84.331 84.331 0 0 1 0 21.873h13.385a38.182 38.182 0 0 0 0-21.873Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 7253",
            d: "M143.491 158.922a38.962 38.962 0 0 0 18.91-17.748h-11.8a52.968 52.968 0 0 1-7.113 17.748",
          }),
          e.createElement("path", {
            "data-name": "Trazado 7254",
            d: "M192.789 69.359c.12-1.539.177-2.98.177-4.393a64.966 64.966 0 0 0-129.932 0c0 1.413.058 2.854.177 4.393a64.967 64.967 0 0 0 1.754 129.91h126.069a64.967 64.967 0 0 0 1.754-129.91Zm-21.947 69.376a3.373 3.373 0 0 1-.2.561 45.463 45.463 0 0 1-85.276 0 3.126 3.126 0 0 1-.2-.561 44.686 44.686 0 0 1 0-30.59 3.233 3.233 0 0 1 .2-.561 45.463 45.463 0 0 1 85.277 0 3.128 3.128 0 0 1 .2.561 44.711 44.711 0 0 1 0 30.59",
          }),
          e.createElement("path", {
            "data-name": "Trazado 7255",
            d: "M131.398 141.173v20.141c4.871-2.38 9.583-9.677 12.187-20.141Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 7256",
            d: "M131.398 85.557v20.141h12.187c-2.6-10.464-7.316-17.758-12.187-20.141",
          }),
          e.createElement("path", {
            "data-name": "Trazado 7257",
            d: "M145.671 123.433a78.26 78.26 0 0 0-.769-10.937h-13.5v21.872h13.5a78.262 78.262 0 0 0 .769-10.936Z",
          })
        )
      )
    );
  },
  dn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Uni\\xF3n 43",
          d: "M65.865 256a8.03 8.03 0 0 1-8.029-8.035 8.03 8.03 0 0 1 8.029-8.034h163.867a8.035 8.035 0 0 1 8.033 8.034 8.035 8.035 0 0 1-8.033 8.035Zm-57.834 0a8.03 8.03 0 0 1-8.029-8.035 8.03 8.03 0 0 1 8.029-8.034h29.99a8.035 8.035 0 0 1 8.033 8.034A8.035 8.035 0 0 1 38.021 256Zm57.834-28.917a8.03 8.03 0 0 1-8.029-8.034 8.03 8.03 0 0 1 8.029-8.035h163.867a8.035 8.035 0 0 1 8.033 8.035 8.035 8.035 0 0 1-8.033 8.034Zm-57.834 0a8.03 8.03 0 0 1-8.029-8.034 8.03 8.03 0 0 1 8.029-8.035h29.99a8.035 8.035 0 0 1 8.033 8.035 8.035 8.035 0 0 1-8.033 8.034Zm163.459-28.384H142a8.173 8.173 0 0 1-2.906-.533H65.865a8.03 8.03 0 0 1-8.029-8.034 8.03 8.03 0 0 1 8.029-8.035h34.445a8.134 8.134 0 0 1-3.521-2.068L76 159.218a8.128 8.128 0 0 1-2.377-5.208 8.128 8.128 0 0 1 1.641-5.474l12.373-16.585a68.993 68.993 0 0 1-2.988-7.079l-20.311-2.926a8.163 8.163 0 0 1-7.025-8.15V84.375a8.167 8.167 0 0 1 7.025-8.15l20.311-2.926a70.215 70.215 0 0 1 2.988-7.073L75.258 49.792a8.178 8.178 0 0 1-1.635-5.48 8.113 8.113 0 0 1 2.381-5.2l20.781-20.807a8.141 8.141 0 0 1 5.779-2.393 8.1 8.1 0 0 1 4.93 1.657l16.5 12.373a69.937 69.937 0 0 1 7.09-2.972l2.914-20.333a8.146 8.146 0 0 1 2.723-5.016 8.155 8.155 0 0 1 5.428-2h29.572a8.159 8.159 0 0 1 5.342 2 8.138 8.138 0 0 1 2.727 5.016l2.92 20.333a72.131 72.131 0 0 1 7.086 2.972l16.439-12.373a8.039 8.039 0 0 1 4.9-1.657 8.109 8.109 0 0 1 5.766 2.393l20.8 20.958a8.142 8.142 0 0 1 2.381 5.2 8.135 8.135 0 0 1-1.633 5.474l-12.314 16.434a71.975 71.975 0 0 1 2.994 7.079l20.334 2.926a8.147 8.147 0 0 1 4.957 2.757 8.174 8.174 0 0 1 1.971 5.318v29.5a8.192 8.192 0 0 1-1.971 5.387 8.161 8.161 0 0 1-5.039 2.757l-20.34 2.926a67.225 67.225 0 0 1-2.971 7.079l12.234 16.353a8.209 8.209 0 0 1 1.627 5.486 8.133 8.133 0 0 1-2.367 5.208l-20.8 20.8a8.119 8.119 0 0 1-3.8 2.149h16.77a8.035 8.035 0 0 1 8.033 8.035 8.035 8.035 0 0 1-8.033 8.034h-55.26a8.157 8.157 0 0 1-2.9.533Zm37.543-16.6a8.118 8.118 0 0 1-2.953-1.413l-16.418-12.3a71.877 71.877 0 0 1-7.084 2.972l-1.547 10.745Zm-44.514 0 2.627-17.766a8.133 8.133 0 0 1 5.891-6.691 57.883 57.883 0 0 0 13.561-5.59 8.188 8.188 0 0 1 4.322-1.228 8.164 8.164 0 0 1 4.328 1.234l.039.029 14.875 11.371 10.77-10.995-11.168-14.9a8.122 8.122 0 0 1-1.275-4.368 8.1 8.1 0 0 1 1.264-4.35 62.735 62.735 0 0 0 5.26-13.358l.006-.011a8.194 8.194 0 0 1 6.7-5.868l18.439-2.676-.215-15.16-18.449-2.676a8.116 8.116 0 0 1-6.684-5.868 63.168 63.168 0 0 0-5.6-13.532 8.106 8.106 0 0 1 .578-8.961l11.367-14.876-10.984-10.774-14.9 11.168a8.1 8.1 0 0 1-4.594 1.413 8.215 8.215 0 0 1-4.066-1.083 57.452 57.452 0 0 0-13.562-5.584h-.006a8.154 8.154 0 0 1-5.891-6.7l-2.682-18.438h-15.23l-2.676 18.143a8.113 8.113 0 0 1-5.873 6.679 58.28 58.28 0 0 0-13.592 5.59 8.08 8.08 0 0 1-4.309 1.24 8.15 8.15 0 0 1-4.322-1.245l-.039-.029-14.877-11.371-10.988 10.995 11.395 14.911a8.111 8.111 0 0 1 1.264 4.362 8.137 8.137 0 0 1-1.252 4.344 64.4 64.4 0 0 0-5.283 13.509v.006a8.131 8.131 0 0 1-6.68 5.874l-18.449 2.688v15.229l18.139 2.676a8.163 8.163 0 0 1 6.678 5.874 63.854 63.854 0 0 0 5.59 13.509 8.183 8.183 0 0 1 1.258 4.356 8.161 8.161 0 0 1-1.264 4.368l-.029.035-11.365 14.864 10.988 10.775 14.9-11.168a8.127 8.127 0 0 1 4.58-1.408 8.129 8.129 0 0 1 4.063 1.089 58.074 58.074 0 0 0 13.59 5.584h.006a8.142 8.142 0 0 1 5.873 6.691l2.629 18.073Zm-31.975 0-1.551-10.745a68.569 68.569 0 0 1-7.08-2.972l-16.416 12.373a8.134 8.134 0 0 1-2.682 1.344ZM8.03 198.168a8.03 8.03 0 0 1-8.029-8.034 8.03 8.03 0 0 1 8.029-8.035h29.99a8.035 8.035 0 0 1 8.033 8.035 8.035 8.035 0 0 1-8.033 8.034Zm0-28.917a8.03 8.03 0 0 1-8.029-8.035 8.025 8.025 0 0 1 8.029-8.029h29.99a8.03 8.03 0 0 1 8.033 8.029 8.035 8.035 0 0 1-8.033 8.035Zm0-28.917a8.03 8.03 0 0 1-8.029-8.035 8.025 8.025 0 0 1 8.029-8.029h29.99a8.03 8.03 0 0 1 8.033 8.029 8.035 8.035 0 0 1-8.033 8.035Zm133.771-5.561a38.591 38.591 0 0 1-12.279-8.278 38.613 38.613 0 0 1-8.279-12.286 38.374 38.374 0 0 1-3.035-15.038 38.381 38.381 0 0 1 3.035-15.044 38.551 38.551 0 0 1 8.279-12.286 38.512 38.512 0 0 1 12.279-8.284 38.369 38.369 0 0 1 15.037-3.035 38.407 38.407 0 0 1 15.051 3.035 38.476 38.476 0 0 1 12.291 8.284 38.551 38.551 0 0 1 8.279 12.286 38.381 38.381 0 0 1 3.035 15.044 38.374 38.374 0 0 1-3.035 15.038 38.613 38.613 0 0 1-8.279 12.286 38.554 38.554 0 0 1-12.291 8.278 38.408 38.408 0 0 1-15.051 3.041 38.4 38.4 0 0 1-15.038-3.045Zm6.354-56.19a22.131 22.131 0 0 0-7.094 4.791 22.181 22.181 0 0 0-4.785 7.1 22.193 22.193 0 0 0-1.754 8.7 22.187 22.187 0 0 0 1.754 8.689 22.221 22.221 0 0 0 4.785 7.1 22.2 22.2 0 0 0 7.094 4.785 22.166 22.166 0 0 0 8.684 1.755 22.233 22.233 0 0 0 8.7-1.755 22.259 22.259 0 0 0 7.1-4.785 22.268 22.268 0 0 0 4.779-7.1 22.222 22.222 0 0 0 1.754-8.689 22.228 22.228 0 0 0-1.754-8.7 22.228 22.228 0 0 0-4.779-7.1 22.186 22.186 0 0 0-7.1-4.791 22.232 22.232 0 0 0-8.7-1.755 22.166 22.166 0 0 0-8.683 1.751ZM8.03 111.416a8.03 8.03 0 0 1-8.029-8.035 8.025 8.025 0 0 1 8.029-8.029h29.99a8.03 8.03 0 0 1 8.033 8.029 8.035 8.035 0 0 1-8.033 8.035Zm0-28.917a8.03 8.03 0 0 1-8.029-8.034 8.025 8.025 0 0 1 8.029-8.029h29.99a8.03 8.03 0 0 1 8.033 8.029 8.035 8.035 0 0 1-8.033 8.034Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 925",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  sn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          {
            "data-name": "watch-icn",
            transform: "translate(4333.082 464.859)",
          },
          e.createElement(
            "g",
            { "data-name": "Grupo 1495" },
            e.createElement("path", {
              "data-name": "Trazado 345",
              d: "M-4237.731-461.928h-70.438a21.991 21.991 0 0 0-21.981 21.98v72.661a5.084 5.084 0 0 0 5.083 5.084h7.4a5.09 5.09 0 0 0 5.1-5.084v-57.382a19.671 19.671 0 0 1 19.665-19.672h55.169a5.081 5.081 0 0 0 5.076-5.084v-7.416a5.081 5.081 0 0 0-5.074-5.087Z",
            }),
            e.createElement("path", {
              "data-name": "Trazado 345 - Contorno",
              d: "M-4308.169-464.859h70.439a8.021 8.021 0 0 1 8.008 8.015v7.416a8.021 8.021 0 0 1-8.008 8.015h-55.17a16.756 16.756 0 0 0-16.733 16.74v57.386a8.032 8.032 0 0 1-8.03 8.015h-7.4a8.023 8.023 0 0 1-8.014-8.015v-72.661a24.94 24.94 0 0 1 24.908-24.911Zm70.439 17.583a2.151 2.151 0 0 0 2.145-2.152v-7.416a2.151 2.151 0 0 0-2.145-2.156h-70.439a19.071 19.071 0 0 0-19.05 19.049v72.661a2.154 2.154 0 0 0 2.151 2.153h7.4a2.163 2.163 0 0 0 2.168-2.153v-57.386a22.625 22.625 0 0 1 22.6-22.6Z",
            }),
            e.createElement("path", {
              "data-name": "Trazado 346",
              d: "M-4101.983-461.928h-77.172a5.088 5.088 0 0 0-5.09 5.084v7.416a5.088 5.088 0 0 0 5.09 5.084h61.9a19.677 19.677 0 0 1 19.674 19.672v57.386a5.085 5.085 0 0 0 5.089 5.084h7.4a5.076 5.076 0 0 0 5.074-5.084v-72.661a21.977 21.977 0 0 0-21.965-21.981Z",
            }),
            e.createElement("path", {
              "data-name": "Trazado 346 - Contorno",
              d: "M-4179.155-464.859h77.172a24.935 24.935 0 0 1 24.9 24.911v72.661a8.02 8.02 0 0 1-8.006 8.015h-7.4a8.028 8.028 0 0 1-8.021-8.015v-57.386a16.761 16.761 0 0 0-16.743-16.74h-61.9a8.027 8.027 0 0 1-8.021-8.015v-7.416a8.027 8.027 0 0 1 8.019-8.015Zm94.067 99.725a2.15 2.15 0 0 0 2.143-2.153v-72.661A19.066 19.066 0 0 0-4101.983-459h-77.172a2.158 2.158 0 0 0-2.158 2.153v7.416a2.158 2.158 0 0 0 2.158 2.152h61.9a22.63 22.63 0 0 1 22.605 22.6v57.386a2.158 2.158 0 0 0 2.158 2.153Z",
            }),
            e.createElement("path", {
              "data-name": "Trazado 347",
              d: "M-4085.088-313.79h-7.4a5.085 5.085 0 0 0-5.089 5.084v59.661a19.685 19.685 0 0 1-19.674 19.68h-61.9a5.086 5.086 0 0 0-5.094 5.075v7.424a5.085 5.085 0 0 0 5.09 5.075h77.172a21.972 21.972 0 0 0 21.97-21.98v-74.935a5.075 5.075 0 0 0-5.075-5.084Z",
            }),
            e.createElement("path", {
              "data-name": "Trazado 347 - Contorno",
              d: "M-4092.489-316.721h7.4a8.02 8.02 0 0 1 8.006 8.015v74.935a24.935 24.935 0 0 1-24.9 24.911h-77.172a8.023 8.023 0 0 1-8.021-8.006v-7.424a8.023 8.023 0 0 1 8.021-8.007h61.9a16.765 16.765 0 0 0 16.743-16.749v-59.661a8.027 8.027 0 0 1 8.023-8.014Zm-9.494 102a19.065 19.065 0 0 0 19.039-19.049v-74.935a2.15 2.15 0 0 0-2.143-2.153h-7.4a2.158 2.158 0 0 0-2.158 2.153v59.661a22.634 22.634 0 0 1-22.605 22.611h-61.9a2.153 2.153 0 0 0-2.158 2.144v7.424a2.153 2.153 0 0 0 2.158 2.143Z",
            }),
            e.createElement("path", {
              "data-name": "Trazado 348",
              d: "M-4237.731-229.365h-55.169a19.679 19.679 0 0 1-19.665-19.68v-59.661a5.089 5.089 0 0 0-5.1-5.084h-7.4a5.083 5.083 0 0 0-5.083 5.084v74.935a21.985 21.985 0 0 0 21.979 21.981h70.439a5.079 5.079 0 0 0 5.076-5.075v-7.425a5.079 5.079 0 0 0-5.077-5.075Z",
            }),
            e.createElement("path", {
              "data-name": "Trazado 348 - Contorno",
              d: "M-4237.73-208.859h-70.439a24.94 24.94 0 0 1-24.913-24.911v-74.935a8.023 8.023 0 0 1 8.014-8.015h7.4a8.032 8.032 0 0 1 8.03 8.015v59.661a16.76 16.76 0 0 0 16.733 16.749h55.169a8.016 8.016 0 0 1 8.008 8.007v7.424a8.016 8.016 0 0 1-8.002 8.005Zm-87.338-102a2.154 2.154 0 0 0-2.151 2.153v74.935a19.071 19.071 0 0 0 19.05 19.049h70.439a2.147 2.147 0 0 0 2.145-2.143v-7.424a2.147 2.147 0 0 0-2.145-2.144h-55.17a22.629 22.629 0 0 1-22.6-22.611v-59.661a2.163 2.163 0 0 0-2.168-2.153Z",
            })
          ),
          e.createElement("ellipse", {
            "data-name": "Elipse 56",
            cx: 56.415,
            cy: 56.414,
            rx: 56.415,
            ry: 56.414,
            transform: "translate(-4260.489 -392.445)",
          }),
          e.createElement("path", {
            "data-name": "Elipse 56 - Contorno",
            d: "M-4205.074-393.376a51.345 51.345 0 1 1-51.346 51.345 51.4 51.4 0 0 1 51.346-51.345Zm0 96.827a45.482 45.482 0 1 0-45.483-45.482 45.535 45.535 0 0 0 45.483 45.482Z",
          })
        ),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 890",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  pn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path" },
          e.createElement("rect", {
            id: "Rectángulo_1007",
            "data-name": "Rectángulo 1007",
            width: "256",
            height: "174.517",
            fill: "none",
          })
        ),
        e.createElement(
          "clipPath",
          { id: "clip-New_Service_Account_Created" },
          e.createElement("rect", { width: "256", height: "256" })
        )
      ),
      e.createElement(
        "g",
        {
          id: "New_Service_Account_Created",
          "data-name": "New Access Key Created",
          clipPath: "url(#clip-New_Service_Account_Created)",
        },
        e.createElement("rect", { width: "256", height: "256", fill: "#fff" }),
        e.createElement(
          "g",
          {
            id: "Create_Service_Account_Icon",
            "data-name": "Create Access Key Icon",
          },
          e.createElement("rect", {
            id: "Rectángulo_1006",
            "data-name": "Rectángulo 1006",
            width: "256",
            height: "256",
            fill: "none",
          }),
          e.createElement(
            "g",
            {
              id: "Grupo_2394",
              "data-name": "Grupo 2394",
              transform: "translate(0 41.709)",
            },
            e.createElement(
              "g",
              {
                id: "Grupo_2393",
                "data-name": "Grupo 2393",
                transform: "translate(0 -0.001)",
              },
              e.createElement("path", {
                id: "Trazado_7132",
                "data-name": "Trazado 7132",
                d: "M209.54,0a46.254,46.254,0,0,0-29.083,10.24H27.839a27.482,27.482,0,0,0-10.808,2.2A28.109,28.109,0,0,0,2.2,27.269,27.507,27.507,0,0,0,0,38.078v108.6a27.507,27.507,0,0,0,2.2,10.809,28.112,28.112,0,0,0,14.834,14.834,27.5,27.5,0,0,0,10.808,2.2H195.985a27.5,27.5,0,0,0,10.808-2.2,28.11,28.11,0,0,0,14.833-14.834,27.486,27.486,0,0,0,2.2-10.809v-56A46.462,46.462,0,0,0,209.54,0m-5.828,67.986V53.635H189.362V39.283h14.351V24.933h14.351V39.283h14.351V53.635H218.064V67.985Zm-69.071,1.7h34.67a46.667,46.667,0,0,0,17.844,17.486H134.641a8.743,8.743,0,1,1,0-17.486M68.625,23.35h0c19.765,0,35.837,16.716,35.837,37.255a38.068,38.068,0,0,1-2.816,14.482,37.124,37.124,0,0,1-7.674,11.841,35.566,35.566,0,0,1-11.39,8A34.44,34.44,0,0,1,68.65,97.872h-.025C48.872,97.872,32.8,81.148,32.8,60.606S48.872,23.35,68.625,23.35m41.452,122.5a16.272,16.272,0,0,1-14.76,9.426H38.868a16.474,16.474,0,0,1-14.823-9.289,19.517,19.517,0,0,1,1.376-19.337l.013-.014c.051-.08.111-.164.162-.236l.056-.078c.24-.358.435-.637.635-.9a51.4,51.4,0,0,1,38.031-20.735c.806-.046,1.673-.07,2.578-.07v0a48.828,48.828,0,0,1,11.065,1.3,52.471,52.471,0,0,1,10.723,3.8,51.858,51.858,0,0,1,19.446,16.116,19.952,19.952,0,0,1,1.946,20.028m85.765,8.641h-61.2a8.743,8.743,0,1,1,0-17.486h61.2a8.743,8.743,0,1,1,0,17.486m0-33.223h-61.2a8.743,8.743,0,1,1,0-17.485h61.2a8.743,8.743,0,1,1,0,17.485m13.976-38.1a36.707,36.707,0,1,1,36.707-36.707,36.707,36.707,0,0,1-36.707,36.707",
                transform: "translate(0 0.001)",
                fill: "#4ccb92",
              })
            )
          )
        )
      )
    );
  },
  vn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "heal-icn",
          d: "m157.546 239.085-4.729-4.747-24.864-24.809-29.5 29.555a57.519 57.519 0 0 1-81.482 0 57.729 57.729 0 0 1 0-81.769l29.5-29.547-24.864-24.927-4.635-4.629a57.738 57.738 0 0 1 0-81.777c21.764-21.913 59.749-21.913 81.482 0l4.729 4.645 24.77 24.911 29.593-29.555c21.764-21.913 59.718-21.913 81.482 0a57.738 57.738 0 0 1 0 81.777l-29.5 29.555 24.864 24.793 4.635 4.755a57.718 57.718 0 1 1-81.482 81.769Zm13.654-23.036 4.572 4.629c12.15 12.028 33.006 12.028 45.031 0a31.967 31.967 0 0 0 0-44.957l-4.791-4.747ZM35.261 175.721a31.814 31.814 0 0 0 0 44.957c11.962 12.028 32.943 12.028 44.968 0l29.471-29.547-45-45.09Zm22.954-72.88 6.482 6.52 81.638 81.769 6.482 6.5 44.968-45.074-6.482-6.52-81.603-81.63-6.514-6.52Zm117.556-67.992-29.436 29.557 44.965 44.955 29.5-29.555a31.6 31.6 0 0 0 9.238-22.541 31.28 31.28 0 0 0-9.238-22.416 32.381 32.381 0 0 0-45.031 0Zm-140.51 0a31.211 31.211 0 0 0-9.3 22.416 31.525 31.525 0 0 0 9.3 22.541l4.729 4.762 44.843-45.09-4.6-4.629a31.61 31.61 0 0 0-44.968 0Zm105.562 118.465a12.731 12.731 0 1 1 12.746 12.892 12.816 12.816 0 0 1-12.746-12.892Zm-25.616-25.546a12.808 12.808 0 1 1 12.745 12.773 12.747 12.747 0 0 1-12.744-12.773Zm-25.49-25.679a12.746 12.746 0 1 1 12.714 12.9 12.8 12.8 0 0 1-12.714-12.901Z",
        }),
        e.createElement("path", {
          "data-name": "heal-icn - Contorno",
          d: "M198.286 256.5a57.755 57.755 0 0 1-41.094-17.062l-4.729-4.747-24.509-24.455-29.146 29.2a57.907 57.907 0 0 1-82.189 0A57.353 57.353 0 0 1 3.9 220.544a58.292 58.292 0 0 1-4.4-22.407 57.536 57.536 0 0 1 17.121-41.177l29.144-29.192-24.512-24.573-4.634-4.629a58.238 58.238 0 0 1 0-82.486A54.985 54.985 0 0 1 35.647 3.644 59.5 59.5 0 0 1 46.5.536a61.384 61.384 0 0 1 22.457 0A59.431 59.431 0 0 1 79.8 3.644a54.885 54.885 0 0 1 19.007 12.437l4.73 4.646 24.417 24.555 29.238-29.2a54.994 54.994 0 0 1 19.023-12.438A59.465 59.465 0 0 1 187.061.536a61.355 61.355 0 0 1 22.451 0 59.465 59.465 0 0 1 10.846 3.108 55 55 0 0 1 19.024 12.439 58.238 58.238 0 0 1 0 82.485l-29.143 29.2 24.515 24.445 4.631 4.751a57.534 57.534 0 0 1 17.115 41.173 58.292 58.292 0 0 1-4.4 22.407 58.2 58.2 0 0 1-53.811 35.956Zm-70.334-47.678 25.218 25.162 4.73 4.748a57.218 57.218 0 0 0 80.775-81.061l-.006-.006-4.632-4.752-25.216-25.144 29.852-29.909a57.238 57.238 0 0 0 0-81.069 54.007 54.007 0 0 0-18.681-12.217 58.461 58.461 0 0 0-10.663-3.055 60.354 60.354 0 0 0-22.084 0 58.461 58.461 0 0 0-10.663 3.055A54 54 0 0 0 157.9 16.788l-29.948 29.91-25.124-25.265-4.728-4.646A53.891 53.891 0 0 0 79.432 4.574a58.431 58.431 0 0 0-10.663-3.055 60.384 60.384 0 0 0-22.09 0 58.5 58.5 0 0 0-10.666 3.055 54 54 0 0 0-18.686 12.214 57.238 57.238 0 0 0 0 81.07l4.636 4.63 25.217 25.28-29.851 29.9A56.544 56.544 0 0 0 .5 198.137a57.3 57.3 0 0 0 4.327 22.024 56.362 56.362 0 0 0 12.5 18.568 57.019 57.019 0 0 0 80.776 0Zm70.381 21.377a33.611 33.611 0 0 1-12.273-2.293 31.079 31.079 0 0 1-10.641-6.876l-4.92-4.982 45.513-45.78 5.146 5.1a31.859 31.859 0 0 1 6.984 10.44 32.695 32.695 0 0 1-6.983 35.226 30.651 30.651 0 0 1-10.571 6.877 33.426 33.426 0 0 1-12.255 2.288Zm-22.209-9.874a30.085 30.085 0 0 0 10.3 6.653 32.98 32.98 0 0 0 23.8 0 29.659 29.659 0 0 0 10.229-6.654 31.294 31.294 0 0 0 0-44.25l-4.435-4.394-44.118 44.37Zm-118.4 9.874a33.463 33.463 0 0 1-12.264-2.293 30.418 30.418 0 0 1-10.554-6.879 32.165 32.165 0 0 1 0-45.664L64.7 145.332l45.707 45.8-29.82 29.9a30.63 30.63 0 0 1-10.593 6.874 33.555 33.555 0 0 1-12.273 2.293ZM64.7 146.75l-29.084 29.324a31.314 31.314 0 0 0 0 44.25 29.428 29.428 0 0 0 10.212 6.655 33.006 33.006 0 0 0 23.8 0 29.635 29.635 0 0 0 10.246-6.653l29.115-29.194Zm88.119 51.593-6.836-6.859-81.64-81.769-6.834-6.874 45.675-45.663 6.867 6.874 81.607 81.636 6.834 6.874Zm-93.9-95.5 6.132 6.163 81.637 81.769 6.129 6.149 44.262-44.367-6.131-6.167-81.605-81.632-6.16-6.166Zm94.65 63.863a13.334 13.334 0 0 1-13.245-13.391 13.231 13.231 0 1 1 13.245 13.391Zm0-25.664a12.316 12.316 0 0 0-12.245 12.273 12.23 12.23 0 1 0 20.867-8.667 12.1 12.1 0 0 0-8.622-3.607Zm-25.616 0a13 13 0 0 1-5.134-1.051 13.319 13.319 0 0 1-4.211-2.855 13.254 13.254 0 0 1 9.345-22.648 13.351 13.351 0 0 1 9.44 3.857 13.2 13.2 0 0 1 0 18.792 13.32 13.32 0 0 1-9.44 3.904Zm0-25.554a12.277 12.277 0 0 0 0 24.554 12.326 12.326 0 0 0 8.737-3.614 12.2 12.2 0 0 0 0-17.371 12.357 12.357 0 0 0-8.737-3.57Zm-25.522 0A13.347 13.347 0 0 1 93.1 92.729a13.255 13.255 0 0 1 22.607 9.36 13.353 13.353 0 0 1-13.276 13.398Zm0-25.664a12.3 12.3 0 0 0-12.214 12.265 12.246 12.246 0 1 0 24.49 0 12.331 12.331 0 0 0-12.277-12.265Zm88.869 20.245-45.672-45.663 29.788-29.909a30.775 30.775 0 0 1 10.606-6.947 33.717 33.717 0 0 1 24.527 0 30.776 30.776 0 0 1 10.607 6.947 31.725 31.725 0 0 1 6.981 10.426 32.714 32.714 0 0 1-6.983 35.237Zm-44.259-45.663 44.262 44.25 29.145-29.2a31.714 31.714 0 0 0 6.765-34.15 30.732 30.732 0 0 0-6.764-10.1 29.784 29.784 0 0 0-10.266-6.723 32.717 32.717 0 0 0-23.792 0 29.782 29.782 0 0 0-10.265 6.723ZM39.989 85.278l-5.083-5.119a32.15 32.15 0 0 1 0-45.661 32.11 32.11 0 0 1 45.679 0l4.952 4.98Zm17.725-59.32a30.554 30.554 0 0 0-22.095 9.24l-.006.006a31.314 31.314 0 0 0 0 44.247l4.376 4.408 44.138-44.381-4.256-4.28a30.629 30.629 0 0 0-22.157-9.24Z",
          fill: "rgba(0,0,0,0)",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 879",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  fn = function (e) {
    return a.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 33.055 39.954",
        },
        e
      ),
      a.createElement("path", {
        id: "Trazado_6934",
        "data-name": "Trazado 6934",
        d: "M2.663,53.686,0,55.018V78.391l2.663,1.324.016-.019V53.7l-.016-.018",
        transform: "translate(0 -46.754)",
        fill: "#8c3123",
      }),
      a.createElement("path", {
        id: "Trazado_6935",
        "data-name": "Trazado 6935",
        d: "M34.876,76.323,20.624,79.715V53.686L34.876,57V76.323",
        transform: "translate(-17.961 -46.754)",
        fill: "#e05243",
      }),
      a.createElement("path", {
        id: "Trazado_6936",
        "data-name": "Trazado 6936",
        d: "M81.178,125.086l6.045.77.038-.088.034-9.913-.072-.077-6.045.758v8.55",
        transform: "translate(-70.696 -100.829)",
        fill: "#8c3123",
      }),
      a.createElement("path", {
        id: "Trazado_6937",
        "data-name": "Trazado 6937",
        d: "M128,76.361l13.864,3.362.022-.035V53.709l-.022-.023L128,57.043V76.361",
        transform: "translate(-111.469 -46.754)",
        fill: "#8c3123",
      }),
      a.createElement("path", {
        id: "Trazado_6938",
        "data-name": "Trazado 6938",
        d: "M134.043,125.086l-6.047.77V115.778l6.047.758v8.55",
        transform: "translate(-111.469 -100.829)",
        fill: "#e05243",
      }),
      a.createElement("path", {
        id: "Trazado_6939",
        "data-name": "Trazado 6939",
        d: "M93.27,78.958l-6.047,1.1-6.045-1.1,6.038-1.583,6.055,1.583",
        transform: "translate(-70.696 -67.384)",
        fill: "#5e1f18",
      }),
      a.createElement("path", {
        id: "Trazado_6940",
        "data-name": "Trazado 6940",
        d: "M93.27,212.319l-6.047-1.109-6.045,1.109L87.216,214l6.054-1.685",
        transform: "translate(-70.696 -183.938)",
        fill: "#f2b0a9",
      }),
      a.createElement("path", {
        id: "Trazado_6941",
        "data-name": "Trazado 6941",
        d: "M81.178,11.573l6.045-1.5.049-.015V.04L87.223,0,81.178,3.023v8.55",
        transform: "translate(-70.696)",
        fill: "#8c3123",
      }),
      a.createElement("path", {
        id: "Trazado_6942",
        "data-name": "Trazado 6942",
        d: "M134.043,11.573,128,10.077V0l6.047,3.023v8.55",
        transform: "translate(-111.469)",
        fill: "#e05243",
      }),
      a.createElement("path", {
        id: "Trazado_6943",
        "data-name": "Trazado 6943",
        d: "M87.219,231.378l-6.046-3.022v-8.55l6.046,1.5.089.1-.024,9.8-.065.174",
        transform: "translate(-70.692 -191.424)",
        fill: "#8c3123",
      }),
      a.createElement("path", {
        id: "Trazado_6944",
        "data-name": "Trazado 6944",
        d: "M128,231.378l6.046-3.022v-8.55L128,221.3v10.077",
        transform: "translate(-111.469 -191.424)",
        fill: "#e05243",
      }),
      a.createElement("path", {
        id: "Trazado_6945",
        "data-name": "Trazado 6945",
        d: "M235.367,53.686l2.664,1.332V78.391l-2.664,1.331V53.686",
        transform: "translate(-204.976 -46.754)",
        fill: "#e05243",
      })
    );
  },
  En = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          d: "M19.805 108.063c-26.4 0-26.4 40.032 0 40.032h167.684l-22.739 22.668c-18.656 18.622 9.725 46.922 28.382 28.316l56.873-56.731a19.991 19.991 0 0 0 0-28.548l-56.877-56.716c-18.656-18.6-47.038 9.684-28.382 28.3l22.743 22.679H19.805Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 863",
          fill: "none",
          d: "M.003 0h256v256h-256z",
        })
      )
    );
  },
  un = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          version: "1.1",
          id: "Layer_1",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "g",
        null,
        e.createElement(
          "defs",
          null,
          e.createElement("rect", {
            id: "SVGID_1_",
            x: "2.6",
            y: "47.4",
            width: "250.4",
            height: "161.2",
          })
        ),
        e.createElement(
          "g",
          null,
          e.createElement("path", {
            d: "M127.8,95.5c-18,0-32.5,14.6-32.5,32.5c0,18,14.6,32.5,32.5,32.5l0,0\n\t\t\tc18,0,32.5-14.6,32.5-32.5C160.3,110,145.8,95.5,127.8,95.5",
            fill: "currentcolor",
          }),
          e.createElement("path", {
            d: "M248.2,112C204.1,45.5,114.5,27.4,48,71.4C31.9,82.1,18.1,95.9,7.5,112\n\t\t\tc-6.5,9.7-6.5,22.3,0,32c44.1,66.5,133.7,84.6,200.1,40.5c16.1-10.7,29.9-24.5,40.5-40.5C254.6,134.3,254.6,121.7,248.2,112\n\t\t\t M127.8,181.2c-29.4,0-53.2-23.8-53.2-53.2s23.8-53.2,53.2-53.2S181,98.6,181,128l0,0C181,157.4,157.2,181.2,127.8,181.2",
            fill: "currentcolor",
          })
        )
      )
    );
  },
  gn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          viewBox: "0 0 256 256",
          fill: "currentcolor",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path" },
          e.createElement("rect", {
            id: "Rectángulo_1024",
            "data-name": "Rectángulo 1024",
            width: "256",
            height: "255.998",
            fill: "none",
          })
        ),
        e.createElement(
          "clipPath",
          { id: "clip-Enable_Bucket_Quota" },
          e.createElement("rect", { width: "256", height: "256" })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Enable_Bucket_Quota",
          "data-name": "Enable Bucket Quota",
          clipPath: "url(#clip-Enable_Bucket_Quota)",
        },
        e.createElement("rect", { width: "256", height: "256", fill: "#fff" }),
        e.createElement(
          "g",
          {
            id: "Enable_Bucket_Quota_icon",
            "data-name": "Enable Bucket Quota icon",
          },
          e.createElement(
            "g",
            { id: "Grupo_2411", "data-name": "Grupo 2411" },
            e.createElement("path", {
              id: "Trazado_7154",
              "data-name": "Trazado 7154",
              d: "M250.852,8.773A21.516,21.516,0,0,0,233.731,0H22.263A21.507,21.507,0,0,0,5.148,8.773,25.866,25.866,0,0,0,.394,28.758c5.223,30.385,16.208,94.421,25,145.533l.015.1c4.457,26,8.336,48.644,10.616,61.787C37.988,247.665,47.17,256,57.875,256H198.129c10.712,0,19.873-8.33,21.859-19.818l10.59-61.711.077-.375,14.334-83.62.049-.243L255.6,28.758a25.8,25.8,0,0,0-4.748-19.985M37.855,98a9.546,9.546,0,0,1-9.408-7.931l-.007-.041a9.544,9.544,0,0,1,9.406-11.159H73.505A76.487,76.487,0,0,0,61.131,98ZM52.393,181.92a9.542,9.542,0,0,1-9.408-7.93l-.007-.041a9.543,9.543,0,0,1,9.406-11.158h9.537a76.056,76.056,0,0,0,13.085,19.123ZM95.5,184.747A65.491,65.491,0,0,1,166.073,74.4l-6.682,6.683a56.3,56.3,0,0,0-68.414,88.287h.016a56.4,56.4,0,0,0,68.255,8.755l6.7,6.7a65.481,65.481,0,0,1-70.445-.081m81.526-2.408-3.147-3.147L124.27,129.579l49.47-49.515,3.27-3.27,3.27,3.27a69.643,69.643,0,0,1,14.386,20.891q.409.909.789,1.828a70,70,0,0,1,0,53.585l.016-.013q-.46,1.113-.964,2.208A69.625,69.625,0,0,1,180.3,179.069Zm36.084-8.449h0a9.543,9.543,0,0,1-9.413,7.989l-11.062,0a80.263,80.263,0,0,0,11.888-18.775c.039-.085.079-.177.118-.264a9.542,9.542,0,0,1,8.469,11.047M227.4,89.971a9.542,9.542,0,0,1-9.414,7.989l-12.633,0c-.216-.509-.431-1.019-.659-1.526a80.169,80.169,0,0,0-10.75-17.566h24.04a9.544,9.544,0,0,1,9.416,11.1",
              transform: "translate(0)",
            }),
            e.createElement("path", {
              id: "Trazado_7155",
              "data-name": "Trazado 7155",
              d: "M137.27,129.555,176.915,169.2a60.81,60.81,0,0,0,0-79.259Z",
              transform: "translate(-0.011)",
            })
          )
        )
      )
    );
  },
  wn = function (e) {
    return a.createElement(
      "svg",
      T({}, e, {
        className: "min-icon",
        fill: "currentcolor",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 606.583 134.691",
      }),
      a.createElement(
        "g",
        { id: "prefix__Layer_2", "data-name": "Layer 2" },
        a.createElement(
          "g",
          { id: "prefix__Layer_1-2", "data-name": "Layer 1" },
          a.createElement("path", {
            className: "prefix__cls-1",
            d: "M79.695 95.063c0 23.03-16.763 39.628-39.848 39.628C16.763 134.69 0 118.092 0 95.063s16.763-39.628 39.847-39.628c23.085 0 39.848 16.599 39.848 39.628zm-69.582 0c0 18.083 12.806 30.339 29.734 30.339 16.929 0 29.735-12.256 29.735-30.34 0-18.081-12.806-30.338-29.735-30.338-16.928 0-29.734 12.257-29.734 30.339zM106.895 102.758v30.779H97.22V56.589h29.24c17.368 0 27.206 8.685 27.206 23.084 0 14.4-9.838 23.085-27.206 23.085zm0-37.045v27.921h19.346c11.377 0 17.368-4.617 17.368-13.96 0-9.344-5.99-13.96-17.368-13.96zM224.784 133.537h-54.632V56.589h54.082v9.07h-44.409v24.567h42.98v9.124h-42.98v25.118h44.96zM275.07 56.59c17.368 0 26.931 7.804 26.931 21.82 0 13.355-10.387 21.93-26.876 21.93h-.604l27.096 33.197h-11.982l-26.437-33.198h-9.013v33.198h-9.674V56.589zm-20.885 9.069v25.886h20.665c11.322 0 17.093-4.506 17.093-13.135 0-8.52-5.935-12.751-17.093-12.751zM384.716 133.537h-10.388l-8.464-20.996h-37.32l-8.409 20.996h-10.058l31.274-76.948h12.036zm-52.49-30.174h29.955l-14.95-37.21zM445.114 65.768h-26.217v67.769h-9.673V65.768h-26.272v-9.179h62.162zM531.566 95.063c0 23.03-16.763 39.628-39.847 39.628s-39.848-16.599-39.848-39.628 16.764-39.628 39.848-39.628 39.847 16.599 39.847 39.628zm-69.582 0c0 18.083 12.807 30.339 29.735 30.339 16.928 0 29.735-12.256 29.735-30.34 0-18.081-12.807-30.338-29.735-30.338-16.928 0-29.735 12.257-29.735 30.339zM579.652 56.59c17.368 0 26.931 7.804 26.931 21.82 0 13.355-10.388 21.93-26.876 21.93h-.605l27.096 33.197h-11.981l-26.437-33.198h-9.014v33.198h-9.673V56.589zm-20.886 9.069v25.886h20.666c11.322 0 17.093-4.506 17.093-13.135 0-8.52-5.936-12.751-17.093-12.751zM72.292.762h11.75v34.419h-11.75zM58.159 1.087l-23.85 14.566a1.06 1.06 0 01-1.106 0L9.352 1.087a3.272 3.272 0 00-1.705-.48h-.03a3.27 3.27 0 00-3.27 3.27v31.304H16.09V20.327a1.175 1.175 0 011.787-1.002l13.366 8.177a4.188 4.188 0 004.304.04l14.104-8.273a1.174 1.174 0 011.769 1.013v14.9h11.742V3.876a3.27 3.27 0 00-3.27-3.27h-.03a3.266 3.266 0 00-1.703.48zM142.742.753h-11.916v15.794a1.175 1.175 0 01-1.727 1.037L98.22 1.137A3.268 3.268 0 0096.68.753h-.02a3.27 3.27 0 00-3.27 3.27v31.158h11.82V19.64a1.174 1.174 0 011.725-1.038l31.004 16.445a3.27 3.27 0 001.533.381 3.27 3.27 0 003.27-3.27V.753zM152.279 35.173V.753h5.463v34.42zM189.208 35.926c-14.545 0-24.863-6.9-24.863-17.963C164.345 6.962 174.725 0 189.208 0c14.482 0 24.924 6.899 24.924 17.963s-10.194 17.963-24.924 17.963zm0-31.327c-10.815 0-19.145 4.724-19.145 13.364 0 8.702 8.33 13.363 19.145 13.363s19.206-4.662 19.206-13.363c0-8.64-8.392-13.364-19.206-13.364z",
          })
        )
      )
    );
  },
  Zn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { "data-name": "Select Multiple", clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          d: "M234.667 234.667v-30.486h-30.473v30.485h30.473m-91.43 0v-30.485h-30.473v30.485h30.473m-91.43 0v-30.485H21.333v30.485h30.473m182.861-91.43v-30.472h-30.473v30.473h30.473m-91.43 0v-30.473h-30.473v30.473h30.473m-91.43 0v-30.473H21.333v30.473h30.473m182.861-91.43V21.333h-30.473v30.473h30.473m-91.43 0V21.333h-30.473v30.473h30.473m-91.43 0V21.333H21.333v30.473h30.473M241.779 256h-44.7a14.225 14.225 0 0 1-14.221-14.234v-44.684a14.225 14.225 0 0 1 14.221-14.234h44.7A14.225 14.225 0 0 1 256 197.082v44.685A14.225 14.225 0 0 1 241.779 256Zm-91.43 0h-44.7a14.225 14.225 0 0 1-14.219-14.234v-44.684a14.225 14.225 0 0 1 14.221-14.234h44.7a14.225 14.225 0 0 1 14.221 14.234v44.685A14.225 14.225 0 0 1 150.349 256Zm-91.43 0h-44.7A14.233 14.233 0 0 1 0 241.766v-44.684a14.233 14.233 0 0 1 14.221-14.234h44.7a14.225 14.225 0 0 1 14.221 14.234v44.685A14.225 14.225 0 0 1 58.918 256Zm182.861-91.43h-44.7a14.222 14.222 0 0 1-14.221-14.221v-44.7a14.214 14.214 0 0 1 14.223-14.219h44.7A14.214 14.214 0 0 1 256 105.651v44.7a14.222 14.222 0 0 1-14.221 14.219Zm-91.43 0h-44.7a14.222 14.222 0 0 1-14.22-14.221v-44.7a14.214 14.214 0 0 1 14.221-14.219h44.7a14.214 14.214 0 0 1 14.221 14.221v44.7a14.222 14.222 0 0 1-14.223 14.219Zm-91.43 0h-44.7A14.23 14.23 0 0 1 0 150.349v-44.7A14.222 14.222 0 0 1 14.221 91.43h44.7a14.214 14.214 0 0 1 14.221 14.221v44.7a14.222 14.222 0 0 1-14.224 14.219Zm182.861-91.43h-44.7a14.214 14.214 0 0 1-14.221-14.221v-44.7A14.214 14.214 0 0 1 197.082 0h44.7A14.214 14.214 0 0 1 256 14.221v44.7a14.214 14.214 0 0 1-14.221 14.218Zm-91.43 0h-44.7A14.214 14.214 0 0 1 91.43 58.918v-44.7A14.214 14.214 0 0 1 105.651 0h44.7a14.214 14.214 0 0 1 14.219 14.221v44.7a14.214 14.214 0 0 1-14.221 14.218Zm-91.43 0h-44.7A14.222 14.222 0 0 1 0 58.918v-44.7A14.222 14.222 0 0 1 14.221 0h44.7a14.214 14.214 0 0 1 14.218 14.221v44.7a14.214 14.214 0 0 1-14.221 14.218Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 915",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  Mn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "g",
        { id: "trash-icn", transform: "translate(0 0)" },
        e.createElement("path", {
          fill: "currentcolor",
          d: "M219.6,16.2h-49.7V8.4c0-3.4-2.7-6.1-6.1-6.1H92.2c-3.4,0-6.1,2.7-6.1,6.1v7.8H36.3\n\t\tc-3.4,0-6.1,2.8-6.1,6.2V38c0,3.4,2.7,6.1,6.1,6.1h183.3c3.4,0,6.1-2.7,6.1-6.1V22.4C225.8,19,223.1,16.2,219.6,16.2\n\t\tC219.7,16.2,219.6,16.2,219.6,16.2z",
        }),
        e.createElement("path", {
          fill: "currentcolor",
          d: "M44.2,225.5c0,15.6,12.7,28.2,28.2,28.2h111.2c15.6-0.1,28.2-12.7,28.2-28.2V58.1H44.2V225.5z",
        })
      )
    );
  },
  xn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          viewBox: "0 0 256 256",
          fill: "currentcolor",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path" },
          e.createElement("rect", {
            id: "Rectángulo_1012",
            "data-name": "Rectángulo 1012",
            width: "219.579",
            height: "256",
          })
        ),
        e.createElement(
          "clipPath",
          { id: "clip-Edit_YAML" },
          e.createElement("rect", { width: "256", height: "256" })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Edit_YAML",
          "data-name": "Edit YAML",
          clipPath: "url(#clip-Edit_YAML)",
        },
        e.createElement("rect", { width: "256", height: "256", fill: "#fff" }),
        e.createElement(
          "g",
          { id: "Edit_YAML_Icon", "data-name": "Edit YAML Icon" },
          e.createElement("rect", {
            id: "Rectángulo_1013",
            "data-name": "Rectángulo 1013",
            width: "256",
            height: "256",
            fill: "none",
          }),
          e.createElement(
            "g",
            {
              id: "Grupo_2399",
              "data-name": "Grupo 2399",
              transform: "translate(25)",
            },
            e.createElement(
              "g",
              { id: "Grupo_2398", "data-name": "Grupo 2398" },
              e.createElement("path", {
                id: "Trazado_7135",
                "data-name": "Trazado 7135",
                d: "M393.716,60.148a7.412,7.412,0,0,0-5.1,2.082L369.7,81.158a1.738,1.738,0,0,0-.5.946l-1.953,9.528a1.754,1.754,0,0,0,.5,1.64,1.912,1.912,0,0,0,1.323.5.8.8,0,0,0,.378-.063l9.453-1.83a1.736,1.736,0,0,0,.946-.5l18.906-18.928a7.242,7.242,0,0,0,0-10.158,6.957,6.957,0,0,0-5.042-2.145",
                transform: "translate(-207.088 -33.921)",
              }),
              e.createElement("path", {
                id: "Trazado_7136",
                "data-name": "Trazado 7136",
                d: "M176.1,0a43.4,43.4,0,0,0-34.3,16.755c-4.119.092-8.241.181-12.357.164-21.964-.1-43.951.3-65.928.385-2.625.014-5.267.014-7.914.014H16.136A16.146,16.146,0,0,0,0,33.445V239.878A16.142,16.142,0,0,0,16.136,256H186.882A16.131,16.131,0,0,0,203,239.877V137.027c0-16.076-.4-32.234-.013-48.284.089-3.731.185-7.51.262-11.308A43.478,43.478,0,0,0,176.1,0M51.689,162.377v19.369H37.8V162.56l-19.3-31.977H34.44l10.343,19.333,10.306-19.333H70.547Zm81.6,19.369H119.4V149.733L111.182,177h-14.8l-8.223-27.262v32.014H74.271V130.583H93.53L103.8,161.354l10.233-30.771h19.259Zm45.823,0H140.6V130.583h13.888v38.372h24.631ZM176.359,77.831a34.352,34.352,0,1,1,34.352-34.352,34.352,34.352,0,0,1-34.352,34.352",
              })
            )
          )
        )
      )
    );
  },
  _n = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { "data-name": "Reported Usage", clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Trazado 390",
          d: "M128.003 0a128.151 128.151 0 0 0-128 128c0 70.573 57.424 127.995 128 127.995a128.147 128.147 0 0 0 128-127.995 128.15 128.15 0 0 0-128-128Zm0 223.078a95.188 95.188 0 0 1-95.085-95.075 95.191 95.191 0 0 1 95.085-95.084v95.084h95.075a95.184 95.184 0 0 1-95.075 95.074Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 869",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  Hn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          { "data-name": "PrometheusIcon" },
          e.createElement("path", {
            d: "M128.908 0a128 128 0 1 0 128 128 128 128 0 0 0-128-128Zm0 239.565c-20.112 0-36.42-13.435-36.42-30h72.839c.004 16.561-16.302 30-36.419 30Zm60.154-39.941H68.751v-21.818h120.317v21.817Zm-.432-33.046H69.094c-.4-.458-.8-.91-1.188-1.375-12.315-14.954-15.216-22.76-18.032-30.717-.048-.262 14.933 3.06 25.556 5.45 0 0 5.466 1.265 13.458 2.722a49.95 49.95 0 0 1-12.23-32.117c0-25.658 19.68-48.08 12.58-66.2 6.91.562 14.3 14.583 14.8 36.506 7.346-10.152 10.42-28.691 10.42-40.057 0-11.769 7.755-25.44 15.512-25.908-6.915 11.4 1.79 21.165 9.53 45.4 2.9 9.1 2.532 24.423 4.772 34.139.744-20.178 4.213-49.621 17.014-59.785-5.647 12.8.836 28.819 5.27 36.519 7.154 12.424 11.49 21.836 11.49 39.639a49.518 49.518 0 0 1-11.84 31.959c8.452-1.586 14.289-3.016 14.289-3.016l27.451-5.355s-3.985 16.4-19.312 32.196Z",
          }),
          e.createElement("path", {
            "data-name": "Rect\\xE1ngulo 895",
            fill: "none",
            d: "M0 0h256v256H0z",
          })
        )
      )
    );
  },
  zn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path" },
          e.createElement("rect", {
            id: "Rectángulo_1028",
            "data-name": "Rectángulo 1028",
            width: "256",
            height: "256",
            fill: "none",
          })
        ),
        e.createElement(
          "clipPath",
          { id: "clip-Generic_Confirmation" },
          e.createElement("rect", { width: "256", height: "256" })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Generic_Confirmation",
          "data-name": "Generic Confirmation",
          clipPath: "url(#clip-Generic_Confirmation)",
        },
        e.createElement("rect", { width: "256", height: "256", fill: "#fff" }),
        e.createElement(
          "g",
          {
            id: "Generic_Confirmation_Icon",
            "data-name": "Generic Confirmation Icon",
          },
          e.createElement(
            "g",
            { id: "Grupo_2416", "data-name": "Grupo 2416" },
            e.createElement("path", {
              id: "Trazado_7167",
              "data-name": "Trazado 7167",
              d: "M128,0A128,128,0,1,0,256,128,128,128,0,0,0,128,0m.762,229.13A101.13,101.13,0,1,1,229.892,128a101.13,101.13,0,0,1-101.13,101.13M167.851,81.8,111,137.769,90.83,117.862A14.916,14.916,0,0,0,69.884,139.1l41.148,40.543,77.952-76.6a14.973,14.973,0,1,0-20.732-21.609q-.188.181-.37.367Z",
              fill: "#4ccb92",
            })
          )
        )
      )
    );
  },
  Vn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          { "data-name": "NextArrowIcon" },
          e.createElement("path", {
            d: "M19.805 108.063c-26.4 0-26.4 40.032 0 40.032h167.684l-22.739 22.668c-18.656 18.622 9.725 46.922 28.382 28.316l56.873-56.731a19.991 19.991 0 0 0 0-28.548l-56.877-56.716c-18.656-18.6-47.038 9.684-28.382 28.3l22.743 22.679H19.805Z",
          }),
          e.createElement("path", {
            "data-name": "Rect\\xE1ngulo 863",
            fill: "none",
            d: "M.003 0h256v256h-256z",
          })
        )
      )
    );
  },
  An = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Trazado 447",
          d: "M179.66 125.384a51.282 51.282 0 0 0-1.483-3.533l8.145-10.875a7.2 7.2 0 0 0-.642-9.386l-14.659-14.767a7.2 7.2 0 0 0-9.387-.646l-10.881 8.2a51.149 51.149 0 0 0-3.53-1.482l-1.939-13.476a7.12 7.12 0 0 0-7.15-6.163h-20.755a7.156 7.156 0 0 0-7.166 6.16l-1.941 13.479q-1.8.675-3.532 1.483l-10.929-8.2a7.2 7.2 0 0 0-9.391.646l-14.654 14.653a7.2 7.2 0 0 0-.648 9.388l8.2 10.881a51.536 51.536 0 0 0-1.482 3.53l-13.474 1.939a7.181 7.181 0 0 0-6.165 7.15v20.7a7.186 7.186 0 0 0 6.16 7.165l13.479 1.939q.675 1.8 1.484 3.535l-8.2 10.98a7.2 7.2 0 0 0 .646 9.391l14.654 14.653a7.2 7.2 0 0 0 9.387.647l10.882-8.2a50.342 50.342 0 0 0 3.528 1.483l1.94 13.474a7.185 7.185 0 0 0 7.081 6.165h20.771a7.22 7.22 0 0 0 7.166-6.16l1.941-13.479a50.349 50.349 0 0 0 3.531-1.484l10.875 8.143a7.2 7.2 0 0 0 9.392-.646l14.654-14.654a7.2 7.2 0 0 0 .65-9.381l-8.1-10.828a50.638 50.638 0 0 0 1.483-3.535l13.474-1.938a7.182 7.182 0 0 0 6.166-7.15v-20.77a7.13 7.13 0 0 0-6.093-7.1Zm-12.348 30.522a42.91 42.91 0 0 1-3.577 9.063 7.2 7.2 0 0 0 .038 7.61l7.2 9.616-5.855 5.973-9.47-7.247-.139-.1a7.179 7.179 0 0 0-7.534-.038 39.415 39.415 0 0 1-9.257 3.8 7.172 7.172 0 0 0-5.159 5.873l-1.707 11.559h-8.267l-1.709-11.767a7.173 7.173 0 0 0-5.178-5.883 39.4 39.4 0 0 1-9.232-3.8 7.235 7.235 0 0 0-7.666.335l-9.5 7.124-5.972-5.855 7.245-9.47.09-.13a7.156 7.156 0 0 0 .052-7.583 43.013 43.013 0 0 1-3.81-9.216 7.17 7.17 0 0 0-5.872-5.161l-11.559-1.7v-8.26l11.768-1.708a7.178 7.178 0 0 0 5.885-5.187 42.913 42.913 0 0 1 3.577-9.167 7.2 7.2 0 0 0-.041-7.6l-7.344-9.613 5.982-5.985 9.484 7.256.139.1a7.19 7.19 0 0 0 7.534.037 39.448 39.448 0 0 1 9.257-3.8 7.168 7.168 0 0 0 5.16-5.872l1.7-11.559h8.268l1.708 11.768a7.179 7.179 0 0 0 5.178 5.883 39.363 39.363 0 0 1 9.232 3.793 7.237 7.237 0 0 0 7.668-.333l9.5-7.125 5.971 5.855-7.252 9.479a7.147 7.147 0 0 0-.511 7.865 42.925 42.925 0 0 1 3.81 9.217 7.173 7.173 0 0 0 5.877 5.162l11.792 1.712.117 8.208-11.746 1.706a7.179 7.179 0 0 0-5.879 5.17Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 448",
          d: "M127.721 119.558a25.249 25.249 0 0 0-25.22 25.22 25.249 25.249 0 0 0 25.22 25.221 25.249 25.249 0 0 0 25.221-25.221 25.249 25.249 0 0 0-25.221-25.22Zm12.6 25.22a12.609 12.609 0 0 1-12.6 12.6 12.61 12.61 0 0 1-12.6-12.6 12.611 12.611 0 0 1 12.6-12.6 12.61 12.61 0 0 1 12.6 12.6Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 449",
          d: "M235.999 77.198c.388-15.754.957-32.242-.5-47.941-1.094-11.755-6.193-21.735-17.831-25.914a42.8 42.8 0 0 0-5.016-1.448c-6.551-1.478-13.433-1.6-20.09-1.8-11.727-.344-23.449.366-35.177.314-23.493-.1-46.985.323-70.479.414Q82.678.84 78.451.84h-42.21A17.261 17.261 0 0 0 19 18.08v220.68A17.261 17.261 0 0 0 36.241 256h182.541a17.26 17.26 0 0 0 17.24-17.24V128.815c.002-17.182-.445-34.458-.023-51.617Zm-20.922 145.988a14.887 14.887 0 0 1-14.888 14.887H51.821a14.888 14.888 0 0 1-14.888-14.887V33.662a14.888 14.888 0 0 1 14.888-14.888h99.547v25.459a37.8 37.8 0 0 0 37.758 37.759h25.951Zm0-157.656h-25.951a21.321 21.321 0 0 1-21.3-21.3V18.771h32.359a14.888 14.888 0 0 1 14.888 14.888Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 900",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  Cn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Uni\\xF3n 36",
          d: "m203.074 254.064-74.746-44.835-74.746 44.835a13.592 13.592 0 0 1-20.586-11.636V46.276A46.324 46.324 0 0 1 79.277 0h98.078a46.328 46.328 0 0 1 46.281 46.276v196.152a13.576 13.576 0 0 1-20.562 11.636Zm-67.778-72.319 61.176 36.71V46.276a19.133 19.133 0 0 0-19.113-19.133H79.277a19.148 19.148 0 0 0-19.113 19.133v172.179l61.16-36.71a13.569 13.569 0 0 1 13.969 0Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 921",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  Ln = function (e) {
    return a.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 42.239 33.998",
        },
        e
      ),
      a.createElement(
        "g",
        { id: "google-cloud-logo-color", transform: "translate(-526 -141)" },
        a.createElement(
          "g",
          {
            id: "Grupo_1820",
            "data-name": "Grupo 1820",
            transform: "translate(526 141)",
          },
          a.createElement("path", {
            id: "Trazado_6946",
            "data-name": "Trazado 6946",
            d: "M78,40.648h1.288l3.671-3.671.18-1.559A16.5,16.5,0,0,0,56.295,43.47a1.988,1.988,0,0,1,1.288-.076l7.343-1.212s.373-.619.568-.581a9.159,9.159,0,0,1,12.535-.953Z",
            transform: "translate(-51.201 -31.287)",
            fill: "#ea4335",
          }),
          a.createElement("path", {
            id: "Trazado_6947",
            "data-name": "Trazado 6947",
            d: "M238.1,84.8a16.527,16.527,0,0,0-4.985-8.037l-5.152,5.152a9.161,9.161,0,0,1,3.362,7.267V90.1a4.587,4.587,0,0,1,0,9.173h-9.173l-.915.928v5.5l.915.915h9.173A11.932,11.932,0,0,0,238.1,84.8Z",
            transform: "translate(-201.103 -72.617)",
            fill: "#4285f4",
          }),
          a.createElement("path", {
            id: "Trazado_6948",
            "data-name": "Trazado 6948",
            d: "M12.273,142.319a11.928,11.928,0,0,0-7.2,21.384l5.319-5.319a4.586,4.586,0,1,1,6.067-6.067L21.779,147a11.9,11.9,0,0,0-9.505-4.678Z",
            transform: "translate(-0.415 -132.197)",
            fill: "#fbbc05",
          })
        )
      )
    );
  },
  Tn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          { "data-name": "account" },
          e.createElement("path", {
            "data-name": "Trazado 463",
            d: "M32.291 232.53a32.336 32.336 0 0 1-32.289-32.3V76.935a32.33 32.33 0 0 1 32.289-32.3 8.837 8.837 0 0 1 8.832 8.822 8.845 8.845 0 0 1-8.832 8.831 14.663 14.663 0 0 0-14.648 14.648v123.295a14.661 14.661 0 0 0 14.648 14.64h191.4a14.66 14.66 0 0 0 14.641-14.64V76.936a14.661 14.661 0 0 0-14.641-14.648h-54.07a8.845 8.845 0 0 1-8.832-8.831 8.762 8.762 0 0 1 2.586-6.236 8.735 8.735 0 0 1 6.246-2.586h54.07a32.345 32.345 0 0 1 32.313 32.3V200.23a32.351 32.351 0 0 1-32.312 32.3Zm140.445-33.006a3.078 3.078 0 0 1-3.082-3.07V179.02a3.08 3.08 0 0 1 3.082-3.08h47.18a3.077 3.077 0 0 1 3.07 3.08v17.434a3.075 3.075 0 0 1-3.07 3.07Zm-113.141 0a22.643 22.643 0 0 1-20.648-12.767 26.835 26.835 0 0 1 1.891-26.579l.02-.019c.094-.143.2-.285.3-.428.273-.409.559-.827.871-1.245a70.651 70.651 0 0 1 52.277-28.5 62.967 62.967 0 0 1 3.543-.095 67.043 67.043 0 0 1 15.211 1.777 71.594 71.594 0 0 1 14.734 5.219 71.248 71.248 0 0 1 26.73 22.149 27.371 27.371 0 0 1 2.672 27.53 22.363 22.363 0 0 1-20.629 12.956Zm-3.719-30.372v.01l-.047.058c-.191.256-.371.5-.531.741v.028l-.258.371a8.365 8.365 0 0 0-.715 8.261 5.526 5.526 0 0 0 5.27 3.1h76.969a6.062 6.062 0 0 0 3.156-.761 4.988 4.988 0 0 0 1.949-2.243 8.485 8.485 0 0 0 .715-4.524 9.18 9.18 0 0 0-1.7-4.468 54.088 54.088 0 0 0-42.969-22.007c-.93 0-1.75.019-2.508.066h-.012a53.055 53.055 0 0 0-39.318 21.368Zm116.859-5.01a3.08 3.08 0 0 1-3.082-3.079v-17.425a3.08 3.08 0 0 1 3.082-3.08h47.18a3.077 3.077 0 0 1 3.07 3.08v17.425a3.077 3.077 0 0 1-3.07 3.079Zm-.59-38.7a2.5 2.5 0 0 1-2.492-2.5V82.066a2.5 2.5 0 0 1 2.492-2.5h48.348a2.5 2.5 0 0 1 2.492 2.5v40.876a2.5 2.5 0 0 1-2.492 2.5ZM50.981 74.213c0-28.233 22.09-51.209 49.242-51.209s49.258 22.976 49.258 51.209a52.579 52.579 0 0 1-3.867 19.906 51.257 51.257 0 0 1-10.551 16.274 49.07 49.07 0 0 1-15.656 11 47.257 47.257 0 0 1-19.184 4.041c-27.151 0-49.241-22.976-49.241-51.22Zm17.977 0c0 18.033 14.031 32.711 31.266 32.711 17.262 0 31.3-14.678 31.3-32.711s-14.039-32.7-31.3-32.7c-17.234 0-31.265 14.668-31.265 32.701Z",
          }),
          e.createElement("path", {
            "data-name": "Rect\\xE1ngulo 883",
            fill: "none",
            d: "M0 0h256v256H0z",
          })
        )
      )
    );
  },
  bn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "g",
        {
          id: "Add_Access_Rule",
          "data-name": "Add Access Rule",
          clipPath: "url(#clip-Add_Access_Rule)",
        },
        e.createElement("rect", { width: "256", height: "256", fill: "#fff" }),
        e.createElement(
          "g",
          { id: "Add_Access_Rule_Icon", "data-name": "Add Access Rule Icon" },
          e.createElement(
            "g",
            {
              id: "Grupo_2406",
              "data-name": "Grupo 2406",
              transform: "translate(18)",
            },
            e.createElement(
              "g",
              { id: "Grupo_2405", "data-name": "Grupo 2405" },
              e.createElement("path", {
                id: "Trazado_7142",
                "data-name": "Trazado 7142",
                d: "M104.258,94.5a8.671,8.671,0,1,0,12.263,0,8.672,8.672,0,0,0-12.263,0",
                fill: "#4ccb92",
              }),
              e.createElement("path", {
                id: "Trazado_7143",
                "data-name": "Trazado 7143",
                d: "M220.846,46.255a15.346,15.346,0,0,0-15.422-14.381h-.01l-2.217.017c-18.3,0-53.371-3.671-82.6-28.236A15.2,15.2,0,0,0,110.742,0a15.03,15.03,0,0,0-9.748,3.6C71.681,28.225,36.7,31.9,18.452,31.9l-2.764-.028A15.124,15.124,0,0,0,.665,46.358C-1.156,93.424-.821,159.771,23,192.41c22.161,30.467,65.486,55.314,78.912,61.614a20.721,20.721,0,0,0,17.7-.015c14.415-6.8,56.684-31.109,78.885-61.582,23.832-32.654,24.168-99,22.347-146.172m-92.069,94.893,0,25.363H118.635v12.845h10.146v11H118.635V203.2h10.148v1.651l-18.394,18.394L92,204.849l.007-63.7a38.469,38.469,0,0,1-9.2-6.8A39.158,39.158,0,0,1,116.79,68.09a38.019,38.019,0,0,1,23.45,13.338,39.022,39.022,0,0,1-11.463,59.72",
                fill: "#4ccb92",
              })
            )
          ),
          e.createElement("rect", {
            id: "Rectángulo_1019",
            "data-name": "Rectángulo 1019",
            width: "256",
            height: "256",
            fill: "none",
          })
        )
      )
    );
  },
  Pn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Trazado 463",
          d: "M235.994 77.198c.387-15.753.958-32.242-.5-47.941-1.092-11.756-6.191-21.735-17.831-25.915a42.409 42.409 0 0 0-5.016-1.447c-6.549-1.479-13.432-1.6-20.09-1.8-11.726-.345-23.448.365-35.176.314-23.494-.1-46.985.322-70.479.414q-4.228.016-8.456.017H36.24A17.26 17.26 0 0 0 19 18.082v220.679a17.26 17.26 0 0 0 17.24 17.24h182.537a17.26 17.26 0 0 0 17.241-17.24V128.816c0-17.184-.441-34.459-.024-51.618Zm-20.921 145.986a14.89 14.89 0 0 1-14.888 14.889H51.816a14.889 14.889 0 0 1-14.888-14.888V33.662a14.888 14.888 0 0 1 14.888-14.888h99.547v25.458a37.8 37.8 0 0 0 37.757 37.759h25.953Zm0-157.657H189.12a21.32 21.32 0 0 1-21.3-21.3V18.769h32.359a14.887 14.887 0 0 1 14.888 14.888Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 464",
          d: "M151.162 161.256c-3.776-4.195-7.131-8.391-10.908-13a132.358 132.358 0 0 1-11.746-16.361c3.775-13.424 7.132-28.946 3.775-39.015-2.517-7.551-8.39-11.326-16.361-10.487-8.81 1.257-14.263 7.131-14.263 16.36-.42 10.488 5.873 23.913 12.586 35.24a167.721 167.721 0 0 1-6.293 16.78 171.9 171.9 0 0 1-8.39 17.62c-4.615.839-9.23 2.517-13.425 3.775-11.746 4.2-20.136 8.81-24.331 14.263-5.455 6.293-5.035 14.263.419 20.557 3.355 3.775 7.132 5.454 11.327 5.454a17.615 17.615 0 0 0 8.81-2.518q9.439-5.663 20.138-21.4a80.8 80.8 0 0 0 5.454-8.81c5.036-1.258 10.488-2.1 15.942-2.936a212.07 212.07 0 0 1 21.814-2.1c9.649 10.069 22.235 20.557 33.142 21.814 8.391 1.259 15.1-2.937 17.619-11.327 2.1-7.551-.838-13.845-8.39-18.039-8.392-4.612-22.237-5.87-36.919-5.87Zm-74.673 37.756c-3.357 1.677-3.776.839-4.615 0-1.677-2.1-1.677-2.937-.42-4.2 2.937-3.355 9.649-7.132 18.459-10.067-4.615 6.719-9.65 11.749-13.425 14.267Zm41.112-103.62c1.678 0 2.1 0 2.937 2.1 1.258 3.775.839 10.487-.839 18.877-3.356-7.131-5.033-13-5.033-17.2 0-3.357 1.256-3.357 2.934-3.776Zm4.615 69.219a32.317 32.317 0 0 0-6.293.84c1.259-2.937 2.937-5.874 4.2-9.23.839-2.1 2.1-5.034 3.356-8.391 2.517 3.776 5.035 7.132 6.713 9.65.838 1.257 2.517 3.355 4.615 5.873-4.2 0-8.4.84-12.592 1.258Zm62.088 17.2c-1.259 2.938-2.1 2.938-3.775 2.518-4.2-.419-9.649-3.776-15.941-9.229a52.838 52.838 0 0 1 17.619 3.776c2.515 1.676 2.515 2.1 2.1 2.935Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 906",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  Nn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Trazado 450",
          d: "M235.991 77.198c.388-15.754.958-32.241-.5-47.941-1.094-11.755-6.193-21.736-17.831-25.914a42.421 42.421 0 0 0-5.017-1.448c-6.549-1.478-13.432-1.6-20.09-1.8-11.726-.343-23.448.365-35.175.314-23.493-.1-46.985.323-70.479.414q-4.228.016-8.456.017H36.237a17.26 17.26 0 0 0-17.24 17.241v220.678A17.259 17.259 0 0 0 36.237 256h182.541a17.259 17.259 0 0 0 17.241-17.241V128.816c-.007-17.183-.454-34.458-.028-51.618Zm-20.922 145.988a14.888 14.888 0 0 1-14.888 14.888H51.813a14.888 14.888 0 0 1-14.888-14.888V33.662a14.888 14.888 0 0 1 14.888-14.888h99.548v25.459a37.8 37.8 0 0 0 37.757 37.759h25.951Zm0-157.656h-25.951a21.321 21.321 0 0 1-21.3-21.3V18.771h32.359a14.888 14.888 0 0 1 14.888 14.888Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 451",
          d: "M182.548 83.841a8.758 8.758 0 0 0-6.293 2.408 8.758 8.758 0 0 0-2.721 6.164c-.094 3.782-4.306 9.1-10.941 11.1-12.038 3.631-30.066 2.206-43.232 1.163-4.439-.351-8.273-.655-11.49-.746-10.771-.3-17.189 3.835-20.7 7.365-5.5 5.526-7.347 12.842-7.571 20.381-.1 3.232-.545 6.4 1.436 9.188a8.729 8.729 0 0 0 7.057 3.66h1.932c3.206 0 5.272-2.557 6.179-5.394.88-2.755.889-5.681 1.086-8.538.174-2.509.518-5.1 2.416-6.953 1.544-1.508 4.119-2.224 7.659-2.122 2.773.08 6.4.366 10.6.7 2.125.168 4.374.344 6.7.509a283.562 283.562 0 0 1-1.593 29.877h-25.08a8.8 8.8 0 0 0-8.8 8.8 8.8 8.8 0 0 0 8.8 8.8h22.449c-2.426 12.2-6.025 22.628-11.124 27.883-2.627 2.707-4.779 3.054-6.362 3.054-7.431 0-8.671-5.945-8.75-9.4a8.8 8.8 0 0 0-8.8-8.8 8.8 8.8 0 0 0-8.8 8.792 32.28 32.28 0 0 0 3.064 12.92c4.373 9.077 12.64 14.074 23.28 14.075a26.113 26.113 0 0 0 18.985-8.4c8.565-8.827 13.551-24.242 16.438-40.135h18.471a8.8 8.8 0 0 0 8.8-8.8 8.8 8.8 0 0 0-8.8-8.8h-16.049c1.153-11.616 1.425-22.208 1.444-29.165 8.812-.018 17.721-.757 25.42-3.079 13.5-4.074 23.143-15.385 23.447-27.508a8.8 8.8 0 0 0-8.557-8.999Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 902",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  Bn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          { "data-name": "UptimeIcon" },
          e.createElement("path", {
            "data-name": "Rect\\xE1ngulo 851",
            fill: "none",
            d: "M0 0h256v256H0z",
          }),
          e.createElement(
            "g",
            { "data-name": "Grupo 1558" },
            e.createElement("path", {
              "data-name": "Sustracci\\xF3n 3",
              d: "M220.67 154.223h-10.627c.012-.6.016-1.149.016-1.669a82.374 82.374 0 0 0-1.073-13.283h-64.771v-78.9l25.611 11.287 45.143 34.182 4.232 33.5a53.041 53.041 0 0 1 5.371 4.445 22.28 22.28 0 0 1 3.4 3.962c.938 1.48 1.252 2.729.941 3.709-.577 1.836-3.35 2.767-8.243 2.767Z",
              fill: "#e3e3e3",
            }),
            e.createElement("path", {
              "data-name": "Uni\\xF3n 9",
              d: "M24.003 152.341a102.96 102.96 0 0 1 24.863-67.172 104.134 104.134 0 0 1 61.651-35.019l.586-.1v22.866l-.4.084a81.178 81.178 0 0 0-64.137 79.337c0 44.762 36.557 81.18 81.492 81.18s81.492-36.418 81.492-81.18a80.636 80.636 0 0 0-18.828-51.854 81.865 81.865 0 0 0-20.838-17.8 80.846 80.846 0 0 0-26.053-10l-.408-.084V49.8l.582.089a103.267 103.267 0 0 1 34.789 11.962 104.595 104.595 0 0 1 27.953 22.727 103.042 103.042 0 0 1 25.363 67.76C232.114 209.5 185.437 256 128.062 256S24.003 209.5 24.003 152.341Zm104.625 9.91a10.07 10.07 0 0 1-1.023-.054c-4.723-.094-9.377-3.03-9.377-8.8V30.467l-10.9 10.113c-8.939 8.3-22.533-4.325-13.594-12.619l27.248-25.3a10.162 10.162 0 0 1 13.719 0l27.252 25.3c8.943 8.294-4.658 20.918-13.6 12.619L137.46 30.467v113.674h41.412a9.055 9.055 0 1 1 0 18.11Z",
            })
          )
        )
      )
    );
  },
  Rn = function (e) {
    return a.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 16 16",
        },
        e
      ),
      a.createElement(
        "g",
        null,
        a.createElement("path", {
          d: "M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0m4.575,5.769-.005.005L7.837,11.69a.89.89,0,0,1-.635.284H7.185a.889.889,0,0,1-.628-.26h0L3.421,8.577a.889.889,0,1,1,1.2-1.31q.028.025.053.053L7.16,9.8l4.117-5.246.024-.026h0a.889.889,0,0,1,1.275,1.24",
        })
      )
    );
  },
  yn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          viewBox: "0 0 256 256",
          fill: "currentcolor",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path" },
          e.createElement("rect", {
            id: "Rectángulo_1031",
            "data-name": "Rectángulo 1031",
            width: "217",
            height: "256.004",
            fill: "none",
          })
        ),
        e.createElement(
          "clipPath",
          { id: "clip-Object_Preview" },
          e.createElement("rect", { width: "256", height: "256" })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Object_Preview",
          "data-name": "Object Preview",
          clipPath: "url(#clip-Object_Preview)",
        },
        e.createElement("rect", { width: "256", height: "256", fill: "#fff" }),
        e.createElement(
          "g",
          { id: "Object_Preview_Icon", "data-name": "Object Preview Icon" },
          e.createElement(
            "g",
            {
              id: "Grupo_2420",
              "data-name": "Grupo 2420",
              transform: "translate(20)",
            },
            e.createElement(
              "g",
              { id: "Grupo_2419", "data-name": "Grupo 2419" },
              e.createElement("path", {
                id: "Trazado_7171",
                "data-name": "Trazado 7171",
                d: "M110.1,110.805A28.093,28.093,0,1,0,138.137,138.9,28.063,28.063,0,0,0,110.1,110.805m-.064,42.209a14.079,14.079,0,1,1,14.05-14.079,14.065,14.065,0,0,1-14.05,14.079",
                transform: "translate(-0.168)",
              }),
              e.createElement("path", {
                id: "Trazado_7172",
                "data-name": "Trazado 7172",
                d: "M216.564,77.2c.166-6.9.359-13.945.413-21h-31.1A25.6,25.6,0,0,1,160.334,30.6l0-30.544q-3.775.06-7.553.148c-4.892.108-9.79.228-14.681.208C114.67.31,91.212.733,67.766.824c-2.8.016-5.619.016-8.444.016H17.216A17.241,17.241,0,0,0,0,18.08V238.769A17.238,17.238,0,0,0,17.216,256l182.163,0a17.226,17.226,0,0,0,17.2-17.235V128.815c0-17.186-.424-34.46-.013-51.618m-34.353,71.335a86.569,86.569,0,0,1-144.462,0,17.428,17.428,0,0,1,0-19.27,86.569,86.569,0,0,1,144.462,0,17.435,17.435,0,0,1,0,19.27",
                transform: "translate(0)",
              }),
              e.createElement("path", {
                id: "Trazado_7173",
                "data-name": "Trazado 7173",
                d: "M203.277,0H171.758V22.411c-1.233,19.062,12.107,22.137,22.106,22.151h23.489V13.406c0-7.007-7.08-13.4-14.074-13.406",
                transform: "translate(-0.351)",
              })
            )
          ),
          e.createElement("rect", {
            id: "Rectángulo_1032",
            "data-name": "Rectángulo 1032",
            width: "256",
            height: "256",
            fill: "none",
          })
        )
      )
    );
  },
  Gn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { "data-name": "Tenants Outline", clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Trazado 452",
          d: "M135.881 213.702a42.222 42.222 0 0 1 7.779-24.429l-29.932-38.917a76.63 76.63 0 0 1-20.656 5.106l-.867 16.144a24.837 24.837 0 0 1 7.207 17.521 24.937 24.937 0 0 1-24.893 24.918 24.94 24.94 0 0 1-24.891-24.918 24.779 24.779 0 0 1 18.055-23.967l.6-11.047A78.47 78.47 0 0 1 7.002 77.955 78 78 0 0 1 84.861-.005a78 78 0 0 1 77.863 77.96 77.537 77.537 0 0 1-1.119 13.111l28.8 4.184a31.653 31.653 0 0 1 25.73-12.966 32.13 32.13 0 0 1 32.082 32.115 32.128 32.128 0 0 1-32.082 32.108 32.267 32.267 0 0 1-31.66-27.009l-31.1-4.519a78.56 78.56 0 0 1-18.219 22.474l28.188 36.653a42.235 42.235 0 0 1 14.787-2.7 42.307 42.307 0 0 1 42.238 42.293 42.313 42.313 0 0 1-42.238 42.293 42.322 42.322 0 0 1-42.25-42.29Zm28.877-23.668-3.377 1.911-2.689 2.762a27.045 27.045 0 0 0-7.75 19 27.231 27.231 0 0 0 27.182 27.218 27.232 27.232 0 0 0 27.184-27.218 27.232 27.232 0 0 0-27.184-27.218 27 27 0 0 0-13.366 3.548Zm-100.051-.906a9.84 9.84 0 0 0 9.813 9.842 9.847 9.847 0 0 0 9.824-9.842 9.889 9.889 0 0 0-4.2-8.058l-2.445-1.711-2.979-.054a9.827 9.827 0 0 0-10.016 9.826ZM22.078 77.956a62.885 62.885 0 0 0 55.014 62.386l4.365.535 4.355-.063a62.125 62.125 0 0 0 26.91-6.511l4-1.992 3.578-2.455a63.038 63.038 0 0 0 21.867-26.212l1.793-3.993 1.268-4.381a63.234 63.234 0 0 0 2.424-17.313 62.907 62.907 0 0 0-62.793-62.883A62.9 62.9 0 0 0 22.078 77.96Zm178.871 28.831-1.549 3.061-.219 3.54c-.051 10.4 7.58 18.045 16.949 18.045a17.044 17.044 0 0 0 17.018-17.032 17.046 17.046 0 0 0-17.018-17.04 16.888 16.888 0 0 0-15.181 9.429Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 865",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  Sn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Trazado 423",
          d: "M34.549 188.281h186.9a6.641 6.641 0 1 1 0 13.282h-186.9a6.641 6.641 0 0 1-6.641-6.641 6.641 6.641 0 0 1 6.641-6.641Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 425",
          d: "M38.567 162.693a10.385 10.385 0 1 1-10.385 10.385 10.385 10.385 0 0 1 10.385-10.385Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 424",
          d: "M66.709 162.83a10.384 10.384 0 1 1-8.588 11.911 10.384 10.384 0 0 1 8.588-11.912Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 405",
          d: "M255.699 154.149a37.6 37.6 0 0 0-2.994-12.568l-41.95-104.219C207.537 29.62 199.33 24 191.241 24H64.759c-8.089 0-16.3 5.62-19.514 13.362L3.295 141.581a37.61 37.61 0 0 0-2.994 12.568 22.107 22.107 0 0 0-.3 3.612v51.4a22.089 22.089 0 0 0 22.065 22.064h211.87a22.09 22.09 0 0 0 22.065-22.064v-51.4a22.134 22.134 0 0 0-.302-3.612ZM65.754 46.413h124.491l36.053 89.283H30.013Zm167.833 162.4H22.412v-50.708h211.175Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 855",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  kn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path" },
          e.createElement("rect", {
            id: "Rectángulo_1026",
            "data-name": "Rectángulo 1026",
            width: "255.576",
            height: "182.735",
            fill: "none",
          })
        ),
        e.createElement(
          "clipPath",
          { id: "clip-Create_New_Path" },
          e.createElement("rect", { width: "256", height: "256" })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Create_New_Path",
          "data-name": "Create New Path",
          clipPath: "url(#clip-Create_New_Path)",
        },
        e.createElement("rect", { width: "256", height: "256", fill: "#fff" }),
        e.createElement(
          "g",
          { id: "Create_New_Path_Icon", "data-name": "Create New Path Icon" },
          e.createElement(
            "g",
            {
              id: "Grupo_2415",
              "data-name": "Grupo 2415",
              transform: "translate(0.424 26.642)",
            },
            e.createElement(
              "g",
              { id: "Grupo_2414", "data-name": "Grupo 2414" },
              e.createElement("path", {
                id: "Trazado_7162",
                "data-name": "Trazado 7162",
                d: "M21.8,141.76c-11.745,0-21.8,9.96-21.8,21.517a22.187,22.187,0,0,0,21.8,21.8c11.557,0,21.517-10.054,21.517-21.8A21.949,21.949,0,0,0,21.8,141.76",
                transform: "translate(0 -59.036)",
                fill: "#4ccb92",
              }),
              e.createElement("path", {
                id: "Trazado_7163",
                "data-name": "Trazado 7163",
                d: "M21.8,235.632c-11.745,0-21.8,9.96-21.8,21.517a22.187,22.187,0,0,0,21.8,21.8c11.557,0,21.517-10.054,21.517-21.8A21.949,21.949,0,0,0,21.8,235.632",
                transform: "translate(0 -98.13)",
                fill: "#4ccb92",
              }),
              e.createElement("path", {
                id: "Trazado_7164",
                "data-name": "Trazado 7164",
                d: "M200.314,0H187.871A11.54,11.54,0,0,0,177.5,6.479L99.6,166.135a11.54,11.54,0,0,0,10.371,16.6h12.443a11.54,11.54,0,0,0,10.371-6.479L210.684,16.6A11.539,11.539,0,0,0,200.314,0",
                transform: "translate(-40.986)",
                fill: "#4ccb92",
              }),
              e.createElement("path", {
                id: "Trazado_7165",
                "data-name": "Trazado 7165",
                d: "M294.178,82.251c-1.23,0-2.445.061-3.652.149l32.106-65.8A11.539,11.539,0,0,0,312.262,0H299.819a11.539,11.539,0,0,0-10.371,6.479l-77.9,159.656a11.539,11.539,0,0,0,10.37,16.6h12.443a11.54,11.54,0,0,0,10.371-6.479l8.685-17.8a49,49,0,1,0,40.762-76.205m.292,87.721a38.717,38.717,0,1,1,38.717-38.717,38.717,38.717,0,0,1-38.717,38.717",
                transform: "translate(-87.607)",
                fill: "#4ccb92",
              }),
              e.createElement("path", {
                id: "Trazado_7166",
                "data-name": "Trazado 7166",
                d: "M347.565,193.708H335.42v12.145H323.275V218H335.42v12.145h12.145V218h12.145V205.853H347.565Z",
                transform: "translate(-134.629 -80.67)",
                fill: "#4ccb92",
              })
            )
          ),
          e.createElement("rect", {
            id: "Rectángulo_1027",
            "data-name": "Rectángulo 1027",
            width: "256",
            height: "256",
            fill: "none",
          })
        )
      )
    );
  },
  In = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Uni\\xF3n 30",
          d: "M.002 128.002a128 128 0 0 1 128-128 128 128 0 0 1 128 128 128 128 0 0 1-128 128 127.993 127.993 0 0 1-128-128Zm25 0a103.115 103.115 0 0 0 103 103 103.116 103.116 0 0 0 103-103 103.117 103.117 0 0 0-103-103A103.116 103.116 0 0 0 25 128.002Zm75.211 58.614c0-10.971 9.48-20.238 20.342-20.238a20.541 20.541 0 0 1 20.133 20.133c0 10.966-9.377 20.447-20.133 20.447-10.864 0-20.344-9.481-20.344-20.342Zm7.457-33.227v-36.213h10.223c20.557 0 31.633-6.495 31.633-18.956 0-11.5-10.971-17.675-31.312-17.675-5.748 0-11.715.423-16.186.846l-2.023-28.008a165.912 165.912 0 0 1 21.508-1.386c37.17 0 58.684 17.147 58.684 44.094 0 24.6-16.4 40.365-46.008 45.051l-.852 12.247Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 917",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  qn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          { "data-name": "Grupo 1551" },
          e.createElement("path", {
            "data-name": "Trazado 458",
            d: "M235.995 76.194c.386-15.753.957-32.241-.5-47.94-1.093-11.754-6.192-21.735-17.832-25.914a42.4 42.4 0 0 0-5.016-1.447c-6.549-1.479-13.432-1.6-20.089-1.8-11.728-.343-23.449.366-35.176.314-23.494-.1-46.986.322-70.479.414q-4.227.018-8.456.017H36.241A17.26 17.26 0 0 0 19 17.078v220.681a17.259 17.259 0 0 0 17.24 17.24h182.541a17.259 17.259 0 0 0 17.24-17.24V127.81c-.002-17.182-.448-34.457-.026-51.616Zm-20.921 145.982a14.889 14.889 0 0 1-14.891 14.89H51.817a14.89 14.89 0 0 1-14.889-14.89V32.665a14.889 14.889 0 0 1 14.889-14.889h99.548v25.458a37.8 37.8 0 0 0 37.756 37.757h25.953Zm0-157.651h-25.953a21.319 21.319 0 0 1-21.294-21.3v-25.46h32.358a14.888 14.888 0 0 1 14.889 14.89Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 459",
            d: "m131.059 177.378-22.8 22.8a17.95 17.95 0 0 1-25.356 0 17.815 17.815 0 0 1-5.251-12.68 17.814 17.814 0 0 1 5.254-12.678l22.8-22.8a17.972 17.972 0 0 1 25.331-.015 7.521 7.521 0 0 0 10.621.187 7.458 7.458 0 0 0 2.292-5.271 7.458 7.458 0 0 0-2.1-5.344 7.641 7.641 0 0 0-.178-.179 33.044 33.044 0 0 0-46.59 0l-22.793 22.814a32.7 32.7 0 0 0-9.659 23.266 32.7 32.7 0 0 0 9.623 23.281 33.136 33.136 0 0 0 23.292 9.659h.166a32.935 32.935 0 0 0 23.174-9.616l22.808-22.811a7.462 7.462 0 0 0 2.107-5.349 7.467 7.467 0 0 0-2.292-5.271 7.485 7.485 0 0 0-10.446.006Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 460",
            d: "m129.038 95.473-22.809 22.809a7.461 7.461 0 0 0-2.105 5.348 7.46 7.46 0 0 0 2.291 5.271 7.482 7.482 0 0 0 10.437 0l22.821-22.822a17.8 17.8 0 0 1 12.576-5.484 17.878 17.878 0 0 1 12.769 5.015 17.8 17.8 0 0 1 5.483 12.576 17.811 17.811 0 0 1-5.016 12.771 18.02 18.02 0 0 1-.479.479l-22.8 22.8a18.058 18.058 0 0 1-25.357-.009 7.522 7.522 0 0 0-10.623.186 7.489 7.489 0 0 0 .017 10.451 32.921 32.921 0 0 0 23.292 9.583 32.932 32.932 0 0 0 23.3-9.584l22.8-22.808a32.728 32.728 0 0 0 9.337-23.423 32.737 32.737 0 0 0-9.962-23.166 32.772 32.772 0 0 0-45.973 0Z",
          })
        ),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 913",
          fill: "none",
          d: "M0-1h256v256H0z",
        })
      )
    );
  },
  Fn = function (e) {
    return a.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 37.001 37",
        },
        e
      ),
      a.createElement(
        "defs",
        null,
        a.createElement(
          "clipPath",
          { id: "rep-quota-clip-path" },
          a.createElement("rect", {
            id: "Rectángulo_959",
            "data-name": "Rectángulo 959",
            width: "37",
            height: "37",
            transform: "translate(0 0)",
          })
        )
      ),
      a.createElement(
        "g",
        {
          id: "reported-usage-icn-full",
          transform: "translate(-0.213 -0.213)",
        },
        a.createElement("rect", {
          id: "Rectángulo_869",
          "data-name": "Rectángulo 869",
          width: "37",
          height: "37",
          transform: "translate(0.213 0.213)",
          fill: "none",
        }),
        a.createElement(
          "g",
          {
            id: "Grupo_2317",
            "data-name": "Grupo 2317",
            transform: "translate(0.213 0.213)",
          },
          a.createElement(
            "g",
            {
              id: "Grupo_2316",
              "data-name": "Grupo 2316",
              transform: "translate(0 0)",
              clipPath: "url(#rep-quota-clip-path)",
            },
            a.createElement("path", {
              id: "Trazado_7046",
              "data-name": "Trazado 7046",
              d: "M18.5,0A18.5,18.5,0,1,0,37,18.5,18.5,18.5,0,0,0,18.5,0m0,18.5V4.756A13.757,13.757,0,0,1,32.238,18.5H18.5Z",
              transform: "translate(0.074 0.074)",
            })
          )
        )
      )
    );
  },
  On = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "g",
        null,
        e.createElement(
          "g",
          { transform: "translate(0 7.836)" },
          e.createElement(
            "g",
            null,
            e.createElement("path", {
              d: "M227.22,126.576A53.114,53.114,0,1,0,155.674,55.03L109.365,8.722A29.86,29.86,0,0,0,88.94,0L29.97.032A30.021,30.021,0,0,0,0,29.99l0,59.2a29.8,29.8,0,0,0,8.7,20.186L133.237,233.909a29.806,29.806,0,0,0,21.266,8.758v0a29.813,29.813,0,0,0,21.25-8.743l58.162-58.157a30.211,30.211,0,0,0-.018-42.511ZM60.958,76.033A15.072,15.072,0,1,1,76.031,60.96,15.091,15.091,0,0,1,60.958,76.033m100.274,3.334A41.967,41.967,0,1,1,203.2,121.334a41.967,41.967,0,0,1-41.967-41.967",
              fill: "#4ccb92",
            }),
            e.createElement("path", {
              d: "M316.362,94.258H303.2v13.164H290.033v13.165H303.2v13.165h13.164V120.587h13.164V107.422H316.362Z",
              transform: "translate(-106.58 -34.638)",
              fill: "#4ccb92",
            })
          )
        )
      )
    );
  },
  jn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
          width: "32.12",
          height: "25",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "online-registration-icn_svg__a" },
          e.createElement("path", {
            "data-name": "Rect\\xE1ngulo 1601",
            fill: "none",
            d: "M0 0h256v189.799H0z",
          })
        )
      ),
      e.createElement(
        "g",
        { "data-name": "Grupo 2523" },
        e.createElement(
          "g",
          {
            "data-name": "Grupo 2522",
            transform: "translate(0 32.999)",
            clipPath: "url(#online-registration-icn_svg__a)",
          },
          e.createElement("path", {
            "data-name": "Trazado 7258",
            d: "M105.956 117.2a75.071 75.071 0 0 0 .763 10.469h12.926v-20.938h-12.926a75.072 75.072 0 0 0-.763 10.469",
          }),
          e.createElement("path", {
            "data-name": "Trazado 7259",
            d: "M119.607 100.222V80.94a29.091 29.091 0 0 0-11.667 19.282Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 7260",
            d: "M119.614 153.467h.008v-19.282h-11.675a29.062 29.062 0 0 0 11.667 19.282",
          }),
          e.createElement("path", {
            "data-name": "Trazado 7261",
            d: "M155.805 100.221a37.276 37.276 0 0 0-18.1-16.993 50.754 50.754 0 0 1 6.807 16.993Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 7262",
            d: "M99.417 117.2h.034a81.388 81.388 0 0 1 .679-10.469H87.323a36.628 36.628 0 0 0 0 20.938h12.773a82.781 82.781 0 0 1-.679-10.469",
          }),
          e.createElement("path", {
            "data-name": "Trazado 7263",
            d: "M108.039 83.229a37.31 37.31 0 0 0-18.099 16.992h11.293a50.754 50.754 0 0 1 6.806-16.993",
          }),
          e.createElement("path", {
            "data-name": "Trazado 7264",
            d: "M89.947 134.178a37.31 37.31 0 0 0 18.1 16.993 50.754 50.754 0 0 1-6.806-16.993Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 7265",
            d: "M145.603 106.731a80.807 80.807 0 0 1 0 20.938h12.811a36.5 36.5 0 0 0 0-20.938Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 7266",
            d: "M137.706 151.171a37.31 37.31 0 0 0 18.1-16.993h-11.294a50.754 50.754 0 0 1-6.806 16.993",
          }),
          e.createElement("path", {
            "data-name": "Trazado 7267",
            d: "m230.957 100.848-.443.221-.473.16a13.816 13.816 0 0 1-4.494.748v-.023h-.671a22.917 22.917 0 0 1-9.309-2.884 4.907 4.907 0 0 0-.671-.313q-.275.114-.549.252a18.913 18.913 0 0 1-13.636 2.472l-.992-.2-.9-.443a19.76 19.76 0 0 1-9.619-10.306 5.449 5.449 0 0 0-.305-.542 5.087 5.087 0 0 0-.488-.107 19.2 19.2 0 0 1-12.5-6.4l-.61-.687-.427-.809a20.457 20.457 0 0 1-1.908-13.735 5.126 5.126 0 0 0 .046-.969 5.773 5.773 0 0 0-.443-.526 20.249 20.249 0 0 1-6.379-12.682l-.092-.832.092-.832a20.268 20.268 0 0 1 6.394-12.682 4.831 4.831 0 0 0 .427-.549 5.1 5.1 0 0 0-.069-.961 20.376 20.376 0 0 1 .992-11.552A62.2 62.2 0 0 0 60.692 61.216c0 1.351.053 2.732.168 4.2a62.2 62.2 0 0 0 1.678 124.381h120.683a62.1 62.1 0 0 0 53.886-93.717 19.522 19.522 0 0 1-6.15 4.769m-67.064 30.957a3.466 3.466 0 0 1-.2.534 43.494 43.494 0 0 1-81.645 0 2.641 2.641 0 0 1-.2-.534 42.738 42.738 0 0 1 0-29.285 2.641 2.641 0 0 1 .2-.534 43.494 43.494 0 0 1 81.645 0 2.642 2.642 0 0 1 .2.534 42.827 42.827 0 0 1 0 29.285",
          }),
          e.createElement("path", {
            "data-name": "Trazado 7268",
            d: "M126.131 134.178v19.282a29.062 29.062 0 0 0 11.67-19.282Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 7269",
            d: "M126.131 80.94v19.282h11.67a29.091 29.091 0 0 0-11.67-19.282",
          }),
          e.createElement("path", {
            "data-name": "Trazado 7270",
            d: "M139.79 117.194Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 7271",
            d: "M139.789 117.2a75.154 75.154 0 0 0-.763-10.469H126.1v20.93h12.926a74.96 74.96 0 0 0 .763-10.461",
          }),
          e.createElement("path", {
            "data-name": "Trazado 7272",
            d: "m251.907 61.322-.023-.008a12.677 12.677 0 0 0 4.113-8.02 12.677 12.677 0 0 0-4.113-8.02 12.75 12.75 0 0 1-2.564-3.632 13.77 13.77 0 0 1 0-4.746 12.755 12.755 0 0 0-1.167-8.783 11.643 11.643 0 0 0-7.714-3.884 12.384 12.384 0 0 1-4.3-1.442 13.206 13.206 0 0 1-2.564-3.739 12.157 12.157 0 0 0-5.99-6.532 11.279 11.279 0 0 0-8.279 1.526 12.67 12.67 0 0 1-4.419 1.528 12.67 12.67 0 0 1-4.426-1.526 11.279 11.279 0 0 0-8.279-1.526 12.2 12.2 0 0 0-5.975 6.524 13.175 13.175 0 0 1-2.587 3.762 12.346 12.346 0 0 1-4.281 1.435 11.643 11.643 0 0 0-7.714 3.884 12.757 12.757 0 0 0-1.152 8.737 14.158 14.158 0 0 1 0 4.746 13.16 13.16 0 0 1-2.587 3.67 12.632 12.632 0 0 0-4.105 8.027 12.6 12.6 0 0 0 4.113 8.012 13.135 13.135 0 0 1 2.587 3.632 14.2 14.2 0 0 1 0 4.754 12.8 12.8 0 0 0 1.16 8.783 11.643 11.643 0 0 0 7.714 3.884 12.346 12.346 0 0 1 4.281 1.435 13.246 13.246 0 0 1 2.587 3.754 12.165 12.165 0 0 0 5.975 6.493 11.285 11.285 0 0 0 8.279-1.526 12.67 12.67 0 0 1 4.43-1.527 12.67 12.67 0 0 1 4.426 1.526 15.413 15.413 0 0 0 6.219 1.923 6.5 6.5 0 0 0 2.053-.336 12.155 12.155 0 0 0 5.975-6.516 13.246 13.246 0 0 1 2.587-3.754 12.346 12.346 0 0 1 4.281-1.435 11.643 11.643 0 0 0 7.714-3.884 12.717 12.717 0 0 0 1.167-8.828 14.158 14.158 0 0 1 0-4.746 12.834 12.834 0 0 1 2.587-3.624m-41.363 7.706L194.689 52.44l5.631-5.883 10.233 10.683 18.931-19.679 5.631 5.883Z",
          })
        )
      ),
      e.createElement("path", {
        "data-name": "Rect\\xE1ngulo 1602",
        fill: "none",
        d: "M0 0h256v256H0z",
      })
    );
  },
  Dn = function (e) {
    return a.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        e
      ),
      a.createElement(
        "defs",
        null,
        a.createElement(
          "clipPath",
          { id: "prefix__a" },
          a.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      a.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        a.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        a.createElement("path", {
          "data-name": "Uni\\xF3n 17",
          d: "M.449 128.494A128.188 128.188 0 0 1 128.494.45h10.6v52.857a76.1 76.1 0 0 1 46.531 25.151 75.572 75.572 0 0 1 13.854 22.845 75.251 75.251 0 0 1 5.039 27.189 76.11 76.11 0 0 1-76.023 76.022 76.1 76.1 0 0 1-76.012-76.022 75.291 75.291 0 0 1 5.037-27.189 75.678 75.678 0 0 1 13.85-22.845 76.135 76.135 0 0 1 46.555-25.151v-31.18a106.369 106.369 0 0 0-19.6 3.814 106.378 106.378 0 0 0-18.193 7.25 107.579 107.579 0 0 0-16.385 10.312A108.253 108.253 0 0 0 49.54 56.524a108.229 108.229 0 0 0-11.676 15.37 107.348 107.348 0 0 0-8.787 17.356 106.17 106.17 0 0 0-7.459 39.244 107.008 107.008 0 0 0 106.877 106.892 107.017 107.017 0 0 0 106.9-106.892 10.5 10.5 0 0 1 3.1-7.479 10.49 10.49 0 0 1 7.475-3.1 10.593 10.593 0 0 1 10.584 10.58 128.2 128.2 0 0 1-128.057 128.057A128.2 128.2 0 0 1 .449 128.494Zm99.967-47.048a55.106 55.106 0 0 0-14.062 12.016 54.643 54.643 0 0 0-9.336 16.083 54.492 54.492 0 0 0-3.379 18.95 54.464 54.464 0 0 0 4.316 21.333 54.924 54.924 0 0 0 5.068 9.317 55.648 55.648 0 0 0 6.7 8.12 55.546 55.546 0 0 0 8.125 6.7 54.955 54.955 0 0 0 9.316 5.068 54.353 54.353 0 0 0 21.328 4.316 54.917 54.917 0 0 0 54.854-54.857 54.492 54.492 0 0 0-3.379-18.95 54.614 54.614 0 0 0-9.326-16.083 55.144 55.144 0 0 0-14.049-12.016 54.571 54.571 0 0 0-17.5-6.723v30.482a25.816 25.816 0 0 1 10.824 9.254 25.366 25.366 0 0 1 4.211 14.035 25.433 25.433 0 0 1-2.014 9.982 25.524 25.524 0 0 1-5.494 8.145 25.5 25.5 0 0 1-8.145 5.493 25.518 25.518 0 0 1-9.982 2.015 25.477 25.477 0 0 1-9.973-2.015 25.621 25.621 0 0 1-8.148-5.493 25.538 25.538 0 0 1-5.488-8.145 25.522 25.522 0 0 1-2.016-9.982 25.393 25.393 0 0 1 4.207-14.035 25.82 25.82 0 0 1 10.848-9.254V74.72a54.537 54.537 0 0 0-17.508 6.73Z",
        }),
        a.createElement("path", {
          "data-name": "Rect\\xE1ngulo 878",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  Un = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { "data-name": "Object Browser", clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          { "data-name": "Grupo 1559" },
          e.createElement(
            "g",
            {
              "data-name": "Grupo 1541",
              transform: "translate(88.095 103.898)",
            },
            e.createElement("circle", {
              "data-name": "Elipse 57",
              cx: 11.515,
              cy: 11.515,
              r: 11.515,
              transform: "rotate(-10.901 280.738 -178.561)",
            }),
            e.createElement("rect", {
              "data-name": "Rect\\xE1ngulo 805",
              width: 24.592,
              height: 20.853,
              rx: 1.35,
              transform: "translate(14.546 25.545)",
            }),
            e.createElement("path", {
              "data-name": "Trazado 365",
              d: "M28.151 60.295a2.427 2.427 0 0 0-4.2 0l-9.1 15.761a2.425 2.425 0 0 0 2.1 3.64h18.2a2.43 2.43 0 0 0 2.105-3.64Z",
            }),
            e.createElement("path", {
              "data-name": "Trazado 366",
              d: "M79.273 28.199a151.334 151.334 0 0 0-.187-17.51c-.395-4.294-2.262-7.942-6.512-9.468a15.5 15.5 0 0 0-1.836-.529 38.335 38.335 0 0 0-7.332-.658c-4.289-.125-8.57.136-12.855.116-8.582-.036-17.16.116-25.746.152H6.301a6.308 6.308 0 0 0-6.3 6.3v80.617a6.307 6.307 0 0 0 6.3 6.3h66.684a6.3 6.3 0 0 0 6.3-6.3V47.054c-.004-6.273-.168-12.584-.012-18.855Zm-7.648 53.334a5.435 5.435 0 0 1-5.434 5.439h-54.2a5.442 5.442 0 0 1-5.441-5.439V12.3a5.441 5.441 0 0 1 5.441-5.442h36.367v9.3a13.809 13.809 0 0 0 13.789 13.794h9.48Zm0-57.6h-9.48a7.781 7.781 0 0 1-7.773-7.777v-9.3h11.82a5.435 5.435 0 0 1 5.434 5.442Z",
            })
          ),
          e.createElement("path", {
            "data-name": "Trazado 367",
            d: "M101.726 42.067c6.607 0 13.691 18.858 20.771 18.858h88.056a9.46 9.46 0 0 1 9.439 9.429v4.715H40.348V51.496h-.235a9.462 9.462 0 0 1 9.439-9.429h52.174m124.392 44.5a9.812 9.812 0 0 1 9.787 9.772l-10.03 107.756a9.811 9.811 0 0 1-9.787 9.771H39.671a9.808 9.808 0 0 1-9.787-9.771L20.093 96.339a9.813 9.813 0 0 1 9.791-9.772h196.233M101.725 21.999H49.551a29.549 29.549 0 0 0-29.533 29.5 20 20 0 0 0 .235 3.081v13.513A29.9 29.9 0 0 0-.002 96.344c0 .605.031 1.208.086 1.814l9.724 107.089a29.9 29.9 0 0 0 29.862 28.691h176.417a29.9 29.9 0 0 0 29.854-28.663l9.975-107.074c.051-.617.082-1.239.082-1.857a29.87 29.87 0 0 0-15.909-26.376 29.555 29.555 0 0 0-29.537-29.106h-81.5c-.4-.532-.786-1.059-1.123-1.517-5.1-6.906-12.8-17.342-26.2-17.342Z",
          })
        ),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 875",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  Wn = function (e) {
    return a.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 24.858 50.321",
        },
        e
      ),
      a.createElement("path", {
        id: "minio-logo-color",
        d: "M50.1,20.478q-1.908-3.154-3.826-6.3c-.664-1.088-1.339-2.171-2.012-3.254l-.266-.393a4.682,4.682,0,0,0-6-1.913,4.208,4.208,0,0,0-1.936,5.674,10.029,10.029,0,0,0,1.714,2.129c1.924,2.044,3.91,4.031,5.818,6.089a6.008,6.008,0,0,1-2.092,9.664l-.128.052V22.652A31.007,31.007,0,0,0,32.4,29.6a30.255,30.255,0,0,0-7.034,13.992l6.481-3.3c2.155-1.1,4.295-2.172,6.532-3.308V55.447l2.984,3.027V35.425s.068-.032.292-.152a24.676,24.676,0,0,0,2.614-1.448,8.834,8.834,0,0,0,1.3-13.358c-2.216-2.318-4.443-4.626-6.656-6.946a1.424,1.424,0,0,1,0-2.128,1.47,1.47,0,0,1,2.138.12c.308.311,2.386,2.506,3.127,3.283q2.808,2.941,5.625,5.872a4.005,4.005,0,0,0,.311.266l.117-.069A1.864,1.864,0,0,0,50.1,20.478ZM38.375,33.551a.538.538,0,0,1-.273.364c-1.186.629-2.382,1.241-3.577,1.855C33.109,36.5,31.69,37.223,30.17,38a28.176,28.176,0,0,1,8.16-10.112l.053-.044C38.386,29.7,38.392,31.7,38.375,33.551Z",
        transform: "translate(-25.369 -8.153)",
        fill: "#c72c48",
      })
    );
  },
  $n = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "WarpIcon",
          d: "M223.777 256c-4.293 0-7.777-3.137-7.777-7V7c0-3.868 3.484-7 7.777-7h24.445c4.295 0 7.777 3.132 7.777 7v242c0 3.862-3.482 7-7.777 7Zm-54 0c-4.293 0-7.777-3.137-7.777-7V60c0-3.868 3.484-7 7.777-7h24.445c4.295 0 7.777 3.132 7.777 7v189c0 3.862-3.482 7-7.777 7Zm-54 0c-4.293 0-7.777-3.137-7.777-7V111c0-3.868 3.484-7 7.777-7h24.445c4.295 0 7.777 3.132 7.777 7v138c0 3.862-3.482 7-7.777 7Zm-54 0c-4.293 0-7.777-3.137-7.777-7v-87c0-3.868 3.484-7 7.777-7h24.445c4.295 0 7.777 3.132 7.777 7v87c0 3.862-3.482 7-7.777 7Zm-54 0C3.484 256 0 252.863 0 249v-35c0-3.862 3.484-7 7.777-7h24.445c4.295 0 7.777 3.137 7.777 7v35c0 3.862-3.482 7-7.777 7Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 922",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  Qn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Trazado 6972",
          d: "M215.641 255.9H87.69a22.585 22.585 0 0 1-16.605-6.812 22.542 22.542 0 0 1-6.8-16.6v-162.8a21.969 21.969 0 0 1 6.807-16.058 22.654 22.654 0 0 1 16.6-6.807h127.951a21.95 21.95 0 0 1 16.059 6.807 22.014 22.014 0 0 1 6.813 16.058v162.8a22.6 22.6 0 0 1-6.812 16.613 21.94 21.94 0 0 1-16.037 6.8ZM87.69 232.486h127.951v-162.8H87.69ZM18 189V12A12 12 0 0 1 30 0h139a12 12 0 0 1 12 12 12 12 0 0 1-12 12H42v165a12 12 0 0 1-11.992 12A12 12 0 0 1 18 189Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 918",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  Yn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          { "data-name": "OpenListIcon" },
          e.createElement("path", {
            "data-name": "Trazado 6842",
            d: "M0 71.037a14.843 14.843 0 0 1 4.511-10.526 14.978 14.978 0 0 1 21.427 0l101.874 101.874 102.25-101.874a14.978 14.978 0 0 1 21.427 0 14.978 14.978 0 0 1 0 21.427L138.714 194.714a14.843 14.843 0 0 1-10.526 4.511 13.65 13.65 0 0 1-10.526-4.511L4.887 81.938A15.229 15.229 0 0 1 0 71.037Z",
          }),
          e.createElement("path", {
            "data-name": "Rect\\xE1ngulo 896",
            fill: "none",
            d: "M0 0h256v256H0z",
          })
        )
      )
    );
  },
  Kn = function (a) {
    return e.createElement(
      "svg",
      T({}, a, {
        className: "min-icon",
        fill: "currentcolor",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
      }),
      e.createElement(
        "g",
        { id: "repliaction-icn", transform: "translate(0 0)" },
        e.createElement(
          "g",
          {
            id: "Grupo_1696",
            "data-name": "Grupo 1696",
            transform: "translate(3.434)",
          },
          e.createElement("path", {
            id: "Trazado_6841",
            "data-name": "Trazado 6841",
            d: "M-502.661-53.081a1.054,1.054,0,0,0-.84-.432h-10.382a1.055,1.055,0,0,0-.84.432,1.272,1.272,0,0,0-.233.983l.178,1.038h7.843a1.894,1.894,0,0,1,1.509.776,2.21,2.21,0,0,1,.342.661h1.366l-.16.932h-1.107c-.005.058-.013.117-.023.175l-.518,3.021v0h1.1l-.16.932h-1.1l-.546,3.189-.005.032-.072.422h1.06a1.124,1.124,0,0,0,1.073-.975l.52-3.036c0-.006,0-.012,0-.018l.7-4.114,0-.012.518-3.024A1.271,1.271,0,0,0-502.661-53.081Z",
            transform: "translate(514.975 53.513)",
          })
        ),
        e.createElement("path", {
          id: "Trazado_6842",
          "data-name": "Trazado 6842",
          d: "M-609.21,43.432a1.055,1.055,0,0,0-.84-.432h-10.382a1.054,1.054,0,0,0-.84.432,1.271,1.271,0,0,0-.233.983c.256,1.495.8,4.646,1.226,7.16a.035.035,0,0,0,0,.005l.521,3.04a1.124,1.124,0,0,0,1.073.975h6.886a1.124,1.124,0,0,0,1.073-.975l.52-3.036,0-.018.7-4.114s0-.008,0-.012l.518-3.024A1.271,1.271,0,0,0-609.21,43.432Zm-1.924,8.519-8.214.01-.16-.932,8.534-.01Zm.708-4.131-9.629.01-.16-.932,9.949-.01Z",
          transform: "translate(621.524 -39.595)",
        })
      )
    );
  },
  Xn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Trazado 422",
          d: "M236.186 77.259c.389-15.768.96-32.27-.5-47.984-1.1-11.766-6.2-21.754-17.847-25.937a42.726 42.726 0 0 0-5.02-1.449c-6.556-1.479-13.445-1.6-20.108-1.8-11.737-.344-23.47.366-35.207.314-23.515-.1-47.027.324-70.541.415q-4.232.017-8.464.017H36.256A17.275 17.275 0 0 0 19 18.091v220.875a17.2 17.2 0 0 0 5.19 12.315v.033h.037a17.19 17.19 0 0 0 12.026 4.906h182.7a17.275 17.275 0 0 0 17.256-17.256V128.928c.002-17.198-.444-34.49-.023-51.669Zm-68.228-58.476h32.387a14.9 14.9 0 0 1 14.9 14.9v31.9h-25.974a21.339 21.339 0 0 1-21.313-21.315Zm-116.114 0h99.637v25.481a37.835 37.835 0 0 0 37.79 37.792h25.974v94.9l-15.227-26.374a28.352 28.352 0 0 0-24.8-14.32 28.387 28.387 0 0 0-24.85 14.4l-10.021 17.81-27.633-47.861a28.351 28.351 0 0 0-24.8-14.319 28.389 28.389 0 0 0-24.849 14.4l-26.117 46.422V33.689a14.9 14.9 0 0 1 14.9-14.9Zm-9.864 215.74a14.9 14.9 0 0 1-1.691-1.746l-1.562-34.31 39.036-69.391a11.6 11.6 0 0 1 10.146-5.857 11.6 11.6 0 0 1 10.146 5.857L159.442 235.4Zm158.364 3.754h-19.7l-30.466-52.769 14.889-26.465a11.6 11.6 0 0 1 10.146-5.858 11.6 11.6 0 0 1 10.146 5.858l29.884 51.762v12.57a14.9 14.9 0 0 1-14.9 14.9Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 423",
          d: "M88.377 96.213a33.38 33.38 0 0 0 33.343-33.344 33.381 33.381 0 0 0-33.343-33.344 33.38 33.38 0 0 0-33.344 33.344 33.381 33.381 0 0 0 33.344 33.344Zm0-49.763a16.438 16.438 0 0 1 16.418 16.419 16.438 16.438 0 0 1-16.418 16.419 16.438 16.438 0 0 1-16.419-16.419A16.437 16.437 0 0 1 88.377 46.45Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 903",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  Jn = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path" },
          e.createElement("rect", {
            id: "Rectángulo_1016",
            "data-name": "Rectángulo 1016",
            width: "234.495",
            height: "256",
            fill: "#4ccb92",
          })
        ),
        e.createElement(
          "clipPath",
          { id: "clip-Add_Members_to_Group" },
          e.createElement("rect", { width: "256", height: "256" })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Add_Members_to_Group",
          "data-name": "Add Members to Group",
          clipPath: "url(#clip-Add_Members_to_Group)",
        },
        e.createElement("rect", { width: "256", height: "256", fill: "#fff" }),
        e.createElement(
          "g",
          {
            id: "Add_Members_to_Group_Icon",
            "data-name": "Add Members to Group Icon",
          },
          e.createElement(
            "g",
            {
              id: "Grupo_2404",
              "data-name": "Grupo 2404",
              transform: "translate(12)",
            },
            e.createElement(
              "g",
              { id: "Grupo_2403", "data-name": "Grupo 2403" },
              e.createElement("path", {
                id: "Trazado_7140",
                "data-name": "Trazado 7140",
                d: "M88.829,144.6h.048a66.829,66.829,0,0,0,27.035-5.707,69.009,69.009,0,0,0,22.1-15.529,72.055,72.055,0,0,0,14.891-22.977,73.863,73.863,0,0,0,5.463-28.1C158.372,32.435,127.183,0,88.831,0h0C50.5,0,19.316,32.43,19.316,72.292S50.5,144.6,88.829,144.6",
                transform: "translate(1.421)",
                fill: "#4ccb92",
              }),
              e.createElement("path", {
                id: "Trazado_7141",
                "data-name": "Trazado 7141",
                d: "M170.085,117.467a64.39,64.39,0,0,0-57.412,35.223c-1.427-.4-2.86-.784-4.3-1.124A94.705,94.705,0,0,0,86.9,149.044v.005c-1.755,0-3.439.046-5,.135A99.747,99.747,0,0,0,8.1,189.42c-.388.519-.767,1.061-1.234,1.756l-.107.15c-.1.142-.214.3-.312.458l-.027.028a37.88,37.88,0,0,0-2.671,37.522A31.97,31.97,0,0,0,32.509,247.36H142.044a31.485,31.485,0,0,0,13.08-2.84,64.408,64.408,0,1,0,14.961-127.054m.383,115.3a50.889,50.889,0,1,1,50.888-50.888,50.888,50.888,0,0,1-50.888,50.888m-7.982-26.944V189.859H146.524V173.895h15.963V157.931H178.45v15.964h15.963v15.964H178.45v15.963Z",
                transform: "translate(0 8.64)",
                fill: "#4ccb92",
              })
            )
          ),
          e.createElement("rect", {
            id: "Rectángulo_1017",
            "data-name": "Rectángulo 1017",
            width: "256",
            height: "256",
            fill: "none",
          })
        )
      )
    );
  },
  el = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement("path", {
        "data-name": "Rect\\xE1ngulo 1602",
        fill: "none",
        d: "M0 0h256v256H0z",
      }),
      e.createElement(
        "g",
        { fill: "#2781b0" },
        e.createElement("path", {
          "data-name": "Trazado 7242",
          d: "m20.695 32.211 11.313-11.318 203.3 203.4-11.313 11.318Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 7243",
          d: "M19.371 106.631C6.694 118.186 0 133.962 0 152.26a61.725 61.725 0 0 0 20.253 46.312c12.578 11.424 29.547 17.714 47.778 17.714h114.108L55.275 89.429c-14.007 2.7-26.556 8.672-35.911 17.2Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 7244",
          d: "M238.286 203.889C249.875 194.662 256 180.961 256 164.264c0-30.939-24.23-47.692-48.894-51.341-3.258-20.595-12.03-38.216-25.568-51.249a76.817 76.817 0 0 0-53.589-21.459 73.336 73.336 0 0 0-41.553 12.506l151.47 151.492c.128-.107.285-.206.42-.313Z",
        })
      )
    );
  },
  al = function (e) {
    return a.createElement(
      "svg",
      T({}, e, {
        className: "min-icon",
        fill: "currentcolor",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 121.755 29.822",
      }),
      a.createElement("path", {
        className: "prefix__a",
        d: "M15.647 15.935l-1.772 1.194a6.088 6.088 0 00-5.135-2.652 6.348 6.348 0 00-6.522 6.654 6.348 6.348 0 006.522 6.654 6.031 6.031 0 005.124-2.64l1.735 1.266a8.126 8.126 0 01-6.859 3.411A8.422 8.422 0 010 21.131a8.422 8.422 0 018.74-8.691 7.963 7.963 0 016.907 3.495zM35.641 21.131a8.422 8.422 0 01-8.74 8.691 8.422 8.422 0 01-8.739-8.691 8.421 8.421 0 018.739-8.691 8.422 8.422 0 018.74 8.691zm-15.261 0a6.347 6.347 0 006.521 6.654 6.347 6.347 0 006.521-6.654 6.347 6.347 0 00-6.521-6.654 6.347 6.347 0 00-6.521 6.654zM53.729 29.581h-1.917l-10.2-13.26-.012 13.248h-2.122V12.681h1.917l10.21 13.26V12.693h2.122zM69.551 16.02a8.835 8.835 0 00-5-1.555c-2.471 0-4.231 1.109-4.231 2.929 0 1.531 1.29 2.315 3.821 2.628l1.484.181c2.856.35 5.3 1.507 5.3 4.484 0 3.364-3.05 5.123-6.7 5.123a10.935 10.935 0 01-6.654-2.194l1.157-1.687a9.018 9.018 0 005.5 1.868c2.519 0 4.5-1.025 4.5-2.929 0-1.567-1.41-2.314-4.038-2.64l-1.567-.193c-2.784-.337-5-1.627-5-4.508 0-3.255 2.893-5.075 6.449-5.075a10.336 10.336 0 016.076 1.844zM91.268 21.131a8.422 8.422 0 01-8.74 8.691 8.422 8.422 0 01-8.739-8.691 8.421 8.421 0 018.739-8.691 8.422 8.422 0 018.74 8.691zm-15.261 0a6.348 6.348 0 006.521 6.654 6.347 6.347 0 006.521-6.654 6.347 6.347 0 00-6.521-6.654 6.348 6.348 0 00-6.521 6.654zM106.897 29.569h-11.79V12.693h2.122v14.863h9.668zM121.76 29.569h-11.982V12.693h11.862v1.988h-9.74v5.389h9.427v2H111.9v5.509h9.86zM14.9.167h2.576v7.547H14.9zM11.801.238l-5.23 3.194a.229.229 0 01-.242 0L1.099.238a.726.726 0 00-.374-.1H.719a.717.717 0 00-.717.717v6.864h2.574V4.462a.258.258 0 01.392-.22l2.931 1.793a.919.919 0 00.944.009L9.935 4.23a.258.258 0 01.388.222v3.267h2.575V.855a.717.717 0 00-.717-.717h-.006a.723.723 0 00-.374.1zM30.348.165h-2.613v3.463a.258.258 0 01-.379.228L20.585.249a.723.723 0 00-.337-.084.717.717 0 00-.717.717v6.832h2.592V4.306a.258.258 0 01.379-.227l6.8 3.606a.714.714 0 00.336.083.716.716 0 00.717-.717V.165zM32.439 7.712V.165h1.2v7.547zM40.536 7.878c-3.189 0-5.451-1.513-5.451-3.939S37.361 0 40.536 0s5.466 1.513 5.466 3.939-2.236 3.939-5.466 3.939zm0-6.87c-2.371 0-4.2 1.036-4.2 2.931s1.826 2.93 4.2 2.93 4.212-1.022 4.212-2.93-1.84-2.931-4.212-2.931z",
      })
    );
  },
  tl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 23.786 22.2",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path-prom-error" },
          e.createElement("rect", {
            id: "Rectángulo_1578",
            "data-name": "Rectángulo 1578",
            width: "23.786",
            height: "22.2",
            fill: "none",
          })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Grupo_2402",
          "data-name": "Grupo 2402",
          clipPath: "url(#clip-path-prom-error)",
        },
        e.createElement("path", {
          id: "Trazado_7049",
          "data-name": "Trazado 7049",
          d: "M23.786,7.136a3.967,3.967,0,0,0-4.824-3.871A11.1,11.1,0,1,0,22.2,11.1c0-.26-.01-.518-.027-.773a3.958,3.958,0,0,0,1.613-3.192M11.1,20.776v0a2.92,2.92,0,0,1-3.158-2.6h6.317a2.922,2.922,0,0,1-3.159,2.6m5.217-3.464H5.883V15.42H16.317Zm-.038-2.865H5.913c-.035-.04-.07-.079-.1-.119a7.561,7.561,0,0,1-1.564-2.664c0-.023,1.295.266,2.22.476,0,0,.476.109,1.167.238A4.332,4.332,0,0,1,6.573,9.592c0-2.225,1.707-4.17,1.091-5.741.6.048,1.24,1.269,1.284,3.166a6.8,6.8,0,0,0,.9-3.474c0-1.02.672-2.207,1.348-2.247-.6.988.159,1.835.826,3.937.251.793.22,2.118.414,2.961.064-1.75.366-4.3,1.476-5.185a3.83,3.83,0,0,0,.457,3.167,6,6,0,0,1,1,3.437,4.294,4.294,0,0,1-1.031,2.775c.733-.137,1.239-.262,1.239-.262l2.379-.465a6.749,6.749,0,0,1-1.676,2.785M19.822,10.7A3.568,3.568,0,1,1,23.39,7.136,3.568,3.568,0,0,1,19.822,10.7",
          transform: "translate(0 -0.001)",
          fill: "#c83b51",
        }),
        e.createElement("path", {
          id: "Trazado_7050",
          "data-name": "Trazado 7050",
          d: "M491.022,131.222l.121-2.851h-1.17l.121,2.851Z",
          transform: "translate(-470.607 -123.297)",
          fill: "#c83b51",
        }),
        e.createElement("path", {
          id: "Trazado_7051",
          "data-name": "Trazado 7051",
          d: "M488.865,209.66a.655.655,0,1,0,.65.65.667.667,0,0,0-.65-.65",
          transform: "translate(-468.913 -201.374)",
          fill: "#c83b51",
        })
      )
    );
  },
  nl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          viewBox: "0 0 256 256",
          fill: "currentcolor",
        },
        a
      ),
      e.createElement(
        "g",
        { transform: "translate(23.344 0.006)" },
        e.createElement(
          "g",
          null,
          e.createElement(
            "g",
            null,
            e.createElement(
              "g",
              null,
              e.createElement("path", {
                d: "M76.7,73.6c4.6,4.6,11.9,4.6,16.5,0l0,0l25-25c4.6-4.6,4.6-11.9,0-16.5l0,0l-25-25\n\t\t\t\t\t\t\t\tc-4.6-4.6-11.9-4.6-16.5,0s-4.6,11.9,0,16.5l7.2,7.2c-47,9.9-80.8,51.3-80.8,99.4c0,6.4,5.2,11.7,11.7,11.7\n\t\t\t\t\t\t\t\ts11.7-5.2,11.7-11.7c0-32.4,20-61.4,50.2-73C72.2,61.8,72.2,69.1,76.7,73.6",
              }),
              e.createElement("path", {
                d: "M208.8,126.8c0-6.4-5.2-11.7-11.7-11.7c-6.4,0-11.7,5.2-11.7,11.7c0,32.4-20,61.4-50.2,73\n\t\t\t\t\t\t\t\tc4.5-4.6,4.4-12-0.2-16.5c-4.6-4.5-11.9-4.4-16.4,0.1l-25,25c-1.4,1.4-2.4,3.1-2.9,4.9c-0.5,1.8-0.6,3.7-0.3,5.5\n\t\t\t\t\t\t\t\tc0.4,2.3,1.6,4.4,3.2,6l0,0l25,25c4.6,4.6,11.9,4.6,16.5,0s4.6-11.9,0-16.5l-7.2-7.2C175,216.3,208.7,174.9,208.8,126.8",
              }),
              e.createElement("path", {
                d: "M92.8,157.8l6-4.5c0.9,0.4,1.8,0.8,2.8,1.2l1.1,7.5c0.2,1.4,1.4,2.4,2.8,2.4h10.6\n\t\t\t\t\t\t\t\tc1.4,0,2.6-1,2.8-2.4l1.1-7.5c0.9-0.3,1.9-0.7,2.8-1.2l6,4.5c1.1,0.8,2.6,0.7,3.6-0.2l7.5-7.5c1-1,1.1-2.5,0.2-3.6l-4.5-6\n\t\t\t\t\t\t\t\tc0.4-0.9,0.8-1.8,1.2-2.8l7.5-1.1c1.4-0.2,2.4-1.4,2.4-2.8v-10.7c0-1.4-1-2.5-2.3-2.7l-7.5-1.1c-0.3-0.9-0.7-1.9-1.2-2.8\n\t\t\t\t\t\t\t\tl4.5-6c0.8-1.1,0.7-2.6-0.3-3.6l-7.5-7.6c-1-1-2.5-1.1-3.6-0.2l-6,4.5c-0.9-0.4-1.8-0.8-2.8-1.2l-1.1-7.5\n\t\t\t\t\t\t\t\tc-0.2-1.4-1.4-2.4-2.8-2.4h-10.7c-1.4,0-2.6,1-2.7,2.4l-1.1,7.5c-0.9,0.3-1.9,0.7-2.8,1.2l-6-4.5c-1.1-0.8-2.6-0.7-3.6,0.2\n\t\t\t\t\t\t\t\tl-7.5,7.5c-1,1-1.1,2.5-0.3,3.6l4.5,6c-0.4,0.9-0.8,1.8-1.2,2.8l-7.5,1.1c-1.4,0.2-2.4,1.4-2.4,2.8v10.6c0,1.4,1,2.6,2.4,2.8\n\t\t\t\t\t\t\t\tl7.5,1.1c0.3,0.9,0.7,1.9,1.2,2.8l-4.5,6.1c-0.8,1.1-0.7,2.6,0.3,3.6l7.5,7.5C90.2,158.6,91.7,158.7,92.8,157.8 M102.5,128.5\n\t\t\t\t\t\t\t\tc-0.1-4.6,3.6-8.3,8.2-8.3c4.6-0.1,8.3,3.6,8.3,8.2c0,0.1,0,0.1,0,0.2l0,0c0,4.6-3.7,8.3-8.2,8.3l0,0\n\t\t\t\t\t\t\t\tC106.2,136.8,102.5,133.1,102.5,128.5L102.5,128.5L102.5,128.5z",
              })
            )
          )
        )
      )
    );
  },
  ll = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path" },
          e.createElement("rect", {
            id: "Rectángulo_1025",
            "data-name": "Rectángulo 1025",
            width: "256",
            height: "236.235",
            fill: "none",
          })
        ),
        e.createElement(
          "clipPath",
          { id: "clip-Drive_Format_Errors" },
          e.createElement("rect", { width: "256", height: "256" })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Drive_Format_Errors",
          "data-name": "Drive Format Errors",
          clipPath: "url(#clip-Drive_Format_Errors)",
        },
        e.createElement("rect", { width: "256", height: "256", fill: "#fff" }),
        e.createElement(
          "g",
          {
            id: "Drive_Format_Errors-Icon",
            "data-name": "Drive Format Errors-Icon",
          },
          e.createElement("rect", {
            id: "Rectángulo_1004",
            "data-name": "Rectángulo 1004",
            width: "256",
            height: "256",
            fill: "none",
          }),
          e.createElement(
            "g",
            {
              id: "Grupo_2413",
              "data-name": "Grupo 2413",
              transform: "translate(0.637 9.778)",
            },
            e.createElement(
              "g",
              {
                id: "Grupo_2412",
                "data-name": "Grupo 2412",
                transform: "translate(0 0.001)",
              },
              e.createElement("path", {
                id: "Trazado_7156",
                "data-name": "Trazado 7156",
                d: "M97.03,336.139a9.708,9.708,0,1,1,.007,0",
                transform: "translate(-47.133 -168.561)",
                fill: "#c83b51",
              }),
              e.createElement("path", {
                id: "Trazado_7157",
                "data-name": "Trazado 7157",
                d: "M139.7,336.054a6.907,6.907,0,1,0-7.923-5.713,6.907,6.907,0,0,0,7.923,5.713",
                transform: "translate(-68.864 -168.564)",
                fill: "#c83b51",
              }),
              e.createElement("path", {
                id: "Trazado_7158",
                "data-name": "Trazado 7158",
                d: "M256.009,77.663A47.444,47.444,0,0,0,198.24,31.346a118.111,118.111,0,1,0,38,86.785c0-.642-.014-1.281-.024-1.921a47.383,47.383,0,0,0,19.793-38.546M43.519,118.312,67.309,58.88A5.7,5.7,0,0,1,72.6,55.3h91.06a5.686,5.686,0,0,1,2.687.677,47.446,47.446,0,0,0,26.623,66.516,5.7,5.7,0,0,1-5.312,3.641H48.809a5.7,5.7,0,0,1-5.29-7.818M201.9,175.033a5.937,5.937,0,0,1-5.936,5.936H40.294a5.936,5.936,0,0,1-5.936-5.936V146.671a5.936,5.936,0,0,1,5.936-5.936H195.96a5.937,5.937,0,0,1,5.936,5.936Zm6.94-59.871A37.494,37.494,0,1,1,246.33,77.668a37.494,37.494,0,0,1-37.494,37.494",
                transform: "translate(-0.009 -0.013)",
                fill: "#c83b51",
              }),
              e.createElement("path", {
                id: "Trazado_7159",
                "data-name": "Trazado 7159",
                d: "M282.274,335.577h-80.98a4.182,4.182,0,0,1-4.169-4.169v-5.956a4.182,4.182,0,0,1,4.169-4.169h80.98a4.182,4.182,0,0,1,4.169,4.169v5.956a4.182,4.182,0,0,1-4.169,4.169",
                transform: "translate(-103.088 -168.017)",
                fill: "#c83b51",
              }),
              e.createElement("path", {
                id: "Trazado_7160",
                "data-name": "Trazado 7160",
                d: "M435.958,142.765l1.282-30.209h-12.4l1.282,30.209Z",
                transform: "translate(-222.172 -58.862)",
                fill: "#c83b51",
              }),
              e.createElement("path", {
                id: "Trazado_7161",
                "data-name": "Trazado 7161",
                d: "M430.2,183.9a6.94,6.94,0,1,0,6.887,6.993v-.106A7.067,7.067,0,0,0,430.2,183.9",
                transform: "translate(-221.316 -96.17)",
                fill: "#c83b51",
              })
            )
          )
        )
      )
    );
  },
  rl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: 20,
          height: 20,
          className: "min-icon",
          fill: "currentcolor",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "registration-icon_svg__a" },
          e.createElement("path", {
            "data-name": "Rect\\xE1ngulo 1593",
            fill: "#4ccb92",
            d: "M0 0h20v20H0z",
          })
        )
      ),
      e.createElement(
        "g",
        {
          "data-name": "Grupo 2469",
          clipPath: "url(#registration-icon_svg__a)",
        },
        e.createElement("path", {
          "data-name": "Trazado 7117",
          d: "M19.075 11.962a3.1 3.1 0 0 0 1.008-1.965 3.1 3.1 0 0 0-1.008-1.963 3.134 3.134 0 0 1-.633-.894 3.4 3.4 0 0 1 0-1.164 3.121 3.121 0 0 0-.286-2.154 2.856 2.856 0 0 0-1.892-.952 3.024 3.024 0 0 1-1.053-.353 3.232 3.232 0 0 1-.628-.917A2.982 2.982 0 0 0 13.118 0a2.77 2.77 0 0 0-2.029.383 3.079 3.079 0 0 1-1.085.368 3.079 3.079 0 0 1-1.085-.37A2.77 2.77 0 0 0 6.89-.002a2.99 2.99 0 0 0-1.465 1.599 3.236 3.236 0 0 1-.633.922 3.033 3.033 0 0 1-1.05.351 2.856 2.856 0 0 0-1.892.953 3.133 3.133 0 0 0-.284 2.142 3.448 3.448 0 0 1 0 1.164 3.216 3.216 0 0 1-.633.9A3.1 3.1 0 0 0-.075 9.996a3.1 3.1 0 0 0 1.008 1.965 3.246 3.246 0 0 1 .633.89 3.462 3.462 0 0 1 0 1.166 3.133 3.133 0 0 0 .284 2.154 2.856 2.856 0 0 0 1.892.952 3.033 3.033 0 0 1 1.05.351 3.234 3.234 0 0 1 .633.921 2.982 2.982 0 0 0 1.465 1.592 2.77 2.77 0 0 0 2.029-.383 3.076 3.076 0 0 1 1.085-.37 3.077 3.077 0 0 1 1.085.368 3.769 3.769 0 0 0 1.525.472 1.561 1.561 0 0 0 .5-.082 2.978 2.978 0 0 0 1.465-1.6 3.249 3.249 0 0 1 .633-.921 3.032 3.032 0 0 1 1.05-.351 2.856 2.856 0 0 0 1.892-.952 3.113 3.113 0 0 0 .284-2.157 3.445 3.445 0 0 1 0-1.164 3.16 3.16 0 0 1 .633-.889m-10.13 1.894-3.89-4.066 1.38-1.437 2.51 2.618 4.638-4.833 1.38 1.442Z",
          fill: "currentcolor",
        })
      )
    );
  },
  cl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 26 25",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path-call-home-feature" },
          e.createElement("rect", {
            id: "Rectángulo_1614",
            "data-name": "Rectángulo 1614",
            width: "6.172",
            height: "6.309",
            stroke: "rgba(0,0,0,0)",
            strokeWidth: "1",
          })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Grupo_2540",
          "data-name": "Grupo 2540",
          transform: "translate(0.531 0.596)",
        },
        e.createElement("path", {
          id: "call-home-icon",
          d: "M16.865,8.241a1.7,1.7,0,0,1-1.6,1.092h-.633v5.3a1.694,1.694,0,0,1-1.694,1.694h-8.9a1.7,1.7,0,0,1-1.694-1.694v-5.3H1.71A1.694,1.694,0,0,1,.58,6.362L7.358.432a1.694,1.694,0,0,1,2.259,0L16.4,6.362h0a1.694,1.694,0,0,1,.47,1.879",
          transform: "translate(0 0)",
          fill: "#07193e",
          stroke: "rgba(0,0,0,0)",
          strokeWidth: "1",
        }),
        e.createElement(
          "g",
          {
            id: "Grupo_2539",
            "data-name": "Grupo 2539",
            transform: "translate(5.441 6.68)",
          },
          e.createElement(
            "g",
            {
              id: "Grupo_2539-2",
              "data-name": "Grupo 2539",
              clipPath: "url(#clip-path-call-home-feature)",
            },
            e.createElement("path", {
              id: "Trazado_7262",
              "data-name": "Trazado 7262",
              d: "M4.6,38.068a.164.164,0,0,0-.231,0l-.377.377a.149.149,0,0,1-.21,0L2.254,36.918a.149.149,0,0,1,0-.21l.377-.377a.164.164,0,0,0,0-.231L1.4,34.871a.164.164,0,0,0-.231,0l-.763.763a1.4,1.4,0,0,0,0,1.982l2.669,2.672a1.4,1.4,0,0,0,1.982,0l.763-.763a.164.164,0,0,0,0-.231Z",
              transform: "translate(0 -34.389)",
              stroke: "rgba(0,0,0,0)",
              strokeWidth: "1",
            })
          )
        ),
        e.createElement(
          "g",
          {
            id: "Grupo_2537",
            "data-name": "Grupo 2537",
            transform: "translate(12.323 0)",
          },
          e.createElement(
            "g",
            {
              id: "Elipse_623",
              "data-name": "Elipse 623",
              transform: "translate(-0.323 -0.249)",
              fill: "#4ccb92",
              stroke: "#fff",
              strokeWidth: "1",
            },
            e.createElement("circle", {
              cx: "7",
              cy: "7",
              r: "7",
              stroke: "none",
            }),
            e.createElement("circle", {
              cx: "7",
              cy: "7",
              r: "6.5",
              fill: "none",
            })
          ),
          e.createElement(
            "g",
            { id: "check", transform: "translate(2.934 4.069)" },
            e.createElement("path", {
              id: "Trazado_7261",
              "data-name": "Trazado 7261",
              d: "M14.9,10.862a.622.622,0,1,1,.889.871l-3.311,4.139a.622.622,0,0,1-.9.017L9.384,13.694a.622.622,0,1,1,.879-.879L12,14.551l2.881-3.67.017-.018Z",
              transform: "translate(-9.182 -10.676)",
            })
          )
        )
      )
    );
  },
  ml = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "trace-icn",
          d: "m28.428 74.404 56.9 62.738v110.977A8.062 8.062 0 0 1 77.154 256H65.065a8.082 8.082 0 0 1-8.189-7.881v-98.742L.003 82.287V7.879A8.036 8.036 0 0 1 8.16 0h12.105a8.043 8.043 0 0 1 8.166 7.879Zm56.9-66.525A8.061 8.061 0 0 0 77.154 0H65.065a8.081 8.081 0 0 0-8.189 7.879v71.315l56.921 67.091v101.834a8.045 8.045 0 0 0 8.166 7.881h12.1a8.058 8.058 0 0 0 8.157-7.881V134.051L85.331 71.322ZM134.059 0h-12.1a8.044 8.044 0 0 0-8.166 7.879v39.1a8.044 8.044 0 0 0 8.166 7.88h12.1a8.058 8.058 0 0 0 8.157-7.88v-39.1a8.057 8.057 0 0 0-8.16-7.88Zm44.783 118.856h12.105a8.05 8.05 0 0 0 8.166-7.88V7.876a8.049 8.049 0 0 0-8.166-7.879h-12.105a8.056 8.056 0 0 0-8.174 7.879v103.1a8.058 8.058 0 0 0 8.172 7.88ZM247.818-.001h-12.1a8.043 8.043 0 0 0-8.165 7.879v39.1a8.044 8.044 0 0 0 8.165 7.88h12.1a8.059 8.059 0 0 0 8.182-7.88v-39.1a8.058 8.058 0 0 0-8.182-7.879Zm0 173.715h-12.1a8.044 8.044 0 0 0-8.165 7.881v66.523a8.044 8.044 0 0 0 8.165 7.881h12.1a8.059 8.059 0 0 0 8.182-7.881v-66.519a8.058 8.058 0 0 0-8.182-7.884Zm0-82.286h-12.1a8.044 8.044 0 0 0-8.165 7.881v17.727l-56.889 56.678v74.4a8.057 8.057 0 0 0 8.174 7.881h12.105a8.05 8.05 0 0 0 8.166-7.881v-56.115l56.889-67.09v-25.6a8.059 8.059 0 0 0-8.18-7.881ZM20.262 137.142H8.157A8.038 8.038 0 0 0 0 145.022v103.1a8.037 8.037 0 0 0 8.157 7.881h12.105a8.044 8.044 0 0 0 8.166-7.881v-103.1a8.045 8.045 0 0 0-8.166-7.88Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 880",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  ol = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 858",
          fill: "none",
          d: "M0 0h256v256H0z",
        }),
        e.createElement("path", {
          "data-name": "Uni\\xF3n 20",
          d: "M102.405 230.399v-76.79h-76.8a25.607 25.607 0 0 1 0-51.214h76.8V25.601a25.6 25.6 0 1 1 51.2 0v76.792h76.8a25.607 25.607 0 0 1 0 51.214h-76.8v76.792a25.6 25.6 0 1 1-51.2 0Z",
        })
      )
    );
  },
  il = function (e) {
    return a.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 21.883 17.614",
        },
        e
      ),
      a.createElement(
        "g",
        {
          id: "Grupo_2504",
          "data-name": "Grupo 2504",
          transform: "translate(-492.881 -516.58)",
        },
        a.createElement(
          "g",
          {
            id: "google-cloud-logo-color",
            transform: "translate(492.881 516.58)",
          },
          a.createElement(
            "g",
            { id: "Grupo_1820", "data-name": "Grupo 1820" },
            a.createElement("path", {
              id: "Trazado_6946",
              "data-name": "Trazado 6946",
              d: "M67.542,36.137h.667l1.9-1.9.093-.808A8.55,8.55,0,0,0,56.3,37.6a1.03,1.03,0,0,1,.667-.039l3.8-.628s.193-.321.294-.3a4.745,4.745,0,0,1,6.494-.494Z",
              transform: "translate(-53.656 -31.287)",
            }),
            a.createElement("path", {
              id: "Trazado_6947",
              "data-name": "Trazado 6947",
              d: "M229.968,80.926a8.562,8.562,0,0,0-2.582-4.164l-2.669,2.669a4.746,4.746,0,0,1,1.742,3.765v.474a2.376,2.376,0,0,1,0,4.752h-4.752l-.474.481v2.85l.474.474h4.752a6.182,6.182,0,0,0,3.51-11.3Z",
              transform: "translate(-210.804 -74.614)",
              fill: "#6b8295",
            }),
            a.createElement("path", {
              id: "Trazado_6948",
              "data-name": "Trazado 6948",
              d: "M6.558,142.319A6.18,6.18,0,0,0,2.828,153.4l2.756-2.756A2.376,2.376,0,1,1,8.727,147.5l2.756-2.756a6.166,6.166,0,0,0-4.924-2.423Z",
              transform: "translate(-0.415 -137.075)",
              fill: "#9aafbf",
            })
          )
        )
      )
    );
  },
  hl = function (e) {
    return a.createElement(
      "svg",
      T({}, e, {
        className: "min-icon",
        fill: "currentcolor",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 10 10",
      }),
      a.createElement("path", {
        d: "M0,0v10l2.8-2.2H10V0H0z M6.6,6L5.6,6.4l-0.8-2l-1.5,2L2.5,5.9l1.9-2.6L4.1,2.4H3.2v-1h1.5l1.4,3.7l0.9-0.4\n\tl0.4,0.9L6.6,6z",
      })
    );
  },
  dl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Trazado 465",
          d: "M235.997 77.196c.388-15.754.958-32.242-.5-47.941-1.094-11.755-6.193-21.736-17.831-25.915a42.42 42.42 0 0 0-5.017-1.447C206.1.414 199.217.293 192.56.093c-11.727-.343-23.45.366-35.177.314-23.493-.1-46.985.322-70.479.414q-4.228.018-8.455.017H36.242a17.26 17.26 0 0 0-17.241 17.241v220.686a17.259 17.259 0 0 0 17.241 17.24h182.541a17.26 17.26 0 0 0 17.24-17.24V128.813c.003-17.182-.448-34.458-.026-51.617Zm-20.922 145.986a14.889 14.889 0 0 1-14.89 14.89H51.818a14.888 14.888 0 0 1-14.888-14.89V33.665a14.888 14.888 0 0 1 14.889-14.889h99.547v25.459a37.8 37.8 0 0 0 37.757 37.758h25.951Zm0-157.655h-25.949a21.321 21.321 0 0 1-21.3-21.3V18.765h32.359a14.888 14.888 0 0 1 14.888 14.889Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 466",
          d: "M125.412 80.164a71.163 71.163 0 0 0-71.086 71.082 71.163 71.163 0 0 0 71.082 71.082 71.163 71.163 0 0 0 71.083-71.082 71.163 71.163 0 0 0-71.079-71.082Zm-23.487 19.951c-8.025 12.368-14.515 27.117-16.227 43.732h-16.07a56.413 56.413 0 0 1 32.3-43.732Zm-32.3 58.529h15.866a88.49 88.49 0 0 0 4.224 21.1 102.125 102.125 0 0 0 10.114 21.612 56.4 56.4 0 0 1-30.2-42.712Zm48.386 43.154c-6.658-8.526-16.02-23.7-17.687-43.154h17.687Zm0-57.951h-17.4c1.562-12.561 6.66-26.4 17.4-41.033Zm14.8-41.032c10.734 14.633 15.833 28.471 17.4 41.032h-17.4Zm0 98.982v-43.154h17.687c-1.672 19.455-11.029 34.63-17.688 43.155Zm18.183-.441a102 102 0 0 0 10.112-21.612 88.429 88.429 0 0 0 4.224-21.1h15.867a56.4 56.4 0 0 1-30.2 42.713Zm14.133-57.51c-1.711-16.616-8.2-31.364-16.226-43.732a56.413 56.413 0 0 1 32.3 43.731Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 910",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  sl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { "data-name": "Back Settings", clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "arrow-icn",
          d: "M236.198 108.063c26.394 0 26.394 40.032 0 40.032H68.514l22.739 22.668c18.656 18.623-9.726 46.923-28.382 28.318L5.998 142.348a19.991 19.991 0 0 1 0-28.548l56.877-56.716c18.656-18.6 47.038 9.684 28.382 28.3l-22.743 22.679h167.684Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 863",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  pl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Uni\\xF3n 16",
          d: "M15.084 248.677c-8.375 0-15.186-7.333-15.186-16.344V70.89c0-9.016 6.811-16.354 15.186-16.354l118.74-1.037a62.9 62.9 0 0 1 4.355-11.793 62.879 62.879 0 0 1 6.645-10.7 61.818 61.818 0 0 1 8.719-9.186 61.885 61.885 0 0 1 10.6-7.323 62.176 62.176 0 0 1 29.791-7.6 62.232 62.232 0 0 1 62.164 62.164 61.645 61.645 0 0 1-3.574 20.762 61.809 61.809 0 0 1-9.9 17.787 62.654 62.654 0 0 1-14.977 13.581 61.989 61.989 0 0 1-18.74 8.129v103.014c0 9.011-6.8 16.344-15.17 16.344Zm4.492-172.963a14.386 14.386 0 0 0-3.795 9.851V217.65c0 7.682 5.8 13.93 12.939 13.93h151.4c7.121 0 12.916-6.248 12.916-13.93v-86.472a61.49 61.49 0 0 1-23.232-4.875 61.964 61.964 0 0 1-19.193-12.784 62.138 62.138 0 0 1-13.236-18.857 61.664 61.664 0 0 1-5.465-23.021H28.723a12.414 12.414 0 0 0-9.147 4.072Zm152.111-47.433a46.458 46.458 0 0 0-24.189 40.779 46.493 46.493 0 0 0 46.438 46.442 46.4 46.4 0 0 0 14.4-2.311 5.7 5.7 0 0 0 .391-.509l.184-.269v.566a46.525 46.525 0 0 0 12.549-6.574 46.832 46.832 0 0 0 10-10.039 46.2 46.2 0 0 0 6.57-12.7 46.119 46.119 0 0 0 2.357-14.6 46.5 46.5 0 0 0-46.453-46.447 46.451 46.451 0 0 0-22.247 5.662ZM45.818 209.303a1.006 1.006 0 0 1-1-1.009v-20.649a1.006 1.006 0 0 1 1-1.009h110.521a1.011 1.011 0 0 1 1.01 1.009v20.649a1.011 1.011 0 0 1-1.01 1.009Zm0-44.934a1.006 1.006 0 0 1-1-1.009v-20.649a1.006 1.006 0 0 1 1-1.009h110.521a1.011 1.011 0 0 1 1.01 1.009v20.649a1.011 1.011 0 0 1-1.01 1.009Zm0-44.934a1.006 1.006 0 0 1-1-1.009V97.777a1.006 1.006 0 0 1 1-1.009h88.053a1.009 1.009 0 0 1 1.008 1.009v20.649a1.009 1.009 0 0 1-1.008 1.009Zm144.836-27.656h-.023a6.229 6.229 0 0 1-4.484-1.886L172.17 75.921a6.4 6.4 0 0 1 .316-9.04 6.387 6.387 0 0 1 4.361-1.716 6.392 6.392 0 0 1 4.357 1.716l9.449 9.459 23.482-23.436a6.3 6.3 0 0 1 4.518-1.881 6.312 6.312 0 0 1 4.461 1.825l.053.057a6.323 6.323 0 0 1 1.895 4.484 6.3 6.3 0 0 1-1.838 4.5l-.057.057-27.982 27.951a6.211 6.211 0 0 1-4.48 1.886Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 877",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  vl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Trazado 6970",
          d: "M27 101h202a27 27 0 0 1 0 54H27a27 27 0 0 1 0-54Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 916",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  fl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Trazado 442",
          d: "M235.994 77.357c.388-15.754 1.486-43.417.028-59.116C234.928 6.486 221.639 1.196 212.322 1 205.771-.478 80.8.119 36.406.119 26.889.13 19.006 8.719 19 18.241v220.678a17.26 17.26 0 0 0 17.24 17.241h182.544a17.26 17.26 0 0 0 17.241-17.241V128.974c-.005-17.183-.451-34.458-.031-51.617Zm-20.92 145.986a14.889 14.889 0 0 1-14.888 14.888H51.816a14.888 14.888 0 0 1-14.888-14.888V33.82a14.889 14.889 0 0 1 14.887-14.888h99.55v25.459a37.8 37.8 0 0 0 37.756 37.759h25.952Zm0-157.656h-25.952a21.32 21.32 0 0 1-21.3-21.3V18.928h32.358a14.889 14.889 0 0 1 14.889 14.887Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 443",
          d: "M190.043 108.409h-2.858v-.481c0-4.811-3.442-8.716-7.847-8.89-3.582-.139-7.333-.09-11.4.146v-8.975a9.1 9.1 0 0 0-3.651-7.42 7.623 7.623 0 0 0-8.069-.585 103.462 103.462 0 0 0-20.433 14.719 147.056 147.056 0 0 0-10.4 10.7 128.076 128.076 0 0 0-16.659-5.074 127.9 127.9 0 0 0-34.506-3.51c-4.378.2-7.8 4.1-7.8 8.888v.483h-2.858c-4.489 0-8.141 3.989-8.141 8.892v71.865c0 8.348 6.119 15.14 13.641 15.14h35.989a17.914 17.914 0 0 1 12.641 5.463 12.749 12.749 0 0 0 9.108 3.911h.024a12.907 12.907 0 0 0 9.054-3.9 17.918 17.918 0 0 1 12.68-5.474h35.987c7.522 0 13.641-6.792 13.641-15.14v-71.858c-.006-4.908-3.657-8.9-8.143-8.9Zm-68.633 79.066a124.047 124.047 0 0 0-12.692-3.692 127.989 127.989 0 0 0-28.66-3.509c-1.549 0-2.857-1.653-2.857-3.607v-66.1h2.114a117.162 117.162 0 0 1 42.1 7.846Zm54.992-10.809c0 1.955-1.308 3.607-2.88 3.607a129.374 129.374 0 0 0-26.5 2.984 89.847 89.847 0 0 1 13.362-9.124 15.293 15.293 0 0 0 7.55-13.56v-49.836a112.11 112.11 0 0 1 8.463-.239Zm-19.251-16.057a3.781 3.781 0 0 1-1.6 3.282 100.834 100.834 0 0 0-19.759 14.271 113.862 113.862 0 0 0-3.6 3.464v-64.967a131.421 131.421 0 0 1 10.636-10.965l.011-.009a91.536 91.536 0 0 1 14.314-10.886Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 897",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  El = function (e) {
    return a.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 28 28",
        },
        e
      ),
      a.createElement(
        "g",
        { id: "Tiers-NotAvailable-icon", transform: "translate(-340 -149)" },
        a.createElement("circle", {
          id: "Elipse_594",
          "data-name": "Elipse 594",
          cx: "14",
          cy: "14",
          r: "14",
          transform: "translate(340 149)",
          fill: "#c83b51",
        }),
        a.createElement(
          "g",
          { id: "Grupo_2399", "data-name": "Grupo 2399" },
          a.createElement(
            "g",
            { id: "TiersIcon", transform: "translate(345 154)" },
            a.createElement("rect", {
              id: "Rectángulo_848",
              "data-name": "Rectángulo 848",
              width: "17.95",
              height: "17.95",
              transform: "translate(0 0.021)",
              fill: "none",
            }),
            a.createElement(
              "g",
              { id: "tiers-icn", transform: "translate(-0.001 0)" },
              a.createElement(
                "g",
                { id: "tiers" },
                a.createElement("path", {
                  id: "Trazado_441",
                  "data-name": "Trazado 441",
                  d: "M13,3a.8.8,0,0,0-.392.092L4.374,7.482a.666.666,0,0,0,0,1.2l2.54,1.354-2.54,1.354a.666.666,0,0,0,0,1.2l2.54,1.353-2.54,1.354a.666.666,0,0,0,0,1.2l8.236,4.39a.8.8,0,0,0,.749,0l8.236-4.39a.666.666,0,0,0,0-1.2l-2.54-1.354,2.54-1.353a.666.666,0,0,0,0-1.2l-2.54-1.354L21.6,8.678a.666.666,0,0,0,0-1.2L13.36,3.092A.8.8,0,0,0,13,3ZM8.414,10.832l4.2,2.237a.8.8,0,0,0,.749,0l4.2-2.237,2.167,1.154-6.739,3.591L6.246,11.986Zm0,3.9,4.2,2.237a.8.8,0,0,0,.749,0l4.2-2.237,2.166,1.154-6.739,3.591L6.246,15.89Z",
                  transform: "translate(-4 -3)",
                })
              )
            )
          ),
          a.createElement(
            "g",
            {
              id: "Grupo_2398",
              "data-name": "Grupo 2398",
              transform: "translate(-3 5)",
            },
            a.createElement("circle", {
              id: "Elipse_593",
              "data-name": "Elipse 593",
              cx: "5",
              cy: "5",
              r: "5",
              transform: "translate(358 156)",
            }),
            a.createElement("path", {
              id: "Elipse_593_-_Contorno",
              "data-name": "Elipse 593 - Contorno",
              d: "M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z",
              transform: "translate(358 156)",
              fill: "#c83b51",
            }),
            a.createElement(
              "g",
              { id: "Page-1", transform: "translate(361.707 159.513)" },
              a.createElement(
                "g",
                { id: "Fill-2", transform: "translate(0 0)" },
                a.createElement("path", {
                  id: "Trazado_6970",
                  "data-name": "Trazado 6970",
                  d: "M2.978.3l-.3-.3L1.489,1.189.3,0,0,.3,1.189,1.489,0,2.678l.3.3L1.489,1.789,2.678,2.978l.3-.3L1.789,1.489Z",
                  transform: "translate(0 0)",
                  fill: "#c83b51",
                }),
                a.createElement("path", {
                  id: "Trazado_6970_-_Contorno",
                  "data-name": "Trazado 6970 - Contorno",
                  d: "M.3-.354,1.489.835,2.678-.354,3.331.3,2.142,1.489,3.331,2.678l-.653.653L1.489,2.142.3,3.331l-.653-.653L.835,1.489-.354.3Z",
                  transform: "translate(0 0)",
                  fill: "#c83b51",
                })
              )
            )
          )
        )
      )
    );
  },
  ul = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 25 23",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path-perf-feat-icon" },
          e.createElement("rect", {
            id: "Rectángulo_985",
            "data-name": "Rectángulo 985",
            width: "17",
            height: "17",
            transform: "translate(-0.12 0.298)",
            fill: "#07193e",
          })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Grupo_2543",
          "data-name": "Grupo 2543",
          transform: "translate(0.12 0.101)",
        },
        e.createElement(
          "g",
          { id: "speedtest-icon-full", transform: "translate(0 5.601)" },
          e.createElement(
            "g",
            {
              id: "Grupo_2352",
              "data-name": "Grupo 2352",
              transform: "translate(0 0)",
              clipPath: "url(#clip-path-perf-feat-icon)",
            },
            e.createElement("path", {
              id: "Trazado_7077",
              "data-name": "Trazado 7077",
              d: "M120.559,129.741a.529.529,0,1,0,.529.529h0a.529.529,0,0,0-.529-.529",
              transform: "translate(-112.345 -121.572)",
              fill: "#07193e",
            }),
            e.createElement("path", {
              id: "Trazado_7078",
              "data-name": "Trazado 7078",
              d: "M8.2,0a8.2,8.2,0,1,0,8.2,8.2A8.2,8.2,0,0,0,8.2,0M8.16,2.27h.027a.5.5,0,1,1-.008,1H8.16a.5.5,0,0,1,0-1m-5.6,5.5v0a.19.19,0,0,1-.189.164H2.345a.19.19,0,0,1-.164-.214V7.717h0a.189.189,0,0,1,.213-.163h0a.19.19,0,0,1,.162.214M3,6.075H3a.278.278,0,0,1-.244-.406V5.662h0A.278.278,0,1,1,3,6.075M4.54,4.423l-.021.018-.006.005a.34.34,0,0,1-.225.088v0a.341.341,0,0,1-.224-.6l.006-.005h0l0,0a.342.342,0,1,1,.466.5m1.683-.868-.006,0-.011,0a.449.449,0,0,1-.162.034v0a.453.453,0,0,1-.16-.876l.013,0h0a.453.453,0,1,1,.325.845M9.1,12.6h0a.241.241,0,0,1-.241.241h-1.3a.241.241,0,1,1,0-.482h1.3A.241.241,0,0,1,9.1,12.6Zm1.067-4.771-.89.76a.021.021,0,0,0,0,.02,1.1,1.1,0,1,1-.668-.779.021.021,0,0,0,.021,0l.886-.76h0a.5.5,0,0,1,.651.759M10.1,3.7v0a.552.552,0,0,1-.2-.036L9.885,3.65a.554.554,0,0,1,.387-1.039l.019.007A.557.557,0,0,1,10.1,3.7m1.765,1.13a.628.628,0,0,1-.413-.155l-.016-.014a.629.629,0,0,1,.825-.948l.017.015a.628.628,0,0,1-.413,1.1M12.5,6.142l-.012-.022A.722.722,0,0,1,13.743,5.4l.017.032.013.023h0a.722.722,0,0,1-.291.979h0a.722.722,0,0,1-.979-.291m1.385,2.42a.817.817,0,0,1-.921-.7V7.835a.817.817,0,0,1,.809-.927.819.819,0,0,1,.807.7l0,.032a.817.817,0,0,1-.7.918",
              transform: "translate(0 -0.138)",
              fill: "#07193e",
            })
          )
        ),
        e.createElement(
          "g",
          {
            id: "Grupo_2538",
            "data-name": "Grupo 2538",
            transform: "translate(11.203 0)",
          },
          e.createElement(
            "g",
            {
              id: "Elipse_623",
              "data-name": "Elipse 623",
              transform: "translate(-0.324 -0.101)",
              fill: "#4ccb92",
              stroke: "#fff",
              strokeWidth: "1",
            },
            e.createElement("circle", {
              cx: "7",
              cy: "7",
              r: "7",
              stroke: "none",
            }),
            e.createElement("circle", {
              cx: "7",
              cy: "7",
              r: "6.5",
              fill: "none",
            })
          ),
          e.createElement(
            "g",
            { id: "check", transform: "translate(2.797 4.098)" },
            e.createElement("path", {
              id: "Trazado_7261",
              "data-name": "Trazado 7261",
              d: "M14.938,10.864a.627.627,0,1,1,.895.877L12.5,15.91a.627.627,0,0,1-.9.017l-2.21-2.211a.627.627,0,1,1,.886-.886l1.75,1.748,2.9-3.7.017-.018Z",
              transform: "translate(-9.182 -10.676)",
            })
          )
        )
      )
    );
  },
  gl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { "data-name": "Add Folder", clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          { "data-name": "add folder-icn" },
          e.createElement("path", {
            "data-name": "Uni\\xF3n 11",
            d: "M39.666 233.405A29.865 29.865 0 0 1 9.8 204.786L.074 97.965A20.666 20.666 0 0 1 0 96.155a29.835 29.835 0 0 1 20.248-28.183V54.5a20.051 20.051 0 0 1-.236-3.083A29.515 29.515 0 0 1 49.549 22h52.166c13.4 0 21.111 10.416 26.211 17.3.338.458.727.981 1.119 1.513h81.508a29.514 29.514 0 0 1 29.531 29.034A29.779 29.779 0 0 1 256 96.155c0 .619-.031 1.234-.092 1.853l-9.963 106.8a29.87 29.87 0 0 1-29.865 28.593ZM20.092 96.155l9.787 107.485a9.8 9.8 0 0 0 9.787 9.749H216.08a9.8 9.8 0 0 0 9.8-9.749l10.03-107.485a9.809 9.809 0 0 0-9.8-9.753H29.879a9.8 9.8 0 0 0-9.787 9.753Zm20.015-44.734h.227v23.514H219.99v-4.7a9.449 9.449 0 0 0-9.437-9.4H122.5c-7.082 0-14.17-18.814-20.783-18.814H49.549a9.449 9.449 0 0 0-9.442 9.4Zm80.588 128.7v-23.339H97.264a7.783 7.783 0 1 1 0-15.565H120.7v-23.335a7.809 7.809 0 0 1 15.617 0v23.335h23.432a7.783 7.783 0 1 1 0 15.565h-23.436v23.335a7.809 7.809 0 0 1-15.617 0Z",
            stroke: "rgba(0,0,0,0)",
            strokeMiterlimit: 10,
          })
        ),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 873",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  wl = function (e) {
    return a.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 18.201 22",
        },
        e
      ),
      a.createElement("path", {
        id: "Trazado_6934",
        "data-name": "Trazado 6934",
        d: "M1.477,53.686,0,54.417V67.239l1.477.726.009-.011V53.7l-.009-.01",
        transform: "translate(0 -49.842)",
        fill: "#6b8295",
      }),
      a.createElement("path", {
        id: "Trazado_6935",
        "data-name": "Trazado 6935",
        d: "M28.526,66.1l-7.9,1.861V53.686l7.9,1.821V66.1",
        transform: "translate(-19.147 -49.842)",
      }),
      a.createElement("path", {
        id: "Trazado_6936",
        "data-name": "Trazado 6936",
        d: "M81.178,120.939l3.352.427.021-.049.019-5.5-.04-.043-3.352.421v4.74",
        transform: "translate(-75.415 -107.566)",
        fill: "#6b8295",
      }),
      a.createElement("path", {
        id: "Trazado_6937",
        "data-name": "Trazado 6937",
        d: "M128,66.125l7.687,1.844.012-.019V53.7l-.012-.013L128,55.527v10.6",
        transform: "translate(-118.959 -49.842)",
        fill: "#6b8295",
      }),
      a.createElement("path", {
        id: "Trazado_6938",
        "data-name": "Trazado 6938",
        d: "M131.349,120.939l-3.353.427v-5.588l3.353.421v4.74",
        transform: "translate(-118.91 -107.566)",
      }),
      a.createElement("path", {
        id: "Trazado_6939",
        "data-name": "Trazado 6939",
        d: "M87.883,78.252l-3.353.611-3.352-.611,3.348-.877,3.357.877",
        transform: "translate(-75.429 -71.876)",
        fill: "#5a6e7e",
      }),
      a.createElement("path", {
        id: "Trazado_6940",
        "data-name": "Trazado 6940",
        d: "M87.883,211.825l-3.353-.615-3.352.615,3.348.934,3.357-.934",
        transform: "translate(-75.429 -196.201)",
        fill: "#9aafbf",
      }),
      a.createElement("path", {
        id: "Trazado_6941",
        "data-name": "Trazado 6941",
        d: "M81.178,6.417l3.352-.829.027-.008V.022L84.53,0,81.178,1.676V6.417",
        transform: "translate(-75.415)",
        fill: "#6b8295",
      }),
      a.createElement("path", {
        id: "Trazado_6942",
        "data-name": "Trazado 6942",
        d: "M131.349,6.417,128,5.587V0l3.353,1.676V6.417",
        transform: "translate(-118.91)",
      }),
      a.createElement("path", {
        id: "Trazado_6943",
        "data-name": "Trazado 6943",
        d: "M84.525,226.222l-3.352-1.676v-4.741l3.352.829.049.056-.013,5.434-.036.1",
        transform: "translate(-75.411 -204.222)",
        fill: "#6b8295",
      }),
      a.createElement("path", {
        id: "Trazado_6944",
        "data-name": "Trazado 6944",
        d: "M128,226.222l3.352-1.676v-4.741l-3.352.829v5.587",
        transform: "translate(-118.91 -204.222)",
      }),
      a.createElement("path", {
        id: "Trazado_6945",
        "data-name": "Trazado 6945",
        d: "M235.367,53.686l1.477.731V67.239l-1.477.73V53.686",
        transform: "translate(-218.643 -49.842)",
      })
    );
  },
  Zl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { "data-name": "IAM Policies", clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          { "data-name": "iam-policies-icn" },
          e.createElement("path", {
            "data-name": "Trazado 339",
            d: "M234.915 46.468v-.073a12.276 12.276 0 0 0-12.458-11.593c-19.233.3-55.932-3-86.768-28.92a12.132 12.132 0 0 0-15.811-.046C88.971 31.804 52.271 35.119 33.152 34.81a12.226 12.226 0 0 0-12.561 11.657c-1.8 46.628-1.509 112.307 21.777 144.214 21.779 29.942 64.527 54.463 77.79 60.687a17.75 17.75 0 0 0 7.584 1.7 17.744 17.744 0 0 0 7.619-1.713c14.233-6.71 55.947-30.7 77.768-60.659 23.292-31.913 23.59-97.599 21.786-144.228Zm-33.666 135.567c-19.9 27.341-59.77 50.186-72.17 56.035a3.18 3.18 0 0 1-2.687 0c-12.364-5.814-52.168-28.577-72.141-56.044-22.29-30.539-20.117-104.8-19.071-132.5h.273c21.464 0 59.431-4.411 92.3-31.128 32.821 26.709 70.8 31.119 92.384 31.119h.18c1.052 27.835 3.211 101.997-19.068 132.518Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 339 - Contorno",
            d: "M127.739.004a15.2 15.2 0 0 1 9.855 3.655c29.229 24.565 64.3 28.236 82.6 28.236l2.217-.017h.01a15.346 15.346 0 0 1 15.422 14.381c1.821 47.169 1.485 113.518-22.347 146.172-22.2 30.473-64.469 54.785-78.885 61.582a20.555 20.555 0 0 1-8.869 1.993 20.584 20.584 0 0 1-8.833-1.978c-13.426-6.3-56.751-31.147-78.912-61.614-23.821-32.639-24.156-98.986-22.335-146.052a15.124 15.124 0 0 1 15.023-14.484l2.764.028c18.245 0 53.229-3.677 82.542-28.306a15.029 15.029 0 0 1 9.748-3.596Zm92.455 37.753c-19.1 0-55.72-3.849-86.39-29.625a9.344 9.344 0 0 0-6.065-2.265 9.18 9.18 0 0 0-5.956 2.2c-30.753 25.84-67.289 29.7-86.332 29.7l-2.345-.019h-.019a9.344 9.344 0 0 0-9.568 8.874c-1.785 46.156-1.53 111.17 21.217 142.338 21.44 29.477 63.592 53.625 76.668 59.761a14.916 14.916 0 0 0 12.7-.009c14.043-6.621 55.179-30.255 76.653-59.736 22.757-31.181 23.013-96.2 21.227-142.389a9.343 9.343 0 0 0-9.2-8.852Zm-92.44-23.131 1.849 1.5c32.569 26.5 70.7 30.462 90.534 30.462h2.822l.286 2.82c.957 25.27 3.867 102.168-19.628 134.352-20.261 27.833-60.713 51.027-73.287 56.958a6.169 6.169 0 0 1-5.167.01c-12.568-5.909-52.967-29.043-73.282-56.98C28.394 151.57 31.298 74.683 32.252 49.417l.107-2.821h2.822c20.053 0 58.106-3.959 90.724-30.471Zm89.734 37.8c-21.007-.373-57.672-5.123-89.736-30.274-32.229 25.255-68.984 29.947-89.744 30.287-2.23 64.873 4.028 107.88 18.61 127.858 19.6 26.948 58.824 49.384 71.021 55.119l.1.019a.225.225 0 0 0 .1-.021c12.214-5.762 51.5-28.26 71.043-55.106 14.585-19.984 20.843-63.004 18.606-127.883Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 339 - Contorno",
            d: "M127.739 2.837a12.358 12.358 0 0 1 8.015 2.976 120.447 120.447 0 0 0 45.936 23.8 142.22 142.22 0 0 0 21.155 4.1 149.679 149.679 0 0 0 17.35 1.015c.753 0 1.514-.006 2.262-.018h.333a12.159 12.159 0 0 1 8.378 3.393 12.225 12.225 0 0 1 3.846 8.3v.077c1.8 46.64 1.506 112.345-21.805 144.286-21.848 29.994-63.571 53.979-77.8 60.689a17.751 17.751 0 0 1-7.66 1.722 17.771 17.771 0 0 1-7.625-1.708c-13.258-6.222-56.016-30.731-77.828-60.718-23.3-31.93-23.6-97.632-21.8-144.275a12.414 12.414 0 0 1 3.8-8.343 12.055 12.055 0 0 1 8.393-3.417c.156 0 .314 0 .47.009.757.012 1.529.018 2.294.018a148.3 148.3 0 0 0 17.294-1.019 141.918 141.918 0 0 0 21.123-4.113 120.786 120.786 0 0 0 45.948-23.838 12.209 12.209 0 0 1 7.921-2.936Zm92.455 32.086a149.9 149.9 0 0 1-17.373-1.016 142.431 142.431 0 0 1-21.184-4.107 120.644 120.644 0 0 1-46.01-23.838 12.163 12.163 0 0 0-7.888-2.929 12.012 12.012 0 0 0-7.8 2.883 120.985 120.985 0 0 1-46.021 23.877 142.125 142.125 0 0 1-21.153 4.119 148.491 148.491 0 0 1-17.317 1.021c-.766 0-1.54-.006-2.3-.018a12.138 12.138 0 0 0-.465-.009 11.861 11.861 0 0 0-8.258 3.362 12.22 12.22 0 0 0-3.739 8.211c-1.8 46.613-1.509 112.271 21.758 144.151 21.788 29.954 64.506 54.44 77.753 60.656a17.576 17.576 0 0 0 7.542 1.69 17.555 17.555 0 0 0 7.577-1.7c14.221-6.7 55.907-30.666 77.73-60.628 23.276-31.892 23.571-97.552 21.768-144.167v-.076a12.027 12.027 0 0 0-3.785-8.16 11.963 11.963 0 0 0-8.243-3.339h-.329c-.746.006-1.508.012-2.263.012Zm-92.441-16.645.062.05a135.656 135.656 0 0 0 50.371 25.557 157.366 157.366 0 0 0 23.039 4.435 163.564 163.564 0 0 0 18.913 1.106h.273v.094c.294 7.782.6 17.213.6 28.16 0 13.373-.462 25.856-1.382 37.1-2.583 31.568-8.74 54.215-18.3 67.312-19.915 27.358-59.8 50.216-72.208 56.066a3.228 3.228 0 0 1-1.38.307 3.288 3.288 0 0 1-1.389-.307c-12.38-5.821-52.213-28.618-72.179-56.075-9.563-13.1-15.723-35.768-18.3-67.365-.919-11.247-1.384-23.729-1.381-37.1 0-10.914.3-20.327.6-28.1v-.094h.367a162.536 162.536 0 0 0 18.844-1.106 157.194 157.194 0 0 0 23-4.436 135.97 135.97 0 0 0 50.391-25.564Zm92.469 31.343h-.085a163.735 163.735 0 0 1-18.936-1.107 157.57 157.57 0 0 1-23.067-4.44 135.854 135.854 0 0 1-50.381-25.544 136.178 136.178 0 0 1-50.4 25.551 157.4 157.4 0 0 1-23.033 4.441 162.713 162.713 0 0 1-18.866 1.107h-.179c-.292 7.748-.59 17.127-.592 27.994 0 13.364.461 25.84 1.38 37.082 2.579 31.56 8.725 54.192 18.268 67.266 19.942 27.424 59.736 50.2 72.1 56.013a3.094 3.094 0 0 0 1.307.288 3.035 3.035 0 0 0 1.3-.288c12.392-5.845 52.242-28.68 72.132-56 9.541-13.068 15.686-35.681 18.265-67.213.919-11.241 1.384-23.719 1.382-37.086-.002-10.91-.301-20.307-.594-28.069Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 340",
            d: "m154.932 82.763-7.4-3.7-5.737-2.866-14.1-7.057v12.363l-15.307 6.115 15.307-6.115v-12.37L100.447 82.76v9.628l-5.029 2.014v18.257l5.029.589v8.032l11.941-1.191v54.127l7.145 2.86v11.538l8.162 4.08v-86.488l-7.206 1.441V90.14l7.206-2.528v.007l7.195 2.521v17.5l-7.195-1.435v86.488l8.159-4.08v-11.538l13.528-5.367-.024-10.18-13.5 4.006v-11.54l13.528-2.689v-9.99l5.55-.5v-9.9h-11.929v-10.822l5.524.552 6.4.639v-9.628l5.036 1.008V94.407l-5.036-2.014Zm3.2 12.886v14.772l-2.83-.567-2.2-.44v9.843l-4.4-.441-5.525-.552-2.019-.206v14.7h11.941v6.387l-3.88.344-1.67.147v10.166l-12.063 2.4-1.473.293v15.51l2.353-.7 11.151-3.315.032 6.476-12.376 4.909-1.16.455v11.657l-4.487 2.242v-81.286l5 1.008 2.2.434v-1.876l6.277 1.265V87.622l-7.149-2.866-4.933-1.971-1.39-.552v-10.12l11.433 5.717 5.749 2.875 6.391 3.19v9.745l1.152.457Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 340 - Contorno",
            d: "m126.229 66.764 1.465.734 1.466-.733v1.466l13.293 6.652 5.736 2.866 8.208 4.11V91.4l5.036 2.014v21.037l-5.036-1.008v9.46l-11.93-1.191v7.741h11.93v12.707l-5.55.5v9.853l-13.529 2.689v8.373l13.5-4 .032 13.136-13.531 5.368v11.449l-8.158 4.08v1.465l-1.466-.733-1.465.733v-1.466l-8.163-4.08v-11.452l-7.145-2.86v-53.5l-11.941 1.191v-8.347l-5.028-.589V93.417l5.028-2.014v-9.542l27.249-13.627Zm0 13.743v-9l-24.317 12.161v9.714l-5.029 2.014v15.961l5.029.589v7.717l11.941-1.191v54.754l7.145 2.86v11.624l5.231 2.615v-82.33l-7.206 1.441V89.102l10.137-3.556v1.035l7.195 2.521v17.336l5.181 1.044v-18.87l-6.229-2.5-4.932-1.971-2.311-.917v-.3L112.93 88.97l-1.088-2.722Zm25.408 4.3-5.58-2.786-15.061-7.532v6.754l.464.184 4.937 1.973 8.07 3.235v24.434l-6.276-1.265v1.869l-3.954-.781-3.241-.654v77.122l1.555-.777v-11.751l2.086-.818 11.446-4.54-.018-3.52-13.514 4.017v-18.682l2.653-.528 10.884-2.162v-10.3l5.549-.491v-3.581h-11.941V116.44l3.633.37 8.308.831V107.63l5.029 1.007V96.645l-2.95-1.182-2.079-.823Zm-18.214 6.38-5.739-2.011-5.73 2.01v14.68l4.275-.855v-.585l1.465.292 1.466-.293v.586l4.263.85Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 340 - Contorno",
            d: "m127.597 68.978.1.049.1-.049v.1l14.049 7.03 5.737 2.866 7.451 3.731v9.623l5.037 2.014v18.443l-5.037-1.008v9.617l-11.929-1.191v10.621h11.929v10.088l-5.549.5v9.98l-.079.016-13.45 2.674v11.329l13.5-4.006v.131l.025 10.246-.062.025-13.467 5.342v11.532l-.054.027-8.1 4.053v.1l-.1-.049-.1.049v-.1l-8.162-4.08v-11.532l-7.145-2.86v-54.085l-11.941 1.191v-8.058l-5.029-.589V94.337l.062-.025 4.967-1.99v-9.623l.054-.027 27.194-13.6Zm0 12.455V69.294l-27.053 13.529v9.634l-5.028 2.014v18.1l5.028.589v8.011l11.941-1.191v54.168l7.145 2.86v11.544l7.967 3.982v-86.211l-7.206 1.441v-17.7l.065-.023 7.336-2.573v.076l7.194 2.521v17.689l-.117-.023-7.078-1.411v86.217l7.962-3.982v-11.544l.062-.024 13.467-5.342-.024-9.983-13.5 4.006v-11.751l.079-.016 13.45-2.674v-10l5.55-.5v-9.714h-11.93v-11.032l11.93 1.191v-9.64l5.036 1.008V94.468l-5.036-2.014V82.82l-7.343-3.677-5.736-2.866-13.961-6.986v12.271l-.062.025-15.308 6.115-.072-.181Zm7.195 8.779-7.107-2.49-7.1 2.49v17.319l7.011-1.4v-.039l.1.019.1-.019v.039l7 1.4Zm-5.359-18.257.142.071 17.181 8.592 6.445 3.217v9.739l1.091.432 3.938 1.577v14.954l-5.029-1.008v9.831l-4.5-.452-5.525-.552-1.912-.195v14.493h11.941v6.574l-5.55.492v10.156l-13.536 2.689v15.3l13.5-4.014v.13l.032 6.542-.062.025-12.376 4.909-1.1.431v11.651l-.054.027-4.628 2.313v-81.561l5.113 1.031 2.082.411v-1.876l6.276 1.265V87.683l-7.087-2.841-4.933-1.971-1.451-.576Zm23.573 12-6.337-3.163-17.04-8.521v9.9l1.328.527 4.933 1.971 7.21 2.891v21.837l-6.277-1.265v1.876l-2.315-.457-4.879-.984v81.007l4.291-2.145v-11.664l1.222-.479 12.313-4.885-.031-6.279-13.5 4.014v-15.721l1.552-.309 11.984-2.38v-10.179l5.55-.492v-6.2h-11.941v-14.9l2.127.217 9.814.982V109.3l5.028 1.008V95.721l-3.814-1.528-1.214-.481Z",
          })
        ),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 887",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  Ml = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          { "data-name": "users-icn" },
          e.createElement("path", {
            "data-name": "Trazado 331",
            d: "M128.212 142.371c39.3 0 71.279-31.6 71.279-70.444S167.512 1.483 128.212 1.483s-71.268 31.6-71.268 70.444 31.977 70.444 71.268 70.444Zm0-121.306c28.383 0 51.463 22.818 51.463 50.862s-23.08 50.862-51.463 50.862-51.445-22.816-51.445-50.862 23.066-50.862 51.445-50.862Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 331 - Contorno",
            d: "M128.212 143.853c-40.124 0-72.768-32.266-72.768-71.927S88.088-.001 128.212-.001s72.779 32.266 72.779 71.927-32.649 71.927-72.779 71.927Zm0-140.888c-38.47 0-69.768 30.936-69.768 68.961s31.3 68.961 69.768 68.961 69.779-30.936 69.779-68.961-31.303-68.961-69.779-68.961Zm0 121.305c-29.194 0-52.945-23.481-52.945-52.344s23.751-52.345 52.945-52.345 52.963 23.482 52.963 52.345-23.76 52.345-52.963 52.345Zm0-101.724c-27.54 0-49.945 22.152-49.945 49.38s22.405 49.379 49.945 49.379 49.963-22.151 49.963-49.379-22.414-49.379-49.963-49.379Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 332",
            d: "M215.129 199.095a108.6 108.6 0 0 0-41.184-32.37 111.377 111.377 0 0 0-51.553-10.081c-31.26 1.575-62.109 17.524-80.5 41.632-.613.8-1.213 1.624-1.8 2.439a35.274 35.274 0 0 0-2.746 36.518c5.68 10.824 16.691 17.287 29.441 17.287h122.867c12.885 0 23.883-6.551 29.4-17.513a36.09 36.09 0 0 0-3.925-37.912Zm-13.812 29.2c-1.529 3.029-4.8 6.648-11.662 6.648H66.783c-7.25 0-10.545-4.215-11.861-6.724a15.692 15.692 0 0 1 1.361-16.225c.473-.647.938-1.29 1.43-1.93 14.951-19.6 40.129-32.58 65.688-33.869 1.408-.068 2.816-.1 4.213-.1 27.5 0 55.287 13.376 71.729 34.828a16.785 16.785 0 0 1 1.974 17.372Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 332 - Contorno",
            d: "M127.643 155.028a110.952 110.952 0 0 1 23.833 2.624 115.878 115.878 0 0 1 23.1 7.726 110.137 110.137 0 0 1 41.751 32.821 37.565 37.565 0 0 1 4.07 39.465 33.137 33.137 0 0 1-5.348 7.707 32.51 32.51 0 0 1-7.156 5.772 33.964 33.964 0 0 1-8.59 3.612 37.261 37.261 0 0 1-9.646 1.247H66.783a37.248 37.248 0 0 1-9.57-1.23 34.36 34.36 0 0 1-8.568-3.563 33.1 33.1 0 0 1-7.191-5.693 33.672 33.672 0 0 1-5.443-7.6 36.758 36.758 0 0 1 2.851-38.053l.009-.012c.576-.794 1.2-1.642 1.825-2.466 18.644-24.445 49.918-40.623 81.618-42.22 1.769-.092 3.556-.137 5.329-.137Zm62.011 98.007c12.31 0 22.8-6.24 28.053-16.691a34.607 34.607 0 0 0-3.773-36.354 107.135 107.135 0 0 0-40.617-31.92 112.854 112.854 0 0 0-22.492-7.524 107.908 107.908 0 0 0-23.179-2.552c-1.722 0-3.463.044-5.174.13-30.837 1.554-61.251 17.281-79.375 41.044-.608.8-1.214 1.627-1.779 2.4a33.793 33.793 0 0 0-2.638 34.976c5.418 10.324 15.926 16.488 28.11 16.488Zm-62.037-78.43a93.962 93.962 0 0 1 40.673 9.521 90.119 90.119 0 0 1 32.251 25.895 18.687 18.687 0 0 1 3.738 9.3 17.136 17.136 0 0 1-1.619 9.631 13.216 13.216 0 0 1-4.318 5.019 15.031 15.031 0 0 1-8.688 2.453H66.783a15.1 15.1 0 0 1-9.041-2.706 13.981 13.981 0 0 1-4.152-4.818 17.173 17.173 0 0 1 1.466-17.761l.01-.015.19-.261c.4-.554.822-1.127 1.258-1.694 15.213-19.942 40.813-33.145 66.808-34.457a84.647 84.647 0 0 1 4.295-.108Zm62.037 58.85a12.08 12.08 0 0 0 6.975-1.922 10.268 10.268 0 0 0 3.345-3.9 14.2 14.2 0 0 0 1.324-7.982 15.738 15.738 0 0 0-3.147-7.833 87.116 87.116 0 0 0-31.182-25.025 90.916 90.916 0 0 0-39.353-9.218c-1.373 0-2.765.034-4.14.1a89.517 89.517 0 0 0-36.2 9.9 84.252 84.252 0 0 0-28.362 23.379v.005c-.414.538-.8 1.072-1.216 1.637l-.186.254a14.21 14.21 0 0 0-1.252 14.683 10.988 10.988 0 0 0 3.259 3.788 12.148 12.148 0 0 0 7.271 2.136Z",
          })
        ),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 885",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  xl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Uni\\xF3n 44",
          d: "M68.023 254.27a84.932 84.932 0 0 1-16-4.981 85.034 85.034 0 0 1-14.469-7.867 85.9 85.9 0 0 1-12.605-10.417 86.052 86.052 0 0 1-10.4-12.633 85.293 85.293 0 0 1-7.857-14.5 84.868 84.868 0 0 1-4.965-16.024 86.347 86.347 0 0 1-1.732-17.194 85.284 85.284 0 0 1 4.422-27.2 84.814 84.814 0 0 1 12.285-23.571 85.562 85.562 0 0 1 18.707-18.5q2.35-1.7 4.787-3.216V19.084c0-5.291 2.291-9.882 6.814-13.658A23.864 23.864 0 0 1 62.7.001h101.867a23.167 23.167 0 0 1 15.266 5.427c4.512 3.771 6.807 8.362 6.813 13.648v55.263h47.275a23.173 23.173 0 0 1 15.264 5.427c4.512 3.775 6.8 8.367 6.813 13.648v108.21a17.675 17.675 0 0 1-6.812 14.023 23.153 23.153 0 0 1-15.248 5.421h-80.016a86.359 86.359 0 0 1-25.8 23.31 84.684 84.684 0 0 1-20.33 8.577 85.257 85.257 0 0 1-22.617 3.046 86.2 86.2 0 0 1-17.152-1.731ZM35.275 136.923a60 60 0 0 0-10.312 33.733A60.345 60.345 0 0 0 85.18 230.99a59.739 59.739 0 0 0 36.213-12.148 22.746 22.746 0 0 1-5.031-3.2 17.621 17.621 0 0 1-6.812-14.018v-54.893H62.71a23.732 23.732 0 0 1-15.7-5.431 17.831 17.831 0 0 1-6.568-10.988 60.318 60.318 0 0 0-5.167 6.61Zm100.654 60.824h94.119V97.293h-43.4v29.992a17.675 17.675 0 0 1-6.812 14.023 23.148 23.148 0 0 1-15.252 5.421H135.93Zm0-74.337H160.7V97.294h-24.771Zm-69.348 0h42.967V93.418c0-5.286 2.295-9.882 6.813-13.653a23.874 23.874 0 0 1 15.693-5.427H160.7V22.956H66.581Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 926",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  _l = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          viewBox: "0 0 256 256",
          fill: "currentcolor",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path" },
          e.createElement("rect", {
            id: "Rectángulo_1023",
            "data-name": "Rectángulo 1023",
            width: "256",
            height: "255.998",
            fill: "none",
          })
        ),
        e.createElement(
          "clipPath",
          { id: "clip-Enable_Bucket_Encryption" },
          e.createElement("rect", { width: "256", height: "256" })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Enable_Bucket_Encryption",
          "data-name": "Enable Bucket Encryption",
          clipPath: "url(#clip-Enable_Bucket_Encryption)",
        },
        e.createElement("rect", { width: "256", height: "256", fill: "#fff" }),
        e.createElement(
          "g",
          {
            id: "Enable_Bucket_Encryption_Icon",
            "data-name": "Enable Bucket Encryption Icon",
          },
          e.createElement(
            "g",
            { id: "Grupo_2410", "data-name": "Grupo 2410" },
            e.createElement("path", {
              id: "Trazado_7149",
              "data-name": "Trazado 7149",
              d: "M127.927,130.84a8.009,8.009,0,0,0-4.486,14.645v6.451a4.238,4.238,0,0,0,4.228,4.228h.511a4.237,4.237,0,0,0,4.227-4.228v-6.451a8.009,8.009,0,0,0-4.48-14.645",
              transform: "translate(-0.009)",
            }),
            e.createElement("path", {
              id: "Trazado_7150",
              "data-name": "Trazado 7150",
              d: "M250.852,8.773A21.516,21.516,0,0,0,233.732,0H22.264A21.507,21.507,0,0,0,5.148,8.773,25.864,25.864,0,0,0,.395,28.759c5.223,30.384,16.208,94.421,25,145.533l.014.1c4.457,26,8.337,48.644,10.616,61.787C37.988,247.666,47.17,256,57.875,256H198.129c10.712,0,19.873-8.332,21.859-19.818l10.591-61.712.076-.375,14.334-83.619.049-.243L255.6,28.759a25.8,25.8,0,0,0-4.748-19.986M37.855,98a9.544,9.544,0,0,1-9.408-7.93l-.007-.042a9.544,9.544,0,0,1,9.406-11.158h62.969A29.6,29.6,0,0,0,94.2,97.433v.176h-1.06a32.022,32.022,0,0,0-4.912.382Zm14.538,83.918a9.544,9.544,0,0,1-9.408-7.93l-.007-.041a9.544,9.544,0,0,1,9.405-11.159H63.256a26.924,26.924,0,0,0,8.909,18.292q.468.428.952.833ZM181.632,161.14c0,9.2-8.235,16.705-18.456,16.935l-35.261,6.136-35.259-6.135C82.434,177.844,74.2,170.337,74.2,161.14V125.55c0-9.342,8.5-16.941,18.943-16.941H105.2V97.433c0-11.162,10.19-20.244,22.714-20.244s22.714,9.08,22.714,20.244v11.176h12.059c10.446,0,18.944,7.6,18.944,16.941Zm31.479,12.751h0a9.543,9.543,0,0,1-9.413,7.989l-20.95.006c.311-.262.618-.529.918-.8a26.921,26.921,0,0,0,8.91-18.292H203.7a9.544,9.544,0,0,1,9.415,11.1M227.4,89.972a9.544,9.544,0,0,1-9.414,7.989l-50.5.012a32.024,32.024,0,0,0-4.8-.364h-1.06v-.176a29.6,29.6,0,0,0-6.613-18.56h62.97a9.544,9.544,0,0,1,9.416,11.1",
              transform: "translate(0)",
            }),
            e.createElement("path", {
              id: "Trazado_7151",
              "data-name": "Trazado 7151",
              d: "M127.923,85.575c-7.334,0-13.3,5.32-13.3,11.858l0,11.175h26.61l0-11.175c0-6.538-5.967-11.858-13.3-11.858",
              transform: "translate(-0.009)",
            })
          )
        )
      )
    );
  },
  Hl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "documentation-icn",
          d: "M19.922 256.001H8.633a8.842 8.842 0 0 1-8.631-8.962V77.449a8.845 8.845 0 0 1 8.631-8.962h7.291a8.841 8.841 0 0 1 8.645 8.962v152.944h119.164a8.848 8.848 0 0 1 8.65 8.962v7.685a8.845 8.845 0 0 1-8.65 8.962Zm41.08-46a14.994 14.994 0 0 1-15-15v-180a15 15 0 0 1 15-15h180a15 15 0 0 1 15 15v180a15 15 0 0 1-15 15Zm5-20h170v-170h-170Zm28.742-18.884a.906.906 0 0 1-.9-.906v-23.3a.906.906 0 0 1 .9-.906H210a.907.907 0 0 1 .906.906v23.3a.907.907 0 0 1-.906.906Zm0-52a.91.91 0 0 1-.9-.91v-23.3a.909.909 0 0 1 .9-.905H210a.909.909 0 0 1 .906.905v23.3a.91.91 0 0 1-.906.91Zm0-53a.91.91 0 0 1-.9-.91v-23.3a.907.907 0 0 1 .9-.91H210a.908.908 0 0 1 .906.91v23.3a.911.911 0 0 1-.906.91Z",
          stroke: "rgba(0,0,0,0)",
          strokeMiterlimit: 10,
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 876",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  zl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 26 25",
        },
        a
      ),
      e.createElement(
        "g",
        {
          id: "Grupo_2542",
          "data-name": "Grupo 2542",
          transform: "translate(0 0.249)",
        },
        e.createElement(
          "g",
          { id: "health-icon", transform: "translate(0 7.842)" },
          e.createElement("path", {
            id: "Unión_51",
            "data-name": "Unión 51",
            d: "M1.977,17A1.976,1.976,0,0,1,0,15.015V4.938H2.144v9.918h9.892V17Zm12.591-.443V14.584h1.974v1.973Zm.288-4.538V2.144H4.965V0H15.023A1.98,1.98,0,0,1,17,1.973V12.019Zm-4.8,0V10.045h1.979v1.973Zm-5.094,0V10.045H6.944v1.973Zm5.094-5.106V4.938h1.979V6.912Zm-5.09,0V4.938H6.942V6.912ZM.458,2.448V.475H2.432V2.448Z",
            transform: "translate(0 -0.091)",
            fill: "#07193e",
          })
        ),
        e.createElement(
          "g",
          {
            id: "Grupo_2537",
            "data-name": "Grupo 2537",
            transform: "translate(12.323 0)",
          },
          e.createElement(
            "g",
            {
              id: "Elipse_623",
              "data-name": "Elipse 623",
              transform: "translate(-0.323 -0.249)",
              fill: "#4ccb92",
              stroke: "#fff",
              strokeWidth: "1",
            },
            e.createElement("circle", {
              cx: "7",
              cy: "7",
              r: "7",
              stroke: "none",
            }),
            e.createElement("circle", {
              cx: "7",
              cy: "7",
              r: "6.5",
              fill: "none",
            })
          ),
          e.createElement(
            "g",
            { id: "check", transform: "translate(2.934 4.069)" },
            e.createElement("path", {
              id: "Trazado_7261",
              "data-name": "Trazado 7261",
              d: "M14.9,10.862a.622.622,0,1,1,.889.871l-3.311,4.139a.622.622,0,0,1-.9.017L9.384,13.694a.622.622,0,1,1,.879-.879L12,14.551l2.881-3.67.017-.018Z",
              transform: "translate(-9.182 -10.676)",
            })
          )
        )
      )
    );
  },
  Vl = function (e) {
    return a.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 14 14",
        },
        e
      ),
      a.createElement("path", {
        d: "M141.421,148.182a4.5,4.5,0,0,0-4.3,5.805l-5.188,5.195v3h3l5.187-5.2a4.5,4.5,0,0,0,5.8-3.936,4.39,4.39,0,0,0-.823-3A4.492,4.492,0,0,0,141.421,148.182Zm.5,5a1,1,0,1,1,1-1A1,1,0,0,1,141.92,153.182Z",
        transform: "translate(-131.934 -148.182)",
      })
    );
  },
  Al = function (e) {
    return a.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        e
      ),
      a.createElement(
        "defs",
        null,
        a.createElement(
          "clipPath",
          { id: "prefix__a" },
          a.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      a.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        a.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        a.createElement(
          "g",
          { "data-name": "Grupo 1557" },
          a.createElement("path", {
            "data-name": "Rect\\xE1ngulo 826",
            fill: "none",
            d: "M0 0h256v256H0z",
          }),
          a.createElement("path", {
            "data-name": "Uni\\xF3n 10",
            d: "M71.113 256a37.94 37.94 0 01-37.889-37.9V60.906a15.426 15.426 0 01-14.227-15.353V29.621a15.423 15.423 0 0115.4-15.4h41.541A15.378 15.378 0 0191.258.003h72.871a15.393 15.393 0 0115.334 14.218h41.531a15.423 15.423 0 0115.4 15.4v15.932a15.426 15.426 0 01-14.227 15.353V218.1a37.942 37.942 0 01-37.9 37.9zm-19.605-37.9a19.634 19.634 0 0019.605 19.614h113.164A19.637 19.637 0 00203.89 218.1V60.951H51.507zM218.117 38.6v-6.1h-56.893V18.278H94.177V32.5H37.286v6.1z",
          })
        )
      )
    );
  },
  Cl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-Subscribe_to_event" },
          e.createElement("rect", { width: "256", height: "256" })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Subscribe_to_event",
          "data-name": "Subscribe to event",
          clipPath: "url(#clip-Subscribe_to_event)",
        },
        e.createElement("rect", { width: "256", height: "256", fill: "#fff" }),
        e.createElement(
          "g",
          {
            id: "subscribe_to_event_icon",
            "data-name": "subscribe to event icon",
            transform: "translate(-675.16 -286.16)",
          },
          e.createElement(
            "g",
            {
              id: "Grupo_2272",
              "data-name": "Grupo 2272",
              transform: "translate(676.2 287.84)",
            },
            e.createElement(
              "g",
              { id: "Grupo_2271", "data-name": "Grupo 2271" },
              e.createElement("path", {
                id: "Trazado_7031",
                "data-name": "Trazado 7031",
                d: "M218.265,151a12.276,12.276,0,0,0-12.37,12.1v3.147H184.5c-17.317,0-31.3,13.678-31.3,30.383v178.3c0,16.7,14.1,30.383,31.3,30.383h191.73c17.318,0,31.3-13.678,31.3-30.383v-178.3c0-16.7-14.1-30.383-31.3-30.383h-24.74V163.1a12.372,12.372,0,0,0-24.739,0v3.147H230.634V163.1A12.275,12.275,0,0,0,218.265,151Zm157.96,229.99H184.5a6.408,6.408,0,0,1-6.556-6.173v-127.7H382.9v127.7A6.6,6.6,0,0,1,376.225,380.99ZM326.746,190.461v3.39a12.372,12.372,0,0,0,24.739,0v-3.39h24.74a6.408,6.408,0,0,1,6.556,6.174v26.388H177.939V196.635a6.408,6.408,0,0,1,6.556-6.174h21.4v3.39a12.373,12.373,0,0,0,24.74,0v-3.39Z",
                transform: "translate(-153.2 -151)",
                fill: "#4ccb92",
              }),
              e.createElement("path", {
                id: "Trazado_7032",
                "data-name": "Trazado 7032",
                d: "M320.582,251.052l-58.245,57.325-20.692-20.386a15.283,15.283,0,0,0-21.459,21.766L262.337,351.3l79.857-78.478a15.336,15.336,0,1,0-21.612-21.765Z",
                transform: "translate(-151.567 -145.725)",
                fill: "#4ccb92",
              })
            )
          )
        )
      )
    );
  },
  Ll = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 870",
          fill: "none",
          d: "M0 0h256v256H0z",
        }),
        e.createElement(
          "g",
          { "data-name": "download-icn" },
          e.createElement("path", {
            "data-name": "Trazado 362",
            d: "M0 104.08c0-21.751 32.822-21.751 32.822 0v118.833h190.356V104.08c0-21.751 32.822-21.751 32.822 0v135.381a16.48 16.48 0 0 1-16.4 16.54H16.415a16.485 16.485 0 0 1-16.413-16.54V104.08Zm144.415-87.773c0-21.741-32.826-21.741-32.826 0v138.227l-18.591-18.743c-15.263-15.385-38.474 8.006-23.211 23.391l46.51 46.879a16.339 16.339 0 0 0 23.406 0l46.507-46.879c15.266-15.385-7.945-38.776-23.208-23.391l-18.587 18.743V16.306Z",
          })
        )
      )
    );
  },
  Tl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          { "data-name": "ComputerLineIcon" },
          e.createElement("path", {
            "data-name": "ComputerLineIcon",
            d: "M19.678 227.007A19.678 19.678 0 0 1 0 207.328v-25.736h256.887v25.736a19.683 19.683 0 0 1-19.682 19.682Zm-4.844-19.682a4.541 4.541 0 0 0 4.541 4.541h218.289a4.541 4.541 0 0 0 4.541-4.541v-14.152h-75.387a12.4 12.4 0 0 1-11.354 7.567H101.5a12.416 12.416 0 0 1-11.355-7.567H14.836Zm204.662-40.871v-121.1H37.846v121.1H22.709V41.568a11.353 11.353 0 0 1 11.35-11.354h189.225a11.354 11.354 0 0 1 11.355 11.354v124.886Zm-166.516-.91V60.49h136.09l-11.957 12.108H65.093v92.945Z",
          }),
          e.createElement("path", {
            "data-name": "Rect\\xE1ngulo 892",
            fill: "none",
            d: "M0 0h256v256H0z",
          })
        )
      )
    );
  },
  bl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { "data-name": "All Buckets", clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Uni\\xF3n 45",
          d: "M78.373 256c-7.594 0-14.115-5.922-15.51-14.087-1.619-9.346-4.373-25.445-7.537-43.926l-.01-.074C49.08 161.58 41.277 116.057 37.57 94.461a18.4 18.4 0 0 1 3.377-14.209 15.24 15.24 0 0 1 12.148-6.235h150.137a15.259 15.259 0 0 1 12.154 6.235 18.358 18.358 0 0 1 3.369 14.209l-7.5 43.7-.035.171-10.184 59.448-.049.265-7.523 43.872c-1.408 8.165-7.914 14.087-15.516 14.087Zm-3.418-16.57a3.582 3.582 0 0 0 3.418 3.1h99.58a3.582 3.582 0 0 0 3.424-3.105l6.178-36.084H68.768c2.591 15.142 4.818 28.093 6.187 36.086Zm-8.5-49.559h123.42l7.928-46.218H58.539c2.609 15.186 5.363 31.301 7.916 46.216ZM50.416 88.858a4.087 4.087 0 0 0-.738 3.12c1.572 9.228 3.922 22.825 6.549 38.2h143.895l6.531-38.2a4.055 4.055 0 0 0-.74-3.115 3.354 3.354 0 0 0-2.68-1.381H53.086a3.359 3.359 0 0 0-2.67 1.374Zm170.543 29.158v-1.083l.014-.088 1.615-9.414h6.221a1.281 1.281 0 0 0 1.188-1.151c.074-.412.148-.847.227-1.3l.029-.162c.043-.25.088-.5.131-.764.02-.127.045-.255.064-.382s.049-.279.074-.421c.063-.377.131-.759.2-1.156l.031-.171c.043-.25.088-.509.131-.769l.045-.245c.029-.191.063-.382.1-.578l.67-3.884c.855-4.981 1.486-8.66 2.055-12h-10.43l-.244-.656a25.505 25.505 0 0 0-3.664-6.74c-.4-.529-.822-1.043-1.252-1.523l-1.49-1.666h18.9l.158-.936c.172-1.009.35-2.038.525-3.061.367-2.15.734-4.3 1.076-6.289.1-.568.2-1.137.293-1.709.117-.676.23-1.362.348-2.042l.5-2.915c.59-3.443 1.2-6.989 1.8-10.5h-86.41l3.648 21.243h-10.016l-4.379-25.588-4.787-27.855a12.711 12.711 0 0 1 2.342-9.826 10.739 10.739 0 0 1 8.545-4.379h95.705a10.723 10.723 0 0 1 8.541 4.379 12.715 12.715 0 0 1 2.342 9.826c-.414 2.419-.9 5.241-1.463 8.5l-.943 5.535c-.143.8-.279 1.622-.426 2.454l-.189 1.117q-.381 2.249-.793 4.619l-.982 5.73c-1.7 9.958-3.67 21.39-5.25 30.579l-.68 3.962-.578 3.375v.039l-.713 4.183c-.1.563-.2 1.131-.3 1.758-.1.593-.211 1.229-.334 1.944l-.4 2.312-1 5.843c-.787 4.585-1.531 8.915-2.072 12.049-.975 5.682-5.547 9.806-10.875 9.806ZM148.313 11.072a1.612 1.612 0 0 0-.289 1.225l4.025 23.516h90.041a16029.61 16029.61 0 0 1 3.365-19.617l.088-.485.582-3.414a1.611 1.611 0 0 0-.289-1.225 1.174 1.174 0 0 0-.9-.475h-95.715a1.154 1.154 0 0 0-.909.473ZM34.038 118.016h-6.852c-5.326 0-9.9-4.125-10.877-9.811-.539-3.13-1.281-7.459-2.07-12.049l-.287-1.7-.711-4.144-.4-2.307c-.127-.72-.234-1.361-.336-1.954l-.3-1.749-.717-4.183v-.039l-1.252-7.293c-1.58-9.2-3.545-20.65-5.252-30.623L4 36.434q-.407-2.381-.8-4.639l-.186-1.1c-.143-.833-.283-1.651-.426-2.449l-.953-5.588C1.078 19.41.598 16.609.182 14.204a12.722 12.722 0 0 1 2.342-9.826 10.729 10.729 0 0 1 8.543-4.379h95.705a10.744 10.744 0 0 1 8.545 4.379 12.719 12.719 0 0 1 2.342 9.826l-4.809 27.968-4.359 25.475H98.479l.2-1.171 3.449-20.072H15.716c.607 3.512 1.213 7.058 1.8 10.5l.5 2.915c.117.681.23 1.366.346 2.047l.293 1.7c.344 1.993.711 4.153 1.082 6.313.17 1.019.348 2.038.52 3.037l.16.936h18.9l-1.49 1.666c-.432.48-.854.994-1.252 1.523a25.567 25.567 0 0 0-3.666 6.74l-.244.656H22.237c.566 3.34 1.2 7.019 2.053 12l.672 3.884c.035.2.068.387.1.583l.045.24c.043.26.088.52.131.769l.006.01.023.162c.07.4.137.779.2 1.151l.074.426c.025.142.045.255.064.382.043.254.088.509.131.754l.029.171c.078.451.152.886.227 1.3a1.284 1.284 0 0 0 1.188 1.151h6.223l1.629 9.5v1.083ZM10.155 11.077a1.609 1.609 0 0 0-.285 1.22l.672 3.9c1.027 5.966 2.318 13.509 3.365 19.617h90.041l4.025-23.516a1.612 1.612 0 0 0-.289-1.225 1.159 1.159 0 0 0-.908-.475H11.061a1.185 1.185 0 0 0-.907.477Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 927",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  Pl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Trazado 452",
          d: "M235.994 77.199c.388-15.754.958-32.243-.5-47.941-1.094-11.756-6.193-21.735-17.831-25.915a42.633 42.633 0 0 0-5.017-1.448c-6.549-1.478-13.432-1.6-20.09-1.8-11.726-.345-23.448.364-35.175.314-23.493-.1-46.985.322-70.479.414q-4.228.015-8.456.017H36.243a17.26 17.26 0 0 0-17.241 17.24v220.679A17.26 17.26 0 0 0 36.243 256h182.541a17.26 17.26 0 0 0 17.241-17.241V128.816c-.006-17.183-.453-34.459-.031-51.617Zm-20.922 145.986a14.888 14.888 0 0 1-14.888 14.888H51.816a14.888 14.888 0 0 1-14.888-14.888V33.662a14.887 14.887 0 0 1 14.888-14.887h99.548v25.463a37.8 37.8 0 0 0 37.758 37.759h25.951Zm0-157.656h-25.951a21.321 21.321 0 0 1-21.3-21.3V18.771h32.359a14.887 14.887 0 0 1 14.888 14.888Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 453",
          d: "m84.317 135.27 10.527-10.778 10.528 10.778a2.112 2.112 0 0 0 1.512.637 2.113 2.113 0 0 0 1.512-.637l8.915-9.127a2.114 2.114 0 0 0 0-2.954l-10.6-10.849 10.6-10.851a2.114 2.114 0 0 0 0-2.954l-8.915-9.126a2.175 2.175 0 0 0-3.025 0l-10.528 10.778-10.527-10.778a2.109 2.109 0 0 0-1.511-.637 2.113 2.113 0 0 0-1.512.637l-8.916 9.126a2.116 2.116 0 0 0 0 2.954l10.6 10.851-10.6 10.849a2.116 2.116 0 0 0 0 2.954l8.916 9.127a2.174 2.174 0 0 0 3.024 0Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 454",
          d: "m181.539 98.535-8.915-9.126a2.176 2.176 0 0 0-3.024 0l-10.523 10.778-10.528-10.778a2.114 2.114 0 0 0-1.512-.637 2.112 2.112 0 0 0-1.512.637l-8.915 9.126a2.114 2.114 0 0 0 0 2.954l10.6 10.851-10.6 10.849a2.114 2.114 0 0 0 0 2.954l8.915 9.127a2.175 2.175 0 0 0 3.025 0l10.528-10.778 10.523 10.778a2.114 2.114 0 0 0 1.511.637 2.114 2.114 0 0 0 1.511-.637l8.915-9.127a2.114 2.114 0 0 0 0-2.954l-10.594-10.849 10.594-10.851a2.114 2.114 0 0 0 0-2.954Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 455",
          d: "M169.529 160.901a66.964 66.964 0 0 0-40.3-13.344 8.524 8.524 0 0 0-1.513.143 8.5 8.5 0 0 0-1.513-.143 66.96 66.96 0 0 0-40.3 13.344 8.455 8.455 0 0 0-1.729 11.83 8.442 8.442 0 0 0 6.786 3.406 8.417 8.417 0 0 0 5.046-1.677 50.177 50.177 0 0 1 30.2-9.993 8.478 8.478 0 0 0 1.513-.143 8.479 8.479 0 0 0 1.513.143 50.182 50.182 0 0 1 30.2 9.993 8.416 8.416 0 0 0 5.044 1.677 8.44 8.44 0 0 0 6.786-3.406 8.454 8.454 0 0 0-1.733-11.83Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 905",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  Nl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          { "data-name": "LambdaIcon" },
          e.createElement("path", {
            "data-name": "Rect\\xE1ngulo 847",
            fill: "none",
            d: "M0 0h256v256H0z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 442",
            d: "M40.266 0c-9.543 0-17.279 6.878-17.279 15.363S30.723 30.73 40.266 30.73c26.265 0 36.01 14.872 46.032 34.353l1.659 3.134c1.382 2.643 4.354 8.542 8.363 16.408L1.975 233.094c-4.327 7.346-1.317 16.42 6.8 20.5s18.415 1.7 23.265-5.384l81.9-128.623c21.91 44 49.488 99.494 49.972 100.415 12.921 27.82 47.568 42.291 79.9 33.369 9.123-2.512 14.229-11.123 11.4-19.235s-12.511-12.651-21.634-10.14c-15.631 4.28-32.31-2.987-38.084-16.593-2.765-5.531-67.32-135.751-76.029-152.282l-1.521-2.95C109.038 35.336 90.86 0 40.266 0Z",
          })
        )
      )
    );
  },
  Bl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          { "data-name": "groups-icn" },
          e.createElement("path", {
            "data-name": "Trazado 464",
            d: "M80.48 229.312a27.075 27.075 0 0 1-24.56-14.615 29.94 29.94 0 0 1 2.269-30.668v-.007c.519-.729.982-1.367 1.418-1.952l.008-.006a84.019 84.019 0 0 1 28.115-23.5 87.373 87.373 0 0 1 35.739-9.917 83.994 83.994 0 0 1 4.172-.107 85.882 85.882 0 0 1 18.631 2.076 89.934 89.934 0 0 1 18.062 6.117 86.479 86.479 0 0 1 32.679 25.974 30.568 30.568 0 0 1 3.2 31.789 26.323 26.323 0 0 1-9.982 10.9 28.124 28.124 0 0 1-14.539 3.924Zm43.97-61.409a67.92 67.92 0 0 0-27.724 7.673 64.647 64.647 0 0 0-21.71 18.1c-.32.426-.626.852-.945 1.3l-.116.162a10.394 10.394 0 0 0-.91 10.676 7.736 7.736 0 0 0 2.277 2.691 8.546 8.546 0 0 0 5.158 1.516h95.217c3.461 0 5.9-1.382 7.255-4.114v-.007a10.376 10.376 0 0 0 .951-5.807 11.664 11.664 0 0 0-2.273-5.746 66.98 66.98 0 0 0-23.879-19.38 68.976 68.976 0 0 0-30.14-7.144 70.658 70.658 0 0 0-3.161.076Zm87.819 40.475.254-2.2a40.828 40.828 0 0 0-.3-11.552l-.392-2.3h21.988c2.574 0 4.378-1.014 5.361-3.014v-.014a7.766 7.766 0 0 0 .718-4.344 8.714 8.714 0 0 0-1.715-4.319 52.307 52.307 0 0 0-18.683-15.17 53.964 53.964 0 0 0-23.583-5.594c-.883 0-1.722.021-2.488.062h-.01c-1.158.055-2.323.21-3.557.372-.15.021-.306.041-.457.058l-.817.106-.649-.505a98.534 98.534 0 0 0-13.759-8.872l-3.959-2.151 4.269-1.443a67.359 67.359 0 0 1 18.122-3.6c1.1-.055 2.213-.083 3.315-.083a67.958 67.958 0 0 1 14.8 1.649 71.23 71.23 0 0 1 14.336 4.849 68.418 68.418 0 0 1 25.905 20.624 24.5 24.5 0 0 1 2.584 25.507 21.121 21.121 0 0 1-8.038 8.776 22.614 22.614 0 0 1-11.7 3.154Zm-189.943 0a22.751 22.751 0 0 1-11.626-3.113 21.723 21.723 0 0 1-8.137-8.636v-.006a24.022 24.022 0 0 1 1.831-24.617 42.21 42.21 0 0 1 1.138-1.567 66.738 66.738 0 0 1 22.314-18.666 69.372 69.372 0 0 1 28.369-7.873 68.088 68.088 0 0 1 3.265-.079 68.894 68.894 0 0 1 21.835 3.618l4.27 1.423-3.944 2.168a99.584 99.584 0 0 0-13.552 8.982l-.657.519-.827-.113a50.98 50.98 0 0 0-7.089-.55c-.908 0-1.719.021-2.488.062h-.007a53.11 53.11 0 0 0-21.686 6 50.7 50.7 0 0 0-16.979 14.13c-.214.309-.44.615-.657.91l-.2.275a7.817 7.817 0 0 0-.675 7.986l.008.01a5.536 5.536 0 0 0 1.663 1.966 6.355 6.355 0 0 0 3.832 1.12h21.83l-.389 2.295a40.514 40.514 0 0 0-.269 11.55l.262 2.2ZM70.893 84.196a57.261 57.261 0 0 1 57.2-57.2 57.257 57.257 0 0 1 57.188 57.2 57.26 57.26 0 0 1-57.188 57.2 57.264 57.264 0 0 1-57.2-57.197Zm19.29 0a37.952 37.952 0 0 0 37.909 37.909 37.952 37.952 0 0 0 37.911-37.909 37.952 37.952 0 0 0-37.911-37.908 37.952 37.952 0 0 0-37.909 37.911Zm95.572 53.568a45.7 45.7 0 0 1-9.626-3.508l-2.433-1.213 1.908-1.935a66.163 66.163 0 0 0 7.772-9.446l.876-1.3 1.464.563a29.378 29.378 0 0 0 10.546 2.041 29.531 29.531 0 0 0 29.507-29.49 29.532 29.532 0 0 0-29.507-29.493 12.65 12.65 0 0 0-1.656.154c-.381.052-.773.107-1.189.145l-1.553.141-.5-1.478a66.318 66.318 0 0 0-4.962-11.288l-1.325-2.381 2.676-.512a45.609 45.609 0 0 1 8.5-.828 45.6 45.6 0 0 1 45.548 45.54 45.594 45.594 0 0 1-45.548 45.537 44.9 44.9 0 0 1-10.496-1.249Zm-171.42-44.29a45.586 45.586 0 0 1 45.526-45.54 45.391 45.391 0 0 1 8.56.835l2.69.512-1.339 2.385a66.792 66.792 0 0 0-4.993 11.292l-.5 1.48-1.557-.154c-.395-.038-.77-.089-1.134-.141a12.977 12.977 0 0 0-1.726-.162 29.517 29.517 0 0 0-29.479 29.493 29.517 29.517 0 0 0 29.479 29.49 29.18 29.18 0 0 0 10.57-2.048l1.453-.561.884 1.285a68.636 68.636 0 0 0 7.794 9.46l1.913 1.941-2.439 1.206a46.366 46.366 0 0 1-9.652 3.512 44.893 44.893 0 0 1-10.522 1.25 45.583 45.583 0 0 1-45.527-45.535Z",
          })
        ),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 886",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  Rl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement("path", {
        d: "M125.65,0h0C56.26,0,0,56.26,0,125.65H0c0,69.4,56.26,125.65,125.65,125.65h0c69.4,0,125.65-56.26,125.65-125.65S195.05,0,125.65,0m41.51,163.77l-31.76,31.76c-5.32,5.39-14,5.45-19.39,.13-.04-.04-.09-.09-.13-.13h0l-31.74-31.76c-3.97-3.69-5.22-9.46-3.14-14.47,2.19-5.32,7.3-8.87,13.05-9.06,3.57,.06,6.97,1.55,9.42,4.15l8.4,8.4V65.26c0-7.57,6.15-13.71,13.72-13.7,7.57,0,13.7,6.14,13.7,13.7v87.52l8.4-8.39c2.45-2.6,5.85-4.1,9.42-4.16,5.76,.18,10.87,3.73,13.05,9.06,2.09,5,.83,10.78-3.14,14.47",
      })
    );
  },
  yl = function (e) {
    return a.createElement(
      "svg",
      T({}, e, {
        className: "min-icon",
        fill: "currentcolor",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "-1 -37.9 256 256",
      }),
      a.createElement(
        "defs",
        null,
        a.createElement(
          "clipPath",
          { id: "a" },
          a.createElement("path", {
            d: "M53.548,94.912v44.816c.43-.22.737-.378,1.517-.759a20.07,20.07,0,0,1,27.673,15.21c.1.677.115.688.163,1.1.063.567.084.968.108,1.463.01.21.068,1.914.072,2,.2,2.214.363,4.336.452,6.449.269,6.381.536,11,.957,15.5.6,6.412.964,12.128,1.066,17.7a19.838,19.838,0,0,1-.976,6.231c.683,6.455,1.592,14.938,1.752,16.438.014.128.023.253.036.38,3.927-.511,5.969-.716,8.382-.813,8.553-.344,16.809-.382,29.335-.235,1.42.017,2.559.021,5.094.054,10.044.13,14.46.163,19.906.127.93-.007,1.643,0,3.234,0,7.429.005,10.477-.237,12.174-.958-.178-1.123-.351-2.228-.614-3.558-.313-1.589-.586-2.862-1.264-5.979-2.292-10.53-3.161-15.585-3.414-22.508a68.539,68.539,0,0,1,2.764-23.067A29.713,29.713,0,0,1,164.278,159c.461-.922.889-1.737,1.372-2.547a22.021,22.021,0,0,1,1.987-2.836,19.87,19.87,0,0,1,3.776-3.5A19.984,19.984,0,0,1,192.33,125.6a20.223,20.223,0,0,1,9.195,3V94.912Z",
            fill: "none",
          })
        ),
        a.createElement(
          "clipPath",
          { id: "b" },
          a.createElement("path", {
            d: "M204.03,236.91c-.393.722-.717,1.447-1.156,2.168-.795,1.3-1.66,2.592-2.547,3.811h3.7Z",
            fill: "none",
          })
        )
      ),
      a.createElement(
        "g",
        { transform: "translate(-0.036 -24.789)" },
        a.createElement("path", {
          d: "M239.185,72.637A29.456,29.456,0,0,0,209.767,43.6H128.581l-1.119-1.512c-5.078-6.886-12.756-17.3-26.1-17.3H49.394A29.455,29.455,0,0,0,19.972,54.21a19.778,19.778,0,0,0,.236,3.081V70.763A29.818,29.818,0,0,0,.036,98.947c0,.6.023,1.205.076,1.806L9.8,207.577A29.8,29.8,0,0,0,39.545,236.2h175.73A29.8,29.8,0,0,0,245.021,207.6L254.947,100.8q.088-.928.09-1.852A29.792,29.792,0,0,0,239.185,72.637ZM49.394,44.808h51.963c6.586,0,13.645,18.813,20.7,18.813h87.709a9.429,9.429,0,0,1,9.4,9.4v4.7H40.213V54.206h-.229A9.431,9.431,0,0,1,49.394,44.808ZM225.031,206.43a9.781,9.781,0,0,1-9.754,9.748H39.547a9.779,9.779,0,0,1-9.75-9.748L20.051,98.947A9.782,9.782,0,0,1,29.8,89.192H225.268a9.788,9.788,0,0,1,9.758,9.755Z",
        }),
        a.createElement(
          "g",
          { transform: "translate(-351.512 467)" },
          a.createElement(
            "g",
            { transform: "translate(352 -469)", clipPath: "url(#a)" },
            a.createElement("path", {
              d: "M118.046,203.4c0,12.123,18.976,12.123,18.976,0V126.379l10.748,10.443c8.823,8.569,22.236-4.465,13.415-13.034L134.3,97.665a9.685,9.685,0,0,0-13.526,0L93.89,123.788c-8.82,8.568,4.592,21.6,13.415,13.034l10.745-10.443V203.4Z",
            })
          )
        ),
        a.createElement(
          "g",
          { clipPath: "url(#b)" },
          a.createElement("path", {
            d: "M56.052,158.235c0-12.121,18.978-12.121,18.978,0v66.218H185.056V158.235c0-12.121,18.973-12.121,18.973,0v75.436a9.357,9.357,0,0,1-9.486,9.217h-129a9.357,9.357,0,0,1-9.486-9.217V158.235Zm64.5,45.162c0,12.123,18.976,12.123,18.976,0V126.379l10.748,10.443c8.823,8.569,22.236-4.465,13.415-13.034L136.8,97.665a9.685,9.685,0,0,0-13.526,0L96.394,123.788c-8.82,8.568,4.593,21.6,13.415,13.034l10.745-10.443V203.4Z",
          })
        )
      )
    );
  },
  Gl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          { "data-name": "TiersIcon" },
          e.createElement("path", {
            "data-name": "Rect\\xE1ngulo 848",
            fill: "none",
            d: "M0 0h256v256H0z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 441",
            d: "M128.249 0a11.373 11.373 0 0 0-5.583 1.308L5.334 63.851a9.483 9.483 0 0 0 0 17.039l36.187 19.289-36.187 19.288a9.485 9.485 0 0 0 0 17.058l36.187 19.27-36.187 19.288a9.485 9.485 0 0 0 0 17.058l117.331 62.54a11.442 11.442 0 0 0 10.666 0l117.331-62.54a9.485 9.485 0 0 0 0-17.058l-36.187-19.289 36.187-19.27a9.485 9.485 0 0 0 0-17.058l-36.187-19.289 36.187-19.289a9.483 9.483 0 0 0 0-17.039L133.332 1.311A11.349 11.349 0 0 0 128.249 0ZM62.875 111.563l59.791 31.866a11.442 11.442 0 0 0 10.666 0l59.791-31.866 30.876 16.443-96 51.154-96-51.154Zm-.021 55.617 59.812 31.866a11.442 11.442 0 0 0 10.667 0l59.812-31.866 30.854 16.442-96 51.155-96-51.155Z",
          })
        )
      )
    );
  },
  Sl = function (e) {
    return a.createElement(
      "svg",
      T({}, e, {
        className: "min-icon",
        fill: "currentcolor",
        id: "Account_Icon",
        "data-name": "Account Icon",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16.409 13.096",
      }),
      a.createElement("path", {
        id: "Trazado_391",
        "data-name": "Trazado 391",
        d: "M-4332.855-1143.481a3.023,3.023,0,0,0,2.958-3.078,3.023,3.023,0,0,0-2.958-3.078,3.023,3.023,0,0,0-2.958,3.078A3.023,3.023,0,0,0-4332.855-1143.481Zm0-5.194a2.078,2.078,0,0,1,2.03,2.116,2.077,2.077,0,0,1-2.03,2.116,2.075,2.075,0,0,1-2.028-2.116A2.076,2.076,0,0,1-4332.855-1148.675Z",
        transform: "translate(4339.12 1149.637)",
      }),
      a.createElement("path", {
        id: "Trazado_392",
        "data-name": "Trazado 392",
        d: "M-4337.952-1130.053a1.374,1.374,0,0,0,1.252.775h4.993a1.354,1.354,0,0,0,1.25-.786,1.675,1.675,0,0,0-.164-1.686,4.521,4.521,0,0,0-1.7-1.405,4.361,4.361,0,0,0-2.125-.438,4.483,4.483,0,0,0-3.318,1.808c-.026.035-.051.071-.075.106A1.641,1.641,0,0,0-4337.952-1130.053Zm6.663-.437a.426.426,0,0,1-.417.25h-4.993a.453.453,0,0,1-.427-.254.64.64,0,0,1,.053-.632h0c.017-.027.037-.054.057-.08a3.539,3.539,0,0,1,2.622-1.424c.056,0,.113,0,.168,0a3.606,3.606,0,0,1,2.864,1.466A.686.686,0,0,1-4331.29-1130.49Z",
        transform: "translate(4340.467 1140.236)",
      }),
      a.createElement("path", {
        id: "Trazado_393",
        "data-name": "Trazado 393",
        d: "M-4329.387-1146.951h-3.506a.476.476,0,0,0-.477.476.477.477,0,0,0,.477.476h3.506a1.047,1.047,0,0,1,1.046,1.045v7.99a1.047,1.047,0,0,1-1.046,1.045H-4341.8a1.047,1.047,0,0,1-1.046-1.045v-7.99A1.048,1.048,0,0,1-4341.8-1146a.476.476,0,0,0,.476-.476.476.476,0,0,0-.476-.476,2,2,0,0,0-2,2v7.99a2,2,0,0,0,2,2h12.412a2,2,0,0,0,2-2v-7.99A2,2,0,0,0-4329.387-1146.951Z",
        transform: "translate(4343.797 1148.063)",
      }),
      a.createElement("rect", {
        id: "Rectángulo_809",
        "data-name": "Rectángulo 809",
        width: "3.266",
        height: "2.781",
        rx: "1.024",
        transform: "translate(11.002 3.376)",
      }),
      a.createElement("rect", {
        id: "Rectángulo_810",
        "data-name": "Rectángulo 810",
        width: "3.266",
        height: "1.336",
        rx: "0.668",
        transform: "translate(11.002 7.328)",
      }),
      a.createElement("rect", {
        id: "Rectángulo_811",
        "data-name": "Rectángulo 811",
        width: "3.266",
        height: "1.336",
        rx: "0.668",
        transform: "translate(11.002 9.621)",
      })
    );
  },
  kl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path" },
          e.createElement("rect", {
            id: "Rectángulo_1039",
            "data-name": "Rectángulo 1039",
            width: "256",
            height: "215.188",
            fill: "none",
          })
        ),
        e.createElement(
          "clipPath",
          { id: "clip-Create_Group" },
          e.createElement("rect", { width: "256", height: "256" })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Create_Group",
          "data-name": "Create Group",
          clipPath: "url(#clip-Create_Group)",
        },
        e.createElement("rect", { width: "256", height: "256", fill: "#fff" }),
        e.createElement(
          "g",
          { id: "Create_Group_Icon", "data-name": "Create Group Icon" },
          e.createElement(
            "g",
            {
              id: "Grupo_2428",
              "data-name": "Grupo 2428",
              transform: "translate(0 20)",
            },
            e.createElement(
              "g",
              { id: "Grupo_2427", "data-name": "Grupo 2427" },
              e.createElement("path", {
                id: "Trazado_7184",
                "data-name": "Trazado 7184",
                d: "M498.413,74.672a63.2,63.2,0,0,1-3.786,21.575c.9.049,1.8.078,2.709.078,26.871,0,48.733-21.605,48.733-48.162S524.2,0,497.337,0a48.855,48.855,0,0,0-36.642,16.469,64.109,64.109,0,0,1,37.719,58.2",
                transform: "translate(-305.609 0)",
                fill: "#4ccb92",
              }),
              e.createElement("path", {
                id: "Trazado_7185",
                "data-name": "Trazado 7185",
                d: "M95.34,96.326c.921,0,1.836-.031,2.744-.081A63.2,63.2,0,0,1,94.3,74.674a64.109,64.109,0,0,1,37.693-58.2A48.867,48.867,0,0,0,95.34,0C68.473,0,46.614,21.605,46.614,48.163S68.473,96.326,95.34,96.326",
                transform: "translate(-30.922 0)",
                fill: "#4ccb92",
              }),
              e.createElement("path", {
                id: "Trazado_7186",
                "data-name": "Trazado 7186",
                d: "M80.135,346.621a97.66,97.66,0,0,1,21.039-9.138,64.833,64.833,0,0,1-30.526-28.792c-2.2-.2-4.4-.306-6.612-.308-1.071,0-2.152.027-3.221.075-.121,0-.243.005-.365.011a70.315,70.315,0,0,0-7.835.841c-18.427,3-35.857,13.09-46.8,27.434-.419.55-.838,1.119-1.223,1.65l-.005.008a24.616,24.616,0,0,0-1.906,25.48,22.559,22.559,0,0,0,3.644,5.089,22.224,22.224,0,0,0,4.817,3.812,23.01,23.01,0,0,0,5.736,2.385,24.94,24.94,0,0,0,6.409.823H49.714a37.659,37.659,0,0,1,2.685-4.371l.027-.038.046-.063c.569-.785,1.067-1.457,1.525-2.058a90.337,90.337,0,0,1,26.138-22.841",
                transform: "translate(0 -204.572)",
                fill: "#4ccb92",
              }),
              e.createElement("path", {
                id: "Trazado_7187",
                "data-name": "Trazado 7187",
                d: "M215.477,113.623c0,30.276,24.92,54.907,55.549,54.907s55.557-24.63,55.557-54.907-24.929-54.907-55.557-54.907-55.549,24.63-55.549,54.907",
                transform: "translate(-142.94 -38.95)",
                fill: "#4ccb92",
              }),
              e.createElement("path", {
                id: "Trazado_7188",
                "data-name": "Trazado 7188",
                d: "M358.424,337.287l0,0a73.77,73.77,0,0,0-27.955-21.978A77.668,77.668,0,0,0,315,310.141a74.21,74.21,0,0,0-15.959-1.757c-1.071,0-2.152.028-3.22.075-.122.005-.244.006-.365.011-.73.036-1.46.088-2.189.147a64.831,64.831,0,0,1-14.437,18.4,47.462,47.462,0,0,0-24.218,17.921c-.357-.083-.713-.172-1.071-.252a84.586,84.586,0,0,0-18.192-2c-1.221,0-2.454.031-3.671.085-.138.005-.277.006-.416.012a80.086,80.086,0,0,0-8.933.959c-21.008,3.419-40.879,14.924-53.349,31.275-.478.628-.955,1.276-1.394,1.882l-.006.008a28.062,28.062,0,0,0-2.177,29.05,25.77,25.77,0,0,0,4.155,5.8,25.368,25.368,0,0,0,5.491,4.346,26.29,26.29,0,0,0,6.541,2.718,28.435,28.435,0,0,0,7.306.938h93.79a28.421,28.421,0,0,0,5.814-.589,47.926,47.926,0,0,0,4.917.253A47.353,47.353,0,0,0,340.6,375.992a24.947,24.947,0,0,0,6.424-.835,22.741,22.741,0,0,0,5.751-2.418,21.778,21.778,0,0,0,4.793-3.867,22.122,22.122,0,0,0,3.581-5.16,25.152,25.152,0,0,0-2.726-26.426m-64.729,72.2a37.411,37.411,0,1,1,37.411-37.411A37.411,37.411,0,0,1,293.7,409.484",
                transform: "translate(-107.694 -204.572)",
                fill: "#4ccb92",
              }),
              e.createElement("path", {
                id: "Trazado_7189",
                "data-name": "Trazado 7189",
                d: "M523.713,445.287H511.978v11.735H500.243v11.735h11.735v11.735h11.735V468.757h11.735V457.022H523.713Z",
                transform: "translate(-331.844 -295.388)",
                fill: "#4ccb92",
              })
            )
          ),
          e.createElement("rect", {
            id: "Rectángulo_1040",
            "data-name": "Rectángulo 1040",
            width: "256",
            height: "256",
            fill: "none",
          })
        )
      )
    );
  },
  Il = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Trazado 432",
          d: "M235.994 77.198c.387-15.753.958-32.242-.5-47.941-1.093-11.756-6.192-21.735-17.831-25.916a42.553 42.553 0 0 0-5.016-1.447c-6.55-1.478-13.432-1.6-20.09-1.8-11.727-.343-23.45.366-35.176.314-23.494-.1-46.986.322-70.479.414q-4.228.018-8.456.017H36.24A17.26 17.26 0 0 0 19 18.08v220.679A17.26 17.26 0 0 0 36.24 256h182.54a17.26 17.26 0 0 0 17.24-17.241V128.816c-.002-17.183-.452-34.459-.026-51.618ZM215.068 223.19a14.888 14.888 0 0 1-14.889 14.888H51.81a14.888 14.888 0 0 1-14.888-14.888V33.662A14.888 14.888 0 0 1 51.81 18.774h99.549v25.459a37.8 37.8 0 0 0 37.756 37.759h25.953Zm0-157.656h-25.952a21.32 21.32 0 0 1-21.3-21.3V18.775h32.358a14.888 14.888 0 0 1 14.894 14.888Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 433",
          d: "M142.243 86.687a7.664 7.664 0 0 0-5.873.748 7.728 7.728 0 0 0-3.655 4.732l-27.607 102.662a7.778 7.778 0 0 0 5.464 9.515 7.487 7.487 0 0 0 2.023.276 7.828 7.828 0 0 0 3.885-1.039 7.641 7.641 0 0 0 3.63-4.712l27.606-102.662a7.781 7.781 0 0 0-5.474-9.52Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 434",
          d: "m76.404 145.413 20.711-20.71a7.78 7.78 0 0 0 0-10.99 7.8 7.8 0 0 0-10.985 0l-.224.278c-.44.642-3.849 3.92-7.146 7.09-17.4 16.732-21.453 21.528-21.139 24-.5 3.044 4.393 8.7 20.83 24.509 3.423 3.292 6.963 6.7 7.418 7.429l.213.275a7.338 7.338 0 0 0 5.313 2.366 7.168 7.168 0 0 0 1.8-.232 8.626 8.626 0 0 0 6-5.946 7.17 7.17 0 0 0-2.045-7.1Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 435",
          d: "M159.273 111.622a8.619 8.619 0 0 0-5.932 6 7.187 7.187 0 0 0 2.121 7.1l20.906 20.685-20.9 20.9a7.5 7.5 0 0 0-1.677 8.451 7.574 7.574 0 0 0 6.88 4.852 2.3 2.3 0 0 0 .538.062c2.979 0 8.8-5.225 24.1-21.218 3.243-3.389 6.6-6.894 7.281-7.345l.282-.224a7.734 7.734 0 0 0 2.277-5.524 7.746 7.746 0 0 0-2.308-5.523l-26.444-26.164a7.188 7.188 0 0 0-7.124-2.047Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 899",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  ql = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          { "data-name": "CollapseIcon" },
          e.createElement("path", {
            "data-name": "Rect\\xE1ngulo 841",
            fill: "none",
            d: "M0 0h256v256H0z",
          }),
          e.createElement("path", {
            "data-name": "Rect\\xE1ngulo 842",
            d: "M0 46h256v28H0z",
          }),
          e.createElement("path", {
            "data-name": "Rect\\xE1ngulo 843",
            d: "M0 116h256v28H0z",
          }),
          e.createElement("path", {
            "data-name": "Rect\\xE1ngulo 844",
            d: "M0 186h256v28H0z",
          })
        )
      )
    );
  },
  Fl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path" },
          e.createElement("rect", {
            id: "Rectángulo_1030",
            "data-name": "Rectángulo 1030",
            width: "256.722",
            height: "256.722",
            fill: "none",
          })
        ),
        e.createElement(
          "clipPath",
          { id: "clip-Generic_Delete" },
          e.createElement("rect", { width: "256", height: "256" })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Generic_Delete",
          "data-name": "Generic Delete",
          clipPath: "url(#clip-Generic_Delete)",
        },
        e.createElement("rect", { width: "256", height: "256", fill: "#fff" }),
        e.createElement(
          "g",
          { id: "Generic_Delete_Icon", "data-name": "Generic Delete Icon" },
          e.createElement(
            "g",
            { id: "Grupo_2418", "data-name": "Grupo 2418" },
            e.createElement("path", {
              id: "Trazado_7169",
              "data-name": "Trazado 7169",
              d: "M128.362,0a128.361,128.361,0,1,0,128.36,128.361A128.361,128.361,0,0,0,128.362,0m.764,229.776A101.415,101.415,0,1,1,230.541,128.361,101.415,101.415,0,0,1,129.126,229.776",
              fill: "#c83b51",
            }),
            e.createElement("path", {
              id: "Trazado_7170",
              "data-name": "Trazado 7170",
              d: "M239.678,162.575l-18.744-19.187a4.572,4.572,0,0,0-6.36,0l-22.136,22.661-22.133-22.661a4.44,4.44,0,0,0-6.356,0L145.2,162.575a4.45,4.45,0,0,0,0,6.211L167.491,191.6,145.2,214.411a4.45,4.45,0,0,0,0,6.211l18.746,19.189a4.571,4.571,0,0,0,6.358,0l22.133-22.661,22.136,22.661a4.442,4.442,0,0,0,6.358,0l18.744-19.189a4.445,4.445,0,0,0,0-6.211L217.392,191.6l22.286-22.814a4.445,4.445,0,0,0,0-6.211",
              transform: "translate(-64.082 -63.239)",
              fill: "#c83b51",
            })
          )
        )
      )
    );
  },
  Ol = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
          width: "26.9",
          height: "26.9",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "Offline-Registration_svg__a" },
          e.createElement("path", {
            "data-name": "Rect\\xE1ngulo 1604",
            fill: "none",
            d: "M0 0h256v199.086H0z",
          })
        )
      ),
      e.createElement("path", {
        "data-name": "Rect\\xE1ngulo 1602",
        fill: "none",
        d: "M0 0h256v256H0z",
      }),
      e.createElement(
        "g",
        { "data-name": "Grupo 2526" },
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 1603",
          d: "m19.235 39.602 10.497-10.49L218.26 217.77l-10.497 10.49z",
        }),
        e.createElement(
          "g",
          { "data-name": "Grupo 2525" },
          e.createElement(
            "g",
            {
              "data-name": "Grupo 2524",
              clipPath: "url(#Offline-Registration_svg__a)",
              transform: "translate(0 29.146)",
            },
            e.createElement("path", {
              "data-name": "Trazado 7273",
              d: "m17.968 79.492.007.015a55.559 55.559 0 0 0-17.96 42.3 57.238 57.238 0 0 0 18.783 42.92 65.482 65.482 0 0 0 44.3 16.431h105.817L51.268 63.545a68.63 68.63 0 0 0-33.3 15.947",
            }),
            e.createElement("path", {
              "data-name": "Trazado 7274",
              d: "m222.825 99.169-.074.015h-.333l-.326-.03a22.226 22.226 0 0 1-9.028-2.8 4.017 4.017 0 0 0-.651-.3 3.823 3.823 0 0 0-.533.244 18.331 18.331 0 0 1-9.665 2.745 18.542 18.542 0 0 1-3.559-.348l-.955-.185-.866-.429a19.149 19.149 0 0 1-9.332-10 5.281 5.281 0 0 0-.3-.525 4.064 4.064 0 0 0-.474-.1 18.625 18.625 0 0 1-12.12-6.21l-.585-.666-.422-.792a19.8 19.8 0 0 1-1.843-13.35 6.256 6.256 0 0 0 .067-.9 4.811 4.811 0 0 0-.437-.511 19.647 19.647 0 0 1-6.209-12.306l-.089-.807.089-.8a19.526 19.526 0 0 1 5.21-11.211c-.644-.688-1.251-1.413-1.924-2.079a71.234 71.234 0 0 0-49.687-19.901 68.071 68.071 0 0 0-38.525 11.6l140.41 140.462c.118-.1.266-.192.392-.289v-.007a45.043 45.043 0 0 0 16.428-36.742c0-14.652-5.876-25.849-14.66-33.774",
            }),
            e.createElement("path", {
              "data-name": "Trazado 7275",
              d: "M255.963 51.509a15.953 15.953 0 0 0-5.121-10.049 8.872 8.872 0 0 1-1.48-1.991 9.8 9.8 0 0 1 .059-2.753 16.071 16.071 0 0 0-1.487-10.967l-.207-.385-.3-.333a14.943 14.943 0 0 0-9.82-5 8.149 8.149 0 0 1-2.316-.7 8.935 8.935 0 0 1-1.359-2.096 15.448 15.448 0 0 0-7.563-8.192l-.437-.215-.481-.1a14.62 14.62 0 0 0-10.633 1.965 8.262 8.262 0 0 1-2.405.888 8.3 8.3 0 0 1-2.401-.888 14.639 14.639 0 0 0-10.638-1.961l-.474.1-.444.215a15.505 15.505 0 0 0-7.563 8.192 8.821 8.821 0 0 1-1.369 2.109 8.149 8.149 0 0 1-2.316.7 14.96 14.96 0 0 0-9.82 5l-.3.333-.207.392a16.144 16.144 0 0 0-1.48 10.9 9.96 9.96 0 0 1 .059 2.775 9.2 9.2 0 0 1-1.487 2.013 15.9 15.9 0 0 0-5.103 10.048l-.044.4.044.4a15.934 15.934 0 0 0 5.106 10.057 9.031 9.031 0 0 1 1.487 1.983 9.861 9.861 0 0 1-.059 2.76 16.112 16.112 0 0 0 1.48 10.952l.207.392.3.333a14.96 14.96 0 0 0 9.82 5 8.149 8.149 0 0 1 2.316.7 9.082 9.082 0 0 1 1.376 2.109 15.446 15.446 0 0 0 7.563 8.162l.437.215.474.089a14.639 14.639 0 0 0 10.635-1.96 8.262 8.262 0 0 1 2.405-.888 8.533 8.533 0 0 1 2.472.925 18.627 18.627 0 0 0 7.526 2.331l.155.015h.185a9.794 9.794 0 0 0 3.16-.525l.229-.074.215-.111a15.421 15.421 0 0 0 7.57-8.185 9.2 9.2 0 0 1 1.376-2.1 8.03 8.03 0 0 1 2.309-.7 14.943 14.943 0 0 0 9.82-5l.3-.326.2-.392a15.981 15.981 0 0 0 1.487-10.982 10.04 10.04 0 0 1-.059-2.745 8.957 8.957 0 0 1 1.48-1.976 15.953 15.953 0 0 0 5.121-10.049l.044-.407Zm-47.751 15.655-15.387-16.081 5.454-5.683 9.933 10.353 18.342-19.108 5.458 5.706Z",
            })
          )
        )
      )
    );
  },
  jl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Trazado 394",
          d: "M222.617 88.875a26.012 26.012 0 0 0-23.281 14.452l-44.307-6.454a74.856 74.856 0 0 0 2.892-20.607A74.732 74.732 0 0 0 83.285 1.439 74.732 74.732 0 0 0 8.643 76.266a74.763 74.763 0 0 0 65.415 74.236l-1.38 25.452c-.127-.006-.249-.019-.371-.019a18.44 18.44 0 0 0-18.42 18.46 18.441 18.441 0 0 0 18.42 18.466 18.443 18.443 0 0 0 18.42-18.466 18.459 18.459 0 0 0-7.851-15.108l1.535-28.223a74.164 74.164 0 0 0 32.006-7.749l39.5 51.413a36.849 36.849 0 0 0-10.488 25.784 36.884 36.884 0 0 0 36.84 36.927 36.88 36.88 0 0 0 36.834-36.927 36.881 36.881 0 0 0-36.834-36.931 36.539 36.539 0 0 0-18.137 4.811l-38.7-50.376a75.035 75.035 0 0 0 25.967-31.174l45.242 6.59c-.029.519-.078 1.032-.078 1.556a26.082 26.082 0 0 0 26.051 26.112 26.082 26.082 0 0 0 26.05-26.112 26.082 26.082 0 0 0-26.047-26.113Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 395",
          d: "M181.396 256a38.679 38.679 0 0 1-38.636-38.643 38.393 38.393 0 0 1 9.576-25.436l-36.435-47.307a74.862 74.862 0 0 1-28.494 6.932l-1.318 24.217a20.571 20.571 0 0 1 7.657 15.975 20.545 20.545 0 0 1-20.52 20.514 20.54 20.54 0 0 1-20.518-20.514 20.549 20.549 0 0 1 18.6-20.432l1.125-20.571A75.865 75.865 0 0 1 8.2 75.818 75.907 75.907 0 0 1 84.02-.005a75.908 75.908 0 0 1 75.822 75.823 75.76 75.76 0 0 1-2.229 18.236l39.257 5.7a27.844 27.844 0 0 1 24.216-13.965 28.051 28.051 0 0 1 28.018 28.022 28.051 28.051 0 0 1-28.018 28.022 28.052 28.052 0 0 1-28.02-27.48l-40.61-5.9a76.059 76.059 0 0 1-23.551 28.463l35.308 45.854a38.644 38.644 0 0 1 17.18-4.049 38.678 38.678 0 0 1 38.633 38.634A38.678 38.678 0 0 1 181.396 256Zm-64.078-117.413 41.329 53.665-1.453 1.492a33.619 33.619 0 0 0-9.635 23.618 33.876 33.876 0 0 0 33.837 33.84 33.875 33.875 0 0 0 33.835-33.84 33.874 33.874 0 0 0-33.835-33.837 33.822 33.822 0 0 0-16.657 4.409l-1.814 1.027-40.89-53.094 2.092-1.434a71.22 71.22 0 0 0 24.718-29.586l.739-1.65 48.482 7.038-.133 2.2c-.049.739-.073 1.055-.073 1.381a23.253 23.253 0 0 0 23.227 23.225 23.249 23.249 0 0 0 23.222-23.225 23.246 23.246 0 0 0-23.222-23.224 23.1 23.1 0 0 0-20.759 12.852l-.776 1.549-48.012-6.975.759-2.639a71.253 71.253 0 0 0 2.749-19.559A71.1 71.1 0 0 0 84.022 4.794 71.1 71.1 0 0 0 12.999 75.82a71.061 71.061 0 0 0 62.243 70.465l2.225.273-1.608 29.524-2.318-.043h-.037a15.779 15.779 0 0 0-16 15.7 15.739 15.739 0 0 0 15.721 15.717 15.741 15.741 0 0 0 15.722-15.717 15.763 15.763 0 0 0-6.7-12.866l-1.09-.763 1.7-31.26 2.235-.033a70.305 70.305 0 0 0 30.455-7.355Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 868",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  Dl = function (e) {
    return a.createElement(
      "svg",
      T({}, e, {
        className: "min-icon",
        fill: "currentcolor",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 13 12.996",
      }),
      a.createElement(
        "g",
        { transform: "translate(-63.686 -70.783)" },
        a.createElement("path", {
          className: "a",
          d: "M74.736,79.879v1.95h-9.1v-1.95h-1.95v3.9h13v-3.9Z",
        }),
        a.createElement("path", {
          className: "a",
          d: "M69.211,80.533h1.95V73.861h1.525l-2.5-3.078-2.5,3.078h1.525Z",
        })
      )
    );
  },
  Ul = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 858",
          fill: "none",
          d: "M0 0h256v256H0z",
        }),
        e.createElement("path", {
          "data-name": "Uni\\xF3n 20",
          d: "M102.405 230.399v-76.79h-76.8a25.607 25.607 0 0 1 0-51.214h76.8V25.601a25.6 25.6 0 1 1 51.2 0v76.792h76.8a25.607 25.607 0 0 1 0 51.214h-76.8v76.792a25.6 25.6 0 1 1-51.2 0Z",
        })
      )
    );
  },
  Wl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path" },
          e.createElement("rect", {
            id: "Rectángulo_1005",
            "data-name": "Rectángulo 1005",
            width: "228.951",
            height: "256",
            fill: "none",
          })
        ),
        e.createElement(
          "clipPath",
          { id: "clip-Expand_Tenant:_Add_Pools" },
          e.createElement("rect", { width: "256", height: "256" })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Expand_Tenant:_Add_Pools",
          "data-name": "Expand Tenant: Add Pools",
          clipPath: "url(#clip-Expand_Tenant:_Add_Pools)",
        },
        e.createElement("rect", { width: "256", height: "256", fill: "#fff" }),
        e.createElement(
          "g",
          {
            id: "Expand_Tenants_Add_Pools",
            "data-name": "Expand Tenants Add Pools",
          },
          e.createElement(
            "g",
            {
              id: "Grupo_2392",
              "data-name": "Grupo 2392",
              transform: "translate(14)",
            },
            e.createElement(
              "g",
              { id: "Grupo_2391", "data-name": "Grupo 2391" },
              e.createElement("path", {
                id: "Trazado_7129",
                "data-name": "Trazado 7129",
                d: "M210.46,96.042a56.244,56.244,0,1,0-90.223-64.6A71.157,71.157,0,0,0,0,83.178v0A71.315,71.315,0,0,0,62.4,154l-1.316,24.278c-.121-.006-.238-.018-.354-.018a17.611,17.611,0,0,0,0,35.223h0a17.613,17.613,0,0,0,10.082-32.025l1.464-26.922a70.737,70.737,0,0,0,30.53-7.391l37.678,49.042a35.174,35.174,0,1,0,60.272,24.6h0a35.181,35.181,0,0,0-35.132-35.228h0a34.864,34.864,0,0,0-17.3,4.589L111.4,142.085a71.574,71.574,0,0,0,24.769-29.736l43.156,6.286c-.028.495-.075.985-.075,1.484A24.849,24.849,0,1,0,210.46,96.042m-39.406,4.639A44.437,44.437,0,1,1,215.49,56.244a44.437,44.437,0,0,1-44.437,44.437",
                transform: "translate(0)",
                fill: "#4ccb92",
              }),
              e.createElement("path", {
                id: "Trazado_7130",
                "data-name": "Trazado 7130",
                d: "M224.419,96.438l-6.231-6.231V108.9H236.88l-6.23-6.231L243.11,90.207l-6.231-6.23Z",
                transform: "translate(-72.057 -27.733)",
                fill: "#4ccb92",
              }),
              e.createElement("path", {
                id: "Trazado_7131",
                "data-name": "Trazado 7131",
                d: "M267.86,53,255.4,65.457l6.23,6.231L274.09,59.227l6.231,6.23V46.766H261.629Z",
                transform: "translate(-84.346 -15.444)",
                fill: "#4ccb92",
              })
            )
          ),
          e.createElement("rect", {
            id: "Rectángulo_1006",
            "data-name": "Rectángulo 1006",
            width: "256",
            height: "256",
            fill: "none",
          })
        )
      )
    );
  },
  $l = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 849",
          fill: "none",
          d: "M0 0h256v256H0z",
        }),
        e.createElement("path", {
          "data-name": "sync-icn",
          d: "M37.848 131.79c0-.057.006-.114.006-.166l-5.4 6.524-9.992 11.438c-11.006 12.6-30.166-4.136-19.16-16.739l33.545-38.416a12.732 12.732 0 0 1 18.1-1.222l38.41 33.549c12.6 11.006-4.133 30.171-16.74 19.165l-14.342-12.527-2.316-2.123c0 .175.023.346.023.517a73.159 73.159 0 0 0 73.078 73.078 73.28 73.28 0 0 0 59.584-30.763 11.067 11.067 0 0 1 15.432-2.6 11.062 11.062 0 0 1 2.6 15.432 95.45 95.45 0 0 1-77.611 40.059 95.316 95.316 0 0 1-95.217-95.206Zm163.207 21.989-38.4-33.549c-12.6-11.011 4.131-30.176 16.738-19.17l14.338 12.532 2.32 2.118c0-.171-.023-.336-.023-.512A73.159 73.159 0 0 0 122.95 42.12a73.289 73.289 0 0 0-59.588 30.759 11.068 11.068 0 0 1-15.432 2.6 11.071 11.071 0 0 1-2.6-15.431 95.439 95.439 0 0 1 77.615-40.06 95.317 95.317 0 0 1 95.209 95.209c0 .057-.01.109-.01.166l5.4-6.529 9.992-11.433c11.006-12.6 30.17 4.136 19.16 16.739l-33.545 38.415a12.894 12.894 0 0 1-9.689 4.43 12.7 12.7 0 0 1-8.407-3.205Z",
          stroke: "rgba(0,0,0,0)",
          strokeMiterlimit: 10,
        })
      )
    );
  },
  Ql = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 870",
          fill: "none",
          d: "M255.999.001v256h-256v-256z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 454",
          d: "M-.001 16.413A16.487 16.487 0 0 1 16.536-.001h135.381c21.752 0 21.752 32.824 0 32.824H33.088v190.355h118.829c21.752 0 21.752 32.822 0 32.822H16.536A16.477 16.477 0 0 1-.001 239.6Zm61.308 95.176h138.227l-18.743-18.588c-15.385-15.262 8-38.471 23.393-23.205l46.878 46.5a16.345 16.345 0 0 1 0 23.408l-46.878 46.51c-15.39 15.266-38.777-7.949-23.393-23.211l18.744-18.592H61.308c-10.872 0-16.307-8.205-16.307-16.41s5.435-16.412 16.307-16.412Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 454 - Contorno",
          d: "M-.501 239.601V16.417A17 17 0 0 1 16.536-.497h135.381a16.259 16.259 0 0 1 12.61 5.3 16.393 16.393 0 0 1 3.156 5.422 18.547 18.547 0 0 1 1.048 6.193 18.547 18.547 0 0 1-1.048 6.193 16.393 16.393 0 0 1-3.156 5.422 16.259 16.259 0 0 1-12.61 5.3H33.588v189.355h118.329a16.259 16.259 0 0 1 12.61 5.3 16.374 16.374 0 0 1 3.156 5.422 18.528 18.528 0 0 1 1.048 6.191 18.531 18.531 0 0 1-1.048 6.193 16.374 16.374 0 0 1-3.156 5.422 16.259 16.259 0 0 1-12.61 5.3H16.536a17.034 17.034 0 0 1-6.625-1.328 16.992 16.992 0 0 1-5.416-3.621 16.846 16.846 0 0 1-3.655-5.373 16.663 16.663 0 0 1-1.341-6.593ZM167.731 16.415a17.535 17.535 0 0 0-.991-5.859 15.388 15.388 0 0 0-2.962-5.094A15.286 15.286 0 0 0 151.917.503H16.536A15.994 15.994 0 0 0 .499 16.417v223.184a15.989 15.989 0 0 0 16.037 15.9h135.381a15.286 15.286 0 0 0 11.861-4.959 15.368 15.368 0 0 0 2.962-5.094 17.518 17.518 0 0 0 .991-5.859 17.515 17.515 0 0 0-.991-5.857 15.368 15.368 0 0 0-2.962-5.094 15.286 15.286 0 0 0-11.861-4.959H32.588V32.324h119.329a15.286 15.286 0 0 0 11.861-4.959 15.388 15.388 0 0 0 2.962-5.094 17.526 17.526 0 0 0 .992-5.86ZM44.499 128.001a18.547 18.547 0 0 1 1.048-6.193 16.37 16.37 0 0 1 3.154-5.422 16.248 16.248 0 0 1 12.6-5.3h137.013L180.432 93.35a16.238 16.238 0 0 1-5.179-11.6 16.682 16.682 0 0 1 3.251-9.711 19.071 19.071 0 0 1 8.051-6.451 15.968 15.968 0 0 1 8.961-1.051 17 17 0 0 1 9.013 4.9l46.878 46.5a16.869 16.869 0 0 1 5.084 12.006 16.81 16.81 0 0 1-1.3 6.482 17.213 17.213 0 0 1-3.786 5.631l-46.879 46.51a16.976 16.976 0 0 1-9.01 4.9 15.975 15.975 0 0 1-8.958-1.049 19.084 19.084 0 0 1-8.054-6.453 16.694 16.694 0 0 1-3.254-9.715 16.237 16.237 0 0 1 5.179-11.6l17.882-17.736H61.298a16.249 16.249 0 0 1-12.6-5.3 16.351 16.351 0 0 1-3.154-5.422 18.527 18.527 0 0 1-1.045-6.19Zm156.248-15.912H61.306a15.275 15.275 0 0 0-11.855 4.959 15.365 15.365 0 0 0-2.961 5.094 17.538 17.538 0 0 0-.991 5.859 17.547 17.547 0 0 0 .991 5.859 15.375 15.375 0 0 0 2.961 5.092 15.276 15.276 0 0 0 11.855 4.959h139.443l-.862.855-18.744 18.592a15.257 15.257 0 0 0-4.883 10.891 15.7 15.7 0 0 0 3.067 9.133 18.064 18.064 0 0 0 7.625 6.111 14.955 14.955 0 0 0 8.4.988 16 16 0 0 0 8.482-4.625l46.878-46.51a16.222 16.222 0 0 0 3.567-5.3 15.825 15.825 0 0 0 1.222-6.1 15.868 15.868 0 0 0-4.789-11.295l-46.878-46.5a16.011 16.011 0 0 0-8.485-4.627 15 15 0 0 0-8.4.988 18.055 18.055 0 0 0-7.623 6.111 15.688 15.688 0 0 0-3.064 9.129 15.259 15.259 0 0 0 4.883 10.893Z",
          fill: "rgba(0,0,0,0)",
        })
      )
    );
  },
  Yl = function (e) {
    return a.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 22 17.043",
        },
        e
      ),
      a.createElement(
        "g",
        { id: "azure-logo-gray", transform: "translate(-437.603 -471.382)" },
        a.createElement(
          "g",
          { id: "layer1-1", transform: "translate(437.603 471.382)" },
          a.createElement("path", {
            id: "path21",
            d: "M447.781,487.513l5.188-.917.049-.011-2.668-3.173c-1.467-1.746-2.668-3.181-2.668-3.188s2.756-7.6,2.771-7.63c.006-.009,1.881,3.229,4.545,7.847l4.572,7.923.035.062-8.479,0-8.48,0S447.781,487.513,447.781,487.513Zm-10.178-.969s1.257-2.187,2.794-4.85l2.794-4.842,3.257-2.733c1.792-1.5,3.261-2.735,3.266-2.737a.672.672,0,0,1-.052.132c-.035.074-1.627,3.487-3.535,7.583l-3.472,7.448-2.525,0C438.739,486.551,437.6,486.55,437.6,486.544Z",
            transform: "translate(-437.603 -471.382)",
          })
        )
      )
    );
  },
  Kl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { "data-name": "Total Objects", clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "total-objects-icn",
          d: "M-.004 128.002a128.148 128.148 0 0 1 128-128 128.148 128.148 0 0 1 128 128 128.144 128.144 0 0 1-128 128 128.144 128.144 0 0 1-128-128Zm19.844 0a108.275 108.275 0 0 0 108.156 108.155 108.28 108.28 0 0 0 108.16-108.155 108.283 108.283 0 0 0-108.16-108.157A108.278 108.278 0 0 0 19.842 128.002Zm27.555 31.581a37.6 37.6 0 0 1 37.564-37.565 37.608 37.608 0 0 1 37.561 37.565 37.609 37.609 0 0 1-37.561 37.565 37.606 37.606 0 0 1-37.563-37.566Zm108.127 34.939a17.425 17.425 0 0 1-17.408-17.4v-37.7a17.429 17.429 0 0 1 17.408-17.407h37.689a17.429 17.429 0 0 1 17.408 17.407v37.7a17.425 17.425 0 0 1-17.408 17.4Zm-54.881-81.311a13.3 13.3 0 0 1-11.477-6.625 13.3 13.3 0 0 1 0-13.249l26.861-46.521a13.287 13.287 0 0 1 11.477-6.629 13.281 13.281 0 0 1 11.475 6.629l26.861 46.521a13.285 13.285 0 0 1 0 13.249 13.294 13.294 0 0 1-11.479 6.625Z",
          stroke: "rgba(0,0,0,0)",
          strokeMiterlimit: 10,
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 853",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  Xl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "g",
        null,
        e.createElement("path", {
          fill: "currentcolor",
          d: "M145.4,20C86.3,20.1,38.3,67.6,37.5,126.6L24.8,114c-5.2-5-13.4-4.9-18.5,0.2\n\t\tc-4.9,5.1-4.9,13.2,0,18.2l37,37c5.1,5.1,13.3,5.2,18.5,0.1c0,0,0.1-0.1,0.1-0.1l37-37c4.9-5.3,4.6-13.5-0.7-18.5\n\t\tc-5-4.7-12.8-4.7-17.8,0l-13.8,13.8c0.2-43.4,35.4-78.5,78.8-78.5c43.5,0,78.8,35.3,78.8,78.8c0,43.5-35.3,78.8-78.8,78.8\n\t\tc-8.1,0-14.6,6.5-14.6,14.6s6.5,14.6,14.6,14.6c59.6-0.1,107.8-48.4,107.9-107.9C253.4,68.5,205.1,20.1,145.4,20z",
        }),
        e.createElement("path", {
          fill: "currentcolor",
          d: "M150.7,81.1c0.2-1.5-0.3-3-1.2-4.2c-1.3-0.9-2.9-1.3-4.4-1.1h-7.4c-1.2-0.1-2.3,0.2-3.3,0.8\n\t\tc-0.9,1.1-1.4,2.5-1.2,4c0,18.9,0,37.8,0,56.6v0.9l40.4,40.4c0.6,0.7,1.4,1.3,2.3,1.5c1.2,0.1,2.5-0.4,3.4-1.2c2.7-2,5-4.4,7-7.1\n\t\tc0.9-0.9,1.3-2.1,1.2-3.4c-0.3-0.9-0.8-1.8-1.6-2.4l-29.6-29.4c-1.9-1.7-3.5-3.7-4.7-6c-1-2.8-1.3-5.7-1-8.6\n\t\tC150.9,108.3,150.9,94.7,150.7,81.1z",
        })
      )
    );
  },
  Jl = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path" },
          e.createElement("rect", {
            id: "Rectángulo_1016",
            "data-name": "Rectángulo 1016",
            width: "234.495",
            height: "256",
            fill: "#4ccb92",
          })
        ),
        e.createElement(
          "clipPath",
          { id: "clip-Create_User" },
          e.createElement("rect", { width: "256", height: "256" })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Create_User",
          "data-name": "Create User",
          clipPath: "url(#clip-Create_User)",
        },
        e.createElement("rect", { width: "256", height: "256", fill: "#fff" }),
        e.createElement(
          "g",
          { id: "Create_User-2", "data-name": "Create User" },
          e.createElement(
            "g",
            {
              id: "Grupo_2404",
              "data-name": "Grupo 2404",
              transform: "translate(12)",
            },
            e.createElement(
              "g",
              { id: "Grupo_2403", "data-name": "Grupo 2403" },
              e.createElement("path", {
                id: "Trazado_7140",
                "data-name": "Trazado 7140",
                d: "M88.829,144.6h.048a66.829,66.829,0,0,0,27.035-5.707,69.009,69.009,0,0,0,22.1-15.529,72.055,72.055,0,0,0,14.891-22.977,73.863,73.863,0,0,0,5.463-28.1C158.372,32.435,127.183,0,88.831,0h0C50.5,0,19.316,32.43,19.316,72.292S50.5,144.6,88.829,144.6",
                transform: "translate(1.421)",
                fill: "#4ccb92",
              }),
              e.createElement("path", {
                id: "Trazado_7141",
                "data-name": "Trazado 7141",
                d: "M170.085,117.467a64.39,64.39,0,0,0-57.412,35.223c-1.427-.4-2.86-.784-4.3-1.124A94.705,94.705,0,0,0,86.9,149.044v.005c-1.755,0-3.439.046-5,.135A99.747,99.747,0,0,0,8.1,189.42c-.388.519-.767,1.061-1.234,1.756l-.107.15c-.1.142-.214.3-.312.458l-.027.028a37.88,37.88,0,0,0-2.671,37.522A31.97,31.97,0,0,0,32.509,247.36H142.044a31.485,31.485,0,0,0,13.08-2.84,64.408,64.408,0,1,0,14.961-127.054m.383,115.3a50.889,50.889,0,1,1,50.888-50.888,50.888,50.888,0,0,1-50.888,50.888m-7.982-26.944V189.859H146.524V173.895h15.963V157.931H178.45v15.964h15.963v15.964H178.45v15.963Z",
                transform: "translate(0 8.64)",
                fill: "#4ccb92",
              })
            )
          ),
          e.createElement("rect", {
            id: "Rectángulo_1017",
            "data-name": "Rectángulo 1017",
            width: "256",
            height: "256",
            fill: "none",
          })
        )
      )
    );
  },
  er = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "g",
        null,
        e.createElement("path", {
          d: "M244.1,8.4c-3.9-5.3-10.1-8.5-16.7-8.5H21.6C15,0,8.8,3.1,4.9,8.4C0.8,14-0.9,21,0.3,27.9\n\t\t\t\t\t\tc5.1,29.6,15.8,91.9,24.3,141.7v0.1C29,195,32.8,217.1,35,229.9c1.4,10.8,10.4,18.9,21.3,19.3h136.5\n\t\t\t\t\t\tc10.9-0.4,19.9-8.5,21.3-19.3l10.3-60.1l0.1-0.4L238.4,88v-0.2l10.3-59.9C249.9,21,248.3,14,244.1,8.4 M206.1,177h-163\n\t\t\t\t\t\tl-3.2-18.6h169.3L206.1,177z M220,95.3H28.9l-3.2-18.6h197.4L220,95.3z",
        })
      )
    );
  },
  ar = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement("path", {
        d: "M125.65,251.3h0c69.4,0,125.65-56.26,125.65-125.65h0C251.3,56.26,195.05,0,125.65,0h0C56.26,0,0,56.26,0,125.65s56.26,125.65,125.65,125.65M84.14,87.53l31.76-31.76c5.32-5.39,14-5.45,19.39-.13,.04,.04,.09,.09,.13,.13h0l31.74,31.76c3.97,3.69,5.22,9.46,3.14,14.47-2.19,5.32-7.3,8.87-13.05,9.06-3.57-.06-6.97-1.55-9.42-4.15l-8.4-8.4v87.53c0,7.57-6.15,13.71-13.72,13.7-7.57,0-13.7-6.14-13.7-13.7V98.53l-8.4,8.39c-2.45,2.6-5.85,4.1-9.42,4.16-5.76-.18-10.87-3.73-13.05-9.06-2.09-5-.83-10.78,3.14-14.47",
      })
    );
  },
  tr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path" },
          e.createElement("rect", {
            id: "Rectángulo_1021",
            "data-name": "Rectángulo 1021",
            width: "256",
            height: "191.369",
            fill: "#4ccb92",
          })
        ),
        e.createElement(
          "clipPath",
          { id: "clip-Set_Bucket_Replication" },
          e.createElement("rect", { width: "256", height: "256" })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Set_Bucket_Replication",
          "data-name": "Set Bucket Replication",
          clipPath: "url(#clip-Set_Bucket_Replication)",
        },
        e.createElement("rect", { width: "256", height: "256", fill: "#fff" }),
        e.createElement(
          "g",
          {
            id: "Set_Bucket_Replication_icon",
            "data-name": "Set Bucket Replication icon",
          },
          e.createElement(
            "g",
            {
              id: "Grupo_2409",
              "data-name": "Grupo 2409",
              transform: "translate(0 32)",
            },
            e.createElement(
              "g",
              { id: "Grupo_2408", "data-name": "Grupo 2408" },
              e.createElement("path", {
                id: "Trazado_7146",
                "data-name": "Trazado 7146",
                d: "M21.3,87.4l-1.578-9.192H46.838c-.123-.722-.249-1.449-.371-2.162-1.931-11.245-3.66-21.315-4.976-28.97l-27.171.006-1.577-9.19H40.71a20.546,20.546,0,0,1,3.951-10.1,17.7,17.7,0,0,1,14.016-7.169h62.949l1.169-6.805a12.394,12.394,0,0,0-2.281-9.6A10.335,10.335,0,0,0,112.289,0H10.7A10.33,10.33,0,0,0,2.474,4.215a12.426,12.426,0,0,0-2.284,9.6C2.7,28.413,7.977,59.178,12.2,83.733l.007.048c2.141,12.491,4,23.369,5.1,29.683.943,5.519,5.354,9.523,10.5,9.523H54.529C52.5,111.17,50.4,98.923,48.415,87.392Z",
                transform: "translate(0)",
                fill: "#4ccb92",
              }),
              e.createElement("path", {
                id: "Trazado_7147",
                "data-name": "Trazado 7147",
                d: "M264.2,97.863l2.41-14.045.037-.18,6.887-40.172.024-.117,5.074-29.533a12.4,12.4,0,0,0-2.281-9.6A10.336,10.336,0,0,0,268.128,0H166.535a10.331,10.331,0,0,0-8.223,4.215,12.425,12.425,0,0,0-2.283,9.6c.341,1.985.735,4.278,1.169,6.805H220.27A17.746,17.746,0,0,1,234.334,27.8a20.491,20.491,0,0,1,3.944,10.091h27.69l-1.514,9.169-26.959.006-5.351,31.141H259.1l-1.514,9.17-7.244,0A54.53,54.53,0,0,0,228,81.1l6.547-38.106a16.846,16.846,0,0,0-3.1-13.05,14.048,14.048,0,0,0-11.179-5.728H82.193a14.042,14.042,0,0,0-11.176,5.728,16.889,16.889,0,0,0-3.1,13.05C71.324,62.83,78.5,104.644,84.236,138.017l.01.065c2.91,16.977,5.443,31.762,6.932,40.344,1.282,7.5,7.277,12.942,14.267,12.942h91.579a13.777,13.777,0,0,0,9.436-3.82A54.824,54.824,0,0,0,264.2,97.863M87.119,88.2l-2.144-12.49H217.335l-.974,5.9a54.43,54.43,0,0,0-18.853,6.571ZM96.611,143l-2.144-12.492h75.608c-.168,1.748-.261,3.518-.261,5.31a55.27,55.27,0,0,0,.481,7.163Zm128.363,36.14A43.322,43.322,0,1,1,268.3,135.817a43.322,43.322,0,0,1-43.322,43.322",
                transform: "translate(-23.479)",
                fill: "#4ccb92",
              }),
              e.createElement("path", {
                id: "Trazado_7148",
                "data-name": "Trazado 7148",
                d: "M313.356,176.316c-.055.053-.11.107-.163.162h-.014l-25.036,24.646-8.883-8.767a6.569,6.569,0,1,0-9.224,9.354l18.121,17.855,34.329-33.735a6.594,6.594,0,1,0-9.13-9.516",
                transform: "translate(-93.036 -60.553)",
                fill: "#4ccb92",
              })
            )
          ),
          e.createElement("rect", {
            id: "Rectángulo_1022",
            "data-name": "Rectángulo 1022",
            width: "256",
            height: "256",
            fill: "none",
          })
        )
      )
    );
  },
  nr = function (a) {
    return e.createElement(
      "svg",
      T({}, a, {
        className: "min-icon",
        fill: "currentcolor",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
      }),
      e.createElement(
        "g",
        null,
        e.createElement(
          "g",
          { x: "2.7", y: "36.8" },
          e.createElement("path", {
            d: "M77.2,168.6c4,4.1,10.6,4.3,14.7,0.3c0,0,0,0,0.1-0.1l0.2-0.2l29.7-29.9\n\t\t\tc3.9-4.3,3.6-10.9-0.7-14.9c-4-3.7-10.1-3.7-14.1-0.1l-12,12V47.3h0.1c0-5.8-4.7-10.5-10.5-10.5s-10.5,4.7-10.5,10.5v88.3\n\t\t\tl-11.9-12c-4.3-4-10.9-3.7-14.9,0.5c-3.8,4.1-3.8,10.4,0.1,14.4L77.2,168.6z",
          }),
          e.createElement("path", {
            d: "M148.3,84.9l11.9-12v88.3h-0.1c0,5.8,4.7,10.5,10.5,10.5s10.5-4.7,10.5-10.5V72.9l11.9,12\n\t\t\tc4.3,4,10.9,3.7,14.9-0.5c3.8-4.1,3.8-10.4-0.1-14.4l-29.7-30c-4-4.1-10.6-4.2-14.7-0.2l-0.2,0.2l-29.7,29.9\n\t\t\tc-4,4.2-3.8,10.9,0.4,14.9C138.1,88.6,144.3,88.7,148.3,84.9",
          }),
          e.createElement("path", {
            d: "M242.1,154.9c-6.2,0-11.2,5-11.2,11.1l0,0v27.4c0,1.9-1.6,3.5-3.5,3.5H28.5\n\t\t\tc-1.9,0-3.5-1.6-3.5-3.5v-27.3c0.2-6.2-4.7-11.3-10.8-11.5s-11.3,4.7-11.5,10.8c0,0.2,0,0.4,0,0.7v27.4\n\t\t\tc0,14.2,11.6,25.7,25.8,25.8h198.8c14.2,0,25.8-11.6,25.8-25.8v-27.4C253.1,159.9,248.1,154.9,242.1,154.9L242.1,154.9",
          })
        )
      )
    );
  },
  lr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { "data-name": "Object Browser", clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Uni\\xF3n 19",
          d: "M36.252 256a17.257 17.257 0 0 1-17.25-17.235V18.076A17.261 17.261 0 0 1 36.252.836h42.193c2.83 0 5.654 0 8.461-.015 23.494-.092 47-.514 70.48-.412 4.9.02 9.809-.1 14.711-.208 6.822-.155 13.645-.311 20.467-.107 6.662.194 13.539.315 20.1 1.793a44.27 44.27 0 0 1 5.01 1.444c11.648 4.182 16.736 14.163 17.836 25.918 1.453 15.7.877 32.2.5 47.945-.412 17.158.014 34.432.014 51.618v109.952a17.244 17.244 0 0 1-17.234 17.235Zm.7-222.336v189.523a14.876 14.876 0 0 0 14.875 14.89H200.2a14.9 14.9 0 0 0 14.885-14.89V81.992h-25.957a37.8 37.8 0 0 1-37.754-37.761V18.769H51.823a14.877 14.877 0 0 0-14.874 14.895Zm130.881 10.567a21.33 21.33 0 0 0 21.3 21.3h25.957V33.663a14.9 14.9 0 0 0-14.885-14.9h-32.371ZM65.4 218.152a6.644 6.644 0 0 1-5.756-9.967l24.891-43.139a6.658 6.658 0 0 1 11.527 0l24.906 43.139a6.652 6.652 0 0 1-5.758 9.967Zm65.869-50.693a31.523 31.523 0 0 1 24.992-36.917 31.529 31.529 0 0 1 36.918 24.993 31.53 31.53 0 0 1-24.992 36.917 31.742 31.742 0 0 1-5.994.574 31.536 31.536 0 0 1-30.927-25.567Zm-70.568-40.454a1.894 1.894 0 0 1-1.895-1.895V71.815a1.894 1.894 0 0 1 1.895-1.895h63.533a1.894 1.894 0 0 1 1.895 1.895v53.295a1.894 1.894 0 0 1-1.895 1.895Z",
          stroke: "rgba(0,0,0,0)",
          strokeMiterlimit: 10,
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 882",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  rr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 255.999",
        },
        a
      ),
      e.createElement("path", {
        id: "recover-icn",
        d: "M17866.783-5487a16.655,16.655,0,0,1-4.354-.6l-57.238-15.5a14.778,14.778,0,0,1-10.492-18.271l15.535-57.135c5.1-18.748,33.652-11.014,28.557,7.734l-5.8,21.333-1.033,3.5c.176-.094.342-.2.525-.288a84.861,84.861,0,0,0,39.223-113.4,85.2,85.2,0,0,0-62.492-46.565,12.846,12.846,0,0,1-10.568-14.789,12.864,12.864,0,0,1,14.811-10.552,110.978,110.978,0,0,1,81.389,60.667,109.742,109.742,0,0,1,11.158,47.846v.683a110.648,110.648,0,0,1-62.258,99.21c-.059.032-.121.049-.18.077l9.572,2.328,17.045,4.615c17.252,4.673,12.115,29.111-3.393,29.111Zm-122.105-11.284a13.242,13.242,0,0,1-2.135-.175,110.98,110.98,0,0,1-81.387-60.667,109.694,109.694,0,0,1-11.154-48.088v-.229a110.629,110.629,0,0,1,62.252-99.421c.064-.032.123-.05.186-.081l-9.576-2.323-17.041-4.615c-17.234-4.669-12.129-29.053,3.334-29.115h.131a16.69,16.69,0,0,1,4.283.606l57.242,15.5a14.775,14.775,0,0,1,10.488,18.272l-15.531,57.134c-5.1,18.749-33.658,11.015-28.562-7.734l5.8-21.336,1.039-3.5c-.176.094-.346.2-.531.288a84.855,84.855,0,0,0-39.217,113.4,85.188,85.188,0,0,0,62.486,46.569,12.845,12.845,0,0,1,10.57,14.785,12.866,12.866,0,0,1-12.674,10.731ZM17757-5615a21,21,0,0,1,21-21,21,21,0,0,1,21,21,21,21,0,0,1-21,21A21,21,0,0,1,17757-5615Z",
        transform: "translate(-17650.002 5743.001)",
      })
    );
  },
  cr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Trazado 444",
          d: "M235.958 77.227C235.538 39.16 246.367-2.76 192.526.143 154.511.233 116.47.8 78.437.886h-42.2A17.258 17.258 0 0 0 19 18.127v220.64a17.258 17.258 0 0 0 17.239 17.237h182.507a17.258 17.258 0 0 0 17.238-17.237c.185-53.84-.297-107.719-.026-161.54ZM215.04 223.188a14.885 14.885 0 0 1-14.885 14.885H51.813a14.885 14.885 0 0 1-14.885-14.885V33.7a14.885 14.885 0 0 1 14.885-14.885h99.53c-1.936 29.6.791 61.322 37.752 63.206h25.946Zm0-157.627c-17.937-.276-46.31 4.9-47.237-21.294V18.814c50.266-.527 47.99-3.935 47.237 46.748Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 445",
          d: "M176.796 143.181h-38.679v-38.679a14.6 14.6 0 0 0-14.583-14.583 67.335 67.335 0 0 0-47.88 19.965c-.024.025-.05.049-.074.076-14.337 14.727-21.3 32.279-20.122 50.76 1.034 16.3 8.392 32.066 20.717 44.393s28.09 19.689 44.391 20.728q2.015.128 4.01.128c17.006 0 33.1-6.949 46.761-20.245.027-.025.052-.051.077-.077a67.334 67.334 0 0 0 19.965-47.881 14.6 14.6 0 0 0-14.583-14.584Zm-16.552 51.22c-25.22 24.5-55.446 16.923-72.862-.5s-24.991-47.642-.484-72.852a51.594 51.594 0 0 1 35.368-15.27v45.323a7.924 7.924 0 0 0 7.926 7.925h45.321a51.61 51.61 0 0 1-15.269 35.374Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 446",
          d: "M155.325 89.758a11.919 11.919 0 0 0-9.153 8.878 7.863 7.863 0 0 0-.234 2.081c.124 6-.008 10.657-.115 14.4-.229 8.036-.38 13.344 3.644 17.37 3.151 3.152 6.925 3.753 12.42 3.753 1.532 0 3.2-.047 5.02-.1 3.731-.106 8.373-.237 14.344-.116a8.047 8.047 0 0 0 2.08-.233 11.921 11.921 0 0 0 8.874-9.17c2.028-9.1-5.3-22.075-10.235-26.638-4.575-4.933-17.569-12.261-26.645-10.225Zm11.138 30.541c-1.668.045-3.5.076-4.892.1 0-1.416.049-3.18.1-4.827.073-2.561.165-5.778.17-9.627 3.109 1.117 7.123 3.316 8.387 4.679a7.184 7.184 0 0 0 1.073 1.079c1.4 1.3 3.612 5.322 4.728 8.433-3.823 0-7.018.086-9.564.163Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 907",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  mr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          { "data-name": "settings-icn" },
          e.createElement("path", {
            "data-name": "Trazado 341",
            d: "m247.385 99.227-26.7-3.841a92.362 92.362 0 0 0-4.166-9.853l16.176-21.584a9.834 9.834 0 0 0-.9-12.9l-26.889-27.1a9.825 9.825 0 0 0-12.893-.887l-21.6 16.254a89.085 89.085 0 0 0-9.857-4.134l-3.83-26.7a9.856 9.856 0 0 0-9.852-8.476H108.73a9.843 9.843 0 0 0-9.844 8.476l-3.836 26.7a89.115 89.115 0 0 0-9.859 4.134L63.53 23.06a9.881 9.881 0 0 0-12.936.887l-26.881 26.9a9.832 9.832 0 0 0-.9 12.9l16.27 21.584a87.181 87.181 0 0 0-4.166 9.851l-26.68 3.843a9.85 9.85 0 0 0-8.482 9.854v38.036a9.851 9.851 0 0 0 8.482 9.854l26.68 3.84a85.76 85.76 0 0 0 4.166 9.855l-16.27 21.777a9.848 9.848 0 0 0 .9 12.914l26.881 26.9a9.891 9.891 0 0 0 12.936.879l21.561-16.256a85.986 85.986 0 0 0 9.859 4.136l3.844 26.705a9.843 9.843 0 0 0 9.857 8.475h38.031a9.867 9.867 0 0 0 9.859-8.475l3.842-26.705a90.284 90.284 0 0 0 9.859-4.136l21.568 16.157a9.852 9.852 0 0 0 12.906-.878l26.9-26.9a9.856 9.856 0 0 0 .889-12.915l-16.061-21.485a89.562 89.562 0 0 0 4.131-9.853l26.709-3.842a9.867 9.867 0 0 0 8.475-9.853v-38.133a9.868 9.868 0 0 0-8.374-9.749Zm-11.236 39.413-24.443 3.549a9.888 9.888 0 0 0-8.088 7.1 82.022 82.022 0 0 1-6.875 17.436 9.813 9.813 0 0 0 0 10.549l14.764 19.707-14.764 15.072-19.719-15.072a9.863 9.863 0 0 0-10.461 0 75.566 75.566 0 0 1-17.711 7.291 9.814 9.814 0 0 0-7.105 8.085l-3.549 24.034h-20.895l-3.549-24.436a9.8 9.8 0 0 0-7.092-8.073 76.134 76.134 0 0 1-17.738-7.294 9.831 9.831 0 0 0-10.439.393l-19.711 14.777-15.072-14.777 15.072-19.707a9.844 9.844 0 0 0 0-10.549 82.861 82.861 0 0 1-7.3-17.634 9.841 9.841 0 0 0-8.074-7.095l-24.035-3.55v-20.889l24.443-3.55a9.85 9.85 0 0 0 8.074-7.1 82.89 82.89 0 0 1 6.891-17.635 9.84 9.84 0 0 0 0-10.546l-15.072-19.71 15.072-15.071 19.711 15.071a9.816 9.816 0 0 0 10.439 0 76.209 76.209 0 0 1 17.738-7.291 9.806 9.806 0 0 0 7.092-8.074l3.549-24.044h20.895l3.549 24.435a9.839 9.839 0 0 0 7.105 8.084 75.193 75.193 0 0 1 17.711 7.291 9.866 9.866 0 0 0 10.461-.4l19.719-14.778 15.057 14.778-15.057 19.71a9.822 9.822 0 0 0-.7 10.839 82.237 82.237 0 0 1 7.3 17.644 9.84 9.84 0 0 0 8.074 7.088l24.443 3.547Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 342",
            d: "M127.742 78.73a49.269 49.269 0 0 0-49.258 49.275 49.266 49.266 0 0 0 49.258 49.267 49.271 49.271 0 0 0 49.281-49.267 49.274 49.274 0 0 0-49.281-49.275Zm0 78.836a29.553 29.553 0 0 1-29.547-29.561 29.56 29.56 0 0 1 29.547-29.57 29.555 29.555 0 0 1 29.564 29.57 29.548 29.548 0 0 1-29.564 29.561Z",
          })
        ),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 888",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  or = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 870",
          fill: "none",
          d: "M0 0h256v256H0z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 454",
          d: "M16.412 256A16.487 16.487 0 0 1-.002 239.463V104.082c0-21.752 32.824-21.752 32.824 0v118.829h190.355V104.082c0-21.752 32.822-21.752 32.822 0v135.381a16.477 16.477 0 0 1-16.4 16.537Zm95.176-61.308V56.465L93 75.208c-15.262 15.385-38.471-8-23.205-23.393l46.5-46.878a16.345 16.345 0 0 1 23.408 0l46.51 46.878c15.266 15.39-7.949 38.777-23.211 23.393L144.41 56.464v138.227c0 10.872-8.205 16.307-16.41 16.307s-16.412-5.435-16.412-16.307Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 454 - Contorno",
          d: "M239.6 256.5H16.416A17 17 0 0 1-.498 239.463V104.082a16.259 16.259 0 0 1 5.3-12.61 16.393 16.393 0 0 1 5.422-3.156 18.547 18.547 0 0 1 6.193-1.048 18.547 18.547 0 0 1 6.193 1.048 16.393 16.393 0 0 1 5.422 3.156 16.259 16.259 0 0 1 5.3 12.61v118.329h189.355V104.082a16.259 16.259 0 0 1 5.3-12.61 16.374 16.374 0 0 1 5.422-3.156 18.528 18.528 0 0 1 6.191-1.048 18.531 18.531 0 0 1 6.193 1.048 16.374 16.374 0 0 1 5.422 3.156 16.259 16.259 0 0 1 5.3 12.61v135.381a17.034 17.034 0 0 1-1.328 6.625 16.992 16.992 0 0 1-3.621 5.416 16.846 16.846 0 0 1-5.373 3.655 16.663 16.663 0 0 1-6.593 1.341ZM16.414 88.268a17.535 17.535 0 0 0-5.859.991 15.388 15.388 0 0 0-5.094 2.962 15.286 15.286 0 0 0-4.959 11.861v135.381A15.994 15.994 0 0 0 16.416 255.5H239.6a15.989 15.989 0 0 0 15.9-16.037V104.082a15.286 15.286 0 0 0-4.959-11.861 15.368 15.368 0 0 0-5.094-2.962 17.518 17.518 0 0 0-5.859-.991 17.515 17.515 0 0 0-5.857.991 15.368 15.368 0 0 0-5.094 2.962 15.286 15.286 0 0 0-4.959 11.861v119.329H32.323V104.082a15.286 15.286 0 0 0-4.959-11.861 15.388 15.388 0 0 0-5.094-2.962 17.526 17.526 0 0 0-5.86-.992ZM128 211.5a18.547 18.547 0 0 1-6.193-1.048 16.37 16.37 0 0 1-5.422-3.154 16.248 16.248 0 0 1-5.3-12.6V57.685L93.349 75.567a16.238 16.238 0 0 1-11.6 5.179 16.682 16.682 0 0 1-9.711-3.251 19.071 19.071 0 0 1-6.451-8.051 15.968 15.968 0 0 1-1.051-8.961 17 17 0 0 1 4.9-9.013l46.5-46.878a16.869 16.869 0 0 1 12.006-5.084 16.81 16.81 0 0 1 6.482 1.3 17.213 17.213 0 0 1 5.631 3.786l46.51 46.879a16.976 16.976 0 0 1 4.9 9.01 15.975 15.975 0 0 1-1.049 8.958 19.084 19.084 0 0 1-6.453 8.054 16.694 16.694 0 0 1-9.715 3.254 16.237 16.237 0 0 1-11.6-5.179l-17.736-17.882v137.013a16.249 16.249 0 0 1-5.3 12.6 16.351 16.351 0 0 1-5.422 3.154A18.527 18.527 0 0 1 128 211.5ZM112.088 55.252v139.441a15.275 15.275 0 0 0 4.959 11.855 15.365 15.365 0 0 0 5.094 2.961 17.538 17.538 0 0 0 5.859.991 17.547 17.547 0 0 0 5.859-.991 15.375 15.375 0 0 0 5.092-2.961 15.276 15.276 0 0 0 4.959-11.855V55.25l.855.862 18.592 18.744a15.257 15.257 0 0 0 10.891 4.883 15.7 15.7 0 0 0 9.133-3.067 18.064 18.064 0 0 0 6.111-7.625 14.955 14.955 0 0 0 .988-8.4 16 16 0 0 0-4.625-8.482l-46.51-46.878a16.222 16.222 0 0 0-5.3-3.567 15.825 15.825 0 0 0-6.1-1.222 15.868 15.868 0 0 0-11.295 4.789l-46.5 46.878a16.011 16.011 0 0 0-4.627 8.485 15 15 0 0 0 .988 8.4 18.055 18.055 0 0 0 6.111 7.623 15.688 15.688 0 0 0 9.129 3.064 15.259 15.259 0 0 0 10.893-4.883Z",
          fill: "rgba(0,0,0,0)",
        })
      )
    );
  },
  ir = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Trazado 438",
          d: "M126.658 93.01c-30.337 0-62.989 7.141-62.989 22.82v79.924c0 15.678 32.651 22.82 62.989 22.82s62.989-7.142 62.989-22.82V115.83c-.001-15.679-32.652-22.82-62.989-22.82Zm49.139 102.743c-.12 2.517-15.67 10.8-49.139 10.8-33.187 0-48.925-8.288-49.14-10.8v-25.689c11.441 4.913 29.524 7.81 49.14 7.81 19.684 0 37.763-2.908 49.139-7.843Zm0-40.7c-.223 2.52-15.96 10.8-49.139 10.8s-48.925-8.29-49.14-10.8v-24.252c11.42 4.937 29.5 7.846 49.14 7.846 19.684 0 37.763-2.907 49.139-7.842Zm-49.139-28.42c-33.187 0-48.925-8.289-49.14-10.8.214-2.518 15.952-10.807 49.14-10.807s48.925 8.289 49.139 10.8c-.214 2.515-15.952 10.8-49.139 10.8Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 439",
          d: "M89.357 178.684a9.167 9.167 0 0 0-9.158 9.156 9.167 9.167 0 0 0 9.158 9.158 9.166 9.166 0 0 0 9.158-9.158 9.167 9.167 0 0 0-9.158-9.156Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 440",
          d: "M89.357 140.292a9.167 9.167 0 0 0-9.158 9.157 9.167 9.167 0 0 0 9.158 9.158 9.167 9.167 0 0 0 9.158-9.158 9.168 9.168 0 0 0-9.158-9.157Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 441",
          d: "M235.992 77.197c.387-15.753.958-32.242-.5-47.941-1.093-11.755-6.192-21.736-17.831-25.914a42.8 42.8 0 0 0-5.016-1.448c-6.549-1.478-13.432-1.6-20.09-1.8-11.727-.344-23.448.366-35.176.314-23.494-.1-46.986.323-70.478.414q-4.229.018-8.457.017H36.239a17.26 17.26 0 0 0-17.24 17.24V238.76a17.26 17.26 0 0 0 17.24 17.241h182.539a17.261 17.261 0 0 0 17.241-17.241V128.814c-.002-17.183-.449-34.454-.027-51.617ZM215.07 223.184a14.888 14.888 0 0 1-14.888 14.888H51.814a14.888 14.888 0 0 1-14.889-14.889V33.66a14.888 14.888 0 0 1 14.889-14.888h99.548V44.23a37.8 37.8 0 0 0 37.756 37.758h25.952Zm0-157.656h-25.952a21.32 21.32 0 0 1-21.295-21.3V18.77h32.359a14.888 14.888 0 0 1 14.888 14.888Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 901",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  hr = function (e) {
    return a.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 47.137 36.516",
        },
        e
      ),
      a.createElement(
        "g",
        { id: "azure-logo-color", transform: "translate(-437.603 -471.382)" },
        a.createElement(
          "g",
          { id: "layer1-1", transform: "translate(437.603 471.382)" },
          a.createElement("path", {
            id: "path21",
            d: "M459.411,505.944c6.055-1.07,11.056-1.953,11.115-1.965l.1-.024-5.717-6.8c-3.143-3.74-5.717-6.815-5.717-6.831,0-.032,5.9-16.291,5.936-16.347.012-.019,4.03,6.919,9.738,16.812,5.347,9.266,9.755,16.9,9.8,16.975l.075.132-18.168,0-18.169,0S459.411,505.944,459.411,505.944ZM437.6,503.868c0-.008,2.693-4.686,5.987-10.391l5.987-10.375,6.978-5.856c3.839-3.219,6.986-5.86,7-5.864a1.448,1.448,0,0,1-.112.282c-.075.159-3.485,7.471-7.574,16.247l-7.44,15.957-5.41.008C440.037,503.884,437.6,503.88,437.6,503.868Z",
            transform: "translate(-437.603 -471.382)",
            fill: "#2a94dc",
          })
        )
      )
    );
  },
  dr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Trazado 426",
          d: "M235.995 77.197c.388-15.753.958-32.242-.5-47.941-1.094-11.756-6.193-21.735-17.831-25.914a42.4 42.4 0 0 0-5.017-1.448c-6.549-1.478-13.432-1.6-20.09-1.8-11.726-.343-23.448.366-35.175.314-23.493-.1-46.985.323-70.479.414q-4.228.018-8.455.017H36.241A17.26 17.26 0 0 0 19 18.08v220.679A17.261 17.261 0 0 0 36.241 256h182.542a17.26 17.26 0 0 0 17.24-17.241V128.815c.001-17.183-.45-34.459-.028-51.618Zm-20.922 145.988a14.888 14.888 0 0 1-14.888 14.888H51.816a14.888 14.888 0 0 1-14.892-14.884V33.661a14.888 14.888 0 0 1 14.888-14.888h99.548v25.459a37.8 37.8 0 0 0 37.764 37.757h25.951Zm0-157.656h-25.949a21.321 21.321 0 0 1-21.3-21.3V18.77h32.359a14.888 14.888 0 0 1 14.888 14.888Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 427",
          d: "M130.985 69.292h-69.1a8.455 8.455 0 0 1-8.455-8.455 8.455 8.455 0 0 1 8.455-8.455h69.1a8.455 8.455 0 0 1 8.455 8.455 8.455 8.455 0 0 1-8.455 8.455Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 428",
          d: "M130.985 102.607h-69.1a8.455 8.455 0 0 1-8.455-8.455 8.455 8.455 0 0 1 8.455-8.455h69.1a8.455 8.455 0 0 1 8.455 8.455 8.455 8.455 0 0 1-8.455 8.455Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 429",
          d: "M183.891 136.458H61.876a8.455 8.455 0 0 1-8.455-8.455 8.455 8.455 0 0 1 8.455-8.455h122.011a8.455 8.455 0 0 1 8.455 8.455 8.456 8.456 0 0 1-8.451 8.455Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 430",
          d: "M183.891 170.309H61.876a8.455 8.455 0 0 1-8.455-8.455 8.455 8.455 0 0 1 8.455-8.455h122.011a8.455 8.455 0 0 1 8.455 8.455 8.456 8.456 0 0 1-8.451 8.455Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 431",
          d: "M183.891 204.164H61.876a8.455 8.455 0 0 1-8.455-8.455 8.455 8.455 0 0 1 8.455-8.455h122.011a8.455 8.455 0 0 1 8.455 8.455 8.456 8.456 0 0 1-8.451 8.455Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 908",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  sr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          { "data-name": "Calendar-icn" },
          e.createElement("path", {
            "data-name": "Trazado 412",
            d: "M65.175 146.527h24.651c3.4 0 6.162-3.188 6.162-7.115s-2.762-7.115-6.162-7.115H65.175c-3.4 0-6.164 3.188-6.164 7.115s2.758 7.115 6.164 7.115Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 413",
            d: "M118.028 146.527h24.651c3.4 0 6.162-3.188 6.162-7.115s-2.76-7.115-6.162-7.115h-24.651c-3.4 0-6.162 3.188-6.162 7.115s2.762 7.115 6.162 7.115Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 414",
            d: "M166.344 146.527h24.651c3.4 0 6.162-3.188 6.162-7.115s-2.762-7.115-6.162-7.115h-24.651c-3.4 0-6.165 3.188-6.165 7.115s2.762 7.115 6.165 7.115Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 415",
            d: "M65.175 178.762h24.651c3.4 0 6.162-3.188 6.162-7.115s-2.762-7.115-6.162-7.115H65.175c-3.4 0-6.164 3.188-6.164 7.115s2.758 7.115 6.164 7.115Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 416",
            d: "M118.028 178.762h24.651c3.4 0 6.162-3.188 6.162-7.115s-2.76-7.115-6.162-7.115h-24.651c-3.4 0-6.162 3.188-6.162 7.115s2.762 7.115 6.162 7.115Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 417",
            d: "M166.344 178.762h24.651c3.4 0 6.162-3.188 6.162-7.115s-2.762-7.115-6.162-7.115h-24.651c-3.4 0-6.165 3.188-6.165 7.115s2.762 7.115 6.165 7.115Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 418",
            d: "M65.175 210.997h24.651c3.4 0 6.162-3.187 6.162-7.115s-2.762-7.115-6.162-7.115H65.175c-3.4 0-6.164 3.188-6.164 7.115s2.758 7.115 6.164 7.115Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 419",
            d: "M118.028 210.997h24.651c3.4 0 6.162-3.187 6.162-7.115s-2.76-7.115-6.162-7.115h-24.651c-3.4 0-6.162 3.188-6.162 7.115s2.762 7.115 6.162 7.115Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 420",
            d: "M166.344 210.997h24.651c3.4 0 6.162-3.187 6.162-7.115s-2.762-7.115-6.162-7.115h-24.651c-3.4 0-6.165 3.188-6.165 7.115s2.762 7.115 6.165 7.115Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 421",
            d: "M215.81 30.376h-15.951V10.455a10.661 10.661 0 0 0-10.6-10.661 10.66 10.66 0 0 0-10.595 10.661v19.921h-40.089V10.455a10.661 10.661 0 0 0-10.6-10.661 10.66 10.66 0 0 0-10.595 10.661v19.921H77.291V10.455a10.661 10.661 0 0 0-10.6-10.661 10.66 10.66 0 0 0-10.595 10.661v19.921h-15.08a23.369 23.369 0 0 0-23.295 23.44v178.332a23.367 23.367 0 0 0 23.295 23.44h174.782a23.367 23.367 0 0 0 23.295-23.44V53.816a23.367 23.367 0 0 0-23.283-23.44Zm-3.051 198.641a.062.062 0 0 1-.062.062H44.14a.062.062 0 0 1-.064-.062V114.344h168.683Z",
          })
        ),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 862",
          fill: "none",
          d: "M0 0h256v255.794H0z",
        })
      )
    );
  },
  pr = function (e) {
    return a.createElement(
      "svg",
      T({}, e, {
        className: "min-icon",
        fill: "currentcolor",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 10 9.5",
      }),
      a.createElement(
        "g",
        { transform: "translate(231 719.516)" },
        a.createElement("path", {
          d: "M-125.5,7.984a4.5,4.5,0,0,1,4.5-4.5,4.5,4.5,0,0,1,4.5,4.5Z",
          transform: "translate(-105 -720)",
        }),
        a.createElement("rect", {
          width: "10",
          height: "1",
          transform: "translate(-231 -711.016)",
        }),
        a.createElement("path", {
          d: "M-119.5.484h-3v1h1v1h1v-1h1Z",
          transform: "translate(-105 -720)",
        })
      )
    );
  },
  vr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          { "data-name": "logs-icn" },
          e.createElement("path", {
            "data-name": "Uni\\xF3n 20",
            d: "M17.298 255.999a17.314 17.314 0 0 1-17.3-17.291V17.302a17.322 17.322 0 0 1 17.3-17.3h221.4a17.325 17.325 0 0 1 17.3 17.3v221.406a17.316 17.316 0 0 1-17.3 17.291Zm.7-32.922a14.938 14.938 0 0 0 14.934 14.937H223.07A14.935 14.935 0 0 0 238 223.077v-133.4H18Zm45.949-69.443a6.943 6.943 0 0 1-6.814-7.061v-16.314a6.937 6.937 0 0 1 6.814-7.054h62.056a6.924 6.924 0 0 1 6.795 7.054v16.318a6.929 6.929 0 0 1-6.795 7.061Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 343 - Contorno",
            d: "M17.3-.1h221.4a17.421 17.421 0 0 1 17.4 17.4v221.409a17.416 17.416 0 0 1-17.4 17.391H17.3A17.416 17.416 0 0 1-.1 238.709V17.301A17.421 17.421 0 0 1 17.3-.1Zm221.4 256a17.216 17.216 0 0 0 17.2-17.191V17.301a17.221 17.221 0 0 0-17.2-17.2H17.3a17.221 17.221 0 0 0-17.2 17.2v221.408A17.216 17.216 0 0 0 17.3 255.9ZM17.9 89.576h220.2v133.5a14.945 14.945 0 0 1-4.4 10.634 14.93 14.93 0 0 1-10.627 4.405H32.931a14.93 14.93 0 0 1-10.627-4.405 14.942 14.942 0 0 1-4.4-10.634Zm220 .2H18.1v133.3a14.745 14.745 0 0 0 4.346 10.493 14.73 14.73 0 0 0 10.486 4.347h190.139a14.73 14.73 0 0 0 10.486-4.347 14.745 14.745 0 0 0 4.346-10.493Z",
          }),
          e.createElement("path", {
            "data-name": "Trazado 344 - Contorno",
            d: "M63.948 123.102h62.057a6.726 6.726 0 0 1 4.878 2.1 7.247 7.247 0 0 1 2.015 5.058v16.318a7.038 7.038 0 0 1-6.893 7.16H63.948a7.049 7.049 0 0 1-6.915-7.16V130.26a7.045 7.045 0 0 1 6.915-7.158Zm62.057 30.431a6.838 6.838 0 0 0 6.693-6.96v-16.318a7.047 7.047 0 0 0-1.959-4.919 6.526 6.526 0 0 0-4.733-2.034H63.949a6.845 6.845 0 0 0-6.714 6.953v16.318a6.848 6.848 0 0 0 6.714 6.96Z",
          })
        ),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 889",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  fr = function (e) {
    return a.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 36.369 36.346",
        },
        e
      ),
      a.createElement(
        "g",
        { id: "hardquota-icn", transform: "translate(-98.002 -28.027)" },
        a.createElement("path", {
          id: "Trazado_7233",
          "data-name": "Trazado 7233",
          d: "M344.76,203.93l2.664-2.664,8.15,8.15-2.664,2.664Z",
          transform: "translate(-228.962 -160.744)",
        }),
        a.createElement("path", {
          id: "Trazado_7234",
          "data-name": "Trazado 7234",
          d: "M464.768,316.895a1.11,1.11,0,0,0-1.575,0l-2.827,2.827h0a1.111,1.111,0,0,0,0,1.575l5.182,5.182a1.114,1.114,0,0,0,.787.327,1.1,1.1,0,0,0,.808-.327l2.827-2.827a1.11,1.11,0,0,0,0-1.575Z",
          transform: "translate(-335.926 -267.73)",
        }),
        a.createElement("path", {
          id: "Trazado_7235",
          "data-name": "Trazado 7235",
          d: "M235.486,84.317l-5.408-5.408a2.141,2.141,0,0,1-.157-.174L222.2,86.45c.061.052.121.105.178.161l5.4,5.4c.057.057.109.117.161.178l7.718-7.718a2.2,2.2,0,0,1-.178-.157Z",
          transform: "translate(-115.243 -47.051)",
        }),
        a.createElement("path", {
          id: "Trazado_7236",
          "data-name": "Trazado 7236",
          d: "M337.566,36.693a1.912,1.912,0,0,0,2.706-2.7l-5.408-5.4a1.91,1.91,0,1,0-2.7,2.7Z",
          transform: "translate(-216.754)",
        }),
        a.createElement("path", {
          id: "Trazado_7237",
          "data-name": "Trazado 7237",
          d: "M174.741,188.807a1.912,1.912,0,1,0-2.7,2.706l5.408,5.392a1.911,1.911,0,1,0,2.7-2.7Z",
          transform: "translate(-68.177 -148.665)",
        }),
        a.createElement("path", {
          id: "Trazado_7238",
          "data-name": "Trazado 7238",
          d: "M143.562,432.083a3.239,3.239,0,0,1,.525.048v-.565a2.383,2.383,0,0,0-2.379-2.383h-15.63a2.383,2.383,0,0,0-2.379,2.383v.565a3.245,3.245,0,0,1,.525-.048Z",
          transform: "translate(-23.844 -372.224)",
        }),
        a.createElement("path", {
          id: "Trazado_7239",
          "data-name": "Trazado 7239",
          d: "M122.1,482.968a2.379,2.379,0,0,0-2.379-2.379H100.381A2.379,2.379,0,0,0,98,482.968V484.3h24.1Z",
          transform: "translate(0 -419.924)",
        })
      )
    );
  },
  Er = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Uni\\xF3n 20",
          d: "M17.4 256.099A17.314 17.314 0 0 1 .1 238.808V17.402A17.322 17.322 0 0 1 17.4.102h221.4a17.325 17.325 0 0 1 17.3 17.3v221.406a17.316 17.316 0 0 1-17.3 17.291Zm.7-32.922a14.938 14.938 0 0 0 14.934 14.937h190.138a14.935 14.935 0 0 0 14.93-14.937v-133.4h-220Zm45.949-69.443a6.943 6.943 0 0 1-6.814-7.061v-16.314a6.937 6.937 0 0 1 6.814-7.054h62.056a6.924 6.924 0 0 1 6.795 7.054v16.318a6.929 6.929 0 0 1-6.795 7.061Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 343 - Contorno",
          d: "M17.402 0h221.4a17.421 17.421 0 0 1 17.4 17.4v221.409a17.416 17.416 0 0 1-17.4 17.391h-221.4a17.416 17.416 0 0 1-17.4-17.391V17.401A17.421 17.421 0 0 1 17.402 0Zm221.4 256a17.216 17.216 0 0 0 17.2-17.191V17.401a17.221 17.221 0 0 0-17.2-17.2h-221.4a17.221 17.221 0 0 0-17.2 17.2v221.408A17.216 17.216 0 0 0 17.402 256ZM18.002 89.676h220.2v133.5a14.945 14.945 0 0 1-4.4 10.634 14.93 14.93 0 0 1-10.627 4.405H33.033a14.93 14.93 0 0 1-10.627-4.405 14.942 14.942 0 0 1-4.4-10.634Zm220 .2h-219.8v133.3a14.745 14.745 0 0 0 4.346 10.493 14.73 14.73 0 0 0 10.486 4.347h190.139a14.73 14.73 0 0 0 10.486-4.347 14.745 14.745 0 0 0 4.346-10.493Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 344 - Contorno",
          d: "M64.05 123.202h62.057a6.726 6.726 0 0 1 4.878 2.1A7.247 7.247 0 0 1 133 130.36v16.318a7.038 7.038 0 0 1-6.893 7.16H64.05a7.049 7.049 0 0 1-6.915-7.16V130.36a7.045 7.045 0 0 1 6.915-7.158Zm62.057 30.431a6.838 6.838 0 0 0 6.693-6.96v-16.318a7.047 7.047 0 0 0-1.959-4.919 6.526 6.526 0 0 0-4.733-2.034H64.051a6.845 6.845 0 0 0-6.714 6.953v16.318a6.848 6.848 0 0 0 6.714 6.96Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 889",
          fill: "none",
          d: "M.102.1h256v256h-256z",
        })
      )
    );
  },
  ur = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Trazado 424",
          d: "M235.995 77.199c.387-15.754.958-32.242-.5-47.942-1.092-11.755-6.192-21.735-17.832-25.915a42.444 42.444 0 0 0-5.016-1.447c-6.549-1.479-13.432-1.6-20.09-1.8-11.726-.344-23.449.364-35.176.314-23.494-.1-46.985.322-70.479.414q-4.229.016-8.456.017H36.24A17.26 17.26 0 0 0 19 18.08v220.68A17.26 17.26 0 0 0 36.24 256h182.538a17.26 17.26 0 0 0 17.241-17.24V128.818c0-17.184-.441-34.459-.024-51.619Zm-20.922 145.987a14.889 14.889 0 0 1-14.886 14.887H51.816a14.89 14.89 0 0 1-14.889-14.888V33.664a14.888 14.888 0 0 1 14.888-14.888h99.547v25.458a37.8 37.8 0 0 0 37.757 37.76h25.952Zm0-157.657h-25.952a21.32 21.32 0 0 1-21.295-21.3V18.771h32.359a14.888 14.888 0 0 1 14.888 14.888Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 425",
          d: "m171.914 125.006-61.323-35.407a17.725 17.725 0 0 0-17.9 0 17.717 17.717 0 0 0-8.953 15.5v70.811a17.718 17.718 0 0 0 8.951 15.5 17.865 17.865 0 0 0 8.952 2.427 17.872 17.872 0 0 0 8.952-2.427l61.323-35.4a17.723 17.723 0 0 0 8.952-15.5 17.72 17.72 0 0 0-8.954-15.504Zm-8.455 16.362-61.323 35.4a.914.914 0 0 1-.992 0 .911.911 0 0 1-.5-.86v-70.811a.909.909 0 0 1 .5-.858 1 1 0 0 1 .5-.147.959.959 0 0 1 .489.146l61.323 35.407a.909.909 0 0 1 .5.858.91.91 0 0 1-.5.865Z",
        }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 909",
          fill: "none",
          d: "M0 0h256v256H0z",
        })
      )
    );
  },
  gr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path" },
          e.createElement("rect", {
            id: "Rectángulo_1033",
            "data-name": "Rectángulo 1033",
            width: "234.584",
            height: "256",
            fill: "#4ccb92",
          })
        ),
        e.createElement(
          "clipPath",
          { id: "clip-Change_User_Password" },
          e.createElement("rect", { width: "256", height: "256" })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Change_User_Password",
          "data-name": "Change User Password",
          clipPath: "url(#clip-Change_User_Password)",
        },
        e.createElement("rect", { width: "256", height: "256", fill: "#fff" }),
        e.createElement(
          "g",
          {
            id: "Change_User_Password_Icon",
            "data-name": "Change User Password Icon",
          },
          e.createElement(
            "g",
            {
              id: "Grupo_2422",
              "data-name": "Grupo 2422",
              transform: "translate(11)",
            },
            e.createElement(
              "g",
              { id: "Grupo_2421", "data-name": "Grupo 2421" },
              e.createElement("path", {
                id: "Trazado_7174",
                "data-name": "Trazado 7174",
                d: "M89.039,144.5h.048a66.549,66.549,0,0,0,26.922-5.683,68.721,68.721,0,0,0,22.01-15.464,71.754,71.754,0,0,0,14.829-22.881,73.555,73.555,0,0,0,5.44-27.984C158.291,32.8,127.233.5,89.04.5h0C50.868.5,19.816,32.794,19.816,72.49S50.868,144.5,89.039,144.5",
                transform: "translate(1.369 0.035)",
                fill: "#4ccb92",
              }),
              e.createElement("path", {
                id: "Trazado_7175",
                "data-name": "Trazado 7175",
                d: "M89.039,144.5h.048a66.549,66.549,0,0,0,26.922-5.683,68.721,68.721,0,0,0,22.01-15.464,71.754,71.754,0,0,0,14.829-22.881,73.555,73.555,0,0,0,5.44-27.984C158.291,32.8,127.233.5,89.04.5h0C50.868.5,19.816,32.794,19.816,72.49S50.868,144.5,89.039,144.5Z",
                transform: "translate(1.369 0.035)",
                fill: "#4ccb92",
              }),
              e.createElement("path", {
                id: "Trazado_7176",
                "data-name": "Trazado 7176",
                d: "M169.875,117.967A64.121,64.121,0,0,0,112.7,153.043c-1.421-.4-2.848-.78-4.286-1.119a94.31,94.31,0,0,0-21.382-2.511v.005c-1.748,0-3.424.045-4.982.135A99.34,99.34,0,0,0,8.563,189.619c-.386.516-.763,1.056-1.228,1.749l-.107.15c-.1.141-.213.3-.311.456L6.89,192a37.722,37.722,0,0,0-2.66,37.365,31.837,31.837,0,0,0,28.644,17.951H141.951a31.362,31.362,0,0,0,13.027-2.828,64.139,64.139,0,1,0,14.9-126.523m.382,114.817a50.676,50.676,0,1,1,50.676-50.676,50.676,50.676,0,0,1-50.676,50.676",
                transform: "translate(0.035 8.148)",
                fill: "#4ccb92",
              }),
              e.createElement("path", {
                id: "Trazado_7177",
                "data-name": "Trazado 7177",
                d: "M169.875,117.967A64.121,64.121,0,0,0,112.7,153.043c-1.421-.4-2.848-.78-4.286-1.119a94.31,94.31,0,0,0-21.382-2.511v.005c-1.748,0-3.424.045-4.982.135A99.34,99.34,0,0,0,8.563,189.619c-.386.516-.763,1.056-1.228,1.749l-.107.15c-.1.141-.213.3-.311.456L6.89,192a37.722,37.722,0,0,0-2.66,37.365,31.837,31.837,0,0,0,28.644,17.951H141.951a31.362,31.362,0,0,0,13.027-2.828,64.139,64.139,0,1,0,14.9-126.523Zm.382,114.817a50.676,50.676,0,1,1,50.676-50.676A50.676,50.676,0,0,1,170.256,232.784Z",
                transform: "translate(0.035 8.148)",
                fill: "#4ccb92",
              }),
              e.createElement("path", {
                id: "Trazado_7178",
                "data-name": "Trazado 7178",
                d: "M175.869,148.182a20.812,20.812,0,0,0-20.809,20.813,20.593,20.593,0,0,0,.9,6.036l-24.028,24.024v13.874h13.875L169.833,188.9a20.816,20.816,0,0,0,26.849-18.2,20.283,20.283,0,0,0-3.813-13.874,20.814,20.814,0,0,0-17-8.642m2.311,23.125a4.625,4.625,0,1,1,4.626-4.624,4.625,4.625,0,0,1-4.626,4.624",
                transform: "translate(9.112 10.235)",
                fill: "#4ccb92",
              }),
              e.createElement("path", {
                id: "Trazado_7179",
                "data-name": "Trazado 7179",
                d: "M175.869,148.182a20.812,20.812,0,0,0-20.809,20.813,20.593,20.593,0,0,0,.9,6.036l-24.028,24.024v13.874h13.875L169.833,188.9a20.816,20.816,0,0,0,26.849-18.2,20.283,20.283,0,0,0-3.813-13.874A20.814,20.814,0,0,0,175.869,148.182Zm2.311,23.125a4.625,4.625,0,1,1,4.626-4.624A4.625,4.625,0,0,1,178.181,171.307Z",
                transform: "translate(9.112 10.235)",
                fill: "#4ccb92",
              })
            )
          ),
          e.createElement("rect", {
            id: "Rectángulo_1034",
            "data-name": "Rectángulo 1034",
            width: "256",
            height: "256",
            fill: "none",
          })
        )
      )
    );
  },
  wr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement("path", {
          "data-name": "Rect\\xE1ngulo 856",
          fill: "none",
          d: "M0 0h256v256H0z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 406",
          d: "M210.861 74.863h-28.736V48.236C182.125 21.636 157.844 0 128 0S73.875 21.638 73.875 48.236v26.627H45.139C20.25 74.863.001 92.971.001 115.23v84.8c0 21.912 19.623 39.8 43.979 40.353l84.021 14.62 84.021-14.62c24.356-.551 43.979-18.441 43.979-40.353v-84.8c-.001-22.259-20.25-40.367-45.14-40.367ZM96.296 48.236c0-15.579 14.222-28.254 31.7-28.254s31.7 12.675 31.7 28.254v26.627H96.289Zm137.281 151.79c0 11.24-10.191 20.385-22.717 20.385h-1.084l-81.777 14.229-81.777-14.229h-1.084c-12.526 0-22.716-9.145-22.716-20.385v-84.8c0-11.24 10.19-20.385 22.716-20.385h165.723c12.526 0 22.717 9.145 22.717 20.385Z",
        }),
        e.createElement("path", {
          "data-name": "Trazado 407",
          d: "M127.707 139.723a19.085 19.085 0 0 0-19.085 19.086 19.066 19.066 0 0 0 8.4 15.818v15.377a10.1 10.1 0 0 0 10.073 10.073h1.218a10.1 10.1 0 0 0 10.073-10.073v-15.377a19.067 19.067 0 0 0 8.4-15.818 19.086 19.086 0 0 0-19.079-19.086Z",
        })
      )
    );
  },
  Zr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "g",
        {
          id: "noun_chevron_2320228",
          transform: "translate(5.595 10) rotate(180)",
        },
        e.createElement("path", {
          id: "Path_6842",
          d: "M-178.01,7.8c-3.9-0.03-7.62-1.63-10.34-4.43c-5.81-5.68-5.92-15-0.25-20.81\n\t\tc0.08-0.08,0.16-0.16,0.25-0.25l100.13-100.13l-100.13-100.48c-5.81-5.68-5.92-15-0.25-20.81c0.08-0.08,0.16-0.16,0.25-0.25\n\t\tc5.68-5.81,15-5.92,20.81-0.25c0.08,0.08,0.16,0.16,0.25,0.25l110.82,110.82c2.8,2.72,4.39,6.44,4.43,10.34\n\t\tc0.11,3.93-1.51,7.71-4.43,10.34L-167.29,2.99C-170.07,5.97-173.93,7.71-178.01,7.8z",
        })
      )
    );
  },
  Mr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement("path", {
        id: "Path_7269",
        d: "M147.85,227.97c-2.7,0-4.89-2.19-4.89-4.89l0,0V32.93c0-2.7,2.19-4.89,4.89-4.89c0,0,0,0,0,0\n\th98.98c2.7,0,4.89,2.19,4.89,4.89c0,0,0,0,0,0v190.14c0,2.7-2.19,4.89-4.89,4.89l0,0H147.85z M71.37,205.43\n\tc-2.7,0-4.89-2.19-4.89-4.89l0,0V55.48c-0.01-2.7,2.17-4.9,4.87-4.91c0.01,0,0.01,0,0.02,0h56.4c2.7,0,4.89,2.19,4.89,4.89l0,0\n\tv145.05c0,2.7-2.19,4.89-4.89,4.89c0,0,0,0,0,0L71.37,205.43z M9.17,182.88c-2.7,0-4.88-2.18-4.89-4.87V78.02\n\tc0-2.7,2.19-4.89,4.89-4.89h42.15c2.7,0,4.89,2.19,4.89,4.89V178c0,2.7-2.19,4.89-4.89,4.89l0,0L9.17,182.88z",
      })
    );
  },
  xr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "g",
        null,
        e.createElement("path", {
          d: "M23.4,121.5c-11.5,0-21.4,9.8-21.4,21.2c0.2,11.8,9.7,21.2,21.4,21.4\n\t\t\t\tc11.4,0,21.2-9.9,21.2-21.4C44.3,131.1,35,121.7,23.4,121.5",
        }),
        e.createElement("path", {
          d: "M23.4,175.4c-11.5,0-21.4,9.8-21.4,21.2c0.2,11.8,9.7,21.2,21.4,21.4\n\t\t\t\tc11.4,0,21.2-9.9,21.2-21.4C44.3,184.9,35,175.6,23.4,175.4",
        }),
        e.createElement("path", {
          d: "M158.6,40.2h-12.2c-4.3,0-8.3,2.5-10.2,6.4l-76.6,157c-2.7,5.6-0.4,12.4,5.2,15.2\n\t\t\t\tc1.6,0.8,3.3,1.2,5,1.2H82c4.3,0,8.3-2.5,10.2-6.4l76.6-157c2.7-5.6,0.4-12.4-5.2-15.2C162,40.6,160.3,40.2,158.6,40.2",
        }),
        e.createElement("path", {
          d: "M205,121.1c-1.2,0-2.4,0.1-3.6,0.1L233,56.5c2.7-5.6,0.4-12.4-5.2-15.2\n\t\t\t\tc-1.6-0.8-3.3-1.2-5-1.2h-12.2c-4.3,0-8.3,2.5-10.2,6.4l-76.6,157c-2.7,5.6-0.4,12.4,5.2,15.2c1.6,0.8,3.3,1.2,5,1.2h12.2\n\t\t\t\tc4.3,0,8.3-2.5,10.2-6.4L165,196c14.8,22.1,44.7,28.1,66.8,13.3s28.1-44.7,13.3-66.8C236.2,129.1,221.1,121.1,205,121.1\n\t\t\t\t M205.3,207.3c-21,0-38.1-17-38.1-38.1c0-21,17-38.1,38.1-38.1c21,0,38.1,17,38.1,38.1c0,0,0,0,0,0\n\t\t\t\tC243.4,190.3,226.3,207.3,205.3,207.3",
        }),
        e.createElement("path", {
          d: "M211.3,151.3h-11.9v11.9h-11.9v11.9h11.9v11.9h11.9v-11.9h11.9v-11.9h-11.9V151.3z",
        })
      )
    );
  },
  _r = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement("path", {
        d: "M128,3.14C58.12,3.14,1.46,59,1.46,128S58.12,252.86,128,252.86,254.54,197,254.54,128h0C254.48,59.07,197.86,3.2,128,3.14M84.46,204.56a36.93,36.93,0,0,1-37.09-36.65h0c0-20.24,16.63-36.65,37.14-36.65s37.14,16.41,37.14,36.65S105,204.56,84.51,204.56h0M100,122.67a13,13,0,0,1-13.11-12.9,12.77,12.77,0,0,1,1.76-6.48l26.52-45.38a13.18,13.18,0,0,1,17.88-4.74,13,13,0,0,1,4.8,4.74l26.55,45.38a12.83,12.83,0,0,1-4.78,17.65,13.14,13.14,0,0,1-6.57,1.73ZM208.74,185a17.12,17.12,0,0,1-17.24,17H154.22A17.12,17.12,0,0,1,137,185V148.24a17.11,17.11,0,0,1,17.21-17h37.22a17.12,17.12,0,0,1,17.25,17v0Z",
        transform: "translate(-1.46 -3.14)",
      })
    );
  },
  Hr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement("path", {
        d: "M234.64,2.55H64.58a9,9,0,0,0-8.95,8.94V92h44.75a9,9,0,0,1,8.94,8.94v125.3a9,9,0,0,1-8.94,8.95H55.63v8.94a9,9,0,0,0,8.95,8.94H234.64a9,9,0,0,0,9-8.94V11.49A9,9,0,0,0,234.64,2.55ZM198.78,208.4H136.13a9,9,0,1,1,0-17.9h62.65a9,9,0,0,1,0,17.9Zm0-35.8H136.13a9,9,0,0,1,0-17.9h62.65a8.95,8.95,0,0,1,0,17.9Zm0-35.8H136.13a9,9,0,1,1,0-17.9h62.65a9,9,0,0,1,0,17.9Zm0-35.8H136.13a9,9,0,1,1,0-17.9h62.65a9,9,0,0,1,0,17.9Zm0-35.81H100.33a8.95,8.95,0,0,1,0-17.9h98.45a8.95,8.95,0,0,1,0,17.9Z",
        transform: "translate(-10.89 -2.55)",
      }),
      e.createElement("path", {
        d: "M91.43,101H19.83a9,9,0,0,0-8.94,8.94v107.4a9,9,0,0,0,8.94,8.94h71.6a9,9,0,0,0,8.95-8.94V109.94A9,9,0,0,0,91.43,101Zm-17.9,98.44H37.73a8.95,8.95,0,1,1,0-17.9h35.8a8.95,8.95,0,0,1,0,17.9Zm0-26.84H37.73a8.95,8.95,0,1,1,0-17.9h35.8a8.95,8.95,0,0,1,0,17.9Zm0-26.85H37.73a8.95,8.95,0,1,1,0-17.9h35.8a8.95,8.95,0,0,1,0,17.9Z",
        transform: "translate(-10.89 -2.55)",
      })
    );
  },
  zr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement("path", {
        d: "M253.46,219.34a17.76,17.76,0,0,1-5.37,13L232.57,248a18.57,18.57,0,0,1-13.19,5.38,17.74,17.74,0,0,1-13-5.38l-52.61-52.77a17.23,17.23,0,0,1-5.5-13.05,19.26,19.26,0,0,1,6.27-13.93L117.34,131.2,99.08,149.45a7,7,0,0,1-9.85,0l1.82,1.74a16.14,16.14,0,0,1,1.82,1.88,16.44,16.44,0,0,0,1.44,1.67,7.38,7.38,0,0,1,1.45,2c.19.49.48,1.14.87,2a9.89,9.89,0,0,1,.8,2.41,14.26,14.26,0,0,1-3.85,12.55q-.43.44-2.4,2.61t-2.76,3q-.8.79-2.7,2.4a16.88,16.88,0,0,1-3.2,2.24,28.58,28.58,0,0,1-3.2,1.3,11.22,11.22,0,0,1-3.76.65,13.45,13.45,0,0,1-9.85-4.06L6.6,122.42a13.43,13.43,0,0,1-4.06-9.85,11.4,11.4,0,0,1,.75-3.7,27,27,0,0,1,1.21-3.18,17.84,17.84,0,0,1,2.24-3.2c1.06-1.25,1.86-2.15,2.41-2.68s1.53-1.45,3-2.76l2.61-2.38a14.26,14.26,0,0,1,12.55-3.85,9.68,9.68,0,0,1,2.4.8l2,.87a7.33,7.33,0,0,1,2,1.45,20.77,20.77,0,0,0,1.67,1.44,19.1,19.1,0,0,1,1.89,1.82L38.9,99a7,7,0,0,1,0-9.85L89.21,38.78a7,7,0,0,1,9.85,0L97.24,37a13.64,13.64,0,0,1-1.8-1.92A11,11,0,0,0,94,33.44a6,6,0,0,1-1.44-2,20.39,20.39,0,0,0-.88-2,8.81,8.81,0,0,1-.8-2.4,17.58,17.58,0,0,1-.23-2.61,14.07,14.07,0,0,1,4.06-9.85c.29-.3,1.1-1.17,2.41-2.62s2.23-2.43,2.76-2.95,1.42-1.33,2.67-2.4a16.88,16.88,0,0,1,3.2-2.24,27.73,27.73,0,0,1,3.18-1.21,11.22,11.22,0,0,1,3.76-.65,13.48,13.48,0,0,1,9.79,4L181.7,65.67a13.39,13.39,0,0,1,4.05,9.85,11.22,11.22,0,0,1-.65,3.76,26.74,26.74,0,0,1-1.29,3.2,16.88,16.88,0,0,1-2.24,3.2q-1.59,1.88-2.4,2.67t-3,2.7l-2.62,2.41A14.24,14.24,0,0,1,161,97.3a10.31,10.31,0,0,1-2.41-.79l-1.86-.84a7.3,7.3,0,0,1-2-1.44,19.31,19.31,0,0,0-1.68-1.44A18,18,0,0,1,151.25,91l-1.73-1.82a7,7,0,0,1,0,9.85l-18.28,18.27,37.12,37.12a19.24,19.24,0,0,1,13.92-6.27,18.53,18.53,0,0,1,13.2,5.37l52.61,52.57a18.59,18.59,0,0,1,5.37,13.19Z",
        transform: "translate(-2.54 -2.58)",
      })
    );
  },
  Vr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement("path", {
        d: "M222.54,17.88h-24.4V14.76a12.2,12.2,0,1,0-24.4,0V17.9H78.93V14.76a12.21,12.21,0,1,0-24.41,0V17.9H33.42a30.46,30.46,0,0,0-30.88,30V223.47a30.54,30.54,0,0,0,30.88,30H222.56a30.47,30.47,0,0,0,30.86-29.94V47.9a30.53,30.53,0,0,0-30.88-30M26.94,47.79a6.27,6.27,0,0,1,6.45-6.08H54.52v3.34a12.21,12.21,0,0,0,24.39,0V41.71h94.81v3.34a12.2,12.2,0,0,0,24.4,0V41.71h24.4A6.28,6.28,0,0,1,229,47.77h0v26h-202ZM229.14,223.4a6.5,6.5,0,0,1-6.6,6.09H33.42A6.27,6.27,0,0,1,27,223.42h0V97.55H229.14Z",
        transform: "translate(-2.54 -2.55)",
      }),
      e.createElement("path", {
        d: "M96.62,195.15,128,200.61l31.36-5.46a16,16,0,0,0,16.41-15.05V148.49a16.05,16.05,0,0,0-16.85-15.05H148.22v-9.93a20.35,20.35,0,0,0-40.42,0v9.93H97.08a16.05,16.05,0,0,0-16.85,15.05v31.63a16,16,0,0,0,16.41,15M132,166.22v5.72a3.76,3.76,0,0,1-3.76,3.77h-.46a3.76,3.76,0,0,1-3.76-3.77h0v-5.72a7.13,7.13,0,1,1,9.9-1.92,7,7,0,0,1-1.92,1.92m-15.82-42.69a11.91,11.91,0,0,1,23.66,0v9.93H116.17Z",
        transform: "translate(-2.54 -2.55)",
      })
    );
  },
  Ar = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement("path", {
        d: "M8.18,94.43V21.24A20.26,20.26,0,0,1,27.69,1.74h73.19A51,51,0,0,1,134.25,15.6L242.6,136.2a21,21,0,0,1,0,27.73l-84.8,84.81a20.17,20.17,0,0,1-27.74,0L22.05,127.8A55.46,55.46,0,0,1,8.18,94.43ZM39.94,52.24a19.31,19.31,0,0,0,18.7,18.94A19.42,19.42,0,0,0,77.58,52.24,19.29,19.29,0,0,0,58.64,33.53,19.17,19.17,0,0,0,39.94,52.24Z",
        transform: "translate(-8.18 -1.74)",
      })
    );
  },
  Cr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          width: "11",
          height: "11",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path-alert-close-icon" },
          e.createElement("rect", {
            id: "Rectángulo_1612",
            "data-name": "Rectángulo 1612",
            width: "256",
            height: "256",
            fill: "none",
          })
        ),
        e.createElement(
          "clipPath",
          { id: "clip-path-2-alert-close-icon" },
          e.createElement("rect", {
            id: "Rectángulo_1611",
            "data-name": "Rectángulo 1611",
            width: "256",
            height: "256",
          })
        )
      ),
      e.createElement(
        "g",
        { id: "AlertCloseIcon", clipPath: "url(#clip-path-alert-close-icon)" },
        e.createElement(
          "g",
          { id: "AlertCloseIcon-2", "data-name": "AlertCloseIcon" },
          e.createElement(
            "g",
            {
              id: "Grupo_2527",
              "data-name": "Grupo 2527",
              clipPath: "url(#clip-path-2-alert-close-icon)",
            },
            e.createElement("path", {
              id: "Trazado_7276",
              "data-name": "Trazado 7276",
              d: "M230.082,256.006a25.853,25.853,0,0,1-18.328-7.6l-83.761-83.735L44.259,248.41A25.92,25.92,0,0,1,7.6,211.754l83.735-83.735L7.6,44.259A25.92,25.92,0,0,1,44.259,7.6l83.735,83.735L211.754,7.6A25.92,25.92,0,0,1,248.41,44.259l-83.735,83.761,83.735,83.735a25.924,25.924,0,0,1-18.328,44.252",
              transform: "translate(-0.006 -0.006)",
            })
          )
        )
      )
    );
  },
  Lr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 12.425 12.024",
        },
        a
      ),
      e.createElement("path", {
        id: "opensource",
        d: "M8.4,12.024,7.074,8.372a2.312,2.312,0,0,0,1.468-2.16,2.32,2.32,0,0,0-2.33-2.33,2.32,2.32,0,0,0-2.33,2.33,2.313,2.313,0,0,0,1.468,2.16L4.028,12.024A6.2,6.2,0,0,1,1.122,9.761,5.992,5.992,0,0,1,0,6.212,6.094,6.094,0,0,1,.491,3.8,6.079,6.079,0,0,1,3.8.491a6.177,6.177,0,0,1,4.829,0A6.079,6.079,0,0,1,11.933,3.8a6.094,6.094,0,0,1,.491,2.415A5.993,5.993,0,0,1,11.3,9.761,6.2,6.2,0,0,1,8.4,12.024Z",
        fill: "#fff",
      })
    );
  },
  Tr = function (e) {
    return a.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
        },
        e,
        { viewBox: "0 0 12.621 7.619" }
      ),
      a.createElement("path", {
        d: "M2.82.976A.989.989,0,0,1,4.8.976V9.243L5.919,8.122a.989.989,0,0,1,1.4,1.4l-2.8,2.8a.989.989,0,0,1-1.411,0L.3,9.521a.989.989,0,0,1,1.4-1.4L2.82,9.243V.976Z",
        transform: "translate(0 7.619) rotate(-90)",
        fill: "#2781b0",
      })
    );
  },
  br = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 16 15.1",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path-lic-doc" },
          e.createElement("rect", {
            id: "Rectángulo_963",
            "data-name": "Rectángulo 963",
            width: "16",
            height: "15.1",
            fill: "currentcolor",
          })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Grupo_2324",
          "data-name": "Grupo 2324",
          clipPath: "url(#clip-path-lic-doc)",
        },
        e.createElement("path", {
          id: "Trazado_7051",
          "data-name": "Trazado 7051",
          d: "M12.118,0A3.867,3.867,0,0,0,9.051,1.506a3.9,3.9,0,0,0-.687,1.4L.948,2.975A.988.988,0,0,0,0,4V14.079A.988.988,0,0,0,.948,15.1H12.105a.987.987,0,0,0,.947-1.021V7.645a3.871,3.871,0,0,0,1.17-.508,3.914,3.914,0,0,0,.935-.848A3.878,3.878,0,0,0,12.118,0M1.057,5.621a.516.516,0,0,1,.515-.515h3.8a.516.516,0,0,1,.515.515v.686a.516.516,0,0,1-.515.515h-3.8a.516.516,0,0,1-.515-.515Zm10.7,7.573a.516.516,0,0,1-.515.515H1.571a.516.516,0,0,1-.515-.515v-.686a.516.516,0,0,1,.515-.515h9.666a.516.516,0,0,1,.515.515Zm0-3.443a.516.516,0,0,1-.515.515H1.571a.516.516,0,0,1-.515-.515V9.064a.516.516,0,0,1,.515-.515h9.666a.516.516,0,0,1,.515.515Zm2.025-6.511,0,0L12.026,4.988a.388.388,0,0,1-.28.118h0a.389.389,0,0,1-.28-.118l-.873-.873a.4.4,0,0,1,.564-.565l.59.591L13.21,2.678a.4.4,0,0,1,.561,0l0,0a.4.4,0,0,1,0,.561",
          fill: "currentcolor",
        })
      )
    );
  },
  Pr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement("path", {
        d: "M99.18,223A7.66,7.66,0,0,1,92.42,219L77.91,191.41c-6.34-12-13-24.57-15.72-29.84h0l-1-2,0,0-.31-.58h0c-3.09-6.75,3.06-10.09,3.12-10.12A7.48,7.48,0,0,1,74.09,152l0,0,.37.7,0,0L100.43,202c22-31.37,93.39-144.89,121-189.3h0a.61.61,0,0,0,.07-.1l.24-.4h0A7.61,7.61,0,0,1,230.32,9a19.44,19.44,0,0,1,3,1.21s.69.74,1.37,1.5a6.63,6.63,0,0,1,.93,2.73s.61,3.62-1.21,5.67l.07,0-.31.49,0,0c-.93,1.6-2.46,4-5,8.05-3.39,5.43-8.24,13.18-14.07,22.48-10.65,17-26.76,42.59-43.08,68.29-18.35,28.88-33.19,52-44.13,68.58-22.22,33.77-23.42,34-27,34.86A7.64,7.64,0,0,1,99.18,223Zm-30.35-64L71,163.15Z",
        transform: "translate(-18.77 -7.2)",
      }),
      e.createElement("path", {
        d: "M99.18,224.54a9.09,9.09,0,0,1-8.08-4.86L58.81,158.4l.17-.09c-2.34-7.14,4.23-10.72,4.3-10.76a8.91,8.91,0,0,1,11.29,2.54l.15-.08,1.09,2,24.8,47.08C123.8,165.54,192,57.25,220.17,11.9l1.08-1.73.14.08a9.06,9.06,0,0,1,9.29-2.73A21.56,21.56,0,0,1,234,8.85l.24.12.18.2s.7.75,1.4,1.52a7.38,7.38,0,0,1,1.3,3.55c.06.35.57,3.76-1.12,6.26l-.54.91-.79,1.28,0,0c-.94,1.57-2.28,3.71-4.19,6.77-3.39,5.42-8.24,13.17-14.08,22.48-10.68,17-26.82,42.68-43.08,68.29-18.37,28.93-33.23,52-44.15,68.61-22.55,34.27-23.79,34.55-27.92,35.49A8.66,8.66,0,0,1,99.18,224.54ZM62.35,158.65l.12.24,31.28,59.39a6.17,6.17,0,0,0,6.79,3.11c3-.68,4.2-1,26.09-34.22,10.91-16.59,25.75-39.66,44.11-68.57C187,93,203.14,67.34,213.82,50.32c5.83-9.3,10.68-17,14.07-22.47,2.14-3.42,3.55-5.68,4.5-7.26l-.21-.13,1-1.24.41-.72.07,0a7.12,7.12,0,0,0,.47-3.87,5.71,5.71,0,0,0-.57-2l-1.16-1.27a17.3,17.3,0,0,0-2.46-1A6.11,6.11,0,0,0,223,13.06l-.3.44c-28.8,46.29-99.28,158.28-121,189.35l-1.41,2L72.81,152.82c-3.09-5.07-7.63-2.88-8.13-2.62a6,6,0,0,0-2.46,8.18Zm7.29,5.2-2.14-4.07,2.66-1.4,2.14,4.07Z",
        transform: "translate(-18.77 -7.2)",
      }),
      e.createElement("path", {
        d: "M226.15,50.25,223.65,54a12,12,0,0,1,5.09,9.78v165a12,12,0,0,1-12,12h-178a12,12,0,0,1-12-12v-165a12,12,0,0,1,12-12H187l3-4.5H38.77a16.52,16.52,0,0,0-16.5,16.5v165a16.52,16.52,0,0,0,16.5,16.5h178a16.52,16.52,0,0,0,16.5-16.5v-165A16.5,16.5,0,0,0,226.15,50.25Z",
        transform: "translate(-18.77 -7.2)",
      }),
      e.createElement("path", {
        d: "M216.74,248.8h-178a20,20,0,0,1-20-20v-165a20,20,0,0,1,20-20H196.53l-7.64,11.5H38.77a8.51,8.51,0,0,0-8.5,8.5v165a8.51,8.51,0,0,0,8.5,8.5h178a8.51,8.51,0,0,0,8.5-8.5v-165a8.54,8.54,0,0,0-3.61-6.93l-2.77-2,6.36-9.56,2.93,2a20,20,0,0,1,8.59,16.41v165A20,20,0,0,1,216.74,248.8Z",
        transform: "translate(-18.77 -7.2)",
      }),
      e.createElement("path", {
        d: "M224.24,63.79v165a7.5,7.5,0,0,1-7.5,7.5h-178a7.51,7.51,0,0,1-7.5-7.5v-165a7.51,7.51,0,0,1,7.5-7.5H184l3-4.5H38.77a12,12,0,0,0-12,12v165a12,12,0,0,0,12,12h178a12,12,0,0,0,12-12v-165A12,12,0,0,0,223.65,54l-2.48,3.74A7.48,7.48,0,0,1,224.24,63.79Z",
        transform: "translate(-18.77 -7.2)",
      }),
      e.createElement("path", {
        d: "M216.74,244.3h-178a15.52,15.52,0,0,1-15.5-15.5v-165a15.52,15.52,0,0,1,15.5-15.5H193.54l-7.65,11.5H38.77a4,4,0,0,0-4,4v165a4,4,0,0,0,4,4h178a4,4,0,0,0,4-4v-165a4,4,0,0,0-1.65-3.22l-2.69-2,6.34-9.52,2.94,2.09a15.52,15.52,0,0,1,6.56,12.63v165A15.51,15.51,0,0,1,216.74,244.3Z",
        transform: "translate(-18.77 -7.2)",
      })
    );
  },
  Nr = function (e) {
    return a.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
        },
        e,
        { viewBox: "0 0 18 12" }
      ),
      a.createElement("defs", null),
      a.createElement(
        "g",
        {
          id: "Page-1",
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd",
        },
        a.createElement(
          "g",
          { fill: "currentcolor", id: "Fill-2" },
          a.createElement("polygon", {
            points:
              "17.9999987 4.99999934 3.82999951 4.99999934 7.40999918 1.4099994 5.99999946 -3.60000001e-07 -1.80000029e-07 5.99999928 5.99999946 11.9999989 7.40999918 10.5899991 3.82999951 6.99999922 17.9999987 6.99999922",
          })
        )
      )
    );
  },
  Br = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          viewBox: "0 0 256 256",
          fill: "currentcolor",
        },
        a
      ),
      e.createElement("path", {
        d: "M222.83,0H114.08a5.38,5.38,0,0,0-5.38,5.37V118.1c.62.39,1.24.79,1.85,1.2a74.53,74.53,0,0,1,22.09,100.36h90.19a5.36,5.36,0,0,0,5.37-5.37V5.37A5.37,5.37,0,0,0,222.83,0Z",
      }),
      e.createElement("path", {
        d: "M106,125.38a68,68,0,1,0,30,56.35A67.59,67.59,0,0,0,106,125.38Zm8.16,94.78-7.77,7.76L68,189.5,29.56,227.92l-7.77-7.76,38.42-38.43L21.79,143.31l7.77-7.77L68,174l38.42-38.42,7.77,7.77L75.75,181.73Z",
      })
    );
  },
  Rr = function (e) {
    return a.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          width: "14",
          height: "13.088",
          viewBox: "0 0 14 13.088",
        },
        e
      ),
      a.createElement(
        "g",
        {
          id: "filter-icon.a949c200",
          transform: "translate(-231.827 -340.123)",
        },
        a.createElement("line", {
          id: "Línea_659",
          "data-name": "Línea 659",
          x2: "14",
          transform: "translate(231.827 346.667)",
          fill: "none",
          stroke: "#434343",
          strokeWidth: "1",
        }),
        a.createElement(
          "g",
          {
            id: "Grupo_2472",
            "data-name": "Grupo 2472",
            transform: "translate(240.693 344.614)",
          },
          a.createElement("circle", {
            id: "Elipse_611",
            "data-name": "Elipse 611",
            cx: "2.053",
            cy: "2.053",
            r: "2.053",
            transform: "translate(0 0)",
            fill: "#fff",
          }),
          a.createElement("circle", {
            id: "Elipse_612",
            "data-name": "Elipse 612",
            cx: "1.597",
            cy: "1.597",
            r: "1.597",
            transform: "translate(0.456 0.456)",
            fill: "none",
            stroke: "#414141",
            strokeWidth: "1",
          })
        ),
        a.createElement("line", {
          id: "Línea_660",
          "data-name": "Línea 660",
          x2: "14",
          transform: "translate(231.827 342.22)",
          fill: "none",
          stroke: "#434343",
          strokeWidth: "1",
        }),
        a.createElement(
          "g",
          {
            id: "Grupo_2473",
            "data-name": "Grupo 2473",
            transform: "translate(232.394 340.167)",
          },
          a.createElement("circle", {
            id: "Elipse_613",
            "data-name": "Elipse 613",
            cx: "2.053",
            cy: "2.053",
            r: "2.053",
            transform: "translate(0 0)",
            fill: "#fff",
          }),
          a.createElement("circle", {
            id: "Elipse_614",
            "data-name": "Elipse 614",
            cx: "1.597",
            cy: "1.597",
            r: "1.597",
            transform: "translate(0.456 0.456)",
            fill: "none",
            stroke: "#414141",
            strokeWidth: "1",
          })
        ),
        a.createElement("line", {
          id: "Línea_661",
          "data-name": "Línea 661",
          x2: "14",
          transform: "translate(231.827 351.114)",
          fill: "none",
          stroke: "#434343",
          strokeWidth: "1",
        }),
        a.createElement(
          "g",
          {
            id: "Grupo_2474",
            "data-name": "Grupo 2474",
            transform: "translate(235.161 349.061)",
          },
          a.createElement("circle", {
            id: "Elipse_615",
            "data-name": "Elipse 615",
            cx: "2.053",
            cy: "2.053",
            r: "2.053",
            transform: "translate(0 0)",
            fill: "#fff",
          }),
          a.createElement("circle", {
            id: "Elipse_616",
            "data-name": "Elipse 616",
            cx: "1.597",
            cy: "1.597",
            r: "1.597",
            transform: "translate(0.456 0.456)",
            fill: "none",
            stroke: "#414141",
            strokeWidth: "1",
          })
        )
      )
    );
  },
  yr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "g",
        { transform: "translate(0 -0.853)" },
        e.createElement("path", {
          d: "M89.25,173.48c-2.67-.25-5.25-1.12-7.54-2.52-2.52-2.16-3.51-5.62-2.52-8.78l7.55-35.2L204.84,8.87C210.17,4.17,216.73,1.09,223.76,0c7.06-.19,13.88,2.53,18.86,7.54,10.33,11.14,9.77,28.52-1.26,38.97l-116.9,118.1-33.94,7.55-1.26,1.25v.07Zm12.58-37.71l-5.04,20.12,20.13-5.03L231.28,36.46c4.78-4.21,5.34-11.46,1.26-16.35-2.52-2.52-5.03-3.77-7.54-2.52-3.34-.09-6.56,1.3-8.8,3.78l-114.39,114.39h.01Z",
        }),
        e.createElement("path", {
          d: "M179.76,227.54H23.88C10.69,227.54,0,216.84,0,203.65V47.78c0-13.19,10.69-23.88,23.88-23.88H108.1v15.07H23.88c-4.46,.46-7.77,4.34-7.54,8.81V203.65c-.24,4.47,3.08,8.34,7.54,8.8H179.76c4.75,.12,8.69-3.63,8.81-8.38,0-.14,0-.28,0-.42v-49.03h16.33v49.03c-1.03,13.25-11.92,23.57-25.21,23.88h.07Z",
        })
      )
    );
  },
  Gr = function (e) {
    return a.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 10.155 8.367",
        },
        e
      ),
      a.createElement("path", {
        id: "Intersección_8",
        "data-name": "Intersección 8",
        d: "M14368.751,22047.6a1.045,1.045,0,1,1,1.467-1.488l1.411,1.395,3.98-3.918h0c.008-.01.017-.018.025-.027a1.048,1.048,0,0,1,1.451,1.514l-5.456,5.361Z",
        transform: "translate(-14367.849 -22042.768)",
        fill: "currentcolor",
        stroke: "rgba(0,0,0,0)",
        strokeWidth: "1",
      })
    );
  },
  Sr = function (e) {
    return a.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 15 15",
        },
        e
      ),
      a.createElement("path", {
        d: "M7.5,0h0A7.5,7.5,0,0,0,0,7.5H0A7.5,7.5,0,0,0,7.5,15h0a7.5,7.5,0,0,0,0-15M9.978,9.776l-1.9,1.9a.819.819,0,0,1-1.166,0h0L5.022,9.776a.773.773,0,0,1-.186-.864.875.875,0,0,1,.779-.541.793.793,0,0,1,.565.247l.5.5V3.9a.818.818,0,0,1,1.636,0V9.119l.5-.5a.79.79,0,0,1,.564-.248.872.872,0,0,1,.779.541.772.772,0,0,1-.185.864",
        transform: "translate(15 15) rotate(180)",
      })
    );
  },
  kr = function (e) {
    return a.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 15 15",
        },
        e
      ),
      a.createElement("path", {
        d: "M7.5,0h0A7.5,7.5,0,0,0,0,7.5H0A7.5,7.5,0,0,0,7.5,15h0a7.5,7.5,0,0,0,0-15M9.978,9.776l-1.9,1.9a.819.819,0,0,1-1.166,0h0L5.023,9.776a.773.773,0,0,1-.186-.864.875.875,0,0,1,.779-.541.793.793,0,0,1,.565.247l.5.5V3.9a.818.818,0,0,1,1.636,0V9.119l.5-.5a.79.79,0,0,1,.564-.248.872.872,0,0,1,.779.541.772.772,0,0,1-.185.864",
      })
    );
  },
  Ir = function (a) {
    return e.createElement(
      "svg",
      T({}, a, {
        className: "min-icon",
        fill: "currentcolor",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
      }),
      e.createElement(
        "g",
        null,
        e.createElement("path", {
          d: "M216,169H83.14a34,34,0,0,1-24.09-10.15L9.56,108A33.56,33.56,0,0,1,9.56,61L59,10.1A33.91,33.91,0,0,1,83.13,0H216a33.68,33.68,0,0,1,33.65,33.65V135.37A33.68,33.68,0,0,1,216,169M83.14,9A24.93,24.93,0,0,0,65.5,16.42L16,67.36a24.54,24.54,0,0,0,0,34.29l49.5,50.92A24.91,24.91,0,0,0,83.12,160H216a24.64,24.64,0,0,0,24.66-24.62V33.65A24.64,24.64,0,0,0,216,9H83.14Z",
        }),
        e.createElement("path", {
          d: "M162.57,96h0a7.23,7.23,0,1,1-10,10.46l-.2-.24L138.78,92.68l-13.54,13.57a7.21,7.21,0,1,1-10.79-9.58c.12-.14.25-.27.38-.4l.24-.24,13.56-13.55L115.09,68.94a7.22,7.22,0,0,1,10.17-10.21l13.59,13.58,13.54-13.58a7.22,7.22,0,0,1,10.18,10.21L149,82.48Z",
        })
      )
    );
  },
  qr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement("path", {
        d: "M126.09,0C56.45,0,0,56.45,0,126.09s56.45,126.09,126.09,126.09,126.09-56.45,126.09-126.09S195.72,0,126.09,0Zm79.61,146.23H46.48c-11.08,0-20.14-9.07-20.14-20.14h0c0-11.08,9.07-20.14,20.14-20.14H205.7c11.08,0,20.14,9.07,20.14,20.14h0c0,11.08-9.07,20.14-20.14,20.14Z",
      })
    );
  },
  Fr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "g",
        { transform: "translate(0 0)" },
        e.createElement(
          "g",
          { transform: "translate(0 0)" },
          e.createElement("path", {
            d: "M224.54,131.96c26.08-14.98,35.99-47.67,22.62-74.61-11.77-25.71-42.15-37.02-67.87-25.25-.96,.44-1.9,.91-2.83,1.4-9.84,5.4-17.74,13.74-22.62,23.85L108.09,9.09C102.84,3.49,95.57,.22,87.9,0H29.63C12.83,.49-.41,14.46,0,31.25v61.73c.19,7.83,3.25,15.33,8.6,21.05l123.12,129.87c10.78,11.6,28.92,12.27,40.52,1.49,.52-.48,1.01-.98,1.49-1.49l57.48-60.63c11.52-12.53,11.52-31.8,0-44.32l-6.68-6.98ZM60.25,79.27c-8.45-.23-15.12-7.27-14.89-15.72-.23-8.45,6.44-15.49,14.89-15.72,8.45,.24,15.11,7.27,14.89,15.72,.22,8.45-6.44,15.48-14.89,15.72m99.09,3.47h0c-.61-23.53,17.95-43.11,41.47-43.75,23.53,.64,42.09,20.22,41.47,43.75,.61,23.53-17.95,43.11-41.47,43.75-23.53-.64-42.09-20.22-41.47-43.75",
            fill: "#4ccb92",
          }),
          e.createElement("path", {
            d: "M217.93,64.76c-1.49-1.66-3.62-2.61-5.85-2.61-2.24,.02-4.37,.94-5.92,2.55l-21.93,23.19c-.31,.32-.52,.72-.59,1.16l-2.28,11.67c-.15,.73,.07,1.48,.59,2.01,.41,.4,.96,.62,1.53,.61,.14,.04,.29,.04,.44,0l10.98-2.24c.42-.08,.81-.3,1.1-.62l21.93-23.19c3.22-3.52,3.22-8.92,0-12.45v-.07Z",
            fill: "#4ccb92",
          })
        )
      )
    );
  },
  Or = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement("path", {
        d: "M230.01,21.29c-27.36-27.35-71.33-28.49-100.07-2.6h0l-36.83,36.7c-6.45,6.46-11.62,14.09-15.24,22.48-7.22,3.1-13.89,7.37-19.73,12.62h0L21.29,127.17c-28.39,28.39-28.39,74.42,0,102.81,28.39,28.39,74.42,28.39,102.81,0l36.77-36.77h0c5.25-5.85,9.52-12.51,12.62-19.73,8.39-3.62,16.01-8.79,22.48-15.24l36.77-36.77h0c25.9-28.73,24.76-72.72-2.6-100.07l-.12-.12ZM99.3,203.86h0c-14.33,14.33-37.55,14.33-51.88,0-14.33-14.33-14.33-37.55,0-51.88h0l26.81-26.81c6.56,25.45,26.43,45.32,51.88,51.88l-26.81,26.81Zm19.92-71.8c-6.28-6.28-10.05-14.63-10.62-23.49,18.38,1.16,33.02,15.81,34.17,34.19-8.86-.57-17.21-4.34-23.49-10.62l-.06-.08Zm86.94-35.05l-2.25,2.25h0l-26.81,26.81c-6.56-25.45-26.43-45.32-51.88-51.88l26.81-26.81h0l2.25-2.25h0c15.54-13,38.67-10.94,51.68,4.59,11.4,13.62,11.4,33.46,0,47.08v.1l.21,.1Z",
      })
    );
  },
  jr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement("path", {
        d: "M125.28,0C56.09,0,0,56.09,0,125.28s56.09,125.28,125.28,125.28,125.28-56.09,125.28-125.28S194.47,0,125.28,0Zm-17.54,35.55h31.6V105.62c0,7.43-.39,14.78-1.16,22.05-.78,7.27-1.86,14.82-3.25,22.66h-22.78c-1.39-7.84-2.47-15.39-3.25-22.66-.78-7.27-1.16-14.62-1.16-22.05V35.55Zm33.81,167.7c-1.06,2.37-2.49,4.43-4.29,6.19-1.8,1.76-3.9,3.12-6.31,4.1-2.41,.98-5,1.47-7.78,1.47s-5.49-.49-7.9-1.47c-2.41-.98-4.51-2.35-6.31-4.1-1.8-1.76-3.21-3.82-4.23-6.19-1.02-2.37-1.53-4.94-1.53-7.72s.51-5.25,1.53-7.66c1.02-2.41,2.43-4.49,4.23-6.25,1.8-1.76,3.9-3.14,6.31-4.17,2.41-1.02,5.04-1.53,7.9-1.53s5.37,.51,7.78,1.53c2.41,1.02,4.51,2.41,6.31,4.17,1.79,1.76,3.22,3.84,4.29,6.25,1.06,2.41,1.59,4.96,1.59,7.66s-.53,5.35-1.59,7.72Z",
      })
    );
  },
  Dr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement("path", {
        d: "M126.32,0C56.55,0,0,56.55,0,126.32s56.55,126.32,126.32,126.32,126.32-56.55,126.32-126.32S196.08,0,126.32,0Zm13.11,197.19h-26.22V99.24h26.22v97.94Zm1.81-119.6c-.89,1.9-2.08,3.58-3.56,5.04-1.49,1.46-3.23,2.6-5.23,3.42-2,.82-4.13,1.23-6.41,1.23-2.15,0-4.2-.41-6.13-1.23-1.93-.82-3.63-1.96-5.08-3.42-1.46-1.46-2.61-3.14-3.47-5.04s-1.28-3.96-1.28-6.17,.43-4.29,1.28-6.22c.85-1.93,2.01-3.62,3.47-5.08s3.15-2.6,5.08-3.42c1.93-.82,3.97-1.24,6.13-1.24,2.28,0,4.42,.41,6.41,1.24,2,.82,3.74,1.96,5.23,3.42,1.49,1.46,2.67,3.15,3.56,5.08,.89,1.93,1.33,4.01,1.33,6.22s-.44,4.27-1.33,6.17Z",
      })
    );
  },
  Ur = function (e) {
    return a.createElement(
      "svg",
      T({}, e, {
        className: "min-icon",
        fill: "currentcolor",
        viewBox: "0 0 61.059 25.5334",
        xmlns: "http://www.w3.org/2000/svg",
      }),
      a.createElement("defs", null),
      a.createElement(
        "g",
        null,
        a.createElement("path", {
          d: "M59.8021 17.9708C59.7771 17.9708 58.9617 18.0678 58.9617 18.0678L52.2703 18.0678C52.2563 19.0171 52.3861 19.9705 52.6582 20.8801C52.7117 21.0793 52.7558 21.2904 52.8198 21.4943C52.8596 21.6203 52.9068 21.7269 52.9491 21.8499L52.8844 21.9792C52.5505 22.4551 52.3312 22.9893 52.2379 23.5632C52.0705 22.9965 51.9455 22.4051 51.8823 21.8176C51.8632 21.6403 51.8605 21.4737 51.85 21.3004C51.7591 20.2068 51.898 19.1001 52.2703 18.0678L39.8572 18.0678L38.2409 25.0178L53.6603 25.0178C53.2607 25.012 52.8818 24.8399 52.6258 24.5329C52.5865 24.4785 52.5571 24.4322 52.5289 24.3713L52.4642 24.2097C52.4175 24.0539 52.3896 23.8872 52.3996 23.7248C52.4675 23.129 52.6951 22.5624 53.0461 22.0762C53.5355 21.353 54.1461 20.7194 54.824 20.169C54.9933 20.0275 55.1639 19.8797 55.3412 19.7487L56.02 19.2962C56.757 18.8181 57.5651 18.4622 58.4121 18.2294C57.6081 18.505 56.8157 18.8769 56.117 19.3608C56.089 19.3795 56.0796 19.4053 56.0524 19.4255C55.642 19.7086 55.2528 20.0225 54.8886 20.3629C53.7914 21.3948 53.203 22.4854 53.4663 23.1106C53.485 23.1536 53.5049 23.1686 53.531 23.2076C53.8144 23.624 54.5162 23.7218 55.4058 23.4985C55.4663 23.4832 55.5374 23.4514 55.5998 23.4339C55.9055 23.3439 56.2137 23.24 56.5049 23.1106L56.7312 23.0136L56.7312 22.9813C57.7116 22.4958 58.4752 21.9282 58.6384 21.5913C58.6741 21.5357 58.694 21.4916 58.6707 21.4297C58.5542 21.1936 57.7179 21.3573 56.7312 21.7853L56.5049 21.8822C56.5721 21.82 56.6294 21.7483 56.6989 21.6883C56.8109 21.5919 56.9308 21.4903 57.0545 21.3973C57.2411 21.2558 57.4363 21.1314 57.6363 21.0094C58.5356 20.3308 58.9919 19.6957 58.897 19.4578C58.8756 19.4101 58.8509 19.3727 58.8 19.3608C58.4738 19.3263 58.1205 19.4016 57.8303 19.5548C57.4338 19.7227 57.0583 19.8996 56.6989 20.1366L56.6342 20.2013L56.4403 20.3306L56.5696 20.1366C56.7701 19.7945 57.0094 19.4865 57.3131 19.2315C57.5681 19.0107 57.862 18.787 58.1535 18.6173C58.2656 18.5512 58.3636 18.5114 58.4768 18.4557C58.5899 18.4001 58.7188 18.3389 58.8324 18.2941C59.139 18.1481 59.4686 18.0347 59.8021 17.9708ZM43.2514 18.9406L43.8656 18.9406L42.9605 22.9166L42.4433 22.9166L42.7019 21.7529L41.0856 21.7529L39.9865 22.9166L39.4046 22.9166L43.2514 18.9406ZM44.7384 18.9729L44.7707 18.9729L46.484 18.9729C46.6016 18.966 46.7058 18.9776 46.8072 19.0376C46.8812 19.0803 46.9246 19.1809 46.9042 19.2639L46.7102 20.169L46.0961 20.169L46.29 19.2962L44.803 19.2962L44.2535 21.7206L44.0595 22.6257L45.5788 22.6257L45.5788 22.5934L45.8698 21.268L45.1586 21.268L45.2233 20.9448L46.5163 20.9448L46.1607 22.6257C46.1556 22.6493 46.1403 22.6694 46.1284 22.6904C46.0904 22.7525 46.0326 22.8208 45.9668 22.852C45.8508 22.9093 45.7405 22.9205 45.6112 22.9166L43.8979 22.9166C43.7803 22.9236 43.6761 22.912 43.5747 22.852C43.5006 22.81 43.4565 22.7082 43.4777 22.6257L44.2212 19.2639C44.2469 19.169 44.325 19.0768 44.4151 19.0376C44.5108 18.9915 44.6325 18.9774 44.7384 18.9729ZM47.4214 18.9729L49.5549 18.9729C49.6726 18.966 49.7767 18.9776 49.8782 19.0376C49.9533 19.0794 49.9956 19.1803 49.9751 19.2639L49.5872 21.0741C49.5605 21.1692 49.4844 21.2301 49.3933 21.268C49.2783 21.3257 49.1339 21.3682 49.0054 21.365L47.4537 21.365L47.1628 22.6904L47.1305 22.9166L46.5486 22.9166L46.5809 22.7227L47.4214 18.9729ZM50.363 18.9729L50.9449 18.9729L50.2661 21.9469L50.1368 22.6257L51.5268 22.6257C51.5413 22.7329 51.5731 22.8124 51.5914 22.9166L49.4903 22.9166L49.6519 22.1732L50.363 18.9729ZM47.9386 19.2962L47.5507 21.0418L49.0054 21.0418L49.3933 19.2962L47.9386 19.2962ZM43.3161 19.3608C43.1345 19.5882 42.9037 19.8565 42.6049 20.169L41.4735 21.365L42.7988 21.365L43.0251 20.3629C43.1247 19.9683 43.2267 19.625 43.3161 19.3608ZM41.4412 23.4339L42.0877 23.4339L42.0554 23.5955L41.5705 23.5955L41.5381 23.8218L41.926 23.8218L41.8937 23.9834L41.5058 23.9834L41.4088 24.3713L41.2472 24.3713L41.4412 23.4339ZM44.803 23.4339L44.8354 23.4339C44.8954 23.4324 44.9419 23.4421 44.997 23.4662C45.0449 23.4868 45.1051 23.5155 45.1263 23.5632C45.1465 23.6117 45.1372 23.6734 45.1263 23.7248L44.9647 23.7248C44.9709 23.693 44.9487 23.6557 44.9323 23.6278C44.928 23.6235 44.9374 23.5989 44.9323 23.5955C44.8992 23.5783 44.8403 23.5609 44.803 23.5632C44.7535 23.5598 44.7167 23.603 44.6737 23.6278C44.6456 23.6443 44.6178 23.661 44.6091 23.6925C44.6035 23.711 44.6286 23.7103 44.6414 23.7248C44.685 23.7505 44.7206 23.7821 44.7707 23.7894C44.8348 23.8026 44.9046 23.8283 44.9647 23.8541C45.0107 23.8748 45.0391 23.9059 45.0616 23.9511C45.0808 23.9959 45.0733 24.0331 45.0616 24.0804C45.049 24.1332 45.0334 24.2017 44.997 24.242C44.9575 24.2872 44.9232 24.3164 44.8677 24.339C44.8085 24.3636 44.7378 24.3713 44.6737 24.3713C44.6049 24.3738 44.543 24.3661 44.4798 24.339C44.4276 24.3152 44.3731 24.2623 44.3505 24.2097C44.3281 24.1547 44.3375 24.1059 44.3505 24.048L44.3505 24.0157L44.5121 24.0157L44.5121 24.048C44.5073 24.0793 44.5007 24.1156 44.5121 24.145C44.524 24.1696 44.5516 24.1668 44.5768 24.1773C44.6128 24.1934 44.6343 24.2108 44.6737 24.2097C44.7109 24.21 44.7681 24.2223 44.803 24.2097C44.8312 24.2004 44.8467 24.166 44.8677 24.145C44.8842 24.1279 44.895 24.1036 44.9 24.0804C44.905 24.0638 44.9077 24.0636 44.9 24.048C44.8868 24.0303 44.8566 24.0222 44.8354 24.0157L44.7061 23.9511C44.6498 23.9394 44.5954 23.9129 44.5444 23.8864C44.5056 23.8653 44.4653 23.8621 44.4474 23.8218C44.4321 23.7821 44.4368 23.7336 44.4474 23.6925C44.4587 23.6417 44.4773 23.5695 44.5121 23.5308C44.5503 23.4877 44.6197 23.4863 44.6737 23.4662C44.7246 23.4471 44.7488 23.4353 44.803 23.4339ZM46.3223 23.4339L46.3547 23.4339L46.4516 23.4339L46.484 23.4339L46.4193 23.5632L46.4193 23.5955L46.3547 23.5632C46.3367 23.5619 46.3057 23.5866 46.29 23.5955C46.279 23.6119 46.2607 23.6406 46.2577 23.6601L46.387 23.6601L46.3547 23.8218L46.2254 23.8218L46.0961 24.3713L45.9344 24.3713L46.0637 23.8218L45.9668 23.8218L45.9991 23.6601L46.0961 23.6601C46.1005 23.6407 46.0961 23.6278 46.0961 23.6278C46.1022 23.5924 46.1117 23.5627 46.1284 23.5308C46.1477 23.4992 46.193 23.4843 46.2254 23.4662C46.2567 23.4494 46.2868 23.4358 46.3223 23.4339ZM46.7102 23.4339L46.6779 23.6601L46.7749 23.6601L46.7426 23.8218L46.6456 23.8218L46.5486 24.1773C46.5486 24.1773 46.5486 24.2 46.5486 24.2097L46.5809 24.2097L46.6456 24.2097L46.6456 24.339L46.6456 24.3713L46.5163 24.3713C46.4809 24.3737 46.4502 24.3563 46.4193 24.339C46.3956 24.3243 46.3926 24.3016 46.387 24.2743C46.3852 24.2669 46.3872 24.2497 46.387 24.242C46.3888 24.2028 46.3774 24.1831 46.387 24.145L46.4516 23.8218L46.387 23.8218L46.4193 23.6601L46.484 23.6601L46.5163 23.5308L46.6779 23.4662L46.7102 23.4339ZM42.0554 23.6601L42.217 23.6601L42.217 23.6925C42.2244 23.6869 42.243 23.6966 42.2493 23.6925C42.2709 23.6794 42.2888 23.6631 42.314 23.6601C42.3557 23.6598 42.4096 23.6679 42.4433 23.6925L42.4756 23.7248L42.3786 23.8541L42.3463 23.8541C42.3294 23.843 42.3018 23.8219 42.2816 23.8218C42.2636 23.8223 42.2639 23.8434 42.2493 23.8541C42.2311 23.8659 42.1946 23.8672 42.1847 23.8864C42.1651 23.9234 42.1612 23.9749 42.1523 24.0157L42.0877 24.3713L41.926 24.3713L42.0554 23.6601ZM42.7988 23.6601L42.8312 23.6601C42.9134 23.6547 42.976 23.6909 43.0251 23.7571C43.0556 23.8028 43.0913 23.8638 43.0898 23.9187C43.0895 23.9565 43.0658 23.9789 43.0574 24.0157L43.0574 24.0804L42.5726 24.0804C42.5726 24.0901 42.5726 24.1037 42.5726 24.1127C42.5707 24.1426 42.5883 24.1525 42.6049 24.1773C42.6119 24.1874 42.6272 24.2026 42.6372 24.2097C42.6583 24.2225 42.6771 24.2427 42.7019 24.242C42.7348 24.2424 42.7714 24.2279 42.7988 24.2097C42.8297 24.1886 42.8452 24.1452 42.8635 24.1127L43.0574 24.1127L43.0251 24.145C42.9939 24.2103 42.9564 24.2671 42.8958 24.3067C42.8338 24.3459 42.7753 24.3723 42.7019 24.3713C42.6156 24.3783 42.5293 24.3423 42.4756 24.2743C42.4271 24.1961 42.4147 24.1032 42.4433 24.0157C42.4621 23.9143 42.4966 23.8269 42.5726 23.7571C42.6334 23.7029 42.7176 23.666 42.7988 23.6601ZM43.5423 23.6601L43.5747 23.6601C43.6569 23.6547 43.7195 23.6909 43.7686 23.7571C43.7991 23.8028 43.8348 23.8638 43.8333 23.9187C43.8329 23.9555 43.8093 23.98 43.8009 24.0157L43.8009 24.0804L43.3484 24.0804L43.3484 24.1127C43.3494 24.1357 43.3355 24.1583 43.3484 24.1773C43.3505 24.1809 43.3458 24.2065 43.3484 24.2097C43.3717 24.2333 43.4122 24.2438 43.4454 24.242C43.4783 24.2424 43.5149 24.2279 43.5423 24.2097C43.5733 24.1888 43.5888 24.1453 43.607 24.1127L43.8009 24.1127L43.7686 24.145C43.7374 24.2103 43.6999 24.2671 43.6393 24.3067C43.5772 24.3459 43.5188 24.3723 43.4454 24.3713C43.3146 24.3878 43.1709 24.3081 43.1544 24.1773C43.1529 24.162 43.1529 24.1281 43.1544 24.1127C43.1537 24.1026 43.1537 24.0904 43.1544 24.0804C43.1565 24.0552 43.1811 24.0403 43.1867 24.0157C43.2051 23.9145 43.2406 23.827 43.3161 23.7571C43.3772 23.7025 43.4606 23.6664 43.5423 23.6601ZM45.5788 23.6601L45.6112 23.6601C45.6947 23.6546 45.7855 23.6915 45.8375 23.7571C45.8868 23.8336 45.8973 23.929 45.8698 24.0157C45.8565 24.0881 45.8142 24.1488 45.7728 24.2097C45.6987 24.3091 45.5735 24.3707 45.4495 24.3713C45.3657 24.3771 45.3068 24.341 45.2556 24.2743C45.2237 24.2287 45.1889 24.1683 45.1909 24.1127C45.191 24.075 45.2147 24.0525 45.2233 24.0157C45.2425 23.9061 45.297 23.793 45.3849 23.7248C45.443 23.6818 45.5068 23.666 45.5788 23.6601ZM46.8072 23.6601L46.9689 23.6601L47.0012 24.048L47.1951 23.6601L47.3568 23.6601L47.3568 24.0804C47.3612 24.0722 47.583 23.6601 47.583 23.6601L47.7447 23.6601L47.3568 24.3713L47.2275 24.3713L47.1951 23.9834L47.0012 24.3713L46.8395 24.3713L46.8072 23.6601ZM48.1002 23.6601L48.1326 23.6601C48.1793 23.6581 48.2177 23.6771 48.2619 23.6925C48.2937 23.7033 48.3406 23.729 48.3589 23.7571C48.374 23.7837 48.36 23.7912 48.3589 23.8218L48.3589 23.9187L48.3265 24.0804C48.3114 24.1407 48.3019 24.2126 48.2942 24.2743C48.2926 24.2965 48.2879 24.3177 48.2942 24.339L48.2942 24.3713L48.1326 24.3713L48.1326 24.339C48.1308 24.3276 48.1325 24.3182 48.1326 24.3067C48.1034 24.3256 48.068 24.3264 48.0356 24.339C47.9932 24.3539 47.9512 24.3712 47.9063 24.3713C47.8434 24.3771 47.7901 24.3506 47.7447 24.3067C47.7192 24.2773 47.6785 24.2485 47.68 24.2097C47.6801 24.1933 47.7087 24.161 47.7123 24.145C47.7198 24.1101 47.7228 24.1086 47.7447 24.0804C47.7657 24.0526 47.7793 24.001 47.8093 23.9834C47.8382 23.9665 47.8738 23.9589 47.9063 23.9511L48.0033 23.9511C48.0637 23.9449 48.1386 23.9347 48.1972 23.9187C48.198 23.9153 48.196 23.8897 48.1972 23.8864C48.2046 23.866 48.2046 23.8422 48.1972 23.8218C48.1715 23.8061 48.1303 23.8192 48.1002 23.8218C48.0656 23.8195 48.034 23.8056 48.0033 23.8218C47.9762 23.8415 47.9518 23.8879 47.9386 23.9187L47.777 23.9187L47.777 23.8864C47.7941 23.8429 47.8095 23.7911 47.8416 23.7571C47.876 23.725 47.9261 23.7066 47.9709 23.6925C48.0098 23.6795 48.0593 23.6626 48.1002 23.6601ZM48.5851 23.6601L48.7468 23.6601L48.7468 23.6925C48.7678 23.6793 48.7867 23.663 48.8114 23.6601L48.8437 23.6601C48.8858 23.6598 48.9066 23.6678 48.9407 23.6925L48.973 23.7248L48.8761 23.8541C48.8596 23.843 48.8312 23.8219 48.8114 23.8218C48.7929 23.8224 48.7619 23.8435 48.7468 23.8541C48.7292 23.8662 48.724 23.8674 48.7144 23.8864C48.695 23.9234 48.6912 23.9749 48.6821 24.0157L48.5851 24.3713L48.4235 24.3713L48.5851 23.6601ZM49.2963 23.6601L49.3286 23.6601C49.4108 23.6547 49.5058 23.6909 49.5549 23.7571C49.5856 23.8027 49.589 23.8638 49.5872 23.9187C49.5866 23.9565 49.596 23.979 49.5872 24.0157L49.5549 24.0804L49.1023 24.0804C49.1023 24.0901 49.1023 24.1037 49.1023 24.1127C49.1008 24.1425 49.1183 24.1524 49.1347 24.1773C49.1373 24.1809 49.1316 24.2065 49.1347 24.2097C49.1577 24.2294 49.2014 24.2433 49.2316 24.242C49.2646 24.2424 49.2689 24.2279 49.2963 24.2097C49.327 24.1885 49.3749 24.1451 49.3933 24.1127L49.5549 24.1127L49.5549 24.145C49.5236 24.2102 49.4538 24.2671 49.3933 24.3067C49.3312 24.3459 49.2728 24.3723 49.1993 24.3713C49.1137 24.3782 49.0259 24.3421 48.973 24.2743C48.9244 24.1962 48.9129 24.1035 48.9407 24.0157C48.9589 23.9145 49.0268 23.827 49.1023 23.7571C49.1639 23.7021 49.214 23.6661 49.2963 23.6601ZM42.7988 23.7894C42.7587 23.7913 42.7325 23.8281 42.7019 23.8541C42.6761 23.8761 42.6499 23.8873 42.6372 23.9187L42.9281 23.9187C42.9293 23.8979 42.9055 23.8726 42.8958 23.8541C42.8762 23.8212 42.837 23.7863 42.7988 23.7894ZM43.5423 23.7894C43.5022 23.7913 43.476 23.8281 43.4454 23.8541C43.4197 23.8763 43.3936 23.8874 43.3807 23.9187L43.6716 23.9187C43.6748 23.8898 43.6597 23.8425 43.6393 23.8218C43.6179 23.801 43.5721 23.7878 43.5423 23.7894ZM49.3286 23.7894C49.2875 23.7908 49.2308 23.8277 49.1993 23.8541C49.1739 23.8765 49.1478 23.8875 49.1347 23.9187L49.4256 23.9187C49.4269 23.8979 49.4355 23.8725 49.4256 23.8541C49.4057 23.8214 49.3667 23.7866 49.3286 23.7894ZM45.5788 23.8218C45.5389 23.8275 45.4786 23.8261 45.4495 23.8541C45.405 23.8996 45.3952 23.9528 45.3849 24.0157C45.3786 24.0424 45.353 24.0853 45.3526 24.1127C45.348 24.1466 45.3612 24.185 45.3849 24.2097C45.4071 24.232 45.4504 24.2434 45.4819 24.242C45.5293 24.2415 45.5776 24.2108 45.6112 24.1773C45.6558 24.1308 45.6655 24.0794 45.6758 24.0157C45.6934 23.9651 45.6989 23.9025 45.6758 23.8541C45.6553 23.8223 45.6166 23.8192 45.5788 23.8218ZM48.1649 24.048C48.1188 24.0603 48.0506 24.0744 48.0033 24.0804C47.9718 24.084 47.9364 24.1029 47.9063 24.1127C47.8919 24.1188 47.8842 24.1332 47.874 24.145C47.8644 24.1556 47.8773 24.1634 47.874 24.1773C47.874 24.1796 47.874 24.2074 47.874 24.2097C47.893 24.2247 47.9146 24.2451 47.9386 24.242C47.9743 24.2426 48.0035 24.2253 48.0356 24.2097C48.0657 24.1944 48.1136 24.1729 48.1326 24.145C48.1501 24.1185 48.1578 24.0791 48.1649 24.048Z",
          fillRule: "evenodd",
          opacity: "1",
          stroke: "none",
        }),
        a.createElement("path", {
          d: "M53.6132 25.2529C53.1607 25.2456 52.734 25.0409 52.445 24.6927C52.3995 24.6299 52.3602 24.5628 52.3277 24.4925L52.268 24.3431L52.4816 24.2602L52.5372 24.4002C52.5631 24.4554 52.5941 24.5081 52.6299 24.5575C52.8767 24.8509 53.2398 25.0214 53.6233 25.0239L54.126 25.0239C54.289 25.0102 54.4511 24.9874 54.6115 24.9556C54.9321 24.891 55.2472 24.8014 55.5538 24.6878C55.8089 24.5952 56.067 24.4858 56.3206 24.3636C56.9298 24.0688 57.5101 23.7176 58.0539 23.3145C58.2406 23.1771 58.4231 23.0341 58.6014 22.8854C58.7617 22.752 58.9155 22.6163 59.0626 22.4783C59.4153 22.1526 59.7126 21.7715 59.9426 21.35C60.1121 21.0094 60.1409 20.7368 60.024 20.5825C59.931 20.4794 59.7979 20.4215 59.6591 20.4238L59.3562 20.4007L59.5993 20.218C60.4688 19.5656 60.9614 18.7928 60.7945 18.3394C60.7402 18.2012 60.6258 18.0954 60.4837 18.0522C60.4025 18.0243 60.318 18.007 60.2324 18.0007L59.9653 18.0007C59.4877 18.0486 59.0223 18.1801 58.5902 18.3891L58.4894 18.1829C58.9506 17.9606 59.4475 17.8215 59.9571 17.7721L60.2421 17.7721C60.3509 17.7793 60.4583 17.8011 60.5614 17.8367C60.7677 17.9024 60.9327 18.0586 61.0096 18.261C61.1963 18.779 60.7679 19.5588 59.9306 20.2479C60.0394 20.2851 60.1348 20.3534 60.2051 20.4444C60.3799 20.6752 60.3594 21.0236 60.1461 21.4527C59.906 21.8986 59.5937 22.3016 59.2217 22.6453C59.0704 22.7864 58.913 22.925 58.7497 23.0609C58.5682 23.2126 58.382 23.3585 58.1913 23.4987C57.6358 23.91 57.043 24.2685 56.4207 24.5694C56.1637 24.6939 55.9011 24.8048 55.633 24.9022C55.3151 25.0199 54.9886 25.1127 54.6563 25.1797C54.4842 25.2138 54.3103 25.238 54.1353 25.2521L53.6132 25.2529Z",
          fillRule: "evenodd",
          opacity: "1",
          stroke: "none",
        }),
        a.createElement("path", {
          d: "M8.15618 8.48408L7.27643 9.07687C6.70239 8.2369 5.74428 7.74207 4.72705 7.76023C3.8493 7.73512 3.00087 8.07735 2.3862 8.70446C1.77154 9.33157 1.44637 10.1867 1.48906 11.0638C1.44637 11.9408 1.77154 12.7959 2.3862 13.423C3.00087 14.0502 3.8493 14.3924 4.72705 14.3673C5.74244 14.3901 6.70017 13.8967 7.27097 13.0566L8.13235 13.6851C7.35121 14.7828 6.07371 15.4181 4.72705 15.3786C3.56744 15.423 2.44152 14.9835 1.61865 14.1653C0.795772 13.347 0.349968 12.2236 0.387884 11.0638C0.349967 9.90391 0.795772 8.78048 1.61864 7.96222C2.44152 7.14396 3.56744 6.70448 4.72705 6.74892C6.09323 6.69543 7.39008 7.35165 8.15618 8.48408ZM18.0826 11.0638C18.1206 12.2236 17.6748 13.347 16.8519 14.1653C16.029 14.9835 14.9031 15.423 13.7435 15.3786C12.5839 15.4229 11.4582 14.9833 10.6354 14.1651C9.81264 13.3469 9.3669 12.2235 9.40481 11.0638C9.36675 9.90396 9.81244 8.78052 10.6352 7.96224C11.458 7.14397 12.5839 6.70447 13.7435 6.74892C14.9031 6.70448 16.029 7.14396 16.8519 7.96222C17.6748 8.78048 18.1206 9.90391 18.0826 11.0638ZM10.506 11.0638C10.4632 11.9408 10.7882 12.7959 11.4028 13.423C12.0174 14.0501 12.8658 14.3924 13.7435 14.3673C14.6212 14.3924 15.4696 14.0501 16.0842 13.423C16.6988 12.7959 17.0238 11.9408 16.981 11.0638C17.0238 10.1867 16.6988 9.33161 16.0842 8.70448C15.4696 8.07736 14.6212 7.73511 13.7435 7.76023C12.8658 7.73511 12.0174 8.07736 11.4028 8.70448C10.7882 9.33161 10.4632 10.1867 10.506 11.0638ZM27.0628 15.2589L26.1111 15.2589L21.0471 8.67572L21.0411 15.253L19.9876 15.253L19.9876 6.86856L20.9393 6.86856L26.0083 13.4518L26.0083 6.87452L27.0618 6.87452L27.0628 15.2589ZM34.918 8.52628C34.1876 8.02402 33.3221 7.75486 32.4356 7.75427C31.2089 7.75427 30.3351 8.30486 30.3351 9.20844C30.3351 9.96854 30.9755 10.3578 32.2321 10.5132L32.9689 10.603C34.3868 10.7768 35.6002 11.3512 35.6002 12.8292C35.6002 14.4993 34.0859 15.3726 32.2738 15.3726C31.083 15.3817 29.9222 14.999 28.9703 14.2834L29.5447 13.4458C30.3277 14.0477 31.2877 14.3737 32.2753 14.3732C33.5259 14.3732 34.5094 13.8644 34.5094 12.9191C34.5094 12.1411 33.8094 11.7702 32.5047 11.6084L31.7267 11.5126C30.3445 11.3453 29.2443 10.7048 29.2443 9.27447C29.2443 7.65845 30.6806 6.75487 32.4461 6.75487C33.5227 6.73597 34.5781 7.05625 35.4626 7.67037L34.918 8.52628ZM45.6999 11.0638C45.7378 12.2236 45.292 13.347 44.4691 14.1653C43.6463 14.9835 42.5203 15.423 41.3607 15.3786C40.2012 15.4229 39.0754 14.9833 38.2526 14.1651C37.4299 13.3469 36.9841 12.2235 37.0221 11.0638C36.984 9.90396 37.4297 8.78052 38.2525 7.96224C39.0753 7.14397 40.2012 6.70447 41.3607 6.74892C42.5203 6.70448 43.6463 7.14396 44.4691 7.96222C45.292 8.78048 45.7378 9.90391 45.6999 11.0638ZM38.1232 11.0638C38.0805 11.9407 38.4056 12.7958 39.0202 13.4229C39.6348 14.0499 40.4831 14.3922 41.3607 14.3673C42.2384 14.3924 43.0868 14.0501 43.7014 13.423C44.316 12.7959 44.641 11.9408 44.5982 11.0638C44.641 10.1867 44.316 9.33161 43.7014 8.70448C43.0868 8.07736 42.2384 7.73511 41.3607 7.76023C40.4831 7.73526 39.6348 8.07756 39.0202 8.70465C38.4056 9.33174 38.0805 10.1868 38.1232 11.0638ZM53.4592 15.253L47.6058 15.253L47.6058 6.87452L48.6594 6.87452L48.6594 14.2536L53.4592 14.2536L53.4592 15.253ZM60.8383 15.253L54.8896 15.253L54.8896 6.87452L60.7787 6.87452L60.7787 7.86151L55.9431 7.86151L55.9431 10.537L60.6233 10.537L60.6233 11.5299L55.9431 11.5299L55.9431 14.265L60.8383 14.265L60.8383 15.253ZM7.78532 0.655715L9.06423 0.655715L9.06423 4.40259L7.78532 4.40259L7.78532 0.655715ZM6.24675 0.690964L3.6502 2.2767C3.61342 2.29958 3.56683 2.29958 3.53005 2.2767L0.933506 0.690964C0.877247 0.657914 0.813072 0.640755 0.747826 0.641317L0.744847 0.641317C0.54825 0.641317 0.388877 0.80069 0.388877 0.997287L0.388877 4.40507L1.6668 4.40507L1.6668 2.78806C1.66688 2.74183 1.69188 2.69922 1.7322 2.6766C1.77252 2.65397 1.8219 2.65482 1.86141 2.67884L3.31657 3.56901C3.46003 3.65676 3.64013 3.65848 3.78524 3.57348L5.32033 2.67288C5.35988 2.64981 5.40874 2.6496 5.44849 2.67234C5.48823 2.69508 5.51281 2.73731 5.51296 2.7831L5.51296 4.40507L6.79138 4.40507L6.79138 0.997287C6.79138 0.80069 6.63201 0.641317 6.43541 0.641317L6.43243 0.641317C6.36717 0.640679 6.30298 0.657844 6.24675 0.690964ZM15.4548 0.654722L14.1575 0.654722L14.1575 2.374C14.1576 2.41897 14.134 2.46065 14.0955 2.48383C14.0569 2.50701 14.0091 2.50829 13.9694 2.4872L10.6078 0.696425C10.5562 0.669136 10.4988 0.654822 10.4404 0.654722C10.2439 0.654722 10.0845 0.814095 10.0845 1.01069L10.0845 4.40259L11.3713 4.40259L11.3713 2.71061C11.3715 2.66574 11.3951 2.62421 11.4336 2.60115C11.4721 2.5781 11.5199 2.57687 11.5595 2.59791L14.9355 4.38819C14.9869 4.4154 15.0442 4.42955 15.1023 4.4294C15.1968 4.42953 15.2874 4.39207 15.3542 4.32528C15.421 4.2585 15.4584 4.16788 15.4583 4.07343L15.4583 0.654722L15.4548 0.654722ZM16.4929 4.4016L16.4929 0.654722L17.0887 0.654722L17.0887 4.4016L16.4929 4.4016ZM20.5129 4.48401C18.9296 4.48401 17.8066 3.73285 17.8066 2.52841C17.8066 1.32397 18.9366 0.572804 20.5129 0.572804C22.0892 0.572804 23.2266 1.32397 23.2266 2.52841C23.2266 3.73285 22.1165 4.48401 20.5129 4.48401ZM20.5129 1.07325C19.3357 1.07325 18.4277 1.58759 18.4277 2.52841C18.4277 3.46922 19.3342 3.98307 20.5129 3.98307C21.6915 3.98307 22.604 3.47568 22.604 2.52841C22.604 1.58114 21.6905 1.07325 20.5129 1.07325Z",
          fillRule: "evenodd",
          opacity: "1",
          stroke: "none",
        })
      )
    );
  },
  Wr = function (e) {
    return a.createElement(
      "svg",
      T({}, e, {
        className: "min-icon",
        fill: "currentcolor",
        xmlns: "http://www.w3.org/2000/svg",
        width: "113.208",
        height: "29.822",
        viewBox: "0 0 113.208 29.822",
      }),
      a.createElement(
        "g",
        { transform: "translate(-1.655)" },
        a.createElement("path", {
          d: "M12.721-19.038A8.7,8.7,0,0,0,7.609-20.59c-2.992,0-5.427,1.532-5.427,4.27,0,2.424,1.866,3.51,4.209,3.794l1.319.162c2.211.274,3.4.9,3.4,2.221,0,1.6-1.664,2.465-3.783,2.465A7.586,7.586,0,0,1,2.7-9.25L1.726-7.83a9.2,9.2,0,0,0,5.6,1.846c3.073,0,5.64-1.481,5.64-4.311,0-2.505-2.059-3.479-4.463-3.773L7.254-14.22c-2.13-.264-3.215-.923-3.215-2.211,0-1.532,1.481-2.465,3.56-2.465a7.431,7.431,0,0,1,4.209,1.308Zm13.338-1.349H14.587v1.694h4.849V-6.187h1.785V-18.693h4.838Zm7.668,0H31.506l-5.772,14.2h1.856l1.552-3.875H36.03l1.562,3.875h1.917Zm-1.136,1.765,2.759,6.867H29.822Zm21.281-1.765H52.087V-9.24L43.5-20.4H41.883V-6.187h1.785l.01-11.147L52.259-6.176h1.613Zm4.047,0v14.2h5.417c4.585,0,7.526-2.779,7.526-7.1s-2.942-7.1-7.526-7.1Zm5.417,1.694c3.723,0,5.65,2.171,5.65,5.406,0,3.215-1.927,5.406-5.65,5.406H59.7V-18.693Zm16.686-1.694H77.8l-5.772,14.2h1.856l1.552-3.875h6.887l1.562,3.875H85.8Zm-1.136,1.765,2.759,6.867H76.117Zm9.291-1.765v14.2h1.785v-6.127h1.664L96.5-6.187h2.211l-5-6.127h.112c3.043,0,4.96-1.582,4.96-4.047,0-2.587-1.765-4.027-4.97-4.027Zm5.6,1.674c2.059,0,3.155.781,3.155,2.353,0,1.592-1.065,2.424-3.155,2.424H89.962v-4.777Zm8.165-1.674v14.2h5.417c4.585,0,7.526-2.779,7.526-7.1s-2.942-7.1-7.526-7.1Zm5.417,1.694c3.723,0,5.65,2.171,5.65,5.406,0,3.215-1.927,5.406-5.65,5.406h-3.631V-18.693Z",
          transform: "translate(-0.021 35.806)",
        }),
        a.createElement("path", {
          d: "M15.951.127h2.468V7.417H15.951Zm-2.993.1L7.949,3.288a.224.224,0,0,1-.233,0L2.707.228a.69.69,0,0,0-.359-.1H2.342a.688.688,0,0,0-.687.687V7.407H4.122V4.269a.247.247,0,0,1,.376-.21L7.305,5.777a.879.879,0,0,0,.9.009l2.963-1.738a.249.249,0,0,1,.246,0,.245.245,0,0,1,.125.212V7.406H14.01V.813a.686.686,0,0,0-.686-.687h-.006a.686.686,0,0,0-.359.1Zm17.769-.1h-2.5V3.445a.245.245,0,0,1-.12.211.248.248,0,0,1-.243.006L21.374.208a.693.693,0,0,0-.323-.08h0a.688.688,0,0,0-.687.687V7.409h2.483V4.094a.247.247,0,0,1,.362-.218L29.719,7.33a.686.686,0,0,0,.322.08h0a.688.688,0,0,0,.687-.687Zm1.941,7.289V.127h1.136V7.417Zm7.819.13c-3.056,0-5.223-1.449-5.223-3.773S37.447,0,40.488,0s5.236,1.449,5.236,3.774-2.141,3.773-5.236,3.773Zm0-6.58c-2.272,0-4.022.992-4.022,2.807s1.749,2.807,4.022,2.807,4.035-.979,4.035-2.807S42.761.967,40.488.967Z",
          transform: "translate(0)",
        })
      )
    );
  },
  $r = function (e) {
    return a.createElement(
      "svg",
      T({}, e, {
        className: "min-icon",
        fill: "currentcolor",
        xmlns: "http://www.w3.org/2000/svg",
        width: "121.755",
        height: "28.546",
        viewBox: "0 0 121.755 28.546",
      }),
      a.createElement(
        "g",
        { transform: "translate(-1.655)" },
        a.createElement("path", {
          d: "M12.537-8.4H4.594v-4.437h7.593v-1.612H4.594v-4.34H12.44v-1.6H2.886V-6.8h9.651ZM27.5-20.4H25.79V-9.725l-8.224-10.68H16.022V-6.8h1.709l.01-10.671,8.214,10.68H27.5Zm13.312,0H29.829v1.621H34.47V-6.8h1.709V-18.774h4.631ZM52.782-8.4H44.84v-4.437h7.593v-1.612H44.84v-4.34h7.845v-1.6H43.131V-6.8h9.651ZM56.268-20.4V-6.8h1.709v-5.865h1.592L64.239-6.8h2.117l-4.787-5.865h.107c2.913,0,4.748-1.515,4.748-3.874,0-2.476-1.689-3.855-4.758-3.855Zm5.36,1.6c1.971,0,3.02.748,3.02,2.253,0,1.524-1.019,2.321-3.02,2.321H57.977v-4.573ZM74.609-12.24c3.068,0,4.806-1.534,4.806-4.078S77.677-20.4,74.609-20.4H69.444V-6.8h1.709V-12.24Zm-.039-6.544c2.01,0,3.068.816,3.068,2.466s-1.058,2.466-3.068,2.466H71.153v-4.932ZM82.328-20.4V-6.8h1.709v-5.865h1.592L90.3-6.8h2.117l-4.787-5.865h.107c2.913,0,4.748-1.515,4.748-3.874,0-2.476-1.689-3.855-4.758-3.855Zm5.36,1.6c1.971,0,3.02.748,3.02,2.253,0,1.524-1.02,2.321-3.02,2.321H84.037v-4.573Zm9.525-1.6H95.5V-6.8h1.709ZM110.835-19.1a8.323,8.323,0,0,0-4.894-1.486c-2.864,0-5.195,1.466-5.195,4.088,0,2.321,1.787,3.359,4.029,3.631l1.262.155c2.117.262,3.253.864,3.253,2.126,0,1.534-1.592,2.359-3.622,2.359a7.261,7.261,0,0,1-4.428-1.5l-.932,1.359a8.808,8.808,0,0,0,5.36,1.767c2.942,0,5.4-1.418,5.4-4.127,0-2.4-1.971-3.33-4.272-3.612l-1.194-.146c-2.039-.252-3.078-.884-3.078-2.117,0-1.466,1.418-2.359,3.408-2.359a7.113,7.113,0,0,1,4.029,1.253ZM123.817-8.4h-7.942v-4.437h7.593v-1.612h-7.593v-4.34h7.845v-1.6h-9.554V-6.8h9.651Z",
          transform: "translate(-0.407 35.155)",
        }),
        a.createElement("path", {
          d: "M15.34.122H17.7V7.1H15.34Zm-2.865.1L7.68,3.147a.214.214,0,0,1-.223,0L2.662.218a.66.66,0,0,0-.344-.1H2.313a.659.659,0,0,0-.658.658V7.091H4.017v-3a.236.236,0,0,1,.36-.2L7.063,5.53a.841.841,0,0,0,.865.009l2.836-1.664a.239.239,0,0,1,.236,0,.234.234,0,0,1,.12.2V7.089h2.361V.778a.656.656,0,0,0-.657-.658h-.006a.656.656,0,0,0-.344.1Zm17.009-.1h-2.4V3.3a.234.234,0,0,1-.115.2.237.237,0,0,1-.232.006L20.531.2a.663.663,0,0,0-.309-.077h0a.659.659,0,0,0-.658.658V7.092h2.377V3.919a.236.236,0,0,1,.347-.208l6.235,3.307a.656.656,0,0,0,.308.077h0a.659.659,0,0,0,.658-.658ZM31.342,7.1V.122H32.43V7.1Zm7.485.125c-2.925,0-5-1.387-5-3.611S35.916,0,38.827,0,43.84,1.387,43.84,3.613s-2.05,3.611-5.012,3.611Zm0-6.3c-2.175,0-3.85.95-3.85,2.687S36.652,6.3,38.827,6.3s3.862-.937,3.862-2.687S41,.925,38.827.925Z",
          transform: "translate(0)",
        })
      )
    );
  },
  Qr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
        },
        a,
        { viewBox: "0 0 59.801 10.087" }
      ),
      e.createElement("path", {
        d: "M48.083-9.8H46.55L42.567,0h1.281l1.071-2.674h4.753L50.75,0h1.323ZM47.3-8.582l1.9,4.739H45.388ZM59.353-9.947A4.9,4.9,0,0,0,54.278-4.9,4.894,4.894,0,0,0,59.3.14c2.968,0,4.774-2.247,4.774-5.1,0-.1-.007-.2-.014-.308H59.78v1.148h2.94A3.173,3.173,0,0,1,59.3-1.036,3.673,3.673,0,0,1,55.566-4.9a3.686,3.686,0,0,1,3.787-3.864,3.723,3.723,0,0,1,2.891,1.316l.9-.875A4.969,4.969,0,0,0,59.353-9.947ZM71.428-3.92c2.212,0,3.465-1.106,3.465-2.94S73.64-9.8,71.428-9.8H67.7V0h1.232V-3.92ZM71.4-8.638c1.449,0,2.212.588,2.212,1.778S72.849-5.082,71.4-5.082H68.936V-8.638ZM85.239-1.169H79.625V-9.8H78.393V0h6.846ZM93.695-6.65H92.484l-2.24,5.5-2.233-5.5H86.765l2.8,6.657h1.344Zm5.194-3.29a3.5,3.5,0,0,0-3.045,1.484l.854.721a2.581,2.581,0,0,1,2.114-1.1c1.183,0,2.1.637,2.1,1.666,0,1.12-.924,1.68-2.093,1.68h-1.26V-4.4h1.26c1.274,0,2.31.616,2.31,1.715,0,1.169-.994,1.722-2.177,1.722a3.409,3.409,0,0,1-2.443-1.008l-.756.8A4.139,4.139,0,0,0,98.98.14c1.736,0,3.388-.9,3.388-2.779a2.417,2.417,0,0,0-1.708-2.31,2.342,2.342,0,0,0,1.484-2.275C102.144-8.841,100.835-9.94,98.889-9.94Z",
        transform: "translate(-42.567 9.947)",
        fill: "#bccee6",
      })
    );
  },
  Yr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
        },
        a,
        { viewBox: "0 0 117.104 38.414" }
      ),
      e.createElement(
        "g",
        {
          id: "ConsoleAGPLV3-Logo-License",
          transform: "translate(6804.003 4884.319)",
        },
        e.createElement(
          "g",
          { id: "agpl-logo", transform: "translate(-6804.003 -4884.319)" },
          e.createElement(
            "g",
            { id: "g2", transform: "translate(0 0)" },
            e.createElement("path", {
              id: "path1",
              d: "M111.872,1769.742l-8.188,35.724h79.124a7.037,7.037,0,0,1-5.3-2.53,5.366,5.366,0,0,1-.522-.89c-.094-.232-.183-.464-.272-.7a7.08,7.08,0,0,1-.287-2.464,17.963,17.963,0,0,1,3.281-8.475,45.721,45.721,0,0,1,9.041-9.865c.857-.711,1.743-1.414,2.671-2.1,1.146-.843,2.3-1.62,3.458-2.347a43.96,43.96,0,0,1,12.271-5.51,47.417,47.417,0,0,0-11.631,5.878c-.144.1-.285.2-.427.294a52.021,52.021,0,0,0-5.974,4.812c-5.636,5.3-8.615,10.79-7.261,14.007a4,4,0,0,0,.346.632c1.455,2.139,5.06,2.51,9.63,1.361.311-.077.622-.166.942-.258a37.1,37.1,0,0,0,4.605-1.691c.384-.17.771-.344,1.162-.53.04-.019.078-.037.118-.059,5.038-2.5,8.909-5.383,9.748-7.113a1.076,1.076,0,0,0,.1-.949c-.6-1.213-4.782-.394-9.851,1.8-.407.176-.819.358-1.236.551.339-.314.692-.63,1.052-.942.574-.495,1.169-.978,1.8-1.456a35.749,35.749,0,0,1,2.979-2.031c4.619-3.485,6.954-6.781,6.467-8a.861.861,0,0,0-.589-.486c-.963-.306-2.72.059-4.855.935a36.256,36.256,0,0,0-5.834,3.126l-.28.184-.051.03-.986.653.566-1.037a17.819,17.819,0,0,1,3.914-4.634,27.8,27.8,0,0,1,4.215-3.017c.582-.34,1.162-.656,1.744-.94s1.191-.55,1.773-.781a20.5,20.5,0,0,1,4.951-1.623c-.128,0-4.194.438-4.194.438H111.872Zm63.778.051c-.231,3.521.452,8.679,2,14.4q.413,1.53.9,3.106.307.971.633,1.911c-.127.187-.255.373-.375.56a19.777,19.777,0,0,0-3.347,8.2,50.449,50.449,0,0,1-1.78-8.909q-.148-1.366-.228-2.7c-.381-6.461.462-12.317,2.192-16.568Zm-38.571,4.583c.044,0,.087,0,.132,0h8.7a3.042,3.042,0,0,1,1.729.419.985.985,0,0,1,.464,1.089l-1.037,4.686H144l1.008-4.561h-7.68l-2.773,12.536-1,4.539h7.673l.007-.029,1.538-6.946h-3.6l.346-1.567h6.672l-1.913,8.667a1.226,1.226,0,0,1-.132.345,1.916,1.916,0,0,1-.816.736,4.054,4.054,0,0,1-1.913.419h-8.7a3.037,3.037,0,0,1-1.729-.419.97.97,0,0,1-.463-1.081l3.833-17.326a1.661,1.661,0,0,1,.942-1.089c.019-.009.04-.011.059-.022a4.014,4.014,0,0,1,1.722-.4Zm13.639,0h10.954a3.037,3.037,0,0,1,1.721.419.98.98,0,0,1,.471,1.089l-2.045,9.24a1.658,1.658,0,0,1-.949,1.081,4.025,4.025,0,0,1-1.905.427h-7.96l-1.538,6.938-.25,1.14h-3l.228-1.03,4.274-19.3Zm15.133,0h3l-3.4,15.353-.743,3.355h7.18c.075.55.163,1.091.258,1.626h-10.8l.853-3.856Zm-12.492,1.633-1.994,8.99h7.482l1.986-8.99Zm-15.954,21.218c.029,0,.059,0,.088,0a2.111,2.111,0,0,1,.9.176,1.068,1.068,0,0,1,.552.545,1.329,1.329,0,0,1,.074.787l-.022.11h-.861l.007-.1a.679.679,0,0,0-.081-.471.471.471,0,0,0-.037-.044.518.518,0,0,0-.074-.059,1.063,1.063,0,0,0-.552-.118,1.284,1.284,0,0,0-.728.17.647.647,0,0,0-.294.382.283.283,0,0,0,.059.272l.007.007a2.009,2.009,0,0,0,.728.258,4.948,4.948,0,0,1,.949.3,1.121,1.121,0,0,1,.544.523,1.145,1.145,0,0,1,.059.729,1.669,1.669,0,0,1-.39.728,1.973,1.973,0,0,1-.743.529,2.506,2.506,0,0,1-.956.191,2.384,2.384,0,0,1-1.03-.191,1.184,1.184,0,0,1-.6-.61,1.5,1.5,0,0,1-.074-.89l.022-.1h.846l-.007.1a.93.93,0,0,0,.051.471.578.578,0,0,0,.294.28,1.365,1.365,0,0,0,.589.117,1.626,1.626,0,0,0,.559-.1.986.986,0,0,0,.39-.236.653.653,0,0,0,.169-.316.348.348,0,0,0-.022-.257.537.537,0,0,0-.272-.2l-.721-.214a3.2,3.2,0,0,1-.831-.294,1.029,1.029,0,0,1-.449-.486,1.043,1.043,0,0,1-.037-.639,1.555,1.555,0,0,1,.36-.7,1.8,1.8,0,0,1,.721-.493A2.532,2.532,0,0,1,137.406,1797.228Zm7.725.014c.047,0,.09,0,.14,0l.53.059.177.015-.257.654-.052.1-.4-.037a.469.469,0,0,0-.265.058l-.015.016a.164.164,0,0,0-.029.028.7.7,0,0,0-.11.279s-.015.064-.029.118h.633l-.162.729h-.618c-.047.212-.625,2.8-.625,2.8h-.853s.555-2.49.625-2.8h-.493l.162-.729h.485c.024-.1.059-.228.059-.228a1.807,1.807,0,0,1,.177-.522,1.11,1.11,0,0,1,.4-.4,1.238,1.238,0,0,1,.522-.147Zm2.038.037-.28,1.257h.552l-.162.729h-.552c-.045.2-.4,1.773-.4,1.773s-.029.189-.029.243c0,0,0,.005,0,.007s0,.007,0,.007h.007l.088.007.4-.029-.044.656.007.117-.581.066a.944.944,0,0,1-.522-.117.524.524,0,0,1-.235-.339.548.548,0,0,1-.015-.118,3.014,3.014,0,0,1,.088-.6s.309-1.386.375-1.677h-.4l.162-.729h.4c.038-.17.169-.75.169-.75l.684-.361.28-.146Zm-27.109.028h3.31l-.184.824h-2.42c-.038.166-.189.844-.243,1.089h2.1l-.184.824h-2.1c-.045.206-.449,2.024-.449,2.024H119Zm4.436,1.163a.905.905,0,0,1,.1,0,1,1,0,0,1,.6.2l.118.081-.456.75-.125-.088a.532.532,0,0,0-.294-.089.46.46,0,0,0-.257.089.641.641,0,0,0-.221.243,2.32,2.32,0,0,0-.221.6l-.4,1.81h-.853l.787-3.532h.794s-.027.107-.037.148c.038-.029.077-.068.11-.089A.9.9,0,0,1,124.5,1798.471Zm2.531,0c.051,0,.1,0,.155,0a1.247,1.247,0,0,1,1.081.5,1.363,1.363,0,0,1,.228.794,2.659,2.659,0,0,1-.066.567l-.066.257h-2.4c0,.051-.007.1-.007.148a.7.7,0,0,0,.118.433.534.534,0,0,0,.132.133.652.652,0,0,0,.36.1.845.845,0,0,0,.471-.14,1.235,1.235,0,0,0,.383-.419h.912l-.081.177a2.017,2.017,0,0,1-.721.823,1.945,1.945,0,0,1-1.067.3,1.327,1.327,0,0,1-1.148-.5,1.609,1.609,0,0,1-.162-1.34,2.439,2.439,0,0,1,.75-1.353,1.906,1.906,0,0,1,1.126-.478Zm3.833,0c.051,0,.1,0,.154,0a1.247,1.247,0,0,1,1.081.5,1.363,1.363,0,0,1,.228.794,2.591,2.591,0,0,1-.066.559l-.066.264h-2.4c0,.034-.005.064-.007.1,0,.012,0,.031,0,.044s0,0,0,.008c0,.034,0,.069.007.1a.635.635,0,0,0,.11.331c.012.017.023.037.037.052a.6.6,0,0,0,.456.176.839.839,0,0,0,.471-.14,1.233,1.233,0,0,0,.383-.419h.92l-.088.177a2.017,2.017,0,0,1-.721.823,1.945,1.945,0,0,1-1.067.3,1.226,1.226,0,0,1-1.376-1.3c0-.049,0-.1.007-.154a2.667,2.667,0,0,1,.059-.383,2.439,2.439,0,0,1,.743-1.353A1.926,1.926,0,0,1,130.859,1798.471Zm10.439,0c.053,0,.1,0,.155,0a1.309,1.309,0,0,1,1.111.493,1.569,1.569,0,0,1,.177,1.324,2.724,2.724,0,0,1-.427,1.038,2.023,2.023,0,0,1-1.611.816,1.289,1.289,0,0,1-1.111-.5,1.317,1.317,0,0,1-.235-.8,2.523,2.523,0,0,1,.066-.566,2.307,2.307,0,0,1,.853-1.42,1.983,1.983,0,0,1,1.023-.383Zm12.926,0c.062,0,.12,0,.184,0a1.873,1.873,0,0,1,.706.1.772.772,0,0,1,.4.308.845.845,0,0,1,.11.449l-.088.538-.162.728a7.979,7.979,0,0,0-.177.941.948.948,0,0,0,.037.339l.059.192h-.868l-.037-.111a1.047,1.047,0,0,1-.015-.176,2.594,2.594,0,0,1-.478.243,2.071,2.071,0,0,1-.677.118,1.114,1.114,0,0,1-.876-.309.782.782,0,0,1-.2-.544,1.191,1.191,0,0,1,.029-.25,1.225,1.225,0,0,1,.228-.493,1.371,1.371,0,0,1,.4-.354,1.775,1.775,0,0,1,.478-.191l.522-.088a5.716,5.716,0,0,0,.92-.169.458.458,0,0,1,.015-.051.47.47,0,0,0-.007-.324s-.012-.012-.015-.015a.391.391,0,0,0-.029-.029.722.722,0,0,0-.441-.1.974.974,0,0,0-.515.11.955.955,0,0,0-.316.4h-.89l.081-.177a1.881,1.881,0,0,1,.39-.6,1.61,1.61,0,0,1,.618-.36A2.445,2.445,0,0,1,154.223,1798.471Zm3.73,0a.9.9,0,0,1,.1,0,1.015,1.015,0,0,1,.6.2l.11.081-.456.75-.125-.088a.514.514,0,0,0-.287-.089.488.488,0,0,0-.265.089.642.642,0,0,0-.213.243,2.4,2.4,0,0,0-.221.6l-.4,1.81h-.853l.787-3.532h.795s-.02.107-.029.148a1.309,1.309,0,0,1,.11-.089A.857.857,0,0,1,157.953,1798.471Zm2.523,0c.051,0,.1,0,.154,0a1.244,1.244,0,0,1,1.082.5,1.346,1.346,0,0,1,.228.794,2.7,2.7,0,0,1-.074.567l-.059.257h-2.4c0,.051-.015.1-.015.148a.719.719,0,0,0,.118.433c.012.017.031.037.044.052l.029.029a.614.614,0,0,0,.427.147.845.845,0,0,0,.471-.14,1.259,1.259,0,0,0,.383-.419h.92l-.088.177a2.035,2.035,0,0,1-.721.823,1.945,1.945,0,0,1-1.067.3,1.312,1.312,0,0,1-1.14-.5,1.617,1.617,0,0,1-.169-1.34,2.43,2.43,0,0,1,.743-1.353A1.933,1.933,0,0,1,160.477,1798.471Zm-12.882.066h.875s.108,2.1.11,2.126c.035-.075.063-.137.066-.147l.964-1.979h.8s.074,2.07.074,2.082c.024-.042,1.1-2.082,1.1-2.082h.868l-1.913,3.532h-.787s-.076-1.914-.081-2.024l-.986,2.024h-.809Zm-20.555.67a.935.935,0,0,0-.559.221,1.084,1.084,0,0,0-.3.419h1.449c0-.026.007-.057.007-.081a.612.612,0,0,0-.066-.309.517.517,0,0,0-.486-.25Zm3.833,0a.936.936,0,0,0-.559.221,1.11,1.11,0,0,0-.3.419h1.449c0-.026.007-.057.007-.081a.587.587,0,0,0-.066-.309.629.629,0,0,0-.074-.1.548.548,0,0,0-.412-.154Zm29.647,0a.949.949,0,0,0-.581.221,1.137,1.137,0,0,0-.3.419h1.442c0-.026.007-.057.007-.081a.588.588,0,0,0-.066-.309.525.525,0,0,0-.486-.25Zm-19.275.015a.979.979,0,0,0-.544.266,1.593,1.593,0,0,0-.434.853,1.94,1.94,0,0,0-.052.419.723.723,0,0,0,.1.4.735.735,0,0,0,.059.074.572.572,0,0,0,.434.169.928.928,0,0,0,.647-.272,1.633,1.633,0,0,0,.434-.868,1.047,1.047,0,0,0-.044-.794.534.534,0,0,0-.486-.244C141.32,1799.221,141.282,1799.217,141.246,1799.221Zm13.293,1.288a5.367,5.367,0,0,1-.721.14,2.463,2.463,0,0,0-.471.1.527.527,0,0,0-.2.139.433.433,0,0,0-.1.192.515.515,0,0,0-.007.08s0,.005,0,.007,0,.017,0,.023a.289.289,0,0,0,.007.037s.006.011.007.014,0,.016.007.022.011.016.015.022a.322.322,0,0,0,.022.03.465.465,0,0,0,.346.1,1.169,1.169,0,0,0,.53-.118,1.028,1.028,0,0,0,.39-.338A1.363,1.363,0,0,0,154.54,1800.508Zm-44.936-5.9,19.744-20.385h3.224l-4.767,20.385h-2.652l1.354-5.868H118.23l-5.625,5.868h-3m10.637-7.968h6.769l1.249-5.118q.756-3.044,1.456-5.074-1.4,1.75-3.7,4.157l-5.775,6.034",
              transform: "translate(-103.684 -1768.232)",
              fill: "#fff",
            }),
            e.createElement("path", {
              id: "path2",
              d: "M631.974,1799.956c-2.732-.236-4.789-1.228-6-2.873a6.137,6.137,0,0,1-.6-1.028c-.113-.269-.209-.518-.307-.768l1.1-.427c.094.242.188.482.286.719a5.018,5.018,0,0,0,.475.807c1.017,1.382,2.734,2.189,5.1,2.395l2.581,0a22.475,22.475,0,0,0,2.5-.352,32.267,32.267,0,0,0,4.839-1.375c1.309-.477,2.635-1.036,3.938-1.663a55.682,55.682,0,0,0,8.9-5.387c.944-.694,1.89-1.437,2.811-2.2q1.236-1.028,2.369-2.085a22.658,22.658,0,0,0,4.519-5.8c.87-1.748,1.018-3.148.418-3.941a2.475,2.475,0,0,0-1.874-.815l-1.556-.12,1.249-.937c4.467-3.351,6.994-7.319,6.145-9.648a2.5,2.5,0,0,0-1.6-1.474,5.106,5.106,0,0,0-1.291-.264l-1.372,0a21.024,21.024,0,0,0-7.061,1.994l-.518-1.057a22.329,22.329,0,0,1,7.537-2.112h1.464a6.307,6.307,0,0,1,1.641.332,3.639,3.639,0,0,1,2.3,2.179c.968,2.657-1.24,6.664-5.541,10.2a3.012,3.012,0,0,1,1.41,1.01c.9,1.185.792,2.975-.3,5.176a23.549,23.549,0,0,1-4.763,6.125q-1.166,1.088-2.425,2.135c-.939.783-1.9,1.539-2.867,2.247a56.9,56.9,0,0,1-9.089,5.5c-1.338.644-2.7,1.219-4.044,1.709a33.472,33.472,0,0,1-5.016,1.424,23.259,23.259,0,0,1-2.675.371Z",
              transform: "translate(-553.088 -1761.542)",
              fill: "#fff",
            })
          )
        )
      )
    );
  },
  Kr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 99.785 10.08",
          className: "min-icon",
          fill: "currentcolor",
        },
        a
      ),
      e.createElement("path", {
        d: "M8.351-1.155H2.625v-3.2H8.1V-5.516H2.625V-8.645H8.281V-9.8H1.393V0H8.351ZM20.538-9.8H19.306v7.693l-5.929-7.7H12.264V0H13.5L13.5-7.693l5.922,7.7h1.113Zm11,0H23.618v1.169h3.346V0H28.2V-8.631h3.339ZM41.566-1.155H35.84v-3.2h5.474V-5.516H35.84V-8.645H41.5V-9.8H34.608V0h6.958ZM45.479-9.8V0h1.232V-4.228h1.148L51.226,0h1.526L49.3-4.228h.077c2.1,0,3.423-1.092,3.423-2.793,0-1.785-1.218-2.779-3.43-2.779Zm3.864,1.155c1.421,0,2.177.539,2.177,1.624s-.735,1.673-2.177,1.673H46.711v-3.3ZM60.1-3.92c2.212,0,3.465-1.106,3.465-2.94S62.314-9.8,60.1-9.8H56.378V0H57.61V-3.92Zm-.028-4.718c1.449,0,2.212.588,2.212,1.778s-.763,1.778-2.212,1.778H57.61V-8.638ZM67.067-9.8V0H68.3V-4.228h1.148L72.814,0H74.34L70.889-4.228h.077c2.1,0,3.423-1.092,3.423-2.793,0-1.785-1.218-2.779-3.43-2.779Zm3.864,1.155c1.421,0,2.177.539,2.177,1.624s-.735,1.673-2.177,1.673H68.3v-3.3ZM79.2-9.8H77.966V0H79.2Zm11.221.931A6,6,0,0,0,86.891-9.94c-2.065,0-3.745,1.057-3.745,2.947,0,1.673,1.288,2.422,2.9,2.618l.91.112c1.526.189,2.345.623,2.345,1.533,0,1.106-1.148,1.7-2.611,1.7A5.235,5.235,0,0,1,83.5-2.114l-.672.98A6.35,6.35,0,0,0,86.695.14c2.121,0,3.892-1.022,3.892-2.975,0-1.729-1.421-2.4-3.08-2.6l-.861-.1c-1.47-.182-2.219-.637-2.219-1.526,0-1.057,1.022-1.7,2.457-1.7a5.128,5.128,0,0,1,2.9.9Zm10.759,7.714H95.452v-3.2h5.474V-5.516H95.452V-8.645h5.656V-9.8H94.22V0h6.958Z",
        transform: "translate(-1.393 9.94)",
        fill: "#bccee6",
      })
    );
  },
  Xr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 87.892 10.08",
          className: "min-icon",
          fill: "currentcolor",
        },
        a
      ),
      e.createElement("path", {
        d: "M8.421-8.869A6,6,0,0,0,4.893-9.94c-2.065,0-3.745,1.057-3.745,2.947,0,1.673,1.288,2.422,2.905,2.618l.91.112c1.526.189,2.345.623,2.345,1.533,0,1.106-1.148,1.7-2.611,1.7A5.235,5.235,0,0,1,1.505-2.114l-.672.98A6.35,6.35,0,0,0,4.7.14C6.818.14,8.589-.882,8.589-2.835c0-1.729-1.421-2.4-3.08-2.6l-.861-.1c-1.47-.182-2.219-.637-2.219-1.526,0-1.057,1.022-1.7,2.457-1.7a5.128,5.128,0,0,1,2.905.9Zm10.6-.931H11.109v1.169h3.346V0h1.232V-8.631h3.339Zm6.692,0H24.185L20.2,0h1.281l1.071-2.674h4.753L28.385,0h1.323Zm-.784,1.218,1.9,4.739H23.023ZM41.02-9.8H39.788v7.693l-5.929-7.7H32.746V0h1.232l.007-7.693,5.922,7.7H41.02Zm4.193,0V0h3.738c3.164,0,5.194-1.918,5.194-4.9s-2.03-4.9-5.194-4.9Zm3.738,1.169c2.569,0,3.9,1.5,3.9,3.731s-1.33,3.731-3.9,3.731H46.445V-8.631ZM61.866-9.8H60.333L56.35,0h1.281L58.7-2.674h4.753L64.533,0h1.323Zm-.784,1.218,1.9,4.739H59.171ZM68.894-9.8V0h1.232V-4.228h1.148L74.641,0h1.526L72.716-4.228h.077c2.1,0,3.423-1.092,3.423-2.793C76.216-8.806,75-9.8,72.786-9.8Zm3.864,1.155c1.421,0,2.177.539,2.177,1.624S74.2-5.348,72.758-5.348H70.126v-3.3ZM79.793-9.8V0h3.738c3.164,0,5.194-1.918,5.194-4.9s-2.03-4.9-5.194-4.9Zm3.738,1.169c2.569,0,3.9,1.5,3.9,3.731s-1.33,3.731-3.9,3.731H81.025V-8.631Z",
        transform: "translate(-0.833 9.94)",
        fill: "#aec1d9",
      })
    );
  },
  Jr = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
        },
        a,
        { viewBox: "0 0 77.654 32.135" }
      ),
      e.createElement(
        "g",
        { id: "g2", transform: "translate(1.364)" },
        e.createElement("path", {
          id: "path1",
          d: "M109.019,1769.589l-5.334,23.273h51.548a4.585,4.585,0,0,1-3.456-1.649,3.482,3.482,0,0,1-.34-.58c-.061-.15-.119-.3-.177-.456a4.613,4.613,0,0,1-.187-1.605,11.7,11.7,0,0,1,2.138-5.521,29.773,29.773,0,0,1,5.89-6.427c.558-.464,1.135-.921,1.74-1.366.747-.55,1.5-1.056,2.253-1.529a28.644,28.644,0,0,1,7.994-3.59,30.9,30.9,0,0,0-7.577,3.829c-.094.063-.186.128-.278.192a33.879,33.879,0,0,0-3.892,3.134c-3.672,3.452-5.612,7.03-4.73,9.125a2.636,2.636,0,0,0,.225.412c.948,1.394,3.3,1.635,6.274.886.2-.051.4-.108.613-.168a24.153,24.153,0,0,0,3-1.1c.25-.11.5-.224.757-.345l.077-.038c3.282-1.631,5.8-3.507,6.35-4.635a.7.7,0,0,0,.067-.618c-.39-.79-3.115-.256-6.417,1.174-.265.115-.534.233-.805.36.221-.205.451-.411.685-.614.374-.323.762-.638,1.174-.949a23.412,23.412,0,0,1,1.941-1.323c3.009-2.27,4.53-4.418,4.213-5.215a.56.56,0,0,0-.383-.316,5.536,5.536,0,0,0-3.163.609,23.646,23.646,0,0,0-3.8,2.037l-.182.12-.034.019-.642.427.369-.676a11.606,11.606,0,0,1,2.55-3.02,18.123,18.123,0,0,1,2.746-1.965c.379-.222.757-.428,1.136-.613s.776-.358,1.155-.508a13.345,13.345,0,0,1,3.226-1.057c-.083,0-2.732.285-2.732.285h-63.99Zm41.55.034a31.158,31.158,0,0,0,1.3,9.384q.269,1,.589,2.022.2.633.412,1.246c-.083.122-.166.243-.244.364a12.887,12.887,0,0,0-2.181,5.339,32.871,32.871,0,0,1-1.16-5.8q-.1-.89-.149-1.759a25.555,25.555,0,0,1,1.428-10.793Zm-25.128,2.986H131.2a1.979,1.979,0,0,1,1.126.273.641.641,0,0,1,.3.709l-.676,3.053h-2l.657-2.971h-5l-1.807,8.167-.652,2.957h5l0-.019,1-4.524H126.8l.225-1.021h4.347l-1.246,5.646a.8.8,0,0,1-.086.225,1.246,1.246,0,0,1-.532.479,2.643,2.643,0,0,1-1.246.273H122.6a1.979,1.979,0,0,1-1.126-.273.632.632,0,0,1-.3-.7l2.5-11.287a1.081,1.081,0,0,1,.613-.709c.012-.007.026-.008.038-.014a2.612,2.612,0,0,1,1.122-.259Zm8.886,0h7.136a1.976,1.976,0,0,1,1.121.273.638.638,0,0,1,.307.709l-1.332,6.02a1.078,1.078,0,0,1-.618.7,2.621,2.621,0,0,1-1.241.278h-5.186l-1,4.52-.163.743h-1.955l.149-.671,2.785-12.576Zm9.859,0h1.955l-2.214,10-.484,2.185h4.678c.049.359.106.711.168,1.059h-7.036l.556-2.511Zm-8.138,1.064-1.3,5.857h4.874l1.294-5.857ZM125.653,1787.5h.058a1.374,1.374,0,0,1,.585.115.694.694,0,0,1,.359.355.866.866,0,0,1,.048.513l-.014.072h-.561l0-.067a.441.441,0,0,0-.053-.307.255.255,0,0,0-.072-.067.694.694,0,0,0-.359-.077.837.837,0,0,0-.474.11.422.422,0,0,0-.192.249.185.185,0,0,0,.038.177l0,0a1.31,1.31,0,0,0,.474.168,3.21,3.21,0,0,1,.618.2.731.731,0,0,1,.355.34.746.746,0,0,1,.038.475,1.081,1.081,0,0,1-.254.474,1.286,1.286,0,0,1-.484.345,1.635,1.635,0,0,1-.623.125,1.556,1.556,0,0,1-.671-.125.773.773,0,0,1-.388-.4.976.976,0,0,1-.048-.58l.014-.067h.551l0,.067a.6.6,0,0,0,.034.307.371.371,0,0,0,.192.182.878.878,0,0,0,.383.077,1.051,1.051,0,0,0,.364-.062.642.642,0,0,0,.254-.153.426.426,0,0,0,.11-.206.227.227,0,0,0-.014-.168.351.351,0,0,0-.177-.129l-.47-.139a2.106,2.106,0,0,1-.542-.192.672.672,0,0,1-.292-.316.682.682,0,0,1-.024-.417,1.014,1.014,0,0,1,.235-.455,1.179,1.179,0,0,1,.47-.321A1.648,1.648,0,0,1,125.653,1787.5Zm5.032.01c.03,0,.059,0,.091,0l.345.038.115.01-.168.427-.034.067-.264-.024a.3.3,0,0,0-.173.038l-.01.01a.172.172,0,0,0-.019.019.452.452,0,0,0-.072.182s-.01.042-.019.077h.412l-.105.474h-.4l-.407,1.826h-.556s.361-1.622.407-1.826h-.321l.105-.474h.316c.015-.066.038-.149.038-.149a1.17,1.17,0,0,1,.115-.34.725.725,0,0,1,.264-.259.805.805,0,0,1,.34-.1Zm1.328.024-.182.82h.359l-.105.474h-.359c-.029.132-.259,1.155-.259,1.155s-.019.123-.019.158c0,0,0,0,0,0s0,0,0,0h0l.058,0,.264-.019-.029.427,0,.077-.379.043a.614.614,0,0,1-.34-.077.339.339,0,0,1-.153-.22.363.363,0,0,1-.01-.077,1.959,1.959,0,0,1,.058-.388s.2-.9.244-1.093h-.264l.105-.474h.264c.025-.11.11-.489.11-.489l.446-.235.182-.1Zm-17.661.019h2.157l-.12.537h-1.577c-.025.109-.123.55-.158.709h1.366l-.12.537h-1.366c-.029.134-.292,1.318-.292,1.318h-.58Zm2.89.757a.512.512,0,0,1,.067,0,.652.652,0,0,1,.388.129l.077.053-.3.489-.081-.058a.35.35,0,0,0-.192-.058.3.3,0,0,0-.168.058.423.423,0,0,0-.144.158,1.513,1.513,0,0,0-.144.393l-.259,1.179h-.556l.513-2.3h.518s-.018.07-.024.1c.025-.019.05-.044.072-.058A.591.591,0,0,1,117.242,1788.305Zm1.649,0c.033,0,.066,0,.1,0a.812.812,0,0,1,.7.326.89.89,0,0,1,.149.518,1.73,1.73,0,0,1-.043.369l-.043.168H118.2c0,.032,0,.067,0,.1a.459.459,0,0,0,.077.283.358.358,0,0,0,.086.086.426.426,0,0,0,.235.062.555.555,0,0,0,.307-.091.81.81,0,0,0,.249-.273h.594l-.053.115a1.316,1.316,0,0,1-.47.537,1.269,1.269,0,0,1-.695.2.864.864,0,0,1-.748-.326,1.047,1.047,0,0,1-.105-.872,1.59,1.59,0,0,1,.489-.882,1.238,1.238,0,0,1,.733-.311Zm2.5,0c.033,0,.066,0,.1,0a.812.812,0,0,1,.7.326.889.889,0,0,1,.149.518,1.687,1.687,0,0,1-.043.364l-.043.173h-1.562c0,.021,0,.041,0,.062s0,.02,0,.029,0,0,0,0c0,.023,0,.046,0,.067a.414.414,0,0,0,.072.216c.008.011.015.024.024.033a.389.389,0,0,0,.3.115.55.55,0,0,0,.307-.091.807.807,0,0,0,.249-.273h.6l-.057.115a1.316,1.316,0,0,1-.47.537,1.269,1.269,0,0,1-.695.2.8.8,0,0,1-.9-.848c0-.032,0-.067,0-.1a1.74,1.74,0,0,1,.038-.249,1.589,1.589,0,0,1,.484-.882,1.254,1.254,0,0,1,.738-.312Zm6.8,0c.034,0,.066,0,.1,0a.851.851,0,0,1,.724.321,1.022,1.022,0,0,1,.115.863,1.766,1.766,0,0,1-.278.676,1.321,1.321,0,0,1-1.05.532.839.839,0,0,1-.724-.326.858.858,0,0,1-.153-.522,1.647,1.647,0,0,1,.043-.369,1.5,1.5,0,0,1,.556-.925,1.294,1.294,0,0,1,.666-.249Zm8.421,0c.04,0,.078,0,.12,0a1.23,1.23,0,0,1,.46.067.508.508,0,0,1,.259.2.55.55,0,0,1,.072.292l-.057.35-.105.475a5.233,5.233,0,0,0-.115.613.617.617,0,0,0,.024.22l.038.125h-.566l-.024-.072a.682.682,0,0,1-.01-.115,1.7,1.7,0,0,1-.312.158,1.354,1.354,0,0,1-.441.077.726.726,0,0,1-.57-.2.51.51,0,0,1-.129-.355.772.772,0,0,1,.019-.163.8.8,0,0,1,.149-.321.9.9,0,0,1,.259-.23,1.163,1.163,0,0,1,.312-.125l.34-.057a3.732,3.732,0,0,0,.6-.11.293.293,0,0,1,.01-.033.306.306,0,0,0,0-.211l-.01-.01a.213.213,0,0,0-.019-.019.475.475,0,0,0-.288-.067.637.637,0,0,0-.335.072.626.626,0,0,0-.206.259h-.58l.053-.115a1.224,1.224,0,0,1,.254-.393,1.061,1.061,0,0,1,.4-.235,1.6,1.6,0,0,1,.4-.076Zm2.43,0a.513.513,0,0,1,.067,0,.662.662,0,0,1,.393.129l.072.053-.3.489-.081-.058a.339.339,0,0,0-.187-.058.317.317,0,0,0-.173.058.425.425,0,0,0-.139.158,1.57,1.57,0,0,0-.144.393l-.264,1.179h-.556l.513-2.3h.518s-.013.07-.019.1c.025-.019.049-.044.072-.058A.564.564,0,0,1,139.039,1788.305Zm1.644,0c.033,0,.066,0,.1,0a.81.81,0,0,1,.7.326.879.879,0,0,1,.149.518,1.755,1.755,0,0,1-.048.369l-.038.168h-1.562c0,.032-.01.067-.01.1a.469.469,0,0,0,.077.283c.008.011.02.024.029.033l.019.019a.4.4,0,0,0,.278.1.555.555,0,0,0,.307-.091.826.826,0,0,0,.249-.273h.6l-.058.115a1.328,1.328,0,0,1-.47.537,1.27,1.27,0,0,1-.695.2.855.855,0,0,1-.743-.326,1.052,1.052,0,0,1-.11-.872,1.584,1.584,0,0,1,.484-.882A1.256,1.256,0,0,1,140.683,1788.305Zm-8.392.043h.57s.07,1.365.072,1.385c.023-.049.041-.09.043-.1l.628-1.289h.522s.048,1.349.048,1.356c.015-.028.714-1.356.714-1.356h.566l-1.246,2.3H133.7s-.05-1.248-.053-1.318l-.642,1.318h-.527Zm-13.391.436a.606.606,0,0,0-.364.144.707.707,0,0,0-.2.273h.944c0-.017,0-.037,0-.053a.4.4,0,0,0-.043-.2.336.336,0,0,0-.316-.163H118.9Zm2.5,0a.606.606,0,0,0-.364.144.723.723,0,0,0-.2.273h.944c0-.017,0-.037,0-.053a.381.381,0,0,0-.043-.2.386.386,0,0,0-.048-.062.355.355,0,0,0-.268-.1H121.4Zm19.315,0a.618.618,0,0,0-.379.144.74.74,0,0,0-.2.273h.939c0-.017,0-.037,0-.053a.381.381,0,0,0-.043-.2.341.341,0,0,0-.316-.163h-.01Zm-12.557.01a.635.635,0,0,0-.355.172,1.038,1.038,0,0,0-.283.556,1.269,1.269,0,0,0-.034.273.472.472,0,0,0,.062.259.438.438,0,0,0,.038.048.372.372,0,0,0,.283.11.6.6,0,0,0,.422-.177,1.064,1.064,0,0,0,.283-.566.683.683,0,0,0-.029-.517.349.349,0,0,0-.316-.158A.589.589,0,0,0,128.155,1788.794Zm8.66.839a3.592,3.592,0,0,1-.47.091,1.627,1.627,0,0,0-.307.067.34.34,0,0,0-.129.091.285.285,0,0,0-.067.125.339.339,0,0,0,0,.053s0,0,0,0,0,.011,0,.014a.2.2,0,0,0,0,.024l0,.01a.15.15,0,0,0,0,.014l.01.014a.188.188,0,0,0,.014.019.3.3,0,0,0,.225.063.765.765,0,0,0,.345-.077.672.672,0,0,0,.254-.221A.891.891,0,0,0,136.816,1789.633Zm-29.275-3.843L120.4,1772.51h2.1L119.4,1785.79h-1.728l.882-3.823H113.16l-3.664,3.823h-1.955m6.93-5.191h4.41l.814-3.334q.493-1.984.948-3.307-.911,1.141-2.41,2.709l-3.762,3.932",
          transform: "translate(-103.684 -1768.606)",
          fill: "#07193e",
        }),
        e.createElement("path", {
          id: "path2",
          d: "M629.567,1786.568a5.185,5.185,0,0,1-3.908-1.872,4,4,0,0,1-.392-.669c-.073-.175-.136-.338-.2-.5l.715-.278c.061.157.122.314.186.468a3.234,3.234,0,0,0,.309.526,4.373,4.373,0,0,0,3.323,1.56h1.681a14.791,14.791,0,0,0,1.625-.229,21.089,21.089,0,0,0,3.153-.9c.853-.311,1.716-.676,2.566-1.084a36.317,36.317,0,0,0,5.8-3.51c.615-.452,1.231-.935,1.831-1.435q.805-.67,1.543-1.358a14.769,14.769,0,0,0,2.944-3.775c.567-1.139.663-2.051.272-2.568a1.61,1.61,0,0,0-1.221-.531l-1.014-.079.814-.61c2.91-2.184,4.556-4.768,4-6.286a1.628,1.628,0,0,0-1.04-.96,3.321,3.321,0,0,0-.841-.172h-.894a13.692,13.692,0,0,0-4.6,1.3l-.337-.689a14.546,14.546,0,0,1,4.91-1.376h.954a4.115,4.115,0,0,1,1.069.216,2.37,2.37,0,0,1,1.5,1.42c.63,1.731-.808,4.341-3.61,6.647a1.964,1.964,0,0,1,.918.658c.584.772.516,1.938-.2,3.372a15.329,15.329,0,0,1-3.1,3.99q-.76.708-1.58,1.391c-.612.51-1.241,1-1.868,1.464a37.085,37.085,0,0,1-5.922,3.583c-.872.419-1.758.794-2.635,1.113a21.86,21.86,0,0,1-3.268.927,15.365,15.365,0,0,1-1.743.242Z",
          transform: "translate(-578.174 -1761.542)",
          fill: "#07193e",
        })
      )
    );
  },
  ec = function (a) {
    return e.createElement(
      "svg",
      T({}, a, {
        className: "min-icon",
        fill: "currentcolor",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 550 350",
      }),
      e.createElement("metadata", { id: "metadata4860" }),
      e.createElement(
        "defs",
        { id: "defs4858" },
        e.createElement(
          "clipPath",
          { clipPathUnits: "userSpaceOnUse", id: "clipPath4882" },
          e.createElement("path", {
            d: "M 117,49 H 262 V 240 H 117 Z",
            id: "path4880",
          })
        )
      ),
      e.createElement(
        "g",
        {
          id: "g4862",
          transform: "matrix(1.3333333,0,0,1.3333333,0,-199.99999)",
        },
        e.createElement(
          "g",
          { id: "g5617", transform: "translate(-0.61796941,-4.3257855)" },
          e.createElement("path", {
            transform: "matrix(0.75000002,0,0,0.75000002,0,150)",
            id: "path5017",
            d: "M 106.41289,293.96864 C 70.04539,293.67237 34.537909,293.3758 27.507375,293.3096 L 14.724586,293.18923 75.914974,188.8693 C 109.56969,131.49334 137.22453,84.543112 137.37018,84.535469 c 0.40034,-0.02101 84.5549,148.389841 84.58064,149.162261 0.0123,0.3688 -7.67138,14.22492 -17.07481,30.79139 l -17.09715,30.12084 -7.62163,-0.0513 c -4.19189,-0.0282 -37.37684,-0.29372 -73.74434,-0.58999 z",
          }),
          e.createElement("path", {
            transform: "matrix(0.75000002,0,0,0.75000002,0,150)",
            id: "path5019",
            d: "m 231.52153,216.29609 c -1.78448,-2.78648 -56.30805,-96.43861 -56.30805,-96.71724 0,-0.37557 46.76629,-81.164403 47.28254,-81.680648 0.25121,-0.251211 54.29846,91.624688 56.25895,95.635598 0.25352,0.51868 -5.58291,11.22113 -22.82887,41.86203 -12.74321,22.64086 -23.30746,41.32406 -23.4761,41.51823 -0.16865,0.19416 -0.58646,-0.0839 -0.92847,-0.61797 z",
          }),
          e.createElement("path", {
            transform: "matrix(0.75000002,0,0,0.75000002,0,150)",
            id: "path5021",
            d: "m 188.85669,326.46569 c 0.087,-0.23351 27.87116,-49.19652 61.74268,-108.80668 l 61.58456,-108.38212 1.96842,3.38056 c 1.08262,1.85931 29.54627,50.37713 63.25256,107.81739 l 61.28415,104.43682 -1.65524,0.0945 c -0.91038,0.052 -43.18277,0.37347 -93.93866,0.71445 -50.75588,0.34098 -106.25889,0.74364 -123.34,0.89481 -21.25746,0.18813 -31.00669,0.14089 -30.89847,-0.14972 z",
          }),
          e.createElement("path", {
            transform: "matrix(0.75000002,0,0,0.75000002,0,150)",
            id: "path5023",
            d: "m 441.01638,296.1697 c -2.28982,-3.78012 -75.22429,-129.17288 -75.5565,-129.90068 -0.32741,-0.71732 3.48432,-7.56149 23.74743,-42.63989 13.27559,-22.98198 24.27489,-41.830698 24.44289,-41.886033 0.2706,-0.08913 126.68565,215.010973 126.46114,215.178533 -0.0495,0.0369 -22.18445,0.18265 -49.18885,0.32387 l -49.09891,0.25674 z",
          })
        ),
        e.createElement("path", {
          d: "",
          id: "path5031",
          transform: "matrix(0.75000002,0,0,0.75000002,0,150)",
        }),
        e.createElement("path", {
          d: "",
          id: "path5033",
          transform: "matrix(0.75000002,0,0,0.75000002,0,150)",
        }),
        e.createElement("path", {
          d: "",
          id: "path5039",
          transform: "matrix(0.75000002,0,0,0.75000002,0,150)",
        }),
        e.createElement("path", {
          d: "",
          id: "path5041",
          transform: "matrix(0.75000002,0,0,0.75000002,0,150)",
        })
      )
    );
  },
  ac = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          fill: "currentcolor",
          className: "min-icon",
          viewBox: "0 0 275 275",
          xmlns: "http://www.w3.org/2000/svg",
        },
        a
      ),
      e.createElement("defs", { id: "defs3736" }),
      e.createElement(
        "g",
        {
          transform: "matrix(1.3333333,0,0,-1.3333333,-286.36662,267.54837)",
          id: "g3740",
        },
        e.createElement("path", {
          d: "M 310.77497,185.02828 V 25.08918 5.02828 l 32,15.0609 v 180.5721 z",
          id: "path3746",
        }),
        e.createElement("path", {
          d: "m 421.59727,132.22848 4.417,-45.864 -61.883,13.464",
          id: "path3748",
        }),
        e.createElement("path", {
          d: "m 246.77497,73.53608 c 0,22.674 24.707,41.769 58.383,47.598 v 20.325 c -51.51,-6.226 -90.383,-34.267 -90.383,-67.923 0,-34.869 41.725,-63.709 96,-68.508 v 20.061 c -36.516,4.578 -64,24.528 -64,48.447 m 101.617,67.915 v -20.317 c 13.399,-2.319 25.385,-6.727 34.9511,-12.64 l 22.6269,13.984 c -15.42,9.531 -35.322,16.283 -57.578,18.973",
          id: "path3750",
        }),
        e.createElement("path", {
          d: "m 421.59727,132.22848 4.417,-45.864 -61.883,13.464",
          id: "path3766",
        }),
        e.createElement("path", {
          d: "M 310.77497,185.02828 V 25.08918 5.02828 l 32,15.0609 v 180.5721 z",
          id: "path3764",
        }),
        e.createElement("path", {
          d: "m 246.77497,73.53608 c 0,22.674 24.707,41.769 58.383,47.598 v 20.325 c -51.51,-6.226 -90.383,-34.267 -90.383,-67.923 0,-34.869 41.725,-63.709 96,-68.508 v 20.061 c -36.516,4.578 -64,24.528 -64,48.447 m 101.617,67.915 v -20.317 c 13.399,-2.319 25.385,-6.727 34.9511,-12.64 l 22.6269,13.984 c -15.42,9.531 -35.322,16.283 -57.578,18.973",
        })
      )
    );
  },
  tc = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement("polygon", {
        points:
          "118.6 2.54 154.49 75.25 234.74 86.91 176.67 143.52 190.38 223.44 118.6 185.71 46.82 223.44 60.53 143.52 2.46 86.91 82.71 75.25 118.6 2.54",
      }),
      e.createElement("path", {
        d: "M116.44,3.8l12.23,24.78L148,67.83c1.4,2.84,2.64,5.86,4.24,8.59.69,1.18,1.59,1.25,2.73,1.42l4.87.7,41.32,6,32.35,4.7.52.07L233,85.15l-19.79,19.29L181.83,135c-2.28,2.22-4.71,4.36-6.87,6.7-1,1.12-.73,2.31-.51,3.6l.84,4.93,7.06,41.15,5.53,32.22.08.51,3.68-2.82-24.46-12.86-38.75-20.37c-2.83-1.48-5.62-3.07-8.5-4.47-1.43-.69-2.4-.13-3.59.49l-4.42,2.33L75,205.83,46,221l-.47.24,3.67,2.82,4.67-27.23,7.4-43.15c.54-3.15,1.13-6.3,1.63-9.46.26-1.64-.46-2.34-1.44-3.3l-3.58-3.49L28,108.33,4.61,85.51l-.38-.36-1.1,4.17,27.35-4,43.31-6.29,6.44-.94c1-.15,2.06-.21,3-.44,1.26-.3,1.64-1.24,2.13-2.24L87.58,71l18.48-37.44L120.52,4.27l.24-.47a2.57,2.57,0,0,0-.9-3.42,2.52,2.52,0,0,0-3.42.89L104.31,25.84,85,65l-4.44,9,1.5-1.15L54.93,76.78,11.72,83.06,1.8,84.5c-1.92.28-2.33,3-1.11,4.18l19.62,19.13,31.27,30.48,7.18,7-.64-2.43-4.63,27-7.38,43-1.7,9.88a2.54,2.54,0,0,0,3.67,2.82l24.25-12.75L111,192.53l8.87-4.67h-2.52l24.25,12.75,38.65,20.32,8.87,4.67a2.54,2.54,0,0,0,3.68-2.82l-4.64-27-7.38-43-1.69-9.88-.65,2.43,19.62-19.12,31.28-30.48,7.17-7c1.23-1.19.81-3.9-1.1-4.18l-27.11-3.94-43.22-6.28-9.92-1.44,1.5,1.15L144.52,49.42,125.19,10.26l-4.43-9C119.33-1.61,115,.92,116.44,3.8Z",
      })
    );
  },
  nc = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement("path", {
        d: "M172.07,136.15c-5.91-7.02-8.83-14.66-6.34-24.08,1.2-4.53-1.18-8.5-5.24-10.85-6.26-3.64-9.79-8.84-10.93-16.01-.83-5.19-4.34-8.35-9.52-9.18-6.83-1.09-11.85-4.46-15.38-10.44-2.96-5.02-7.01-6.65-12.76-5.32-8.79,2.04-15.91-1.18-22.42-6.64h-6.88c-7.01,5.93-14.68,8.79-24.06,6.31-4.59-1.21-8.51,1.19-10.87,5.22-3.65,6.26-8.84,9.82-16.02,10.94-5.04,.79-8.27,4.15-9.1,9.1-1.22,7.31-4.86,12.57-11.29,16.27-3.89,2.24-6.09,6.23-4.94,10.58,2.49,9.4-.4,17.07-6.32,24.1v6.88c5.96,7.02,8.77,14.7,6.32,24.1-1.2,4.57,1.26,8.51,5.28,10.85,6.28,3.65,9.75,8.87,10.91,16.02,.84,5.19,4.39,8.31,9.56,9.15,6.81,1.11,11.9,4.44,15.35,10.48,2.41,4.23,6.39,6.8,11.11,5.57,9.42-2.45,17.06,.37,24.06,6.35h6.88c7.01-5.92,14.65-8.83,24.06-6.34,4.57,1.21,8.49-1.22,10.86-5.24,3.67-6.23,8.87-9.81,16.05-10.91,4.85-.74,8.2-3.91,8.99-8.69,1.25-7.64,4.99-13.07,11.71-16.96,3.68-2.12,5.75-6.14,4.61-10.33-2.56-9.4,.36-17.05,6.32-24.06v-6.88Zm-40.57,9.57h-39.33v39.48h-12.27v-39.48H40.57v-12.26h39.33v-39.48h12.27v39.48h39.33v12.26Z",
        style: { fill: "#07193e" },
      }),
      e.createElement(
        "g",
        { id: "Grupo_2537", transform: "translate(12.323 0)" },
        e.createElement(
          "g",
          { id: "Elipse_623", transform: "translate(-0.323 -0.249)" },
          e.createElement("circle", {
            cx: "179.04",
            cy: "66.03",
            r: "66.03",
            style: { fill: "#4ccb92" },
          }),
          e.createElement("path", {
            d: "M179.05,132.07c-36.42,0-66.04-29.62-66.04-66.03S142.63,0,179.05,0s66.03,29.62,66.03,66.03-29.63,66.03-66.03,66.03Zm0-122.63c-31.21,0-56.61,25.39-56.61,56.6s25.39,56.6,56.61,56.6,56.6-25.39,56.6-56.6-25.39-56.6-56.6-56.6Z",
            style: { fill: "#fff" },
          })
        ),
        e.createElement(
          "g",
          { id: "check", transform: "translate(2.934 4.069)" },
          e.createElement(
            "g",
            { id: "Trazado_7261" },
            e.createElement("path", {
              d: "M197.68,42.49c2.27-2.32,5.99-2.35,8.3-.08s2.35,5.99,.08,8.3l-31.23,39.05c-2.19,2.39-5.9,2.54-8.29,.35-.07-.06-.13-.13-.2-.19l-20.7-20.71c-2.38-2.2-2.52-5.91-.32-8.29,2.2-2.38,5.91-2.52,8.29-.32,.11,.1,.22,.21,.32,.32l16.39,16.38,27.18-34.62,.16-.17h.02Z",
            })
          )
        )
      )
    );
  },
  lc = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 12 12.001",
        },
        a
      ),
      e.createElement("path", {
        id: "InspectIcon",
        d: "M-2191.428,31a1.876,1.876,0,0,1-1.715-2V27.5h1.285V29a.47.47,0,0,0,.429.5h6.857a.47.47,0,0,0,.428-.5V27.5h1.286V29a1.877,1.877,0,0,1-1.715,2ZM-2194,26V24h12v2Zm2.142-3.5h-1.284V21a1.876,1.876,0,0,1,1.715-2h6.857a1.876,1.876,0,0,1,1.715,2v1.5h-1.286V21a.469.469,0,0,0-.428-.5h-6.857a.469.469,0,0,0-.429.5v1.5h0Z",
        transform: "translate(2194 -19)",
      })
    );
  },
  rc = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 14.117 13",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path-audit-log-menu-icon" },
          e.createElement("rect", {
            id: "Rectángulo_1591",
            "data-name": "Rectángulo 1591",
            width: "14.117",
            height: "13",
          })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Grupo_2463",
          "data-name": "Grupo 2463",
          clipPath: "url(#clip-path-audit-log-menu-icon)",
        },
        e.createElement("path", {
          id: "Trazado_7111",
          "data-name": "Trazado 7111",
          d: "M10.518,108.483a5.376,5.376,0,0,1-2.413.561H8.093a5.47,5.47,0,0,1-4.394-2.2H1.142a.3.3,0,0,1-.29-.3h0v-.694a.3.3,0,0,1,.29-.3H2.987a5.318,5.318,0,0,1-.248-.857H0v6.482a.732.732,0,0,0,.731.726h9.415a.732.732,0,0,0,.731-.726v-2.333Z",
          transform: "translate(0 -98.898)",
        }),
        e.createElement("path", {
          id: "Trazado_7112",
          "data-name": "Trazado 7112",
          d: "M2.636,41.038a5.331,5.331,0,0,1,.683-2.616H.731A.732.732,0,0,0,0,39.154v2.125H2.641c0-.08-.006-.16-.006-.241",
          transform: "translate(0 -36.296)",
        }),
        e.createElement("path", {
          id: "Trazado_7114",
          "data-name": "Trazado 7114",
          d: "M70.167,9.1h0L68.422,7.37a4.685,4.685,0,0,0,.809-2.629,4.795,4.795,0,0,0-9.589,0,4.773,4.773,0,0,0,4.793,4.741h.014a4.754,4.754,0,0,0,2.524-.719l1.779,1.757a1.008,1.008,0,0,0,.7.3h.011a1.005,1.005,0,0,0,.7-1.714M64.394,7.53a2.8,2.8,0,0,1-2.819-2.777,2.819,2.819,0,0,1,5.637,0A2.8,2.8,0,0,1,64.394,7.53",
          transform: "translate(-56.343)",
        })
      )
    );
  },
  cc = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "g",
        { id: "health-icon", transform: "translate(-7440.898 -155.188)" },
        e.createElement("path", {
          id: "Unión_51",
          "data-name": "Unión 51",
          d: "M29.764,256A29.756,29.756,0,0,1,0,226.113V74.364H32.285V223.717H181.242V256Zm189.61-6.664V219.62h29.721v29.716Zm4.342-68.343V32.283H74.76V0H226.227A29.815,29.815,0,0,1,256,29.713v151.28Zm-72.251-.018V151.259h29.8v29.716Zm-76.706,0V151.259h29.8v29.716Zm76.706-76.9V74.364h29.8V104.08Zm-76.649,0V74.364h29.72V104.08ZM6.9,36.867V7.151h29.72V36.867Z",
          transform: "translate(7440.898 155.188)",
        })
      )
    );
  },
  mc = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 15 15",
        },
        a
      ),
      e.createElement("rect", {
        id: "Rectángulo_1589",
        "data-name": "Rectángulo 1589",
        width: "15",
        height: "15",
        rx: "2",
        fill: "#081836",
        opacity: "0.601",
      }),
      e.createElement(
        "g",
        { id: "OpenListIcon-full", transform: "translate(4 4.984)" },
        e.createElement(
          "g",
          {
            id: "noun_chevron_2320228",
            transform: "translate(0.167 4.016) rotate(-90)",
          },
          e.createElement("path", {
            id: "Trazado_6842",
            "data-name": "Trazado 6842",
            d: "M.422,0a.433.433,0,0,0-.3.117.37.37,0,0,0,0,.557L2.983,3.325.126,5.986a.37.37,0,0,0,0,.557.443.443,0,0,0,.6,0L3.889,3.609a.373.373,0,0,0,.126-.274.344.344,0,0,0-.126-.274L.727.127A.443.443,0,0,0,.422,0Z",
            transform: "translate(0 0)",
          })
        ),
        e.createElement("rect", {
          id: "Rectángulo_896",
          "data-name": "Rectángulo 896",
          width: "0.462",
          height: "0.462",
          transform: "translate(0 1.75)",
          fill: "none",
        })
      )
    );
  },
  oc = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 12 12",
        },
        a
      ),
      e.createElement(
        "g",
        { id: "trace-icon", transform: "translate(0 0)" },
        e.createElement("path", {
          id: "trace-icn",
          d: "M-4327.66-381.522l2.667,2.932v5.186a.377.377,0,0,1-.383.368h-.566a.379.379,0,0,1-.384-.368v-4.614l-2.666-3.135v-3.477a.376.376,0,0,1,.382-.368h.567a.376.376,0,0,1,.383.368Zm2.667-3.109a.377.377,0,0,0-.383-.368h-.566a.378.378,0,0,0-.384.368v3.332l2.668,3.135v4.758a.377.377,0,0,0,.383.368h.567a.377.377,0,0,0,.382-.368v-5.33l-2.667-2.931Zm2.284-.368h-.567a.377.377,0,0,0-.383.368v1.827a.377.377,0,0,0,.383.368h.567a.377.377,0,0,0,.382-.368v-1.827A.377.377,0,0,0-4322.709-385Zm2.1,5.554h.568a.377.377,0,0,0,.383-.368v-4.817a.377.377,0,0,0-.383-.368h-.568a.377.377,0,0,0-.383.368v4.817A.377.377,0,0,0-4320.61-379.445Zm3.233-5.554h-.567a.377.377,0,0,0-.383.368v1.827a.377.377,0,0,0,.383.368h.567a.377.377,0,0,0,.384-.368v-1.827A.377.377,0,0,0-4317.376-385Zm0,8.117h-.567a.377.377,0,0,0-.383.368v3.108a.377.377,0,0,0,.383.368h.567a.377.377,0,0,0,.384-.368v-3.108A.377.377,0,0,0-4317.376-376.882Zm0-3.845h-.567a.377.377,0,0,0-.383.368v.828l-2.667,2.648v3.477a.377.377,0,0,0,.383.368h.568a.377.377,0,0,0,.383-.368v-2.622l2.667-3.135v-1.2A.377.377,0,0,0-4317.376-380.727Zm-10.667,2.136h-.567a.376.376,0,0,0-.382.368v4.817a.376.376,0,0,0,.382.368h.567a.376.376,0,0,0,.383-.368v-4.817A.376.376,0,0,0-4328.043-378.591Z",
          transform: "translate(4328.993 384.999)",
        }),
        e.createElement("rect", {
          id: "Rectángulo_880",
          "data-name": "Rectángulo 880",
          width: "11.078",
          height: "11.844",
          transform: "translate(0.472 0.156)",
          fill: "none",
        })
      )
    );
  },
  ic = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 12 10.087",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path-groups-menu-icon" },
          e.createElement("rect", {
            id: "Rectángulo_992",
            "data-name": "Rectángulo 992",
            width: "12",
            height: "10.087",
          })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Grupo_2367",
          "data-name": "Grupo 2367",
          clipPath: "url(#clip-path-groups-menu-icon)",
        },
        e.createElement("path", {
          id: "Trazado_7090",
          "data-name": "Trazado 7090",
          d: "M204.925,3.5a2.963,2.963,0,0,1-.177,1.011c.042,0,.084,0,.127,0a2.274,2.274,0,0,0,2.284-2.258,2.288,2.288,0,0,0-4-1.486A3.005,3.005,0,0,1,204.925,3.5",
          transform: "translate(-195.887 0)",
        }),
        e.createElement("path", {
          id: "Trazado_7091",
          "data-name": "Trazado 7091",
          d: "M207.3,137.346a3.458,3.458,0,0,0-1.31-1.03,3.642,3.642,0,0,0-.725-.242,3.479,3.479,0,0,0-.748-.082c-.05,0-.1,0-.151,0h-.017l-.1.007a3.039,3.039,0,0,1-1.442,1.357,4.587,4.587,0,0,1,.583.219,4.389,4.389,0,0,1,1.656,1.3,1.775,1.775,0,0,1,.177.28h1.242a1.169,1.169,0,0,0,.3-.039,1.066,1.066,0,0,0,.27-.113,1.02,1.02,0,0,0,.225-.181,1.036,1.036,0,0,0,.168-.242,1.179,1.179,0,0,0-.128-1.239",
          transform: "translate(-195.543 -131.125)",
        }),
        e.createElement("path", {
          id: "Trazado_7092",
          "data-name": "Trazado 7092",
          d: "M22.838,4.516c.043,0,.086,0,.129,0A2.962,2.962,0,0,1,22.789,3.5,3.005,3.005,0,0,1,24.556.773a2.288,2.288,0,0,0-4,1.485,2.274,2.274,0,0,0,2.284,2.258",
          transform: "translate(-19.819 -0.001)",
        }),
        e.createElement("path", {
          id: "Trazado_7093",
          "data-name": "Trazado 7093",
          d: "M3.757,137.784a4.577,4.577,0,0,1,.986-.428,3.039,3.039,0,0,1-1.431-1.35c-.1-.009-.206-.014-.31-.014-.05,0-.1,0-.151,0H2.834a3.293,3.293,0,0,0-.367.039,3.506,3.506,0,0,0-2.194,1.286l-.057.077h0a1.154,1.154,0,0,0-.089,1.194,1.058,1.058,0,0,0,.171.239,1.042,1.042,0,0,0,.226.179,1.079,1.079,0,0,0,.269.112,1.169,1.169,0,0,0,.3.039H2.331a1.764,1.764,0,0,1,.126-.2v0l0,0,.071-.1a4.235,4.235,0,0,1,1.225-1.071",
          transform: "translate(-0.001 -131.126)",
        }),
        e.createElement("path", {
          id: "Trazado_7094",
          "data-name": "Trazado 7094",
          d: "M95.021,28.466a2.6,2.6,0,1,0,2.6-2.574,2.592,2.592,0,0,0-2.6,2.574",
          transform: "translate(-91.621 -24.965)",
        }),
        e.createElement("path", {
          id: "Trazado_7095",
          "data-name": "Trazado 7095",
          d: "M76.691,181.3a4.152,4.152,0,0,0-.827-.276,3.966,3.966,0,0,0-.853-.094c-.057,0-.115,0-.172,0h-.02a3.753,3.753,0,0,0-.419.045,4,4,0,0,0-2.5,1.466l-.065.088h0a1.315,1.315,0,0,0-.1,1.362,1.208,1.208,0,0,0,.195.272,1.189,1.189,0,0,0,.257.2,1.233,1.233,0,0,0,.307.127,1.333,1.333,0,0,0,.342.044h4.4a1.331,1.331,0,0,0,.345-.045,1.216,1.216,0,0,0,.307-.129,1.164,1.164,0,0,0,.256-.207,1.183,1.183,0,0,0,.191-.276,1.344,1.344,0,0,0-.146-1.412,3.943,3.943,0,0,0-1.494-1.174",
          transform: "translate(-69.028 -174.452)",
        })
      )
    );
  },
  hc = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 15 15",
        },
        a
      ),
      e.createElement(
        "g",
        {
          id: "Grupo_2449",
          "data-name": "Grupo 2449",
          transform: "translate(-140 -181)",
        },
        e.createElement("rect", {
          id: "Rectángulo_1589",
          "data-name": "Rectángulo 1589",
          width: "15",
          height: "15",
          rx: "2",
          transform: "translate(140 181)",
          fill: "#08193a",
          opacity: "0.601",
        }),
        e.createElement(
          "g",
          { id: "OpenListIcon-full", transform: "translate(144 250.612)" },
          e.createElement(
            "g",
            {
              id: "noun_chevron_2320228",
              transform: "translate(6.827 -63.612) rotate(90)",
            },
            e.createElement("path", {
              id: "Trazado_6842",
              "data-name": "Trazado 6842",
              d: "M.422,6.661a.433.433,0,0,1-.3-.117.37.37,0,0,1,0-.557L2.983,3.335.126.675a.37.37,0,0,1,0-.557.443.443,0,0,1,.6,0L3.889,3.052a.373.373,0,0,1,.126.274.344.344,0,0,1-.126.274L.727,6.533a.443.443,0,0,1-.306.127Z",
              transform: "translate(0 0)",
            })
          ),
          e.createElement("rect", {
            id: "Rectángulo_896",
            "data-name": "Rectángulo 896",
            width: "0.462",
            height: "0.462",
            transform: "translate(0 -61.808)",
            fill: "none",
          })
        )
      )
    );
  },
  dc = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 12 12",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path-metrics-menu-icon" },
          e.createElement("rect", {
            id: "Rectángulo_946",
            "data-name": "Rectángulo 946",
            width: "12",
            height: "12",
            transform: "translate(0 0)",
          })
        )
      ),
      e.createElement(
        "g",
        { id: "DashboardIcon-Full", transform: "translate(0.037 0.021)" },
        e.createElement(
          "g",
          {
            id: "Grupo_2300",
            "data-name": "Grupo 2300",
            transform: "translate(-0.037 -0.021)",
            clipPath: "url(#clip-path-metrics-menu-icon)",
          },
          e.createElement("path", {
            id: "Trazado_7036",
            "data-name": "Trazado 7036",
            d: "M11.722.239A.805.805,0,0,0,11.15,0H.809A.811.811,0,0,0,0,.81V11.151a.811.811,0,0,0,.809.809H11.15a.811.811,0,0,0,.809-.809V.811a.805.805,0,0,0-.237-.572M1.935,2.544a.724.724,0,0,1,.724-.724H4.94a.724.724,0,0,1,.724.724V3.613a.724.724,0,0,1-.724.724H2.659a.724.724,0,0,1-.724-.724Zm3.73,6.932a.7.7,0,0,1-.724.664H2.659a.7.7,0,0,1-.724-.664V6.01a.7.7,0,0,1,.724-.664H4.94a.7.7,0,0,1,.724.664Zm4.627-.059a.724.724,0,0,1-.724.724H7.286a.724.724,0,0,1-.724-.724V8.349a.724.724,0,0,1,.724-.724H9.568a.724.724,0,0,1,.724.724Zm0-3.466a.7.7,0,0,1-.724.664H7.286a.7.7,0,0,1-.724-.664V2.484a.7.7,0,0,1,.724-.664H9.567a.7.7,0,0,1,.724.664Z",
            transform: "translate(0.006 0.002)",
          })
        )
      )
    );
  },
  sc = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 17 12.782",
        },
        a
      ),
      e.createElement("path", {
        id: "Sustracción_4",
        "data-name": "Sustracción 4",
        d: "M14.01,11.782H1.99a2,2,0,0,1-1.99-2V2A2,2,0,0,1,1.99,0H14.01A2,2,0,0,1,16,2V9.786A2,2,0,0,1,14.01,11.782ZM2.793,10.4H6.814a1.166,1.166,0,0,0,1.055-.676A1.434,1.434,0,0,0,7.73,8.29,3.755,3.755,0,0,0,5.573,6.862a3.448,3.448,0,0,0-.791-.093c-.056,0-.116,0-.184,0A3.665,3.665,0,0,0,1.879,8.261q-.024.032-.046.065l-.015.023a1.411,1.411,0,0,0-.1,1.388,1.183,1.183,0,0,0,1.06.666ZM9.627,9.093a.627.627,0,1,0,0,1.254H14a.627.627,0,1,0,0-1.254Zm0-2.383a.627.627,0,1,0,0,1.255H14A.627.627,0,1,0,14,6.71ZM4.906.941A2.621,2.621,0,0,0,2.345,3.613,2.622,2.622,0,0,0,4.906,6.286a2.441,2.441,0,0,0,1-.211A2.538,2.538,0,0,0,6.718,5.5a2.677,2.677,0,0,0,.549-.85,2.739,2.739,0,0,0,.2-1.039A2.621,2.621,0,0,0,4.906.941ZM9.627,4.264a.627.627,0,1,0,0,1.254H14a.627.627,0,1,0,0-1.254Z",
        transform: "translate(0.5 0.5)",
        stroke: "rgba(0,0,0,0)",
        strokeWidth: "1",
      })
    );
  },
  pc = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 12 12",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path-logs-menu" },
          e.createElement("rect", {
            id: "Rectángulo_982",
            "data-name": "Rectángulo 982",
            width: "12",
            height: "12",
            transform: "translate(0 0)",
          })
        )
      ),
      e.createElement(
        "g",
        { id: "logs-icon", transform: "translate(-0.245 0.078)" },
        e.createElement(
          "g",
          {
            id: "Grupo_2346",
            "data-name": "Grupo 2346",
            transform: "translate(0.245 -0.078)",
            clipPath: "url(#clip-path-logs-menu)",
          },
          e.createElement("path", {
            id: "Trazado_7070",
            "data-name": "Trazado 7070",
            d: "M.1,86.274v7.138a.806.806,0,0,0,.805.8H11.273a.806.806,0,0,0,.805-.8V86.274Zm4.482,1.274v.764a.324.324,0,0,1-.318.331H1.358a.325.325,0,0,1-.319-.331v-.764a.325.325,0,0,1,.319-.33H4.264a.324.324,0,0,1,.318.33Z",
            transform: "translate(-0.135 -82.221)",
          }),
          e.createElement("path", {
            id: "Trazado_7071",
            "data-name": "Trazado 7071",
            d: "M11.273.1H.905A.806.806,0,0,0,.1.906v2.34H12.078V.906A.806.806,0,0,0,11.273.1",
            transform: "translate(-0.135 -0.084)",
          })
        )
      )
    );
  },
  vc = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 16 16",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path-monitoring-icon" },
          e.createElement("rect", {
            id: "Rectángulo_1587",
            "data-name": "Rectángulo 1587",
            width: "16",
            height: "16",
          })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Grupo_2441",
          "data-name": "Grupo 2441",
          clipPath: "url(#clip-path-monitoring-icon)",
        },
        e.createElement("path", {
          id: "Trazado_7103",
          "data-name": "Trazado 7103",
          d: "M15.551,13.464,12.973,10.9a6.932,6.932,0,0,0,.846-1.72H10.813A4.386,4.386,0,0,1,2.646,7.03a4.377,4.377,0,0,1,8.744-.222h2.776A7.086,7.086,0,0,0,0,7.013a7.056,7.056,0,0,0,7.083,7.012H7.1a7.019,7.019,0,0,0,3.73-1.063l2.629,2.6A1.489,1.489,0,0,0,14.5,16h.016a1.487,1.487,0,0,0,1.038-2.536Z",
        }),
        e.createElement("path", {
          id: "Trazado_7104",
          "data-name": "Trazado 7104",
          d: "M164.692,167.057a.271.271,0,0,0-.264-.213h0a.271.271,0,0,0-.264.211l-.218.966-.187-.572a.271.271,0,0,0-.526.051l-.249,2.03-.859-4.085a.271.271,0,0,0-.527-.011l-.765,3a.713.713,0,1,0,.512.183l.489-1.919.955,4.54a.271.271,0,0,0,.265.215h.012a.271.271,0,0,0,.257-.238l.3-2.437.114.351a.271.271,0,0,0,.521-.025l.167-.741.156.71a.271.271,0,0,0,.264.213h6.909a.271.271,0,0,0,0-.542h-6.692Z",
          transform: "translate(-156.025 -160.967)",
        })
      )
    );
  },
  fc = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 13.264 16",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path-support-menu-icon" },
          e.createElement("rect", {
            id: "Rectángulo_1590",
            "data-name": "Rectángulo 1590",
            width: "13.264",
            height: "16",
          })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Grupo_2451",
          "data-name": "Grupo 2451",
          clipPath: "url(#clip-path-support-menu-icon)",
        },
        e.createElement("path", {
          id: "Trazado_7107",
          "data-name": "Trazado 7107",
          d: "M141.4,175.257a1.765,1.765,0,1,0,1.765-1.763,1.758,1.758,0,0,0-1.765,1.763",
          transform: "translate(-136.66 -167.676)",
        }),
        e.createElement("path", {
          id: "Trazado_7108",
          "data-name": "Trazado 7108",
          d: "M13.256,11.233l-.791-3.756.064-1.906a.373.373,0,0,0,0-.052A6.285,6.285,0,0,0,9.25.642h0L9.185.608c-.153-.08-.31-.155-.471-.223a.375.375,0,0,0-.13-.031A7.2,7.2,0,0,0,7.731.106v5.28a2.51,2.51,0,0,1,.343,4.16l.876,1.516a.376.376,0,0,1-.275.564.373.373,0,0,1-.147-.01.376.376,0,0,1-.228-.178L7.424,9.923A2.514,2.514,0,0,1,5.282,5.385V0a6.15,6.15,0,0,0-1.141.28A.377.377,0,0,0,4.065.3q-.231.087-.453.192A6.281,6.281,0,0,0,1.869,10.647l-.5,3.2a.376.376,0,0,0,.152.363.379.379,0,0,0,.124.058l6.6,1.722a.376.376,0,0,0,.467-.315l.283-2.165,1.738.4a.376.376,0,0,0,.454-.306l.313-1.912h1.39a.376.376,0,0,0,.368-.453",
          transform: "translate(0 0.001)",
        })
      )
    );
  },
  Ec = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 12 12",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path-performance-menu-icon" },
          e.createElement("rect", {
            id: "Rectángulo_985",
            "data-name": "Rectángulo 985",
            width: "12",
            height: "12",
          })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Grupo_2352",
          "data-name": "Grupo 2352",
          clipPath: "url(#clip-path-performance-menu-icon)",
        },
        e.createElement("path", {
          id: "Trazado_7077",
          "data-name": "Trazado 7077",
          d: "M120.417,129.741a.387.387,0,1,0,.387.387h0a.387.387,0,0,0-.387-.387",
          transform: "translate(-114.404 -123.659)",
        }),
        e.createElement("path", {
          id: "Trazado_7078",
          "data-name": "Trazado 7078",
          d: "M6,0a6,6,0,1,0,6,6A6,6,0,0,0,6,0M5.974,1.662h.02a.366.366,0,1,1-.006.733H5.974a.366.366,0,0,1,0-.733m-4.1,4.026v0a.139.139,0,0,1-.139.12H1.717a.139.139,0,0,1-.12-.156v0h0a.139.139,0,0,1,.156-.119h0a.139.139,0,0,1,.118.157M2.2,4.447h0a.2.2,0,0,1-.179-.3v0h0a.2.2,0,1,1,.178.3M3.323,3.238l-.015.013,0,0a.249.249,0,0,1-.165.064v0a.25.25,0,0,1-.164-.438l0,0h0l0,0a.25.25,0,0,1,.341.366M4.555,2.6l0,0-.008,0a.329.329,0,0,1-.119.025v0a.331.331,0,0,1-.117-.642l.01,0h0a.331.331,0,1,1,.238.619m2.1,6.622h0a.176.176,0,0,1-.176.176H5.531a.176.176,0,1,1,0-.353h.952a.177.177,0,0,1,.178.175Zm.781-3.493-.652.556a.016.016,0,0,0,0,.015.8.8,0,1,1-.489-.57.016.016,0,0,0,.016,0l.649-.556h0a.366.366,0,0,1,.476.556m-.05-3.025v0a.4.4,0,0,1-.143-.026l-.012,0a.406.406,0,1,1,.284-.76l.014.005a.408.408,0,0,1-.143.789m1.292.827a.46.46,0,0,1-.3-.114L8.37,3.41a.46.46,0,0,1,.6-.694l.013.011a.46.46,0,0,1-.3.806m.47.964-.009-.016a.529.529,0,1,1,.916-.529l.013.023.009.017h0a.529.529,0,0,1-.213.717h0A.529.529,0,0,1,9.154,4.5m1.014,1.772a.6.6,0,0,1-.675-.512v-.02a.6.6,0,0,1,.592-.679.6.6,0,0,1,.591.516l0,.023a.6.6,0,0,1-.512.672",
        })
      )
    );
  },
  uc = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 12 12",
        },
        a
      ),
      e.createElement(
        "g",
        { id: "diagnostic-icn-full", transform: "translate(0 -0.131)" },
        e.createElement("path", {
          id: "Unión_17",
          "data-name": "Unión 17",
          d: "M0,5.962A5.956,5.956,0,0,1,5.935,0h.491V2.461a3.512,3.512,0,1,1-.981,0V1.009a4.893,4.893,0,0,0-1.752.515A4.981,4.981,0,0,0,2.276,2.611a4.994,4.994,0,0,0-.949,1.524,4.96,4.96,0,1,0,9.564,1.827.49.49,0,0,1,.144-.348.485.485,0,0,1,.346-.144.492.492,0,0,1,.491.493A5.936,5.936,0,1,1,0,5.962ZM4.634,3.771a2.553,2.553,0,0,0-.806,3.618,2.568,2.568,0,0,0,.687.69,2.541,2.541,0,0,0,.432.236,2.51,2.51,0,0,0,.989.2,2.555,2.555,0,0,0,1.3-4.745,2.522,2.522,0,0,0-.811-.313V4.878a1.2,1.2,0,0,1,.5.431,1.188,1.188,0,1,1-1.986,0,1.2,1.2,0,0,1,.5-.431V3.458A2.521,2.521,0,0,0,4.634,3.771Z",
          transform: "translate(0.129 0.131)",
        }),
        e.createElement("rect", {
          id: "Rectángulo_878",
          "data-name": "Rectángulo 878",
          width: "11.92",
          height: "11.975",
          transform: "translate(0 0.156)",
          fill: "none",
        })
      )
    );
  },
  gc = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 11.749 16",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path-access-menu-icon" },
          e.createElement("rect", {
            id: "Rectángulo_1586",
            "data-name": "Rectángulo 1586",
            width: "11.749",
            height: "16",
          })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Grupo_2439",
          "data-name": "Grupo 2439",
          clipPath: "url(#clip-path-access-menu-icon)",
        },
        e.createElement("path", {
          id: "Trazado_7102",
          "data-name": "Trazado 7102",
          d: "M11.018,3.348h-2.1c.009-.1.014-.194.014-.293a3.057,3.057,0,0,0-6.113,0c0,.1.005.2.015.3H.744A1.019,1.019,0,0,0,0,4.343v5.913A2.814,2.814,0,0,0,.4,11.7c1,1.676,2.625,2.648,4.955,4.143A.965.965,0,0,0,5.88,16h0a.956.956,0,0,0,.5-.145c2.264-1.4,3.8-2.315,4.984-4.234a2.665,2.665,0,0,0,.381-1.4V4.337a1.024,1.024,0,0,0-.731-.989M5.875,1.05a2,2,0,0,1,1.983,2.3l-3.966,0a2,2,0,0,1,1.983-2.3m0,4.073a2.189,2.189,0,1,1,0,4.377h0a2.189,2.189,0,1,1,0-4.377m2.786,7.212a1,1,0,0,1-.162.233.984.984,0,0,1-.216.175,1.028,1.028,0,0,1-.26.109,1.127,1.127,0,0,1-.29.038H4.023a1.123,1.123,0,0,1-.29-.037,1.04,1.04,0,0,1-.259-.108,1,1,0,0,1-.218-.172,1.019,1.019,0,0,1-.164-.23,1.112,1.112,0,0,1,.086-1.15c.017-.026.036-.05.055-.074A3.376,3.376,0,0,1,5.346,9.88,3.182,3.182,0,0,1,5.7,9.841h.017c.048,0,.1,0,.145,0a3.348,3.348,0,0,1,.72.079,3.506,3.506,0,0,1,.7.234,3.33,3.33,0,0,1,1.262.992h0a1.136,1.136,0,0,1,.123,1.193",
          transform: "translate(0 0.001)",
        })
      )
    );
  },
  wc = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 12 12",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path-reg-menu-icon" },
          e.createElement("rect", {
            id: "Rectángulo_1593",
            "data-name": "Rectángulo 1593",
            width: "12",
            height: "12",
          })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Grupo_2469",
          "data-name": "Grupo 2469",
          clipPath: "url(#clip-path-reg-menu-icon)",
        },
        e.createElement("path", {
          id: "Trazado_7117",
          "data-name": "Trazado 7117",
          d: "M11.4,7.564a1.848,1.848,0,0,0,.6-1.17,1.848,1.848,0,0,0-.6-1.17,1.866,1.866,0,0,1-.377-.532,2.022,2.022,0,0,1,0-.693,1.858,1.858,0,0,0-.17-1.282,1.7,1.7,0,0,0-1.126-.567A1.8,1.8,0,0,1,9.1,1.94a1.924,1.924,0,0,1-.374-.546A1.775,1.775,0,0,0,7.854.442,1.649,1.649,0,0,0,6.646.671,1.833,1.833,0,0,1,6,.89,1.833,1.833,0,0,1,5.354.671,1.649,1.649,0,0,0,4.146.442a1.78,1.78,0,0,0-.872.952,1.926,1.926,0,0,1-.377.549,1.806,1.806,0,0,1-.625.209,1.7,1.7,0,0,0-1.126.567A1.865,1.865,0,0,0,.977,3.994a2.053,2.053,0,0,1,0,.693A1.915,1.915,0,0,1,.6,5.223,1.844,1.844,0,0,0,0,6.394a1.843,1.843,0,0,0,.6,1.17,1.932,1.932,0,0,1,.377.53,2.061,2.061,0,0,1,0,.694,1.865,1.865,0,0,0,.169,1.282,1.7,1.7,0,0,0,1.126.567,1.806,1.806,0,0,1,.625.209,1.925,1.925,0,0,1,.377.548,1.775,1.775,0,0,0,.872.948,1.649,1.649,0,0,0,1.208-.228A1.831,1.831,0,0,1,6,11.894a1.832,1.832,0,0,1,.646.219,2.244,2.244,0,0,0,.908.281.929.929,0,0,0,.3-.049,1.773,1.773,0,0,0,.872-.951,1.934,1.934,0,0,1,.377-.548,1.8,1.8,0,0,1,.625-.209,1.7,1.7,0,0,0,1.126-.567,1.853,1.853,0,0,0,.169-1.284,2.051,2.051,0,0,1,0-.693,1.881,1.881,0,0,1,.377-.529M5.367,8.69,3.051,6.269l.821-.855L5.367,6.973,8.128,4.1l.821.858Z",
          transform: "translate(0 -0.394)",
        })
      )
    );
  },
  Zc = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 12 12",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path-drives-menu-icon" },
          e.createElement("rect", {
            id: "Rectángulo_989",
            "data-name": "Rectángulo 989",
            width: "12",
            height: "12",
          })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Grupo_2361",
          "data-name": "Grupo 2361",
          clipPath: "url(#clip-path-drives-menu-icon)",
        },
        e.createElement("path", {
          id: "Trazado_7083",
          "data-name": "Trazado 7083",
          d: "M6,2.839H6c3.882,0,6-.938,6-1.42S9.882,0,6,0,0,.938,0,1.42s2.118,1.42,6,1.42",
          transform: "translate(0)",
        }),
        e.createElement("path", {
          id: "Trazado_7084",
          "data-name": "Trazado 7084",
          d: "M6,135.08a15.409,15.409,0,0,1-6-1v3.228c0,.482,2.118,1.42,6,1.42s6-.93,6-1.42v-3.233a15.245,15.245,0,0,1-6,1m-3.939,2.063a.915.915,0,0,1-1.234-.281.849.849,0,0,1,.291-1.192.915.915,0,0,1,1.234.281.849.849,0,0,1-.291,1.192",
          transform: "translate(0 -126.731)",
        }),
        e.createElement("path", {
          id: "Trazado_7085",
          "data-name": "Trazado 7085",
          d: "M6,53.034a15.306,15.306,0,0,1-6-1V55.1c0,.482,2.118,1.42,6,1.42s6-.938,6-1.42V52.032a15.244,15.244,0,0,1-6,1M2.061,55.19a.915.915,0,0,1-1.234-.281.849.849,0,0,1,.291-1.192A.915.915,0,0,1,2.353,54a.849.849,0,0,1-.291,1.192",
          transform: "translate(0 -49.181)",
        })
      )
    );
  },
  Mc = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 256 256",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "prefix__a" },
          e.createElement("path", { d: "M0 0h256v256H0z" })
        )
      ),
      e.createElement(
        "g",
        { clipPath: "url(#prefix__a)" },
        e.createElement("path", { fill: "none", d: "M0 0h256v256H0z" }),
        e.createElement(
          "g",
          { "data-name": "account" },
          e.createElement("path", {
            "data-name": "Trazado 463",
            d: "M32.291 232.53a32.336 32.336 0 0 1-32.289-32.3V76.935a32.33 32.33 0 0 1 32.289-32.3 8.837 8.837 0 0 1 8.832 8.822 8.845 8.845 0 0 1-8.832 8.831 14.663 14.663 0 0 0-14.648 14.648v123.295a14.661 14.661 0 0 0 14.648 14.64h191.4a14.66 14.66 0 0 0 14.641-14.64V76.936a14.661 14.661 0 0 0-14.641-14.648h-54.07a8.845 8.845 0 0 1-8.832-8.831 8.762 8.762 0 0 1 2.586-6.236 8.735 8.735 0 0 1 6.246-2.586h54.07a32.345 32.345 0 0 1 32.313 32.3V200.23a32.351 32.351 0 0 1-32.312 32.3Zm140.445-33.006a3.078 3.078 0 0 1-3.082-3.07V179.02a3.08 3.08 0 0 1 3.082-3.08h47.18a3.077 3.077 0 0 1 3.07 3.08v17.434a3.075 3.075 0 0 1-3.07 3.07Zm-113.141 0a22.643 22.643 0 0 1-20.648-12.767 26.835 26.835 0 0 1 1.891-26.579l.02-.019c.094-.143.2-.285.3-.428.273-.409.559-.827.871-1.245a70.651 70.651 0 0 1 52.277-28.5 62.967 62.967 0 0 1 3.543-.095 67.043 67.043 0 0 1 15.211 1.777 71.594 71.594 0 0 1 14.734 5.219 71.248 71.248 0 0 1 26.73 22.149 27.371 27.371 0 0 1 2.672 27.53 22.363 22.363 0 0 1-20.629 12.956Zm-3.719-30.372v.01l-.047.058c-.191.256-.371.5-.531.741v.028l-.258.371a8.365 8.365 0 0 0-.715 8.261 5.526 5.526 0 0 0 5.27 3.1h76.969a6.062 6.062 0 0 0 3.156-.761 4.988 4.988 0 0 0 1.949-2.243 8.485 8.485 0 0 0 .715-4.524 9.18 9.18 0 0 0-1.7-4.468 54.088 54.088 0 0 0-42.969-22.007c-.93 0-1.75.019-2.508.066h-.012a53.055 53.055 0 0 0-39.318 21.368Zm116.859-5.01a3.08 3.08 0 0 1-3.082-3.079v-17.425a3.08 3.08 0 0 1 3.082-3.08h47.18a3.077 3.077 0 0 1 3.07 3.08v17.425a3.077 3.077 0 0 1-3.07 3.079Zm-.59-38.7a2.5 2.5 0 0 1-2.492-2.5V82.066a2.5 2.5 0 0 1 2.492-2.5h48.348a2.5 2.5 0 0 1 2.492 2.5v40.876a2.5 2.5 0 0 1-2.492 2.5ZM50.981 74.213c0-28.233 22.09-51.209 49.242-51.209s49.258 22.976 49.258 51.209a52.579 52.579 0 0 1-3.867 19.906 51.257 51.257 0 0 1-10.551 16.274 49.07 49.07 0 0 1-15.656 11 47.257 47.257 0 0 1-19.184 4.041c-27.151 0-49.241-22.976-49.241-51.22Zm17.977 0c0 18.033 14.031 32.711 31.266 32.711 17.262 0 31.3-14.678 31.3-32.711s-14.039-32.7-31.3-32.7c-17.234 0-31.265 14.668-31.265 32.701Z",
          }),
          e.createElement("path", {
            "data-name": "Rect\\xE1ngulo 883",
            fill: "none",
            d: "M0 0h256v256H0z",
          })
        )
      )
    );
  },
  xc = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 12 10.456",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path-profile-menu-icon" },
          e.createElement("rect", {
            id: "Rectángulo_1599",
            "data-name": "Rectángulo 1599",
            width: "12",
            height: "10.456",
          })
        )
      ),
      e.createElement(
        "g",
        {
          id: "Grupo_2475",
          "data-name": "Grupo 2475",
          clipPath: "url(#clip-path-profile-menu-icon)",
        },
        e.createElement("path", {
          id: "Trazado_7122",
          "data-name": "Trazado 7122",
          d: "M33.036,1.016H43.058L43.3.207A.161.161,0,0,0,43.145,0h-10.2a.161.161,0,0,0-.154.207Z",
          transform: "translate(-32.063)",
        }),
        e.createElement("path", {
          id: "Trazado_7123",
          "data-name": "Trazado 7123",
          d: "M11.551,67.822H.449A.449.449,0,0,0,0,68.333l.644,4.659a.451.451,0,0,0,.018.078H11.334a.451.451,0,0,0,.018-.078L12,68.333a.449.449,0,0,0-.445-.511",
          transform: "translate(0 -66.323)",
        }),
        e.createElement("path", {
          id: "Trazado_7124",
          "data-name": "Trazado 7124",
          d: "M16.471,328.2H5.652a.476.476,0,0,0-.452.624l.845,2.576H16.078l.845-2.576a.476.476,0,0,0-.452-.624",
          transform: "translate(-5.062 -320.942)",
        })
      )
    );
  },
  _c = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 13.754 14.047",
        },
        a
      ),
      e.createElement("path", {
        id: "call-home-icon",
        d: "M-2188.145,31.22l-5.076-5.082a2.671,2.671,0,0,1-.779-1.885,2.671,2.671,0,0,1,.779-1.885l1.453-1.453a.312.312,0,0,1,.439,0l2.334,2.336a.31.31,0,0,1,0,.439l-.717.718a.285.285,0,0,0,0,.4l2.9,2.9a.285.285,0,0,0,.4,0l.717-.718a.311.311,0,0,1,.44,0l2.327,2.332a.311.311,0,0,1,0,.44l-1.453,1.452a2.664,2.664,0,0,1-1.885.779A2.667,2.667,0,0,1-2188.145,31.22Zm2.6-6.814a.561.561,0,0,1-.562-.562V22.09h-.209a.561.561,0,0,1-.53-.362.56.56,0,0,1,.156-.622l2.245-1.964a.56.56,0,0,1,.748,0l2.245,1.964a.56.56,0,0,1,.156.622.561.561,0,0,1-.53.362h-.21v1.754a.56.56,0,0,1-.561.562Z",
        transform: "translate(2194.5 -18.452)",
        stroke: "rgba(0,0,0,0)",
        strokeWidth: "1",
      })
    );
  },
  Hc = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 16 16",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path-buckets" },
          e.createElement("rect", {
            id: "Rectángulo_928",
            "data-name": "Rectángulo 928",
            width: "15.957",
            height: "15.928",
          })
        )
      ),
      e.createElement(
        "g",
        { id: "BucketsIcons-Full", transform: "translate(0.283)" },
        e.createElement(
          "g",
          { id: "BucketsIcon-full", transform: "translate(-0.283)" },
          e.createElement("rect", {
            id: "Rectángulo_884",
            "data-name": "Rectángulo 884",
            width: "15.939",
            height: "15.911",
            transform: "translate(0.061)",
            fill: "none",
          }),
          e.createElement(
            "g",
            {
              id: "Grupo_2272",
              "data-name": "Grupo 2272",
              transform: "translate(0 0.072)",
            },
            e.createElement(
              "g",
              {
                id: "Grupo_2271",
                "data-name": "Grupo 2271",
                clipPath: "url(#clip-path-buckets)",
              },
              e.createElement("path", {
                id: "Trazado_7002",
                "data-name": "Trazado 7002",
                d: "M15.619.545A1.341,1.341,0,0,0,14.553,0H1.386A1.34,1.34,0,0,0,.32.545a1.606,1.606,0,0,0-.3,1.242c.325,1.888,1.009,5.869,1.557,9.045v.006c.277,1.616.519,3.023.661,3.84A1.422,1.422,0,0,0,3.6,15.911h8.733A1.423,1.423,0,0,0,13.7,14.679l.659-3.836,0-.023.893-5.2,0-.015.658-3.821a1.6,1.6,0,0,0-.3-1.242M13.187,11.3l-10.426,0-.2-1.189H13.383Zm.89-5.216-12.221,0L1.651,4.9H14.273Z",
                transform: "translate(0.061 -0.072)",
              })
            )
          )
        ),
        e.createElement("rect", {
          id: "Rectángulo_929",
          "data-name": "Rectángulo 929",
          width: "15.957",
          height: "15.928",
          transform: "translate(-0.283 0.072)",
          fill: "none",
        })
      )
    );
  },
  zc = function (a) {
    return e.createElement(
      "svg",
      T(
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "min-icon",
          fill: "currentcolor",
          viewBox: "0 0 9.008 12",
        },
        a
      ),
      e.createElement(
        "defs",
        null,
        e.createElement(
          "clipPath",
          { id: "clip-path-users-menu" },
          e.createElement("rect", {
            id: "Rectángulo_991",
            "data-name": "Rectángulo 991",
            width: "9.008",
            height: "12",
          })
        )
      ),
      e.createElement(
        "g",
        { id: "users-icon", clipPath: "url(#clip-path-users-menu)" },
        e.createElement("path", {
          id: "Trazado_7088",
          "data-name": "Trazado 7088",
          d: "M26.843,6.743a3.4,3.4,0,0,0,3.411-3.372,3.411,3.411,0,0,0-6.822,0,3.4,3.4,0,0,0,3.411,3.372",
          transform: "translate(-22.334)",
        }),
        e.createElement("path", {
          id: "Trazado_7089",
          "data-name": "Trazado 7089",
          d: "M8.639,157.056a5.164,5.164,0,0,0-1.957-1.538,5.439,5.439,0,0,0-1.083-.362,5.2,5.2,0,0,0-1.117-.123c-.075,0-.151,0-.225.005H4.231a4.928,4.928,0,0,0-.549.059,5.236,5.236,0,0,0-3.276,1.92c-.029.039-.059.078-.086.116h0a1.723,1.723,0,0,0-.134,1.784,1.581,1.581,0,0,0,.255.356,1.559,1.559,0,0,0,.337.267,1.614,1.614,0,0,0,.4.167,1.743,1.743,0,0,0,.449.058H7.389a1.748,1.748,0,0,0,.452-.058,1.594,1.594,0,0,0,.4-.169,1.525,1.525,0,0,0,.335-.271,1.548,1.548,0,0,0,.251-.361,1.761,1.761,0,0,0-.191-1.85",
          transform: "translate(0.001 -147.766)",
        })
      )
    );
  };
export {
  Jr as AGPLV3DarkLogo,
  Qr as AGPLV3LightLogo,
  Yr as AGPLV3Logo,
  gc as AccessMenuIcon,
  Tn as AccountIcon,
  Mc as AccountsMenuIcon,
  bn as AddAccessRuleIcon,
  gl as AddFolderIcon,
  ol as AddIcon,
  Jn as AddMembersToGroupIcon,
  On as AddNewTagIcon,
  Cr as AlertCloseIcon,
  jr as AlertIcon,
  bl as AllBucketsIcon,
  wt as ApplicationLogo,
  mn as ArrowIcon,
  En as ArrowRightIcon,
  Tr as ArrowRightLink,
  rc as AuditLogsMenuIcon,
  hr as AzureTierIcon,
  Yl as AzureTierIconXs,
  Zr as BackCaretIcon,
  Nr as BackIcon,
  sl as BackSettingsIcon,
  _l as BucketEncryptionIcon,
  gn as BucketQuotaIcon,
  tr as BucketReplicationIcon,
  er as BucketsIcon,
  Hc as BucketsMenuIcon,
  it as Button,
  sr as CalendarIcon,
  cl as CallHomeFeatureIcon,
  _c as CallHomeMenuIcon,
  qr as CancelledIcon,
  Xt as ChangeAccessPolicyIcon,
  gr as ChangePasswordIcon,
  $t as CircleIcon,
  an as ClosePanelIcon,
  ln as ClustersIcon,
  ql as CollapseIcon,
  Tl as ComputerLineIcon,
  dn as ConfigurationsListIcon,
  Fl as ConfirmDeleteIcon,
  zn as ConfirmModalIcon,
  Ur as ConsoleAgpl,
  $r as ConsoleEnterprise,
  Er as ConsoleIcon,
  al as ConsoleLogo,
  Wr as ConsoleStandard,
  Qn as CopyIcon,
  kl as CreateGroupIcon,
  Ul as CreateIcon,
  kn as CreateNewPathIcon,
  Jl as CreateUserIcon,
  nn as DashboardIcon,
  Mn as DeleteIcon,
  Br as DeleteNonCurrentIcon,
  zl as DiagnosticsFeatureIcon,
  Dn as DiagnosticsIcon,
  uc as DiagnosticsMenuIcon,
  Nt as DisabledIcon,
  Hl as DocumentationIcon,
  Ll as DownloadIcon,
  Rl as DownloadStatIcon,
  ll as DriveFormatErrorsIcon,
  Sn as DrivesIcon,
  Zc as DrivesMenuIcon,
  jt as EditIcon,
  Fr as EditTagIcon,
  yr as EditTenantIcon,
  xn as EditYamlIcon,
  Tt as EditorThemeSwitchIcon,
  xl as EgressIcon,
  Rn as EnabledIcon,
  Kr as EnterpriseLightLogo,
  Cl as EventSubscriptionIcon,
  nc as ExtraFeaturesIcon,
  fl as FileBookIcon,
  Qt as FileCloudIcon,
  Il as FileCodeIcon,
  An as FileConfigIcon,
  ir as FileDbIcon,
  Nn as FileFontIcon,
  Xn as FileImageIcon,
  qn as FileLinkIcon,
  bt as FileLockIcon,
  Pl as FileMissingIcon,
  Jt as FileMusicIcon,
  Pn as FilePdfIcon,
  cr as FilePptIcon,
  dr as FileTxtIcon,
  ur as FileVideoIcon,
  dl as FileWorldIcon,
  Pt as FileXlsIcon,
  It as FileZipIcon,
  Rr as FilterIcon,
  Ot as FolderIcon,
  Bt as FormatDrivesIcon,
  mt as GlobalStyles,
  Ln as GoogleTierIcon,
  il as GoogleTierIconXs,
  zt as Grid,
  Bl as GroupsIcon,
  ic as GroupsMenuIcon,
  fr as HardBucketQuotaIcon,
  vn as HealIcon,
  cc as HealthMenuIcon,
  In as HelpIcon,
  qt as HelpIconFilled,
  Xl as HistoryIcon,
  Zl as IAMPoliciesIcon,
  sc as IdentityMenuIcon,
  Dr as InfoIcon,
  lc as InspectMenuIcon,
  Dt as JSONIcon,
  ec as LDAPIcon,
  kt as LambdaBalloonIcon,
  Nl as LambdaIcon,
  hl as LambdaNotificationsIcon,
  zr as LegalHoldIcon,
  br as LicenseDocIcon,
  pl as LicenseIcon,
  nl as LifecycleConfigIcon,
  Or as LinkIcon,
  wr as LockIcon,
  Lt as LoginWrapper,
  Ql as LogoutIcon,
  vr as LogsIcon,
  pc as LogsMenuIcon,
  hc as MenuCollapsedIcon,
  mc as MenuExpandedIcon,
  Hr as MetadataIcon,
  dc as MetricsMenuIcon,
  Wn as MinIOTierIcon,
  tn as MinIOTierIconXs,
  rn as MirroringIcon,
  vc as MonitoringMenuIcon,
  Kn as MultipleBucketsIcon,
  Sr as NetworkGetIcon,
  kr as NetworkPutIcon,
  Sl as NewAccountIcon,
  xr as NewPathIcon,
  Wl as NewPoolIcon,
  Vn as NextArrowIcon,
  ac as OIDCIcon,
  Un as ObjectBrowser1Icon,
  Yt as ObjectBrowserFolderIcon,
  lr as ObjectBrowserIcon,
  _r as ObjectInfoIcon,
  nr as ObjectManagerIcon,
  yn as ObjectPreviewIcon,
  el as OfflineRegistrationBackIcon,
  Ol as OfflineRegistrationIcon,
  hn as OnlineRegistrationBackIcon,
  jn as OnlineRegistrationIcon,
  Yn as OpenListIcon,
  Lr as OpenSourceIcon,
  wn as OperatorLogo,
  Vl as PasswordKeyIcon,
  ul as PerformanceFeatureIcon,
  Ec as PerformanceMenuIcon,
  Cn as PermissionIcon,
  un as PreviewIcon,
  xc as ProfileMenuIcon,
  tl as PrometheusErrorIcon,
  Hn as PrometheusIcon,
  rr as RecoverIcon,
  Kt as RedoIcon,
  Gt as RefreshIcon,
  wc as RegisterMenuIcon,
  Ir as RemoveAllIcon,
  vl as RemoveIcon,
  Fn as ReportedUsageFullIcon,
  _n as ReportedUsageIcon,
  Vr as RetentionIcon,
  fn as S3TierIcon,
  wl as S3TierIconXs,
  Ut as SearchIcon,
  Pr as SelectAllIcon,
  Zn as SelectMultipleIcon,
  en as ServersIcon,
  pn as ServiceAccountCredentialsIcon,
  on as ServiceAccountIcon,
  pr as ServiceAccountsIcon,
  mr as SettingsIcon,
  Ft as ShareIcon,
  Rt as SpeedtestIcon,
  Xr as StandardLightLogo,
  tc as StarIcon,
  yt as StorageIcon,
  Gr as SuccessIcon,
  fc as SupportMenuIcon,
  $l as SyncIcon,
  Ar as TagsIcon,
  jl as TenantsIcon,
  Gn as TenantsOutlineIcon,
  L as ThemeHandler,
  Mt as ThemedLogo,
  Gl as TiersIcon,
  El as TiersNotAvailableIcon,
  cn as ToolsIcon,
  Kl as TotalObjectsIcon,
  ml as TraceIcon,
  oc as TraceMenuIcon,
  Al as TrashIcon,
  Dl as UploadFile,
  yl as UploadFolderIcon,
  or as UploadIcon,
  ar as UploadStatIcon,
  Bn as UptimeIcon,
  Ml as UsersIcon,
  zc as UsersMenuIcon,
  rl as VerifiedIcon,
  St as VersionIcon,
  Mr as VersionsIcon,
  Wt as WarnIcon,
  $n as WarpIcon,
  sn as WatchIcon,
};
//# sourceMappingURL=index.js.map
