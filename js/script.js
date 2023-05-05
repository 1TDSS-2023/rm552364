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
//const btn = document.getElementById("meu-btn");

//Transformar o botao em RGB
//btn.addEventListener("click", function(){
    //console.log(this.textContent);
    //Função matematica math
    //random = retorna um numero aleatorio entre 0 e 1 Ex: 0.4345345345
    //ceil = arredonda o numero para cima.
    //floor = arredonda o numero para baixo.
    //round = arredonda o numero aleatorio.
    //let r=0,g=0,b=0;
//r = Math.round(Math.random()*255);
//g = Math.round(Math.random()*255);
//b = Math.round(Math.random()*255);

//this.setAttribute("style", `background-color: rgb(${r},${g},${b});`);
//dois parametros: nome do atributos e valor inicial ou adicionado do atributo

    

//Leva dois parametros, evento e função
//eventlistener adiciona um escutador de eventos que colocarmos dentro dela

//<h2 class="tit-sec">Seçao de Fotos</h2>

//const h2Element = document.querySelector(".tit-sec");

//console.log(h2Element);

//Declaração de um ARRAY e seus métodos
// let frutas = ["banana","maça","laranja","morango","pera","uva","amora","abacaxi"];
// //Imprimindo um array
// console.log(frutas)
// console.log(frutas[0])
// //Verificando o tamanho do array usando o length
// console.log(`Tamanho do array é: ${frutas.length}`);

// //Inserindo um item no FINAL do array com o metodo push(nomeItem)
// frutas.push("pêssego");
// console.log(frutas)

// //Inserindo um item no INICIO do array com o metodo unshift(nomeItem)
// frutas.unshift("kiwi");
// console.log(frutas)

// //REMOVENDO um item ao final do array com o metodo pop()
// frutas.pop();
// console.log(frutas)

// //REMOVENDO um item no INICIO do array com o metodo shift()
// frutas.shift()
// console.log(frutas)

//LOCALIZANDO um item dentro do array com o metodo indexOf(nomeItem)
//Obs: O metodo indexOf(nomeItem) retorno o indice do item
//Primeiramente precisamos salvar em uma variavel
//et indice = frutas.indexOf("morango");
//console.log(`Uva esta localizado no item: ${indice}`);
//console.log(`Elemento buscado: ${frutas[indice]}`);

//Removendo um item do array com o metodo splice(indice do item, qtd de vezes que o indice sera removido)
//Obs: Utilize o metodo indexOf(nomeItem) para descobrir o indice do item
// let indice = frutas.indexOf("amora");
// console.log(`Elemento do indice antes da remoção: ${frutas[indice]}`);
// frutas.splice(indice, 1);
// console.log(frutas)
// console.log(`Elemento do indice após a remoção: ${frutas[indice]}`);

// //Impressao do array em tabela usando o metodo table()
// console.table(frutas)

// frutas.forEach((fruta)=>{
//     console.log("FRUTA DA VEZ: " + fruta);
// });

// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];
// console.log(nr1)
// console.log(nr2)
// //Concatenando arrays em um novo array com o operador SPREAD(...)
// let nr3 = [...nr1, ...nr2];
// console.log("Itens do novo array: " + nr3);
// //Imprimindo o array com forEach
// nr3.forEach((nr)=>{
//     //nr.forEach((n)=>{
//         console.log("ITENS DO NOVO ARRAY " + nr);
//     //});
// });
// const imgElements = [...document.getElementsByTagName("img")];
// // for (let index = 0; index < imgElements.length; index++) {
// //     console.log(imgElements[index].alt);
// // }
// //const imgElementsArray = [...imgElements];
// imgElements.forEach((img)=>{
//     img.setAttribute("width", "10%");
// });

const elements = [...document.querySelectorAll(".teste")]
//console.log(elements);

elements.forEach((el)=>{
    if(el.tagName.toLowerCase() == "nav"){
        console.log(el);
    }
});