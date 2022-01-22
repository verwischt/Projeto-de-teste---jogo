import express from 'express'
import http from 'http'
import createGame from './public/Rules.js'

const app = express()
const server = http.createServer(app)

app.use(express.static('public'))

const game = createGame()

game.addPlayer({playerId: 'player1', playerX: 0, playerY: 0})
game.addFruit({fruitId: 'fruit1', fruitX: 5, fruitY: 0})
game.addPlayer({playerId: 'player2', playerX: 9, playerY: 2})
game.addFruit({fruitId: 'fruit2', fruitX: 6, fruitY: 3})

console.log(game.state)

server.listen(3000, () => {
    console.log('> Server listening on port: 3000')
})