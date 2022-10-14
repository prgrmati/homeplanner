(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [886],
    {
        8003: function (n, i, r) {
            'use strict';
            r.r(i);
            r(7294);
            var d = r(3262),
                s = r.n(d),
                e = r(5893);
            i.default = function (n) {
                var i = n.drink;
                return (0, e.jsx)('div', {
                    className: s()['drink-card'],
                    children: (0, e.jsxs)('div', {
                        children: [
                            (0, e.jsx)('div', {
                                children: (0, e.jsx)('img', {
                                    src: (null === i || void 0 === i ? void 0 : i.image) || '',
                                    alt: ''
                                })
                            }),
                            (0, e.jsx)('div', {
                                children: (0, e.jsx)('h4', {
                                    children: null === i || void 0 === i ? void 0 : i.title
                                })
                            }),
                            (0, e.jsxs)('div', {
                                className: s()['drink-info'],
                                children: [
                                    (0, e.jsxs)('div', {
                                        children: [
                                            (0, e.jsx)('strong', { children: 'Ingredients:' }),
                                            (0, e.jsx)('span', {
                                                children:
                                                    null === i || void 0 === i
                                                        ? void 0
                                                        : i.acf.ingredients
                                            })
                                        ]
                                    }),
                                    (0, e.jsxs)('div', {
                                        children: [
                                            (0, e.jsx)('strong', { children: 'Preparation:' }),
                                            (0, e.jsx)('span', {
                                                children:
                                                    null === i || void 0 === i
                                                        ? void 0
                                                        : i.acf.preparation
                                            })
                                        ]
                                    }),
                                    (0, e.jsxs)('div', {
                                        children: [
                                            (0, e.jsx)('strong', { children: 'Flavor:' }),
                                            (0, e.jsx)('span', {
                                                children:
                                                    null === i || void 0 === i
                                                        ? void 0
                                                        : i.acf.taste
                                            })
                                        ]
                                    }),
                                    (0, e.jsxs)('div', {
                                        children: [
                                            (0, e.jsx)('strong', { children: 'Method:' }),
                                            (0, e.jsx)('span', {
                                                children:
                                                    null === i || void 0 === i
                                                        ? void 0
                                                        : i.acf.method
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, e.jsx)('hr', {})
                        ]
                    })
                });
            };
        },
        9583: function (n, i, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/drinks/lib/Drink',
                function () {
                    return r(8003);
                }
            ]);
        },
        3262: function (n) {
            n.exports = {
                'drink-card': 'Drink_drink-card__2Vrb6',
                'list-content': 'Drink_list-content__3Uyaf',
                'drink-info': 'Drink_drink-info__1ngfY'
            };
        }
    },
    function (n) {
        n.O(0, [774, 888, 179], function () {
            return (i = 9583), n((n.s = i));
            var i;
        });
        var i = n.O();
        _N_E = i;
    }
]);
