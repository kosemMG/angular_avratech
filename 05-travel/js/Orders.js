"use strict";

class Orders extends Data {
    constructor(destinations, container = 'orders') {
        console.log('Orders.constructor() start | container:', container, ', destinations', destinations);
        super(container);
        this.destinations = destinations;
        this.template = ['id', 'name', 'personalID', 'destination', 'passengersNumber', 'total'];
        this.orders = [];
        this.currentID = 1;
        this._init();
    }

    _init() {
        this.ordersTable = document.getElementById(this.container);
        console.log('Orders._init() | ordersTable:', this.ordersTable);
    }

    render() {
        console.log('Orders.render() | orders: ', this.orders);
        this.ordersTable.innerHTML = this._arrangeHTML(this.orders, this.template);
    }

    addOrder(order) {
        console.log('Orders.addOrder() start | order:', order);
        this.orders.push(this._modifyOrder(order));
    }

    _modifyOrder(order) {
        console.log('Orders.modifyOrder() start | order:', order);
        order.id = this.currentID++;
        for (const destination of this.destinations) {
            if (+order.travelID === +destination.id) {
                order.destination = destination.name;
                order.total = +order.passengersNumber * +destination.price;
                break;
            }
        }
        console.log('Orders.modifyOrder() return order:', order);
        return order;
    }
}
