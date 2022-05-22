import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogStudentData } from 'src/app/models/dialog/dialog-student-data';
import { IModuleInscriptionModelRequest } from 'src/app/models/request/module-inscription-model-request';
import { ICourseInscriptionModelRequest } from 'src/app/models/request/course-inscription-model-request';
import { IModuleModelResponse } from 'src/app/models/response/module-detail-model-response';
import { IModuleDetailResponse } from 'src/app/models/response/module-model-response';
import { IStudentDetailModelResponse } from 'src/app/models/response/student-detail-model';
import { IStudentModelResponse } from 'src/app/models/response/student-model-response';
import { ModuleService } from 'src/app/services/module-service';
import { StudentService } from 'src/app/services/student-service';
import { IStudentInscriptionModelRequest } from 'src/app/models/request/student-inscription-model-request';
import { IInscriptionModelRequest } from 'src/app/models/request/inscription-model-request';
import { InscriptionCourseService } from 'src/app/services/inscription-course-service';
import { AlertActionHelper } from 'src/app/helpers/alert-action-helper';
import { messages } from 'src/app/constants/messages-constant';

@Component({
  selector: 'app-inscription-student',
  templateUrl: './inscription-student.component.html',
  styleUrls: ['./inscription-student.component.scss']
})
export class InscriptionStudentComponent implements OnInit {

  panelOpenState = false;
  isEmptyInscriptions: boolean = false;
  dataSource = new MatTableDataSource<IStudentModelResponse>();
  modulesInscription: Array<IModuleDetailResponse> = new Array<IModuleDetailResponse>();
  modulesAllInscription: Array<IModuleModelResponse> = new Array<IModuleModelResponse>();
  modulesInscriptionRequest:IModuleInscriptionModelRequest[] = new Array<IModuleInscriptionModelRequest>();
  displayedColumns: string[] = ['studentId', 'studentName', 'studentIdentification', 'studentAge', 'license'];
  dataDialog: DialogStudentData;
  formInscription: FormGroup;

  constructor(public dialogRef: MatDialogRef<InscriptionStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogStudentData, 
    private studentService: StudentService,
    private moduleService: ModuleService,
    private inscriptionService: InscriptionCourseService,
    private alertActionHelper: AlertActionHelper) { 
      this.dataDialog = data;
      this.formInscription = new FormGroup({
        studentInscriptionCourse: new FormControl(''),
      })
    }

  ngOnInit(): void {
    this.getDetailStudentInscription();
    this.getAllModulesInscription();
  }

  getDetailStudentInscription() {
    let studentResponse: Array<IStudentModelResponse> = new Array<IStudentModelResponse>();
    this.studentService.getDetailStudent(this.dataDialog.idStudent).subscribe({
      next: (response: IStudentDetailModelResponse) => {
        this.modulesInscription = response.module;
        this.isEmptyInscriptions = this.modulesInscription.length > 0 ? false : true;
        studentResponse.push(response);
        this.dataSource.data = studentResponse;
      },
      error: (error) => { 
        console.log(error);
       }
    });
  }

  getAllModulesInscription() {
    this.moduleService.getAllModules().subscribe({
      next:(response: IModuleModelResponse[]) => {
        this.modulesAllInscription = response;
      },
      error: (error) => {
        this.alertActionHelper.showAlertHelper(error.error.message, true);  
      }
    })
  }

  selectCourseInscription(courseId: number, moduleId: number) {
    let inscriptionTemp:IModuleInscriptionModelRequest[] = new Array<IModuleInscriptionModelRequest>();
    let courseInscription: ICourseInscriptionModelRequest = {
      courseId: courseId
    };
    let moduleInscription: IModuleInscriptionModelRequest = {
      moduleId: moduleId,
      courses: courseInscription
    };

    if(courseId === 0) {
      this.modulesInscriptionRequest.splice(this.modulesInscriptionRequest
        .findIndex(m => m.moduleId == moduleId), 1);
    }else {
      this.modulesInscriptionRequest.push(moduleInscription);  
    }
  }

  saveInscriptionCourse() {
    let studentInscription: IStudentInscriptionModelRequest = {
      studentId: this.dataDialog.idStudent
    }
    let inscriptionRequest:IInscriptionModelRequest = {
      students: studentInscription,
      modules: this.modulesInscriptionRequest
    };
    this.inscriptionService.saveInscriptionModules(inscriptionRequest).subscribe({
      next: () => {
        this.alertActionHelper.showAlertHelper(messages.successful_inscription_save, false);
        this.dialogRef.close();
      },
      error: (error) => {
        this.alertActionHelper.showAlertHelper(error.error.message, true);
      }
    })
  }

}
