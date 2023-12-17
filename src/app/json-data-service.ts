/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MockDataService, fatura } from './mock-data.service';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {
  private mockDataService: MockDataService;

  constructor(private http: HttpClient, mockDataService: MockDataService) {
    this.mockDataService = mockDataService;
  }

  getJsonData(): Observable<fatura> {
    // Convert the result of createDb to an Observable
    const jsonData = of(this.mockDataService.createDb() as fatura);
    return jsonData;
  }
}*/
