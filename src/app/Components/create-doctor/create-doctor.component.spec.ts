import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreateDoctorComponent } from './create-doctor.component';
import { DoctorService } from 'src/app/Services/doctor.service';
import { DebugElement } from '@angular/core';
import { Doctor, doctor } from '../../Models/doctor'
import { of } from 'rxjs';

describe('CreateDoctorComponent', () => {
  let component: CreateDoctorComponent;
  let fixture: ComponentFixture<CreateDoctorComponent>;
  let doctorService: DoctorService;
  // let debugElement: DebugElement;
  let doctorSpy: any;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateDoctorComponent],
      imports: [HttpClientTestingModule],
      providers: [DoctorService]
    })

      .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // doctorService = debugElement.injector.get(DoctorService);
  });
  // it("calls the SaveDoctor() function", () => {
  //   fixture = TestBed.createComponent(CreateDoctorComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();

  //   /* Maybe this line unnecessary, cant try it atm */
  //   let service = fixture.debugElement.injector.get(DoctorService);
  //   spyOn(service, "createDoctor").and.callFake(() => {
  //     return of({
  //       "id": 1,
  //       "name": "xyz",
  //       "age": 47,
  //       "gender": "Male",
  //       "specialist": "Brain",
  //       "noOfPatients": 0
  //     });

  //   })
  //   component.saveDoctor();
  //   expect(Object.assign({}, component.doctor)).toEqual(Object.assign({}, {
  //     "id": 1,
  //     "name": "xyz",
  //     "age": 47,
  //     "gender": "Male",
  //     "specialist": "Brain",
  //     "noOfPatients": 0
  //   }))
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("calls the SaveDoctor() function", () => {
    fixture = TestBed.createComponent(CreateDoctorComponent);
    component = fixture.componentInstance;
    let service = fixture.debugElement.injector.get(DoctorService);
    spyOn(service, "createDoctor").and.callFake(() => {
      return of({
        "id": 1,
        "name": "xyz",
        "age": 47,
        "gender": "Male",
        "specialist": "Brain",
        "noOfPatients": 0
      });

    })
    component.saveDoctor();
    expect(component.testing).toEqual({
      "id": 1,
      "name": "xyz",
      "age": 47,
      "gender": "Male",
      "specialist": "Brain",
      "noOfPatients": 0
    })
  })

  describe("onSubmit", () => {
    it('should save new doctor', () => {
      component.onSubmit();
      expect(component.doctor.noOfPatients).toEqual(0);
    })
  })

});