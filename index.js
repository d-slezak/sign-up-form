let p1 = document.querySelector('#password');
let p2 = document.querySelector('#confirmPassword');

function checkPass(){
    console.log("??");
    if (p1.textContent == p2.textContent){
        p1.classList.add('passError');
        p2.classList.add('passError');
    }
}

let btn = document.querySelector('button');
btn.addEventListener('click', checkPass);