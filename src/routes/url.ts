import { Router } from "express";
import { createOrRetrieveUrlRecord, redirectToOriginalUrl } from "../controllers/url";

const documentRouter = Router({
  mergeParams: true
});

const documentRouters = {
  links: "/links",
  shortUrl: "/:shortUrl",
};

documentRouter.get(
  documentRouters.links,
  createOrRetrieveUrlRecord
);

documentRouter.get(
  documentRouters.shortUrl,
  redirectToOriginalUrl
);

export default documentRouter;
