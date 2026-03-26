import courseRepository from "../repositories/courseRepository.js"


const saveCourse = (courseModel) => {
    return courseRepository.saveCourse(courseModel);
}


const getCourseByid =(id) => {
    return courseRepository.getCourseByid(courseModel);
}

const getAllCourses =() => {
    return courseRepository.getAllCourses(courseModel);
}

const deleteCourseByid =(id) => {
    return courseRepository.deleteCourseByid(courseModel);
}

const updateCourseByid =(id, courseModel) => {
    return courseRepository.updateCourseByid(id, courseModel);
}


const service = {
    saveCourse,
    getAllCourses,
    getCourseByid,
    deleteCourseByid,
    updateCourseByid
    
}

export default service;