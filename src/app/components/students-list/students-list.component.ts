import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from 'src/app/services/student-service';
import { IStudentModelResponse } from '../../models/response/student-model-response';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentComponent } from '../add-student/add-student.component';
import { AlertActionHelper } from 'src/app/helpers/alert-action-helper';
import { InscriptionStudentComponent } from '../inscription-student/inscription-student.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  displayedColumns: string[] = ['studentId', 'studentName', 'studentIdentification', 'studentAge', 'license'];
  dataSource = new MatTableDataSource<IStudentModelResponse>();
  isEmptyData: boolean = true;
  isLoadingData: boolean = true;

  constructor(private studentService: StudentService, private dialog: MatDialog,
    private alertActionHelper: AlertActionHelper) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.studentService.getAllStudents().subscribe({
      next: (response: IStudentModelResponse[]) => {
        this.isLoadingData = false;
        this.dataSource.data = response;
      },
      complete: () => { 
        this.isEmptyData = this.dataSource.data.length > 0 ? false : true;
      },
      error: (error) => { 
        this.isLoadingData = false;
        this.isEmptyData = true;
        this.alertActionHelper.showAlertHelper(error.error.message, true);
       }
    });
  }

  openDialogAddStudent() {
    const dialogRef = this.dialog.open(AddStudentComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.getAllStudents();
      }
    });
  }

  openDialogInscriptionCourses(studentId: number) {
    const dialogRef = this.dialog.open(InscriptionStudentComponent, {
      width: '800px',
      height: '90%',
      autoFocus: false,
      data: { idStudent: studentId }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.getAllStudents();
      }
    });
  }
  
}
