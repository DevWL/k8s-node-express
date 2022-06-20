import express from "express"
import os from 'os'

const app = express()
const PORT = 3000

// paths
const HOME = "/"

app.get(HOME, (req, res) => {
    const helloMessage = `Hellow from the ${os.hostname()}`
    console.log(helloMessage)
    res.send(helloMessage)
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});