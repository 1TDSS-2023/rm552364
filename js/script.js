"use strict";
// console.log("Olá Mundo!")

// var nr1 = "10";
// var nr2 = "5";

//var tem o instinto de englobar tudo
//let nao vamos utilizar muito para armazenamento de elementos, por que ele
//ele é muito fragil

// //Realizando operações com String;
// //Função paserInt:
// console.log(parseInt(nr1)+parseInt(nr2));

//var nome1 = "Dubas";
//let nome2 = "Serbatinho";
//const nome3 = "Julia";

//if(nome1 != ""){
    //let nome1 = "Julia";
//}

//<button value="click" id="meu-btn">Clique aqui</button>
const btn = document.getElementById("meu-btn");

//Transformar o botao em RGB
btn.addEventListener("click", function(){
    //console.log(this.textContent);
    //Função matematica math
    //random = retorna um numero aleatorio entre 0 e 1 Ex: 0.4345345345
    //ceil = arredonda o numero para cima.
    //floor = arredonda o numero para baixo.
    //round = arredonda o numero aleatorio.
    let r=0,g=0,b=0;
r = Math.round(Math.random()*255);
g = Math.round(Math.random()*255);
b = Math.round(Math.random()*255);

this.setAttribute("style", `background-color: rgb(${r},${g},${b});`);
//dois parametros: nome do atributos e valor inicial ou adicionado do atributo

    

})
//Leva dois parametros, evento e função
//eventlistener adiciona um escutador de eventos que colocarmos dentro dela

//<h2 class="tit-sec">Seçao de Fotos</h2>

const h2Element = document.querySelector(".tit-sec");

console.log(h2Element);

//Estudar querySelectorAll()