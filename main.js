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
cancelIcon.innerHTML = ''
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
const removeButton = (delArg, delArg2) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3RMaXN0RG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0TG9naWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUseUVBQVUsRTs7Ozs7Ozs7Ozs7O0FDbkR6QjtBQUFBO0FBQUE7QUFBK0I7QUFDWTs7QUFFM0Msb0RBQVU7QUFDVixpRUFBVzs7Ozs7Ozs7Ozs7OztBQ0pYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUQ7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLHdEQUFVOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx3REFBVTtBQUMvQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyREFBYTs7QUFFckM7O0FBRUE7QUFDQTtBQUNBLDJEQUFhO0FBQ2I7QUFDQSxZQUFZLDJEQUFhO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU87QUFDUjs7Ozs7Ozs7Ozs7Ozs7QUM5R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5SDs7QUFFekg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQWM7QUFDZDtBQUNBLGVBQWUsOERBQWM7QUFDN0I7QUFDQSxJQUFJLDJEQUFXO0FBQ2Ysd0VBQWdCO0FBQ2hCLHdFQUFnQjtBQUNoQixDQUFDO0FBQ0Qsd0VBQWdCO0FBQ2hCLHdFQUFnQjtBQUNoQix3RUFBZ0I7QUFDaEI7QUFDQTtBQUNBLENBQUM7QUFDRCxDQUFDO0FBQ0Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQWdCO0FBQ2hCLENBQUM7QUFDRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUFnQjtBQUNoQjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQVc7QUFDWCx3RUFBZ0I7QUFDaEI7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2Qix5REFBUztBQUN0QztBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vR2xvYmFsIHNjb3BlLy9cbmNvbnN0IG1haW5Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuY29uc3QgYWN0dWFsU3R1ZmYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmNvbnN0IHBhZ2VSZW5kZXIgPSAoKCkgPT4ge1xuICAgIHZhciB0aXRsZSA9IFwiVG8gRG8gTGlzdFwiXG4gICAgY3JlYXRlVGl0bGUodGl0bGUpO1xuICAgIGNyZWF0ZVByb2plY3RIb2xkZXIoKTtcbiAgICBwcm9qZWN0TGlzdHMoKTtcbiAgICBidG5Qcm9qZWN0QWRkKCk7XG4gICAgcHJvamVjdE5hbWVzKCk7XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlVGl0bGUodGl0bGUpIHtcbiAgICBjb25zdCB0aXRsZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlQm94LmNsYXNzTGlzdC5hZGQoJ3RpdGxlQm94Jyk7XG4gICAgbWFpbkJveC5hcHBlbmQodGl0bGVCb3gpO1xuICAgIGNvbnN0IGFjdHVhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGl0bGUpO1xuICAgIHRpdGxlQm94LmFwcGVuZENoaWxkKGFjdHVhbFRpdGxlKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RIb2xkZXIoKSB7XG4gICAgYWN0dWFsU3R1ZmYuY2xhc3NMaXN0LmFkZCgnYWN0dWFsU3R1ZmYnKTtcblxuICAgIG1haW5Cb3guYXBwZW5kKGFjdHVhbFN0dWZmKTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdExpc3RzKCkge1xuICAgIGNvbnN0IHByb2plY3RPdmVydmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cbiAgICBwcm9qZWN0T3ZlcnZpZXcuY2xhc3NMaXN0LmFkZCgncHJvamVjdE92ZXJ2aWV3Jyk7XG5cbiAgICBhY3R1YWxTdHVmZi5hcHBlbmQocHJvamVjdExpc3QsIHByb2plY3RPdmVydmlldyk7XG59XG5cbmZ1bmN0aW9uIGJ0blByb2plY3RBZGQoKSB7XG4gICAgY29uc3QgYnRuQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuQWRkLmNsYXNzTGlzdC5hZGQoJ2J0bkFkZCcpO1xuICAgIGJ0bkFkZC50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3RcIlxuXG4gICAgcHJvamVjdExpc3QuYXBwZW5kKGJ0bkFkZCk7XG59XG5cbmZ1bmN0aW9uIHByb2plY3ROYW1lcygpIHtcbiAgICBjb25zdCBhY3R1YWxQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFjdHVhbFByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ2FjdHVhbFByb2plY3RzJyk7XG4gICAgcHJvamVjdExpc3QuYXBwZW5kKGFjdHVhbFByb2plY3RzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZVJlbmRlcjsiLCJpbXBvcnQgcGFnZVJlbmRlciBmcm9tICcuL2RvbSc7XG5pbXBvcnQge25ld1Byb2plY3RzfSBmcm9tICcuL3Byb2plY3RMb2dpYyc7XG5cbnBhZ2VSZW5kZXIoKTtcbm5ld1Byb2plY3RzKCk7XG4iLCJpbXBvcnQge3RvZG9MaXN0QXJyYXksIG5ld1Byb2plY3R9IGZyb20gJy4vcHJvamVjdExvZ2ljJztcblxubGV0IG1vZGFsUGxhY2U7XG5sZXQgbW9kYWxGb3JtO1xubGV0IGlucHV0Rm9ybTtcbmxldCB0b2RvT3ZlclZpZXc7XG5sZXQgdG9kb0RldGFpbHM7XG5cbmNvbnN0IGRpdlByb2plY3RMaXN0ID0gW107XG5cbmNvbnN0IGNyZWF0ZU5ld1Byb2plY3QgPSAoKSA9PiB7XG5pbml0TW9kYWwoKTtcbmlucHV0SW5pdCgpO1xufVxuXG5jb25zdCBpbml0TW9kYWwgPSAoKSA9PiB7XG5tb2RhbEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1vZGFsUGxhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0dWFsUHJvamVjdHMnKTtcbm1vZGFsRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vZGFsQm94Jyk7XG5tb2RhbFBsYWNlLmFwcGVuZChtb2RhbEZvcm0pO1xuXG59XG5cbmNvbnN0IGlucHV0SW5pdCA9ICgpID0+IHtcblxuaW5wdXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmNvbnN0IGFkZGluZ1N0dWZmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jb25zdCBjYW5jZWxTdHVmZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5idXR0b25EaXYuc2V0QXR0cmlidXRlKCdpZCcsICdidXR0b25EaXYnKTtcblxuaW5wdXRGb3JtLmNsYXNzTGlzdC5hZGQoJ2p1c3RJbnB1dCcpO1xuaW5wdXRGb3JtLnNldEF0dHJpYnV0ZSgnbmFtZScsICdqdXN0SW5wdXQnKTtcblxuYWRkaW5nU3R1ZmYuY2xhc3NMaXN0LmFkZCgnYWRkaW5nU3R1ZmYnKTtcbmNhbmNlbFN0dWZmLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbGluZ1N0dWZmJyk7XG5cbmFkZGluZ1N0dWZmLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbmNhbmNlbFN0dWZmLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxubW9kYWxGb3JtLmFwcGVuZChpbnB1dEZvcm0pO1xubW9kYWxGb3JtLmFwcGVuZChidXR0b25EaXYpO1xuYnV0dG9uRGl2LmFwcGVuZChhZGRpbmdTdHVmZik7XG5idXR0b25EaXYuYXBwZW5kKGNhbmNlbFN0dWZmKTtcblxubW9kYWxGb3JtLmNsYXNzTGlzdC5hZGQoJ2lucHV0Rm9ybScpO1xuaW5wdXRGb3JtLnBsYWNlaG9sZGVyID0gXCJQcm9qZWN0IE5hbWVcIjtcbn07XG5cbmNvbnN0IGNyZWF0ZWRQcm9qZWN0ID0gKCkgPT4ge1xuXG5jb25zdCBuZXdQcm9qZWN0Q3JlYXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgcHJvamVjdENyZWF0ZWRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG5jb25zdCBwcm9qZWN0Q3JlYXRlZFR4dCA9IG5ld1Byb2plY3QucHJvamVjdE5hbWU7XG5cbm1vZGFsUGxhY2UuYXBwZW5kKG5ld1Byb2plY3RDcmVhdGVkKTtcbm5ld1Byb2plY3RDcmVhdGVkLmFwcGVuZChwcm9qZWN0Q3JlYXRlZFRpdGxlKTtcbnByb2plY3RDcmVhdGVkVGl0bGUuYXBwZW5kKHByb2plY3RDcmVhdGVkVHh0KTtcbm5ld1Byb2plY3RDcmVhdGVkLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RDbGFzcycpO1xubmV3UHJvamVjdENyZWF0ZWQuc2V0QXR0cmlidXRlKCdpZCcsIG5ld1Byb2plY3QucHJvamVjdE5hbWUpO1xuZGl2UHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0Q3JlYXRlZCk7XG59O1xuXG4vLyBFdmVyeXRoaW5nIHRoYXRzIGluc2lkZSBUb2RvIE1vZGFsIC8vXG5cbmNvbnN0IHRvZG9Nb2RhbERldGFpbHMgPSAoKSA9PiB7XG5sZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcblxuY29uc3QgdG9kb01vZGFsID0gKCkgPT4ge1xudG9kb0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRvZG9EZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3RvZG9EZXRhaWxzJyk7XG50b2RvT3ZlclZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdE92ZXJ2aWV3Jyk7XG50b2RvT3ZlclZpZXcuYXBwZW5kKHRvZG9EZXRhaWxzKTtcbn07XG5cbmNvbnN0IGluc2lkZVRvZG8gPSAoYXJnKSA9PiB7XG5jb25zdCBjYW5jZWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNhbmNlbEljb24uaW5uZXJIVE1MID0gJydcbmNhbmNlbEljb24uc2V0QXR0cmlidXRlKCdpZCcsICdjYW5jZWxJY29uJyk7XG5oZWFkZXJEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdtb2RhbEhlYWRlcicpO1xudG9kb0RldGFpbHMuYXBwZW5kKGhlYWRlckRpdik7XG5oZWFkZXJEaXYuYXBwZW5kKHRvZG9UaXRsZSk7XG5oZWFkZXJEaXYuYXBwZW5kKGNhbmNlbEljb24pO1xudG9kb1RpdGxlLnRleHRDb250ZW50ID0gdG9kb0xpc3RBcnJheVthcmddLnByb2plY3ROYW1lO1xuXG59O1xuXG5jb25zdCByZW1vdmVQcm9qZWN0ID0gKGRlbEFyZykgPT4ge1xudG9kb0RldGFpbHMucmVtb3ZlKCk7XG50b2RvTGlzdEFycmF5LnNwbGljZShkZWxBcmcsIDEpO1xuZGl2UHJvamVjdExpc3Quc3BsaWNlKGRlbEFyZywgMSk7XG5jb25zb2xlLmxvZyh0b2RvTGlzdEFycmF5KTtcbmNvbnNvbGUubG9nKGRpdlByb2plY3RMaXN0KTtcbn07XG5cbmNvbnN0IGNsZWFuSW5zaWRlVG9kbyA9ICgpID0+IHtcbnRvZG9EZXRhaWxzLnJlbW92ZSgpO1xufTtcblxucmV0dXJuIHtcbmluc2lkZVRvZG8sIGNsZWFuSW5zaWRlVG9kbywgdG9kb01vZGFsLCByZW1vdmVQcm9qZWN0XG59O1xufTtcblxuXG5jb25zdCBvYmpDcmVhdGlvbiA9ICgpID0+IHtcbmlmKGlucHV0Rm9ybS52YWx1ZSA9PT0gXCJcIikge1xuYWxlcnQoXCJDQU5UIENSRUFURSBFTVBUWSBQUk9KRUNUXCIpO1xufSBlbHNlIHtjcmVhdGVkUHJvamVjdCgpfTtcbn07XG5cbmV4cG9ydCB7aW5pdE1vZGFsLCBpbnB1dEluaXQsIGNyZWF0ZU5ld1Byb2plY3QsIGNyZWF0ZWRQcm9qZWN0LCBvYmpDcmVhdGlvbiwgaW5wdXRGb3JtLCB0b2RvTW9kYWxEZXRhaWxzLCB0b2RvRGV0YWlscywgZGl2UHJvamVjdExpc3R9OyIsImltcG9ydCB7Y3JlYXRlTmV3UHJvamVjdCwgb2JqQ3JlYXRpb24sIGlucHV0Rm9ybSwgdG9kb01vZGFsRGV0YWlscywgdG9kb0RldGFpbHMsIGRpdlByb2plY3RMaXN0fSBmcm9tICcuL3Byb2plY3RMaXN0RG9tJztcblxuY29uc3QgdG9kb0xpc3RBcnJheSA9IFtdO1xubGV0IG5ld1Byb2plY3Q7XG5sZXQgdG9kb0hvbGRlcjtcblxuY29uc3Qgc2VsZWN0aW5nUHJvamVjdCA9ICgpID0+IHtcbmRpdlByb2plY3RMaXN0LmZvckVhY2goY2xpY2thYmxlID0+IHtcbmNsaWNrYWJsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5sZXQgaW5kZXhOdW0gPSBkaXZQcm9qZWN0TGlzdC5pbmRleE9mKGUuY3VycmVudFRhcmdldCk7XG5sZXQgbmV3QXJndW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlLnRhcmdldC5wYXJlbnROb2RlLnRleHRDb250ZW50KTtcbmlmKCF0b2RvRGV0YWlscykge1xudG9kb01vZGFsRGV0YWlscygpLnRvZG9Nb2RhbCgpO1xudG9kb01vZGFsRGV0YWlscygpLmluc2lkZVRvZG8oaW5kZXhOdW0pO1xufSBlbHNlIHtcbnRvZG9Nb2RhbERldGFpbHMoKS5jbGVhbkluc2lkZVRvZG8oKTtcbnRvZG9Nb2RhbERldGFpbHMoKS50b2RvTW9kYWwoKTtcbnRvZG9Nb2RhbERldGFpbHMoKS5pbnNpZGVUb2RvKGluZGV4TnVtKTtcbn07XG5yZW1vdmVCdXR0b24oaW5kZXhOdW0sIG5ld0FyZ3VtZW50KTtcbn0pO1xufSk7XG59O1xuXG5cbi8vIHJlbW92ZSBidXR0b25cbmNvbnN0IHJlbW92ZUJ1dHRvbiA9IChkZWxBcmcsIGRlbEFyZzIpID0+IHtcbmNvbnN0IGNhbmNlbEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsSWNvbicpO1xuY2FuY2VsSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbmxldCBuZXdEZWxldGlvblRoaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVsQXJnMi50ZXh0Q29udGVudClcbmNvbnNvbGUubG9nKG5ld0RlbGV0aW9uVGhpbmcpXG5uZXdEZWxldGlvblRoaW5nLnJlbW92ZSgpXG50b2RvTW9kYWxEZXRhaWxzKCkucmVtb3ZlUHJvamVjdChkZWxBcmcpO1xufSk7XG59O1xuXG5cbi8vIGNyZWF0ZXMgbmV3IFByb2plY3RzXG5jb25zdCBuZXdQcm9qZWN0cyA9ICgpID0+IHtcbmNvbnN0IGJ0bkFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5BZGQnKTtcbmJ0bkFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbmlmKCF0b2RvSG9sZGVyKXtcbmNyZWF0ZU5ld1Byb2plY3QoKTtcbmFkZENhbmNlbEluaXRzKCk7XG59O1xufSk7XG59O1xuLy8gYWRkaW5nIGFuZCBjYW5jZWxpbmcgVG9kb3NcbmZ1bmN0aW9uIGFkZENhbmNlbEluaXRzKCkge1xudG9kb0hvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbEJveCcpO1xuY29uc3QgY2FuY2VsaW5nU3R1ZmYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsaW5nU3R1ZmYnKTtcbmNhbmNlbGluZ1N0dWZmLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xudG9kb0hvbGRlci5yZW1vdmUoKTtcbmFkZENhbmNlbEluaXRzKCk7XG59KTtcblxuY29uc3QgYWRkU3R1ZmZUb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkaW5nU3R1ZmYnKTtcbmFkZFN0dWZmVG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xubWFraW5nT2JqKCk7XG50b2RvSG9sZGVyLnJlbW92ZSgpO1xub2JqQ3JlYXRpb24oKTtcbmNyZWF0ZU5ld1Byb2plY3QoKTtcbmFkZENhbmNlbEluaXRzKCk7XG5zZWxlY3RpbmdQcm9qZWN0KCk7XG59KTtcblxufVxuXG5jb25zdCBQcm9qZWN0c0ZhY3RvcnkgPSBmdW5jdGlvbihwcm9qZWN0TmFtZSkge1xucmV0dXJuIHtcbnByb2plY3ROYW1lXG59XG59XG5cbmZ1bmN0aW9uIG1ha2luZ09iaigpIHtcbm5ld1Byb2plY3QgPSBQcm9qZWN0c0ZhY3RvcnkoaW5wdXRGb3JtLnZhbHVlKTtcbnRvZG9MaXN0QXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbn07XG5cblxuZXhwb3J0IHtuZXdQcm9qZWN0cywgdG9kb0xpc3RBcnJheSwgbmV3UHJvamVjdH07Il0sInNvdXJjZVJvb3QiOiIifQ==