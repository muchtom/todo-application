import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AllIssuesComponent } from './all-issues/all-issues.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { de_DE } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import de from '@angular/common/locales/de';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

registerLocaleData(de);

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    LoginComponent,
    RegistrationComponent,
    AdminComponent,
    CreateIssueComponent,
    AllIssuesComponent,
    UpdateDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
   MatIconModule,
   MatButtonModule,
   MatSelectModule,
   MatFormFieldModule,
   ReactiveFormsModule,
   MatInputModule,
  MatPaginatorModule,
  MatTableModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  NzNotificationModule,
  NzMessageModule,
  MatDialogModule

  ],
  providers: [
    { provide: NZ_I18N, useValue: de_DE }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
