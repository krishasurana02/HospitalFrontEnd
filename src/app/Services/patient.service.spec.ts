import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';

import { PatientService } from './patient.service';


let dummyPatientListResponse:
  [
    {
      id: 1,
      name: "Krisha",
      visitedDoctor: "Dr. Ram Chand Roy",
      date_Of_Visit: "2022-05-19"
    },
    {
      id: 2,
      name: "Daksh",
      visitedDoctor: "Dr. Radha Sharma",
      date_Of_Visit: "2022-04-12"
    },
    {
      id: 4,
      name: "Tina ",
      visitedDoctor: "Dr. Ram Chand Roy",
      date_Of_Visit: "2022-05-02"
    }
  ]

const dummyPatientDetails = {
  id: 1,
  name: 'Krisha',
  visitedDoctor: 'Dr. Ram Chand Roy',
  date_Of_Visit: '2022-05-19'

};



describe('PatientService', () => {
  let service: PatientService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let patientService = PatientService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PatientService],
    });
    service = TestBed.inject(PatientService);
    injector = getTestBed();
    service = injector.get(PatientService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getPatientList() should return data', () => {
    service.getPatientList().subscribe((pat) => {
      //Assert-1
      expect(pat).toEqual(dummyPatientListResponse);

    });
    //Assert -2
    const req = httpMock.expectOne('http://localhost:8080/patients');
    //Assert -3
    httpMock.verify();
  });

  it('getPatientById() should return data', () => {
    service.getPatientById(1).subscribe((pat) => {
      //Assert-1
      expect(pat).toEqual(dummyPatientDetails);

    });
    //Assert -2
    const req = httpMock.expectOne('http://localhost:8080/patients/1');
    //Assert -3
    httpMock.verify();
  });



});
