import { getCustomRepository } from "typeorm"; "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest{
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService{
    async execute ({ tag_id, user_receiver, user_sender, message} : IComplimentRequest){
        const complimentsRipositories = getCustomRepository(ComplimentsRepositories);
        const usersRipositories = getCustomRepository(UsersRepositories);

        if (user_sender === user_receiver){
            throw new Error("Incorrect user receiver");
        }

        const userReceiverExist = await usersRipositories.findOne(user_receiver);

        if (!userReceiverExist){
            throw new Error("User Receiver not exists");
        }

        const compliment = complimentsRipositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
            });

            await complimentsRipositories.save(compliment);

            return compliment;
        }        
    }

export { CreateComplimentService}