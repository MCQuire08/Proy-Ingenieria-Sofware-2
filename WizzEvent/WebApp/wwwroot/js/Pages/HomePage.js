function HomePageController() {
    this.ViewName = "HomePage";

    this.InitView = function () {
        console.log('HomePage init');
        this.CreateCardsOfHomePage();
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
        categoryElement.text(eventData.category[0].name);
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


    this.handleVerInfoButtonClick = function (eventData) {
        this.loadModalInfo(eventData);
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

        cardBody.append(image, cardTitle, cardDescription, cardDate, button);
        card.append(cardHeader, cardBody);
        $('.container-cards').append(card);

        button.on('click', () => {
            this.handleVerInfoButtonClick(eventData);
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
