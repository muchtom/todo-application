import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { NgForm } from '@angular/forms';
import { RegistrationService } from 'src/app/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user =new User();
  msg='';

  constructor(private _service:RegistrationService, private _router:Router){}

  ngOnInit() {
      
  }

  registerUser(){
    this._service.registerUserFromServer(this.user).subscribe(
      data => {
        console.log(data);   
      },
      error =>{
        console.log("User Already exists");
        this.msg="This user already exists !!!";
      }
    )
  }

  // loginUser(){
  //   this.service.loginUserFromServer(this.user).subscribe(data =>{
  //     console.log("response received");
  //    this._router.navigate(['/admin']);
  //    console.log(data);
  //   },
  // error => {
  //   console.log("Exception occured");
  //   this.msg="Bad credentials, please  enter valid emailId and password";

  // }
  //   )
    
  // }

}
