import express from 'express'




const app = express();

const port = process.env.PORT || 3000


app.use(express.static('router'));

app.get('/' , (req , res) => {
  res.send('welcome to server')
})





app.listen(port,()=>{
  console.log('server is run')
})