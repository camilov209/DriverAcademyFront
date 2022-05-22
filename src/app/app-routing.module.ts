import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { InscriptionStudentComponent } from './components/inscription-student/inscription-student.component';
import { StudentsListComponent } from './components/students-list/students-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list-students'},
  {path: 'add-student', component: AddStudentComponent},
  {path: 'list-students', component: StudentsListComponent},
  {path: 'inscription-student', component: InscriptionStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
