"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/verify-otp/route";
exports.ids = ["app/api/auth/verify-otp/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fverify-otp%2Froute&page=%2Fapi%2Fauth%2Fverify-otp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fverify-otp%2Froute.ts&appDir=C%3A%5CUsers%5CJyotish%5CDesktop%5CCarrer-1%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CJyotish%5CDesktop%5CCarrer-1&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fverify-otp%2Froute&page=%2Fapi%2Fauth%2Fverify-otp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fverify-otp%2Froute.ts&appDir=C%3A%5CUsers%5CJyotish%5CDesktop%5CCarrer-1%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CJyotish%5CDesktop%5CCarrer-1&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Jyotish_Desktop_Carrer_1_app_api_auth_verify_otp_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/verify-otp/route.ts */ \"(rsc)/./app/api/auth/verify-otp/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/verify-otp/route\",\n        pathname: \"/api/auth/verify-otp\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/verify-otp/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Jyotish\\\\Desktop\\\\Carrer-1\\\\app\\\\api\\\\auth\\\\verify-otp\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Jyotish_Desktop_Carrer_1_app_api_auth_verify_otp_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/verify-otp/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGdmVyaWZ5LW90cCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYXV0aCUyRnZlcmlmeS1vdHAlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhdXRoJTJGdmVyaWZ5LW90cCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNKeW90aXNoJTVDRGVza3RvcCU1Q0NhcnJlci0xJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNKeW90aXNoJTVDRGVza3RvcCU1Q0NhcnJlci0xJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzJCO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVzaWduLXNwYXJrLXdlYnNpdGUtY3JhZnQvPzc1ZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcSnlvdGlzaFxcXFxEZXNrdG9wXFxcXENhcnJlci0xXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFx2ZXJpZnktb3RwXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL3ZlcmlmeS1vdHAvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL3ZlcmlmeS1vdHBcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvdmVyaWZ5LW90cC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXEp5b3Rpc2hcXFxcRGVza3RvcFxcXFxDYXJyZXItMVxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcdmVyaWZ5LW90cFxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL3ZlcmlmeS1vdHAvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fverify-otp%2Froute&page=%2Fapi%2Fauth%2Fverify-otp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fverify-otp%2Froute.ts&appDir=C%3A%5CUsers%5CJyotish%5CDesktop%5CCarrer-1%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CJyotish%5CDesktop%5CCarrer-1&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/verify-otp/route.ts":
/*!******************************************!*\
  !*** ./app/api/auth/verify-otp/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _app_utils_otp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/utils/otp */ \"(rsc)/./app/utils/otp.ts\");\n/* harmony import */ var _app_utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/utils/db */ \"(rsc)/./app/utils/db.ts\");\n\n\n\nasync function POST(req) {\n    try {\n        const { email, otp, password, userType } = await req.json();\n        if (!email || !otp || !password || !userType) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Email, OTP, password, and user type are required\"\n            }, {\n                status: 400\n            });\n        }\n        // Verify OTP\n        const isValid = (0,_app_utils_otp__WEBPACK_IMPORTED_MODULE_1__.verifyOTP)(email, otp);\n        if (!isValid) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Invalid or expired OTP\"\n            }, {\n                status: 400\n            });\n        }\n        // Check if user already exists\n        const existingUser = (0,_app_utils_db__WEBPACK_IMPORTED_MODULE_2__.getUser)(email);\n        if (existingUser) {\n            // If user exists, just verify them\n            (0,_app_utils_db__WEBPACK_IMPORTED_MODULE_2__.verifyUser)(email);\n        } else {\n            // Create and verify new user\n            (0,_app_utils_db__WEBPACK_IMPORTED_MODULE_2__.createUser)(email, password, userType);\n            (0,_app_utils_db__WEBPACK_IMPORTED_MODULE_2__.verifyUser)(email);\n        }\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            message: \"OTP verified successfully\",\n            verified: true\n        });\n    } catch (error) {\n        console.error(\"Error in verify OTP:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvdmVyaWZ5LW90cC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBQ0M7QUFDcUI7QUFFMUQsZUFBZUssS0FBS0MsR0FBWTtJQUNyQyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLEdBQUcsRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUUsR0FBRyxNQUFNSixJQUFJSyxJQUFJO1FBRXpELElBQUksQ0FBQ0osU0FBUyxDQUFDQyxPQUFPLENBQUNDLFlBQVksQ0FBQ0MsVUFBVTtZQUM1QyxPQUFPVixrRkFBWUEsQ0FBQ1csSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUFtRCxHQUM1RDtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsYUFBYTtRQUNiLE1BQU1DLFVBQVViLHlEQUFTQSxDQUFDTSxPQUFPQztRQUVqQyxJQUFJLENBQUNNLFNBQVM7WUFDWixPQUFPZCxrRkFBWUEsQ0FBQ1csSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUF5QixHQUNsQztnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsK0JBQStCO1FBQy9CLE1BQU1FLGVBQWVYLHNEQUFPQSxDQUFDRztRQUU3QixJQUFJUSxjQUFjO1lBQ2hCLG1DQUFtQztZQUNuQ1oseURBQVVBLENBQUNJO1FBQ2IsT0FBTztZQUNMLDZCQUE2QjtZQUM3QkwseURBQVVBLENBQUNLLE9BQU9FLFVBQVVDO1lBQzVCUCx5REFBVUEsQ0FBQ0k7UUFDYjtRQUVBLE9BQU9QLGtGQUFZQSxDQUFDVyxJQUFJLENBQUM7WUFDdkJLLFNBQVM7WUFDVEMsVUFBVTtRQUNaO0lBQ0YsRUFBRSxPQUFPTCxPQUFPO1FBQ2RNLFFBQVFOLEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3RDLE9BQU9aLGtGQUFZQSxDQUFDVyxJQUFJLENBQ3RCO1lBQUVDLE9BQU87UUFBd0IsR0FDakM7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tc3Bhcmstd2Vic2l0ZS1jcmFmdC8uL2FwcC9hcGkvYXV0aC92ZXJpZnktb3RwL3JvdXRlLnRzPzFiZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgeyB2ZXJpZnlPVFAgfSBmcm9tICdAL2FwcC91dGlscy9vdHAnO1xyXG5pbXBvcnQgeyBjcmVhdGVVc2VyLCB2ZXJpZnlVc2VyLCBnZXRVc2VyIH0gZnJvbSAnQC9hcHAvdXRpbHMvZGInO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZW1haWwsIG90cCwgcGFzc3dvcmQsIHVzZXJUeXBlIH0gPSBhd2FpdCByZXEuanNvbigpO1xyXG5cclxuICAgIGlmICghZW1haWwgfHwgIW90cCB8fCAhcGFzc3dvcmQgfHwgIXVzZXJUeXBlKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiAnRW1haWwsIE9UUCwgcGFzc3dvcmQsIGFuZCB1c2VyIHR5cGUgYXJlIHJlcXVpcmVkJyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZlcmlmeSBPVFBcclxuICAgIGNvbnN0IGlzVmFsaWQgPSB2ZXJpZnlPVFAoZW1haWwsIG90cCk7XHJcblxyXG4gICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiAnSW52YWxpZCBvciBleHBpcmVkIE9UUCcgfSxcclxuICAgICAgICB7IHN0YXR1czogNDAwIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBpZiB1c2VyIGFscmVhZHkgZXhpc3RzXHJcbiAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBnZXRVc2VyKGVtYWlsKTtcclxuICAgIFxyXG4gICAgaWYgKGV4aXN0aW5nVXNlcikge1xyXG4gICAgICAvLyBJZiB1c2VyIGV4aXN0cywganVzdCB2ZXJpZnkgdGhlbVxyXG4gICAgICB2ZXJpZnlVc2VyKGVtYWlsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIENyZWF0ZSBhbmQgdmVyaWZ5IG5ldyB1c2VyXHJcbiAgICAgIGNyZWF0ZVVzZXIoZW1haWwsIHBhc3N3b3JkLCB1c2VyVHlwZSk7XHJcbiAgICAgIHZlcmlmeVVzZXIoZW1haWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IFxyXG4gICAgICBtZXNzYWdlOiAnT1RQIHZlcmlmaWVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgIHZlcmlmaWVkOiB0cnVlXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdmVyaWZ5IE9UUDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgZXJyb3I6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKTtcclxuICB9XHJcbn0gIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInZlcmlmeU9UUCIsImNyZWF0ZVVzZXIiLCJ2ZXJpZnlVc2VyIiwiZ2V0VXNlciIsIlBPU1QiLCJyZXEiLCJlbWFpbCIsIm90cCIsInBhc3N3b3JkIiwidXNlclR5cGUiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJpc1ZhbGlkIiwiZXhpc3RpbmdVc2VyIiwibWVzc2FnZSIsInZlcmlmaWVkIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/verify-otp/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/utils/db.ts":
/*!*************************!*\
  !*** ./app/utils/db.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createUser: () => (/* binding */ createUser),\n/* harmony export */   emailExists: () => (/* binding */ emailExists),\n/* harmony export */   emailExistsForUserType: () => (/* binding */ emailExistsForUserType),\n/* harmony export */   getUser: () => (/* binding */ getUser),\n/* harmony export */   isUserVerified: () => (/* binding */ isUserVerified),\n/* harmony export */   validateLogin: () => (/* binding */ validateLogin),\n/* harmony export */   verifyUser: () => (/* binding */ verifyUser)\n/* harmony export */ });\n// This is a simple in-memory database for demonstration\n// In production, use a real database like MongoDB, PostgreSQL, etc.\n// In-memory database\nconst users = new Map();\n// Check if email exists\nfunction emailExists(email) {\n    return users.has(email);\n}\n// Check if email exists for specific user type\nfunction emailExistsForUserType(email, userType) {\n    const user = users.get(email);\n    return user !== undefined && user.userType === userType;\n}\n// Create new user\nfunction createUser(email, password, userType) {\n    users.set(email, {\n        email,\n        password,\n        userType,\n        isVerified: false\n    });\n}\n// Verify user\nfunction verifyUser(email) {\n    const user = users.get(email);\n    if (user) {\n        user.isVerified = true;\n    }\n}\n// Get user\nfunction getUser(email) {\n    return users.get(email);\n}\n// Check if user is verified\nfunction isUserVerified(email) {\n    const user = users.get(email);\n    return user !== undefined && user.isVerified;\n}\n// Validate login\nfunction validateLogin(email, password, userType) {\n    const user = users.get(email);\n    return user !== undefined && user.password === password && user.userType === userType && user.isVerified;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvdXRpbHMvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHdEQUF3RDtBQUN4RCxvRUFBb0U7QUFTcEUscUJBQXFCO0FBQ3JCLE1BQU1BLFFBQVEsSUFBSUM7QUFFbEIsd0JBQXdCO0FBQ2pCLFNBQVNDLFlBQVlDLEtBQWE7SUFDdkMsT0FBT0gsTUFBTUksR0FBRyxDQUFDRDtBQUNuQjtBQUVBLCtDQUErQztBQUN4QyxTQUFTRSx1QkFBdUJGLEtBQWEsRUFBRUcsUUFBaUM7SUFDckYsTUFBTUMsT0FBT1AsTUFBTVEsR0FBRyxDQUFDTDtJQUN2QixPQUFPSSxTQUFTRSxhQUFhRixLQUFLRCxRQUFRLEtBQUtBO0FBQ2pEO0FBRUEsa0JBQWtCO0FBQ1gsU0FBU0ksV0FBV1AsS0FBYSxFQUFFUSxRQUFnQixFQUFFTCxRQUFpQztJQUMzRk4sTUFBTVksR0FBRyxDQUFDVCxPQUFPO1FBQ2ZBO1FBQ0FRO1FBQ0FMO1FBQ0FPLFlBQVk7SUFDZDtBQUNGO0FBRUEsY0FBYztBQUNQLFNBQVNDLFdBQVdYLEtBQWE7SUFDdEMsTUFBTUksT0FBT1AsTUFBTVEsR0FBRyxDQUFDTDtJQUN2QixJQUFJSSxNQUFNO1FBQ1JBLEtBQUtNLFVBQVUsR0FBRztJQUNwQjtBQUNGO0FBRUEsV0FBVztBQUNKLFNBQVNFLFFBQVFaLEtBQWE7SUFDbkMsT0FBT0gsTUFBTVEsR0FBRyxDQUFDTDtBQUNuQjtBQUVBLDRCQUE0QjtBQUNyQixTQUFTYSxlQUFlYixLQUFhO0lBQzFDLE1BQU1JLE9BQU9QLE1BQU1RLEdBQUcsQ0FBQ0w7SUFDdkIsT0FBT0ksU0FBU0UsYUFBYUYsS0FBS00sVUFBVTtBQUM5QztBQUVBLGlCQUFpQjtBQUNWLFNBQVNJLGNBQWNkLEtBQWEsRUFBRVEsUUFBZ0IsRUFBRUwsUUFBaUM7SUFDOUYsTUFBTUMsT0FBT1AsTUFBTVEsR0FBRyxDQUFDTDtJQUN2QixPQUFPSSxTQUFTRSxhQUNURixLQUFLSSxRQUFRLEtBQUtBLFlBQ2xCSixLQUFLRCxRQUFRLEtBQUtBLFlBQ2xCQyxLQUFLTSxVQUFVO0FBQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVzaWduLXNwYXJrLXdlYnNpdGUtY3JhZnQvLi9hcHAvdXRpbHMvZGIudHM/NTU2MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGlzIGEgc2ltcGxlIGluLW1lbW9yeSBkYXRhYmFzZSBmb3IgZGVtb25zdHJhdGlvblxyXG4vLyBJbiBwcm9kdWN0aW9uLCB1c2UgYSByZWFsIGRhdGFiYXNlIGxpa2UgTW9uZ29EQiwgUG9zdGdyZVNRTCwgZXRjLlxyXG5cclxuaW50ZXJmYWNlIFVzZXIge1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxuICB1c2VyVHlwZTogJ3N0dWRlbnQnIHwgJ2NvdW5zZWxvcic7XHJcbiAgaXNWZXJpZmllZDogYm9vbGVhbjtcclxufVxyXG5cclxuLy8gSW4tbWVtb3J5IGRhdGFiYXNlXHJcbmNvbnN0IHVzZXJzID0gbmV3IE1hcDxzdHJpbmcsIFVzZXI+KCk7XHJcblxyXG4vLyBDaGVjayBpZiBlbWFpbCBleGlzdHNcclxuZXhwb3J0IGZ1bmN0aW9uIGVtYWlsRXhpc3RzKGVtYWlsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICByZXR1cm4gdXNlcnMuaGFzKGVtYWlsKTtcclxufVxyXG5cclxuLy8gQ2hlY2sgaWYgZW1haWwgZXhpc3RzIGZvciBzcGVjaWZpYyB1c2VyIHR5cGVcclxuZXhwb3J0IGZ1bmN0aW9uIGVtYWlsRXhpc3RzRm9yVXNlclR5cGUoZW1haWw6IHN0cmluZywgdXNlclR5cGU6ICdzdHVkZW50JyB8ICdjb3Vuc2Vsb3InKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgdXNlciA9IHVzZXJzLmdldChlbWFpbCk7XHJcbiAgcmV0dXJuIHVzZXIgIT09IHVuZGVmaW5lZCAmJiB1c2VyLnVzZXJUeXBlID09PSB1c2VyVHlwZTtcclxufVxyXG5cclxuLy8gQ3JlYXRlIG5ldyB1c2VyXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVc2VyKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIHVzZXJUeXBlOiAnc3R1ZGVudCcgfCAnY291bnNlbG9yJyk6IHZvaWQge1xyXG4gIHVzZXJzLnNldChlbWFpbCwge1xyXG4gICAgZW1haWwsXHJcbiAgICBwYXNzd29yZCxcclxuICAgIHVzZXJUeXBlLFxyXG4gICAgaXNWZXJpZmllZDogZmFsc2UsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIFZlcmlmeSB1c2VyXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlVc2VyKGVtYWlsOiBzdHJpbmcpOiB2b2lkIHtcclxuICBjb25zdCB1c2VyID0gdXNlcnMuZ2V0KGVtYWlsKTtcclxuICBpZiAodXNlcikge1xyXG4gICAgdXNlci5pc1ZlcmlmaWVkID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEdldCB1c2VyXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyKGVtYWlsOiBzdHJpbmcpOiBVc2VyIHwgdW5kZWZpbmVkIHtcclxuICByZXR1cm4gdXNlcnMuZ2V0KGVtYWlsKTtcclxufVxyXG5cclxuLy8gQ2hlY2sgaWYgdXNlciBpcyB2ZXJpZmllZFxyXG5leHBvcnQgZnVuY3Rpb24gaXNVc2VyVmVyaWZpZWQoZW1haWw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IHVzZXIgPSB1c2Vycy5nZXQoZW1haWwpO1xyXG4gIHJldHVybiB1c2VyICE9PSB1bmRlZmluZWQgJiYgdXNlci5pc1ZlcmlmaWVkO1xyXG59XHJcblxyXG4vLyBWYWxpZGF0ZSBsb2dpblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVMb2dpbihlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCB1c2VyVHlwZTogJ3N0dWRlbnQnIHwgJ2NvdW5zZWxvcicpOiBib29sZWFuIHtcclxuICBjb25zdCB1c2VyID0gdXNlcnMuZ2V0KGVtYWlsKTtcclxuICByZXR1cm4gdXNlciAhPT0gdW5kZWZpbmVkICYmIFxyXG4gICAgICAgICB1c2VyLnBhc3N3b3JkID09PSBwYXNzd29yZCAmJiBcclxuICAgICAgICAgdXNlci51c2VyVHlwZSA9PT0gdXNlclR5cGUgJiYgXHJcbiAgICAgICAgIHVzZXIuaXNWZXJpZmllZDtcclxufSAiXSwibmFtZXMiOlsidXNlcnMiLCJNYXAiLCJlbWFpbEV4aXN0cyIsImVtYWlsIiwiaGFzIiwiZW1haWxFeGlzdHNGb3JVc2VyVHlwZSIsInVzZXJUeXBlIiwidXNlciIsImdldCIsInVuZGVmaW5lZCIsImNyZWF0ZVVzZXIiLCJwYXNzd29yZCIsInNldCIsImlzVmVyaWZpZWQiLCJ2ZXJpZnlVc2VyIiwiZ2V0VXNlciIsImlzVXNlclZlcmlmaWVkIiwidmFsaWRhdGVMb2dpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/utils/db.ts\n");

/***/ }),

/***/ "(rsc)/./app/utils/otp.ts":
/*!**************************!*\
  !*** ./app/utils/otp.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateOTP: () => (/* binding */ generateOTP),\n/* harmony export */   sendOTP: () => (/* binding */ sendOTP),\n/* harmony export */   storeOTP: () => (/* binding */ storeOTP),\n/* harmony export */   verifyOTP: () => (/* binding */ verifyOTP)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\n// Store OTPs temporarily (in production, use a database)\nconst otpStore = new Map();\n// Create transporter for sending emails\nconst transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0__.createTransport({\n    host: \"smtp.gmail.com\",\n    port: 587,\n    secure: false,\n    auth: {\n        user: process.env.EMAIL_USER,\n        pass: process.env.EMAIL_PASSWORD\n    }\n});\n// Generate a 6-digit OTP\nfunction generateOTP() {\n    return Math.floor(100000 + Math.random() * 900000).toString();\n}\n// Store OTP with timestamp\nfunction storeOTP(email, otp) {\n    otpStore.set(email, {\n        otp,\n        timestamp: Date.now()\n    });\n}\n// Verify OTP\nfunction verifyOTP(email, otp) {\n    const storedData = otpStore.get(email);\n    if (!storedData) return false;\n    // Check if OTP is expired (5 minutes)\n    if (Date.now() - storedData.timestamp > 5 * 60 * 1000) {\n        otpStore.delete(email);\n        return false;\n    }\n    // Check if OTP matches\n    if (storedData.otp === otp) {\n        otpStore.delete(email);\n        return true;\n    }\n    return false;\n}\n// Send OTP via email\nasync function sendOTP(email, otp) {\n    try {\n        const mailOptions = {\n            from: process.env.EMAIL_USER,\n            to: email,\n            subject: \"Your OTP for Career Counseling Platform\",\n            html: `\r\n        <h1>OTP Verification</h1>\r\n        <p>Your OTP for registration is: <strong>${otp}</strong></p>\r\n        <p>This OTP will expire in 5 minutes.</p>\r\n        <p>If you didn't request this OTP, please ignore this email.</p>\r\n      `\n        };\n        await transporter.sendMail(mailOptions);\n        return true;\n    } catch (error) {\n        console.error(\"Error sending OTP:\", error);\n        return false;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvdXRpbHMvb3RwLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9DO0FBRXBDLHlEQUF5RDtBQUN6RCxNQUFNQyxXQUFXLElBQUlDO0FBRXJCLHdDQUF3QztBQUN4QyxNQUFNQyxjQUFjSCx1REFBMEIsQ0FBQztJQUM3Q0ssTUFBTTtJQUNOQyxNQUFNO0lBQ05DLFFBQVE7SUFDUkMsTUFBTTtRQUNKQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7UUFDNUJDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csY0FBYztJQUNsQztBQUNGO0FBRUEseUJBQXlCO0FBQ2xCLFNBQVNDO0lBQ2QsT0FBT0MsS0FBS0MsS0FBSyxDQUFDLFNBQVNELEtBQUtFLE1BQU0sS0FBSyxRQUFRQyxRQUFRO0FBQzdEO0FBRUEsMkJBQTJCO0FBQ3BCLFNBQVNDLFNBQVNDLEtBQWEsRUFBRUMsR0FBVztJQUNqRHJCLFNBQVNzQixHQUFHLENBQUNGLE9BQU87UUFDbEJDO1FBQ0FFLFdBQVdDLEtBQUtDLEdBQUc7SUFDckI7QUFDRjtBQUVBLGFBQWE7QUFDTixTQUFTQyxVQUFVTixLQUFhLEVBQUVDLEdBQVc7SUFDbEQsTUFBTU0sYUFBYTNCLFNBQVM0QixHQUFHLENBQUNSO0lBQ2hDLElBQUksQ0FBQ08sWUFBWSxPQUFPO0lBRXhCLHNDQUFzQztJQUN0QyxJQUFJSCxLQUFLQyxHQUFHLEtBQUtFLFdBQVdKLFNBQVMsR0FBRyxJQUFJLEtBQUssTUFBTTtRQUNyRHZCLFNBQVM2QixNQUFNLENBQUNUO1FBQ2hCLE9BQU87SUFDVDtJQUVBLHVCQUF1QjtJQUN2QixJQUFJTyxXQUFXTixHQUFHLEtBQUtBLEtBQUs7UUFDMUJyQixTQUFTNkIsTUFBTSxDQUFDVDtRQUNoQixPQUFPO0lBQ1Q7SUFFQSxPQUFPO0FBQ1Q7QUFFQSxxQkFBcUI7QUFDZCxlQUFlVSxRQUFRVixLQUFhLEVBQUVDLEdBQVc7SUFDdEQsSUFBSTtRQUNGLE1BQU1VLGNBQWM7WUFDbEJDLE1BQU12QixRQUFRQyxHQUFHLENBQUNDLFVBQVU7WUFDNUJzQixJQUFJYjtZQUNKYyxTQUFTO1lBQ1RDLE1BQU0sQ0FBQzs7aURBRW9DLEVBQUVkLElBQUk7OztNQUdqRCxDQUFDO1FBQ0g7UUFFQSxNQUFNbkIsWUFBWWtDLFFBQVEsQ0FBQ0w7UUFDM0IsT0FBTztJQUNULEVBQUUsT0FBT00sT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsc0JBQXNCQTtRQUNwQyxPQUFPO0lBQ1Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Rlc2lnbi1zcGFyay13ZWJzaXRlLWNyYWZ0Ly4vYXBwL3V0aWxzL290cC50cz8yYTQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInO1xyXG5cclxuLy8gU3RvcmUgT1RQcyB0ZW1wb3JhcmlseSAoaW4gcHJvZHVjdGlvbiwgdXNlIGEgZGF0YWJhc2UpXHJcbmNvbnN0IG90cFN0b3JlID0gbmV3IE1hcDxzdHJpbmcsIHsgb3RwOiBzdHJpbmc7IHRpbWVzdGFtcDogbnVtYmVyIH0+KCk7XHJcblxyXG4vLyBDcmVhdGUgdHJhbnNwb3J0ZXIgZm9yIHNlbmRpbmcgZW1haWxzXHJcbmNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gIGhvc3Q6ICdzbXRwLmdtYWlsLmNvbScsXHJcbiAgcG9ydDogNTg3LFxyXG4gIHNlY3VyZTogZmFsc2UsXHJcbiAgYXV0aDoge1xyXG4gICAgdXNlcjogcHJvY2Vzcy5lbnYuRU1BSUxfVVNFUixcclxuICAgIHBhc3M6IHByb2Nlc3MuZW52LkVNQUlMX1BBU1NXT1JELFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLy8gR2VuZXJhdGUgYSA2LWRpZ2l0IE9UUFxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVPVFAoKTogc3RyaW5nIHtcclxuICByZXR1cm4gTWF0aC5mbG9vcigxMDAwMDAgKyBNYXRoLnJhbmRvbSgpICogOTAwMDAwKS50b1N0cmluZygpO1xyXG59XHJcblxyXG4vLyBTdG9yZSBPVFAgd2l0aCB0aW1lc3RhbXBcclxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlT1RQKGVtYWlsOiBzdHJpbmcsIG90cDogc3RyaW5nKTogdm9pZCB7XHJcbiAgb3RwU3RvcmUuc2V0KGVtYWlsLCB7XHJcbiAgICBvdHAsXHJcbiAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIFZlcmlmeSBPVFBcclxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeU9UUChlbWFpbDogc3RyaW5nLCBvdHA6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IHN0b3JlZERhdGEgPSBvdHBTdG9yZS5nZXQoZW1haWwpO1xyXG4gIGlmICghc3RvcmVkRGF0YSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAvLyBDaGVjayBpZiBPVFAgaXMgZXhwaXJlZCAoNSBtaW51dGVzKVxyXG4gIGlmIChEYXRlLm5vdygpIC0gc3RvcmVkRGF0YS50aW1lc3RhbXAgPiA1ICogNjAgKiAxMDAwKSB7XHJcbiAgICBvdHBTdG9yZS5kZWxldGUoZW1haWwpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2sgaWYgT1RQIG1hdGNoZXNcclxuICBpZiAoc3RvcmVkRGF0YS5vdHAgPT09IG90cCkge1xyXG4gICAgb3RwU3RvcmUuZGVsZXRlKGVtYWlsKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vLyBTZW5kIE9UUCB2aWEgZW1haWxcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRPVFAoZW1haWw6IHN0cmluZywgb3RwOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbWFpbE9wdGlvbnMgPSB7XHJcbiAgICAgIGZyb206IHByb2Nlc3MuZW52LkVNQUlMX1VTRVIsXHJcbiAgICAgIHRvOiBlbWFpbCxcclxuICAgICAgc3ViamVjdDogJ1lvdXIgT1RQIGZvciBDYXJlZXIgQ291bnNlbGluZyBQbGF0Zm9ybScsXHJcbiAgICAgIGh0bWw6IGBcclxuICAgICAgICA8aDE+T1RQIFZlcmlmaWNhdGlvbjwvaDE+XHJcbiAgICAgICAgPHA+WW91ciBPVFAgZm9yIHJlZ2lzdHJhdGlvbiBpczogPHN0cm9uZz4ke290cH08L3N0cm9uZz48L3A+XHJcbiAgICAgICAgPHA+VGhpcyBPVFAgd2lsbCBleHBpcmUgaW4gNSBtaW51dGVzLjwvcD5cclxuICAgICAgICA8cD5JZiB5b3UgZGlkbid0IHJlcXVlc3QgdGhpcyBPVFAsIHBsZWFzZSBpZ25vcmUgdGhpcyBlbWFpbC48L3A+XHJcbiAgICAgIGAsXHJcbiAgICB9O1xyXG5cclxuICAgIGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzZW5kaW5nIE9UUDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59ICJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwib3RwU3RvcmUiLCJNYXAiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsImhvc3QiLCJwb3J0Iiwic2VjdXJlIiwiYXV0aCIsInVzZXIiLCJwcm9jZXNzIiwiZW52IiwiRU1BSUxfVVNFUiIsInBhc3MiLCJFTUFJTF9QQVNTV09SRCIsImdlbmVyYXRlT1RQIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdG9yZU9UUCIsImVtYWlsIiwib3RwIiwic2V0IiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsInZlcmlmeU9UUCIsInN0b3JlZERhdGEiLCJnZXQiLCJkZWxldGUiLCJzZW5kT1RQIiwibWFpbE9wdGlvbnMiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwiaHRtbCIsInNlbmRNYWlsIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/utils/otp.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fverify-otp%2Froute&page=%2Fapi%2Fauth%2Fverify-otp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fverify-otp%2Froute.ts&appDir=C%3A%5CUsers%5CJyotish%5CDesktop%5CCarrer-1%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CJyotish%5CDesktop%5CCarrer-1&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();