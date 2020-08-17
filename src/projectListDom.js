import {makingObj, todoListArray, newProject} from './projectLogic';

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
  const projectCreatedTxt = newProject.projectName;

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
    todoTitle.textContent = todoListArray[arg].projectName;

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

export {initModal, inputInit, createNewProject, createdProject, objCreation, inputForm, generatingFunction, todoModalDetails};