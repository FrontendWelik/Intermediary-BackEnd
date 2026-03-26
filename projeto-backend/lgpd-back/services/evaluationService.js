import evaluationRepository from "../repositories/evaluationRepository.js"


const saveevaluation = (evaluationModel) => {
    return evaluationRepository.saveEvaluation(evaluationModel);
}


const getEvaluationByid =(id) => {
    return evaluationRepository.getEvaluationByid(evaluationModel);
}

const getAllEvaluations =() => {
    return evaluationRepository.getAllEvaluations(evaluationModel);
}

const deleteEvaluationByid =(id) => {
    return evaluationRepository.deleteEvaluationByid(evaluationModel);
}

const updateEvaluationByid =(id, evaluationModel) => {
    return evaluationRepository.updateEvaluationByid(id, evaluationModel);
}


const service = {
    saveEvaluation,
    getAllEvaluations,
    getEvaluationByid,
    deleteEvaluationByid,
    updateEvaluationByid
    
}

export default service;