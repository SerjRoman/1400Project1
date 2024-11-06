import client from "../client/prismaClient";


async function findUserByEmail(email: string){
    try{
        let user = await client.user.findUnique({
            where: {
                email: email
            }
        })

        return user;
    } catch(error){
        console.log(error);
    }
}

const userRepository = {
    findUserByEmail: findUserByEmail
}

export default userRepository;