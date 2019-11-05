"use strict";

try {
    const data = new Destinations('js/destinations.json');
    const ordersData = new Orders(data.destinations);

    const orderButton = document.getElementById('order-btn');
    orderButton.addEventListener('click',() => {
        const order = new OrderTrip();
        ordersData.addOrder(order.getOrder());
        ordersData.render();
    });

    const searchByNameButton = document.getElementById('search-name-btn');
    searchByNameButton.addEventListener('click', () => {
        const searchByNameOrders = new Search('name', ordersData.orders,
            'search-name', 'orders-search-name');
    });

    const searchByDestinationSelect = document.getElementById('search-destination');
    searchByDestinationSelect.addEventListener('change', () => {
        const searchByDestinationOrders = new Search('destination', ordersData.orders,
            'search-destination', 'orders-search-destination');
    });
} catch (error) {
    console.error(error);
}

