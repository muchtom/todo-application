import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Issue } from '../issue';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-all-issues',
  templateUrl: './all-issues.component.html',
  styleUrls: ['./all-issues.component.css']
})
export class AllIssuesComponent implements OnInit{

  constructor(private service: RegistrationService, private route: ActivatedRoute,
     private  router : Router){ }

    id!: number;
    issue! :Issue;
    AllUsers!: any;
    assigneeId!:any;
    userdetails!:any;

  ngOnInit(): void {
  
  
    this.id= this.route.snapshot.params['id'];
    this.issue= new Issue();
   
    this.service.getAllUsersFromServer().subscribe(
      (data)=>{
       this.AllUsers= data.content
       console.log(this.AllUsers);
       this.service.getIssueById(this.id).subscribe(data=>{
        this.issue= data
        console.log(data.assigneeId);
        const res =this.AllUsers.find((el:any)=>el.id===data.assigneeId)
        console.log(res);
        this.userdetails=res
  
      })
      });
    
  }

goToBoard(){
  this.router.navigate(['/board'])
}


getAllUsers(){
  this.service.getAllUsersFromServer().subscribe(
    (data)=>{
     this.AllUsers= data.content
     console.log(this.AllUsers);
     
    });
    
     
    }

}
