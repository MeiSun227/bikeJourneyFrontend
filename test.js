const obj = { a: 1, b: 2, c: 3, d: 4}

//obj.c = 5

console.log({ ...obj, c: +"5"})
