import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CreatePatientComponent } from './create-patient.component';
import { PatientService } from 'src/app/Services/patient.service';
import { of } from 'rxjs';
import { DoctorService } from 'src/app/Services/doctor.service';

describe('CreatePatientComponent', () => {
  let component: CreatePatientComponent;
  let fixture: ComponentFixture<CreatePatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePatientComponent],
      imports: [HttpClientTestingModule],
      providers: [PatientService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("ngOnInit", () => {
    it("Should calls the getDoctors() function", () => {
      fixture = TestBed.createComponent(CreatePatientComponent);
      component = fixture.componentInstance;
      /* Maybe this line unnecessary, cant try it atm */
      let service = fixture.debugElement.injector.get(DoctorService);
      spyOn(service, "getDoctorList").and.callFake(() => {
        return of(
          [
            {
              "id": 1,
              "name": "xyz",
              "age": 47,
              "gender": "Male",
              "specialist": "Brain",
              "noOfPatients": 0
            },
            {
              "id": 1,
              "name": "xyz",
              "age": 47,
              "gender": "Male",
              "specialist": "Brain",
              "noOfPatients": 0
            }
          ]
        );
      })
      component.getDoctors();
      expect(component.doctors).toEqual(
        [
          {
            "id": 1,
            "name": "xyz",
            "age": 47,
            "gender": "Male",
            "specialist": "Brain",
            "noOfPatients": 0
          },
          {
            "id": 1,
            "name": "xyz",
            "age": 47,
            "gender": "Male",
            "specialist": "Brain",
            "noOfPatients": 0
          }
        ]
      )
    });
  })


  it("calls the SaveDoctor() function", () => {
    fixture = TestBed.createComponent(CreatePatientComponent);
    component = fixture.componentInstance;
    let service = fixture.debugElement.injector.get(PatientService);
    spyOn(service, "createPatient").and.callFake(() => {
      return of({
        "id": 1,
        "name": "xyz",
        "visitedDoctor": "abc",
        "date_Of_Visit": "123"
      });

    })
    component.savePatient();
    expect(component.testing).toEqual({
      "id": 1,
      "name": "xyz",
      "visitedDoctor": "abc",
      "date_Of_Visit": "123"
    })
  })
});
