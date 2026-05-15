require('dotenv').config()
const express = require('express')

const app = express()

//virtual port 

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter' , (req,res) => {
    res.send('rishigowda')
})

app.get('/login' ,(req,res) => {
    res.send('<h1>please login at rishigowda</h1>')
})

app.get('/youtube' , (req,res) => {
    res.send('<h2>rish aur code</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})