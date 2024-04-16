import { Injectable } from "@angular/core";
import { WorkOrder } from "../model/work-order";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class WorkOrderService {

    urlBackend:string = "http://localhost:8080/api"

  constructor(private http:HttpClient) { }


  createWorkOrder(workOrder:WorkOrder){

    return this.http.post<any>(this.urlBackend+"/orders",workOrder);
  }

  getAllWorkOrders():Observable<WorkOrder[]>{
    return this.http.get<any>(this.urlBackend+"/orders");
  }
}
