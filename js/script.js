const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#btn_perguntar")

const respostas = [

    "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]


//clicar em fazer pergunta
function fazerPergunta(){

//console.log(inputPergunta.value)
if(inputPergunta.value == ''){
    alert("Digite sua pergunta")
    return
}

buttonPerguntar.setAttribute("disabled", true)

const pergunta = "<div>" + inputPergunta.value + "</div>"

//gerar numero aleatorio
const totalRespostas = respostas.length
//console.log(resposta[0])


const numeroAleatorio = Math.floor(Math.random() * totalRespostas);


//console.log(numeroAleatorio)
console.log(respostas[numeroAleatorio])

elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
elementoResposta.style.opacity = 1;

//sumir a resposta de 2 segundos
setTimeout(function(){
   elementoResposta.style.opacity = 0; 
   buttonPerguntar.removeAttribute('disabled')
   inputPergunta.value = ""  
}, 3000)

}