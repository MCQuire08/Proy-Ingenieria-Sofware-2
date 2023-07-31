function HomePageController() {
    this.ViewName = "HomePage";

    this.InitView = function () {
        console.log('HomePage init');
        this.CreateCardsOfHomePage();
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

                    this.createCard(imageUrl, title, description, date);
                } else {
                    console.log('No images found for event:', event.name);
                }
            });
        } catch (error) {
            console.error('Error al crear las tarjetas:', error);
        }
    };


    this.createCard = function (imageUrl, title, description, date) {
        const card = $('<div class="card text-white bg-primary mb-3">');
        const cardHeader = $('<div class="card-header">').text(title);
        const cardBody = $('<div class="card-body">');
        const image = $('<img class="card-img">').attr('src', imageUrl);
        const cardTitle = $('<h4 class="card-title">').text(title);
        const cardDescription = $('<p class="card-text">').text(description);
        const cardDate = $('<p class="card-text">').text('Fecha: ' + date);
        const button = $('<button type="button" class="btn btn-secondary">').text('Ver info');

        cardBody.append(image, cardTitle, cardDescription, cardDate, button);
        card.append(cardHeader, cardBody);
        $('.container-cards').append(card); // Update the selector to append to the correct element
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

                const eventObject = {
                    ...event,
                    images: images,
                };

                eventObjects.push(eventObject);
            }

            console.log('Objetos de eventos con imágenes:', eventObjects);
            return eventObjects;
        } catch (error) {
            console.error('Error al obtener los eventos e imágenes:', error);
            throw error;
        }
    }
}

$(document).ready(function () {
    var view = new HomePageController();
    view.InitView();
});
