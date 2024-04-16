import { Component, OnInit } from '@angular/core';
import { WorkOrder } from '../model/work-order';
import { WorkOrderService } from '../services/work-order-service';
import { ServicesService } from '../services/services-service';
import { Service } from '../model/service';
import { AppoinmentService } from '../services/appoinment-service';

@Component({
  selector: 'app-work-order-form',
  templateUrl: './work-order-form.component.html',
  styleUrls: ['./work-order-form.component.scss']
})
export class WorkOrderFormComponent implements OnInit {


  listService:Service[] | undefined;
  serviceId: Number | undefined;
  workOrder: WorkOrder;
  services: Service[] | undefined;
  selectedDateTime: Date = new Date();
  dateTimeOptions: Date[] | undefined;


  constructor(private workOrderService: WorkOrderService, private service: ServicesService, private appoinmentService: AppoinmentService) { 
    this.workOrder = new WorkOrder();
    this.dateTimeOptions = appoinmentService.getAvailableAppoinments();
  }

  ngOnInit(): void {
    
    this.service.getAllServices().subscribe(res=>{
      this.listService = res;
    },error=>{
      console.log("servicio no encontrado")
    });

  }

  onSubmit(){
    this.workOrder.localDateTime = this.selectedDateTime;
    console.log(this.services);
    this.workOrder.serviceList = this.services;

    this.workOrderService.createWorkOrder(this.workOrder).subscribe(res=>{
      console.log("Orden creada")
    },error=>{
      console.log("La orden fallo")
    });
  }


formatLocalDateTime(dateTime: Date): string {

  const year = dateTime.getFullYear();
  const month = ('0' + (dateTime.getMonth() + 1)).slice(-2);
  const day = ('0' + dateTime.getDate()).slice(-2);
  const hours = ('0' + dateTime.getHours()).slice(-2);
  const minutes = ('0' + dateTime.getMinutes()).slice(-2);
  return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

}
