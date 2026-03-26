import teacherRepository from "../repositories/teacherRepository.js"


const saveTeacher = (teacherModel) => {
    return teacherRepository.saveTeacher(teacherModel);
}


const getTeacherByid =(id) => {
    return teacherRepository.getTeacherByid(teacherModel);
}

const getAllTeachers =() => {
    return teacherRepository.getAllTeachers(teacherModel);
}

const deleteTeacherByid =(id) => {
    return teacherRepository.deleteTeacherByid(teacherModel);
}

const updateTeacherByid =(id, teacherModel) => {
    return teacherRepository.updateTeacherByid(id, teacherModel);
}


const service = {
    saveTeacher,
    getAllTeachers,
    getTeacherByid,
    deleteTeacherByid,
    updateTeacherByid
    
}

export default service;