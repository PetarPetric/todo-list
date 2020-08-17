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
/*! exports provided: initModal, inputInit, createNewProject, createdProject, objCreation, inputForm, generatingFunction, todoModalDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initModal", function() { return initModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputInit", function() { return inputInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewProject", function() { return createNewProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createdProject", function() { return createdProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objCreation", function() { return objCreation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputForm", function() { return inputForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatingFunction", function() { return generatingFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoModalDetails", function() { return todoModalDetails; });
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

// 

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

// Function that generates modal once clicked on project in project list //

const generatingFunction = () => {
  divProjectList.forEach(clickable => {
    clickable.addEventListener('click', (e) => {
    let indexNum = divProjectList.indexOf(e.currentTarget);
      if(!todoDetails){
        todoModalDetails().todoModal();
        todoModalDetails().insideTodo(indexNum);
      } else {
        todoModalDetails().cleanInsideTodo();
        todoModalDetails().todoModal();
        todoModalDetails().insideTodo(indexNum);
      };
    });
  }); 
};


// Everything thats niside Todo Modal //  

const todoModalDetails = () => {
  let todoTitle = document.createElement('h2');
  
  const todoModal = () => {
    todoDetails = document.createElement('div');
    todoDetails.classList.add('todoDetails');
    todoOverView = document.querySelector('.projectOverview');
    todoOverView.append(todoDetails);
  };

  const insideTodo = (arg) => {
    todoDetails.append(todoTitle);
    todoTitle.textContent = _projectLogic__WEBPACK_IMPORTED_MODULE_0__["todoListArray"][arg].projectName;

  }

  const cleanInsideTodo = () => {
  todoDetails.remove();
  };

  return {
    insideTodo, cleanInsideTodo, todoModal
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
        Object(_projectListDom__WEBPACK_IMPORTED_MODULE_0__["generatingFunction"])();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3RMaXN0RG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0TG9naWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUseUVBQVUsRTs7Ozs7Ozs7Ozs7O0FDbkR6QjtBQUFBO0FBQUE7QUFBK0I7QUFDWTs7QUFFM0Msb0RBQVU7QUFDVixpRUFBVzs7Ozs7Ozs7Ozs7OztBQ0pYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9FOztBQUVwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsd0RBQVU7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHLEU7QUFDSDs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QiwyREFBYTs7QUFFekM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLE9BQU87QUFDVjs7Ozs7Ozs7Ozs7Ozs7QUNwSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRHOzs7QUFHNUc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3RUFBZ0I7QUFDcEI7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUVBQVc7QUFDbkIsUUFBUSx3RUFBZ0I7QUFDeEI7QUFDQSxRQUFRLDBFQUFrQjtBQUMxQixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyx5REFBUztBQUMxQztBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vR2xvYmFsIHNjb3BlLy9cbmNvbnN0IG1haW5Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuY29uc3QgYWN0dWFsU3R1ZmYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmNvbnN0IHBhZ2VSZW5kZXIgPSAoKCkgPT4ge1xuICAgIHZhciB0aXRsZSA9IFwiVG8gRG8gTGlzdFwiXG4gICAgY3JlYXRlVGl0bGUodGl0bGUpO1xuICAgIGNyZWF0ZVByb2plY3RIb2xkZXIoKTtcbiAgICBwcm9qZWN0TGlzdHMoKTtcbiAgICBidG5Qcm9qZWN0QWRkKCk7XG4gICAgcHJvamVjdE5hbWVzKCk7XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlVGl0bGUodGl0bGUpIHtcbiAgICBjb25zdCB0aXRsZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlQm94LmNsYXNzTGlzdC5hZGQoJ3RpdGxlQm94Jyk7XG4gICAgbWFpbkJveC5hcHBlbmQodGl0bGVCb3gpO1xuICAgIGNvbnN0IGFjdHVhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGl0bGUpO1xuICAgIHRpdGxlQm94LmFwcGVuZENoaWxkKGFjdHVhbFRpdGxlKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RIb2xkZXIoKSB7XG4gICAgYWN0dWFsU3R1ZmYuY2xhc3NMaXN0LmFkZCgnYWN0dWFsU3R1ZmYnKTtcblxuICAgIG1haW5Cb3guYXBwZW5kKGFjdHVhbFN0dWZmKTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdExpc3RzKCkge1xuICAgIGNvbnN0IHByb2plY3RPdmVydmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cbiAgICBwcm9qZWN0T3ZlcnZpZXcuY2xhc3NMaXN0LmFkZCgncHJvamVjdE92ZXJ2aWV3Jyk7XG5cbiAgICBhY3R1YWxTdHVmZi5hcHBlbmQocHJvamVjdExpc3QsIHByb2plY3RPdmVydmlldyk7XG59XG5cbmZ1bmN0aW9uIGJ0blByb2plY3RBZGQoKSB7XG4gICAgY29uc3QgYnRuQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuQWRkLmNsYXNzTGlzdC5hZGQoJ2J0bkFkZCcpO1xuICAgIGJ0bkFkZC50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3RcIlxuXG4gICAgcHJvamVjdExpc3QuYXBwZW5kKGJ0bkFkZCk7XG59XG5cbmZ1bmN0aW9uIHByb2plY3ROYW1lcygpIHtcbiAgICBjb25zdCBhY3R1YWxQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFjdHVhbFByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ2FjdHVhbFByb2plY3RzJyk7XG4gICAgcHJvamVjdExpc3QuYXBwZW5kKGFjdHVhbFByb2plY3RzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZVJlbmRlcjsiLCJpbXBvcnQgcGFnZVJlbmRlciBmcm9tICcuL2RvbSc7XG5pbXBvcnQge25ld1Byb2plY3RzfSBmcm9tICcuL3Byb2plY3RMb2dpYyc7XG5cbnBhZ2VSZW5kZXIoKTtcbm5ld1Byb2plY3RzKCk7XG4iLCJpbXBvcnQge21ha2luZ09iaiwgdG9kb0xpc3RBcnJheSwgbmV3UHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0TG9naWMnO1xuXG5sZXQgbW9kYWxQbGFjZTtcbmxldCBtb2RhbEZvcm07XG5sZXQgaW5wdXRGb3JtO1xubGV0IHRvZG9PdmVyVmlldztcbmxldCB0b2RvRGV0YWlscztcblxuXG5jb25zdCBkaXZQcm9qZWN0TGlzdCA9IFtdO1xuXG5jb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gKCkgPT4ge1xuICBpbml0TW9kYWwoKTtcbiAgaW5wdXRJbml0KCk7XG59XG5cbmNvbnN0IGluaXRNb2RhbCA9ICgpID0+IHtcbiAgbW9kYWxGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vZGFsUGxhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0dWFsUHJvamVjdHMnKTtcbiAgbW9kYWxGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW9kYWxCb3gnKTtcbiAgbW9kYWxQbGFjZS5hcHBlbmQobW9kYWxGb3JtKTtcblxufVxuXG5jb25zdCBpbnB1dEluaXQgPSAoKSA9PiB7XG5cbiAgaW5wdXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgYWRkaW5nU3R1ZmYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgY2FuY2VsU3R1ZmYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ1dHRvbkRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J1dHRvbkRpdicpO1xuICBcbiAgaW5wdXRGb3JtLmNsYXNzTGlzdC5hZGQoJ2p1c3RJbnB1dCcpO1xuICBpbnB1dEZvcm0uc2V0QXR0cmlidXRlKCduYW1lJywgJ2p1c3RJbnB1dCcpO1xuICBcbiAgYWRkaW5nU3R1ZmYuY2xhc3NMaXN0LmFkZCgnYWRkaW5nU3R1ZmYnKTtcbiAgY2FuY2VsU3R1ZmYuY2xhc3NMaXN0LmFkZCgnY2FuY2VsaW5nU3R1ZmYnKTtcbiAgXG4gIGFkZGluZ1N0dWZmLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgY2FuY2VsU3R1ZmYudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBcbiAgbW9kYWxGb3JtLmFwcGVuZChpbnB1dEZvcm0pO1xuICBtb2RhbEZvcm0uYXBwZW5kKGJ1dHRvbkRpdik7XG4gIGJ1dHRvbkRpdi5hcHBlbmQoYWRkaW5nU3R1ZmYpO1xuICBidXR0b25EaXYuYXBwZW5kKGNhbmNlbFN0dWZmKTtcblxuICBtb2RhbEZvcm0uY2xhc3NMaXN0LmFkZCgnaW5wdXRGb3JtJyk7XG4gIGlucHV0Rm9ybS5wbGFjZWhvbGRlciA9IFwiUHJvamVjdCBOYW1lXCI7XG59O1xuXG4vLyBcblxuY29uc3QgY3JlYXRlZFByb2plY3QgPSAoKSA9PiB7XG5cbiAgY29uc3QgbmV3UHJvamVjdENyZWF0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcHJvamVjdENyZWF0ZWRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gIGNvbnN0IHByb2plY3RDcmVhdGVkVHh0ID0gbmV3UHJvamVjdC5wcm9qZWN0TmFtZTtcblxuICBtb2RhbFBsYWNlLmFwcGVuZChuZXdQcm9qZWN0Q3JlYXRlZCk7XG4gIG5ld1Byb2plY3RDcmVhdGVkLmFwcGVuZChwcm9qZWN0Q3JlYXRlZFRpdGxlKTtcbiAgcHJvamVjdENyZWF0ZWRUaXRsZS5hcHBlbmQocHJvamVjdENyZWF0ZWRUeHQpO1xuICBuZXdQcm9qZWN0Q3JlYXRlZC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Q2xhc3MnKTtcbiAgZGl2UHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0Q3JlYXRlZCk7XG59O1xuXG4vLyBGdW5jdGlvbiB0aGF0IGdlbmVyYXRlcyBtb2RhbCBvbmNlIGNsaWNrZWQgb24gcHJvamVjdCBpbiBwcm9qZWN0IGxpc3QgLy9cblxuY29uc3QgZ2VuZXJhdGluZ0Z1bmN0aW9uID0gKCkgPT4ge1xuICBkaXZQcm9qZWN0TGlzdC5mb3JFYWNoKGNsaWNrYWJsZSA9PiB7XG4gICAgY2xpY2thYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBsZXQgaW5kZXhOdW0gPSBkaXZQcm9qZWN0TGlzdC5pbmRleE9mKGUuY3VycmVudFRhcmdldCk7XG4gICAgICBpZighdG9kb0RldGFpbHMpe1xuICAgICAgICB0b2RvTW9kYWxEZXRhaWxzKCkudG9kb01vZGFsKCk7XG4gICAgICAgIHRvZG9Nb2RhbERldGFpbHMoKS5pbnNpZGVUb2RvKGluZGV4TnVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG9Nb2RhbERldGFpbHMoKS5jbGVhbkluc2lkZVRvZG8oKTtcbiAgICAgICAgdG9kb01vZGFsRGV0YWlscygpLnRvZG9Nb2RhbCgpO1xuICAgICAgICB0b2RvTW9kYWxEZXRhaWxzKCkuaW5zaWRlVG9kbyhpbmRleE51bSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9KTsgXG59O1xuXG5cbi8vIEV2ZXJ5dGhpbmcgdGhhdHMgbmlzaWRlIFRvZG8gTW9kYWwgLy8gIFxuXG5jb25zdCB0b2RvTW9kYWxEZXRhaWxzID0gKCkgPT4ge1xuICBsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgXG4gIGNvbnN0IHRvZG9Nb2RhbCA9ICgpID0+IHtcbiAgICB0b2RvRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9EZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3RvZG9EZXRhaWxzJyk7XG4gICAgdG9kb092ZXJWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RPdmVydmlldycpO1xuICAgIHRvZG9PdmVyVmlldy5hcHBlbmQodG9kb0RldGFpbHMpO1xuICB9O1xuXG4gIGNvbnN0IGluc2lkZVRvZG8gPSAoYXJnKSA9PiB7XG4gICAgdG9kb0RldGFpbHMuYXBwZW5kKHRvZG9UaXRsZSk7XG4gICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdG9kb0xpc3RBcnJheVthcmddLnByb2plY3ROYW1lO1xuXG4gIH1cblxuICBjb25zdCBjbGVhbkluc2lkZVRvZG8gPSAoKSA9PiB7XG4gIHRvZG9EZXRhaWxzLnJlbW92ZSgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaW5zaWRlVG9kbywgY2xlYW5JbnNpZGVUb2RvLCB0b2RvTW9kYWxcbiAgfTtcbn07XG5cblxuY29uc3Qgb2JqQ3JlYXRpb24gPSAoKSA9PiB7XG4gIGlmKGlucHV0Rm9ybS52YWx1ZSA9PT0gXCJcIikge1xuICAgIGFsZXJ0KFwiQ0FOVCBDUkVBVEUgRU1QVFkgUFJPSkVDVFwiKTtcbiAgfSBlbHNlIHtjcmVhdGVkUHJvamVjdCgpfTtcbn07XG5cbmV4cG9ydCB7aW5pdE1vZGFsLCBpbnB1dEluaXQsIGNyZWF0ZU5ld1Byb2plY3QsIGNyZWF0ZWRQcm9qZWN0LCBvYmpDcmVhdGlvbiwgaW5wdXRGb3JtLCBnZW5lcmF0aW5nRnVuY3Rpb24sIHRvZG9Nb2RhbERldGFpbHN9OyIsImltcG9ydCB7Y3JlYXRlTmV3UHJvamVjdCwgb2JqQ3JlYXRpb24sIGlucHV0Rm9ybSwgZ2VuZXJhdGluZ0Z1bmN0aW9uLCB0b2RvU2V0dGluZ3N9IGZyb20gJy4vcHJvamVjdExpc3REb20nO1xuXG5cbmNvbnN0IHRvZG9MaXN0QXJyYXkgPSBbXTtcbmxldCBuZXdQcm9qZWN0O1xubGV0IHRvZG9Ib2xkZXI7XG5cbmNvbnN0IG5ld1Byb2plY3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ0bkFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5BZGQnKTtcbiAgICBidG5BZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYoIXRvZG9Ib2xkZXIpe1xuICAgIGNyZWF0ZU5ld1Byb2plY3QoKTtcbiAgICBhZGRDYW5jZWxJbml0cygpO1xuICAgICAgICB9XG4gICAgfSlcblxufTtcblxuZnVuY3Rpb24gYWRkQ2FuY2VsSW5pdHMoKSB7XG4gICAgdG9kb0hvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbEJveCcpO1xuICAgIGNvbnN0IGNhbmNlbGluZ1N0dWZmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbGluZ1N0dWZmJyk7XG4gICAgY2FuY2VsaW5nU3R1ZmYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdG9kb0hvbGRlci5yZW1vdmUoKTtcbiAgICBhZGRDYW5jZWxJbml0cygpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWRkU3R1ZmZUb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkaW5nU3R1ZmYnKTtcbiAgICBhZGRTdHVmZlRvTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbWFraW5nT2JqKCk7XG4gICAgICAgIHRvZG9Ib2xkZXIucmVtb3ZlKCk7XG4gICAgICAgIG9iakNyZWF0aW9uKCk7XG4gICAgICAgIGNyZWF0ZU5ld1Byb2plY3QoKTtcbiAgICAgICAgYWRkQ2FuY2VsSW5pdHMoKTtcbiAgICAgICAgZ2VuZXJhdGluZ0Z1bmN0aW9uKCk7XG4gICAgfSk7XG59XG5cbmNvbnN0IFByb2plY3RzRmFjdG9yeSA9IGZ1bmN0aW9uKHByb2plY3ROYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvamVjdE5hbWVcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ha2luZ09iaigpIHtcbiAgICBuZXdQcm9qZWN0ID0gUHJvamVjdHNGYWN0b3J5KGlucHV0Rm9ybS52YWx1ZSk7XG4gICAgdG9kb0xpc3RBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xufTtcblxuXG5leHBvcnQge25ld1Byb2plY3RzLCBtYWtpbmdPYmosIHRvZG9MaXN0QXJyYXksIG5ld1Byb2plY3R9OyJdLCJzb3VyY2VSb290IjoiIn0=