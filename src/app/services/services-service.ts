import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Service } from "../model/service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ServicesService {
    urlBackend:string = "http://localhost:8080/api"

  constructor(private http:HttpClient) { }

  
  getAllServices():Observable<Service[]>{
    return this.http.get<any>(this.urlBackend+"/services");
  }

  

}
