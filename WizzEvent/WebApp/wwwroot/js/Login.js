async function validarLoginFormulario() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        mostrarError('Todos los campos son requeridos.');
        return false;
    }

    const response = await loginUser(email, password);

    if (response.ok) {
        const user = await response.json();
        mostrarExito('¡Inicio de sesión exitoso! Bienvenido, ' + user.Nombre);
        return true;
    } else {
        const errorMessage = await response.text();
        mostrarError(errorMessage);
        return false;
    }
}

async function loginUser(email, password) {
    const response = await fetch('api/Users/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    return response;
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
