import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as r}from"./assets/vendor-77e16229.js";const s=document.querySelector(".form"),a=t=>{t.preventDefault();let o=Number(s.elements.delay.value),i=s.elements.state.value;const m=e=>{r.show({message:`Rejected promise in ${e}ms`,messageColor:"#fff",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"#EF4040",iconUrl:"img/error.svg",closeOnClick:!0,position:"topRight",progressBarColor:"#B51B1B"})},n=e=>{r.show({message:`Fulfilled promise in ${e}ms`,messageColor:"#fff",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"#59A10D",iconUrl:"img/success.svg",position:"topRight",progressBarColor:"#326101"})};new Promise((e,l)=>{setTimeout(()=>{i==="fulfilled"?e(o):l(o)},o)}).then(e=>n(e)).catch(e=>m(e)),s.reset()};s.addEventListener("submit",a);
//# sourceMappingURL=commonHelpers2.js.map
