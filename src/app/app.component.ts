import { Component } from '@angular/core';
import { faturaModel, urunModel } from './fatura-model';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpClient]
})
export class AppComponent {
  data: any;

  faturaModel = new faturaModel;

  constructor(private http: HttpClient) { };

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const url = '../assets/fatura.json';
    this.http.get(url).subscribe((response: any) => {
      const urunler: urunModel[] = [];
      this.faturaModel.jsonData = response;
      this.faturaModel.satici = response.satici;
      this.faturaModel.alici = response.alici;
      this.faturaModel.ettn = response.ettn;
      this.faturaModel.faturaBilgileri = response.faturaBilgileri;
      this.faturaModel.fiyatBilgileri = response.fiyatBilgileri;
      this.faturaModel.altNotlar = response.altNotlar;

      response.urunler.forEach((urun: { siraNo: any; stokKodu: any; malHizmet: any; miktar: any; birimFiyati: any; kdvOrani: any; kdvTutari: any; malHizmetTutari: any; }) => {
        urunler.push(
          new urunModel(urun.siraNo, urun.stokKodu, urun.malHizmet, urun.miktar, urun.birimFiyati, urun.kdvOrani, urun.kdvTutari, urun.malHizmetTutari)
        )
      });

      this.faturaModel.urunler = urunler
    });
  }

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

  getFaturaBilgileri() {
    return this.faturaModel.faturaBilgileri
  }

  getFiyatBilgileri() {
    return this.faturaModel.fiyatBilgileri
  }

  getAltNotlar() {
    return this.faturaModel.altNotlar
  }

  aaaaaa() {
    const element = document.getElementById('div-container');

    console.log(element);

  }

public openPDF(): void {
  let data_top: any = document.getElementById('pdf-selector-top');
  let data_bottom: any = document.getElementById('pdf-selector-bottom');

  html2canvas(data_top).then((canvas_top) => {
    html2canvas(data_bottom).then((canvas_bottom) => {
      let fileWidth = 208;
      let fileHeight_top = (canvas_top.height * fileWidth) / canvas_top.width;
      let fileHeight_bottom = (canvas_bottom.height * fileWidth) / canvas_bottom.width;

      const FILEURI_top = canvas_top.toDataURL('image/png');
      const FILEURI_bottom = canvas_bottom.toDataURL('image/png');

      let PDF = new jsPDF('p', 'mm', 'a4');
      
      // Add content of the first element
      PDF.addImage(FILEURI_top, 'PNG', 0, 10, fileWidth, fileHeight_top);

      // Add content of the second element below the first
      PDF.addImage(FILEURI_bottom, 'PNG', 0, fileHeight_top + 20, fileWidth, fileHeight_bottom);

      PDF.save('combined-pdf.pdf');
    });
  });
}


}