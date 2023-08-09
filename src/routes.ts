import { Request, Response} from 'express' 
import createCourseServices from './createCourseServices'

export function createCourse(request: Request, response: Response){

    createCourseServices.execute({
        name: "NodeJS",
        educator: "Dani",
        duration: 10
    });

    return response.send();
}