/* SAUDAÇÃO AUTOMÁTICA */
console.log("Script carregado!");
console.log(document.getElementById("saudacao"));
console.log(document.getElementById("tema"));
console.log(document.querySelector(".vitor h2"));
console.log(document.querySelectorAll(".card").length);
function mostrarSaudacao() {

    const saudacao = document.getElementById("saudacao");

    if (!saudacao) return;

    const hora = new Date().getHours();

    if (hora < 12) {

        saudacao.textContent = "☀️ Bom dia! Seja bem-vindo.";

    } else if (hora < 18) {

        saudacao.textContent = "🌤️ Boa tarde! Seja bem-vindo.";

    } else {

        saudacao.textContent = "🌙 Boa noite! Seja bem-vindo.";

    }

}

mostrarSaudacao();



/* MODO ESCURO */

const botaoTema = document.getElementById("tema");

if (botaoTema) {

    botaoTema.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const icone = botaoTema.querySelector("i");

        if (document.body.classList.contains("dark-mode")) {

        icone.classList.remove("fa-sun");
        icone.classList.add("fa-moon");
        } else {
        icone.classList.remove("fa-moon");
        icone.classList.add("fa-sun");
        }
        

    });

}

/* EFEITO DE DIGITAÇÃO */

const titulo = document.querySelector(".vitor h2");

if(titulo){

    const texto = titulo.textContent;

    titulo.textContent = "";

    let i = 0;

    function escrever(){

        if(i < texto.length){

            titulo.textContent += texto.charAt(i);

            i++;

            setTimeout(escrever,120);

        }

    }

    escrever();

}
/* Parte feita dia 29/06*/