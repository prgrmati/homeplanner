(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405],
    {
        6185: function (e, n, r) {
            'use strict';
            r.d(n, {
                Z: function () {
                    return s;
                }
            });
            r(7294);
            var t = r(5893),
                s = function (e) {
                    var n = e.name,
                        r = (e.color, e.size),
                        s = void 0 === r ? 24 : r;
                    return (0, t.jsx)('div', {
                        children: (0, t.jsx)('img', {
                            src: '/assets/icons/'.concat(n, '.png'),
                            width: s,
                            height: s
                        })
                    });
                };
        },
        2167: function (e, n, r) {
            'use strict';
            var t = r(3848);
            n.default = void 0;
            var s,
                i = (s = r(7294)) && s.__esModule ? s : { default: s },
                a = r(1063),
                o = r(4651),
                c = r(7426);
            var l = {};
            function d(e, n, r, t) {
                if (e && a.isLocalURL(n)) {
                    e.prefetch(n, r, t).catch(function (e) {
                        0;
                    });
                    var s = t && 'undefined' !== typeof t.locale ? t.locale : e && e.locale;
                    l[n + '%' + r + (s ? '%' + s : '')] = !0;
                }
            }
            var f = function (e) {
                var n,
                    r = !1 !== e.prefetch,
                    s = o.useRouter(),
                    f = i.default.useMemo(
                        function () {
                            var n = a.resolveHref(s, e.href, !0),
                                r = t(n, 2),
                                i = r[0],
                                o = r[1];
                            return { href: i, as: e.as ? a.resolveHref(s, e.as) : o || i };
                        },
                        [s, e.href, e.as]
                    ),
                    u = f.href,
                    h = f.as,
                    p = e.children,
                    v = e.replace,
                    m = e.shallow,
                    j = e.scroll,
                    x = e.locale;
                'string' === typeof p && (p = i.default.createElement('a', null, p));
                var g = (n = i.default.Children.only(p)) && 'object' === typeof n && n.ref,
                    w = c.useIntersection({ rootMargin: '200px' }),
                    y = t(w, 2),
                    k = y[0],
                    _ = y[1],
                    b = i.default.useCallback(
                        function (e) {
                            k(e),
                                g &&
                                    ('function' === typeof g
                                        ? g(e)
                                        : 'object' === typeof g && (g.current = e));
                        },
                        [g, k]
                    );
                i.default.useEffect(
                    function () {
                        var e = _ && r && a.isLocalURL(u),
                            n = 'undefined' !== typeof x ? x : s && s.locale,
                            t = l[u + '%' + h + (n ? '%' + n : '')];
                        e && !t && d(s, u, h, { locale: n });
                    },
                    [h, u, _, x, r, s]
                );
                var N = {
                    ref: b,
                    onClick: function (e) {
                        n.props && 'function' === typeof n.props.onClick && n.props.onClick(e),
                            e.defaultPrevented ||
                                (function (e, n, r, t, s, i, o, c) {
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
                                            a.isLocalURL(r))) &&
                                        (e.preventDefault(),
                                        null == o && t.indexOf('#') >= 0 && (o = !1),
                                        n[s ? 'replace' : 'push'](r, t, {
                                            shallow: i,
                                            locale: c,
                                            scroll: o
                                        }));
                                })(e, s, u, h, v, m, j, x);
                    },
                    onMouseEnter: function (e) {
                        a.isLocalURL(u) &&
                            (n.props &&
                                'function' === typeof n.props.onMouseEnter &&
                                n.props.onMouseEnter(e),
                            d(s, u, h, { priority: !0 }));
                    }
                };
                if (e.passHref || ('a' === n.type && !('href' in n.props))) {
                    var z = 'undefined' !== typeof x ? x : s && s.locale,
                        E =
                            s &&
                            s.isLocaleDomain &&
                            a.getDomainLocale(h, z, s && s.locales, s && s.domainLocales);
                    N.href = E || a.addBasePath(a.addLocale(h, z, s && s.defaultLocale));
                }
                return i.default.cloneElement(n, N);
            };
            n.default = f;
        },
        7426: function (e, n, r) {
            'use strict';
            var t = r(3848);
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.useIntersection = function (e) {
                    var n = e.rootMargin,
                        r = e.disabled || !a,
                        c = s.useRef(),
                        l = s.useState(!1),
                        d = t(l, 2),
                        f = d[0],
                        u = d[1],
                        h = s.useCallback(
                            function (e) {
                                c.current && (c.current(), (c.current = void 0)),
                                    r ||
                                        f ||
                                        (e &&
                                            e.tagName &&
                                            (c.current = (function (e, n, r) {
                                                var t = (function (e) {
                                                        var n = e.rootMargin || '',
                                                            r = o.get(n);
                                                        if (r) return r;
                                                        var t = new Map(),
                                                            s = new IntersectionObserver(function (
                                                                e
                                                            ) {
                                                                e.forEach(function (e) {
                                                                    var n = t.get(e.target),
                                                                        r =
                                                                            e.isIntersecting ||
                                                                            e.intersectionRatio > 0;
                                                                    n && r && n(r);
                                                                });
                                                            },
                                                            e);
                                                        return (
                                                            o.set(
                                                                n,
                                                                (r = {
                                                                    id: n,
                                                                    observer: s,
                                                                    elements: t
                                                                })
                                                            ),
                                                            r
                                                        );
                                                    })(r),
                                                    s = t.id,
                                                    i = t.observer,
                                                    a = t.elements;
                                                return (
                                                    a.set(e, n),
                                                    i.observe(e),
                                                    function () {
                                                        a.delete(e),
                                                            i.unobserve(e),
                                                            0 === a.size &&
                                                                (i.disconnect(), o.delete(s));
                                                    }
                                                );
                                            })(
                                                e,
                                                function (e) {
                                                    return e && u(e);
                                                },
                                                { rootMargin: n }
                                            )));
                            },
                            [r, n, f]
                        );
                    return (
                        s.useEffect(
                            function () {
                                if (!a && !f) {
                                    var e = i.requestIdleCallback(function () {
                                        return u(!0);
                                    });
                                    return function () {
                                        return i.cancelIdleCallback(e);
                                    };
                                }
                            },
                            [f]
                        ),
                        [h, f]
                    );
                });
            var s = r(7294),
                i = r(3447),
                a = 'undefined' !== typeof IntersectionObserver;
            var o = new Map();
        },
        2562: function (e, n, r) {
            'use strict';
            r.r(n);
            var t = r(6185),
                s = r(5703),
                i = (r(7294), r(1618)),
                a = r.n(i),
                o = r(1664),
                c = r(5893);
            fetch('https://homeplanner.prgr.pl/core/wp-json/jwt-auth/v1/token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', accept: 'application/json' },
                body: JSON.stringify({ username: 'prgr', password: '-1dlKbWT5%@.F-]W' })
            })
                .then(function (e) {
                    return e.json();
                })
                .then(function (e) {
                    console.log(e.token), localStorage.setItem('jwt', e.token);
                });
            n.default = function () {
                return (0, c.jsx)(s.Z, {
                    title: 'TODO',
                    children: (0, c.jsxs)(c.Fragment, {
                        children: [
                            (0, c.jsx)('h1', {
                                className: a()['app-title'],
                                children: '#homesweethome'
                            }),
                            (0, c.jsxs)('div', {
                                className: a()['home-cards'],
                                children: [
                                    (0, c.jsx)(o.default, {
                                        href: '/warehouse',
                                        children: (0, c.jsxs)('div', {
                                            className: a()['home-card'],
                                            children: [
                                                (0, c.jsx)(t.Z, { name: 'warehouse', size: 50 }),
                                                (0, c.jsx)('h4', { children: 'Food stock' })
                                            ]
                                        })
                                    }),
                                    (0, c.jsx)(o.default, {
                                        href: '/cleaning',
                                        children: (0, c.jsxs)('div', {
                                            className: a()['home-card'],
                                            children: [
                                                (0, c.jsx)(t.Z, { name: 'cleaning', size: 50 }),
                                                (0, c.jsx)('h4', { children: 'Cleaning' })
                                            ]
                                        })
                                    }),
                                    (0, c.jsx)(o.default, {
                                        href: '/shopping',
                                        children: (0, c.jsxs)('div', {
                                            className: a()['home-card'],
                                            children: [
                                                (0, c.jsx)(t.Z, { name: 'bill', size: 50 }),
                                                (0, c.jsx)('h4', { children: 'Shopping list' })
                                            ]
                                        })
                                    }),
                                    (0, c.jsx)(o.default, {
                                        href: '/drinks',
                                        children: (0, c.jsxs)('div', {
                                            className: a()['home-card'],
                                            children: [
                                                (0, c.jsx)(t.Z, { name: 'drink', size: 50 }),
                                                (0, c.jsx)('h4', { children: 'Drinks' })
                                            ]
                                        })
                                    }),
                                    (0, c.jsx)(o.default, {
                                        href: '/movies',
                                        children: (0, c.jsxs)('div', {
                                            className: a()['home-card'],
                                            children: [
                                                (0, c.jsx)(t.Z, { name: 'movies', size: 50 }),
                                                (0, c.jsx)('h4', { children: 'Movies & TV Shows' })
                                            ]
                                        })
                                    }),
                                    (0, c.jsx)(o.default, {
                                        href: '/savings',
                                        children: (0, c.jsxs)('div', {
                                            className: a()['home-card'],
                                            children: [
                                                (0, c.jsx)(t.Z, { name: 'piggybank', size: 50 }),
                                                (0, c.jsx)('h4', { children: 'Savings' })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                });
            };
        },
        5703: function (e, n, r) {
            'use strict';
            var t = r(9008),
                s = r(1664),
                i = r(6185),
                a = r(5893);
            n.Z = function (e) {
                var n = e.children,
                    r = e.title;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(t.default, {
                            children: [
                                (0, a.jsx)('title', { children: r }),
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
                                (0, a.jsx)(s.default, {
                                    href: '/',
                                    children: (0, a.jsx)('div', {
                                        children: (0, a.jsx)(i.Z, { name: 'home', size: 30 })
                                    })
                                }),
                                (0, a.jsx)(s.default, {
                                    href: '/warehouse',
                                    children: (0, a.jsx)('div', {
                                        children: (0, a.jsx)(i.Z, { name: 'warehouse', size: 30 })
                                    })
                                }),
                                (0, a.jsx)(s.default, {
                                    href: '/cleaning',
                                    children: (0, a.jsx)('div', {
                                        children: (0, a.jsx)(i.Z, { name: 'cleaning', size: 30 })
                                    })
                                }),
                                (0, a.jsx)(s.default, {
                                    href: '/shopping',
                                    children: (0, a.jsx)('div', {
                                        children: (0, a.jsx)(i.Z, { name: 'bill', size: 30 })
                                    })
                                }),
                                (0, a.jsx)(s.default, {
                                    href: '/drinks',
                                    children: (0, a.jsx)('div', {
                                        children: (0, a.jsx)(i.Z, { name: 'drink', size: 30 })
                                    })
                                }),
                                (0, a.jsx)(s.default, {
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
        5301: function (e, n, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/',
                function () {
                    return r(2562);
                }
            ]);
        },
        1618: function (e) {
            e.exports = {
                'app-title': 'Home_app-title__1Dx2e',
                'home-cards': 'Home_home-cards__Y0TrT',
                'home-card': 'Home_home-card__kzYCy'
            };
        },
        9008: function (e, n, r) {
            e.exports = r(639);
        },
        1664: function (e, n, r) {
            e.exports = r(2167);
        }
    },
    function (e) {
        e.O(0, [774, 888, 179], function () {
            return (n = 5301), e((e.s = n));
            var n;
        });
        var n = e.O();
        _N_E = n;
    }
]);
