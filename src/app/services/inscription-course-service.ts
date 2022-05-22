import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { enviroment } from "../enviroments/enviroment";
import { IInscriptionModelRequest } from "../models/request/inscription-model-request";

@Injectable({
    providedIn: 'root',
})

export class InscriptionCourseService {
    constructor(private http: HttpClient){}

    saveInscriptionModules(inscriptionRequest: IInscriptionModelRequest): Observable<void> {
        return this.http.post<void>(
            `${enviroment.endpoint_backend}/inscription`, inscriptionRequest);
    }
}