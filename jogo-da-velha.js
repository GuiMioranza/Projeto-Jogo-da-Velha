const quadrados = document.querySelectorAll(".quadrado")
let checaTurno = true
const jogadorX = "X"
const jogadorO = "O"
const combinacoesvencedoras = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]


document.addEventListener("click", (event) => {
  if(event.target.matches(".quadrado")){
    jogar(event.target.id)
  }
})

function jogar(id) {
  const quadradoClicado = document.getElementById(id)
  let turno = checaTurno ? jogadorX : jogadorO
  quadradoClicado.textContent = turno
  quadradoClicado.classList.add(turno)
  //checaTurno = !checaTurno
  checarVencedor(turno)
}

function checarVencedor(turno) {
  const vencedor = combinacoesvencedoras.some((combinacao) => {
    return combinacao.every((index) => {
      return quadrados(index).classList.conteins(turno)
    })
  }