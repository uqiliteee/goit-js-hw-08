import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('.feedback-form input');
const textareaRef = document.querySelector('.feedback-form textarea');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

const formData = {};

savingData();

const onFormInput = (event) => {
    formData[event.target.name] = event.target.value;

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData))
    
};
formRef.addEventListener('input', onFormInput);


const onFormSubmit = event => {
    event.preventDefault();
    event.currentTarget.reset();
    const getData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log(getData)


    localStorage.removeItem(LOCAL_STORAGE_KEY);
};
formRef.addEventListener('submit', throttle(onFormSubmit, 500));

function savingData() {
    const getData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // console.log(getData);

    if (getData === null) {
        return
    }
    // try {
    //     Object.entries(gettingData).forEach(([name, value]) => {
    //         formRef.elements[name].value = value;
    //     })
    // } catch (error) {
    //     console.log(error)
    // }

    if (getData.email) {
        inputRef.value = getData.email
        formData['email'] = inputRef.value
    };
    if (getData.message) {
        textareaRef.value = getData.message
        formData['message'] = textareaRef.value
    };

}

