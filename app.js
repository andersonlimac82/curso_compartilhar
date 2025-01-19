class App {
    constructor() {
        this.amigos = [];
    }

    adicionarAmigo() {
        const input = document.getElementById("amigo"); 
        const nome = input.value.trim(); 
        if (nome) {
            this.amigos.push(nome); 
            console.log(this.amigos); 
            input.value = ""; 
        } else {
            alert("Por favor, insira um nome válido.");
        }
    }

    sortearAmigo() {
        if (this.amigos.length === 0) {
            alert("A lista de amigos está vazia! Adicione pelo menos um amigo.");
            return;
        }

        const indiceAleatorio = Math.floor(Math.random() * this.amigos.length);
        const amigoSorteado = this.amigos[indiceAleatorio];
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = ""; 
        const li = document.createElement("li");
        li.textContent = `Amigo sorteado: ${amigoSorteado}`;
        resultado.appendChild(li);

        console.log(`Amigo sorteado: ${amigoSorteado}`);
    }



}

var app = new App();
