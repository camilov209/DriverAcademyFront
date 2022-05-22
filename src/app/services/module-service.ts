import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { IModuleModelResponse } from "../models/response/module-detail-model-response";

@Injectable({
    providedIn: 'root',
})

export class ModuleService {
    constructor(private http: HttpClient){}

    getAllModules(): Observable<IModuleModelResponse[]> {
        return this.http.get<IModuleModelResponse[]>(`${environment.endpoint_backend}/module`);
    }
}