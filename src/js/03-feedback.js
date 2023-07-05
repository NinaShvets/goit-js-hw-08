const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');

const saveFormState = throttle(
  () => {
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;
    const formState = { email, message };

    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
  },
  500,
  { leading: true, trailing: true }
);

form.addEventListener('input', saveFormState);

const loadFormState = () => {
  const storedState = localStorage.getItem('feedback-form-state');

  if (storedState) {
    const { email, message } = JSON.parse(storedState);
    form.querySelector('input[name="email"]').value = email;
    form.querySelector('textarea[name="message"]').value = message;
  }
};

window.addEventListener('load', loadFormState);

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.querySelector('input[name="email"]').value;
  const message = form.querySelector('textarea[name="message"]').value;

  const formData = { email, message };

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  form.reset();
});
