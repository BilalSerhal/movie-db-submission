const express= require('express');
const app=express();
const port=3000

app.get('/', (req, res) => {
    res.send('ok')
  })
  app.get('/test', (req, res) => {
    res.send('{status:200, message:"ok}');
  })

  app.get('/time', (req, res) => { 
     res.send('{status:200,message : <time> 14:20  </time>}');
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})