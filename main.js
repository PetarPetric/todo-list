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
/*! exports provided: initModal, inputInit, createNewProject, createdProject, objCreation, inputForm, todoModalDetails, todoDetails, divProjectList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initModal", function() { return initModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputInit", function() { return inputInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewProject", function() { return createNewProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createdProject", function() { return createdProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objCreation", function() { return objCreation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputForm", function() { return inputForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoModalDetails", function() { return todoModalDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoDetails", function() { return todoDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divProjectList", function() { return divProjectList; });
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
newProjectCreated.setAttribute('id', _projectLogic__WEBPACK_IMPORTED_MODULE_0__["newProject"].projectName);
divProjectList.push(newProjectCreated);
};

// Everything thats inside Todo Modal //

const todoModalDetails = () => {
let todoTitle = document.createElement('h5');

const todoModal = () => {
todoDetails = document.createElement('div');
todoDetails.classList.add('todoDetails');
todoOverView = document.querySelector('.projectOverview');
todoOverView.append(todoDetails);
};

const insideTodo = (arg) => {
const cancelIcon = document.createElement('button');
const headerDiv = document.createElement('div');
cancelIcon.innerHTML = '<i class="far fa-window-close"></i>'
cancelIcon.setAttribute('id', 'cancelIcon');
headerDiv.setAttribute('id', 'modalHeader');
todoDetails.append(headerDiv);
headerDiv.append(todoTitle);
headerDiv.append(cancelIcon);
todoTitle.textContent = _projectLogic__WEBPACK_IMPORTED_MODULE_0__["todoListArray"][arg].projectName;

};

const removeProject = (delArg) => {
todoDetails.remove();
_projectLogic__WEBPACK_IMPORTED_MODULE_0__["todoListArray"].splice(delArg, 1);
divProjectList.splice(delArg, 1);
console.log(_projectLogic__WEBPACK_IMPORTED_MODULE_0__["todoListArray"]);
console.log(divProjectList);
};

const cleanInsideTodo = () => {
todoDetails.remove();
};

return {
insideTodo, cleanInsideTodo, todoModal, removeProject
};
};


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
/*! exports provided: newProjects, todoListArray, newProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newProjects", function() { return newProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoListArray", function() { return todoListArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newProject", function() { return newProject; });
/* harmony import */ var _projectListDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectListDom */ "./src/projectListDom.js");


const todoListArray = [];
let newProject;
let todoHolder;

const selectingProject = () => {
_projectListDom__WEBPACK_IMPORTED_MODULE_0__["divProjectList"].forEach(clickable => {
clickable.addEventListener('click', (e) => {
let indexNum = _projectListDom__WEBPACK_IMPORTED_MODULE_0__["divProjectList"].indexOf(e.currentTarget);
let newArgument = document.getElementById(e.target.parentNode.textContent);
if(!_projectListDom__WEBPACK_IMPORTED_MODULE_0__["todoDetails"]) {
Object(_projectListDom__WEBPACK_IMPORTED_MODULE_0__["todoModalDetails"])().todoModal();
Object(_projectListDom__WEBPACK_IMPORTED_MODULE_0__["todoModalDetails"])().insideTodo(indexNum);
} else {
Object(_projectListDom__WEBPACK_IMPORTED_MODULE_0__["todoModalDetails"])().cleanInsideTodo();
Object(_projectListDom__WEBPACK_IMPORTED_MODULE_0__["todoModalDetails"])().todoModal();
Object(_projectListDom__WEBPACK_IMPORTED_MODULE_0__["todoModalDetails"])().insideTodo(indexNum);
};
removeButton(indexNum, newArgument);
});
});
};


// remove button
const removeButton = (delArg, delArg2 = 0) => {
const cancelIcon = document.querySelector('#cancelIcon');
cancelIcon.addEventListener('click', () => {
let newDeletionThing = document.getElementById(delArg2.textContent)
console.log(newDeletionThing)
newDeletionThing.remove()
Object(_projectListDom__WEBPACK_IMPORTED_MODULE_0__["todoModalDetails"])().removeProject(delArg);
});
};


// creates new Projects
const newProjects = () => {
const btnAdd = document.querySelector('.btnAdd');
btnAdd.addEventListener('click', () => {
if(!todoHolder){
Object(_projectListDom__WEBPACK_IMPORTED_MODULE_0__["createNewProject"])();
addCancelInits();
};
});
};
// adding and canceling Todos
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
    selectingProject();
    });

  };

  const ProjectsFactory = function(projectName) {

    return {
      projectName
  };
};

function makingObj() {
newProject = ProjectsFactory(_projectListDom__WEBPACK_IMPORTED_MODULE_0__["inputForm"].value);
todoListArray.push(newProject);
};




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3RMaXN0RG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0TG9naWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUseUVBQVUsRTs7Ozs7Ozs7Ozs7O0FDbkR6QjtBQUFBO0FBQUE7QUFBK0I7QUFDWTs7QUFFM0Msb0RBQVU7QUFDVixpRUFBVzs7Ozs7Ozs7Ozs7OztBQ0pYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUQ7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLHdEQUFVOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx3REFBVTtBQUMvQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyREFBYTs7QUFFckM7O0FBRUE7QUFDQTtBQUNBLDJEQUFhO0FBQ2I7QUFDQSxZQUFZLDJEQUFhO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU87QUFDUjs7Ozs7Ozs7Ozs7Ozs7QUM5R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5SDs7QUFFekg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQWM7QUFDZDtBQUNBLGVBQWUsOERBQWM7QUFDN0I7QUFDQSxJQUFJLDJEQUFXO0FBQ2Ysd0VBQWdCO0FBQ2hCLHdFQUFnQjtBQUNoQixDQUFDO0FBQ0Qsd0VBQWdCO0FBQ2hCLHdFQUFnQjtBQUNoQix3RUFBZ0I7QUFDaEI7QUFDQTtBQUNBLENBQUM7QUFDRCxDQUFDO0FBQ0Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQWdCO0FBQ2hCLENBQUM7QUFDRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUFnQjtBQUNoQjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtRUFBVztBQUNmLElBQUksd0VBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLHlEQUFTO0FBQ3RDO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy9HbG9iYWwgc2NvcGUvL1xuY29uc3QgbWFpbkJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5jb25zdCBhY3R1YWxTdHVmZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgcGFnZVJlbmRlciA9ICgoKSA9PiB7XG4gICAgdmFyIHRpdGxlID0gXCJUbyBEbyBMaXN0XCJcbiAgICBjcmVhdGVUaXRsZSh0aXRsZSk7XG4gICAgY3JlYXRlUHJvamVjdEhvbGRlcigpO1xuICAgIHByb2plY3RMaXN0cygpO1xuICAgIGJ0blByb2plY3RBZGQoKTtcbiAgICBwcm9qZWN0TmFtZXMoKTtcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVUaXRsZSh0aXRsZSkge1xuICAgIGNvbnN0IHRpdGxlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVCb3guY2xhc3NMaXN0LmFkZCgndGl0bGVCb3gnKTtcbiAgICBtYWluQm94LmFwcGVuZCh0aXRsZUJveCk7XG4gICAgY29uc3QgYWN0dWFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aXRsZSk7XG4gICAgdGl0bGVCb3guYXBwZW5kQ2hpbGQoYWN0dWFsVGl0bGUpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEhvbGRlcigpIHtcbiAgICBhY3R1YWxTdHVmZi5jbGFzc0xpc3QuYWRkKCdhY3R1YWxTdHVmZicpO1xuXG4gICAgbWFpbkJveC5hcHBlbmQoYWN0dWFsU3R1ZmYpO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0TGlzdHMoKSB7XG4gICAgY29uc3QgcHJvamVjdE92ZXJ2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblxuICAgIHByb2plY3RPdmVydmlldy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0T3ZlcnZpZXcnKTtcblxuICAgIGFjdHVhbFN0dWZmLmFwcGVuZChwcm9qZWN0TGlzdCwgcHJvamVjdE92ZXJ2aWV3KTtcbn1cblxuZnVuY3Rpb24gYnRuUHJvamVjdEFkZCgpIHtcbiAgICBjb25zdCBidG5BZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5BZGQuY2xhc3NMaXN0LmFkZCgnYnRuQWRkJyk7XG4gICAgYnRuQWRkLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdFwiXG5cbiAgICBwcm9qZWN0TGlzdC5hcHBlbmQoYnRuQWRkKTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdE5hbWVzKCkge1xuICAgIGNvbnN0IGFjdHVhbFByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWN0dWFsUHJvamVjdHMuY2xhc3NMaXN0LmFkZCgnYWN0dWFsUHJvamVjdHMnKTtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmQoYWN0dWFsUHJvamVjdHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlUmVuZGVyOyIsImltcG9ydCBwYWdlUmVuZGVyIGZyb20gJy4vZG9tJztcbmltcG9ydCB7bmV3UHJvamVjdHN9IGZyb20gJy4vcHJvamVjdExvZ2ljJztcblxucGFnZVJlbmRlcigpO1xubmV3UHJvamVjdHMoKTtcbiIsImltcG9ydCB7dG9kb0xpc3RBcnJheSwgbmV3UHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0TG9naWMnO1xuXG5sZXQgbW9kYWxQbGFjZTtcbmxldCBtb2RhbEZvcm07XG5sZXQgaW5wdXRGb3JtO1xubGV0IHRvZG9PdmVyVmlldztcbmxldCB0b2RvRGV0YWlscztcblxuY29uc3QgZGl2UHJvamVjdExpc3QgPSBbXTtcblxuY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9ICgpID0+IHtcbmluaXRNb2RhbCgpO1xuaW5wdXRJbml0KCk7XG59XG5cbmNvbnN0IGluaXRNb2RhbCA9ICgpID0+IHtcbm1vZGFsRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubW9kYWxQbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3R1YWxQcm9qZWN0cycpO1xubW9kYWxGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW9kYWxCb3gnKTtcbm1vZGFsUGxhY2UuYXBwZW5kKG1vZGFsRm9ybSk7XG5cbn1cblxuY29uc3QgaW5wdXRJbml0ID0gKCkgPT4ge1xuXG5pbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuY29uc3QgYWRkaW5nU3R1ZmYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNvbnN0IGNhbmNlbFN0dWZmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJ1dHRvbkRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J1dHRvbkRpdicpO1xuXG5pbnB1dEZvcm0uY2xhc3NMaXN0LmFkZCgnanVzdElucHV0Jyk7XG5pbnB1dEZvcm0uc2V0QXR0cmlidXRlKCduYW1lJywgJ2p1c3RJbnB1dCcpO1xuXG5hZGRpbmdTdHVmZi5jbGFzc0xpc3QuYWRkKCdhZGRpbmdTdHVmZicpO1xuY2FuY2VsU3R1ZmYuY2xhc3NMaXN0LmFkZCgnY2FuY2VsaW5nU3R1ZmYnKTtcblxuYWRkaW5nU3R1ZmYudGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuY2FuY2VsU3R1ZmYudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG5tb2RhbEZvcm0uYXBwZW5kKGlucHV0Rm9ybSk7XG5tb2RhbEZvcm0uYXBwZW5kKGJ1dHRvbkRpdik7XG5idXR0b25EaXYuYXBwZW5kKGFkZGluZ1N0dWZmKTtcbmJ1dHRvbkRpdi5hcHBlbmQoY2FuY2VsU3R1ZmYpO1xuXG5tb2RhbEZvcm0uY2xhc3NMaXN0LmFkZCgnaW5wdXRGb3JtJyk7XG5pbnB1dEZvcm0ucGxhY2Vob2xkZXIgPSBcIlByb2plY3QgTmFtZVwiO1xufTtcblxuY29uc3QgY3JlYXRlZFByb2plY3QgPSAoKSA9PiB7XG5cbmNvbnN0IG5ld1Byb2plY3RDcmVhdGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBwcm9qZWN0Q3JlYXRlZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbmNvbnN0IHByb2plY3RDcmVhdGVkVHh0ID0gbmV3UHJvamVjdC5wcm9qZWN0TmFtZTtcblxubW9kYWxQbGFjZS5hcHBlbmQobmV3UHJvamVjdENyZWF0ZWQpO1xubmV3UHJvamVjdENyZWF0ZWQuYXBwZW5kKHByb2plY3RDcmVhdGVkVGl0bGUpO1xucHJvamVjdENyZWF0ZWRUaXRsZS5hcHBlbmQocHJvamVjdENyZWF0ZWRUeHQpO1xubmV3UHJvamVjdENyZWF0ZWQuY2xhc3NMaXN0LmFkZCgncHJvamVjdENsYXNzJyk7XG5uZXdQcm9qZWN0Q3JlYXRlZC5zZXRBdHRyaWJ1dGUoJ2lkJywgbmV3UHJvamVjdC5wcm9qZWN0TmFtZSk7XG5kaXZQcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3RDcmVhdGVkKTtcbn07XG5cbi8vIEV2ZXJ5dGhpbmcgdGhhdHMgaW5zaWRlIFRvZG8gTW9kYWwgLy9cblxuY29uc3QgdG9kb01vZGFsRGV0YWlscyA9ICgpID0+IHtcbmxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuXG5jb25zdCB0b2RvTW9kYWwgPSAoKSA9PiB7XG50b2RvRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudG9kb0RldGFpbHMuY2xhc3NMaXN0LmFkZCgndG9kb0RldGFpbHMnKTtcbnRvZG9PdmVyVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0T3ZlcnZpZXcnKTtcbnRvZG9PdmVyVmlldy5hcHBlbmQodG9kb0RldGFpbHMpO1xufTtcblxuY29uc3QgaW5zaWRlVG9kbyA9IChhcmcpID0+IHtcbmNvbnN0IGNhbmNlbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY2FuY2VsSWNvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXIgZmEtd2luZG93LWNsb3NlXCI+PC9pPidcbmNhbmNlbEljb24uc2V0QXR0cmlidXRlKCdpZCcsICdjYW5jZWxJY29uJyk7XG5oZWFkZXJEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdtb2RhbEhlYWRlcicpO1xudG9kb0RldGFpbHMuYXBwZW5kKGhlYWRlckRpdik7XG5oZWFkZXJEaXYuYXBwZW5kKHRvZG9UaXRsZSk7XG5oZWFkZXJEaXYuYXBwZW5kKGNhbmNlbEljb24pO1xudG9kb1RpdGxlLnRleHRDb250ZW50ID0gdG9kb0xpc3RBcnJheVthcmddLnByb2plY3ROYW1lO1xuXG59O1xuXG5jb25zdCByZW1vdmVQcm9qZWN0ID0gKGRlbEFyZykgPT4ge1xudG9kb0RldGFpbHMucmVtb3ZlKCk7XG50b2RvTGlzdEFycmF5LnNwbGljZShkZWxBcmcsIDEpO1xuZGl2UHJvamVjdExpc3Quc3BsaWNlKGRlbEFyZywgMSk7XG5jb25zb2xlLmxvZyh0b2RvTGlzdEFycmF5KTtcbmNvbnNvbGUubG9nKGRpdlByb2plY3RMaXN0KTtcbn07XG5cbmNvbnN0IGNsZWFuSW5zaWRlVG9kbyA9ICgpID0+IHtcbnRvZG9EZXRhaWxzLnJlbW92ZSgpO1xufTtcblxucmV0dXJuIHtcbmluc2lkZVRvZG8sIGNsZWFuSW5zaWRlVG9kbywgdG9kb01vZGFsLCByZW1vdmVQcm9qZWN0XG59O1xufTtcblxuXG5jb25zdCBvYmpDcmVhdGlvbiA9ICgpID0+IHtcbmlmKGlucHV0Rm9ybS52YWx1ZSA9PT0gXCJcIikge1xuYWxlcnQoXCJDQU5UIENSRUFURSBFTVBUWSBQUk9KRUNUXCIpO1xufSBlbHNlIHtjcmVhdGVkUHJvamVjdCgpfTtcbn07XG5cbmV4cG9ydCB7aW5pdE1vZGFsLCBpbnB1dEluaXQsIGNyZWF0ZU5ld1Byb2plY3QsIGNyZWF0ZWRQcm9qZWN0LCBvYmpDcmVhdGlvbiwgaW5wdXRGb3JtLCB0b2RvTW9kYWxEZXRhaWxzLCB0b2RvRGV0YWlscywgZGl2UHJvamVjdExpc3R9OyIsImltcG9ydCB7Y3JlYXRlTmV3UHJvamVjdCwgb2JqQ3JlYXRpb24sIGlucHV0Rm9ybSwgdG9kb01vZGFsRGV0YWlscywgdG9kb0RldGFpbHMsIGRpdlByb2plY3RMaXN0fSBmcm9tICcuL3Byb2plY3RMaXN0RG9tJztcblxuY29uc3QgdG9kb0xpc3RBcnJheSA9IFtdO1xubGV0IG5ld1Byb2plY3Q7XG5sZXQgdG9kb0hvbGRlcjtcblxuY29uc3Qgc2VsZWN0aW5nUHJvamVjdCA9ICgpID0+IHtcbmRpdlByb2plY3RMaXN0LmZvckVhY2goY2xpY2thYmxlID0+IHtcbmNsaWNrYWJsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5sZXQgaW5kZXhOdW0gPSBkaXZQcm9qZWN0TGlzdC5pbmRleE9mKGUuY3VycmVudFRhcmdldCk7XG5sZXQgbmV3QXJndW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlLnRhcmdldC5wYXJlbnROb2RlLnRleHRDb250ZW50KTtcbmlmKCF0b2RvRGV0YWlscykge1xudG9kb01vZGFsRGV0YWlscygpLnRvZG9Nb2RhbCgpO1xudG9kb01vZGFsRGV0YWlscygpLmluc2lkZVRvZG8oaW5kZXhOdW0pO1xufSBlbHNlIHtcbnRvZG9Nb2RhbERldGFpbHMoKS5jbGVhbkluc2lkZVRvZG8oKTtcbnRvZG9Nb2RhbERldGFpbHMoKS50b2RvTW9kYWwoKTtcbnRvZG9Nb2RhbERldGFpbHMoKS5pbnNpZGVUb2RvKGluZGV4TnVtKTtcbn07XG5yZW1vdmVCdXR0b24oaW5kZXhOdW0sIG5ld0FyZ3VtZW50KTtcbn0pO1xufSk7XG59O1xuXG5cbi8vIHJlbW92ZSBidXR0b25cbmNvbnN0IHJlbW92ZUJ1dHRvbiA9IChkZWxBcmcsIGRlbEFyZzIgPSAwKSA9PiB7XG5jb25zdCBjYW5jZWxJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbEljb24nKTtcbmNhbmNlbEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5sZXQgbmV3RGVsZXRpb25UaGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlbEFyZzIudGV4dENvbnRlbnQpXG5jb25zb2xlLmxvZyhuZXdEZWxldGlvblRoaW5nKVxubmV3RGVsZXRpb25UaGluZy5yZW1vdmUoKVxudG9kb01vZGFsRGV0YWlscygpLnJlbW92ZVByb2plY3QoZGVsQXJnKTtcbn0pO1xufTtcblxuXG4vLyBjcmVhdGVzIG5ldyBQcm9qZWN0c1xuY29uc3QgbmV3UHJvamVjdHMgPSAoKSA9PiB7XG5jb25zdCBidG5BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuQWRkJyk7XG5idG5BZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5pZighdG9kb0hvbGRlcil7XG5jcmVhdGVOZXdQcm9qZWN0KCk7XG5hZGRDYW5jZWxJbml0cygpO1xufTtcbn0pO1xufTtcbi8vIGFkZGluZyBhbmQgY2FuY2VsaW5nIFRvZG9zXG5mdW5jdGlvbiBhZGRDYW5jZWxJbml0cygpIHtcbiAgdG9kb0hvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbEJveCcpO1xuICBjb25zdCBjYW5jZWxpbmdTdHVmZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWxpbmdTdHVmZicpO1xuICBjYW5jZWxpbmdTdHVmZi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2RvSG9sZGVyLnJlbW92ZSgpO1xuICAgIGFkZENhbmNlbEluaXRzKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGFkZFN0dWZmVG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZGluZ1N0dWZmJyk7XG4gIGFkZFN0dWZmVG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1ha2luZ09iaigpO1xuICAgIHRvZG9Ib2xkZXIucmVtb3ZlKCk7XG4gICAgb2JqQ3JlYXRpb24oKTtcbiAgICBjcmVhdGVOZXdQcm9qZWN0KCk7XG4gICAgYWRkQ2FuY2VsSW5pdHMoKTtcbiAgICBzZWxlY3RpbmdQcm9qZWN0KCk7XG4gICAgfSk7XG5cbiAgfTtcblxuICBjb25zdCBQcm9qZWN0c0ZhY3RvcnkgPSBmdW5jdGlvbihwcm9qZWN0TmFtZSkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2plY3ROYW1lXG4gIH07XG59O1xuXG5mdW5jdGlvbiBtYWtpbmdPYmooKSB7XG5uZXdQcm9qZWN0ID0gUHJvamVjdHNGYWN0b3J5KGlucHV0Rm9ybS52YWx1ZSk7XG50b2RvTGlzdEFycmF5LnB1c2gobmV3UHJvamVjdCk7XG59O1xuXG5cbmV4cG9ydCB7bmV3UHJvamVjdHMsIHRvZG9MaXN0QXJyYXksIG5ld1Byb2plY3R9OyJdLCJzb3VyY2VSb290IjoiIn0=