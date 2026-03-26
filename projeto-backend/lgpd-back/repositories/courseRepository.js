import User from "../models/User.js";

const saveCourse = async (courseModel) => {
    const save = await Course.create(courseModel);
    return save;
}

const getAllCourse = async () => {
   return await Course.findAll({
         order: [
            ['id', 'ASC']
        ]
     });
}

const getCourseByid = async () => {
   return await Course.findByPk(id)
}

const deleteCourseByid = async () => {
   return await Course.destroy({where: {id: id}});
}

const updateCourseByid = async (id, CourseModel) => {
   try {
    const result = await Course.update(CourseModel, {where: {id: id}});
    if(result[0]===1){
          return { message: "course atualizado com sucesso"};
    }else {
        return { message: "não achou o usuario: ${id}", status: 404 };
    }
   } catch (error){
        console.error();
   }

};


const factory = {
    saveCourse,
    getAllCourse,
    getCourseByid,
    deleteCourseByid,
    updateCourseByid
}


export default factory