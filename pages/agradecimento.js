function pegarNota(){
    let nota = LocalStorage.getItem("nota")

   let paragrafoNota = document.querySelector(".paragrafo_nota")

   paragrafoNota.innerHTML = `Você selecionou ${nota} de 5`
}

pegarNota()