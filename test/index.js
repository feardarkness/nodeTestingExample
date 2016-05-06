var should = require("should"),
  assert = require("assert"),
  request = require("supertest");     // para hacer los requests

var appUrl = "http://127.0.0.1:3000/v1";

describe("Verificar rutas", function(){
  describe("ruta personas", function(){
    it("debe existir la ruta /v1/personas", function(done){ // u need o pass done so async function exits
      request(appUrl)
        .get("/personas")
        .expect(200)
        .end(function(err, res){
          if(err){
            throw err;
          }
          done();
        });
    });

    it("la ruta /v1/personas debe devolver 'It Works'", function(done){ // u need o pass done so async function exits
      request(appUrl)
        .get("/personas")
        .expect(200)
        .end(function(err, res){
          if(err){
            throw err;
          }
          res.text.should.equal("diablos");
          done();
        });
    });

  });
});
