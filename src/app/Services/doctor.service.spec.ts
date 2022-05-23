import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';

import { DoctorService } from './doctor.service';
let dummyDoctorListResponse:
  [
    {
      id: 1,
      name: "Dr. Ram Chand Roy",
      age: 50,
      gender: "Male",
      specialist: "Cardio",
      noOfPatients: 2
    },
    {
      id: 2,
      name: "Dr. Radha Sharma",
      age: 40,
      gender: "Female",
      specialist: "Skin",
      noOfPatients: 1
    }
  ]


const dummyDoctorDetails = {
  data: {
    id: 1,
    name: 'Dr. Ram Chand Roy',
    age: 50,
    gender: 'Male',
    specialist: 'Cardio',
    noOfPatients: 2
  },
};

describe('DoctorService', () => {
  let service: DoctorService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DoctorService],
    });
    service = TestBed.inject(DoctorService);

    injector = getTestBed();
    service = injector.get(DoctorService);
    httpMock = injector.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getDoctorList() should return data', () => {
    service.getDoctorList().subscribe((doc) => {
      //Assert-1
      expect(doc).toEqual(dummyDoctorListResponse);

    });
    //Assert -2
    const req = httpMock.expectOne('http://localhost:8080/doctors');
    //Assert -3
    httpMock.verify();
  });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
