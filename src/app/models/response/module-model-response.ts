import { ICourseModelResponse } from "./course-model-response";

export interface IModuleDetailResponse {
    moduleId: number,
    moduleName: string,
    courses: ICourseModelResponse
}