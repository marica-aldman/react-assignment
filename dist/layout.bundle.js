(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout"],{

/***/ "./src/components/button.tsx":
/*!***********************************!*\
  !*** ./src/components/button.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_themeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/themeContext */ "./src/contexts/themeContext.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isHover: false,
            isPressing: false
        };
        _this.onMouseEnter = function () { return _this.setState({ isHover: true }); };
        _this.onMouseLeave = function () { return _this.setState({ isHover: false, isPressing: false }); };
        _this.onMouseDown = function () { return _this.setState({ isPressing: true }); };
        _this.onMouseUp = function () { return _this.setState({ isPressing: false }); };
        return _this;
    }
    Button.prototype.render = function () {
        var _this = this;
        var _a = this.props, onClick = _a.onClick, children = _a.children;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_themeContext__WEBPACK_IMPORTED_MODULE_1__["ThemeContext"].Consumer, null, function (_a) {
            var theme = _a.theme;
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { onClick: onClick, onMouseEnter: _this.onMouseEnter, onMouseLeave: _this.onMouseLeave, onMouseDown: _this.onMouseDown, onMouseUp: _this.onMouseUp, style: root(theme, _this.state, _this.props) }, children));
        }));
    };
    return Button;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Button);
var root = function (theme, state, props) {
    var defaultStyle = {
        background: theme.background.primary,
        color: theme.foreground.primary,
        border: "solid 0.1em " + theme.background.secondary,
        borderRadius: '100em',
        padding: '0.5em 0.8em',
        fontWeight: 'bold',
        boxShadow: "0 0 15px -3px " + theme.foreground.darkened,
        cursor: 'pointer',
        outline: 'inherit',
        transition: 'all 100ms'
    };
    switch (props.size) {
        case 'small':
            defaultStyle.fontSize = '0.8em';
            break;
        case 'large':
            defaultStyle.fontSize = '1.3em';
            break;
        default: defaultStyle.fontSize = '1em';
    }
    if (state.isPressing) {
        var pressedStyle = {
            boxShadow: "0 0 15px -4px " + theme.foreground.darkened,
            transform: 'scale(0.95, 0.95)',
        };
        return __assign({}, defaultStyle, pressedStyle);
    }
    if (state.isHover) {
        var hoverStyle = {
            boxShadow: "0 0 15px -2px " + theme.foreground.darkened
        };
        return __assign({}, defaultStyle, hoverStyle);
    }
    return defaultStyle;
};


/***/ }),

/***/ "./src/components/layout.tsx":
/*!***********************************!*\
  !*** ./src/components/layout.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ "./src/components/navbar.tsx");
/* harmony import */ var _viewContainer_viewContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewContainer/viewContainer */ "./src/components/viewContainer/viewContainer.tsx");
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css */ "./src/css.tsx");
/* harmony import */ var _contexts_themeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/themeContext */ "./src/contexts/themeContext.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





/** React class component */
var Layout = /** @class */ (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Layout.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_themeContext__WEBPACK_IMPORTED_MODULE_4__["ThemeContext"].Consumer, null, function (_a) {
            var theme = _a.theme;
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: __assign({}, columnFlex, _css__WEBPACK_IMPORTED_MODULE_3__["fullScreen"], background(theme)) },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_viewContainer_viewContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
        }));
    };
    return Layout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Layout);
var columnFlex = {
    display: 'flex',
    flexDirection: 'column',
};
var background = function (theme) { return ({
    background: theme.background.secondary
}); };


/***/ }),

/***/ "./src/components/navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/navbar.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _contexts_themeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/themeContext */ "./src/contexts/themeContext.tsx");
/* harmony import */ var _themeToggleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./themeToggleButton */ "./src/components/themeToggleButton.tsx");
/* harmony import */ var _viewContainer_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewContainer/search */ "./src/components/viewContainer/search.tsx");





/** React function component */
function Navbar() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_themeContext__WEBPACK_IMPORTED_MODULE_2__["ThemeContext"].Consumer, null, function (_a) {
        var theme = _a.theme;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: navbar(theme) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: "/", style: navbarItem(theme) },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { style: header },
                    "React",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "sm-hidden" }, " Playground"))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { component: _viewContainer_search__WEBPACK_IMPORTED_MODULE_4__["default"] }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: navbarItem(theme) },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_themeToggleButton__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
    }));
}
var navbar = function (theme) { return ({
    height: '4em',
    minHeight: '4em',
    background: theme.background.primary,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: '0 1em',
    boxShadow: "0 -10px 30px black"
}); };
var navbarItem = function (theme) { return ({
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.foreground.primary,
}); };
var header = {
    fontSize: '1.7em',
    fontWeight: 'bold',
    cursor: 'pointer'
};


/***/ }),

/***/ "./src/components/spinner.tsx":
/*!************************************!*\
  !*** ./src/components/spinner.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/index.js");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css */ "./src/css.tsx");
/* harmony import */ var _contexts_themeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/themeContext */ "./src/contexts/themeContext.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
    var defaultSize = 6;
    var size = props.size ? (props.size * defaultSize) : defaultSize;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: __assign({}, _css__WEBPACK_IMPORTED_MODULE_2__["centeredContent"], _css__WEBPACK_IMPORTED_MODULE_2__["fullScreen"]) },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_themeContext__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"].Consumer, null, function (_a) {
            var theme = _a.theme;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_1__["PropagateLoader"], { color: theme.foreground.primary, size: size, sizeUnit: "px" });
        })));
});


/***/ }),

/***/ "./src/components/themeToggleButton.tsx":
/*!**********************************************!*\
  !*** ./src/components/themeToggleButton.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThemeToggleButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_themeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/themeContext */ "./src/contexts/themeContext.tsx");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./src/components/button.tsx");



function ThemeToggleButton() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_themeContext__WEBPACK_IMPORTED_MODULE_1__["ThemeContext"].Consumer, null, function (_a) {
        var toggleTheme = _a.toggleTheme;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_2__["default"], { size: "small", onClick: toggleTheme }, "Toggle Theme"));
    }));
}


/***/ }),

/***/ "./src/components/viewContainer/detailView/detailView.tsx":
/*!****************************************************************!*\
  !*** ./src/components/viewContainer/detailView/detailView.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../css */ "./src/css.tsx");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modal */ "./src/components/modal.tsx");
/* harmony import */ var _headerSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./headerSection */ "./src/components/viewContainer/detailView/headerSection.tsx");
/* harmony import */ var _textSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./textSection */ "./src/components/viewContainer/detailView/textSection.tsx");
/* harmony import */ var _imageSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imageSection */ "./src/components/viewContainer/detailView/imageSection.tsx");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../button */ "./src/components/button.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};







;
;
var DetailView = /** @class */ (function (_super) {
    __extends(DetailView, _super);
    function DetailView(props) {
        var _this = _super.call(this, props) || this;
        _this.openModal = function () { return _this.setState({ isModalOpen: true }); };
        _this.closeModal = function () { return _this.setState({ isModalOpen: false }); };
        _this.state = {
            isModalOpen: false,
            currentPath: _this.props.location.pathname.substr(1)
        };
        return _this;
    }
    Object.defineProperty(DetailView.prototype, "imageSrc", {
        get: function () {
            return "../assets/" + this.state.currentPath + ".jpg";
        },
        enumerable: true,
        configurable: true
    });
    DetailView.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: container },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: this.imageSrc, style: __assign({}, _css__WEBPACK_IMPORTED_MODULE_1__["fullscreenAbsolute"]) }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: __assign({}, _css__WEBPACK_IMPORTED_MODULE_1__["fullscreenAbsolute"]) },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: flexContainer },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_headerSection__WEBPACK_IMPORTED_MODULE_3__["default"], { view: this.state.currentPath, openModal: this.openModal }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_textSection__WEBPACK_IMPORTED_MODULE_4__["default"], { view: this.state.currentPath }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_imageSection__WEBPACK_IMPORTED_MODULE_5__["default"], { view: this.state.currentPath })))),
            this.state.isModalOpen ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modal__WEBPACK_IMPORTED_MODULE_2__["default"], { persistent: true, shouldClose: this.closeModal },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null,
                    "Modal opened from ",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { style: highlighted }, this.state.currentPath),
                    " view"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_6__["default"], { onClick: this.closeModal }, "Close modal"))) : null));
    };
    return DetailView;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (DetailView);
var highlighted = {
    color: 'orange'
};
var content = function (theme) { return ({
    zIndex: 10,
    background: theme.background.primary + "B3",
    overflowY: 'auto'
}); };
var container = {
    position: 'relative',
    width: '100%',
    height: '100%'
};
var flexContainer = {
    display: 'flex',
    flexDirection: 'column',
    padding: '1em'
};


/***/ }),

/***/ "./src/components/viewContainer/detailView/headerSection.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/viewContainer/detailView/headerSection.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_themeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../contexts/themeContext */ "./src/contexts/themeContext.tsx");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../button */ "./src/components/button.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var HeaderSection = /** @class */ (function (_super) {
    __extends(HeaderSection, _super);
    function HeaderSection(props) {
        return _super.call(this, props) || this;
    }
    HeaderSection.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_themeContext__WEBPACK_IMPORTED_MODULE_1__["ThemeContext"].Consumer, null, function (_a) {
            var theme = _a.theme;
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: headerSegment },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", { style: __assign({}, header(theme)) }, _this.props.view.toUpperCase()),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_2__["default"], { size: "small", onClick: _this.props.openModal }, "Open Modal")));
        }));
    };
    return HeaderSection;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (HeaderSection);
var color = {
    color: ''
};
var headerSegment = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
};
var header = function (theme) { return ({
    color: "" + theme.fontColor.color,
    backgroundColor: "" + theme.background.primary,
    padding: '10px'
}); };


/***/ }),

/***/ "./src/components/viewContainer/detailView/imageCard.tsx":
/*!***************************************************************!*\
  !*** ./src/components/viewContainer/detailView/imageCard.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../spinner */ "./src/components/spinner.tsx");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modal */ "./src/components/modal.tsx");
/* harmony import */ var _contexts_themeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../contexts/themeContext */ "./src/contexts/themeContext.tsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../button */ "./src/components/button.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};








var ImageCard = /** @class */ (function (_super) {
    __extends(ImageCard, _super);
    function ImageCard(props) {
        var _this = _super.call(this, props) || this;
        _this.onMouseEnter = function () { return _this.setState({ isHover: true }); };
        _this.onMouseLeave = function () { return _this.setState({ isHover: false }); };
        _this.openModal = function () { return _this.setState({ isModalOpen: true }); };
        _this.closeModal = function () { return _this.setState({ isModalOpen: false }); };
        _this.state = {
            isHover: false,
            isModalOpen: false,
            isFavorite: _this.props.favorite,
            search: _this.props.searchTerm,
            thisId: _this.props.id,
            theseUrls: _this.props.urls
        };
        return _this;
    }
    ImageCard.prototype.style = function (theme) {
        var hover = this.state.isHover ? {
            boxShadow: "0 8px 40px -5px " + theme.foreground.darkened,
            transform: 'scale(1.05, 1.05) translateY(-1%)'
        } : {};
        return __assign({}, imageContainer(theme), hover);
    };
    ImageCard.prototype.likeHeart = function () {
        if (this.state.isFavorite) {
            return _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faHeart"];
        }
        return _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faHeart"];
    };
    ImageCard.prototype.favoriteImage = function (id, urls) {
        var storedValues = window.localStorage.getItem('likedImages');
        var likedImagesArray = storedValues != null ? JSON.parse(storedValues) : [];
        var arrayLength = likedImagesArray.length;
        var removed = false;
        if (arrayLength != 0) {
            for (var i = 0; i < arrayLength; i++) {
                var specificObject = likedImagesArray[i];
                if (specificObject['id'] == id) {
                    delete likedImagesArray[i];
                    var newArrayLength = arrayLength - 1;
                    if (newArrayLength > 0) {
                        window.localStorage.setItem('likedImages', JSON.stringify(likedImagesArray));
                    }
                    else {
                        window.localStorage.removeItem('likedImages');
                    }
                    removed = true;
                    this.setState({ isFavorite: false });
                }
            }
        }
        if (!removed) {
            var a = [];
            var b = {
                id: id,
                urls: urls,
                searchTerm: this.state.search
            };
            if (arrayLength == 0) {
                a.push(b);
                window.localStorage.setItem('likedImages', JSON.stringify(a));
                this.setState({ isFavorite: true });
            }
            else {
                likedImagesArray.push(b);
                window.localStorage.setItem('likedImages', JSON.stringify(likedImagesArray));
                this.setState({ isFavorite: true });
            }
        }
    };
    ImageCard.prototype.download = function (size) {
        var _this = this;
        if (size == 'small') {
            setTimeout(function () {
                var fileToDownload = {
                    file: _this.state.theseUrls.small,
                };
                window.open(fileToDownload.file);
                // you could also do:
                // window.location.href = response.file;
            }, 100);
        }
        if (size == 'full') {
            setTimeout(function () {
                var fileToDownload = {
                    file: _this.state.theseUrls.full,
                };
                window.open(fileToDownload.file);
                // you could also do:
                // window.location.href = response.file;
            }, 100);
        }
        if (size == 'regular') {
            setTimeout(function () {
                var fileToDownload = {
                    file: _this.state.theseUrls.regular,
                };
                window.open(fileToDownload.file);
                // you could also do:
                // window.location.href = response.file;
            }, 100);
        }
    };
    ImageCard.prototype.whichModal = function () {
        var _this = this;
        if (this.props.currentPath != '') {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modal__WEBPACK_IMPORTED_MODULE_2__["default"], { shouldClose: this.closeModal },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: this.state.theseUrls.regular, style: preview }));
        }
        else {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modal__WEBPACK_IMPORTED_MODULE_2__["default"], { persistent: true, shouldClose: this.closeModal },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { onClick: function () { return _this.download('small'); } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: this.state.theseUrls.thumb }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { style: imageText }, "Small")),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { onClick: function () { return _this.download('regular'); } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: this.state.theseUrls.thumb }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { style: imageText }, "Medium")),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { onClick: function () { return _this.download('full'); } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: this.state.theseUrls.thumb }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { style: imageText }, "Large"))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_7__["default"], { onClick: this.closeModal }, "Close modal"));
        }
    };
    ImageCard.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_themeContext__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"].Consumer, null, function (_a) {
                var theme = _a.theme;
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: _this.style(theme), onMouseEnter: _this.onMouseEnter, onMouseLeave: _this.onMouseLeave, onClick: _this.openModal },
                    _this.state.theseUrls.small ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: _this.state.theseUrls.small, style: card }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_spinner__WEBPACK_IMPORTED_MODULE_1__["default"], null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { onClick: function (event) { return _this.favoriteImage(_this.state.thisId, _this.state.theseUrls); }, style: fontIcon },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], { key: _this.state.thisId, icon: _this.likeHeart(), style: favoriteIcons })),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, _this.props.currentPath == '' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_7__["default"], { onClick: _this.openModal }, "Download") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)))));
            }),
            this.state.isModalOpen ? this.whichModal() : null));
    };
    return ImageCard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ImageCard);
var favoriteIcons = {
    color: "#FFFFFF"
};
var fontIcon = {
    width: '20px'
};
var imageText = {
    color: "#FFFFFF"
};
var imageContainer = function (theme) { return ({
    margin: '1em',
    flexGrow: 1,
    background: theme.background.primary + "AA",
    width: '12em',
    height: '18em',
    transition: 'all 300ms'
}); };
var card = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
};
var preview = {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
};


/***/ }),

/***/ "./src/components/viewContainer/detailView/imageSection.tsx":
/*!******************************************************************!*\
  !*** ./src/components/viewContainer/detailView/imageSection.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _imageCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageCard */ "./src/components/viewContainer/detailView/imageCard.tsx");
/* harmony import */ var _contexts_themeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../contexts/themeContext */ "./src/contexts/themeContext.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ImageSection = /** @class */ (function (_super) {
    __extends(ImageSection, _super);
    function ImageSection(props) {
        var _this = _super.call(this, props) || this;
        /** Not a good place for the key.. well.. what the heck.. - GET YOUR OWN! */
        _this.accessKey = "d0f10826852d7d3e1e3568a14ac2c90fb33d7658759697194dea7466ea2d3196";
        _this.imageDatabaseApiUrl = "https://api.unsplash.com/search/photos/";
        _this.state = {
            currentPath: _this.props.view,
            numberOfImagesPerPage: 24,
            imageInfo: new Array(24).fill({}),
            isLoading: true
        };
        return _this;
    } // make sure numberOfImagesPerPage matches the size of the array in imageInfo
    ImageSection.prototype.handleResponse = function (favoritedImages, restOfArray, response) {
        var imgInfo = [];
        if (response) {
            if (response.data && response.data.results) {
                var imgIds = response.data.results.map(function (id) { return id.id; });
                var imgUrls = response.data.results.map(function (img) { return img.urls; });
                var numberofResponces = imgIds.length;
                var amountFavorited = favoritedImages.length;
                for (var i = 0; i < amountFavorited; i++) {
                    var one = [favoritedImages[i].id, favoritedImages[i].urls];
                    imgInfo.push(one);
                }
                for (var j = 0; j < numberofResponces; j++) {
                    var one = [imgIds[j], imgUrls[j]];
                    imgInfo.push(one);
                }
                this.setState({ imageInfo: imgInfo, isLoading: false });
            }
        }
        else {
            var amountFavorited = favoritedImages.length;
            for (var i = 0; i < amountFavorited; i++) {
                var one = [favoritedImages[i].id, favoritedImages[i].urls];
                imgInfo.push(one);
            }
            for (var j = 0; j < restOfArray; j++) {
                var one = ['null', {
                        'full': 'null',
                        'raw': 'null',
                        'regular': 'null',
                        'small': 'null',
                        'thumb': 'null',
                    }];
                imgInfo.push(one);
            }
        }
        this.setState({ imageInfo: imgInfo, isLoading: false });
    };
    ImageSection.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var storedValues, likedImagesArray, arrayLength, favoritedPics, restOfImages, i, response, restOfArray, response, favoritedImages, restOfArray, noFavorites, restOfArray, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        storedValues = window.localStorage.getItem('likedImages');
                        likedImagesArray = storedValues !== null ? JSON.parse(storedValues) : [];
                        arrayLength = likedImagesArray.length;
                        favoritedPics = [];
                        restOfImages = this.state.numberOfImagesPerPage;
                        //do we have any favorites of this path? and do we have any favorites at all?
                        for (i = 0; i < arrayLength; i++) {
                            if (likedImagesArray[i].searchTerm == this.state.currentPath) {
                                // searchTerm for the picture is same as currentPath
                                favoritedPics.push(likedImagesArray[i]);
                                restOfImages--;
                            }
                            else if (this.state.currentPath == '') {
                                // main page loads all favorites
                                favoritedPics.push(likedImagesArray[i]);
                                restOfImages--;
                            }
                        }
                        if (!(restOfImages > 0 || arrayLength != 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(this.imageDatabaseApiUrl, {
                                params: {
                                    client_id: this.accessKey,
                                    query: this.props.view,
                                    page: Math.round(Math.random() * 100),
                                    per_page: restOfImages,
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        restOfArray = restOfImages;
                        this.handleResponse(favoritedPics, restOfArray, response);
                        _a.label = 2;
                    case 2:
                        if (!(restOfImages == this.state.numberOfImagesPerPage && arrayLength == 0)) return [3 /*break*/, 5];
                        if (!(this.state.currentPath != '')) return [3 /*break*/, 4];
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(this.imageDatabaseApiUrl, {
                                params: {
                                    client_id: this.accessKey,
                                    query: this.props.view,
                                    page: Math.round(Math.random() * 100),
                                    per_page: restOfImages,
                                }
                            })];
                    case 3:
                        response = _a.sent();
                        favoritedImages = [];
                        restOfArray = 0;
                        this.handleResponse(favoritedImages, restOfArray, response);
                        return [3 /*break*/, 5];
                    case 4:
                        noFavorites = [];
                        restOfArray = restOfImages;
                        this.handleResponse(noFavorites, restOfArray);
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ImageSection.prototype.testFavorite = function (id) {
        var storedValues = window.localStorage.getItem('likedImages');
        var likedImagesArray = storedValues !== null ? JSON.parse(storedValues) : [];
        var arrayLength = likedImagesArray.length;
        var isFavorited = false;
        if (arrayLength != 0) {
            for (var i = 0; i < arrayLength; i++) {
                for (var j = 0; j < likedImagesArray[i].length; j++) {
                }
                var specificObject = likedImagesArray[i];
                if (specificObject['id'] == id) {
                    isFavorited = true;
                    return isFavorited;
                }
            }
        }
        return false;
    };
    ;
    ImageSection.prototype.getSearch = function () {
        var storedSearch = window.localStorage.getItem('searchTerm');
        return storedSearch != null ? storedSearch : '';
    };
    ImageSection.prototype.createCards = function () {
        var theCards = [];
        var testInfo = this.state.imageInfo[0];
        if (testInfo) {
            if (window.localStorage.getItem('searchTerm')) {
                if (testInfo.length == 2) {
                    for (var i = 0; i < this.state.imageInfo.length; i++) {
                        var specificInfo = this.state.imageInfo[i];
                        if (specificInfo[0] != 'null') {
                            var urls = {
                                'full': specificInfo[1].full,
                                'raw': specificInfo[1].raw,
                                'regular': specificInfo[1].regular,
                                'small': specificInfo[1].small,
                                'thumb': specificInfo[1].thumb
                            };
                            theCards.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_imageCard__WEBPACK_IMPORTED_MODULE_2__["default"], { id: specificInfo[0], urls: urls, favorite: this.testFavorite(specificInfo[0]), currentPath: this.state.currentPath, searchTerm: this.getSearch() }));
                        }
                    }
                }
            }
        }
        return theCards;
    };
    ImageSection.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_themeContext__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"].Consumer, null, function (_a) {
            var theme = _a.theme;
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: root(theme) }, _this.createCards()));
        }));
    };
    return ImageSection;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ImageSection);
var root = function (theme) { return ({
    margin: '3em -1em -1em -1em',
    display: 'flex',
    flexWrap: 'wrap',
    background: theme.background.primary + "B3",
    boxShadow: "0 0px 80px 15px " + theme.background.primary
}); };


/***/ }),

/***/ "./src/components/viewContainer/detailView/textSection.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/viewContainer/detailView/textSection.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../spinner */ "./src/components/spinner.tsx");
/* harmony import */ var _contexts_themeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../contexts/themeContext */ "./src/contexts/themeContext.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var TextSection = /** @class */ (function (_super) {
    __extends(TextSection, _super);
    function TextSection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            paragraphs: [],
            isLoading: true
        };
        return _this;
    }
    Object.defineProperty(TextSection.prototype, "wikipediaApiUrl", {
        get: function () {
            return ('http://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text');
        },
        enumerable: true,
        configurable: true
    });
    TextSection.prototype.stripHtmlAndReferences = function (htmlText) {
        var doc = new DOMParser().parseFromString(htmlText, 'text/html');
        var text = doc.body.textContent || "";
        return this.removeReferences(text);
    };
    TextSection.prototype.removeReferences = function (text) {
        return text.replace(/ *\[[^)]*\] */g, "");
    };
    TextSection.prototype.handleResponse = function (response) {
        var htmlPageText = response.data.parse.text['*'];
        var paragraphs = this.extractBeginningOfText(htmlPageText);
        this.setState({ paragraphs: paragraphs, isLoading: false });
    };
    TextSection.prototype.extractBeginningOfText = function (htmlPageText) {
        var _this = this;
        // Split on <p>
        var paragraphs = htmlPageText.split('<p>');
        // Remove first content
        paragraphs.shift();
        // Trim end of last paragraph
        var lastParapgraph = paragraphs.pop() || "";
        lastParapgraph = lastParapgraph.substr(0, lastParapgraph.indexOf('</p>'));
        paragraphs.push(lastParapgraph);
        return paragraphs.map(function (p) { return _this.stripHtmlAndReferences(p); });
    };
    TextSection.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(this.wikipediaApiUrl, {
                                params: {
                                    page: this.props.view,
                                    origin: '*',
                                    format: 'json'
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        this.handleResponse(response);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TextSection.prototype.render = function () {
        var _a = this.state, isLoading = _a.isLoading, paragraphs = _a.paragraphs;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_themeContext__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"].Consumer, null, function (_a) {
            var theme = _a.theme;
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: root },
                isLoading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_spinner__WEBPACK_IMPORTED_MODULE_2__["default"], null) : null,
                paragraphs.map(function (paragraph) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { key: paragraph.substr(0, 10), style: text(theme) }, paragraph);
                })));
        }));
    };
    return TextSection;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (TextSection);
var root = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '15em'
};
var text = function (theme) { return ({
    display: 'block',
    lineHeight: '1.5',
    fontSize: '1.1em',
    color: theme.foreground.primary,
    backgroundColor: "" + theme.background.primary,
    boxShadow: "2px, 2px, 2px, 2px",
    padding: '5px'
}); };


/***/ }),

/***/ "./src/components/viewContainer/masterView.tsx":
/*!*****************************************************!*\
  !*** ./src/components/viewContainer/masterView.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _detailView_imageSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detailView/imageSection */ "./src/components/viewContainer/detailView/imageSection.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


;
var MasterView = /** @class */ (function (_super) {
    __extends(MasterView, _super);
    function MasterView(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isModalOpen: false,
            currentPath: ''
        };
        return _this;
    }
    MasterView.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_detailView_imageSection__WEBPACK_IMPORTED_MODULE_1__["default"], { view: '' })));
    };
    return MasterView;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (MasterView);
;


/***/ }),

/***/ "./src/components/viewContainer/search.tsx":
/*!*************************************************!*\
  !*** ./src/components/viewContainer/search.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _contexts_themeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/themeContext */ "./src/contexts/themeContext.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



;
;
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search(props) {
        var _this = _super.call(this, props) || this;
        _this.handleSearch = function (event) {
            event.preventDefault();
            console.log(_this.state.searchTerm);
            //check if we have done any searches before
            if (!window.localStorage.getItem('searchTerm')) {
                //we have not
                //check that we arent reloading main 
                if (_this.state.currentPath == '' && _this.state.searchTerm == '') {
                    //reload after altering searchTerm back to nothing
                    // set lastSearch
                    window.localStorage.setItem('lastSearch', 'nothingSearched'); //set searchTerm
                    window.localStorage.setItem('searchTerm', 'nothingSearched');
                    // change the url
                    _this.props.history.push('');
                    // reload window
                    window.location.reload();
                }
                else if (_this.state.currentPath == '' && _this.state.searchTerm == 'nothingSearched') {
                    //reload 
                    // set lastSearch
                    window.localStorage.setItem('lastSearch', 'nothingSearched'); //set searchTerm
                    window.localStorage.setItem('searchTerm', 'nothingSearched');
                    // change the url
                    _this.props.history.push('');
                    // reload window
                    window.location.reload();
                }
                else if (_this.state.currentPath == '' && _this.state.searchTerm != '') {
                    //newpage from main
                    // set lastSearch
                    window.localStorage.setItem('lastSearch', _this.state.searchTerm); //set searchTerm
                    window.localStorage.setItem('searchTerm', _this.state.searchTerm);
                    // change the url
                    _this.props.history.push(_this.state.searchTerm);
                    // reload window
                    window.location.reload();
                }
                else {
                    //newpage from otherplace
                    //check that it is not a reload
                    if (_this.state.currentPath != '' && _this.state.searchTerm == 'nothingSearched') {
                        //reloaded
                        // set lastSearch
                        _this.setState({ searchTerm: _this.state.currentPath });
                        window.localStorage.setItem('lastSearch', _this.state.searchTerm); //set searchTerm
                        window.localStorage.setItem('searchTerm', _this.state.searchTerm);
                        // change the url
                        _this.props.history.push(_this.state.searchTerm);
                        // reload window
                        window.location.reload();
                    }
                    else {
                        //new page
                        // set lastSearch
                        window.localStorage.setItem('lastSearch', _this.state.searchTerm); //set searchTerm
                        window.localStorage.setItem('searchTerm', _this.state.searchTerm);
                        // change the url
                        _this.props.history.push(_this.state.searchTerm);
                        // reload window
                        window.location.reload();
                    }
                }
            }
            else {
                //we have
                //check if we are on main
                if (_this.state.currentPath == '') {
                    if (_this.state.searchTerm == '' || _this.state.searchTerm == 'nothingSearched') {
                        //reload
                        // set lastSearch
                        window.localStorage.setItem('lastSearch', 'nothingSearched'); //set searchTerm
                        window.localStorage.setItem('searchTerm', 'nothingSearched');
                        // change the url
                        _this.props.history.push('');
                        // reload window
                        window.location.reload();
                    }
                    else {
                        //new page
                        // set lastSearch
                        window.localStorage.setItem('lastSearch', _this.state.searchTerm); //set searchTerm
                        window.localStorage.setItem('searchTerm', _this.state.searchTerm);
                        // change the url
                        _this.props.history.push(_this.state.searchTerm);
                        // reload window
                        window.location.reload();
                    }
                }
                else {
                    if (_this.state.searchTerm == '') {
                        // set lastSearch
                        window.localStorage.setItem('lastSearch', _this.state.currentPath); //set searchTerm
                        window.localStorage.setItem('searchTerm', 'nothingSearched');
                        // change the url
                        _this.props.history.push('');
                        // reload window
                        window.location.reload();
                    }
                    else if (_this.state.searchTerm == 'nothingSearched') {
                        //reload
                        // set lastSearch
                        window.localStorage.setItem('lastSearch', _this.state.currentPath); //set searchTerm
                        window.localStorage.setItem('searchTerm', _this.state.currentPath);
                        // change the url
                        _this.props.history.push(_this.state.currentPath);
                        // reload window
                        window.location.reload();
                    }
                    else {
                        //new page
                        // set lastSearch
                        window.localStorage.setItem('lastSearch', _this.state.currentPath); //set searchTerm
                        window.localStorage.setItem('searchTerm', _this.state.searchTerm);
                        // change the url
                        _this.props.history.push(_this.state.searchTerm);
                        // reload window
                        window.location.reload();
                    }
                }
            }
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSearch = _this.handleSearch.bind(_this);
        _this.state = {
            searchTerm: 'nothingSearched',
            search: false,
            currentPath: _this.props.location.pathname.substr(1)
        };
        return _this;
    }
    ;
    Search.prototype.handleChange = function (event) {
        //change state so we can reroute save searchTerm
        var searchingFor = event.target.value;
        this.setState({ searchTerm: searchingFor });
    };
    Search.prototype.shallFocus = function () {
        if (this.state.currentPath == '') {
            return true;
        }
        else {
            return false;
        }
    };
    Search.prototype.shallHaveDefault = function () {
        if (this.state.currentPath == '') {
            return '';
        }
        else {
            return this.state.currentPath;
        }
    };
    Search.prototype.render = function () {
        var _this = this;
        if (!this.state.search) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_themeContext__WEBPACK_IMPORTED_MODULE_2__["ThemeContext"].Consumer, null, function (_a) {
                var theme = _a.theme;
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", { onSubmit: _this.handleSearch, style: root(theme) },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "text", defaultValue: _this.shallHaveDefault(), name: "search", onChange: _this.handleChange, onSubmit: _this.handleChange, style: inputBar(theme), autoFocus: _this.shallFocus() }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { type: "submit", style: searchButton(theme) }, "S\u00F6k")));
            }));
        }
        ;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: this.state.searchTerm }));
    };
    ;
    return Search;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Search);
var root = function (theme) { return ({
    marginTop: '1em',
    marginBottom: '1em',
    display: 'flex',
    background: theme.background.primary + "B3",
    boxShadow: "0 0px 80px 15px " + theme.background.primary
}); };
var inputBar = function (theme) { return ({
    borderTopLeftRadius: '25px',
    borderBottomLeftRadius: '25px',
    padding: '5px',
    border: "solid 0.1em " + theme.background.secondary,
    fontWeight: 'bold',
    boxShadow: "0 0 15px -3px " + theme.foreground.darkened,
    cursor: 'pointer',
    outline: 'inherit',
    transition: 'all 100ms'
}); };
var searchButton = function (theme) { return ({
    borderTopRightRadius: '25px',
    borderBottomRightRadius: '25px',
    background: theme.background.primary,
    color: theme.foreground.primary,
    border: "solid 0.1em " + theme.background.secondary,
    padding: '0.5em 0.8em',
    fontWeight: 'bold',
    boxShadow: "0 0 15px -3px " + theme.foreground.darkened,
    cursor: 'pointer',
    outline: 'inherit',
    transition: 'all 100ms'
}); };


/***/ }),

/***/ "./src/components/viewContainer/viewContainer.tsx":
/*!********************************************************!*\
  !*** ./src/components/viewContainer/viewContainer.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spinner */ "./src/components/spinner.tsx");
/* harmony import */ var _masterView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./masterView */ "./src/components/viewContainer/masterView.tsx");
/* harmony import */ var _detailView_detailView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detailView/detailView */ "./src/components/viewContainer/detailView/detailView.tsx");





/** React function component */
function ViewContainer() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_spinner__WEBPACK_IMPORTED_MODULE_2__["default"], null) },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/", render: function () {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_masterView__WEBPACK_IMPORTED_MODULE_3__["default"], { isModalOpen: false, currentPath: '' });
                } }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { component: _detailView_detailView__WEBPACK_IMPORTED_MODULE_4__["default"] }))));
}


/***/ })

}]);
//# sourceMappingURL=layout.bundle.js.map