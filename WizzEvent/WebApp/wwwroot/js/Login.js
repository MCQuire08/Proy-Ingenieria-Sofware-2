
$(document).ready(function () {
    
    view.InitView();

})


async function login(email, password) {
    const encodedEmail = encodeURIComponent(email);
    const encodedPassword = encodeURIComponent(password);

    const apiUrl = `https://localhost:7152/api/Users/Login?email=${encodedEmail}&password=${encodedPassword}`;

    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error('Login failed. Please check your credentials.');
        }
    } catch (error) {
        throw new Error('An error occurred while trying to log in.');
    }
}

async function validarLoginFormulario() {
    const email = $("#email").val();
    const password = $("#password").val();

    if (!email || !password) {
        mostrarError('Todos los campos son requeridos.');
        return false;
    }

    try {
        const user = await login(email, password);
        mostrarExito('¡Inicio de sesión exitoso! Bienvenido, ' + user.Nombre);
        window.location.href = '/Index';
    } catch (error) {
        mostrarError(error.message);
        return false;
    }
}


function mostrarError(mensaje) {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: mensaje,
    });
}

function mostrarExito(mensaje) {
    Swal.fire({
        icon: 'success',
        title: 'Buen trabajo',
        text: mensaje,
    });
}
