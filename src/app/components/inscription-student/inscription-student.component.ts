import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogStudentData } from 'src/app/models/dialog/dialog-student-data';
import { IStudentDetailModelResponse } from 'src/app/models/response/student-detail-model';
import { StudentService } from 'src/app/services/student-service';

@Component({
  selector: 'app-inscription-student',
  templateUrl: './inscription-student.component.html',
  styleUrls: ['./inscription-student.component.scss']
})
export class InscriptionStudentComponent implements OnInit {

  dataDialog: DialogStudentData;

  constructor(public dialogRef: MatDialogRef<InscriptionStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogStudentData, 
    private studentService: StudentService) { 
      this.dataDialog = data;
    }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.studentService.getDetailStudent(this.dataDialog.idStudent).subscribe({
      next: (response: IStudentDetailModelResponse[]) => {
        console.log(response);
      },
      complete: () => { 
        
      },
      error: (error) => { 
        console.log(error);
       }
    });
  }

}
