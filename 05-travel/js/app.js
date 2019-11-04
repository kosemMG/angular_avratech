"use strict";

const data = new Destinations('js/destinations.json');
const orders = new Orders(data.destinations);

const orderButton = document.getElementById('order-btn');
orderButton.addEventListener('click',event => {
    const order = new OrderTrip();
    orders.addOrder(order.getOrder());
    orders.render();
});
