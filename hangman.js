let answers = ["PYTHON", "JAVASCRIPT", "TAILWIND", "REACT", "LARAVEL"]
let clues = [
    "A versatile programming language named after a snake, loved for its simplicity.",
    "The language that brings interactivity to websites, often abbreviated as JS.",
    "A utility-first CSS framework for rapidly building custom designs.",
    "A JavaScript library for building dynamic user interfaces, created by Facebook.",
    "A PHP framework known for elegant syntax and robust web development tools."
]
var lives = 10
var answer =""
var answer_ = ""
window.onload = function generate() {
    a = Math.floor(Math.random()*5)
    answer = answers[a]
    console.log (a)
    answer_ = "_".repeat(answer.length);
    document.querySelector(".isi_").innerHTML = answer_
    document.querySelector(".clue").innerHTML = clues[a]
    return answer, answer_
}

document.querySelector(".cek").addEventListener("click", function checkAnswer() {
    count = 0
    let tebakan = document.querySelector("#huruf").value.toUpperCase()
    tebakan.split("")
    console.log(answer)
    console.log(answer_)
    let arrAnswer_ = answer_.split("");
    for (let i = 0; i < answer.length; i++){
        console.log(answer[i])
        if (tebakan == answer[i]){
            count += 1
            console.log("bener")
            arrAnswer_[i] = tebakan;
            console.log(answer_[i])
        }
        else{
            console.log("salah")
        }
    }
    if (count ==0 ){
        console.log("salah111")
        lives -= 1
    }
    answer_ = arrAnswer_.join("")
    console.log(answer_)
    document.querySelector(".isi_").innerHTML = answer_
    document.querySelector(".darah").innerHTML = "Lives : "+lives
    document.querySelector(".gambar").src = "/Gambar/"+lives+".jpg"
    checkWin()
})

function checkWin(){
    if (answer_ == answer){
        let warna = document.querySelector(".hasil")
        warna.innerHTML = "Kamu Menang!"
        warna.style.color = "Green"
    }
    else if(lives == 0){
        let warna = document.querySelector(".hasil")
        warna.innerHTML = "Kamu kalah!"
        warna.style.color = "Red"
    }
}