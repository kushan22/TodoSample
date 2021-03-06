import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export class HelloWorldBean{
  constructor(public message:String){

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService(){
    console.log("Execute Hello World Bean Service");
    return this.http.get<HelloWorldBean>("http://localhost:8090/helloWorldBean");
  }

  executeHelloWorldBeanServiceWithPathVar(name){
    console.log("Execute Hello World Bean Service");

   
    return this.http.get<HelloWorldBean>(`http://localhost:8090/helloWorldBean/pathVariable/${name}`);
  }

}
