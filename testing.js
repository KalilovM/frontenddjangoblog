const a = "http://localhost:8000/media/test_WE2BKuA.webp"
const b = a.match(/\w+\.[0-9a-z]+$/i)[0]
console.log(b)