
import type { Vector2 } from './Vector2'

export class Food {
  private ele: HTMLElement
  private _position: Vector2

  constructor () {
    this.ele = document.getElementById('food')!
    this._position = { X: 0, Y: 0 }
    this.Generator()
  }

  get X () {
    return this.ele.offsetLeft
  }

  get Y () {
    return this.ele.offsetTop
  }

  get position (): Vector2 {
    return this._position
  }

  positionRandom (): Vector2 {
    this._position.X = Math.floor(Math.random() * 30) * 10
    this._position.Y = Math.floor(Math.random() * 30) * 10
    return this._position
  }

  // generate position
  Generator (): void {
    // this._position = this.Generator()
    this.positionRandom()
    this.ele.style.left = this._position.X + 'px'
    this.ele.style.top = this._position.Y + 'px'
  }
}
