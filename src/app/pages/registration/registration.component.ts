import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { NgForm } from '@angular/forms';
import { RegistrationService } from 'src/app/registration.service';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user =new User();
  msg='';

  constructor(private _service:RegistrationService, private _router:Router,
    private notification: NzNotificationService){}

  ngOnInit() {
      
  }

  registerUser(){
    this._service.registerUserFromServer(this.user).subscribe(data =>{
    },
  message => {
    this.notification.success("Registered Successfully You can now log in", "")  
    this._router.navigate(['/login'])
  }), (error: any)=>{
    this.notification.error("error occured while registering","")
  }
    
    
  }


  

}
