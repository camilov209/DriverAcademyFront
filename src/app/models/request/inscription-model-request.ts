import { IStudentModelResponse } from "../response/student-model-response";
import { IModuleInscriptionModelRequest } from "./module-inscription-model-request";
import { IStudentInscriptionModelRequest } from "./student-inscription-model-request";
import { IStudentModelRequest } from "./student-model-request";

export interface IInscriptionModelRequest {
    students: IStudentInscriptionModelRequest,
    modules: Array<IModuleInscriptionModelRequest>
}