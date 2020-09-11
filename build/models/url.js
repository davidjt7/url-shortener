"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Urls = void 0;
const sequelize_1 = require("sequelize");
class Urls extends sequelize_1.Model {
}
exports.Urls = Urls;
exports.default = (sequelize, dataTypes) => {
    Urls.init({
        longUrl: dataTypes.STRING,
        shortId: dataTypes.STRING,
        createdAt: dataTypes.DATE,
    }, {
        sequelize,
        tableName: "urls"
    });
    return Urls;
};
//# sourceMappingURL=url.js.map