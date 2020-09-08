import { Request, Response } from "express";
import shortid from "shortid";
import { createUrlRecord, getLongUrl, getUrlRecord  } from "../services/url";
import { errorResponse, successResponse } from "../utils/response_helper";

const createOrRetrieveUrlRecord = async (req: Request, res: Response) => {
  try {
    let urlDetails = await getUrlRecord(req.body);

    if (!urlDetails) {
      const params = {
        longUrl: req.body.link,
        shortUrl: shortid.generate()
      };
      urlDetails = await createUrlRecord(params);
    }

    const result = {
      longUrl: urlDetails.longUrl,
      shortUrl: `${process.env.HOST}/${urlDetails.shortUrl}`,
      createdAt: urlDetails.createdAt,
    };

    return successResponse(res)(result);
  } catch (error) {
    return errorResponse(res)(error);
  }
};

const redirectToOriginalUrl = async (req: Request, res: Response) => {
  try {
    const longUrlRecord = await getLongUrl(req.params);
    res.redirect(301, longUrlRecord.longUrl);
  } catch (error) {
    return errorResponse(res)(error);
  }
};

export {
  createOrRetrieveUrlRecord,
  redirectToOriginalUrl
};
