import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/Models/doctor';
import { DoctorService } from 'src/app/Services/doctor.service';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {
  doctor: Doctor = new Doctor();
  testing: any;


  constructor(private doctorServices: DoctorService) { }

  ngOnInit(): void {
  }

  saveDoctor() {
    this.doctorServices.createDoctor(this.doctor).subscribe(data => {
      //console.log(data);
      this.testing = data;
    },
      error => alert("error"));
  }
  onSubmit() {
    this.doctor.noOfPatients = 0;
    this.saveDoctor();
  }

}
