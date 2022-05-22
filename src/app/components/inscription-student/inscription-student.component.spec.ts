import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionStudentComponent } from './inscription-student.component';

describe('InscriptionStudentComponent', () => {
  let component: InscriptionStudentComponent;
  let fixture: ComponentFixture<InscriptionStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
