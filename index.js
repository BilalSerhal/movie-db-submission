const express= require('express');
const app=express();
const port=3000

const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]





app.get("/movies/create",(req, res) => {
    res.send('ok')

  })

  app.get("/movies/read",(req, res) => {
    const response={
        status:200,data:movies
    }
    res.send(response)
  })

  app.get("/movies/read-by-date",(req,res)=>{
    movies.sort((a,b)=>(a.year > b.year) ? 1 :-1);
    const response = {
      status: 200, data: movies
    };
    res.send(response)
  })

  app.get("/movies/read-by-rating",(req,res)=>{
    movies.sort((a,b)=>(a.rating > b.rating) ? 1 :-1);
    const response = {
      status: 200, data: movies
    };
    res.send(response)
  })

  app.get("/movies/read-by-title",(req,res)=>{
    movies.sort((a,b)=>(a.title > b.title) ? 1 :-1);
    const response = {
      status: 200, data: movies
    };
    res.send(response)
  })
  
app.get("/movies/read/id/:id",(req,res)=>{
  const {id}= req.params
  if(movies.length >= id){
    const response = {
      status: 200, data: movies[id-1]
    }
    res.send(response)
  }else{
    const response = {
      status: 404, data: "Not found"
    }
    res.send(response)
  }
})
  app.get("/movies/update",(req, res) => {
    res.send('ok')
  })

  app.get("/movies/delete",(req, res) => {
    res.send('ok')
  })



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

