"use strict";

class Destinations extends Data {
    constructor(source, container = 'destinations') {
        console.log('Destinations.constructor() start | source:', source, 'container:', container);
        super(source, container);
        this.source = source;
        this.template = ['id', 'name', 'price'];
        this.destinations = [];
        this._init(this.source);
    }

    _init(source) {
        console.log('Destinations._init() start source:', source);
        this.destinationsTable = document.getElementById(this.container);

        fetch(source)
            .then(result => result.json())
            .then(data => {
                for (let destination of data.destinations) {
                    this.destinations.push(destination);
                }
            })
            .then(() => {
                this.destinationsTable.innerHTML = this._arrangeHTML(this.destinations, this.template);
            });
    }

    // _render(destinations) {
    //     let destinationRowTemplate = '<tr><td>#ID</td><td>#NAME</td><td>#PRICE</td></tr>';
    //     let destinationsHTML = '';
    //
    //     destinations.forEach(destination => {
    //         destinationsHTML += destinationRowTemplate
    //             .replace('#ID', destination.id)
    //             .replace('#NAME', destination.name)
    //             .replace('#PRICE', destination.price)
    //     });
    //
    //     this.destinationsTable.innerHTML = destinationsHTML;
    // }
}
