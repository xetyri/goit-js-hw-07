const inp = document.querySelector('#validation-input');
const getLength = Number(inp.getAttribute("data-length"));

inp.addEventListener('focus', gett)

function gett() {
    if (inp.value.length <= getLength) {
        inp.classList.add("valid");
        inp.classList.remove('invalid');
    } else {
        inp.classList.add("invalid");
        inp.classList.remove('valid');
    } 
}