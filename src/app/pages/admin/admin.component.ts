import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/registration.service';
import {AfterViewInit,  ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { User } from 'src/app/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  allUsers!: any;
  datasource= new MatTableDataSource<any>(this.allUsers);
  displayedColumns: string[] = ['lastname', 'firstname', 'username', 'email'];

  @ViewChild(MatPaginator,{static:true}) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _service: RegistrationService){

  }
  ngOnInit(): void {
    this.getAllUsers();
  }

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();
  
    if (this.datasource.paginator) {
      this.datasource.paginator.firstPage();
    }
  }

  getAllUsers(){
    this._service.getAllUsersFromServer().subscribe(
      (data)=>{
        return this.datasource = new MatTableDataSource(data);
         this.datasource.paginator= this.paginator
      }
    )
  }

}
