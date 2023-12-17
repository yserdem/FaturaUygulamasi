import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class MockDataService implements InMemoryDbService {

  createDb() {
    const fatura = {
      "satici":
      {
        "ad": "Semih Çelik",
        "adres1": "Mahalle / Sokak",
        "adres2": "İlçe / il",
        "posta": "eposta@adres.com",
        "vergiDairesi": "şubeAdı",
        "vkn": "123456789",
        "ticaretSicilNo": "987654321",
        "mersisNo": "111222333"
      },
      "alici":
      {
        "ad": "aliciAdi",
        "adres1": "Mahalle / Sokak",
        "adres2": "İlçe / il",
        "posta": "eposta@adres.com",
        "telNo": "05112223344",
        "tckn": "12345678910"
      },
      "ettn": "someLongLineWithNumbers",
      "ürünler": [
        {
          "sıraNo": 1, "stokKodu": "qwe12",
          "malHizmet": "verilen Hizmet 1",
          "miktar": "1 adet",
          "birimFiyati": "12345.12TL",
          "kdvOrani": "%18",
          "kdvTutarı": "111.11TL",
          "malHizmetTutari": "12345.12TL"
        },
        {
          "sıraNo": 2, "stokKodu": "qwe23",
          "malHizmet": "verilen Hizmet 2",
          "miktar": "2 adet",
          "birimFiyati": "123456.12TL",
          "kdvOrani": "%18",
          "kdvTutarı": "222.22TL",
          "malHizmetTutari": "123456.12TL"
        }
      ],
      "faturaBilgileri": {
        "ozellestirmeNo": "151gsd",
        "senaryo": "earsivfatura",
        "faturaTipi": "tevfikat",
        "faturaNo": "ARS123456789",
        "faturaTarihi": "03-02-2013",
        "faturaSaati": "11:58:00",
        "gonderimTarihi": "30-12-2013 11:59:00",
        "muhasebeFaturaNo": "hgsfdfgfHgf",
        "satisKanali": "diğerGerçekMağaza"
      },
      "fiyatBilgileri": {
        "malHizmetToplamTutari": "12345TL",
        "toplamİskonto": "0,00TL",
        "hesaplananKdv": "1231TL",
        "kdvDahilToplamTutar": "88888TL",
        "hesaplananKdvTevfikati": "111TL",
        "tevfikataTabiİslemTutari": "1231545TL",
        "tevfikataTabiİslemUzerindenKdv": "1231TL",
        "odenecekTutar": "12313TL"
      },
      "altNotlar": "bgnfsoöcv vmbnghfusjıdpskolxcö vgjnfjıspkdoğlpcşçvöbmnjgpkfslpölfgmnjrksplcvm nbguhfjpskdcö vbn"
    }
    return {fatura}
  }

  constructor() { }
}

/*export type fatura = {
  satici: {
    ad: string;
    adres1: string;
    adres2: string;
    posta: string;
    vergiDairesi: string;
    vkn: string;
    ticaretSicilNo: string;
    mersisNo: string;
  };
  alici: {
    ad: string;
    adres1: string;
    adres2: string;
    posta: string;
    telNo: string;
    tckn: string;
  };
  ettn: string;
  ürünler: urun[];
  faturaBilgileri: {
    ozellestirmeNo: string;
    senaryo: string;
    faturaTipi: string;
    faturaNo: string;
    faturaTarihi: string;
    faturaSaati: string;
    gonderimTarihi: string;
    muhasebeFaturaNo: string;
    satisKanali: string;
  };
  fiyatBilgileri: {
    malHizmetToplamTutari: string;
    toplamİskonto: string;
    hesaplananKdv: string;
    kdvDahilToplamTutar: string;
    hesaplananKdvTevfikati: string;
    tevfikataTabiİslemTutari: string;
    tevfikataTabiİslemUzerindenKdv: string;
    odenecekTutar: string;
  };
  altNotlar: string;
}

type urun = {
  sıraNo: number;
  stokKodu: string;
  malHizmet: string;
  miktar: string;
  birimFiyati: string;
  kdvOrani: string;
  kdvTutarı: string;
  malHizmetTutari: string;
}
*/

