class OrderTrip {
    constructor(container = 'order-form') {
        this.container = container;
        this._init();
    }

    _init() {
        this.form = document.getElementById(this.container);
        console.log(this.form);
        this.formInputs = {
            name: document.getElementById('name'),
            personalID: document.getElementById('personal-id'),
            travelID: document.getElementById('travel-id'),
            passengersNumber: document.getElementById('passengers-number')
        };
    }

    getOrder() {
        const order = {
            name: this.formInputs.name.value,
            personalID: this.formInputs.personalID.value,
            travelID: this.formInputs.travelID.value,
            passengersNumber: this.formInputs.passengersNumber.value,
        };
        this.form.reset();
        return order;
    }
}
