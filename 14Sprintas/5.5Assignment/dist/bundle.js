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

eval("let calculateMonthlyPayment = function (principal, years, rate) {\r\n    if (rate) {\r\n        monthlyRate = rate / 100 / 12;\r\n    }\r\n    let monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), years * 12)));\r\n    return monthlyPayment;\r\n};\r\n\r\ndocument.getElementById('calcBtn').addEventListener('click', function () {\r\n    let principal = document.getElementById(\"principal\").value;\r\n    let years = document.getElementById(\"years\").value;\r\n    let rate = document.getElementById(\"rate\").value;\r\n    let monthlyPayment = calculateMonthlyPayment(principal, years, rate);\r\n    document.getElementById(\"monthlyPayment\").innerHTML = monthlyPayment.toFixed(2);\r\n});\n\n//# sourceURL=webpack://5.5assignment/./src/index.js?");

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