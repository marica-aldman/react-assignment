(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masterView"],{

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
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ "./src/components/viewContainer/search.tsx");
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
/** React function component */
var MasterView = /** @class */ (function (_super) {
    __extends(MasterView, _super);
    function MasterView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* return (
        <div style={container}>
            {props.detailViews.map((view) => (
                <ViewSection key={view}>
                    <ImageLink view={view} />
                </ViewSection>
            ))}
        </div>
    ); */
    MasterView.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_search__WEBPACK_IMPORTED_MODULE_1__["default"], null)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)));
    };
    ;
    return MasterView;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
/* harmony default export */ __webpack_exports__["default"] = (MasterView);
;
var container = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '1em'
};


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
            //change state so we can reroute and save searchTerm in localstorage
            _this.setState({ search: true });
            localStorage.setItem('searchTerm', _this.state.searchTerm);
            // change the url
            _this.props.history.push(_this.state.searchTerm);
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSearch = _this.handleSearch.bind(_this);
        _this.state = {
            searchTerm: '',
            search: false
        };
        return _this;
    }
    ;
    Search.prototype.handleChange = function (event) {
        //change state so we can reroute save searchTerm
        var searchingFor = "/" + event.target.value;
        this.setState({ searchTerm: searchingFor });
        console.log(event.target.value);
        console.log(this.state.searchTerm);
    };
    Search.prototype.render = function () {
        if (!this.state.search) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", { onSubmit: this.handleSearch },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "text", name: "search", onChange: this.handleChange }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { type: "submit" }, "S\u00F6k")));
        }
        ;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: this.state.searchTerm }));
    };
    ;
    return Search;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Search);


/***/ })

}]);
//# sourceMappingURL=masterView.bundle.js.map