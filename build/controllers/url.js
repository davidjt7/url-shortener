"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirectToOriginalUrl = exports.createOrRetrieveUrlRecord = void 0;
const shortid_1 = __importDefault(require("shortid"));
const url_1 = require("../services/url");
const response_helper_1 = require("../utils/response_helper");
const createOrRetrieveUrlRecord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let urlDetails = yield url_1.getUrlRecord(req.body);
        if (!urlDetails) {
            const params = {
                longUrl: req.body.link,
                shortUrl: shortid_1.default.generate()
            };
            urlDetails = yield url_1.createUrlRecord(params);
        }
        const result = {
            longUrl: urlDetails.longUrl,
            shortUrl: `${process.env.HOST}/${urlDetails.shortUrl}`,
            createdAt: urlDetails.createdAt,
        };
        return response_helper_1.successResponse(res)(result);
    }
    catch (error) {
        return response_helper_1.errorResponse(res)(error);
    }
});
exports.createOrRetrieveUrlRecord = createOrRetrieveUrlRecord;
const redirectToOriginalUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const longUrlRecord = yield url_1.getLongUrl(req.params);
        res.redirect(301, longUrlRecord.longUrl);
    }
    catch (error) {
        return response_helper_1.errorResponse(res)(error);
    }
});
exports.redirectToOriginalUrl = redirectToOriginalUrl;
//# sourceMappingURL=url.js.map