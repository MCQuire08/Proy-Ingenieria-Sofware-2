﻿

async function retrieveByEmail(email) {
    const encodedEmail = encodeURIComponent(email);
    const apiUrl = `https://localhost:7152/api/Users/RetrieveByEmail?email=${encodedEmail}`;

    try {
        const response = await $.ajax({
            url: apiUrl,
            type: 'GET',
            dataType: 'json'
        });
        return response;
    } catch (error) {
        console.error('Error retrieving data:', error);
        return null; 
    }
}


async function login(email, password) {
    var user = await retrieveByEmail(email)

    if (user) {
        var contrasena = user.password;
        if (contrasena === password) {
            mostrarExito("Ingreso exitoso")
        }
        else {
            throw new Error('Datos incorrectos. Por favor verifique la informacion ingresada.');
        }
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

$(document).ready(function () {
   
    $("#btnLogin").hide();
    $("#btnSingOut").hide();
   
});
