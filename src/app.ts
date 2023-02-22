import { posts } from "./data/posts";
import { Post } from "./models/Post";

const searchById = () : Post[] => {
    return posts.filter(({id}) => id >= 25 && id <= 41 )
}

const getBodyLength = () : object[] => {
    let lengthOfBody;
    lengthOfBody = posts.map((item) => {
        return {...item, len: item.body.length}
    } )
    return lengthOfBody;
}

const maxBodyLength = () : number => {
    let length: number[];
    length = posts.map(({body}) => body.length)
    return Math.max(...length);
}

const findPostByBodyLength = () => {
    return posts.find(({body}) => body.length === maxBodyLength() );
}



console.log((findPostByBodyLength()));