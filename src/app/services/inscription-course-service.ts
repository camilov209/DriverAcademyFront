import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { IInscriptionModelRequest } from "../models/request/inscription-model-request";

@Injectable({
    providedIn: 'root',
})

export class InscriptionCourseService {
    constructor(private http: HttpClient){}

    saveInscriptionModules(inscriptionRequest: IInscriptionModelRequest): Observable<void> {
        return this.http.post<void>(
            `${environment.endpoint_backend}/inscription`, inscriptionRequest);
    }
}