import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, share } from "rxjs";
import { enviroment } from "../enviroments/enviroment";
import { IStudentModelRequest } from "../models/request/student-model-request";
import { IStudentDetailModelResponse } from "../models/response/student-detail-model";
import { IStudentModelResponse } from "../models/response/student-model-response";

@Injectable({
    providedIn: 'root',
})

export class StudentService {
    constructor(private http: HttpClient){}

    getAllStudents(): Observable<IStudentModelResponse[]> {
        return this.http.get<IStudentModelResponse[]>(`${enviroment.endpoint_backend}/student`);
    }

    getDetailStudent(id: number): Observable<IStudentDetailModelResponse[]> {
        return this.http.get<IStudentDetailModelResponse[]>(`${enviroment.endpoint_backend}/student/${id}`);
    }

    saveStudent(student: IStudentModelRequest): Observable<void> {
        return this.http.post<void>(
            `${enviroment.endpoint_backend}/student`, student);
    }
}