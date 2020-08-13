import {createNewProject, objCreation, inputForm} from './projectListDom';

const todoListArray = [];

const newProjects = () => {
    const btnAdd = document.querySelector('.btnAdd');
    btnAdd.addEventListener('click', () => {
    createNewProject();
    addCancelInits();
    })

};

function addCancelInits() {
    const cancelingStuff = document.querySelector('.cancelingStuff');
    const todoHolder = document.querySelector('#modalBox')
    cancelingStuff.addEventListener('click', () => {
    todoHolder.remove();
    });

    const addStuffToList = document.querySelector('.addingStuff');
    addStuffToList.addEventListener('click', () => {
        makingObj();
        todoHolder.remove();
        objCreation();
        createNewProject();
        addCancelInits();
    });

}


const ProjectsFac = function(projectName) {
    return {
        projectName
    }
}

function makingObj() {
    const newProject = ProjectsFac(inputForm.value);
    todoListArray.push(newProject);
};



export {newProjects};