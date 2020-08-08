import {createNewProjects} from './projectListDom';

const newProjects = () => {
    const btnAdd = document.querySelector('.btnAdd');
    initListener(btnAdd, 'add', 'click');
};


// initListener takes an element type and event
function initListener(element, type, event) {
    //adds eventlistener to element and takes event as input
    element.addEventListener(event, () => {
        const todoHolder = document.querySelector('.inputForm');
        // switch takes type of case
        switch (type) {
        case 'add':
            // if case is add and todoholder is not there createNewProjects
            if (!todoHolder) {
                createNewProjects();
                const cancelingStuff = document.querySelector('.cancelingStuff');
                initListener(cancelingStuff, 'cancel', 'click');
                const addingProject = document.querySelector('.addingStuff')
                initListener(addingProject, 'addingStuff', 'click');
                break;
                };
            case 'cancel':
                todoHolder.remove();
                break;
            case 'addingStuff':
                todoHolder.remove();

                break;
            default:
                console.log('unknown type');
                break;
        }
    })
};



export { newProjects };