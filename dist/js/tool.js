(() => {
  var t,
    e = {
      523: (t, e, n) => {
        Nova.booting(function (t, e, s) {
          t.component("sanctum-tokens", n(572).Z),
            t.component("create-token", n(118).Z),
            t.component("delete-token", n(789).Z),
            t.component("show-token", n(515).Z),
            t.component("token", n(396).Z);
        });
      },
      429: () => {},
      118: (t, e, n) => {
        "use strict";
        n.d(e, { Z: () => o });
        const s = {
          props: { showAbilities: { required: !0, type: Boolean } },
          mounted: function () {
            document.querySelectorAll(".modal input")[0].focus();
          },
          methods: {
            handleKeydown: function (t) {
              -1 === ["Escape", "Enter"].indexOf(t.key) && t.stopPropagation();
            },
            handleCreate: function () {
              this.$emit("create");
            },
            handleCancelledCreate: function () {
              this.$emit("cancelled-create");
            },
          },
        };
        const o = (0, n(900).Z)(
          s,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "modal",
              {
                attrs: { tabindex: "-1", role: "dialog" },
                on: { "modal-close": t.handleCancelledCreate },
              },
              [
                n(
                  "form",
                  {
                    staticClass:
                      "bg-white rounded-lg shadow-lg overflow-hidden w-action-fields",
                    attrs: { autocomplete: "off" },
                    on: {
                      keydown: t.handleKeydown,
                      submit: function (e) {
                        return (
                          e.preventDefault(),
                          e.stopPropagation(),
                          t.handleCreate(e)
                        );
                      },
                    },
                  },
                  [
                    n("div", [
                      n(
                        "h2",
                        {
                          staticClass:
                            "border-b border-40 py-8 px-8 text-90 font-normal text-xl",
                        },
                        [
                          t._v(
                            "\n        " +
                              t._s(t.__("Create Personal Access Token")) +
                              "\n      "
                          ),
                        ]
                      ),
                      t._v(" "),
                      n("div", [
                        n("div", { staticClass: "action" }, [
                          n("div", { staticClass: "border-b border-40" }, [
                            n("div", { staticClass: "flex w-full" }, [
                              n("div", { staticClass: "w-1/5 px-8 py-6" }, [
                                n(
                                  "label",
                                  {
                                    staticClass:
                                      "inline-block text-80 pt-2 leading-tight",
                                    attrs: { for: "name" },
                                  },
                                  [t._v(t._s(t.__("Name")))]
                                ),
                              ]),
                              t._v(" "),
                              n(
                                "div",
                                { staticClass: "py-6 px-8 w-1/2" },
                                [
                                  t._t("name"),
                                  t._v(" "),
                                  n("div", {
                                    staticClass: "help-text help-text mt-2",
                                  }),
                                ],
                                2
                              ),
                            ]),
                            t._v(" "),
                            t.showAbilities
                              ? n("div", { staticClass: "flex w-full" }, [
                                  n("div", { staticClass: "w-1/5 px-8 py-6" }, [
                                    n(
                                      "label",
                                      {
                                        staticClass:
                                          "inline-block text-80 pt-2 leading-tight",
                                        attrs: { for: "scopes" },
                                      },
                                      [t._v(t._s(t.__("Abilities")))]
                                    ),
                                  ]),
                                  t._v(" "),
                                  n(
                                    "div",
                                    { staticClass: "py-6 px-8 w-1/2" },
                                    [
                                      t._t("abilities"),
                                      t._v(" "),
                                      n(
                                        "div",
                                        {
                                          staticClass:
                                            "help-text help-text mt-2",
                                        },
                                        [
                                          t._v(
                                            "\n                  " +
                                              t._s(
                                                t.__(
                                                  "Comma separated list of abilities to apply to token."
                                                )
                                              ) +
                                              "\n                "
                                          ),
                                        ]
                                      ),
                                    ],
                                    2
                                  ),
                                ])
                              : t._e(),
                          ]),
                        ]),
                      ]),
                    ]),
                    t._v(" "),
                    n("div", { staticClass: "bg-30 px-6 py-3 flex" }, [
                      n("div", { staticClass: "flex items-center ml-auto" }, [
                        n(
                          "button",
                          {
                            staticClass:
                              "btn btn-link dim cursor-pointer text-80 ml-auto mr-6",
                            attrs: { type: "button" },
                            on: {
                              click: function (e) {
                                return (
                                  e.preventDefault(), t.handleCancelledCreate(e)
                                );
                              },
                            },
                          },
                          [
                            t._v(
                              "\n          " +
                                t._s(t.__("Cancel")) +
                                "\n        "
                            ),
                          ]
                        ),
                        t._v(" "),
                        n(
                          "button",
                          {
                            staticClass: "btn btn-default btn-primary",
                            attrs: {
                              dusk: "confirm-action-button",
                              type: "submit",
                            },
                          },
                          [n("span", [t._v(t._s(t.__("Create Token")))])]
                        ),
                      ]),
                    ]),
                  ]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      },
      789: (t, e, n) => {
        "use strict";
        n.d(e, { Z: () => o });
        const s = {
          props: { token: { required: !0, type: Object } },
          methods: {
            handleClose: function () {
              this.$emit("close");
            },
            handleConfirm: function () {
              this.$emit("confirm");
            },
          },
          mounted: function () {
            this.$refs.confirmButton.focus();
          },
        };
        const o = (0, n(900).Z)(
          s,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("modal", { on: { "modal-close": t.handleClose } }, [
              n(
                "form",
                {
                  staticClass: "bg-white rounded-lg shadow-lg overflow-hidden",
                  staticStyle: { width: "460px" },
                  on: {
                    submit: function (e) {
                      return e.preventDefault(), t.handleConfirm(e);
                    },
                  },
                },
                [
                  n(
                    "div",
                    { staticClass: "p-8" },
                    [
                      n(
                        "heading",
                        { staticClass: "mb-6", attrs: { level: 2 } },
                        [
                          t._v(
                            "\n        " +
                              t._s(t.__("Delete Token")) +
                              "\n      "
                          ),
                        ]
                      ),
                      t._v(" "),
                      n("p", { staticClass: "text-80 leading-normal" }, [
                        t._v(
                          "\n        " +
                            t._s(
                              t.__(
                                "Are you sure you want to delete the :token token?",
                                { token: t.token.name }
                              )
                            ) +
                            "\n      "
                        ),
                      ]),
                    ],
                    1
                  ),
                  t._v(" "),
                  n("div", { staticClass: "bg-30 px-6 py-3 flex" }, [
                    n("div", { staticClass: "ml-auto" }, [
                      n(
                        "button",
                        {
                          staticClass:
                            "btn text-80 font-normal h-9 px-3 mr-3 btn-link",
                          attrs: { type: "button" },
                          on: {
                            click: function (e) {
                              return e.preventDefault(), t.handleClose(e);
                            },
                          },
                        },
                        [
                          t._v(
                            "\n          " + t._s(t.__("Cancel")) + "\n        "
                          ),
                        ]
                      ),
                      t._v(" "),
                      n(
                        "button",
                        {
                          ref: "confirmButton",
                          staticClass: "btn btn-default btn-danger",
                          attrs: {
                            id: "confirm-delete-button",
                            type: "submit",
                          },
                        },
                        [
                          t._v(
                            "\n          " +
                              t._s(t.__("Delete Token")) +
                              "\n        "
                          ),
                        ]
                      ),
                    ]),
                  ]),
                ]
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      },
      515: (t, e, n) => {
        "use strict";
        n.d(e, { Z: () => o });
        const s = {
          mounted: function () {
            document.querySelectorAll(".modal input")[0].focus();
          },
          methods: {
            handleKeydown: function (t) {
              -1 === ["Escape", "Enter"].indexOf(t.key) && t.stopPropagation();
            },
            handleConfirm: function () {
              this.$emit("confirm");
            },
          },
        };
        const o = (0, n(900).Z)(
          s,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("modal", { attrs: { tabindex: "-1", role: "dialog" } }, [
              n(
                "form",
                {
                  staticClass:
                    "bg-white rounded-lg shadow-lg overflow-hidden w-action-fields",
                  attrs: { autocomplete: "off" },
                  on: { keydown: t.handleKeydown },
                },
                [
                  n("div", [
                    n(
                      "h2",
                      {
                        staticClass:
                          "border-b border-40 py-8 px-8 text-90 font-normal text-xl",
                      },
                      [
                        t._v(
                          "\n        " +
                            t._s(t.__("Personal Access Token")) +
                            "\n      "
                        ),
                      ]
                    ),
                    t._v(" "),
                    n("div", [
                      n("div", { staticClass: "action" }, [
                        n(
                          "div",
                          { staticClass: "flex flex-col border-b border-40" },
                          [
                            n(
                              "div",
                              { staticClass: "flex items-center py-6 px-8" },
                              [t._t("default")],
                              2
                            ),
                            t._v(" "),
                            n(
                              "div",
                              { staticClass: "flex items-center pb-6 px-8" },
                              [
                                n(
                                  "div",
                                  {
                                    staticClass:
                                      "w-full rounded bg-danger-light text-danger-dark border-l-4 border-danger-dark p-4",
                                  },
                                  [
                                    n("div", { staticClass: "flex" }, [
                                      n(
                                        "div",
                                        {
                                          staticClass:
                                            "flex flex-shrink-0 items-center",
                                        },
                                        [
                                          n(
                                            "svg",
                                            {
                                              staticClass:
                                                "h-5 w-5 text-yellow-400",
                                              attrs: {
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                              },
                                            },
                                            [
                                              n("path", {
                                                attrs: {
                                                  "fill-rule": "evenodd",
                                                  d:
                                                    "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                                                  "clip-rule": "evenodd",
                                                },
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      n(
                                        "div",
                                        {
                                          staticClass: "flex items-center ml-3",
                                        },
                                        [
                                          n(
                                            "p",
                                            {
                                              staticClass:
                                                "text-sm leading-5 text-yellow-700",
                                            },
                                            [
                                              t._v(
                                                "\n                      " +
                                                  t._s(
                                                    t.__(
                                                      "Make sure to copy your new personal access token now. You won't be able to see it again!"
                                                    )
                                                  ) +
                                                  "\n                    "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  n("div", { staticClass: "bg-30 px-6 py-3 flex" }, [
                    n("div", { staticClass: "flex items-center ml-auto" }, [
                      n(
                        "button",
                        {
                          staticClass: "btn btn-default btn-primary",
                          attrs: {
                            dusk: "confirm-action-button",
                            type: "submit",
                          },
                        },
                        [
                          t._v(
                            "\n          " +
                              t._s(t.__("Confirm")) +
                              "\n        "
                          ),
                        ]
                      ),
                    ]),
                  ]),
                ]
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      },
      396: (t, e, n) => {
        "use strict";
        n.d(e, { Z: () => o });
        const s = {
          props: {
            token: { required: !0, type: Object },
            showAbilities: { required: !0, type: Boolean },
          },
          data: function () {
            return { showDeleteModal: !1 };
          },
          methods: {
            revokeToken: function () {
              this.$emit("revoke-token", this.token.id);
            },
          },
          computed: {
            lastUsed: function () {
              return this.token.last_used_at
                ? moment(this.token.last_used_at).calendar()
                : "—";
            },
          },
        };
        const o = (0, n(900).Z)(
          s,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "tr",
              [
                n("td", [
                  n(
                    "div",
                    {
                      staticClass: "text-left text-left",
                      attrs: {
                        "via-resource": "users",
                        "via-resource-id": "1",
                      },
                    },
                    [
                      n("span", { staticClass: "whitespace-no-wrap" }, [
                        t._v(t._s(t.token.name)),
                      ]),
                    ]
                  ),
                ]),
                t._v(" "),
                t.showAbilities
                  ? n("td", [
                      n(
                        "div",
                        {
                          staticClass: "text-left text-left",
                          attrs: {
                            "via-resource": "users",
                            "via-resource-id": "1",
                          },
                        },
                        [
                          n("span", { staticClass: "whitespace-no-wrap" }, [
                            t._v(t._s(t.token.abilities)),
                          ]),
                        ]
                      ),
                    ])
                  : t._e(),
                t._v(" "),
                n("td", [
                  n(
                    "div",
                    {
                      staticClass: "text-left text-left",
                      attrs: {
                        "via-resource": "users",
                        "via-resource-id": "1",
                      },
                    },
                    [
                      n("span", { staticClass: "whitespace-no-wrap" }, [
                        t._v(t._s(t.lastUsed)),
                      ]),
                    ]
                  ),
                ]),
                t._v(" "),
                n(
                  "td",
                  { staticClass: "td-fit text-right pr-6 align-middle" },
                  [
                    n("div", { staticClass: "inline-flex items-center" }, [
                      n(
                        "button",
                        {
                          staticClass:
                            "inline-flex appearance-none cursor-pointer text-70 hover:text-primary mr-3 has-tooltip",
                          on: {
                            click: function (e) {
                              t.showDeleteModal = !0;
                            },
                          },
                        },
                        [
                          n(
                            "svg",
                            {
                              staticClass: "fill-current",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "20",
                                height: "20",
                                viewBox: "0 0 20 20",
                                "aria-labelledby": "delete",
                                role: "presentation",
                              },
                            },
                            [
                              n("path", {
                                attrs: {
                                  "fill-rule": "nonzero",
                                  d:
                                    "M6 4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-1v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6H1a1 1 0 1 1 0-2h5zM4 6v12h12V6H4zm8-2V2H8v2h4zM8 8a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z",
                                },
                              }),
                            ]
                          ),
                        ]
                      ),
                    ]),
                  ]
                ),
                t._v(" "),
                n(
                  "portal",
                  { attrs: { to: "modals", transition: "fade-transition" } },
                  [
                    t.showDeleteModal
                      ? n("delete-token", {
                          attrs: { token: t.token },
                          on: {
                            confirm: t.revokeToken,
                            close: function (e) {
                              t.showDeleteModal = !1;
                            },
                          },
                        })
                      : t._e(),
                  ],
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "b56084f0",
          null
        ).exports;
      },
      572: (t, e, n) => {
        "use strict";
        n.d(e, { Z: () => o });
        const s = {
          props: ["resourceName", "resourceId", "panel"],
          data: function () {
            return {
              tokens: [],
              showAddModal: !1,
              tokenName: null,
              tokenAbilities: null,
              personalAccessToken: null,
              showPersonalAccessTokenModal: !1,
              hidden: !0,
            };
          },
          created: function () {
            this.fetchTokens();
          },
          methods: {
            copyToken: function () {
              this.$refs.token.select(), document.execCommand("copy");
            },
            openModal: function () {
              this.showAddModal = !0;
            },
            confirmModal: function () {
              this.modalOpen = !1;
            },
            closeModal: function () {
              (this.showAddModal = !1), (this.tokenName = null);
            },
            createToken: function () {
              this.getNewToken(), this.closeModal();
            },
            getNewToken: function () {
              var t = this;
              Nova.request()
                .post(
                  "/nova-vendor/sanctum-tokens/tokens/"
                    .concat(this.resourceName, "/")
                    .concat(this.resourceId),
                  {
                    name: this.tokenName,
                    abilities: this.tokenAbilities
                      ? this.tokenAbilities
                      : this.panel.options.defaultAbilities,
                  }
                )
                .then(function (e) {
                  (t.personalAccessToken = e.data),
                    (t.showPersonalAccessTokenModal = !0);
                });
            },
            fetchTokens: function () {
              var t = this;
              Nova.request()
                .get(
                  "/nova-vendor/sanctum-tokens/tokens/"
                    .concat(this.resourceName, "/")
                    .concat(this.resourceId)
                )
                .then(function (e) {
                  t.tokens = e.data.tokens;
                });
            },
            revokeToken: function (t) {
              Nova.request()
                .post(
                  "/nova-vendor/sanctum-tokens/tokens/"
                    .concat(this.resourceName, "/")
                    .concat(this.resourceId, "/revoke"),
                  { token_id: t }
                )
                .then(function () {
                  location.reload();
                });
            },
          },
        };
        const o = (0, n(900).Z)(
          s,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              {
                staticClass: "relative",
                attrs: { dusk: "profiles-index-component" },
              },
              [
                n("h1", { staticClass: "mb-3 text-90 font-normal text-2xl" }, [
                  t._v(
                    "\n\t\t" + t._s(t.__("Personal Access Tokens")) + "\n\t"
                  ),
                ]),
                t._v(" "),
                n("div", { staticClass: "flex" }, [
                  n("div", { staticClass: "w-full flex items-center" }, [
                    n("div", { staticClass: "flex-no-shrink ml-auto mb-6" }, [
                      n(
                        "button",
                        {
                          staticClass: "btn btn-default btn-primary",
                          on: {
                            click: function (e) {
                              t.showAddModal = !0;
                            },
                          },
                        },
                        [
                          t._v(
                            "\n\t\t\t\t\t" +
                              t._s(t.__("Create Token")) +
                              "\n\t\t\t\t"
                          ),
                        ]
                      ),
                      t._v(" "),
                      t.hidden
                        ? t._e()
                        : n(
                            "button",
                            {
                              staticClass: "btn btn-default btn-primary",
                              on: {
                                click: function (e) {
                                  t.hidden = !0;
                                },
                              },
                            },
                            [
                              t._v(
                                "\n\t\t\t\t\t" +
                                  t._s(t.__("Hide All")) +
                                  "\n\t\t\t\t"
                              ),
                            ]
                          ),
                      t._v(" "),
                      t.hidden
                        ? n(
                            "button",
                            {
                              staticClass: "btn btn-default btn-primary",
                              on: {
                                click: function (e) {
                                  t.hidden = !1;
                                },
                              },
                            },
                            [
                              t._v(
                                "\n\t\t\t\t\t" +
                                  t._s(t.__("Show All")) +
                                  "\n\t\t\t\t"
                              ),
                            ]
                          )
                        : t._e(),
                    ]),
                  ]),
                ]),
                t._v(" "),
                n("div", { staticClass: "card" }, [
                  !t.hidden && t.tokens.length
                    ? n(
                        "div",
                        {
                          staticClass:
                            "overflow-hidden overflow-x-auto relative",
                        },
                        [
                          n(
                            "table",
                            {
                              staticClass: "table w-full",
                              attrs: { cellspacing: "0", cellpadding: "0" },
                            },
                            [
                              n("thead", [
                                n("tr", [
                                  n("th", { staticClass: "text-left" }, [
                                    n("span", [t._v(t._s(t.__("Name")))]),
                                  ]),
                                  t._v(" "),
                                  t.panel.options.showAbilities
                                    ? n("th", { staticClass: "text-left" }, [
                                        n("span", [
                                          t._v(t._s(t.__("Abilities"))),
                                        ]),
                                      ])
                                    : t._e(),
                                  t._v(" "),
                                  n("th", { staticClass: "text-left" }, [
                                    n("span", [
                                      t._v(t._s(t.__("Last Used At"))),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  n("th", [t._v(" ")]),
                                ]),
                              ]),
                              t._v(" "),
                              n(
                                "tbody",
                                t._l(t.tokens, function (e) {
                                  return n("token", {
                                    key: e.id,
                                    attrs: {
                                      token: e,
                                      "show-abilities":
                                        t.panel.options.showAbilities,
                                    },
                                    on: { "revoke-token": t.revokeToken },
                                  });
                                }),
                                1
                              ),
                            ]
                          ),
                        ]
                      )
                    : n(
                        "div",
                        {
                          staticClass:
                            "flex justify-center items-center px-6 py-8",
                        },
                        [
                          n("div", { staticClass: "text-center" }, [
                            n(
                              "svg",
                              {
                                staticClass: "w-5 h-5 mb-3",
                                attrs: {
                                  fill: "none",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor",
                                },
                              },
                              [
                                n("path", {
                                  attrs: {
                                    d:
                                      "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
                                  },
                                }),
                              ]
                            ),
                            t._v(" "),
                            t.hidden
                              ? n("div", [
                                  n(
                                    "h3",
                                    {
                                      staticClass:
                                        "text-base text-80 font-normal mb-6",
                                    },
                                    [
                                      t._v(
                                        "\n\t\t\t\t\t\t" +
                                          t._s(t.__("Tokens Hidden.")) +
                                          "\n\t\t\t\t\t"
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  n("div", [
                                    n(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-sm btn-outline inline-flex items-center focus:outline-none focus:shadow-outline active:outline-none active:shadow-outline",
                                        on: {
                                          click: function (e) {
                                            t.showAddModal = !0;
                                          },
                                        },
                                      },
                                      [
                                        t._v(
                                          "\n\t\t\t\t\t\t\t" +
                                            t._s(t.__("Create Token")) +
                                            "\n\t\t\t\t\t\t"
                                        ),
                                      ]
                                    ),
                                  ]),
                                ])
                              : n("div", [
                                  n(
                                    "h3",
                                    {
                                      staticClass:
                                        "text-base text-80 font-normal mb-6",
                                    },
                                    [
                                      t._v(
                                        "\n\t\t\t\t\t\t" +
                                          t._s(t.__("No Tokens For User.")) +
                                          "\n\t\t\t\t\t"
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  n("div", [
                                    n(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-sm btn-outline inline-flex items-center focus:outline-none focus:shadow-outline active:outline-none active:shadow-outline",
                                        on: {
                                          click: function (e) {
                                            t.showAddModal = !0;
                                          },
                                        },
                                      },
                                      [
                                        t._v(
                                          "\n\t\t\t\t\t\t\t" +
                                            t._s(t.__("Create Token")) +
                                            "\n\t\t\t\t\t\t"
                                        ),
                                      ]
                                    ),
                                  ]),
                                ]),
                          ]),
                        ]
                      ),
                ]),
                t._v(" "),
                n(
                  "portal",
                  { attrs: { to: "modals", transition: "fade-transition" } },
                  [
                    t.showAddModal
                      ? n(
                          "create-token",
                          {
                            attrs: {
                              "show-abilities": t.panel.options.showAbilities,
                            },
                            on: {
                              create: t.createToken,
                              "cancelled-create": t.closeModal,
                            },
                          },
                          [
                            n("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.tokenName,
                                  expression: "tokenName",
                                },
                              ],
                              staticClass:
                                "w-full form-control form-input form-input-bordered",
                              attrs: {
                                slot: "name",
                                id: "name",
                                list: "name-list",
                                type: "text",
                                placeholder: "Name",
                              },
                              domProps: { value: t.tokenName },
                              on: {
                                input: function (e) {
                                  e.target.composing ||
                                    (t.tokenName = e.target.value);
                                },
                              },
                              slot: "name",
                            }),
                            t._v(" "),
                            n("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.tokenAbilities,
                                  expression: "tokenAbilities",
                                },
                              ],
                              staticClass:
                                "w-full form-control form-input form-input-bordered",
                              attrs: {
                                slot: "abilities",
                                id: "abilities",
                                list: "abilities-list",
                                type: "text",
                                placeholder: t.panel.options.defaultAbilities,
                              },
                              domProps: { value: t.tokenAbilities },
                              on: {
                                input: function (e) {
                                  e.target.composing ||
                                    (t.tokenAbilities = e.target.value);
                                },
                              },
                              slot: "abilities",
                            }),
                          ]
                        )
                      : t._e(),
                    t._v(" "),
                    t.showPersonalAccessTokenModal
                      ? n(
                          "show-token",
                          {
                            on: {
                              confirm: function (e) {
                                t.showPersonalAccessTokenModal = !1;
                              },
                            },
                          },
                          [
                            n("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.personalAccessToken,
                                  expression: "personalAccessToken",
                                },
                              ],
                              ref: "token",
                              staticClass:
                                "w-full form-control form-input form-input-bordered",
                              attrs: {
                                id: "name",
                                type: "text",
                                placeholder: "Name",
                                readonly: "",
                              },
                              domProps: { value: t.personalAccessToken },
                              on: {
                                input: function (e) {
                                  e.target.composing ||
                                    (t.personalAccessToken = e.target.value);
                                },
                              },
                            }),
                            t._v(" "),
                            n(
                              "button",
                              {
                                staticClass:
                                  "ml-4 flex items-center btn btn-link dim cursor-pointer text-80",
                                attrs: { type: "button" },
                                on: { click: t.copyToken },
                              },
                              [
                                n(
                                  "svg",
                                  {
                                    staticClass: "-ml-1 mr-2 h-5 w-5",
                                    attrs: {
                                      fill: "none",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor",
                                    },
                                  },
                                  [
                                    n("path", {
                                      attrs: {
                                        d:
                                          "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3",
                                      },
                                    }),
                                  ]
                                ),
                                t._v(
                                  "\n\t\t\t\t" + t._s(t.__("Copy")) + "\n\t\t\t"
                                ),
                              ]
                            ),
                          ]
                        )
                      : t._e(),
                  ],
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      },
      900: (t, e, n) => {
        "use strict";
        function s(t, e, n, s, o, a, i, l) {
          var r,
            c = "function" == typeof t ? t.options : t;
          if (
            (e && ((c.render = e), (c.staticRenderFns = n), (c._compiled = !0)),
            s && (c.functional = !0),
            a && (c._scopeId = "data-v-" + a),
            i
              ? ((r = function (t) {
                  (t =
                    t ||
                    (this.$vnode && this.$vnode.ssrContext) ||
                    (this.parent &&
                      this.parent.$vnode &&
                      this.parent.$vnode.ssrContext)) ||
                    "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                    (t = __VUE_SSR_CONTEXT__),
                    o && o.call(this, t),
                    t &&
                      t._registeredComponents &&
                      t._registeredComponents.add(i);
                }),
                (c._ssrRegister = r))
              : o &&
                (r = l
                  ? function () {
                      o.call(
                        this,
                        (c.functional ? this.parent : this).$root.$options
                          .shadowRoot
                      );
                    }
                  : o),
            r)
          )
            if (c.functional) {
              c._injectStyles = r;
              var d = c.render;
              c.render = function (t, e) {
                return r.call(e), d(t, e);
              };
            } else {
              var u = c.beforeCreate;
              c.beforeCreate = u ? [].concat(u, r) : [r];
            }
          return { exports: t, options: c };
        }
        n.d(e, { Z: () => s });
      },
    },
    n = {};
  function s(t) {
    var o = n[t];
    if (void 0 !== o) return o.exports;
    var a = (n[t] = { exports: {} });
    return e[t](a, a.exports, s), a.exports;
  }
  (s.m = e),
    (t = []),
    (s.O = (e, n, o, a) => {
      if (!n) {
        var i = 1 / 0;
        for (c = 0; c < t.length; c++) {
          for (var [n, o, a] = t[c], l = !0, r = 0; r < n.length; r++)
            (!1 & a || i >= a) && Object.keys(s.O).every((t) => s.O[t](n[r]))
              ? n.splice(r--, 1)
              : ((l = !1), a < i && (i = a));
          l && (t.splice(c--, 1), (e = o()));
        }
        return e;
      }
      a = a || 0;
      for (var c = t.length; c > 0 && t[c - 1][2] > a; c--) t[c] = t[c - 1];
      t[c] = [n, o, a];
    }),
    (s.d = (t, e) => {
      for (var n in e)
        s.o(e, n) &&
          !s.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (s.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      var t = { 103: 0, 990: 0 };
      s.O.j = (e) => 0 === t[e];
      var e = (e, n) => {
          var o,
            a,
            [i, l, r] = n,
            c = 0;
          for (o in l) s.o(l, o) && (s.m[o] = l[o]);
          for (r && r(s), e && e(n); c < i.length; c++)
            (a = i[c]), s.o(t, a) && t[a] && t[a][0](), (t[i[c]] = 0);
          s.O();
        },
        n = (self.webpackChunksanctum_tokens =
          self.webpackChunksanctum_tokens || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })(),
    s.O(void 0, [990], () => s(523));
  var o = s.O(void 0, [990], () => s(429));
  o = s.O(o);
})();
