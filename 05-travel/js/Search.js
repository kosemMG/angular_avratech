class Search extends Data {
    constructor(searchBy, orders, inputContainer, foundOrdersContainer) {
        super();
        this.searchBy = searchBy;
        this.orders = orders;
        this.inputContainer = inputContainer;
        this.foundOrdersContainer = foundOrdersContainer;
        this.foundOrders = [];
        this.template = ['id', 'name', 'personalID', 'destination', 'passengersNumber', 'total'];
        this._init();
    }

    _init() {
        console.log('Search._init() start');
        this.searchInput = document.getElementById(this.inputContainer);
        this.foundOrdersTable = document.getElementById(this.foundOrdersContainer);
        console.log('searchInput:', this.searchInput);
        console.log('foundOrdersTable:', this.foundOrdersTable);
        this._searchOrders();
        this._render();
    }

    _searchOrders() {
        console.log('Search._searchOrders() start');
        switch (this.searchBy) {
            case 'destination':
                for (const order of this.orders) {
                    if (order.travelID === this.searchInput.value) {
                        this.foundOrders.push(order);
                    }
                }
                break;
            case 'name':
                for (const order of this.orders) {
                    if (order.name === this.searchInput.value) {
                        this.foundOrders.push(order);
                    }
                }
                break;
        }
        console.log('this.foundOrders:', this.foundOrders);
    }

    _render() {
        console.log('Orders.render() | orders: ', this.foundOrders);
        this.foundOrdersTable.innerHTML = this._arrangeHTML(this.foundOrders, this.template);
        let tableTotal = '<tr>';
        for (let i = 0; i < this.template.length - 2; i++) {
            tableTotal += '<td style="border: none"></td>';
        }
        tableTotal += `<td>Total:</td></td><td>&dollar;${this._total()}</td></tr>`;
        this.foundOrdersTable.innerHTML += tableTotal;
    }

    _total() {
        console.log('Search._total() start');
        let total = 0;
        for (const order of this.foundOrders) {
            console.log(order);
            total += order.total;
        }
        console.log('Search._total() return total:', total);
        return total;
    }
}
