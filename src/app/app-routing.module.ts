import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDoctorComponent } from './Components/create-doctor/create-doctor.component';
import { CreatePatientComponent } from './Components/create-patient/create-patient.component';
import { ShowDoctorInformationComponent } from './Components/show-doctor-information/show-doctor-information.component';
import { ShowPatientInformationComponent } from './Components/show-patient-information/show-patient-information.component';

export const routes: Routes = [
  { path: 'doctor', component: CreateDoctorComponent },
  { path: 'patient', component: CreatePatientComponent },
  { path: 'showdoctor', component: ShowDoctorInformationComponent },
  { path: 'showpatient', component: ShowPatientInformationComponent },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
