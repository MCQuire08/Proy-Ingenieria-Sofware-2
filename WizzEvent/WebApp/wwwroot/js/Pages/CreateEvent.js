function CreateEventController() {
    this.ViewName = "CreateEvent";
    this.ApiService = "Event";
    this.ApiServiceCategory = 'Category';

    this.InitView = function () {
        console.log("Create event view init");
        var view = new CreateEventController();
        view.AddContact();
        view.LoadCategories();
        view.LoadImages();

        

        $('#btnEnviar').on('click', function () {
            view.GetImages();
            if (view.Validation()) {
                //view.CreateEvent();
            }
        });
    }

    this.Validation = function () {
        var view = new CreateEventController();
        var event = view.GetEvent();

        console.log(view.GetEvent());

        if (
            event.Name === "" ||
            event.Description === "" ||
            event.Slogan === "" ||
            event.EventDate === "" ||
            event.TotalTickets === "" ||
            event.Information === "" ||
            event.FreeTickets === ""
        ) {
            Swal.fire({
                icon: 'warning',
                title: 'Error...',
                text: 'Completa todos los campos para poder continuar...',
            });
            return false;
        }

        if ($('#table-contacts tr').length < 1) {
            Swal.fire({
                icon: 'warning',
                title: 'Error...',
                text: 'Completa los contactos para poder continuar...',
            });
            return false;
        }

        return true;
    };

    this.CreateEvent = function () {
        var view = new CreateEventController();
        var serviceToCreateEvent = this.ApiService + "/CreateEvent";
        var ctrlActions = new ControlActions();
        var event = view.GetEvent();
        var check = {};

        $.ajax({
            url: ctrlActions.GetUrlApiService( serviceToCreateEvent),
            method: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: event,
            success: function (data) {
                check.Event = true;
            },
            error: function () {
                check.Event = false;
            }
        });

        var contacts = view.GetContacts();




    }

    this.GetEvent = function () {
        var event = {
            name: $('#txtName').val(),
            slogan: $('#txtSlogan').val(),
            description: $('#txtDescription').val(),
            modality: $('#txtModality').val(),
            eventDate: $('#txtEventDate').val(),
            totalTickets: $('#txtTotalTickets'),
            information: $('#txtInformation').val(),
            paymentMethod: $('#stlPayment').val(),
            freeTickets: $('#txtFreeTickets').val(),
            ownedBy: 1,
            state: "CREATED"
        };

        return event;
    }

    this.GetContacts = function () {
        var contacts = [];

        $('#table-contacts tr:not(:first)').each(function () {
            var name = $(this).find('td:eq(0)').text();
            var contact = $(this).find('td:eq(1)').text();

            contacts.push({ Name: name, Contact: contact });
        });

        return contacts;
    };

    this.GetImages = function () {
        var spamObjects = [];

        var spamElements = $("#container-images-names .spam");

        spamElements.each(function () {
            var spamObject = {
                name: $(this).text(),
                url: $(this).data - url
            };

            spamObjects.push(spamObject);
        });
    }

    this.AddContact = function () {
        $("#btnCreateContact").on('click', function () {
            const newRow = $("<tr>");

            newRow.append('<td>' + $('#txtContactName').val() + '</td>');
            newRow.append('<td>' + $('#txtContact').val() + '</td>');

            $('#txtContactName').val('');
            $('#txtContact').val('');

            $('#modalContact').modal('hide');

            $("#table-contacts").append(newRow);
        });

        $("#btnDeleteContact").on('click', function () {
            const rows = $("#table-contacts tr").not(':first');
            if (rows.length > 0) {
                rows.last().remove();
            }
        });
    }

    this.LoadCategories = function () {
        var view = new CreateEventController();

        var serviceToRetrieveCategory = this.ApiServiceCategory + "/RetrieveAllCategory";
        var ctrlActions = new ControlActions();
        var event = view.GetEvent();

        $.ajax({
            url: ctrlActions.GetUrlApiService(serviceToRetrieveCategory),
            method: 'GET',
            dataType: 'json',
            contentType: 'application/json', 
            success: function (data) {
                const selectElement = $('#stlCategory');
                selectElement.empty();
                selectElement.append('<option value="">Seleccione una categoría</option>');
                data.forEach(function (category) {
                    const option = $('<option></option>').val(category.id).text(category.name);

                    selectElement.append(option);
                });
            },
            error: function () {
                console.error('Error en la solicitud GET');
            }
        });
    }

    this.LoadImages = function () {
        console.log('boton');
        const container = $("#container-images-names");
        const myWidget = cloudinary.createUploadWidget(
            {
                cloudName: 'eventwizz',
                uploadPreset: 'ml_default'
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    const badge1 = $("<span></span>")
                        .addClass("badge rounded-pill bg-info")
                        .text(result.info.original_filename)
                        .attr("data-url", result.info.secure_url);

                    container.append(badge1);
                }
            }
        );

        $('#btnLoadImages').on('click', function () {
            myWidget.open();
        });
    }


}

$(document).ready(function () {
    var view = new CreateEventController();
    view.InitView();
})