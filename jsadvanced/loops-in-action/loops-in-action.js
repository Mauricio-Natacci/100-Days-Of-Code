// First Example: Sum numbers

const calculateSumButtonElement = document.querySelector('#calculator button')

function calculateSum() {
  const userNumberInputElement = document.getElementById('user-number')
  const enteredNumber = userNumberInputElement.value

  let sumUpToNumber = 0

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i
  }

  const outputResultElement = document.getElementById('calculated-sum')

  outputResultElement.textContent = sumUpToNumber
  outputResultElement.style.display = 'block'
}

calculateSumButtonElement.addEventListener('click', calculateSum)

//Display user data

const dummyUserData = {
  firstName: 'Max',
  lastName: 'Schwarzmüller',
  age: 32
}

const displayUserDataButtonElement = document.querySelector('#user-data button')

function displayUserData() {
  const outputDataElement = document.getElementById('output-user-data')

  outputDataElement.innerHTML = ''

  for (const key in dummyUserData) {
    const newUserDataListItemElement = document.createElement('li')
    const outputText = key.toUpperCase() + ': ' + dummyUserData[key]
    newUserDataListItemElement.textContent = outputText
    outputDataElement.append(newUserDataListItemElement)
  }
}

displayUserDataButtonElement.addEventListener('click', displayUserData)

//Statistics / Roll the Dice

const rollDiceButtonElement = document.querySelector('#statistics button')

function rollDice() {
  return Math.floor(Math.random() * 6) //Math.floor(): 5.64 => 5
}

function deriveNumberODiceRolls() {
  const targetNumberInputElement = document.getElementById('user-target-number')
  const diceRollsListElement = document.getElementById('dice-rolls')

  const enteredNumber = targetNumberInputElement.value
  diceRollsListElement.innerHTML = ''

  let hasRolledTargetNumber = false
  let numberofRolls = 0

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice()

    numberofRolls++
    const newRollListItemElement = document.createElement('li')
    const outputText = 'Roll' + numberofRolls + ': ' + rolledNumber
    newRollListItemElement.textContent = outputText
    diceRollsListElement.append(newRollListItemElement)
    hasRolledTargetNumber = rolledNumber == enteredNumber
  }
}

rollDiceButtonElement.addEventListener('click', deriveNumberODiceRolls)
