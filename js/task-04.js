const counter = {
  decB: document.querySelector('button[data-action="decrement"]'),
  incB: document.querySelector('button[data-action="increment"]'),
  val: document.querySelector('span#value'),
};

let counterValue = 0;

function decrement() {
  counterValue--;
  counter.val.textContent = counterValue;
}

function increment() {
  counterValue++;
  counter.val.textContent = counterValue;
}

counter.decB.addEventListener('click', decrement);
counter.incB.addEventListener('click', increment);