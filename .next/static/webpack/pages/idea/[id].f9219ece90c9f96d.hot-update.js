"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/idea/[id]",{

/***/ "./pages/idea/[id].tsx":
/*!*****************************!*\
  !*** ./pages/idea/[id].tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar __N_SSP = true;\nfunction Home(props) {\n    var _this = this;\n    console.log(props.ideas);\n    console.log(props.idea.idea_image);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().majorcontainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().side_bar),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().main_title),\n                        children: \"Serenidad\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thomasstubblefield/Sites/ideabook/pages/idea/[id].tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    props.ideas.map(function(idea, indexposition) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().ideanav),\n                            children: props.idea.id !== -1 ? idea(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"./\" + idea.id,\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().ideanav),\n                                children: idea.title\n                            }, indexposition, false, {\n                                fileName: \"/Users/thomasstubblefield/Sites/ideabook/pages/idea/[id].tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, _this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"./\" + idea.id,\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().ideanavactive),\n                                children: idea.title\n                            }, indexposition, false, {\n                                fileName: \"/Users/thomasstubblefield/Sites/ideabook/pages/idea/[id].tsx\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/thomasstubblefield/Sites/ideabook/pages/idea/[id].tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thomasstubblefield/Sites/ideabook/pages/idea/[id].tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().main_content),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().thumbnail),\n                        width: 496,\n                        height: 216,\n                        src: props.idea.idea_image.url\n                    }, void 0, false, {\n                        fileName: \"/Users/thomasstubblefield/Sites/ideabook/pages/idea/[id].tsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: props.idea.title\n                    }, void 0, false, {\n                        fileName: \"/Users/thomasstubblefield/Sites/ideabook/pages/idea/[id].tsx\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: props.idea.description\n                    }, void 0, false, {\n                        fileName: \"/Users/thomasstubblefield/Sites/ideabook/pages/idea/[id].tsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this),\n                    props.idea.question_and_answer.map(function(question, indexpositiontwo) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: question.question\n                                }, void 0, false, {\n                                    fileName: \"/Users/thomasstubblefield/Sites/ideabook/pages/idea/[id].tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: question.answer\n                                }, void 0, false, {\n                                    fileName: \"/Users/thomasstubblefield/Sites/ideabook/pages/idea/[id].tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/thomasstubblefield/Sites/ideabook/pages/idea/[id].tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thomasstubblefield/Sites/ideabook/pages/idea/[id].tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thomasstubblefield/Sites/ideabook/pages/idea/[id].tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pZGVhL1tpZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFOEI7QUFDbUI7O0FBaUJsQyxTQUFTRSxJQUFJLENBQUNDLEtBQVUsRUFBRTs7SUFDdkNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUNHLEtBQUssQ0FBQztJQUN4QkYsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQ0ksSUFBSSxDQUFDQyxVQUFVLENBQUM7SUFFbEMscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFVCwrRUFBcUI7OzBCQUNuQyw4REFBQ1EsS0FBRztnQkFBQ0MsU0FBUyxFQUFFVCx5RUFBZTs7a0NBQzdCLDhEQUFDWSxHQUFDO3dCQUFDQyxJQUFJLEVBQUUsR0FBRzt3QkFBRUosU0FBUyxFQUFFVCwyRUFBaUI7a0NBQUUsV0FBUzs7Ozs7NEJBQUk7b0JBQ3hERSxLQUFLLENBQUNHLEtBQUssQ0FBQ1UsR0FBRyxDQUFDLFNBQUNULElBQVMsRUFBRVUsYUFBa0IsRUFBSzt3QkFDbEQscUJBQ0EsOERBQUNSLEtBQUc7NEJBQUNDLFNBQVMsRUFBRVQsd0VBQWM7c0NBQzNCRSxLQUFLLENBQUNJLElBQUksQ0FBQ1ksRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHWixJQUFJLGVBQzVCLDhEQUFDTSxHQUFDO2dDQUFDQyxJQUFJLEVBQUUsSUFBSSxHQUFHUCxJQUFJLENBQUNZLEVBQUU7Z0NBQUVULFNBQVMsRUFBRVQsd0VBQWM7MENBQXVCTSxJQUFJLENBQUNhLEtBQUs7K0JBQTFCSCxhQUFhOzs7O3FDQUFrQixDQUFFLGlCQUN4Riw4REFBQ0osR0FBQztnQ0FBQ0MsSUFBSSxFQUFFLElBQUksR0FBR1AsSUFBSSxDQUFDWSxFQUFFO2dDQUFFVCxTQUFTLEVBQUVULDhFQUFvQjswQ0FBdUJNLElBQUksQ0FBQ2EsS0FBSzsrQkFBMUJILGFBQWE7Ozs7cUNBQWtCOzs7OztpQ0FDNUYsQ0FDUDtxQkFBQyxDQUFDOzs7Ozs7b0JBQ0c7MEJBQ1IsOERBQUNSLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRVQsNkVBQW1COztrQ0FDN0IsOERBQUNELG1EQUFLO3dCQUFDVSxTQUFTLEVBQUVULDBFQUFnQjt3QkFBRXVCLEtBQUssRUFBRSxHQUFHO3dCQUFFQyxNQUFNLEVBQUUsR0FBRzt3QkFBRUMsR0FBRyxFQUFFdkIsS0FBSyxDQUFDSSxJQUFJLENBQUNDLFVBQVUsQ0FBQ21CLEdBQUc7Ozs7OzRCQUFVO2tDQUNyRyw4REFBQ0MsR0FBQztrQ0FDR3pCLEtBQUssQ0FBQ0ksSUFBSSxDQUFDYSxLQUFLOzs7Ozs0QkFDakI7a0NBQ0osOERBQUNRLEdBQUM7a0NBQ0N6QixLQUFLLENBQUNJLElBQUksQ0FBQ3NCLFdBQVc7Ozs7OzRCQUNyQjtvQkFFSDFCLEtBQUssQ0FBQ0ksSUFBSSxDQUFDdUIsbUJBQW1CLENBQUNkLEdBQUcsQ0FBQyxTQUFDZSxRQUFhLEVBQUVDLGdCQUFxQixFQUFLO3dCQUNoRixxQkFDQSw4REFBQ3ZCLEtBQUc7OzhDQUNGLDhEQUFDbUIsR0FBQzs4Q0FBRUcsUUFBUSxDQUFDQSxRQUFROzs7Ozt5Q0FBSzs4Q0FDMUIsOERBQUNILEdBQUM7OENBQUVHLFFBQVEsQ0FBQ0UsTUFBTTs7Ozs7eUNBQUs7Ozs7OztpQ0FDcEIsQ0FDUDtxQkFBQyxDQUFDOzs7Ozs7b0JBRUM7Ozs7OztZQUVGLENBQ1A7Q0FDRjtBQXRDdUIvQixLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2lkZWEvW2lkXS50c3g/NWM5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IEdyZXkgZnJvbSAnLi4vLi4vYXNzZXRzL3NlcmVuaWRhZF9ncmV5LnBuZydcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQ6IGFueSkge1xuICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnBhcmFtcztcblxuICBjb25zdCBpZGVhcyA9IGF3YWl0IGZldGNoKFxuICAgIFwiaHR0cHM6Ly9kZXYuY3JlYXRlZm9yZXZlci5tZWRpYS9hcGk6bDM2dHVaa24vaWRlYXNcIlxuICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgY29uc3QgaWRlYSA9IGF3YWl0IGZldGNoKFxuICAgIFwiaHR0cHM6Ly9kZXYuY3JlYXRlZm9yZXZlci5tZWRpYS9hcGk6bDM2dHVaa24vaWRlYXMvXCIgKyBpZFxuICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgcmV0dXJuIHsgcHJvcHM6IHsgaWRlYSwgaWRlYXMgfSB9O1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wczogYW55KSB7XG4gIGNvbnNvbGUubG9nKHByb3BzLmlkZWFzKVxuICBjb25zb2xlLmxvZyhwcm9wcy5pZGVhLmlkZWFfaW1hZ2UpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1ham9yY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZV9iYXJ9PlxuICAgICAgICA8YSBocmVmPXtcIi9cIn0gY2xhc3NOYW1lPXtzdHlsZXMubWFpbl90aXRsZX0+U2VyZW5pZGFkPC9hPlxuICAgICAgICB7cHJvcHMuaWRlYXMubWFwKChpZGVhOiBhbnksIGluZGV4cG9zaXRpb246IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pZGVhbmF2fT5cbiAgICAgICAgICAgIHtwcm9wcy5pZGVhLmlkICE9PSAtMSA/IGlkZWEgKFxuICAgICAgICAgICAgPGEgaHJlZj17XCIuL1wiICsgaWRlYS5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuaWRlYW5hdn0ga2V5PXtpbmRleHBvc2l0aW9ufT57aWRlYS50aXRsZX08L2E+ICkgOiBcbiAgICAgICAgICAgICggPGEgaHJlZj17XCIuL1wiICsgaWRlYS5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuaWRlYW5hdmFjdGl2ZX0ga2V5PXtpbmRleHBvc2l0aW9ufT57aWRlYS50aXRsZX08L2E+ICkgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluX2NvbnRlbnR9PlxuICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVzLnRodW1ibmFpbH0gd2lkdGg9ezQ5Nn0gaGVpZ2h0PXsyMTZ9IHNyYz17cHJvcHMuaWRlYS5pZGVhX2ltYWdlLnVybH0+PC9JbWFnZT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5pZGVhLnRpdGxlfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHtwcm9wcy5pZGVhLmRlc2NyaXB0aW9ufSBcbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAge3Byb3BzLmlkZWEucXVlc3Rpb25fYW5kX2Fuc3dlci5tYXAoKHF1ZXN0aW9uOiBhbnksIGluZGV4cG9zaXRpb250d286IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPntxdWVzdGlvbi5xdWVzdGlvbn08L3A+XG4gICAgICAgICAgICA8cD57cXVlc3Rpb24uYW5zd2VyfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX0pfVxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJzdHlsZXMiLCJIb21lIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiaWRlYXMiLCJpZGVhIiwiaWRlYV9pbWFnZSIsImRpdiIsImNsYXNzTmFtZSIsIm1ham9yY29udGFpbmVyIiwic2lkZV9iYXIiLCJhIiwiaHJlZiIsIm1haW5fdGl0bGUiLCJtYXAiLCJpbmRleHBvc2l0aW9uIiwiaWRlYW5hdiIsImlkIiwidGl0bGUiLCJpZGVhbmF2YWN0aXZlIiwibWFpbl9jb250ZW50IiwidGh1bWJuYWlsIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJ1cmwiLCJwIiwiZGVzY3JpcHRpb24iLCJxdWVzdGlvbl9hbmRfYW5zd2VyIiwicXVlc3Rpb24iLCJpbmRleHBvc2l0aW9udHdvIiwiYW5zd2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/idea/[id].tsx\n");

/***/ })

});