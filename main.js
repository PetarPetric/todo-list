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
};

const initModal = () => {
  modalForm = document.createElement('div');
  modalPlace = document.querySelector('.actualProjects');
  modalForm.setAttribute('id', 'modalBox');
  modalPlace.append(modalForm);
};

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

// stuff inside Project Modal //

const insideTodo = (arg) => {
  const cancelIcon = document.createElement('button');
  const headerDiv = document.createElement('div');
  const modalBody = document.createElement('div');
  const allTasks = document.createElement('div');
  const taskInput = document.createElement('input');
  const addTaskButtn = document.createElement('button');
  const dueDate = document.createElement('input');
  const dateDiv = document.createElement('div');
  const paraDate = document.createElement('h5');
  const paraTaskDiv = document.createElement('div');
  const paraTask = document.createElement('h3');
  
  const priorityDiv = document.createElement('div');
  const priority = document.createElement('h2');
  const priorities = document.createElement('select');
  const lowPriority = document.createElement('option');
  const mediumPriority = document.createElement('option');
  const highPriority = document.createElement('option');

  paraDate.textContent = "Finish untill:";
  paraTask.textContent = "Tasks:";
  priority.textContent = "Priority:";
  lowPriority.textContent = "Low";
  mediumPriority.textContent = "Medium";
  highPriority.textContent = "High";

  // priorities values
  lowPriority.setAttribute('value', 'low');
  mediumPriority.setAttribute('value', 'medium');
  highPriority.setAttribute('value', 'high');

  // adding classes, IDs //

  dateDiv.classList.add('dateDiv');
  allTasks.classList.add('allTasks');
  taskInput.classList.add('taskInput');
  modalBody.classList.add('modalBody');
  cancelIcon.setAttribute('id', 'cancelIcon');
  headerDiv.setAttribute('id', 'modalHeader');
  priorityDiv.classList.add('priorityDiv');
  dueDate.setAttribute('type', 'date');
  addTaskButtn.innerHTML = '<i class="fas fa-plus-circle"></i>';
  cancelIcon.innerHTML = '<i class="far fa-window-close"></i>';
  
  // appending stuff//
  priorities.append(lowPriority, mediumPriority, highPriority);
  todoDetails.append(headerDiv);
  todoDetails.append(modalBody);
  modalBody.append(priorityDiv);
  modalBody.append(dateDiv);
  modalBody.append(paraTaskDiv);
  modalBody.append(allTasks);
  priorityDiv.append(priority);
  priorityDiv.append(priorities);
  dateDiv.append(paraDate);  
  dateDiv.append(dueDate);
  allTasks.append(addTaskButtn);
  allTasks.append(taskInput);
  paraTaskDiv.append(paraTask);
  headerDiv.append(todoTitle);
  headerDiv.append(cancelIcon);

  todoTitle.textContent = _projectLogic__WEBPACK_IMPORTED_MODULE_0__["todoListArray"][arg].projectName;
};

// Remove project function//

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
    console.log(newDeletionThing.textContent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3RMaXN0RG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0TG9naWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUseUVBQVUsRTs7Ozs7Ozs7Ozs7O0FDbkR6QjtBQUFBO0FBQUE7QUFBK0I7QUFDWTs7QUFFM0Msb0RBQVU7QUFDVixpRUFBVzs7Ozs7Ozs7Ozs7OztBQ0pYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUQ7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsd0RBQVU7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHdEQUFVO0FBQ2pEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsMkRBQWE7QUFDdkM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUUsMkRBQWE7QUFDZjtBQUNBLGNBQWMsMkRBQWE7QUFDM0I7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLE9BQU87QUFDVjs7Ozs7Ozs7Ozs7Ozs7QUN2S0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5SDs7QUFFekg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSw4REFBYztBQUNoQjtBQUNBLGlCQUFpQiw4REFBYztBQUMvQjtBQUNBLFFBQVEsMkRBQVc7QUFDbkIsTUFBTSx3RUFBZ0I7QUFDdEIsTUFBTSx3RUFBZ0I7QUFDdEIsS0FBSztBQUNMLE1BQU0sd0VBQWdCO0FBQ3RCLE1BQU0sd0VBQWdCO0FBQ3RCLE1BQU0sd0VBQWdCO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0VBQWdCO0FBQ3BCLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0VBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1FQUFXO0FBQ2YsSUFBSSx3RUFBZ0I7QUFDcEI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQix5REFBUztBQUN4QztBQUNBOzs7QUFHZ0QiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy9HbG9iYWwgc2NvcGUvL1xuY29uc3QgbWFpbkJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5jb25zdCBhY3R1YWxTdHVmZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgcGFnZVJlbmRlciA9ICgoKSA9PiB7XG4gICAgdmFyIHRpdGxlID0gXCJUbyBEbyBMaXN0XCJcbiAgICBjcmVhdGVUaXRsZSh0aXRsZSk7XG4gICAgY3JlYXRlUHJvamVjdEhvbGRlcigpO1xuICAgIHByb2plY3RMaXN0cygpO1xuICAgIGJ0blByb2plY3RBZGQoKTtcbiAgICBwcm9qZWN0TmFtZXMoKTtcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVUaXRsZSh0aXRsZSkge1xuICAgIGNvbnN0IHRpdGxlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVCb3guY2xhc3NMaXN0LmFkZCgndGl0bGVCb3gnKTtcbiAgICBtYWluQm94LmFwcGVuZCh0aXRsZUJveCk7XG4gICAgY29uc3QgYWN0dWFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aXRsZSk7XG4gICAgdGl0bGVCb3guYXBwZW5kQ2hpbGQoYWN0dWFsVGl0bGUpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEhvbGRlcigpIHtcbiAgICBhY3R1YWxTdHVmZi5jbGFzc0xpc3QuYWRkKCdhY3R1YWxTdHVmZicpO1xuXG4gICAgbWFpbkJveC5hcHBlbmQoYWN0dWFsU3R1ZmYpO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0TGlzdHMoKSB7XG4gICAgY29uc3QgcHJvamVjdE92ZXJ2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblxuICAgIHByb2plY3RPdmVydmlldy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0T3ZlcnZpZXcnKTtcblxuICAgIGFjdHVhbFN0dWZmLmFwcGVuZChwcm9qZWN0TGlzdCwgcHJvamVjdE92ZXJ2aWV3KTtcbn1cblxuZnVuY3Rpb24gYnRuUHJvamVjdEFkZCgpIHtcbiAgICBjb25zdCBidG5BZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5BZGQuY2xhc3NMaXN0LmFkZCgnYnRuQWRkJyk7XG4gICAgYnRuQWRkLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdFwiXG5cbiAgICBwcm9qZWN0TGlzdC5hcHBlbmQoYnRuQWRkKTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdE5hbWVzKCkge1xuICAgIGNvbnN0IGFjdHVhbFByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWN0dWFsUHJvamVjdHMuY2xhc3NMaXN0LmFkZCgnYWN0dWFsUHJvamVjdHMnKTtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmQoYWN0dWFsUHJvamVjdHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlUmVuZGVyOyIsImltcG9ydCBwYWdlUmVuZGVyIGZyb20gJy4vZG9tJztcbmltcG9ydCB7bmV3UHJvamVjdHN9IGZyb20gJy4vcHJvamVjdExvZ2ljJztcblxucGFnZVJlbmRlcigpO1xubmV3UHJvamVjdHMoKTtcbiIsImltcG9ydCB7dG9kb0xpc3RBcnJheSwgbmV3UHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0TG9naWMnO1xuXG5sZXQgbW9kYWxQbGFjZTtcbmxldCBtb2RhbEZvcm07XG5sZXQgaW5wdXRGb3JtO1xubGV0IHRvZG9PdmVyVmlldztcbmxldCB0b2RvRGV0YWlscztcblxuY29uc3QgZGl2UHJvamVjdExpc3QgPSBbXTtcblxuY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9ICgpID0+IHtcbiAgaW5pdE1vZGFsKCk7XG4gIGlucHV0SW5pdCgpO1xufTtcblxuY29uc3QgaW5pdE1vZGFsID0gKCkgPT4ge1xuICBtb2RhbEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWxQbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3R1YWxQcm9qZWN0cycpO1xuICBtb2RhbEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdtb2RhbEJveCcpO1xuICBtb2RhbFBsYWNlLmFwcGVuZChtb2RhbEZvcm0pO1xufTtcblxuY29uc3QgaW5wdXRJbml0ID0gKCkgPT4ge1xuXG4gIGlucHV0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IGFkZGluZ1N0dWZmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGNhbmNlbFN0dWZmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBidXR0b25EaXYuc2V0QXR0cmlidXRlKCdpZCcsICdidXR0b25EaXYnKTtcblxuICBpbnB1dEZvcm0uY2xhc3NMaXN0LmFkZCgnanVzdElucHV0Jyk7XG4gIGlucHV0Rm9ybS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnanVzdElucHV0Jyk7XG5cbiAgYWRkaW5nU3R1ZmYuY2xhc3NMaXN0LmFkZCgnYWRkaW5nU3R1ZmYnKTtcbiAgY2FuY2VsU3R1ZmYuY2xhc3NMaXN0LmFkZCgnY2FuY2VsaW5nU3R1ZmYnKTtcblxuICBhZGRpbmdTdHVmZi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gIGNhbmNlbFN0dWZmLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuICBtb2RhbEZvcm0uYXBwZW5kKGlucHV0Rm9ybSk7XG4gIG1vZGFsRm9ybS5hcHBlbmQoYnV0dG9uRGl2KTtcbiAgYnV0dG9uRGl2LmFwcGVuZChhZGRpbmdTdHVmZik7XG4gIGJ1dHRvbkRpdi5hcHBlbmQoY2FuY2VsU3R1ZmYpO1xuXG4gIG1vZGFsRm9ybS5jbGFzc0xpc3QuYWRkKCdpbnB1dEZvcm0nKTtcbiAgaW5wdXRGb3JtLnBsYWNlaG9sZGVyID0gXCJQcm9qZWN0IE5hbWVcIjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVkUHJvamVjdCA9ICgpID0+IHtcblxuICBjb25zdCBuZXdQcm9qZWN0Q3JlYXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwcm9qZWN0Q3JlYXRlZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgY29uc3QgcHJvamVjdENyZWF0ZWRUeHQgPSBuZXdQcm9qZWN0LnByb2plY3ROYW1lO1xuXG4gIG1vZGFsUGxhY2UuYXBwZW5kKG5ld1Byb2plY3RDcmVhdGVkKTtcbiAgbmV3UHJvamVjdENyZWF0ZWQuYXBwZW5kKHByb2plY3RDcmVhdGVkVGl0bGUpO1xuICBwcm9qZWN0Q3JlYXRlZFRpdGxlLmFwcGVuZChwcm9qZWN0Q3JlYXRlZFR4dCk7XG4gIG5ld1Byb2plY3RDcmVhdGVkLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RDbGFzcycpO1xuICBuZXdQcm9qZWN0Q3JlYXRlZC5zZXRBdHRyaWJ1dGUoJ2lkJywgbmV3UHJvamVjdC5wcm9qZWN0TmFtZSk7XG4gIGRpdlByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdENyZWF0ZWQpO1xuICB9O1xuXG4gIC8vIEV2ZXJ5dGhpbmcgdGhhdHMgaW5zaWRlIFRvZG8gTW9kYWwgLy9cblxuICBjb25zdCB0b2RvTW9kYWxEZXRhaWxzID0gKCkgPT4ge1xuICBsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcblxuICBjb25zdCB0b2RvTW9kYWwgPSAoKSA9PiB7XG4gIHRvZG9EZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9EZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3RvZG9EZXRhaWxzJyk7XG4gIHRvZG9PdmVyVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0T3ZlcnZpZXcnKTtcbiAgdG9kb092ZXJWaWV3LmFwcGVuZCh0b2RvRGV0YWlscyk7XG59O1xuXG4vLyBzdHVmZiBpbnNpZGUgUHJvamVjdCBNb2RhbCAvL1xuXG5jb25zdCBpbnNpZGVUb2RvID0gKGFyZykgPT4ge1xuICBjb25zdCBjYW5jZWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgYWRkVGFza0J1dHRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHBhcmFEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgY29uc3QgcGFyYVRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcGFyYVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBcbiAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb25zdCBwcmlvcml0aWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG4gIHBhcmFEYXRlLnRleHRDb250ZW50ID0gXCJGaW5pc2ggdW50aWxsOlwiO1xuICBwYXJhVGFzay50ZXh0Q29udGVudCA9IFwiVGFza3M6XCI7XG4gIHByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTpcIjtcbiAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICBtZWRpdW1Qcmlvcml0eS50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG4gIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuXG4gIC8vIHByaW9yaXRpZXMgdmFsdWVzXG4gIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbG93Jyk7XG4gIG1lZGl1bVByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbWVkaXVtJyk7XG4gIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcblxuICAvLyBhZGRpbmcgY2xhc3NlcywgSURzIC8vXG5cbiAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdkYXRlRGl2Jyk7XG4gIGFsbFRhc2tzLmNsYXNzTGlzdC5hZGQoJ2FsbFRhc2tzJyk7XG4gIHRhc2tJbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrSW5wdXQnKTtcbiAgbW9kYWxCb2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsQm9keScpO1xuICBjYW5jZWxJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FuY2VsSWNvbicpO1xuICBoZWFkZXJEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdtb2RhbEhlYWRlcicpO1xuICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eURpdicpO1xuICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIGFkZFRhc2tCdXR0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtcGx1cy1jaXJjbGVcIj48L2k+JztcbiAgY2FuY2VsSWNvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXIgZmEtd2luZG93LWNsb3NlXCI+PC9pPic7XG4gIFxuICAvLyBhcHBlbmRpbmcgc3R1ZmYvL1xuICBwcmlvcml0aWVzLmFwcGVuZChsb3dQcmlvcml0eSwgbWVkaXVtUHJpb3JpdHksIGhpZ2hQcmlvcml0eSk7XG4gIHRvZG9EZXRhaWxzLmFwcGVuZChoZWFkZXJEaXYpO1xuICB0b2RvRGV0YWlscy5hcHBlbmQobW9kYWxCb2R5KTtcbiAgbW9kYWxCb2R5LmFwcGVuZChwcmlvcml0eURpdik7XG4gIG1vZGFsQm9keS5hcHBlbmQoZGF0ZURpdik7XG4gIG1vZGFsQm9keS5hcHBlbmQocGFyYVRhc2tEaXYpO1xuICBtb2RhbEJvZHkuYXBwZW5kKGFsbFRhc2tzKTtcbiAgcHJpb3JpdHlEaXYuYXBwZW5kKHByaW9yaXR5KTtcbiAgcHJpb3JpdHlEaXYuYXBwZW5kKHByaW9yaXRpZXMpO1xuICBkYXRlRGl2LmFwcGVuZChwYXJhRGF0ZSk7ICBcbiAgZGF0ZURpdi5hcHBlbmQoZHVlRGF0ZSk7XG4gIGFsbFRhc2tzLmFwcGVuZChhZGRUYXNrQnV0dG4pO1xuICBhbGxUYXNrcy5hcHBlbmQodGFza0lucHV0KTtcbiAgcGFyYVRhc2tEaXYuYXBwZW5kKHBhcmFUYXNrKTtcbiAgaGVhZGVyRGl2LmFwcGVuZCh0b2RvVGl0bGUpO1xuICBoZWFkZXJEaXYuYXBwZW5kKGNhbmNlbEljb24pO1xuXG4gIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG9MaXN0QXJyYXlbYXJnXS5wcm9qZWN0TmFtZTtcbn07XG5cbi8vIFJlbW92ZSBwcm9qZWN0IGZ1bmN0aW9uLy9cblxuY29uc3QgcmVtb3ZlUHJvamVjdCA9IChkZWxBcmcpID0+IHtcbiAgdG9kb0RldGFpbHMucmVtb3ZlKCk7XG4gIHRvZG9MaXN0QXJyYXkuc3BsaWNlKGRlbEFyZywgMSk7XG4gIGRpdlByb2plY3RMaXN0LnNwbGljZShkZWxBcmcsIDEpO1xuICBjb25zb2xlLmxvZyh0b2RvTGlzdEFycmF5KTtcbiAgY29uc29sZS5sb2coZGl2UHJvamVjdExpc3QpO1xufTtcblxuXG5jb25zdCBjbGVhbkluc2lkZVRvZG8gPSAoKSA9PiB7XG50b2RvRGV0YWlscy5yZW1vdmUoKTtcbn07XG5cbnJldHVybiB7XG5pbnNpZGVUb2RvLCBjbGVhbkluc2lkZVRvZG8sIHRvZG9Nb2RhbCwgcmVtb3ZlUHJvamVjdFxufTtcbn07XG5cblxuY29uc3Qgb2JqQ3JlYXRpb24gPSAoKSA9PiB7XG4gIGlmKGlucHV0Rm9ybS52YWx1ZSA9PT0gXCJcIikge1xuICBhbGVydChcIkNBTlQgQ1JFQVRFIEVNUFRZIFBST0pFQ1RcIik7XG4gIH0gZWxzZSB7Y3JlYXRlZFByb2plY3QoKX07XG59O1xuXG5leHBvcnQge2luaXRNb2RhbCwgaW5wdXRJbml0LCBjcmVhdGVOZXdQcm9qZWN0LCBjcmVhdGVkUHJvamVjdCwgb2JqQ3JlYXRpb24sIGlucHV0Rm9ybSwgdG9kb01vZGFsRGV0YWlscywgdG9kb0RldGFpbHMsIGRpdlByb2plY3RMaXN0fTsiLCJpbXBvcnQge2NyZWF0ZU5ld1Byb2plY3QsIG9iakNyZWF0aW9uLCBpbnB1dEZvcm0sIHRvZG9Nb2RhbERldGFpbHMsIHRvZG9EZXRhaWxzLCBkaXZQcm9qZWN0TGlzdH0gZnJvbSAnLi9wcm9qZWN0TGlzdERvbSc7XG5cbmNvbnN0IHRvZG9MaXN0QXJyYXkgPSBbXTtcbmxldCBuZXdQcm9qZWN0O1xubGV0IHRvZG9Ib2xkZXI7XG5cbmNvbnN0IHNlbGVjdGluZ1Byb2plY3QgPSAoKSA9PiB7XG4gIGRpdlByb2plY3RMaXN0LmZvckVhY2goY2xpY2thYmxlID0+IHtcbiAgY2xpY2thYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgbGV0IGluZGV4TnVtID0gZGl2UHJvamVjdExpc3QuaW5kZXhPZihlLmN1cnJlbnRUYXJnZXQpO1xuICAgIGxldCBuZXdBcmd1bWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUudGFyZ2V0LnBhcmVudE5vZGUudGV4dENvbnRlbnQpO1xuICAgIGlmKCF0b2RvRGV0YWlscykge1xuICAgICAgdG9kb01vZGFsRGV0YWlscygpLnRvZG9Nb2RhbCgpO1xuICAgICAgdG9kb01vZGFsRGV0YWlscygpLmluc2lkZVRvZG8oaW5kZXhOdW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2RvTW9kYWxEZXRhaWxzKCkuY2xlYW5JbnNpZGVUb2RvKCk7XG4gICAgICB0b2RvTW9kYWxEZXRhaWxzKCkudG9kb01vZGFsKCk7XG4gICAgICB0b2RvTW9kYWxEZXRhaWxzKCkuaW5zaWRlVG9kbyhpbmRleE51bSk7XG4gICAgfTtcbiAgICByZW1vdmVCdXR0b24oaW5kZXhOdW0sIG5ld0FyZ3VtZW50KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5cbi8vIHJlbW92ZSBidXR0b25cbmNvbnN0IHJlbW92ZUJ1dHRvbiA9IChkZWxBcmcsIGRlbEFyZzIgPSAwKSA9PiB7XG4gIGNvbnN0IGNhbmNlbEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsSWNvbicpO1xuICBjYW5jZWxJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxldCBuZXdEZWxldGlvblRoaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVsQXJnMi50ZXh0Q29udGVudClcbiAgICBjb25zb2xlLmxvZyhuZXdEZWxldGlvblRoaW5nLnRleHRDb250ZW50KTtcbiAgICBuZXdEZWxldGlvblRoaW5nLnJlbW92ZSgpXG4gICAgdG9kb01vZGFsRGV0YWlscygpLnJlbW92ZVByb2plY3QoZGVsQXJnKTtcbiAgfSk7XG59O1xuXG5cbi8vIGNyZWF0ZXMgbmV3IFByb2plY3RzXG5jb25zdCBuZXdQcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc3QgYnRuQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bkFkZCcpO1xuICBidG5BZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYoIXRvZG9Ib2xkZXIpe1xuICAgIGNyZWF0ZU5ld1Byb2plY3QoKTtcbiAgICBhZGRDYW5jZWxJbml0cygpO1xuICAgIH07XG4gIH0pO1xufTtcbi8vIGFkZGluZyBhbmQgY2FuY2VsaW5nIFRvZG9zXG5mdW5jdGlvbiBhZGRDYW5jZWxJbml0cygpIHtcbiAgdG9kb0hvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbEJveCcpO1xuICBjb25zdCBjYW5jZWxpbmdTdHVmZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWxpbmdTdHVmZicpO1xuICBjYW5jZWxpbmdTdHVmZi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2RvSG9sZGVyLnJlbW92ZSgpO1xuICAgIGFkZENhbmNlbEluaXRzKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGFkZFN0dWZmVG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZGluZ1N0dWZmJyk7XG4gIGFkZFN0dWZmVG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1ha2luZ09iaigpO1xuICAgIHRvZG9Ib2xkZXIucmVtb3ZlKCk7XG4gICAgb2JqQ3JlYXRpb24oKTtcbiAgICBjcmVhdGVOZXdQcm9qZWN0KCk7XG4gICAgYWRkQ2FuY2VsSW5pdHMoKTtcbiAgICBzZWxlY3RpbmdQcm9qZWN0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgUHJvamVjdHNGYWN0b3J5ID0gZnVuY3Rpb24ocHJvamVjdE5hbWUpIHtcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9qZWN0TmFtZVxuICB9O1xufTtcblxuZnVuY3Rpb24gbWFraW5nT2JqKCkge1xuICBuZXdQcm9qZWN0ID0gUHJvamVjdHNGYWN0b3J5KGlucHV0Rm9ybS52YWx1ZSk7XG4gIHRvZG9MaXN0QXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbn07XG5cblxuZXhwb3J0IHtuZXdQcm9qZWN0cywgdG9kb0xpc3RBcnJheSwgbmV3UHJvamVjdH07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=