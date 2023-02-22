import { posts } from "./data/posts";
import { Post } from "./models/Post";

const searchById = () : Post[] => {
    return posts.filter(({id}) => id >= 25 && id <= 41 )
}



console.log(searchById())