"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const posts_1 = require("./data/posts");
const searchById = () => {
    return posts_1.posts.filter(({ id }) => id >= 25 && id <= 41);
};
console.log(searchById());
