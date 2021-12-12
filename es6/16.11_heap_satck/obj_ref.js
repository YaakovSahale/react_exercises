const p1 = {
    name:`koby`,
    age: 28,
    city: `ashdod`
}

// const p2 = JSON.parse(JSON.stringify(p1))

const p2 = Object.assign({},p1)

console.log(p1);
console.log(p2);
console.log(p1 == p2);