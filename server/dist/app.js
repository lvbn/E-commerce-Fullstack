"use strict";
// set up a Express + TS server:
// https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routers/index"));
exports.app = (0, express_1.default)();
exports.port = 3000;
const corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    // credentials: true,
};
exports.app.use((0, cors_1.default)(corsOptions));
exports.app.use(express_1.default.json());
exports.app.use((0, index_1.default)());
//# sourceMappingURL=app.js.map