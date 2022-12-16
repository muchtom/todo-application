import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, empty, Observable } from 'rxjs';
import { Issue } from './issue';
import { PAGEPARAMS, PageRequest } from './pagination/page-request';
import { PageResult } from './pagination/page-results';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) { }

  public getFromUrl(url: string): Observable<any> {
    return this._http.get("http://192.168.10.45:8083/v1/tasks/todo?page=0&size=1&sort=string")
      .pipe(catchError(() => empty()));
  }

  public getFromUrlProgress(url: string): Observable<any> {
    return this._http.get("http://192.168.10.45:8083/v1/tasks/inprogress?page=0&size=1&sort=string")
      .pipe(catchError(() => empty()));
  }

  public getFromUrlDone(url: string): Observable<any> {
    return this._http.get("http://192.168.10.45:8083/v1/tasks/done?page=0&size=1&sort=string")
      .pipe(catchError(() => empty()));
  }


  loginUserFromServer(user :User):Observable<User>{

    return this._http.post<User>("http://192.168.10.45:8084/api/auth/signin",user);

  }

  registerUserFromServer(user :User):Observable<User>{
    
    return this._http.post<User>("http://192.168.10.45:8084/api/auth/signup",user);
  }

  getAllUsersFromServer():Observable<any>{
    return this._http.get<any>("http://192.168.10.45:8084/api/auth/allusers/0/100")
  }

  createIssue(issue: Issue):Observable<any>{
     return this._http.post<any>("http://192.168.10.45:8083/v1/tasks/create",issue);
  }
  updateIssue(issue: Issue, id:number):Observable<Object>{
    return this._http.put<any>(`http://192.168.10.45:8083/v1/tasks/update/${id}`, issue)
  }




  public getPaginated(request?: PageRequest, url?: string): Observable<PageResult<any>> {
    if (!url) url = '';
    url += `${PAGEPARAMS(request)}`;
    return this.getFromUrl(url);
  }

  public getPaginatedInProgress(request?: PageRequest, url?: string): Observable<PageResult<any>> {
    if (!url) url = '';
    url += `${PAGEPARAMS(request)}`;
    return this.getFromUrlProgress(url);
  }
  public getPaginatedDone(request?: PageRequest, url?: string): Observable<PageResult<any>> {
    if (!url) url = '';
    url += `${PAGEPARAMS(request)}`;
    return this.getFromUrlDone(url);
  }

  getIssueById(id:number):Observable<Issue>{
    return this._http.get<Issue>(`http://192.168.10.45:8083/v1/tasks/task/${id}`);

  }

  deleteIssueById(id:number):Observable<Object>{

    return this._http.delete(`http://192.168.10.45:8083/v1/tasks/delete/${id}`);

  }
}
