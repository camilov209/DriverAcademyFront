import { ILicenseModelRequest } from "./license-model-request"

export interface IStudentModelRequest {
    studentName: string,
    studentAge: string,
    studentIdentification: string
    license: ILicenseModelRequest
}