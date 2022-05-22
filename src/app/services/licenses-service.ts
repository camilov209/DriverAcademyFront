import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { ILicenseModelResponse } from "../models/response/license-model-response";

@Injectable({
    providedIn: 'root',
})

export class LicenseService {
    constructor(private http: HttpClient){}

    getAllLicenses(): Observable<ILicenseModelResponse[]> {
        return this.http.get<ILicenseModelResponse[]>(`${environment.endpoint_backend}/license`);
    }
}