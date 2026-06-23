// Validando formulário
document.getElementById("formContato").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
    const feedback = document.getElementById("feedback");

    if (nome === "" || email === "" || mensagem === "") {
        feedback.textContent = "Por favor, preencha todos os campos obrigatórios.";
        feedback.classList.remove("text-success");
        feedback.classList.add("text-danger");
        return;
    }

    feedback.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
    feedback.classList.remove("text-danger");
    feedback.classList.add("text-success");

    this.reset();
});

// Mostrar e ocultar detalhes do produto!
const botoes = document.querySelectorAll(".ver-mais");

botoes.forEach(botao => {
    botao.addEventListener("click", function () {
        const detalhes = this.previousElementSibling;
        detalhes.classList.toggle("d-none");
        this.textContent = detalhes.classList.contains("d-none") ? "Ver mais" : "Ver menos";
    });
});
