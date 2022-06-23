"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var t = require("react"),
  n = require("styled-components");
function r(t) {
  return t && "object" == typeof t && "default" in t ? t : { default: t };
}
var e = r(t),
  o = r(n),
  a = function () {
    return (
      (a =
        Object.assign ||
        function (t) {
          for (var n, r = 1, e = arguments.length; r < e; r++)
            for (var o in (n = arguments[r]))
              Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          return t;
        }),
      a.apply(this, arguments)
    );
  };
function i(t, n) {
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
  u = Array.isArray,
  l = "object" == typeof c && c && c.Object === Object && c,
  s = "object" == typeof self && self && self.Object === Object && self,
  f = l || s || Function("return this")(),
  v = f.Symbol,
  d = v,
  h = Object.prototype,
  p = h.hasOwnProperty,
  b = h.toString,
  g = d ? d.toStringTag : void 0;
var y = function (t) {
    var n = p.call(t, g),
      r = t[g];
    try {
      t[g] = void 0;
      var e = !0;
    } catch (t) {}
    var o = b.call(t);
    return e && (n ? (t[g] = r) : delete t[g]), o;
  },
  _ = Object.prototype.toString;
var m = y,
  x = function (t) {
    return _.call(t);
  },
  j = v ? v.toStringTag : void 0;
var O = function (t) {
  return null == t
    ? void 0 === t
      ? "[object Undefined]"
      : "[object Null]"
    : j && j in Object(t)
    ? m(t)
    : x(t);
};
var w = O,
  k = function (t) {
    return null != t && "object" == typeof t;
  };
var z = function (t) {
    return "symbol" == typeof t || (k(t) && "[object Symbol]" == w(t));
  },
  P = u,
  I = z,
  S = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  $ = /^\w*$/;
var C = function (t, n) {
  if (P(t)) return !1;
  var r = typeof t;
  return (
    !("number" != r && "symbol" != r && "boolean" != r && null != t && !I(t)) ||
    $.test(t) ||
    !S.test(t) ||
    (null != n && t in Object(n))
  );
};
var E = function (t) {
    var n = typeof t;
    return null != t && ("object" == n || "function" == n);
  },
  L = O,
  A = E;
var F,
  T = function (t) {
    if (!A(t)) return !1;
    var n = L(t);
    return (
      "[object Function]" == n ||
      "[object GeneratorFunction]" == n ||
      "[object AsyncFunction]" == n ||
      "[object Proxy]" == n
    );
  },
  W = f["__core-js_shared__"],
  q = (F = /[^.]+$/.exec((W && W.keys && W.keys.IE_PROTO) || ""))
    ? "Symbol(src)_1." + F
    : "";
var M = function (t) {
    return !!q && q in t;
  },
  N = Function.prototype.toString;
var R = T,
  B = M,
  G = E,
  U = function (t) {
    if (null != t) {
      try {
        return N.call(t);
      } catch (t) {}
      try {
        return t + "";
      } catch (t) {}
    }
    return "";
  },
  D = /^\[object .+?Constructor\]$/,
  H = Function.prototype,
  J = Object.prototype,
  K = H.toString,
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
var X = function (t) {
    return !(!G(t) || B(t)) && (R(t) ? V : D).test(U(t));
  },
  Y = function (t, n) {
    return null == t ? void 0 : t[n];
  };
var Z = function (t, n) {
    var r = Y(t, n);
    return X(r) ? r : void 0;
  },
  tt = Z(Object, "create"),
  nt = tt;
var rt = function () {
  (this.__data__ = nt ? nt(null) : {}), (this.size = 0);
};
var et = function (t) {
    var n = this.has(t) && delete this.__data__[t];
    return (this.size -= n ? 1 : 0), n;
  },
  ot = tt,
  at = Object.prototype.hasOwnProperty;
var it = function (t) {
    var n = this.__data__;
    if (ot) {
      var r = n[t];
      return "__lodash_hash_undefined__" === r ? void 0 : r;
    }
    return at.call(n, t) ? n[t] : void 0;
  },
  ct = tt,
  ut = Object.prototype.hasOwnProperty;
var lt = tt;
var st = rt,
  ft = et,
  vt = it,
  dt = function (t) {
    var n = this.__data__;
    return ct ? void 0 !== n[t] : ut.call(n, t);
  },
  ht = function (t, n) {
    var r = this.__data__;
    return (
      (this.size += this.has(t) ? 0 : 1),
      (r[t] = lt && void 0 === n ? "__lodash_hash_undefined__" : n),
      this
    );
  };
function pt(t) {
  var n = -1,
    r = null == t ? 0 : t.length;
  for (this.clear(); ++n < r; ) {
    var e = t[n];
    this.set(e[0], e[1]);
  }
}
(pt.prototype.clear = st),
  (pt.prototype.delete = ft),
  (pt.prototype.get = vt),
  (pt.prototype.has = dt),
  (pt.prototype.set = ht);
var bt = pt;
var gt = function () {
  (this.__data__ = []), (this.size = 0);
};
var yt = function (t, n) {
  return t === n || (t != t && n != n);
};
var _t = function (t, n) {
    for (var r = t.length; r--; ) if (yt(t[r][0], n)) return r;
    return -1;
  },
  mt = _t,
  xt = Array.prototype.splice;
var jt = _t;
var Ot = _t;
var wt = _t;
var kt = gt,
  zt = function (t) {
    var n = this.__data__,
      r = mt(n, t);
    return (
      !(r < 0) &&
      (r == n.length - 1 ? n.pop() : xt.call(n, r, 1), --this.size, !0)
    );
  },
  Pt = function (t) {
    var n = this.__data__,
      r = jt(n, t);
    return r < 0 ? void 0 : n[r][1];
  },
  It = function (t) {
    return Ot(this.__data__, t) > -1;
  },
  St = function (t, n) {
    var r = this.__data__,
      e = wt(r, t);
    return e < 0 ? (++this.size, r.push([t, n])) : (r[e][1] = n), this;
  };
function $t(t) {
  var n = -1,
    r = null == t ? 0 : t.length;
  for (this.clear(); ++n < r; ) {
    var e = t[n];
    this.set(e[0], e[1]);
  }
}
($t.prototype.clear = kt),
  ($t.prototype.delete = zt),
  ($t.prototype.get = Pt),
  ($t.prototype.has = It),
  ($t.prototype.set = St);
var Ct = $t,
  Et = Z(f, "Map"),
  Lt = bt,
  At = Ct,
  Ft = Et;
var Tt = function (t) {
  var n = typeof t;
  return "string" == n || "number" == n || "symbol" == n || "boolean" == n
    ? "__proto__" !== t
    : null === t;
};
var Wt = function (t, n) {
    var r = t.__data__;
    return Tt(n) ? r["string" == typeof n ? "string" : "hash"] : r.map;
  },
  qt = Wt;
var Mt = Wt;
var Nt = Wt;
var Rt = Wt;
var Bt = function () {
    (this.size = 0),
      (this.__data__ = {
        hash: new Lt(),
        map: new (Ft || At)(),
        string: new Lt(),
      });
  },
  Gt = function (t) {
    var n = qt(this, t).delete(t);
    return (this.size -= n ? 1 : 0), n;
  },
  Ut = function (t) {
    return Mt(this, t).get(t);
  },
  Dt = function (t) {
    return Nt(this, t).has(t);
  },
  Ht = function (t, n) {
    var r = Rt(this, t),
      e = r.size;
    return r.set(t, n), (this.size += r.size == e ? 0 : 1), this;
  };
function Jt(t) {
  var n = -1,
    r = null == t ? 0 : t.length;
  for (this.clear(); ++n < r; ) {
    var e = t[n];
    this.set(e[0], e[1]);
  }
}
(Jt.prototype.clear = Bt),
  (Jt.prototype.delete = Gt),
  (Jt.prototype.get = Ut),
  (Jt.prototype.has = Dt),
  (Jt.prototype.set = Ht);
var Kt = Jt;
function Qt(t, n) {
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
  return (r.cache = new (Qt.Cache || Kt)()), r;
}
Qt.Cache = Kt;
var Vt = Qt;
var Xt =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  Yt = /\\(\\)?/g,
  Zt = (function (t) {
    var n = Vt(t, function (t) {
        return 500 === r.size && r.clear(), t;
      }),
      r = n.cache;
    return n;
  })(function (t) {
    var n = [];
    return (
      46 === t.charCodeAt(0) && n.push(""),
      t.replace(Xt, function (t, r, e, o) {
        n.push(e ? o.replace(Yt, "$1") : r || t);
      }),
      n
    );
  });
var tn = function (t, n) {
    for (var r = -1, e = null == t ? 0 : t.length, o = Array(e); ++r < e; )
      o[r] = n(t[r], r, t);
    return o;
  },
  nn = u,
  rn = z,
  en = v ? v.prototype : void 0,
  on = en ? en.toString : void 0;
var an = function t(n) {
    if ("string" == typeof n) return n;
    if (nn(n)) return tn(n, t) + "";
    if (rn(n)) return on ? on.call(n) : "";
    var r = n + "";
    return "0" == r && 1 / n == -Infinity ? "-0" : r;
  },
  cn = an;
var un = u,
  ln = C,
  sn = Zt,
  fn = function (t) {
    return null == t ? "" : cn(t);
  };
var vn = z;
var dn = function (t, n) {
    return un(t) ? t : ln(t, n) ? [t] : sn(fn(t));
  },
  hn = function (t) {
    if ("string" == typeof t || vn(t)) return t;
    var n = t + "";
    return "0" == n && 1 / t == -Infinity ? "-0" : n;
  };
var pn = function (t, n) {
  for (var r = 0, e = (n = dn(n, t)).length; null != t && r < e; )
    t = t[hn(n[r++])];
  return r && r == e ? t : void 0;
};
var bn,
  gn,
  yn,
  _n = function (t, n, r) {
    var e = null == t ? void 0 : pn(t, n);
    return void 0 === e ? r : e;
  },
  mn = o.default.button(
    yn ||
      ((bn = [
        "\n  border-radius: 3px;\n  cursor: pointer;\n  width: ",
        ';\n  height: 39px;\n  font-family: "Lato", sans-serif;\n  font-weight: bold;\n  font-size: 14px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin: 0 6px;\n  padding: ',
        ";\n  transition: all 0.2s linear;\n  background-color: ",
        ";\n  border: ",
        "\n    1px solid;\n  color: ",
        ";\n  & .buttonIcon {\n    ",
        "\n\n    display: block;\n    height: 14px;\n\n    & > svg {\n      fill: ",
        ";\n      color: ",
        ";\n      width: 14px;\n      height: 14px;\n    }\n  }\n  &:disabled {\n    cursor: not-allowed;\n    background-color: ",
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
      (gn = [
        "\n  border-radius: 3px;\n  cursor: pointer;\n  width: ",
        ';\n  height: 39px;\n  font-family: "Lato", sans-serif;\n  font-weight: bold;\n  font-size: 14px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin: 0 6px;\n  padding: ',
        ";\n  transition: all 0.2s linear;\n  background-color: ",
        ";\n  border: ",
        "\n    1px solid;\n  color: ",
        ";\n  & .buttonIcon {\n    ",
        "\n\n    display: block;\n    height: 14px;\n\n    & > svg {\n      fill: ",
        ";\n      color: ",
        ";\n      width: 14px;\n      height: 14px;\n    }\n  }\n  &:disabled {\n    cursor: not-allowed;\n    background-color: ",
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
        ? Object.defineProperty(bn, "raw", { value: gn })
        : (bn.raw = gn),
      (yn = bn)),
    function (t) {
      return t.fullWidth ? "100%" : "initial";
    },
    function (t) {
      return t.label && "" !== t.label.trim() ? "0 25px" : "0 14px";
    },
    function (t) {
      var n = t.theme,
        r = i(t, ["theme"]);
      return _n(
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
        r = i(t, ["theme"]);
      return _n(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".enabled.border"),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = i(t, ["theme"]);
      return _n(
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
        r = i(t, ["theme"]);
      return _n(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".enabled.text"),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = i(t, ["theme"]);
      return _n(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".enabled.text"),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = i(t, ["theme"]);
      return _n(
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
        r = i(t, ["theme"]);
      return _n(
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
        r = i(t, ["theme"]);
      return _n(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".disabled.text"),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = i(t, ["theme"]);
      return _n(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".disabled.text"),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = i(t, ["theme"]);
      return _n(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".disabled.text"),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = i(t, ["theme"]);
      return _n(
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
        r = i(t, ["theme"]);
      return _n(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".hover.border"),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = i(t, ["theme"]);
      return _n(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".hover.text"),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = i(t, ["theme"]);
      return _n(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".hover.text"),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = i(t, ["theme"]);
      return _n(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".hover.text"),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = i(t, ["theme"]);
      return _n(
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
        r = i(t, ["theme"]);
      return _n(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".pressed.border"),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = i(t, ["theme"]);
      return _n(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".pressed.text"),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = i(t, ["theme"]);
      return _n(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".pressed.text"),
        "#000"
      );
    },
    function (t) {
      var n = t.theme,
        r = i(t, ["theme"]);
      return _n(
        n,
        "buttons.".concat(r.variant ? r.variant : "regular", ".pressed.text"),
        "#000"
      );
    }
  );
exports.Button = function (t) {
  var n = t.label,
    r = t.variant,
    o = void 0 === r ? "regular" : r,
    c = t.icon,
    u = t.iconLocation,
    l = void 0 === u ? "end" : u,
    s = t.onClick,
    f = t.disabled,
    v = t.fullWidth,
    d = i(t, [
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
    c && (h = e.default.createElement("span", { className: "buttonIcon" }, c)),
    e.default.createElement(
      mn,
      a(
        {
          onClick: s,
          disabled: f,
          variant: o,
          iconLocation: l,
          label: n,
          fullWidth: v,
        },
        d
      ),
      c && "start" === l && h,
      n,
      c && "end" === l && h
    )
  );
};
//# sourceMappingURL=index.js.map
