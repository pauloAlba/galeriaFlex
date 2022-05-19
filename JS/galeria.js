// componentes
const img1 = document.querySelector(".image1")
const img2 = document.querySelector(".image2")
const img3 = document.querySelector(".image3")
const img4 = document.querySelector(".image4")
const img5 = document.querySelector(".image5")
const img6 = document.querySelector(".image6")
const img7 = document.querySelector(".image7")
const img8 = document.querySelector(".image8")
const img9 = document.querySelector(".image9")
const img10 = document.querySelector(".image10")
const principal = document.querySelector(".principal")

const imgs = [img1,img2]

// eventos
img1.addEventListener("click", trocarImagem1)
img2.addEventListener("click", trocarImagem2)
img3.addEventListener("click", trocarImagem3)
img4.addEventListener("click", trocarImagem4)
img5.addEventListener("click", trocarImagem5)
img6.addEventListener("click", trocarImagem6)
img7.addEventListener("click", trocarImagem7)
img8.addEventListener("click", trocarImagem8)
img9.addEventListener("click", trocarImagem9)
img10.addEventListener("click", trocarImagem10)

// funções 
function trocarImagem1(imgs){
    principal.src = img1.src

}
function trocarImagem2(){
    principal.src = img2.src

}
function trocarImagem3(){
    principal.src = img3.src
}

function trocarImagem4(){
    principal.src = img4.src
}
function trocarImagem5(){
    principal.src = img5.src
}
function trocarImagem6(){
    principal.src = img6.src
}
function trocarImagem7(){
    principal.src = img7.src
}

function trocarImagem8(){
    principal.src = img8.src
}
function trocarImagem9(){
    principal.src = img9.src
}

function trocarImagem10(){
    principal.src = img10.src
}