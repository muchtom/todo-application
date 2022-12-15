import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {

  user =new User();
  msg = "";
  
  constructor(private service:RegistrationService, private _router:Router,
    private notification: NzNotificationService){}
  ngOnInit() {
      
  }

  loginUser(){
    this.service.loginUserFromServer(this.user).subscribe(data =>{
      this.notification.success("login" ,"Succescfully")
     this._router.navigate(['/board']);
     console.log(data);
    },
  error => {
    this.notification.error("Bad credentials","please  enter valid username and password")
    

  }
    )
    
  }

}
