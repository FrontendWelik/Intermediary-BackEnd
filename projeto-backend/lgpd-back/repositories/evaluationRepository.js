import Evaluation from "../models/Evaluation.js";

const saveEvaluation = async (evaluationModel) => {
    const save = await Evaluation.create(evaluationModel);
    return save;
}

const getAllEvaluation = async () => {
   return await Evaluation.findAll({
         order: [
            ['id', 'ASC']
        ]
     });
}

const getEvaluationByid = async () => {
   return await Evaluation.findByPk(id)
}

const deleteEvaluationByid = async () => {
   return await Evaluation.destroy({where: {id: id}});
}

const updateEvaluationByid = async (id, EvaluationModel) => {
   try {
    const result = await Evaluation.update(EvaluationModel, {where: {id: id}});
    if(result[0]===1){
          return { message: "evaluation atualizado com sucesso"};
    }else {
        return { message: "não achou o usuario: ${id}", status: 404 };
    }
   } catch (error){
        console.error();
   }

};


const factory = {
    saveEvaluation,
    getAllEvaluation,
    getEvaluationByid,
    deleteEvaluationByid,
    updateEvaluationByid
}


export default factory