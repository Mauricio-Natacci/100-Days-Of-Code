const firstButtonElement = document.querySelector('button')
const secondButtonElement = document.getElementById('change-bg-btn')

const firstParagraphElement = document.body.children[2].children[1]
const thirdParagraphElement = document.body.children[2].children[3]

function removeParagraph() {
  thirdParagraphElement.remove()
}

firstButtonElement.addEventListener('click', removeParagraph)

function changeBackgroundColor() {
  firstParagraphElement.classList.add('bg-color')
}

secondButtonElement.addEventListener('click', changeBackgroundColor)
