
//Örnek-4: Aşağıdaki örnekleri math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
let sayi=-5.9;
// 1-mutlak değeri alsın 5.9
sayi=Math.abs(sayi)
console.log(sayi);
// 2-yuvarlama yapsın  6.0
sayi=Math.round(sayi)
console.log(sayi); 
// 3-karesini alsın 36.00
sayi=Math.pow(sayi,2)
console.log(sayi); 
// 4-karekök alsın 6.0
sayi=(Math.sqrt(sayi))
console.log(sayi);
// 5-yuvarlama yapsın 6.0
sayi=Math.round(sayi)
console.log(sayi); 
// 6-)çıkan sonucu 5 bölsün 6/5=1
sayi=sayi/5;
console.log(sayi); 
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
console.log(sayi= Math.min(5,1)); 
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin 
if(sayi%2==0){
    sayi=sayi+3;
}
else{
sayi=sayi+5;
}
console.log(sayi);

// Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
//NOT: cast kullalım ?

let kullaniciGiris=Number(prompt("Sayı Giriniz."));
if(kullaniciGiris<0){
    console.log("sayı negatif");
}
else{
    console.log("sayı pozitif");
}

// Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
//eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım
let sifre=prompt("şifrenizi giriniz.");
let sifre2=prompt("şifrenizi tekrar giriniz.");
if(sifre==sifre2){
    console.log("başarılı.");
}
else{
    console.log("iki şifre uyuşmuyor.");
}

//kullanıcıdan alınan sayıya göre Haftanın günlerimi switch case ile yazdıralım.
//örneğin: kullanıcı 1 girdi: 1=pazartesi yazacak.
const haftaGunleri=()=>{
    let gün=Number(prompt("pazartesi için 1, salı için 2, çarşamba için 3, perşembe için 4, cuma için 5, cumartesi için 6, pazar için 7ye basınız."));

    switch(gün){
        case 1:
            console.log("pazartesi");
            break;
        case 2:
            console.log("salı");
            break;
        case 3:
            console.log("çarşamba");
            break;
        case 4:
            console.log("perşembe");
            break;
        case 5:
            console.log("cuma");
            break;
        case 6:
            console.log("cumartesi");
            break;
        case 7:
            console.log("pazar");
            break;
        default:
            console.log("yanlış giriş");
            break;
            
    }
}
haftaGunleri()