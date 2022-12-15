import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Issue } from '../issue';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.css']
})
export class CreateIssueComponent implements OnInit {

   issue:Issue = new Issue();
  AllUsers!: any;
  ngForm !: FormGroup;


   constructor( private service:RegistrationService, private  notification : NzNotificationService, private router: Router){}
   ngOnInit() {
    this.getAllUsers();

   }

   onChanges(){}

   submit(){
     this.service.createIssue(this.issue).subscribe(res=>{
      this.notification.success("Issue ","created successfully");
      this.router.navigate(['/create-issue']);
     }, err=>{
      this.notification.error("error occured","when creating an issue")
     })
   }

   getAllUsers(){
    this.service.getAllUsersFromServer().subscribe(
      (data)=>{
       this.AllUsers= data
      });
      
       
      }
    
  }
  
 