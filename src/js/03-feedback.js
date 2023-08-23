import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const message = document.querySelector('textarea[name="message"]');
const input = document.querySelector('input[name="email"]');
const KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  const message = e.target.elements.message.value;
  const email = e.target.elements.email.value;
  if (message === '' || email === '') {
    return;
  }

  form.reset();
  localStorage.removeItem(KEY);
  console.log(feedback);
  console.log(e.target.elements.email.value);
}

const feedback = {};

form.addEventListener('input', throttle(onInputForm, 1000));
function onInputForm(e) {
  const message = form.elements.message.value;
  const email = form.elements.email.value;

  feedback.email = email;
  feedback.message = message;

  if (message === '') {
    feedback.message = '';
  } else if (email === '') {
    feedback.email = '';
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
