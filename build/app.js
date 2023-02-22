"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const posts_1 = require("./data/posts");
const searchById = () => {
    return posts_1.posts.filter(({ id }) => id >= 25 && id <= 41);
};
const getBodyLength = () => {
    let lengthOfBody;
    lengthOfBody = posts_1.posts.map((item) => {
        return Object.assign(Object.assign({}, item), { len: item.body.length });
    });
    return lengthOfBody;
};
const maxBodyLength = () => {
    let length;
    length = posts_1.posts.map(({ body }) => body.length);
    return Math.max(...length);
};
const findPostByBodyLength = () => {
    return posts_1.posts.find(({ body }) => body.length === maxBodyLength());
};
console.log((findPostByBodyLength()));
