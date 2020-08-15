import {createNewProject, objCreation, inputForm, funnyFunction, todoSettings} from './projectListDom';


const todoListArray = [];
let newProject;
let todoHolder;

const newProjects = () => {
    const btnAdd = document.querySelector('.btnAdd');
    btnAdd.addEventListener('click', () => {
    if(!todoHolder){
    createNewProject();
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
        objCreation();
        createNewProject();
        addCancelInits();
        funnyFunction();
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


export {newProjects, makingObj, todoListArray, newProject};