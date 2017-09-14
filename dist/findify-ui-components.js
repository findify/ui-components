(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash/compact"), require("react"), require("react-dropdown"), require("recompose"), require("classnames"), require("lodash/merge"), require("react-sizeme"), require("react-slick"), require("match-media"), require("lodash/isEqual"), require("lodash/isFunction"), require("lodash/isObject"), require("lodash/identity"), require("react-dom"), require("prop-types"), require("lodash/isEmpty"), require("currency-formatter"), require("lodash/isArray"), require("lodash/memoize"), require("react-dom-factories"), require("lodash/unescape"), require("lodash/defer"), require("lodash/map"), require("fontfaceobserver"), require("lodash/range"), require("react-virtualized/dist/commonjs/AutoSizer"), require("react-virtualized/dist/commonjs/List"), require("react-virtualized/dist/commonjs/CellMeasurer"), require("tinycolor2"), require("lodash/get"), require("immutable"), require("lodash/escape"), require("lodash/pick"), require("lodash/keys"), require("lodash/throttle"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash/compact", "react", "react-dropdown", "recompose", "classnames", "lodash/merge", "react-sizeme", "react-slick", "match-media", "lodash/isEqual", "lodash/isFunction", "lodash/isObject", "lodash/identity", "react-dom", "prop-types", "lodash/isEmpty", "currency-formatter", "lodash/isArray", "lodash/memoize", "react-dom-factories", "lodash/unescape", "lodash/defer", "lodash/map", "fontfaceobserver", "lodash/range", "react-virtualized/dist/commonjs/AutoSizer", "react-virtualized/dist/commonjs/List", "react-virtualized/dist/commonjs/CellMeasurer", "tinycolor2", "lodash/get", "immutable", "lodash/escape", "lodash/pick", "lodash/keys", "lodash/throttle"], factory);
	else if(typeof exports === 'object')
		exports["FindifyUIComponents"] = factory(require("lodash/compact"), require("react"), require("react-dropdown"), require("recompose"), require("classnames"), require("lodash/merge"), require("react-sizeme"), require("react-slick"), require("match-media"), require("lodash/isEqual"), require("lodash/isFunction"), require("lodash/isObject"), require("lodash/identity"), require("react-dom"), require("prop-types"), require("lodash/isEmpty"), require("currency-formatter"), require("lodash/isArray"), require("lodash/memoize"), require("react-dom-factories"), require("lodash/unescape"), require("lodash/defer"), require("lodash/map"), require("fontfaceobserver"), require("lodash/range"), require("react-virtualized/dist/commonjs/AutoSizer"), require("react-virtualized/dist/commonjs/List"), require("react-virtualized/dist/commonjs/CellMeasurer"), require("tinycolor2"), require("lodash/get"), require("immutable"), require("lodash/escape"), require("lodash/pick"), require("lodash/keys"), require("lodash/throttle"));
	else
		root["FindifyUIComponents"] = factory(root["lodash/compact"], root["react"], root["react-dropdown"], root["recompose"], root["classnames"], root["lodash/merge"], root["react-sizeme"], root["react-slick"], root["match-media"], root["lodash/isEqual"], root["lodash/isFunction"], root["lodash/isObject"], root["lodash/identity"], root["react-dom"], root["prop-types"], root["lodash/isEmpty"], root["currency-formatter"], root["lodash/isArray"], root["lodash/memoize"], root["react-dom-factories"], root["lodash/unescape"], root["lodash/defer"], root["lodash/map"], root["fontfaceobserver"], root["lodash/range"], root["react-virtualized/dist/commonjs/AutoSizer"], root["react-virtualized/dist/commonjs/List"], root["react-virtualized/dist/commonjs/CellMeasurer"], root["tinycolor2"], root["lodash/get"], root["immutable"], root["lodash/escape"], root["lodash/pick"], root["lodash/keys"], root["lodash/throttle"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_69__, __WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_70__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_50__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_146__, __WEBPACK_EXTERNAL_MODULE_147__, __WEBPACK_EXTERNAL_MODULE_86__, __WEBPACK_EXTERNAL_MODULE_87__, __WEBPACK_EXTERNAL_MODULE_88__, __WEBPACK_EXTERNAL_MODULE_89__, __WEBPACK_EXTERNAL_MODULE_90__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_74__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_83__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_80__, __WEBPACK_EXTERNAL_MODULE_76__, __WEBPACK_EXTERNAL_MODULE_78__, __WEBPACK_EXTERNAL_MODULE_72__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_98__, __WEBPACK_EXTERNAL_MODULE_108__, __WEBPACK_EXTERNAL_MODULE_109__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_135__, __WEBPACK_EXTERNAL_MODULE_95__, __WEBPACK_EXTERNAL_MODULE_127__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_recompose__);
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Icon = Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["defaultProps"])({
    width: 16,
    height: 16
}), Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["mapProps"])(function (_a) {
    var name = _a.name,
        rest = __rest(_a, ["name"]);
    return Object.assign({}, rest, { component: __webpack_require__(51)("./" + name + ".svg").default });
}))(Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["componentFromProp"])('component'));
/* harmony default export */ __webpack_exports__["a"] = (Icon);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_merge__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);



var withConfig = function withConfig(config) {
    return function (BaseComponent) {
        var factory = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["createEagerFactory"])(BaseComponent);
        var WithConfig = function WithConfig(ownerProps) {
            return factory(Object.assign({}, ownerProps, { config: __WEBPACK_IMPORTED_MODULE_0_lodash_merge___default()({}, config, ownerProps.config) }));
        };
        return WithConfig;
    };
};
/* harmony default export */ __webpack_exports__["a"] = (withConfig);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isEqual__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isObject__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_identity__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_identity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_identity__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);





function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};




var types = {
    mapProps: 'mapProps',
    didUpdate: 'didUpdate',
    didMount: 'didMount'
};
var splitProps = function splitProps(props) {
    return Object.keys(props).reduce(function (acc, key) {
        var index = __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default()(props[key]) ? 1 : 0;
        var update = Object.assign({}, acc[index], _defineProperty({}, key, props[key]));
        acc[index] = update;
        return acc;
    }, [{}, {}]);
};
var check = function check(type, hookName) {
    return function (_ref) {
        var hooks = _ref.hooks;
        return hooks && hooks[type] && hooks[type][hookName];
    };
};
var createHook = function createHook(type) {
    return function (hookName, decorator) {
        return Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["branch"])(check(type, hookName), decorator, __WEBPACK_IMPORTED_MODULE_3_lodash_identity___default.a);
    };
};
var reflect = function reflect(fn) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    try {
        return fn.apply(undefined, args);
    } catch (e) {
        console.error(e.stack);
        return null;
    }
};
/* harmony default export */ __webpack_exports__["a"] = (function (featureType) {
    return function (BaseComponent) {
        var hook = createHook(featureType);
        return Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["getContext"])({
            hooks: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
            globalConfig: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
            trackEvent: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func
        }), hook(types.didUpdate, Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["lifecycle"])({
            componentDidMount: function componentDidMount() {
                reflect(this.props.hooks[featureType][types.didUpdate], {
                    node: Object(__WEBPACK_IMPORTED_MODULE_5_react_dom__["findDOMNode"])(this),
                    data: this.props
                }, this.props.globalConfig);
            },
            componentDidUpdate: function componentDidUpdate(next) {
                if (__WEBPACK_IMPORTED_MODULE_0_lodash_isEqual___default()(this.props, next)) return;
                reflect(this.props.hooks[featureType][types.didUpdate], {
                    node: Object(__WEBPACK_IMPORTED_MODULE_5_react_dom__["findDOMNode"])(this),
                    data: this.props
                }, this.props.globalConfig);
            }
        })), hook(types.mapProps, Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["mapProps"])(function (props) {
            var hooks = props.hooks,
                globalConfig = props.globalConfig,
                restProps = __rest(props, ["hooks", "globalConfig"]);

            var propsToMap = splitProps(restProps);
            var mappedProps = reflect.apply(undefined, [hooks[featureType][types.mapProps]].concat(_toConsumableArray(propsToMap), [globalConfig]));
            if (!mappedProps || !__WEBPACK_IMPORTED_MODULE_2_lodash_isObject___default()(mappedProps) || mappedProps === propsToMap) return props;
            return Object.assign({}, props, mappedProps);
        })), hook(types.didMount, Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["lifecycle"])({
            componentDidMount: function componentDidMount() {
                reflect(this.props.hooks[featureType][types.didMount], {
                    node: Object(__WEBPACK_IMPORTED_MODULE_5_react_dom__["findDOMNode"])(this),
                    data: this.props
                }, this.props.globalConfig);
            }
        })))(BaseComponent);
    };
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"facet":"_2mIMY","facetTitle":"_20meW","facetItem":"_3--9h","facetItemSelected":"_1lqmG","product":"_1anW_","productTitle":"_1TVYv","productDescription":"_3CQiE","productPrice":"ybNII","productPriceRegular":"cgFaj","productPriceSale":"_19m_S","autocompleteSuggestion":"m2HUf"};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Raw", function() { return Raw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOC", function() { return HOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericFacet", function() { return GenericFacet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_helpers_withHooks__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_internals_Icon__ = __webpack_require__(3);
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};





var styles = __webpack_require__(100);
var customStyles = __webpack_require__(6);
var Raw = function Raw(_a) {
    var children = _a.children,
        rest = __rest(_a, ["children"]);
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_2_classnames__(styles.content, rest.isMobile && styles.mobile) }, __WEBPACK_IMPORTED_MODULE_0_react__["Children"].map(children, function (child) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"](child, rest);
    }));
};
var Wrapper = function Wrapper(Content) {
    return Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["defaultProps"])({
        isOpen: true
    }), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withState"])('isOpen', 'toggleFacet', function (props) {
        return props.isOpen;
    }), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withHandlers"])({
        toggleOpen: function toggleOpen(_ref) {
            var isOpen = _ref.isOpen,
                toggleFacet = _ref.toggleFacet;
            return function () {
                return toggleFacet(!isOpen);
            };
        }
    }))(function (_a) {
        var isOpen = _a.isOpen,
            toggleOpen = _a.toggleOpen,
            label = _a.label,
            rest = __rest(_a, ["isOpen", "toggleOpen", "label"]);

        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_2_classnames__(styles.wrap, customStyles.facet, !isOpen && styles.hidden) }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.toggle }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h5", { className: __WEBPACK_IMPORTED_MODULE_2_classnames__(styles.title, customStyles.facetTitle) }, label), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_internals_Icon__["a" /* default */], { name: isOpen ? 'minus' : 'plus', className: styles.icon, onClick: toggleOpen })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.content }, isOpen && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Content, Object.assign({}, rest))));
    });
};
var HOC = function HOC(Content, WrappedContent) {
    return Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["setDisplayName"])('GenericFacet'), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["mapProps"])(function (_a) {
        var stateToProps = _a.stateToProps,
            props = __rest(_a, ["stateToProps"]);
        return Object.assign({}, props, { values: stateToProps ? stateToProps(props) : props.values });
    }), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withHandlers"])({
        onChange: function onChange(_ref2) {
            var name = _ref2.name,
                type = _ref2.type,
                values = _ref2.values,
                _onChange = _ref2.onChange;
            return function (changes) {
                _onChange({ type: type, name: name, changes: changes });
            };
        }
    }), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withState"])('state', 'setState', {}), Object(__WEBPACK_IMPORTED_MODULE_3_helpers_withHooks__["a" /* default */])('facet'), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["branch"])(function (_ref3) {
        var isMobile = _ref3.isMobile;
        return isMobile;
    }, Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["renderComponent"])(Content), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["renderComponent"])(WrappedContent(Content))))(null);
};
var GenericFacet = HOC(Raw, Wrapper);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("lodash/memoize");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("lodash/unescape");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_unescape__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_unescape___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_unescape__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
    var from = _ref.from,
        to = _ref.to,
        _ref$config = _ref.config,
        currency = _ref$config.currency,
        i18n = _ref$config.i18n;
    return from && to && from + ' - ' + to || from && !to && from + ' ' + __WEBPACK_IMPORTED_MODULE_0_lodash_unescape___default()(i18n.up) || !from && to && __WEBPACK_IMPORTED_MODULE_0_lodash_unescape___default()(i18n.under) + ' ' + to;
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("currency-formatter");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rating; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_internals_Icon__ = __webpack_require__(3);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }





var styles = __webpack_require__(67);
var itemsArray = [].concat(_toConsumableArray(Array(5).keys()));
var Start = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["mapProps"])(function (_ref) {
    var diff = _ref.diff;
    return {
        iconClass: diff === 0.5 ? 'half' : diff < 0 ? 'full' : 'empty'
    };
})(function (_ref2) {
    var iconClass = _ref2.iconClass;
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_internals_Icon__["a" /* default */], { name: 'star-' + iconClass, className: __WEBPACK_IMPORTED_MODULE_1_classnames__(styles.star) });
});
var Rating = function Rating(_ref3) {
    var value = _ref3.value,
        count = _ref3.count;
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.wrap }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.stars }, itemsArray.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Start, { key: item, diff: item - value });
    })), !!count && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: styles.count }, "(", count, ")"));
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Component */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_widgets_Product__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_widgets_Grid__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_helpers_withHooks__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_sizeme__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_sizeme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_sizeme__);






var styles = __webpack_require__(92);
var getProductKey = function getProductKey(product) {
    return product.position ? [product.hash || product.id, product.position].join('_') : product.hash || product.id;
};
var countColumns = function countColumns(width) {
    if (width > 1100) return 6;
    if (width > 700) return 4;
    if (width > 400) return 3;
    return 2;
};
var HOC = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["setDisplayName"])('ProductsList'), __WEBPACK_IMPORTED_MODULE_5_react_sizeme___default()(), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withPropsOnChange"])(['size'], function (_ref) {
    var size = _ref.size;
    return {
        columns: countColumns(size.width)
    };
}), Object(__WEBPACK_IMPORTED_MODULE_4_helpers_withHooks__["a" /* default */])('products'), Object(__WEBPACK_IMPORTED_MODULE_4_helpers_withHooks__["a" /* default */])('grid'));
var Component = function Component(_ref2) {
    var items = _ref2.items,
        className = _ref2.className,
        columnClass = _ref2.columnClass,
        onProductClick = _ref2.onProductClick,
        config = _ref2.config,
        columns = _ref2.columns;
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.root }, config.title && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", { className: styles.title }, config.title), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_widgets_Grid__["a" /* Grid */], { columns: String(12 / columns), className: className }, items.map(function (product, i) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["createEagerElement"])(__WEBPACK_IMPORTED_MODULE_2_widgets_Product__["a" /* Product */], Object.assign({}, product, { key: getProductKey(product), index: i, config: Object.assign({}, config.product, { stickers: config.stickers, currency: config.currency }), columnClass: columnClass, onProductClick: onProductClick }));
    })));
};
var ProductsList = HOC(Component);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxBodyFacet", function() { return CheckboxBodyFacet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_internals_ExpandButton__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_internals_SearchInput__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ListRenderer__ = __webpack_require__(104);
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};





var styles = __webpack_require__(40);
var CheckboxBodyFacet = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["setDisplayName"])('CheckboxBodyFacet'), __WEBPACK_IMPORTED_MODULE_1_recompose__["pure"], Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["defaultProps"])({
    showExpander: false,
    disableSlice: false
}), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withState"])('search', 'setSearch', ''), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withState"])('expanded', 'setExpanded', function (_ref) {
    var config = _ref.config;
    return !!config.initiallyExpanded;
}), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withPropsOnChange"])(['values'], function (_ref2) {
    var values = _ref2.values;
    return {
        selectedItems: values.filter(function (item) {
            return item.selected;
        })
    };
}), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withPropsOnChange"])(['values', 'search'], function (_ref3) {
    var values = _ref3.values,
        search = _ref3.search,
        showExpander = _ref3.showExpander;

    if (!showExpander) {
        return {
            notSelectedItems: values.filter(function (item) {
                return !item.selected;
            })
        };
    }
    var regexp = new RegExp(search, 'ig');
    return {
        notSelectedItems: values.filter(function (item) {
            return !item.selected && item.value.match(regexp);
        })
    };
}), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withProps"])(function (props) {
    return {
        hasSelected: !!props.selectedItems.length,
        hasNotSelected: !!props.notSelectedItems.length,
        showMoreButton: props.showExpander && props.notSelectedItems.length > props.config.maxItemsCount,
        showSearch: props.showExpander && props.expanded,
        showStaticContent: props.showExpander && props.notSelectedItems.length < props.config.maxItemsCount || !props.expanded
    };
}), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withHandlers"])({
    toggleExpand: function toggleExpand(_ref4) {
        var expanded = _ref4.expanded,
            setExpanded = _ref4.setExpanded;
        return function (e) {
            if (e) e.preventDefault();
            return setExpanded(!expanded);
        };
    },
    onSearchChange: function onSearchChange(_ref5) {
        var setSearch = _ref5.setSearch;
        return function (query) {
            return setSearch(query);
        };
    }
}))(function (_a) {
    var selectedItems = _a.selectedItems,
        notSelectedItems = _a.notSelectedItems,
        search = _a.search,
        expanded = _a.expanded,
        isMobile = _a.isMobile,
        onChange = _a.onChange,
        toggleExpand = _a.toggleExpand,
        onSearchChange = _a.onSearchChange,
        disableSlice = _a.disableSlice,
        showSearch = _a.showSearch,
        hasSelected = _a.hasSelected,
        hasNotSelected = _a.hasNotSelected,
        showStaticContent = _a.showStaticContent,
        showMoreButton = _a.showMoreButton,
        rest = __rest(_a, ["selectedItems", "notSelectedItems", "search", "expanded", "isMobile", "onChange", "toggleExpand", "onSearchChange", "disableSlice", "showSearch", "hasSelected", "hasNotSelected", "showStaticContent", "showMoreButton"]);

    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.wrap }, showSearch && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_internals_SearchInput__["a" /* SearchInput */], { value: search, onChange: onSearchChange, placeholder: rest.config.i18n.search }), hasSelected && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__ListRenderer__["a" /* ListRenderer */], Object.assign({}, rest, { items: selectedItems, onChange: onChange, className: styles.selectedItems, isStatic: true })), hasNotSelected && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__ListRenderer__["a" /* ListRenderer */], Object.assign({}, rest, { items: notSelectedItems, onChange: onChange, slice: !isMobile && !disableSlice && !expanded && rest.config.maxItemsCount, isMobile: isMobile, isStatic: !isMobile && showStaticContent })), !isMobile && showMoreButton && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_internals_ExpandButton__["a" /* ExpandButton */], { expanded: expanded, onClick: toggleExpand, label: expanded ? rest.config.i18n.less : rest.config.i18n.more }));
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Grid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_memoize__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_memoize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_memoize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);





var styles = __webpack_require__(49);
var Column = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["createEagerFactory"])(function (_ref) {
    var className = _ref.className,
        children = _ref.children,
        columnClass = _ref.columnClass,
        columnStyle = _ref.columnStyle;
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_3_classnames__(styles.column, className, columnClass), style: columnStyle }, children);
});
var getClassName = __WEBPACK_IMPORTED_MODULE_0_lodash_memoize___default()(function (columns) {
    return columns.split('|').map(function (value) {
        return styles['column-' + value];
    });
});
var Grid = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(__WEBPACK_IMPORTED_MODULE_2_recompose__["pure"], Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["setDisplayName"])('Grid'), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withPropsOnChange"])(['columns', 'children'], function (_ref2) {
    var columns = _ref2.columns,
        children = _ref2.children;

    var classNames = getClassName(columns);
    return {
        children: __WEBPACK_IMPORTED_MODULE_1_react__["Children"].map(children, function (child, index) {
            return child && Column({
                key: child.key,
                children: child,
                className: classNames[index] || classNames[0],
                columnClass: child.props.columnClass,
                columnStyle: child.props.columnStyle
            });
        })
    };
}))(function (_ref3) {
    var children = _ref3.children,
        className = _ref3.className;
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_3_classnames__(styles.wrap, className) }, children);
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HOC */
/* unused harmony export Component */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_currency_formatter__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_currency_formatter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_currency_formatter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_internals_Truncate__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_widgets_Rating__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_internals_Image__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_internals_Stickers__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_helpers_getPrice__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_helpers_withConfig__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_helpers_withHooks__ = __webpack_require__(5);

var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};












var styles = __webpack_require__(91);
var customStyles = __webpack_require__(6);
var Title = function Title(_a) {
    var text = _a.text,
        config = _a.config,
        rest = __rest(_a, ["text", "config"]);

    return config.display && !!text && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("h5", Object.assign({ className: __WEBPACK_IMPORTED_MODULE_4_classnames__(styles.title, customStyles.productTitle) }, rest), __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_internals_Truncate__["a" /* default */], { lines: config.lines }, text));
};
var Description = function Description(_a) {
    var text = _a.text,
        config = _a.config,
        rest = __rest(_a, ["text", "config"]);

    return config.display && !!text && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("p", Object.assign({ className: __WEBPACK_IMPORTED_MODULE_4_classnames__(styles.description, customStyles.productDescription) }, rest), __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_internals_Truncate__["a" /* default */], { lines: config.lines }, text));
};
var Price = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withProps"])(function (_ref) {
    var discount = _ref.discount,
        oldPrice = _ref.oldPrice,
        price = _ref.price;
    return {
        hasDiscount: (!oldPrice || oldPrice < 0) && !__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default()(discount) && Object(__WEBPACK_IMPORTED_MODULE_9_helpers_getPrice__["b" /* priceIsSampleArray */])(price),
        hasCompare: oldPrice && oldPrice > 0
    };
})(function (_ref2) {
    var price = _ref2.price,
        oldPrice = _ref2.oldPrice,
        currency = _ref2.currency,
        hasDiscount = _ref2.hasDiscount,
        hasCompare = _ref2.hasCompare,
        config = _ref2.config;
    return price && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_4_classnames__(styles.priceWrap, customStyles.productPrice) }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: __WEBPACK_IMPORTED_MODULE_4_classnames__(styles.price, customStyles.productPriceRegular, (hasDiscount || hasCompare) && customStyles.productPriceSale) }, Object(__WEBPACK_IMPORTED_MODULE_9_helpers_getPrice__["a" /* getPrice */])(price, currency)), hasCompare && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: __WEBPACK_IMPORTED_MODULE_4_classnames__(styles.compare) }, Object(__WEBPACK_IMPORTED_MODULE_3_currency_formatter__["format"])(oldPrice, currency)));
});
var HOC = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["setDisplayName"])('Product'), __WEBPACK_IMPORTED_MODULE_2_recompose__["pure"], Object(__WEBPACK_IMPORTED_MODULE_10_helpers_withConfig__["a" /* default */])({
    currency: {
        code: 'USD'
    },
    title: {
        lines: 3,
        display: true
    },
    description: {
        lines: 3,
        display: true
    },
    price: {
        display: true
    },
    reviews: {
        display: true
    },
    stickers: {
        'out-of-stock': {
            template: 'Temporary out of stock'
        }
    },
    i18n: {
        colorsAvailable: 'Colors available',
        discount: '(%s% discount)'
    }
}), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withHandlers"])({
    onClick: function onClick(_a) {
        var onProductClick = _a.onProductClick,
            rest = __rest(_a, ["onProductClick"]);
        return function (e) {
            if (onProductClick) {
                if (e && e.isDefaultPrevented && e.isDefaultPrevented()) return;
                e.preventDefault();
                return onProductClick(rest);
            }
        };
    }
}), Object(__WEBPACK_IMPORTED_MODULE_11_helpers_withHooks__["a" /* default */])('product'), Object(__WEBPACK_IMPORTED_MODULE_11_helpers_withHooks__["a" /* default */])('item'));
var Component = function Component(_ref3) {
    var product_url = _ref3.product_url,
        image_url = _ref3.image_url,
        imageQuery = _ref3.imageQuery,
        description = _ref3.description,
        thumbnail_url = _ref3.thumbnail_url,
        title = _ref3.title,
        reviews = _ref3.reviews,
        price = _ref3.price,
        compare_at = _ref3.compare_at,
        discount = _ref3.discount,
        color_variants = _ref3.color_variants,
        onClick = _ref3.onClick,
        config = _ref3.config,
        stickers = _ref3.stickers,
        _ref3$html = _ref3.html,
        html = _ref3$html === undefined ? {} : _ref3$html;
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("a", { onClick: onClick, href: product_url, className: __WEBPACK_IMPORTED_MODULE_4_classnames__(styles.root, customStyles.product, config.simple && styles.simple) }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: styles.imageWrap }, html.image && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { dangerouslySetInnerHTML: { __html: html.image } }) || __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_internals_Image__["a" /* default */], { className: styles.image, src: image_url || thumbnail_url, alt: title }), __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_internals_Stickers__["a" /* Stickers */], { config: config.stickers, stickers: stickers })), __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: styles.content }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](Title, { text: title, config: config.title }), __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](Description, { text: description, config: config.description })), !!color_variants && color_variants > 1 && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("p", { className: styles.color }, color_variants, " ", config.i18n.colorsAvailable), config.reviews.display && reviews && !!reviews.average_score && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: styles.rating }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_widgets_Rating__["a" /* Rating */], { count: reviews.total_reviews, value: reviews.average_score })), config.price.display && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](Price, { price: price, oldPrice: compare_at, currency: config.currency, config: config, discount: discount }), stickers['out-of-stock'] && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("p", { className: styles.outOfStock }, config.stickers['out-of-stock'].template));
};
var Product = HOC(Component);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrap":"findify-block--mobile-facets-list__wrap","wrap-dark":"findify-block--mobile-facets-list__wrap-dark","wrapDark":"findify-block--mobile-facets-list__wrap-dark","header":"findify-block--mobile-facets-list__header","content":"findify-block--mobile-facets-list__content","button":"findify-block--mobile-facets-list__button","flat":"findify-block--mobile-facets-list__flat","light":"findify-block--mobile-facets-list__light","buttonsGroup":"findify-block--mobile-facets-list__buttonsGroup","divider":"findify-block--mobile-facets-list__divider","icon":"findify-block--mobile-facets-list__icon","pre":"findify-block--mobile-facets-list__pre","after":"findify-block--mobile-facets-list__after","body":"findify-block--mobile-facets-list__body","preview":"findify-block--mobile-facets-list__preview","preview-content":"findify-block--mobile-facets-list__preview-content","previewContent":"findify-block--mobile-facets-list__preview-content","preview-container":"findify-block--mobile-facets-list__preview-container","previewContainer":"findify-block--mobile-facets-list__preview-container","preview-title":"findify-block--mobile-facets-list__preview-title","previewTitle":"findify-block--mobile-facets-list__preview-title","facet-title":"findify-block--mobile-facets-list__facet-title","facetTitle":"findify-block--mobile-facets-list__facet-title","facet-title-name":"findify-block--mobile-facets-list__facet-title-name","facetTitleName":"findify-block--mobile-facets-list__facet-title-name","reset-button":"findify-block--mobile-facets-list__reset-button","resetButton":"findify-block--mobile-facets-list__reset-button","preview-reset":"findify-block--mobile-facets-list__preview-reset","previewReset":"findify-block--mobile-facets-list__preview-reset","selected-items":"findify-block--mobile-facets-list__selected-items","selectedItems":"findify-block--mobile-facets-list__selected-items"};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrap":"findify-block--category-body-facet__wrap","list":"findify-block--category-body-facet__list","item":"findify-block--category-body-facet__item","nested-item":"findify-block--category-body-facet__nested-item","nestedItem":"findify-block--category-body-facet__nested-item","title":"findify-block--category-body-facet__title","selected":"findify-block--category-body-facet__selected","root-item":"findify-block--category-body-facet__root-item","rootItem":"findify-block--category-body-facet__root-item","count":"findify-block--category-body-facet__count","next-icon":"findify-block--category-body-facet__next-icon","nextIcon":"findify-block--category-body-facet__next-icon","prev-icon":"findify-block--category-body-facet__prev-icon","prevIcon":"findify-block--category-body-facet__prev-icon","scroll":"findify-block--category-body-facet__scroll"};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HOC */
/* unused harmony export Component */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadCrumbs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_escape__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_escape___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_escape__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_helpers_template__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_helpers_withConfig__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_helpers_formatRange__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_helpers_formatPrice__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_widgets_Rating__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_internals_Icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_recompose__);

var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};










var styles = __webpack_require__(68);
var getTitle = function getTitle(_ref) {
    var q = _ref.q,
        corrected_q = _ref.corrected_q,
        filters = _ref.filters,
        total = _ref.total,
        tpl = _ref.tpl,
        query_type = _ref.query_type,
        i18n = _ref.config.i18n;

    if (!q && !filters.length) return i18n.noQuery;
    if (!!corrected_q) {
        return tpl(total) + ' <strong>"' + __WEBPACK_IMPORTED_MODULE_0_lodash_escape___default()(corrected_q) + '"</strong>. ' + i18n.zeroResultsFor + ' ' + q + '.';
    }
    if (query_type === 'or') {
        return i18n.zeroResultsFor + ' <strong>"' + __WEBPACK_IMPORTED_MODULE_0_lodash_escape___default()(q) + '"</strong>. ' + i18n.partialMatch;
    }
    return tpl(total) + (q ? ' <strong>"' + __WEBPACK_IMPORTED_MODULE_0_lodash_escape___default()(q) + '"</strong>:' : ':');
};
var filtersMapping = {
    default: function _default(_ref2) {
        var value = _ref2.value;
        return value;
    },
    price: function price(props) {
        return Object(__WEBPACK_IMPORTED_MODULE_6_helpers_formatPrice__["a" /* default */])(props);
    },
    range: function range(props) {
        return Object(__WEBPACK_IMPORTED_MODULE_5_helpers_formatRange__["a" /* default */])(props);
    },
    rating: function rating(props) {
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_widgets_Rating__["a" /* Rating */], { value: props.from });
    },
    color: function color(_ref3) {
        var value = _ref3.value,
            mapping = _ref3.config.mapping;

        var isMulticolor = value === 'Multicolor';
        var classNames = [styles.colorFilter, isMulticolor && 'multiply-gradient'];
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: __WEBPACK_IMPORTED_MODULE_2_classnames__["apply"](undefined, classNames), style: { background: !isMulticolor && mapping[value] } });
    }
};
var Filter = Object(__WEBPACK_IMPORTED_MODULE_9_recompose__["compose"])(__WEBPACK_IMPORTED_MODULE_9_recompose__["pure"], Object(__WEBPACK_IMPORTED_MODULE_9_recompose__["withProps"])(function (_a) {
    var componentType = _a.componentType,
        name = _a.name,
        rest = __rest(_a, ["componentType", "name"]);

    return {
        children: (filtersMapping[componentType] || filtersMapping.default)(rest)
    };
}), Object(__WEBPACK_IMPORTED_MODULE_9_recompose__["withHandlers"])({
    onRemove: function onRemove(_a) {
        var onChange = _a.onChange,
            rest = __rest(_a, ["onChange"]);
        return function (e) {
            if (e) e.preventDefault();
            return onChange(rest);
        };
    }
}))(function (_ref4) {
    var config = _ref4.config,
        children = _ref4.children,
        onRemove = _ref4.onRemove;
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: styles.filter }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: styles.filterTitle }, children), __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_internals_Icon__["a" /* default */], { name: 'cross', className: __WEBPACK_IMPORTED_MODULE_2_classnames__(styles.filterRemove), onClick: onRemove }));
});
var HOC = Object(__WEBPACK_IMPORTED_MODULE_9_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_9_recompose__["setDisplayName"])('BreadCrumbs'), Object(__WEBPACK_IMPORTED_MODULE_4_helpers_withConfig__["a" /* default */])({
    i18n: {},
    facets: {
        labels: {},
        types: {}
    }
}), Object(__WEBPACK_IMPORTED_MODULE_9_recompose__["withPropsOnChange"])(['config'], function (_ref5) {
    var i18n = _ref5.config.i18n;
    return {
        tpl: Object(__WEBPACK_IMPORTED_MODULE_3_helpers_template__["a" /* default */])(i18n.showing)
    };
}), Object(__WEBPACK_IMPORTED_MODULE_9_recompose__["withPropsOnChange"])(['total', 'q', 'corrected_q'], function (props) {
    return {
        title: getTitle(props)
    };
}));
var Component = function Component(_ref6) {
    var config = _ref6.config,
        filters = _ref6.filters,
        onChange = _ref6.onChange,
        title = _ref6.title,
        className = _ref6.className,
        displayQuery = _ref6.displayQuery;
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_2_classnames__(styles.wrap, className) }, displayQuery && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("p", { className: styles.title, dangerouslySetInnerHTML: { __html: title } }), filters.map(function (filter, index) {
        return filter.values.map(function (item) {
            var key = [filter.name, item.value, item.from, item.to].join('_');
            return Object(__WEBPACK_IMPORTED_MODULE_9_recompose__["createEagerElement"])(Filter, Object.assign({}, filter, item, { key: key,
                index: index,
                onChange: onChange, componentType: config.facets.types[filter.name] || filter.type, label: config.facets.labels[filter.name], config: Object.assign({}, config.facets[config.facets.types[filter.name] || filter.type], { currency: config.currency }) }));
        });
    }));
};
var BreadCrumbs = HOC(Component);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("lodash/escape");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_unescape__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_unescape___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_unescape__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_memoize__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_memoize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_memoize__);



/* harmony default export */ __webpack_exports__["a"] = (function () {
    var template = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /%s/g;

    var tpl = __WEBPACK_IMPORTED_MODULE_0_lodash_unescape___default()(template);
    return __WEBPACK_IMPORTED_MODULE_1_lodash_memoize___default()(function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var index = -1;
        return tpl.replace(selector, function () {
            index++;
            return args[index] || '';
        });
    });
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_unescape__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_unescape___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_unescape__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_currency_formatter__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_currency_formatter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_currency_formatter__);



/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
    var from = _ref.from,
        to = _ref.to,
        _ref$config = _ref.config,
        currency = _ref$config.currency,
        i18n = _ref$config.i18n;
    return from && to && Object(__WEBPACK_IMPORTED_MODULE_1_currency_formatter__["format"])(from, currency) + ' - ' + Object(__WEBPACK_IMPORTED_MODULE_1_currency_formatter__["format"])(to, currency) || from && !to && Object(__WEBPACK_IMPORTED_MODULE_1_currency_formatter__["format"])(from, currency) + ' ' + __WEBPACK_IMPORTED_MODULE_0_lodash_unescape___default()(i18n.up) || !from && to && __WEBPACK_IMPORTED_MODULE_0_lodash_unescape___default()(i18n.under) + ' ' + Object(__WEBPACK_IMPORTED_MODULE_1_currency_formatter__["format"])(to, currency);
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sorting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_compact__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_compact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_compact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dropdown__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_helpers_withConfig__ = __webpack_require__(4);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();







var styles = __webpack_require__(71);
var createValue = function createValue(option) {
    return __WEBPACK_IMPORTED_MODULE_0_lodash_compact___default()([option.field, option.order]).join('|');
};
var Sorting = Object(__WEBPACK_IMPORTED_MODULE_3_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_3_recompose__["setDisplayName"])('Sorting'), Object(__WEBPACK_IMPORTED_MODULE_3_recompose__["flattenProp"])('value'), Object(__WEBPACK_IMPORTED_MODULE_5_helpers_withConfig__["a" /* default */])({
    i18n: {
        options: {}
    }
}), Object(__WEBPACK_IMPORTED_MODULE_3_recompose__["withHandlers"])({
    onChange: function onChange(_ref) {
        var _onChange = _ref.onChange;
        return function (_ref2) {
            var value = _ref2.value;

            var _value$split = value.split('|'),
                _value$split2 = _slicedToArray(_value$split, 2),
                field = _value$split2[0],
                order = _value$split2[1];

            _onChange({ field: field, order: order });
        };
    }
}), Object(__WEBPACK_IMPORTED_MODULE_3_recompose__["withProps"])(function (_ref3) {
    var config = _ref3.config,
        value = _ref3.value,
        options = _ref3.options;

    var opts = options.map(function (option) {
        var value = createValue(option);
        return { value: value, label: config.i18n.options[value] || option };
    });
    return {
        options: opts,
        value: !!value && opts.find(function (o) {
            return o.value === createValue(value);
        }) || opts[0]
    };
}))(function (_ref4) {
    var config = _ref4.config,
        options = _ref4.options,
        onChange = _ref4.onChange,
        value = _ref4.value,
        style = _ref4.style,
        className = _ref4.className,
        isMobile = _ref4.isMobile;
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_4_classnames__(styles.root, className, isMobile && styles.mobile), style: style }, !isMobile && config.i18n.title && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("p", { className: styles.title }, config.i18n.title), __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_dropdown___default.a, { baseClassName: styles.dropdown, onChange: onChange, options: options, value: value }));
});


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pagination; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_range__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_range__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_helpers_withConfig__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Button__ = __webpack_require__(73);

var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};






var styles = __webpack_require__(26);
var getRange = function getRange(_ref) {
    var current = _ref.current,
        total = _ref.total,
        step = _ref.step;

    var min = current - step;
    var max = current + step + 1;
    return __WEBPACK_IMPORTED_MODULE_0_lodash_range___default()(min < 1 ? 1 : min, max > total ? total + 1 : max);
};
var Pagination = Object(__WEBPACK_IMPORTED_MODULE_3_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_3_recompose__["setDisplayName"])('Pagination'), Object(__WEBPACK_IMPORTED_MODULE_4_helpers_withConfig__["a" /* default */])({
    step: 2,
    i18n: {
        previous: 'previews',
        next: 'next'
    }
}), Object(__WEBPACK_IMPORTED_MODULE_3_recompose__["withProps"])(function (_ref2) {
    var current = _ref2.current,
        total = _ref2.total,
        visible = _ref2.visible,
        step = _ref2.config.step;
    return {
        showFirst: current > step + 1,
        showLast: current < total - step,
        showFirstDots: current > step + 2,
        showLastDots: current < total - step - 1,
        showPrev: current > step,
        showNext: total - step > current,
        visiblePages: getRange({ current: current, total: total, step: step })
    };
}), Object(__WEBPACK_IMPORTED_MODULE_3_recompose__["withHandlers"])({
    changePage: function changePage(_ref3) {
        var onChange = _ref3.onChange;
        return function (page) {
            return onChange({ page: page });
        };
    }
}))(function (_a) {
    var showFirst = _a.showFirst,
        showLast = _a.showLast,
        showPrev = _a.showPrev,
        showNext = _a.showNext,
        showFirstDots = _a.showFirstDots,
        showLastDots = _a.showLastDots,
        visiblePages = _a.visiblePages,
        current = _a.current,
        total = _a.total,
        style = _a.style,
        config = _a.config,
        className = _a.className,
        rest = __rest(_a, ["showFirst", "showLast", "showPrev", "showNext", "showFirstDots", "showLastDots", "visiblePages", "current", "total", "style", "config", "className"]);

    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_2_classnames__(styles.root, className), style: style }, showPrev && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__Button__["a" /* Button */], Object.assign({ className: styles.prev, label: config.i18n.previous, prependIcon: 'chevron-left', page: current - 1 }, rest)), showFirst && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__Button__["a" /* Button */], Object.assign({ page: 1, label: 1 }, rest, { className: styles.first })), showFirstDots && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__Button__["a" /* Button */], { label: '...', className: styles.disabled }), visiblePages.map(function (page) {
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__Button__["a" /* Button */], Object.assign({ key: page, page: page, label: String(page), active: current === page }, rest));
    }), showLastDots && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__Button__["a" /* Button */], { label: '...', className: styles.disabled }), showLast && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__Button__["a" /* Button */], Object.assign({ page: total, label: total }, rest, { className: styles.last })), showNext && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__Button__["a" /* Button */], Object.assign({ className: styles.next, label: config.i18n.next, page: current + 1, appendIcon: 'chevron-right' }, rest)));
});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"findify-widget--pagination","button":"findify-widget--pagination__button","active":"findify-widget--pagination__active","disabled":"findify-widget--pagination__disabled","icon":"findify-widget--pagination__icon","next":"findify-widget--pagination__next","prev":"findify-widget--pagination__prev","first":"findify-widget--pagination__first","last":"findify-widget--pagination__last"};

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_defer__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_defer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_defer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);

var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};




var styles = __webpack_require__(81);
var ImageComponent = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(__WEBPACK_IMPORTED_MODULE_2_recompose__["pure"], Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withState"])('isLoading', 'setIsLoading', true), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withState"])('isMounted', 'setIsMounted', true), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["lifecycle"])({
    componentWillMount: function componentWillMount() {
        var _this = this;

        var img = new Image();
        img.onload = __WEBPACK_IMPORTED_MODULE_0_lodash_defer___default()(function () {
            return _this.props.isMounted && _this.props.setIsLoading(false);
        });
        img.src = this.props.src;
    },
    componentWillUnmount: function componentWillUnmount() {
        this.props.setIsMounted(false);
    }
}), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["mapProps"])(function (_a) {
    var isLoading = _a.isLoading,
        className = _a.className,
        src = _a.src,
        alt = _a.alt,
        placeholder = _a.placeholder,
        setIsLoading = _a.setIsLoading,
        onClick = _a.onClick,
        rest = __rest(_a, ["isLoading", "className", "src", "alt", "placeholder", "setIsLoading", "onClick"]);

    return {
        alt: alt,
        onClick: onClick,
        src: isLoading ? void 0 : src,
        className: __WEBPACK_IMPORTED_MODULE_3_classnames__(className, isLoading && styles.loading || styles.loaded)
    };
}), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["onlyUpdateForKeys"])(['src']))(function (props) {
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("img", Object.assign({}, props));
});
/* harmony default export */ __webpack_exports__["a"] = (ImageComponent);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("lodash/isArray");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-sizeme");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacetsLayout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lists_FacetsList__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_helpers_withHooks__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var FacetsLayout = Object(__WEBPACK_IMPORTED_MODULE_1_helpers_withHooks__["a" /* default */])('facets')(function (_a) {
    var onFacetsChange = _a.onFacetsChange,
        onMobileFacetsClose = _a.onMobileFacetsClose,
        response = _a.response,
        rest = __rest(_a, ["onFacetsChange", "onMobileFacetsClose", "response"]);

    return Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["createEagerElement"])(__WEBPACK_IMPORTED_MODULE_0_lists_FacetsList__["a" /* FacetsList */], Object.assign({}, rest, { facets: response.facets, onClose: onMobileFacetsClose, onChange: onFacetsChange }));
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacetsList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_internals_MobileFacetsList__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_internals_DesktopFacetsList__ = __webpack_require__(118);



var styles = __webpack_require__(119);
var FacetsList = Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["setDisplayName"])('FacetsList'), Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["defaultProps"])({
    isMobile: false
}), Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["branch"])(function (_ref) {
    var isMobile = _ref.isMobile;
    return isMobile;
}, Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["renderComponent"])(__WEBPACK_IMPORTED_MODULE_1_internals_MobileFacetsList__["a" /* MobileFacetsList */]), Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["renderComponent"])(__WEBPACK_IMPORTED_MODULE_2_internals_DesktopFacetsList__["a" /* DesktopFacetsList */])))(__WEBPACK_IMPORTED_MODULE_0_recompose__["renderNothing"]);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getRangeFacetKey; });
var getRangeFacetKey = function getRangeFacetKey(_ref) {
  var from = _ref.from,
      to = _ref.to;
  return [from, to].join('_');
};

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mapTypeToFacet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_memoize__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_memoize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_memoize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_widgets_ColorFacet__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_widgets_CheckboxFacet__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_widgets_CategoryFacet__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_widgets_RangeFacet__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_widgets_PriceFacet__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_widgets_RatingFacet__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_recompose__);









var mapTypeToFacet = __WEBPACK_IMPORTED_MODULE_0_lodash_memoize___default()(function (type) {
    return {
        category: Object(__WEBPACK_IMPORTED_MODULE_7_recompose__["createEagerFactory"])(__WEBPACK_IMPORTED_MODULE_3_widgets_CategoryFacet__["a" /* CategoryFacet */]),
        text: Object(__WEBPACK_IMPORTED_MODULE_7_recompose__["createEagerFactory"])(__WEBPACK_IMPORTED_MODULE_2_widgets_CheckboxFacet__["a" /* CheckboxFacet */]),
        range: Object(__WEBPACK_IMPORTED_MODULE_7_recompose__["createEagerFactory"])(__WEBPACK_IMPORTED_MODULE_4_widgets_RangeFacet__["a" /* RangeFacet */]),
        color: Object(__WEBPACK_IMPORTED_MODULE_7_recompose__["createEagerFactory"])(__WEBPACK_IMPORTED_MODULE_1_widgets_ColorFacet__["a" /* ColorFacet */]),
        price: Object(__WEBPACK_IMPORTED_MODULE_7_recompose__["createEagerFactory"])(__WEBPACK_IMPORTED_MODULE_5_widgets_PriceFacet__["a" /* PriceFacet */]),
        rating: Object(__WEBPACK_IMPORTED_MODULE_7_recompose__["createEagerFactory"])(__WEBPACK_IMPORTED_MODULE_6_widgets_RatingFacet__["a" /* RatingFacet */])
    }[type];
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorFacet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var _require = __webpack_require__(97),
    ColorBodyFacet = _require.ColorBodyFacet;

var _require2 = __webpack_require__(7),
    GenericFacet = _require2.GenericFacet;

var ColorFacet = function ColorFacet(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](GenericFacet, Object.assign({}, props), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ColorBodyFacet, null));
};

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxFacet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_internals_GenericFacet__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_helpers_withConfig__ = __webpack_require__(4);


var _require = __webpack_require__(14),
    CheckboxBodyFacet = _require.CheckboxBodyFacet;



var CheckboxFacet = Object(__WEBPACK_IMPORTED_MODULE_2_helpers_withConfig__["a" /* default */])({
    maxItemsCount: 6,
    rowHeight: 20,
    i18n: {
        search: 'Search',
        more: 'More',
        less: 'Less'
    }
})(function (props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_internals_GenericFacet__["GenericFacet"], Object.assign({}, props), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](CheckboxBodyFacet, { showExpander: true }));
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var styles = __webpack_require__(101);
var ExpandButton = function ExpandButton(_ref) {
    var expanded = _ref.expanded,
        onClick = _ref.onClick,
        label = _ref.label;
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: styles.wrap, onClick: onClick }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: styles.sign }, expanded && '-' || '+'), label);
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("react-virtualized/dist/commonjs/AutoSizer");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("react-virtualized/dist/commonjs/List");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-virtualized/dist/commonjs/CellMeasurer");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrap":"findify-block--checkbox-body-facet__wrap","list":"findify-block--checkbox-body-facet__list"};

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryFacet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_internals_GenericFacet__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_helpers_withConfig__ = __webpack_require__(4);


var _require = __webpack_require__(107),
    CategoryBodyFacet = _require.CategoryBodyFacet;



var CategoryFacet = Object(__WEBPACK_IMPORTED_MODULE_2_helpers_withConfig__["a" /* default */])({
    maxItemsCount: 6,
    rowHeight: 20,
    i18n: {
        goBackTitle: 'All categories',
        search: 'Search',
        more: 'Show more',
        less: 'Less'
    }
})(function (props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_internals_GenericFacet__["GenericFacet"], Object.assign({}, props), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](CategoryBodyFacet, null));
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeFacet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_internals_RangeBodyFacet__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_helpers_formatRange__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_internals_GenericFacet__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_helpers_withConfig__ = __webpack_require__(4);



var _require = __webpack_require__(14),
    CheckboxBodyFacet = _require.CheckboxBodyFacet;





var Body = CheckboxBodyFacet;
var stateToProps = function stateToProps(_ref) {
    var values = _ref.values,
        config = _ref.config;
    return values.map(function (value) {
        return Object.assign({}, value, { key: value.from + '_' + value.to, label: Object(__WEBPACK_IMPORTED_MODULE_3_helpers_formatRange__["a" /* default */])({ from: value.from, to: value.to, config: config }) });
    });
};
var RangeFacet = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(__WEBPACK_IMPORTED_MODULE_1_recompose__["pure"], Object(__WEBPACK_IMPORTED_MODULE_5_helpers_withConfig__["a" /* default */])({
    maxItemsCount: 6,
    rowHeight: 20,
    i18n: {
        submit: 'go'
    }
}))(function (props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_internals_GenericFacet__["GenericFacet"], Object.assign({}, props, { stateToProps: stateToProps }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Body, { disableSlice: true }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_internals_RangeBodyFacet__["a" /* RangeBodyFacet */], null));
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeBodyFacet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_helpers_formatRange__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_currency_formatter__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_currency_formatter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_currency_formatter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_helpers_getRangeFacetKey__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_internals_NumberInput__ = __webpack_require__(114);







var styles = __webpack_require__(115);
var RangeBodyFacet = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["defaultProps"])({
    useCurrency: false
}), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withPropsOnChange"])(['min', 'max'], function (_ref) {
    var min = _ref.min,
        max = _ref.max;
    return { initial: { min: min, max: max } };
}), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withPropsOnChange"])(['config'], function (_ref2) {
    var config = _ref2.config;

    var currency = Object(__WEBPACK_IMPORTED_MODULE_3_currency_formatter__["findCurrency"])(config.currency.code);
    var symbolOnLeft = config.currency.symbolOnLeft || currency.symbolOnLeft;
    return {
        symbolOnLeft: symbolOnLeft,
        currencySymbol: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: __WEBPACK_IMPORTED_MODULE_5_classnames__(styles.currency, symbolOnLeft && styles.pullRight) }, config.currency.symbol || currency.symbol)
    };
}), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withStateHandlers"])(function (_ref3) {
    var min = _ref3.min,
        max = _ref3.max;
    return {
        min: void 0,
        max: void 0
    };
}, {
    onCommit: function onCommit(_ref4, _ref5) {
        var from = _ref4.min,
            to = _ref4.max;
        var onChange = _ref5.onChange,
            config = _ref5.config,
            values = _ref5.values,
            name = _ref5.name;
        return function (e) {
            if (!from && !to) return;
            var key = Object(__WEBPACK_IMPORTED_MODULE_4_helpers_getRangeFacetKey__["a" /* getRangeFacetKey */])({ from: from, to: to });
            if (values.find(function (item) {
                return item.key === key;
            })) return;
            var label = Object(__WEBPACK_IMPORTED_MODULE_2_helpers_formatRange__["a" /* default */])({ from: from, to: to, config: config });
            onChange({ selected: true, from: from, to: to, key: key, label: label, name: name });
            return { min: void 0, max: void 0 };
        };
    },
    updateMin: function updateMin(_ref6) {
        var min = _ref6.min,
            max = _ref6.max;
        return function (e) {
            var val = parseFloat(e.target.value) || min;
            var normalizedValue = val > max ? max : val;
            return { min: normalizedValue };
        };
    },
    updateMax: function updateMax(_ref7) {
        var max = _ref7.max,
            min = _ref7.min;
        return function (e) {
            var val = parseFloat(e.target.value) || max;
            var normalizedValue = val < min ? min : val;
            return { max: normalizedValue };
        };
    }
}))(function (_ref8) {
    var initial = _ref8.initial,
        max = _ref8.max,
        min = _ref8.min,
        updateMin = _ref8.updateMin,
        updateMax = _ref8.updateMax,
        onCommit = _ref8.onCommit,
        useCurrency = _ref8.useCurrency,
        symbolOnLeft = _ref8.symbolOnLeft,
        currencySymbol = _ref8.currencySymbol,
        _ref8$config = _ref8.config,
        i18n = _ref8$config.i18n,
        _ref8$config$precisio = _ref8$config.precision,
        precision = _ref8$config$precisio === undefined ? 0 : _ref8$config$precisio;
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.root }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.inputWrap }, useCurrency && !!symbolOnLeft && currencySymbol, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_internals_NumberInput__["a" /* default */], { className: styles.input, value: min, max: max || initial.max, precision: precision, min: initial.min, mobile: false, onBlur: updateMin }), useCurrency && !symbolOnLeft && currencySymbol), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.separator }, "-"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.inputWrap }, useCurrency && !!symbolOnLeft && currencySymbol, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_internals_NumberInput__["a" /* default */], { className: styles.input, value: max, mobile: false, precision: precision, min: min || initial.min, max: initial.max, onBlur: updateMax }), useCurrency && !symbolOnLeft && currencySymbol), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.commitWrap }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: styles.button, onClick: onCommit }, i18n.submit)));
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceFacet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_internals_CheckboxBodyFacet__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_internals_RangeBodyFacet__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_helpers_formatPrice__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_internals_GenericFacet__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_helpers_withConfig__ = __webpack_require__(4);







var Body = __WEBPACK_IMPORTED_MODULE_2_internals_CheckboxBodyFacet__["CheckboxBodyFacet"];
var stateToProps = function stateToProps(_ref) {
    var values = _ref.values,
        config = _ref.config;
    return values.map(function (value) {
        return Object.assign({}, value, { key: value.from + '_' + value.to, label: Object(__WEBPACK_IMPORTED_MODULE_4_helpers_formatPrice__["a" /* default */])({ from: value.from, to: value.to, config: config }) });
    });
};
var PriceFacet = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(__WEBPACK_IMPORTED_MODULE_1_recompose__["pure"], Object(__WEBPACK_IMPORTED_MODULE_6_helpers_withConfig__["a" /* default */])({
    maxItemsCount: 6,
    rowHeight: 20,
    i18n: {
        submit: 'go'
    }
}))(function (props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_internals_GenericFacet__["GenericFacet"], Object.assign({}, props, { stateToProps: stateToProps }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Body, { disableSlice: true }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_internals_RangeBodyFacet__["a" /* RangeBodyFacet */], { useCurrency: true }));
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingFacet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_internals_CheckboxBodyFacet__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_internals_GenericFacet__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_internals_CheckboxBodyFacet_Rating__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_helpers_withConfig__ = __webpack_require__(4);






var stateToProps = function stateToProps(_ref) {
    var values = _ref.values,
        config = _ref.config;
    return values.map(function (value) {
        return Object.assign({}, value, { key: value.from + '_' + value.to, label: value.from });
    });
};
var RatingFacet = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(__WEBPACK_IMPORTED_MODULE_1_recompose__["pure"], Object(__WEBPACK_IMPORTED_MODULE_5_helpers_withConfig__["a" /* default */])({
    maxItemsCount: 6,
    rowHeight: 20
}))(function (props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_internals_GenericFacet__["GenericFacet"], Object.assign({}, props, { stateToProps: stateToProps }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_internals_CheckboxBodyFacet__["CheckboxBodyFacet"], { itemComponent: __WEBPACK_IMPORTED_MODULE_4_internals_CheckboxBodyFacet_Rating__["a" /* Item */], disableSlice: true }));
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_global_css__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_global_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_global_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_ResultsLayout__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsLayout", function() { return __WEBPACK_IMPORTED_MODULE_1__layouts_ResultsLayout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts_FacetsLayout__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FacetsLayout", function() { return __WEBPACK_IMPORTED_MODULE_2__layouts_FacetsLayout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_NoResultsLayout__ = __webpack_require__(132);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NoResultsLayout", function() { return __WEBPACK_IMPORTED_MODULE_3__layouts_NoResultsLayout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lists_FacetsList__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FacetsList", function() { return __WEBPACK_IMPORTED_MODULE_4__lists_FacetsList__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lists_ProductsList__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsList", function() { return __WEBPACK_IMPORTED_MODULE_5__lists_ProductsList__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__widgets_Autocomplete__ = __webpack_require__(134);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return __WEBPACK_IMPORTED_MODULE_6__widgets_Autocomplete__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__widgets_BreadCrumbs__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BreadCrumbs", function() { return __WEBPACK_IMPORTED_MODULE_7__widgets_BreadCrumbs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__widgets_CategoryFacet__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryFacet", function() { return __WEBPACK_IMPORTED_MODULE_8__widgets_CategoryFacet__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__widgets_CheckboxFacet__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxFacet", function() { return __WEBPACK_IMPORTED_MODULE_9__widgets_CheckboxFacet__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__widgets_ColorFacet__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ColorFacet", function() { return __WEBPACK_IMPORTED_MODULE_10__widgets_ColorFacet__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__widgets_RangeFacet__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RangeFacet", function() { return __WEBPACK_IMPORTED_MODULE_11__widgets_RangeFacet__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__widgets_PriceFacet__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PriceFacet", function() { return __WEBPACK_IMPORTED_MODULE_12__widgets_PriceFacet__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__widgets_RatingFacet__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RatingFacet", function() { return __WEBPACK_IMPORTED_MODULE_13__widgets_RatingFacet__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__widgets_Grid__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return __WEBPACK_IMPORTED_MODULE_14__widgets_Grid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__widgets_Pagination__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return __WEBPACK_IMPORTED_MODULE_15__widgets_Pagination__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__widgets_Product__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return __WEBPACK_IMPORTED_MODULE_16__widgets_Product__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__widgets_ProductsCarousel__ = __webpack_require__(145);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsCarousel", function() { return __WEBPACK_IMPORTED_MODULE_17__widgets_ProductsCarousel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__widgets_Rating__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Rating", function() { return __WEBPACK_IMPORTED_MODULE_18__widgets_Rating__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__widgets_Sorting__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Sorting", function() { return __WEBPACK_IMPORTED_MODULE_19__widgets_Sorting__["a"]; });





















/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsLayout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_widgets_Grid__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_widgets_BreadCrumbs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_widgets_Sorting__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_widgets_Pagination__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lists_ProductsList__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__FacetsLayout__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_internals_Button__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_internals_Banner__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_internals_PoweredBy__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_internals_InfiniteLoader__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_helpers_withHooks__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_helpers_withConfig__ = __webpack_require__(4);















var styles = __webpack_require__(131);
var ResultsLayout = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_14_helpers_withConfig__["a" /* default */])({
    view: {
        pagination: true,
        infinite: false
    }
}), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["defaultProps"])({
    showFacets: true,
    columns: {
        facets: 3,
        products: 9
    }
}), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withPropsOnChange"])(['isMobile'], function (_ref) {
    var isMobile = _ref.isMobile;
    return {
        showMobileHeader: !!isMobile,
        showFacets: !isMobile,
        showBreadcrumbs: !isMobile
    };
}), Object(__WEBPACK_IMPORTED_MODULE_13_helpers_withHooks__["a" /* default */])('results'))(function (_ref2) {
    var onFacetsChange = _ref2.onFacetsChange,
        onProductClick = _ref2.onProductClick,
        onPageChange = _ref2.onPageChange,
        onSortChange = _ref2.onSortChange,
        onBreadCrumbRemove = _ref2.onBreadCrumbRemove,
        onMobileFacetsOpen = _ref2.onMobileFacetsOpen,
        onBannerClick = _ref2.onBannerClick,
        onPoweredByClick = _ref2.onPoweredByClick,
        onLoadPrev = _ref2.onLoadPrev,
        onLoadNext = _ref2.onLoadNext,
        onClearAll = _ref2.onClearAll,
        config = _ref2.config,
        isMobile = _ref2.isMobile,
        columns = _ref2.columns,
        showMobileHeader = _ref2.showMobileHeader,
        showFacets = _ref2.showFacets,
        showBreadcrumbs = _ref2.showBreadcrumbs,
        type = _ref2.type,
        isLoading = _ref2.isLoading,
        response = _ref2.response;
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, showBreadcrumbs && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_widgets_BreadCrumbs__["a" /* BreadCrumbs */], Object.assign({}, response.meta, { className: styles.breadcrumbs, onChange: onBreadCrumbRemove, displayQuery: type !== 'collection', config: Object.assign({}, config.breadcrumbs, { facets: config.facets, currency: config.currency }) })), !showMobileHeader && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_widgets_Sorting__["a" /* Sorting */], { className: styles.sort, value: !!response.meta.sort.length && response.meta.sort[0], onChange: onSortChange, options: config.sorting.options, config: config.sorting }), showMobileHeader && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_widgets_Grid__["a" /* Grid */], { columns: '6|6' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_internals_Button__["a" /* Button */], { onClick: onMobileFacetsOpen, className: styles.mobileFacetsButton, columnClass: styles.paddingRight }, config.facets.i18n.showMobileFacets, response.meta.filters && !!response.meta.filters.length && ' (' + response.meta.filters.length + ')'), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_widgets_Sorting__["a" /* Sorting */], { isMobile: isMobile, columnClass: styles.paddingLeft, className: __WEBPACK_IMPORTED_MODULE_1_classnames__(styles.sort, styles.mobileSort), value: !!response.meta.sort.length && response.meta.sort[0], onChange: onSortChange, options: config.sorting.options, config: config.sorting })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_widgets_Grid__["a" /* Grid */], { columns: showFacets ? columns.facets + '|' + columns.products : '12' }, showFacets && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__FacetsLayout__["a" /* FacetsLayout */], Object.assign({}, { isMobile: isMobile, config: config, response: response, onFacetsChange: onFacetsChange, onClearAll: onClearAll, columnClass: styles.facets })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(styles.products, !isMobile && styles.productsWithPadding) }, response.banner && response.banner.products && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_internals_Banner__["a" /* Banner */], Object.assign({}, response.banner.products, { onClick: onBannerClick })), !!config.view.infinite && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_internals_InfiniteLoader__["b" /* LoadPrev */], { config: config.loadMore, items: response.items, meta: response.meta, isLoading: isLoading, onClick: onLoadPrev }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_lists_ProductsList__["a" /* ProductsList */], { config: Object.assign({}, config, config.productsGrid), columnClass: styles.product, items: response.items, onProductClick: onProductClick }), !!config.view.pagination && !!response.meta.total && response.meta.total > response.meta.limit && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_widgets_Pagination__["a" /* Pagination */], { className: styles.pagination, onChange: onPageChange, style: { textAlign: 'center' }, config: config.pagination, total: Math.ceil(response.meta.total / response.meta.limit), current: Math.ceil(response.meta.offset / response.meta.limit) + 1 }), !!config.view.infinite && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_internals_InfiniteLoader__["a" /* LoadNext */], { config: config.loadMore, isMobile: isMobile, isLoading: isLoading, meta: response.meta, onChange: onLoadNext }), !!config.poweredByFindify && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_11_internals_PoweredBy__["a" /* PoweredBy */], { onClick: onPoweredByClick }))));
});

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrap":"findify-widget--grid__wrap","column":"findify-widget--grid__column","column-1":"findify-widget--grid__column-1","column1":"findify-widget--grid__column-1","column-2":"findify-widget--grid__column-2","column2":"findify-widget--grid__column-2","column-3":"findify-widget--grid__column-3","column3":"findify-widget--grid__column-3","column-4":"findify-widget--grid__column-4","column4":"findify-widget--grid__column-4","column-5":"findify-widget--grid__column-5","column5":"findify-widget--grid__column-5","column-6":"findify-widget--grid__column-6","column6":"findify-widget--grid__column-6","column-7":"findify-widget--grid__column-7","column7":"findify-widget--grid__column-7","column-8":"findify-widget--grid__column-8","column8":"findify-widget--grid__column-8","column-9":"findify-widget--grid__column-9","column9":"findify-widget--grid__column-9","column-10":"findify-widget--grid__column-10","column10":"findify-widget--grid__column-10","column-11":"findify-widget--grid__column-11","column11":"findify-widget--grid__column-11","column-12":"findify-widget--grid__column-12","column12":"findify-widget--grid__column-12"};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("lodash/merge");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./arrow-down.svg": 52,
	"./check-checked.svg": 53,
	"./check-empty.svg": 54,
	"./check.svg": 55,
	"./chevron-down.svg": 56,
	"./chevron-left.svg": 57,
	"./chevron-right.svg": 58,
	"./close-round.svg": 59,
	"./cross.svg": 60,
	"./minus.svg": 61,
	"./plus.svg": 62,
	"./search.svg": 63,
	"./star-empty.svg": 64,
	"./star-full.svg": 65,
	"./star-half.svg": 66
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 51;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 13.7 7.7" }, this.props),
        _react2.default.createElement("path", { d: "M13.7.8c0 .2-.1.4-.2.6l-6 6c-.2.2-.4.3-.7.3s-.4 0-.6-.2l-6-6C.1 1.3 0 1.1 0 .8S.1.4.2.2C.4.1.6 0 .8 0h12c.2 0 .4.1.6.2.2.2.3.4.3.6z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20.5 20.5" }, this.props),
        _react2.default.createElement("path", { d: "M9.1 15.7l8.2-8.2c.1-.2.2-.4.2-.6s-.1-.4-.2-.6L16 4.9c-.2-.2-.4-.3-.6-.3s-.4.1-.6.3l-6.3 6.2-2.8-2.8c-.1-.2-.4-.2-.6-.2s-.4 0-.6.2L3.1 9.7c-.1.1-.2.3-.2.6s.1.4.2.6L8 15.7c.1.2.3.3.6.3s.4-.2.5-.3zM20.5 3.8v12.8c0 1.1-.4 2-1.1 2.7s-1.6 1.1-2.7 1.1H3.8c-1.1 0-2-.4-2.7-1.1S0 17.8 0 16.7V3.8c0-1.1.4-2 1.1-2.7S2.8 0 3.8 0h12.8c1.1 0 2 .4 2.7 1.1s1.2 1.7 1.2 2.7z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18.8 18.8" }, this.props),
        _react2.default.createElement("path", { d: "M15 1.7H3.8c-.6 0-1.1.2-1.5.7s-.6.8-.6 1.4V15c0 .6.2 1.1.7 1.5s.9.6 1.5.6H15c.6 0 1.1-.2 1.5-.6s.7-.9.7-1.5V3.8c0-.6-.2-1.1-.7-1.5s-.9-.6-1.5-.6zm3.8 2.1V15c0 1-.4 2-1.1 2.7s-1.6 1.1-2.7 1.1H3.8c-1.1 0-2-.4-2.7-1.1S0 16 0 15V3.8c0-1.1.4-2 1.1-2.7S2.8 0 3.8 0H15c1.1 0 2 .4 2.7 1.1s1.1 1.7 1.1 2.7z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20.7 15.9" }, this.props),
        _react2.default.createElement("path", { d: "M20.7 3.1c0 .3-.1.7-.4.9l-9.7 9.7-1.8 1.8c-.3.2-.6.4-.9.4-.3 0-.7-.1-.9-.4L.4 8.9C.1 8.6 0 8.3 0 8c0-.3.1-.7.4-.9l1.8-1.8c.2-.3.5-.4.9-.4.3 0 .7.1.9.3l3.9 3.9L16.7.3c.3-.2.6-.3.9-.3.4 0 .7.1.9.4l1.8 1.8c.3.3.4.6.4.9z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 13.4 7.8" }, this.props),
        _react2.default.createElement("path", { d: "M13.4 1.1c0 .1 0 .2-.1.3L7 7.6c-.1.1-.2.2-.3.2s-.2 0-.3-.1L.1 1.4C0 1.3 0 1.2 0 1.1 0 1 0 .9.1.8L.8.1C.9 0 1 0 1.1 0c.1 0 .2 0 .3.1l5.2 5.3L12 .1c0-.1.1-.1.3-.1.1 0 .2 0 .3.1l.7.7c.1.1.1.2.1.3z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 7.8 13.4" }, this.props),
        _react2.default.createElement("path", { d: "M7.8 1.1c0 .1 0 .2-.1.3L2.4 6.7 7.7 12c.1 0 .1.2.1.3 0 .1 0 .2-.1.3l-.7.6c-.1.1-.2.1-.3.1s-.2 0-.3-.1L.1 7C0 6.9 0 6.8 0 6.7c0-.1 0-.2.1-.3L6.3.2c.2-.2.3-.2.4-.2s.2 0 .3.1l.7.7c.1.1.1.2.1.3z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 7.8 13.4" }, this.props),
        _react2.default.createElement("path", { d: "M7.8 6.7c0 .1 0 .2-.1.3l-6.2 6.2c-.1.1-.2.1-.3.1s-.2 0-.3-.1l-.7-.7c-.2 0-.2-.1-.2-.3 0-.1 0-.2.1-.2l5.2-5.3L.1 1.4C0 1.3 0 1.2 0 1.1 0 1 0 .9.1.8L.8.1C.9 0 1 0 1.1 0s.2 0 .3.1l6.2 6.2c.2.2.2.3.2.4z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, this.props),
        _react2.default.createElement("path", { d: "M3.5 20.5c-4.7-4.7-4.7-12.3 0-17s12.3-4.7 17 0 4.7 12.3 0 17-12.3 4.7-17 0zM18.4 5.6c-3.5-3.5-9.2-3.5-12.8 0s-3.5 9.2 0 12.8 9.2 3.5 12.8 0 3.5-9.3 0-12.8zM8.8 17.3l-2.1-2.1L9.9 12 6.7 8.8l2.1-2.1L12 9.9l3.2-3.2 2.1 2.1-3.2 3.2 3.2 3.2-2.1 2.1-3.2-3.2-3.2 3.2z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 15.9 15.9" }, this.props),
        _react2.default.createElement("path", { d: "M15.9 12.8c0 .3-.1.7-.4.9l-1.8 1.8c-.2.2-.6.4-.9.4-.3 0-.7-.1-.9-.4L8 11.6l-4 3.9c-.2.2-.6.4-.9.4-.4 0-.7-.1-.9-.4L.4 13.7c-.3-.2-.4-.6-.4-.9 0-.4.1-.7.4-.9L4.3 8 .4 4c-.3-.2-.4-.6-.4-.9 0-.4.1-.7.4-.9L2.2.4c.2-.3.6-.4.9-.4.4 0 .7.1.9.4l4 3.9L11.9.4c.2-.3.6-.4.9-.4.4 0 .7.1.9.4l1.8 1.8c.2.3.4.6.4.9 0 .3-.1.7-.4.9l-3.9 3.9 3.9 3.9c.3.3.4.6.4 1z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18.8 5.2" }, this.props),
        _react2.default.createElement("path", { d: "M18.8 1.3v2.6c0 .4-.1.7-.4.9-.2.2-.6.4-.9.4H1.3c-.4 0-.7-.2-.9-.4-.3-.3-.4-.6-.4-1V1.3C0 1 .1.6.4.4s.5-.4.9-.4h16.3c.3 0 .7.1.9.4s.3.5.3.9z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18.8 18.8" }, this.props),
        _react2.default.createElement("path", { d: "M18.8 8.1v2.6c0 .4-.1.7-.4.9-.2.2-.6.4-.9.4H12v5.5c0 .4-.1.7-.4.9s-.6.4-.9.4H8.2c-.4 0-.7-.1-.9-.4s-.4-.6-.4-.9V12H1.3c-.3 0-.7-.1-.9-.4-.3-.3-.4-.5-.4-.9V8.1c0-.3.1-.7.4-.9s.6-.4.9-.4h5.6V1.3c0-.4.1-.7.4-.9.2-.3.5-.4.9-.4h2.5c.4 0 .7.1.9.4.3.2.4.5.4.9v5.6h5.6c.3 0 .7.1.9.4s.3.5.3.8z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 22.3 22.3" }, this.props),
        _react2.default.createElement("path", { d: "M15.4 9.4c0-1.7-.6-3.1-1.7-4.3s-2.6-1.7-4.3-1.7c-1.6 0-3 .6-4.2 1.7S3.4 7.7 3.4 9.4c0 1.6.6 3 1.8 4.2s2.6 1.8 4.2 1.8c1.7 0 3.1-.6 4.3-1.8s1.7-2.5 1.7-4.2zm6.9 11.1c0 .5-.2.9-.5 1.2s-.8.5-1.2.5-.9-.2-1.2-.5l-4.6-4.6c-1.6 1.1-3.4 1.7-5.3 1.7-1.3 0-2.5-.2-3.7-.8s-2.2-1.2-3-2-1.5-1.8-2-3C.3 11.9 0 10.7 0 9.4c0-1.3.3-2.5.8-3.7.5-1.2 1.2-2.2 2-3s1.8-1.5 3-2C6.9.2 8.2 0 9.4 0c1.3 0 2.5.2 3.7.7 1.1.5 2.2 1.2 3 2s1.5 1.9 2 3 .8 2.3.8 3.7c0 2-.6 3.8-1.7 5.3l4.6 4.6c.3.4.5.8.5 1.2z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 22.3 21.3" }, this.props),
        _react2.default.createElement("path", { d: "M15.2 13l4.1-4-5.7-.8-2.5-5.1-2.5 5.1L3 9l4.1 4-1 5.6 5.1-2.7 5.1 2.7-1.1-5.6zm7.1-4.8c0 .2-.1.4-.4.7l-4.8 4.7 1.1 6.7v.2c0 .5-.1.7-.5.7-.2 0-.4-.1-.6-.2l-6-3.1-6 3.1c-.2.1-.4.2-.6.2s-.2 0-.3-.2c-.1 0-.2-.2-.2-.4v-.2l1.1-6.7L.3 8.9c-.2-.3-.3-.5-.3-.7 0-.3.3-.6.8-.6l6.8-1 3-6.1c.1-.3.3-.5.6-.5s.5.2.7.6l3 6.1 6.8 1c.3 0 .6.2.6.5z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 22.3 21.3" }, this.props),
        _react2.default.createElement("path", { d: "M22.3 8.2c0 .2-.1.4-.4.7l-4.8 4.7 1.1 6.7v.2c0 .2 0 .4-.1.5-.1.1-.2.2-.4.2s-.4-.1-.6-.2l-6-3.1-6 3.1c-.2.1-.4.2-.6.2s-.2 0-.3-.2c-.1 0-.2-.2-.2-.4v-.2l1.1-6.7L.3 8.9c-.2-.3-.3-.5-.3-.7 0-.3.3-.6.8-.6l6.8-1 3-6.1c.1-.3.3-.5.6-.5s.5.2.7.6l3 6.1 6.8 1c.3 0 .6.2.6.5z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 22.3 21.3" }, this.props),
        _react2.default.createElement("path", { d: "M15.9 12.4L19.3 9l-4.8-.7-.9-.1-.4-.8-2.1-4.3V16l.8.4 4.3 2.2-.8-4.7-.2-.9.7-.6zm6-3.5l-4.8 4.7 1.1 6.7c0 .3 0 .5-.1.7-.1.2-.2.3-.4.3s-.3-.1-.6-.2l-6-3.1-6 3.1c-.2.1-.4.2-.6.2s-.2-.1-.3-.3c-.2-.1-.2-.4-.1-.7l1.1-6.7L.3 8.9c-.3-.3-.4-.6-.3-.8.1-.3.3-.4.7-.5l6.8-1 3-6.1c.2-.3.4-.5.6-.5.2 0 .5.2.7.6l3 6.1 6.8 1c.4 0 .6.2.7.5 0 .1 0 .4-.4.7z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrap":"findify-widget--rating__wrap","stars":"findify-widget--rating__stars","star":"findify-widget--rating__star","count":"findify-widget--rating__count"};

/***/ }),
/* 68 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrap":"findify-widget--bread-crumbs__wrap","title":"findify-widget--bread-crumbs__title","filter":"findify-widget--bread-crumbs__filter","filter-title":"findify-widget--bread-crumbs__filter-title","filterTitle":"findify-widget--bread-crumbs__filter-title","filter-remove":"findify-widget--bread-crumbs__filter-remove","filterRemove":"findify-widget--bread-crumbs__filter-remove","color-filter":"findify-widget--bread-crumbs__color-filter","colorFilter":"findify-widget--bread-crumbs__color-filter"};

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("lodash/compact");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("react-dropdown");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"findify-widget--sorting","title":"findify-widget--sorting__title","mobile":"findify-widget--sorting__mobile","dropdown":"findify-widget--sorting__dropdown","dropdown-root":"findify-widget--sorting__dropdown-root","dropdownRoot":"findify-widget--sorting__dropdown-root","dropdown-control":"findify-widget--sorting__dropdown-control","dropdownControl":"findify-widget--sorting__dropdown-control","dropdown-arrow":"findify-widget--sorting__dropdown-arrow","dropdownArrow":"findify-widget--sorting__dropdown-arrow","dropdown-menu":"findify-widget--sorting__dropdown-menu","dropdownMenu":"findify-widget--sorting__dropdown-menu","dropdown-group":"findify-widget--sorting__dropdown-group","dropdownGroup":"findify-widget--sorting__dropdown-group","dropdown-title":"findify-widget--sorting__dropdown-title","dropdownTitle":"findify-widget--sorting__dropdown-title","dropdown-option":"findify-widget--sorting__dropdown-option","dropdownOption":"findify-widget--sorting__dropdown-option"};

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("lodash/range");

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_internals_Icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);




var styles = __webpack_require__(26);
var Button = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(__WEBPACK_IMPORTED_MODULE_1_recompose__["pure"], Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withHandlers"])({
    onClick: function onClick(_ref) {
        var onChange = _ref.onChange,
            page = _ref.page;
        return function (e) {
            if (e) e.preventDefault();
            return onChange(page);
        };
    }
}))(function (_ref2) {
    var label = _ref2.label,
        onClick = _ref2.onClick,
        active = _ref2.active,
        className = _ref2.className,
        prependIcon = _ref2.prependIcon,
        appendIcon = _ref2.appendIcon;
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { onClick: onClick, className: __WEBPACK_IMPORTED_MODULE_3_classnames__(styles.button, active && styles.active, className) }, prependIcon && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_internals_Icon__["a" /* default */], { name: prependIcon, className: styles.icon }), label, appendIcon && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_internals_Icon__["a" /* default */], { name: appendIcon, className: styles.icon }));
});

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export reactTruncate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_map__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__canvas__ = __webpack_require__(77);





var renderLine = function renderLine(line, i, arr) {
    if (i === arr.length - 1) return '<span>' + line + '</span>';
    if (line) return '<span>' + line + '</span><br />';
    return '<br />';
};
var styles = __webpack_require__(79);
var reactTruncate = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(__WEBPACK_IMPORTED_MODULE_2_recompose__["pure"], Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["defaultProps"])({
    children: '',
    ellipsis: '…',
    lines: 1
}), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withState"])('target', 'setTarget', void 0), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withState"])('width', 'setWidth', 0), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withPropsOnChange"])(['target'], function (_ref) {
    var target = _ref.target,
        setWidth = _ref.setWidth;
    return {
        canvas: target && new __WEBPACK_IMPORTED_MODULE_3__canvas__["a" /* Canvas */](target, setWidth)
    };
}), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withHandlers"])({
    getLines: function getLines(_ref2) {
        var ellipsis = _ref2.ellipsis,
            lines = _ref2.lines,
            children = _ref2.children,
            canvas = _ref2.canvas;
        return function () {
            return canvas.computeLines(ellipsis, lines, children);
        };
    }
}), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["lifecycle"])({
    componentWillUnmount: function componentWillUnmount() {
        var _this = this;

        window.removeEventListener('resize', function () {
            return _this.props.canvas.unbind();
        });
    }
}), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withPropsOnChange"])(['target', 'width'], function (_ref3) {
    var target = _ref3.target,
        width = _ref3.width,
        getLines = _ref3.getLines,
        children = _ref3.children;
    return {
        content: target && __WEBPACK_IMPORTED_MODULE_0_lodash_map___default()(getLines(), renderLine).join('')
    };
}), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["onlyUpdateForKeys"])(['content']))(function (_ref4) {
    var content = _ref4.content,
        children = _ref4.children,
        ellipsis = _ref4.ellipsis,
        setTarget = _ref4.setTarget,
        setText = _ref4.setText,
        text = _ref4.text,
        target = _ref4.target;
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { ref: function ref(r) {
            return !target && !!r && setTarget(r);
        } }, content && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { dangerouslySetInnerHTML: { __html: content } }) || __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", null, children));
});
var simpleTruncate = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withState"])('target', 'setTarget', void 0), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withPropsOnChange"])(['target'], function (_ref5) {
    var target = _ref5.target;
    return {
        lineHeight: target && window.getComputedStyle(target)['line-height'] || 1.3
    };
}))(function (_ref6) {
    var children = _ref6.children,
        target = _ref6.target,
        setTarget = _ref6.setTarget,
        lineHeight = _ref6.lineHeight,
        _ref6$lines = _ref6.lines,
        lines = _ref6$lines === undefined ? 3 : _ref6$lines;
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: styles.root, style: { maxHeight: lineHeight * lines + 'em', WebkitLineClamp: lines }, ref: function ref(r) {
            return !target && !!r && setTarget(r);
        } }, children);
});
/* harmony default export */ __webpack_exports__["a"] = (simpleTruncate);

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("lodash/map");

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Canvas; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fontfaceobserver__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fontfaceobserver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fontfaceobserver__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var divElement = document.createElement('div');
var spanElement = document.createElement('div');
var ellipsis = {};
var fontObservers = {};
var getFont = function getFont(font) {
    if (fontObservers[font]) return fontObservers[font];
    fontObservers[font] = new __WEBPACK_IMPORTED_MODULE_0_fontfaceobserver___default.a(font).load();
    return fontObservers[font];
};
var getEllipsis = function getEllipsis(text) {
    if (ellipsis[text]) return ellipsis[text];
    var span = spanElement.cloneNode();
    span.style.position = 'fixed';
    span.style.visibility = 'hidden';
    span.style.top = 0;
    span.innerHTML = text;
    document.body.appendChild(span);
    ellipsis[text] = span;
    return span;
};
var getEllipsisWidth = function getEllipsisWidth(node) {
    return node.offsetWidth;
};
var Canvas = function () {
    function Canvas(target, updateWidthCallback) {
        _classCallCheck(this, Canvas);

        this.canvas = void 0;
        this.target = void 0;
        this.updateWidthCallback = void 0;
        this.target = target;
        this.updateWidthCallback = updateWidthCallback;
        this.canvas = document.createElement('canvas').getContext('2d');
        this.setTargetWidth = this.setTargetWidth.bind(this);
        this.setTarget();
        document.addEventListener('resize', this.setTargetWidth);
    }

    _createClass(Canvas, [{
        key: 'unbind',
        value: function unbind() {
            document.removeEventListener('resize', this.setTargetWidth);
        }
    }, {
        key: 'measureWidth',
        value: function measureWidth(text) {
            return this.canvas.measureText(text).width;
        }
    }, {
        key: 'setTarget',
        value: function setTarget() {
            var _this = this;

            var style = window.getComputedStyle(this.target);
            var font = [style['font-weight'], style['font-style'], style['font-size'], style['font-family']].join(' ');
            this.canvas.font = font;
            var pureFontName = style['font-family'].replace(/\"/g, '').split(',')[0];
            getFont(pureFontName).then(function () {
                return _this.setTargetWidth();
            }).catch(function () {
                return _this.setTargetWidth();
            });
        }
    }, {
        key: 'setTargetWidth',
        value: function setTargetWidth() {
            if (!this.target) return;
            var targetWidth = this.target.parentNode.getBoundingClientRect().width;
            if (!targetWidth) {
                return requestAnimationFrame(this.setTargetWidth);
            }
            this.targetWidth = targetWidth;
            return this.updateWidthCallback(targetWidth);
        }
    }, {
        key: 'computeLines',
        value: function computeLines(ellipsis, numLines, text) {
            var lines = [];
            var textLines = text.split('\n').map(function (line) {
                return line.replace(/\s\s+/g, ' ').split(' ');
            });
            var ellipsisWidth = getEllipsisWidth(getEllipsis(ellipsis));
            var targetWidth = this.targetWidth - 1;
            for (var line = 1; line <= numLines; line++) {
                var textWords = textLines[0];
                if (textWords.length === 0) {
                    lines.push();
                    textLines.shift();
                    line--;
                    continue;
                }
                var resultLine = textWords.join(' ');
                if (this.measureWidth(resultLine) <= targetWidth && textLines.length === 1) {
                    lines.push(resultLine);
                    break;
                }
                if (line === numLines) {
                    var textRest = textWords.join(' ');
                    var lower = 0;
                    var upper = textRest.length - 1;
                    while (lower <= upper) {
                        var middle = Math.floor((lower + upper) / 2);
                        var testLine = textRest.slice(0, middle + 1);
                        if (this.measureWidth(testLine) + ellipsisWidth <= targetWidth) {
                            lower = middle + 1;
                        } else {
                            upper = middle - 1;
                        }
                    }
                    resultLine = textRest.slice(0, lower) + ellipsis;
                } else {
                    var _lower = 0;
                    var _upper = textWords.length - 1;
                    while (_lower <= _upper) {
                        var _middle = Math.floor((_lower + _upper) / 2);
                        var _testLine = textWords.slice(0, _middle + 1).join(' ');
                        if (this.measureWidth(_testLine) <= targetWidth) {
                            _lower = _middle + 1;
                        } else {
                            _upper = _middle - 1;
                        }
                    }
                    if (_lower === 0) {
                        line = numLines - 1;
                        continue;
                    }
                    resultLine = textWords.slice(0, _lower).join(' ');
                    textLines[0].splice(0, _lower);
                }
                lines.push(resultLine);
            }
            return lines;
        }
    }]);

    return Canvas;
}();

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("fontfaceobserver");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"findify-block--truncate"};

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("lodash/defer");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"loading":"findify-block--image__loading","loaded":"findify-block--image__loaded"};

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Stickers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isArray__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_memoize__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_memoize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_memoize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom_factories__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom_factories___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom_factories__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_helpers_template__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);



var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();






var styles = __webpack_require__(84);

var translateZ = 'translateY(-50%)';
var ignore = ['out-of-stock'];
var getPosition = __WEBPACK_IMPORTED_MODULE_1_lodash_memoize___default()(function (position) {
    var _position$split = position.split('-'),
        _position$split2 = _slicedToArray(_position$split, 2),
        y = _position$split2[0],
        x = _position$split2[1];

    var root = {};
    var container = {};
    if (y === 'center') {
        root.top = '50%';
        container = {
            WebkitTransform: translateZ,
            MsTransform: translateZ,
            transform: translateZ
        };
    } else {
        root[y] = 0;
    }
    if (x === 'center') {
        container.width = '100%';
    } else {
        container.float = x;
    }
    return { root: root, container: container };
});
var getContent = __WEBPACK_IMPORTED_MODULE_1_lodash_memoize___default()(function (value, templates) {
    if (!__WEBPACK_IMPORTED_MODULE_0_lodash_isArray___default()(value)) return templates.single;
    if (value.length === 1) return Object(__WEBPACK_IMPORTED_MODULE_5_helpers_template__["a" /* default */])(templates.single)(value[0]);
    return Object(__WEBPACK_IMPORTED_MODULE_5_helpers_template__["a" /* default */])(templates.multiple)(Math.max.apply(Math, value));
});
var getStyles = __WEBPACK_IMPORTED_MODULE_1_lodash_memoize___default()(function (styles) {
    var normalizedStyles = Object.assign({}, styles, { fontFamily: styles.fontFamily && styles.fontFamily.replace(';', ''), fontSize: styles.fontSize + 'px' });
    return normalizedStyles;
});
var Sticker = Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["withProps"])(function (_ref) {
    var config = _ref.config,
        value = _ref.value;
    return {
        position: getPosition(config.position),
        content: getContent(value, config.template),
        style: getStyles(config.styles)
    };
}))(function (_ref2) {
    var position = _ref2.position,
        style = _ref2.style,
        content = _ref2.content,
        name = _ref2.name;
    return __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_6_classnames__(styles.root, 'sticker-' + name), style: position.root }, __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: styles.sticker, style: Object.assign({}, position.container, style) }, content));
});
var Stickers = function Stickers(_ref3) {
    var stickers = _ref3.stickers,
        config = _ref3.config;

    return __WEBPACK_IMPORTED_MODULE_3_react_dom_factories__["div"]({}, !!stickers && Object.keys(stickers).filter(function (i) {
        return stickers[i] && !!config[i] && !ignore.includes(i);
    }).map(function (key) {
        return Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["createEagerElement"])(Sticker, {
            key: key,
            name: key,
            value: stickers[key],
            config: config[key]
        });
    }));
};

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("react-dom-factories");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"findify-block--stickers","sticker":"findify-block--stickers__sticker"};

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return priceIsSampleArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPrice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isArray__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_currency_formatter__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_currency_formatter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_currency_formatter__);



var priceIsSampleArray = function priceIsSampleArray(price) {
    if (!__WEBPACK_IMPORTED_MODULE_0_lodash_isArray___default()(price)) return false;
    return price.reduce(function (a, b) {
        return a === b ? a : void 0;
    }) !== void 0;
};
var getPrice = function getPrice(price, currency) {
    if (!__WEBPACK_IMPORTED_MODULE_0_lodash_isArray___default()(price)) return price;
    if (price.reduce(function (a, b) {
        return a === b ? a : void 0;
    }) !== void 0) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_currency_formatter__["format"])(price[0], currency);
    }
    return [Object(__WEBPACK_IMPORTED_MODULE_1_currency_formatter__["format"])(Math.min.apply(Math, price), currency), Object(__WEBPACK_IMPORTED_MODULE_1_currency_formatter__["format"])(Math.max.apply(Math, price), currency)].join(' - ');
};

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEqual");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("lodash/isFunction");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("lodash/isObject");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("lodash/identity");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"findify-widget--product","simple":"findify-widget--product__simple","image-wrap":"findify-widget--product__image-wrap","imageWrap":"findify-widget--product__image-wrap","image":"findify-widget--product__image","content":"findify-widget--product__content","title":"findify-widget--product__title","description":"findify-widget--product__description","rating":"findify-widget--product__rating","price-wrap":"findify-widget--product__price-wrap","priceWrap":"findify-widget--product__price-wrap","price":"findify-widget--product__price","compare":"findify-widget--product__compare","color":"findify-widget--product__color","out-of-stock":"findify-widget--product__out-of-stock","outOfStock":"findify-widget--product__out-of-stock"};

/***/ }),
/* 92 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"findify-lists--products-list","title":"findify-lists--products-list__title"};

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileFacetsList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_helpers_getRangeFacetKey__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Facet__ = __webpack_require__(96);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var styles = __webpack_require__(18);



var MobileFacetsList = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["setDisplayName"])('MobileFacetsList'), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withState"])('changes', 'updateChanges', {}), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withState"])('selectedFacet', 'setSelectedFacet', false), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withPropsOnChange"])(['changes', 'facets'], function (_ref) {
    var changes = _ref.changes,
        facets = _ref.facets;
    return {
        hasNotCommittedData: !!Object.keys(changes).length,
        facets: facets.map(function (facet) {
            if (!Object.keys(changes).includes(facet.name)) return facet;
            var changedFacet = changes[facet.name];
            var isRange = facet.type === 'range';
            var values = facet.values;
            if (isRange) {
                var valuesKeys = facet.values.map(function (value) {
                    return Object(__WEBPACK_IMPORTED_MODULE_3_helpers_getRangeFacetKey__["a" /* getRangeFacetKey */])(value);
                });
                var notInList = Object.keys(changedFacet).filter(function (key) {
                    return !valuesKeys.includes(key);
                });
                if (!!notInList.length) {
                    values = [].concat(_toConsumableArray(notInList.map(function (key) {
                        return changedFacet[key].changes;
                    })), _toConsumableArray(values));
                }
            }
            var update = Object.assign({}, facet, { values: values.map(function (value) {
                    var key = isRange ? Object(__WEBPACK_IMPORTED_MODULE_3_helpers_getRangeFacetKey__["a" /* getRangeFacetKey */])(value) : value.value;
                    return !!changedFacet[key] ? changedFacet[key].changes : value;
                }) });
            return update;
        })
    };
}), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withHandlers"])({
    onCommit: function onCommit(_ref2) {
        var updateChanges = _ref2.updateChanges,
            onChange = _ref2.onChange,
            changes = _ref2.changes,
            updateFacets = _ref2.updateFacets,
            setSelectedFacet = _ref2.setSelectedFacet;
        return function (direct) {
            var shouldCollapse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var update = direct || changes;
            var res = new Array();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = Object.keys(update)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var facet = _step.value;
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = Object.keys(update[facet])[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var field = _step2.value;

                            res.push(update[facet][field]);
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            updateChanges({});
            onChange(res);
            shouldCollapse && setSelectedFacet(false);
        };
    },
    getSelected: function getSelected(_ref3) {
        var facets = _ref3.facets;
        return function (facetKey) {
            return facets.find(function (facet) {
                return facet.name === facetKey;
            }).values.filter(function (value) {
                return value.selected;
            }).length;
        };
    },
    onBackToFacets: function onBackToFacets(_ref4) {
        var setSelectedFacet = _ref4.setSelectedFacet;
        return function () {
            return setSelectedFacet(false);
        };
    }
}), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withHandlers"])({
    onChange: function onChange(_ref5) {
        var updateChanges = _ref5.updateChanges,
            changes = _ref5.changes,
            onCommit = _ref5.onCommit;
        return function (update) {
            var type = update.type,
                name = update.name,
                value = update.changes.value;

            if (changes && changes[name] && changes[name][value]) {
                var mutation = Object.assign({}, changes);
                delete mutation[name][value];
                return updateChanges(mutation);
            }
            updateChanges(Object.assign({}, changes, _defineProperty({}, name, Object.assign({}, changes[name], _defineProperty({}, value, update)))), function () {
                return type === 'category' && onCommit();
            });
        };
    },
    onReset: function onReset(_ref6) {
        var onCommit = _ref6.onCommit,
            onChange = _ref6.onChange,
            updateChanges = _ref6.updateChanges,
            facets = _ref6.facets,
            changes = _ref6.changes;
        return function (type, name) {
            var commit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            var facet = facets.find(function (facet) {
                return facet.name === name;
            });
            var update = Object.assign({}, changes);
            var hasUnsaved = !!update[name];
            if (hasUnsaved) {
                delete update[name];
            }
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = facet.values[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var value = _step3.value;

                    if (value.selected) {
                        update = Object.assign({}, update, _defineProperty({}, name, Object.assign({}, update[name], _defineProperty({}, value.value, {
                            type: facet.type,
                            changes: Object.assign({}, value, { selected: false })
                        }))));
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            ;
            if (commit) return onCommit(update, false);
            return update;
        };
    },
    onResetAll: function onResetAll(_ref7) {
        var onClearAll = _ref7.onClearAll;
        return onClearAll;
    }
}))(function (_a) {
    var facets = _a.facets,
        config = _a.config,
        rest = __rest(_a, ["facets", "config"]);

    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_2_classnames__(styles.wrap, !rest.selectedFacet && styles.wrapDark) }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.header }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__Header__["b" /* Header */], Object.assign({}, rest, { facets: facets, config: config }))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__Header__["a" /* FacetTitle */], Object.assign({}, rest, { facets: facets, config: config })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.content }, facets.map(function (facet, index) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["createEagerElement"])(__WEBPACK_IMPORTED_MODULE_5__Facet__["a" /* Facet */], Object.assign({}, rest, facet, { config: config,
            facet: facet, key: facet.name, label: config.facets.labels[facet.name], type: facet.type }));
    })));
});

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacetTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_keys__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_internals_Icon__ = __webpack_require__(3);






var styles = __webpack_require__(18);
var Button = function Button(_ref) {
    var onClick = _ref.onClick,
        children = _ref.children,
        flat = _ref.flat;
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("button", { onClick: onClick, className: __WEBPACK_IMPORTED_MODULE_3_classnames__(styles.button, flat && styles.flat) }, children);
};
var RootHeader = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["branch"])(function (_ref2) {
    var selectedFacets = _ref2.selectedFacets;
    return !!selectedFacets.length;
}, Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["renderComponent"])(function (_ref3) {
    var onClose = _ref3.onClose,
        onResetAll = _ref3.onResetAll,
        config = _ref3.config;
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: styles.buttonsGroup }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](Button, { onClick: onResetAll }, config.facets.i18n.resetAll), __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: styles.divider }), __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](Button, { onClick: onClose, className: styles.light }, config.facets.i18n.showResults));
}), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["renderComponent"])(function (_ref4) {
    var onClose = _ref4.onClose,
        config = _ref4.config;
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](Button, { onClick: onClose, flat: true }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_internals_Icon__["a" /* default */], { name: 'chevron-left', className: __WEBPACK_IMPORTED_MODULE_3_classnames__(styles.icon, styles.pre) }), config.facets.i18n.hideFilters);
})))(__WEBPACK_IMPORTED_MODULE_2_recompose__["renderNothing"]);
var FacetHeader = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["branch"])(function (_ref5) {
    var changes = _ref5.changes,
        selectedFacet = _ref5.selectedFacet;
    return !!(changes[selectedFacet] && !!__WEBPACK_IMPORTED_MODULE_0_lodash_keys___default()(changes[selectedFacet]).length);
}, Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["renderComponent"])(function (_ref6) {
    var onCommit = _ref6.onCommit,
        config = _ref6.config;
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](Button, { onClick: function onClick() {
            return onCommit();
        } }, config.facets.i18n.ok);
}), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["renderComponent"])(function (_ref7) {
    var onBackToFacets = _ref7.onBackToFacets,
        config = _ref7.config;
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](Button, { onClick: onBackToFacets, flat: true }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_internals_Icon__["a" /* default */], { name: 'chevron-left', className: __WEBPACK_IMPORTED_MODULE_3_classnames__(styles.icon, styles.pre) }), config.facets.i18n.backToFilters);
}))(__WEBPACK_IMPORTED_MODULE_2_recompose__["renderNothing"]);
var FacetTitle = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["branch"])(function (_ref8) {
    var selectedFacet = _ref8.selectedFacet;
    return !selectedFacet;
}, __WEBPACK_IMPORTED_MODULE_2_recompose__["renderNothing"], Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["renderComponent"])(Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withProps"])(function (_ref9) {
    var changes = _ref9.changes,
        selectedFacet = _ref9.selectedFacet,
        getSelected = _ref9.getSelected;
    return {
        showRest: !!(changes[selectedFacet] && !!__WEBPACK_IMPORTED_MODULE_0_lodash_keys___default()(changes[selectedFacet]).length) || !!getSelected(selectedFacet)
    };
}), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withHandlers"])({
    onReset: function onReset(_ref10) {
        var _onReset = _ref10.onReset,
            selectedFacet = _ref10.selectedFacet,
            facets = _ref10.facets;
        return function () {
            var facetType = facets.find(function (facet) {
                return facet.name === selectedFacet;
            }).type;
            _onReset(facetType, selectedFacet);
        };
    }
}))(function (_ref11) {
    var selectedFacet = _ref11.selectedFacet,
        onReset = _ref11.onReset,
        showRest = _ref11.showRest,
        config = _ref11.config;
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: styles.facetTitle }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("h5", { className: styles.facetTitleName }, config.facets.labels[selectedFacet]), showRest && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: styles.resetButton, onClick: onReset }, config.facets.i18n.reset));
})))(__WEBPACK_IMPORTED_MODULE_2_recompose__["renderNothing"]);

var Header = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withProps"])(function (_ref12) {
    var facets = _ref12.facets,
        getSelected = _ref12.getSelected;
    return {
        selectedFacets: facets.filter(function (facet) {
            return !!getSelected(facet.name);
        })
    };
}), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["onlyUpdateForKeys"])(['selectedFacet', 'selectedFacets', 'changes', 'hasNotCommittedData']), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["branch"])(function (_ref13) {
    var selectedFacet = _ref13.selectedFacet;
    return !!selectedFacet;
}, Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["renderComponent"])(FacetHeader), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["renderComponent"])(RootHeader)))(__WEBPACK_IMPORTED_MODULE_2_recompose__["renderNothing"]);

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("lodash/keys");

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Facet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_internals_Icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_helpers_mapTypeToFacet__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_helpers_formatRange__ = __webpack_require__(10);
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};





var styles = __webpack_require__(18);
var FacetPreview = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withPropsOnChange"])(['type'], function (_ref) {
    var config = _ref.config,
        facet = _ref.facet;
    return {
        type: config.facets.types && config.facets.types[facet.name] || facet.type
    };
}), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withPropsOnChange"])(['values'], function (_ref2) {
    var values = _ref2.values,
        type = _ref2.type,
        config = _ref2.config;

    var selectedItems = values.filter(function (item) {
        return item.selected;
    }).map(function (item) {
        return type === 'range' ? Object(__WEBPACK_IMPORTED_MODULE_4_helpers_formatRange__["a" /* default */])(Object.assign({}, item, { config: Object.assign({}, config.facets.range, { currency: config.currency }) })) : item.value;
    });
    return {
        hasSelectedItems: !!selectedItems && !!selectedItems.length,
        selectedItems: selectedItems.join(', ')
    };
}), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withHandlers"])({
    onReset: function onReset(_ref3) {
        var _onReset = _ref3.onReset,
            name = _ref3.name,
            type = _ref3.type;
        return function (e) {
            return _onReset(type, name);
        };
    },
    onSelect: function onSelect(_ref4) {
        var name = _ref4.name,
            setSelectedFacet = _ref4.setSelectedFacet;
        return function () {
            return setSelectedFacet(name);
        };
    }
}))(function (_ref5) {
    var label = _ref5.label,
        onSelect = _ref5.onSelect,
        onReset = _ref5.onReset,
        hasSelectedItems = _ref5.hasSelectedItems,
        selectedItems = _ref5.selectedItems,
        config = _ref5.config;
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: styles.preview, onClick: onSelect }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.previewContainer }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.previewContent }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h5", { className: styles.previewTitle }, label), !!selectedItems && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.selectedItems }, selectedItems)), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.previewActions }, hasSelectedItems && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: styles.previewReset, onClick: onReset }, config.facets.i18n.reset), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_internals_Icon__["a" /* default */], { name: 'chevron-right', className: styles.previewIcon }))));
});
var FacetBody = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withPropsOnChange"])(['type'], function (_ref6) {
    var config = _ref6.config,
        facet = _ref6.facet;

    var type = config.facets.types && config.facets.types[facet.name] || facet.type;
    return {
        type: type,
        factory: Object(__WEBPACK_IMPORTED_MODULE_3_helpers_mapTypeToFacet__["a" /* mapTypeToFacet */])(type),
        config: Object.assign({}, config.facets[type], { currency: config.currency })
    };
})(function (_a) {
    var facet = _a.facet,
        type = _a.type,
        factory = _a.factory,
        rest = __rest(_a, ["facet", "type", "factory"]);

    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.body }, factory(Object.assign({}, rest, facet, { isMobile: true })));
});
var Facet = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["branch"])(function (_ref7) {
    var selectedFacet = _ref7.selectedFacet;
    return !selectedFacet;
}, Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["renderComponent"])(FacetPreview), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["branch"])(function (_ref8) {
    var selectedFacet = _ref8.selectedFacet,
        name = _ref8.name;
    return selectedFacet === name;
}, Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["renderComponent"])(FacetBody), __WEBPACK_IMPORTED_MODULE_1_recompose__["renderNothing"])))(__WEBPACK_IMPORTED_MODULE_1_recompose__["renderNothing"]);

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorBodyFacet", function() { return ColorBodyFacet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_tinycolor2__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_tinycolor2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_tinycolor2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_internals_Icon__ = __webpack_require__(3);
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};





var styles = __webpack_require__(99);
var Item = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(__WEBPACK_IMPORTED_MODULE_1_recompose__["pure"], Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withPropsOnChange"])(['title'], function (_ref) {
    var title = _ref.title,
        mapping = _ref.config.mapping;
    return {
        background: title !== 'Multicolor' && mapping[title],
        checkMarkStyles: { fill: __WEBPACK_IMPORTED_MODULE_3_tinycolor2__(title).isDark() ? '#fff' : '#333' }
    };
}), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withHandlers"])({
    onClick: function onClick(_ref2) {
        var onChange = _ref2.onChange,
            selected = _ref2.selected,
            item = _ref2.item;
        return function (e) {
            if (e) e.preventDefault();
            return onChange(Object.assign({}, item, { selected: !item.selected }));
        };
    }
}))(function (_ref3) {
    var title = _ref3.title,
        background = _ref3.background,
        item = _ref3.item,
        onClick = _ref3.onClick,
        checkMarkStyles = _ref3.checkMarkStyles;
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.item }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: __WEBPACK_IMPORTED_MODULE_2_classnames__(styles.ball, title === 'Multicolor' && 'multiply-gradient'), style: { background: background }, onClick: onClick }, item.selected && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_internals_Icon__["a" /* default */], { name: 'check', style: checkMarkStyles, className: styles.checkMark })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.tooltip }, title));
});
var ColorBodyFacet = function ColorBodyFacet(_a) {
    var values = _a.values,
        rest = __rest(_a, ["values"]);
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.root }, values.map(function (item) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["createEagerElement"])(Item, Object.assign({}, rest, { key: item.value, title: item.value, item: item }));
    }));
};

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("tinycolor2");

/***/ }),
/* 99 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"list":"findify-block--color-body-facet__list","item":"findify-block--color-body-facet__item","ball":"findify-block--color-body-facet__ball","check-mark":"findify-block--color-body-facet__check-mark","checkMark":"findify-block--color-body-facet__check-mark","tooltip":"findify-block--color-body-facet__tooltip"};

/***/ }),
/* 100 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrap":"findify-block--generic-facet__wrap","content":"findify-block--generic-facet__content","title":"findify-block--generic-facet__title","toggle":"findify-block--generic-facet__toggle","icon":"findify-block--generic-facet__icon","mobile":"findify-block--generic-facet__mobile","hidden":"findify-block--generic-facet__hidden"};

/***/ }),
/* 101 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrap":"findify-block--expand-button__wrap","sign":"findify-block--expand-button__sign","icon":"findify-block--expand-button__icon"};

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchInput; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_internals_Icon__ = __webpack_require__(3);



var styles = __webpack_require__(103);
var SearchInput = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withHandlers"])({
    onChange: function onChange(_ref) {
        var _onChange = _ref.onChange;
        return function (e) {
            return _onChange(e.target.value);
        };
    }
})(function (_ref2) {
    var onChange = _ref2.onChange,
        value = _ref2.value,
        placeholder = _ref2.placeholder;
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.wrap }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_internals_Icon__["a" /* default */], { name: 'search', className: styles.icon }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { placeholder: placeholder, type: 'search', className: styles.input, onChange: onChange, defaultValue: value }));
});


/***/ }),
/* 103 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrap":"findify-block--search-input__wrap","input":"findify-block--search-input__input","icon":"findify-block--search-input__icon"};

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListRenderer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_virtualized_dist_commonjs_AutoSizer__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_virtualized_dist_commonjs_AutoSizer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_virtualized_dist_commonjs_AutoSizer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_virtualized_dist_commonjs_List__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_virtualized_dist_commonjs_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_virtualized_dist_commonjs_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_virtualized_dist_commonjs_CellMeasurer__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_virtualized_dist_commonjs_CellMeasurer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_virtualized_dist_commonjs_CellMeasurer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Checkbox__ = __webpack_require__(105);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};







var styles = __webpack_require__(40);
var customStyles = __webpack_require__(6);
var StaticList = function StaticList(_a) {
    var items = _a.items,
        className = _a.className,
        _a$itemComponent = _a.itemComponent,
        itemComponent = _a$itemComponent === undefined ? __WEBPACK_IMPORTED_MODULE_6__Checkbox__["a" /* Item */] : _a$itemComponent,
        showAll = _a.showAll,
        rest = __rest(_a, ["items", "className", "itemComponent", "showAll"]);

    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(styles.list, className) }, items.map(function (item) {
        return Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["createEagerElement"])(itemComponent, Object.assign({}, rest, { item: item, key: item.value, title: item.label || item.value }));
    }));
};
var VirtualizedList = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["defaultProps"])({
    cache: new __WEBPACK_IMPORTED_MODULE_5_react_virtualized_dist_commonjs_CellMeasurer__["CellMeasurerCache"]({
        fixedWidth: true,
        minHeight: 20
    })
}), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withProps"])(function (_a) {
    var items = _a.items,
        _a$itemComponent2 = _a.itemComponent,
        itemComponent = _a$itemComponent2 === undefined ? __WEBPACK_IMPORTED_MODULE_6__Checkbox__["a" /* Item */] : _a$itemComponent2,
        cache = _a.cache,
        rest = __rest(_a, ["items", "itemComponent", "cache"]);

    return {
        rowRenderer: function rowRenderer(_ref) {
            var index = _ref.index,
                key = _ref.key,
                parent = _ref.parent,
                style = _ref.style;
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_virtualized_dist_commonjs_CellMeasurer__["CellMeasurer"], { cache: cache, columnIndex: 0, key: key, rowIndex: index, parent: parent }, function (_ref2) {
                var measure = _ref2.measure;
                return Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["createEagerElement"])(itemComponent, Object.assign({}, rest, { item: items[index], title: items[index].label || items[index].value, key: key,
                    style: style }));
            });
        }
    };
}))(function (_ref3) {
    var isMobile = _ref3.isMobile,
        items = _ref3.items,
        rowRenderer = _ref3.rowRenderer,
        config = _ref3.config,
        cache = _ref3.cache;
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_virtualized_dist_commonjs_AutoSizer__["AutoSizer"], { disableHeight: !isMobile }, function (_ref4) {
        var width = _ref4.width,
            height = _ref4.height;
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_virtualized_dist_commonjs_List__["List"], { width: width, className: styles.list, height: isMobile ? height : config.maxItemsCount * config.rowHeight, rowCount: items.length, overscanRowCount: 2, rowHeight: cache.rowHeight, rowRenderer: rowRenderer });
    });
});
var ListRenderer = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withPropsOnChange"])(['slice', 'items'], function (_ref5) {
    var items = _ref5.items,
        slice = _ref5.slice;
    return {
        items: !!slice ? [].concat(_toConsumableArray(items.slice(0, slice))) : items
    };
}), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["branch"])(function (_ref6) {
    var isStatic = _ref6.isStatic;
    return isStatic;
}, Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["renderComponent"])(StaticList), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["renderComponent"])(VirtualizedList)))(__WEBPACK_IMPORTED_MODULE_2_recompose__["renderNothing"]);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_internals_Icon__ = __webpack_require__(3);




var styles = __webpack_require__(106);
var customStyles = __webpack_require__(6);
var Item = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withHandlers"])({
    onClick: function onClick(_ref) {
        var onChange = _ref.onChange,
            item = _ref.item;
        return function () {
            return onChange(Object.assign({}, item, { selected: !item.selected }));
        };
    }
})(function (_ref2) {
    var title = _ref2.title,
        item = _ref2.item,
        onClick = _ref2.onClick,
        style = _ref2.style;
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: style, className: __WEBPACK_IMPORTED_MODULE_2_classnames__(styles.item, customStyles.facetItem, item.selected && styles.selected, item.selected && customStyles.facetItemSelected), onClick: onClick }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_internals_Icon__["a" /* default */], { name: 'check-' + (item.selected ? 'checked' : 'empty'), className: styles.checkbox }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: styles.title }, title), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: styles.count }, "(", item.count, ")"));
});

/***/ }),
/* 106 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"selected-items":"findify-block--checkbox-body-facet--checkbox__selected-items","selectedItems":"findify-block--checkbox-body-facet--checkbox__selected-items","item":"findify-block--checkbox-body-facet--checkbox__item","title":"findify-block--checkbox-body-facet--checkbox__title","count":"findify-block--checkbox-body-facet--checkbox__count","checkbox":"findify-block--checkbox-body-facet--checkbox__checkbox"};

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryBodyFacet", function() { return CategoryBodyFacet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_get__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_internals_ExpandButton__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_immutable__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cursor__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Tree__ = __webpack_require__(111);

var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};





var styles = __webpack_require__(19);


var mapArrayToFacetsCreator = function mapArrayToFacetsCreator(children, selected) {
    return function (array, forceUnselect) {
        return array.map(function (position, index) {
            var selector = array.takeWhile(function (_, i) {
                return i <= index;
            }).map(function (p) {
                return '[' + p + ']';
            }).join('.children');
            try {
                var _a = __WEBPACK_IMPORTED_MODULE_0_lodash_get___default()(children, selector),
                    _ = _a.children,
                    facet = __rest(_a, ["children"]);
                if (forceUnselect) return Object.assign({}, facet, { selected: false });
                return index === array.size - 1 ? Object.assign({}, facet, { selected: selected }) : facet;
            } catch (e) {
                return;
            }
        });
    };
};
var getLost = function getLost(cursor) {
    var size = cursor.size;
    return cursor.size > 2 ? cursor.takeWhile(function (k) {
        size--;
        return size > 1;
    }) : Object(__WEBPACK_IMPORTED_MODULE_4_immutable__["List"])([]);
};
var CategoryBodyFacet = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["mapProps"])(function (_a) {
    var children = _a.values,
        rest = __rest(_a, ["values"]);
    return Object.assign({}, rest, Object(__WEBPACK_IMPORTED_MODULE_5__cursor__["a" /* createCursor */])({ children: children }, Object(__WEBPACK_IMPORTED_MODULE_4_immutable__["List"])([]), 0), { track: Object(__WEBPACK_IMPORTED_MODULE_4_immutable__["List"])([]), children: children });
}), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withState"])('isExpanded', 'setExpanded', function (_ref) {
    var config = _ref.config,
        isMobile = _ref.isMobile;
    return isMobile || !!config.initiallyExpanded;
}), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withHandlers"])({
    toggleExpander: function toggleExpander(_ref2) {
        var isExpanded = _ref2.isExpanded,
            setExpanded = _ref2.setExpanded;
        return function (e) {
            if (e) e.preventDefault();
            return setExpanded(!isExpanded);
        };
    },
    onChange: function onChange(_ref3) {
        var children = _ref3.children,
            _onChange = _ref3.onChange,
            cursor = _ref3.cursor;
        return function (_ref4) {
            var track = _ref4.track,
                selected = _ref4.selected;

            var mapArray = mapArrayToFacetsCreator(children, selected);
            var allTracks = getLost(cursor).concat(track);
            var facets = mapArray(track);
            return _onChange(mapArray(cursor, true).concat(mapArray(allTracks)).filter(function (v) {
                return !!v;
            }).toArray());
        };
    }
}))(function (props) {
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Tree__["a" /* Tree */], Object.assign({ className: styles.wrap }, props, { isRoot: true, selected: true, has_children: true })), !props.isMobile && props.childrenCount > props.config.maxItemsCount && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_internals_ExpandButton__["a" /* ExpandButton */], { expanded: props.isExpanded, onClick: props.toggleExpander, label: props.isExpanded ? props.config.i18n.less : props.config.i18n.more }));
});


/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = require("lodash/get");

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createCursor; });
var createCursor = function createCursor(list, cursor, childrenCount) {
    if (!list.children) return { cursor: cursor, childrenCount: childrenCount };
    var index = list.children.findIndex(function (item) {
        return item.selected;
    });
    var children = list.children[index];
    if (index < 0) return { cursor: cursor, childrenCount: list.children.length };
    return createCursor(children, cursor.push(index), children.length);
};

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tree; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NestedTree__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SingleItem__ = __webpack_require__(113);
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var Tree = Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["compose"])(__WEBPACK_IMPORTED_MODULE_0_recompose__["pure"], Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["withProps"])(function (_ref) {
    var cursor = _ref.cursor,
        track = _ref.track,
        index = _ref.index,
        value = _ref.value;
    return {
        track: index === void 0 ? track : track.push(index)
    };
}), Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["branch"])(function (_ref2) {
    var cursor = _ref2.cursor;
    return cursor.size > 2;
}, Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["renderComponent"])(function (_a) {
    var children = _a.children,
        cursor = _a.cursor,
        rest = __rest(_a, ["children", "cursor"]);

    return Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["createEagerElement"])(Tree, Object.assign({}, rest, children[cursor.first()], { cursor: cursor.shift() }));
})), Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["branch"])(function (_ref3) {
    var hasSelectedSiblings = _ref3.hasSelectedSiblings,
        selected = _ref3.selected;
    return hasSelectedSiblings && !selected;
}, __WEBPACK_IMPORTED_MODULE_0_recompose__["renderNothing"]), Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["withPropsOnChange"])(['children'], function (_ref4) {
    var children = _ref4.children;
    return {
        hasSelectedSiblings: !!(children && children.some(function (child) {
            return child.selected && child.has_children;
        }))
    };
}), Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["withHandlers"])({
    onClick: function onClick(_ref5) {
        var onChange = _ref5.onChange,
            selected = _ref5.selected,
            track = _ref5.track;
        return function () {
            return onChange({ selected: !selected, track: track });
        };
    }
}), Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["branch"])(function (_ref6) {
    var has_children = _ref6.has_children,
        cursor = _ref6.cursor,
        track = _ref6.track;
    return has_children;
}, Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["renderComponent"])(function (props) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["createEagerElement"])(__WEBPACK_IMPORTED_MODULE_1__NestedTree__["a" /* NestedTree */], Object.assign({}, props, { Nested: Tree }));
}), Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["renderComponent"])(__WEBPACK_IMPORTED_MODULE_2__SingleItem__["a" /* SingleItem */])))(__WEBPACK_IMPORTED_MODULE_0_recompose__["renderNothing"]);

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NestedList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NestedTree; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_virtualized_dist_commonjs_AutoSizer__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_virtualized_dist_commonjs_AutoSizer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_virtualized_dist_commonjs_AutoSizer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_virtualized_dist_commonjs_List__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_virtualized_dist_commonjs_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_virtualized_dist_commonjs_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_virtualized_dist_commonjs_CellMeasurer__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_virtualized_dist_commonjs_CellMeasurer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_virtualized_dist_commonjs_CellMeasurer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_internals_Icon__ = __webpack_require__(3);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};







var styles = __webpack_require__(19);
var NestingComponent = function NestingComponent(_a) {
    var isRoot = _a.isRoot,
        rest = __rest(_a, ["isRoot"]);
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div', rest);
};
var customStyles = __webpack_require__(6);
var cache = new __WEBPACK_IMPORTED_MODULE_5_react_virtualized_dist_commonjs_CellMeasurer__["CellMeasurerCache"]({
    defaultHeight: 30,
    fixedHeight: false
});
var StaticList = function StaticList(_a) {
    var withScroll = _a.withScroll,
        selected = _a.selected,
        Nested = _a.Nested,
        children = _a.children,
        rest = __rest(_a, ["withScroll", "selected", "Nested", "children"]);

    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(styles.list, withScroll && styles.scroll) }, children.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Nested, Object.assign({}, rest, item, { key: item.value, title: item.value, index: index }));
    }));
};
var VirtualizedList = function VirtualizedList(_ref) {
    var items = _ref.items,
        rowRenderer = _ref.rowRenderer,
        rowHeight = _ref.rowHeight,
        itemsCount = _ref.itemsCount;
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.list }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_virtualized_dist_commonjs_AutoSizer__["AutoSizer"], { disableHeight: true }, function (_ref2) {
        var width = _ref2.width;
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_virtualized_dist_commonjs_CellMeasurer__["CellMeasurer"], { cellRenderer: function cellRenderer(_a) {
                var rowIndex = _a.rowIndex,
                    rest = __rest(_a, ["rowIndex"]);
                return rowRenderer(Object.assign({ index: rowIndex }, rest));
            }, cache: cache, columnCount: 1, rowCount: itemsCount, width: width }, function (_ref3) {
            var getRowHeight = _ref3.getRowHeight,
                setRef = _ref3.setRef;
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_virtualized_dist_commonjs_List__["List"], { width: width, ref: setRef, height: itemsCount * rowHeight, rowCount: items.length, rowHeight: getRowHeight, rowRenderer: rowRenderer });
        });
    }));
};
var ListRenderer = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["branch"])(function (_ref4) {
    var selected = _ref4.selected;
    return !selected;
}, __WEBPACK_IMPORTED_MODULE_2_recompose__["renderNothing"]), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["branch"])(function (_ref5) {
    var isExpanded = _ref5.isExpanded;
    return isExpanded;
}, Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["branch"])(function (_ref6) {
    var isMobile = _ref6.isMobile,
        childrenCount = _ref6.childrenCount,
        hasSelectedSiblings = _ref6.hasSelectedSiblings;
    return !isMobile && !hasSelectedSiblings;
}, Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["defaultProps"])({ withScroll: true })), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withProps"])(function (_ref7) {
    var children = _ref7.children,
        config = _ref7.config;
    return {
        children: [].concat(_toConsumableArray(children.slice(0, config.maxItemsCount)))
    };
})))(StaticList);
var NestedList = function NestedList(_a) {
    var onClick = _a.onClick,
        isRoot = _a.isRoot,
        title = _a.title,
        count = _a.count,
        className = _a.className,
        selected = _a.selected,
        style = _a.style,
        rest = __rest(_a, ["onClick", "isRoot", "title", "count", "className", "selected", "style"]);

    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](NestingComponent, { isRoot: isRoot, style: style, className: __WEBPACK_IMPORTED_MODULE_1_classnames__(className || styles.nestedItem, isRoot && styles.rootItem) }, !isRoot && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(styles.item, customStyles.facetItem, selected && styles.selected, selected && customStyles.facetItemSelected), onClick: onClick }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: styles.title }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_internals_Icon__["a" /* default */], { name: 'chevron-left', className: styles.prevIcon }), title, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_internals_Icon__["a" /* default */], { name: 'chevron-' + (selected ? 'down' : 'right'), className: styles.nextIcon })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: styles.count }, "(", count, ")")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ListRenderer, Object.assign({}, Object.assign({}, rest, { parentTitle: title, selected: selected }))));
};
var RootWrapper = function RootWrapper(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](NestingComponent, { isRoot: true, style: props.style, className: __WEBPACK_IMPORTED_MODULE_1_classnames__(styles.nestedItem, styles.rootItem) }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(styles.item, styles.selected, customStyles.facetItemSelected), onClick: props.onClick }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: styles.title }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_internals_Icon__["a" /* default */], { name: 'chevron-left', className: styles.prevIcon }), props.config.i18n.goBackTitle)), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: styles.list }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](NestedList, Object.assign({}, props))));
};
var NestedTree = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["branch"])(function (_ref8) {
    var cursor = _ref8.cursor,
        selected = _ref8.selected,
        isRoot = _ref8.isRoot;
    return !isRoot && selected && cursor.size === 1;
}, Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["renderComponent"])(RootWrapper), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["renderComponent"])(NestedList))(__WEBPACK_IMPORTED_MODULE_2_recompose__["renderNothing"]);

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);


var styles = __webpack_require__(19);
var customStyles = __webpack_require__(6);
var SingleItem = function SingleItem(_ref) {
    var title = _ref.title,
        count = _ref.count,
        onClick = _ref.onClick,
        selected = _ref.selected,
        index = _ref.index,
        style = _ref.style;
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { style: style, onClick: onClick, className: __WEBPACK_IMPORTED_MODULE_1_classnames__(styles.item, customStyles.facetItem, selected && styles.selected, selected && customStyles.facetItemSelected) }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: styles.title }, title), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: styles.count }, "(", count, ")"));
};

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};


var KEYCODE_UP = 38;
var KEYCODE_DOWN = 40;
var IS_BROWSER = typeof document != 'undefined';
var RE_NUMBER = /^[+-]?((\.\d+)|(\d+(\.\d+)?))$/;
var RE_INCOMPLETE_NUMBER = /^([+-]|\.0*|[+-]\.0*|[+-]?\d+\.)?$/;
function addClass(element, className) {
    if (element.classList) {
        return element.classList.add(className);
    }
    if (!element.className.search(new RegExp("\\b" + className + "\\b"))) {
        element.className = " " + className;
    }
}
function removeClass(element, className) {
    if (element.className) {
        if (element.classList) {
            return element.classList.remove(className);
        }
        element.className = element.className.replace(new RegExp("\\b" + className + "\\b", "g"), "");
    }
}
function access(object, prop, defaultValue) {
    var result = object[prop];
    if (typeof result == "function") {
        for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
            args[_key - 3] = arguments[_key];
        }

        result = result.apply(undefined, args);
    }
    return result === undefined ? defaultValue : result;
}

var NumericInput = function (_React$Component) {
    _inherits(NumericInput, _React$Component);

    function NumericInput() {
        var _ref;

        _classCallCheck(this, NumericInput);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        var _this = _possibleConstructorReturn(this, (_ref = NumericInput.__proto__ || Object.getPrototypeOf(NumericInput)).call.apply(_ref, [this].concat(args)));

        _this.input = void 0;
        _this._isStrict = !!_this.props.strict;
        _this.state = Object.assign({ btnDownHover: false, btnDownActive: false, btnUpHover: false, btnUpActive: false, inputFocus: false, stringValue: "" }, _this._propsToState(_this.props));
        _this.stop = _this.stop.bind(_this);
        _this.onTouchEnd = _this.onTouchEnd.bind(_this);
        return _this;
    }

    _createClass(NumericInput, [{
        key: "_propsToState",
        value: function _propsToState(props) {
            var out = {};
            if (props.hasOwnProperty("value")) {
                out.stringValue = String(props.value || props.value === 0 ? props.value : '').trim();
                out.value = out.stringValue !== '' ? this._parse(props.value) : null;
            } else if (!this._isMounted && props.hasOwnProperty("defaultValue")) {
                out.stringValue = String(props.defaultValue || props.defaultValue === 0 ? props.defaultValue : '').trim();
                out.value = props.defaultValue !== '' ? this._parse(props.defaultValue) : null;
            }
            return out;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(props) {
            var _this2 = this;

            this._isStrict = !!props.strict;
            var nextState = this._propsToState(props);
            if (Object.keys(nextState).length) {
                this._ignoreValueChange = true;
                this.setState(nextState, function () {
                    _this2._ignoreValueChange = false;
                });
            }
        }
    }, {
        key: "componentWillUpdate",
        value: function componentWillUpdate() {
            this.saveSelection();
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            if (!this._ignoreValueChange && prevState.value !== this.state.value && (!isNaN(this.state.value) || this.state.value === null)) {
                this._invokeEventCallback("onChange", this.state.value, this.input.value, this.input);
            }
            if (this.state.inputFocus) {
                this.input.focus();
                if (this.state.selectionStart || this.state.selectionStart === 0) {
                    this.input.selectionStart = this.state.selectionStart;
                }
                if (this.state.selectionEnd || this.state.selectionEnd === 0) {
                    this.input.selectionEnd = this.state.selectionEnd;
                }
            }
            this.checkValidity();
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this._isMounted = false;
            this.stop();
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this3 = this;

            this._isMounted = true;
            this.input.getValueAsNumber = function () {
                return _this3.state.value || 0;
            };
            this.input.setValue = function (value) {
                _this3.setState({
                    value: _this3._parse(value),
                    stringValue: value
                });
            };
            if (!this.state.inputFocus && IS_BROWSER && document.activeElement === this.input) {
                this.state.inputFocus = true;
                this.input.focus();
                this._invokeEventCallback("onFocus", {
                    target: this.input,
                    type: "focus"
                });
            }
            this.checkValidity();
        }
    }, {
        key: "saveSelection",
        value: function saveSelection() {
            this.state.selectionStart = this.input.selectionStart;
            this.state.selectionEnd = this.input.selectionEnd;
        }
    }, {
        key: "checkValidity",
        value: function checkValidity() {
            var valid = void 0,
                validationError = "";
            var supportsValidation = !!this.input.checkValidity;
            var noValidate = !!(this.props.noValidate && this.props.noValidate != "false");
            this.input.noValidate = noValidate;
            valid = noValidate || !supportsValidation;
            if (valid) {
                validationError = "";
            } else {
                if (this.input.pattern === "") {
                    this.input.pattern = this.props.required ? ".+" : ".*";
                }
                if (supportsValidation) {
                    this.input.checkValidity();
                    valid = this.input.validity.valid;
                    if (!valid) {
                        validationError = this.input.validationMessage;
                    }
                }
                if (valid && supportsValidation && this.props.maxLength) {
                    if (this.input.value.length > this.props.maxLength) {
                        validationError = "This value is too long";
                    }
                }
            }
            validationError = validationError || (valid ? "" : this.input.validationMessage || "Unknown Error");
            var validStateChanged = this._valid !== validationError;
            this._valid = validationError;
            if (validationError) {
                if (validStateChanged) {
                    this._invokeEventCallback("onInvalid", validationError, this.state.value, this.input.value);
                }
            } else {
                if (validStateChanged) {
                    this._invokeEventCallback("onValid", this.state.value, this.input.value);
                }
            }
        }
    }, {
        key: "_toNumber",
        value: function _toNumber(x) {
            var n = parseFloat(x);
            if (isNaN(n) || !isFinite(n)) {
                n = 0;
            }
            if (this._isStrict) {
                var precision = access(this.props, "precision", null, this);
                var q = Math.pow(10, precision === null ? 10 : precision);
                var _min = +access(this.props, "min", NumericInput.defaultProps.min, this);
                var _max = +access(this.props, "max", NumericInput.defaultProps.max, this);
                n = Math.min(Math.max(n, _min), _max);
                n = Math.round(n * q) / q;
            }
            return n;
        }
    }, {
        key: "_parse",
        value: function _parse(x) {
            x = String(x);
            if (typeof this.props.parse == 'function') {
                return parseFloat(this.props.parse(x));
            }
            return parseFloat(x);
        }
    }, {
        key: "_format",
        value: function _format(n) {
            var _n = this._toNumber(n);
            var precision = access(this.props, "precision", null, this);
            if (precision !== null) {
                _n = n.toFixed(precision);
            }
            _n += "";
            if (this.props.format) {
                return this.props.format(_n);
            }
            return _n;
        }
    }, {
        key: "_step",
        value: function _step(n, callback) {
            var _isStrict = this._isStrict;
            this._isStrict = true;
            var _step = +access(this.props, "step", NumericInput.defaultProps.step, this, n > 0 ? NumericInput.DIRECTION_UP : NumericInput.DIRECTION_DOWN);
            var _n = this._toNumber((this.state.value || 0) + _step * n);
            if (this.props.snap) {
                _n = Math.round(_n / _step) * _step;
            }
            this._isStrict = _isStrict;
            if (_n !== this.state.value) {
                this.setState({ value: _n, stringValue: _n + "" }, callback);
                return true;
            }
            return false;
        }
    }, {
        key: "_onKeyDown",
        value: function _onKeyDown() {
            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            args[0].persist();
            this._invokeEventCallback.apply(this, ["onKeyDown"].concat(args));
            var e = args[0];
            if (!e.isDefaultPrevented()) {
                if (e.keyCode === KEYCODE_UP) {
                    e.preventDefault();
                    this._step(e.ctrlKey || e.metaKey ? 0.1 : e.shiftKey ? 10 : 1);
                } else if (e.keyCode === KEYCODE_DOWN) {
                    e.preventDefault();
                    this._step(e.ctrlKey || e.metaKey ? -0.1 : e.shiftKey ? -10 : -1);
                } else {
                    var value = this.input.value,
                        length = value.length;
                    if (e.keyCode === 8) {
                        if (this.input.selectionStart == this.input.selectionEnd && this.input.selectionEnd > 0 && value.length && value.charAt(this.input.selectionEnd - 1) === ".") {
                            e.preventDefault();
                            this.input.selectionStart = this.input.selectionEnd = this.input.selectionEnd - 1;
                        }
                    } else if (e.keyCode === 46) {
                        if (this.input.selectionStart == this.input.selectionEnd && this.input.selectionEnd < length + 1 && value.length && value.charAt(this.input.selectionEnd) === ".") {
                            e.preventDefault();
                            this.input.selectionStart = this.input.selectionEnd = this.input.selectionEnd + 1;
                        }
                    }
                }
            }
        }
    }, {
        key: "stop",
        value: function stop() {
            if (this._timer) {
                clearTimeout(this._timer);
            }
        }
    }, {
        key: "increase",
        value: function increase() {
            var _this4 = this;

            var _recursive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var callback = arguments[1];

            this.stop();
            this._step(1, callback);
            var _max = +access(this.props, "max", NumericInput.defaultProps.max, this);
            if (isNaN(this.state.value) || +this.state.value < _max) {
                this._timer = setTimeout(function () {
                    _this4.increase(true);
                }, _recursive ? NumericInput.SPEED : NumericInput.DELAY);
            }
        }
    }, {
        key: "decrease",
        value: function decrease() {
            var _this5 = this;

            var _recursive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var callback = arguments[1];

            this.stop();
            this._step(-1, callback);
            var _min = +access(this.props, "min", NumericInput.defaultProps.min, this);
            if (isNaN(this.state.value) || +this.state.value > _min) {
                this._timer = setTimeout(function () {
                    _this5.decrease(true);
                }, _recursive ? NumericInput.SPEED : NumericInput.DELAY);
            }
        }
    }, {
        key: "onMouseDown",
        value: function onMouseDown(dir, callback) {
            if (dir == 'down') {
                this.decrease(false, callback);
            } else if (dir == 'up') {
                this.increase(false, callback);
            }
        }
    }, {
        key: "onTouchStart",
        value: function onTouchStart(dir, e) {
            e.preventDefault();
            if (dir == 'down') {
                this.decrease();
            } else if (dir == 'up') {
                this.increase();
            }
        }
    }, {
        key: "onTouchEnd",
        value: function onTouchEnd(e) {
            e.preventDefault();
            this.stop();
        }
    }, {
        key: "_invokeEventCallback",
        value: function _invokeEventCallback(callbackName) {
            if (typeof this.props[callbackName] == "function") {
                var _props$callbackName;

                for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                    args[_key4 - 1] = arguments[_key4];
                }

                (_props$callbackName = this.props[callbackName]).call.apply(_props$callbackName, [null].concat(args));
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this6 = this;

            var props = this.props;
            var state = this.state;
            var css = {};
            var _a = this.props,
                step = _a.step,
                min = _a.min,
                max = _a.max,
                precision = _a.precision,
                parse = _a.parse,
                format = _a.format,
                mobile = _a.mobile,
                snap = _a.snap,
                value = _a.value,
                type = _a.type,
                defaultValue = _a.defaultValue,
                onInvalid = _a.onInvalid,
                onValid = _a.onValid,
                strict = _a.strict,
                rest = __rest(_a, ["step", "min", "max", "precision", "parse", "format", "mobile", "snap", "value", "type", "defaultValue", "onInvalid", "onValid", "strict"]);
            var hasFormControl = props.className && /\bform-control\b/.test(props.className);
            if (mobile == 'auto') {
                mobile = IS_BROWSER && 'ontouchstart' in document;
            }
            if (typeof mobile == "function") {
                mobile = mobile.call(this);
            }
            mobile = !!mobile;
            var attrs = {
                wrap: {
                    className: 'react-numeric-input',
                    onMouseUp: undefined,
                    onMouseLeave: undefined
                },
                input: Object.assign({ type: 'text', style: Object.assign({}, css.input, !hasFormControl ? css['input:not(.form-control)'] : {}, state.inputFocus ? css['input:focus'] : {}) }, rest),
                btnUp: {
                    onMouseEnter: undefined,
                    onMouseDown: undefined,
                    onMouseUp: undefined,
                    onMouseLeave: undefined,
                    onTouchStart: undefined,
                    onTouchEnd: undefined,
                    style: Object.assign({}, css.btn, css.btnUp, props.disabled ? css['btn:disabled'] : state.btnUpActive ? css['btn:active'] : state.btnUpHover ? css['btn:hover'] : {})
                },
                btnDown: {
                    onMouseEnter: undefined,
                    onMouseDown: undefined,
                    onMouseUp: undefined,
                    onMouseLeave: undefined,
                    onTouchStart: undefined,
                    onTouchEnd: undefined,
                    style: Object.assign({}, css.btn, css.btnDown, props.disabled ? css['btn:disabled'] : state.btnDownActive ? css['btn:active'] : state.btnDownHover ? css['btn:hover'] : {})
                }
            };
            var stringValue = String(state.stringValue || (state.value || state.value === 0 ? state.value : "") || "");
            if (RE_INCOMPLETE_NUMBER.test(stringValue)) {
                attrs.input.value = stringValue;
            } else if (!this._isStrict && stringValue && !RE_NUMBER.test(stringValue)) {
                attrs.input.value = stringValue;
            } else if (state.value || state.value === 0) {
                attrs.input.value = this._format(state.value);
            } else {
                attrs.input.value = "";
            }
            if (!props.disabled) {
                Object.assign(attrs.wrap, {
                    onMouseUp: this.stop,
                    onMouseLeave: this.stop
                });
                Object.assign(attrs.btnUp, {
                    onTouchStart: this.onTouchStart.bind(this, 'up'),
                    onTouchEnd: this.onTouchEnd,
                    onMouseEnter: function onMouseEnter() {
                        _this6.setState({
                            btnUpHover: true
                        });
                    },
                    onMouseLeave: function onMouseLeave() {
                        _this6.stop();
                        _this6.setState({
                            btnUpHover: false,
                            btnUpActive: false
                        });
                    },
                    onMouseUp: function onMouseUp() {
                        _this6.setState({
                            btnUpHover: true,
                            btnUpActive: false
                        });
                    },
                    onMouseDown: function onMouseDown() {
                        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                            args[_key5] = arguments[_key5];
                        }

                        args[0].preventDefault();
                        args[0].persist();
                        _this6.setState({
                            btnUpHover: true,
                            btnUpActive: true,
                            inputFocus: true
                        }, function () {
                            _this6._invokeEventCallback.apply(_this6, ["onFocus"].concat(args));
                            _this6.onMouseDown('up');
                        });
                    }
                });
                Object.assign(attrs.btnDown, {
                    onTouchStart: this.onTouchStart.bind(this, 'down'),
                    onTouchEnd: this.onTouchEnd,
                    onMouseEnter: function onMouseEnter() {
                        _this6.setState({
                            btnDownHover: true
                        });
                    },
                    onMouseLeave: function onMouseLeave() {
                        _this6.stop();
                        _this6.setState({
                            btnDownHover: false,
                            btnDownActive: false
                        });
                    },
                    onMouseUp: function onMouseUp() {
                        _this6.setState({
                            btnDownHover: true,
                            btnDownActive: false
                        });
                    },
                    onMouseDown: function onMouseDown() {
                        for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                            args[_key6] = arguments[_key6];
                        }

                        args[0].preventDefault();
                        args[0].persist();
                        _this6.setState({
                            btnDownHover: true,
                            btnDownActive: true,
                            inputFocus: true
                        }, function () {
                            _this6._invokeEventCallback.apply(_this6, ["onFocus"].concat(args));
                            _this6.onMouseDown('down');
                        });
                    }
                });
                Object.assign(attrs.input, {
                    onChange: function onChange(e) {
                        var original = e.target.value;
                        var val = _this6._parse(original);
                        if (isNaN(val)) {
                            val = null;
                        }
                        _this6.setState({
                            value: _this6._isStrict ? _this6._toNumber(val) : val,
                            stringValue: original
                        });
                    },
                    onKeyDown: this._onKeyDown.bind(this),
                    onInput: function onInput() {
                        for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
                            args[_key7] = arguments[_key7];
                        }

                        _this6.saveSelection();
                        _this6._invokeEventCallback.apply(_this6, ["onInput"].concat(args));
                    },
                    onSelect: function onSelect() {
                        for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
                            args[_key8] = arguments[_key8];
                        }

                        _this6.saveSelection();
                        _this6._invokeEventCallback.apply(_this6, ["onSelect"].concat(args));
                    },
                    onFocus: function onFocus() {
                        for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
                            args[_key9] = arguments[_key9];
                        }

                        args[0].persist();
                        _this6.setState({ inputFocus: true }, function () {
                            var val = _this6._parse(args[0].target.value);
                            _this6.setState({
                                value: val,
                                stringValue: val || val === 0 ? val + "" : ""
                            }, function () {
                                _this6._invokeEventCallback.apply(_this6, ["onFocus"].concat(args));
                            });
                        });
                    },
                    onBlur: function onBlur() {
                        for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
                            args[_key10] = arguments[_key10];
                        }

                        var _isStrict = _this6._isStrict;
                        _this6._isStrict = true;
                        args[0].persist();
                        _this6.setState({ inputFocus: false }, function () {
                            var val = _this6._parse(args[0].target.value);
                            _this6.setState({
                                value: val
                            }, function () {
                                _this6._invokeEventCallback.apply(_this6, ["onBlur"].concat(args));
                                _this6._isStrict = _isStrict;
                            });
                        });
                    }
                });
            } else {
                Object.assign(attrs.input.style, css['input:disabled']);
            }
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", Object.assign({}, attrs.wrap), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", Object.assign({}, attrs.input, { ref: function ref(r) {
                    return r && (_this6.input = r);
                } })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("b", Object.assign({}, attrs.btnUp), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", null)), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("b", Object.assign({}, attrs.btnDown), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", null)));
        }
    }]);

    return NumericInput;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (NumericInput);

NumericInput.defaultProps = {
    step: 1,
    min: Number.MIN_SAFE_INTEGER || -9007199254740991,
    max: Number.MAX_SAFE_INTEGER || 9007199254740991,
    precision: null,
    parse: null,
    format: null,
    mobile: 'auto',
    strict: false
};
NumericInput.SPEED = 50;
NumericInput.DELAY = 500;
NumericInput.DIRECTION_UP = "up";
NumericInput.DIRECTION_DOWN = "down";

/***/ }),
/* 115 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"findify-block--range-body-facet","input-wrap":"findify-block--range-body-facet__input-wrap","inputWrap":"findify-block--range-body-facet__input-wrap","commit-wrap":"findify-block--range-body-facet__commit-wrap","commitWrap":"findify-block--range-body-facet__commit-wrap","input":"findify-block--range-body-facet__input","currency":"findify-block--range-body-facet__currency","pull-right":"findify-block--range-body-facet__pull-right","pullRight":"findify-block--range-body-facet__pull-right","button":"findify-block--range-body-facet__button","separator":"findify-block--range-body-facet__separator"};

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_unescape__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_unescape___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_unescape__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_internals_Icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_widgets_Rating__ = __webpack_require__(12);







var styles = __webpack_require__(117);
var customStyles = __webpack_require__(6);
var Item = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withHandlers"])({
    onClick: function onClick(_ref) {
        var onChange = _ref.onChange,
            item = _ref.item;
        return function () {
            return onChange(Object.assign({}, item, { selected: !item.selected }));
        };
    }
})(function (_ref2) {
    var title = _ref2.title,
        item = _ref2.item,
        onClick = _ref2.onClick,
        style = _ref2.style,
        config = _ref2.config;
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { style: style, className: __WEBPACK_IMPORTED_MODULE_3_classnames__(styles.item, customStyles.facetItem, item.selected && styles.selected, item.selected && customStyles.facetItemSelected), onClick: onClick }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_internals_Icon__["a" /* default */], { name: 'check-' + (item.selected ? 'checked' : 'empty'), className: styles.checkbox }), __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: styles.title }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_widgets_Rating__["a" /* Rating */], { value: title }), __WEBPACK_IMPORTED_MODULE_0_lodash_unescape___default()(config.i18n.up)), __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: styles.count }, "(", item.count, ")"));
});

/***/ }),
/* 117 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"selected-items":"findify-block--checkbox-body-facet--rating__selected-items","selectedItems":"findify-block--checkbox-body-facet--rating__selected-items","item":"findify-block--checkbox-body-facet--rating__item","title":"findify-block--checkbox-body-facet--rating__title","count":"findify-block--checkbox-body-facet--rating__count","checkbox":"findify-block--checkbox-body-facet--rating__checkbox"};

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesktopFacetsList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_helpers_mapTypeToFacet__ = __webpack_require__(33);
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var Facet = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withPropsOnChange"])(['type'], function (_ref) {
    var config = _ref.config,
        facet = _ref.facet;

    var type = config.facets.types && config.facets.types[facet.name] || facet.type;
    return {
        type: facet.type,
        config: Object.assign({}, config.facets[type], { currency: config.currency }),
        factory: Object(__WEBPACK_IMPORTED_MODULE_2_helpers_mapTypeToFacet__["a" /* mapTypeToFacet */])(type)
    };
})(function (_a) {
    var factory = _a.factory,
        facet = _a.facet,
        rest = __rest(_a, ["factory", "facet"]);

    return factory(Object.assign({}, rest, facet, { isMobile: false }));
});
var DesktopFacetsList = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["setDisplayName"])('DesktopFacetsList')(function (_a) {
    var facets = _a.facets,
        className = _a.className,
        rest = __rest(_a, ["facets", "className"]);

    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: className }, facets.map(function (facet) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["createEagerElement"])(Facet, Object.assign({}, rest, { facet: facet, key: facet.name, label: rest.config.facets.labels[facet.name] }));
    }));
});

/***/ }),
/* 119 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);


var styles = __webpack_require__(121);
var Button = function Button(_ref) {
  var onClick = _ref.onClick,
      children = _ref.children,
      className = _ref.className,
      isLoading = _ref.isLoading;
  return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { onClick: onClick, className: __WEBPACK_IMPORTED_MODULE_1_classnames__(styles.root, isLoading && styles.loading, className) }, children);
};

/***/ }),
/* 121 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"findify-block--button","loading":"findify-block--button__loading"};

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Banner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_internals_Image__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};




var styles = __webpack_require__(123);
var Banner = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withHandlers"])({
    onImageClick: function onImageClick(_a) {
        var onClick = _a.onClick,
            rest = __rest(_a, ["onClick"]);
        return function () {
            return onClick && onClick(rest);
        };
    }
}))(function (_ref) {
    var imageUrl = _ref.imageUrl,
        onImageClick = _ref.onImageClick,
        onClick = _ref.onClick,
        className = _ref.className;
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_internals_Image__["a" /* default */], { onClick: onImageClick, src: imageUrl, style: { cursor: !!onClick ? 'pointer' : 'inherit' }, className: __WEBPACK_IMPORTED_MODULE_3_classnames__(styles.root, className) });
});

/***/ }),
/* 123 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"findify-block--banner"};

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoweredBy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);



var styles = __webpack_require__(125);
var href = 'http://findify.io/?utm_source=findify-demo-store.myshopify.com&utm_medium=banner&utm_campaign=Powered%20By%20Findify';
var PoweredBy = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withHandlers"])({
    onClick: function onClick(_ref) {
        var _onClick = _ref.onClick;
        return function (e) {
            _onClick({ href: href, target: '_blank' });
        };
    }
})(function (_ref2) {
    var onClick = _ref2.onClick,
        className = _ref2.className;
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { onClick: onClick, className: __WEBPACK_IMPORTED_MODULE_2_classnames__(styles.root, className) }, "Search powered by Findify");
});


/***/ }),
/* 125 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"findify-block--powered-by"};

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoadPrev; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_throttle__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_throttle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_throttle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_internals_Spinner__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);






var styles = __webpack_require__(130);
var shouldNotDisplayPrevButton = function shouldNotDisplayPrevButton(_ref) {
    var items = _ref.items,
        meta = _ref.meta;
    return !items || !items.length || !!items.find(function (i) {
        return !i.position;
    });
};
var withButton = function withButton(_ref2) {
    var onChange = _ref2.onChange,
        isLoading = _ref2.isLoading,
        _ref2$config = _ref2.config,
        config = _ref2$config === undefined ? {
        i18n: {
            loadMore: 'Load more'
        }
    } : _ref2$config;
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_4_classnames__(styles.root, styles.loadNext) }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("button", { className: styles.button, onClick: onChange }, config.i18n.loadMore));
};
var withoutButton = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withState"])('target', 'setTarget', void 0), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withHandlers"])({
    onScroll: function onScroll(_ref3) {
        var onChange = _ref3.onChange,
            target = _ref3.target,
            isLoading = _ref3.isLoading;
        return __WEBPACK_IMPORTED_MODULE_0_lodash_throttle___default()(function () {
            if (!target || isLoading) return;
            var offset = 300;
            var offsetTop = target.getBoundingClientRect().top;
            var windowHeight = window.innerHeight || document.documentElement.clientHeight;
            var inView = offsetTop - windowHeight <= offset;
            if (inView) return onChange();
        }, 300);
    }
}), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["lifecycle"])({
    componentDidMount: function componentDidMount() {
        window.addEventListener('scroll', this.props.onScroll, false);
    },
    componentWillUnmount: function componentWillUnmount() {
        window.removeEventListener('scroll', this.props.onScroll, false);
    }
}))(function (_ref4) {
    var target = _ref4.target,
        setTarget = _ref4.setTarget;
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: styles.root, ref: function ref(r) {
            return !target && !!r && setTarget(r);
        } });
});
var LoadNext = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withPropsOnChange"])(['meta'], function (_ref5) {
    var type = _ref5.type,
        meta = _ref5.meta;
    return {
        disabled: meta.total <= meta.offset + meta.limit
    };
}), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["branch"])(function (_ref6) {
    var disabled = _ref6.disabled;
    return disabled;
}, __WEBPACK_IMPORTED_MODULE_2_recompose__["renderNothing"]), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["branch"])(function (_ref7) {
    var isLoading = _ref7.isLoading;
    return isLoading;
}, Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["renderComponent"])(__WEBPACK_IMPORTED_MODULE_3_internals_Spinner__["a" /* default */])), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["branch"])(function (_ref8) {
    var isMobile = _ref8.isMobile,
        meta = _ref8.meta;
    return isMobile || meta.offset >= meta.limit * 2;
}, Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["renderComponent"])(withButton), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["renderComponent"])(withoutButton)))(__WEBPACK_IMPORTED_MODULE_2_recompose__["renderNothing"]);
var LoadPrev = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["branch"])(shouldNotDisplayPrevButton, __WEBPACK_IMPORTED_MODULE_2_recompose__["renderNothing"]), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["branch"])(function (_ref9) {
    var isLoading = _ref9.isLoading;
    return isLoading;
}, Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["renderComponent"])(__WEBPACK_IMPORTED_MODULE_3_internals_Spinner__["a" /* default */])))(function (_ref10) {
    var onClick = _ref10.onClick,
        isLoading = _ref10.isLoading,
        _ref10$config = _ref10.config,
        config = _ref10$config === undefined ? {
        i18n: {
            loadPrev: 'Load previous'
        }
    } : _ref10$config;
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_4_classnames__(styles.root, styles.loadPrev) }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("button", { className: styles.button, onClick: onClick }, config.i18n.loadPrev));
});

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = require("lodash/throttle");

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var styles = __webpack_require__(129);
/* harmony default export */ __webpack_exports__["a"] = (function () {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.root }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.loader }));
});

/***/ }),
/* 129 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"findify-block--spinner","loader":"findify-block--spinner__loader","load":"findify-block--spinner__load"};

/***/ }),
/* 130 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"findify-block--infinite-loader","load-next":"findify-block--infinite-loader__load-next","loadNext":"findify-block--infinite-loader__load-next","load-prev":"findify-block--infinite-loader__load-prev","loadPrev":"findify-block--infinite-loader__load-prev","button":"findify-block--infinite-loader__button","infinite":"findify-block--infinite-loader__infinite"};

/***/ }),
/* 131 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"breadcrumbs":"findify-layouts--results-layout__breadcrumbs","sort":"findify-layouts--results-layout__sort","mobileSort":"findify-layouts--results-layout__mobileSort","mobileFacetsButton":"findify-layouts--results-layout__mobileFacetsButton","paddingLeft":"findify-layouts--results-layout__paddingLeft","paddingRight":"findify-layouts--results-layout__paddingRight","filters":"findify-layouts--results-layout__filters","products":"findify-layouts--results-layout__products","productsWithPadding":"findify-layouts--results-layout__productsWithPadding","facets":"findify-layouts--results-layout__facets","pagination":"findify-layouts--results-layout__pagination"};

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoResultsLayout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_escape__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_escape___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_escape__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lists_ProductsList__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_helpers_withHooks__ = __webpack_require__(5);






var styles = __webpack_require__(133);
var HOC = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withPropsOnChange"])(['config', 'query'], function (_ref) {
    var config = _ref.config,
        query = _ref.query;
    return {
        title: config.i18n.noResult.replace('<span class="findify-query"></span>', '<strong>' + __WEBPACK_IMPORTED_MODULE_0_lodash_escape___default()(query) + '</strong>')
    };
}), Object(__WEBPACK_IMPORTED_MODULE_4_helpers_withHooks__["a" /* default */])('noResults'));
var Component = function Component(_ref2) {
    var items = _ref2.items,
        title = _ref2.title,
        onProductClick = _ref2.onProductClick,
        config = _ref2.config;
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: styles.root }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("p", { className: styles.title, dangerouslySetInnerHTML: { __html: title } }), __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_lists_ProductsList__["a" /* ProductsList */], { config: config, items: items, onProductClick: onProductClick }));
};
var NoResultsLayout = HOC(Component);

/***/ }),
/* 133 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"findify-layouts--no-results-layout","title":"findify-layouts--no-results-layout__title"};

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Autocomplete; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_pick__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_pick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_pick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_helpers_withConfig__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_helpers_provideLocation__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_internals_AutocompleteBody__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_internals_AutocompleteMobileBody__ = __webpack_require__(143);







var Autocomplete = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["setDisplayName"])('Autocomplete'), __WEBPACK_IMPORTED_MODULE_3_helpers_provideLocation__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_2_helpers_withConfig__["a" /* default */])({
    isMobileSimple: false,
    currency: {
        code: 'USD'
    },
    position: 'left',
    i18n: {},
    product: {
        simple: true,
        title: {
            lines: 3
        },
        description: {
            display: false
        }
    }
}), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["defaultProps"])({
    meta: {},
    suggestion: [],
    items: []
}), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["branch"])(function (_ref) {
    var isMobile = _ref.isMobile;
    return !isMobile;
}, Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["renderComponent"])(__WEBPACK_IMPORTED_MODULE_4_internals_AutocompleteBody__["a" /* AutocompleteBody */]), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["renderComponent"])(Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["branch"])(function (_ref2) {
    var config = _ref2.config;
    return config.isMobileSimple;
}, Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["mapProps"])(function (props) {
    return __WEBPACK_IMPORTED_MODULE_0_lodash_pick___default()(props, ['config', 'onTipClick', 'meta', 'suggestions', 'onSearchSuggestionClick']);
}), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["renderComponent"])(__WEBPACK_IMPORTED_MODULE_4_internals_AutocompleteBody__["a" /* AutocompleteBody */])), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["renderComponent"])(__WEBPACK_IMPORTED_MODULE_5_internals_AutocompleteMobileBody__["a" /* AutocompleteMobileBody */]))(__WEBPACK_IMPORTED_MODULE_5_internals_AutocompleteMobileBody__["a" /* AutocompleteMobileBody */]))))(__WEBPACK_IMPORTED_MODULE_1_recompose__["renderNothing"]);

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = require("lodash/pick");

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withContext"])({ location: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object }, function (_ref) {
  var location = _ref.location;
  return { location: location };
}));

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompleteBody; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_internals_SearchSuggestions__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_internals_ProductMatches__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_recompose__);
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};





var styles = __webpack_require__(142);
var AutocompleteBody = function AutocompleteBody(_a) {
    var suggestions = _a.suggestions,
        items = _a.items,
        onSearchSuggestionClick = _a.onSearchSuggestionClick,
        onTipClick = _a.onTipClick,
        selectedSuggestion = _a.selectedSuggestion,
        onProductClick = _a.onProductClick,
        query = _a.meta.q,
        _b = _a.config,
        position = _b.position,
        i18n = _b.i18n,
        config = __rest(_b, ["position", "i18n"]);

    if (suggestions && !suggestions.length) return null;
    var searchSuggestionsNode = Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["createEagerElement"])(__WEBPACK_IMPORTED_MODULE_2_internals_SearchSuggestions__["a" /* SearchSuggestions */], {
        selectedSuggestion: selectedSuggestion,
        suggestions: suggestions,
        onSearchSuggestionClick: onSearchSuggestionClick,
        query: query,
        title: i18n.suggestionsTitle
    });
    var productMatchesNode = !!items && !!items.length && Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["createEagerElement"])(__WEBPACK_IMPORTED_MODULE_3_internals_ProductMatches__["a" /* ProductMatches */], {
        items: items,
        config: config,
        onProductClick: onProductClick,
        title: i18n.productMatchesTitle
    });
    var displayClass = !items && styles.hidden;
    var sizeClass = !!items && items.length && styles.large || styles.small;
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(styles.root, displayClass, sizeClass) }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(styles.wrap, styles[position]) }, position === 'right' && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.container }, productMatchesNode, searchSuggestionsNode) || __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.container }, searchSuggestionsNode, productMatchesNode), i18n.tipTitle && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.tip, onClick: function onClick() {
            return onTipClick && onTipClick();
        } }, i18n.tipTitle, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: styles.tipQuery }, '\xA0"', query, "\""))));
};

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchSuggestions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_helpers_withHooks__ = __webpack_require__(5);



var styles = __webpack_require__(139);
var customStyles = __webpack_require__(6);
var SearchSuggestions = Object(__WEBPACK_IMPORTED_MODULE_2_helpers_withHooks__["a" /* default */])('suggestions')(function (_ref) {
    var title = _ref.title,
        suggestions = _ref.suggestions,
        selectedSuggestion = _ref.selectedSuggestion,
        onSearchSuggestionClick = _ref.onSearchSuggestionClick,
        query = _ref.query;
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.wrap }, title && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.title }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: styles.autocompleteTitle }, title)), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.list }, !!suggestions && suggestions.map(function (suggestion, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { key: i, className: __WEBPACK_IMPORTED_MODULE_1_classnames__(styles.item, customStyles.autocompleteSuggestion, selectedSuggestion === i && styles.selected), onClick: function onClick() {
                return onSearchSuggestionClick(suggestion);
            }, dangerouslySetInnerHTML: {
                __html: highlightSuggestion(suggestion.value, query)
            } });
    })));
});
function highlightSuggestion(value, highlighted) {
    var regexp = new RegExp('(' + highlighted + ')');
    return value.replace(regexp, '<span class="' + styles.highlightedText + '">$1</span>');
}

/***/ }),
/* 139 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrap":"findify-block--search-suggestions__wrap","title":"findify-block--search-suggestions__title","list":"findify-block--search-suggestions__list","item":"findify-block--search-suggestions__item","selected":"findify-block--search-suggestions__selected","highlighted-text":"findify-block--search-suggestions__highlighted-text","highlightedText":"findify-block--search-suggestions__highlighted-text","autocomplete-title":"findify-block--search-suggestions__autocomplete-title","autocompleteTitle":"findify-block--search-suggestions__autocomplete-title"};

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductMatches; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lists_ProductsList__ = __webpack_require__(13);



var styles = __webpack_require__(141);
var ProductMatches = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["branch"])(function (_ref) {
    var items = _ref.items;
    return !items || !items.length;
}, __WEBPACK_IMPORTED_MODULE_1_recompose__["renderNothing"]))(function (_ref2) {
    var items = _ref2.items,
        title = _ref2.title,
        config = _ref2.config,
        onProductClick = _ref2.onProductClick;
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.wrap }, title && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.title }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: styles.searchSuggestionsTitle }, title)), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_lists_ProductsList__["a" /* ProductsList */], { columns: 2, items: items, config: config, onProductClick: onProductClick, className: styles.items }));
});

/***/ }),
/* 141 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrap":"findify-block--product-matches__wrap","title":"findify-block--product-matches__title","item":"findify-block--product-matches__item","item-image":"findify-block--product-matches__item-image","itemImage":"findify-block--product-matches__item-image","item-rating":"findify-block--product-matches__item-rating","itemRating":"findify-block--product-matches__item-rating","item-src":"findify-block--product-matches__item-src","itemSrc":"findify-block--product-matches__item-src","item-title":"findify-block--product-matches__item-title","itemTitle":"findify-block--product-matches__item-title","item-price":"findify-block--product-matches__item-price","itemPrice":"findify-block--product-matches__item-price","item-price-discount":"findify-block--product-matches__item-price-discount","itemPriceDiscount":"findify-block--product-matches__item-price-discount","matches":"findify-block--product-matches__matches","item-price-regular":"findify-block--product-matches__item-price-regular","itemPriceRegular":"findify-block--product-matches__item-price-regular","search-suggestions-title":"findify-block--product-matches__search-suggestions-title","searchSuggestionsTitle":"findify-block--product-matches__search-suggestions-title"};

/***/ }),
/* 142 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"findify-block--autocomplete-body","small":"findify-block--autocomplete-body__small","large":"findify-block--autocomplete-body__large","wrap":"findify-block--autocomplete-body__wrap","container":"findify-block--autocomplete-body__container","tip":"findify-block--autocomplete-body__tip","tip-query":"findify-block--autocomplete-body__tip-query","tipQuery":"findify-block--autocomplete-body__tip-query","matches":"findify-block--autocomplete-body__matches","left":"findify-block--autocomplete-body__left","right":"findify-block--autocomplete-body__right"};

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompleteMobileBody; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_internals_Icon__ = __webpack_require__(3);



var styles = __webpack_require__(144);
var Suggestion = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withHandlers"])({
    handleClick: function handleClick(_ref) {
        var suggestion = _ref.suggestion,
            onClick = _ref.onClick;
        return function (e) {
            e.preventDefault();
            return onClick(suggestion);
        };
    }
})(function (_ref2) {
    var handleClick = _ref2.handleClick,
        suggestion = _ref2.suggestion,
        query = _ref2.query;
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: styles.suggestionsItem, onClick: handleClick, dangerouslySetInnerHTML: {
            __html: highlightSuggestion(suggestion.value, query)
        } });
});
var AutocompleteMobileBody = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withState"])('query', 'setQuery', function (props) {
    return props.query;
}), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withState"])('inputElement', 'setInputElement', null), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withHandlers"])({
    onChange: function onChange(_ref3) {
        var onInput = _ref3.onInput,
            setQuery = _ref3.setQuery;
        return function (e) {
            if (e) e.preventDefault();
            setQuery(e.target.value);
            return onInput(e.target.value);
        };
    },
    onSubmit: function onSubmit(_ref4) {
        var _onSubmit = _ref4.onSubmit,
            query = _ref4.query;
        return function (e) {
            if (e) e.preventDefault();
            return _onSubmit(query);
        };
    },
    registerInput: function registerInput(_ref5) {
        var setInputElement = _ref5.setInputElement;
        return function (r) {
            if (!r) return;
            setInputElement(r);
            return r.focus();
        };
    },
    onSelect: function onSelect(_ref6) {
        var onSubmit = _ref6.onSubmit;
        return function (suggestion) {
            return onSubmit(suggestion);
        };
    },
    onClearClick: function onClearClick(_ref7) {
        var onInput = _ref7.onInput,
            setQuery = _ref7.setQuery,
            inputElement = _ref7.inputElement;
        return function (e) {
            if (e) e.preventDefault();
            inputElement.value = '';
            inputElement.focus();
            setQuery('');
            return onInput('');
        };
    }
}))(function (_ref8) {
    var query = _ref8.query,
        suggestions = _ref8.suggestions,
        onSubmit = _ref8.onSubmit,
        onClearClick = _ref8.onClearClick,
        onInput = _ref8.onInput,
        onChange = _ref8.onChange,
        onSelect = _ref8.onSelect,
        registerInput = _ref8.registerInput;
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.wrap }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { className: styles.form, onSubmit: onSubmit }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.formLeft }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: styles.input, type: "text", onChange: onChange, defaultValue: query, ref: registerInput }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: styles.clear, onClick: onClearClick }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_internals_Icon__["a" /* default */], { name: 'close-round', className: styles.icon }))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.formRight }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: styles.submit, type: "submit" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_internals_Icon__["a" /* default */], { name: 'search', className: styles.icon })))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.suggestions }, !!suggestions && suggestions.map(function (suggestion) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["createEagerElement"])(Suggestion, {
            key: suggestion.value,
            onClick: onSelect,
            suggestion: suggestion,
            query: query
        });
    })));
});

function highlightSuggestion(value, highlighted) {
    var regexp = new RegExp('(' + highlighted + ')');
    return value.replace(regexp, '<span class="' + styles.highlightedText + '">$1</span>');
}

/***/ }),
/* 144 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrap":"findify-block--autocomplete-mobile-body__wrap","form":"findify-block--autocomplete-mobile-body__form","form-left":"findify-block--autocomplete-mobile-body__form-left","formLeft":"findify-block--autocomplete-mobile-body__form-left","form-right":"findify-block--autocomplete-mobile-body__form-right","formRight":"findify-block--autocomplete-mobile-body__form-right","highlighted-text":"findify-block--autocomplete-mobile-body__highlighted-text","highlightedText":"findify-block--autocomplete-mobile-body__highlighted-text","input":"findify-block--autocomplete-mobile-body__input","submit":"findify-block--autocomplete-mobile-body__submit","icon":"findify-block--autocomplete-mobile-body__icon","suggestions":"findify-block--autocomplete-mobile-body__suggestions","suggestions-item":"findify-block--autocomplete-mobile-body__suggestions-item","suggestionsItem":"findify-block--autocomplete-mobile-body__suggestions-item","clear":"findify-block--autocomplete-mobile-body__clear"};

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HOC */
/* unused harmony export Component */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsCarousel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_widgets_Product__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_helpers_withConfig__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_helpers_withHooks__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_sizeme__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_sizeme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_sizeme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_slick__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_slick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_slick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_internals_Icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_match_media__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_match_media___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_match_media__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__slider_global_css__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__slider_global_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__slider_global_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__slider_theme_global_css__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__slider_theme_global_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__slider_theme_global_css__);
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var cx = __webpack_require__(2);








var styles = __webpack_require__(150);
var emptyObject = {};
var Arrow = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withHandlers"])({
    onClick: function onClick(_ref) {
        var _onClick = _ref.onClick,
            defaultOnClick = _ref.defaultOnClick;
        return function () {
            return _onClick ? _onClick() : defaultOnClick();
        };
    }
})(function (_a) {
    var dir = _a.dir,
        className = _a.className,
        currentSlide = _a.currentSlide,
        defaultOnClick = _a.defaultOnClick,
        slideCount = _a.slideCount,
        props = __rest(_a, ["dir", "className", "currentSlide", "defaultOnClick", "slideCount"]);

    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_internals_Icon__["a" /* default */], Object.assign({}, props, { name: 'chevron-' + dir, className: cx(styles.arrow, className) }));
});
var countProductsToShow = function countProductsToShow(width) {
    if (width > 1200) return 6;
    if (width > 900) return 5;
    if (width > 700) return 4;
    if (width > 500) return 3;
    if (width > 300) return 2;
    return 1;
};
var HOC = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["setDisplayName"])('ProductsCarousel'), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withState"])('target', 'setTarget', void 0), Object(__WEBPACK_IMPORTED_MODULE_3_helpers_withConfig__["a" /* default */])({
    slickSettings: {
        infinite: false,
        slidesToScroll: 1,
        arrows: true,
        lazyLoad: false
    }
}), __WEBPACK_IMPORTED_MODULE_5_react_sizeme___default()(), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withPropsOnChange"])(['size'], function (_ref2) {
    var size = _ref2.size;
    return {
        slidesToShow: countProductsToShow(size.width)
    };
}), Object(__WEBPACK_IMPORTED_MODULE_4_helpers_withHooks__["a" /* default */])('slider'), Object(__WEBPACK_IMPORTED_MODULE_4_helpers_withHooks__["a" /* default */])('carousel'), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withHandlers"])({
    setRef: function setRef(_ref3) {
        var setTarget = _ref3.setTarget,
            target = _ref3.target;
        return function (r) {
            return !target && !!r && setTarget(r);
        };
    },
    scrollToLast: function scrollToLast(_ref4) {
        var target = _ref4.target,
            items = _ref4.items,
            slidesToShow = _ref4.slidesToShow;
        return function () {
            if (items.length > slidesToShow) return target.slickGoTo(items.length);
        };
    },
    scrollToFirst: function scrollToFirst(_ref5) {
        var target = _ref5.target,
            items = _ref5.items,
            slidesToShow = _ref5.slidesToShow;
        return function () {
            if (items.length > slidesToShow) return target.slickGoTo(0);
        };
    }
}), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withPropsOnChange"])(['config'], function (_ref6) {
    var config = _ref6.config,
        scrollToFirst = _ref6.scrollToFirst,
        scrollToLast = _ref6.scrollToLast;
    return {
        sliderProps: {
            nextArrow: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Arrow, { dir: 'right', defaultOnClick: scrollToFirst }),
            prevArrow: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Arrow, { dir: 'left', defaultOnClick: scrollToLast })
        }
    };
}));
var Component = function Component(_a) {
    var items = _a.items,
        onProductClick = _a.onProductClick,
        slidesToShow = _a.slidesToShow,
        sliderProps = _a.sliderProps,
        setRef = _a.setRef,
        _b = _a.config,
        slickSettings = _b.slickSettings,
        title = _b.title,
        stickers = _b.stickers,
        config = __rest(_b, ["slickSettings", "title", "stickers"]);

    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: styles.root }, title && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", { className: styles.title }, title), Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["createEagerElement"])(__WEBPACK_IMPORTED_MODULE_6_react_slick___default.a, Object.assign({ ref: setRef }, sliderProps, { slidesToShow: slidesToShow }, slickSettings), items.map(function (product, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: product.hash || product.id }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_widgets_Product__["a" /* Product */], Object.assign({}, product, { index: i, onProductClick: onProductClick, config: Object.assign({}, config.product, { currency: config.currency, stickers: stickers }) })));
    })));
};
var ProductsCarousel = HOC(Component);

/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = require("match-media");

/***/ }),
/* 148 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 149 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 150 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"title":"findify-widget--products-carousel__title","arrow":"findify-widget--products-carousel__arrow","root":"findify-widget--products-carousel"};

/***/ })
/******/ ]);
});