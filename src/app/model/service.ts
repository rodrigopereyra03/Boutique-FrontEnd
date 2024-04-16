import { ServiceType } from "./service-type";

export class Service {
    id!: Number;
    name!: string;
    serviceType!: ServiceType;
    serviceDescription!: String;
    price!: Number;
}
