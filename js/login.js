document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');

    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        if (type === 'password') {
            togglePassword.src = 'img/Icon/eye-closed.svg';
            togglePassword.alt = 'Mostrar contraseña';
        } else {
            togglePassword.src = 'img/Icon/eye.svg';
            togglePassword.alt = 'Ocultar contraseña';
        }
    });
    const login = document.getElementById('login');
    login.addEventListener('click', function (event) {
        let usernameValue = document.getElementById('username').value;
        let passwordValue = document.getElementById('password').value;
        let errorBar = document.getElementById("errorBar");
        let msg = document.getElementById("msg");
        if (usernameValue.trim() === "" || passwordValue.trim() === "") {
            errorBar.classList.add("showBar");
            msg.textContent  = "por favor ingrese usuario y/o contraseña";
            setTimeout(function() {
                errorBar.classList.remove("show");
            }, 5000);
        } else if(usernameValue==="eflores" & passwordValue==="123456@"){
            errorBar.classList.add("showBar");
            setTimeout(function() {
                errorBar.classList.remove("show");
            }, 5000);
            currentLogin('login');
            navigation('../index.html');
        } else {
            errorBar.classList.remove("show");
            msg.textContent  = "Usuario o contraseña incorrecta";
        }

        
    });
});

function navigation(destino) { 
    window.location.href = destino;
}

function currentLogin(menu){
    localStorage.setItem("currentLogin", menu);
}