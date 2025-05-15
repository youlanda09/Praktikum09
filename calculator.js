let a
let b
function aRandom (){
    a = Math.ceil(Math.random()*100);
    b = Math.ceil(Math.random()*100);
    let cek = document.querySelector("#tambah").value = a
    let cek1 = document.querySelector("#tambah1").value = b
    document.querySelector("#hasil1").value = ""
    return a, b
}

function bRandom (){
    a = Math.ceil(Math.random()*100);
    b = Math.ceil(Math.random()*100);
    while (b >= a){
        a = Math.ceil(Math.random()*100);
        b = Math.ceil(Math.random()*100);
    }
    let cek = document.querySelector("#kurang").value = a
    let cek1 = document.querySelector("#kurang1").value = b
    document.querySelector("#hasil2").value = ""
    return a, b
}

function cRandom (){
    angkaCek = Math.floor(Math.random()*900)+100;
    document.querySelector("#hasil3").value = angkaCek
    document.querySelector("#ratus").value = ""
    document.querySelector("#puluh").value = ""
    document.querySelector("#satuan").value = ""
}
cRandom()
document.querySelector("#cekH3").addEventListener("click", function(){
    let ratusan = document.querySelector("#ratus").value
    let puluh = document.querySelector("#puluh").value
    let satuan = document.querySelector("#satuan").value
    
    let hasilRatusan = Math.floor(angkaCek / 100)*100;
    console.log (hasilRatusan)
    let hasilPuluh = Math.floor(((angkaCek % 100) /10) * 10);
    let hasilSatuan = Math.floor( angkaCek % 10);

    if (ratusan == hasilRatusan){
        document.querySelector(".hasil3").innerHTML = "Jawaban Ratusan Benar!!!"
    }
    else if (ratusan == ""){
        document.querySelector(".hasil3").innerHTML = "Isi Jawaban Ratusan Terlebih Dahulu!!!"
    }
    else{
        document.querySelector(".hasil3").innerHTML = "Jawaban Ratusan Salah!!!"
    }
    if (puluh == hasilPuluh){
        document.querySelector(".hasil3_1").innerHTML = "Jawaban Puluhan Benar!!!"
    }
    else if (puluh == ""){
        document.querySelector(".hasil3_1").innerHTML = "Isi Jawaban Puluhan Terlebih Dahulu!!!"
    }
    else{
        document.querySelector(".hasil3_1").innerHTML = "Jawaban Puluhan Salah!!!"
    }
    if (satuan == hasilSatuan){
        document.querySelector(".hasil3_2").innerHTML = "Jawaban Satuan Benar!!!"
    }
    else if (satuan == ""){
        document.querySelector(".hasil3_2").innerHTML = "Isi Jawaban Satuan Terlebih Dahulu!!!"
    }
    else{
        document.querySelector(".hasil3_2").innerHTML = "Jawaban Satuan Salah!!!"
    }
})


aRandom()
document.querySelector("#cekH1").addEventListener("click",function (){
    let hasil1 = document.querySelector("#hasil1").value
    console.log (a+b)
    if (a + b == hasil1) {
        var jawaban = "Jawaban Benar!!!";
    } 
    else if (hasil1 == "") {
        var jawaban ="Tidak Ada Jawaban!!! Isi Terlebih Dahulu!!!"
    }
    else {
        var jawaban = "Jawaban Salah!!!";
    }
    document.querySelector(".hasil").innerHTML = jawaban
})

bRandom()
document.querySelector("#cekH2").addEventListener("click",function (){
    let hasil2 = document.querySelector("#hasil2").value
    console.log (a+b)
    if (a - b == hasil2) {
        var jawaban = "Jawaban Benar!!!";
    } 
    else if (hasil2 == "") {
        var jawaban ="Tidak Ada Jawaban!!! Isi Terlebih Dahulu!!!"
    }
    else {
        var jawaban = "Jawaban Salah!!!";
    }
    document.querySelector(".hasil2").innerHTML = jawaban
})
document.querySelector(".fresh").addEventListener("click",function (){
    document.querySelector(".hasil").innerHTML = ""
    aRandom()
})
document.querySelector(".fresh2").addEventListener("click",function (){
    document.querySelector(".hasil2").innerHTML = ""
    bRandom()
})
document.querySelector(".fresh3").addEventListener("click",function (){
    document.querySelector(".hasil3").innerHTML = ""
    document.querySelector(".hasil3_1").innerHTML = ""
    document.querySelector(".hasil3_2").innerHTML = ""
    cRandom()
})
