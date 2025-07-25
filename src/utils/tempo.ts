export function horarioAtual(){
    var data_atual = new Date();

    var hora_atual = data_atual.getHours().toString().padStart(2, '0');
    var minuto_atual = data_atual.getMinutes().toString().padStart(2, '0');
    var segundo_atual = data_atual.getSeconds().toString().padStart(2, '0');

    return [hora_atual, minuto_atual, segundo_atual];
}