//Um evento é uma ação
//atributo = style
//valor do atributo = outline-color
//cor do atributo = vermelho

const inputUser = document.querySelector("#idUsuario");
const inputSenha = document.querySelector("#idSenha");
const userLabel = document.querySelector("label[for='idUsuario']");
const passLabel = document.querySelector("label[for='idSenha']");
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
const eyePass = document.querySelector(".fa");

eyePass.addEventListener("click", ()=>{
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