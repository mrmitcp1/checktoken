"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const token_controller_1 = require("../controllers/token.controller");
const checktoken_1 = require("../middlewares/checktoken");
exports.router = express_1.default.Router();
exports.router.post('/', checktoken_1.checkToken, token_controller_1.TokenController.token);
//# sourceMappingURL=web.router.js.map