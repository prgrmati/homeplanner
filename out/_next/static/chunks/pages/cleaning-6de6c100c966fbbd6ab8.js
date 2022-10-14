(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [793],
    {
        7694: function (e, n, t) {
            'use strict';
            var a = t(7294),
                i = t(1877),
                c = t.n(i),
                r = t(5893);
            n.Z = function (e) {
                var n = e.type,
                    t = e.placeholder,
                    i = void 0 === t ? '' : t,
                    l = e.onChange,
                    o = (e.onFocus, (0, a.useState)('')),
                    s = o[0],
                    u = o[1],
                    d = (0, a.useRef)(null);
                return (0, r.jsx)('input', {
                    className: c().input,
                    type: n,
                    ref: d,
                    value: s,
                    onChange: function (e) {
                        var n = e.target.value;
                        u(n), l(n);
                    },
                    placeholder: i
                });
            };
        },
        4487: function (e, n, t) {
            'use strict';
            t.r(n),
                t.d(n, {
                    __N_SSP: function () {
                        return y;
                    }
                });
            var a = t(2809),
                i = t(1508),
                c = t(266),
                r = t(809),
                l = t.n(r),
                o = t(6185),
                s = t(5703),
                u = t(3393),
                d = t.n(u),
                f = t(2579),
                p = t(7294),
                h = t(1067),
                g = t(2345),
                v = t(7694),
                x = t(8954),
                m = t(5893);
            function j(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n &&
                        (a = a.filter(function (n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable;
                        })),
                        t.push.apply(t, a);
                }
                return t;
            }
            function _(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2
                        ? j(Object(t), !0).forEach(function (n) {
                              (0, a.Z)(e, n, t[n]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : j(Object(t)).forEach(function (n) {
                              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                          });
                }
                return e;
            }
            var y = !0;
            n.default = function (e) {
                var n = e.cleanings,
                    t = (0, p.useState)(n),
                    a = t[0],
                    r = t[1],
                    u = (0, p.useState)(!1),
                    j = u[0],
                    y = u[1],
                    C = (0, p.useState)(''),
                    b = C[0],
                    S = C[1],
                    w = (0, p.useState)(''),
                    O = w[0],
                    N = w[1],
                    Z = (0, p.useState)(''),
                    k = Z[0],
                    D = Z[1],
                    z = (0, p.useState)(!1),
                    E = z[0],
                    P = z[1],
                    T = (0, p.useState)(''),
                    R = T[0],
                    B = T[1],
                    A = (0, p.useState)('success'),
                    I = A[0],
                    M = A[1],
                    L = function (e, n, t) {
                        P(e), B(n), M(t), V();
                    },
                    V = function () {
                        setTimeout(function () {
                            P(!1);
                        }, 2500);
                    },
                    F = function (e) {
                        try {
                            (0, c.Z)(
                                l().mark(function n() {
                                    var t, c, o;
                                    return l().wrap(function (n) {
                                        for (;;)
                                            switch ((n.prev = n.next)) {
                                                case 0:
                                                    return (
                                                        (t = {
                                                            title: b,
                                                            acf: {
                                                                cleaning_cycle: O,
                                                                cleaning_last: k
                                                            },
                                                            status: 'publish'
                                                        }),
                                                        e &&
                                                            ((t.id = e.id),
                                                            (t.title = e.title),
                                                            (t.acf = {
                                                                cleaning_cycle: e.acf.cycle,
                                                                cleaning_last: e.acf.last
                                                            })),
                                                        (n.next = 4),
                                                        fetch(
                                                            ''
                                                                .concat(g.y.v2, '/cleanings/')
                                                                .concat(e ? e.id : ''),
                                                            {
                                                                method: 'POST',
                                                                headers: {
                                                                    Accept: 'application/json',
                                                                    'Content-Type':
                                                                        'application/json',
                                                                    Authorization: 'Bearer '.concat(
                                                                        localStorage.getItem('jwt')
                                                                    )
                                                                },
                                                                body: JSON.stringify(t)
                                                            }
                                                        )
                                                    );
                                                case 4:
                                                    return (c = n.sent), (n.next = 7), c.json();
                                                case 7:
                                                    (o = n.sent),
                                                        201 === c.status
                                                            ? (L(
                                                                  !0,
                                                                  'New room has been added',
                                                                  'success'
                                                              ),
                                                              r(
                                                                  [].concat((0, i.Z)(a), [
                                                                      _(
                                                                          _({}, t),
                                                                          {},
                                                                          {
                                                                              id: o.id,
                                                                              acf: {
                                                                                  cycle: O,
                                                                                  last: k
                                                                              }
                                                                          }
                                                                      )
                                                                  ])
                                                              ),
                                                              y(!1),
                                                              S(''),
                                                              N(''),
                                                              D(''))
                                                            : 200 === c.status &&
                                                              (L(
                                                                  !0,
                                                                  'Room has been updated',
                                                                  'success'
                                                              ),
                                                              r(
                                                                  a.map(function (n) {
                                                                      return n.id == o.id ? e : n;
                                                                  })
                                                              ));
                                                case 9:
                                                case 'end':
                                                    return n.stop();
                                            }
                                    }, n);
                                })
                            )();
                        } catch (n) {}
                    },
                    G = (0, p.useMemo)(
                        function () {
                            return a.map(function (e, n) {
                                return (0, m.jsx)(
                                    h.default,
                                    {
                                        cleaning: e,
                                        onUpdate: function (e) {
                                            return F(e);
                                        },
                                        onDelete: function (e) {
                                            return (function (e) {
                                                L(!0, 'Room has been deleted', 'danger'),
                                                    r(
                                                        (0, i.Z)(
                                                            a.filter(function (n) {
                                                                return n.id !== e;
                                                            })
                                                        )
                                                    );
                                            })(e);
                                        }
                                    },
                                    n
                                );
                            });
                        },
                        [a]
                    );
                return (0, m.jsx)(s.Z, {
                    title: 'TODO',
                    children: (0, m.jsxs)(m.Fragment, {
                        children: [
                            (0, m.jsxs)('div', {
                                className: d().header,
                                children: [
                                    (0, m.jsx)('h1', { children: 'Cleaning' }),
                                    (0, m.jsx)(f.Z, {
                                        twoToneColor: '#29d315',
                                        style: { fontSize: '30px', marginBottom: '15px' },
                                        onClick: function () {
                                            return y(!j);
                                        }
                                    }),
                                    j &&
                                        (0, m.jsx)('div', {
                                            children: (0, m.jsxs)('div', {
                                                className: d()['cleaning-add-wrapper'],
                                                children: [
                                                    (0, m.jsx)(v.Z, {
                                                        placeholder: 'Room name (e.g. Bathroom)',
                                                        type: 'text',
                                                        onChange: function (e) {
                                                            return S(e);
                                                        }
                                                    }),
                                                    (0, m.jsx)(v.Z, {
                                                        placeholder: 'Cleaning cycle (e.g. 1 week)',
                                                        type: 'text',
                                                        onChange: function (e) {
                                                            return N(e);
                                                        }
                                                    }),
                                                    (0, m.jsx)('div', {
                                                        children: (0, m.jsx)(v.Z, {
                                                            type: 'date',
                                                            onChange: function (e) {
                                                                return D(e);
                                                            }
                                                        })
                                                    }),
                                                    (0, m.jsx)('button', {
                                                        type: 'button',
                                                        className: d()['save-list'],
                                                        onClick: function () {
                                                            return F();
                                                        },
                                                        children: 'Add'
                                                    })
                                                ]
                                            })
                                        }),
                                    (0, m.jsx)('div', {
                                        className: d()['header-image'],
                                        children: (0, m.jsx)(o.Z, { name: 'cleaning', size: 50 })
                                    })
                                ]
                            }),
                            (0, m.jsx)('div', { children: G }),
                            E && (0, m.jsx)(x.Z, { type: I, text: R })
                        ]
                    })
                });
            };
        },
        1067: function (e, n, t) {
            'use strict';
            t.r(n),
                t.d(n, {
                    default: function () {
                        return v;
                    }
                });
            var a = t(7294),
                i = t(8265),
                c = t.n(i),
                r = t(1413),
                l = {
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
                o = t(5202),
                s = function (e, n) {
                    return a.createElement(o.Z, (0, r.Z)((0, r.Z)({}, e), {}, { ref: n, icon: l }));
                };
            s.displayName = 'ExclamationCircleOutlined';
            var u = a.forwardRef(s),
                d = t(3171),
                f = t(8212),
                p = t(2345),
                h = t(2944),
                g = t(5893),
                v = function (e) {
                    var n = e.cleaning,
                        t = e.onDelete,
                        i = e.onUpdate,
                        r = (0, a.useState)(!1),
                        l = r[0],
                        o = r[1],
                        s = (0, a.useState)(!1),
                        v = s[0],
                        x = s[1],
                        m = (0, a.useState)(null === n || void 0 === n ? void 0 : n.acf.cycle),
                        j = m[0],
                        _ = m[1],
                        y = (0, a.useState)(null === n || void 0 === n ? void 0 : n.acf.last),
                        C = y[0],
                        b = y[1],
                        S = (0, a.useState)(!1),
                        w = S[0],
                        O = S[1];
                    return (0, g.jsxs)('div', {
                        className: c()['single-clean'],
                        children: [
                            (0, g.jsxs)('h4', {
                                children: [
                                    new Date(null === n || void 0 === n ? void 0 : n.acf.last) <
                                        new Date() &&
                                        (0, g.jsx)(u, {
                                            style: { fontSize: '20px', marginRight: '5px' }
                                        }),
                                    null === n || void 0 === n ? void 0 : n.title
                                ]
                            }),
                            (0, g.jsxs)('ul', {
                                children: [
                                    (0, g.jsx)('li', {
                                        children: (0, g.jsxs)('span', {
                                            children: [
                                                'Cleaning cycle:',
                                                ' ',
                                                l
                                                    ? (0, g.jsx)('input', {
                                                          type: 'text',
                                                          className: 'mm-input',
                                                          style: { marginBottom: '10px' },
                                                          defaultValue:
                                                              null === n || void 0 === n
                                                                  ? void 0
                                                                  : n.acf.cycle,
                                                          onChange: function (e) {
                                                              return _(e.target.value);
                                                          }
                                                      })
                                                    : (0, g.jsxs)('strong', {
                                                          children: [
                                                              'every ',
                                                              null === n || void 0 === n
                                                                  ? void 0
                                                                  : n.acf.cycle
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
                                                l
                                                    ? (0, g.jsx)('input', {
                                                          type: 'date',
                                                          className: 'mm-input',
                                                          defaultValue:
                                                              null === n || void 0 === n
                                                                  ? void 0
                                                                  : n.acf.last,
                                                          onChange: function (e) {
                                                              return b(e.target.value);
                                                          }
                                                      })
                                                    : (0, g.jsx)('strong', {
                                                          children:
                                                              null === n || void 0 === n
                                                                  ? void 0
                                                                  : n.acf.last
                                                      })
                                            ]
                                        })
                                    }),
                                    !l &&
                                        (0, g.jsx)('li', {
                                            children: (function () {
                                                var e =
                                                        new Date().getDate() -
                                                        new Date(
                                                            null === n || void 0 === n
                                                                ? void 0
                                                                : n.acf.last
                                                        ).getDate(),
                                                    t = 1 === e ? 'day' : 'days';
                                                return e >= 1
                                                    ? (0, g.jsxs)('strong', {
                                                          style: { color: 'red' },
                                                          children: [e, ' ', t, ' delay']
                                                      })
                                                    : null;
                                            })()
                                        }),
                                    l &&
                                        (0, g.jsx)('li', {
                                            children: (0, g.jsx)('button', {
                                                type: 'button',
                                                className: 'mm-btn-success',
                                                style: { marginTop: '15px', minWidth: '110px' },
                                                onClick: function () {
                                                    i({
                                                        id:
                                                            null === n || void 0 === n
                                                                ? void 0
                                                                : n.id,
                                                        title:
                                                            null === n || void 0 === n
                                                                ? void 0
                                                                : n.title,
                                                        acf: { cycle: j, last: C }
                                                    }),
                                                        o(!1);
                                                },
                                                children: 'Save'
                                            })
                                        })
                                ]
                            }),
                            (0, g.jsxs)('div', {
                                className: c()['delete-wrapper'],
                                children: [
                                    v &&
                                        (0, g.jsxs)('div', {
                                            className: c()['delete-confirm-buttons'],
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
                                                        O(!0),
                                                            fetch(
                                                                ''
                                                                    .concat(p.y.v2, '/cleanings/')
                                                                    .concat(
                                                                        null === n || void 0 === n
                                                                            ? void 0
                                                                            : n.id
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
                                                                .then(function (e) {
                                                                    return e.json();
                                                                })
                                                                .then(function () {
                                                                    O(!1),
                                                                        t(
                                                                            null === n ||
                                                                                void 0 === n
                                                                                ? void 0
                                                                                : n.id
                                                                        );
                                                                }),
                                                            x(!1),
                                                            o(!1);
                                                    },
                                                    children: 'Delete'
                                                })
                                            ]
                                        }),
                                    l &&
                                        !v &&
                                        (0, g.jsx)(d.Z, {
                                            style: { fontSize: '25px', marginRight: '10px' },
                                            onClick: function () {
                                                return x(!0);
                                            }
                                        }),
                                    !v &&
                                        (0, g.jsx)(f.Z, {
                                            style: { fontSize: '25px' },
                                            onClick: function () {
                                                return o(!l);
                                            }
                                        })
                                ]
                            }),
                            w && (0, g.jsx)(h.Z, {})
                        ]
                    });
                };
        },
        9514: function (e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/cleaning',
                function () {
                    return t(4487);
                }
            ]);
        },
        1877: function (e) {
            e.exports = { input: 'Input_input__3kQNz' };
        },
        3393: function (e) {
            e.exports = {
                products: 'Cleaning_products__1Rmao',
                'add-product-form': 'Cleaning_add-product-form__2GYVv',
                list: 'Cleaning_list__1n2af',
                header: 'Cleaning_header__1zMyS',
                'header-image': 'Cleaning_header-image__2ZI_L',
                'cleaning-add-wrapper': 'Cleaning_cleaning-add-wrapper__1-tIZ',
                'save-list': 'Cleaning_save-list__26mA3'
            };
        },
        8265: function (e) {
            e.exports = {
                'single-clean': 'SingleCleaning_single-clean__3LBxF',
                'delete-wrapper': 'SingleCleaning_delete-wrapper__3MbGO',
                'delete-confirm-buttons': 'SingleCleaning_delete-confirm-buttons__1W7aS'
            };
        }
    },
    function (e) {
        e.O(0, [678, 913, 774, 888, 179], function () {
            return (n = 9514), e((e.s = n));
            var n;
        });
        var n = e.O();
        _N_E = n;
    }
]);
