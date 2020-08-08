let modalPlace;
const createNewProjects = () => {
  
  modalPlace = document.querySelector('.actualProjects')
  const modalForm = document.createElement('div');
  
  modalPlace.append(modalForm);
  
  const inputForm = document.createElement('input');
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

};



export {createNewProjects};