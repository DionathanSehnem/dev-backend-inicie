// - [ ] Criar um novo comentário dentro do primeiro post da lista pública de posts;
// - [ ] Apagar o comentário criado no requisito acima;
// - [ ] Criar uma função para substituir os requests, um para get e outro para post;

const axios = require("axios");
require('dotenv').config();

let r = (Math.random() + 1).toString(36).substring(5);

const USER_DATA = {
    "name": `${r}`,
    "email": `${r}@${r}.com`, //`${r}@${r}.com`,
    "gender": "male",
    "status": "active"
}

main();

async function main() {
    const userID = await createNewUser();
    console.log("UserID: " + userID);
    const userData = await getUserByID(userID);
    console.log({ user: userData });
    const postID = await createNewPost(userID);
    console.log("PostID: " + postID);
    await createNewComment(postID, userData);
    await createCommentOnFirstPost(userData);
}

async function createNewUser() {
    try {
        const { data } = await axios.post(
            "https://gorest.co.in/public/v2/users", USER_DATA, {
                headers: {
                    Authorization: "Bearer " + process.env.TOKEN,
                },
            }
        );
        userID = data.id;
        return userID;
    } catch (error) {
        console.log(error);
    }
}

async function getUserByID(userID) {
    try {
        const { data } = await axios.get(
            "https://gorest.co.in/public/v2/users", {
                headers: {
                    Authorization: `Bearer ${process.env.TOKEN}`,
                },
            }
        );
        let userData;
        data.forEach(user => {
            if (userID == user.id) {
                userData = user;
            }
        });
        return userData;
    } catch (error) {
        console.log(error);
    }
}

async function createNewPost(userID) {
    try {
        const { data } = await axios.post(
            "https://gorest.co.in/public/v2/posts", {
                user_id: userID,
                title: `${r.toUpperCase()}`,
                body: `${r} ${r} ${r}`
            }, {
                headers: {
                    Authorization: "Bearer " + process.env.TOKEN,
                },
            }
        );
        return data.id;
    } catch (error) {
        console.log(error);
    }
}

async function createNewComment(postID, user) {
    try {
        const { data } = await axios.post(
            "https://gorest.co.in/public/v2/comments", {
                post_id: postID,
                name: user.name,
                email: user.email,
                body: `${r.toUpperCase()} ${r} ${r.toUpperCase()} ${r} ${r.toUpperCase()} ${r} `
            }, {
                headers: {
                    Authorization: "Bearer " + process.env.TOKEN,
                },
            }
        );
        console.log(data);
        return data.id;
    } catch (error) {
        console.log(error);
    }
}

async function createCommentOnFirstPost(user) {
    try {
        const { data } = await axios.get(
            "https://gorest.co.in/public/v2/posts", {
                headers: {
                    Authorization: `Bearer ${process.env.TOKEN}`,
                },
            }
        );
        console.log("1º Post ID: " + data[0].id)
        const commentID = await createNewComment(data[0].id, user);
        console.log("ID do comentário: " + commentID);
        return commentID;
    } catch (error) {
        console.log(error);
    }
}