const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');
const KEEP = 'feedback-form-state';
let obj = {};
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventovDefault();
  form.reset();
}

form.addEventListener('input', onInputForm);
function onInputForm() {
  obj.email = form.email.value;
  obj.message = form.message.value;
}
localStorage.setItem(KEEP, JSON.stringify(obj));

const localStorage = localStorage.getItem(KEEP);
console.log(localStorage);
