import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { enviroment } from "../enviroments/enviroment";

@Injectable({
    providedIn: 'root',
})

export class InscriptionCourseService {
    constructor(private http: HttpClient){}

   
}