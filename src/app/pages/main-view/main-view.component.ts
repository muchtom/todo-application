import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Issue } from 'src/app/issue';
import { RegistrationService } from 'src/app/registration.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from 'src/app/update-dialog/update-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  issues!:Issue[];
  allIssues!: any;
  allIssuesInProgress!: any
  allissuesDone!: any;
  page!: number;
  id!: any;
  AllUsers!: any;
  issue! :Issue;

  constructor(private service:RegistrationService, private notification: NzNotificationService,
    private _http: HttpClient,
    private router:Router,
    private dialog: MatDialog){}

  ngOnInit(){
     this.load();
     this.getAlltasksProgress(); 
     this.getAlltasksDone();
     this.getAllUsers();
  }

 
  load(event?: any) {
    this.service.getPaginated({page: this.page -1, size: 10}).subscribe(res => {
        this.allIssues = res.content;
    })
  }

// deleteTask(id: number){
//   this._http.delete(`http://192.168.10.45:8083/v1/tasks/delete/${id}`).subscribe(re=>{
//     },message=>{
//       this.notification.success("removed successfully","")
//     }),(_err: any)=>{
//       this.notification.error("error while deleting","")
//     }
//   }

  getAlltasksProgress(){
    this.service.getPaginatedInProgress({page: this.page -1, size: 10}).subscribe(res => {
      this.allIssuesInProgress = res.content;
  })
  }

  getAlltasksDone(){
    this.service.getPaginatedDone({page: this.page -1, size: 10}).subscribe(res => {
      this.allissuesDone = res.content;
  })
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  goToupdateIssue(id:number){
    this.dialog.open
    this.router.navigate(['update-dialog',id]);
  }

  deleteIssue(id:number){
    this.service.deleteIssueById(id).subscribe(data =>{
      console.log(data);
      this.router.navigate(['/create-issue']);

    })

  }
  goToIssueDetails(id: number){
 this.router.navigate(['/issue-details',id])
  }


  getAllUsers(){
    this.service.getAllUsersFromServer().subscribe(
      (data)=>{
       this.AllUsers= data
      });
      
       
      }
}
