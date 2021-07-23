const inp = document.querySelector('#validation-input');
const getLength = Number(inp.getAttribute("data-length"));

inp.addEventListener("blur", gett)

function gett() {
        inp.classList.add('invalid');
        inp.classList.remove('valid');
    if (inp.value.length === getLength) {
        inp.classList.add("valid");
        inp.classList.remove('invalid');  
    } 
}