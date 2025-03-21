!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = []
      , i = Object.getPrototypeOf
      , o = n.slice
      , r = n.flat ? function(e) {
        return n.flat.call(e)
    }
    : function(e) {
        return n.concat.apply([], e)
    }
      , a = n.push
      , s = n.indexOf
      , l = {}
      , u = l.toString
      , c = l.hasOwnProperty
      , f = c.toString
      , d = f.call(Object)
      , h = {}
      , p = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
      , g = function(e) {
        return null != e && e === e.window
    }
      , m = e.document
      , v = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function _(e, t, n) {
        var i, o, r = (n = n || m).createElement("script");
        if (r.text = e,
        t)
            for (i in v)
                (o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
        n.head.appendChild(r).parentNode.removeChild(r)
    }
    function y(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[u.call(e)] || "object" : typeof e
    }
    var b = "3.6.3"
      , w = function(e, t) {
        return new w.fn.init(e,t)
    };
    function E(e) {
        var t = !!e && "length"in e && e.length
          , n = y(e);
        return !p(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    w.fn = w.prototype = {
        jquery: b,
        constructor: w,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return w.each(this, e)
        },
        map: function(e) {
            return this.pushStack(w.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(w.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(w.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    },
    w.extend = w.fn.extend = function() {
        var e, t, n, i, o, r, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof a && (u = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || p(a) || (a = {}),
        s === l && (a = this,
        s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    i = e[t],
                    "__proto__" !== t && a !== i && (u && i && (w.isPlainObject(i) || (o = Array.isArray(i))) ? (n = a[t],
                    r = o && !Array.isArray(n) ? [] : o || w.isPlainObject(n) ? n : {},
                    o = !1,
                    a[t] = w.extend(u, r, i)) : void 0 !== i && (a[t] = i));
        return a
    }
    ,
    w.extend({
        expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e) || (t = i(e)) && ("function" != typeof (n = c.call(t, "constructor") && t.constructor) || f.call(n) !== d))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            _(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, i = 0;
            if (E(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (E(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : s.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++)
                e[o++] = t[i];
            return e.length = o,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, a = !n; o < r; o++)
                !t(e[o], o) !== a && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o, a = 0, s = [];
            if (E(e))
                for (i = e.length; a < i; a++)
                    null != (o = t(e[a], a, n)) && s.push(o);
            else
                for (a in e)
                    null != (o = t(e[a], a, n)) && s.push(o);
            return r(s)
        },
        guid: 1,
        support: h
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });
    var T = function(e) {
        var t, n, i, o, r, a, s, l, u, c, f, d, h, p, g, m, v, _, y, b = "sizzle" + 1 * new Date, w = e.document, E = 0, T = 0, C = le(), x = le(), S = le(), D = le(), N = function(e, t) {
            return e === t && (f = !0),
            0
        }, A = {}.hasOwnProperty, k = [], j = k.pop, I = k.push, O = k.push, L = k.slice, P = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", R = "[\\x20\\t\\r\\n\\f]", H = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", F = "\\[" + R + "*(" + H + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + R + "*\\]", M = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)", B = new RegExp(R + "+","g"), W = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$","g"), U = new RegExp("^" + R + "*," + R + "*"), Q = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"), z = new RegExp(R + "|>"), V = new RegExp(M), $ = new RegExp("^" + H + "$"), X = {
            ID: new RegExp("^#(" + H + ")"),
            CLASS: new RegExp("^\\.(" + H + ")"),
            TAG: new RegExp("^(" + H + "|[*])"),
            ATTR: new RegExp("^" + F),
            PSEUDO: new RegExp("^" + M),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)","i"),
            bool: new RegExp("^(?:" + q + ")$","i"),
            needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)","i")
        }, Y = /HTML$/i, K = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, oe = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, re = function() {
            d()
        }, ae = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            O.apply(k = L.call(w.childNodes), w.childNodes)
        } catch (t) {
            O = {
                apply: k.length ? function(e, t) {
                    I.apply(e, L.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(e, t, i, o) {
            var r, s, u, c, f, p, v, _ = t && t.ownerDocument, w = t ? t.nodeType : 9;
            if (i = i || [],
            "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w)
                return i;
            if (!o && (d(t),
            t = t || h,
            g)) {
                if (11 !== w && (f = Z.exec(e)))
                    if (r = f[1]) {
                        if (9 === w) {
                            if (!(u = t.getElementById(r)))
                                return i;
                            if (u.id === r)
                                return i.push(u),
                                i
                        } else if (_ && (u = _.getElementById(r)) && y(t, u) && u.id === r)
                            return i.push(u),
                            i
                    } else {
                        if (f[2])
                            return O.apply(i, t.getElementsByTagName(e)),
                            i;
                        if ((r = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return O.apply(i, t.getElementsByClassName(r)),
                            i
                    }
                if (n.qsa && !D[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e,
                    _ = t,
                    1 === w && (z.test(e) || Q.test(e))) {
                        for ((_ = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(ie, oe) : t.setAttribute("id", c = b)),
                        s = (p = a(e)).length; s--; )
                            p[s] = (c ? "#" + c : ":scope") + " " + ye(p[s]);
                        v = p.join(",")
                    }
                    try {
                        if (n.cssSupportsSelector && !CSS.supports("selector(:is(" + v + "))"))
                            throw new Error;
                        return O.apply(i, _.querySelectorAll(v)),
                        i
                    } catch (t) {
                        D(e, !0)
                    } finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(W, "$1"), t, i, o)
        }
        function le() {
            var e = [];
            return function t(n, o) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                t[n + " "] = o
            }
        }
        function ue(e) {
            return e[b] = !0,
            e
        }
        function ce(e) {
            var t = h.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            for (var n = e.split("|"), o = n.length; o--; )
                i.attrHandle[n[o]] = t
        }
        function de(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function he(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function ge(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function me(e) {
            return ue(function(t) {
                return t = +t,
                ue(function(n, i) {
                    for (var o, r = e([], n.length, t), a = r.length; a--; )
                        n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }
        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = se.support = {},
        r = se.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !Y.test(e && e.namespaceURI || t && t.nodeName || "HTML")
        }
        ,
        d = se.setDocument = function(e) {
            var t, o, a = e ? e.ownerDocument || e : w;
            return a != h && 9 === a.nodeType && a.documentElement && (p = (h = a).documentElement,
            g = !r(h),
            w != h && (o = h.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)),
            n.scope = ce(function(e) {
                return p.appendChild(e).appendChild(h.createElement("div")),
                void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            n.cssSupportsSelector = ce(function() {
                return CSS.supports("selector(*)") && h.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))")
            }),
            n.attributes = ce(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            n.getElementsByTagName = ce(function(e) {
                return e.appendChild(h.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            n.getElementsByClassName = J.test(h.getElementsByClassName),
            n.getById = ce(function(e) {
                return p.appendChild(e).id = b,
                !h.getElementsByName || !h.getElementsByName(b).length
            }),
            n.getById ? (i.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (i.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n, i, o, r = t.getElementById(e);
                    if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === e)
                            return [r];
                        for (o = t.getElementsByName(e),
                        i = 0; r = o[i++]; )
                            if ((n = r.getAttributeNode("id")) && n.value === e)
                                return [r]
                    }
                    return []
                }
            }
            ),
            i.find.TAG = n.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, i = [], o = 0, r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }
            ,
            i.find.CLASS = n.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && g)
                    return t.getElementsByClassName(e)
            }
            ,
            v = [],
            m = [],
            (n.qsa = J.test(h.querySelectorAll)) && (ce(function(e) {
                var t;
                p.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + R + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || m.push("\\[" + R + "*(?:value|" + q + ")"),
                e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="),
                (t = h.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || m.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || m.push(":checked"),
                e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                m.push("[\\r\\n\\f]")
            }),
            ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = h.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && m.push("name" + R + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                p.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                m.push(",.*:")
            })),
            (n.matchesSelector = J.test(_ = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ce(function(e) {
                n.disconnectedMatch = _.call(e, "*"),
                _.call(e, "[s!='']:x"),
                v.push("!=", M)
            }),
            n.cssSupportsSelector || m.push(":has"),
            m = m.length && new RegExp(m.join("|")),
            v = v.length && new RegExp(v.join("|")),
            t = J.test(p.compareDocumentPosition),
            y = t || J.test(p.contains) ? function(e, t) {
                var n = 9 === e.nodeType && e.documentElement || e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            N = t ? function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == h || e.ownerDocument == w && y(w, e) ? -1 : t == h || t.ownerDocument == w && y(w, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & i ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var n, i = 0, o = e.parentNode, r = t.parentNode, a = [e], s = [t];
                if (!o || !r)
                    return e == h ? -1 : t == h ? 1 : o ? -1 : r ? 1 : c ? P(c, e) - P(c, t) : 0;
                if (o === r)
                    return de(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (; a[i] === s[i]; )
                    i++;
                return i ? de(a[i], s[i]) : a[i] == w ? -1 : s[i] == w ? 1 : 0
            }
            ),
            h
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if (d(e),
            n.matchesSelector && g && !D[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t)))
                try {
                    var i = _.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return i
                } catch (e) {
                    D(t, !0)
                }
            return 0 < se(t, h, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) != h && d(e),
            y(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) != h && d(e);
            var o = i.attrHandle[t.toLowerCase()]
              , r = o && A.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
            return void 0 !== r ? r : n.attributes || !g ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(ie, oe)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, i = [], o = 0, r = 0;
            if (f = !n.detectDuplicates,
            c = !n.sortStable && e.slice(0),
            e.sort(N),
            f) {
                for (; t = e[r++]; )
                    t === e[r] && (o = i.push(r));
                for (; o--; )
                    e.splice(i[o], 1)
            }
            return c = null,
            e
        }
        ,
        o = se.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += o(t);
            return n
        }
        ,
        (i = se.selectors = {
            cacheLength: 50,
            createPseudo: ue,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = C[e + " "];
                    return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && C(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(i) {
                        var o = se.attr(i, e);
                        return null == o ? "!=" === t : !t || (o += "",
                        "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && -1 < o.indexOf(n) : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? -1 < (" " + o.replace(B, " ") + " ").indexOf(n) : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === i && 0 === o ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var u, c, f, d, h, p, g = r !== a ? "nextSibling" : "previousSibling", m = t.parentNode, v = s && t.nodeName.toLowerCase(), _ = !l && !s, y = !1;
                        if (m) {
                            if (r) {
                                for (; g; ) {
                                    for (d = t; d = d[g]; )
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                            return !1;
                                    p = g = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [a ? m.firstChild : m.lastChild],
                            a && _) {
                                for (y = (h = (u = (c = (f = (d = m)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === E && u[1]) && u[2],
                                d = h && m.childNodes[h]; d = ++h && d && d[g] || (y = h = 0) || p.pop(); )
                                    if (1 === d.nodeType && ++y && d === t) {
                                        c[e] = [E, h, y];
                                        break
                                    }
                            } else if (_ && (y = h = (u = (c = (f = (d = t)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === E && u[1]),
                            !1 === y)
                                for (; (d = ++h && d && d[g] || (y = h = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++y || (_ && ((c = (f = d[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [E, y]),
                                d !== t)); )
                                    ;
                            return (y -= o) === i || y % i == 0 && 0 <= y / i
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return o[b] ? o(t) : 1 < o.length ? (n = [e, e, "", t],
                    i.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function(e, n) {
                        for (var i, r = o(e, t), a = r.length; a--; )
                            e[i = P(e, r[a])] = !(n[i] = r[a])
                    }) : function(e) {
                        return o(e, 0, n)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: ue(function(e) {
                    var t = []
                      , n = []
                      , i = s(e.replace(W, "$1"));
                    return i[b] ? ue(function(e, t, n, o) {
                        for (var r, a = i(e, null, o, []), s = e.length; s--; )
                            (r = a[s]) && (e[s] = !(t[s] = r))
                    }) : function(e, o, r) {
                        return t[0] = e,
                        i(t, null, r, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: ue(function(e) {
                    return function(t) {
                        return 0 < se(e, t).length
                    }
                }),
                contains: ue(function(e) {
                    return e = e.replace(te, ne),
                    function(t) {
                        return -1 < (t.textContent || o(t)).indexOf(e)
                    }
                }),
                lang: ue(function(e) {
                    return $.test(e || "") || se.error("unsupported lang: " + e),
                    e = e.replace(te, ne).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === p
                },
                focus: function(e) {
                    return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !i.pseudos.empty(e)
                },
                header: function(e) {
                    return G.test(e.nodeName)
                },
                input: function(e) {
                    return K.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: me(function() {
                    return [0]
                }),
                last: me(function(e, t) {
                    return [t - 1]
                }),
                eq: me(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: me(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: me(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: me(function(e, t, n) {
                    for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; )
                        e.push(i);
                    return e
                }),
                gt: me(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        }).pseudos.nth = i.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            i.pseudos[t] = he(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            i.pseudos[t] = pe(t);
        function _e() {}
        function ye(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function be(e, t, n) {
            var i = t.dir
              , o = t.next
              , r = o || i
              , a = n && "parentNode" === r
              , s = T++;
            return t.first ? function(t, n, o) {
                for (; t = t[i]; )
                    if (1 === t.nodeType || a)
                        return e(t, n, o);
                return !1
            }
            : function(t, n, l) {
                var u, c, f, d = [E, s];
                if (l) {
                    for (; t = t[i]; )
                        if ((1 === t.nodeType || a) && e(t, n, l))
                            return !0
                } else
                    for (; t = t[i]; )
                        if (1 === t.nodeType || a)
                            if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}),
                            o && o === t.nodeName.toLowerCase())
                                t = t[i] || t;
                            else {
                                if ((u = c[r]) && u[0] === E && u[1] === s)
                                    return d[2] = u[2];
                                if ((c[r] = d)[2] = e(t, n, l))
                                    return !0
                            }
                return !1
            }
        }
        function we(e) {
            return 1 < e.length ? function(t, n, i) {
                for (var o = e.length; o--; )
                    if (!e[o](t, n, i))
                        return !1;
                return !0
            }
            : e[0]
        }
        function Ee(e, t, n, i, o) {
            for (var r, a = [], s = 0, l = e.length, u = null != t; s < l; s++)
                (r = e[s]) && (n && !n(r, i, o) || (a.push(r),
                u && t.push(s)));
            return a
        }
        function Te(e, t, n, i, o, r) {
            return i && !i[b] && (i = Te(i)),
            o && !o[b] && (o = Te(o, r)),
            ue(function(r, a, s, l) {
                var u, c, f, d = [], h = [], p = a.length, g = r || function(e, t, n) {
                    for (var i = 0, o = t.length; i < o; i++)
                        se(e, t[i], n);
                    return n
                }(t || "*", s.nodeType ? [s] : s, []), m = !e || !r && t ? g : Ee(g, d, e, s, l), v = n ? o || (r ? e : p || i) ? [] : a : m;
                if (n && n(m, v, s, l),
                i)
                    for (u = Ee(v, h),
                    i(u, [], s, l),
                    c = u.length; c--; )
                        (f = u[c]) && (v[h[c]] = !(m[h[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (u = [],
                            c = v.length; c--; )
                                (f = v[c]) && u.push(m[c] = f);
                            o(null, v = [], u, l)
                        }
                        for (c = v.length; c--; )
                            (f = v[c]) && -1 < (u = o ? P(r, f) : d[c]) && (r[u] = !(a[u] = f))
                    }
                } else
                    v = Ee(v === a ? v.splice(p, v.length) : v),
                    o ? o(null, a, v, l) : O.apply(a, v)
            })
        }
        function Ce(e) {
            for (var t, n, o, r = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], l = a ? 1 : 0, c = be(function(e) {
                return e === t
            }, s, !0), f = be(function(e) {
                return -1 < P(t, e)
            }, s, !0), d = [function(e, n, i) {
                var o = !a && (i || n !== u) || ((t = n).nodeType ? c(e, n, i) : f(e, n, i));
                return t = null,
                o
            }
            ]; l < r; l++)
                if (n = i.relative[e[l].type])
                    d = [be(we(d), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
                        for (o = ++l; o < r && !i.relative[e[o].type]; o++)
                            ;
                        return Te(1 < l && we(d), 1 < l && ye(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(W, "$1"), n, l < o && Ce(e.slice(l, o)), o < r && Ce(e = e.slice(o)), o < r && ye(e))
                    }
                    d.push(n)
                }
            return we(d)
        }
        return _e.prototype = i.filters = i.pseudos,
        i.setFilters = new _e,
        a = se.tokenize = function(e, t) {
            var n, o, r, a, s, l, u, c = x[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            for (s = e,
            l = [],
            u = i.preFilter; s; ) {
                for (a in n && !(o = U.exec(s)) || (o && (s = s.slice(o[0].length) || s),
                l.push(r = [])),
                n = !1,
                (o = Q.exec(s)) && (n = o.shift(),
                r.push({
                    value: n,
                    type: o[0].replace(W, " ")
                }),
                s = s.slice(n.length)),
                i.filter)
                    !(o = X[a].exec(s)) || u[a] && !(o = u[a](o)) || (n = o.shift(),
                    r.push({
                        value: n,
                        type: a,
                        matches: o
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? se.error(e) : x(e, l).slice(0)
        }
        ,
        s = se.compile = function(e, t) {
            var n, o, r, s, l, c, f = [], p = [], m = S[e + " "];
            if (!m) {
                for (t || (t = a(e)),
                n = t.length; n--; )
                    (m = Ce(t[n]))[b] ? f.push(m) : p.push(m);
                (m = S(e, (o = p,
                s = 0 < (r = f).length,
                l = 0 < o.length,
                c = function(e, t, n, a, c) {
                    var f, p, m, v = 0, _ = "0", y = e && [], b = [], w = u, T = e || l && i.find.TAG("*", c), C = E += null == w ? 1 : Math.random() || .1, x = T.length;
                    for (c && (u = t == h || t || c); _ !== x && null != (f = T[_]); _++) {
                        if (l && f) {
                            for (p = 0,
                            t || f.ownerDocument == h || (d(f),
                            n = !g); m = o[p++]; )
                                if (m(f, t || h, n)) {
                                    a.push(f);
                                    break
                                }
                            c && (E = C)
                        }
                        s && ((f = !m && f) && v--,
                        e && y.push(f))
                    }
                    if (v += _,
                    s && _ !== v) {
                        for (p = 0; m = r[p++]; )
                            m(y, b, t, n);
                        if (e) {
                            if (0 < v)
                                for (; _--; )
                                    y[_] || b[_] || (b[_] = j.call(a));
                            b = Ee(b)
                        }
                        O.apply(a, b),
                        c && !e && 0 < b.length && 1 < v + r.length && se.uniqueSort(a)
                    }
                    return c && (E = C,
                    u = w),
                    y
                }
                ,
                s ? ue(c) : c))).selector = e
            }
            return m
        }
        ,
        l = se.select = function(e, t, n, o) {
            var r, l, u, c, f, d = "function" == typeof e && e, h = !o && a(e = d.selector || e);
            if (n = n || [],
            1 === h.length) {
                if (2 < (l = h[0] = h[0].slice(0)).length && "ID" === (u = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(u.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    d && (t = t.parentNode),
                    e = e.slice(l.shift().value.length)
                }
                for (r = X.needsContext.test(e) ? 0 : l.length; r-- && !i.relative[c = (u = l[r]).type]; )
                    if ((f = i.find[c]) && (o = f(u.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                        if (l.splice(r, 1),
                        !(e = o.length && ye(l)))
                            return O.apply(n, o),
                            n;
                        break
                    }
            }
            return (d || s(e, h))(o, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t),
            n
        }
        ,
        n.sortStable = b.split("").sort(N).join("") === b,
        n.detectDuplicates = !!f,
        d(),
        n.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
        }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        n.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(q, function(e, t, n) {
            var i;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
        se
    }(e);
    w.find = T,
    w.expr = T.selectors,
    w.expr[":"] = w.expr.pseudos,
    w.uniqueSort = w.unique = T.uniqueSort,
    w.text = T.getText,
    w.isXMLDoc = T.isXML,
    w.contains = T.contains,
    w.escapeSelector = T.escape;
    var C = function(e, t, n) {
        for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (o && w(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
      , x = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , S = w.expr.match.needsContext;
    function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function A(e, t, n) {
        return p(t) ? w.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? w.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function(e) {
            return -1 < s.call(t, e) !== n
        }) : w.filter(t, e, n)
    }
    w.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? w.find.matchesSelector(i, e) ? [i] : [] : w.find.matches(e, w.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    w.fn.extend({
        find: function(e) {
            var t, n, i = this.length, o = this;
            if ("string" != typeof e)
                return this.pushStack(w(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (w.contains(o[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < i; t++)
                w.find(e, o[t], n);
            return 1 < i ? w.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(A(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(A(this, e || [], !0))
        },
        is: function(e) {
            return !!A(this, "string" == typeof e && S.test(e) ? w(e) : e || [], !1).length
        }
    });
    var k, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(e, t, n) {
        var i, o;
        if (!e)
            return this;
        if (n = n || k,
        "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) || !i[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (w.merge(this, w.parseHTML(i[1], (t = t instanceof w ? t[0] : t) && t.nodeType ? t.ownerDocument || t : m, !0)),
                N.test(i[1]) && w.isPlainObject(t))
                    for (i in t)
                        p(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = m.getElementById(i[2])) && (this[0] = o,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : p(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }
    ).prototype = w.fn,
    k = w(m);
    var I = /^(?:parents|prev(?:Until|All))/
      , O = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function L(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    w.fn.extend({
        has: function(e) {
            var t = w(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0, o = this.length, r = [], a = "string" != typeof e && w(e);
            if (!S.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
            return this.pushStack(1 < r.length ? w.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? s.call(w(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return C(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return C(e, "parentNode", n)
        },
        next: function(e) {
            return L(e, "nextSibling")
        },
        prev: function(e) {
            return L(e, "previousSibling")
        },
        nextAll: function(e) {
            return C(e, "nextSibling")
        },
        prevAll: function(e) {
            return C(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return C(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return C(e, "previousSibling", n)
        },
        siblings: function(e) {
            return x((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (D(e, "template") && (e = e.content || e),
            w.merge([], e.childNodes))
        }
    }, function(e, t) {
        w.fn[e] = function(n, i) {
            var o = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (o = w.filter(i, o)),
            1 < this.length && (O[e] || w.uniqueSort(o),
            I.test(e) && o.reverse()),
            this.pushStack(o)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;
    function q(e) {
        return e
    }
    function R(e) {
        throw e
    }
    function H(e, t, n, i) {
        var o;
        try {
            e && p(o = e.promise) ? o.call(e).done(t).fail(n) : e && p(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.Callbacks = function(e) {
        var t;
        e = "string" == typeof e ? (t = {},
        w.each(e.match(P) || [], function(e, n) {
            t[n] = !0
        }),
        t) : w.extend({}, e);
        var n, i, o, r, a = [], s = [], l = -1, u = function() {
            for (r = r || e.once,
            o = n = !0; s.length; l = -1)
                for (i = s.shift(); ++l < a.length; )
                    !1 === a[l].apply(i[0], i[1]) && e.stopOnFalse && (l = a.length,
                    i = !1);
            e.memory || (i = !1),
            n = !1,
            r && (a = i ? [] : "")
        }, c = {
            add: function() {
                return a && (i && !n && (l = a.length - 1,
                s.push(i)),
                function t(n) {
                    w.each(n, function(n, i) {
                        p(i) ? e.unique && c.has(i) || a.push(i) : i && i.length && "string" !== y(i) && t(i)
                    })
                }(arguments),
                i && !n && u()),
                this
            },
            remove: function() {
                return w.each(arguments, function(e, t) {
                    for (var n; -1 < (n = w.inArray(t, a, n)); )
                        a.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < w.inArray(e, a) : 0 < a.length
            },
            empty: function() {
                return a && (a = []),
                this
            },
            disable: function() {
                return r = s = [],
                a = i = "",
                this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return r = s = [],
                i || n || (a = i = ""),
                this
            },
            locked: function() {
                return !!r
            },
            fireWith: function(e, t) {
                return r || (t = [e, (t = t || []).slice ? t.slice() : t],
                s.push(t),
                n || u()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return c
    }
    ,
    w.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , o = {
                state: function() {
                    return i
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return o.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return w.Deferred(function(t) {
                        w.each(n, function(n, i) {
                            var o = p(e[i[4]]) && e[i[4]];
                            r[i[1]](function() {
                                var e = o && o.apply(this, arguments);
                                e && p(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, i, o) {
                    var r = 0;
                    function a(t, n, i, o) {
                        return function() {
                            var s = this
                              , l = arguments
                              , u = function() {
                                var e, u;
                                if (!(t < r)) {
                                    if ((e = i.apply(s, l)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    p(u = e && ("object" == typeof e || "function" == typeof e) && e.then) ? o ? u.call(e, a(r, n, q, o), a(r, n, R, o)) : (r++,
                                    u.call(e, a(r, n, q, o), a(r, n, R, o), a(r, n, q, n.notifyWith))) : (i !== q && (s = void 0,
                                    l = [e]),
                                    (o || n.resolveWith)(s, l))
                                }
                            }
                              , c = o ? u : function() {
                                try {
                                    u()
                                } catch (u) {
                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(u, c.stackTrace),
                                    r <= t + 1 && (i !== R && (s = void 0,
                                    l = [u]),
                                    n.rejectWith(s, l))
                                }
                            }
                            ;
                            t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()),
                            e.setTimeout(c))
                        }
                    }
                    return w.Deferred(function(e) {
                        n[0][3].add(a(0, e, p(o) ? o : q, e.notifyWith)),
                        n[1][3].add(a(0, e, p(t) ? t : q)),
                        n[2][3].add(a(0, e, p(i) ? i : R))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? w.extend(e, o) : o
                }
            }
              , r = {};
            return w.each(n, function(e, t) {
                var a = t[2]
                  , s = t[5];
                o[t[1]] = a.add,
                s && a.add(function() {
                    i = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                a.add(t[3].fire),
                r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments),
                    this
                }
                ,
                r[t[0] + "With"] = a.fireWith
            }),
            o.promise(r),
            t && t.call(r, r),
            r
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , i = Array(n)
              , r = o.call(arguments)
              , a = w.Deferred()
              , s = function(e) {
                return function(n) {
                    i[e] = this,
                    r[e] = 1 < arguments.length ? o.call(arguments) : n,
                    --t || a.resolveWith(i, r)
                }
            };
            if (t <= 1 && (H(e, a.done(s(n)).resolve, a.reject, !t),
            "pending" === a.state() || p(r[n] && r[n].then)))
                return a.then();
            for (; n--; )
                H(r[n], s(n), a.reject);
            return a.promise()
        }
    });
    var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && F.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    w.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    }
    ;
    var M = w.Deferred();
    function B() {
        m.removeEventListener("DOMContentLoaded", B),
        e.removeEventListener("load", B),
        w.ready()
    }
    w.fn.ready = function(e) {
        return M.then(e).catch(function(e) {
            w.readyException(e)
        }),
        this
    }
    ,
    w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0) !== e && 0 < --w.readyWait || M.resolveWith(m, [w])
        }
    }),
    w.ready.then = M.then,
    "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? e.setTimeout(w.ready) : (m.addEventListener("DOMContentLoaded", B),
    e.addEventListener("load", B));
    var W = function(e, t, n, i, o, r, a) {
        var s = 0
          , l = e.length
          , u = null == n;
        if ("object" === y(n))
            for (s in o = !0,
            n)
                W(e, t, s, n[s], !0, r, a);
        else if (void 0 !== i && (o = !0,
        p(i) || (a = !0),
        u && (a ? (t.call(e, i),
        t = null) : (u = t,
        t = function(e, t, n) {
            return u.call(w(e), n)
        }
        )),
        t))
            for (; s < l; s++)
                t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return o ? e : u ? t.call(e) : l ? t(e[0], n) : r
    }
      , U = /^-ms-/
      , Q = /-([a-z])/g;
    function z(e, t) {
        return t.toUpperCase()
    }
    function V(e) {
        return e.replace(U, "ms-").replace(Q, z)
    }
    var $ = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function X() {
        this.expando = w.expando + X.uid++
    }
    X.uid = 1,
    X.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t)
                o[V(t)] = n;
            else
                for (i in t)
                    o[V(i)] = t[i];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t))in i ? [t] : t.match(P) || []).length;
                    for (; n--; )
                        delete i[t[n]]
                }
                (void 0 === t || w.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var Y = new X
      , K = new X
      , G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , J = /[A-Z]/g;
    function Z(e, t, n) {
        var i, o;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(J, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : G.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                K.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    w.extend({
        hasData: function(e) {
            return K.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return K.access(e, t, n)
        },
        removeData: function(e, t) {
            K.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }),
    w.fn.extend({
        data: function(e, t) {
            var n, i, o, r = this[0], a = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = K.get(r),
                1 === r.nodeType && !Y.get(r, "hasDataAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = V(i.slice(5)),
                        Z(r, i, o[i]));
                    Y.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                K.set(this, e)
            }) : W(this, function(t) {
                var n;
                if (r && void 0 === t)
                    return void 0 !== (n = K.get(r, e)) || void 0 !== (n = Z(r, e)) ? n : void 0;
                this.each(function() {
                    K.set(this, e, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                K.remove(this, e)
            })
        }
    }),
    w.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return i = Y.get(e, t = (t || "fx") + "queue"),
                n && (!i || Array.isArray(n) ? i = Y.access(e, t, w.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(e, t) {
            var n = w.queue(e, t = t || "fx")
              , i = n.length
              , o = n.shift()
              , r = w._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(),
            i--),
            o && ("fx" === t && n.unshift("inprogress"),
            delete r.stop,
            o.call(e, function() {
                w.dequeue(e, t)
            }, r)),
            !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: w.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    w.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                w.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1, o = w.Deferred(), r = this, a = this.length, s = function() {
                --i || o.resolveWith(r, [r])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (n = Y.get(r[a], e + "queueHooks")) && n.empty && (i++,
                n.empty.add(s));
            return s(),
            o.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , ie = m.documentElement
      , oe = function(e) {
        return w.contains(e.ownerDocument, e)
    }
      , re = {
        composed: !0
    };
    ie.getRootNode && (oe = function(e) {
        return w.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument
    }
    );
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === w.css(e, "display")
    };
    function se(e, t, n, i) {
        var o, r, a = 20, s = i ? function() {
            return i.cur()
        }
        : function() {
            return w.css(e, t, "")
        }
        , l = s(), u = n && n[3] || (w.cssNumber[t] ? "" : "px"), c = e.nodeType && (w.cssNumber[t] || "px" !== u && +l) && te.exec(w.css(e, t));
        if (c && c[3] !== u) {
            for (u = u || c[3],
            c = +(l /= 2) || 1; a--; )
                w.style(e, t, c + u),
                (1 - r) * (1 - (r = s() / l || .5)) <= 0 && (a = 0),
                c /= r;
            w.style(e, t, (c *= 2) + u),
            n = n || []
        }
        return n && (c = +c || +l || 0,
        o = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = u,
        i.start = c,
        i.end = o)),
        o
    }
    var le = {};
    function ue(e, t) {
        for (var n, i, o, r, a, s, l, u = [], c = 0, f = e.length; c < f; c++)
            (i = e[c]).style && (n = i.style.display,
            t ? ("none" === n && (u[c] = Y.get(i, "display") || null,
            u[c] || (i.style.display = "")),
            "" === i.style.display && ae(i) && (u[c] = (l = a = r = void 0,
            a = (o = i).ownerDocument,
            (l = le[s = o.nodeName]) || (r = a.body.appendChild(a.createElement(s)),
            l = w.css(r, "display"),
            r.parentNode.removeChild(r),
            "none" === l && (l = "block"),
            le[s] = l)))) : "none" !== n && (u[c] = "none",
            Y.set(i, "display", n)));
        for (c = 0; c < f; c++)
            null != u[c] && (e[c].style.display = u[c]);
        return e
    }
    w.fn.extend({
        show: function() {
            return ue(this, !0)
        },
        hide: function() {
            return ue(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var ce, fe, de = /^(?:checkbox|radio)$/i, he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, pe = /^$|^module$|\/(?:java|ecma)script/i;
    ce = m.createDocumentFragment().appendChild(m.createElement("div")),
    (fe = m.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    h.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ce.innerHTML = "<textarea>x</textarea>",
    h.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue,
    ce.innerHTML = "<option></option>",
    h.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function me(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && D(e, t) ? w.merge([e], n) : n
    }
    function ve(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td,
    h.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var _e = /<|&#?\w+;/;
    function ye(e, t, n, i, o) {
        for (var r, a, s, l, u, c, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
            if ((r = e[h]) || 0 === r)
                if ("object" === y(r))
                    w.merge(d, r.nodeType ? [r] : r);
                else if (_e.test(r)) {
                    for (a = a || f.appendChild(t.createElement("div")),
                    s = (he.exec(r) || ["", ""])[1].toLowerCase(),
                    a.innerHTML = (l = ge[s] || ge._default)[1] + w.htmlPrefilter(r) + l[2],
                    c = l[0]; c--; )
                        a = a.lastChild;
                    w.merge(d, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    d.push(t.createTextNode(r));
        for (f.textContent = "",
        h = 0; r = d[h++]; )
            if (i && -1 < w.inArray(r, i))
                o && o.push(r);
            else if (u = oe(r),
            a = me(f.appendChild(r), "script"),
            u && ve(a),
            n)
                for (c = 0; r = a[c++]; )
                    pe.test(r.type || "") && n.push(r);
        return f
    }
    var be = /^([^.]*)(?:\.(.+)|)/;
    function we() {
        return !0
    }
    function Ee() {
        return !1
    }
    function Te(e, t) {
        return e === function() {
            try {
                return m.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Ce(e, t, n, i, o, r) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (i = i || n,
            n = void 0),
            t)
                Ce(e, s, n, i, t[s], r);
            return e
        }
        if (null == i && null == o ? (o = n,
        i = n = void 0) : null == o && ("string" == typeof n ? (o = i,
        i = void 0) : (o = i,
        i = n,
        n = void 0)),
        !1 === o)
            o = Ee;
        else if (!o)
            return e;
        return 1 === r && (a = o,
        (o = function(e) {
            return w().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = w.guid++)),
        e.each(function() {
            w.event.add(this, t, o, i, n)
        })
    }
    function xe(e, t, n) {
        n ? (Y.set(e, t, !1),
        w.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var i, r, a = Y.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a.length)
                        (w.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (a = o.call(arguments),
                    Y.set(this, t, a),
                    i = n(this, t),
                    this[t](),
                    a !== (r = Y.get(this, t)) || i ? Y.set(this, t, !1) : r = {},
                    a !== r)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        r && r.value
                } else
                    a.length && (Y.set(this, t, {
                        value: w.event.trigger(w.extend(a[0], w.Event.prototype), a.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, t) && w.event.add(e, t, we)
    }
    w.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r, a, s, l, u, c, f, d, h, p, g, m = Y.get(e);
            if ($(e))
                for (n.handler && (n = (r = n).handler,
                o = r.selector),
                o && w.find.matchesSelector(ie, o),
                n.guid || (n.guid = w.guid++),
                (l = m.events) || (l = m.events = Object.create(null)),
                (a = m.handle) || (a = m.handle = function(t) {
                    return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                u = (t = (t || "").match(P) || [""]).length; u--; )
                    h = g = (s = be.exec(t[u]) || [])[1],
                    p = (s[2] || "").split(".").sort(),
                    h && (f = w.event.special[h] || {},
                    f = w.event.special[h = (o ? f.delegateType : f.bindType) || h] || {},
                    c = w.extend({
                        type: h,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && w.expr.match.needsContext.test(o),
                        namespace: p.join(".")
                    }, r),
                    (d = l[h]) || ((d = l[h] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, i, p, a) || e.addEventListener && e.addEventListener(h, a)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    o ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                    w.event.global[h] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, a, s, l, u, c, f, d, h, p, g, m = Y.hasData(e) && Y.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(P) || [""]).length; u--; )
                    if (h = g = (s = be.exec(t[u]) || [])[1],
                    p = (s[2] || "").split(".").sort(),
                    h) {
                        for (f = w.event.special[h] || {},
                        d = l[h = (i ? f.delegateType : f.bindType) || h] || [],
                        s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = r = d.length; r--; )
                            c = d[r],
                            !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(r, 1),
                            c.selector && d.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || w.removeEvent(e, h, m.handle),
                        delete l[h])
                    } else
                        for (h in l)
                            w.event.remove(e, h + t[u], n, i, !0);
                w.isEmptyObject(l) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, o, r, a, s = new Array(arguments.length), l = w.event.fix(e), u = (Y.get(this, "events") || Object.create(null))[l.type] || [], c = w.event.special[l.type] || {};
            for (s[0] = l,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (l.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                for (a = w.event.handlers.call(this, l, u),
                t = 0; (o = a[t++]) && !l.isPropagationStopped(); )
                    for (l.currentTarget = o.elem,
                    n = 0; (r = o.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                        l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r,
                        l.data = r.data,
                        void 0 !== (i = ((w.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s)) && !1 === (l.result = i) && (l.preventDefault(),
                        l.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, l),
                l.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, a, s = [], l = t.delegateCount, u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (r = [],
                        a = {},
                        n = 0; n < l; n++)
                            void 0 === a[o = (i = t[n]).selector + " "] && (a[o] = i.needsContext ? -1 < w(o, this).index(u) : w.find(o, this, null, [u]).length),
                            a[o] && r.push(i);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return u = this,
            l < t.length && s.push({
                elem: u,
                handlers: t.slice(l)
            }),
            s
        },
        addProp: function(e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: p(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && D(t, "input") && xe(t, "click", we),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && D(t, "input") && xe(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return de.test(t.type) && t.click && D(t, "input") && Y.get(t, "click") || D(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    w.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    w.Event = function(e, t) {
        if (!(this instanceof w.Event))
            return new w.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Ee,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && w.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[w.expando] = !0
    }
    ,
    w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, w.event.addProp),
    w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        w.event.special[e] = {
            setup: function() {
                return xe(this, e, Te),
                !1
            },
            trigger: function() {
                return xe(this, e),
                !0
            },
            _default: function(t) {
                return Y.get(t.target, e)
            },
            delegateType: t
        }
    }),
    w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = e.relatedTarget, o = e.handleObj;
                return i && (i === this || w.contains(this, i)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    w.fn.extend({
        on: function(e, t, n, i) {
            return Ce(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Ce(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof e) {
                for (o in e)
                    this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Ee),
            this.each(function() {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var Se = /<script|<style|<link/i
      , De = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function Ae(e, t) {
        return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
    }
    function ke(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function je(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Ie(e, t) {
        var n, i, o, r, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (o in Y.remove(t, "handle events"),
                s)
                    for (n = 0,
                    i = s[o].length; n < i; n++)
                        w.event.add(t, o, s[o][n]);
            K.hasData(e) && (r = K.access(e),
            a = w.extend({}, r),
            K.set(t, a))
        }
    }
    function Oe(e, t, n, i) {
        t = r(t);
        var o, a, s, l, u, c, f = 0, d = e.length, g = d - 1, m = t[0], v = p(m);
        if (v || 1 < d && "string" == typeof m && !h.checkClone && De.test(m))
            return e.each(function(o) {
                var r = e.eq(o);
                v && (t[0] = m.call(this, o, r.html())),
                Oe(r, t, n, i)
            });
        if (d && (a = (o = ye(t, e[0].ownerDocument, !1, e, i)).firstChild,
        1 === o.childNodes.length && (o = a),
        a || i)) {
            for (l = (s = w.map(me(o, "script"), ke)).length; f < d; f++)
                u = o,
                f !== g && (u = w.clone(u, !0, !0),
                l && w.merge(s, me(u, "script"))),
                n.call(e[f], u, f);
            if (l)
                for (c = s[s.length - 1].ownerDocument,
                w.map(s, je),
                f = 0; f < l; f++)
                    pe.test((u = s[f]).type || "") && !Y.access(u, "globalEval") && w.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? w._evalUrl && !u.noModule && w._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, c) : _(u.textContent.replace(Ne, ""), u, c))
        }
        return e
    }
    function Le(e, t, n) {
        for (var i, o = t ? w.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
            n || 1 !== i.nodeType || w.cleanData(me(i)),
            i.parentNode && (n && oe(i) && ve(me(i, "script")),
            i.parentNode.removeChild(i));
        return e
    }
    w.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var i, o, r, a, s, l, u, c = e.cloneNode(!0), f = oe(e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = me(c),
                i = 0,
                o = (r = me(e)).length; i < o; i++)
                    s = r[i],
                    "input" === (u = (l = a[i]).nodeName.toLowerCase()) && de.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (r = r || me(e),
                    a = a || me(c),
                    i = 0,
                    o = r.length; i < o; i++)
                        Ie(r[i], a[i]);
                else
                    Ie(e, c);
            return 0 < (a = me(c, "script")).length && ve(a, !f && me(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, i, o = w.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if ($(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (i in t.events)
                                o[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }),
    w.fn.extend({
        detach: function(e) {
            return Le(this, e, !0)
        },
        remove: function(e) {
            return Le(this, e)
        },
        text: function(e) {
            return W(this, function(e) {
                return void 0 === e ? w.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Oe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ae(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Oe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ae(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Oe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Oe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (w.cleanData(me(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return w.clone(this, e, t)
            })
        },
        html: function(e) {
            return W(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Se.test(e) && !ge[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < i; n++)
                            1 === (t = this[n] || {}).nodeType && (w.cleanData(me(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Oe(this, arguments, function(t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(me(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        w.fn[e] = function(e) {
            for (var n, i = [], o = w(e), r = o.length - 1, s = 0; s <= r; s++)
                n = s === r ? this : this.clone(!0),
                w(o[s])[t](n),
                a.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i")
      , qe = /^--/
      , Re = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , He = function(e, t, n) {
        var i, o, r = {};
        for (o in t)
            r[o] = e.style[o],
            e.style[o] = t[o];
        for (o in i = n.call(e),
        t)
            e.style[o] = r[o];
        return i
    }
      , Fe = new RegExp(ne.join("|"),"i")
      , Me = "[\\x20\\t\\r\\n\\f]"
      , Be = new RegExp("^" + Me + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Me + "+$","g");
    function We(e, t, n) {
        var i, o, r, a, s = qe.test(t), l = e.style;
        return (n = n || Re(e)) && (a = n.getPropertyValue(t) || n[t],
        s && a && (a = a.replace(Be, "$1") || void 0),
        "" !== a || oe(e) || (a = w.style(e, t)),
        !h.pixelBoxStyles() && Pe.test(a) && Fe.test(t) && (i = l.width,
        o = l.minWidth,
        r = l.maxWidth,
        l.minWidth = l.maxWidth = l.width = a,
        a = n.width,
        l.width = i,
        l.minWidth = o,
        l.maxWidth = r)),
        void 0 !== a ? a + "" : a
    }
    function Ue(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function t() {
            if (c) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                ie.appendChild(u).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top,
                l = 12 === n(t.marginLeft),
                c.style.right = "60%",
                a = 36 === n(t.right),
                o = 36 === n(t.width),
                c.style.position = "absolute",
                r = 12 === n(c.offsetWidth / 3),
                ie.removeChild(u),
                c = null
            }
        }
        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, o, r, a, s, l, u = m.createElement("div"), c = m.createElement("div");
        c.style && (c.style.backgroundClip = "content-box",
        c.cloneNode(!0).style.backgroundClip = "",
        h.clearCloneStyle = "content-box" === c.style.backgroundClip,
        w.extend(h, {
            boxSizingReliable: function() {
                return t(),
                o
            },
            pixelBoxStyles: function() {
                return t(),
                a
            },
            pixelPosition: function() {
                return t(),
                i
            },
            reliableMarginLeft: function() {
                return t(),
                l
            },
            scrollboxSize: function() {
                return t(),
                r
            },
            reliableTrDimensions: function() {
                var t, n, i, o;
                return null == s && (t = m.createElement("table"),
                n = m.createElement("tr"),
                i = m.createElement("div"),
                t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                n.style.cssText = "border:1px solid",
                n.style.height = "1px",
                i.style.height = "9px",
                i.style.display = "block",
                ie.appendChild(t).appendChild(n).appendChild(i),
                o = e.getComputedStyle(n),
                s = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === n.offsetHeight,
                ie.removeChild(t)),
                s
            }
        }))
    }();
    var Qe = ["Webkit", "Moz", "ms"]
      , ze = m.createElement("div").style
      , Ve = {};
    function $e(e) {
        return w.cssProps[e] || Ve[e] || (e in ze ? e : Ve[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Qe.length; n--; )
                if ((e = Qe[n] + t)in ze)
                    return e
        }(e) || e)
    }
    var Xe = /^(none|table(?!-c[ea]).+)/
      , Ye = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ke = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Ge(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }
    function Je(e, t, n, i, o, r) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , l = 0;
        if (n === (i ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (l += w.css(e, n + ne[a], !0, o)),
            i ? ("content" === n && (l -= w.css(e, "padding" + ne[a], !0, o)),
            "margin" !== n && (l -= w.css(e, "border" + ne[a] + "Width", !0, o))) : (l += w.css(e, "padding" + ne[a], !0, o),
            "padding" !== n ? l += w.css(e, "border" + ne[a] + "Width", !0, o) : s += w.css(e, "border" + ne[a] + "Width", !0, o));
        return !i && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - s - .5)) || 0),
        l
    }
    function Ze(e, t, n) {
        var i = Re(e)
          , o = (!h.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, i)
          , r = o
          , a = We(e, t, i)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!h.boxSizingReliable() && o || !h.reliableTrDimensions() && D(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === w.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === w.css(e, "boxSizing", !1, i),
        (r = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + Je(e, t, n || (o ? "border" : "content"), r, i, a) + "px"
    }
    function et(e, t, n, i, o) {
        return new et.prototype.init(e,t,n,i,o)
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, a, s = V(t), l = qe.test(t), u = e.style;
                if (l || (t = $e(s)),
                a = w.cssHooks[t] || w.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (o = a.get(e, !1, i)) ? o : u[t];
                "string" == (r = typeof n) && (o = te.exec(n)) && o[1] && (n = se(e, t, o),
                r = "number"),
                null != n && n == n && ("number" !== r || l || (n += o && o[3] || (w.cssNumber[s] ? "" : "px")),
                h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var o, r, a, s = V(t);
            return qe.test(t) || (t = $e(s)),
            (a = w.cssHooks[t] || w.cssHooks[s]) && "get"in a && (o = a.get(e, !0, n)),
            void 0 === o && (o = We(e, t, i)),
            "normal" === o && t in Ke && (o = Ke[t]),
            "" === n || n ? (r = parseFloat(o),
            !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }),
    w.each(["height", "width"], function(e, t) {
        w.cssHooks[t] = {
            get: function(e, n, i) {
                if (n)
                    return !Xe.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, t, i) : He(e, Ye, function() {
                        return Ze(e, t, i)
                    })
            },
            set: function(e, n, i) {
                var o, r = Re(e), a = !h.scrollboxSize() && "absolute" === r.position, s = (a || i) && "border-box" === w.css(e, "boxSizing", !1, r), l = i ? Je(e, t, i, s, r) : 0;
                return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - Je(e, t, "border", !1, r) - .5)),
                l && (o = te.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n,
                n = w.css(e, t)),
                Ge(0, n, l)
            }
        }
    }),
    w.cssHooks.marginLeft = Ue(h.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - He(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                    o[e + ne[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        },
        "margin" !== e && (w.cssHooks[e + t].set = Ge)
    }),
    w.fn.extend({
        css: function(e, t) {
            return W(this, function(e, t, n) {
                var i, o, r = {}, a = 0;
                if (Array.isArray(t)) {
                    for (i = Re(e),
                    o = t.length; a < o; a++)
                        r[t[a]] = w.css(e, t[a], !1, i);
                    return r
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((w.Tween = et).prototype = {
        constructor: et,
        init: function(e, t, n, i, o, r) {
            this.elem = e,
            this.prop = n,
            this.easing = o || w.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = r || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.pos = t = this.options.duration ? w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : et.propHooks._default.set(this),
            this
        }
    }).init.prototype = et.prototype,
    (et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[$e(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    w.fx = et.prototype.init,
    w.fx.step = {};
    var tt, nt, it, ot, rt = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
    function st() {
        nt && (!1 === m.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(st) : e.setTimeout(st, w.fx.interval),
        w.fx.tick())
    }
    function lt() {
        return e.setTimeout(function() {
            tt = void 0
        }),
        tt = Date.now()
    }
    function ut(e, t) {
        var n, i = 0, o = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            o["margin" + (n = ne[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e),
        o
    }
    function ct(e, t, n) {
        for (var i, o = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), r = 0, a = o.length; r < a; r++)
            if (i = o[r].call(n, t, e))
                return i
    }
    function ft(e, t, n) {
        var i, o, r = 0, a = ft.prefilters.length, s = w.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (o)
                return !1;
            for (var t = tt || lt(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), r = 0, a = u.tweens.length; r < a; r++)
                u.tweens[r].run(i);
            return s.notifyWith(e, [u, i, n]),
            i < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]),
            s.resolveWith(e, [u]),
            !1)
        }, u = s.promise({
            elem: e,
            props: w.extend({}, t),
            opts: w.extend(!0, {
                specialEasing: {},
                easing: w.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: tt || lt(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = w.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0
                  , i = t ? u.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; n < i; n++)
                    u.tweens[n].run(1);
                return t ? (s.notifyWith(e, [u, 1, 0]),
                s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]),
                this
            }
        }), c = u.props;
        for (function(e, t) {
            var n, i, o, r, a;
            for (n in e)
                if (o = t[i = V(n)],
                r = e[n],
                Array.isArray(r) && (o = r[1],
                r = e[n] = r[0]),
                n !== i && (e[i] = r,
                delete e[n]),
                (a = w.cssHooks[i]) && "expand"in a)
                    for (n in r = a.expand(r),
                    delete e[i],
                    r)
                        n in e || (e[n] = r[n],
                        t[n] = o);
                else
                    t[i] = o
        }(c, u.opts.specialEasing); r < a; r++)
            if (i = ft.prefilters[r].call(u, e, c, u.opts))
                return p(i.stop) && (w._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)),
                i;
        return w.map(c, ct, u),
        p(u.opts.start) && u.opts.start.call(e, u),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
        w.fx.timer(w.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })),
        u
    }
    w.Animation = w.extend(ft, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            p(e) ? (t = e,
            e = ["*"]) : e = e.match(P);
            for (var n, i = 0, o = e.length; i < o; i++)
                (ft.tweeners[n = e[i]] = ft.tweeners[n] || []).unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, o, r, a, s, l, u, c, f = "width"in t || "height"in t, d = this, h = {}, p = e.style, g = e.nodeType && ae(e), m = Y.get(e, "fxshow");
            for (i in n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            d.always(function() {
                d.always(function() {
                    a.unqueued--,
                    w.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (rt.test(o = t[i])) {
                    if (delete t[i],
                    r = r || "toggle" === o,
                    o === (g ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i])
                            continue;
                        g = !0
                    }
                    h[i] = m && m[i] || w.style(e, i)
                }
            if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(h))
                for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                null == (u = m && m.display) && (u = Y.get(e, "display")),
                "none" === (c = w.css(e, "display")) && (u ? c = u : (ue([e], !0),
                u = e.style.display || u,
                c = w.css(e, "display"),
                ue([e]))),
                ("inline" === c || "inline-block" === c && null != u) && "none" === w.css(e, "float") && (l || (d.done(function() {
                    p.display = u
                }),
                null == u && (u = "none" === (c = p.display) ? "" : c)),
                p.display = "inline-block")),
                n.overflow && (p.overflow = "hidden",
                d.always(function() {
                    p.overflow = n.overflow[0],
                    p.overflowX = n.overflow[1],
                    p.overflowY = n.overflow[2]
                })),
                l = !1,
                h)
                    l || (m ? "hidden"in m && (g = m.hidden) : m = Y.access(e, "fxshow", {
                        display: u
                    }),
                    r && (m.hidden = !g),
                    g && ue([e], !0),
                    d.done(function() {
                        for (i in g || ue([e]),
                        Y.remove(e, "fxshow"),
                        h)
                            w.style(e, i, h[i])
                    })),
                    l = ct(g ? m[i] : 0, i, d),
                    i in m || (m[i] = l.start,
                    g && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }),
    w.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || p(e) && e,
            duration: e,
            easing: n && t || t && !p(t) && t
        };
        return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration = i.duration in w.fx.speeds ? w.fx.speeds[i.duration] : w.fx.speeds._default),
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            p(i.old) && i.old.call(this),
            i.queue && w.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    w.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var o = w.isEmptyObject(e)
              , r = w.speed(t, n, i)
              , a = function() {
                var t = ft(this, w.extend({}, e), r);
                (o || Y.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , o = null != e && e + "queueHooks"
                  , r = w.timers
                  , a = Y.get(this);
                if (o)
                    a[o] && a[o].stop && i(a[o]);
                else
                    for (o in a)
                        a[o] && a[o].stop && at.test(o) && i(a[o]);
                for (o = r.length; o--; )
                    r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n),
                    t = !1,
                    r.splice(o, 1));
                !t && n || w.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = Y.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = w.timers, a = i ? i.length : 0;
                for (n.finish = !0,
                w.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = r.length; t--; )
                    r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0),
                    r.splice(t, 1));
                for (t = 0; t < a; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    w.each(["toggle", "show", "hide"], function(e, t) {
        var n = w.fn[t];
        w.fn[t] = function(e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, i, o)
        }
    }),
    w.each({
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        w.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }),
    w.timers = [],
    w.fx.tick = function() {
        var e, t = 0, n = w.timers;
        for (tt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(),
        tt = void 0
    }
    ,
    w.fx.timer = function(e) {
        w.timers.push(e),
        w.fx.start()
    }
    ,
    w.fx.interval = 13,
    w.fx.start = function() {
        nt || (nt = !0,
        st())
    }
    ,
    w.fx.stop = function() {
        nt = null
    }
    ,
    w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    w.fn.delay = function(t, n) {
        return t = w.fx && w.fx.speeds[t] || t,
        this.queue(n = n || "fx", function(n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(o)
            }
        })
    }
    ,
    it = m.createElement("input"),
    ot = m.createElement("select").appendChild(m.createElement("option")),
    it.type = "checkbox",
    h.checkOn = "" !== it.value,
    h.optSelected = ot.selected,
    (it = m.createElement("input")).value = "t",
    it.type = "radio",
    h.radioValue = "t" === it.value;
    var dt, ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e, t) {
            return W(this, w.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                w.removeAttr(this, e)
            })
        }
    }),
    w.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === r && w.isXMLDoc(e) || (o = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)),
                void 0 !== n ? null === n ? void w.removeAttr(e, t) : o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : o && "get"in o && null !== (i = o.get(e, t)) ? i : null == (i = w.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && D(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, o = t && t.match(P);
            if (o && 1 === e.nodeType)
                for (; n = o[i++]; )
                    e.removeAttribute(n)
        }
    }),
    dt = {
        set: function(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function(e, t, i) {
            var o, r, a = t.toLowerCase();
            return i || (r = ht[a],
            ht[a] = o,
            o = null != n(e, t, i) ? a : null,
            ht[a] = r),
            o
        }
    });
    var pt = /^(?:input|select|textarea|button)$/i
      , gt = /^(?:a|area)$/i;
    function mt(e) {
        return (e.match(P) || []).join(" ")
    }
    function vt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function _t(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    w.fn.extend({
        prop: function(e, t) {
            return W(this, w.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[w.propFix[e] || e]
            })
        }
    }),
    w.extend({
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return 1 === r && w.isXMLDoc(e) || (o = w.propHooks[t = w.propFix[t] || t]),
                void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get"in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : pt.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    h.optSelected || (w.propHooks.selected = {
        get: function(e) {
            return null
        },
        set: function(e) {}
    }),
    w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        w.propFix[this.toLowerCase()] = this
    }),
    w.fn.extend({
        addClass: function(e) {
            var t, n, i, o, r, a;
            return p(e) ? this.each(function(t) {
                w(this).addClass(e.call(this, t, vt(this)))
            }) : (t = _t(e)).length ? this.each(function() {
                if (i = vt(this),
                n = 1 === this.nodeType && " " + mt(i) + " ") {
                    for (r = 0; r < t.length; r++)
                        n.indexOf(" " + (o = t[r]) + " ") < 0 && (n += o + " ");
                    a = mt(n),
                    i !== a && this.setAttribute("class", a)
                }
            }) : this
        },
        removeClass: function(e) {
            var t, n, i, o, r, a;
            return p(e) ? this.each(function(t) {
                w(this).removeClass(e.call(this, t, vt(this)))
            }) : arguments.length ? (t = _t(e)).length ? this.each(function() {
                if (i = vt(this),
                n = 1 === this.nodeType && " " + mt(i) + " ") {
                    for (r = 0; r < t.length; r++)
                        for (o = t[r]; -1 < n.indexOf(" " + o + " "); )
                            n = n.replace(" " + o + " ", " ");
                    a = mt(n),
                    i !== a && this.setAttribute("class", a)
                }
            }) : this : this.attr("class", "")
        },
        toggleClass: function(e, t) {
            var n, i, o, r, a = typeof e, s = "string" === a || Array.isArray(e);
            return p(e) ? this.each(function(n) {
                w(this).toggleClass(e.call(this, n, vt(this), t), t)
            }) : "boolean" == typeof t && s ? t ? this.addClass(e) : this.removeClass(e) : (n = _t(e),
            this.each(function() {
                if (s)
                    for (r = w(this),
                    o = 0; o < n.length; o++)
                        r.hasClass(i = n[o]) ? r.removeClass(i) : r.addClass(i);
                else
                    void 0 !== e && "boolean" !== a || ((i = vt(this)) && Y.set(this, "__className__", i),
                    this.setAttribute && this.setAttribute("class", i || !1 === e ? "" : Y.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; )
                if (1 === n.nodeType && -1 < (" " + mt(vt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var yt = /\r/g;
    w.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = p(e),
            this.each(function(n) {
                var o;
                1 === this.nodeType && (null == (o = i ? e.call(this, n, w(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = w.map(o, function(e) {
                    return null == e ? "" : e + ""
                })),
                (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(yt, "") : null == n ? "" : n : void 0
        }
    }),
    w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : mt(w.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, o = e.options, r = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], l = a ? r + 1 : o.length;
                    for (i = r < 0 ? l : a ? r : 0; i < l; i++)
                        if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = w.makeArray(t), a = o.length; a--; )
                        ((i = o[a]).selected = -1 < w.inArray(w.valHooks.option.get(i), r)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    w.each(["radio", "checkbox"], function() {
        w.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < w.inArray(w(e).val(), t)
            }
        },
        h.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    h.focusin = "onfocusin"in e;
    var bt = /^(?:focusinfocus|focusoutblur)$/
      , wt = function(e) {
        e.stopPropagation()
    };
    w.extend(w.event, {
        trigger: function(t, n, i, o) {
            var r, a, s, l, u, f, d, h, v = [i || m], _ = c.call(t, "type") ? t.type : t, y = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = h = s = i = i || m,
            3 !== i.nodeType && 8 !== i.nodeType && !bt.test(_ + w.event.triggered) && (-1 < _.indexOf(".") && (_ = (y = _.split(".")).shift(),
            y.sort()),
            u = _.indexOf(":") < 0 && "on" + _,
            (t = t[w.expando] ? t : new w.Event(_,"object" == typeof t && t)).isTrigger = o ? 2 : 3,
            t.namespace = y.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = i),
            n = null == n ? [t] : w.makeArray(n, [t]),
            d = w.event.special[_] || {},
            o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !g(i)) {
                    for (bt.test((l = d.delegateType || _) + _) || (a = a.parentNode); a; a = a.parentNode)
                        v.push(a),
                        s = a;
                    s === (i.ownerDocument || m) && v.push(s.defaultView || s.parentWindow || e)
                }
                for (r = 0; (a = v[r++]) && !t.isPropagationStopped(); )
                    h = a,
                    t.type = 1 < r ? l : d.bindType || _,
                    (f = (Y.get(a, "events") || Object.create(null))[t.type] && Y.get(a, "handle")) && f.apply(a, n),
                    (f = u && a[u]) && f.apply && $(a) && (t.result = f.apply(a, n),
                    !1 === t.result && t.preventDefault());
                return t.type = _,
                o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !$(i) || u && p(i[_]) && !g(i) && ((s = i[u]) && (i[u] = null),
                w.event.triggered = _,
                t.isPropagationStopped() && h.addEventListener(_, wt),
                i[_](),
                t.isPropagationStopped() && h.removeEventListener(_, wt),
                w.event.triggered = void 0,
                s && (i[u] = s)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var i = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(i, null, t)
        }
    }),
    w.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return w.event.trigger(e, t, n, !0)
        }
    }),
    h.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this.document || this
                  , o = Y.access(i, t);
                o || i.addEventListener(e, n, !0),
                Y.access(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this.document || this
                  , o = Y.access(i, t) - 1;
                o ? Y.access(i, t, o) : (i.removeEventListener(e, n, !0),
                Y.remove(i, t))
            }
        }
    });
    var Et = e.location
      , Tt = {
        guid: Date.now()
    }
      , Ct = /\?/;
    w.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {}
        return i = n && n.getElementsByTagName("parsererror")[0],
        n && !i || w.error("Invalid XML: " + (i ? w.map(i.childNodes, function(e) {
            return e.textContent
        }).join("\n") : t)),
        n
    }
    ;
    var xt = /\[\]$/
      , St = /\r?\n/g
      , Dt = /^(?:submit|button|image|reset|file)$/i
      , Nt = /^(?:input|select|textarea|keygen)/i;
    function At(e, t, n, i) {
        var o;
        if (Array.isArray(t))
            w.each(t, function(t, o) {
                n || xt.test(e) ? i(e, o) : At(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
            });
        else if (n || "object" !== y(t))
            i(e, t);
        else
            for (o in t)
                At(e + "[" + o + "]", t[o], n, i)
    }
    w.param = function(e, t) {
        var n, i = [], o = function(e, t) {
            var n = p(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e))
            w.each(e, function() {
                o(this.name, this.value)
            });
        else
            for (n in e)
                At(n, e[n], t, o);
        return i.join("&")
    }
    ,
    w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && Nt.test(this.nodeName) && !Dt.test(e) && (this.checked || !de.test(e))
            }).map(function(e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(St, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(St, "\r\n")
                }
            }).get()
        }
    });
    var kt = /%20/g
      , jt = /#.*$/
      , It = /([?&])_=[^&]*/
      , Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Lt = /^(?:GET|HEAD)$/
      , Pt = /^\/\//
      , qt = {}
      , Rt = {}
      , Ht = "*/".concat("*")
      , Ft = m.createElement("a");
    function Mt(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var i, o = 0, r = t.toLowerCase().match(P) || [];
            if (p(n))
                for (; i = r[o++]; )
                    "+" === i[0] ? (i = i.slice(1) || "*",
                    (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function Bt(e, t, n, i) {
        var o = {}
          , r = e === Rt;
        function a(s) {
            var l;
            return o[s] = !0,
            w.each(e[s] || [], function(e, s) {
                var u = s(t, n, i);
                return "string" != typeof u || r || o[u] ? r ? !(l = u) : void 0 : (t.dataTypes.unshift(u),
                a(u),
                !1)
            }),
            l
        }
        return a(t.dataTypes[0]) || !o["*"] && a("*")
    }
    function Wt(e, t) {
        var n, i, o = w.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && w.extend(!0, e, i),
        e
    }
    Ft.href = Et.href,
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ht,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Wt(Wt(e, w.ajaxSettings), t) : Wt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Mt(qt),
        ajaxTransport: Mt(Rt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t,
            t = void 0);
            var i, o, r, a, s, l, u, c, f, d, h = w.ajaxSetup({}, n = n || {}), p = h.context || h, g = h.context && (p.nodeType || p.jquery) ? w(p) : w.event, v = w.Deferred(), _ = w.Callbacks("once memory"), y = h.statusCode || {}, b = {}, E = {}, T = "canceled", C = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (u) {
                        if (!a)
                            for (a = {}; t = Ot.exec(r); )
                                a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = a[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return u ? r : null
                },
                setRequestHeader: function(e, t) {
                    return null == u && (e = E[e.toLowerCase()] = E[e.toLowerCase()] || e,
                    b[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == u && (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (u)
                            C.always(e[C.status]);
                        else
                            for (t in e)
                                y[t] = [y[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || T;
                    return i && i.abort(t),
                    x(0, t),
                    this
                }
            };
            if (v.promise(C),
            h.url = ((t || h.url || Et.href) + "").replace(Pt, Et.protocol + "//"),
            h.type = n.method || n.type || h.method || h.type,
            h.dataTypes = (h.dataType || "*").toLowerCase().match(P) || [""],
            null == h.crossDomain) {
                l = m.createElement("a");
                try {
                    l.href = h.url,
                    l.href = l.href,
                    h.crossDomain = Ft.protocol + "//" + Ft.host != l.protocol + "//" + l.host
                } catch (t) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)),
            Bt(qt, h, n, C),
            u)
                return C;
            for (f in (c = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !Lt.test(h.type),
            o = h.url.replace(jt, ""),
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(kt, "+")) : (d = h.url.slice(o.length),
            h.data && (h.processData || "string" == typeof h.data) && (o += (Ct.test(o) ? "&" : "?") + h.data,
            delete h.data),
            !1 === h.cache && (o = o.replace(It, "$1"),
            d = (Ct.test(o) ? "&" : "?") + "_=" + Tt.guid++ + d),
            h.url = o + d),
            h.ifModified && (w.lastModified[o] && C.setRequestHeader("If-Modified-Since", w.lastModified[o]),
            w.etag[o] && C.setRequestHeader("If-None-Match", w.etag[o])),
            (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && C.setRequestHeader("Content-Type", h.contentType),
            C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : h.accepts["*"]),
            h.headers)
                C.setRequestHeader(f, h.headers[f]);
            if (h.beforeSend && (!1 === h.beforeSend.call(p, C, h) || u))
                return C.abort();
            if (T = "abort",
            _.add(h.complete),
            C.done(h.success),
            C.fail(h.error),
            i = Bt(Rt, h, n, C)) {
                if (C.readyState = 1,
                c && g.trigger("ajaxSend", [C, h]),
                u)
                    return C;
                h.async && 0 < h.timeout && (s = e.setTimeout(function() {
                    C.abort("timeout")
                }, h.timeout));
                try {
                    u = !1,
                    i.send(b, x)
                } catch (t) {
                    if (u)
                        throw t;
                    x(-1, t)
                }
            } else
                x(-1, "No Transport");
            function x(t, n, a, l) {
                var f, d, m, b, E, T = n;
                u || (u = !0,
                s && e.clearTimeout(s),
                i = void 0,
                r = l || "",
                C.readyState = 0 < t ? 4 : 0,
                f = 200 <= t && t < 300 || 304 === t,
                a && (b = function(e, t, n) {
                    for (var i, o, r, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in s)
                            if (s[o] && s[o].test(i)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0]in n)
                        r = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            a || (a = o)
                        }
                        r = r || a
                    }
                    if (r)
                        return r !== l[0] && l.unshift(r),
                        n[r]
                }(h, C, a)),
                !f && -1 < w.inArray("script", h.dataTypes) && w.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}
                ),
                b = function(e, t, n, i) {
                    var o, r, a, s, l, u = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            u[a.toLowerCase()] = e.converters[a];
                    for (r = c.shift(); r; )
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t),
                        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = r,
                        r = c.shift())
                            if ("*" === r)
                                r = l;
                            else if ("*" !== l && l !== r) {
                                if (!(a = u[l + " " + r] || u["* " + r]))
                                    for (o in u)
                                        if ((s = o.split(" "))[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                            !0 === a ? a = u[o] : !0 !== u[o] && (r = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws)
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + l + " to " + r
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, b, C, f),
                f ? (h.ifModified && ((E = C.getResponseHeader("Last-Modified")) && (w.lastModified[o] = E),
                (E = C.getResponseHeader("etag")) && (w.etag[o] = E)),
                204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state,
                d = b.data,
                f = !(m = b.error))) : (m = T,
                !t && T || (T = "error",
                t < 0 && (t = 0))),
                C.status = t,
                C.statusText = (n || T) + "",
                f ? v.resolveWith(p, [d, T, C]) : v.rejectWith(p, [C, T, m]),
                C.statusCode(y),
                y = void 0,
                c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [C, h, f ? d : m]),
                _.fireWith(p, [C, T]),
                c && (g.trigger("ajaxComplete", [C, h]),
                --w.active || w.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return w.get(e, void 0, t, "script")
        }
    }),
    w.each(["get", "post"], function(e, t) {
        w[t] = function(e, n, i, o) {
            return p(n) && (o = o || i,
            i = n,
            n = void 0),
            w.ajax(w.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, w.isPlainObject(e) && e))
        }
    }),
    w.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    w._evalUrl = function(e, t, n) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                w.globalEval(e, t, n)
            }
        })
    }
    ,
    w.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (p(e) && (e = e.call(this[0])),
            t = w(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return p(e) ? this.each(function(t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = w(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = p(e);
            return this.each(function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                w(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    w.expr.pseudos.hidden = function(e) {
        return !w.expr.pseudos.visible(e)
    }
    ,
    w.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    w.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    ;
    var Ut = {
        0: 200,
        1223: 204
    }
      , Qt = w.ajaxSettings.xhr();
    h.cors = !!Qt && "withCredentials"in Qt,
    h.ajax = Qt = !!Qt,
    w.ajaxTransport(function(t) {
        var n, i;
        if (h.cors || Qt && !t.crossDomain)
            return {
                send: function(o, r) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (a in t.xhrFields)
                            s[a] = t.xhrFields[a];
                    for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                    t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"),
                    o)
                        s.setRequestHeader(a, o[a]);
                    n = function(e) {
                        return function() {
                            n && (n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                            "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Ut[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }
                    ,
                    s.onload = n(),
                    i = s.onerror = s.ontimeout = n("error"),
                    void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout(function() {
                            n && i()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (o) {
                        if (n)
                            throw o
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    w.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e),
                e
            }
        }
    }),
    w.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    w.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs)
            return {
                send: function(i, o) {
                    t = w("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && o("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    m.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
    });
    var zt, Vt = [], $t = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Vt.pop() || w.expando + "_" + Tt.guid++;
            return this[e] = !0,
            e
        }
    }),
    w.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, r, a, s = !1 !== t.jsonp && ($t.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && $t.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return o = t.jsonpCallback = p(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace($t, "$1" + o) : !1 !== t.jsonp && (t.url += (Ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
            t.converters["script json"] = function() {
                return a || w.error(o + " was not called"),
                a[0]
            }
            ,
            t.dataTypes[0] = "json",
            r = e[o],
            e[o] = function() {
                a = arguments
            }
            ,
            i.always(function() {
                void 0 === r ? w(e).removeProp(o) : e[o] = r,
                t[o] && (t.jsonpCallback = n.jsonpCallback,
                Vt.push(o)),
                a && p(r) && r(a[0]),
                a = r = void 0
            }),
            "script"
    }),
    h.createHTMLDocument = ((zt = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === zt.childNodes.length),
    w.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (h.createHTMLDocument ? ((i = (t = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href,
        t.head.appendChild(i)) : t = m),
        r = !n && [],
        (o = N.exec(e)) ? [t.createElement(o[1])] : (o = ye([e], t, r),
        r && r.length && w(r).remove(),
        w.merge([], o.childNodes)));
        var i, o, r
    }
    ,
    w.fn.load = function(e, t, n) {
        var i, o, r, a = this, s = e.indexOf(" ");
        return -1 < s && (i = mt(e.slice(s)),
        e = e.slice(0, s)),
        p(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (o = "POST"),
        0 < a.length && w.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments,
            a.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, r || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    w.expr.pseudos.animated = function(e) {
        return w.grep(w.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    w.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, a, s, l, u = w.css(e, "position"), c = w(e), f = {};
            "static" === u && (e.style.position = "relative"),
            s = c.offset(),
            r = w.css(e, "top"),
            l = w.css(e, "left"),
            ("absolute" === u || "fixed" === u) && -1 < (r + l).indexOf("auto") ? (a = (i = c.position()).top,
            o = i.left) : (a = parseFloat(r) || 0,
            o = parseFloat(l) || 0),
            p(t) && (t = t.call(e, n, w.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + o),
            "using"in t ? t.using.call(e, f) : c.css(f)
        }
    },
    w.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    w.offset.setOffset(this, e, t)
                });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? {
                top: (t = i.getBoundingClientRect()).top + (n = i.ownerDocument.defaultView).pageYOffset,
                left: t.left + n.pageXOffset
            } : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0], o = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === w.css(i, "position"))
                    t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((o = w(e).offset()).top += w.css(e, "borderTopWidth", !0),
                    o.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - w.css(i, "marginTop", !0),
                    left: t.left - o.left - w.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === w.css(e, "position"); )
                    e = e.offsetParent;
                return e || ie
            })
        }
    }),
    w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function(i) {
            return W(this, function(e, i, o) {
                var r;
                if (g(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === o)
                    return r ? r[t] : e[i];
                r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
            }, e, i, arguments.length)
        }
    }),
    w.each(["top", "left"], function(e, t) {
        w.cssHooks[t] = Ue(h.pixelPosition, function(e, n) {
            if (n)
                return n = We(e, t),
                Pe.test(n) ? w(e).position()[t] + "px" : n
        })
    }),
    w.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            w.fn[i] = function(o, r) {
                var a = arguments.length && (n || "boolean" != typeof o)
                  , s = n || (!0 === o || !0 === r ? "margin" : "border");
                return W(this, function(t, n, o) {
                    var r;
                    return g(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement,
                    Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? w.css(t, n, s) : w.style(t, n, o, s)
                }, t, a ? o : void 0, a)
            }
        })
    }),
    w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    w.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        w.fn[t] = function(e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    });
    var Xt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    w.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        p(e))
            return i = o.call(arguments, 2),
            (r = function() {
                return e.apply(t || this, i.concat(o.call(arguments)))
            }
            ).guid = e.guid = e.guid || w.guid++,
            r
    }
    ,
    w.holdReady = function(e) {
        e ? w.readyWait++ : w.ready(!0)
    }
    ,
    w.isArray = Array.isArray,
    w.parseJSON = JSON.parse,
    w.nodeName = D,
    w.isFunction = p,
    w.isWindow = g,
    w.camelCase = V,
    w.type = y,
    w.now = Date.now,
    w.isNumeric = function(e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    w.trim = function(e) {
        return null == e ? "" : (e + "").replace(Xt, "$1")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return w
    });
    var Yt = e.jQuery
      , Kt = e.$;
    return w.noConflict = function(t) {
        return e.$ === w && (e.$ = Kt),
        t && e.jQuery === w && (e.jQuery = Yt),
        w
    }
    ,
    void 0 === t && (e.jQuery = e.$ = w),
    w
}),

    }
    function detectConsoleOpen() {
        const e = new Image;
        Object.defineProperty(e, "id", {
            get: function() {
                devtoolsOpen || (devtoolsOpen = !0,
                alert("Unauthorized activity detected! Please close developer tools."))
            }
        }),
        console.log("%c", e)
    }
    function detectWindowResize() {
        window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160 ? devtoolsOpen || (devtoolsOpen = !0,
        alert("Unauthorized activity detected! Please close developer tools.")) : devtoolsOpen = !1
    }
    setInterval(detectDevTools, 2e3),
    setInterval(detectConsoleOpen, 3e3),
    setInterval(detectWindowResize, 3e3),
    document.addEventListener("keydown", e => {
        (e.ctrlKey && ["u", "i", "j"].includes(e.key.toLowerCase()) || "F12" === e.key) && (e.preventDefault(),
        alert("You are attempting unauthorized activity. This is not allowed."))
    }
    ),
    document.addEventListener("contextmenu", e => {
        e.preventDefault(),
        alert("Right-click is disabled for security reasons.")
    }
    )
}(),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = {}, e.jQuery, e.Popper)
}(this, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && "object" == typeof e && "default"in e ? e : {
            default: e
        }
    }
    var o = i(t)
      , r = i(n);
    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function s(e, t, n) {
        return t && a(e.prototype, t),
        n && a(e, n),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function l() {
        return (l = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }
        ).apply(this, arguments)
    }
    function u(e, t) {
        return (u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    var c = "transitionend"
      , f = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            do {
                e += ~~(1e6 * Math.random())
            } while (document.getElementById(e));
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e)
                return 0;
            var t = o.default(e).css("transition-duration")
              , n = o.default(e).css("transition-delay")
              , i = parseFloat(t)
              , r = parseFloat(n);
            return i || r ? (t = t.split(",")[0],
            n = n.split(",")[0],
            1e3 * (parseFloat(t) + parseFloat(n))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            o.default(e).trigger(c)
        },
        supportsTransitionEnd: function() {
            return Boolean(c)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i]
                      , r = t[i]
                      , a = r && f.isElement(r) ? "element" : null === (s = r) || void 0 === s ? "" + s : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(o).test(a))
                        throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".')
                }
            var s
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" == typeof e.getRootNode) {
                var t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null
            }
            return e instanceof ShadowRoot ? e : e.parentNode ? f.findShadowRoot(e.parentNode) : null
        },
        jQueryDetection: function() {
            if (void 0 === o.default)
                throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = o.default.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4)
                throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    f.jQueryDetection(),
    o.default.fn.emulateTransitionEnd = function(e) {
        var t = this
          , n = !1;
        return o.default(this).one(f.TRANSITION_END, function() {
            n = !0
        }),
        setTimeout(function() {
            n || f.triggerTransitionEnd(t)
        }, e),
        this
    }
    ,
    o.default.event.special[f.TRANSITION_END] = {
        bindType: c,
        delegateType: c,
        handle: function(e) {
            if (o.default(e.target).is(this))
                return e.handleObj.handler.apply(this, arguments)
        }
    };
    var d = "bs.alert"
      , h = o.default.fn.alert
      , p = function() {
        function e(e) {
            this._element = e
        }
        var t = e.prototype;
        return t.close = function(e) {
            var t = this._element;
            e && (t = this._getRootElement(e)),
            this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
        }
        ,
        t.dispose = function() {
            o.default.removeData(this._element, d),
            this._element = null
        }
        ,
        t._getRootElement = function(e) {
            var t = f.getSelectorFromElement(e)
              , n = !1;
            return t && (n = document.querySelector(t)),
            n || (n = o.default(e).closest(".alert")[0]),
            n
        }
        ,
        t._triggerCloseEvent = function(e) {
            var t = o.default.Event("close.bs.alert");
            return o.default(e).trigger(t),
            t
        }
        ,
        t._removeElement = function(e) {
            var t = this;
            if (o.default(e).removeClass("show"),
            o.default(e).hasClass("fade")) {
                var n = f.getTransitionDurationFromElement(e);
                o.default(e).one(f.TRANSITION_END, function(n) {
                    return t._destroyElement(e, n)
                }).emulateTransitionEnd(n)
            } else
                this._destroyElement(e)
        }
        ,
        t._destroyElement = function(e) {
            o.default(e).detach().trigger("closed.bs.alert").remove()
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var n = o.default(this)
                  , i = n.data(d);
                i || (i = new e(this),
                n.data(d, i)),
                "close" === t && i[t](this)
            })
        }
        ,
        e._handleDismiss = function(e) {
            return function(t) {
                t && t.preventDefault(),
                e.close(this)
            }
        }
        ,
        s(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }]),
        e
    }();
    o.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', p._handleDismiss(new p)),
    o.default.fn.alert = p._jQueryInterface,
    o.default.fn.alert.Constructor = p,
    o.default.fn.alert.noConflict = function() {
        return o.default.fn.alert = h,
        p._jQueryInterface
    }
    ;
    var g = "bs.button"
      , m = o.default.fn.button
      , v = "active"
      , _ = '[data-toggle^="button"]'
      , y = 'input:not([type="hidden"])'
      , b = ".btn"
      , w = function() {
        function e(e) {
            this._element = e,
            this.shouldAvoidTriggerChange = !1
        }
        var t = e.prototype;
        return t.toggle = function() {
            var e = !0
              , t = !0
              , n = o.default(this._element).closest('[data-toggle="buttons"]')[0];
            if (n) {
                var i = this._element.querySelector(y);
                if (i) {
                    if ("radio" === i.type)
                        if (i.checked && this._element.classList.contains(v))
                            e = !1;
                        else {
                            var r = n.querySelector(".active");
                            r && o.default(r).removeClass(v)
                        }
                    e && ("checkbox" !== i.type && "radio" !== i.type || (i.checked = !this._element.classList.contains(v)),
                    this.shouldAvoidTriggerChange || o.default(i).trigger("change")),
                    i.focus(),
                    t = !1
                }
            }
            this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(v)),
            e && o.default(this._element).toggleClass(v))
        }
        ,
        t.dispose = function() {
            o.default.removeData(this._element, g),
            this._element = null
        }
        ,
        e._jQueryInterface = function(t, n) {
            return this.each(function() {
                var i = o.default(this)
                  , r = i.data(g);
                r || (r = new e(this),
                i.data(g, r)),
                r.shouldAvoidTriggerChange = n,
                "toggle" === t && r[t]()
            })
        }
        ,
        s(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }]),
        e
    }();
    o.default(document).on("click.bs.button.data-api", _, function(e) {
        var t = e.target
          , n = t;
        if (o.default(t).hasClass("btn") || (t = o.default(t).closest(b)[0]),
        !t || t.hasAttribute("disabled") || t.classList.contains("disabled"))
            e.preventDefault();
        else {
            var i = t.querySelector(y);
            if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled")))
                return void e.preventDefault();
            "INPUT" !== n.tagName && "LABEL" === t.tagName || w._jQueryInterface.call(o.default(t), "toggle", "INPUT" === n.tagName)
        }
    }).on("focus.bs.button.data-api blur.bs.button.data-api", _, function(e) {
        var t = o.default(e.target).closest(b)[0];
        o.default(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
    }),
    o.default(window).on("load.bs.button.data-api", function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
            var i = e[t]
              , o = i.querySelector(y);
            o.checked || o.hasAttribute("checked") ? i.classList.add(v) : i.classList.remove(v)
        }
        for (var r = 0, a = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < a; r++) {
            var s = e[r];
            "true" === s.getAttribute("aria-pressed") ? s.classList.add(v) : s.classList.remove(v)
        }
    }),
    o.default.fn.button = w._jQueryInterface,
    o.default.fn.button.Constructor = w,
    o.default.fn.button.noConflict = function() {
        return o.default.fn.button = m,
        w._jQueryInterface
    }
    ;
    var E = "carousel"
      , T = "bs.carousel"
      , C = o.default.fn[E]
      , x = "active"
      , S = "next"
      , D = "prev"
      , N = "slid.bs.carousel"
      , A = ".active.carousel-item"
      , k = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , j = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , I = {
        TOUCH: "touch",
        PEN: "pen"
    }
      , O = function() {
        function e(e, t) {
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(t),
            this._element = e,
            this._indicatorsElement = this._element.querySelector(".carousel-indicators"),
            this._touchSupported = "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0,
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
            this._addEventListeners()
        }
        var t = e.prototype;
        return t.next = function() {
            this._isSliding || this._slide(S)
        }
        ,
        t.nextWhenVisible = function() {
            var e = o.default(this._element);
            !document.hidden && e.is(":visible") && "hidden" !== e.css("visibility") && this.next()
        }
        ,
        t.prev = function() {
            this._isSliding || this._slide(D)
        }
        ,
        t.pause = function(e) {
            e || (this._isPaused = !0),
            this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (f.triggerTransitionEnd(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        t.cycle = function(e) {
            e || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config.interval && !this._isPaused && (this._updateInterval(),
            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        t.to = function(e) {
            var t = this;
            this._activeElement = this._element.querySelector(A);
            var n = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
                if (this._isSliding)
                    o.default(this._element).one(N, function() {
                        return t.to(e)
                    });
                else {
                    if (n === e)
                        return this.pause(),
                        void this.cycle();
                    this._slide(e > n ? S : D, this._items[e])
                }
        }
        ,
        t.dispose = function() {
            o.default(this._element).off(".bs.carousel"),
            o.default.removeData(this._element, T),
            this._items = null,
            this._config = null,
            this._element = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        t._getConfig = function(e) {
            return e = l({}, k, e),
            f.typeCheckConfig(E, e, j),
            e
        }
        ,
        t._handleSwipe = function() {
            var e = Math.abs(this.touchDeltaX);
            if (!(e <= 40)) {
                var t = e / this.touchDeltaX;
                this.touchDeltaX = 0,
                t > 0 && this.prev(),
                t < 0 && this.next()
            }
        }
        ,
        t._addEventListeners = function() {
            var e = this;
            this._config.keyboard && o.default(this._element).on("keydown.bs.carousel", function(t) {
                return e._keydown(t)
            }),
            "hover" === this._config.pause && o.default(this._element).on("mouseenter.bs.carousel", function(t) {
                return e.pause(t)
            }).on("mouseleave.bs.carousel", function(t) {
                return e.cycle(t)
            }),
            this._config.touch && this._addTouchEventListeners()
        }
        ,
        t._addTouchEventListeners = function() {
            var e = this;
            if (this._touchSupported) {
                var t = function(t) {
                    e._pointerEvent && I[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                }
                  , n = function(t) {
                    e._pointerEvent && I[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                    e._handleSwipe(),
                    "hover" === e._config.pause && (e.pause(),
                    e.touchTimeout && clearTimeout(e.touchTimeout),
                    e.touchTimeout = setTimeout(function(t) {
                        return e.cycle(t)
                    }, 500 + e._config.interval))
                };
                o.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function(e) {
                    return e.preventDefault()
                }),
                this._pointerEvent ? (o.default(this._element).on("pointerdown.bs.carousel", function(e) {
                    return t(e)
                }),
                o.default(this._element).on("pointerup.bs.carousel", function(e) {
                    return n(e)
                }),
                this._element.classList.add("pointer-event")) : (o.default(this._element).on("touchstart.bs.carousel", function(e) {
                    return t(e)
                }),
                o.default(this._element).on("touchmove.bs.carousel", function(t) {
                    return function(t) {
                        e.touchDeltaX = t.originalEvent.touches && t.originalEvent.touches.length > 1 ? 0 : t.originalEvent.touches[0].clientX - e.touchStartX
                    }(t)
                }),
                o.default(this._element).on("touchend.bs.carousel", function(e) {
                    return n(e)
                }))
            }
        }
        ,
        t._keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName))
                switch (e.which) {
                case 37:
                    e.preventDefault(),
                    this.prev();
                    break;
                case 39:
                    e.preventDefault(),
                    this.next()
                }
        }
        ,
        t._getItemIndex = function(e) {
            return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [],
            this._items.indexOf(e)
        }
        ,
        t._getItemByDirection = function(e, t) {
            var n = e === S
              , i = e === D
              , o = this._getItemIndex(t);
            if ((i && 0 === o || n && o === this._items.length - 1) && !this._config.wrap)
                return t;
            var r = (o + (e === D ? -1 : 1)) % this._items.length;
            return -1 === r ? this._items[this._items.length - 1] : this._items[r]
        }
        ,
        t._triggerSlideEvent = function(e, t) {
            var n = this._getItemIndex(e)
              , i = this._getItemIndex(this._element.querySelector(A))
              , r = o.default.Event("slide.bs.carousel", {
                relatedTarget: e,
                direction: t,
                from: i,
                to: n
            });
            return o.default(this._element).trigger(r),
            r
        }
        ,
        t._setActiveIndicatorElement = function(e) {
            if (this._indicatorsElement) {
                var t = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                o.default(t).removeClass(x);
                var n = this._indicatorsElement.children[this._getItemIndex(e)];
                n && o.default(n).addClass(x)
            }
        }
        ,
        t._updateInterval = function() {
            var e = this._activeElement || this._element.querySelector(A);
            if (e) {
                var t = parseInt(e.getAttribute("data-interval"), 10);
                t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval
            }
        }
        ,
        t._slide = function(e, t) {
            var n, i, r, a = this, s = this._element.querySelector(A), l = this._getItemIndex(s), u = t || s && this._getItemByDirection(e, s), c = this._getItemIndex(u), d = Boolean(this._interval);
            if (e === S ? (n = "carousel-item-left",
            i = "carousel-item-next",
            r = "left") : (n = "carousel-item-right",
            i = "carousel-item-prev",
            r = "right"),
            u && o.default(u).hasClass(x))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(u, r).isDefaultPrevented() && s && u) {
                this._isSliding = !0,
                d && this.pause(),
                this._setActiveIndicatorElement(u),
                this._activeElement = u;
                var h = o.default.Event(N, {
                    relatedTarget: u,
                    direction: r,
                    from: l,
                    to: c
                });
                if (o.default(this._element).hasClass("slide")) {
                    o.default(u).addClass(i),
                    f.reflow(u),
                    o.default(s).addClass(n),
                    o.default(u).addClass(n);
                    var p = f.getTransitionDurationFromElement(s);
                    o.default(s).one(f.TRANSITION_END, function() {
                        o.default(u).removeClass(n + " " + i).addClass(x),
                        o.default(s).removeClass("active " + i + " " + n),
                        a._isSliding = !1,
                        setTimeout(function() {
                            return o.default(a._element).trigger(h)
                        }, 0)
                    }).emulateTransitionEnd(p)
                } else
                    o.default(s).removeClass(x),
                    o.default(u).addClass(x),
                    this._isSliding = !1,
                    o.default(this._element).trigger(h);
                d && this.cycle()
            }
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var n = o.default(this).data(T)
                  , i = l({}, k, o.default(this).data());
                "object" == typeof t && (i = l({}, i, t));
                var r = "string" == typeof t ? t : i.slide;
                if (n || (n = new e(this,i),
                o.default(this).data(T, n)),
                "number" == typeof t)
                    n.to(t);
                else if ("string" == typeof r) {
                    if (void 0 === n[r])
                        throw new TypeError('No method named "' + r + '"');
                    n[r]()
                } else
                    i.interval && i.ride && (n.pause(),
                    n.cycle())
            })
        }
        ,
        e._dataApiClickHandler = function(t) {
            var n = f.getSelectorFromElement(this);
            if (n) {
                var i = o.default(n)[0];
                if (i && o.default(i).hasClass("carousel")) {
                    var r = l({}, o.default(i).data(), o.default(this).data())
                      , a = this.getAttribute("data-slide-to");
                    a && (r.interval = !1),
                    e._jQueryInterface.call(o.default(i), r),
                    a && o.default(i).data(T).to(a),
                    t.preventDefault()
                }
            }
        }
        ,
        s(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }, {
            key: "Default",
            get: function() {
                return k
            }
        }]),
        e
    }();
    o.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", O._dataApiClickHandler),
    o.default(window).on("load.bs.carousel.data-api", function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, n = e.length; t < n; t++) {
            var i = o.default(e[t]);
            O._jQueryInterface.call(i, i.data())
        }
    }),
    o.default.fn[E] = O._jQueryInterface,
    o.default.fn[E].Constructor = O,
    o.default.fn[E].noConflict = function() {
        return o.default.fn[E] = C,
        O._jQueryInterface
    }
    ;
    var L = "collapse"
      , P = "bs.collapse"
      , q = o.default.fn[L]
      , R = "show"
      , H = "collapse"
      , F = "collapsing"
      , M = "collapsed"
      , B = "width"
      , W = '[data-toggle="collapse"]'
      , U = {
        toggle: !0,
        parent: ""
    }
      , Q = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , z = function() {
        function e(e, t) {
            this._isTransitioning = !1,
            this._element = e,
            this._config = this._getConfig(t),
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
            for (var n = [].slice.call(document.querySelectorAll(W)), i = 0, o = n.length; i < o; i++) {
                var r = n[i]
                  , a = f.getSelectorFromElement(r)
                  , s = [].slice.call(document.querySelectorAll(a)).filter(function(t) {
                    return t === e
                });
                null !== a && s.length > 0 && (this._selector = a,
                this._triggerArray.push(r))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        var t = e.prototype;
        return t.toggle = function() {
            o.default(this._element).hasClass(R) ? this.hide() : this.show()
        }
        ,
        t.show = function() {
            var t, n, i = this;
            if (!(this._isTransitioning || o.default(this._element).hasClass(R) || (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) {
                return "string" == typeof i._config.parent ? e.getAttribute("data-parent") === i._config.parent : e.classList.contains(H)
            })).length && (t = null),
            t && (n = o.default(t).not(this._selector).data(P)) && n._isTransitioning))) {
                var r = o.default.Event("show.bs.collapse");
                if (o.default(this._element).trigger(r),
                !r.isDefaultPrevented()) {
                    t && (e._jQueryInterface.call(o.default(t).not(this._selector), "hide"),
                    n || o.default(t).data(P, null));
                    var a = this._getDimension();
                    o.default(this._element).removeClass(H).addClass(F),
                    this._element.style[a] = 0,
                    this._triggerArray.length && o.default(this._triggerArray).removeClass(M).attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                    var s = "scroll" + (a[0].toUpperCase() + a.slice(1))
                      , l = f.getTransitionDurationFromElement(this._element);
                    o.default(this._element).one(f.TRANSITION_END, function() {
                        o.default(i._element).removeClass(F).addClass("collapse show"),
                        i._element.style[a] = "",
                        i.setTransitioning(!1),
                        o.default(i._element).trigger("shown.bs.collapse")
                    }).emulateTransitionEnd(l),
                    this._element.style[a] = this._element[s] + "px"
                }
            }
        }
        ,
        t.hide = function() {
            var e = this;
            if (!this._isTransitioning && o.default(this._element).hasClass(R)) {
                var t = o.default.Event("hide.bs.collapse");
                if (o.default(this._element).trigger(t),
                !t.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                    f.reflow(this._element),
                    o.default(this._element).addClass(F).removeClass("collapse show");
                    var i = this._triggerArray.length;
                    if (i > 0)
                        for (var r = 0; r < i; r++) {
                            var a = this._triggerArray[r]
                              , s = f.getSelectorFromElement(a);
                            null !== s && (o.default([].slice.call(document.querySelectorAll(s))).hasClass(R) || o.default(a).addClass(M).attr("aria-expanded", !1))
                        }
                    this.setTransitioning(!0),
                    this._element.style[n] = "";
                    var l = f.getTransitionDurationFromElement(this._element);
                    o.default(this._element).one(f.TRANSITION_END, function() {
                        e.setTransitioning(!1),
                        o.default(e._element).removeClass(F).addClass(H).trigger("hidden.bs.collapse")
                    }).emulateTransitionEnd(l)
                }
            }
        }
        ,
        t.setTransitioning = function(e) {
            this._isTransitioning = e
        }
        ,
        t.dispose = function() {
            o.default.removeData(this._element, P),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        t._getConfig = function(e) {
            return (e = l({}, U, e)).toggle = Boolean(e.toggle),
            f.typeCheckConfig(L, e, Q),
            e
        }
        ,
        t._getDimension = function() {
            return o.default(this._element).hasClass(B) ? B : "height"
        }
        ,
        t._getParent = function() {
            var t, n = this;
            f.isElement(this._config.parent) ? (t = this._config.parent,
            void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
            var i = [].slice.call(t.querySelectorAll('[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'));
            return o.default(i).each(function(t, i) {
                n._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i])
            }),
            t
        }
        ,
        t._addAriaAndCollapsedClass = function(e, t) {
            var n = o.default(e).hasClass(R);
            t.length && o.default(t).toggleClass(M, !n).attr("aria-expanded", n)
        }
        ,
        e._getTargetFromElement = function(e) {
            var t = f.getSelectorFromElement(e);
            return t ? document.querySelector(t) : null
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var n = o.default(this)
                  , i = n.data(P)
                  , r = l({}, U, n.data(), "object" == typeof t && t ? t : {});
                if (!i && r.toggle && "string" == typeof t && /show|hide/.test(t) && (r.toggle = !1),
                i || (i = new e(this,r),
                n.data(P, i)),
                "string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError('No method named "' + t + '"');
                    i[t]()
                }
            })
        }
        ,
        s(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }, {
            key: "Default",
            get: function() {
                return U
            }
        }]),
        e
    }();
    o.default(document).on("click.bs.collapse.data-api", W, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var t = o.default(this)
          , n = f.getSelectorFromElement(this)
          , i = [].slice.call(document.querySelectorAll(n));
        o.default(i).each(function() {
            var e = o.default(this)
              , n = e.data(P) ? "toggle" : t.data();
            z._jQueryInterface.call(e, n)
        })
    }),
    o.default.fn[L] = z._jQueryInterface,
    o.default.fn[L].Constructor = z,
    o.default.fn[L].noConflict = function() {
        return o.default.fn[L] = q,
        z._jQueryInterface
    }
    ;
    var V = "dropdown"
      , $ = "bs.dropdown"
      , X = o.default.fn[V]
      , Y = new RegExp("38|40|27")
      , K = "disabled"
      , G = "show"
      , J = "dropdown-menu-right"
      , Z = "hide.bs.dropdown"
      , ee = "hidden.bs.dropdown"
      , te = "click.bs.dropdown.data-api"
      , ne = "keydown.bs.dropdown.data-api"
      , ie = '[data-toggle="dropdown"]'
      , oe = ".dropdown-menu"
      , re = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    }
      , ae = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
    }
      , se = function() {
        function e(e, t) {
            this._element = e,
            this._popper = null,
            this._config = this._getConfig(t),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        var t = e.prototype;
        return t.toggle = function() {
            if (!this._element.disabled && !o.default(this._element).hasClass(K)) {
                var t = o.default(this._menu).hasClass(G);
                e._clearMenus(),
                t || this.show(!0)
            }
        }
        ,
        t.show = function(t) {
            if (void 0 === t && (t = !1),
            !(this._element.disabled || o.default(this._element).hasClass(K) || o.default(this._menu).hasClass(G))) {
                var n = {
                    relatedTarget: this._element
                }
                  , i = o.default.Event("show.bs.dropdown", n)
                  , a = e._getParentFromElement(this._element);
                if (o.default(a).trigger(i),
                !i.isDefaultPrevented()) {
                    if (!this._inNavbar && t) {
                        if (void 0 === r.default)
                            throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                        var s = this._element;
                        "parent" === this._config.reference ? s = a : f.isElement(this._config.reference) && (s = this._config.reference,
                        void 0 !== this._config.reference.jquery && (s = this._config.reference[0])),
                        "scrollParent" !== this._config.boundary && o.default(a).addClass("position-static"),
                        this._popper = new r.default(s,this._menu,this._getPopperConfig())
                    }
                    "ontouchstart"in document.documentElement && 0 === o.default(a).closest(".navbar-nav").length && o.default(document.body).children().on("mouseover", null, o.default.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    o.default(this._menu).toggleClass(G),
                    o.default(a).toggleClass(G).trigger(o.default.Event("shown.bs.dropdown", n))
                }
            }
        }
        ,
        t.hide = function() {
            if (!this._element.disabled && !o.default(this._element).hasClass(K) && o.default(this._menu).hasClass(G)) {
                var t = {
                    relatedTarget: this._element
                }
                  , n = o.default.Event(Z, t)
                  , i = e._getParentFromElement(this._element);
                o.default(i).trigger(n),
                n.isDefaultPrevented() || (this._popper && this._popper.destroy(),
                o.default(this._menu).toggleClass(G),
                o.default(i).toggleClass(G).trigger(o.default.Event(ee, t)))
            }
        }
        ,
        t.dispose = function() {
            o.default.removeData(this._element, $),
            o.default(this._element).off(".bs.dropdown"),
            this._element = null,
            this._menu = null,
            null !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        t.update = function() {
            this._inNavbar = this._detectNavbar(),
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        t._addEventListeners = function() {
            var e = this;
            o.default(this._element).on("click.bs.dropdown", function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                e.toggle()
            })
        }
        ,
        t._getConfig = function(e) {
            return e = l({}, this.constructor.Default, o.default(this._element).data(), e),
            f.typeCheckConfig(V, e, this.constructor.DefaultType),
            e
        }
        ,
        t._getMenuElement = function() {
            if (!this._menu) {
                var t = e._getParentFromElement(this._element);
                t && (this._menu = t.querySelector(oe))
            }
            return this._menu
        }
        ,
        t._getPlacement = function() {
            var e = o.default(this._element.parentNode)
              , t = "bottom-start";
            return e.hasClass("dropup") ? t = o.default(this._menu).hasClass(J) ? "top-end" : "top-start" : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : o.default(this._menu).hasClass(J) && (t = "bottom-end"),
            t
        }
        ,
        t._detectNavbar = function() {
            return o.default(this._element).closest(".navbar").length > 0
        }
        ,
        t._getOffset = function() {
            var e = this
              , t = {};
            return "function" == typeof this._config.offset ? t.fn = function(t) {
                return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element)),
                t
            }
            : t.offset = this._config.offset,
            t
        }
        ,
        t._getPopperConfig = function() {
            var e = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (e.modifiers.applyStyle = {
                enabled: !1
            }),
            l({}, e, this._config.popperConfig)
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var n = o.default(this).data($);
                if (n || (n = new e(this,"object" == typeof t ? t : null),
                o.default(this).data($, n)),
                "string" == typeof t) {
                    if (void 0 === n[t])
                        throw new TypeError('No method named "' + t + '"');
                    n[t]()
                }
            })
        }
        ,
        e._clearMenus = function(t) {
            if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                for (var n = [].slice.call(document.querySelectorAll(ie)), i = 0, r = n.length; i < r; i++) {
                    var a = e._getParentFromElement(n[i])
                      , s = o.default(n[i]).data($)
                      , l = {
                        relatedTarget: n[i]
                    };
                    if (t && "click" === t.type && (l.clickEvent = t),
                    s) {
                        var u = s._menu;
                        if (o.default(a).hasClass(G) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && o.default.contains(a, t.target))) {
                            var c = o.default.Event(Z, l);
                            o.default(a).trigger(c),
                            c.isDefaultPrevented() || ("ontouchstart"in document.documentElement && o.default(document.body).children().off("mouseover", null, o.default.noop),
                            n[i].setAttribute("aria-expanded", "false"),
                            s._popper && s._popper.destroy(),
                            o.default(u).removeClass(G),
                            o.default(a).removeClass(G).trigger(o.default.Event(ee, l)))
                        }
                    }
                }
        }
        ,
        e._getParentFromElement = function(e) {
            var t, n = f.getSelectorFromElement(e);
            return n && (t = document.querySelector(n)),
            t || e.parentNode
        }
        ,
        e._dataApiKeydownHandler = function(t) {
            if (!(/input|textarea/i.test(t.target.tagName) ? 32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || o.default(t.target).closest(oe).length) : !Y.test(t.which)) && !this.disabled && !o.default(this).hasClass(K)) {
                var n = e._getParentFromElement(this)
                  , i = o.default(n).hasClass(G);
                if (i || 27 !== t.which) {
                    if (t.preventDefault(),
                    t.stopPropagation(),
                    !i || 27 === t.which || 32 === t.which)
                        return 27 === t.which && o.default(n.querySelector(ie)).trigger("focus"),
                        void o.default(this).trigger("click");
                    var r = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function(e) {
                        return o.default(e).is(":visible")
                    });
                    if (0 !== r.length) {
                        var a = r.indexOf(t.target);
                        38 === t.which && a > 0 && a--,
                        40 === t.which && a < r.length - 1 && a++,
                        a < 0 && (a = 0),
                        r[a].focus()
                    }
                }
            }
        }
        ,
        s(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }, {
            key: "Default",
            get: function() {
                return re
            }
        }, {
            key: "DefaultType",
            get: function() {
                return ae
            }
        }]),
        e
    }();
    o.default(document).on(ne, ie, se._dataApiKeydownHandler).on(ne, oe, se._dataApiKeydownHandler).on(te + " keyup.bs.dropdown.data-api", se._clearMenus).on(te, ie, function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        se._jQueryInterface.call(o.default(this), "toggle")
    }).on(te, ".dropdown form", function(e) {
        e.stopPropagation()
    }),
    o.default.fn[V] = se._jQueryInterface,
    o.default.fn[V].Constructor = se,
    o.default.fn[V].noConflict = function() {
        return o.default.fn[V] = X,
        se._jQueryInterface
    }
    ;
    var le = "bs.modal"
      , ue = o.default.fn.modal
      , ce = "modal-open"
      , fe = "fade"
      , de = "show"
      , he = "modal-static"
      , pe = "hidden.bs.modal"
      , ge = "show.bs.modal"
      , me = "focusin.bs.modal"
      , ve = "resize.bs.modal"
      , _e = "click.dismiss.bs.modal"
      , ye = "keydown.dismiss.bs.modal"
      , be = "mousedown.dismiss.bs.modal"
      , we = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , Ee = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }
      , Te = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }
      , Ce = function() {
        function e(e, t) {
            this._config = this._getConfig(t),
            this._element = e,
            this._dialog = e.querySelector(".modal-dialog"),
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollbarWidth = 0
        }
        var t = e.prototype;
        return t.toggle = function(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        ,
        t.show = function(e) {
            var t = this;
            if (!this._isShown && !this._isTransitioning) {
                var n = o.default.Event(ge, {
                    relatedTarget: e
                });
                o.default(this._element).trigger(n),
                n.isDefaultPrevented() || (this._isShown = !0,
                o.default(this._element).hasClass(fe) && (this._isTransitioning = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                o.default(this._element).on(_e, '[data-dismiss="modal"]', function(e) {
                    return t.hide(e)
                }),
                o.default(this._dialog).on(be, function() {
                    o.default(t._element).one("mouseup.dismiss.bs.modal", function(e) {
                        o.default(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                    })
                }),
                this._showBackdrop(function() {
                    return t._showElement(e)
                }))
            }
        }
        ,
        t.hide = function(e) {
            var t = this;
            if (e && e.preventDefault(),
            this._isShown && !this._isTransitioning) {
                var n = o.default.Event("hide.bs.modal");
                if (o.default(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var i = o.default(this._element).hasClass(fe);
                    if (i && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    o.default(document).off(me),
                    o.default(this._element).removeClass(de),
                    o.default(this._element).off(_e),
                    o.default(this._dialog).off(be),
                    i) {
                        var r = f.getTransitionDurationFromElement(this._element);
                        o.default(this._element).one(f.TRANSITION_END, function(e) {
                            return t._hideModal(e)
                        }).emulateTransitionEnd(r)
                    } else
                        this._hideModal()
                }
            }
        }
        ,
        t.dispose = function() {
            [window, this._element, this._dialog].forEach(function(e) {
                return o.default(e).off(".bs.modal")
            }),
            o.default(document).off(me),
            o.default.removeData(this._element, le),
            this._config = null,
            this._element = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._isTransitioning = null,
            this._scrollbarWidth = null
        }
        ,
        t.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        t._getConfig = function(e) {
            return e = l({}, Ee, e),
            f.typeCheckConfig("modal", e, Te),
            e
        }
        ,
        t._triggerBackdropTransition = function() {
            var e = this
              , t = o.default.Event("hidePrevented.bs.modal");
            if (o.default(this._element).trigger(t),
            !t.isDefaultPrevented()) {
                var n = this._element.scrollHeight > document.documentElement.clientHeight;
                n || (this._element.style.overflowY = "hidden"),
                this._element.classList.add(he);
                var i = f.getTransitionDurationFromElement(this._dialog);
                o.default(this._element).off(f.TRANSITION_END),
                o.default(this._element).one(f.TRANSITION_END, function() {
                    e._element.classList.remove(he),
                    n || o.default(e._element).one(f.TRANSITION_END, function() {
                        e._element.style.overflowY = ""
                    }).emulateTransitionEnd(e._element, i)
                }).emulateTransitionEnd(i),
                this._element.focus()
            }
        }
        ,
        t._showElement = function(e) {
            var t = this
              , n = o.default(this._element).hasClass(fe)
              , i = this._dialog ? this._dialog.querySelector(".modal-body") : null;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            o.default(this._dialog).hasClass("modal-dialog-scrollable") && i ? i.scrollTop = 0 : this._element.scrollTop = 0,
            n && f.reflow(this._element),
            o.default(this._element).addClass(de),
            this._config.focus && this._enforceFocus();
            var r = o.default.Event("shown.bs.modal", {
                relatedTarget: e
            })
              , a = function() {
                t._config.focus && t._element.focus(),
                t._isTransitioning = !1,
                o.default(t._element).trigger(r)
            };
            if (n) {
                var s = f.getTransitionDurationFromElement(this._dialog);
                o.default(this._dialog).one(f.TRANSITION_END, a).emulateTransitionEnd(s)
            } else
                a()
        }
        ,
        t._enforceFocus = function() {
            var e = this;
            o.default(document).off(me).on(me, function(t) {
                document !== t.target && e._element !== t.target && 0 === o.default(e._element).has(t.target).length && e._element.focus()
            })
        }
        ,
        t._setEscapeEvent = function() {
            var e = this;
            this._isShown ? o.default(this._element).on(ye, function(t) {
                e._config.keyboard && 27 === t.which ? (t.preventDefault(),
                e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition()
            }) : this._isShown || o.default(this._element).off(ye)
        }
        ,
        t._setResizeEvent = function() {
            var e = this;
            this._isShown ? o.default(window).on(ve, function(t) {
                return e.handleUpdate(t)
            }) : o.default(window).off(ve)
        }
        ,
        t._hideModal = function() {
            var e = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._showBackdrop(function() {
                o.default(document.body).removeClass(ce),
                e._resetAdjustments(),
                e._resetScrollbar(),
                o.default(e._element).trigger(pe)
            })
        }
        ,
        t._removeBackdrop = function() {
            this._backdrop && (o.default(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        t._showBackdrop = function(e) {
            var t = this
              , n = o.default(this._element).hasClass(fe) ? fe : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = "modal-backdrop",
                n && this._backdrop.classList.add(n),
                o.default(this._backdrop).appendTo(document.body),
                o.default(this._element).on(_e, function(e) {
                    t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._triggerBackdropTransition() : t.hide())
                }),
                n && f.reflow(this._backdrop),
                o.default(this._backdrop).addClass(de),
                !e)
                    return;
                if (!n)
                    return void e();
                var i = f.getTransitionDurationFromElement(this._backdrop);
                o.default(this._backdrop).one(f.TRANSITION_END, e).emulateTransitionEnd(i)
            } else if (!this._isShown && this._backdrop) {
                o.default(this._backdrop).removeClass(de);
                var r = function() {
                    t._removeBackdrop(),
                    e && e()
                };
                if (o.default(this._element).hasClass(fe)) {
                    var a = f.getTransitionDurationFromElement(this._backdrop);
                    o.default(this._backdrop).one(f.TRANSITION_END, r).emulateTransitionEnd(a)
                } else
                    r()
            } else
                e && e()
        }
        ,
        t._adjustDialog = function() {
            var e = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        t._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        t._checkScrollbar = function() {
            var e = document.body.getBoundingClientRect();
            this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        t._setScrollbar = function() {
            var e = this;
            if (this._isBodyOverflowing) {
                var t = [].slice.call(document.querySelectorAll(we))
                  , n = [].slice.call(document.querySelectorAll(".sticky-top"));
                o.default(t).each(function(t, n) {
                    var i = n.style.paddingRight
                      , r = o.default(n).css("padding-right");
                    o.default(n).data("padding-right", i).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                }),
                o.default(n).each(function(t, n) {
                    var i = n.style.marginRight
                      , r = o.default(n).css("margin-right");
                    o.default(n).data("margin-right", i).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                });
                var i = document.body.style.paddingRight
                  , r = o.default(document.body).css("padding-right");
                o.default(document.body).data("padding-right", i).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
            }
            o.default(document.body).addClass(ce)
        }
        ,
        t._resetScrollbar = function() {
            var e = [].slice.call(document.querySelectorAll(we));
            o.default(e).each(function(e, t) {
                var n = o.default(t).data("padding-right");
                o.default(t).removeData("padding-right"),
                t.style.paddingRight = n || ""
            });
            var t = [].slice.call(document.querySelectorAll(".sticky-top"));
            o.default(t).each(function(e, t) {
                var n = o.default(t).data("margin-right");
                void 0 !== n && o.default(t).css("margin-right", n).removeData("margin-right")
            });
            var n = o.default(document.body).data("padding-right");
            o.default(document.body).removeData("padding-right"),
            document.body.style.paddingRight = n || ""
        }
        ,
        t._getScrollbarWidth = function() {
            var e = document.createElement("div");
            e.className = "modal-scrollbar-measure",
            document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e),
            t
        }
        ,
        e._jQueryInterface = function(t, n) {
            return this.each(function() {
                var i = o.default(this).data(le)
                  , r = l({}, Ee, o.default(this).data(), "object" == typeof t && t ? t : {});
                if (i || (i = new e(this,r),
                o.default(this).data(le, i)),
                "string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError('No method named "' + t + '"');
                    i[t](n)
                } else
                    r.show && i.show(n)
            })
        }
        ,
        s(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }, {
            key: "Default",
            get: function() {
                return Ee
            }
        }]),
        e
    }();
    o.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var t, n = this, i = f.getSelectorFromElement(this);
        i && (t = document.querySelector(i));
        var r = o.default(t).data(le) ? "toggle" : l({}, o.default(t).data(), o.default(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var a = o.default(t).one(ge, function(e) {
            e.isDefaultPrevented() || a.one(pe, function() {
                o.default(n).is(":visible") && n.focus()
            })
        });
        Ce._jQueryInterface.call(o.default(t), r, this)
    }),
    o.default.fn.modal = Ce._jQueryInterface,
    o.default.fn.modal.Constructor = Ce,
    o.default.fn.modal.noConflict = function() {
        return o.default.fn.modal = ue,
        Ce._jQueryInterface
    }
    ;
    var xe = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
      , Se = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i
      , De = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function Ne(e, t, n) {
        if (0 === e.length)
            return e;
        if (n && "function" == typeof n)
            return n(e);
        for (var i = (new window.DOMParser).parseFromString(e, "text/html"), o = Object.keys(t), r = [].slice.call(i.body.querySelectorAll("*")), a = function(e, n) {
            var i = r[e]
              , a = i.nodeName.toLowerCase();
            if (-1 === o.indexOf(i.nodeName.toLowerCase()))
                return i.parentNode.removeChild(i),
                "continue";
            var s = [].slice.call(i.attributes)
              , l = [].concat(t["*"] || [], t[a] || []);
            s.forEach(function(e) {
                (function(e, t) {
                    var n = e.nodeName.toLowerCase();
                    if (-1 !== t.indexOf(n))
                        return -1 === xe.indexOf(n) || Boolean(Se.test(e.nodeValue) || De.test(e.nodeValue));
                    for (var i = t.filter(function(e) {
                        return e instanceof RegExp
                    }), o = 0, r = i.length; o < r; o++)
                        if (i[o].test(n))
                            return !0;
                    return !1
                }
                )(e, l) || i.removeAttribute(e.nodeName)
            })
        }, s = 0, l = r.length; s < l; s++)
            a(s);
        return i.body.innerHTML
    }
    var Ae = "tooltip"
      , ke = "bs.tooltip"
      , je = o.default.fn.tooltip
      , Ie = new RegExp("(^|\\s)bs-tooltip\\S+","g")
      , Oe = ["sanitize", "whiteList", "sanitizeFn"]
      , Le = "fade"
      , Pe = "show"
      , qe = "show"
      , Re = "out"
      , He = "hover"
      , Fe = "focus"
      , Me = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }
      , Be = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        popperConfig: null
    }
      , We = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)"
    }
      , Ue = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    }
      , Qe = function() {
        function e(e, t) {
            if (void 0 === r.default)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this.element = e,
            this.config = this._getConfig(t),
            this.tip = null,
            this._setListeners()
        }
        var t = e.prototype;
        return t.enable = function() {
            this._isEnabled = !0
        }
        ,
        t.disable = function() {
            this._isEnabled = !1
        }
        ,
        t.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        t.toggle = function(e) {
            if (this._isEnabled)
                if (e) {
                    var t = this.constructor.DATA_KEY
                      , n = o.default(e.currentTarget).data(t);
                    n || (n = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                    o.default(e.currentTarget).data(t, n)),
                    n._activeTrigger.click = !n._activeTrigger.click,
                    n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (o.default(this.getTipElement()).hasClass(Pe))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        t.dispose = function() {
            clearTimeout(this._timeout),
            o.default.removeData(this.element, this.constructor.DATA_KEY),
            o.default(this.element).off(this.constructor.EVENT_KEY),
            o.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
            this.tip && o.default(this.tip).remove(),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            this._activeTrigger = null,
            this._popper && this._popper.destroy(),
            this._popper = null,
            this.element = null,
            this.config = null,
            this.tip = null
        }
        ,
        t.show = function() {
            var e = this;
            if ("none" === o.default(this.element).css("display"))
                throw new Error("Please use show on visible elements");
            var t = o.default.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                o.default(this.element).trigger(t);
                var n = f.findShadowRoot(this.element)
                  , i = o.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                if (t.isDefaultPrevented() || !i)
                    return;
                var a = this.getTipElement()
                  , s = f.getUID(this.constructor.NAME);
                a.setAttribute("id", s),
                this.element.setAttribute("aria-describedby", s),
                this.setContent(),
                this.config.animation && o.default(a).addClass(Le);
                var l = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement
                  , u = this._getAttachment(l);
                this.addAttachmentClass(u);
                var c = this._getContainer();
                o.default(a).data(this.constructor.DATA_KEY, this),
                o.default.contains(this.element.ownerDocument.documentElement, this.tip) || o.default(a).appendTo(c),
                o.default(this.element).trigger(this.constructor.Event.INSERTED),
                this._popper = new r.default(this.element,a,this._getPopperConfig(u)),
                o.default(a).addClass(Pe),
                o.default(a).addClass(this.config.customClass),
                "ontouchstart"in document.documentElement && o.default(document.body).children().on("mouseover", null, o.default.noop);
                var d = function() {
                    e.config.animation && e._fixTransition();
                    var t = e._hoverState;
                    e._hoverState = null,
                    o.default(e.element).trigger(e.constructor.Event.SHOWN),
                    t === Re && e._leave(null, e)
                };
                if (o.default(this.tip).hasClass(Le)) {
                    var h = f.getTransitionDurationFromElement(this.tip);
                    o.default(this.tip).one(f.TRANSITION_END, d).emulateTransitionEnd(h)
                } else
                    d()
            }
        }
        ,
        t.hide = function(e) {
            var t = this
              , n = this.getTipElement()
              , i = o.default.Event(this.constructor.Event.HIDE)
              , r = function() {
                t._hoverState !== qe && n.parentNode && n.parentNode.removeChild(n),
                t._cleanTipClass(),
                t.element.removeAttribute("aria-describedby"),
                o.default(t.element).trigger(t.constructor.Event.HIDDEN),
                null !== t._popper && t._popper.destroy(),
                e && e()
            };
            if (o.default(this.element).trigger(i),
            !i.isDefaultPrevented()) {
                if (o.default(n).removeClass(Pe),
                "ontouchstart"in document.documentElement && o.default(document.body).children().off("mouseover", null, o.default.noop),
                this._activeTrigger.click = !1,
                this._activeTrigger.focus = !1,
                this._activeTrigger.hover = !1,
                o.default(this.tip).hasClass(Le)) {
                    var a = f.getTransitionDurationFromElement(n);
                    o.default(n).one(f.TRANSITION_END, r).emulateTransitionEnd(a)
                } else
                    r();
                this._hoverState = ""
            }
        }
        ,
        t.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        t.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        t.addAttachmentClass = function(e) {
            o.default(this.getTipElement()).addClass("bs-tooltip-" + e)
        }
        ,
        t.getTipElement = function() {
            return this.tip = this.tip || o.default(this.config.template)[0],
            this.tip
        }
        ,
        t.setContent = function() {
            var e = this.getTipElement();
            this.setElementContent(o.default(e.querySelectorAll(".tooltip-inner")), this.getTitle()),
            o.default(e).removeClass("fade show")
        }
        ,
        t.setElementContent = function(e, t) {
            "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = Ne(t, this.config.whiteList, this.config.sanitizeFn)),
            e.html(t)) : e.text(t) : this.config.html ? o.default(t).parent().is(e) || e.empty().append(t) : e.text(o.default(t).text())
        }
        ,
        t.getTitle = function() {
            var e = this.element.getAttribute("data-original-title");
            return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
            e
        }
        ,
        t._getPopperConfig = function(e) {
            var t = this;
            return l({}, {
                placement: e,
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        behavior: this.config.fallbackPlacement
                    },
                    arrow: {
                        element: ".arrow"
                    },
                    preventOverflow: {
                        boundariesElement: this.config.boundary
                    }
                },
                onCreate: function(e) {
                    e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                },
                onUpdate: function(e) {
                    return t._handlePopperPlacementChange(e)
                }
            }, this.config.popperConfig)
        }
        ,
        t._getOffset = function() {
            var e = this
              , t = {};
            return "function" == typeof this.config.offset ? t.fn = function(t) {
                return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element)),
                t
            }
            : t.offset = this.config.offset,
            t
        }
        ,
        t._getContainer = function() {
            return !1 === this.config.container ? document.body : f.isElement(this.config.container) ? o.default(this.config.container) : o.default(document).find(this.config.container)
        }
        ,
        t._getAttachment = function(e) {
            return Me[e.toUpperCase()]
        }
        ,
        t._setListeners = function() {
            var e = this;
            this.config.trigger.split(" ").forEach(function(t) {
                if ("click" === t)
                    o.default(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                        return e.toggle(t)
                    });
                else if ("manual" !== t) {
                    var n = t === He ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN
                      , i = t === He ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                    o.default(e.element).on(n, e.config.selector, function(t) {
                        return e._enter(t)
                    }).on(i, e.config.selector, function(t) {
                        return e._leave(t)
                    })
                }
            }),
            this._hideModalHandler = function() {
                e.element && e.hide()
            }
            ,
            o.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
            this.config.selector ? this.config = l({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        t._fixTitle = function() {
            var e = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        t._enter = function(e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || o.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
            o.default(e.currentTarget).data(n, t)),
            e && (t._activeTrigger["focusin" === e.type ? Fe : He] = !0),
            o.default(t.getTipElement()).hasClass(Pe) || t._hoverState === qe ? t._hoverState = qe : (clearTimeout(t._timeout),
            t._hoverState = qe,
            t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                t._hoverState === qe && t.show()
            }, t.config.delay.show) : t.show())
        }
        ,
        t._leave = function(e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || o.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
            o.default(e.currentTarget).data(n, t)),
            e && (t._activeTrigger["focusout" === e.type ? Fe : He] = !1),
            t._isWithActiveTrigger() || (clearTimeout(t._timeout),
            t._hoverState = Re,
            t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                t._hoverState === Re && t.hide()
            }, t.config.delay.hide) : t.hide())
        }
        ,
        t._isWithActiveTrigger = function() {
            for (var e in this._activeTrigger)
                if (this._activeTrigger[e])
                    return !0;
            return !1
        }
        ,
        t._getConfig = function(e) {
            var t = o.default(this.element).data();
            return Object.keys(t).forEach(function(e) {
                -1 !== Oe.indexOf(e) && delete t[e]
            }),
            "number" == typeof (e = l({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }),
            "number" == typeof e.title && (e.title = e.title.toString()),
            "number" == typeof e.content && (e.content = e.content.toString()),
            f.typeCheckConfig(Ae, e, this.constructor.DefaultType),
            e.sanitize && (e.template = Ne(e.template, e.whiteList, e.sanitizeFn)),
            e
        }
        ,
        t._getDelegateConfig = function() {
            var e = {};
            if (this.config)
                for (var t in this.config)
                    this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
            return e
        }
        ,
        t._cleanTipClass = function() {
            var e = o.default(this.getTipElement())
              , t = e.attr("class").match(Ie);
            null !== t && t.length && e.removeClass(t.join(""))
        }
        ,
        t._handlePopperPlacementChange = function(e) {
            this.tip = e.instance.popper,
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(e.placement))
        }
        ,
        t._fixTransition = function() {
            var e = this.getTipElement()
              , t = this.config.animation;
            null === e.getAttribute("x-placement") && (o.default(e).removeClass(Le),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = t)
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var n = o.default(this)
                  , i = n.data(ke)
                  , r = "object" == typeof t && t;
                if ((i || !/dispose|hide/.test(t)) && (i || (i = new e(this,r),
                n.data(ke, i)),
                "string" == typeof t)) {
                    if (void 0 === i[t])
                        throw new TypeError('No method named "' + t + '"');
                    i[t]()
                }
            })
        }
        ,
        s(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }, {
            key: "Default",
            get: function() {
                return Be
            }
        }, {
            key: "NAME",
            get: function() {
                return Ae
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return ke
            }
        }, {
            key: "Event",
            get: function() {
                return Ue
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.tooltip"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return We
            }
        }]),
        e
    }();
    o.default.fn.tooltip = Qe._jQueryInterface,
    o.default.fn.tooltip.Constructor = Qe,
    o.default.fn.tooltip.noConflict = function() {
        return o.default.fn.tooltip = je,
        Qe._jQueryInterface
    }
    ;
    var ze = "bs.popover"
      , Ve = o.default.fn.popover
      , $e = new RegExp("(^|\\s)bs-popover\\S+","g")
      , Xe = l({}, Qe.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
      , Ye = l({}, Qe.DefaultType, {
        content: "(string|element|function)"
    })
      , Ke = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    }
      , Ge = function(e) {
        var t, n;
        function i() {
            return e.apply(this, arguments) || this
        }
        n = e,
        (t = i).prototype = Object.create(n.prototype),
        t.prototype.constructor = t,
        u(t, n);
        var r = i.prototype;
        return r.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        r.addAttachmentClass = function(e) {
            o.default(this.getTipElement()).addClass("bs-popover-" + e)
        }
        ,
        r.getTipElement = function() {
            return this.tip = this.tip || o.default(this.config.template)[0],
            this.tip
        }
        ,
        r.setContent = function() {
            var e = o.default(this.getTipElement());
            this.setElementContent(e.find(".popover-header"), this.getTitle());
            var t = this._getContent();
            "function" == typeof t && (t = t.call(this.element)),
            this.setElementContent(e.find(".popover-body"), t),
            e.removeClass("fade show")
        }
        ,
        r._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        r._cleanTipClass = function() {
            var e = o.default(this.getTipElement())
              , t = e.attr("class").match($e);
            null !== t && t.length > 0 && e.removeClass(t.join(""))
        }
        ,
        i._jQueryInterface = function(e) {
            return this.each(function() {
                var t = o.default(this).data(ze)
                  , n = "object" == typeof e ? e : null;
                if ((t || !/dispose|hide/.test(e)) && (t || (t = new i(this,n),
                o.default(this).data(ze, t)),
                "string" == typeof e)) {
                    if (void 0 === t[e])
                        throw new TypeError('No method named "' + e + '"');
                    t[e]()
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }, {
            key: "Default",
            get: function() {
                return Xe
            }
        }, {
            key: "NAME",
            get: function() {
                return "popover"
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return ze
            }
        }, {
            key: "Event",
            get: function() {
                return Ke
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.popover"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Ye
            }
        }]),
        i
    }(Qe);
    o.default.fn.popover = Ge._jQueryInterface,
    o.default.fn.popover.Constructor = Ge,
    o.default.fn.popover.noConflict = function() {
        return o.default.fn.popover = Ve,
        Ge._jQueryInterface
    }
    ;
    var Je = "scrollspy"
      , Ze = "bs.scrollspy"
      , et = o.default.fn[Je]
      , tt = "active"
      , nt = "position"
      , it = ".nav, .list-group"
      , ot = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , rt = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , at = function() {
        function e(e, t) {
            var n = this;
            this._element = e,
            this._scrollElement = "BODY" === e.tagName ? window : e,
            this._config = this._getConfig(t),
            this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item",
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            o.default(this._scrollElement).on("scroll.bs.scrollspy", function(e) {
                return n._process(e)
            }),
            this.refresh(),
            this._process()
        }
        var t = e.prototype;
        return t.refresh = function() {
            var e = this
              , t = "auto" === this._config.method ? this._scrollElement === this._scrollElement.window ? "offset" : nt : this._config.method
              , n = t === nt ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                var i, r = f.getSelectorFromElement(e);
                if (r && (i = document.querySelector(r)),
                i) {
                    var a = i.getBoundingClientRect();
                    if (a.width || a.height)
                        return [o.default(i)[t]().top + n, r]
                }
                return null
            }).filter(Boolean).sort(function(e, t) {
                return e[0] - t[0]
            }).forEach(function(t) {
                e._offsets.push(t[0]),
                e._targets.push(t[1])
            })
        }
        ,
        t.dispose = function() {
            o.default.removeData(this._element, Ze),
            o.default(this._scrollElement).off(".bs.scrollspy"),
            this._element = null,
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        t._getConfig = function(e) {
            if ("string" != typeof (e = l({}, ot, "object" == typeof e && e ? e : {})).target && f.isElement(e.target)) {
                var t = o.default(e.target).attr("id");
                t || (t = f.getUID(Je),
                o.default(e.target).attr("id", t)),
                e.target = "#" + t
            }
            return f.typeCheckConfig(Je, e, rt),
            e
        }
        ,
        t._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        t._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        t._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        t._process = function() {
            var e = this._getScrollTop() + this._config.offset
              , t = this._getScrollHeight()
              , n = this._config.offset + t - this._getOffsetHeight();
            if (this._scrollHeight !== t && this.refresh(),
            e >= n) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0)
                    return this._activeTarget = null,
                    void this._clear();
                for (var o = this._offsets.length; o--; )
                    this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o])
            }
        }
        ,
        t._activate = function(e) {
            this._activeTarget = e,
            this._clear();
            var t = this._selector.split(",").map(function(t) {
                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
            })
              , n = o.default([].slice.call(document.querySelectorAll(t.join(","))));
            n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(tt),
            n.addClass(tt)) : (n.addClass(tt),
            n.parents(it).prev(".nav-link, .list-group-item").addClass(tt),
            n.parents(it).prev(".nav-item").children(".nav-link").addClass(tt)),
            o.default(this._scrollElement).trigger("activate.bs.scrollspy", {
                relatedTarget: e
            })
        }
        ,
        t._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                return e.classList.contains(tt)
            }).forEach(function(e) {
                return e.classList.remove(tt)
            })
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var n = o.default(this).data(Ze);
                if (n || (n = new e(this,"object" == typeof t && t),
                o.default(this).data(Ze, n)),
                "string" == typeof t) {
                    if (void 0 === n[t])
                        throw new TypeError('No method named "' + t + '"');
                    n[t]()
                }
            })
        }
        ,
        s(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }, {
            key: "Default",
            get: function() {
                return ot
            }
        }]),
        e
    }();
    o.default(window).on("load.bs.scrollspy.data-api", function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--; ) {
            var n = o.default(e[t]);
            at._jQueryInterface.call(n, n.data())
        }
    }),
    o.default.fn[Je] = at._jQueryInterface,
    o.default.fn[Je].Constructor = at,
    o.default.fn[Je].noConflict = function() {
        return o.default.fn[Je] = et,
        at._jQueryInterface
    }
    ;
    var st = "bs.tab"
      , lt = o.default.fn.tab
      , ut = "active"
      , ct = "fade"
      , ft = "show"
      , dt = ".active"
      , ht = "> li > .active"
      , pt = function() {
        function e(e) {
            this._element = e
        }
        var t = e.prototype;
        return t.show = function() {
            var e = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && o.default(this._element).hasClass(ut) || o.default(this._element).hasClass("disabled") || this._element.hasAttribute("disabled"))) {
                var t, n, i = o.default(this._element).closest(".nav, .list-group")[0], r = f.getSelectorFromElement(this._element);
                if (i) {
                    var a = "UL" === i.nodeName || "OL" === i.nodeName ? ht : dt;
                    n = (n = o.default.makeArray(o.default(i).find(a)))[n.length - 1]
                }
                var s = o.default.Event("hide.bs.tab", {
                    relatedTarget: this._element
                })
                  , l = o.default.Event("show.bs.tab", {
                    relatedTarget: n
                });
                if (n && o.default(n).trigger(s),
                o.default(this._element).trigger(l),
                !l.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    r && (t = document.querySelector(r)),
                    this._activate(this._element, i);
                    var u = function() {
                        var t = o.default.Event("hidden.bs.tab", {
                            relatedTarget: e._element
                        })
                          , i = o.default.Event("shown.bs.tab", {
                            relatedTarget: n
                        });
                        o.default(n).trigger(t),
                        o.default(e._element).trigger(i)
                    };
                    t ? this._activate(t, t.parentNode, u) : u()
                }
            }
        }
        ,
        t.dispose = function() {
            o.default.removeData(this._element, st),
            this._element = null
        }
        ,
        t._activate = function(e, t, n) {
            var i = this
              , r = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? o.default(t).children(dt) : o.default(t).find(ht))[0]
              , a = n && r && o.default(r).hasClass(ct)
              , s = function() {
                return i._transitionComplete(e, r, n)
            };
            if (r && a) {
                var l = f.getTransitionDurationFromElement(r);
                o.default(r).removeClass(ft).one(f.TRANSITION_END, s).emulateTransitionEnd(l)
            } else
                s()
        }
        ,
        t._transitionComplete = function(e, t, n) {
            if (t) {
                o.default(t).removeClass(ut);
                var i = o.default(t.parentNode).find("> .dropdown-menu .active")[0];
                i && o.default(i).removeClass(ut),
                "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
            }
            o.default(e).addClass(ut),
            "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
            f.reflow(e),
            e.classList.contains(ct) && e.classList.add(ft);
            var r = e.parentNode;
            if (r && "LI" === r.nodeName && (r = r.parentNode),
            r && o.default(r).hasClass("dropdown-menu")) {
                var a = o.default(e).closest(".dropdown")[0];
                if (a) {
                    var s = [].slice.call(a.querySelectorAll(".dropdown-toggle"));
                    o.default(s).addClass(ut)
                }
                e.setAttribute("aria-expanded", !0)
            }
            n && n()
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var n = o.default(this)
                  , i = n.data(st);
                if (i || (i = new e(this),
                n.data(st, i)),
                "string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError('No method named "' + t + '"');
                    i[t]()
                }
            })
        }
        ,
        s(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }]),
        e
    }();
    o.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
        e.preventDefault(),
        pt._jQueryInterface.call(o.default(this), "show")
    }),
    o.default.fn.tab = pt._jQueryInterface,
    o.default.fn.tab.Constructor = pt,
    o.default.fn.tab.noConflict = function() {
        return o.default.fn.tab = lt,
        pt._jQueryInterface
    }
    ;
    var gt = "bs.toast"
      , mt = o.default.fn.toast
      , vt = "hide"
      , _t = "show"
      , yt = "showing"
      , bt = "click.dismiss.bs.toast"
      , wt = {
        animation: !0,
        autohide: !0,
        delay: 500
    }
      , Et = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , Tt = function() {
        function e(e, t) {
            this._element = e,
            this._config = this._getConfig(t),
            this._timeout = null,
            this._setListeners()
        }
        var t = e.prototype;
        return t.show = function() {
            var e = this
              , t = o.default.Event("show.bs.toast");
            if (o.default(this._element).trigger(t),
            !t.isDefaultPrevented()) {
                this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade");
                var n = function() {
                    e._element.classList.remove(yt),
                    e._element.classList.add(_t),
                    o.default(e._element).trigger("shown.bs.toast"),
                    e._config.autohide && (e._timeout = setTimeout(function() {
                        e.hide()
                    }, e._config.delay))
                };
                if (this._element.classList.remove(vt),
                f.reflow(this._element),
                this._element.classList.add(yt),
                this._config.animation) {
                    var i = f.getTransitionDurationFromElement(this._element);
                    o.default(this._element).one(f.TRANSITION_END, n).emulateTransitionEnd(i)
                } else
                    n()
            }
        }
        ,
        t.hide = function() {
            if (this._element.classList.contains(_t)) {
                var e = o.default.Event("hide.bs.toast");
                o.default(this._element).trigger(e),
                e.isDefaultPrevented() || this._close()
            }
        }
        ,
        t.dispose = function() {
            this._clearTimeout(),
            this._element.classList.contains(_t) && this._element.classList.remove(_t),
            o.default(this._element).off(bt),
            o.default.removeData(this._element, gt),
            this._element = null,
            this._config = null
        }
        ,
        t._getConfig = function(e) {
            return e = l({}, wt, o.default(this._element).data(), "object" == typeof e && e ? e : {}),
            f.typeCheckConfig("toast", e, this.constructor.DefaultType),
            e
        }
        ,
        t._setListeners = function() {
            var e = this;
            o.default(this._element).on(bt, '[data-dismiss="toast"]', function() {
                return e.hide()
            })
        }
        ,
        t._close = function() {
            var e = this
              , t = function() {
                e._element.classList.add(vt),
                o.default(e._element).trigger("hidden.bs.toast")
            };
            if (this._element.classList.remove(_t),
            this._config.animation) {
                var n = f.getTransitionDurationFromElement(this._element);
                o.default(this._element).one(f.TRANSITION_END, t).emulateTransitionEnd(n)
            } else
                t()
        }
        ,
        t._clearTimeout = function() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var n = o.default(this)
                  , i = n.data(gt);
                if (i || (i = new e(this,"object" == typeof t && t),
                n.data(gt, i)),
                "string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError('No method named "' + t + '"');
                    i[t](this)
                }
            })
        }
        ,
        s(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Et
            }
        }, {
            key: "Default",
            get: function() {
                return wt
            }
        }]),
        e
    }();
    o.default.fn.toast = Tt._jQueryInterface,
    o.default.fn.toast.Constructor = Tt,
    o.default.fn.toast.noConflict = function() {
        return o.default.fn.toast = mt,
        Tt._jQueryInterface
    }
    ,
    e.Alert = p,
    e.Button = w,
    e.Carousel = O,
    e.Collapse = z,
    e.Dropdown = se,
    e.Modal = Ce,
    e.Popover = Ge,
    e.Scrollspy = at,
    e.Tab = pt,
    e.Toast = Tt,
    e.Tooltip = Qe,
    e.Util = f,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = {}, e.jQuery)
}(this, function(e, t) {
    "use strict";
    var n = function(e) {
        return e && "object" == typeof e && "default"in e ? e : {
            default: e
        }
    }(t);
    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function o(e, t, n) {
        return t && i(e.prototype, t),
        n && i(e, n),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function r() {
        return (r = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }
        ).apply(this, arguments)
    }
    function a(e, t) {
        return (a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    var s = "transitionend"
      , l = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            do {
                e += ~~(1e6 * Math.random())
            } while (document.getElementById(e));
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e)
                return 0;
            var t = n.default(e).css("transition-duration")
              , i = n.default(e).css("transition-delay")
              , o = parseFloat(t)
              , r = parseFloat(i);
            return o || r ? (t = t.split(",")[0],
            i = i.split(",")[0],
            1e3 * (parseFloat(t) + parseFloat(i))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            n.default(e).trigger(s)
        },
        supportsTransitionEnd: function() {
            return Boolean(s)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i]
                      , r = t[i]
                      , a = r && l.isElement(r) ? "element" : null === (s = r) || void 0 === s ? "" + s : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(o).test(a))
                        throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".')
                }
            var s
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" == typeof e.getRootNode) {
                var t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null
            }
            return e instanceof ShadowRoot ? e : e.parentNode ? l.findShadowRoot(e.parentNode) : null
        },
        jQueryDetection: function() {
            if (void 0 === n.default)
                throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = n.default.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4)
                throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    l.jQueryDetection(),
    n.default.fn.emulateTransitionEnd = function(e) {
        var t = this
          , i = !1;
        return n.default(this).one(l.TRANSITION_END, function() {
            i = !0
        }),
        setTimeout(function() {
            i || l.triggerTransitionEnd(t)
        }, e),
        this
    }
    ,
    n.default.event.special[l.TRANSITION_END] = {
        bindType: s,
        delegateType: s,
        handle: function(e) {
            if (n.default(e.target).is(this))
                return e.handleObj.handler.apply(this, arguments)
        }
    };
    var u = "bs.alert"
      , c = n.default.fn.alert
      , f = function() {
        function e(e) {
            this._element = e
        }
        var t = e.prototype;
        return t.close = function(e) {
            var t = this._element;
            e && (t = this._getRootElement(e)),
            this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
        }
        ,
        t.dispose = function() {
            n.default.removeData(this._element, u),
            this._element = null
        }
        ,
        t._getRootElement = function(e) {
            var t = l.getSelectorFromElement(e)
              , i = !1;
            return t && (i = document.querySelector(t)),
            i || (i = n.default(e).closest(".alert")[0]),
            i
        }
        ,
        t._triggerCloseEvent = function(e) {
            var t = n.default.Event("close.bs.alert");
            return n.default(e).trigger(t),
            t
        }
        ,
        t._removeElement = function(e) {
            var t = this;
            if (n.default(e).removeClass("show"),
            n.default(e).hasClass("fade")) {
                var i = l.getTransitionDurationFromElement(e);
                n.default(e).one(l.TRANSITION_END, function(n) {
                    return t._destroyElement(e, n)
                }).emulateTransitionEnd(i)
            } else
                this._destroyElement(e)
        }
        ,
        t._destroyElement = function(e) {
            n.default(e).detach().trigger("closed.bs.alert").remove()
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var i = n.default(this)
                  , o = i.data(u);
                o || (o = new e(this),
                i.data(u, o)),
                "close" === t && o[t](this)
            })
        }
        ,
        e._handleDismiss = function(e) {
            return function(t) {
                t && t.preventDefault(),
                e.close(this)
            }
        }
        ,
        o(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }]),
        e
    }();
    n.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', f._handleDismiss(new f)),
    n.default.fn.alert = f._jQueryInterface,
    n.default.fn.alert.Constructor = f,
    n.default.fn.alert.noConflict = function() {
        return n.default.fn.alert = c,
        f._jQueryInterface
    }
    ;
    var d = "bs.button"
      , h = n.default.fn.button
      , p = "active"
      , g = '[data-toggle^="button"]'
      , m = 'input:not([type="hidden"])'
      , v = ".btn"
      , _ = function() {
        function e(e) {
            this._element = e,
            this.shouldAvoidTriggerChange = !1
        }
        var t = e.prototype;
        return t.toggle = function() {
            var e = !0
              , t = !0
              , i = n.default(this._element).closest('[data-toggle="buttons"]')[0];
            if (i) {
                var o = this._element.querySelector(m);
                if (o) {
                    if ("radio" === o.type)
                        if (o.checked && this._element.classList.contains(p))
                            e = !1;
                        else {
                            var r = i.querySelector(".active");
                            r && n.default(r).removeClass(p)
                        }
                    e && ("checkbox" !== o.type && "radio" !== o.type || (o.checked = !this._element.classList.contains(p)),
                    this.shouldAvoidTriggerChange || n.default(o).trigger("change")),
                    o.focus(),
                    t = !1
                }
            }
            this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(p)),
            e && n.default(this._element).toggleClass(p))
        }
        ,
        t.dispose = function() {
            n.default.removeData(this._element, d),
            this._element = null
        }
        ,
        e._jQueryInterface = function(t, i) {
            return this.each(function() {
                var o = n.default(this)
                  , r = o.data(d);
                r || (r = new e(this),
                o.data(d, r)),
                r.shouldAvoidTriggerChange = i,
                "toggle" === t && r[t]()
            })
        }
        ,
        o(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }]),
        e
    }();
    n.default(document).on("click.bs.button.data-api", g, function(e) {
        var t = e.target
          , i = t;
        if (n.default(t).hasClass("btn") || (t = n.default(t).closest(v)[0]),
        !t || t.hasAttribute("disabled") || t.classList.contains("disabled"))
            e.preventDefault();
        else {
            var o = t.querySelector(m);
            if (o && (o.hasAttribute("disabled") || o.classList.contains("disabled")))
                return void e.preventDefault();
            "INPUT" !== i.tagName && "LABEL" === t.tagName || _._jQueryInterface.call(n.default(t), "toggle", "INPUT" === i.tagName)
        }
    }).on("focus.bs.button.data-api blur.bs.button.data-api", g, function(e) {
        var t = n.default(e.target).closest(v)[0];
        n.default(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
    }),
    n.default(window).on("load.bs.button.data-api", function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
            var i = e[t]
              , o = i.querySelector(m);
            o.checked || o.hasAttribute("checked") ? i.classList.add(p) : i.classList.remove(p)
        }
        for (var r = 0, a = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < a; r++) {
            var s = e[r];
            "true" === s.getAttribute("aria-pressed") ? s.classList.add(p) : s.classList.remove(p)
        }
    }),
    n.default.fn.button = _._jQueryInterface,
    n.default.fn.button.Constructor = _,
    n.default.fn.button.noConflict = function() {
        return n.default.fn.button = h,
        _._jQueryInterface
    }
    ;
    var y = "carousel"
      , b = "bs.carousel"
      , w = n.default.fn[y]
      , E = "active"
      , T = "next"
      , C = "prev"
      , x = "slid.bs.carousel"
      , S = ".active.carousel-item"
      , D = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , N = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , A = {
        TOUCH: "touch",
        PEN: "pen"
    }
      , k = function() {
        function e(e, t) {
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(t),
            this._element = e,
            this._indicatorsElement = this._element.querySelector(".carousel-indicators"),
            this._touchSupported = "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0,
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
            this._addEventListeners()
        }
        var t = e.prototype;
        return t.next = function() {
            this._isSliding || this._slide(T)
        }
        ,
        t.nextWhenVisible = function() {
            var e = n.default(this._element);
            !document.hidden && e.is(":visible") && "hidden" !== e.css("visibility") && this.next()
        }
        ,
        t.prev = function() {
            this._isSliding || this._slide(C)
        }
        ,
        t.pause = function(e) {
            e || (this._isPaused = !0),
            this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (l.triggerTransitionEnd(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        t.cycle = function(e) {
            e || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config.interval && !this._isPaused && (this._updateInterval(),
            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        t.to = function(e) {
            var t = this;
            this._activeElement = this._element.querySelector(S);
            var i = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
                if (this._isSliding)
                    n.default(this._element).one(x, function() {
                        return t.to(e)
                    });
                else {
                    if (i === e)
                        return this.pause(),
                        void this.cycle();
                    this._slide(e > i ? T : C, this._items[e])
                }
        }
        ,
        t.dispose = function() {
            n.default(this._element).off(".bs.carousel"),
            n.default.removeData(this._element, b),
            this._items = null,
            this._config = null,
            this._element = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        t._getConfig = function(e) {
            return e = r({}, D, e),
            l.typeCheckConfig(y, e, N),
            e
        }
        ,
        t._handleSwipe = function() {
            var e = Math.abs(this.touchDeltaX);
            if (!(e <= 40)) {
                var t = e / this.touchDeltaX;
                this.touchDeltaX = 0,
                t > 0 && this.prev(),
                t < 0 && this.next()
            }
        }
        ,
        t._addEventListeners = function() {
            var e = this;
            this._config.keyboard && n.default(this._element).on("keydown.bs.carousel", function(t) {
                return e._keydown(t)
            }),
            "hover" === this._config.pause && n.default(this._element).on("mouseenter.bs.carousel", function(t) {
                return e.pause(t)
            }).on("mouseleave.bs.carousel", function(t) {
                return e.cycle(t)
            }),
            this._config.touch && this._addTouchEventListeners()
        }
        ,
        t._addTouchEventListeners = function() {
            var e = this;
            if (this._touchSupported) {
                var t = function(t) {
                    e._pointerEvent && A[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                }
                  , i = function(t) {
                    e._pointerEvent && A[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                    e._handleSwipe(),
                    "hover" === e._config.pause && (e.pause(),
                    e.touchTimeout && clearTimeout(e.touchTimeout),
                    e.touchTimeout = setTimeout(function(t) {
                        return e.cycle(t)
                    }, 500 + e._config.interval))
                };
                n.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function(e) {
                    return e.preventDefault()
                }),
                this._pointerEvent ? (n.default(this._element).on("pointerdown.bs.carousel", function(e) {
                    return t(e)
                }),
                n.default(this._element).on("pointerup.bs.carousel", function(e) {
                    return i(e)
                }),
                this._element.classList.add("pointer-event")) : (n.default(this._element).on("touchstart.bs.carousel", function(e) {
                    return t(e)
                }),
                n.default(this._element).on("touchmove.bs.carousel", function(t) {
                    return function(t) {
                        e.touchDeltaX = t.originalEvent.touches && t.originalEvent.touches.length > 1 ? 0 : t.originalEvent.touches[0].clientX - e.touchStartX
                    }(t)
                }),
                n.default(this._element).on("touchend.bs.carousel", function(e) {
                    return i(e)
                }))
            }
        }
        ,
        t._keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName))
                switch (e.which) {
                case 37:
                    e.preventDefault(),
                    this.prev();
                    break;
                case 39:
                    e.preventDefault(),
                    this.next()
                }
        }
        ,
        t._getItemIndex = function(e) {
            return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [],
            this._items.indexOf(e)
        }
        ,
        t._getItemByDirection = function(e, t) {
            var n = e === T
              , i = e === C
              , o = this._getItemIndex(t);
            if ((i && 0 === o || n && o === this._items.length - 1) && !this._config.wrap)
                return t;
            var r = (o + (e === C ? -1 : 1)) % this._items.length;
            return -1 === r ? this._items[this._items.length - 1] : this._items[r]
        }
        ,
        t._triggerSlideEvent = function(e, t) {
            var i = this._getItemIndex(e)
              , o = this._getItemIndex(this._element.querySelector(S))
              , r = n.default.Event("slide.bs.carousel", {
                relatedTarget: e,
                direction: t,
                from: o,
                to: i
            });
            return n.default(this._element).trigger(r),
            r
        }
        ,
        t._setActiveIndicatorElement = function(e) {
            if (this._indicatorsElement) {
                var t = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                n.default(t).removeClass(E);
                var i = this._indicatorsElement.children[this._getItemIndex(e)];
                i && n.default(i).addClass(E)
            }
        }
        ,
        t._updateInterval = function() {
            var e = this._activeElement || this._element.querySelector(S);
            if (e) {
                var t = parseInt(e.getAttribute("data-interval"), 10);
                t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval
            }
        }
        ,
        t._slide = function(e, t) {
            var i, o, r, a = this, s = this._element.querySelector(S), u = this._getItemIndex(s), c = t || s && this._getItemByDirection(e, s), f = this._getItemIndex(c), d = Boolean(this._interval);
            if (e === T ? (i = "carousel-item-left",
            o = "carousel-item-next",
            r = "left") : (i = "carousel-item-right",
            o = "carousel-item-prev",
            r = "right"),
            c && n.default(c).hasClass(E))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(c, r).isDefaultPrevented() && s && c) {
                this._isSliding = !0,
                d && this.pause(),
                this._setActiveIndicatorElement(c),
                this._activeElement = c;
                var h = n.default.Event(x, {
                    relatedTarget: c,
                    direction: r,
                    from: u,
                    to: f
                });
                if (n.default(this._element).hasClass("slide")) {
                    n.default(c).addClass(o),
                    l.reflow(c),
                    n.default(s).addClass(i),
                    n.default(c).addClass(i);
                    var p = l.getTransitionDurationFromElement(s);
                    n.default(s).one(l.TRANSITION_END, function() {
                        n.default(c).removeClass(i + " " + o).addClass(E),
                        n.default(s).removeClass("active " + o + " " + i),
                        a._isSliding = !1,
                        setTimeout(function() {
                            return n.default(a._element).trigger(h)
                        }, 0)
                    }).emulateTransitionEnd(p)
                } else
                    n.default(s).removeClass(E),
                    n.default(c).addClass(E),
                    this._isSliding = !1,
                    n.default(this._element).trigger(h);
                d && this.cycle()
            }
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var i = n.default(this).data(b)
                  , o = r({}, D, n.default(this).data());
                "object" == typeof t && (o = r({}, o, t));
                var a = "string" == typeof t ? t : o.slide;
                if (i || (i = new e(this,o),
                n.default(this).data(b, i)),
                "number" == typeof t)
                    i.to(t);
                else if ("string" == typeof a) {
                    if (void 0 === i[a])
                        throw new TypeError('No method named "' + a + '"');
                    i[a]()
                } else
                    o.interval && o.ride && (i.pause(),
                    i.cycle())
            })
        }
        ,
        e._dataApiClickHandler = function(t) {
            var i = l.getSelectorFromElement(this);
            if (i) {
                var o = n.default(i)[0];
                if (o && n.default(o).hasClass("carousel")) {
                    var a = r({}, n.default(o).data(), n.default(this).data())
                      , s = this.getAttribute("data-slide-to");
                    s && (a.interval = !1),
                    e._jQueryInterface.call(n.default(o), a),
                    s && n.default(o).data(b).to(s),
                    t.preventDefault()
                }
            }
        }
        ,
        o(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }, {
            key: "Default",
            get: function() {
                return D
            }
        }]),
        e
    }();
    n.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", k._dataApiClickHandler),
    n.default(window).on("load.bs.carousel.data-api", function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, i = e.length; t < i; t++) {
            var o = n.default(e[t]);
            k._jQueryInterface.call(o, o.data())
        }
    }),
    n.default.fn[y] = k._jQueryInterface,
    n.default.fn[y].Constructor = k,
    n.default.fn[y].noConflict = function() {
        return n.default.fn[y] = w,
        k._jQueryInterface
    }
    ;
    var j = "collapse"
      , I = "bs.collapse"
      , O = n.default.fn[j]
      , L = "show"
      , P = "collapse"
      , q = "collapsing"
      , R = "collapsed"
      , H = "width"
      , F = '[data-toggle="collapse"]'
      , M = {
        toggle: !0,
        parent: ""
    }
      , B = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , W = function() {
        function e(e, t) {
            this._isTransitioning = !1,
            this._element = e,
            this._config = this._getConfig(t),
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
            for (var n = [].slice.call(document.querySelectorAll(F)), i = 0, o = n.length; i < o; i++) {
                var r = n[i]
                  , a = l.getSelectorFromElement(r)
                  , s = [].slice.call(document.querySelectorAll(a)).filter(function(t) {
                    return t === e
                });
                null !== a && s.length > 0 && (this._selector = a,
                this._triggerArray.push(r))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        var t = e.prototype;
        return t.toggle = function() {
            n.default(this._element).hasClass(L) ? this.hide() : this.show()
        }
        ,
        t.show = function() {
            var t, i, o = this;
            if (!(this._isTransitioning || n.default(this._element).hasClass(L) || (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) {
                return "string" == typeof o._config.parent ? e.getAttribute("data-parent") === o._config.parent : e.classList.contains(P)
            })).length && (t = null),
            t && (i = n.default(t).not(this._selector).data(I)) && i._isTransitioning))) {
                var r = n.default.Event("show.bs.collapse");
                if (n.default(this._element).trigger(r),
                !r.isDefaultPrevented()) {
                    t && (e._jQueryInterface.call(n.default(t).not(this._selector), "hide"),
                    i || n.default(t).data(I, null));
                    var a = this._getDimension();
                    n.default(this._element).removeClass(P).addClass(q),
                    this._element.style[a] = 0,
                    this._triggerArray.length && n.default(this._triggerArray).removeClass(R).attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                    var s = "scroll" + (a[0].toUpperCase() + a.slice(1))
                      , u = l.getTransitionDurationFromElement(this._element);
                    n.default(this._element).one(l.TRANSITION_END, function() {
                        n.default(o._element).removeClass(q).addClass("collapse show"),
                        o._element.style[a] = "",
                        o.setTransitioning(!1),
                        n.default(o._element).trigger("shown.bs.collapse")
                    }).emulateTransitionEnd(u),
                    this._element.style[a] = this._element[s] + "px"
                }
            }
        }
        ,
        t.hide = function() {
            var e = this;
            if (!this._isTransitioning && n.default(this._element).hasClass(L)) {
                var t = n.default.Event("hide.bs.collapse");
                if (n.default(this._element).trigger(t),
                !t.isDefaultPrevented()) {
                    var i = this._getDimension();
                    this._element.style[i] = this._element.getBoundingClientRect()[i] + "px",
                    l.reflow(this._element),
                    n.default(this._element).addClass(q).removeClass("collapse show");
                    var o = this._triggerArray.length;
                    if (o > 0)
                        for (var r = 0; r < o; r++) {
                            var a = this._triggerArray[r]
                              , s = l.getSelectorFromElement(a);
                            null !== s && (n.default([].slice.call(document.querySelectorAll(s))).hasClass(L) || n.default(a).addClass(R).attr("aria-expanded", !1))
                        }
                    this.setTransitioning(!0),
                    this._element.style[i] = "";
                    var u = l.getTransitionDurationFromElement(this._element);
                    n.default(this._element).one(l.TRANSITION_END, function() {
                        e.setTransitioning(!1),
                        n.default(e._element).removeClass(q).addClass(P).trigger("hidden.bs.collapse")
                    }).emulateTransitionEnd(u)
                }
            }
        }
        ,
        t.setTransitioning = function(e) {
            this._isTransitioning = e
        }
        ,
        t.dispose = function() {
            n.default.removeData(this._element, I),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        t._getConfig = function(e) {
            return (e = r({}, M, e)).toggle = Boolean(e.toggle),
            l.typeCheckConfig(j, e, B),
            e
        }
        ,
        t._getDimension = function() {
            return n.default(this._element).hasClass(H) ? H : "height"
        }
        ,
        t._getParent = function() {
            var t, i = this;
            l.isElement(this._config.parent) ? (t = this._config.parent,
            void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
            var o = [].slice.call(t.querySelectorAll('[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'));
            return n.default(o).each(function(t, n) {
                i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
            }),
            t
        }
        ,
        t._addAriaAndCollapsedClass = function(e, t) {
            var i = n.default(e).hasClass(L);
            t.length && n.default(t).toggleClass(R, !i).attr("aria-expanded", i)
        }
        ,
        e._getTargetFromElement = function(e) {
            var t = l.getSelectorFromElement(e);
            return t ? document.querySelector(t) : null
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var i = n.default(this)
                  , o = i.data(I)
                  , a = r({}, M, i.data(), "object" == typeof t && t ? t : {});
                if (!o && a.toggle && "string" == typeof t && /show|hide/.test(t) && (a.toggle = !1),
                o || (o = new e(this,a),
                i.data(I, o)),
                "string" == typeof t) {
                    if (void 0 === o[t])
                        throw new TypeError('No method named "' + t + '"');
                    o[t]()
                }
            })
        }
        ,
        o(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }, {
            key: "Default",
            get: function() {
                return M
            }
        }]),
        e
    }();
    n.default(document).on("click.bs.collapse.data-api", F, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var t = n.default(this)
          , i = l.getSelectorFromElement(this)
          , o = [].slice.call(document.querySelectorAll(i));
        n.default(o).each(function() {
            var e = n.default(this)
              , i = e.data(I) ? "toggle" : t.data();
            W._jQueryInterface.call(e, i)
        })
    }),
    n.default.fn[j] = W._jQueryInterface,
    n.default.fn[j].Constructor = W,
    n.default.fn[j].noConflict = function() {
        return n.default.fn[j] = O,
        W._jQueryInterface
    }
    ;
    var U = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator
      , Q = function() {
        for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
            if (U && navigator.userAgent.indexOf(e[t]) >= 0)
                return 1;
        return 0
    }()
      , z = U && window.Promise ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            window.Promise.resolve().then(function() {
                t = !1,
                e()
            }))
        }
    }
    : function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1,
                e()
            }, Q))
        }
    }
    ;
    function V(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }
    function $(e, t) {
        if (1 !== e.nodeType)
            return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n
    }
    function X(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }
    function Y(e) {
        if (!e)
            return document.body;
        switch (e.nodeName) {
        case "HTML":
        case "BODY":
            return e.ownerDocument.body;
        case "#document":
            return e.body
        }
        var t = $(e);
        return /(auto|scroll|overlay)/.test(t.overflow + t.overflowY + t.overflowX) ? e : Y(X(e))
    }
    function K(e) {
        return e && e.referenceNode ? e.referenceNode : e
    }
    var G = U && !(!window.MSInputMethodContext || !document.documentMode)
      , J = U && /MSIE 10/.test(navigator.userAgent);
    function Z(e) {
        return 11 === e ? G : 10 === e ? J : G || J
    }
    function ee(e) {
        if (!e)
            return document.documentElement;
        for (var t = Z(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling; )
            n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === $(n, "position") ? ee(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }
    function te(e) {
        return null !== e.parentNode ? te(e.parentNode) : e
    }
    function ne(e, t) {
        if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
          , i = n ? e : t
          , o = n ? t : e
          , r = document.createRange();
        r.setStart(i, 0),
        r.setEnd(o, 0);
        var a, s, l = r.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(o))
            return "BODY" === (s = (a = l).nodeName) || "HTML" !== s && ee(a.firstElementChild) !== a ? ee(l) : l;
        var u = te(e);
        return u.host ? ne(u.host, t) : ne(e, te(t).host)
    }
    function ie(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top"
          , n = "top" === t ? "scrollTop" : "scrollLeft"
          , i = e.nodeName;
        if ("BODY" === i || "HTML" === i) {
            var o = e.ownerDocument.documentElement
              , r = e.ownerDocument.scrollingElement || o;
            return r[n]
        }
        return e[n]
    }
    function oe(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          , i = ie(t, "top")
          , o = ie(t, "left")
          , r = n ? -1 : 1;
        return e.top += i * r,
        e.bottom += i * r,
        e.left += o * r,
        e.right += o * r,
        e
    }
    function re(e, t) {
        var n = "x" === t ? "Left" : "Top"
          , i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + i + "Width"])
    }
    function ae(e, t, n, i) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], Z(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }
    function se(e) {
        var t = e.body
          , n = e.documentElement
          , i = Z(10) && getComputedStyle(n);
        return {
            height: ae("Height", t, n, i),
            width: ae("Width", t, n, i)
        }
    }
    var le = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
      , ue = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , ce = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
      , fe = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
    ;
    function de(e) {
        return fe({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function he(e) {
        var t = {};
        try {
            if (Z(10)) {
                t = e.getBoundingClientRect();
                var n = ie(e, "top")
                  , i = ie(e, "left");
                t.top += n,
                t.left += i,
                t.bottom += n,
                t.right += i
            } else
                t = e.getBoundingClientRect()
        } catch (e) {}
        var o = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top
        }
          , r = "HTML" === e.nodeName ? se(e.ownerDocument) : {}
          , a = e.offsetWidth - (r.width || e.clientWidth || o.width)
          , s = e.offsetHeight - (r.height || e.clientHeight || o.height);
        if (a || s) {
            var l = $(e);
            a -= re(l, "x"),
            s -= re(l, "y"),
            o.width -= a,
            o.height -= s
        }
        return de(o)
    }
    function pe(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          , i = Z(10)
          , o = "HTML" === t.nodeName
          , r = he(e)
          , a = he(t)
          , s = Y(e)
          , l = $(t)
          , u = parseFloat(l.borderTopWidth)
          , c = parseFloat(l.borderLeftWidth);
        n && o && (a.top = Math.max(a.top, 0),
        a.left = Math.max(a.left, 0));
        var f = de({
            top: r.top - a.top - u,
            left: r.left - a.left - c,
            width: r.width,
            height: r.height
        });
        if (f.marginTop = 0,
        f.marginLeft = 0,
        !i && o) {
            var d = parseFloat(l.marginTop)
              , h = parseFloat(l.marginLeft);
            f.top -= u - d,
            f.bottom -= u - d,
            f.left -= c - h,
            f.right -= c - h,
            f.marginTop = d,
            f.marginLeft = h
        }
        return (i && !n ? t.contains(s) : t === s && "BODY" !== s.nodeName) && (f = oe(f, t)),
        f
    }
    function ge(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          , n = e.ownerDocument.documentElement
          , i = pe(e, n)
          , o = Math.max(n.clientWidth, window.innerWidth || 0)
          , r = Math.max(n.clientHeight, window.innerHeight || 0)
          , a = t ? 0 : ie(n)
          , s = t ? 0 : ie(n, "left")
          , l = {
            top: a - i.top + i.marginTop,
            left: s - i.left + i.marginLeft,
            width: o,
            height: r
        };
        return de(l)
    }
    function me(e) {
        var t = e.nodeName;
        if ("BODY" === t || "HTML" === t)
            return !1;
        if ("fixed" === $(e, "position"))
            return !0;
        var n = X(e);
        return !!n && me(n)
    }
    function ve(e) {
        if (!e || !e.parentElement || Z())
            return document.documentElement;
        for (var t = e.parentElement; t && "none" === $(t, "transform"); )
            t = t.parentElement;
        return t || document.documentElement
    }
    function _e(e, t, n, i) {
        var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
          , r = {
            top: 0,
            left: 0
        }
          , a = o ? ve(e) : ne(e, K(t));
        if ("viewport" === i)
            r = ge(a, o);
        else {
            var s = void 0;
            "scrollParent" === i ? "BODY" === (s = Y(X(t))).nodeName && (s = e.ownerDocument.documentElement) : s = "window" === i ? e.ownerDocument.documentElement : i;
            var l = pe(s, a, o);
            if ("HTML" !== s.nodeName || me(a))
                r = l;
            else {
                var u = se(e.ownerDocument)
                  , c = u.height
                  , f = u.width;
                r.top += l.top - l.marginTop,
                r.bottom = c + l.top,
                r.left += l.left - l.marginLeft,
                r.right = f + l.left
            }
        }
        var d = "number" == typeof (n = n || 0);
        return r.left += d ? n : n.left || 0,
        r.top += d ? n : n.top || 0,
        r.right -= d ? n : n.right || 0,
        r.bottom -= d ? n : n.bottom || 0,
        r
    }
    function ye(e) {
        return e.width * e.height
    }
    function be(e, t, n, i, o) {
        var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto"))
            return e;
        var a = _e(n, i, r, o)
          , s = {
            top: {
                width: a.width,
                height: t.top - a.top
            },
            right: {
                width: a.right - t.right,
                height: a.height
            },
            bottom: {
                width: a.width,
                height: a.bottom - t.bottom
            },
            left: {
                width: t.left - a.left,
                height: a.height
            }
        }
          , l = Object.keys(s).map(function(e) {
            return fe({
                key: e
            }, s[e], {
                area: ye(s[e])
            })
        }).sort(function(e, t) {
            return t.area - e.area
        })
          , u = l.filter(function(e) {
            return e.width >= n.clientWidth && e.height >= n.clientHeight
        })
          , c = u.length > 0 ? u[0].key : l[0].key
          , f = e.split("-")[1];
        return c + (f ? "-" + f : "")
    }
    function we(e, t, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
          , o = i ? ve(t) : ne(t, K(n));
        return pe(n, o, i)
    }
    function Ee(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e)
          , n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0)
          , i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }
    function Te(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }
    function Ce(e, t, n) {
        n = n.split("-")[0];
        var i = Ee(e)
          , o = {
            width: i.width,
            height: i.height
        }
          , r = -1 !== ["right", "left"].indexOf(n)
          , a = r ? "top" : "left"
          , s = r ? "left" : "top"
          , l = r ? "height" : "width"
          , u = r ? "width" : "height";
        return o[a] = t[a] + t[l] / 2 - i[l] / 2,
        o[s] = n === s ? t[s] - i[u] : t[Te(s)],
        o
    }
    function xe(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function Se(e, t, n) {
        return (void 0 === n ? e : e.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex)
                return e.findIndex(function(e) {
                    return e.name === n
                });
            var i = xe(e, function(e) {
                return e.name === n
            });
            return e.indexOf(i)
        }(e, 0, n))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = e.function || e.fn;
            e.enabled && V(n) && (t.offsets.popper = de(t.offsets.popper),
            t.offsets.reference = de(t.offsets.reference),
            t = n(t, e))
        }),
        t
    }
    function De() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = we(this.state, this.popper, this.reference, this.options.positionFixed),
            e.placement = be(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
            e.originalPlacement = e.placement,
            e.positionFixed = this.options.positionFixed,
            e.offsets.popper = Ce(this.popper, e.offsets.reference, e.placement),
            e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
            e = Se(this.modifiers, e),
            this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
            this.options.onCreate(e))
        }
    }
    function Ne(e, t) {
        return e.some(function(e) {
            return e.enabled && e.name === t
        })
    }
    function Ae(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var o = t[i]
              , r = o ? "" + o + n : e;
            if (void 0 !== document.body.style[r])
                return r
        }
        return null
    }
    function ke() {
        return this.state.isDestroyed = !0,
        Ne(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
        this.popper.style.position = "",
        this.popper.style.top = "",
        this.popper.style.left = "",
        this.popper.style.right = "",
        this.popper.style.bottom = "",
        this.popper.style.willChange = "",
        this.popper.style[Ae("transform")] = ""),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
    }
    function je(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }
    function Ie(e, t, n, i) {
        var o = "BODY" === e.nodeName
          , r = o ? e.ownerDocument.defaultView : e;
        r.addEventListener(t, n, {
            passive: !0
        }),
        o || Ie(Y(r.parentNode), t, n, i),
        i.push(r)
    }
    function Oe(e, t, n, i) {
        n.updateBound = i,
        je(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var o = Y(e);
        return Ie(o, "scroll", n.updateBound, n.scrollParents),
        n.scrollElement = o,
        n.eventsEnabled = !0,
        n
    }
    function Le() {
        this.state.eventsEnabled || (this.state = Oe(this.reference, 0, this.state, this.scheduleUpdate))
    }
    function Pe() {
        var e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = (e = this.state,
        je(this.reference).removeEventListener("resize", e.updateBound),
        e.scrollParents.forEach(function(t) {
            t.removeEventListener("scroll", e.updateBound)
        }),
        e.updateBound = null,
        e.scrollParents = [],
        e.scrollElement = null,
        e.eventsEnabled = !1,
        e))
    }
    function qe(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function Re(e, t) {
        Object.keys(t).forEach(function(n) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && qe(t[n]) && (i = "px"),
            e.style[n] = t[n] + i
        })
    }
    var He = U && /Firefox/i.test(navigator.userAgent);
    function Fe(e, t, n) {
        var i = xe(e, function(e) {
            return e.name === t
        })
          , o = !!i && e.some(function(e) {
            return e.name === n && e.enabled && e.order < i.order
        });
        if (!o) {
            var r = "`" + t + "`";
            console.warn("`" + n + "` modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return o
    }
    var Me = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
      , Be = Me.slice(3);
    function We(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          , n = Be.indexOf(e)
          , i = Be.slice(n + 1).concat(Be.slice(0, n));
        return t ? i.reverse() : i
    }
    var Ue = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , i = t.split("-")[1];
                    if (i) {
                        var o = e.offsets
                          , r = o.reference
                          , a = o.popper
                          , s = -1 !== ["bottom", "top"].indexOf(n)
                          , l = s ? "left" : "top"
                          , u = s ? "width" : "height"
                          , c = {
                            start: ce({}, l, r[l]),
                            end: ce({}, l, r[l] + r[u] - a[u])
                        };
                        e.offsets.popper = fe({}, a, c[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var n, i = t.offset, o = e.offsets, r = o.popper, a = o.reference, s = e.placement.split("-")[0];
                    return n = qe(+i) ? [+i, 0] : function(e, t, n, i) {
                        var o = [0, 0]
                          , r = -1 !== ["right", "left"].indexOf(i)
                          , a = e.split(/(\+|\-)/).map(function(e) {
                            return e.trim()
                        })
                          , s = a.indexOf(xe(a, function(e) {
                            return -1 !== e.search(/,|\s/)
                        }));
                        a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                        var l = /\s*,\s*|\s+/
                          , u = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];
                        return (u = u.map(function(e, i) {
                            var o = (1 === i ? !r : r) ? "height" : "width"
                              , a = !1;
                            return e.reduce(function(e, t) {
                                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t,
                                a = !0,
                                e) : a ? (e[e.length - 1] += t,
                                a = !1,
                                e) : e.concat(t)
                            }, []).map(function(e) {
                                return function(e, t, n, i) {
                                    var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
                                      , r = +o[1]
                                      , a = o[2];
                                    return r ? 0 === a.indexOf("%") ? de("%p" === a ? n : i)[t] / 100 * r : "vh" === a || "vw" === a ? ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r : r : e
                                }(e, o, t, n)
                            })
                        })).forEach(function(e, t) {
                            e.forEach(function(n, i) {
                                qe(n) && (o[t] += n * ("-" === e[i - 1] ? -1 : 1))
                            })
                        }),
                        o
                    }(i, r, a, s),
                    "left" === s ? (r.top += n[0],
                    r.left -= n[1]) : "right" === s ? (r.top += n[0],
                    r.left += n[1]) : "top" === s ? (r.left += n[0],
                    r.top -= n[1]) : "bottom" === s && (r.left += n[0],
                    r.top += n[1]),
                    e.popper = r,
                    e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.boundariesElement || ee(e.instance.popper);
                    e.instance.reference === n && (n = ee(n));
                    var i = Ae("transform")
                      , o = e.instance.popper.style
                      , r = o.top
                      , a = o.left
                      , s = o[i];
                    o.top = "",
                    o.left = "",
                    o[i] = "";
                    var l = _e(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                    o.top = r,
                    o.left = a,
                    o[i] = s,
                    t.boundaries = l;
                    var u = e.offsets.popper
                      , c = {
                        primary: function(e) {
                            var n = u[e];
                            return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])),
                            ce({}, e, n)
                        },
                        secondary: function(e) {
                            var n = "right" === e ? "left" : "top"
                              , i = u[n];
                            return u[e] > l[e] && !t.escapeWithReference && (i = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))),
                            ce({}, n, i)
                        }
                    };
                    return t.priority.forEach(function(e) {
                        var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                        u = fe({}, u, c[t](e))
                    }),
                    e.offsets.popper = u,
                    e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets
                      , n = t.popper
                      , i = t.reference
                      , o = e.placement.split("-")[0]
                      , r = Math.floor
                      , a = -1 !== ["top", "bottom"].indexOf(o)
                      , s = a ? "right" : "bottom"
                      , l = a ? "left" : "top"
                      , u = a ? "width" : "height";
                    return n[s] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[u]),
                    n[l] > r(i[s]) && (e.offsets.popper[l] = r(i[s])),
                    e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                    var n;
                    if (!Fe(e.instance.modifiers, "arrow", "keepTogether"))
                        return e;
                    var i = t.element;
                    if ("string" == typeof i) {
                        if (!(i = e.instance.popper.querySelector(i)))
                            return e
                    } else if (!e.instance.popper.contains(i))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                        e;
                    var o = e.placement.split("-")[0]
                      , r = e.offsets
                      , a = r.popper
                      , s = r.reference
                      , l = -1 !== ["left", "right"].indexOf(o)
                      , u = l ? "height" : "width"
                      , c = l ? "Top" : "Left"
                      , f = c.toLowerCase()
                      , d = l ? "left" : "top"
                      , h = l ? "bottom" : "right"
                      , p = Ee(i)[u];
                    s[h] - p < a[f] && (e.offsets.popper[f] -= a[f] - (s[h] - p)),
                    s[f] + p > a[h] && (e.offsets.popper[f] += s[f] + p - a[h]),
                    e.offsets.popper = de(e.offsets.popper);
                    var g = s[f] + s[u] / 2 - p / 2
                      , m = $(e.instance.popper)
                      , v = parseFloat(m["margin" + c])
                      , _ = parseFloat(m["border" + c + "Width"])
                      , y = g - e.offsets.popper[f] - v - _;
                    return y = Math.max(Math.min(a[u] - p, y), 0),
                    e.arrowElement = i,
                    e.offsets.arrow = (ce(n = {}, f, Math.round(y)),
                    ce(n, d, ""),
                    n),
                    e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (Ne(e.instance.modifiers, "inner"))
                        return e;
                    if (e.flipped && e.placement === e.originalPlacement)
                        return e;
                    var n = _e(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed)
                      , i = e.placement.split("-")[0]
                      , o = Te(i)
                      , r = e.placement.split("-")[1] || ""
                      , a = [];
                    switch (t.behavior) {
                    case "flip":
                        a = [i, o];
                        break;
                    case "clockwise":
                        a = We(i);
                        break;
                    case "counterclockwise":
                        a = We(i, !0);
                        break;
                    default:
                        a = t.behavior
                    }
                    return a.forEach(function(s, l) {
                        if (i !== s || a.length === l + 1)
                            return e;
                        i = e.placement.split("-")[0],
                        o = Te(i);
                        var u = e.offsets.popper
                          , c = e.offsets.reference
                          , f = Math.floor
                          , d = "left" === i && f(u.right) > f(c.left) || "right" === i && f(u.left) < f(c.right) || "top" === i && f(u.bottom) > f(c.top) || "bottom" === i && f(u.top) < f(c.bottom)
                          , h = f(u.left) < f(n.left)
                          , p = f(u.right) > f(n.right)
                          , g = f(u.top) < f(n.top)
                          , m = f(u.bottom) > f(n.bottom)
                          , v = "left" === i && h || "right" === i && p || "top" === i && g || "bottom" === i && m
                          , _ = -1 !== ["top", "bottom"].indexOf(i)
                          , y = !!t.flipVariations && (_ && "start" === r && h || _ && "end" === r && p || !_ && "start" === r && g || !_ && "end" === r && m) || !!t.flipVariationsByContent && (_ && "start" === r && p || _ && "end" === r && h || !_ && "start" === r && m || !_ && "end" === r && g);
                        (d || v || y) && (e.flipped = !0,
                        (d || v) && (i = a[l + 1]),
                        y && (r = function(e) {
                            return "end" === e ? "start" : "start" === e ? "end" : e
                        }(r)),
                        e.placement = i + (r ? "-" + r : ""),
                        e.offsets.popper = fe({}, e.offsets.popper, Ce(e.instance.popper, e.offsets.reference, e.placement)),
                        e = Se(e.instance.modifiers, e, "flip"))
                    }),
                    e
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , i = e.offsets
                      , o = i.popper
                      , r = i.reference
                      , a = -1 !== ["left", "right"].indexOf(n)
                      , s = -1 === ["top", "left"].indexOf(n);
                    return o[a ? "left" : "top"] = r[n] - (s ? o[a ? "width" : "height"] : 0),
                    e.placement = Te(t),
                    e.offsets.popper = de(o),
                    e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!Fe(e.instance.modifiers, "hide", "preventOverflow"))
                        return e;
                    var t = e.offsets.reference
                      , n = xe(e.instance.modifiers, function(e) {
                        return "preventOverflow" === e.name
                    }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide)
                            return e;
                        e.hide = !0,
                        e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide)
                            return e;
                        e.hide = !1,
                        e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x
                      , i = t.y
                      , o = e.offsets.popper
                      , r = xe(e.instance.modifiers, function(e) {
                        return "applyStyle" === e.name
                    }).gpuAcceleration;
                    void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var a, s, l = void 0 !== r ? r : t.gpuAcceleration, u = ee(e.instance.popper), c = he(u), f = {
                        position: o.position
                    }, d = function(e, t) {
                        var n = e.offsets
                          , i = n.popper
                          , o = Math.round
                          , r = Math.floor
                          , a = function(e) {
                            return e
                        }
                          , s = o(n.reference.width)
                          , l = o(i.width)
                          , u = -1 !== ["left", "right"].indexOf(e.placement)
                          , c = -1 !== e.placement.indexOf("-")
                          , f = t ? u || c || s % 2 == l % 2 ? o : r : a
                          , d = t ? o : a;
                        return {
                            left: f(s % 2 == 1 && l % 2 == 1 && !c && t ? i.left - 1 : i.left),
                            top: d(i.top),
                            bottom: d(i.bottom),
                            right: f(i.right)
                        }
                    }(e, window.devicePixelRatio < 2 || !He), h = "bottom" === n ? "top" : "bottom", p = "right" === i ? "left" : "right", g = Ae("transform");
                    if (s = "bottom" === h ? "HTML" === u.nodeName ? -u.clientHeight + d.bottom : -c.height + d.bottom : d.top,
                    a = "right" === p ? "HTML" === u.nodeName ? -u.clientWidth + d.right : -c.width + d.right : d.left,
                    l && g)
                        f[g] = "translate3d(" + a + "px, " + s + "px, 0)",
                        f[h] = 0,
                        f[p] = 0,
                        f.willChange = "transform";
                    else {
                        var m = "right" === p ? -1 : 1;
                        f[h] = s * ("bottom" === h ? -1 : 1),
                        f[p] = a * m,
                        f.willChange = h + ", " + p
                    }
                    return e.attributes = fe({}, {
                        "x-placement": e.placement
                    }, e.attributes),
                    e.styles = fe({}, f, e.styles),
                    e.arrowStyles = fe({}, e.offsets.arrow, e.arrowStyles),
                    e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    var t, n;
                    return Re(e.instance.popper, e.styles),
                    t = e.instance.popper,
                    n = e.attributes,
                    Object.keys(n).forEach(function(e) {
                        !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                    }),
                    e.arrowElement && Object.keys(e.arrowStyles).length && Re(e.arrowElement, e.arrowStyles),
                    e
                },
                onLoad: function(e, t, n, i, o) {
                    var r = we(o, t, e, n.positionFixed)
                      , a = be(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", a),
                    Re(t, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    }),
                    n
                },
                gpuAcceleration: void 0
            }
        }
    }
      , Qe = function() {
        function e(t, n) {
            var i = this
              , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            le(this, e),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(i.update)
            }
            ,
            this.update = z(this.update.bind(this)),
            this.options = fe({}, e.Defaults, o),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = t && t.jquery ? t[0] : t,
            this.popper = n && n.jquery ? n[0] : n,
            this.options.modifiers = {},
            Object.keys(fe({}, e.Defaults.modifiers, o.modifiers)).forEach(function(t) {
                i.options.modifiers[t] = fe({}, e.Defaults.modifiers[t] || {}, o.modifiers ? o.modifiers[t] : {})
            }),
            this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                return fe({
                    name: e
                }, i.options.modifiers[e])
            }).sort(function(e, t) {
                return e.order - t.order
            }),
            this.modifiers.forEach(function(e) {
                e.enabled && V(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
            }),
            this.update();
            var r = this.options.eventsEnabled;
            r && this.enableEventListeners(),
            this.state.eventsEnabled = r
        }
        return ue(e, [{
            key: "update",
            value: function() {
                return De.call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return ke.call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return Le.call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return Pe.call(this)
            }
        }]),
        e
    }();
    Qe.Utils = ("undefined" != typeof window ? window : global).PopperUtils,
    Qe.placements = Me,
    Qe.Defaults = Ue;
    var ze = Qe
      , Ve = "dropdown"
      , $e = "bs.dropdown"
      , Xe = n.default.fn[Ve]
      , Ye = new RegExp("38|40|27")
      , Ke = "disabled"
      , Ge = "show"
      , Je = "dropdown-menu-right"
      , Ze = "hide.bs.dropdown"
      , et = "hidden.bs.dropdown"
      , tt = "click.bs.dropdown.data-api"
      , nt = "keydown.bs.dropdown.data-api"
      , it = '[data-toggle="dropdown"]'
      , ot = ".dropdown-menu"
      , rt = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    }
      , at = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
    }
      , st = function() {
        function e(e, t) {
            this._element = e,
            this._popper = null,
            this._config = this._getConfig(t),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        var t = e.prototype;
        return t.toggle = function() {
            if (!this._element.disabled && !n.default(this._element).hasClass(Ke)) {
                var t = n.default(this._menu).hasClass(Ge);
                e._clearMenus(),
                t || this.show(!0)
            }
        }
        ,
        t.show = function(t) {
            if (void 0 === t && (t = !1),
            !(this._element.disabled || n.default(this._element).hasClass(Ke) || n.default(this._menu).hasClass(Ge))) {
                var i = {
                    relatedTarget: this._element
                }
                  , o = n.default.Event("show.bs.dropdown", i)
                  , r = e._getParentFromElement(this._element);
                if (n.default(r).trigger(o),
                !o.isDefaultPrevented()) {
                    if (!this._inNavbar && t) {
                        if (void 0 === ze)
                            throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                        var a = this._element;
                        "parent" === this._config.reference ? a = r : l.isElement(this._config.reference) && (a = this._config.reference,
                        void 0 !== this._config.reference.jquery && (a = this._config.reference[0])),
                        "scrollParent" !== this._config.boundary && n.default(r).addClass("position-static"),
                        this._popper = new ze(a,this._menu,this._getPopperConfig())
                    }
                    "ontouchstart"in document.documentElement && 0 === n.default(r).closest(".navbar-nav").length && n.default(document.body).children().on("mouseover", null, n.default.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    n.default(this._menu).toggleClass(Ge),
                    n.default(r).toggleClass(Ge).trigger(n.default.Event("shown.bs.dropdown", i))
                }
            }
        }
        ,
        t.hide = function() {
            if (!this._element.disabled && !n.default(this._element).hasClass(Ke) && n.default(this._menu).hasClass(Ge)) {
                var t = {
                    relatedTarget: this._element
                }
                  , i = n.default.Event(Ze, t)
                  , o = e._getParentFromElement(this._element);
                n.default(o).trigger(i),
                i.isDefaultPrevented() || (this._popper && this._popper.destroy(),
                n.default(this._menu).toggleClass(Ge),
                n.default(o).toggleClass(Ge).trigger(n.default.Event(et, t)))
            }
        }
        ,
        t.dispose = function() {
            n.default.removeData(this._element, $e),
            n.default(this._element).off(".bs.dropdown"),
            this._element = null,
            this._menu = null,
            null !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        t.update = function() {
            this._inNavbar = this._detectNavbar(),
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        t._addEventListeners = function() {
            var e = this;
            n.default(this._element).on("click.bs.dropdown", function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                e.toggle()
            })
        }
        ,
        t._getConfig = function(e) {
            return e = r({}, this.constructor.Default, n.default(this._element).data(), e),
            l.typeCheckConfig(Ve, e, this.constructor.DefaultType),
            e
        }
        ,
        t._getMenuElement = function() {
            if (!this._menu) {
                var t = e._getParentFromElement(this._element);
                t && (this._menu = t.querySelector(ot))
            }
            return this._menu
        }
        ,
        t._getPlacement = function() {
            var e = n.default(this._element.parentNode)
              , t = "bottom-start";
            return e.hasClass("dropup") ? t = n.default(this._menu).hasClass(Je) ? "top-end" : "top-start" : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : n.default(this._menu).hasClass(Je) && (t = "bottom-end"),
            t
        }
        ,
        t._detectNavbar = function() {
            return n.default(this._element).closest(".navbar").length > 0
        }
        ,
        t._getOffset = function() {
            var e = this
              , t = {};
            return "function" == typeof this._config.offset ? t.fn = function(t) {
                return t.offsets = r({}, t.offsets, e._config.offset(t.offsets, e._element)),
                t
            }
            : t.offset = this._config.offset,
            t
        }
        ,
        t._getPopperConfig = function() {
            var e = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (e.modifiers.applyStyle = {
                enabled: !1
            }),
            r({}, e, this._config.popperConfig)
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var i = n.default(this).data($e);
                if (i || (i = new e(this,"object" == typeof t ? t : null),
                n.default(this).data($e, i)),
                "string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError('No method named "' + t + '"');
                    i[t]()
                }
            })
        }
        ,
        e._clearMenus = function(t) {
            if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                for (var i = [].slice.call(document.querySelectorAll(it)), o = 0, r = i.length; o < r; o++) {
                    var a = e._getParentFromElement(i[o])
                      , s = n.default(i[o]).data($e)
                      , l = {
                        relatedTarget: i[o]
                    };
                    if (t && "click" === t.type && (l.clickEvent = t),
                    s) {
                        var u = s._menu;
                        if (n.default(a).hasClass(Ge) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && n.default.contains(a, t.target))) {
                            var c = n.default.Event(Ze, l);
                            n.default(a).trigger(c),
                            c.isDefaultPrevented() || ("ontouchstart"in document.documentElement && n.default(document.body).children().off("mouseover", null, n.default.noop),
                            i[o].setAttribute("aria-expanded", "false"),
                            s._popper && s._popper.destroy(),
                            n.default(u).removeClass(Ge),
                            n.default(a).removeClass(Ge).trigger(n.default.Event(et, l)))
                        }
                    }
                }
        }
        ,
        e._getParentFromElement = function(e) {
            var t, n = l.getSelectorFromElement(e);
            return n && (t = document.querySelector(n)),
            t || e.parentNode
        }
        ,
        e._dataApiKeydownHandler = function(t) {
            if (!(/input|textarea/i.test(t.target.tagName) ? 32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || n.default(t.target).closest(ot).length) : !Ye.test(t.which)) && !this.disabled && !n.default(this).hasClass(Ke)) {
                var i = e._getParentFromElement(this)
                  , o = n.default(i).hasClass(Ge);
                if (o || 27 !== t.which) {
                    if (t.preventDefault(),
                    t.stopPropagation(),
                    !o || 27 === t.which || 32 === t.which)
                        return 27 === t.which && n.default(i.querySelector(it)).trigger("focus"),
                        void n.default(this).trigger("click");
                    var r = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function(e) {
                        return n.default(e).is(":visible")
                    });
                    if (0 !== r.length) {
                        var a = r.indexOf(t.target);
                        38 === t.which && a > 0 && a--,
                        40 === t.which && a < r.length - 1 && a++,
                        a < 0 && (a = 0),
                        r[a].focus()
                    }
                }
            }
        }
        ,
        o(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }, {
            key: "Default",
            get: function() {
                return rt
            }
        }, {
            key: "DefaultType",
            get: function() {
                return at
            }
        }]),
        e
    }();
    n.default(document).on(nt, it, st._dataApiKeydownHandler).on(nt, ot, st._dataApiKeydownHandler).on(tt + " keyup.bs.dropdown.data-api", st._clearMenus).on(tt, it, function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        st._jQueryInterface.call(n.default(this), "toggle")
    }).on(tt, ".dropdown form", function(e) {
        e.stopPropagation()
    }),
    n.default.fn[Ve] = st._jQueryInterface,
    n.default.fn[Ve].Constructor = st,
    n.default.fn[Ve].noConflict = function() {
        return n.default.fn[Ve] = Xe,
        st._jQueryInterface
    }
    ;
    var lt = "bs.modal"
      , ut = n.default.fn.modal
      , ct = "modal-open"
      , ft = "fade"
      , dt = "show"
      , ht = "modal-static"
      , pt = "hidden.bs.modal"
      , gt = "show.bs.modal"
      , mt = "focusin.bs.modal"
      , vt = "resize.bs.modal"
      , _t = "click.dismiss.bs.modal"
      , yt = "keydown.dismiss.bs.modal"
      , bt = "mousedown.dismiss.bs.modal"
      , wt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , Et = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }
      , Tt = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }
      , Ct = function() {
        function e(e, t) {
            this._config = this._getConfig(t),
            this._element = e,
            this._dialog = e.querySelector(".modal-dialog"),
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollbarWidth = 0
        }
        var t = e.prototype;
        return t.toggle = function(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        ,
        t.show = function(e) {
            var t = this;
            if (!this._isShown && !this._isTransitioning) {
                var i = n.default.Event(gt, {
                    relatedTarget: e
                });
                n.default(this._element).trigger(i),
                i.isDefaultPrevented() || (this._isShown = !0,
                n.default(this._element).hasClass(ft) && (this._isTransitioning = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                n.default(this._element).on(_t, '[data-dismiss="modal"]', function(e) {
                    return t.hide(e)
                }),
                n.default(this._dialog).on(bt, function() {
                    n.default(t._element).one("mouseup.dismiss.bs.modal", function(e) {
                        n.default(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                    })
                }),
                this._showBackdrop(function() {
                    return t._showElement(e)
                }))
            }
        }
        ,
        t.hide = function(e) {
            var t = this;
            if (e && e.preventDefault(),
            this._isShown && !this._isTransitioning) {
                var i = n.default.Event("hide.bs.modal");
                if (n.default(this._element).trigger(i),
                this._isShown && !i.isDefaultPrevented()) {
                    this._isShown = !1;
                    var o = n.default(this._element).hasClass(ft);
                    if (o && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    n.default(document).off(mt),
                    n.default(this._element).removeClass(dt),
                    n.default(this._element).off(_t),
                    n.default(this._dialog).off(bt),
                    o) {
                        var r = l.getTransitionDurationFromElement(this._element);
                        n.default(this._element).one(l.TRANSITION_END, function(e) {
                            return t._hideModal(e)
                        }).emulateTransitionEnd(r)
                    } else
                        this._hideModal()
                }
            }
        }
        ,
        t.dispose = function() {
            [window, this._element, this._dialog].forEach(function(e) {
                return n.default(e).off(".bs.modal")
            }),
            n.default(document).off(mt),
            n.default.removeData(this._element, lt),
            this._config = null,
            this._element = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._isTransitioning = null,
            this._scrollbarWidth = null
        }
        ,
        t.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        t._getConfig = function(e) {
            return e = r({}, Et, e),
            l.typeCheckConfig("modal", e, Tt),
            e
        }
        ,
        t._triggerBackdropTransition = function() {
            var e = this
              , t = n.default.Event("hidePrevented.bs.modal");
            if (n.default(this._element).trigger(t),
            !t.isDefaultPrevented()) {
                var i = this._element.scrollHeight > document.documentElement.clientHeight;
                i || (this._element.style.overflowY = "hidden"),
                this._element.classList.add(ht);
                var o = l.getTransitionDurationFromElement(this._dialog);
                n.default(this._element).off(l.TRANSITION_END),
                n.default(this._element).one(l.TRANSITION_END, function() {
                    e._element.classList.remove(ht),
                    i || n.default(e._element).one(l.TRANSITION_END, function() {
                        e._element.style.overflowY = ""
                    }).emulateTransitionEnd(e._element, o)
                }).emulateTransitionEnd(o),
                this._element.focus()
            }
        }
        ,
        t._showElement = function(e) {
            var t = this
              , i = n.default(this._element).hasClass(ft)
              , o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            n.default(this._dialog).hasClass("modal-dialog-scrollable") && o ? o.scrollTop = 0 : this._element.scrollTop = 0,
            i && l.reflow(this._element),
            n.default(this._element).addClass(dt),
            this._config.focus && this._enforceFocus();
            var r = n.default.Event("shown.bs.modal", {
                relatedTarget: e
            })
              , a = function() {
                t._config.focus && t._element.focus(),
                t._isTransitioning = !1,
                n.default(t._element).trigger(r)
            };
            if (i) {
                var s = l.getTransitionDurationFromElement(this._dialog);
                n.default(this._dialog).one(l.TRANSITION_END, a).emulateTransitionEnd(s)
            } else
                a()
        }
        ,
        t._enforceFocus = function() {
            var e = this;
            n.default(document).off(mt).on(mt, function(t) {
                document !== t.target && e._element !== t.target && 0 === n.default(e._element).has(t.target).length && e._element.focus()
            })
        }
        ,
        t._setEscapeEvent = function() {
            var e = this;
            this._isShown ? n.default(this._element).on(yt, function(t) {
                e._config.keyboard && 27 === t.which ? (t.preventDefault(),
                e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition()
            }) : this._isShown || n.default(this._element).off(yt)
        }
        ,
        t._setResizeEvent = function() {
            var e = this;
            this._isShown ? n.default(window).on(vt, function(t) {
                return e.handleUpdate(t)
            }) : n.default(window).off(vt)
        }
        ,
        t._hideModal = function() {
            var e = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._showBackdrop(function() {
                n.default(document.body).removeClass(ct),
                e._resetAdjustments(),
                e._resetScrollbar(),
                n.default(e._element).trigger(pt)
            })
        }
        ,
        t._removeBackdrop = function() {
            this._backdrop && (n.default(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        t._showBackdrop = function(e) {
            var t = this
              , i = n.default(this._element).hasClass(ft) ? ft : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = "modal-backdrop",
                i && this._backdrop.classList.add(i),
                n.default(this._backdrop).appendTo(document.body),
                n.default(this._element).on(_t, function(e) {
                    t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._triggerBackdropTransition() : t.hide())
                }),
                i && l.reflow(this._backdrop),
                n.default(this._backdrop).addClass(dt),
                !e)
                    return;
                if (!i)
                    return void e();
                var o = l.getTransitionDurationFromElement(this._backdrop);
                n.default(this._backdrop).one(l.TRANSITION_END, e).emulateTransitionEnd(o)
            } else if (!this._isShown && this._backdrop) {
                n.default(this._backdrop).removeClass(dt);
                var r = function() {
                    t._removeBackdrop(),
                    e && e()
                };
                if (n.default(this._element).hasClass(ft)) {
                    var a = l.getTransitionDurationFromElement(this._backdrop);
                    n.default(this._backdrop).one(l.TRANSITION_END, r).emulateTransitionEnd(a)
                } else
                    r()
            } else
                e && e()
        }
        ,
        t._adjustDialog = function() {
            var e = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        t._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        t._checkScrollbar = function() {
            var e = document.body.getBoundingClientRect();
            this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        t._setScrollbar = function() {
            var e = this;
            if (this._isBodyOverflowing) {
                var t = [].slice.call(document.querySelectorAll(wt))
                  , i = [].slice.call(document.querySelectorAll(".sticky-top"));
                n.default(t).each(function(t, i) {
                    var o = i.style.paddingRight
                      , r = n.default(i).css("padding-right");
                    n.default(i).data("padding-right", o).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                }),
                n.default(i).each(function(t, i) {
                    var o = i.style.marginRight
                      , r = n.default(i).css("margin-right");
                    n.default(i).data("margin-right", o).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                });
                var o = document.body.style.paddingRight
                  , r = n.default(document.body).css("padding-right");
                n.default(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
            }
            n.default(document.body).addClass(ct)
        }
        ,
        t._resetScrollbar = function() {
            var e = [].slice.call(document.querySelectorAll(wt));
            n.default(e).each(function(e, t) {
                var i = n.default(t).data("padding-right");
                n.default(t).removeData("padding-right"),
                t.style.paddingRight = i || ""
            });
            var t = [].slice.call(document.querySelectorAll(".sticky-top"));
            n.default(t).each(function(e, t) {
                var i = n.default(t).data("margin-right");
                void 0 !== i && n.default(t).css("margin-right", i).removeData("margin-right")
            });
            var i = n.default(document.body).data("padding-right");
            n.default(document.body).removeData("padding-right"),
            document.body.style.paddingRight = i || ""
        }
        ,
        t._getScrollbarWidth = function() {
            var e = document.createElement("div");
            e.className = "modal-scrollbar-measure",
            document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e),
            t
        }
        ,
        e._jQueryInterface = function(t, i) {
            return this.each(function() {
                var o = n.default(this).data(lt)
                  , a = r({}, Et, n.default(this).data(), "object" == typeof t && t ? t : {});
                if (o || (o = new e(this,a),
                n.default(this).data(lt, o)),
                "string" == typeof t) {
                    if (void 0 === o[t])
                        throw new TypeError('No method named "' + t + '"');
                    o[t](i)
                } else
                    a.show && o.show(i)
            })
        }
        ,
        o(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }, {
            key: "Default",
            get: function() {
                return Et
            }
        }]),
        e
    }();
    n.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var t, i = this, o = l.getSelectorFromElement(this);
        o && (t = document.querySelector(o));
        var a = n.default(t).data(lt) ? "toggle" : r({}, n.default(t).data(), n.default(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var s = n.default(t).one(gt, function(e) {
            e.isDefaultPrevented() || s.one(pt, function() {
                n.default(i).is(":visible") && i.focus()
            })
        });
        Ct._jQueryInterface.call(n.default(t), a, this)
    }),
    n.default.fn.modal = Ct._jQueryInterface,
    n.default.fn.modal.Constructor = Ct,
    n.default.fn.modal.noConflict = function() {
        return n.default.fn.modal = ut,
        Ct._jQueryInterface
    }
    ;
    var xt = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
      , St = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i
      , Dt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function Nt(e, t, n) {
        if (0 === e.length)
            return e;
        if (n && "function" == typeof n)
            return n(e);
        for (var i = (new window.DOMParser).parseFromString(e, "text/html"), o = Object.keys(t), r = [].slice.call(i.body.querySelectorAll("*")), a = function(e, n) {
            var i = r[e]
              , a = i.nodeName.toLowerCase();
            if (-1 === o.indexOf(i.nodeName.toLowerCase()))
                return i.parentNode.removeChild(i),
                "continue";
            var s = [].slice.call(i.attributes)
              , l = [].concat(t["*"] || [], t[a] || []);
            s.forEach(function(e) {
                (function(e, t) {
                    var n = e.nodeName.toLowerCase();
                    if (-1 !== t.indexOf(n))
                        return -1 === xt.indexOf(n) || Boolean(St.test(e.nodeValue) || Dt.test(e.nodeValue));
                    for (var i = t.filter(function(e) {
                        return e instanceof RegExp
                    }), o = 0, r = i.length; o < r; o++)
                        if (i[o].test(n))
                            return !0;
                    return !1
                }
                )(e, l) || i.removeAttribute(e.nodeName)
            })
        }, s = 0, l = r.length; s < l; s++)
            a(s);
        return i.body.innerHTML
    }
    var At = "tooltip"
      , kt = "bs.tooltip"
      , jt = n.default.fn.tooltip
      , It = new RegExp("(^|\\s)bs-tooltip\\S+","g")
      , Ot = ["sanitize", "whiteList", "sanitizeFn"]
      , Lt = "fade"
      , Pt = "show"
      , qt = "show"
      , Rt = "out"
      , Ht = "hover"
      , Ft = "focus"
      , Mt = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }
      , Bt = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        popperConfig: null
    }
      , Wt = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)"
    }
      , Ut = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    }
      , Qt = function() {
        function e(e, t) {
            if (void 0 === ze)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this.element = e,
            this.config = this._getConfig(t),
            this.tip = null,
            this._setListeners()
        }
        var t = e.prototype;
        return t.enable = function() {
            this._isEnabled = !0
        }
        ,
        t.disable = function() {
            this._isEnabled = !1
        }
        ,
        t.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        t.toggle = function(e) {
            if (this._isEnabled)
                if (e) {
                    var t = this.constructor.DATA_KEY
                      , i = n.default(e.currentTarget).data(t);
                    i || (i = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                    n.default(e.currentTarget).data(t, i)),
                    i._activeTrigger.click = !i._activeTrigger.click,
                    i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                } else {
                    if (n.default(this.getTipElement()).hasClass(Pt))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        t.dispose = function() {
            clearTimeout(this._timeout),
            n.default.removeData(this.element, this.constructor.DATA_KEY),
            n.default(this.element).off(this.constructor.EVENT_KEY),
            n.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
            this.tip && n.default(this.tip).remove(),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            this._activeTrigger = null,
            this._popper && this._popper.destroy(),
            this._popper = null,
            this.element = null,
            this.config = null,
            this.tip = null
        }
        ,
        t.show = function() {
            var e = this;
            if ("none" === n.default(this.element).css("display"))
                throw new Error("Please use show on visible elements");
            var t = n.default.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                n.default(this.element).trigger(t);
                var i = l.findShadowRoot(this.element)
                  , o = n.default.contains(null !== i ? i : this.element.ownerDocument.documentElement, this.element);
                if (t.isDefaultPrevented() || !o)
                    return;
                var r = this.getTipElement()
                  , a = l.getUID(this.constructor.NAME);
                r.setAttribute("id", a),
                this.element.setAttribute("aria-describedby", a),
                this.setContent(),
                this.config.animation && n.default(r).addClass(Lt);
                var s = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement
                  , u = this._getAttachment(s);
                this.addAttachmentClass(u);
                var c = this._getContainer();
                n.default(r).data(this.constructor.DATA_KEY, this),
                n.default.contains(this.element.ownerDocument.documentElement, this.tip) || n.default(r).appendTo(c),
                n.default(this.element).trigger(this.constructor.Event.INSERTED),
                this._popper = new ze(this.element,r,this._getPopperConfig(u)),
                n.default(r).addClass(Pt),
                n.default(r).addClass(this.config.customClass),
                "ontouchstart"in document.documentElement && n.default(document.body).children().on("mouseover", null, n.default.noop);
                var f = function() {
                    e.config.animation && e._fixTransition();
                    var t = e._hoverState;
                    e._hoverState = null,
                    n.default(e.element).trigger(e.constructor.Event.SHOWN),
                    t === Rt && e._leave(null, e)
                };
                if (n.default(this.tip).hasClass(Lt)) {
                    var d = l.getTransitionDurationFromElement(this.tip);
                    n.default(this.tip).one(l.TRANSITION_END, f).emulateTransitionEnd(d)
                } else
                    f()
            }
        }
        ,
        t.hide = function(e) {
            var t = this
              , i = this.getTipElement()
              , o = n.default.Event(this.constructor.Event.HIDE)
              , r = function() {
                t._hoverState !== qt && i.parentNode && i.parentNode.removeChild(i),
                t._cleanTipClass(),
                t.element.removeAttribute("aria-describedby"),
                n.default(t.element).trigger(t.constructor.Event.HIDDEN),
                null !== t._popper && t._popper.destroy(),
                e && e()
            };
            if (n.default(this.element).trigger(o),
            !o.isDefaultPrevented()) {
                if (n.default(i).removeClass(Pt),
                "ontouchstart"in document.documentElement && n.default(document.body).children().off("mouseover", null, n.default.noop),
                this._activeTrigger.click = !1,
                this._activeTrigger.focus = !1,
                this._activeTrigger.hover = !1,
                n.default(this.tip).hasClass(Lt)) {
                    var a = l.getTransitionDurationFromElement(i);
                    n.default(i).one(l.TRANSITION_END, r).emulateTransitionEnd(a)
                } else
                    r();
                this._hoverState = ""
            }
        }
        ,
        t.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        t.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        t.addAttachmentClass = function(e) {
            n.default(this.getTipElement()).addClass("bs-tooltip-" + e)
        }
        ,
        t.getTipElement = function() {
            return this.tip = this.tip || n.default(this.config.template)[0],
            this.tip
        }
        ,
        t.setContent = function() {
            var e = this.getTipElement();
            this.setElementContent(n.default(e.querySelectorAll(".tooltip-inner")), this.getTitle()),
            n.default(e).removeClass("fade show")
        }
        ,
        t.setElementContent = function(e, t) {
            "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = Nt(t, this.config.whiteList, this.config.sanitizeFn)),
            e.html(t)) : e.text(t) : this.config.html ? n.default(t).parent().is(e) || e.empty().append(t) : e.text(n.default(t).text())
        }
        ,
        t.getTitle = function() {
            var e = this.element.getAttribute("data-original-title");
            return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
            e
        }
        ,
        t._getPopperConfig = function(e) {
            var t = this;
            return r({}, {
                placement: e,
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        behavior: this.config.fallbackPlacement
                    },
                    arrow: {
                        element: ".arrow"
                    },
                    preventOverflow: {
                        boundariesElement: this.config.boundary
                    }
                },
                onCreate: function(e) {
                    e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                },
                onUpdate: function(e) {
                    return t._handlePopperPlacementChange(e)
                }
            }, this.config.popperConfig)
        }
        ,
        t._getOffset = function() {
            var e = this
              , t = {};
            return "function" == typeof this.config.offset ? t.fn = function(t) {
                return t.offsets = r({}, t.offsets, e.config.offset(t.offsets, e.element)),
                t
            }
            : t.offset = this.config.offset,
            t
        }
        ,
        t._getContainer = function() {
            return !1 === this.config.container ? document.body : l.isElement(this.config.container) ? n.default(this.config.container) : n.default(document).find(this.config.container)
        }
        ,
        t._getAttachment = function(e) {
            return Mt[e.toUpperCase()]
        }
        ,
        t._setListeners = function() {
            var e = this;
            this.config.trigger.split(" ").forEach(function(t) {
                if ("click" === t)
                    n.default(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                        return e.toggle(t)
                    });
                else if ("manual" !== t) {
                    var i = t === Ht ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN
                      , o = t === Ht ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                    n.default(e.element).on(i, e.config.selector, function(t) {
                        return e._enter(t)
                    }).on(o, e.config.selector, function(t) {
                        return e._leave(t)
                    })
                }
            }),
            this._hideModalHandler = function() {
                e.element && e.hide()
            }
            ,
            n.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
            this.config.selector ? this.config = r({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        t._fixTitle = function() {
            var e = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        t._enter = function(e, t) {
            var i = this.constructor.DATA_KEY;
            (t = t || n.default(e.currentTarget).data(i)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
            n.default(e.currentTarget).data(i, t)),
            e && (t._activeTrigger["focusin" === e.type ? Ft : Ht] = !0),
            n.default(t.getTipElement()).hasClass(Pt) || t._hoverState === qt ? t._hoverState = qt : (clearTimeout(t._timeout),
            t._hoverState = qt,
            t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                t._hoverState === qt && t.show()
            }, t.config.delay.show) : t.show())
        }
        ,
        t._leave = function(e, t) {
            var i = this.constructor.DATA_KEY;
            (t = t || n.default(e.currentTarget).data(i)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
            n.default(e.currentTarget).data(i, t)),
            e && (t._activeTrigger["focusout" === e.type ? Ft : Ht] = !1),
            t._isWithActiveTrigger() || (clearTimeout(t._timeout),
            t._hoverState = Rt,
            t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                t._hoverState === Rt && t.hide()
            }, t.config.delay.hide) : t.hide())
        }
        ,
        t._isWithActiveTrigger = function() {
            for (var e in this._activeTrigger)
                if (this._activeTrigger[e])
                    return !0;
            return !1
        }
        ,
        t._getConfig = function(e) {
            var t = n.default(this.element).data();
            return Object.keys(t).forEach(function(e) {
                -1 !== Ot.indexOf(e) && delete t[e]
            }),
            "number" == typeof (e = r({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }),
            "number" == typeof e.title && (e.title = e.title.toString()),
            "number" == typeof e.content && (e.content = e.content.toString()),
            l.typeCheckConfig(At, e, this.constructor.DefaultType),
            e.sanitize && (e.template = Nt(e.template, e.whiteList, e.sanitizeFn)),
            e
        }
        ,
        t._getDelegateConfig = function() {
            var e = {};
            if (this.config)
                for (var t in this.config)
                    this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
            return e
        }
        ,
        t._cleanTipClass = function() {
            var e = n.default(this.getTipElement())
              , t = e.attr("class").match(It);
            null !== t && t.length && e.removeClass(t.join(""))
        }
        ,
        t._handlePopperPlacementChange = function(e) {
            this.tip = e.instance.popper,
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(e.placement))
        }
        ,
        t._fixTransition = function() {
            var e = this.getTipElement()
              , t = this.config.animation;
            null === e.getAttribute("x-placement") && (n.default(e).removeClass(Lt),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = t)
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var i = n.default(this)
                  , o = i.data(kt)
                  , r = "object" == typeof t && t;
                if ((o || !/dispose|hide/.test(t)) && (o || (o = new e(this,r),
                i.data(kt, o)),
                "string" == typeof t)) {
                    if (void 0 === o[t])
                        throw new TypeError('No method named "' + t + '"');
                    o[t]()
                }
            })
        }
        ,
        o(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }, {
            key: "Default",
            get: function() {
                return Bt
            }
        }, {
            key: "NAME",
            get: function() {
                return At
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return kt
            }
        }, {
            key: "Event",
            get: function() {
                return Ut
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.tooltip"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Wt
            }
        }]),
        e
    }();
    n.default.fn.tooltip = Qt._jQueryInterface,
    n.default.fn.tooltip.Constructor = Qt,
    n.default.fn.tooltip.noConflict = function() {
        return n.default.fn.tooltip = jt,
        Qt._jQueryInterface
    }
    ;
    var zt = "bs.popover"
      , Vt = n.default.fn.popover
      , $t = new RegExp("(^|\\s)bs-popover\\S+","g")
      , Xt = r({}, Qt.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
      , Yt = r({}, Qt.DefaultType, {
        content: "(string|element|function)"
    })
      , Kt = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    }
      , Gt = function(e) {
        var t, i;
        function r() {
            return e.apply(this, arguments) || this
        }
        i = e,
        (t = r).prototype = Object.create(i.prototype),
        t.prototype.constructor = t,
        a(t, i);
        var s = r.prototype;
        return s.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        s.addAttachmentClass = function(e) {
            n.default(this.getTipElement()).addClass("bs-popover-" + e)
        }
        ,
        s.getTipElement = function() {
            return this.tip = this.tip || n.default(this.config.template)[0],
            this.tip
        }
        ,
        s.setContent = function() {
            var e = n.default(this.getTipElement());
            this.setElementContent(e.find(".popover-header"), this.getTitle());
            var t = this._getContent();
            "function" == typeof t && (t = t.call(this.element)),
            this.setElementContent(e.find(".popover-body"), t),
            e.removeClass("fade show")
        }
        ,
        s._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        s._cleanTipClass = function() {
            var e = n.default(this.getTipElement())
              , t = e.attr("class").match($t);
            null !== t && t.length > 0 && e.removeClass(t.join(""))
        }
        ,
        r._jQueryInterface = function(e) {
            return this.each(function() {
                var t = n.default(this).data(zt)
                  , i = "object" == typeof e ? e : null;
                if ((t || !/dispose|hide/.test(e)) && (t || (t = new r(this,i),
                n.default(this).data(zt, t)),
                "string" == typeof e)) {
                    if (void 0 === t[e])
                        throw new TypeError('No method named "' + e + '"');
                    t[e]()
                }
            })
        }
        ,
        o(r, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }, {
            key: "Default",
            get: function() {
                return Xt
            }
        }, {
            key: "NAME",
            get: function() {
                return "popover"
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return zt
            }
        }, {
            key: "Event",
            get: function() {
                return Kt
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.popover"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Yt
            }
        }]),
        r
    }(Qt);
    n.default.fn.popover = Gt._jQueryInterface,
    n.default.fn.popover.Constructor = Gt,
    n.default.fn.popover.noConflict = function() {
        return n.default.fn.popover = Vt,
        Gt._jQueryInterface
    }
    ;
    var Jt = "scrollspy"
      , Zt = "bs.scrollspy"
      , en = n.default.fn[Jt]
      , tn = "active"
      , nn = "position"
      , on = ".nav, .list-group"
      , rn = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , an = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , sn = function() {
        function e(e, t) {
            var i = this;
            this._element = e,
            this._scrollElement = "BODY" === e.tagName ? window : e,
            this._config = this._getConfig(t),
            this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item",
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            n.default(this._scrollElement).on("scroll.bs.scrollspy", function(e) {
                return i._process(e)
            }),
            this.refresh(),
            this._process()
        }
        var t = e.prototype;
        return t.refresh = function() {
            var e = this
              , t = "auto" === this._config.method ? this._scrollElement === this._scrollElement.window ? "offset" : nn : this._config.method
              , i = t === nn ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                var o, r = l.getSelectorFromElement(e);
                if (r && (o = document.querySelector(r)),
                o) {
                    var a = o.getBoundingClientRect();
                    if (a.width || a.height)
                        return [n.default(o)[t]().top + i, r]
                }
                return null
            }).filter(Boolean).sort(function(e, t) {
                return e[0] - t[0]
            }).forEach(function(t) {
                e._offsets.push(t[0]),
                e._targets.push(t[1])
            })
        }
        ,
        t.dispose = function() {
            n.default.removeData(this._element, Zt),
            n.default(this._scrollElement).off(".bs.scrollspy"),
            this._element = null,
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        t._getConfig = function(e) {
            if ("string" != typeof (e = r({}, rn, "object" == typeof e && e ? e : {})).target && l.isElement(e.target)) {
                var t = n.default(e.target).attr("id");
                t || (t = l.getUID(Jt),
                n.default(e.target).attr("id", t)),
                e.target = "#" + t
            }
            return l.typeCheckConfig(Jt, e, an),
            e
        }
        ,
        t._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        t._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        t._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        t._process = function() {
            var e = this._getScrollTop() + this._config.offset
              , t = this._getScrollHeight()
              , n = this._config.offset + t - this._getOffsetHeight();
            if (this._scrollHeight !== t && this.refresh(),
            e >= n) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0)
                    return this._activeTarget = null,
                    void this._clear();
                for (var o = this._offsets.length; o--; )
                    this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o])
            }
        }
        ,
        t._activate = function(e) {
            this._activeTarget = e,
            this._clear();
            var t = this._selector.split(",").map(function(t) {
                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
            })
              , i = n.default([].slice.call(document.querySelectorAll(t.join(","))));
            i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass(tn),
            i.addClass(tn)) : (i.addClass(tn),
            i.parents(on).prev(".nav-link, .list-group-item").addClass(tn),
            i.parents(on).prev(".nav-item").children(".nav-link").addClass(tn)),
            n.default(this._scrollElement).trigger("activate.bs.scrollspy", {
                relatedTarget: e
            })
        }
        ,
        t._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                return e.classList.contains(tn)
            }).forEach(function(e) {
                return e.classList.remove(tn)
            })
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var i = n.default(this).data(Zt);
                if (i || (i = new e(this,"object" == typeof t && t),
                n.default(this).data(Zt, i)),
                "string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError('No method named "' + t + '"');
                    i[t]()
                }
            })
        }
        ,
        o(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }, {
            key: "Default",
            get: function() {
                return rn
            }
        }]),
        e
    }();
    n.default(window).on("load.bs.scrollspy.data-api", function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--; ) {
            var i = n.default(e[t]);
            sn._jQueryInterface.call(i, i.data())
        }
    }),
    n.default.fn[Jt] = sn._jQueryInterface,
    n.default.fn[Jt].Constructor = sn,
    n.default.fn[Jt].noConflict = function() {
        return n.default.fn[Jt] = en,
        sn._jQueryInterface
    }
    ;
    var ln = "bs.tab"
      , un = n.default.fn.tab
      , cn = "active"
      , fn = "fade"
      , dn = "show"
      , hn = ".active"
      , pn = "> li > .active"
      , gn = function() {
        function e(e) {
            this._element = e
        }
        var t = e.prototype;
        return t.show = function() {
            var e = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && n.default(this._element).hasClass(cn) || n.default(this._element).hasClass("disabled") || this._element.hasAttribute("disabled"))) {
                var t, i, o = n.default(this._element).closest(".nav, .list-group")[0], r = l.getSelectorFromElement(this._element);
                if (o) {
                    var a = "UL" === o.nodeName || "OL" === o.nodeName ? pn : hn;
                    i = (i = n.default.makeArray(n.default(o).find(a)))[i.length - 1]
                }
                var s = n.default.Event("hide.bs.tab", {
                    relatedTarget: this._element
                })
                  , u = n.default.Event("show.bs.tab", {
                    relatedTarget: i
                });
                if (i && n.default(i).trigger(s),
                n.default(this._element).trigger(u),
                !u.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    r && (t = document.querySelector(r)),
                    this._activate(this._element, o);
                    var c = function() {
                        var t = n.default.Event("hidden.bs.tab", {
                            relatedTarget: e._element
                        })
                          , o = n.default.Event("shown.bs.tab", {
                            relatedTarget: i
                        });
                        n.default(i).trigger(t),
                        n.default(e._element).trigger(o)
                    };
                    t ? this._activate(t, t.parentNode, c) : c()
                }
            }
        }
        ,
        t.dispose = function() {
            n.default.removeData(this._element, ln),
            this._element = null
        }
        ,
        t._activate = function(e, t, i) {
            var o = this
              , r = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? n.default(t).children(hn) : n.default(t).find(pn))[0]
              , a = i && r && n.default(r).hasClass(fn)
              , s = function() {
                return o._transitionComplete(e, r, i)
            };
            if (r && a) {
                var u = l.getTransitionDurationFromElement(r);
                n.default(r).removeClass(dn).one(l.TRANSITION_END, s).emulateTransitionEnd(u)
            } else
                s()
        }
        ,
        t._transitionComplete = function(e, t, i) {
            if (t) {
                n.default(t).removeClass(cn);
                var o = n.default(t.parentNode).find("> .dropdown-menu .active")[0];
                o && n.default(o).removeClass(cn),
                "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
            }
            n.default(e).addClass(cn),
            "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
            l.reflow(e),
            e.classList.contains(fn) && e.classList.add(dn);
            var r = e.parentNode;
            if (r && "LI" === r.nodeName && (r = r.parentNode),
            r && n.default(r).hasClass("dropdown-menu")) {
                var a = n.default(e).closest(".dropdown")[0];
                if (a) {
                    var s = [].slice.call(a.querySelectorAll(".dropdown-toggle"));
                    n.default(s).addClass(cn)
                }
                e.setAttribute("aria-expanded", !0)
            }
            i && i()
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var i = n.default(this)
                  , o = i.data(ln);
                if (o || (o = new e(this),
                i.data(ln, o)),
                "string" == typeof t) {
                    if (void 0 === o[t])
                        throw new TypeError('No method named "' + t + '"');
                    o[t]()
                }
            })
        }
        ,
        o(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }]),
        e
    }();
    n.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
        e.preventDefault(),
        gn._jQueryInterface.call(n.default(this), "show")
    }),
    n.default.fn.tab = gn._jQueryInterface,
    n.default.fn.tab.Constructor = gn,
    n.default.fn.tab.noConflict = function() {
        return n.default.fn.tab = un,
        gn._jQueryInterface
    }
    ;
    var mn = "bs.toast"
      , vn = n.default.fn.toast
      , _n = "hide"
      , yn = "show"
      , bn = "showing"
      , wn = "click.dismiss.bs.toast"
      , En = {
        animation: !0,
        autohide: !0,
        delay: 500
    }
      , Tn = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , Cn = function() {
        function e(e, t) {
            this._element = e,
            this._config = this._getConfig(t),
            this._timeout = null,
            this._setListeners()
        }
        var t = e.prototype;
        return t.show = function() {
            var e = this
              , t = n.default.Event("show.bs.toast");
            if (n.default(this._element).trigger(t),
            !t.isDefaultPrevented()) {
                this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade");
                var i = function() {
                    e._element.classList.remove(bn),
                    e._element.classList.add(yn),
                    n.default(e._element).trigger("shown.bs.toast"),
                    e._config.autohide && (e._timeout = setTimeout(function() {
                        e.hide()
                    }, e._config.delay))
                };
                if (this._element.classList.remove(_n),
                l.reflow(this._element),
                this._element.classList.add(bn),
                this._config.animation) {
                    var o = l.getTransitionDurationFromElement(this._element);
                    n.default(this._element).one(l.TRANSITION_END, i).emulateTransitionEnd(o)
                } else
                    i()
            }
        }
        ,
        t.hide = function() {
            if (this._element.classList.contains(yn)) {
                var e = n.default.Event("hide.bs.toast");
                n.default(this._element).trigger(e),
                e.isDefaultPrevented() || this._close()
            }
        }
        ,
        t.dispose = function() {
            this._clearTimeout(),
            this._element.classList.contains(yn) && this._element.classList.remove(yn),
            n.default(this._element).off(wn),
            n.default.removeData(this._element, mn),
            this._element = null,
            this._config = null
        }
        ,
        t._getConfig = function(e) {
            return e = r({}, En, n.default(this._element).data(), "object" == typeof e && e ? e : {}),
            l.typeCheckConfig("toast", e, this.constructor.DefaultType),
            e
        }
        ,
        t._setListeners = function() {
            var e = this;
            n.default(this._element).on(wn, '[data-dismiss="toast"]', function() {
                return e.hide()
            })
        }
        ,
        t._close = function() {
            var e = this
              , t = function() {
                e._element.classList.add(_n),
                n.default(e._element).trigger("hidden.bs.toast")
            };
            if (this._element.classList.remove(yn),
            this._config.animation) {
                var i = l.getTransitionDurationFromElement(this._element);
                n.default(this._element).one(l.TRANSITION_END, t).emulateTransitionEnd(i)
            } else
                t()
        }
        ,
        t._clearTimeout = function() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var i = n.default(this)
                  , o = i.data(mn);
                if (o || (o = new e(this,"object" == typeof t && t),
                i.data(mn, o)),
                "string" == typeof t) {
                    if (void 0 === o[t])
                        throw new TypeError('No method named "' + t + '"');
                    o[t](this)
                }
            })
        }
        ,
        o(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Tn
            }
        }, {
            key: "Default",
            get: function() {
                return En
            }
        }]),
        e
    }();
    n.default.fn.toast = Cn._jQueryInterface,
    n.default.fn.toast.Constructor = Cn,
    n.default.fn.toast.noConflict = function() {
        return n.default.fn.toast = vn,
        Cn._jQueryInterface
    }
    ,
    e.Alert = f,
    e.Button = _,
    e.Carousel = k,
    e.Collapse = W,
    e.Dropdown = st,
    e.Modal = Ct,
    e.Popover = Gt,
    e.Scrollspy = sn,
    e.Tab = gn,
    e.Toast = Cn,
    e.Tooltip = Qt,
    e.Util = l,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
