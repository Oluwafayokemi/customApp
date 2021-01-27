import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import { userModel } from './models/model1'

const app = express()

const port = 3000

// Set up BodyParser.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

// Render the CSS Files
app.use(express.static("public"));

const item = [{ a: 1 }, { b: 2 }]

app.get('/', (req: any, res: any) => {
  res.send('Hello World!')
})

app.post('/', (req: any, res: any) => {
  res.json({ data: item })
})

app.post("/user", async (req: any, res: any) => {
  try {
    const newUser = req.body;
    // Add the new task from the post route.
    const userRes = await userModel.addUser(newUser)
    return res.json(userRes)
  }
  catch (err) {
   return res.status(500).json("something went wrong")
  }

});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`)
})

export default app;