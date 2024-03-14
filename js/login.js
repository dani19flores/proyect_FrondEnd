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
    login.addEventListener('click', function () {
        let usernameValue = document.getElementById('username').value;
        let passwordValue = document.getElementById('password').value;
        console.log({usernameValue,passwordValue});
        if(usernameValue==="eflores" & passwordValue==="123456@"){
            cargarPagina('../index.html','login');
        }
    });
});

function cargarPagina(pagina,current) { 
    fetch(pagina).then(response => response.text()) .then(html => 
    { 
        currentMenu(current);
    });
}

function currentMenu(menu){
    localStorage.setItem("currentLogin", menu);
}