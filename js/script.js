//Jogada de cada um
let letra = 'X'
function jogar (tab) {
    document.getElementById('tab11').innerHTML = ''  //Limpa o campo "Vencedor"

    click = document.getElementById(tab).innerHTML
    if (click == "X" || click == "O"){
       document.getElementById('tab10').innerHTML = 'Quadrado marcado!' //00 informa "quadrado marcado
    }else{
         document.getElementById(tab).innerHTML = letra
         if (letra == "X"){
             letra = "O"
             document.getElementById('tab14').innerHTML = 'Vez: O'
         }else{
             letra = "X"
             document.getElementById('tab14').innerHTML = 'Vez: X'
         }
         document.getElementById('tab10').innerHTML = ''   //00 retira "quadrado marcado"
    }
}

//Limpar tela do jogo
function resetar () {
    for(i=1; i<11; i++) {
        tabN = 'tab' + i
        document.getElementById(tabN).innerHTML = ''
    }
}

//Confere vencedor
let contX = 0, contY = 0
function conferir() {
    let vencedor
    let vencF
    
    let t1 = document.getElementById('tab1').innerHTML
    let t2 = document.getElementById('tab2').innerHTML
    let t3 = document.getElementById('tab3').innerHTML
    let t4 = document.getElementById('tab4').innerHTML
    let t5 = document.getElementById('tab5').innerHTML
    let t6 = document.getElementById('tab6').innerHTML
    let t7 = document.getElementById('tab7').innerHTML
    let t8 = document.getElementById('tab8').innerHTML 
    let t9 = document.getElementById('tab9').innerHTML

    if(
       (t1 != '' && t2 != '' && t3 != '' && t1 == t2 && t2 == t3) ||  //  -- 
       (t4 != '' && t5 != '' && t6 != '' && t4 == t5 && t5 == t6) ||  //  --
       (t7 != '' && t8 != '' && t9 != '' && t7 == t8 && t8 == t9) ||  //  --
       (t1 != '' && t4 != '' && t7 != '' && t1 == t4 && t4 == t7) ||  //  !
       (t2 != '' && t5 != '' && t8 != '' && t2 == t5 && t5 == t8) ||  //  !
       (t3 != '' && t6 != '' && t9 != '' && t3 == t6 && t6 == t9) ||  //  !
       (t1 != '' && t5 != '' && t9 != '' && t1 == t5 && t5 == t9) ||  //  \
       (t3 != '' && t5 != '' && t7 != '' && t3 == t5 && t5 == t7)     //  /
       ){
        vencedor = document.getElementById('tab14').innerHTML
        if(vencedor == 'Vez: O'){  //converte o vencedor e diminui caracteres
            vencF = 'X'
            contX = contX + 1
        }else{
            vencF = 'O'
            contY = contY + 1
        }
        document.getElementById('tab11').innerHTML = "Vencedor: " + vencF
        document.getElementById('tab14').innerHTML = ''
        document.getElementById('tab12').innerHTML = 'Jogador X = ' + contX
        document.getElementById('tab13').innerHTML = 'Jogador O = ' + contY
        resetar()
    }    
}

// zera o placar
function zerar() {
    contX = 0
    contY = 0
    document.getElementById('tab12').innerHTML = 'Jogador X = ' + contX
    document.getElementById('tab13').innerHTML = 'Jogador O = ' + contY
}