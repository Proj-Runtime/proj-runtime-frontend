import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../../model/model.module";
import { PartialsModule } from '../partials/partials.module';
import { LogInComponent } from "./login.component";
import { RegisterComponent } from "./register.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, PartialsModule],
    declarations: [LogInComponent, RegisterComponent],
    exports : [LogInComponent, RegisterComponent]
})

export class AuthModule {}