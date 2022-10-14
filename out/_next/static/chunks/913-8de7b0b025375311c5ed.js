(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [913],
    {
        2579: function (e, n, t) {
            'use strict';
            t.d(n, {
                Z: function () {
                    return s;
                }
            });
            var r = t(1413),
                o = t(7294),
                i = {
                    icon: function (e, n) {
                        return {
                            tag: 'svg',
                            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
                            children: [
                                {
                                    tag: 'path',
                                    attrs: {
                                        d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
                                        fill: e
                                    }
                                },
                                {
                                    tag: 'path',
                                    attrs: {
                                        d: 'M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm192 396c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z',
                                        fill: n
                                    }
                                },
                                {
                                    tag: 'path',
                                    attrs: {
                                        d: 'M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z',
                                        fill: e
                                    }
                                }
                            ]
                        };
                    },
                    name: 'plus-circle',
                    theme: 'twotone'
                },
                a = t(5202),
                c = function (e, n) {
                    return o.createElement(a.Z, (0, r.Z)((0, r.Z)({}, e), {}, { ref: n, icon: i }));
                };
            c.displayName = 'PlusCircleTwoTone';
            var s = o.forwardRef(c);
        },
        6185: function (e, n, t) {
            'use strict';
            t.d(n, {
                Z: function () {
                    return o;
                }
            });
            t(7294);
            var r = t(5893),
                o = function (e) {
                    var n = e.name,
                        t = (e.color, e.size),
                        o = void 0 === t ? 24 : t;
                    return (0, r.jsx)('div', {
                        children: (0, r.jsx)('img', {
                            src: '/assets/icons/'.concat(n, '.png'),
                            width: o,
                            height: o
                        })
                    });
                };
        },
        2944: function (e, n, t) {
            'use strict';
            var r = t(5523),
                o = (t(7294), t(5450)),
                i = t.n(o),
                a = t(5893);
            n.Z = function (e) {
                return (
                    (0, r.Z)(e),
                    (0, a.jsx)('div', {
                        className: i()['loading-wrapper'],
                        children: (0, a.jsx)('img', {
                            src: '/assets/icons/loading.png',
                            width: 50,
                            height: 50
                        })
                    })
                );
            };
        },
        8954: function (e, n, t) {
            'use strict';
            var r = t(4525),
                o = t.n(r),
                i = t(5893);
            n.Z = function (e) {
                var n = e.type,
                    t = e.text;
                return (0, i.jsx)('div', {
                    style: {
                        backgroundColor: 'success' === n ? '#9deb94' : '#f94949',
                        color: 'success' === n ? '#000' : '#fff'
                    },
                    className: o().wrapper,
                    children: t
                });
            };
        },
        2345: function (e, n, t) {
            'use strict';
            t.d(n, {
                y: function () {
                    return r;
                }
            });
            var r = {
                dev: 'https://homeplanner.prgr.pl/core/wp-json/wl/v1',
                v2: 'https://homeplanner.prgr.pl/core/wp-json/wp/v2'
            };
        },
        2167: function (e, n, t) {
            'use strict';
            var r = t(3848);
            n.default = void 0;
            var o,
                i = (o = t(7294)) && o.__esModule ? o : { default: o },
                a = t(1063),
                c = t(4651),
                s = t(7426);
            var l = {};
            function u(e, n, t, r) {
                if (e && a.isLocalURL(n)) {
                    e.prefetch(n, t, r).catch(function (e) {
                        0;
                    });
                    var o = r && 'undefined' !== typeof r.locale ? r.locale : e && e.locale;
                    l[n + '%' + t + (o ? '%' + o : '')] = !0;
                }
            }
            var f = function (e) {
                var n,
                    t = !1 !== e.prefetch,
                    o = c.useRouter(),
                    f = i.default.useMemo(
                        function () {
                            var n = a.resolveHref(o, e.href, !0),
                                t = r(n, 2),
                                i = t[0],
                                c = t[1];
                            return { href: i, as: e.as ? a.resolveHref(o, e.as) : c || i };
                        },
                        [o, e.href, e.as]
                    ),
                    d = f.href,
                    p = f.as,
                    h = e.children,
                    v = e.replace,
                    m = e.shallow,
                    g = e.scroll,
                    y = e.locale;
                'string' === typeof h && (h = i.default.createElement('a', null, h));
                var j = (n = i.default.Children.only(h)) && 'object' === typeof n && n.ref,
                    x = s.useIntersection({ rootMargin: '200px' }),
                    w = r(x, 2),
                    b = w[0],
                    _ = w[1],
                    k = i.default.useCallback(
                        function (e) {
                            b(e),
                                j &&
                                    ('function' === typeof j
                                        ? j(e)
                                        : 'object' === typeof j && (j.current = e));
                        },
                        [j, b]
                    );
                i.default.useEffect(
                    function () {
                        var e = _ && t && a.isLocalURL(d),
                            n = 'undefined' !== typeof y ? y : o && o.locale,
                            r = l[d + '%' + p + (n ? '%' + n : '')];
                        e && !r && u(o, d, p, { locale: n });
                    },
                    [p, d, _, y, t, o]
                );
                var Z = {
                    ref: k,
                    onClick: function (e) {
                        n.props && 'function' === typeof n.props.onClick && n.props.onClick(e),
                            e.defaultPrevented ||
                                (function (e, n, t, r, o, i, c, s) {
                                    ('A' !== e.currentTarget.nodeName ||
                                        (!(function (e) {
                                            var n = e.currentTarget.target;
                                            return (
                                                (n && '_self' !== n) ||
                                                e.metaKey ||
                                                e.ctrlKey ||
                                                e.shiftKey ||
                                                e.altKey ||
                                                (e.nativeEvent && 2 === e.nativeEvent.which)
                                            );
                                        })(e) &&
                                            a.isLocalURL(t))) &&
                                        (e.preventDefault(),
                                        null == c && r.indexOf('#') >= 0 && (c = !1),
                                        n[o ? 'replace' : 'push'](t, r, {
                                            shallow: i,
                                            locale: s,
                                            scroll: c
                                        }));
                                })(e, o, d, p, v, m, g, y);
                    },
                    onMouseEnter: function (e) {
                        a.isLocalURL(d) &&
                            (n.props &&
                                'function' === typeof n.props.onMouseEnter &&
                                n.props.onMouseEnter(e),
                            u(o, d, p, { priority: !0 }));
                    }
                };
                if (e.passHref || ('a' === n.type && !('href' in n.props))) {
                    var M = 'undefined' !== typeof y ? y : o && o.locale,
                        L =
                            o &&
                            o.isLocaleDomain &&
                            a.getDomainLocale(p, M, o && o.locales, o && o.domainLocales);
                    Z.href = L || a.addBasePath(a.addLocale(p, M, o && o.defaultLocale));
                }
                return i.default.cloneElement(n, Z);
            };
            n.default = f;
        },
        7426: function (e, n, t) {
            'use strict';
            var r = t(3848);
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.useIntersection = function (e) {
                    var n = e.rootMargin,
                        t = e.disabled || !a,
                        s = o.useRef(),
                        l = o.useState(!1),
                        u = r(l, 2),
                        f = u[0],
                        d = u[1],
                        p = o.useCallback(
                            function (e) {
                                s.current && (s.current(), (s.current = void 0)),
                                    t ||
                                        f ||
                                        (e &&
                                            e.tagName &&
                                            (s.current = (function (e, n, t) {
                                                var r = (function (e) {
                                                        var n = e.rootMargin || '',
                                                            t = c.get(n);
                                                        if (t) return t;
                                                        var r = new Map(),
                                                            o = new IntersectionObserver(function (
                                                                e
                                                            ) {
                                                                e.forEach(function (e) {
                                                                    var n = r.get(e.target),
                                                                        t =
                                                                            e.isIntersecting ||
                                                                            e.intersectionRatio > 0;
                                                                    n && t && n(t);
                                                                });
                                                            },
                                                            e);
                                                        return (
                                                            c.set(
                                                                n,
                                                                (t = {
                                                                    id: n,
                                                                    observer: o,
                                                                    elements: r
                                                                })
                                                            ),
                                                            t
                                                        );
                                                    })(t),
                                                    o = r.id,
                                                    i = r.observer,
                                                    a = r.elements;
                                                return (
                                                    a.set(e, n),
                                                    i.observe(e),
                                                    function () {
                                                        a.delete(e),
                                                            i.unobserve(e),
                                                            0 === a.size &&
                                                                (i.disconnect(), c.delete(o));
                                                    }
                                                );
                                            })(
                                                e,
                                                function (e) {
                                                    return e && d(e);
                                                },
                                                { rootMargin: n }
                                            )));
                            },
                            [t, n, f]
                        );
                    return (
                        o.useEffect(
                            function () {
                                if (!a && !f) {
                                    var e = i.requestIdleCallback(function () {
                                        return d(!0);
                                    });
                                    return function () {
                                        return i.cancelIdleCallback(e);
                                    };
                                }
                            },
                            [f]
                        ),
                        [p, f]
                    );
                });
            var o = t(7294),
                i = t(3447),
                a = 'undefined' !== typeof IntersectionObserver;
            var c = new Map();
        },
        5703: function (e, n, t) {
            'use strict';
            var r = t(9008),
                o = t(1664),
                i = t(6185),
                a = t(5893);
            n.Z = function (e) {
                var n = e.children,
                    t = e.title;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(r.default, {
                            children: [
                                (0, a.jsx)('title', { children: t }),
                                (0, a.jsx)('meta', { charSet: 'utf-8' }),
                                (0, a.jsx)('meta', {
                                    name: 'viewport',
                                    content: 'initial-scale=1.0, width=device-width'
                                }),
                                (0, a.jsx)('link', {
                                    rel: 'preconnect',
                                    href: 'https://fonts.gstatic.com'
                                }),
                                (0, a.jsx)('link', {
                                    href: 'https://fonts.googleapis.com/css2?family=Asap:wght@400;600&family=Fredoka+One&display=swap',
                                    rel: 'stylesheet'
                                }),
                                (0, a.jsx)('link', { rel: 'manifest', href: '/manifest.json' })
                            ]
                        }),
                        n,
                        (0, a.jsxs)('footer', {
                            children: [
                                (0, a.jsx)(o.default, {
                                    href: '/',
                                    children: (0, a.jsx)('div', {
                                        children: (0, a.jsx)(i.Z, { name: 'home', size: 30 })
                                    })
                                }),
                                (0, a.jsx)(o.default, {
                                    href: '/warehouse',
                                    children: (0, a.jsx)('div', {
                                        children: (0, a.jsx)(i.Z, { name: 'warehouse', size: 30 })
                                    })
                                }),
                                (0, a.jsx)(o.default, {
                                    href: '/cleaning',
                                    children: (0, a.jsx)('div', {
                                        children: (0, a.jsx)(i.Z, { name: 'cleaning', size: 30 })
                                    })
                                }),
                                (0, a.jsx)(o.default, {
                                    href: '/shopping',
                                    children: (0, a.jsx)('div', {
                                        children: (0, a.jsx)(i.Z, { name: 'bill', size: 30 })
                                    })
                                }),
                                (0, a.jsx)(o.default, {
                                    href: '/drinks',
                                    children: (0, a.jsx)('div', {
                                        children: (0, a.jsx)(i.Z, { name: 'drink', size: 30 })
                                    })
                                }),
                                (0, a.jsx)(o.default, {
                                    href: '/movies',
                                    children: (0, a.jsx)('div', {
                                        children: (0, a.jsx)(i.Z, { name: 'movies', size: 30 })
                                    })
                                })
                            ]
                        })
                    ]
                });
            };
        },
        5450: function (e) {
            e.exports = {
                'loading-wrapper': 'Loading_loading-wrapper__2ll_v',
                rotating: 'Loading_rotating__1b17O'
            };
        },
        4525: function (e) {
            e.exports = { wrapper: 'Notification_wrapper__2ctUH' };
        },
        9008: function (e, n, t) {
            e.exports = t(639);
        },
        1664: function (e, n, t) {
            e.exports = t(2167);
        },
        266: function (e, n, t) {
            'use strict';
            function r(e, n, t, r, o, i, a) {
                try {
                    var c = e[i](a),
                        s = c.value;
                } catch (l) {
                    return void t(l);
                }
                c.done ? n(s) : Promise.resolve(s).then(r, o);
            }
            function o(e) {
                return function () {
                    var n = this,
                        t = arguments;
                    return new Promise(function (o, i) {
                        var a = e.apply(n, t);
                        function c(e) {
                            r(a, o, i, c, s, 'next', e);
                        }
                        function s(e) {
                            r(a, o, i, c, s, 'throw', e);
                        }
                        c(void 0);
                    });
                };
            }
            t.d(n, {
                Z: function () {
                    return o;
                }
            });
        },
        1508: function (e, n, t) {
            'use strict';
            function r(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r;
            }
            function o(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return r(e);
                    })(e) ||
                    (function (e) {
                        if (
                            ('undefined' !== typeof Symbol && null != e[Symbol.iterator]) ||
                            null != e['@@iterator']
                        )
                            return Array.from(e);
                    })(e) ||
                    (function (e, n) {
                        if (e) {
                            if ('string' === typeof e) return r(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            return (
                                'Object' === t && e.constructor && (t = e.constructor.name),
                                'Map' === t || 'Set' === t
                                    ? Array.from(e)
                                    : 'Arguments' === t ||
                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                    ? r(e, n)
                                    : void 0
                            );
                        }
                    })(e) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            t.d(n, {
                Z: function () {
                    return o;
                }
            });
        }
    }
]);
