(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [513],
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
                o = t(5893);
            n.Z = function (e) {
                var n = e.type,
                    t = e.text;
                return (0, o.jsx)('div', {
                    style: {
                        backgroundColor: 'success' === n ? '#9deb94' : '#f94949',
                        color: 'success' === n ? '#000' : '#fff'
                    },
                    className: i().wrapper,
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
            var i,
                o = (i = t(7294)) && i.__esModule ? i : { default: i },
                s = t(1063),
                a = t(4651),
                c = t(7426);
            var l = {};
            function u(e, n, t, r) {
                if (e && s.isLocalURL(n)) {
                    e.prefetch(n, t, r).catch(function (e) {
                        0;
                    });
                    var i = r && 'undefined' !== typeof r.locale ? r.locale : e && e.locale;
                    l[n + '%' + t + (i ? '%' + i : '')] = !0;
                }
            }
            var d = function (e) {
                var n,
                    t = !1 !== e.prefetch,
                    i = a.useRouter(),
                    d = o.default.useMemo(
                        function () {
                            var n = s.resolveHref(i, e.href, !0),
                                t = r(n, 2),
                                o = t[0],
                                a = t[1];
                            return { href: o, as: e.as ? s.resolveHref(i, e.as) : a || o };
                        },
                        [i, e.href, e.as]
                    ),
                    v = d.href,
                    f = d.as,
                    m = e.children,
                    p = e.replace,
                    h = e.shallow,
                    j = e.scroll,
                    _ = e.locale;
                'string' === typeof m && (m = o.default.createElement('a', null, m));
                var x = (n = o.default.Children.only(m)) && 'object' === typeof n && n.ref,
                    g = c.useIntersection({ rootMargin: '200px' }),
                    y = r(g, 2),
                    w = y[0],
                    b = y[1],
                    M = o.default.useCallback(
                        function (e) {
                            w(e),
                                x &&
                                    ('function' === typeof x
                                        ? x(e)
                                        : 'object' === typeof x && (x.current = e));
                        },
                        [x, w]
                    );
                o.default.useEffect(
                    function () {
                        var e = b && t && s.isLocalURL(v),
                            n = 'undefined' !== typeof _ ? _ : i && i.locale,
                            r = l[v + '%' + f + (n ? '%' + n : '')];
                        e && !r && u(i, v, f, { locale: n });
                    },
                    [f, v, b, _, t, i]
                );
                var N = {
                    ref: M,
                    onClick: function (e) {
                        n.props && 'function' === typeof n.props.onClick && n.props.onClick(e),
                            e.defaultPrevented ||
                                (function (e, n, t, r, i, o, a, c) {
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
                                            s.isLocalURL(t))) &&
                                        (e.preventDefault(),
                                        null == a && r.indexOf('#') >= 0 && (a = !1),
                                        n[i ? 'replace' : 'push'](t, r, {
                                            shallow: o,
                                            locale: c,
                                            scroll: a
                                        }));
                                })(e, i, v, f, p, h, j, _);
                    },
                    onMouseEnter: function (e) {
                        s.isLocalURL(v) &&
                            (n.props &&
                                'function' === typeof n.props.onMouseEnter &&
                                n.props.onMouseEnter(e),
                            u(i, v, f, { priority: !0 }));
                    }
                };
                if (e.passHref || ('a' === n.type && !('href' in n.props))) {
                    var k = 'undefined' !== typeof _ ? _ : i && i.locale,
                        S =
                            i &&
                            i.isLocaleDomain &&
                            s.getDomainLocale(f, k, i && i.locales, i && i.domainLocales);
                    N.href = S || s.addBasePath(s.addLocale(f, k, i && i.defaultLocale));
                }
                return o.default.cloneElement(n, N);
            };
            n.default = d;
        },
        7426: function (e, n, t) {
            'use strict';
            var r = t(3848);
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.useIntersection = function (e) {
                    var n = e.rootMargin,
                        t = e.disabled || !s,
                        c = i.useRef(),
                        l = i.useState(!1),
                        u = r(l, 2),
                        d = u[0],
                        v = u[1],
                        f = i.useCallback(
                            function (e) {
                                c.current && (c.current(), (c.current = void 0)),
                                    t ||
                                        d ||
                                        (e &&
                                            e.tagName &&
                                            (c.current = (function (e, n, t) {
                                                var r = (function (e) {
                                                        var n = e.rootMargin || '',
                                                            t = a.get(n);
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
                                                            a.set(
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
                                                    o = r.observer,
                                                    s = r.elements;
                                                return (
                                                    s.set(e, n),
                                                    o.observe(e),
                                                    function () {
                                                        s.delete(e),
                                                            o.unobserve(e),
                                                            0 === s.size &&
                                                                (o.disconnect(), a.delete(i));
                                                    }
                                                );
                                            })(
                                                e,
                                                function (e) {
                                                    return e && v(e);
                                                },
                                                { rootMargin: n }
                                            )));
                            },
                            [t, n, d]
                        );
                    return (
                        i.useEffect(
                            function () {
                                if (!s && !d) {
                                    var e = o.requestIdleCallback(function () {
                                        return v(!0);
                                    });
                                    return function () {
                                        return o.cancelIdleCallback(e);
                                    };
                                }
                            },
                            [d]
                        ),
                        [f, d]
                    );
                });
            var i = t(7294),
                o = t(3447),
                s = 'undefined' !== typeof IntersectionObserver;
            var a = new Map();
        },
        2221: function (e, n, t) {
            'use strict';
            t.r(n),
                t.d(n, {
                    __N_SSP: function () {
                        return d;
                    }
                });
            t(2809), t(1508), t(266), t(809);
            var r = t(7294),
                i = t(6185),
                o = t(8954),
                s = t(5703),
                a = t(1706),
                c = t.n(a),
                l = (t(2345), t(9096)),
                u = t(5893);
            var d = !0;
            n.default = function (e) {
                var n = e.moviesList,
                    t = (0, r.useState)(n),
                    a = t[0],
                    d = (t[1], (0, r.useState)(!1)),
                    v = (d[0], d[1], (0, r.useState)('')),
                    f = (v[0], v[1], (0, r.useState)(!1)),
                    m = f[0],
                    p = (f[1], (0, r.useState)('')),
                    h = p[0],
                    j = (p[1], (0, r.useState)('success')),
                    _ = j[0],
                    x =
                        (j[1],
                        (0, r.useMemo)(
                            function () {
                                return a
                                    .sort(function (e, n) {
                                        return (
                                            new Date(n.date).getTime() - new Date(e.date).getTime()
                                        );
                                    })
                                    .map(function (e, n) {
                                        return (0, u.jsx)(l.default, { movie: e }, n);
                                    });
                            },
                            [a]
                        ));
                return (0, u.jsx)(s.Z, {
                    title: 'TODO',
                    children: (0, u.jsxs)(u.Fragment, {
                        children: [
                            (0, u.jsxs)('div', {
                                className: c().header,
                                children: [
                                    (0, u.jsx)('h1', { children: 'Movies & TV Shows' }),
                                    (0, u.jsx)('div', {
                                        className: c()['header-image'],
                                        children: (0, u.jsx)(i.Z, { name: 'movies', size: 50 })
                                    })
                                ]
                            }),
                            (0, u.jsx)('div', { className: c()['movies-list'], children: x }),
                            m && (0, u.jsx)(o.Z, { type: _, text: h })
                        ]
                    })
                });
            };
        },
        9096: function (e, n, t) {
            'use strict';
            t.r(n);
            var r = t(7294),
                i = t(4142),
                o = t.n(i),
                s = t(5893);
            n.default = function (e) {
                var n,
                    t,
                    i,
                    a,
                    c = e.movie,
                    l = (0, r.useState)(!1),
                    u = l[0],
                    d = l[1];
                return (0, s.jsxs)('div', {
                    className: o()['movie-wrapper'],
                    role: 'button',
                    onClick: function () {
                        return d(!u);
                    },
                    children: [
                        (0, s.jsx)('span', {
                            className: o()['movie-disk'],
                            children:
                                null === c || void 0 === c || null === (n = c.acf) || void 0 === n
                                    ? void 0
                                    : n.movie_harddrive
                        }),
                        (0, s.jsx)('div', {
                            className: o()['movie-poster-wrapper'],
                            children: (0, s.jsx)('img', {
                                src: null === c || void 0 === c ? void 0 : c.image,
                                className: o()['movie-poster']
                            })
                        }),
                        (0, s.jsxs)('div', {
                            className: o()['movie-details'],
                            children: [
                                (0, s.jsxs)('h4', {
                                    children: [
                                        null === c || void 0 === c ? void 0 : c.name,
                                        ' (',
                                        null === c ||
                                        void 0 === c ||
                                        null === (t = c.acf) ||
                                        void 0 === t
                                            ? void 0
                                            : t.movie_year,
                                        ')'
                                    ]
                                }),
                                (0, s.jsx)('p', {
                                    children:
                                        null === c ||
                                        void 0 === c ||
                                        null === (i = c.acf) ||
                                        void 0 === i
                                            ? void 0
                                            : i.movie_category
                                }),
                                (0, s.jsxs)('div', {
                                    className: o()['movie-rating'],
                                    children: [
                                        (0, s.jsxs)('div', {
                                            children: [
                                                (0, s.jsx)('span', {
                                                    style: { fontWeight: 'bold' },
                                                    children:
                                                        null === c ||
                                                        void 0 === c ||
                                                        null === (a = c.acf) ||
                                                        void 0 === a
                                                            ? void 0
                                                            : a.movie_rating
                                                }),
                                                (0, s.jsx)('span', { children: '/' }),
                                                (0, s.jsx)('span', { children: '10' })
                                            ]
                                        }),
                                        (0, s.jsx)('img', {
                                            src: '/assets/icons/star.png',
                                            className: o()['movie-poster']
                                        })
                                    ]
                                }),
                                (0, s.jsx)('p', {
                                    className: [
                                        o()['movie-description'],
                                        o()[''.concat(u ? 'movie-description--active' : '')]
                                    ].join(' '),
                                    children: null === c || void 0 === c ? void 0 : c.content
                                }),
                                (null === c || void 0 === c ? void 0 : c.content.length) > 90 &&
                                    (0, s.jsx)(s.Fragment, {
                                        children: (0, s.jsx)('span', {
                                            className: [
                                                o()['movie-toggle-more'],
                                                o()[''.concat(u ? 'movie-toggle-more--active' : '')]
                                            ].join(' '),
                                            children: '\u203a'
                                        })
                                    })
                            ]
                        })
                    ]
                });
            };
        },
        5703: function (e, n, t) {
            'use strict';
            var r = t(9008),
                i = t(1664),
                o = t(6185),
                s = t(5893);
            n.Z = function (e) {
                var n = e.children,
                    t = e.title;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(r.default, {
                            children: [
                                (0, s.jsx)('title', { children: t }),
                                (0, s.jsx)('meta', { charSet: 'utf-8' }),
                                (0, s.jsx)('meta', {
                                    name: 'viewport',
                                    content: 'initial-scale=1.0, width=device-width'
                                }),
                                (0, s.jsx)('link', {
                                    rel: 'preconnect',
                                    href: 'https://fonts.gstatic.com'
                                }),
                                (0, s.jsx)('link', {
                                    href: 'https://fonts.googleapis.com/css2?family=Asap:wght@400;600&family=Fredoka+One&display=swap',
                                    rel: 'stylesheet'
                                }),
                                (0, s.jsx)('link', { rel: 'manifest', href: '/manifest.json' })
                            ]
                        }),
                        n,
                        (0, s.jsxs)('footer', {
                            children: [
                                (0, s.jsx)(i.default, {
                                    href: '/',
                                    children: (0, s.jsx)('div', {
                                        children: (0, s.jsx)(o.Z, { name: 'home', size: 30 })
                                    })
                                }),
                                (0, s.jsx)(i.default, {
                                    href: '/warehouse',
                                    children: (0, s.jsx)('div', {
                                        children: (0, s.jsx)(o.Z, { name: 'warehouse', size: 30 })
                                    })
                                }),
                                (0, s.jsx)(i.default, {
                                    href: '/cleaning',
                                    children: (0, s.jsx)('div', {
                                        children: (0, s.jsx)(o.Z, { name: 'cleaning', size: 30 })
                                    })
                                }),
                                (0, s.jsx)(i.default, {
                                    href: '/shopping',
                                    children: (0, s.jsx)('div', {
                                        children: (0, s.jsx)(o.Z, { name: 'bill', size: 30 })
                                    })
                                }),
                                (0, s.jsx)(i.default, {
                                    href: '/drinks',
                                    children: (0, s.jsx)('div', {
                                        children: (0, s.jsx)(o.Z, { name: 'drink', size: 30 })
                                    })
                                }),
                                (0, s.jsx)(i.default, {
                                    href: '/movies',
                                    children: (0, s.jsx)('div', {
                                        children: (0, s.jsx)(o.Z, { name: 'movies', size: 30 })
                                    })
                                })
                            ]
                        })
                    ]
                });
            };
        },
        9817: function (e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/movies',
                function () {
                    return t(2221);
                }
            ]);
        },
        4525: function (e) {
            e.exports = { wrapper: 'Notification_wrapper__2ctUH' };
        },
        1706: function (e) {
            e.exports = {
                header: 'Movies_header__3hRox',
                'header-image': 'Movies_header-image__1u4bj',
                'movies-list': 'Movies_movies-list__20guh'
            };
        },
        4142: function (e) {
            e.exports = {
                'movie-wrapper': 'Movie_movie-wrapper__2MNh0',
                'movie-poster-wrapper': 'Movie_movie-poster-wrapper__-O0N6',
                'movie-disk': 'Movie_movie-disk__3Q0L1',
                'movie-poster': 'Movie_movie-poster__rGaB4',
                'movie-details': 'Movie_movie-details__cFaHC',
                'movie-rating': 'Movie_movie-rating__1_yQq',
                'movie-description': 'Movie_movie-description__15u4P',
                'movie-description--active': 'Movie_movie-description--active__2z9bp',
                'movie-toggle-more': 'Movie_movie-toggle-more__3A1Dy',
                'movie-toggle-more--active': 'Movie_movie-toggle-more--active__1Prdi'
            };
        },
        9008: function (e, n, t) {
            e.exports = t(639);
        },
        1664: function (e, n, t) {
            e.exports = t(2167);
        },
        266: function (e, n, t) {
            'use strict';
            function r(e, n, t, r, i, o, s) {
                try {
                    var a = e[o](s),
                        c = a.value;
                } catch (l) {
                    return void t(l);
                }
                a.done ? n(c) : Promise.resolve(c).then(r, i);
            }
            function i(e) {
                return function () {
                    var n = this,
                        t = arguments;
                    return new Promise(function (i, o) {
                        var s = e.apply(n, t);
                        function a(e) {
                            r(s, i, o, a, c, 'next', e);
                        }
                        function c(e) {
                            r(s, i, o, a, c, 'throw', e);
                        }
                        a(void 0);
                    });
                };
            }
            t.d(n, {
                Z: function () {
                    return i;
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
            function i(e) {
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
                    return i;
                }
            });
        }
    },
    function (e) {
        e.O(0, [774, 888, 179], function () {
            return (n = 9817), e((e.s = n));
            var n;
        });
        var n = e.O();
        _N_E = n;
    }
]);
