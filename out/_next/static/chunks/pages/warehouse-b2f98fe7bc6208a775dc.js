(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [870],
    {
        1180: function (e, t, n) {
            'use strict';
            var r = n(5953),
                o = n.n(r),
                c = n(5893);
            t.Z = function (e) {
                var t = e.text,
                    n = e.type,
                    r = e.onClick;
                return (0, c.jsx)('button', {
                    className: o().button,
                    style: {
                        backgroundColor: (function () {
                            switch (n) {
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
                    children: t
                });
            };
        },
        7694: function (e, t, n) {
            'use strict';
            var r = n(7294),
                o = n(1877),
                c = n.n(o),
                a = n(5893);
            t.Z = function (e) {
                var t = e.type,
                    n = e.placeholder,
                    o = void 0 === n ? '' : n,
                    u = e.onChange,
                    s = (e.onFocus, (0, r.useState)('')),
                    i = s[0],
                    d = s[1],
                    l = (0, r.useRef)(null);
                return (0, a.jsx)('input', {
                    className: c().input,
                    type: t,
                    ref: l,
                    value: i,
                    onChange: function (e) {
                        var t = e.target.value;
                        d(t), u(t);
                    },
                    placeholder: o
                });
            };
        },
        6091: function (e, t, n) {
            'use strict';
            n.r(t),
                n.d(t, {
                    __N_SSP: function () {
                        return b;
                    }
                });
            var r = n(2809),
                o = n(266),
                c = n(1508),
                a = n(809),
                u = n.n(a),
                s = n(6185),
                i = n(7694),
                d = n(1180),
                l = n(8954),
                p = n(5703),
                f = n(663),
                h = n(3858),
                j = n.n(h),
                x = n(2579),
                _ = n(7294),
                m = n(2345),
                v = n(5893);
            function y(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? y(Object(n), !0).forEach(function (t) {
                              (0, r.Z)(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : y(Object(n)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                }
                return e;
            }
            var b = !0;
            t.default = function (e) {
                var t = e.products,
                    n = (0, _.useState)([]),
                    r = n[0],
                    a = n[1],
                    h = (0, _.useState)(!1),
                    y = h[0],
                    b = h[1],
                    w = (0, _.useState)(''),
                    O = w[0],
                    P = w[1],
                    S = (0, _.useState)(''),
                    k = S[0],
                    C = S[1],
                    N = (0, _.useState)(0),
                    Z = N[0],
                    q = N[1],
                    D = (0, _.useState)(''),
                    E = (D[0], D[1]),
                    T = (0, _.useState)(!1),
                    A = T[0],
                    z = T[1],
                    B = (0, _.useState)(''),
                    F = B[0],
                    I = B[1],
                    W = (0, _.useState)('success'),
                    Y = W[0],
                    R = W[1];
                (0, _.useEffect)(
                    function () {
                        a((0, c.Z)(t));
                    },
                    [t]
                );
                var U = function (e, t, n) {
                        z(e), I(t), R(n), X();
                    },
                    X = function () {
                        setTimeout(function () {
                            z(!1);
                        }, 2500);
                    },
                    G = (0, _.useMemo)(
                        function () {
                            return r
                                .sort(function (e, t) {
                                    return e.name.localeCompare(t.name);
                                })
                                .map(function (e, t) {
                                    return (0, v.jsx)(
                                        f.default,
                                        {
                                            product: e,
                                            onUpdate: function (e) {
                                                return (function (e) {
                                                    U(!0, 'Product has been updated', 'success'),
                                                        a(
                                                            r.map(function (t) {
                                                                return t.id == e.id ? e : t;
                                                            })
                                                        );
                                                })(e);
                                            },
                                            onDelete: function (e) {
                                                return (function (e) {
                                                    U(!0, 'Product has been deleted', 'danger'),
                                                        a(
                                                            (0, c.Z)(
                                                                r.filter(function (t) {
                                                                    return t.id !== e;
                                                                })
                                                            )
                                                        );
                                                })(e);
                                            }
                                        },
                                        t
                                    );
                                });
                        },
                        [r]
                    );
                return (0, v.jsx)(p.Z, {
                    title: 'TODO',
                    children: (0, v.jsxs)(v.Fragment, {
                        children: [
                            (0, v.jsxs)('div', {
                                className: j().header,
                                children: [
                                    (0, v.jsx)('h1', { children: 'Food stock' }),
                                    (0, v.jsx)(x.Z, {
                                        twoToneColor: '#29d315',
                                        style: { fontSize: '30px', marginBottom: '15px' },
                                        onClick: function () {
                                            return b(!y);
                                        }
                                    }),
                                    y &&
                                        (0, v.jsx)('div', {
                                            children: (0, v.jsxs)('div', {
                                                className: j()['add-product-form'],
                                                children: [
                                                    (0, v.jsx)(i.Z, {
                                                        placeholder: 'Product name (e.g. Rice)',
                                                        type: 'text',
                                                        onChange: function (e) {
                                                            return P(e);
                                                        }
                                                    }),
                                                    (0, v.jsx)(i.Z, {
                                                        placeholder: 'Package (e.g. 10kg)',
                                                        type: 'text',
                                                        onChange: function (e) {
                                                            return C(e);
                                                        }
                                                    }),
                                                    (0, v.jsx)(i.Z, {
                                                        placeholder: 'Available (e.g. 25)',
                                                        type: 'number',
                                                        onChange: function (e) {
                                                            return q(parseInt(e));
                                                        }
                                                    }),
                                                    (0, v.jsx)(d.Z, {
                                                        onClick: function () {
                                                            return (function (e) {
                                                                try {
                                                                    (0, o.Z)(
                                                                        u().mark(function t() {
                                                                            var n, o, s;
                                                                            return u().wrap(
                                                                                function (t) {
                                                                                    for (;;)
                                                                                        switch (
                                                                                            (t.prev =
                                                                                                t.next)
                                                                                        ) {
                                                                                            case 0:
                                                                                                return (
                                                                                                    (n =
                                                                                                        {
                                                                                                            title: O,
                                                                                                            acf: {
                                                                                                                warehouse_product_quantity:
                                                                                                                    Z,
                                                                                                                warehouse_product_package:
                                                                                                                    k
                                                                                                            },
                                                                                                            status: 'publish'
                                                                                                        }),
                                                                                                    (t.next = 3),
                                                                                                    fetch(
                                                                                                        ''
                                                                                                            .concat(
                                                                                                                m
                                                                                                                    .y
                                                                                                                    .v2,
                                                                                                                '/warehouse-products/'
                                                                                                            )
                                                                                                            .concat(
                                                                                                                e
                                                                                                                    ? e.id
                                                                                                                    : ''
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
                                                                                                    (o =
                                                                                                        t.sent),
                                                                                                    (t.next = 6),
                                                                                                    o.json()
                                                                                                );
                                                                                            case 6:
                                                                                                (s =
                                                                                                    t.sent),
                                                                                                    201 ===
                                                                                                    o.status
                                                                                                        ? (U(
                                                                                                              !0,
                                                                                                              'New product has been added',
                                                                                                              'success'
                                                                                                          ),
                                                                                                          a(
                                                                                                              [].concat(
                                                                                                                  (0,
                                                                                                                  c.Z)(
                                                                                                                      r
                                                                                                                  ),
                                                                                                                  [
                                                                                                                      g(
                                                                                                                          g(
                                                                                                                              {},
                                                                                                                              n
                                                                                                                          ),
                                                                                                                          {},
                                                                                                                          {
                                                                                                                              id: s.id,
                                                                                                                              name: O,
                                                                                                                              acf: {
                                                                                                                                  warehouse_product_quantity:
                                                                                                                                      Z,
                                                                                                                                  warehouse_product_package:
                                                                                                                                      k
                                                                                                                              },
                                                                                                                              image: ''
                                                                                                                          }
                                                                                                                      )
                                                                                                                  ]
                                                                                                              )
                                                                                                          ),
                                                                                                          b(
                                                                                                              !1
                                                                                                          ),
                                                                                                          P(
                                                                                                              ''
                                                                                                          ),
                                                                                                          C(
                                                                                                              ''
                                                                                                          ),
                                                                                                          q(
                                                                                                              null
                                                                                                          ))
                                                                                                        : E(
                                                                                                              null ===
                                                                                                                  s ||
                                                                                                                  void 0 ===
                                                                                                                      s
                                                                                                                  ? void 0
                                                                                                                  : s.message
                                                                                                          );
                                                                                            case 8:
                                                                                            case 'end':
                                                                                                return t.stop();
                                                                                        }
                                                                                },
                                                                                t
                                                                            );
                                                                        })
                                                                    )();
                                                                } catch (t) {
                                                                    E(
                                                                        'Could not register new user. Please try again later or contact our support.'
                                                                    );
                                                                }
                                                            })();
                                                        },
                                                        text: 'Add'
                                                    })
                                                ]
                                            })
                                        }),
                                    (0, v.jsx)('div', {
                                        className: j()['header-image'],
                                        children: (0, v.jsx)(s.Z, { name: 'warehouse', size: 50 })
                                    })
                                ]
                            }),
                            (0, v.jsx)('div', { className: j().products, children: G }),
                            A && (0, v.jsx)(l.Z, { type: Y, text: F })
                        ]
                    })
                });
            };
        },
        663: function (e, t, n) {
            'use strict';
            n.r(t);
            var r = n(2809),
                o = n(266),
                c = n(809),
                a = n.n(c),
                u = n(7294),
                s = n(1356),
                i = n.n(s),
                d = n(1180),
                l = n(8212),
                p = n(3171),
                f = n(2345),
                h = n(2944),
                j = n(5893),
                x = void 0;
            function _(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? _(Object(n), !0).forEach(function (t) {
                              (0, r.Z)(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : _(Object(n)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                }
                return e;
            }
            t.default = function (e) {
                var t,
                    n,
                    r = e.product,
                    c = e.onDelete,
                    s = e.onUpdate,
                    _ = (0, u.useState)(!1),
                    v = _[0],
                    y = _[1],
                    g = (0, u.useState)(!1),
                    b = g[0],
                    w = g[1],
                    O = (0, u.useState)(
                        null === r || void 0 === r || null === (t = r.acf) || void 0 === t
                            ? void 0
                            : t.warehouse_product_package
                    ),
                    P = O[0],
                    S = O[1],
                    k = (0, u.useState)(
                        parseFloat(
                            null === r || void 0 === r || null === (n = r.acf) || void 0 === n
                                ? void 0
                                : n.warehouse_product_quantity.toString()
                        )
                    ),
                    C = k[0],
                    N = k[1],
                    Z = (0, u.useState)(!1),
                    q = Z[0],
                    D = Z[1];
                return (0, j.jsxs)('div', {
                    className: i()['product-wrapper'],
                    children: [
                        (0, j.jsx)('h4', {
                            children: null === r || void 0 === r ? void 0 : r.name
                        }),
                        (0, j.jsxs)('div', {
                            className: i()['product-info'],
                            children: [
                                (0, j.jsx)('img', {
                                    src:
                                        (null === r || void 0 === r ? void 0 : r.image) ||
                                        '/assets/products/placeholder.svg',
                                    width: '75',
                                    height: '75',
                                    alt: ''
                                }),
                                (0, j.jsxs)('ul', {
                                    children: [
                                        (0, j.jsx)('li', {
                                            children: (0, j.jsxs)('span', {
                                                children: [
                                                    'Package:',
                                                    ' ',
                                                    v
                                                        ? (0, j.jsx)('input', {
                                                              type: 'text',
                                                              className: 'mm-input',
                                                              style: { marginBottom: '10px' },
                                                              defaultValue:
                                                                  null === r || void 0 === r
                                                                      ? void 0
                                                                      : r.acf
                                                                            .warehouse_product_package,
                                                              onChange: function (e) {
                                                                  return S(e.target.value);
                                                              }
                                                          })
                                                        : (0, j.jsx)('strong', { children: P })
                                                ]
                                            })
                                        }),
                                        (0, j.jsx)('li', {
                                            children: (0, j.jsxs)('span', {
                                                children: [
                                                    'Available:',
                                                    ' ',
                                                    v
                                                        ? (0, j.jsxs)('div', {
                                                              className: i()['qty-wrapper'],
                                                              children: [
                                                                  (0, j.jsx)('div', {
                                                                      className: i()['qty-action'],
                                                                      role: 'button',
                                                                      onClick: function () {
                                                                          return C <= 0
                                                                              ? {}
                                                                              : N(C - 1);
                                                                      },
                                                                      children: (0, j.jsx)('span', {
                                                                          children: '-'
                                                                      })
                                                                  }),
                                                                  (0, j.jsx)('div', {
                                                                      children: (0, j.jsx)(
                                                                          'input',
                                                                          {
                                                                              type: 'number',
                                                                              className:
                                                                                  i()['qty-input'],
                                                                              min: '0',
                                                                              value: C,
                                                                              onChange: function (
                                                                                  e
                                                                              ) {
                                                                                  null === x ||
                                                                                      void 0 ===
                                                                                          x ||
                                                                                      x.inputChangedHandler(
                                                                                          e
                                                                                      );
                                                                              }
                                                                          }
                                                                      )
                                                                  }),
                                                                  (0, j.jsx)('div', {
                                                                      className: i()['qty-action'],
                                                                      role: 'button',
                                                                      onClick: function () {
                                                                          return N(C + 1);
                                                                      },
                                                                      children: (0, j.jsx)('span', {
                                                                          children: '+'
                                                                      })
                                                                  })
                                                              ]
                                                          })
                                                        : (0, j.jsx)('strong', { children: C })
                                                ]
                                            })
                                        }),
                                        v &&
                                            (0, j.jsx)('li', {
                                                children: (0, j.jsx)('button', {
                                                    type: 'button',
                                                    className: 'mm-btn-success',
                                                    style: { marginTop: '15px', minWidth: '110px' },
                                                    onClick: function () {
                                                        !(function () {
                                                            try {
                                                                (0, o.Z)(
                                                                    a().mark(function e() {
                                                                        var t, n;
                                                                        return a().wrap(function (
                                                                            e
                                                                        ) {
                                                                            for (;;)
                                                                                switch (
                                                                                    (e.prev =
                                                                                        e.next)
                                                                                ) {
                                                                                    case 0:
                                                                                        return (
                                                                                            (t = {
                                                                                                acf: {
                                                                                                    warehouse_product_quantity:
                                                                                                        C,
                                                                                                    warehouse_product_package:
                                                                                                        P
                                                                                                }
                                                                                            }),
                                                                                            (e.next = 3),
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
                                                                                                        t
                                                                                                    )
                                                                                                }
                                                                                            )
                                                                                        );
                                                                                    case 3:
                                                                                        return (
                                                                                            (n =
                                                                                                e.sent),
                                                                                            (e.next = 6),
                                                                                            n.json()
                                                                                        );
                                                                                    case 6:
                                                                                        e.sent,
                                                                                            200 ===
                                                                                                n.status &&
                                                                                                ((r.acf =
                                                                                                    m(
                                                                                                        {},
                                                                                                        t.acf
                                                                                                    )),
                                                                                                s(
                                                                                                    r
                                                                                                ));
                                                                                    case 8:
                                                                                    case 'end':
                                                                                        return e.stop();
                                                                                }
                                                                        },
                                                                        e);
                                                                    })
                                                                )();
                                                            } catch (e) {}
                                                        })(),
                                                            y(!1);
                                                    },
                                                    children: 'Save'
                                                })
                                            })
                                    ]
                                })
                            ]
                        }),
                        (0, j.jsxs)('div', {
                            className: i()['delete-wrapper'],
                            children: [
                                b &&
                                    (0, j.jsxs)('div', {
                                        className: i()['delete-confirm-buttons'],
                                        children: [
                                            (0, j.jsx)('button', {
                                                role: 'button',
                                                onClick: function () {
                                                    return w(!1);
                                                },
                                                children: 'Cancel'
                                            }),
                                            (0, j.jsx)(d.Z, {
                                                onClick: function () {
                                                    D(!0),
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
                                                            .then(function (e) {
                                                                return e.json();
                                                            })
                                                            .then(function () {
                                                                D(!1), c(r.id);
                                                            }),
                                                        y(!1),
                                                        w(!1);
                                                },
                                                text: 'Delete'
                                            })
                                        ]
                                    }),
                                v &&
                                    !b &&
                                    (0, j.jsx)(p.Z, {
                                        style: { fontSize: '25px', marginRight: '10px' },
                                        onClick: function () {
                                            return w(!0);
                                        }
                                    }),
                                !b &&
                                    (0, j.jsx)(l.Z, {
                                        style: { fontSize: '25px' },
                                        onClick: function () {
                                            return y(!v);
                                        }
                                    })
                            ]
                        }),
                        q && (0, j.jsx)(h.Z, {})
                    ]
                });
            };
        },
        2220: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/warehouse',
                function () {
                    return n(6091);
                }
            ]);
        },
        5953: function (e) {
            e.exports = { button: 'Button_button__2GrU7' };
        },
        1877: function (e) {
            e.exports = { input: 'Input_input__3kQNz' };
        },
        3858: function (e) {
            e.exports = {
                products: 'Warehouse_products__1L6Yc',
                'add-product-form': 'Warehouse_add-product-form__sCzEB',
                header: 'Warehouse_header__1d8aX',
                'header-image': 'Warehouse_header-image__1caxx'
            };
        },
        1356: function (e) {
            e.exports = {
                'product-wrapper': 'Product_product-wrapper__AyqaY',
                'delete-wrapper': 'Product_delete-wrapper__2bfFt',
                'qty-action': 'Product_qty-action__2Vqct',
                'qty-input': 'Product_qty-input___d4yv',
                'qty-wrapper': 'Product_qty-wrapper__1bYHA',
                'delete-confirm-buttons': 'Product_delete-confirm-buttons__1oGD5',
                'product-info': 'Product_product-info__gMK4Y'
            };
        }
    },
    function (e) {
        e.O(0, [678, 913, 774, 888, 179], function () {
            return (t = 2220), e((e.s = t));
            var t;
        });
        var t = e.O();
        _N_E = t;
    }
]);
