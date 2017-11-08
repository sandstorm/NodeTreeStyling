/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _neosUiExtensibility = __webpack_require__(2);
	
	var _neosUiExtensibility2 = _interopRequireDefault(_neosUiExtensibility);
	
	var _createWrappedPageTree = __webpack_require__(14);
	
	var _createWrappedPageTree2 = _interopRequireDefault(_createWrappedPageTree);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _neosUiExtensibility2.default)('Sandstorm.NodeTreeStyling', {}, function (globalRegistry) {
	    var containerRegistry = globalRegistry.get('containers');
	    var PageTree = containerRegistry.get('LeftSideBar/Top/PageTree');
	
	    containerRegistry.set('LeftSideBar/Top/PageTree', (0, _createWrappedPageTree2.default)(PageTree));
	});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.createConsumerApi = undefined;
	
	var _createConsumerApi = __webpack_require__(3);
	
	var _createConsumerApi2 = _interopRequireDefault(_createConsumerApi);
	
	var _readFromConsumerApi = __webpack_require__(6);
	
	var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _readFromConsumerApi2.default)('manifest');
	exports.createConsumerApi = _createConsumerApi2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = createConsumerApi;
	
	var _package = __webpack_require__(4);
	
	var _manifest = __webpack_require__(5);
	
	var _manifest2 = _interopRequireDefault(_manifest);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createReadOnlyValue = function createReadOnlyValue(value) {
	    return {
	        value: value,
	        writable: false,
	        enumerable: false,
	        configurable: true
	    };
	};
	
	function createConsumerApi(manifests, exposureMap) {
	    var api = {};
	
	    Object.keys(exposureMap).forEach(function (key) {
	        Object.defineProperty(api, key, createReadOnlyValue(exposureMap[key]));
	    });
	
	    Object.defineProperty(api, '@manifest', createReadOnlyValue((0, _manifest2.default)(manifests)));
	
	    Object.defineProperty(window, '@Neos:HostPluginAPI', createReadOnlyValue(api));
	    Object.defineProperty(window['@Neos:HostPluginAPI'], 'VERSION', createReadOnlyValue(_package.version));
	}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = {"name":"@neos-project/neos-ui-extensibility","version":"1.0.0-beta8","description":"Extensibility mechanisms for the Neos CMS UI","main":"./src/index.js","scripts":{"prebuild":"check-dependencies && yarn clean","test":"yarn jest","test:watch":"yarn jest -- --watch","build":"exit 0","build:watch":"exit 0","clean":"rimraf ./lib ./dist","lint":"eslint src","jest":"PWD=$(pwd) NODE_ENV=test jest -w 1 --coverage"},"dependencies":{"@neos-project/build-essentials":"1.0.0-beta8","@neos-project/positional-array-sorter":"1.0.0-beta8","babel-core":"^6.13.2","babel-eslint":"^7.1.1","babel-loader":"^6.2.4","babel-plugin-transform-decorators-legacy":"^1.3.4","babel-plugin-transform-object-rest-spread":"^6.20.1","babel-plugin-webpack-alias":"^2.1.1","babel-preset-es2015":"^6.13.2","babel-preset-react":"^6.3.13","babel-preset-stage-0":"^6.3.13","chalk":"^1.1.3","css-loader":"^0.26.0","file-loader":"^0.10.0","json-loader":"^0.5.4","postcss-loader":"^1.0.0","react-dev-utils":"^0.5.0","style-loader":"^0.13.1"},"bin":{"neos-react-scripts":"./bin/neos-react-scripts.js"},"jest":{"transformIgnorePatterns":[],"setupFiles":["./node_modules/@neos-project/build-essentials/src/setup-browser-env.js","./node_modules/@neos-project/build-essentials/src/enzymeConfiguration.js"],"transform":{"neos-ui-extensibility/src/.+\\.jsx?$":"./node_modules/.bin/babel-jest","node_modules/@neos-project/.+\\.jsx?$":"./node_modules/.bin/babel-jest"}}}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	exports.default = function (manifests) {
	    return function manifest(identifier, options, bootstrap) {
	        manifests.push(_defineProperty({}, identifier, {
	            options: options,
	            bootstrap: bootstrap
	        }));
	    };
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = readFromConsumerApi;
	function readFromConsumerApi(key) {
	    return function () {
	        if (window['@Neos:HostPluginAPI'] && window['@Neos:HostPluginAPI']['@' + key]) {
	            var _window$NeosHostPlu;
	
	            return (_window$NeosHostPlu = window['@Neos:HostPluginAPI'])['@' + key].apply(_window$NeosHostPlu, arguments);
	        }
	
	        throw new Error('You are trying to read from a consumer api that hasn\'t been initialized yet!');
	    };
	}

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _readFromConsumerApi = __webpack_require__(6);
	
	var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _readFromConsumerApi2.default)('vendor')().React;

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _readFromConsumerApi = __webpack_require__(6);
	
	var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _readFromConsumerApi2.default)('vendor')().plow;

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapReactElementsRecursively;
	
	var _react = __webpack_require__(8);
	
	function mapReactElementsRecursively(children, cb) {
	    return _react.Children.map(children, function (child) {
	        if (!(0, _react.isValidElement)(child)) {
	            return child;
	        }
	
	        if (child.props.children) {
	            child = (0, _react.cloneElement)(child, {
	                children: mapReactElementsRecursively(child.props.children, cb)
	            });
	        }
	
	        return cb(child);
	    });
	}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _modifyTreeElementRendering = __webpack_require__(15);
	
	var _modifyTreeElementRendering2 = _interopRequireDefault(_modifyTreeElementRendering);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = function (OriginalPageTree) {
	    /**
	     * OriginalPageTree is of type `connect(NodeTree)`.
	     *
	     * We need to override the "ChildRenderer" property, which is the Tree Node instance (from neos-ui/Containers/LeftSideBar/NodeTree/Node/index.js).
	     *
	     * As the ChildRenderer is passed to the nested component using `mapStateToProps` we can override an internal
	     * Redux method `addExtraProps` https://github.com/reactjs/react-redux/blob/master/src/components/connectAdvanced.js#L236
	     * to modify the ChildRenderer before we pass it on.
	     */
	    return function (_OriginalPageTree) {
	        _inherits(PageTree, _OriginalPageTree);
	
	        function PageTree() {
	            _classCallCheck(this, PageTree);
	
	            return _possibleConstructorReturn(this, (PageTree.__proto__ || Object.getPrototypeOf(PageTree)).apply(this, arguments));
	        }
	
	        _createClass(PageTree, [{
	            key: 'addExtraProps',
	            value: function addExtraProps(props) {
	                var modifiedProps = _extends({}, props);
	                modifiedProps.ChildRenderer = (0, _modifyTreeElementRendering2.default)(props.ChildRenderer);
	                return _get(PageTree.prototype.__proto__ || Object.getPrototypeOf(PageTree.prototype), 'addExtraProps', this).call(this, modifiedProps);
	            }
	        }]);
	
	        return PageTree;
	    }(OriginalPageTree);
	};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _plowJs = __webpack_require__(11);
	
	var _mapReactElementsRecursively = __webpack_require__(13);
	
	var _mapReactElementsRecursively2 = _interopRequireDefault(_mapReactElementsRecursively);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = function (ChildRenderer) {
	    ///////////////////////////////////////////////////
	    // 1. SETUP
	    ///////////////////////////////////////////////////
	
	    // ChildRenderer is a neos(connect(TreeNode))
	    // -> so we need to access the wrapped component to retrieve the actual Tree Node; and then we start monkey-patching it.
	    // "TreeNode" is the class defined in neos-ui/Containers/LeftSideBar/NodeTree/Node/index.js
	    var TreeNode = ChildRenderer.WrappedComponent.WrappedComponent;
	
	    if (TreeNode.prototype._MODIFIED_SandstormNodeTreeStyling) {
	        return ChildRenderer;
	    }
	    TreeNode.prototype._MODIFIED_SandstormNodeTreeStyling = true;
	
	    ///////////////////////////////////////////////////
	    // 2. override getIcon functionality in TreeNode
	    ///////////////////////////////////////////////////
	    var originalGetIcon = TreeNode.prototype.getIcon;
	    TreeNode.prototype.getIcon = function () {
	        if ((0, _plowJs.$get)('properties._hiddenAfterDateTime', this.props.node)) {
	            return 'fa-ban';
	        }
	        return originalGetIcon.apply(this, arguments);
	    };
	
	    ///////////////////////////////////////////////////
	    // 3. wrap <Tree.Node.Header> (which sadly has the displayName ThemedDragDropContainer) by a custom implementation
	    //    with custom styling.
	    //
	    // As TreeNodeHeader is the used somewhere in the result of Node.render(), we parse the returned React Element tree,
	    // copy and modify it if we find the Tree Node Header.
	    ///////////////////////////////////////////////////
	    var originalRender = ChildRenderer.WrappedComponent.WrappedComponent.prototype.render;
	    ChildRenderer.WrappedComponent.WrappedComponent.prototype.render = function () {
	        var _this = this;
	
	        var results = originalRender.apply(this, arguments);
	
	        return (0, _mapReactElementsRecursively2.default)(results, function (child) {
	            if (child.type.displayName === 'ThemedDragDropContainer') {
	                return (0, _react.createElement)(wrapTreeNodeHeaderComponent(child.type, _this.props), child.props);
	            }
	
	            return child;
	        });
	    };
	
	    return ChildRenderer;
	};
	
	function wrapTreeNodeHeaderComponent(TreeNodeHeader, propsFromTreeNode) {
	    return function (_PureComponent) {
	        _inherits(WrappedTreeNodeHeader, _PureComponent);
	
	        function WrappedTreeNodeHeader() {
	            _classCallCheck(this, WrappedTreeNodeHeader);
	
	            return _possibleConstructorReturn(this, (WrappedTreeNodeHeader.__proto__ || Object.getPrototypeOf(WrappedTreeNodeHeader)).apply(this, arguments));
	        }
	
	        _createClass(WrappedTreeNodeHeader, [{
	            key: 'render',
	            value: function render() {
	                var style = {};
	                if ((0, _plowJs.$get)('properties._hiddenAfterDateTime', propsFromTreeNode.node)) {
	                    style.background = 'red';
	                }
	                return _react2.default.createElement(TreeNodeHeader, _extends({ style: style }, this.props));
	            }
	        }]);
	
	        return WrappedTreeNodeHeader;
	    }(_react.PureComponent);
	}

/***/ })
/******/ ]);
//# sourceMappingURL=Plugin.js.map