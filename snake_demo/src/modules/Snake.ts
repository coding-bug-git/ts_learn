/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Vector2 } from './Vector2'
export class Snake {
  head: HTMLElement
  bodys: HTMLCollection
  ele: HTMLElement
  positions: Vector2[]
  posLen = 2
  private _position: Vector2
  direction: Vector2
  nextDirection: Vector2
  isLive = true
  constructor () {
    this.ele = document.getElementById('snake')!
    this.head = document.querySelector('#snake>div')!
    this.bodys = this.ele.getElementsByTagName('div')
    this._position = new Vector2(0, 0)
    this.positions = [this._position]
    this.direction = new Vector2(1, 0)
    this.nextDirection = this.direction
  }

  get position (): Vector2 {
    return this._position
  }

  set position (vector2: Vector2) {
    if (vector2.X < 0 || vector2.X > 290 || vector2.Y < 0 || vector2.Y > 290) {
      this.isLive = false
      return
    }
    // console.log('vector2', vector2)

    // 更新positions
    this._position = vector2
    this.positions.unshift(vector2)
    this.positions = this.positions.slice(0, this.posLen)

    console.log(this.positions)

    Array.from(this.bodys).forEach((body, i) => {
      (body as HTMLElement).style.left = this.positions[i].X + 'px';
      (body as HTMLElement).style.top = this.positions[i].Y + 'px'
    })
    // move 成功 则需要往position 队列添加位置信息
    // this.positions.unshift

    // this.head.style.left = this._position.X + 'px'
    // this.head.style.top = this._position.Y + 'px'
  }

  move = () => {
    if (this.direction.X !== this.nextDirection.X && this.direction.Y !== this.nextDirection.Y) {
      this.direction = this.nextDirection
    }

    let v2 = new Vector2(this.direction.X * 10, this.direction.Y * 10)
    v2 = Vector2.add(this._position, v2)
    // console.log('v2 ', v2)
    this.position = v2
  }

  addBody = () => {
    this.posLen++
    const body = document.createElement('div')
    console.log(this.positions[this.positions.length - 1])

    body.style.left = this.positions[this.positions.length - 1].X + 'px'
    body.style.top = this.positions[this.positions.length - 1].Y + 'px'
    this.ele.insertAdjacentElement('beforeend', body)
  }
}

export class SnakeError extends Error {

}
