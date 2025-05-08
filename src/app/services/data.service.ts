import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaksi } from './Transaksi';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8080/api/transaksi'; // contoh webservice

  constructor(private http: HttpClient) {}

  getData(): Observable<Transaksi[]> {
    return this.http.get<Transaksi[]>(this.apiUrl);
  }

  downloadPDF(pengumuman): Observable<Blob> {
    return this.http.get('http://localhost:8080/api/transaksi/generatePdf/'+pengumuman, {
      responseType: 'blob'
    });
  }
}