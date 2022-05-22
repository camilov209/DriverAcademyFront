import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { InscriptionStudentComponent } from './components/inscription-student/inscription-student.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertActionHelper } from './helpers/alert-action-helper';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    InscriptionStudentComponent,
    StudentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatToolbarModule, 
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatExpansionModule,
    ReactiveFormsModule
  ],
  providers: [AlertActionHelper],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
