import express from "express";
let router = express.Router();

import teacherService from "../services/teacherService.js";

router.post("/addTeacher", async function (req, res){
    const teacherModel = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            gender: req.body.gender,
    }

    const teacher = await teacherService.saveTeacher(teacherModel);
    return res.status(200).json(teacher);
});

router.get("/getAllTeacher", async function (req, res){
    const allTeacher = await teacherService.getAllTeacher();
    return res.status(200).json(allTeacher);
});

router.get("/teacher/:id", async function (req, res){
    const teacher = await teacherService.getTeacherByid(req.params.id);
    return res.status(200).json(teacher);
});

router.delete("/deleteTeacher/:id", async function (req, res){
    const teacher = await teacherService.deleteTeacherByid(req.params.id);
    return res.status(200).json(teacher);
});

router.put("/updateTeacher/:id", async function (req, res){
    const teacherModel = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            gender: req.body.gender,
    }

    const teacher = await userService.updateTeacherByid(req.params.id,teacherModel);
    return res.status(200).json(teacher);
});


export default router;