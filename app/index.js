var express        =        require("express");
var bodyParser     =        require("body-parser");
var app            =        express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/',function(req,res){
  var msg=req.body.message;
  console.log("msg is : ",msg);
  res.end("ok");
});


app.listen(5000,function(){
  console.log("Started on PORT 5000");
})
