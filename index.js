const GoRest = require("./goRest.js")

main();

async function main() {

    const userID = await GoRest.createNewUser();
    console.log(`ID of Created User: ${userID}`)
    const userData = await GoRest.getUserByID(userID);
    console.log(`ID of Found User: ${userData.id}`);
    const postID = await GoRest.createNewPost(userID);
    console.log(`ID of Created Post: ${postID}`);
    const newComment = await GoRest.createNewComment(postID, userData);
    console.log(`ID of Created Comment: ${newComment}`);
    const commentFirstPostID = await GoRest.createCommentOnFirstPost(userData);
    console.log(`ID of Created Comment on First Post: ${commentFirstPostID}`);
    const deleteComment = await GoRest.deleteComment(commentFirstPostID);
    console.log(`The comment with id ${deleteComment} was successfully deleted!`)
}