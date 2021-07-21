const valInput = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

valInput.addEventListener('input', sizeText);

function sizeText(event) {
   text.style.fontSize = event.currentTarget.value + "px";
 } 