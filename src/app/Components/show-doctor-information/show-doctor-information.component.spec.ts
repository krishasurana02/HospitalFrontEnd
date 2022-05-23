import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ShowDoctorInformationComponent } from './show-doctor-information.component';
import { DoctorService } from 'src/app/Services/doctor.service';
import { doctor } from '../../Models/doctor'
import { of } from 'rxjs';

describe('ShowDoctorInformationComponent', () => {
  let component: ShowDoctorInformationComponent;
  let fixture: ComponentFixture<ShowDoctorInformationComponent>;
  let getDoctorListSpy: any;
  beforeEach(async () => {

    const doctorService = jasmine.createSpyObj('DoctorService', ['getDoctorList']);
    getDoctorListSpy = doctorService.getDoctorList.and.returnValue(of([doctor]));

    await TestBed.configureTestingModule({
      declarations: [ShowDoctorInformationComponent],
      imports: [HttpClientTestingModule],
      providers: [DoctorService]
    })

      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDoctorInformationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("ngOnInit", function () {

    it("Should calls the getDoctors() function", () => {
      fixture = TestBed.createComponent(ShowDoctorInformationComponent);
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

  });
});
