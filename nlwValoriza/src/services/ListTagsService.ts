import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories";
import { instanceToPlain} from "class-transformer"


class ListTagsService{

    async execute(){
        const tagsRepositories = getCustomRepository(TagsRepositories);

        const tags = await tagsRepositories.find();

        //return classtoPlain(tags);
        return instanceToPlain(tags);
        //tive que usar outro metodo em vez de classToPlain
    }

} export {ListTagsService}