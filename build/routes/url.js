"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const url_1 = require("../controllers/url");
const documentRouter = express_1.Router({
    mergeParams: true
});
const documentRouters = {
    links: "/links",
    shortUrl: "/:shortUrl",
};
documentRouter.get(documentRouters.links, url_1.createOrRetrieveUrlRecord);
documentRouter.get(documentRouters.shortUrl, url_1.redirectToOriginalUrl);
exports.default = documentRouter;
//# sourceMappingURL=url.js.map