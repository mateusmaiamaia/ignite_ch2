"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCourse = void 0;
const createCourseServices_1 = __importDefault(require("./createCourseServices"));
function CreateCourse(request, response) {
    createCourseServices_1.default.execute("NodeJS", 10, "Dani");
    return response.send();
}
exports.CreateCourse = CreateCourse;
