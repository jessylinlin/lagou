class Left {
    static of(value) {
        return new Left(value)
    }
    constructor(value) {
        this._value = value
    }

    map(fn) {
        return this
    }
}

class Right {
    static of(value) {
        return new Right(value)
    }
    constructor(value) {
        this._value = value
    }

    map(fn) {
        return Right.of(fn(this._value))
    }
}
// let r1 = Right.of(12)
//   .map(x => x + 2)

// let r2 = Left.of(12)
//   .map(x => x + 2)

// console.log(r1, r2)
function parseJson(str) {
    try {
        return Right.of(JSON.parse(str))
    } catch (e) {
        return Left.of({ error: e.message })
    }
}

// let r = parseJson('{name: zs}')
let r = parseJson('{"name": "zs"}')
    .map(x => x.name.toUpperCase())
console.log(r)