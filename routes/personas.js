var express = require("express"),
    router = express.Router();

router.get("/personas", function(req, res){
    res.send("diablos");
});

module.exports = router;
