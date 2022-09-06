import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Contact | OG.")
    }

    async getHtml() {
        $.get('/static/views/contact.html', function (html) {
            $("#entry").html(html)
        })
    }
}