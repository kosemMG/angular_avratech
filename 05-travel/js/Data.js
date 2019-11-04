"use strict";

class Data {
    constructor(container) {
        console.log('Data.constructor() start | container:', container);
        this.container = container;
    }

    _arrangeHTML(data, template) {
        let dataHTML = '<tr>';
        data.forEach(dataItem => {
            for (const templateItem of template) {
                if (templateItem === 'price' || templateItem === 'total') {
                    dataHTML += `<td>${templateItem}</td>`.replace(templateItem, '$' + dataItem[templateItem]);
                } else {
                    dataHTML += `<td>${templateItem}</td>`.replace(templateItem, dataItem[templateItem]);
                }
            }
            dataHTML += '</tr>';
        });
        return dataHTML;
    }
}
