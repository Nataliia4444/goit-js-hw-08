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
  if (saveMessage !== undefined) {
    message.value = value.message;
    input.value = value.email;
  }
}
// 54
populateTextarea();

// form.addEventListener('input', throttle(onInputForm, 1000));
// function onInputForm(e) {
//   if (e.target.name === 'email') {
//     if (e.target.value) {
//       feedback.email = e.target.value;
//     } else {
//       feedback.email = 'email';
//     }
//   }
//   if (e.target.name === 'message') {
//     if (e.target.value) {
//       feedback.message = e.target.value;
//     } else {
//       feedback.message = 'message';
//     }
//   }
//   localStorage.setItem(KEY, JSON.stringify(feedback));
// }
