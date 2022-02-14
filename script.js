let checkEnviar, checkEnviarP = "Todos", checkVisivel, checkVisivelP, nome, antigo, nomeRecebido, quantidadeNomes
let destinatario = "Todos"
let personagem, novoNome, novaMsg, msg

// buscando nomes
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
    renderizarPersonagem(personagem);
    }
function renderizarPersonagem(personagem){
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

// buscando msg
function buscarMensagem() {
    setInterval(displayHello, 3000);
        function displayHello() {
            const promessaMensagem = axios.get("https://mock-api.driven.com.br/api/v4/uol/messages");
            promessaMensagem.then(promessaMensagemCumprida);
            console.log(promessaMensagem.then)}
  }

function promessaMensagemCumprida(resposta) {
    quantidadeMensagem = resposta.data.length;
    console.log(quantidadeMensagem);
    mensagemBD = resposta.data;
    console.log(mensagemBD[0].text)
    renderizarmensagemBD(mensagemBD);
        
}
function renderizarmensagemBD(mensagemBD){
    document.querySelector(".mensagens").innerHTML = ""
    divMensagens = document.querySelector(".mensagens")
    console.log("lei")
    
    for (let i = 0; i < quantidadeMensagem; i++){
        console.log(mensagemBD[i].text);
        if (mensagemBD[i].type == "status"){
            divMensagens.innerHTML += `
                <div class="msg entrou-saiu">
                <p> <span class="horario">(${mensagemBD[i].time})</span>  <strong>${mensagemBD[i].from}</strong>  ${mensagemBD[i].text}</p>
                </div>
            `;
        }
        if(mensagemBD[i].type == "message"){
            divMensagens.innerHTML += `
                <div class="msg para-alguem">
                <p> <span class="horario">(${mensagemBD[i].time})</span>  <strong>${mensagemBD[i].from}</strong> para <strong>${mensagemBD[i].to}</strong>:  ${mensagemBD[i].text}</p>
                </div>
            `;
        }
        // modificar para só ver se for pra mim
        if(mensagemBD[i].type == "private_message"){
            divMensagens.innerHTML += `
                <div class="msg reservado">
                <p> <span class="horario">(${mensagemBD[i].time})</span>  <strong>${mensagemBD[i].from}</strong> para <strong>${mensagemBD[i].to}</strong>:  ${mensagemBD[i].text}</p>
                </div>
            `;
        }

    }
    const verUltimo = divMensagens.lastElementChild;
    verUltimo.scrollIntoView();
    }


// entrar com nome
function adicionarNome(){
    nome = prompt("NOME: ")

    if(nome){
        console.log("tudo certo")
        novoNome = {
            name: nome
        };
        const promessaNome = axios.post("https://mock-api.driven.com.br/api/v4/uol/participants",novoNome)
        promessaNome.then(promessaNovoNomeCumprida); // feliz
        promessaNome.catch(promessaNovoNomeFalhou); // infeliz

        personagem.push(novoNome);
        renderizarPersonagem(novoNome);

    } else {
        console.log("ops erro")
        adicionarNome()
    }
}

function promessaNovoNomeFalhou(erro) {
    alert("Vish, falhou a parada! Tente novamente!");
    console.log(erro.response);
  }
  
  function promessaNovoNomeCumprida(resposta) {
    alert("Começo de um sonho.... Deu tudo certo!!!");
    console.log(resposta);
  }


// Enviar Mensagem
function adicionarMensagem(){
    msg = document.querySelector(".mensagem-escrita").value;

    if(msg){
        console.log("tudo certo com a msg")
        novaMsg = {
                from: nome,
                to: destinatario,
                text: msg,
                type: "message" // ou "private_message" para o bônus
        }
        const promessaMsg = axios.post("https://mock-api.driven.com.br/api/v4/uol/messages",novaMsg)
        promessaMsg.then(promessaNovaMsgCumprida);
        promessaMsg.then(promessaNovaMsgFalhou);

        mensagemBD.push(novaMsg);
        renderizarmensagemBD(novaMsg);

    }else {
        console.log("Nao pode enviar msg vazia")
    }
}

function promessaNovaMsgFalhou(erro){
    console.log("Vish, Msg FALHOUUUUU! Tente novamente!");
    console.log(erro.response);
}

function promessaNovaMsgCumprida(resposta) {
    console.log("Começo de um sonho.... Deu tudo certo!!!");
    console.log(resposta);
  }


// STATUS
setInterval(verificaStatus, 5000);
function verificaStatus(){
    login = {
        name: nome
    };

    const promessaStatus = axios.post("https://mock-api.driven.com.br/api/v4/uol/status",login)
    promessaNome.then(promessaStatusCumprida); // feliz
    promessaNome.catch(promessaStatusFalhou);
// FALTA VER A NOVA API E VER ONDE EU COLOCO O PUSH <---------
}

// menulateral
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
    
    } 

// function adicionarMensagem(){
//     const mensagem = document.querySelector(".mensagem-escrita").value;
//     if(mensagem){
//         const novaMensagem = mensagem;
//     }
//     console.log(mensagem)
//     renderizarMensagens(mensagem)
// }

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