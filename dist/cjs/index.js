"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var t = require("react"),
  n = require("styled-components");
function o(t) {
  return t && "object" == typeof t && "default" in t ? t : { default: t };
}
var r = o(t),
  e = o(n),
  a = function () {
    return (
      (a =
        Object.assign ||
        function (t) {
          for (var n, o = 1, r = arguments.length; o < r; o++)
            for (var e in (n = arguments[o]))
              Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
          return t;
        }),
      a.apply(this, arguments)
    );
  };
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
  u = "object" == typeof self && self && self.Object === Object && self,
  d = l || u || Function("return this")(),
  s = d.Symbol,
  b = s,
  f = Object.prototype,
  p = f.hasOwnProperty,
  v = f.toString,
  h = b ? b.toStringTag : void 0;
var g = function (t) {
    var n = p.call(t, h),
      o = t[h];
    try {
      t[h] = void 0;
      var r = !0;
    } catch (t) {}
    var e = v.call(t);
    return r && (n ? (t[h] = o) : delete t[h]), e;
  },
  y = Object.prototype.toString;
var _ = g,
  x = function (t) {
    return y.call(t);
  },
  C = s ? s.toStringTag : void 0;
var k = function (t) {
  return null == t
    ? void 0 === t
      ? "[object Undefined]"
      : "[object Null]"
    : C && C in Object(t)
    ? _(t)
    : x(t);
};
var m = k,
  O = function (t) {
    return null != t && "object" == typeof t;
  };
var j = function (t) {
    return "symbol" == typeof t || (O(t) && "[object Symbol]" == m(t));
  },
  w = i,
  E = j,
  A = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  B = /^\w*$/;
var S = function (t, n) {
  if (w(t)) return !1;
  var o = typeof t;
  return (
    !("number" != o && "symbol" != o && "boolean" != o && null != t && !E(t)) ||
    B.test(t) ||
    !A.test(t) ||
    (null != n && t in Object(n))
  );
};
var P = function (t) {
    var n = typeof t;
    return null != t && ("object" == n || "function" == n);
  },
  F = k,
  z = P;
var D,
  I = function (t) {
    if (!z(t)) return !1;
    var n = F(t);
    return (
      "[object Function]" == n ||
      "[object GeneratorFunction]" == n ||
      "[object AsyncFunction]" == n ||
      "[object Proxy]" == n
    );
  },
  $ = d["__core-js_shared__"],
  T = (D = /[^.]+$/.exec(($ && $.keys && $.keys.IE_PROTO) || ""))
    ? "Symbol(src)_1." + D
    : "";
var L = function (t) {
    return !!T && T in t;
  },
  W = Function.prototype.toString;
var M = I,
  N = L,
  q = P,
  R = function (t) {
    if (null != t) {
      try {
        return W.call(t);
      } catch (t) {}
      try {
        return t + "";
      } catch (t) {}
    }
    return "";
  },
  G = /^\[object .+?Constructor\]$/,
  H = Function.prototype,
  U = Object.prototype,
  J = H.toString,
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
    return !(!q(t) || N(t)) && (M(t) ? Q : G).test(R(t));
  },
  X = function (t, n) {
    return null == t ? void 0 : t[n];
  };
var Y = function (t, n) {
    var o = X(t, n);
    return V(o) ? o : void 0;
  },
  Z = Y(Object, "create"),
  tt = Z;
var nt = function () {
  (this.__data__ = tt ? tt(null) : {}), (this.size = 0);
};
var ot = function (t) {
    var n = this.has(t) && delete this.__data__[t];
    return (this.size -= n ? 1 : 0), n;
  },
  rt = Z,
  et = Object.prototype.hasOwnProperty;
var at = function (t) {
    var n = this.__data__;
    if (rt) {
      var o = n[t];
      return "__lodash_hash_undefined__" === o ? void 0 : o;
    }
    return et.call(n, t) ? n[t] : void 0;
  },
  ct = Z,
  it = Object.prototype.hasOwnProperty;
var lt = Z;
var ut = nt,
  dt = ot,
  st = at,
  bt = function (t) {
    var n = this.__data__;
    return ct ? void 0 !== n[t] : it.call(n, t);
  },
  ft = function (t, n) {
    var o = this.__data__;
    return (
      (this.size += this.has(t) ? 0 : 1),
      (o[t] = lt && void 0 === n ? "__lodash_hash_undefined__" : n),
      this
    );
  };
function pt(t) {
  var n = -1,
    o = null == t ? 0 : t.length;
  for (this.clear(); ++n < o; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
(pt.prototype.clear = ut),
  (pt.prototype.delete = dt),
  (pt.prototype.get = st),
  (pt.prototype.has = bt),
  (pt.prototype.set = ft);
var vt = pt;
var ht = function () {
  (this.__data__ = []), (this.size = 0);
};
var gt = function (t, n) {
  return t === n || (t != t && n != n);
};
var yt = function (t, n) {
    for (var o = t.length; o--; ) if (gt(t[o][0], n)) return o;
    return -1;
  },
  _t = yt,
  xt = Array.prototype.splice;
var Ct = yt;
var kt = yt;
var mt = yt;
var Ot = ht,
  jt = function (t) {
    var n = this.__data__,
      o = _t(n, t);
    return (
      !(o < 0) &&
      (o == n.length - 1 ? n.pop() : xt.call(n, o, 1), --this.size, !0)
    );
  },
  wt = function (t) {
    var n = this.__data__,
      o = Ct(n, t);
    return o < 0 ? void 0 : n[o][1];
  },
  Et = function (t) {
    return kt(this.__data__, t) > -1;
  },
  At = function (t, n) {
    var o = this.__data__,
      r = mt(o, t);
    return r < 0 ? (++this.size, o.push([t, n])) : (o[r][1] = n), this;
  };
function Bt(t) {
  var n = -1,
    o = null == t ? 0 : t.length;
  for (this.clear(); ++n < o; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
(Bt.prototype.clear = Ot),
  (Bt.prototype.delete = jt),
  (Bt.prototype.get = wt),
  (Bt.prototype.has = Et),
  (Bt.prototype.set = At);
var St = Bt,
  Pt = Y(d, "Map"),
  Ft = vt,
  zt = St,
  Dt = Pt;
var It = function (t) {
  var n = typeof t;
  return "string" == n || "number" == n || "symbol" == n || "boolean" == n
    ? "__proto__" !== t
    : null === t;
};
var $t = function (t, n) {
    var o = t.__data__;
    return It(n) ? o["string" == typeof n ? "string" : "hash"] : o.map;
  },
  Tt = $t;
var Lt = $t;
var Wt = $t;
var Mt = $t;
var Nt = function () {
    (this.size = 0),
      (this.__data__ = {
        hash: new Ft(),
        map: new (Dt || zt)(),
        string: new Ft(),
      });
  },
  qt = function (t) {
    var n = Tt(this, t).delete(t);
    return (this.size -= n ? 1 : 0), n;
  },
  Rt = function (t) {
    return Lt(this, t).get(t);
  },
  Gt = function (t) {
    return Wt(this, t).has(t);
  },
  Ht = function (t, n) {
    var o = Mt(this, t),
      r = o.size;
    return o.set(t, n), (this.size += o.size == r ? 0 : 1), this;
  };
function Ut(t) {
  var n = -1,
    o = null == t ? 0 : t.length;
  for (this.clear(); ++n < o; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
(Ut.prototype.clear = Nt),
  (Ut.prototype.delete = qt),
  (Ut.prototype.get = Rt),
  (Ut.prototype.has = Gt),
  (Ut.prototype.set = Ht);
var Jt = Ut;
function Kt(t, n) {
  if ("function" != typeof t || (null != n && "function" != typeof n))
    throw new TypeError("Expected a function");
  var o = function () {
    var r = arguments,
      e = n ? n.apply(this, r) : r[0],
      a = o.cache;
    if (a.has(e)) return a.get(e);
    var c = t.apply(this, r);
    return (o.cache = a.set(e, c) || a), c;
  };
  return (o.cache = new (Kt.Cache || Jt)()), o;
}
Kt.Cache = Jt;
var Qt = Kt;
var Vt =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  Xt = /\\(\\)?/g,
  Yt = (function (t) {
    var n = Qt(t, function (t) {
        return 500 === o.size && o.clear(), t;
      }),
      o = n.cache;
    return n;
  })(function (t) {
    var n = [];
    return (
      46 === t.charCodeAt(0) && n.push(""),
      t.replace(Vt, function (t, o, r, e) {
        n.push(r ? e.replace(Xt, "$1") : o || t);
      }),
      n
    );
  });
var Zt = function (t, n) {
    for (var o = -1, r = null == t ? 0 : t.length, e = Array(r); ++o < r; )
      e[o] = n(t[o], o, t);
    return e;
  },
  tn = i,
  nn = j,
  on = s ? s.prototype : void 0,
  rn = on ? on.toString : void 0;
var en = function t(n) {
    if ("string" == typeof n) return n;
    if (tn(n)) return Zt(n, t) + "";
    if (nn(n)) return rn ? rn.call(n) : "";
    var o = n + "";
    return "0" == o && 1 / n == -Infinity ? "-0" : o;
  },
  an = en;
var cn = i,
  ln = S,
  un = Yt,
  dn = function (t) {
    return null == t ? "" : an(t);
  };
var sn = j;
var bn = function (t, n) {
    return cn(t) ? t : ln(t, n) ? [t] : un(dn(t));
  },
  fn = function (t) {
    if ("string" == typeof t || sn(t)) return t;
    var n = t + "";
    return "0" == n && 1 / t == -Infinity ? "-0" : n;
  };
var pn = function (t, n) {
  for (var o = 0, r = (n = bn(n, t)).length; null != t && o < r; )
    t = t[fn(n[o++])];
  return o && o == r ? t : void 0;
};
var vn,
  hn,
  gn,
  yn = function (t, n, o) {
    var r = null == t ? void 0 : pn(t, n);
    return void 0 === r ? o : r;
  },
  _n = e.default.button(
    gn ||
      ((vn = ["\n  ", "\n"]),
      (hn = ["\n  ", "\n"]),
      Object.defineProperty
        ? Object.defineProperty(vn, "raw", { value: hn })
        : (vn.raw = hn),
      (gn = vn)),
    function (t) {
      var n = t.theme,
        o = t.fullWidth,
        r = t.variant,
        e = t.iconLocation,
        a = t.icon,
        c = t.label,
        i = t.collapseOnSmall,
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
          yn(n, "buttons.".concat(l, ".enabled.background"), "#fff"),
          ";\n\n  border: "
        )
        .concat(
          yn(n, "buttons.".concat(l, ".enabled.border"), "#000"),
          "\n    1px solid;\n  color: "
        )
        .concat(
          yn(n, "buttons.".concat(l, ".enabled.text"), "#000"),
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
          yn(n, "buttons.".concat(l, ".enabled.text"), "#000"),
          ";\n      color: "
        )
        .concat(
          yn(n, "buttons.".concat(l, ".enabled.text"), "#000"),
          ";\n      width: 14px;\n      height: 14px;\n    }\n  }\n  &:disabled {\n    cursor: not-allowed;\n    background-color: "
        )
        .concat(
          yn(n, "buttons.".concat(l, ".disabled.background"), "#fff"),
          ";\n    border: "
        )
        .concat(
          yn(n, "buttons.".concat(l, ".disabled.border"), "#000"),
          "\n      1px solid;\n    color: "
        )
        .concat(
          yn(n, "buttons.".concat(l, ".disabled.text"), "#000"),
          ";\n    & .buttonIcon > svg {\n      fill: "
        )
        .concat(
          yn(n, "buttons.".concat(l, ".disabled.text"), "#000"),
          ";\n      color: "
        )
        .concat(
          yn(n, "buttons.".concat(l, ".disabled.text"), "#000"),
          ";\n    }\n  }\n  &:hover:not(:disabled) {\n    background-color: "
        )
        .concat(
          yn(n, "buttons.".concat(l, ".hover.background"), "#fff"),
          ";\n    border: "
        )
        .concat(
          yn(n, "buttons.".concat(l, ".hover.border"), "#000"),
          "\n      1px solid;\n    color: "
        )
        .concat(
          yn(n, "buttons.".concat(l, ".hover.text"), "#000"),
          ";\n    & .buttonIcon > svg {\n      fill: "
        )
        .concat(
          yn(n, "buttons.".concat(l, ".hover.text"), "#000"),
          ";\n      color: "
        )
        .concat(
          yn(n, "buttons.".concat(l, ".hover.text"), "#000"),
          ";\n    }\n  }\n  &:active:not(:disabled) {\n    background-color: "
        )
        .concat(
          yn(n, "buttons.".concat(l, ".pressed.background"), "#fff"),
          ";\n    border: "
        )
        .concat(
          yn(n, "buttons.".concat(l, ".pressed.border"), "#000"),
          "\n      1px solid;\n    color: "
        )
        .concat(
          yn(n, "buttons.".concat(l, ".pressed.text"), "#000"),
          ";\n    & .buttonIcon > svg {\n      fill: "
        )
        .concat(
          yn(n, "buttons.".concat(l, ".pressed.text"), "#000"),
          ";\n      color: "
        )
        .concat(
          yn(n, "buttons.".concat(l, ".pressed.text"), "#000"),
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
  xn = "#fff",
  Cn = "#5B5C5C",
  kn = "#E6EBEB",
  mn = "#D5D7D8",
  On = "#E7EAEB",
  jn = "#07193E",
  wn = "#0D2453",
  En = "#05132F",
  An = "#C51B3F",
  Bn = "#19202A",
  Sn = "#A2ADC0",
  Pn = "#494A4D",
  Fn = "#707988",
  zn = "#E6ECEC",
  Dn = "#B5BCBD",
  In = "#EFEDED",
  $n = "#C3CBCB",
  Tn = "#FF3958",
  Ln = {
    bgColor: xn,
    buttons: {
      regular: {
        enabled: { border: Cn, text: Cn, background: xn, iconColor: Cn },
        disabled: { border: kn, text: mn, background: xn, iconColor: Cn },
        hover: { border: Cn, text: Cn, background: "#E6EAEB", iconColor: Cn },
        pressed: { border: Cn, text: Cn, background: mn, iconColor: Cn },
      },
      callAction: {
        enabled: { border: jn, text: xn, background: jn, iconColor: xn },
        disabled: { border: On, text: Cn, background: On, iconColor: Cn },
        hover: { border: wn, text: xn, background: wn, iconColor: xn },
        pressed: { border: En, text: xn, background: En, iconColor: xn },
      },
      secondary: {
        enabled: { border: An, text: An, background: xn, iconColor: An },
        disabled: { border: kn, text: Cn, background: xn, iconColor: Cn },
        hover: {
          border: "#C83B51",
          text: An,
          background: "#FCF2F4",
          iconColor: An,
        },
        pressed: { border: An, text: xn, background: An, iconColor: xn },
      },
    },
  },
  Wn = {
    bgColor: Bn,
    buttons: {
      regular: {
        enabled: { border: Sn, text: Sn, background: Bn, iconColor: Sn },
        disabled: { border: Pn, text: Sn, background: Bn, iconColor: Sn },
        hover: { border: Sn, text: Sn, background: "#4B586A", iconColor: Sn },
        pressed: { border: Fn, text: Fn, background: "#333D4B", iconColor: Fn },
      },
      callAction: {
        enabled: { border: zn, text: Bn, background: zn, iconColor: Bn },
        disabled: { border: Dn, text: Bn, background: Dn, iconColor: Bn },
        hover: { border: In, text: Bn, background: In, iconColor: Bn },
        pressed: { border: $n, text: Bn, background: $n, iconColor: Bn },
      },
      secondary: {
        enabled: { border: Tn, text: Tn, background: Bn, iconColor: Tn },
        disabled: { border: Pn, text: Sn, background: Bn, iconColor: Sn },
        hover: { border: Tn, text: Tn, background: "#4B586A", iconColor: Tn },
        pressed: { border: Tn, text: Bn, background: Tn, iconColor: Bn },
      },
    },
  };
(exports.Button = function (t) {
  var n = t.label,
    o = t.variant,
    e = void 0 === o ? "regular" : o,
    c = t.icon,
    i = t.iconLocation,
    l = void 0 === i ? "end" : i,
    u = t.onClick,
    d = t.disabled,
    s = t.fullWidth,
    b = t.collapseOnSmall,
    f = void 0 === b || b,
    p = (function (t, n) {
      var o = {};
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) &&
          n.indexOf(r) < 0 &&
          (o[r] = t[r]);
      if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
        var e = 0;
        for (r = Object.getOwnPropertySymbols(t); e < r.length; e++)
          n.indexOf(r[e]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(t, r[e]) &&
            (o[r[e]] = t[r[e]]);
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
    v = null;
  return (
    c && (v = r.default.createElement("span", { className: "buttonIcon" }, c)),
    r.default.createElement(
      _n,
      a(
        {
          onClick: u,
          disabled: d,
          variant: e,
          iconLocation: l,
          label: n,
          fullWidth: s,
          collapseOnSmall: f,
          icon: v,
        },
        p
      ),
      c && "start" === l && v,
      r.default.createElement("span", { className: "button-label" }, n),
      c && "end" === l && v
    )
  );
}),
  (exports.ThemeHandler = function (t) {
    var o = t.darkMode,
      e = void 0 !== o && o,
      a = t.children;
    return r.default.createElement(n.ThemeProvider, { theme: e ? Wn : Ln }, a);
  });
//# sourceMappingURL=index.js.map
