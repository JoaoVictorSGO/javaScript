function main() {
    const div = document.querySelector(".container div");
    const elementos = [
        { tag: "p", texto: "Frase 1" },
        { tag: "div", texto: "Frase 2" },
        { tag: "footer", texto: "Frase 3" },
        { tag: "section", texto: "Frase 4" }
    ]
    adicionarMensagem(criarTags(elementos), elementos, div);
}

function criarTags(objetoHTML) {
    const arrayDeTags = [];
    objetoHTML.forEach(tags => {
        const { tag: tagHTML } = tags;
        arrayDeTags.push(document.createElement(tagHTML));
    }
    )
    return arrayDeTags;
}

function adicionarMensagem(arrayDeTags, objetoHTML, div) {
    objetoHTML.forEach((objeto, index) => {
        const tagHTML = arrayDeTags[index];
        tagHTML.textContent = objeto.texto;
        div.appendChild(tagHTML);
    });

}


main();