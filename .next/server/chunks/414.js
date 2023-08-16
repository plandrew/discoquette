exports.id = 414;
exports.ids = [414];
exports.modules = {

/***/ 747:
/***/ ((module) => {

// Exports
module.exports = {
	"p": "Track_p__WC7zj",
	"li": "Track_li__KGX7Q",
	"h4": "Track_h4__eVzzh"
};


/***/ }),

/***/ 518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var _styles_Track_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(747);
/* harmony import */ var _styles_Track_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Track_module_css__WEBPACK_IMPORTED_MODULE_1__);


function Track(props) {
    const { addOrRemoveFromPlaylist } = props;
    const { track } = props;
    const handleAddClick = ()=>{
        addOrRemoveFromPlaylist(track.id);
    };
    if (!track) {
        // Render a loading spinner or a message here
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading..."
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        className: (_styles_Track_module_css__WEBPACK_IMPORTED_MODULE_1___default().li),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: (_styles_Track_module_css__WEBPACK_IMPORTED_MODULE_1___default().h4),
                        "aria-label": "Track Name",
                        children: track.name.split(" (")[0]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_styles_Track_module_css__WEBPACK_IMPORTED_MODULE_1___default().p),
                        "aria-label": "Album Name",
                        children: track.album.name.split(" (")[0]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: handleAddClick,
                children: "+|-"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Track);


/***/ }),

/***/ 4:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);


function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    });
}


/***/ }),

/***/ 764:
/***/ (() => {



/***/ })

};
;