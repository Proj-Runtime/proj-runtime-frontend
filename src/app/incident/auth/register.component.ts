import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../model/auth.service";
import { User } from "../../model/user.model";

@Component({
    templateUrl: "register.component.html"
})

export class RegisterComponent {

    public user: User = new User();
    public confirmPassowrd: string;
    public message: string;

    constructor(private router: Router,
        private auth: AuthService) { }

    register(form: NgForm) {
        if (form.valid) {
            // Checks if the passwords match.
            if(this.user.password == this.confirmPassowrd){
                this.auth.registerUser(this.user)
                .subscribe(response => {
                    console.log(response);
                    if (response.success) {
                        alert(response.message);
                        this.router.navigateByUrl("/index/register");
                    }
                    // Error message from the API.
                    this.message = response.message; 
                });
            } else {
                this.message = "Passwords do not match";    
            }
        } else {
            this.message = "Form Data Invalid";
        }
    }
}