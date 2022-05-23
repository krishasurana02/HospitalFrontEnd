import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ShowPatientInformationComponent } from './show-patient-information.component';
import { PatientService } from 'src/app/Services/patient.service';
import { of } from 'rxjs';

describe('ShowPatientInformationComponent', () => {
  let component: ShowPatientInformationComponent;
  let fixture: ComponentFixture<ShowPatientInformationComponent>;
  let patientService = PatientService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowPatientInformationComponent],
      imports: [HttpClientTestingModule],
      providers: [PatientService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPatientInformationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe("onSubmit", function () {

    it("sholud calls the getPatients() function", () => {
      fixture = TestBed.createComponent(ShowPatientInformationComponent);
      component = fixture.componentInstance;
      /* Maybe this line unnecessary, cant try it atm */
      let service = fixture.debugElement.injector.get(PatientService);
      spyOn(service, "getPatientById").and.callFake(() => {
        return of({
          "id": 1,
          "name": "xyz",
          "visitedDoctor": "abc",
          "date_Of_Visit": "123"
        });

      })
      component.getPatient();
      expect(component.patient).toEqual({
        "id": 1,
        "name": "xyz",
        "visitedDoctor": "abc",
        "date_Of_Visit": "123"

      })
    });

  });

});
