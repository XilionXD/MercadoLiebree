const express = require('express');
const app = express();
const path = require('path')
const port = process.env.PORT || 3000
// app.use('/static', express.static(__dirname + '/public'));

app.use(express.static(path.resolve(__dirname, "./public")));

app.listen(port, () =>
  console.log(`Mercado Liebre Server corriendo en puerto ${port}` )
);



app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});