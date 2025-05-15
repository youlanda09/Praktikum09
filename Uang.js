let konversi = document.querySelector(".konversi")
konversi.addEventListener("click",function (){
    
    let milih = document.querySelector(".dariUang").value
    let milih1 = document.querySelector(".tukarUang").value
    let tukar = document.getElementById("Juang").value;
    if (milih == "USD"){
        if (milih1 == "IDR")
            var hitung = 16500 * tukar
        else if (milih1 == "EUR")
            var hitung = (18500 / 16500) * tukar
    }
    else if (milih == "IDR"){
        var hitung = tukar
    }
    else if (milih == "EUR"){
        var hitung = tukar * 18500
    }
    else if (milih == "JPY"){
        var hitung = tukar * 165
    }
    else if (milih == "GBP"){
        var hitung = tukar * 22000
    }
    else if (milih == "SGD"){
        var hitung = tukar * 12750
    }
    else if (milih == "AUD"){
        var hitung = tukar * 10500
    }

    let hasil = document.querySelector(".hasil").innerHTML = tukar+" "+milih+" = "+hitung+",00 "+milih1
})