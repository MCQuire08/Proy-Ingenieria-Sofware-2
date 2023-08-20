function HomePageController() {
    this.ViewName = "HomePage";

    this.InitView = function () {
        var view = new HomePageController();
        console.log('HomePage init');
        this.CreateCardsOfHomePage();

        $('#btnAddCartItems').click(function () {
            view.AddItemsToCart();
        });
    }

    this.AddItemsToCart = async function () {
        const baseUrl = 'https://localhost:7152/api/CartItem/CreateCartItem';
        const ticketTableBody = $('#ticketTableBody');

        ticketTableBody.find('.type-Ticket').each(function () {
            const ticketId = $(this).find('.ticket-type').attr('data-ticket-id');
            const quantity = parseInt($(this).find('.quantity').text());
            var idUser = localStorage.getItem('idUsuario');
            
            if (quantity > 0) {
                const queryParams = `?IdCart=${idUser}&IdSector=${ticketId}&Quantity=${quantity}`;
                const apiUrl = baseUrl + queryParams;

                $.ajax({
                    url: apiUrl,
                    method: 'POST',
                    success: function (response) {
                        Swal.fire({
                            title: 'Se agregaron correctamente!',
                            text: "Los boletos se agregaron correctamente al carrito.",
                            icon: 'success',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Ir a pagar'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                Swal.fire(
                                    'Deleted!',
                                    'Vamos a pagar.',
                                    'success'
                                )
                            } else {
                                location.reload();
                                $('#modalAddCart').modal('hide');
                                $('#modalInfo').modal('hide');
                            }
                        })
                    },
                    error: function (error) {
                        responses = false;
                    }
                });
            }
        });
        
    }


    this.loadModalInfo = function (eventData) {
        const titleElement = $('#titleEvent');
        const categoryElement = $('#category');
        const imageElement = $('#imageModal'); 
        const sloganElement = $('#Slogan');
        const descriptionElement = $('#Description');
        const modalityElement = $('#Modality');
        const dateElement = $('#Fecha');
        const informationElement = $('#Information');
        console.log(eventData);
        titleElement.text(eventData.name);
        //categoryElement.text(eventData.category[0].name);
        imageElement.attr('src', eventData.images[0].url);
        sloganElement.text(eventData.slogan);
        descriptionElement.text(eventData.description);
        modalityElement.text('Modalidad: ' + eventData.modality);
        dateElement.text('Fecha: ' + eventData.eventDate);
        informationElement.text(eventData.information);

        const contactsContainer = $('#container-contacts');
        contactsContainer.empty();
        eventData.contacts.forEach((contact) => {
            const contactDiv = $('<div class="contacts">');
            const nameElement = $('<p class="nameContact">').text(contact.name);
            const contactElement = $('<p class="Contact">').text(contact.textContact);
            contactDiv.append(nameElement, contactElement);
            contactsContainer.append(contactDiv);
        });

        sloganElement.before('<br>');
    }


    this.loadModalSellTickets = async function (eventId) {
        try {
            const sceneryResponse = await this.getSceneryIdForEvent(eventId);
            const sceneryId = sceneryResponse.id;
            const ticketTypes = await this.getScenerySectors(sceneryId);
            const ticketTableBody = $('#ticketTableBody');

            ticketTableBody.empty();

            $.each(ticketTypes, function (index, ticket) {
                var row = $("<tr>").addClass("type-Ticket");
                var cellType = $("<td>").addClass("ticket-type").text(ticket.name);

                cellType.attr("data-ticket-id", ticket.id);

                var cellPrice = $("<td>");
                var priceSpan = $("<span>").text("CRC");
                var priceP = $("<p>").text(ticket.price).addClass("ticket-price");
                cellPrice.append(priceSpan).append(priceP);

                var cellQuantity = $("<td>").addClass("ticket-quantity");
                var minusIcon = $("<i>").addClass("fa-solid fa-minus minus-icon");
                var quantityP = $("<p>").addClass("quantity").text("0");
                var plusIcon = $("<i>").addClass("fa-solid fa-plus plus-icon");

                minusIcon.on('click', function () {
                    var currentQuantity = parseInt(quantityP.text());
                    if (currentQuantity > 0) {
                        quantityP.text(currentQuantity - 1);
                    }
                });

                plusIcon.on('click', function () {
                    var currentQuantity = parseInt(quantityP.text());
                    if (currentQuantity < 10) {
                        quantityP.text(currentQuantity + 1);
                    }
                });

                cellQuantity.append(minusIcon).append(quantityP).append(plusIcon);

                row.append(cellType).append(cellPrice).append(cellQuantity);
                ticketTableBody.append(row);
            });

        } catch (error) {
            console.error('Error al cargar la información de los sectores:', error);
        }
    }






    this.getSceneryIdForEvent = function (eventId) {
        return $.ajax({
            url: `https://localhost:7152/api/Scenery/RetrieveByIdScenery?IdEvent=${eventId}`,
            method: 'POST',
            dataType: 'json',
        });
    }

    this.getScenerySectors = function (sceneryId) {
        return $.ajax({
            url: `https://localhost:7152/api/Scenery/RetrieveAllSectorToScenery?idScenery=${sceneryId}`,
            method: 'GET',
            dataType: 'json',
        });
    }


    this.getEventContacts = function (eventId) {
        return $.ajax({
            url: `https://localhost:7152/api/Event/RetrieveAllContactToEvent?idEvent=${eventId}`,
            method: 'GET',
            dataType: 'json',
        });
    }

    this.getEventCategory = function (eventId) {
        return $.ajax({
            url: `https://localhost:7152/api/Event/RetrieveAllCategoryToEvent?idEvent=${eventId}`,
            method: 'GET',
            dataType: 'json',
        });
    }

    this.CreateCardsOfHomePage = async function () {
        try {
            var events = await this.fetchEvents();

            events.forEach((event) => {
                if (event.images.length > 0) {
                    const imageUrl = event.images[0].url;
                    const title = event.name;
                    const description = event.description;
                    const date = event.eventDate;

                    this.createCard(imageUrl, title, description, date, event);
                } else {
                    console.log('No images found for event:', event.name);
                }
            });
        } catch (error) {
            console.error('Error al crear las tarjetas:', error);
        }
    };

    this.handleVerInfoButtonClick = function (eventData, eventId) {
        this.loadModalInfo(eventData);
        
        console.log('ID del evento:', eventId);
        $('#modalInfo').modal('show');
    }


    this.createCard = function (imageUrl, title, description, date, eventData) {
        const card = $('<div class="card text-white bg-primary mb-3">');
        const cardHeader = $('<div class="card-header">').text(title);
        const cardBody = $('<div class="card-body">');
        const image = $('<img class="card-img">').attr('src', imageUrl);
        const cardTitle = $('<h4 class="card-title">').text(title);
        const cardDescription = $('<p class="card-text">').text(description);
        const cardDate = $('<p class="card-text">').text('Fecha: ' + date);
        const button = $('<button type="button" class="btn btn-secondary btnInfo">').text('Ver info');

        button.attr('data-event-id', eventData.id);

        cardBody.append(image, cardTitle, cardDescription, cardDate, button);
        card.append(cardHeader, cardBody);
        $('.container-cards').append(card);

        button.on('click', (event) => {
            const eventId = $(event.target).data('event-id');
            this.loadModalSellTickets(eventId);
            this.handleVerInfoButtonClick(eventData, eventId);
        });

    }

    this.retrieveAllEvents = function(){
        return $.ajax({
            url: 'https://localhost:7152/api/Event/RetrieveAllEvents',
            method: 'GET',
            dataType: 'json',
        });
    }

    this.retrieveAllImagesForEvent = function (eventId) {
        return $.ajax({
            url: `https://localhost:7152/api/Event/RetrieveAllImageToEvent?id=${eventId}`,
            method: 'GET',
            dataType: 'json',
        });
    }

    this.fetchEvents = async function () {
        try {
            const events = await this.retrieveAllEvents();
            const eventObjects = [];

            for (const event of events) {
                const eventId = event.id;

                const images = await this.retrieveAllImagesForEvent(eventId);

                const contacts = await this.getEventContacts(eventId);

                const category = await this.getEventCategory(eventId); 

                const eventObject = {
                    ...event,
                    images: images,
                    contacts: contacts,
                    category: category 
                };

                eventObjects.push(eventObject);
            }

            console.log('Objetos de eventos con imágenes, contactos y categorías:', eventObjects);
            return eventObjects;
        } catch (error) {
            console.error('Error al obtener los eventos, imágenes, contactos y categorías:', error);
            throw error;
        }
    }
}

$(document).ready(function () {
    var view = new HomePageController();
    view.InitView();
});
