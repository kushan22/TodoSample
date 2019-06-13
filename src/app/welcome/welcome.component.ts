import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = "Welcome";
  welcomeMessage: string;
  name = "Shriya Kakkar";
  constructor(private route:ActivatedRoute,private welcomeDataService:WelcomeDataService) { }

  ngOnInit() {

    this.message = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfullResponse(response),
      error => this.handleErrorResponse(error)
    );

    console.log("Last Line");
  }

  getWelcomeMessageWithParameter(){
    this.welcomeDataService.executeHelloWorldBeanServiceWithPathVar(this.name).subscribe(
      response => this.handleSuccessfullResponse(response),
      error => this.handleErrorResponse(error)
    );

    console.log("Last Line");
  }

  handleSuccessfullResponse(response){
    console.log(response.message);
    this.welcomeMessage = response.message;
  }

  handleErrorResponse(error){
    this.welcomeMessage = error.error.message
  }

}
