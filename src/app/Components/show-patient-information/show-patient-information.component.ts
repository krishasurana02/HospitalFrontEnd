import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/Models/patient';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-show-patient-information',
  templateUrl: './show-patient-information.component.html',
  styleUrls: ['./show-patient-information.component.css']
})
export class ShowPatientInformationComponent implements OnInit {

  patients!: Patient[];
  patient!: Patient;
  selectedPatient!: number;
  constructor(
    private patientService: PatientService,
  ) { }

  ngOnInit(): void {


  }

  getPatient() {
    this.patientService.getPatientById(this.selectedPatient).subscribe(data => {
      this.patient = data;
      //console.log(this.patient);
    },
      error => alert("Patient Not Found")

    );
  }



  onSubmit() {

    //console.log(this.selectedPatient);
    this.getPatient();

  }
}
