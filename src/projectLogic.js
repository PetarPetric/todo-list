import {createNewProject, cantCreate} from './projectListDom';

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
                    createNewProject()
                    const cancelingStuff = document.querySelector('.cancelingStuff');
                    initListener(cancelingStuff, 'cancel', 'click');
                    const addStuffToList = document.querySelector('.addingStuff');
                    initListener(addStuffToList, 'addProjectTl', 'click');
                break;
                };
                break;
            case 'cancel':
                todoHolder.remove();
                break;
            case 'addProjectTl':
                todoHolder.remove();
                cantCreate();
                break;
            default:
                console.log('unknown type');
                break;
        }
    })
};

export {newProjects};