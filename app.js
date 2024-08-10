//* função para exibir textos de saída 
exibirTextoSaida = (tag, texto) => {
    let textoSaida = document.querySelector(tag);
    textoSaida.innerHTML = texto;       
}

//* ocultar imagem, limpar o h2 e mostrar o botão copiar
output = () => {
    document.getElementById("raposa-img").style.display = "none";
    exibirTextoSaida("h3", " ");
    
    const copiarTexto = document.getElementById("botaoCopiar");
    copiarTexto.style.visibility = "visible";
    copiarTexto.style.pointerEvents = "auto";

    const textoVisivel = document.getElementById("textoOutput");
    textoVisivel.style.visibility = "visible";
}

//*função para remover diacriticos
removeDiacritics = (str) => {
    return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z\s]/g, "");
}

//*função para criptografar o texto
criptografar = () => {
    const inputTexto = document.querySelector("#inputTexto").value;

    if (inputTexto.trim() != ""){
        const textoCriptografado = removeDiacritics(inputTexto.toLowerCase())
                .replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
            
            exibirTextoSaida("h2", textoCriptografado);
            output();

            document.getElementById("inputTexto").value = ""; 
    } else {
        alert("Digite um texto válido para ser criptografado.")
        return 1;
    }
}

//*função para descriptografar o texto
descriptografar = () => {
    const inputTexto = document.querySelector("#inputTexto").value;

    if (inputTexto.trim() != ""){
        const textoDescriptografado = inputTexto.toLowerCase()
                .replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
            
            exibirTextoSaida("h2", textoDescriptografado);
            output();

            document.getElementById("inputTexto").value = ""; 
    } else {
        alert("Digite um texto válido para ser descriptografado")
        return 1;
    }
}

botaoCopiarTexto = () => {
    const textoCopiado = document.getElementById("textoOutput").innerHTML;

    navigator.clipboard.writeText(textoCopiado).then( () => {
        document.getElementById("textoOutput").innerText = "";
        document.getElementById("textoOutput").style.visibility = "hidden";

        alert("Texto copiado.");
    }).catch(err => {
        console.error("Erro ao copiar o texto: ", + err);
        alert("Erro ao copiar o texto");

    })
    
}

document.getElementById("btnCriptografar").addEventListener("click", criptografar);
document.getElementById("btnDescriptografar").addEventListener("click", descriptografar);
document.getElementById("botaoCopiar").addEventListener("click", botaoCopiarTexto);


