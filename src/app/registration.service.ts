import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Issue } from './issue';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) { }

  loginUserFromServer(user :User):Observable<any>{

    return this._http.post<any>("http://localhost:8080/login",user);

  }

  registerUserFromServer(user :User):Observable<any>{
    
    return this._http.post<any>("http://localhost:8080/registerUser",user);
  }

  createIssue(issue: Issue):Observable<any>{
     return this._http.post<any>("http://localhost:8080/issues",issue);
  }
  getAllIssues():Observable<Issue[]>{
     return this._http.get<Issue[]>("http://localhost:8080/getAll");
  }
}
