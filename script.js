let checkEnviar, checkEnviarP = "Todos", checkVisivel, checkVisivelP, nome, antigo
// nome = prompt("nome")

function menuLateral(){
    document.querySelector(".caixa").classList.remove("esconder-menu")
    document.querySelector(".sombra").classList.remove("esconder")
    
    checkVisivel = document.querySelector(".opcaoecheck")
    checkVisivelP = document.querySelector(".opcaoecheck>p").innerHTML
}

function sair(){
    document.querySelector(".caixa").classList.add("esconder-menu")
    document.querySelector(".sombra").classList.add("esconder")
}

// fazer o if para selecionar os itens
function selecionar(div){
        if (checkEnviar){
            checkEnviar = document.querySelector(".nomeecheck")
            antigo = `<p>${checkEnviarP}</p>`
            checkEnviarP = document.querySelector(".nomeecheck>p").innerHTML
            console.log(div)
            checkEnviarP = div.querySelector(".nomeecheck>p").innerHTML
            div.querySelector(".nomeecheck").innerHTML = div.querySelector(".nomeecheck").innerHTML + `<ion-icon name="checkmark"></ion-icon>`
            console.log("checkEnviar= "+checkEnviar.innerHTML)
            console.log("check P = "+checkEnviarP)
            console.log("antigo = "+antigo.innerHTML)
            checkEnviar.innerHTML = `<p>${antigo.innerHTML}</p>`
            console.log("checkEnviar= "+checkEnviar.innerHTML)
        } else{
            checkEnviar = document.querySelector(".nomeecheck")
            antigo=document.querySelector(".nomeecheck>p")
            checkEnviarP = document.querySelector(".nomeecheck>p").innerHTML
            console.log("div= "+div.innerHTML)
            checkEnviarP = div.querySelector(".nomeecheck>p").innerHTML
            div.querySelector(".nomeecheck").innerHTML = div.querySelector(".nomeecheck").innerHTML + `<ion-icon name="checkmark"></ion-icon>`
            console.log("checkEnviar= "+checkEnviar.innerHTML)
            console.log("check P = "+checkEnviarP)
            console.log("antigo = "+antigo.innerHTML)
            checkEnviar.innerHTML = `<p>${antigo.innerHTML}</p>`
            console.log("checkEnviar= "+checkEnviar.innerHTML)
            checkEnviar= true
        }
                    
        } 

function selecionarVisibilidade(div){
    checkVisivel.innerHTML = checkVisivelP
    console.log(div)
    checkVisivel = div.querySelector(".opcaoecheck")
    checkVisivelP = div.querySelector(".opcaoecheck>p").innerHTML
    div.querySelector(".opcaoecheck").innerHTML = div.querySelector(".opcaoecheck").innerHTML + `<ion-icon name="checkmark"></ion-icon>`
} 

function adicionarMensagem(){
    const mensagem = document.querySelector(".mensagem-escrita").value;
    if(mensagem){
        const novaMensagem = mensagem;
    }
    console.log(mensagem)
    renderizarMensagens(mensagem)
}

function renderizarMensagens(mensagem){
    console.log(document.querySelector(".mensagens").innerHTML)
    let caixaDeEntrada = document.querySelector(".mensagens").innerHTML
    document.querySelector(".mensagens").innerHTML = caixaDeEntrada + 
    `<div class="msg entrou-saiu">
            <p> <span class="horario">${hora()}</span>  <strong>${nome}</strong> para <strong>${checkEnviarP}</strong>:  ${mensagem}</p>
        </div>`
}

function hora(){
    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
      }
      
      const d = new Date();
      let h = addZero(d.getHours());
      let m = addZero(d.getMinutes());
      let s = addZero(d.getSeconds());
      let time = h + ":" + m + ":" + s;
      return time;        
}















