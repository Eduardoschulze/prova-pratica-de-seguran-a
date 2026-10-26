let nome = document.querySelector('#nome')
let usuario = document.querySelector('#usuario')
let senha = document.querySelector('#senha')
let btnCadastrar= document.querySelector('#btnCadastrar')
let mensagem = document.querySelector('#mensagem')

btnCadastrar.addEventListener('click', ()=> {
    console.log ('Nome digitado:',nome.value)

let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

let jaExiste = listaUser.some((item) => item.usuario ===usuario.value)

if(jaExiste) {
    mensagem.innerHTML = 'Esse usuario ja esta em uso'
    return
}

let senhaHash = CryptoJS.SHA512(senha.value).toString()

listaUser.push({
    nome: nome.value,
    usuario: usuario.value,
    senha: senhaHash
})

localStorage.setItem('listaUser', JSON.stringify(listaUser))

mensagem.innerHTML = "Cadastro concluido"

setTimeout(() =>{
    window.location.href = 'login.html'
}, 2000)

})

