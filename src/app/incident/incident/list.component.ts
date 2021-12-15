import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Incident } from "../../model/incident.model";
import { IncidentRepository } from "../../model/incident.repository";
import { formatDate } from "@angular/common";

@Component({
    selector: "list-incident",
    templateUrl: "list.component.html"
})

export class ListComponent {

    public status: string;

    constructor(
        private repository: IncidentRepository,
        private router: Router
    ) 
    { }

    get incidentList(): Incident[] {
        return this.repository.getIncident();        
    }

    deleteMethod(id: string) {
        if(confirm("Are you sure you want to delete?")) {
            this.router.navigateByUrl("incident/delete/"+id);
        }
    }
    
}