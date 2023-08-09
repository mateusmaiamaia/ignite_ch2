/**
 * name = string
 * duration = number
 * educator = string
 */

class CreateCourseServices {
    execute(name: string, duration: number, educator: string){
        console.log(name, duration, educator); 
    }
}

export default new CreateCourseServices();