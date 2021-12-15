import { Injectable } from "@angular/core";
import { Incident } from "./incident.model";
import { ResponseModel } from "./response.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class IncidentRepository {
    private incident: Incident[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getIncidentList().subscribe(data => {
            this.incident = data;
        });
    }

    getIncident(): Incident[] {
        return this.incident;
    }

    getItem(id: string): Incident {
        return (this.incident.find(item => item._id === id)!);
    }

    saveIncident(item: Incident) {
        if (item._id == null || item._id == "") {
            this.dataSource.insertIncident(item)
                .subscribe(p => this.incident.push(p));
        } else {
            this.dataSource.updateIncident(item)
                .subscribe(p => {
                    this.incident.splice(this.incident.
                        findIndex(i => i._id == item._id), 1, item);
                });
        }
    }

    deleteIncident(id: string) {
        this.dataSource.deleteIncident(id).subscribe(response => {
            if (response.success) {
                this.incident.splice(this.incident.
                    findIndex(item => item._id == id), 1);                                
            }
            else{
                alert(response.message);
            }
        })
    }
}