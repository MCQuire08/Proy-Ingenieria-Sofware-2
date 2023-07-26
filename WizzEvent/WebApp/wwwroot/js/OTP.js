function toggleAuthMethod() {
    const authMethod = document.getElementById("authMethod").value;
    const otpFields = document.getElementById("otpFields");

    if (authMethod === "otp_email" || authMethod === "otp_phone") {
        otpFields.style.display = "block";
    } else {
        otpFields.style.display = "none";
    }
}

function goBack() {
    window.location.href = 'UbicationUser';
}

function requestOTP() {
    const authMethod = document.getElementById("authMethod").value;
    const otpInput = document.getElementById("otp");
    const deliveryAddressInput = document.getElementById("deliveryAddress");

    if (authMethod === "otp_email" || authMethod === "otp_phone") {
        const otpDeliveryAddress = deliveryAddressInput.value;

        if (!otpDeliveryAddress) {
            alert("Por favor ingrese la dirección de entrega (correo o teléfono).");
            return;
        }

        const otpRequestData = {
          userId: parseInt(userId), 
          deliveryMethod: authMethod,
          deliveryAddress: otpDeliveryAddress
        };

    fetch('/api/OTP/Generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(otpRequestData)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Código OTP generado y enviado:', data);
        })
        .catch(error => {
            console.error('Error al generar y enviar el código OTP:', error);
        });
    } else {
    alert("Por favor seleccione un método de autenticación válido.");
    }
}
