let modalPlace;
let modalForm;
let inputForm;

const createNewProject = () => {
  initModal();
  inputInit();
}

const initModal = () => {
  modalForm = document.createElement('div');
  modalPlace = document.querySelector('.actualProjects')
  modalForm.setAttribute('id', 'modalBox')
  modalPlace.append(modalForm);

}

const inputInit = () => {

  inputForm = document.createElement('input');
  const addingStuff = document.createElement('button');
  const cancelStuff = document.createElement('button');

  inputForm.classList.add('inputForm')

  addingStuff.classList.add('addingStuff');
  cancelStuff.classList.add('cancelingStuff');

  addingStuff.textContent = "Add"
  cancelStuff.textContent = "Cancel"

  modalForm.append(inputForm);
  modalForm.append(addingStuff);
  modalForm.append(cancelStuff);

  modalForm.classList.add('inputForm');
  inputForm.placeholder = "Project Name"
}

const createdProject = () => {
  const newProjectCreated = document.createElement('div');
  const projectCreatedTitle = document.createElement('h5');
  const projectCreatedTxt = inputForm.value;

  modalPlace.append(newProjectCreated)
  newProjectCreated.append(projectCreatedTitle);
  projectCreatedTitle.append(projectCreatedTxt);

  newProjectCreated.classList.add('projectClass')

};

const cantCreate = () => {
  if(inputForm.value === "") {
    alert("CANT CREATE EMPTY PROJECT")
  } else {createdProject()}
}

export {initModal, inputInit, createNewProject, createdProject, cantCreate};