
export default class ScorePanel {
  score: number
  level: number
  maxLevel: number
  scoreEle: HTMLElement
  levelEle: HTMLElement
  constructor (maxLevel = 10) {
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('level')!
    this.score = 0
    this.level = 1
    this.maxLevel = maxLevel
  }

  addScore () {
    this.scoreEle.innerText = ++this.score + ''
    if (this.score % 5 === 0) {
      this.levelUp()
    }
  }

  levelUp () {
    if (this.level < this.maxLevel) { this.levelEle.innerText = ++this.level + '' }
  }
}
