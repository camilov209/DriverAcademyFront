import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILicenseModelRequest } from 'src/app/models/request/license-model-request';
import { IStudentModelRequest } from 'src/app/models/request/student-model-request';
import { ILicenseModelResponse } from 'src/app/models/response/license-model-response';
import { LicenseService } from 'src/app/services/licenses-service';
import { StudentService } from 'src/app/services/student-service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  licenses: ILicenseModelResponse[] = [];
  formGroupStudent: FormGroup;
  statusCloseDialog: boolean = false;

  constructor(private licenseService: LicenseService, private studentService: StudentService,
    private snackBar: MatSnackBar) {
    this.formGroupStudent = new FormGroup({
      studentName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(60), Validators.pattern(/^[-a-zA-Z\u00C0-\u017F]+(\s+[-a-z\u00C0-\u017F\+A-Z]+)*$/)]),
      studentIdentification: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(12), Validators.pattern("^[0-9]*$")]),
      studentAge: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(3), Validators.pattern("^[0-9]*$")]),
      studentLicense: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
    this.getAllLicenses();
  }

  getAllLicenses() {
    this.licenseService.getAllLicenses().subscribe((response: ILicenseModelResponse[]) => {
      this.licenses = response;
    });
  }

  saveStudent() {
    const license: ILicenseModelRequest = {
      licenseId: this.formGroupStudent.value.studentLicense
    }
    const student: IStudentModelRequest = {
      studentName: this.formGroupStudent.value.studentName.toUpperCase(),
      studentIdentification: this.formGroupStudent.value.studentIdentification,
      studentAge: this.formGroupStudent.value.studentAge,
      license: license
    }
    
    this.studentService.saveStudent(student).subscribe({
      complete: () => { this.statusCloseDialog = true; },
      error: (error) => {
        this.statusCloseDialog = false;
        this.snackBar.open(error.error.message, '', {
          duration: 3000,
          panelClass: ['blue-snackbar']
        });
      } 
    });
  }

}
