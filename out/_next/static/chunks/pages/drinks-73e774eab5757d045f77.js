(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [714],
    {
        6185: function (e, n, r) {
            'use strict';
            r.d(n, {
                Z: function () {
                    return i;
                }
            });
            r(7294);
            var t = r(5893),
                i = function (e) {
                    var n = e.name,
                        r = (e.color, e.size),
                        i = void 0 === r ? 24 : r;
                    return (0, t.jsx)('div', {
                        children: (0, t.jsx)('img', {
                            src: '/assets/icons/'.concat(n, '.png'),
                            width: i,
                            height: i
                        })
                    });
                };
        },
        2345: function (e, n, r) {
            'use strict';
            r.d(n, {
                y: function () {
                    return t;
                }
            });
            var t = {
                dev: 'https://homeplanner.prgr.pl/core/wp-json/wl/v1',
                v2: 'https://homeplanner.prgr.pl/core/wp-json/wp/v2'
            };
        },
        2167: function (e, n, r) {
            'use strict';
            var t = r(3848);
            n.default = void 0;
            var i,
                s = (i = r(7294)) && i.__esModule ? i : { default: i },
                o = r(1063),
                a = r(4651),
                c = r(7426);
            var l = {};
            function u(e, n, r, t) {
                if (e && o.isLocalURL(n)) {
                    e.prefetch(n, r, t).catch(function (e) {
                        0;
                    });
                    var i = t && 'undefined' !== typeof t.locale ? t.locale : e && e.locale;
                    l[n + '%' + r + (i ? '%' + i : '')] = !0;
                }
            }
            var d = function (e) {
                var n,
                    r = !1 !== e.prefetch,
                    i = a.useRouter(),
                    d = s.default.useMemo(
                        function () {
                            var n = o.resolveHref(i, e.href, !0),
                                r = t(n, 2),
                                s = r[0],
                                a = r[1];
                            return { href: s, as: e.as ? o.resolveHref(i, e.as) : a || s };
                        },
                        [i, e.href, e.as]
                    ),
                    f = d.href,
                    h = d.as,
                    v = e.children,
                    p = e.replace,
                    j = e.shallow,
                    x = e.scroll,
                    m = e.locale;
                'string' === typeof v && (v = s.default.createElement('a', null, v));
                var g = (n = s.default.Children.only(v)) && 'object' === typeof n && n.ref,
                    y = c.useIntersection({ rootMargin: '200px' }),
                    _ = t(y, 2),
                    k = _[0],
                    w = _[1],
                    b = s.default.useCallback(
                        function (e) {
                            k(e),
                                g &&
                                    ('function' === typeof g
                                        ? g(e)
                                        : 'object' === typeof g && (g.current = e));
                        },
                        [g, k]
                    );
                s.default.useEffect(
                    function () {
                        var e = w && r && o.isLocalURL(f),
                            n = 'undefined' !== typeof m ? m : i && i.locale,
                            t = l[f + '%' + h + (n ? '%' + n : '')];
                        e && !t && u(i, f, h, { locale: n });
                    },
                    [h, f, w, m, r, i]
                );
                var E = {
                    ref: b,
                    onClick: function (e) {
                        n.props && 'function' === typeof n.props.onClick && n.props.onClick(e),
                            e.defaultPrevented ||
                                (function (e, n, r, t, i, s, a, c) {
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
                                            o.isLocalURL(r))) &&
                                        (e.preventDefault(),
                                        null == a && t.indexOf('#') >= 0 && (a = !1),
                                        n[i ? 'replace' : 'push'](r, t, {
                                            shallow: s,
                                            locale: c,
                                            scroll: a
                                        }));
                                })(e, i, f, h, p, j, x, m);
                    },
                    onMouseEnter: function (e) {
                        o.isLocalURL(f) &&
                            (n.props &&
                                'function' === typeof n.props.onMouseEnter &&
                                n.props.onMouseEnter(e),
                            u(i, f, h, { priority: !0 }));
                    }
                };
                if (e.passHref || ('a' === n.type && !('href' in n.props))) {
                    var S = 'undefined' !== typeof m ? m : i && i.locale,
                        M =
                            i &&
                            i.isLocaleDomain &&
                            o.getDomainLocale(h, S, i && i.locales, i && i.domainLocales);
                    E.href = M || o.addBasePath(o.addLocale(h, S, i && i.defaultLocale));
                }
                return s.default.cloneElement(n, E);
            };
            n.default = d;
        },
        7426: function (e, n, r) {
            'use strict';
            var t = r(3848);
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.useIntersection = function (e) {
                    var n = e.rootMargin,
                        r = e.disabled || !o,
                        c = i.useRef(),
                        l = i.useState(!1),
                        u = t(l, 2),
                        d = u[0],
                        f = u[1],
                        h = i.useCallback(
                            function (e) {
                                c.current && (c.current(), (c.current = void 0)),
                                    r ||
                                        d ||
                                        (e &&
                                            e.tagName &&
                                            (c.current = (function (e, n, r) {
                                                var t = (function (e) {
                                                        var n = e.rootMargin || '',
                                                            r = a.get(n);
                                                        if (r) return r;
                                                        var t = new Map(),
                                                            i = new IntersectionObserver(function (
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
                                                            a.set(
                                                                n,
                                                                (r = {
                                                                    id: n,
                                                                    observer: i,
                                                                    elements: t
                                                                })
                                                            ),
                                                            r
                                                        );
                                                    })(r),
                                                    i = t.id,
                                                    s = t.observer,
                                                    o = t.elements;
                                                return (
                                                    o.set(e, n),
                                                    s.observe(e),
                                                    function () {
                                                        o.delete(e),
                                                            s.unobserve(e),
                                                            0 === o.size &&
                                                                (s.disconnect(), a.delete(i));
                                                    }
                                                );
                                            })(
                                                e,
                                                function (e) {
                                                    return e && f(e);
                                                },
                                                { rootMargin: n }
                                            )));
                            },
                            [r, n, d]
                        );
                    return (
                        i.useEffect(
                            function () {
                                if (!o && !d) {
                                    var e = s.requestIdleCallback(function () {
                                        return f(!0);
                                    });
                                    return function () {
                                        return s.cancelIdleCallback(e);
                                    };
                                }
                            },
                            [d]
                        ),
                        [h, d]
                    );
                });
            var i = r(7294),
                s = r(3447),
                o = 'undefined' !== typeof IntersectionObserver;
            var a = new Map();
        },
        3600: function (e, n, r) {
            'use strict';
            r.r(n),
                r.d(n, {
                    __N_SSP: function () {
                        return d;
                    }
                });
            r(266);
            var t = r(1508),
                i = (r(809), r(7294)),
                s = r(6185),
                o = r(5703),
                a = r(3934),
                c = r.n(a),
                l = (r(2345), r(8003)),
                u = r(5893),
                d = !0;
            n.default = function (e) {
                var n = e.drinksList,
                    r = (0, i.useState)(!1),
                    a = (r[0], r[1], (0, i.useState)([])),
                    d = a[0],
                    f = a[1],
                    h = (0, i.useState)(''),
                    v = (h[0], h[1], (0, i.useState)('')),
                    p = (v[0], v[1], (0, i.useState)('')),
                    j = (p[0], p[1], (0, i.useState)(''));
                j[0], j[1];
                (0, i.useEffect)(
                    function () {
                        f((0, t.Z)(n));
                    },
                    [n]
                );
                var x = (0, i.useMemo)(
                    function () {
                        return d.map(function (e, n) {
                            return (
                                e &&
                                (0, u.jsx)(l.default, { drink: e, onDelete: function (e) {} }, n)
                            );
                        });
                    },
                    [d]
                );
                return (0, u.jsx)(o.Z, {
                    title: 'TODO',
                    children: (0, u.jsxs)(u.Fragment, {
                        children: [
                            (0, u.jsxs)('div', {
                                className: c().header,
                                children: [
                                    (0, u.jsx)('h1', { children: 'Drinks' }),
                                    (0, u.jsx)('div', {
                                        className: c()['header-image'],
                                        children: (0, u.jsx)(s.Z, { name: 'drink', size: 50 })
                                    })
                                ]
                            }),
                            (0, u.jsx)('div', { children: x })
                        ]
                    })
                });
            };
        },
        8003: function (e, n, r) {
            'use strict';
            r.r(n);
            r(7294);
            var t = r(3262),
                i = r.n(t),
                s = r(5893);
            n.default = function (e) {
                var n = e.drink;
                return (0, s.jsx)('div', {
                    className: i()['drink-card'],
                    children: (0, s.jsxs)('div', {
                        children: [
                            (0, s.jsx)('div', {
                                children: (0, s.jsx)('img', {
                                    src: (null === n || void 0 === n ? void 0 : n.image) || '',
                                    alt: ''
                                })
                            }),
                            (0, s.jsx)('div', {
                                children: (0, s.jsx)('h4', {
                                    children: null === n || void 0 === n ? void 0 : n.title
                                })
                            }),
                            (0, s.jsxs)('div', {
                                className: i()['drink-info'],
                                children: [
                                    (0, s.jsxs)('div', {
                                        children: [
                                            (0, s.jsx)('strong', { children: 'Ingredients:' }),
                                            (0, s.jsx)('span', {
                                                children:
                                                    null === n || void 0 === n
                                                        ? void 0
                                                        : n.acf.ingredients
                                            })
                                        ]
                                    }),
                                    (0, s.jsxs)('div', {
                                        children: [
                                            (0, s.jsx)('strong', { children: 'Preparation:' }),
                                            (0, s.jsx)('span', {
                                                children:
                                                    null === n || void 0 === n
                                                        ? void 0
                                                        : n.acf.preparation
                                            })
                                        ]
                                    }),
                                    (0, s.jsxs)('div', {
                                        children: [
                                            (0, s.jsx)('strong', { children: 'Flavor:' }),
                                            (0, s.jsx)('span', {
                                                children:
                                                    null === n || void 0 === n
                                                        ? void 0
                                                        : n.acf.taste
                                            })
                                        ]
                                    }),
                                    (0, s.jsxs)('div', {
                                        children: [
                                            (0, s.jsx)('strong', { children: 'Method:' }),
                                            (0, s.jsx)('span', {
                                                children:
                                                    null === n || void 0 === n
                                                        ? void 0
                                                        : n.acf.method
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, s.jsx)('hr', {})
                        ]
                    })
                });
            };
        },
        5703: function (e, n, r) {
            'use strict';
            var t = r(9008),
                i = r(1664),
                s = r(6185),
                o = r(5893);
            n.Z = function (e) {
                var n = e.children,
                    r = e.title;
                return (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsxs)(t.default, {
                            children: [
                                (0, o.jsx)('title', { children: r }),
                                (0, o.jsx)('meta', { charSet: 'utf-8' }),
                                (0, o.jsx)('meta', {
                                    name: 'viewport',
                                    content: 'initial-scale=1.0, width=device-width'
                                }),
                                (0, o.jsx)('link', {
                                    rel: 'preconnect',
                                    href: 'https://fonts.gstatic.com'
                                }),
                                (0, o.jsx)('link', {
                                    href: 'https://fonts.googleapis.com/css2?family=Asap:wght@400;600&family=Fredoka+One&display=swap',
                                    rel: 'stylesheet'
                                }),
                                (0, o.jsx)('link', { rel: 'manifest', href: '/manifest.json' })
                            ]
                        }),
                        n,
                        (0, o.jsxs)('footer', {
                            children: [
                                (0, o.jsx)(i.default, {
                                    href: '/',
                                    children: (0, o.jsx)('div', {
                                        children: (0, o.jsx)(s.Z, { name: 'home', size: 30 })
                                    })
                                }),
                                (0, o.jsx)(i.default, {
                                    href: '/warehouse',
                                    children: (0, o.jsx)('div', {
                                        children: (0, o.jsx)(s.Z, { name: 'warehouse', size: 30 })
                                    })
                                }),
                                (0, o.jsx)(i.default, {
                                    href: '/cleaning',
                                    children: (0, o.jsx)('div', {
                                        children: (0, o.jsx)(s.Z, { name: 'cleaning', size: 30 })
                                    })
                                }),
                                (0, o.jsx)(i.default, {
                                    href: '/shopping',
                                    children: (0, o.jsx)('div', {
                                        children: (0, o.jsx)(s.Z, { name: 'bill', size: 30 })
                                    })
                                }),
                                (0, o.jsx)(i.default, {
                                    href: '/drinks',
                                    children: (0, o.jsx)('div', {
                                        children: (0, o.jsx)(s.Z, { name: 'drink', size: 30 })
                                    })
                                }),
                                (0, o.jsx)(i.default, {
                                    href: '/movies',
                                    children: (0, o.jsx)('div', {
                                        children: (0, o.jsx)(s.Z, { name: 'movies', size: 30 })
                                    })
                                })
                            ]
                        })
                    ]
                });
            };
        },
        4374: function (e, n, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/drinks',
                function () {
                    return r(3600);
                }
            ]);
        },
        3934: function (e) {
            e.exports = {
                header: 'Drinks_header__2Hu6b',
                'header-image': 'Drinks_header-image__1e-fV',
                'add-drink-form': 'Drinks_add-drink-form__qJS8B'
            };
        },
        3262: function (e) {
            e.exports = {
                'drink-card': 'Drink_drink-card__2Vrb6',
                'list-content': 'Drink_list-content__3Uyaf',
                'drink-info': 'Drink_drink-info__1ngfY'
            };
        },
        9008: function (e, n, r) {
            e.exports = r(639);
        },
        1664: function (e, n, r) {
            e.exports = r(2167);
        },
        266: function (e, n, r) {
            'use strict';
            function t(e, n, r, t, i, s, o) {
                try {
                    var a = e[s](o),
                        c = a.value;
                } catch (l) {
                    return void r(l);
                }
                a.done ? n(c) : Promise.resolve(c).then(t, i);
            }
            function i(e) {
                return function () {
                    var n = this,
                        r = arguments;
                    return new Promise(function (i, s) {
                        var o = e.apply(n, r);
                        function a(e) {
                            t(o, i, s, a, c, 'next', e);
                        }
                        function c(e) {
                            t(o, i, s, a, c, 'throw', e);
                        }
                        a(void 0);
                    });
                };
            }
            r.d(n, {
                Z: function () {
                    return i;
                }
            });
        },
        1508: function (e, n, r) {
            'use strict';
            function t(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t;
            }
            function i(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return t(e);
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
                            if ('string' === typeof e) return t(e, n);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            return (
                                'Object' === r && e.constructor && (r = e.constructor.name),
                                'Map' === r || 'Set' === r
                                    ? Array.from(e)
                                    : 'Arguments' === r ||
                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                    ? t(e, n)
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
            r.d(n, {
                Z: function () {
                    return i;
                }
            });
        }
    },
    function (e) {
        e.O(0, [774, 888, 179], function () {
            return (n = 4374), e((e.s = n));
            var n;
        });
        var n = e.O();
        _N_E = n;
    }
]);
