function responder(){
    var resposta = prompt
    while(resposta !=1 || resposta != 2){
    resposta = prompt ("Digite uma opção")
    if(resposta == 2){
    window.location.href = "./fase2paula.html"
    break
    }else if(resposta == 1){
    window.location.href = "./gameover1paula.html"
    break
    }else{
    alert("Digite 1 ou 2")
    break
    }
}
}