import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { IncidentRepository } from "./incident.repository";
import { RestDataSource } from "./rest.datasource";
import { AuthService } from "./auth.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [
        IncidentRepository,
        RestDataSource,
        AuthService      
    ]
})

export class ModelModule { }