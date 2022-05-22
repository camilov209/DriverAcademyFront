import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { enviroment } from "../enviroments/enviroment";
import { ILicenseModelResponse } from "../models/response/license-model-response";

@Injectable({
    providedIn: 'root',
})

export class LicenseService {
    constructor(private http: HttpClient){}

    getAllLicenses(): Observable<ILicenseModelResponse[]> {
        return this.http.get<ILicenseModelResponse[]>(`${enviroment.endpoint_backend}/license`);
    }
}