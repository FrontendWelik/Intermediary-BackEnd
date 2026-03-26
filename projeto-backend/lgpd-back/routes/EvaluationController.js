import express from "express";
let router = express.Router();

import evaluetionService from "../services/evaluetionService.js";

router.post("/addEvaluation", async function (req, res){
    const evaluationModel = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            gender: req.body.gender,
    }

    const evaluation = await evaluationService.saveEvaluation(evaluationModel);
    return res.status(200).json(evaluation);
});

router.get("/getAllEvaluation", async function (req, res){
    const allEvaluation = await evaluationService.getAllEvaluation();
    return res.status(200).json(allEvaluation);
});

router.get("/evaluation/:id", async function (req, res){
    const evaluation = await evaluationService.getEvaluationByid(req.params.id);
    return res.status(200).json(evaluation);
});

router.delete("/deleteEvaluation/:id", async function (req, res){
    const evaluation = await evaluationService.deleteEvaluationByid(req.params.id);
    return res.status(200).json(evaluation);
});

router.put("/updateEvaluation/:id", async function (req, res){
    const evaluationModel = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            gender: req.body.gender,
    }

    const evaluation = await userService.updateEvaluationByid(req.params.id,evaluationModel);
    return res.status(200).json(evaluation);
});


export default router;