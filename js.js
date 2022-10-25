function carregar(){
    var horario = document.getElementById('horario');
    var imagem = document.getElementById('imagem');
    var data = new Date();
    var horas =data.getHours();
    horario.innerHTML = `Agora são ${horas} horas`;

    if(horas >= 0 && horas < 12){
        imagem.src = 'manha.png';
    }else if(horas >= 12 && horas <18){
        imagem.src = 'tarde.png';
    }else{
        imagem.src = 'noite.png';
    }
 
}