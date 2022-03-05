/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("var calculateMonthlyPayment = function calculateMonthlyPayment(principal, years, rate) {\n  if (rate) {\n    monthlyRate = rate / 100 / 12;\n  }\n\n  var monthlyPayment = principal * monthlyRate / (1 - Math.pow(1 / (1 + monthlyRate), years * 12));\n  return monthlyPayment;\n};\n\ndocument.getElementById(\"calcBtn\").addEventListener(\"click\", function () {\n  var principal = document.getElementById(\"principal\").value;\n  var years = document.getElementById(\"years\").value;\n  var rate = document.getElementById(\"rate\").value;\n  var monthlyPayment = calculateMonthlyPayment(principal, years, rate);\n  document.getElementById(\"monthlyPayment\").innerHTML = monthlyPayment.toFixed(2);\n});\n\n//# sourceURL=webpack://assignment-5.5/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;