(self["webpackChunkreact_frontend"] = self["webpackChunkreact_frontend"] || []).push([["exercises_static_exercises_deeplearning_f1_control_web-template_react-components_Test3Exercis-d5f2a1"],{

/***/ "../exercises/static/exercises/deeplearning_f1_control/web-template/react-components/Test3ExerciseManager.js":
/*!*******************************************************************************************************************!*\
  !*** ../exercises/static/exercises/deeplearning_f1_control/web-template/react-components/Test3ExerciseManager.js ***!
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
/* harmony import */ var _css_TestExerciseManager3_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/TestExerciseManager3.css */ "../exercises/static/exercises/deeplearning_f1_control/web-template/react-components/css/TestExerciseManager3.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Test3ExerciseManager = function Test3ExerciseManager() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState("Idle"),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    state = _React$useState2[0],
    setState = _React$useState2[1];
  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    "test-exercise-manager-state": true
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    console.log("Test3ExerciseManager subscribing to ['state-change'] events");
    var callback = function callback(message) {
      setState(message.data.state);
      console.log(message);
    };
    RoboticsExerciseComponents.commsManager.subscribe([RoboticsExerciseComponents.commsManager.events.STATE_CHANGED], callback);
    return function () {
      console.log("Test2ExerciseManager unsubscribing from ['state-changed'] events");
      RoboticsExerciseComponents.commsManager.unsubscribe([RoboticsExerciseComponents.commsManager.events.STATE_CHANGED], callback);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: classes,
      children: ["CURRENT STATE: ", state]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Test3ExerciseManager);

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

/***/ "../exercises/static/exercises/deeplearning_f1_control/web-template/react-components/css/TestExerciseManager3.css":
/*!************************************************************************************************************************!*\
  !*** ../exercises/static/exercises/deeplearning_f1_control/web-template/react-components/css/TestExerciseManager3.css ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvZXhlcmNpc2VzX3N0YXRpY19leGVyY2lzZXNfZGVlcGxlYXJuaW5nX2YxX2NvbnRyb2xfd2ViLXRlbXBsYXRlX3JlYWN0LWNvbXBvbmVudHNfVGVzdDNFeGVyY2lzLWQ1ZjJhMS42MDUwNmNhMS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0s7QUFFSTtBQUNUO0FBQUE7QUFBQTtBQUUvQixJQUFNRyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQW9CLEdBQVM7RUFDakMsc0JBQTBCSCwyQ0FBYyxDQUFDLE1BQU0sQ0FBQztJQUFBO0lBQXpDSyxLQUFLO0lBQUVDLFFBQVE7RUFFdEIsSUFBTUMsT0FBTyxHQUFHTixpREFBVSxDQUFDO0lBQ3pCLDZCQUE2QixFQUFFO0VBQ2pDLENBQUMsQ0FBQztFQUVGRCw0Q0FBZSxDQUFDLFlBQU07SUFDcEJTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDZEQUE2RCxDQUFDO0lBRTFFLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFRLENBQUlDLE9BQU8sRUFBSztNQUN4Qk4sUUFBUSxDQUFDTSxPQUFPLENBQUNDLElBQUksQ0FBQ1IsS0FBSyxDQUFDO01BQzVCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsT0FBTyxDQUFDO0lBQzFCLENBQUM7SUFFREUsMEJBQTBCLENBQUNDLFlBQVksQ0FBQ0MsU0FBUyxDQUFDLENBQzVDRiwwQkFBMEIsQ0FBQ0MsWUFBWSxDQUFDRSxNQUFNLENBQUNDLGFBQWEsQ0FDN0QsRUFDRFAsUUFBUSxDQUFDO0lBRWIsT0FBTyxZQUFNO01BQ1hGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtFQUFrRSxDQUFDO01BQy9FSSwwQkFBMEIsQ0FBQ0MsWUFBWSxDQUFDSSxXQUFXLENBQUMsQ0FDOUNMLDBCQUEwQixDQUFDQyxZQUFZLENBQUNFLE1BQU0sQ0FBQ0MsYUFBYSxDQUM3RCxFQUNIUCxRQUFRLENBQUM7SUFDYixDQUFDO0VBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLG9CQUNFLHdEQUFDLDJDQUFRO0lBQUEsd0JBQ0wsZ0VBQU0sZUFDTjtNQUFLLFNBQVMsRUFBRUosT0FBUTtNQUFBLFdBQUMsaUJBQWUsRUFBQ0YsS0FBSztJQUFBLEVBQU87RUFBQSxFQUM5QztBQUVmLENBQUM7QUFFRCxpRUFBZUYsb0JBQW9COzs7Ozs7Ozs7O0FDM0NuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxLQUFLLEtBQTZCO0FBQ2xDO0FBQ0E7QUFDQSxHQUFHLFNBQVMsSUFBNEU7QUFDeEY7QUFDQSxFQUFFLGlDQUFxQixFQUFFLG1DQUFFO0FBQzNCO0FBQ0EsR0FBRztBQUFBLGtHQUFDO0FBQ0osR0FBRyxLQUFLLEVBRU47QUFDRixDQUFDOzs7Ozs7Ozs7Ozs7O0FDM0REIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3RfZnJvbnRlbmQvLi4vZXhlcmNpc2VzL3N0YXRpYy9leGVyY2lzZXMvZGVlcGxlYXJuaW5nX2YxX2NvbnRyb2wvd2ViLXRlbXBsYXRlL3JlYWN0LWNvbXBvbmVudHMvVGVzdDNFeGVyY2lzZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3RfZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZWFjdF9mcm9udGVuZC8uLi9leGVyY2lzZXMvc3RhdGljL2V4ZXJjaXNlcy9kZWVwbGVhcm5pbmdfZjFfY29udHJvbC93ZWItdGVtcGxhdGUvcmVhY3QtY29tcG9uZW50cy9jc3MvVGVzdEV4ZXJjaXNlTWFuYWdlcjMuY3NzPzAzN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCAnLi9jc3MvVGVzdEV4ZXJjaXNlTWFuYWdlcjMuY3NzJztcbmltcG9ydCB7RnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBUZXN0M0V4ZXJjaXNlTWFuYWdlciA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShcIklkbGVcIik7XG5cbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFwidGVzdC1leGVyY2lzZS1tYW5hZ2VyLXN0YXRlXCI6IHRydWUsXG4gIH0pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJUZXN0M0V4ZXJjaXNlTWFuYWdlciBzdWJzY3JpYmluZyB0byBbJ3N0YXRlLWNoYW5nZSddIGV2ZW50c1wiKTtcblxuICAgIGNvbnN0IGNhbGxiYWNrID0gKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICBzZXRTdGF0ZShtZXNzYWdlLmRhdGEuc3RhdGUpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH07XG5cbiAgICBSb2JvdGljc0V4ZXJjaXNlQ29tcG9uZW50cy5jb21tc01hbmFnZXIuc3Vic2NyaWJlKFtcbiAgICAgICAgICBSb2JvdGljc0V4ZXJjaXNlQ29tcG9uZW50cy5jb21tc01hbmFnZXIuZXZlbnRzLlNUQVRFX0NIQU5HRURcbiAgICAgICAgXSxcbiAgICAgICAgY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVGVzdDJFeGVyY2lzZU1hbmFnZXIgdW5zdWJzY3JpYmluZyBmcm9tIFsnc3RhdGUtY2hhbmdlZCddIGV2ZW50c1wiKTtcbiAgICAgIFJvYm90aWNzRXhlcmNpc2VDb21wb25lbnRzLmNvbW1zTWFuYWdlci51bnN1YnNjcmliZShbXG4gICAgICAgICAgICBSb2JvdGljc0V4ZXJjaXNlQ29tcG9uZW50cy5jb21tc01hbmFnZXIuZXZlbnRzLlNUQVRFX0NIQU5HRURcbiAgICAgICAgICBdLFxuICAgICAgICBjYWxsYmFjayk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+Q1VSUkVOVCBTVEFURToge3N0YXRlfTwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdDNFeGVyY2lzZU1hbmFnZXI7IiwiLyohXG5cdENvcHlyaWdodCAoYykgMjAxOCBKZWQgV2F0c29uLlxuXHRMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuXHRodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXHR2YXIgbmF0aXZlQ29kZVN0cmluZyA9ICdbbmF0aXZlIGNvZGVdJztcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRpZiAoYXJnLmxlbmd0aCkge1xuXHRcdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGlmIChhcmcudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgJiYgIWFyZy50b1N0cmluZy50b1N0cmluZygpLmluY2x1ZGVzKCdbbmF0aXZlIGNvZGVdJykpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsImNsYXNzTmFtZXMiLCJGcmFnbWVudCIsIlRlc3QzRXhlcmNpc2VNYW5hZ2VyIiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiY2xhc3NlcyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJjYWxsYmFjayIsIm1lc3NhZ2UiLCJkYXRhIiwiUm9ib3RpY3NFeGVyY2lzZUNvbXBvbmVudHMiLCJjb21tc01hbmFnZXIiLCJzdWJzY3JpYmUiLCJldmVudHMiLCJTVEFURV9DSEFOR0VEIiwidW5zdWJzY3JpYmUiXSwic291cmNlUm9vdCI6IiJ9