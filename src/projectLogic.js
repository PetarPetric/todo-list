import {createNewProject, objCreation, inputForm, todoModalDetails, todoDetails, divProjectList} from './projectListDom';

const todoListArray = [];
let newProject;
let todoHolder;

const selectingProject = () => {
  divProjectList.forEach(clickable => {
  clickable.addEventListener('click', (e) => {
  let indexNum = divProjectList.indexOf(e.currentTarget);
    let newArgument = document.getElementById(e.target.parentNode.textContent);
    if(!todoDetails) {
      todoModalDetails().todoModal();
      todoModalDetails().insideTodo(indexNum);
    } else {
      todoModalDetails().cleanInsideTodo();
      todoModalDetails().todoModal();
      todoModalDetails().insideTodo(indexNum);
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
    todoModalDetails().removeProject(delArg);
  });
};


// creates new Projects
const newProjects = () => {
  const btnAdd = document.querySelector('.btnAdd');
  btnAdd.addEventListener('click', () => {
    if(!todoHolder){
    createNewProject();
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
    objCreation();
    createNewProject();
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
newProject = ProjectsFactory(inputForm.value);
todoListArray.push(newProject);
};


export {newProjects, todoListArray, newProject};

