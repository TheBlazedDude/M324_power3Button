import K, { useState as ee } from "react";
var p = { exports: {} }, _ = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $;
function re() {
  if ($) return _;
  $ = 1;
  var o = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function l(f, s, u) {
    var d = null;
    if (u !== void 0 && (d = "" + u), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      u = {};
      for (var m in s)
        m !== "key" && (u[m] = s[m]);
    } else u = s;
    return s = u.ref, {
      $$typeof: o,
      type: f,
      key: d,
      ref: s !== void 0 ? s : null,
      props: u
    };
  }
  return _.Fragment = c, _.jsx = l, _.jsxs = l, _;
}
var E = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I;
function te() {
  return I || (I = 1, process.env.NODE_ENV !== "production" && (function() {
    function o(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === H ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case v:
          return "Fragment";
        case U:
          return "Profiler";
        case W:
          return "StrictMode";
        case J:
          return "Suspense";
        case G:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case M:
            return "Portal";
          case q:
            return e.displayName || "Context";
          case V:
            return (e._context.displayName || "Context") + ".Consumer";
          case z:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case X:
            return r = e.displayName || null, r !== null ? r : o(e.type) || "Memo";
          case T:
            r = e._payload, e = e._init;
            try {
              return o(e(r));
            } catch {
            }
        }
      return null;
    }
    function c(e) {
      return "" + e;
    }
    function l(e) {
      try {
        c(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), c(e);
      }
    }
    function f(e) {
      if (e === v) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === T)
        return "<...>";
      try {
        var r = o(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = k.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (g.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, r) {
      function t() {
        j || (j = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function D() {
      var e = o(this.type);
      return h[e] || (h[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function L(e, r, t, n, b, S) {
      var a = t.ref;
      return e = {
        $$typeof: y,
        type: e,
        key: r,
        props: t,
        _owner: n
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: D
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: b
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function A(e, r, t, n, b, S) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (Z(a)) {
            for (n = 0; n < a.length; n++)
              P(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else P(a);
      if (g.call(r, "key")) {
        a = o(e);
        var i = Object.keys(r).filter(function(Q) {
          return Q !== "key";
        });
        n = 0 < i.length ? "{key: someKey, " + i.join(": ..., ") + ": ...}" : "{key: someKey}", Y[a + n] || (i = 0 < i.length ? "{" + i.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          i,
          a
        ), Y[a + n] = !0);
      }
      if (a = null, t !== void 0 && (l(t), a = "" + t), d(r) && (l(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var x in r)
          x !== "key" && (t[x] = r[x]);
      } else t = r;
      return a && m(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), L(
        e,
        a,
        t,
        s(),
        b,
        S
      );
    }
    function P(e) {
      w(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === T && (e._payload.status === "fulfilled" ? w(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function w(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    var R = K, y = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), q = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), H = Symbol.for("react.client.reference"), k = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, g = Object.prototype.hasOwnProperty, Z = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var j, h = {}, N = R.react_stack_bottom_frame.bind(
      R,
      u
    )(), C = O(f(u)), Y = {};
    E.Fragment = v, E.jsx = function(e, r, t) {
      var n = 1e4 > k.recentlyCreatedOwnerStacks++;
      return A(
        e,
        r,
        t,
        !1,
        n ? Error("react-stack-top-frame") : N,
        n ? O(f(e)) : C
      );
    }, E.jsxs = function(e, r, t) {
      var n = 1e4 > k.recentlyCreatedOwnerStacks++;
      return A(
        e,
        r,
        t,
        !0,
        n ? Error("react-stack-top-frame") : N,
        n ? O(f(e)) : C
      );
    };
  })()), E;
}
var F;
function ne() {
  return F || (F = 1, process.env.NODE_ENV === "production" ? p.exports = re() : p.exports = te()), p.exports;
}
var ae = ne();
function se() {
  const [o, c] = ee(3), l = () => c(o * o * o);
  return /* @__PURE__ */ ae.jsx(
    "button",
    {
      onClick: l,
      style: {
        padding: "12px 24px",
        fontSize: "18px",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#4f46e5",
        color: "white",
        cursor: "pointer"
      },
      children: o
    }
  );
}
export {
  se as Power3Button,
  se as default
};
