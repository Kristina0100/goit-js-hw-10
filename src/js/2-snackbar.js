import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const btn = document.querySelector('button');

// onBtnSubmit = event => {
//     const createPromise = () => 
// };

btn.addEventListener('submit', onBtnSubmit);






















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