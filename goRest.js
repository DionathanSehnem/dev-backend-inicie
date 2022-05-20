const axios = require("axios");
require('dotenv').config();

const CONFIG_REQUEST = {
    headers: {
        Authorization: "Bearer " + process.env.TOKEN,
    },
}

//temporary code
let r = (Math.random() + 1).toString(36).substring(5);
const USER_DATA = {
    "name": `${r}`,
    "email": `${r}@${r}.com`, //`${r}@${r}.com`,
    "gender": "male",
    "status": "active"
}

module.exports = {
    createNewUser: async function() {
        try {
            const { data } = await axios.post(
                "https://gorest.co.in/public/v2/users", USER_DATA, CONFIG_REQUEST);
            console.log(`ID of Created User: ${data.id}`)
            return data.id;
        } catch (error) {
            console.log(error);
        }
    },

    getUserByID: async function(userID) {
        try {
            const { data } = await axios.get(
                "https://gorest.co.in/public/v2/users", CONFIG_REQUEST);
            let userData;
            data.forEach(user => {
                if (userID == user.id) {
                    userData = user;
                }
            });
            console.log(`ID of Found User: ${userData.id}`);
            return userData;
        } catch (error) {
            console.log(error);
        }
    },

    createNewPost: async function(userID) {
        try {
            const { data } = await axios.post(
                "https://gorest.co.in/public/v2/posts", {
                    user_id: userID,
                    title: `${r.toUpperCase()}`,
                    body: `${r} ${r} ${r}`
                }, CONFIG_REQUEST);
            console.log(`ID of Created Post: ${data.id}`);
            return data.id;
        } catch (error) {
            console.log(error);
        }
    },

    createNewComment: async function(postID, user) {
        try {
            const { data } = await axios.post(
                "https://gorest.co.in/public/v2/comments", {
                    post_id: postID,
                    name: user.name,
                    email: user.email,
                    body: `${r.toUpperCase()} ${r} ${r.toUpperCase()} ${r} ${r.toUpperCase()} ${r} `
                }, CONFIG_REQUEST);
            console.log(`ID of Created Comment: ${data.id}`);
            return data.id;
        } catch (error) {
            console.log(error);
        }
    },

    createCommentOnFirstPost: async function(user) {
        try {
            const { data } = await axios.get(
                "https://gorest.co.in/public/v2/posts", CONFIG_REQUEST);
            const commentID = await this.createNewComment(data[0].id, user);
            console.log(`ID of First Post: ${data[0].id}`)
            console.log(`ID of Created Comment on First Post: ${commentID}`);
            return commentID;
        } catch (error) {
            console.log(error);
        }
    },

    deleteComment: async function(commentID) {
        try {
            const { data } = await axios.delete(
                `https://gorest.co.in/public/v2/comments/${commentID}`, CONFIG_REQUEST);
            console.log(`The comment with id ${commentID} was successfully deleted!`)
        } catch (error) {
            console.log(error.response.data);
        }
    }
}