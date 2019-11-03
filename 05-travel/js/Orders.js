"use strict";

class Orders extends Data {
    constructor(container = 'orders') {
        super();
        this.template = ['id', 'name', 'personalID', 'travelID', 'passengersNumber', 'total'];
        this.orders = [];
        this._init();
    }

    _init() {
        this.ordersTable = document.getElementById(this.container);
    }

    _render() {
        this.ordersTable.innerHTML = this._getDataHTML(this.orders, this.template);
    }
}
