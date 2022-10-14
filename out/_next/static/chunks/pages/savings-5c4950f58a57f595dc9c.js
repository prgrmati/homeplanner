(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [399],
    {
        6185: function (e, n, t) {
            'use strict';
            t.d(n, {
                Z: function () {
                    return i;
                }
            });
            t(7294);
            var r = t(5893),
                i = function (e) {
                    var n = e.name,
                        t = (e.color, e.size),
                        i = void 0 === t ? 24 : t;
                    return (0, r.jsx)('div', {
                        children: (0, r.jsx)('img', {
                            src: '/assets/icons/'.concat(n, '.png'),
                            width: i,
                            height: i
                        })
                    });
                };
        },
        8954: function (e, n, t) {
            'use strict';
            var r = t(4525),
                i = t.n(r),
                s = t(5893);
            n.Z = function (e) {
                var n = e.type,
                    t = e.text;
                return (0, s.jsx)('div', {
                    style: {
                        backgroundColor: 'success' === n ? '#9deb94' : '#f94949',
                        color: 'success' === n ? '#000' : '#fff'
                    },
                    className: i().wrapper,
                    children: t
                });
            };
        },
        2167: function (e, n, t) {
            'use strict';
            var r = t(3848);
            n.default = void 0;
            var i,
                s = (i = t(7294)) && i.__esModule ? i : { default: i },
                a = t(1063),
                o = t(4651),
                c = t(7426);
            var l = {};
            function u(e, n, t, r) {
                if (e && a.isLocalURL(n)) {
                    e.prefetch(n, t, r).catch(function (e) {
                        0;
                    });
                    var i = r && 'undefined' !== typeof r.locale ? r.locale : e && e.locale;
                    l[n + '%' + t + (i ? '%' + i : '')] = !0;
                }
            }
            var f = function (e) {
                var n,
                    t = !1 !== e.prefetch,
                    i = o.useRouter(),
                    f = s.default.useMemo(
                        function () {
                            var n = a.resolveHref(i, e.href, !0),
                                t = r(n, 2),
                                s = t[0],
                                o = t[1];
                            return { href: s, as: e.as ? a.resolveHref(i, e.as) : o || s };
                        },
                        [i, e.href, e.as]
                    ),
                    d = f.href,
                    p = f.as,
                    h = e.children,
                    v = e.replace,
                    m = e.shallow,
                    x = e.scroll,
                    j = e.locale;
                'string' === typeof h && (h = s.default.createElement('a', null, h));
                var g = (n = s.default.Children.only(h)) && 'object' === typeof n && n.ref,
                    _ = c.useIntersection({ rootMargin: '200px' }),
                    y = r(_, 2),
                    w = y[0],
                    b = y[1],
                    k = s.default.useCallback(
                        function (e) {
                            w(e),
                                g &&
                                    ('function' === typeof g
                                        ? g(e)
                                        : 'object' === typeof g && (g.current = e));
                        },
                        [g, w]
                    );
                s.default.useEffect(
                    function () {
                        var e = b && t && a.isLocalURL(d),
                            n = 'undefined' !== typeof j ? j : i && i.locale,
                            r = l[d + '%' + p + (n ? '%' + n : '')];
                        e && !r && u(i, d, p, { locale: n });
                    },
                    [p, d, b, j, t, i]
                );
                var E = {
                    ref: k,
                    onClick: function (e) {
                        n.props && 'function' === typeof n.props.onClick && n.props.onClick(e),
                            e.defaultPrevented ||
                                (function (e, n, t, r, i, s, o, c) {
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
                                        null == o && r.indexOf('#') >= 0 && (o = !1),
                                        n[i ? 'replace' : 'push'](t, r, {
                                            shallow: s,
                                            locale: c,
                                            scroll: o
                                        }));
                                })(e, i, d, p, v, m, x, j);
                    },
                    onMouseEnter: function (e) {
                        a.isLocalURL(d) &&
                            (n.props &&
                                'function' === typeof n.props.onMouseEnter &&
                                n.props.onMouseEnter(e),
                            u(i, d, p, { priority: !0 }));
                    }
                };
                if (e.passHref || ('a' === n.type && !('href' in n.props))) {
                    var L = 'undefined' !== typeof j ? j : i && i.locale,
                        N =
                            i &&
                            i.isLocaleDomain &&
                            a.getDomainLocale(p, L, i && i.locales, i && i.domainLocales);
                    E.href = N || a.addBasePath(a.addLocale(p, L, i && i.defaultLocale));
                }
                return s.default.cloneElement(n, E);
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
                        c = i.useRef(),
                        l = i.useState(!1),
                        u = r(l, 2),
                        f = u[0],
                        d = u[1],
                        p = i.useCallback(
                            function (e) {
                                c.current && (c.current(), (c.current = void 0)),
                                    t ||
                                        f ||
                                        (e &&
                                            e.tagName &&
                                            (c.current = (function (e, n, t) {
                                                var r = (function (e) {
                                                        var n = e.rootMargin || '',
                                                            t = o.get(n);
                                                        if (t) return t;
                                                        var r = new Map(),
                                                            i = new IntersectionObserver(function (
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
                                                            o.set(
                                                                n,
                                                                (t = {
                                                                    id: n,
                                                                    observer: i,
                                                                    elements: r
                                                                })
                                                            ),
                                                            t
                                                        );
                                                    })(t),
                                                    i = r.id,
                                                    s = r.observer,
                                                    a = r.elements;
                                                return (
                                                    a.set(e, n),
                                                    s.observe(e),
                                                    function () {
                                                        a.delete(e),
                                                            s.unobserve(e),
                                                            0 === a.size &&
                                                                (s.disconnect(), o.delete(i));
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
                        i.useEffect(
                            function () {
                                if (!a && !f) {
                                    var e = s.requestIdleCallback(function () {
                                        return d(!0);
                                    });
                                    return function () {
                                        return s.cancelIdleCallback(e);
                                    };
                                }
                            },
                            [f]
                        ),
                        [p, f]
                    );
                });
            var i = t(7294),
                s = t(3447),
                a = 'undefined' !== typeof IntersectionObserver;
            var o = new Map();
        },
        4136: function (e, n, t) {
            'use strict';
            t.r(n),
                t.d(n, {
                    __N_SSP: function () {
                        return l;
                    }
                });
            t(7294);
            var r = t(6185),
                i = t(5703),
                s = t(7853),
                a = t.n(s),
                o = t(2248),
                c = t(5893),
                l = !0;
            n.default = function (e) {
                var n = e.amount,
                    t = e.modified;
                return (0, c.jsx)(i.Z, {
                    title: 'TODO',
                    children: (0, c.jsxs)(c.Fragment, {
                        children: [
                            (0, c.jsxs)('div', {
                                className: a().header,
                                children: [
                                    (0, c.jsx)('h1', { children: 'Savings' }),
                                    (0, c.jsx)('div', {
                                        className: a()['header-image'],
                                        children: (0, c.jsx)(r.Z, { name: 'piggybank', size: 50 })
                                    })
                                ]
                            }),
                            (0, c.jsx)('div', {
                                children: (0, c.jsx)(o.default, {
                                    savings: { amount: n, modified: t }
                                })
                            })
                        ]
                    })
                });
            };
        },
        2248: function (e, n, t) {
            'use strict';
            t.r(n);
            var r = t(7294),
                i = t(392),
                s = t.n(i),
                a = t(8954),
                o = t(5893);
            n.default = function (e) {
                var n = e.savings,
                    t = (0, r.useState)(''),
                    i = t[0],
                    c = t[1],
                    l = (0, r.useState)('2528')[0],
                    u = (0, r.useState)(!1),
                    f = u[0],
                    d = u[1],
                    p = (0, r.useState)(!1),
                    h = p[0],
                    v = p[1],
                    m = (0, r.useState)(!1),
                    x = m[0],
                    j = m[1];
                (0, r.useEffect)(
                    function () {
                        4 === i.length
                            ? (i === l
                                  ? (v(!0),
                                    j(!0),
                                    setTimeout(function () {
                                        v(!1);
                                    }, 1e3))
                                  : (d(!0),
                                    setTimeout(function () {
                                        d(!1);
                                    }, 1e3),
                                    c('')),
                              c(''))
                            : i.length >= 4 && c('');
                    },
                    [i]
                );
                return (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)('div', {
                            className: s()['panel-wrapper'],
                            children: (function () {
                                for (
                                    var e = [],
                                        n = function (n) {
                                            e.push(
                                                (0, o.jsx)(
                                                    'div',
                                                    {
                                                        role: 'button',
                                                        onClick: function () {
                                                            c(i + n), j(!1);
                                                        },
                                                        children: (0, o.jsx)('span', {
                                                            children: n
                                                        })
                                                    },
                                                    n
                                                )
                                            );
                                        },
                                        t = 1;
                                    t < 10;
                                    t++
                                )
                                    n(t);
                                return e;
                            })()
                        }),
                        x &&
                            (0, o.jsxs)('div', {
                                className: s()['bank-number-wrapper'],
                                children: [
                                    (0, o.jsxs)('span', {
                                        children: [
                                            parseFloat(n.amount).toLocaleString(void 0, {
                                                minimumFractionDigits: 2
                                            }),
                                            ' z\u0142'
                                        ]
                                    }),
                                    (0, o.jsxs)('span', {
                                        children: ['Last updated: ', n.modified]
                                    })
                                ]
                            }),
                        f && (0, o.jsx)(a.Z, { type: 'danger', text: 'Ups, try again!' }),
                        h && (0, o.jsx)(a.Z, { type: 'success', text: 'Congrats!' })
                    ]
                });
            };
        },
        5703: function (e, n, t) {
            'use strict';
            var r = t(9008),
                i = t(1664),
                s = t(6185),
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
                                (0, a.jsx)(i.default, {
                                    href: '/',
                                    children: (0, a.jsx)('div', {
                                        children: (0, a.jsx)(s.Z, { name: 'home', size: 30 })
                                    })
                                }),
                                (0, a.jsx)(i.default, {
                                    href: '/warehouse',
                                    children: (0, a.jsx)('div', {
                                        children: (0, a.jsx)(s.Z, { name: 'warehouse', size: 30 })
                                    })
                                }),
                                (0, a.jsx)(i.default, {
                                    href: '/cleaning',
                                    children: (0, a.jsx)('div', {
                                        children: (0, a.jsx)(s.Z, { name: 'cleaning', size: 30 })
                                    })
                                }),
                                (0, a.jsx)(i.default, {
                                    href: '/shopping',
                                    children: (0, a.jsx)('div', {
                                        children: (0, a.jsx)(s.Z, { name: 'bill', size: 30 })
                                    })
                                }),
                                (0, a.jsx)(i.default, {
                                    href: '/drinks',
                                    children: (0, a.jsx)('div', {
                                        children: (0, a.jsx)(s.Z, { name: 'drink', size: 30 })
                                    })
                                }),
                                (0, a.jsx)(i.default, {
                                    href: '/movies',
                                    children: (0, a.jsx)('div', {
                                        children: (0, a.jsx)(s.Z, { name: 'movies', size: 30 })
                                    })
                                })
                            ]
                        })
                    ]
                });
            };
        },
        9439: function (e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/savings',
                function () {
                    return t(4136);
                }
            ]);
        },
        4525: function (e) {
            e.exports = { wrapper: 'Notification_wrapper__2ctUH' };
        },
        7853: function (e) {
            e.exports = {
                header: 'Savings_header__28jO0',
                'header-image': 'Savings_header-image__2Nb8l'
            };
        },
        392: function (e) {
            e.exports = {
                'panel-wrapper': 'TypePanel_panel-wrapper__3_gPr',
                'bank-number-wrapper': 'TypePanel_bank-number-wrapper__MTfVS'
            };
        },
        9008: function (e, n, t) {
            e.exports = t(639);
        },
        1664: function (e, n, t) {
            e.exports = t(2167);
        }
    },
    function (e) {
        e.O(0, [774, 888, 179], function () {
            return (n = 9439), e((e.s = n));
            var n;
        });
        var n = e.O();
        _N_E = n;
    }
]);
