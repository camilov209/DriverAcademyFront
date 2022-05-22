import { ICourseModelResponse } from "./course-model-response";

export interface IModuleModelResponse {
    moduleId: number,
    moduleName: string,
    courses: ICourseModelResponse
}