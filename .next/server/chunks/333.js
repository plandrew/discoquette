exports.id = 333;
exports.ids = [333];
exports.modules = {

/***/ 579:
/***/ ((module) => {

// Exports
module.exports = {
	"searchresults": "Searchresults_searchresults__oknmJ"
};


/***/ }),

/***/ 172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Searchresults: () => (/* binding */ Searchresults),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var _Track_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(518);
/* harmony import */ var _styles_Searchresults_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(579);
/* harmony import */ var _styles_Searchresults_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Searchresults_module_css__WEBPACK_IMPORTED_MODULE_2__);



function Searchresults(props) {
    const { tracks } = props;
    const { addOrRemoveFromPlaylist } = props;
    if (!tracks) {
        // Render a loading spinner or a message here
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading..."
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Results"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("datalist", {
                className: (_styles_Searchresults_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchresults),
                "aria-role": "",
                children: tracks.map((track)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Track_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        track: track,
                        addOrRemoveFromPlaylist: addOrRemoveFromPlaylist
                    }))
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Searchresults);


/***/ })

};
;