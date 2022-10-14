(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [987],
    {
        1180: function (t, e, n) {
            'use strict';
            var o = n(5953),
                i = n.n(o),
                r = n(5893);
            e.Z = function (t) {
                var e = t.text,
                    n = t.type,
                    o = t.onClick;
                return (0, r.jsx)('button', {
                    className: i().button,
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
                        o();
                    },
                    children: e
                });
            };
        },
        6836: function (t, e, n) {
            'use strict';
            n.r(e),
                n.d(e, {
                    __N_SSP: function () {
                        return v;
                    }
                });
            var o = n(2809),
                i = n(1508),
                r = n(266),
                s = n(809),
                c = n.n(s),
                a = n(7294),
                u = n(6185),
                l = n(8954),
                d = n(5703),
                p = n(2273),
                f = n.n(p),
                h = n(2579),
                j = n(2345),
                g = n(8002),
                _ = n(5893);
            function x(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e &&
                        (o = o.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, o);
                }
                return n;
            }
            function m(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? x(Object(n), !0).forEach(function (e) {
                              (0, o.Z)(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : x(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          });
                }
                return t;
            }
            var v = !0;
            e.default = function (t) {
                var e = t.shoppingList,
                    n = (0, a.useState)(e),
                    o = n[0],
                    s = n[1],
                    p = (0, a.useState)(!1),
                    x = p[0],
                    v = p[1],
                    b = (0, a.useState)(''),
                    y = b[0],
                    S = b[1],
                    w = (0, a.useState)(!1),
                    O = w[0],
                    C = w[1],
                    k = (0, a.useState)(''),
                    N = k[0],
                    Z = k[1],
                    P = (0, a.useState)('success'),
                    D = P[0],
                    T = P[1],
                    E = function (t, e, n) {
                        C(t), Z(e), T(n), z();
                    },
                    z = function () {
                        setTimeout(function () {
                            C(!1);
                        }, 2500);
                    },
                    A = (0, a.useMemo)(
                        function () {
                            return o
                                .sort(function (t, e) {
                                    return new Date(e.date).getTime() - new Date(t.date).getTime();
                                })
                                .map(function (t, e) {
                                    return (0, _.jsx)(
                                        g.default,
                                        {
                                            list: t,
                                            onUpdate: function (t, e) {
                                                return (function (t, e) {
                                                    E(
                                                        !0,
                                                        'Shopping list has been updated',
                                                        'success'
                                                    ),
                                                        s(
                                                            (0, i.Z)(
                                                                o.filter(function (t) {
                                                                    return t.id !== e;
                                                                })
                                                            )
                                                        ),
                                                        s(
                                                            o.map(function (n) {
                                                                return n.id === e
                                                                    ? m(
                                                                          m({}, n),
                                                                          {},
                                                                          { content: t }
                                                                      )
                                                                    : n;
                                                            })
                                                        );
                                                })(t, e);
                                            },
                                            onDelete: function (t) {
                                                return (function (t) {
                                                    E(
                                                        !0,
                                                        'Shopping list has been deleted',
                                                        'danger'
                                                    ),
                                                        s(
                                                            (0, i.Z)(
                                                                o.filter(function (e) {
                                                                    return e.id !== t;
                                                                })
                                                            )
                                                        );
                                                })(t);
                                            }
                                        },
                                        e
                                    );
                                });
                        },
                        [o]
                    );
                return (0, _.jsx)(d.Z, {
                    title: 'TODO',
                    children: (0, _.jsxs)(_.Fragment, {
                        children: [
                            (0, _.jsxs)('div', {
                                className: f().header,
                                children: [
                                    (0, _.jsx)('h1', { children: 'Shopping list' }),
                                    (0, _.jsx)(h.Z, {
                                        twoToneColor: '#29d315',
                                        style: { fontSize: '30px', marginBottom: '15px' },
                                        onClick: function () {
                                            return v(!x);
                                        }
                                    }),
                                    x &&
                                        (0, _.jsx)('div', {
                                            children: (0, _.jsxs)('div', {
                                                className: f().list,
                                                children: [
                                                    (0, _.jsx)('textarea', {
                                                        rows: 10,
                                                        placeholder:
                                                            'Shopping list... \ud83d\udc2a \ud83c\udf33 \ud83d\udc2a',
                                                        onChange: function (t) {
                                                            return S(t.target.value);
                                                        }
                                                    }),
                                                    (0, _.jsx)('button', {
                                                        type: 'button',
                                                        className: f()['save-list'],
                                                        onClick: function () {
                                                            return (function () {
                                                                try {
                                                                    (0, r.Z)(
                                                                        c().mark(function t() {
                                                                            var e, n;
                                                                            return c().wrap(
                                                                                function (t) {
                                                                                    for (;;)
                                                                                        switch (
                                                                                            (t.prev =
                                                                                                t.next)
                                                                                        ) {
                                                                                            case 0:
                                                                                                return (
                                                                                                    (t.next = 2),
                                                                                                    fetch(
                                                                                                        ''.concat(
                                                                                                            j
                                                                                                                .y
                                                                                                                .v2,
                                                                                                            '/shopping-list'
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
                                                                                                                {
                                                                                                                    content:
                                                                                                                        y,
                                                                                                                    status: 'publish',
                                                                                                                    title: 'List'
                                                                                                                }
                                                                                                            )
                                                                                                        }
                                                                                                    )
                                                                                                );
                                                                                            case 2:
                                                                                                return (
                                                                                                    (e =
                                                                                                        t.sent),
                                                                                                    (t.next = 5),
                                                                                                    e.json()
                                                                                                );
                                                                                            case 5:
                                                                                                (n =
                                                                                                    t.sent),
                                                                                                    201 ===
                                                                                                        e.status &&
                                                                                                        (E(
                                                                                                            !0,
                                                                                                            'New shopping list has been added',
                                                                                                            'success'
                                                                                                        ),
                                                                                                        v(
                                                                                                            !1
                                                                                                        ),
                                                                                                        S(
                                                                                                            ''
                                                                                                        ),
                                                                                                        s(
                                                                                                            [].concat(
                                                                                                                (0,
                                                                                                                i.Z)(
                                                                                                                    o
                                                                                                                ),
                                                                                                                [
                                                                                                                    {
                                                                                                                        content:
                                                                                                                            y,
                                                                                                                        id: n.id,
                                                                                                                        date: n.date
                                                                                                                    }
                                                                                                                ]
                                                                                                            )
                                                                                                        ));
                                                                                            case 7:
                                                                                            case 'end':
                                                                                                return t.stop();
                                                                                        }
                                                                                },
                                                                                t
                                                                            );
                                                                        })
                                                                    )();
                                                                } catch (t) {}
                                                            })();
                                                        },
                                                        children: 'Add'
                                                    })
                                                ]
                                            })
                                        }),
                                    (0, _.jsx)('div', {
                                        className: f()['header-image'],
                                        children: (0, _.jsx)(u.Z, { name: 'bill', size: 50 })
                                    })
                                ]
                            }),
                            (0, _.jsx)('div', { children: A }),
                            O && (0, _.jsx)(l.Z, { type: D, text: N })
                        ]
                    })
                });
            };
        },
        8002: function (t, e, n) {
            'use strict';
            n.r(e);
            var o = n(266),
                i = n(809),
                r = n.n(i),
                s = n(7294),
                c = n(3544),
                a = n.n(c),
                u = n(3171),
                l = n(8212),
                d = n(2944),
                p = n(2345),
                f = n(1180),
                h = n(5893);
            e.default = function (t) {
                var e = t.list,
                    n = t.onUpdate,
                    i = t.onDelete,
                    c = (0, s.useState)(!1),
                    j = c[0],
                    g = c[1],
                    _ = (0, s.useState)(!1),
                    x = _[0],
                    m = _[1],
                    v = (0, s.useState)(!1),
                    b = v[0],
                    y = v[1],
                    S = (0, s.useState)(null === e || void 0 === e ? void 0 : e.content),
                    w = S[0],
                    O = S[1];
                return (0, h.jsxs)('div', {
                    className: a()['single-list'],
                    children: [
                        (0, h.jsx)('h4', { children: '\ud83d\uded2 \ud83d\udecd' }),
                        (0, h.jsx)('div', {
                            className: a()['list-content'],
                            children: j
                                ? (0, h.jsxs)(h.Fragment, {
                                      children: [
                                          (0, h.jsx)('textarea', {
                                              rows: 10,
                                              style: { fontFamily: 'monospace ' },
                                              placeholder: 'Przygotowanie...',
                                              defaultValue:
                                                  null === e || void 0 === e ? void 0 : e.content,
                                              onChange: function (t) {
                                                  return O(t.target.value);
                                              }
                                          }),
                                          (0, h.jsx)(f.Z, {
                                              onClick: function () {
                                                  return (function () {
                                                      try {
                                                          (0, o.Z)(
                                                              r().mark(function t() {
                                                                  var o;
                                                                  return r().wrap(function (t) {
                                                                      for (;;)
                                                                          switch (
                                                                              (t.prev = t.next)
                                                                          ) {
                                                                              case 0:
                                                                                  return (
                                                                                      (t.next = 2),
                                                                                      fetch(
                                                                                          ''
                                                                                              .concat(
                                                                                                  p
                                                                                                      .y
                                                                                                      .v2,
                                                                                                  '/shopping-list/'
                                                                                              )
                                                                                              .concat(
                                                                                                  null ===
                                                                                                      e ||
                                                                                                      void 0 ===
                                                                                                          e
                                                                                                      ? void 0
                                                                                                      : e.id
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
                                                                                                  {
                                                                                                      content:
                                                                                                          w
                                                                                                  }
                                                                                              )
                                                                                          }
                                                                                      )
                                                                                  );
                                                                              case 2:
                                                                                  return (
                                                                                      (o = t.sent),
                                                                                      (t.next = 5),
                                                                                      o.json()
                                                                                  );
                                                                              case 5:
                                                                                  t.sent,
                                                                                      200 ===
                                                                                          o.status &&
                                                                                          (g(!1),
                                                                                          n(
                                                                                              w,
                                                                                              e.id
                                                                                          ));
                                                                              case 7:
                                                                              case 'end':
                                                                                  return t.stop();
                                                                          }
                                                                  }, t);
                                                              })
                                                          )();
                                                      } catch (t) {}
                                                  })();
                                              },
                                              type: 'success',
                                              text: 'Save'
                                          })
                                      ]
                                  })
                                : (0, h.jsx)('strong', {
                                      style: { fontFamily: 'monospace', lineHeight: '1.8em' },
                                      children: null === e || void 0 === e ? void 0 : e.content
                                  })
                        }),
                        (0, h.jsxs)('div', {
                            className: a()['delete-wrapper'],
                            children: [
                                x &&
                                    (0, h.jsxs)('div', {
                                        className: a()['delete-confirm-buttons'],
                                        children: [
                                            (0, h.jsx)('button', {
                                                role: 'button',
                                                onClick: function () {
                                                    return m(!1);
                                                },
                                                children: 'Cancel'
                                            }),
                                            (0, h.jsx)('button', {
                                                onClick: function () {
                                                    return (
                                                        y(!0),
                                                        void fetch(
                                                            ''
                                                                .concat(p.y.v2, '/shopping-list/')
                                                                .concat(e.id),
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
                                                                y(!1), m(!1), g(!1), i(e.id);
                                                            })
                                                    );
                                                },
                                                children: 'Delete'
                                            })
                                        ]
                                    }),
                                j &&
                                    !x &&
                                    (0, h.jsx)(u.Z, {
                                        style: { fontSize: '25px', marginRight: '10px' },
                                        onClick: function () {
                                            return m(!0);
                                        }
                                    }),
                                !x &&
                                    (0, h.jsx)(l.Z, {
                                        style: { fontSize: '25px' },
                                        onClick: function () {
                                            return g(!j);
                                        }
                                    })
                            ]
                        }),
                        b && (0, h.jsx)(d.Z, {})
                    ]
                });
            };
        },
        6264: function (t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/shopping',
                function () {
                    return n(6836);
                }
            ]);
        },
        5953: function (t) {
            t.exports = { button: 'Button_button__2GrU7' };
        },
        2273: function (t) {
            t.exports = {
                products: 'Shopping_products__23Pir',
                'add-product-form': 'Shopping_add-product-form__1kdEC',
                header: 'Shopping_header__1y6th',
                'header-image': 'Shopping_header-image__jalDD',
                list: 'Shopping_list__3ZsIh',
                'save-list': 'Shopping_save-list__3wjSr'
            };
        },
        3544: function (t) {
            t.exports = {
                'single-list': 'List_single-list__3M-ee',
                'list-content': 'List_list-content__3vYk7',
                'delete-wrapper': 'List_delete-wrapper__1C9qe',
                'delete-confirm-buttons': 'List_delete-confirm-buttons__X_MCX'
            };
        }
    },
    function (t) {
        t.O(0, [678, 913, 774, 888, 179], function () {
            return (e = 6264), t((t.s = e));
            var e;
        });
        var e = t.O();
        _N_E = e;
    }
]);
