function init(){

const cellElements = document.querySelectorAll('.cell')
const boardElement = document.getElement

const restartbutton = document.querySelector('.restart')



const board = document.querySelector('.board')
const scoreDisplay = document.querySelector('#score-display')






const width = 10
const gridCellCount = width * width
const cells = []

console.log(cellElements)


function clickcell(event){
event.target.classList.add('box')
event.target.classList.add('X')
event.target.classList.add('O')




  





console.log('cliked')



}







const Player_X_Class = 'X'
const Player_O_Class = 'O'




// startGame()
cellElements.forEach(cell => {
    cell.addEventListener('click', clickcell)
})







   }

window.addEventListener('DOMContentLoaded', init)