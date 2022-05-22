import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from 'src/app/services/student-service';
import { IStudentModelResponse } from '../../models/response/student-model-response';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentComponent } from '../add-student/add-student.component';

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

  constructor(private studentService: StudentService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.studentService.getAllStudents().subscribe((response: IStudentModelResponse[]) => {
      this.dataSource.data = response;
    });
  }

  openDialogAddStudent() {
    const dialogRef = this.dialog.open(AddStudentComponent, {
      width: '500px',
      //data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.getAllStudents();
      }
    });
  }
  
}
