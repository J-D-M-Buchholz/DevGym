//Test API

import { contactController } from "@/controller/contact/contactController"
import connectDB from "@/db/connect"
import express from "express"

const app = express()

// app.get('/api/contact/contact', (req: express.Request, res: express.Response) => {
//     res.send('Get Hello');
// });

// app.post('/api/contact/contact', (req: express.Request, res: express.Response) => {
//     res.send('Post Hello');
// });

app.post("/api/contact/contact", contactController)
;(async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    console.log("MongoDB is connected !")
  } catch (error) {
    console.log(error)
  }
})()

export default app
