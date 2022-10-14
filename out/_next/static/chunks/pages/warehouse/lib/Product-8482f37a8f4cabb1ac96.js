(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [199],
    {
        1180: function (t, n, e) {
            'use strict';
            var r = e(5953),
                o = e.n(r),
                c = e(5893);
            n.Z = function (t) {
                var n = t.text,
                    e = t.type,
                    r = t.onClick;
                return (0, c.jsx)('button', {
                    className: o().button,
                    style: {
                        backgroundColor: (function () {
                            switch (e) {
                                case 'delete':
                                    return '#ff4d4fb5';
                                case 'success':
                                    return '#29d31559';
                            }
                        })()
                    },
                    type: 'button',
                    onClick: function () {
                        r();
                    },
                    children: n
                });
            };
        },
        2944: function (t, n, e) {
            'use strict';
            var r = e(5523),
                o = (e(7294), e(5450)),
                c = e.n(o),
                i = e(5893);
            n.Z = function (t) {
                return (
                    (0, r.Z)(t),
                    (0, i.jsx)('div', {
                        className: c()['loading-wrapper'],
                        children: (0, i.jsx)('img', {
                            src: '/assets/icons/loading.png',
                            width: 50,
                            height: 50
                        })
                    })
                );
            };
        },
        2345: function (t, n, e) {
            'use strict';
            e.d(n, {
                y: function () {
                    return r;
                }
            });
            var r = {
                dev: 'https://homeplanner.prgr.pl/core/wp-json/wl/v1',
                v2: 'https://homeplanner.prgr.pl/core/wp-json/wp/v2'
            };
        },
        663: function (t, n, e) {
            'use strict';
            e.r(n);
            var r = e(2809),
                o = e(266),
                c = e(809),
                i = e.n(c),
                a = e(7294),
                s = e(1356),
                u = e.n(s),
                l = e(1180),
                p = e(8212),
                d = e(3171),
                f = e(2345),
                h = e(2944),
                v = e(5893),
                _ = void 0;
            function j(t, n) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    n &&
                        (r = r.filter(function (n) {
                            return Object.getOwnPropertyDescriptor(t, n).enumerable;
                        })),
                        e.push.apply(e, r);
                }
                return e;
            }
            function x(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = null != arguments[n] ? arguments[n] : {};
                    n % 2
                        ? j(Object(e), !0).forEach(function (n) {
                              (0, r.Z)(t, n, e[n]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
                        : j(Object(e)).forEach(function (n) {
                              Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
                          });
                }
                return t;
            }
            n.default = function (t) {
                var n,
                    e,
                    r = t.product,
                    c = t.onDelete,
                    s = t.onUpdate,
                    j = (0, a.useState)(!1),
                    g = j[0],
                    w = j[1],
                    y = (0, a.useState)(!1),
                    m = y[0],
                    b = y[1],
                    O = (0, a.useState)(
                        null === r || void 0 === r || null === (n = r.acf) || void 0 === n
                            ? void 0
                            : n.warehouse_product_package
                    ),
                    P = O[0],
                    k = O[1],
                    C = (0, a.useState)(
                        parseFloat(
                            null === r || void 0 === r || null === (e = r.acf) || void 0 === e
                                ? void 0
                                : e.warehouse_product_quantity.toString()
                        )
                    ),
                    N = C[0],
                    S = C[1],
                    q = (0, a.useState)(!1),
                    E = q[0],
                    Z = q[1];
                return (0, v.jsxs)('div', {
                    className: u()['product-wrapper'],
                    children: [
                        (0, v.jsx)('h4', {
                            children: null === r || void 0 === r ? void 0 : r.name
                        }),
                        (0, v.jsxs)('div', {
                            className: u()['product-info'],
                            children: [
                                (0, v.jsx)('img', {
                                    src:
                                        (null === r || void 0 === r ? void 0 : r.image) ||
                                        '/assets/products/placeholder.svg',
                                    width: '75',
                                    height: '75',
                                    alt: ''
                                }),
                                (0, v.jsxs)('ul', {
                                    children: [
                                        (0, v.jsx)('li', {
                                            children: (0, v.jsxs)('span', {
                                                children: [
                                                    'Package:',
                                                    ' ',
                                                    g
                                                        ? (0, v.jsx)('input', {
                                                              type: 'text',
                                                              className: 'mm-input',
                                                              style: { marginBottom: '10px' },
                                                              defaultValue:
                                                                  null === r || void 0 === r
                                                                      ? void 0
                                                                      : r.acf
                                                                            .warehouse_product_package,
                                                              onChange: function (t) {
                                                                  return k(t.target.value);
                                                              }
                                                          })
                                                        : (0, v.jsx)('strong', { children: P })
                                                ]
                                            })
                                        }),
                                        (0, v.jsx)('li', {
                                            children: (0, v.jsxs)('span', {
                                                children: [
                                                    'Available:',
                                                    ' ',
                                                    g
                                                        ? (0, v.jsxs)('div', {
                                                              className: u()['qty-wrapper'],
                                                              children: [
                                                                  (0, v.jsx)('div', {
                                                                      className: u()['qty-action'],
                                                                      role: 'button',
                                                                      onClick: function () {
                                                                          return N <= 0
                                                                              ? {}
                                                                              : S(N - 1);
                                                                      },
                                                                      children: (0, v.jsx)('span', {
                                                                          children: '-'
                                                                      })
                                                                  }),
                                                                  (0, v.jsx)('div', {
                                                                      children: (0, v.jsx)(
                                                                          'input',
                                                                          {
                                                                              type: 'number',
                                                                              className:
                                                                                  u()['qty-input'],
                                                                              min: '0',
                                                                              value: N,
                                                                              onChange: function (
                                                                                  t
                                                                              ) {
                                                                                  null === _ ||
                                                                                      void 0 ===
                                                                                          _ ||
                                                                                      _.inputChangedHandler(
                                                                                          t
                                                                                      );
                                                                              }
                                                                          }
                                                                      )
                                                                  }),
                                                                  (0, v.jsx)('div', {
                                                                      className: u()['qty-action'],
                                                                      role: 'button',
                                                                      onClick: function () {
                                                                          return S(N + 1);
                                                                      },
                                                                      children: (0, v.jsx)('span', {
                                                                          children: '+'
                                                                      })
                                                                  })
                                                              ]
                                                          })
                                                        : (0, v.jsx)('strong', { children: N })
                                                ]
                                            })
                                        }),
                                        g &&
                                            (0, v.jsx)('li', {
                                                children: (0, v.jsx)('button', {
                                                    type: 'button',
                                                    className: 'mm-btn-success',
                                                    style: { marginTop: '15px', minWidth: '110px' },
                                                    onClick: function () {
                                                        !(function () {
                                                            try {
                                                                (0, o.Z)(
                                                                    i().mark(function t() {
                                                                        var n, e;
                                                                        return i().wrap(function (
                                                                            t
                                                                        ) {
                                                                            for (;;)
                                                                                switch (
                                                                                    (t.prev =
                                                                                        t.next)
                                                                                ) {
                                                                                    case 0:
                                                                                        return (
                                                                                            (n = {
                                                                                                acf: {
                                                                                                    warehouse_product_quantity:
                                                                                                        N,
                                                                                                    warehouse_product_package:
                                                                                                        P
                                                                                                }
                                                                                            }),
                                                                                            (t.next = 3),
                                                                                            fetch(
                                                                                                ''
                                                                                                    .concat(
                                                                                                        f
                                                                                                            .y
                                                                                                            .v2,
                                                                                                        '/warehouse-products/'
                                                                                                    )
                                                                                                    .concat(
                                                                                                        null ===
                                                                                                            r ||
                                                                                                            void 0 ===
                                                                                                                r
                                                                                                            ? void 0
                                                                                                            : r.id
                                                                                                    ),
                                                                                                {
                                                                                                    method: 'POST',
                                                                                                    headers:
                                                                                                        {
                                                                                                            Accept: 'application/json',
                                                                                                            'Content-Type':
                                                                                                                'application/json',
                                                                                                            Authorization:
                                                                                                                'Bearer '.concat(
                                                                                                                    localStorage.getItem(
                                                                                                                        'jwt'
                                                                                                                    )
                                                                                                                )
                                                                                                        },
                                                                                                    body: JSON.stringify(
                                                                                                        n
                                                                                                    )
                                                                                                }
                                                                                            )
                                                                                        );
                                                                                    case 3:
                                                                                        return (
                                                                                            (e =
                                                                                                t.sent),
                                                                                            (t.next = 6),
                                                                                            e.json()
                                                                                        );
                                                                                    case 6:
                                                                                        t.sent,
                                                                                            200 ===
                                                                                                e.status &&
                                                                                                ((r.acf =
                                                                                                    x(
                                                                                                        {},
                                                                                                        n.acf
                                                                                                    )),
                                                                                                s(
                                                                                                    r
                                                                                                ));
                                                                                    case 8:
                                                                                    case 'end':
                                                                                        return t.stop();
                                                                                }
                                                                        },
                                                                        t);
                                                                    })
                                                                )();
                                                            } catch (t) {}
                                                        })(),
                                                            w(!1);
                                                    },
                                                    children: 'Save'
                                                })
                                            })
                                    ]
                                })
                            ]
                        }),
                        (0, v.jsxs)('div', {
                            className: u()['delete-wrapper'],
                            children: [
                                m &&
                                    (0, v.jsxs)('div', {
                                        className: u()['delete-confirm-buttons'],
                                        children: [
                                            (0, v.jsx)('button', {
                                                role: 'button',
                                                onClick: function () {
                                                    return b(!1);
                                                },
                                                children: 'Cancel'
                                            }),
                                            (0, v.jsx)(l.Z, {
                                                onClick: function () {
                                                    Z(!0),
                                                        fetch(
                                                            ''
                                                                .concat(
                                                                    f.y.v2,
                                                                    '/warehouse-products/'
                                                                )
                                                                .concat(r.id),
                                                            {
                                                                method: 'DELETE',
                                                                headers: {
                                                                    Accept: 'application/json',
                                                                    'Content-Type':
                                                                        'application/json',
                                                                    Authorization: 'Bearer '.concat(
                                                                        localStorage.getItem('jwt')
                                                                    )
                                                                }
                                                            }
                                                        )
                                                            .then(function (t) {
                                                                return t.json();
                                                            })
                                                            .then(function () {
                                                                Z(!1), c(r.id);
                                                            }),
                                                        w(!1),
                                                        b(!1);
                                                },
                                                text: 'Delete'
                                            })
                                        ]
                                    }),
                                g &&
                                    !m &&
                                    (0, v.jsx)(d.Z, {
                                        style: { fontSize: '25px', marginRight: '10px' },
                                        onClick: function () {
                                            return b(!0);
                                        }
                                    }),
                                !m &&
                                    (0, v.jsx)(p.Z, {
                                        style: { fontSize: '25px' },
                                        onClick: function () {
                                            return w(!g);
                                        }
                                    })
                            ]
                        }),
                        E && (0, v.jsx)(h.Z, {})
                    ]
                });
            };
        },
        3084: function (t, n, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/warehouse/lib/Product',
                function () {
                    return e(663);
                }
            ]);
        },
        5953: function (t) {
            t.exports = { button: 'Button_button__2GrU7' };
        },
        5450: function (t) {
            t.exports = {
                'loading-wrapper': 'Loading_loading-wrapper__2ll_v',
                rotating: 'Loading_rotating__1b17O'
            };
        },
        1356: function (t) {
            t.exports = {
                'product-wrapper': 'Product_product-wrapper__AyqaY',
                'delete-wrapper': 'Product_delete-wrapper__2bfFt',
                'qty-action': 'Product_qty-action__2Vqct',
                'qty-input': 'Product_qty-input___d4yv',
                'qty-wrapper': 'Product_qty-wrapper__1bYHA',
                'delete-confirm-buttons': 'Product_delete-confirm-buttons__1oGD5',
                'product-info': 'Product_product-info__gMK4Y'
            };
        },
        266: function (t, n, e) {
            'use strict';
            function r(t, n, e, r, o, c, i) {
                try {
                    var a = t[c](i),
                        s = a.value;
                } catch (u) {
                    return void e(u);
                }
                a.done ? n(s) : Promise.resolve(s).then(r, o);
            }
            function o(t) {
                return function () {
                    var n = this,
                        e = arguments;
                    return new Promise(function (o, c) {
                        var i = t.apply(n, e);
                        function a(t) {
                            r(i, o, c, a, s, 'next', t);
                        }
                        function s(t) {
                            r(i, o, c, a, s, 'throw', t);
                        }
                        a(void 0);
                    });
                };
            }
            e.d(n, {
                Z: function () {
                    return o;
                }
            });
        }
    },
    function (t) {
        t.O(0, [678, 774, 888, 179], function () {
            return (n = 3084), t((t.s = n));
            var n;
        });
        var n = t.O();
        _N_E = n;
    }
]);
