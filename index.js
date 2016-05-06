var express = require("express"),
    app = express(),
    router = express.Router();

app.use("/v1", require("./routes/personas"));

app.listen(3000, function(){
  console.log("***** Escuchando en el puerto 3000");
});
