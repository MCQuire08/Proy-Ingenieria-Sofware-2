document.addEventListener('DOMContentLoaded', function () {
    function validarFormulario() {
        // Obtener valores de los campos
        const nombre = document.getElementById('nombre').value;
        const apellidos = document.getElementById('apellidos').value;
        const tipoIdentificacion = document.getElementById('tipoIdentificacion').value;
        const numeroIdentificacion = document.getElementById('numeroIdentificacion').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const cedulaImagen = document.getElementById('cedulaImagen').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (!nombre || !apellidos || !tipoIdentificacion || !numeroIdentificacion || !email || !telefono || !cedulaImagen || !password || !confirmPassword) {
            mostrarError('Todos los campos son requeridos.');
            return false;
        }

        if (nombre.length > 50) {
            mostrarError('El nombre no puede tener más de 50 caracteres.');
            return false;
        }

        if (apellidos.length > 50) {
            mostrarError('Los apellidos no pueden tener más de 50 caracteres.');
            return false;
        }

        if (tipoIdentificacion !== 'nacional' && tipoIdentificacion !== 'extranjero') {
            mostrarError('Seleccione un tipo de identificación válido.');
            return false;
        }

        if (!/^[0-9]+-[0-9]{4}-[0-9]{4}$/.test(numeroIdentificacion)) {
            mostrarError('Número de identificación inválido. Debe tener el formato x-xxxx-xxxx y solo contener números.');
            return false;
        }

        if (!/^[\w.-]+@[a-z\d.-]+\.[a-z]{2,}$/i.test(email)) {
            mostrarError('El email ingresado no es válido.');
            return false;
        }

        if (!/^[876]\d{3}-\d{4}$/.test(telefono)) {
            mostrarError('El teléfono ingresado no tiene el formato correcto.');
            return false;
        }

        const fileInput = document.getElementById('cedulaImagen');
        const fileSize = fileInput.files[0].size / (1024 * 1024);
        const fileExt = fileInput.value.split('.').pop().toLowerCase();
        if (fileSize > 2 || (fileExt !== 'jpg' && fileExt !== 'png' && fileExt !== 'pdf')) {
            mostrarError('Carga de imagen de cédula inválida. Tamaño máximo: 2MB y formatos permitidos: .jpg, .png, .pdf');
            return false;
        }

        /*if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+,-./:;<=>?@[\\]^_`{|}~])(?!.*(1234|abcd)).{8,}/.test(password)) {
            mostrarError('La contraseña no cumple con los requisitos mínimos.');
            return false;
        }*/

        if (password !== confirmPassword) {
            mostrarError('Las contraseñas no coinciden.');
            return false;
        }

        mostrarExito('Información validada correctamente.');

        return true;
    }

    function crearUsuario() {
        if (validarFormulario()) {
            const user = {
                Nombre: document.getElementById('nombre').value,
                Apellidos: document.getElementById('apellidos').value,
                TipoIdentificacion: document.getElementById('tipoIdentificacion').value,
                NumeroIdentificacion: document.getElementById('numeroIdentificacion').value,
                Email: document.getElementById('email').value,
                Telefono: document.getElementById('telefono').value,
                CedulaImagen: document.getElementById('cedulaImagen').value,
                Password: document.getElementById('password').value,
                ConfirmPassword: document.getElementById('confirmPassword').value,
            };

            fetch('/api/Users/Create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(response => response.json())
                .then(data => {
                    mostrarExito('Usuario creado correctamente.');
                })
                .catch(error => {
                    mostrarError('Error al crear el usuario.');
                    console.error(error);
                });
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

    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        crearUsuario();
    });
});