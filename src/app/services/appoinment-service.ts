import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AppoinmentService {
    dateTimeOptions: Date[] | undefined;


    getAvailableAppoinments(): Date[] { 
        this.dateTimeOptions = [];
        const interval = 45; 
        const startDate = new Date(); 
        startDate.setHours(9, 0, 0, 0); 
    
        
        const roundedMinutes = Math.ceil(startDate.getMinutes() / interval) * interval;
        startDate.setMinutes(roundedMinutes);
    
       
        const endDate = new Date();
        endDate.setHours(17, 0, 0, 0); 
    
        
        while (startDate <= endDate) {
          this.dateTimeOptions.push(new Date(startDate));
          startDate.setMinutes(startDate.getMinutes() + interval);
        }

        return this.dateTimeOptions;
      }
}


