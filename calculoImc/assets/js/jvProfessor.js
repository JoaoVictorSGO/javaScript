// Capturar evento de submit do formul
const form = document.querySelector('#form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Para não deixar a pagina carregar
    const inputPeso = event.target.querySelector("#peso");// .target quem está recebendo esse evento/ se for um click ele vai retonar o elemento que foi clicado.
    const inputAltura = event.target.querySelector("#altura"); // de onde estou selecionando


    const peso = Number(inputPeso.value); // Caso não seja um numero ele retorna um NaN = false
    const altura = Number(inputAltura.value);

    // Verificação para ver se o dado é um valor valido ou não
    if (!peso){
        setResultado("Peso inválido!", false);
        return; // Se o cliente digitar algum valor invlidi vai ativar a função e logo em seguinda vai parar no return que vai retonar nenhum valor e vai parar a aplicação
    }
    if (!altura){
        setResultado("Altura inválida!", false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = getNivelIMC(imc);
  
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});

//Funçãp para criar um nivel imc
function getNivelIMC(imc){
    const nivel = [" Abaixo do peso!", "Peso normal!", "Sobrepeso!", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"]

    // Como o return vai parar a aplicação não a motivo para colocar else if
    if(imc >= 39.9){
        return nivel[5];
    }

    if(imc >= 34.9){
        return nivel[4];
    }

    if(imc >= 29.9){
        return nivel[3];
    }

    if (imc >= 24.9){
        return nivel[2];
    }

    if (imc >= 18.5){
        return nivel[1];
    }else if (imc < 18.5){
        return nivel[0];
    }
}

// Função para fazer o calculo imc
function getImc(peso, altura){ // /Retorna o valor do imc
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

// Função para adicionar na pagina o resultado
function setResultado(msg, isvalid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ``;
    const p = criaP();

    if (isvalid) {// O flag serve para mudança de cor
        p.classList.add('paragrafo-resultado');  // Ele cria uma clase em cada escoplo do código
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg; 
    resultado.appendChild(p); //para adicionar em p um objeto que seria uma paragrafo
    
}

//Função para criar a tag paragrafo
function criaP(){
    const p = document.createElement('p'); // create elsement cria tags no html
    return p;

}