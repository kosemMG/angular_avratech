"use strict";

console.log('travel app started');

try {
    // populate destinations
    console.log('populate destination')
    let destination = [
        {
            code: 1,
            name: 'London',
            price: 100
        },
        {
            code: 2,
            name: 'Switzerland',
            price: 100
        },
        {
            code: 3,
            name: 'Tokyo',
            price: 100
        },
        {
            code: 4,
            name: 'Paris',
            price: 100
        },
    ];

    let tableDestination = document.querySelector('.table-destination tbody');
    let destinationTemplate = '<tr><td>#CODE</td><td>#NAME</td><td>#PRICE</td></tr>';
    let destinationRowsHTML = '';

    destination.forEach(destinationItem => {
        destinationRowsHTML += destinationTemplate
            .replace('#CODE', destinationItem.code)
            .replace('#NAME', destinationItem.name)
            .replace('#PRICE', destinationItem.price);
    });

    tableDestination.innerHTML = destinationRowsHTML;

    // populate orders
    console.log('populate orders');

    let orders = [
        {
            code: 1,
            name: 'avi',
            personalID: '02345',
            travelID: 12,
            passengersNumber: 4
        },
    ];

    let tableOrders = document.querySelector('.table-orders tbody');
    let ordersTemplate = `<tr><td>#CODE</td><td>#CNAME</td>
                            <td>#PID</td><td>#TID</td><td>#CODE</td>
                            <td>#PNUMBER</td><td>#TPRICE</td>`;

} catch (error) {
    console.error('travel app error:', error);
}

function addTravel() {
    try {
        let inputs = document.querySelectorAll('.form-registration');
        let travelItem = {
            code: db.orders[db.orders.length - 1].code + 1,
            name: inputs[0].value,
        };
        
    } catch (error) {
        
    }
}