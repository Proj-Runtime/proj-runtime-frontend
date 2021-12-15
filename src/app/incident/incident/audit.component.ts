import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Incident } from "src/app/model/incident.model";
import { IncidentRepository } from "src/app/model/incident.repository";

@Component({
    selector: "audit-incident",
    templateUrl: "audit.component.html"
})

export class AuditComponent {

    incident: Incident = new Incident();

    constructor(private repository: IncidentRepository,
        private router: Router,
        activeRoute: ActivatedRoute) 
    { 
        this.incident = repository.getItem(activeRoute.snapshot.params["id"]);    
    }


    get incidentList(): Incident[] {
        
        return this.repository.getIncident();        
    }
    
}