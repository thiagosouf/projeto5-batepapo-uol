let checkEnviar, checkEnviarP = "Todos", checkVisivel, checkVisivelP, nome, antigo, nomeRecebido, quantidadeNomes
let destinatario = "Todos"
let personagem, novoNome, novaMsg, msg

// buscando nomes
function buscarNomes() {
    setInterval(displayHello, 3000);
        function displayHello() {
            const promessa = axios.get("https://mock-api.driven.com.br/api/v4/uol/participants");
            promessa.then(promessaCumprida);
  }}

function promessaCumprida(resposta) {
    quantidadeNomes = resposta.data.length;
    console.log("quantidade de nomes"+quantidadeNomes);
    personagem = resposta.data;
    renderizarPersonagem(personagem);
    }
function renderizarPersonagem(personagem){
    let divPersonagens = document.querySelector(".escolhas")
    divPersonagens.innerHTML = ""
    for (let i = 0; i < quantidadeNomes; i++){
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
        }
  }

function promessaMensagemCumprida(resposta) {
    quantidadeMensagem = resposta.data.length;
    mensagemBD = resposta.data;
    renderizarmensagemBD(mensagemBD);
        
}
function renderizarmensagemBD(mensagemBD){
    document.querySelector(".mensagens").innerHTML = ""
    divMensagens = document.querySelector(".mensagens")
    
    for (let i = 0; i < quantidadeMensagem; i++){
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
    buscarMensagem()

    if(nome){
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
    console.log(resposta);
  }


// Enviar Mensagem
function adicionarMensagem(){
    msg = document.querySelector(".mensagem-escrita").value;

    if(msg){
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
    promessaNome.catch(promessaStatusFalhou);
}

function promessaStatusFalhou(erro){
    console.log("Vish, STATUS FALHOUUUUU!");
    console.log(erro.response);
}

// menulateral
function menuLateral(){
    document.querySelector(".caixa").classList.remove("esconder-menu")
    document.querySelector(".sombra").classList.remove("esconder")
    buscarNomes()





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

adicionarNome()
