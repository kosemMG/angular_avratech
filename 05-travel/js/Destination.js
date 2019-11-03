class Destination {
    constructor(source, container = 'destinations') {
        this.source = source;
        this.container = container;
        this.destinations = [];
        this._init(this.source);
    }

    _init(source) {
        fetch(source)
            .then(result => result.json())
            .then(data => {
                for (let destination of data.destinations) {
                    this.destinations.push(destination);
                }
            })
            .then(() => {
                console.log(this.destinations);
                this._renderDestinations(this.destinations);
            });

        this.destinationsTable = document.getElementById(this.container);
        console.log(this.destinationsTable);
    }

    _renderDestinations(destinations) {
        let destinationRowTemplate = '<tr><td>#ID</td><td>#NAME</td><td>#PRICE</td></tr>';
        let destinationsHTML = '';

        destinations.forEach(destination => {
            destinationsHTML += destinationRowTemplate
                .replace('#ID', destination.id)
                .replace('#NAME', destination.name)
                .replace('#PRICE', destination.price)
        });

        this.destinationsTable.innerHTML = destinationsHTML;
    }
}
