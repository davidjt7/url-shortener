"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const url_1 = __importDefault(require("./url"));
const router = express_1.Router();
router.use(url_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map