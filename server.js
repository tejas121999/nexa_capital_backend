const app = require("./index")
const PORT = process.env.NODE_PORT || 5000
console.log(PORT)
console.log("my name", process.env.my_name)

app.listen(PORT, () => {
    console.log(`Example app listening at port http://localhost:${PORT}`)
})
