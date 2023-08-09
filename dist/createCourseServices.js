"use strict";
/**
 * name = string
 * duration = number
 * educator = string
 */
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseServices {
    execute({ duration, name, educator }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseServices();
