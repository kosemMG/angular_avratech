class DestinationsSearch extends Search {
    constructor(destinations, orders, inputContainer, foundOrdersContainer) {
        super(orders, inputContainer, foundOrdersContainer);
        this.destinations = destinations;
        this._renderSelect();
    }

    _renderSelect() {
        let dataHTML = '<option selected>Choose the destination</option>';
        data.forEach(dataItem => {
            for (const templateItem of template) {
                dataHTML += `<td>${templateItem}</td>`.replace(templateItem, dataItem[templateItem]);
            }
            dataHTML += '</tr>';
        });
        return dataHTML;
    }
}


<option selected>Choose the destination</option>
<option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
