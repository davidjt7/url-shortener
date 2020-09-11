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
exports.getLongUrl = exports.createUrlRecord = exports.getUrlRecord = void 0;
const sequelize_1 = require("sequelize");
const models_1 = __importDefault(require("../models"));
function getUrlRecord(parameters) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield models_1.default.Urls
                .findOne({
                attributes: ["id", "shortId", "longUrl", "createdAt"],
                where: {
                    longUrl: {
                        [sequelize_1.Op.iLike]: parameters.link
                    },
                },
            });
            return data;
        }
        catch (error) {
            throw error.message;
        }
    });
}
exports.getUrlRecord = getUrlRecord;
function createUrlRecord(parameters) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield models_1.default.Urls
                .create(parameters);
            return data;
        }
        catch (error) {
            throw error.message;
        }
    });
}
exports.createUrlRecord = createUrlRecord;
function getLongUrl(parameters) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield models_1.default.Urls
                .findOne({
                attributes: ["longUrl"],
                where: {
                    shortId: {
                        [sequelize_1.Op.iLike]: parameters.shortUrl
                    },
                },
            });
            return data;
        }
        catch (error) {
            throw error.message;
        }
    });
}
exports.getLongUrl = getLongUrl;
//# sourceMappingURL=url.js.map