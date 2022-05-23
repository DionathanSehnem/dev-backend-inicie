const GoRest = require("./goRest.js")

main();

async function main() {
    let r = (Math.random() + 1).toString(36).substring(5);
    const USER_DATA = {
        "name": `${r}`,
        "email": `${r}@${r}.com`, //`${r}@${r}.com`,
        "gender": "male",
        "status": "active"
    }

    const userID = await GoRest.createNewUser(USER_DATA);
    console.log(`ID of Created User: ${userID}`)
    const userData = await GoRest.getUserByID(userID);
    console.log(`ID of Found User: ${userData.id}`);
    const postID = await GoRest.createNewPost(userID);
    console.log(`ID of Created Post: ${postID}`);
    const newCommentID = await GoRest.createNewCommentID(postID, userData);
    console.log(`ID of Created Comment: ${newCommentID}`);
    const commentFirstPostID = await GoRest.createCommentOnFirstPost(userData);
    console.log(`ID of Created Comment on First Post: ${commentFirstPostID}`);
    const deletedCommentID = await GoRest.deleteComment(commentFirstPostID);
    console.log(`The comment with id ${deletedCommentID} was successfully deleted!`)
}