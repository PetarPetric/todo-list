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
const allTasks = document.createElement('div');
const taskInput = document.createElement('input');
const addTask = document.createElement('button');
const dueDate = document.createElement('input');
taskInput.classList.add('taskInput');
allTasks.classList.add('modalBody');
cancelIcon.setAttribute('id', 'cancelIcon');
headerDiv.setAttribute('id', 'modalHeader');
dueDate.setAttribute('type', 'date');
addTask.innerHTML = '<i class="fas fa-plus-circle"></i>'
cancelIcon.innerHTML = '<i class="far fa-window-close"></i>'
todoDetails.append(headerDiv);
todoDetails.append(allTasks);
allTasks.append(addTask);
allTasks.append(taskInput);
allTasks.append(dueDate);
headerDiv.append(todoTitle);
headerDiv.append(cancelIcon);

todoTitle.textContent = todoListArray[arg].projectName;

};

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
insideTodo, cleanInsideTodo, todoModal, removeProject
};
};


const objCreation = () => {
if(inputForm.value === "") {
alert("CANT CREATE EMPTY PROJECT");
} else {createdProject()};
};

export {initModal, inputInit, createNewProject, createdProject, objCreation, inputForm, todoModalDetails, todoDetails, divProjectList};