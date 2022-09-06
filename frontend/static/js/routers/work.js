import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle("Work | OG.")
    }

    async getHtml() {
        $.get('/static/views/work.html', function (html) {
            $("#entry").html(html)
        })
    }
}