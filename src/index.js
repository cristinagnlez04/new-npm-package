const messages = [
  "David",
  "Diana",
  "Ana Maria",
  "Isabela",
  "Antonio",
  "Norma",
  "Cristina",
  "Josué",
  "Katherine"
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)]
  console.log(message)
}

module.exports = {
  randomMsg
}