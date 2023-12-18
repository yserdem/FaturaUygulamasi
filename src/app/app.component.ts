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
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
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

  public openPDF(): void {
    let DATA: any = document.getElementById('inner_frame');
    console.log(DATA)
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 210;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }

  public saveMultiple(): void {
    let DATA: any = document.getElementById('inner_frame');
    console.log(DATA)
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 99;
      let fileHeight = (canvas.height * fileWidth) / canvas.width +30;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('l', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', position, 0, fileWidth, fileHeight);
      PDF.addImage(FILEURI, 'PNG', position + fileWidth, 0, fileWidth, fileHeight);
      PDF.addImage(FILEURI, 'PNG', position + (fileWidth * 2), 0, fileWidth, fileHeight);
      PDF.save('angular-demo-3x.pdf');
    });
  }
}
