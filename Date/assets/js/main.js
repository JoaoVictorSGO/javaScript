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
    const minutos = new Date().getMinutes(); // Minutos
    return formatarData(nomeDoDia, dia, mes, ano, horas,minutos);
    
}

//Formata a data
function formatarData(nomeDoDia, dia, mes, ano, horas, minutos){
    return `${nomeDoDia}, ${dia} de ${mes} ${ano} ${horas}:${minutos}`;
}
//Retorna o mês em português
function mesEmPortugues(mes){
    
    const nome = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    for (let i = 0; i < nome.length; i++) { // O for pecorre o array 
        if (i == mes){ // se o numero do mes for igual o número do contador ele retorna o mês
            return nome[i];
        }
    }
}

// Retorna o nome do dia da semana
function nomeDoDiaDaSemana(diaDaSemana){
    const nome = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado']

    for(let i = 0; i < nome.length; i++) {
        if (i == diaDaSemana){ // se o dia da semana for igual o valor do index do array ele retorna
            return nome[i];
        }
    }
}
