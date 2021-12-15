import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './incident/index.component';

import { IndexModule } from './incident/index.module';
import { PartialsModule } from './incident/partials/partials.module';
import { IncidentModule } from './incident/incident/incident.module';
import { ListComponent } from './incident/incident/list.component';
import { AuthModule } from './incident/auth/auth.module';
import { LogInComponent } from './incident/auth/login.component';
import { RegisterComponent } from './incident/auth/register.component';
import { AddEditComponent } from './incident/incident/add_edit.component';

import { AuthGuard } from './incident/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IndexModule,
    PartialsModule,
    IncidentModule,
    AuthModule,
    RouterModule.forRoot([
      { path: "", component: IndexComponent },
      { path: "incident/list", component: ListComponent },
      { path: "index/login", component: LogInComponent },
      { path: "index/register", component: RegisterComponent },
      { path: "incident/:mode", component: AddEditComponent, canActivate: [AuthGuard] },
      { path: "incident/:mode/:id", component: AddEditComponent, canActivate: [AuthGuard] },
      { path: "**", redirectTo: ""}
    ])
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
