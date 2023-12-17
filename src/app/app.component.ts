import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
//import { JsonDataService } from './json-data-service';
import { faturaModel, urunModel } from './fatura-model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  faturaModel = new faturaModel;

  getSatici() {
    return this.faturaModel.satici
  }

  getAlici() {
    return this.faturaModel.alici
  }

  getEttn() {
    return this.faturaModel.ettn
  }

  getUrunler() {
    return this.faturaModel.urunler
  }

}

