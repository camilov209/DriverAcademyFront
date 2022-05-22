import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { IStudentModelRequest } from "../models/request/student-model-request";
import { IStudentDetailModelResponse } from "../models/response/student-detail-model";
import { IStudentModelResponse } from "../models/response/student-model-response";

@Injectable({
    providedIn: 'root',
})

export class StudentService {
    constructor(private http: HttpClient){}

    getAllStudents(): Observable<IStudentModelResponse[]> {
        return this.http.get<IStudentModelResponse[]>(`${environment.endpoint_backend}/student`);
    }

    getDetailStudent(id: number): Observable<IStudentDetailModelResponse> {
        return this.http.get<IStudentDetailModelResponse>(`${environment.endpoint_backend}/student/${id}`);
    }

    saveStudent(student: IStudentModelRequest): Observable<void> {
        return this.http.post<void>(
            `${environment.endpoint_backend}/student`, student);
    }
}