// ==========================================================================
// 1. SISTEMA DE INSCRIÇÃO DA NEWSLETTER
// ==========================================================================
const caixaNewsletter = document.querySelector('.newsletter-box');
const campoEmail = caixaNewsletter.querySelector('input');
const botaoInscrever = caixaNewsletter.querySelector('button');

botaoInscrever.addEventListener('click', (e) => {
    e.preventDefault(); // Evita o recarregamento da página
    
    const email = campoEmail.value.trim();

    // Validação simples de e-mail usando Expressão Regular (Regex)
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (emailValido) {
        // Altera o conteúdo da caixinha com uma animação visual de sucesso
        caixaNewsletter.style.opacity = '0';
        
        setTimeout(() => {
            caixaNewsletter.innerHTML = `
                <h3 style="color: var(--cor-acento); margin-bottom: 10px;">✓ Inscrição Concluída!</h3>
                <p style="font-size: 14px; color: var(--texto-mutado);">
                    Prontinho! Seu e-mail (<strong>${email}</strong>) foi cadastrado. Prepare-se para receber o melhor da tecnologia todas as manhãs.
                </p>
            `;
            caixaNewsletter.style.opacity = '1';
            caixaNewsletter.style.transition = 'opacity 0.5s ease';
        }, 300);

    } else {
        // Feedback visual de erro caso o e-mail seja inválido
        campoEmail.style.borderColor = '#ff4757';
        campoEmail.style.animate = 'shake 0.3s'; // Ideia de efeito visual
        campoEmail.placeholder = 'Por favor, insira um e-mail válido!';
        campoEmail.value = '';

        // Restaura a cor da borda original após 2 segundos
        setTimeout(() => {
            campoEmail.style.borderColor = 'var(--borda)';
        }, 2000);
    }
});

// ==========================================================================
// 2. INTERATIVIDADE NO CABEÇALHO (SCROLL EFFECT)
// ==========================================================================
const cabecalho = document.querySelector('header');

window.addEventListener('scroll', () => {
    // Quando o usuário rolar mais de 50px para baixo, o header fica mais opaco e ganha sombra
    if (window.scrollY > 50) {
        cabecalho.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
        cabecalho.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
        cabecalho.style.padding = '15px 8%'; // Dá um efeito de "encolher" sutil
    } else {
        cabecalho.style.backgroundColor = 'rgba(15, 23, 42, 0.8)';
        cabecalho.style.boxShadow = 'none';
        cabecalho.style.padding = '20px 8%';
    }
});

// ==========================================================================
// 3. SIMULAÇÃO DE LEITURA DE ARTIGOS (UX)
// ==========================================================================
// Adiciona um evento de clique em todos os títulos de artigos para simular a navegação
const titulosArtigos = document.querySelectorAll('.card-title, .featured-title, .trending-title');

titulosArtigos.forEach(titulo => {
    titulo.addEventListener('click', (e) => {
        e.preventDefault();
        const nomeArtigo = titulo.innerText;
        
        // Criando um alerta elegante ou log para simular que o post abriria
        console.log(`Abrindo o artigo: "${nomeArtigo}"`);
        
        // Efeito rápido de piscar no título clicado para dar feedback de toque
        titulo.style.color = '#7dd3fc';
        setTimeout(() => {
            titulo.style.color = '';
        }, 300);
    });
});