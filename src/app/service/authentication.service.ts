import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }



  executeAuth(username,password){
    let basicAuthHeaderString = "Basic " + window.btoa(username + ":" + password);
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<AuthenticationBean>("http://localhost:8090/basicauth",{headers}).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser',username);
          return data;
        }
      )
    );
  }

  authenticate(username,password){
    if (username === "Kushan Singh" && password==="singh"){
      
      
      return true;
      
    }else{
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}

export class AuthenticationBean {
  constructor(public message:string){

  }
}
