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

  paraDate.textContent = "Finish untill:";
  paraTask.textContent = "Tasks:";

  dateDiv.classList.add('dateDiv');
  allTasks.classList.add('allTasks');
  taskInput.classList.add('taskInput');
  modalBody.classList.add('modalBody');
  cancelIcon.setAttribute('id', 'cancelIcon');
  headerDiv.setAttribute('id', 'modalHeader');
  dueDate.setAttribute('type', 'date');
  addTaskButtn.innerHTML = '<i class="fas fa-plus-circle"></i>'
  cancelIcon.innerHTML = '<i class="far fa-window-close"></i>'
  todoDetails.append(headerDiv);
  todoDetails.append(modalBody);
  modalBody.append(dateDiv);
  modalBody.append(paraTaskDiv);
  modalBody.append(allTasks);
  dateDiv.append(paraDate);  
  dateDiv.append(dueDate);
  allTasks.append(addTaskButtn);
  allTasks.append(taskInput);
  paraTaskDiv.append(paraTask);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3RMaXN0RG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0TG9naWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUseUVBQVUsRTs7Ozs7Ozs7Ozs7O0FDbkR6QjtBQUFBO0FBQUE7QUFBK0I7QUFDWTs7QUFFM0Msb0RBQVU7QUFDVixpRUFBVzs7Ozs7Ozs7Ozs7OztBQ0pYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUQ7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsd0RBQVU7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHdEQUFVO0FBQ2pEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQiwyREFBYTs7QUFFdkM7O0FBRUE7QUFDQTtBQUNBLEVBQUUsMkRBQWE7QUFDZjtBQUNBLGNBQWMsMkRBQWE7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsT0FBTztBQUNWOzs7Ozs7Ozs7Ozs7OztBQzVJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlIOztBQUV6SDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDhEQUFjO0FBQ2hCO0FBQ0EsaUJBQWlCLDhEQUFjO0FBQy9CO0FBQ0EsUUFBUSwyREFBVztBQUNuQixNQUFNLHdFQUFnQjtBQUN0QixNQUFNLHdFQUFnQjtBQUN0QixLQUFLO0FBQ0wsTUFBTSx3RUFBZ0I7QUFDdEIsTUFBTSx3RUFBZ0I7QUFDdEIsTUFBTSx3RUFBZ0I7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3RUFBZ0I7QUFDcEIsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3RUFBZ0I7QUFDcEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbUVBQVc7QUFDZixJQUFJLHdFQUFnQjtBQUNwQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLHlEQUFTO0FBQ3RDO0FBQ0E7OztBQUdnRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvL0dsb2JhbCBzY29wZS8vXG5jb25zdCBtYWluQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbmNvbnN0IGFjdHVhbFN0dWZmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCBwYWdlUmVuZGVyID0gKCgpID0+IHtcbiAgICB2YXIgdGl0bGUgPSBcIlRvIERvIExpc3RcIlxuICAgIGNyZWF0ZVRpdGxlKHRpdGxlKTtcbiAgICBjcmVhdGVQcm9qZWN0SG9sZGVyKCk7XG4gICAgcHJvamVjdExpc3RzKCk7XG4gICAgYnRuUHJvamVjdEFkZCgpO1xuICAgIHByb2plY3ROYW1lcygpO1xufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlKHRpdGxlKSB7XG4gICAgY29uc3QgdGl0bGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZUJveC5jbGFzc0xpc3QuYWRkKCd0aXRsZUJveCcpO1xuICAgIG1haW5Cb3guYXBwZW5kKHRpdGxlQm94KTtcbiAgICBjb25zdCBhY3R1YWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpdGxlKTtcbiAgICB0aXRsZUJveC5hcHBlbmRDaGlsZChhY3R1YWxUaXRsZSk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0SG9sZGVyKCkge1xuICAgIGFjdHVhbFN0dWZmLmNsYXNzTGlzdC5hZGQoJ2FjdHVhbFN0dWZmJyk7XG5cbiAgICBtYWluQm94LmFwcGVuZChhY3R1YWxTdHVmZik7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RMaXN0cygpIHtcbiAgICBjb25zdCBwcm9qZWN0T3ZlcnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXG4gICAgcHJvamVjdE92ZXJ2aWV3LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RPdmVydmlldycpO1xuXG4gICAgYWN0dWFsU3R1ZmYuYXBwZW5kKHByb2plY3RMaXN0LCBwcm9qZWN0T3ZlcnZpZXcpO1xufVxuXG5mdW5jdGlvbiBidG5Qcm9qZWN0QWRkKCkge1xuICAgIGNvbnN0IGJ0bkFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bkFkZC5jbGFzc0xpc3QuYWRkKCdidG5BZGQnKTtcbiAgICBidG5BZGQudGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0XCJcblxuICAgIHByb2plY3RMaXN0LmFwcGVuZChidG5BZGQpO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0TmFtZXMoKSB7XG4gICAgY29uc3QgYWN0dWFsUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhY3R1YWxQcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdhY3R1YWxQcm9qZWN0cycpO1xuICAgIHByb2plY3RMaXN0LmFwcGVuZChhY3R1YWxQcm9qZWN0cyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VSZW5kZXI7IiwiaW1wb3J0IHBhZ2VSZW5kZXIgZnJvbSAnLi9kb20nO1xuaW1wb3J0IHtuZXdQcm9qZWN0c30gZnJvbSAnLi9wcm9qZWN0TG9naWMnO1xuXG5wYWdlUmVuZGVyKCk7XG5uZXdQcm9qZWN0cygpO1xuIiwiaW1wb3J0IHt0b2RvTGlzdEFycmF5LCBuZXdQcm9qZWN0fSBmcm9tICcuL3Byb2plY3RMb2dpYyc7XG5cbmxldCBtb2RhbFBsYWNlO1xubGV0IG1vZGFsRm9ybTtcbmxldCBpbnB1dEZvcm07XG5sZXQgdG9kb092ZXJWaWV3O1xubGV0IHRvZG9EZXRhaWxzO1xuXG5jb25zdCBkaXZQcm9qZWN0TGlzdCA9IFtdO1xuXG5jb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gKCkgPT4ge1xuICBpbml0TW9kYWwoKTtcbiAgaW5wdXRJbml0KCk7XG59O1xuXG5jb25zdCBpbml0TW9kYWwgPSAoKSA9PiB7XG4gIG1vZGFsRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2RhbFBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdHVhbFByb2plY3RzJyk7XG4gIG1vZGFsRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vZGFsQm94Jyk7XG4gIG1vZGFsUGxhY2UuYXBwZW5kKG1vZGFsRm9ybSk7XG59O1xuXG5jb25zdCBpbnB1dEluaXQgPSAoKSA9PiB7XG5cbiAgaW5wdXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgYWRkaW5nU3R1ZmYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgY2FuY2VsU3R1ZmYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ1dHRvbkRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J1dHRvbkRpdicpO1xuXG4gIGlucHV0Rm9ybS5jbGFzc0xpc3QuYWRkKCdqdXN0SW5wdXQnKTtcbiAgaW5wdXRGb3JtLnNldEF0dHJpYnV0ZSgnbmFtZScsICdqdXN0SW5wdXQnKTtcblxuICBhZGRpbmdTdHVmZi5jbGFzc0xpc3QuYWRkKCdhZGRpbmdTdHVmZicpO1xuICBjYW5jZWxTdHVmZi5jbGFzc0xpc3QuYWRkKCdjYW5jZWxpbmdTdHVmZicpO1xuXG4gIGFkZGluZ1N0dWZmLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgY2FuY2VsU3R1ZmYudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4gIG1vZGFsRm9ybS5hcHBlbmQoaW5wdXRGb3JtKTtcbiAgbW9kYWxGb3JtLmFwcGVuZChidXR0b25EaXYpO1xuICBidXR0b25EaXYuYXBwZW5kKGFkZGluZ1N0dWZmKTtcbiAgYnV0dG9uRGl2LmFwcGVuZChjYW5jZWxTdHVmZik7XG5cbiAgbW9kYWxGb3JtLmNsYXNzTGlzdC5hZGQoJ2lucHV0Rm9ybScpO1xuICBpbnB1dEZvcm0ucGxhY2Vob2xkZXIgPSBcIlByb2plY3QgTmFtZVwiO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZWRQcm9qZWN0ID0gKCkgPT4ge1xuXG4gIGNvbnN0IG5ld1Byb2plY3RDcmVhdGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHByb2plY3RDcmVhdGVkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICBjb25zdCBwcm9qZWN0Q3JlYXRlZFR4dCA9IG5ld1Byb2plY3QucHJvamVjdE5hbWU7XG5cbiAgbW9kYWxQbGFjZS5hcHBlbmQobmV3UHJvamVjdENyZWF0ZWQpO1xuICBuZXdQcm9qZWN0Q3JlYXRlZC5hcHBlbmQocHJvamVjdENyZWF0ZWRUaXRsZSk7XG4gIHByb2plY3RDcmVhdGVkVGl0bGUuYXBwZW5kKHByb2plY3RDcmVhdGVkVHh0KTtcbiAgbmV3UHJvamVjdENyZWF0ZWQuY2xhc3NMaXN0LmFkZCgncHJvamVjdENsYXNzJyk7XG4gIG5ld1Byb2plY3RDcmVhdGVkLnNldEF0dHJpYnV0ZSgnaWQnLCBuZXdQcm9qZWN0LnByb2plY3ROYW1lKTtcbiAgZGl2UHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0Q3JlYXRlZCk7XG4gIH07XG5cbiAgLy8gRXZlcnl0aGluZyB0aGF0cyBpbnNpZGUgVG9kbyBNb2RhbCAvL1xuXG4gIGNvbnN0IHRvZG9Nb2RhbERldGFpbHMgPSAoKSA9PiB7XG4gIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuXG4gIGNvbnN0IHRvZG9Nb2RhbCA9ICgpID0+IHtcbiAgdG9kb0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb0RldGFpbHMuY2xhc3NMaXN0LmFkZCgndG9kb0RldGFpbHMnKTtcbiAgdG9kb092ZXJWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RPdmVydmlldycpO1xuICB0b2RvT3ZlclZpZXcuYXBwZW5kKHRvZG9EZXRhaWxzKTtcbn07XG5cbi8vIHN0dWZmIGluc2lkZSBQcm9qZWN0IE1vZGFsIC8vXG5cbmNvbnN0IGluc2lkZVRvZG8gPSAoYXJnKSA9PiB7XG4gIGNvbnN0IGNhbmNlbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1vZGFsQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBhZGRUYXNrQnV0dG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcGFyYURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICBjb25zdCBwYXJhVGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwYXJhVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5cbiAgcGFyYURhdGUudGV4dENvbnRlbnQgPSBcIkZpbmlzaCB1bnRpbGw6XCI7XG4gIHBhcmFUYXNrLnRleHRDb250ZW50ID0gXCJUYXNrczpcIjtcblxuICBkYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2RhdGVEaXYnKTtcbiAgYWxsVGFza3MuY2xhc3NMaXN0LmFkZCgnYWxsVGFza3MnKTtcbiAgdGFza0lucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2tJbnB1dCcpO1xuICBtb2RhbEJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWxCb2R5Jyk7XG4gIGNhbmNlbEljb24uc2V0QXR0cmlidXRlKCdpZCcsICdjYW5jZWxJY29uJyk7XG4gIGhlYWRlckRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vZGFsSGVhZGVyJyk7XG4gIGR1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgYWRkVGFza0J1dHRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1wbHVzLWNpcmNsZVwiPjwvaT4nXG4gIGNhbmNlbEljb24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFyIGZhLXdpbmRvdy1jbG9zZVwiPjwvaT4nXG4gIHRvZG9EZXRhaWxzLmFwcGVuZChoZWFkZXJEaXYpO1xuICB0b2RvRGV0YWlscy5hcHBlbmQobW9kYWxCb2R5KTtcbiAgbW9kYWxCb2R5LmFwcGVuZChkYXRlRGl2KTtcbiAgbW9kYWxCb2R5LmFwcGVuZChwYXJhVGFza0Rpdik7XG4gIG1vZGFsQm9keS5hcHBlbmQoYWxsVGFza3MpO1xuICBkYXRlRGl2LmFwcGVuZChwYXJhRGF0ZSk7ICBcbiAgZGF0ZURpdi5hcHBlbmQoZHVlRGF0ZSk7XG4gIGFsbFRhc2tzLmFwcGVuZChhZGRUYXNrQnV0dG4pO1xuICBhbGxUYXNrcy5hcHBlbmQodGFza0lucHV0KTtcbiAgcGFyYVRhc2tEaXYuYXBwZW5kKHBhcmFUYXNrKTtcbiAgaGVhZGVyRGl2LmFwcGVuZCh0b2RvVGl0bGUpO1xuICBoZWFkZXJEaXYuYXBwZW5kKGNhbmNlbEljb24pO1xuXG4gIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG9MaXN0QXJyYXlbYXJnXS5wcm9qZWN0TmFtZTtcblxufTtcblxuY29uc3QgcmVtb3ZlUHJvamVjdCA9IChkZWxBcmcpID0+IHtcbiAgdG9kb0RldGFpbHMucmVtb3ZlKCk7XG4gIHRvZG9MaXN0QXJyYXkuc3BsaWNlKGRlbEFyZywgMSk7XG4gIGRpdlByb2plY3RMaXN0LnNwbGljZShkZWxBcmcsIDEpO1xuICBjb25zb2xlLmxvZyh0b2RvTGlzdEFycmF5KTtcbiAgY29uc29sZS5sb2coZGl2UHJvamVjdExpc3QpO1xufTtcblxuY29uc3QgY2xlYW5JbnNpZGVUb2RvID0gKCkgPT4ge1xudG9kb0RldGFpbHMucmVtb3ZlKCk7XG59O1xuXG5yZXR1cm4ge1xuaW5zaWRlVG9kbywgY2xlYW5JbnNpZGVUb2RvLCB0b2RvTW9kYWwsIHJlbW92ZVByb2plY3Rcbn07XG59O1xuXG5cbmNvbnN0IG9iakNyZWF0aW9uID0gKCkgPT4ge1xuICBpZihpbnB1dEZvcm0udmFsdWUgPT09IFwiXCIpIHtcbiAgYWxlcnQoXCJDQU5UIENSRUFURSBFTVBUWSBQUk9KRUNUXCIpO1xuICB9IGVsc2Uge2NyZWF0ZWRQcm9qZWN0KCl9O1xufTtcblxuZXhwb3J0IHtpbml0TW9kYWwsIGlucHV0SW5pdCwgY3JlYXRlTmV3UHJvamVjdCwgY3JlYXRlZFByb2plY3QsIG9iakNyZWF0aW9uLCBpbnB1dEZvcm0sIHRvZG9Nb2RhbERldGFpbHMsIHRvZG9EZXRhaWxzLCBkaXZQcm9qZWN0TGlzdH07IiwiaW1wb3J0IHtjcmVhdGVOZXdQcm9qZWN0LCBvYmpDcmVhdGlvbiwgaW5wdXRGb3JtLCB0b2RvTW9kYWxEZXRhaWxzLCB0b2RvRGV0YWlscywgZGl2UHJvamVjdExpc3R9IGZyb20gJy4vcHJvamVjdExpc3REb20nO1xuXG5jb25zdCB0b2RvTGlzdEFycmF5ID0gW107XG5sZXQgbmV3UHJvamVjdDtcbmxldCB0b2RvSG9sZGVyO1xuXG5jb25zdCBzZWxlY3RpbmdQcm9qZWN0ID0gKCkgPT4ge1xuICBkaXZQcm9qZWN0TGlzdC5mb3JFYWNoKGNsaWNrYWJsZSA9PiB7XG4gIGNsaWNrYWJsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGxldCBpbmRleE51bSA9IGRpdlByb2plY3RMaXN0LmluZGV4T2YoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBsZXQgbmV3QXJndW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlLnRhcmdldC5wYXJlbnROb2RlLnRleHRDb250ZW50KTtcbiAgICBpZighdG9kb0RldGFpbHMpIHtcbiAgICAgIHRvZG9Nb2RhbERldGFpbHMoKS50b2RvTW9kYWwoKTtcbiAgICAgIHRvZG9Nb2RhbERldGFpbHMoKS5pbnNpZGVUb2RvKGluZGV4TnVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9kb01vZGFsRGV0YWlscygpLmNsZWFuSW5zaWRlVG9kbygpO1xuICAgICAgdG9kb01vZGFsRGV0YWlscygpLnRvZG9Nb2RhbCgpO1xuICAgICAgdG9kb01vZGFsRGV0YWlscygpLmluc2lkZVRvZG8oaW5kZXhOdW0pO1xuICAgIH07XG4gICAgcmVtb3ZlQnV0dG9uKGluZGV4TnVtLCBuZXdBcmd1bWVudCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuXG4vLyByZW1vdmUgYnV0dG9uXG5jb25zdCByZW1vdmVCdXR0b24gPSAoZGVsQXJnLCBkZWxBcmcyID0gMCkgPT4ge1xuICBjb25zdCBjYW5jZWxJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbEljb24nKTtcbiAgY2FuY2VsSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgbmV3RGVsZXRpb25UaGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlbEFyZzIudGV4dENvbnRlbnQpXG4gICAgY29uc29sZS5sb2cobmV3RGVsZXRpb25UaGluZy50ZXh0Q29udGVudCk7XG4gICAgbmV3RGVsZXRpb25UaGluZy5yZW1vdmUoKVxuICAgIHRvZG9Nb2RhbERldGFpbHMoKS5yZW1vdmVQcm9qZWN0KGRlbEFyZyk7XG4gIH0pO1xufTtcblxuXG4vLyBjcmVhdGVzIG5ldyBQcm9qZWN0c1xuY29uc3QgbmV3UHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IGJ0bkFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5BZGQnKTtcbiAgYnRuQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmKCF0b2RvSG9sZGVyKXtcbiAgICBjcmVhdGVOZXdQcm9qZWN0KCk7XG4gICAgYWRkQ2FuY2VsSW5pdHMoKTtcbiAgICB9O1xuICB9KTtcbn07XG4vLyBhZGRpbmcgYW5kIGNhbmNlbGluZyBUb2Rvc1xuZnVuY3Rpb24gYWRkQ2FuY2VsSW5pdHMoKSB7XG4gIHRvZG9Ib2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxCb3gnKTtcbiAgY29uc3QgY2FuY2VsaW5nU3R1ZmYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsaW5nU3R1ZmYnKTtcbiAgY2FuY2VsaW5nU3R1ZmYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdG9kb0hvbGRlci5yZW1vdmUoKTtcbiAgICBhZGRDYW5jZWxJbml0cygpO1xuICB9KTtcblxuICBjb25zdCBhZGRTdHVmZlRvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRpbmdTdHVmZicpO1xuICBhZGRTdHVmZlRvTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtYWtpbmdPYmooKTtcbiAgICB0b2RvSG9sZGVyLnJlbW92ZSgpO1xuICAgIG9iakNyZWF0aW9uKCk7XG4gICAgY3JlYXRlTmV3UHJvamVjdCgpO1xuICAgIGFkZENhbmNlbEluaXRzKCk7XG4gICAgc2VsZWN0aW5nUHJvamVjdCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IFByb2plY3RzRmFjdG9yeSA9IGZ1bmN0aW9uKHByb2plY3ROYW1lKSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvamVjdE5hbWVcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIG1ha2luZ09iaigpIHtcbm5ld1Byb2plY3QgPSBQcm9qZWN0c0ZhY3RvcnkoaW5wdXRGb3JtLnZhbHVlKTtcbnRvZG9MaXN0QXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbn07XG5cblxuZXhwb3J0IHtuZXdQcm9qZWN0cywgdG9kb0xpc3RBcnJheSwgbmV3UHJvamVjdH07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=