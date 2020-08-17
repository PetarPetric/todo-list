import {createNewProject, objCreation, inputForm, todoModalDetails, todoDetails, divProjectList} from './projectListDom';


const todoListArray = [];
let newProject;
let todoHolder;

const selectingProject = () => {
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

const newProjects = () => {
    const btnAdd = document.querySelector('.btnAdd');
    btnAdd.addEventListener('click', () => {
    if(!todoHolder){
    createNewProject();
    addCancelInits();
        };
    });
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
        objCreation();
        createNewProject();
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
    newProject = ProjectsFactory(inputForm.value);
    todoListArray.push(newProject);
};


export {newProjects, todoListArray, newProject};