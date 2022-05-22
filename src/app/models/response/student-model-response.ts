import { ILicenseModelResponse } from "./license-model-response"

export interface IStudentModelResponse {
    studentId: number,
    studentName: string,
    studentAge: string,
    studentIdentification: string
    license: ILicenseModelResponse
}