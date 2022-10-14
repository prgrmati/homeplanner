(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [895],
    {
        2944: function (n, e, t) {
            'use strict';
            var i = t(5523),
                l = (t(7294), t(5450)),
                a = t.n(l),
                c = t(5893);
            e.Z = function (n) {
                return (
                    (0, i.Z)(n),
                    (0, c.jsx)('div', {
                        className: a()['loading-wrapper'],
                        children: (0, c.jsx)('img', {
                            src: '/assets/icons/loading.png',
                            width: 50,
                            height: 50
                        })
                    })
                );
            };
        },
        2345: function (n, e, t) {
            'use strict';
            t.d(e, {
                y: function () {
                    return i;
                }
            });
            var i = {
                dev: 'https://homeplanner.prgr.pl/core/wp-json/wl/v1',
                v2: 'https://homeplanner.prgr.pl/core/wp-json/wp/v2'
            };
        },
        1067: function (n, e, t) {
            'use strict';
            t.r(e),
                t.d(e, {
                    default: function () {
                        return h;
                    }
                });
            var i = t(7294),
                l = t(8265),
                a = t.n(l),
                c = t(1413),
                o = {
                    icon: {
                        tag: 'svg',
                        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
                        children: [
                            {
                                tag: 'path',
                                attrs: {
                                    d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
                                }
                            },
                            {
                                tag: 'path',
                                attrs: {
                                    d: 'M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z'
                                }
                            }
                        ]
                    },
                    name: 'exclamation-circle',
                    theme: 'outlined'
                },
                s = t(5202),
                r = function (n, e) {
                    return i.createElement(s.Z, (0, c.Z)((0, c.Z)({}, n), {}, { ref: e, icon: o }));
                };
            r.displayName = 'ExclamationCircleOutlined';
            var d = i.forwardRef(r),
                u = t(3171),
                p = t(8212),
                v = t(2345),
                f = t(2944),
                g = t(5893),
                h = function (n) {
                    var e = n.cleaning,
                        t = n.onDelete,
                        l = n.onUpdate,
                        c = (0, i.useState)(!1),
                        o = c[0],
                        s = c[1],
                        r = (0, i.useState)(!1),
                        h = r[0],
                        x = r[1],
                        m = (0, i.useState)(null === e || void 0 === e ? void 0 : e.acf.cycle),
                        j = m[0],
                        _ = m[1],
                        w = (0, i.useState)(null === e || void 0 === e ? void 0 : e.acf.last),
                        y = w[0],
                        C = w[1],
                        S = (0, i.useState)(!1),
                        b = S[0],
                        N = S[1];
                    return (0, g.jsxs)('div', {
                        className: a()['single-clean'],
                        children: [
                            (0, g.jsxs)('h4', {
                                children: [
                                    new Date(null === e || void 0 === e ? void 0 : e.acf.last) <
                                        new Date() &&
                                        (0, g.jsx)(d, {
                                            style: { fontSize: '20px', marginRight: '5px' }
                                        }),
                                    null === e || void 0 === e ? void 0 : e.title
                                ]
                            }),
                            (0, g.jsxs)('ul', {
                                children: [
                                    (0, g.jsx)('li', {
                                        children: (0, g.jsxs)('span', {
                                            children: [
                                                'Cleaning cycle:',
                                                ' ',
                                                o
                                                    ? (0, g.jsx)('input', {
                                                          type: 'text',
                                                          className: 'mm-input',
                                                          style: { marginBottom: '10px' },
                                                          defaultValue:
                                                              null === e || void 0 === e
                                                                  ? void 0
                                                                  : e.acf.cycle,
                                                          onChange: function (n) {
                                                              return _(n.target.value);
                                                          }
                                                      })
                                                    : (0, g.jsxs)('strong', {
                                                          children: [
                                                              'every ',
                                                              null === e || void 0 === e
                                                                  ? void 0
                                                                  : e.acf.cycle
                                                          ]
                                                      })
                                            ]
                                        })
                                    }),
                                    (0, g.jsx)('li', {
                                        children: (0, g.jsxs)('span', {
                                            children: [
                                                'Last cleaning:',
                                                ' ',
                                                o
                                                    ? (0, g.jsx)('input', {
                                                          type: 'date',
                                                          className: 'mm-input',
                                                          defaultValue:
                                                              null === e || void 0 === e
                                                                  ? void 0
                                                                  : e.acf.last,
                                                          onChange: function (n) {
                                                              return C(n.target.value);
                                                          }
                                                      })
                                                    : (0, g.jsx)('strong', {
                                                          children:
                                                              null === e || void 0 === e
                                                                  ? void 0
                                                                  : e.acf.last
                                                      })
                                            ]
                                        })
                                    }),
                                    !o &&
                                        (0, g.jsx)('li', {
                                            children: (function () {
                                                var n =
                                                        new Date().getDate() -
                                                        new Date(
                                                            null === e || void 0 === e
                                                                ? void 0
                                                                : e.acf.last
                                                        ).getDate(),
                                                    t = 1 === n ? 'day' : 'days';
                                                return n >= 1
                                                    ? (0, g.jsxs)('strong', {
                                                          style: { color: 'red' },
                                                          children: [n, ' ', t, ' delay']
                                                      })
                                                    : null;
                                            })()
                                        }),
                                    o &&
                                        (0, g.jsx)('li', {
                                            children: (0, g.jsx)('button', {
                                                type: 'button',
                                                className: 'mm-btn-success',
                                                style: { marginTop: '15px', minWidth: '110px' },
                                                onClick: function () {
                                                    l({
                                                        id:
                                                            null === e || void 0 === e
                                                                ? void 0
                                                                : e.id,
                                                        title:
                                                            null === e || void 0 === e
                                                                ? void 0
                                                                : e.title,
                                                        acf: { cycle: j, last: y }
                                                    }),
                                                        s(!1);
                                                },
                                                children: 'Save'
                                            })
                                        })
                                ]
                            }),
                            (0, g.jsxs)('div', {
                                className: a()['delete-wrapper'],
                                children: [
                                    h &&
                                        (0, g.jsxs)('div', {
                                            className: a()['delete-confirm-buttons'],
                                            children: [
                                                (0, g.jsx)('button', {
                                                    role: 'button',
                                                    onClick: function () {
                                                        return x(!1);
                                                    },
                                                    children: 'Cancel'
                                                }),
                                                (0, g.jsx)('button', {
                                                    onClick: function () {
                                                        N(!0),
                                                            fetch(
                                                                ''
                                                                    .concat(v.y.v2, '/cleanings/')
                                                                    .concat(
                                                                        null === e || void 0 === e
                                                                            ? void 0
                                                                            : e.id
                                                                    ),
                                                                {
                                                                    method: 'DELETE',
                                                                    headers: {
                                                                        Accept: 'application/json',
                                                                        'Content-Type':
                                                                            'application/json',
                                                                        Authorization:
                                                                            'Bearer '.concat(
                                                                                localStorage.getItem(
                                                                                    'jwt'
                                                                                )
                                                                            )
                                                                    }
                                                                }
                                                            )
                                                                .then(function (n) {
                                                                    return n.json();
                                                                })
                                                                .then(function () {
                                                                    N(!1),
                                                                        t(
                                                                            null === e ||
                                                                                void 0 === e
                                                                                ? void 0
                                                                                : e.id
                                                                        );
                                                                }),
                                                            x(!1),
                                                            s(!1);
                                                    },
                                                    children: 'Delete'
                                                })
                                            ]
                                        }),
                                    o &&
                                        !h &&
                                        (0, g.jsx)(u.Z, {
                                            style: { fontSize: '25px', marginRight: '10px' },
                                            onClick: function () {
                                                return x(!0);
                                            }
                                        }),
                                    !h &&
                                        (0, g.jsx)(p.Z, {
                                            style: { fontSize: '25px' },
                                            onClick: function () {
                                                return s(!o);
                                            }
                                        })
                                ]
                            }),
                            b && (0, g.jsx)(f.Z, {})
                        ]
                    });
                };
        },
        183: function (n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/cleaning/lib/SingleCleaning',
                function () {
                    return t(1067);
                }
            ]);
        },
        5450: function (n) {
            n.exports = {
                'loading-wrapper': 'Loading_loading-wrapper__2ll_v',
                rotating: 'Loading_rotating__1b17O'
            };
        },
        8265: function (n) {
            n.exports = {
                'single-clean': 'SingleCleaning_single-clean__3LBxF',
                'delete-wrapper': 'SingleCleaning_delete-wrapper__3MbGO',
                'delete-confirm-buttons': 'SingleCleaning_delete-confirm-buttons__1W7aS'
            };
        }
    },
    function (n) {
        n.O(0, [678, 774, 888, 179], function () {
            return (e = 183), n((n.s = e));
            var e;
        });
        var e = n.O();
        _N_E = e;
    }
]);
