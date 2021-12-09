import { getCustomRepository } from "typeorm";
import { TagsRepositories} from "../repositories/TagsRepositories";


class CreateTagService {
    async execute(name: string){
        const tagsRepositories = getCustomRepository(TagsRepositories);

        if(!name){
            throw new Error ("Incorrect name!")
        }
        //Select * from Where Name = 'name' é exatamente isso que essa const fará.
        const tagAlreadyExists = await tagsRepositories.findOne({
            name,
        });

        if(tagAlreadyExists){
            throw new Error("Tag already exist!");
        }

        const tag = tagsRepositories.create({
            name,
        });

        await tagsRepositories.save(tag);

        return tag;
    }

}

export { CreateTagService};