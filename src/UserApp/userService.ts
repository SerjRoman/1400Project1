import userRepository from "./userRepository";


async function authUser(email: string, password: string) {
    let user = await userRepository.findUserByEmail(email);
    // if (user){
    //     if (password == user.password){
    //         return user;
    //     }else {}
    // }else {}
    if (!user){
        return "error";
    }

    if (user.password != password){
        return "error";
    }

    return user;
}   

const userService = {
    authUser: authUser
}

export default userService;