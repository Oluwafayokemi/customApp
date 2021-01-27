import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

const port = 4000

// Set up BodyParser.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.static('client'))

const item = [{ a: 1 }, { b: 2 }]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  res.json({data: item})
})

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`)
})