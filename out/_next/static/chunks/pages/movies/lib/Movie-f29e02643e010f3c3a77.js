(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [538],
    {
        9096: function (e, i, o) {
            'use strict';
            o.r(i);
            var v = o(7294),
                n = o(4142),
                s = o.n(n),
                r = o(5893);
            i.default = function (e) {
                var i,
                    o,
                    n,
                    a,
                    t = e.movie,
                    l = (0, v.useState)(!1),
                    c = l[0],
                    d = l[1];
                return (0, r.jsxs)('div', {
                    className: s()['movie-wrapper'],
                    role: 'button',
                    onClick: function () {
                        return d(!c);
                    },
                    children: [
                        (0, r.jsx)('span', {
                            className: s()['movie-disk'],
                            children:
                                null === t || void 0 === t || null === (i = t.acf) || void 0 === i
                                    ? void 0
                                    : i.movie_harddrive
                        }),
                        (0, r.jsx)('div', {
                            className: s()['movie-poster-wrapper'],
                            children: (0, r.jsx)('img', {
                                src: null === t || void 0 === t ? void 0 : t.image,
                                className: s()['movie-poster']
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: s()['movie-details'],
                            children: [
                                (0, r.jsxs)('h4', {
                                    children: [
                                        null === t || void 0 === t ? void 0 : t.name,
                                        ' (',
                                        null === t ||
                                        void 0 === t ||
                                        null === (o = t.acf) ||
                                        void 0 === o
                                            ? void 0
                                            : o.movie_year,
                                        ')'
                                    ]
                                }),
                                (0, r.jsx)('p', {
                                    children:
                                        null === t ||
                                        void 0 === t ||
                                        null === (n = t.acf) ||
                                        void 0 === n
                                            ? void 0
                                            : n.movie_category
                                }),
                                (0, r.jsxs)('div', {
                                    className: s()['movie-rating'],
                                    children: [
                                        (0, r.jsxs)('div', {
                                            children: [
                                                (0, r.jsx)('span', {
                                                    style: { fontWeight: 'bold' },
                                                    children:
                                                        null === t ||
                                                        void 0 === t ||
                                                        null === (a = t.acf) ||
                                                        void 0 === a
                                                            ? void 0
                                                            : a.movie_rating
                                                }),
                                                (0, r.jsx)('span', { children: '/' }),
                                                (0, r.jsx)('span', { children: '10' })
                                            ]
                                        }),
                                        (0, r.jsx)('img', {
                                            src: '/assets/icons/star.png',
                                            className: s()['movie-poster']
                                        })
                                    ]
                                }),
                                (0, r.jsx)('p', {
                                    className: [
                                        s()['movie-description'],
                                        s()[''.concat(c ? 'movie-description--active' : '')]
                                    ].join(' '),
                                    children: null === t || void 0 === t ? void 0 : t.content
                                }),
                                (null === t || void 0 === t ? void 0 : t.content.length) > 90 &&
                                    (0, r.jsx)(r.Fragment, {
                                        children: (0, r.jsx)('span', {
                                            className: [
                                                s()['movie-toggle-more'],
                                                s()[''.concat(c ? 'movie-toggle-more--active' : '')]
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
        3768: function (e, i, o) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/movies/lib/Movie',
                function () {
                    return o(9096);
                }
            ]);
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
        }
    },
    function (e) {
        e.O(0, [774, 888, 179], function () {
            return (i = 3768), e((e.s = i));
            var i;
        });
        var i = e.O();
        _N_E = i;
    }
]);
