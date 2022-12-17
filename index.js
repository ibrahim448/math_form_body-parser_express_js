const app = require("./app");
const PORT = 4000;



app.use((req,res)=>{
    res.send('404 Page not found')
});


app.listen(PORT,()=>{
    console.log(`server is running http://localhost:${PORT}`);
});