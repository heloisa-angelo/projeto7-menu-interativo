let menu = prompt(`Escolha uma forma de pagamento: 
    1 - Cartão de crédito 
    2 - Cartão de débito 
    3 - Pix 
    4 - Boleto 
    5 - Encerrar`)
    do{
      switch(menu){
        case 1:
          alert('Você escolheu Cartão de crédito')
          break
        case 2:
          alert('Você escolheu Cartão de débito')
          break
        case 3:
          alert('Você escolheu Pix')
          break
        case 4:
          alert('Você escolheu Boleto')
          break
      }
    } while (menu != 5)