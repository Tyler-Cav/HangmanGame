import inquirer from 'inquirer';

let wordArray = ['test', 'help', 'trying', 'quiz', 'exam']
let hangmanWordSelector = wordArray[Math.floor(Math.random() * wordArray.length)]
let guessesRemain = 7
let playerGuess = ''
for (let i = 0; i < hangmanWordSelector.length; i++) {
    playerGuess += '_ '
}
const playerGuessSameIndex = playerGuess.trim().split(' ')

console.log(hangmanWordSelector)
console.log(playerGuess)

function hangman() {
inquirer
.prompt([
    {
      type: 'input',
      name: 'guess',
      message: `Can you guess the ${hangmanWordSelector.length} letter word?`,
    }
  ])
  .then((response) => {
    if (response.guess.length !== 1) {
      console.log('You can only select one letter at a time')
      hangman()
    }
    else if (hangmanWordSelector.includes(response.guess)) {
        for (let i = 0; i < hangmanWordSelector.length; i++) {
            response.guess === hangmanWordSelector[i] ? playerGuessSameIndex[i] = response.guess : null
        }
        let rejoin = playerGuessSameIndex.join (' ')
        if (rejoin.includes('_') === false) {
          console.log('')
          console.log('Congrats, You\'ve Won!')
          console.log(`The word was ${hangmanWordSelector}`)
          console.log('')
        }
        else {
        console.log('')
        console.log(`Great! You still have ${guessesRemain} guesses remaining`)
        console.log(playerGuessSameIndex.join(' '))
        console.log('')
        hangman()
      }
    }
    else if (guessesRemain > 1) {
        guessesRemain--
        console.log('')
        if (guessesRemain === 1) {
            console.log(`Incorrect, you have ${guessesRemain} guess remaining`)
        } else{
            console.log(`Incorrect, you have ${guessesRemain} guesses remaining`)
        }

        console.log(playerGuessSameIndex.join(' '))
        console.log('')
        hangman()
    }
    else {
        console.log(`Sorry! You're all out of guesses. The word was ${hangmanWordSelector}. Thanks for playing`)
    }
  })
}
hangman()
