document.getElementById('chat-list-content').hidden=true$

var quem = window.prompt("Digite o nome do participante que deseja ligar a câmera");
window.alert("Ligando a câmera de " + quem);

var demo_input = document.getElementById('txtMensagem'); //Local para inserir a mensagem

var type_this = (quem + " eu estou no cio e queria ligar sua cam pq eu tenho resquicios de psicopatia e nao respeito a privacidade dos outros." ); //texto vergonhoso

var index = 0;

window.next_letter = function() {
    if (index <= type_this.length) {
        demo_input.value = type_this.substr(0, index++);
        setTimeout("next_letter()", 10); //TIMER DA MENSAGEM EM MS
    }
}

next_letter();
