let checkEnviar, checkEnviarP = "Todos", checkVisivel, checkVisivelP, nome, antigo, nomeRecebido, quantidadeNomes
let seletorNomes =''
let personagem


function buscarNomes() {
    const promessa = axios.get("https://mock-api.driven.com.br/api/v4/uol/participants");
    promessa.then(promessaCumprida);
    console.log(promessa.then)
  }

function promessaCumprida(resposta) {
    quantidadeNomes = resposta.data.length;
    console.log(quantidadeNomes);
    personagem = resposta.data;
    console.log(personagem[0].name)
    // renderizarPersonagem(personagem);
    let divPersonagens = document.querySelector(".escolhas")
    console.log("lei")
    for (let i = 0; i < quantidadeNomes; i++){
        console.log(personagem[i].name);
        divPersonagens.innerHTML += `
                <div class="nomeUsuarios" onclick="selecionar(this)"> 
                    <div class="logo">
                        <ion-icon name="people"></ion-icon>
                    </div>
                    <div class="nomeecheck"><p>${personagem[i].name}</p><ion-icon name="checkmark" class="checkmark"></ion-icon>
                    </div>
                </div>
        `;
    }
}

function buscarMensagem() {
    const promessaMensagem = axios.get("https://mock-api.driven.com.br/api/v4/uol/messages");
    promessaMensagem.then(promessaMensagemCumprida);
    console.log(promessaMensagem.then)
  }

function promessaMensagemCumprida(resposta) {
    quantidadeMensagem = resposta.data.length;
    console.log(quantidadeMensagem);
    mensagemBD = resposta.data;
    console.log(mensagemBD[0].text)
    // renderizarmensagemBD(mensagemBD);
    let divMensagens = document.querySelector(".mensagens")
    console.log("lei")
    for (let i = 0; i < quantidadeMensagem; i++){
        console.log(mensagemBD[i].text);
        if (mensagemBD[i].type == "status")
        divMensagens.innerHTML += `
            <div class="msg entrou-saiu">
            <p> <span class="horario">(${mensagemBD[i].time})</span>  <strong>${mensagemBD[i].from}</strong>  ${mensagemBD[i].text}</p>
            </div>
        `;
    }
}

function renderizarmensagemBD(mensagemBD){
    const divPersonagens = document.querySelector(".escolhas").innerHTML
    console.log("lei")
    for (let i = 0; i < quantidadeMensagem; i++){
        divPersonagens += `
                <div class="nomeUsuarios" onclick="selecionar(this)"> 
                    <div class="logo">
                        <ion-icon name="people"></ion-icon>
                    </div>
                    <div class="nomeecheck"><p>${mensagemBD[i].name}</p><ion-icon name="checkmark" class="checkmark"></ion-icon>
                    </div>
                </div>
        `;
    }
}













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
            <p> <span class="horario">(${hora()})</span>  <strong>${nome}</strong> para <strong>${checkEnviarP}</strong>:  ${mensagem}</p>
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