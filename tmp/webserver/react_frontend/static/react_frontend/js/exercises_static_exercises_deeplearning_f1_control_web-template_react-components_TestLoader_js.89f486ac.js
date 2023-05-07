(self["webpackChunkreact_frontend"] = self["webpackChunkreact_frontend"] || []).push([["exercises_static_exercises_deeplearning_f1_control_web-template_react-components_TestLoader_js"],{

/***/ "../exercises/static/exercises/deeplearning_f1_control/web-template/react-components/TestLoader.js":
/*!*********************************************************************************************************!*\
  !*** ../exercises/static/exercises/deeplearning_f1_control/web-template/react-components/TestLoader.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_TestLoader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/TestLoader.css */ "../exercises/static/exercises/deeplearning_f1_control/web-template/react-components/css/TestLoader.css");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var TestLoader = function TestLoader(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("idle"),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    waiting = _useState4[0],
    setWaiting = _useState4[1];
  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    "test-loader": true,
    "disabled": waiting
  });
  var spinnerClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    "lds-ring": true,
    "hidden": !waiting
  });
  var buttonClick = function buttonClick(event) {
    if (state === 'idle') {
      doConnect();
    } else if (state === 'connected') {
      doLaunch();
    } else if (state === 'ready') {
      doTerminate();
    }
  };
  var doConnect = function doConnect() {
    setWaiting(true);
    RoboticsExerciseComponents.commsManager.connect().then(function (message) {
      setState('connected');
    })["catch"](function (response) {})["finally"](function () {
      setWaiting(false);
    });
  };
  var doLaunch = function doLaunch() {
    setWaiting(true);
    var config = JSON.parse(document.getElementById("exercise-config").textContent);

    // Setting up circuit name into configuration
    config.application.params = {
      circuit: "default"
    };
    var launch_file = config.launch['0'].launch_file.interpolate({
      circuit: 'default'
    });
    config.launch['0'].launch_file = launch_file;
    RoboticsExerciseComponents.commsManager.launch(config).then(function (message) {
      setState('ready');
    })["catch"](function (response) {})["finally"](function () {
      setWaiting(false);
    });
  };
  var doTerminate = function doTerminate() {
    setWaiting(true);
    RoboticsExerciseComponents.commsManager.terminate().then(function (message) {
      setState('connected');
    })["catch"](function (response) {})["finally"](function () {
      setWaiting(false);
    });
  };
  var buttonText = function buttonText() {
    if (state === 'idle') {
      return "Connect";
    } else if (state === 'connected') {
      return "Launch";
    } else if (state === 'ready') {
      return "Terminate";
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: 'parent-block',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: classes,
      onClick: buttonClick,
      children: buttonText()
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: spinnerClasses,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {})]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestLoader);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "../exercises/static/exercises/deeplearning_f1_control/web-template/react-components/css/TestLoader.css":
/*!**************************************************************************************************************!*\
  !*** ../exercises/static/exercises/deeplearning_f1_control/web-template/react-components/css/TestLoader.css ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvZXhlcmNpc2VzX3N0YXRpY19leGVyY2lzZXNfZGVlcGxlYXJuaW5nX2YxX2NvbnRyb2xfd2ViLXRlbXBsYXRlX3JlYWN0LWNvbXBvbmVudHNfVGVzdExvYWRlcl9qcy44OWY0ODZhYy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBRVo7QUFDTztBQUFBO0FBQUE7QUFFcEMsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQVUsQ0FBSUMsS0FBSyxFQUFLO0VBQzFCLGdCQUEwQkgsK0NBQVEsQ0FBQyxNQUFNLENBQUM7SUFBQTtJQUFuQ0ksS0FBSztJQUFFQyxRQUFRO0VBQ3RCLGlCQUE4QkwsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUF0Q00sT0FBTztJQUFFQyxVQUFVO0VBRTFCLElBQU1DLE9BQU8sR0FBR1AsaURBQVUsQ0FBQztJQUN2QixhQUFhLEVBQUUsSUFBSTtJQUNuQixVQUFVLEVBQUVLO0VBQ2hCLENBQUMsQ0FBQztFQUVGLElBQU1HLGNBQWMsR0FBR1IsaURBQVUsQ0FBQztJQUM5QixVQUFVLEVBQUUsSUFBSTtJQUNoQixRQUFRLEVBQUUsQ0FBQ0s7RUFDZixDQUFDLENBQUM7RUFFRixJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxDQUFJQyxLQUFLLEVBQUs7SUFDM0IsSUFBSVAsS0FBSyxLQUFLLE1BQU0sRUFBRTtNQUNsQlEsU0FBUyxFQUFFO0lBQ2YsQ0FBQyxNQUFNLElBQUlSLEtBQUssS0FBSyxXQUFXLEVBQUU7TUFDOUJTLFFBQVEsRUFBRTtJQUNkLENBQUMsTUFBTSxJQUFJVCxLQUFLLEtBQUssT0FBTyxFQUFFO01BQzFCVSxXQUFXLEVBQUU7SUFDakI7RUFDSixDQUFDO0VBRUQsSUFBTUYsU0FBUyxHQUFHLFNBQVpBLFNBQVMsR0FBUztJQUNwQkwsVUFBVSxDQUFDLElBQUksQ0FBQztJQUVoQlEsMEJBQTBCLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxFQUFFLENBQzVDQyxJQUFJLENBQUMs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QUVBLEtBQUssS0FBNkI7QUFDbEM7QUFDQTtBQUNBLEdBQUcsU0FBUyxJQUE0RTtBQUN4RjtBQUNBLEVBQUUsaUNBQXFCLEVBQUUsbUNBQUU7QUFDM0I7QUFDQSxHQUFHO0FBQUEsa0dBQUM7QUFDSixHQUFHLEtBQUssRUFFTjtBQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMzREQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdF9mcm9udGVuZC8uLi9leGVyY2lzZXMvc3RhdGljL2V4ZXJjaXNlcy9kZWVwbGVhcm5pbmdfZjFfY29udHJvbC93ZWItdGVtcGxhdGUvcmVhY3QtY29tcG9uZW50cy9UZXN0TG9hZGVyLmpzIiwid2VicGFjazovL3JlYWN0X2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVhY3RfZnJvbnRlbmQvLi4vZXhlcmNpc2VzL3N0YXRpYy9leGVyY2lzZXMvZGVlcGxlYXJuaW5nX2YxX2NvbnRyb2wvd2ViLXRlbXBsYXRlL3JlYWN0LWNvbXBvbmVudHMvY3NzL1Rlc3RMb2FkZXIuY3NzPzYxZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGcmFnbWVudCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgXCIuL2Nzcy9UZXN0TG9hZGVyLmNzc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5jb25zdCBUZXN0TG9hZGVyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShcImlkbGVcIik7XG4gICAgY29uc3QgW3dhaXRpbmcsIHNldFdhaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgICBcInRlc3QtbG9hZGVyXCI6IHRydWUsXG4gICAgICAgIFwiZGlzYWJsZWRcIjogd2FpdGluZ1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc3Bpbm5lckNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgXCJsZHMtcmluZ1wiOiB0cnVlLFxuICAgICAgICBcImhpZGRlblwiOiAhd2FpdGluZ1xuICAgIH0pXG5cbiAgICBjb25zdCBidXR0b25DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoc3RhdGUgPT09ICdpZGxlJykge1xuICAgICAgICAgICAgZG9Db25uZWN0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICAgICAgICBkb0xhdW5jaCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSAncmVhZHknKSB7XG4gICAgICAgICAgICBkb1Rlcm1pbmF0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGRvQ29ubmVjdCA9ICgpID0+IHtcbiAgICAgICAgc2V0V2FpdGluZyh0cnVlKTtcblxuICAgICAgICBSb2JvdGljc0V4ZXJjaXNlQ29tcG9uZW50cy5jb21tc01hbmFnZXIuY29ubmVjdCgpXG4gICAgICAgICAgICAudGhlbigobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFN0YXRlKCdjb25uZWN0ZWQnKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRXYWl0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGRvTGF1bmNoID0gKCkgPT4ge1xuICAgICAgICBzZXRXYWl0aW5nKHRydWUpO1xuICAgICAgICBjb25zdCBjb25maWcgPSBKU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhlcmNpc2UtY29uZmlnXCIpLnRleHRDb250ZW50KTtcblxuICAgICAgICAvLyBTZXR0aW5nIHVwIGNpcmN1aXQgbmFtZSBpbnRvIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgY29uZmlnLmFwcGxpY2F0aW9uLnBhcmFtcyA9IHsgY2lyY3VpdDogXCJkZWZhdWx0XCIgfTtcbiAgICAgICAgbGV0IGxhdW5jaF9maWxlID0gY29uZmlnLmxhdW5jaFsnMCddLmxhdW5jaF9maWxlLmludGVycG9sYXRlKHsgY2lyY3VpdDogJ2RlZmF1bHQnIH0pO1xuICAgICAgICBjb25maWcubGF1bmNoWycwJ10ubGF1bmNoX2ZpbGUgPSBsYXVuY2hfZmlsZTtcblxuICAgICAgICBSb2JvdGljc0V4ZXJjaXNlQ29tcG9uZW50cy5jb21tc01hbmFnZXIubGF1bmNoKGNvbmZpZylcbiAgICAgICAgICAgIC50aGVuKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoJ3JlYWR5Jyk7XG4gICAgICAgICAgICB9KS5jYXRjaCgocmVzcG9uc2UpID0+IHtcblxuICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0V2FpdGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBkb1Rlcm1pbmF0ZSA9ICgpID0+IHtcbiAgICAgICAgc2V0V2FpdGluZyh0cnVlKTtcblxuICAgICAgICBSb2JvdGljc0V4ZXJjaXNlQ29tcG9uZW50cy5jb21tc01hbmFnZXIudGVybWluYXRlKClcbiAgICAgICAgICAgIC50aGVuKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoJ2Nvbm5lY3RlZCcpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XG5cbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFdhaXRpbmcoZmFsc2UpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b25UZXh0ID0gKCkgPT4ge1xuICAgICAgICBpZiAoc3RhdGUgPT09ICdpZGxlJykge1xuICAgICAgICAgICAgcmV0dXJuIFwiQ29ubmVjdFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSAnY29ubmVjdGVkJykge1xuICAgICAgICAgICAgcmV0dXJuIFwiTGF1bmNoXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09ICdyZWFkeScpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlRlcm1pbmF0ZVwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydwYXJlbnQtYmxvY2snfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfSBvbkNsaWNrPXtidXR0b25DbGlja30+e2J1dHRvblRleHQoKX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzcGlubmVyQ2xhc3Nlc30+XG4gICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUZXN0TG9hZGVyOyIsIi8qIVxuXHRDb3B5cmlnaHQgKGMpIDIwMTggSmVkIFdhdHNvbi5cblx0TGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcblx0aHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblx0dmFyIG5hdGl2ZUNvZGVTdHJpbmcgPSAnW25hdGl2ZSBjb2RlXSc7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcygpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0aWYgKGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRpZiAoYXJnLnRvU3RyaW5nICE9PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nICYmICFhcmcudG9TdHJpbmcudG9TdHJpbmcoKS5pbmNsdWRlcygnW25hdGl2ZSBjb2RlXScpKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZy50b1N0cmluZygpKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJ1c2VTdGF0ZSIsImNsYXNzTmFtZXMiLCJUZXN0TG9hZGVyIiwicHJvcHMiLCJzdGF0ZSIsInNldFN0YXRlIiwid2FpdGluZyIsInNldFdhaXRpbmciLCJjbGFzc2VzIiwic3Bpbm5lckNsYXNzZXMiLCJidXR0b25DbGljayIsImV2ZW50IiwiZG9Db25uZWN0IiwiZG9MYXVuY2giLCJkb1Rlcm1pbmF0ZSIsIlJvYm90aWNzRXhlcmNpc2VDb21wb25lbnRzIiwiY29tbXNNYW5hZ2VyIiwiY29ubmVjdCIsInRoZW4iLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJjb25maWciLCJKU09OIiwicGFyc2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJhcHBsaWNhdGlvbiIsInBhcmFtcyIsImNpcmN1aXQiLCJsYXVuY2hfZmlsZSIsImxhdW5jaCIsImludGVycG9sYXRlIiwidGVybWluYXRlIiwiYnV0dG9uVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=