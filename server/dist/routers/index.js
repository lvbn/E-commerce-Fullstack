"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shoppingCart_1 = __importDefault(require("./shoppingCart"));
const router = express_1.default.Router();
function routerRoutes() {
    console.log('TEST 1');
    (0, shoppingCart_1.default)(router);
    return router;
}
exports.default = routerRoutes;
//# sourceMappingURL=index.js.map