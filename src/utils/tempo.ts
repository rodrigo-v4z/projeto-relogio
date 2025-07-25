export function horarioAtual(){
    var data_atual = new Date();

    var hora_atual = data_atual.getHours().toString().padStart(2, '0');
    var minuto_atual = data_atual.getMinutes().toString().padStart(2, '0');
    var segundo_atual = data_atual.getSeconds().toString().padStart(2, '0');

    return [hora_atual, minuto_atual, segundo_atual];
}

export function dataAtual(){
    var data_atual = new Date();

    var dia_atual = data_atual.getDate().toString().padStart(2, '0');
    var mes_atual = (data_atual.getMonth() + 1).toString().padStart(2, '0');
    var ano_atual = data_atual.getFullYear().toString().padStart(4, '0');

    return[dia_atual, mes_atual, ano_atual];
}