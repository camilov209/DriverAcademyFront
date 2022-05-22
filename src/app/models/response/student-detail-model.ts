import { IModuleDetailResponse } from "./module-model-response";
import { IStudentModelResponse } from "./student-model-response";

export interface IStudentDetailModelResponse extends IStudentModelResponse {
    module: Array<IModuleDetailResponse>
}