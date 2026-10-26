let userLogado = JSON.parse(localStorage.getItem('userLogado'))

if(!userLogado) {
    alert('voce precisa estar logado')
    window.location.href = "login.html"
}