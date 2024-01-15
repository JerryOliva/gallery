let express= require('express')
const { createServer } = require('http')
let path = require('path')
const { env } = require('process')
const app = express()
app.use('/home' , express.static('public'))

PORT = process.env.PORT | 3000

app.listen(PORT,()=>
{
    console.log(`Server live and listening in port: ${PORT}`)
})
    


