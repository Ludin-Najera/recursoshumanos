const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
//  app.use(function(req, res, next) {
//    res.header(
//      "Access-Control-Allow-Origin: *",
//      "Origin, Content-Type, Accept",
//      "Access-Control-Allow-Headers"
//    );
    
//    next();
//  });

  app.get("/api/test/all", controller.allAccess);
  
  //app.get("http://localhost:5000/empleados", controller.allAccess);
  
  

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};