import t, { Fragment as o } from "react";
import n, {
  ThemeProvider as r,
  createGlobalStyle as e,
} from "styled-components";
var a = function () {
  return (
    (a =
      Object.assign ||
      function (t) {
        for (var o, n = 1, r = arguments.length; n < r; n++)
          for (var e in (o = arguments[n]))
            Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
        return t;
      }),
    a.apply(this, arguments)
  );
};
var i =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {},
  l = Array.isArray,
  c = "object" == typeof i && i && i.Object === Object && i,
  f = "object" == typeof self && self && self.Object === Object && self,
  s = c || f || Function("return this")(),
  u = s.Symbol,
  d = u,
  b = Object.prototype,
  p = b.hasOwnProperty,
  h = b.toString,
  g = d ? d.toStringTag : void 0;
var y = function (t) {
    var o = p.call(t, g),
      n = t[g];
    try {
      t[g] = void 0;
      var r = !0;
    } catch (t) {}
    var e = h.call(t);
    return r && (o ? (t[g] = n) : delete t[g]), e;
  },
  v = Object.prototype.toString;
var w = y,
  m = function (t) {
    return v.call(t);
  },
  x = u ? u.toStringTag : void 0;
var _ = function (t) {
  return null == t
    ? void 0 === t
      ? "[object Undefined]"
      : "[object Null]"
    : x && x in Object(t)
    ? w(t)
    : m(t);
};
var C = _,
  L = function (t) {
    return null != t && "object" == typeof t;
  };
var k = function (t) {
    return "symbol" == typeof t || (L(t) && "[object Symbol]" == C(t));
  },
  E = l,
  O = k,
  j = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  B = /^\w*$/;
var q = function (t, o) {
  if (E(t)) return !1;
  var n = typeof t;
  return (
    !("number" != n && "symbol" != n && "boolean" != n && null != t && !O(t)) ||
    B.test(t) ||
    !j.test(t) ||
    (null != o && t in Object(o))
  );
};
var S = function (t) {
    var o = typeof t;
    return null != t && ("object" == o || "function" == o);
  },
  z = _,
  I = S;
var A,
  F = function (t) {
    if (!I(t)) return !1;
    var o = z(t);
    return (
      "[object Function]" == o ||
      "[object GeneratorFunction]" == o ||
      "[object AsyncFunction]" == o ||
      "[object Proxy]" == o
    );
  },
  P = s["__core-js_shared__"],
  D = (A = /[^.]+$/.exec((P && P.keys && P.keys.IE_PROTO) || ""))
    ? "Symbol(src)_1." + A
    : "";
var W = function (t) {
    return !!D && D in t;
  },
  $ = Function.prototype.toString;
var R = F,
  T = W,
  H = S,
  M = function (t) {
    if (null != t) {
      try {
        return $.call(t);
      } catch (t) {}
      try {
        return t + "";
      } catch (t) {}
    }
    return "";
  },
  N = /^\[object .+?Constructor\]$/,
  G = Function.prototype,
  U = Object.prototype,
  J = G.toString,
  K = U.hasOwnProperty,
  Q = RegExp(
    "^" +
      J.call(K)
        .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
var V = function (t) {
    return !(!H(t) || T(t)) && (R(t) ? Q : N).test(M(t));
  },
  X = function (t, o) {
    return null == t ? void 0 : t[o];
  };
var Y = function (t, o) {
    var n = X(t, o);
    return V(n) ? n : void 0;
  },
  Z = Y(Object, "create"),
  tt = Z;
var ot = function () {
  (this.__data__ = tt ? tt(null) : {}), (this.size = 0);
};
var nt = function (t) {
    var o = this.has(t) && delete this.__data__[t];
    return (this.size -= o ? 1 : 0), o;
  },
  rt = Z,
  et = Object.prototype.hasOwnProperty;
var at = function (t) {
    var o = this.__data__;
    if (rt) {
      var n = o[t];
      return "__lodash_hash_undefined__" === n ? void 0 : n;
    }
    return et.call(o, t) ? o[t] : void 0;
  },
  it = Z,
  lt = Object.prototype.hasOwnProperty;
var ct = Z;
var ft = ot,
  st = nt,
  ut = at,
  dt = function (t) {
    var o = this.__data__;
    return it ? void 0 !== o[t] : lt.call(o, t);
  },
  bt = function (t, o) {
    var n = this.__data__;
    return (
      (this.size += this.has(t) ? 0 : 1),
      (n[t] = ct && void 0 === o ? "__lodash_hash_undefined__" : o),
      this
    );
  };
function pt(t) {
  var o = -1,
    n = null == t ? 0 : t.length;
  for (this.clear(); ++o < n; ) {
    var r = t[o];
    this.set(r[0], r[1]);
  }
}
(pt.prototype.clear = ft),
  (pt.prototype.delete = st),
  (pt.prototype.get = ut),
  (pt.prototype.has = dt),
  (pt.prototype.set = bt);
var ht = pt;
var gt = function () {
  (this.__data__ = []), (this.size = 0);
};
var yt = function (t, o) {
  return t === o || (t != t && o != o);
};
var vt = function (t, o) {
    for (var n = t.length; n--; ) if (yt(t[n][0], o)) return n;
    return -1;
  },
  wt = vt,
  mt = Array.prototype.splice;
var xt = vt;
var _t = vt;
var Ct = vt;
var Lt = gt,
  kt = function (t) {
    var o = this.__data__,
      n = wt(o, t);
    return (
      !(n < 0) &&
      (n == o.length - 1 ? o.pop() : mt.call(o, n, 1), --this.size, !0)
    );
  },
  Et = function (t) {
    var o = this.__data__,
      n = xt(o, t);
    return n < 0 ? void 0 : o[n][1];
  },
  Ot = function (t) {
    return _t(this.__data__, t) > -1;
  },
  jt = function (t, o) {
    var n = this.__data__,
      r = Ct(n, t);
    return r < 0 ? (++this.size, n.push([t, o])) : (n[r][1] = o), this;
  };
function Bt(t) {
  var o = -1,
    n = null == t ? 0 : t.length;
  for (this.clear(); ++o < n; ) {
    var r = t[o];
    this.set(r[0], r[1]);
  }
}
(Bt.prototype.clear = Lt),
  (Bt.prototype.delete = kt),
  (Bt.prototype.get = Et),
  (Bt.prototype.has = Ot),
  (Bt.prototype.set = jt);
var qt = Bt,
  St = Y(s, "Map"),
  zt = ht,
  It = qt,
  At = St;
var Ft = function (t) {
  var o = typeof t;
  return "string" == o || "number" == o || "symbol" == o || "boolean" == o
    ? "__proto__" !== t
    : null === t;
};
var Pt = function (t, o) {
    var n = t.__data__;
    return Ft(o) ? n["string" == typeof o ? "string" : "hash"] : n.map;
  },
  Dt = Pt;
var Wt = Pt;
var $t = Pt;
var Rt = Pt;
var Tt = function () {
    (this.size = 0),
      (this.__data__ = {
        hash: new zt(),
        map: new (At || It)(),
        string: new zt(),
      });
  },
  Ht = function (t) {
    var o = Dt(this, t).delete(t);
    return (this.size -= o ? 1 : 0), o;
  },
  Mt = function (t) {
    return Wt(this, t).get(t);
  },
  Nt = function (t) {
    return $t(this, t).has(t);
  },
  Gt = function (t, o) {
    var n = Rt(this, t),
      r = n.size;
    return n.set(t, o), (this.size += n.size == r ? 0 : 1), this;
  };
function Ut(t) {
  var o = -1,
    n = null == t ? 0 : t.length;
  for (this.clear(); ++o < n; ) {
    var r = t[o];
    this.set(r[0], r[1]);
  }
}
(Ut.prototype.clear = Tt),
  (Ut.prototype.delete = Ht),
  (Ut.prototype.get = Mt),
  (Ut.prototype.has = Nt),
  (Ut.prototype.set = Gt);
var Jt = Ut;
function Kt(t, o) {
  if ("function" != typeof t || (null != o && "function" != typeof o))
    throw new TypeError("Expected a function");
  var n = function () {
    var r = arguments,
      e = o ? o.apply(this, r) : r[0],
      a = n.cache;
    if (a.has(e)) return a.get(e);
    var i = t.apply(this, r);
    return (n.cache = a.set(e, i) || a), i;
  };
  return (n.cache = new (Kt.Cache || Jt)()), n;
}
Kt.Cache = Jt;
var Qt = Kt;
var Vt =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  Xt = /\\(\\)?/g,
  Yt = (function (t) {
    var o = Qt(t, function (t) {
        return 500 === n.size && n.clear(), t;
      }),
      n = o.cache;
    return o;
  })(function (t) {
    var o = [];
    return (
      46 === t.charCodeAt(0) && o.push(""),
      t.replace(Vt, function (t, n, r, e) {
        o.push(r ? e.replace(Xt, "$1") : n || t);
      }),
      o
    );
  });
var Zt = function (t, o) {
    for (var n = -1, r = null == t ? 0 : t.length, e = Array(r); ++n < r; )
      e[n] = o(t[n], n, t);
    return e;
  },
  to = l,
  oo = k,
  no = u ? u.prototype : void 0,
  ro = no ? no.toString : void 0;
var eo = function t(o) {
    if ("string" == typeof o) return o;
    if (to(o)) return Zt(o, t) + "";
    if (oo(o)) return ro ? ro.call(o) : "";
    var n = o + "";
    return "0" == n && 1 / o == -Infinity ? "-0" : n;
  },
  ao = eo;
var io = l,
  lo = q,
  co = Yt,
  fo = function (t) {
    return null == t ? "" : ao(t);
  };
var so = k;
var uo = function (t, o) {
    return io(t) ? t : lo(t, o) ? [t] : co(fo(t));
  },
  bo = function (t) {
    if ("string" == typeof t || so(t)) return t;
    var o = t + "";
    return "0" == o && 1 / t == -Infinity ? "-0" : o;
  };
var po = function (t, o) {
  for (var n = 0, r = (o = uo(o, t)).length; null != t && n < r; )
    t = t[bo(o[n++])];
  return n && n == r ? t : void 0;
};
var ho,
  go,
  yo,
  vo = function (t, o, n) {
    var r = null == t ? void 0 : po(t, o);
    return void 0 === r ? n : r;
  },
  wo = n.button(function (t) {
    var o = t.theme,
      n = t.fullWidth,
      r = t.variant,
      e = t.iconLocation,
      i = t.icon,
      l = t.label,
      c = t.collapseOnSmall,
      f = t.parentChildren,
      s = r || "regular",
      u =
        (l || f) && i
          ? {
              marginLeft: "end" === e ? "0" : "10px",
              marginRight: "start" === e ? "0" : "10px",
            }
          : { marginRight: 0, marginLeft: 0 },
      d = {};
    return (
      c &&
        i &&
        ((l && "" !== l.trim()) || f) &&
        (d = {
          "@media (max-width: 768px)": {
            padding: "0 14px",
            "& .button-label": { display: "none" },
          },
        }),
      a(
        {
          borderRadius: "3px",
          cursor: "pointer",
          width: n ? "100%" : "initial",
          height: "39px",
          fontFamily: "'Lato', sans-serif",
          fontWeight: "bold",
          fontSize: "14px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
          padding: (l && "" !== l.trim()) || f ? "0 25px" : "0 14px",
          transition: "all 0.2s linear",
          backgroundColor: vo(
            o,
            "buttons.".concat(s, ".enabled.background"),
            "#fff"
          ),
          borderColor: vo(o, "buttons.".concat(s, ".enabled.border"), "#000"),
          borderWidth: "1px",
          borderStyle: "solid",
          color: vo(o, "buttons.".concat(s, ".enabled.text"), "#000"),
          "& .button-label": a({ whiteSpace: n ? "normal" : "nowrap" }, u),
          "& .buttonIcon": {
            display: "block",
            height: "14px",
            "& > svg": {
              fill: vo(o, "buttons.".concat(s, ".enabled.text"), "#000"),
              color: vo(o, "buttons.".concat(s, ".enabled.text"), "#000"),
              width: "14px",
              height: "14px",
            },
          },
          "&:disabled": {
            cursor: "not-allowed",
            backgroundColor: vo(
              o,
              "buttons.".concat(s, ".disabled.background"),
              "#fff"
            ),
            borderColor: vo(
              o,
              "buttons.".concat(s, ".disabled.border"),
              "#000"
            ),
            borderWeight: "1px",
            borderStyle: "solid",
            color: vo(o, "buttons.".concat(s, ".disabled.text"), "#000"),
            "& .buttonIcon > svg": {
              fill: vo(o, "buttons.".concat(s, ".disabled.text"), "#000"),
              color: vo(o, "buttons.".concat(s, ".disabled.text"), "#000"),
            },
          },
          "&:hover:not(:disabled)": {
            backgroundColor: vo(
              o,
              "buttons.".concat(s, ".hover.background"),
              "#fff"
            ),
            borderColor: vo(o, "buttons.".concat(s, ".hover.border"), "#000"),
            borderWeight: "1px",
            borderStyle: "solid",
            color: vo(o, "buttons.".concat(s, ".hover.text"), "#000"),
            "& .buttonIcon > svg": {
              fill: vo(o, "buttons.".concat(s, ".hover.text"), "#000"),
              color: vo(o, "buttons.".concat(s, ".hover.text"), "#000"),
            },
          },
          "&:active:not(:disabled)": {
            backgroundColor: vo(
              o,
              "buttons.".concat(s, ".pressed.background"),
              "#fff"
            ),
            border: vo(o, "buttons.".concat(s, ".pressed.border"), "#000"),
            borderWeight: "1px",
            borderStyle: "solid",
            color: vo(o, "buttons.".concat(s, ".pressed.text"), "#000"),
            "& .buttonIcon > svg": {
              fill: vo(o, "buttons.".concat(s, ".pressed.text"), "#000"),
              color: vo(o, "buttons.".concat(s, ".pressed.text"), "#000"),
            },
          },
        },
        d
      )
    );
  }),
  mo = function (n) {
    var r = n.label,
      e = n.variant,
      i = void 0 === e ? "regular" : e,
      l = n.icon,
      c = n.iconLocation,
      f = void 0 === c ? "end" : c,
      s = n.onClick,
      u = n.disabled,
      d = n.fullWidth,
      b = n.collapseOnSmall,
      p = void 0 === b || b,
      h = n.children,
      g = (function (t, o) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            o.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
          var e = 0;
          for (r = Object.getOwnPropertySymbols(t); e < r.length; e++)
            o.indexOf(r[e]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[e]) &&
              (n[r[e]] = t[r[e]]);
        }
        return n;
      })(n, [
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
      y = null;
    return (
      l && (y = t.createElement("span", { className: "buttonIcon" }, l)),
      t.createElement(
        wo,
        a(
          {
            onClick: s,
            disabled: u || !1,
            variant: i || "regular",
            iconLocation: f || "end",
            label: r || "",
            fullWidth: d || !1,
            collapseOnSmall: !!p,
            icon: y,
            parentChildren: h || null,
          },
          g
        ),
        t.createElement(
          o,
          null,
          l && "start" === f && y,
          t.createElement(
            "span",
            { className: "button-label" },
            h,
            h && r ? " " : "",
            r
          ),
          l && "end" === f && y
        )
      )
    );
  },
  xo = "#fff",
  _o = "#5B5C5C",
  Co = "#E6EBEB",
  Lo = "#D5D7D8",
  ko = "#E7EAEB",
  Eo = "#07193E",
  Oo = "#0D2453",
  jo = "#05132F",
  Bo = "#C51B3F",
  qo = "#19202A",
  So = "#A2ADC0",
  zo = "#494A4D",
  Io = "#707988",
  Ao = "#E6ECEC",
  Fo = "#B5BCBD",
  Po = "#EFEDED",
  Do = "#C3CBCB",
  Wo = "#FF3958",
  $o = {
    bgColor: xo,
    fontColor: "#000",
    borderColor: "#E2E2E2",
    bulletColor: "#2781B0",
    logoColor: Bo,
    buttons: {
      regular: {
        enabled: { border: _o, text: _o, background: xo, iconColor: _o },
        disabled: { border: Co, text: Lo, background: xo, iconColor: _o },
        hover: { border: _o, text: _o, background: "#E6EAEB", iconColor: _o },
        pressed: { border: _o, text: _o, background: Lo, iconColor: _o },
      },
      callAction: {
        enabled: { border: Eo, text: xo, background: Eo, iconColor: xo },
        disabled: { border: ko, text: _o, background: ko, iconColor: _o },
        hover: { border: Oo, text: xo, background: Oo, iconColor: xo },
        pressed: { border: jo, text: xo, background: jo, iconColor: xo },
      },
      secondary: {
        enabled: { border: Bo, text: Bo, background: xo, iconColor: Bo },
        disabled: { border: Co, text: _o, background: xo, iconColor: _o },
        hover: {
          border: "#C83B51",
          text: Bo,
          background: "#FCF2F4",
          iconColor: Bo,
        },
        pressed: { border: Bo, text: xo, background: Bo, iconColor: xo },
      },
    },
  },
  Ro = {
    bgColor: qo,
    fontColor: "#8E98A9",
    borderColor: "#8E98A9",
    bulletColor: "#4B586A",
    logoColor: Wo,
    buttons: {
      regular: {
        enabled: { border: So, text: So, background: qo, iconColor: So },
        disabled: { border: zo, text: So, background: qo, iconColor: So },
        hover: { border: So, text: So, background: "#4B586A", iconColor: So },
        pressed: { border: Io, text: Io, background: "#333D4B", iconColor: Io },
      },
      callAction: {
        enabled: { border: Ao, text: qo, background: Ao, iconColor: qo },
        disabled: { border: Fo, text: qo, background: Fo, iconColor: qo },
        hover: { border: Po, text: qo, background: Po, iconColor: qo },
        pressed: { border: Do, text: qo, background: Do, iconColor: qo },
      },
      secondary: {
        enabled: { border: Wo, text: Wo, background: qo, iconColor: Wo },
        disabled: { border: zo, text: So, background: qo, iconColor: So },
        hover: { border: Wo, text: Wo, background: "#4B586A", iconColor: Wo },
        pressed: { border: Wo, text: qo, background: Wo, iconColor: qo },
      },
    },
  },
  To = function (o) {
    var n = o.darkMode,
      e = void 0 !== n && n,
      a = o.children;
    return t.createElement(r, { theme: e ? Ro : $o }, a);
  },
  Ho = require("./fonts/Lato/Lato-Black.woff"),
  Mo = require("./fonts/Lato/Lato-BlackItalic.woff"),
  No = require("./fonts/Lato/Lato-Bold.woff"),
  Go = require("./fonts/Lato/Lato-BoldItalic.woff"),
  Uo = require("./fonts/Lato/Lato-Hairline.woff"),
  Jo = require("./fonts/Lato/Lato-HairlineItalic.woff"),
  Ko = require("./fonts/Lato/Lato-Italic.woff"),
  Qo = require("./fonts/Lato/Lato-Light.woff"),
  Vo = require("./fonts/Lato/Lato-LightItalic.woff"),
  Xo = require("./fonts/Lato/Lato-Regular.woff"),
  Yo = require("./fonts/Lato/Lato-Thin.woff"),
  Zo = require("./fonts/Lato/Lato-Black.woff2"),
  tn = require("./fonts/Lato/Lato-BlackItalic.woff2"),
  on = require("./fonts/Lato/Lato-Bold.woff2"),
  nn = require("./fonts/Lato/Lato-BoldItalic.woff2"),
  rn = require("./fonts/Lato/Lato-Hairline.woff2"),
  en = require("./fonts/Lato/Lato-HairlineItalic.woff2"),
  an = require("./fonts/Lato/Lato-Italic.woff2"),
  ln = require("./fonts/Lato/Lato-Light.woff2"),
  cn = require("./fonts/Lato/Lato-LightItalic.woff2"),
  fn = require("./fonts/Lato/Lato-Regular.woff2"),
  sn = require("./fonts/Lato/Lato-Thin.woff2"),
  un = e(
    yo ||
      ((ho = ["\n    ", "\n"]),
      (go = ["\n    ", "\n"]),
      Object.defineProperty
        ? Object.defineProperty(ho, "raw", { value: go })
        : (ho.raw = go),
      (yo = ho)),
    function (t) {
      var o = t.theme;
      return '\n    /* Fonts */\n    @font-face {\n      font-family: "Lato";\n      src: url('
        .concat(tn, ') format("woff2"),\n        url(')
        .concat(
          Mo,
          ') format("woff");\n      font-weight: 900;\n      font-style: italic;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato";\n      src: url('
        )
        .concat(on, ') format("woff2"),\n        url(')
        .concat(
          No,
          ') format("woff");\n      font-weight: bold;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato";\n      src: url('
        )
        .concat(nn, ') format("woff2"),\n        url(')
        .concat(
          Go,
          ') format("woff");\n      font-weight: bold;\n      font-style: italic;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato";\n      src: url('
        )
        .concat(ln, ') format("woff2"),\n        url(')
        .concat(
          Qo,
          ') format("woff");\n      font-weight: 300;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato";\n      src: url('
        )
        .concat(Zo, ') format("woff2"),\n        url(')
        .concat(
          Ho,
          ') format("woff");\n      font-weight: 900;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato";\n      src: url('
        )
        .concat(an, ') format("woff2"),\n        url(')
        .concat(
          Ko,
          ') format("woff");\n      font-weight: normal;\n      font-style: italic;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato Hairline";\n      src: url('
        )
        .concat(rn, ') format("woff2"),\n        url(')
        .concat(
          Uo,
          ') format("woff");\n      font-weight: 300;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato";\n      src: url('
        )
        .concat(fn, ') format("woff2"),\n        url(')
        .concat(
          Xo,
          ') format("woff");\n      font-weight: normal;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato Hairline";\n      src: url('
        )
        .concat(en, ') format("woff2"),\n        url(')
        .concat(
          Jo,
          ') format("woff");\n      font-weight: 300;\n      font-style: italic;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato";\n      src: url('
        )
        .concat(cn, ') format("woff2"),\n        url(')
        .concat(
          Vo,
          ') format("woff");\n      font-weight: 300;\n      font-style: italic;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato";\n      src: url('
        )
        .concat(sn, ') format("woff2"),\n        url(')
        .concat(
          Yo,
          ') format("woff");\n      font-weight: 100;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    /* Main Page styling */\n    \n    *, *::before, *::after {\n       box-sizing: inherit;\n       outline:0;\n    }\n    \n    html {\n        box-sizing: border-box;\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n    \n    body {\n        background-color: '
        )
        .concat(vo(o, "bgColor", "#fff"), ";\n        color: ")
        .concat(
          vo(o, "fontColor", "#000"),
          ";\n        height: 100vh;\n        width: 100vw;\n        font-family: 'Lato', sans-serif;\n        margin: 0;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        font-weight: 400;\n        font-size: 14px;\n        line-height: 1.5;\n        transition: background-color 0s\n    }\n    \n    fieldset, section {\n        border: 1px solid "
        )
        .concat(
          vo(o, "borderColor", "#E2E2E2"),
          ";\n        border-radius: 3px;\n        background-color: transparent;\n        padding: 25px;\n    }\n    \n    hr {\n        border-top: 0;\n        border-left: 0;\n        borderR-right: 0;\n        border-color: "
        )
        .concat(
          vo(o, "borderColor", "#E2E2E2"),
          ";\n        background-color: transparent;\n    }\n    \n    ul {\n        padding-left: 20px;\n        list-style: none;\n        \n        li:not([class*=\"Mui\"])::before {\n          content: '￭';\n          color: "
        )
        .concat(
          vo(o, "bulletColor", "#2781B0"),
          ';\n          font-size: 20px;\n          display: inline-block;\n          width: 1em;\n          margin-left: -1em;\n        }\n        \n        ul {\n          list-style: none;\n          li:not([class*="Mui"])::before {\n            content: "￮";\n            color: '
        )
        .concat(
          vo(o, "bulletColor", "#2781B0"),
          ",\n            font-size: 20px;\n            display: inline-block;\n            width: 1em;\n            margin-left: -1em;\n          }\n        }\n      }\n      \n    button:active, button:focus, input: active, input:focus {\n        outline: 0;\n    }\n    \n    .min-icon {\n        width: 26px;\n    }\n    \n    #root: {\n        height: 100%;\n        width: 100%;\n        display: flex;\n        flex-flow: column;\n        align-items: stretch;\n      }\n    \n    #preload {\n      display: none;\n    }\n    \n    #loader-block {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      height: 100vh;\n      justify-content: center;\n      align-items: center;\n    }\n    "
        );
    }
  );
export { mo as Button, un as GlobalStyles, To as ThemeHandler };
//# sourceMappingURL=index.js.map
