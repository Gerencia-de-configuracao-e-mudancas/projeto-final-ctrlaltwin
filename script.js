/* --- Lógica do Menu Lateral --- */
function toggleMenu() {
    const sidebar = document.getElementById("mySidebar");
    sidebar.classList.toggle("active");
}

// Fecha o menu se clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('.menu-toggle') && 
        !event.target.matches('.sidebar') && 
        !event.target.closest('.sidebar')) {
        
        const sidebar = document.getElementById("mySidebar");
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    }
}

/* --- Lógica de Copiar Link (Issue #9) --- */
function copiarLink(link, elementoBotao) {
    // Evita que a página role para o topo
    event.preventDefault();

    // API do navegador para copiar texto
    navigator.clipboard.writeText(link).then(() => {
        
        // Feedback Visual: Muda texto e cor
        const textoOriginal = "Copiar Link";
        elementoBotao.innerText = "Copiado! ✅";
        elementoBotao.style.backgroundColor = "#4cd137"; // Verde Sucesso
        
        // Volta ao normal depois de 2 segundos
        setTimeout(() => {
            elementoBotao.innerText = textoOriginal;
            elementoBotao.style.backgroundColor = ""; // Volta a cor original do CSS
        }, 2000);

    }).catch(err => {
        console.error('Erro ao copiar: ', err);
        alert("Erro ao copiar link.");
    });
}