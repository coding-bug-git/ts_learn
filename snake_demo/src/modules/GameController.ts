import { Food } from '@/modules/Food'
import ScorePanel from '@/modules/ScorePanel'
import { Snake } from '@/modules/Snake'
import { Vector2 } from '@/modules/Vector2'

type Keymap = {
  w: Vector2
  s: Vector2
  a: Vector2
  d: Vector2
}

class GameController {
  deadMsg = document.getElementById('deadMsg')!
  interval: NodeJS.Timer | undefined
  snake: Snake
  food: Food
  scorePanel: ScorePanel

  keydown = 'd'
  keyMap = {
    w: Vector2.up,
    s: Vector2.down,
    a: Vector2.left,
    d: Vector2.right

  }

  constructor () {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()
    setTimeout(this.init.bind(this), 100)
    // this.init()
  }

  update () {
    // console.log('update')

    this.snake.move()
    this.checkRigd()
    if (!this.snake.isLive) {
      this.deadMsg.style.display = ''
      clearInterval(this.interval as NodeJS.Timer)
    }
    // speed 150
    this.interval = setTimeout(this.update.bind(this), 150 - (this.scorePanel.level) * 30)
  }

  init () {
    console.log('start')
    // 键盘时间
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.update()
  }

  keydownHandler (event: KeyboardEvent) {
    if (Object.keys(this.keyMap).indexOf(event.key) !== -1) {
      this.snake.nextDirection = this.keyMap[event.key as keyof Keymap]
    }
  }

  checkRigd () {
    if (Vector2.equals(this.snake.position, this.food.position)) {
      this.food.Generator()
      this.scorePanel.addScore()
      this.snake.addBody()
    }
  }
}

export default GameController
