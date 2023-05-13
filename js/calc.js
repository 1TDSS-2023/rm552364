"use-strict"
//Desafio 1
//Inserir o value dos botões de numeros e operações no visor
//É obrigatorio utilizar funções parametrizadas
//Pode ser utilizados eventos inline

//Desafio 3
//Evite a inserção de mais de um operador por vez no visor

function insereNumeroNoVisor(botao, visor) {
    if(botao.value == "+" || botao.value === "-" || botao.value === "*" || botao.value === "/"){

        if(visor.value[visor.value.length-1] == "+" || botao.value === "-" || botao.value === "*" || botao.value === "/"){
            visor.value.slice(visor.value.length-1);
        }else{
            visor.value += botao.value;
        }

    }else{    
        visor.value += botao.value;
    }
}

//Desafio 2
//Utilzando a função eval(expressão)
//Crie uma nova função no formato ArrowFunction que receba um parametro e
//passe a função eval() realizar o calculo e devolva o resultado no visor

const calculaResultadoOperacoes = (visor)=>{
    visor.value = eval(visor.value);
}
