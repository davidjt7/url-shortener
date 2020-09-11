import { Router } from "express";
import { createOrRetrieveUrlRecord, redirectToOriginalUrl } from "../controllers/url";

const documentRouter = Router({
  mergeParams: true
});

const documentRouters = {
  links: "/links",
  shortUrl: "/:shortId",
};

documentRouter.post(
  documentRouters.links,
  createOrRetrieveUrlRecord
);

documentRouter.get(
  documentRouters.shortUrl,
  redirectToOriginalUrl
);

export default documentRouter;
