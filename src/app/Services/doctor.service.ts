import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Doctor } from '../Models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseURL = "http://localhost:8080/doctors";

  constructor(private httpClient: HttpClient) { }

  getDoctorList(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(`${this.baseURL}`);
  }

  createDoctor(doctor: Doctor): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, doctor);
  }
}
