import Teacher from "../models/Teacher.js";

const saveTeacher = async (teacherModel) => {
    const save = await Teacher.create(teacherModel);
    return save;
}

const getAllTeacher = async () => {
   return await Teacher.findAll({
         order: [
            ['id', 'ASC']
        ]
     });
}

const getTeacherByid = async () => {
   return await Teacher.findByPk(id)
}

const deleteTeacherByid = async () => {
   return await Teacher.destroy({where: {id: id}});
}

const updateTeacherByid = async (id, TeacherModel) => {
   try {
    const result = await Teacher.update(TeacherModel, {where: {id: id}});
    if(result[0]===1){
          return { message: "teacher atualizado com sucesso"};
    }else {
        return { message: "não achou o usuario: ${id}", status: 404 };
    }
   } catch (error){
        console.error();
   }

};


const factory = {
    saveTeacher,
    getAllTeacher,
    getTeacherByid,
    deleteTeacherByid,
    updateTeacherByid
}

export default factory