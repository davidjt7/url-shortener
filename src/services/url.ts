import { Op } from "sequelize";
import DB from "../models";

async function getUrlRecord(parameters: { [key: string]: any }) {
  try {
    const data = await DB.Urls
    .findOne({
      attributes: ["id", "shortId", "longUrl", "createdAt"],
      where: {
        longUrl: {
          [Op.iLike]: parameters.link
        },
      },
    });
    return data;
  } catch (error) {
    throw error.message;
  }
}

async function createUrlRecord(parameters: { [key: string]: any }) {
  try {
    const data = await DB.Urls
    .create(parameters);
    return data;
  } catch (error) {
    throw error.message;
  }
}

async function getLongUrl(parameters: { [key: string]: any }) {
  try {
    const data = await DB.Urls
    .findOne({
      attributes: ["longUrl"],
      where: {
        shortId: {
          [Op.iLike]: parameters.shortUrl
        },
      },
    });
    return data;
  } catch (error) {
    throw error.message;
  }
}

export {
  getUrlRecord,
  createUrlRecord,
  getLongUrl
};
