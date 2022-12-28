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

app.get("/hello/:id", (req,res)=>{
    const {id} = req.params;
    res.send(`{status:200, message: ${id} }`) 
 })

 app.get('/search',(req,res) => {
    const search = req.query.s;
    if (typeof search != 'undefined') {
        const response = {
            status:200, message:"ok", data: search
        };
        res.send(response);
    }
    else {
        const response = {
            status:500, error:true, message: "you have to provide a search"
        };
        res.status(500);
        res.send(response);
    }
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})