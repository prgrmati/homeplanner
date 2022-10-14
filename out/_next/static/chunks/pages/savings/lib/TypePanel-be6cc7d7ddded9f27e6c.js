(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [823],
    {
        8954: function (e, n, t) {
            'use strict';
            var r = t(4525),
                s = t.n(r),
                a = t(5893);
            n.Z = function (e) {
                var n = e.type,
                    t = e.text;
                return (0, a.jsx)('div', {
                    style: {
                        backgroundColor: 'success' === n ? '#9deb94' : '#f94949',
                        color: 'success' === n ? '#000' : '#fff'
                    },
                    className: s().wrapper,
                    children: t
                });
            };
        },
        2248: function (e, n, t) {
            'use strict';
            t.r(n);
            var r = t(7294),
                s = t(392),
                a = t.n(s),
                i = t(8954),
                u = t(5893);
            n.default = function (e) {
                var n = e.savings,
                    t = (0, r.useState)(''),
                    s = t[0],
                    c = t[1],
                    o = (0, r.useState)('2528')[0],
                    p = (0, r.useState)(!1),
                    l = p[0],
                    f = p[1],
                    d = (0, r.useState)(!1),
                    _ = d[0],
                    h = d[1],
                    w = (0, r.useState)(!1),
                    x = w[0],
                    m = w[1];
                (0, r.useEffect)(
                    function () {
                        4 === s.length
                            ? (s === o
                                  ? (h(!0),
                                    m(!0),
                                    setTimeout(function () {
                                        h(!1);
                                    }, 1e3))
                                  : (f(!0),
                                    setTimeout(function () {
                                        f(!1);
                                    }, 1e3),
                                    c('')),
                              c(''))
                            : s.length >= 4 && c('');
                    },
                    [s]
                );
                return (0, u.jsxs)(u.Fragment, {
                    children: [
                        (0, u.jsx)('div', {
                            className: a()['panel-wrapper'],
                            children: (function () {
                                for (
                                    var e = [],
                                        n = function (n) {
                                            e.push(
                                                (0, u.jsx)(
                                                    'div',
                                                    {
                                                        role: 'button',
                                                        onClick: function () {
                                                            c(s + n), m(!1);
                                                        },
                                                        children: (0, u.jsx)('span', {
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
                            (0, u.jsxs)('div', {
                                className: a()['bank-number-wrapper'],
                                children: [
                                    (0, u.jsxs)('span', {
                                        children: [
                                            parseFloat(n.amount).toLocaleString(void 0, {
                                                minimumFractionDigits: 2
                                            }),
                                            ' z\u0142'
                                        ]
                                    }),
                                    (0, u.jsxs)('span', {
                                        children: ['Last updated: ', n.modified]
                                    })
                                ]
                            }),
                        l && (0, u.jsx)(i.Z, { type: 'danger', text: 'Ups, try again!' }),
                        _ && (0, u.jsx)(i.Z, { type: 'success', text: 'Congrats!' })
                    ]
                });
            };
        },
        2452: function (e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/savings/lib/TypePanel',
                function () {
                    return t(2248);
                }
            ]);
        },
        4525: function (e) {
            e.exports = { wrapper: 'Notification_wrapper__2ctUH' };
        },
        392: function (e) {
            e.exports = {
                'panel-wrapper': 'TypePanel_panel-wrapper__3_gPr',
                'bank-number-wrapper': 'TypePanel_bank-number-wrapper__MTfVS'
            };
        }
    },
    function (e) {
        e.O(0, [774, 888, 179], function () {
            return (n = 2452), e((e.s = n));
            var n;
        });
        var n = e.O();
        _N_E = n;
    }
]);
