"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var n = require("react"),
  t = require("styled-components");
function o(n) {
  return n && "object" == typeof n && "default" in n ? n : { default: n };
}
var r = o(n),
  e = o(t),
  a = function () {
    return (
      (a =
        Object.assign ||
        function (n) {
          for (var t, o = 1, r = arguments.length; o < r; o++)
            for (var e in (t = arguments[o]))
              Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
          return n;
        }),
      a.apply(this, arguments)
    );
  };
function c(n, t) {
  return (
    Object.defineProperty
      ? Object.defineProperty(n, "raw", { value: t })
      : (n.raw = t),
    n
  );
}
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
  f = "object" == typeof i && i && i.Object === Object && i,
  s = "object" == typeof self && self && self.Object === Object && self,
  u = f || s || Function("return this")(),
  d = u.Symbol,
  b = d,
  p = Object.prototype,
  h = p.hasOwnProperty,
  g = p.toString,
  v = b ? b.toStringTag : void 0;
var y = function (n) {
    var t = h.call(n, v),
      o = n[v];
    try {
      n[v] = void 0;
      var r = !0;
    } catch (n) {}
    var e = g.call(n);
    return r && (t ? (n[v] = o) : delete n[v]), e;
  },
  w = Object.prototype.toString;
var m = y,
  x = function (n) {
    return w.call(n);
  },
  _ = d ? d.toStringTag : void 0;
var L = function (n) {
  return null == n
    ? void 0 === n
      ? "[object Undefined]"
      : "[object Null]"
    : _ && _ in Object(n)
    ? m(n)
    : x(n);
};
var C = L,
  k = function (n) {
    return null != n && "object" == typeof n;
  };
var j = function (n) {
    return "symbol" == typeof n || (k(n) && "[object Symbol]" == C(n));
  },
  O = l,
  E = j,
  B = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  q = /^\w*$/;
var z = function (n, t) {
  if (O(n)) return !1;
  var o = typeof n;
  return (
    !("number" != o && "symbol" != o && "boolean" != o && null != n && !E(n)) ||
    q.test(n) ||
    !B.test(n) ||
    (null != t && n in Object(t))
  );
};
var A = function (n) {
    var t = typeof n;
    return null != n && ("object" == t || "function" == t);
  },
  I = L,
  S = A;
var P,
  F = function (n) {
    if (!S(n)) return !1;
    var t = I(n);
    return (
      "[object Function]" == t ||
      "[object GeneratorFunction]" == t ||
      "[object AsyncFunction]" == t ||
      "[object Proxy]" == t
    );
  },
  D = u["__core-js_shared__"],
  T = (P = /[^.]+$/.exec((D && D.keys && D.keys.IE_PROTO) || ""))
    ? "Symbol(src)_1." + P
    : "";
var $ = function (n) {
    return !!T && T in n;
  },
  H = Function.prototype.toString;
var M = F,
  R = $,
  W = A,
  G = function (n) {
    if (null != n) {
      try {
        return H.call(n);
      } catch (n) {}
      try {
        return n + "";
      } catch (n) {}
    }
    return "";
  },
  N = /^\[object .+?Constructor\]$/,
  U = Function.prototype,
  J = Object.prototype,
  K = U.toString,
  Q = J.hasOwnProperty,
  V = RegExp(
    "^" +
      K.call(Q)
        .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
var X = function (n) {
    return !(!W(n) || R(n)) && (M(n) ? V : N).test(G(n));
  },
  Y = function (n, t) {
    return null == n ? void 0 : n[t];
  };
var Z = function (n, t) {
    var o = Y(n, t);
    return X(o) ? o : void 0;
  },
  nn = Z(Object, "create"),
  tn = nn;
var on = function () {
  (this.__data__ = tn ? tn(null) : {}), (this.size = 0);
};
var rn = function (n) {
    var t = this.has(n) && delete this.__data__[n];
    return (this.size -= t ? 1 : 0), t;
  },
  en = nn,
  an = Object.prototype.hasOwnProperty;
var cn = function (n) {
    var t = this.__data__;
    if (en) {
      var o = t[n];
      return "__lodash_hash_undefined__" === o ? void 0 : o;
    }
    return an.call(t, n) ? t[n] : void 0;
  },
  ln = nn,
  fn = Object.prototype.hasOwnProperty;
var sn = nn;
var un = on,
  dn = rn,
  bn = cn,
  pn = function (n) {
    var t = this.__data__;
    return ln ? void 0 !== t[n] : fn.call(t, n);
  },
  hn = function (n, t) {
    var o = this.__data__;
    return (
      (this.size += this.has(n) ? 0 : 1),
      (o[n] = sn && void 0 === t ? "__lodash_hash_undefined__" : t),
      this
    );
  };
function gn(n) {
  var t = -1,
    o = null == n ? 0 : n.length;
  for (this.clear(); ++t < o; ) {
    var r = n[t];
    this.set(r[0], r[1]);
  }
}
(gn.prototype.clear = un),
  (gn.prototype.delete = dn),
  (gn.prototype.get = bn),
  (gn.prototype.has = pn),
  (gn.prototype.set = hn);
var vn = gn;
var yn = function () {
  (this.__data__ = []), (this.size = 0);
};
var wn = function (n, t) {
  return n === t || (n != n && t != t);
};
var mn = function (n, t) {
    for (var o = n.length; o--; ) if (wn(n[o][0], t)) return o;
    return -1;
  },
  xn = mn,
  _n = Array.prototype.splice;
var Ln = mn;
var Cn = mn;
var kn = mn;
var jn = yn,
  On = function (n) {
    var t = this.__data__,
      o = xn(t, n);
    return (
      !(o < 0) &&
      (o == t.length - 1 ? t.pop() : _n.call(t, o, 1), --this.size, !0)
    );
  },
  En = function (n) {
    var t = this.__data__,
      o = Ln(t, n);
    return o < 0 ? void 0 : t[o][1];
  },
  Bn = function (n) {
    return Cn(this.__data__, n) > -1;
  },
  qn = function (n, t) {
    var o = this.__data__,
      r = kn(o, n);
    return r < 0 ? (++this.size, o.push([n, t])) : (o[r][1] = t), this;
  };
function zn(n) {
  var t = -1,
    o = null == n ? 0 : n.length;
  for (this.clear(); ++t < o; ) {
    var r = n[t];
    this.set(r[0], r[1]);
  }
}
(zn.prototype.clear = jn),
  (zn.prototype.delete = On),
  (zn.prototype.get = En),
  (zn.prototype.has = Bn),
  (zn.prototype.set = qn);
var An = zn,
  In = Z(u, "Map"),
  Sn = vn,
  Pn = An,
  Fn = In;
var Dn = function (n) {
  var t = typeof n;
  return "string" == t || "number" == t || "symbol" == t || "boolean" == t
    ? "__proto__" !== n
    : null === n;
};
var Tn = function (n, t) {
    var o = n.__data__;
    return Dn(t) ? o["string" == typeof t ? "string" : "hash"] : o.map;
  },
  $n = Tn;
var Hn = Tn;
var Mn = Tn;
var Rn = Tn;
var Wn = function () {
    (this.size = 0),
      (this.__data__ = {
        hash: new Sn(),
        map: new (Fn || Pn)(),
        string: new Sn(),
      });
  },
  Gn = function (n) {
    var t = $n(this, n).delete(n);
    return (this.size -= t ? 1 : 0), t;
  },
  Nn = function (n) {
    return Hn(this, n).get(n);
  },
  Un = function (n) {
    return Mn(this, n).has(n);
  },
  Jn = function (n, t) {
    var o = Rn(this, n),
      r = o.size;
    return o.set(n, t), (this.size += o.size == r ? 0 : 1), this;
  };
function Kn(n) {
  var t = -1,
    o = null == n ? 0 : n.length;
  for (this.clear(); ++t < o; ) {
    var r = n[t];
    this.set(r[0], r[1]);
  }
}
(Kn.prototype.clear = Wn),
  (Kn.prototype.delete = Gn),
  (Kn.prototype.get = Nn),
  (Kn.prototype.has = Un),
  (Kn.prototype.set = Jn);
var Qn = Kn;
function Vn(n, t) {
  if ("function" != typeof n || (null != t && "function" != typeof t))
    throw new TypeError("Expected a function");
  var o = function () {
    var r = arguments,
      e = t ? t.apply(this, r) : r[0],
      a = o.cache;
    if (a.has(e)) return a.get(e);
    var c = n.apply(this, r);
    return (o.cache = a.set(e, c) || a), c;
  };
  return (o.cache = new (Vn.Cache || Qn)()), o;
}
Vn.Cache = Qn;
var Xn = Vn;
var Yn =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  Zn = /\\(\\)?/g,
  nt = (function (n) {
    var t = Xn(n, function (n) {
        return 500 === o.size && o.clear(), n;
      }),
      o = t.cache;
    return t;
  })(function (n) {
    var t = [];
    return (
      46 === n.charCodeAt(0) && t.push(""),
      n.replace(Yn, function (n, o, r, e) {
        t.push(r ? e.replace(Zn, "$1") : o || n);
      }),
      t
    );
  });
var tt = function (n, t) {
    for (var o = -1, r = null == n ? 0 : n.length, e = Array(r); ++o < r; )
      e[o] = t(n[o], o, n);
    return e;
  },
  ot = l,
  rt = j,
  et = d ? d.prototype : void 0,
  at = et ? et.toString : void 0;
var ct = function n(t) {
    if ("string" == typeof t) return t;
    if (ot(t)) return tt(t, n) + "";
    if (rt(t)) return at ? at.call(t) : "";
    var o = t + "";
    return "0" == o && 1 / t == -Infinity ? "-0" : o;
  },
  it = ct;
var lt = l,
  ft = z,
  st = nt,
  ut = function (n) {
    return null == n ? "" : it(n);
  };
var dt = j;
var bt = function (n, t) {
    return lt(n) ? n : ft(n, t) ? [n] : st(ut(n));
  },
  pt = function (n) {
    if ("string" == typeof n || dt(n)) return n;
    var t = n + "";
    return "0" == t && 1 / n == -Infinity ? "-0" : t;
  };
var ht = function (n, t) {
  for (var o = 0, r = (t = bt(t, n)).length; null != n && o < r; )
    n = n[pt(t[o++])];
  return o && o == r ? n : void 0;
};
var gt,
  vt,
  yt = function (n, t, o) {
    var r = null == n ? void 0 : ht(n, t);
    return void 0 === r ? o : r;
  },
  wt = e.default.button(
    gt || (gt = c(["\n  ", "\n"], ["\n  ", "\n"])),
    function (n) {
      var t = n.theme,
        o = n.fullWidth,
        r = n.variant,
        e = n.iconLocation,
        a = n.icon,
        c = n.label,
        i = n.collapseOnSmall,
        l = r || "regular";
      return "\n  border-radius: 3px;\n  cursor: pointer;\n  width: "
        .concat(
          o ? "100%" : "initial",
          ';\n  height: 39px;\n  font-family: "Lato", sans-serif;\n  font-weight: bold;\n  font-size: 14px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  padding: '
        )
        .concat(
          c && "" !== c.trim() ? "0 25px" : "0 14px",
          ";\n  transition: all 0.2s linear;\n    background-color: "
        )
        .concat(
          yt(t, "buttons.".concat(l, ".enabled.background"), "#fff"),
          ";\n\n  border: "
        )
        .concat(
          yt(t, "buttons.".concat(l, ".enabled.border"), "#000"),
          "\n    1px solid;\n  color: "
        )
        .concat(
          yt(t, "buttons.".concat(l, ".enabled.text"), "#000"),
          ";\n  & .button-label {\n    "
        )
        .concat(
          c && a
            ? "\n        margin-left: "
                .concat("end" === e ? "0" : "10px", ";\n        margin-right: ")
                .concat("start" === e ? "0" : "10px", ";\n    ")
            : "\n        margin-right: 0;\n        margin-left: 0;\n    ",
          "\n  }\n  & .buttonIcon {\n    display: block;\n    height: 14px;\n\n    & > svg {\n      fill: "
        )
        .concat(
          yt(t, "buttons.".concat(l, ".enabled.text"), "#000"),
          ";\n      color: "
        )
        .concat(
          yt(t, "buttons.".concat(l, ".enabled.text"), "#000"),
          ";\n      width: 14px;\n      height: 14px;\n    }\n  }\n  &:disabled {\n    cursor: not-allowed;\n    background-color: "
        )
        .concat(
          yt(t, "buttons.".concat(l, ".disabled.background"), "#fff"),
          ";\n    border: "
        )
        .concat(
          yt(t, "buttons.".concat(l, ".disabled.border"), "#000"),
          "\n      1px solid;\n    color: "
        )
        .concat(
          yt(t, "buttons.".concat(l, ".disabled.text"), "#000"),
          ";\n    & .buttonIcon > svg {\n      fill: "
        )
        .concat(
          yt(t, "buttons.".concat(l, ".disabled.text"), "#000"),
          ";\n      color: "
        )
        .concat(
          yt(t, "buttons.".concat(l, ".disabled.text"), "#000"),
          ";\n    }\n  }\n  &:hover:not(:disabled) {\n    background-color: "
        )
        .concat(
          yt(t, "buttons.".concat(l, ".hover.background"), "#fff"),
          ";\n    border: "
        )
        .concat(
          yt(t, "buttons.".concat(l, ".hover.border"), "#000"),
          "\n      1px solid;\n    color: "
        )
        .concat(
          yt(t, "buttons.".concat(l, ".hover.text"), "#000"),
          ";\n    & .buttonIcon > svg {\n      fill: "
        )
        .concat(
          yt(t, "buttons.".concat(l, ".hover.text"), "#000"),
          ";\n      color: "
        )
        .concat(
          yt(t, "buttons.".concat(l, ".hover.text"), "#000"),
          ";\n    }\n  }\n  &:active:not(:disabled) {\n    background-color: "
        )
        .concat(
          yt(t, "buttons.".concat(l, ".pressed.background"), "#fff"),
          ";\n    border: "
        )
        .concat(
          yt(t, "buttons.".concat(l, ".pressed.border"), "#000"),
          "\n      1px solid;\n    color: "
        )
        .concat(
          yt(t, "buttons.".concat(l, ".pressed.text"), "#000"),
          ";\n    & .buttonIcon > svg {\n      fill: "
        )
        .concat(
          yt(t, "buttons.".concat(l, ".pressed.text"), "#000"),
          ";\n      color: "
        )
        .concat(
          yt(t, "buttons.".concat(l, ".pressed.text"), "#000"),
          ";\n    }\n  }\n\n  "
        )
        .concat(
          i && a && c && "" !== c.trim()
            ? "\n    @media (max-width: 768px) {\n    padding: 0 14px;\n    & .button-label {\n      display: none;\n    }\n  }\n    "
            : "",
          "\n "
        );
    }
  ),
  mt = "#fff",
  xt = "#5B5C5C",
  _t = "#E6EBEB",
  Lt = "#D5D7D8",
  Ct = "#E7EAEB",
  kt = "#07193E",
  jt = "#0D2453",
  Ot = "#05132F",
  Et = "#C51B3F",
  Bt = "#19202A",
  qt = "#A2ADC0",
  zt = "#494A4D",
  At = "#707988",
  It = "#E6ECEC",
  St = "#B5BCBD",
  Pt = "#EFEDED",
  Ft = "#C3CBCB",
  Dt = "#FF3958",
  Tt = {
    bgColor: mt,
    fontColor: "#000",
    borderColor: "#E2E2E2",
    bulletColor: "#2781B0",
    buttons: {
      regular: {
        enabled: { border: xt, text: xt, background: mt, iconColor: xt },
        disabled: { border: _t, text: Lt, background: mt, iconColor: xt },
        hover: { border: xt, text: xt, background: "#E6EAEB", iconColor: xt },
        pressed: { border: xt, text: xt, background: Lt, iconColor: xt },
      },
      callAction: {
        enabled: { border: kt, text: mt, background: kt, iconColor: mt },
        disabled: { border: Ct, text: xt, background: Ct, iconColor: xt },
        hover: { border: jt, text: mt, background: jt, iconColor: mt },
        pressed: { border: Ot, text: mt, background: Ot, iconColor: mt },
      },
      secondary: {
        enabled: { border: Et, text: Et, background: mt, iconColor: Et },
        disabled: { border: _t, text: xt, background: mt, iconColor: xt },
        hover: {
          border: "#C83B51",
          text: Et,
          background: "#FCF2F4",
          iconColor: Et,
        },
        pressed: { border: Et, text: mt, background: Et, iconColor: mt },
      },
    },
  },
  $t = {
    bgColor: Bt,
    fontColor: "#8E98A9",
    borderColor: "#8E98A9",
    bulletColor: "#4B586A",
    buttons: {
      regular: {
        enabled: { border: qt, text: qt, background: Bt, iconColor: qt },
        disabled: { border: zt, text: qt, background: Bt, iconColor: qt },
        hover: { border: qt, text: qt, background: "#4B586A", iconColor: qt },
        pressed: { border: At, text: At, background: "#333D4B", iconColor: At },
      },
      callAction: {
        enabled: { border: It, text: Bt, background: It, iconColor: Bt },
        disabled: { border: St, text: Bt, background: St, iconColor: Bt },
        hover: { border: Pt, text: Bt, background: Pt, iconColor: Bt },
        pressed: { border: Ft, text: Bt, background: Ft, iconColor: Bt },
      },
      secondary: {
        enabled: { border: Dt, text: Dt, background: Bt, iconColor: Dt },
        disabled: { border: zt, text: qt, background: Bt, iconColor: qt },
        hover: { border: Dt, text: Dt, background: "#4B586A", iconColor: Dt },
        pressed: { border: Dt, text: Bt, background: Dt, iconColor: Bt },
      },
    },
  },
  Ht = require("./fonts/Lato/Lato-Black.woff"),
  Mt = require("./fonts/Lato/Lato-BlackItalic.woff"),
  Rt = require("./fonts/Lato/Lato-Bold.woff"),
  Wt = require("./fonts/Lato/Lato-BoldItalic.woff"),
  Gt = require("./fonts/Lato/Lato-Hairline.woff"),
  Nt = require("./fonts/Lato/Lato-HairlineItalic.woff"),
  Ut = require("./fonts/Lato/Lato-Italic.woff"),
  Jt = require("./fonts/Lato/Lato-Light.woff"),
  Kt = require("./fonts/Lato/Lato-LightItalic.woff"),
  Qt = require("./fonts/Lato/Lato-Regular.woff"),
  Vt = require("./fonts/Lato/Lato-Thin.woff"),
  Xt = require("./fonts/Lato/Lato-Black.woff2"),
  Yt = require("./fonts/Lato/Lato-BlackItalic.woff2"),
  Zt = require("./fonts/Lato/Lato-Bold.woff2"),
  no = require("./fonts/Lato/Lato-BoldItalic.woff2"),
  to = require("./fonts/Lato/Lato-Hairline.woff2"),
  oo = require("./fonts/Lato/Lato-HairlineItalic.woff2"),
  ro = require("./fonts/Lato/Lato-Italic.woff2"),
  eo = require("./fonts/Lato/Lato-Light.woff2"),
  ao = require("./fonts/Lato/Lato-LightItalic.woff2"),
  co = require("./fonts/Lato/Lato-Regular.woff2"),
  io = require("./fonts/Lato/Lato-Thin.woff2"),
  lo = t.createGlobalStyle(
    vt || (vt = c(["\n    ", "\n"], ["\n    ", "\n"])),
    function (n) {
      var t = n.theme;
      return '\n    /* Fonts */\n    @font-face {\n      font-family: "Lato";\n      src: url('
        .concat(Yt, ') format("woff2"),\n        url(')
        .concat(
          Mt,
          ') format("woff");\n      font-weight: 900;\n      font-style: italic;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato";\n      src: url('
        )
        .concat(Zt, ') format("woff2"),\n        url(')
        .concat(
          Rt,
          ') format("woff");\n      font-weight: bold;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato";\n      src: url('
        )
        .concat(no, ') format("woff2"),\n        url(')
        .concat(
          Wt,
          ') format("woff");\n      font-weight: bold;\n      font-style: italic;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato";\n      src: url('
        )
        .concat(eo, ') format("woff2"),\n        url(')
        .concat(
          Jt,
          ') format("woff");\n      font-weight: 300;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato";\n      src: url('
        )
        .concat(Xt, ') format("woff2"),\n        url(')
        .concat(
          Ht,
          ') format("woff");\n      font-weight: 900;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato";\n      src: url('
        )
        .concat(ro, ') format("woff2"),\n        url(')
        .concat(
          Ut,
          ') format("woff");\n      font-weight: normal;\n      font-style: italic;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato Hairline";\n      src: url('
        )
        .concat(to, ') format("woff2"),\n        url(')
        .concat(
          Gt,
          ') format("woff");\n      font-weight: 300;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato";\n      src: url('
        )
        .concat(co, ') format("woff2"),\n        url(')
        .concat(
          Qt,
          ') format("woff");\n      font-weight: normal;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato Hairline";\n      src: url('
        )
        .concat(oo, ') format("woff2"),\n        url(')
        .concat(
          Nt,
          ') format("woff");\n      font-weight: 300;\n      font-style: italic;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato";\n      src: url('
        )
        .concat(ao, ') format("woff2"),\n        url(')
        .concat(
          Kt,
          ') format("woff");\n      font-weight: 300;\n      font-style: italic;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato";\n      src: url('
        )
        .concat(io, ') format("woff2"),\n        url(')
        .concat(
          Vt,
          ') format("woff");\n      font-weight: 100;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    /* Main Page styling */\n    \n    *, *::before, *::after {\n       box-sizing: inherit;\n       outline:0;\n    }\n    \n    html {\n        box-sizing: border-box;\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n    \n    body {\n        background-color: '
        )
        .concat(yt(t, "bgColor", "#fff"), ";\n        color: ")
        .concat(
          yt(t, "fontColor", "#000"),
          ";\n        height: 100vh;\n        width: 100vw;\n        font-family: 'Lato', sans-serif;\n        margin: 0;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        font-weight: 400;\n        font-size: 14px;\n        line-height: 1.5;\n        transition: background-color 0s\n    }\n    \n    fieldset, section {\n        border: 1px solid "
        )
        .concat(
          yt(t, "borderColor", "#E2E2E2"),
          ";\n        border-radius: 3px;\n        background-color: transparent;\n        padding: 25px;\n    }\n    \n    hr {\n        border-top: 0;\n        border-left: 0;\n        borderR-right: 0;\n        border-color: "
        )
        .concat(
          yt(t, "borderColor", "#E2E2E2"),
          ";\n        background-color: transparent;\n    }\n    \n    ul {\n        padding-left: 20px;\n        list-style: none;\n        \n        li:not([class*=\"Mui\"])::before {\n          content: '￭';\n          color: "
        )
        .concat(
          yt(t, "bulletColor", "#2781B0"),
          ';\n          font-size: 20px;\n          display: inline-block;\n          width: 1em;\n          margin-left: -1em;\n        }\n        \n        ul {\n          list-style: none;\n          li:not([class*="Mui"])::before {\n            content: "￮";\n            color: '
        )
        .concat(
          yt(t, "bulletColor", "#2781B0"),
          ",\n            font-size: 20px;\n            display: inline-block;\n            width: 1em;\n            margin-left: -1em;\n          }\n        }\n      }\n      \n    button:active, button:focus, input: active, input:focus {\n        outline: 0;\n    }\n    \n    .min-icon {\n        width: 26px;\n    }\n    \n    #root: {\n        height: 100%;\n        width: 100%;\n        display: flex;\n        flex-flow: column;\n        align-items: stretch;\n      }\n    \n    #preload {\n      display: none;\n    }\n    \n    #loader-block {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      height: 100vh;\n      justify-content: center;\n      align-items: center;\n    }\n    "
        );
    }
  );
(exports.Button = function (n) {
  var t = n.label,
    o = n.variant,
    e = void 0 === o ? "regular" : o,
    c = n.icon,
    i = n.iconLocation,
    l = void 0 === i ? "end" : i,
    f = n.onClick,
    s = n.disabled,
    u = n.fullWidth,
    d = n.collapseOnSmall,
    b = void 0 === d || d,
    p = (function (n, t) {
      var o = {};
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) &&
          t.indexOf(r) < 0 &&
          (o[r] = n[r]);
      if (null != n && "function" == typeof Object.getOwnPropertySymbols) {
        var e = 0;
        for (r = Object.getOwnPropertySymbols(n); e < r.length; e++)
          t.indexOf(r[e]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(n, r[e]) &&
            (o[r[e]] = n[r[e]]);
      }
      return o;
    })(n, [
      "label",
      "variant",
      "icon",
      "iconLocation",
      "onClick",
      "disabled",
      "fullWidth",
      "collapseOnSmall",
    ]),
    h = null;
  return (
    c && (h = r.default.createElement("span", { className: "buttonIcon" }, c)),
    r.default.createElement(
      wt,
      a(
        {
          onClick: f,
          disabled: s,
          variant: e,
          iconLocation: l,
          label: t,
          fullWidth: u,
          collapseOnSmall: b,
          icon: h,
        },
        p
      ),
      c && "start" === l && h,
      r.default.createElement("span", { className: "button-label" }, t),
      c && "end" === l && h
    )
  );
}),
  (exports.GlobalStyles = lo),
  (exports.ThemeHandler = function (n) {
    var o = n.darkMode,
      e = void 0 !== o && o,
      a = n.children;
    return r.default.createElement(t.ThemeProvider, { theme: e ? $t : Tt }, a);
  });
//# sourceMappingURL=index.js.map
