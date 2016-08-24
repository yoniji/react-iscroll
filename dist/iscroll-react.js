(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["iscroll-react"] = factory(require("react"));
	else
		root["iscroll-react"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.setDefaultIScrollOptions = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(3);

	__webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var iScrollEventsMap = [["beforeScrollStart", "onBeforeScrollStart"], ["scrollCancel", "onScrollCancel"], ["scrollStart", "onScrollStart"], ["scroll", "onScroll"], ["scrollEnd", "onScrollEnd"], ["flick", "onFlick"], ["zoomStart", "onZoomStart"], ["zoomEnd", "onZoomEnd"]];

	var defaultIScrollOptions = {};

	/**
	 * set default iScroll options for massive usage convenience
	 * @param options see http://iscrolljs.com/
	 */
	var setDefaultIScrollOptions = exports.setDefaultIScrollOptions = function setDefaultIScrollOptions(options) {
	    defaultIScrollOptions = _extends({}, defaultIScrollOptions, options);
	};

	var IScroll = function (_Component) {
	    _inherits(IScroll, _Component);

	    // the iscroll options
	    function IScroll(props) {
	        _classCallCheck(this, IScroll);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(IScroll).call(this, props));

	        _this._options = {};
	        _this._listenToTouchEnd = false;


	        _this._options = _extends({}, defaultIScrollOptions, props.options);

	        if (props.pullDownToRefresh) {
	            _this._options.probeType = 2;
	        }

	        _this.state = {
	            pullDownActive: false,
	            pullDownVisible: false
	        };
	        _this.onScroll = _this.onScroll.bind(_this);
	        _this.onTouchEnd = _this.onTouchEnd.bind(_this);
	        _this.onScrollStart = _this.onScrollStart.bind(_this);
	        return _this;
	    }

	    /**
	     * Since IScroll don't know children updated or not, you might need to call this function manually.
	     * e.g. on async data loaded, or on children's state changed
	     * TODO: should be called automatically on needed, manual call is inconvenient
	     */


	    // touchend listener is used for PullDownToRefresh

	    // reference to iscroll instance


	    _createClass(IScroll, [{
	        key: "updateIScroll",
	        value: function updateIScroll() {
	            var _this2 = this;

	            var wrapper = this.refs.wrapper;
	            var scroller = this.refs.scroller;
	            if (wrapper && scroller) {
	                var _ret = function () {
	                    var props = _this2.props;

	                    // apply wrapper's dynamic properties

	                    if (props.dynamicTop) {
	                        wrapper.style.top = (0, _utils.getOffset)(wrapper.parentNode).top + "px";
	                    }
	                    if (props.dynamicBottomFunc) {
	                        wrapper.style.bottom = props.dynamicBottomFunc() + "px";
	                    }

	                    if (props.alwaysScroll) {
	                        scroller.style.minHeight = wrapper.clientHeight + 1 + "px";
	                    }

	                    // If iscroll instance exists, just update
	                    if (_this2._iScroll) {
	                        _this2._iScroll.refresh();
	                        return {
	                            v: void 0
	                        };
	                    }
	                    // Create new iscroll instance here
	                    _this2._iScroll = new props.iScroll(wrapper, _this2._options);

	                    // Register listeners for events
	                    iScrollEventsMap.map(function (elem) {
	                        if (props[elem[1]]) {
	                            _this2._iScroll.on(elem[0], (0, _utils.wrapFunc)(props[elem[1]]));
	                        }
	                    });

	                    // If PullDownToRefresh is enabled, we need to register more listeners
	                    if (props.pullDownToRefresh) {
	                        _this2._iScroll.on("scrollStart", (0, _utils.wrapFunc)(_this2.onScrollStart));
	                        _this2._iScroll.on("scroll", (0, _utils.wrapFunc)(_this2.onScroll));
	                        //this._iScroll.on("scrollEnd", wrapFunc(this.onScroll))
	                    }
	                }();

	                if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	            }
	        }

	        /**
	         * expose a function to get iScroll instance
	         * @returns {*}
	         */

	    }, {
	        key: "onScrollStart",
	        value: function onScrollStart() {
	            if (!this._listenToTouchEnd) {
	                this._listenToTouchEnd = true;
	                document.documentElement.addEventListener("touchend", this.onTouchEnd);
	            }
	        }

	        /**
	         * on iscroll scroll event, we update the PullDownToRefresh component's state and position
	         * @param iScrollInstance
	         */

	    }, {
	        key: "onScroll",
	        value: function onScroll(iScrollInstance) {
	            var pullDownToRefresh = this.props.pullDownToRefresh;

	            var appearDistance = pullDownToRefresh.appearDistance || 20;
	            var activeDistance = pullDownToRefresh.activeDistance || 55;

	            var pullDownVisible = iScrollInstance.y >= appearDistance;
	            var pullDownActive = iScrollInstance.y >= activeDistance;

	            if (this.state.pullDownActive !== pullDownActive || this.state.pullDownVisible !== pullDownVisible) {
	                this.setState({
	                    pullDownVisible: pullDownVisible,
	                    pullDownActive: pullDownActive
	                });
	            }
	            var pullDown = this.refs.pullDown;
	            if (pullDown) {
	                pullDown.style.top = iScrollInstance.y - pullDown.clientHeight - 5 + "px";
	            }
	        }
	    }, {
	        key: "onTouchEnd",
	        value: function onTouchEnd() {
	            if (this.state.pullDownActive) {
	                this.props.pullDownToRefresh.onRefresh();
	            }
	            this.setState({
	                pullDownVisible: false,
	                pullDownActive: false
	            });
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.updateIScroll();
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            if (this._iScroll) {
	                this._iScroll.destroy();
	                this._iScroll = null;
	            }
	            if (this._listenToTouchEnd) {
	                this._listenToTouchEnd = false;
	                document.documentElement.removeEventListener("touchend", this.onTouchEnd);
	            }
	        }
	    }, {
	        key: "renderPullDown",
	        value: function renderPullDown() {
	            if (this.state.pullDownVisible) {
	                var pullDownToRefresh = this.props.pullDownToRefresh;

	                if (pullDownToRefresh) {
	                    pullDownToRefresh.labelInactive = pullDownToRefresh.labelInactive || _react2.default.createElement(
	                        "div",
	                        null,
	                        "Pull down to refresh.."
	                    );
	                    pullDownToRefresh.labelActive = pullDownToRefresh.labelActive || _react2.default.createElement(
	                        "div",
	                        null,
	                        "Release to refresh.."
	                    );
	                }

	                var label = void 0;
	                if (this.state.pullDownActive) {
	                    label = pullDownToRefresh.labelActive;
	                } else {
	                    label = pullDownToRefresh.labelInactive;
	                }
	                return _react2.default.createElement(
	                    "div",
	                    { style: { position: "relative" } },
	                    _react2.default.createElement(
	                        "div",
	                        { id: "pull-down", ref: "pullDown" },
	                        label
	                    )
	                );
	            }
	            return null;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var children = _props.children;
	            var wrapperStyle = _props.wrapperStyle;


	            return _react2.default.createElement(
	                "div",
	                { className: "react-iscroll" },
	                _react2.default.createElement(
	                    "div",
	                    { id: "wrapper", ref: "wrapper", style: wrapperStyle },
	                    _react2.default.createElement(
	                        "div",
	                        { id: "scroller", ref: "scroller" },
	                        children
	                    )
	                ),
	                this.renderPullDown()
	            );
	        }
	    }, {
	        key: "iScrollInstance",
	        get: function get() {
	            return this._iScroll;
	        }
	    }]);

	    return IScroll;
	}(_react.Component);

	IScroll.propTypes = {
	    iScroll: _react.PropTypes.func.isRequired,
	    options: _react.PropTypes.object,
	    children: _react.PropTypes.node,

	    // iscroll events
	    onBeforeScrollStart: _react.PropTypes.func,
	    onScrollCancel: _react.PropTypes.func,
	    onScrollStart: _react.PropTypes.func,
	    onScroll: _react.PropTypes.func,
	    onScrollEnd: _react.PropTypes.func,
	    onFlick: _react.PropTypes.func,
	    onZoomStart: _react.PropTypes.func,
	    onZoomEnd: _react.PropTypes.func,

	    // On mobile devices, sometimes we wish user can always scroll,
	    // even the scroller's height is smaller than the wrapper's.
	    // However, iscroll itself doesn't provide this option,
	    // thus we dynamically set scroller's height to slightly bigger than wrapper's height
	    // default: true
	    alwaysScroll: _react.PropTypes.bool,

	    // Calculate the wrapper's top dynamically
	    // default: true
	    dynamicTop: _react.PropTypes.bool,

	    // Calculate the wrapper's bottom dynamically,
	    // since we can't use the wrapper's height for calculation, so I exposed a function
	    // notes: because IScroll is mounted before the parent,
	    // if you want to use this feature, make sure to call updateIScroll() when parent is mounted,
	    // just like the async load
	    dynamicBottomFunc: _react.PropTypes.func,

	    // If wrapper's position is static, provide here..
	    wrapperStyle: _react.PropTypes.shape({
	        top: _react.PropTypes.number,
	        bottom: _react.PropTypes.number,
	        left: _react.PropTypes.number,
	        right: _react.PropTypes.number
	    }),

	    // If you want to enabled PullDownToRefresh feature,
	    // ensure the iScroll prop you passed is "iscroll-probe"
	    pullDownToRefresh: _react.PropTypes.shape({
	        // you can customize the PullDownToRefresh labels
	        labelInactive: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
	        labelActive: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
	        // PullDownToRefresh label appears when iscroll's y distance bigger than this value
	        appearDistance: _react.PropTypes.number,
	        // PullDownToRefresh active label appears when iscroll's y distance bigger than this value
	        activeDistance: _react.PropTypes.number,
	        // onRefresh func
	        onRefresh: _react.PropTypes.func.isRequired
	    })
	};

	IScroll.defaultProps = {
	    alwaysScroll: true,
	    dynamicTop: false
	};

	exports.default = IScroll;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.wrapFunc = wrapFunc;
	exports.getOffset = getOffset;
	/**
	 * Since iscroll events are call with "this" pointing to iscroll instance,
	 * here we wrap it with a function while keeping "this"
	 * @param func
	 * @returns {Function}
	 */
	function wrapFunc(func) {
	    return function () {
	        func(this);
	    };
	}

	/**
	 * These three functions are used to get the element's offset,
	 * reference from http://javascript.info/tutorial/coordinates
	 * @param elem
	 * @returns {{top: number, left: number}}
	 * @private
	 */
	function _getOffsetSum(elem) {
	    var top = 0,
	        left = 0;
	    while (elem) {
	        top = top + parseInt(elem.offsetTop);
	        left = left + parseInt(elem.offsetLeft);
	        elem = elem.offsetParent;
	    }

	    return { top: top, left: left };
	}

	function _getOffsetRect(elem) {
	    var box = elem.getBoundingClientRect();

	    var body = document.body;
	    var docElem = document.documentElement;

	    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
	    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

	    var clientTop = docElem.clientTop || body.clientTop || 0;
	    var clientLeft = docElem.clientLeft || body.clientLeft || 0;

	    var top = box.top + scrollTop - clientTop;
	    var left = box.left + scrollLeft - clientLeft;

	    return { top: Math.round(top), left: Math.round(left) };
	}

	function getOffset(elem) {
	    if (elem.getBoundingClientRect) {
	        return _getOffsetRect(elem);
	    } else {
	        // old browser
	        return _getOffsetSum(elem);
	    }
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./IScroll.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./IScroll.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".react-iscroll #wrapper {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n}\n.react-iscroll #scroller {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  width: 100%;\n  -webkit-transform: translateZ(0);\n  -moz-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  -o-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-text-size-adjust: none;\n  -moz-text-size-adjust: none;\n  -ms-text-size-adjust: none;\n  -o-text-size-adjust: none;\n  text-size-adjust: none;\n}\n.react-iscroll #pull-down {\n  color: #999;\n  z-index: -1;\n  width: 100%;\n  position: absolute;\n  text-align: center;\n}\n", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;