const inp = document.querySelector('#name-input');
const out = document.querySelector('#name-output');

function OutputName() {
    if (inp.value == "") {
        return out.textContent= 'незнакомец';
    } else {
        return (out.textContent = inp.value);
    }   
}

inp.addEventListener('input', OutputName);