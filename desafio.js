function comprarCarta() {

   const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

   const naipes = ["♦️", "♥️", "♣️", "♠️"]

   const numero = cartas[Math.floor(Math.random() * 13)]

   const naipe = naipes[Math.floor(Math.random() * 4)]

   let valor


   if (numero === "A") {
      valor = 11
   } else if (numero === "J" || numero === "Q" || numero === "K") {
      valor = 10
   } else {
      valor = Number(numero)
   }


   const carta = {
      texto: numero + naipe,
      valor: valor

   }

   return carta

}

let inicio = confirm("Bem vindo ao BlackJack!\nGostaria de iniciar o jogo?")
if (inicio == true) {
   let usuario
   let pontos = []
   let cards = []
   let soma = 0

   for (let i = 0; i < 2; i++) {

      usuario = comprarCarta()
      pontos.push(usuario.valor)
      cards.push(usuario.texto)
      if ((cards[0].includes("A") == true) && (cards[1].includes("A") == true)) {
         comprarCarta()
         cards[1] = cards.push(usuario.texto)
         pontos[1] = pontos.push(usuario.valor)

      }
      soma += pontos[i]

   }


   let computador
   let pontos2 = []
   let cardsComput = []
   let soma2 = 0


   for (let i = 0; i < 2; i++) {
      computador = comprarCarta()


      pontos2.push(computador.valor)
      cardsComput.push(computador.texto)
      if ((cards[0].includes("A") == true) && (cards[1].includes("A") == true)) {
         comprarCarta()
         cardsComput[1] = cards.push(usuario.texto)
         pontos2[1] = pontos2.push(usuario.valor)



      }
      soma2 += pontos2[i]
   }



   do {
      comprarMais = confirm(`Jogador 1 - Cartas: ${cards}, Pontuação: ${soma}\nComputador - Carta revelada do computador é: ${cardsComput[0]}\nDeseja comprar mais uma carta?`)
      if (comprarMais == false) { break }
      usuario = comprarCarta()
      soma += usuario.valor
      cards.push(usuario.texto)

      if (soma > 21) {
         alert("Pontuação excedida!!\nVocê perdeu!")
         break
      }
   } while (comprarMais == true)




   do {
      if (soma > 21) { break }
      computador = comprarCarta()
      if (soma2 < soma && soma2 <= 20) {

         soma2 += computador.valor
         cardsComput.push(computador.texto)
      } else if (soma2 > 21) {
         alert(`Computador excedeu a pontuação: ${soma2}`)
         break



      }
   } while (soma2 < soma && soma2 <= 20)



   if ((soma > 21 && soma2 <= 21) || (soma2 > soma && soma2 <= 21)) {
      alert(`Jogador 1 - Cartas: ${cards}, Pontuação: ${soma}\nComputador - Cartas: ${cardsComput} - Pontuação: ${soma2}\nVocê perdeu!`)
   } else if ((soma > soma2) || ((soma <= 21) && (soma2 > 21))) {
      alert(`Jogador 1 - Cartas: ${cards}, Pontuação: ${soma}\nComputador - Cartas: ${cardsComput} - Pontuação: ${soma2}\nVocê venceu!`)
   } else if (soma == soma2) {
      alert(`Jogador 1 - Cartas: ${cards}, Pontuação: ${soma}\nComputador - Cartas: ${cardsComput} - Pontuação: ${soma2}\nJogo empatado!`)

   }
} else { alert("Até a próxima oportunidade.") }


