// ROTA RAIZ : "/pacient/"

const express = require("express");
const routes = express.Router();
const controller = require("../controller/pacientController");

routes.post("/create", controller.createUserPacient);
routes.post("/login", controller.pacientLogin);
routes.get("/list", controller.getListPacients);
routes.get("/triage/:id", controller.getTriageInfoId);
routes.patch("/update/:id", controller.updateUserPacient);
routes.delete("/delete/:id", controller.deletePacient);





module.exports = routes