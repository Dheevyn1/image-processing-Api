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
const resize_1 = __importDefault(require("../../utilities/resize"));
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
describe("Testing resize function", () => {
    it("checks if the resizing is successful", () => __awaiter(void 0, void 0, void 0, function* () {
        const file = "palmtunnel-4";
        const width = 600;
        const height = 500;
        const outputPhoto = path_1.default.resolve(__dirname, `../../../assets/cropped/${file}x${width}x${height}.jpg`);
        const resizeFunction = yield (0, resize_1.default)(file, width, height);
        expect(resizeFunction).toBe(outputPhoto);
    }));
});
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    const file = "palmtunnel-4";
    const width = 600;
    const height = 500;
    const outputPhoto = path_1.default.resolve(__dirname, `../../../assets/cropped/${file}x${width}x${height}.jpg`);
    yield fs_1.promises.unlink(outputPhoto);
}));
