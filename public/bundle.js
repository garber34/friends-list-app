/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/friendMaker.js":
/*!*******************************!*\
  !*** ./client/friendMaker.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function builder(friend) {\r\n  const container = document.createElement(\"li\");\r\n\r\n  const name = document.createElement(\"h2\");\r\n  name.innerText = friend.name;\r\n  container.appendChild(name);\r\n\r\n  const rating = document.createElement(\"p\");\r\n  rating.innerText = friend.rating;\r\n  container.appendChild(rating);\r\n\r\n  const btnAdd = document.createElement(\"button\");\r\n  btnAdd.innerText = \"+\";\r\n  btnAdd.addEventListener(\"click\", async () => {\r\n    rating.innerText++;\r\n\r\n    updateDatabase(friend.id, rating.innerText);\r\n    moveElement(rating.innerText, container, \"up\");\r\n  });\r\n\r\n  container.appendChild(btnAdd);\r\n\r\n  const btnSubtract = document.createElement(\"button\");\r\n  btnSubtract.innerText = \"-\";\r\n  btnSubtract.addEventListener(\"click\", async () => {\r\n    rating.innerText--;\r\n\r\n    updateDatabase(friend.id, rating.innerText);\r\n    moveElement(rating.innerText, container, \"down\");\r\n  });\r\n  container.appendChild(btnSubtract);\r\n\r\n  const btnDelete = document.createElement(\"button\");\r\n  btnDelete.innerText = \"x\";\r\n  container.appendChild(btnDelete);\r\n  btnDelete.addEventListener(\"click\",()=>{\r\n    deleteFriend(friend.id);\r\n    container.parentNode.removeChild(container);\r\n\r\n  })\r\n\r\n  return container;\r\n}\r\n\r\nasync function deleteFriend(id){\r\n  await fetch(`/api/friends/${id}`, {\r\n    method: \"DELETE\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json;charset=utf-8\",\r\n    }\r\n  });\r\n}\r\nasync function updateDatabase(id, newRating) {\r\n\r\n\r\n  await fetch(`/api/friends/${id}`, {\r\n    method: \"PUT\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json;charset=utf-8\",\r\n    },\r\n    body: JSON.stringify({\"rating\":newRating}),\r\n  });\r\n}\r\n\r\nfunction moveElement(newRating, container, direction) {\r\n  if (direction === \"up\") {\r\n    while (newRating > container.previousSibling.childNodes[1].innerText) {\r\n      container.parentNode.insertBefore(container, container.previousSibling);\r\n    }\r\n  } else if (direction === \"down\") {\r\n    while (newRating < container.nextSibling.childNodes[1].innerText) {\r\n      container.parentNode.insertBefore(container.nextSibling, container);\r\n    }\r\n  }\r\n}\r\nmodule.exports = builder;\r\n\n\n//# sourceURL=webpack:///./client/friendMaker.js?");

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const buildFriendView =  __webpack_require__(/*! ./friendMaker.js */ \"./client/friendMaker.js\");\r\n\r\nconst friendList = document.getElementById('friendList');\r\n\r\n\r\n\r\nasync function onPageLoad(){\r\n\r\n const result = await fetch('/api/friends');\r\n const friendArray=await result.json();\r\n console.log(friendArray);\r\n  friendArray.forEach(friend => {\r\n  attachToList(friend)\r\n});\r\n\r\n}\r\nfunction attachToList(friend){\r\n  const friendView=buildFriendView(friend)\r\n  friendList.appendChild(friendView);\r\n}\r\n\r\nonPageLoad();\r\n\n\n//# sourceURL=webpack:///./client/index.js?");

/***/ })

/******/ });