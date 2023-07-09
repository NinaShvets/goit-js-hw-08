const throttle = require('lodash.throttle');
const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let feedbackFormState = {};

const saveFormState = throttle(
  e => {
    feedbackFormState[e.target.name] = e.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormState));
  },
  500,
  { leading: true, trailing: true }
);

formEl.addEventListener('input', saveFormState);

const onLoad = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return;
    feedbackFormState = JSON.parse(data);
    Object.entries(feedbackFormState).forEach(([key, val]) => {
      formEl.elements[key].value = val;
    });
  } catch (error) {
    console.log(error.message);
  }
};
window.addEventListener('load', onLoad);

formEl.addEventListener('submit', event => {
  event.preventDefault();

  console.log(feedbackFormState);
  feedbackFormState = {};

  localStorage.removeItem(STORAGE_KEY);
  event.target.reset();
});
