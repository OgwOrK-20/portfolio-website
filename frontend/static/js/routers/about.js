import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("About | OG.")
    }

    async getHtml() {
        $.get('/static/views/about.html', function (html) {
            $("#entry").html(html)
        })
    }
}