/**
 * name = string
 * duration = number
 * educator = string
 */

interface Course {
    name: string;
    duration: number;
    educator: string;
}

class CreateCourseServices {
    execute({duration, name, educator}: Course){
        console.log(name, duration, educator); 
    }
}

export default new CreateCourseServices();