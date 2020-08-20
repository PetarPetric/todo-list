import {todoListArray, newProject} from './projectLogic';

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
  const projectCreatedTxt = newProject.projectName;

  modalPlace.append(newProjectCreated);
  newProjectCreated.append(projectCreatedTitle);
  projectCreatedTitle.append(projectCreatedTxt);
  newProjectCreated.classList.add('projectClass');
  newProjectCreated.setAttribute('id', newProject.projectName);
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

    todoTitle.textContent = todoListArray[arg].projectName;
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
    todoListArray.splice(delArg, 1);
    divProjectList.splice(delArg, 1);
    console.log(todoListArray);
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

export {initModal, inputInit, createNewProject, createdProject, objCreation, inputForm, todoModalDetails, todoDetails, divProjectList};