(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [903],
    {
        1180: function (t, n, e) {
            'use strict';
            var o = e(5953),
                i = e.n(o),
                r = e(5893);
            n.Z = function (t) {
                var n = t.text,
                    e = t.type,
                    o = t.onClick;
                return (0, r.jsx)('button', {
                    className: i().button,
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
                        o();
                    },
                    children: n
                });
            };
        },
        2944: function (t, n, e) {
            'use strict';
            var o = e(5523),
                i = (e(7294), e(5450)),
                r = e.n(i),
                s = e(5893);
            n.Z = function (t) {
                return (
                    (0, o.Z)(t),
                    (0, s.jsx)('div', {
                        className: r()['loading-wrapper'],
                        children: (0, s.jsx)('img', {
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
                    return o;
                }
            });
            var o = {
                dev: 'https://homeplanner.prgr.pl/core/wp-json/wl/v1',
                v2: 'https://homeplanner.prgr.pl/core/wp-json/wp/v2'
            };
        },
        8002: function (t, n, e) {
            'use strict';
            e.r(n);
            var o = e(266),
                i = e(809),
                r = e.n(i),
                s = e(7294),
                c = e(3544),
                a = e.n(c),
                u = e(3171),
                l = e(8212),
                d = e(2944),
                p = e(2345),
                f = e(1180),
                h = e(5893);
            n.default = function (t) {
                var n = t.list,
                    e = t.onUpdate,
                    i = t.onDelete,
                    c = (0, s.useState)(!1),
                    v = c[0],
                    _ = c[1],
                    g = (0, s.useState)(!1),
                    x = g[0],
                    j = g[1],
                    m = (0, s.useState)(!1),
                    w = m[0],
                    y = m[1],
                    b = (0, s.useState)(null === n || void 0 === n ? void 0 : n.content),
                    C = b[0],
                    k = b[1];
                return (0, h.jsxs)('div', {
                    className: a()['single-list'],
                    children: [
                        (0, h.jsx)('h4', { children: '\ud83d\uded2 \ud83d\udecd' }),
                        (0, h.jsx)('div', {
                            className: a()['list-content'],
                            children: v
                                ? (0, h.jsxs)(h.Fragment, {
                                      children: [
                                          (0, h.jsx)('textarea', {
                                              rows: 10,
                                              style: { fontFamily: 'monospace ' },
                                              placeholder: 'Przygotowanie...',
                                              defaultValue:
                                                  null === n || void 0 === n ? void 0 : n.content,
                                              onChange: function (t) {
                                                  return k(t.target.value);
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
                                                                                                      n ||
                                                                                                      void 0 ===
                                                                                                          n
                                                                                                      ? void 0
                                                                                                      : n.id
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
                                                                                                          C
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
                                                                                          (_(!1),
                                                                                          e(
                                                                                              C,
                                                                                              n.id
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
                                      children: null === n || void 0 === n ? void 0 : n.content
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
                                                    return j(!1);
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
                                                                .concat(n.id),
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
                                                                y(!1), j(!1), _(!1), i(n.id);
                                                            })
                                                    );
                                                },
                                                children: 'Delete'
                                            })
                                        ]
                                    }),
                                v &&
                                    !x &&
                                    (0, h.jsx)(u.Z, {
                                        style: { fontSize: '25px', marginRight: '10px' },
                                        onClick: function () {
                                            return j(!0);
                                        }
                                    }),
                                !x &&
                                    (0, h.jsx)(l.Z, {
                                        style: { fontSize: '25px' },
                                        onClick: function () {
                                            return _(!v);
                                        }
                                    })
                            ]
                        }),
                        w && (0, h.jsx)(d.Z, {})
                    ]
                });
            };
        },
        9123: function (t, n, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/shopping/lib/List',
                function () {
                    return e(8002);
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
        3544: function (t) {
            t.exports = {
                'single-list': 'List_single-list__3M-ee',
                'list-content': 'List_list-content__3vYk7',
                'delete-wrapper': 'List_delete-wrapper__1C9qe',
                'delete-confirm-buttons': 'List_delete-confirm-buttons__X_MCX'
            };
        },
        266: function (t, n, e) {
            'use strict';
            function o(t, n, e, o, i, r, s) {
                try {
                    var c = t[r](s),
                        a = c.value;
                } catch (u) {
                    return void e(u);
                }
                c.done ? n(a) : Promise.resolve(a).then(o, i);
            }
            function i(t) {
                return function () {
                    var n = this,
                        e = arguments;
                    return new Promise(function (i, r) {
                        var s = t.apply(n, e);
                        function c(t) {
                            o(s, i, r, c, a, 'next', t);
                        }
                        function a(t) {
                            o(s, i, r, c, a, 'throw', t);
                        }
                        c(void 0);
                    });
                };
            }
            e.d(n, {
                Z: function () {
                    return i;
                }
            });
        }
    },
    function (t) {
        t.O(0, [678, 774, 888, 179], function () {
            return (n = 9123), t((t.s = n));
            var n;
        });
        var n = t.O();
        _N_E = n;
    }
]);
