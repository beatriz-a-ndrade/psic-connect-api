// ROTA RAIZ : "/volunteer/"

const express = require("express");
const routes = express.Router();
const controller = require("../controller/volunteerController"); 

routes.post("/create", controller.createUserVolunteer);
routes.post("/login", controller.volunteerLogin);
routes.get("/list", controller.getAllVolunteers);
routes.get("/list/on", controller.getVolunteersDisp);
routes.get("/find/:id", controller.getVolunteerId);
routes.patch("/update/:id", controller.updateUserVolunteer);
routes.delete("/delete/:id", controller.deleteVolunteer);


module.exports = routes