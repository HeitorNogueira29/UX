const estrelas = document.querySelectorAll(".estrela")

let nota = 0

estrelas.forEach((estrela)=>{

estrela.addEventListener("click",()=>{

nota = estrela.getAttribute("data-valor")

estrelas.forEach((e)=>{

e.classList.remove("ativa")

})

for(let i=0;i<nota;i++){

estrelas[i].classList.add("ativa")

}

})

})

const form = document.getElementById("formAvaliacao")

form.addEventListener("submit",(e)=>{

e.preventDefault()

document.getElementById("mensagem").innerText = "Obrigado pela sua avaliação!"

})