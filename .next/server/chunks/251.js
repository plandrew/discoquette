exports.id = 251;
exports.ids = [251];
exports.modules = {

/***/ 541:
/***/ ((module) => {

// Exports
module.exports = {
	"searchbar": "Searchbar_searchbar__nbjdF"
};


/***/ }),

/***/ 904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Searchbar: () => (/* binding */ Searchbar),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Searchbar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(541);
/* harmony import */ var _styles_Searchbar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Searchbar_module_css__WEBPACK_IMPORTED_MODULE_2__);



function Searchbar(props) {
    const [artist, setArtist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { getTracks } = props;
    function handleArtistChange(event) {
        setArtist(event.target.value);
    }
    const handleClick = (event)=>{
        event.preventDefault();
        if (artist !== undefined) {
            getTracks(artist);
        }
        setArtist();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: (_styles_Searchbar_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchbar),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                role: "searchbox",
                id: "artist",
                value: artist,
                onChange: handleArtistChange,
                placeholder: "Search by an artist",
                className: (_styles_Searchbar_module_css__WEBPACK_IMPORTED_MODULE_2___default().search)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "submit",
                onClick: handleClick,
                children: "Search"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Searchbar);


/***/ })

};
;