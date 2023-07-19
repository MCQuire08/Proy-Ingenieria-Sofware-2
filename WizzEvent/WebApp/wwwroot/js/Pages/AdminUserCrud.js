$(document).ready(function () {
    var view = new AdminUserCrudController();
    view.InitView();

})

function AdminUserCrudController() {
    this.ViewName = "Admin-Users";
    this.ApiService = "Users";
    var self = this;

    this.InitView = function () {

        this.LoadTable();

    }
    this.LoadTable = function () {
        var ctrlActions = new ControlActions();
        var self = this;

        var urlService = ctrlActions.GetUrlApiService(this.ApiService + "/RetrieveAll");
        var columns = [];

        columns[0] = { 'data': 'id' };
        columns[1] = { 'data': 'name' };
        columns[2] = { 'data': 'description' };
        columns[3] = { 'data': 'creator' };
        columns[4] = { 'data': 'listUsers' };
        columns[5] = { 'data': 'creationDate' };
        columns[6] = { 'data': 'privacy' };
        columns[7] = { 'data': 'amountMembers' };
        columns[8] = { 'data': 'topic' };
        columns[9] = { 'data': 'picture' };
        columns[10] = { 'data': 'lastActivity' };

        columns[11] = {
            'data': null,
            'render': function (data, type, row) {
                return '<button class="btn btn-primary btn-sm btn-edit" data-id="' + row.id + '">Update</button>' +
                    '<button class="btn btn-danger btn-sm btn-delete" data-id="' + row.id + '">Delete</button>';
            }
        };


        var table = $("#tblRooms").DataTable();

        if (table) {
            table.clear().destroy();
        }

     
        table = $("#tblRooms").DataTable({
            "ajax": {
                "url": urlService,
                "dataSrc": ""
            },
            "columns": columns
        });

        $("#tblRooms").on('click', '.btn-edit', function () {
         


        });

        $("#tblRooms").on('click', '.btn-delete', function () {
        

        });


    }


}