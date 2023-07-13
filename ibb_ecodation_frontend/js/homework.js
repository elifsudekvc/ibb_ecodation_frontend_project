
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