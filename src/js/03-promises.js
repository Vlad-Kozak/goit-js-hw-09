import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  const { delay, step, amount } = form;

  setTimeout(() => {
    for (i = 0; i < amount.value; i += 1) {
      createPromise(i + 1, step.value * i)
        .then(({ position, delay }) =>
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
        )
        .catch(({ position, delay }) =>
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
        );
    }
  }, delay.value);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
