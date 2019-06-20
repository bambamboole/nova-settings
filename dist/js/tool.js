/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(6);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

Nova.booting(function (Vue, router, store) {
    router.addRoutes([{
        name: 'nova-settings-sections',
        path: '/nova-settings',
        component: __webpack_require__(2)
    }, {
        name: 'nova-settings-section',
        path: '/nova-settings/section/:slug',
        component: __webpack_require__(12),
        props: true
    }]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(4)
/* template */
var __vue_template__ = __webpack_require__(5)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Sections.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4200ac99", Component.options)
  } else {
    hotAPI.reload("data-v-4200ac99", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            sections: []
        };
    },
    mounted: function mounted() {
        var _this = this;

        Nova.request().get('/nova-vendor/nova-settings/sections').then(function (response) {
            _this.sections = response.data;
        }).catch(function (error) {
            return _this.$toasted.show(error, { type: 'error' });
        });
    },

    methods: {
        openSection: function openSection(section) {
            this.$router.push({ name: 'nova-settings-section', params: { 'slug': section.slug, 'section': section } });
        }
    }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h1", { staticClass: "mb-3 text-90 font-normal text-2xl w-100" }, [
      _vm._v("Nova Settings")
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "flex items-start -mx-3" },
      _vm._l(_vm.sections, function(section, index) {
        return _c(
          "div",
          { key: index, staticClass: "flex-1 p-3" },
          [
            _c("card", { staticClass: "p-3 hover:bg-30 cursor-pointer" }, [
              _c(
                "a",
                {
                  staticClass: "no-underline text-decoration-none",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.openSection(section)
                    }
                  }
                },
                [
                  _c(
                    "h2",
                    { staticClass: "mb-3 text-90 font-normal text-2xl" },
                    [_vm._v(_vm._s(section.name))]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-70" }, [
                    _vm._v(_vm._s(section.description))
                  ])
                ]
              )
            ])
          ],
          1
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4200ac99", module.exports)
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/home/bambamboole/local_projects/escaperoom/nova-components/NovaSettings/node_modules/vue-slim-tabs/themes/default.css'\n    at runLoaders (/home/bambamboole/local_projects/escaperoom/nova-components/NovaSettings/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /home/bambamboole/local_projects/escaperoom/nova-components/NovaSettings/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /home/bambamboole/local_projects/escaperoom/nova-components/NovaSettings/node_modules/loader-runner/lib/LoaderRunner.js:203:19\n    at /home/bambamboole/local_projects/escaperoom/nova-components/NovaSettings/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:70:14\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(13)
/* template */
var __vue_template__ = __webpack_require__(14)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Section.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c7ea46c", Component.options)
  } else {
    hotAPI.reload("data-v-0c7ea46c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EditField__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EditField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__EditField__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        EditField: __WEBPACK_IMPORTED_MODULE_0__EditField___default.a
    },
    props: ['slug'],
    data: function data() {
        return {
            modalClose: true,
            selectedField: null,
            section: null
        };
    },
    mounted: function mounted() {
        var _this = this;

        Nova.request().get('/nova-vendor/nova-settings/sections/' + this.slug).then(function (response) {
            _this.section = response.data;
        }).catch(function (error) {
            return _this.$toasted.show(error, { type: 'error' });
        });
    },

    methods: {
        editField: function editField(field) {
            this.selectedField = field;
            this.modalClose = false;
        },
        closeModal: function closeModal() {
            this.modalClose = true;
        },
        refresh: function refresh() {
            this.closeModal();
            this.$router.push({ name: 'nova-settings-section', params: { 'slug': this.section.slug, 'section': this.section } });
        }
    }
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.section !== null
    ? _c(
        "div",
        [
          _c("h1", { staticClass: "mb-3 text-90 font-normal text-2xl w-100" }, [
            _vm._v("Nova Settings - " + _vm._s(_vm.section.name))
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-70 mb-4" }, [
            _vm._v(_vm._s(_vm.section.description))
          ]),
          _vm._v(" "),
          _c(
            "card",
            { staticClass: "mb-6 pt-3 pb-6 px-6" },
            _vm._l(_vm.section.fields, function(field) {
              return _c("div", { staticClass: "flex border-b border-40" }, [
                _c("div", { staticClass: "w-1/4 py-4" }, [
                  _c("h4", { staticClass: "font-normal text-80 pb-3" }, [
                    _vm._v(_vm._s(field.name))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-sm text-70" }, [
                    _vm._v(_vm._s(field.description))
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "w-2/4 py-4" }, [
                  _c("p", { staticClass: "text-90" }, [
                    _vm._v(_vm._s(field.value ? field.value : "not set"))
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "ml-auto p-4" }, [
                  _c("span", [
                    _c(
                      "a",
                      {
                        staticClass:
                          "cursor-pointer text-70 hover:text-primary mr-3",
                        attrs: { dusk: "2-edit-button", title: "Edit" },
                        on: {
                          click: function($event) {
                            return _vm.editField(field)
                          }
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "fill-current",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "20",
                              height: "20",
                              viewBox: "0 0 20 20",
                              "aria-labelledby": "edit",
                              role: "presentation"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M4.3 10.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM6 14h2.59l9-9L15 2.41l-9 9V14zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h6a1 1 0 1 1 0 2H2v14h14v-6z"
                              }
                            })
                          ]
                        )
                      ]
                    )
                  ])
                ])
              ])
            }),
            0
          ),
          _vm._v(" "),
          !_vm.modalClose
            ? _c("EditField", {
                attrs: { field: _vm.selectedField },
                on: { close: _vm.closeModal, updated: _vm.refresh }
              })
            : _vm._e()
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0c7ea46c", module.exports)
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(16)
/* template */
var __vue_template__ = __webpack_require__(17)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/EditField.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-627dc996", Component.options)
  } else {
    hotAPI.reload("data-v-627dc996", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['field'],
    data: function data() {
        return {
            value: this.field.value
        };
    },

    methods: {
        handleClose: function handleClose() {
            this.$emit('close');
        },
        saveField: function saveField() {
            var _this = this;

            var field = this.field;
            field.value = this.value;
            Nova.request().put('/nova-vendor/nova-settings/fields/' + this.field.slug, field).then(function (response) {
                _this.$toasted.show('Success', { type: 'success' });
                _this.$emit('updated');
            }).catch(function (error) {
                return _this.$toasted.show(error, { type: 'error' });
            });
        }
    }
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "modal",
    { on: { "modal-close": _vm.handleClose } },
    [
      _c(
        "card",
        { staticClass: "pt-6 bg-white rounded-lg shadow-lg overflow-hidden" },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.saveField($event)
                }
              }
            },
            [
              _c("div", { staticClass: "p-8" }, [
                _c("h2", { staticClass: "mb-3 text-90 font-normal text-2xl" }, [
                  _vm._v("Edit " + _vm._s(_vm.field.name))
                ]),
                _vm._v(" "),
                _vm.field.type === "text"
                  ? _c("div", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.value,
                            expression: "value"
                          }
                        ],
                        staticClass:
                          "w-full form-control form-input form-input-bordered mb-2",
                        attrs: { type: "text" },
                        domProps: { value: _vm.value },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.value = $event.target.value
                          }
                        }
                      })
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.field.type === "time"
                  ? _c("div", [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.value,
                              expression: "value"
                            }
                          ],
                          staticClass:
                            "w-full form-control form-input form-input-bordered mb-2",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.value = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "01:00:00" } }, [
                            _vm._v("01:00")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "02:00:00" } }, [
                            _vm._v("02:00")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "03:00:00" } }, [
                            _vm._v("03:00")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "04:00:00" } }, [
                            _vm._v("04:00")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "05:00:00" } }, [
                            _vm._v("05:00")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "06:00:00" } }, [
                            _vm._v("06:00")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "07:00:00" } }, [
                            _vm._v("07:00")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "08:00:00" } }, [
                            _vm._v("08:00")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "09:00:00" } }, [
                            _vm._v("09:00")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "10:00:00" } }, [
                            _vm._v("10:00")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "11:00:00" } }, [
                            _vm._v("11:00")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "12:00:00" } }, [
                            _vm._v("12:00")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "13:00:00" } }, [
                            _vm._v("13:00")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "14:00:00" } }, [
                            _vm._v("14:00")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "15:00:00" } }, [
                            _vm._v("15:00")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "16:00:00" } }, [
                            _vm._v("16:00")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "17:00:00" } }, [
                            _vm._v("17:00")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "18:00:00" } }, [
                            _vm._v("18:00")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "19:00:00" } }, [
                            _vm._v("19:00")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "20:00:00" } }, [
                            _vm._v("20:00")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "21:00:00" } }, [
                            _vm._v("21:00")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "22:00:00" } }, [
                            _vm._v("22:00")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "23:00:00" } }, [
                            _vm._v("23:00")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "24:00:00" } }, [
                            _vm._v("24:00")
                          ])
                        ]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("p", { staticClass: "text-80 leading-normal" }, [
                  _vm._v(_vm._s(_vm.field.description))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "bg-30 px-8 py-3 flex" }, [
                _c("div", { staticClass: "ml-auto" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn text-80 font-normal h-9 px-3 mr-3 btn-link",
                      attrs: {
                        type: "button",
                        "data-testid": "cancel-button",
                        dusk: "cancel-delete-button"
                      },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.handleClose($event)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.__("Cancel")) +
                          "\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      ref: "confirmButton",
                      staticClass: "btn btn-default btn-primary",
                      attrs: {
                        id: "confirm-button",
                        "data-testid": "confirm-button",
                        type: "submit"
                      }
                    },
                    [_vm._v(_vm._s(_vm.__("Save")) + "\n                    ")]
                  )
                ])
              ])
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-627dc996", module.exports)
  }
}

/***/ })
/******/ ]);