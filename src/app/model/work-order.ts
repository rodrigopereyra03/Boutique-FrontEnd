import { Car } from "./car";
import { Service } from "./service";

export class WorkOrder {
    localDateTime:Date = new Date();
    clientDni!: number;
    car:Car = new Car();
    serviceList: Service[] | undefined;
}

