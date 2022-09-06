import about from "./routers/about.js";
import contact from "./routers/contact.js";
import home from "./routers/home.js";
import work from "./routers/work.js";

// entry for each view
console.log("loaded")
const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: "/home", view: home },
        { path: "/", view: home },
        { path: "/about", view: about },
        { path: "/work", view: work },
        { path: "/contact", view: contact }
    ]
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatched: location.pathname === route.path
        }
    })

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatched === true)
    if (!match) {
        match = {
            route: routes[0],
            isMatched: true
        }
    }
    const view = new match.route.view();
    await view.getHtml()
}

$(router)
$(window).on('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    $("a.link").on("click", function (e) {
        e.preventDefault();
        navigateTo(e.target.href)
    });
})
