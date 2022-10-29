import express from "express"

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  const { name } = req.body

  return res.json({ message: "Ola mundo" })
})

app.listen(3333, () => console.log("Server is listening 3333"))
