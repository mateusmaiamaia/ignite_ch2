import { Request, Response} from 'express' 
import createCourseServices from './createCourseServices'

export function CreateCourse(request: Request, response: Response){

    CreateCourseServices.execute("NodeJS", 10, "Dani");

    return response.send();
}