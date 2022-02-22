let ParagraphElement = document.querySelector('p')

function changeParagraphText(event) {
  ParagraphElement.textContent = 'Clicked!'
  console.log('Paragraph clicked')
  console.log(event)
}

ParagraphElement.addEventListener('click', changeParagraphText)

let inputElement = document.querySelector('input')

function retrieveUserInput(event) {
  //let enteredText = inputElement.value // equal
  let enteredText = event.target.value //equal
  //let enteredText = event.data = > This is different!
  console.log(enteredText)
  //console.log(event)
}

inputElement.addEventListener('input', retrieveUserInput)
