import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

const formData = {};

const onFormInput = (event) => {
    const {name, value} = event.target
    formData[name]= value
    // console.log(formData);
    localStorage.setItem(LOCAL_STORAGE_KEY, formData)
};

formRef.addEventListener('input', onFormInput);

function initPage() {
    const savingData = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log(savingData);
    if (saveData) {
        const parseData = JSON.parse(formData);
        console.log(parseData)
    }
    

}