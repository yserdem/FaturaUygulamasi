export class faturaModel {
    satici: any;
    alici;
    ettn: any;
    urunler: urunModel[];
    faturaBilgileri: any;
    fiyatBilgileri: any;
    altNotlar: any;

    jsonData : any;

    constructor() {
        this.alici = {
            "ad": "aliciAdi",
            "adres1": "Mahalle / Sokak",
            "adres2": "İlçe / il",
            "posta": "eposta@adres.com",
            "telNo": "05112223344",
            "tckn": "12345678910"
        };
        this.satici = {
            "ad": "Semih Çelik",
            "adres1": "Mahalle / Sokak",
            "adres2": "İlçe / il",
            "posta": "eposta@adres.com",
            "vergiDairesi": "şubeAdı",
            "vkn": "123456789",
            "ticaretSicilNo": "987654321",
            "mersisNo": "111222333"
        };
        this.ettn = "sdfsghjkhgfsdfghjklkjhgf";
        this.urunler = [
            new urunModel(1, 1, "dasdasd", 1, 123, 18, 1234, 12345),
            new urunModel(1, 1, "dasdasd", 2, 123, 18, 1234, 12345)
        ];
        this.faturaBilgileri = {
            "ozellestirmeNo": "151gsd",
            "senaryo": "earsivfatura",
            "faturaTipi": "tevfikat",
            "faturaNo": "ARS123456789",
            "faturaTarihi": "03-02-2013",
            "faturaSaati": "11:58:00",
            "gonderimTarihi": "30-12-2013 11:59:00",
            "muhasebeFaturaNo": "hgsfdfgfHgf",
            "satisKanali": "diğerGerçekMağaza"
        };
        this.fiyatBilgileri = {
            "malHizmetToplamTutari": "12345TL",
            "toplamIskonto": "0,00TL",
            "hesaplananKdv": "1231TL",
            "kdvDahilToplamTutar": "88888TL",
            "hesaplananKdvTevfikati": "111TL",
            "tevfikataTabiIslemTutari": "1231545TL",
            "tevfikataTabiIslemUzerindenKdv": "1231TL",
            "odenecekTutar": "12313TL"
        };
        this.altNotlar = {
            "tevfikatSebebi": "605-ORGANİZASYON HİZMETI",
            "faturaTutari": "yazıilefiyattutarı",
            "IBAN": "TR123435423",
            "banka": "Cepbak",
            "dovizTuru": "TL",
            "aciklama": "genel kasa",
            "alt_aciklama": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget erat fermentum, consectetur lacus et, consectetur ligula. Aliquam lorem augue, accumsan in diam vel, accumsan venenatis dui"
        }
    };
}

export class urunModel {
    siraNo;
    stokKodu;
    malHizmet;
    miktar;
    birimFiyati;
    kdvOrani;
    kdvTutari;
    malHizmetTutari;

    constructor(siraNo: any, stokKodu: any, malHizmet: any, miktar: any, birimFiyati: any, kdvOrani: any, kdvTutari: any, malHizmetTutari: any) {
        this.siraNo = siraNo;
        this.stokKodu = stokKodu;
        this.malHizmet = malHizmet;
        this.miktar = miktar;
        this.birimFiyati = birimFiyati;
        this.kdvOrani = kdvOrani;
        this.kdvTutari = kdvTutari;
        this.malHizmetTutari = malHizmetTutari;
    }
}