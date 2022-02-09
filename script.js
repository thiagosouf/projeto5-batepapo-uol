let check, contSelecionar

function menuLateral(){
    document.querySelector(".caixa").classList.remove("esconder-menu")
    document.querySelector(".sombra").classList.remove("esconder")
}

function sair(){
    document.querySelector(".caixa").classList.add("esconder-menu")
    document.querySelector(".sombra").classList.add("esconder")
}

// fazer o if para selecionar os itens
function selecionar(div){
    console.log(div)
    check = div.querySelector(".nomeecheck").innerHTML
    div.querySelector(".nomeecheck").innerHTML = div.querySelector(".nomeecheck").innerHTML + `<ion-icon name="checkmark"></ion-icon>`
    contSelecionar = true;
} 