import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const message = document.querySelector('textarea[name="message"]');
const input = document.querySelector('input[name="email"]');
const KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  form.reset();
  localStorage.removeItem(KEY);
  console.log(feedback);
}

const feedback = {};

form.addEventListener('input', throttle(onInputForm, 1000));
function onInputForm(e) {
  if (e.target.name === 'email') {
    feedback.email = e.target.value;
  } else if ((e.target.name = 'message')) {
    feedback.message = e.target.value;
  }
  localStorage.setItem(KEY, JSON.stringify(feedback));
}
function populateTextarea() {
  const saveMessage = localStorage.getItem(KEY);
  const value = JSON.parse(saveMessage);
  if (saveMessage) {
    message.value = value.message;
    input.value = value.email;
  }
}
populateTextarea();
