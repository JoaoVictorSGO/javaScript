//Função principal 
(function(){
    const dataAtual = DataAtual();
    setData(dataAtual);
})()

// Função para mostrar na pagina a data atual
function setData(dataAtual){
    const h1 = document.querySelector('#data');
    h1.textContent = dataAtual;
}

function DataAtual(){
    const nomeDoDia  = nomeDoDiaDaSemana(new Date().getDay()); // passa o numero da semana para função
    const dia = new Date().getDate(); // Retorna o dia
    const mes = mesEmPortugues(new Date().getMonth()); // Passa o numero do mẽs para funçãp
    const ano = new Date().getFullYear(); // Ano
    const horas = new Date().getHours(); // Horas
    let minutos = adicionarZero(new Date().getMinutes()); 
    
    return formatarData(nomeDoDia, dia, mes, ano, horas,minutos);
    
}

// Adionar um zero a esquerda quando o minuto for de 0-9
function adicionarZero(numero){
    return numero < 10? `0${numero}` : numero;
}

//Formata a data
function formatarData(nomeDoDia, dia, mes, ano, horas, minutos){
    return `${nomeDoDia}, ${dia} de ${mes} ${ano} ${horas}:${minutos}`;
}
//Retorna o mês em português
function mesEmPortugues(mes){
    
    const nome = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return  nome[mes]
    
}

// Retorna o nome do dia da semana
function nomeDoDiaDaSemana(diaDaSemana){
    const nome = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado']

    return nome[diaDaSemana]
}
