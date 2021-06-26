const { log } = console

const p1 = {
    firstname: 'lei',

    lastname: 'wang',
    //只读属性
    get fullName() {
        return this.firstname + '' + this.lastname
    }
}
// const p2 = Object.assign({}, p1)
// p2.firstname = 'lin'
// log(p2)


// const desc = Object.getOwnPropertyDescriptors(p1)

// log(desc)
// const p2 = Object.defineProperties({}, desc)
// p2.firstname = 'lin'
// log(p2.fullName)

const books = {
    html: 5,
    css: 16,
    javascript: 128
}

for (let [name, count] of Object.entries(books)) {
    log(`${name.padEnd(16, '-')} | ${count.toString().padStart(3, 0)}`)
}