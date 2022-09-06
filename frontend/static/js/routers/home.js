import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home | OG.")
    }

    async getHtml() {
        $.get('/static/views/home.html', function (html) {
            $("#entry").html(html)
        })
    }
}