let number = document.getElementById('number')
let generate = document.querySelector('button')



function generateRandomNumber() {
  number.textContent = Math.floor(Math.random() * 50)
}

generate.addEventListener('click', generateRandomNumber)