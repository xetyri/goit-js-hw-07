const inp = document.querySelector('#name-input');
const out = document.querySelector('#name-output');

function OutputName() {
    return (out.textContent = inp.value);
}

inp.addEventListener('input', OutputName);