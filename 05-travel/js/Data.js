"use strict";

class Data {
    constructor(source, container) {
        console.log('Data.constructor() start | container:', container);
        this.container = container;
    }

    _getDataHTML(data, template) {
        let dataHTML = '<tr>';
        data.forEach(dataItem => {
            for (const templateItem of template) {
                dataHTML += `<td>${templateItem}</td>`.replace(templateItem, dataItem[templateItem]);
            }
            dataHTML += '</tr>';
        });
        return dataHTML;
    }
}
