
$(document).ready(function () {
    // Get references to elements
    const qrInput = $('#qrInput');
    const registerBtn = $('#registerBtn');
    const qrInfoCard = $('.card');
    const qrInfoText = $('#qrInfo');

    registerBtn.click(function () {
        const qrData = qrInput.val();
       
        qrInfoText.text(qrData);
        qrInfoCard.show();
    });
});