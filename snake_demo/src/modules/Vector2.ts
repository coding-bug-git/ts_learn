interface IVector2 {
  X: number
  Y: number
}

export class Vector2 implements IVector2 {
  X: number
  Y: number
  constructor (x: number, y: number) {
    this.X = x
    this.Y = y
  }

  static add (v1: Vector2, v2: Vector2) {
    return new Vector2(
      v1.X + v2.X,
      v1.Y + v2.Y
    )
  }

  static get up () {
    return new Vector2(0, -1)
  }

  static get down () {
    return new Vector2(0, 1)
  }

  static get left () {
    return new Vector2(-1, 0)
  }

  static get right () {
    return new Vector2(1, 0)
  }

  static equals (v1: Vector2, v2: Vector2) {
    return v1.X === v2.X && v1.Y === v2.Y
  }
}
