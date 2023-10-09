// Função para exibir mensagens de erro
function showError(message) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = message;
}

// Função para verificar se o email é válido
function isValidEmail(email) {
    // Implemente sua lógica de validação de email aqui
    // Você pode usar uma expressão regular ou outras técnicas de validação
    return true; // Retorne true se o email for válido, caso contrário, retorne false
}

// Função para verificar se a quantia foi preenchida
function isAmountFilled() {
    const amountInput = document.querySelector(".Form_money input");
    return amountInput.value.trim() !== "";
}

// Função de validação completa
function validateDonation() {
    
    const emailInput = document.getElementById("emailInput");

    // Verificar se o email é válido
    if (!isValidEmail(emailInput.value)) {
        showError("Email incorreto. Por favor, insira um email válido.");
        return;
    }

    // Verificar se a quantia foi preenchida
    if (!isAmountFilled()) {
        showError("Por favor, preencha o campo de quantia.");
        return;
    }

    // Se todas as validações passarem, redirecione para a página de sucesso
    window.location.href = "pagina_de_sucesso.html";
}

// Adicionar um ouvinte de evento ao botão "I wanna Help!" para chamar a função de validação
const helpButton = document.getElementById("I_wanna_help");
helpButton.addEventListener("click", validateDonation);
