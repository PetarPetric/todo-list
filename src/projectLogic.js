import {createNewProject, cantCreate, inputForm} from './projectListDom';

const projArr = [];

const newProjects = () => {
    const btnAdd = document.querySelector('.btnAdd');
    initListener(btnAdd, 'add', 'click');
};

function initListener(element, type, event) {
    element.addEventListener(event, () => {
        const todoHolder = document.querySelector('#modalBox');

        switch (type) {
            case 'add':
                if (!todoHolder) {
                    createNewProject();
                    addCancelInits();
                break;
                };
                break;
            case 'cancel':
                todoHolder.remove();
                break;
            case 'addProjectTl':
                makingObj();
                todoHolder.remove();
                cantCreate();
                createNewProject();
                addCancelInits();
                console.log(projArr);
                break;
            default:
                console.log('unknown type');
                break;
        }
    })
};



function addCancelInits() {
    const cancelingStuff = document.querySelector('.cancelingStuff');
    initListener(cancelingStuff, 'cancel', 'click');
    const addStuffToList = document.querySelector('.addingStuff');
    initListener(addStuffToList, 'addProjectTl', 'click');
}

const ProjectsFac = function(projectName) {
    return {
        projectName
    }
}

function makingObj() {
    const newProj = ProjectsFac(inputForm.value);
    projArr.push(newProj);
};

export {newProjects};