import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllIssuesComponent } from './all-issues/all-issues.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';

const routes: Routes = [
 
  {
    path:'login',component:LoginComponent
  },
  {
  path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'register',component:RegistrationComponent
  },
  {
    path:'admin',component:AdminComponent
  },
  {
    path:'board',component:MainViewComponent
  },
  {
    path:'create-issue',component:CreateIssueComponent
  }
  ,{path: 'issue-details/:id', component:AllIssuesComponent},
  {
    path:'update-dialog/:id',component:UpdateDialogComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
