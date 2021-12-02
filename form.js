//UC1 user should enter valid first name
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input',function(){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(text.value))
        textError.textContent="";
    else textError.textContent = "Name is incorrect";
});

//UC 2 Email validation.
const email = document.querySelector('#emailInput');
const emailError = document.querySelector('.email-error');
email.addEventListener('input',function(){
    let emailRegex = RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');
    if(emailRegex.test(email.value)){
        emailError.textContent="";
    }else{
        emailError.textContent="Email is InValid";
    }
});

//UC3:Phone Validation.
const number = document.querySelector("#number");
const numbererror = document.querySelector('.number-error')
email.addEventListener('input', function () {
    let regex = RegExp('^[0-9]{2}[ ][0-9]{10}$');
    if (regex.test(number.value))
        numbererror.textContent = "";
    else
        numbererror.textContent = "Wrong number input";

});


