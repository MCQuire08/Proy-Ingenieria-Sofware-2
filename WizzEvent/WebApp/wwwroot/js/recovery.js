// recoveryController.js
function recoveryController() {
    this.ApiService = "Users";
    var self = this;

    this.InitView = function () {
        // Puedes agregar lógica de inicialización de la vista aquí si es necesario.
    }

    this.Update = function (email, newPassword) {
        var serviceToUpdate = "https://localhost:7152/api/Users/UpdatePassword";

        // Encode the email and newPassword for the query string
        var queryString = "Email=" + encodeURIComponent(email) + "&Password=" + encodeURIComponent(newPassword);

        // Use the query string in the URL
        var apiUrl = serviceToUpdate + "?" + queryString;

        // Use a simple AJAX call to send the PUT request with the query string
        $.ajax({
            url: apiUrl,
            type: 'PUT',
            success: function (data) {
              
                sweetAlertModule.showSuccessAlert('Cambio de Contraseña Exitoso', 'Tu contraseña ha sido cambiada exitosamente.');
                
                window.location.href = 'LoginUser';
            },
            error: function (xhr, status, error) {
                // Handle the error response, if needed
                // For example, you can show an error message
                console.error('Error updating password:', error);
            }
        });
    }


    this.RetrieveByEmail = function (emailInput) {
        const apiUrl = 'https://localhost:7152/api/Users/RetrieveByEmail';

        $.ajax({
            url: apiUrl,
            type: 'GET',
            data: { email: emailInput },
            dataType: 'json',
            success: function (data) {
                x(data);
            },
            error: function (xhr, status, error) {
                console.error('Error retrieving data:', error);
            }
        });
    }
}


var validationModule = (function () {
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return email !== '' && emailRegex.test(email);
    }

    return {
        validateEmail: validateEmail
    };
})();


var sweetAlertModule = (function () {
    function showErrorAlert(title, text) {
        Swal.fire({
            icon: 'error',
            title: title,
            text: text,
        });
    }

    function showSuccessAlert(title, text) {
        Swal.fire({
            icon: 'success',
            title: title,
            text: text,
        });
    }

    function showOTPInput(onConfirm) {
        Swal.fire({
            title: 'Ingrese el codigo OTP',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Verificar',
            cancelButtonText: 'Cancelar',
            showLoaderOnConfirm: true,
            preConfirm: onConfirm
        });
    }

    function showNewPasswordInput(onConfirm) {
        Swal.fire({
            title: 'Solicitar nueva contraseña',
            input: 'password',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            showLoaderOnConfirm: true,
            preConfirm: onConfirm,
            allowOutsideClick: () => !Swal.isLoading()
        });
    }

    return {
        showErrorAlert: showErrorAlert,
        showSuccessAlert: showSuccessAlert,
        showOTPInput: showOTPInput,
        showNewPasswordInput: showNewPasswordInput
    };
})();

// Main Script
$(document).ready(function () {
    var view = new recoveryController();
    view.InitView();
});

function validateCorreo() {
    var email = $("#email").val();

    if (!validationModule.validateEmail(email)) {
        sweetAlertModule.showErrorAlert('Error', 'Ingresa un correo electronico válido.');
        return;
    }
    var view = new recoveryController();
     view.RetrieveByEmail(email);
   
}
function x(user) {

    if (user) {
        const apiUrl = `OTP/GenerateEmail?email=${encodeURIComponent(user.email)}`;
        var ctrlActions = new ControlActions();
      
        ctrlActions.PostToAPI(apiUrl, user.email, function (otpValue) {
            var otpValueString = otpValue.toString();
            sweetAlertModule.showOTPInput(function (otp) {
                if (otp === otpValueString) {
                    sweetAlertModule.showSuccessAlert('Codigo OTP valido', 'El codigo OTP es correcto. Verificacion exitosa.');
                    sweetAlertModule.showNewPasswordInput(function (newPassword) {
                        if (newPassword.length < 6) {
                            Swal.showValidationMessage('La contraseña debe tener al menos 6 caracteres');
                            return;
                        }
                        var recoveryCtrl = new recoveryController();
                        recoveryCtrl.Update(user.email, newPassword);
                    });
                } else {
                    Swal.showValidationMessage('Codigo OTP incorrecto. Por favor, ingrese el codigo correcto.');
                }
            });
        });
    }
}







