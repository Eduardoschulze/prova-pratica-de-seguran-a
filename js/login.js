
let usuario = document.querySelector('#usuario')
let senha = document.querySelector('#senha')
let btnEntrar= document.querySelector('#btnEntrar')
let mensagem = document.querySelector('#mensagem')

btnEntrar.addEventListener('click', () => {


    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    let userEncontrado = listaUser.find((item) => item.usuario === usuario.value)

    let senhaHash = CryptoJS.SHA512(senha.value).toString()

    if(!userEncontrado || userEncontrado.senha !==senhaHash){
    mensagem.innerHTML = "Usuario ou senha incorreto"
    return
    }

    localStorage.setItem('userEncontrado', JSON.stringify({
    nome:userEncontrado.nome,
    usuario:userEncontrado.usuario
    }))

    window.location.href = 'index.html'
    })

