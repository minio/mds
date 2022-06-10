import t from "react";
import n from "styled-components";
var r = function () {
  return (
    (r =
      Object.assign ||
      function (t) {
        for (var n, r = 1, e = arguments.length; r < e; r++)
          for (var o in (n = arguments[r]))
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        return t;
      }),
    r.apply(this, arguments)
  );
};
function e(t, n) {
  var r = {};
  for (var e in t)
    Object.prototype.hasOwnProperty.call(t, e) &&
      n.indexOf(e) < 0 &&
      (r[e] = t[e]);
  if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (e = Object.getOwnPropertySymbols(t); o < e.length; o++)
      n.indexOf(e[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, e[o]) &&
        (r[e[o]] = t[e[o]]);
  }
  return r;
}
var o =
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
  i = "object" == typeof o && o && o.Object === Object && o,
  c = "object" == typeof self && self && self.Object === Object && self,
  u = i || c || Function("return this")(),
  l = u.Symbol,
  s = l,
  v = Object.prototype,
  f = v.hasOwnProperty,
  d = v.toString,
  h = s ? s.toStringTag : void 0;
var p = function (t) {
    var n = f.call(t, h),
      r = t[h];
    try {
      t[h] = void 0;
      var e = !0;
    } catch (t) {}
    var o = d.call(t);
    return e && (n ? (t[h] = r) : delete t[h]), o;
  },
  b = Object.prototype.toString;
var g = p,
  y = function (t) {
    return b.call(t);
  },
  m = l ? l.toStringTag : void 0;
var _ = function (t) {
  return null == t
    ? void 0 === t
      ? "[object Undefined]"
      : "[object Null]"
    : m && m in Object(t)
    ? g(t)
    : y(t);
};
var x = _,
  j = function (t) {
    return null != t && "object" == typeof t;
  };
var O = function (t) {
    return "symbol" == typeof t || (j(t) && "[object Symbol]" == x(t));
  },
  w = a,
  k = O,
  z = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  I = /^\w*$/;
var P = function (t, n) {
  if (w(t)) return !1;
  var r = typeof t;
  return (
    !("number" != r && "symbol" != r && "boolean" != r && null != t && !k(t)) ||
    I.test(t) ||
    !z.test(t) ||
    (null != n && t in Object(n))
  );
};
var S = function (t) {
    var n = typeof t;
    return null != t && ("object" == n || "function" == n);
  },
  $ = _,
  C = S;
var E,
  L = function (t) {
    if (!C(t)) return !1;
    var n = $(t);
    return (
      "[object Function]" == n ||
      "[object GeneratorFunction]" == n ||
      "[object AsyncFunction]" == n ||
      "[object Proxy]" == n
    );
  },
  A = u["__core-js_shared__"],
  F = (E = /[^.]+$/.exec((A && A.keys && A.keys.IE_PROTO) || ""))
    ? "Symbol(src)_1." + E
    : "";
var T = function (t) {
    return !!F && F in t;
  },
  W = Function.prototype.toString;
var N = L,
  R = T,
  G = S,
  M = function (t) {
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
  U = /^\[object .+?Constructor\]$/,
  q = Function.prototype,
  B = Object.prototype,
  D = q.toString,
  H = B.hasOwnProperty,
  J = RegExp(
    "^" +
      D.call(H)
        .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
var K = function (t) {
    return !(!G(t) || R(t)) && (N(t) ? J : U).test(M(t));
  },
  Q = function (t, n) {
    return null == t ? void 0 : t[n];
  };
var V = function (t, n) {
    var r = Q(t, n);
    return K(r) ? r : void 0;
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
  rt = Object.prototype.hasOwnProperty;
var et = function (t) {
    var n = this.__data__;
    if (nt) {
      var r = n[t];
      return "__lodash_hash_undefined__" === r ? void 0 : r;
    }
    return rt.call(n, t) ? n[t] : void 0;
  },
  ot = X,
  at = Object.prototype.hasOwnProperty;
var it = X;
var ct = Z,
  ut = tt,
  lt = et,
  st = function (t) {
    var n = this.__data__;
    return ot ? void 0 !== n[t] : at.call(n, t);
  },
  vt = function (t, n) {
    var r = this.__data__;
    return (
      (this.size += this.has(t) ? 0 : 1),
      (r[t] = it && void 0 === n ? "__lodash_hash_undefined__" : n),
      this
    );
  };
function ft(t) {
  var n = -1,
    r = null == t ? 0 : t.length;
  for (this.clear(); ++n < r; ) {
    var e = t[n];
    this.set(e[0], e[1]);
  }
}
(ft.prototype.clear = ct),
  (ft.prototype.delete = ut),
  (ft.prototype.get = lt),
  (ft.prototype.has = st),
  (ft.prototype.set = vt);
var dt = ft;
var ht = function () {
  (this.__data__ = []), (this.size = 0);
};
var pt = function (t, n) {
  return t === n || (t != t && n != n);
};
var bt = function (t, n) {
    for (var r = t.length; r--; ) if (pt(t[r][0], n)) return r;
    return -1;
  },
  gt = bt,
  yt = Array.prototype.splice;
var mt = bt;
var _t = bt;
var xt = bt;
var jt = ht,
  Ot = function (t) {
    var n = this.__data__,
      r = gt(n, t);
    return (
      !(r < 0) &&
      (r == n.length - 1 ? n.pop() : yt.call(n, r, 1), --this.size, !0)
    );
  },
  wt = function (t) {
    var n = this.__data__,
      r = mt(n, t);
    return r < 0 ? void 0 : n[r][1];
  },
  kt = function (t) {
    return _t(this.__data__, t) > -1;
  },
  zt = function (t, n) {
    var r = this.__data__,
      e = xt(r, t);
    return e < 0 ? (++this.size, r.push([t, n])) : (r[e][1] = n), this;
  };
function It(t) {
  var n = -1,
    r = null == t ? 0 : t.length;
  for (this.clear(); ++n < r; ) {
    var e = t[n];
    this.set(e[0], e[1]);
  }
}
(It.prototype.clear = jt),
  (It.prototype.delete = Ot),
  (It.prototype.get = wt),
  (It.prototype.has = kt),
  (It.prototype.set = zt);
var Pt = It,
  St = V(u, "Map"),
  $t = dt,
  Ct = Pt,
  Et = St;
var Lt = function (t) {
  var n = typeof t;
  return "string" == n || "number" == n || "symbol" == n || "boolean" == n
    ? "__proto__" !== t
    : null === t;
};
var At = function (t, n) {
    var r = t.__data__;
    return Lt(n) ? r["string" == typeof n ? "string" : "hash"] : r.map;
  },
  Ft = At;
var Tt = At;
var Wt = At;
var Nt = At;
var Rt = function () {
    (this.size = 0),
      (this.__data__ = {
        hash: new $t(),
        map: new (Et || Ct)(),
        string: new $t(),
      });
  },
  Gt = function (t) {
    var n = Ft(this, t).delete(t);
    return (this.size -= n ? 1 : 0), n;
  },
  Mt = function (t) {
    return Tt(this, t).get(t);
  },
  Ut = function (t) {
    return Wt(this, t).has(t);
  },
  qt = function (t, n) {
    var r = Nt(this, t),
      e = r.size;
    return r.set(t, n), (this.size += r.size == e ? 0 : 1), this;
  };
function Bt(t) {
  var n = -1,
    r = null == t ? 0 : t.length;
  for (this.clear(); ++n < r; ) {
    var e = t[n];
    this.set(e[0], e[1]);
  }
}
(Bt.prototype.clear = Rt),
  (Bt.prototype.delete = Gt),
  (Bt.prototype.get = Mt),
  (Bt.prototype.has = Ut),
  (Bt.prototype.set = qt);
var Dt = Bt;
function Ht(t, n) {
  if ("function" != typeof t || (null != n && "function" != typeof n))
    throw new TypeError("Expected a function");
  var r = function () {
    var e = arguments,
      o = n ? n.apply(this, e) : e[0],
      a = r.cache;
    if (a.has(o)) return a.get(o);
    var i = t.apply(this, e);
    return (r.cache = a.set(o, i) || a), i;
  };
  return (r.cache = new (Ht.Cache || Dt)()), r;
}
Ht.Cache = Dt;
var Jt = Ht;
var Kt =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  Qt = /\\(\\)?/g,
  Vt = (function (t) {
    var n = Jt(t, function (t) {
        return 500 === r.size && r.clear(), t;
      }),
      r = n.cache;
    return n;
  })(function (t) {
    var n = [];
    return (
      46 === t.charCodeAt(0) && n.push(""),
      t.replace(Kt, function (t, r, e, o) {
        n.push(e ? o.replace(Qt, "$1") : r || t);
      }),
      n
    );
  });
var Xt = function (t, n) {
    for (var r = -1, e = null == t ? 0 : t.length, o = Array(e); ++r < e; )
      o[r] = n(t[r], r, t);
    return o;
  },
  Yt = a,
  Zt = O,
  tn = l ? l.prototype : void 0,
  nn = tn ? tn.toString : void 0;
var rn = function t(n) {
    if ("string" == typeof n) return n;
    if (Yt(n)) return Xt(n, t) + "";
    if (Zt(n)) return nn ? nn.call(n) : "";
    var r = n + "";
    return "0" == r && 1 / n == -Infinity ? "-0" : r;
  },
  en = rn;
var on = a,
  an = P,
  cn = Vt,
  un = function (t) {
    return null == t ? "" : en(t);
  };
var ln = O;
var sn = function (t, n) {
    return on(t) ? t : an(t, n) ? [t] : cn(un(t));
  },
  vn = function (t) {
    if ("string" == typeof t || ln(t)) return t;
    var n = t + "";
    return "0" == n && 1 / t == -Infinity ? "-0" : n;
  };
var fn = function (t, n) {
  for (var r = 0, e = (n = sn(n, t)).length; null != t && r < e; )
    t = t[vn(n[r++])];
  return r && r == e ? t : void 0;
};
var dn,
  hn,
  pn,
  bn = function (t, n, r) {
    var e = null == t ? void 0 : fn(t, n);
    return void 0 === e ? r : e;
  },
  gn = n.button(
    pn ||
      ((dn = [
        "\n  border-radius: 3px;\n  width: ",
        ';\n  height: 39px;\n  font-family: "Lato", sans-serif;\n  font-weight: bold;\n  font-size: 14px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin: 0 6px;\n  padding: ',
        ";\n  transition: all 0.2s linear;\n  background-color: ",
        ";\n  border: ",
        "\n    1px solid;\n  color: ",
        ";\n  & .buttonIcon {\n    ",
        "\n\n    display: block;\n    height: 14px;\n\n    & > svg {\n      fill: ",
        ";\n      color: ",
        ";\n      width: 14px;\n      height: 14px;\n    }\n  }\n  &:disabled {\n    background-color: ",
        ";\n    border: ",
        "\n      1px solid;\n    color: ",
        ";\n    & .buttonIcon > svg {\n      fill: ",
        ";\n      color: ",
        ";\n    }\n  }\n  &:hover:not(:disabled) {\n    background-color: ",
        ";\n    border: ",
        "\n      1px solid;\n    color: ",
        ";\n    & .buttonIcon > svg {\n      fill: ",
        ";\n      color: ",
        ";\n    }\n  }\n  &:active:not(:disabled) {\n    background-color: ",
        ";\n    border: ",
        "\n      1px solid;\n    color: ",
        ";\n    & .buttonIcon > svg {\n      fill: ",
        ";\n      color: ",
        ";\n    }\n  }\n",
      ]),
      (hn = [
        "\n  border-radius: 3px;\n  width: ",
        ';\n  height: 39px;\n  font-family: "Lato", sans-serif;\n  font-weight: bold;\n  font-size: 14px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin: 0 6px;\n  padding: ',
        ";\n  transition: all 0.2s linear;\n  background-color: ",
        ";\n  border: ",
        "\n    1px solid;\n  color: ",
        ";\n  & .buttonIcon {\n    ",
        "\n\n    display: block;\n    height: 14px;\n\n    & > svg {\n      fill: ",
        ";\n      color: ",
        ";\n      width: 14px;\n      height: 14px;\n    }\n  }\n  &:disabled {\n    background-color: ",
        ";\n    border: ",
        "\n      1px solid;\n    color: ",
        ";\n    & .buttonIcon > svg {\n      fill: ",
        ";\n      color: ",
        ";\n    }\n  }\n  &:hover:not(:disabled) {\n    background-color: ",
        ";\n    border: ",
        "\n      1px solid;\n    color: ",
        ";\n    & .buttonIcon > svg {\n      fill: ",
        ";\n      color: ",
        ";\n    }\n  }\n  &:active:not(:disabled) {\n    background-color: ",
        ";\n    border: ",
        "\n      1px solid;\n    color: ",
        ";\n    & .buttonIcon > svg {\n      fill: ",
        ";\n      color: ",
        ";\n    }\n  }\n",
      ]),
      Object.defineProperty
        ? Object.defineProperty(dn, "raw", { value: hn })
        : (dn.raw = hn),
      (pn = dn)),
    function (t) {
      return t.fullWidth ? "100%" : "initial";
    },
    function (t) {
      return t.label && "" !== t.label.trim() ? "0 25px" : "0 14px";
    },
    function (t) {
      var n = t.theme,
        r = e(t, ["theme"]);
      return bn(
        n,
        "buttons.".concat(
          r.variant ? r.variant : "regular",
          ".enabled.background"
        ),
        "#fff"
      );
    },
    function (t) {
      var n = t.theme,
        r = e(t, ["theme"]);
      return bn(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".enabled.border"),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = e(t, ["theme"]);
      return bn(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".enabled.text"),
        "#000"
      );
    },
    function (t) {
      return t.label && "" !== t.label.trim()
        ? "\n        margin-right: "
            .concat(
              "end" === t.iconLocation ? "0" : "10px",
              ";\n        margin-left: "
            )
            .concat("start" === t.iconLocation ? "0" : "10px", ";\n    ")
        : "\n        margin-right: 0;\n        margin-left: 0;\n    ";
    },
    function (t) {
      var n = t.theme,
        r = e(t, ["theme"]);
      return bn(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".enabled.text"),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = e(t, ["theme"]);
      return bn(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".enabled.text"),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = e(t, ["theme"]);
      return bn(
        n,
        "buttons.".concat(
          r.variant ? r.variant : "regular",
          ".disabled.background"
        ),
        "#fff"
      );
    },
    function (t) {
      var n = t.theme,
        r = e(t, ["theme"]);
      return bn(
        n,
        "buttons.".concat(
          r.variant ? r.variant : "regular",
          ".disabled.border"
        ),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = e(t, ["theme"]);
      return bn(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".disabled.text"),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = e(t, ["theme"]);
      return bn(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".disabled.text"),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = e(t, ["theme"]);
      return bn(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".disabled.text"),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = e(t, ["theme"]);
      return bn(
        n,
        "buttons.".concat(
          r.variant ? r.variant : "regular",
          ".hover.background"
        ),
        "#fff"
      );
    },
    function (t) {
      var n = t.theme,
        r = e(t, ["theme"]);
      return bn(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".hover.border"),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = e(t, ["theme"]);
      return bn(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".hover.text"),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = e(t, ["theme"]);
      return bn(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".hover.text"),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = e(t, ["theme"]);
      return bn(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".hover.text"),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = e(t, ["theme"]);
      return bn(
        n,
        "buttons.".concat(
          r.variant ? r.variant : "regular",
          ".pressed.background"
        ),
        "#fff"
      );
    },
    function (t) {
      var n = t.theme,
        r = e(t, ["theme"]);
      return bn(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".pressed.border"),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = e(t, ["theme"]);
      return bn(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".pressed.text"),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = e(t, ["theme"]);
      return bn(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".pressed.text"),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = e(t, ["theme"]);
      return bn(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".pressed.text"),
        "#000"
      );
    }
  ),
  yn = function (n) {
    var o = n.label,
      a = n.variant,
      i = void 0 === a ? "regular" : a,
      c = n.icon,
      u = n.iconLocation,
      l = void 0 === u ? "end" : u,
      s = n.onClick,
      v = n.disabled,
      f = n.fullWidth,
      d = e(n, [
        "label",
        "variant",
        "icon",
        "iconLocation",
        "onClick",
        "disabled",
        "fullWidth",
      ]),
      h = null;
    return (
      c && (h = t.createElement("span", { className: "buttonIcon" }, c)),
      t.createElement(
        gn,
        r(
          {
            onClick: s,
            disabled: v,
            variant: i,
            iconLocation: l,
            label: o,
            fullWidth: f,
          },
          d
        ),
        c && "start" === l && h,
        o,
        c && "end" === l && h
      )
    );
  };
export { yn as Button };
//# sourceMappingURL=index.js.map
