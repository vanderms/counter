
const counterBox = document.querySelector(".counter-box");
const counter = counterBox.querySelector(".counter");
let value = localStorage.getItem('counter');
value = value != null? parseInt(value): 0; 
counter.value = value;

counterBox.addEventListener("click", ()=>{
  let value = localStorage.getItem('counter');
  value = value != null? parseInt(value) + 1: 1;
  localStorage.setItem('counter', value);
  counter.value = value;
});

counter.addEventListener('change', ()=>{
  value = parseInt(counter.value);
  value = Number.isNaN(value) ? 0 : value;
  localStorage.setItem('counter', value);  
});

