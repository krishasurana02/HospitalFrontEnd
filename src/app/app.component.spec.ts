import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Location } from '@angular/common';
import { CreateDoctorComponent } from './Components/create-doctor/create-doctor.component';
import { CreatePatientComponent } from './Components/create-patient/create-patient.component';
import { ShowDoctorInformationComponent } from './Components/show-doctor-information/show-doctor-information.component';
import { ShowPatientInformationComponent } from './Components/show-patient-information/show-patient-information.component';
import { Router, RouterLinkWithHref, ActivatedRoute, convertToParamMap } from '@angular/router';
import { routes } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { DoctorService } from './Services/doctor.service';
import { PatientService } from './Services/patient.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

const routerSpy = { navigate: jasmine.createSpy('navigate') };
// let location: Location;
// let router: Router;
// let doctorService: DoctorService;
// let patientService: PatientService;
// let component: AppComponent;
// let fixture: ComponentFixture<AppComponent>;
// let router: Router;
// let debugElement: DebugElement;

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        FormsModule
      ],
      declarations: [
        AppComponent,
        // CreateDoctorComponent,
        // CreatePatientComponent,
        // ShowDoctorInformationComponent,
        // ShowPatientInformationComponent
      ],
      providers: [
        { provide: Router, useValue: routerSpy },
      ]
    }).compileComponents();
  });

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AppComponent);
  //   component = fixture.debugElement.componentInstance;
  //   // fixture = TestBed.createComponent(CreateDoctorComponent);

  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  //   

  // it('should test redirection to create doctor (async)', async(() => {
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     expect(location.path()).toBe('/doctor');
  //   });
  // }));


});
