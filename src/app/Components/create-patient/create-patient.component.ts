import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/Models/doctor';
import { Patient } from 'src/app/Models/patient';
import { DoctorService } from 'src/app/Services/doctor.service';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  patient: Patient = new Patient();
  testing: any;
  doctors!: Doctor[];

  constructor(
    private doctorServices: DoctorService,
    private patientServices: PatientService) { }

  ngOnInit(): void {
    this.getDoctors();
  }


  getDoctors() {
    this.doctorServices.getDoctorList().subscribe(data => {
      this.doctors = data;
    });
  }

  savePatient() {
    this.patientServices.createPatient(this.patient).subscribe(data => {
      // console.log(data);
      this.testing = data

    },
      error => alert(error));
  }

  onSubmit() {

    //console.log(this.patient);
    this.savePatient();
  }
}
