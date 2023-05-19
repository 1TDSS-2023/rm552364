//Um evento é uma ação
//atributo = style
//valor do atributo = outline-color
//cor do atributo = vermelho

const inputUser = document.querySelector("#idUsuario");
const inputSenha = document.querySelector("#idSenha");
const userLabel = document.querySelector("label[for='idUsuario']");
const passLabel = document.querySelector("label[for='idSenha']");
//const eyepass = document.querySelector(".fa-eye");
//input.addEventListener("focus", ()=>{
//    input.style.outlineColor = "red";
//
//});

inputSenha.addEventListener("keyup", ()=>{
    if(inputSenha.value.length < 5){
        inputSenha.setAttribute("style", "outline-color: red;");
        passLabel.setAttribute("style", "color: green;");
    } else {
        inputSenha.setAttribute("style", "outline-color: green;");
    }
});

inputUser.addEventListener("keyup", ()=>{
    if(inputUser.value.length < 5){
        inputUser.setAttribute("style", "outline-color: red");
        userLabel.setAttribute("style", "color: red;");
    } else {
        inputUser.setAttribute("style", "outline-color: green");

    }
})

//Quando o usuario clicar no olho para a senha troque tambem o icone

eyepass.addEventListener("click", ()=>{
    //if(inputSenha.type == "password"){
    //    inputSenha.type = "text";
    //} else {
    //    inputSenha.type = "password";
    //}

    if(inputSenha.getAttribute("type") == "password"){
        inputSenha.setAttribute("type", "text");
        eyePass.setAttribute("class", "fa fa-eye-slash");
    } else {
        inputSenha.setAttribute("type", "password");
        eyePass.setAttribute("class", "fa fa-eye");
    }
    
});

//Lista de objetos
let listaDeUsuarios = [
    {
        nomeCompleto : "Cevilha da Silva",
        nomeUsuario : "cevilha",
        senhaUsuario : "123456"
    }
    ,
    {
        nomeCompleto : "Seba da Costa",
        nomeUsuario : "Seba",
        senhaUsuario : "123456"
    }
    ,
    {
        nomeCompleto : "Zuleide Camacho",
        nomeUsuario : "zuzu",
        senhaUsuario : "123456"
    }
    ,
    {
        nomeCompleto : "Ednaldo Sandro",
        nomeUsuario : "edi",
        senhaUsuario : "123456"
    }
    ,
    {
        nomeCompleto : "Moscone Oswaldo",
        nomeUsuario : "mosca",
        senhaUsuario : "123456"
    }
];

addEventListener("click", (evt)=>{

    //Usuario logado
    const usuarioLogado = {
        nomeUsuarioLogado : inputUser.value,
        senhaUsuarioLogado : inputSenha.value
    }

    let usuarioValidado = {
        valor:null
    };

    if(evt.target.id == "btnSubmit"){
        for (let x = 0; x < listaDeUsuarios.length; x++){
        
            if(usuarioLogado.nomeUsuarioLogado == listaDeUsuarios[x].nomeUsuario && 
                usuarioLogado.senhaUsuarioLogado
                == listaDeUsuarios[x].senhaUsuario){
                    usuarioValidado = listaDeUsuarios[x];
                    break;
                }
    }

    const msgStatus = document.querySelector("#status-info")

    console.log(usuarioLogado);

    if(usuarioValidado.valor != null){
        msgStatus.setAttribute("style", "color:#00ff00");
        msgStatus.innerHTML = `<span><strong>O usuário ${usuarioValidado.nomeCompleto} efetuou
        o login com sucesso</strong></span>`;

        //Redirect
        setTimeout(()=>{
            window.location.href = "../index.html"
        })
    } else {
        msgStatus.setAttribute("style", "color:#ff0000");
        msgStatus.innerHTML = `<span><strong>Nome de usuario ou senha invalido</strong></span>`;
    }
}       
});