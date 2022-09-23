// import throttle from 'lodash.throttle';
// import { save, load, remove } from './storage';
const formRef = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';
initPage();

formRef.addEventListener('input', onFormInput);
formRef.addEventListener('submit', onFormSubmit);
const formData = {};

const onFormInput = (event) => {
    const {name, value} = event.target
    formData[name]= value
    // console.log(formData);
    localStorage.setItem(LOCAL_STORAGE_KEY, formData)
};



function initPage() {
    const savingData = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log(savingData);
    if (!saveData) {
        const parseData = JSON.parse(formData);
        console.log(parseData)
    }
    

}