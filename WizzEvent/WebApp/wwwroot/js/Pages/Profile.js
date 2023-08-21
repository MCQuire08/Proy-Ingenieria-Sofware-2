$(document).ready(function () {
    var view = new ProfileController();
    view.InitView();
});

function ProfileController() {
    this.ViewName = "Perfil";
    this.ApiService = "Users";
    var self = this;

    this.InitView = function () {
        var userId = localStorage.getItem("idUsuario");
        self.RetrieveUser(userId).then(function (user) {
            if (user) {
                console.log(user);
                $("#name").text(user.nombre);
                $("#email").text(user.email);
                $("#nameInput").val(user.nombre);
                $("#txtLastNameInput").val(user.apellidos);
                $("#txtPhoneInput").val(user.telefono);
                $("#locationInput").val(user.ubicacion);
                $("#emailInput").val(user.email);
                $("#tipoIdentificacion").val(user.tipoIdentificacion);
                $("#numeroIdentificacionInput").val(user.numeroIdentificacion);
            }
        });

    }

    this.Update = function (user) {
        var ctrlActions = new ControlActions();
        var serviceToDelete = self.ApiService + "/Update";

        ctrlActions.PutToAPI(serviceToDelete, user, function (data) {

        });
    }

    this.RetrieveUser = async function (id) {

        const apiUrl = `https://localhost:7152/api/Users/RetrieveById?id=${id}`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error retrieving data:', error);
            return null;
        }
    }
    this.LoadTable = function () {
        var ctrlActions = new ControlActions();
        var self = this;

        var urlService ='';


        var columns = [];


        columns[0] = { 'data': 'nombre' };
        columns[2] = { 'data': 'apellidos' };
        columns[3] = { 'data': 'tipoIdentificacion' };
        columns[4] = {
            'data': null
        }
    }

    var table = $("#tblBoletos").DataTable();

  

}
