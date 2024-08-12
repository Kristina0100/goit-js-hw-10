import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const promiseForm = document.querySelector('.form');

const onFormSubmit = event => {
    event.preventDefault();

    let delay = Number(promiseForm.elements.delay.value);
    let states = promiseForm.elements.state.value;

    const showErrorMessage = delay => {
    iziToast.show({
        message: `Rejected promise in ${delay}ms`,
        messageColor: '#fff',
        messageSize: '16px',
        messageLineHeight: '24px',
        backgroundColor: '#EF4040',
        iconUrl: "img/error.svg",
        closeOnClick: true,
        position: 'topRight',
        progressBarColor: '#B51B1B',
  });
};

    const showResolvedMessage = delay => {
    iziToast.show({
        message: `Fulfilled promise in ${delay}ms`,
        messageColor: '#fff',
        messageSize: '16px',
        messageLineHeight: '24px',
        backgroundColor: '#59A10D',
        iconUrl: "img/success.svg",
        // closeOnClick: true,
        position: 'topRight',
        progressBarColor: '#326101',
    });
};

    const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (states === 'fulfilled') {
        resolve(delay);
     } else {
        reject(delay);
     }
   }, delay);
});
    
    newPromise
        .then(resolvedDelay => showResolvedMessage(resolvedDelay))
        .catch(rejectedDelay => showErrorMessage(rejectedDelay));
    
    promiseForm.reset();
};

promiseForm.addEventListener('submit', onFormSubmit);






















// const executor = (resolve, reject) => {
//   setTimeout(() => {
//     const isDone = Math.random() >= 0.5;

//     if (isDone) {
//       resolve('Done!');
//     } else {
//       reject('Error!');
//     }
//   }, 1000);
// };

// const promise = new Promise(executor);



// promise
//   .finally(() => {
//     preloader.stop();

//     console.log('The End!');
//   })
//   .then(result => {
//     console.log(promise);

//     console.log(result);

//     return 'Hello';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(promise);

//     console.log(err);
//   });