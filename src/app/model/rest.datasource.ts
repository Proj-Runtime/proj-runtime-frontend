import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Incident } from "./incident.model";
import { User } from "./user.model";
import { map } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';

import { ResponseModel } from "./response.model";

const PROTOCOL = "http";
const PORT = 4000;

@Injectable()
export class RestDataSource {

    baseUrl: string;
    auth_token: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getIncidentList(): Observable<Incident[]> {
        return this.http.get<Incident[]>(this.baseUrl + "incident/list");
    }

    insertIncident(item: Incident): Observable<Incident> {
        return this.http.post<Incident>(this.baseUrl + "incident/add",
            item, this.getOptions());
    }

    updateIncident(item: Incident): Observable<Incident> {
        return this.http.put<Incident>(`${this.baseUrl}incident/edit/${item._id}`,
            item, this.getOptions());
    }

    deleteIncident(id: string): Observable<ResponseModel> {
        return this.http.delete<any>(`${this.baseUrl}incident/delete/${id}`,
            this.getOptions()).pipe(map(response => {
                return response;
            }));
    }

    authenticate(username: string, pass: string): Observable<boolean> {
        return this.http.post<any>(this.baseUrl + "index/login", {
            username: username, password: pass
        }).pipe(map(response => {
            this.auth_token = response.success ? response.token : null;
            return response.success;
        }));
    }

    registerUser(user: User): Observable<ResponseModel> {
        return this.http.post<ResponseModel>(this.baseUrl + "index/register", user)
            .pipe(map(response => {
                return response;
            }));
    }

    private getOptions() {
        return {
            headers: new HttpHeaders({
                "Authorization": `Bearer ${this.auth_token}`
            })
        }
    }
}
