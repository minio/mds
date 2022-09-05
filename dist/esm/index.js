import t from "react";
import n, { ThemeProvider as o } from "styled-components";
var r = function () {
  return (
    (r =
      Object.assign ||
      function (t) {
        for (var n, o = 1, r = arguments.length; o < r; o++)
          for (var e in (n = arguments[o]))
            Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
        return t;
      }),
    r.apply(this, arguments)
  );
};
var e =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {},
  a = Array.isArray,
  c = "object" == typeof e && e && e.Object === Object && e,
  i = "object" == typeof self && self && self.Object === Object && self,
  l = c || i || Function("return this")(),
  u = l.Symbol,
  d = u,
  s = Object.prototype,
  b = s.hasOwnProperty,
  f = s.toString,
  p = d ? d.toStringTag : void 0;
var v = function (t) {
    var n = b.call(t, p),
      o = t[p];
    try {
      t[p] = void 0;
      var r = !0;
    } catch (t) {}
    var e = f.call(t);
    return r && (n ? (t[p] = o) : delete t[p]), e;
  },
  h = Object.prototype.toString;
var g = v,
  y = function (t) {
    return h.call(t);
  },
  _ = u ? u.toStringTag : void 0;
var x = function (t) {
  return null == t
    ? void 0 === t
      ? "[object Undefined]"
      : "[object Null]"
    : _ && _ in Object(t)
    ? g(t)
    : y(t);
};
var C = x,
  m = function (t) {
    return null != t && "object" == typeof t;
  };
var k = function (t) {
    return "symbol" == typeof t || (m(t) && "[object Symbol]" == C(t));
  },
  O = a,
  j = k,
  w = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  E = /^\w*$/;
var A = function (t, n) {
  if (O(t)) return !1;
  var o = typeof t;
  return (
    !("number" != o && "symbol" != o && "boolean" != o && null != t && !j(t)) ||
    E.test(t) ||
    !w.test(t) ||
    (null != n && t in Object(n))
  );
};
var S = function (t) {
    var n = typeof t;
    return null != t && ("object" == n || "function" == n);
  },
  B = x,
  F = S;
var z,
  P = function (t) {
    if (!F(t)) return !1;
    var n = B(t);
    return (
      "[object Function]" == n ||
      "[object GeneratorFunction]" == n ||
      "[object AsyncFunction]" == n ||
      "[object Proxy]" == n
    );
  },
  D = l["__core-js_shared__"],
  I = (z = /[^.]+$/.exec((D && D.keys && D.keys.IE_PROTO) || ""))
    ? "Symbol(src)_1." + z
    : "";
var $ = function (t) {
    return !!I && I in t;
  },
  T = Function.prototype.toString;
var L = P,
  W = $,
  N = S,
  M = function (t) {
    if (null != t) {
      try {
        return T.call(t);
      } catch (t) {}
      try {
        return t + "";
      } catch (t) {}
    }
    return "";
  },
  R = /^\[object .+?Constructor\]$/,
  G = Function.prototype,
  U = Object.prototype,
  q = G.toString,
  H = U.hasOwnProperty,
  J = RegExp(
    "^" +
      q
        .call(H)
        .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
var K = function (t) {
    return !(!N(t) || W(t)) && (L(t) ? J : R).test(M(t));
  },
  Q = function (t, n) {
    return null == t ? void 0 : t[n];
  };
var V = function (t, n) {
    var o = Q(t, n);
    return K(o) ? o : void 0;
  },
  X = V(Object, "create"),
  Y = X;
var Z = function () {
  (this.__data__ = Y ? Y(null) : {}), (this.size = 0);
};
var tt = function (t) {
    var n = this.has(t) && delete this.__data__[t];
    return (this.size -= n ? 1 : 0), n;
  },
  nt = X,
  ot = Object.prototype.hasOwnProperty;
var rt = function (t) {
    var n = this.__data__;
    if (nt) {
      var o = n[t];
      return "__lodash_hash_undefined__" === o ? void 0 : o;
    }
    return ot.call(n, t) ? n[t] : void 0;
  },
  et = X,
  at = Object.prototype.hasOwnProperty;
var ct = X;
var it = Z,
  lt = tt,
  ut = rt,
  dt = function (t) {
    var n = this.__data__;
    return et ? void 0 !== n[t] : at.call(n, t);
  },
  st = function (t, n) {
    var o = this.__data__;
    return (
      (this.size += this.has(t) ? 0 : 1),
      (o[t] = ct && void 0 === n ? "__lodash_hash_undefined__" : n),
      this
    );
  };
function bt(t) {
  var n = -1,
    o = null == t ? 0 : t.length;
  for (this.clear(); ++n < o; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
(bt.prototype.clear = it),
  (bt.prototype.delete = lt),
  (bt.prototype.get = ut),
  (bt.prototype.has = dt),
  (bt.prototype.set = st);
var ft = bt;
var pt = function () {
  (this.__data__ = []), (this.size = 0);
};
var vt = function (t, n) {
  return t === n || (t != t && n != n);
};
var ht = function (t, n) {
    for (var o = t.length; o--; ) if (vt(t[o][0], n)) return o;
    return -1;
  },
  gt = ht,
  yt = Array.prototype.splice;
var _t = ht;
var xt = ht;
var Ct = ht;
var mt = pt,
  kt = function (t) {
    var n = this.__data__,
      o = gt(n, t);
    return (
      !(o < 0) &&
      (o == n.length - 1 ? n.pop() : yt.call(n, o, 1), --this.size, !0)
    );
  },
  Ot = function (t) {
    var n = this.__data__,
      o = _t(n, t);
    return o < 0 ? void 0 : n[o][1];
  },
  jt = function (t) {
    return xt(this.__data__, t) > -1;
  },
  wt = function (t, n) {
    var o = this.__data__,
      r = Ct(o, t);
    return r < 0 ? (++this.size, o.push([t, n])) : (o[r][1] = n), this;
  };
function Et(t) {
  var n = -1,
    o = null == t ? 0 : t.length;
  for (this.clear(); ++n < o; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
(Et.prototype.clear = mt),
  (Et.prototype.delete = kt),
  (Et.prototype.get = Ot),
  (Et.prototype.has = jt),
  (Et.prototype.set = wt);
var At = Et,
  St = V(l, "Map"),
  Bt = ft,
  Ft = At,
  zt = St;
var Pt = function (t) {
  var n = typeof t;
  return "string" == n || "number" == n || "symbol" == n || "boolean" == n
    ? "__proto__" !== t
    : null === t;
};
var Dt = function (t, n) {
    var o = t.__data__;
    return Pt(n) ? o["string" == typeof n ? "string" : "hash"] : o.map;
  },
  It = Dt;
var $t = Dt;
var Tt = Dt;
var Lt = Dt;
var Wt = function () {
    (this.size = 0),
      (this.__data__ = {
        hash: new Bt(),
        map: new (zt || Ft)(),
        string: new Bt(),
      });
  },
  Nt = function (t) {
    var n = It(this, t).delete(t);
    return (this.size -= n ? 1 : 0), n;
  },
  Mt = function (t) {
    return $t(this, t).get(t);
  },
  Rt = function (t) {
    return Tt(this, t).has(t);
  },
  Gt = function (t, n) {
    var o = Lt(this, t),
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
(Ut.prototype.clear = Wt),
  (Ut.prototype.delete = Nt),
  (Ut.prototype.get = Mt),
  (Ut.prototype.has = Rt),
  (Ut.prototype.set = Gt);
var qt = Ut;
function Ht(t, n) {
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
  return (o.cache = new (Ht.Cache || qt)()), o;
}
Ht.Cache = qt;
var Jt = Ht;
var Kt =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  Qt = /\\(\\)?/g,
  Vt = (function (t) {
    var n = Jt(t, function (t) {
        return 500 === o.size && o.clear(), t;
      }),
      o = n.cache;
    return n;
  })(function (t) {
    var n = [];
    return (
      46 === t.charCodeAt(0) && n.push(""),
      t.replace(Kt, function (t, o, r, e) {
        n.push(r ? e.replace(Qt, "$1") : o || t);
      }),
      n
    );
  });
var Xt = function (t, n) {
    for (var o = -1, r = null == t ? 0 : t.length, e = Array(r); ++o < r; )
      e[o] = n(t[o], o, t);
    return e;
  },
  Yt = a,
  Zt = k,
  tn = u ? u.prototype : void 0,
  nn = tn ? tn.toString : void 0;
var on = function t(n) {
    if ("string" == typeof n) return n;
    if (Yt(n)) return Xt(n, t) + "";
    if (Zt(n)) return nn ? nn.call(n) : "";
    var o = n + "";
    return "0" == o && 1 / n == -Infinity ? "-0" : o;
  },
  rn = on;
var en = a,
  an = A,
  cn = Vt,
  ln = function (t) {
    return null == t ? "" : rn(t);
  };
var un = k;
var dn = function (t, n) {
    return en(t) ? t : an(t, n) ? [t] : cn(ln(t));
  },
  sn = function (t) {
    if ("string" == typeof t || un(t)) return t;
    var n = t + "";
    return "0" == n && 1 / t == -Infinity ? "-0" : n;
  };
var bn = function (t, n) {
  for (var o = 0, r = (n = dn(n, t)).length; null != t && o < r; )
    t = t[sn(n[o++])];
  return o && o == r ? t : void 0;
};
var fn,
  pn,
  vn,
  hn = function (t, n, o) {
    var r = null == t ? void 0 : bn(t, n);
    return void 0 === r ? o : r;
  },
  gn = n.button(
    vn ||
      ((fn = ["\n  ", "\n"]),
      (pn = ["\n  ", "\n"]),
      Object.defineProperty
        ? Object.defineProperty(fn, "raw", { value: pn })
        : (fn.raw = pn),
      (vn = fn)),
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
          hn(n, "buttons.".concat(l, ".enabled.background"), "#fff"),
          ";\n\n  border: "
        )
        .concat(
          hn(n, "buttons.".concat(l, ".enabled.border"), "#000"),
          "\n    1px solid;\n  color: "
        )
        .concat(
          hn(n, "buttons.".concat(l, ".enabled.text"), "#000"),
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
          hn(n, "buttons.".concat(l, ".enabled.text"), "#000"),
          ";\n      color: "
        )
        .concat(
          hn(n, "buttons.".concat(l, ".enabled.text"), "#000"),
          ";\n      width: 14px;\n      height: 14px;\n    }\n  }\n  &:disabled {\n    cursor: not-allowed;\n    background-color: "
        )
        .concat(
          hn(n, "buttons.".concat(l, ".disabled.background"), "#fff"),
          ";\n    border: "
        )
        .concat(
          hn(n, "buttons.".concat(l, ".disabled.border"), "#000"),
          "\n      1px solid;\n    color: "
        )
        .concat(
          hn(n, "buttons.".concat(l, ".disabled.text"), "#000"),
          ";\n    & .buttonIcon > svg {\n      fill: "
        )
        .concat(
          hn(n, "buttons.".concat(l, ".disabled.text"), "#000"),
          ";\n      color: "
        )
        .concat(
          hn(n, "buttons.".concat(l, ".disabled.text"), "#000"),
          ";\n    }\n  }\n  &:hover:not(:disabled) {\n    background-color: "
        )
        .concat(
          hn(n, "buttons.".concat(l, ".hover.background"), "#fff"),
          ";\n    border: "
        )
        .concat(
          hn(n, "buttons.".concat(l, ".hover.border"), "#000"),
          "\n      1px solid;\n    color: "
        )
        .concat(
          hn(n, "buttons.".concat(l, ".hover.text"), "#000"),
          ";\n    & .buttonIcon > svg {\n      fill: "
        )
        .concat(
          hn(n, "buttons.".concat(l, ".hover.text"), "#000"),
          ";\n      color: "
        )
        .concat(
          hn(n, "buttons.".concat(l, ".hover.text"), "#000"),
          ";\n    }\n  }\n  &:active:not(:disabled) {\n    background-color: "
        )
        .concat(
          hn(n, "buttons.".concat(l, ".pressed.background"), "#fff"),
          ";\n    border: "
        )
        .concat(
          hn(n, "buttons.".concat(l, ".pressed.border"), "#000"),
          "\n      1px solid;\n    color: "
        )
        .concat(
          hn(n, "buttons.".concat(l, ".pressed.text"), "#000"),
          ";\n    & .buttonIcon > svg {\n      fill: "
        )
        .concat(
          hn(n, "buttons.".concat(l, ".pressed.text"), "#000"),
          ";\n      color: "
        )
        .concat(
          hn(n, "buttons.".concat(l, ".pressed.text"), "#000"),
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
  yn = function (n) {
    var o = n.label,
      e = n.variant,
      a = void 0 === e ? "regular" : e,
      c = n.icon,
      i = n.iconLocation,
      l = void 0 === i ? "end" : i,
      u = n.onClick,
      d = n.disabled,
      s = n.fullWidth,
      b = n.collapseOnSmall,
      f = void 0 === b || b,
      p = n.type,
      v = (function (t, n) {
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
      })(n, [
        "label",
        "variant",
        "icon",
        "iconLocation",
        "onClick",
        "disabled",
        "fullWidth",
        "collapseOnSmall",
        "type",
      ]),
      h = null;
    return (
      c && (h = t.createElement("span", { className: "buttonIcon" }, c)),
      t.createElement(
        gn,
        r(
          {
            onClick: u,
            disabled: d,
            variant: a,
            iconLocation: l,
            label: o,
            fullWidth: s,
            collapseOnSmall: f,
            icon: h,
            type: p || "button",
          },
          v
        ),
        c && "start" === l && h,
        t.createElement("span", { className: "button-label" }, o),
        c && "end" === l && h
      )
    );
  },
  _n = "#fff",
  xn = "#5B5C5C",
  Cn = "#E6EBEB",
  mn = "#D5D7D8",
  kn = "#E7EAEB",
  On = "#07193E",
  jn = "#0D2453",
  wn = "#05132F",
  En = "#C51B3F",
  An = "#19202A",
  Sn = "#A2ADC0",
  Bn = "#494A4D",
  Fn = "#707988",
  zn = "#E6ECEC",
  Pn = "#B5BCBD",
  Dn = "#EFEDED",
  In = "#C3CBCB",
  $n = "#FF3958",
  Tn = {
    bgColor: _n,
    buttons: {
      regular: {
        enabled: { border: xn, text: xn, background: _n, iconColor: xn },
        disabled: { border: Cn, text: mn, background: _n, iconColor: xn },
        hover: { border: xn, text: xn, background: "#E6EAEB", iconColor: xn },
        pressed: { border: xn, text: xn, background: mn, iconColor: xn },
      },
      callAction: {
        enabled: { border: On, text: _n, background: On, iconColor: _n },
        disabled: { border: kn, text: xn, background: kn, iconColor: xn },
        hover: { border: jn, text: _n, background: jn, iconColor: _n },
        pressed: { border: wn, text: _n, background: wn, iconColor: _n },
      },
      secondary: {
        enabled: { border: En, text: En, background: _n, iconColor: En },
        disabled: { border: Cn, text: xn, background: _n, iconColor: xn },
        hover: {
          border: "#C83B51",
          text: En,
          background: "#FCF2F4",
          iconColor: En,
        },
        pressed: { border: En, text: _n, background: En, iconColor: _n },
      },
    },
  },
  Ln = {
    bgColor: An,
    buttons: {
      regular: {
        enabled: { border: Sn, text: Sn, background: An, iconColor: Sn },
        disabled: { border: Bn, text: Sn, background: An, iconColor: Sn },
        hover: { border: Sn, text: Sn, background: "#4B586A", iconColor: Sn },
        pressed: { border: Fn, text: Fn, background: "#333D4B", iconColor: Fn },
      },
      callAction: {
        enabled: { border: zn, text: An, background: zn, iconColor: An },
        disabled: { border: Pn, text: An, background: Pn, iconColor: An },
        hover: { border: Dn, text: An, background: Dn, iconColor: An },
        pressed: { border: In, text: An, background: In, iconColor: An },
      },
      secondary: {
        enabled: { border: $n, text: $n, background: An, iconColor: $n },
        disabled: { border: Bn, text: Sn, background: An, iconColor: Sn },
        hover: { border: $n, text: $n, background: "#4B586A", iconColor: $n },
        pressed: { border: $n, text: An, background: $n, iconColor: An },
      },
    },
  },
  Wn = function (n) {
    var r = n.darkMode,
      e = void 0 !== r && r,
      a = n.children;
    return t.createElement(o, { theme: e ? Ln : Tn }, a);
  };
export { yn as Button, Wn as ThemeHandler };
//# sourceMappingURL=index.js.map
