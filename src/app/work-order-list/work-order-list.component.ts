import { Component, OnInit } from '@angular/core';
import { WorkOrderService } from '../services/work-order-service';
import { WorkOrder } from '../model/work-order';

@Component({
  selector: 'app-work-order-list',
  templateUrl: './work-order-list.component.html',
  styleUrls: ['./work-order-list.component.scss']
})
export class WorkOrderListComponent implements OnInit {

  orders: WorkOrder[] | undefined;
  constructor(private workOrderService: WorkOrderService) { }

  ngOnInit(): void {
    this.workOrderService.getAllWorkOrders().subscribe(data => {
      this.orders = data;
    },
    (error) => {
      console.error('Error al obtener ordenes:', error)
    });
  }
  
}

