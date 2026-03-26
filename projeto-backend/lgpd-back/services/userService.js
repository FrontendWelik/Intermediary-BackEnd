import userRepository from "../repositories/userRepository.js"

const saveUser = (userModel) => {
    return userRepository.saveUser(userModel);
}


const getUserByid =(id) => {
    return userRepository.getUserByid(userModel);
}

const getAllUsers =() => {
    return userRepository.getAllUsers(userModel);
}

const deleteUserByid =(id) => {
    return userRepository.deleteUserByid(userModel);
}

const updateUserByid =(id, userModel) => {
    return userRepository.updateUserByid(id, userModel);
}



const service = {
    saveUser,
    getUserByid,
    getAllUsers,
    deleteUserByid,
    updateUserByid

}

export default service;