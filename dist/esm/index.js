import n from "react";
import t, {
  ThemeProvider as o,
  createGlobalStyle as r,
} from "styled-components";
var e = function () {
  return (
    (e =
      Object.assign ||
      function (n) {
        for (var t, o = 1, r = arguments.length; o < r; o++)
          for (var e in (t = arguments[o]))
            Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
        return n;
      }),
    e.apply(this, arguments)
  );
};
function a(n, t) {
  return (
    Object.defineProperty
      ? Object.defineProperty(n, "raw", { value: t })
      : (n.raw = t),
    n
  );
}
var c =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {},
  i = Array.isArray,
  l = "object" == typeof c && c && c.Object === Object && c,
  f = "object" == typeof self && self && self.Object === Object && self,
  s = l || f || Function("return this")(),
  u = s.Symbol,
  d = u,
  b = Object.prototype,
  p = b.hasOwnProperty,
  h = b.toString,
  g = d ? d.toStringTag : void 0;
var v = function (n) {
    var t = p.call(n, g),
      o = n[g];
    try {
      n[g] = void 0;
      var r = !0;
    } catch (n) {}
    var e = h.call(n);
    return r && (t ? (n[g] = o) : delete n[g]), e;
  },
  y = Object.prototype.toString;
var w = v,
  m = function (n) {
    return y.call(n);
  },
  x = u ? u.toStringTag : void 0;
var _ = function (n) {
  return null == n
    ? void 0 === n
      ? "[object Undefined]"
      : "[object Null]"
    : x && x in Object(n)
    ? w(n)
    : m(n);
};
var L = _,
  C = function (n) {
    return null != n && "object" == typeof n;
  };
var k = function (n) {
    return "symbol" == typeof n || (C(n) && "[object Symbol]" == L(n));
  },
  O = i,
  j = k,
  E = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  B = /^\w*$/;
var q = function (n, t) {
  if (O(n)) return !1;
  var o = typeof n;
  return (
    !("number" != o && "symbol" != o && "boolean" != o && null != n && !j(n)) ||
    B.test(n) ||
    !E.test(n) ||
    (null != t && n in Object(t))
  );
};
var z = function (n) {
    var t = typeof n;
    return null != n && ("object" == t || "function" == t);
  },
  A = _,
  I = z;
var S,
  F = function (n) {
    if (!I(n)) return !1;
    var t = A(n);
    return (
      "[object Function]" == t ||
      "[object GeneratorFunction]" == t ||
      "[object AsyncFunction]" == t ||
      "[object Proxy]" == t
    );
  },
  P = s["__core-js_shared__"],
  D = (S = /[^.]+$/.exec((P && P.keys && P.keys.IE_PROTO) || ""))
    ? "Symbol(src)_1." + S
    : "";
var $ = function (n) {
    return !!D && D in n;
  },
  T = Function.prototype.toString;
var H = F,
  M = $,
  R = z,
  W = function (n) {
    if (null != n) {
      try {
        return T.call(n);
      } catch (n) {}
      try {
        return n + "";
      } catch (n) {}
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
var V = function (n) {
    return !(!R(n) || M(n)) && (H(n) ? Q : N).test(W(n));
  },
  X = function (n, t) {
    return null == n ? void 0 : n[t];
  };
var Y = function (n, t) {
    var o = X(n, t);
    return V(o) ? o : void 0;
  },
  Z = Y(Object, "create"),
  nn = Z;
var tn = function () {
  (this.__data__ = nn ? nn(null) : {}), (this.size = 0);
};
var on = function (n) {
    var t = this.has(n) && delete this.__data__[n];
    return (this.size -= t ? 1 : 0), t;
  },
  rn = Z,
  en = Object.prototype.hasOwnProperty;
var an = function (n) {
    var t = this.__data__;
    if (rn) {
      var o = t[n];
      return "__lodash_hash_undefined__" === o ? void 0 : o;
    }
    return en.call(t, n) ? t[n] : void 0;
  },
  cn = Z,
  ln = Object.prototype.hasOwnProperty;
var fn = Z;
var sn = tn,
  un = on,
  dn = an,
  bn = function (n) {
    var t = this.__data__;
    return cn ? void 0 !== t[n] : ln.call(t, n);
  },
  pn = function (n, t) {
    var o = this.__data__;
    return (
      (this.size += this.has(n) ? 0 : 1),
      (o[n] = fn && void 0 === t ? "__lodash_hash_undefined__" : t),
      this
    );
  };
function hn(n) {
  var t = -1,
    o = null == n ? 0 : n.length;
  for (this.clear(); ++t < o; ) {
    var r = n[t];
    this.set(r[0], r[1]);
  }
}
(hn.prototype.clear = sn),
  (hn.prototype.delete = un),
  (hn.prototype.get = dn),
  (hn.prototype.has = bn),
  (hn.prototype.set = pn);
var gn = hn;
var vn = function () {
  (this.__data__ = []), (this.size = 0);
};
var yn = function (n, t) {
  return n === t || (n != n && t != t);
};
var wn = function (n, t) {
    for (var o = n.length; o--; ) if (yn(n[o][0], t)) return o;
    return -1;
  },
  mn = wn,
  xn = Array.prototype.splice;
var _n = wn;
var Ln = wn;
var Cn = wn;
var kn = vn,
  On = function (n) {
    var t = this.__data__,
      o = mn(t, n);
    return (
      !(o < 0) &&
      (o == t.length - 1 ? t.pop() : xn.call(t, o, 1), --this.size, !0)
    );
  },
  jn = function (n) {
    var t = this.__data__,
      o = _n(t, n);
    return o < 0 ? void 0 : t[o][1];
  },
  En = function (n) {
    return Ln(this.__data__, n) > -1;
  },
  Bn = function (n, t) {
    var o = this.__data__,
      r = Cn(o, n);
    return r < 0 ? (++this.size, o.push([n, t])) : (o[r][1] = t), this;
  };
function qn(n) {
  var t = -1,
    o = null == n ? 0 : n.length;
  for (this.clear(); ++t < o; ) {
    var r = n[t];
    this.set(r[0], r[1]);
  }
}
(qn.prototype.clear = kn),
  (qn.prototype.delete = On),
  (qn.prototype.get = jn),
  (qn.prototype.has = En),
  (qn.prototype.set = Bn);
var zn = qn,
  An = Y(s, "Map"),
  In = gn,
  Sn = zn,
  Fn = An;
var Pn = function (n) {
  var t = typeof n;
  return "string" == t || "number" == t || "symbol" == t || "boolean" == t
    ? "__proto__" !== n
    : null === n;
};
var Dn = function (n, t) {
    var o = n.__data__;
    return Pn(t) ? o["string" == typeof t ? "string" : "hash"] : o.map;
  },
  $n = Dn;
var Tn = Dn;
var Hn = Dn;
var Mn = Dn;
var Rn = function () {
    (this.size = 0),
      (this.__data__ = {
        hash: new In(),
        map: new (Fn || Sn)(),
        string: new In(),
      });
  },
  Wn = function (n) {
    var t = $n(this, n).delete(n);
    return (this.size -= t ? 1 : 0), t;
  },
  Nn = function (n) {
    return Tn(this, n).get(n);
  },
  Gn = function (n) {
    return Hn(this, n).has(n);
  },
  Un = function (n, t) {
    var o = Mn(this, n),
      r = o.size;
    return o.set(n, t), (this.size += o.size == r ? 0 : 1), this;
  };
function Jn(n) {
  var t = -1,
    o = null == n ? 0 : n.length;
  for (this.clear(); ++t < o; ) {
    var r = n[t];
    this.set(r[0], r[1]);
  }
}
(Jn.prototype.clear = Rn),
  (Jn.prototype.delete = Wn),
  (Jn.prototype.get = Nn),
  (Jn.prototype.has = Gn),
  (Jn.prototype.set = Un);
var Kn = Jn;
function Qn(n, t) {
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
  return (o.cache = new (Qn.Cache || Kn)()), o;
}
Qn.Cache = Kn;
var Vn = Qn;
var Xn =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  Yn = /\\(\\)?/g,
  Zn = (function (n) {
    var t = Vn(n, function (n) {
        return 500 === o.size && o.clear(), n;
      }),
      o = t.cache;
    return t;
  })(function (n) {
    var t = [];
    return (
      46 === n.charCodeAt(0) && t.push(""),
      n.replace(Xn, function (n, o, r, e) {
        t.push(r ? e.replace(Yn, "$1") : o || n);
      }),
      t
    );
  });
var nt = function (n, t) {
    for (var o = -1, r = null == n ? 0 : n.length, e = Array(r); ++o < r; )
      e[o] = t(n[o], o, n);
    return e;
  },
  tt = i,
  ot = k,
  rt = u ? u.prototype : void 0,
  et = rt ? rt.toString : void 0;
var at = function n(t) {
    if ("string" == typeof t) return t;
    if (tt(t)) return nt(t, n) + "";
    if (ot(t)) return et ? et.call(t) : "";
    var o = t + "";
    return "0" == o && 1 / t == -Infinity ? "-0" : o;
  },
  ct = at;
var it = i,
  lt = q,
  ft = Zn,
  st = function (n) {
    return null == n ? "" : ct(n);
  };
var ut = k;
var dt = function (n, t) {
    return it(n) ? n : lt(n, t) ? [n] : ft(st(n));
  },
  bt = function (n) {
    if ("string" == typeof n || ut(n)) return n;
    var t = n + "";
    return "0" == t && 1 / n == -Infinity ? "-0" : t;
  };
var pt = function (n, t) {
  for (var o = 0, r = (t = dt(t, n)).length; null != n && o < r; )
    n = n[bt(t[o++])];
  return o && o == r ? n : void 0;
};
var ht,
  gt,
  vt = function (n, t, o) {
    var r = null == n ? void 0 : pt(n, t);
    return void 0 === r ? o : r;
  },
  yt = t.button(ht || (ht = a(["\n  ", "\n"], ["\n  ", "\n"])), function (n) {
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
        vt(t, "buttons.".concat(l, ".enabled.background"), "#fff"),
        ";\n\n  border: "
      )
      .concat(
        vt(t, "buttons.".concat(l, ".enabled.border"), "#000"),
        "\n    1px solid;\n  color: "
      )
      .concat(
        vt(t, "buttons.".concat(l, ".enabled.text"), "#000"),
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
        vt(t, "buttons.".concat(l, ".enabled.text"), "#000"),
        ";\n      color: "
      )
      .concat(
        vt(t, "buttons.".concat(l, ".enabled.text"), "#000"),
        ";\n      width: 14px;\n      height: 14px;\n    }\n  }\n  &:disabled {\n    cursor: not-allowed;\n    background-color: "
      )
      .concat(
        vt(t, "buttons.".concat(l, ".disabled.background"), "#fff"),
        ";\n    border: "
      )
      .concat(
        vt(t, "buttons.".concat(l, ".disabled.border"), "#000"),
        "\n      1px solid;\n    color: "
      )
      .concat(
        vt(t, "buttons.".concat(l, ".disabled.text"), "#000"),
        ";\n    & .buttonIcon > svg {\n      fill: "
      )
      .concat(
        vt(t, "buttons.".concat(l, ".disabled.text"), "#000"),
        ";\n      color: "
      )
      .concat(
        vt(t, "buttons.".concat(l, ".disabled.text"), "#000"),
        ";\n    }\n  }\n  &:hover:not(:disabled) {\n    background-color: "
      )
      .concat(
        vt(t, "buttons.".concat(l, ".hover.background"), "#fff"),
        ";\n    border: "
      )
      .concat(
        vt(t, "buttons.".concat(l, ".hover.border"), "#000"),
        "\n      1px solid;\n    color: "
      )
      .concat(
        vt(t, "buttons.".concat(l, ".hover.text"), "#000"),
        ";\n    & .buttonIcon > svg {\n      fill: "
      )
      .concat(
        vt(t, "buttons.".concat(l, ".hover.text"), "#000"),
        ";\n      color: "
      )
      .concat(
        vt(t, "buttons.".concat(l, ".hover.text"), "#000"),
        ";\n    }\n  }\n  &:active:not(:disabled) {\n    background-color: "
      )
      .concat(
        vt(t, "buttons.".concat(l, ".pressed.background"), "#fff"),
        ";\n    border: "
      )
      .concat(
        vt(t, "buttons.".concat(l, ".pressed.border"), "#000"),
        "\n      1px solid;\n    color: "
      )
      .concat(
        vt(t, "buttons.".concat(l, ".pressed.text"), "#000"),
        ";\n    & .buttonIcon > svg {\n      fill: "
      )
      .concat(
        vt(t, "buttons.".concat(l, ".pressed.text"), "#000"),
        ";\n      color: "
      )
      .concat(
        vt(t, "buttons.".concat(l, ".pressed.text"), "#000"),
        ";\n    }\n  }\n\n  "
      )
      .concat(
        i && a && c && "" !== c.trim()
          ? "\n    @media (max-width: 768px) {\n    padding: 0 14px;\n    & .button-label {\n      display: none;\n    }\n  }\n    "
          : "",
        "\n "
      );
  }),
  wt = function (t) {
    var o = t.label,
      r = t.variant,
      a = void 0 === r ? "regular" : r,
      c = t.icon,
      i = t.iconLocation,
      l = void 0 === i ? "end" : i,
      f = t.onClick,
      s = t.disabled,
      u = t.fullWidth,
      d = t.collapseOnSmall,
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
      })(t, [
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
      c && (h = n.createElement("span", { className: "buttonIcon" }, c)),
      n.createElement(
        yt,
        e(
          {
            onClick: f,
            disabled: s,
            variant: a,
            iconLocation: l,
            label: o,
            fullWidth: u,
            collapseOnSmall: b,
            icon: h,
          },
          p
        ),
        c && "start" === l && h,
        n.createElement("span", { className: "button-label" }, o),
        c && "end" === l && h
      )
    );
  },
  mt = "#fff",
  xt = "#5B5C5C",
  _t = "#E6EBEB",
  Lt = "#D5D7D8",
  Ct = "#E7EAEB",
  kt = "#07193E",
  Ot = "#0D2453",
  jt = "#05132F",
  Et = "#C51B3F",
  Bt = "#19202A",
  qt = "#A2ADC0",
  zt = "#494A4D",
  At = "#707988",
  It = "#E6ECEC",
  St = "#B5BCBD",
  Ft = "#EFEDED",
  Pt = "#C3CBCB",
  Dt = "#FF3958",
  $t = {
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
        hover: { border: Ot, text: mt, background: Ot, iconColor: mt },
        pressed: { border: jt, text: mt, background: jt, iconColor: mt },
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
  Tt = {
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
        hover: { border: Ft, text: Bt, background: Ft, iconColor: Bt },
        pressed: { border: Pt, text: Bt, background: Pt, iconColor: Bt },
      },
      secondary: {
        enabled: { border: Dt, text: Dt, background: Bt, iconColor: Dt },
        disabled: { border: zt, text: qt, background: Bt, iconColor: qt },
        hover: { border: Dt, text: Dt, background: "#4B586A", iconColor: Dt },
        pressed: { border: Dt, text: Bt, background: Dt, iconColor: Bt },
      },
    },
  },
  Ht = function (t) {
    var r = t.darkMode,
      e = void 0 !== r && r,
      a = t.children;
    return n.createElement(o, { theme: e ? Tt : $t }, a);
  },
  Mt = require("./fonts/Lato/Lato-Black.woff"),
  Rt = require("./fonts/Lato/Lato-BlackItalic.woff"),
  Wt = require("./fonts/Lato/Lato-Bold.woff"),
  Nt = require("./fonts/Lato/Lato-BoldItalic.woff"),
  Gt = require("./fonts/Lato/Lato-Hairline.woff"),
  Ut = require("./fonts/Lato/Lato-HairlineItalic.woff"),
  Jt = require("./fonts/Lato/Lato-Italic.woff"),
  Kt = require("./fonts/Lato/Lato-Light.woff"),
  Qt = require("./fonts/Lato/Lato-LightItalic.woff"),
  Vt = require("./fonts/Lato/Lato-Regular.woff"),
  Xt = require("./fonts/Lato/Lato-Thin.woff"),
  Yt = require("./fonts/Lato/Lato-Black.woff2"),
  Zt = require("./fonts/Lato/Lato-BlackItalic.woff2"),
  no = require("./fonts/Lato/Lato-Bold.woff2"),
  to = require("./fonts/Lato/Lato-BoldItalic.woff2"),
  oo = require("./fonts/Lato/Lato-Hairline.woff2"),
  ro = require("./fonts/Lato/Lato-HairlineItalic.woff2"),
  eo = require("./fonts/Lato/Lato-Italic.woff2"),
  ao = require("./fonts/Lato/Lato-Light.woff2"),
  co = require("./fonts/Lato/Lato-LightItalic.woff2"),
  io = require("./fonts/Lato/Lato-Regular.woff2"),
  lo = require("./fonts/Lato/Lato-Thin.woff2"),
  fo = r(gt || (gt = a(["\n    ", "\n"], ["\n    ", "\n"])), function (n) {
    var t = n.theme;
    return '\n    /* Fonts */\n    @font-face {\n      font-family: "Lato";\n      src: url('
      .concat(Zt, ') format("woff2"),\n        url(')
      .concat(
        Rt,
        ') format("woff");\n      font-weight: 900;\n      font-style: italic;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato";\n      src: url('
      )
      .concat(no, ') format("woff2"),\n        url(')
      .concat(
        Wt,
        ') format("woff");\n      font-weight: bold;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato";\n      src: url('
      )
      .concat(to, ') format("woff2"),\n        url(')
      .concat(
        Nt,
        ') format("woff");\n      font-weight: bold;\n      font-style: italic;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato";\n      src: url('
      )
      .concat(ao, ') format("woff2"),\n        url(')
      .concat(
        Kt,
        ') format("woff");\n      font-weight: 300;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato";\n      src: url('
      )
      .concat(Yt, ') format("woff2"),\n        url(')
      .concat(
        Mt,
        ') format("woff");\n      font-weight: 900;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato";\n      src: url('
      )
      .concat(eo, ') format("woff2"),\n        url(')
      .concat(
        Jt,
        ') format("woff");\n      font-weight: normal;\n      font-style: italic;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato Hairline";\n      src: url('
      )
      .concat(oo, ') format("woff2"),\n        url(')
      .concat(
        Gt,
        ') format("woff");\n      font-weight: 300;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato";\n      src: url('
      )
      .concat(io, ') format("woff2"),\n        url(')
      .concat(
        Vt,
        ') format("woff");\n      font-weight: normal;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato Hairline";\n      src: url('
      )
      .concat(ro, ') format("woff2"),\n        url(')
      .concat(
        Ut,
        ') format("woff");\n      font-weight: 300;\n      font-style: italic;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato";\n      src: url('
      )
      .concat(co, ') format("woff2"),\n        url(')
      .concat(
        Qt,
        ') format("woff");\n      font-weight: 300;\n      font-style: italic;\n      font-display: swap;\n    }\n    \n    @font-face {\n      font-family: "Lato";\n      src: url('
      )
      .concat(lo, ') format("woff2"),\n        url(')
      .concat(
        Xt,
        ') format("woff");\n      font-weight: 100;\n      font-style: normal;\n      font-display: swap;\n    }\n    \n    /* Main Page styling */\n    \n    *, *::before, *::after {\n       box-sizing: inherit;\n       outline:0;\n    }\n    \n    html {\n        box-sizing: border-box;\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n    \n    body {\n        background-color: '
      )
      .concat(vt(t, "bgColor", "#fff"), ";\n        color: ")
      .concat(
        vt(t, "fontColor", "#000"),
        ";\n        height: 100vh;\n        width: 100vw;\n        font-family: 'Lato', sans-serif;\n        margin: 0;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        font-weight: 400;\n        font-size: 14px;\n        line-height: 1.5;\n        transition: background-color 0s\n    }\n    \n    fieldset, section {\n        border: 1px solid "
      )
      .concat(
        vt(t, "borderColor", "#E2E2E2"),
        ";\n        border-radius: 3px;\n        background-color: transparent;\n        padding: 25px;\n    }\n    \n    hr {\n        border-top: 0;\n        border-left: 0;\n        borderR-right: 0;\n        border-color: "
      )
      .concat(
        vt(t, "borderColor", "#E2E2E2"),
        ";\n        background-color: transparent;\n    }\n    \n    ul {\n        padding-left: 20px;\n        list-style: none;\n        \n        li:not([class*=\"Mui\"])::before {\n          content: '￭';\n          color: "
      )
      .concat(
        vt(t, "bulletColor", "#2781B0"),
        ';\n          font-size: 20px;\n          display: inline-block;\n          width: 1em;\n          margin-left: -1em;\n        }\n        \n        ul {\n          list-style: none;\n          li:not([class*="Mui"])::before {\n            content: "￮";\n            color: '
      )
      .concat(
        vt(t, "bulletColor", "#2781B0"),
        ",\n            font-size: 20px;\n            display: inline-block;\n            width: 1em;\n            margin-left: -1em;\n          }\n        }\n      }\n      \n    button:active, button:focus, input: active, input:focus {\n        outline: 0;\n    }\n    \n    .min-icon {\n        width: 26px;\n    }\n    \n    #root: {\n        height: 100%;\n        width: 100%;\n        display: flex;\n        flex-flow: column;\n        align-items: stretch;\n      }\n    \n    #preload {\n      display: none;\n    }\n    \n    #loader-block {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      height: 100vh;\n      justify-content: center;\n      align-items: center;\n    }\n    "
      );
  });
export { wt as Button, fo as GlobalStyles, Ht as ThemeHandler };
//# sourceMappingURL=index.js.map
