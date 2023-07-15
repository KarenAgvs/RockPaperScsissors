const rock =document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const userPointsSpan = document.getElementById('user-points')
const cpuPointsSpan=document.getElementById('cpu-points')
const moveBox= document.getElementById('move-box')
const userMoveSpan = document.getElementById('user-move')
const cpuMoveSpan = document.getElementById('cpu-move')
let cpPoints= 0;
let userPoints= 0

const getCPUChoice= () =>{

const choices = ['r','p','s']

let randomNumber= Math.floor(Math.random()*3)
let cpuChoice=choices[randomNumber]
return cpuChoice
console.log(cpuChoice)

}
getCPUChoice()

const ShowMoves = (userMove,cpuMove)=>{
    userMoveSpan.textContent=userMove
    cpuMoveSpan.textContent=cpuMove
}

let userChoice;

const won = ()=>{
    userPoints++
    userPointsSpan.textContent= userPoints
    moveBox.textContent= 'YOU WON :)'
    moveBox.style.color='green'
    
}
const lost = ()=>{
    cpPoints++
    cpuPointsSpan.textContent=cpPoints
    moveBox.textContent= 'YOU LOST :('
    moveBox.style.color='red'
}

const tie = ()=>{
    moveBox.textContent= 'TIE !'
    moveBox.style.color= 'white'
}

rock.addEventListener('click', ()=> {
    userChoice='r'
    let cpuChoice=getCPUChoice()
    checkWinner(userChoice,cpuChoice)
})

paper.addEventListener('click', ()=> {
    userChoice='p'
    let cpuChoice=getCPUChoice()
    checkWinner(userChoice,cpuChoice)
})

scissors.addEventListener('click', ()=> {
    userChoice='s'
    let cpuChoice=getCPUChoice()
    checkWinner(userChoice,cpuChoice)
})


const checkWinner = (userChoice, cpuChoice)=>{
    switch (userChoice+cpuChoice) {
        case 'rr':
            console.log(`User choice is ${userChoice} cpu choice is ${cpuChoice}, TIE`)
            tie()
            ShowMoves('Rock','Rock')
            break;

        case 'rp':
            console.log(`User choice is ${userChoice} cpu choice is ${cpuChoice}, YOU LOST`)
            lost()
            ShowMoves('Rock','Paper')
            break;

            case 'rs':
            console.log(`User choice is ${userChoice} cpu choice is ${cpuChoice}, YOU WON`)
            won()
            ShowMoves('Rock','Scissors')
            break;
            
            case 'pr':
                console.log(`User choice is ${userChoice} cpu choice is ${cpuChoice}, YOU WON`)
                won()
                ShowMoves('Paper','Rock')
                break;
            
            case 'pp':
                console.log(`User choice is ${userChoice} cpu choice is ${cpuChoice}, TIE`)
                tie()
                ShowMoves('Paper','Paper')
                break;
            case 'ps':
                console.log(`User choice is ${userChoice} cpu choice is ${cpuChoice}, YOU LOST`)
                lost()
                ShowMoves('Paper','Scissors')
                break;
            
            case 'sr':
                console.log(`User choice is ${userChoice} cpu choice is ${cpuChoice}, YOU LOST`)
                lost()
                ShowMoves('Scissors','Rock')
                break;
            
            case 'sp':
                console.log(`User choice is ${userChoice} cpu choice is ${cpuChoice}, YOU WON`)
                won()
                ShowMoves('Scissors','Paper')
                break
            
            case 'ss':
                console.log(`User choice is ${userChoice} cpu choice is ${cpuChoice}, TIE`)
                tie()
                ShowMoves('Scissors','Scissors')
        default:
            break;
    }
}
