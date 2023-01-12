"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Creating The Server
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
// use the Express middleware
const app = (0, express_1.default)();
// set port to 3000 port instead if not available
const port = 3000;
// Use routes
app.use("/api/images", index_1.default);
// Run server
app.listen(port, () => {
    console.log("Server is working");
});
exports.default = app;
