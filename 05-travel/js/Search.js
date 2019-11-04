class Search extends Data {
    constructor(orders, /*inputContainer = 'search-name', foundOrdersContainer = 'orders-search-name',*/) {
        super(null, null);
        this.orders = orders;
        // this.inputContainer = inputContainer;
        // this.foundOrdersOrdersContainer = foundOrdersContainer;
        this.foundOrders = [];
        this.template = ['id', 'name', 'personalID', 'destination', 'passengersNumber', 'total'];
    }

    init(inputContainer, foundOrdersContainer) {
        this.searchInput = document.getElementById(inputContainer);
        this.foundOrdersTable = document.getElementById(foundOrdersContainer);
        console.log('Search._init() | searchInput:', this.searchInput);
        this._searchOrders();
    }

    _searchOrders() {
        for (const order of this.orders) {
            if (order.name === this.searchInput.value) {
                this.foundOrders.push(order);
            }
        }
    }

    render() {
        console.log('Orders.render() | orders: ', this.foundOrders);
        this.foundOrdersTable.innerHTML = this._arrangeHTML(this.foundOrders, this.template);
        let tableTotal = '<tr>';
        for (let i = 0; i < this.template.length - 2; i++) {
            tableTotal += '<td class="noborder"></td>';
        }
        tableTotal += `<td>Total:</td></td><td>${this._total()}</td></tr>`;
        this.foundOrdersTable.innerHTML += tableTotal;
    }

    _total() {
        let total = 0;
        for (const order of this.foundOrders) {
            console.log(order);
            total += order.total;
        }
        return total;
    }
}
