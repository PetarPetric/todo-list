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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//Global scope//
const mainBox = document.querySelector('.content');
const actualStuff = document.createElement('div');
const projectList = document.createElement('div');

const pageRender = (() => {
    var title = "To Do List"
    createTitle(title);
    createProjectHolder();
    projectLists();
    btnProjectAdd();
    projectNames();
});

function createTitle(title) {
    const titleBox = document.createElement('div');
    titleBox.classList.add('titleBox');
    mainBox.append(titleBox);
    const actualTitle = document.createTextNode(title);
    titleBox.appendChild(actualTitle);
};

function createProjectHolder() {
    actualStuff.classList.add('actualStuff');

    mainBox.append(actualStuff);
}

function projectLists() {
    const projectOverview = document.createElement('div');


    projectOverview.classList.add('projectOverview');

    actualStuff.append(projectList, projectOverview);
}

function btnProjectAdd() {
    const btnAdd = document.createElement('button');
    btnAdd.classList.add('btnAdd');
    btnAdd.textContent = "New Project"

    projectList.append(btnAdd);
}

function projectNames() {
    const actualProjects = document.createElement('div');
    actualProjects.classList.add('actualProjects');
    projectList.append(actualProjects);
}

/* harmony default export */ __webpack_exports__["default"] = (pageRender);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _projectLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectLogic */ "./src/projectLogic.js");



Object(_dom__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_projectLogic__WEBPACK_IMPORTED_MODULE_1__["newProjects"])();


/***/ }),

/***/ "./src/projectListDom.js":
/*!*******************************!*\
  !*** ./src/projectListDom.js ***!
  \*******************************/
/*! exports provided: initModal, inputInit, createNewProject, createdProject, cantCreate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initModal", function() { return initModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputInit", function() { return inputInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewProject", function() { return createNewProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createdProject", function() { return createdProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cantCreate", function() { return cantCreate; });
let modalPlace;
let modalForm;
let inputForm;

const createNewProject = () => {
  initModal();
  inputInit();
}

const initModal = () => {
  modalForm = document.createElement('div');
  modalPlace = document.querySelector('.actualProjects')
  modalForm.setAttribute('id', 'modalBox')
  modalPlace.append(modalForm);

}

const inputInit = () => {

  inputForm = document.createElement('input');
  const addingStuff = document.createElement('button');
  const cancelStuff = document.createElement('button');

  inputForm.classList.add('inputForm')

  addingStuff.classList.add('addingStuff');
  cancelStuff.classList.add('cancelingStuff');

  addingStuff.textContent = "Add"
  cancelStuff.textContent = "Cancel"

  modalForm.append(inputForm);
  modalForm.append(addingStuff);
  modalForm.append(cancelStuff);

  modalForm.classList.add('inputForm');
  inputForm.placeholder = "Project Name"
}

const createdProject = () => {
  const newProjectCreated = document.createElement('div');
  const projectCreatedTitle = document.createElement('h5');
  const projectCreatedTxt = inputForm.value;

  modalPlace.append(newProjectCreated)
  newProjectCreated.append(projectCreatedTitle);
  projectCreatedTitle.append(projectCreatedTxt);

  newProjectCreated.classList.add('projectClass')

};

const cantCreate = () => {
  if(inputForm.value === "") {
    alert("CANT CREATE EMPTY PROJECT")
  } else {createdProject()}
}



/***/ }),

/***/ "./src/projectLogic.js":
/*!*****************************!*\
  !*** ./src/projectLogic.js ***!
  \*****************************/
/*! exports provided: newProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newProjects", function() { return newProjects; });
/* harmony import */ var _projectListDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectListDom */ "./src/projectListDom.js");


const newProjects = () => {
    const btnAdd = document.querySelector('.btnAdd');
    initListener(btnAdd, 'add', 'click');

};

function initListener(element, type, event) {
    element.addEventListener(event, () => {
        const todoHolder = document.querySelector('#modalBox');
        switch (type) {
            case 'add':
                if (!todoHolder) {
                    Object(_projectListDom__WEBPACK_IMPORTED_MODULE_0__["createNewProject"])()
                    const cancelingStuff = document.querySelector('.cancelingStuff');
                    initListener(cancelingStuff, 'cancel', 'click');
                    const addStuffToList = document.querySelector('.addingStuff');
                    initListener(addStuffToList, 'addProjectTl', 'click');
                break;
                };
                break;
            case 'cancel':
                todoHolder.remove();
                break;
            case 'addProjectTl':
                todoHolder.remove();
                Object(_projectListDom__WEBPACK_IMPORTED_MODULE_0__["cantCreate"])();
                break;
            default:
                console.log('unknown type');
                break;
        }
    })
};



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3RMaXN0RG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0TG9naWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUseUVBQVUsRTs7Ozs7Ozs7Ozs7O0FDbkR6QjtBQUFBO0FBQUE7QUFBK0I7QUFDWTs7QUFFM0Msb0RBQVU7QUFDVixpRUFBVzs7Ozs7Ozs7Ozs7OztBQ0pYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRyxPQUFPO0FBQ1Y7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQUE7QUFBQTtBQUE4RDs7QUFFOUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3RUFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtFQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy9HbG9iYWwgc2NvcGUvL1xuY29uc3QgbWFpbkJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5jb25zdCBhY3R1YWxTdHVmZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgcGFnZVJlbmRlciA9ICgoKSA9PiB7XG4gICAgdmFyIHRpdGxlID0gXCJUbyBEbyBMaXN0XCJcbiAgICBjcmVhdGVUaXRsZSh0aXRsZSk7XG4gICAgY3JlYXRlUHJvamVjdEhvbGRlcigpO1xuICAgIHByb2plY3RMaXN0cygpO1xuICAgIGJ0blByb2plY3RBZGQoKTtcbiAgICBwcm9qZWN0TmFtZXMoKTtcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVUaXRsZSh0aXRsZSkge1xuICAgIGNvbnN0IHRpdGxlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVCb3guY2xhc3NMaXN0LmFkZCgndGl0bGVCb3gnKTtcbiAgICBtYWluQm94LmFwcGVuZCh0aXRsZUJveCk7XG4gICAgY29uc3QgYWN0dWFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aXRsZSk7XG4gICAgdGl0bGVCb3guYXBwZW5kQ2hpbGQoYWN0dWFsVGl0bGUpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEhvbGRlcigpIHtcbiAgICBhY3R1YWxTdHVmZi5jbGFzc0xpc3QuYWRkKCdhY3R1YWxTdHVmZicpO1xuXG4gICAgbWFpbkJveC5hcHBlbmQoYWN0dWFsU3R1ZmYpO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0TGlzdHMoKSB7XG4gICAgY29uc3QgcHJvamVjdE92ZXJ2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblxuICAgIHByb2plY3RPdmVydmlldy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0T3ZlcnZpZXcnKTtcblxuICAgIGFjdHVhbFN0dWZmLmFwcGVuZChwcm9qZWN0TGlzdCwgcHJvamVjdE92ZXJ2aWV3KTtcbn1cblxuZnVuY3Rpb24gYnRuUHJvamVjdEFkZCgpIHtcbiAgICBjb25zdCBidG5BZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5BZGQuY2xhc3NMaXN0LmFkZCgnYnRuQWRkJyk7XG4gICAgYnRuQWRkLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdFwiXG5cbiAgICBwcm9qZWN0TGlzdC5hcHBlbmQoYnRuQWRkKTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdE5hbWVzKCkge1xuICAgIGNvbnN0IGFjdHVhbFByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWN0dWFsUHJvamVjdHMuY2xhc3NMaXN0LmFkZCgnYWN0dWFsUHJvamVjdHMnKTtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmQoYWN0dWFsUHJvamVjdHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlUmVuZGVyOyIsImltcG9ydCBwYWdlUmVuZGVyIGZyb20gJy4vZG9tJztcbmltcG9ydCB7bmV3UHJvamVjdHN9IGZyb20gJy4vcHJvamVjdExvZ2ljJztcblxucGFnZVJlbmRlcigpO1xubmV3UHJvamVjdHMoKTtcbiIsImxldCBtb2RhbFBsYWNlO1xubGV0IG1vZGFsRm9ybTtcbmxldCBpbnB1dEZvcm07XG5cbmNvbnN0IGNyZWF0ZU5ld1Byb2plY3QgPSAoKSA9PiB7XG4gIGluaXRNb2RhbCgpO1xuICBpbnB1dEluaXQoKTtcbn1cblxuY29uc3QgaW5pdE1vZGFsID0gKCkgPT4ge1xuICBtb2RhbEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWxQbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3R1YWxQcm9qZWN0cycpXG4gIG1vZGFsRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vZGFsQm94JylcbiAgbW9kYWxQbGFjZS5hcHBlbmQobW9kYWxGb3JtKTtcblxufVxuXG5jb25zdCBpbnB1dEluaXQgPSAoKSA9PiB7XG5cbiAgaW5wdXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgYWRkaW5nU3R1ZmYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgY2FuY2VsU3R1ZmYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICBpbnB1dEZvcm0uY2xhc3NMaXN0LmFkZCgnaW5wdXRGb3JtJylcblxuICBhZGRpbmdTdHVmZi5jbGFzc0xpc3QuYWRkKCdhZGRpbmdTdHVmZicpO1xuICBjYW5jZWxTdHVmZi5jbGFzc0xpc3QuYWRkKCdjYW5jZWxpbmdTdHVmZicpO1xuXG4gIGFkZGluZ1N0dWZmLnRleHRDb250ZW50ID0gXCJBZGRcIlxuICBjYW5jZWxTdHVmZi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCJcblxuICBtb2RhbEZvcm0uYXBwZW5kKGlucHV0Rm9ybSk7XG4gIG1vZGFsRm9ybS5hcHBlbmQoYWRkaW5nU3R1ZmYpO1xuICBtb2RhbEZvcm0uYXBwZW5kKGNhbmNlbFN0dWZmKTtcblxuICBtb2RhbEZvcm0uY2xhc3NMaXN0LmFkZCgnaW5wdXRGb3JtJyk7XG4gIGlucHV0Rm9ybS5wbGFjZWhvbGRlciA9IFwiUHJvamVjdCBOYW1lXCJcbn1cblxuY29uc3QgY3JlYXRlZFByb2plY3QgPSAoKSA9PiB7XG4gIGNvbnN0IG5ld1Byb2plY3RDcmVhdGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHByb2plY3RDcmVhdGVkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICBjb25zdCBwcm9qZWN0Q3JlYXRlZFR4dCA9IGlucHV0Rm9ybS52YWx1ZTtcblxuICBtb2RhbFBsYWNlLmFwcGVuZChuZXdQcm9qZWN0Q3JlYXRlZClcbiAgbmV3UHJvamVjdENyZWF0ZWQuYXBwZW5kKHByb2plY3RDcmVhdGVkVGl0bGUpO1xuICBwcm9qZWN0Q3JlYXRlZFRpdGxlLmFwcGVuZChwcm9qZWN0Q3JlYXRlZFR4dCk7XG5cbiAgbmV3UHJvamVjdENyZWF0ZWQuY2xhc3NMaXN0LmFkZCgncHJvamVjdENsYXNzJylcblxufTtcblxuY29uc3QgY2FudENyZWF0ZSA9ICgpID0+IHtcbiAgaWYoaW5wdXRGb3JtLnZhbHVlID09PSBcIlwiKSB7XG4gICAgYWxlcnQoXCJDQU5UIENSRUFURSBFTVBUWSBQUk9KRUNUXCIpXG4gIH0gZWxzZSB7Y3JlYXRlZFByb2plY3QoKX1cbn1cblxuZXhwb3J0IHtpbml0TW9kYWwsIGlucHV0SW5pdCwgY3JlYXRlTmV3UHJvamVjdCwgY3JlYXRlZFByb2plY3QsIGNhbnRDcmVhdGV9OyIsImltcG9ydCB7Y3JlYXRlTmV3UHJvamVjdCwgY2FudENyZWF0ZX0gZnJvbSAnLi9wcm9qZWN0TGlzdERvbSc7XG5cbmNvbnN0IG5ld1Byb2plY3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ0bkFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5BZGQnKTtcbiAgICBpbml0TGlzdGVuZXIoYnRuQWRkLCAnYWRkJywgJ2NsaWNrJyk7XG5cbn07XG5cbmZ1bmN0aW9uIGluaXRMaXN0ZW5lcihlbGVtZW50LCB0eXBlLCBldmVudCkge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQm94Jyk7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnYWRkJzpcbiAgICAgICAgICAgICAgICBpZiAoIXRvZG9Ib2xkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3UHJvamVjdCgpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbmNlbGluZ1N0dWZmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbGluZ1N0dWZmJyk7XG4gICAgICAgICAgICAgICAgICAgIGluaXRMaXN0ZW5lcihjYW5jZWxpbmdTdHVmZiwgJ2NhbmNlbCcsICdjbGljaycpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGRTdHVmZlRvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRpbmdTdHVmZicpO1xuICAgICAgICAgICAgICAgICAgICBpbml0TGlzdGVuZXIoYWRkU3R1ZmZUb0xpc3QsICdhZGRQcm9qZWN0VGwnLCAnY2xpY2snKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2FuY2VsJzpcbiAgICAgICAgICAgICAgICB0b2RvSG9sZGVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWRkUHJvamVjdFRsJzpcbiAgICAgICAgICAgICAgICB0b2RvSG9sZGVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGNhbnRDcmVhdGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Vua25vd24gdHlwZScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSlcbn07XG5cbmV4cG9ydCB7bmV3UHJvamVjdHN9OyJdLCJzb3VyY2VSb290IjoiIn0=