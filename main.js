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
/*! exports provided: initModal, inputInit, createNewProject, createdProject, objCreation, inputForm, funnyFunction, todoSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initModal", function() { return initModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputInit", function() { return inputInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewProject", function() { return createNewProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createdProject", function() { return createdProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objCreation", function() { return objCreation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputForm", function() { return inputForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "funnyFunction", function() { return funnyFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoSettings", function() { return todoSettings; });
/* harmony import */ var _projectLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectLogic */ "./src/projectLogic.js");


let modalPlace;
let modalForm;
let inputForm;
let todoOverView;
let todoDetails;
const divProjectList = [];

const createNewProject = () => {
  initModal();
  inputInit();
}

const initModal = () => {
  modalForm = document.createElement('div');
  modalPlace = document.querySelector('.actualProjects');
  modalForm.setAttribute('id', 'modalBox');
  modalPlace.append(modalForm);

}

const inputInit = () => {

  inputForm = document.createElement('input');
  const addingStuff = document.createElement('button');
  const cancelStuff = document.createElement('button');
  const buttonDiv = document.createElement('div');
  buttonDiv.setAttribute('id', 'buttonDiv');
  
  inputForm.classList.add('justInput');
  inputForm.setAttribute('name', 'justInput');
  
  addingStuff.classList.add('addingStuff');
  cancelStuff.classList.add('cancelingStuff');
  
  addingStuff.textContent = "Add";
  cancelStuff.textContent = "Cancel";
  
  modalForm.append(inputForm);
  modalForm.append(buttonDiv);
  buttonDiv.append(addingStuff);
  buttonDiv.append(cancelStuff);

  modalForm.classList.add('inputForm');
  inputForm.placeholder = "Project Name";
};

const createdProject = () => {

  const newProjectCreated = document.createElement('div');
  const projectCreatedTitle = document.createElement('h5');
  const projectCreatedTxt = _projectLogic__WEBPACK_IMPORTED_MODULE_0__["newProject"].projectName;

  modalPlace.append(newProjectCreated);
  newProjectCreated.append(projectCreatedTitle);
  projectCreatedTitle.append(projectCreatedTxt);
  newProjectCreated.classList.add('projectClass');
  divProjectList.push(newProjectCreated);
};


const funnyFunction = () => {
  divProjectList.forEach(clickable => {
    clickable.addEventListener('click', (e) => {
    let indxNum = divProjectList.indexOf(e.currentTarget);
    console.log(_projectLogic__WEBPACK_IMPORTED_MODULE_0__["todoListArray"][indxNum].projectName);
    });
  }); 
};

const todoSettings = () => {
  todoDetails = document.createElement('div');
  todoDetails.classList.add('todoDetails');
  todoOverView = document.querySelector('.projectOverview');
  todoOverView.append(todoDetails);
};

const insideTodo = (arg) => {
  const todoTitle = document.createElement('h6');
  todoDetails.append(todoTitle);
  todoTitle.textContent = '';
  todoTitle.textContent = arg;
}


const objCreation = () => {
  if(inputForm.value === "") {
    alert("CANT CREATE EMPTY PROJECT");
  } else {createdProject()};
};



/***/ }),

/***/ "./src/projectLogic.js":
/*!*****************************!*\
  !*** ./src/projectLogic.js ***!
  \*****************************/
/*! exports provided: newProjects, makingObj, todoListArray, newProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newProjects", function() { return newProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makingObj", function() { return makingObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoListArray", function() { return todoListArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newProject", function() { return newProject; });
/* harmony import */ var _projectListDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectListDom */ "./src/projectListDom.js");



const todoListArray = [];
let newProject;
let todoHolder;

const newProjects = () => {
    const btnAdd = document.querySelector('.btnAdd');
    btnAdd.addEventListener('click', () => {
    if(!todoHolder){
    Object(_projectListDom__WEBPACK_IMPORTED_MODULE_0__["createNewProject"])();
    addCancelInits();
        }
    })

};

function addCancelInits() {
    todoHolder = document.querySelector('#modalBox');
    const cancelingStuff = document.querySelector('.cancelingStuff');
    cancelingStuff.addEventListener('click', () => {
    todoHolder.remove();
    addCancelInits();
    });

    const addStuffToList = document.querySelector('.addingStuff');
    addStuffToList.addEventListener('click', () => {
        makingObj();
        todoHolder.remove();
        Object(_projectListDom__WEBPACK_IMPORTED_MODULE_0__["objCreation"])();
        Object(_projectListDom__WEBPACK_IMPORTED_MODULE_0__["createNewProject"])();
        addCancelInits();
        Object(_projectListDom__WEBPACK_IMPORTED_MODULE_0__["funnyFunction"])();
    });
}

const ProjectsFactory = function(projectName) {
    return {
        projectName
    }
}

function makingObj() {
    newProject = ProjectsFactory(_projectListDom__WEBPACK_IMPORTED_MODULE_0__["inputForm"].value);
    todoListArray.push(newProject);
};




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3RMaXN0RG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0TG9naWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUseUVBQVUsRTs7Ozs7Ozs7Ozs7O0FDbkR6QjtBQUFBO0FBQUE7QUFBK0I7QUFDWTs7QUFFM0Msb0RBQVU7QUFDVixpRUFBVzs7Ozs7Ozs7Ozs7OztBQ0pYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9FOztBQUVwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLHdEQUFVOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFhO0FBQzdCLEtBQUs7QUFDTCxHQUFHLEU7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLE9BQU87QUFDVjs7Ozs7Ozs7Ozs7Ozs7QUMxRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVHOzs7QUFHdkc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3RUFBZ0I7QUFDcEI7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUVBQVc7QUFDbkIsUUFBUSx3RUFBZ0I7QUFDeEI7QUFDQSxRQUFRLHFFQUFhO0FBQ3JCLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLHlEQUFTO0FBQzFDO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy9HbG9iYWwgc2NvcGUvL1xuY29uc3QgbWFpbkJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5jb25zdCBhY3R1YWxTdHVmZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgcGFnZVJlbmRlciA9ICgoKSA9PiB7XG4gICAgdmFyIHRpdGxlID0gXCJUbyBEbyBMaXN0XCJcbiAgICBjcmVhdGVUaXRsZSh0aXRsZSk7XG4gICAgY3JlYXRlUHJvamVjdEhvbGRlcigpO1xuICAgIHByb2plY3RMaXN0cygpO1xuICAgIGJ0blByb2plY3RBZGQoKTtcbiAgICBwcm9qZWN0TmFtZXMoKTtcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVUaXRsZSh0aXRsZSkge1xuICAgIGNvbnN0IHRpdGxlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVCb3guY2xhc3NMaXN0LmFkZCgndGl0bGVCb3gnKTtcbiAgICBtYWluQm94LmFwcGVuZCh0aXRsZUJveCk7XG4gICAgY29uc3QgYWN0dWFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aXRsZSk7XG4gICAgdGl0bGVCb3guYXBwZW5kQ2hpbGQoYWN0dWFsVGl0bGUpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEhvbGRlcigpIHtcbiAgICBhY3R1YWxTdHVmZi5jbGFzc0xpc3QuYWRkKCdhY3R1YWxTdHVmZicpO1xuXG4gICAgbWFpbkJveC5hcHBlbmQoYWN0dWFsU3R1ZmYpO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0TGlzdHMoKSB7XG4gICAgY29uc3QgcHJvamVjdE92ZXJ2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblxuICAgIHByb2plY3RPdmVydmlldy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0T3ZlcnZpZXcnKTtcblxuICAgIGFjdHVhbFN0dWZmLmFwcGVuZChwcm9qZWN0TGlzdCwgcHJvamVjdE92ZXJ2aWV3KTtcbn1cblxuZnVuY3Rpb24gYnRuUHJvamVjdEFkZCgpIHtcbiAgICBjb25zdCBidG5BZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5BZGQuY2xhc3NMaXN0LmFkZCgnYnRuQWRkJyk7XG4gICAgYnRuQWRkLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdFwiXG5cbiAgICBwcm9qZWN0TGlzdC5hcHBlbmQoYnRuQWRkKTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdE5hbWVzKCkge1xuICAgIGNvbnN0IGFjdHVhbFByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWN0dWFsUHJvamVjdHMuY2xhc3NMaXN0LmFkZCgnYWN0dWFsUHJvamVjdHMnKTtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmQoYWN0dWFsUHJvamVjdHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlUmVuZGVyOyIsImltcG9ydCBwYWdlUmVuZGVyIGZyb20gJy4vZG9tJztcbmltcG9ydCB7bmV3UHJvamVjdHN9IGZyb20gJy4vcHJvamVjdExvZ2ljJztcblxucGFnZVJlbmRlcigpO1xubmV3UHJvamVjdHMoKTtcbiIsImltcG9ydCB7bWFraW5nT2JqLCB0b2RvTGlzdEFycmF5LCBuZXdQcm9qZWN0fSBmcm9tICcuL3Byb2plY3RMb2dpYyc7XG5cbmxldCBtb2RhbFBsYWNlO1xubGV0IG1vZGFsRm9ybTtcbmxldCBpbnB1dEZvcm07XG5sZXQgdG9kb092ZXJWaWV3O1xubGV0IHRvZG9EZXRhaWxzO1xuY29uc3QgZGl2UHJvamVjdExpc3QgPSBbXTtcblxuY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9ICgpID0+IHtcbiAgaW5pdE1vZGFsKCk7XG4gIGlucHV0SW5pdCgpO1xufVxuXG5jb25zdCBpbml0TW9kYWwgPSAoKSA9PiB7XG4gIG1vZGFsRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2RhbFBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdHVhbFByb2plY3RzJyk7XG4gIG1vZGFsRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vZGFsQm94Jyk7XG4gIG1vZGFsUGxhY2UuYXBwZW5kKG1vZGFsRm9ybSk7XG5cbn1cblxuY29uc3QgaW5wdXRJbml0ID0gKCkgPT4ge1xuXG4gIGlucHV0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IGFkZGluZ1N0dWZmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGNhbmNlbFN0dWZmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBidXR0b25EaXYuc2V0QXR0cmlidXRlKCdpZCcsICdidXR0b25EaXYnKTtcbiAgXG4gIGlucHV0Rm9ybS5jbGFzc0xpc3QuYWRkKCdqdXN0SW5wdXQnKTtcbiAgaW5wdXRGb3JtLnNldEF0dHJpYnV0ZSgnbmFtZScsICdqdXN0SW5wdXQnKTtcbiAgXG4gIGFkZGluZ1N0dWZmLmNsYXNzTGlzdC5hZGQoJ2FkZGluZ1N0dWZmJyk7XG4gIGNhbmNlbFN0dWZmLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbGluZ1N0dWZmJyk7XG4gIFxuICBhZGRpbmdTdHVmZi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gIGNhbmNlbFN0dWZmLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgXG4gIG1vZGFsRm9ybS5hcHBlbmQoaW5wdXRGb3JtKTtcbiAgbW9kYWxGb3JtLmFwcGVuZChidXR0b25EaXYpO1xuICBidXR0b25EaXYuYXBwZW5kKGFkZGluZ1N0dWZmKTtcbiAgYnV0dG9uRGl2LmFwcGVuZChjYW5jZWxTdHVmZik7XG5cbiAgbW9kYWxGb3JtLmNsYXNzTGlzdC5hZGQoJ2lucHV0Rm9ybScpO1xuICBpbnB1dEZvcm0ucGxhY2Vob2xkZXIgPSBcIlByb2plY3QgTmFtZVwiO1xufTtcblxuY29uc3QgY3JlYXRlZFByb2plY3QgPSAoKSA9PiB7XG5cbiAgY29uc3QgbmV3UHJvamVjdENyZWF0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcHJvamVjdENyZWF0ZWRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gIGNvbnN0IHByb2plY3RDcmVhdGVkVHh0ID0gbmV3UHJvamVjdC5wcm9qZWN0TmFtZTtcblxuICBtb2RhbFBsYWNlLmFwcGVuZChuZXdQcm9qZWN0Q3JlYXRlZCk7XG4gIG5ld1Byb2plY3RDcmVhdGVkLmFwcGVuZChwcm9qZWN0Q3JlYXRlZFRpdGxlKTtcbiAgcHJvamVjdENyZWF0ZWRUaXRsZS5hcHBlbmQocHJvamVjdENyZWF0ZWRUeHQpO1xuICBuZXdQcm9qZWN0Q3JlYXRlZC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Q2xhc3MnKTtcbiAgZGl2UHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0Q3JlYXRlZCk7XG59O1xuXG5cbmNvbnN0IGZ1bm55RnVuY3Rpb24gPSAoKSA9PiB7XG4gIGRpdlByb2plY3RMaXN0LmZvckVhY2goY2xpY2thYmxlID0+IHtcbiAgICBjbGlja2FibGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGxldCBpbmR4TnVtID0gZGl2UHJvamVjdExpc3QuaW5kZXhPZihlLmN1cnJlbnRUYXJnZXQpO1xuICAgIGNvbnNvbGUubG9nKHRvZG9MaXN0QXJyYXlbaW5keE51bV0ucHJvamVjdE5hbWUpO1xuICAgIH0pO1xuICB9KTsgXG59O1xuXG5jb25zdCB0b2RvU2V0dGluZ3MgPSAoKSA9PiB7XG4gIHRvZG9EZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9EZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3RvZG9EZXRhaWxzJyk7XG4gIHRvZG9PdmVyVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0T3ZlcnZpZXcnKTtcbiAgdG9kb092ZXJWaWV3LmFwcGVuZCh0b2RvRGV0YWlscyk7XG59O1xuXG5jb25zdCBpbnNpZGVUb2RvID0gKGFyZykgPT4ge1xuICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpO1xuICB0b2RvRGV0YWlscy5hcHBlbmQodG9kb1RpdGxlKTtcbiAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gJyc7XG4gIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IGFyZztcbn1cblxuXG5jb25zdCBvYmpDcmVhdGlvbiA9ICgpID0+IHtcbiAgaWYoaW5wdXRGb3JtLnZhbHVlID09PSBcIlwiKSB7XG4gICAgYWxlcnQoXCJDQU5UIENSRUFURSBFTVBUWSBQUk9KRUNUXCIpO1xuICB9IGVsc2Uge2NyZWF0ZWRQcm9qZWN0KCl9O1xufTtcblxuZXhwb3J0IHtpbml0TW9kYWwsIGlucHV0SW5pdCwgY3JlYXRlTmV3UHJvamVjdCwgY3JlYXRlZFByb2plY3QsIG9iakNyZWF0aW9uLCBpbnB1dEZvcm0sIGZ1bm55RnVuY3Rpb24sIHRvZG9TZXR0aW5nc307IiwiaW1wb3J0IHtjcmVhdGVOZXdQcm9qZWN0LCBvYmpDcmVhdGlvbiwgaW5wdXRGb3JtLCBmdW5ueUZ1bmN0aW9uLCB0b2RvU2V0dGluZ3N9IGZyb20gJy4vcHJvamVjdExpc3REb20nO1xuXG5cbmNvbnN0IHRvZG9MaXN0QXJyYXkgPSBbXTtcbmxldCBuZXdQcm9qZWN0O1xubGV0IHRvZG9Ib2xkZXI7XG5cbmNvbnN0IG5ld1Byb2plY3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ0bkFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5BZGQnKTtcbiAgICBidG5BZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYoIXRvZG9Ib2xkZXIpe1xuICAgIGNyZWF0ZU5ld1Byb2plY3QoKTtcbiAgICBhZGRDYW5jZWxJbml0cygpO1xuICAgICAgICB9XG4gICAgfSlcblxufTtcblxuZnVuY3Rpb24gYWRkQ2FuY2VsSW5pdHMoKSB7XG4gICAgdG9kb0hvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbEJveCcpO1xuICAgIGNvbnN0IGNhbmNlbGluZ1N0dWZmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbGluZ1N0dWZmJyk7XG4gICAgY2FuY2VsaW5nU3R1ZmYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdG9kb0hvbGRlci5yZW1vdmUoKTtcbiAgICBhZGRDYW5jZWxJbml0cygpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWRkU3R1ZmZUb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkaW5nU3R1ZmYnKTtcbiAgICBhZGRTdHVmZlRvTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbWFraW5nT2JqKCk7XG4gICAgICAgIHRvZG9Ib2xkZXIucmVtb3ZlKCk7XG4gICAgICAgIG9iakNyZWF0aW9uKCk7XG4gICAgICAgIGNyZWF0ZU5ld1Byb2plY3QoKTtcbiAgICAgICAgYWRkQ2FuY2VsSW5pdHMoKTtcbiAgICAgICAgZnVubnlGdW5jdGlvbigpO1xuICAgIH0pO1xufVxuXG5jb25zdCBQcm9qZWN0c0ZhY3RvcnkgPSBmdW5jdGlvbihwcm9qZWN0TmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb2plY3ROYW1lXG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYWtpbmdPYmooKSB7XG4gICAgbmV3UHJvamVjdCA9IFByb2plY3RzRmFjdG9yeShpbnB1dEZvcm0udmFsdWUpO1xuICAgIHRvZG9MaXN0QXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbn07XG5cblxuZXhwb3J0IHtuZXdQcm9qZWN0cywgbWFraW5nT2JqLCB0b2RvTGlzdEFycmF5LCBuZXdQcm9qZWN0fTsiXSwic291cmNlUm9vdCI6IiJ9