import express from 'express'
const app = express()

app.get('/', function (req, res) {
  res.send(`OpaFanss BOT IS ALREADY RUNNING ON PORT 3000

  `)
})
app.listen(3000)