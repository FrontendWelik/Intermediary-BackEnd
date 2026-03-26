import express from "express";
let router = express.Router();

import userController from "./UserController.js";
import couserController from "./CourseControllerer.jsUserController.js";
import teacherController from "./TeacherController.jsUserController.js";
import evaluationController from "./EvaluationController.jsUserController.js";

router.get("/", function(req, res){
    console.log("oi");
    res.status(200).json({message: "oi"})
});

router.use("/", userController);
router.use("/", teacherController);
router.use("/", couserController);
router.use("/", evaluationController);

export default router