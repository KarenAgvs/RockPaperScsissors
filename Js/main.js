const rock =document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

const getCPUChoice= () =>{
const choices = ['r','p','s']

let randomNumber= Math.floor(Math.random()*3)
let cpuChoice=choices[randomNumber]
return cpuChoice
console.log(cpuChoice)

}
getCPUChoice()

let userChoice;

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
            break;

        case 'rp':
            console.log(`User choice is ${userChoice} cpu choice is ${cpuChoice}, YOU LOST`)
            break;

            case 'rs':
            console.log(`User choice is ${userChoice} cpu choice is ${cpuChoice}, YOU WON`)
            break;
            
            case 'pr':
                console.log(`User choice is ${userChoice} cpu choice is ${cpuChoice}, YOU WON`)
                break;
            
            case 'pp':
                console.log(`User choice is ${userChoice} cpu choice is ${cpuChoice}, TIE`)
                break;
            case 'ps':
                console.log(`User choice is ${userChoice} cpu choice is ${cpuChoice}, YOU LOST`)
                break;
            
            case 'sr':
                console.log(`User choice is ${userChoice} cpu choice is ${cpuChoice}, YOU LOST`)
                break;
            
            case 'sp':
                console.log(`User choice is ${userChoice} cpu choice is ${cpuChoice}, YOU WON`)
            
            case 'ss':
                console.log(`User choice is ${userChoice} cpu choice is ${cpuChoice}, TIE`)
        default:
            break;
    }
}
