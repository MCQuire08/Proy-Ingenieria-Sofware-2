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
    //this.LoadTable = function () {
    //    var ctrlActions = new ControlActions();
    //    var self = this;

    //    var urlService = ctrlActions.GetUrlApiService(this.ApiService + "/RetrieveAll");


    //    var columns = [];


    //    columns[0] = { 'data': 'nombre' };
    //    columns[1] = { 'data': 'apellidos' };
    //    columns[2] = { 'data': 'tipoIdentificacion' };
    //    columns[3] = { 'data': 'numeroIdentificacion' };
    //    columns[4] = { 'data': 'email' };
    //    columns[5] = { 'data': 'telefono' };
    //    columns[6] = {
    //        'data': null,
    //        'render': async function (data, type, row) {
    //            const rolNamePromise = self.getRoleName(row.id);
    //            const rolNameCellIndex = 6; // Index of the cell where you want to update the role name

    //            const rolName = await rolNamePromise;

    //            // Get the cell element within the row and update its content with the role name
    //            return `${rolName}`;

    //            // Return empty string to prevent initial rendering
    //        }

    //    }
    //}
}
