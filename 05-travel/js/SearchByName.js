class SearchByName extends Search {
    constructor(orders, inputContainer = 'search-name', foundOrdersContainer = 'orders-search-name') {
        super(orders);
        this.inputContainer = inputContainer;
        this.foundOrdersContainer = foundOrdersContainer;
        this.init(inputContainer, foundOrdersContainer);
        this.render();
    }
}
