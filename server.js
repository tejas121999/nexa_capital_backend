const app = require("./app")
const PORT = process.env.NODE_PORT || 5000


app.listen(PORT, "0.0.0.0", () => {
    console.log(`Example app listening at port http://localhost:${PORT}`)
})
