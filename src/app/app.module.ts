import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDoctorComponent } from './Components/create-doctor/create-doctor.component';
import { CreatePatientComponent } from './Components/create-patient/create-patient.component';
import { ShowDoctorInformationComponent } from './Components/show-doctor-information/show-doctor-information.component';
import { ShowPatientInformationComponent } from './Components/show-patient-information/show-patient-information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CreateDoctorComponent,
    CreatePatientComponent,
    ShowDoctorInformationComponent,
    ShowPatientInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
