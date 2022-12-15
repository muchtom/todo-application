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
  page!: number;
  id!: any;

  constructor(private service:RegistrationService, private notification: NzNotificationService,
    private _http: HttpClient,
    private router:Router,
    private dialog: MatDialog){}

  ngOnInit(){
     this.load(); 
  }

 
  load(event?: any) {
    this.service.getPaginated({page: this.page -1, size: 10}).subscribe(res => {
        this.allIssues = res.content;
        console.log(this.allIssues)
    })
  }

deleteTask(id: number){
  this._http.delete(`http://192.168.10.45:8083/v1/tasks/delete/${id}`).subscribe(re=>{
    },message=>{
      this.notification.success("removed successfully","")
    }),(_err: any)=>{
      this.notification.error("error while deleting","")
    }
  }

  updateTodo(id: number){
    this.dialog.open(UpdateDialogComponent,),{
      width: '50%'
    }
  }

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  inprogress=['writing code']

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail'];

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

}
