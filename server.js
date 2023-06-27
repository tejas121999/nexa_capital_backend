const app = require("./index")
const PORT = process.env.NODE_PORT || 5000


app.listen(PORT, () => {
    console.log(`Example app listening at port http://localhost:${PORT}`)
})
