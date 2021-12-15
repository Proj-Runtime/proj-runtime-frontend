import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Incident } from "src/app/model/incident.model";
import { IncidentRepository } from "src/app/model/incident.repository";

@Component({
    selector: "add-edit",
    templateUrl: "add_edit.component.html"
})

export class AddEditComponent {

    editing: boolean = false;
    incident: Incident = new Incident();

    constructor(private repository: IncidentRepository,
        private router: Router,
        activeRoute: ActivatedRoute) 
    { 
        if (activeRoute.snapshot.params["mode"] == "delete") {
            this.deleteIncident(activeRoute.snapshot.params["id"]);
        }

        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        
        if (this.editing) {
            this.incident = repository.getItem(activeRoute.snapshot.params["id"]);
        } 
        // else {
        //     this.incident.size = new Size();
        // }        
    }

    save(form: NgForm) {
        this.repository.saveIncident(this.incident);
        this.router.navigateByUrl("incident/list");
    }

    private deleteIncident(id: string){
        this.repository.deleteIncident(id);
        this.router.navigateByUrl("incident/list");
    }
    
}