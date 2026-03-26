import User from "../models/User.js";

const saveUser = async (userModel) => {
    const save = await User.create(userModel);
    return save;
}

const getAllUser = async () => {
   return await User.findAll({
         order: [
            ['id', 'ASC']
        ]
     });
}

const getUserByid = async () => {
   return await User.findByPk(id)
}

const deleteUserByid = async () => {
   return await User.destroy({where: {id: id}});
}

const updateUserByid = async (id, UserModel) => {
   try {
    const result = await User.update(UserModel, {where: {id: id}});
    if(result[0]===1){
          return { message: "user atualizado com sucesso"};
    }else {
        return { message: "não achou o usuario: ${id}", status: 404 };
    }
   } catch (error){
        console.error();
   }

};


const factory = {
    saveUser,
    getAllUser,
    getUserByid,
    deleteUserByid,
    updateUserByid




}

export default factory