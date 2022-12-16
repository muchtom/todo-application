import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Issue } from '../issue';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent  implements OnInit{
  todoUpdateForm !: FormGroup;
  allStatuses!: any;
  AllUsers!: any;
 id!:number;
  issue:Issue = new Issue();

  constructor(private service: RegistrationService, private _http: HttpClient, 
    private route:ActivatedRoute,
    private formBuilder: FormBuilder,
    private notification : NzNotificationService,
    private router : Router ){

  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.service.getIssueById(this.id).subscribe(data =>{
      this.issue = data;
      console.log(data)
    })
   this.getAllstatuses();
   this.getAllUsers();

   this.todoUpdateForm= this.formBuilder.group({
    status: ['', Validators.required],
    description:['', Validators.required],
    assigneeId: ['',Validators.required]
   })
  }
 
  submit(){
    this.service.updateIssue(this.issue, this.id).subscribe(data =>{
      console.log(data);
      this.router.navigate(['/board']);
    })
  }


  getAllstatuses(){
this._http.get("http://192.168.10.45:8083/v1/tasks/statuses").subscribe(res=>{
  this.allStatuses= res;
})
  }

  
  getAllUsers(){
    this.service.getAllUsersFromServer().subscribe(
      (data)=>{
       this.AllUsers= data.content
      });
    
       
      }

}
