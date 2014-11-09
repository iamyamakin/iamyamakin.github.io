(function () {
    "use strict";

    var elements = ["article", "aside", "audio", "canvas", "figcaption", "figure", "footer", "header",
            "main", "mark", "nav", "section", "video"],
        i = elements.length,
        doc = document;

    while(i--) {
        doc.createElement(elements[i]);
    }
}());