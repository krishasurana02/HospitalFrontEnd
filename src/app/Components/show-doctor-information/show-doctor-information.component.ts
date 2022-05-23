import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/Models/doctor';
import { DoctorService } from 'src/app/Services/doctor.service';

@Component({
  selector: 'app-show-doctor-information',
  templateUrl: './show-doctor-information.component.html',
  styleUrls: ['./show-doctor-information.component.css']
})
export class ShowDoctorInformationComponent implements OnInit {

  doctors!: Doctor[];
  selectedDoctor!: Doctor;

  constructor(
    private doctorServices: DoctorService
  ) { }


  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors() {
    this.doctorServices.getDoctorList().subscribe(data => {
      this.doctors = data;
      // console.log(this.doctors);
    });
  }


}
