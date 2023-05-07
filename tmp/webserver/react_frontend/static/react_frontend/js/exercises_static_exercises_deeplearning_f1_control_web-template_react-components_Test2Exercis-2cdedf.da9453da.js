(self["webpackChunkreact_frontend"] = self["webpackChunkreact_frontend"] || []).push([["exercises_static_exercises_deeplearning_f1_control_web-template_react-components_Test2Exercis-2cdedf"],{

/***/ "../exercises/static/exercises/deeplearning_f1_control/web-template/react-components/Test2ExerciseManager.js":
/*!*******************************************************************************************************************!*\
  !*** ../exercises/static/exercises/deeplearning_f1_control/web-template/react-components/Test2ExerciseManager.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_TestExerciseManager2_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/TestExerciseManager2.css */ "../exercises/static/exercises/deeplearning_f1_control/web-template/react-components/css/TestExerciseManager2.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Test2ExerciseManager = function Test2ExerciseManager() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState("No responses received"),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    message = _React$useState2[0],
    setMessage = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    iserror = _React$useState4[0],
    setIsError = _React$useState4[1];
  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    "test-exercise-manager-message": true,
    "error": iserror
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    console.log("Test2ExerciseManager subscribing to ['ack','error'] events");
    var callback = function callback(message) {
      setIsError(message.command === 'error');
      setMessage(message.data.message);
      console.log(message.data.message);
    };
    RoboticsExerciseComponents.commsManager.subscribe(['ack', 'error'], callback);
    return function () {
      console.log("Test2ExerciseManager unsubscribing from ['ack','error'] events");
      RoboticsExerciseComponents.commsManager.unsubscribe(['ack', 'error'], callback);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: classes,
      children: message
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Test2ExerciseManager);

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

/***/ "../exercises/static/exercises/deeplearning_f1_control/web-template/react-components/css/TestExerciseManager2.css":
/*!************************************************************************************************************************!*\
  !*** ../exercises/static/exercises/deeplearning_f1_control/web-template/react-components/css/TestExerciseManager2.css ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvZXhlcmNpc2VzX3N0YXRpY19leGVyY2lzZXNfZGVlcGxlYXJuaW5nX2YxX2NvbnRyb2xfd2ViLXRlbXBsYXRlX3JlYWN0LWNvbXBvbmVudHNfVGVzdDJFeGVyY2lzLTJjZGVkZi5kYTk0NTNkYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0s7QUFFSTtBQUNUO0FBQUE7QUFBQTtBQUUvQixJQUFNRyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQW9CLEdBQVM7RUFDL0Isc0JBQThCSCwyQ0FBYyxDQUFDLHVCQUF1QixDQUFDO0lBQUE7SUFBOURLLE9BQU87SUFBRUMsVUFBVTtFQUMxQix1QkFBOEJOLDJDQUFjLENBQUMsS0FBSyxDQUFDO0lBQUE7SUFBNUNPLE9BQU87SUFBRUMsVUFBVTtFQUUxQixJQUFNQyxPQUFPLEdBQUdSLGlEQUFVLENBQUM7SUFDdkIsK0JBQStCLEVBQUUsSUFBSTtJQUNyQyxPQUFPLEVBQUVNO0VBQ2IsQ0FBQyxDQUFDO0VBRUZQLDRDQUFlLENBQUMsWUFBTTtJQUNsQlcsT0FBTyxDQUFDQyxHQUFHLENBQUMsNERBQTRELENBQUM7SUFDekUsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVEsQ0FBSVIsT0FBTyxFQUFLO01BQzFCRyxVQUFVLENBQUNILE9BQU8sQ0FBQ1MsT0FBTyxLQUFLLE9BQU8sQ0FBQztNQUN2Q1IsVUFBVSxDQUFDRCxPQUFPLENBQUNVLElBQUksQ0FBQ1YsT0FBTyxDQUFDO01BQ2hDTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsT0FBTyxDQUFDVSxJQUFJLENBQUNWLE9BQU8sQ0FBQztJQUNyQyxDQUFDO0lBRURXLDBCQUEwQixDQUFDQyxZQUFZLENBQUNDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsRUFDOURMLFFBQVEsQ0FBQztJQUViLE9BQU8sWUFBTTtNQUNURixPQUFPLENBQUNDLEdBQUcsQ0FBQyxnRUFBZ0UsQ0FBQztNQUM3RUksMEJBQTBCLENBQUNDLFlBQVksQ0FBQ0UsV0FBVyxDQUFDLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxFQUNoRU4sUUFBUSxDQUFDO0lBQ2pCLENBQUM7RUFDTCxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sb0JBQ0ksd0RBQUMsMkNBQVE7SUFBQSx3QkFDTCxnRUFBTSxlQUNOO01BQUssU0FBUyxFQUFFSixPQUFRO01BQUEsVUFBRUo7SUFBTyxFQUFPO0VBQUEsRUFDakM7QUFFbkIsQ0FBQztBQUVELGlFQUFlRixvQkFBb0I7Ozs7Ozs7Ozs7QUN6Q25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEtBQUssS0FBNkI7QUFDbEM7QUFDQTtBQUNBLEdBQUcsU0FBUyxJQUE0RTtBQUN4RjtBQUNBLEVBQUUsaUNBQXFCLEVBQUUsbUNBQUU7QUFDM0I7QUFDQSxHQUFHO0FBQUEsa0dBQUM7QUFDSixHQUFHLEtBQUssRUFFTjtBQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMzREQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdF9mcm9udGVuZC8uLi9leGVyY2lzZXMvc3RhdGljL2V4ZXJjaXNlcy9kZWVwbGVhcm5pbmdfZjFfY29udHJvbC93ZWItdGVtcGxhdGUvcmVhY3QtY29tcG9uZW50cy9UZXN0MkV4ZXJjaXNlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9yZWFjdF9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovL3JlYWN0X2Zyb250ZW5kLy4uL2V4ZXJjaXNlcy9zdGF0aWMvZXhlcmNpc2VzL2RlZXBsZWFybmluZ19mMV9jb250cm9sL3dlYi10ZW1wbGF0ZS9yZWFjdC1jb21wb25lbnRzL2Nzcy9UZXN0RXhlcmNpc2VNYW5hZ2VyMi5jc3M/NjM4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0ICcuL2Nzcy9UZXN0RXhlcmNpc2VNYW5hZ2VyMi5jc3MnO1xuaW1wb3J0IHtGcmFnbWVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFRlc3QyRXhlcmNpc2VNYW5hZ2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IFJlYWN0LnVzZVN0YXRlKFwiTm8gcmVzcG9uc2VzIHJlY2VpdmVkXCIpO1xuICAgIGNvbnN0IFtpc2Vycm9yLCBzZXRJc0Vycm9yXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgXCJ0ZXN0LWV4ZXJjaXNlLW1hbmFnZXItbWVzc2FnZVwiOiB0cnVlLFxuICAgICAgICBcImVycm9yXCI6IGlzZXJyb3JcbiAgICB9KTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGVzdDJFeGVyY2lzZU1hbmFnZXIgc3Vic2NyaWJpbmcgdG8gWydhY2snLCdlcnJvciddIGV2ZW50c1wiKTtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgc2V0SXNFcnJvcihtZXNzYWdlLmNvbW1hbmQgPT09ICdlcnJvcicpO1xuICAgICAgICAgICAgc2V0TWVzc2FnZShtZXNzYWdlLmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlLmRhdGEubWVzc2FnZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgUm9ib3RpY3NFeGVyY2lzZUNvbXBvbmVudHMuY29tbXNNYW5hZ2VyLnN1YnNjcmliZShbJ2FjaycsICdlcnJvciddLFxuICAgICAgICAgICAgY2FsbGJhY2spO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRlc3QyRXhlcmNpc2VNYW5hZ2VyIHVuc3Vic2NyaWJpbmcgZnJvbSBbJ2FjaycsJ2Vycm9yJ10gZXZlbnRzXCIpO1xuICAgICAgICAgICAgUm9ib3RpY3NFeGVyY2lzZUNvbXBvbmVudHMuY29tbXNNYW5hZ2VyLnVuc3Vic2NyaWJlKFsnYWNrJywgJ2Vycm9yJ10sXG4gICAgICAgICAgICAgICAgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+e21lc3NhZ2V9PC9kaXY+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXN0MkV4ZXJjaXNlTWFuYWdlcjsiLCIvKiFcblx0Q29weXJpZ2h0IChjKSAyMDE4IEplZCBXYXRzb24uXG5cdExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG5cdGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cdHZhciBuYXRpdmVDb2RlU3RyaW5nID0gJ1tuYXRpdmUgY29kZV0nO1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGlmIChhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aWYgKGFyZy50b1N0cmluZyAhPT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyAmJiAhYXJnLnRvU3RyaW5nLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ1tuYXRpdmUgY29kZV0nKSkge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChhcmcudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiY2xhc3NOYW1lcyIsIkZyYWdtZW50IiwiVGVzdDJFeGVyY2lzZU1hbmFnZXIiLCJ1c2VTdGF0ZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiaXNlcnJvciIsInNldElzRXJyb3IiLCJjbGFzc2VzIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImNhbGxiYWNrIiwiY29tbWFuZCIsImRhdGEiLCJSb2JvdGljc0V4ZXJjaXNlQ29tcG9uZW50cyIsImNvbW1zTWFuYWdlciIsInN1YnNjcmliZSIsInVuc3Vic2NyaWJlIl0sInNvdXJjZVJvb3QiOiIifQ==