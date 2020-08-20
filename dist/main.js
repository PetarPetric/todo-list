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
    const addTask = document.createElement('div');
    const taskInput = document.createElement('input');
    const addTaskButtn = document.createElement('button');
    const allTasks = document.createElement('allTasks');
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
    const submitButtonDiv = document.createElement('div');
    const submitButton = document.createElement('button');

    submitButton.textContent = "Submit";
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

    submitButtonDiv.classList.add('submitButtonDiv');
    dueDate.setAttribute('id', 'dateInput');
    dateDiv.classList.add('dateDiv');
    addTask.classList.add('addTask');
    allTasks.classList.add('allTasks');
    taskInput.classList.add('taskInput');
    modalBody.classList.add('modalBody');
    addTaskButtn.classList.add('addTaskButton');
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
    modalBody.append(addTask);
    modalBody.append(submitButtonDiv);
    submitButtonDiv.append(submitButton);
    priorityDiv.append(priority);
    priorityDiv.append(priorities);
    dateDiv.append(paraDate);  
    dateDiv.append(dueDate);
    addTask.append(addTaskButtn);
    addTask.append(taskInput);
    paraTaskDiv.append(paraTask);
    headerDiv.append(todoTitle);
    headerDiv.append(cancelIcon);

    todoTitle.textContent = _projectLogic__WEBPACK_IMPORTED_MODULE_0__["todoListArray"][arg].projectName;
  };

   function createDomTask(arr) {
    let allTasks = document.querySelector('.allTasks');
    for(let i = 0; i < arr.length; i++) {
      let addedTask = document.createElement('div');
      addedTask.setAttribute('id', `task-${[i]}`);
      allTasks.append(addedTask);
      let newTask = document.createTextNode(arr[i])
      console.log(arr[i]);
      newTask.innerHTML = '';
      allTasks.append(newTask);
    };

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
    insideTodo, cleanInsideTodo, todoModal, removeProject, createDomTask
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
      taskAdded(indexNum);
      readTasks(indexNum)
    } else {
      Object(_projectListDom__WEBPACK_IMPORTED_MODULE_0__["todoModalDetails"])().cleanInsideTodo();
      Object(_projectListDom__WEBPACK_IMPORTED_MODULE_0__["todoModalDetails"])().todoModal();
      Object(_projectListDom__WEBPACK_IMPORTED_MODULE_0__["todoModalDetails"])().insideTodo(indexNum);
      taskAdded(indexNum);
      readTasks(indexNum)
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
    const todoArr = [];
    return {
      projectName, todoArr
  };
};

function makingObj() {
  newProject = ProjectsFactory(_projectListDom__WEBPACK_IMPORTED_MODULE_0__["inputForm"].value);
  todoListArray.push(newProject);
  console.log(todoListArray);
};

function pushTaskToObj(num) {
  const taskInput = document.querySelector('.taskInput');
  
  let toDoTasks = todoListArray[num].todoArr
  toDoTasks.push(taskInput.value);
  Object(_projectListDom__WEBPACK_IMPORTED_MODULE_0__["todoModalDetails"])().createDomTask(toDoTasks);

};

function readTasks(num) {
  let toDoTasks = todoListArray[num].todoArr
  Object(_projectListDom__WEBPACK_IMPORTED_MODULE_0__["todoModalDetails"])().createDomTask(toDoTasks);
}

const taskAdded = (num) => {
  let addTaskButton = document.querySelector('.addTaskButton');
  addTaskButton.addEventListener('click', () => {
  pushTaskToObj(num);
  });
};






/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3RMaXN0RG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0TG9naWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdnRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvL0dsb2JhbCBzY29wZS8vXG5jb25zdCBtYWluQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbmNvbnN0IGFjdHVhbFN0dWZmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCBwYWdlUmVuZGVyID0gKCgpID0+IHtcbiAgICB2YXIgdGl0bGUgPSBcIlRvIERvIExpc3RcIlxuICAgIGNyZWF0ZVRpdGxlKHRpdGxlKTtcbiAgICBjcmVhdGVQcm9qZWN0SG9sZGVyKCk7XG4gICAgcHJvamVjdExpc3RzKCk7XG4gICAgYnRuUHJvamVjdEFkZCgpO1xuICAgIHByb2plY3ROYW1lcygpO1xufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlKHRpdGxlKSB7XG4gICAgY29uc3QgdGl0bGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZUJveC5jbGFzc0xpc3QuYWRkKCd0aXRsZUJveCcpO1xuICAgIG1haW5Cb3guYXBwZW5kKHRpdGxlQm94KTtcbiAgICBjb25zdCBhY3R1YWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpdGxlKTtcbiAgICB0aXRsZUJveC5hcHBlbmRDaGlsZChhY3R1YWxUaXRsZSk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0SG9sZGVyKCkge1xuICAgIGFjdHVhbFN0dWZmLmNsYXNzTGlzdC5hZGQoJ2FjdHVhbFN0dWZmJyk7XG5cbiAgICBtYWluQm94LmFwcGVuZChhY3R1YWxTdHVmZik7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RMaXN0cygpIHtcbiAgICBjb25zdCBwcm9qZWN0T3ZlcnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXG4gICAgcHJvamVjdE92ZXJ2aWV3LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RPdmVydmlldycpO1xuXG4gICAgYWN0dWFsU3R1ZmYuYXBwZW5kKHByb2plY3RMaXN0LCBwcm9qZWN0T3ZlcnZpZXcpO1xufVxuXG5mdW5jdGlvbiBidG5Qcm9qZWN0QWRkKCkge1xuICAgIGNvbnN0IGJ0bkFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bkFkZC5jbGFzc0xpc3QuYWRkKCdidG5BZGQnKTtcbiAgICBidG5BZGQudGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0XCJcblxuICAgIHByb2plY3RMaXN0LmFwcGVuZChidG5BZGQpO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0TmFtZXMoKSB7XG4gICAgY29uc3QgYWN0dWFsUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhY3R1YWxQcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdhY3R1YWxQcm9qZWN0cycpO1xuICAgIHByb2plY3RMaXN0LmFwcGVuZChhY3R1YWxQcm9qZWN0cyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VSZW5kZXI7IiwiaW1wb3J0IHBhZ2VSZW5kZXIgZnJvbSAnLi9kb20nO1xuaW1wb3J0IHtuZXdQcm9qZWN0c30gZnJvbSAnLi9wcm9qZWN0TG9naWMnO1xuXG5wYWdlUmVuZGVyKCk7XG5uZXdQcm9qZWN0cygpO1xuIiwiaW1wb3J0IHt0b2RvTGlzdEFycmF5LCBuZXdQcm9qZWN0fSBmcm9tICcuL3Byb2plY3RMb2dpYyc7XG5cbmxldCBtb2RhbFBsYWNlO1xubGV0IG1vZGFsRm9ybTtcbmxldCBpbnB1dEZvcm07XG5sZXQgdG9kb092ZXJWaWV3O1xubGV0IHRvZG9EZXRhaWxzO1xuXG5jb25zdCBkaXZQcm9qZWN0TGlzdCA9IFtdO1xuXG5jb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gKCkgPT4ge1xuICBpbml0TW9kYWwoKTtcbiAgaW5wdXRJbml0KCk7XG59O1xuXG4gIGNvbnN0IGluaXRNb2RhbCA9ICgpID0+IHtcbiAgICBtb2RhbEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbFBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdHVhbFByb2plY3RzJyk7XG4gICAgbW9kYWxGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW9kYWxCb3gnKTtcbiAgICBtb2RhbFBsYWNlLmFwcGVuZChtb2RhbEZvcm0pO1xuICB9O1xuXG4gIGNvbnN0IGlucHV0SW5pdCA9ICgpID0+IHtcblxuICBpbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBhZGRpbmdTdHVmZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBjYW5jZWxTdHVmZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnYnV0dG9uRGl2Jyk7XG5cbiAgaW5wdXRGb3JtLmNsYXNzTGlzdC5hZGQoJ2p1c3RJbnB1dCcpO1xuICBpbnB1dEZvcm0uc2V0QXR0cmlidXRlKCduYW1lJywgJ2p1c3RJbnB1dCcpO1xuXG4gIGFkZGluZ1N0dWZmLmNsYXNzTGlzdC5hZGQoJ2FkZGluZ1N0dWZmJyk7XG4gIGNhbmNlbFN0dWZmLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbGluZ1N0dWZmJyk7XG5cbiAgYWRkaW5nU3R1ZmYudGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICBjYW5jZWxTdHVmZi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbiAgbW9kYWxGb3JtLmFwcGVuZChpbnB1dEZvcm0pO1xuICBtb2RhbEZvcm0uYXBwZW5kKGJ1dHRvbkRpdik7XG4gIGJ1dHRvbkRpdi5hcHBlbmQoYWRkaW5nU3R1ZmYpO1xuICBidXR0b25EaXYuYXBwZW5kKGNhbmNlbFN0dWZmKTtcblxuICBtb2RhbEZvcm0uY2xhc3NMaXN0LmFkZCgnaW5wdXRGb3JtJyk7XG4gIGlucHV0Rm9ybS5wbGFjZWhvbGRlciA9IFwiUHJvamVjdCBOYW1lXCI7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlZFByb2plY3QgPSAoKSA9PiB7XG5cbiAgY29uc3QgbmV3UHJvamVjdENyZWF0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcHJvamVjdENyZWF0ZWRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gIGNvbnN0IHByb2plY3RDcmVhdGVkVHh0ID0gbmV3UHJvamVjdC5wcm9qZWN0TmFtZTtcblxuICBtb2RhbFBsYWNlLmFwcGVuZChuZXdQcm9qZWN0Q3JlYXRlZCk7XG4gIG5ld1Byb2plY3RDcmVhdGVkLmFwcGVuZChwcm9qZWN0Q3JlYXRlZFRpdGxlKTtcbiAgcHJvamVjdENyZWF0ZWRUaXRsZS5hcHBlbmQocHJvamVjdENyZWF0ZWRUeHQpO1xuICBuZXdQcm9qZWN0Q3JlYXRlZC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Q2xhc3MnKTtcbiAgbmV3UHJvamVjdENyZWF0ZWQuc2V0QXR0cmlidXRlKCdpZCcsIG5ld1Byb2plY3QucHJvamVjdE5hbWUpO1xuICBkaXZQcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3RDcmVhdGVkKTtcbiAgfTtcblxuICAvLyBFdmVyeXRoaW5nIHRoYXRzIGluc2lkZSBUb2RvIE1vZGFsIC8vXG5cbmNvbnN0IHRvZG9Nb2RhbERldGFpbHMgPSAoKSA9PiB7XG4gIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuXG4gIGNvbnN0IHRvZG9Nb2RhbCA9ICgpID0+IHtcbiAgICB0b2RvRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9EZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3RvZG9EZXRhaWxzJyk7XG4gICAgdG9kb092ZXJWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RPdmVydmlldycpO1xuICAgIHRvZG9PdmVyVmlldy5hcHBlbmQodG9kb0RldGFpbHMpO1xuICB9O1xuXG4gIC8vIHN0dWZmIGluc2lkZSBQcm9qZWN0IE1vZGFsIC8vXG5cbiAgY29uc3QgaW5zaWRlVG9kbyA9IChhcmcpID0+IHtcbiAgICBjb25zdCBjYW5jZWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbW9kYWxCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgYWRkVGFza0J1dHRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhbGxUYXNrcycpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwYXJhRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3QgcGFyYVRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwYXJhVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5cbiAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBwcmlvcml0aWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICBwYXJhRGF0ZS50ZXh0Q29udGVudCA9IFwiRmluaXNoIHVudGlsbDpcIjtcbiAgICBwYXJhVGFzay50ZXh0Q29udGVudCA9IFwiVGFza3M6XCI7XG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xuICAgIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJMb3dcIjtcbiAgICBtZWRpdW1Qcmlvcml0eS50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG4gICAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG5cbiAgICAvLyBwcmlvcml0aWVzIHZhbHVlc1xuXG4gICAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb3cnKTtcbiAgICBtZWRpdW1Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21lZGl1bScpO1xuICAgIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcblxuICAgIC8vIGFkZGluZyBjbGFzc2VzLCBJRHMgLy9cblxuICAgIHN1Ym1pdEJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKCdzdWJtaXRCdXR0b25EaXYnKTtcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZUlucHV0Jyk7XG4gICAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdkYXRlRGl2Jyk7XG4gICAgYWRkVGFzay5jbGFzc0xpc3QuYWRkKCdhZGRUYXNrJyk7XG4gICAgYWxsVGFza3MuY2xhc3NMaXN0LmFkZCgnYWxsVGFza3MnKTtcbiAgICB0YXNrSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFza0lucHV0Jyk7XG4gICAgbW9kYWxCb2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsQm9keScpO1xuICAgIGFkZFRhc2tCdXR0bi5jbGFzc0xpc3QuYWRkKCdhZGRUYXNrQnV0dG9uJyk7XG4gICAgY2FuY2VsSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhbmNlbEljb24nKTtcbiAgICBoZWFkZXJEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdtb2RhbEhlYWRlcicpO1xuICAgIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5RGl2Jyk7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGFkZFRhc2tCdXR0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtcGx1cy1jaXJjbGVcIj48L2k+JztcbiAgICBjYW5jZWxJY29uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhciBmYS13aW5kb3ctY2xvc2VcIj48L2k+JztcbiAgXG4gICAgLy8gYXBwZW5kaW5nIHN0dWZmLy9cbiAgICBwcmlvcml0aWVzLmFwcGVuZChsb3dQcmlvcml0eSwgbWVkaXVtUHJpb3JpdHksIGhpZ2hQcmlvcml0eSk7XG4gICAgdG9kb0RldGFpbHMuYXBwZW5kKGhlYWRlckRpdik7XG4gICAgdG9kb0RldGFpbHMuYXBwZW5kKG1vZGFsQm9keSk7XG4gICAgbW9kYWxCb2R5LmFwcGVuZChwcmlvcml0eURpdik7XG4gICAgbW9kYWxCb2R5LmFwcGVuZChkYXRlRGl2KTtcbiAgICBtb2RhbEJvZHkuYXBwZW5kKHBhcmFUYXNrRGl2KTtcbiAgICBtb2RhbEJvZHkuYXBwZW5kKGFsbFRhc2tzKTtcbiAgICBtb2RhbEJvZHkuYXBwZW5kKGFkZFRhc2spO1xuICAgIG1vZGFsQm9keS5hcHBlbmQoc3VibWl0QnV0dG9uRGl2KTtcbiAgICBzdWJtaXRCdXR0b25EaXYuYXBwZW5kKHN1Ym1pdEJ1dHRvbik7XG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kKHByaW9yaXR5KTtcbiAgICBwcmlvcml0eURpdi5hcHBlbmQocHJpb3JpdGllcyk7XG4gICAgZGF0ZURpdi5hcHBlbmQocGFyYURhdGUpOyAgXG4gICAgZGF0ZURpdi5hcHBlbmQoZHVlRGF0ZSk7XG4gICAgYWRkVGFzay5hcHBlbmQoYWRkVGFza0J1dHRuKTtcbiAgICBhZGRUYXNrLmFwcGVuZCh0YXNrSW5wdXQpO1xuICAgIHBhcmFUYXNrRGl2LmFwcGVuZChwYXJhVGFzayk7XG4gICAgaGVhZGVyRGl2LmFwcGVuZCh0b2RvVGl0bGUpO1xuICAgIGhlYWRlckRpdi5hcHBlbmQoY2FuY2VsSWNvbik7XG5cbiAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvTGlzdEFycmF5W2FyZ10ucHJvamVjdE5hbWU7XG4gIH07XG5cbiAgIGZ1bmN0aW9uIGNyZWF0ZURvbVRhc2soYXJyKSB7XG4gICAgbGV0IGFsbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbFRhc2tzJyk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGFkZGVkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYWRkZWRUYXNrLnNldEF0dHJpYnV0ZSgnaWQnLCBgdGFzay0ke1tpXX1gKTtcbiAgICAgIGFsbFRhc2tzLmFwcGVuZChhZGRlZFRhc2spO1xuICAgICAgbGV0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhcnJbaV0pXG4gICAgICBjb25zb2xlLmxvZyhhcnJbaV0pO1xuICAgICAgbmV3VGFzay5pbm5lckhUTUwgPSAnJztcbiAgICAgIGFsbFRhc2tzLmFwcGVuZChuZXdUYXNrKTtcbiAgICB9O1xuXG4gIH07XG5cblxuXG4gIC8vIFJlbW92ZSBwcm9qZWN0IGZ1bmN0aW9uLy9cblxuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKGRlbEFyZykgPT4ge1xuICAgIHRvZG9EZXRhaWxzLnJlbW92ZSgpO1xuICAgIHRvZG9MaXN0QXJyYXkuc3BsaWNlKGRlbEFyZywgMSk7XG4gICAgZGl2UHJvamVjdExpc3Quc3BsaWNlKGRlbEFyZywgMSk7XG4gICAgY29uc29sZS5sb2codG9kb0xpc3RBcnJheSk7XG4gICAgY29uc29sZS5sb2coZGl2UHJvamVjdExpc3QpO1xuICB9O1xuXG5cbiAgY29uc3QgY2xlYW5JbnNpZGVUb2RvID0gKCkgPT4ge1xuICAgIHRvZG9EZXRhaWxzLnJlbW92ZSgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaW5zaWRlVG9kbywgY2xlYW5JbnNpZGVUb2RvLCB0b2RvTW9kYWwsIHJlbW92ZVByb2plY3QsIGNyZWF0ZURvbVRhc2tcbiAgfTtcbn07XG5cblxuY29uc3Qgb2JqQ3JlYXRpb24gPSAoKSA9PiB7XG4gIGlmKGlucHV0Rm9ybS52YWx1ZSA9PT0gXCJcIikge1xuICBhbGVydChcIkNBTlQgQ1JFQVRFIEVNUFRZIFBST0pFQ1RcIik7XG4gIH0gZWxzZSB7Y3JlYXRlZFByb2plY3QoKX07XG59O1xuXG5leHBvcnQge2luaXRNb2RhbCwgaW5wdXRJbml0LCBjcmVhdGVOZXdQcm9qZWN0LCBjcmVhdGVkUHJvamVjdCwgb2JqQ3JlYXRpb24sIGlucHV0Rm9ybSwgdG9kb01vZGFsRGV0YWlscywgdG9kb0RldGFpbHMsIGRpdlByb2plY3RMaXN0fTsiLCJpbXBvcnQge2NyZWF0ZU5ld1Byb2plY3QsIG9iakNyZWF0aW9uLCBpbnB1dEZvcm0sIHRvZG9Nb2RhbERldGFpbHMsIHRvZG9EZXRhaWxzLCBkaXZQcm9qZWN0TGlzdH0gZnJvbSAnLi9wcm9qZWN0TGlzdERvbSc7XG5cbmNvbnN0IHRvZG9MaXN0QXJyYXkgPSBbXTtcbmxldCBuZXdQcm9qZWN0O1xubGV0IHRvZG9Ib2xkZXI7XG5cbmNvbnN0IHNlbGVjdGluZ1Byb2plY3QgPSAoKSA9PiB7XG4gIGRpdlByb2plY3RMaXN0LmZvckVhY2goY2xpY2thYmxlID0+IHtcbiAgY2xpY2thYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgbGV0IGluZGV4TnVtID0gZGl2UHJvamVjdExpc3QuaW5kZXhPZihlLmN1cnJlbnRUYXJnZXQpO1xuICAgIGxldCBuZXdBcmd1bWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUudGFyZ2V0LnBhcmVudE5vZGUudGV4dENvbnRlbnQpO1xuICAgIGlmKCF0b2RvRGV0YWlscykge1xuICAgICAgdG9kb01vZGFsRGV0YWlscygpLnRvZG9Nb2RhbCgpO1xuICAgICAgdG9kb01vZGFsRGV0YWlscygpLmluc2lkZVRvZG8oaW5kZXhOdW0pO1xuICAgICAgdGFza0FkZGVkKGluZGV4TnVtKTtcbiAgICAgIHJlYWRUYXNrcyhpbmRleE51bSlcbiAgICB9IGVsc2Uge1xuICAgICAgdG9kb01vZGFsRGV0YWlscygpLmNsZWFuSW5zaWRlVG9kbygpO1xuICAgICAgdG9kb01vZGFsRGV0YWlscygpLnRvZG9Nb2RhbCgpO1xuICAgICAgdG9kb01vZGFsRGV0YWlscygpLmluc2lkZVRvZG8oaW5kZXhOdW0pO1xuICAgICAgdGFza0FkZGVkKGluZGV4TnVtKTtcbiAgICAgIHJlYWRUYXNrcyhpbmRleE51bSlcbiAgICB9O1xuICAgIHJlbW92ZUJ1dHRvbihpbmRleE51bSwgbmV3QXJndW1lbnQpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cblxuLy8gcmVtb3ZlIGJ1dHRvblxuY29uc3QgcmVtb3ZlQnV0dG9uID0gKGRlbEFyZywgZGVsQXJnMiA9IDApID0+IHtcbiAgY29uc3QgY2FuY2VsSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWxJY29uJyk7XG4gIGNhbmNlbEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbGV0IG5ld0RlbGV0aW9uVGhpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWxBcmcyLnRleHRDb250ZW50KVxuICAgIGNvbnNvbGUubG9nKG5ld0RlbGV0aW9uVGhpbmcudGV4dENvbnRlbnQpO1xuICAgIG5ld0RlbGV0aW9uVGhpbmcucmVtb3ZlKClcbiAgICB0b2RvTW9kYWxEZXRhaWxzKCkucmVtb3ZlUHJvamVjdChkZWxBcmcpO1xuICB9KTtcbn07XG5cblxuLy8gY3JlYXRlcyBuZXcgUHJvamVjdHNcbmNvbnN0IG5ld1Byb2plY3RzID0gKCkgPT4ge1xuICBjb25zdCBidG5BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuQWRkJyk7XG4gIGJ0bkFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZighdG9kb0hvbGRlcil7XG4gICAgY3JlYXRlTmV3UHJvamVjdCgpO1xuICAgIGFkZENhbmNlbEluaXRzKCk7XG4gICAgfTtcbiAgfSk7XG59O1xuLy8gYWRkaW5nIGFuZCBjYW5jZWxpbmcgVG9kb3NcbmZ1bmN0aW9uIGFkZENhbmNlbEluaXRzKCkge1xuICB0b2RvSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQm94Jyk7XG4gIGNvbnN0IGNhbmNlbGluZ1N0dWZmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbGluZ1N0dWZmJyk7XG4gIGNhbmNlbGluZ1N0dWZmLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZG9Ib2xkZXIucmVtb3ZlKCk7XG4gICAgYWRkQ2FuY2VsSW5pdHMoKTtcbiAgfSk7XG5cbiAgY29uc3QgYWRkU3R1ZmZUb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkaW5nU3R1ZmYnKTtcbiAgYWRkU3R1ZmZUb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbWFraW5nT2JqKCk7XG4gICAgdG9kb0hvbGRlci5yZW1vdmUoKTtcbiAgICBvYmpDcmVhdGlvbigpO1xuICAgIGNyZWF0ZU5ld1Byb2plY3QoKTtcbiAgICBhZGRDYW5jZWxJbml0cygpO1xuICAgIHNlbGVjdGluZ1Byb2plY3QoKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBQcm9qZWN0c0ZhY3RvcnkgPSBmdW5jdGlvbihwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHRvZG9BcnIgPSBbXTtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvamVjdE5hbWUsIHRvZG9BcnJcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIG1ha2luZ09iaigpIHtcbiAgbmV3UHJvamVjdCA9IFByb2plY3RzRmFjdG9yeShpbnB1dEZvcm0udmFsdWUpO1xuICB0b2RvTGlzdEFycmF5LnB1c2gobmV3UHJvamVjdCk7XG4gIGNvbnNvbGUubG9nKHRvZG9MaXN0QXJyYXkpO1xufTtcblxuZnVuY3Rpb24gcHVzaFRhc2tUb09iaihudW0pIHtcbiAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tJbnB1dCcpO1xuICBcbiAgbGV0IHRvRG9UYXNrcyA9IHRvZG9MaXN0QXJyYXlbbnVtXS50b2RvQXJyXG4gIHRvRG9UYXNrcy5wdXNoKHRhc2tJbnB1dC52YWx1ZSk7XG4gIHRvZG9Nb2RhbERldGFpbHMoKS5jcmVhdGVEb21UYXNrKHRvRG9UYXNrcyk7XG5cbn07XG5cbmZ1bmN0aW9uIHJlYWRUYXNrcyhudW0pIHtcbiAgbGV0IHRvRG9UYXNrcyA9IHRvZG9MaXN0QXJyYXlbbnVtXS50b2RvQXJyXG4gIHRvZG9Nb2RhbERldGFpbHMoKS5jcmVhdGVEb21UYXNrKHRvRG9UYXNrcyk7XG59XG5cbmNvbnN0IHRhc2tBZGRlZCA9IChudW0pID0+IHtcbiAgbGV0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFza0J1dHRvbicpO1xuICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwdXNoVGFza1RvT2JqKG51bSk7XG4gIH0pO1xufTtcblxuXG5leHBvcnQge25ld1Byb2plY3RzLCB0b2RvTGlzdEFycmF5LCBuZXdQcm9qZWN0fTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==