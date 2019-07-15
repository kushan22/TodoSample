import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "Kushan Singh";
  password: string = "singh";

  errorMessage = "Invalid Credentials";
  invalidLogin = false;
  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    
  }

  handleLogin(){
    if (this.authenticationService.authenticate(this.username,this.password)){
      //Redirect to Welcome Page
      this.invalidLogin = false;
      this.router.navigate(['welcome',this.username])
    }else{
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin(){
    this.authenticationService.executeAuth(this.username,this.password).subscribe(
      data => {
        console.log(data);
        this.invalidLogin = false;
        this.router.navigate(['welcome',this.username])
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    )
    
    } 

}
