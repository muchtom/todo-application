import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(private service:RegistrationService, private _router:Router){}
  ngOnInit() {
      
  }

  loginUser(){
    this.service.loginUserFromServer(this.user).subscribe(data =>{
      console.log("response received");
     this._router.navigate(['/admin']);
     console.log(data);
    },
  error => {
    console.log("Exception occured");
    this.msg="Bad credentials, please  enter valid emailId and password";

  }
    )
    
  }

}
