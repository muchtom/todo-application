import { Component, OnInit } from '@angular/core';

import { Issue } from '../issue';
import { RegistrationService } from '../registration.service';

// import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.css']
})
export class CreateIssueComponent implements OnInit {

   issue:Issue = new Issue();

   constructor( private service:RegistrationService){}
   ngOnInit() {
    
   }

   saveIssue(){
     this.service.createIssue(this.issue).subscribe(data =>{
       console.log(data);
     },
     error=>console.log(error));
     console.log(this.issue.issueName)
   }

   onSubmit(){
     this.saveIssue();
   }
   

}

