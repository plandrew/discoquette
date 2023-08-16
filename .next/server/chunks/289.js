exports.id = 289;
exports.ids = [289];
exports.modules = {

/***/ 499:
/***/ ((module) => {

// Exports
module.exports = {
	"playlist": "Playlist_playlist__n_kh5",
	"tracks": "Playlist_tracks__P_IyI"
};


/***/ }),

/***/ 289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Playlist: () => (/* binding */ Playlist),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var _styles_Playlist_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(499);
/* harmony import */ var _styles_Playlist_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Playlist_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Track_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(518);





function Playlist(props) {
    const [playlistName, setPlaylistName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { playlistTracks } = props;
    const { createPlaylist } = props;
    const handleClick = (event)=>{
        event.preventDefault();
        createPlaylist(playlistName);
    };
    if (!playlistTracks) {
        // Render a loading spinner or a message here
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading..."
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Playlist_module_css__WEBPACK_IMPORTED_MODULE_3___default().playlist),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Playlist"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "playlistName"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        id: "playlistName",
                        value: playlistName,
                        onChange: (e)=>setPlaylistName(e.target.value),
                        placeholder: "PlayList Name"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("datalist", {
                className: (_styles_Playlist_module_css__WEBPACK_IMPORTED_MODULE_3___default().tracks),
                children: playlistTracks.map((track)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Track_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        track: track,
                        addOrRemoveFromPlaylist: props.addOrRemoveFromPlaylist
                    }))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: handleClick,
                children: "SAVE TO SPOTIFT"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Playlist);


/***/ })

};
;