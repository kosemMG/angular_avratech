"use strict";

class Destinations extends Data {
    constructor(source, container = 'destinations', select = 'search-destination') {
        console.log('Destinations.constructor() start | source:', source, 'container:', container);
        super(container);
        this.source = source;
        this.select = select;
        this.template = ['id', 'name', 'price'];
        this.destinations = [];
        this._init();
    }

    _init() {
        console.log('Destinations._init() start source:', this.source);
        this.destinationsTable = document.getElementById(this.container);
        this.destinationsSelectElement = document.getElementById(this.select);

        fetch(this.source)
            .then(result => result.json())
            .then(data => {
                for (let destination of data.destinations) {
                    this.destinations.push(destination);
                }
            })
            .then(() => {
                this.destinationsTable.innerHTML = this._arrangeHTML(this.destinations, this.template);
            })
            .then(() => {
                this._renderSelect();
            });
    }

    _renderSelect() {
        console.log('Destinations._renderSelect() start');
        let dataHTML = '<option selected>Choose the destination</option>';
        this.destinations.forEach(destination => {
            dataHTML += `<option value="${destination.id}">${destination.name}</option>`
        });
        this.destinationsSelectElement.innerHTML = dataHTML;
    }
}
