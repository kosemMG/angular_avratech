"use strict";

const data = new Destinations('js/destinations.json');
const ordersData = new Orders(data.destinations);

try {
    const orderButton = document.getElementById('order-btn');
    orderButton.addEventListener('click',() => {
        const order = new OrderTrip();
        ordersData.addOrder(order.getOrder());
        ordersData.render();
    });

    const searchByNameButton = document.getElementById('search-name-btn');
    searchByNameButton.addEventListener('click', () => {
        const searchByNameOrders = new SearchByName(ordersData.orders);
        // searchByNameOrders.render();
    });

    const searchByDestinationButton = document.getElementById('search-destination-btn');
    searchByDestinationButton.addEventListener('click', () => {
        // const searchByDestinationOrders = new
    });
} catch (error) {
    console.error(error);
}

