
const createAccountButton = document.querySelector('.create-account-btn');
const passwordInputs = document.querySelectorAll('.error');

createAccountButton.addEventListener('click', () => {
    
    if (passwordInputs[0].value !== passwordInputs[1].value) {

        passwordInputs[0].style.borderColor = 'hsl(0, 100%, 60%)';
        passwordInputs[1].style.borderColor = 'hsl(0, 100%, 60%)';
    }
    else if (passwordInputs[0].value !== "" && passwordInputs[1].value !== "") {
        
        passwordInputs[0].style.borderColor = 'rgb(94, 185, 42)';
        passwordInputs[1].style.borderColor = 'rgb(94, 185, 42)';
    }
});