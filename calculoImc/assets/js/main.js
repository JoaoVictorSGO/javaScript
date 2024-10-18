(function (){
    const form = document.querySelector('form');

    form.addEventListener('submit', evento => {
        evento.preventDefault();
        let peso = form.querySelector("#input-teste-1").value;
        let altura = form.querySelector("#input-teste-2").value;
        const resultado = document.querySelector(".resultado");

        peso = peso.replace(",", ".");
        altura = altura.replace(",", ".");

        if (isNaN(peso) || isNaN(altura)) {
            resultado.textContent = "O valor digitado não é um numero!"
            return;
        }

        let imc = Number(peso) / (Number(altura) * Number(altura));


        if (imc <= 18.5) {
            resultado.textContent = "Seu IMC é: " + imc.toFixed(2) + ". Você está abaixo do peso!";
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultado.textContent = "Seu IMC é: " + imc.toFixed(2) + ". Você está com peso normal!";
        } else if (imc >= 25 && imc <= 29.9) {
            resultado.textContent = "Seu IMC é: " + imc.toFixed(2) + ". Você está com sobrepeso!";
        } else if (imc >= 30 && imc <= 34.9) {
            resultado.textContent = "Seu IMC é: " + imc.toFixed(2) + ". Você está com obesidade grau 1"
        } else if (imc >= 35 && imc <= 39.9) {
            resultado.textContent = "Seu IMC é: " + imc.toFixed(2) + ". Você está com obesidade grau 2"
        } else {
            resultado.textContent = "Seu IMC é: " + imc.toFixed(2) + ". Você está com obesidade grau 3"
        }




    })

})()



