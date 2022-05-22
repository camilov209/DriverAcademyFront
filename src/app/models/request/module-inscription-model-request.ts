import { ICourseInscriptionModelRequest } from "./course-inscription-model-request"

export interface IModuleInscriptionModelRequest {
    moduleId: number
    courses: ICourseInscriptionModelRequest
}