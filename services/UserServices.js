import { Users } from "../data/db.js";
import User from "../models/User.js";
import { log } from "../utils/logger.js";

class UserService {
    createUser(name, email){
        const newUser = new User(Users.length + 1, name, email);
        Users.push(newUser);
        return newUser;
    };
    UpdateUser(id, name, email){
        let user = Users.find(x => x.id == id);
        if(!user){
            log("User topilmadi")
        }
        user.name = name;
        user.email = email
        return user
    }
    getAllUsers(){
        return Users
    }
}

export default new UserService()